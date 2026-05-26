/**
 * classroom.js
 * 课堂系统主逻辑
 *
 * 主入口：showLearnChoiceModal(item, items, title)
 *   弹出「好好学习 / 随便学学」选择弹窗
 *   → 好好学习：完整三阶段课堂（开场→讲课→测验→结算）
 *   → 随便学学：原有点击学习事件
 *
 * 依赖（均通过 window 访问）：
 *   window.costAction / doStudyLog / refreshAll / nextTime / syncActionUI
 *   window.courseDefault.getProfessorComment / getMuggleStudiesEvent
 *   window.subject_math 等分科数据
 *   window.renderLevelFn（course.js 暴露的刷新当前层函数）
 *   window.muggleSchedule（muggle-schedule.js 暴露的麻瓜课程表系统）
 */

import { loadSave } from './save-utils.js';
import { gradeOpenAnswer } from '../ai/grader.js';
import { onClassResult, onSubjectCompleted, onCourseSubjectCompleted, markCharacterKnown } from '../affinity-system.js';
import { GestureWidget } from '../gesture-widget.js';
import { getGestureById } from '../gesture-data.js';
import { MUGGLE_SUBJECTS, hasMetProfessor, markMetProfessor, recordStudyDate, advanceLesson } from './muggle-schedule.js';
import { getSubjectData, getAllLessons, getItemSubjectKey, scoreToRating, HOUSE_POINTS_MAP } from './utils.js';
import './subjects/flight.js';
import './subjects/apparition.js';
import { getCurrentLesson, getQuestionsForLesson, saveProgress, saveOpenAnswerEntry, saveAnswerEntry } from './classroom-progress.js';
import { doQuickStudy, doFocusedStudy } from './classroom-study-actions.js';
import {
  _formatContext,
  _renderBlackboard,
  _renderMiniQuestion,
  _renderMiniQuestionInline,
  _renderMiniLeadIn,
  _renderLectureText,
  _findCalculatorBlackboard,
  _withActiveCalculator,
} from './classroom-render-utils.js';

const ANALYSIS_COLOR_CLASS = {
  red: 'cls-rich-red',
  green: 'cls-rich-green',
  blue: 'cls-rich-blue',
  yellow: 'cls-rich-yellow',
  gold: 'cls-rich-gold',
  purple: 'cls-rich-purple',
  pink: 'cls-rich-pink',
  gray: 'cls-rich-gray',
  grey: 'cls-rich-gray',
};

function _escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function _formatAnalysisInline(value = '') {
  let html = _escapeHtml(value);
  html = html.replace(/`([^`]+)`/g, '<code class="cls-rich-code">$1</code>');
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');
  html = html.replace(/(^|[^\*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
  html = html.replace(/(^|[^_])_([^_\n]+)_/g, '$1<em>$2</em>');
  html = html.replace(/==([^=\n]+)==/g, '<mark>$1</mark>');
  html = html.replace(/\[(red|green|blue|yellow|gold|purple|pink|gray|grey)\]([\s\S]*?)\[\/\1\]/gi, (_, color, text) => {
    return `<span class="${ANALYSIS_COLOR_CLASS[color.toLowerCase()]}">${text}</span>`;
  });
  html = html.replace(/「([^」]+)」/g, '<span class="cls-fb-quote">「$1」</span>');
  return html;
}

function _isAnalysisSpeakerLine(line) {
  return /^[\u4e00-\u9fa5A-Za-z0-9·]{1,16}：$/.test(line);
}

function _renderAnalysisBlock(block) {
  const lines = block
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean);

  if (!lines.length) return '';

  if (lines.every(line => line.startsWith('- '))) {
    const items = lines
      .map(line => `<li>${_formatAnalysisInline(line.slice(2).trim())}</li>`)
      .join('');
    return `<ul class="cls-fb-list">${items}</ul>`;
  }

  const out = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const next = lines[i + 1];

    if (_isAnalysisSpeakerLine(line) && next) {
      out.push(`
        <div class="cls-fb-script">
          <div class="cls-fb-speaker-line">${_escapeHtml(line)}</div>
          <div class="cls-fb-dialogue-line">${_formatAnalysisInline(next)}</div>
        </div>`);
      i++;
      continue;
    }

    const inlineSpeaker = line.match(/^([\u4e00-\u9fa5A-Za-z0-9·]{1,16}(?:教授|老师|先生|小姐|女士|双胞胎|同学|学生)(?:强调|提醒|说明|指出|说|问|回答)?：)\s*(.+)$/);
    if (inlineSpeaker) {
      out.push(`
        <div class="cls-fb-script">
          <div class="cls-fb-speaker-line">${_escapeHtml(inlineSpeaker[1])}</div>
          <div class="cls-fb-dialogue-line">${_formatAnalysisInline(inlineSpeaker[2])}</div>
        </div>`);
      continue;
    }

    out.push(`<p>${_formatAnalysisInline(line)}</p>`);
  }
  return out.join('');
}

function _renderAnalysisRichText(analysis) {
  const text = String(analysis || '').trim();
  if (!text) return '';

  const blocks = text
    .split(/\r?\n\s*\r?\n/)
    .map(block => block.trim())
    .filter(Boolean)
    .map(_renderAnalysisBlock)
    .join('');

  return `
    <div class="cls-fb-analysis cls-fb-rich">
      <div class="cls-fb-rich-title">解析</div>
      ${blocks}
    </div>`;
}

// ── 课时工具 ─────────────────────────────────────────────

// ════════════════════════════════════════════════════════════
//  选择弹窗
// ════════════════════════════════════════════════════════════

export function showLearnChoiceModal(item, items, title) {
  document.getElementById("cls-choice-modal")?.remove();

  // 同时支持麻瓜研究（muggleSubjectKey）和霍格沃茨课程（hogwartsSubjectKey）
  const subjectKey  = getItemSubjectKey(item);
  const subjectData = subjectKey ? getSubjectData(subjectKey) : null;
  const hasLesson   = !!(subjectData?.syllabus);
  const availability = window.courseAttendance?.validateCourseAccess?.(item);
  if (availability && !availability.ok) {
    window.doStudyLog?.(availability.message);
    return;
  }

  const modal = document.createElement("div");
  modal.id = "cls-choice-modal";
  modal.className = "cls-choice-overlay";

  modal.innerHTML = `
    <div class="cls-choice-box">
      <div class="cls-choice-subject">
        ${item.icon || "📚"} ${item.name}
      </div>
      <div class="cls-choice-title">选择学习方式</div>
      <div class="cls-choice-btns">
        <button class="cls-choice-btn cls-choice-hard" id="cls-btn-hard">
          <div class="cls-choice-icon">📖</div>
          <div class="cls-choice-name">好好学习</div>
          <div class="cls-choice-desc">${hasLesson ? "开课·讲课·测验·评分" : "认真研习·课堂笔记"}<br>按课表上课</div>
        </button>
        <button class="cls-choice-btn cls-choice-easy" id="cls-btn-easy">
          <div class="cls-choice-icon">⚡</div>
          <div class="cls-choice-name">随便学学</div>
          <div class="cls-choice-desc">快速学习·随机事件<br>按课表上课</div>
        </button>
      </div>
      <button class="cls-choice-cancel" id="cls-btn-cancel">取消</button>
    </div>`;

  document.body.appendChild(modal);
  document.body.classList.add("modal-open");

  function close() {
    modal.remove();
    document.body.classList.remove("modal-open");
  }

  document.getElementById("cls-btn-hard")?.addEventListener("click", () => {
    close();
    enterClassroom(item, subjectKey, subjectData, items, title);
  });
  document.getElementById("cls-btn-easy").addEventListener("click", () => {
    close();
    doQuickStudy(item, items, title);
  });
  document.getElementById("cls-btn-cancel").addEventListener("click", close);
  modal.addEventListener("click", e => { if (e.target === modal) close(); });
}

// ════════════════════════════════════════════════════════════
//  随便学学（原有快速学习逻辑）
// ════════════════════════════════════════════════════════════

// ════════════════════════════════════════════════════════════
//  好好学习 — 完整课堂流程
// ════════════════════════════════════════════════════════════
function enterClassroom(item, subjectKey, subjectData, items, title) {
  if (!item.unlock) {
    window.doStudyLog?.(`❌ 无法进入课堂【${item.name}】：需要 ${item.unlockGrade} 年级`);
    return;
  }
  const availability = window.courseAttendance?.validateCourseAccess?.(item);
  if (availability && !availability.ok) {
    window.doStudyLog?.(availability.message);
    return;
  }

  if (!subjectData?.syllabus) {
    doFocusedStudy(item, items, title);
    return;
  }

  const lessonBase = getCurrentLesson(subjectKey);
  if (!lessonBase) {
    window.doStudyLog?.(`✅ ${item.name} 所有课时已完成`);
    return;
  }
  window.courseAttendance?.markAttended?.(item);
  // 从 lessonMap 合并完整内容（opening/atmosphere/keyPoints含context）
  const lessonExtra = subjectData.lessonMap?.[lessonBase.lesson] || {};
  const lesson = { ...lessonBase, ...lessonExtra };
  const qGroup = getQuestionsForLesson(subjectData.questionBank, lesson.lesson);

  _buildPanel(item, subjectKey, subjectData, lesson, qGroup, () => {
    window.refreshAll?.();
    window.loadCourseProgressFromSave?.();
    window.renderLevelFn?.(items, title);
  });
}

// ── 课堂内部状态 ─────────────────────────────────────────
// 统一用一个对象管理，方便面板销毁时整体 reset
let _clsState = null;

function _resetState() { _clsState = null; }

function resetClassroom() {
  document.getElementById("classroomPanel")?.remove();
  const cm = document.getElementById("courseMain");
  if (cm) cm.style.display = "";
  _resetState();
}

// ── 课堂面板外框 ─────────────────────────────────────────
function _buildPanel(item, subjectKey, subjectData, lesson, qGroup, onClose) {
  document.getElementById("classroomPanel")?.remove();
  const courseMain = document.getElementById("courseMain");
  if (courseMain) courseMain.style.display = "none";

  const prefix = item.muggleSubjectKey ? "麻瓜研究" : "霍格沃茨";

  const panel = document.createElement("div");
  panel.id = "classroomPanel";
  panel.className = "cls-panel";
  panel.innerHTML = `
    <div class="cls-header">
      <div class="cls-subject-icon">${subjectData.subjectMeta.icon || "📚"}</div>
      <div class="cls-header-info">
        <div class="cls-subject-line">${prefix} · ${subjectData.subjectMeta.name}</div>
        <div class="cls-lesson-title">${lesson.title}</div>
        <div class="cls-prof-line">${subjectData.subjectMeta.professor} · 第 ${lesson.lesson} 课</div>
      </div>
      <div class="cls-phase-badge" id="cls-phase-badge">📍 导入</div>
    </div>
    <div class="cls-open-container">
      <div class="cls-phase-steps">
        <div class="cls-step cls-step-active" id="cls-s0" data-phase="0">🕯️ 开场</div>
        <div class="cls-step" id="cls-s1" data-phase="1">📖 讲课</div>
        <div class="cls-step" id="cls-s2" data-phase="2">📝 测验</div>
        <div class="cls-step" id="cls-s3" data-phase="3">🎓 结算</div>
      </div>
    </div>
    <div class="cls-body" id="cls-body"></div>`;

  const card = document.getElementById("actionMain")?.closest(".card") || document.body;
  card.appendChild(panel);
  panel.querySelector(".cls-phase-steps")?.addEventListener("click", event => {
    const step = event.target.closest(".cls-step[data-phase]");
    if (!step) return;
    jumpToPhase(Number(step.dataset.phase));
  });

  _clsState = {
    st: { kpIdx:0, qIdx:0, score:0, answered:false, maxPhase:0, kpQA:false, kpCorrect:null, kpFeedback:false, kpAnsweredIdx:null, kpCalcDone:false, kpCalcStep:0, kpCalcDisplay:null, kpCalcIntroDone:false, kpBoardSeen:false, openAnswerTimestamp:null },
    subjectKey,
    sd: subjectData,
    lesson,
    qGroup,
    onClose,
    isMuggleStudy: !!item.muggleSubjectKey,
  };
  const { st, sd, onClose: oc } = _clsState;
  _phaseOpening(st, subjectKey, sd, lesson, qGroup, oc);
}

function _setPhase(n) {
  const labels = ["📍 导入","📖 讲课","📝 测验","🎓 结算"];
  const badge = document.getElementById("cls-phase-badge");
  if (badge) badge.textContent = labels[n];
  const st = _clsState?.st;
  if (st && n > st.maxPhase) st.maxPhase = n;
  for (let i = 0; i < 4; i++) {
    const el = document.getElementById(`cls-s${i}`);
    if (!el) continue;
    const reached = st ? i <= st.maxPhase : i === 0;
    el.className = "cls-step" + (i<n?" cls-step-done":i===n?" cls-step-active":"");
    el.style.cursor = reached ? "pointer" : "not-allowed";
    el.style.opacity = reached ? "1" : "0.35";
  }
}

function jumpToPhase(target) {
  if (!_clsState || target > _clsState.st.maxPhase) return;
  const { st, subjectKey, sd, lesson, qGroup, onClose } = _clsState;
  if (target === 0) {
    _phaseOpening(st, subjectKey, sd, lesson, qGroup, onClose);
  } else if (target === 1) {
    st.kpIdx = 0; st.kpQA = false; st.kpCorrect = null; st.kpFeedback = false; st.kpAnsweredIdx = null; st.kpCalcDone = false; st.kpCalcStep = 0; st.kpCalcDisplay = null; st.kpCalcIntroDone = false; st.kpBoardSeen = false;
    _phaseLecture(st, subjectKey, sd, lesson, qGroup, onClose);
  } else if (target === 2) {
    // 注意：从步骤条回跳测验会重置本轮分数，相当于重新作答
    if (qGroup) { st.qIdx = 0; st.score = 0; st.answered = false; }
    _phaseQuiz(st, subjectKey, sd, lesson, qGroup, onClose);
  } else if (target === 3) {
    _phaseResult(st, subjectKey, sd, lesson, qGroup, onClose);
  }
}

window._clsJumpToPhase = jumpToPhase;

// ── 第一阶段：开场 ────────────────────────────────────────
function _phaseOpening(st, subjectKey, sd, lesson, qGroup, onClose) {
  _setPhase(0);
  const body = document.getElementById("cls-body");
  const openingBlackboard = _buildOpeningBlackboard(lesson);
  if (!body) return;

  // 检查是否是第一次上麻瓜课程（需要触发教授自我介绍）
  const isMuggleFirstTime = MUGGLE_SUBJECTS.includes(subjectKey) && !hasMetProfessor(subjectKey);

  if (isMuggleFirstTime) {
    // 显示教授自我介绍
    const intro = window.muggleSchedule?.professorIntroductions?.[subjectKey];
    body.innerHTML = `
      ${lesson.atmosphere ? `<div class="cls-atmosphere">${lesson.atmosphere}</div>` : ""}
      ${openingBlackboard ? _renderBlackboard(openingBlackboard, "opening") : ""}
      <div class="cls-opening cls-opening-intro">
        <div class="cls-opening-label">🎭 ${intro?.professor || sd.subjectMeta.professor}</div>
        <div class="cls-opening-portrait">${intro?.portrait || ""}</div>
        <div class="cls-opening-text cls-opening-intro-text">${_formatContext(intro?.introduction || "教授走进了教室。")}</div>
      </div>
      <div class="cls-nav">
        <button class="cls-btn-advance" id="cls-start">开始上课 →</button>
      </div>`;

    document.getElementById("cls-start").onclick = () => {
      // 标记已见过教授
      markMetProfessor(subjectKey);
      _phaseLecture(st, subjectKey, sd, lesson, qGroup, onClose);
    };
  } else {
    // 常规开场
    body.innerHTML = `
      ${lesson.atmosphere ? `<div class="cls-atmosphere">${lesson.atmosphere}</div>` : ""}
      ${openingBlackboard ? _renderBlackboard(openingBlackboard, "opening") : ""}
      <div class="cls-opening">
        <div class="cls-opening-label">🎭 ${sd.subjectMeta.professor}</div>
        <div class="cls-opening-text">${_formatContext(lesson.opening || "教授走进了教室。")}</div>
      </div>
      <div class="cls-nav">
        <button class="cls-btn-advance" id="cls-start">开始上课 →</button>
      </div>`;
    document.getElementById("cls-start").onclick = () => _phaseLecture(st, subjectKey, sd, lesson, qGroup, onClose);
  }
}

function _buildOpeningBlackboard(lesson) {
  const text = `${lesson?.atmosphere || ""}\n${lesson?.opening || ""}`;
  if (!/(黑板上画|示意图)/.test(text)) return null;

  const diagramMatch =
    text.match(/黑板上画着([^。]+?示意图)/) ||
    text.match(/黑板上是([^。]+?示意图)/) ||
    text.match(/旁边是([^。]+?示意图)/) ||
    text.match(/画了(?:一个|一张|几个|三个)?([^。：「」]+?示意图)/);
  const diagram = diagramMatch?.[1]?.trim() || "本课核心示意图";
  const topicMatch = (lesson?.opening || "").match(/学习([^！」，。]+)/);
  const topic = topicMatch?.[1]?.replace(/[——-].*$/, "").trim();

  return {
    type: "formulas",
    label: "课堂示意图",
    lines: [
      `图示：${diagram}`,
      topic ? `主题：${topic}` : "先看图中对象、箭头、因果关系",
      "观察：结构 / 方向 / 变化 / 结果"
    ]
  };
}

const SUBJECT_BOARD_STYLE = {
  potions: {
    heading: "配方线索",
    flow: ["材料", "火候", "步骤", "魔力"],
    note: "先看材料，再看处理顺序；差一处，整锅都会变味。",
    visual: "potionFlow"
  },
  charms: {
    heading: "施法结构",
    flow: ["意志", "发音", "手势", "目标"],
    note: "声音、手腕和注意力要落在同一个点上。",
    visual: "gesturePath"
  },
  transfiguration: {
    heading: "变形框架",
    flow: ["对象", "形态", "限制", "风险"],
    note: "先确认对象本质，再谈变化边界。"
  },
  defense: {
    heading: "防御判断",
    flow: ["识别", "距离", "反制", "撤离"],
    note: "先活下来，再追求漂亮的反击。"
  },
  herbology: {
    heading: "观察记录",
    flow: ["部位", "习性", "处理", "用途"],
    note: "植物不会按课本顺序长，观察要比动作更早。",
    visual: "plantDiagram"
  },
  magicHistory: {
    heading: "史学线索",
    flow: ["时间", "主体", "因果", "影响"],
    note: "年份写在边上；因果比形容词重要。"
  },
  astronomy: {
    heading: "观测提纲",
    flow: ["方位", "周期", "星象", "记录"],
    note: "先定位，再解释；不要把浪漫写成数据。",
    visual: "starMap"
  },
  flight: {
    heading: "飞行要领",
    flow: ["姿态", "平衡", "速度", "路线"],
    note: "身体先稳住，扫帚才会听话。",
    visual: "flightRoute"
  },
  careOfMagicalCreatures: {
    heading: "照护顺序",
    flow: ["习性", "距离", "安抚", "风险"],
    note: "先读懂反应，再伸手。"
  },
  divination: {
    heading: "解读路径",
    flow: ["征象", "语境", "可能性", "验证"],
    note: "看见征兆不等于得到答案。"
  },
  ancientRunes: {
    heading: "符文拆解",
    flow: ["字形", "音值", "语境", "组合"],
    note: "每一笔都可能改变意思。"
  },
  arithmancy: {
    heading: "数字推演",
    flow: ["数值", "模式", "对应", "结论"],
    note: "算完之后，还要解释为什么。"
  },
  alchemy: {
    heading: "炼金链条",
    flow: ["物质", "转化", "媒介", "代价"],
    note: "真正重要的不是变成什么，而是如何变成。"
  },
  apparition: {
    heading: "移形步骤",
    flow: ["目标", "决心", "从容", "抵达"],
    note: "目的地越清楚，身体越不容易抗议。"
  },
  math: {
    heading: "数学推演",
    flow: ["条件", "模型", "运算", "结论"],
    note: "先写清已知条件，再把每一步运算和理由对齐。",
    visual: "gesturePath"
  },
  physics: {
    heading: "物理分析",
    flow: ["现象", "受力", "公式", "验证"],
    note: "先判断系统和方向，再代入公式；单位会替你抓住很多错误。",
    visual: "flightRoute"
  },
  chemistry: {
    heading: "反应路径",
    flow: ["物质", "条件", "变化", "产物"],
    note: "观察颜色、气体、沉淀和能量变化，再判断反应类型。",
    visual: "potionFlow"
  },
  biology: {
    heading: "生命结构",
    flow: ["结构", "功能", "调节", "适应"],
    note: "先看结构层级，再说明它如何服务功能和生存环境。",
    visual: "plantDiagram"
  },
  history: {
    heading: "历史线索",
    flow: ["时间", "人物", "原因", "影响"],
    note: "把事件放回时间线上，因果关系比单个年份更重要。"
  },
  civics: {
    heading: "制度分析",
    flow: ["权利", "规则", "责任", "判断"],
    note: "先分清事实、价值和规则，再给出判断。"
  },
  geography: {
    heading: "地理框架",
    flow: ["位置", "环境", "流动", "影响"],
    note: "地图先定位，图表看变化，最后解释人与环境的关系。",
    visual: "starMap"
  },
  literature: {
    heading: "文本解读",
    flow: ["情节", "人物", "语言", "主题"],
    note: "先找文本证据，再解释它怎样推动人物和主题。"
  },
  latin: {
    heading: "语法拆解",
    flow: ["词尾", "功能", "语序", "翻译"],
    note: "先看词尾判断功能，再把句子还原成清楚的关系。",
    visual: "gesturePath"
  },
  muggleStudies: {
    heading: "观察框架",
    flow: ["物品", "习惯", "制度", "误解"],
    note: "先观察麻瓜如何使用，再判断为什么这样设计。"
  }
};

function _buildLessonBlackboard(point, lesson, subjectKey, subjectName = "课程") {
  const parts = String(point || "")
    .split(/[：；，、]/)
    .map(part => part.trim())
    .filter(Boolean);
  const style = SUBJECT_BOARD_STYLE[subjectKey] || {
    heading: "课堂提纲",
    flow: ["概念", "关系", "步骤", "例子"],
    note: "抓住关键词；把关系和步骤写清楚。"
  };
  const topic = lesson?.title || `第${lesson?.lesson || ""}课`;
  const hasOutline = parts.length > 1;
  const outline = parts.length ? parts.slice(0, 3) : [String(point || "").trim()].filter(Boolean);
  const lines = [
    `本节：${topic}`,
    `${style.heading}：${style.flow.join(" → ")}`,
    hasOutline ? "课堂要点：" : "核心概念：",
    ...outline.map(part => `- ${part}`)
  ];

  const textBoard = {
    type: "formulas",
    label: `${subjectName}板书`,
    lines,
    note: style.note
  };
  return style.visual
    ? [{ type: "visual", label: `${subjectName}图示`, visual: style.visual }, textBoard]
    : textBoard;
}

// ── 小黑板 SVG 数轴生成器 ────────────────────────────────────
// ── 第二阶段：讲课 ────────────────────────────────────────
function _phaseLecture(st, subjectKey, sd, lesson, qGroup, onClose) {
  _setPhase(1);
  const kps = lesson.keyPoints || [];

  function resetKeyPointInteraction() {
    st.kpQA = false;
    st.kpCorrect = null;
    st.kpFeedback = false;
    st.kpAnsweredIdx = null;
    st.kpCalcDone = false;
    st.kpCalcStep = 0;
    st.kpCalcDisplay = null;
    st.kpCalcIntroDone = false;
    st.kpBoardSeen = false;
  }

  function render() {
    const body = document.getElementById("cls-body");
    if (!body) return;
    const kp         = kps[st.kpIdx];
    const point      = typeof kp === "string" ? kp : (kp?.point || "");
    const _ctx       = typeof kp === "string" ? null : (kp?.context || null);
    const context    = typeof kp === "string" ? null
      : st.kpQA && st.kpCorrect  === true  && kp?.contextRight ? kp.contextRight
      : st.kpQA && st.kpCorrect  === false && kp?.contextWrong ? kp.contextWrong
      : _ctx;
    const question   = typeof kp === "string" ? null : (kp?.question || null);
    const interactionContext = typeof kp === "string" ? null
      : (kp?.interactionContext || kp?.blackboardQ?.leadIn || null);
    const isLast     = st.kpIdx === kps.length - 1;
    const interactiveBlackboard = typeof kp === "string" ? null : (kp?.blackboardQ || null);
    const calculatorBlackboard = _findCalculatorBlackboard(interactiveBlackboard);
    const calcSequence = calculatorBlackboard && Array.isArray(calculatorBlackboard.sequence)
      ? calculatorBlackboard.sequence
      : null;
    const isCalculatorSequenceQuestion = !!(calculatorBlackboard && calcSequence && question);
    const showCalcIntro = !!(isCalculatorSequenceQuestion && question?.leadIn && !st.kpCalcIntroDone && !st.kpCalcDone && !st.kpQA && !st.kpFeedback);
    const showCalcSequence = !!(calcSequence && !showCalcIntro && !st.kpCalcDone && !st.kpQA && !st.kpFeedback);
    const showCompletedCalcSequence = !!(calcSequence && st.kpCalcDone && !question && !st.kpQA);
    const showCompletedCalcQuestion = !!(isCalculatorSequenceQuestion && st.kpCalcDone && !st.kpQA && !st.kpFeedback);
    const showAnsweredCompletedCalcQuestion = !!(isCalculatorSequenceQuestion && st.kpCalcDone && st.kpFeedback && !st.kpQA);
    const showQ      = !!(question && !st.kpQA && !st.kpFeedback && !showCalcSequence && !showCompletedCalcQuestion);
    const showAnsweredMiniQuestion = !!(question && st.kpFeedback && !showCalcSequence && !showAnsweredCompletedCalcQuestion);
    const showBoardInteraction = !!(!question && calculatorBlackboard && !calcSequence && !st.kpQA);
    const activeCalcKey = showCalcSequence ? calcSequence[st.kpCalcStep || 0] : calculatorBlackboard?.highlightKey;
    const calcDisplay = showCalcSequence
      ? (st.kpCalcDisplay ?? calculatorBlackboard?.display ?? "0")
      : st.kpCalcDone && calculatorBlackboard
        ? (st.kpCalcDisplay ?? calculatorBlackboard.result ?? calculatorBlackboard.display)
      : calculatorBlackboard?.display;
    const fallbackBlackboard = typeof kp !== "string" && !kp?.blackboard && !interactiveBlackboard
      ? _buildLessonBlackboard(point, lesson, subjectKey, sd.subjectMeta?.name)
      : null;
    const showBoardPreview = false;
    const blackboard = typeof kp === "string" ? null
      : ((showQ || showAnsweredMiniQuestion || showBoardInteraction || showCalcIntro || showCalcSequence || showCompletedCalcSequence || showCompletedCalcQuestion || showAnsweredCompletedCalcQuestion) && interactiveBlackboard
        ? _withActiveCalculator(interactiveBlackboard, calculatorBlackboard, calcDisplay, activeCalcKey)
        : (kp?.blackboard || fallbackBlackboard));

    body.innerHTML = `
      <div class="cls-dots">
        ${kps.map((_,i) => `<div class="cls-dot${i<st.kpIdx?" cls-dot-done":i===st.kpIdx?" cls-dot-active":""}"></div>`).join("")}
      </div>
      <div class="cls-kp-card">
        <div class="cls-kp-header">
          <div class="cls-kp-num">${st.kpIdx+1}</div>
          <div class="cls-kp-point">${point}</div>
        </div>
        ${blackboard ? _renderBlackboard(blackboard, `kp-${st.kpIdx}`) : ""}
        ${showBoardPreview
          ? `<div class="cls-board-preview">
              <div class="cls-board-preview-text">先抄下板书，再听教授展开。</div>
            </div>`
          : showCalcIntro
          ? _renderMiniLeadIn(interactionContext)
          : showCalcSequence
          ? `<div class="cls-mini-q">
              ${question?.leadIn ? `<div class="cls-mini-leadin">${_formatContext(question.leadIn)}</div>` : ""}
              ${question ? _renderMiniQuestionInline(question, true) : ""}
            </div>`
          : showCompletedCalcSequence
          ? _renderLectureText(interactionContext)
          : showCompletedCalcQuestion
          ? `<div class="cls-mini-q">
              ${question?.leadIn ? `<div class="cls-mini-leadin">${_formatContext(question.leadIn)}</div>` : ""}
              ${_renderMiniQuestionInline(question)}
            </div>`
          : showAnsweredCompletedCalcQuestion
          ? `<div class="cls-mini-q">
              ${question?.leadIn ? `<div class="cls-mini-leadin">${_formatContext(question.leadIn)}</div>` : ""}
              ${_renderMiniQuestionInline(question)}
            </div>`
          : showQ
          ? _renderMiniQuestion(question)
          : showAnsweredMiniQuestion
          ? _renderMiniQuestion(question)
          : showBoardInteraction
            ? _renderLectureText(interactionContext)
            : _renderLectureText(context)}
      </div>
      ${showAnsweredMiniQuestion || showAnsweredCompletedCalcQuestion || showCompletedCalcSequence ? `
      <div class="cls-nav">
        <button class="cls-btn-advance" id="cls-mini-continue">继续 →</button>
      </div>` : showCalcIntro ? `
      <div class="cls-nav">
        <button class="cls-btn-pri" id="cls-calc-intro-next">下一步 →</button>
      </div>` : showBoardPreview ? `
      <div class="cls-nav">
        ${st.kpIdx > 0
          ? `<button class="cls-btn-sec" id="cls-prev">← 上一条</button>`
          : `<button class="cls-btn-sec" id="cls-to-opening">← 返回开场</button>`}
        <button class="cls-btn-pri" id="cls-board-continue">听讲解 →</button>
      </div>` : showQ || showBoardInteraction || showCalcSequence || showCompletedCalcQuestion ? "" : `
      <div class="cls-nav">
        ${st.kpIdx > 0
          ? `<button class="cls-btn-sec" id="cls-prev">← 上一条</button>`
          : `<button class="cls-btn-sec" id="cls-to-opening">← 返回开场</button>`}
        ${isLast
          ? `<button class="cls-btn-advance" id="cls-to-quiz">随堂测验 →</button>`
          : `<button class="cls-btn-pri" id="cls-next">下一条 →</button>`}
      </div>`}`;

    if (showCalcIntro) {
      document.getElementById("cls-calc-intro-next")?.addEventListener("click", () => {
        st.kpCalcIntroDone = true;
        render();
      });
    } else if (showCalcSequence && calculatorBlackboard) {
      document.querySelectorAll(".cls-calc-key").forEach(k => {
        k.addEventListener("click", () => {
          const pressed = k.dataset.key;
          const expected = calcSequence[st.kpCalcStep || 0];
          k.style.transform = "scale(0.92)";
          setTimeout(() => { k.style.transform = ""; }, 100);
          if (pressed !== expected) return;

          if (pressed === "|x|") {
            st.kpCalcDisplay = calculatorBlackboard.result ?? st.kpCalcDisplay ?? "";
          } else {
            const base = st.kpCalcDisplay == null || st.kpCalcDisplay === "0" ? "" : String(st.kpCalcDisplay);
            st.kpCalcDisplay = `${base}${pressed}`;
          }
          st.kpCalcStep = (st.kpCalcStep || 0) + 1;

          if (st.kpCalcStep >= calcSequence.length) {
            st.kpCalcDone = true;
            setTimeout(render, 450);
          } else {
            render();
          }
        });
      });
    } else if ((showQ || showCompletedCalcQuestion) && question) {
      document.querySelectorAll(".cls-mini-opt").forEach(btn => {
        btn.onclick = () => {
          const chosen = parseInt(btn.dataset.idx);
          const correct = chosen === question.answer;
          st.kpAnsweredIdx = chosen;
          saveAnswerEntry(subjectKey, lesson, {
            type: "choice",
            question: question.text || question.prompt || "",
            answer: question.options?.[chosen] ?? chosen,
            correctAnswer: question.options?.[question.answer] ?? question.answer,
            correct,
            score: correct ? 1 : 0,
            maxScore: 1,
            feedback: question.analysis || ""
          });
          document.querySelectorAll(".cls-mini-opt").forEach((b, i) => {
            b.disabled = true;
            if (i === question.answer) b.classList.add("cls-mini-opt-correct");
            else if (parseInt(b.dataset.idx) === chosen && !correct) b.classList.add("cls-mini-opt-wrong");
          });
          st.kpCorrect = correct;
          setTimeout(() => { st.kpFeedback = true; render(); }, 650);
        };
      });
    } else if ((showAnsweredMiniQuestion || showAnsweredCompletedCalcQuestion) && question) {
      document.querySelectorAll(".cls-mini-opt").forEach(btn => {
        const idx = parseInt(btn.dataset.idx);
        btn.disabled = true;
        if (idx === question.answer) btn.classList.add("cls-mini-opt-correct");
        else if (idx === st.kpAnsweredIdx) btn.classList.add("cls-mini-opt-wrong");
      });
      document.getElementById("cls-mini-continue")?.addEventListener("click", () => {
        st.kpQA = true;
        st.kpFeedback = false;
        render();
      });
    } else if (showCompletedCalcSequence) {
      document.getElementById("cls-mini-continue")?.addEventListener("click", () => {
        st.kpQA = true;
        render();
      });
    } else if (showBoardInteraction && calculatorBlackboard) {
      document.querySelectorAll(".cls-calc-key:not(.cls-calc-key-hl)").forEach(k => {
        k.addEventListener("click", () => {
          k.style.transform = "scale(0.92)";
          setTimeout(() => { k.style.transform = ""; }, 100);
        });
      });
      const hlKey = document.querySelector(".cls-calc-key-hl");
      if (hlKey) {
        hlKey.style.cursor = "pointer";
        hlKey.addEventListener("click", () => {
          const display = document.querySelector(".cls-calc-display");
          if (display && calculatorBlackboard.result != null) {
            display.textContent = calculatorBlackboard.result;
            display.style.color = "#8ae09a";
          }
          hlKey.classList.add("cls-calc-key-pressed");
          st.kpCorrect = true;
          setTimeout(() => { st.kpQA = true; render(); }, 900);
        });
      }
    } else if (showBoardPreview) {
      document.getElementById("cls-prev")?.addEventListener("click", () => { st.kpIdx--; resetKeyPointInteraction(); render(); });
      document.getElementById("cls-to-opening")?.addEventListener("click", () => {
        _phaseOpening(st, subjectKey, sd, lesson, qGroup, onClose);
      });
      document.getElementById("cls-board-continue")?.addEventListener("click", () => {
        st.kpBoardSeen = true;
        render();
      });
    } else {
      document.getElementById("cls-prev")?.addEventListener("click", () => { st.kpIdx--; resetKeyPointInteraction(); render(); });
      document.getElementById("cls-to-opening")?.addEventListener("click", () => {
        _phaseOpening(st, subjectKey, sd, lesson, qGroup, onClose);
      });
      document.getElementById("cls-next")?.addEventListener("click", () => { st.kpIdx++; resetKeyPointInteraction(); render(); });
      document.getElementById("cls-to-quiz")?.addEventListener("click", () => {
        if (qGroup) { st.qIdx=0; st.score=0; st.answered=false; _phaseQuiz(st,subjectKey,sd,lesson,qGroup,onClose); }
        else _phaseResult(st,subjectKey,sd,lesson,null,onClose);
      });
    }
  }
  render();
}

// ── 第三阶段：测验 ────────────────────────────────────────
function _phaseQuiz(st, subjectKey, sd, lesson, qGroup, onClose) {
  _setPhase(2);

  function render() {
    const body = document.getElementById("cls-body");
    if (!body) return;
    const q = qGroup.questions[st.qIdx];
    const isLast = st.qIdx === qGroup.questions.length - 1;
    const diffLabel = {basic:"基础",medium:"进阶",hard:"压轴"}[q.difficulty] || "";

    // ── gesture 题型分支 ──────────────────────────────────
    if (q.type === "gesture") {
      st.answered = false;  // 重置答题状态
      const gesture = getGestureById(q.gestureId);
      body.innerHTML = `
        <div class="cls-quiz-header">
          <span class="cls-quiz-count">第 ${st.qIdx+1} 题 / 共 ${qGroup.questions.length} 题</span>
          <span class="cls-diff-badge cls-diff-${q.difficulty}">${diffLabel} · 手势</span>
        </div>
        <div class="cls-question">${q.text}</div>
        <div class="cls-gest-block">
          <div class="cls-gest-desc">${gesture ? gesture.description : "（手势数据缺失）"}</div>
          <div id="cls-gest-mount"></div>
        </div>
        <div class="cls-feedback" id="cls-fb"></div>
        <div class="cls-nav" id="cls-qnav" style="display:none">
          ${isLast
            ? `<button class="cls-btn-advance" id="cls-to-result">查看结果 →</button>`
            : `<button class="cls-btn-advance" id="cls-next-q">下一题 →</button>`}
        </div>`;

      if (gesture) {
        const mount = document.getElementById("cls-gest-mount");
        GestureWidget.render(mount, gesture, {
          mode: "classroom",
          timeLimit: null,           // 课堂不限时
          showLabel: true,
          onComplete: ({ success, accuracy, hitCount }) => {
            if (st.answered) return;
            st.answered = true;

            // 评分：全部节点命中得满分，部分命中按比例，完全失败扣分（hard）
            const totalNodes = gesture.nodes.length;
            if (success) {
              const pct = accuracy;
              if (pct >= 0.85)      st.score += 2;
              else if (pct >= 0.50) st.score += 1;
              // pct<0.5 得0分
            } else {
              if (q.difficulty === "hard") st.score -= 1;
            }

            const gestureScore = success
              ? (accuracy >= 0.85 ? 2 : accuracy >= 0.50 ? 1 : 0)
              : (q.difficulty === "hard" ? -1 : 0);
            saveAnswerEntry(subjectKey, lesson, {
              type: "gesture",
              question: q.text,
              answer: `${Math.round(accuracy * 100)}%`,
              correctAnswer: ">= 50%",
              correct: success,
              score: gestureScore,
              maxScore: 2,
              feedback: q.analysis || ""
            });

            const fb = document.getElementById("cls-fb");
            if (fb) {
              const pctText = Math.round(accuracy * 100);
              if (success) {
                fb.className = "cls-feedback cls-fb-show cls-fb-right";
                fb.innerHTML = `
                  <div class="cls-fb-tag cls-fb-r">✦ 手势成功！精准度 ${pctText}%</div>
                  ${_renderAnalysisRichText(q.analysis)}`;
              } else {
                fb.className = "cls-feedback cls-fb-show cls-fb-wrong";
                fb.innerHTML = `
                  <div class="cls-fb-tag cls-fb-w">✗ 手势不完整（完成 ${hitCount}/${totalNodes} 个节点）</div>
                  ${_renderAnalysisRichText(q.analysis)}`;
              }
            }
            const nav = document.getElementById("cls-qnav");
            if (nav) nav.style.display = "flex";
            document.getElementById("cls-next-q")?.addEventListener("click", () => { st.qIdx++; render(); });
            document.getElementById("cls-to-result")?.addEventListener("click", () =>
              _phaseResult(st, subjectKey, sd, lesson, qGroup, onClose));
          }
        });
      }
      return;  // gesture 题型处理完毕
    }

    // ── 开放题（教授判题） ─────────────────────────────────
    if (q.type === "open") {
      body.innerHTML = `
        <div class="cls-quiz-header">
          <span class="cls-quiz-count">开放题（教授判题）</span>
          <span class="cls-diff-badge cls-diff-subjective">主观题</span>
        </div>
        <div class="cls-question">${q.text}</div>
        <div class="cls-open-hint">
          <textarea id="cls-open-ta" rows="5" maxlength="600"
            placeholder="请用文字写出你的答案……"
            class="cls-open-textarea"></textarea>
          <div class="cls-open-counter">
            <span id="cls-open-cnt">0</span> / 600
          </div>
        </div>
        <div class="cls-feedback" id="cls-fb"></div>
        <div class="cls-open-api-note">
          💡 教授判题需要网络连接。可在右上角⚙️配置自己的 API Key。
        </div>
        <div class="cls-nav cls-nav-wide">
          <button id="cls-open-skip" class="cls-open-skip-btn">
            跳过此题
          </button>
          <button class="cls-btn-sec cls-btn-journal" id="cls-journal-btn">📖 答题记录</button>
          <button class="cls-btn-advance" id="cls-open-submit">提交答案 →</button>
        </div>`;

      const ta = document.getElementById("cls-open-ta");
      ta?.addEventListener("input", () => {
        document.getElementById("cls-open-cnt").textContent = ta.value.length;
      });

      document.getElementById("cls-open-api-link")?.addEventListener("click", (e) => {
        e.preventDefault();
        if (typeof openFeedback === "function") {
          openFeedback();
          // 自动切换到 API Key 标签
          setTimeout(() => {
            document.querySelector('.modal-tab[data-tab="api-key"]')?.click();
          }, 50);
        }
      });

      document.getElementById("cls-open-skip")?.addEventListener("click", () => {
        _phaseResult(st, subjectKey, sd, lesson, qGroup, onClose);
      });

      document.getElementById("cls-journal-btn")?.addEventListener("click", () => {
        window.courseUI?.showAnswerJournal?.(subjectKey, lesson.lesson, lesson.title, sd.subjectMeta?.professor);
      });

      document.getElementById("cls-open-submit").addEventListener("click", async () => {
        const answer = ta?.value?.trim();
        const fb = document.getElementById("cls-fb");
        if (!answer) {
          if (fb) {
            fb.className = "cls-feedback cls-fb-show cls-fb-wrong";
            fb.innerHTML = `<div class="cls-fb-tag cls-fb-w">请先输入你的答案</div>`;
          }
          return;
        }

        // 进入 loading 状态
        const submitBtn = document.getElementById("cls-open-submit");
        if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "教授判题中…"; }
        if (fb) {
          fb.className = "cls-feedback cls-fb-show";
          fb.style.background = "rgba(108,92,231,0.1)";
          fb.innerHTML = `<div class="cls-ai-loading">🪶 教授判题中…</div>`;
        }

        // 降级评分函数：基于关键词匹配
        function extractFallbackKeywords(point) {
          if (typeof point === 'object' && point !== null) {
            return point.keywords || [point.text || ''].filter(Boolean);
          }
          const text = String(point);
          const keywords = [];
          // 括号内的提示词优先（如"（数到零的距离，或去掉符号后的值）"）
          const bracketMatches = text.match(/[（(]([^）)]+)[）)]/g) || [];
          bracketMatches.forEach(m => {
            const inner = m.replace(/^[（(]|[）)]$/g, '');
            inner.split(/[、，,或以及]/).forEach(kw => {
              const clean = kw.replace(/^(如|例如|比如|等)+/, '').trim();
              if (clean.length >= 2) keywords.push(clean);
            });
          });
          // 括号外：按标点拆分，取 2-8 字的短语
          const mainText = text.replace(/[（(][^）)]*[）)]/g, '');
          mainText.split(/[、，,。：:（(]/).forEach(chunk => {
            const c = chunk.replace(/^(正确|合理|举出|说明|解释|描述|阐述)+/, '').trim();
            if (c.length >= 2 && c.length <= 8) keywords.push(c);
          });
          return keywords.length > 0 ? keywords : [text];
        }

        function fallbackGrade() {
          const scoringPoints = q.scoringPoints || [];
          const maxScore = q.maxScore || 4;
          const professor = sd.subjectMeta?.professor || '';
          let score = 0;
          const achieved = [];

          scoringPoints.forEach((point, idx) => {
            const keywords = extractFallbackKeywords(point);
            const found = keywords.some(kw => answer.includes(kw));
            if (found) {
              score += 1;
              achieved.push(typeof point === 'object' ? (point.text || `要点${idx + 1}`) : `要点${idx + 1}`);
            }
          });

          // 答案有实质内容但关键词未命中时给基础分，避免认真作答却得零
          if (score === 0 && answer.length >= 20) {
            score = Math.max(1, Math.floor(maxScore * 0.25));
          }
          // 较长答案酌情加分
          if (answer.length > 100 && score < maxScore) score = Math.min(maxScore, score + 1);
          if (answer.length > 200 && score < maxScore) score = Math.min(maxScore, score + 1);

          return {
            score,
            maxScore,
            feedback: getFallbackFeedback(score, maxScore, professor),
            pointsAchieved: achieved
          };
        }

        // 各教授在 AI 不可用时的降级评语风格
        const PROFESSOR_FALLBACK_FEEDBACK = {
          "奥古斯都·芬威克": {
            high:    "定义把握准确，例子亦能支撑概念。",
            mid:     "有数学直觉，但定义表述尚需规范。",
            low:     "方向有了，回去看定义再来。",
            zero:    "回去看定义。"
          },
          "塔维什·麦克拉伦": {
            high:    "概念准确，例子有效。",
            mid:     "方向对，细节不够精准。",
            low:     "有方向，概念还需核实。",
            zero:    "概念偏差，重新核查。"
          },
          "普里姆罗斯·斯普劳特": {
            high:    "说得很好，例子也很贴切，你理解了！",
            mid:     "有想法，再想想核心概念，你快到了。",
            low:     "有一些想法，没关系，我们再来一遍。",
            zero:    "别急，慢慢来，再读一读讲义吧。"
          },
          "康斯坦丝·沙克博特": {
            high:    "论证完整，前提与推理均成立。",
            mid:     "方向正确，但推理过程还需补充。",
            low:     "你的前提是什么？先把它说清楚。",
            zero:    "没有论证，这不算回答。"
          },
          "菲利克斯·韦斯莱": {
            high:    "答得不错！思路清晰，例子也有意思！",
            mid:     "有自己的想法，再把核心概念补充一下！",
            low:     "好的开始！把概念再想深一点。",
            zero:    "哎，再想想，你肯定有想法的！"
          },
          "赫伯特·宾斯二世": {
            high:    "太好了！脉络清晰，联系也到位！",
            mid:     "有历史感！再补充一下背景就更完整了。",
            low:     "思路有了，再往深处想想！",
            zero:    "是我没讲清楚，我们再来一遍！"
          },
          "米兰达·珀西瓦尔": {
            high:    "不错。",
            mid:     "概念基本准确，表达尚欠精确。",
            low:     "有偏差。请重读定义。",
            zero:    "不准确。"
          },
          "伊莱莎·洛夫古德": {
            high:    "你感受到了，写得很有温度。",
            mid:     "有感受，再慢慢读一读，让它更清晰。",
            low:     "你再读一遍，慢慢的——有什么让你停下来了吗？",
            zero:    "没关系，再读一遍，慢慢感受。"
          },
          "塞拉菲娜·穆迪": {
            high:    "漂亮！就是这个！",
            mid:     "物理直觉有了！再把推理过程补全。",
            low:     "炸了不过炸也是数据——方向再调整一下。",
            zero:    "完全没想到物理？再读读讲义，来一次！"
          }
        };

        function getFallbackFeedback(score, max, professor) {
          const style = PROFESSOR_FALLBACK_FEEDBACK[professor];
          const pct = score / max;
          if (style) {
            if (pct >= 0.75) return style.high;
            if (pct >= 0.5)  return style.mid;
            if (pct > 0)     return style.low;
            return style.zero;
          }
          // 通用后备
          if (pct >= 0.75) return "回答完整，思路清晰。";
          if (pct >= 0.5)  return "有一定深度，可进一步完善。";
          if (pct > 0)     return "有方向，继续加油。";
          return "请再想想，结合讲义重新作答。";
        }

        let retryCount = 0;
        const maxRetries = 2;

        async function attemptGrade() {
          try {
            const result = await gradeOpenAnswer({
              question:      q.text,
              scoringPoints: q.scoringPoints || [],
              maxScore:      q.maxScore || 4,
              studentAnswer: answer,
              subject:       sd.subjectMeta?.name  || "学科",
              lessonTitle:   lesson.title           || "",
              professor:     sd.subjectMeta?.professor || "教授"
            });

            if (!result) {
              // 用户跳过了 API Key 输入，使用降级评分
              return fallbackGrade();
            }

            return result;
          } catch (err) {
            retryCount++;
            if (retryCount <= maxRetries) {
              console.warn(`教授判题失败，重试第 ${retryCount} 次:`, err.message);
              await new Promise(resolve => setTimeout(resolve, 1000 * retryCount));
              return attemptGrade();
            }
            console.error(`教授判题多次失败，使用降级评分:`, err.message);
            throw err;
          }
        }

        try {
          const result = await attemptGrade();

          // 保存开放题结果到状态
          st.openScore          = result.score;
          st.openMaxScore       = result.maxScore;
          st.openFeedback       = result.feedback;
          st.openPointsAchieved = result.pointsAchieved || [];
          st.openAnswer         = answer;
          st.openQuestion       = q.text;
          saveOpenAnswerEntry(st, subjectKey, lesson, null);

          const pct       = result.score / result.maxScore;
          const fbClass   = pct >= 0.75 ? "cls-fb-right" : pct > 0 ? "" : "cls-fb-wrong";
          const scoreTag  = pct >= 0.75 ? "✦ 优秀" : pct >= 0.5 ? "◎ 良好" : pct > 0 ? "△ 部分得分" : "✗ 未得分";

          if (fb) {
            fb.style.background = "";
            fb.className = `cls-feedback cls-fb-show ${fbClass}`;
            fb.innerHTML = `
              <div class="cls-fb-tag ${pct >= 0.75 ? "cls-fb-r" : pct > 0 ? "" : "cls-fb-w"}">
                ${scoreTag} · ${result.score} / ${result.maxScore} 分
              </div>
              ${result.pointsAchieved.length
                ? `<div class="cls-fb-analysis cls-fb-extra">
                     <span class="cls-fb-kp">✓ 得分点：</span>${result.pointsAchieved.join("、")}
                   </div>`
                : ""}
              <div class="cls-fb-analysis cls-fb-italic">
                "${result.feedback}"
              </div>`;
          }

          const nav = body.querySelector(".cls-nav");
          if (nav) {
            nav.innerHTML = `
              <button class="cls-btn-sec cls-btn-journal" id="cls-journal-btn">📖 答题记录</button>
              <button class="cls-btn-advance" id="cls-to-result">查看结果 →</button>`;
            document.getElementById("cls-journal-btn")?.addEventListener("click", () => {
              window.courseUI?.showAnswerJournal?.(subjectKey, lesson.lesson, lesson.title, sd.subjectMeta?.professor);
            });
            document.getElementById("cls-to-result")?.addEventListener("click", () =>
              _phaseResult(st, subjectKey, sd, lesson, qGroup, onClose));
          }

        } catch (err) {
          // 所有重试都失败，使用降级评分
          const result = fallbackGrade();
          st.openScore = result.score;
          st.openMaxScore = result.maxScore;
          st.openFeedback = result.feedback;
          st.openPointsAchieved = result.pointsAchieved;
          st.openAnswer   = answer;
          st.openQuestion = q.text;
          saveOpenAnswerEntry(st, subjectKey, lesson, null);

          const pct = result.score / result.maxScore;
          const fbClass = pct >= 0.75 ? "cls-fb-right" : pct > 0 ? "" : "cls-fb-wrong";
          const scoreTag = pct >= 0.75 ? "✦ 优秀" : pct >= 0.5 ? "◎ 良好" : pct > 0 ? "△ 部分得分" : "✗ 未得分";

          if (fb) {
            fb.style.background = "";
            fb.className = `cls-feedback cls-fb-show ${fbClass}`;
            fb.innerHTML = `
              <div class="cls-fb-tag ${pct >= 0.75 ? "cls-fb-r" : pct > 0 ? "" : "cls-fb-w"}">
                ${scoreTag} · ${result.score} / ${result.maxScore} 分
                <span class="cls-fb-meta">（自动评分）</span>
              </div>
              ${result.pointsAchieved.length
                ? `<div class="cls-fb-analysis cls-fb-extra">
                     <span class="cls-fb-kp">✓ 得分点：</span>${result.pointsAchieved.join("、")}
                   </div>`
                : ""}
              <div class="cls-fb-analysis cls-fb-italic">
                "${result.feedback}"
              </div>
              <div class="cls-fb-analysis cls-fb-muted">
                教授暂时无法连线，已使用自动判题
              </div>`;
          }

          const nav = body.querySelector(".cls-nav");
          if (nav) {
            nav.innerHTML = `
              <button class="cls-btn-sec cls-btn-journal" id="cls-journal-btn">📖 历史答题记录</button>
              <button class="cls-btn-advance" id="cls-to-result">查看结果 →</button>`;
            document.getElementById("cls-journal-btn")?.addEventListener("click", () => {
              window.courseUI?.showAnswerJournal?.(subjectKey, lesson.lesson, lesson.title, sd.subjectMeta?.professor);
            });
            document.getElementById("cls-to-result")?.addEventListener("click", () =>
              _phaseResult(st, subjectKey, sd, lesson, qGroup, onClose));
          }
        }
      });

      return;  // open 题型处理完毕
    }

    // ── 普通选择题（原有逻辑） ────────────────────────────
    body.innerHTML = `
      <div class="cls-quiz-header">
        <span class="cls-quiz-count">第 ${st.qIdx+1} 题 / 共 ${qGroup.questions.length} 题</span>
        <span class="cls-diff-badge cls-diff-${q.difficulty}">${diffLabel}</span>
      </div>
      ${q.leadIn ? `<div class="cls-leadin">${q.leadIn}</div>` : ""}
      <div class="cls-question">${q.text}</div>
      <div class="cls-options" id="cls-opts">
        ${q.options.map(opt=>`<button class="cls-option" data-val="${opt[0]}">${opt}</button>`).join("")}
      </div>
      <div class="cls-feedback" id="cls-fb"></div>
      <div class="cls-nav" id="cls-qnav" style="display:none">
        ${isLast
          ? `<button class="cls-btn-advance" id="cls-to-result">查看结果 →</button>`
          : `<button class="cls-btn-advance" id="cls-next-q">下一题 →</button>`}
      </div>`;

    st.answered = false;
    document.querySelectorAll(".cls-option").forEach(btn => {
      btn.onclick = () => {
        if (st.answered) return;
        st.answered = true;
        const chosen = btn.dataset.val;
        const right  = chosen === q.answer;
        if (right) st.score += 2;
        else if (q.difficulty === "hard") st.score -= 1;
        saveAnswerEntry(subjectKey, lesson, {
          type: q.type || "choice",
          question: q.text,
          answer: q.options?.find(opt => opt[0] === chosen) || chosen,
          correctAnswer: q.options?.find(opt => opt[0] === q.answer) || q.answer,
          correct: right,
          score: right ? 2 : (q.difficulty === "hard" ? -1 : 0),
          maxScore: 2,
          feedback: q.analysis || ""
        });

        document.querySelectorAll(".cls-option").forEach(b => {
          b.disabled = true;
          if (b.dataset.val === q.answer) b.classList.add("cls-option-correct");
          else if (b.dataset.val === chosen && !right) b.classList.add("cls-option-wrong");
        });

        const fb = document.getElementById("cls-fb");
        if (fb) {
          fb.className = "cls-feedback cls-fb-show cls-fb-" + (right ? "right" : "wrong");
          fb.innerHTML = `
            <div class="cls-fb-tag ${right?"cls-fb-r":"cls-fb-w"}">${right?"✓ 正确":"✗ 错误"}</div>
            ${_renderAnalysisRichText(q.analysis)}`;
        }
        const nav = document.getElementById("cls-qnav");
        if (nav) nav.style.display = "flex";
        document.getElementById("cls-next-q")?.addEventListener("click", () => { st.qIdx++; render(); });
        document.getElementById("cls-to-result")?.addEventListener("click", () =>
          _phaseResult(st,subjectKey,sd,lesson,qGroup,onClose));
      };
    });
  }
  render();
}

// ── 第四阶段：结算 ────────────────────────────────────────
function _phaseResult(st, subjectKey, sd, lesson, qGroup, onClose) {
  _setPhase(3);
  const body = document.getElementById("cls-body");
  if (!body) return;

  const rating = qGroup ? scoreToRating(st.score) : null;
  const housePoints = rating ? (HOUSE_POINTS_MAP[rating] || 0) : 0;
  const isMuggle = _clsState?.isMuggleStudy ?? true;
  let comment = "";
  if (rating) {
    comment = window.courseDefault?.getProfessorComment(subjectKey, rating) || "";
    if (!comment && sd.professorComments?.[rating]?.length) {
      const list = sd.professorComments[rating];
      comment = list[Math.floor(Math.random() * list.length)];
    }
  }

  saveProgress(subjectKey, lesson.lesson, rating);

  saveOpenAnswerEntry(st, subjectKey, lesson, rating);

  // 麻瓜课程：记录学习日期并推进课程进度
  if (MUGGLE_SUBJECTS.includes(subjectKey)) {
    recordStudyDate(subjectKey);
    advanceLesson(subjectKey);
  }

  // ── 学生角色好感度系统（维度一 + 维度四）──────────────────
  if (rating) {
    // 维度一：行动触发偶遇
    window.affinityUI?.tryStudentActionEncounter('courseStudy');

    // 维度四：专属条件触发
    window.affinityUI?.checkStudentSpecialTriggers('courseGrade', {
      subject: sd.subjectMeta?.name || subjectKey,
      subjectKey,
      rating: rating
    });

    // 草药学特殊触发 → 纳威
    if (subjectKey === 'herbology') {
      window.affinityUI?.checkStudentSpecialTriggers('goodStudy', { subject: '草药学' });
    }
  }

  // 好感度触发（麻瓜分科用英文键；霍格沃茨课程用中文科目名对照 COURSE_TO_CHARACTER）
  if (rating) {
    if (isMuggle) onClassResult(subjectKey, rating, true);
    else onClassResult(sd.subjectMeta.name, rating, false);
  }

  // 上课即认识教授
  const charKey = isMuggle
    ? window.affinitySystem?.SUBJECT_TO_CHARACTER?.[subjectKey]
    : window.affinitySystem?.COURSE_TO_CHARACTER?.[sd.subjectMeta.name];
  if (charKey) markCharacterKnown(charKey);

  if (!st._worldEchoRecorded) {
    st._worldEchoRecorded = true;
    window.npcEvents?.recordClassEcho?.({
      subjectKey,
      subjectName: sd.subjectMeta?.name || subjectKey,
      lessonNumber: lesson.lesson,
      lessonTitle: lesson.title,
      professor: sd.subjectMeta?.professor,
      rating,
      isMuggle,
      characterKey: charKey,
      housePoints,
    });
  }

  // 检查是否全部课时完成（触发一次性 +10）
  const allLessons = getAllLessons(sd.syllabus);
  const done = loadSave().course?.muggleProgress?.[subjectKey]?.completed || [];
  if (allLessons.length > 0 && done.length >= allLessons.length) {
    if (isMuggle) onSubjectCompleted(subjectKey);
    else onCourseSubjectCompleted(sd.subjectMeta.name);
  }

  const HOUSE_EMOJI = { "格兰芬多":"🦁", "斯莱特林":"🐍", "拉文克劳":"🦅", "赫奇帕奇":"🦡" };
  const houseEmoji = HOUSE_EMOJI[loadSave()?.player?.house] || "🏠";
  const logMsg = rating
    ? `🎓 ${sd.subjectMeta.name}·第${lesson.lesson}课《${lesson.title}》评级 ${rating}，${houseEmoji}学院分 ${housePoints>=0?"+":""}${housePoints}`
    : `🎓 ${sd.subjectMeta.name}·第${lesson.lesson}课《${lesson.title}》已完成`;
  window.doStudyLog?.(logMsg);
  window._questHook_courseStudy?.(true);

  const ratingColor = {O:"#ffd700",E:"#98e898",A:"#aad4f0",P:"#ccc",D:"#f88",T:"#f44"}[rating] || "#aaa";
  const gradeText = {O:"Outstanding · 卓越",E:"Exceeds Expectations · 超预期",A:"Acceptable · 合格",P:"Poor · 欠佳",D:"Dreadful · 糟糕",T:"Troll · 极差"}[rating] || "";

  // 选择题数量（排除开放题）
  const choiceCount = (qGroup?.questions?.filter(q => q.type !== "open")?.length || 0);

  // 开放题结果（如有）
  const hasOpenResult = st.openScore != null;
  const openPct = hasOpenResult ? st.openScore / st.openMaxScore : 0;
  const openScoreColor = openPct >= 0.75 ? "#98e898" : openPct >= 0.5 ? "#aad4f0" : openPct > 0 ? "#f0c878" : "#f88";

  body.innerHTML = `
    <div class="cls-result-card">
      <div class="cls-result-lesson">第 ${lesson.lesson} 课《${lesson.title}》· 课程结束</div>
      ${rating ? `
        <div class="cls-result-rating" style="color:${ratingColor}">${rating}</div>
        <div class="cls-result-grade" style="color:${ratingColor}">${gradeText}</div>
        <div class="cls-result-score">${st.score} 分 · 满分 ${choiceCount * 2} 分</div>
        <div class="cls-result-hp ${housePoints>=0?"cls-hp-plus":"cls-hp-minus"}">
          学院分 ${housePoints>=0?"+":""}${housePoints}
        </div>` : `<div class="cls-result-no-quiz">本课已完成，知识已记录。</div>`}
      ${hasOpenResult ? `
        <div class="cls-open-review">
          <div class="cls-open-review-title">📝 教授判题</div>
          <div class="cls-open-review-score" style="color:${openScoreColor}">
            得分：${st.openScore} / ${st.openMaxScore}
            ${st.openPointsAchieved?.length ? `<span class="cls-open-review-tags">· ${st.openPointsAchieved.join("、")}</span>` : ""}
          </div>
          <div class="cls-open-review-text">"${st.openFeedback}"</div>
        </div>` : ""}
      ${comment ? `
        <div class="cls-result-comment">
          <div class="cls-comment-prof">👤 ${sd.subjectMeta.professor}</div>
          <div class="cls-comment-text">"${comment}"</div>
        </div>` : ""}
    </div>
    <div class="cls-result-actions">
      <button class="cls-btn-sec cls-btn-journal" id="cls-journal-btn">📖 历史答题记录</button>
      <button class="cls-btn-leave" id="cls-leave">离开教室 →</button>
    </div>`;

  document.getElementById("cls-leave").onclick = () => {
    resetClassroom();
    onClose?.();
  };

  const journalBtn = document.getElementById("cls-journal-btn");
  if (journalBtn) {
    journalBtn.addEventListener("click", () => {
      window.courseUI?.showAnswerJournal?.(subjectKey, lesson.lesson, lesson.title, sd.subjectMeta?.professor);
    });
  }
}

// ── 全局挂载 ─────────────────────────────────────────────
window.classroom = { showLearnChoiceModal, resetClassroom };

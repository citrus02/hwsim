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

import { loadSave, writeSave } from './save-utils.js';
import { gradeOpenAnswer } from '../ai/grader.js';
import { onClassResult, onSubjectCompleted, onCourseSubjectCompleted, markCharacterKnown } from '../affinity-system.js';
import { GestureWidget } from '../gesture-widget.js';
import { getGestureById } from '../gesture-data.js';
import { MUGGLE_SUBJECTS, hasMetProfessor, markMetProfessor, recordStudyDate, getCurrentLesson as getMuggleCurrentLesson, advanceLesson } from './muggle-schedule.js';
import { SUBJECT_WIN_KEY, SUBJECT_NAME_KEY, HOGWARTS_SUBJECT_KEYS, getSubjectData, getAllLessons, getItemSubjectKey, scoreToRating, HOUSE_POINTS_MAP } from './utils.js';
import './subjects/flight.js';
import './subjects/apparition.js';

// ── 课时工具 ─────────────────────────────────────────────

function getCurrentLesson(subjectKey) {
  const data = getSubjectData(subjectKey);
  if (!data) return null;
  const all = getAllLessons(data.syllabus);

  // 麻瓜课程使用特殊课时逻辑：基于课程表和学习进度
  if (MUGGLE_SUBJECTS.includes(subjectKey)) {
    const currentLessonNum = getMuggleCurrentLesson(subjectKey);
    return all.find(l => l.lesson === currentLessonNum) || all[all.length - 1];
  }

  // 霍格沃茨课程使用原有逻辑
  const prog = loadSave().course?.muggleProgress?.[subjectKey] || {};
  const done = [...(prog.completed || []), ...(prog.expired || [])];
  return all.find(l => !done.includes(l.lesson)) || all[all.length - 1];
}

function getQuestionsForLesson(questionBank, lessonNum) {
  return (questionBank || []).find(q => q.lesson === lessonNum) || null;
}

// ── 结算写档 ─────────────────────────────────────────────
function saveProgress(subjectKey, lessonNum, rating) {
  const data = loadSave();
  if (!data.course) data.course = {};
  if (!data.course.muggleProgress) data.course.muggleProgress = {};
  if (!data.course.muggleProgress[subjectKey])
    data.course.muggleProgress[subjectKey] = { completed: [], expired: [] };

  const prog = data.course.muggleProgress[subjectKey];
  if (!prog.completed.includes(lessonNum)) prog.completed.push(lessonNum);

  // ── 霍格沃茨课程：按完成课时数更新 data.course[课程名] ──
  const sd = getSubjectData(subjectKey);
  if (sd) {
    const total = getAllLessons(sd.syllabus).length;
    const done  = new Set([...(prog.completed || []), ...(prog.expired || [])]).size;
    const pct   = total > 0 ? Math.floor(done / total * 100) : 0;
    // 找到课程对应的中文名写入 data.course
    const courseName = sd.subjectMeta?.name;
    if (courseName) data.course[courseName] = pct;
  }

  // ── 麻瓜研究总进度（九门均值）──────────────────────────
  const MUGGLE_KEYS = Object.keys(SUBJECT_WIN_KEY).filter(k => !HOGWARTS_SUBJECT_KEYS.has(k));
  let totalRate = 0;
  MUGGLE_KEYS.forEach(k => {
    const sd2 = getSubjectData(k);
    if (!sd2) return;
    const total = getAllLessons(sd2.syllabus).length;
    const p = data.course.muggleProgress?.[k] || {};
    const done  = new Set([...(p.completed || []), ...(p.expired || [])]).size;
    totalRate += total > 0 ? Math.floor(done / total * 100) : 0;
  });
  if (MUGGLE_KEYS.length > 0)
    data.course["麻瓜研究"] = Math.round(totalRate / MUGGLE_KEYS.length);

  writeSave(data);

  // ── 学院分 ──────────────────────────────────────────────
  if (rating && HOUSE_POINTS_MAP[rating]) {
    const hpData   = loadSave();
    const pKey     = window.housePoints?.HOUSE_MAP?.[hpData.player?.house];
    if (pKey && window.housePoints?.HOUSE_DISPLAY?.[pKey]) {
      if (!hpData.housePoints || typeof hpData.housePoints !== "object")
        hpData.housePoints = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
      hpData.housePoints[pKey] = Math.max(0, (hpData.housePoints[pKey] || 0) + HOUSE_POINTS_MAP[rating]);
      writeSave(hpData);
    }
  }

  window.refreshAll?.();
  window.autoUnlockByCourse?.();
}

function saveOpenAnswerEntry(st, subjectKey, lesson, rating = null) {
  if (st.openScore == null || !st.openAnswer) return;
  const data = loadSave();
  const key = `${subjectKey}_${lesson.lesson}`;
  const timestamp = st.openAnswerTimestamp || Date.now();
  st.openAnswerTimestamp = timestamp;

  if (!data.openAnswers) data.openAnswers = {};
  if (!data.openAnswers[key]) data.openAnswers[key] = [];

  const entry = {
    answer:         st.openAnswer,
    question:       st.openQuestion || "",
    score:          st.openScore,
    maxScore:       st.openMaxScore,
    feedback:       st.openFeedback,
    pointsAchieved: st.openPointsAchieved || [],
    lessonTitle:    lesson.title,
    lessonNum:      lesson.lesson,
    rating,
    timestamp
  };

  const existingIdx = data.openAnswers[key].findIndex(e => e.timestamp === timestamp);
  if (existingIdx >= 0) data.openAnswers[key][existingIdx] = { ...data.openAnswers[key][existingIdx], ...entry };
  else data.openAnswers[key].unshift(entry);

  if (data.openAnswers[key].length > 5) data.openAnswers[key].length = 5;
  writeSave(data);
}

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

function doQuickStudy(item, items, title) {
  if (!item.unlock) {
    window.doStudyLog?.(`❌ 无法学习【${item.name}】：需要 ${item.unlockGrade} 年级`);
    return;
  }
  if ((item.studyRate || 0) >= 100) {
    window.doStudyLog?.(`✅ ${item.name} 已完全掌握`);
    return;
  }
  const availability = window.courseAttendance?.validateCourseAccess?.(item);
  if (availability && !availability.ok) {
    window.doStudyLog?.(availability.message);
    return;
  }
  window.courseAttendance?.markAttended?.(item);

  const data = loadSave();
  if (!data.course) data.course = {};
  const currentRate = data.course[item.name] || 0;
  const add = 5;
  item.studyRate = Math.min(100, currentRate + add);
  data.course[item.name] = item.studyRate;
  writeSave(data);

  // 推进课程进度
  const subjectKey = getItemSubjectKey(item);
  if (item.muggleSubjectKey && MUGGLE_SUBJECTS.includes(item.muggleSubjectKey)) {
    // 麻瓜课：记录学习日期并推进课时
    recordStudyDate(item.muggleSubjectKey);
    advanceLesson(item.muggleSubjectKey);
  } else if (subjectKey && HOGWARTS_SUBJECT_KEYS.has(subjectKey)) {
    // 霍格沃茨课：推进课时（不计分）
    const lesson = getCurrentLesson(subjectKey);
    if (lesson) saveProgress(subjectKey, lesson.lesson, null);
  }

  const subjectData = subjectKey && HOGWARTS_SUBJECT_KEYS.has(subjectKey) ? getSubjectData(subjectKey) : null;
  const quickEvents = subjectData?.quickStudyEvents || [];
  const subjectQuickEvent = quickEvents.length
    ? quickEvents[Math.floor(Math.random() * quickEvents.length)]
    : "";
  const evt = (item.muggleSubjectKey || subjectKey)
    ? (item.muggleSubjectKey
        ? (window.courseDefault?.getMuggleStudiesEvent(item.muggleSubjectKey) || "你专心学习，知识稳步提升")
        : (subjectQuickEvent || window.courseDefault?.getQuickStudyEvent?.(subjectKey) || window.getStudyEvent?.(item.name) || "你专心学习，知识稳步提升"))
    : (window.getStudyEvent?.(item.name) || "你专心学习，知识稳步提升");

  window.doStudyLog?.(`📚 ${item.name}（熟练度+${add}%，共${item.studyRate}%）｜${evt}`);
  window._questHook_courseStudy?.(false);
  window.refreshAll?.();
  window.autoUnlockByCourse?.();

  window.renderLevelFn?.(items, title);
}

function doFocusedStudy(item, items, title) {
  if (!item.unlock) {
    window.doStudyLog?.(`❌ 无法学习【${item.name}】：需要 ${item.unlockGrade} 年级`);
    return;
  }
  if ((item.studyRate || 0) >= 100) {
    window.doStudyLog?.(`✅ ${item.name} 已完全掌握`);
    return;
  }
  const availability = window.courseAttendance?.validateCourseAccess?.(item);
  if (availability && !availability.ok) {
    window.doStudyLog?.(availability.message);
    return;
  }

  const data = loadSave();
  if (!data.course) data.course = {};
  const currentRate = data.course[item.name] || 0;
  const add = 10;
  item.studyRate = Math.min(100, currentRate + add);
  data.course[item.name] = item.studyRate;
  writeSave(data);
  window.courseAttendance?.markAttended?.(item);

  const evt = window.getStudyEvent?.(item.name) || "你认真听完了这一节课，整理了课堂笔记，知识明显扎实了一些";
  window.doStudyLog?.(`📖 ${item.name}（熟练度+${add}%，共${item.studyRate}%）｜${evt}`);
  window._questHook_courseStudy?.(true);
  window.refreshAll?.();
  window.autoUnlockByCourse?.();
  window.renderLevelFn?.(items, title);
}

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
        <div class="cls-step cls-step-active" id="cls-s0" onclick="window._clsJumpToPhase(0)">🕯️ 开场</div>
        <div class="cls-step" id="cls-s1" onclick="window._clsJumpToPhase(1)">📖 讲课</div>
        <div class="cls-step" id="cls-s2" onclick="window._clsJumpToPhase(2)">📝 测验</div>
        <div class="cls-step" id="cls-s3" onclick="window._clsJumpToPhase(3)">🎓 结算</div>
      </div>
    </div>
    <div class="cls-body" id="cls-body"></div>`;

  const card = document.getElementById("actionMain")?.closest(".card") || document.body;
  card.appendChild(panel);

  _clsState = {
    st: { kpIdx:0, qIdx:0, score:0, answered:false, maxPhase:0, kpQA:false, kpCorrect:null, kpFeedback:false, kpAnsweredIdx:null, kpCalcDone:false, kpCalcStep:0, kpCalcDisplay:null, kpCalcIntroDone:false, openAnswerTimestamp:null },
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

window._clsJumpToPhase = (target) => {
  if (!_clsState || target > _clsState.st.maxPhase) return;
  const { st, subjectKey, sd, lesson, qGroup, onClose } = _clsState;
  if (target === 0) {
    _phaseOpening(st, subjectKey, sd, lesson, qGroup, onClose);
  } else if (target === 1) {
    st.kpIdx = 0; st.kpQA = false; st.kpCorrect = null; st.kpFeedback = false; st.kpAnsweredIdx = null; st.kpCalcDone = false; st.kpCalcStep = 0; st.kpCalcDisplay = null; st.kpCalcIntroDone = false;
    _phaseLecture(st, subjectKey, sd, lesson, qGroup, onClose);
  } else if (target === 2) {
    // 注意：从步骤条回跳测验会重置本轮分数，相当于重新作答
    if (qGroup) { st.qIdx = 0; st.score = 0; st.answered = false; }
    _phaseQuiz(st, subjectKey, sd, lesson, qGroup, onClose);
  } else if (target === 3) {
    _phaseResult(st, subjectKey, sd, lesson, qGroup, onClose);
  }
};

// ── 第一阶段：开场 ────────────────────────────────────────
function _phaseOpening(st, subjectKey, sd, lesson, qGroup, onClose) {
  _setPhase(0);
  const body = document.getElementById("cls-body");
  if (!body) return;

  // 检查是否是第一次上麻瓜课程（需要触发教授自我介绍）
  const isMuggleFirstTime = MUGGLE_SUBJECTS.includes(subjectKey) && !hasMetProfessor(subjectKey);

  if (isMuggleFirstTime) {
    // 显示教授自我介绍
    const intro = window.muggleSchedule?.professorIntroductions?.[subjectKey];
    body.innerHTML = `
      ${lesson.atmosphere ? `<div class="cls-atmosphere">${lesson.atmosphere}</div>` : ""}
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

// ── 小黑板 SVG 数轴生成器 ────────────────────────────────────
function _buildNumberLineSVG({ range = [-5, 5], marks = [], regionLabels = null, compArrow = null } = {}) {
  const [lo, hi] = range;
  const W = 280, AY = 38;
  const X0 = 32, X1 = 248;
  const UW = (X1 - X0) / (hi - lo);
  const px = n => Math.round(X0 + (n - lo) * UW);
  const oX = px(0);

  let s = `<svg viewBox="0 0 ${W} 72" style="width:100%;display:block;margin:4px 0 2px">`;

  if (regionLabels?.left)
    s += `<rect x="${X0}" y="${AY-12}" width="${oX - X0}" height="24" fill="#1c2242" rx="2"/>
          <text x="${Math.round((X0 + oX) / 2)}" y="${AY-17}" text-anchor="middle" font-size="9" fill="#6a7ec0">${regionLabels.left}</text>`;
  if (regionLabels?.right)
    s += `<rect x="${oX+1}" y="${AY-12}" width="${X1 - oX}" height="24" fill="#1c3422" rx="2"/>
          <text x="${Math.round((oX + X1) / 2)}" y="${AY-17}" text-anchor="middle" font-size="9" fill="#5abf7a">${regionLabels.right}</text>`;
  if (regionLabels?.origin)
    s += `<text x="${oX}" y="${AY+30}" text-anchor="middle" font-size="9" fill="#f0d870">${regionLabels.origin}</text>`;

  s += `<line x1="15" y1="${AY}" x2="${W-15}" y2="${AY}" stroke="#c8e8b0" stroke-width="1.5"/>
        <polygon points="15,${AY} 27,${AY-5} 27,${AY+5}" fill="#c8e8b0"/>
        <polygon points="${W-15},${AY} ${W-27},${AY-5} ${W-27},${AY+5}" fill="#c8e8b0"/>`;

  for (let n = lo; n <= hi; n++) {
    const x = px(n), isO = n === 0;
    s += `<line x1="${x}" y1="${AY-(isO?7:4)}" x2="${x}" y2="${AY+(isO?7:4)}" stroke="${isO?"#f0d870":"#c8e8b0"}" stroke-width="${isO?2:1}"/>`;
    const lbl = n < 0 ? `−${-n}` : String(n);
    s += `<text x="${x}" y="${AY+18}" text-anchor="middle" font-size="${isO?11:9}" fill="${isO?"#f0d870":"#7aaa6a"}"${isO?' font-weight="bold"':''}>${lbl}</text>`;
  }

  if (compArrow) {
    const ax = px(compArrow.from), bx = px(compArrow.to), ay = AY - 20;
    s += `<line x1="${ax}" y1="${ay}" x2="${bx-7}" y2="${ay}" stroke="#f8c850" stroke-width="1.5"/>
          <polygon points="${bx},${ay} ${bx-8},${ay-4} ${bx-8},${ay+4}" fill="#f8c850"/>`;
    if (compArrow.label)
      s += `<text x="${Math.round((ax + bx) / 2)}" y="${ay-5}" text-anchor="middle" font-size="9" fill="#f8c850">${compArrow.label}</text>`;
  }

  const MARK_COLORS = { highlight: "#f8c850", dim: "#667799", accent: "#8adfaa" };
  for (const m of marks) {
    const fill = MARK_COLORS[m.style] || MARK_COLORS.highlight;
    const x = px(m.value);
    s += `<circle cx="${x}" cy="${AY}" r="5" fill="${fill}" opacity="0.85"/>`;
  }

  return s + `</svg>`;
}

function _renderCalculator({ display = "0", highlightKey = null } = {}) {
  const keys = ["7","8","9","÷","4","5","6","×","1","2","3","−","|x|","0",".","="];
  const keysHtml = keys.map(k =>
    `<div class="cls-calc-key${k === highlightKey ? " cls-calc-key-hl" : ""}" data-key="${k}">${k}</div>`
  ).join("");
  return `
    <div class="cls-calc">
      <div class="cls-calc-body">
        <div class="cls-calc-brand">MUGGLE-7</div>
        <div class="cls-calc-screen">
          <div class="cls-calc-display">${display}</div>
        </div>
        <div class="cls-calc-keys">${keysHtml}</div>
      </div>
    </div>`;
}

function _renderBlackboard(bb, uniqueId = "") {
  if (!bb) return "";
  if (Array.isArray(bb)) return bb.map((item, idx) => _renderBlackboard(item, `${uniqueId}-${idx}`)).join("");
  if (typeof bb === "string") return `<div class="cls-blackboard">${bb}</div>`;

  let inner = "";
  if (bb.label) inner += `<div class="cls-bb-title">${bb.label}</div>`;

  if (bb.type === "numberline") {
    inner += _buildNumberLineSVG(bb);
  } else if (bb.type === "calculator") {
    return _renderCalculator(bb);
  } else if (bb.type === "formulas") {
    const audioMap = new Map();
    if (bb.audio && Array.isArray(bb.audio)) {
      bb.audio.forEach((item, idx) => audioMap.set(item.lineIndex ?? idx, item));
    }
    const lines = (bb.lines || []).map((line, idx) => {
      if (!line) return `<div class="cls-bb-formula-gap"></div>`;
      const audio = audioMap.get(idx);
      if (audio) {
        const id = `audio-btn-${uniqueId}-${idx}`;
        return `<div class="cls-bb-formula-line cls-bb-line-audio"><button id="${id}" class="cls-audio-btn" title="点击播放发音" onclick="playLatinAudio('${audio.src}', '${id}')">🔊</button><span class="cls-bb-line-text">${line}</span></div>`;
      }
      return `<div class="cls-bb-formula-line">${line}</div>`;
    }).join("");
    inner += `<div class="cls-bb-pre">${lines}</div>`;
  }

  if (bb.note) inner += `<div class="cls-bb-note">${bb.note}</div>`;

  return inner ? `<div class="cls-blackboard">${inner}</div>` : "";
}

const _latinAudioMap = new Map();

function playLatinAudio(src, buttonId) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;

  const existing = _latinAudioMap.get(buttonId);
  if (existing && !existing.paused) {
    existing.pause();
    existing.currentTime = 0;
    btn.textContent = '🔊';
    return;
  }

  const audio = new Audio(src);
  _latinAudioMap.set(buttonId, audio);
  audio.onplaying = () => { btn.textContent = '🔉'; };
  audio.onended = audio.onerror = () => {
    btn.textContent = '🔊';
    _latinAudioMap.delete(buttonId);
  };
  audio.play().catch(e => console.error('音频播放失败:', e));
}

window.playLatinAudio = playLatinAudio;

// ── context 格式化：对白高亮 + 换行 ──────────────────────────
function _formatContext(text) {
  if (!text) return text;
  // 「对白」→ span 高亮
  let out = text.replace(/「([^」]*)」/g, '<span class="cls-dialogue">「$1」</span>');
  // 句末（。！？）后紧跟对白 → 插入换行
  out = out.replace(/([。！？])(<span class="cls-dialogue">)/g, '$1<br>$2');
  // 对白结束后紧跟叙述（非空格非标点）→ 插入换行
  out = out.replace(/(<\/span>)([^\s，。、！？：」<])/g, '$1<br>$2');
  return out;
}

// ── 短提问文本：只高亮对白，不拆行 ─────────────────────────
function _formatDialogOnly(text) {
  if (!text) return text;
  return text.replace(/「([^」]*)」/g, '<span class="cls-dialogue">「$1」</span>');
}

// ── 讲课阶段：教授提问 UI ─────────────────────────────────
function _renderMiniQuestion(q) {
  const leadIn = q.leadIn
    ? `<div class="cls-mini-leadin">${_formatContext(q.leadIn)}</div>`
    : "";
  return `
    <div class="cls-mini-q">
      ${leadIn}
      ${_renderMiniQuestionInline(q, false, !!q.leadIn)}
    </div>`;
}

function _renderMiniQuestionInline(q, disabled = false, separated = true) {
  if (!q) return "";
  const opts = q.options.map((opt, i) =>
    `<button class="cls-mini-opt" data-idx="${i}"${disabled ? " disabled" : ""}>${opt}</button>`
  ).join("");
  return `
    <div class="cls-mini-inline-question${separated ? "" : " cls-mini-inline-question-solo"}">
      <div class="cls-mini-text">${_formatDialogOnly(q.text)}</div>
      <div class="cls-mini-opts">${opts}</div>
    </div>`;
}

function _renderMiniLeadIn(text) {
  return text ? `<div class="cls-mini-q"><div class="cls-mini-leadin">${_formatContext(text)}</div></div>` : "";
}

function _renderLectureText(text) {
  return text ? `<div class="cls-lecture-block"><div class="cls-mini-leadin">${_formatContext(text)}</div></div>` : "";
}

function _findCalculatorBlackboard(bb) {
  if (Array.isArray(bb)) return bb.find(item => item?.type === "calculator") || null;
  return bb?.type === "calculator" ? bb : null;
}

function _withActiveCalculator(bb, calc, display, highlightKey) {
  if (!calc) return bb;
  const applyCalcState = item => item === calc
    ? { ...item, display, highlightKey }
    : item;
  return Array.isArray(bb) ? bb.map(applyCalcState) : applyCalcState(bb);
}

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
    const blackboard = typeof kp === "string" ? null
      : ((showQ || showAnsweredMiniQuestion || showBoardInteraction || showCalcIntro || showCalcSequence || showCompletedCalcSequence || showCompletedCalcQuestion || showAnsweredCompletedCalcQuestion) && interactiveBlackboard
        ? _withActiveCalculator(interactiveBlackboard, calculatorBlackboard, calcDisplay, activeCalcKey)
        : (kp?.blackboard || null));

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
        ${showCalcIntro
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

            const fb = document.getElementById("cls-fb");
            if (fb) {
              const pctText = Math.round(accuracy * 100);
              if (success) {
                fb.className = "cls-feedback cls-fb-show cls-fb-right";
                fb.innerHTML = `
                  <div class="cls-fb-tag cls-fb-r">✦ 手势成功！精准度 ${pctText}%</div>
                  <div class="cls-fb-analysis"><span class="cls-fb-kp">解析：</span>${q.analysis}</div>`;
              } else {
                fb.className = "cls-feedback cls-fb-show cls-fb-wrong";
                fb.innerHTML = `
                  <div class="cls-fb-tag cls-fb-w">✗ 手势不完整（完成 ${hitCount}/${totalNodes} 个节点）</div>
                  <div class="cls-fb-analysis"><span class="cls-fb-kp">解析：</span>${q.analysis}</div>`;
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
            <div class="cls-fb-analysis"><span class="cls-fb-kp">解析：</span>${q.analysis}</div>`;
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
      <button class="cls-btn-leave" id="cls-leave">← 离开教室</button>
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

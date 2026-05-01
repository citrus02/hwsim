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
 */

import { loadSave, writeSave } from './save-utils.js';
import { scoreToRating, HOUSE_POINTS_MAP } from './muggle-studies.js';

// ── 分科数据映射 ─────────────────────────────────────────
const SUBJECT_WIN_KEY = {
  math:"subject_math", physics:"subject_physics", chemistry:"subject_chemistry",
  biology:"subject_biology", history:"subject_history", civics:"subject_civics",
  geography:"subject_geography", literature:"subject_literature", english:"subject_english",
};

function getSubjectData(key) { return window[SUBJECT_WIN_KEY[key]] || null; }

// ── 课时工具 ─────────────────────────────────────────────
function getAllLessons(syllabus) {
  const out = [];
  (syllabus || []).forEach(ch => (ch.lessons || []).forEach(l => out.push(l)));
  return out;
}

function getCurrentLesson(subjectKey) {
  const data = getSubjectData(subjectKey);
  if (!data) return null;
  const all = getAllLessons(data.syllabus);
  const done = loadSave().course?.muggleProgress?.[subjectKey]?.completed || [];
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

  // 麻瓜研究总进度（九门均值）
  const KEYS = Object.keys(SUBJECT_WIN_KEY);
  let totalRate = 0;
  KEYS.forEach(k => {
    const sd = getSubjectData(k);
    if (!sd) return;
    const total = getAllLessons(sd.syllabus).length;
    const done  = (data.course.muggleProgress?.[k]?.completed || []).length;
    totalRate += total > 0 ? Math.floor(done / total * 100) : 0;
  });
  data.course["麻瓜研究"] = Math.round(totalRate / KEYS.length);

  // 学院分（交由 house-points.js 处理）
  if (rating && HOUSE_POINTS_MAP[rating]) {
    window.housePoints?.addPlayerPoints?.(HOUSE_POINTS_MAP[rating]);
  }

  writeSave(data);
  window.refreshAll?.();
  window.autoUnlockByCourse?.();
}

// ════════════════════════════════════════════════════════════
//  选择弹窗
// ════════════════════════════════════════════════════════════

export function showLearnChoiceModal(item, items, title) {
  document.getElementById("cls-choice-modal")?.remove();

  const subjectKey  = item.muggleSubjectKey || null;
  const subjectData = subjectKey ? getSubjectData(subjectKey) : null;
  const hasLesson   = !!(subjectData?.syllabus);

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
        ${hasLesson ? `
          <button class="cls-choice-btn cls-choice-hard" id="cls-btn-hard">
            <div class="cls-choice-icon">📖</div>
            <div class="cls-choice-name">好好学习</div>
            <div class="cls-choice-desc">开课·讲课·测验·评分<br>消耗1次行动</div>
          </button>` : ""}
        <button class="cls-choice-btn cls-choice-easy" id="cls-btn-easy">
          <div class="cls-choice-icon">⚡</div>
          <div class="cls-choice-name">随便学学</div>
          <div class="cls-choice-desc">快速学习·随机事件<br>消耗1次行动</div>
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
  if (window.costAction && !window.costAction()) return;

  const add = 5;
  item.studyRate = Math.min(100, (item.studyRate || 0) + add);
  const data = loadSave();
  if (!data.course) data.course = {};
  data.course[item.name] = item.studyRate;
  writeSave(data);

  const evt = item.muggleSubjectKey
    ? (window.courseDefault?.getMuggleStudiesEvent(item.muggleSubjectKey) || "你专心学习，知识稳步提升")
    : (window.getStudyEvent?.(item.name) || "你专心学习，知识稳步提升");

  window.doStudyLog?.(`📚 ${item.name}（熟练度+${add}%，共${item.studyRate}%）｜${evt}`);
  window.refreshAll?.();
  window.autoUnlockByCourse?.();

  if (window.timeSystem?.dailyActionLeft <= 0) {
    window.closeCoursePanel?.();
    setTimeout(() => { window.nextTime?.(); window.syncActionUI?.(); }, 50);
    return;
  }
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
  if (window.costAction && !window.costAction()) return;

  const lessonBase = getCurrentLesson(subjectKey);
  if (!lessonBase) {
    window.doStudyLog?.(`✅ ${item.name} 所有课时已完成`);
    return;
  }
  // 从 lessonMap 合并完整内容（opening/atmosphere/keyPoints含context）
  const lessonExtra = subjectData.lessonMap?.[lessonBase.lesson] || {};
  const lesson = { ...lessonBase, ...lessonExtra };
  const qGroup = getQuestionsForLesson(subjectData.questionBank, lesson.lesson);

  _buildPanel(item, subjectKey, subjectData, lesson, qGroup, () => {
    window.refreshAll?.();
    window.renderLevelFn?.(items, title);
  });
}

// ── 课堂内部状态 ─────────────────────────────────────────
// 统一用一个对象管理，方便面板销毁时整体 reset
let _clsState = null;

function _resetState() { _clsState = null; }

// ── 课堂面板外框 ─────────────────────────────────────────
function _buildPanel(item, subjectKey, subjectData, lesson, qGroup, onClose) {
  document.getElementById("classroomPanel")?.remove();
  const courseMain = document.getElementById("courseMain");
  if (courseMain) courseMain.style.display = "none";

  const panel = document.createElement("div");
  panel.id = "classroomPanel";
  panel.className = "cls-panel";
  panel.innerHTML = `
    <div class="cls-header">
      <div class="cls-subject-icon">${subjectData.subjectMeta.icon || "📚"}</div>
      <div class="cls-header-info">
        <div class="cls-subject-line">麻瓜研究 · ${subjectData.subjectMeta.name}</div>
        <div class="cls-lesson-title">${lesson.title}</div>
        <div class="cls-prof-line">${subjectData.subjectMeta.professor} · 第 ${lesson.lesson} 课</div>
      </div>
      <div class="cls-phase-badge" id="cls-phase-badge">📍 导入</div>
    </div>
    <div style="padding:10px 14px 0">
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
    st: { kpIdx:0, qIdx:0, score:0, answered:false, maxPhase:0 },
    subjectKey, sd: subjectData, lesson, qGroup, onClose
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
    st.kpIdx = 0;
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
  body.innerHTML = `
    ${lesson.atmosphere ? `<div class="cls-atmosphere">${lesson.atmosphere}</div>` : ""}
    <div class="cls-opening">
      <div class="cls-opening-label">🎭 ${sd.subjectMeta.professor}</div>
      <div class="cls-opening-text">${lesson.opening || "教授走进了教室。"}</div>
    </div>
    <div class="cls-nav">
      <button class="cls-btn-advance" id="cls-start">开始上课 →</button>
    </div>`;
  document.getElementById("cls-start").onclick = () => _phaseLecture(st, subjectKey, sd, lesson, qGroup, onClose);
}

// ── 第二阶段：讲课 ────────────────────────────────────────
function _phaseLecture(st, subjectKey, sd, lesson, qGroup, onClose) {
  _setPhase(1);
  const kps = lesson.keyPoints || [];

  function render() {
    const body = document.getElementById("cls-body");
    if (!body) return;
    const kp      = kps[st.kpIdx];
    const point   = typeof kp === "string" ? kp : (kp?.point || "");
    const context = typeof kp === "string" ? null : (kp?.context || null);
    const isLast  = st.kpIdx === kps.length - 1;

    body.innerHTML = `
      <div class="cls-dots">
        ${kps.map((_,i) => `<div class="cls-dot${i<st.kpIdx?" cls-dot-done":i===st.kpIdx?" cls-dot-active":""}"></div>`).join("")}
      </div>
      <div class="cls-kp-card">
        <div class="cls-kp-header">
          <div class="cls-kp-num">${st.kpIdx+1}</div>
          <div class="cls-kp-point">${point}</div>
        </div>
        ${context ? `<div class="cls-kp-context">${context}</div>` : ""}
      </div>
      <div class="cls-nav">
        ${st.kpIdx > 0 ? `<button class="cls-btn-sec" id="cls-prev">← 上一条</button>` : `<button class="cls-btn-sec" id="cls-to-opening">← 返回开场</button>`}
        ${isLast
          ? `<button class="cls-btn-advance" id="cls-to-quiz">随堂测验 →</button>`
          : `<button class="cls-btn-pri" id="cls-next">下一条 →</button>`}
      </div>`;

    document.getElementById("cls-prev")?.addEventListener("click", () => { st.kpIdx--; render(); });
    document.getElementById("cls-to-opening")?.addEventListener("click", () => {
      _phaseOpening(st, subjectKey, sd, lesson, qGroup, onClose);
    });
    document.getElementById("cls-next")?.addEventListener("click", () => { st.kpIdx++; render(); });
    document.getElementById("cls-to-quiz")?.addEventListener("click", () => {
      if (qGroup) { st.qIdx=0; st.score=0; st.answered=false; _phaseQuiz(st,subjectKey,sd,lesson,qGroup,onClose); }
      else _phaseResult(st,subjectKey,sd,lesson,null,onClose);
    });
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
  const comment = rating ? (window.courseDefault?.getProfessorComment(subjectKey, rating) || "") : "";

  saveProgress(subjectKey, lesson.lesson, rating);

  const logMsg = rating
    ? `🎓 ${sd.subjectMeta.name}·第${lesson.lesson}课《${lesson.title}》评级 ${rating}，学院分 ${housePoints>=0?"+":""}${housePoints}`
    : `🎓 ${sd.subjectMeta.name}·第${lesson.lesson}课《${lesson.title}》已完成`;
  window.doStudyLog?.(logMsg);

  const ratingColor = {O:"#ffd700",E:"#98e898",A:"#aad4f0",P:"#ccc",D:"#f88",T:"#f44"}[rating] || "#aaa";
  const gradeText = {O:"Outstanding · 卓越",E:"Exceeds Expectations · 超预期",A:"Acceptable · 合格",P:"Poor · 欠佳",D:"Dreadful · 糟糕",T:"Troll · 极差"}[rating] || "";

  body.innerHTML = `
    <div class="cls-result-card">
      <div class="cls-result-lesson">第 ${lesson.lesson} 课《${lesson.title}》· 课程结束</div>
      ${rating ? `
        <div class="cls-result-rating" style="color:${ratingColor}">${rating}</div>
        <div class="cls-result-grade" style="color:${ratingColor}">${gradeText}</div>
        <div class="cls-result-score">${st.score} 分 · 满分 ${(qGroup?.questions?.length||0)*2} 分</div>
        <div class="cls-result-hp ${housePoints>=0?"cls-hp-plus":"cls-hp-minus"}">
          学院分 ${housePoints>=0?"+":""}${housePoints}
        </div>` : `<div class="cls-result-no-quiz">本课已完成，知识已记录。</div>`}
      ${comment ? `
        <div class="cls-result-comment">
          <div class="cls-comment-prof">👤 ${sd.subjectMeta.professor}</div>
          <div class="cls-comment-text">"${comment}"</div>
        </div>` : ""}
    </div>
    <button class="cls-btn-leave" id="cls-leave">← 离开教室</button>`;

  document.getElementById("cls-leave").onclick = () => {
    document.getElementById("classroomPanel")?.remove();
    const cm = document.getElementById("courseMain");
    if (cm) cm.style.display = "";
    _resetState();
    onClose?.();
  };
}

// ── 全局挂载 ─────────────────────────────────────────────
window.classroom = { showLearnChoiceModal };

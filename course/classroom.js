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
        <div class="cls-opening-text cls-opening-intro-text">${intro?.introduction || "教授走进了教室。"}</div>
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
        <div class="cls-opening-text">${lesson.opening || "教授走进了教室。"}</div>
      </div>
      <div class="cls-nav">
        <button class="cls-btn-advance" id="cls-start">开始上课 →</button>
      </div>`;
    document.getElementById("cls-start").onclick = () => _phaseLecture(st, subjectKey, sd, lesson, qGroup, onClose);
  }
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

    // ── 开放题（AI 判题） ─────────────────────────────────
    if (q.type === "open") {
      body.innerHTML = `
        <div class="cls-quiz-header">
          <span class="cls-quiz-count">开放题（AI 判题）</span>
          <span class="cls-diff-badge" style="background:#7c5cbf;color:#fff;padding:2px 8px;border-radius:6px;font-size:0.78em">主观题</span>
        </div>
        <div class="cls-question">${q.text}</div>
        <div style="margin:12px 0 4px">
          <textarea id="cls-open-ta" rows="5" maxlength="600"
            placeholder="请用文字写出你的答案……"
            style="width:100%;padding:10px;border:1px solid #555;border-radius:8px;
                   background:#0d0d1a;color:#e0e0e0;font-size:0.9em;resize:vertical;
                   box-sizing:border-box;outline:none;line-height:1.6"></textarea>
          <div style="text-align:right;font-size:0.75em;color:#888;margin-top:2px">
            <span id="cls-open-cnt">0</span> / 600
          </div>
        </div>
        <div class="cls-feedback" id="cls-fb"></div>
        <div class="cls-nav">
          <button class="cls-btn-advance" id="cls-open-submit">提交答案 →</button>
        </div>`;

      const ta = document.getElementById("cls-open-ta");
      ta?.addEventListener("input", () => {
        document.getElementById("cls-open-cnt").textContent = ta.value.length;
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
        if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "评分中…"; }
        if (fb) {
          fb.className = "cls-feedback cls-fb-show";
          fb.style.background = "rgba(108,92,231,0.1)";
          fb.innerHTML = `<div style="text-align:center;padding:12px;color:#b9a7e8">🔮 正在召唤 AI 评分…</div>`;
        }

        // 降级评分函数：基于关键词匹配
        function fallbackGrade() {
          const scoringPoints = q.scoringPoints || [];
          const maxScore = q.maxScore || 4;
          let score = 0;
          const achieved = [];

          scoringPoints.forEach((point, idx) => {
            const keywords = point.keywords || [point];
            const found = keywords.some(kw =>
              answer.toLowerCase().includes(kw.toLowerCase())
            );
            if (found) {
              score += 1;
              achieved.push(point.text || `要点${idx + 1}`);
            }
          });

          // 根据答案长度额外加分
          if (answer.length > 100) score = Math.min(maxScore, score + 1);
          if (answer.length > 200) score = Math.min(maxScore, score + 1);

          return {
            score,
            maxScore,
            feedback: getFallbackFeedback(score, maxScore),
            pointsAchieved: achieved
          };
        }

        function getFallbackFeedback(score, max) {
          const pct = score / max;
          if (pct >= 0.75) return "回答完整，思路清晰。";
          if (pct >= 0.5) return "回答有一定深度，但还可以更完善。";
          if (pct > 0) return "思路正确，继续加油。";
          return "请重新思考这个问题。";
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
              console.warn(`AI 评分失败，重试第 ${retryCount} 次:`, err.message);
              await new Promise(resolve => setTimeout(resolve, 1000 * retryCount));
              return attemptGrade();
            }
            console.error(`AI 评分多次失败，使用降级评分:`, err.message);
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
                ? `<div class="cls-fb-analysis" style="margin-top:6px">
                     <span class="cls-fb-kp">✓ 得分点：</span>${result.pointsAchieved.join("、")}
                   </div>`
                : ""}
              <div class="cls-fb-analysis" style="margin-top:8px;font-style:italic;color:#d0c8e8">
                "${result.feedback}"
              </div>`;
          }

          const nav = body.querySelector(".cls-nav");
          if (nav) {
            nav.innerHTML = `<button class="cls-btn-advance" id="cls-to-result">查看结果 →</button>`;
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

          const pct = result.score / result.maxScore;
          const fbClass = pct >= 0.75 ? "cls-fb-right" : pct > 0 ? "" : "cls-fb-wrong";
          const scoreTag = pct >= 0.75 ? "✦ 优秀" : pct >= 0.5 ? "◎ 良好" : pct > 0 ? "△ 部分得分" : "✗ 未得分";

          if (fb) {
            fb.style.background = "";
            fb.className = `cls-feedback cls-fb-show ${fbClass}`;
            fb.innerHTML = `
              <div class="cls-fb-tag ${pct >= 0.75 ? "cls-fb-r" : pct > 0 ? "" : "cls-fb-w"}">
                ${scoreTag} · ${result.score} / ${result.maxScore} 分
                <span style="font-size:0.7em;color:#888;margin-left:8px">（自动评分）</span>
              </div>
              ${result.pointsAchieved.length
                ? `<div class="cls-fb-analysis" style="margin-top:6px">
                     <span class="cls-fb-kp">✓ 得分点：</span>${result.pointsAchieved.join("、")}
                   </div>`
                : ""}
              <div class="cls-fb-analysis" style="margin-top:8px;font-style:italic;color:#d0c8e8">
                "${result.feedback}"
              </div>
              <div class="cls-fb-analysis" style="margin-top:6px;font-size:0.85em;color:#888">
                AI 评分暂时不可用，已使用自动评分
              </div>`;
          }

          const nav = body.querySelector(".cls-nav");
          if (nav) {
            nav.innerHTML = `<button class="cls-btn-advance" id="cls-to-result">查看结果 →</button>`;
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
        <div style="margin:16px 0 0;padding:14px 16px;border:1px solid #3a3a5a;border-radius:10px;background:rgba(108,92,231,0.08)">
          <div style="font-size:0.82em;color:#9d86e9;font-weight:bold;margin-bottom:6px">📝 开放题 AI 点评</div>
          <div style="font-size:0.9em;color:${openScoreColor};font-weight:bold;margin-bottom:8px">
            得分：${st.openScore} / ${st.openMaxScore}
            ${st.openPointsAchieved?.length ? `<span style="color:#aaa;font-weight:normal;font-size:0.85em;margin-left:8px">· ${st.openPointsAchieved.join("、")}</span>` : ""}
          </div>
          <div style="font-size:0.88em;color:#d0c8e8;line-height:1.6;font-style:italic">"${st.openFeedback}"</div>
        </div>` : ""}
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

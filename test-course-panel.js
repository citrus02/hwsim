import { gradeOpenAnswer, isAiGradingEnabled, setAiGradingEnabled } from './ai/grader.js';
import { getAllLessons, getSubjectData, HOGWARTS_SUBJECT_KEYS, MUGGLE_SUBJECTS } from './course/utils.js';

const STAGES = [
  { key: "opening", label: "开场" },
  { key: "lecture", label: "讲课" },
  { key: "quiz", label: "答题" },
  { key: "result", label: "结果" },
];

const RATING_SCORE = { O: 6, E: 5, A: 3, P: 1, D: -1, T: -2 };
const HOUSE_NAMES = ["格兰芬多", "斯莱特林", "拉文克劳", "赫奇帕奇"];
let lastOpenAnswerDebug = null;

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function subjectOptions() {
  const keys = [...MUGGLE_SUBJECTS, ...Array.from(HOGWARTS_SUBJECT_KEYS)];
  return keys
    .map(key => ({ key, data: getSubjectData(key) }))
    .filter(item => item.data?.syllabus)
    .map(({ key, data }) => ({
      key,
      name: data.subjectMeta?.name || key,
      icon: data.subjectMeta?.icon || "",
      type: MUGGLE_SUBJECTS.includes(key) ? "muggle" : "hogwarts",
    }))
    .sort((a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name, "zh-Hans-CN"));
}

function getSelectedConfig() {
  return {
    subjectKey: document.getElementById("test-course-subject")?.value || "",
    lessonNumber: Number(document.getElementById("test-course-lesson")?.value || 1),
    stage: "opening",
    keyPointIndex: 0,
    simulateRating: document.getElementById("test-course-rating")?.value || "O",
  };
}

function getLesson(subjectKey, lessonNumber) {
  const data = getSubjectData(subjectKey);
  const base = getAllLessons(data?.syllabus).find(item => item.lesson === Number(lessonNumber));
  const extra = data?.lessonMap?.[lessonNumber] || {};
  const qGroup = data?.questionBank?.find(item => item.lesson === Number(lessonNumber)) || null;
  return { data, base, extra, qGroup, lesson: base ? { ...base, ...extra } : null };
}

function parseHash() {
  const match = location.hash.match(/test-course=([^:]+):(\d+):([^:]+):?(\d+)?/);
  if (!match) return null;
  return {
    subjectKey: match[1],
    lessonNumber: Number(match[2]),
    stage: match[3],
    keyPointNumber: Number(match[4] || 1),
  };
}

function restoreSelectionFromHash() {
  const config = parseHash();
  if (!config) return;
  const subject = document.getElementById("test-course-subject");
  const lesson = document.getElementById("test-course-lesson");
  if (subject && [...subject.options].some(option => option.value === config.subjectKey)) subject.value = config.subjectKey;
  if (lesson && [...lesson.options].some(option => Number(option.value) === config.lessonNumber)) lesson.value = String(config.lessonNumber);
}

function updateHash(stageOverride = "opening") {
  const { subjectKey, lessonNumber, keyPointIndex } = getSelectedConfig();
  if (!subjectKey) return;
  const stageKey = typeof stageOverride === "string" ? stageOverride : "opening";
  history.replaceState(null, "", `${location.pathname}${location.search}#test-course=${subjectKey}:${lessonNumber}:${stageKey}:${keyPointIndex + 1}`);
}

function renderLessonOptions() {
  const subjectKey = document.getElementById("test-course-subject")?.value;
  const select = document.getElementById("test-course-lesson");
  if (!subjectKey || !select) return;

  const lessons = getAllLessons(getSubjectData(subjectKey)?.syllabus);
  select.innerHTML = lessons.map(lesson => (
    `<option value="${lesson.lesson}">第 ${lesson.lesson} 课：${escapeHtml(lesson.title || "")}</option>`
  )).join("");
  restoreSelectionFromHash();
  renderIntegrity();
  renderOpenAnswerInfo();
}

function checkLesson(subjectKey, lessonNumber) {
  const { data, base, extra, lesson, qGroup } = getLesson(subjectKey, lessonNumber);
  const syllabusKp = Array.isArray(base?.keyPoints) ? base.keyPoints.length : 0;
  const lessonKp = Array.isArray(extra?.keyPoints) ? extra.keyPoints.length : 0;
  const missingContext = (lesson?.keyPoints || []).filter(kp => !kp?.context && !kp?.point).length;
  const questions = Array.isArray(qGroup?.questions) ? qGroup.questions.length : 0;

  return [
    { ok: !!base, text: base ? "课程大纲存在" : "缺少课程大纲" },
    { ok: !!data?.lessonMap?.[lessonNumber], text: data?.lessonMap?.[lessonNumber] ? "课堂流程存在" : "缺少课堂流程" },
    { ok: !!qGroup, text: qGroup ? "题库分组存在" : "缺少题库分组" },
    { ok: syllabusKp === 0 || lessonKp === syllabusKp, text: `知识点数量：大纲 ${syllabusKp} / 流程 ${lessonKp}` },
    { ok: missingContext === 0, text: missingContext ? `${missingContext} 个知识点缺少课堂文本` : "知识点课堂文本完整" },
    { ok: questions > 0, text: questions ? `测验题数量：${questions}` : "测验题为空" },
  ];
}

function renderIntegrity() {
  const output = document.getElementById("test-course-integrity");
  const { subjectKey, lessonNumber } = getSelectedConfig();
  if (!output || !subjectKey) return;

  output.innerHTML = checkLesson(subjectKey, lessonNumber).map(result => (
    `<div class="test-course-check ${result.ok ? "ok" : "bad"}">
      <span>${result.ok ? "通过" : "异常"}</span>
      <b>${escapeHtml(result.text)}</b>
    </div>`
  )).join("");
}

function applyPlayerState() {
  const data = window.saveSys?.getSave?.();
  if (!data) return false;

  const grade = Math.max(1, Math.min(7, Number(document.getElementById("test-state-grade")?.value || 1)));
  const year = 1990 + grade;
  const date = document.getElementById("test-state-date")?.value || `${year}-09-02`;
  const parts = date.split("-").map(Number);
  const actions = Math.max(0, Math.min(9, Number(document.getElementById("test-state-actions")?.value || 3)));
  const nowTime = document.getElementById("test-state-period")?.value || "上午";
  const house = document.getElementById("test-state-house")?.value || HOUSE_NAMES[0];

  data.player = { ...(data.player || {}), house };
  data.time = {
    ...(data.time || {}),
    year: parts[0] || year,
    month: parts[1] || 9,
    day: parts[2] || 2,
    currentDate: date,
    dailyActionLeft: actions,
    nowTime,
  };

  window.saveSys.setSave(data);
  if (window.timeSystem) {
    window.timeSystem.currentDate = date;
    window.timeSystem.dailyActionLeft = actions;
    window.timeSystem.nowTime = nowTime;
  }
  window.loadTimeFromSave?.();
  window.refreshAll?.();
  window.autoUpdateCourseUnlock?.();
  return true;
}

function startLesson(stageOverride = null, extra = {}) {
  applyPlayerState();
  const config = getSelectedConfig();
  if (stageOverride) config.stage = stageOverride;
  updateHash(config.stage);
  window.classroom?.startTestLesson?.({
    ...config,
    ...extra,
    onClose: () => window.openCourseTestPanel?.(),
  });
}

function simulateComplete() {
  const includeOpen = document.getElementById("test-use-open-debug")?.checked;
  startLesson("result", {
    openAnswerDebug: includeOpen ? lastOpenAnswerDebug : null,
  });
}

function getOpenQuestion() {
  const { subjectKey, lessonNumber } = getSelectedConfig();
  const { qGroup } = getLesson(subjectKey, lessonNumber);
  return (qGroup?.questions || []).find(q => q.type === "open") || null;
}

function getPointText(point) {
  if (typeof point === "object" && point) return String(point.text || point.label || "");
  return String(point || "");
}

function makePresetAnswer(kind, question) {
  const points = (question?.scoringPoints || []).map(getPointText).filter(Boolean);
  if (kind === "empty") return "";
  if (kind === "weak") return "我不太确定，大概是和课堂内容有关。";
  if (kind === "medium") return points.slice(0, Math.max(1, Math.ceil(points.length / 2))).join("；") || "能说出一个核心概念，并给出简单解释。";
  return points.join("；") || "完整回答题目，覆盖定义、原因、例子和结论。";
}

function normalize(value) {
  return String(value || "").toLowerCase().replace(/\s+/g, "");
}

function localGradeOpenAnswer(question, answer) {
  const maxScore = question?.maxScore || 4;
  const scoringPoints = question?.scoringPoints || [];
  if (!answer.trim()) {
    return { score: 0, maxScore, pointsAchieved: [], feedback: "空答案，本地批改记 0 分。" };
  }

  const normalizedAnswer = normalize(answer);
  const achieved = scoringPoints.filter(point => {
    const text = getPointText(point);
    const normalizedPoint = normalize(text);
    if (normalizedPoint && normalizedAnswer.includes(normalizedPoint.slice(0, Math.min(12, normalizedPoint.length)))) return true;
    const tokens = text.split(/[，、；;,.。]/).map(t => normalize(t)).filter(t => t.length >= 2);
    return tokens.some(token => normalizedAnswer.includes(token));
  }).map(getPointText);

  const ratio = scoringPoints.length ? achieved.length / scoringPoints.length : (answer.length >= 20 ? 0.75 : 0.25);
  const score = Math.max(0, Math.min(maxScore, Math.round(maxScore * ratio)));
  return {
    score,
    maxScore,
    pointsAchieved: achieved,
    feedback: `本地批改：命中 ${achieved.length}/${scoringPoints.length || 1} 个得分点。`,
  };
}

function renderOpenAnswerInfo() {
  const info = document.getElementById("test-open-info");
  if (!info) return;
  const question = getOpenQuestion();
  if (!question) {
    info.innerHTML = `<div class="test-course-muted">本课没有开放题。</div>`;
    return;
  }
  info.innerHTML = `
    <div class="test-course-rubric">
      <div><b>题目</b>：${escapeHtml(question.text || "")}</div>
      <div><b>满分</b>：${question.maxScore || 4}</div>
      <ol>${(question.scoringPoints || []).map(point => `<li>${escapeHtml(getPointText(point))}</li>`).join("")}</ol>
    </div>`;
}

async function runOpenAnswerDebug(useAi) {
  const output = document.getElementById("test-open-result");
  const question = getOpenQuestion();
  if (!output) return;
  if (!question) {
    output.innerHTML = `<div class="test-course-check bad"><span>错误</span><b>本课没有开放题。</b></div>`;
    return;
  }

  const { subjectKey, lessonNumber } = getSelectedConfig();
  const { data, lesson } = getLesson(subjectKey, lessonNumber);
  const preset = document.getElementById("test-open-preset")?.value || "medium";
  const answer = makePresetAnswer(preset, question);
  output.innerHTML = `<div class="test-course-muted">正在批改预设答案……</div>`;

  let result = null;
  let mode = useAi ? "AI 批改" : "本地批改";
  const previousAi = isAiGradingEnabled();
  try {
    if (useAi) {
      setAiGradingEnabled(true);
      result = await gradeOpenAnswer({
        question: question.text,
        scoringPoints: question.scoringPoints || [],
        maxScore: question.maxScore || 4,
        studentAnswer: answer,
        subject: data?.subjectMeta?.name || subjectKey,
        lessonTitle: lesson?.title || "",
        professor: data?.subjectMeta?.professor || "",
      });
      if (!result) {
        mode = "AI 不可用，已改用本地批改";
        result = localGradeOpenAnswer(question, answer);
      }
    } else {
      result = localGradeOpenAnswer(question, answer);
    }
  } catch (error) {
    mode = `AI 出错，已改用本地批改（${error.message}）`;
    result = localGradeOpenAnswer(question, answer);
  } finally {
    setAiGradingEnabled(previousAi);
  }

  lastOpenAnswerDebug = {
    question: question.text || "",
    answer,
    score: result.score,
    maxScore: result.maxScore,
    feedback: result.feedback,
    pointsAchieved: result.pointsAchieved || [],
  };

  output.innerHTML = `
    <div class="test-course-debug-result">
      <div><b>模式</b>：${escapeHtml(mode)}</div>
      <div><b>得分</b>：${result.score} / ${result.maxScore}</div>
      <div><b>答案</b>：${escapeHtml(answer || "（空答案）")}</div>
      <div><b>命中点</b>：${escapeHtml((result.pointsAchieved || []).join(" / ") || "（无）")}</div>
      <div><b>反馈</b>：${escapeHtml(result.feedback || "")}</div>
    </div>`;
}

function bindPanelEvents(panel) {
  panel.querySelector("#test-course-subject")?.addEventListener("change", () => {
    lastOpenAnswerDebug = null;
    renderLessonOptions();
    updateHash();
  });
  panel.querySelector("#test-course-lesson")?.addEventListener("change", () => {
    lastOpenAnswerDebug = null;
    renderIntegrity();
    renderOpenAnswerInfo();
    updateHash();
  });
  panel.querySelector("#test-course-start")?.addEventListener("click", () => startLesson());
  panel.querySelector("#test-sim-complete")?.addEventListener("click", simulateComplete);
  panel.querySelector("#test-open-local")?.addEventListener("click", () => runOpenAnswerDebug(false));
  panel.querySelector("#test-open-ai")?.addEventListener("click", () => runOpenAnswerDebug(true));
  panel.querySelectorAll("[data-test-stage]").forEach(button => {
    button.addEventListener("click", () => startLesson(button.dataset.testStage));
  });
  panel.querySelector("#test-course-close")?.addEventListener("click", closeCourseTestPanel);
}

function stateDefaults() {
  const data = window.saveSys?.getSave?.() || {};
  const date = data.time?.currentDate || "1991-09-02";
  const year = Number(date.slice(0, 4)) || 1991;
  return {
    grade: Math.max(1, Math.min(7, year - 1990)),
    date,
    actions: data.time?.dailyActionLeft ?? 3,
    period: data.time?.nowTime || "上午",
    house: data.player?.house || HOUSE_NAMES[0],
  };
}

export function openCourseTestPanel() {
  document.getElementById("courseTestPanel")?.remove();
  document.getElementById("courseMain")?.remove();
  document.getElementById("classroomPanel")?.remove();
  const actionMain = document.getElementById("actionMain");
  if (actionMain) actionMain.style.display = "none";

  const options = subjectOptions();
  const state = stateDefaults();
  const panel = document.createElement("div");
  panel.id = "courseTestPanel";
  panel.className = "test-course-panel";
  panel.innerHTML = `
    <div class="test-course-head">
      <div>
        <div class="test-course-kicker">测试通道</div>
        <div class="test-course-title">课堂快速测试</div>
      </div>
      <button id="test-course-close" class="test-course-icon-btn" aria-label="关闭">x</button>
    </div>

    <div class="test-course-help">
        <b>怎么用：</b>选好年级、学院、科目和课次后，点“进入课堂”从开场开始；点阶段按钮可直接跳到讲课、答题或结果页。“模拟完成”会按所选成绩触发课程结算、好感和奖励钩子。
    </div>

    <div class="test-course-subtitle">学生状态</div>
    <div class="test-course-grid">
      <label>年级 <input id="test-state-grade" type="number" min="1" max="7" value="${state.grade}"></label>
      <label>学院
        <select id="test-state-house">${HOUSE_NAMES.map(house => `<option value="${house}" ${house === state.house ? "selected" : ""}>${house}</option>`).join("")}</select>
      </label>
    </div>

    <div class="test-course-subtitle">课程跳转</div>
    <div class="test-course-grid">
      <label class="test-course-wide">科目
        <select id="test-course-subject">
          ${options.map(item => `<option value="${item.key}">${item.type === "muggle" ? "麻瓜课程" : "霍格沃茨"} - ${escapeHtml(item.icon)} ${escapeHtml(item.name)}</option>`).join("")}
        </select>
      </label>
      <label class="test-course-wide">课次 <select id="test-course-lesson"></select></label>
    </div>
    <div class="test-course-actions">
      <button id="test-course-start" class="test-course-primary">进入课堂</button>
      ${STAGES.map(stage => `<button class="test-course-stage-btn" data-test-stage="${stage.key}">${stage.label}</button>`).join("")}
    </div>

    <div class="test-course-subtitle">模拟完成</div>
    <div class="test-course-grid">
      <label>成绩
        <select id="test-course-rating">
          ${Object.keys(RATING_SCORE).map(rating => `<option value="${rating}">${rating}</option>`).join("")}
        </select>
      </label>
      <label class="test-course-checkline"><input id="test-use-open-debug" type="checkbox"> 带上上一次开放题调试结果</label>
      <button id="test-sim-complete" class="test-course-inline-btn">完成并触发结算</button>
    </div>

    <details class="test-course-details">
      <summary>高级时间状态</summary>
      <div class="test-course-grid">
        <label class="test-course-wide">日期 <input id="test-state-date" type="date" value="${escapeHtml(state.date)}"></label>
        <label>行动次数 <input id="test-state-actions" type="number" min="0" max="9" value="${state.actions}"></label>
        <label>时段
          <select id="test-state-period">
            ${["上午", "下午", "晚上"].map(period => `<option value="${period}" ${period === state.period ? "selected" : ""}>${period}</option>`).join("")}
          </select>
        </label>
      </div>
    </details>

    <details class="test-course-details">
      <summary>开放题调试</summary>
      <div id="test-open-info"></div>
      <div class="test-course-grid">
        <label>预设答案
          <select id="test-open-preset">
            <option value="empty">空答案</option>
            <option value="weak">较弱</option>
            <option value="medium" selected>中等</option>
            <option value="full">完整</option>
          </select>
        </label>
        <button id="test-open-local" class="test-course-inline-btn">本地批改</button>
        <button id="test-open-ai" class="test-course-inline-btn">AI 批改/兜底</button>
      </div>
      <div id="test-open-result"></div>
    </details>

    <details class="test-course-details">
      <summary>完整性检查</summary>
      <div id="test-course-integrity" class="test-course-integrity"></div>
    </details>`;

  const logCard = document.getElementById("log")?.closest(".card");
  if (logCard) {
    logCard.insertAdjacentElement("afterend", panel);
  } else {
    document.body.appendChild(panel);
  }
  bindPanelEvents(panel);
  restoreSelectionFromHash();
  renderLessonOptions();
}

export function closeCourseTestPanel() {
  document.getElementById("courseTestPanel")?.remove();
  const actionMain = document.getElementById("actionMain");
  if (actionMain) actionMain.style.display = "block";
  ensureTestChannelEntry();
}

export function ensureTestChannelEntry() {
  document.getElementById("course-test-entry-btn")?.remove();

  const data = window.saveSys?.getSave?.();
  const isTestMode = !!data?.timeTurner?.isTestMode;
  let entry = document.getElementById("course-test-status-entry");
  let group = document.getElementById("course-test-status-group");
  const timeTurnerBtn = document.getElementById("timeTurnerBtn");
  if (!isTestMode) {
    if (group && timeTurnerBtn && timeTurnerBtn.parentElement === group) {
      group.insertAdjacentElement("beforebegin", timeTurnerBtn);
    }
    entry?.remove();
    group?.remove();
    return;
  }

  if (!timeTurnerBtn) return;

  if (!group) {
    group = document.createElement("span");
    group.id = "course-test-status-group";
    group.className = "status-action-icons";
  }
  if (!group.parentElement) {
    timeTurnerBtn.insertAdjacentElement("beforebegin", group);
  }
  if (timeTurnerBtn.parentElement !== group) {
    group.appendChild(timeTurnerBtn);
  }

  if (!entry) {
    entry = document.createElement("span");
    entry.id = "course-test-status-entry";
    entry.className = "bag-emoji-btn test-channel-entry";
    entry.setAttribute("aria-label", "课堂测试");
    entry.textContent = "🧪";
    entry.dataset.action = "open-course-test";
  }
  if (entry.parentElement !== group) {
    group.appendChild(entry);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ensureTestChannelEntry();
  if (parseHash()) {
    setTimeout(() => {
      if (document.getElementById("screen-main")?.classList.contains("active")) {
        openCourseTestPanel();
      } else {
        window.quickTest?.();
      }
    }, 200);
  }
});

window.openCourseTestPanel = openCourseTestPanel;
window.closeCourseTestPanel = closeCourseTestPanel;
window.ensureCourseTestEntry = ensureTestChannelEntry;

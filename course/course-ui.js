/**
 * course-ui.js
 * 课程系统 UI 渲染层
 *
 * 职责：纯UI，不含任何业务逻辑
 *   - 三级课程导航渲染
 *   - 分科按钮、返回按钮
 *   - 学习结果弹窗
 *   - 成就解锁提示
 *   - 学习进度条
 *
 * 依赖：
 *   course.js（业务逻辑接口）
 *   无直接DOM外的状态依赖
 */

// ── 工具函数 ──────────────────────────────────────────────

function el(id) { return document.getElementById(id); }

/**
 * 清空容器并渲染内容
 * @param {string|HTMLElement} container  容器ID或元素
 * @param {string} html
 */
function setHTML(container, html) {
  const c = typeof container === "string" ? el(container) : container;
  if (c) c.innerHTML = html;
}

// ── 进度条渲染 ────────────────────────────────────────────

/**
 * 渲染一个学习进度条
 * @param {number} rate  0~100
 * @param {string} label 标签文字
 */
export function renderProgressBar(rate, label = "") {
  const clamped = Math.min(100, Math.max(0, rate));
  const colorClass = clamped >= 80 ? "progress-fill--high"
    : clamped >= 40 ? "progress-fill--mid"
    : "progress-fill--low";
  return `
    <div class="course-progress-wrap">
      ${label ? `<span class="course-progress-label">${label}</span>` : ""}
      <div class="course-progress-bar">
        <div class="course-progress-fill ${colorClass}" style="width:${clamped}%"></div>
      </div>
      <span class="course-progress-pct">${clamped}%</span>
    </div>`;
}

// ── 评级徽章 ─────────────────────────────────────────────

const RATING_STYLE = {
  O: "rating-badge--O", E: "rating-badge--E", A: "rating-badge--A",
  P: "rating-badge--P", D: "rating-badge--D", T: "rating-badge--T"
};

export function renderRatingBadge(rating) {
  if (!rating) return "";
  return `<span class="rating-badge ${RATING_STYLE[rating] || ""}">${rating}</span>`;
}

// ── 一级导航：大类按钮 ────────────────────────────────────

/**
 * 渲染大类按钮列表
 * @param {Array} categories  [{name, icon, desc, locked}]
 * @param {Function} onClickCategory (category) => void
 */
export function renderCategoryButtons(categories, onClickCategory) {
  const container = el("course-category-list");
  if (!container) return;
  container.innerHTML = categories.map(cat => `
    <button
      class="btn course-cat-btn ${cat.locked ? "btn--locked" : ""}"
      data-cat="${cat.name}"
      ${cat.locked ? "disabled" : ""}
    >
      <span class="course-cat-icon">${cat.icon || "📚"}</span>
      <span class="course-cat-name">${cat.name}</span>
      ${cat.locked ? `<span class="course-cat-lock">🔒 ${cat.lockDesc || "未解锁"}</span>` : ""}
    </button>
  `).join("");

  container.querySelectorAll(".course-cat-btn:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = categories.find(c => c.name === btn.dataset.cat);
      if (cat) onClickCategory(cat);
    });
  });
}

// ── 二级导航：科目按钮 ────────────────────────────────────

/**
 * 渲染科目按钮列表
 * @param {Array} subjects  [{name, icon, desc, unlock, studyRate, unlockGrade}]
 * @param {Function} onClickSubject (subject) => void
 * @param {Function} onClickBack    () => void
 */
export function renderSubjectButtons(subjects, onClickSubject, onClickBack) {
  const container = el("course-subject-list");
  if (!container) return;

  const backBtn = `<button class="btn btn--back course-back-btn" id="course-back-to-cat">← 返回</button>`;
  const subjectCards = subjects.map(sub => `
    <button
      class="btn course-sub-btn ${sub.unlock ? "" : "btn--locked"}"
      data-subname="${sub.name}"
      ${sub.unlock ? "" : "disabled"}
    >
      <span class="course-sub-icon">${sub.icon || "📖"}</span>
      <div class="course-sub-info">
        <span class="course-sub-name">${sub.name}</span>
        <span class="course-sub-desc">${sub.desc || ""}</span>
        ${sub.unlock
          ? renderProgressBar(sub.studyRate || 0)
          : `<span class="course-sub-lock">🔒 需要 ${sub.unlockGrade} 年级</span>`}
      </div>
    </button>
  `).join("");

  container.innerHTML = backBtn + `<div class="course-sub-grid">${subjectCards}</div>`;

  el("course-back-to-cat")?.addEventListener("click", onClickBack);
  container.querySelectorAll(".course-sub-btn:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => {
      const sub = subjects.find(s => s.name === btn.dataset.subname);
      if (sub) onClickSubject(sub);
    });
  });
}

// ── 三级导航：麻瓜研究分科 ───────────────────────────────

/**
 * 渲染麻瓜研究九门分科按钮
 * @param {Array} muggleSubjects [{name, icon, key, unlock, studyRate, unlockGrade}]
 * @param {Function} onClickMuggle (muggleSub) => void
 * @param {Function} onClickBack   () => void
 */
export function renderMuggleSubjectButtons(muggleSubjects, onClickMuggle, onClickBack) {
  const container = el("course-muggle-list");
  if (!container) return;

  const backBtn = `<button class="btn btn--back course-back-btn" id="course-back-to-sub">← 返回</button>`;
  const cards = muggleSubjects.map(ms => `
    <button
      class="btn course-muggle-btn ${ms.unlock ? "" : "btn--locked"}"
      data-key="${ms.key}"
      ${ms.unlock ? "" : "disabled"}
    >
      <span class="course-muggle-icon">${ms.icon || "📚"}</span>
      <div class="course-muggle-info">
        <span class="course-muggle-name">${ms.name}</span>
        ${ms.unlock
          ? renderProgressBar(ms.studyRate || 0)
          : `<span class="course-sub-lock">🔒 需要 ${ms.unlockGrade} 年级</span>`}
      </div>
    </button>
  `).join("");

  container.innerHTML = backBtn + `<div class="course-muggle-grid">${cards}</div>`;

  el("course-back-to-sub")?.addEventListener("click", onClickBack);
  container.querySelectorAll(".course-muggle-btn:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => {
      const ms = muggleSubjects.find(s => s.key === btn.dataset.key);
      if (ms) onClickMuggle(ms);
    });
  });
}

// ── 学习结果弹窗 ─────────────────────────────────────────

/**
 * 显示学习结果弹窗
 * @param {object} result  { rating, comment, housePoints, internalDelta, newStudyRate, studyEventText, newAchievements }
 * @param {string} subjectName 科目名称
 * @param {Function} onClose 关闭回调
 */
export function showStudyResultModal(result, subjectName, onClose) {
  const {
    rating, comment, housePoints, internalDelta,
    newStudyRate, studyEventText, newAchievements = []
  } = result;

  const ratingColor = {
    O: "#ffd700", E: "#98e898", A: "#aad4f0",
    P: "#ddd", D: "#f88", T: "#f44"
  }[rating] || "#ccc";

  const achievementsHtml = newAchievements.length > 0
    ? `<div class="study-result-achievements">
        <div class="achieve-title">🏆 新成就解锁！</div>
        ${newAchievements.map(a => `
          <div class="achieve-item">
            <span class="achieve-icon">${a.icon}</span>
            <span class="achieve-name">${a.name}</span>
            <span class="achieve-pts">+${a.points}分</span>
          </div>
        `).join("")}
      </div>` : "";

  const modalHTML = `
    <div class="study-result-overlay" id="study-result-overlay">
      <div class="study-result-modal">
        <div class="study-result-header" style="border-color:${ratingColor}">
          <span class="study-result-subject">${subjectName}</span>
          ${rating ? `<span class="study-result-rating" style="color:${ratingColor}">${rating}</span>` : ""}
        </div>

        <p class="study-result-event">${studyEventText || ""}</p>

        ${comment ? `<div class="study-result-comment">"${comment}"</div>` : ""}

        <div class="study-result-stats">
          ${renderProgressBar(newStudyRate, "熟练度")}
          ${rating ? `<div class="study-stat-row">
            <span>🏅 学院分</span>
            <span style="color:${housePoints >= 0 ? "#8f8" : "#f66"}">${housePoints >= 0 ? "+" : ""}${housePoints}</span>
          </div>` : ""}
          <div class="study-stat-row">
            <span>📊 内部积分</span>
            <span style="color:#aad4f0">${internalDelta >= 0 ? "+" : ""}${internalDelta}</span>
          </div>
        </div>

        ${achievementsHtml}

        <button class="btn btn--action study-result-close" id="study-result-close-btn">继续</button>
      </div>
    </div>`;

  document.body.insertAdjacentHTML("beforeend", modalHTML);
  document.body.classList.add("modal-open");

  el("study-result-close-btn")?.addEventListener("click", () => {
    el("study-result-overlay")?.remove();
    document.body.classList.remove("modal-open");
    if (onClose) onClose();
  });
}

// ── 成就解锁Toast通知 ────────────────────────────────────

/**
 * 显示成就解锁通知（右下角浮动）
 * @param {object} achievement { icon, name, points }
 */
export function showAchievementToast(achievement) {
  const toast = document.createElement("div");
  toast.className = "achievement-toast";
  toast.innerHTML = `
    <span class="toast-icon">${achievement.icon}</span>
    <div class="toast-text">
      <div class="toast-title">成就解锁</div>
      <div class="toast-name">${achievement.name}</div>
    </div>
    <span class="toast-pts">+${achievement.points}</span>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("achievement-toast--show"), 50);
  setTimeout(() => {
    toast.classList.remove("achievement-toast--show");
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ── 课程屏幕切换 ─────────────────────────────────────────

const SCREENS = ["course-category-list", "course-subject-list", "course-muggle-list"];

/**
 * 切换显示哪个课程层级
 * @param {"category"|"subject"|"muggle"} level
 */
export function showCourseLevel(level) {
  const levelMap = {
    category: "course-category-list",
    subject:  "course-subject-list",
    muggle:   "course-muggle-list"
  };
  SCREENS.forEach(id => {
    const e = el(id);
    if (e) e.style.display = (id === levelMap[level]) ? "" : "none";
  });
}

// ── 学习页标题更新 ───────────────────────────────────────

export function setCourseTitle(text) {
  const t = el("course-title");
  if (t) t.textContent = text;
}

// ── 监听成就解锁全局事件 ─────────────────────────────────

window.addEventListener("achievementUnlocked", (e) => {
  showAchievementToast(e.detail.achievement);
});

// 全局挂载（供 course.js 调用）
window.courseUI = {
  renderProgressBar,
  renderRatingBadge,
  renderCategoryButtons,
  renderSubjectButtons,
  renderMuggleSubjectButtons,
  showStudyResultModal,
  showAchievementToast,
  showCourseLevel,
  setCourseTitle
};

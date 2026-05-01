/**
 * course.js
 * 课程系统主逻辑 & UI
 *
 * 导航层级：
 *   根层  → 大类（必修/选修/专精）
 *   二层  → 具体科目（点击非麻瓜研究直接学习）
 *   三层  → 麻瓜研究九门分科（点击麻瓜研究先进这一层）
 *
 * 依赖：
 *   course-data.js          → courseData / getStudyEvent / getMuggleStudiesEvent
 *   muggle-studies-system.js → unlockAchievement / addInternalPoints / SCORE_MAP
 */

import { loadTimeFromSave } from '../time-system.js';
import { getYearGrade } from '../save-system.js';
import { courseData, getStudyEvent } from './course-data.js';
import { addInternalPoints } from './muggle-studies.js';
import { loadSave, writeSave } from './save-utils.js';
import { showLearnChoiceModal } from './classroom.js';

export function getCurrentGrade() {
  return getYearGrade();
}

// ============================================================
// 解锁更新（遍历三级结构）
// ============================================================

export function autoUpdateCourseUnlock() {
  const nowGrade = getCurrentGrade();

  function traverse(list) {
    list.forEach(item => {
      if (item.children) {
        // 父节点自身解锁状态（三级情况下 children 父也有 unlockGrade）
        if (item.unlockGrade !== undefined) {
          item.unlock = nowGrade >= item.unlockGrade;
        }
        traverse(item.children);
      } else {
        item.unlock = nowGrade >= item.unlockGrade;
      }
    });
  }

  traverse(courseData);
}

// ============================================================
// UI 样式
// ============================================================

const courseBtnStyle = [
  "width:100%",
  "text-align:left",
  "padding:10px 12px",
  "border:none",
  "border-radius:6px",
  "background:#1d3b3a",
  "color:#e0f7f5",
  "cursor:pointer",
  "box-sizing:border-box",
  "transition:all 0.2s",
  "min-height:120px"
].join(";") + ";";

const courseBtnHover = "background:#2b5654;";

function createCourseButton(data, onClickHandler) {
  const btn = document.createElement("button");
  btn.style.cssText = courseBtnStyle;

  const name = document.createElement("div");
  name.style.fontSize = "15px";
  name.innerText = data.name;
  btn.appendChild(name);

  const desc = document.createElement("div");
  desc.style.cssText = "font-size:12px;color:#b2dfdb;margin-top:4px;";
  desc.innerText = data.desc;
  btn.appendChild(desc);

  if (data.tip) {
    const tip = document.createElement("div");
    tip.style.cssText = `font-size:11px;margin-top:2px;color:${data.tipColor || "#88f8d8"};`;
    tip.innerText = data.tip;
    btn.appendChild(tip);
  }

  if (data.professor) {
    const prof = document.createElement("div");
    prof.style.cssText = "font-size:10px;margin-top:4px;color:#7ecdc8;opacity:0.8;";
    prof.innerText = `👤 ${data.professor}`;
    btn.appendChild(prof);
  }

  btn.addEventListener("mouseover", () => btn.style.cssText = courseBtnStyle + courseBtnHover);
  btn.addEventListener("mouseout",  () => btn.style.cssText = courseBtnStyle);
  btn.addEventListener("click", onClickHandler);

  return btn;
}

function createBackButton(label, callback) {
  const back = document.createElement("button");
  back.className = "action-btn";
  back.innerText = `← ${label}`;
  back.style.cssText = "position:sticky;top:0;z-index:999;grid-column:1 / -1;margin-bottom:8px;";
  back.addEventListener("click", callback);
  return back;
}

// ============================================================
// 面板状态（三层导航栈）
// ============================================================

let navStack = [];   // [{list, title}] 导航历史栈

// ============================================================
// 面板开关
// ============================================================

export function openCoursePanel() {
  loadTimeFromSave();

  document.getElementById("actionMain").style.display = "none";
  const exploreMain = document.getElementById("exploreMain");
  if (exploreMain) exploreMain.style.display = "none";

  let oldPanel = document.getElementById("courseMain");
  if (oldPanel) oldPanel.remove();

  const courseBox = document.createElement("div");
  courseBox.id = "courseMain";
  courseBox.innerHTML = `<div class="title">🪶 学习课程</div>`;

  const container = document.createElement("div");
  container.id = "course-container";
  container.style.cssText = "max-height:400px;overflow:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;";

  const backBtn = document.createElement("button");
  backBtn.className = "action-btn";
  backBtn.innerText = "← 返回行动";
  backBtn.style.marginTop = "10px";
  backBtn.addEventListener("click", closeCoursePanel);

  const card = document.querySelector("#actionMain")?.closest(".card");
  if (card) {
    card.appendChild(courseBox);
    courseBox.appendChild(container);
    courseBox.appendChild(backBtn);
  }

  navStack = [];
  loadCourseProgressFromSave(); // 先读 studyRate
  autoUpdateCourseUnlock();     // 再计算 unlock（必须在 loadProgress 之后）
  renderLevel(courseData, "课程列表");
}

export function closeCoursePanel() {
  const box = document.getElementById("courseMain");
  if (box) box.remove();
  document.getElementById("actionMain").style.display = "block";
  navStack = [];
}

// ============================================================
// 渲染层（通用，适配三级导航）
// ============================================================

/**
 * 渲染任意一层列表
 * @param {Array} items   当前层的数据列表
 * @param {string} title  当前层标题（用于面包屑返回按钮）
 */
function renderLevel(items, title) {
  const wrap = document.getElementById("course-container");
  if (!wrap) return;
  wrap.innerHTML = "";

  // 返回按钮（根层不显示）
  if (navStack.length > 0) {
    const prev = navStack[navStack.length - 1];
    wrap.appendChild(createBackButton(prev.title, () => {
      navStack.pop();
      if (navStack.length === 0) {
        renderLevel(courseData, "课程列表");
      } else {
        const top = navStack[navStack.length - 1];
        renderLevel(top.items, top.title);
      }
    }));
  }

  const nowGrade = getCurrentGrade();

  items.forEach(item => {
    // ── 大类节点（有 children，但没有 unlockGrade）── 进入下一层
    if (item.children && item.unlockGrade === undefined) {
      const btn = createCourseButton(
        { name: `${item.icon} ${item.name}`, desc: item.desc },
        () => {
          navStack.push({ items, title });
          renderLevel(item.children, item.name);
        }
      );
      wrap.appendChild(btn);
      return;
    }

    // ── 麻瓜研究（hasMuggleStudiesSystem，有 children，有 unlockGrade）── 进入分科层
    if (item.hasMuggleStudiesSystem && item.children) {
      const locked = !item.unlock;
      const rateText = calcMuggleOverallRate(item.children);

      const btn = createCourseButton(
        {
          name: `${item.icon} ${item.name}  ${rateText}`,
          desc: item.desc,
          tip: locked
            ? `🔒 解锁条件：${item.unlockGrade} 年级`
            : `✅ 已解锁  当前${nowGrade}年级｜共九门分科`,
          tipColor: locked ? "#ff8888" : "#88f8d8"
        },
        () => {
          if (locked) {
            window.doStudyLog?.(`❌ 无法进入【${item.name}】：需要 ${item.unlockGrade} 年级`);
            return;
          }
          navStack.push({ items, title });
          renderLevel(item.children, "麻瓜研究 · 分科");
        }
      );
      if (locked) { btn.style.opacity = "0.6"; btn.style.cursor = "not-allowed"; }
      wrap.appendChild(btn);
      return;
    }

    // ── 叶节点（可直接学习的科目）──
    const isComplete = item.studyRate >= 100;
    const rateText = isComplete ? "【已完全掌握】" : `（${item.studyRate || 0}%）`;

    const btn = createCourseButton(
      {
        name: `${item.icon} ${item.name}  ${rateText}`,
        desc: item.desc,
        professor: item.professor || null,
        tip: item.unlock
          ? `✅ 已解锁｜当前${nowGrade}年级`
          : `🔒 解锁条件：${item.unlockGrade} 年级`,
        tipColor: item.unlock ? "#88f8d8" : "#ff8888"
      },
      () => {
        if (!item.unlock) {
          window.doStudyLog?.(`❌ 无法学习【${item.name}】：需要 ${item.unlockGrade} 年级`);
          return;
        }
        if (isComplete) {
          window.doStudyLog?.(`✅ ${item.name} 已完全掌握`);
          return;
        }
        // 弹出选择弹窗（好好学习 / 随便学学）
        showLearnChoiceModal(item, items, title);
      }
    );

    if (!item.unlock || isComplete) {
      btn.style.opacity = "0.6";
      btn.style.cursor = "not-allowed";
    }

    wrap.appendChild(btn);
  });
}

// ============================================================
// 辅助函数
// ============================================================

/** 计算麻瓜研究总进度文本（九门均值） */
function calcMuggleOverallRate(subjects) {
  if (!subjects || subjects.length === 0) return "（0%）";
  const avg = subjects.reduce((s, c) => s + (c.studyRate || 0), 0) / subjects.length;
  return avg >= 100 ? "【已完全掌握】" : `（${Math.round(avg)}%）`;
}

// ============================================================
// 存档读取（支持三级结构）
// ============================================================

function loadCourseProgressFromSave() {
  const data = loadSave();
  if (!data.course) return;

  function traverse(items) {
    items.forEach(it => {
      if (it.children) traverse(it.children);
      else it.studyRate = data.course[it.name] || 0;
    });
  }
  traverse(courseData);
}

// ============================================================
// 全局挂载 & 导出
// ============================================================

window.openCoursePanel       = openCoursePanel;
window.closeCoursePanel      = closeCoursePanel;
window.autoUpdateCourseUnlock = autoUpdateCourseUnlock;
window.getCurrentGrade       = getCurrentGrade;
window.renderLevelFn         = renderLevel;

export default {
  openCoursePanel,
  closeCoursePanel,
  autoUpdateCourseUnlock,
  getCurrentGrade
};
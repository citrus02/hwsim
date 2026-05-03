// ui-render.js — UI 渲染 + 全局刷新 + 标签页初始化

import { getSave, renderLog, renderTimeline } from './save-system.js';

const allCourseList = [
  "变形术","魔咒学","魔药学","黑魔法防御术","草药学","魔法史","天文学","飞行课",
  "算术占卜","古代魔文","占卜学","保护神奇动物","麻瓜研究","幻影移形","炼金术"
];

export function renderCourse() {
  const data = getSave();
  const wrap = document.getElementById("courseList");
  if (!wrap) return;
  wrap.innerHTML = "";
  allCourseList.forEach(name => {
    const v = data.course[name] || 0;
    let lvl = "未学习";
    if (v >= 100) lvl = "精通";
    else if (v >= 75) lvl = "优秀";
    else if (v >= 50) lvl = "良好";
    else if (v >= 20) lvl = "普通";
    else if (v > 0) lvl = "初学";
    const div = document.createElement("div");
    div.className = "course-item";
    div.innerText = `${name} | ${v}% | ${lvl}`;
    wrap.appendChild(div);
  });
}

export function refreshAll() {
  const data = getSave();
  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
  };
  setText("stat-name", data.player?.name || "—");
  setText("stat-blood", data.player?.blood || "—");
  setText("stat-house", data.player?.house || "—");
  setText("stat-wand", data.player?.wand || "—");
  setText("stat-galleons", data.player?.galleons ?? 10);
  const curDate = data.time?.currentDate || "1991-09-02";
  setText("date", curDate);
  setText("timeOfDay", data.time?.nowTime || "早晨");
  setText("actions", data.time?.dailyActionLeft ?? 3);

  const weekdays = ["周日","周一","周二","周三","周四","周五","周六"];
  const dateObj  = new Date(curDate);
  setText("weekday", weekdays[dateObj.getDay()]);

  window.currency?.refreshCurrencyUI?.();
  window.housePoints?.refreshHousePointsUI?.();
  if (window.renderBag) window.renderBag();
  renderLog();
  renderTimeline();
}

// ── 内嵌人物关系面板初始化 ──
export function renderAffinityInline() {
  const mount = document.getElementById('info-affinity-mount');
  if (mount && window.affinityUI?.renderAffinityPanelInline) {
    window.affinityUI.renderAffinityPanelInline(mount);
  }
}

function initTabs() {
  // 主标签页（日常/时间轴/信息/背包）
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-screen").forEach(s => s.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${tab}`).classList.add("active");
      refreshAll();
    });
  });

  // 背包标签页
  document.querySelectorAll(".bag-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      if (window.setBagType) window.setBagType(btn.dataset.bag);
    });
  });

  // ── 信息页子标签切换（档案/咒语/人物关系/任务） ──
  document.querySelectorAll(".info-sub-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      const sub = btn.dataset.sub;
      document.querySelectorAll(".info-sub-tab").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".info-sub-screen").forEach(s => s.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`info-sub-${sub}`).classList.add("active");

      if (sub === 'grimoire') {
        window._renderInlineGrimoire?.();
      }
      if (sub === 'affinity') {
        renderAffinityInline();  // 直接调用
      }
      if (sub === 'quest') {
        window.renderQuestPanel?.();
      }
    });
  });
}

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  refreshAll();
  // 初始化人物关系面板（防止页面加载时为空）
  setTimeout(renderAffinityInline, 200);
  if (window.saveSys?.checkYearUpgrade) window.saveSys.checkYearUpgrade();
});

// 全局挂载
window.refreshAll = refreshAll;
window.renderCourse = renderCourse;
window.renderAffinityInline = renderAffinityInline;
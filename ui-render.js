// ui-render.js — UI 渲染 + 全局刷新 + 标签页初始化

import { getSave, setSave, addLog, renderLog, renderTimeline } from './save/save-system.js';
import { getDateEventName } from './time-system.js';

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

function escapeHtml(text = "") {
  return String(text).replace(/[&<>"']/g, ch => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

function joinUniqueTextSegments(segments = []) {
  const seen = new Set();
  return segments
    .map(text => String(text || "").trim().replace(/\s+/g, " "))
    .filter(text => {
      if (!text || seen.has(text)) return false;
      seen.add(text);
      return true;
    })
    .join(" ");
}

let worldPaperTab = "dynamic"; // 面板内子标签，跨刷新保持
let worldPaperCollapsed = false; // 城堡动向折叠状态，跨刷新保持

export function renderWorldPaper() {
  const mount = document.getElementById("world-paper-content");
  if (!mount) return;
  const toggle = document.getElementById("world-paper-toggle");
  if (toggle) {
    toggle.textContent = worldPaperCollapsed ? "→" : "↓";
    toggle.setAttribute("aria-label", worldPaperCollapsed ? "展开城堡动向" : "收起城堡动向");
    toggle.setAttribute("aria-expanded", String(!worldPaperCollapsed));
    toggle.onclick = () => {
      worldPaperCollapsed = !worldPaperCollapsed;
      renderWorldPaper();
    };
  }

  mount.hidden = worldPaperCollapsed;
  if (worldPaperCollapsed) return;

  const data = getSave();
  const world = data.world || {};
  const daily = world.daily || {};
  const seen = new Set();
  const fresh = (text) => {
    const t = String(text || "").trim();
    if (!t || seen.has(t)) return "";
    seen.add(t);
    return t;
  };

  const fixed = []; // 始终显示：简报 + 找你

  // 1. 简报：当天的头条，醒目独立
  const headline = fresh(joinUniqueTextSegments([daily.mood, daily.summary]));
  if (headline) {
    const dateline = window.timeSystem?.currentDate
      ? `<span class="world-paper-dateline">🪶 ${escapeHtml(window.timeSystem.currentDate)} · 城堡见闻</span>`
      : "";
    fixed.push(`<div class="world-paper-headline">${dateline}${escapeHtml(headline)}</div>`);
  }

  // 2. 找你：可操作，置顶高亮
  const proactiveHooks = window.proactiveScheduler?.getProactiveHooks?.() || [];
  proactiveHooks
    .map(hook => fresh(`${hook.characterName || "有人"}好像在找你`))
    .filter(Boolean)
    .forEach(text => fixed.push(`<div class="world-paper-cta">🔔 ${escapeHtml(text)}</div>`));

  // 类型元信息：图标 + 颜色样式，让每条动态有画面感
  const META = {
    传闻: { icon: "🕯️", cls: "rumor" },
    课程: { icon: "📖", cls: "course" },
    人际: { icon: "🤝", cls: "relation" },
    关系: { icon: "💫", cls: "affinity" },
    后续: { icon: "🧵", cls: "followup" },
    地点: { icon: "📍", cls: "place" },
  };
  const renderCard = (tag, text) => {
    const t = fresh(text);
    if (!t) return "";
    const m = META[tag] || { icon: "•", cls: "misc" };
    return `<div class="world-card world-card-${m.cls}">
      <span class="world-card-icon">${m.icon}</span>
      <span class="world-card-text"><b class="world-card-kind">${escapeHtml(tag)}</b>${escapeHtml(t)}</span>
    </div>`;
  };

  // 3. 传闻与动态
  const tagMap = { course: "课程", relation: "人际", followup: "后续", affinity: "关系", bond: "关系" };
  const dynamicRows = [
    ...(world.rumors || []).slice(-3).reverse().map(item => ({ tag: "传闻", text: item.text || item })),
    ...(world.memory || [])
      .filter(item => ["course", "relation", "followup", "affinity", "bond"].includes(item.type))
      .slice(-4).reverse()
      .map(item => ({ tag: tagMap[item.type] || "动态", text: item.text })),
  ].map(row => renderCard(row.tag, row.text)).filter(Boolean);

  // 4. 地点近况
  const locationRows = Object.entries(world.locationStatus || {}).slice(-3)
    .map(([location, status]) => renderCard("地点", `${location}：${status?.text || status}`))
    .filter(Boolean);

  // 5. 关系网（NPC↔NPC，世界自走的暗线）
  const bands = { 亲近: "warm", 微妙: "neutral", 紧张: "cold" };
  const bandIcon = { 亲近: "💛", 微妙: "🌫️", 紧张: "⚡" };
  const bondRows = (window.npcEvents?.getNpcBonds?.() || []).slice(0, 6).map(bond =>
    `<div class="world-bond-row">
      <span class="world-bond-pair"><span class="world-bond-glyph">${bandIcon[bond.band] || "🌫️"}</span>${escapeHtml(bond.a)} <span class="world-bond-link">—</span> ${escapeHtml(bond.b)}</span>
      <span class="world-bond-band band-${bands[bond.band] || "neutral"}">${escapeHtml(bond.band)}</span>
    </div>`
  );

  const groups = [
    { key: "dynamic", label: "动态", rows: dynamicRows },
    { key: "location", label: "地点", rows: locationRows },
    { key: "bonds", label: "关系网", rows: bondRows },
  ].filter(g => g.rows.length);

  if (!fixed.length && !groups.length) {
    mount.innerHTML = `<div class="world-paper-empty">城堡今天还没有新的传闻。</div>`;
    return;
  }

  const parts = [...fixed];
  if (groups.length) {
    if (!groups.some(g => g.key === worldPaperTab)) worldPaperTab = groups[0].key;
    const active = groups.find(g => g.key === worldPaperTab);
    parts.push(`
      <div class="world-paper-tabs">
        ${groups.map(g =>
          `<button class="world-paper-tab${g.key === worldPaperTab ? " active" : ""}" data-wtab="${g.key}">${escapeHtml(g.label)}</button>`
        ).join("")}
      </div>
      <div class="world-paper-tabbody">${active.rows.join("")}</div>`);
  }

  mount.innerHTML = parts.join("");

  mount.querySelectorAll(".world-paper-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      worldPaperTab = btn.dataset.wtab;
      renderWorldPaper();
    });
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
  const curDate = data.time?.currentDate || "1991-09-02";
  setText("date", curDate);
  setText("timeOfDay", data.time?.nowTime || "上午");
  setText("dateEvent", getDateEventName(curDate));
  setText("actions", data.time?.dailyActionLeft ?? 3);

  const weekdays = ["周日","周一","周二","周三","周四","周五","周六"];
  const dateObj  = new Date(curDate);
  setText("weekday", weekdays[dateObj.getDay()]);

  window.currency?.refreshCurrencyUI?.();
  window.housePoints?.refreshHousePointsUI?.();
  if (window.loadTimeFromSave) window.loadTimeFromSave();
  if (window.renderBag) window.renderBag();
  renderLog();
  renderTimeline();
  renderWorldPaper();

  if (document.getElementById("courseMain")) {
    const scheduleContainer = document.getElementById("schedule-container");
    const muggleScheduleContainer = document.getElementById("muggle-schedule-container");
    if (scheduleContainer && scheduleContainer.style.display !== "none") {
      window.courseAttendance?.getTodayScheduledCourses?.();
      const renderFn = window.courseAttendance?._renderSchedule || (() => {});
      renderFn(scheduleContainer);
    } else if (muggleScheduleContainer && muggleScheduleContainer.style.display !== "none") {
      const renderFn = window.courseAttendance?._renderMuggleSchedule || (() => {});
      renderFn(muggleScheduleContainer);
    }
  }

  const ttBtn = document.getElementById("timeTurnerBtn");
  if (ttBtn) {
    const hasTT = data.timeTurner?.usesLeft !== undefined || (data.bag?.item || []).some(i => i.name === "时间转换器");
    ttBtn.style.display = hasTT ? "inline" : "none";
    window.ensureCourseTestEntry?.();
  }

  const dateEl = document.getElementById("date");
  const weekdayEl = document.getElementById("weekday");
  const todEl = document.getElementById("timeOfDay");
  const eventEl = document.getElementById("dateEvent");
  if (dateEl && data.timeTurner?.isTraveling) {
    dateEl.style.color = "#c9a84c";
    if (weekdayEl) weekdayEl.style.color = "#c9a84c";
    if (todEl) todEl.style.color = "#c9a84c";
    if (eventEl) eventEl.style.color = "#c9a84c";
  } else if (dateEl) {
    dateEl.style.color = "";
    if (weekdayEl) weekdayEl.style.color = "";
    if (todEl) todEl.style.color = "";
    if (eventEl) eventEl.style.color = "";
  }

  if (window.storyEngine?.hasActiveStory?.()) {
    setTimeout(() => window.storyEngine.resumeActiveStory(), 300);
  } else {
    const available = window.storyEngine?.getAvailableStoryEvents?.();
    if (available?.length > 0) {
      const d = getSave();
      const notified = d._storyNotified || [];
      if (!notified.includes(available[0].id)) {
        d._storyNotified = [...notified, available[0].id];
        setSave(d);
        addLog(`📜 剧情事件：「${available[0].title}」即将发生，可选择前往时间轴参与剧情`);
      }
    }
  }
}

// ── 内嵌人物关系面板初始化 ──
export function renderAffinityInline() {
  const mount = document.getElementById('info-affinity-mount');
  if (mount && window.affinityUI?.renderAffinityPanelInline) {
    window.affinityUI.renderAffinityPanelInline(mount);
  }
}

function initTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-screen").forEach(s => s.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${tab}`).classList.add("active");
      refreshAll();

      if (tab === 'affinity') {
        renderAffinityInline();
      }
      if (tab === 'quest') {
        window.renderQuestPanel?.();
      }
    });
  });

  // 背包标签页
  document.querySelectorAll(".bag-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      if (window.setBagType) window.setBagType(btn.dataset.bag);
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
window.renderWorldPaper = renderWorldPaper;

export function openProfilePanel() {
  document.getElementById("profilePanelModal")?.remove();

  const data = getSave();
  const p = data.player || {};

  const overlay = document.createElement('div');
  overlay.id = 'profilePanelModal';
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.6); z-index: 9999;
    display: flex; align-items: center; justify-content: center;
  `;
  overlay.addEventListener('click', e => { if (e.target === overlay) closeProfilePanel(); });

  const panel = document.createElement('div');
  panel.style.cssText = `
    background: #1a1a2e; border: 2px solid #3a3b66; border-radius: 12px;
    width: 90vw; max-width: 420px; max-height: 80vh; overflow-y: auto;
    padding: 16px; color: #e6e6e6;
  `;

  panel.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <div style="font-size:16px; font-weight:bold; color:#f8c850;">📋 角色信息</div>
      <button data-profile-action="close" style="background:none; border:none; color:#aaa; font-size:18px; cursor:pointer;">✕</button>
    </div>
    <div class="info-grid-2x2">
      <div class="ig-cell">
        <div class="ig-label">姓名</div>
        <div class="ig-value" id="stat-name"></div>
      </div>
      <div class="ig-cell">
        <div class="ig-label">出身</div>
        <div class="ig-value" id="stat-blood"></div>
      </div>
      <div class="ig-cell">
        <div class="ig-label">学院</div>
        <div class="ig-value" id="stat-house" style="display:flex;align-items:center;justify-content:space-between"><span id="stat-house-name"></span><span id="stat-house-icon" style="font-size:2.4em;line-height:1"></span></div>
      </div>
      <div class="ig-cell">
        <div class="ig-label">魔杖</div>
        <div class="ig-value" id="stat-wand"></div>
      </div>
    </div>
    <div class="house-points-detail">
      <div class="hp-detail-title">🏆 学院杯</div>
      <div class="hourglasses">
        <div class="hg-col" data-house="gryffindor">
          <div class="hg-label">🦁 格兰芬多</div>
          <div class="hg-body">
            <div class="hg-neck"></div>
            <div class="hg-glass">
              <div class="hg-sand" id="hg-sand-gryffindor"></div>
            </div>
          </div>
          <div class="hg-score" id="hp-score-g">0</div>
        </div>
        <div class="hg-col" data-house="hufflepuff">
          <div class="hg-label">🦡 赫奇帕奇</div>
          <div class="hg-body">
            <div class="hg-neck"></div>
            <div class="hg-glass">
              <div class="hg-sand" id="hg-sand-hufflepuff"></div>
            </div>
          </div>
          <div class="hg-score" id="hp-score-h">0</div>
        </div>
        <div class="hg-col" data-house="ravenclaw">
          <div class="hg-label">🦅 拉文克劳</div>
          <div class="hg-body">
            <div class="hg-neck"></div>
            <div class="hg-glass">
              <div class="hg-sand" id="hg-sand-ravenclaw"></div>
            </div>
          </div>
          <div class="hg-score" id="hp-score-r">0</div>
        </div>
        <div class="hg-col" data-house="slytherin">
          <div class="hg-label">🐍 斯莱特林</div>
          <div class="hg-body">
            <div class="hg-neck"></div>
            <div class="hg-glass">
              <div class="hg-sand" id="hg-sand-slytherin"></div>
            </div>
          </div>
          <div class="hg-score" id="hp-score-s">0</div>
        </div>
      </div>
    </div>
  `;

  panel.addEventListener('click', event => {
    if (event.target.closest("[data-profile-action='close']")) {
      closeProfilePanel();
    }
  });

  overlay.appendChild(panel);
  document.body.appendChild(overlay);
  const houseIcons = { '格兰芬多': '🦁', '斯莱特林': '🐍', '拉文克劳': '🦅', '赫奇帕奇': '🦡' };
  const setProfileText = (id, value, fallback = '—') => {
    const el = document.getElementById(id);
    if (el) el.textContent = value || fallback;
  };
  setProfileText("stat-name", p.name);
  setProfileText("stat-blood", p.blood);
  setProfileText("stat-house-name", p.house);
  setProfileText("stat-wand", p.wand);
  setProfileText("stat-house-icon", houseIcons[p.house] || '', '');
  window.housePoints?.refreshHousePointsUI?.();
}

export function closeProfilePanel() {
  document.getElementById("profilePanelModal")?.remove();
}

window.openProfilePanel = openProfilePanel;
window.closeProfilePanel = closeProfilePanel;
window.renderAffinityInline = renderAffinityInline;

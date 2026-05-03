import { spellData } from "./spell-data.js";

// ==============================================
// 咒语系统核心（存档、解锁、熟练度、施法）
// ==============================================

// 初始化咒语存档
export function initSpellSave() {
  const save = JSON.parse(localStorage.getItem("hogwarts")) || {};
  if (!save.spellList) save.spellList = [];
  if (!save.spellProficiency) save.spellProficiency = {};
  if (!save.darkMagicRecord) save.darkMagicRecord = 0;
  localStorage.setItem("hogwarts", JSON.stringify(save));
}

function getSave() {
  return JSON.parse(localStorage.getItem("hogwarts")) || {};
}

function setSave(data) {
  localStorage.setItem("hogwarts", JSON.stringify(data));
}

// 课程自动解锁咒语
export function autoUnlockByCourse() {
  initSpellSave();
  const save = getSave();
  const courseData = save.course || {};
  let hasNew = false;

  spellData.forEach(spell => {
    if (spell.sourceType !== "hogwarts") return;
    if (!spell.unlockCourse) return;
    const nowPercent = courseData[spell.unlockCourse] || 0;

    if (nowPercent >= spell.unlockPercent && !save.spellList.includes(spell.id)) {
      save.spellList.push(spell.id);
      hasNew = true;
      if (window.doStudyLog) {
        window.doStudyLog(`📜 课程进阶解锁：${spell.nameCn}`);
      }
    }
  });

  if (hasNew) setSave(save);
  return hasNew;
}

// 解锁单个咒语
export function unlockSingleSpell(spellId) {
  initSpellSave();
  const save = getSave();
  if (save.spellList.includes(spellId)) return false;
  const target = spellData.find(s => s.id === spellId);
  if (!target) return false;

  save.spellList.push(spellId);
  if (target.sourceType === "dark") save.darkMagicRecord += 1;

  setSave(save);
  if (window.doStudyLog) {
    window.doStudyLog(`🔮 习得新咒语：${target.nameCn}`);
  }
  return true;
}

// 获取已学咒语
export function getLearnedSpell() {
  const save = getSave();
  return save.spellList || [];
}

// 带解锁+熟练度数据
export function getSpellListWithStatus() {
  const learned = getLearnedSpell();
  const save = getSave();
  const prof = save.spellProficiency || {};

  return spellData.map(item => {
    return {
      ...item,
      isLearned: learned.includes(item.id),
      proficiency: prof[item.id] ?? 0,
      maxProficiency: 100
    };
  });
}

/* ✅ FIX #5：预加载事件库，避免异步延迟 */
let spellEventLib = null;

async function loadSpellEvents() {
  if (spellEventLib) return spellEventLib;
  try {
    const mod = await import("./spell-default.js");
    spellEventLib = mod.spellEventLib;
    return spellEventLib;
  } catch (e) {
    console.error("❌ 加载咒语事件库失败", e);
    return { "默认": ["施法成功！"] };
  }
}

// 施法（不再涨熟练度——熟练度只能在决斗中获得）
export function castSpell(spellId) {
  const list = getLearnedSpell();
  if (!list.includes(spellId)) {
    if (window.doStudyLog) window.doStudyLog(`❌ 尚未学会该咒语`);
    return false;
  }
  const spell = spellData.find(s => s.id === spellId);
  if (!spell) return false;

  if (window.doStudyLog && spellEventLib) {
    const events = spellEventLib[spellId] || spellEventLib["默认"];
    const event = events[Math.floor(Math.random() * events.length)];
    window.doStudyLog(`🪄 施法：${spell.nameCn}｜${event}`);
  }
  return true;
}

/**
 * 决斗专用：增加熟练度
 * @param {string} spellId
 * @param {number} amount  增加量（0-100），由决斗系统根据精准度计算传入
 * @returns {number} 新的熟练度值
 */
export function gainProficiency(spellId, amount) {
  const save = getSave();
  if (!save.spellProficiency) save.spellProficiency = {};

  const old = save.spellProficiency[spellId] || 0;
  if (old >= 100) return 100;

  const next = Math.min(100, old + Math.round(amount));
  save.spellProficiency[spellId] = next;
  setSave(save);
  return next;
}

window.gainProficiency = gainProficiency;

window.autoUnlockByCourse = autoUnlockByCourse;

// ==============================================
// 咒语图鉴 UI（只读展示，不能施法，不涨熟练度）
// ==============================================
import { costAction, timeSystem, nextTime, syncActionUI } from "./time-system.js";
import { getGestureBySpellId } from "./gesture-data.js";

let currentSpellSourceType = "hogwarts";
let allSpellData = [];

export function openSpellPanel() {
  autoUnlockByCourse();
  loadSpellEvents();

  document.getElementById("actionMain").style.display = "none";
  const exploreMain = document.getElementById("exploreMain");
  if (exploreMain) exploreMain.style.display = "none";

  document.getElementById("spellMain")?.remove();

  const spellBox = document.createElement("div");
  spellBox.id = "spellMain";

  // ── 标题 ──
  spellBox.innerHTML = `
    <div class="title">📖 咒语图鉴</div>
    <div class="spell-grimoire-tip">
      🏅 熟练度通过<strong>决斗训练</strong>提升，课堂学理论，决斗练技巧
    </div>
    <div class="spell-tab-row" id="spell-tab-row">
      <button class="spell-tab-btn active" data-type="hogwarts">📚 课程咒语</button>
      <button class="spell-tab-btn" data-type="self">📖 自学/特殊</button>
      <button class="spell-tab-btn" data-type="dark">💀 黑魔法</button>
    </div>
    <div id="spell-list-wrap"></div>
    <button class="action-btn" id="spell-back-btn" style="margin-top:10px;">← 返回行动</button>`;

  const card = document.querySelector("#actionMain").closest(".card");
  card.appendChild(spellBox);

  document.getElementById("spell-back-btn").onclick = closeSpellPanel;

  // 标签切换
  document.querySelectorAll(".spell-tab-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".spell-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentSpellSourceType = btn.dataset.type;
      renderGrimoireList();
    };
  });

  allSpellData = getSpellListWithStatus();
  currentSpellSourceType = "hogwarts";
  renderGrimoireList();
}

export function closeSpellPanel() {
  document.getElementById("spellMain")?.remove();
  document.getElementById("actionMain").style.display = "block";
}

function renderGrimoireList() {
  const wrap = document.getElementById("spell-list-wrap");
  if (!wrap) return;

  const list = allSpellData.filter(s => s.sourceType === currentSpellSourceType);

  if (list.length === 0) {
    wrap.innerHTML = `<div class="spell-grimoire-empty">暂无咒语</div>`;
    return;
  }

  wrap.innerHTML = list.map(spell => {
    const gesture  = getGestureBySpellId(spell.id);
    const prof     = spell.proficiency || 0;
    const profText = prof >= 100 ? "精通" : `${prof}%`;
    const profBar  = `<div class="sg-prof-wrap">
      <div class="sg-prof-bar" style="width:${prof}%"></div>
    </div>`;

    const learnedClass = spell.isLearned ? "" : "sg-card-locked";
    const nameColor    = spell.isLearned ? "var(--color-gold)" : "var(--color-text-light)";
    const lockBadge    = spell.isLearned ? "" : `<span class="sg-lock">🔒</span>`;
    const unlockHint   = !spell.isLearned && spell.unlockCourse
      ? `<div class="sg-unlock-hint">需【${spell.unlockCourse}】≥${spell.unlockPercent ?? 0}%</div>`
      : "";
    const gestureBadge = gesture
      ? `<span class="sg-gesture-badge">✋ 有手势</span>`
      : "";
    const profSection  = spell.isLearned ? `
      <div class="sg-prof-row">
        <span class="sg-prof-label">决斗熟练度</span>
        <span class="sg-prof-num">${profText}</span>
      </div>
      ${profBar}` : "";

    return `<div class="sg-card ${learnedClass}">
      <div class="sg-card-top">
        <div class="sg-name" style="color:${nameColor}">${spell.nameCn}${lockBadge}</div>
        <div class="sg-en">${spell.nameEn || ""}</div>
        ${gestureBadge}
      </div>
      <div class="sg-effect">${spell.effect || ""}</div>
      ${unlockHint}
      ${profSection}
    </div>`;
  }).join("");
}

window.openSpellPanel  = openSpellPanel;
window.closeSpellPanel = closeSpellPanel;

/**
 * 信息页内嵌图鉴渲染（三列卡片，无标签切换，直接渲染到 #info-grimoire-mount）
 */
window._renderInlineGrimoire = function() {
  autoUnlockByCourse();
  const mount = document.getElementById("info-grimoire-mount");
  if (!mount) return;

  const all = getSpellListWithStatus();

  // 当前激活的分类
  let activeType = mount.dataset.activeType || "hogwarts";

  function render() {
    const list = all.filter(s => s.sourceType === activeType);
    mount.innerHTML = `
      <div class="sg-inline-tip">🏅 熟练度通过<strong>决斗训练</strong>提升</div>
      <div class="sg-tab-row">
        <button class="sg-tab-btn ${activeType==='hogwarts'?'sg-tab-active':''}" data-t="hogwarts">📚 课程</button>
        <button class="sg-tab-btn ${activeType==='self'?'sg-tab-active':''}" data-t="self">📖 自学</button>
        <button class="sg-tab-btn ${activeType==='dark'?'sg-tab-active':''}" data-t="dark">💀 黑魔法</button>
      </div>
      <div class="sg-grid-3col">
        ${list.map(spell => {
          const gesture = window.getGestureBySpellId?.(spell.id);
          const prof    = spell.proficiency || 0;
          const learned = spell.isLearned;
          return `<div class="sg-card-mini ${learned?'':'sg-card-mini-locked'}">
            <div class="sg-mini-name" style="color:${learned?'var(--color-gold)':'var(--color-text-light)'}">${spell.nameCn}${learned?'':'🔒'}</div>
            <div class="sg-mini-en">${spell.nameEn||''}</div>
            ${gesture?`<div class="sg-mini-gesture">✋</div>`:''}
            ${learned?`
              <div class="sg-mini-prof-wrap">
                <div class="sg-mini-prof-bar" style="width:${prof}%"></div>
              </div>
              <div class="sg-mini-prof-num">${prof>=100?'精通':prof+'%'}</div>
            `:`<div class="sg-mini-unlock">${spell.unlockCourse?`需${spell.unlockCourse}≥${spell.unlockPercent??0}%`:'未解锁'}</div>`}
          </div>`;
        }).join('')}
        ${list.length===0?`<div class="sg-empty-3col">暂无咒语</div>`:''}
      </div>`;

    mount.querySelectorAll('.sg-tab-btn').forEach(btn => {
      btn.onclick = () => {
        activeType = btn.dataset.t;
        mount.dataset.activeType = activeType;
        render();
      };
    });
  }
  render();
};
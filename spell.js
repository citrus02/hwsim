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

// 施法 + 增加熟练度 → 每次+5%
export function castSpell(spellId) {
  const list = getLearnedSpell();
  if (!list.includes(spellId)) {
    if (window.doStudyLog) window.doStudyLog(`❌ 尚未学会该咒语`);
    return false;
  }

  const spell = spellData.find(s => s.id === spellId);
  if (!spell) return false;

  const save = getSave();
  if (!save.spellProficiency) save.spellProficiency = {};

  const oldPro = save.spellProficiency[spellId] || 0;
  let newPro = oldPro;

  // 增加熟练度（满级不再增加）→ 每次 +5
  if (oldPro < 100) {
    newPro = oldPro + 5;
    if (newPro > 100) newPro = 100;
    save.spellProficiency[spellId] = newPro;
    setSave(save);
  }

  if (window.doStudyLog && spellEventLib) {
    /* ✅ FIX #2：同步使用已加载的事件库 */
    const events = spellEventLib[spellId] || spellEventLib["默认"];
    const event = events[Math.floor(Math.random() * events.length)];
    
    window.doStudyLog(
      `🪄 施法：${spell.nameCn}（熟练度+5%，共${newPro}%）｜${event}`
    );
  }

  return true;
}

window.autoUnlockByCourse = autoUnlockByCourse;

// ==============================================
// 咒语界面 UI（面板、渲染、点击逻辑）
// ==============================================
import { costAction, timeSystem, nextTime, syncActionUI } from "./time-system.js";

let currentSpellSourceType = "hogwarts";
let allSpellData = [];
let backTopBtn = null;

export function openSpellPanel() {
  autoUnlockByCourse();
  
  /* ✅ FIX #5：在打开面板时预加载事件库 */
  loadSpellEvents();

  document.getElementById("actionMain").style.display = "none";
  const exploreMain = document.getElementById("exploreMain");
  if (exploreMain) exploreMain.style.display = "none";

  let old = document.getElementById("spellMain");
  if (old) old.remove();

  const spellBox = document.createElement("div");
  spellBox.id = "spellMain";
  spellBox.innerHTML = `<div class="title">🪄 训练咒语</div>`;

  const container = document.createElement("div");
  container.id = "spell-container";
  container.style.maxHeight = "400px";
  container.style.overflow = "auto";
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(3, 1fr)";
  container.style.gap = "8px";

  backTopBtn = document.createElement("button");
  backTopBtn.className = "action-btn";
  backTopBtn.innerText = "← 返回上一层";
  backTopBtn.style.width = "100%";
  backTopBtn.style.margin = "0 0 8px 0";
  backTopBtn.style.display = "none";
  backTopBtn.onclick = () => {
    renderSpellRoot();
    backTopBtn.style.display = "none";
  };
  spellBox.appendChild(backTopBtn);

  const backBtn = document.createElement("button");
  backBtn.className = "action-btn";
  backBtn.innerText = "← 返回行动";
  backBtn.style.marginTop = "10px";
  backBtn.onclick = closeSpellPanel;

  const card = document.querySelector("#actionMain").closest(".card");
  card.appendChild(spellBox);
  spellBox.appendChild(container);
  spellBox.appendChild(backBtn);

  allSpellData = getSpellListWithStatus();
  renderSpellRoot();
}

export function closeSpellPanel() {
  const box = document.getElementById("spellMain");
  if (box) box.remove();
  document.getElementById("actionMain").style.display = "block";
}

// 咒语专属深蓝配色
const spellBtnStyle = `width:100%;text-align:left;padding:10px 12px;border:none;border-radius:6px;background:#1a263d;color:#e0e8ff;cursor:pointer;box-sizing:border-box;min-height:140px;`;
const spellBtnHover = "#2a3b5c";

function renderSpellRoot() {
  const wrap = document.getElementById("spell-container");
  if (!wrap) return;
  wrap.innerHTML = "";
  if (backTopBtn) backTopBtn.style.display = "none";

  const categories = [
    { icon: "📚", name: "霍格沃茨正规课程", desc: "校内教授正规教学咒语", type: "hogwarts" },
    { icon: "📖", name: "自学/特殊来源", desc: "禁书、私下传授、自学咒语", type: "self" },
    { icon: "💀", name: "黑魔法 / 禁咒", desc: "高危禁忌、不可饶恕咒", type: "dark" }
  ];

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.style.cssText = spellBtnStyle;
    btn.innerHTML = `<div style="font-size:15px;">${cat.icon} ${cat.name}</div><div style="font-size:12px;color:#c0d8ff;margin-top:4px;">${cat.desc}</div>`;
    /* ✅ FIX #1：改成 style.background 而不是 cssText += */
    btn.onmouseover = () => btn.style.background = spellBtnHover;
    btn.onmouseout = () => btn.style.background = "#1a263d";
    btn.onclick = () => {
      currentSpellSourceType = cat.type;
      renderSpellList();
    };
    wrap.appendChild(btn);
  });
}

function renderSpellList() {
  const wrap = document.getElementById("spell-container");
  if (!wrap) return;
  wrap.innerHTML = "";
  if (backTopBtn) backTopBtn.style.display = "block";

  const filtered = allSpellData.filter(s => s.sourceType === currentSpellSourceType);
  filtered.forEach(spell => {
    const btn = document.createElement("button");
    btn.style.cssText = spellBtnStyle;
    if (!spell.isLearned) {
      btn.style.opacity = "0.6";
      btn.style.cursor = "not-allowed";
    }

    // 名称（显示熟练度% / 满级精通）
    const name = document.createElement("div");
    name.style.fontSize = "15px";
    name.style.color = spell.isLearned ? "#ffdf70" : "#8899bb";
    name.innerText = spell.isLearned
      ? (spell.proficiency >= 100 ? `${spell.nameCn} 【精通】` : `${spell.nameCn}（${spell.proficiency}%）`)
      : `${spell.nameCn} 🔒`;

    // 咒语原文
    const eng = document.createElement("div");
    eng.style = "font-size:12px;color:#a0b8e8;";
    eng.innerText = spell.nameEn || "（无英文名）";

    // 效果
    const effect = document.createElement("div");
    effect.style = "font-size:12px;color:#c0d8ff;margin-top:4px;";
    effect.innerText = `效果：${spell.effect || "（未定义）"}`;

    btn.appendChild(name);
    btn.appendChild(eng);
    btn.appendChild(effect);

    // 未解锁提示
    if (!spell.isLearned) {
      const unlockTipEl = document.createElement("div");
      unlockTipEl.style = "font-size:11px;color:#ff8888;margin-top:4px;";
      /* ✅ FIX #4：防空检查，避免 undefined 显示 */
      let tip;
      if (spell.sourceType === "hogwarts" && spell.unlockCourse && spell.unlockPercent !== undefined) {
        tip = `需【${spell.unlockCourse}】≥${spell.unlockPercent}%`;
      } else {
        tip = `尚未解锁`;
      }
      unlockTipEl.innerText = `🔒 ${tip}`;
      btn.appendChild(unlockTipEl);
    }

    /* ✅ FIX #1：同样改成 style.background */
    btn.onmouseover = () => {
      if (spell.isLearned) btn.style.background = spellBtnHover;
    };
    btn.onmouseout = () => {
      if (spell.isLearned) btn.style.background = "#1a263d";
    };

    // 点击施法逻辑
    btn.onclick = () => {
      if (!spell.isLearned) {
        let tip;
        if (spell.sourceType === "hogwarts" && spell.unlockCourse && spell.unlockPercent !== undefined) {
          tip = `需【${spell.unlockCourse}】≥${spell.unlockPercent}%`;
        } else {
          tip = `该咒语尚未解锁`;
        }
        window.doStudyLog(`❌ ${tip}`);
        return;
      }

      /* ✅ FIX #3：先检查行动是否足够 */
      if (!costAction()) return;

      castSpell(spell.id);
      allSpellData = getSpellListWithStatus();
      renderSpellList();

      if (timeSystem.dailyActionLeft <= 0) {
        closeSpellPanel();
        setTimeout(() => {
          nextTime();
          syncActionUI();
        }, 50);
      }
    };

    wrap.appendChild(btn);
  });
}

window.openSpellPanel = openSpellPanel;
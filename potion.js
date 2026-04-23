// potion.js  已修复
import { potions } from './potion-data.js';
import { getPotionEmoji, getMatEmoji } from "./material-emoji.js";

let currentPotionSourceType = "hogwarts";
let allPotionData = [];

function initPotionSave() {
  const save = window.saveSys?.getSave?.() || {};
  if (!save.bag) save.bag = { material: [], potion: [], item: [] };
  if (!save.potion) save.potion = {};
  if (!save.year) save.year = 1;
  if (!save.flags) save.flags = {};
  return save;
}

// ==========================
// 🔥 消耗材料（兼容堆叠）
// ==========================
function costMaterials(materials, quantities) {
  const data = initPotionSave();
  if (!data.bag || !data.bag.material) return false;

  const matList = [...data.bag.material];

  for (let i = 0; i < materials.length; i++) {
    const needName = materials[i];
    const needCount = quantities[i];
    let total = 0;

    for (let s of matList) {
      if (!s) continue;
      let name = typeof s === "string" ? s : s.name;
      if (name === needName) {
        total += s.count || 1;
      }
    }
    if (total < needCount) return false;
  }

  for (let i = 0; i < materials.length; i++) {
    const needName = materials[i];
    let need = quantities[i];

    for (let j = 0; j < matList.length; j++) {
      if (need <= 0) break;
      let slot = matList[j];
      if (!slot) continue;

      let name = typeof slot === "string" ? slot : slot.name;
      if (name !== needName) continue;

      let cnt = slot.count || 1;
      if (cnt <= need) {
        need -= cnt;
        matList[j] = null;
      } else {
        slot.count = cnt - need;
        need = 0;
      }
    }
  }

  data.bag.material = matList;
  window.saveSys?.setSave?.(data);
  return true;
}

// ==========================
// 🔥 剧情解锁核心逻辑
// ==========================
function checkPotionUnlock(potion) {
  const data = initPotionSave();
  const year = data.year;
  const flags = data.flags;

  if (potion.grade === "一年级") return true;

  if (potion.id === 204 && flags.unlock_chamber_of_secrets === true) return true;
  if (potion.id === 402 && flags.unlock_chamber_of_secrets === true) return true;
  if (year >= 2 && potion.grade.includes("二年级")) return true;

  if (potion.id === 305 && flags.helped_remus === true) return true;
  if (year >= 3 && potion.grade.includes("三年级")) return true;

  if (potion.id === 205 && flags.unlock_goblet_of_fire === true) return true;
  if (year >= 4 && potion.grade.includes("四年级")) return true;

  if (potion.id === 207 && flags.joined_da === true) return true;
  if (year >= 5 && potion.grade.includes("五年级")) return true;

  if (potion.id === 301 && flags.got_prince_book === true) return true;
  if (potion.id === 302 && flags.got_felix_reward === true) return true;
  if (potion.id === 601 && flags.got_prince_book === true) return true;
  if (potion.id === 602 && flags.got_prince_book === true) return true;
  if (potion.id === 401 && flags.used_sectumsempra === true) return true;
  if (year >= 6 && potion.grade.includes("N.E.W.T.")) return true;

  if (potion.id === 604 && flags.visited_wheezes === true) return true;
  if (potion.id === 803 && flags.christmas_ball === true) return true;
  if (potion.id === 701 && flags.phoenix_bond === true) return true;

  if (potion.grade.includes("黑魔法") && flags.visited_black_market === true) return true;
  if (potion.id === 502 && flags.hunt_horcruxes === true) return true;

  return false;
}

export const PotionSystem = {
  allPotions: [...potions],
  getPotionById(id) {
    return this.allPotions.find(p => p.id === id);
  },
  getDifficulty(potion) {
    if (potion.grade.includes('一年级')) return 1;
    if (potion.grade.includes('O.W.L.')) return 3;
    if (potion.grade.includes('N.E.W.T.')) return 5;
    if (potion.grade.includes('黑魔法')) return 6;
    return 2;
  }
};

export function autoUnlockPotionByCourse() {
  const data = initPotionSave();
  if (!data.potion) data.potion = {};

  potions.forEach(p => {
    const unlocked = checkPotionUnlock(p);
    if (!data.potion[p.id]) {
      data.potion[p.id] = { proficiency: 0, unlocked: unlocked };
    } else {
      data.potion[p.id].unlocked = unlocked;
    }
  });

  window.saveSys?.setSave?.(data);
}

export function getPotionListWithStatus() {
  autoUnlockPotionByCourse();
  const data = initPotionSave();
  const potionData = data.potion || {};

  return potions.map(p => {
    const item = potionData[p.id] || { proficiency: 0, unlocked: checkPotionUnlock(p) };
    let sourceType = "hogwarts";
    if (p.type === "非课程") {
      sourceType = p.grade.includes("黑魔法") ? "dark" : "self";
    }
    return {
      id: p.id,
      name: p.name,
      english: p.english,
      effect: p.effect,
      grade: p.grade,
      materials: p.materials || [],
      quantities: p.quantities || [],
      sourceType,
      isUnlocked: item.unlocked,
      proficiency: item.proficiency,
      maxProficiency: 100,
      unlockCondition: p.unlockCondition || "未开放",
      unlockTip: p.unlockTip || "尚未解锁"
    };
  });
}

// ==========================
// 🔥 炼制魔药 → 每次 +5%
// ==========================
export function brewPotion(potionId) {
  const potion = PotionSystem.getPotionById(potionId);
  if (!potion) return;

  const data = initPotionSave();
  const unlocked = data.potion[potionId]?.unlocked || false;
  if (!unlocked) {
    window.doStudyLog(`❌ ${potion.name} 尚未解锁：${potion.unlockTip}`);
    return;
  }

  const ok = costMaterials(potion.materials, potion.quantities);
  if (!ok) {
    window.doStudyLog(`❌ 材料不足：${potion.name}`);
    return;
  }

  const diff = PotionSystem.getDifficulty(potion);
  /* ✅ FIX #2：成功率计算纠正
     - 一年级（diff=1）：120 - 10 = 110 ≥ 100，所以成功率 100%
     - 二年级（diff=2）：120 - 20 = 100，所以成功率 100%
     - 三年级（diff=2）：120 - 20 = 100，所以成功率 100%
     - O.W.L（diff=3）：120 - 30 = 90，所以成功率 90%
     - N.E.W.T（diff=5）：120 - 50 = 70，所以成功率 70%
     - 黑魔法（diff=6）：120 - 60 = 60，所以成功率 60%
  */
  const successRate = Math.max(20, Math.min(100, 120 - diff * 10));
  const success = Math.random() * 100 < successRate;

  if (success) {
    if (!data.potion) data.potion = {};
    if (!data.potion[potionId]) data.potion[potionId] = { proficiency: 0, unlocked: true };
    
    data.potion[potionId].proficiency = Math.min(100, data.potion[potionId].proficiency + 5);
    
    window.saveSys?.setSave?.(data);

    window.addPotionToBag({
      name: potion.name,
      emoji: getPotionEmoji(potion.name),
      effect: potion.effect
    });

    window.doStudyLog(`✅ 成功炼制：${potion.name}（熟练度+5%，共${data.potion[potionId].proficiency}%）`);
  } else {
    window.doStudyLog(`❌ 炼制失败：${potion.name}`);
  }
}

// ==========================
// 🔥 一键补齐材料
// ==========================
export function addAllPotionMaterials() {
  // ✅ FIX #4：getSave 可能因可选链短路返回 undefined，加兜底空对象防止后续报错
  const data = window.saveSys?.getSave?.() ?? {};
  if (!data.bag) data.bag = { material: [], potion: [], item: [] };
  if (!data.bag.material) data.bag.material = Array(30).fill(null);

  potions.forEach(p => {
    if (!p.materials || !p.quantities) return;
    p.materials.forEach((mat, i) => {
      const need = p.quantities[i] + 5;
      for (let j = 0; j < need; j++) {
        window.addMaterialToBag(mat);
      }
    });
  });

  /* ✅ FIX #1：补齐后必须保存数据，否则刷新就消失！ */
  window.saveSys?.setSave?.(data);

  window.doStudyLog(`✅ 已补齐所有魔药材料`);
  if (window.renderBag) window.renderBag();
}

// ==========================
// 🔥 面板 UI
// ==========================
let backTopBtn = null;

export function openPotionPanel() {
  autoUnlockPotionByCourse();
  const main = document.getElementById("actionMain");
  if (main) main.style.display = "none";
  let old = document.getElementById("potionMain");
  if (old) old.remove();

  const potionBox = document.createElement("div");
  potionBox.id = "potionMain";
  potionBox.innerHTML = `<div class="title">⚗️ 熬制魔药</div>`;

  const container = document.createElement("div");
  container.id = "potion-container";
  container.style.maxHeight = "400px";
  container.style.overflow = "auto";
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(3, 1fr)";
  container.style.gap = "8px";

  const matBtn = document.createElement("button");
  matBtn.innerText = "🧪 一键补齐所有魔药材料（材料多，比较慢）";// display:none;是隐藏的意思
  matBtn.style.cssText = "display:none;margin:8px 0;width:100%;padding:6px;background:#5c2d7e;color:#fff;border:none;border-radius:4px;cursor:pointer;";
  matBtn.onclick = addAllPotionMaterials;
  potionBox.appendChild(matBtn);

  backTopBtn = document.createElement("button");
  backTopBtn.className = "action-btn";
  backTopBtn.innerText = "← 返回上一层";
  backTopBtn.style.width = "100%";
  backTopBtn.style.margin = "0 0 8px 0";
  backTopBtn.style.display = "none";
  backTopBtn.onclick = () => {
    renderPotionRoot();
    backTopBtn.style.display = "none";
  };
  potionBox.appendChild(backTopBtn);

  const backBtn = document.createElement("button");
  backBtn.className = "action-btn";
  backBtn.innerText = "← 返回行动";
  backBtn.style.marginTop = "10px";
  backBtn.onclick = closePotionPanel;

  const card = document.querySelector("#actionMain")?.closest(".card");
  if (card) card.appendChild(potionBox);

  potionBox.appendChild(container);
  potionBox.appendChild(backBtn);

  allPotionData = getPotionListWithStatus();
  renderPotionRoot();
}

export function closePotionPanel() {
  const box = document.getElementById("potionMain");
  if (box) box.remove();
  const main = document.getElementById("actionMain");
  if (main) main.style.display = "block";
}

// ==========================
// 🔥 还原原版【紫色魔药配色】 保留三列布局+无进度条
// ==========================
const potionBtnStyle = `width:100%;text-align:left;padding:10px 12px;border:none;border-radius:6px;background:#2d1a3d;color:#f6e8ff;cursor:pointer;box-sizing:border-box;min-height:140px;`;
const potionBtnHover = "#442a5c";

function renderPotionRoot() {
  const wrap = document.getElementById("potion-container");
  if (!wrap) return;
  wrap.innerHTML = "";
  if (backTopBtn) backTopBtn.style.display = "none";

  const categories = [
    { icon: "🏫", name: "霍格沃茨正规课程", desc: "1～7年级｜O.W.L.｜N.E.W.T.", type: "hogwarts" },
    { icon: "📜", name: "自学/私人配方", desc: "禁书、混血王子、恶作剧配方", type: "self" },
    { icon: "💀", name: "黑魔法 / 禁药", desc: "剧毒、诅咒、伏地魔系魔药", type: "dark" }
  ];
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.style.cssText = potionBtnStyle;
    btn.innerHTML = `<div style="font-size:15px;">${cat.icon} ${cat.name}</div><div style="font-size:12px;color:#e4c0ff;margin-top:4px;">${cat.desc}</div>`;
    /* ✅ FIX #3：用 style.background 而不是 cssText +=，避免字符串累加 */
    btn.onmouseover = () => btn.style.background = potionBtnHover;
    btn.onmouseout = () => btn.style.background = "#2d1a3d";
    btn.onclick = () => {
      currentPotionSourceType = cat.type;
      renderPotionList();
    };
    wrap.appendChild(btn);
  });
}

function renderPotionList() {
  const wrap = document.getElementById("potion-container");
  if (!wrap) return;
  wrap.innerHTML = "";
  if (backTopBtn) backTopBtn.style.display = "block";

  const filtered = allPotionData.filter(p => p.sourceType === currentPotionSourceType);

  filtered.forEach(potion => {
    const btn = document.createElement("button");
    btn.style.cssText = potionBtnStyle;
    if (!potion.isUnlocked) {
      btn.style.opacity = "0.6";
      btn.style.cursor = "not-allowed";
    }

    const name = document.createElement("div");
    name.style.fontSize = "15px";
    name.style.color = potion.isUnlocked ? "#ffdf70" : "#aa99bb";
    name.innerText = potion.isUnlocked
      ? (potion.proficiency >= 100 ? `${potion.name} 【精通】` : `${potion.name}（${potion.proficiency}%）`)
      : `${potion.name} 🔒`;

    const eng = document.createElement("div");
    eng.style = "font-size:12px;color:#d8b8ff;";
    eng.innerText = potion.english;

    const effect = document.createElement("div");
    effect.style = "font-size:12px;color:#e4c0ff;margin-top:4px;";
    effect.innerText = `效果：${potion.effect}`;

    btn.appendChild(name);
    btn.appendChild(eng);
    btn.appendChild(effect);

    // 未解锁提示
    if (!potion.isUnlocked) {
      const unlockTipEl = document.createElement("div");
      unlockTipEl.style = "font-size:11px;color:#ff8888;margin-top:4px;";
      unlockTipEl.innerText = `🔒 ${potion.unlockTip}`;
      btn.appendChild(unlockTipEl);
    }

    // 已解锁显示材料
    if (potion.isUnlocked) {
      const matLine = document.createElement("div");
      matLine.style = "font-size:12px;color:#ffc8ee;margin-top:4px;";
      let matText = "材料：";
      for (let i = 0; i < potion.materials.length; i++) {
        const m = potion.materials[i];
        const q = potion.quantities[i];
        matText += `${getMatEmoji(m)}${m}×${q}｜`;
      }
      matLine.innerText = matText.slice(0, -1);
      btn.appendChild(matLine);
    }

    /* ✅ FIX #3：同样改成 style.background */
    btn.onmouseover = () => {
      if (potion.isUnlocked) btn.style.background = potionBtnHover;
    };
    btn.onmouseout = () => {
      if (potion.isUnlocked) btn.style.background = "#2d1a3d";
    };
    btn.onclick = () => {
      if (!potion.isUnlocked) {
        window.doStudyLog(`❌ ${potion.name}：${potion.unlockTip}`);
        return;
      }
      if (window.costAction && !window.costAction()) {
        window.doStudyLog(`❌ 行动次数不足`);
        return;
      }
      brewPotion(potion.id);
      allPotionData = getPotionListWithStatus();
      renderPotionList();
    };

    wrap.appendChild(btn);
  });
}

window.openPotionPanel = openPotionPanel;
window.PotionSystem = PotionSystem;
window.brewPotion = brewPotion;
window.autoUnlockPotionByCourse = autoUnlockPotionByCourse;
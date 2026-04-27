// bag-system.js — 背包渲染 + 物品添加 + 道具使用

import { getMatEmoji } from "./explore-data.js";
import { getPotionEmoji } from './potion-data.js';
import { getSave, setSave } from './save-system.js';

const DEFAULT_BAG_SLOTS = 10;

export let nowBagType = "material";

export function setBagType(type) {
  nowBagType = type;
  renderBag();
}

export function renderBag() {
  const g = document.getElementById("bagGrid");
  if (!g) return;
  const data = getSave();
  const list = (data.bag?.[nowBagType] || []).filter(i => i != null);
  const totalSlots = Math.max(DEFAULT_BAG_SLOTS, list.length);
  let html = "";
  for (let i = 0; i < totalSlots; i++) {
    const item = list[i];
    if (item) {
      let emoji = "";
      if (nowBagType === "material") {
        emoji = getMatEmoji(item.name);
      } else if (nowBagType === "potion") {
        emoji = getPotionEmoji(item.name);
      } else if (nowBagType === "wizardCard") {
        emoji = item.icon || "🃏";
      } else {
        emoji = item.icon || "📦";
      }

      if (nowBagType === "wizardCard") {
        const rarityColor = { "传奇": "#ffd700", "稀有": "#a0a0ff", "普通": "#a0a0a0" };
        const color = rarityColor[item.rarity] || "#fff";
        html += `<div class="bag-slot has-item" style="border:2px solid ${color};">
          <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%;">
            <div style="font-size:20px; line-height:1;">${emoji}</div>
            <div style="font-size:9px; line-height:1.1; margin-top:2px; color:${color};">${item.name}</div>
            <div style="font-size:10px; line-height:1;">×${item.count || 1}</div>
          </div>
        </div>`;
      } else {
        const clickable = (nowBagType === "item" && (item.count || 0) > 0)
          ? `onclick="window.useItem('${item.name.replace(/'/g, "\\'")}', ${i})" style="cursor:pointer;"`
          : "";
        html += `<div class="bag-slot has-item" ${clickable}>
          <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%;">
            <div style="font-size:20px; line-height:1;">${emoji}</div>
            <div style="font-size:10px; line-height:1.1; margin-top:2px;">${item.name}</div>
            <div style="font-size:10px; line-height:1;">×${item.count || 1}</div>
          </div>
        </div>`;
      }
    } else {
      html += `<div class="bag-slot empty">空</div>`;
    }
  }
  g.innerHTML = html;
}

export function addItemToBag(type, itemData) {
  const data = getSave();
  if (!data.bag) data.bag = { material: [], potion: [], item: [], wizardCard: [] };
  if (!data.bag[type]) data.bag[type] = [];
  const list = data.bag[type] || [];
  const addCount = itemData.count || 1;
  const exist = list.find(it => it?.name === itemData.name);
  if (exist) {
    exist.count = (exist.count || 1) + addCount;
  } else {
    list.push({ ...itemData, count: addCount });
  }
  data.bag[type] = list;
  setSave(data);
  renderBag();
}

export function useItem(itemName, index) {
  const data = getSave();
  const list = data.bag?.item || [];
  const item = list[index];
  if (!item || item.name !== itemName || (item.count || 0) <= 0) return;

  if (itemName === "比比多味豆") {
    const flavors = [
      { name: "草莓", emoji: "🍓", good: true },
      { name: "薄荷", emoji: "🌿", good: true },
      { name: "椰子", emoji: "🥥", good: true },
      { name: "肉桂", emoji: "🟤", good: true },
      { name: "菠菜", emoji: "🥬", good: false },
      { name: "肝脏", emoji: "🫁", good: false },
      { name: "耳垢", emoji: "👂", good: false },
      { name: "鼻涕", emoji: "🤧", good: false },
      { name: "臭鸡蛋", emoji: "🥚", good: false },
      { name: "呕吐物", emoji: "🤢", good: false },
    ];

    const flavor = flavors[Math.floor(Math.random() * flavors.length)];

    if (!data.time) data.time = { dailyActionLeft: 3, nowTime: "早晨", currentDate: "1991-09-02" };
    const delta = flavor.good ? 1 : -1;
    data.time.dailyActionLeft = Math.max(0, (data.time.dailyActionLeft || 3) + delta);

    if (item.count > 1) {
      item.count -= 1;
    } else {
      list.splice(index, 1);
    }
    data.bag.item = list;

    localStorage.setItem("hogwarts", JSON.stringify(data));

    const actionsEl = document.getElementById("actions");
    if (actionsEl) actionsEl.textContent = data.time.dailyActionLeft;

    renderBag();
    if (window.renderLog) window.renderLog();

    // 通过 window.addLog 写日志（save-system.js 挂载的）
    const logMsg = flavor.good
      ? `🫘 你吃了一颗比比多味豆——是${flavor.emoji} ${flavor.name}味！真幸运！行动次数 +1`
      : `🫘 你吃了一颗比比多味豆——天哪，是${flavor.emoji} ${flavor.name}味！你的表情扭曲了……行动次数 -1`;
    if (window.doStudyLog) window.doStudyLog(logMsg);

    if (data.time.dailyActionLeft <= 0) {
      if (window.timeSystem) window.timeSystem.dailyActionLeft = 0;
      setTimeout(() => {
        if (window.nextTime) window.nextTime();
        if (window.syncActionUI) window.syncActionUI();
      }, 500);
    }
  }
}

export function changeActions(delta) {
  const data = getSave();
  if (!data.time) data.time = { dailyActionLeft: 3, nowTime: "早晨", currentDate: "1991-09-02" };
  data.time.dailyActionLeft = Math.max(0, (data.time.dailyActionLeft || 3) + delta);
  setSave(data);
  if (window.refreshAll) window.refreshAll();
  return data.time.dailyActionLeft;
}

// 全局挂载
window.setBagType = setBagType;
window.renderBag = renderBag;
window.addItemToBag = addItemToBag;
window.addMaterialToBag = (name, count = 1) => addItemToBag("material", { name, count });
window.addPotionToBag = (potion) => addItemToBag("potion", potion);
window.useItem = useItem;
window.changeActions = changeActions;
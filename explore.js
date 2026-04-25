// explore.js - 霍格沃茨探索系统主要功能

import { timeSystem, costAction, nextTime, syncActionUI } from "./time-system.js";
import { hogwartsExploreData, alwaysAllowArea, exploreMaterials, getMatEmoji } from "./explore-data.js";
import { getYearGrade } from "./save-system.js";
import { exploreEventLib } from "./explore-default.js";

export function addExploreRate(area, val = 5) {
  const currentGrade = getYearGrade();
  const isLock = area.needLevel > currentGrade;

  if (isLock) return "该区域未解锁";
  if (area.exploreRate >= 100) return "该区域已完全探索";
  
  area.exploreRate = Math.min(100, area.exploreRate + val);
  return `探索进度：${area.name} ${area.exploreRate}%`;
}

// 返回结构化对象 { text: string, material: {name, count} | null }
// 不再把材料信息嵌入字符串，避免正则解析出错
export function triggerExploreEvent(areaName) {
  const list = exploreEventLib[areaName] || exploreEventLib["默认"];
  const eventText = list[Math.floor(Math.random() * list.length)];

  const area = findAreaByName(areaName);
  const exploreRate = area ? area.exploreRate : 0;

  const material = exploreMaterials(areaName, exploreRate);

  return { text: eventText, material: material || null };
}

// 根据名称查找区域对象
function findAreaByName(name) {
  // 递归查找函数
  function searchInData(data) {
    for (const item of data) {
      if (item.name === name) return item;
      if (item.children) {
        const found = searchInData(item.children);
        if (found) return found;
      }
    }
    return null;
  }
  
  // 从探索数据中查找
  return searchInData(hogwartsExploreData || []); // 使用导入的局部变量，与 renderFirstLayer 保持一致
}

let currentFirstParent = null;
let currentSecondParent = null;

export function openExplorePanel() {
  resetExploreCache();
  document.getElementById("actionMain").style.display = "none";
  document.getElementById("exploreMain").style.display = "block";

  const wrap = document.getElementById("explore-container");
  wrap.style.display = "grid";
  wrap.style.gridTemplateColumns = "repeat(3, 1fr)";
  wrap.style.gap = "8px";
  wrap.style.maxHeight = "400px";
  wrap.style.overflow = "auto";

  renderFirstLayer();
}

export function closeExplorePanel() {
  document.getElementById("exploreMain").style.display = "none";
  document.getElementById("actionMain").style.display = "block";
  resetExploreCache();
}

function resetExploreCache() {
  currentFirstParent = null;
  currentSecondParent = null;
}

function clearExploreContainer() {
  const wrap = document.getElementById("explore-container");
  if (wrap) wrap.innerHTML = "";
}

const exploreBtnStyle = "width:100%;text-align:left;padding:10px 12px;border:none;border-radius:6px;background:#2b2d42;color:#edf2f4;cursor:pointer;box-sizing:border-box;min-height:140px;";
const exploreBtnHover = "background:#383b59;";

/* 提取重复的"返回"按钮逻辑 */
function createBackButton(callback) {
  const back = document.createElement("button");
  back.className = "action-btn";
  back.innerText = "← 返回上一层";
  back.style.cssText = "position:sticky;top:0;z-index:999;grid-column:1 / -1;margin-bottom:8px;";
  back.addEventListener("click", (e) => {
    e.stopPropagation();
    callback();
  });
  return back;
}

/* 提取按钮创建逻辑，减少重复代码 */
function createExploreButton(data, onClickHandler) {
  const btn = document.createElement("button");
  btn.style.cssText = exploreBtnStyle;  // 用 .cssText 而不是直接赋值 .style

  btn.innerHTML = `
    <div style="font-size:15px;${data.titleColor || ''}">${data.icon || ''} ${data.name}${data.rateText || ''}</div>
    <div style="font-size:12px;color:#a9b4d2;margin-top:4px;line-height:1.4;">${data.desc || ''}</div>
    ${data.unlockTip ? `<div style="font-size:11px;color:#ff6b6b;margin-top:4px;">${data.unlockTip}</div>` : ''}
  `;

  if (data.isDisabled) {
    btn.style.opacity = "0.6";
    btn.style.cursor = "not-allowed";
  } else {
    btn.addEventListener("mouseover", () => btn.style.cssText = exploreBtnStyle + exploreBtnHover);
    btn.addEventListener("mouseout", () => btn.style.cssText = exploreBtnStyle);
  }

  btn.addEventListener("click", onClickHandler);
  return btn;
}

export function renderFirstLayer() {
  clearExploreContainer();
  const wrap = document.getElementById("explore-container");
  if (!wrap) return;

  hogwartsExploreData.forEach(lv1 => {
    const btn = createExploreButton({
      icon: lv1.icon || '',
      name: lv1.name,
      desc: lv1.desc || '',
      rateText: ''
    }, () => {
      currentFirstParent = lv1;
      renderSecondLayer();
    });
    wrap.appendChild(btn);
  });
}

function renderSecondLayer() {
  clearExploreContainer();
  const wrap = document.getElementById("explore-container");

  wrap.appendChild(createBackButton(() => renderFirstLayer()));

  (currentFirstParent.children || []).forEach(lv2 => {
    const btn = createExploreButton({
      icon: lv2.icon || '',
      name: lv2.name,
      desc: lv2.desc || '',
      rateText: ''
    }, () => {
      currentSecondParent = lv2;
      renderThirdLayer();
    });
    wrap.appendChild(btn);
  });
}

function renderThirdLayer() {
  clearExploreContainer();
  const wrap = document.getElementById("explore-container");

  wrap.appendChild(createBackButton(() => renderSecondLayer()));

  const list = currentSecondParent?.children || [];
  const currentGrade = getYearGrade();

  list.forEach(item => {
    if (!item) return;

    const isLock = item.needLevel > currentGrade;
    const isComplete = item.exploreRate >= 100;
    
    const rateText = isComplete
      ? "【已完全探索】"
      : isLock ? "【🔒未解锁】" : `(${item.exploreRate}%)`;

    const btn = createExploreButton({
      icon: item.icon || '',
      name: item.name,
      titleColor: "color:#ffdf70;",
      desc: item.desc || '',
      rateText: ` ${rateText}`,
      unlockTip: isLock ? (item.unlockTip || '需要更高年级') : '',
      isDisabled: isLock || isComplete
    }, (e) => {
      e.stopPropagation();

      if (isLock) {
        window.doExploreLog(`🔒 ${item.name} 无法探索｜${item.unlockTip}`);
        return;
      }
      if (isComplete) {
        window.doExploreLog(`✅ ${item.name} 已完全探索`);
        return;
      }
      if (!costAction()) return;

      addExploreRate(item, 5);

      // triggerExploreEvent 返回 { text, material } 结构化对象
      const exploreResult = triggerExploreEvent(item.name);
      let logSuffix = exploreResult.text;

      if (exploreResult.material) {
        const mat = exploreResult.material;
        const emoji = getMatEmoji ? getMatEmoji(mat.name) : "🌿";
        // 直接用对象添加背包，不再解析字符串
        window.addMaterialToBag(mat.name, mat.count);
        logSuffix += `【获得材料: ${emoji} ${mat.name} x${mat.count}】`;
      }

      window.doExploreLog(`✅ 探索：${item.name}（探索进度+5%，共${item.exploreRate}%）｜${logSuffix}`);

      if (timeSystem.dailyActionLeft <= 0) {
        closeExplorePanel();
        setTimeout(() => {
          nextTime();
          syncActionUI();
        }, 80);
        return;
      }
      renderThirdLayer();
    });
    wrap.appendChild(btn);
  });
}

window.openExplorePanel = openExplorePanel;
window.closeExplorePanel = closeExplorePanel;
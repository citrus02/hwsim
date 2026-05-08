// explore.js - 霍格沃茨探索系统主要功能

import { timeSystem, costAction, nextTime, syncActionUI, isHoliday, isHogsmeadeWeekend } from "./time-system.js";
import { hogwartsExploreData, alwaysAllowArea, exploreMaterials, getMatEmoji } from "./explore-data.js";
import { getYearGrade, getPlayerHouse, getSave, setSave } from "./save-system.js";
import { exploreEventLib } from "./explore-default.js";
import { tryTriggerEncounter } from "./affinity-ui.js";

function _saveExploreRate(area) {
  const data = getSave();
  if (!data.explore) data.explore = {};
  data.explore[area.name] = area.exploreRate;
  setSave(data);
}

function _loadAllExploreRate() {
  const data = getSave();
  if (!data.explore) return;
  function traverse(items) {
    items.forEach(item => {
      if (item.children) traverse(item.children);
      else if (data.explore[item.name] !== undefined) item.exploreRate = data.explore[item.name];
    });
  }
  traverse(hogwartsExploreData);
}

export function addExploreRate(area, val = 5) {
  const currentGrade = getYearGrade();
  const isLock = area.needLevel > currentGrade;

  if (isLock) return "该区域未解锁";
  
  if (area.exploreRate >= 100) {
    return "该区域已完全探索，无法继续增加探索度";
  }
  
  area.exploreRate = Math.min(100, area.exploreRate + val);
  _saveExploreRate(area);
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
  _loadAllExploreRate();

  const holiday = isHoliday();
  const exploreBtn = document.getElementById("exploreBtn");
  const exploreTitle = document.getElementById("exploreTitle");

  if (holiday) {
    if (exploreBtn) exploreBtn.textContent = "🚪 出门探险";
    if (exploreTitle) exploreTitle.textContent = `🚪 出门探险 · ${holiday}`;
  } else {
    if (exploreBtn) exploreBtn.textContent = "🗺️ 探索城堡";
    if (exploreTitle) exploreTitle.textContent = "🗺️ 探索城堡";
  }

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

function _handleGringotts() {
  const currentGrade = getYearGrade();
  const baseGalleons = 5 + currentGrade * 3;
  const bonusSickles = Math.floor(Math.random() * 10) + 1;
  const bonusKnuts = Math.floor(Math.random() * 29);

  if (window.currency?.addMoney) {
    window.currency.addMoney(baseGalleons, bonusSickles, bonusKnuts, "古灵阁取款");
  }
  if (window.currency?.refreshCurrencyUI) {
    window.currency.refreshCurrencyUI();
  }

  const events = [
    `你乘坐小推车深入地下金库，在妖精的注视下取出了 ${baseGalleons} 加隆 ${bonusSickles} 西可 ${bonusKnuts} 纳特。`,
    `妖精柜员面无表情地核对了你的钥匙，从金库中拨出 ${baseGalleons} 加隆。`,
    `矿车在迷宫般的隧道中飞速穿行，你从家族金库中取出了 ${baseGalleons} 加隆。`,
    `金库大门缓缓打开，金加隆在烛光下闪闪发光。你取走了 ${baseGalleons} 加隆。`,
    `妖精用长长的手指数出 ${baseGalleons} 加隆，推到你面前。「下一位。」`,
  ];
  const eventText = events[Math.floor(Math.random() * events.length)];

  window.doExploreLog(`🏦 古灵阁：${eventText}`);
}

export function renderFirstLayer() {
  clearExploreContainer();
  const wrap = document.getElementById("explore-container");
  if (!wrap) return;

  const currentGrade = getYearGrade();
  const currentHouse = getPlayerHouse();
  const holiday = isHoliday();

  hogwartsExploreData.forEach(lv1 => {
    let isLock = false;
    let unlockTipText = '';
    
    if (lv1.needLevel !== undefined && lv1.needLevel > currentGrade) {
      isLock = true;
      unlockTipText = lv1.unlockTip || `需要${lv1.needLevel}年级`;
    }
    
    if (!isLock && lv1.requiredHouse && currentHouse !== lv1.requiredHouse) {
      isLock = true;
      unlockTipText = `需要${lv1.requiredHouse}学院身份`;
    }

    if (!isLock && lv1.isHolidayOnly && !holiday) {
      isLock = true;
      unlockTipText = "仅限假期前往";
    }

    if (!isLock && lv1.name === "霍格莫德村") {
      if (!holiday && !isHogsmeadeWeekend()) {
        isLock = true;
        unlockTipText = "周末或假期才能前往";
      }
    }
    
    const btn = createExploreButton({
      icon: lv1.icon || '',
      name: lv1.name,
      desc: lv1.desc || '',
      rateText: isLock ? ' 🔒' : '',
      unlockTip: unlockTipText,
      isDisabled: isLock
    }, () => {
      if (isLock) {
        window.doExploreLog(`🔒 ${lv1.name} 无法进入｜${unlockTipText}`);
        return;
      }
      currentFirstParent = lv1;
      renderSecondLayer();
    });
    wrap.appendChild(btn);
  });
}

function renderSecondLayer() {
  clearExploreContainer();
  const wrap = document.getElementById("explore-container");

  // ✅ 防御：如果 currentFirstParent 为 null，回退到第一层
  if (!currentFirstParent) {
    renderFirstLayer();
    return;
  }

  wrap.appendChild(createBackButton(() => renderFirstLayer()));

  const currentGrade = getYearGrade();
  const currentHouse = getPlayerHouse();

  (currentFirstParent.children || []).forEach(lv2 => {
    // 检查第二层锁定
    let isLock = false;
    let unlockTipText = '';
    
    if (lv2.needLevel !== undefined && lv2.needLevel > currentGrade) {
      isLock = true;
      unlockTipText = lv2.unlockTip || `需要${lv2.needLevel}年级`;
    }
    
    // 检查学院锁
    if (!isLock && lv2.requiredHouse && currentHouse !== lv2.requiredHouse) {
      isLock = true;
      unlockTipText = `需要${lv2.requiredHouse}学院身份`;
    }
    
    const isShop2 = lv2.shopId && lv2.shopId !== undefined;
    const shopIcon2 = isShop2 ? " 🏪" : "";

    const btn = createExploreButton({
      icon: lv2.icon || '',
      name: lv2.name + shopIcon2,
      desc: lv2.desc || '',
      rateText: isLock ? ' 🔒' : '',
      unlockTip: unlockTipText,
      isDisabled: isLock
    }, async () => {
      if (isLock) {
        window.doExploreLog(`🔒 ${lv2.name} 无法进入｜${unlockTipText}`);
        return;
      }

      if (lv2.isGringotts) {
        if (!costAction()) return;
        _handleGringotts();
        if (timeSystem.dailyActionLeft <= 0) {
          closeExplorePanel();
          setTimeout(() => { nextTime(); syncActionUI(); }, 80);
          return;
        }
        renderSecondLayer();
        return;
      }

      // 商店节点：打开商店UI
      if (isShop2) {
        if (!costAction()) return;
        try {
          const shopManager = await window.openShop(lv2.shopId);
          if (!shopManager) {
            window.doExploreLog(`🏪 ${lv2.name} 暂未开业，敬请期待。`);
            if (timeSystem.dailyActionLeft <= 0) {
              closeExplorePanel();
              setTimeout(() => { nextTime(); syncActionUI(); }, 80);
            } else {
              renderSecondLayer();
            }
            return;
          }
          const { shopUI } = await import('./hogsmeade/shopUI.js');
          const shopUIInstance = new shopUI(shopManager, () => {
            if (window.refreshAll) window.refreshAll();
            if (window.timeSystem?.dailyActionLeft <= 0) {
              window.closeExplorePanel?.();
              window.nextTime?.();
              window.syncActionUI?.();
            } else {
              renderSecondLayer();
            }
          });
          const uiElement = shopUIInstance.render();
          document.body.appendChild(uiElement);
        } catch (err) {
          console.error('打开商店失败:', err);
          window.doExploreLog(`❌ 打开 ${lv2.name} 失败：${err.message}`);
        }
        return;
      }

      // ✅ 如果没有子节点，直接执行探索逻辑
      if (!lv2.children || lv2.children.length === 0) {
        if (!costAction()) return;

        addExploreRate(lv2, 5);
        let logMessage = '';
        if (lv2.exploreRate >= 100) {
          logMessage = `✅ 继续探索：${lv2.name}（探索度已达100%，继续寻找材料）｜`;
        } else {
          logMessage = `✅ 探索：${lv2.name}（探索进度+5%，共${lv2.exploreRate}%）｜`;
        }

        const exploreResult = triggerExploreEvent(lv2.name);
        let logSuffix = exploreResult.text;

        if (exploreResult.material) {
          const mat = exploreResult.material;
          const emoji = getMatEmoji ? getMatEmoji(mat.name) : "🌿";
          window.addMaterialToBag(mat.name, mat.count);
          logSuffix += `【获得材料: ${emoji} ${mat.name} x${mat.count}】`;
        }

        window.doExploreLog(logMessage + logSuffix);

        window._questHook_explore?.();

        // 尝试触发人物偶遇（30% 概率）
        setTimeout(() => tryTriggerEncounter(lv2.name), 300);

        // ── 学生角色好感度触发（维度一 + 维度四）──────────────
        window.affinityUI?.tryStudentActionEncounter('explore');
        window.affinityUI?.checkStudentSpecialTriggers('explore', { area: lv2.name });

        if (timeSystem.dailyActionLeft <= 0) {
          closeExplorePanel();
          setTimeout(() => { nextTime(); syncActionUI(); }, 80);
          return;
        }
        renderSecondLayer();
        return;
      }

      // 有子节点：进第三层
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
  const currentHouse = getPlayerHouse();

  list.forEach(item => {
    if (!item) return;  

    // 检查年级锁
    let isLock = item.needLevel > currentGrade;
    let unlockTipText = item.unlockTip || '';
    
    // 检查学院锁（如果还没有被年级锁锁定）
    if (!isLock && item.requiredHouse && currentHouse !== item.requiredHouse) {
      isLock = true;
      unlockTipText = `需要${item.requiredHouse}学院身份`;
    }
    
    // 修改：不再把100%当作禁用条件，只是显示已完成
    const isComplete = item.exploreRate >= 100;
    
    // 判断是否是商店（检查是否有 shopId 属性）
    const isShop = item.shopId && item.shopId !== undefined;
    
    // 修改显示文本：100%时显示已完成标识，但不禁用
    const rateText = isComplete
      ? "【100%已完成】" 
      : isLock ? "【🔒未解锁】" : `(${item.exploreRate}%)`;

    // 为商店添加特殊的图标标记
    const shopIcon = isShop ? " 🏪" : "";
    
    const btn = createExploreButton({
      icon: item.icon || '',
      name: item.name + shopIcon,
      titleColor: isShop ? "color:#ffd700;" : "color:#ffdf70;",
      desc: item.desc || '',
      rateText: ` ${rateText}`,
      unlockTip: isLock ? unlockTipText : '',
      isDisabled: isLock
    }, async (e) => {
      e.stopPropagation();

      if (isLock) {
        window.doExploreLog(`🔒 ${item.name} 无法进入｜${unlockTipText}`);
        return;
      }

      if (item.isGringotts) {
        if (!costAction()) return;
        _handleGringotts();
        if (timeSystem.dailyActionLeft <= 0) {
          closeExplorePanel();
          setTimeout(() => { nextTime(); syncActionUI(); }, 80);
          return;
        }
        renderThirdLayer();
        return;
      }
      
      // 如果是商店，异步打开商店界面
      if (isShop) {
        if (item.needLevel && currentGrade < item.needLevel) {
          window.doExploreLog(`🔒 ${item.name} 需要 ${item.needLevel} 年级才能进入`);
          return;
        }
        
        try {
          // 异步打开商店
          const shopManager = await window.openShop(item.shopId);
          if (!shopManager) {
            window.doExploreLog(`🏪 ${item.name} 暂未开业，敬请期待。`);
            renderThirdLayer();
            return;
          }
          
          // 动态导入 shopUI
          const { shopUI } = await import('./hogsmeade/shopUI.js');
          
          // 创建商店UI实例
          const shopUIInstance = new shopUI(
            shopManager,
            () => {
              renderThirdLayer();
              if (window.refreshAll) window.refreshAll();
            }
          );
          
          const uiElement = shopUIInstance.render();
          document.body.appendChild(uiElement);
        } catch (err) {
          console.error('打开商店失败:', err);
          window.doExploreLog(`❌ 打开 ${item.name} 失败`);
        }
        return;
      }
      
      // ========== 原有的探索逻辑 ==========
      if (!costAction()) return;

      const rateResult = addExploreRate(item, 5);
      
      let logMessage = '';
      if (item.exploreRate >= 100) {
        logMessage = `✅ 继续探索：${item.name}（探索度已达100%，继续寻找材料）｜`;
      } else {
        logMessage = `✅ 探索：${item.name}（探索进度+5%，共${item.exploreRate}%）｜`;
      }

      const exploreResult = triggerExploreEvent(item.name);
      let logSuffix = exploreResult.text;

      if (exploreResult.material) {
        const mat = exploreResult.material;
        const emoji = getMatEmoji ? getMatEmoji(mat.name) : "🌿";
        window.addMaterialToBag(mat.name, mat.count);
        logSuffix += `【获得材料: ${emoji} ${mat.name} x${mat.count}】`;
      }

      window.doExploreLog(logMessage + logSuffix);

      window._questHook_explore?.();

      // 尝试触发人物偶遇（30% 概率）
      setTimeout(() => tryTriggerEncounter(item.name), 300);

      // ── 学生角色好感度触发（维度一 + 维度四）──────────────
      window.affinityUI?.tryStudentActionEncounter('explore');
      window.affinityUI?.checkStudentSpecialTriggers('explore', { area: item.name });

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
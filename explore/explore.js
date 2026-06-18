// explore.js - 霍格沃茨探索系统主要功能

import { timeSystem, costAction, nextTime, syncActionUI, isHoliday, isHogsmeadeWeekend } from "../time-system.js";
import { hogwartsExploreData, alwaysAllowArea, exploreMaterials, getMatEmoji } from "./explore-data.js";
import { getYearGrade, getPlayerHouse, getSave, setSave } from "../save/save-system.js";
import { exploreEventLib } from "./explore-default.js";
import { tryTriggerEncounter } from "../affinity/affinity-ui.js";
import { grantExploreReward } from "../economy-rewards.js";

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

function runAfterWorldHookDialog(callback) {
  const run = () => {
    if (!document.getElementById("world-hook-modal")) {
      callback();
      return;
    }
    setTimeout(run, 250);
  };
  run();
}

function triggerPostExploreCharacterEvents(areaName, waitForWorldHook = false) {
  const run = () => {
    // 尝试触发人物偶遇（30% 概率）
    setTimeout(() => tryTriggerEncounter(areaName), 300);

    // ── 学生角色好感度触发（维度一 + 维度四）──────────────
    window.affinityUI?.tryStudentActionEncounter('explore');
    window.affinityUI?.checkStudentSpecialTriggers('explore', { area: areaName });
  };

  if (waitForWorldHook) {
    runAfterWorldHookDialog(run);
  } else {
    run();
  }
}

// 面板布局配置常量
const PANEL_LAYOUT = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "8px",
  maxHeight: "400px",
  overflow: "auto"
};

function applyPanelLayout(element) {
  element.style.display = PANEL_LAYOUT.display;
  element.style.gridTemplateColumns = PANEL_LAYOUT.gridTemplateColumns;
  element.style.gap = PANEL_LAYOUT.gap;
  element.style.maxHeight = PANEL_LAYOUT.maxHeight;
  element.style.overflow = PANEL_LAYOUT.overflow;
}

export function openExplorePanel() {
  resetExploreCache();
  _loadAllExploreRate();

  document.getElementById("actionMain").style.display = "none";
  document.getElementById("exploreMain").style.display = "block";

  const wrap = document.getElementById("explore-container");
  applyPanelLayout(wrap);

  renderFirstLayer();
}

export function openAdventurePanel() {
  resetExploreCache();
  _loadAllExploreRate();

  const holiday = isHoliday();
  const adventureTitle = document.getElementById("adventureTitle");
  if (adventureTitle) adventureTitle.textContent = holiday ? `🚪 外出探险 · ${holiday}` : "🚪 外出探险";

  document.getElementById("actionMain").style.display = "none";
  document.getElementById("adventureMain").style.display = "block";

  const wrap = document.getElementById("adventure-container");
  applyPanelLayout(wrap);

  renderAdventureLayer();
}

export function closeAdventurePanel() {
  currentAdventureArea = null;
  document.getElementById("adventureMain").style.display = "none";
  document.getElementById("actionMain").style.display = "block";
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

function clearAdventureContainer() {
  const wrap = document.getElementById("adventure-container");
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
  const locationStatus = window.npcEvents?.renderLocationStatus?.(data.name) || "";

  btn.innerHTML = `
    <div style="font-size:15px;${data.titleColor || ''}">${data.icon || ''} ${data.name}${data.rateText || ''}</div>
    <div style="font-size:12px;color:#a9b4d2;margin-top:4px;line-height:1.4;">${data.desc || ''}</div>
    ${locationStatus ? `<div style="font-size:11px;color:#d8c27a;margin-top:6px;line-height:1.35;">${locationStatus}</div>` : ''}
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

function checkAreaLock(area, {
  currentGrade = getYearGrade(),
  currentHouse = getPlayerHouse(),
  holiday = isHoliday(),
  checkHouse = true,
  checkHoliday = false,
  checkHogsmeade = false
} = {}) {
  if (area.needLevel !== undefined && area.needLevel > currentGrade) {
    return { locked: true, reason: area.unlockTip || `需要${area.needLevel}年级` };
  }

  if (checkHouse && area.requiredHouse && currentHouse !== area.requiredHouse) {
    return { locked: true, reason: `需要${area.requiredHouse}学院身份` };
  }

  if (checkHoliday && area.isHolidayOnly && !holiday) {
    return { locked: true, reason: "仅限假期前往" };
  }

  if (checkHogsmeade && area.name === "霍格莫德村" && !holiday && !isHogsmeadeWeekend()) {
    return { locked: true, reason: "周末或假期才能前往" };
  }

  return { locked: false, reason: "" };
}

function handleTimeAfterAction({ closePanel, refresh } = {}) {
  if (timeSystem.dailyActionLeft <= 0) {
    closePanel?.();
    setTimeout(() => {
      nextTime();
      if (timeSystem.dailyActionLeft <= 0) {
        nextDay();
      }
      syncActionUI();
    }, 80);
    return;
  }

  refresh?.();
}

async function openShopWithUI(shopId, areaName, {
  closePanel,
  refresh,
  consumeAction = true,
  advanceTimeOnUnavailable = consumeAction,
  refreshAllOnClose = true,
  errorWithMessage = true
} = {}) {
  if (consumeAction && !costAction()) return false;

  try {
    const shopManager = await window.openShop(shopId);
    if (!shopManager) {
      window.doExploreLog(`🏪 ${areaName} 暂未开业，敬请期待。`);
      if (advanceTimeOnUnavailable) {
        handleTimeAfterAction({ closePanel, refresh });
      } else {
        refresh?.();
      }
      return false;
    }

    const { shopUI } = await import('../hogsmeade/shopUI.js');
    const shopUIInstance = new shopUI(shopManager, () => {
      if (refreshAllOnClose && window.refreshAll) window.refreshAll();
      handleTimeAfterAction({ closePanel, refresh });
    });
    const uiElement = shopUIInstance.render();
    document.body.appendChild(uiElement);
    return true;
  } catch (err) {
    console.error('打开商店失败:', err);
    const message = errorWithMessage && err?.message ? `：${err.message}` : "";
    window.doExploreLog(`❌ 打开 ${areaName} 失败${message}`);
    return false;
  }
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

let currentAdventureArea = null;

export function renderAdventureLayer() {
  clearAdventureContainer();
  const wrap = document.getElementById("adventure-container");
  if (!wrap) return;

  const currentGrade = getYearGrade();

  if (currentAdventureArea) {
    renderAdventureSecondLayer();
    return;
  }

  const adventureAreas = [
    { name: "对角巷", icon: "🏪", desc: "伦敦的魔法商业街，古灵阁、奥利凡德魔杖店等", needLevel: 1, hasChildren: true },
    { name: "翻倒巷", icon: "🌑", desc: "对角巷旁的阴暗小巷，黑魔法用品和可疑交易的聚集地", needLevel: 5, hasChildren: true },
    { name: "国王十字车站", icon: "🚂", desc: "伦敦的主要火车站，九又四分之三站台所在地", needLevel: 1 },
    { name: "魔法部", icon: "🏛️", desc: "英国魔法界的政府机构，位于伦敦地下", needLevel: 5 },
    { name: "圣芒戈魔法伤病医院", icon: "🏥", desc: "巫师界的主要医院，治疗各种魔法伤病", needLevel: 3, hasChildren: true },
    { name: "破釜酒吧", icon: "🍺", desc: "伦敦查令十字路的巫师酒吧，壁炉后有通往对角巷的秘密通道", needLevel: 1 },
    { name: "魁地奇世界杯球场", icon: "⚽", desc: "举办魁地奇世界杯的巨大体育场，充满魔法氛围", needLevel: 4 },
    { name: "格里莫广场12号", icon: "🏠", desc: "布莱克家族的老宅，凤凰社的总部所在地", needLevel: 5 },
  ];

  adventureAreas.forEach(area => {
    const lock = checkAreaLock(area, { currentGrade, checkHouse: false });
    const isLock = lock.locked;
    const unlockTipText = lock.reason;
    
    const btn = createExploreButton({
      icon: area.icon || '',
      name: area.name,
      desc: area.desc || '',
      rateText: isLock ? ' 🔒' : (area.hasChildren ? ' →' : ''),
      unlockTip: unlockTipText,
      isDisabled: isLock
    }, () => {
      if (isLock) {
        window.doExploreLog(`🔒 ${area.name} 无法前往｜${unlockTipText}`);
        return;
      }
      
      if (area.hasChildren) {
        currentAdventureArea = area;
        renderAdventureSecondLayer();
        return;
      }
      
      if (area.name === "魁地奇世界杯球场") {
        window.doExploreLog(`⚽ 你来到了魁地奇世界杯球场！巨大的帐篷和看台延伸至远方，空气中弥漫着兴奋的气息。虽然比赛已经结束，但场地依然壮观。`);
        return;
      }
      
      if (area.name === "格里莫广场12号") {
        window.doExploreLog(`🏠 你站在格里莫广场12号门前。这栋阴暗的老宅散发着神秘的气息，布莱克家族的徽章隐约可见。你感觉到有什么力量在守护着这栋房子。`);
        return;
      }
      
      window.doExploreLog(`🚪 你外出前往${area.icon} ${area.name}，但目前这里还没有可探索的内容。`);
    });
    wrap.appendChild(btn);
  });
}

function renderAdventureSecondLayer() {
  clearAdventureContainer();
  const wrap = document.getElementById("adventure-container");
  if (!wrap || !currentAdventureArea) return;

  const backBtn = createBackButton(() => {
    currentAdventureArea = null;
    renderAdventureLayer();
  });
  wrap.appendChild(backBtn);

  const currentGrade = getYearGrade();
  let subAreas = [];

  if (currentAdventureArea.name === "对角巷") {
    subAreas = [
      { name: "古灵阁巫师银行", icon: "🏦", desc: "妖精经营的巫师银行，金库深埋地下", needLevel: 1, isGringotts: true, shopId: "gringotts" },
      { name: "奥利凡德魔杖店", icon: "🪄", desc: "自公元前382年即制杖，每根魔杖都在等待它的主人", needLevel: 1, shopId: "olivanders" },
      { name: "丽痕书店", icon: "📚", desc: "对角巷最大的书店，从教材到禁书应有尽有", needLevel: 1, shopId: "flourish_blotts" },
      { name: "摩金夫人长袍专卖店", icon: "👗", desc: "校袍、礼袍、旅行斗篷——量体裁衣", needLevel: 1, shopId: "malkins" },
      { name: "对角巷药房", icon: "🧪", desc: "药材、药剂和医疗用品的批发零售中心", needLevel: 1, shopId: "diagon_apothecary" },
      { name: "魁地奇精品店", icon: "🧹", desc: "光轮、火弩箭、各种型号的飞天扫帚", needLevel: 1, shopId: "quidditch" },
      { name: "神奇动物园", icon: "🦉", desc: "猫头鹰、蟾蜍、老鼠……各种魔法宠物", needLevel: 1, shopId: "magical_menagerie" },
      { name: "弗洛林冰淇淋店", icon: "🍦", desc: "对角巷最受欢迎的冰淇淋店，即使在冬天也排队", needLevel: 1, shopId: "florean" },
    ];
  } else if (currentAdventureArea.name === "翻倒巷") {
    subAreas = [
      { name: "博金-博克商店", icon: "💀", desc: "黑魔法器具、诅咒物品和毒药——橱窗里的东西让人不寒而栗", needLevel: 5, shopId: "borgin_burkes" },
      { name: "黑暗药房", icon: "⚗️", desc: "专门出售毒药和危险魔药材料的阴暗药房", needLevel: 5, shopId: "dark_apothecary" },
      { name: "黑暗武器店", icon: "⚔️", desc: "专门出售黑魔法武器和诅咒物品的店铺", needLevel: 5, shopId: "dark_weapons" },
      { name: "翻倒巷暗巷", icon: "🚬", desc: "笼罩在阴影中的狭窄巷道，两侧是形迹可疑的店铺", needLevel: 5 },
      { name: "二手魔杖摊位", icon: "🪄", desc: "来路不明的旧魔杖，摊主从不问你为什么需要第二根", needLevel: 5 },
    ];
  } else if (currentAdventureArea.name === "圣芒戈魔法伤病医院") {
    subAreas = [
      { name: "急诊病房", icon: "🚑", desc: "处理紧急魔法伤害的病房，治疗师随时待命", needLevel: 3 },
      { name: "魔咒伤害科", icon: "⚡", desc: "专门治疗魔咒造成的伤害和诅咒", needLevel: 3 },
      { name: "生物伤害科", icon: "🐍", desc: "治疗神奇动物造成的咬伤、蜇伤和中毒", needLevel: 3 },
      { name: "长期护理病房", icon: "🏥", desc: "为需要长期治疗的患者准备的安静病房", needLevel: 3 },
      { name: "药房", icon: "🧪", desc: "医院药房，供应各种治疗魔药和医疗用品", needLevel: 3, shopId: "st_mungos_apothecary" },
    ];
  }

  subAreas.forEach(area => {
    const lock = checkAreaLock(area, { currentGrade, checkHouse: false });
    const isLock = lock.locked;
    const unlockTipText = lock.reason;
    
    const btn = createExploreButton({
      icon: area.icon || '',
      name: area.name,
      desc: area.desc || '',
      rateText: isLock ? ' 🔒' : '',
      unlockTip: unlockTipText,
      isDisabled: isLock
    }, async () => {
      if (isLock) {
        window.doExploreLog(`🔒 ${area.name} 无法前往｜${unlockTipText}`);
        return;
      }
      
      if (area.shopId) {
        await openShopWithUI(area.shopId, area.name, {
          closePanel: closeAdventurePanel,
          refresh: renderAdventureLayer
        });
        return;
      }
      
      window.doExploreLog(`🚪 你进入了${area.icon} ${area.name}。`);
    });
    wrap.appendChild(btn);
  });
}

export function renderFirstLayer() {
  clearExploreContainer();
  const wrap = document.getElementById("explore-container");
  if (!wrap) return;

  const currentGrade = getYearGrade();
  const currentHouse = getPlayerHouse();
  const holiday = isHoliday();

  hogwartsExploreData.forEach(lv1 => {
    const lock = checkAreaLock(lv1, {
      currentGrade,
      currentHouse,
      holiday,
      checkHoliday: true,
      checkHogsmeade: true
    });
    const isLock = lock.locked;
    const unlockTipText = lock.reason;
    
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
    const lock = checkAreaLock(lv2, { currentGrade, currentHouse });
    const isLock = lock.locked;
    const unlockTipText = lock.reason;
    
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

      // 商店节点：打开商店UI
      if (isShop2) {
        await openShopWithUI(lv2.shopId, lv2.name, {
          closePanel: closeExplorePanel,
          refresh: renderSecondLayer
        });
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
          if (mat.type === "item") {
            window.addItemToBag?.({ name: mat.name });
            logSuffix += `【🎉 获得特殊物品: 📕 ${mat.name}】`;
          } else {
            const emoji = getMatEmoji ? getMatEmoji(mat.name) : "🌿";
            window.addMaterialToBag(mat.name, mat.count);
            logSuffix += `【获得材料: ${emoji} ${mat.name} x${mat.count}】`;
          }
        }

        const moneyLines = grantExploreReward({ areaName: lv2.name, exploreRate: lv2.exploreRate });
        if (moneyLines.length) logSuffix += `【${moneyLines.join("；")}】`;

        const worldFollowup = window.npcEvents?.triggerLocationHook?.(lv2.name);
        if (worldFollowup) logSuffix += worldFollowup;
        window.doExploreLog(logMessage + logSuffix);

        window._questHook_explore?.();

        triggerPostExploreCharacterEvents(lv2.name, Boolean(worldFollowup));

        handleTimeAfterAction({
          closePanel: closeExplorePanel,
          refresh: renderSecondLayer
        });
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

    const lock = checkAreaLock(item, { currentGrade, currentHouse });
    const isLock = lock.locked;
    const unlockTipText = lock.reason;
    
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

      // 如果是商店，异步打开商店界面
      if (isShop) {
        await openShopWithUI(item.shopId, item.name, {
          closePanel: closeExplorePanel,
          refresh: renderThirdLayer,
          consumeAction: false,
          errorWithMessage: false
        });
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

      const moneyLines = grantExploreReward({ areaName: item.name, exploreRate: item.exploreRate });
      if (moneyLines.length) logSuffix += `【${moneyLines.join("；")}】`;

      const worldFollowup = window.npcEvents?.triggerLocationHook?.(item.name);
      if (worldFollowup) logSuffix += worldFollowup;
      window.doExploreLog(logMessage + logSuffix);

      window._questHook_explore?.();

      triggerPostExploreCharacterEvents(item.name, Boolean(worldFollowup));

      handleTimeAfterAction({
        closePanel: closeExplorePanel,
        refresh: renderThirdLayer
      });
    });
    wrap.appendChild(btn);
  });
}

window.openExplorePanel = openExplorePanel;
window.closeExplorePanel = closeExplorePanel;
window.openAdventurePanel = openAdventurePanel;
window.closeAdventurePanel = closeAdventurePanel;

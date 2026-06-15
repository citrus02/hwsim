import { getSave, setSave, addLog } from './save/save-system.js';
import { addAffinity } from './affinity/affinity-system.js';
import { GIFT_TIERS, GIFT_CATEGORIES, getGiftTier, getGiftResponse, getGiftDelta, getCharacterGiftPrefs } from './gift-data.js';
import { getItemData, getItemEmoji } from './item.js';
import { getMatEmoji } from './explore/explore-data.js';
import { getPotionEmoji } from './potion/potion-data.js';
import { AFFINITY_CHARACTERS } from './affinity/affinity-data.js';
import { STUDENT_CHARACTERS } from './affinity/affinity-students.js';

function renderLog() { window.renderLog?.(); }

function _getConfig(key) {
  return AFFINITY_CHARACTERS[key] || STUDENT_CHARACTERS[key] || null;
}

function _getAllGiftableItems() {
  const data = getSave();
  const items = [];
  const bag = data.bag || {};

  (bag.item || []).forEach((it, idx) => {
    if (!it || (it.count || 0) <= 0) return;
    const def = getItemData(it.name);
    items.push({
      name: it.name,
      icon: def?.icon || it.icon || "📦",
      category: def?.category || "道具",
      count: it.count,
      bagType: "item",
      bagIndex: idx,
      description: def?.description || "",
    });
  });

  (bag.potion || []).forEach((it, idx) => {
    if (!it || (it.count || 0) <= 0) return;
    const emoji = getPotionEmoji(it.name);
    items.push({
      name: it.name,
      icon: emoji || "🧪",
      category: "魔药",
      count: it.count,
      bagType: "potion",
      bagIndex: idx,
      description: "",
    });
  });

  (bag.material || []).forEach((it, idx) => {
    if (!it || (it.count || 0) <= 0) return;
    const emoji = getMatEmoji(it.name);
    items.push({
      name: it.name,
      icon: emoji || "🧶",
      category: "材料",
      count: it.count,
      bagType: "material",
      bagIndex: idx,
      description: "",
    });
  });

  (bag.wizardCard || []).forEach((it, idx) => {
    if (!it || (it.count || 0) <= 0) return;
    items.push({
      name: it.name,
      icon: it.icon || "🃏",
      category: "画片",
      count: it.count,
      bagType: "wizardCard",
      bagIndex: idx,
      description: "",
    });
  });

  return items;
}

function _removeItemFromBag(bagType, bagIndex, count) {
  const data = getSave();
  const list = data.bag?.[bagType];
  if (!list || !list[bagIndex]) return;
  if (list[bagIndex].count > count) {
    list[bagIndex].count -= count;
  } else {
    list.splice(bagIndex, 1);
  }
  setSave(data);
}

export function openGiftPanel(characterKey) {
  const cfg = _getConfig(characterKey);
  if (!cfg) return;

  document.getElementById("giftPanelModal")?.remove();

  const overlay = document.createElement('div');
  overlay.id = 'giftPanelModal';
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.6); z-index: 10000;
    display: flex; align-items: center; justify-content: center;
  `;
  overlay.addEventListener('click', e => { if (e.target === overlay) closeGiftPanel(); });

  const panel = document.createElement('div');
  panel.className = 'gift-panel';
  panel.innerHTML = _renderGiftPanelContent(characterKey, cfg);

  overlay.appendChild(panel);
  document.body.appendChild(overlay);

  _bindGiftEvents(characterKey, cfg);
}

function _renderGiftPanelContent(characterKey, cfg) {
  const allItems = _getAllGiftableItems();
  const prefs = getCharacterGiftPrefs(characterKey);

  const knownItems = allItems.filter(it => {
    const tier = getGiftTier(characterKey, it.name);
    return tier !== "neutral" || true;
  });

  let itemsHtml = '';
  if (knownItems.length === 0) {
    itemsHtml = '<div class="gift-empty">背包里没有可以送的东西。</div>';
  } else {
    knownItems.forEach((it, i) => {
      const tier = getGiftTier(characterKey, it.name);
      const tierInfo = GIFT_TIERS[tier];
      itemsHtml += `
        <div class="gift-item-card" data-idx="${i}" data-bag-type="${it.bagType}" data-bag-index="${it.bagIndex}" data-name="${it.name}" data-tier="${tier}">
          <div class="gift-item-icon">${it.icon}</div>
          <div class="gift-item-info">
            <div class="gift-item-name">${it.name}</div>
            <div class="gift-item-meta">
              <span class="gift-item-count">×${it.count}</span>
              <span class="gift-item-category">${it.category}</span>
            </div>
          </div>
          <div class="gift-item-tier" style="color:${tierInfo.color}" title="${tierInfo.desc}">
            ${tierInfo.icon} ${tierInfo.label}
          </div>
        </div>`;
    });
  }

  let prefsHint = '';
  if (prefs) {
    const loveItems = prefs.love || [];
    const likeItems = prefs.like || [];
    if (loveItems.length > 0) {
      prefsHint += `<div class="gift-pref-hint"><span style="color:${GIFT_TIERS.love.color}">${GIFT_TIERS.love.icon} 挚爱：</span>${loveItems.join('、')}</div>`;
    }
    if (likeItems.length > 0) {
      prefsHint += `<div class="gift-pref-hint"><span style="color:${GIFT_TIERS.like.color}">${GIFT_TIERS.like.icon} 喜欢：</span>${likeItems.join('、')}</div>`;
    }
  }

  return `
    <div class="gift-header">
      <div class="gift-header-info">
        <span class="gift-char-icon">${cfg.icon}</span>
        <span class="gift-char-name">送给 ${cfg.name}</span>
      </div>
      <button class="gift-close-btn" id="giftCloseBtn">✕</button>
    </div>
    ${prefsHint ? `<div class="gift-prefs-section">${prefsHint}</div>` : ''}
    <div class="gift-items-list" id="giftItemsList">
      ${itemsHtml}
    </div>
    <div class="gift-tip">点击物品即可送出。偏好等级影响好感度变化。</div>`;
}

function _bindGiftEvents(characterKey, cfg) {
  const closeBtn = document.getElementById('giftCloseBtn');
  if (closeBtn) closeBtn.onclick = closeGiftPanel;

  document.querySelectorAll('.gift-item-card').forEach(card => {
    card.onclick = () => {
      const name = card.dataset.name;
      const bagType = card.dataset.bagType;
      const bagIndex = parseInt(card.dataset.bagIndex);
      const tier = card.dataset.tier;
      _executeGift(characterKey, cfg, name, bagType, bagIndex, tier);
    };
  });
}

function _executeGift(characterKey, cfg, itemName, bagType, bagIndex, tier) {
  const tierInfo = GIFT_TIERS[tier];
  const delta = tierInfo.delta;
  const response = getGiftResponse(characterKey, tier);

  _removeItemFromBag(bagType, bagIndex, 1);

  const result = addAffinity(characterKey, delta, 'gift');

  const charName = cfg.name;
  const deltaText = delta > 0 ? `+${delta}` : `${delta}`;

  addLog(`🎁 你送给${charName}「${itemName}」→ ${tierInfo.icon}${tierInfo.label} 好感度${deltaText}`);
  addLog(`${cfg.icon} ${charName}：${response}`);
  renderLog();

  if (result.tierUp) {
    window._affinityOnTierUp?.(characterKey, result.oldTier, result.newTier, result.newValue);
  }

  _showGiftResult(cfg, itemName, tier, tierInfo, delta, response);

  if (window.renderBag) window.renderBag();
}

function _showGiftResult(cfg, itemName, tier, tierInfo, delta, response) {
  const resultEl = document.createElement('div');
  resultEl.className = 'gift-result-overlay';
  resultEl.innerHTML = `
    <div class="gift-result-card">
      <div class="gift-result-tier" style="color:${tierInfo.color}">${tierInfo.icon} ${tierInfo.label}</div>
      <div class="gift-result-item">${cfg.icon} ${cfg.name} 收到了「${itemName}」</div>
      <div class="gift-result-delta" style="color:${delta >= 0 ? '#51cf66' : '#f03e3e'}">好感度 ${delta > 0 ? '+' : ''}${delta}</div>
      <div class="gift-result-response">"${response}"</div>
      <button class="gift-result-ok" id="giftResultOk">确定</button>
    </div>`;
  document.body.appendChild(resultEl);

  document.getElementById('giftResultOk').onclick = () => {
    resultEl.remove();
    closeGiftPanel();
    const mount = document.getElementById('info-affinity-mount');
    if (mount && window.affinityUI?.renderAffinityPanelInline) {
      window.affinityUI.renderAffinityPanelInline(mount);
    }
  };
}

export function closeGiftPanel() {
  document.getElementById("giftPanelModal")?.remove();
}

window.openGiftPanel = openGiftPanel;
window.closeGiftPanel = closeGiftPanel;

import { getMatEmoji } from "./explore-data.js";
import { getPotionEmoji } from './potion-data.js';
import { getSave, setSave } from './save-system.js';
import { getItemEmoji, applyItemEffect } from './item.js';

const DEFAULT_BAG_SLOTS = 10;

export let nowBagType = "material";

export function setBagType(type) {
  nowBagType = type;
  renderBag();
}

function _showBagToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `bag-toast ${type}`;
  toast.innerHTML = message.replace(/\n/g, '<br>');
  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#007bff'};
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    z-index: 10001;
    max-width: 85vw;
    text-align: center;
    font-size: 12px;
    line-height: 1.6;
    animation: fadeOut 3s ease;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

export function openBagPanel() {
  document.getElementById("bagPanelModal")?.remove();

  const overlay = document.createElement('div');
  overlay.id = 'bagPanelModal';
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.6); z-index: 9999;
    display: flex; align-items: center; justify-content: center;
  `;
  overlay.addEventListener('click', e => { if (e.target === overlay) closeBagPanel(); });

  const panel = document.createElement('div');
  panel.style.cssText = `
    background: #1a1a2e; border: 2px solid #3a3b66; border-radius: 12px;
    width: 90vw; max-width: 420px; max-height: 80vh; overflow-y: auto;
    padding: 16px; color: #e6e6e6;
  `;

  panel.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <div style="font-size:16px; font-weight:bold; color:#f8c850;">📦 物品</div>
      <button onclick="window.closeBagPanel()" style="background:none; border:none; color:#aaa; font-size:18px; cursor:pointer;">✕</button>
    </div>
    <div class="bag-tab-row" id="bagPanelTabRow" style="display:flex; gap:6px; margin-bottom:12px;">
      <button class="bag-tab active" data-bag="material" onclick="window.setBagType('material'); window._refreshBagPanelTabs();">材料</button>
      <button class="bag-tab" data-bag="potion" onclick="window.setBagType('potion'); window._refreshBagPanelTabs();">魔药</button>
      <button class="bag-tab" data-bag="item" onclick="window.setBagType('item'); window._refreshBagPanelTabs();">道具</button>
      <button class="bag-tab" data-bag="wizardCard" onclick="window.setBagType('wizardCard'); window._refreshBagPanelTabs();">画片</button>
    </div>
    <div class="bag-grid" id="bagGrid"></div>
  `;

  overlay.appendChild(panel);
  document.body.appendChild(overlay);
  renderBag();
}

export function closeBagPanel() {
  document.getElementById("bagPanelModal")?.remove();
}

function _refreshBagPanelTabs() {
  const row = document.getElementById("bagPanelTabRow");
  if (!row) return;
  row.querySelectorAll('.bag-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.bag === nowBagType);
  });
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
        emoji = getItemEmoji(item.name) || item.icon || "📦";
      }

      if (nowBagType === "wizardCard") {
        const rarityColor = { "传奇": "#ffd700", "稀有": "#a0a0ff", "普通": "#a0a0a0" };
        const color = rarityColor[item.rarity] || "#fff";
        html += `<div class="bag-slot has-item" style="border:2px solid ${color}; cursor:pointer;" onclick="window._clickBagItem('${nowBagType}', ${i})">
          <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%;">
            <div style="font-size:20px; line-height:1;">${emoji}</div>
            <div style="font-size:9px; line-height:1.1; margin-top:2px; color:${color};">${item.name}</div>
            <div style="font-size:10px; line-height:1;">×${item.count || 1}</div>
          </div>
        </div>`;
      } else {
        html += `<div class="bag-slot has-item" style="cursor:pointer;" onclick="window._clickBagItem('${nowBagType}', ${i})">
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
  const logMsg = applyItemEffect(itemName, index);
  if (logMsg) {
    _showBagToast(logMsg, 'success');
  }
}

export function clickBagItem(type, index) {
  const data = getSave();
  const list = (data.bag?.[type] || []).filter(i => i != null);
  const item = list[index];
  if (!item) return;

  if (type === "item") {
    const itemDef = window.getItemData?.(item.name);
    if (itemDef?.usable) {
      const logMsg = applyItemEffect(item.name, index);
      if (logMsg) _showBagToast(logMsg, 'success');
    } else {
      _showBagToast(`📦「${item.name}」无法直接使用`, 'error');
    }
  } else if (type === "potion") {
    _showBagToast(`🧪「${item.name}」— 可在需要时使用`, 'info');
  } else if (type === "material") {
    _showBagToast(`🧶「${item.name}」— 炼金材料`, 'info');
  } else if (type === "wizardCard") {
    const rarity = item.rarity || "普通";
    _showBagToast(`🃏「${item.name}」— ${rarity}收藏卡`, 'info');
  }
}

export function changeActions(delta) {
  const data = getSave();
  if (!data.time) data.time = { dailyActionLeft: 1, nowTime: "夜晚", currentDate: "1991-09-02" };
  data.time.dailyActionLeft = Math.max(0, (data.time.dailyActionLeft || 3) + delta);
  setSave(data);
  if (window.refreshAll) window.refreshAll();
  return data.time.dailyActionLeft;
}

window.setBagType = setBagType;
window.renderBag = renderBag;
window.addItemToBag = addItemToBag;
window.addMaterialToBag = (name, count = 1) => addItemToBag("material", { name, count });
window.addPotionToBag = (potion) => addItemToBag("potion", potion);
window.useItem = useItem;
window.changeActions = changeActions;
window.openBagPanel = openBagPanel;
window.closeBagPanel = closeBagPanel;
window._refreshBagPanelTabs = _refreshBagPanelTabs;
window._clickBagItem = clickBagItem;

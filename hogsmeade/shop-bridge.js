// shop-bridge.js — 商店系统集成

import { getSave, setSave, addLog, getYearGrade, getPlayerHouse } from '../save-system.js';

let _shopManager = null;
let _shopManagerLoading = false;

export function getPlayerGalleons() {
  const data = getSave();
  return data.player?.galleons ?? 10;
}

export function getPlayerMaterials() {
  const data = getSave();
  const materials = {};
  const materialList = data.bag?.material || [];
  materialList.forEach(item => {
    if (item && item.name) materials[item.name] = item.count || 1;
  });
  return materials;
}

export function getPlayerInventory() {
  const data = getSave();
  const inventory = {};
  const itemList = data.bag?.item || [];
  itemList.forEach(item => {
    if (item && item.name) {
      inventory[item.id || item.name] = {
        name: item.name, quantity: item.count || 1, icon: item.icon || "📦"
      };
    }
  });
  return inventory;
}

export function getPlayerWizardCards() {
  const data = getSave();
  return data.player?.wizardCards || {};
}

export function updatePlayerGalleons(amount) {
  const data = getSave();
  if (!data.player) data.player = {};
  data.player.galleons = (data.player.galleons || 10) + amount;
  setSave(data);
  if (window.refreshAll) window.refreshAll();
  return data.player.galleons;
}

export function removeMaterialFromBag(materialName, quantity) {
  const data = getSave();
  if (!data.bag) data.bag = { material: [], potion: [], item: [], wizardCard: [] };
  const list = data.bag.material || [];
  const index = list.findIndex(item => item?.name === materialName);
  if (index !== -1) {
    const item = list[index];
    if (item.count > quantity) { item.count -= quantity; }
    else { list.splice(index, 1); }
    data.bag.material = list;
    setSave(data);
    if (window.renderBag) window.renderBag();
    return true;
  }
  return false;
}

export function addShopItemToBag(itemId, itemName, quantity, icon = "📦") {
  const data = getSave();
  if (!data.bag) data.bag = { material: [], potion: [], item: [], wizardCard: [] };
  const list = data.bag.item || [];
  const existing = list.find(item => item?.id === itemId || item?.name === itemName);
  if (existing) {
    existing.count = (existing.count || 1) + quantity;
  } else {
    list.push({ id: itemId, name: itemName, icon: icon, count: quantity });
  }
  data.bag.item = list;
  setSave(data);
  if (window.renderBag) window.renderBag();
  addLog(`🛍️ 获得：${itemName} x${quantity}`);
}

export function addWizardCard(cardName) {
  const data = getSave();
  if (!data.player) data.player = {};
  if (!data.player.wizardCards) data.player.wizardCards = {};
  data.player.wizardCards[cardName] = (data.player.wizardCards[cardName] || 0) + 1;
  setSave(data);
  addLog(`🃏 获得巫师画片：${cardName}！`);
}

export function getShopStats() {
  const data = getSave();
  return data.shopStats || { totalSpent: 0, totalEarned: 0, favoriteShop: null, purchases: [] };
}

export function updateShopStats(shopId, amount, type = 'spent') {
  const data = getSave();
  if (!data.shopStats) data.shopStats = getShopStats();
  if (type === 'spent') { data.shopStats.totalSpent += amount; }
  else { data.shopStats.totalEarned += amount; }
  data.shopStats.purchases.unshift({
    shopId: shopId, amount: amount, type: type,
    date: data.time?.currentDate || new Date().toISOString()
  });
  if (data.shopStats.purchases.length > 50) data.shopStats.purchases.pop();
  setSave(data);
}

export async function getShopManager() {
  if (_shopManager) return _shopManager;
  if (_shopManagerLoading) {
    await new Promise(resolve => {
      const checkInterval = setInterval(() => {
        if (!_shopManagerLoading) { clearInterval(checkInterval); resolve(); }
      }, 50);
    });
    return _shopManager;
  }
  _shopManagerLoading = true;
  try {
    const module = await import('./index.js');
    const { ShopManager } = module;
    const playerAdapter = {
      year: getYearGrade(), house: getPlayerHouse(),
      galleons: getPlayerGalleons(), materials: getPlayerMaterials(),
      inventory: getPlayerInventory(), wizardCards: getPlayerWizardCards(),
      addLog: addLog, updateGalleons: updatePlayerGalleons,
      removeMaterial: removeMaterialFromBag, addItem: addShopItemToBag, addCard: addWizardCard
    };
    _shopManager = new ShopManager(playerAdapter);
    _shopManagerLoading = false;
    return _shopManager;
  } catch (err) {
    console.error('加载商店模块失败:', err);
    _shopManagerLoading = false;
    return null;
  }
}

export async function openShop(shopId) {
  const manager = await getShopManager();
  if (!manager) { addLog(`❌ 商店系统加载失败`); return null; }
  const result = manager.openShop(shopId);
  if (!result.success) { addLog(`❌ ${result.message}`); return null; }
  addLog(`🏪 进入 ${result.shop.name}`);
  return manager;
}

// 全局挂载
window.openShop = (shopId) => openShop(shopId);
window.getShopManager = () => getShopManager();
window.getPlayerGalleons = getPlayerGalleons;
window.updatePlayerGalleons = updatePlayerGalleons;
window.addShopItemToBag = addShopItemToBag;
window.updateShopStats = updateShopStats;
window.addWizardCard = addWizardCard;
window.removeMaterialFromBag = removeMaterialFromBag;
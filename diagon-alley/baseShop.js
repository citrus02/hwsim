// diagon-alley/baseShop.js - 对角巷商店基类

import { addLog, getYearGrade, getPlayerHouse } from '../save-system.js';

function knutsToDisplay(knuts) {
  const g = Math.floor(knuts / 493);
  const rem = knuts % 493;
  const s = Math.floor(rem / 29);
  const n = rem % 29;
  const parts = [];
  if (g > 0) parts.push(`${g}加隆`);
  if (s > 0) parts.push(`${s}西可`);
  if (n > 0) parts.push(`${n}纳特`);
  return parts.join(' ') || '0纳特';
}

export class DiagonBaseShop {
  constructor(config) {
    this.id = config.id;
    this.name = config.name;
    this.icon = config.icon;
    this.description = config.description;
    this.owner = config.owner;
    this.openYears = config.openYears || [1,2,3,4,5,6,7];
    this.minLevel = config.minLevel || 1;
    this.stockRefreshInterval = config.stockRefreshInterval || 24 * 60 * 60 * 1000;
    this.lastStockRefresh = Date.now();
    this.discount = config.discount || 1.0;
    this.loyaltyPoints = config.loyaltyPoints || 0;
    this.loyaltyLevels = config.loyaltyLevels || [];
    this.specialEvents = config.specialEvents || [];
    
    this.items = config.items || [];
    this.buybackItems = config.buybackItems || {};
    this.specialFeature = config.specialFeature || null;
    this.dailyDeal = null;
    this.refreshDailyDeal();
  }
  
  refreshDailyDeal() {
    const availableItems = this.items.filter(item => item.buyable);
    if (availableItems.length > 0) {
      const randomItem = availableItems[Math.floor(Math.random() * availableItems.length)];
      this.dailyDeal = {
        item: randomItem,
        discount: 0.7 + Math.random() * 0.2,
        expires: Date.now() + 24 * 60 * 60 * 1000
      };
    }
  }
  
  isOpen(playerYear) {
    return this.openYears.includes(playerYear);
  }
  
  getCurrentLoyaltyLevel() {
    for (let i = this.loyaltyLevels.length - 1; i >= 0; i--) {
      if (this.loyaltyPoints >= this.loyaltyLevels[i].minPoints) {
        return this.loyaltyLevels[i];
      }
    }
    return this.loyaltyLevels[0] || { level: 1, name: "新顾客", discount: 0 };
  }
  
  getItemPrice(item, player) {
    let price = item.basePrice * this.discount;
    
    if (this.dailyDeal && this.dailyDeal.item.id === item.id) {
      price *= this.dailyDeal.discount;
    }
    
    const loyaltyDiscount = this.getCurrentLoyaltyLevel().discount || 0;
    price *= (1 - loyaltyDiscount);
    
    return Math.floor(price);
  }
  
  buyItem(itemId, quantity, player) {
    const item = this.items.find(i => i.id === itemId);
    if (!item || !item.buyable) {
      return { success: false, message: "商品不存在或不可购买" };
    }
    
    if (quantity <= 0) {
      return { success: false, message: "数量无效" };
    }
    
    if (item.stock && item.stock < quantity) {
      return { success: false, message: "库存不足" };
    }
    
    const unitPrice = this.getItemPrice(item, player);
    const totalKnuts = unitPrice * quantity;
    
    if (!window.currency || typeof window.currency.getTotalKnuts !== 'function') {
      return { success: false, message: '货币系统未初始化' };
    }

    const totalKnutsOwned = window.currency.getTotalKnuts();
    if (totalKnutsOwned < totalKnuts) {
      const g = Math.floor(totalKnuts / 493);
      const rem = totalKnuts % 493;
      const s = Math.floor(rem / 29);
      const n = rem % 29;
      return { success: false, message: `金币不足，需要 ${g>0?g+"加隆 ":""}${s>0?s+"西可 ":""}${n>0?n+"纳特":""}` };
    }

    const g = Math.floor(totalKnuts / 493);
    const rem1 = totalKnuts % 493;
    const s = Math.floor(rem1 / 29);
    const n = rem1 % 29;
    
    const spendSuccess = window.currency.spendMoney(g, s, n, `在${this.name}购买${item.name}×${quantity}`);
    if (!spendSuccess) {
      return { success: false, message: '扣款失败' };
    }
    
    const totalPrice = totalKnuts;
    
    if (item.stock) {
      item.stock -= quantity;
    }
    
    if (typeof window.addItemToBag !== 'function') {
      return { success: false, message: '物品系统未初始化' };
    }
    
    window.addItemToBag("item", { id: item.id, name: item.name, icon: item.icon, count: quantity });
    
    this.loyaltyPoints += Math.floor(totalPrice / 10);
    
    window.updateShopStats(this.id, totalPrice, 'spent');
    
    addLog(`🛒 在 ${this.name} 购买了 ${item.name} x${quantity}，花费 ${item.displayPrice || knutsToDisplay(totalPrice)}`);
    
    return {
      success: true,
      message: `成功购买 ${item.name} x${quantity}，花费 ${item.displayPrice || knutsToDisplay(totalPrice)}`,
      item: item,
      quantity: quantity,
      totalPrice: totalPrice
    };
  }
  
  refreshStock() {
    const now = Date.now();
    if (now - this.lastStockRefresh >= this.stockRefreshInterval) {
      this.items.forEach(item => {
        if (item.maxStock) {
          item.stock = item.maxStock;
        }
      });
      this.lastStockRefresh = now;
      this.refreshDailyDeal();
    }
  }
  
  getWelcomeMessage(player) {
    const currentLevel = this.getCurrentLoyaltyLevel();
    return `欢迎光临 ${this.name}，${currentLevel.name}！`;
  }
}
// hogsmeade/baseShop.js - 修改以适配你的存档系统

import { addLog, getYearGrade, getPlayerHouse } from '../save-system.js';

// 纳特数转人类可读价格
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

export class BaseShop {
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
  
  getItemPrice(item, player) {
    let price = item.basePrice * this.discount;
    
    if (this.dailyDeal && this.dailyDeal.item.id === item.id) {
      price *= this.dailyDeal.discount;
    }
    
    const loyaltyDiscount = Math.min(0.1, this.loyaltyPoints / 1000);
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
    
    const unitPrice = this.getItemPrice(item, player);  // 纳特
    const totalKnuts = unitPrice * quantity;

    // 用 currency.js 检查余额并扣款（统一用纳特计算）
    const totalKnutsOwned = window.currency?.getTotalKnuts?.() ?? 0;
    if (totalKnutsOwned < totalKnuts) {
      const g = Math.floor(totalKnuts / 493);
      const rem = totalKnuts % 493;
      const s = Math.floor(rem / 29);
      const n = rem % 29;
      return { success: false, message: `金币不足，需要 ${g>0?g+"加隆 ":""}${s>0?s+"西可 ":""}${n>0?n+"纳特":""}` };
    }

    // 扣款
    const g = Math.floor(totalKnuts / 493);
    const rem1 = totalKnuts % 493;
    const s = Math.floor(rem1 / 29);
    const n = rem1 % 29;
    window.currency?.spendMoney?.(g, s, n);
    const totalPrice = totalKnuts; // 保留变量供后续使用
    
    // 扣除库存
    if (item.stock) {
      item.stock -= quantity;
    }
    
    // 添加物品到背包
    window.addShopItemToBag(item.id, item.name, quantity, item.icon);
    
    // 增加忠诚度
    this.loyaltyPoints += Math.floor(totalPrice / 10);
    
    // 记录统计
    window.updateShopStats(this.id, totalPrice, 'spent');
    
    // 添加日志
    addLog(`🛒 在 ${this.name} 购买了 ${item.name} x${quantity}，花费 ${item.displayPrice || knutsToDisplay(totalPrice)}`);
    
    return {
      success: true,
      message: `成功购买 ${item.name} x${quantity}，花费 ${item.displayPrice || knutsToDisplay(totalPrice)}`,
      item: item,
      quantity: quantity,
      totalPrice: totalPrice
    };
  }
  
  sellItem(itemName, quantity, player) {
    const buybackPrice = this.buybackItems[itemName];
    if (!buybackPrice) {
      return { success: false, message: "该商店不收购此物品" };
    }
    
    // 使用存档系统检查材料
    const hasMaterial = this.checkPlayerMaterial(itemName, quantity);
    if (!hasMaterial) {
      return { success: false, message: "物品数量不足" };
    }
    
    const totalPrice = buybackPrice * quantity;
    
    // 移除材料
    window.removeMaterialFromBag(itemName, quantity);
    
    // 增加加隆
    window.updatePlayerGalleons(totalPrice);
    
    // 记录统计
    window.updateShopStats(this.id, totalPrice, 'earned');
    
    // 添加日志
    addLog(`💰 在 ${this.name} 出售了 ${itemName} x${quantity}，获得 ${totalPrice} 加隆`);
    
    return {
      success: true,
      message: `成功出售 ${itemName} x${quantity}，获得 ${totalPrice} 加隆`,
      totalPrice: totalPrice
    };
  }
  
  // 辅助方法 - 需要从存档系统获取数据
  getPlayerGalleons() {
    // 从DOM元素读取或从存档读取
    const moneyEl = document.getElementById('stat-galleons');
    if (moneyEl) {
      return parseInt(moneyEl.textContent) || 100;
    }
    return 100;
  }
  
  checkPlayerMaterial(materialName, quantity) {
    // 检查背包中是否有足够的材料
    const bagGrid = document.getElementById('bagGrid');
    if (!bagGrid) return false;
    
    // 从存档系统获取
    const { getSave } = require('../save-system.js');
    const data = getSave();
    const materials = data.bag?.material || [];
    const item = materials.find(i => i?.name === materialName);
    return item && (item.count || 1) >= quantity;
  }
  
  getWelcomeMessage(player) {
    let message = `${this.owner}："欢迎光临${this.name}！"`;
    
    if (this.dailyDeal) {
      const discountPercent = Math.round((1 - this.dailyDeal.discount) * 100);
      message += ` 今日特价：${this.dailyDeal.item.name} ${discountPercent}% OFF！`;
    }
    
    return message;
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
}
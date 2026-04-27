// hogsmeade/shopHelper.js

import { Honeydukes } from '../shops/honeydukes.js';
import { ThreeBroomsticks } from '../shops/threeBroomsticks.js';
import { ZonkosJokeShop } from '../shops/zonkosJokeShop.js';
import { DevisesAndBangs } from '../shops/devisesAndBangs.js';
import { GladragsWizardwear } from '../shops/gladragsWizardwear.js';

// 商店管理器
export class ShopManager {
  constructor() {
    this.shops = {
      honeydukes: new Honeydukes(),
      threeBroomsticks: new ThreeBroomsticks(),
      zonkos: new ZonkosJokeShop(),
      devisesAndBangs: new DevisesAndBangs(),
      gladrags: new GladragsWizardwear()
    };
    
    this.currentShop = null;
    this.shopHistory = [];
  }
  
  // 获取所有开放的商店
  getAvailableShops(playerYear) {
    const available = [];
    for (const [id, shop] of Object.entries(this.shops)) {
      if (shop.isOpen(playerYear)) {
        available.push({
          id: shop.id,
          name: shop.name,
          icon: shop.icon,
          description: shop.description,
          owner: shop.owner
        });
      }
    }
    return available;
  }
  
  // 打开商店
  openShop(shopId, player) {
    const shop = this.shops[shopId];
    if (!shop) {
      return { success: false, message: "商店不存在" };
    }
    
    if (!shop.isOpen(player.year)) {
      return { success: false, message: `${shop.name}三年级才会开放哦` };
    }
    
    this.currentShop = shop;
    this.shopHistory.push(shopId);
    shop.refreshStock();
    
    return {
      success: true,
      shop: shop,
      message: shop.getWelcomeMessage(player)
    };
  }
  
  // 关闭当前商店
  closeShop() {
    this.currentShop = null;
  }
  
  // 回到上一个商店
  goBack() {
    if (this.shopHistory.length > 1) {
      this.shopHistory.pop();
      const prevShopId = this.shopHistory[this.shopHistory.length - 1];
      this.currentShop = this.shops[prevShopId];
      return this.currentShop;
    }
    return null;
  }
}

// 货币格式化
export function formatMoney(galleons) {
  const g = Math.floor(galleons);
  const s = Math.floor((galleons % 1) * 17);
  const k = Math.floor(((galleons % 1) * 17 % 1) * 29);
  
  if (g > 0) return `${g}加隆`;
  if (s > 0) return `${s}西可`;
  return `${k}纳特`;
}

// 价格比较工具
export const PriceUtils = {
  // 比较不同商店的价格
  comparePrices(itemName, shops) {
    const prices = {};
    for (const [shopId, shop] of Object.entries(shops)) {
      const item = shop.items.find(i => i.name === itemName);
      if (item) {
        prices[shop.name] = item.basePrice;
      }
    }
    return prices;
  },
  
  // 寻找最便宜的价格
  findCheapest(itemName, shops) {
    let cheapest = null;
    let cheapestPrice = Infinity;
    
    for (const [shopId, shop] of Object.entries(shops)) {
      const item = shop.items.find(i => i.name === itemName);
      if (item && item.basePrice < cheapestPrice) {
        cheapest = shop;
        cheapestPrice = item.basePrice;
      }
    }
    
    return { shop: cheapest, price: cheapestPrice };
  }
};

// 购买历史记录
export class PurchaseHistory {
  constructor() {
    this.purchases = [];
  }
  
  addPurchase(shopId, item, quantity, price) {
    this.purchases.unshift({
      shopId: shopId,
      itemName: item.name,
      quantity: quantity,
      price: price,
      date: new Date()
    });
    
    // 只保留最近100条记录
    if (this.purchases.length > 100) {
      this.purchases.pop();
    }
  }
  
  getTotalSpent(shopId) {
    return this.purchases
      .filter(p => p.shopId === shopId)
      .reduce((sum, p) => sum + p.price, 0);
  }
  
  getFavoriteShop() {
    const shopCount = {};
    for (const purchase of this.purchases) {
      shopCount[purchase.shopId] = (shopCount[purchase.shopId] || 0) + 1;
    }
    
    let favorite = null;
    let maxCount = 0;
    for (const [shopId, count] of Object.entries(shopCount)) {
      if (count > maxCount) {
        maxCount = count;
        favorite = shopId;
      }
    }
    
    return favorite;
  }
}
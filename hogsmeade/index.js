// hogsmeade/index.js
// 霍格莫德商业区主入口 - 完整版

import { BaseShop } from './baseShop.js';
import { Honeydukes } from './shops/honeydukes.js';
import { ThreeBroomsticks } from './shops/threeBroomsticks.js';
import { ZonkosJokeShop } from './shops/zonkosJokeShop.js';
import { DevisesAndBangs } from './shops/devisesAndBangs.js';
import { GladragsWizardwear } from './shops/gladragsWizardwear.js';
import { LaurelApothecary } from './shops/laurelApothecary.js';
import { AncientBookshop } from './shops/ancientBookshop.js';
import { ErmineTeahouse } from './shops/ermineTeahouse.js';
import { HogsmeadePost } from './shops/hogsmeadePost.js';
import { FurFeatherPet } from './shops/furFeatherPet.js';

// 商店注册表
const SHOP_REGISTRY = {
  honeydukes: Honeydukes,
  three_broomsticks: ThreeBroomsticks,
  zonkos: ZonkosJokeShop,
  devises_and_bangs: DevisesAndBangs,
  gladrags: GladragsWizardwear,
  laurel_apothecary: LaurelApothecary,
  ancient_bookshop: AncientBookshop,
  ermine_teahouse: ErmineTeahouse,
  hogsmeade_post: HogsmeadePost,
  fur_feather_pet: FurFeatherPet
};

// 商店管理器类
export class ShopManager {
  constructor(playerData) {
    this.player = playerData;
    this.shops = {};
    this.currentShop = null;
    this.purchaseHistory = [];
    this.initShops();
    this.loadHistory();
  }
  
  initShops() {
    for (const [id, ShopClass] of Object.entries(SHOP_REGISTRY)) {
      this.shops[id] = new ShopClass();
    }
  }
  
  // 获取可用的商店列表
  getAvailableShops() {
    const available = [];
    for (const [id, shop] of Object.entries(this.shops)) {
      if (shop.isOpen(this.player.year)) {
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
  openShop(shopId) {
    const shop = this.shops[shopId];
    if (!shop) {
      return { success: false, message: "商店不存在" };
    }
    
    if (!shop.isOpen(this.player.year)) {
      return { success: false, message: `${shop.name}需要${shop.minLevel}年级才能进入` };
    }
    
    this.currentShop = shop;
    shop.refreshStock();
    
    // 记录访问
    this.addToHistory('visit', shopId);
    
    return {
      success: true,
      shop: shop,
      message: shop.getWelcomeMessage(this.player)
    };
  }
  
  // 购买物品
  buyItem(itemId, quantity) {
    if (!this.currentShop) {
      return { success: false, message: "没有打开的商店" };
    }
    
    const result = this.currentShop.buyItem(itemId, quantity, this.player);
    
    if (result.success) {
      // 安全获取物品信息
      const item = this.currentShop.items.find(i => String(i.id) === String(itemId));
      
      this.addToHistory('purchase', this.currentShop.id, {
        itemId: itemId,
        itemName: item?.name || String(itemId),
        quantity: quantity,
        price: result.totalPrice || 0
      });
      this.saveProgress();
    }
    
    return result;
  }
  
  // 出售物品
  sellItem(itemName, quantity) {
    if (!this.currentShop) {
      return { success: false, message: "没有打开的商店" };
    }
    
    const result = this.currentShop.sellItem(itemName, quantity, this.player);
    
    if (result.success) {
      this.addToHistory('sell', this.currentShop.id, {
        itemName: itemName,
        quantity: quantity,
        price: result.totalPrice
      });
      this.saveProgress();
    }
    
    return result;
  }
  
  // 执行商店特色功能
  async performSpecial() {
    if (!this.currentShop || !this.currentShop.specialFeature) {
      return { success: false, message: "这家店没有特殊功能" };
    }
    
    const feature = this.currentShop.specialFeature;
    let result;
    
    switch (feature.name) {
      case "糖果试吃":
        if (feature.tasteTest) {
          result = await feature.tasteTest(this.player, this.currentShop);
        }
        break;
      case "酒馆闲聊":
        if (feature.gossip) {
          result = await feature.gossip(this.player, this.currentShop);
        }
        break;
      case "恶作剧配方":
        if (feature.learnPrank) {
          result = await feature.learnPrank(this.player, this.currentShop);
        }
        break;
      default:
        result = { success: false, message: "功能开发中" };
    }
    
    if (result && result.success) {
      this.saveProgress();
    }
    
    return result;
  }
  
  // 记录历史
  addToHistory(type, shopId, data = {}) {
    this.purchaseHistory.unshift({
      type: type,
      shopId: shopId,
      timestamp: Date.now(),
      ...data
    });
    
    // 只保留最近100条
    if (this.purchaseHistory.length > 100) {
      this.purchaseHistory.pop();
    }
  }
  
  // 获取统计信息
  getStats() {
    const stats = {
      totalSpent: 0,
      totalItemsPurchased: 0,
      favoriteShop: null,
      shopVisitCount: {},
      shopSpending: {}
    };
    
    for (const record of this.purchaseHistory) {
      if (record.type === 'purchase') {
        stats.totalSpent += record.price;
        stats.totalItemsPurchased += record.quantity;
        stats.shopSpending[record.shopId] = (stats.shopSpending[record.shopId] || 0) + record.price;
      } else if (record.type === 'visit') {
        stats.shopVisitCount[record.shopId] = (stats.shopVisitCount[record.shopId] || 0) + 1;
      }
    }
    
    // 找出最喜欢的商店
    let maxVisits = 0;
    for (const [shopId, visits] of Object.entries(stats.shopVisitCount)) {
      if (visits > maxVisits) {
        maxVisits = visits;
        stats.favoriteShop = shopId;
      }
    }
    
    return stats;
  }
  
  // 保存进度
  saveProgress() {
    const saveData = {
      player: {
        galleons: this.player.galleons,
        materials: this.player.materials,
        inventory: this.player.inventory
      },
      purchaseHistory: this.purchaseHistory,
      shops: {}
    };
    
    for (const [id, shop] of Object.entries(this.shops)) {
      saveData.shops[id] = {
        loyaltyPoints: shop.loyaltyPoints,
        lastStockRefresh: shop.lastStockRefresh
      };
    }
    
    localStorage.setItem('hogsmeade_progress', JSON.stringify(saveData));
  }
  
  // 加载进度
  loadHistory() {
    const saved = localStorage.getItem('hogsmeade_progress');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        this.purchaseHistory = data.purchaseHistory || [];
        
        // 恢复玩家数据
        if (data.player) {
          this.player.galleons = data.player.galleons;
          this.player.materials = data.player.materials;
          this.player.inventory = data.player.inventory;
        }
        
        // 恢复商店数据
        if (data.shops) {
          for (const [id, shopData] of Object.entries(data.shops)) {
            if (this.shops[id]) {
              this.shops[id].loyaltyPoints = shopData.loyaltyPoints;
              this.shops[id].lastStockRefresh = shopData.lastStockRefresh;
            }
          }
        }
      } catch (e) {
        console.error("加载存档失败:", e);
      }
    }
  }
  
  // 关闭当前商店
  closeShop() {
    this.currentShop = null;
  }
}
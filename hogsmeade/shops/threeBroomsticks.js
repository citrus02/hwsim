// hogsmeade/shops/threeBroomsticks.js

import { BaseShop } from '../baseShop.js';

export const ThreeBroomsticksShop = {
  id: "three_broomsticks",
  name: "三把扫帚酒吧",
  icon: "🍺",
  description: "霍格莫德最受欢迎的酒吧，罗斯默塔女士经营",
  owner: "罗斯默塔女士",
  openYears: [1,2,3,4,5,6,7],
  minLevel: 1,
  
  items: [
    {
      id: "butterbeer",
      name: "黄油啤酒",
      icon: "🍺",
      description: "热乎乎的，带着黄油和奶香",
      basePrice: 6,
      stock: 200,
      maxStock: 200,
      buyable: true,
      sellable: false,
      effect: { type: "warm", duration: 60 },
      bulkDiscount: { enabled: true, minQty: 3, discountRate: 0.85 }
    },
    {
      id: "firewhisky",
      name: "火焰威士忌",
      icon: "🔥",
      description: "烈性魔法酒饮",
      basePrice: 15,
      stock: 80,
      maxStock: 80,
      buyable: true,
      sellable: false,
      minLevel: 6,
      effect: { type: "courage", boost: 10 }
    },
    {
      id: "gillywater",
      name: "鳃囊草汁",
      icon: "💧",
      description: "矿泉水和薄荷、青草的味道",
      basePrice: 4,
      stock: 100,
      maxStock: 100,
      buyable: true,
      sellable: false,
      effect: { type: "hydrate", restore: 15 }
    },
    {
      id: "pumpkin_juice",
      name: "南瓜汁",
      icon: "🎃",
      description: "冰镇南瓜汁，清爽可口",
      basePrice: 3,
      stock: 150,
      maxStock: 150,
      buyable: true,
      sellable: false,
      effect: { type: "health", restore: 8 }
    },
    {
      id: "pepper_impost",
      name: "胡椒小顽童",
      icon: "🫑",
      description: "让人喷火的辣味汽水",
      basePrice: 7,
      stock: 60,
      maxStock: 60,
      buyable: true,
      sellable: false,
      effect: { type: "fire_breath", duration: 15 }
    },
    {
      id: "mead",
      name: "蜂蜜酒",
      icon: "🍷",
      description: "陈年蜂蜜酒，香醇浓郁",
      basePrice: 12,
      stock: 40,
      maxStock: 40,
      buyable: true,
      sellable: false,
      minLevel: 4
    }
  ],
  
  buybackItems: {
    "蜂蜜水": 5,
    "南瓜": 3,
    "麦芽": 8
  },
  
  specialFeature: {
    name: "酒馆闲聊",
    description: "和客人聊天，获取霍格沃茨小道消息",
    cooldown: 2 * 60 * 60 * 1000, // 2小时
    
    async gossip(player, shop) {
      const rumors = [
        { type: "secret", message: "听说图书馆禁书区藏着一个密室...", effect: { unlock: "禁书区秘密" } },
        { type: "quest", message: "有个学生需要帮助找回丢失的宠物...", effect: { quest: "找回宠物" } },
        { type: "warning", message: "最近禁林里有不寻常的动静，别去太深...", effect: { unlock: "禁林预警" } },
        { type: "reward", message: "据说在钟楼顶层能看到最美的星空...", effect: { explore: "钟楼顶层" } }
      ];
      
      const rumor = rumors[Math.floor(Math.random() * rumors.length)];
      player.receivedRumors = player.receivedRumors || [];
      
      if (!player.receivedRumors.includes(rumor.type)) {
        player.receivedRumors.push(rumor.type);
        return { success: true, message: `罗斯默塔女士：${rumor.message}`, rumor: rumor };
      }
      
      return { success: true, message: "罗斯默塔女士：今天没什么新鲜事，喝杯黄油啤酒吧！" };
    }
  },
  
  specialEvents: [
    {
      id: "quidditch_final",
      name: "魁地奇决赛之夜",
      condition: (date, gameState) => gameState.quidditchSeason === true,
      effect: (player, shop) => {
        shop.items.find(i => i.id === "butterbeer").discount = 0.7;
        return { message: "魁地奇决赛夜！黄油啤酒7折！" };
      }
    }
  ]
};

export class ThreeBroomsticks extends BaseShop {
  constructor() {
    super(ThreeBroomsticksShop);
    this.todaySpecial = null;
    this.generateTodaySpecial();
  }
  
  generateTodaySpecial() {
    const drinks = this.items.filter(item => item.id !== "firewhisky");
    this.todaySpecial = drinks[Math.floor(Math.random() * drinks.length)];
  }
  
  getWelcomeMessage(player) {
    let message = `${this.owner}："欢迎来到三把扫帚！要来杯${this.todaySpecial.name}吗？"`;
    
    if (player.quidditchTeam) {
      message += ` 听说你今天有比赛，第二杯半价！`;
      this.discount = 0.5;
    }
    
    return message;
  }
  
  buyItem(itemId, quantity, player) {
    let finalQuantity = quantity;
    
    // 第二杯半价优惠
    if (player.quidditchTeam && itemId === "butterbeer" && quantity >= 2) {
      const originalPrice = this.getItemPrice(this.items.find(i => i.id === itemId), player);
      const halfPrice = Math.floor(originalPrice / 2);
      const total = originalPrice * (quantity - 1) + halfPrice;
      
      if (player.galleons >= total) {
        player.galleons -= total;
        
        // 增加忠诚度（按原价计算）
        this.loyaltyPoints += Math.floor(originalPrice * quantity / 10);
        
        return {
          success: true,
          message: `成功购买黄油啤酒 x${quantity}，第二杯半价优惠！花费 ${total} 加隆`,
          totalPrice: total
        };
      }
      return { success: false, message: "加隆不足" };
    }
    
    return super.buyItem(itemId, finalQuantity, player);
  }
}
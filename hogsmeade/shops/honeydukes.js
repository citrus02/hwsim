// hogsmeade/shops/honeydukes.js

import { BaseShop } from '../baseShop.js';

export const HoneydukesShop = {
  id: "honeydukes",
  name: "蜂蜜公爵糖果店",
  icon: "🍬",
  description: "魔法世界最著名的糖果店，由安布罗修·弗鲁姆夫妇经营",
  owner: "安布罗修·弗鲁姆",
  openYears: [1,2,3,4,5,6,7],
  minLevel: 1,
  
  // 糖果商品
  items: [
    {
      id: "chocolate_frog",
      name: "巧克力蛙",
      icon: "🐸",
      description: "会跳的巧克力，附赠巫师画片",
      basePrice: 3,
      stock: 100,
      maxStock: 100,
      buyable: true,
      sellable: false,
      effect: { type: "collect", cardChance: 0.3 }
    },
    {
      id: "bertie_botts_beans",
      name: "比比多味豆",
      icon: "🫘",
      description: "每一颗都是惊喜(或惊吓)",
      basePrice: 2,
      stock: 200,
      maxStock: 200,
      buyable: true,
      sellable: false,
      effect: { type: "random", flavors: ["草莓","菠菜","耳屎","鼻涕"] }
    },
    {
      id: "pumpkin_pasties",
      name: "南瓜馅饼",
      icon: "🥧",
      description: "香甜的南瓜派，霍格沃茨特快上的最爱",
      basePrice: 4,
      stock: 80,
      maxStock: 80,
      buyable: true,
      sellable: false,
      effect: { type: "health", restore: 10 }
    },
    {
      id: "cauldron_cakes",
      name: "坩埚蛋糕",
      icon: "🧁",
      description: "形似坩埚的巧克力蛋糕",
      basePrice: 5,
      stock: 60,
      maxStock: 60,
      buyable: true,
      sellable: false
    },
    {
      id: "liquorice_wands",
      name: "甘草魔杖",
      icon: "🪄",
      description: "甘草糖做成的魔杖形状",
      basePrice: 6,
      stock: 90,
      maxStock: 90,
      buyable: true,
      sellable: false
    },
    {
      id: "fizzing_whizbees",
      name: "嘶嘶咻咻蜂",
      icon: "🐝",
      description: "让你浮到空中的气泡糖",
      basePrice: 8,
      stock: 50,
      maxStock: 50,
      buyable: true,
      sellable: false,
      effect: { type: "float", duration: 30 }
    },
    {
      id: "acid_pops",
      name: "酸味爆爆糖",
      icon: "🔴",
      description: "能烧穿锅底的超级酸糖",
      basePrice: 7,
      stock: 45,
      maxStock: 45,
      buyable: true,
      sellable: false,
      minLevel: 4,
      warning: "小心烫伤舌头！"
    },
    {
      id: "blood_lollipops",
      name: "血味棒棒糖",
      icon: "🍭",
      description: "吸血鬼的最爱",
      basePrice: 12,
      stock: 30,
      maxStock: 30,
      buyable: true,
      sellable: false,
      minLevel: 5
    },
    {
      id: "exploding_bonbons",
      name: "爆炸夹心糖",
      icon: "💥",
      description: "咬一口就会爆炸的糖果",
      basePrice: 10,
      stock: 40,
      maxStock: 40,
      buyable: true,
      sellable: false,
      minLevel: 4,
      effect: { type: "prank", damage: 5 }
    }
  ],
  
  // 收购列表（糖果店也收售一些材料）
  buybackItems: {
    "花蜜": 4,
    "蜂蜜水": 6,
    "糖浆": 8,
    "巧克力原料": 10
  },
  
  // 糖果店特色功能
  specialFeature: {
    name: "糖果试吃",
    description: "每天可以免费试吃一种糖果",
    cooldown: 24 * 60 * 60 * 1000,
    lastUsed: 0,
    
    async tasteTest(player, shop) {
      const now = Date.now();
      if (now - this.lastUsed < this.cooldown) {
        const remaining = Math.ceil((this.cooldown - (now - this.lastUsed)) / 3600000);
        return { success: false, message: `今天已经试吃过啦！${remaining}小时后可再次试吃` };
      }
      
      const freeCandies = shop.items.filter(item => item.buyable && item.basePrice <= 8);
      const randomCandy = freeCandies[Math.floor(Math.random() * freeCandies.length)];
      
      this.lastUsed = now;
      
      return {
        success: true,
        message: `你品尝了${randomCandy.name}！${this.getTasteDescription(randomCandy)}`,
        item: randomCandy,
        effect: randomCandy.effect
      };
    },
    
    getTasteDescription(candy) {
      const descriptions = {
        "chocolate_frog": "巧克力蛙在你嘴里跳了一下！",
        "bertie_botts_beans": "嗯...味道有点奇怪...",
        "pumpkin_pasties": "香甜的南瓜味充满口腔！",
        "cauldron_cakes": "浓郁的巧克力味！",
        "fizzing_whizbees": "哇！你感觉身体变轻了！"
      };
      return descriptions[candy.id] || "味道不错！";
    }
  },
  
  // 特殊活动（节假日）
  specialEvents: [
    {
      id: "halloween_sale",
      name: "万圣节特卖",
      condition: (date) => date.getMonth() === 9 && date.getDate() === 31,
      effect: (player, shop) => {
        shop.discount = 0.8;
        return { message: "万圣节快乐！全场8折！" };
      }
    },
    {
      id: "christmas_candy",
      name: "圣诞糖果礼包",
      condition: (date) => date.getMonth() === 11 && date.getDate() >= 20,
      effect: (player, shop) => {
        const giftPack = {
          id: "christmas_pack",
          name: "圣诞糖果大礼包",
          basePrice: 50,
          contents: [
            { id: "chocolate_frog", count: 5 },
            { id: "bertie_botts_beans", count: 10 },
            { id: "pumpkin_pasties", count: 3 }
          ]
        };
        shop.items.push(giftPack);
        return { message: "圣诞糖果礼包上架啦！" };
      }
    }
  ]
};

// 创建糖果店实例
export class Honeydukes extends BaseShop {
  constructor() {
    super(HoneydukesShop);
  }
  
  // 糖果店特有的购买逻辑（集卡系统）
  buyItem(itemId, quantity, player) {
    const result = super.buyItem(itemId, quantity, player);
    
    if (result.success && itemId === "chocolate_frog") {
      // 抽卡逻辑
      const cardResult = this.drawWizardCard(player);
      if (cardResult) {
        result.message += ` ${cardResult.message}`;
      }
    }
    
    return result;
  }
  
  drawWizardCard(player) {
    const cards = [
      { name: "邓布利多", rarity: "rare", value: 50 },
      { name: "麦格教授", rarity: "uncommon", value: 20 },
      { name: "斯内普", rarity: "rare", value: 40 },
      { name: "哈利·波特", rarity: "legendary", value: 100 },
      { name: "赫敏·格兰杰", rarity: "legendary", value: 100 },
      { name: "罗恩·韦斯莱", rarity: "common", value: 10 },
      { name: "海格", rarity: "common", value: 15 }
    ];
    
    const roll = Math.random();
    let card;
    
    if (roll < 0.05) { // 5% 传说
      card = cards.find(c => c.rarity === "legendary");
    } else if (roll < 0.2) { // 15% 稀有
      card = cards.find(c => c.rarity === "rare");
    } else { // 80% 普通
      card = cards.find(c => c.rarity === "common");
    }
    
    if (!player.wizardCards) player.wizardCards = {};
    player.wizardCards[card.name] = (player.wizardCards[card.name] || 0) + 1;
    
    return {
      success: true,
      message: `获得巫师画片：${card.name}（${card.rarity}）！`
    };
  }
}
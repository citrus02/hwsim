// diagon-alley/shops/florean.js
// 弗洛林冰淇淋店

import { BaseShop } from '../../hogsmeade/baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);

export const FloreanConfig = {
  id: "florean",
  name: "弗洛林冰淇淋店",
  icon: "🍦",
  description: "对角巷最受欢迎的冰淇淋店，提供各种神奇口味的冰淇淋",
  owner: "弗洛林·福斯科",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,
  
  loyaltyLevels: [
    { level: 1, name: "冰淇淋爱好者", minPoints: 0, discount: 0, perks: ["基础口味"] },
    { level: 2, name: "甜品尝鲜者", minPoints: 100, discount: 0.05, perks: ["5%折扣", "限量口味优先"] },
    { level: 3, name: "甜品专家", minPoints: 300, discount: 0.1, perks: ["10%折扣", "隐藏口味解锁", "免费配料"] },
    { level: 4, name: "冰淇淋大师", minPoints: 600, discount: 0.15, perks: ["15%折扣", "新品抢先", "专属口味"] },
    { level: 5, name: "终身VIP", minPoints: 1000, discount: 0.2, perks: ["20%折扣", "无限续杯", "福斯科先生亲自服务"] },
  ],

  items: [
    {
      id: "vanilla_icecream",
      name: "香草冰淇淋",
      icon: "🍦",
      category: "经典口味",
      description: "浓郁的香草冰淇淋，永远的经典",
      basePrice: S(2),
      displayPrice: "2西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "chocolate_icecream",
      name: "巧克力冰淇淋",
      icon: "🍫",
      category: "经典口味",
      description: "丝滑的巧克力冰淇淋，用最优质的可可制成",
      basePrice: S(2),
      displayPrice: "2西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "strawberry_icecream",
      name: "草莓冰淇淋",
      icon: "🍓",
      category: "经典口味",
      description: "新鲜草莓制成的冰淇淋，酸甜可口",
      basePrice: S(2),
      displayPrice: "2西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "mint_chocolate",
      name: "薄荷巧克力冰淇淋",
      icon: "🌿",
      category: "经典口味",
      description: "清凉的薄荷冰淇淋配上巧克力碎",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "butterbeer_icecream",
      name: "黄油啤酒冰淇淋",
      icon: "🍺",
      category: "魔法口味",
      description: "黄油啤酒风味的冰淇淋，带有淡淡的蜂蜜味",
      basePrice: S(4),
      displayPrice: "4西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "fizzing_wizbee",
      name: "滋滋蜂蜜冰淇淋",
      icon: "🐝",
      category: "魔法口味",
      description: "带有滋滋响声的蜂蜜冰淇淋，入口即化",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "treacle_tart",
      name: "糖浆馅饼冰淇淋",
      icon: "🥧",
      category: "魔法口味",
      description: "经典英国甜点风味的冰淇淋",
      basePrice: S(4),
      displayPrice: "4西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "chocolate_frog",
      name: "巧克力蛙冰淇淋",
      icon: "🐸",
      category: "魔法口味",
      description: "巧克力风味冰淇淋，里面有惊喜卡片",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "firewhiskey",
      name: "火焰威士忌冰淇淋",
      icon: "🔥",
      category: "成人口味",
      description: "带有火焰威士忌风味的冰淇淋（非酒精）",
      basePrice: GS(1, 0),
      displayPrice: "1加隆",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "elderflower",
      name: "接骨木花冰淇淋",
      icon: "🌸",
      category: "季节限定",
      description: "春季限定的接骨木花冰淇淋，清香宜人",
      basePrice: S(6),
      displayPrice: "6西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "pumpkin_juice",
      name: "南瓜汁冰淇淋",
      icon: "🎃",
      category: "魔法口味",
      description: "霍格沃茨宴会经典饮品的冰淇淋版本",
      basePrice: S(4),
      displayPrice: "4西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "acid_pop",
      name: "酸棒冰冰淇淋",
      icon: "💚",
      category: "魔法口味",
      description: "带有滋滋酸味的冰淇淋，刺激味蕾",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "bbertie_botts",
      name: "比比多味豆冰淇淋",
      icon: "🌈",
      category: "魔法口味",
      description: "混合了各种惊喜口味的冰淇淋",
      basePrice: S(6),
      displayPrice: "6西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "chocolate_goblet",
      name: "巧克力坩埚冰淇淋",
      icon: "🏺",
      category: "魔法口味",
      description: "巧克力脆皮包裹的冰淇淋，造型像坩埚",
      basePrice: GS(1, 0),
      displayPrice: "1加隆",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "mermaid_tears",
      name: "人鱼眼泪冰淇淋",
      icon: "💧",
      category: "季节限定",
      description: "夏日限定，蓝色的海盐冰淇淋",
      basePrice: S(7),
      displayPrice: "7西可",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "icecream_cone",
      name: "甜筒",
      icon: "🍦",
      category: "配料",
      description: "脆皮甜筒，搭配任何口味都很棒",
      basePrice: N(5),
      displayPrice: "5纳特",
      stock: 200, maxStock: 200,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "hot_fudge",
      name: "热巧克力酱",
      icon: "🍫",
      category: "配料",
      description: "香甜的热巧克力酱，完美搭配冰淇淋",
      basePrice: N(3),
      displayPrice: "3纳特",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "sprinkles",
      name: "糖屑",
      icon: "✨",
      category: "配料",
      description: "彩色糖屑，增加视觉享受",
      basePrice: N(2),
      displayPrice: "2纳特",
      stock: 150, maxStock: 150,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "whipped_cream",
      name: "鲜奶油",
      icon: "🥛",
      category: "配料",
      description: "蓬松的鲜奶油，让冰淇淋更美味",
      basePrice: N(3),
      displayPrice: "3纳特",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "magic_sprinkles",
      name: "魔法糖屑",
      icon: "🌟",
      category: "配料",
      description: "闪闪发光的魔法糖屑，会发出柔和的光芒",
      basePrice: N(5),
      displayPrice: "5纳特",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "icecream_sundae",
      name: "圣代冰淇淋",
      icon: "🍨",
      category: "甜品",
      description: "三层冰淇淋加各种配料的豪华圣代",
      basePrice: GS(1, 10),
      displayPrice: "1加隆10西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "icecream_milkshake",
      name: "冰淇淋奶昔",
      icon: "🥤",
      category: "饮品",
      description: "浓稠的冰淇淋奶昔，多种口味可选",
      basePrice: GS(1, 0),
      displayPrice: "1加隆",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      rarity: "common"
    },
  ]
};

export class FloreanShop extends BaseShop {
  constructor() {
    super(FloreanConfig);
  }

  getWelcomeMessage(player) {
    const currentLevel = this.getCurrentLoyaltyLevel();
    return `弗洛林先生："欢迎回来，${currentLevel.name}！今天想要什么口味的冰淇淋？"`;
  }
}

export default FloreanShop;
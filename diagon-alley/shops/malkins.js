// diagon-alley/shops/malkins.js
// 摩金夫人长袍专卖店

import { BaseShop } from '../../hogsmeade/baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);

export const MalkinsConfig = {
  id: "malkins",
  name: "摩金夫人长袍专卖店",
  icon: "👗",
  description: "伦敦最著名的巫师长袍店，提供各种款式的魔法长袍、校服和礼服",
  owner: "摩金夫人",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,
  
  loyaltyLevels: [
    { level: 1, name: "新顾客", minPoints: 0, discount: 0, perks: ["基础长袍选购"] },
    { level: 2, name: "常客", minPoints: 100, discount: 0.05, perks: ["5%折扣", "优先试穿"] },
    { level: 3, name: "时尚追求者", minPoints: 300, discount: 0.1, perks: ["10%折扣", "新品抢先", "免费修补"] },
    { level: 4, name: "时尚达人", minPoints: 600, discount: 0.15, perks: ["15%折扣", "定制长袍", "私人顾问"] },
    { level: 5, name: "摩金VIP", minPoints: 1000, discount: 0.2, perks: ["20%折扣", "专属设计师", "终身保修"] },
  ],

  items: [
    {
      id: "hogwarts_robes",
      name: "霍格沃茨校服长袍",
      icon: "👗",
      category: "校服",
      description: "标准的霍格沃茨学生长袍，可根据学院颜色定制",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "winter_robes",
      name: "保暖冬季长袍",
      icon: "🧥",
      category: "日常",
      description: "加厚保暖的冬季长袍，抵御苏格兰的严寒",
      basePrice: G(8),
      displayPrice: "8加隆",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "formal_robes",
      name: "正式礼服长袍",
      icon: "🎩",
      category: "礼服",
      description: "优雅的正式长袍，适合舞会和重要场合",
      basePrice: G(15),
      displayPrice: "15加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "dress_robes",
      name: "女士礼服裙",
      icon: "👗",
      category: "礼服",
      description: "华丽的女士礼服裙，适合各种正式场合",
      basePrice: G(12),
      displayPrice: "12加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "casual_robes",
      name: "休闲长袍",
      icon: "👔",
      category: "日常",
      description: "舒适的休闲长袍，适合日常穿着",
      basePrice: G(6),
      displayPrice: "6加隆",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "quidditch_robes",
      name: "魁地奇队服",
      icon: "⚽",
      category: "运动",
      description: "专业的魁地奇队服，轻便透气",
      basePrice: G(10),
      displayPrice: "10加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "school_tie",
      name: "学院领带",
      icon: "👔",
      category: "配饰",
      description: "霍格沃茨学院领带，四大学院可选",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "school_hat",
      name: "学院帽子",
      icon: "🎓",
      category: "配饰",
      description: "霍格沃茨学院帽子，四大学院可选",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "gloves",
      name: "魔法手套",
      icon: "🧤",
      category: "配饰",
      description: "保暖的魔法手套，不会影响施法",
      basePrice: S(4),
      displayPrice: "4西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "scarf",
      name: "学院围巾",
      icon: "🧣",
      category: "配饰",
      description: "温暖的学院围巾，四大学院配色",
      basePrice: S(6),
      displayPrice: "6西可",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "custom_robes",
      name: "定制长袍",
      icon: "✨",
      category: "定制",
      description: "完全定制的高级长袍，由摩金夫人亲自设计",
      basePrice: G(50),
      displayPrice: "50加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "headmaster_robes",
      name: "校长长袍",
      icon: "👑",
      category: "特殊",
      description: "庄严的校长长袍，配有金色装饰",
      basePrice: G(100),
      displayPrice: "100加隆",
      stock: 1, maxStock: 1,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "dress_shoes",
      name: "礼服鞋",
      icon: "👞",
      category: "配饰",
      description: "精致的魔法礼服鞋",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "cloak",
      name: "旅行斗篷",
      icon: "🧥",
      category: "日常",
      description: "轻便保暖的旅行斗篷",
      basePrice: G(7),
      displayPrice: "7加隆",
      stock: 35, maxStock: 35,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "invisibility_cloak",
      name: "隐形斗篷",
      icon: "👻",
      category: "特殊",
      description: "传说中的隐形斗篷，能让人完全隐形",
      basePrice: G(200),
      displayPrice: "200加隆",
      stock: 1, maxStock: 1,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "silk_handkerchief",
      name: "丝绸手帕",
      icon: "🧣",
      category: "配饰",
      description: "精致的丝绸手帕",
      basePrice: S(8),
      displayPrice: "8西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "cufflinks",
      name: "魔法袖扣",
      icon: "⚙️",
      category: "配饰",
      description: "精致的魔法袖扣，可显示时间",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "pocket_watch",
      name: "魔法怀表",
      icon: "⌚",
      category: "配饰",
      description: "精美的魔法怀表，可显示多种时间",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "student_bag",
      name: "学生书包",
      icon: "🎒",
      category: "配饰",
      description: "魔法书包，内部空间比外表大",
      basePrice: G(4),
      displayPrice: "4加隆",
      stock: 45, maxStock: 45,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "winter_hat",
      name: "保暖帽子",
      icon: "🧢",
      category: "配饰",
      description: "温暖的冬季帽子",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "house_badge",
      name: "学院徽章",
      icon: "🏅",
      category: "配饰",
      description: "精致的学院徽章，可别在长袍上",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      rarity: "common"
    },
  ]
};

export class MalkinsShop extends BaseShop {
  constructor() {
    super(MalkinsConfig);
  }

  getWelcomeMessage(player) {
    const currentLevel = this.getCurrentLoyaltyLevel();
    return `摩金夫人："欢迎光临，${currentLevel.name}！今天想看看什么样的长袍？"`;
  }
}

export default MalkinsShop;
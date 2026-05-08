// diagon-alley/shops/quidditch.js
// 魁地奇精品店

import { BaseShop } from '../../hogsmeade/baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);

export const QuidditchConfig = {
  id: "quidditch",
  name: "魁地奇精品店",
  icon: "⚽",
  description: "对角巷最专业的魁地奇装备店，提供各种飞天扫帚、球具和防护装备",
  owner: "希金斯先生",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,
  
  loyaltyLevels: [
    { level: 1, name: "魁地奇新手", minPoints: 0, discount: 0, perks: ["基础装备选购"] },
    { level: 2, name: "球队成员", minPoints: 100, discount: 0.05, perks: ["5%折扣", "优先预订"] },
    { level: 3, name: "追风者", minPoints: 300, discount: 0.1, perks: ["10%折扣", "新品抢先", "免费保养"] },
    { level: 4, name: "飞球手", minPoints: 600, discount: 0.15, perks: ["15%折扣", "限量扫帚", "私人顾问"] },
    { level: 5, name: "魁地奇传奇", minPoints: 1000, discount: 0.2, perks: ["20%折扣", "定制扫帚", "专业指导"] },
  ],

  items: [
    {
      id: "nimbus_2000",
      name: "光轮2000",
      icon: "🧹",
      category: "飞天扫帚",
      description: "经典的飞天扫帚，霍格沃茨球队的首选",
      basePrice: G(150),
      displayPrice: "150加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "nimbus_2001",
      name: "光轮2001",
      icon: "🧹",
      category: "飞天扫帚",
      description: "光轮2000的升级版，更快更稳定",
      basePrice: G(200),
      displayPrice: "200加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "firebolt",
      name: "火弩箭",
      icon: "🔥",
      category: "飞天扫帚",
      description: "目前最快的飞天扫帚，职业魁地奇球员的首选",
      basePrice: G(400),
      displayPrice: "400加隆",
      stock: 3, maxStock: 3,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "shooting_star",
      name: "流星扫帚",
      icon: "🌠",
      category: "飞天扫帚",
      description: "初学者友好的飞天扫帚，价格实惠",
      basePrice: G(75),
      displayPrice: "75加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "cleansweep_7",
      name: "横扫七星",
      icon: "🧹",
      category: "飞天扫帚",
      description: "可靠的飞天扫帚，适合训练使用",
      basePrice: G(100),
      displayPrice: "100加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "comet_260",
      name: "彗星260",
      icon: "🧹",
      category: "飞天扫帚",
      description: "经济实惠的飞天扫帚，适合新手",
      basePrice: G(90),
      displayPrice: "90加隆",
      stock: 18, maxStock: 18,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "quaffle",
      name: "鬼飞球",
      icon: "🏀",
      category: "球具",
      description: "魁地奇比赛用的鬼飞球，会自动飞向球门",
      basePrice: G(10),
      displayPrice: "10加隆",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "bludger",
      name: "游走球",
      icon: "⚾",
      category: "球具",
      description: "魁地奇比赛用的游走球，会主动攻击球员",
      basePrice: G(15),
      displayPrice: "15加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "golden_snitch",
      name: "金色飞贼",
      icon: "✨",
      category: "球具",
      description: "魁地奇比赛中最难捕捉的金色飞贼",
      basePrice: G(50),
      displayPrice: "50加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "broomstick_polish",
      name: "扫帚保养油",
      icon: "🧴",
      category: "配件",
      description: "保持飞天扫帚最佳状态的保养油",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "quidditch_gloves",
      name: "魁地奇手套",
      icon: "🧤",
      category: "防护装备",
      description: "防滑耐磨的魁地奇手套",
      basePrice: GS(1, 0),
      displayPrice: "1加隆",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "quidditch_helmet",
      name: "魁地奇头盔",
      icon: "⛑️",
      category: "防护装备",
      description: "保护头部的魁地奇头盔",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "quidditch_robe",
      name: "魁地奇队服",
      icon: "👕",
      category: "队服",
      description: "轻便透气的魁地奇队服",
      basePrice: G(8),
      displayPrice: "8加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "snitch_seeker",
      name: "金色飞贼捕捉器",
      icon: "🪤",
      category: "训练工具",
      description: "帮助找球手练习捕捉金色飞贼的工具",
      basePrice: G(20),
      displayPrice: "20加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "broom_stand",
      name: "扫帚支架",
      icon: "🏆",
      category: "配件",
      description: "展示飞天扫帚的精美支架",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "quidditch_boots",
      name: "魁地奇靴子",
      icon: "🥾",
      category: "防护装备",
      description: "防滑耐磨的魁地奇靴子",
      basePrice: G(4),
      displayPrice: "4加隆",
      stock: 35, maxStock: 35,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "goalie_gloves",
      name: "守门员手套",
      icon: "🧤",
      category: "防护装备",
      description: "加厚的守门员专用手套",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "training_quaffle",
      name: "训练用鬼飞球",
      icon: "🏀",
      category: "训练工具",
      description: "重量适中的训练用鬼飞球",
      basePrice: G(8),
      displayPrice: "8加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "quidditch_hoops",
      name: "魁地奇球门",
      icon: "⛹️",
      category: "训练工具",
      description: "便携式魁地奇球门，适合训练",
      basePrice: G(30),
      displayPrice: "30加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "speed_potion",
      name: "速度药剂",
      icon: "🧪",
      category: "消耗品",
      description: "暂时提升飞行速度的药剂",
      basePrice: G(10),
      displayPrice: "10加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "quidditch_book",
      name: "魁地奇战术手册",
      icon: "📖",
      category: "书籍",
      description: "详细介绍魁地奇战术的书籍",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "world_cup_ticket",
      name: "魁地奇世界杯门票",
      icon: "🎫",
      category: "特殊",
      description: "珍贵的魁地奇世界杯门票",
      basePrice: G(100),
      displayPrice: "100加隆",
      stock: 2, maxStock: 2,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
  ]
};

export class QuidditchShop extends BaseShop {
  constructor() {
    super(QuidditchConfig);
  }

  getWelcomeMessage(player) {
    const currentLevel = this.getCurrentLoyaltyLevel();
    return `希金斯先生："欢迎回来，${currentLevel.name}！今天想看看什么装备？"`;
  }
}

export default QuidditchShop;
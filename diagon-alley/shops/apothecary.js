// diagon-alley/shops/apothecary.js
// 对角巷药房

import { BaseShop } from '../../hogsmeade/baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);

export const ApothecaryConfig = {
  id: "apothecary",
  name: "对角巷药房",
  icon: "🧪",
  description: "对角巷最古老的魔药材料店，提供各种稀有和常见的魔药原料",
  owner: "药店老板",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,
  
  loyaltyLevels: [
    { level: 1, name: "初学魔药师", minPoints: 0, discount: 0, perks: ["基础材料选购"] },
    { level: 2, name: "学徒魔药师", minPoints: 100, discount: 0.05, perks: ["5%折扣", "限量材料优先"] },
    { level: 3, name: "进阶魔药师", minPoints: 300, discount: 0.1, perks: ["10%折扣", "稀有材料解锁", "免费研磨"] },
    { level: 4, name: "资深魔药师", minPoints: 600, discount: 0.15, perks: ["15%折扣", "珍贵材料优先", "专属配方"] },
    { level: 5, name: "大师级魔药师", minPoints: 1000, discount: 0.2, perks: ["20%折扣", "稀有材料预订", "店主亲自服务"] },
  ],

  items: [
    {
      id: "ingredient_wormwood",
      name: "艾草",
      icon: "🌿",
      category: "草本",
      description: "常见的魔药材料，用于多种基础魔药",
      basePrice: S(2),
      displayPrice: "2西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "ingredient_nettle",
      name: "荨麻",
      icon: "🌿",
      category: "草本",
      description: "带刺的植物，用于多种魔药",
      basePrice: S(1),
      displayPrice: "1西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "ingredient_ginger",
      name: "生姜",
      icon: "🧄",
      category: "草本",
      description: "辛辣的根茎，用于多种魔药",
      basePrice: S(1),
      displayPrice: "1西可",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "ingredient_mint",
      name: "薄荷",
      icon: "🌿",
      category: "草本",
      description: "清凉的草本植物",
      basePrice: S(1),
      displayPrice: "1西可",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "ingredient_peppermint",
      name: "胡椒薄荷",
      icon: "🌿",
      category: "草本",
      description: "用于制作提神药剂的重要材料",
      basePrice: S(2),
      displayPrice: "2西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "ingredient_lavender",
      name: "薰衣草",
      icon: "💜",
      category: "草本",
      description: "用于制作镇定剂的芳香草本",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "ingredient_chamomile",
      name: "洋甘菊",
      icon: "🌼",
      category: "草本",
      description: "温和的镇静草本",
      basePrice: S(2),
      displayPrice: "2西可",
      stock: 70, maxStock: 70,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "ingredient_sage",
      name: "鼠尾草",
      icon: "🌿",
      category: "草本",
      description: "用于增强记忆的草本",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "ingredient_dragon_blood",
      name: "龙血",
      icon: "🩸",
      category: "稀有材料",
      description: "珍贵的龙血，用于多种高级魔药",
      basePrice: G(10),
      displayPrice: "10加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "ingredient_unicorn_hair",
      name: "独角兽毛",
      icon: "🦄",
      category: "稀有材料",
      description: "纯净的独角兽毛，用于制作魔杖和高级魔药",
      basePrice: G(8),
      displayPrice: "8加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "ingredient_phoenix_feather",
      name: "凤凰羽毛",
      icon: "🔥",
      category: "稀有材料",
      description: "珍贵的凤凰羽毛，极为稀有",
      basePrice: G(20),
      displayPrice: "20加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "ingredient_bat_spleen",
      name: "蝙蝠脾脏",
      icon: "🦇",
      category: "动物材料",
      description: "用于制作肿胀药水等魔药",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "ingredient_leech_juice",
      name: "水蛭汁",
      icon: "🩸",
      category: "动物材料",
      description: "用于制作多种魔药的汁液",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "ingredient_slug",
      name: "鼻涕虫",
      icon: "🐌",
      category: "动物材料",
      description: "用于制作软化药水等",
      basePrice: S(1),
      displayPrice: "1西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "ingredient_spider_venom",
      name: "蜘蛛毒液",
      icon: "🕷️",
      category: "动物材料",
      description: "用于制作强效魔药的毒液",
      basePrice: S(8),
      displayPrice: "8西可",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "ingredient_ashwinder_egg",
      name: "灰蛇蛋",
      icon: "🥚",
      category: "稀有材料",
      description: "火灰蛇的蛋，用于制作高级魔药",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "ingredient_bezoar",
      name: "牛黄",
      icon: "💎",
      category: "稀有材料",
      description: "山羊胃里的结石，是强力解毒剂",
      basePrice: G(15),
      displayPrice: "15加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "ingredient_felix_felicis",
      name: "福灵剂",
      icon: "✨",
      category: "成品药剂",
      description: "幸运药水，让饮用者事事顺心",
      basePrice: G(100),
      displayPrice: "100加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "ingredient_wiggenweld",
      name: "愈合药剂",
      icon: "🧪",
      category: "成品药剂",
      description: "治疗外伤的标准药剂",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "ingredient_polyjuice",
      name: "复方汤剂",
      icon: "🧪",
      category: "成品药剂",
      description: "可以让人变形为另一个人的魔药",
      basePrice: G(50),
      displayPrice: "50加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "ingredient_draught_peace",
      name: "平和剂",
      icon: "🧪",
      category: "成品药剂",
      description: "平息情绪的药剂",
      basePrice: G(4),
      displayPrice: "4加隆",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "ingredient_veritaserum",
      name: "吐真剂",
      icon: "🧪",
      category: "成品药剂",
      description: "迫使服用者说出真相的药剂",
      basePrice: G(20),
      displayPrice: "20加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "ingredient_skele-gro",
      name: "生骨灵",
      icon: "🧪",
      category: "成品药剂",
      description: "用于重新生长骨头的痛苦但有效的药剂",
      basePrice: G(15),
      displayPrice: "15加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "ingredient_sleeping_draught",
      name: "安眠剂",
      icon: "🧪",
      category: "成品药剂",
      description: "强效的睡眠药水",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "ingredient_wit_sharpening",
      name: "智慧药剂",
      icon: "🧪",
      category: "成品药剂",
      description: "暂时增强智力和记忆力的药剂",
      basePrice: G(8),
      displayPrice: "8加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "ingredient_mandrakes",
      name: "曼德拉草",
      icon: "🌱",
      category: "稀有材料",
      description: "用于制作恢复药剂的珍贵植物",
      basePrice: G(12),
      displayPrice: "12加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "ingredient_wolfsbane",
      name: "狼毒药剂材料包",
      icon: "🌿",
      category: "稀有材料",
      description: "制作狼毒药剂所需的全套材料",
      basePrice: G(25),
      displayPrice: "25加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "ingredient_powdered_bicorn_horn",
      name: "双角兽角粉",
      icon: "🦄",
      category: "稀有材料",
      description: "研磨的双角兽角，用于多种高级魔药",
      basePrice: G(6),
      displayPrice: "6加隆",
      stock: 18, maxStock: 18,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "ingredient_dittany",
      name: " dittany",
      icon: "🌿",
      category: "草本",
      description: "用于治疗烧伤的神奇草本",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "potions_kit",
      name: "初学者魔药套装",
      icon: "🧰",
      category: "工具",
      description: "包含基础魔药工具的套装",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "phial_set",
      name: "药剂瓶套装",
      icon: "🧪",
      category: "工具",
      description: "各种尺寸的玻璃药剂瓶",
      basePrice: GS(1, 5),
      displayPrice: "1加隆5西可",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "common"
    },
  ]
};

export class ApothecaryShop extends BaseShop {
  constructor() {
    super(ApothecaryConfig);
  }

  getWelcomeMessage(player) {
    const currentLevel = this.getCurrentLoyaltyLevel();
    return `药店老板："欢迎回来，${currentLevel.name}！需要什么材料？"`;
  }
}

export default ApothecaryShop;
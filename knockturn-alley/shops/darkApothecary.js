// knockturn-alley/shops/darkApothecary.js
// 黑暗药房

import { BaseShop } from '../../hogsmeade/baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);

export const DarkApothecaryConfig = {
  id: "dark_apothecary",
  name: "黑暗药房",
  icon: "⚗️",
  description: "专门出售毒药和危险魔药材料的阴暗药房",
  owner: "未知",
  openYears: [2, 3, 4, 5, 6, 7],
  minLevel: 3,
  
  loyaltyLevels: [
    { level: 1, name: "访客", minPoints: 0, discount: 0, perks: ["基础毒药选购"] },
    { level: 2, name: "学徒", minPoints: 150, discount: 0.05, perks: ["5%折扣", "稀有毒药优先"] },
    { level: 3, name: "药师", minPoints: 400, discount: 0.1, perks: ["10%折扣", "剧毒解锁", "免费研磨"] },
    { level: 4, name: "大师", minPoints: 800, discount: 0.15, perks: ["15%折扣", "秘制配方", "专属服务"] },
    { level: 5, name: "宗师", minPoints: 1500, discount: 0.2, perks: ["20%折扣", "定制毒药", "深夜服务"] },
  ],

  items: [
    {
      id: "deadly_poison",
      name: "致命毒药",
      icon: "💀",
      category: "毒药",
      description: "一滴即可致命的剧毒",
      basePrice: G(30),
      displayPrice: "30加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "sleeping_poison",
      name: "昏睡毒药",
      icon: "😴",
      category: "毒药",
      description: "能让人陷入深度睡眠的毒药",
      basePrice: G(15),
      displayPrice: "15加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "paralysis_potion",
      name: "麻痹药剂",
      icon: "🧪",
      category: "药剂",
      description: "能让人全身麻痹的药剂",
      basePrice: G(20),
      displayPrice: "20加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "venom_snake",
      name: "蛇毒液",
      icon: "🐍",
      category: "材料",
      description: "来自毒蛇的毒液",
      basePrice: G(12),
      displayPrice: "12加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "poisonous_mushroom",
      name: "毒蘑菇",
      icon: "🍄",
      category: "材料",
      description: "带有剧毒的魔法蘑菇",
      basePrice: G(8),
      displayPrice: "8加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "dark_essence",
      name: "黑暗精华",
      icon: "⚫",
      category: "材料",
      description: "从黑暗生物身上提取的精华",
      basePrice: G(25),
      displayPrice: "25加隆",
      stock: 6, maxStock: 6,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "forgetfulness_potion",
      name: "遗忘药剂",
      icon: "🧠",
      category: "药剂",
      description: "能让人忘记特定记忆的药剂",
      basePrice: G(40),
      displayPrice: "40加隆",
      stock: 4, maxStock: 4,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "fear_potion",
      name: "恐惧药剂",
      icon: "😨",
      category: "药剂",
      description: "能让人产生极度恐惧的药剂",
      basePrice: G(28),
      displayPrice: "28加隆",
      stock: 7, maxStock: 7,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "bat_wings",
      name: "蝙蝠翅膀",
      icon: "🦇",
      category: "材料",
      description: "蝙蝠的翅膀，用于制作黑暗魔药",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "spider_venom",
      name: "蜘蛛毒液",
      icon: "🕷️",
      category: "材料",
      description: "巨型蜘蛛的毒液",
      basePrice: G(18),
      displayPrice: "18加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "shadow_powder",
      name: "暗影粉末",
      icon: "🌑",
      category: "材料",
      description: "能吸收光线的神秘粉末",
      basePrice: G(22),
      displayPrice: "22加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "death_petal",
      name: "死亡花瓣",
      icon: "🌸",
      category: "材料",
      description: "只在午夜盛开的花朵的花瓣",
      basePrice: G(35),
      displayPrice: "35加隆",
      stock: 3, maxStock: 3,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "silence_potion",
      name: "沉默药剂",
      icon: "🤫",
      category: "药剂",
      description: "能让人无法说话的药剂",
      basePrice: G(16),
      displayPrice: "16加隆",
      stock: 12, maxStock: 12,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "nightshade",
      name: "颠茄",
      icon: "🌿",
      category: "材料",
      description: "有毒的草本植物",
      basePrice: G(6),
      displayPrice: "6加隆",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "corpse_flower",
      name: "尸花",
      icon: "💐",
      category: "材料",
      description: "散发腐肉气味的花朵",
      basePrice: G(14),
      displayPrice: "14加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "madness_potion",
      name: "疯狂药剂",
      icon: "🤪",
      category: "药剂",
      description: "能让人短暂发疯的药剂",
      basePrice: G(32),
      displayPrice: "32加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "bone_dust",
      name: "骨粉",
      icon: "💀",
      category: "材料",
      description: "研磨的人骨粉末",
      basePrice: G(20),
      displayPrice: "20加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "dark_bottle",
      name: "黑暗玻璃瓶",
      icon: "🧪",
      category: "工具",
      description: "专门用于存放毒药的玻璃瓶",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "poison_mixing_set",
      name: "毒药调配套装",
      icon: "⚗️",
      category: "工具",
      description: "包含各种调配毒药的工具",
      basePrice: G(15),
      displayPrice: "15加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "invisibility_potion",
      name: "隐形药剂",
      icon: "👻",
      category: "药剂",
      description: "能让人隐形的药剂",
      basePrice: G(50),
      displayPrice: "50加隆",
      stock: 3, maxStock: 3,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
  ]
};

export class DarkApothecaryShop extends BaseShop {
  constructor() {
    super(DarkApothecaryConfig);
  }

  getWelcomeMessage(player) {
    const currentLevel = this.getCurrentLoyaltyLevel();
    return `药师："欢迎，${currentLevel.name}...想要点什么...致命的？还是只是让人不舒服的？"`;
  }
}

export default DarkApothecaryShop;
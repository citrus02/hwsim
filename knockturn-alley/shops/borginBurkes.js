// knockturn-alley/shops/borginBurkes.js
// 博金-博克商店

import { BaseShop } from '../../hogsmeade/baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);

export const BorginBurkesConfig = {
  id: "borgin_burkes",
  name: "博金-博克商店",
  icon: "🏪",
  description: "翻倒巷最著名的商店，出售各种黑魔法物品和违禁物品",
  owner: "博金先生和博克先生",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 3,
  
  loyaltyLevels: [
    { level: 1, name: "好奇者", minPoints: 0, discount: 0, perks: ["基础物品浏览"] },
    { level: 2, name: "收藏家", minPoints: 200, discount: 0.05, perks: ["5%折扣", "稀有物品优先"] },
    { level: 3, name: "鉴赏家", minPoints: 500, discount: 0.1, perks: ["10%折扣", "违禁物品解锁", "私人展示"] },
    { level: 4, name: "主顾", minPoints: 1000, discount: 0.15, perks: ["15%折扣", "独家物品", "博金亲自接待"] },
    { level: 5, name: "贵宾", minPoints: 2000, discount: 0.2, perks: ["20%折扣", "定制物品", "秘密仓库访问"] },
  ],

  items: [
    {
      id: "hand_of_glory",
      name: "光荣之手",
      icon: "✋",
      category: "黑暗物品",
      description: "一只干枯的人手，点燃后能照亮持有者想看的东西",
      basePrice: G(50),
      displayPrice: "50加隆",
      stock: 2, maxStock: 2,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "invisibility_cloak_old",
      name: "破旧隐形斗篷",
      icon: "👻",
      category: "黑暗物品",
      description: "一件古老的隐形斗篷，效果不如全新的好",
      basePrice: G(80),
      displayPrice: "80加隆",
      stock: 1, maxStock: 1,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "poison_vials",
      name: "毒药瓶套装",
      icon: "⚗️",
      category: "药剂",
      description: "各种毒药的套装",
      basePrice: G(20),
      displayPrice: "20加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "cursed_necklace",
      name: "诅咒项链",
      icon: "💀",
      category: "诅咒物品",
      description: "带有死亡诅咒的项链，佩戴者会慢慢衰弱",
      basePrice: G(100),
      displayPrice: "100加隆",
      stock: 1, maxStock: 1,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "bone_hand",
      name: "白骨手",
      icon: "🦴",
      category: "黑暗物品",
      description: "用人骨制成的手形装饰品",
      basePrice: G(30),
      displayPrice: "30加隆",
      stock: 3, maxStock: 3,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "dark_spellbook",
      name: "黑暗咒语书",
      icon: "📜",
      category: "书籍",
      description: "记载着各种黑魔法咒语的古老书籍",
      basePrice: G(60),
      displayPrice: "60加隆",
      stock: 2, maxStock: 2,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "snake_fang",
      name: "蛇牙",
      icon: "🦷",
      category: "材料",
      description: "剧毒蛇的牙齿，可用于制作毒药",
      basePrice: G(10),
      displayPrice: "10加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "dark_mirror",
      name: "魔镜",
      icon: "🪞",
      category: "诅咒物品",
      description: "能显示使用者最深欲望的魔镜",
      basePrice: G(150),
      displayPrice: "150加隆",
      stock: 1, maxStock: 1,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "voldemort_horcrux",
      name: "魂器碎片",
      icon: "💎",
      category: "传说物品",
      description: "神秘的魂器碎片，蕴含强大的黑暗力量",
      basePrice: G(500),
      displayPrice: "500加隆",
      stock: 1, maxStock: 1,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "death_eater_mask",
      name: "食死徒面具",
      icon: "🎭",
      category: "黑暗物品",
      description: "食死徒集会时佩戴的骷髅面具",
      basePrice: G(40),
      displayPrice: "40加隆",
      stock: 3, maxStock: 3,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "dark_potion_ingredients",
      name: "黑魔药材料包",
      icon: "🧪",
      category: "材料",
      description: "制作黑魔法药剂的材料包",
      basePrice: G(25),
      displayPrice: "25加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "blood_potion",
      name: "血魔药",
      icon: "🩸",
      category: "药剂",
      description: "需要人血制成的黑暗药剂",
      basePrice: G(35),
      displayPrice: "35加隆",
      stock: 4, maxStock: 4,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "dark_wand",
      name: "黑魔杖",
      icon: "🪄",
      category: "黑暗物品",
      description: "适合施展黑魔法的魔杖",
      basePrice: G(70),
      displayPrice: "70加隆",
      stock: 2, maxStock: 2,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "cursed_ring",
      name: "诅咒戒指",
      icon: "💍",
      category: "诅咒物品",
      description: "带有诅咒的戒指，会带来厄运",
      basePrice: G(45),
      displayPrice: "45加隆",
      stock: 2, maxStock: 2,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "mandrakes_root",
      name: "曼德拉草根",
      icon: "🌿",
      category: "材料",
      description: "可用于制作强大魔药的曼德拉草根",
      basePrice: G(30),
      displayPrice: "30加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "dark_arts_scroll",
      name: "黑魔法卷轴",
      icon: "📜",
      category: "书籍",
      description: "记载着禁咒的卷轴",
      basePrice: G(55),
      displayPrice: "55加隆",
      stock: 3, maxStock: 3,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "inferius_dust",
      name: "阴尸尘",
      icon: "💨",
      category: "材料",
      description: "来自阴尸的尘土，用于召唤亡灵",
      basePrice: G(20),
      displayPrice: "20加隆",
      stock: 6, maxStock: 6,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "dark_amulet",
      name: "黑暗护符",
      icon: "📿",
      category: "诅咒物品",
      description: "增强黑魔法能力的护符",
      basePrice: G(65),
      displayPrice: "65加隆",
      stock: 2, maxStock: 2,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "poisoned_apple",
      name: "毒苹果",
      icon: "🍎",
      category: "药剂",
      description: "带有剧毒的苹果，可用于暗杀",
      basePrice: G(15),
      displayPrice: "15加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "dark_crystal",
      name: "黑暗水晶",
      icon: "💎",
      category: "材料",
      description: "蕴含黑暗能量的水晶",
      basePrice: G(40),
      displayPrice: "40加隆",
      stock: 4, maxStock: 4,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "soul_extractor",
      name: "摄魂器",
      icon: "⚡",
      category: "黑暗物品",
      description: "可以抽取灵魂碎片的神秘器具",
      basePrice: G(200),
      displayPrice: "200加隆",
      stock: 1, maxStock: 1,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
  ]
};

export class BorginBurkesShop extends BaseShop {
  constructor() {
    super(BorginBurkesConfig);
  }

  getWelcomeMessage(player) {
    const currentLevel = this.getCurrentLoyaltyLevel();
    return `博金先生："欢迎回来，${currentLevel.name}。我们刚进了一些...有趣的新货..."`;
  }
}

export default BorginBurkesShop;
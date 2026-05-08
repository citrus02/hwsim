// diagon-alley/shops/magicalMenagerie.js
// 神奇动物园

import { BaseShop } from '../../hogsmeade/baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);

export const MagicalMenagerieConfig = {
  id: "magical_menagerie",
  name: "神奇动物园",
  icon: "🦉",
  description: "对角巷著名的魔法宠物商店，出售各种神奇动物作为宠物",
  owner: "艾琳·芬奇",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,
  
  loyaltyLevels: [
    { level: 1, name: "宠物爱好者", minPoints: 0, discount: 0, perks: ["基础宠物选购"] },
    { level: 2, name: "宠物新手", minPoints: 100, discount: 0.05, perks: ["5%折扣", "饲养指南"] },
    { level: 3, name: "宠物家长", minPoints: 300, discount: 0.1, perks: ["10%折扣", "稀有宠物优先", "免费检查"] },
    { level: 4, name: "宠物专家", minPoints: 600, discount: 0.15, perks: ["15%折扣", "魔法宠物解锁", "专属顾问"] },
    { level: 5, name: "宠物大师", minPoints: 1000, discount: 0.2, perks: ["20%折扣", "定制宠物", "芬奇女士亲自接待"] },
  ],

  items: [
    {
      id: "owl_snowy",
      name: "雪鸮",
      icon: "🦉",
      category: "猫头鹰",
      description: "美丽的白色猫头鹰，是优秀的信使",
      basePrice: G(10),
      displayPrice: "10加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "owl_barn",
      name: "仓鸮",
      icon: "🦉",
      category: "猫头鹰",
      description: "常见的谷仓猫头鹰，温顺可靠",
      basePrice: G(8),
      displayPrice: "8加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "owl_scops",
      name: "角鸮",
      icon: "🦉",
      category: "猫头鹰",
      description: "小巧的角鸮，飞行敏捷",
      basePrice: G(6),
      displayPrice: "6加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "owl_eagle",
      name: "雕鸮",
      icon: "🦉",
      category: "猫头鹰",
      description: "大型雕鸮，力量强大",
      basePrice: G(12),
      displayPrice: "12加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "cat_maine_coon",
      name: "缅因猫",
      icon: "🐱",
      category: "猫",
      description: "大型温顺的缅因猫，是很好的伴侣",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "cat_persian",
      name: "波斯猫",
      icon: "🐱",
      category: "猫",
      description: "优雅的波斯猫，毛发柔软",
      basePrice: G(6),
      displayPrice: "6加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "cat_ragdoll",
      name: "布偶猫",
      icon: "🐱",
      category: "猫",
      description: "温柔的布偶猫，性格温顺",
      basePrice: G(7),
      displayPrice: "7加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "cat_kneazle",
      name: "猫狸子",
      icon: "🐱",
      category: "魔法猫",
      description: "聪明的魔法猫，能察觉危险",
      basePrice: G(15),
      displayPrice: "15加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "rat",
      name: "老鼠",
      icon: "🐭",
      category: "老鼠",
      description: "聪明的宠物老鼠",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "toad",
      name: "蟾蜍",
      icon: "🐸",
      category: "蟾蜍",
      description: "传统的巫师宠物蟾蜍",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "pygmy_puff",
      name: "侏儒蒲绒绒",
      icon: "🧸",
      category: "神奇宠物",
      description: "可爱的毛茸茸生物，有多种颜色",
      basePrice: G(4),
      displayPrice: "4加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "fire_crab",
      name: "火螃蟹",
      icon: "🦀",
      category: "神奇宠物",
      description: "来自斐济的魔法螃蟹，能喷出火焰",
      basePrice: G(20),
      displayPrice: "20加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "owlet",
      name: "猫头鹰幼崽",
      icon: "🦉",
      category: "猫头鹰",
      description: "可爱的猫头鹰幼崽，需要悉心照料",
      basePrice: G(15),
      displayPrice: "15加隆",
      stock: 3, maxStock: 3,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "phoenix_chick",
      name: "凤凰幼崽",
      icon: "🔥",
      category: "神奇宠物",
      description: "珍贵的凤凰幼崽，长大后会复活",
      basePrice: G(100),
      displayPrice: "100加隆",
      stock: 1, maxStock: 1,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "niffler",
      name: "嗅嗅",
      icon: "🦝",
      category: "神奇宠物",
      description: "喜欢闪闪发光物品的可爱生物",
      basePrice: G(8),
      displayPrice: "8加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "bowtruckle",
      name: "护树罗锅",
      icon: "🌿",
      category: "神奇宠物",
      description: "可爱的树栖生物，能开锁",
      basePrice: G(6),
      displayPrice: "6加隆",
      stock: 12, maxStock: 12,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "puffskein",
      name: "蒲绒绒",
      icon: "🧶",
      category: "神奇宠物",
      description: "毛茸茸的球形生物，性情温和",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "crup",
      name: "克鲁克山",
      icon: "🐕",
      category: "魔法犬",
      description: "忠诚的魔法犬，有一条尾巴",
      basePrice: G(10),
      displayPrice: "10加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "thestral",
      name: "夜骐",
      icon: "🦄",
      category: "神奇宠物",
      description: "只有见过死亡的人才能看到的神奇生物",
      basePrice: G(50),
      displayPrice: "50加隆",
      stock: 2, maxStock: 2,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "fawkes_feather",
      name: "凤凰羽毛饰品",
      icon: "🪶",
      category: "饰品",
      description: "凤凰羽毛制成的幸运饰品",
      basePrice: G(25),
      displayPrice: "25加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "pet_food",
      name: "宠物食物",
      icon: "🥣",
      category: "用品",
      description: "适合各种宠物的魔法食物",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "pet_cage",
      name: "宠物笼",
      icon: "🐦",
      category: "用品",
      description: "舒适的宠物笼，适合猫头鹰和小动物",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "pet_toy",
      name: "宠物玩具",
      icon: "🎾",
      category: "用品",
      description: "让宠物开心的魔法玩具",
      basePrice: S(2),
      displayPrice: "2西可",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "pet_bed",
      name: "宠物床",
      icon: "🛏️",
      category: "用品",
      description: "舒适的宠物床",
      basePrice: G(1),
      displayPrice: "1加隆",
      stock: 35, maxStock: 35,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "magical_collar",
      name: "魔法项圈",
      icon: "🎀",
      category: "用品",
      description: "带有防护魔法的宠物项圈",
      basePrice: GS(2, 0),
      displayPrice: "2加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      rarity: "common"
    },
  ]
};

export class MagicalMenagerieShop extends BaseShop {
  constructor() {
    super(MagicalMenagerieConfig);
  }

  getWelcomeMessage(player) {
    const currentLevel = this.getCurrentLoyaltyLevel();
    return `芬奇女士："欢迎回来，${currentLevel.name}！今天想看看什么宠物？"`;
  }
}

export default MagicalMenagerieShop;
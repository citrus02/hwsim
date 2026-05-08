// knockturn-alley/shops/darkWeapons.js
// 黑暗武器店

import { BaseShop } from '../../hogsmeade/baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);

export const DarkWeaponsConfig = {
  id: "dark_weapons",
  name: "黑暗武器店",
  icon: "⚔️",
  description: "专门出售黑魔法武器和诅咒物品的店铺",
  owner: "铁匠",
  openYears: [2, 3, 4, 5, 6, 7],
  minLevel: 3,
  
  loyaltyLevels: [
    { level: 1, name: "访客", minPoints: 0, discount: 0, perks: ["基础武器浏览"] },
    { level: 2, name: "学徒", minPoints: 150, discount: 0.05, perks: ["5%折扣", "稀有武器优先"] },
    { level: 3, name: "战士", minPoints: 400, discount: 0.1, perks: ["10%折扣", "诅咒武器解锁", "免费打磨"] },
    { level: 4, name: "大师", minPoints: 800, discount: 0.15, perks: ["15%折扣", "定制武器", "专属铁匠"] },
    { level: 5, name: "暗影领主", minPoints: 1500, discount: 0.2, perks: ["20%折扣", "传奇武器", "秘密锻造"] },
  ],

  items: [
    {
      id: "cursed_blade",
      name: "诅咒之刃",
      icon: "🗡️",
      category: "武器",
      description: "带有死亡诅咒的匕首，会慢慢侵蚀使用者",
      basePrice: G(80),
      displayPrice: "80加隆",
      stock: 2, maxStock: 2,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "poison_dagger",
      name: "毒匕首",
      icon: "🔪",
      category: "武器",
      description: "涂有毒药的匕首",
      basePrice: G(30),
      displayPrice: "30加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "dark_sword",
      name: "黑暗之剑",
      icon: "⚔️",
      category: "武器",
      description: "用黑暗魔法锻造的剑",
      basePrice: G(100),
      displayPrice: "100加隆",
      stock: 3, maxStock: 3,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "throwing_knives",
      name: "投掷飞刀",
      icon: "🗡️",
      category: "武器",
      description: "锋利的投掷飞刀",
      basePrice: G(15),
      displayPrice: "15加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "whip_of_pain",
      name: "痛苦之鞭",
      icon: "🪢",
      category: "武器",
      description: "能带来极度痛苦的魔法鞭子",
      basePrice: G(45),
      displayPrice: "45加隆",
      stock: 4, maxStock: 4,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "shuriken",
      name: "忍者飞镖",
      icon: "⭐",
      category: "武器",
      description: "锋利的星形飞镖",
      basePrice: G(12),
      displayPrice: "12加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "dark_bow",
      name: "黑暗之弓",
      icon: "🏹",
      category: "武器",
      description: "能发射魔法箭矢的弓",
      basePrice: G(60),
      displayPrice: "60加隆",
      stock: 4, maxStock: 4,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "magic_arrows",
      name: "魔法箭矢",
      icon: "🏹",
      category: "武器",
      description: "带有魔法效果的箭矢",
      basePrice: G(10),
      displayPrice: "10加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "spiked_gauntlet",
      name: "尖刺护手",
      icon: "🤜",
      category: "防具",
      description: "带有尖刺的金属护手",
      basePrice: G(25),
      displayPrice: "25加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "dark_shield",
      name: "黑暗盾牌",
      icon: "🛡️",
      category: "防具",
      description: "能吸收魔法攻击的盾牌",
      basePrice: G(70),
      displayPrice: "70加隆",
      stock: 3, maxStock: 3,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "iron_mask",
      name: "铁面具",
      icon: "😷",
      category: "防具",
      description: "保护面部的铁面具",
      basePrice: G(18),
      displayPrice: "18加隆",
      stock: 12, maxStock: 12,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "assassin_cloak",
      name: "刺客斗篷",
      icon: "🧥",
      category: "防具",
      description: "帮助隐藏身形的斗篷",
      basePrice: G(50),
      displayPrice: "50加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "poison_ring",
      name: "毒戒指",
      icon: "💍",
      category: "饰品",
      description: "暗藏毒药的戒指",
      basePrice: G(22),
      displayPrice: "22加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "dagger_of_shadows",
      name: "暗影匕首",
      icon: "🗡️",
      category: "武器",
      description: "能融入阴影中的匕首",
      basePrice: G(55),
      displayPrice: "55加隆",
      stock: 3, maxStock: 3,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "flame_blade",
      name: "烈焰之刃",
      icon: "🔥",
      category: "武器",
      description: "能燃烧的魔法剑",
      basePrice: G(90),
      displayPrice: "90加隆",
      stock: 2, maxStock: 2,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "knife_sharpener",
      name: "磨刀石",
      icon: "🪨",
      category: "工具",
      description: "能让武器更锋利的魔法磨刀石",
      basePrice: G(8),
      displayPrice: "8加隆",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "weapon_oil",
      name: "武器保养油",
      icon: "🧴",
      category: "工具",
      description: "保养武器的特殊油",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "combat_gloves",
      name: "战斗手套",
      icon: "🧤",
      category: "防具",
      description: "增强握力的战斗手套",
      basePrice: G(10),
      displayPrice: "10加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "dark_armor",
      name: "黑暗盔甲",
      icon: "🛡️",
      category: "防具",
      description: "轻便但坚固的黑暗盔甲",
      basePrice: G(85),
      displayPrice: "85加隆",
      stock: 2, maxStock: 2,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "thunder_hammer",
      name: "雷霆之锤",
      icon: "⚡",
      category: "武器",
      description: "能释放闪电的魔法锤",
      basePrice: G(150),
      displayPrice: "150加隆",
      stock: 1, maxStock: 1,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
  ]
};

export class DarkWeaponsShop extends BaseShop {
  constructor() {
    super(DarkWeaponsConfig);
  }

  getWelcomeMessage(player) {
    const currentLevel = this.getCurrentLoyaltyLevel();
    return `铁匠："欢迎回来，${currentLevel.name}。需要点什么？锋利的？还是...更致命的？"`;
  }
}

export default DarkWeaponsShop;
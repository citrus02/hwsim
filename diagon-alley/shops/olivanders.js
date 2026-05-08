// diagon-alley/shops/olivanders.js
// 奥利凡德魔杖店

import { BaseShop } from '../../hogsmeade/baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);
const GSN = (g, s, n) => G(g) + S(s) + N(n);

export const OlivandersConfig = {
  id: "olivanders",
  name: "奥利凡德魔杖店",
  icon: "🪄",
  description: "「自公元前382年即制杖」，每根魔杖都在等待它的主人。奥利凡德先生提供专业的魔杖保养和配件服务",
  owner: "加里克·奥利凡德",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,
  
  loyaltyLevels: [
    { level: 1, name: "寻杖者", minPoints: 0, discount: 0, perks: ["基础魔杖保养"] },
    { level: 2, name: "新巫师", minPoints: 100, discount: 0.05, perks: ["5%折扣", "优先服务"] },
    { level: 3, name: "魔杖爱好者", minPoints: 300, discount: 0.1, perks: ["10%折扣", "稀有配件优先", "免费保养"] },
    { level: 4, name: "资深巫师", minPoints: 600, discount: 0.15, perks: ["15%折扣", "定制配件", "私人咨询"] },
    { level: 5, name: "传奇顾客", minPoints: 1000, discount: 0.2, perks: ["20%折扣", "专属魔杖师", "奥利凡德亲自接待"] },
  ],

  items: [
    {
      id: "wand_repair_kit",
      name: "魔杖修复工具包",
      icon: "🔧",
      category: "保养",
      description: "包含魔杖油、抛光布和修复咒卷轴，保持魔杖最佳状态",
      basePrice: GS(1, 5),
      displayPrice: "1加隆5西可",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "wand_oil_premium",
      name: "高级魔杖护理油",
      icon: "🧴",
      category: "保养",
      description: "奥利凡德秘制配方，深层滋养魔杖木质，增强魔力传导",
      basePrice: GS(2, 0),
      displayPrice: "2加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "wand_polish_cloth",
      name: "丝绸抛光布",
      icon: "🧣",
      category: "保养",
      description: "柔软的丝绸布料，专为擦拭魔杖表面而设计",
      basePrice: S(15),
      displayPrice: "15西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "wand_tuning_service",
      name: "魔杖调校服务",
      icon: "🔮",
      category: "服务",
      description: "奥利凡德先生亲自调校您的魔杖，优化咒语施放效果",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "wand_core_check",
      name: "杖芯检测",
      icon: "🔍",
      category: "服务",
      description: "专业检测魔杖芯的状态，确保魔力流动顺畅",
      basePrice: GS(2, 10),
      displayPrice: "2加隆10西可",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "wand_stand",
      name: "魔杖展示架",
      icon: "🏺",
      category: "配件",
      description: "优雅的木质魔杖架，可展示您的魔杖收藏",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "wand_pouch_leather",
      name: "真皮魔杖套",
      icon: "👝",
      category: "配件",
      description: "精致的真皮魔杖套，保护您的魔杖免受损坏",
      basePrice: GS(1, 0),
      displayPrice: "1加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "wand_pouch_silk",
      name: "丝绸魔杖袋",
      icon: "🎒",
      category: "配件",
      description: "柔软的丝绸魔杖袋，适合存放珍贵的魔杖",
      basePrice: GS(2, 10),
      displayPrice: "2加隆10西可",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "wand_grip_comfortable",
      name: "舒适握柄套",
      icon: "🖐️",
      category: "配件",
      description: "特制的魔杖握柄套，提供更好的握持感",
      basePrice: S(8),
      displayPrice: "8西可",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "wand_strengthen_charm",
      name: "魔杖强化符咒",
      icon: "✨",
      category: "符咒",
      description: "增强魔杖魔力输出的符咒，需由专业巫师施加",
      basePrice: G(8),
      displayPrice: "8加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "wand_focus_charm",
      name: "精准符咒",
      icon: "🎯",
      category: "符咒",
      description: "提升咒语精准度的符咒，减少施法失误",
      basePrice: G(6),
      displayPrice: "6加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "wand_protection_charm",
      name: "防护符咒",
      icon: "🛡️",
      category: "符咒",
      description: "保护魔杖免受恶意魔法影响的防护符咒",
      basePrice: G(4),
      displayPrice: "4加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "wand_wood_care",
      name: "木质保养套装",
      icon: "🪵",
      category: "保养",
      description: "专为不同木材魔杖设计的保养套装",
      basePrice: GS(3, 0),
      displayPrice: "3加隆",
      stock: 12, maxStock: 12,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "wand_storage_box",
      name: "魔杖收藏盒",
      icon: "📦",
      category: "配件",
      description: "精美的收藏盒，适合存放多根魔杖",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "wand_illumination_charm",
      name: "照明符咒",
      icon: "💡",
      category: "符咒",
      description: "在魔杖尖端添加永久照明功能的符咒",
      basePrice: GS(3, 15),
      displayPrice: "3加隆15西可",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "wand_custom_fitting",
      name: "定制握柄服务",
      icon: "✂️",
      category: "服务",
      description: "根据您的手型定制魔杖握柄",
      basePrice: G(7),
      displayPrice: "7加隆",
      stock: 3, maxStock: 3,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
  ]
};

export class OlivandersShop extends BaseShop {
  constructor() {
    super(OlivandersConfig);
  }

  getWelcomeMessage(player) {
    const currentLevel = this.getCurrentLoyaltyLevel();
    return `奥利凡德先生："欢迎回来，${currentLevel.name}。魔杖选择巫师，但巫师也需善待魔杖..."`;
  }
}

export default OlivandersShop;
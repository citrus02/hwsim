// diagon-alley/shops/flourishBlotts.js
// 丽痕书店

import { BaseShop } from '../../hogsmeade/baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);

export const FlourishBlottsConfig = {
  id: "flourish_blotts",
  name: "丽痕书店",
  icon: "📚",
  description: "对角巷最著名的魔法书店，从课本到珍本古籍应有尽有",
  owner: "弗洛里斯先生和布洛茨先生",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,
  
  loyaltyLevels: [
    { level: 1, name: "新读者", minPoints: 0, discount: 0, perks: ["基础书籍选购"] },
    { level: 2, name: "书虫", minPoints: 100, discount: 0.05, perks: ["5%折扣", "新书通知"] },
    { level: 3, name: "学者", minPoints: 300, discount: 0.1, perks: ["10%折扣", "限量版优先购买", "免费书签"] },
    { level: 4, name: "藏书家", minPoints: 600, discount: 0.15, perks: ["15%折扣", "稀有书籍解锁", "私人书架"] },
    { level: 5, name: "传奇读者", minPoints: 1000, discount: 0.2, perks: ["20%折扣", "签名版优先购买", "店主亲自推荐"] },
  ],

  items: [
    {
      id: "book_spellbook_1",
      name: "《标准咒语·初级》",
      icon: "📖",
      category: "教材",
      description: "霍格沃茨一年级必修课教材，收录基础符咒",
      basePrice: G(1),
      displayPrice: "1加隆",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_spellbook_2",
      name: "《标准咒语·二级》",
      icon: "📖",
      category: "教材",
      description: "霍格沃茨二年级符咒课教材",
      basePrice: G(1),
      displayPrice: "1加隆",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_spellbook_3",
      name: "《标准咒语·三级》",
      icon: "📖",
      category: "教材",
      description: "霍格沃茨三年级符咒课教材",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_spellbook_adv",
      name: "《标准咒语·进阶》",
      icon: "📖",
      category: "教材",
      description: "霍格沃茨高年级符咒课教材",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_potions",
      name: "《魔法药剂与药水》",
      icon: "📖",
      category: "教材",
      description: "霍格沃茨魔药课标准教材，阿森尼·吉格著",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_transfiguration",
      name: "《变形术入门》",
      icon: "📖",
      category: "教材",
      description: "霍格沃茨变形术课教材",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_history",
      name: "《魔法史》",
      icon: "📖",
      category: "教材",
      description: "霍格沃茨魔法史课教材，巴希达·巴沙特著",
      basePrice: G(1),
      displayPrice: "1加隆",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_herbology",
      name: "《神奇植物和它们的特性》",
      icon: "📖",
      category: "教材",
      description: "霍格沃茨草药课教材",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_defense",
      name: "《黑暗力量：自卫指南》",
      icon: "📖",
      category: "教材",
      description: "霍格沃茨黑魔法防御术课教材",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_astronomy",
      name: "《天文学入门》",
      icon: "📖",
      category: "教材",
      description: "霍格沃茨天文学课教材",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_divination",
      name: "《拨开迷雾看未来》",
      icon: "📖",
      category: "教材",
      description: "霍格沃茨占卜课教材",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_care_magical",
      name: "《保护神奇动物》",
      icon: "📖",
      category: "教材",
      description: "霍格沃茨保护神奇动物课教材",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_muggle_studies",
      name: "《麻瓜研究》",
      icon: "📖",
      category: "教材",
      description: "霍格沃茨麻瓜研究课教材",
      basePrice: G(1),
      displayPrice: "1加隆",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_fantastic",
      name: "《神奇动物在哪里》",
      icon: "📖",
      category: "课外读物",
      description: "纽特·斯卡曼德著，介绍85种神奇动物",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "book_tales",
      name: "《诗翁彼豆故事集》",
      icon: "📖",
      category: "课外读物",
      description: "包含《巫师与跳跳埚》等经典魔法童话",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_quidditch",
      name: "《魁地奇溯源》",
      icon: "📖",
      category: "课外读物",
      description: "介绍魁地奇运动的历史和规则",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_cookbook",
      name: "《魔法烹饪书》",
      icon: "📖",
      category: "课外读物",
      description: "各种魔法食物和甜点的制作方法",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_jinxes",
      name: "《千种神奇草药及蕈类》",
      icon: "📖",
      category: "课外读物",
      description: "菲利达·斯波尔著，草药学权威著作",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "book_curses",
      name: "《诅咒与反诅咒》",
      icon: "📖",
      category: "课外读物",
      description: "介绍各种诅咒及其破解方法",
      basePrice: G(4),
      displayPrice: "4加隆",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "book_advanced_potions",
      name: "《高级魔药制作》",
      icon: "📖",
      category: "进阶教材",
      description: "N.E.W.T.级别的魔药教材",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "book_advanced_transfig",
      name: "《高级变形术指南》",
      icon: "📖",
      category: "进阶教材",
      description: "N.E.W.T.级别变形术教材",
      basePrice: G(6),
      displayPrice: "6加隆",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "book_secret",
      name: "《霍格沃茨：一段校史》",
      icon: "📖",
      category: "稀有书籍",
      description: "介绍霍格沃茨历史的珍贵书籍",
      basePrice: G(10),
      displayPrice: "10加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "book_dark_arts",
      name: "《黑魔法的秘密》",
      icon: "📖",
      category: "禁书",
      description: "介绍黑魔法的禁书，仅供研究使用",
      basePrice: G(20),
      displayPrice: "20加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "book_dark_defense",
      name: "《抵御黑魔法的方法》",
      icon: "📖",
      category: "进阶教材",
      description: "深入探讨抵御黑魔法的高级技巧",
      basePrice: G(8),
      displayPrice: "8加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "book_occlumency",
      name: "《大脑封闭术入门》",
      icon: "📖",
      category: "进阶教材",
      description: "学习保护思想免受侵入",
      basePrice: G(7),
      displayPrice: "7加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "book_legilimency",
      name: "《摄神取念指南》",
      icon: "📖",
      category: "进阶教材",
      description: "学习读取他人思想的魔法",
      basePrice: G(7),
      displayPrice: "7加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "book_ancient_runes",
      name: "《古代魔文阅读》",
      icon: "📖",
      category: "进阶教材",
      description: "学习解读古代魔法文字",
      basePrice: G(6),
      displayPrice: "6加隆",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "rare"
    },
    {
      id: "book_alchemy",
      name: "《炼金术原理》",
      icon: "📖",
      category: "稀有书籍",
      description: "介绍炼金术的古老知识",
      basePrice: G(15),
      displayPrice: "15加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "book_magic_theory",
      name: "《魔法理论》",
      icon: "📖",
      category: "进阶教材",
      description: "深入探讨魔法的基本原理",
      basePrice: G(4),
      displayPrice: "4加隆",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_broomstick",
      name: "《飞天扫帚保养与维修》",
      icon: "📖",
      category: "课外读物",
      description: "保养飞天扫帚的实用指南",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_famous_wizards",
      name: "《著名巫师名录》",
      icon: "📖",
      category: "课外读物",
      description: "介绍历史上著名巫师的生平",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_dragon_breeding",
      name: "《养龙指南》",
      icon: "📖",
      category: "稀有书籍",
      description: "关于龙类饲养的专业书籍",
      basePrice: G(12),
      displayPrice: "12加隆",
      stock: 6, maxStock: 6,
      buyable: true, sellable: false,
      rarity: "legendary"
    },
    {
      id: "book_mark",
      name: "《预言家日报》订阅",
      icon: "📰",
      category: "订阅",
      description: "订阅一年的《预言家日报》",
      basePrice: G(5),
      displayPrice: "5加隆/年",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_practical_magic",
      name: "《实用魔法小窍门》",
      icon: "📖",
      category: "课外读物",
      description: "日常生活中的实用魔法技巧",
      basePrice: G(1),
      displayPrice: "1加隆",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "stationery_quill",
      name: "羽毛笔套装",
      icon: "✒️",
      category: "文具",
      description: "高品质猫头鹰羽毛笔和墨水套装",
      basePrice: GS(1, 5),
      displayPrice: "1加隆5西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "stationery_parchment",
      name: "羊皮纸",
      icon: "📜",
      category: "文具",
      description: "高品质魔法羊皮纸，适合书写咒语",
      basePrice: S(10),
      displayPrice: "10西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "stationery_wax",
      name: "封印蜡",
      icon: "🕯️",
      category: "文具",
      description: "用于信件封印的魔法蜡",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_maps",
      name: "《魔法世界地图集》",
      icon: "🗺️",
      category: "地图",
      description: "标注各种魔法地点的地图集",
      basePrice: G(4),
      displayPrice: "4加隆",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_hogwarts_map",
      name: "霍格沃茨城堡地图",
      icon: "🗺️",
      category: "地图",
      description: "霍格沃茨城堡的详细平面图",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      rarity: "common"
    },
    {
      id: "book_diary",
      name: "魔法日记本",
      icon: "📔",
      category: "文具",
      description: "带魔法锁的日记本，保护隐私",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      rarity: "common"
    },
  ]
};

export class FlourishBlottsShop extends BaseShop {
  constructor() {
    super(FlourishBlottsConfig);
  }

  getWelcomeMessage(player) {
    const currentLevel = this.getCurrentLoyaltyLevel();
    return `店员说：欢迎回来，${currentLevel.name}！今天想看看什么书？`;
  }
}

export default FlourishBlottsShop;

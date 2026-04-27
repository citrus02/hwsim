// hogsmeade/shops/devisesAndBangs.js
// 德维斯与班斯商店 · 丰富版
//
// 原著汇率：1加隆 = 17西可 = 493纳特
// 价格单位统一用「纳特」存储，显示时转换
// 参考原著购买力：
//   魔杖约7加隆（3451纳特）
//   《标准咒语·初级》约5加隆
//   羽毛笔约2~5西可（58~145纳特）
//   一瓶墨水约3西可（87纳特）
//   坩埚约15加隆（普通锡镴）~21加隆（自动搅拌）
//   黄铜天平约5加隆
//   水晶瓶套装约5加隆

import { BaseShop } from '../baseShop.js';

// shop-bridge.js 已挂到 window
const { updateShopStats } = window;

// 换算工具
const G = (g) => g * 493;           // 加隆→纳特
const S = (s) => s * 29;            // 西可→纳特
const N = (n) => n;                  // 纳特
const GS = (g, s) => G(g) + S(s);   // 加隆+西可→纳特

export const DevisesAndBangsConfig = {
  id: "devises_and_bangs",
  name: "德维斯与班斯商店",
  icon: "🛒",
  description: "学生必备文具、魔法材料与日常用品（限时解锁）",
  owner: "德维斯与班斯先生",
  openYears: [1,2,3,4,5,6,7],
  minLevel: 1,

  items: [

    // ── 书写用品 ───────────────────────────────────────────
    {
      id: "standard_quill",
      name: "标准羽毛笔",
      icon: "✒️",
      category: "书写用品",
      description: "适合日常书写的标准鹅毛羽毛笔，手感顺滑",
      basePrice: S(2),        // 2西可
      displayPrice: "2西可",
      stock: 999, maxStock: 999,
      buyable: true, sellable: false,
    },
    {
      id: "eagle_quill",
      name: "鹰羽笔",
      icon: "🪶",
      category: "书写用品",
      description: "书写流畅，适合长篇魔法论文，是考试季的热销品",
      basePrice: S(5),        // 5西可
      displayPrice: "5西可",
      stock: 200, maxStock: 200,
      buyable: true, sellable: false,
    },
    {
      id: "self_inking_quill",
      name: "自墨羽毛笔",
      icon: "🖋️",
      category: "书写用品",
      description: "内置永久墨水储量，无需墨水瓶，考试必备",
      basePrice: GS(1, 5),    // 1加隆5西可
      displayPrice: "1加隆5西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
    },
    {
      id: "quick_quotes_quill",
      name: "速记羽毛笔",
      icon: "📝",
      category: "书写用品",
      description: "能自动速记讲话内容，偶有夸大之词，仅供娱乐",
      basePrice: G(5),        // 5加隆
      displayPrice: "5加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
    },
    {
      id: "parchment_roll",
      name: "羊皮纸卷（5张）",
      icon: "📜",
      category: "书写用品",
      description: "标准尺寸羊皮纸，作业、论文必备",
      basePrice: S(3),        // 3西可
      displayPrice: "3西可",
      stock: 500, maxStock: 500,
      buyable: true, sellable: false,
    },
    {
      id: "parchment_deluxe",
      name: "优质羊皮纸卷（10张）",
      icon: "📋",
      category: "书写用品",
      description: "质地细腻，墨水不易晕染，适合重要场合",
      basePrice: S(8),        // 8西可
      displayPrice: "8西可",
      stock: 200, maxStock: 200,
      buyable: true, sellable: false,
    },
    {
      id: "ink_black",
      name: "黑色墨水瓶",
      icon: "🫙",
      category: "书写用品",
      description: "标准黑色魔法墨水，一瓶可用约两个月",
      basePrice: S(3),        // 3西可
      displayPrice: "3西可",
      stock: 200, maxStock: 200,
      buyable: true, sellable: false,
    },
    {
      id: "ink_red",
      name: "红色墨水瓶",
      icon: "🔴",
      category: "书写用品",
      description: "鲜红色墨水，批注作业时常用",
      basePrice: S(4),        // 4西可
      displayPrice: "4西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
    },
    {
      id: "ink_invisible",
      name: "隐形墨水瓶",
      icon: "👻",
      category: "书写用品",
      description: "书写后墨迹消失，需特定咒语显现，秘密通讯专用",
      basePrice: GS(1, 0),    // 1加隆
      displayPrice: "1加隆",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
    },

    // ── 教材书籍 ───────────────────────────────────────────
    {
      id: "standard_spells_grade1",
      name: "《标准咒语·初级》",
      icon: "📘",
      category: "教材",
      description: "一年级魔咒课指定教材，米兰达·戈谢克著",
      basePrice: GS(2, 0),    // 2加隆
      displayPrice: "2加隆",
      stock: 30, maxStock: 30,
      buyable: true, sellable: true, sellPrice: S(10),
    },
    {
      id: "magical_draft_potions",
      name: "《魔法药剂与药水》",
      icon: "🧪",
      category: "教材",
      description: "阿德伯特·沃夫利著，魔药课经典教材",
      basePrice: GS(3, 0),    // 3加隆
      displayPrice: "3加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: true, sellPrice: S(12),
    },
    {
      id: "dark_forces_guide",
      name: "《黑暗力量·自卫指南》",
      icon: "📕",
      category: "教材",
      description: "昆汀·特林博著，黑魔法防御术权威参考书",
      basePrice: GS(4, 0),    // 4加隆
      displayPrice: "4加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: true, sellPrice: S(15),
    },
    {
      id: "fantastic_beasts",
      name: "《神奇动物在哪里》",
      icon: "🦄",
      category: "教材",
      description: "纽特·斯卡曼德著，神奇动物保护课必备",
      basePrice: GS(3, 5),    // 3加隆5西可
      displayPrice: "3加隆5西可",
      stock: 20, maxStock: 20,
      buyable: true, sellable: true, sellPrice: S(10),
    },
    {
      id: "one_thousand_magical_herbs",
      name: "《一千种神奇草药与真菌》",
      icon: "🌿",
      category: "教材",
      description: "费利西蒂·亚布奥尔著，草药学指定教材",
      basePrice: GS(2, 8),    // 2加隆8西可
      displayPrice: "2加隆8西可",
      stock: 25, maxStock: 25,
      buyable: true, sellable: true, sellPrice: S(8),
    },
    {
      id: "history_of_magic_book",
      name: "《魔法史》",
      icon: "📖",
      category: "教材",
      description: "巴蒂勒斯·巴格肖特著，魔法史课基本教材",
      basePrice: GS(2, 5),    // 2加隆5西可
      displayPrice: "2加隆5西可",
      stock: 25, maxStock: 25,
      buyable: true, sellable: true, sellPrice: S(8),
    },
    {
      id: "numerology_grammatica",
      name: "《算术占卜文法》",
      icon: "🔢",
      category: "教材",
      description: "算术占卜课参考书，数字命理入门",
      basePrice: GS(3, 0),    // 3加隆
      displayPrice: "3加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: true, sellPrice: S(10),
    },

    // ── 魔药材料 ───────────────────────────────────────────
    {
      id: "basic_herb_set",
      name: "基础药草套装",
      icon: "🌱",
      category: "魔药材料",
      description: "干荨麻×2、薄荷×2、蒲公英×2，适合初级魔药课",
      basePrice: GS(1, 5),    // 1加隆5西可
      displayPrice: "1加隆5西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      packageItems: [
        { name: "干荨麻", count: 2 },
        { name: "薄荷", count: 2 },
        { name: "蒲公英", count: 2 },
      ]
    },
    {
      id: "dried_nettles",
      name: "干荨麻（3份）",
      icon: "🌾",
      category: "魔药材料",
      description: "多种初级魔药的基础材料",
      basePrice: S(5),        // 5西可
      displayPrice: "5西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: true, sellPrice: N(20),
    },
    {
      id: "snake_fangs",
      name: "蛇牙（5颗）",
      icon: "🐍",
      category: "魔药材料",
      description: "数种魔药的关键成分，小心处理",
      basePrice: S(12),       // 12西可
      displayPrice: "12西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: true, sellPrice: S(8),
    },
    {
      id: "horned_slugs",
      name: "有角蛞蝓（10只）",
      icon: "🐌",
      category: "魔药材料",
      description: "魔药材料，有时替代部分昆虫原料",
      basePrice: S(8),        // 8西可
      displayPrice: "8西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: true, sellPrice: S(5),
    },
    {
      id: "porcupine_quills",
      name: "刺猬刺（12根）",
      icon: "🦔",
      category: "魔药材料",
      description: "魔药原料，须在离火后加入",
      basePrice: S(10),       // 10西可
      displayPrice: "10西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: true, sellPrice: S(6),
    },
    {
      id: "bezoar",
      name: "牛黄石",
      icon: "💎",
      category: "魔药材料",
      description: "山羊胃中取出的结石，可解大多数毒药，极为珍贵",
      basePrice: GS(5, 0),    // 5加隆
      displayPrice: "5加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: true, sellPrice: G(3),
    },
    {
      id: "lacewing_flies",
      name: "草蛉（21天腌制，1份）",
      icon: "🦗",
      category: "魔药材料",
      description: "波利汁液的关键成分之一，需提前腌制",
      basePrice: GS(1, 8),    // 1加隆8西可
      displayPrice: "1加隆8西可",
      stock: 20, maxStock: 20,
      buyable: true, sellable: true, sellPrice: G(1),
    },
    {
      id: "fluxweed",
      name: "助变草（满月采摘）",
      icon: "🌕",
      category: "魔药材料",
      description: "需在满月时采摘，波利汁液原料之一",
      basePrice: GS(2, 0),    // 2加隆
      displayPrice: "2加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: true, sellPrice: GS(1, 5),
    },

    // ── 魔法工具 ───────────────────────────────────────────
    {
      id: "small_cauldron_pewter",
      name: "标准锡镴坩埚（2号）",
      icon: "⚱️",
      category: "魔法工具",
      description: "一年级指定坩埚，耐高温，适合大多数初级魔药",
      basePrice: G(15),       // 15加隆
      displayPrice: "15加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: true, sellPrice: G(8),
    },
    {
      id: "cauldron_copper",
      name: "铜制坩埚（自动搅拌）",
      icon: "🪣",
      category: "魔法工具",
      description: "内置搅拌咒，可按需调速，省力实用",
      basePrice: G(21),       // 21加隆
      displayPrice: "21加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: true, sellPrice: G(12),
    },
    {
      id: "brass_scales",
      name: "黄铜天平",
      icon: "⚖️",
      category: "魔法工具",
      description: "魔药精确称量工具，精度可达0.01克",
      basePrice: GS(5, 0),    // 5加隆
      displayPrice: "5加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: true, sellPrice: GS(2, 10),
    },
    {
      id: "crystal_phial_set",
      name: "水晶瓶套装（5个）",
      icon: "🔮",
      category: "魔法工具",
      description: "透明水晶容器，适合储存完成的魔药，不起化学反应",
      basePrice: GS(5, 0),    // 5加隆
      displayPrice: "5加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
    },
    {
      id: "telescope_standard",
      name: "标准望远镜",
      icon: "🔭",
      category: "魔法工具",
      description: "天文学课指定器材，可观测至冥王星",
      basePrice: GS(7, 0),    // 7加隆
      displayPrice: "7加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: true, sellPrice: G(4),
    },
    {
      id: "crystal_ball",
      name: "水晶球",
      icon: "🪄",
      category: "魔法工具",
      description: "占卜学课用，据说优质水晶球能真正映现未来",
      basePrice: G(10),       // 10加隆
      displayPrice: "10加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: true, sellPrice: G(6),
    },
    {
      id: "magic_compass",
      name: "魔法罗盘",
      icon: "🧭",
      category: "魔法工具",
      description: "可感应附近的魔法痕迹，探索必备",
      basePrice: GS(3, 8),    // 3加隆8西可
      displayPrice: "3加隆8西可",
      stock: 12, maxStock: 12,
      buyable: true, sellable: true, sellPrice: GS(2, 0),
    },

    // ── 日常用品 ───────────────────────────────────────────
    {
      id: "dragon_hide_gloves",
      name: "龙皮手套",
      icon: "🧤",
      category: "日常用品",
      description: "处理危险魔法材料时必备，耐高温耐腐蚀",
      basePrice: GS(2, 5),    // 2加隆5西可
      displayPrice: "2加隆5西可",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
    },
    {
      id: "protective_goggles",
      name: "防护目镜",
      icon: "🥽",
      category: "日常用品",
      description: "魔药课标准安全装备，防飞溅",
      basePrice: GS(1, 5),    // 1加隆5西可
      displayPrice: "1加隆5西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
    },
    {
      id: "spellotape",
      name: "咒语胶带（一卷）",
      icon: "📎",
      category: "日常用品",
      description: "魔法世界常用修复胶带，粘合力是普通胶带10倍",
      basePrice: S(7),        // 7西可
      displayPrice: "7西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
    },
    {
      id: "owl_treats",
      name: "猫头鹰零食（一袋）",
      icon: "🦉",
      category: "日常用品",
      description: "提高猫头鹰送信速度与配合度，内含小鱼干",
      basePrice: S(9),        // 9西可
      displayPrice: "9西可",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
    },
    {
      id: "self_stirring_spoon",
      name: "自动搅拌匙",
      icon: "🥄",
      category: "日常用品",
      description: "课堂小帮手，搅拌方向与速度可咒语控制",
      basePrice: GS(1, 0),    // 1加隆
      displayPrice: "1加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
    },
    {
      id: "spell_sealing_wax",
      name: "魔法封印蜡（红色）",
      icon: "🔴",
      category: "日常用品",
      description: "魔法信件专用封印蜡，内含验证真伪的魔咒",
      basePrice: S(6),        // 6西可
      displayPrice: "6西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
    },

    // ── 备考用品（考试季专区）─────────────────────────────
    {
      id: "revision_spellbook",
      name: "《魔咒速记手册》",
      icon: "📓",
      category: "备考用品",
      description: "涵盖一到三年级全部魔咒要点，考前必背",
      basePrice: GS(2, 0),    // 2加隆
      displayPrice: "2加隆",
      stock: 40, maxStock: 40,
      buyable: true, sellable: true, sellPrice: S(8),
    },
    {
      id: "memory_potion_notes",
      name: "《记忆强化魔药笔记》",
      icon: "🧠",
      category: "备考用品",
      description: "临考前服用的弱效记忆强化药水配方与笔记合集",
      basePrice: GS(1, 8),    // 1加隆8西可
      displayPrice: "1加隆8西可",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
    },
    {
      id: "exam_kit",
      name: "考试套装",
      icon: "🎒",
      category: "备考用品",
      description: "含自墨笔×2、优质羊皮纸×10、备用墨水×1",
      basePrice: GS(3, 5),    // 3加隆5西可
      displayPrice: "3加隆5西可",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      packageItems: [
        { name: "自墨羽毛笔", count: 2 },
        { name: "优质羊皮纸卷（10张）", count: 1 },
        { name: "黑色墨水瓶", count: 1 },
      ]
    },
  ],

  // 收购价目表（单位：纳特）
  buybackItems: {
    "干荨麻":     N(20),
    "薄荷":       N(20),
    "蒲公英":     N(15),
    "蛇牙":       S(8),
    "有角蛞蝓":   S(5),
    "刺猬刺":     S(6),
    "草蛉":       G(1),
    "助变草":     GS(1,5),
    "牛黄石":     G(3),
    "露水":       N(50),
    "花蜜":       N(80),
  },

  specialFeature: {
    name: "学生折扣",
    description: "本学期课程成绩优秀（E以上）可享9.5折",
    getStudentDiscount(player) {
      return 0.95;
    }
  }
};

export class DevisesAndBangs extends BaseShop {
  constructor() {
    super(DevisesAndBangsConfig);
  }

  buyItem(itemId, quantity, player) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return { success: false, message: "商品不存在" };

    if (item.packageItems) {
      const unitPrice = this.getItemPrice(item, player);
      const totalPrice = unitPrice * quantity;

      // 用 currency 系统检查余额
      const totalKnutsOwned = window.currency?.getTotalKnuts?.() ?? 0;
      if (totalKnutsOwned < totalPrice) {
        const g = Math.floor(totalPrice / 493);
        const rem = totalPrice % 493;
        const s = Math.floor(rem / 29);
        const n = rem % 29;
        return { success: false, message: `金币不足，需要 ${g>0?g+"加隆 ":""}${s>0?s+"西可 ":""}${n>0?n+"纳特":""}` };
      }

      // 扣钱
      const g = Math.floor(totalPrice / 493);
      const rem = totalPrice % 493;
      const s = Math.floor(rem / 29);
      const n = rem % 29;
      window.currency?.spendMoney?.(g, s, n, `在德维斯与班斯购买 ${item.name}×${quantity}`);

      // 扣库存
      if (item.stock) item.stock -= quantity;

      // 加忠诚度
      this.loyaltyPoints += Math.floor(totalPrice / 10);

      // 记录统计
      if (typeof updateShopStats === 'function') {
        updateShopStats(this.id, totalPrice, 'spent');
      }

      // 添加材料到背包（带 icon）
      for (let i = 0; i < quantity; i++) {
        for (const pkg of item.packageItems) {
          const matchedItem = this.items.find(it => it.name === pkg.name);
          if (window.window.addItemToBag) {
            window.window.addItemToBag("material", { 
              name: pkg.name, 
              count: pkg.count,
              icon: matchedItem?.icon || "📦"
            });
          }
        }
      }

      if (window.doStudyLog) {
        window.doStudyLog(`🛒 ${item.name}×${quantity} — ${item.displayPrice || totalPrice + "纳特"}`);
      }

      return { 
        success: true, 
        message: `成功购买 ${item.name}×${quantity}，花费 ${item.displayPrice || totalPrice + "纳特"}`,
        totalPrice 
      };
    }

    // 普通物品走基类逻辑
    return super.buyItem(itemId, quantity, player);
  }
}
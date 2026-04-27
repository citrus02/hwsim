// hogsmeade/shops/gladragsWizardwear.js
// 风雅氏巫师服装店 · 丰富版
//
// 原著汇率：1加隆 = 17西可 = 493纳特
// 价格单位统一用「纳特」存储，显示时转换
// 参考原著购买力：
//   二手袍子约1~3加隆（《密室》哈利在翻倒巷所见）
//   龙皮手套约2~3加隆
//   龙皮靴约5~8加隆
//   隐形衣（非圣器级）约80~120加隆（《凤凰社》穆迪评价）
//   赫奇帕奇金杯级礼服约10~20加隆
//   日常巫师袍约2~5加隆（成衣）
//   定制礼服约10~30加隆
//   围巾/手套约3~10西可
//   袜子约1~2西可
//   二手课本约1~3加隆（翻倒巷，但风雅氏也收售二手）

import { BaseShop } from '../baseShop.js';

// 换算工具
const G = (g) => g * 493;           // 加隆→纳特
const S = (s) => s * 29;            // 西可→纳特
const N = (n) => n;                  // 纳特
const GS = (g, s) => G(g) + S(s);   // 加隆+西可→纳特

export const GladragsWizardwearConfig = {
  id: "gladrags",
  name: "风雅氏巫师服装店",
  icon: "👔",
  description: "伦敦及霍格莫德均有分店的高级巫师服饰店，兼售魔法饰品与二手好物",
  owner: "风雅氏夫人",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,

  items: [

    // ── 巫师袍（日常与正式）─────────────────────────────────
    {
      id: "standard_robe_plain",
      name: "素面巫师袍",
      icon: "👘",
      category: "巫师袍",
      description: "纯色日常巫师袍，耐洗耐磨，适合课堂与日常穿着。可按学院染相应内衬色",
      basePrice: GS(2, 5),        // 2加隆5西可
      displayPrice: "2加隆5西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: true, sellPrice: G(1),
    },
    {
      id: "standard_robe_embroidered",
      name: "刺绣校袍",
      icon: "🪡",
      category: "巫师袍",
      description: "袖口与领口绣有学院标志，面料较素面袍更厚实，冬季首选",
      basePrice: G(4),            // 4加隆
      displayPrice: "4加隆",
      stock: 40, maxStock: 40,
      buyable: true, sellable: true, sellPrice: G(2),
    },
    {
      id: "dress_robe_classic",
      name: "经典礼服袍",
      icon: "🎩",
      category: "礼服袍",
      description: "正式场合（圣诞舞会、颁奖典礼）标准礼服，黑色天鹅绒面料，袖口有暗纹",
      basePrice: G(12),           // 12加隆
      displayPrice: "12加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: true, sellPrice: G(6),
      minYear: 3,                 // 三年级起才可能需要舞会礼服
    },
    {
      id: "dress_robe_premium",
      name: "手工定制礼服袍",
      icon: "✨",
      category: "礼服袍",
      description: "风雅氏夫人亲手量体裁剪，面料来自法国魔法工坊，可选任意配色与刺绣纹样",
      basePrice: G(25),           // 25加隆
      displayPrice: "25加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: true, sellPrice: G(12),
      minYear: 4,
    },
    {
      id: "travel_cloak",
      name: "旅行斗篷",
      icon: "🧥",
      category: "外套",
      description: "防水防风的深色羊毛斗篷，内衬有温暖咒，霍格莫德周末出行必备",
      basePrice: GS(3, 8),        // 3加隆8西可
      displayPrice: "3加隆8西可",
      stock: 35, maxStock: 35,
      buyable: true, sellable: true, sellPrice: GS(1, 10),
    },
    {
      id: "winter_cloak_fur",
      name: "厚毛斗篷",
      icon: "🧣",
      category: "外套",
      description: "内衬山羊毛皮，适合苏格兰严寒冬季，附带自动扣合咒",
      basePrice: G(7),            // 7加隆
      displayPrice: "7加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: true, sellPrice: G(3),
    },

    // ── 帽子与头饰 ──────────────────────────────────────────
    {
      id: "pointed_hat_standard",
      name: "标准尖顶帽",
      icon: "🎓",
      category: "帽子",
      description: "霍格沃茨新生的第一顶尖顶帽，黑色毡制，无额外魔法",
      basePrice: S(10),           // 10西可
      displayPrice: "10西可",
      stock: 80, maxStock: 80,
      buyable: true, sellable: true, sellPrice: S(5),
    },
    {
      id: "pointed_hat_enchanted",
      name: "附魔尖顶帽",
      icon: "🧙‍♂️",
      category: "帽子",
      description: "内置防雨咒与轻微扩音咒，适合户外集会时使用，帽檐可调角度",
      basePrice: GS(1, 12),       // 1加隆12西可
      displayPrice: "1加隆12西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: true, sellPrice: S(10),
    },
    {
      id: "headscarf_house",
      name: "学院色头巾",
      icon: "🧕",
      category: "帽子",
      description: "柔和棉质，可包住耳朵，冬季魁地奇观赛保暖优选，四学院色可选",
      basePrice: S(6),            // 6西可
      displayPrice: "6西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
    },

    // ── 手套与鞋履 ──────────────────────────────────────────
    {
      id: "dragon_hide_gloves",
      name: "龙皮手套",
      icon: "🧤",
      category: "手套",
      description: "龙皮制成，耐高温耐腐蚀，处理魔药材料及照料危险生物时的标准装备",
      basePrice: GS(2, 5),        // 2加隆5西可（约等于德维斯与班斯的定价）
      displayPrice: "2加隆5西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: true, sellPrice: G(1),
    },
    {
      id: "dragon_hide_boots",
      name: "龙皮靴",
      icon: "🥾",
      category: "鞋履",
      description: "全龙皮打造，鞋底有防滑咒，禁林探险与神奇生物课的理想选择",
      basePrice: G(6),            // 6加隆
      displayPrice: "6加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: true, sellPrice: G(3),
      minYear: 3,
    },
    {
      id: "enchanted_loafers",
      name: "自动擦鞋便鞋",
      icon: "👞",
      category: "鞋履",
      description: "每走一步自动除尘抛光，懒人福音。配标准黑色鞋带",
      basePrice: GS(4, 0),        // 4加隆
      displayPrice: "4加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: true, sellPrice: GS(1, 15),
    },

    // ── 围巾、袜子与配件 ──────────────────────────────────
    {
      id: "house_scarf",
      name: "学院围巾",
      icon: "🧣",
      category: "配件",
      description: "粗毛线编织，学院条纹配色，可自动调节松紧，魁地奇观众席上最常见",
      basePrice: S(10),           // 10西可
      displayPrice: "10西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: true, sellPrice: S(5),
    },
    {
      id: "warming_socks",
      name: "保暖袜（3双装）",
      icon: "🧦",
      category: "配件",
      description: "脚趾处有微型温暖咒，邓布利多也承认袜子是圣诞节最被低估的礼物",
      basePrice: S(4),            // 4西可
      displayPrice: "4西可",
      stock: 120, maxStock: 120,
      buyable: true, sellable: false,
    },
    {
      id: "bow_tie_self_tying",
      name: "自动打结领结",
      icon: "🎀",
      category: "配件",
      description: "碰一下自动结成完美蝴蝶结，再碰解开。约会是救场利器",
      basePrice: GS(1, 5),        // 1加隆5西可
      displayPrice: "1加隆5西可",
      stock: 25, maxStock: 25,
      buyable: true, sellable: true, sellPrice: S(8),
      minYear: 3,
    },

    // ── 魔法饰品 ────────────────────────────────────────────
    {
      id: "brooch_protection",
      name: "护身符胸针",
      icon: "📌",
      category: "饰品",
      description: "镶嵌一枚小紫水晶，据说可挡微弱恶咒（实际效果存疑，但确实好看）",
      basePrice: GS(3, 0),        // 3加隆
      displayPrice: "3加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: true, sellPrice: GS(1, 5),
      minYear: 2,
    },
    {
      id: "locket_memory",
      name: "记忆挂坠盒",
      icon: "📿",
      category: "饰品",
      description: "可储存一段约30秒的魔法影像或声音，类似微型冥想盆效果，送给恋人或家人的纪念品",
      basePrice: G(8),            // 8加隆
      displayPrice: "8加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: true, sellPrice: G(4),
      minYear: 4,
    },
    {
      id: "cufflinks_house",
      name: "学院袖扣",
      icon: "🔘",
      category: "饰品",
      description: "银质底托，珐琅学院徽章，正式场合佩戴，提升气质",
      basePrice: GS(2, 5),        // 2加隆5西可
      displayPrice: "2加隆5西可",
      stock: 25, maxStock: 25,
      buyable: true, sellable: true, sellPrice: G(1),
      minYear: 3,
    },

    // ── 二手专区 ────────────────────────────────────────────
    {
      id: "secondhand_robe",
      name: "二手巫师袍",
      icon: "♻️",
      category: "二手专区",
      description: "前一位主人留下的旧袍子，已清洗并修补完好，略微褪色但完全可用",
      basePrice: G(1),            // 1加隆
      displayPrice: "1加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: true, sellPrice: S(10),
    },
    {
      id: "secondhand_textbook_bundle",
      name: "二手课本套装（3本随机）",
      icon: "📚",
      category: "二手专区",
      description: "风雅氏夫人精选品相良好的二手教材套装，未必是最新版本但内容无误",
      basePrice: GS(2, 5),        // 2加隆5西可
      displayPrice: "2加隆5西可",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
    },

    // ── 特殊物品 ────────────────────────────────────────────
    {
      id: "invisibility_cloak_knockoff",
      name: "仿制隐形衣",
      icon: "👻",
      category: "特殊物品",
      description: "非真正隐形衣，用幻身咒编织而成，随时间效力衰退（约1年），可让穿戴者变得半透明",
      basePrice: G(90),           // 90加隆（真正圣器级隐形衣按穆迪所言价值连城，仿制品也极贵）
      displayPrice: "90加隆",
      stock: 1, maxStock: 1,
      buyable: true, sellable: false,
      minYear: 6,
    },
    {
      id: "mokeskin_pouch",
      name: "猫狸子皮袋",
      icon: "👜",
      category: "特殊物品",
      description: "极小皮袋，只有主人能取出其中物品，小偷无法打开。海格曾送给哈利一个",
      basePrice: G(10),           // 10加隆
      displayPrice: "10加隆",
      stock: 3, maxStock: 3,
      buyable: true, sellable: false,
      minYear: 3,
    },
  ],

  // 收购价目表（单位：纳特）
  buybackItems: {
    "巫师袍":        G(1),
    "龙皮手套":      G(1),
    "学院围巾":      S(5),
    "尖顶帽":        S(5),
    "旧校袍":        S(10),
    "二手课本":      S(8),
    "破损斗篷":      N(50),
    "羽毛":          N(10),
  },

  specialFeature: {
    name: "学生量体日",
    description: "每学期初两天，风雅氏夫人亲自为新生量体推荐合身校袍，享9折迎新价",
    getStudentDiscount(player) {
      // 新生（一年级）享受迎新折扣
      if (player && player.year === 1) return 0.9;
      return 1.0;
    }
  }
};

export class GladragsWizardwear extends BaseShop {
  constructor() {
    super(GladragsWizardwearConfig);
  }

  // 风雅氏商店特有的物品购买逻辑（如二手物品随机化）
  buyItem(itemId, quantity, player) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return { success: false, message: "商品不存在" };

    // 二手课本套装是随机物品包
    if (item.id === "secondhand_textbook_bundle") {
      const textbookPool = [
        { name: "《标准咒语·初级》", icon: "📘" },
        { name: "《魔法史》", icon: "📖" },
        { name: "《神奇动物在哪里》", icon: "🦄" },
        { name: "《魔法药剂与药水》", icon: "🧪" },
        { name: "《一千种神奇草药与真菌》", icon: "🌿" },
        { name: "《黑暗力量·自卫指南》", icon: "📕" },
      ];
      // 随机选3本不重复
      const shuffled = textbookPool.sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, 3);

      const unitPrice = this.getItemPrice(item, player);
      const totalPrice = unitPrice * quantity;

      if (player.galleons * 493 < totalPrice * quantity) {
        return { success: false, message: "加隆不足" };
      }

      if (window.currency?.spendMoney) {
        const g = Math.floor(totalPrice / 493);
        const rem = totalPrice - g * 493;
        const s = Math.floor(rem / 29);
        const n = rem % 29;
        window.currency.spendMoney(g, s, n, `在风雅氏购买 ${item.name}×${quantity}`);
      }

      for (let i = 0; i < quantity; i++) {
        for (const book of selected) {
          if (window.addItemToBag) {
            window.addItemToBag("book", {
              name: book.name,
              count: book.count,
              icon: book.icon    // ✅ 把 emoji 一起传进去
            });
          }
        }
      }

      if (window.doStudyLog) {
        const names = selected.map(b => b.name).join("、");
        window.doStudyLog(`🛒 ${item.name} — 获得：${names}`);
      }
      return {
        success: true,
        message: `成功购买 ${item.name}，获得：${selected.map(b => b.name).join("、")}`,
        totalPrice
      };
    }

    // 其余物品走基类逻辑
    return super.buyItem(itemId, quantity, player);
  }
}
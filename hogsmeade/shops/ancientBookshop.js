// hogsmeade/shops/ancientBookshop.js
// 霍格莫德古卷二手书铺 · 丰富版
//
// 原著汇率：1加隆 = 17西可 = 493纳特
// 价格单位统一用「纳特」存储，显示时转换
// 参考原著购买力：
//   二手课本约1~3加隆（《密室》翻倒巷所见）
//   新课本约2~5加隆一本
//   珍贵古籍约10~50加隆
//   魔法理论专著约3~8加隆
//   通俗魔法读物约1~3加隆
//   旧杂志约5~15西可
//   二手羊皮纸约1~3西可/张
//   咒语字帖约3~8西可

import { BaseShop } from '../baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);

export const AncientBookshopConfig = {
  id: "ancient_bookshop",
  name: "霍格莫德古卷二手书铺",
  icon: "📚",
  description: "蜷缩在霍格莫德主街角落的旧书店，橱窗上永远蒙着一层因年代久远而微微泛黄的魔法灰尘。从古籍善本到过期的《预言家日报》都能找到——只要你耐心翻",
  owner: "谢里达·莫克奇",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,

  items: [

    // ── 二手教材 ────────────────────────────────────────────
    {
      id: "used_standard_spells",
      name: "二手《标准咒语·初级》",
      icon: "📘",
      category: "二手教材",
      description: "前任主人在页边写满了小抄——有些咒语的发音提示比原书还实用。封面略磨损，但内页完好",
      basePrice: GS(1, 5),
      displayPrice: "1加隆5西可",
      stock: 8, maxStock: 8,
      buyable: true, sellable: true, sellPrice: S(10),
    },
    {
      id: "used_potions_book",
      name: "二手《魔法药剂与药水》",
      icon: "🧪",
      category: "二手教材",
      description: "一本被翻得起了毛边的旧版魔药教材，有几页上沾着可疑的药水渍——可能来自一场失败的活地狱汤剂实验。内容依然完全可用",
      basePrice: GS(1, 10),
      displayPrice: "1加隆10西可",
      stock: 6, maxStock: 6,
      buyable: true, sellable: true, sellPrice: S(12),
    },
    {
      id: "used_transfiguration",
      name: "二手《初级变形术指南》",
      icon: "🐭",
      category: "二手教材",
      description: "不知哪位学姐用过的教材，里面夹着几张旧的羊皮纸笔记——记录了一些课堂上没教的变形小窍门。封面有道牙印，据说是一只被变成茶杯的老鼠咬的",
      basePrice: GS(1, 8),
      displayPrice: "1加隆8西可",
      stock: 5, maxStock: 5,
      buyable: true, sellable: true, sellPrice: S(10),
    },
    {
      id: "secondhand_textbook_bundle_shop",
      name: "二手课本盲盒（3本随机）",
      icon: "🎁",
      category: "二手教材",
      description: "谢里达夫人精选三本品相尚可的二手教材，装在一个厚纸袋里。具体是什么书？打开才知道——但保证都是霍格沃茨学生用过的正版教材",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      packageItems: [
        { name: "二手《标准咒语·初级》", count: 1 },
        { name: "二手《魔法药剂与药水》", count: 1 },
        { name: "二手《初级变形术指南》", count: 1 },
      ]
    },

    // ── 魔法理论经典 ────────────────────────────────────────
    {
      id: "magical_theory_basic",
      name: "《魔法理论入门》",
      icon: "📖",
      category: "理论经典",
      description: "阿德伯特·瓦夫林著——如果你想知道魔法的运作原理而不只是咒语本身，这是必读。霍格沃茨从不把它列入教材，但赫敏·格兰杰读过不止一遍",
      basePrice: G(4),
      displayPrice: "4加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: true, sellPrice: G(2),
      minYear: 2,
    },
    {
      id: "history_of_magic_advanced",
      name: "《魔法史·进阶卷》",
      icon: "📕",
      category: "理论经典",
      description: "巴蒂勒斯·巴格肖特的另一部经典，比基础教材深得多——涵盖中世纪巫师审判、妖精叛乱和保密法的诞生。如果你觉得魔法史课很无聊，问题在宾斯教授，不在这本书",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 6, maxStock: 6,
      buyable: true, sellable: true, sellPrice: G(3),
      minYear: 3,
    },
    {
      id: "elemental_magic_treatise",
      name: "《元素魔法论》",
      icon: "🔥",
      category: "理论经典",
      description: "一本厚重的羊皮封面的专著，探讨火、水、风、土四大元素在魔法中的运用。里面有大量图表和咒语公式——适合真正想深入理解魔法的学霸",
      basePrice: G(8),
      displayPrice: "8加隆",
      stock: 4, maxStock: 4,
      buyable: true, sellable: false,
      minYear: 5,
    },
    {
      id: "wards_and_protections",
      name: "《守护咒与结界学》",
      icon: "🛡️",
      category: "理论经典",
      description: "一个多世纪前的旧版，封面的烫金标题已经模糊不清。讲的是保护咒语的理论——如何搭建魔法屏障、识别并拆除他人的结界。古灵阁的解咒员人手一本",
      basePrice: G(6),
      displayPrice: "6加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
      minYear: 4,
    },

    // ── 古籍善本 ────────────────────────────────────────────
    {
      id: "rare_bestiary_17th",
      name: "《十七世纪魔兽图鉴》",
      icon: "🐉",
      category: "古籍善本",
      description: "谢里达夫人从一个魔法世家的藏书拍卖会上淘来的珍品！皮面精装，附有手工上色的魔法生物铜版画——大部分生物今天已经灭绝或隐居了。收藏价值远大于实用价值",
      basePrice: G(25),
      displayPrice: "25加隆",
      stock: 1, maxStock: 1,
      buyable: true, sellable: false,
      minYear: 6,
    },
    {
      id: "merlin_journals",
      name: "《梅林日记残卷》",
      icon: "📜",
      category: "古籍善本",
      description: "据说是梅林本人的日记——至少谢里达夫人是这么标注的。只有十几页残卷，字迹已经很难辨认。可能是真迹，可能是一个绝佳的伪造品——但摆在家里绝对有面子",
      basePrice: G(50),
      displayPrice: "50加隆",
      stock: 1, maxStock: 1,
      buyable: true, sellable: false,
      minYear: 7,
    },
    {
      id: "founders_letters",
      name: "《霍格沃茨建校书信集》",
      icon: "🏰",
      category: "古籍善本",
      description: "抄本而非原件——但抄写者声称原件保存在霍格沃茨校长办公室。收录了格兰芬多、斯莱特林、拉文克劳和赫奇帕奇之间的通信——你能看到他们从亲密到分裂的全过程",
      basePrice: G(15),
      displayPrice: "15加隆",
      stock: 2, maxStock: 2,
      buyable: true, sellable: false,
      minYear: 5,
    },

    // ── 通俗读物 ────────────────────────────────────────────
    {
      id: "witch_weekly_back_issues",
      name: "《女巫周刊》过刊（5本随机）",
      icon: "📰",
      category: "杂志读物",
      description: "一批不知谁捐来的过期《女巫周刊》，从星座运势到魔药食谱到八卦专访应有尽有。封面有自动变换的模特照片——去年的流行趋势现在看可能有点过时但依然有趣",
      basePrice: S(8),
      displayPrice: "8西可",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
    },
    {
      id: "quidditch_through_ages_old",
      name: "旧版《神奇的魁地奇球》",
      icon: "🏏",
      category: "通俗读物",
      description: "肯尼沃思·惠斯普著——比丽痕书店卖的新版多了一章关于19世纪的魁地奇丑闻，后来的版本被删掉了。魁地奇球迷的小惊喜",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: true, sellPrice: G(1),
    },
    {
      id: "tales_of_beedle_bard_used",
      name: "二手《诗翁彼豆故事集》",
      icon: "📗",
      category: "通俗读物",
      description: "一本被翻得很旧的童话书——边角都被翻卷了，说明前主人一定读了很多遍。里面有《三兄弟的传说》《巫师和跳跳锅》等经典魔法童话。扉页有人用歪斜的字迹写着'给最爱的小朋友'",
      basePrice: GS(1, 5),
      displayPrice: "1加隆5西可",
      stock: 8, maxStock: 8,
      buyable: true, sellable: true, sellPrice: S(8),
    },
    {
      id: "dark_arts_detection",
      name: "《黑魔法识别入门》",
      icon: "🔍",
      category: "通俗读物",
      description: "一本装在黑色封套里的薄册子，教你如何识别常见的黑魔法诅咒、恶咒和黑魔法物品。包括如何辨别被下咒的项链——提醒你，看看就得了，别真的去碰",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 6, maxStock: 6,
      buyable: true, sellable: false,
      minYear: 3,
    },

    // ── 文具与杂项 ──────────────────────────────────────────
    {
      id: "vintage_parchment",
      name: "复古羊皮纸（10张）",
      icon: "📜",
      category: "文具",
      description: "微微泛黄的做旧风格羊皮纸——写出来的东西看起来像是十八世纪的魔法手稿。适合写情书、邀请函、或者假装你在写一本魔法古籍",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
    },
    {
      id: "calligraphy_set",
      name: "魔法书法套装",
      icon: "🖊️",
      category: "文具",
      description: "含三支不同粗细的羽毛笔和一本花体字临摹帖——字帖会在你临摹时自动发光纠正你的笔画。练一手好字，写一封让麦格教授夸奖的信",
      basePrice: GS(1, 5),
      displayPrice: "1加隆5西可",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      minYear: 2,
    },
    {
      id: "book_reading_light",
      name: "魔法阅读灯",
      icon: "💡",
      category: "文具",
      description: "夹在书页上的小型魔法灯，不需要燃料。在被子下偷看禁书时特别有用——光只照亮书页，不会透过被子。霍格沃茨学生的床头必备",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
    },

    // ── 书店套装 ────────────────────────────────────────────
    {
      id: "bibliophile_kit",
      name: "爱书人套装",
      icon: "🎁",
      category: "套装礼盒",
      description: "复古羊皮纸×2、魔法书法套装×1、魔法阅读灯×1——送给爱书之人的完美组合。装在谢里达夫人亲手包的牛皮纸里",
      basePrice: G(4),
      displayPrice: "4加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      minYear: 2,
      packageItems: [
        { name: "复古羊皮纸（10张）", count: 2 },
        { name: "魔法书法套装", count: 1 },
        { name: "魔法阅读灯", count: 1 },
      ]
    },
    {
      id: "bookworm_starter",
      name: "书虫入门包",
      icon: "🐛",
      category: "套装礼盒",
      description: "二手《标准咒语·初级》×1、复古羊皮纸×1、《女巫周刊》过刊×1、魔法阅读灯×1——适合刚爱上阅读的年轻巫师",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      packageItems: [
        { name: "二手《标准咒语·初级》", count: 1 },
        { name: "复古羊皮纸（10张）", count: 1 },
        { name: "《女巫周刊》过刊（5本随机）", count: 1 },
        { name: "魔法阅读灯", count: 1 },
      ]
    },
  ],

  buybackItems: {
    "旧书":       N(30),
    "旧杂志":     N(10),
    "旧羊皮纸":   N(5),
    "魔法手稿":   N(80),
    "破损古籍":   N(200),
    "旧笔记本":   N(15),
  },

  specialFeature: {
    name: "旧书鉴定",
    description: "谢里达夫人免费帮你鉴定一本你不确定价值的旧书。也许里面有惊喜——也许没有。但总值得一试",
    cooldown: 24 * 60 * 60 * 1000,
    lastUsed: 0,

    async appraiseBook(player, shop) {
      const now = Date.now();
      if (now - this.lastUsed < this.cooldown) {
        const remaining = Math.ceil((this.cooldown - (now - this.lastUsed)) / 3600000);
        return { success: false, message: `今天的鉴定额度用完了！${remaining}小时后谢里达夫人的放大镜才会重新充电` };
      }

      this.lastUsed = now;

      const findings = [
        { message: "谢里达夫人戴上她的魔法放大镜仔细看了看：「哦——这本书的扉页里藏着一个1778年的签名。虽然不是什么名家，但至少值2加隆。」", value: G(2) },
        { message: "「有意思……你看到这页的水印了吗？这是十六世纪的纸张。可惜被虫蛀得太厉害了，不然至少值15加隆。」她叹了口气，把书还给你。", value: 0 },
        { message: "谢里达夫人盯着这本书看了很久，然后从柜台下拿出一本拍卖目录：「你看——去年苏富比魔法拍卖行卖了一本跟这一模一样的，成交价是40加隆。不过你这本品相更好……」", value: G(5) },
        { message: "「天哪——这是霍格沃茨图书馆的旧藏书！你看扉页上的借书卡，上一个借的人是……」她突然停住，把书还给你，「这个签名还是你自己看比较好。」", value: G(3) },
      ];

      const finding = findings[Math.floor(Math.random() * findings.length)];

      if (finding.value > 0 && window.currency) {
        const g = Math.floor(finding.value / 493);
        const rem = finding.value % 493;
        const s = Math.floor(rem / 29);
        const n = rem % 29;
        window.currency.addMoney?.(g, s, n);
      }

      return { success: true, message: finding.message, value: finding.value };
    }
  },

  specialEvents: [
    {
      id: "back_to_school",
      name: "开学季旧书展",
      condition: (date) => date.getMonth() === 8 && date.getDate() >= 25,
      effect: (player, shop) => {
        shop.discount = 0.85;
        return { message: "📚 开学季！二手教材全部85折——比翻倒巷体面多了！" };
      }
    },
    {
      id: "rainy_day",
      name: "雨天读书日",
      condition: () => true,
      effect: (player, shop) => {
        return { message: "📖 谢里达夫人在橱窗上挂了个牌子：「下雨天，书和热茶最配。进来坐着看会儿书吧——不买也行。」" };
      }
    }
  ]
};

export class AncientBookshop extends BaseShop {
  constructor() {
    super(AncientBookshopConfig);
  }

  buyItem(itemId, quantity, player) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return { success: false, message: "商品不存在" };

    if (item.packageItems) {
      const unitPrice = this.getItemPrice(item, player);
      const totalPrice = unitPrice * quantity;

      const totalKnutsOwned = window.currency?.getTotalKnuts?.() ?? 0;
      if (totalKnutsOwned < totalPrice) {
        const g = Math.floor(totalPrice / 493);
        const rem = totalPrice % 493;
        const s = Math.floor(rem / 29);
        const n = rem % 29;
        return { success: false, message: `金币不足，需要 ${g>0?g+"加隆 ":""}${s>0?s+"西可 ":""}${n>0?n+"纳特":""}` };
      }

      const g = Math.floor(totalPrice / 493);
      const rem = totalPrice % 493;
      const s = Math.floor(rem / 29);
      const n = rem % 29;
      window.currency?.spendMoney?.(g, s, n, `在古卷二手书铺购买 ${item.name}×${quantity}`);

      if (item.stock) item.stock -= quantity;
      this.loyaltyPoints += Math.floor(totalPrice / 10);

      if (window.updateShopStats) {
        window.updateShopStats(this.id, totalPrice, 'spent');
      }

      for (let i = 0; i < quantity; i++) {
        for (const pkg of item.packageItems) {
          const matchedItem = this.items.find(it => it.name === pkg.name);
          if (window.addItemToBag) {
            window.addItemToBag("item", {
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

    return super.buyItem(itemId, quantity, player);
  }
}
// hogsmeade/shops/laurelApothecary.js
// 月桂魔材药房 · 丰富版
//
// 原著汇率：1加隆 = 17西可 = 493纳特
// 价格单位统一用「纳特」存储，显示时转换
// 参考原著购买力：
//   普通治疗药水约3~8西可
//   解毒药剂约1~3加隆
//   疗伤药膏约5~15西可
//   提神药剂约3~8西可
//   白鲜香精（外伤特效）约1~2加隆/瓶（《死亡圣器》赫敏给罗恩用过）
//   生骨灵（强力修复）约5~10加隆（《密室》哈利被迫喝了一整瓶）
//   振奋药剂约8~15西可
//   缓和剂约1~3加隆（需要高级药材）
//   补血药约5~10西可
//   烧伤药膏约5~10西可
//   魔药材料包约1~5加隆
//   药箱约5~10加隆
//   坩埚约15加隆

import { BaseShop } from '../baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);

export const LaurelApothecaryConfig = {
  id: "laurel_apothecary",
  name: "月桂魔材药房",
  icon: "⚕️",
  description: "霍格莫德唯一一家魔药材料与成药商店，空气中永远飘着甘草根和干荨麻的混合气味。店主是个退休的圣芒戈药剂师——在这里买药比去圣芒戈排队方便得多",
  owner: "塞巴斯蒂安·月桂",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,

  items: [

    // ── 外伤药剂 ────────────────────────────────────────────
    {
      id: "essence_of_dittany",
      name: "白鲜香精",
      icon: "🌿",
      category: "外伤药剂",
      description: "魔法世界最著名的外伤特效药——几滴就能止血生肌，防止留疤。赫敏·格兰杰在逃亡途中随身携带了一瓶，救过罗恩的命。月桂先生说这是圣芒戈医疗队的标配",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      minYear: 2,
      effect: { type: "heal_wound", strength: "high" }
    },
    {
      id: "wound_cleaning_potion",
      name: "清创药水",
      icon: "🧴",
      category: "外伤药剂",
      description: "透明药水，用于清洗魔法或非魔法造成的伤口——倒上去时会微微发泡，把脏东西和细菌一起带走。对角巷的药店也有卖，但月桂先生的配方多加了薄荷精，没那么刺痛",
      basePrice: S(8),
      displayPrice: "8西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
    },
    {
      id: "burn_healing_paste",
      name: "烧伤愈合膏",
      icon: "🧯",
      category: "外伤药剂",
      description: "淡绿色的膏体，装在锡管里。涂在烧伤处半分钟内就能止痛——不管是坩埚烫伤还是不小心被火灰蛇喷了一口。魔药课学生几乎人手一管",
      basePrice: S(8),
      displayPrice: "8西可",
      stock: 35, maxStock: 35,
      buyable: true, sellable: false,
      minYear: 2,
    },
    {
      id: "bruise_removal_paste",
      name: "祛瘀消肿膏",
      icon: "🟣",
      category: "外伤药剂",
      description: "专门针对淤青的黄色药膏——涂上去几小时就能淡化。魁地奇球员最常买的药，击球手们都说没有它根本没法打完一个赛季。哈利的扫帚摔伤史一定有很多罐",
      basePrice: S(6),
      displayPrice: "6西可",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
    },

    // ── 骨骼与修复 ──────────────────────────────────────────
    {
      id: "skelegro",
      name: "生骨灵",
      icon: "🦴",
      category: "骨骼修复",
      description: "需要重新长骨头？这就是答案——不过月桂先生诚实地说：'喝起来像在吞燃烧的木炭，但确实能让你一夜之间把骨头长回来。'哈利在二年级时被迫喝过一整瓶，他至今不愿意回忆那个味道",
      basePrice: G(8),
      displayPrice: "8加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      minYear: 3,
      effect: { type: "bone_growth", duration: "overnight" }
    },
    {
      id: "bone_mending_paste",
      name: "接骨膏",
      icon: "🩻",
      category: "骨骼修复",
      description: "如果只是骨裂而不是骨头消失——用这个就行。比生骨灵便宜多了，而且不疼。涂在皮肤上，药效会渗透到骨头里",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 12, maxStock: 12,
      buyable: true, sellable: false,
      minYear: 2,
    },

    // ── 解毒与抗魔药 ────────────────────────────────────────
    {
      id: "antidote_common",
      name: "通用解毒剂",
      icon: "💚",
      category: "解毒药剂",
      description: "能解大多数常见魔药中毒——不管你是不小心喝了坏掉的活地狱汤剂还是误食了一颗变质的爱情魔药巧克力。霍格沃茨学生寝室必须常备一瓶",
      basePrice: G(1),
      displayPrice: "1加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      minYear: 2,
    },
    {
      id: "antidote_strong",
      name: "强力解毒剂（针对黑魔法毒）",
      icon: "💜",
      category: "解毒药剂",
      description: "比通用解毒剂强得多——能中和中等强度的黑魔法毒药。圣芒戈配方，月桂先生亲手熬制。如果你在禁林里被不认识的东西咬了，先喝这个再去医疗翼",
      basePrice: G(4),
      displayPrice: "4加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      minYear: 5,
    },
    {
      id: "pepperup_potion",
      name: "振奋药剂",
      icon: "🔥",
      category: "解毒药剂",
      description: "治疗感冒的魔法特效药——喝下去耳朵会往外冒蒸汽，然后整个人立刻精神起来。庞弗雷夫人在冬天几乎天天都要开这个。霍格沃茨的冬天没有振奋药剂是过不去的",
      basePrice: S(10),
      displayPrice: "10西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      effect: { type: "cure_cold", steam_ears: true }
    },

    // ── 提神与镇定 ──────────────────────────────────────────
    {
      id: "calming_draught",
      name: "缓和剂",
      icon: "😌",
      category: "提神镇定",
      description: "能有效缓解焦虑和紧张——O.W.L.s和N.E.W.T.s考试季卖得最快的东西。月桂先生说每次霍格沃茨大考前的周末他都得专门多熬三锅才够卖",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      minYear: 3,
      effect: { type: "calm", duration: 120 }
    },
    {
      id: "focus_draught",
      name: "专注药剂",
      icon: "🧠",
      category: "提神镇定",
      description: "喝一小口就能让注意力高度集中——适合考前通宵复习，但不建议喝太多，否则连窗外的风声都觉得好听得无法自拔。月桂先生说最好配一杯水稀释后再喝",
      basePrice: GS(1, 5),
      displayPrice: "1加隆5西可",
      stock: 12, maxStock: 12,
      buyable: true, sellable: false,
      minYear: 4,
      effect: { type: "focus", duration: 60 }
    },
    {
      id: "sleeping_draught_mild",
      name: "安神助眠剂（弱效）",
      icon: "💤",
      category: "提神镇定",
      description: "帮助入睡的淡紫色药水——不会让你昏迷不醒，只是让你躺在床上更容易睡着。如果你隔壁寝室的室友鼾声如雷，这是你的救星。不含依赖性成分",
      basePrice: S(8),
      displayPrice: "8西可",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      minYear: 3,
    },
    {
      id: "invigoration_draught",
      name: "活力滋补剂",
      icon: "⚡",
      category: "提神镇定",
      description: "当你觉得筋疲力尽但又不能睡觉时——比如考试前夜——喝这个能撑过通宵。次日可能会有点头晕，但比挂科好。霍格沃茨六年级以上学生人手一瓶",
      basePrice: GS(1, 8),
      displayPrice: "1加隆8西可",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      minYear: 4,
    },

    // ── 魔药材料包 ──────────────────────────────────────────
    {
      id: "basic_potion_kit",
      name: "初级魔药材料包",
      icon: "🧪",
      category: "材料包",
      description: "干荨麻×3、薄荷×2、蛇牙×1、有角蛞蝓×3——一年级魔药课足够用到圣诞节。月桂先生会附赠一张手写的熬制小贴士",
      basePrice: GS(1, 5),
      displayPrice: "1加隆5西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      packageItems: [
        { name: "干荨麻（月桂药房）", count: 3 },
        { name: "薄荷（月桂药房）", count: 2 },
        { name: "蛇牙（月桂药房）", count: 1 },
        { name: "有角蛞蝓（月桂药房）", count: 3 },
      ]
    },
    {
      id: "advanced_potion_kit",
      name: "高级魔药材料包",
      icon: "⚗️",
      category: "材料包",
      description: "草蛉×1、助变草×2、牛黄石×1、刺猬刺×3——适合三年级以上的魔药课。月桂先生说这是他根据霍格沃茨教学大纲搭配的",
      basePrice: G(8),
      displayPrice: "8加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      minYear: 3,
      packageItems: [
        { name: "草蛉（月桂药房）", count: 1 },
        { name: "助变草（月桂药房）", count: 2 },
        { name: "牛黄石（月桂药房）", count: 1 },
        { name: "刺猬刺（月桂药房）", count: 3 },
      ]
    },
    {
      id: "single_cauldron_pewter",
      name: "标准锡镴坩埚（2号）",
      icon: "⚱️",
      category: "材料包",
      description: "一年级指定坩埚——月桂药房也备了几口，方便学生在买材料时顺便补一口新坩埚",
      basePrice: G(15),
      displayPrice: "15加隆",
      stock: 5, maxStock: 5,
      buyable: true, sellable: false,
    },

    // ── 药品箱 ──────────────────────────────────────────────
    {
      id: "first_aid_kit_small",
      name: "个人急救药箱",
      icon: "🧰",
      category: "药品箱",
      description: "清创药水×1 + 烧伤愈合膏×1 + 祛瘀消肿膏×1 + 通用解毒剂×1——装在铁皮小箱子里，箱子有防摔咒。霍格沃茨每个寝室都应该备一个",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      minYear: 2,
      packageItems: [
        { name: "清创药水", count: 1 },
        { name: "烧伤愈合膏", count: 1 },
        { name: "祛瘀消肿膏", count: 1 },
        { name: "通用解毒剂", count: 1 },
      ]
    },
    {
      id: "quidditch_aid_kit",
      name: "魁地奇急救包",
      icon: "🏏",
      category: "药品箱",
      description: "白鲜香精×1 + 生骨灵×1 + 祛瘀消肿膏×2 + 接骨膏×1——魁地奇球员必备。月桂先生自己就是狂热魁地奇球迷，所以这个包定价特别公道",
      basePrice: G(12),
      displayPrice: "12加隆",
      stock: 6, maxStock: 6,
      buyable: true, sellable: false,
      minYear: 3,
      packageItems: [
        { name: "白鲜香精", count: 1 },
        { name: "生骨灵", count: 1 },
        { name: "祛瘀消肿膏", count: 2 },
        { name: "接骨膏", count: 1 },
      ]
    },
  ],

  buybackItems: {
    "干荨麻":       N(20),
    "薄荷":         N(20),
    "蒲公英":       N(15),
    "蛇牙":         S(8),
    "有角蛞蝓":     S(5),
    "刺猬刺":       S(6),
    "草蛉":         G(1),
    "助变草":       GS(1, 5),
    "牛黄石":       G(3),
    "露水":         N(50),
    "花蜜":         N(80),
    "旧坩埚":       G(3),
    "空药瓶":       N(10),
  },

  specialFeature: {
    name: "免费药剂调配",
    description: "月桂先生可以免费帮你将你带来的材料调配成一剂药水——当然，简单的那种",
    cooldown: 24 * 60 * 60 * 1000,
    lastUsed: 0,

    async customBrew(player, shop) {
      const now = Date.now();
      if (now - this.lastUsed < this.cooldown) {
        const remaining = Math.ceil((this.cooldown - (now - this.lastUsed)) / 3600000);
        return { success: false, message: `月桂先生摇摇头：「今天已经帮你调过一次了——我的坩埚还得洗呢。」${remaining}小时后可以再次调配` };
      }

      this.lastUsed = now;

      const brews = [
        { name: "提神薄荷水", effect: "恢复少量精力", message: "月桂先生用你带来的薄荷和露水调了一小瓶提神薄荷水：「喝了精神会好点——不过别当饭吃。」" },
        { name: "蒲公英解热剂", effect: "缓解轻微发热", message: "「蒲公英可是好东西，」他一边碾碎花瓣一边说，「把这个喝下去，低烧很快就退了。」" },
        { name: "荨麻止血粉", effect: "止血一小伤口", message: "月桂先生把干荨麻磨成粉：「拿去——洒在小伤口上，止血很快。比白鲜便宜但效果不差。」" },
        { name: "助眠薰衣草茶", effect: "帮助入眠", message: "「不是魔药——只是点薰衣草和洋甘菊，」他递给你一杯冒着热气的茶，「但比很多魔药都好用。相信我，退休药剂师的真心话。」" },
      ];

      const brew = brews[Math.floor(Math.random() * brews.length)];

      return { success: true, message: brew.message, brew: brew };
    }
  },

  specialEvents: [
    {
      id: "exam_season",
      name: "考试季特供",
      condition: (date) => date.getMonth() === 5 && date.getDate() >= 1,
      effect: (player, shop) => {
        shop.discount = 0.85;
        return { message: "📝 考试季到了！专注药剂和缓和剂85折——月桂先生祝你考个好成绩！" };
      }
    },
    {
      id: "winter_cold",
      name: "冬季感冒预防",
      condition: (date) => date.getMonth() >= 10 || date.getMonth() <= 1,
      effect: (player, shop) => {
        shop.discount = 0.9;
        return { message: "🤧 冬天到了——振奋药剂9折！别让感冒影响你的魔药课成绩。" };
      }
    },
  ]
};

export class LaurelApothecary extends BaseShop {
  constructor() {
    super(LaurelApothecaryConfig);
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
      window.currency?.spendMoney?.(g, s, n, `在月桂魔材药房购买 ${item.name}×${quantity}`);

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
              icon: matchedItem?.icon || "⚕️"
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
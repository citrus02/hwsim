// hogsmeade/shops/ermineTeahouse.js
// 白鼬夫人茶屋 · 丰富版
//
// 原著汇率：1加隆 = 17西可 = 493纳特
// 价格单位统一用「纳特」存储，显示时转换
// 参考原著购买力：
//   魔法下午茶套餐约1~3加隆（霍格莫德高档茶馆）
//   精致糕点约3~8西可/块
//   红茶约1~3西可/杯
//   花茶约2~5西可/杯
//   魔法调味茶约5~10西可/杯（会变色或冒泡）
//   司康饼约3~5西可
//   烤饼约2~4西可
//   巧克力蛋糕约5~10西可/块
//   青蛙形状小饼干约3~5西可
//   纯银茶具套装约5~10加隆

import { BaseShop } from '../baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);

export const ErmineTeahouseConfig = {
  id: "ermine_teahouse",
  name: "白鼬夫人茶屋",
  icon: "🫖",
  description: "霍格莫德最高雅的茶馆，空气中永远飘着大吉岭和新鲜烤饼的香气。每到下午茶时间，店里坐满了从霍格沃茨来的教授和前来约会的年轻巫师——这里的司康饼据说是苏格兰最好的",
  owner: "格温妮丝·白鼬女士",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,

  items: [

    // ── 魔法茶系列 ──────────────────────────────────────────
    {
      id: "earl_grey_classic",
      name: "经典格雷伯爵茶",
      icon: "🫖",
      category: "魔法茶",
      description: "白鼬夫人茶屋的招牌——锡兰红茶基底，加入了佛手柑精油和一丝只有魔法才能提取出的柑橘晨露。端上来时茶壶嘴会冒出淡淡的白色蒸汽，像一只小鼬鼠的形状",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 200, maxStock: 200,
      buyable: true, sellable: false,
      effect: { type: "calm", duration: 30 }
    },
    {
      id: "magic_chamomile",
      name: "魔法洋甘菊茶",
      icon: "🌼",
      category: "魔法茶",
      description: "洋甘菊花在杯中会缓缓绽放——不是比喻，是真的在开花。喝完后整个人都平静下来，据说对考试前的焦虑特别有效。特里劳妮教授每次来都点两壶",
      basePrice: S(4),
      displayPrice: "4西可",
      stock: 150, maxStock: 150,
      buyable: true, sellable: false,
      effect: { type: "relax", restore: 5 }
    },
    {
      id: "bubble_mint_tea",
      name: "泡泡薄荷茶",
      icon: "🫧",
      category: "魔法茶",
      description: "翠绿色的薄荷茶，杯底不断升起闪闪发光的小气泡——每个气泡破裂时都会散发出一阵清凉的薄荷香。夏天来一杯比什么解暑咒都好用",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 120, maxStock: 120,
      buyable: true, sellable: false,
      effect: { type: "cool", duration: 45 }
    },
    {
      id: "starry_night_tea",
      name: "星空夜茶",
      icon: "✨",
      category: "魔法茶",
      description: "深蓝色的茶汤上漂浮着银色的可食用星尘——每喝一口，杯底的星图就会变换一次。白鼬女士只在傍晚后出售，说这款茶「需要星星的加持才好喝」",
      basePrice: S(8),
      displayPrice: "8西可",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      minYear: 3,
      effect: { type: "night_vision", duration: 60 }
    },

    // ── 经典红茶 ────────────────────────────────────────────
    {
      id: "darjeeling",
      name: "大吉岭红茶",
      icon: "🍂",
      category: "经典红茶",
      description: "来自印度的正宗魔法大吉岭——茶树据说是被一位骑着扫帚的英国巫师带去大吉岭的。汤色金黄，带着淡淡的麝香葡萄香气。麦格教授每次来都只点这一种",
      basePrice: S(2),
      displayPrice: "2西可",
      stock: 250, maxStock: 250,
      buyable: true, sellable: false,
    },
    {
      id: "breakfast_tea",
      name: "英式早餐茶",
      icon: "☕",
      category: "经典红茶",
      description: "浓郁的拼配红茶，配牛奶和方糖——但糖罐是魔法糖罐，加糖时会自动问你'一颗还是两颗？'。早晨来一杯比什么醒神咒都好用",
      basePrice: S(2),
      displayPrice: "2西可",
      stock: 300, maxStock: 300,
      buyable: true, sellable: false,
      effect: { type: "awake", duration: 45 }
    },
    {
      id: "rose_black_tea",
      name: "玫瑰红茶",
      icon: "🌹",
      category: "经典红茶",
      description: "红茶底上浮着三朵魔法腌制的玫瑰花瓣——花瓣会在热水中缓缓旋转，散发出淡淡的花香。情人节前后这款茶会供不应求",
      basePrice: S(4),
      displayPrice: "4西可",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
    },

    // ── 精致糕点 ────────────────────────────────────────────
    {
      id: "scone_set",
      name: "司康饼（两个装）",
      icon: "🥮",
      category: "精致糕点",
      description: "白鼬夫人茶屋的骄傲——外酥里软的传统司康饼，配一小盅魔法草莓酱和一碟手打奶油。草莓酱会自动涂抹，奶油会告诉你什么时候加最合适",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      effect: { type: "satisfy", restore: 10 }
    },
    {
      id: "chocolate_cake_slice",
      name: "魔法巧克力蛋糕",
      icon: "🍰",
      category: "精致糕点",
      description: "三层巧克力蛋糕——第一层是黑巧克力，第二层是牛奶巧克力，第三层是白巧克力。最特别的是，每层在你嘴里融化时的温度都不一样",
      basePrice: S(8),
      displayPrice: "8西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      effect: { type: "joy", duration: 30 }
    },
    {
      id: "frog_biscuit",
      name: "青蛙小饼干",
      icon: "🐸",
      category: "精致糕点",
      description: "做成青蛙形状的黄油小饼干，装盘后会在盘子里跳几下才安静下来——然后你才能吃它们。是茶馆里最受小朋友欢迎的点心。海格来的时候会点一整盘",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 120, maxStock: 120,
      buyable: true, sellable: false,
    },
    {
      id: "lemon_tart",
      name: "魔法柠檬挞",
      icon: "🍋",
      category: "精致糕点",
      description: "柠檬馅会在舌尖微微发麻——不是坏事，那是魔法柠檬特有的清新感。挞皮薄如蝉翼，据说每一只挞皮都是白鼬女士亲手擀的",
      basePrice: S(6),
      displayPrice: "6西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
    },
    {
      id: "cauldron_muffin",
      name: "坩埚松饼",
      icon: "🧁",
      category: "精致糕点",
      description: "造型像一只小坩埚的巧克力松饼——顶部冒着热气的不是奶油，而是可可味的魔法蒸汽。趁热吃最好，凉了蒸汽就消失了——但松饼本身依然好吃",
      basePrice: S(4),
      displayPrice: "4西可",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
    },

    // ── 下午茶套餐 ──────────────────────────────────────────
    {
      id: "afternoon_tea_set",
      name: "白鼬经典下午茶",
      icon: "🫖",
      category: "下午茶套餐",
      description: "一壶经典格雷伯爵茶 + 两个司康饼 + 一块魔法巧克力蛋糕 + 两块青蛙小饼干——装在三层银制托盘上，每层之间有微型飘浮咒保持间距。霍格莫德周末最奢侈的享受之一",
      basePrice: GS(1, 5),
      displayPrice: "1加隆5西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      packageItems: [
        { name: "经典格雷伯爵茶", count: 1 },
        { name: "司康饼（两个装）", count: 1 },
        { name: "魔法巧克力蛋糕", count: 1 },
        { name: "青蛙小饼干", count: 2 },
      ]
    },
    {
      id: "lovers_tea_set",
      name: "双人下午茶套餐",
      icon: "💕",
      category: "下午茶套餐",
      description: "两壶玫瑰红茶 + 四个司康饼 + 两块魔法柠檬挞 + 两块魔法巧克力蛋糕——白鼬女士为情侣们专门设计的套餐。每张桌子上的花瓶会自动换上一朵新鲜玫瑰",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      minYear: 4,
      packageItems: [
        { name: "玫瑰红茶", count: 2 },
        { name: "司康饼（两个装）", count: 2 },
        { name: "魔法柠檬挞", count: 2 },
        { name: "魔法巧克力蛋糕", count: 2 },
      ]
    },
    {
      id: "professor_tea_set",
      name: "教授下午茶",
      icon: "🎓",
      category: "下午茶套餐",
      description: "一壶大吉岭红茶 + 两个司康饼 + 一整份英式早餐茶——据说麦格教授每次监考完都会来点这个。简朴但体面，学者风范尽在其中",
      basePrice: GS(1, 2),
      displayPrice: "1加隆2西可",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      minYear: 3,
      packageItems: [
        { name: "大吉岭红茶", count: 1 },
        { name: "英式早餐茶", count: 1 },
        { name: "司康饼（两个装）", count: 2 },
      ]
    },

    // ── 茶具与礼品 ──────────────────────────────────────────
    {
      id: "magic_teacup",
      name: "白鼬山定制茶杯",
      icon: "🍵",
      category: "茶具礼品",
      description: "一只印有白鼬图案的精致茶杯，瓷面上有一只白色小鼬鼠在茶杯边缘跑来跑去——但它永远不会掉出来。杯底有保温咒，茶两个小时都不会凉",
      basePrice: G(4),
      displayPrice: "4加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      minYear: 2,
    },
    {
      id: "tea_leaf_jars",
      name: "魔法茶叶罐（3个装）",
      icon: "🫗",
      category: "茶具礼品",
      description: "三个小瓷罐，分别能自动保持茶叶干燥、监测茶叶新鲜度、并在茶叶快用完时发出微弱的金色光芒提醒你补货。白鼬夫人茶屋同款",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      minYear: 3,
    },
    {
      id: "tea_gift_box",
      name: "茶礼礼盒",
      icon: "🎁",
      category: "茶具礼品",
      description: "含经典格雷伯爵茶×1、大吉岭红茶×1、玫瑰红茶×1、青蛙小饼干一包——装在印有白鼬图案的精致礼盒中。圣诞节送给爱喝茶的家人最合适",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      packageItems: [
        { name: "经典格雷伯爵茶", count: 1 },
        { name: "大吉岭红茶", count: 1 },
        { name: "玫瑰红茶", count: 1 },
        { name: "青蛙小饼干", count: 1 },
      ]
    },
  ],

  buybackItems: {
    "茶叶":       N(10),
    "旧茶杯":     N(15),
    "方糖":       N(5),
    "蜂蜜":       N(20),
    "饼干碎":     N(5),
    "魔法茶渣":   N(30),
  },

  specialFeature: {
    name: "免费茶渣占卜",
    description: "喝完茶后，白鼬女士可以用你杯底的茶叶渣免费为你占卜——当然，她本人说这纯粹是娱乐，不保证灵验",
    cooldown: 24 * 60 * 60 * 1000,
    lastUsed: 0,

    async teaLeafReading(player, shop) {
      const now = Date.now();
      if (now - this.lastUsed < this.cooldown) {
        const remaining = Math.ceil((this.cooldown - (now - this.lastUsed)) / 3600000);
        return { success: false, message: `白鼬女士摇摇头：「亲爱的，一天只能占一次——茶叶也需要休息。」${remaining}小时后再来吧` };
      }

      this.lastUsed = now;

      const readings = [
        { message: "白鼬女士眯着眼睛看着你的茶杯：「嗯——我看到了一个圆……不对，是个三角形……好吧，你可能这个月会踩到一摊鼻涕虫。不用谢。」", mood: "silly" },
        { message: "「哦天哪。」她盯着杯底，然后抬头看了看你。「茶叶说……你今天下午会碰到一个意想不到的人。可能是好人，也可能只是皮皮鬼。」", mood: "mysterious" },
        { message: "「茶渣的形状很清楚——这是一只猫。」白鼬女士说。「麦格教授今天会给你加分。或者是一只迷路的猫需要帮助。茶叶有时候说不太清楚。」", mood: "hopeful" },
        { message: "白鼬女士看了很久，然后把杯子递回给你：「恭喜——茶叶什么都没说。这要么意味着你前程一帆风顺，要么意味着我该换一批新茶叶了。」", mood: "neutral" },
      ];

      const reading = readings[Math.floor(Math.random() * readings.length)];

      return { success: true, message: reading.message, reading: reading };
    }
  },

  specialEvents: [
    {
      id: "mothers_day",
      name: "母亲节下午茶",
      condition: (date) => date.getMonth() === 2 && date.getDate() >= 20,
      effect: (player, shop) => {
        shop.discount = 0.8;
        return { message: "🌸 母亲节快到了！所有茶礼8折——给妈妈寄一份霍格莫德的茶香吧！" };
      }
    },
    {
      id: "rainy_afternoon",
      name: "雨天特惠",
      condition: () => true,
      effect: (player, shop) => {
        return { message: "🌧️ 白鼬女士在门口放了个木牌：「下雨天，点任意茶配司康饼立减1西可——没有什么比在雨中躲进茶馆更舒服了。」" };
      }
    },
  ]
};

export class ErmineTeahouse extends BaseShop {
  constructor() {
    super(ErmineTeahouseConfig);
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
      window.currency?.spendMoney?.(g, s, n, `在白鼬夫人茶屋购买 ${item.name}×${quantity}`);

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
              icon: matchedItem?.icon || "🫖"
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
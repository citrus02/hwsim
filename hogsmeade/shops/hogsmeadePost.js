// hogsmeade/shops/hogsmeadePost.js
// 霍格莫德邮局 · 丰富版
//
// 原著汇率：1加隆 = 17西可 = 493纳特
// 价格单位统一用「纳特」存储，显示时转换
// 参考原著购买力：
//   寄信（国内）约1~2西可（《魔法石》提到海格寄信给邓布利多）
//   国际信约5~10西可
//   猫头鹰零食约2~5西可
//   猫头鹰租用服务约1加隆/天
//   吼叫信约3~5加隆（特殊魔法信件）
//   魔法明信片约2~5西可
//   蜡封套装约5~10西可
//   羽毛笔约2~5西可
//   羊皮纸约2~5西可
//   邮局包裹寄送服务约1~5加隆
//   猫头鹰架约3~8加隆（家养器具）

import { BaseShop } from '../baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);

export const HogsmeadePostConfig = {
  id: "hogsmeade_post",
  name: "霍格莫德邮局",
  icon: "🦉",
  description: "至少三百只猫头鹰栖息的魔法邮局，从灰林鸮到角鸮应有尽有。是巫师世界邮政系统的霍格莫德枢纽",
  owner: "邮局管理员",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,

  items: [

    // ── 书写文具 ────────────────────────────────────────────
    {
      id: "post_quill",
      name: "邮局羽毛笔",
      icon: "✒️",
      category: "书写文具",
      description: "邮局提供的标准羽毛笔，笔尖经过特别处理，写出来的字会在信封上微微发光——方便猫头鹰在夜间辨认地址",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 200, maxStock: 200,
      buyable: true, sellable: false,
    },
    {
      id: "post_parchment_sheet",
      name: "邮局信纸（5张）",
      icon: "📄",
      category: "书写文具",
      description: "标准尺寸的魔法信纸，比普通羊皮纸稍薄，适合猫头鹰长途携带。背面印有霍格莫德邮局的猫头鹰水印",
      basePrice: S(2),
      displayPrice: "2西可",
      stock: 300, maxStock: 300,
      buyable: true, sellable: false,
    },
    {
      id: "post_envelope_set",
      name: "魔法信封（10个）",
      icon: "✉️",
      category: "书写文具",
      description: "会自己折叠封装，地址自动书写——你只用把信塞进去、说出收件人名字就行。懒人必备",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 150, maxStock: 150,
      buyable: true, sellable: false,
    },
    {
      id: "sealing_wax_kit",
      name: "蜡封套装",
      icon: "🕯️",
      category: "书写文具",
      description: "含红蜡×3和一枚霍格莫德邮局官方铜印——封好的信会多一道防窥咒。适合寄重要信件",
      basePrice: S(10),
      displayPrice: "10西可",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
    },

    // ── 普通信件服务 ────────────────────────────────────────
    {
      id: "owl_post_local",
      name: "猫头鹰信（英国国内）",
      icon: "📨",
      category: "信件服务",
      description: "霍格莫德邮局的标准国内邮政服务。一只训练有素的灰林鸮将携带你的信件飞往英国的任何一个角落——无论收信人是在霍格沃茨还是对角巷",
      basePrice: S(2),
      displayPrice: "2西可",
      stock: 999, maxStock: 999,
      buyable: true, sellable: false,
      effect: { type: "send_mail", delivery: "24小时", range: "英国" }
    },
    {
      id: "owl_post_international",
      name: "猫头鹰信（国际）",
      icon: "🌍",
      category: "信件服务",
      description: "长途飞行！由一只健壮的角鸮送往欧洲大陆。如果寄往更远的地方，可能需要在途中小憩——一般3到5天到达",
      basePrice: S(8),
      displayPrice: "8西可",
      stock: 999, maxStock: 999,
      buyable: true, sellable: false,
      effect: { type: "send_mail", delivery: "3-5天", range: "国际" }
    },
    {
      id: "owl_post_express",
      name: "猫头鹰快递（特快）",
      icon: "⚡",
      category: "信件服务",
      description: "两只猫头鹰接力飞行，保证当天送达！用的是邮局最快的矛隼——它们飞得比飞天扫帚还快",
      basePrice: G(1),
      displayPrice: "1加隆",
      stock: 999, maxStock: 999,
      buyable: true, sellable: false,
      effect: { type: "send_mail", delivery: "当天", range: "英国" }
    },

    // ── 特殊信件 ────────────────────────────────────────────
    {
      id: "howler",
      name: "吼叫信",
      icon: "📢",
      category: "特殊信件",
      description: "一封信封口是红色的魔法信——如果你需要对着某人怒斥一顿但不想亲自见面。信会在收件人面前自动打开，用你的声音吼出内容，然后自毁。罗恩·韦斯莱曾收到过他妈妈莫丽寄来的吼叫信，全校都听见了",
      basePrice: G(4),
      displayPrice: "4加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      minYear: 2,
      effect: { type: "howler", selfDestruct: true }
    },
    {
      id: "singing_valentine",
      name: "情人节歌唱信",
      icon: "💌",
      category: "特殊信件",
      description: "情人节限定服务！一只身穿粉色丝带的猫头鹰会把你的情诗唱给心上人听——在全校礼堂里。洛哈特教授推广过这项服务，效果……因信而异",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      minYear: 2,
      seasonal: "valentine"
    },
    {
      id: "confidential_letter",
      name: "机密封信",
      icon: "🔐",
      category: "特殊信件",
      description: "只有收件人能打开，其他人碰到信封会立刻烧掉。内含三重防窥咒——凤凰社成员常用的通信方式。加隆花得值，如果你真的有什么不想让人知道的秘密",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      minYear: 4,
    },

    // ── 包裹服务 ────────────────────────────────────────────
    {
      id: "parcel_small",
      name: "小包裹寄送（英国国内）",
      icon: "📦",
      category: "包裹服务",
      description: "寄送不超过一只坩埚大小的包裹。猫头鹰会抱怨但从不拒绝——它们受过专业训练。适合寄生日礼物、魔法材料、或者你忘记带到学校的课本",
      basePrice: S(10),
      displayPrice: "10西可",
      stock: 999, maxStock: 999,
      buyable: true, sellable: false,
      effect: { type: "send_parcel", size: "small", range: "英国" }
    },
    {
      id: "parcel_large",
      name: "大包裹寄送（英国国内）",
      icon: "📦",
      category: "包裹服务",
      description: "对于猫头鹰来说太大了——我们租用一只鹰头马身有翼兽来送。海格经常用这个服务送东西。额外赠送防雨咒防止包裹在飞行中被淋湿",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      effect: { type: "send_parcel", size: "large", range: "英国" }
    },

    // ── 猫头鹰相关 ──────────────────────────────────────────
    {
      id: "owl_treats_post",
      name: "猫头鹰零食（邮局特供）",
      icon: "🐭",
      category: "猫头鹰用品",
      description: "邮局配方：脱水田鼠干和魔法谷物混合，富含猫头鹰长途飞行所需的所有营养。据说猫头鹰吃了会飞得更快——也可能是它们认出了邮局的包装",
      basePrice: S(4),
      displayPrice: "4西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
      effect: { type: "owl_speed", boost: 5 }
    },
    {
      id: "owl_care_kit",
      name: "猫头鹰护理套装",
      icon: "🧹",
      category: "猫头鹰用品",
      description: "猫头鹰羽毛梳理器、爪子打磨石、和一小罐啄喙油——如果你有自己的猫头鹰，这是最基本的养护。邮局的猫头鹰们每周都会享受一次",
      basePrice: GS(1, 5),
      displayPrice: "1加隆5西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      minYear: 2,
    },
    {
      id: "owl_rental_day",
      name: "猫头鹰租用（一天）",
      icon: "🦉",
      category: "猫头鹰用品",
      description: "自己没有猫头鹰？租一只！邮局提供经过专业训练的猫头鹰，会跟着你一天，帮你送信、取信、甚至帮你拿一些小东西。傍晚前归还邮局即可",
      basePrice: G(1),
      displayPrice: "1加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      effect: { type: "owl_companion", duration: "一天" }
    },
    {
      id: "owl_perch_portable",
      name: "便携猫头鹰架",
      icon: "🪵",
      category: "猫头鹰用品",
      description: "可折叠的猫头鹰站立架，展开后能自动吸附在窗户上——这样你的猫头鹰就不用大半夜啄窗户了。附带自动清洁咒",
      basePrice: G(4),
      displayPrice: "4加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      minYear: 3,
    },

    // ── 明信片与纪念品 ──────────────────────────────────────
    {
      id: "postcard_hogsmeade",
      name: "霍格莫德风景明信片",
      icon: "🖼️",
      category: "纪念品",
      description: "会动的魔法明信片——可以看到霍格莫德街上缓缓飘落的雪、蜂蜜公爵门口排队的人群、尖叫棚屋在风中微微摇晃。寄回家的最佳选择",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 200, maxStock: 200,
      buyable: true, sellable: false,
    },
    {
      id: "postcard_hogwarts",
      name: "霍格沃茨城堡明信片",
      icon: "🏰",
      category: "纪念品",
      description: "展示霍格沃茨城堡的魔法明信片——画面会在四季之间变换，冬天有雪景，夏天有魁地奇球场上空飞过的球队。每年都有新生买一沓寄回家",
      basePrice: S(4),
      displayPrice: "4西可",
      stock: 150, maxStock: 150,
      buyable: true, sellable: false,
    },
    {
      id: "stamp_collector_set",
      name: "魔法邮票收藏册",
      icon: "📮",
      category: "纪念品",
      description: "收录了过去五十年间英国魔法世界发行过的所有邮票——包括会动的、会唱歌的、和那张极为罕见的邓布利多纪念邮票。集邮爱好者的小宝藏",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      minYear: 3,
    },

    // ── 邮局套装 ────────────────────────────────────────────
    {
      id: "letter_writing_kit",
      name: "写信套件",
      icon: "💼",
      category: "套装礼盒",
      description: "邮局信纸×10、魔法信封×5、邮局羽毛笔×1、蜡封套装×1——所有写信需要的东西都在一个小盒子里。送礼或自用俱佳",
      basePrice: GS(1, 2),
      displayPrice: "1加隆2西可",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      packageItems: [
        { name: "邮局信纸（5张）", count: 2 },
        { name: "魔法信封（10个）", count: 1 },
        { name: "邮局羽毛笔", count: 1 },
        { name: "蜡封套装", count: 1 },
      ]
    },
    {
      id: "owl_owner_starter_kit",
      name: "猫头鹰主人新手包",
      icon: "🦉",
      category: "套装礼盒",
      description: "猫头鹰零食×2、猫头鹰护理套装×1、便携猫头鹰架×1——第一次养猫头鹰需要准备的东西都在这里",
      basePrice: G(6),
      displayPrice: "6加隆",
      stock: 12, maxStock: 12,
      buyable: true, sellable: false,
      minYear: 3,
      packageItems: [
        { name: "猫头鹰零食（邮局特供）", count: 2 },
        { name: "猫头鹰护理套装", count: 1 },
        { name: "便携猫头鹰架", count: 1 },
      ]
    },
  ],

  buybackItems: {
    "旧明信片": N(10),
    "旧邮票": N(15),
    "旧信封": N(5),
    "猫头鹰羽毛": N(20),
    "信纸": N(5),
  },

  specialFeature: {
    name: "猫头鹰速递",
    description: "今天也可以让猫头鹰送一个小包裹（每天限一次免费服务）",
    cooldown: 24 * 60 * 60 * 1000,
    lastUsed: 0,

    async specialDelivery(player, shop) {
      const now = Date.now();
      if (now - this.lastUsed < this.cooldown) {
        const remaining = Math.ceil((this.cooldown - (now - this.lastUsed)) / 3600000);
        return { success: false, message: `今天已经免费寄过了！${remaining}小时后可以再次使用免费服务` };
      }

      this.lastUsed = now;

      return {
        success: true,
        message: "🦉 一只灰色的角鸮从邮局飞出，带着你的免费包裹飞往目的地！「下次记得买猫头鹰零食犒劳它。」管理员微笑着说。"
      };
    }
  },

  specialEvents: [
    {
      id: "christmas_rush",
      name: "圣诞邮寄高峰期",
      condition: (date) => date.getMonth() === 11 && date.getDate() >= 15,
      effect: (player, shop) => {
        shop.discount = 0.8;
        return { message: "🎄 圣诞邮寄高峰期！所有信件服务8折——快来寄圣诞卡！" };
      }
    },
    {
      id: "valentine_day",
      name: "情人节情书服务",
      condition: (date) => date.getMonth() === 1 && date.getDate() === 14,
      effect: (player, shop) => {
        shop.discount = 0.85;
        return { message: "💝 情人节快乐！歌唱信8.5折——让全校听见你的爱（或尴尬）！" };
      }
    },
  ]
};

export class HogsmeadePost extends BaseShop {
  constructor() {
    super(HogsmeadePostConfig);
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
      window.currency?.spendMoney?.(g, s, n, `在霍格莫德邮局购买 ${item.name}×${quantity}`);

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
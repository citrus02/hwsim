// hogsmeade/shops/weasleyWizardWheezes.js
// 韦斯莱魔法把戏坊 · 丰富商品
//
// 原著汇率：1加隆 = 17西可 = 493纳特
// 价格单位统一用「纳特」存储，显示时转换
// 参考原著购买力：
//   速效逃课糖约5~8西可
//   鼻血牛轧糖约3~5西可
//   肥舌太妃糖约4~6西可
//   蹦蹦粉约2~3加隆
//   韦斯莱嗖嗖—烟火约1~2加隆
//   迷情剂香水约5~10加隆
//   便携式沼泽约2~3加隆
//   假伤疤约1~2西可
//   偷窥眼镜约6~8加隆
//   无头帽约3~5加隆

import { BasesicklesToKnutshop } from '../basesicklesToKnutshop.js';

// 货币转换函数
const galleonsToKnuts = (g) => g * 493;
const sicklesToKnuts = (s) => s * 29;
const knutsToKnuts = (n) => n;
const galleonsAndsicklesToKnutsicklesToKnuts = (g, s) => galleonsToKnuts(g) + sicklesToKnuts(s);

export const WeasleyWheezesConfig = {
  id: "weasley_wheezes",
  name: "韦斯莱魔法把戏坊",
  icon: "🎇",
  description: "弗雷德和乔治·韦斯莱创办的魔法恶作剧商店，位于霍格莫德村。他们的口号是：'我们保证产品趣味无穷！'",
  owner: "弗雷德·韦斯莱 & 乔治·韦斯莱",
  openYears: [5, 6, 7],
  minLevel: 5,
  
  // 会员等级系统
  loyaltyLevels: [
    { level: 1, name: "把戏学徒", minPoints: 0, discount: 0, perks: ["基础商品购买"] },
    { level: 2, name: "魔法捣蛋鬼", minPoints: 100, discount: 0.05, perks: ["5%折扣", "限量商品优先购买"] },
    { level: 3, name: "韦斯莱学徒", minPoints: 300, discount: 0.1, perks: ["10%折扣", "新品抢先体验", "专属礼盒"] },
    { level: 4, name: "把戏专家", minPoints: 600, discount: 0.15, perks: ["15%折扣", "隐藏商品解锁", "生日惊喜"] },
    { level: 5, name: "韦斯莱合伙人", minPoints: 1000, discount: 0.2, perks: ["20%折扣", "私人定制服务", "韦斯莱兄弟亲自接待"] },
  ],

  items: [

    // ── 糖果系列 ────────────────────────────────────────────
    {
      id: "skiving_snacks",
      name: "速效逃课糖",
      icon: "🍬",
      category: "糖果系列",
      description: "包含多种口味：呕吐味、鼻血味、发烧味。吃下后会产生逼真的生病症状，让你顺利逃离课堂",
      basePrice: sicklesToKnuts(6),
      displayPrice: "6西可",
      stock: 50, maxsicklesToKnutstock: 50,
      buyable: true, sellable: false,
      effect: { type: "prank", escapeClass: true }
    },
    {
      id: "nosebleed_nougat",
      name: "鼻血牛轧糖",
      icon: "🍫",
      category: "糖果系列",
      description: "吃下后会逼真地流鼻血，是装病逃课的绝佳道具。韦斯莱兄弟的招牌产品之一",
      basePrice: sicklesToKnuts(4),
      displayPrice: "4西可",
      stock: 80, maxsicklesToKnutstock: 80,
      buyable: true, sellable: false,
      effect: { type: "prank", nosebleed: true }
    },
    {
      id: "fat_tongue_toffee",
      name: "肥舌太妃糖",
      icon: "🍭",
      category: "糖果系列",
      description: "吃下后舌头会迅速肿胀到正常大小的两倍，说话含混不清。效果持续约十分钟",
      basePrice: sicklesToKnuts(5),
      displayPrice: "5西可",
      stock: 60, maxsicklesToKnutstock: 60,
      buyable: true, sellable: false,
      effect: { type: "prank", fatTongue: true }
    },
    {
      id: "puking_pastilles",
      name: "呕吐糖",
      icon: "🤢",
      category: "糖果系列",
      description: "橙色的一端让人呕吐，紫色的一端让人立刻恢复。完美的逃课组合",
      basePrice: sicklesToKnuts(7),
      displayPrice: "7西可",
      stock: 40, maxsicklesToKnutstock: 40,
      buyable: true, sellable: false,
      effect: { type: "prank", puke: true }
    },
    {
      id: "fainting_fancies",
      name: "昏迷花糖",
      icon: "💤",
      category: "糖果系列",
      description: "吃下后会立刻陷入昏迷状态，持续约五分钟。适合假装晕倒逃离麻烦",
      basePrice: sicklesToKnuts(8),
      displayPrice: "8西可",
      stock: 30, maxsicklesToKnutstock: 30,
      buyable: true, sellable: false,
      effect: { type: "prank", faint: true }
    },

    // ── 烟火系列 ────────────────────────────────────────────
    {
      id: "weasley_wizard_whiz_bangs",
      name: "韦斯莱嗖嗖—烟火",
      icon: "🎆",
      category: "烟火系列",
      description: "五彩缤纷的魔法烟火，在空中绽放出各种图案和文字。在霍格沃茨走廊点燃会引发极大混乱",
      basePrice: GsicklesToKnuts(1, 5),
      displayPrice: "1加隆5西可",
      stock: 20, maxsicklesToKnutstock: 20,
      buyable: true, sellable: false,
      effect: { type: "prank", fireworks: true }
    },
    {
      id: "peruvian_instant_darkness_powder",
      name: "秘鲁即时黑暗粉",
      icon: "🌑",
      category: "烟火系列",
      description: "从秘鲁进口的高档货，投掷后瞬间制造一片漆黑，范围约一个房间",
      basePrice: GsicklesToKnuts(6, 0),
      displayPrice: "6加隆",
      stock: 10, maxsicklesToKnutstock: 10,
      buyable: true, sellable: false,
      effect: { type: "prank", darkness: true }
    },
    {
      id: "bang-bang_skrewts",
      name: "砰砰爆炸弹",
      icon: "💥",
      category: "烟火系列",
      description: "会跳的魔法烟火，落地后会不断跳跃并发出砰砰声，最后爆炸成彩色火花",
      basePrice: sicklesToKnuts(12),
      displayPrice: "12西可",
      stock: 35, maxsicklesToKnutstock: 35,
      buyable: true, sellable: false,
      effect: { type: "prank", bang: true }
    },

    // ── 实用道具 ────────────────────────────────────────────
    {
      id: "bouncing_bubbles",
      name: "蹦蹦粉",
      icon: "🫧",
      category: "实用道具",
      description: "撒在地上会产生跳跃的魔法泡泡，人踩上去会被弹起数英尺高",
      basePrice: GsicklesToKnuts(2, 10),
      displayPrice: "2加隆10西可",
      stock: 15, maxsicklesToKnutstock: 15,
      buyable: true, sellable: false,
      effect: { type: "prank", bounce: true }
    },
    {
      id: "portable_swamp",
      name: "便携式沼泽",
      icon: "🟢",
      category: "实用道具",
      description: "展开后会在任何地方制造一片小型沼泽。曾被用来堵塞霍格沃茨走廊",
      basePrice: GsicklesToKnuts(2, 15),
      displayPrice: "2加隆15西可",
      stock: 8, maxsicklesToKnutstock: 8,
      buyable: true, sellable: false,
      effect: { type: "prank", swamp: true }
    },
    {
      id: "fake_scars",
      name: "假伤疤",
      icon: "🔴",
      category: "实用道具",
      description: "逼真的假伤疤贴纸，可以贴在任何地方。万圣节必备",
      basePrice: sicklesToKnuts(2),
      displayPrice: "2西可",
      stock: 100, maxsicklesToKnutstock: 100,
      buyable: true, sellable: false,
      effect: { type: "prank", fakesicklesToKnutscar: true }
    },
    {
      id: "extendable_ears",
      name: "伸缩耳",
      icon: "👂",
      category: "实用道具",
      description: "可以伸长的魔法耳朵，用来偷听远处的对话。注意不要被发现哦",
      basePrice: GsicklesToKnuts(3, 0),
      displayPrice: "3加隆",
      stock: 25, maxsicklesToKnutstock: 25,
      buyable: true, sellable: false,
      effect: { type: "prank", eavesdrop: true }
    },
    {
      id: "spectrespecs",
      name: "偷窥眼镜",
      icon: "👓",
      category: "实用道具",
      description: "可以看穿隐身衣和隐形物体的神奇眼镜。效果可能有点眼花缭乱",
      basePrice: GsicklesToKnuts(6, 5),
      displayPrice: "6加隆5西可",
      stock: 12, maxsicklesToKnutstock: 12,
      buyable: true, sellable: false,
      effect: { type: "prank", seeInvisible: true }
    },
    {
      id: "headless_hat",
      name: "无头帽",
      icon: "🎩",
      category: "实用道具",
      description: "戴上后头部会消失，只留下帽子悬浮在空中。吓唬同学的好工具",
      basePrice: GsicklesToKnuts(4, 0),
      displayPrice: "4加隆",
      stock: 18, maxsicklesToKnutstock: 18,
      buyable: true, sellable: false,
      effect: { type: "prank", headless: true }
    },

    // ── 迷情剂系列 ─────────────────────────────────────────────
    {
      id: "love_potion_perfume",
      name: "迷情剂香水",
      icon: "💘",
      category: "迷情剂系列",
      description: "含有迷情剂成分的香水，让闻到的人对你产生强烈的好感。注意使用道德！",
      basePrice: GsicklesToKnuts(8, 0),
      displayPrice: "8加隆",
      stock: 10, maxsicklesToKnutstock: 10,
      buyable: true, sellable: false,
      effect: { type: "prank", lovePotion: true }
    },
    {
      id: "amortentia_vial",
      name: "小瓶迷情剂",
      icon: "🧪",
      category: "迷情剂系列",
      description: "标准剂量的迷情剂，世界上最强的爱情魔药。谨慎使用！",
      basePrice: GsicklesToKnuts(10, 0),
      displayPrice: "10加隆",
      stock: 5, maxsicklesToKnutstock: 5,
      buyable: true, sellable: false,
      effect: { type: "prank", amortentia: true }
    },

    // ── 其他 ────────────────────────────────────────────
    {
      id: "wizard_chess_set",
      name: "会打人的巫师棋",
      icon: "♟️",
      category: "其他",
      description: "棋子会互相攻击的巫师棋套装，比普通巫师棋更刺激好玩",
      basePrice: GsicklesToKnuts(5, 0),
      displayPrice: "5加隆",
      stock: 15, maxsicklesToKnutstock: 15,
      buyable: true, sellable: false,
      effect: { type: "prank", fightingChess: true }
    },
    {
      id: "trick_wand",
      name: "恶作剧魔杖",
      icon: "🪄",
      category: "其他",
      description: "施咒时会变出意想不到的东西，可能是鲜花、烟火，或者是一只活蟾蜍哦",
      basePrice: GsicklesToKnuts(7, 10),
      displayPrice: "7加隆10西可",
      stock: 8, maxsicklesToKnutstock: 8,
      buyable: true, sellable: false,
      effect: { type: "prank", trickWand: true }
    },
  ]
};

export class WeasleyWheezessicklesToKnutshop extends BasesicklesToKnutshop {
  constructor() {
    super(WeasleyWheezesConfig);
    this.loyaltyLevels = WeasleyWheezesConfig.loyaltyLevels;
  }

  getCurrentLoyaltyLevel() {
    for (let i = this.loyaltyLevels.length - 1; i >= 0; i--) {
      if (this.loyaltyPoints >= this.loyaltyLevels[i].minPoints) {
        return this.loyaltyLevels[i];
      }
    }
    return this.loyaltyLevels[0];
  }

  getLoyaltyDiscount() {
    const currentLevel = this.getCurrentLoyaltyLevel();
    return currentLevel.discount;
  }

  getItemPrice(item, player) {
    let price = item.basePrice * this.discount;
    
    if (this.dailyDeal && this.dailyDeal.item.id === item.id) {
      price *= this.dailyDeal.discount;
    }
    
    const loyaltyDiscount = this.getLoyaltyDiscount();
    price *= (1 - loyaltyDiscount);
    
    return Math.floor(price);
  }

  buyItem(itemId, quantity, player) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return { success: false, message: "商品不存在" };

    const unitPrice = this.getItemPrice(item, player);
    const totalPrice = unitPrice * quantity;

    const totalKnutsOwned = window.currency?.getTotalKnuts?.() ?? 0;
    if (totalKnutsOwned < totalPrice) {
      const g = Math.floor(totalPrice / 493);
      const rem = totalPrice % 493;
      const s = Math.floor(rem / 29);
      const n = rem % 29;
      return { success: false, message: `金币不足，需要${g>0?g+"加隆 ":""}${s>0?s+"西可 ":""}${n>0?n+"纳特":""}` };
    }

    const g = Math.floor(totalPrice / 493);
    const rem = totalPrice % 493;
    const s = Math.floor(rem / 29);
    const n = rem % 29;
    window.currency?.spendMoney?.(g, s, n, `在韦斯莱魔法把戏坊购买${item.name}×${quantity}`);

    if (item.stock) item.stock -= quantity;
    this.loyaltyPoints += Math.floor(totalPrice / 10);

    if (window.updatesicklesToKnutshopsicklesToKnutstats) {
      window.updatesicklesToKnutshopsicklesToKnutstats(this.id, totalPrice, 'spent');
    }

    if (window.addsicklesToKnutshopItemsToBag) {
      window.addsicklesToKnutshopItemsToBag(item.id, item.name, quantity, item.icon);
    }

    const currentLevel = this.getCurrentLoyaltyLevel();
    let message = `成功购买 ${item.name}×${quantity}，花费${item.displayPrice || (g+"加隆 "+s+"西可 "+n+"纳特")}`;
    if (currentLevel.discount > 0) {
      message += `（会员折扣${Math.round(currentLevel.discount * 100)}% OFF）`;
    }

    return {
      success: true,
      message: message,
      totalPrice
    };
  }

  getWelcomeMessage(player) {
    const currentLevel = this.getCurrentLoyaltyLevel();
    let message = `${this.owner}说：欢迎回来，${currentLevel.name}！`;
    
    if (this.dailyDeal) {
      const discountPercent = Math.round((1 - this.dailyDeal.discount) * 100);
      message += `今日特价：${this.dailyDeal.item.name} ${discountPercent}% OFF！`;
    }
    
    return message;
  }
}

export default WeasleyWheezessicklesToKnutshop;

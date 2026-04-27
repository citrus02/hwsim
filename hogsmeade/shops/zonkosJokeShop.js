// hogsmeade/shops/zonkosJokeShop.js
// 佐科笑话店 · 丰富版
//
// 原著汇率：1加隆 = 17西可 = 493纳特
// 价格单位统一用「纳特」存储，显示时转换
// 参考原著购买力：
//   粪弹约3~5西可（学生零花钱级别）
//   臭丸约2~4西可
//   咬鼻子茶杯约1~2加隆（魔法恶作剧道具）
//   呕吐馅饼约5~8西可
//   昏迷花糖约12~15西可
//   秘鲁即时黑暗粉约5~8加隆（进口商品，较贵）
//   打嗝糖约3~5西可
//   假魔杖约5~8加隆
//   会咬人的钱包约1~2加隆
//   自动搅拌坩埚（恶作剧版）约2~3加隆

import { BaseShop } from '../baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);

export const ZonkosConfig = {
  id: "zonkos",
  name: "佐科笑话店",
  icon: "🃏",
  description: "霍格莫德最受欢迎的恶作剧道具商店，比韦斯莱魔法把戏坊早了至少两百年。费尔奇先生最痛恨的地方",
  owner: "佐科先生",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,

  items: [

    // ── 臭味系列 ────────────────────────────────────────────
    {
      id: "dungbomb",
      name: "粪弹",
      icon: "💩",
      category: "臭味系列",
      description: "佐科的招牌产品！扔出后爆发出令人窒息的恶臭。霍格沃茨走廊禁用——但从来没人遵守过这条校规",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 150, maxStock: 150,
      buyable: true, sellable: false,
      effect: { type: "prank", stench: true }
    },
    {
      id: "stink_pellets",
      name: "臭丸",
      icon: "👃",
      category: "臭味系列",
      description: "小巧的臭味小球，捏碎后散发浓烈气味。适合偷偷放在别人的书包里——他们会翻遍所有东西找臭源",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 200, maxStock: 200,
      buyable: true, sellable: false,
    },
    {
      id: "stink_bomb_set",
      name: "臭弹三连包",
      icon: "💣",
      category: "臭味系列",
      description: "粪弹×2 + 臭丸×3 的组合包，比单买便宜2西可。恶作剧入门者的最佳选择",
      basePrice: S(14),
      displayPrice: "14西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      packageItems: [
        { name: "粪弹", count: 2 },
        { name: "臭丸", count: 3 },
      ]
    },
    {
      id: "burp_powder",
      name: "打嗝粉",
      icon: "🤮",
      category: "臭味系列",
      description: "混入食物或饮料中可让人持续打嗝半小时的粉末。简单、经典、有效——而且很难追溯是谁干的",
      basePrice: S(4),
      displayPrice: "4西可",
      stock: 90, maxStock: 90,
      buyable: true, sellable: false,
    },

    // ── 身体反应系列 ────────────────────────────────────────
    {
      id: "puking_pasties",
      name: "呕吐馅饼",
      icon: "🥟",
      category: "身体反应系列",
      description: "吃下后立刻产生剧烈呕吐反应——别担心，只是暂时的。庞弗雷夫人最不想看到的东西之一。在魔药课上假装误食可以立刻被送去医疗翼",
      basePrice: S(7),
      displayPrice: "7西可",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
      effect: { type: "puking", duration: 15 }
    },
    {
      id: "fainting_fancies",
      name: "昏迷花糖",
      icon: "🌸",
      category: "身体反应系列",
      description: "粉色小糖果，吃后立刻软绵绵地倒下，约一分钟醒来。完全无害但能吓死你的朋友们。佐科警告：不要在上课铃响前吃",
      basePrice: S(13),
      displayPrice: "13西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      minYear: 4,
      effect: { type: "faint", duration: 20 }
    },
    {
      id: "nosebleed_nougat",
      name: "鼻血牛轧糖",
      icon: "🩸",
      category: "身体反应系列",
      description: "吃后鼻血直流——看起来像真的，其实是糖浆染色。从魔药课溜走的绝佳借口。不过庞弗雷夫人早就练就了一眼识破的本事",
      basePrice: S(7),
      displayPrice: "7西可",
      stock: 70, maxStock: 70,
      buyable: true, sellable: false,
      minYear: 3,
      effect: { type: "nosebleed", duration: 30 }
    },
    {
      id: "hiccough_sweets",
      name: "打嗝糖",
      icon: "😤",
      category: "身体反应系列",
      description: "吃下后疯狂打嗝，每打一次嗝嘴里都会冒出一股彩色蒸汽。在安静的图书馆或考试时吃有奇效——当然被发现的话后果自负",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 85, maxStock: 85,
      buyable: true, sellable: false,
      effect: { type: "hiccough", duration: 20 }
    },

    // ── 黑暗与隐身系列 ──────────────────────────────────────
    {
      id: "peruvian_instant_darkness_powder",
      name: "秘鲁即时黑暗粉",
      icon: "🌑",
      category: "隐身系列",
      description: "佐科从秘鲁进口的高档货！投掷后瞬间制造一片漆黑。德拉科·马尔福在六年级时曾用它从有求必应屋逃脱邓布利多军的包围——不过那是他从博金-博克买的",
      basePrice: G(6),
      displayPrice: "6加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      minYear: 5,
      effect: { type: "darkness", duration: 30 }
    },
    {
      id: "smoke_bomb_joke",
      name: "恶作剧烟雾弹",
      icon: "💨",
      category: "隐身系列",
      description: "佐科自制的烟雾弹，扔出后喷出彩色浓烟。效果不如秘鲁黑暗粉但便宜得多，还能选颜色——红色最受欢迎",
      basePrice: S(10),
      displayPrice: "10西可",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
      minYear: 2,
      effect: { type: "smoke", duration: 10 }
    },

    // ── 假道具系列 ──────────────────────────────────────────
    {
      id: "trick_wand",
      name: "恶作剧魔杖",
      icon: "🪄",
      category: "假道具",
      description: "看起来像一根真正的魔杖，但一挥就会变成一只橡皮鸡或喷出一股醋。最经典的是借给一年级的学弟学妹「试试这根，手感特别好」",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      effect: { type: "trick", random: true }
    },
    {
      id: "nose_biting_teacup",
      name: "咬鼻子茶杯",
      icon: "☕",
      category: "假道具",
      description: "一个看起来完全正常的茶杯，当你凑近喝茶时会突然弹出一张嘴巴咬住你的鼻子。佐科老字号经典款——据说已经在卖超过一百年了",
      basePrice: GS(1, 8),
      displayPrice: "1加隆8西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      minYear: 3,
    },
    {
      id: "biting_wallet",
      name: "咬人钱包",
      icon: "👛",
      category: "假道具",
      description: "一个看起来鼓鼓的钱包，放在地上等别人捡。捡起来时钱包会突然合上咬住手指——然后疯狂拍打地面。不用谢，这也是佐科的经典款",
      basePrice: GS(1, 5),
      displayPrice: "1加隆5西可",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      minYear: 2,
    },
    {
      id: "exploding_cards",
      name: "爆炸扑克牌",
      icon: "🃏",
      category: "假道具",
      description: "一副看起来普通的扑克牌，洗牌时会噼里啪啦发出小爆炸声并冒出火花。玩爆炸牌时你永远不知道下一张会不会炸——这才是乐趣所在",
      basePrice: S(15),
      displayPrice: "15西可",
      stock: 45, maxStock: 45,
      buyable: true, sellable: false,
    },
    {
      id: "self_propelling_ink",
      name: "自动喷射墨水",
      icon: "🖋️",
      category: "假道具",
      description: "看起来是一瓶普通墨水，但蘸笔时会突然喷出一大滴墨汁——正好溅在写字的人脸上。佐科经典日常整蛊道具",
      basePrice: S(6),
      displayPrice: "6西可",
      stock: 55, maxStock: 55,
      buyable: true, sellable: false,
    },

    // ── 烟火与特效 ──────────────────────────────────────────
    {
      id: "zokos_fireworks_basic",
      name: "佐科基础烟火",
      icon: "🎇",
      category: "烟火特效",
      description: "佐科自制的基础魔法烟火，能在空中绽放出佐科笑脸的标志。物美价廉，适合庆祝任何场合——或者纯粹为了好玩",
      basePrice: S(12),
      displayPrice: "12西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      minYear: 2,
    },
    {
      id: "zokos_fireworks_deluxe",
      name: "佐科豪华烟火",
      icon: "🎆",
      category: "烟火特效",
      description: "更大更亮的烟火，能变成动物形状——老鹰、马、甚至一条小龙。霍格沃茨魁地奇比赛后经常有人在校门外放这种烟火庆祝",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      minYear: 4,
    },
    {
      id: "fanged_flyer",
      name: "尖牙飞盘",
      icon: "🦷",
      category: "烟火特效",
      description: "扔出去会追着人跑的小飞盘，边飞边发出嗡嗡声并露出小尖牙。被咬到不太疼但绝对会吓一跳——然后你会追着扔飞盘的人满走廊跑",
      basePrice: S(8),
      displayPrice: "8西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      minYear: 2,
    },
    {
      id: "ever_bashing_boomerang",
      name: "自动回击回旋镖",
      icon: "🪃",
      category: "烟火特效",
      description: "扔出去一定会飞回来敲一下扔的人的头——无论你怎么躲。佐科说这是故意设计的，顾客们表示又爱又恨",
      basePrice: S(6),
      displayPrice: "6西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
    },

    // ── 恶作剧糖果 ──────────────────────────────────────────
    {
      id: "jelly_beans_prank",
      name: "恶作剧果冻豆（散装）",
      icon: "🫘",
      category: "恶作剧糖果",
      description: "佐科自己调制的恶作剧版果冻豆，口味包括但不限于：肥皂味、泥土味、蚯蚓味、旧袜子味。保证每一颗都很糟糕——这就是它的卖点",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 120, maxStock: 120,
      buyable: true, sellable: false,
    },
    {
      id: "foaming_gum",
      name: "疯狂泡泡糖",
      icon: "🫧",
      category: "恶作剧糖果",
      description: "嚼一下会在嘴里产生大量泡沫，从嘴巴和鼻子里冒出来——绿色的泡沫最受欢迎。清理起来很麻烦，但看别人的表情值得",
      basePrice: S(4),
      displayPrice: "4西可",
      stock: 75, maxStock: 75,
      buyable: true, sellable: false,
    },

    // ── 套装礼盒 ────────────────────────────────────────────
    {
      id: "beginner_prank_kit",
      name: "恶作剧新手包",
      icon: "🎒",
      category: "套装礼盒",
      description: "粪弹×2、臭丸×2、打嗝粉×1、爆炸扑克牌×1——佐科为新晋捣蛋鬼精心挑选的入门组合",
      basePrice: GS(1, 5),
      displayPrice: "1加隆5西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      packageItems: [
        { name: "粪弹", count: 2 },
        { name: "臭丸", count: 2 },
        { name: "打嗝粉", count: 1 },
        { name: "爆炸扑克牌", count: 1 },
      ]
    },
    {
      id: "zokos_deluxe_prank_kit",
      name: "佐科豪华恶作剧套装",
      icon: "🎁",
      category: "套装礼盒",
      description: "佐科精选：恶作剧魔杖×1、咬鼻子茶杯×1、自动回击回旋镖×1、呕吐馅饼×2、爆炸扑克牌×1。装在印有佐科笑脸的礼盒中",
      basePrice: G(9),
      displayPrice: "9加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      minYear: 4,
      packageItems: [
        { name: "恶作剧魔杖", count: 1 },
        { name: "咬鼻子茶杯", count: 1 },
        { name: "自动回击回旋镖", count: 1 },
        { name: "呕吐馅饼", count: 2 },
        { name: "爆炸扑克牌", count: 1 },
      ]
    },
  ],

  buybackItems: {
    "恶作剧材料": N(25),
    "恶臭草": N(15),
    "魔法粉末": N(20),
    "蝙蝠翅膀": N(15),
    "火药草": N(30),
  },

  specialFeature: {
    name: "恶作剧配方",
    description: "佐科先生私授你制作恶作剧道具的秘诀",
    cooldown: 24 * 60 * 60 * 1000,
    lastUsed: 0,

    async learnPrank(player, shop) {
      const recipes = [
        { name: "简易粪弹", materials: { "恶臭草": 2, "魔法粉末": 1 }, difficulty: "easy" },
        { name: "升级版粪弹", materials: { "恶臭草": 5, "魔法粉末": 3, "蝙蝠翅膀": 1 }, difficulty: "medium" },
        { name: "恶作剧烟雾弹", materials: { "魔法粉末": 4, "火药草": 2 }, difficulty: "medium" },
      ];

      const availableRecipes = recipes.filter(r =>
        !player.learnedPranks || !player.learnedPranks.includes(r.name)
      );

      if (availableRecipes.length === 0) {
        return { success: false, message: "你已经学会了佐科能教的所有配方！接下来你得自己去翻倒巷淘秘方了……" };
      }

      const recipe = availableRecipes[Math.floor(Math.random() * availableRecipes.length)];
      player.learnedPranks = player.learnedPranks || [];
      player.learnedPranks.push(recipe.name);

      const matList = Object.entries(recipe.materials).map(([m, c]) => `${m}×${c}`).join("、");

      return {
        success: true,
        message: `📝 佐科压低声音：「你看起来是个机灵的小巫师——听着，${recipe.name}的做法是：${matList}。别告诉费尔奇是我教你的。」`,
        recipe: recipe
      };
    }
  },

  specialEvents: [
    {
      id: "april_fools",
      name: "愚人节狂欢",
      condition: (date) => date.getMonth() === 3 && date.getDate() === 1,
      effect: (player, shop) => {
        shop.discount = 0.5;
        return { message: "🎭 愚人节快乐！佐科全场五折！这是全年唯一不骗你的时候——大概吧。" };
      }
    },
  ]
};

export class ZonkosJokeShop extends BaseShop {
  constructor() {
    super(ZonkosConfig);
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
      window.currency?.spendMoney?.(g, s, n, `在佐科笑话店购买 ${item.name}×${quantity}`);

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
              icon: matchedItem?.icon || "🃏"
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
// hogsmeade/shops/honeydukes.js
// 蜂蜜公爵糖果店 · 丰富版
//
// 原著汇率：1加隆 = 17西可 = 493纳特
// 价格单位统一用「纳特」存储，显示时转换
// 参考原著购买力：
//   巧克力蛙约11西可（《魔法石》火车上，哈利买了一大堆花了约11西可）
//   比比多味豆约3~4西可一包
//   南瓜馅饼约4~6西可
//   坩埚蛋糕约5~8西可
//   甘草魔杖约5~8西可
//   嘶嘶咻咻蜂约10~15西可
//   酸味爆爆糖约1加隆（能烧穿舌头，稍贵）
//   血味棒棒糖约12~15西可
//   蟑螂堆约3~5西可
//   冰老鼠约5~8西可
//   胡椒小顽童约5西可
//   吹宝超级泡泡糖约3~5西可

import { BaseShop } from '../baseShop.js';

// shop-bridge.js 已挂到 window
const { updateShopStats } = window;

// 换算工具
const G = (g) => g * 493;           // 加隆→纳特
const S = (s) => s * 29;            // 西可→纳特
const N = (n) => n;                  // 纳特
const GS = (g, s) => G(g) + S(s);   // 加隆+西可→纳特

export const HoneydukesConfig = {
  id: "honeydukes",
  name: "蜂蜜公爵糖果店",
  icon: "🍬",
  description: "魔法世界最著名的糖果店，安布罗修·弗鲁姆夫妇经营，霍格莫德必逛之地",
  owner: "安布罗修·弗鲁姆",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,

  items: [

    // ── 经典巧克力系列 ──────────────────────────────────────
    {
      id: "chocolate_frog",
      name: "巧克力蛙",
      icon: "🐸",
      category: "经典糖果",
      description: "施了魔法的巧克力，会像真青蛙一样跳动。每盒附赠一张著名巫师画片，可收藏",
      basePrice: S(11),           // 11西可（原著火车上价格）
      displayPrice: "11西可",
      stock: 150, maxStock: 150,
      buyable: true, sellable: false,
      effect: { type: "collect", cardChance: 0.3 }
    },
    {
      id: "cauldron_cakes",
      name: "坩埚蛋糕",
      icon: "🧁",
      category: "经典糖果",
      description: "形似小坩埚的浓郁巧克力蛋糕，内含三层巧克力夹心，霍格沃茨学生的最爱",
      basePrice: S(7),            // 7西可
      displayPrice: "7西可",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
    },
    {
      id: "chocolate_wand",
      name: "巧克力魔杖",
      icon: "🍫",
      category: "经典糖果",
      description: "纯巧克力制成的魔杖形状糖果，每根都包裹着不同果仁夹心",
      basePrice: S(9),            // 9西可
      displayPrice: "9西可",
      stock: 70, maxStock: 70,
      buyable: true, sellable: false,
    },

    // ── 多味豆与怪味糖 ──────────────────────────────────────
    {
      id: "bertie_botts_beans",
      name: "比比多味豆",
      icon: "🫘",
      category: "怪味糖果",
      description: "每一颗都是惊喜——或惊吓。正常口味：草莓、薄荷、椰子；怪异口味：耳垢、呕吐物、臭鸡蛋。真正的冒险家的选择",
      basePrice: S(4),            // 4西可
      displayPrice: "4西可",
      stock: 200, maxStock: 200,
      buyable: true, sellable: false,
      effect: { type: "random", flavors: ["草莓","薄荷","椰子","肉桂","菠菜","肝脏","耳垢","鼻涕","臭鸡蛋","呕吐物"] }
    },
    {
      id: "jelly_slugs",
      name: "果冻鼻涕虫",
      icon: "🐌",
      category: "怪味糖果",
      description: "绿色果冻质地，蠕动感逼真，但其实是甜甜的青苹果味",
      basePrice: S(5),            // 5西可
      displayPrice: "5西可",
      stock: 90, maxStock: 90,
      buyable: true, sellable: false,
    },
    {
      id: "cockroach_cluster",
      name: "蟑螂堆",
      icon: "🪳",
      category: "怪味糖果",
      description: "花生与焦糖混合制成的蟑螂形状糖果，嘎嘣脆。外表唬人但味道不错",
      basePrice: S(4),            // 4西可
      displayPrice: "4西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
    },

    // ── 气泡与爆炸糖 ────────────────────────────────────────
    {
      id: "fizzing_whizbees",
      name: "嘶嘶咻咻蜂",
      icon: "🐝",
      category: "气泡糖果",
      description: "吃到嘴里会发出嘶嘶声，身体会微微飘浮起来几英寸！霍格沃茨走廊里经常有人偷偷吃",
      basePrice: S(13),           // 13西可
      displayPrice: "13西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
      effect: { type: "float", duration: 30 }
    },
    {
      id: "exploding_bonbons",
      name: "爆炸夹心糖",
      icon: "💥",
      category: "气泡糖果",
      description: "咬开后会在嘴里轻微爆炸，释放出水果味气泡。绝对安全，但第一次吃的人都会被吓一跳",
      basePrice: S(12),           // 12西可
      displayPrice: "12西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      minYear: 3,
      effect: { type: "prank", damage: 0 }
    },
    {
      id: "droobles_blowing_gum",
      name: "吹宝超级泡泡糖",
      icon: "🫧",
      category: "气泡糖果",
      description: "能吹出蓝色巨大泡泡的泡泡糖，泡泡大到可以装满整个寝室，几天不破",
      basePrice: S(4),            // 4西可
      displayPrice: "4西可",
      stock: 120, maxStock: 120,
      buyable: true, sellable: false,
    },

    // ── 酸味与火辣系列 ──────────────────────────────────────
    {
      id: "acid_pops",
      name: "酸味爆爆糖",
      icon: "🔴",
      category: "极端糖果",
      description: "含酸量极高的糖果，据说能烧穿一个小洞在舌头上。霍格沃茨学生互相挑战的经典道具。蜂蜜公爵特别标注：6岁以下巫师禁用",
      basePrice: S(15),           // 15西可
      displayPrice: "15西可",
      stock: 45, maxStock: 45,
      buyable: true, sellable: false,
      minYear: 4,
      warning: "小心烫伤舌头！能烧穿锅底！"
    },
    {
      id: "pepper_imps",
      name: "胡椒小顽童",
      icon: "🌶️",
      category: "极端糖果",
      description: "吃到嘴里会喷出一小股火焰的胡椒味糖果，冬天暖身利器。弗鲁姆先生本人最爱的产品",
      basePrice: S(6),            // 6西可
      displayPrice: "6西可",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
      effect: { type: "fire_breath", duration: 5 }
    },
    {
      id: "ice_mice",
      name: "冰老鼠",
      icon: "🐭",
      category: "极端糖果",
      description: "吃下去后牙齿会发出咯吱咯吱的响声，嘴巴像含了冰块一样冰凉。夏天必备",
      basePrice: S(7),            // 7西可
      displayPrice: "7西可",
      stock: 75, maxStock: 75,
      buyable: true, sellable: false,
    },

    // ── 甘草与魔杖糖 ────────────────────────────────────────
    {
      id: "liquorice_wands",
      name: "甘草魔杖",
      icon: "🪄",
      category: "魔杖糖",
      description: "黑甘草糖做成魔杖形状，每根约8英寸长。含一根在嘴里走路，很有巫师派头",
      basePrice: S(6),            // 6西可
      displayPrice: "6西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
    },
    {
      id: "sugar_quills",
      name: "糖羽毛笔",
      icon: "✒️",
      category: "魔杖糖",
      description: "细长的糖丝做成羽毛笔形状，上课时可以假装在思考实则偷偷吮吸。多种水果口味可选",
      basePrice: S(5),            // 5西可
      displayPrice: "5西可",
      stock: 110, maxStock: 110,
      buyable: true, sellable: false,
    },

    // ── 糕点与馅饼 ──────────────────────────────────────────
    {
      id: "pumpkin_pasties",
      name: "南瓜馅饼",
      icon: "🥧",
      category: "糕点",
      description: "外皮酥脆、内馅香浓的南瓜馅饼，霍格沃茨特快上最受欢迎的小食，配一杯热南瓜汁更佳",
      basePrice: S(5),            // 5西可
      displayPrice: "5西可",
      stock: 100, maxStock: 100,
      buyable: true, sellable: false,
    },
    {
      id: "butterbeer_fudge",
      name: "黄油啤酒软糖",
      icon: "🍮",
      category: "糕点",
      description: "浓郁黄油啤酒风味的软糖，入口即化。不用去三把扫帚也能享受黄油啤酒的味道",
      basePrice: S(8),            // 8西可
      displayPrice: "8西可",
      stock: 70, maxStock: 70,
      buyable: true, sellable: false,
    },

    // ── 吸血鬼专区 ──────────────────────────────────────────
    {
      id: "blood_lollipops",
      name: "血味棒棒糖",
      icon: "🍭",
      category: "吸血鬼专区",
      description: "深红色棒棒糖，据说有淡淡的铁锈味。吸血鬼的最爱，普通人尝起来像樱桃汁",
      basePrice: S(14),           // 14西可
      displayPrice: "14西可",
      stock: 35, maxStock: 35,
      buyable: true, sellable: false,
      minYear: 4,
    },
    {
      id: "fanged_frisbees",
      name: "尖牙飞盘糖",
      icon: "🦇",
      category: "吸血鬼专区",
      description: "蝙蝠形状的薄荷糖，含在嘴里会微微震动，像真的在拍翅膀一样",
      basePrice: S(10),           // 10西可
      displayPrice: "10西可",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      minYear: 3,
    },

    // ── 礼盒与套装 ──────────────────────────────────────────
    {
      id: "sweet_sampler",
      name: "蜂蜜公爵尝鲜盒",
      icon: "🎁",
      category: "礼盒套装",
      description: "包含巧克力蛙×1、比比多味豆×1、甘草魔杖×1、吹宝泡泡糖×1、果冻鼻涕虫×1，适合第一次光顾的客人",
      basePrice: GS(1, 2),        // 1加隆2西可
      displayPrice: "1加隆2西可",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      packageItems: [
        { name: "巧克力蛙", count: 1 },
        { name: "比比多味豆", count: 1 },
        { name: "甘草魔杖", count: 1 },
        { name: "吹宝超级泡泡糖", count: 1 },
        { name: "果冻鼻涕虫", count: 1 },
      ]
    },
    {
      id: "extreme_sampler",
      name: "勇敢者挑战盒",
      icon: "🔥",
      category: "礼盒套装",
      description: "为真正的口味冒险家准备：酸味爆爆糖×1、胡椒小顽童×1、冰老鼠×1、蟑螂堆×1、比比多味豆×2",
      basePrice: GS(1, 10),       // 1加隆10西可
      displayPrice: "1加隆10西可",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      minYear: 4,
      packageItems: [
        { name: "酸味爆爆糖", count: 1 },
        { name: "胡椒小顽童", count: 1 },
        { name: "冰老鼠", count: 1 },
        { name: "蟑螂堆", count: 1 },
        { name: "比比多味豆", count: 2 },
      ]
    },
    {
      id: "chocolate_frog_box",
      name: "巧克力蛙收藏盒（12只）",
      icon: "📦",
      category: "礼盒套装",
      description: "一打巧克力蛙，附赠12张随机巫师画片。收集控的最爱！",
      basePrice: G(2),            // 2加隆
      displayPrice: "2加隆",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      packageItems: [
        { name: "巧克力蛙", count: 12 },
      ]
    },
  ],

  // 收购价目表（单位：纳特）
  buybackItems: {
    "花蜜":       N(25),
    "蜂蜜水":     N(30),
    "糖浆":       N(40),
    "巧克力原料": N(50),
    "薄荷叶":     N(15),
    "甘草根":     N(20),
  },

  specialFeature: {
    name: "糖果试吃",
    description: "每天可以免费试吃一种糖果，运气好能吃到昂贵的品种",
    cooldown: 24 * 60 * 60 * 1000,
    lastUsed: 0,

    async tasteTest(player, shop) {
      const now = Date.now();
      if (now - this.lastUsed < this.cooldown) {
        const remaining = Math.ceil((this.cooldown - (now - this.lastUsed)) / 3600000);
        return { success: false, message: `今天已经试吃过啦！${remaining}小时后可再次试吃` };
      }

      const freeCandies = shop.items.filter(item => item.buyable && item.basePrice <= S(10));
      const randomCandy = freeCandies[Math.floor(Math.random() * freeCandies.length)];

      this.lastUsed = now;

      // 如果试吃到多味豆，随机出一个口味
      let extraMessage = "";
      if (randomCandy.id === "bertie_botts_beans") {
        const flavors = randomCandy.effect?.flavors || ["草莓"];
        const randomFlavor = flavors[Math.floor(Math.random() * flavors.length)];
        const isBad = ["耳垢","鼻涕","臭鸡蛋","呕吐物","肝脏"].includes(randomFlavor);
        extraMessage = isBad ? ` 天哪，是${randomFlavor}味！你的表情扭曲了……` : ` 幸运！是${randomFlavor}味！`;
      }

      return {
        success: true,
        message: `你免费品尝了${randomCandy.name}！${this.getTasteDescription(randomCandy)}${extraMessage}`,
        item: randomCandy,
        effect: randomCandy.effect
      };
    },

    getTasteDescription(candy) {
      const descriptions = {
        "chocolate_frog": "巧克力蛙在你嘴里跳了三下才安静下来，浓郁的可可味在舌尖融化",
        "bertie_botts_beans": "你小心翼翼地咬开……",
        "pumpkin_pasties": "香甜的南瓜馅在嘴里散开，让你想起了霍格沃茨特快上的旅程",
        "cauldron_cakes": "三层巧克力依次化开，像坩埚里的魔药一样层次分明",
        "fizzing_whizbees": "嘶嘶的气泡从舌尖升起，你感觉自己轻了那么一点点！",
        "liquorice_wands": "甘草的微甜慢慢释放，你觉得自己看起来像个真正的巫师了",
        "acid_pops": "酸味瞬间爆开，你的舌头被刺痛了一下——但这正是它的魅力所在",
        "pepper_imps": "一小股火焰从你嘴里喷出！周围的人都吓了一跳",
        "ice_mice": "你的牙齿开始咯吱作响，冰爽的薄荷味让你抖了一下",
        "cockroach_cluster": "嘎嘣脆！花生和焦糖的香味充满口腔，根本不像虫子嘛",
        "sugar_quills": "甜丝丝的糖丝在舌尖融化，假装思考的你会心一笑",
        "blood_lollipops": "淡淡的铁锈味之后是浓郁的樱桃甜，你理解了为什么吸血鬼喜欢它",
        "jelly_slugs": "果冻在嘴里蠕动了一下，然后是清爽的青苹果味",
        "exploding_bonbons": "砰！一小声爆炸，水果气泡充满了你的嘴巴",
        "droobles_blowing_gum": "你吹出的蓝色泡泡飘向了天花板，估计要好几天才会破",
        "chocolate_wand": "果仁夹心在巧克力外壳破碎后露了出来，坚果香气四溢",
        "butterbeer_fudge": "黄油啤酒的风味在口中化开，温暖得像在三把扫帚的火炉边",
        "fanged_frisbees": "薄荷的清凉中夹杂着微微的震动，像真的有翅膀在扇动",
      };
      return descriptions[candy.id] || "味道不错，你满意地点了点头。";
    }
  },

  // 特殊活动（节假日）
  specialEvents: [
    {
      id: "halloween_sale",
      name: "万圣节特卖",
      condition: (date) => date.getMonth() === 9 && date.getDate() === 31,
      effect: (player, shop) => {
        shop.discount = 0.8;
        return { message: "🎃 万圣节快乐！蜂蜜公爵全场8折！酸味爆爆糖买二送一！" };
      }
    },
    {
      id: "christmas_candy",
      name: "圣诞糖果礼包",
      condition: (date) => date.getMonth() === 11 && date.getDate() >= 20,
      effect: (player, shop) => {
        const giftPack = {
          id: "christmas_pack",
          name: "🎄 圣诞糖果大礼包",
          icon: "🎅",
          category: "节日限定",
          description: "蜂蜜公爵圣诞特供：巧克力蛙×5、比比多味豆×10、南瓜馅饼×3、胡椒小顽童×3、冰老鼠×3",
          basePrice: G(2),
          displayPrice: "2加隆",
          stock: 50, maxStock: 50,
          buyable: true, sellable: false,
        };
        // 避免重复添加
        if (!shop.items.find(i => i.id === "christmas_pack")) {
          shop.items.push(giftPack);
        }
        return { message: "🎄 圣诞糖果大礼包限时上架！仅售2加隆！" };
      }
    },
    {
      id: "valentine_day",
      name: "情人节巧克力",
      condition: (date) => date.getMonth() === 1 && date.getDate() === 14,
      effect: (player, shop) => {
        shop.discount = 0.85;
        return { message: "💝 情人节快乐！全场85折，巧克力蛙买一赠一张画片！" };
      }
    }
  ]
};

// 创建糖果店实例
export class Honeydukes extends BaseShop {
  constructor() {
    super(HoneydukesConfig);
  }

  buyItem(itemId, quantity, player) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return { success: false, message: "商品不存在" };

    // 处理礼盒套装（packageItems）
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
      window.currency?.spendMoney?.(g, s, n, `在蜂蜜公爵购买 ${item.name}×${quantity}`);

      if (item.stock) item.stock -= quantity;
      this.loyaltyPoints += Math.floor(totalPrice / 10);

      if (typeof updateShopStats === 'function') {
        updateShopStats(this.id, totalPrice, 'spent');
      }

      // ✅ 收集画片消息
      const cardMessages = [];
      for (let i = 0; i < quantity; i++) {
        for (const pkg of item.packageItems) {
          const matchedItem = this.items.find(it => it.name === pkg.name);
          window.addItemToBag("item", {
            name: pkg.name,
            count: pkg.count,
            icon: matchedItem?.icon || "🍬"
          });

          if (pkg.name === "巧克力蛙") {
            for (let c = 0; c < pkg.count; c++) {
              const cardResult = this.drawWizardCard(player);
              if (cardResult) {
                cardMessages.push(cardResult.message);
                if (window.doStudyLog) {
                  window.doStudyLog(cardResult.message);
                }
              }
            }
          }
        }
      }

      if (window.doStudyLog) {
        window.doStudyLog(`🛒 ${item.name}×${quantity} — ${item.displayPrice || totalPrice + "纳特"}`);
      }

      // ✅ 拼接画片消息
      let finalMessage = `成功购买 ${item.name}×${quantity}，花费 ${item.displayPrice || totalPrice + "纳特"}`;
      if (cardMessages.length > 0) {
        finalMessage += '\n' + cardMessages.join('\n');
      }

      return { success: true, message: finalMessage, totalPrice };
    }

    // 普通物品走基类逻辑
    const result = super.buyItem(itemId, quantity, player);

    if (result.success && itemId === "chocolate_frog") {
      const cardResult = this.drawWizardCard(player);
      if (cardResult) {
        result.message += ` ${cardResult.message}`;
      }
    }

    return result;
  }

  drawWizardCard(player) {
    const cards = [
      { name: "阿不思·邓布利多", rarity: "传奇", emoji: "🧙‍♂️" },
      { name: "哈利·波特", rarity: "传奇", emoji: "⚡" },
      { name: "赫敏·格兰杰", rarity: "传奇", emoji: "📚" },
      { name: "米勒娃·麦格", rarity: "稀有", emoji: "🐱" },
      { name: "西弗勒斯·斯内普", rarity: "稀有", emoji: "🦇" },
      { name: "罗恩·韦斯莱", rarity: "稀有", emoji: "🦁" },
      { name: "鲁伯·海格", rarity: "稀有", emoji: "🌂" },
      { name: "纽特·斯卡曼德", rarity: "稀有", emoji: "🦄" },
      { name: "尼法朵拉·唐克斯", rarity: "普通", emoji: "💇" },
      { name: "塞德里克·迪戈里", rarity: "普通", emoji: "🦡" },
      { name: "卢娜·洛夫古德", rarity: "普通", emoji: "🌙" },
      { name: "纳威·隆巴顿", rarity: "普通", emoji: "🌿" },
      { name: "德拉科·马尔福", rarity: "普通", emoji: "🐍" },
      { name: "金妮·韦斯莱", rarity: "普通", emoji: "🔥" },
    ];

    const roll = Math.random();
    let pool;

    if (roll < 0.05) {
      pool = cards.filter(c => c.rarity === "传奇");
    } else if (roll < 0.25) {
      pool = cards.filter(c => c.rarity === "稀有");
    } else {
      pool = cards.filter(c => c.rarity === "普通");
    }

    const card = pool[Math.floor(Math.random() * pool.length)];

    if (!player.wizardCards) player.wizardCards = {};
    player.wizardCards[card.name] = (player.wizardCards[card.name] || 0) + 1;

    const data = JSON.parse(localStorage.getItem("hogwarts")) || {};
    if (!data.player) data.player = {};
    if (!data.player.wizardCards) data.player.wizardCards = {};
    data.player.wizardCards[card.name] = (data.player.wizardCards[card.name] || 0) + 1;

    if (!data.bag) data.bag = { material: [], potion: [], item: [], wizardCard: [] };
    if (!data.bag.wizardCard) data.bag.wizardCard = [];

    const existingCard = data.bag.wizardCard.find(c => c.name === card.name);
    if (existingCard) {
      existingCard.count += 1;
    } else {
      data.bag.wizardCard.push({
        name: card.name,
        icon: card.emoji,
        rarity: card.rarity,
        count: 1
      });
    }

    localStorage.setItem("hogwarts", JSON.stringify(data));
    if (window.renderBag) window.renderBag();

    const count = player.wizardCards[card.name];
    const firstTimeMsg = card.rarity === "传奇" && count === 1
      ? " ✨ 这是你的第一张传奇画片！"
      : count === 1 && card.rarity === "稀有"
        ? " 🌟 新画片入册！"
        : "";

    return {
      success: true,
      message: `🃏 获得巫师画片：${card.emoji} ${card.name}（${card.rarity}）！${firstTimeMsg}`
    };
  }
}
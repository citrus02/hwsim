// hogsmeade/shops/threeBroomsticks.js
// 三把扫帚酒吧 · 丰富版
//
// 原著汇率：1加隆 = 17西可 = 493纳特
// 价格单位统一用「纳特」存储，显示时转换
// 参考原著购买力：
//   黄油啤酒约2~4西可一杯（《凤凰社》哈利请秋·张喝过）
//   火焰威士忌约1~3加隆一瓶（烈酒，较贵）
//   鳃囊草汁约3~5西可（矿泉饮品）
//   南瓜汁约2~4西可（霍格沃茨日常饮品）
//   蜂蜜酒约1~2加隆（《混血王子》邓布利多爱喝，斯拉格霍恩送过罗恩）
//   红醋栗朗姆酒约1~2加隆
//   蛋奶酒约5~8西可（圣诞饮品）
//   热可可约3~5西可
//   雪利酒约8~15西可
//   烈性红酒约2~5加隆（《囚徒》中三把扫帚售卖的）

import { BaseShop } from '../baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);

export const ThreeBroomsticksConfig = {
  id: "three_broomsticks",
  name: "三把扫帚酒吧",
  icon: "🍺",
  description: "霍格莫德最热闹的酒吧，罗斯默塔女士以迷人风度和一流饮品闻名。整个霍格沃茨的师生周末都在这里",
  owner: "罗斯默塔女士",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,

  items: [

    // ── 经典热饮 ────────────────────────────────────────────
    {
      id: "butterbeer",
      name: "黄油啤酒",
      icon: "🍺",
      category: "经典热饮",
      description: "三把扫帚的招牌饮品！热乎乎的，带着黄油和奶香，还有一丝焦糖的甜味。霍格沃茨学生人人爱喝——冬天来一杯比什么都幸福。家养小精灵也会做，但罗斯默塔女士的配方独一无二",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 300, maxStock: 300,
      buyable: true, sellable: false,
      effect: { type: "warm", duration: 60 },
      bulkDiscount: { enabled: true, minQty: 3, discountRate: 0.85 }
    },
    {
      id: "hot_chocolate",
      name: "热可可",
      icon: "☕",
      category: "经典热饮",
      description: "浓郁的热巧克力，顶上浮着一层魔法打发的奶油——奶油永远不会化也不会塌。下雪天的最佳伴侣。可以加肉桂或棉花糖",
      basePrice: S(4),
      displayPrice: "4西可",
      stock: 150, maxStock: 150,
      buyable: true, sellable: false,
      effect: { type: "comfort", restore: 5 }
    },
    {
      id: "mulled_mead",
      name: "热蜂蜜酒",
      icon: "🍯",
      category: "经典热饮",
      description: "罗斯默塔女士自酿蜂蜜酒加热后加入肉桂和丁香——冬天来一杯暖到脚尖。邓布利多教授偶尔会派人来买一整桶",
      basePrice: GS(1, 5),
      displayPrice: "1加隆5西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      minYear: 2,
      effect: { type: "warm", duration: 90 }
    },
    {
      id: "eggnog_christmas",
      name: "圣诞蛋奶酒",
      icon: "🥛",
      category: "经典热饮",
      description: "只在圣诞季供应的浓郁蛋奶酒，加了肉豆蔻和一丝魔法香料。罗斯默塔女士每年十二月亲手调制——来得晚就喝不到了",
      basePrice: S(8),
      displayPrice: "8西可",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      seasonal: "winter",
      minYear: 2,
    },

    // ── 冷饮与果汁 ──────────────────────────────────────────
    {
      id: "pumpkin_juice",
      name: "冰镇南瓜汁",
      icon: "🎃",
      category: "冷饮",
      description: "霍格沃茨食堂每餐必备的经典饮品——但三把扫帚的版本加了冰块和一小枝薄荷，比学校食堂的好喝十倍。夏天户外座位区的首选",
      basePrice: S(2),
      displayPrice: "2西可",
      stock: 200, maxStock: 200,
      buyable: true, sellable: false,
      effect: { type: "refresh", restore: 5 }
    },
    {
      id: "gillywater",
      name: "鳃囊草汁",
      icon: "💧",
      category: "冷饮",
      description: "加了薄荷和一丝鳃囊草提取物的矿泉饮品，清澈透亮，味道清新。据说喝了之后游泳都能游得更快——虽然可能只是心理作用",
      basePrice: S(4),
      displayPrice: "4西可",
      stock: 120, maxStock: 120,
      buyable: true, sellable: false,
      effect: { type: "hydrate", restore: 15 }
    },
    {
      id: "cherry_syrup_soda",
      name: "樱桃糖浆汽水",
      icon: "🍒",
      category: "冷饮",
      description: "鲜红透亮的魔法汽水，底部有樱桃糖浆，喝前需要用魔杖搅拌一下——气泡会变成小精灵的形状飘出来。孩子们的最爱",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
      effect: { type: "joy", duration: 30 }
    },

    // ── 烈酒与成人饮品 ──────────────────────────────────────
    {
      id: "firewhisky",
      name: "火焰威士忌",
      icon: "🥃",
      category: "烈酒",
      description: "传奇的魔法烈酒，一口下去喉咙像着了火——然后暖意扩散到全身。奥格登陈酿是最出名的品牌。罗斯默塔女士只卖给六年级以上的学生，而且严格限量",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
      minYear: 6,
      effect: { type: "courage", boost: 10 }
    },
    {
      id: "mead",
      name: "陈年蜂蜜酒",
      icon: "🍷",
      category: "烈酒",
      description: "罗斯默塔女士自酿的招牌蜜酒，在橡木桶里陈了至少三年才拿出来卖。琥珀色，口感醇厚。当年斯拉格霍恩教授送了一瓶给刚被下毒的罗恩·韦斯莱——当然那瓶被下了迷情剂",
      basePrice: GS(1, 10),
      displayPrice: "1加隆10西可",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
      minYear: 4,
    },
    {
      id: "redcurrant_rum",
      name: "红醋栗朗姆酒",
      icon: "🫐",
      category: "烈酒",
      description: "浓郁的朗姆酒基底加入了红醋栗的酸甜，是三把扫帚的特色调酒。粉红色的酒液在烛光下格外好看，是情侣约会的热门选择",
      basePrice: GS(1, 8),
      displayPrice: "1加隆8西可",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      minYear: 5,
    },
    {
      id: "oak_matured_wine",
      name: "橡木陈酿红酒",
      icon: "🍾",
      category: "烈酒",
      description: "从法国魔法酒庄进口的红酒，在三把扫帚的地窖里又存了几年。只有在特别的日子罗斯默塔女士才会开一瓶——比如有人考过了N.E.W.T.s",
      basePrice: G(4),
      displayPrice: "4加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      minYear: 6,
    },

    // ── 下酒小食 ────────────────────────────────────────────
    {
      id: "bar_snacks_mixed",
      name: "酒吧小食拼盘",
      icon: "🥨",
      category: "小食",
      description: "罗斯默塔女士每天现烤的小食：魔法椒盐卷饼（会自己蘸酱）、芝士条（拉丝到一臂长）、还有一小碟腌魔法橄榄",
      basePrice: S(8),
      displayPrice: "8西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
    },
    {
      id: "cheese_board",
      name: "巫师芝士拼盘",
      icon: "🧀",
      category: "小食",
      description: "三种魔法芝士：一种会在嘴里冒泡，一种会让人短暂地哼唱小曲，一种就是普通的好芝士。配饼干和蜂蜜",
      basePrice: S(12),
      displayPrice: "12西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      minYear: 3,
    },
    {
      id: "cauldron_stew",
      name: "坩埚炖菜（一人份）",
      icon: "🍲",
      category: "小食",
      description: "真正用小号坩埚端上来的炖菜！牛肉、土豆和胡萝卜的经典组合，配一块硬面包。寒冷天气来一份能顶一整天——海格每次来都点两份",
      basePrice: S(10),
      displayPrice: "10西可",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
    },

    // ── 派对套餐 ────────────────────────────────────────────
    {
      id: "butterbeer_party_pack",
      name: "黄油啤酒派对装（6杯）",
      icon: "🎉",
      category: "派对套餐",
      description: "六杯黄油啤酒装在一个会自动保温的魔法托盘上。魁地奇比赛后请全队喝一轮的最佳选择——比单买六杯便宜",
      basePrice: S(15),
      displayPrice: "15西可",
      stock: 30, maxStock: 30,
      buyable: true, sellable: false,
      packageItems: [
        { name: "黄油啤酒", count: 6 },
      ]
    },
    {
      id: "winter_warmer_set",
      name: "冬日暖身套餐",
      icon: "🔥",
      category: "派对套餐",
      description: "黄油啤酒×2 + 热可可×1 + 坩埚炖菜×1 + 酒吧小食拼盘×1——霍格莫德周末的完美午餐组合",
      basePrice: GS(1, 5),
      displayPrice: "1加隆5西可",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
      packageItems: [
        { name: "黄油啤酒", count: 2 },
        { name: "热可可", count: 1 },
        { name: "坩埚炖菜（一人份）", count: 1 },
        { name: "酒吧小食拼盘", count: 1 },
      ]
    },
  ],

  buybackItems: {
    "蜂蜜水": N(25),
    "南瓜": N(15),
    "麦芽": N(40),
    "红醋栗": N(30),
    "橡木桶": N(100),
    "魔法香料": N(50),
  },

  specialFeature: {
    name: "酒馆闲聊",
    description: "和罗斯默塔女士或其他客人聊天，获取霍格沃茨的小道消息",
    cooldown: 2 * 60 * 60 * 1000,

    async gossip(player, shop) {
      const rumors = [
        { type: "secret", message: "「听说图书馆禁书区藏着一个密室……不过我可没告诉你。」她眨眨眼，把声音压得很低。" },
        { type: "quest", message: "「有个一年级学生丢了宠物猫，到处贴寻猫启事。你要是能帮忙找到，小家伙肯定会感激不尽。」" },
        { type: "warning", message: "「最近禁林里有不寻常的动静——海格说是马人搬家，但我觉得没那么简单。别跑太深了，听见没？」" },
        { type: "reward", message: "「钟楼顶层能看到最美的星空——我以前在霍格沃茨读书时常去。带上望远镜，你不会后悔的。」" },
        { type: "history", message: "「你知道三把扫帚开了多少年吗？超过三百年！当年戈德里克·格兰芬多本人还来喝过一杯呢——至少酒馆传说是这么说的。」" },
        { type: "gossip", message: "「麦格教授年轻时被咬鼻子茶杯咬过——整个教师休息室笑了整整一个星期。别告诉她是我说的。」" },
      ];

      const rumor = rumors[Math.floor(Math.random() * rumors.length)];
      player.receivedRumors = player.receivedRumors || [];

      if (!player.receivedRumors.includes(rumor.type)) {
        player.receivedRumors.push(rumor.type);
        return { success: true, message: rumor.message, rumor: rumor };
      }

      return { success: true, message: "罗斯默塔女士擦着杯子：「今天没什么新鲜事，亲爱的。再来一杯？」" };
    }
  },

  specialEvents: [
    {
      id: "quidditch_final",
      name: "魁地奇决赛之夜",
      condition: (date, gameState) => gameState?.quidditchSeason === true,
      effect: (player, shop) => {
        shop.discount = 0.7;
        return { message: "🏆 魁地奇决赛夜！三把扫帚全场7折！黄油啤酒快卖疯了——快抢！" };
      }
    },
    {
      id: "snow_day",
      name: "初雪日特惠",
      condition: (date) => date.getMonth() === 11 && date.getDate() <= 7,
      effect: (player, shop) => {
        shop.discount = 0.8;
        return { message: "❄️ 霍格莫德初雪！热饮全部8折——进来暖一暖吧！" };
      }
    },
    {
      id: "valentine_day",
      name: "情人节特饮",
      condition: (date) => date.getMonth() === 1 && date.getDate() === 14,
      effect: (player, shop) => {
        shop.discount = 0.85;
        return { message: "💝 情人节快乐！和心上人一起来，第二杯半价！" };
      }
    },
  ]
};

export class ThreeBroomsticks extends BaseShop {
  constructor() {
    super(ThreeBroomsticksConfig);
    this.todaySpecial = null;
    this.generateTodaySpecial();
  }

  generateTodaySpecial() {
    const drinks = this.items.filter(item =>
      item.category === "经典热饮" || item.category === "冷饮"
    );
    this.todaySpecial = drinks[Math.floor(Math.random() * drinks.length)];
  }

  getWelcomeMessage(player) {
    let message = `${this.owner}："欢迎来到三把扫帚！今天的推荐是——${this.todaySpecial?.name || '黄油啤酒'}！"`;

    if (player.quidditchTeam) {
      message += " 听说你打魁地奇？第二杯半价！";
    }

    return message;
  }

  buyItem(itemId, quantity, player) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return { success: false, message: "商品不存在" };

    // 套餐走 packageItems 逻辑
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
      window.currency?.spendMoney?.(g, s, n, `在三把扫帚购买 ${item.name}×${quantity}`);

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
              icon: matchedItem?.icon || "🍺"
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

    // 第二杯半价优惠（魁地奇球员专属）
    if (player.quidditchTeam && itemId === "butterbeer" && quantity >= 2) {
      const originalPrice = this.getItemPrice(item, player);
      const halfPrice = Math.floor(originalPrice / 2);
      const totalPrice = originalPrice * (quantity - 1) + halfPrice;

      const totalKnutsOwned = window.currency?.getTotalKnuts?.() ?? 0;
      if (totalKnutsOwned < totalPrice) {
        return { success: false, message: "加隆不足" };
      }

      const g = Math.floor(totalPrice / 493);
      const rem = totalPrice % 493;
      const s = Math.floor(rem / 29);
      const n = rem % 29;
      window.currency?.spendMoney?.(g, s, n, `在三把扫帚购买 ${item.name}×${quantity}（第二杯半价）`);

      if (item.stock) item.stock -= quantity;
      this.loyaltyPoints += Math.floor(originalPrice * quantity / 10);

      if (window.addShopItemToBag) {
        window.addShopItemToBag(item.id, item.name, quantity, item.icon);
      }

      return {
        success: true,
        message: `成功购买黄油啤酒 x${quantity}，第二杯半价！花费 ${item.displayPrice || totalPrice + "纳特"}`,
        totalPrice
      };
    }

    return super.buyItem(itemId, quantity, player);
  }
}
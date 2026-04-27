// hogsmeade/shops/furFeatherPet.js
// 毛羽宠物小店 · 丰富版
//
// 原著汇率：1加隆 = 17西可 = 493纳特
// 价格单位统一用「纳特」存储，显示时转换
// 参考原著购买力：
//   猫头鹰约10~15加隆（《魔法石》海格送哈利的生日礼物）
//   老鼠约1~3加隆（《阿兹卡班囚徒》罗恩的斑斑）
//   猫约8~15加隆（《魔法石》赫敏买了克鲁克山）
//   蟾蜍约2~5加隆（《魔法石》纳威的莱福）
//   猫头鹰零食约2~5西可/袋
//   猫狸子食盆约1~2加隆
//   宠物笼约3~8加隆
//   宠物项圈约1~3加隆
//   宠物玩具约3~10西可
//   宠物梳子约5~10西可
//   宠物窝约2~5加隆

import { BaseShop } from '../baseShop.js';

const G = (g) => g * 493;
const S = (s) => s * 29;
const N = (n) => n;
const GS = (g, s) => G(g) + S(s);

export const FurFeatherPetConfig = {
  id: "fur_feather_pet",
  name: "毛羽宠物小店",
  icon: "🐾",
  description: "霍格莫德唯一的宠物用品店，从猫头鹰食盆到龙皮项圈应有尽有。店后面有一排笼子住着几只待售的魔法宠物——它们隔三差五会用叫声和你打招呼",
  owner: "芬恩·毛羽",
  openYears: [1, 2, 3, 4, 5, 6, 7],
  minLevel: 1,

  items: [

    // ── 猫头鹰饲料 ──────────────────────────────────────────
    {
      id: "owl_feed_basic",
      name: "猫头鹰基础饲料（一袋）",
      icon: "🦉",
      category: "猫头鹰饲料",
      description: "毛羽小店最畅销的产品——脱水田鼠干混合魔法谷物，营养均衡。霍格沃茨所有猫头鹰棚的猫头鹰都吃这个。一只成年猫头鹰一袋能吃约两周",
      basePrice: S(4),
      displayPrice: "4西可",
      stock: 120, maxStock: 120,
      buyable: true, sellable: false,
    },
    {
      id: "owl_feed_premium",
      name: "猫头鹰高级饲料（一袋）",
      icon: "🐭",
      category: "猫头鹰饲料",
      description: "田鼠干的基础上加了魔法蚯蚓粉和燕尾草提取物——据说能让猫头鹰飞得比飞天扫帚还快。毛羽先生自己给店里的猫头鹰喂这个，它们确实飞得很快",
      basePrice: S(8),
      displayPrice: "8西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
      effect: { type: "owl_speed", boost: 10 }
    },
    {
      id: "owl_treat_pouch",
      name: "猫头鹰零食小袋",
      icon: "🐀",
      category: "猫头鹰饲料",
      description: "浓缩魔法肉干——每袋只有五颗，但每颗都富含猫头鹰长途飞行所需的所有营养。适合奖励你的猫头鹰，或者哄一只心情不好的猫头鹰开心",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
    },

    // ── 猫狸子饲料 ──────────────────────────────────────────
    {
      id: "cat_food_basic",
      name: "猫狸子基础食粮（一袋）",
      icon: "🐱",
      category: "猫饲料",
      description: "专为魔法猫科动物设计的猫粮——普通猫也可以吃，但会多长出一些魔法光泽的毛发。赫敏的克鲁克山就是吃这个牌子的猫粮长大的，看看那毛发多漂亮",
      basePrice: S(5),
      displayPrice: "5西可",
      stock: 80, maxStock: 80,
      buyable: true, sellable: false,
    },
    {
      id: "cat_treats_salmon",
      name: "魔法三文鱼猫零食",
      icon: "🐟",
      category: "猫饲料",
      description: "每条小鱼干都浸过猫薄荷精油——不是普通的猫薄荷，是霍格沃茨温室里种的魔法品种。猫闻到后会在你的腿上打滚至少五分钟。克鲁克山看了都想再来一包",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
    },

    // ── 其他宠物饲料 ────────────────────────────────────────
    {
      id: "toad_food",
      name: "蟾蜍专用饲料",
      icon: "🐸",
      category: "其他饲料",
      description: "为蟾蜍特别调配的饲料颗粒——会自行漂浮在水面，让蟾蜍吃起来更方便。纳威·隆巴顿的莱福从小就吃这个。一袋够一只成年蟾蜍吃一个月",
      basePrice: S(2),
      displayPrice: "2西可",
      stock: 50, maxStock: 50,
      buyable: true, sellable: false,
    },
    {
      id: "rat_food",
      name: "魔法鼠鼠粮",
      icon: "🐀",
      category: "其他饲料",
      description: "小型啮齿魔法宠物的口粮——当然也适用普通老鼠。每颗干粮都经过魔法压缩，一颗顶普通鼠粮三颗。罗恩的斑斑失踪前就是吃这个的——跟饲料没关系，斑斑自己有问题",
      basePrice: S(2),
      displayPrice: "2西可",
      stock: 60, maxStock: 60,
      buyable: true, sellable: false,
    },
    {
      id: "puffskein_food",
      name: "蒲绒绒饲料",
      icon: "🟡",
      category: "其他饲料",
      description: "蒲绒绒喜欢吃的小颗粒——看上去像彩色糖屑，其实是用花粉和蜂蜜压缩成的。喂食时蒲绒绒会用舌头卷住你的手指，非常可爱。金妮有一只叫阿诺德的",
      basePrice: S(3),
      displayPrice: "3西可",
      stock: 40, maxStock: 40,
      buyable: true, sellable: false,
    },

    // ── 宠物笼子 ────────────────────────────────────────────
    {
      id: "owl_cage_standard",
      name: "标准猫头鹰笼",
      icon: "🕊️",
      category: "笼具",
      description: "镀锡铁丝编织的猫头鹰笼，大小适合一只成年灰林鸮。自带自清洁咒——每周只需念一次咒语激活。底部的树枝站架可以自动替换新鲜树枝",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 12, maxStock: 12,
      buyable: true, sellable: false,
      minYear: 1,
    },
    {
      id: "cat_carrier",
      name: "魔法猫笼",
      icon: "🧺",
      category: "笼具",
      description: "比看起来内部空间大得多——内部扩展咒是你的猫应该习惯的事情。侧面有小窗让猫可以看到外面，但如果猫不想被打扰，窗会自动变成深色",
      basePrice: G(6),
      displayPrice: "6加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      minYear: 2,
    },
    {
      id: "toad_terrarium",
      name: "蟾蜍魔法饲养箱",
      icon: "🪴",
      category: "笼具",
      description: "自带微型气候咒——箱内永远保持蟾蜍最喜欢的湿度。里面有一块会自己长苔藓的石头和一个小水池。纳威说莱福搬进去后再也没逃跑过",
      basePrice: G(4),
      displayPrice: "4加隆",
      stock: 6, maxStock: 6,
      buyable: true, sellable: false,
      minYear: 2,
    },

    // ── 项圈与配件 ──────────────────────────────────────────
    {
      id: "dragon_hide_collar",
      name: "龙皮项圈",
      icon: "🐉",
      category: "配件",
      description: "龙皮打造——比你自己的龙皮手套还耐用。上面有自动扣合咒，猫咪不管怎么蹭都不会松开。有红绿蓝黑四种颜色可选，配一小块刻名牌的银牌",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      minYear: 2,
    },
    {
      id: "owl_leg_ring",
      name: "猫头鹰脚环",
      icon: "💍",
      category: "配件",
      description: "银制的猫头鹰脚环，刻有追踪咒——如果你的猫头鹰在暴风雨中迷路了，可以用魔杖激活脚环找到它的位置。邮寄猫头鹰的主人几乎人手一个",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      minYear: 3,
    },
    {
      id: "pet_name_tag",
      name: "魔法宠物名牌",
      icon: "🏷️",
      category: "配件",
      description: "一块会自动更换信息的银牌——宠物名字、主人姓名、霍格沃茨学院都会显示。如果宠物走丢了，好人看到名牌会帮你送回来——坏人看到魔法警告咒会被吓跑",
      basePrice: GS(1, 5),
      displayPrice: "1加隆5西可",
      stock: 20, maxStock: 20,
      buyable: true, sellable: false,
    },

    // ── 玩具与美容 ──────────────────────────────────────────
    {
      id: "catnip_mouse_toy",
      name: "魔法猫薄荷老鼠",
      icon: "🐭",
      category: "玩具美容",
      description: "一只毛毡做的老鼠玩具，充满了霍格沃茨级猫薄荷——你的猫会疯狂地追着它满寝室跑。最棒的是，老鼠会在被抓住时吱吱叫两声然后瞬间移动到房间另一端",
      basePrice: S(8),
      displayPrice: "8西可",
      stock: 25, maxStock: 25,
      buyable: true, sellable: false,
    },
    {
      id: "owl_perch_swing",
      name: "猫头鹰秋千站架",
      icon: "🎠",
      category: "玩具美容",
      description: "一个可以挂在窗户上的小型站架，带微风吹拂咒——猫头鹰站在上面时会感到像在天空飞翔一样舒适。在寝室里养猫头鹰的学生最爱买",
      basePrice: G(3),
      displayPrice: "3加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      minYear: 3,
    },
    {
      id: "pet_grooming_kit",
      name: "宠物美容套装",
      icon: "✂️",
      category: "玩具美容",
      description: "包含一把自动梳理刷、一瓶宠物亮毛喷雾、和一把安全剪刀——剪刀会自动避开宠物的皮肤，绝对不会剪伤。适用于猫、猫头鹰、甚至蒲绒绒",
      basePrice: G(2),
      displayPrice: "2加隆",
      stock: 15, maxStock: 15,
      buyable: true, sellable: false,
      minYear: 2,
    },
    {
      id: "self_warming_pet_bed",
      name: "自暖宠物窝",
      icon: "🛏️",
      category: "玩具美容",
      description: "一个柔软的圆形宠物窝，底部有恒温咒——冬天会自动变暖，夏天会自动变凉。不管是猫还是猫头鹰都会赖在上面不肯下来。海格给他的大猎犬牙牙买了XXL号",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 10, maxStock: 10,
      buyable: true, sellable: false,
      minYear: 3,
    },

    // ── 套装礼盒 ────────────────────────────────────────────
    {
      id: "new_owl_owner_kit",
      name: "新猫头鹰主人套装",
      icon: "🦉",
      category: "套装礼盒",
      description: "猫头鹰基础饲料×2 + 猫头鹰零食小袋×1 + 猫头鹰脚环×1 + 猫头鹰秋千站架×1——如果你刚收到人生的第一只猫头鹰，毛羽先生说这是最实用的入门组合",
      basePrice: G(8),
      displayPrice: "8加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      minYear: 3,
      packageItems: [
        { name: "猫头鹰基础饲料（一袋）", count: 2 },
        { name: "猫头鹰零食小袋", count: 1 },
        { name: "猫头鹰脚环", count: 1 },
        { name: "猫头鹰秋千站架", count: 1 },
      ]
    },
    {
      id: "happy_cat_kit",
      name: "开心猫咪套装",
      icon: "😸",
      category: "套装礼盒",
      description: "猫狸子基础食粮×2 + 魔法三文鱼猫零食×2 + 魔法猫薄荷老鼠×1 + 龙皮项圈×1——毛羽先生打包票：你的猫收到这个会比你收到圣诞礼物还开心",
      basePrice: G(5),
      displayPrice: "5加隆",
      stock: 8, maxStock: 8,
      buyable: true, sellable: false,
      minYear: 2,
      packageItems: [
        { name: "猫狸子基础食粮（一袋）", count: 2 },
        { name: "魔法三文鱼猫零食", count: 2 },
        { name: "魔法猫薄荷老鼠", count: 1 },
        { name: "龙皮项圈", count: 1 },
      ]
    },
  ],

  buybackItems: {
    "旧宠物笼":   N(100),
    "旧项圈":     N(30),
    "旧脚环":     N(20),
    "宠物玩具":   N(10),
    "宠物梳子":   N(15),
  },

  specialFeature: {
    name: "宠物免费体检",
    description: "毛羽先生可以免费帮你检查一次宠物——看看有没有生病、需要什么营养",
    cooldown: 24 * 60 * 60 * 1000,
    lastUsed: 0,

    async petCheckup(player, shop) {
      const now = Date.now();
      if (now - this.lastUsed < this.cooldown) {
        const remaining = Math.ceil((this.cooldown - (now - this.lastUsed)) / 3600000);
        return { success: false, message: `毛羽先生摆摆手：「一天只能给一只宠物做检查——多了我眼睛吃不消。」${remaining}小时后再来` };
      }

      this.lastUsed = now;

      const results = [
        { message: "毛羽先生仔细看了看你的宠物：「健康得很！羽毛/毛发很有光泽——继续保持现在喂的饲料，没什么需要担心的。」", advice: "all_good" },
        { message: "「嗯——」毛羽先生皱起眉头，「你家宠物该换饲料了。我给你写个推荐。」他从柜台下面拿出一袋高级饲料，「试这个，包你的小家伙更精神。」", advice: "upgrade_food" },
        { message: "毛羽先生给宠物做了一次快速检查后笑了：「你家这孩子该理理毛了——来，送你一把梳子，算我请的。」他塞给你一把宠物梳理刷。", advice: "grooming" },
        { message: "「好消息——你家宠物一切正常。不过它该多运动了。」他从架子上拿下一个宠物玩具，「玩玩这个，保证比现在活泼。」", advice: "more_play" },
      ];

      const result = results[Math.floor(Math.random() * results.length)];

      return { success: true, message: result.message, advice: result.advice };
    }
  },

  specialEvents: [
    {
      id: "start_of_term",
      name: "开学季宠物用品节",
      condition: (date) => date.getMonth() === 8 && date.getDate() >= 25,
      effect: (player, shop) => {
        shop.discount = 0.85;
        return { message: "🎒 开学季！所有宠物饲料8.5折——给小家伙们备好一个学期的口粮！" };
      }
    },
    {
      id: "christmas_pet",
      name: "圣诞宠物礼物",
      condition: (date) => date.getMonth() === 11 && date.getDate() >= 15,
      effect: (player, shop) => {
        shop.discount = 0.8;
        return { message: "🎄 圣诞节快到了！宠物玩具和套装8折——给你家毛茸茸的小家伙也挑个礼物吧！" };
      }
    },
  ]
};

export class FurFeatherPet extends BaseShop {
  constructor() {
    super(FurFeatherPetConfig);
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
      window.currency?.spendMoney?.(g, s, n, `在毛羽宠物小店购买 ${item.name}×${quantity}`);

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
              icon: matchedItem?.icon || "🐾"
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
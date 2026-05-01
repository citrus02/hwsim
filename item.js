// item.js — 道具数据定义 + 使用逻辑
// 基于哈利波特原著整理，涵盖可使用道具与展示/收藏道具
// 与 bag-system.js 中的 useItem() 配合使用

import { getSave, setSave } from './save-system.js';

// ─────────────────────────────────────────────
// 道具数据表
// usable: true  → 背包中可点击使用
// usable: false → 展示/收藏道具，无法直接使用
// effect: 描述道具效果（供 applyItemEffect 读取）
// ─────────────────────────────────────────────

export const ITEM_DATA = [

  // ══════════════════════════════════════════
  // 【糖果 & 食品】——蜂蜜公爵 / 原著出处
  // ══════════════════════════════════════════

  {
    name: "比比多味豆",
    icon: "🫘",
    category: "糖果",
    usable: true,
    description: "每颗口味完全随机——草莓、薄荷等美味固然有，但耳垢、鼻涕、呕吐物的概率同样不低。韦斯莱兄弟是资深品鉴专家，哈利和罗恩在对角巷的糖果名声大振后就爱上了这个。",
    effect: {
      type: "random_flavor",
      goodFlavors: [
        { name: "草莓", emoji: "🍓" },
        { name: "薄荷", emoji: "🌿" },
        { name: "椰子", emoji: "🥥" },
        { name: "肉桂", emoji: "🟤" },
        { name: "奶油太妃", emoji: "🍮" },
        { name: "巧克力", emoji: "🍫" },
        { name: "柠檬", emoji: "🍋" },
        { name: "蓝莓", emoji: "🫐" },
      ],
      badFlavors: [
        { name: "菠菜", emoji: "🥬" },
        { name: "肝脏", emoji: "🫁" },
        { name: "耳垢", emoji: "👂" },
        { name: "鼻涕", emoji: "🤧" },
        { name: "臭鸡蛋", emoji: "🥚" },
        { name: "呕吐物", emoji: "🤢" },
        { name: "草坪剪草", emoji: "🌾" },
        { name: "腐鱼", emoji: "🐟" },
      ],
      goodEffect: { actionDelta: 1 },
      badEffect: { actionDelta: -1 },
    },
    useLog: null, // 由逻辑动态生成
    source: "蜂蜜公爵糖果店 / 列车糖果车",
  },

  {
    name: "巧克力蛙",
    icon: "🐸",
    category: "糖果",
    usable: true,
    description: "会跳的魔法巧克力，味道极佳。每盒附一张著名巫师收藏卡——邓布利多是最难抽到的之一。吃下后心情大好，适合作为考试后的犒劳。",
    effect: {
      type: "chocolate_frog",
      actionDelta: 1,
      cardChance: 0.35,
    },
    useLog: "🐸 你吃掉了一只巧克力蛙——它在嘴里还跳了一下！心情愉悦，行动次数 +1",
    source: "霍格沃茨特快列车 / 蜂蜜公爵糖果店",
  },

  {
    name: "坩埚蛋糕",
    icon: "🧁",
    category: "糖果",
    usable: true,
    description: "形似魔药坩埚的小蛋糕，内馅是甜蜜的奶油冻。是霍格沃茨学生最常从蜂蜜公爵带回宿舍的零食，深受魁地奇训练后饥肠辘辘的同学喜爱。",
    effect: {
      type: "simple_restore",
      actionDelta: 1,
    },
    useLog: "🧁 你吃了一块坩埚蛋糕，甜蜜的奶油冻让你元气满满！行动次数 +1",
    source: "蜂蜜公爵糖果店",
  },

  {
    name: "巧克力魔杖",
    icon: "🍫",
    category: "糖果",
    usable: true,
    description: "形似魔杖的黑巧克力，外表撒有金色闪粉糖。甜而不腻，深受霍格沃茨全年级学生喜爱。用作奖励自己通过考试的仪式感零食最合适。",
    effect: {
      type: "simple_restore",
      actionDelta: 1,
    },
    useLog: "🍫 你一口咬下巧克力魔杖，金色闪粉在嘴里化开——果然甜蜜！行动次数 +1",
    source: "蜂蜜公爵糖果店",
  },

  {
    name: "南瓜馅饼",
    icon: "🥧",
    category: "食品",
    usable: true,
    description: "霍格沃茨特快列车糖果车的经典款，也是大礼堂万圣节宴席的标配甜点。金黄酥皮，南瓜泥内馅加了肉桂和姜，是每个霍格沃茨学生关于列车的共同记忆。",
    effect: {
      type: "simple_restore",
      actionDelta: 1,
    },
    useLog: "🥧 一口下去，南瓜馅饼的香气直冲脑门，仿佛回到了第一次坐上霍格沃茨特快列车的秋日午后。行动次数 +1",
    source: "霍格沃茨特快列车糖果车 / 大礼堂",
  },

  {
    name: "黄油啤酒软糖",
    icon: "🍮",
    category: "糖果",
    usable: true,
    description: "模仿蜂蜜公爵招牌饮品「黄油啤酒」口味制成的软糖，带有温热焦糖感，回甘绵长。冬天在宿舍吃一颗，瞬间有种在三把扫帚喝热饮的幸福感。",
    effect: {
      type: "simple_restore",
      actionDelta: 1,
    },
    useLog: "🍮 软糖在舌尖化开，黄油焦糖的温热甜味从喉咙一直暖到胃里。行动次数 +1",
    source: "蜂蜜公爵糖果店",
  },

  {
    name: "果冻鼻涕虫",
    icon: "🐌",
    category: "糖果",
    usable: true,
    description: "软弹的果冻蜗牛形糖果，外表晶莹，颜色鲜艳。不要被名字劝退——口味是真正的水果味，只是质地略显黏滑，吃相很难优雅。",
    effect: {
      type: "simple_restore",
      actionDelta: 1,
    },
    useLog: "🐌 你捏着果冻鼻涕虫，鼓起勇气放进嘴里——嗯，还挺好吃的，就是有点说不清楚的黏。行动次数 +1",
    source: "蜂蜜公爵糖果店 / 霍格沃茨特快列车",
  },

  {
    name: "蟑螂堆",
    icon: "🪳",
    category: "糖果",
    usable: true,
    description: "一小堆巧克力糖衣蟑螂形糖果，以真实的蟑螂口感著称。韦斯莱兄弟最爱用它吓一年级新生，但口味意外地还行——有点坚果的感觉。",
    effect: {
      type: "random_effect",
      goodChance: 0.6,
      goodEffect: { actionDelta: 1 },
      badEffect: { actionDelta: -1 },
    },
    useLog: null, // 动态生成
    source: "蜂蜜公爵糖果店",
  },

  {
    name: "嘶嘶咻咻蜂",
    icon: "🐝",
    category: "糖果",
    usable: true,
    description: "入口后会在舌尖发出微弱的嗡嗡振动感，持续约半分钟。并不疼，纯粹是新奇的感觉体验。对话进行中吃一颗保证让对方分神。",
    effect: {
      type: "debuff_mild",
      actionDelta: 0,
      statusEffect: "tongue_buzz",
      duration: 2,
    },
    useLog: "🐝 嗡——嗡——舌头开始振动，说话都变得奇怪起来。效果大约持续到下个行动消失。",
    source: "蜂蜜公爵糖果店",
  },

  {
    name: "爆炸夹心糖",
    icon: "💥",
    category: "糖果",
    usable: true,
    description: "放进嘴里会产生连串细小爆炸感的硬糖，刺激但无害。在图书馆里吃会被马dam·平斯赶出去——「那噼里啪啦的声音！」",
    effect: {
      type: "random_effect",
      goodChance: 0.5,
      goodEffect: { actionDelta: 1 },
      badEffect: { actionDelta: 0 },
    },
    useLog: null,
    source: "蜂蜜公爵糖果店",
  },

  {
    name: "吹宝超级泡泡糖",
    icon: "🫧",
    category: "糖果",
    usable: true,
    description: "弹性极强的魔法泡泡糖，吹出的泡泡能悬在空中不破，甚至带着人飘起来几秒钟。在走廊里吹很容易撞到移动楼梯。",
    effect: {
      type: "float_effect",
      actionDelta: 0,
      statusEffect: "floating",
    },
    useLog: "🫧 巨大的粉色泡泡把你整个人往上托了一下——踮脚悬在空中三秒钟，然后啪的一声泡泡破了，你落回地面。",
    source: "蜂蜜公爵糖果店",
  },

  {
    name: "酸味爆爆糖",
    icon: "🔴",
    category: "糖果",
    usable: true,
    description: "含酸量极高的糖果，入口酸到眼泪直流，结束后有甜味回弘。六年级以上的学生才不会被酸哭——据说。霍格沃茨学生互相挑战的经典道具。",
    effect: {
      type: "random_effect",
      goodChance: 0.4,
      goodEffect: { actionDelta: 1 },
      badEffect: { actionDelta: -1 },
    },
    useLog: null,
    source: "蜂蜜公爵糖果店",
  },

  {
    name: "胡椒小顽童",
    icon: "🌶️",
    category: "糖果",
    usable: true,
    description: "吃下后口中持续喷出火焰气息约五分钟，无危险但非常刺激。在寒冷的魁地奇训练后吃一颗能从内部取暖，伍德教练的球队冬训必备。",
    effect: {
      type: "fire_breath",
      actionDelta: 1,
      statusEffect: "fire_breath",
      duration: 1,
    },
    useLog: "🌶️ 一股热浪从喉咙冲出——你呼出的气带着微弱火苗！整个人从内部暖烘烘的。行动次数 +1",
    source: "蜂蜜公爵糖果店",
  },

  {
    name: "冰老鼠",
    icon: "🐭",
    category: "糖果",
    usable: true,
    description: "会在口中移动的薄荷味冰糖小老鼠，带来凉爽冰镇感。夏天在温室草药课后吃一颗极其舒爽。庞弗雷夫人出人意料地认为它「有助口腔清洁」。",
    effect: {
      type: "simple_restore",
      actionDelta: 1,
    },
    useLog: "🐭 冰老鼠在舌尖溜来溜去，凉爽的薄荷气息让人精神一振！行动次数 +1",
    source: "蜂蜜公爵糖果店",
  },

  {
    name: "甘草魔杖",
    icon: "🪄",
    category: "糖果",
    usable: true,
    description: "甘草味软糖，形似魔杖。可以真正「挥动」一下才下口——没有任何魔法效果，纯粹好玩。赫敏第一次看到哈利和罗恩对着对方比划时，翻了个白眼。",
    effect: {
      type: "simple_restore",
      actionDelta: 1,
    },
    useLog: "🪄 你认真地挥了挥甘草魔杖，然后一口咬下去。没有魔法，但很甜。行动次数 +1",
    source: "蜂蜜公爵糖果店",
  },

  {
    name: "糖羽毛笔",
    icon: "✒️",
    category: "糖果",
    usable: true,
    description: "形似羽毛笔的细长糖果，带着柑橘和蜂蜜混合的清甜。作业做累了偷偷舔一口是霍格沃茨图书馆的隐秘传统——前提是别让平斯夫人发现。",
    effect: {
      type: "simple_restore",
      actionDelta: 1,
    },
    useLog: "✒️ 作业做到一半，你偷偷舔了口糖羽毛笔。柑橘蜂蜜味扑鼻而来，精神好多了。行动次数 +1",
    source: "蜂蜜公爵糖果店",
  },

  {
    name: "血味棒棒糖",
    icon: "🍭",
    category: "糖果",
    usable: true,
    description: "暗红色棒棒糖，口味是铁质感的甜腥味，广受吸血鬼和巫师小孩欢迎。麻瓜看到包装上「真正血味」的标语大多面色大变。",
    effect: {
      type: "random_effect",
      goodChance: 0.5,
      goodEffect: { actionDelta: 1 },
      badEffect: { actionDelta: 0 },
    },
    useLog: null,
    source: "蜂蜜公爵糖果店",
  },

  {
    name: "尖牙飞盘糖",
    icon: "🦇",
    category: "糖果",
    usable: true,
    description: "薄薄的脆糖片，吃完后牙齿会暂时变尖——效果约持续十分钟。常被用来恶作剧，突然对着人龇牙咧嘴。庞弗雷夫人表示「无害但别滥用」。",
    effect: {
      type: "fang_teeth",
      actionDelta: 0,
      statusEffect: "fang_teeth",
      duration: 1,
    },
    useLog: "🦇 你咬碎飞盘糖，感觉到牙齿微微变形——用舌尖一碰，嗯，真的变尖了。忍不住对镜子龇了个牙。",
    source: "蜂蜜公爵糖果店",
  },

  // ══════════════════════════════════════════
  // 【恶作剧道具】——佐科笑话店 / 韦斯莱魔法把戏坊
  // ══════════════════════════════════════════

  {
    name: "粪弹",
    icon: "💩",
    category: "恶作剧",
    usable: true,
    description: "佐科招牌产品，扔出后爆发令人窒息的恶臭。霍格沃茨走廊虽然禁用，但从来没人遵守。费尔奇对这个东西深恶痛绝，专门在他的没收物品清单第一项标注了它。",
    effect: {
      type: "prank_stench",
      actionDelta: -1,
    },
    useLog: "💩 「砰」——粪弹爆开，走廊里瞬间臭气冲天！附近同学纷纷逃窜，你也不得不快速撤离。行动次数 -1（环境不适合做其他事了）",
    source: "佐科笑话店",
  },

  {
    name: "臭丸",
    icon: "👃",
    category: "恶作剧",
    usable: true,
    description: "小巧的臭味小球，捏碎后散发浓烈气味。最经典的用法是悄悄放进别人书包——他们会翻遍所有东西找臭源。",
    effect: {
      type: "prank_stench",
      actionDelta: 0,
    },
    useLog: "👃 你悄悄捏碎了一颗臭丸，放在了……某人的书包旁边。一切交给时间。",
    source: "佐科笑话店",
  },

  {
    name: "打嗝粉",
    icon: "🤮",
    category: "恶作剧",
    usable: false,
    description: "混入食物或饮料可让人持续打嗝半小时的粉末。简单、经典、有效——而且很难追溯是谁干的。魔药课上误操作也会产生类似效果。",
    source: "佐科笑话店",
  },

  {
    name: "呕吐馅饼",
    icon: "🥟",
    category: "恶作剧",
    usable: true,
    description: "吃下后立刻产生剧烈呕吐反应——别担心，只是暂时的。庞弗雷夫人最不想看到的东西之一。魔药课上装作「误食」立刻被送去医疗翼——是逃课神器。",
    effect: {
      type: "puking",
      actionDelta: -1,
      statusEffect: "nausea",
      duration: 1,
    },
    useLog: "🥟 你硬撑着咬下呕吐馅饼——效果立竿见影，你蹲在走廊里呕了个昏天黑地。旁边的人已经绕道而行了。行动次数 -1",
    source: "佐科笑话店 / 霍格沃茨特快列车",
  },

  {
    name: "昏迷花糖",
    icon: "🌸",
    category: "恶作剧",
    usable: true,
    description: "粉色小糖果，吃后立刻软绵绵倒下，约一分钟醒来。完全无害但能吓死周围的人。佐科特别标注：不要在上课铃响前吃。弗雷德和乔治在《凤凰社》用的就是这个原理。",
    effect: {
      type: "faint",
      actionDelta: -1,
    },
    useLog: "🌸 你放入昏迷花糖，甜味尚未散去，整个人就软了下去——旁边的同学爆发出一声惊呼。约一分钟后你悠悠转醒。行动次数 -1",
    source: "佐科笑话店",
  },

  {
    name: "鼻血牛轧糖",
    icon: "🩸",
    category: "恶作剧",
    usable: true,
    description: "吃后鼻血直流——看起来吓人，其实是糖浆染色。从魔药课溜走的绝佳借口。不过庞弗雷夫人早就练就了一眼识破的本事，还会补罚你在医疗翼打扫两小时。",
    effect: {
      type: "nosebleed",
      actionDelta: -1,
    },
    useLog: "🩸 红色液体从鼻子涌出——几个同学吓了一跳，然后闻到了焦糖香味，脸色变得意味深长。你已经被送去医疗翼了。行动次数 -1",
    source: "佐科笑话店 / 韦斯莱魔法把戏坊（韦斯莱版「吐血糖」）",
  },

  {
    name: "打嗝糖",
    icon: "😤",
    category: "恶作剧",
    usable: true,
    description: "吃下后疯狂打嗝，每打一次嗝嘴里冒出彩色蒸汽。在考试时吃有奇效——当然被发现的话后果自负。马克·波斯说他曾在O.W.L.s考场里试过，监考官并不欣赏。",
    effect: {
      type: "hiccough",
      actionDelta: -1,
      statusEffect: "hiccough",
      duration: 2,
    },
    useLog: "😤 「嗝——！」彩色蒸汽从你嘴里喷出，周围同学都看了过来。又来一次——「嗝——！」这下子图书馆的平斯夫人走过来了。行动次数 -1",
    source: "佐科笑话店",
  },

  {
    name: "秘鲁即时黑暗粉",
    icon: "🌑",
    category: "恶作剧",
    usable: true,
    description: "佐科从秘鲁进口的高档货，投掷后瞬间制造一片漆黑，范围约一个房间。德拉科在六年级曾用类似产品（博金-博克版）制造混乱，是史上最严重的恶作剧道具之一。",
    effect: {
      type: "darkness",
      actionDelta: 1,
    },
    useLog: "🌑 你抛出黑暗粉——走廊瞬间陷入漆黑！在一片惊呼声中，你趁机溜走了。行动次数 +1（混乱中溜走成功）",
    source: "佐科笑话店 / 博金-博克（高级版）",
  },

  {
    name: "恶作剧烟雾弹",
    icon: "💨",
    category: "恶作剧",
    usable: true,
    description: "佐科自制，扔出后喷出彩色浓烟。效果不如秘鲁黑暗粉但便宜得多，还能选颜色。红色最受欢迎，经常被用来在魁地奇比赛后庆祝。",
    effect: {
      type: "smoke",
      actionDelta: 0,
    },
    useLog: "💨 你投出烟雾弹——彩色浓烟弥漫开来，周围的人纷纷咳嗽并惊呼。趁着混乱你已经不知所踪。",
    source: "佐科笑话店",
  },

  {
    name: "恶作剧魔杖",
    icon: "🪄",
    category: "恶作剧",
    usable: true,
    description: "看起来像真正的魔杖，但一挥就会变成橡皮鸡或喷出一股醋。最经典的用法：借给一年级学弟学妹「试试这根，手感特别好」——等着看他们的脸。",
    effect: {
      type: "trick_wand",
      outcomes: [
        { result: "橡皮鸡", emoji: "🐔" },
        { result: "一股醋", emoji: "🫗" },
        { result: "一朵花", emoji: "🌸" },
        { result: "彩色烟雾", emoji: "💨" },
        { result: "什么都没有——只是嗡嗡叫", emoji: "🐝" },
      ],
      actionDelta: 0,
    },
    useLog: null,
    source: "佐科笑话店",
  },

  {
    name: "爆炸扑克牌",
    icon: "🃏",
    category: "恶作剧",
    usable: true,
    description: "一副看起来普通的扑克牌，洗牌时会噼里啪啦发出小爆炸声并冒出火花。玩爆炸牌时你永远不知道下一张会不会炸。这是真正的「爆炸式扑克」游戏！",
    effect: {
      type: "random_effect",
      goodChance: 0.5,
      goodEffect: { actionDelta: 1 },
      badEffect: { actionDelta: -1 },
    },
    useLog: null,
    source: "佐科笑话店",
  },

  {
    name: "疯狂泡泡糖",
    icon: "🫧",
    category: "恶作剧",
    usable: true,
    description: "嚼一下会在嘴里产生大量泡沫，从嘴巴和鼻子里冒出来——绿色最受欢迎。清理起来很麻烦，但看别人的表情值得每一分西可。",
    effect: {
      type: "foam_mouth",
      actionDelta: -1,
    },
    useLog: "🫧 绿色泡沫疯狂从你嘴里涌出，根本停不下来——旁边的人盯着你，不知道该笑还是该担心。行动次数 -1",
    source: "佐科笑话店",
  },

  // ══════════════════════════════════════════
  // 【韦斯莱魔法把戏坊专属道具】
  // ══════════════════════════════════════════

  {
    name: "吐血糖",
    icon: "🍬",
    category: "恶作剧",
    usable: true,
    description: "弗雷德和乔治·韦斯莱自主研发的逃课神器。吃下这半块会假装生病，吃下另外那半块会恢复。在五年级逃乌姆里奇的课时风靡全校——直到乌姆里奇没收了所有库存。",
    effect: {
      type: "puking",
      actionDelta: -1,
    },
    useLog: "🍬 你吃了吐血糖的一半——效果立刻显现，满脸惨白，成功骗过了老师。行动次数 -1（被送去医疗翼休息）",
    source: "韦斯莱魔法把戏坊",
  },

  {
    name: "护法糖",
    icon: "🛡️",
    category: "恶作剧",
    usable: true,
    description: "另外那半块「吐血糖」——让你从假生病状态快速恢复如初。和吐血糖配套使用才安全，否则你会在医疗翼多躺半天。",
    effect: {
      type: "cure_puking",
      actionDelta: 1,
      clearStatus: "nausea",
    },
    useLog: "🛡️ 你吃下护法糖，刚才所有的不适瞬间消散。你抹了抹嘴，精神抖擞地从医疗翼走了出去。行动次数 +1",
    source: "韦斯莱魔法把戏坊",
  },

  {
    name: "魔法烟火（神奇花火）",
    icon: "🎆",
    category: "恶作剧",
    usable: true,
    description: "弗雷德和乔治韦斯莱在五年级大厅里施放的那种——能变成喷火龙，在走廊里追赶乌姆里奇。这是简化版：室内可用，能绕柱子飞，持续约十分钟，且无法用普通消火咒扑灭。",
    effect: {
      type: "fireworks",
      actionDelta: 1,
    },
    useLog: "🎆 你放出魔法烟火！走廊里爆出五彩斑斓的龙形光焰，绕着廊柱飞速旋转。整栋楼都轰动了。行动次数 +1（趁乱转移注意力）",
    source: "韦斯莱魔法把戏坊",
  },

  {
    name: "便携式沼泽（袖珍装）",
    icon: "🌿",
    category: "恶作剧",
    usable: true,
    description: "弗雷德和乔治离开霍格沃茨时在走廊中部创造了那片沼泽——这是他们商业化的袖珍版，打开瓶盖会在面前形成一小片真实沼泽，约两平方米，深约膝盖。不好清理。",
    effect: {
      type: "swamp",
      actionDelta: -1,
    },
    useLog: "🌿 你打开了瓶盖——一片冒着泡的真实沼泽在地面上迅速扩展，周围的人纷纷惊叫着绕道而行。麦格教授已经在拐角处皱眉了。行动次数 -1",
    source: "韦斯莱魔法把戏坊",
  },

  {
    name: "隐身帽（廉价版）",
    icon: "🎩",
    category: "恶作剧",
    usable: true,
    description: "韦斯莱兄弟研发的伪隐身帽——只能让头部变得「略微透明」，身体完全看得见。没什么实用性，但戴着四处走会让人迷惑地盯着你脖子上方的透明脑袋。",
    effect: {
      type: "partial_invisible",
      actionDelta: 1,
    },
    useLog: "🎩 你戴上隐身帽——好吧，只有头消失了，你的身体还清清楚楚站在原地。对面走来的同学愣了三秒，绕道走了。行动次数 +1",
    source: "韦斯莱魔法把戏坊",
  },

  // ══════════════════════════════════════════
  // 【药剂 & 急救】——月桂魔材药房 / 圣芒戈
  // ══════════════════════════════════════════

  {
    name: "白鲜香精",
    icon: "🌿",
    category: "外伤药",
    usable: true,
    description: "魔法世界最著名的外伤特效药——几滴就能止血生肌，防止留疤。圣芒戈医疗队和霍格沃茨医疗翼的标配。赫敏在逃亡途中随身携带了一瓶，在比尔·韦斯莱被狼人袭击后第一时间拿出来处理。",
    effect: {
      type: "heal_wound",
      actionDelta: 2,
      clearStatus: "wounded",
    },
    useLog: "🌿 你倒了几滴白鲜香精在伤口上——刺痛感持续了几秒，然后一切归于平静，皮肤已经重新愈合。行动次数 +2（伤好了，精力充沛）",
    source: "月桂魔材药房 / 圣芒戈 / 对角巷药房",
  },

  {
    name: "振奋药剂",
    icon: "🔥",
    category: "医药",
    usable: true,
    description: "治疗感冒的魔法特效药——喝下去耳朵会往外冒蒸汽，然后整个人立刻精神起来。庞弗雷夫人在冬天几乎天天都要开这个。霍格沃茨的冬天没有振奋药剂是过不去的。",
    effect: {
      type: "cure_cold",
      actionDelta: 2,
      clearStatus: "cold",
    },
    useLog: "🔥 「咕嘟」——辛辣的药剂入口，下一秒蒸汽从两只耳朵里冒出！整个人瞬间暖透了，精神也好了。行动次数 +2",
    source: "月桂魔材药房 / 庞弗雷夫人",
  },

  {
    name: "缓和剂",
    icon: "😌",
    category: "医药",
    usable: true,
    description: "能有效缓解焦虑和紧张——O.W.L.s和N.E.W.T.s考试季卖得最快的东西。月桂先生说每次霍格沃茨大考前的周末他都得专门多熬三锅。赫敏表示「这是允许的，不算作弊」。",
    effect: {
      type: "calm",
      actionDelta: 1,
    },
    useLog: "😌 你喝下缓和剂，肩膀上一直悬着的那块大石头悄悄滑落。考试焦虑散去，头脑清晰了许多。行动次数 +1",
    source: "月桂魔材药房",
  },

  {
    name: "专注药剂",
    icon: "🧠",
    category: "医药",
    usable: true,
    description: "一小口就能让注意力高度集中，适合考前通宵复习。但不建议喝太多，否则连窗外风声都觉得美妙到无法自拔。月桂先生建议配水稀释。赫敏对此药持保留意见，更信任正常睡眠。",
    effect: {
      type: "focus",
      actionDelta: 2,
    },
    useLog: "🧠 你喝下专注药剂——思维倏地清晰起来，书页上的文字变得无比清晰。这节课你一定能全程集中！行动次数 +2",
    source: "月桂魔材药房",
  },

  {
    name: "活力滋补剂",
    icon: "⚡",
    category: "医药",
    usable: true,
    description: "筋疲力尽但不能睡觉时喝这个——能撑过通宵。次日可能有点头晕，但比挂科好。霍格沃茨六年级以上学生人手一瓶。",
    effect: {
      type: "vigor",
      actionDelta: 3,
    },
    useLog: "⚡ 你仰头喝下活力滋补剂，疲惫感在三秒钟内消散殆尽，精神抖擞，甚至有点亢奋。行动次数 +3（但明天会很困）",
    source: "月桂魔材药房",
  },

  {
    name: "通用解毒剂",
    icon: "💚",
    category: "医药",
    usable: true,
    description: "能解大多数常见魔药中毒——无论是误食了坏掉的药剂还是爱情魔药巧克力。霍格沃茨学生寝室必须常备一瓶，斯莱特林地下室更是如此。",
    effect: {
      type: "antidote",
      actionDelta: 1,
      clearStatus: "poisoned",
    },
    useLog: "💚 绿色的解毒剂入喉，身体里那股不对劲的热潮缓缓退去。你舒了口气。行动次数 +1",
    source: "月桂魔材药房 / 魔药课自制",
  },

  {
    name: "生骨灵",
    icon: "🦴",
    category: "医药",
    usable: true,
    description: "重新长骨头的魔法药剂——必须整瓶喝完才有效。月桂先生诚实地说：「喝起来像在吞燃烧的木炭。」哈利在二年级被洛哈特误删手臂骨头后，在医疗翼喝了整瓶，痛苦地熬了一夜。",
    effect: {
      type: "bone_growth",
      actionDelta: -1,
      note: "需要在医疗翼过夜，次日行动次数+3",
    },
    useLog: "🦴 你硬着头皮喝下生骨灵——像在吞火炭，没错。庞弗雷夫人说你需要在医疗翼待一晚上，骨头会在睡梦中长回来。行动次数 -1（今天在医疗翼休息，但伤势正在痊愈）",
    source: "月桂魔材药房 / 霍格沃茨医疗翼",
  },

  {
    name: "烧伤愈合膏",
    icon: "🧯",
    category: "外伤药",
    usable: true,
    description: "淡绿色药膏，装在锡管里，涂在烧伤处半分钟内止痛——无论是坩埚烫伤还是被火灰蛇喷到。魔药课学生几乎人手一管，赫敏的药箱里永远有备用。",
    effect: {
      type: "heal_burn",
      actionDelta: 1,
      clearStatus: "burned",
    },
    useLog: "🧯 你把药膏轻涂在烫伤处，凉意瞬间取代了灼痛感，皮肤慢慢恢复正常色泽。行动次数 +1",
    source: "月桂魔材药房",
  },

  {
    name: "安神助眠剂（弱效）",
    icon: "💤",
    category: "医药",
    usable: false,
    description: "帮助入睡的淡紫色药水，不会让你昏迷，只是让你更容易睡着。不含依赖性成分。如果隔壁寝室的室友鼾声如雷，这是救星。",
    source: "月桂魔材药房",
  },

  // ══════════════════════════════════════════
  // 【魔法道具 & 文具】——博金-博克 / 对角巷 / 德维斯
  // ══════════════════════════════════════════

  {
    name: "隐形墨水瓶",
    icon: "👻",
    category: "文具",
    usable: true,
    description: "书写后墨迹消失，需要「现形」咒（Revelio）才能看见。秘密通讯专用，达芙妮·格林格拉斯在四年级时用它给她姐姐传递信息，被宿舍里的赫敏发现后两人关系极度尴尬了一个月。",
    effect: {
      type: "invisible_ink",
      actionDelta: 0,
    },
    useLog: "👻 你用隐形墨水写下了一条信息——字迹刚落就消失了。只有知道咒语的人才能读到它。",
    source: "德维斯与班斯商店 / 对角巷",
  },

  {
    name: "速记羽毛笔",
    icon: "📝",
    category: "文具",
    usable: true,
    description: "能自动速记讲话内容，偶有夸大之词，仅供娱乐。丽塔·斯基特在采访中使用的就是这种——但她的版本比普通版更擅长「创意发挥」。",
    effect: {
      type: "auto_notes",
      actionDelta: 1,
    },
    useLog: "📝 你放下速记羽毛笔让它自行工作，自己开始做别的事——课堂笔记自动写满了，只是有几处词汇比原话更……戏剧化。行动次数 +1（解放了双手）",
    source: "德维斯与班斯商店",
  },

  {
    name: "双向镜",
    icon: "🪞",
    category: "魔法道具",
    usable: false,
    description: "成对使用的魔法镜子——对着一块镜子说出持有另一块的人名字，镜面就会呈现对方的脸。小天狼星把其中一块给了哈利，另一块留给自己，叮嘱哈利有危险就联系他。但哈利直到五年级末才理解它的意义，那时已经太晚了。",
    source: "小天狼星·布莱克（赠给哈利）",
  },

  {
    name: "冥想盆",
    icon: "🪣",
    category: "魔法道具",
    usable: false,
    description: "浅浅的石制盆，注满银白色液体可储存记忆。邓布利多用它回顾与伏地魔相关的关键记忆，也允许哈利进入其中亲历历史。斯内普在五年级乌姆里奇搜查期间将最私密的记忆倒入其中保护起来。",
    source: "邓布利多校长室 / 斯内普私藏",
  },

  {
    name: "时间转换器",
    icon: "⏳",
    category: "魔法道具",
    usable: false,
    description: "金色的沙漏形装置，挂在脖子上，拨动可以逆转时间。魔法部严格管制，只在极少数情况下借出。赫敏在三年级借用它同时修多门课程——后来哈利和她用它回到过去救了巴克比克和小天狼星。",
    source: "魔法部（赫敏三年级借用）",
  },

  {
    name: "预言球",
    icon: "🔮",
    category: "魔法道具",
    usable: false,
    description: "储存预言的玻璃球，发光时代表其中封存有预言。只有预言所指之人才能拿取而不受伤害。伏地魔觊觎哈利的那颗——「既非能征服死亡者活命，也非那人，将被另一人所杀……」",
    source: "神秘事务所 预言储存室",
  },

  {
    name: "魔法眼（假眼·普通版）",
    icon: "👁️",
    category: "魔法道具",
    usable: false,
    description: "仿制疯眼汉穆迪著名的魔法眼，蓝色旋转，能看穿某些隐身和障碍物。当然这是玩具版，功能有限——装在眼眶里会不住地转，非常分散旁人注意力。",
    source: "对角巷杂货店（仿制品）",
  },

  {
    name: "魁地奇金色飞贼（纪念版）",
    icon: "⚡",
    category: "收藏品",
    usable: false,
    description: "微缩版金色飞贼，装在玻璃盒里，翅膀会轻微振动但无法飞走。哈利在一年级第一次参加魁地奇时，用那双没有接受训练的本能抓住了真实的飞贼——这个纪念版正是为了纪念那个传奇时刻。",
    source: "对角巷魁地奇用品店 / 霍格莫德",
  },

  {
    name: "霍格沃茨入学通知书",
    icon: "📜",
    category: "收藏品",
    usable: false,
    description: "由霍格沃茨猫头鹰送达的入学通知书，麦格教授亲笔签名，列有入学须知与所需书目。哈利的第一封被德思礼夫妇没收，但随后信件如潮水般涌来——壁炉里、门缝里、到处都是。",
    source: "霍格沃茨校方（麦格教授）",
  },

  {
    name: "霍格沃茨特快列车车票",
    icon: "🎫",
    category: "收藏品",
    usable: false,
    description: "猩红色蒸汽机车于九月一日上午十一点整从国王十字车站九又四分之三站台准时出发。这张票是通往魔法世界的入场券，每一个霍格沃茨学生都会珍藏第一张。",
    source: "霍格沃茨（麦格教授送达）",
  },

  // ══════════════════════════════════════════
  // 【书籍 & 教材】（非直接可用，但可带来学习加成）
  // ══════════════════════════════════════════

  {
    name: "《神奇动物在哪里》",
    icon: "🦄",
    category: "教材",
    usable: false,
    description: "纽特·斯卡曼德著，神奇动物保护课必备。附有各类神奇动物的详细描述与危险等级（X至XXXXX）。哈利那本上被赫敏批满了工整笔记，被罗恩的版本上涂满了他哥哥的「补充内容」。",
    source: "德维斯与班斯商店 / 对角巷佛鲁利许与布洛茨书店",
  },

  {
    name: "《标准咒语·第四册》",
    icon: "📘",
    category: "教材",
    usable: false,
    description: "米兰达·戈谢克著，四年级魔咒课指定教材，收录实用中级咒语及反咒。书脊上贴着格兰芬多学院的书签，上一个使用者在「扩大咒」那章用彩色笔标注了重点。",
    source: "对角巷佛鲁利许与布洛茨书店",
  },

  {
    name: "《黑暗力量：自卫指南》",
    icon: "📕",
    category: "教材",
    usable: false,
    description: "昆汀·特林博著，黑魔法防御术权威参考书。内容远比课堂讲授更深入全面，涵盖不可饶恕咒的历史、抵御方法和真实案例。卢平教授曾私下向哈利推荐过这本书。",
    source: "对角巷佛鲁利许与布洛茨书店",
  },

  // ══════════════════════════════════════════
  // 【其他特殊道具】
  // ══════════════════════════════════════════

  {
    name: "费利克斯快乐水（幸运药水）",
    icon: "✨",
    category: "稀有药剂",
    usable: true,
    description: "原著：Felix Felicis。金黄色魔药，喝下后在药效持续时间内一切都会顺利如意。魔药世界最难熬制的魔药之一——失误会导致致命中毒。赫敏在六年级课上熬制出了完美版。",
    effect: {
      type: "felix_felicis",
      actionDelta: 3,
      duration: 1,
      statusEffect: "lucky",
    },
    useLog: "✨ 你仰头喝下幸运药水——金色液体入喉，一种从未有过的确信感涌上来：今天，一切都会顺利的。行动次数 +3，今日如有随机判定，必然选取最好的结果。",
    source: "魔药课（稀有奖励）/ 赫敏自制",
  },

  {
    name: "魔法贴纸（霍格沃茨院徽版）",
    icon: "🏰",
    category: "纪念品",
    usable: false,
    description: "贴在书本、笔记本或木制箱子上的魔法院徽贴纸，图案会随光线变换色彩，偶尔发出对应学院的声音——格兰芬多版会发出狮吼。",
    source: "霍格莫德纪念品店",
  },

  {
    name: "羊皮卷书信（未开封）",
    icon: "✉️",
    category: "信件",
    usable: false,
    description: "一封封蜡封完好的羊皮卷书信，由猫头鹰送达。可能来自家长、朋友、老师，甚至——韦斯莱太太那种鲜红色的绝情信……",
    source: "猫头鹰邮递",
  },

  {
    name: "绝情信（红色）",
    icon: "📮",
    category: "信件",
    usable: true,
    description: "用耀眼红纸写成的魔法书信，一旦被开封就会以原作者激愤的声调大声朗读——音量可以传遍整个大礼堂。罗恩在一年级因偷车飞天扫帚被他妈妈寄了一封，整个格兰芬多桌都听见了。",
    effect: {
      type: "howler",
      actionDelta: -1,
    },
    useLog: "📮 你颤抖着拆开了红色信封——信纸瞬间腾空，用你妈妈的声音在整个大礼堂怒吼开来！四周所有人都停下了手中的刀叉。行动次数 -1（整个早饭时间都无地自容）",
    source: "韦斯莱太太（特供）/ 任何愤怒的巫师家长",
  },

];

// ─────────────────────────────────────────────
// 工具函数：按名字查找道具数据
// ─────────────────────────────────────────────

export function getItemData(name) {
  return ITEM_DATA.find(i => i.name === name) || null;
}

export function getItemEmoji(name) {
  const item = getItemData(name);
  return item?.icon || "📦";
}

// ─────────────────────────────────────────────
// 核心使用逻辑：applyItemEffect(itemName, index)
// 替代 bag-system.js 中的 useItem() 内联逻辑
// ─────────────────────────────────────────────

export function applyItemEffect(itemName, index) {
  const itemDef = getItemData(itemName);
  if (!itemDef || !itemDef.usable) {
    if (window.doStudyLog) window.doStudyLog(`📦 「${itemName}」是展示/收藏道具，无法直接使用。`);
    return;
  }

  const data = getSave();
  if (!data.time) data.time = { dailyActionLeft: 3, nowTime: "早晨", currentDate: "1991-09-02" };
  const list = data.bag?.item || [];
  const item = list[index];
  if (!item || item.name !== itemName || (item.count || 0) <= 0) return;

  const ef = itemDef.effect;
  let logMsg = itemDef.useLog || `📦 你使用了「${itemName}」。`;
  let actionDelta = ef?.actionDelta || 0;

  // ── 特殊效果分支 ──────────────────────────

  if (ef?.type === "random_flavor") {
    // 比比多味豆
    const isGood = Math.random() < 0.5;
    const pool = isGood ? ef.goodFlavors : ef.badFlavors;
    const flavor = pool[Math.floor(Math.random() * pool.length)];
    actionDelta = isGood ? (ef.goodEffect?.actionDelta || 1) : (ef.badEffect?.actionDelta || -1);
    logMsg = isGood
      ? `🫘 你吃了一颗比比多味豆——是${flavor.emoji} ${flavor.name}味！真幸运！行动次数 ${actionDelta > 0 ? "+" : ""}${actionDelta}`
      : `🫘 你吃了一颗比比多味豆——天哪，是${flavor.emoji} ${flavor.name}味！你的表情扭曲了……行动次数 ${actionDelta}`;
  }

  else if (ef?.type === "random_effect") {
    // 概率好/坏随机效果
    const isGood = Math.random() < (ef.goodChance || 0.5);
    actionDelta = isGood ? (ef.goodEffect?.actionDelta || 1) : (ef.badEffect?.actionDelta || -1);
    logMsg = isGood
      ? `${itemDef.icon} 你使用了「${itemName}」——效果出乎意料的好！行动次数 ${actionDelta > 0 ? "+" : ""}${actionDelta}`
      : `${itemDef.icon} 你使用了「${itemName}」——嗯……没想象中那么顺利。行动次数 ${actionDelta}`;
  }

  else if (ef?.type === "trick_wand") {
    // 恶作剧魔杖
    const outcomes = ef.outcomes || [];
    const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
    logMsg = `🪄 你挥动了恶作剧魔杖——「${outcome.emoji} ${outcome.result}」！`;
    actionDelta = 0;
  }

  else if (ef?.type === "howler") {
    // 绝情信
    actionDelta = -1;
    logMsg = `📮 你颤抖着拆开了红色信封——信纸瞬间腾空，用愤怒的声调在整个大礼堂怒吼开来！四周所有人都停下了手中的刀叉。行动次数 -1`;
  }

  else if (ef?.type === "chocolate_frog") {
    // 巧克力蛙——有概率获得巫师卡
    actionDelta = ef.actionDelta || 1;
    logMsg = `🐸 你吃掉了一只巧克力蛙——它在嘴里还跳了一下！心情愉悦，行动次数 +${actionDelta}`;
    const cardChance = ef.cardChance || 0.3;
    if (Math.random() < cardChance && window.drawWizardCardFromFrog) {
      const cardResult = window.drawWizardCardFromFrog();
      if (cardResult?.message) logMsg += "\n" + cardResult.message;
    }
  }

  // ── 应用行动次数变化 ──────────────────────

  if (actionDelta !== 0) {
    data.time.dailyActionLeft = Math.max(0, (data.time.dailyActionLeft || 3) + actionDelta);
  }

  // ── 消耗道具 ─────────────────────────────

  if (item.count > 1) {
    item.count -= 1;
  } else {
    list.splice(index, 1);
  }
  data.bag.item = list;

  setSave(data);

  // ── 刷新 UI ──────────────────────────────

  const actionsEl = document.getElementById("actions");
  if (actionsEl) actionsEl.textContent = data.time.dailyActionLeft;

  if (window.renderBag) window.renderBag();
  if (window.renderLog) window.renderLog();
  if (window.doStudyLog) window.doStudyLog(logMsg);

  // ── 行动耗尽时推进时间 ───────────────────

  if (data.time.dailyActionLeft <= 0) {
    if (window.timeSystem) window.timeSystem.dailyActionLeft = 0;
    setTimeout(() => {
      if (window.nextTime) window.nextTime();
      if (window.syncActionUI) window.syncActionUI();
    }, 500);
  }
}

// 全局挂载
window.getItemData = getItemData;
window.getItemEmoji = getItemEmoji;
window.applyItemEffect = applyItemEffect;
export const STORY_EVENTS = [
  {
    id: "story_1_1",
    chapter: "魔法石",
    title: "分院仪式之夜",
    summary: "麦格教授主持分院仪式，哈利·波特、罗恩·韦斯莱、赫敏·格兰杰进入格兰芬多，德拉科·马尔福进入斯莱特林。",
    dateRange: ["1991-09-02", "1991-09-03"],
    priority: 100,
    condition: { minGrade: 1 },
    knownCharacters: ["minervaMcGonagall", "harry", "draco"],
    scenes: [
      {
        speaker: "旁白",
        text: "大礼堂千支蜡烛悬浮在半空，四张长桌上方飘动着学院旗帜。新生们排成一列走进来，领头的女教授神情严肃，绿色长袍笔挺——「我是麦格教授，」她推了推方形眼镜，「分院仪式马上开始。」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "新生们紧张地排成一排。你注意到其中三个人格外引人注目：一个黑发瘦小的男孩、一个红头发的男孩、和一个头发蓬松的女孩。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "「哈利·波特！」麦格教授念出这个名字时，整个大礼堂爆发出窃窃私语。那个黑发男孩紧张地走上前，分院帽盖住了他的眼睛。漫长的沉默之后——",
        choices: null
      },
      {
        speaker: "分院帽",
        text: "「格兰芬多！」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "格兰芬多长桌爆发出欢呼！韦斯莱双胞胎喊得最响：「我们有波特了！我们有波特了！」而斯莱特林那边一片死寂，一个金发男孩甚至摔了杯子。",
        choices: [
          { text: "跟着一起欢呼", next: 5, reward: { type: "affinity", key: "fredWeasley", delta: 3 } },
          { text: "安静鼓掌就好", next: 6, reward: null },
          { text: "偷偷观察斯莱特林那边的反应", next: 7, reward: { type: "affinity", key: "serafinaMoody", delta: 2 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你站起来跟着大喊，韦斯莱双胞胎中的一个——也许是弗雷德——冲你竖了个大拇指。这一刻，你觉得自己真的属于这里。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你轻轻拍着手，看着哈利·波特坐到格兰芬多长桌旁。有人拍了拍他的背，他看起来终于松了口气。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你注意到斯莱特林桌上那个摔了杯子的金发男孩正阴沉着脸盯着格兰芬多这边。你记住了那张脸——看起来不太友善。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "接下来轮到那个红发男孩——「韦斯莱，罗恩！」分院帽几乎刚碰到他的头就喊了出来——「格兰芬多！」他松了口气，跑到哈利·波特身边坐下。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "然后是那个头发蓬松的女孩——「格兰杰，赫敏！」分院帽思考了片刻——「格兰芬多！」她快步走向长桌，虽然看起来有些紧张，但嘴角带着笑意。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "「马尔福，德拉科！」刚才那个金发男孩傲慢地走上前，分院帽甚至还没完全落在他头上——「斯莱特林！」他露出得意的笑容走向斯莱特林长桌，路过格兰芬多时朝哈利·波特投去一个轻蔑的眼神。你记住了这个名字——德拉科·马尔福，看来他不会是哈利·波特的朋友。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🎓 分院仪式结束，哈利·波特、罗恩·韦斯莱、赫敏·格兰杰进入了格兰芬多。" }
    ]
  },

  {
    id: "story_1_2",
    chapter: "魔法石",
    title: "走廊里的飞行课",
    summary: "德拉科·马尔福抢走纳威·隆巴顿的忆球，哈利·波特骑扫帚追击展现天赋，被麦格教授破格任命为格兰芬多找球手。",
    dateRange: ["1991-09-15", "1991-09-25"],
    priority: 90,
    condition: { minGrade: 1 },
    prerequisite: "story_1_1",
    knownCharacters: ["severusSnape"],
    scenes: [
      {
        speaker: "旁白",
        text: "课间休息时，你经过走廊，听到窗外的操场上传来一阵骚动。一群学生围在飞天扫帚旁边，有人在争吵。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你从窗户看出去——德拉科·马尔福抢了纳威·隆巴顿的忆球飞上了天，而哈利·波特毫不犹豫地骑上扫帚追了上去。那一记俯冲抓球，快得连麦格教授都从窗户探出了头。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你以为哈利·波特要被罚了，但麦格教授把他带走了——不是去罚站，而是去找了霍奇夫人。走廊上，你路过一个黑袍教授，他冷冷地看了你一眼——那是魔药课教授斯内普，据说他最讨厌格兰芬多的学生。第二天，格兰芬多学院公告栏上贴出了消息：哈利·波特成为格兰芬多找球手，一个世纪以来最年轻的。",
        choices: [
          { text: "替格兰芬多高兴", next: 3, reward: { type: "housePoint", amount: 2 } },
          { text: "觉得这不公平——他明明违反了规定", next: 4, reward: { type: "affinity", key: "severusSnape", delta: 2 } },
          { text: "羡慕他的飞行天赋", next: 5, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "你忍不住笑了。也许规则有时候确实该为天赋让路——至少这次，结果不错。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你皱了皱眉。违反校规却得到奖励？这不太对。你注意到斯内普教授也一脸不悦地走过了走廊，你们罕见地在这一点上达成了共识。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你看着窗外哈利·波特轻松驾驭扫帚的身影，心里涌起一阵羡慕。如果有一天你也能飞得那么自由……也许该认真上飞行课了。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🧹 哈利·波特成为格兰芬多找球手——最年轻的一个世纪记录。" }
    ]
  },

  {
    id: "story_1_3",
    chapter: "魔法石",
    title: "万圣节的尖叫",
    summary: "奎洛教授警告巨怪入侵，哈利·波特和罗恩·韦斯莱救下赫敏·格兰杰，三人从此成为挚友。",
    dateRange: ["1991-10-31", "1991-11-02"],
    priority: 95,
    condition: { minGrade: 1 },
    prerequisite: "story_1_2",
    knownCharacters: ["quirrell", "minervaMcGonagall"],
    scenes: [
      {
        speaker: "旁白",
        text: "万圣节晚宴，南瓜汁和巧克力蛙堆满了桌子。你正准备伸手拿第二块南瓜馅饼，奎洛教授跌跌撞撞地冲进了大礼堂。",
        choices: null
      },
      {
        speaker: "奎洛教授",
        text: "「巨怪——在地牢里——我想你们应该知道。」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "然后他就晕了过去。大礼堂瞬间陷入混乱，学生们尖叫着涌向出口。级长们拼命维持秩序，你被人群推搡着往前走。",
        choices: [
          { text: "紧跟级长，有序撤离", next: 3, reward: { type: "affinity", key: "minervaMcGonagall", delta: 2 } },
          { text: "注意到有人往回跑——哈利·波特和罗恩·韦斯莱", next: 4, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "你跟着人群回到公共休息室，心跳还在加速。后来你听说了整个故事：哈利·波特和罗恩·韦斯莱救了赫敏·格兰杰，三个人一起打晕了巨怪。麦格教授扣了分又加了分，最终格兰芬多净赚了五分。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你看到哈利·波特和罗恩·韦斯莱逆着人流往回跑。你想喊住他们，但他们已经消失在走廊尽头。后来你才知道——他们救了赫敏·格兰杰，三个人从此成了最好的朋友。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 5 },
      { type: "log", text: "🎃 万圣节巨怪事件——哈利·波特三人组的友谊从这里开始。" }
    ]
  },

  {
    id: "story_1_4",
    chapter: "魔法石",
    title: "三楼走廊的秘密",
    summary: "阿不思·邓布利多警告三楼走廊是禁地，你在那里发现了三头犬和一扇活板门，哈利·波特怀疑西弗勒斯·斯内普想偷走门后的东西。",
    dateRange: ["1991-12-01", "1991-12-15"],
    priority: 85,
    condition: { minGrade: 1, minAffinity: { key: "minervaMcGonagall", tier: 1 } },
    prerequisite: "story_1_3",
    knownCharacters: ["albusDumbledore"],
    scenes: [
      {
        speaker: "旁白",
        text: "开学典礼上，一位银发长须的老人站了起来——「我是邓布利多校长，」他微笑着说，「我还有几句话要说。新生请注意，三楼走廊右边是禁地——除非你不想痛苦地死去。」你以为那只是吓唬新生的套话，直到某天深夜……",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你因为忘了课本独自走回教室，经过三楼走廊时，听到一扇门后传来低沉的咆哮。门缝里透出三个巨大的影子——三头犬。你屏住呼吸，正要悄悄退开，却撞上了同样在偷看的哈利·波特和罗恩·韦斯莱。",
        choices: null
      },
      {
        speaker: "罗恩·韦斯莱",
        text: "「嘘——别出声！它好像睡着了……你看它脚底下，有个活板门！」",
        choices: [
          { text: "小声问他们在调查什么", next: 3, reward: null },
          { text: "赶紧拉着他们离开——太危险了", next: 5, reward: { type: "affinity", key: "minervaMcGonagall", delta: 3 } }
        ]
      },
      {
        speaker: "哈利·波特",
        text: "「我们觉得斯内普想通过那扇门偷什么东西。邓布利多把某样东西藏在了那里，而斯内普想要它。」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你还没来得及回应，三头犬其中一个脑袋动了！你们三个拔腿就跑，心脏几乎跳出嗓子。回到公共休息室后，你整晚没睡着——斯内普想偷什么？那扇门后面到底藏着什么？",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你拽着他们快步离开。哈利·波特看起来不太情愿，但罗恩·韦斯莱拍了拍你的肩膀：「她说得对，我们下次再来看。」你不确定「下次」是不是个好主意。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 3 },
      { type: "log", text: "🐕 你在三楼禁地看到了三头犬——它守卫着什么。" }
    ]
  },

  {
    id: "story_1_5",
    chapter: "魔法石",
    title: "圣诞节的隐形衣",
    summary: "圣诞节哈利·波特收到父亲詹姆·波特留下的隐形衣，韦斯莱双胞胎似乎知道更多内情。",
    dateRange: ["1991-12-24", "1991-12-26"],
    priority: 88,
    condition: { minGrade: 1 },
    prerequisite: "story_1_4",
    knownCharacters: ["fredWeasley"],
    scenes: [
      {
        speaker: "旁白",
        text: "圣诞节，大部分学生都回家了，城堡变得格外安静。你在公共休息室翻着假期作业，突然听到一阵骚动——哈利·波特收到了一个奇怪的包裹。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你只瞥见了一眼——那是一件流动着银色光泽的斗篷。哈利·波特迅速把它藏了起来，但韦斯莱双胞胎交换了一个意味深长的眼神。后来你听说，那是詹姆·波特的隐形衣。",
        choices: [
          { text: "找韦斯莱双胞胎打听消息", next: 2, reward: { type: "affinity", key: "fredWeasley", delta: 3 } },
          { text: "不去打听，别人的隐私不该窥探", next: 4, reward: { type: "affinity", key: "constanceShacklebolt", delta: 2 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你找到韦斯莱双胞胎，他们正在走廊上交换圣诞礼物。你旁敲侧击地问起哈利·波特的包裹，弗雷德（或者乔治？）咧嘴一笑：「那是他爸爸留下的，很酷的东西。不过——」他们同时凑近，「如果你半夜听到有人隐形走路的声音，那不是鬼，是波特。」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你笑着记下了这条情报。韦斯莱双胞胎总是什么都知道——也许以后还能从他们那里听到更多。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你翻了个身，继续看你的作业。每个人都有秘密，你不想成为那个偷窥别人隐私的人。不过——隐形衣，那确实很酷。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 3 },
      { type: "log", text: "🎄 圣诞节，哈利·波特收到了父亲的隐形衣。" }
    ]
  },

  {
    id: "story_1_6",
    chapter: "魔法石",
    title: "魔法石之夜",
    summary: "邓布利多被召离学校，哈利·波特、罗恩·韦斯莱、赫敏·格兰杰闯过层层机关守护魔法石，格兰芬多赢得学院杯。",
    dateRange: ["1992-06-01", "1992-06-05"],
    priority: 95,
    condition: { minGrade: 1, minCourseTotal: 20 },
    prerequisite: "story_1_5",
    scenes: [
      {
        speaker: "旁白",
        text: "学期末的气氛异常紧张。邓布利多被魔法部紧急召走，斯内普的脸上写满了焦虑——你从未见过他如此失态。而哈利·波特、罗恩·韦斯莱和赫敏·格兰杰在晚餐时消失了。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "深夜，你被一阵震动惊醒。整个城堡似乎都在颤抖。你跑到窗边，看到三楼走廊的方向闪过一道刺眼的光芒，然后一切归于沉寂。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "第二天早上，消息传遍了整个学校：哈利·波特阻止了某人盗取魔法石，邓布利多连夜赶回，而斯内普教授的腿上缠着绷带。但真正的故事，似乎只有那三个人知道。",
        choices: [
          { text: "去找哈利·波特他们问个清楚", next: 3, reward: null },
          { text: "安静等待——真相总会浮出水面", next: 5, reward: { type: "affinity", key: "minervaMcGonagall", delta: 2 } }
        ]
      },
      {
        speaker: "哈利·波特",
        text: "「……我不能说太多。但魔法石是安全的，不会再有人想偷它了。」他看起来疲惫但坚定，眼神里有一种你从未在同龄人身上见过的东西。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你看着哈利·波特的眼睛，决定不再追问。有些战斗，不是每个人都能参与。但你在心里默默记下了——这个比你矮半个头的男孩，比任何人想象的都要勇敢。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你没有追问。在学期末的宴会上，邓布利多宣布格兰芬多赢得了学院杯——最后时刻的加分让整个大厅沸腾。你举起杯子，为哈利·波特，也为这个不平凡的学年。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 15 },
      { type: "log", text: "💎 魔法石事件结束——格兰芬多赢得了学院杯。" }
    ]
  },

  {
    id: "story_2_1",
    chapter: "密室",
    title: "墙上的血字",
    summary: "墙上出现血字「密室已被打开」，费尔奇的猫被石化，恐惧笼罩霍格沃茨。",
    dateRange: ["1992-10-31", "1992-11-10"],
    priority: 95,
    condition: { minGrade: 2 },
    scenes: [
      {
        speaker: "旁白",
        text: "万圣节，又出事了。你经过一楼走廊时，看到一群人围在女生洗手间外面。墙上用鲜红的字迹写着——",
        choices: null
      },
      {
        speaker: "墙上的字",
        text: "「密室已被打开。与继承人为敌者，警惕。」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "洛丽丝夫人——费尔奇的那只猫——被石化了，僵硬地挂在火把架上。费尔奇抱着猫嚎啕大哭，指控哈利·波特是凶手。而哈利·波特站在人群中间，脸色苍白，一言不发。",
        choices: [
          { text: "站出来替哈利·波特说话", next: 3, reward: { type: "affinity", key: "fredWeasley", delta: 3 } },
          { text: "默默退开——这时候站出来太危险", next: 5, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "「他没有做！」你喊道。周围的人看向你，有人点头，有人摇头。但哈利·波特朝你的方向看了一眼，轻轻点了一下头。有时候，一句公道话比任何咒语都有力。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你退到了人群后面。恐惧像瘟疫一样蔓延——麻瓜出身的学生开始不敢独自走夜路，走廊里的窃窃私语比诅咒更可怕。你不知道谁是继承人，但你知道——沉默也是一种选择。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "从那天起，霍格沃茨变了。走廊里弥漫着恐惧，学生们三三两两地结伴行走。而「斯莱特林的继承人」——这个名字像阴影一样笼罩着每一个人。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 5 },
      { type: "log", text: "🐍 密室被打开——恐惧笼罩霍格沃茨。" }
    ]
  },

  {
    id: "story_2_2",
    chapter: "密室",
    title: "决斗俱乐部的蛇",
    summary: "决斗俱乐部上哈利·波特对蛇施展蛇佬腔，全校怀疑他是斯莱特林继承人。",
    dateRange: ["1992-12-10", "1992-12-20"],
    priority: 90,
    condition: { minGrade: 2 },
    prerequisite: "story_2_1",
    scenes: [
      {
        speaker: "旁白",
        text: "洛哈特教授组织了决斗俱乐部——当然，主要是为了展示他自己。斯内普教授作为助手站在一旁，表情像是在参加葬礼。你坐在观众席上，看着台上的人两两对峙。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "轮到哈利·波特和德拉科·马尔福对决。德拉科·马尔福变出了一条蛇，它滑向了贾斯廷·芬列里。就在所有人惊慌失措的时候，哈利·波特对着蛇喊了什么——蛇停了下来，乖乖地蜷缩在地板上。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "整个大厅安静了。然后，窃窃私语像野火一样蔓延：「蛇佬腔——哈利·波特会说蛇佬腔——他是斯莱特林的继承人！」",
        choices: [
          { text: "「蛇佬腔不代表他就是继承人！」", next: 3, reward: { type: "housePoint", amount: 3 } },
          { text: "心里也犯嘀咕——蛇佬腔确实可疑", next: 4, reward: { type: "affinity", key: "severusSnape", delta: 2 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你的声音在窃窃私语中并不响亮，但坐在旁边的几个同学看了你一眼，若有所思。也许不是所有人都被恐惧蒙蔽了判断。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你看着哈利·波特离开大厅的背影，心里也在打鼓。蛇佬腔——那是黑巫师的标志。但哈利·波特……他看起来比任何人都害怕。也许害怕本身，就说明了他不是坏人。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🐍 哈利·波特在决斗俱乐部展示了蛇佬腔——怀疑和恐惧在蔓延。" }
    ]
  },

  {
    id: "story_2_3",
    chapter: "密室",
    title: "密室关闭",
    summary: "赫敏·格兰杰被石化，哈利·波特深入密室斩杀蛇怪，销毁伏地魔日记魂器，被石化的学生全部恢复。",
    dateRange: ["1993-05-25", "1993-06-05"],
    priority: 95,
    condition: { minGrade: 2, minCourseTotal: 40 },
    prerequisite: "story_2_2",
    scenes: [
      {
        speaker: "旁白",
        text: "赫敏·格兰杰被石化了。你看到哈利·波特站在校医院门口，攥着一张纸条，手指发白。那是赫敏·格兰杰被石化时手中紧握的线索——上面只写着一个词：「管子」。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "那天夜里，你又感觉到了那种震动——和去年魔法石之夜一样。第二天早上，好消息传遍了学校：密室被关闭了，蛇怪被杀死了，所有被石化的学生都在恢复。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "哈利·波特又一次成了英雄。但这一次，你注意到他看起来并不高兴。后来你听说，真正打开密室的不是什么继承人——而是一本日记，伏地魔十六岁时的日记。它控制了一个学生，而那个学生，也是受害者。",
        choices: [
          { text: "去校医院探望正在恢复的同学", next: 3, reward: { type: "affinity", key: "pomonaSprout", delta: 3 } },
          { text: "找到哈利·波特，告诉他做得好", next: 4, reward: { type: "housePoint", amount: 5 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你在校医院看到了正在恢复的赫敏·格兰杰。她一醒来就问：「哈利没事吧？」你告诉她哈利·波特很好，她终于笑了。有时候，最勇敢的人不是挥舞宝剑的那个，而是醒来第一句话问别人安危的那个。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你在走廊上追上了哈利·波特。他看起来很累，但听到你的话后，他勉强笑了一下：「谢谢。」就两个字，但你知道他听进去了。在所有人都把你当英雄的时候，一句简单的「你做得好」反而最珍贵。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 10 },
      { type: "material", name: "蛇牙", count: 1 },
      { type: "log", text: "⚔️ 密室被关闭，蛇怪被击败——但真正的威胁远未结束。" }
    ]
  },

  {
    id: "story_3_1",
    chapter: "阿兹卡班",
    title: "摄魂怪",
    summary: "摄魂怪闯入霍格沃茨特快列车，莱姆斯·卢平教授用守护神咒驱散了它，分发巧克力帮助大家恢复。",
    dateRange: ["1993-09-01", "1993-09-05"],
    priority: 95,
    condition: { minGrade: 3 },
    knownSpells: ["expectoPatronum"],
    scenes: [
      {
        speaker: "旁白",
        text: "霍格沃茨特快列车上，一切本来很正常。你和同学们交换暑假见闻，有人买了新猫头鹰，有人在翻新课本。然后——车厢突然变得冰冷刺骨。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "窗外的灯光熄灭了，车窗上结出霜花。一种你从未感受过的恐惧从心底升起——仿佛世界上所有的快乐都被抽走了。你感到意识在模糊，眼前一片黑暗……",
        choices: null
      },
      {
        speaker: "旁白",
        text: "「呼神护卫！」一道银白色的光芒驱散了黑暗。莱姆斯·卢平教授站在门口，魔杖发出温暖的光。那个穿着黑色斗篷的摄魂怪退去了，但它留下的寒冷，很久都没有消散。",
        choices: [
          { text: "向莱姆斯·卢平教授道谢", next: 3, reward: { type: "housePoint", amount: 3 } },
          { text: "蜷缩在座位上，试图平复心情", next: 4, reward: null }
        ]
      },
      {
        speaker: "莱姆斯·卢平",
        text: "「吃点巧克力，」他从口袋里掏出一大块巧克力递给你，「这是对付摄魂怪后遗症最好的办法。」你接过来，甜味慢慢把寒冷挤了出去。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你蜷缩在座位上，身体还在发抖。那种寒冷不是温度——是灵魂深处的空洞。你发誓，总有一天要学会守护神咒。不是为了战斗，而是为了不再那么无助。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 3 },
      { type: "log", text: "👻 摄魂怪出现在霍格沃茨特快上——今年不会太平。" }
    ]
  },

  {
    id: "story_3_2",
    chapter: "阿兹卡班",
    title: "尖叫棚屋的真相",
    summary: "尖叫棚屋揭开真相：小天狼星·布莱克无辜，真正的叛徒是伪装成老鼠藏了十二年的小矮星·彼得，但他逃脱了。",
    dateRange: ["1994-04-15", "1994-04-25"],
    priority: 95,
    condition: { minGrade: 3, minAffinity: { key: "severusSnape", tier: 1 } },
    prerequisite: "story_3_1",
    knownSpells: ["imperio"],
    scenes: [
      {
        speaker: "旁白",
        text: "深夜，你被一阵骚动惊醒。有人在喊，打人柳在疯狂地挥舞枝条。你跑到窗边，看到几个身影冲进了柳树下的通道。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "第二天，消息像炸弹一样在学生中炸开：小天狼星·布莱克——那个从阿兹卡班逃出来的杀人犯——昨晚就在霍格沃茨。但更令人震惊的是——他是无辜的。真正的叛徒是小矮星·彼得，他伪装成老鼠藏了十二年。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你注意到斯内普教授那天上课时格外阴沉。后来你听说，他在尖叫棚屋差点对布莱克施了夺魂咒——不是因为布莱克是逃犯，而是因为一段更久远的恩怨。有时候，仇恨比真相更难放下。",
        choices: [
          { text: "试着理解斯内普教授的愤怒", next: 3, reward: { type: "affinity", key: "severusSnape", delta: 4 } },
          { text: "觉得布莱克既然无辜就该被释放", next: 4, reward: { type: "housePoint", amount: 3 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你想起斯内普教授在课堂上偶尔流露的痛苦——不是对学生的不耐烦，而是更深的东西。你不知道他的故事，但你开始理解：有些人的愤怒，不是因为恨，而是因为伤得太深。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你希望正义能够伸张。但彼得逃跑了，布莱克无法在法律上证明自己的清白。你看着窗外的月光，第一次觉得——这个世界并不总是公平的。但至少，有些人还在为公平而战。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 8 },
      { type: "log", text: "🌙 尖叫棚屋的真相——布莱克是无辜的，但正义并不总是来得及时。" }
    ]
  },

  {
    id: "story_4_1",
    chapter: "火焰杯",
    title: "火焰杯的选择",
    summary: "三强争霸赛火焰杯喷出第四个名字——哈利·波特，有人暗中做了手脚，但他必须参赛。",
    dateRange: ["1994-10-15", "1994-11-05"],
    priority: 95,
    condition: { minGrade: 4 },
    scenes: [
      {
        speaker: "旁白",
        text: "布斯巴顿和德姆斯特朗的代表团抵达了霍格沃茨。大厅里充满了兴奋——三强争霸赛，几个世纪以来最危险的魔法竞赛。你看着那些高年级学生把名字投入火焰杯，心里也在想：如果自己够年龄，会不会也试试？",
        choices: null
      },
      {
        speaker: "旁白",
        text: "万圣节之夜，火焰杯依次喷出三个名字：塞德里克·迪戈里——霍格沃茨！芙蓉·德拉库尔——布斯巴顿！维克多·克鲁姆——德姆斯特朗！就在所有人以为结束时——火焰杯又喷出了第四个名字。",
        choices: null
      },
      {
        speaker: "阿不思·邓布利多",
        text: "「哈利·波特。」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "整个大厅死一般的寂静。哈利·波特自己看起来比任何人都震惊。这不是正常的比赛——有人做了手脚。但火焰杯的契约不可违背，他必须参赛。",
        choices: [
          { text: "相信哈利·波特——他一定不是自愿的", next: 4, reward: { type: "housePoint", amount: 3 } },
          { text: "觉得他可能在耍花招——为什么要出风头", next: 5, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "你看着哈利·波特苍白的脸，心里很清楚——没有人会自愿参加这种比赛。他和你一样，只是一个被卷入漩涡的学生。你决定相信他。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你摇了摇头。四年级就参加三强争霸赛？太巧了。但后来你看到哈利·波特独自坐在湖边，盯着水面发呆——那不像一个出风头的人，那像一个害怕的人。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 5 },
      { type: "log", text: "🔥 三强争霸赛——哈利·波特被火焰杯选中，有人暗中操纵。" }
    ]
  },

  {
    id: "story_4_2",
    chapter: "火焰杯",
    title: "墓地的闪光",
    summary: "塞德里克·迪戈里在墓地被杀，哈利·波特带着他的遗体回到霍格沃茨，宣告伏地魔已经复活。",
    dateRange: ["1995-06-24", "1995-06-28"],
    priority: 100,
    condition: { minGrade: 4, minCourseTotal: 60 },
    prerequisite: "story_4_1",
    scenes: [
      {
        speaker: "旁白",
        text: "第三个项目的迷宫矗立在魁地奇球场上。你坐在观众席上，看着参赛者一个个消失在树篱之间。塞德里克·迪戈里和哈利·波特同时冲向了奖杯——然后，他们消失了。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "漫长的等待。观众席上的窃窃私语变成了焦虑，焦虑变成了恐惧。邓布利多站了起来，他的脸上第一次出现了你从未见过的表情——不是愤怒，不是悲伤，而是某种深沉的……预感。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "一道闪光——哈利·波特回来了。他抱着塞德里克·迪戈里的尸体，跪在地上，声嘶力竭地喊：「他回来了！伏地魔回来了！」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "大礼堂里一片混乱。有人在哭，有人在尖叫，有人拒绝相信。但邓布利多站了起来，他的声音穿过所有喧嚣——",
        choices: null
      },
      {
        speaker: "阿不思·邓布利多",
        text: "「塞德里克·迪戈里是被伏地魔杀死的。记住这一点，因为魔法部不会告诉你们真相。黑暗时代回来了——但只要有人愿意站出来，光明就不会消失。」",
        choices: [
          { text: "站起来，表明自己不会退缩", next: 6, reward: { type: "housePoint", amount: 10 } },
          { text: "沉默——但握紧了拳头", next: 7, reward: { type: "affinity", key: "severusSnape", delta: 3 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你站了起来。你的腿在发抖，但你的声音没有：「我们不会怕。」周围的人看向你，有人跟着站了起来，一个，两个，十个……恐惧不会因为一个人站起来就消失，但勇气会传染。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你没有站起来，但你握紧了拳头。你看着哈利·波特被搀扶着离开大厅，他回头的瞬间，你和他的目光交汇——你知道，从今天起，一切都不同了。沉默不是懦弱，有时候，它是在积蓄力量。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 15 },
      { type: "log", text: "⚡ 伏地魔回归——塞德里克·迪戈里牺牲，黑暗时代降临。" }
    ]
  },

  {
    id: "story_5_1",
    chapter: "凤凰社",
    title: "粉色的独裁",
    summary: "魔法部高级调查员乌姆里奇用禁令统治学校，学生们在有求必应屋秘密组建邓布利多军，由哈利·波特教授防御术。",
    dateRange: ["1995-09-10", "1995-09-25"],
    priority: 90,
    condition: { minGrade: 5 },
    knownSpells: ["expelliarmus", "expectoPatronum"],
    scenes: [
      {
        speaker: "旁白",
        text: "新学期，霍格沃茨换了一位新老师——乌姆里奇教授，魔法部高级调查员。她穿着粉色的开衫，笑起来像一只猫，但她的每一道教育令都像一把刀。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "「不许使用魔杖练习！」「不许三人以上聚会！」「所有学生组织必须经过批准！」走廊里挂满了粉色猫盘子的装饰，和那些冰冷的禁令形成了一种荒诞的对比。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你听到传闻——有学生在秘密组织防御术学习小组。他们叫自己「邓布利多军」，在有求必应屋训练。你认识的一些人已经加入了。",
        choices: [
          { text: "加入邓布利多军", next: 3, reward: { type: "housePoint", amount: 5 } },
          { text: "不加入，但帮他们放风", next: 4, reward: { type: "affinity", key: "constanceShacklebolt", delta: 3 } },
          { text: "远离这一切——太危险了", next: 5, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "你走进有求必应屋，看到一群学生围坐在一起。有人在教缴械咒，有人在练习守护神咒。这里没有乌姆里奇的规矩，只有勇气和决心。你举起魔杖——这是你今年上的第一堂真正的课。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你没有加入，但你自愿在走廊上放风。每当乌姆里奇巡视经过，你就假装在看书。有一次她停下来看你，你面不改色地翻了一页——你手里拿的是《与吸血鬼同船旅行》，洛哈特写的。她嗤了一声走了。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你选择了远离。不是不在乎——而是你知道自己的位置。不是每个人都需要站在前线，但你会在后方默默支持。也许有一天，你会找到属于自己的战斗方式。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🛡️ 乌姆里奇的统治下，反抗的火种在地下燃烧。" }
    ]
  },

  {
    id: "story_6_1",
    chapter: "混血王子",
    title: "王子的笔记",
    summary: "哈利·波特在旧课本上发现混血王子的批注，魔药天赋突飞猛进，但书中的黑魔法咒语也带来了危险。",
    dateRange: ["1996-09-15", "1996-10-01"],
    priority: 90,
    condition: { minGrade: 6 },
    scenes: [
      {
        speaker: "旁白",
        text: "新学期的魔药课上，斯拉格霍恩教授让每个人去储物柜拿课本。你拿到的那本很普通，但你注意到哈利·波特的课本——破旧不堪，封面上潦草地写着「混血王子的财产」。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "那堂课上，哈利·波特调配出了全班最好的魔药——活地狱剂，完美得连斯拉格霍恩教授都惊叹不已。你看到他偷偷翻着课本上的批注，那些手写的小字比课本原文精妙十倍。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "但事情在后来变得不对劲。哈利·波特的咒语越来越诡异——有一次他对德拉科·马尔福施了一个你从未听过的咒语，德拉科·马尔福满脸是血。哈利·波特自己看起来也被吓到了。那本课本——也许不只是笔记那么简单。",
        choices: [
          { text: "提醒哈利·波特小心那本书", next: 3, reward: { type: "housePoint", amount: 5 } },
          { text: "自己也对那本笔记产生了好奇", next: 4, reward: { type: "affinity", key: "severusSnape", delta: 3 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你在走廊上拦住了哈利·波特：「那本书——小心点。」他看了你一眼，沉默了几秒，然后点了点头。后来他把书藏回了有求必应屋。你不知道自己是否阻止了什么，但至少——你说了该说的话。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你忍不住去查了「混血王子」这个名字。图书馆里没有线索，但你注意到西弗勒斯·斯内普教授在课上看了哈利·波特一眼——那个眼神不是厌恶，而是某种更复杂的东西。也许他知道「王子」是谁。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 5 },
      { type: "log", text: "📖 混血王子的课本——知识是双刃剑，力量和危险只有一线之隔。" }
    ]
  },

  {
    id: "story_6_2",
    chapter: "混血王子",
    title: "天文塔的绿光",
    summary: "食死徒攻入霍格沃茨，西弗勒斯·斯内普在天文塔对阿不思·邓布利多施出索命咒，校长从塔顶坠落。",
    dateRange: ["1997-06-01", "1997-06-05"],
    priority: 100,
    condition: { minGrade: 6, minCourseTotal: 80 },
    prerequisite: "story_6_1",
    knownSpells: ["avadaKedavra"],
    scenes: [
      {
        speaker: "旁白",
        text: "食死徒攻入了霍格沃茨。黑魔标记在天文塔上燃烧，绿色的骷髅照亮了整个夜空。你在走廊上和同学一起奔跑，咒语从四面八方飞来。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "战斗结束后，你看到了最不想看到的一幕——邓布利多校长从天文塔上坠落。他的身体像一片叶子一样飘落，银色的胡须在夜风中飘动。整个城堡陷入了死寂。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你后来听说了真相：西弗勒斯·斯内普教授——那个一直保护你们的斯内普——亲手对阿不思·邓布利多施了索命咒。他逃走了，和食死徒一起。你不知道该恨他还是该理解他，但此刻——你只知道，最信任的人，有时候伤你最深。",
        choices: [
          { text: "愤怒——他是个叛徒", next: 3, reward: { type: "housePoint", amount: 5 } },
          { text: "困惑——阿不思·邓布利多为什么信任他？", next: 4, reward: { type: "affinity", key: "albusDumbledore", delta: 3 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你攥紧魔杖，指甲陷入掌心。西弗勒斯·斯内普——你上过他的课，被他扣过分，也在他那里学到过东西。而现在，他成了一个杀人犯。你不知道还能相信谁。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "阿不思·邓布利多信任西弗勒斯·斯内普——这是所有人都知道的事实。阿不思·邓布利多从不犯错——这也是所有人都相信的。那么，到底是阿不思·邓布利多看走了眼，还是……你不敢想下去。有些问题，答案可能比你承受得了的更沉重。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 10 },
      { type: "log", text: "💀 阿不思·邓布利多陨落——霍格沃茨失去了它最伟大的守护者。" }
    ]
  },

  {
    id: "story_7_1",
    chapter: "死亡圣器",
    title: "最后的战斗",
    summary: "霍格沃茨大战爆发，师生并肩抵抗食死徒，哈利·波特最终击败伏地魔，光明重归。",
    dateRange: ["1998-05-01", "1998-05-03"],
    priority: 100,
    condition: { minGrade: 7, minCourseTotal: 100 },
    scenes: [
      {
        speaker: "旁白",
        text: "霍格沃茨上空黑云压城。食死徒的军队正在逼近，而城堡里的每一个人——学生、教师、凤凰社成员——都在准备最后的战斗。米勒娃·麦格教授唤醒了城堡里所有的石像鬼和盔甲骑士，千年古堡展现出了最后的守护之力。",
        choices: null
      },
      {
        speaker: "米勒娃·麦格",
        text: "「所有不想战斗的人，现在可以离开。没有人会怪你们。」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "没有人离开。你握紧魔杖，站在同伴中间。七年前你走进大礼堂的时候，只是一个不知道自己属于哪里的新生。而现在——你知道自己属于这里。你属于霍格沃茨。",
        choices: [
          { text: "守在大厅，保护低年级学生", next: 3, reward: { type: "affinity", key: "minervaMcGonagall", delta: 5 } },
          { text: "冲上城墙，与食死徒正面作战", next: 5, reward: { type: "housePoint", amount: 20 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你守在大厅里，用咒语筑起屏障。爆炸声从四面八方传来，但你没有后退。在你身后，是那些还不能战斗的孩子——他们是你要守护的理由。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "一个食死徒突破了防线，你挡在他面前，施出了七年来学到的所有咒语。他被打退了。你喘着粗气，手在发抖，但你没有倒下。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你冲上城墙，咒语从魔杖尖端喷涌而出。七年的学习、训练、决斗——都在这一刻汇聚成力量。你不再是那个走进大礼堂的新生，你是一名战士。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "黎明来了。伏地魔倒下了。城堡满目疮痍，但阳光终于穿透了黑云。你站在废墟之中，看着身边的人——有人倒下了，有人还在。你活了下来。活着，就是最大的胜利。而你在这里度过的七年——每一堂课、每一次决斗、每一个选择——都让你成为了此刻站在这里的人。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 50 },
      { type: "affinity", key: "minervaMcGonagall", delta: 8 },
      { type: "material", name: "凤凰羽毛", count: 2 },
      { type: "log", text: "🏰 霍格沃茨大战结束——光明终将战胜黑暗。你活了下来。" }
    ]
  }
];

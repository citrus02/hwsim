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
        text: "大礼堂千支蜡烛悬浮在半空，四张长桌上方飘动着学院旗帜。\n\n新生们排成一列走进来，领头的女教授神情严肃，绿色长袍笔挺。\n\n麦格教授：\n「我是麦格教授。」\n\n她推了推方形眼镜。\n\n麦格教授：\n「分院仪式马上开始。」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "新生们紧张地排成一排。\n\n你注意到其中三个人格外引人注目：\n\n- 一个黑发瘦小的男孩，站在人群里显得有些局促。\n- 一个红头发的男孩，不停地朝长桌方向张望。\n- 一个头发蓬松的女孩，努力站得笔直，像是已经把所有规则都背熟了。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "麦格教授：\n「哈利·波特！」\n\n这个名字一出口，整个大礼堂爆发出窃窃私语。\n\n那个黑发男孩紧张地走上前，分院帽盖住了他的眼睛。\n\n漫长的沉默之后——",
        choices: null
      },
      {
        speaker: "分院帽",
        text: "「格兰芬多！」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "格兰芬多长桌爆发出欢呼！\n\n韦斯莱双胞胎：\n「我们有波特了！我们有波特了！」\n\n斯莱特林那边一片死寂。\n\n一个金发男孩甚至摔了杯子。",
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
        text: "接下来轮到那个红发男孩。\n\n麦格教授：\n「韦斯莱，罗恩！」\n\n分院帽几乎刚碰到他的头就喊了出来。\n\n分院帽：\n「格兰芬多！」\n\n罗恩松了口气，跑到哈利·波特身边坐下。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "然后是那个头发蓬松的女孩。\n\n麦格教授：\n「格兰杰，赫敏！」\n\n分院帽思考了片刻。\n\n分院帽：\n「格兰芬多！」\n\n她快步走向长桌，虽然看起来有些紧张，但嘴角带着笑意。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "麦格教授：\n「马尔福，德拉科！」\n\n刚才那个金发男孩傲慢地走上前。\n\n分院帽甚至还没完全落在他头上。\n\n分院帽：\n「斯莱特林！」\n\n他露出得意的笑容走向斯莱特林长桌。\n\n路过格兰芬多时，他朝哈利·波特投去一个轻蔑的眼神。\n\n你记住了这个名字：德拉科·马尔福。\n\n看来他不会是哈利·波特的朋友。",
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
        text: "你以为哈利·波特要被罚了，但麦格教授把他带走了——不是去罚站，而是去找了霍琦夫人。走廊上，你路过一个黑袍教授，他冷冷地看了你一眼——那是魔药课教授斯内普，据说他最讨厌格兰芬多的学生。第二天，格兰芬多学院公告栏上贴出了消息：哈利·波特成为格兰芬多找球手，一个世纪以来最年轻的。",
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
  },

  {
    id: "story_0_1",
    chapter: "入学前",
    title: "海格的来信",
    summary: "哈利·波特11岁生日那天，鲁伯·海格破门而入，告诉他——你是一个巫师，哈利。",
    dateRange: ["1991-07-31", "1991-08-05"],
    priority: 100,
    condition: { minGrade: 0 },
    scenes: [
      {
        speaker: "旁白",
        text: "暴风雨之夜，海上的小木屋摇摇欲坠。一个黑发瘦小的男孩坐在地板上，盯着钟表——再过几分钟，他就十一岁了。他叫哈利·波特，一个住在楼梯间储物间的男孩，他的姨妈一家从未对他说过一句好话。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "咚——咚——咚——门被敲响了。不是姨妈，不是姨父，而是一个几乎把门框挤满的巨人。他穿着一件巨大的鼹鼠皮大衣，满脸络腮胡子，手里——不可思议地——拿着一个粉色的生日蛋糕。",
        choices: null
      },
      {
        speaker: "鲁伯·海格",
        text: "「哈利——你是一个巫师。」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "整个世界在那一刻改变了。霍格沃茨——一个你从未听说过的魔法学校——已经为你准备好了入学通知。而那个额头上有闪电伤疤的男孩，终于知道了自己真正的身份。",
        choices: [
          { text: "为哈利·波特感到高兴——他终于自由了", next: 4, reward: null },
          { text: "隐隐羡慕——如果也能收到那样的信", next: 5, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "你看着那个男孩捧着生日蛋糕的样子，眼眶有些发热。十一年的楼梯间、十一年的冷眼——都结束了。他终于知道，自己不是废物，不是怪胎，而是一个巫师。一个和你们一样的人。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你忍不住想：如果有一天，也有人敲响你的门，告诉你——你也是特别的，你也属于另一个世界……那该多好。也许，你的信已经在路上了。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🎂 哈利·波特11岁生日——一个巫师的旅程从这里开始。" }
    ]
  },

  {
    id: "story_0_2",
    chapter: "入学前",
    title: "对角巷",
    summary: "哈利·波特在鲁伯·海格陪同下首次踏入对角巷，在奥利凡德魔杖店被冬青木凤凰羽毛魔杖选中。",
    dateRange: ["1991-08-15", "1991-08-20"],
    priority: 95,
    condition: { minGrade: 0 },
    prerequisite: "story_0_1",
    scenes: [
      {
        speaker: "旁白",
        text: "破釜酒吧的后墙打开了——一条铺满鹅卵石的街道在阳光下闪闪发光。对角巷，巫师世界的心脏。你第一次看到这样的景象：飞天扫帚在橱窗里悬浮，坩埚在店铺门口冒着蒸汽，猫头鹰在笼子里咕咕叫。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "奥利凡德魔杖店——那是一家又窄又小的店铺，橱窗里只摆了一根魔杖，褪色的金字写着：公元前382年即制杖。奥利凡德先生从黑暗中走出来，银白色的眼睛像月亮一样发光。",
        choices: null
      },
      {
        speaker: "奥利凡德",
        text: "「我记住了卖出的每一根魔杖。冬青木，凤凰羽毛，十一英寸。不寻常的组合——冬青木意味着适合战斗，而它的主人注定要成就一番伟业。」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "哈利·波特握住那根魔杖的瞬间，一道金色的光芒从杖尖喷涌而出。奥利凡德微笑着，但他的眼神里有一丝不安——那根魔杖的凤凰羽毛，和伏地魔的魔杖——来自同一只凤凰。",
        choices: [
          { text: "好奇——两根魔杖之间有什么联系？", next: 4, reward: null },
          { text: "只觉得替哈利·波特高兴——他找到了自己的魔杖", next: 5, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "你记住了奥利凡德先生的话：「魔杖选择巫师。」同源凤凰羽毛——这意味着什么？你不知道，但直觉告诉你，这个细节日后会变得很重要。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你看着哈利·波特走出魔杖店，脸上带着一种从未见过的表情——不是开心，而是……归属感。他终于找到了一样属于自己的东西。你低头看了看自己的魔杖——它也在等你。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🪄 对角巷——魔杖选择了它的主人，命运的齿轮开始转动。" }
    ]
  },

  {
    id: "story_0_3",
    chapter: "入学前",
    title: "九又四分之三站台",
    summary: "哈利·波特在国王十字车站穿过第九和第十站台之间的墙壁，登上霍格沃茨特快，结识了罗恩·韦斯莱与赫敏·格兰杰。",
    dateRange: ["1991-09-01", "1991-09-02"],
    priority: 98,
    condition: { minGrade: 0 },
    prerequisite: "story_0_2",
    scenes: [
      {
        speaker: "旁白",
        text: "国王十字车站，人潮涌动。哈利·波特推着装满行李的手推车站在第九和第十站台之间，看着那堵坚实的砖墙——韦斯莱夫人说，直接走过去就行。走过去？撞墙？",
        choices: null
      },
      {
        speaker: "旁白",
        text: "他闭上眼，加快脚步——砖墙没有撞上来。当他睁开眼，一辆鲜红色的蒸汽机车正停在铁轨上，标牌上写着：霍格沃茨特快，11点。站台上挤满了巫师家庭，猫头鹰在笼子里叫，蟾蜍从口袋里跳出来。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "火车上，一个红头发的男孩敲了敲包厢门：「这里有人吗？到处都满了。」这是罗恩·韦斯莱——韦斯莱家最小的儿子，口袋里揣着一只无毛老鼠，兜里装着妈妈做的三明治。然后，一个头发蓬松的女孩探进头来——「有人看到一只蟾蜍吗？纳威丢了一只。」这是赫敏·格兰杰，她已经把所有课本背下来了。",
        choices: [
          { text: "期待自己的霍格沃茨之旅", next: 3, reward: null },
          { text: "好奇——这三个人的命运从此交织", next: 4, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "你看着火车缓缓驶离车站，穿过伦敦的郊区，向着北方的苏格兰高地进发。窗外的风景从城市变成了田野，从田野变成了山峦。你知道，当这列火车到站的时候，你的新生活就要开始了。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你看着包厢里的三个人——一个黑发男孩、一个红发男孩、一个蓬发女孩——你有一种奇怪的预感：他们三个的故事，将会改变整个巫师世界。而你，也即将踏上这列火车。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🚂 九又四分之三站台——通往魔法世界的入口，一切从这里开始。" }
    ]
  },

  {
    id: "story_2_0",
    chapter: "密室",
    title: "多比的警告",
    summary: "多比闯入哈利·波特的卧室警告他不要回霍格沃茨，但哈利·波特拒绝了——他宁愿面对危险也不愿回到那个楼梯间。",
    dateRange: ["1992-07-31", "1992-08-05"],
    priority: 88,
    condition: { minGrade: 1 },
    prerequisite: "story_1_6",
    scenes: [
      {
        speaker: "旁白",
        text: "暑假，哈利·波特又被关在了女贞路4号。窗外是闷热的萨里郡午后，猫头鹰被锁在了笼子里，魔杖被锁在了楼梯间下面。他唯一的伙伴是那只叫赫德薇的雪鸮——而她今天似乎格外焦躁。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "然后，一个家养小精灵从衣柜里跳了出来。他穿着一只袜子和一条破旧枕套，巨大的绿色眼睛里满是泪水。他叫多比——他来警告哈利·波特：不要回霍格沃茨，那里会有可怕的事情发生。",
        choices: null
      },
      {
        speaker: "多比",
        text: "「哈利·波特不能回霍格沃茨！那里不安全！有阴谋——针对哈利·波特的阴谋！」",
        choices: [
          { text: "理解多比的担忧——但霍格沃茨才是家", next: 3, reward: { type: "housePoint", amount: 3 } },
          { text: "好奇——到底是什么阴谋？", next: 4, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "你理解哈利·波特的选择。女贞路4号从来不是家——霍格沃茨才是。即使那里有危险，即使有人密谋，那也是他唯一被需要的地方。有时候，危险不可怕，可怕的是回到那个没有人在乎你的地方。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "多比不肯说出更多——他的主人不允许。但他的恐惧是真实的。你看着那个小小的身影拼命用台灯砸自己的头，心里一阵难受。在巫师世界，连家养小精灵的自由都要靠一只袜子来交换。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🧦 多比的警告——有人不想让哈利·波特回到霍格沃茨。" }
    ]
  },

  {
    id: "story_2_0b",
    chapter: "密室",
    title: "飞车撞打人柳",
    summary: "哈利·波特和罗恩·韦斯莱因无法进入九又四分之三站台，驾驶韦斯莱先生的飞天汽车追赶火车，最终撞上打人柳。",
    dateRange: ["1992-09-01", "1992-09-03"],
    priority: 85,
    condition: { minGrade: 2 },
    prerequisite: "story_2_0",
    scenes: [
      {
        speaker: "旁白",
        text: "9月1日，国王十字车站。哈利·波特和罗恩·韦斯莱推着行李冲向九又四分之三站台——但入口没有打开。他们撞上了坚实的墙壁，周围麻瓜纷纷侧目。入口被封锁了。",
        choices: null
      },
      {
        speaker: "罗恩·韦斯莱",
        text: "「我爸的车还在停车场！我们飞过去！」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "一辆天蓝色的福特安格利亚飞上了天空。他们在云层中追踪霍格沃茨特快的踪迹，穿过暴风雨和低飞的麻瓜直升机。但当他们终于看到霍格沃茨城堡时，汽车开始失控——",
        choices: null
      },
      {
        speaker: "旁白",
        text: "砰！他们撞上了打人柳。那棵巨大的魔法柳树疯狂地挥舞着枝条，像拳头一样砸向汽车。车门被砸扁，车窗碎裂，罗恩·韦斯莱的魔杖折断了。他们狼狈地从车里爬出来，被斯内普教授逮了个正着。",
        choices: [
          { text: "替他们捏了把汗——这也太冒险了", next: 4, reward: null },
          { text: "忍不住想笑——飞车上学，韦斯莱风格", next: 5, reward: { type: "affinity", key: "fredWeasley", delta: 2 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你听说这件事的时候，心跳都漏了一拍。飞天汽车穿越半个英国？撞上打人柳？韦斯莱先生如果知道了……不过，至少他们安全到了。虽然罗恩·韦斯莱的魔杖再也修不好了。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你忍不住笑了。韦斯莱家的人从来不按常理出牌——弗雷德和乔治把雪橇变成了火箭，罗恩·韦斯莱把汽车变成了飞行器。也许这就是格兰芬多的风格：规则是给没有勇气的人准备的。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🚗 飞车撞打人柳——最离谱的开学方式，但至少他们到了。" }
    ]
  },

  {
    id: "story_3_0",
    chapter: "阿兹卡班",
    title: "布莱克越狱",
    summary: "小天狼星·布莱克从阿兹卡班越狱的消息震惊了整个巫师世界，摄魂怪被派往霍格沃茨守卫。",
    dateRange: ["1993-07-15", "1993-07-25"],
    priority: 88,
    condition: { minGrade: 2 },
    prerequisite: "story_2_3",
    scenes: [
      {
        speaker: "旁白",
        text: "暑假的《预言家日报》头版登出了一条令人毛骨悚然的消息：小天狼星·布莱克——第一个从阿兹卡班越狱的囚犯。他因出卖詹姆·波特和莉莉·波特给伏地魔、杀害十二个麻瓜和一位巫师而被判终身监禁。现在，他逃了。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "整个巫师世界陷入了恐慌。阿兹卡班的摄魂怪被派往霍格沃茨守卫——这意味着，今年你们将在摄魂怪的阴影下生活。你看到哈利·波特的脸色格外苍白——布莱克越狱的动机，据说与哈利·波特有关。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "火车上，你第一次见到了摄魂怪——那种寒冷不是温度，而是灵魂深处的空洞。你看到哈利·波特在座位上颤抖，脸色惨白，几乎要失去意识。一个新来的教授——莱姆斯·卢平——用守护神咒驱散了它。",
        choices: [
          { text: "担心哈利·波特——摄魂怪似乎对他影响更大", next: 3, reward: { type: "housePoint", amount: 2 } },
          { text: "恐惧——如果摄魂怪能闯入火车，学校还安全吗？", next: 4, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "你注意到哈利·波特在摄魂怪出现时比任何人都痛苦。后来你听说，他的父母在伏地魔手下丧命——也许摄魂怪唤起了他最深的伤痛。你默默记下了：守护神咒，也许今年该认真学一学。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你攥紧了拳头。如果摄魂怪能闯入火车，那霍格沃茨呢？邓布利多说过，摄魂怪不会区分敌友——它们只在乎灵魂。你决定，今年要更加小心。黑暗中行走，需要更多的光。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🌑 布莱克越狱——摄魂怪进驻霍格沃茨，恐惧的阴影笼罩新学年。" }
    ]
  },

  {
    id: "story_3_1b",
    chapter: "阿兹卡班",
    title: "守护神咒",
    summary: "莱姆斯·卢平教授秘密教授哈利·波特守护神咒，以对抗摄魂怪的影响。哈利·波特的守护神是一头银色的牡鹿。",
    dateRange: ["1993-10-01", "1993-10-15"],
    priority: 85,
    condition: { minGrade: 3 },
    prerequisite: "story_3_1",
    scenes: [
      {
        speaker: "旁白",
        text: "卢平教授的课是今年最受欢迎的——他是近年来最好的黑魔法防御术教授。但更让人好奇的是，他经常在课后单独指导哈利·波特。你偶然经过教室时，听到了一个你从未听过的咒语——",
        choices: null
      },
      {
        speaker: "莱姆斯·卢平",
        text: "「呼神护卫——你需要集中所有快乐的记忆，让它们变成光。」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你从门缝里看到，一道银白色的光芒从哈利·波特的魔杖尖端涌出——那是一头银色的牡鹿，它踏着光芒奔跑，角上闪烁着星光。摄魂怪如果在这里，一定会被这光芒驱散。",
        choices: [
          { text: "偷偷记下咒语，自己也想学", next: 3, reward: { type: "housePoint", amount: 3 } },
          { text: "悄悄离开——这是他们的秘密", next: 4, reward: { type: "affinity", key: "severusSnape", delta: 2 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你在角落里默默记下了咒语的发音和手势。守护神咒——也许有一天你也需要它。你闭上眼，试着回忆最快乐的瞬间……但什么也没发生。没关系，有些咒语需要时间。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你转身离开。有些秘密不该被窥探——卢平教授教哈利·波特守护神咒，一定有他的理由。你走回走廊，月光洒在石板地上，你听到了远处摄魂怪巡逻时带来的寒意。你加快了脚步。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🦌 哈利·波特的守护神是一头银色的牡鹿——和他父亲的阿尼马格斯形态一样。" }
    ]
  },

  {
    id: "story_3_2b",
    chapter: "阿兹卡班",
    title: "时间转换器",
    summary: "赫敏·格兰杰使用时间转换器回到过去，与哈利·波特一起拯救了巴克比克和小天狼星·布莱克。",
    dateRange: ["1994-06-06", "1994-06-10"],
    priority: 90,
    condition: { minGrade: 3, minCourseTotal: 50 },
    prerequisite: "story_3_2",
    scenes: [
      {
        speaker: "旁白",
        text: "学期末，坏消息接踵而来：巴克比克被判了死刑，小天狼星·布莱克被关在塔楼里等待摄魂怪的亲吻。一切似乎已经无法挽回——直到邓布利多在哈利·波特耳边说了一句话。",
        choices: null
      },
      {
        speaker: "阿不思·邓布利多",
        text: "「如果一切顺利，你们可以……拯救不止一条生命。」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你不知道那天晚上发生了什么——但第二天早上，巴克比克不见了，小天狼星·布莱克也消失了。而赫敏·格兰杰——那个永远按时上课、从不迟到的女孩——竟然同时出现在两堂课上。时间转换器，她一直在使用时间转换器。",
        choices: [
          { text: "震惊——时间旅行？这太不可思议了", next: 3, reward: null },
          { text: "恍然大悟——难怪她总是能上所有课", next: 4, reward: { type: "housePoint", amount: 2 } }
        ]
      },
      {
        speaker: "旁白",
        text: "时间转换器。魔法部严格管控的魔法物品，可以让人回到过去。赫敏·格兰杰一整年都在用它——不是为了玩，而是为了上更多的课。你突然理解了她为什么总是那么累。改变时间，代价远比想象中沉重。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你回想起这一年，赫敏·格兰杰总是突然出现在教室门口，有时看起来比刚上课时还疲惫。原来如此——她不是在赶路，她是在赶时间。你默默佩服：用时间转换器来多上课，这真的很赫敏·格兰杰。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 5 },
      { type: "log", text: "⏳ 时间转换器——赫敏·格兰杰的秘密，时间可以倒流，但代价沉重。" }
    ]
  },

  {
    id: "story_4_0",
    chapter: "火焰杯",
    title: "魁地奇世界杯",
    summary: "魁地奇世界杯决赛夜，食死徒在营地现身，黑魔标记在天空中重现——伏地魔的追随者正在集结。",
    dateRange: ["1994-08-15", "1994-08-20"],
    priority: 92,
    condition: { minGrade: 3 },
    prerequisite: "story_3_2b",
    scenes: [
      {
        speaker: "旁白",
        text: "魁地奇世界杯！整个巫师世界都在狂欢。你挤在人群中，帐篷绵延数里，魔法旗帜在夜空中飘扬。爱尔兰对保加利亚——维克多·克鲁姆的抓取令人窒息，但爱尔兰的追球手配合无懈可击。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "比赛结束后，欢呼声还没消散，营地上空突然飘来了绿色的烟雾——黑魔标记。伏地魔的标志。尖叫声取代了欢呼声，人们四散奔逃。一群穿着黑袍、戴着面具的食死徒在营地中行进，他们把麻瓜营地管理员一家悬浮在半空中，像提线木偶一样旋转。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你拼命奔跑，身后是绿色的光芒和恐惧的尖叫。有人踩到了你的脚，有人撞到了你的肩膀，但你不敢停下来。黑魔标记——那意味着伏地魔的力量正在复苏。这不是一场比赛后的骚乱，这是黑暗回归的信号。",
        choices: [
          { text: "帮助身边摔倒的人一起逃跑", next: 3, reward: { type: "housePoint", amount: 5 } },
          { text: "拼命跑——先保住自己", next: 4, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "你拉起一个摔倒的年轻巫师，他吓得说不出话。你们一起钻进了一顶倒塌的帐篷后面，直到食死徒的脚步声远去。他的手在发抖，你的手也在发抖。但至少——你们都没事。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你跑到了安全地带，弯着腰喘气。回望营地，绿色的黑魔标记还在天空中燃烧。你想起邓布利多在学期末说的话——黑暗时代可能回来了。你曾经以为那只是警告，现在你知道——那是预言。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 3 },
      { type: "log", text: "💀 魁地奇世界杯——黑魔标记重现，食死徒在集结。" }
    ]
  },

  {
    id: "story_4_1b",
    chapter: "火焰杯",
    title: "圣诞舞会",
    summary: "三强争霸赛的圣诞舞会上，罗恩·韦斯莱与赫敏·格兰杰因维克多·克鲁姆爆发矛盾，青春期的情感在华尔兹中碰撞。",
    dateRange: ["1994-12-25", "1994-12-28"],
    priority: 80,
    condition: { minGrade: 4 },
    prerequisite: "story_4_1",
    scenes: [
      {
        speaker: "旁白",
        text: "圣诞舞会！礼堂被装饰成了冰雪王国，仙女们在天花板上飞舞，施了魔法的天花板映出漫天星辰。每个人都穿上了最好的长袍——连斯内普教授都换了一件没那么油腻的。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你注意到赫敏·格兰杰挽着维克多·克鲁姆走了进来——她穿着一件淡紫色的长袍，头发整齐地盘了起来，整个人像换了一个人。而罗恩·韦斯莱看着她，脸上的表情从惊讶变成了愤怒。",
        choices: null
      },
      {
        speaker: "罗恩·韦斯莱",
        text: "「你——你是在跟克鲁姆约会？他是德姆斯特朗的！他是对手！」",
        choices: null
      },
      {
        speaker: "赫敏·格兰杰",
        text: "「下一回你约人跳舞，趁早开口，别等到最后关头！」",
        choices: [
          { text: "觉得罗恩·韦斯莱太迟钝了", next: 4, reward: null },
          { text: "理解他们——有些话说不出口", next: 5, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "你看着罗恩·韦斯莱涨红的脸，忍不住摇头。有些男生就是这样——明明在意，却不知道怎么表达，等到别人先开口了才开始着急。赫敏·格兰杰说得对，下次趁早。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你远远地看着他们在台阶上争吵，心里有些感慨。有些感情就是这样——说不出口，又放不下。你转身回到舞池，音乐还在继续，华尔兹的旋律在星光下回荡。也许有一天，你也会遇到那个让你说不出口的人。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "💃 圣诞舞会——华尔兹与争吵，青春期的情感比黑魔法还难对付。" }
    ]
  },

  {
    id: "story_5_0",
    chapter: "凤凰社",
    title: "摄魂怪袭击",
    summary: "暑假期间，摄魂怪在小惠金区袭击哈利·波特和达力·德思礼，哈利·波特施出守护神咒自卫，却因此被魔法部起诉。",
    dateRange: ["1995-08-02", "1995-08-05"],
    priority: 88,
    condition: { minGrade: 4 },
    prerequisite: "story_4_2",
    scenes: [
      {
        speaker: "旁白",
        text: "暑假，小惠金区。闷热的傍晚，哈利·波特和达力·德思礼坐在公园长椅上——两个人谁也不想和谁说话。然后，空气突然变得冰冷刺骨。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "摄魂怪——两个摄魂怪从小巷里飘了出来。它们不是阿兹卡班的守卫，而是被人故意派来的。哈利·波特来不及多想，举起魔杖——「呼神护卫！」银色的牡鹿冲了出来，驱散了黑暗。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "哈利·波特救了自己和达力·德思礼——但魔法部的猫头鹰信件几乎立刻就到了：「因在麻瓜面前使用魔法，你已被霍格沃茨开除。」在未成年人面前施法？在摄魂怪面前不施法？这是一个没有正确答案的选择。",
        choices: [
          { text: "愤怒——魔法部这是在迫害！", next: 3, reward: { type: "housePoint", amount: 3 } },
          { text: "担忧——如果哈利·波特被开除，谁来对抗伏地魔？", next: 4, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "你攥紧了拳头。摄魂怪攻击未成年人，魔法部不追查来源，反而惩罚自卫的人？这不是法律，这是政治。你开始理解——有时候，真正的敌人不在外面，而在那些穿着西装的办公室里。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你听说邓布利多已经介入了——哈利·波特不会就这样被开除。但这件事让你意识到：魔法部不想承认伏地魔回来了，任何说真话的人都会被打压。今年，恐怕不会太平。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "⚖️ 哈利·波特因自卫被起诉——魔法部在掩盖真相。" }
    ]
  },

  {
    id: "story_5_1b",
    chapter: "凤凰社",
    title: "邓布利多军",
    summary: "赫敏·格兰杰倡议、哈利·波特执教，学生们在有求必应屋秘密组建邓布利多军，学习真正的防御术。",
    dateRange: ["1995-10-05", "1995-10-15"],
    priority: 88,
    condition: { minGrade: 5 },
    prerequisite: "story_5_1",
    scenes: [
      {
        speaker: "旁白",
        text: "乌姆里奇的课上，没有人被允许使用魔杖。她只会照本宣科，让学生们读那些毫无用处的理论。但外面的世界——伏地魔已经回来了，食死徒正在集结。理论救不了任何人。",
        choices: null
      },
      {
        speaker: "赫敏·格兰杰",
        text: "「我们需要学会真正的防御术。我认识一个人——他经历了比任何人都多的事情，他可以教我们。」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "有求必应屋——那个只在需要时出现的房间，今天变成了一间宽敞的训练厅。墙上挂满了防御术的图解，地上铺着软垫。二十多个学生围坐在一起，中间站着哈利·波特。他看起来紧张，但眼神坚定。",
        choices: [
          { text: "加入训练，学习缴械咒", next: 3, reward: { type: "housePoint", amount: 5 } },
          { text: "帮赫敏·格兰杰管理名单和联络", next: 4, reward: { type: "affinity", key: "minervaMcGonagall", delta: 3 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你举起魔杖，跟着哈利·波特的指导：「除你武器！」一道红光从你的杖尖射出——不完美，但它是真实的。你第一次觉得，自己真的在学什么有用的东西。乌姆里奇可以禁止课堂上的魔杖，但她禁止不了勇气。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你帮赫敏·格兰杰整理名单，用假名「邓布利多军」作为暗号。每次集会前，你负责通知成员，确保没有被乌姆里奇的调查小组跟踪。这不是前线战斗，但每一条安全传递的消息，都是在为胜利积累力量。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 5 },
      { type: "log", text: "🛡️ 邓布利多军成立——在压迫下，反抗的火种越烧越旺。" }
    ]
  },

  {
    id: "story_5_2",
    chapter: "凤凰社",
    title: "神秘事务司",
    summary: "伏地魔利用幻象引诱哈利·波特前往神秘事务司，小天狼星·布莱克在战斗中坠入帷幕牺牲。",
    dateRange: ["1996-01-02", "1996-01-06"],
    priority: 98,
    condition: { minGrade: 5, minCourseTotal: 70 },
    prerequisite: "story_5_1b",
    scenes: [
      {
        speaker: "旁白",
        text: "哈利·波特看到了幻象——小天狼星·布莱克在神秘事务司被伏地魔折磨。那是假的，是陷阱，但哈利·波特不能赌——如果那是真的呢？他带着几个人冲去了魔法部。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "神秘事务司——满是预言球和神秘仪器的房间。食死徒从暗处涌出，战斗在狭窄的走廊里爆发。咒语在黑暗中交错，预言球碎裂的声音像玻璃雨。然后，凤凰社的援军到了——小天狼星·布莱克也在其中。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "小天狼星·布莱克和贝拉特里克斯·莱斯特兰奇在战斗——他笑着躲过一道绿光：「来啊，你可以做得更好！」然后，第二道绿光击中了他的胸口。他微笑的脸在最后一刻凝固，身体向后倒去，穿过了那道古老的帷幕——再也没有出来。",
        choices: [
          { text: "无法接受——他不能就这样消失", next: 3, reward: null },
          { text: "沉默——有些失去，没有语言能够形容", next: 4, reward: { type: "housePoint", amount: 5 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你看着帷幕轻轻飘动，仿佛什么都没有发生过。但小天狼星·布莱克——哈利·波特唯一的家人——已经不在了。你想起他的笑容、他的勇敢、他终于获得自由的那一天。命运对他太不公平了。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你什么都没说。有些悲伤，不是语言能承载的。你看着哈利·波特跪在帷幕前的背影，看着他的肩膀在颤抖。你能做的，只是站在他身后，让他知道——他不是一个人。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 8 },
      { type: "log", text: "🌑 小天狼星·布莱克牺牲——帷幕之后，是永远的沉默。" }
    ]
  },

  {
    id: "story_6_0",
    chapter: "混血王子",
    title: "斯拉格霍恩的晚宴",
    summary: "新学期，斯拉格霍恩教授重返霍格沃茨任教魔药学，他热衷于收集有潜力的学生，而德拉科·马尔福接到了一个危险的任务。",
    dateRange: ["1996-09-01", "1996-09-10"],
    priority: 85,
    condition: { minGrade: 6 },
    prerequisite: "story_5_2",
    scenes: [
      {
        speaker: "旁白",
        text: "新学期，斯内普教授终于如愿以偿成为了黑魔法防御术教授，而魔药课由退休教授霍拉斯·斯拉格霍恩重新执教。他圆滚滚的，留着海象般的胡子，总是笑眯眯地邀请「有潜力」的学生参加他的晚宴。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你注意到德拉科·马尔福这个学期变了——他不再嚣张跋扈，反而变得沉默寡言，脸色苍白，黑眼圈深重。他在有求必应屋里做什么？你不知道，但他的眼神里有一种你从未见过的东西——恐惧。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "邓布利多私下告诉哈利·波特：斯拉格霍恩教授拥有一段关键的记忆，关于伏地魔如何得知魂器的存在。但斯拉格霍恩教授羞于启齿，一直拒绝交出那段记忆。",
        choices: [
          { text: "好奇——魂器是什么？", next: 3, reward: null },
          { text: "担心德拉科·马尔福——他看起来不太好", next: 4, reward: { type: "affinity", key: "severusSnape", delta: 2 } }
        ]
      },
      {
        speaker: "旁白",
        text: "魂器——将灵魂分裂，藏入物品中，以获得不死之身。伏地魔制造了不止一个。邓布利多正在寻找它们，而斯拉格霍恩教授的记忆是关键线索。你突然理解了——为什么邓布利多总是看起来那么疲惫。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你看着德拉科·马尔福独自走在走廊上的背影，第一次觉得他不像一个敌人，而像一个被逼入绝境的孩子。他接到了什么任务？谁在逼迫他？你想起斯内普教授和德拉科·马尔福之间那个不可打破的誓言——有些锁链，比魔法更深。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🧪 斯拉格霍恩归来——新的线索、新的谜团，六年级不会平静。" }
    ]
  },

  {
    id: "story_6_1b",
    chapter: "混血王子",
    title: "魂器的秘密",
    summary: "邓布利多通过冥想盆向哈利·波特展示伏地魔的过去，揭示了魂器的存在——伏地魔将灵魂分裂为七份，藏于不同物品之中。",
    dateRange: ["1996-12-01", "1996-12-15"],
    priority: 90,
    condition: { minGrade: 6 },
    prerequisite: "story_6_1",
    scenes: [
      {
        speaker: "旁白",
        text: "邓布利多的办公室，冥想盆泛着银色的光。你从不知道校长还有这样的秘密——他一直在收集关于伏地魔的记忆碎片，拼凑出一个完整的过去。",
        choices: null
      },
      {
        speaker: "阿不思·邓布利多",
        text: "「伏地魔将灵魂分裂了七次。日记、戒指、挂坠盒、金杯、冠冕、蛇——还有他自己体内的一片。只要魂器存在，他就不会真正死去。」",
        choices: null
      },
      {
        speaker: "旁白",
        text: "七片灵魂。你感到一阵寒意——为了不死，一个人竟然愿意将灵魂撕裂成碎片。那还是人吗？还是某种更黑暗的东西？邓布利多的手是黑色的——那是摧毁冈特戒指魂器时受到的诅咒。他在用生命换取时间。",
        choices: [
          { text: "决心——必须找到并摧毁所有魂器", next: 3, reward: { type: "housePoint", amount: 5 } },
          { text: "恐惧——七片灵魂，这几乎不可能完成", next: 4, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "你握紧了拳头。日记——已经被哈利·波特摧毁了。戒指——邓布利多已经处理了。还有五个。你知道这不会是轻松的旅程，但至少——你们知道了敌人不死的原因。知道弱点，就是胜利的开始。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "七片灵魂。你感到一阵眩晕。这意味着要找到五个隐藏在世界各地的物品，用最危险的方式摧毁它们——而伏地魔还在外面，越来越强大。你看着邓布利多枯萎的右手，突然意识到——他也许不会一直在这里保护你们。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 5 },
      { type: "log", text: "🔮 魂器的秘密——伏地魔将灵魂撕裂为七份，不死之谜终于揭开。" }
    ]
  },

  {
    id: "story_7_0",
    chapter: "死亡圣器",
    title: "七哈利转移",
    summary: "凤凰社实施七哈利转移计划，将哈利·波特安全转移。海德薇在战斗中牺牲，乔治·韦斯莱失去一只耳朵。",
    dateRange: ["1997-07-27", "1997-07-30"],
    priority: 92,
    condition: { minGrade: 6 },
    prerequisite: "story_6_2",
    scenes: [
      {
        speaker: "旁白",
        text: "哈利·波特不能再待在女贞路了——十七岁一过，他母亲留下的保护咒就会失效。凤凰社制定了一个大胆的计划：六个人喝下变形药水变成哈利·波特的样子，分七条路转移，让食死徒无法分辨真假。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "夜空中，七条身影向不同方向飞去。食死徒立刻发起了攻击——他们早就埋伏好了。咒语在黑暗中交错，绿色的索命咒像流星一样划过天际。海格的摩托车在暴风雨中翻转，哈利·波特的猫头鹰海德薇——被一道绿光击中，从笼子里无声地坠落。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "安全抵达后，清点损失：疯眼汉穆迪牺牲了，乔治·韦斯莱失去了一只耳朵——斯内普的咒语。弗雷德·韦斯莱抱着弟弟，脸上的笑容第一次消失了。",
        choices: [
          { text: "为海德薇和穆迪默哀", next: 3, reward: { type: "housePoint", amount: 3 } },
          { text: "愤怒——斯内普，又是斯内普", next: 4, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "你低下头。海德薇——哈利·波特从海格那里收到的第一份生日礼物，十一年来唯一的伙伴。穆迪——那个独眼的老傲罗，一生都在与黑魔法战斗。战争才刚刚开始，代价已经如此沉重。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "斯内普。那个在天文塔上杀死邓布利多的人，又伤了乔治·韦斯莱。你攥紧了拳头——他到底站在哪一边？但此刻你没有时间去想这个问题，因为更大的战斗还在前方。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 5 },
      { type: "log", text: "🦉 七哈利转移——海德薇和穆迪牺牲，战争的代价开始显现。" }
    ]
  },

  {
    id: "story_7_0b",
    chapter: "死亡圣器",
    title: "马尔福庄园",
    summary: "铁三角被食死徒抓获至马尔福庄园，多比前来营救，但被贝拉特里克斯的飞刀击中，在哈利的怀中牺牲。",
    dateRange: ["1998-03-01", "1998-03-05"],
    priority: 95,
    condition: { minGrade: 7 },
    prerequisite: "story_7_0",
    scenes: [
      {
        speaker: "旁白",
        text: "他们被抓住了。哈利·波特、罗恩·韦斯莱和赫敏·格兰杰——在搜捕食死徒的突袭中被认了出来，被带到了马尔福庄园的地牢。贝拉特里克斯·莱斯特兰奇对赫敏·格兰杰施了钻心咒，她的惨叫声在地牢里回荡。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "然后，一个家养小精灵出现在了地牢里——多比。他冒着生命危险来救他们，一个一个地幻影移形。但就在最后一刻——",
        choices: null
      },
      {
        speaker: "旁白",
        text: "贝拉特里克斯的银刀划过空气，插入了多比的胸口。那个小小的身影在哈利·波特的怀里慢慢失去了温度，他的最后一句话是——「哈利·波特……」然后，他闭上了那双巨大的绿色眼睛。",
        choices: [
          { text: "为多比流泪——一个自由的小精灵", next: 3, reward: { type: "housePoint", amount: 5 } },
          { text: "愤怒——贝拉特里克斯必须付出代价", next: 4, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "你看着哈利·波特用双手在花园里挖了一座小小的坟墓，没有魔杖，只有手指和泥土。墓碑上写着：「多比，一个自由的小精灵」。他终于自由了——但自由的代价，竟然是生命。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你攥紧了拳头。贝拉特里克斯·莱斯特兰奇——她杀死了小天狼星·布莱克，现在又杀了多比。她欠下的血债太多了。但此刻，你只能把愤怒压在心底——因为还有更重要的任务等着完成。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 8 },
      { type: "log", text: "🧦 多比牺牲——一个自由的小精灵，用生命换来了自由。" }
    ]
  },

  {
    id: "story_7_0c",
    chapter: "死亡圣器",
    title: "抢劫古灵阁",
    summary: "铁三角潜入古灵阁巫师银行，从贝拉特里克斯的金库中取出了赫奇帕奇金杯魂器，骑乘盲龙逃出生天。",
    dateRange: ["1998-04-01", "1998-04-05"],
    priority: 92,
    condition: { minGrade: 7 },
    prerequisite: "story_7_0b",
    scenes: [
      {
        speaker: "旁白",
        text: "古灵阁巫师银行——巫师世界最安全的地方。赫敏·格兰杰喝下变形药水变成了贝拉特里克斯的样子，罗恩·韦斯莱伪装成她的随从，哈利·波特和拉环一起潜入了地下金库。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "莱斯特兰奇金库——里面堆满了金银珠宝，但最里面，在一个小小的水晶基座上，放着赫奇帕奇的金杯。那是魂器。但金库被施了烈火咒和复制咒——每碰一件东西，它就会灼烧和复制。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "他们拿到了金杯，但警报响了。妖精守卫和食死徒从四面八方涌来。唯一的出路——骑上那条看守金库的盲眼巨龙。它被锁链束缚了一辈子，但当哈利·波特的咒语打碎了锁链——它怒吼着冲破了穹顶，带着他们飞向了天空。",
        choices: [
          { text: "震撼——骑着龙飞出古灵阁！", next: 3, reward: { type: "housePoint", amount: 5 } },
          { text: "紧迫——还剩几个魂器？", next: 4, reward: null }
        ]
      },
      {
        speaker: "旁白",
        text: "你听说了这件事——骑着龙飞出古灵阁！那条被囚禁了不知多少年的巨龙，终于看到了天空。你看着它消失在远方的云层中，心里涌起一种奇怪的感动——也许，自由是所有生灵最深的渴望。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "日记、戒指、挂坠盒、金杯——四个魂器已被摧毁。还剩拉文克劳的冠冕和纳吉尼。你数着手指，心跳越来越快——距离终点，只差两步了。",
        choices: null
      }
    ],
    rewards: [
      { type: "housePoint", amount: 8 },
      { type: "log", text: "🐉 抢劫古灵阁——骑着巨龙冲出地底，赫奇帕奇金杯魂器到手。" }
    ]
  },

  {
    id: "birthday_snape",
    chapter: "生日",
    title: "西弗勒斯·斯内普的生日",
    summary: "1月9日，斯内普教授的生日。走廊里弥漫着魔药的气味，他一如既往地独自穿行在阴影中。",
    isBirthday: true,
    birthdayDate: "01-09",
    affinityKey: "severusSnape",
    priority: 50,
    condition: { minGrade: 1 },
    scenes: [
      {
        speaker: "旁白",
        text: "1月9日，走廊里一如既往地阴暗。你路过地牢时，看到斯内普教授独自站在窗前，黑袍在暗处几乎与阴影融为一体。今天是他生日——你从某本旧年鉴上看到的。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你犹豫了一下，走上前去：「斯内普教授，生日快乐。」他缓缓转过身，黑色的眼睛像两口深井，看不出任何情绪。",
        minAffinityTier: { tier: 2 },
        choices: null
      },
      {
        speaker: "西弗勒斯·斯内普",
        text: "「……谢谢。」他的声音很轻，几乎听不到。然后他转过身，继续看着窗外。但你注意到，他的肩膀似乎没有刚才那么僵硬了。",
        minAffinityTier: { tier: 2 },
        choices: null
      },
      {
        speaker: "旁白",
        text: "你鼓起勇气，把一小瓶自己调配的缩骨药放在了他的桌上：「虽然比不上教授的水平，但……这是我亲手熬的。」斯内普教授拿起瓶子，闻了闻，沉默了很长时间。",
        minAffinityTier: { tier: 3 },
        choices: null
      },
      {
        speaker: "西弗勒斯·斯内普",
        text: "「龙胆草放多了半滴，但火候控制得不错。」他把瓶子收进了抽屉——不是扔掉，是收起来了。「格兰芬多加两分。」",
        minAffinityTier: { tier: 3 },
        choices: [
          { text: "微笑道谢", next: 5, reward: { type: "affinity", key: "severusSnape", delta: 3 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你在魔药课结束后留了下来。斯内普教授正在整理材料，你帮他递过一瓶蛇牙。他接过去的时候，你们的目光短暂交汇——那双黑色的眼睛里，有一瞬间闪过了某种你从未见过的东西。也许是意外，也许是……感激。",
        minAffinityTier: { tier: 4 },
        choices: null
      },
      {
        speaker: "西弗勒斯·斯内普",
        text: "「你……比我想象的要固执。」他低声说，嘴角几乎不可察觉地动了一下。在斯内普的世界里，这大概就是微笑了。",
        minAffinityTier: { tier: 4 },
        choices: null
      },
      {
        speaker: "旁白",
        text: "深夜，你路过地牢时，看到斯内普教授的办公室门虚掩着。桌上放着一杯已经凉透的茶，和一本翻开的旧相册。你瞥见相册上是一张泛黄的照片——一个黑发女人在微笑，眼神温柔。他迅速合上了相册，但你已经看到了他眼角的那一丝湿润。",
        minAffinityTier: { tier: 5 },
        choices: null
      },
      {
        speaker: "西弗勒斯·斯内普",
        text: "「每个人都有不想被触碰的记忆。」他的声音沙哑，但没有赶你走。沉默了很久，他说：「……谢谢你还记得。」这是你第一次觉得，这个冰冷的外壳下，也许藏着一颗还在跳动的心。",
        minAffinityTier: { tier: 5 },
        choices: [
          { text: "安静地离开，给他空间", next: 9, reward: { type: "affinity", key: "severusSnape", delta: 5 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你轻轻关上了门。走廊里很暗，但你心里有一丝温暖。有些人不需要热闹的生日派对，他们只需要一个人记得——这就够了。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🎂 西弗勒斯·斯内普的生日——在阴影中，也有人记得。" }
    ]
  },

  {
    id: "birthday_lupin",
    chapter: "生日",
    title: "莱姆斯·卢平的生日",
    summary: "3月27日，卢平教授的生日。他总是温和地微笑，但你知道满月对他意味着什么。",
    isBirthday: true,
    birthdayDate: "03-27",
    affinityKey: "remusLupin",
    priority: 50,
    condition: { minGrade: 3 },
    scenes: [
      {
        speaker: "旁白",
        text: "3月27日，黑魔法防御术课后，你注意到卢平教授的桌上多了一块巧克力——他自己买的。他总是这样，用温和的笑容掩盖一切疲惫。今天是他的生日。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你走到讲台前：「卢平教授，生日快乐！」他愣了一下，然后笑了——那种温暖的、让人安心的笑。",
        minAffinityTier: { tier: 2 },
        choices: null
      },
      {
        speaker: "莱姆斯·卢平",
        text: "「哦，你竟然记得……谢谢你。」他从口袋里掏出一块巧克力递给你，「生日最好的庆祝方式就是分享巧克力——这是我的个人信条。」",
        minAffinityTier: { tier: 2 },
        choices: [
          { text: "接过巧克力，谢谢教授", next: 3, reward: { type: "affinity", key: "remusLupin", delta: 2 } }
        ]
      },
      {
        speaker: "旁白",
        text: "课后，你留下来帮卢平教授整理教室。他看着窗外渐渐暗下来的天色，轻声说：「你知道吗，有些人的生日是不值得庆祝的。」你知道他在说什么——满月快到了。",
        minAffinityTier: { tier: 3 },
        choices: null
      },
      {
        speaker: "莱姆斯·卢平",
        text: "「但有人记得，就值得了。」他看着你，眼眶微微发红，「谢谢你，孩子。你让我觉得……这一天没那么难熬了。」",
        minAffinityTier: { tier: 3 },
        choices: null
      },
      {
        speaker: "旁白",
        text: "你在走廊上遇到了卢平教授，他刚从医务室出来，手臂上缠着新的绷带。满月刚过。你把一盒蜂蜜公爵的巧克力递给他：「迟到的生日快乐。」他接过盒子，沉默了很久。",
        minAffinityTier: { tier: 4 },
        choices: null
      },
      {
        speaker: "莱姆斯·卢平",
        text: "「你知道吗，」他的声音有些颤抖，「在阿兹卡班那些年……我以为再也不会有人对我说生日快乐了。」他深吸一口气，「谢谢你——不只是今天，而是每一天。」",
        minAffinityTier: { tier: 4 },
        choices: [
          { text: "「教授，你值得被记住」", next: 7, reward: { type: "affinity", key: "remusLupin", delta: 4 } }
        ]
      },
      {
        speaker: "旁白",
        text: "满月后的清晨，你守在了卢平教授的办公室门口。他推开门时，看到了你手中的热巧克力和毯子。他的嘴唇颤抖了一下，然后——他笑了，是那种从心底涌出来的笑。有些伤痛无法治愈，但陪伴可以让它们变得可以承受。",
        minAffinityTier: { tier: 5 },
        choices: null
      },
      {
        speaker: "莱姆斯·卢平",
        text: "「我这一生，被太多人害怕、排斥、遗忘。但你……你让我相信，即使是最不配被爱的人，也值得拥有生日祝福。」他接过热巧克力，双手在颤抖，「谢谢你，我的朋友。」",
        minAffinityTier: { tier: 5 },
        choices: [
          { text: "陪他坐一会儿", next: 9, reward: { type: "affinity", key: "remusLupin", delta: 5 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你们在办公室里安静地坐了很久，窗外的阳光慢慢变暖。巧克力凉了，但心里的温度还在。有些生日不需要蛋糕和蜡烛，只需要一个人愿意在你最脆弱的时候，安静地坐在你身边。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🎂 莱姆斯·卢平的生日——月圆月缺，有人记得就够了。" }
    ]
  },

  {
    id: "birthday_hermione",
    chapter: "生日",
    title: "赫敏·格兰杰的生日",
    summary: "9月19日，赫敏的生日。她大概会在图书馆度过——但也许今年会有所不同。",
    isBirthday: true,
    birthdayDate: "09-19",
    affinityKey: "hermione",
    priority: 50,
    condition: { minGrade: 1 },
    scenes: [
      {
        speaker: "旁白",
        text: "9月19日，你路过图书馆时，看到赫敏·格兰杰正埋头在一堆书中。桌上堆着《高级魔药制作》《与吸血鬼同船旅行》和半块没吃完的三明治。她大概忘了今天是自己生日。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你走过去：「赫敏，生日快乐！」她抬起头，蓬松的头发后面露出一丝惊讶的微笑。",
        minAffinityTier: { tier: 2 },
        choices: null
      },
      {
        speaker: "赫敏·格兰杰",
        text: "「哦！你竟然记得……谢谢！」她合上书，难得地露出了不涉及学术话题的笑容，「我本来打算在图书馆把那篇关于尼可·勒梅的论文写完就算庆祝了。」",
        minAffinityTier: { tier: 2 },
        choices: [
          { text: "「论文可以明天写，今天去吃块蛋糕吧」", next: 3, reward: { type: "affinity", key: "hermione", delta: 2 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你把一本从图书馆旧书区找到的《古代魔文入门》放在她桌上。赫敏·格兰杰的眼睛亮了起来——那是你从未见过的光芒，比任何魔咒都耀眼。",
        minAffinityTier: { tier: 3 },
        choices: null
      },
      {
        speaker: "赫敏·格兰杰",
        text: "「这本书！我找了好久了，平斯夫人说已经绝版了——」她紧紧抱着书，声音有些哽咽，「谢谢你，真的。这是我收到过最好的生日礼物。」",
        minAffinityTier: { tier: 3 },
        choices: null
      },
      {
        speaker: "旁白",
        text: "你在有求必应屋为赫敏准备了一个小小的惊喜——一桌子的书，每一本都是她提过想读但没找到的。她推开门的那一刻，整个人愣住了。",
        minAffinityTier: { tier: 4 },
        choices: null
      },
      {
        speaker: "赫敏·格兰杰",
        text: "「你……你怎么知道我想读这些？」她的眼眶红了，但嘴角在笑，「你真的……真的太了解我了。」她深吸一口气，「这是我过得最开心的生日。」",
        minAffinityTier: { tier: 4 },
        choices: [
          { text: "「因为你值得最好的」", next: 7, reward: { type: "affinity", key: "hermione", delta: 4 } }
        ]
      },
      {
        speaker: "旁白",
        text: "深夜，你和她坐在天文塔的台阶上，分享着蜂蜜公爵的巧克力。赫敏·格兰杰难得地没有翻书，只是安静地看着星空。",
        minAffinityTier: { tier: 5 },
        choices: null
      },
      {
        speaker: "赫敏·格兰杰",
        text: "「你知道吗，在遇到你们之前，我的生日只有父母和书本。」她轻声说，声音被夜风吹散，「现在我知道了——真正的朋友，比任何书本都珍贵。」她靠了靠你的肩膀，「谢谢你，一直在我身边。」",
        minAffinityTier: { tier: 5 },
        choices: [
          { text: "安静地陪她看星星", next: 9, reward: { type: "affinity", key: "hermione", delta: 5 } }
        ]
      },
      {
        speaker: "旁白",
        text: "星光洒在你们身上，夜风温柔。赫敏·格兰杰的生日，不需要蛋糕和蜡烛——有一本好书、一片星空、一个真心的朋友，就够了。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🎂 赫敏·格兰杰的生日——书和星空，还有真心的朋友。" }
    ]
  },

  {
    id: "birthday_ron",
    chapter: "生日",
    title: "罗恩·韦斯莱的生日",
    summary: "3月1日，罗恩的生日。韦斯莱家的传统是妈妈寄来的毛衣和手工蛋糕。",
    isBirthday: true,
    birthdayDate: "03-01",
    affinityKey: "ron",
    priority: 50,
    condition: { minGrade: 1 },
    scenes: [
      {
        speaker: "旁白",
        text: "3月1日，大礼堂的早餐桌上，罗恩·韦斯莱正在拆一个包裹——韦斯莱夫人寄来的，每年都是酒红色毛衣和一大块自制的巧克力蛋糕。弗雷德和乔治在旁边起哄。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你走过去：「罗恩，生日快乐！」他嘴里塞满了蛋糕，含糊不清地说了声谢谢，但耳朵尖红了。",
        minAffinityTier: { tier: 2 },
        choices: null
      },
      {
        speaker: "罗恩·韦斯莱",
        text: "「谢了，伙计！」他咽下蛋糕，露出那个标志性的傻笑，「你要来一块吗？老妈做的，比霍格沃茨的强多了——别告诉家养小精灵我这么说。」",
        minAffinityTier: { tier: 2 },
        choices: [
          { text: "尝一块蛋糕", next: 3, reward: { type: "affinity", key: "ron", delta: 2 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你送了他一盒佐科笑话店的臭气弹——罗恩·韦斯莱的眼睛一下子亮了。",
        minAffinityTier: { tier: 3 },
        choices: null
      },
      {
        speaker: "罗恩·韦斯莱",
        text: "「太棒了！这可是限量版的！」他兴奋地拆开，然后压低声音，「等会儿我们去斯内普的办公室门口试试——」他突然停住，「算了，还是别了，上次被扣了二十分。」",
        minAffinityTier: { tier: 3 },
        choices: [
          { text: "「怕什么，生日最大」", next: 5, reward: { type: "affinity", key: "ron", delta: 3 } }
        ]
      },
      {
        speaker: "旁白",
        text: "魁地奇训练结束后，你把最后一块南瓜馅饼留给了罗恩·韦斯莱。他接过馅饼，难得地没有开玩笑。",
        minAffinityTier: { tier: 4 },
        choices: null
      },
      {
        speaker: "罗恩·韦斯莱",
        text: "「你知道吗，」他嚼着馅饼，看着窗外的夕阳，「在家里我总是最后一个被注意到的——比尔是最优秀的，查理最勇敢，珀西最……珀西，双胞胎最搞笑，金妮是唯一的女孩。而我……」他笑了笑，「但你觉得我够特别，对吧？」",
        minAffinityTier: { tier: 4 },
        choices: [
          { text: "「你不需要和任何人比较」", next: 7, reward: { type: "affinity", key: "ron", delta: 4 } }
        ]
      },
      {
        speaker: "旁白",
        text: "深夜，公共休息室只剩你们两个。壁炉的火快灭了，罗恩·韦斯莱难得地安静下来。",
        minAffinityTier: { tier: 5 },
        choices: null
      },
      {
        speaker: "罗恩·韦斯莱",
        text: "「我一直觉得，自己是哈利身边那个不起眼的跟班。」他盯着火焰，「但你让我知道——我可以不只是谁的跟班，我就是我。」他转过头，眼眶有点红，「谢谢你，真的。这是我过得最好的生日。」",
        minAffinityTier: { tier: 5 },
        choices: [
          { text: "拍拍他的肩膀", next: 9, reward: { type: "affinity", key: "ron", delta: 5 } }
        ]
      },
      {
        speaker: "旁白",
        text: "壁炉的余烬在黑暗中闪烁。罗恩·韦斯莱靠在沙发上，终于不再试图用玩笑掩饰什么。有些生日不需要惊天动地，只需要有个人在身边，让你知道——你很重要。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🎂 罗恩·韦斯莱的生日——不需要惊天动地，有人记得就好。" }
    ]
  },

  {
    id: "birthday_harry",
    chapter: "生日",
    title: "哈利·波特的生日",
    summary: "7月31日，哈利·波特的生日。在女贞路4号，从来没有人给他庆祝过——但现在不同了。",
    isBirthday: true,
    birthdayDate: "07-31",
    affinityKey: "harry",
    priority: 50,
    condition: { minGrade: 1 },
    scenes: [
      {
        speaker: "旁白",
        text: "7月31日，暑假。你想起今天是哈利·波特的生日。在女贞路4号，德思礼一家从来不会为他庆祝——但那是以前了。现在，他有朋友了。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你给哈利·波特寄了一封生日贺信，猫头鹰穿过夏夜的天空飞向萨里郡。也许他现在正在楼梯间里拆信——但至少，他不再是孤独的。",
        minAffinityTier: { tier: 2 },
        choices: null
      },
      {
        speaker: "旁白",
        text: "几天后，你收到了回信。字迹潦草但真诚：「谢谢你的生日祝福。这是我第一次收到朋友的贺信。——哈利」",
        minAffinityTier: { tier: 2 },
        choices: [
          { text: "回信说「明年还有」", next: 3, reward: { type: "affinity", key: "harry", delta: 2 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你托猫头鹰给哈利·波特送了一份生日礼物——一盒蜂蜜公爵的巧克力和一张写满祝福的羊皮纸。回信比上次长了一些。",
        minAffinityTier: { tier: 3 },
        choices: null
      },
      {
        speaker: "旁白",
        text: "「我从来没有在生日收到过这样的礼物。德思礼一家连蛋糕都不给我买。但你的巧克力让我觉得——也许生日真的值得庆祝。谢谢你。」",
        minAffinityTier: { tier: 3 },
        choices: null
      },
      {
        speaker: "旁白",
        text: "暑假结束前，你专门去了对角巷，给哈利·波特挑了一份特别的礼物——一本关于魁地奇战术的稀有书籍。你知道他会在深夜躲在被窝里翻看它。",
        minAffinityTier: { tier: 4 },
        choices: null
      },
      {
        speaker: "旁白",
        text: "哈利·波特的回信只有一句话：「你是我最好的朋友之一。谢谢你让我的生日不再只是日历上的一个数字。」你看着那行字，心里暖暖的。",
        minAffinityTier: { tier: 4 },
        choices: [
          { text: "把信小心地收好", next: 7, reward: { type: "affinity", key: "harry", delta: 4 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你在霍格沃茨的某个角落遇到了哈利·波特。暑假刚结束，他看起来比去年又高了一些，但眼神里还是那种安静的力量。",
        minAffinityTier: { tier: 5 },
        choices: null
      },
      {
        speaker: "哈利·波特",
        text: "「你知道吗，」他看着窗外，「在女贞路的时候，我总是对着钟表数时间——等着回到这里，等着见到你们。」他转过头，「你让我知道了——家不一定是那个有楼梯间的地方。家，是有人记得你生日的地方。」",
        minAffinityTier: { tier: 5 },
        choices: [
          { text: "「明年，后年，每一年都会记得」", next: 9, reward: { type: "affinity", key: "harry", delta: 5 } }
        ]
      },
      {
        speaker: "旁白",
        text: "他笑了——那种发自内心的、眼睛会发亮的笑。在哈利·波特的生命里，生日曾经是最孤独的日子。但现在，他知道了——有人在乎，有人记得。这就够了。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🎂 哈利·波特的生日——从孤独到温暖，有人记得就是家。" }
    ]
  },

  {
    id: "birthday_ginny",
    chapter: "生日",
    title: "金妮·韦斯莱的生日",
    summary: "8月11日，金妮的生日。这个红发女孩远比她看起来更勇敢。",
    isBirthday: true,
    birthdayDate: "08-11",
    affinityKey: "ginnyWeasley",
    priority: 50,
    condition: { minGrade: 1 },
    scenes: [
      {
        speaker: "旁白",
        text: "8月11日，暑假。你想起来今天是金妮·韦斯莱的生日。那个红发女孩——韦斯莱家最小的孩子，也是唯一的女孩。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你给陋居寄了一封生日贺信。几天后收到了回信，字迹工整而有力：「谢谢你的祝福！弗雷德和乔治又在我的蛋糕里放了臭气弹，但妈妈重新做了一个。——金妮」",
        minAffinityTier: { tier: 2 },
        choices: [
          { text: "回信安慰她", next: 2, reward: { type: "affinity", key: "ginnyWeasley", delta: 2 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你送了她一根新的猫狸子毛羽毛笔——金妮·韦斯莱一直想养一只猫狸子。回信里夹着一朵压干的雏菊。",
        minAffinityTier: { tier: 3 },
        choices: null
      },
      {
        speaker: "旁白",
        text: "「这是我花园里开的，代表坚强和快乐。谢谢你记得我的生日——在六个哥哥的阴影下，有时候我觉得自己很容易被忽略。但你让我觉得——我也是特别的。」",
        minAffinityTier: { tier: 3 },
        choices: null
      },
      {
        speaker: "旁白",
        text: "开学后，你在走廊上遇到了金妮·韦斯莱。她比去年自信了很多，红头发在阳光下像火焰一样。",
        minAffinityTier: { tier: 4 },
        choices: null
      },
      {
        speaker: "金妮·韦斯莱",
        text: "「嘿，迟到的生日快乐！」她笑着走过来，「你知道吗，我今年许的愿望是——变得更强。不再做那个躲在别人身后的小女孩。」她的眼神坚定，「谢谢你一直相信我。」",
        minAffinityTier: { tier: 4 },
        choices: [
          { text: "「你本来就很强」", next: 6, reward: { type: "affinity", key: "ginnyWeasley", delta: 4 } }
        ]
      },
      {
        speaker: "旁白",
        text: "金妮·韦斯莱在魁地奇训练后找到了你，手里拿着两只南瓜汁。「生日那天我没来得及好好说——」她深吸一口气。",
        minAffinityTier: { tier: 5 },
        choices: null
      },
      {
        speaker: "金妮·韦斯莱",
        text: "「在韦斯莱家，我永远是'最小的那个'。但你从来不像别人那样看我——你觉得我可以做任何事。」她笑了，眼睛亮晶晶的，「所以我要告诉你——你也是我最重要的人之一。生日快乐，不只是我的，也是我们相遇的每一天。」",
        minAffinityTier: { tier: 5 },
        choices: [
          { text: "碰杯，为彼此的勇气", next: 8, reward: { type: "affinity", key: "ginnyWeasley", delta: 5 } }
        ]
      },
      {
        speaker: "旁白",
        text: "南瓜汁在夕阳下闪着金光。金妮·韦斯莱不再是那个躲在柱子后面偷看哈利·波特的小女孩了——她是一头真正的狮子。而你，是她最坚定的支持者。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🎂 金妮·韦斯莱的生日——红发女孩的勇气，比任何魔咒都耀眼。" }
    ]
  },

  {
    id: "birthday_sirius",
    chapter: "生日",
    title: "小天狼星·布莱克的生日",
    summary: "11月19日，小天狼星的生日。一个被冤枉了十二年的男人，终于重获自由。",
    isBirthday: true,
    birthdayDate: "11-19",
    affinityKey: "siriusBlack",
    priority: 50,
    condition: { minGrade: 3 },
    scenes: [
      {
        speaker: "旁白",
        text: "11月19日，你想起来今天是小天狼星·布莱克的生日。他现在躲在某个地方——不能公开露面，因为魔法部还在通缉他。但至少，他自由了。",
        choices: null
      },
      {
        speaker: "旁白",
        text: "你通过哈利·波特转达了生日祝福。几天后，你收到了一封笔迹潦草的信：「谢谢你记得。在阿兹卡班那些年，我连自己的生日都忘了。——大脚板」",
        minAffinityTier: { tier: 2 },
        choices: [
          { text: "回信说「以后每年都会记得」", next: 2, reward: { type: "affinity", key: "siriusBlack", delta: 2 } }
        ]
      },
      {
        speaker: "旁白",
        text: "你托人给他送了一瓶火威士忌——布莱克家族的传统生日饮品。回信比上次长了很多。",
        minAffinityTier: { tier: 3 },
        choices: null
      },
      {
        speaker: "旁白",
        text: "「火威士忌！你真懂我。十二年在阿兹卡班，喝的只有发霉的水。这瓶酒让我想起了以前——詹姆总是会在我生日偷一瓶出来。那些日子……谢谢你让我又想起了一次。」",
        minAffinityTier: { tier: 3 },
        choices: null
      },
      {
        speaker: "旁白",
        text: "你在格里莫广场12号见到了小天狼星·布莱克。他瘦了很多，但眼睛里还有光。壁炉旁趴着一只巨大的黑狗——那是他的阿尼马格斯形态。",
        minAffinityTier: { tier: 4 },
        choices: null
      },
      {
        speaker: "小天狼星·布莱克",
        text: "「嘿，生日快乐——哦等等，是我的生日。」他笑了，但笑容里有苦涩，「你知道吗，在阿兹卡班，生日是最难熬的日子。因为那天你会想起——你失去了什么。」他看着你，「但现在不一样了。有人在等我。」",
        minAffinityTier: { tier: 4 },
        choices: [
          { text: "「你不会再孤独了」", next: 6, reward: { type: "affinity", key: "siriusBlack", delta: 4 } }
        ]
      },
      {
        speaker: "旁白",
        text: "深夜，格里莫广场12号的厨房里，小天狼星·布莱克倒了两杯火威士忌。窗外是伦敦的灯火，他看起来像个逃家的少年——虽然他已经三十多岁了。",
        minAffinityTier: { tier: 5 },
        choices: null
      },
      {
        speaker: "小天狼星·布莱克",
        text: "「我这一生，做错了太多选择。但有一个选择我不后悔——」他举起酒杯，「选择了相信朋友，选择了战斗，选择了……不放弃。」他看着你，「谢谢你让我知道，自由不只是走出阿兹卡班。自由是——有人在乎你是不是还活着。」",
        minAffinityTier: { tier: 5 },
        choices: [
          { text: "举杯，为自由", next: 8, reward: { type: "affinity", key: "siriusBlack", delta: 5 } }
        ]
      },
      {
        speaker: "旁白",
        text: "火威士忌辛辣而温暖。窗外传来猫头鹰的叫声，伦敦的夜色温柔地笼罩着这座老房子。小天狼星·布莱克靠在椅背上，难得地露出了安心的表情。也许，这就是自由的味道。",
        choices: null
      }
    ],
    rewards: [
      { type: "log", text: "🎂 小天狼星·布莱克的生日——自由和火威士忌，还有记得他的人。" }
    ]
  }
];

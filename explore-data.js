// explore-data.js - 霍格沃茨完整探索地点数据与材料系统

export const hogwartsExploreData = [
  {
    level: 1,
    name: "霍格沃茨城堡",
    icon: "🏰",
    desc: "坐落于苏格兰高地的古老魔法学府，巫师学习与生活的核心区域",
    needLevel: 0,
    unlockTip: "无限制",
    children: [
      {
        level: 3,
        name: "城堡地下室・地牢",
        icon: "⛓️",
        desc: "城堡底层阴暗潮湿区域，多为地窖与蛇院地盘",
        needLevel: 1,
        unlockTip: "一年级解锁",
        children: [
          { level: 4, name: "斯莱特林公共休息室", icon: "🐍", desc: "幽深冷寂、壁炉长明的蛇院专属休息室", unlock: true, exploreRate: 0, needLevel: 1, requiredHouse: "斯莱特林", unlockTip: "需要斯莱特林学院身份" },
          { level: 4, name: "斯莱特林宿舍", icon: "🛏️", desc: "斯莱特林学员专属地下寝室", unlock: true, exploreRate: 0, needLevel: 1, requiredHouse: "斯莱特林", unlockTip: "需要斯莱特林学院身份" },
          { level: 4, name: "魔药课教室", icon: "⚗️", desc: "阴森地窖中，专门用来熬制各类魔法药剂", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "一年级自动解锁" },
          { level: 4, name: "城堡储藏室", icon: "📦", desc: "存放城堡物资、食材与老旧杂物的仓库", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "一年级自动解锁" },
          { level: 4, name: "地牢囚室", icon: "🚪", desc: "曾经用来关押危险魔法生物的阴暗囚牢", unlock: true, exploreRate: 0, needLevel: 3, unlockTip: "三年级解锁" },
          { level: 4, name: "密室", icon: "👁️", desc: "萨拉查・斯莱特林遗留的千年秘密禁地", unlock: true, exploreRate: 0, needLevel: 5, unlockTip: "五年级完成密室剧情解锁" }
        ]
      },
      {
        level: 3,
        name: "城堡一层",
        icon: "🚪",
        desc: "城堡主入口楼层，人流最多的公共区域",
        needLevel: 0,
        unlockTip: "无限制",
        children: [
          { level: 4, name: "城堡正门门厅", icon: "🚩", desc: "霍格沃茨大门入口，迎接每一位新生", unlock: true, exploreRate: 0, needLevel: 0, unlockTip: "无限制" },
          { level: 4, name: "霍格沃茨大礼堂", icon: "✨", desc: "浮空蜡烛、长桌盛宴，全校集会用餐之地", unlock: true, exploreRate: 0, needLevel: 0, unlockTip: "无限制" },
          { level: 4, name: "一楼走廊", icon: "🖼️", desc: "会移动的画像走廊，连通城堡各大区域", unlock: true, exploreRate: 0, needLevel: 0, unlockTip: "无限制" },
          { level: 4, name: "校医院", icon: "💊", desc: "庞弗雷夫人负责治疗受伤与生病的学生", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "一年级自动解锁" },
          { level: 4, name: "城堡图书馆", icon: "📖", desc: "收藏海量魔法典籍、禁书与历史文献", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "一年级自动解锁" },
          { level: 4, name: "图书馆禁书区", icon: "🔒", desc: "存放高危魔法书籍，仅限教师许可进入", unlock: true, exploreRate: 0, needLevel: 3, unlockTip: "三年级解锁" },
          { level: 4, name: "家养小精灵厨房", icon: "🍞", desc: "隐藏在大礼堂地下，小精灵制作美食的工坊", unlock: true, exploreRate: 0, needLevel: 2, unlockTip: "二年级解锁" },
          { level: 4, name: "有求必应屋", icon: "❓", desc: "只在需要时出现，随心意改变内部样貌", unlock: true, exploreRate: 0, needLevel: 4, unlockTip: "四年级解锁" }
        ]
      },
      {
        level: 3,
        name: "城堡二层 & 三层",
        icon: "🏛️",
        desc: "各式课程教室集中楼层，学生日常上课区域",
        needLevel: 1,
        unlockTip: "一年级解锁",
        children: [
          { level: 4, name: "魔咒课教室", icon: "📜", desc: "弗立维教授授课，学习各类实用魔咒", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "一年级自动解锁" },
          { level: 4, name: "黑魔法防御术教室", icon: "🛡️", desc: "学习抵御黑魔法、怪物与黑暗生物", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "一年级自动解锁" },
          { level: 4, name: "魔法史教室", icon: "📜", desc: "幽灵教授讲述巫师世界的古老历史", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "一年级自动解锁" },
          { level: 4, name: "二楼女生盥洗室", icon: "🚽", desc: "常年回荡桃金娘哭声的老旧洗手间", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "一年级自动解锁" },
          { level: 4, name: "教师办公室走廊", icon: "👨‍🏫", desc: "各学院院长与教授办公区域", unlock: true, exploreRate: 0, needLevel: 2, unlockTip: "二年级解锁" }
        ]
      },
      {
        level: 3,
        name: "四大学院塔楼",
        icon: "🏛️",
        desc: "四大分院专属高塔，各自的休息与住宿区域",
        needLevel: 1,
        unlockTip: "一年级解锁",
        children: [
          { level: 4, name: "格兰芬多公共休息室", icon: "🦁", desc: "壁炉温暖、沙发柔软，勇敢狮子的家园", unlock: true, exploreRate: 0, needLevel: 0, requiredHouse: "格兰芬多", unlockTip: "需要格兰芬多学院身份" },
          { level: 4, name: "格兰芬多宿舍", icon: "🛏️", desc: "狮院学员夜间休息的温馨寝室", unlock: true, exploreRate: 0, needLevel: 0, requiredHouse: "格兰芬多", unlockTip: "需要格兰芬多学院身份" },
          { level: 4, name: "拉文克劳公共休息室", icon: "🦅", desc: "高悬天文塔顶，需要解谜才能进入的智慧阁楼", unlock: true, exploreRate: 0, needLevel: 1, requiredHouse: "拉文克劳", unlockTip: "需要拉文克劳学院身份" },
          { level: 4, name: "拉文克劳宿舍", icon: "🛏️", desc: "鹰院学子安静雅致的住宿空间", unlock: true, exploreRate: 0, needLevel: 1, requiredHouse: "拉文克劳", unlockTip: "需要拉文克劳学院身份" },
          { level: 4, name: "赫奇帕奇公共休息室", icon: "🦡", desc: "隐藏在花园后方，温暖又安全的休憩地", unlock: true, exploreRate: 0, needLevel: 1, requiredHouse: "赫奇帕奇", unlockTip: "需要赫奇帕奇学院身份" },
          { level: 4, name: "赫奇帕奇宿舍", icon: "🛏️", desc: "獾院舒适朴实的学生寝室", unlock: true, exploreRate: 0, needLevel: 1, requiredHouse: "赫奇帕奇", unlockTip: "需要赫奇帕奇学院身份" }
        ]
      },
      {
        level: 3,
        name: "城堡高层区域",
        icon: "🌤️",
        desc: "塔楼顶层区域，包含钟楼、天文与猫头鹰栖息地",
        needLevel: 1,
        unlockTip: "一年级解锁",
        children: [
          { level: 4, name: "占卜课教室", icon: "🔮", desc: "高塔阁楼内，眺望星空预言未来", unlock: true, exploreRate: 0, needLevel: 3, unlockTip: "三年级解锁" },
          { level: 4, name: "天文塔", icon: "🌌", desc: "霍格沃茨最高塔楼，观测星象与魔法实践", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "一年级自动解锁" },
          { level: 4, name: "钟楼", icon: "⏰", desc: "控制全校时间流转的古老机械钟楼", unlock: true, exploreRate: 0, needLevel: 0, unlockTip: "无限制" },
          { level: 4, name: "猫头鹰塔楼", icon: "🦉", desc: "猫头鹰栖息、收发邮件信件的高塔", unlock: true, exploreRate: 0, needLevel: 0, unlockTip: "无限制" }
        ]
      },
      {
        level: 3,
        name: "城堡外围场地",
        icon: "🌳",
        desc: "城堡墙外的开阔户外，草坪、球场与自然区域",
        needLevel: 0,
        unlockTip: "无限制",
        children: [
          { level: 4, name: "魁地奇球场", icon: "🏆", desc: "巫师飞行竞技赛场，四大学院对抗赛场", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "一年级自动解锁" },
          { level: 4, name: "魁地奇看台", icon: "🏟️", desc: "观看比赛的高空看台", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "一年级自动解锁" },
          { level: 4, name: "草药课温室", icon: "🪴", desc: "培育各类珍稀、危险魔法植物的温室", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "一年级自动解锁" },
          { level: 4, name: "海格小屋", icon: "🏡", desc: "混血巨人看守海格的林间木屋住所", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "一年级自动解锁" },
          { level: 4, name: "黑湖船坞", icon: "⛵", desc: "新生初次抵达霍格沃茨的乘船码头", unlock: true, exploreRate: 0, needLevel: 0, unlockTip: "无限制" },
          { level: 4, name: "黑湖湖畔", icon: "💧", desc: "黑湖沿岸浅水区域，适合散步放松", unlock: true, exploreRate: 0, needLevel: 0, unlockTip: "无限制" },
          { level: 4, name: "庭院草坪", icon: "🌿", desc: "城堡前方大片绿地，学生休闲晒太阳之地", unlock: true, exploreRate: 0, needLevel: 0, unlockTip: "无限制" }
        ]
      },
      {
        level: 3,
        name: "打人柳区域",
        icon: "🌳",
        desc: "狂暴魔法大树与其连接的隐秘通道",
        needLevel: 3,
        unlockTip: "三年级解锁",
        children: [
          { level: 4, name: "打人柳树下", icon: "🌳", desc: "极具攻击性的巨型魔法柳树，危险且神秘", unlock: true, exploreRate: 0, needLevel: 3, unlockTip: "三年级解锁" },
          { level: 4, name: "尖叫棚屋入口", icon: "🏚️", desc: "打人柳密道另一端，通往霍格莫德的鬼屋", unlock: true, exploreRate: 0, needLevel: 3, unlockTip: "三年级解锁" }
        ]
      }
    ]
  },
  {
    level: 1,
    name: "禁忌森林",
    icon: "🌑",
    desc: "霍格沃茨边界的危险密林，校方禁止学生私自深入",
    needLevel: 2,
    unlockTip: "二年级解锁",
    children: [
      {
        level: 3,
        name: "禁林边缘",
        icon: "🌫️",
        desc: "树林外围相对安全的浅区，偶尔允许活动",
        needLevel: 1,
        unlockTip: "一年级解锁",
        children: [
          { level: 4, name: "海格小屋旁小径", icon: "🛤️", desc: "靠近木屋的安全小路，不会深入密林", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "一年级自动解锁" }
        ]
      },
      {
        level: 3,
        name: "禁林深处",
        icon: "💀",
        desc: "密林核心地带，遍布危险魔法生物与黑暗气息",
        needLevel: 2,
        unlockTip: "二年级解锁",
        children: [
          { level: 4, name: "独角兽栖息地", icon: "🦄", desc: "纯净独角兽栖息的神圣林间角落", unlock: true, exploreRate: 0, needLevel: 2, unlockTip: "二年级解锁" },
          { level: 4, name: "八眼巨蛛巢穴", icon: "🕷️", desc: "巨型毒蜘蛛群居的恐怖密林深处", unlock: true, exploreRate: 0, needLevel: 3, unlockTip: "三年级解锁" },
          { level: 4, name: "马人部落领地", icon: "🏹", desc: "星象观察者马人的群居森林领地", unlock: true, exploreRate: 0, needLevel: 3, unlockTip: "三年级解锁" },
          { level: 4, name: "黑暗魔法聚集地", icon: "⚫", desc: "负能量聚集，黑魔法残留浓厚的危险区域", unlock: true, exploreRate: 0, needLevel: 5, unlockTip: "五年级解锁" }
        ]
      }
    ]
  },
  {
    level: 1,
    name: "霍格莫德村",
    icon: "🏘️",
    desc: "英国唯一全巫师村落，学生周末外出的欢乐小镇（限时解锁）",
    needLevel: 1,
    unlockTip: "限时解锁",
    children: [
      { 
        level: 3, 
        name: "蜂蜜公爵糖果店", 
        icon: "🍬", 
        desc: "魔法世界最知名糖果店，各式趣味魔法零食", 
        unlock: true, 
        exploreRate: 0, 
        needLevel: 1, 
        unlockTip: "限时解锁",
        shopId: "honeydukes",  // 添加商店ID
        shopType: "specialty"   // 标记为特色商店
      },
      { 
        level: 3, 
        name: "三把扫帚酒吧", 
        icon: "🍺", 
        desc: "黄油啤酒、热蜂蜜酒，巫师休闲聊天据点", 
        unlock: true, 
        exploreRate: 0, 
        needLevel: 1, 
        unlockTip: "限时解锁",
        shopId: "three_broomsticks",
        shopType: "tavern"
      },
      { 
        level: 3, 
        name: "佐科笑话店", 
        icon: "🃏", 
        desc: "恶作剧道具、整蛊玩具与趣味魔法小物", 
        unlock: true, 
        exploreRate: 0, 
        needLevel: 1, 
        unlockTip: "限时解锁",
        shopId: "zonkos",
        shopType: "specialty"
      },
      { 
        level: 3, 
        name: "尖叫棚屋", 
        icon: "🏚️", 
        desc: "传说中全英国最阴森诡异的闹鬼小屋", 
        unlock: true, 
        exploreRate: 0, 
        needLevel: 1, 
        unlockTip: "限时解锁",
        isRumored: true  // 标记为传闻地点，不是商店
      },
      { 
        level: 3, 
        name: "风雅氏巫师道具店", 
        icon: "🔮", 
        desc: "魔法装备、魔杖配件与巫师生活用品", 
        unlock: true, 
        exploreRate: 0, 
        needLevel: 1, 
        unlockTip: "限时解锁",
        shopId: "gladrags",
        shopType: "equipment"
      },
      { 
        level: 3, 
        name: "德维斯与班斯商店", 
        icon: "🛒", 
        desc: "学生必备文具、魔法材料与日常用品", 
        unlock: true, 
        exploreRate: 0, 
        needLevel: 1, 
        unlockTip: "限时解锁",
        shopId: "devises_and_bangs",
        shopType: "general"
      }
    ]
  }
];

// 全天通用可进入区域
export const alwaysAllowArea = ["城堡正门门厅","一楼走廊","猫头鹰塔楼","钟楼","黑湖湖畔","庭院草坪","黑湖船坞"];

// 魔药材料分布表 - 基于原著世界观的合理分布
export const materialLocations = {
  // 城堡地下室・地牢
  "魔药课教室": ["蛇牙", "带触角鼻涕虫", "火蜥蜴血", "流液草", "草蛉虫", "蚂蟥", "乌头", "瞌睡豆", "龙毒"],
  "城堡储藏室": ["罂粟籽", "缩皱无花果", "干荨麻", "薰衣草", "蝙蝠脾脏", "膨胀苔藓", "老龄苔藓", "石榴汁"],
  "斯莱特林公共休息室": ["蛇毒"],
  "密室": ["蛇毒", "黑魔法草"],
  "地牢囚室": ["诅咒苔藓"],

  // 教学区域
  "校医院": ["白鲜", "白鲜花瓣", "甘菊", "红花瓣"],
  "黑魔法防御术教室": ["豪猪刺"],
  "家养小精灵厨房": ["蜂蜜水", "花蜜", "石榴汁"],
  "魔法史教室": ["古代魔药书籍"],
  "占卜课教室": ["预言草"],
  
  // 户外和自然区域
  "草药课温室": ["干荨麻", "薄荷芽", "甘菊", "雏菊根", "荨麻", "薄荷", "蒲公英", "白鲜", 
                "蒲公英根", "金盏花", "雪滴花", "玫瑰花瓣", "日光花瓣", "日光花", "红花瓣", "曼德拉草",
                "火焰花", "柔顺草"],
  "黑湖湖畔": ["水仙根", "睡莲花粉", "露水", "月光露水", "雾隐花"],
  "庭院草坪": ["雏菊根", "荨麻", "薄荷", "蒲公英", "日光花瓣", "日光花", "柔顺草"],
  "打人柳树下": ["锋利草", "混乱草"],
  
  // 特殊地点
  "有求必应屋": ["失落的魔药材料", "传送草", "秘密草"],
  "图书馆禁书区": ["诅咒苔藓", "誓言草", "秘密草"],
  
  // 禁林区域
  "海格小屋旁小径": ["毛毛虫", "缬草根"],
  "禁林边缘": ["苦艾草", "混乱草", "毛毛虫", "缬草根", "喷嚏草", "雾隐花"],
  "独角兽栖息地": ["独角兽角粉", "月光花蜜", "阳光花蜜"],
  "马人部落领地": ["星辰花蜜", "预言草"],
  "八眼巨蛛巢穴": ["蜘蛛毒液", "蝙蝠翅膀", "蝙蝠翅膀粉", "剧毒蘑菇"],
  "黑暗魔法聚集地": ["龙血", "黑乌头", "诅咒苔藓", "蝙蝠血", "夜影花", "死神草", "暗影花", "暗影粉"],
  
  // 霍格莫德村
  "蜂蜜公爵糖果店": ["花蜜", "蜂蜜水"],
  "佐科笑话店": ["呕吐豆", "鼻血花", "气泡草", "胡话草"],
  "风雅氏巫师道具店": ["珍珠粉", "银粉", "月长石粉", "星辰粉", "誓言草"],
  "三把扫帚酒吧": ["蜂蜜水"],
  "尖叫棚屋": ["狼毒草", "隐形苔藓"],
  
  // 稀有地点
  "天文塔": ["月光露水", "星辰花蜜"],
  "魁地奇球场": ["闪电花", "幸运四叶草", "传送草", "火焰花"]
};

// 材料稀有度分类
const materialRarity = {
  common: ["干荨麻", "薄荷", "蒲公英", "荨麻", "露水", "花蜜", "蜂蜜水"],
  uncommon: ["蛇牙", "薄荷芽", "甘菊", "雏菊根", "缩皱无花果", "水仙根", "白鲜", "白鲜花瓣"],
  rare: ["带触角鼻涕虫", "火蜥蜴血", "睡莲花粉", "蜘蛛毒液", "蝙蝠脾脏", "流液草", "草蛉虫"],
  very_rare: ["独角兽角粉", "龙血", "蛇毒", "暗影花", "黑乌头", "死神草", "狼毒草", "星辰粉"]
};

// 材料对应的表情符号系统
const materialEmojis = {
  // 常见材料
  "干荨麻": "🌿",
  "薄荷": "🌱",
  "蒲公英": "🌼",
  "荨麻": "🌱",
  "露水": "💧",
  "花蜜": "🍯",
  "蜂蜜水": "🍯",
  
  // 不常见材料
  "蛇牙": "🦷",
  "薄荷芽": "🌱",
  "甘菊": "🌼",
  "雏菊根": "🌱",
  "缩皱无花果": "🍐",
  "水仙根": "🌷",
  "白鲜": "🌹",
  "白鲜花瓣": "🥀",
  
  // 稀有材料
  "带触角鼻涕虫": "🐌",
  "火蜥蜴血": "🩸",
  "睡莲花粉": "✨",
  "蜘蛛毒液": "☠️",
  "蝙蝠脾脏": "🦇",
  "流液草": "💦",
  "草蛉虫": "🐜",
  "蚂蟥": "🪱",
  
  // 非常稀有材料
  "独角兽角粉": "🦄",
  "龙血": "🐉",
  "蛇毒": "🐍",
  "暗影花": "🌑",
  "黑乌头": "⚫",
  "死神草": "☠️",
  "狼毒草": "🐺",
  "星辰粉": "✨",
  
  // 特殊材料
  "月光露水": "🌙",
  "阳光花蜜": "☀️",
  "月光花蜜": "🌙",
  "星辰花蜜": "⭐",
  "预言草": "🔮",
  "蝙蝠翅膀": "🦇",
  "蝙蝠翅膀粉": "✨",
  "蝙蝠血": "🩸",
  "珍珠粉": "🪄",
  "银粉": "✨",
  "月长石粉": "🌙",
  "闪电花": "⚡",
  "幸运四叶草": "🍀",
  "诅咒苔藓": "👻",
  "隐形苔藓": "👁️",
  "混乱草": "💫",
  "锋利草": "🗡️",
  "罂粟籽": "🌰",
  "薰衣草": "💜",
  "喷嚏草": "🤧",
  "毛毛虫": "🐛",
  "缬草根": "🌱",
  "苦艾草": "🌿",
  "豪猪刺": "🦔",
  "黑魔法草": "⚫",
  "呕吐豆": "🤢",
  "鼻血花": "👃",
  "气泡草": "💭",
  "胡话草": "🗯️",
  "金盏花": "🌼",
  "雪滴花": "❄️",
  "玫瑰花瓣": "🌹",
  "失落的魔药材料": "❓",
  
  // 添加缺失的材料表情
  "雾隐花": "🌫️",
  "膨胀苔藓": "🍄",
  "日光花瓣": "☀️",
  "日光花": "🌞",
  "夜影花": "🌚",
  "乌头": "☠️",
  "老龄苔藓": "🧓",
  "红花瓣": "🌺",
  "石榴汁": "🧃",
  "瞌睡豆": "💤",
  "曼德拉草": "🌱",
  "剧毒蘑菇": "🍄",
  "龙毒": "🐲",
  "暗影粉": "✨",
  "誓言草": "🤝",
  "传送草": "🌀",
  "秘密草": "🤫",
  "火焰花": "🔥",
  "柔顺草": "🧵",
  "水仙根粉末": "💨"
};

// 获取材料对应的表情符号
export function getMatEmoji(materialName) {
  return materialEmojis[materialName] || "🌿";  // 如果找不到对应的表情符号，返回默认的试管表情
}

// 根据材料稀有度和探索度计算获取概率
// 根据材料稀有度和探索度计算获取概率
function getMaterialChance(rarity, exploreRate) {
  const baseChances = {
    common: 0.80,      // 提高到80%
    uncommon: 0.60,    // 提高到60%
    rare: 0.30,        // 提高到30%
    very_rare: 0.10    // 提高到10%
  };
  
  // 探索度加成：每10%探索度增加2%概率，最高增加20%
  const exploreBonus = Math.min(0.2, (exploreRate / 100) * 0.2);
  let chance = baseChances[rarity] + exploreBonus;
  
  // 不限制概率
  return chance;
}

// 获取材料稀有度
function getMaterialRarityLevel(material) {
  if (materialRarity.common.includes(material)) return "common";
  if (materialRarity.uncommon.includes(material)) return "uncommon";
  if (materialRarity.rare.includes(material)) return "rare";
  return "very_rare";
}

// 探索获取材料的主函数 - 优化版
export function exploreMaterials(areaName, exploreRate) {
  // 检查该地点是否有材料可获取
  const possibleMaterials = materialLocations[areaName];
  if (!possibleMaterials || possibleMaterials.length === 0) {
    return null;
  }
  
  // 过滤掉无效材料
  const validMaterials = possibleMaterials.filter(m => m && typeof m === 'string');
  if (validMaterials.length === 0) {
    return null;
  }
  
  // 随机选择一种材料
  const material = validMaterials[Math.floor(Math.random() * validMaterials.length)];
  
  // 根据材料稀有度计算获取几率
  const rarityLevel = getMaterialRarityLevel(material);
  const chance = getMaterialChance(rarityLevel, exploreRate);
  
  // 随机判断是否获得材料
  const randomValue = Math.random();
  const isGain = randomValue <= chance;
  
  // 添加调试日志（开发时使用，生产环境可注释）
  // console.log(`[材料获取] 地点:${areaName}, 材料:${material}, 稀有度:${rarityLevel}, 概率:${(chance*100).toFixed(1)}%, 随机值:${randomValue.toFixed(3)}, 结果:${isGain ? '获得' : '未获得'}`);
  
  if (!isGain) {
    return null;
  }
  
  // 随机决定获得数量 (根据稀有度决定)
  let maxQuantity = 1;
  if (rarityLevel === "common") maxQuantity = 5;
  else if (rarityLevel === "uncommon") maxQuantity = 3;
  else if (rarityLevel === "rare") maxQuantity = 2;
  else maxQuantity = 1;
  
  const quantity = Math.floor(Math.random() * maxQuantity) + 1;
  
  return { name: material, count: quantity };
}
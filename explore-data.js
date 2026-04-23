// explore-data.js 霍格沃茨完整探索地点数据｜独立文件
export const hogwartsExploreData = [
  {
    level: 1,
    name: "霍格沃茨城堡",
    icon: "🏯",
    desc: "坐落于苏格兰高地的古老魔法学府，巫师学习与生活的核心区域",
    children: [
      {
        level: 3,
        name: "城堡地下室・地牢",
        icon: "⛓️",
        desc: "城堡底层阴暗潮湿区域，多为地窖与蛇院地盘",
        children: [
          { level: 4, name: "斯莱特林公共休息室", icon: "🐍", desc: "幽深冷寂、壁炉长明的蛇院专属休息室", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "需要斯莱特林学院身份" },
          { level: 4, name: "斯莱特林宿舍", icon: "🛏️", desc: "斯莱特林学员专属地下寝室", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "需要斯莱特林学院身份" },
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
        children: [
          { level: 4, name: "格兰芬多公共休息室", icon: "🦁", desc: "壁炉温暖、沙发柔软，勇敢狮子的家园", unlock: true, exploreRate: 0, needLevel: 0, unlockTip: "需要格兰芬多学院身份" },
          { level: 4, name: "格兰芬多宿舍", icon: "🛏️", desc: "狮院学员夜间休息的温馨寝室", unlock: true, exploreRate: 0, needLevel: 0, unlockTip: "需要格兰芬多学院身份" },
          { level: 4, name: "拉文克劳公共休息室", icon: "🦅", desc: "高悬天文塔顶，需要解谜才能进入的智慧阁楼", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "需要拉文克劳学院身份" },
          { level: 4, name: "拉文克劳宿舍", icon: "🛏️", desc: "鹰院学子安静雅致的住宿空间", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "需要拉文克劳学院身份" },
          { level: 4, name: "赫奇帕奇公共休息室", icon: "🦡", desc: "隐藏在花园后方，温暖又安全的休憩地", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "需要赫奇帕奇学院身份" },
          { level: 4, name: "赫奇帕奇宿舍", icon: "🛏️", desc: "獾院舒适朴实的学生寝室", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "需要赫奇帕奇学院身份" }
        ]
      },
      {
        level: 3,
        name: "城堡高层区域",
        icon: "🌤️",
        desc: "塔楼顶层区域，包含钟楼、天文与猫头鹰栖息地",
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
    children: [
      {
        level: 3,
        name: "禁林边缘",
        icon: "🌫️",
        desc: "树林外围相对安全的浅区，偶尔允许活动",
        children: [
          { level: 4, name: "海格小屋旁小径", icon: "🛤️", desc: "靠近木屋的安全小路，不会深入密林", unlock: true, exploreRate: 0, needLevel: 1, unlockTip: "一年级自动解锁" }
        ]
      },
      {
        level: 3,
        name: "禁林深处",
        icon: "💀",
        desc: "密林核心地带，遍布危险魔法生物与黑暗气息",
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
    desc: "英国唯一全巫师村落，学生周末外出的欢乐小镇",
    children: [
      { level: 3, name: "蜂蜜公爵糖果店", icon: "🍬", desc: "魔法世界最知名糖果店，各式趣味魔法零食", unlock: true, exploreRate: 0, needLevel: 3, unlockTip: "三年级解锁" },
      { level: 3, name: "三把扫帚酒吧", icon: "🍺", desc: "黄油啤酒、热蜂蜜酒，巫师休闲聊天据点", unlock: true, exploreRate: 0, needLevel: 3, unlockTip: "三年级解锁" },
      { level: 3, name: "佐科笑话店", icon: "🃏", desc: "恶作剧道具、整蛊玩具与趣味魔法小物", unlock: true, exploreRate: 0, needLevel: 3, unlockTip: "三年级解锁" },
      { level: 3, name: "尖叫棚屋", icon: "🏚️", desc: "传说中全英国最阴森诡异的闹鬼小屋", unlock: true, exploreRate: 0, needLevel: 3, unlockTip: "三年级解锁" },
      { level: 3, name: "风雅氏巫师道具店", icon: "🔮", desc: "魔法装备、魔杖配件与巫师生活用品", unlock: true, exploreRate: 0, needLevel: 3, unlockTip: "三年级解锁" },
      { level: 3, name: "德维斯与班斯商店", icon: "🛒", desc: "学生必备文具、魔法材料与日常用品", unlock: true, exploreRate: 0, needLevel: 3, unlockTip: "三年级解锁" }
    ]
  }
];

// 全天通用可进入区域
export const alwaysAllowArea = ["城堡正门门厅","一楼走廊","猫头鹰塔楼","钟楼","黑湖湖畔","庭院草坪","黑湖船坞"];
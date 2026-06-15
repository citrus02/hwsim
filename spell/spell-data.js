// spell-data.js咒语数据
// sourceType:
// hogwarts  = 霍格沃茨正规课程（教授教学）
// self       = 自学/禁书/私下/特殊来源
// dark       = 黑魔法/禁咒

export const spellData = [

  // ==============================================
  // 一、霍格沃茨正规课程（学校教授教学）
  // ==============================================

  // === 魔咒课（弗立维教授）===
  {
    id: "lumos",
    nameCn: "荧光闪烁",
    nameEn: "Lumos",
    type: "魔咒课",
    sourceType: "hogwarts",
    effect: "魔杖发光，用于照明",
    unlockCourse: "魔咒学",
    unlockPercent: 8
  },
  {
    id: "nox",
    nameCn: "诺克斯",
    nameEn: "Nox",
    type: "魔咒课",
    sourceType: "hogwarts",
    effect: "熄灭荧光闪烁",
    unlockCourse: "魔咒学",
    unlockPercent: 12
  },
  {
    id: "alohomora",
    nameCn: "阿拉霍洞开",
    nameEn: "Alohomora",
    type: "魔咒课",
    sourceType: "hogwarts",
    effect: "打开普通锁",
    unlockCourse: "魔咒学",
    unlockPercent: 18
  },
  {
    id: "wingardiumLeviosa",
    nameCn: "羽加迪姆·勒维奥萨",
    nameEn: "Wingardium Leviosa",
    type: "魔咒课",
    sourceType: "hogwarts",
    effect: "使物体悬浮",
    unlockCourse: "魔咒学",
    unlockPercent: 25
  },
  {
    id: "reparo",
    nameCn: "修复如初",
    nameEn: "Reparo",
    type: "魔咒课",
    sourceType: "hogwarts",
    effect: "修复破损物品",
    unlockCourse: "魔咒学",
    unlockPercent: 30
  },
  {
    id: "accio",
    nameCn: "飞来咒",
    nameEn: "Accio",
    type: "魔咒课",
    sourceType: "hogwarts",
    effect: "召唤物品到手中",
    unlockCourse: "魔咒学",
    unlockPercent: 40
  },
  {
    id: "scourgify",
    nameCn: "清理一新",
    nameEn: "Scourgify",
    type: "魔咒课",
    sourceType: "hogwarts",
    effect: "清洁污渍",
    unlockCourse: "魔咒学",
    unlockPercent: 35
  },
  {
    id: "colloportus",
    nameCn: "速速禁锢",
    nameEn: "Colloportus",
    type: "魔咒课",
    sourceType: "hogwarts",
    effect: "锁门",
    unlockCourse: "魔咒学",
    unlockPercent: 45
  },
  {
    id: "sonorus",
    nameCn: "声音洪亮",
    nameEn: "Sonorus",
    type: "魔咒课",
    sourceType: "hogwarts",
    effect: "放大声音",
    unlockCourse: "魔咒学",
    unlockPercent: 55
  },
  {
    id: "quietus",
    nameCn: "悄声细语",
    nameEn: "Quietus",
    type: "魔咒课",
    sourceType: "hogwarts",
    effect: "缩小声音",
    unlockCourse: "魔咒学",
    unlockPercent: 58
  },
  {
    id: "impervius",
    nameCn: "防水防湿",
    nameEn: "Impervius",
    type: "魔咒课",
    sourceType: "hogwarts",
    effect: "物体表面防水",
    unlockCourse: "魔咒学",
    unlockPercent: 60
  },
  {
    id: "tergeo",
    nameCn: "旋风扫净",
    nameEn: "Tergeo",
    type: "魔咒课",
    sourceType: "hogwarts",
    effect: "清除液体/污渍",
    unlockCourse: "魔咒学",
    unlockPercent: 62
  },
  {
    id: "aguamenti",
    nameCn: "清水如泉",
    nameEn: "Aguamenti",
    type: "魔咒课",
    sourceType: "hogwarts",
    effect: "召唤清水",
    unlockCourse: "魔咒学",
    unlockPercent: 65
  },
  {
    id: "relashio",
    nameCn: "力松劲泄",
    nameEn: "Relashio",
    type: "魔咒课",
    sourceType: "hogwarts",
    effect: "解除束缚",
    unlockCourse: "魔咒学",
    unlockPercent: 68
  },
  {
    id: "descendo",
    nameCn: "应声落地",
    nameEn: "Descendo",
    type: "魔咒课",
    sourceType: "hogwarts",
    effect: "使物体下降",
    unlockCourse: "魔咒学",
    unlockPercent: 70
  },
  {
    id: "orchideous",
    nameCn: "兰花盛开",
    nameEn: "Orchideous",
    type: "魔咒课",
    sourceType: "hogwarts",
    effect: "魔杖开出鲜花",
    unlockCourse: "魔咒学",
    unlockPercent: 75
  },

  // === 变形课（麦格教授）===
  {
    id: "evanesco",
    nameCn: "消失咒",
    nameEn: "Evanesco",
    type: "变形课",
    sourceType: "hogwarts",
    effect: "使物体消失",
    unlockCourse: "变形术",
    unlockPercent: 20
  },
  {
    id: "engorgio",
    nameCn: "速速变大",
    nameEn: "Engorgio",
    type: "变形课",
    sourceType: "hogwarts",
    effect: "物体放大",
    unlockCourse: "变形术",
    unlockPercent: 32
  },
  {
    id: "reducio",
    nameCn: "速速缩小",
    nameEn: "Reducio",
    type: "变形课",
    sourceType: "hogwarts",
    effect: "物体缩小",
    unlockCourse: "变形术",
    unlockPercent: 38
  },
  {
    id: "homenumRevelio",
    nameCn: "人形显身",
    nameEn: "Homenum Revelio",
    type: "变形课",
    sourceType: "hogwarts",
    effect: "探测附近人类",
    unlockCourse: "变形术",
    unlockPercent: 55
  },
  {
    id: "specialisRevelio",
    nameCn: "原形立现",
    nameEn: "Specialis Revelio",
    type: "变形课",
    sourceType: "hogwarts",
    effect: "揭露伪装、变形",
    unlockCourse: "变形术",
    unlockPercent: 65
  },

  // === 黑魔法防御术 ===
  {
    id: "expelliarmus",
    nameCn: "除你武器",
    nameEn: "Expelliarmus",
    type: "防御咒",
    sourceType: "hogwarts",
    effect: "缴械咒",
    unlockCourse: "黑魔法防御术",
    unlockPercent: 15
  },
  {
    id: "stupefy",
    nameCn: "昏昏倒地",
    nameEn: "Stupefy",
    type: "防御咒",
    sourceType: "hogwarts",
    effect: "击晕目标",
    unlockCourse: "黑魔法防御术",
    unlockPercent: 28
  },
  {
    id: "impedimenta",
    nameCn: "障碍重重",
    nameEn: "Impedimenta",
    type: "防御咒",
    sourceType: "hogwarts",
    effect: "阻挡/减缓目标",
    unlockCourse: "黑魔法防御术",
    unlockPercent: 32
  },
  {
    id: "protego",
    nameCn: "盔甲护身",
    nameEn: "Protego",
    type: "防御咒",
    sourceType: "hogwarts",
    effect: "基础护盾",
    unlockCourse: "黑魔法防御术",
    unlockPercent: 22
  },
  {
    id: "finiteIncantatem",
    nameCn: "咒立停",
    nameEn: "Finite Incantatem",
    type: "防御咒",
    sourceType: "hogwarts",
    effect: "解除多数咒语",
    unlockCourse: "黑魔法防御术",
    unlockPercent: 40
  },
  {
    id: "muffliato",
    nameCn: "闭耳塞听",
    nameEn: "Muffliato",
    type: "防御咒",
    sourceType: "hogwarts",
    effect: "隔绝偷听",
    unlockCourse: "黑魔法防御术",
    unlockPercent: 48
  },
  {
    id: "expectoPatronum",
    nameCn: "呼神护卫",
    nameEn: "Expecto Patronum",
    type: "防御咒",
    sourceType: "hogwarts",
    effect: "守护神咒，驱赶摄魂怪",
    unlockCourse: "黑魔法防御术",
    unlockPercent: 80
  },
  {
    id: "oppugno",
    nameCn: "万弹齐发",
    nameEn: "Oppugno",
    type: "防御咒",
    sourceType: "hogwarts",
    effect: "操控物体攻击",
    unlockCourse: "黑魔法防御术",
    unlockPercent: 55
  },
  {
    id: "reducto",
    nameCn: "粉身碎骨",
    nameEn: "Reducto",
    type: "防御咒",
    sourceType: "hogwarts",
    effect: "炸毁障碍物",
    unlockCourse: "黑魔法防御术",
    unlockPercent: 65
  },

  // === 治疗/魔药相关 ===
  {
    id: "episkey",
    nameCn: "愈合如初",
    nameEn: "Episkey",
    type: "治疗咒",
    sourceType: "hogwarts",
    effect: "治愈轻伤、骨折",
    unlockCourse: "草药学",
    unlockPercent: 25
  },
  {
    id: "ennervate",
    nameCn: "快快复苏",
    nameEn: "Ennervate",
    type: "治疗咒",
    sourceType: "hogwarts",
    effect: "唤醒昏迷者",
    unlockCourse: "草药学",
    unlockPercent: 30
  },
  {
    id: "obliviate",
    nameCn: "一忘皆空",
    nameEn: "Obliviate",
    type: "记忆咒",
    sourceType: "hogwarts",
    effect: "消除/修改记忆",
    unlockCourse: "魔法史",
    unlockPercent: 50
  },

  // ==============================================
  // 二、其他途径（自学/禁书/私下/黑魔法）
  // ==============================================

  {
    id: "locomotorMortis",
    nameCn: "腿立僵停死",
    nameEn: "Locomotor Mortis",
    type: "恶咒",
    sourceType: "self",
    effect: "锁住双腿无法移动",
    unlockCourse: null,
    unlockPercent: 0
  },
  {
    id: "levicorpus",
    nameCn: "倒挂金钟",
    nameEn: "Levicorpus",
    type: "恶咒",
    sourceType: "self",
    effect: "将人倒挂悬空",
    unlockCourse: null,
    unlockPercent: 0
  },
  {
    id: "liberacorpus",
    nameCn: "金钟落地",
    nameEn: "Liberacorpus",
    type: "反咒",
    sourceType: "self",
    effect: "解除倒挂金钟",
    unlockCourse: null,
    unlockPercent: 0
  },
  {
    id: "sectumsempra",
    nameCn: "神锋无影",
    nameEn: "Sectumsempra",
    type: "恶咒",
    sourceType: "self",
    effect: "造成割伤",
    unlockCourse: null,
    unlockPercent: 0
  },
  {
    id: "prioriIncantatem",
    nameCn: "闪回咒",
    nameEn: "Priori Incantatem",
    type: "特殊咒",
    sourceType: "self",
    effect: "显影魔杖过往咒语",
    unlockCourse: null,
    unlockPercent: 0
  },
  {
    id: "pointMe",
    nameCn: "给我指路",
    nameEn: "Point Me",
    type: "特殊咒",
    sourceType: "self",
    effect: "魔杖指北",
    unlockCourse: null,
    unlockPercent: 0
  },

  // ==============================================
  // 三、黑魔法 / 不可饶恕咒
  // ==============================================

  {
    id: "avadaKedavra",
    nameCn: "阿瓦达索命",
    nameEn: "Avada Kedavra",
    type: "黑魔法",
    sourceType: "dark",
    effect: "杀戮咒，直接致死",
    unlockCourse: null,
    unlockPercent: 0
  },
  {
    id: "crucio",
    nameCn: "钻心剜骨",
    nameEn: "Crucio",
    type: "黑魔法",
    sourceType: "dark",
    effect: "钻心咒，极致痛苦",
    unlockCourse: null,
    unlockPercent: 0
  },
  {
    id: "imperio",
    nameCn: "魂魄出窍",
    nameEn: "Imperio",
    type: "黑魔法",
    sourceType: "dark",
    effect: "夺魂咒，控制意志",
    unlockCourse: null,
    unlockPercent: 0
  },
  {
    id: "legilimens",
    nameCn: "摄神取念",
    nameEn: "Legilimens",
    type: "黑魔法",
    sourceType: "dark",
    effect: "读取思想记忆",
    unlockCourse: null,
    unlockPercent: 0
  },
  {
    id: "occlumens",
    nameCn: "大脑封闭",
    nameEn: "Occlumens",
    type: "黑魔法",
    sourceType: "dark",
    effect: "抵御摄神取念",
    unlockCourse: null,
    unlockPercent: 0
  }
];
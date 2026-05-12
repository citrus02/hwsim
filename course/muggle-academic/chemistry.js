/**
 * chemistry.js
 * 麻瓜学术系 · 化学
 * 教授：普里姆罗斯·斯普劳特（Primrose Sprout）
 * 课程体系：英国 KS3 → GCSE → A-Level（共 70 课，14 章，横跨 7 年级）
 */

import { lessonMap } from './chemistry-lesson.js';
import { questionBank } from './chemistry-questionBank.js';

export const subjectMeta = {
  key: "chemistry",
  name: "化学",
  icon: "⚗️",
  professor: "普里姆罗斯·斯普劳特",
  desc: "元素、反应——和魔药学共享秘密的学科。就像配制魔药一样，化学教你理解物质的语言。",
  unlockGrade: 3,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle:    "点头微笑，说\"很好，像培育曼德拉草一样细心\"",
  errorStyle:     "轻轻摇头，说\"别急，魔药也不是一次就能熬好的\"",
  officeHours:    "周三下午3-5点，温室旁边的办公室",
  signature:      "讲台上永远放着一小瓶曼德拉草汁液做示范",
  prop:           "褪色的旧围裙，口袋里装着各种试剂瓶标签",
  catchphrase:    "记住，无论是魔药还是化学，耐心都是最好的试剂"
};

// 14章 × 5课 = 70课，贯穿1–7年级
export const syllabus = [
  // ── 第1年·KS3 ────────────────────────────────────────────
  {
    chapter: 1, yearRange: "1年级", phase: "KS3",
    title: "物质的基础",
    lessons: [
      { lesson: 1,  title: "化学的语言：元素与符号", keyPoints: ["元素周期表入门", "常见元素符号", "元素与物质的关系", "元素与魔药材料的对应"] },
      { lesson: 2,  title: "原子结构",               keyPoints: ["原子的组成", "质子、中子、电子", "原子核与电子云", "原子质量与原子序数"] },
      { lesson: 3,  title: "元素周期表的规律",       keyPoints: ["周期与族", "金属与非金属", "核外电子排布", "化学性质的周期性"] },
      { lesson: 4,  title: "化合物与化学式",         keyPoints: ["化合物的形成", "化学式的书写", "化合价的概念", "分子式与实验式"] },
      { lesson: 5,  title: "摩尔：化学的计量单位",   keyPoints: ["摩尔的定义", "阿伏伽德罗常数", "摩尔质量的计算", "魔药配方中的摩尔概念"] }
    ]
  },
  {
    chapter: 2, yearRange: "1年级", phase: "KS3",
    title: "化学反应入门",
    lessons: [
      { lesson: 6,  title: "物理变化与化学变化",     keyPoints: ["变化的判断标准", "质量守恒定律", "化学变化的特征", "魔药调制中的变化类型"] },
      { lesson: 7,  title: "化学方程式",             keyPoints: ["方程式的书写规则", "配平方法", "状态符号", "反应条件的表示"] },
      { lesson: 8,  title: "反应类型：合成与分解",   keyPoints: ["合成反应", "分解反应", "实例分析", "光合作用的化学本质"] },
      { lesson: 9,  title: "反应类型：置换反应",     keyPoints: ["置换反应的特点", "金属活动性顺序", "水溶液中的置换", "魔药中的置换反应"] },
      { lesson: 10, title: "反应速率初探",           keyPoints: ["影响反应速率的因素", "温度与速率", "浓度与速率", "催化剂的作用"] }
    ]
  },
  // ── 第2年·KS3 ────────────────────────────────────
  {
    chapter: 3, yearRange: "2年级", phase: "KS3",
    title: "物质的状态",
    lessons: [
      { lesson: 11, title: "物质的三态",             keyPoints: ["固态、液态、气态", "状态变化的能量", "熔点与沸点", "升华与凝华"] },
      { lesson: 12, title: "气体定律",               keyPoints: ["波义耳定律", "查理定律", "理想气体状态方程", "气体在魔药中的应用"] },
      { lesson: 13, title: "溶液与溶解度",           keyPoints: ["溶解过程", "溶解度曲线", "饱和与不饱和", "魔药溶液的配制"] },
      { lesson: 14, title: "浓度的表示",             keyPoints: ["质量分数", "摩尔浓度", "稀释定律", "浓度对反应的影响"] },
      { lesson: 15, title: "胶体与悬浮液",           keyPoints: ["分散系的分类", "胶体的性质", "丁达尔效应", "魔药中的胶体"] }
    ]
  },
  {
    chapter: 4, yearRange: "2年级", phase: "KS3",
    title: "酸碱与盐",
    lessons: [
      { lesson: 16, title: "酸碱的性质",             keyPoints: ["酸碱的定义", "酸碱指示剂", "pH值", "常见酸碱"] },
      { lesson: 17, title: "中和反应",               keyPoints: ["中和反应的实质", "盐的生成", "中和热", "魔药中的中和应用"] },
      { lesson: 18, title: "常见的盐",               keyPoints: ["盐的分类", "盐的溶解性", "盐的性质", "魔药中的盐类成分"] },
      { lesson: 19, title: "电解与电镀",             keyPoints: ["电解原理", "电解水", "电镀工艺", "魔法与电的关系"] },
      { lesson: 20, title: "化学肥料",               keyPoints: ["植物生长所需元素", "氮肥、磷肥、钾肥", "化肥的作用", "魔药肥料"] }
    ]
  },
  // ── 第3年·KS3 ────────────────────────────────────
  {
    chapter: 5, yearRange: "3年级", phase: "KS3",
    title: "金属与非金属",
    lessons: [
      { lesson: 21, title: "金属的性质",             keyPoints: ["金属的物理性质", "金属的化学性质", "金属活动性", "合金"] },
      { lesson: 22, title: "金属的提取",             keyPoints: ["矿石与矿物", "还原法提取", "电解提取", "魔法世界的金属"] },
      { lesson: 23, title: "非金属元素",             keyPoints: ["常见非金属", "非金属的性质", "非金属化合物", "碳的同素异形体"] },
      { lesson: 24, title: "碳的化合物",             keyPoints: ["一氧化碳与二氧化碳", "碳酸盐", "有机物入门", "碳循环"] },
      { lesson: 25, title: "氧化还原反应",           keyPoints: ["氧化与还原", "氧化剂与还原剂", "氧化数", "燃烧反应"] }
    ]
  },
  {
    chapter: 6, yearRange: "3年级", phase: "KS3",
    title: "化学与生活",
    lessons: [
      { lesson: 26, title: "空气与呼吸",             keyPoints: ["空气的组成", "氧气与呼吸", "二氧化碳循环", "空气质量"] },
      { lesson: 27, title: "水与生命",               keyPoints: ["水的性质", "水的净化", "硬水与软水", "水资源保护"] },
      { lesson: 28, title: "燃料与能源",             keyPoints: ["化石燃料", "燃烧与污染", "新能源", "魔法能源"] },
      { lesson: 29, title: "材料化学",               keyPoints: ["金属材料", "非金属材料", "复合材料", "魔法材料"] },
      { lesson: 30, title: "化学实验设计",           keyPoints: ["实验安全", "实验设计", "数据处理", "误差分析"] }
    ]
  },
  // ── 第4年·GCSE ────────────────────────────────────
  {
    chapter: 7, yearRange: "4年级", phase: "GCSE",
    title: "化学计量学",
    lessons: [
      { lesson: 31, title: "摩尔计算进阶",           keyPoints: ["摩尔比与方程式", "质量-质量计算", "体积-体积计算", "限量试剂"] },
      { lesson: 32, title: "溶液中的反应",           keyPoints: ["滴定分析", "酸碱滴定", "氧化还原滴定", "魔药配比计算"] },
      { lesson: 33, title: "气体计算",               keyPoints: ["气体摩尔体积", "气体反应计算", "分压定律", "气体收集"] },
      { lesson: 34, title: "百分产率与原子经济性",   keyPoints: ["理论产量与实际产量", "百分产率计算", "原子经济性", "绿色化学"] },
      { lesson: 35, title: "化学平衡初步",           keyPoints: ["可逆反应", "平衡状态", "平衡移动", "勒沙特列原理"] }
    ]
  },
  {
    chapter: 8, yearRange: "4年级", phase: "GCSE",
    title: "有机化学基础",
    lessons: [
      { lesson: 36, title: "烃类化合物",             keyPoints: ["烃的定义", "烷烃与烯烃", "同系物", "命名规则"] },
      { lesson: 37, title: "烃的反应",               keyPoints: ["燃烧反应", "加成反应", "取代反应", "聚合反应"] },
      { lesson: 38, title: "醇与羧酸",               keyPoints: ["醇的性质", "羧酸的性质", "酯化反应", "酯类化合物"] },
      { lesson: 39, title: "生物分子",               keyPoints: ["碳水化合物", "蛋白质", "油脂", "DNA的化学本质"] },
      { lesson: 40, title: "有机合成",               keyPoints: ["合成路线设计", "官能团转换", "保护基", "魔药合成原理"] }
    ]
  },
  // ── 第5年·GCSE ────────────────────────────────────
  {
    chapter: 9, yearRange: "5年级", phase: "GCSE",
    title: "化学能量",
    lessons: [
      { lesson: 41, title: "焓变与反应热",           keyPoints: ["焓的概念", "反应热计算", "吸热与放热反应", "能量守恒"] },
      { lesson: 42, title: "赫斯定律",               keyPoints: ["赫斯定律的应用", "热化学方程式", "反应热的计算", "能量循环"] },
      { lesson: 43, title: "电化学",                 keyPoints: ["原电池原理", "电池的构造", "燃料电池", "电化学腐蚀"] },
      { lesson: 44, title: "电解原理",               keyPoints: ["电解池", "电解产物判断", "法拉第定律", "工业电解"] },
      { lesson: 45, title: "化学电池与魔法",         keyPoints: ["电池发展史", "魔法能量来源", "化学与魔法的能量转换"] }
    ]
  },
  {
    chapter: 10, yearRange: "5年级", phase: "GCSE",
    title: "分析化学",
    lessons: [
      { lesson: 46, title: "定性分析",               keyPoints: ["离子检验", "沉淀反应", "焰色反应", "特征反应"] },
      { lesson: 47, title: "定量分析",               keyPoints: ["重量分析", "容量分析", "仪器分析", "误差与精度"] },
      { lesson: 48, title: "光谱分析",               keyPoints: ["原子光谱", "分子光谱", "光谱仪", "分析应用"] },
      { lesson: 49, title: "色谱分析",               keyPoints: ["纸色谱", "薄层色谱", "气相色谱", "高效液相色谱"] },
      { lesson: 50, title: "GCSE综合复习",           keyPoints: ["核心概念回顾", "计算题练习", "实验设计", "考试技巧"] }
    ]
  },
  // ── 第6年·A-Level ─────────────────────────────────
  {
    chapter: 11, yearRange: "6年级", phase: "A-Level",
    title: "物理化学",
    lessons: [
      { lesson: 51, title: "化学动力学",             keyPoints: ["反应速率理论", "碰撞理论", "过渡态理论", "速率方程"] },
      { lesson: 52, title: "化学平衡",               keyPoints: ["平衡常数K", "平衡表达式", "平衡计算", "影响平衡的因素"] },
      { lesson: 53, title: "酸碱平衡",               keyPoints: ["布朗斯特-劳里理论", "pH计算", "缓冲溶液", "水解"] },
      { lesson: 54, title: "热力学",                 keyPoints: ["熵与焓", "吉布斯自由能", "自发性判断", "热力学定律"] },
      { lesson: 55, title: "相平衡",                 keyPoints: ["相图", "相变化", "克拉佩龙方程", "三相点"] }
    ]
  },
  {
    chapter: 12, yearRange: "6年级", phase: "A-Level",
    title: "无机化学",
    lessons: [
      { lesson: 56, title: "周期表的趋势",           keyPoints: ["原子半径", "电离能", "电子亲和能", "电负性"] },
      { lesson: 57, title: "s区与p区元素",           keyPoints: ["碱金属", "碱土金属", "卤素", "稀有气体"] },
      { lesson: 58, title: "过渡金属",               keyPoints: ["过渡金属的性质", "配位化合物", "配位体", "配合物的结构"] },
      { lesson: 59, title: "氧化还原反应",           keyPoints: ["氧化态", "配平技巧", "电化学序列", "电池电动势"] },
      { lesson: 60, title: "无机合成",               keyPoints: ["合成方法", "表征技术", "单晶培养", "无机材料"] }
    ]
  },
  // ── 第7年·A-Level ─────────────────────────────────
  {
    chapter: 13, yearRange: "7年级", phase: "A-Level",
    title: "有机化学进阶",
    lessons: [
      { lesson: 61, title: "立体化学",               keyPoints: ["手性分子", "对映异构体", "立体选择性", "旋光性"] },
      { lesson: 62, title: "反应机理",               keyPoints: ["亲电加成", "亲核取代", "消除反应", "反应中间体"] },
      { lesson: 63, title: "有机合成设计",           keyPoints: ["逆合成分析", "合成路线优化", "保护与脱保护", "绿色合成"] },
      { lesson: 64, title: "光谱学",                 keyPoints: ["红外光谱", "质谱", "核磁共振", "结构解析"] },
      { lesson: 65, title: "高分子化学",             keyPoints: ["聚合反应", "聚合物结构", "性能与应用", "生物聚合物"] }
    ]
  },
  {
    chapter: 14, yearRange: "7年级", phase: "A-Level",
    title: "综合冲刺",
    lessons: [
      { lesson: 66, title: "化学建模",               keyPoints: ["分子建模", "量子化学入门", "计算化学", "模拟与预测"] },
      { lesson: 67, title: "化学研究方法",           keyPoints: ["实验设计", "数据分析", "科学写作", "研究伦理"] },
      { lesson: 68, title: "化学与环境",             keyPoints: ["环境污染", "治理技术", "绿色化学", "可持续发展"] },
      { lesson: 69, title: "化学与医学",             keyPoints: ["药物化学", "诊断技术", "材料医学", "魔药与药物"] },
      { lesson: 70, title: "A-Level综合模拟",        keyPoints: ["综合题训练", "实验题技巧", "数据分析", "时间管理"] }
    ]
  }
];

export const crossAnchors = [
  {
    concept: "比与比例",
    linkedSubject: "math",
    linkedLesson: "比与比例（第5课）",
    desc: "普里姆罗斯·斯普劳特在化学课讲魔药成分配比时——2份曼德拉草、1份蛇皮——用的正是芬威克在数学第5课教的比的化简方法。两门课在这里完全重叠。"
  },
  {
    concept: "光合作用是化学反应",
    linkedSubject: "biology",
    linkedLesson: "叶与光合作用（第17课）",
    desc: "塔维什描述光合作用「植物吸收CO₂制造有机物」时，普里姆罗斯从化学角度补充：这是一个吸热反应，光能转化为化学能储存在有机物分子中——这是化学能与生命的接口。"
  },
  {
    concept: "溶液浓度与细胞液渗透",
    linkedSubject: "biology",
    linkedLesson: "植物细胞与动物细胞的比较（第9课）",
    desc: "化学第13课讲浓度时，塔维什会指出：细胞液本质上就是一种溶液，浓度决定了细胞从环境中吸水还是失水——化学概念直接解释了生命现象。"
  },
  {
    concept: "碳循环与温室效应",
    linkedSubject: "geography",
    linkedLesson: "人类活动与气候（第56课）",
    desc: "普里姆罗斯讲碳的化合物（CO₂）时，地理课第56课「全球气候变暖」会从宏观尺度呈现化学变化的地理后果——课堂里化学方程式的箭头，指向了整个地球的气候系统。"
  },
  {
    concept: "燃烧反应与热能输出",
    linkedSubject: "physics",
    linkedLesson: "燃料燃烧与热能（第26课）",
    desc: "化学第41课「焓变与反应热」与物理能量转化在此交汇：化学描述燃烧反应的物质变化，物理解释热能如何做功——同一个现象的两种语言。"
  }
];

window.subject_chemistry = {
  subjectMeta,
  teachingStyle,
  syllabus,
  crossAnchors,
  lessonMap,
  questionBank
};
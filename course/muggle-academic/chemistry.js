/**
 * chemistry.js
 * 麻瓜学术系 · 化学
 * 教授：普里姆罗斯·斯普劳特（Primrose Sprout）
 * 课程体系：英国 KS3 → GCSE → A-Level（共 70 课，14 章，横跨 7 年级）
 */

import { lessonMap } from './chemistry-lesson.js';
import { questionBank } from './chemistry-questionBank.js';
import { registerSubjectData } from '../subject-registry.js';

export const subjectMeta = {
  key: "chemistry",
  name: "化学",
  icon: "⚗️",
  professor: "普里姆罗斯·斯普劳特",
  desc: "原子、反应——和魔药学共享秘密的学科。就像配制魔药一样，化学教你理解物质的语言。",
  unlockGrade: 3,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle:    "「答得很好，你自己想到了吗？」",
  errorStyle:     "「没关系，看看哪里卡住了。」",
  officeHours:    "周三下午3-5点，魔药实验室旁边的小办公室",
  signature:      "讲台上永远并排放着两本笔记本——一本写着'化学'，一本写着'魔药'",
  prop:           "褪色的旧围裙，口袋里总装着几小瓶试剂",
  catchphrase:    "等等等等，这个反应——你们魔药课学过没有？！"
};

// 14章 × 5课 = 70课，贯穿1–7年级
export const syllabus = [
  // ── 第1年·KS3 ────────────────────────────────────────────
  {
    chapter: 1, yearRange: "1年级", phase: "KS3",
    title: "原子与物质",
    lessons: [
      { lesson: 1,  title: "原子的发现：道尔顿到卢瑟福",   keyPoints: ["道尔顿的原子论", "汤姆逊的电子发现", "卢瑟福的金箔实验", "现代原子模型的确立"] },
      { lesson: 2,  title: "原子结构：质子、中子、电子",   keyPoints: ["原子核与核外电子", "质子数与元素种类", "中子数与同位素", "原子质量的计算"] },
      { lesson: 3,  title: "元素与化合物：纯净物的分类",   keyPoints: ["元素的定义", "化合物的定义", "纯净物与混合物", "常见纯净物举例"] },
      { lesson: 4,  title: "化学式的读写",                 keyPoints: ["化学式的含义", "下标表示原子个数", "常见化学式", "化学式与魔药配方"] },
      { lesson: 5,  title: "物理变化 vs 化学变化",         keyPoints: ["物理变化的特征", "化学变化的特征", "判断标准", "魔药调制中的变化类型"] }
    ]
  },
  {
    chapter: 2, yearRange: "1年级", phase: "KS3",
    title: "物质分类",
    lessons: [
      { lesson: 6,  title: "金属与非金属的性质对比",       keyPoints: ["金属的物理性质", "非金属的物理性质", "化学性质对比", "生活中的金属与非金属"] },
      { lesson: 7,  title: "混合物的分离方法",             keyPoints: ["过滤：分离固液", "蒸发：分离溶液", "蒸馏：分离液体混合物", "纸层析：分离有色混合物"] },
      { lesson: 8,  title: "酸、碱、盐初步",               keyPoints: ["酸的基本特征", "碱的基本特征", "石蕊指示剂的使用", "酸碱与魔药材料"] },
      { lesson: 9,  title: "溶解度与饱和溶液",             keyPoints: ["溶解的含义", "溶解度的定义", "饱和溶液", "温度对溶解度的影响"] },
      { lesson: 10, title: "密度：物质的指纹",             keyPoints: ["密度的定义", "密度公式 D=m/V", "密度的测量", "密度与沉浮"] }
    ]
  },
  // ── 第2年·KS3 ────────────────────────────────────────────
  {
    chapter: 3, yearRange: "2年级", phase: "KS3",
    title: "元素周期表",
    lessons: [
      { lesson: 11, title: "门捷列夫的预测与验证",         keyPoints: ["历史背景：元素排序的困惑", "门捷列夫的排列原则", "空格预测法", "镓和锗的发现验证"] },
      { lesson: 12, title: "族：同族元素的相似性",         keyPoints: ["族的定义", "第1族碱金属", "第17族卤素", "第18族稀有气体"] },
      { lesson: 13, title: "周期：从左到右的递变",         keyPoints: ["周期的定义", "第三周期的递变规律", "金属性与非金属性的变化", "原子半径的变化趋势"] },
      { lesson: 14, title: "金属活动性与非金属活动性",     keyPoints: ["金属活动性顺序", "置换反应验证活动性", "非金属活动性", "活动性在魔药材料选取中的意义"] },
      { lesson: 15, title: "稀有气体：为何惰性",           keyPoints: ["最外层8电子的稳定性", "稀有气体的性质", "八隅体规则初探", "稀有气体的用途"] }
    ]
  },
  {
    chapter: 4, yearRange: "2年级", phase: "KS3",
    title: "化学反应",
    lessons: [
      { lesson: 16, title: "氧化与还原的概念",             keyPoints: ["氧化：获得氧或失去电子", "还原：失去氧或获得电子", "氧化还原同时发生", "铁生锈与魔药储存"] },
      { lesson: 17, title: "燃烧：化学视角下的火焰",       keyPoints: ["燃烧的三要素", "完全燃烧与不完全燃烧", "燃烧方程式", "飞行扫帚的加速与燃烧类比"] },
      { lesson: 18, title: "影响反应速率的因素",           keyPoints: ["温度对速率的影响", "浓度对速率的影响", "表面积对速率的影响", "魔药熬制的火候控制"] },
      { lesson: 19, title: "催化剂的作用机理",             keyPoints: ["催化剂的定义", "降低活化能", "催化剂不被消耗", "魔药中的催化剂——牛黄与月光草"] },
      { lesson: 20, title: "反应能量变化：放热与吸热",     keyPoints: ["放热反应与ΔH", "吸热反应与ΔH", "能量守恒", "魔药调制的温度控制"] }
    ]
  },
  // ── 第3年·KS3 ────────────────────────────────────────────
  {
    chapter: 5, yearRange: "3年级", phase: "KS3",
    title: "酸碱盐体系",
    lessons: [
      { lesson: 21, title: "pH值与指示剂",                 keyPoints: ["pH尺度0-14", "通用指示剂", "强酸强碱与弱酸弱碱", "魔药酸碱性检测"] },
      { lesson: 22, title: "中和反应与盐的生成",           keyPoints: ["中和反应方程式", "盐和水的生成", "实验：用酚酞追踪中和点", "魔药中的酸碱平衡"] },
      { lesson: 23, title: "盐的制备方法",                 keyPoints: ["酸与金属反应制盐", "酸与碱中和制盐", "酸与碳酸盐反应制盐", "结晶纯化"] },
      { lesson: 24, title: "电解质与非电解质",             keyPoints: ["离子化合物的溶解", "电解质导电的原因", "非电解质不导电", "魔药液体的导电性实验"] },
      { lesson: 25, title: "酸碱在工业中的应用",           keyPoints: ["硫酸的工业用途", "石灰石中和酸性土壤", "碱液在制皂中的应用", "魔药工业的酸碱应用"] }
    ]
  },
  {
    chapter: 6, yearRange: "3年级", phase: "KS3",
    title: "有机化学入门",
    lessons: [
      { lesson: 26, title: "碳的特殊性：成键多样性",       keyPoints: ["碳原子的四键特性", "碳链与碳环", "金刚石与石墨的结构对比", "碳骨架与魔药有机成分"] },
      { lesson: 27, title: "烷烃与烯烃概述",               keyPoints: ["烷烃：饱和烃", "烯烃：含双键", "命名规则", "燃烧与加成反应"] },
      { lesson: 28, title: "石油分馏：混合物的精妙分离",   keyPoints: ["原油的组成", "分馏原理：沸点差异", "各馏分的用途", "魔药蒸馏与石油分馏"] },
      { lesson: 29, title: "聚合反应与塑料",               keyPoints: ["单体与聚合物", "加聚反应", "缩聚反应", "魔法世界的特殊高分子"] },
      { lesson: 30, title: "有机分子与生命：糖、脂、蛋白质", keyPoints: ["碳水化合物", "脂质", "蛋白质", "魔法药草的有效有机成分"] }
    ]
  },
  // ── 第4年·GCSE ────────────────────────────────────────────
  {
    chapter: 7, yearRange: "4年级", phase: "GCSE",
    title: "化学键与结构",
    lessons: [
      { lesson: 31, title: "电子构型与周期律的深层逻辑",   keyPoints: ["电子层的排布规则", "价电子与化学性质", "电子构型书写", "元素性质的预测"] },
      { lesson: 32, title: "离子键：电子的转移",           keyPoints: ["离子键的形成", "离子晶体结构", "离子化合物的性质", "鉴别离子化合物"] },
      { lesson: 33, title: "共价键：电子的共享",           keyPoints: ["共价键的形成", "单键、双键、三键", "共价分子的结构", "极性与非极性共价键"] },
      { lesson: 34, title: "金属键与金属性质",             keyPoints: ["电子海模型", "金属键解释导电性", "金属键解释延展性", "合金的结构"] },
      { lesson: 35, title: "分子间作用力与沸点规律",       keyPoints: ["范德华力", "氢键", "沸点与分子间作用力", "水的异常高沸点"] }
    ]
  },
  {
    chapter: 8, yearRange: "4年级", phase: "GCSE",
    title: "定量化学",
    lessons: [
      { lesson: 36, title: "摩尔：化学的计数单位",         keyPoints: ["摩尔的定义", "阿伏伽德罗常数", "摩尔质量", "摩尔计算与魔药配比"] },
      { lesson: 37, title: "化学计量：配平与计算",         keyPoints: ["化学方程式的配平", "质量计算", "摩尔比的应用", "限量试剂"] },
      { lesson: 38, title: "溶液浓度：摩尔浓度",           keyPoints: ["摩尔浓度c=n/V", "标准溶液的配制", "稀释定律c₁V₁=c₂V₂", "滴定计算"] },
      { lesson: 39, title: "气体体积的计算",               keyPoints: ["标准状况下气体摩尔体积", "理想气体方程PV=nRT", "气体反应的体积计算", "气体收集方法"] },
      { lesson: 40, title: "产率与纯度：实际vs理论",       keyPoints: ["理论产量的计算", "百分产率", "产品纯度", "绿色化学的产率要求"] }
    ]
  },
  // ── 第5年·GCSE ────────────────────────────────────────────
  {
    chapter: 9, yearRange: "5年级", phase: "GCSE",
    title: "化学平衡",
    lessons: [
      { lesson: 41, title: "可逆反应与动态平衡",           keyPoints: ["可逆反应的标志", "动态平衡的含义", "平衡时的宏观特征", "魔药的平衡态"] },
      { lesson: 42, title: "勒夏特列原理",                 keyPoints: ["浓度改变对平衡的影响", "温度改变对平衡的影响", "压强改变对平衡的影响", "催化剂与平衡"] },
      { lesson: 43, title: "反应速率方程",                 keyPoints: ["速率方程v=k[A]^m[B]^n", "反应级数", "速率常数k", "初始速率法测定级数"] },
      { lesson: 44, title: "催化机理：活化能与中间体",     keyPoints: ["活化能的概念", "催化剂降低活化能", "反应中间体", "酶催化与魔药"] },
      { lesson: 45, title: "哈伯法：工业合成氨",           keyPoints: ["哈伯法的反应条件", "温度与压强的权衡", "铁催化剂的作用", "工业化学与魔药工业对比"] }
    ]
  },
  {
    chapter: 10, yearRange: "5年级", phase: "GCSE",
    title: "有机与电化学",
    lessons: [
      { lesson: 46, title: "卤代烃：取代与消除反应",       keyPoints: ["卤代烃的命名", "亲核取代机理", "消除反应", "卤代烃在魔药合成中的应用"] },
      { lesson: 47, title: "醇的性质与制备",               keyPoints: ["醇的官能团与命名", "醇的氧化", "酯化反应", "醇的制备"] },
      { lesson: 48, title: "电极反应：氧化还原的精确描述", keyPoints: ["半反应方程式", "阳极氧化阴极还原", "电池电动势", "标准电极电位"] },
      { lesson: 49, title: "电解：分解与提纯",             keyPoints: ["电解氯化钠溶液", "氯碱工业", "电解精炼铜", "魔药中的电化学提纯"] },
      { lesson: 50, title: "GCSE综合复习",                 keyPoints: ["核心概念总结", "计算方法总结", "实验技能要点", "模拟题演练"] }
    ]
  },
  // ── 第6年·A-Level ─────────────────────────────────────────
  {
    chapter: 11, yearRange: "6年级", phase: "A-Level",
    title: "有机化学",
    lessons: [
      { lesson: 51, title: "官能团体系：系统命名法",       keyPoints: ["IUPAC命名原则", "各类官能团后缀", "取代基命名", "命名与结构的相互转换"] },
      { lesson: 52, title: "亲核取代反应（SN1 vs SN2）",   keyPoints: ["SN1反应机理", "SN2反应机理", "影响机理的因素", "立体化学结果"] },
      { lesson: 53, title: "亲电加成反应",                 keyPoints: ["亲电试剂的特征", "溴加成机理", "马尔科夫尼科夫规则", "与魔药反应活性"] },
      { lesson: 54, title: "立体化学：手性与对映体",       keyPoints: ["手性中心的判断", "R/S构型", "对映体的旋光性", "手性魔药的差异效果"] },
      { lesson: 55, title: "有机合成路线规划",             keyPoints: ["逆合成分析法", "官能团转换策略", "保护基的使用", "魔药活性分子的合成"] }
    ]
  },
  {
    chapter: 12, yearRange: "6年级", phase: "A-Level",
    title: "物理化学",
    lessons: [
      { lesson: 56, title: "热力学：焓、熵、自由能",       keyPoints: ["焓变ΔH", "熵变ΔS", "吉布斯自由能ΔG=ΔH-TΔS", "自发反应的判断"] },
      { lesson: 57, title: "电化学深化：能斯特方程",       keyPoints: ["标准电极电位E°", "原电池电动势", "能斯特方程", "电化学计算"] },
      { lesson: 58, title: "反应动力学：速率方程的推导",   keyPoints: ["初始速率法", "积分速率方程", "半衰期", "反应机理与速率"] },
      { lesson: 59, title: "酸碱平衡：缓冲溶液",           keyPoints: ["酸解离常数Ka和pKa", "亨德森-哈塞尔巴尔赫方程", "缓冲容量", "生物体液的缓冲系统"] },
      { lesson: 60, title: "相图：单组分与双组分体系",     keyPoints: ["纯物质相图", "三相点与临界点", "二元体系相图", "共沸混合物"] }
    ]
  },
  // ── 第7年·A-Level ─────────────────────────────────────────
  {
    chapter: 13, yearRange: "7年级", phase: "A-Level",
    title: "高等化学",
    lessons: [
      { lesson: 61, title: "芳香化学：苯环的反应",         keyPoints: ["苯的离域π体系", "亲电芳香取代机理", "硝化、卤化、傅克反应", "取代基的定位效应"] },
      { lesson: 62, title: "杂环化合物与生物活性分子",     keyPoints: ["含氮杂环：吡啶、吡咯", "含氧杂环：呋喃", "生物碱与魔法植物", "ATP与能量代谢"] },
      { lesson: 63, title: "过渡金属化学：配合物与颜色",   keyPoints: ["d区金属的特征", "配位键与配体", "晶体场理论与颜色", "魔药颜色的化学来源"] },
      { lesson: 64, title: "无机合成与表征",               keyPoints: ["合成方法的选择", "重结晶纯化", "元素分析与红外表征", "合成后的安全评估"] },
      { lesson: 65, title: "分析技术：NMR、质谱、红外",   keyPoints: ["¹H NMR化学位移", "质谱裂解规律", "红外官能团特征峰", "综合解析结构"] }
    ]
  },
  {
    chapter: 14, yearRange: "7年级", phase: "A-Level",
    title: "综合应用",
    lessons: [
      { lesson: 66, title: "绿色化学：原子经济性",         keyPoints: ["绿色化学12原则", "原子经济性计算", "废弃物最小化策略", "可持续魔药工业"] },
      { lesson: 67, title: "工业化学：催化与规模化",       keyPoints: ["哈伯法（回顾）", "接触法制硫酸", "多相催化机理", "规模化生产的权衡"] },
      { lesson: 68, title: "药物化学：作用靶点与设计",     keyPoints: ["受体与配体理论", "构效关系SAR", "手性药物", "魔药配方的现代化学解读"] },
      { lesson: 69, title: "化学与社会：伦理与可持续",     keyPoints: ["气候变化与化学", "可持续化学实践", "化学研究的伦理边界", "魔法界与麻瓜界的化学合作"] },
      { lesson: 70, title: "A-Level综合模拟",               keyPoints: ["有机化学综合", "物理化学综合", "无机与分析综合", "解题策略与时间管理"] }
    ]
  }
];

export const crossAnchors = [
  {
    concept: "摩尔比与魔药配比",
    linkedSubject: "math",
    linkedLesson: "比与比例（第5课）",
    desc: "普里姆罗斯在化学课讲摩尔计算时——2摩尔氢气与1摩尔氧气反应——用的正是芬威克在数学第5课教的比的化简方法。两门课在这里完全重叠。"
  },
  {
    concept: "光合作用是化学反应",
    linkedSubject: "biology",
    linkedLesson: "光合作用（第21课）",
    desc: "生物课描述光合作用时，普里姆罗斯从化学角度补充：这是一个吸热反应，光能转化为化学能储存在葡萄糖分子中——化学能与生命的接口。"
  },
  {
    concept: "碳循环与温室效应",
    linkedSubject: "geography",
    linkedLesson: "人类活动与气候",
    desc: "普里姆罗斯讲碳的化合物（CO₂）时，地理课会从宏观尺度呈现化学变化的地理后果——课堂里化学方程式的箭头，指向了整个地球的气候系统。"
  },
  {
    concept: "燃烧反应与热能输出",
    linkedSubject: "physics",
    linkedLesson: "燃料燃烧与热能",
    desc: "化学第17课「燃烧」与物理能量转化在此交汇：化学描述燃烧反应的物质变化，物理解释热能如何做功——同一个现象的两种语言。"
  },
  {
    concept: "氧化还原与电能",
    linkedSubject: "physics",
    linkedLesson: "电流与电路",
    desc: "化学第48课「电极反应」直接连接物理的电路部分——氧化还原反应驱动了电流，电化学是化学与物理最精密的交叉点。"
  }
];

const subjectData = {
  subjectMeta,
  teachingStyle,
  syllabus,
  crossAnchors,
  lessonMap,
  questionBank
};

registerSubjectData(subjectMeta.key, subjectData);
window.subject_chemistry = subjectData;

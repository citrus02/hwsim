/**
 * history.js
 * 麻瓜学术系 · 历史
 * 教授：赫伯特·宾斯二世（Herbert Binns II）
 * 课程体系：英国 KS3 → GCSE → A-Level（共 70 课，14 章，横跨 7 年级）
 */

import { lessonMap } from './history-lesson.js';
import { questionBank } from './history-questionBank.js';

export const subjectMeta = {
  key: "history",
  name: "历史",
  icon: "📜",
  professor: "赫伯特·宾斯二世",
  desc: "从诺曼征服到当代世界——这是我们共同的历史",
  unlockGrade: 1,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle:    "拍桌子说「太好了」，把你的答案读出来",
  errorStyle:     "「我讲太快了，怪我」，主动要求补讲",
  officeHours:    "随时，带上年表",
  signature:      "麻瓜年表与巫师年表并排展示",
  prop:           "旧报纸原件、泛黄照片",
  catchphrase:    "这不是麻瓜的历史，这是我们共同的历史"
};

export const syllabus = [
  // ── 第1年·KS3 ────────────────────────────────────────────
  {
    chapter: 1, yearRange: "1年级", phase: "KS3",
    title: "中世纪英格兰",
    lessons: [
      { lesson: 1,  title: "诺曼征服1066",       keyPoints: ["黑斯廷斯战役与其影响", "诺曼人与盎格鲁-撒克逊人的融合", "威廉一世的统治", "封建制度的建立"] },
      { lesson: 2,  title: "封建制度",           keyPoints: ["土地、义务与权力的结构", "封君封臣关系", "庄园经济", "中世纪社会的等级"] },
      { lesson: 3,  title: "黑死病",             keyPoints: ["1348-1350年大瘟疫", "疾病如何改写社会秩序", "人口锐减与劳动力变化", "社会结构的松动"] },
      { lesson: 4,  title: "教会的权力",         keyPoints: ["教会与世俗王权的张力", "教皇与国王的冲突", "宗教生活的中心地位", "十字军东征的宗教动机"] },
      { lesson: 5,  title: "大宪章与议会起源",   keyPoints: ["1215年大宪章", "王权的限制", "议会制度的萌芽", "法治观念的发展"] }
    ]
  },
  {
    chapter: 2, yearRange: "1年级", phase: "KS3",
    title: "探索与变革",
    lessons: [
      { lesson: 6,  title: "十字军东征",         keyPoints: ["信仰、政治与贸易", "东征的多次浪潮", "东西方文化交流", "十字军国家的建立与消亡"] },
      { lesson: 7,  title: "文艺复兴",           keyPoints: ["意大利的复兴", "人文主义思想", "艺术与科学的繁荣", "人的发现"] },
      { lesson: 8,  title: "印刷术革命",         keyPoints: ["古腾堡印刷机", "知识的民主化", "书籍的普及", "思想传播的加速"] },
      { lesson: 9,  title: "地理大发现",         keyPoints: ["哥伦布与新大陆", "航海技术的进步", "殖民时代的开启", "全球联系的建立"] },
      { lesson: 10, title: "宗教改革",           keyPoints: ["马丁·路德与九十五条论纲", "新教的诞生", "英国国教的建立", "宗教战争的爆发"] }
    ]
  },
  // ── 第2年·KS3 ────────────────────────────────────────────
  {
    chapter: 3, yearRange: "2年级", phase: "KS3",
    title: "英国革命",
    lessons: [
      { lesson: 11, title: "都铎王朝崛起",       keyPoints: ["玫瑰战争的终结", "亨利七世的统治", "都铎专制的建立", "王朝合法性的巩固"] },
      { lesson: 12, title: "亨利八世",           keyPoints: ["宗教、政治与婚姻", "英国宗教改革", "解散修道院", "王权与教会的决裂"] },
      { lesson: 13, title: "伊丽莎白一世时代",   keyPoints: ["黄金时期", "海上霸权的崛起", "文化繁荣", "宗教和解与冲突"] },
      { lesson: 14, title: "清教徒革命",         keyPoints: ["查理一世与议会的冲突", "内战的爆发", "议会军的胜利", "君主制的废除"] },
      { lesson: 15, title: "克伦威尔与共和国",   keyPoints: ["护国公统治", "革命的局限", "政权的巩固与瓦解", "斯图亚特复辟"] }
    ]
  },
  {
    chapter: 4, yearRange: "2年级", phase: "KS3",
    title: "工业革命",
    lessons: [
      { lesson: 16, title: "蒸汽机",             keyPoints: ["瓦特与机械动力时代", "蒸汽机的改良", "工厂制度的基础", "能源革命"] },
      { lesson: 17, title: "工厂制度",           keyPoints: ["劳动的重组", "生产方式的变革", "工人阶级的形成", "工作条件的恶化"] },
      { lesson: 18, title: "城市化",             keyPoints: ["曼彻斯特的崛起与代价", "人口向城市集中", "城市规划的挑战", "公共卫生问题"] },
      { lesson: 19, title: "工人运动",           keyPoints: ["宪章主义与工会", "工人权利意识的觉醒", "罢工与抗议", "社会改革的开端"] },
      { lesson: 20, title: "维多利亚时代",       keyPoints: ["进步与矛盾", "大英帝国的鼎盛", "社会改革", "文化与科学的繁荣"] }
    ]
  },
  // ── 第3年·KS3 ────────────────────────────────────────────
  {
    chapter: 5, yearRange: "3年级", phase: "KS3",
    title: "帝国主义",
    lessons: [
      { lesson: 21, title: "大英帝国",           keyPoints: ["地图上的粉红色", "帝国的扩张", "殖民地的管理", "帝国的经济利益"] },
      { lesson: 22, title: "殖民地的声音",       keyPoints: ["统治者与被统治者", "殖民统治的双重性", "殖民地精英的崛起", "民族意识的觉醒"] },
      { lesson: 23, title: "奴隶贸易与废除",     keyPoints: ["三角贸易", "奴隶制度的残酷", "废奴运动", "奴隶制的终结"] },
      { lesson: 24, title: "印度",               keyPoints: ["从东印度公司到直辖领地", "殖民统治的演变", "印度民族主义", "独立运动的兴起"] },
      { lesson: 25, title: "非洲瓜分",           keyPoints: ["柏林会议与地图上的直线", "列强的争夺", "殖民统治的建立", "非洲的反抗"] }
    ]
  },
  {
    chapter: 6, yearRange: "3年级", phase: "KS3",
    title: "走向一战",
    lessons: [
      { lesson: 26, title: "民族主义",           keyPoints: ["巴尔干的火药桶", "泛斯拉夫主义", "奥匈帝国的危机", "民族自决的诉求"] },
      { lesson: 27, title: "军备竞赛",           keyPoints: ["社会达尔文主义", "帝国主义竞争", "军事同盟的形成", "战争风险的升级"] },
      { lesson: 28, title: "一战起因",           keyPoints: ["萨拉热窝事件", "同盟网络如何失控", "七月危机", "战争的爆发"] },
      { lesson: 29, title: "战壕战",             keyPoints: ["技术改变战争", "西线战场", "新式武器", "战争的残酷"] },
      { lesson: 30, title: "凡尔赛条约",         keyPoints: ["战后秩序的埋雷", "和约的条款", "德国的怨恨", "二战的伏笔"] }
    ]
  },
  // ── 第4年·GCSE ────────────────────────────────────────────
  {
    chapter: 7, yearRange: "4年级", phase: "GCSE",
    title: "两次世界大战",
    lessons: [
      { lesson: 31, title: "索姆河战役",         keyPoints: ["一战战场实况", "伤亡惨重", "新式武器的使用", "战争的僵局"] },
      { lesson: 32, title: "十月革命",           keyPoints: ["布尔什维克如何夺权", "俄国革命的背景", "列宁与苏维埃", "内战的爆发"] },
      { lesson: 33, title: "纳粹德国崛起",       keyPoints: ["经济危机与魅力政治", "希特勒与纳粹党", "魏玛共和国的崩溃", "独裁统治的建立"] },
      { lesson: 34, title: "第二次世界大战",     keyPoints: ["欧洲与太平洋战场", "战争的全球化", "主要战役", "同盟国的胜利"] },
      { lesson: 35, title: "大屠杀",             keyPoints: ["种族灭绝的历史记录", "纳粹的种族政策", "集中营", "历史记忆与反思"] }
    ]
  },
  {
    chapter: 8, yearRange: "4年级", phase: "GCSE",
    title: "冷战",
    lessons: [
      { lesson: 36, title: "雅尔塔会议",         keyPoints: ["战后世界的划分", "大国的博弈", "欧洲的分裂", "冷战格局的形成"] },
      { lesson: 37, title: "铁幕与马歇尔计划",   keyPoints: ["丘吉尔的铁幕演说", "美国的遏制政策", "马歇尔计划", "欧洲的重建"] },
      { lesson: 38, title: "朝鲜战争",           keyPoints: ["冷战的第一次热战", "战争的起因与进程", "停战协定", "冷战的升级"] },
      { lesson: 39, title: "古巴导弹危机",       keyPoints: ["十三天的边缘", "核战争的危险", "美苏的对峙与妥协", "危机的解决"] },
      { lesson: 40, title: "柏林墙",             keyPoints: ["分裂的象征与终结", "墙的建立与倒塌", "德国统一", "冷战的结束"] }
    ]
  },
  // ── 第5年·GCSE ────────────────────────────────────────────
  {
    chapter: 9, yearRange: "5年级", phase: "GCSE",
    title: "战后世界",
    lessons: [
      { lesson: 41, title: "印度独立",           keyPoints: ["甘地与真纳的分歧", "非暴力不合作", "印巴分治", "独立的代价"] },
      { lesson: 42, title: "非洲独立浪潮",       keyPoints: ["1960年非洲年", "殖民地的独立", "泛非主义", "新国家的挑战"] },
      { lesson: 43, title: "巴以冲突",           keyPoints: ["以色列建国", "冲突的根源", "多次中东战争", "和平进程的挑战"] },
      { lesson: 44, title: "越南战争",           keyPoints: ["超级大国的局限", "战争的起因与进程", "美国的介入与撤军", "战争的影响"] },
      { lesson: 45, title: "民权运动",           keyPoints: ["马丁·路德·金与非暴力抗争", "种族隔离的终结", "民权法案", "社会变革"] }
    ]
  },
  {
    chapter: 10, yearRange: "5年级", phase: "GCSE",
    title: "历史方法论",
    lessons: [
      { lesson: 46, title: "史料分析",           keyPoints: ["一手与二手资料", "史料的种类与价值", "史料的可靠性", "如何使用史料"] },
      { lesson: 47, title: "偏见与视角",         keyPoints: ["谁写了历史", "历史叙述中的偏见", "多元视角", "历史的客观性问题"] },
      { lesson: 48, title: "历史解释",           keyPoints: ["同一事件的不同叙述", "历史解释的多元性", "因果关系的复杂性", "史学争论"] },
      { lesson: 49, title: "口述历史",           keyPoints: ["口述历史的价值与局限", "记忆与历史", "采访技巧", "口述资料的使用"] },
      { lesson: 50, title: "GCSE综合复习",       keyPoints: ["课程内容回顾", "考试技巧", "论文写作", "复习策略"] }
    ]
  },
  // ── 第6年·A-Level ─────────────────────────────────────────
  {
    chapter: 11, yearRange: "6年级", phase: "A-Level",
    title: "政治史方法",
    lessons: [
      { lesson: 51, title: "政治史深度研究",     keyPoints: ["选定时期的政治史", "政治制度的演变", "政治人物的作用", "政治事件的分析"] },
      { lesson: 52, title: "外交史",             keyPoints: ["条约、同盟与误解", "外交政策的制定", "国际关系的演变", "外交档案的解读"] },
      { lesson: 53, title: "档案研究",           keyPoints: ["如何读原始文件", "档案的类型", "档案的价值", "研究方法"] },
      { lesson: 54, title: "历史争论解析",       keyPoints: ["史学家的分歧", "不同的解释框架", "争论的焦点", "学术辩论"] },
      { lesson: 55, title: "一战起因学术争议",   keyPoints: ["费希尔论战", "战争责任问题", "史学观点的演变", "多元解释"] }
    ]
  },
  {
    chapter: 12, yearRange: "6年级", phase: "A-Level",
    title: "专题史",
    lessons: [
      { lesson: 56, title: "媒体与宣传",         keyPoints: ["一战海报到纳粹电影", "宣传的手段", "媒体的作用", "舆论操控"] },
      { lesson: 57, title: "女性史",             keyPoints: ["参政权运动", "战时角色转变", "女性解放", "性别史的视角"] },
      { lesson: 58, title: "科技与战争",         keyPoints: ["从毒气到核弹", "军事技术的发展", "科技对战争的影响", "军事工业"] },
      { lesson: 59, title: "比较革命研究",       keyPoints: ["法国、俄国、中国", "革命的相似与差异", "革命的条件", "革命的后果"] },
      { lesson: 60, title: "历史哲学",           keyPoints: ["过去是可知的吗", "历史的意义", "史学理论", "历史研究的哲学基础"] }
    ]
  },
  // ── 第7年·A-Level ─────────────────────────────────────────
  {
    chapter: 13, yearRange: "7年级", phase: "A-Level",
    title: "史学理论",
    lessons: [
      { lesson: 61, title: "马克思主义史学",     keyPoints: ["生产力与阶级斗争", "经济基础与上层建筑", "历史唯物主义", "阶级分析"] },
      { lesson: 62, title: "后现代史学",         keyPoints: ["叙事的解构", "语言与历史", "客观性的质疑", "后现代视角"] },
      { lesson: 63, title: "性别史与后殖民史学", keyPoints: ["性别视角", "后殖民理论", "边缘群体的历史", "多元史学"] },
      { lesson: 64, title: "计量史学",           keyPoints: ["数字能告诉我们什么", "量化方法", "数据与历史", "计量研究"] },
      { lesson: 65, title: "公共史学",           keyPoints: ["博物馆、纪念碑与历史记忆", "历史的公共呈现", "历史教育", "纪念与遗忘"] }
    ]
  },
  {
    chapter: 14, yearRange: "7年级", phase: "A-Level",
    title: "论文写作",
    lessons: [
      { lesson: 66, title: "论点构建",           keyPoints: ["论题、论证、反驳", "论文结构", "论点的提出与展开", "学术写作"] },
      { lesson: 67, title: "证据筛选",           keyPoints: ["什么值得引用", "证据的可靠性", "引用规范", "资料的使用"] },
      { lesson: 68, title: "历史写作风格",       keyPoints: ["风格与规范", "学术语言", "清晰与精确", "写作技巧"] },
      { lesson: 69, title: "反驳与综述",         keyPoints: ["反驳技巧", "史学综述", "学术对话", "批判性思维"] },
      { lesson: 70, title: "A-Level综合模拟",    keyPoints: ["综合复习", "模拟考试", "答题策略", "时间管理"] }
    ]
  }
];

export const crossAnchors = [
  {
    concept: "蒸汽机与机械能转化",
    linkedSubject: "physics",
    linkedLesson: "机械能及其转化（第10课）",
    desc: "赫伯特讲瓦特改良蒸汽机改变了世界，塞拉菲娜会从物理角度补充它如何工作：热能→蒸汽压强→活塞运动→机械能，历史课看它改变了什么，物理课解释它为何能改变"
  },
  {
    concept: "帝国主义扩张与规则合法性",
    linkedSubject: "civics",
    linkedLesson: "正义理论（第20课）",
    desc: "殖民地的建立往往伴随着「规则的制定者」问题——康斯坦丝会把帝国主义条约和现代国际法并排，追问：谁有权制定规则，规则对谁有约束力"
  },
  {
    concept: "二战战役与欧洲地理",
    linkedSubject: "geography",
    linkedLesson: "政治地理（第57课）",
    desc: "菲利克斯·韦斯莱讲二战时会把地图铺出来：斯大林格勒为什么守，诺曼底为什么选——地形、气候、补给线，历史上的每一次战役决策都嵌在地理条件里"
  }
];

window.subject_history = { subjectMeta, teachingStyle, syllabus, crossAnchors, lessonMap, questionBank };

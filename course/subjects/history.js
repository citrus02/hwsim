/**
 * subjects/history.js
 * 麻瓜研究 · 历史分科
 * 教授：赫伯特·宾斯二世
 */

export const subjectMeta = {
  key: "history",
  name: "历史",
  icon: "📜",
  professor: "赫伯特·宾斯二世",
  desc: "工业革命到两次大战——这是我们共同的历史",
  unlockGrade: 3,
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
  { chapter: 1, title: "工业革命", lessons: [
    { lesson: 1, title: "工业革命的兴起", keyPoints: ["英国工业革命（18世纪下半叶）", "蒸汽机的发明与改良（瓦特）", "工厂制度取代手工作坊", "与巫师世界的交叉：当时的魔法部态度"] },
    { lesson: 2, title: "工业革命的影响", keyPoints: ["社会阶层变化：工业资产阶级与工人阶级", "城市化进程", "环境问题的最初出现", "童工问题与社会改革运动"] },
    { lesson: 3, title: "技术革命与科学进步", keyPoints: ["19世纪科学发现：电磁学、化学、生物学", "铁路网络的建设", "麻瓜科技与巫师魔法的平行发展", "电报与通信革命"] }
  ]},
  { chapter: 2, title: "民族国家与帝国主义", lessons: [
    { lesson: 4, title: "民族主义的兴起", keyPoints: ["民族国家的形成（德意志、意大利统一）", "民族主义与帝国主义的关系", "1848年欧洲革命浪潮", "麻瓜保护法的历史背景"] },
    { lesson: 5, title: "帝国主义时代", keyPoints: ["殖民扩张的动因：经济、军事、文化", "非洲的瓜分", "殖民主义的历史评价", "被殖民地区的抵抗运动"] }
  ]},
  { chapter: 3, title: "两次世界大战", lessons: [
    { lesson: 6, title: "第一次世界大战", keyPoints: ["战争爆发的导火索与根本原因", "同盟国与协约国", "战争的规模与新式武器", "战争对普通人生活的影响"] },
    { lesson: 7, title: "战间期与极权主义", keyPoints: ["凡尔赛条约及其影响", "大萧条与经济危机", "法西斯主义的兴起", "魔法部对麻瓜局势的秘密关注"] },
    { lesson: 8, title: "第二次世界大战", keyPoints: ["战争的全球化", "大屠杀与战争罪行", "战争的转折点与结束", "战后世界秩序的重建"] },
    { lesson: 9, title: "冷战与现代世界", keyPoints: ["冷战的形成：美苏对抗", "核威胁与军备竞赛", "去殖民化浪潮", "联合国的成立与意义"] }
  ]}
];

export const questionBank = [
  { lesson: 1, title: "工业革命的兴起", questions: [
    { type: "choice", difficulty: "basic", text: "工业革命最早发生在：", options: ["A. 法国", "B. 德国", "C. 英国", "D. 美国"], answer: "C", knowledgePoint: "工业革命起源地", analysis: "18世纪下半叶工业革命首先发生在英国，得益于英国的资源、资金、技术和海外市场等条件。" },
    { type: "choice", difficulty: "medium", text: "瓦特改良蒸汽机的最重要意义是：", options: ["A. 发明了热量", "B. 使蒸汽机能广泛应用于各种机器", "C. 节省了煤炭", "D. 取代了人力"], answer: "B", knowledgePoint: "蒸汽机的意义", analysis: "瓦特将蒸汽机改良为双向运动并增加离心节速器，使蒸汽机能驱动各种机器，成为工业革命的动力核心。" },
    { type: "choice", difficulty: "hard", text: "工厂制度取代手工作坊，最根本的原因是：", options: ["A. 工厂更漂亮", "B. 机器生产效率更高、成本更低", "C. 国王强制推行", "D. 工人喜欢工厂"], answer: "B", knowledgePoint: "工厂制度兴起原因", analysis: "工厂制度的扩展是市场竞争的结果——机器大生产效率高、成本低，能在竞争中胜出手工作坊，因此市场自然推动了工厂制度的扩张。" }
  ]},
  { lesson: 6, title: "第一次世界大战", questions: [
    { type: "choice", difficulty: "basic", text: "第一次世界大战的导火索是：", options: ["A. 德国入侵波兰", "B. 萨拉热窝事件", "C. 奥匈帝国宣战", "D. 普法战争"], answer: "B", knowledgePoint: "一战导火索", analysis: "1914年6月，奥匈帝国皇位继承人斐迪南大公在萨拉热窝被刺杀，引发了第一次世界大战。" },
    { type: "choice", difficulty: "medium", text: "第一次世界大战是历史上第一次大规模使用：", options: ["A. 骑兵", "B. 化学武器", "C. 弓箭", "D. 大炮"], answer: "B", knowledgePoint: "一战新式武器", analysis: "一战中氯气、芥子气等化学武器首次大规模使用，造成了巨大的人员伤亡和心理创伤。" },
    { type: "choice", difficulty: "hard", text: "一战中的堑壕战（阵地战）说明：", options: ["A. 士兵都懒得进攻", "B. 防御技术进步超过了进攻技术", "C. 军队缺乏弹药", "D. 双方协议不进攻"], answer: "B", knowledgePoint: "堑壕战原因", analysis: "铁丝网、机关枪等防御性武器的发展使进攻方伤亡惨重，防御优势超过进攻优势，导致战线长期僵持，形成堑壕战。" }
  ]},
  { lesson: 8, title: "第二次世界大战", questions: [
    { type: "choice", difficulty: "basic", text: "第二次世界大战结束的年份是：", options: ["A. 1943年", "B. 1944年", "C. 1945年", "D. 1946年"], answer: "C", knowledgePoint: "二战结束时间", analysis: "1945年5月德国投降，1945年8月日本投降，第二次世界大战结束。" },
    { type: "choice", difficulty: "medium", text: "大屠杀（Holocaust）指二战中纳粹德国对哪个群体的系统性种族灭绝？", options: ["A. 波兰人", "B. 犹太人", "C. 苏联人", "D. 法国人"], answer: "B", knowledgePoint: "大屠杀", analysis: "大屠杀（Holocaust）是纳粹德国对犹太人（及其他群体）进行的系统性种族灭绝，约600万犹太人遇难。" },
    { type: "choice", difficulty: "hard", text: "二战后建立的联合国，其最主要目的是：", options: ["A. 统一世界政府", "B. 维护国际和平与安全", "C. 管理殖民地", "D. 推广英语"], answer: "B", knowledgePoint: "联合国成立目的", analysis: "联合国1945年成立，主要目的是维护国际和平与安全，解决国际争端，促进国际合作，避免战争的再次爆发。" }
  ]}
];

export const crossAnchors = [
  { concept: "工业革命与能量物理", linkedSubject: "physics", linkedLesson: "第9课", desc: "塞拉菲娜·穆迪会从能量守恒角度重新讲蒸汽机——历史课和物理课在这里交汇" },
  { concept: "帝国主义与法律制度", linkedSubject: "civics", linkedLesson: "第5课", desc: "康斯坦丝·沙克博特会从法律角度分析殖民制度——用「不要同情，要理解」来读帝国主义" },
  { concept: "战争地理", linkedSubject: "geography", linkedLesson: "第6课", desc: "菲利克斯·韦斯利会把二战的地图铺出来，从地形角度解释为什么某些战役在那里打" }
];

window.subject_history = { subjectMeta, syllabus, questionBank, crossAnchors, teachingStyle };

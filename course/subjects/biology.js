/**
 * subjects/biology.js
 * 麻瓜研究 · 生物分科
 * 教授：塔维什·麦克拉伦
 */

export const subjectMeta = {
  key: "biology",
  name: "生物",
  icon: "🔬",
  professor: "塔维什·麦克拉伦",
  desc: "细胞、进化、分类——严谨到让人沉默的学科",
  unlockGrade: 3,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle:    "沉默片刻，在作业末尾写一个句号",
  errorStyle:     "「重读题干」，然后等待，不多说",
  officeHours:    "随时，但要预约",
  signature:      "麻瓜显微镜，不用任何魔法",
  prop:           "生物学期刊（旧的，封面皱了）",
  catchphrase:    "……麻瓜真的挺了不起的。"
};

export const syllabus = [
  { chapter: 1, title: "细胞——生命的基本单位", lessons: [
    { lesson: 1, title: "细胞的结构", keyPoints: ["细胞膜、细胞质、细胞核的功能", "植物细胞特有：细胞壁、叶绿体、液泡", "动物细胞无细胞壁", "细胞是生命活动的基本结构和功能单位"] },
    { lesson: 2, title: "细胞的分裂与分化", keyPoints: ["细胞分裂：一个细胞变成两个", "染色体在分裂中的行为", "细胞分化：形态和功能专门化", "分裂与分化的关系"] },
    { lesson: 3, title: "组织、器官与系统", keyPoints: ["组织：功能相似的细胞群", "器官：由不同组织构成", "系统：完成特定功能的器官集合", "人体的八大系统"] }
  ]},
  { chapter: 2, title: "遗传与进化", lessons: [
    { lesson: 4, title: "DNA与遗传信息", keyPoints: ["DNA双螺旋结构（沃森·克里克）", "基因是DNA上有遗传效应的片段", "染色体是DNA的载体", "遗传信息从亲代传向子代"] },
    { lesson: 5, title: "遗传规律", keyPoints: ["显性与隐性性状", "遗传的分离规律（孟德尔）", "基因型与表现型", "人类遗传病的基本类型"] },
    { lesson: 6, title: "生物进化", keyPoints: ["达尔文的自然选择学说", "适者生存、不适者淘汰", "物种的形成与变化", "化石是进化的证据"] }
  ]},
  { chapter: 3, title: "生态与分类", lessons: [
    { lesson: 7, title: "食物链与能量流动", keyPoints: ["生产者（植物）、消费者（动物）、分解者", "食物链和食物网", "能量沿食物链递减（约10%~20%）", "物质循环与能量流动"] },
    { lesson: 8, title: "生物分类系统", keyPoints: ["界门纲目科属种（从大到小）", "分类依据：形态、结构、生理、进化关系", "麻瓜分类系统比魔法界更严谨", "物种命名：双名法"] },
    { lesson: 9, title: "神经系统与感官", keyPoints: ["神经元是神经系统的基本单位", "大脑、小脑、脑干的功能", "反射弧：感受器→神经→效应器", "条件反射与非条件反射"] }
  ]}
];

export const questionBank = [
  { lesson: 1, title: "细胞的结构", questions: [
    { type: "choice", difficulty: "basic", text: "植物细胞特有而动物细胞没有的结构是：", options: ["A. 细胞膜", "B. 细胞核", "C. 细胞壁", "D. 线粒体"], answer: "C", knowledgePoint: "植物细胞特有结构", analysis: "植物细胞特有细胞壁、叶绿体和液泡，动物细胞没有这三种结构。" },
    { type: "choice", difficulty: "medium", text: "叶绿体的功能是：", options: ["A. 控制遗传", "B. 进行光合作用", "C. 呼吸作用", "D. 分解有机物"], answer: "B", knowledgePoint: "叶绿体功能", analysis: "叶绿体是植物进行光合作用的场所，将光能转化为化学能储存在有机物中。" },
    { type: "choice", difficulty: "hard", text: "细胞核是生命活动的控制中心，依据是：", options: ["A. 细胞核最大", "B. 去核的细胞不能长期存活", "C. 细胞核含有DNA", "D. B和C"], answer: "D", knowledgePoint: "细胞核功能", analysis: "细胞核含有DNA（遗传信息），控制蛋白质合成和细胞活动；去核细胞无法维持正常代谢，最终死亡。两个证据共同支持细胞核是控制中心。" }
  ]},
  { lesson: 4, title: "DNA与遗传信息", questions: [
    { type: "choice", difficulty: "basic", text: "DNA的结构是：", options: ["A. 单链螺旋", "B. 双链螺旋", "C. 三链螺旋", "D. 平行直链"], answer: "B", knowledgePoint: "DNA结构", analysis: "DNA是双链螺旋结构，由沃森和克里克于1953年揭示。" },
    { type: "choice", difficulty: "medium", text: "基因与DNA的关系是：", options: ["A. 基因就是DNA", "B. 基因是DNA的一段", "C. DNA是基因的一段", "D. 两者没有关系"], answer: "B", knowledgePoint: "基因与DNA关系", analysis: "基因是DNA分子上有遗传效应的特定片段，一个DNA分子上有很多个基因。" },
    { type: "choice", difficulty: "hard", text: "体细胞中染色体成对存在，生殖细胞（精子/卵子）中染色体：", options: ["A. 也是成对的", "B. 是体细胞的一半（单条）", "C. 是体细胞的两倍", "D. 数量不确定"], answer: "B", knowledgePoint: "染色体数目", analysis: "减数分裂形成生殖细胞时，染色体数目减半，保证受精后合子染色体数目恢复正常。" }
  ]},
  { lesson: 6, title: "生物进化", questions: [
    { type: "choice", difficulty: "basic", text: "达尔文进化论的核心是：", options: ["A. 用进废退", "B. 自然选择", "C. 人工选择", "D. 突变"], answer: "B", knowledgePoint: "自然选择学说", analysis: "达尔文自然选择学说：变异是进化的原材料，自然选择（适者生存）决定进化方向。" },
    { type: "choice", difficulty: "medium", text: "以下哪项是生物进化的直接证据？", options: ["A. 比较解剖", "B. 化石", "C. 胚胎相似性", "D. DNA比较"], answer: "B", knowledgePoint: "进化证据", analysis: "化石是生物进化最直接的证据，记录了生物在地质历史中的变化过程。" },
    { type: "choice", difficulty: "hard", text: "长颈鹿的颈长，按达尔文的解释是：", options: ["A. 为了够到高处食物，颈越伸越长，遗传给后代", "B. 颈长的个体在竞争中存活更多，后代也颈长", "C. 上帝创造时就是长颈", "D. 吃了某种食物导致颈变长"], answer: "B", knowledgePoint: "自然选择解释性状", analysis: "达尔文：长颈鹿群体中存在颈长短的变异（自然存在），颈长的个体能吃到更多食物，存活繁殖更多，颈长性状遗传给后代，这是自然选择的结果。选A是拉马克的「用进废退」观点，已被否定。" }
  ]},
  { lesson: 7, title: "食物链与能量流动", questions: [
    { type: "choice", difficulty: "basic", text: "食物链的起点（生产者）是：", options: ["A. 细菌", "B. 植物", "C. 草食动物", "D. 肉食动物"], answer: "B", knowledgePoint: "食物链起点", analysis: "植物是生产者，能将无机物（CO₂和H₂O）在光合作用中转化为有机物，是食物链的起点。" },
    { type: "choice", difficulty: "medium", text: "能量沿食物链传递时：", options: ["A. 完全传递，不损失", "B. 逐级递增", "C. 逐级递减", "D. 传递效率固定为50%"], answer: "C", knowledgePoint: "能量流动规律", analysis: "能量沿食物链流动时逐级递减，每个营养级只能利用约10%~20%的能量，其余以热能散失。" },
    { type: "choice", difficulty: "hard", text: "同等面积的草地，养牛还是直接为人提供食物，哪种方式能养活更多人？", options: ["A. 养牛", "B. 直接为人提供食物", "C. 一样多", "D. 取决于牛的品种"], answer: "B", knowledgePoint: "能量流动与人类食物选择", analysis: "直接食用植物（减少营养级）可利用更多能量。若草地→牛→人（两级），人只获得约1%~4%的能量；草地→人（一级），人可获得约10%~20%的能量，能养活更多人。" }
  ]},
  { lesson: 9, title: "神经系统与感官", questions: [
    { type: "choice", difficulty: "basic", text: "神经系统的基本结构和功能单位是：", options: ["A. 大脑", "B. 脊髓", "C. 神经元", "D. 突触"], answer: "C", knowledgePoint: "神经元", analysis: "神经元（神经细胞）是神经系统的基本结构和功能单位，能接受和传导神经冲动。" },
    { type: "choice", difficulty: "medium", text: "维持身体平衡协调运动的是：", options: ["A. 大脑皮层", "B. 小脑", "C. 脑干", "D. 脊髓"], answer: "B", knowledgePoint: "小脑功能", analysis: "小脑负责维持身体平衡和协调骨骼肌的运动，小脑损伤会导致动作不协调。" },
    { type: "choice", difficulty: "hard", text: "巴甫洛夫的铃声实验（狗听到铃声分泌唾液）属于：", options: ["A. 非条件反射", "B. 条件反射", "C. 本能行为", "D. 遗传决定的行为"], answer: "B", knowledgePoint: "条件反射", analysis: "条件反射是在非条件反射基础上，通过学习和经验建立的暂时神经联系。铃声本不能引起唾液分泌，通过训练建立联系后产生反射，这是条件反射。" }
  ]}
];

export const crossAnchors = [
  { concept: "生物分类与魔法生物", linkedSubject: "care_of_creatures_crossref", linkedLesson: "—", desc: "塔维什·麦克拉伦会提到：麻瓜对普通动物的分类比巫师对魔法生物的分类更系统严谨" },
  { concept: "溶液浓度与细胞液", linkedSubject: "chemistry", linkedLesson: "第9课", desc: "化学课讲溶液浓度时，生物课里细胞液的渗透压就是同一个概念在另一个领域的应用" },
  { concept: "DNA双螺旋的数学美", linkedSubject: "math", linkedLesson: "第1课", desc: "芬威克在讲到螺旋结构时曾说：麻瓜发现了宇宙最精妙的代码，而那个代码同时符合斐波那契数列" }
];

window.subject_biology = { subjectMeta, syllabus, questionBank, crossAnchors, teachingStyle };

/**
 * subjects/civics.js
 * 麻瓜研究 · 道德与法治分科
 * 教授：康斯坦丝·沙克博特
 */

export const subjectMeta = {
  key: "civics",
  name: "道德与法治",
  icon: "⚖️",
  professor: "康斯坦丝·沙克博特",
  desc: "制度、法律、权力——不要同情，要理解",
  unlockGrade: 3,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle:    "停顿，说「论证成立」，然后走开",
  errorStyle:     "「不要同情，要理解」，让重读材料",
  officeHours:    "周一、周四下午",
  signature:      "魔法部条例与麻瓜法律并排分析",
  prop:           "法律文本、判决书（麻瓜原版）",
  catchphrase:    "不要同情，要理解。同情是居高临下，理解才是平等。"
};

export const syllabus = [
  { chapter: 1, title: "民主制度", lessons: [
    { lesson: 1, title: "民主的概念与历史", keyPoints: ["民主的希腊语起源：人民的权力", "古希腊雅典民主与现代民主的差异", "民主的三个核心：多数决定、少数保护、基本权利", "英国《大宪章》的历史意义"] },
    { lesson: 2, title: "选举制度", keyPoints: ["普选权的历史发展", "不同选举制度：多数制、比例代表制", "投票率与民主质量", "麻瓜民主与魔法部任命制的比较"] },
    { lesson: 3, title: "三权分立", keyPoints: ["立法、行政、司法三权分立", "孟德斯鸠的分权理论", "权力制衡的机制", "三权分立的实践案例"] }
  ]},
  { chapter: 2, title: "法律体系", lessons: [
    { lesson: 4, title: "法律的基本概念", keyPoints: ["法律的定义与功能", "成文法与不成文法", "英美法系与大陆法系", "法律面前人人平等原则"] },
    { lesson: 5, title: "司法体系", keyPoints: ["法院的层级结构", "陪审团制度的历史与现实", "无罪推定原则", "上诉制度与司法独立"] },
    { lesson: 6, title: "人权与公民自由", keyPoints: ["基本人权的内容", "言论自由的法律边界", "隐私权与公共安全的平衡", "麻瓜人权宣言的历史"] }
  ]},
  { chapter: 3, title: "权力与制度", lessons: [
    { lesson: 7, title: "政府的形式", keyPoints: ["君主制、共和制、联邦制等形式", "总统制与议会制的区别", "政党制度与政治参与", "极权主义的历史案例分析"] },
    { lesson: 8, title: "国际法与国际组织", keyPoints: ["国际法的概念与约束力", "联合国的结构与功能", "国际条约的法律效力", "国际刑事法院案例"] },
    { lesson: 9, title: "经济制度与社会公平", keyPoints: ["资本主义、社会主义的基本区别", "税收制度的社会功能", "社会保障体系的原理", "经济不平等与制度设计"] }
  ]}
];

export const questionBank = [
  { lesson: 1, title: "民主的概念与历史", questions: [
    { type: "choice", difficulty: "basic", text: "「民主」这个词的希腊文含义是：", options: ["A. 法律统治", "B. 人民的权力", "C. 贵族政治", "D. 神圣权威"], answer: "B", knowledgePoint: "民主词源", analysis: "民主（Democracy）来自希腊语 demos（人民）+ kratos（权力），字面意思是人民的权力。" },
    { type: "choice", difficulty: "medium", text: "英国《大宪章》（1215年）的重要意义是：", options: ["A. 建立了第一个民主国家", "B. 限制了王权，保护了贵族权利", "C. 废除了君主制", "D. 建立了议会"], answer: "B", knowledgePoint: "大宪章意义", analysis: "《大宪章》限制了英国国王的权力，保护了贵族的权利，是限制王权的重要文件，被视为宪政的起点之一。" },
    { type: "choice", difficulty: "hard", text: "现代民主与古希腊雅典民主最根本的区别是：", options: ["A. 古希腊没有投票", "B. 现代民主包含少数权利保护", "C. 古希腊更公平", "D. 现代民主不需要选举"], answer: "B", knowledgePoint: "民主形式对比", analysis: "古雅典民主是直接民主，但仅限于自由男性公民；现代民主除多数决定外，还有对少数群体的保护机制和基本人权保障，范围更广，保护更全面。" }
  ]},
  { lesson: 3, title: "三权分立", questions: [
    { type: "choice", difficulty: "basic", text: "三权分立中的「三权」是：", options: ["A. 军权、财权、警权", "B. 立法权、行政权、司法权", "C. 中央、地方、个人", "D. 国王、贵族、平民"], answer: "B", knowledgePoint: "三权分立内容", analysis: "三权分立将国家权力分为立法权（制定法律）、行政权（执行法律）、司法权（解释和执行法律），相互制衡。" },
    { type: "choice", difficulty: "medium", text: "「权力制衡」机制的目的是：", options: ["A. 让政府运作更慢", "B. 防止权力过度集中于一处", "C. 增加官员数量", "D. 减少国家预算"], answer: "B", knowledgePoint: "权力制衡目的", analysis: "权力制衡的核心目的是防止权力集中导致专制或腐败，让各权力机构相互监督、相互制约。" },
    { type: "choice", difficulty: "hard", text: "法院宣布政府某项政策违宪，这体现了：", options: ["A. 法院凌驾于政府之上", "B. 司法对行政的制衡", "C. 议会控制法院", "D. 政府无权制定政策"], answer: "B", knowledgePoint: "司法审查", analysis: "司法审查是三权分立的重要机制，法院可以判断立法或行政行为是否违反宪法，这是司法权对立法权和行政权的制衡。" }
  ]},
  { lesson: 5, title: "司法体系", questions: [
    { type: "choice", difficulty: "basic", text: "「无罪推定」原则的含义是：", options: ["A. 所有嫌疑人都是无辜的", "B. 在被证明有罪前，推定为无罪", "C. 不需要证据就能定罪", "D. 犯罪者不用受罚"], answer: "B", knowledgePoint: "无罪推定", analysis: "无罪推定是现代法律的基本原则：被告在经由合法程序证明有罪之前，应被视为无罪，举证责任在检察方。" },
    { type: "choice", difficulty: "medium", text: "陪审团制度的主要目的是：", options: ["A. 节省法官时间", "B. 让普通公民参与司法，防止司法权滥用", "C. 让案件审理更复杂", "D. 增加法庭收入"], answer: "B", knowledgePoint: "陪审团制度", analysis: "陪审团由普通公民组成，由他们而不仅由法官决定事实问题，旨在引入社会判断，防止职业法官的偏见或权力滥用。" },
    { type: "choice", difficulty: "hard", text: "上诉制度的存在是为了：", options: ["A. 让案件永远不结束", "B. 纠正可能的司法错误，保障当事人权利", "C. 增加法院收入", "D. 减少法官工作"], answer: "B", knowledgePoint: "上诉制度", analysis: "上诉制度允许当事人对下级法院的裁决向上级法院申请复审，提供纠错机制，保障当事人获得公正审判的权利。" }
  ]}
];

export const crossAnchors = [
  { concept: "法律历史沿革", linkedSubject: "history", linkedLesson: "第1课", desc: "赫伯特讲《大宪章》时会从历史角度讲，康斯坦丝从法律角度讲——同一文件，两种解读，互相补充" },
  { concept: "经济制度与地理", linkedSubject: "geography", linkedLesson: "第8课", desc: "菲利克斯会从地理角度讲资源分布如何影响经济制度——地理决定了某些制度为何在那里出现" },
  { concept: "论证方法", linkedSubject: "literature", linkedLesson: "第5课", desc: "伊莱莎会讲文学中的议论——康斯坦丝会说：文学议论和法律论证用的是同一套逻辑框架" }
];

window.subject_civics = { subjectMeta, syllabus, questionBank, crossAnchors, teachingStyle };
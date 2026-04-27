/**
 * subjects/literature.js
 * 麻瓜研究 · 语文与文学分科
 * 教授：伊莱莎·洛夫古德
 */

export const subjectMeta = {
  key: "literature",
  name: "语文与文学",
  icon: "📖",
  professor: "伊莱莎·洛夫古德",
  desc: "诗歌、小说、文字——没有魔力的魔法",
  unlockGrade: 3,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle:    "「这是你能看见的」，安静而肯定",
  errorStyle:     "「你再听一遍」，从不说错，引导重新感知",
  officeHours:    "随时，但喜欢在窗边聊",
  signature:      "朗读原文，闭眼，然后问「你们听见什么了？」",
  prop:           "旧版麻瓜诗集、各种年代的文学杂志",
  catchphrase:    "文字是没有魔力的魔法"
};

export const syllabus = [
  { chapter: 1, title: "文学的基础", lessons: [
    { lesson: 1, title: "文学的种类与特征", keyPoints: ["诗歌、散文、小说、戏剧的基本区别", "文学与其他写作的区别", "文学的社会功能：记录、反映、批评", "为什么麻瓜用文字保存记忆"] },
    { lesson: 2, title: "叙事与视角", keyPoints: ["第一人称、第三人称视角的效果", "全知视角与有限视角", "不可靠叙述者", "视角选择如何影响读者感受"] },
    { lesson: 3, title: "意象与象征", keyPoints: ["意象：具体的感官形象", "象征：意象的引申含义", "常见文学象征（四季、颜色、动物）", "如何在文本中识别意象与象征"] }
  ]},
  { chapter: 2, title: "诗歌", lessons: [
    { lesson: 4, title: "诗歌的语言", keyPoints: ["意象的密度：诗歌语言的经济性", "节奏与韵律", "诗歌中的留白", "中文与英文诗歌的不同传统"] },
    { lesson: 5, title: "诗歌的阅读方式", keyPoints: ["朗读与默读的不同效果", "反复阅读与逐层理解", "个人经验与文本的互动", "没有唯一正确的解读"] },
    { lesson: 6, title: "神话与文学", keyPoints: ["神话作为文学的起点", "世界各地的神话传统", "神话原型在现代文学中的延续", "魔法世界的神话传统与麻瓜的交叉"] }
  ]},
  { chapter: 3, title: "小说与戏剧", lessons: [
    { lesson: 7, title: "小说的结构", keyPoints: ["情节：起承转合", "人物塑造的方法：直接与间接", "环境描写的功能", "主题的提炼"] },
    { lesson: 8, title: "莎士比亚与戏剧传统", keyPoints: ["莎士比亚的历史地位与时代背景", "悲剧与喜剧的基本区别", "戏剧语言的特点", "《哈姆雷特》与《麦克白》主题简析"] },
    { lesson: 9, title: "文学批评与文化", keyPoints: ["不同的文学批评视角", "文学如何反映历史与社会", "文化差异与文学理解", "麻瓜文学中的巫师形象"] }
  ]}
];

export const questionBank = [
  { lesson: 1, title: "文学的种类与特征", questions: [
    { type: "choice", difficulty: "basic", text: "以下哪种不属于文学的基本体裁？", options: ["A. 诗歌", "B. 教科书", "C. 小说", "D. 戏剧"], answer: "B", knowledgePoint: "文学体裁", analysis: "文学的基本体裁包括诗歌、散文、小说和戏剧。教科书是说明性文字，不属于文学体裁。" },
    { type: "choice", difficulty: "medium", text: "文学区别于其他写作的最重要特征是：", options: ["A. 字数更多", "B. 有审美功能，追求艺术价值", "C. 必须有故事", "D. 必须押韵"], answer: "B", knowledgePoint: "文学特征", analysis: "文学追求语言的艺术性和审美价值，这是文学区别于新闻报道、说明文、技术文档等其他写作的核心特征。" },
    { type: "choice", difficulty: "hard", text: "麻瓜用文字而非魔法保存历史记忆，这最说明：", options: ["A. 麻瓜没有魔法", "B. 文字是一种不依赖魔力的信息传递方式，具有其独特价值", "C. 麻瓜更聪明", "D. 文字比魔法更可靠"], answer: "B", knowledgePoint: "文字的文化价值", analysis: "文字作为符号系统，能够跨越时间和空间传递信息，不需要魔力，任何学会阅读的人都能接受，这是其独特价值——这正是伊莱莎所说的「没有魔力的魔法」。" }
  ]},
  { lesson: 3, title: "意象与象征", questions: [
    { type: "choice", difficulty: "basic", text: "文学中「玫瑰」常被用作什么的象征？", options: ["A. 愤怒", "B. 爱情与美", "C. 死亡", "D. 智慧"], answer: "B", knowledgePoint: "常见文学象征", analysis: "玫瑰在西方文学传统中常象征爱情、美丽，有时也象征短暂（花会凋零）。这是西方文化语境中的常见象征，不同文化背景下象征可能不同。" },
    { type: "choice", difficulty: "medium", text: "意象与象征的关系是：", options: ["A. 意象就是象征", "B. 象征是意象的引申含义", "C. 两者没有关系", "D. 象征比意象更具体"], answer: "B", knowledgePoint: "意象与象征关系", analysis: "意象是具体的感官形象（玫瑰、冬天、黑色），象征是这个意象在文化语境中被赋予的抽象含义（玫瑰→爱情）。象征是意象的引申和延伸。" },
    { type: "choice", difficulty: "hard", text: "同一个意象（如「冬天」）在不同文化和文本中可能象征：", options: ["A. 只有死亡和结束", "B. 只有寒冷", "C. 多种不同含义，取决于文化和上下文", "D. 没有象征意义"], answer: "C", knowledgePoint: "象征的多义性", analysis: "象征不是固定的，取决于文化背景和具体文本语境。「冬天」可以象征死亡、困难、净化、等待，也可以象征平静或某种文化的节日庆典。阅读时要回到具体语境。" }
  ]},
  { lesson: 8, title: "莎士比亚与戏剧传统", questions: [
    { type: "choice", difficulty: "basic", text: "莎士比亚大约生活在：", options: ["A. 10世纪", "B. 14世纪", "C. 16-17世纪", "D. 18世纪"], answer: "C", knowledgePoint: "莎士比亚时代", analysis: "威廉·莎士比亚（1564-1616）生活在文艺复兴时期的英国伊丽莎白时代。" },
    { type: "choice", difficulty: "medium", text: "悲剧与喜剧最根本的区别是：", options: ["A. 悲剧更长", "B. 结局的性质：悲剧以主角死亡或毁灭结束，喜剧以和解或婚姻结束", "C. 喜剧一定有笑话", "D. 悲剧一定有鬼魂"], answer: "B", knowledgePoint: "悲剧与喜剧区别", analysis: "古典定义：悲剧以主角的死亡或毁灭结束，主题涉及命运、人性和道德困境；喜剧以和解、婚姻或社会秩序恢复结束。这是亚里士多德的基本定义。" },
    { type: "choice", difficulty: "hard", text: "《哈姆雷特》中「生存还是毁灭，这是一个问题」，这句话探讨的主题是：", options: ["A. 哈姆雷特是否该自杀", "B. 面对不公正，是忍受还是反抗——生命的意义与行动的困境", "C. 哈姆雷特不知道怎么活下去", "D. 哲学问题，和故事无关"], answer: "B", knowledgePoint: "哈姆雷特主题", analysis: "这句独白是哈姆雷特面对父亲被谋杀、复仇的道德困境时的思考——是忍受命运的不公，还是采取行动（可能带来更大的混乱）？这是关于人类行动、道德和生命意义的根本追问。" }
  ]}
];

export const crossAnchors = [
  { concept: "文学语言与语言学", linkedSubject: "english", linkedLesson: "第1课", desc: "米兰达·珀西瓦尔会从语言学角度分析文学语言的词源和结构——伊莱莎从感知进入，米兰达从词根进入，殊途同归" },
  { concept: "文学中的历史", linkedSubject: "history", linkedLesson: "第7课", desc: "赫伯特讲战间期时，伊莚莎会提到海明威和卡缪——文学记录了那个时代的精神创伤" },
  { concept: "神话原型", linkedSubject: "magic_lore_crossref", linkedLesson: "—", desc: "伊莱莎指出：巫师世界的许多传说和麻瓜的神话使用了完全相同的原型——英雄之旅、牺牲与重生" }
];

window.subject_literature = { subjectMeta, syllabus, questionBank, crossAnchors, teachingStyle };

/**
 * subjects/literature.js
 * 麻瓜研究 · 英国文学分科
 * 教授：伊莱莎·洛夫古德
 */

export const subjectMeta = {
  key: "literature",
  name: "英国文学",
  icon: "📜",
  professor: "伊莱莎·洛夫古德",
  desc: "从莎士比亚到狄更斯——不列颠文学的璀璨星空",
  unlockGrade: 3,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle:    "「这是你能看见的」，安静而肯定",
  errorStyle:     "「你再听一遍」，从不说错，引导重新感知",
  officeHours:    "随时，但喜欢在窗边聊",
  signature:      "朗读莎士比亚原文，闭眼，然后问「你们听见什么了？」",
  prop:           "旧版莎翁全集、济慈诗集、维多利亚时代文学杂志",
  catchphrase:    "文字是没有魔力的魔法，但在英国，它创造了最伟大的文学"
};

export const syllabus = [
  { chapter: 1, title: "英国文学的起源", lessons: [
    { lesson: 1, title: "古英语文学与贝奥武夫", keyPoints: ["盎格鲁-撒克逊时期的文学", "《贝奥武夫》：英语文学的起点", "英雄史诗的特征", "古英语与现代英语的联系"] },
    { lesson: 2, title: "中世纪文学与乔叟", keyPoints: ["《坎特伯雷故事集》的结构", "乔叟对英语文学的贡献", "中世纪叙事风格", "朝圣主题与故事框架"] },
    { lesson: 3, title: "文艺复兴与人文主义", keyPoints: ["文艺复兴时期的文学特点", "人文主义思想的影响", "从手抄本到印刷术的转变", "英国文学黄金时代的开端"] }
  ]},
  { chapter: 2, title: "莎士比亚与伊丽莎白时代", lessons: [
    { lesson: 4, title: "莎士比亚的生平与时代", keyPoints: ["伊丽莎白时代的剧院文化", "环球剧院的特点", "莎士比亚的创作生涯", "十四行诗与戏剧的双重成就"] },
    { lesson: 5, title: "莎士比亚悲剧", keyPoints: ["《哈姆雷特》：存在主义的先驱", "《麦克白》：野心与命运", "《李尔王》：权力与疯狂", "悲剧英雄的共同特征"] },
    { lesson: 6, title: "莎士比亚喜剧", keyPoints: ["《仲夏夜之梦》的魔幻元素", "《皆大欢喜》的森林意象", "喜剧的团圆结局传统", "语言游戏与双关语"] }
  ]},
  { chapter: 3, title: "英国文学经典", lessons: [
    { lesson: 7, title: "浪漫主义诗歌", keyPoints: ["华兹华斯与自然诗", "柯勒律治的超验想象", "拜伦的英雄主义", "济慈的美与永恒"] },
    { lesson: 8, title: "维多利亚小说", keyPoints: ["狄更斯的社会批判", "奥斯汀的社会风俗", "勃朗特姐妹的激情与哥特", "工业时代的文学反映"] },
    { lesson: 9, title: "现代主义与之后", keyPoints: ["乔伊斯的意识流", "伍尔夫的女性视角", "二战后的英国文学", "魔幻现实主义的影响"] }
  ]}
];

export const questionBank = [
  { lesson: 1, title: "古英语文学与贝奥武夫", questions: [
    { type: "choice", difficulty: "basic", text: "《贝奥武夫》是哪国的史诗作品？", options: ["A. 法国", "B. 英国", "C. 德国", "D. 意大利"], answer: "B", knowledgePoint: "贝奥武夫", analysis: "《贝奥武夫》是英国文学中最古老的史诗，创作于盎格鲁-撒克逊时期，是英语文学的起点。" },
    { type: "choice", difficulty: "medium", text: "《贝奥武夫》讲述的是关于什么主题的故事？", options: ["A. 爱情与背叛", "B. 英雄与怪物的战斗", "C. 宫廷阴谋", "D. 海上冒险"], answer: "B", knowledgePoint: "史诗主题", analysis: "《贝奥武夫》讲述英雄贝奥武夫与怪物格伦德尔、格伦德尔的母亲以及恶龙战斗的故事，体现了盎格鲁-撒克逊人的英雄价值观。" },
    { type: "choice", difficulty: "hard", text: "古英语与现代英语的关系是：", options: ["A. 完全不同的语言", "B. 古英语是现代英语的祖先，经过千年演变", "C. 现代英语是从古英语直接翻译过来的", "D. 两者没有关系"], answer: "B", knowledgePoint: "英语语言演变", analysis: "现代英语是从古英语经过诺曼征服、中古英语时期逐渐演变而来，虽然词汇和语法变化很大，但核心词汇和语法结构仍有传承。" }
  ]},
  { lesson: 4, title: "莎士比亚的生平与时代", questions: [
    { type: "choice", difficulty: "basic", text: "莎士比亚生活在哪个时期？", options: ["A. 中世纪", "B. 伊丽莎白时代", "C. 维多利亚时代", "D. 现代"], answer: "B", knowledgePoint: "莎士比亚时代", analysis: "威廉·莎士比亚（1564-1616）生活在英国伊丽莎白一世和詹姆士一世时期，这是英国文学的黄金时代。" },
    { type: "choice", difficulty: "medium", text: "莎士比亚的戏剧最初在哪里演出？", options: ["A. 伦敦塔", "B. 环球剧院", "C. 白金汉宫", "D. 牛津大学"], answer: "B", knowledgePoint: "环球剧院", analysis: "莎士比亚的大部分戏剧在伦敦的环球剧院演出，这座剧院建于1599年，是伊丽莎白时代最著名的公共剧院。" },
    { type: "choice", difficulty: "hard", text: "莎士比亚除了戏剧还创作了什么？", options: ["A. 历史著作", "B. 十四行诗", "C. 哲学论文", "D. 以上都不是"], answer: "B", knowledgePoint: "莎士比亚诗歌", analysis: "莎士比亚创作了154首十四行诗，这些诗歌探讨爱情、时间、美等主题，与他的戏剧一样具有极高的文学价值。" }
  ]},
  { lesson: 8, title: "维多利亚小说", questions: [
    { type: "choice", difficulty: "basic", text: "以下哪位是维多利亚时代最著名的小说家？", options: ["A. 海明威", "B. 狄更斯", "C. 托尔斯泰", "D. 卡夫卡"], answer: "B", knowledgePoint: "维多利亚小说", analysis: "查尔斯·狄更斯是维多利亚时代最具代表性的小说家，作品包括《雾都孤儿》《大卫·科波菲尔》《双城记》等。" },
    { type: "choice", difficulty: "medium", text: "简·奥斯汀的小说主要关注什么主题？", options: ["A. 战争与和平", "B. 社会风俗与婚姻", "C. 科幻冒险", "D. 历史传奇"], answer: "B", knowledgePoint: "奥斯汀作品主题", analysis: "简·奥斯汀的小说如《傲慢与偏见》《理智与情感》主要描绘英国乡绅家庭的生活，探讨婚姻、阶级和社会礼仪。" },
    { type: "choice", difficulty: "hard", text: "《呼啸山庄》的作者是：", options: ["A. 夏洛蒂·勃朗特", "B. 艾米莉·勃朗特", "C. 安妮·勃朗特", "D. 简·奥斯汀"], answer: "B", knowledgePoint: "勃朗特姐妹", analysis: "《呼啸山庄》是艾米莉·勃朗特唯一的小说，以其强烈的情感和哥特式风格著称。她的姐姐夏洛蒂·勃朗特写了《简·爱》。" }
  ]}
];

export const crossAnchors = [
  { concept: "英国文学语言", linkedSubject: "english", linkedLesson: "第1课", desc: "米兰达·珀西瓦尔会从语言学角度分析莎士比亚语言的词源和结构——伊莱莎从感知进入，米兰达从词根进入，在英国文学中相遇" },
  { concept: "英国文学与历史", linkedSubject: "history", linkedLesson: "第7课", desc: "赫伯特讲维多利亚时代时，伊莱莎会提到狄更斯——文学记录了大英帝国鼎盛时期的社会现实" },
  { concept: "神话原型", linkedSubject: "magic_lore_crossref", linkedLesson: "—", desc: "伊莱莎指出：巫师世界的许多传说和不列颠神话使用了完全相同的原型——贝奥武夫的英雄之旅在霍格沃茨继续" }
];

window.subject_literature = { subjectMeta, syllabus, questionBank, crossAnchors, teachingStyle };

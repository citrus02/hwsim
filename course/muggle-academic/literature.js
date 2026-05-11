/**
 * subjects/literature.js
 * 麻瓜学术 · 英国文学分科
 * 教授：伊莱莎·洛夫古德
 */

export const subjectMeta = {
  key: "literature",
  name: "语文与文学",
  icon: "📖",
  professor: "伊莱莎·洛夫古德",
  desc: "从贝奥武夫到狄更斯——不列颠文字编织的无声咒语",
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
    { lesson: 1, title: "古英语与贝奥武夫", keyPoints: ["盎格鲁-撒克逊时期的文学印记", "《贝奥武夫》：英语文学的第一页史诗", "英雄史诗的力量与荣耀", "古英语与现代英语的血脉传承"] },
    { lesson: 2, title: "中世纪叙事与乔叟", keyPoints: ["《坎特伯雷故事集》的朝圣之旅", "乔叟笔下的众生相", "中世纪的故事编织艺术", "英语作为文学语言的觉醒"] },
    { lesson: 3, title: "文艺复兴的曙光", keyPoints: ["印刷术带来的文字革命", "人文主义的种子萌芽", "从手抄本到大众阅读", "英国文学黄金时代的前夜"] }
  ]},
  { chapter: 2, title: "莎士比亚的魔法", lessons: [
    { lesson: 4, title: "伊丽莎白时代的剧院", keyPoints: ["环球剧院的木质舞台", "莎士比亚的创作生涯", "十四行诗的韵律魔法", "戏剧与诗歌的双重绽放"] },
    { lesson: 5, title: "悲剧的力量", keyPoints: ["《哈姆雷特》的存在之问", "《麦克白》的野心诅咒", "《李尔王》的人性悲歌", "悲剧英雄的陨落之美"] },
    { lesson: 6, title: "喜剧的智慧", keyPoints: ["《仲夏夜之梦》的奇幻森林", "《皆大欢喜》的人生寓言", "喜剧的团圆魔力", "语言游戏与双关艺术"] }
  ]},
  { chapter: 3, title: "浪漫主义诗歌", lessons: [
    { lesson: 7, title: "自然的歌唱者", keyPoints: ["华兹华斯的湖畔诗篇", "柯勒律治的超验想象", "自然与心灵的对话", "浪漫主义的情感觉醒"] },
    { lesson: 8, title: "激情与永恒", keyPoints: ["拜伦的英雄主义", "雪莱的理想之歌", "济慈的美之追寻", "诗歌作为灵魂的镜子"] },
    { lesson: 9, title: "诗歌的形式", keyPoints: ["十四行诗的韵律", "抒情诗的节奏", "意象与隐喻的魔力", "文字的音乐性"] }
  ]},
  { chapter: 4, title: "维多利亚小说", lessons: [
    { lesson: 10, title: "狄更斯的伦敦", keyPoints: ["《雾都孤儿》的社会画卷", "狄更斯的人道主义光芒", "维多利亚时代的众生百态", "小说作为社会的镜子"] },
    { lesson: 11, title: "奥斯汀的优雅", keyPoints: ["《傲慢与偏见》的智慧", "社会风俗的细腻描绘", "女性视角的独特光芒", "对话中的人物塑造"] },
    { lesson: 12, title: "勃朗特姐妹", keyPoints: ["《简·爱》的独立宣言", "《呼啸山庄》的野性激情", "哥特式的神秘氛围", "女性作家的声音"] }
  ]},
  { chapter: 5, title: "现代文学探索", lessons: [
    { lesson: 13, title: "意识流的觉醒", keyPoints: ["乔伊斯的内心独白", "伍尔夫的女性意识", "时间与记忆的交织", "现代主义的文学实验"] },
    { lesson: 14, title: "战争与创伤", keyPoints: ["一战后的文学回响", "存在主义的思考", "荒诞与异化", "文学中的时代印记"] },
    { lesson: 15, title: "多元的声音", keyPoints: ["殖民与后殖民文学", "不同文化的交融", "文学的边界拓展", "文字的包容力量"] }
  ]},
  { chapter: 6, title: "期中复习与考试", lessons: [
    { lesson: 16, title: "诗歌专题复习", keyPoints: ["诗歌鉴赏技巧", "韵律与意象分析", "诗人风格比较", "背诵篇目回顾"] },
    { lesson: 17, title: "小说专题复习", keyPoints: ["人物分析方法", "情节结构梳理", "主题思想提炼", "经典片段精读"] },
    { lesson: 18, title: "戏剧专题复习", keyPoints: ["莎士比亚作品赏析", "戏剧冲突分析", "人物对话解读", "舞台语言理解"] },
    { lesson: 19, title: "综合练习", keyPoints: ["阅读理解训练", "文学常识巩固", "答题技巧指导", "时间管理练习"] },
    { lesson: 20, title: "期中考试", keyPoints: ["考试范围：第1-5章", "题型：选择、填空、阅读理解、赏析", "考试时间：120分钟", "评分标准"] }
  ]},
  { chapter: 7, title: "文学作品精读", lessons: [
    { lesson: 21, title: "《哈姆雷特》精读", keyPoints: ["生存还是毁灭的追问", "人物关系与动机", "象征与隐喻", "经典独白赏析"] },
    { lesson: 22, title: "《傲慢与偏见》精读", keyPoints: ["伊丽莎白与达西的成长", "婚姻与金钱的探讨", "社会阶级的反思", "幽默与讽刺"] },
    { lesson: 23, title: "《呼啸山庄》精读", keyPoints: ["爱情与复仇的主题", "荒野与文明的对立", "时间与记忆的交织", "叙事结构分析"] },
    { lesson: 24, title: "诗歌名篇精读", keyPoints: ["华兹华斯《我独自漫游像一朵云》", "济慈《秋颂》", "雪莱《西风颂》", "拜伦《唐璜》选段"] }
  ]},
  { chapter: 8, title: "文学创作入门", lessons: [
    { lesson: 25, title: "诗歌创作", keyPoints: ["意象的捕捉", "韵律的运用", "情感的表达", "自由诗与格律诗"] },
    { lesson: 26, title: "记叙文写作", keyPoints: ["人物塑造方法", "情节构建技巧", "细节描写要点", "叙事视角选择"] },
    { lesson: 27, title: "散文写作", keyPoints: ["主题提炼", "结构安排", "语言风格", "情感真挚"] },
    { lesson: 28, title: "文学评论", keyPoints: ["文本分析方法", "观点表达技巧", "论据支撑", "批判性思维"] }
  ]},
  { chapter: 9, title: "比较文学视角", lessons: [
    { lesson: 29, title: "不列颠文学与魔法世界", keyPoints: ["神话原型的共通性", "英雄之旅的模式", "魔法与现实的交织", "文学中的奇幻元素"] },
    { lesson: 30, title: "不同时代的回响", keyPoints: ["古典与现代的对话", "传统与创新的融合", "文学经典的当代解读", "跨时代的共鸣"] },
    { lesson: 31, title: "文化背景探索", keyPoints: ["历史事件与文学创作", "社会变革的文学反映", "文化思潮的影响", "地域特色的体现"] }
  ]},
  { chapter: 10, title: "第二学期期中复习与考试", lessons: [
    { lesson: 32, title: "精读篇目回顾", keyPoints: ["重点作品梳理", "人物与主题分析", "写作手法总结", "经典段落记忆"] },
    { lesson: 33, title: "写作技巧复习", keyPoints: ["各类文体写作要点", "表达能力提升", "修改与润色", "创意表达"] },
    { lesson: 34, title: "比较文学专题", keyPoints: ["跨文本比较", "文化差异分析", "文学影响研究", "综合分析能力"] },
    { lesson: 35, title: "期中综合练习", keyPoints: ["模拟考试训练", "答题策略优化", "易错点总结", "时间分配练习"] },
    { lesson: 36, title: "第二学期期中考试", keyPoints: ["考试范围：第6-9章", "题型：选择、填空、阅读理解、写作", "考试时间：120分钟", "评分标准"] }
  ]},
  { chapter: 11, title: "专题拓展", lessons: [
    { lesson: 37, title: "文学与艺术", keyPoints: ["文学与绘画的对话", "诗歌与音乐的交融", "戏剧与舞台艺术", "跨艺术形式的表达"] },
    { lesson: 38, title: "女性文学传统", keyPoints: ["女性作家的声音", "女性主题的演变", "性别视角的文学", "当代女性文学"] },
    { lesson: 39, title: "文学与哲学", keyPoints: ["存在主义文学", "哲学思想的文学表达", "理性与感性的交织", "文学中的智慧"] },
    { lesson: 40, title: "阅读策略与方法", keyPoints: ["精读与泛读", "笔记技巧", "批判性阅读", "深度理解方法"] }
  ]},
  { chapter: 12, title: "总复习", lessons: [
    { lesson: 41, title: "全学年知识框架", keyPoints: ["文学发展脉络", "重要作家作品", "文学流派演变", "核心知识点梳理"] },
    { lesson: 42, title: "诗歌模块总复习", keyPoints: ["诗歌类型与特点", "著名诗人与作品", "诗歌鉴赏方法", "背诵篇目巩固"] },
    { lesson: 43, title: "小说模块总复习", keyPoints: ["小说要素分析", "经典小说解读", "写作手法总结", "人物分析技巧"] },
    { lesson: 44, title: "戏剧模块总复习", keyPoints: ["莎士比亚作品", "戏剧结构分析", "舞台语言理解", "戏剧冲突解读"] },
    { lesson: 45, title: "写作模块总复习", keyPoints: ["各类文体写作", "表达技巧提升", "文学创作实践", "文学评论写作"] }
  ]},
  { chapter: 13, title: "期末复习与考试", lessons: [
    { lesson: 46, title: "综合复习（诗歌·小说·戏剧）", keyPoints: ["文学发展脉络梳理", "重要作家作品回顾", "鉴赏手法综合训练", "写作能力巩固"] },
    { lesson: 47, title: "模拟练习与答疑", keyPoints: ["全真模拟训练", "疑难问题解答", "答题技巧与时间分配", "常见错误总结"] },
    { lesson: 48, title: "期末考试", keyPoints: ["考试范围：全学年内容", "题型：选择、阅读理解、赏析、写作", "考试时间：120分钟", "评分标准"] }
  ]}
];

export const crossAnchors = [
  {
    concept: "莎士比亚语言与词根结构",
    linkedSubject: "latin",
    linkedLesson: "词根与词汇构建（第1课）",
    desc: "伊莱莎从文学意境进入莎士比亚，米兰达从语言结构进入——两门课在同一个词里：「Expectation」（期待）来自拉丁语 exspectare，米兰达会把词根列在黑板上，伊莱莎把这个词放在哈姆雷特的独白里"
  },
  {
    concept: "狄更斯与19世纪工业社会",
    linkedSubject: "history",
    linkedLesson: "技术革命与科学进步（第3课）",
    desc: "赫伯特讲19世纪工业化带来的社会分化时，伊莱莎会提到狄更斯：《雾都孤儿》《双城记》不是偶然产生的，它们是工业革命社会现实的文学记录——历史数据和文学叙事，是同一个时代的两种语言"
  },
  {
    concept: "文学中的社会批判与规则正义",
    linkedSubject: "civics",
    linkedLesson: "社会生活离不开规则（第38课）",
    desc: "狄更斯笔下的童工制度、奥威尔《1984》的极权主义——伊莱莎讲这些文学作品时，康斯坦丝会从规则合法性角度追问：什么样的规则是正义的，谁来决定规则的边界"
  },
  {
    concept: "英国湖区自然诗与地理",
    linkedSubject: "geography",
    linkedLesson: "欧洲西部（第34课）",
    desc: "华兹华斯的湖区诗歌、勃朗特姐妹的约克郡荒原——伊莱莎朗读这些时，菲利克斯会把英国的地形图展开：温带海洋性气候、丘陵地形、多雾多雨，正是塑造了这些文学意象的地理条件"
  }
];

window.subject_literature = { subjectMeta, syllabus, crossAnchors, teachingStyle };
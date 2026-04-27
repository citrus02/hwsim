/**
 * subjects/english.js
 * 麻瓜研究 · 英语分科
 * 教授：米兰达·珀西瓦尔
 */

export const subjectMeta = {
  key: "english",
  name: "英语",
  icon: "🔤",
  professor: "米兰达·珀西瓦尔",
  desc: "词根、语法、词源——语言是最古老的魔法",
  unlockGrade: 3,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle:    "停顿一秒，「不错。」然后继续（这已经是最高评价）",
  errorStyle:     "只重复一次正确版本，不解释，等你自己发现",
  officeHours:    "预约制，不接受临时来访",
  signature:      "把咒语词源写在黑板上，不带任何表情",
  prop:           "细头钢笔，极其精确的批注",
  catchphrase:    "语言是最古老的魔法，巫师只是把它说得更大声一点。"
};

export const syllabus = [
  { chapter: 1, title: "语言基础", lessons: [
    { lesson: 1, title: "词根与词汇构建", keyPoints: [
      "词根是单词的意义核心（如 dict= 说，port= 带）",
      "前缀改变方向或程度（un-, re-, pre-）",
      "后缀改变词性（-tion, -ness, -ly）",
      "通过词根推断未知单词含义的方法"
    ]},
    { lesson: 2, title: "语法结构基础", keyPoints: [
      "句子的基本成分：主语、谓语、宾语",
      "简单句、并列句、复合句",
      "修饰成分：形容词、副词、介词短语",
      "句子成分的识别与分析"
    ]},
    { lesson: 3, title: "时态系统", keyPoints: [
      "现在时（一般、进行、完成）",
      "过去时（一般、进行、完成）",
      "将来时的表达方式",
      "时态选择与语义的关系"
    ]}
  ]},
  { chapter: 2, title: "语音与发音", lessons: [
    { lesson: 4, title: "英语语音系统", keyPoints: [
      "元音与辅音的分类",
      "国际音标（IPA）基础",
      "重音规则与音节划分",
      "发音与拼写的关系（不规则变化）"
    ]},
    { lesson: 5, title: "语调与节奏", keyPoints: [
      "句子重音与信息焦点",
      "升调（疑问）与降调（陈述）",
      "连读与省音现象",
      "节奏在交流中的作用"
    ]}
  ]},
  { chapter: 3, title: "词源与文化", lessons: [
    { lesson: 6, title: "拉丁语词源", keyPoints: [
      "大量英语词汇来自拉丁语（法律、医学、科学领域）",
      "魔法咒语的拉丁词根分析（Lumos, Accio, Expecto）",
      "拉丁前缀与后缀",
      "学习词源对理解词义的帮助"
    ]},
    { lesson: 7, title: "古英语与日耳曼词根", keyPoints: [
      "英语的历史层次：古英语、中古英语、现代英语",
      "日常词汇多为日耳曼语源（eat, sleep, home）",
      "诺曼征服后法语词汇的大量涌入",
      "为什么英语有这么多近义词（猪pork/pig，牛beef/cow）"
    ]},
    { lesson: 8, title: "英语的全球化", keyPoints: [
      "英语成为全球通用语的历史原因",
      "世界英语的变体：英式、美式、澳式等",
      "英语对其他语言的借词与影响",
      "语言霸权与文化多样性"
    ]},
    { lesson: 9, title: "文体与写作风格", keyPoints: [
      "正式文体与非正式文体的区别",
      "学术写作的基本规范",
      "说服性写作的逻辑结构",
      "精确用词与冗余表达"
    ]}
  ]}
];

export const questionBank = [
  { lesson: 1, title: "词根与词汇构建", questions: [
    { type: "choice", difficulty: "basic", text: "词根 「dict」 的含义是：", options: ["A. 写", "B. 说、声明", "C. 跑", "D. 看"], answer: "B", knowledgePoint: "词根dict", analysis: "dict 来自拉丁语 dicere（说），如 dictate（口述）、predict（预言）、contradict（反驳）。" },
    { type: "choice", difficulty: "medium", text: "单词 「unbreakable」 的词根是：", options: ["A. un-", "B. break", "C. -able", "D. -un-break"], answer: "B", knowledgePoint: "词根识别", analysis: "unbreakable = un（否定前缀）+ break（词根，打破）+ able（能够的后缀），词根是 break。" },
    { type: "choice", difficulty: "hard", text: "通过词根推断，「benevolent」最可能的意思是：（bene=好，vol=意愿）", options: ["A. 恶意的", "B. 善意的、仁慈的", "C. 暴力的", "D. 自愿的"], answer: "B", knowledgePoint: "词根推断词义", analysis: "bene（好）+ vol（意愿）+ -ent（形容词后缀）= 有好的意愿 = 善意的、仁慈的。如 benevolent dictator（仁慈的独裁者）。" }
  ]},
  { lesson: 2, title: "语法结构基础", questions: [
    { type: "choice", difficulty: "basic", text: "句子「The cat sleeps.」中，谓语是：", options: ["A. The", "B. cat", "C. sleeps", "D. 整个句子"], answer: "C", knowledgePoint: "谓语识别", analysis: "谓语是句子中描述主语动作或状态的动词。「sleeps」是动词，描述「cat」的动作，是谓语。" },
    { type: "choice", difficulty: "medium", text: "以下哪个句子是复合句（含从句）？", options: ["A. She sings and dances.", "B. She sings because she is happy.", "C. She is a singer.", "D. She sings well."], answer: "B", knowledgePoint: "句子类型", analysis: "复合句含有一个主句和至少一个从句，由连词连接。B中「because she is happy」是原因状语从句，所以B是复合句。A是并列句。" },
    { type: "choice", difficulty: "hard", text: "「The book that she recommended was excellent.」中，「that she recommended」是：", options: ["A. 主语", "B. 定语从句，修饰 book", "C. 宾语从句", "D. 状语从句"], answer: "B", knowledgePoint: "定语从句", analysis: "that she recommended 是关系从句，修饰名词 book（哪本书？她推荐的那本），是定语从句（关系从句）。" }
  ]},
  { lesson: 6, title: "拉丁语词源", questions: [
    { type: "choice", difficulty: "basic", text: "咒语「Lumos」（产生光）来自哪个拉丁词根？", options: ["A. lum-（光）", "B. lun-（月亮）", "C. lux-（豪华）", "D. lab-（工作）"], answer: "A", knowledgePoint: "咒语词源分析", analysis: "Lumos 来自拉丁语 lumen/lux（光），同源词有 illuminate（照亮）、luminous（发光的）、translucent（半透明的）。" },
    { type: "choice", difficulty: "medium", text: "咒语「Accio」（召唤术）最接近哪个拉丁词的含义？", options: ["A. accipere（接受、取得）", "B. accusare（指控）", "C. acerbus（苦涩的）", "D. acetum（醋）"], answer: "A", knowledgePoint: "咒语拉丁词源", analysis: "Accio 来自拉丁语 accipere（接受、取得），表示让物品来到自己手中，即召唤。accipere 同源词有 accept（接受）。" },
    { type: "choice", difficulty: "hard", text: "拉丁词根「port」出现在以下哪些单词中？（port=携带、运）", options: ["A. import, export, transport", "B. port（港口）, Portugal, portal", "C. report只有这一个", "D. portable, report, import, export（所有选项A的词加portable）"], answer: "D", knowledgePoint: "port词根应用", analysis: "port（携带）→ portable（可携带的）、import（输入）、export（输出）、transport（运输）、report（汇报，re-=回 + port=带回来）。A不完整，D最全面。" }
  ]},
  { lesson: 9, title: "文体与写作风格", questions: [
    { type: "choice", difficulty: "basic", text: "下列哪种表达属于正式文体？", options: ["A. gonna（要去）", "B. I'm going to", "C. I am going to", "D. wanna go"], answer: "C", knowledgePoint: "正式与非正式文体", analysis: "正式文体避免缩写和口语化表达，「I am going to」是完整形式，属正式文体。gonna/wanna是口语，I'm是缩写，在正式写作中应展开。" },
    { type: "choice", difficulty: "medium", text: "说服性写作的核心结构是：", options: ["A. 随意表达感情", "B. 提出观点—论据支撑—反驳对立观点—结论", "C. 只讲事实，不给结论", "D. 越长越好"], answer: "B", knowledgePoint: "说服性写作结构", analysis: "有效的说服性写作需要：清晰的论点、支撑证据、回应可能的反驳（显示全面思考），以及有力的结论。这是康斯坦丝·沙克博特和米兰达·珀西瓦尔都会认可的。" },
    { type: "choice", difficulty: "hard", text: "「The experiment yielded positive results.」改为主动语态是：", options: ["A. Positive results yielded the experiment.", "B. The results were positive in the experiment.", "C. We obtained positive results from the experiment.", "D. 无法改为主动语态"], answer: "C", knowledgePoint: "主动与被动语态转换", analysis: "被动语态「was yielded by」→ 主动语态需要添加施事者（we/the researchers），「We obtained positive results」是最自然的主动语态表达。" }
  ]}
];

export const crossAnchors = [
  { concept: "拉丁词源与咒语", linkedSubject: "magic_spells_crossref", linkedLesson: "—", desc: "米兰达·珀西瓦尔会把魔咒学的咒语词源写在黑板上——Expecto（期待）Patronum（守护者），七年的咒语从这里开始有意义" },
  { concept: "英语与文学语言", linkedSubject: "literature", linkedLesson: "第3课", desc: "伊莱莎从感知进入文学，米兰达从词根进入语言，两门课在莎士比亚的语言里相遇" },
  { concept: "语言的全球化与历史", linkedSubject: "history", linkedLesson: "第5课", desc: "英语的全球化和帝国主义扩张密切相关——赫伯特从政治角度讲，米兰达从语言角度讲，是同一段历史" }
];

window.subject_english = { subjectMeta, syllabus, questionBank, crossAnchors, teachingStyle };

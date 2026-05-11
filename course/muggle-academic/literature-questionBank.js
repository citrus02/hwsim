// literature-questionBank.js
// 霍格沃茨英国文学课程 - 随堂测验题库（完整版）
// 教授：伊莱莎·洛夫古德
// 每课3题：basic（+2分）、medium（0分，全对得E）、hard（-1分）

export const questionBank = [
  // ==================== 第1章 英国文学的起源（第1-3课） ====================
  {
    lesson: 1, title: "古英语与贝奥武夫",
    questions: [
      { type: "choice", difficulty: "basic", text: "《贝奥武夫》是哪国的史诗作品？", options: ["A. 法国", "B. 英国", "C. 德国", "D. 意大利"], answer: "B", knowledgePoint: "贝奥武夫", analysis: "《贝奥武夫》是英国文学中最古老的史诗，创作于盎格鲁-撒克逊时期，是英语文学的起点。" },
      { type: "choice", difficulty: "medium", text: "《贝奥武夫》讲述的是关于什么主题的故事？", options: ["A. 爱情与背叛", "B. 英雄与怪物的战斗", "C. 宫廷阴谋", "D. 海上冒险"], answer: "B", knowledgePoint: "史诗主题", analysis: "《贝奥武夫》讲述英雄贝奥武夫与怪物格伦德尔、格伦德尔的母亲以及恶龙战斗的故事，体现了盎格鲁-撒克逊人的英雄价值观。" },
      { type: "choice", difficulty: "hard", text: "古英语与现代英语的关系是：", options: ["A. 完全不同的语言", "B. 古英语是现代英语的祖先，经过千年演变", "C. 现代英语是从古英语直接翻译过来的", "D. 两者没有关系"], answer: "B", knowledgePoint: "英语语言演变", analysis: "现代英语是从古英语经过诺曼征服、中古英语时期逐渐演变而来，虽然词汇和语法变化很大，但核心词汇和语法结构仍有传承。" }
    ]
  },
  {
    lesson: 2, title: "中世纪叙事与乔叟",
    questions: [
      { type: "choice", difficulty: "basic", text: "《坎特伯雷故事集》的作者是：", options: ["A. 莎士比亚", "B. 乔叟", "C. 弥尔顿", "D. 斯宾塞"], answer: "B", knowledgePoint: "乔叟", analysis: "杰弗里·乔叟是英国中世纪最伟大的诗人，《坎特伯雷故事集》是他的代表作。" },
      { type: "choice", difficulty: "medium", text: "《坎特伯雷故事集》采用什么叙事框架？", options: ["A. 书信体", "B. 朝圣者讲故事", "C. 编年史", "D. 自传体"], answer: "B", knowledgePoint: "叙事框架", analysis: "《坎特伯雷故事集》讲述一群朝圣者前往坎特伯雷大教堂途中轮流讲故事的故事，展现了中世纪英国社会的众生相。" },
      { type: "choice", difficulty: "hard", text: "乔叟对英国文学的最大贡献是：", options: ["A. 引入了十四行诗", "B. 确立了英语作为文学语言", "C. 开创了小说体裁", "D. 创造了新的诗歌韵律"], answer: "B", knowledgePoint: "乔叟的贡献", analysis: "乔叟用伦敦方言写作，使英语摆脱了拉丁语和法语的统治，确立了英语作为文学语言的地位。" }
    ]
  },
  {
    lesson: 3, title: "文艺复兴的曙光",
    questions: [
      { type: "choice", difficulty: "basic", text: "印刷术的传入对英国文学产生了什么影响？", options: ["A. 使书籍变得昂贵", "B. 促进了知识的传播", "C. 减少了读者数量", "D. 限制了文学创作"], answer: "B", knowledgePoint: "印刷术的影响", analysis: "印刷术使书籍得以大量复制，降低了成本，促进了知识的传播和阅读的普及。" },
      { type: "choice", difficulty: "medium", text: "文艺复兴时期的核心思想是什么？", options: ["A. 宗教虔诚", "B. 人文主义", "C. 禁欲主义", "D. 科学主义"], answer: "B", knowledgePoint: "人文主义", analysis: "人文主义强调人的价值和尊严，关注现实生活，是文艺复兴时期的核心思想。" },
      { type: "choice", difficulty: "hard", text: "从手抄本到印刷书籍的转变意味着：", options: ["A. 文学变得更加精英化", "B. 阅读从少数人扩展到更广泛的人群", "C. 文学作品的质量下降", "D. 作家不再需要手写创作"], answer: "B", knowledgePoint: "阅读大众化", analysis: "印刷术使书籍不再是贵族的奢侈品，普通民众也能接触到文学作品，阅读群体大大扩展。" }
    ]
  },

  // ==================== 第2章 莎士比亚的魔法（第4-6课） ====================
  {
    lesson: 4, title: "伊丽莎白时代的剧院",
    questions: [
      { type: "choice", difficulty: "basic", text: "莎士比亚生活在哪个时期？", options: ["A. 中世纪", "B. 伊丽莎白时代", "C. 维多利亚时代", "D. 现代"], answer: "B", knowledgePoint: "莎士比亚时代", analysis: "威廉·莎士比亚（1564-1616）生活在英国伊丽莎白一世和詹姆士一世时期，这是英国文学的黄金时代。" },
      { type: "choice", difficulty: "medium", text: "莎士比亚的戏剧最初在哪里演出？", options: ["A. 伦敦塔", "B. 环球剧院", "C. 白金汉宫", "D. 牛津大学"], answer: "B", knowledgePoint: "环球剧院", analysis: "莎士比亚的大部分戏剧在伦敦的环球剧院演出，这座剧院建于1599年，是伊丽莎白时代最著名的公共剧院。" },
      { type: "choice", difficulty: "hard", text: "莎士比亚除了戏剧还创作了什么？", options: ["A. 历史著作", "B. 十四行诗", "C. 哲学论文", "D. 以上都不是"], answer: "B", knowledgePoint: "莎士比亚诗歌", analysis: "莎士比亚创作了154首十四行诗，这些诗歌探讨爱情、时间、美等主题，与他的戏剧一样具有极高的文学价值。" }
    ]
  },
  {
    lesson: 5, title: "悲剧的力量",
    questions: [
      { type: "choice", difficulty: "basic", text: "《哈姆雷特》中最著名的台词是：", options: ["A. 生存还是毁灭", "B. To be or not to be", "C. 这是一个问题", "D. 以上都是"], answer: "D", knowledgePoint: "哈姆雷特独白", analysis: "\"To be or not to be\"是《哈姆雷特》中最著名的独白开头，中文译为\"生存还是毁灭\"，表达了主人公对生死的思考。" },
      { type: "choice", difficulty: "medium", text: "《麦克白》的核心主题是什么？", options: ["A. 爱情与忠诚", "B. 野心与罪恶", "C. 友谊与背叛", "D. 战争与和平"], answer: "B", knowledgePoint: "麦克白主题", analysis: "《麦克白》讲述苏格兰将军麦克白因野心驱使，谋杀国王篡夺王位，最终走向毁灭的故事，探讨了野心与罪恶的主题。" },
      { type: "choice", difficulty: "hard", text: "莎士比亚悲剧的共同特点是：", options: ["A. 皆大欢喜的结局", "B. 英雄因性格缺陷而毁灭", "C. 轻松幽默的基调", "D. 完美无缺的主角"], answer: "B", knowledgePoint: "悲剧特点", analysis: "莎士比亚悲剧的主角往往是高贵的英雄，但因性格缺陷或命运捉弄而走向悲剧结局，体现了古希腊悲剧的传统。" }
    ]
  },
  {
    lesson: 6, title: "喜剧的智慧",
    questions: [
      { type: "choice", difficulty: "basic", text: "《仲夏夜之梦》发生在哪里？", options: ["A. 伦敦街头", "B. 雅典森林", "C. 威尼斯水城", "D. 苏格兰城堡"], answer: "B", knowledgePoint: "仲夏夜之梦", analysis: "《仲夏夜之梦》的故事发生在雅典城外的一片森林中，充满了奇幻元素和魔法。" },
      { type: "choice", difficulty: "medium", text: "莎士比亚喜剧通常以什么结尾？", options: ["A. 悲剧性死亡", "B. 婚礼和团圆", "C. 英雄凯旋", "D. 道德说教"], answer: "B", knowledgePoint: "喜剧结局", analysis: "莎士比亚的喜剧通常以婚礼和团圆结局，体现了对和谐与幸福的追求。" },
      { type: "choice", difficulty: "hard", text: "莎士比亚喜剧的语言特点是：", options: ["A. 严肃庄重", "B. 充满双关语和文字游戏", "C. 晦涩难懂", "D. 简洁朴素"], answer: "B", knowledgePoint: "喜剧语言", analysis: "莎士比亚喜剧充满机智的双关语、俏皮话和文字游戏，展现了他高超的语言技巧。" }
    ]
  },

  // ==================== 第3章 浪漫主义诗歌（第7-9课） ====================
  {
    lesson: 7, title: "自然的歌唱者",
    questions: [
      { type: "choice", difficulty: "basic", text: "华兹华斯是哪个文学流派的代表诗人？", options: ["A. 古典主义", "B. 浪漫主义", "C. 现实主义", "D. 现代主义"], answer: "B", knowledgePoint: "浪漫主义", analysis: "威廉·华兹华斯是英国浪漫主义诗歌的代表人物，与柯勒律治共同开创了浪漫主义文学运动。" },
      { type: "choice", difficulty: "medium", text: "华兹华斯的诗歌主要描写什么？", options: ["A. 城市生活", "B. 自然与乡村", "C. 宫廷生活", "D. 战争场景"], answer: "B", knowledgePoint: "华兹华斯主题", analysis: "华兹华斯的诗歌以自然和乡村生活为主题，强调自然对人类心灵的治愈作用。" },
      { type: "choice", difficulty: "hard", text: "浪漫主义诗歌与古典主义诗歌的主要区别是：", options: ["A. 更加注重理性", "B. 强调个人情感和想象力", "C. 严格遵守韵律规则", "D. 主题更加宏大"], answer: "B", knowledgePoint: "浪漫主义特点", analysis: "浪漫主义强调个人情感、想象力和自然，与古典主义的理性、秩序和规则形成对比。" }
    ]
  },
  {
    lesson: 8, title: "激情与永恒",
    questions: [
      { type: "choice", difficulty: "basic", text: "《西风颂》的作者是：", options: ["A. 华兹华斯", "B. 雪莱", "C. 济慈", "D. 拜伦"], answer: "B", knowledgePoint: "雪莱", analysis: "珀西·雪莱是英国浪漫主义诗人，《西风颂》是他最著名的作品之一，表达了对自由和理想的追求。" },
      { type: "choice", difficulty: "medium", text: "济慈的诗歌追求什么？", options: ["A. 政治变革", "B. 美与永恒", "C. 社会批判", "D. 宗教信仰"], answer: "B", knowledgePoint: "济慈美学", analysis: "约翰·济慈的诗歌追求美与永恒，代表作包括《秋颂》《夜莺颂》等。" },
      { type: "choice", difficulty: "hard", text: "拜伦式英雄具有什么特点？", options: ["A. 温顺善良", "B. 孤独、叛逆、充满激情", "C. 循规蹈矩", "D. 淡泊名利"], answer: "B", knowledgePoint: "拜伦式英雄", analysis: "拜伦式英雄是拜伦诗歌中塑造的一类人物，他们孤独、叛逆、充满激情，挑战传统社会规范。" }
    ]
  },
  {
    lesson: 9, title: "诗歌的形式",
    questions: [
      { type: "choice", difficulty: "basic", text: "十四行诗有多少行？", options: ["A. 10行", "B. 12行", "C. 14行", "D. 16行"], answer: "C", knowledgePoint: "十四行诗", analysis: "十四行诗是一种有固定格式的诗歌形式，通常由14行组成，有特定的韵律和押韵方式。" },
      { type: "choice", difficulty: "medium", text: "诗歌中重复出现的节奏模式叫什么？", options: ["A. 押韵", "B. 韵律", "C. 意象", "D. 比喻"], answer: "B", knowledgePoint: "诗歌韵律", analysis: "韵律是诗歌中重复出现的节奏模式，是诗歌音乐性的重要组成部分。" },
      { type: "choice", difficulty: "hard", text: "比喻和隐喻的区别是：", options: ["A. 比喻用\"像\"或\"如\"连接，隐喻直接等同", "B. 隐喻用\"像\"或\"如\"连接，比喻直接等同", "C. 两者没有区别", "D. 比喻更抽象"], answer: "A", knowledgePoint: "修辞区别", analysis: "比喻是用\"像\"或\"如\"将两个事物进行比较，而隐喻则直接将一个事物等同于另一个事物，更加直接和隐含。" }
    ]
  },

  // ==================== 第4章 维多利亚小说（第10-12课） ====================
  {
    lesson: 10, title: "狄更斯的伦敦",
    questions: [
      { type: "choice", difficulty: "basic", text: "以下哪位是维多利亚时代最著名的小说家？", options: ["A. 海明威", "B. 狄更斯", "C. 托尔斯泰", "D. 卡夫卡"], answer: "B", knowledgePoint: "维多利亚小说", analysis: "查尔斯·狄更斯是维多利亚时代最具代表性的小说家，作品包括《雾都孤儿》《大卫·科波菲尔》《双城记》等。" },
      { type: "choice", difficulty: "medium", text: "狄更斯的小说主要关注什么主题？", options: ["A. 宫廷爱情", "B. 社会现实与人道主义", "C. 科幻冒险", "D. 神话传说"], answer: "B", knowledgePoint: "狄更斯主题", analysis: "狄更斯的小说深刻描绘了维多利亚时代的社会现实，关注贫困、童工、社会不公等问题，充满人道主义关怀。" },
      { type: "choice", difficulty: "hard", text: "《双城记》的背景是：", options: ["A. 美国独立战争", "B. 法国大革命", "C. 英国工业革命", "D. 第一次世界大战"], answer: "B", knowledgePoint: "双城记背景", analysis: "《双城记》以法国大革命为背景，讲述了伦敦和巴黎两个城市的故事，探讨了革命、复仇和牺牲的主题。" }
    ]
  },
  {
    lesson: 11, title: "奥斯汀的优雅",
    questions: [
      { type: "choice", difficulty: "basic", text: "《傲慢与偏见》的作者是：", options: ["A. 夏洛蒂·勃朗特", "B. 简·奥斯汀", "C. 艾米莉·勃朗特", "D. 乔治·艾略特"], answer: "B", knowledgePoint: "简·奥斯汀", analysis: "简·奥斯汀是英国著名女作家，代表作包括《傲慢与偏见》《理智与情感》《爱玛》等。" },
      { type: "choice", difficulty: "medium", text: "《傲慢与偏见》中伊丽莎白拒绝了谁的求婚？", options: ["A. 达西先生", "B. 柯林斯先生", "C. 威克姆先生", "D. 宾利先生"], answer: "B", knowledgePoint: "傲慢与偏见情节", analysis: "伊丽莎白最初拒绝了柯林斯先生的求婚，后来也拒绝了达西先生的第一次求婚，体现了她独立的性格。" },
      { type: "choice", difficulty: "hard", text: "奥斯汀小说的独特之处在于：", options: ["A. 宏大的历史叙事", "B. 细腻的社会风俗描写和幽默讽刺", "C. 奇幻的魔法元素", "D. 激烈的戏剧冲突"], answer: "B", knowledgePoint: "奥斯汀风格", analysis: "奥斯汀的小说以细腻的社会风俗描写、机智的对话和温和的幽默讽刺著称，展现了乡绅家庭的生活和婚姻问题。" }
    ]
  },
  {
    lesson: 12, title: "勃朗特姐妹",
    questions: [
      { type: "choice", difficulty: "basic", text: "《简·爱》的作者是：", options: ["A. 安妮·勃朗特", "B. 艾米莉·勃朗特", "C. 夏洛蒂·勃朗特", "D. 简·奥斯汀"], answer: "C", knowledgePoint: "夏洛蒂·勃朗特", analysis: "夏洛蒂·勃朗特是勃朗特三姐妹中最著名的一位，《简·爱》是她的代表作。" },
      { type: "choice", difficulty: "medium", text: "《呼啸山庄》的作者是：", options: ["A. 夏洛蒂·勃朗特", "B. 艾米莉·勃朗特", "C. 安妮·勃朗特", "D. 简·奥斯汀"], answer: "B", knowledgePoint: "艾米莉·勃朗特", analysis: "《呼啸山庄》是艾米莉·勃朗特唯一的小说，以其强烈的情感和哥特式风格著称。" },
      { type: "choice", difficulty: "hard", text: "勃朗特姐妹的作品共同特点是：", options: ["A. 轻松幽默的喜剧风格", "B. 强烈的情感和独立的女性形象", "C. 宫廷生活描写", "D. 田园牧歌式的宁静"], answer: "B", knowledgePoint: "勃朗特风格", analysis: "勃朗特姐妹的作品都塑造了坚强独立的女性形象，充满强烈的情感和对社会规范的挑战。" }
    ]
  },

  // ==================== 第5章 现代文学探索（第13-15课） ====================
  {
    lesson: 13, title: "意识流的觉醒",
    questions: [
      { type: "choice", difficulty: "basic", text: "意识流文学的特点是：", options: ["A. 注重外部事件描写", "B. 深入人物内心世界", "C. 严格遵循时间顺序", "D. 简洁明快的语言"], answer: "B", knowledgePoint: "意识流", analysis: "意识流文学打破传统叙事方式，深入人物的内心世界，展现人物的意识流动和内心独白。" },
      { type: "choice", difficulty: "medium", text: "弗吉尼亚·伍尔夫是哪个文学流派的代表？", options: ["A. 浪漫主义", "B. 现代主义", "C. 现实主义", "D. 古典主义"], answer: "B", knowledgePoint: "伍尔夫", analysis: "弗吉尼亚·伍尔夫是英国现代主义文学的重要代表，作品包括《达洛维夫人》《到灯塔去》等。" },
      { type: "choice", difficulty: "hard", text: "《尤利西斯》的作者是：", options: ["A. 乔伊斯", "B. 伍尔夫", "C. 普鲁斯特", "D. 福克纳"], answer: "A", knowledgePoint: "乔伊斯", analysis: "詹姆斯·乔伊斯的《尤利西斯》是意识流文学的巅峰之作，以其复杂的结构和深刻的心理描写著称。" }
    ]
  },
  {
    lesson: 14, title: "战争与创伤",
    questions: [
      { type: "choice", difficulty: "basic", text: "一战对英国文学产生了什么影响？", options: ["A. 促进了乐观主义文学", "B. 产生了战争文学和反战主题", "C. 文学创作停滞", "D. 回归传统文学形式"], answer: "B", knowledgePoint: "战争文学", analysis: "第一次世界大战带来了巨大的创伤，促使作家们反思战争的意义，产生了大量战争文学和反战主题的作品。" },
      { type: "choice", difficulty: "medium", text: "存在主义文学关注什么主题？", options: ["A. 爱情与婚姻", "B. 自由、责任与存在意义", "C. 历史事件", "D. 自然美景"], answer: "B", knowledgePoint: "存在主义", analysis: "存在主义文学探讨人类存在的意义、自由与责任，反映了战后人们对人生意义的思考。" },
      { type: "choice", difficulty: "hard", text: "荒诞派文学的特点是：", options: ["A. 情节连贯完整", "B. 语言清晰易懂", "C. 表现世界的荒诞和人生的无意义", "D. 乐观积极的基调"], answer: "C", knowledgePoint: "荒诞派", analysis: "荒诞派文学通过荒诞的情节和破碎的语言，表现现代世界的荒诞性和人类存在的无意义感。" }
    ]
  },
  {
    lesson: 15, title: "多元的声音",
    questions: [
      { type: "choice", difficulty: "basic", text: "后殖民文学关注什么主题？", options: ["A. 古代神话", "B. 殖民历史、文化身份和种族问题", "C. 宫廷生活", "D. 自然描写"], answer: "B", knowledgePoint: "后殖民文学", analysis: "后殖民文学探讨殖民历史的影响、文化身份的建构以及种族和文化冲突等问题。" },
      { type: "choice", difficulty: "medium", text: "萨尔曼·鲁西迪的作品属于什么文学范畴？", options: ["A. 浪漫主义", "B. 后殖民文学", "C. 古典主义", "D. 科幻文学"], answer: "B", knowledgePoint: "鲁西迪", analysis: "萨尔曼·鲁西迪是后殖民文学的重要代表，代表作《午夜之子》探讨了印度的历史和文化身份。" },
      { type: "choice", difficulty: "hard", text: "文学的边界拓展意味着：", options: ["A. 文学变得更加单一", "B. 接纳不同文化背景的声音和主题", "C. 回归传统文学形式", "D. 限制文学创作的主题"], answer: "B", knowledgePoint: "文学多元化", analysis: "当代文学越来越多元化，接纳来自不同文化、种族和背景的作家，拓展了文学的主题和形式。" }
    ]
  },

  // ==================== 第6章 期中复习与考试（第16-20课） ====================
  {
    lesson: 16, title: "诗歌专题复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "诗歌鉴赏的第一步是：", options: ["A. 背诵诗歌", "B. 理解诗歌的字面意思", "C. 分析作者生平", "D. 查找注释"], answer: "B", knowledgePoint: "诗歌鉴赏步骤", analysis: "诗歌鉴赏首先要理解诗歌的字面意思，包括词汇、语法和基本内容。" },
      { type: "choice", difficulty: "medium", text: "分析诗歌意象的作用是：", options: ["A. 增加诗歌的长度", "B. 传达情感和主题", "C. 使诗歌难以理解", "D. 符合韵律要求"], answer: "B", knowledgePoint: "意象分析", analysis: "意象是诗歌中表达情感和主题的重要手段，通过具体形象传达抽象的情感和思想。" },
      { type: "choice", difficulty: "hard", text: "比较不同诗人风格时应关注：", options: ["A. 诗人的身高", "B. 诗歌的韵律、意象和主题表达", "C. 诗人的出生日期", "D. 诗歌的排版方式"], answer: "B", knowledgePoint: "风格比较", analysis: "比较诗人风格应关注他们在韵律、意象、语言和主题表达等方面的差异。" }
    ]
  },
  {
    lesson: 17, title: "小说专题复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "小说的三要素是：", options: ["A. 时间、地点、人物", "B. 人物、情节、环境", "C. 开头、发展、结尾", "D. 标题、作者、出版社"], answer: "B", knowledgePoint: "小说要素", analysis: "小说的三要素是人物、情节和环境，这是分析小说的基础。" },
      { type: "choice", difficulty: "medium", text: "分析人物形象应关注：", options: ["A. 人物的名字", "B. 人物的言行、心理和动机", "C. 人物的出场顺序", "D. 人物的服装描写"], answer: "B", knowledgePoint: "人物分析", analysis: "分析人物形象需要关注人物的语言、行为、心理活动和内在动机。" },
      { type: "choice", difficulty: "hard", text: "小说的主题是指：", options: ["A. 故事发生的地点", "B. 作者通过故事表达的核心思想", "C. 小说的字数", "D. 人物的数量"], answer: "B", knowledgePoint: "主题分析", analysis: "主题是作者通过故事想要表达的核心思想或观点，是小说的灵魂。" }
    ]
  },
  {
    lesson: 18, title: "戏剧专题复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "戏剧的基本要素是：", options: ["A. 诗歌、散文、小说", "B. 剧本、演员、舞台", "C. 开头、高潮、结尾", "D. 时间、地点、人物"], answer: "B", knowledgePoint: "戏剧要素", analysis: "戏剧的基本要素包括剧本（文本）、演员（表演）和舞台（表演空间）。" },
      { type: "choice", difficulty: "medium", text: "戏剧冲突的作用是：", options: ["A. 让剧情平淡无奇", "B. 推动剧情发展，展现人物性格", "C. 使观众感到无聊", "D. 增加剧本的页数"], answer: "B", knowledgePoint: "戏剧冲突", analysis: "戏剧冲突是推动剧情发展的动力，通过冲突可以展现人物性格和主题。" },
      { type: "choice", difficulty: "hard", text: "舞台指示的作用是：", options: ["A. 告诉观众剧情", "B. 指导演员表演和舞台布置", "C. 解释剧本的历史背景", "D. 提供作者的生平信息"], answer: "B", knowledgePoint: "舞台指示", analysis: "舞台指示是剧本中指导演员表演、舞台布置和场景转换的说明文字。" }
    ]
  },
  {
    lesson: 19, title: "综合练习",
    questions: [
      { type: "choice", difficulty: "basic", text: "阅读理解中，找出主旨句的目的是：", options: ["A. 练习写字", "B. 把握文章的中心思想", "C. 学习生词", "D. 背诵文章"], answer: "B", knowledgePoint: "阅读理解技巧", analysis: "找出主旨句是把握文章中心思想的关键步骤。" },
      { type: "choice", difficulty: "medium", text: "文学常识题考察的是：", options: ["A. 数学公式", "B. 作家、作品及其背景知识", "C. 科学实验", "D. 历史年代"], answer: "B", knowledgePoint: "文学常识", analysis: "文学常识题考察对作家、作品及其背景知识的了解。" },
      { type: "choice", difficulty: "hard", text: "考试中合理分配时间的策略是：", options: ["A. 先做难题", "B. 先做简单题，再回头做难题", "C. 随意答题", "D. 只做选择题"], answer: "B", knowledgePoint: "考试策略", analysis: "合理的时间分配策略是先完成简单题，确保得分，再处理难题。" }
    ]
  },
  {
    lesson: 20, title: "期中考试",
    questions: [
      { type: "choice", difficulty: "basic", text: "期中考试的范围通常是：", options: ["A. 全学年内容", "B. 半学期内容", "C. 仅复习课内容", "D. 下学期内容"], answer: "B", knowledgePoint: "考试范围", analysis: "期中考试通常考察半学期的学习内容。" },
      { type: "choice", difficulty: "medium", text: "文学考试中，赏析题需要：", options: ["A. 复述故事内容", "B. 分析作品的艺术特色和主题", "C. 默写课文", "D. 列举作者生平"], answer: "B", knowledgePoint: "赏析题", analysis: "赏析题要求分析作品的艺术特色、语言风格和主题思想。" },
      { type: "choice", difficulty: "hard", text: "考试评分标准通常包括：", options: ["A. 字迹工整程度", "B. 答案的准确性、完整性和深度", "C. 答题速度", "D. 答题纸的整洁度"], answer: "B", knowledgePoint: "评分标准", analysis: "文学考试评分主要看答案的准确性、完整性和分析深度。" }
    ]
  },

  // ==================== 第7章 文学作品精读（第21-24课） ====================
  {
    lesson: 21, title: "《哈姆雷特》精读",
    questions: [
      { type: "choice", difficulty: "basic", text: "哈姆雷特的父亲是怎么死的？", options: ["A. 病逝", "B. 被克劳狄斯毒杀", "C. 战死沙场", "D. 意外身亡"], answer: "B", knowledgePoint: "哈姆雷特情节", analysis: "哈姆雷特的父亲被弟弟克劳狄斯毒杀，这是整个悲剧的起因。" },
      { type: "choice", difficulty: "medium", text: "哈姆雷特为什么迟迟不复仇？", options: ["A. 害怕死亡", "B. 性格犹豫，思考人生意义", "C. 忘记了父亲的嘱托", "D. 喜欢克劳狄斯"], answer: "B", knowledgePoint: "哈姆雷特性格", analysis: "哈姆雷特的犹豫源于他对人生意义的深刻思考和对复仇的道德考量。" },
      { type: "choice", difficulty: "hard", text: "《哈姆雷特》中的象征手法包括：", options: ["A. 光明与黑暗的对立", "B. 疾病与腐败的隐喻", "C. 以上都是", "D. 以上都不是"], answer: "C", knowledgePoint: "象征手法", analysis: "《哈姆雷特》运用了丰富的象征手法，光明与黑暗的对立象征善恶，疾病隐喻社会的腐败。" }
    ]
  },
  {
    lesson: 22, title: "《傲慢与偏见》精读",
    questions: [
      { type: "choice", difficulty: "basic", text: "伊丽莎白的性格特点是：", options: ["A. 温顺顺从", "B. 独立、聪明、有主见", "C. 冷漠自私", "D. 虚荣浅薄"], answer: "B", knowledgePoint: "伊丽莎白性格", analysis: "伊丽莎白是一个独立、聪明、有主见的女性，不愿为了金钱和地位牺牲自己的幸福。" },
      { type: "choice", difficulty: "medium", text: "达西先生最初为什么被伊丽莎白误解？", options: ["A. 他过于傲慢", "B. 他长得不好看", "C. 他没有钱", "D. 他不爱说话"], answer: "A", knowledgePoint: "傲慢与偏见", analysis: "达西先生最初因傲慢的态度被伊丽莎白误解，两人经历了种种波折才最终走到一起。" },
      { type: "choice", difficulty: "hard", text: "小说中\"傲慢\"与\"偏见\"分别指：", options: ["A. 伊丽莎白的傲慢，达西的偏见", "B. 达西的傲慢，伊丽莎白的偏见", "C. 两人都很傲慢", "D. 两人都有偏见"], answer: "B", knowledgePoint: "主题分析", analysis: "达西因社会地位和财富而显得傲慢，伊丽莎白则因对达西的第一印象而产生偏见，小说讲述了两人克服这些缺陷的过程。" }
    ]
  },
  {
    lesson: 23, title: "《呼啸山庄》精读",
    questions: [
      { type: "choice", difficulty: "basic", text: "《呼啸山庄》的主人公是：", options: ["A. 希斯克利夫", "B. 凯瑟琳", "C. 林顿", "D. 耐莉"], answer: "A", knowledgePoint: "呼啸山庄主角", analysis: "希斯克利夫是《呼啸山庄》的核心人物，他的爱恨情仇构成了小说的主线。" },
      { type: "choice", difficulty: "medium", text: "希斯克利夫为什么复仇？", options: ["A. 为了金钱", "B. 因失去凯瑟琳和遭受的屈辱", "C. 为了权力", "D. 为了好玩"], answer: "B", knowledgePoint: "复仇动机", analysis: "希斯克利夫因失去爱人凯瑟琳以及在恩肖家遭受的屈辱而展开复仇。" },
      { type: "choice", difficulty: "hard", text: "小说中荒野象征什么？", options: ["A. 美丽的风景", "B. 自由、野性和原始的力量", "C. 危险的地方", "D. 人类的文明"], answer: "B", knowledgePoint: "象征意义", analysis: "荒野在小说中象征着自由、野性和原始的力量，与庄园代表的文明形成对比。" }
    ]
  },
  {
    lesson: 24, title: "诗歌名篇精读",
    questions: [
      { type: "choice", difficulty: "basic", text: "华兹华斯的《我独自漫游像一朵云》描写的是：", options: ["A. 城市生活", "B. 水仙花", "C. 战争场景", "D. 宫廷舞会"], answer: "B", knowledgePoint: "华兹华斯诗歌", analysis: "这首诗描写了诗人看到一片水仙花时的喜悦和感动。" },
      { type: "choice", difficulty: "medium", text: "济慈的《秋颂》表达了什么情感？", options: ["A. 对秋天的赞美和对美的感悟", "B. 对冬天的恐惧", "C. 对春天的渴望", "D. 对夏天的怀念"], answer: "A", knowledgePoint: "秋颂主题", analysis: "《秋颂》通过对秋天景象的描绘，表达了对自然之美的赞美和对生命的深刻感悟。" },
      { type: "choice", difficulty: "hard", text: "雪莱《西风颂》中\"冬天来了，春天还会远吗\"表达了什么？", options: ["A. 对冬天的喜爱", "B. 对未来的希望和乐观", "C. 对春天的恐惧", "D. 对时间流逝的无奈"], answer: "B", knowledgePoint: "西风颂主题", analysis: "这句话表达了即使在最困难的时刻，也要保持希望，相信美好即将到来。" }
    ]
  },

  // ==================== 第8章 文学创作入门（第25-28课） ====================
  {
    lesson: 25, title: "诗歌创作",
    questions: [
      { type: "choice", difficulty: "basic", text: "诗歌中用来表达情感和意境的具体形象叫什么？", options: ["A. 结构", "B. 意象", "C. 韵律", "D. 主题"], answer: "B", knowledgePoint: "诗歌意象", analysis: "意象是诗歌中用来表达情感和意境的具体形象，是诗歌的重要组成部分。" },
      { type: "choice", difficulty: "medium", text: "以下哪种不是诗歌的常见形式？", options: ["A. 十四行诗", "B. 自由诗", "C. 散文", "D. 俳句"], answer: "C", knowledgePoint: "诗歌形式", analysis: "散文是一种文学体裁，不是诗歌的形式。十四行诗、自由诗和俳句都是常见的诗歌形式。" },
      { type: "choice", difficulty: "hard", text: "自由诗的特点是：", options: ["A. 严格遵守韵律和押韵", "B. 不受固定韵律和格式限制", "C. 必须有14行", "D. 必须押韵"], answer: "B", knowledgePoint: "自由诗", analysis: "自由诗不受固定韵律和格式的限制，诗人可以自由表达，注重内容和情感。" }
    ]
  },
  {
    lesson: 26, title: "记叙文写作",
    questions: [
      { type: "choice", difficulty: "basic", text: "记叙文的六要素是：", options: ["A. 人物、情节、环境、开头、发展、结尾", "B. 时间、地点、人物、起因、经过、结果", "C. 标题、作者、时间、地点、人物、事件", "D. 开头、发展、高潮、结局、尾声、评论"], answer: "B", knowledgePoint: "记叙文要素", analysis: "记叙文的六要素是时间、地点、人物、起因、经过、结果。" },
      { type: "choice", difficulty: "medium", text: "塑造人物形象的方法包括：", options: ["A. 外貌描写、语言描写、动作描写、心理描写", "B. 天气描写、景物描写、动物描写", "C. 数学公式、物理定律、化学方程式", "D. 历史事件、地理知识、科学发现"], answer: "A", knowledgePoint: "人物塑造", analysis: "塑造人物形象常用外貌、语言、动作、心理等描写方法。" },
      { type: "choice", difficulty: "hard", text: "选择叙事视角时应考虑：", options: ["A. 作者的喜好", "B. 故事的主题和表达效果", "C. 读者的年龄", "D. 文章的字数"], answer: "B", knowledgePoint: "叙事视角", analysis: "叙事视角的选择会影响故事的呈现方式和读者的感受，应根据主题和表达效果来决定。" }
    ]
  },
  {
    lesson: 27, title: "散文写作",
    questions: [
      { type: "choice", difficulty: "basic", text: "散文的特点是：", options: ["A. 严格的韵律要求", "B. 形散神不散，注重抒情和议论", "C. 必须有完整的故事情节", "D. 必须押韵"], answer: "B", knowledgePoint: "散文特点", analysis: "散文形式自由，没有严格的韵律要求，但主题明确，注重抒情和议论。" },
      { type: "choice", difficulty: "medium", text: "散文的结构可以是：", options: ["A. 只能是总分总结构", "B. 灵活多样，根据内容安排", "C. 必须是 chronological order", "D. 只能是倒叙"], answer: "B", knowledgePoint: "散文结构", analysis: "散文的结构灵活多样，可以根据内容和主题自由安排。" },
      { type: "choice", difficulty: "hard", text: "散文的语言风格应：", options: ["A. 晦涩难懂", "B. 生动自然，富有感染力", "C. 枯燥乏味", "D. 华丽堆砌"], answer: "B", knowledgePoint: "散文语言", analysis: "好的散文语言应该生动自然，能够打动读者，富有感染力。" }
    ]
  },
  {
    lesson: 28, title: "文学评论",
    questions: [
      { type: "choice", difficulty: "basic", text: "文学评论的目的是：", options: ["A. 复述故事", "B. 分析和评价文学作品", "C. 介绍作者生平", "D. 列举作品目录"], answer: "B", knowledgePoint: "文学评论", analysis: "文学评论的目的是对文学作品进行分析、解读和评价。" },
      { type: "choice", difficulty: "medium", text: "文学评论需要：", options: ["A. 主观臆断", "B. 以文本为依据，有理有据", "C. 只说优点不说缺点", "D. 只说缺点不说优点"], answer: "B", knowledgePoint: "评论方法", analysis: "文学评论应以文本为依据，观点要有论据支持，不能主观臆断。" },
      { type: "choice", difficulty: "hard", text: "批判性思维在文学评论中的作用是：", options: ["A. 盲目接受作品", "B. 客观分析作品的优缺点", "C. 完全否定作品", "D. 只赞美作品"], answer: "B", knowledgePoint: "批判性思维", analysis: "批判性思维要求读者客观地分析作品，既要看到优点，也要指出不足。" }
    ]
  },

  // ==================== 第9章 比较文学视角（第29-31课） ====================
  {
    lesson: 29, title: "不列颠文学与魔法世界",
    questions: [
      { type: "choice", difficulty: "basic", text: "英雄从平凡到伟大的成长旅程被称为：", options: ["A. 英雄之旅", "B. 成长故事", "C. 冒险传奇", "D. 史诗叙事"], answer: "A", knowledgePoint: "神话原型", analysis: "英雄之旅是一种普遍的神话原型，描述英雄从平凡世界出发，经历考验，最终获得成长和转变。" },
      { type: "choice", difficulty: "medium", text: "文学作品中反复出现的具有象征意义的形象叫什么？", options: ["A. 主题", "B. 意象", "C. 原型", "D. 隐喻"], answer: "C", knowledgePoint: "文学原型", analysis: "原型是文学作品中反复出现的具有象征意义的形象或主题，反映了人类共有的心理结构。" },
      { type: "choice", difficulty: "hard", text: "《仲夏夜之梦》中的魔法元素体现了：", options: ["A. 科学原理", "B. 人类对超自然力量的想象", "C. 历史事实", "D. 数学公式"], answer: "B", knowledgePoint: "奇幻文学", analysis: "《仲夏夜之梦》中的仙女、魔法药水等元素体现了人类对超自然力量的想象和对奇幻世界的向往。" }
    ]
  },
  {
    lesson: 30, title: "不同时代的回响",
    questions: [
      { type: "choice", difficulty: "basic", text: "古典文学与现代文学的关系是：", options: ["A. 完全割裂", "B. 现代文学继承和发展了古典文学", "C. 古典文学比现代文学更好", "D. 现代文学比古典文学更好"], answer: "B", knowledgePoint: "文学传承", analysis: "现代文学在继承古典文学传统的基础上不断创新和发展。" },
      { type: "choice", difficulty: "medium", text: "文学经典的当代解读意味着：", options: ["A. 用现代视角重新理解经典作品", "B. 否定经典作品的价值", "C. 只关注作品的历史背景", "D. 完全按照传统方式解读"], answer: "A", knowledgePoint: "经典解读", analysis: "文学经典的当代解读是用现代视角重新理解和阐释经典作品，赋予其新的意义。" },
      { type: "choice", difficulty: "hard", text: "跨时代的共鸣指的是：", options: ["A. 不同时代的作品使用相同的语言", "B. 不同时代的读者对作品产生相似的情感共鸣", "C. 不同时代的作品有相同的字数", "D. 不同时代的作者生活在同一地点"], answer: "B", knowledgePoint: "跨时代共鸣", analysis: "优秀的文学作品能够跨越时代，让不同时代的读者产生相似的情感共鸣。" }
    ]
  },
  {
    lesson: 31, title: "文化背景探索",
    questions: [
      { type: "choice", difficulty: "basic", text: "文学作品与历史事件的关系是：", options: ["A. 文学作品完全脱离历史", "B. 文学作品反映时代背景", "C. 文学作品创造历史", "D. 文学作品与历史无关"], answer: "B", knowledgePoint: "文学与历史", analysis: "文学作品往往反映了其创作时代的历史背景和社会现实。" },
      { type: "choice", difficulty: "medium", text: "社会变革如何影响文学创作？", options: ["A. 没有影响", "B. 社会变革为文学提供新的主题和视角", "C. 社会变革限制文学创作", "D. 社会变革使文学变得单一"], answer: "B", knowledgePoint: "社会与文学", analysis: "社会变革为文学创作提供了新的主题、视角和素材。" },
      { type: "choice", difficulty: "hard", text: "地域特色在文学中的体现包括：", options: ["A. 方言使用、地方风俗描写、地理环境描写", "B. 只有地理环境描写", "C. 只有方言使用", "D. 只有地方风俗描写"], answer: "A", knowledgePoint: "地域文学", analysis: "地域特色通过方言、风俗和地理环境等多方面在文学作品中体现出来。" }
    ]
  },

  // ==================== 第10章 第二学期期中复习与考试（第32-36课） ====================
  {
    lesson: 32, title: "精读篇目回顾",
    questions: [
      { type: "choice", difficulty: "basic", text: "回顾精读篇目时应关注：", options: ["A. 书中的图片", "B. 作品的主题、人物和写作手法", "C. 书的价格", "D. 书的厚度"], answer: "B", knowledgePoint: "精读回顾", analysis: "回顾精读篇目应关注作品的主题、人物形象和写作手法。" },
      { type: "choice", difficulty: "medium", text: "经典段落需要：", options: ["A. 死记硬背", "B. 理解其含义和作用", "C. 忽略不看", "D. 只看一遍"], answer: "B", knowledgePoint: "经典段落", analysis: "经典段落需要理解其在作品中的含义和作用，而不仅仅是背诵。" },
      { type: "choice", difficulty: "hard", text: "比较不同作品的主题时应注意：", options: ["A. 只看表面相似", "B. 分析深层含义和表达差异", "C. 只关注作者名字", "D. 只看篇幅长短"], answer: "B", knowledgePoint: "主题比较", analysis: "比较作品主题应深入分析其深层含义和表达方式的差异。" }
    ]
  },
  {
    lesson: 33, title: "写作技巧复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "写作的第一步是：", options: ["A. 直接开始写", "B. 确定主题和结构", "C. 修改润色", "D. 抄写范文"], answer: "B", knowledgePoint: "写作步骤", analysis: "写作前应先确定主题和结构，做好规划。" },
      { type: "choice", difficulty: "medium", text: "修改和润色的目的是：", options: ["A. 增加字数", "B. 使文章更准确、流畅和生动", "C. 改变主题", "D. 抄袭他人"], answer: "B", knowledgePoint: "修改润色", analysis: "修改和润色可以使文章更准确、流畅和生动。" },
      { type: "choice", difficulty: "hard", text: "创意表达需要：", options: ["A. 模仿他人", "B. 独特的视角和个性化的表达", "C. 严格遵循规则", "D. 使用复杂的词汇"], answer: "B", knowledgePoint: "创意表达", analysis: "创意表达需要独特的视角和个性化的表达方式。" }
    ]
  },
  {
    lesson: 34, title: "比较文学专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "比较文学的核心是：", options: ["A. 比较作品的字数", "B. 跨文化、跨文本的比较研究", "C. 比较作者的年龄", "D. 比较书的价格"], answer: "B", knowledgePoint: "比较文学", analysis: "比较文学是对不同文化、不同文本之间的关系进行比较研究。" },
      { type: "choice", difficulty: "medium", text: "跨文本比较需要：", options: ["A. 找出相同点和不同点", "B. 只找相同点", "C. 只找不同点", "D. 忽略文本内容"], answer: "A", knowledgePoint: "文本比较", analysis: "跨文本比较需要找出作品之间的相同点和不同点，分析其原因和意义。" },
      { type: "choice", difficulty: "hard", text: "文学影响研究关注：", options: ["A. 作者的生活习惯", "B. 一部作品对另一部作品的影响", "C. 作品的印刷质量", "D. 读者的数量"], answer: "B", knowledgePoint: "影响研究", analysis: "文学影响研究关注一部作品或作家对另一部作品或作家的影响。" }
    ]
  },
  {
    lesson: 35, title: "期中综合练习",
    questions: [
      { type: "choice", difficulty: "basic", text: "模拟考试的目的是：", options: ["A. 浪费时间", "B. 熟悉考试形式，查漏补缺", "C. 打击自信心", "D. 增加负担"], answer: "B", knowledgePoint: "模拟考试", analysis: "模拟考试可以帮助熟悉考试形式，找出知识漏洞。" },
      { type: "choice", difficulty: "medium", text: "分析错题时应：", options: ["A. 只看答案", "B. 找出错误原因，总结规律", "C. 忽略错题", "D. 责怪题目太难"], answer: "B", knowledgePoint: "错题分析", analysis: "分析错题应找出错误原因，总结规律，避免再次犯错。" },
      { type: "choice", difficulty: "hard", text: "考试策略包括：", options: ["A. 随意答题", "B. 合理分配时间，先易后难", "C. 只做会的题", "D. 先做难题"], answer: "B", knowledgePoint: "考试策略", analysis: "合理的考试策略包括合理分配时间，先完成简单题再处理难题。" }
    ]
  },
  {
    lesson: 36, title: "第二学期期中考试",
    questions: [
      { type: "choice", difficulty: "basic", text: "第二学期期中考试范围是：", options: ["A. 第一学期内容", "B. 第二学期所学内容", "C. 全学年内容", "D. 课外知识"], answer: "B", knowledgePoint: "考试范围", analysis: "第二学期期中考试通常考察第二学期所学内容。" },
      { type: "choice", difficulty: "medium", text: "写作题的评分标准包括：", options: ["A. 字数越多越好", "B. 内容、结构、语言和创意", "C. 字迹越漂亮越好", "D. 段落越多越好"], answer: "B", knowledgePoint: "写作评分", analysis: "写作题评分通常从内容、结构、语言和创意等方面综合考量。" },
      { type: "choice", difficulty: "hard", text: "考试前的心理调适包括：", options: ["A. 过度紧张", "B. 保持平常心，相信自己的准备", "C. 完全放松不复习", "D. 熬夜复习"], answer: "B", knowledgePoint: "心理调适", analysis: "考试前应保持平常心，相信自己的准备，避免过度紧张。" }
    ]
  },

  // ==================== 第11章 专题拓展（第37-40课） ====================
  {
    lesson: 37, title: "文学与艺术",
    questions: [
      { type: "choice", difficulty: "basic", text: "文学与绘画的关系是：", options: ["A. 完全无关", "B. 相互启发和影响", "C. 绘画抄袭文学", "D. 文学抄袭绘画"], answer: "B", knowledgePoint: "文学与绘画", analysis: "文学和绘画都是艺术形式，常常相互启发和影响。" },
      { type: "choice", difficulty: "medium", text: "诗歌与音乐的共同点是：", options: ["A. 都需要乐器", "B. 都注重节奏和韵律", "C. 都需要舞台表演", "D. 都只有文字"], answer: "B", knowledgePoint: "诗歌与音乐", analysis: "诗歌和音乐都注重节奏和韵律，具有音乐性。" },
      { type: "choice", difficulty: "hard", text: "戏剧与舞台艺术的关系是：", options: ["A. 戏剧独立于舞台艺术", "B. 戏剧需要舞台艺术的支持来呈现", "C. 舞台艺术与戏剧无关", "D. 戏剧只需要剧本"], answer: "B", knowledgePoint: "戏剧与舞台", analysis: "戏剧需要通过舞台艺术（表演、布景、灯光等）来呈现给观众。" }
    ]
  },
  {
    lesson: 38, title: "女性文学传统",
    questions: [
      { type: "choice", difficulty: "basic", text: "女性文学关注的主题包括：", options: ["A. 女性的经历、情感和社会地位", "B. 男性的冒险故事", "C. 战争历史", "D. 科学发现"], answer: "A", knowledgePoint: "女性文学主题", analysis: "女性文学关注女性的经历、情感和社会地位等问题。" },
      { type: "choice", difficulty: "medium", text: "早期女性作家面临的困难是：", options: ["A. 写作太容易", "B. 社会偏见和出版限制", "C. 读者太多", "D. 作品太多"], answer: "B", knowledgePoint: "女性作家困境", analysis: "早期女性作家面临社会偏见和出版限制，常常需要用男性笔名发表作品。" },
      { type: "choice", difficulty: "hard", text: "当代女性文学的特点是：", options: ["A. 主题单一", "B. 多元化的声音和视角", "C. 只关注家庭生活", "D. 排斥男性读者"], answer: "B", knowledgePoint: "当代女性文学", analysis: "当代女性文学呈现多元化的声音和视角，探讨各种社会和个人问题。" }
    ]
  },
  {
    lesson: 39, title: "文学与哲学",
    questions: [
      { type: "choice", difficulty: "basic", text: "文学与哲学的关系是：", options: ["A. 完全不同的领域", "B. 文学常常表达哲学思想", "C. 哲学比文学更重要", "D. 文学比哲学更重要"], answer: "B", knowledgePoint: "文学与哲学", analysis: "文学常常通过故事和形象表达深刻的哲学思想。" },
      { type: "choice", difficulty: "medium", text: "存在主义文学探讨：", options: ["A. 数学问题", "B. 人类存在的意义和自由", "C. 自然科学", "D. 历史事件"], answer: "B", knowledgePoint: "存在主义", analysis: "存在主义文学探讨人类存在的意义、自由和责任等问题。" },
      { type: "choice", difficulty: "hard", text: "文学中的理性与感性：", options: ["A. 只能有理性", "B. 只能有感性", "C. 两者可以并存和交织", "D. 相互排斥"], answer: "C", knowledgePoint: "理性与感性", analysis: "优秀的文学作品往往同时包含理性的思考和感性的表达，两者相互交织。" }
    ]
  },
  {
    lesson: 40, title: "阅读策略与方法",
    questions: [
      { type: "choice", difficulty: "basic", text: "精读与泛读的区别是：", options: ["A. 精读更慢，泛读更快", "B. 精读更深入，泛读更广泛", "C. 精读只看小说", "D. 泛读只看诗歌"], answer: "B", knowledgePoint: "精读与泛读", analysis: "精读是深入细致地阅读，泛读是广泛快速地阅读，两者各有侧重。" },
      { type: "choice", difficulty: "medium", text: "做笔记的好处是：", options: ["A. 浪费时间", "B. 帮助理解和记忆", "C. 让书本变脏", "D. 增加负担"], answer: "B", knowledgePoint: "笔记技巧", analysis: "做笔记可以帮助理解和记忆阅读内容，便于日后复习。" },
      { type: "choice", difficulty: "hard", text: "批判性阅读需要：", options: ["A. 完全相信作者", "B. 质疑和分析文本", "C. 只看表面意思", "D. 忽略作者的观点"], answer: "B", knowledgePoint: "批判性阅读", analysis: "批判性阅读需要读者质疑和分析文本，而不是被动接受。" }
    ]
  },

  // ==================== 第12章 总复习（第41-45课） ====================
  {
    lesson: 41, title: "全学年知识框架",
    questions: [
      { type: "choice", difficulty: "basic", text: "英国文学的发展脉络是：", options: ["A. 现代→中世纪→文艺复兴→浪漫主义→维多利亚→现代", "B. 中世纪→文艺复兴→浪漫主义→维多利亚→现代", "C. 文艺复兴→中世纪→浪漫主义→维多利亚→现代", "D. 维多利亚→浪漫主义→文艺复兴→中世纪→现代"], answer: "B", knowledgePoint: "文学发展脉络", analysis: "英国文学的发展大致经历了中世纪、文艺复兴、浪漫主义、维多利亚和现代等时期。" },
      { type: "choice", difficulty: "medium", text: "文学流派的演变反映了：", options: ["A. 天气变化", "B. 社会和文化的变迁", "C. 作者的喜好", "D. 纸张质量的变化"], answer: "B", knowledgePoint: "流派演变", analysis: "文学流派的演变反映了不同时代社会和文化的变迁。" },
      { type: "choice", difficulty: "hard", text: "构建知识框架的方法是：", options: ["A. 死记硬背", "B. 梳理知识点之间的联系", "C. 只看标题", "D. 忽略细节"], answer: "B", knowledgePoint: "知识框架", analysis: "构建知识框架需要梳理知识点之间的逻辑联系，形成体系。" }
    ]
  },
  {
    lesson: 42, title: "诗歌模块总复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "诗歌的基本要素是：", options: ["A. 人物、情节、环境", "B. 韵律、意象、主题", "C. 开头、发展、结尾", "D. 时间、地点、人物"], answer: "B", knowledgePoint: "诗歌要素", analysis: "诗歌的基本要素包括韵律、意象和主题。" },
      { type: "choice", difficulty: "medium", text: "浪漫主义诗歌的特点是：", options: ["A. 注重理性和秩序", "B. 强调情感、自然和想象力", "C. 严格遵守古典规则", "D. 关注社会现实"], answer: "B", knowledgePoint: "浪漫主义特点", analysis: "浪漫主义诗歌强调个人情感、自然之美和想象力。" },
      { type: "choice", difficulty: "hard", text: "诗歌鉴赏的步骤是：", options: ["A. 直接下结论", "B. 理解→分析→评价", "C. 只看标题", "D. 只背诵"], answer: "B", knowledgePoint: "诗歌鉴赏", analysis: "诗歌鉴赏应遵循理解文本、分析手法、评价意义的步骤。" }
    ]
  },
  {
    lesson: 43, title: "小说模块总复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "小说的核心是：", options: ["A. 字数", "B. 人物和故事", "C. 纸张质量", "D. 印刷字体"], answer: "B", knowledgePoint: "小说核心", analysis: "小说的核心是人物塑造和故事情节。" },
      { type: "choice", difficulty: "medium", text: "维多利亚小说的特点是：", options: ["A. 关注社会现实和道德问题", "B. 充满奇幻元素", "C. 短小精悍", "D. 语言晦涩"], answer: "A", knowledgePoint: "维多利亚小说", analysis: "维多利亚小说关注社会现实、道德问题和人道主义关怀。" },
      { type: "choice", difficulty: "hard", text: "分析小说主题的方法是：", options: ["A. 只看开头", "B. 通过人物、情节和象征来提炼", "C. 只看结尾", "D. 猜测作者意图"], answer: "B", knowledgePoint: "主题分析", analysis: "分析小说主题需要通过人物形象、情节发展和象征手法来提炼。" }
    ]
  },
  {
    lesson: 44, title: "戏剧模块总复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "莎士比亚的戏剧类型包括：", options: ["A. 悲剧、喜剧、历史剧", "B. 只有悲剧", "C. 只有喜剧", "D. 只有历史剧"], answer: "A", knowledgePoint: "莎士比亚戏剧", analysis: "莎士比亚创作了悲剧、喜剧和历史剧等多种类型的戏剧。" },
      { type: "choice", difficulty: "medium", text: "戏剧冲突的类型包括：", options: ["A. 人与自然", "B. 人与人、人与社会、内心冲突", "C. 只有人与人", "D. 只有内心冲突"], answer: "B", knowledgePoint: "戏剧冲突", analysis: "戏剧冲突包括人与人、人与社会以及人物内心的冲突。" },
      { type: "choice", difficulty: "hard", text: "舞台语言包括：", options: ["A. 台词和舞台指示", "B. 只有台词", "C. 只有舞台指示", "D. 剧本的封面"], answer: "A", knowledgePoint: "舞台语言", analysis: "舞台语言包括人物台词和舞台指示两部分。" }
    ]
  },
  {
    lesson: 45, title: "写作模块总复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "写作的基本要求是：", options: ["A. 字迹工整", "B. 内容充实、结构清晰、语言通顺", "C. 字数越多越好", "D. 段落越多越好"], answer: "B", knowledgePoint: "写作要求", analysis: "好的写作需要内容充实、结构清晰、语言通顺。" },
      { type: "choice", difficulty: "medium", text: "文学创作需要：", options: ["A. 抄袭他人", "B. 观察生活、积累素材、发挥想象", "C. 只看课本", "D. 不思考"], answer: "B", knowledgePoint: "文学创作", analysis: "文学创作需要观察生活、积累素材并发挥想象力。" },
      { type: "choice", difficulty: "hard", text: "文学评论的写作要点是：", options: ["A. 复述故事", "B. 有观点、有论据、有分析", "C. 只说好话", "D. 只说坏话"], answer: "B", knowledgePoint: "评论写作", analysis: "文学评论需要有明确的观点、充分的论据和深入的分析。" }
    ]
  },

  // ==================== 第13章 期末考试与评估（第46-50课） ====================
  {
    lesson: 46, title: "模拟考试（一）",
    questions: [
      { type: "choice", difficulty: "basic", text: "全真模拟考试的作用是：", options: ["A. 增加压力", "B. 熟悉考试流程，训练答题速度", "C. 浪费时间", "D. 降低信心"], answer: "B", knowledgePoint: "模拟考试", analysis: "全真模拟考试可以帮助熟悉考试流程，训练答题速度和时间管理。" },
      { type: "choice", difficulty: "medium", text: "分析模拟考试成绩时应：", options: ["A. 只看分数", "B. 找出薄弱环节，针对性复习", "C. 忽略错题", "D. 责怪自己"], answer: "B", knowledgePoint: "成绩分析", analysis: "分析模拟考试成绩应找出薄弱环节，进行针对性复习。" },
      { type: "choice", difficulty: "hard", text: "时间管理练习的方法是：", options: ["A. 随意答题", "B. 按题型分配时间，先易后难", "C. 先做难题", "D. 不看时间"], answer: "B", knowledgePoint: "时间管理", analysis: "时间管理需要按题型分配时间，先完成简单题再处理难题。" }
    ]
  },
  {
    lesson: 47, title: "模拟考试（二）",
    questions: [
      { type: "choice", difficulty: "basic", text: "第二次模拟考试的目的是：", options: ["A. 重复第一次", "B. 检验复习效果，进一步查漏补缺", "C. 增加负担", "D. 浪费纸张"], answer: "B", knowledgePoint: "模拟考试目的", analysis: "第二次模拟考试可以检验复习效果，进一步查漏补缺。" },
      { type: "choice", difficulty: "medium", text: "查漏补缺的方法是：", options: ["A. 只看喜欢的内容", "B. 根据错题找到知识漏洞，重点复习", "C. 从头开始复习所有内容", "D. 不复习"], answer: "B", knowledgePoint: "查漏补缺", analysis: "查漏补缺需要根据错题找到知识漏洞，进行重点复习。" },
      { type: "choice", difficulty: "hard", text: "考试前的心理准备包括：", options: ["A. 过度焦虑", "B. 保持积极心态，相信自己", "C. 熬夜复习", "D. 完全放松"], answer: "B", knowledgePoint: "心理准备", analysis: "考试前应保持积极心态，相信自己的准备，避免过度焦虑。" }
    ]
  },
  {
    lesson: 48, title: "考前答疑",
    questions: [
      { type: "choice", difficulty: "basic", text: "考前答疑的作用是：", options: ["A. 增加紧张感", "B. 解决疑难问题，增强信心", "C. 浪费时间", "D. 让老师更忙"], answer: "B", knowledgePoint: "考前答疑", analysis: "考前答疑可以帮助学生解决复习中遇到的疑难问题，增强考试信心。" },
      { type: "choice", difficulty: "medium", text: "提问时应注意：", options: ["A. 问简单的问题", "B. 提前准备好问题，清晰表达", "C. 问与考试无关的问题", "D. 不提问"], answer: "B", knowledgePoint: "提问技巧", analysis: "提问时应提前准备好问题，清晰表达，以便老师更好地解答。" },
      { type: "choice", difficulty: "hard", text: "考前重点内容回顾应：", options: ["A. 从头开始看所有内容", "B. 聚焦核心知识点和错题", "C. 只看新内容", "D. 不回顾"], answer: "B", knowledgePoint: "考前复习", analysis: "考前应聚焦核心知识点和错题，进行有针对性的复习。" }
    ]
  },
  {
    lesson: 49, title: "期末考试",
    questions: [
      { type: "choice", difficulty: "basic", text: "期末考试的范围通常是：", options: ["A. 半学期内容", "B. 全学年内容", "C. 仅复习课内容", "D. 课外知识"], answer: "B", knowledgePoint: "考试范围", analysis: "期末考试通常考察全学年的学习内容。" },
      { type: "choice", difficulty: "medium", text: "文学考试中的赏析题需要：", options: ["A. 复述故事", "B. 分析作品的艺术特色和主题思想", "C. 默写课文", "D. 列举作者生平"], answer: "B", knowledgePoint: "赏析题", analysis: "赏析题要求分析作品的艺术特色、语言风格和主题思想。" },
      { type: "choice", difficulty: "hard", text: "考试时间管理的关键是：", options: ["A. 快速答题不检查", "B. 合理分配时间，先易后难", "C. 只做选择题", "D. 在难题上花费太多时间"], answer: "B", knowledgePoint: "时间管理", analysis: "考试时应合理分配时间，先完成简单题，再处理难题。" }
    ]
  },
  {
    lesson: 50, title: "成绩分析与总结",
    questions: [
      { type: "choice", difficulty: "basic", text: "成绩分析的目的是：", options: ["A. 比较分数高低", "B. 了解知识掌握情况，找出改进方向", "C. 批评学生", "D. 排名次"], answer: "B", knowledgePoint: "成绩分析", analysis: "成绩分析可以帮助学生了解知识掌握情况，找出改进方向。" },
      { type: "choice", difficulty: "medium", text: "学习建议应：", options: ["A. 笼统模糊", "B. 具体可行，针对性强", "C. 不切实际", "D. 照搬他人"], answer: "B", knowledgePoint: "学习建议", analysis: "好的学习建议应该具体可行，针对学生的实际情况。" },
      { type: "choice", difficulty: "hard", text: "进步空间在于：", options: ["A. 提高分数", "B. 弥补知识漏洞，改进学习方法", "C. 增加学习时间", "D. 减少休息时间"], answer: "B", knowledgePoint: "进步空间", analysis: "进步空间在于弥补知识漏洞，改进学习方法，而不仅仅是提高分数。" }
    ]
  },

  // ==================== 第14章 拓展与实践（第51-54课） ====================
  {
    lesson: 51, title: "文学社团活动",
    questions: [
      { type: "choice", difficulty: "basic", text: "读书会的作用是：", options: ["A. 浪费时间", "B. 交流阅读心得，加深理解", "C. 只聊天不读书", "D. 炫耀知识"], answer: "B", knowledgePoint: "读书会", analysis: "读书会可以让参与者交流阅读心得，加深对作品的理解。" },
      { type: "choice", difficulty: "medium", text: "戏剧表演有助于：", options: ["A. 提高数学能力", "B. 理解人物性格和戏剧冲突", "C. 增加体重", "D. 学习科学知识"], answer: "B", knowledgePoint: "戏剧实践", analysis: "参与戏剧表演可以帮助学生更好地理解人物性格和戏剧冲突。" },
      { type: "choice", difficulty: "hard", text: "文学创作比赛的意义在于：", options: ["A. 获得奖品", "B. 锻炼写作能力，展示创意", "C. 浪费纸张", "D. 增加负担"], answer: "B", knowledgePoint: "创作比赛", analysis: "文学创作比赛可以锻炼学生的写作能力，展示创意和才华。" }
    ]
  },
  {
    lesson: 52, title: "作家研究",
    questions: [
      { type: "choice", difficulty: "basic", text: "研究作家生平可以：", options: ["A. 了解作家的生活习惯", "B. 理解作品的创作背景", "C. 知道作家的身高", "D. 了解作家的饮食偏好"], answer: "B", knowledgePoint: "作家研究", analysis: "研究作家生平可以帮助理解作品的创作背景和主题。" },
      { type: "choice", difficulty: "medium", text: "创作背景分析包括：", options: ["A. 作家的出生日期", "B. 历史事件、社会环境和个人经历", "C. 作家的家庭住址", "D. 作家的签名"], answer: "B", knowledgePoint: "背景分析", analysis: "创作背景分析包括历史事件、社会环境和作家的个人经历。" },
      { type: "choice", difficulty: "hard", text: "文献查阅的方法包括：", options: ["A. 只看课本", "B. 利用图书馆、数据库和学术期刊", "C. 只看网络小说", "D. 不查阅任何资料"], answer: "B", knowledgePoint: "文献查阅", analysis: "文献查阅可以利用图书馆、学术数据库和专业期刊等资源。" }
    ]
  },
  {
    lesson: 53, title: "文学与生活",
    questions: [
      { type: "choice", difficulty: "basic", text: "文学对人生的启示包括：", options: ["A. 如何赚钱", "B. 理解人性、情感和社会", "C. 如何烹饪", "D. 如何修理电器"], answer: "B", knowledgePoint: "文学启示", analysis: "文学作品可以帮助读者理解人性、情感和社会。" },
      { type: "choice", difficulty: "medium", text: "阅读的意义在于：", options: ["A. 消磨时间", "B. 增长知识、丰富情感、提升素养", "C. 打发无聊", "D. 完成任务"], answer: "B", knowledgePoint: "阅读意义", analysis: "阅读可以增长知识、丰富情感体验、提升人文素养。" },
      { type: "choice", difficulty: "hard", text: "文学作品的现实价值在于：", options: ["A. 装饰书架", "B. 提供人生借鉴，促进思考", "C. 作为礼物", "D. 增加重量"], answer: "B", knowledgePoint: "现实价值", analysis: "优秀的文学作品可以提供人生借鉴，促进读者思考。" }
    ]
  },
  {
    lesson: 54, title: "假期阅读推荐",
    questions: [
      { type: "choice", difficulty: "basic", text: "经典作品推荐的标准是：", options: ["A. 流行程度", "B. 文学价值和思想内涵", "C. 页数多少", "D. 价格高低"], answer: "B", knowledgePoint: "经典推荐", analysis: "经典作品推荐应基于其文学价值和思想内涵。" },
      { type: "choice", difficulty: "medium", text: "阅读计划制定应：", options: ["A. 随意安排", "B. 合理规划，兼顾兴趣和提升", "C. 只看漫画", "D. 不制定计划"], answer: "B", knowledgePoint: "阅读计划", analysis: "阅读计划应合理规划，兼顾个人兴趣和能力提升。" },
      { type: "choice", difficulty: "hard", text: "读书笔记的方法包括：", options: ["A. 只抄书名", "B. 批注、摘录、心得和思维导图", "C. 不做笔记", "D. 抄书全文"], answer: "B", knowledgePoint: "读书笔记", analysis: "读书笔记可以采用批注、摘录、心得和思维导图等多种方法。" }
    ]
  },

  // ==================== 第15章 学习方法指导（第55-58课） ====================
  {
    lesson: 55, title: "读书笔记技巧",
    questions: [
      { type: "choice", difficulty: "basic", text: "批注的作用是：", options: ["A. 弄脏书本", "B. 记录思考，加深理解", "C. 浪费时间", "D. 画涂鸦"], answer: "B", knowledgePoint: "批注技巧", analysis: "批注可以记录阅读时的思考，加深对文本的理解。" },
      { type: "choice", difficulty: "medium", text: "思维导图有助于：", options: ["A. 画画", "B. 梳理知识结构，建立联系", "C. 浪费纸张", "D. 练字"], answer: "B", knowledgePoint: "思维导图", analysis: "思维导图可以帮助梳理知识结构，建立知识点之间的联系。" },
      { type: "choice", difficulty: "hard", text: "整理与回顾笔记的重要性在于：", options: ["A. 占用空间", "B. 巩固记忆，深化理解", "C. 增加负担", "D. 浪费时间"], answer: "B", knowledgePoint: "笔记整理", analysis: "定期整理和回顾笔记可以巩固记忆，深化理解。" }
    ]
  },
  {
    lesson: 56, title: "背诵与记忆",
    questions: [
      { type: "choice", difficulty: "basic", text: "诗歌背诵的方法包括：", options: ["A. 死记硬背", "B. 理解内容，把握节奏", "C. 不背", "D. 只背标题"], answer: "B", knowledgePoint: "背诵方法", analysis: "诗歌背诵应理解内容，把握节奏和韵律。" },
      { type: "choice", difficulty: "medium", text: "理解性记忆的好处是：", options: ["A. 容易忘记", "B. 记得牢，用得上", "C. 浪费时间", "D. 增加负担"], answer: "B", knowledgePoint: "理解记忆", analysis: "理解性记忆可以让知识记得更牢，也更容易应用。" },
      { type: "choice", difficulty: "hard", text: "复习方法包括：", options: ["A. 只看一遍", "B. 定期复习，间隔重复", "C. 不复习", "D. 一次性复习"], answer: "B", knowledgePoint: "复习策略", analysis: "有效的复习方法包括定期复习和间隔重复。" }
    ]
  },
  {
    lesson: 57, title: "写作提升策略",
    questions: [
      { type: "choice", difficulty: "basic", text: "观察与积累的重要性在于：", options: ["A. 浪费时间", "B. 为写作提供素材", "C. 增加负担", "D. 与写作无关"], answer: "B", knowledgePoint: "观察积累", analysis: "观察生活和积累素材是写作的基础。" },
      { type: "choice", difficulty: "medium", text: "模仿与创新的关系是：", options: ["A. 模仿就是抄袭", "B. 模仿是基础，创新是提升", "C. 只模仿不创新", "D. 只创新不模仿"], answer: "B", knowledgePoint: "模仿创新", analysis: "写作可以从模仿优秀作品开始，然后逐渐形成自己的风格。" },
      { type: "choice", difficulty: "hard", text: "修改与完善的步骤包括：", options: ["A. 写完就交", "B. 检查内容、结构、语言和标点", "C. 不修改", "D. 只检查错别字"], answer: "B", knowledgePoint: "修改步骤", analysis: "修改文章应检查内容、结构、语言表达和标点符号等方面。" }
    ]
  },
  {
    lesson: 58, title: "文学素养培养",
    questions: [
      { type: "choice", difficulty: "basic", text: "广泛阅读的好处是：", options: ["A. 浪费时间", "B. 开阔视野，增长见识", "C. 增加负担", "D. 影响学习"], answer: "B", knowledgePoint: "广泛阅读", analysis: "广泛阅读可以开阔视野，增长见识。" },
      { type: "choice", difficulty: "medium", text: "深度思考要求：", options: ["A. 表面理解", "B. 分析、评价和质疑", "C. 不思考", "D. 被动接受"], answer: "B", knowledgePoint: "深度思考", analysis: "深度思考要求对文本进行分析、评价和质疑。" },
      { type: "choice", difficulty: "hard", text: "人文情怀包括：", options: ["A. 只关心自己", "B. 理解他人，关怀社会", "C. 冷漠无情", "D. 自私自利"], answer: "B", knowledgePoint: "人文情怀", analysis: "人文情怀包括理解他人、关怀社会和尊重多元文化。" }
    ]
  },

  // ==================== 第16章 学期总结与展望（第59-60课） ====================
  {
    lesson: 59, title: "学习成果展示",
    questions: [
      { type: "choice", difficulty: "basic", text: "作品集整理的意义在于：", options: ["A. 占用空间", "B. 展示学习成果，记录成长", "C. 浪费时间", "D. 增加负担"], answer: "B", knowledgePoint: "作品集", analysis: "整理作品集可以展示学习成果，记录个人成长。" },
      { type: "choice", difficulty: "medium", text: "学习收获总结应：", options: ["A. 只说优点", "B. 客观全面，包括进步和不足", "C. 只说缺点", "D. 敷衍了事"], answer: "B", knowledgePoint: "收获总结", analysis: "学习收获总结应客观全面，包括进步和有待改进的地方。" },
      { type: "choice", difficulty: "hard", text: "自我评估的方法包括：", options: ["A. 主观臆断", "B. 对比目标，分析成果", "C. 不评估", "D. 盲目自信"], answer: "B", knowledgePoint: "自我评估", analysis: "自我评估应对比学习目标，客观分析学习成果。" }
    ]
  },
  {
    lesson: 60, title: "新学期展望",
    questions: [
      { type: "choice", difficulty: "basic", text: "学习目标设定应：", options: ["A. 模糊不清", "B. 具体、可衡量、可实现", "C. 不切实际", "D. 没有目标"], answer: "B", knowledgePoint: "目标设定", analysis: "学习目标应具体、可衡量、可实现。" },
      { type: "choice", difficulty: "medium", text: "阅读计划应包括：", options: ["A. 只看课本", "B. 经典作品和兴趣读物", "C. 只看漫画", "D. 不阅读"], answer: "B", knowledgePoint: "阅读计划", analysis: "阅读计划应兼顾经典作品和个人兴趣读物。" },
      { type: "choice", difficulty: "hard", text: "信心与期待的重要性在于：", options: ["A. 盲目乐观", "B. 保持学习动力，面对挑战", "C. 骄傲自满", "D. 不思进取"], answer: "B", knowledgePoint: "学习信心", analysis: "保持信心和期待可以维持学习动力，勇敢面对挑战。" }
    ]
  }
];

window.subject_literature_questionBank = { questionBank };
// latin-questionBank.js
// 霍格沃茨拉丁语课程 - 一年级随堂测验题库
// 教授：米兰达·珀西瓦尔
// 每课3题：basic（+2分）、medium（0分，全对得E）、hard（-1分）

export const questionBank = [
  // ==================== 第1章 语言基础与词根（第1-4课） ====================
  { lesson: 1, title: "词根与词汇构建", questions: [
    { type: "choice", difficulty: "basic", text: "词根 「dict」 的含义是：", options: ["A. 写", "B. 说、声明", "C. 跑", "D. 看"], answer: "B", knowledgePoint: "词根dict", analysis: "dict 来自拉丁语 dicere（说），如 dictate（口述）、predict（预言）、contradict（反驳）。" },
    { type: "choice", difficulty: "medium", text: "单词 「unbreakable」 的词根是：", options: ["A. un-", "B. break", "C. -able", "D. -un-break"], answer: "B", knowledgePoint: "词根识别", analysis: "unbreakable = un（否定前缀）+ break（词根，打破）+ able（能够的后缀），词根是 break。" },
    { type: "choice", difficulty: "hard", text: "通过词根推断，「benevolent」最可能的意思是：（bene=好，vol=意愿）", options: ["A. 恶意的", "B. 善意的、仁慈的", "C. 暴力的", "D. 自愿的"], answer: "B", knowledgePoint: "词根推断词义", analysis: "bene（好）+ vol（意愿）+ -ent（形容词后缀）= 有好的意愿 = 善意的、仁慈的。" }
  ]},
  { lesson: 2, title: "基础词汇积累", questions: [
    { type: "choice", difficulty: "basic", text: "下列哪个单词是名词？", options: ["A. beautiful", "B. beauty", "C. beautify", "D. beautifully"], answer: "B", knowledgePoint: "词性识别", analysis: "beauty是名词，表示美丽；beautiful是形容词；beautify是动词；beautifully是副词。" },
    { type: "choice", difficulty: "medium", text: "「I'm looking forward to ______ you.」空格应填：", options: ["A. see", "B. seeing", "C. saw", "D. seen"], answer: "B", knowledgePoint: "介词搭配", analysis: "look forward to中的to是介词，后面应接动名词seeing。" },
    { type: "choice", difficulty: "hard", text: "下列短语搭配正确的是：", options: ["A. make a decision", "B. do a decision", "C. take a decision", "D. have a decision"], answer: "A", knowledgePoint: "动词短语搭配", analysis: "正确的搭配是make a decision（做决定），这是固定表达。" }
  ]},
  { lesson: 3, title: "词性识别", questions: [
    { type: "choice", difficulty: "basic", text: "「quickly」是什么词性？", options: ["A. 名词", "B. 动词", "C. 形容词", "D. 副词"], answer: "D", knowledgePoint: "副词识别", analysis: "-ly通常是副词后缀，quickly是quick的副词形式，修饰动词。" },
    { type: "choice", difficulty: "medium", text: "「He runs fast.」中「fast」是什么词性？", options: ["A. 形容词", "B. 副词", "C. 名词", "D. 动词"], answer: "B", knowledgePoint: "副词用法", analysis: "fast在这里修饰动词runs，说明动作的方式，是副词用法。" },
    { type: "choice", difficulty: "hard", text: "「The boy is tall.」中「is」是什么词？", options: ["A. 实义动词", "B. 助动词", "C. 系动词", "D. 情态动词"], answer: "C", knowledgePoint: "系动词", analysis: "is是系动词，连接主语和表语（tall），构成主系表结构。" }
  ]},
  { lesson: 4, title: "构词法进阶", questions: [
    { type: "choice", difficulty: "basic", text: "「toothbrush」是：", options: ["A. 派生词", "B. 合成词", "C. 转化词", "D. 缩写词"], answer: "B", knowledgePoint: "合成词", analysis: "toothbrush由tooth（牙齿）+ brush（刷子）合成，是合成词。" },
    { type: "choice", difficulty: "medium", text: "「email」是「electronic mail」的：", options: ["A. 派生词", "B. 合成词", "C. 缩写词", "D. 转化词"], answer: "C", knowledgePoint: "缩写词", analysis: "email是electronic mail的缩写形式。" },
    { type: "choice", difficulty: "hard", text: "「She watered the flowers.」中「watered」是：", options: ["A. 名词变动词", "B. 形容词变动词", "C. 副词变动词", "D. 动词变名词"], answer: "A", knowledgePoint: "转化词", analysis: "water在这里从名词（水）转化为动词（浇水），是名词变动词的转化。" }
  ]},

  // ==================== 第2章 语法结构基础（第5-8课） ====================
  { lesson: 5, title: "句子成分", questions: [
    { type: "choice", difficulty: "basic", text: "句子「The cat sleeps.」中，谓语是：", options: ["A. The", "B. cat", "C. sleeps", "D. 整个句子"], answer: "C", knowledgePoint: "谓语识别", analysis: "谓语是句子中描述主语动作或状态的动词。「sleeps」是动词，描述「cat」的动作，是谓语。" },
    { type: "choice", difficulty: "medium", text: "以下哪个句子是复合句（含从句）？", options: ["A. She sings and dances.", "B. She sings because she is happy.", "C. She is a singer.", "D. She sings well."], answer: "B", knowledgePoint: "句子类型", analysis: "复合句含有一个主句和至少一个从句，由连词连接。B中「because she is happy」是原因状语从句，所以B是复合句。A是并列句。" },
    { type: "choice", difficulty: "hard", text: "「The book that she recommended was excellent.」中，「that she recommended」是：", options: ["A. 主语", "B. 定语从句，修饰 book", "C. 宾语从句", "D. 状语从句"], answer: "B", knowledgePoint: "定语从句", analysis: "that she recommended 是关系从句，修饰名词 book（哪本书？她推荐的那本），是定语从句。" }
  ]},
  { lesson: 6, title: "句子类型", questions: [
    { type: "choice", difficulty: "basic", text: "「What a beautiful day!」是什么类型的句子？", options: ["A. 陈述句", "B. 疑问句", "C. 祈使句", "D. 感叹句"], answer: "D", knowledgePoint: "感叹句", analysis: "感叹句表达强烈的情感，以what或how开头，句末用感叹号。" },
    { type: "choice", difficulty: "medium", text: "「Close the door.」是什么类型的句子？", options: ["A. 陈述句", "B. 疑问句", "C. 祈使句", "D. 感叹句"], answer: "C", knowledgePoint: "祈使句", analysis: "祈使句用来表示请求、命令或建议，通常省略主语you。" },
    { type: "choice", difficulty: "hard", text: "「I think that he is right.」中「that he is right」是：", options: ["A. 主语从句", "B. 宾语从句", "C. 表语从句", "D. 定语从句"], answer: "B", knowledgePoint: "宾语从句", analysis: "that引导的从句作为动词think的宾语，是宾语从句。" }
  ]},
  { lesson: 7, title: "名词与冠词", questions: [
    { type: "choice", difficulty: "basic", text: "「water」是：", options: ["A. 可数名词", "B. 不可数名词", "C. 既可数又不可数", "D. 专有名词"], answer: "B", knowledgePoint: "不可数名词", analysis: "water（水）是不可数名词，不能说a water或waters（除非指水域）。" },
    { type: "choice", difficulty: "medium", text: "「______ apple a day keeps the doctor away.」空格应填：", options: ["A. A", "B. An", "C. The", "D. /"], answer: "B", knowledgePoint: "不定冠词", analysis: "apple以元音音素开头，应使用an。" },
    { type: "choice", difficulty: "hard", text: "「______ Great Wall is in China.」空格应填：", options: ["A. A", "B. An", "C. The", "D. /"], answer: "C", knowledgePoint: "定冠词", analysis: "the用于专有名词前，Great Wall是特定的专有名词，需要用the。" }
  ]},
  { lesson: 8, title: "代词", questions: [
    { type: "choice", difficulty: "basic", text: "「This is my book. That is ______.」空格应填：", options: ["A. your", "B. yours", "C. you", "D. yourself"], answer: "B", knowledgePoint: "名词性物主代词", analysis: "yours是名词性物主代词，相当于your book。" },
    { type: "choice", difficulty: "medium", text: "「He hurt ______ yesterday.」空格应填：", options: ["A. him", "B. his", "C. himself", "D. he"], answer: "C", knowledgePoint: "反身代词", analysis: "hurt oneself表示自己伤到自己，这里用himself。" },
    { type: "choice", difficulty: "hard", text: "「______ of the students has a book.」空格应填：", options: ["A. Each", "B. Every", "C. All", "D. Both"], answer: "A", knowledgePoint: "不定代词", analysis: "each of+复数名词作主语时，谓语动词用单数has。every不能与of连用。" }
  ]},

  // ==================== 第3章 时态系统（第9-14课） ====================
  { lesson: 9, title: "一般现在时", questions: [
    { type: "choice", difficulty: "basic", text: "He ______ to school every day.", options: ["A. go", "B. goes", "C. went", "D. going"], answer: "B", knowledgePoint: "一般现在时第三人称单数", analysis: "主语是第三人称单数He，一般现在时动词需要加s/es，所以用goes。" },
    { type: "choice", difficulty: "medium", text: "The sun ______ in the east.", options: ["A. rise", "B. rises", "C. rose", "D. rising"], answer: "B", knowledgePoint: "客观事实", analysis: "太阳从东方升起是客观事实，用一般现在时，主语是第三人称单数，所以用rises。" },
    { type: "choice", difficulty: "hard", text: "Which sentence uses simple present tense correctly?", options: ["A. I am eat breakfast now.", "B. She drink coffee every morning.", "C. They play football on weekends.", "D. He go to school by bus."], answer: "C", knowledgePoint: "一般现在时用法", analysis: "C选项正确使用了一般现在时表示习惯性动作。A应该用现在进行时，B和D的动词形式错误。" }
  ]},
  { lesson: 10, title: "现在进行时", questions: [
    { type: "choice", difficulty: "basic", text: "She ______ TV now.", options: ["A. watch", "B. watches", "C. is watching", "D. watched"], answer: "C", knowledgePoint: "现在进行时", analysis: "now表示现在正在进行的动作，用现在进行时is watching。" },
    { type: "choice", difficulty: "medium", text: "「They are building a bridge.」的否定句是：", options: ["A. They are not build a bridge.", "B. They are not building a bridge.", "C. They not building a bridge.", "D. They don't building a bridge."], answer: "B", knowledgePoint: "现在进行时否定", analysis: "现在进行时的否定是在be动词后加not，动词保持-ing形式。" },
    { type: "choice", difficulty: "hard", text: "「He is always complaining.」表示：", options: ["A. 他正在抱怨", "B. 他总是抱怨（带有不满情绪）", "C. 他曾经抱怨", "D. 他将要抱怨"], answer: "B", knowledgePoint: "现在进行时特殊用法", analysis: "现在进行时与always连用表示反复的动作，通常带有感情色彩（如不满、赞扬等）。" }
  ]},
  { lesson: 11, title: "一般过去时", questions: [
    { type: "choice", difficulty: "basic", text: "She ______ to the park yesterday.", options: ["A. go", "B. goes", "C. went", "D. gone"], answer: "C", knowledgePoint: "一般过去时", analysis: "yesterday表示过去时间，用一般过去时went。" },
    { type: "choice", difficulty: "medium", text: "「I saw him yesterday.」的否定句是：", options: ["A. I not saw him yesterday.", "B. I didn't see him yesterday.", "C. I didn't saw him yesterday.", "D. I saw not him yesterday."], answer: "B", knowledgePoint: "一般过去时否定", analysis: "一般过去时的否定需要用助动词did，动词还原为原形see。" },
    { type: "choice", difficulty: "hard", text: "Which verb is irregular in past tense?", options: ["A. walk", "B. talk", "C. think", "D. work"], answer: "C", knowledgePoint: "不规则动词", analysis: "think的过去式是thought，是不规则变化。其他选项都是规则变化，加-ed。" }
  ]},
  { lesson: 12, title: "过去进行时", questions: [
    { type: "choice", difficulty: "basic", text: "He ______ when I arrived.", options: ["A. slept", "B. was sleeping", "C. sleeps", "D. is sleeping"], answer: "B", knowledgePoint: "过去进行时", analysis: "arrived是过去的时间点，当时正在发生的动作用过去进行时was sleeping。" },
    { type: "choice", difficulty: "medium", text: "「They were playing football.」的一般疑问句是：", options: ["A. Were they playing football?", "B. Did they playing football?", "C. Are they playing football?", "D. Do they playing football?"], answer: "A", knowledgePoint: "过去进行时疑问", analysis: "过去进行时的疑问句将be动词were提前。" },
    { type: "choice", difficulty: "hard", text: "「While I was reading, he came.」中两个动作的关系是：", options: ["A. 同时发生", "B. reading先发生，came后发生", "C. reading正在进行时came发生", "D. came正在进行时reading发生"], answer: "C", knowledgePoint: "过去进行时与一般过去时", analysis: "while引导的从句用过去进行时，表示背景动作，主句用一般过去时，表示在背景动作过程中发生的短暂动作。" }
  ]},
  { lesson: 13, title: "一般将来时", questions: [
    { type: "choice", difficulty: "basic", text: "I ______ to Beijing tomorrow.", options: ["A. go", "B. went", "C. will go", "D. have gone"], answer: "C", knowledgePoint: "一般将来时", analysis: "tomorrow表示将来时间，用will+动词原形。" },
    { type: "choice", difficulty: "medium", text: "「He is going to buy a book.」表示：", options: ["A. 计划好的动作", "B. 临时决定的动作", "C. 客观必然", "D. 过去的计划"], answer: "A", knowledgePoint: "be going to用法", analysis: "be going to表示计划、打算做某事，或有迹象表明将要发生。" },
    { type: "choice", difficulty: "hard", text: "「The train leaves at 8 o'clock.」表示：", options: ["A. 经常性动作", "B. 将来时间的安排", "C. 现在正在离开", "D. 过去的离开"], answer: "B", knowledgePoint: "一般现在时表将来", analysis: "表示按时刻表、日程安排的将来动作，可用一般现在时。" }
  ]},
  { lesson: 14, title: "现在完成时", questions: [
    { type: "choice", difficulty: "basic", text: "I ______ finished my homework.", options: ["A. have", "B. has", "C. had", "D. am"], answer: "A", knowledgePoint: "现在完成时", analysis: "主语是I，现在完成时用have+过去分词finished。" },
    { type: "choice", difficulty: "medium", text: "「Have you ever been to London?」中「ever」的意思是：", options: ["A. 曾经", "B. 永远", "C. 甚至", "D. 总是"], answer: "A", knowledgePoint: "现在完成时副词", analysis: "ever用于现在完成时疑问句中，表示「曾经」。" },
    { type: "choice", difficulty: "hard", text: "「I have lived here for 10 years.」与「I lived here for 10 years.」的区别是：", options: ["A. 意思相同", "B. 前者表示现在还住在这里，后者表示过去住在这里", "C. 前者表示过去住在这里，后者表示现在还住在这里", "D. 前者是错误用法"], answer: "B", knowledgePoint: "现在完成时与一般过去时", analysis: "现在完成时强调过去动作对现在的影响或延续到现在；一般过去时只表示过去的动作。" }
  ]},

  // ==================== 第4章 英式发音与语调（第15-18课） ====================
  { lesson: 15, title: "标准英音（RP）", questions: [
    { type: "choice", difficulty: "basic", text: "RP 指的是：", options: ["A. 美国标准发音", "B. 英国标准发音", "C. 澳大利亚发音", "D. 加拿大发音"], answer: "B", knowledgePoint: "RP发音", analysis: "RP是Received Pronunciation的缩写，指英国标准发音，是BBC英语和牛津剑桥等大学使用的发音。" },
    { type: "choice", difficulty: "medium", text: "在英式发音中，「schedule」通常读作：", options: ["A. /ˈskedʒuːl/", "B. /ˈʃedjuːl/", "C. /ˈskedʒəl/", "D. /ˈʃedʒəl/"], answer: "B", knowledgePoint: "英式美式发音差异", analysis: "英式发音中schedule读作/ˈʃedjuːl/，而美式发音通常读作/ˈskedʒuːl/。" },
    { type: "choice", difficulty: "hard", text: "以下哪个单词在英式和美式发音中重音位置不同？", options: ["A. record（名词）", "B. tomato", "C. banana", "D. computer"], answer: "A", knowledgePoint: "重音差异", analysis: "record作为名词时，英式发音重音在第一个音节/ˈrekɔːd/，美式发音也在第一个音节/ˈrekərd/，但作为动词时重音位置不同。" }
  ]},
  { lesson: 16, title: "连读与省音", questions: [
    { type: "choice", difficulty: "basic", text: "「not at all」在口语中通常读作：", options: ["A. /nɒt æt ɔːl/", "B. /nɒt ət ɔːl/", "C. /nɒtætɔːl/", "D. /nɒ æt ɔːl/"], answer: "B", knowledgePoint: "弱读", analysis: "at在句子中通常弱读为/ət/。" },
    { type: "choice", difficulty: "medium", text: "「I am going to...」在口语中常简化为：", options: ["A. I am gonna...", "B. I'm gonna...", "C. I am going to...", "D. I go to..."], answer: "B", knowledgePoint: "口语简化", analysis: "I am常缩写为I'm，going to常简化为gonna。" },
    { type: "choice", difficulty: "hard", text: "「want to」在口语中常读作：", options: ["A. /wɒnt tuː/", "B. /wɒnt tə/", "C. /wɒn tə/", "D. /wɔːn tuː/"], answer: "C", knowledgePoint: "连读与省音", analysis: "want to在口语中常发生省音，读作/wɒn tə/或/wɒnna/。" }
  ]},
  { lesson: 17, title: "语调与节奏", questions: [
    { type: "choice", difficulty: "basic", text: "一般疑问句通常用：", options: ["A. 升调", "B. 降调", "C. 平调", "D. 先升后降"], answer: "A", knowledgePoint: "疑问句语调", analysis: "一般疑问句通常用升调，表示疑问。" },
    { type: "choice", difficulty: "medium", text: "陈述句通常用：", options: ["A. 升调", "B. 降调", "C. 平调", "D. 先降后升"], answer: "B", knowledgePoint: "陈述句语调", analysis: "陈述句通常用降调，表示陈述或完结。" },
    { type: "choice", difficulty: "hard", text: "「You're coming, aren't you?」这句话的语调是：", options: ["A. 全部升调", "B. 前升后降", "C. 前降后升", "D. 全部降调"], answer: "C", knowledgePoint: "反义疑问句语调", analysis: "反义疑问句前半句用降调，后半句通常用升调，表示询问确认。" }
  ]},
  { lesson: 18, title: "音标学习", questions: [
    { type: "choice", difficulty: "basic", text: "国际音标中，长元音用什么符号表示？", options: ["A. 短横线 -", "B. 冒号 :", "C. 点 ·", "D. 波浪线 ~"], answer: "B", knowledgePoint: "长元音符号", analysis: "国际音标中长元音用冒号表示，如/iː/、/ɑː/。" },
    { type: "choice", difficulty: "medium", text: "「ship」和「sheep」的区别在于：", options: ["A. 辅音不同", "B. 元音长短不同", "C. 重音不同", "D. 声调不同"], answer: "B", knowledgePoint: "长短元音", analysis: "ship读作/ʃɪp/（短元音），sheep读作/ʃiːp/（长元音）。" },
    { type: "choice", difficulty: "hard", text: "以下哪个是双元音？", options: ["A. /iː/", "B. /e/", "C. /eɪ/", "D. /æ/"], answer: "C", knowledgePoint: "双元音", analysis: "双元音由两个元音音素组成，/eɪ/是双元音，如在day中。" }
  ]},

  // ==================== 第5章 英式英语特色（第19-22课） ====================
  { lesson: 19, title: "英式与美式差异", questions: [
    { type: "choice", difficulty: "basic", text: "在英式英语中，「电梯」应该说：", options: ["A. elevator", "B. lift", "C. escalator", "D. staircase"], answer: "B", knowledgePoint: "英式美式词汇差异", analysis: "lift是英式英语的说法，elevator是美式英语。这种差异源于历史上不同的词汇发展路径。" },
    { type: "choice", difficulty: "medium", text: "以下哪组拼写是英式英语的正确拼写？", options: ["A. color, center, theater", "B. colour, centre, theatre", "C. colour, center, theater", "D. color, centre, theatre"], answer: "B", knowledgePoint: "英式美式拼写差异", analysis: "英式英语保留了更多法语拼写特征：colour（美式color）、centre（美式center）、theatre（美式theater）。" },
    { type: "choice", difficulty: "hard", text: "在英式英语中，「地铁」通常称为：", options: ["A. subway", "B. metro", "C. tube", "D. underground"], answer: "C", knowledgePoint: "英式英语特有词汇", analysis: "伦敦地铁被称为the Tube（管子），因其隧道形状而得名。underground也可使用，但tube是更具特色的称呼。" }
  ]},
  { lesson: 20, title: "英语的历史层次", questions: [
    { type: "choice", difficulty: "basic", text: "英语属于哪个语系？", options: ["A. 拉丁语系", "B. 日耳曼语系", "C. 罗曼语系", "D. 斯拉夫语系"], answer: "B", knowledgePoint: "英语语系", analysis: "英语属于日耳曼语系，与德语、荷兰语等同属一支。" },
    { type: "choice", difficulty: "medium", text: "英语中大量法语词汇来自：", options: ["A. 古罗马时期", "B. 诺曼征服", "C. 工业革命", "D. 殖民时期"], answer: "B", knowledgePoint: "法语词汇来源", analysis: "1066年诺曼征服后，法语成为英国上层社会的语言，大量法语词汇进入英语。" },
    { type: "choice", difficulty: "hard", text: "以下哪个单词来自拉丁语？", options: ["A. house", "B. water", "C. school", "D. book"], answer: "C", knowledgePoint: "拉丁语借词", analysis: "school来自拉丁语schola，而house、water、book都是古英语词汇。" }
  ]},
  { lesson: 21, title: "不列颠文化背景", questions: [
    { type: "choice", difficulty: "basic", text: "《牛津英语词典》是哪个国家的词典？", options: ["A. 美国", "B. 英国", "C. 加拿大", "D. 澳大利亚"], answer: "B", knowledgePoint: "牛津词典", analysis: "《牛津英语词典》是英国牛津大学出版社出版的权威词典。" },
    { type: "choice", difficulty: "medium", text: "伦敦是英国的：", options: ["A. 政治中心", "B. 文化中心", "C. 语言中心", "D. 以上都是"], answer: "D", knowledgePoint: "伦敦的地位", analysis: "伦敦是英国的首都，是政治、文化和语言的中心。" },
    { type: "choice", difficulty: "hard", text: "为什么英语成为全球通用语言？", options: ["A. 发音简单", "B. 语法简单", "C. 历史原因（殖民、科技、文化影响）", "D. 词汇最少"], answer: "C", knowledgePoint: "英语全球化", analysis: "英语成为全球通用语言主要是历史原因：大英帝国的殖民扩张、美国的科技文化影响力等。" }
  ]},
  { lesson: 22, title: "日常交际用语", questions: [
    { type: "choice", difficulty: "basic", text: "英国人见面常用的问候语是：", options: ["A. What's up?", "B. How do you do?", "C. Hey man!", "D. What's going on?"], answer: "B", knowledgePoint: "英式问候", analysis: "How do you do?是英式英语中正式的问候语。" },
    { type: "choice", difficulty: "medium", text: "在英式英语中，表达感谢最常用的是：", options: ["A. Thanks a lot!", "B. Thank you!", "C. Cheers!", "D. All of above"], answer: "D", knowledgePoint: "感谢表达", analysis: "英式英语中可以用Thank you、Thanks a lot、Cheers等表达感谢。" },
    { type: "choice", difficulty: "hard", text: "「I'm sorry.」在英式英语中不用于：", options: ["A. 道歉", "B. 表示遗憾", "C. 吸引注意", "D. 表示同意"], answer: "D", knowledgePoint: "sorry的用法", analysis: "sorry可以表示道歉、遗憾或吸引注意，但不能表示同意。" }
  ]},

  // ==================== 第6章 第一学期期中复习与考试（第23-27课） ====================
  { lesson: 23, title: "词汇专题复习", questions: [
    { type: "choice", difficulty: "basic", text: "「unhappiness」的词根是：", options: ["A. un-", "B. happy", "C. -ness", "D. unhappi"], answer: "B", knowledgePoint: "词根识别", analysis: "unhappiness = un（否定前缀）+ happy（词根）+ -ness（名词后缀）。" },
    { type: "choice", difficulty: "medium", text: "下列哪个是派生词？", options: ["A. blackboard", "B. internet", "C. happiness", "D. toothpaste"], answer: "C", knowledgePoint: "派生词", analysis: "happiness由happy加后缀-ness构成，是派生词。其他选项是合成词。" },
    { type: "choice", difficulty: "hard", text: "「-tion」后缀通常将动词变为：", options: ["A. 形容词", "B. 名词", "C. 副词", "D. 动词"], answer: "B", knowledgePoint: "后缀功能", analysis: "-tion是名词后缀，如educate（动词）→ education（名词）。" }
  ]},
  { lesson: 24, title: "语法专题复习", questions: [
    { type: "choice", difficulty: "basic", text: "「He has been working here for 5 years.」是什么时态？", options: ["A. 现在完成时", "B. 现在完成进行时", "C. 过去完成时", "D. 现在进行时"], answer: "B", knowledgePoint: "时态识别", analysis: "has been working是现在完成进行时，表示从过去开始持续到现在的动作。" },
    { type: "choice", difficulty: "medium", text: "「If it rains tomorrow, we will stay at home.」是：", options: ["A. 真实条件句", "B. 虚拟条件句", "C. 疑问句", "D. 祈使句"], answer: "A", knowledgePoint: "条件句", analysis: "这是真实条件句，谈论可能发生的情况。" },
    { type: "choice", difficulty: "hard", text: "「She said that she would come.」中「would come」表示：", options: ["A. 过去将来时", "B. 一般将来时", "C. 现在完成时", "D. 一般过去时"], answer: "A", knowledgePoint: "时态呼应", analysis: "would come是过去将来时，表示从过去看将来要发生的动作。" }
  ]},
  { lesson: 25, title: "听说专题复习", questions: [
    { type: "choice", difficulty: "basic", text: "听力中，「gonna」是哪个短语的缩写？", options: ["A. got to", "B. going to", "C. get to", "D. gone to"], answer: "B", knowledgePoint: "口语缩写", analysis: "gonna是going to的口语缩写形式。" },
    { type: "choice", difficulty: "medium", text: "口语中「wanna」表示：", options: ["A. want a", "B. want to", "C. was not", "D. will not"], answer: "B", knowledgePoint: "口语缩写", analysis: "wanna是want to的口语缩写形式。" },
    { type: "choice", difficulty: "hard", text: "「How do you do?」的正确回应是：", options: ["A. I'm fine, thank you.", "B. How do you do?", "C. Fine, and you?", "D. I'm doing well."], answer: "B", knowledgePoint: "交际用语", analysis: "How do you do?是一种正式问候，回应也是How do you do?" }
  ]},
  { lesson: 26, title: "综合练习", questions: [
    { type: "choice", difficulty: "basic", text: "「My mother ______ dinner now.」空格应填：", options: ["A. cook", "B. cooks", "C. is cooking", "D. cooked"], answer: "C", knowledgePoint: "现在进行时", analysis: "now表示正在进行的动作，用现在进行时。" },
    { type: "choice", difficulty: "medium", text: "「I have ______ finished my homework.」空格应填：", options: ["A. already", "B. yet", "C. ever", "D. never"], answer: "A", knowledgePoint: "副词用法", analysis: "already用于肯定句中表示「已经」。" },
    { type: "choice", difficulty: "hard", text: "「Neither he nor I ______ wrong.」空格应填：", options: ["A. am", "B. is", "C. are", "D. be"], answer: "A", knowledgePoint: "主谓一致", analysis: "neither...nor...连接两个主语时，谓语动词与最近的主语保持一致，I是最近的主语，所以用am。" }
  ]},

  // ==================== 第7章 语法进阶（第28-31课） ====================
  { lesson: 28, title: "情态动词", questions: [
    { type: "choice", difficulty: "basic", text: "______ you pass me the book?", options: ["A. Must", "B. Can", "C. Should", "D. Have to"], answer: "B", knowledgePoint: "请求用语", analysis: "Can用于礼貌地请求帮助，是最常用的请求方式。" },
    { type: "choice", difficulty: "medium", text: "You ______ finish your homework before watching TV.", options: ["A. can", "B. may", "C. must", "D. could"], answer: "C", knowledgePoint: "必须做某事", analysis: "must表示义务或必要性，这里表示必须先完成作业。" },
    { type: "choice", difficulty: "hard", text: "He ______ be at home. His car is not in the garage.", options: ["A. must", "B. can't", "C. may", "D. should"], answer: "B", knowledgePoint: "否定推测", analysis: "根据证据（车不在车库）进行否定推测，用can't表示不可能。" }
  ]},
  { lesson: 29, title: "非谓语动词", questions: [
    { type: "choice", difficulty: "basic", text: "「I want ______ to the park.」空格应填：", options: ["A. go", "B. going", "C. to go", "D. went"], answer: "C", knowledgePoint: "动词不定式", analysis: "want后接动词不定式to go。" },
    { type: "choice", difficulty: "medium", text: "「She enjoys ______ books.」空格应填：", options: ["A. read", "B. reading", "C. to read", "D. reads"], answer: "B", knowledgePoint: "动名词", analysis: "enjoy后接动名词reading。" },
    { type: "choice", difficulty: "hard", text: "「______ from the top of the hill, the city looks beautiful.」空格应填：", options: ["A. See", "B. Seeing", "C. Seen", "D. To see"], answer: "C", knowledgePoint: "分词作状语", analysis: "the city与see是被动关系，用过去分词Seen。" }
  ]},
  { lesson: 30, title: "比较级与最高级", questions: [
    { type: "choice", difficulty: "basic", text: "「tall」的比较级是：", options: ["A. tall", "B. taller", "C. tallest", "D. more tall"], answer: "B", knowledgePoint: "比较级", analysis: "tall是单音节词，比较级直接加-er。" },
    { type: "choice", difficulty: "medium", text: "「beautiful」的最高级是：", options: ["A. beautifuler", "B. beautifulest", "C. more beautiful", "D. most beautiful"], answer: "D", knowledgePoint: "最高级", analysis: "beautiful是多音节词，最高级用most。" },
    { type: "choice", difficulty: "hard", text: "「This book is ______ interesting than that one.」空格应填：", options: ["A. more", "B. most", "C. much", "D. many"], answer: "A", knowledgePoint: "比较级修饰", analysis: "interesting是多音节词，比较级用more。" }
  ]},
  { lesson: 31, title: "介词与连词", questions: [
    { type: "choice", difficulty: "basic", text: "「I'm good ______ English.」空格应填：", options: ["A. at", "B. in", "C. on", "D. for"], answer: "A", knowledgePoint: "介词搭配", analysis: "be good at表示擅长于。" },
    { type: "choice", difficulty: "medium", text: "「She stayed home ______ she was sick.」空格应填：", options: ["A. because", "B. so", "C. but", "D. and"], answer: "A", knowledgePoint: "连词", analysis: "because表示原因，解释她待在家里的原因。" },
    { type: "choice", difficulty: "hard", text: "「We will go out ______ it doesn't rain.」空格应填：", options: ["A. if", "B. unless", "C. because", "D. though"], answer: "A", knowledgePoint: "条件连词", analysis: "if表示条件，意思是如果不下雨我们就出去。" }
  ]},

  // ==================== 第8章 句型转换与复合句（第32-35课） ====================
  { lesson: 32, title: "否定句与疑问句", questions: [
    { type: "choice", difficulty: "basic", text: "「He likes coffee.」的否定句是：", options: ["A. He not likes coffee.", "B. He doesn't likes coffee.", "C. He doesn't like coffee.", "D. He like not coffee."], answer: "C", knowledgePoint: "否定句", analysis: "一般现在时的否定需要用助动词doesn't，动词还原为原形like。" },
    { type: "choice", difficulty: "medium", text: "「She is reading.」的一般疑问句是：", options: ["A. Does she reading?", "B. Is she reading?", "C. She is reading?", "D. Do she reading?"], answer: "B", knowledgePoint: "疑问句", analysis: "现在进行时的疑问句将be动词is提前。" },
    { type: "choice", difficulty: "hard", text: "「He can swim.」的反义疑问句是：", options: ["A. He can swim, can he?", "B. He can swim, can't he?", "C. He can swim, doesn't he?", "D. He can swim, isn't he?"], answer: "B", knowledgePoint: "反义疑问句", analysis: "反义疑问句前肯后否，can的否定式是can't。" }
  ]},
  { lesson: 33, title: "宾语从句", questions: [
    { type: "choice", difficulty: "basic", text: "「I think ______ he is right.」空格应填：", options: ["A. that", "B. if", "C. whether", "D. what"], answer: "A", knowledgePoint: "宾语从句连接词", analysis: "that引导陈述句宾语从句，that可以省略。" },
    { type: "choice", difficulty: "medium", text: "「I don't know ______ he will come.」空格应填：", options: ["A. that", "B. if", "C. what", "D. which"], answer: "B", knowledgePoint: "宾语从句连接词", analysis: "if表示「是否」，用于引导疑问句宾语从句。" },
    { type: "choice", difficulty: "hard", text: "「She asked me ______ I had seen.」空格应填：", options: ["A. that", "B. if", "C. what", "D. whether"], answer: "C", knowledgePoint: "宾语从句连接词", analysis: "what在从句中作seen的宾语，引导名词性从句。" }
  ]},
  { lesson: 34, title: "状语从句", questions: [
    { type: "choice", difficulty: "basic", text: "「I will call you ______ I arrive.」空格应填：", options: ["A. when", "B. if", "C. because", "D. though"], answer: "A", knowledgePoint: "时间状语从句", analysis: "when表示「当...时候」，引导时间状语从句。" },
    { type: "choice", difficulty: "medium", text: "「We will go ______ it rains.」空格应填：", options: ["A. if", "B. unless", "C. because", "D. when"], answer: "B", knowledgePoint: "条件状语从句", analysis: "unless表示「除非」，意思是除非下雨我们才不去。" },
    { type: "choice", difficulty: "hard", text: "「He ran ______ fast ______ he won the race.」空格应填：", options: ["A. so, that", "B. such, that", "C. too, to", "D. enough, to"], answer: "A", knowledgePoint: "结果状语从句", analysis: "so+形容词/副词+that表示「如此...以至于」，引导结果状语从句。" }
  ]},
  { lesson: 35, title: "定语从句", questions: [
    { type: "choice", difficulty: "basic", text: "「This is the book ______ I bought.」空格应填：", options: ["A. who", "B. which", "C. what", "D. whose"], answer: "B", knowledgePoint: "定语从句关系代词", analysis: "which指代物（book），在从句中作宾语。" },
    { type: "choice", difficulty: "medium", text: "「The girl ______ is standing there is my sister.」空格应填：", options: ["A. who", "B. which", "C. what", "D. where"], answer: "A", knowledgePoint: "定语从句关系代词", analysis: "who指代人（girl），在从句中作主语。" },
    { type: "choice", difficulty: "hard", text: "「This is the house ______ I lived when I was young.」空格应填：", options: ["A. which", "B. that", "C. where", "D. when"], answer: "C", knowledgePoint: "定语从句关系副词", analysis: "where指代地点（house），在从句中作地点状语。" }
  ]},

  // ==================== 第9章 阅读与写作（第36-40课） ====================
  { lesson: 36, title: "阅读理解技巧", questions: [
    { type: "choice", difficulty: "basic", text: "阅读理解中，把握文章主要内容的能力称为：", options: ["A. 细节理解", "B. 主旨大意", "C. 推理判断", "D. 词义猜测"], answer: "B", knowledgePoint: "阅读技能", analysis: "主旨大意是指理解文章的中心思想或主要内容。" },
    { type: "choice", difficulty: "medium", text: "When reading for details, you should:", options: ["A. Read quickly to get the main idea", "B. Look for specific information", "C. Guess unknown words", "D. Skip difficult parts"], answer: "B", knowledgePoint: "细节阅读", analysis: "细节阅读需要寻找特定的信息，如时间、地点、数字等。" },
    { type: "choice", difficulty: "hard", text: "根据上下文猜测词义时，最重要的是：", options: ["A. 查字典", "B. 看单词的拼写", "C. 理解句子语境", "D. 记住单词的词性"], answer: "C", knowledgePoint: "词义猜测", analysis: "语境是猜测词义的关键，通过上下文可以推断出单词的含义。" }
  ]},
  { lesson: 37, title: "记叙文阅读", questions: [
    { type: "choice", difficulty: "basic", text: "记叙文的六要素是：", options: ["A. 时间、地点、人物、起因、经过、结果", "B. 论点、论据、论证", "C. 开头、正文、结尾", "D. 记叙、描写、说明"], answer: "A", knowledgePoint: "记叙文要素", analysis: "记叙文的六要素是时间、地点、人物、起因、经过、结果。" },
    { type: "choice", difficulty: "medium", text: "记叙文的叙述顺序通常不包括：", options: ["A. 顺叙", "B. 倒叙", "C. 插叙", "D. 议论"], answer: "D", knowledgePoint: "叙述顺序", analysis: "议论是表达方式，不是叙述顺序。" },
    { type: "choice", difficulty: "hard", text: "记叙文的线索可以是：", options: ["A. 时间", "B. 空间", "C. 人物", "D. 以上都是"], answer: "D", knowledgePoint: "文章线索", analysis: "记叙文的线索可以是时间、空间、人物、事件、物品等。" }
  ]},
  { lesson: 38, title: "应用文写作", questions: [
    { type: "choice", difficulty: "basic", text: "英文书信的格式通常包括：", options: ["A. 日期、称呼、正文、结尾、签名", "B. 标题、正文、结尾", "C. 开头、正文、结尾", "D. 正文、签名"], answer: "A", knowledgePoint: "书信格式", analysis: "英文书信通常包括日期、称呼、正文、结尾敬语和签名。" },
    { type: "choice", difficulty: "medium", text: "英文邮件的主题行应该：", options: ["A. 空白", "B. 简洁明了", "C. 写满内容", "D. 用中文"], answer: "B", knowledgePoint: "邮件主题", analysis: "邮件主题应该简洁明了，让人一眼知道内容。" },
    { type: "choice", difficulty: "hard", text: "邀请信的结尾通常用：", options: ["A. Sincerely", "B. Yours faithfully", "C. Looking forward to your reply", "D. Best regards"], answer: "C", knowledgePoint: "邀请信结尾", analysis: "邀请信通常用Looking forward to your reply表示期待回复。" }
  ]},
  { lesson: 39, title: "记叙文写作", questions: [
    { type: "choice", difficulty: "basic", text: "记叙文的开头可以：", options: ["A. 开门见山", "B. 设置悬念", "C. 环境描写", "D. 以上都可以"], answer: "D", knowledgePoint: "开头方式", analysis: "记叙文开头可以采用多种方式：开门见山、设置悬念、环境描写等。" },
    { type: "choice", difficulty: "medium", text: "记叙文的细节描写不包括：", options: ["A. 外貌描写", "B. 语言描写", "C. 心理描写", "D. 论点阐述"], answer: "D", knowledgePoint: "细节描写", analysis: "论点阐述是议论文的要素，不是记叙文的细节描写。" },
    { type: "choice", difficulty: "hard", text: "记叙文的段落衔接常用：", options: ["A. 时间顺序词", "B. 空间顺序词", "C. 逻辑连接词", "D. 以上都是"], answer: "D", knowledgePoint: "段落衔接", analysis: "时间顺序词（first, then）、空间顺序词（near, far）、逻辑连接词（however, therefore）都可以用于段落衔接。" }
  ]},
  { lesson: 40, title: "说明文写作", questions: [
    { type: "choice", difficulty: "basic", text: "说明文的说明顺序不包括：", options: ["A. 时间顺序", "B. 空间顺序", "C. 逻辑顺序", "D. 抒情顺序"], answer: "D", knowledgePoint: "说明顺序", analysis: "抒情是表达方式，不是说明顺序。" },
    { type: "choice", difficulty: "medium", text: "说明文的语言特点是：", options: ["A. 生动形象", "B. 准确简洁", "C. 富有感情", "D. 夸张幽默"], answer: "B", knowledgePoint: "说明文语言", analysis: "说明文语言要求准确、简洁、客观。" },
    { type: "choice", difficulty: "hard", text: "说明文的结构通常是：", options: ["A. 总-分", "B. 分-总", "C. 总-分-总", "D. 以上都可以"], answer: "D", knowledgePoint: "说明文结构", analysis: "说明文可以采用总-分、分-总、总-分-总等结构。" }
  ]},

  // ==================== 第10章 第一学期期末复习与考试（第41-45课） ====================
  { lesson: 41, title: "全学期语法回顾", questions: [
    { type: "choice", difficulty: "basic", text: "英语中最基本的时态有：", options: ["A. 4种", "B. 6种", "C. 8种", "D. 12种"], answer: "B", knowledgePoint: "基本时态", analysis: "英语中最基本的6种时态是：一般现在时、现在进行时、一般过去时、过去进行时、一般将来时、现在完成时。" },
    { type: "choice", difficulty: "medium", text: "复合句包括：", options: ["A. 并列复合句", "B. 主从复合句", "C. 并列句", "D. A和B"], answer: "D", knowledgePoint: "复合句", analysis: "复合句包括并列复合句（由并列连词连接）和主从复合句（包含从句）。" },
    { type: "choice", difficulty: "hard", text: "主谓一致的基本原则是：", options: ["A. 主语和谓语在人称和数上保持一致", "B. 主语和谓语在时态上保持一致", "C. 主语和谓语在语态上保持一致", "D. 主语和谓语在语气上保持一致"], answer: "A", knowledgePoint: "主谓一致", analysis: "主谓一致的基本原则是主语和谓语在人称和数上保持一致。" }
  ]},
  { lesson: 42, title: "读写专题复习", questions: [
    { type: "choice", difficulty: "basic", text: "阅读理解的题型不包括：", options: ["A. 主旨题", "B. 细节题", "C. 计算题", "D. 推理题"], answer: "C", knowledgePoint: "阅读题型", analysis: "计算题不是阅读理解的常见题型。" },
    { type: "choice", difficulty: "medium", text: "写作中，段落的主题句通常在：", options: ["A. 段首", "B. 段尾", "C. 段中", "D. 以上都可以"], answer: "D", knowledgePoint: "主题句位置", analysis: "主题句可以在段首、段尾或段中，最常见的是段首。" },
    { type: "choice", difficulty: "hard", text: "英语写作中，连接词的作用是：", options: ["A. 增加字数", "B. 连接句子，使逻辑清晰", "C. 装饰文章", "D. 提高难度"], answer: "B", knowledgePoint: "连接词作用", analysis: "连接词用于连接句子和段落，使文章逻辑清晰、连贯。" }
  ]},
  { lesson: 43, title: "听说专题复习", questions: [
    { type: "choice", difficulty: "basic", text: "听力技巧不包括：", options: ["A. 提前阅读题目", "B. 抓住关键词", "C. 逐字翻译", "D. 注意语调"], answer: "C", knowledgePoint: "听力技巧", analysis: "逐字翻译不是有效的听力技巧，会影响理解速度。" },
    { type: "choice", difficulty: "medium", text: "口语表达的基本要求是：", options: ["A. 流利", "B. 准确", "C. 清晰", "D. 以上都是"], answer: "D", knowledgePoint: "口语要求", analysis: "口语表达要求流利、准确、清晰。" },
    { type: "choice", difficulty: "hard", text: "日常对话中，「Pardon?」表示：", options: ["A. 请再说一遍", "B. 对不起", "C. 原谅我", "D. 没关系"], answer: "A", knowledgePoint: "日常用语", analysis: "Pardon?用于没听清对方的话，请对方再说一遍。" }
  ]},
  { lesson: 44, title: "综合模拟", questions: [
    { type: "choice", difficulty: "basic", text: "考试中，时间管理的重要性在于：", options: ["A. 完成所有题目", "B. 检查答案", "C. 避免紧张", "D. 以上都是"], answer: "D", knowledgePoint: "时间管理", analysis: "合理的时间管理可以帮助完成所有题目、检查答案、避免紧张。" },
    { type: "choice", difficulty: "medium", text: "答题技巧不包括：", options: ["A. 先易后难", "B. 仔细审题", "C. 随意猜测", "D. 检查答案"], answer: "C", knowledgePoint: "答题技巧", analysis: "随意猜测不是好的答题技巧，应该根据知识和排除法来选择。" },
    { type: "choice", difficulty: "hard", text: "模拟考试的目的是：", options: ["A. 熟悉考试流程", "B. 发现薄弱环节", "C. 提高答题速度", "D. 以上都是"], answer: "D", knowledgePoint: "模拟考试", analysis: "模拟考试可以帮助熟悉流程、发现薄弱环节、提高答题速度。" }
  ]},

  // ==================== 第11章 第二学期语法拓展（第46-49课） ====================
  { lesson: 46, title: "过去完成时", questions: [
    { type: "choice", difficulty: "basic", text: "「He had finished his homework before I arrived.」是什么时态？", options: ["A. 一般过去时", "B. 过去完成时", "C. 现在完成时", "D. 过去进行时"], answer: "B", knowledgePoint: "过去完成时", analysis: "had finished是过去完成时，表示过去某时间之前已经完成的动作。" },
    { type: "choice", difficulty: "medium", text: "过去完成时的构成是：", options: ["A. had + 过去分词", "B. have + 过去分词", "C. was/were + 现在分词", "D. did + 动词原形"], answer: "A", knowledgePoint: "过去完成时构成", analysis: "过去完成时由had+过去分词构成。" },
    { type: "choice", difficulty: "hard", text: "「By the time I got there, the bus ______.」空格应填：", options: ["A. left", "B. has left", "C. had left", "D. was leaving"], answer: "C", knowledgePoint: "过去完成时用法", analysis: "by the time表示「到...时候为止」，通常与过去完成时连用。" }
  ]},
  { lesson: 47, title: "被动语态", questions: [
    { type: "choice", difficulty: "basic", text: "The letter ______ by Tom.", options: ["A. wrote", "B. writes", "C. was written", "D. is writing"], answer: "C", knowledgePoint: "被动语态构成", analysis: "被动语态由be动词+过去分词构成，这里用一般过去时的被动语态was written。" },
    { type: "choice", difficulty: "medium", text: "主动句「They built the bridge.」改为被动句是：", options: ["A. The bridge built them.", "B. The bridge was built by them.", "C. They were built the bridge.", "D. The bridge is built by them."], answer: "B", knowledgePoint: "主动变被动", analysis: "将主动句的宾语the bridge作为被动句的主语，谓语变为was built，动作执行者用by引出。" },
    { type: "choice", difficulty: "hard", text: "Which sentence is passive voice?", options: ["A. She will write a letter.", "B. The letter has been written.", "C. Writing is her hobby.", "D. She is writing a letter."], answer: "B", knowledgePoint: "被动语态识别", analysis: "B选项使用了现在完成时的被动语态has been written，其他选项都是主动语态。" }
  ]},
  { lesson: 48, title: "直接引语与间接引语", questions: [
    { type: "choice", difficulty: "basic", text: "直接引语变间接引语时，「I said, 'I am happy.'」变为：", options: ["A. I said that I am happy.", "B. I said that I was happy.", "C. I said that I be happy.", "D. I said that I were happy."], answer: "B", knowledgePoint: "时态变化", analysis: "直接引语变间接引语时，一般现在时变为一般过去时。" },
    { type: "choice", difficulty: "medium", text: "直接引语变间接引语时，人称变化正确的是：", options: ["A. I → I", "B. you → you", "C. he → he", "D. I → he（根据语境）"], answer: "D", knowledgePoint: "人称变化", analysis: "直接引语变间接引语时，人称需要根据语境进行调整。" },
    { type: "choice", difficulty: "hard", text: "「He said, 'I will come tomorrow.'」变为间接引语是：", options: ["A. He said that he will come tomorrow.", "B. He said that he would come tomorrow.", "C. He said that he would come the next day.", "D. He said that he will come the next day."], answer: "C", knowledgePoint: "时间状语变化", analysis: "tomorrow变为the next day，will变为would。" }
  ]},
  { lesson: 49, title: "主谓一致", questions: [
    { type: "choice", difficulty: "basic", text: "The book ______ on the desk.", options: ["A. is", "B. are", "C. am", "D. be"], answer: "A", knowledgePoint: "主谓一致", analysis: "主语the book是单数，谓语用is。" },
    { type: "choice", difficulty: "medium", text: "Neither the teacher nor the students ______ happy.", options: ["A. is", "B. are", "C. was", "D. be"], answer: "B", knowledgePoint: "主谓一致", analysis: "neither...nor...连接两个主语时，谓语与最近的主语保持一致，students是复数，所以用are。" },
    { type: "choice", difficulty: "hard", text: "The group ______ having a meeting.", options: ["A. is", "B. are", "C. am", "D. be"], answer: "A", knowledgePoint: "集体名词", analysis: "group作为一个整体时，谓语用单数is。" }
  ]},

  // ==================== 第12章 词汇与表达进阶（第50-53课） ====================
  { lesson: 50, title: "同义词与反义词", questions: [
    { type: "choice", difficulty: "basic", text: "「happy」的反义词是：", options: ["A. sad", "B. angry", "C. tired", "D. hungry"], answer: "A", knowledgePoint: "反义词", analysis: "happy（快乐的）的反义词是sad（悲伤的）。" },
    { type: "choice", difficulty: "medium", text: "「big」和「large」是：", options: ["A. 反义词", "B. 同义词", "C. 同音词", "D. 同形词"], answer: "B", knowledgePoint: "同义词", analysis: "big和large都表示「大的」，是同义词。" },
    { type: "choice", difficulty: "hard", text: "「beautiful」的近义词不包括：", options: ["A. pretty", "B. handsome", "C. ugly", "D. lovely"], answer: "C", knowledgePoint: "近义词", analysis: "ugly是beautiful的反义词，不是近义词。" }
  ]},
  { lesson: 51, title: "习语与俗语", questions: [
    { type: "choice", difficulty: "basic", text: "「Break a leg!」的意思是：", options: ["A. 摔断腿", "B. 祝你好运", "C. 小心点", "D. 快跑"], answer: "B", knowledgePoint: "习语", analysis: "Break a leg!是祝人好运的习语，常用于演出前。" },
    { type: "choice", difficulty: "medium", text: "「It's raining cats and dogs.」的意思是：", options: ["A. 下猫狗雨", "B. 下大雨", "C. 天气晴朗", "D. 刮风"], answer: "B", knowledgePoint: "习语", analysis: "It's raining cats and dogs.是表示下大雨的习语。" },
    { type: "choice", difficulty: "hard", text: "「A piece of cake.」的意思是：", options: ["A. 一块蛋糕", "B. 很容易", "C. 很难", "D. 很美味"], answer: "B", knowledgePoint: "习语", analysis: "A piece of cake.表示某事很容易。" }
  ]},
  { lesson: 52, title: "词汇搭配", questions: [
    { type: "choice", difficulty: "basic", text: "「make」的正确搭配是：", options: ["A. make a decision", "B. do a decision", "C. take a decision", "D. have a decision"], answer: "A", knowledgePoint: "动词搭配", analysis: "正确搭配是make a decision。" },
    { type: "choice", difficulty: "medium", text: "「take」的正确搭配是：", options: ["A. take a bath", "B. make a bath", "C. do a bath", "D. have a bath"], answer: "D", knowledgePoint: "动词搭配", analysis: "正确搭配是have a bath（英式）或take a bath（美式），选项中有D。" },
    { type: "choice", difficulty: "hard", text: "「look forward to」后接：", options: ["A. 动词原形", "B. 动名词", "C. 不定式", "D. 过去分词"], answer: "B", knowledgePoint: "动词短语", analysis: "look forward to中的to是介词，后接动名词。" }
  ]},
  { lesson: 53, title: "高级表达", questions: [
    { type: "choice", difficulty: "basic", text: "正式场合常用的表达是：", options: ["A. Hey!", "B. Hello!", "C. Hi!", "D. What's up?"], answer: "B", knowledgePoint: "正式表达", analysis: "Hello!比Hey!和Hi!更正式。" },
    { type: "choice", difficulty: "medium", text: "非正式场合常用的表达是：", options: ["A. Good morning.", "B. How do you do?", "C. What's up?", "D. Nice to meet you."], answer: "C", knowledgePoint: "非正式表达", analysis: "What's up?是非常非正式的问候语。" },
    { type: "choice", difficulty: "hard", text: "书面语中常用的连接词是：", options: ["A. and", "B. but", "C. however", "D. so"], answer: "C", knowledgePoint: "书面连接词", analysis: "however比but更正式，常用于书面语。" }
  ]},

  // ==================== 第13章 阅读与写作进阶（第54-58课） ====================
  { lesson: 54, title: "说明文阅读", questions: [
    { type: "choice", difficulty: "basic", text: "说明文的主要目的是：", options: ["A. 讲故事", "B. 说明事物", "C. 表达观点", "D. 抒发感情"], answer: "B", knowledgePoint: "说明文目的", analysis: "说明文的主要目的是说明事物、解释现象。" },
    { type: "choice", difficulty: "medium", text: "说明文的说明方法不包括：", options: ["A. 举例", "B. 对比", "C. 夸张", "D. 引用"], answer: "C", knowledgePoint: "说明方法", analysis: "夸张是修辞手法，不是说明方法。" },
    { type: "choice", difficulty: "hard", text: "图表阅读的关键是：", options: ["A. 看图说话", "B. 理解标题和图例", "C. 描述颜色", "D. 猜测数据"], answer: "B", knowledgePoint: "图表阅读", analysis: "理解标题和图例是图表阅读的关键。" }
  ]},
  { lesson: 55, title: "议论文阅读", questions: [
    { type: "choice", difficulty: "basic", text: "议论文的三要素是：", options: ["A. 时间、地点、人物", "B. 论点、论据、论证", "C. 开头、正文、结尾", "D. 记叙、描写、说明"], answer: "B", knowledgePoint: "议论文要素", analysis: "议论文需要有明确的论点、充分的论据和合理的论证过程。" },
    { type: "choice", difficulty: "medium", text: "议论文中支持论点的理由和证据称为：", options: ["A. 论点", "B. 论据", "C. 论证", "D. 结论"], answer: "B", knowledgePoint: "论据定义", analysis: "论据是用来支持论点的理由、事实和证据。" },
    { type: "choice", difficulty: "hard", text: "议论文的论证方法不包括：", options: ["A. 举例论证", "B. 对比论证", "C. 抒情描写", "D. 引用论证"], answer: "C", knowledgePoint: "论证方法", analysis: "抒情描写是文学写作的方法，不是议论文的论证方法。" }
  ]},
  { lesson: 56, title: "议论文写作", questions: [
    { type: "choice", difficulty: "basic", text: "议论文的论点应该：", options: ["A. 模糊不清", "B. 明确清晰", "C. 模棱两可", "D. 可有可无"], answer: "B", knowledgePoint: "论点要求", analysis: "议论文的论点应该明确、清晰，让读者一眼就能明白作者的观点。" },
    { type: "choice", difficulty: "medium", text: "议论文的论据应该：", options: ["A. 虚假", "B. 充分", "C. 无关", "D. 主观"], answer: "B", knowledgePoint: "论据要求", analysis: "论据应该充分、真实、有说服力，能够有力地支持论点。" },
    { type: "choice", difficulty: "hard", text: "议论文的结构通常是：", options: ["A. 总-分", "B. 分-总", "C. 总-分-总", "D. 以上都可以"], answer: "D", knowledgePoint: "议论文结构", analysis: "议论文可以采用总-分、分-总、总-分-总等结构。" }
  ]},
  { lesson: 57, title: "概要写作", questions: [
    { type: "choice", difficulty: "basic", text: "概要写作的目的是：", options: ["A. 详细复述", "B. 提取要点", "C. 增加内容", "D. 改写原文"], answer: "B", knowledgePoint: "概要写作", analysis: "概要写作的目的是提取原文的要点，用简洁的语言概括内容。" },
    { type: "choice", difficulty: "medium", text: "概要写作的语言应该：", options: ["A. 冗长", "B. 简洁", "C. 华丽", "D. 复杂"], answer: "B", knowledgePoint: "概要语言", analysis: "概要写作要求语言简洁，只保留核心信息。" },
    { type: "choice", difficulty: "hard", text: "概要写作应该：", options: ["A. 改变原意", "B. 保持原意", "C. 添加个人观点", "D. 省略重要信息"], answer: "B", knowledgePoint: "概要要求", analysis: "概要写作必须保持原文的意思，不能改变或歪曲。" }
  ]},
  { lesson: 58, title: "情景写作", questions: [
    { type: "choice", difficulty: "basic", text: "情景写作需要：", options: ["A. 忽略提示", "B. 理解情境", "C. 自由发挥", "D. 脱离主题"], answer: "B", knowledgePoint: "情景写作", analysis: "情景写作需要理解题目提供的情境，根据提示进行写作。" },
    { type: "choice", difficulty: "medium", text: "情景写作的语言应该：", options: ["A. 不恰当", "B. 得体", "C. 随意", "D. 夸张"], answer: "B", knowledgePoint: "语言得体", analysis: "情景写作需要根据情境选择合适的语言风格，做到语言得体。" },
    { type: "choice", difficulty: "hard", text: "情景写作的格式应该：", options: ["A. 混乱", "B. 正确", "C. 随意", "D. 省略"], answer: "B", knowledgePoint: "格式要求", analysis: "情景写作需要注意格式正确，如书信、邮件等有特定的格式要求。" }
  ]},

  // ==================== 第14章 第二学期期中复习与考试（第59-63课） ====================
  { lesson: 59, title: "语法专题复习", questions: [
    { type: "choice", difficulty: "basic", text: "被动语态的构成是：", options: ["A. be + 现在分词", "B. be + 过去分词", "C. have + 过去分词", "D. will + 动词原形"], answer: "B", knowledgePoint: "被动语态构成", analysis: "被动语态由be动词+过去分词构成。" },
    { type: "choice", difficulty: "medium", text: "间接引语中，时态需要：", options: ["A. 保持不变", "B. 相应变化", "C. 变为将来时", "D. 变为现在时"], answer: "B", knowledgePoint: "时态呼应", analysis: "直接引语变间接引语时，时态通常需要相应变化。" },
    { type: "choice", difficulty: "hard", text: "主谓一致的原则是：", options: ["A. 主语和谓语在人称和数上一致", "B. 主语和谓语在时态上一致", "C. 主语和谓语在语态上一致", "D. 主语和谓语在语气上一致"], answer: "A", knowledgePoint: "主谓一致", analysis: "主谓一致的基本原则是主语和谓语在人称和数上保持一致。" }
  ]},
  { lesson: 60, title: "读写专题复习", questions: [
    { type: "choice", difficulty: "basic", text: "各类文体阅读的共同点是：", options: ["A. 目的相同", "B. 方法相同", "C. 都需要理解", "D. 难度相同"], answer: "C", knowledgePoint: "阅读共同点", analysis: "无论哪种文体，阅读的核心都是理解内容。" },
    { type: "choice", difficulty: "medium", text: "写作技巧包括：", options: ["A. 结构清晰", "B. 语言准确", "C. 表达流畅", "D. 以上都是"], answer: "D", knowledgePoint: "写作技巧", analysis: "好的写作需要结构清晰、语言准确、表达流畅。" },
    { type: "choice", difficulty: "hard", text: "表达多样性指的是：", options: ["A. 使用复杂词汇", "B. 避免重复", "C. 使用长句", "D. 使用生僻词"], answer: "B", knowledgePoint: "表达多样性", analysis: "表达多样性指的是避免重复使用相同的词汇和句式，使文章更丰富。" }
  ]},
  { lesson: 61, title: "词汇专题复习", questions: [
    { type: "choice", difficulty: "basic", text: "习语的特点是：", options: ["A. 字面意思就是实际意思", "B. 不能按字面理解", "C. 结构简单", "D. 容易理解"], answer: "B", knowledgePoint: "习语特点", analysis: "习语通常不能按字面意思理解，需要记住其固定含义。" },
    { type: "choice", difficulty: "medium", text: "词汇搭配的重要性在于：", options: ["A. 增加字数", "B. 语言地道", "C. 提高难度", "D. 显示水平"], answer: "B", knowledgePoint: "搭配重要性", analysis: "正确的词汇搭配使语言更地道、更自然。" },
    { type: "choice", difficulty: "hard", text: "同义词辨析需要注意：", options: ["A. 完全相同", "B. 细微差别", "C. 没有差别", "D. 随意使用"], answer: "B", knowledgePoint: "同义词辨析", analysis: "同义词之间通常有细微的差别，需要根据语境选择合适的词。" }
  ]},
  { lesson: 62, title: "综合练习", questions: [
    { type: "choice", difficulty: "basic", text: "模拟测试的目的是：", options: ["A. 熟悉题型", "B. 发现问题", "C. 提高能力", "D. 以上都是"], answer: "D", knowledgePoint: "模拟测试", analysis: "模拟测试可以帮助熟悉题型、发现问题、提高能力。" },
    { type: "choice", difficulty: "medium", text: "错题分析的重要性在于：", options: ["A. 浪费时间", "B. 查漏补缺", "C. 增加负担", "D. 重复错误"], answer: "B", knowledgePoint: "错题分析", analysis: "错题分析可以帮助发现薄弱环节，进行针对性复习。" },
    { type: "choice", difficulty: "hard", text: "答题策略包括：", options: ["A. 先易后难", "B. 仔细审题", "C. 检查答案", "D. 以上都是"], answer: "D", knowledgePoint: "答题策略", analysis: "好的答题策略包括先易后难、仔细审题、检查答案等。" }
  ]},

  // ==================== 第15章 专题拓展（第64-67课） ====================
  { lesson: 64, title: "英语与魔法", questions: [
    { type: "choice", difficulty: "basic", text: "许多咒语的词源来自：", options: ["A. 拉丁语", "B. 希腊语", "C. 英语", "D. 以上都是"], answer: "D", knowledgePoint: "咒语词源", analysis: "许多咒语的词源来自拉丁语、希腊语和英语，反映了语言的古老魔力。" },
    { type: "choice", difficulty: "medium", text: "语言被称为「最古老的魔法」是因为：", options: ["A. 语言可以施魔法", "B. 语言具有表达和创造的力量", "C. 语言是巫师发明的", "D. 语言来自魔法世界"], answer: "B", knowledgePoint: "语言的魔力", analysis: "语言是人类最古老的表达方式，具有创造和改变现实的力量，因此被称为最古老的魔法。" },
    { type: "choice", difficulty: "hard", text: "词根「vis」（看）在魔法中的体现是：", options: ["A. 飞行咒语", "B. 变形咒语", "C. 视觉相关咒语", "D. 防御咒语"], answer: "C", knowledgePoint: "词根与魔法", analysis: "词根vis表示看，因此与视觉相关的咒语可能包含这个词根。" }
  ]},
  { lesson: 65, title: "英国文学选读", questions: [
    { type: "choice", difficulty: "basic", text: "莎士比亚是哪个国家的作家？", options: ["A. 美国", "B. 英国", "C. 法国", "D. 德国"], answer: "B", knowledgePoint: "莎士比亚", analysis: "威廉·莎士比亚是英国著名剧作家和诗人。" },
    { type: "choice", difficulty: "medium", text: "《哈姆雷特》是莎士比亚的：", options: ["A. 喜剧", "B. 悲剧", "C. 历史剧", "D. 传奇剧"], answer: "B", knowledgePoint: "哈姆雷特", analysis: "《哈姆雷特》是莎士比亚最著名的悲剧作品之一。" },
    { type: "choice", difficulty: "hard", text: "英国文学的特点是：", options: ["A. 浪漫主义", "B. 现实主义", "C. 多样性", "D. 单一性"], answer: "C", knowledgePoint: "英国文学", analysis: "英国文学历史悠久，风格多样，包括浪漫主义、现实主义、现代主义等多种流派。" }
  ]},
  { lesson: 66, title: "文化与习俗", questions: [
    { type: "choice", difficulty: "basic", text: "英国的国花是：", options: ["A. 玫瑰", "B. 郁金香", "C. 向日葵", "D. 百合"], answer: "A", knowledgePoint: "英国国花", analysis: "英国的国花是玫瑰，象征美丽和爱情。" },
    { type: "choice", difficulty: "medium", text: "英国人喜欢的运动是：", options: ["A. 足球", "B. 板球", "C. 橄榄球", "D. 以上都是"], answer: "D", knowledgePoint: "英国运动", analysis: "英国人喜欢多种运动，包括足球、板球、橄榄球等。" },
    { type: "choice", difficulty: "hard", text: "英国的传统节日不包括：", options: ["A. 圣诞节", "B. 复活节", "C. 感恩节", "D. 新年"], answer: "C", knowledgePoint: "英国节日", analysis: "感恩节是美国的传统节日，不是英国的传统节日。" }
  ]},
  { lesson: 67, title: "影视与媒体英语", questions: [
    { type: "choice", difficulty: "basic", text: "BBC是哪个国家的广播公司？", options: ["A. 美国", "B. 英国", "C. 加拿大", "D. 澳大利亚"], answer: "B", knowledgePoint: "BBC", analysis: "BBC是英国广播公司（British Broadcasting Corporation）的缩写。" },
    { type: "choice", difficulty: "medium", text: "电影台词的特点是：", options: ["A. 书面化", "B. 口语化", "C. 正式", "D. 复杂"], answer: "B", knowledgePoint: "电影台词", analysis: "电影台词通常比较口语化，贴近日常对话。" },
    { type: "choice", difficulty: "hard", text: "新闻英语的语言特点是：", options: ["A. 简洁客观", "B. 生动形象", "C. 夸张幽默", "D. 复杂冗长"], answer: "A", knowledgePoint: "新闻英语", analysis: "新闻英语要求语言简洁、客观、准确。" }
  ]},

  // ==================== 第16章 总复习（第68-72课） ====================
  { lesson: 68, title: "语法总复习", questions: [
    { type: "choice", difficulty: "basic", text: "英语时态系统包括：", options: ["A. 现在时", "B. 过去时", "C. 将来时", "D. 以上都是"], answer: "D", knowledgePoint: "时态系统", analysis: "英语时态系统包括现在时、过去时、将来时等多种时态。" },
    { type: "choice", difficulty: "medium", text: "复合句的类型包括：", options: ["A. 宾语从句", "B. 定语从句", "C. 状语从句", "D. 以上都是"], answer: "D", knowledgePoint: "复合句类型", analysis: "复合句包括宾语从句、定语从句、状语从句等。" },
    { type: "choice", difficulty: "hard", text: "语法体系整合的目的是：", options: ["A. 零散记忆", "B. 系统掌握", "C. 增加难度", "D. 混淆知识"], answer: "B", knowledgePoint: "语法整合", analysis: "语法体系整合的目的是帮助学生系统掌握语法知识，而不是零散记忆。" }
  ]},
  { lesson: 69, title: "词汇总复习", questions: [
    { type: "choice", difficulty: "basic", text: "词根词缀系统的作用是：", options: ["A. 增加记忆负担", "B. 帮助记忆单词", "C. 混淆词义", "D. 增加难度"], answer: "B", knowledgePoint: "词根词缀", analysis: "词根词缀系统可以帮助学生理解和记忆单词，推断未知单词的含义。" },
    { type: "choice", difficulty: "medium", text: "高频词汇的重要性在于：", options: ["A. 很少使用", "B. 日常常用", "C. 难度高", "D. 生僻"], answer: "B", knowledgePoint: "高频词汇", analysis: "高频词汇是日常交流和学习中最常用的词汇，掌握它们非常重要。" },
    { type: "choice", difficulty: "hard", text: "词汇网络构建指的是：", options: ["A. 孤立记忆", "B. 建立联系", "C. 死记硬背", "D. 随机记忆"], answer: "B", knowledgePoint: "词汇网络", analysis: "词汇网络构建指的是建立单词之间的联系，形成知识网络。" }
  ]},
  { lesson: 70, title: "阅读总复习", questions: [
    { type: "choice", difficulty: "basic", text: "阅读技巧包括：", options: ["A. 略读", "B. 精读", "C. 扫读", "D. 以上都是"], answer: "D", knowledgePoint: "阅读技巧", analysis: "阅读技巧包括略读、精读、扫读等多种方法。" },
    { type: "choice", difficulty: "medium", text: "快速阅读的目的是：", options: ["A. 逐字阅读", "B. 把握大意", "C. 理解细节", "D. 背诵全文"], answer: "B", knowledgePoint: "快速阅读", analysis: "快速阅读的目的是快速把握文章大意，而不是逐字阅读。" },
    { type: "choice", difficulty: "hard", text: "深度理解指的是：", options: ["A. 表面理解", "B. 理解内涵", "C. 字面理解", "D. 简单理解"], answer: "B", knowledgePoint: "深度理解", analysis: "深度理解指的是理解文章的内涵、作者的意图和隐含的信息。" }
  ]},
  { lesson: 71, title: "写作总复习", questions: [
    { type: "choice", difficulty: "basic", text: "各类文体写作的共同点是：", options: ["A. 格式相同", "B. 语言相同", "C. 都需要结构", "D. 难度相同"], answer: "C", knowledgePoint: "写作共同点", analysis: "无论哪种文体，写作都需要清晰的结构。" },
    { type: "choice", difficulty: "medium", text: "写作结构包括：", options: ["A. 开头", "B. 正文", "C. 结尾", "D. 以上都是"], answer: "D", knowledgePoint: "写作结构", analysis: "一篇完整的文章通常包括开头、正文和结尾。" },
    { type: "choice", difficulty: "hard", text: "修改与润色的目的是：", options: ["A. 增加字数", "B. 提高质量", "C. 保持原样", "D. 简化内容"], answer: "B", knowledgePoint: "修改润色", analysis: "修改与润色的目的是提高文章的质量，使表达更准确、流畅。" }
  ]},
  { lesson: 72, title: "听说总复习", questions: [
    { type: "choice", difficulty: "basic", text: "听力技巧包括：", options: ["A. 预测内容", "B. 抓住关键词", "C. 注意语调", "D. 以上都是"], answer: "D", knowledgePoint: "听力技巧", analysis: "听力技巧包括预测内容、抓住关键词、注意语调等。" },
    { type: "choice", difficulty: "medium", text: "口语表达的要求是：", options: ["A. 流利", "B. 准确", "C. 清晰", "D. 以上都是"], answer: "D", knowledgePoint: "口语要求", analysis: "口语表达要求流利、准确、清晰。" },
    { type: "choice", difficulty: "hard", text: "交际能力指的是：", options: ["A. 语法正确", "B. 能够交流", "C. 词汇量大", "D. 发音标准"], answer: "B", knowledgePoint: "交际能力", analysis: "交际能力指的是能够用语言进行有效的交流，而不仅仅是语法正确或词汇量大。" }
  ]},

  // ==================== 第17章 期末考试与评估（第73-77课） ====================
  { lesson: 73, title: "模拟考试（一）", questions: [
    { type: "choice", difficulty: "basic", text: "全真模拟的目的是：", options: ["A. 熟悉流程", "B. 提高速度", "C. 发现问题", "D. 以上都是"], answer: "D", knowledgePoint: "模拟考试", analysis: "全真模拟可以帮助熟悉考试流程、提高答题速度、发现薄弱环节。" },
    { type: "choice", difficulty: "medium", text: "时间训练的重要性在于：", options: ["A. 完成所有题目", "B. 检查答案", "C. 避免超时", "D. 以上都是"], answer: "D", knowledgePoint: "时间训练", analysis: "时间训练可以帮助合理分配时间，完成所有题目并检查答案。" },
    { type: "choice", difficulty: "hard", text: "答题技巧包括：", options: ["A. 先易后难", "B. 仔细审题", "C. 合理猜测", "D. 以上都是"], answer: "D", knowledgePoint: "答题技巧", analysis: "好的答题技巧包括先易后难、仔细审题、合理猜测等。" }
  ]},
  { lesson: 74, title: "模拟考试（二）", questions: [
    { type: "choice", difficulty: "basic", text: "综合检测的目的是：", options: ["A. 全面评估", "B. 查漏补缺", "C. 提高信心", "D. 以上都是"], answer: "D", knowledgePoint: "综合检测", analysis: "综合检测可以全面评估学习情况、查漏补缺、提高信心。" },
    { type: "choice", difficulty: "medium", text: "查漏补缺指的是：", options: ["A. 忽略错误", "B. 弥补不足", "C. 重复错误", "D. 放弃学习"], answer: "B", knowledgePoint: "查漏补缺", analysis: "查漏补缺指的是发现并弥补学习中的不足和漏洞。" },
    { type: "choice", difficulty: "hard", text: "心理调适的重要性在于：", options: ["A. 增加紧张", "B. 保持冷静", "C. 影响发挥", "D. 焦虑不安"], answer: "B", knowledgePoint: "心理调适", analysis: "良好的心理调适可以帮助保持冷静，发挥出最佳水平。" }
  ]},
  { lesson: 75, title: "考前答疑", questions: [
    { type: "choice", difficulty: "basic", text: "疑难解答的目的是：", options: ["A. 增加困惑", "B. 解决问题", "C. 回避问题", "D. 拖延时间"], answer: "B", knowledgePoint: "疑难解答", analysis: "考前答疑的目的是解决学生的疑难问题。" },
    { type: "choice", difficulty: "medium", text: "重点回顾指的是：", options: ["A. 复习所有内容", "B. 复习核心内容", "C. 忽略重点", "D. 随意复习"], answer: "B", knowledgePoint: "重点回顾", analysis: "重点回顾指的是复习考试的核心内容和重点知识。" },
    { type: "choice", difficulty: "hard", text: "信心建立的方法是：", options: ["A. 自我否定", "B. 积极暗示", "C. 过度焦虑", "D. 逃避考试"], answer: "B", knowledgePoint: "信心建立", analysis: "积极的自我暗示可以帮助建立信心，面对考试。" }
  ]}
];
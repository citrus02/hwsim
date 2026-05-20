/**
 * history-questionBank.js
 * 麻瓜学术 · 历史分科 · 题库
 * 教授：赫伯特·宾斯二世
 * 每课 6 题：5 道选择题 + 1 道开放题，共 420 题
 */

export const questionBank = [

  // ── 第1章 中世纪英格兰 ──────────────────────────────────────────

  { lesson: 1, title: "诺曼征服1066", questions: [
    { type: "choice", difficulty: 1, text: "黑斯廷斯战役发生在哪一年？", options: ["A. 1066年", "B. 1086年", "C. 1166年", "D. 1215年"], answer: "A", knowledgePoint: "黑斯廷斯战役：一场改变历史的战斗", analysis: "1066年10月14日，诺曼公爵威廉在黑斯廷斯击败盎格鲁-撒克逊国王哈罗德二世，标志着诺曼征服的开始。" },
    { type: "choice", difficulty: 1, text: "在黑斯廷斯战役中，诺曼军队取胜的关键战术是什么？", options: ["A. 人数远超撒克逊军队", "B. 骑兵佯装撤退诱敌出击后回身包抄", "C. 使用长弓远程射击", "D. 夜袭撒克逊营地"], answer: "B", knowledgePoint: "黑斯廷斯战役：一场改变历史的战斗", analysis: "诺曼骑兵佯装撤退，诱使撒克逊盾墙散开追击，然后回身包抄——一个假动作赢得了一场战争。" },
    { type: "choice", difficulty: 2, text: "威廉一世在英国建立的制度是？", options: ["A. 民主制度", "B. 封建制度", "C. 资本主义制度", "D. 社会主义制度"], answer: "B", knowledgePoint: "诺曼征服的遗产：语言与制度的融合", analysis: "威廉一世引入了欧洲大陆的封建制度，确立了国王、贵族、骑士之间的等级关系和土地分封体系。" },
    { type: "choice", difficulty: 2, text: "末日审判书（Domesday Book）的主要作用是什么？", options: ["A. 记录军事胜利的编年史", "B. 进行土地和人口普查以便征税", "C. 制定英格兰统一法律", "D. 记录贵族世系"], answer: "B", knowledgePoint: "末日审判书：写在羊皮纸上的王国", analysis: "1086年，威廉一世派官员走遍英格兰记录每一块土地的主人和人口，用于确定税基。" },
    { type: "choice", difficulty: 3, text: "诺曼征服对英国文化的影响不包括：", options: ["A. 法语词汇进入英语", "B. 封建制度的建立", "C. 罗马天主教会的衰落", "D. 庄园经济的发展"], answer: "C", knowledgePoint: "黑斯廷斯战役：一场改变历史的战斗", analysis: "诺曼征服加强了罗马天主教会在英国的势力，而非导致其衰落。教会在中世纪是政治、经济和文化的中心。" },
    { type: "open", text: "假如你是1066年的一位撒克逊农夫，诺曼征服之后你的生活会有什么变化？请从语言、土地制度和社会地位三个方面分析。", scoringPoints: ["能指出诺曼法语对英语词汇的影响", "能说明封建土地制度改变了土地的归属和耕种方式", "能分析撒克逊贵族被诺曼贵族取代对社会地位的影响"], maxScore: 6 }
  ]},

  { lesson: 2, title: "封建制度", questions: [
    { type: "choice", difficulty: 1, text: "封建制度的核心是：", options: ["A. 金钱关系", "B. 土地与义务", "C. 民主选举", "D. 商业贸易"], answer: "B", knowledgePoint: "封建金字塔：谁在上，谁在下", analysis: "封建制度以土地为核心，通过分封建立起封君封臣关系，双方互有权利和义务。" },
    { type: "choice", difficulty: 1, text: "在封建金字塔中，处于最底层的是：", options: ["A. 国王", "B. 大贵族", "C. 骑士", "D. 农奴"], answer: "D", knowledgePoint: "封建金字塔：谁在上，谁在下", analysis: "农奴在封建金字塔的最底层，耕种土地养活所有人，权利最少义务最多。" },
    { type: "choice", difficulty: 2, text: "封臣对封君的主要义务是：", options: ["A. 缴纳金钱", "B. 提供军事服务", "C. 耕种土地", "D. 传授知识"], answer: "B", knowledgePoint: "双向契约：封君与封臣的权利和义务", analysis: "封臣向封君宣誓效忠，主要义务是提供军事服务，跟随封君作战。" },
    { type: "choice", difficulty: 2, text: "封建关系中封君对封臣的主要义务是什么？", options: ["A. 提供教育和培训", "B. 提供保护和土地", "C. 支付工资", "D. 授予爵位"], answer: "B", knowledgePoint: "双向契约：封君与封臣的权利和义务", analysis: "封君有义务保护封臣的人身安全和土地权益，破坏契约的一方在中世纪是不名誉的。" },
    { type: "choice", difficulty: 3, text: "庄园经济的特点是：", options: ["A. 商品经济发达", "B. 自给自足", "C. 对外贸易频繁", "D. 工业化生产"], answer: "B", knowledgePoint: "庄园：中世纪的微型王国", analysis: "庄园是封建经济的基本单位，实行自给自足，生产自己所需的大部分物品。" },
    { type: "open", text: "有人说封建制度是'压迫'，也有人说它是'契约'。请结合封君封臣的权利义务关系，谈谈你的理解。", scoringPoints: ["能说明封建关系是双向的权利义务关系", "能指出不同等级之间的权力不平等", "能用自己的观点评价封建制度的公平性"], maxScore: 4 }
  ]},

  { lesson: 3, title: "黑死病", questions: [
    { type: "choice", difficulty: 1, text: "黑死病传入英国的时间是：", options: ["A. 1348年", "B. 1448年", "C. 1548年", "D. 1648年"], answer: "A", knowledgePoint: "黑死病：沿着商路蔓延的死亡", analysis: "1348年，黑死病通过贸易路线传入英国，在接下来的三年里导致约三分之一的人口死亡。" },
    { type: "choice", difficulty: 1, text: "黑死病主要通过什么途径从中亚传播到欧洲？", options: ["A. 军队行军路线", "B. 贸易商船和商队", "C. 候鸟迁徙", "D. 朝圣者步行路线"], answer: "B", knowledgePoint: "黑死病：沿着商路蔓延的死亡", analysis: "老鼠藏在商船的货舱里，跳蚤吸了病鼠的血再咬人——黑死病沿着丝绸之路和地中海商路传播。" },
    { type: "choice", difficulty: 2, text: "黑死病对社会的影响是：", options: ["A. 劳动力短缺", "B. 人口增加", "C. 封建制度加强", "D. 经济繁荣"], answer: "A", knowledgePoint: "劳动力的逆转：死人太多，活人值钱了", analysis: "人口锐减导致劳动力短缺，农奴的议价能力提高，为社会变革创造了条件。" },
    { type: "choice", difficulty: 2, text: "黑死病后农奴的议价能力提高的根本原因是什么？", options: ["A. 国王颁布了保护农奴的法律", "B. 劳动力变得稀缺", "C. 教会站在农奴一边", "D. 贵族主动放弃特权"], answer: "B", knowledgePoint: "劳动力的逆转：死人太多，活人值钱了", analysis: "人口减少导致劳动力供不应求，农奴可以谈条件甚至离开领主的庄园。" },
    { type: "choice", difficulty: 3, text: "黑死病后，农奴地位变化的根本原因是：", options: ["A. 国王的仁慈", "B. 劳动力稀缺", "C. 教会的干预", "D. 法律的改革"], answer: "B", knowledgePoint: "劳动力的逆转：死人太多，活人值钱了", analysis: "劳动力稀缺使农奴能够要求更高的工资和更好的待遇，甚至获得人身自由，这是黑死病后社会结构变化的根本原因。" },
    { type: "open", text: "黑死病杀死了三分之一的人口，却加速了封建制度的衰落。请用经济学的'供需关系'来解释这个看似矛盾的历史现象。", scoringPoints: ["能指出人口减少导致劳动力供给减少", "能分析劳动力供不应求如何提升农奴的议价权", "能解释领主之间的竞争如何动摇了封建秩序"], maxScore: 6 }
  ]},

  { lesson: 4, title: "教会的权力", questions: [
    { type: "choice", difficulty: 1, text: "中世纪教会的最高领袖是：", options: ["A. 国王", "B. 教皇", "C. 大主教", "D. 骑士"], answer: "B", knowledgePoint: "两个太阳：教皇与国王的权力之争", analysis: "教皇是罗马天主教会的最高领袖，在中世纪拥有巨大的宗教和政治权力。" },
    { type: "choice", difficulty: 1, text: "中世纪教堂在社区中扮演的角色不包括以下哪项？", options: ["A. 宗教活动的中心", "B. 社区集会的场所", "C. 教育知识的中心", "D. 国王的行政办公地"], answer: "D", knowledgePoint: "教堂：中世纪人的生活圆心", analysis: "教堂是中世纪人出生受洗、结婚、告解、集会、受教育甚至避难的地方，覆盖了从生到死的全部需求。" },
    { type: "choice", difficulty: 2, text: "1077年卡诺莎事件中，亨利四世在雪地里站了三天请求教皇宽恕，根本原因是：", options: ["A. 他犯了杀人罪", "B. 被开除教籍使他失去统治合法性", "C. 他想参加宗教仪式", "D. 他想请求教皇帮助打仗"], answer: "B", knowledgePoint: "两个太阳：教皇与国王的权力之争", analysis: "被开除教籍意味着国王失去了统治的宗教合法性——臣民无需服从他。亨利四世别无选择，只能在卡诺莎城堡外的雪地里站了三天请求赦免。" },
    { type: "choice", difficulty: 2, text: "修道院在中世纪文化中的最重要贡献是什么？", options: ["A. 建造宏伟的教堂", "B. 手抄和保存古代知识文献", "C. 组织十字军东征", "D. 管理封建土地"], answer: "B", knowledgePoint: "修道院：知识的守护者", analysis: "修道院里的抄写员日复一日地伏案抄写古代文献——包括圣经和古典著作——在印刷术发明前，这是知识传承的唯一方式。" },
    { type: "choice", difficulty: 3, text: "教会与王权冲突的实质是：", options: ["A. 个人恩怨", "B. 权力争夺", "C. 文化差异", "D. 经济纠纷"], answer: "B", knowledgePoint: "两个太阳：教皇与国王的权力之争", analysis: "教会与王权的冲突本质上是权力争夺，双方都试图扩大自己的影响力和控制范围。" },
    { type: "open", text: "在中世纪欧洲，一个人从出生到死亡都离不开教堂。请以'一个中世纪农民的宗教生活'为题，描述教堂在他人生中的具体作用。", scoringPoints: ["能描述出生受洗、结婚、葬礼等宗教仪式", "能说明教堂的钟声如何决定一天的节奏", "能分析教会对农民思想和行为的控制作用"], maxScore: 4 }
  ]},

  { lesson: 5, title: "大宪章与议会起源", questions: [
    { type: "choice", difficulty: 1, text: "大宪章签署于哪一年？", options: ["A. 1215年", "B. 1315年", "C. 1415年", "D. 1515年"], answer: "A", knowledgePoint: "大宪章的六十三条：写在纸上的枷锁", analysis: "1215年，约翰国王被迫签署大宪章，确立了国王必须遵守法律的原则。" },
    { type: "choice", difficulty: 1, text: "被称为'失地王'的英格兰国王是：", options: ["A. 理查一世", "B. 约翰国王", "C. 亨利三世", "D. 爱德华一世"], answer: "B", knowledgePoint: "约翰国王：最不受欢迎的国王", analysis: "约翰国王因在法国战争中丢失了大量领土而被称为'失地王'，他的暴政直接导致了贵族反叛和大宪章的签署。" },
    { type: "choice", difficulty: 2, text: "大宪章的核心原则是：", options: ["A. 王权至上", "B. 法律至上", "C. 贵族专权", "D. 民主选举"], answer: "B", knowledgePoint: "大宪章的六十三条：写在纸上的枷锁", analysis: "大宪章确立了法律至上的原则，限制了王权，为后来的宪政发展奠定了基础。" },
    { type: "choice", difficulty: 2, text: "大宪章第39条确立了什么重要原则？", options: ["A. 国王有权任意征税", "B. 不经合法审判不得监禁任何人", "C. 贵族可以随时罢免国王", "D. 教会拥有最高权力"], answer: "B", knowledgePoint: "大宪章的六十三条：写在纸上的枷锁", analysis: "第39条规定任何自由民非经同级贵族依法审判或经国法判决，不得被逮捕、监禁或没收财产——这是'正当程序'原则的源头。" },
    { type: "choice", difficulty: 3, text: "议会制度的萌芽来自：", options: ["A. 大宪章的规定", "B. 国王的命令", "C. 人民的起义", "D. 教会的倡议"], answer: "A", knowledgePoint: "从大宪章到议会：一根漫长而持续的线", analysis: "大宪章要求国王定期召开会议听取贵族意见，这是议会制度的开端。" },
    { type: "open", text: "大宪章确立的'法律高于国王'原则对后世产生了深远影响。请结合一条现代你熟悉的法律原则，谈谈你看到了大宪章的影子。", scoringPoints: ["能正确指出现代法律中与大宪章相关的原则", "能说明该原则与大宪章的具体关联", "能分析从1215年至今该原则的演变"], maxScore: 4 }
  ]},

  // ── 第2章 探索与变革 ──────────────────────────────────────────

  { lesson: 6, title: "十字军东征", questions: [
    { type: "choice", difficulty: 1, text: "十字军东征持续了多长时间？", options: ["A. 约100年", "B. 约200年", "C. 约300年", "D. 约400年"], answer: "B", knowledgePoint: "两次世纪之间的九次远征", analysis: "十字军东征从1096年开始，到1291年结束，持续了近两个世纪。" },
    { type: "choice", difficulty: 1, text: "教皇乌尔班二世在哪一年号召了第一次十字军东征？", options: ["A. 1095年", "B. 1195年", "C. 1295年", "D. 1395年"], answer: "A", knowledgePoint: "三个动机：信仰、土地与贸易", analysis: "1095年，教皇乌尔班二世在克莱芒发表了著名的演讲，号召信徒去东方收复圣地。" },
    { type: "choice", difficulty: 2, text: "十字军东征的结果是：", options: ["A. 成功收复圣地", "B. 最终失败", "C. 建立永久统治", "D. 消灭伊斯兰教"], answer: "B", knowledgePoint: "两次世纪之间的九次远征", analysis: "尽管十字军初期取得一些胜利，但最终未能长期控制圣地，1291年最后一个十字军国家被消灭。" },
    { type: "choice", difficulty: 2, text: "第四次十字军东征最荒唐之处在于：", options: ["A. 还没出发就解散了", "B. 攻打了同属基督教世界的君士坦丁堡", "C. 全军在海上遇难", "D. 士兵全部叛变"], answer: "B", knowledgePoint: "两次世纪之间的九次远征", analysis: "第四次十字军没有去耶路撒冷，而是攻打了同样是基督教城市的君士坦丁堡，暴露了十字军运动背后的政治和经济动机。" },
    { type: "choice", difficulty: 3, text: "十字军东征的文化影响是：", options: ["A. 阻碍东西方交流", "B. 促进文化传播", "C. 消灭东方文化", "D. 封闭西方思想"], answer: "B", knowledgePoint: "战争的意外礼物：知识的东西流通", analysis: "十字军带回了东方的知识、技术和商品，促进了东西方文化交流，为文艺复兴奠定了基础。" },
    { type: "open", text: "十字军东征军事上失败了，但知识上欧洲人大赚了一笔。请举例说明东方知识如何通过十字军传入欧洲，并评价这种'意外的文化交流'。", scoringPoints: ["能列举至少两项东方向西方传播的知识或技术（如阿拉伯数字、造纸术等）", "能分析军事失败与文化交流之间的悖论关系", "能评价这场'意外交流'对欧洲后续发展的影响"], maxScore: 6 }
  ]},

  { lesson: 7, title: "文艺复兴", questions: [
    { type: "choice", difficulty: 1, text: "文艺复兴起源于哪个国家？", options: ["A. 法国", "B. 意大利", "C. 德国", "D. 英国"], answer: "B", knowledgePoint: "佛罗伦萨的黄金：金钱如何滋养艺术", analysis: "文艺复兴起源于14世纪的意大利，尤其是佛罗伦萨、威尼斯等城市。" },
    { type: "choice", difficulty: 1, text: "文艺复兴时期最重要的赞助家族是：", options: ["A. 美第奇家族", "B. 波吉亚家族", "C. 斯福尔扎家族", "D. 哈布斯堡家族"], answer: "A", knowledgePoint: "佛罗伦萨的黄金：金钱如何滋养艺术", analysis: "佛罗伦萨的美第奇家族是欧洲最富有的银行家族，赞助了达芬奇、米开朗基罗、拉斐尔等文艺复兴巨匠。" },
    { type: "choice", difficulty: 2, text: "人文主义的核心是：", options: ["A. 神本主义", "B. 人本主义", "C. 物质主义", "D. 虚无主义"], answer: "B", knowledgePoint: "人文主义：把目光从天堂转向人间", analysis: "人文主义强调人的价值和尊严，主张研究古典文化，是文艺复兴的核心思想。" },
    { type: "choice", difficulty: 2, text: "为什么文艺复兴首先发生在意大利？", options: ["A. 意大利国王的支持", "B. 地中海贸易带来的财富和古典传统", "C. 意大利的人口最多", "D. 欧洲其他地方都被战争摧毁了"], answer: "B", knowledgePoint: "佛罗伦萨的黄金：金钱如何滋养艺术", analysis: "意大利城邦控制地中海贸易积累了大量财富，同时拥有古罗马的古典文化传统——财富加古典传统培育了文艺复兴的土壤。" },
    { type: "choice", difficulty: 3, text: "文艺复兴时期的艺术特点是：", options: ["A. 抽象风格", "B. 写实与透视", "C. 几何图案", "D. 单色绘画"], answer: "B", knowledgePoint: "艺术与科学的联姻：达芬奇的一双眼睛", analysis: "文艺复兴艺术家如达芬奇、米开朗基罗强调写实、透视和人体比例，创造了逼真的艺术作品。" },
    { type: "open", text: "达芬奇既是画家也是解剖学家和工程师。请以他为例，说明文艺复兴时期'艺术与科学不分家'的特点。", scoringPoints: ["能举例说明达芬奇在艺术和科学方面的多重成就", "能分析其艺术创作如何受益于科学研究（如解剖学对绘画的帮助）", "能评价文艺复兴打破学科壁垒的精神对今天的启示"], maxScore: 4 }
  ]},

  { lesson: 8, title: "印刷术革命", questions: [
    { type: "choice", difficulty: 1, text: "古腾堡印刷机发明于哪一年？", options: ["A. 1440年", "B. 1540年", "C. 1640年", "D. 1740年"], answer: "A", knowledgePoint: "古腾堡的发明：活字印刷如何工作", analysis: "1440年左右，约翰内斯·古腾堡发明了活字印刷术，引发了知识传播的革命。" },
    { type: "choice", difficulty: 1, text: "古腾堡印刷机最重要的技术创新是什么？", options: ["A. 使用了彩色墨水", "B. 可移动金属活字可重复使用", "C. 可以双面印刷", "D. 采用了蒸汽动力"], answer: "B", knowledgePoint: "古腾堡的发明：活字印刷如何工作", analysis: "古腾堡的核心创新是把每个字母做成独立的金属活字，排好一页印完拆掉再用，效率比手抄提高了数百倍。" },
    { type: "choice", difficulty: 2, text: "印刷术的影响是：", options: ["A. 知识垄断加强", "B. 知识民主化", "C. 书籍减少", "D. 文盲增加"], answer: "B", knowledgePoint: "知识的雪崩：从几千本到数百万本", analysis: "印刷术使书籍变得更便宜、更普及，知识不再是贵族的专利，实现了知识的民主化。" },
    { type: "choice", difficulty: 2, text: "1450年到1500年间，欧洲书籍总量从约三万本增长到了多少？", options: ["A. 约九万本", "B. 约九十万本", "C. 约九百万本", "D. 约九千万本"], answer: "C", knowledgePoint: "知识的雪崩：从几千本到数百万本", analysis: "五十年间欧洲书籍总量从约三万本手抄书增长到约九百万本印刷品——三百倍的增长。" },
    { type: "choice", difficulty: 3, text: "印刷术对宗教改革的作用是：", options: ["A. 阻碍改革", "B. 推动改革", "C. 无关紧要", "D. 消灭宗教"], answer: "B", knowledgePoint: "印刷术如何改变了权力的结构", analysis: "印刷术使马丁·路德的著作迅速传播，扩大了宗教改革的影响，推动了新教的发展。" },
    { type: "open", text: "印刷术发明前，知识掌握在少数人手中；印刷术普及后，普通人也能读圣经、读科学著作。请比较'手抄时代'和'印刷时代'在知识传播上的本质区别。", scoringPoints: ["能说明手抄时代知识的稀缺性和获取成本", "能分析印刷时代知识传播的速度和广度变化", "能评价知识民主化对社会变革的推动意义"], maxScore: 4 }
  ]},

  { lesson: 9, title: "地理大发现", questions: [
    { type: "choice", difficulty: 1, text: "哥伦布发现美洲是在哪一年？", options: ["A. 1492年", "B. 1592年", "C. 1692年", "D. 1792年"], answer: "A", knowledgePoint: "航海的工具箱：麻瓜如何跨越海洋", analysis: "1492年，哥伦布率领船队到达美洲，开启了地理大发现的时代。" },
    { type: "choice", difficulty: 1, text: "哥伦布最初航行的目的是什么？", options: ["A. 证明地球是圆的", "B. 寻找通往东方的新航路", "C. 发现新大陆", "D. 捕鱼和探险"], answer: "B", knowledgePoint: "一次迷路引发的发现：哥伦布的航行", analysis: "哥伦布想从西边绕过地球背面到达日本和中国，他严重低估了地球的周长，却因此发现了美洲。" },
    { type: "choice", difficulty: 2, text: "地理大发现的动机是：", options: ["A. 科学探索", "B. 寻找新航路", "C. 逃避战乱", "D. 传播宗教"], answer: "B", knowledgePoint: "航海的工具箱：麻瓜如何跨越海洋", analysis: "欧洲人寻找通往东方的新航路以获取香料和财富，这是地理大发现的主要动机。" },
    { type: "choice", difficulty: 2, text: "'哥伦布大交换'中从美洲传入欧洲的重要作物是：", options: ["A. 小麦和水稻", "B. 马铃薯和玉米", "C. 甘蔗和香蕉", "D. 橄榄和葡萄"], answer: "B", knowledgePoint: "碰撞与交换：哥伦布大交换", analysis: "马铃薯、玉米、番茄、烟草等作物从美洲传入欧洲，彻底改变了欧洲的农业和饮食结构。" },
    { type: "choice", difficulty: 3, text: "地理大发现的后果不包括：", options: ["A. 殖民扩张", "B. 全球化开始", "C. 文化交流", "D. 世界和平"], answer: "D", knowledgePoint: "碰撞与交换：哥伦布大交换", analysis: "地理大发现开启了欧洲的殖民扩张，带来了全球化和文化交流，但也引发了长期的冲突和不平等。" },
    { type: "open", text: "哥伦布大交换中，欧洲人从美洲带回了马铃薯，也带去了天花。作物造福了欧洲，疾病却毁灭了美洲原住民。请评价这种'交换'的双面性。", scoringPoints: ["能说明马铃薯等作物对欧洲农业和人口的正面影响", "能分析传染病对美洲原住民人口的灾难性影响（死亡率高达90%）", "能评价历史中'进步'与'灾难'常常同时发生的复杂性"], maxScore: 6 }
  ]},

  { lesson: 10, title: "宗教改革", questions: [
    { type: "choice", difficulty: 1, text: "马丁·路德发表九十五条论纲是在哪一年？", options: ["A. 1517年", "B. 1617年", "C. 1717年", "D. 1817年"], answer: "A", knowledgePoint: "一张告示引发的风暴：九十五条论纲", analysis: "1517年，马丁·路德将九十五条论纲钉在维滕贝格教堂门上，标志着宗教改革的开始。" },
    { type: "choice", difficulty: 1, text: "马丁·路德的核心神学主张是什么？", options: ["A. 教皇至上", "B. 因信称义——信仰本身即是救赎", "C. 废除一切宗教", "D. 建立新的教皇制度"], answer: "B", knowledgePoint: "一张告示引发的风暴：九十五条论纲", analysis: "路德认为得救靠的是信仰和上帝的恩典，而不是购买赎罪券——这直接挑战了教会的权威和收入来源。" },
    { type: "choice", difficulty: 2, text: "英国国教的建立者是：", options: ["A. 亨利八世", "B. 伊丽莎白一世", "C. 查理一世", "D. 詹姆士一世"], answer: "A", knowledgePoint: "新教的诞生：教会的大分裂", analysis: "亨利八世为了离婚与罗马教廷决裂，建立了英国国教，自己成为教会领袖。" },
    { type: "choice", difficulty: 2, text: "宗教改革后基督教分裂出哪个不属于新教的教派？", options: ["A. 路德宗", "B. 加尔文宗", "C. 圣公会（英国国教）", "D. 东正教"], answer: "D", knowledgePoint: "新教的诞生：教会的大分裂", analysis: "东正教在1054年基督教大分裂时就已与天主教分裂，远早于宗教改革。宗教改革产生的新教教派是路德宗、加尔文宗和圣公会等。" },
    { type: "choice", difficulty: 3, text: "宗教改革的影响是：", options: ["A. 统一基督教", "B. 分裂基督教", "C. 消灭宗教", "D. 加强教皇权力"], answer: "B", knowledgePoint: "新教的诞生：教会的大分裂", analysis: "宗教改革导致基督教分裂为天主教和新教两大阵营，形成了不同的教派。" },
    { type: "open", text: "马丁·路德只是想辩论赎罪券的问题，结果却引发了席卷欧洲的宗教改革。请分析：印刷机在其中发挥了怎样的作用，使得一场学术辩论变成了大规模运动？", scoringPoints: ["能说明路德的原稿被送到印刷厂后迅速传播的过程", "能比较教会用拉丁文发布敕令vs路德用德语印刷小册子的效率差异", "能分析信息传播速度对运动规模的决定性影响"], maxScore: 6 }
  ]},

  // ── 第3章 英国革命 ──────────────────────────────────────────

  { lesson: 11, title: "都铎王朝崛起", questions: [
    { type: "choice", difficulty: 1, text: "都铎王朝的建立者是：", options: ["A. 亨利七世", "B. 亨利八世", "C. 伊丽莎白一世", "D. 詹姆士一世"], answer: "A", knowledgePoint: "红白玫瑰的融合：玫瑰战争的终结", analysis: "1485年，亨利·都铎在博斯沃思战役中击败理查三世，建立了都铎王朝。" },
    { type: "choice", difficulty: 1, text: "玫瑰战争是哪两个家族的斗争？", options: ["A. 约克和兰开斯特", "B. 都铎和斯图亚特", "C. 金雀花和诺曼", "D. 安茹和卡佩"], answer: "A", knowledgePoint: "红白玫瑰的融合：玫瑰战争的终结", analysis: "玫瑰战争是约克家族（白玫瑰）和兰开斯特家族（红玫瑰）为争夺王位进行的长达30年的战争。" },
    { type: "choice", difficulty: 2, text: "都铎玫瑰象征了什么？", options: ["A. 英格兰的国花", "B. 红白玫瑰的合并——兰开斯特和约克的和解", "C. 血腥战争的标志", "D. 法国王室的标志"], answer: "B", knowledgePoint: "红白玫瑰的融合：玫瑰战争的终结", analysis: "亨利七世娶了约克家族的伊丽莎白，把红玫瑰和白玫瑰合并成了一朵都铎玫瑰——象征着王位战争以婚姻画上句号。" },
    { type: "choice", difficulty: 2, text: "亨利七世巩固王权的策略不包括以下哪项？", options: ["A. 通过联姻巩固和平", "B. 整顿财政精打细算", "C. 解散议会实行独裁", "D. 削弱贵族势力"], answer: "C", knowledgePoint: "亨利七世：建设者而非战士", analysis: "都铎国王们不绕过议会——他们控制议会通过立法巩固权力。亨利七世从未解散议会。" },
    { type: "choice", difficulty: 3, text: "都铎王朝的特点是：", options: ["A. 王权削弱", "B. 专制加强", "C. 民主兴起", "D. 教会独立"], answer: "B", knowledgePoint: "都铎专制：王权的顶峰", analysis: "都铎王朝加强了王权，建立了强大的中央集权，议会成为国王巩固权力的工具。" },
    { type: "open", text: "亨利七世被认为是一位'无聊但有效的国王'——不打仗、不探险、不搞庆典，却给英格兰带来了三十年和平。请评价：最好的统治者是否往往是最'无聊'的？", scoringPoints: ["能具体分析亨利七世的政策及其效果", "能对比'耀眼的统治者'和'有效的统治者'", "能对统治者的评价标准提出自己的观点"], maxScore: 4 }
  ]},

  { lesson: 12, title: "亨利八世", questions: [
    { type: "choice", difficulty: 1, text: "亨利八世有几位妻子？", options: ["A. 4位", "B. 5位", "C. 6位", "D. 7位"], answer: "C", knowledgePoint: "一个儿子引发的决裂", analysis: "亨利八世有六位妻子，其中两位被处决，两位被离婚，一位去世，一位存活。" },
    { type: "choice", difficulty: 1, text: "亨利八世最渴望的子嗣是一个：", options: ["A. 女儿", "B. 儿子", "C. 双胞胎", "D. 没有偏好"], answer: "B", knowledgePoint: "一个儿子引发的决裂", analysis: "亨利八世需要一个合法的男性继承人来确保都铎王朝的延续，这是他与罗马教廷决裂的根本动因。" },
    { type: "choice", difficulty: 2, text: "亨利八世宗教改革的原因是：", options: ["A. 宗教信仰", "B. 离婚问题", "C. 经济利益", "D. 人民要求"], answer: "B", knowledgePoint: "一个儿子引发的决裂", analysis: "亨利八世为了与凯瑟琳王后离婚，与罗马教廷决裂，推动了英国宗教改革。" },
    { type: "choice", difficulty: 2, text: "解散修道院的最直接效果是什么？", options: ["A. 改善了僧侣的生活", "B. 充实了王室财政并削弱了教会势力", "C. 促进了宗教宽容", "D. 提高了教育水平"], answer: "B", knowledgePoint: "修道院的末日：财富的再分配", analysis: "约八百多座修道院的土地和财富被王室没收，王室成为英格兰最大的地主，同时卖地给新贵族使其成为宗教改革的既得利益者。" },
    { type: "choice", difficulty: 3, text: "亨利八世宗教改革的性质是：", options: ["A. 神学改革——他真心信奉新教", "B. 政治决裂——权力和金钱的争夺而非信仰之争", "C. 社会革命——推翻封建制度", "D. 文化运动——复兴古典文化"], answer: "B", knowledgePoint: "英国的宗教变革：不止是信仰的问题", analysis: "亨利八世一辈子都认为自己是好天主教徒，他的宗教改革不涉及神学——他关心的是把教皇的权力和教会的财富夺到自己手里。" },
    { type: "open", text: "亨利八世的离婚案引发了一场国家级宗教变革。请分析：一个君主的'私事'如何变成了改变国家命运的大事？", scoringPoints: ["能说明离婚案与教皇的冲突过程", "能分析个人动机如何通过制度运作产生了全国性影响", "能评价政治与宗教在英国历史上的纠缠关系"], maxScore: 6 }
  ]},

  { lesson: 13, title: "伊丽莎白一世时代", questions: [
    { type: "choice", difficulty: 1, text: "伊丽莎白一世统治时期被称为：", options: ["A. 黑暗时代", "B. 黄金时代", "C. 动荡时代", "D. 革命时代"], answer: "B", knowledgePoint: "莎士比亚的时代：文化为何繁荣", analysis: "伊丽莎白一世统治时期（1558-1603）被称为英国的黄金时代，经济繁荣，文化昌盛。" },
    { type: "choice", difficulty: 1, text: "英国击败西班牙无敌舰队是在哪一年？", options: ["A. 1588年", "B. 1688年", "C. 1788年", "D. 1888年"], answer: "A", knowledgePoint: "1588年：英国如何击败无敌舰队", analysis: "1588年，英国海军用火攻船战术击败了西班牙无敌舰队，确立了海上霸权。" },
    { type: "choice", difficulty: 2, text: "伊丽莎白一世宗教和解的核心策略是什么？", options: ["A. 恢复天主教", "B. 走温和中间路线", "C. 实行极端新教", "D. 彻底取消宗教"], answer: "B", knowledgePoint: "女王的平衡术：宗教和解", analysis: "伊丽莎白的解决方案是走中间路线——教义靠拢新教，仪式上保留天主教传统，一句话：'我不窥探灵魂的窗户。'" },
    { type: "choice", difficulty: 2, text: "英国击败西班牙无敌舰队最关键的因素是什么？", options: ["A. 英国军队人数远超西班牙", "B. 火攻船战术和风暴的帮助", "C. 西班牙舰队主动撤退", "D. 法国的军事援助"], answer: "B", knowledgePoint: "1588年：英国如何击败无敌舰队", analysis: "英国海军用火攻船冲散了西班牙舰队的密集阵型，随后风暴把零散的西班牙战舰吹向北海——出发时130艘船，回来的不到一半。" },
    { type: "choice", difficulty: 3, text: "伊丽莎白时代的文化成就不包括：", options: ["A. 莎士比亚的戏剧", "B. 培根的哲学", "C. 牛顿的科学发现", "D. 马洛的文学创作"], answer: "C", knowledgePoint: "莎士比亚的时代：文化为何繁荣", analysis: "牛顿的科学发现发生在17世纪后期的英国，晚于伊丽莎白时代。" },
    { type: "open", text: "伊丽莎白一世在宗教上选择了一条'中间路线'。请分析：在极端派系对立的时代，走中间路线为什么是最困难也最明智的选择？", scoringPoints: ["能说明伊丽莎白面对的天主教和新教两方面的压力", "能分析中间路线如何维持了社会稳定", "能评价'妥协'在政治中的价值"], maxScore: 4 }
  ]},

  { lesson: 14, title: "清教徒革命", questions: [
    { type: "choice", difficulty: 1, text: "英国内战爆发于哪一年？", options: ["A. 1642年", "B. 1742年", "C. 1842年", "D. 1942年"], answer: "A", knowledgePoint: "一个国王之死与共和国的诞生", analysis: "1642年，查理一世向议会宣战，英国内战正式爆发。" },
    { type: "choice", difficulty: 1, text: "查理一世关于王权的核心主张是？", options: ["A. 王权来自议会", "B. 君权神授——国王只对上帝负责", "C. 王权来自人民", "D. 国王应该退位"], answer: "B", knowledgePoint: "谁有权统治？查理一世对阵议会", analysis: "查理一世相信国王的权力来自上帝，而非议会——这直接导致了与议会的冲突。" },
    { type: "choice", difficulty: 2, text: "议会军的领袖是：", options: ["A. 查理一世", "B. 奥利弗·克伦威尔", "C. 詹姆士二世", "D. 威廉三世"], answer: "B", knowledgePoint: "新模范军：一支为信仰而战的军队", analysis: "奥利弗·克伦威尔率领新模范军击败国王军队，成为议会军的领袖。" },
    { type: "choice", difficulty: 2, text: "新模范军击败国王军队的核心原因是什么？", options: ["A. 人数远远多于国王军队", "B. 严格的纪律和清教徒的信仰", "C. 使用了更先进的武器", "D. 法国军队的援助"], answer: "B", knowledgePoint: "新模范军：一支为信仰而战的军队", analysis: "克伦威尔招募的是清教徒志愿者，他们不抢劫不酗酒、在战场上歌唱圣经诗篇冲锋——这种精神力量比雇佣兵强大得多。" },
    { type: "choice", difficulty: 3, text: "查理一世被处决是在哪一年？", options: ["A. 1649年", "B. 1659年", "C. 1669年", "D. 1679年"], answer: "A", knowledgePoint: "一个国王之死与共和国的诞生", analysis: "1649年，查理一世被议会处决，英国成为共和国，这是英国历史上唯一一次废除君主制。" },
    { type: "open", text: "查理一世相信'君权神授'，议会有自己的主张。请分析：这场冲突的核心矛盾是制度性的还是个人的？如果换一个更灵活的国王，内战可以避免吗？", scoringPoints: ["能分析国王和议会在征税权等核心问题上的制度性矛盾", "能讨论查理一世的个人性格如何激化了矛盾", "能对'个人vs制度'在历史中的作用提出自己的判断"], maxScore: 6 }
  ]},

  { lesson: 15, title: "克伦威尔与共和国", questions: [
    { type: "choice", difficulty: 1, text: "克伦威尔的称号是：", options: ["A. 国王", "B. 护国公", "C. 总统", "D. 首相"], answer: "B", knowledgePoint: "护国公：共和国里的独裁者", analysis: "克伦威尔成为护国公，实行军事独裁统治，掌握国家实权。" },
    { type: "choice", difficulty: 1, text: "斯图亚特复辟是在哪一年？", options: ["A. 1660年", "B. 1670年", "C. 1680年", "D. 1690年"], answer: "A", knowledgePoint: "斯图亚特复辟：国王回来了", analysis: "1660年，查理二世回到英国，斯图亚特王朝复辟，结束了共和国时期。" },
    { type: "choice", difficulty: 2, text: "克伦威尔的共和国有何内在矛盾？", options: ["A. 经济太繁荣了", "B. 他推翻了国王却建立了军事独裁", "C. 他把权力交给了议会", "D. 他恢复了天主教"], answer: "B", knowledgePoint: "护国公：共和国里的独裁者", analysis: "革命推翻了君主制——但克伦威尔作为护国公的权力超过了任何都铎国王。他以自由的名义夺权却以独裁的方式统治。" },
    { type: "choice", difficulty: 2, text: "斯图亚特王朝为什么能够成功复辟？", options: ["A. 查理二世率军征服了英格兰", "B. 共和国陷入混乱，人们渴望稳定", "C. 法国国王强迫英格兰恢复君主制", "D. 克伦威尔临终前要求复辟"], answer: "B", knowledgePoint: "斯图亚特复辟：国王回来了", analysis: "克伦威尔死后，其子软弱无能，将军们争权夺利，共和国在两年内瓦解——人们开始怀念君主制，至少有个明确的权威。" },
    { type: "choice", difficulty: 3, text: "共和国失败的原因是：", options: ["A. 经济繁荣", "B. 缺乏合法性", "C. 人民支持", "D. 外部援助"], answer: "B", knowledgePoint: "斯图亚特复辟：国王回来了", analysis: "克伦威尔的独裁统治缺乏广泛支持，他去世后政权陷入混乱，最终导致斯图亚特王朝复辟。" },
    { type: "open", text: "1649年英国人处死了国王——十一年后又把国王的儿子请了回来。这段历史给了我们什么启示？请分析为什么'推翻旧制度'不等于'建立好制度'。", scoringPoints: ["能分析共和国失败的具体原因（克伦威尔独裁、缺乏制衡等）", "能讨论制度建设比推翻旧制度更困难", "能联系历史得出对制度建设的广义启示"], maxScore: 4 }
  ]},

  // ── 第4章 工业革命 ──────────────────────────────────────────

  { lesson: 16, title: "蒸汽机", questions: [
    { type: "choice", difficulty: 1, text: "瓦特改良蒸汽机是在哪一年获得专利？", options: ["A. 1775年", "B. 1875年", "C. 1975年", "D. 1675年"], answer: "A", knowledgePoint: "蒸汽机：一个修理工的灵光一现", analysis: "1775年，詹姆斯·瓦特获得了蒸汽机的专利，这是工业革命的关键发明。" },
    { type: "choice", difficulty: 1, text: "瓦特对蒸汽机最重要的改进是什么？", options: ["A. 提高了锅炉的温度", "B. 增加了独立的冷凝器", "C. 把蒸汽机做得更小", "D. 改用了石油作为燃料"], answer: "B", knowledgePoint: "蒸汽机：一个修理工的灵光一现", analysis: "瓦特把冷凝过程移到气缸外，使气缸保持恒温，燃料消耗降到原来的四分之一。" },
    { type: "choice", difficulty: 2, text: "蒸汽机的能源是：", options: ["A. 石油", "B. 煤炭", "C. 天然气", "D. 电力"], answer: "B", knowledgePoint: "能源革命：煤炭驱动的文明", analysis: "蒸汽机使用煤炭作为能源，开启了化石燃料时代，推动了工业革命。" },
    { type: "choice", difficulty: 2, text: "瓦特改良蒸汽机前，纽科门蒸汽机最大的问题是什么？", options: ["A. 无法产生足够的动力", "B. 气缸反复冷却再加热浪费大量热能", "C. 体积太大无法搬运", "D. 噪音太大影响操作"], answer: "B", knowledgePoint: "蒸汽机：一个修理工的灵光一现", analysis: "纽科门的问题是在气缸里交替注入蒸汽和冷水——气缸刚热就被冷却了，燃料利用率极低。" },
    { type: "choice", difficulty: 3, text: "蒸汽机对工业的影响是：", options: ["A. 手工生产延续", "B. 工厂制度建立", "C. 农业复兴", "D. 商业衰退"], answer: "B", knowledgePoint: "从手工到机器：生产方式的革命", analysis: "蒸汽机为工厂提供了动力，工厂制度取代了手工工场，改变了生产方式。" },
    { type: "open", text: "瓦特改良蒸汽机的灵感来自修理一台纽科门模型。请分析：为什么'微小的改进'有时比'全新的发明'更能改变世界？", scoringPoints: ["能具体说明瓦特改良与纽科门机的区别", "能分析效率提升（75%的燃料节省）的累积效应", "能从'改良者的视角'评价创新与改进的关系"], maxScore: 4 }
  ]},

  { lesson: 17, title: "工厂制度", questions: [
    { type: "choice", difficulty: 1, text: "工厂制度的特点是：", options: ["A. 家庭生产", "B. 集中生产", "C. 手工劳动", "D. 分散作业"], answer: "B", knowledgePoint: "机器的节奏：工厂如何改变了劳动", analysis: "工厂制度将工人集中在工厂里工作，使用机器进行大规模生产。" },
    { type: "choice", difficulty: 1, text: "工厂制度取代手工工场的前提是蒸汽机的普及提供了集中的动力来源。这种说法：", options: ["A. 正确，动力集中是工厂制度的基础", "B. 错误，工厂制度不需要蒸汽机", "C. 完全无关", "D. 蒸汽机让工厂变小了"], answer: "A", knowledgePoint: "新阶级的诞生：工人阶级", analysis: "蒸汽机让工厂不再依赖水力——可以在城市里建大型工厂，工人集中到工厂工作。" },
    { type: "choice", difficulty: 2, text: "工人阶级形成的原因是：", options: ["A. 农业发展", "B. 工业革命", "C. 贵族衰落", "D. 战争影响"], answer: "B", knowledgePoint: "新阶级的诞生：工人阶级", analysis: "工业革命导致工厂工人聚集，形成了一个新的社会阶级——工人阶级。" },
    { type: "choice", difficulty: 2, text: "早期工厂的工作时间通常是多少？", options: ["A. 8小时", "B. 10小时", "C. 14-16小时", "D. 按需安排灵活工时"], answer: "C", knowledgePoint: "童工、长工时、恶劣环境", analysis: "早期工厂每天工作14到16个小时是常态，而且经常包括童工——1833年工厂法才把9-13岁儿童的工时限制在9小时。" },
    { type: "choice", difficulty: 3, text: "早期工厂工作条件的特点是：", options: ["A. 舒适安全", "B. 恶劣危险", "C. 轻松自由", "D. 高薪优待"], answer: "B", knowledgePoint: "新阶级的诞生：工人阶级", analysis: "早期工厂工作时间长、环境恶劣、工资低，工人面临着健康和安全风险。" },
    { type: "open", text: "工厂制度的核心是'劳动的重组'——不再是熟练工匠独立完成一个产品，而是每个工人负责一个小环节。请分析：这种分工方式带来了效率提升，但工人为此付出了什么代价？", scoringPoints: ["能说明分工提高了生产效率", "能分析工人技能单一化、失去自主性的代价", "能评价'效率vs人性'这一工业革命的核心矛盾"], maxScore: 4 }
  ]},

  { lesson: 18, title: "城市化", questions: [
    { type: "choice", difficulty: 1, text: "工业革命时期，人口流向是：", options: ["A. 城市到农村", "B. 农村到城市", "C. 农村到农村", "D. 城市到城市"], answer: "B", knowledgePoint: "曼彻斯特：工业城市的模板", analysis: "工业革命推动了城市化进程，大量农村人口进入城市寻找工作机会。" },
    { type: "choice", difficulty: 1, text: "曼彻斯特是因什么而崛起？", options: ["A. 农业", "B. 纺织业", "C. 渔业", "D. 采矿业"], answer: "B", knowledgePoint: "曼彻斯特：工业城市的模板", analysis: "曼彻斯特因纺织业的发展从一个小镇变成了工业中心，是工业革命的典型城市。" },
    { type: "choice", difficulty: 2, text: "工业革命时期的城市化带来了哪些严重问题？", options: ["A. 人口不足", "B. 污染、拥挤和疾病传播", "C. 工资过高", "D. 农业衰落"], answer: "B", knowledgePoint: "城市规划的缺席：基础设施的噩梦", analysis: "城市人口急剧膨胀但基础设施跟不上——没有下水道、没有垃圾清运、没有清洁饮水——传染病在拥挤的贫民窟里迅速传播。" },
    { type: "choice", difficulty: 2, text: "以下哪项不是工业革命期间城市快速增长的主要原因？", options: ["A. 工厂提供了大量就业岗位", "B. 圈地运动使农村失去土地的农民涌入城市", "C. 城市生活环境优于农村", "D. 交通运输的改善使人口流动更加便利"], answer: "C", knowledgePoint: "曼彻斯特：工业城市的模板", analysis: "讽刺的是，当时城市的生活环境（污染、拥挤、疾病）远差于农村——但农民已经没有土地可种了，工厂是他们唯一的出路。" },
    { type: "choice", difficulty: 3, text: "城市化带来的问题不包括：", options: ["A. 污染", "B. 拥挤", "C. 疾病", "D. 人口减少"], answer: "D", knowledgePoint: "城市规划的缺席：基础设施的噩梦", analysis: "城市化带来了污染、拥挤和疾病传播等问题，但人口是增加而非减少。" },
    { type: "open", text: "1820年代的曼彻斯特既创造了巨大的财富，也产生了触目惊心的贫民窟。请分析：为什么工业革命未能在创造财富的同时解决贫困问题？", scoringPoints: ["能说明财富集中在工厂主手中的现象", "能分析基础设施的建设跟不上城市膨胀的速度", "能讨论'经济增长≠社会进步'的命题"], maxScore: 6 }
  ]},

  { lesson: 19, title: "工人运动", questions: [
    { type: "choice", difficulty: 1, text: "宪章运动的主要要求是：", options: ["A. 君主专制", "B. 普选权", "C. 贵族统治", "D. 社会主义"], answer: "B", knowledgePoint: "工会：团结就是力量", analysis: "宪章运动要求普选权和政治改革，是工人阶级第一次大规模的政治行动。" },
    { type: "choice", difficulty: 1, text: "工会的主要职能是什么？", options: ["A. 维护资本家利益", "B. 维护工人权益", "C. 破坏生产", "D. 反对改革"], answer: "B", knowledgePoint: "工会：团结就是力量", analysis: "工会组织工人争取更好的工资和工作条件，维护工人的权益。" },
    { type: "choice", difficulty: 2, text: "工人运动的结果是：", options: ["A. 没有任何改变", "B. 推动社会改革", "C. 推翻资本主义", "D. 回到封建制度"], answer: "B", knowledgePoint: "工会：团结就是力量", analysis: "工人运动推动了社会改革，如工厂法的制定，改善了工人的生活和工作条件。" },
    { type: "choice", difficulty: 2, text: "1833年英国工厂法的主要作用是：", options: ["A. 取消所有工厂", "B. 限制童工的工作时间", "C. 提高成年工人的工资", "D. 实行8小时工作制"], answer: "B", knowledgePoint: "工厂法：改革的点滴积累", analysis: "1833年工厂法规定9-13岁儿童每天工作不超过9小时，13-18岁不超过12小时——这是英国第一次用法律限制童工劳动，尽管远不完善，但迈出了第一步。" },
    { type: "choice", difficulty: 3, text: "宪章运动的三次请愿都被议会否决了，但其诉求在后来的几十年里逐步实现。这说明了什么？", options: ["A. 宪章运动彻底失败了", "B. 社会变革有时需要跨越数十年的渐进斗争", "C. 工人阶级不该通过政治途径斗争", "D. 英国当时已经是民主国家"], answer: "B", knowledgePoint: "宪章运动：工人阶级的政治觉醒", analysis: "宪章运动的六项要求最终在20世纪初基本实现——历史经常如此：运动在当下'失败'，却在长时段中'成功'。" },
    { type: "open", text: "工人运动推动了社会改革。但改革不是统治者主动赐予的——而是工人用罢工、请愿和牺牲争取来的。请谈谈你对'权利是争来的不是等来的'这句话的理解，结合工人运动的史实。", scoringPoints: ["能引用宪章运动或工会运动的具体史实", "能分析工人集体行动对统治者的施压效果", "能就'权利与斗争'的关系提出自己的观点"], maxScore: 4 }
  ]},

  { lesson: 20, title: "维多利亚时代", questions: [
    { type: "choice", difficulty: 1, text: "维多利亚女王统治时期是：", options: ["A. 19世纪", "B. 18世纪", "C. 20世纪", "D. 17世纪"], answer: "A", knowledgePoint: "维多利亚的遗产：现代社会的基础", analysis: "维多利亚女王从1837年到1901年统治英国，属于19世纪。" },
    { type: "choice", difficulty: 1, text: "维多利亚时代被称为'矛盾的时代'，以下哪组对比最能体现这种矛盾？", options: ["A. 工党vs保守党", "B. 工业繁荣与贫困并存", "C. 英国vs法国", "D. 城市vs农村"], answer: "B", knowledgePoint: "进步的另一面：狄更斯笔下的伦敦", analysis: "维多利亚时代一方面工业进步、科学繁荣、帝国扩张，另一方面贫富差距巨大、童工普遍、城市贫民窟触目惊心——进步与矛盾并存。" },
    { type: "choice", difficulty: 2, text: "大英帝国在维多利亚时代的地位是：", options: ["A. 衰落", "B. 鼎盛", "C. 起步", "D. 灭亡"], answer: "B", knowledgePoint: "维多利亚的遗产：现代社会的基础", analysis: "维多利亚时代是大英帝国的鼎盛时期，英国拥有世界上最大的殖民地。" },
    { type: "choice", difficulty: 2, text: "狄更斯的小说对维多利亚时代最大的贡献是什么？", options: ["A. 娱乐大众", "B. 揭露社会黑暗并推动了社会改革", "C. 歌颂大英帝国", "D. 推广标准英语"], answer: "B", knowledgePoint: "维多利亚的遗产：现代社会的基础", analysis: "狄更斯的小说《雾都孤儿》《艰难时世》等逼真地描绘了贫民窟和童工的苦难，让中产阶级读者无法再视而不见——小说成为了推动社会改革的舆论力量。" },
    { type: "choice", difficulty: 3, text: "维多利亚时代的社会特点是：", options: ["A. 完全平等", "B. 进步与矛盾并存", "C. 停滞不前", "D. 倒退落后"], answer: "B", knowledgePoint: "进步的另一面：狄更斯笔下的伦敦", analysis: "维多利亚时代既有工业进步和科学发展，也存在贫困和不平等，是一个充满反差的时代。" },
    { type: "open", text: "维多利亚时代为现代世界打下了许多基础——邮政制度、公务员制度、公共卫生、现代教育。但同一时期也存在着惊人的不平等。请分析：为什么同一个时代既能产生最进步的制度改革，又能容忍最残酷的贫困？", scoringPoints: ["能列举维多利亚时代的制度改革成果", "能分析社会不平等的具体表现和原因", "能对'时代的两面性'提出自己的理解"], maxScore: 6 }
  ]},

  // ── 第5章 帝国主义 ──────────────────────────────────────────

  { lesson: 21, title: "大英帝国", questions: [
    { type: "choice", difficulty: 1, text: "大英帝国被称为：", options: ["A. 日不落帝国", "B. 日升帝国", "C. 日中帝国", "D. 日没帝国"], answer: "A", knowledgePoint: "地图上的粉红色：一个日不落帝国", analysis: "大英帝国在19世纪达到顶峰，殖民地遍布全球，太阳永远不会在其领土上落下。" },
    { type: "choice", difficulty: 1, text: "大英帝国鼎盛时领土面积约占世界的：", options: ["A. 四分之一", "B. 三分之一", "C. 二分之一", "D. 十分之一"], answer: "A", knowledgePoint: "地图上的粉红色：一个日不落帝国", analysis: "大英帝国领土约三千五百万平方公里，占世界陆地面积的四分之一——人类历史上面积最大的帝国。" },
    { type: "choice", difficulty: 2, text: "大英帝国的面积占世界的比例是：", options: ["A. 四分之一", "B. 三分之一", "C. 二分之一", "D. 五分之一"], answer: "A", knowledgePoint: "地图上的粉红色：一个日不落帝国", analysis: "大英帝国的领土面积约占世界的四分之一，包括印度、加拿大、澳大利亚等。" },
    { type: "choice", difficulty: 2, text: "英国统治印度和统治加拿大的方式有何不同？", options: ["A. 没有区别", "B. 印度由英国政府直接统治，加拿大是自治领", "C. 印度是自治领，加拿大是直辖殖民地", "D. 两国都由东印度公司管理"], answer: "B", knowledgePoint: "地图上的粉红色：一个日不落帝国", analysis: "英国用不同方式管理不同的殖民地——印度由英国政府直接统治，加拿大和澳大利亚是自治领，拥有自己的议会。" },
    { type: "choice", difficulty: 3, text: "帝国扩张的根本原因是：", options: ["A. 传播文明", "B. 经济利益", "C. 军事需要", "D. 宗教使命"], answer: "B", knowledgePoint: "帝国扩张的引擎：利益、战略与自信", analysis: "经济利益是帝国扩张的根本动力，殖民地为英国提供原材料和市场。" },
    { type: "open", text: "大英帝国在全球贩售'自由贸易'的同时，在印度实施的是高关税保护。请分析：'自由贸易'是否往往只是强国用来打开弱国市场的工具？", scoringPoints: ["能指出英国在殖民地的经济政策是利己而非利他的", "能通过具体例证（如对印度纺织业的打压）说明", "能对'自由贸易'的理想与现实之间的矛盾提出观点"], maxScore: 4 }
  ]},

  { lesson: 22, title: "殖民地的声音", questions: [
    { type: "choice", difficulty: 1, text: "殖民统治的特点是：", options: ["A. 平等合作", "B. 不平等统治", "C. 相互尊重", "D. 文化融合"], answer: "B", knowledgePoint: "殖民地的两种视角", analysis: "殖民统治建立了不平等的关系，殖民者享有特权，被殖民者受到压迫和剥削。" },
    { type: "choice", difficulty: 1, text: "殖民教育的意外后果是：", options: ["A. 彻底消灭了当地文化", "B. 培养了独立运动的领袖", "C. 所有人都认同殖民统治", "D. 没有产生任何影响"], answer: "B", knowledgePoint: "精英的诞生：殖民教育的意外后果", analysis: "英国推行英语教育本意是培养听话的本地精英，但这些人学到了自由平等的理念后，反而成为了独立运动的领袖。" },
    { type: "choice", difficulty: 2, text: "殖民主义的双重性是指：", options: ["A. 只有好处", "B. 只有坏处", "C. 既有建设性也有破坏性", "D. 没有影响"], answer: "C", knowledgePoint: "殖民地的两种视角", analysis: "殖民主义破坏了当地传统经济和文化，但也带来了现代教育、医疗和基础设施。" },
    { type: "choice", difficulty: 2, text: "殖民地精英在宗主国学习后回国领导独立运动，这一现象被称为帝国主义最大的讽刺。讽刺之处在于：", options: ["A. 殖民者无意中教给了被殖民者反抗的工具", "B. 独立运动其实没有成功", "C. 精英们在国外学坏了", "D. 殖民者早就预料到了"], answer: "A", knowledgePoint: "精英的诞生：殖民教育的意外后果", analysis: "殖民者亲手培养了反抗自己的人——甘地、尼赫鲁、恩克鲁玛都在伦敦学到了自由和平等的理念，然后回国用这些理念反对殖民统治。" },
    { type: "choice", difficulty: 3, text: "民族意识觉醒的原因是：", options: ["A. 殖民统治", "B. 经济繁荣", "C. 文化传承", "D. 外部援助"], answer: "A", knowledgePoint: "精英的诞生：殖民教育的意外后果", analysis: "殖民统治激发了民族意识，殖民地人民开始争取独立和自决。" },
    { type: "open", text: "同一段殖民历史，英国人说'带来了现代文明'，印度人说'摧毁了我们的经济'。请分析：为什么同一段历史会产生完全相反的叙述，你如何评价？", scoringPoints: ["能说明殖民主义同时具有建设性和破坏性", "能分析不同立场如何导致不同叙述", "能对历史评价的多元性提出自己的理解"], maxScore: 4 }
  ]},

  { lesson: 23, title: "奴隶贸易与废除", questions: [
    { type: "choice", difficulty: 1, text: "三角贸易的路线是：", options: ["A. 欧洲→非洲→美洲→欧洲", "B. 欧洲→美洲→非洲→欧洲", "C. 非洲→欧洲→美洲→非洲", "D. 美洲→非洲→欧洲→美洲"], answer: "A", knowledgePoint: "三角贸易：三个大陆的罪恶链条", analysis: "三角贸易路线：欧洲出发→非洲购买奴隶→美洲出售奴隶→返回欧洲。" },
    { type: "choice", difficulty: 1, text: "三角贸易中被称为'中间通道'的是哪一段？", options: ["A. 欧洲到非洲", "B. 非洲到美洲——运送奴隶", "C. 美洲到欧洲", "D. 欧洲到美洲"], answer: "B", knowledgePoint: "三角贸易：三个大陆的罪恶链条", analysis: "中间通道是从非洲到美洲横跨大西洋的一段航程——奴隶被锁在狭窄的舱室里，约15%的人在途中死亡。" },
    { type: "choice", difficulty: 2, text: "奴隶贸易持续了多长时间？", options: ["A. 约100年", "B. 约200年", "C. 约300年", "D. 约400年"], answer: "C", knowledgePoint: "废奴：一场漫长的道德觉醒", analysis: "奴隶贸易从16世纪开始到19世纪结束，持续了约300年。" },
    { type: "choice", difficulty: 2, text: "英国废奴运动领袖威廉·威尔伯福斯在议会中推动废奴法案用了约多少年？", options: ["A. 5年", "B. 10年", "C. 20年", "D. 50年"], answer: "C", knowledgePoint: "废奴：一场漫长的道德觉醒", analysis: "威尔伯福斯从1787年开始在议会推动废奴法案，直到1807年才通过——整整二十年的坚持。" },
    { type: "choice", difficulty: 3, text: "废奴运动的领袖包括：", options: ["A. 牛顿", "B. 林肯", "C. 威尔伯福斯", "D. 达尔文"], answer: "C", knowledgePoint: "废奴：一场漫长的道德觉醒", analysis: "威廉·威尔伯福斯是英国废奴运动的领袖，长期推动废除奴隶制。" },
    { type: "open", text: "英国废除奴隶贸易时向奴隶主赔偿了两千万英镑，但没有向奴隶赔偿一分钱。请评价：'补偿压迫者而非被压迫者'说明了什么？", scoringPoints: ["能指出赔偿的政治逻辑——奴隶主有投票权而奴隶没有", "能分析道德理想与现实政治之间的妥协", "能对历史的不完美正义提出自己的观点"], maxScore: 4 }
  ]},

  { lesson: 24, title: "印度", questions: [
    { type: "choice", difficulty: 1, text: "东印度公司最初是：", options: ["A. 军事组织", "B. 贸易公司", "C. 宗教团体", "D. 政府机构"], answer: "B", knowledgePoint: "从公司到帝国：英国如何统治印度", analysis: "东印度公司最初是一家贸易公司，后来逐渐获得政治权力，成为英国在印度的统治工具。" },
    { type: "choice", difficulty: 1, text: "印度独立是在哪一年？", options: ["A. 1947年", "B. 1957年", "C. 1967年", "D. 1977年"], answer: "A", knowledgePoint: "独立的代价：印巴分治", analysis: "1947年，印度获得独立，结束了英国的殖民统治。" },
    { type: "choice", difficulty: 2, text: "印巴分治的原因是：", options: ["A. 地理因素", "B. 宗教差异", "C. 经济矛盾", "D. 外部压力"], answer: "B", knowledgePoint: "独立的代价：印巴分治", analysis: "印度教徒和穆斯林之间的宗教差异导致了印巴分治，印度和巴基斯坦分别独立。" },
    { type: "choice", difficulty: 2, text: "甘地的'食盐进军'抗议的是什么？", options: ["A. 英国禁止印度人吃盐", "B. 英国对盐的垄断和税收", "C. 盐的价格太高", "D. 英国人不让印度人晒盐"], answer: "B", knowledgePoint: "甘地：盐、纺车与不合作", analysis: "盐是每个印度人的日常必需品，但法律规定只能买英国垄断的高价盐。甘地步行四百公里到海边自己制盐——打破了法律也点燃了全国的反抗。" },
    { type: "choice", difficulty: 3, text: "印巴分治的代价约有多少人死于暴力冲突？", options: ["A. 1万人", "B. 10万人", "C. 约100万-200万人", "D. 1000万人"], answer: "C", knowledgePoint: "独立的代价：印巴分治", analysis: "印巴分治导致约1500万人跨越新边界，约100万到200万人在暴力冲突中死亡，是人类历史上规模最大的人口迁移之一。" },
    { type: "open", text: "甘地主张非暴力——他说'以眼还眼，世界只会更盲目'。但他最终死于暴力。请评价：非暴力反抗在现实政治中是否真的有效？甘地的理念是否过于理想主义？", scoringPoints: ["能引用甘地领导独立运动的具体成果", "能分析非暴力在道义和策略上的双重优势", "能对非暴力的局限性和有效性提出自己的评判"], maxScore: 6 }
  ]},

  { lesson: 25, title: "非洲瓜分", questions: [
    { type: "choice", difficulty: 1, text: "柏林会议召开于哪一年？", options: ["A. 1884年", "B. 1894年", "C. 1904年", "D. 1914年"], answer: "A", knowledgePoint: "一张桌子瓜分一个大陆：柏林会议", analysis: "1884-1885年，欧洲列强在柏林召开会议，瓜分了非洲。" },
    { type: "choice", difficulty: 1, text: "柏林会议最令人震惊的事实是：", options: ["A. 会议持续了两年", "B. 没有一个非洲人被邀请参加", "C. 所有国家都同意和平瓜分", "D. 会议在非洲举行"], answer: "B", knowledgePoint: "一张桌子瓜分一个大陆：柏林会议", analysis: "十四个欧洲国家坐在一起讨论如何瓜分非洲——没有一位非洲人在场。被瓜分的对象连发言权都没有。" },
    { type: "choice", difficulty: 2, text: "非洲瓜分的特点是：", options: ["A. 尊重当地边界", "B. 地图上的直线", "C. 和平协商", "D. 文化融合"], answer: "B", knowledgePoint: "一张桌子瓜分一个大陆：柏林会议", analysis: "欧洲列强在地图上直接画直线划分非洲边界，完全无视当地的历史和民族。" },
    { type: "choice", difficulty: 2, text: "柏林会议划定的非洲边界造成了什么长期后果？", options: ["A. 非洲从此和平稳定", "B. 切断了部落和民族，成为冲突的重要根源", "C. 边界后来被重新划分", "D. 没有产生任何影响"], answer: "B", knowledgePoint: "边界的长尾：殖民遗产至今未消", analysis: "殖民者走了但边界留了下来——直线把同一民族分到了不同国家，把有深层矛盾的群体关进同一个国家。卢旺达独立后的族群冲突和尼日利亚的内战都与这种殖民边界有关。" },
    { type: "choice", difficulty: 3, text: "非洲反抗殖民统治的例子包括：", options: ["A. 埃及独立", "B. 埃塞俄比亚抗意战争", "C. 南非种族隔离", "D. 刚果自由邦"], answer: "B", knowledgePoint: "边界的长尾：殖民遗产至今未消", analysis: "埃塞俄比亚在1896年击败意大利军队，是非洲唯一成功抵抗殖民侵略的国家。" },
    { type: "open", text: "柏林会议在地图上用尺子画了几条直线，就瓜分了一个大陆。到1991年，非洲许多冲突仍然可以追溯到这些直线。请分析：为什么一百多年前画在地图上的线，仍在塑造现实？", scoringPoints: ["能具体说明柏林会议如何用直线划分非洲", "能举例说明这些直线造成的冲突或政治困境（如卢旺达、尼日利亚）", "能分析国际政治中'边界不可改变'原则的两面性"], maxScore: 6 }
  ]},

  // ── 第6章 走向一战 ──────────────────────────────────────────

  { lesson: 26, title: "民族主义", questions: [
    { type: "choice", difficulty: 1, text: "巴尔干地区被称为：", options: ["A. 欧洲的花园", "B. 欧洲的火药桶", "C. 欧洲的心脏", "D. 欧洲的门户"], answer: "B", knowledgePoint: "欧洲的火药桶：巴尔干", analysis: "巴尔干地区民族众多，矛盾复杂，是第一次世界大战的导火索所在地。" },
    { type: "choice", difficulty: 1, text: "巴尔干被称为'火药桶'的主要原因是：", options: ["A. 这里盛产火药", "B. 多民族杂居和外部大国的争夺", "C. 巴尔干的天气容易引发火灾", "D. 这里的山脉是火山"], answer: "B", knowledgePoint: "欧洲的火药桶：巴尔干", analysis: "塞尔维亚人、克罗地亚人、波斯尼亚人、保加利亚人等多个民族挤在同一片土地上，加上奥匈帝国和俄国的争夺——一点火星就能点燃。" },
    { type: "choice", difficulty: 2, text: "泛斯拉夫主义的目标是：", options: ["A. 分裂斯拉夫人", "B. 联合所有斯拉夫人", "C. 消灭斯拉夫人", "D. 同化斯拉夫人"], answer: "B", knowledgePoint: "欧洲的火药桶：巴尔干", analysis: "泛斯拉夫主义主张所有斯拉夫人联合起来，威胁了奥匈帝国的统治。" },
    { type: "choice", difficulty: 2, text: "塞尔维亚在俄国的支持下想要实现'大塞尔维亚'，这直接威胁到了哪个帝国的生存？", options: ["A. 俄罗斯帝国", "B. 奥匈帝国", "C. 奥斯曼帝国", "D. 德意志帝国"], answer: "B", knowledgePoint: "欧洲的火药桶：巴尔干", analysis: "'大塞尔维亚'的设想是把所有南部斯拉夫人联合起来，这将分裂奥匈帝国境内的斯拉夫地区，危及奥匈帝国的统一。" },
    { type: "choice", difficulty: 3, text: "奥匈帝国解体的原因是：", options: ["A. 经济繁荣", "B. 民族主义", "C. 外部入侵", "D. 自然灾害"], answer: "B", knowledgePoint: "欧洲的火药桶：巴尔干", analysis: "民族主义的兴起导致奥匈帝国这个多民族国家解体，分裂成多个独立国家。" },
    { type: "open", text: "民族主义可以是一种团结的力量——意大利和德国就是通过民族主义实现统一的。但它也可以是分裂的力量——奥匈帝国和奥斯曼帝国因此而解体。请分析：民族主义在什么情况下是建设性的，什么时候是破坏性的？", scoringPoints: ["能举例说明民族主义的两种作用", "能分析民族主义与领土完整之间的张力", "能对民族主义的双面性提出自己的理解"], maxScore: 6 }
  ]},

  { lesson: 27, title: "军备竞赛", questions: [
    { type: "choice", difficulty: 1, text: "三国同盟包括：", options: ["A. 英国、法国、俄国", "B. 德国、奥匈帝国、意大利", "C. 美国、日本、英国", "D. 法国、德国、俄国"], answer: "B", knowledgePoint: "安全困境：每个人都在为战争做准备", analysis: "三国同盟是德国、奥匈帝国和意大利组成的军事同盟。" },
    { type: "choice", difficulty: 1, text: "'安全困境'指的是什么？", options: ["A. 各国和平共处相互信任", "B. 一国的扩军使邻国不安，邻国也扩军——结果所有人都不安全", "C. 各国都放弃武器所以更安全", "D. 只有在军队强大时才有安全感"], answer: "B", knowledgePoint: "安全困境：每个人都在为战争做准备", analysis: "你为了安全而扩军——你的扩军让邻国感到不安全——邻国也扩军——结果是所有人花更多的钱却更不安全。" },
    { type: "choice", difficulty: 2, text: "三国协约包括：", options: ["A. 德国、奥匈帝国、意大利", "B. 英国、法国、俄国", "C. 美国、日本、英国", "D. 法国、德国、俄国"], answer: "B", knowledgePoint: "安全困境：每个人都在为战争做准备", analysis: "三国协约是英国、法国和俄国组成的军事同盟，与三国同盟对峙。" },
    { type: "choice", difficulty: 2, text: "1898年开始的英德海军竞赛中，英国的回应策略是什么？", options: ["A. 承认德国的海上霸权", "B. 建造更先进的'无畏舰'", "C. 大规模扩充陆军", "D. 与德国结盟"], answer: "B", knowledgePoint: "安全困境：每个人都在为战争做准备", analysis: "德国挑战英国的海上霸权——英国的回应是造无畏舰，一种让所有现役战舰过时的新型战列舰。德国不甘示弱也开始造无畏舰。" },
    { type: "choice", difficulty: 3, text: "军备竞赛的影响是：", options: ["A. 促进和平", "B. 增加战争风险", "C. 减少冲突", "D. 经济衰退"], answer: "B", knowledgePoint: "安全困境：每个人都在为战争做准备", analysis: "军备竞赛加剧了国际紧张局势，使战争变得越来越可能。" },
    { type: "open", text: "'你为了安全而扩军——结果却让所有人都不安全'——这就是'安全困境'。请结合英德海军竞赛的事例，分析安全困境的逻辑，并谈谈你认为如何打破这个困境。", scoringPoints: ["能准确说明英德海军竞赛的具体过程", "能分析安全困境的理论逻辑", "能提出打破困境的合理思路"], maxScore: 6 }
  ]},

  { lesson: 28, title: "一战起因", questions: [
    { type: "choice", difficulty: 1, text: "萨拉热窝事件中被刺杀的是：", options: ["A. 威廉二世", "B. 斐迪南大公", "C. 尼古拉二世", "D. 乔治五世"], answer: "B", knowledgePoint: "萨拉热窝的枪声", analysis: "1914年6月28日，奥匈帝国皇位继承人斐迪南大公在萨拉热窝被刺杀。" },
    { type: "choice", difficulty: 1, text: "一战的导火索是萨拉热窝刺杀事件，但'导火索'不等于'原因'。一战的根本原因是：", options: ["A. 刺杀者的个人仇恨", "B. 民族主义、军备竞赛和同盟体系的深层矛盾", "C. 斐迪南大公不受欢迎", "D. 德国人策划了刺杀"], answer: "B", knowledgePoint: "多米诺骨牌：局部冲突如何变成世界大战", analysis: "萨拉热窝的枪声点燃了火药桶——但火药桶不是枪声制造的，是长期积累的帝国主义竞争、民族主义、军备竞赛和同盟体系制造的。" },
    { type: "choice", difficulty: 2, text: "一战爆发于哪一年？", options: ["A. 1914年", "B. 1915年", "C. 1916年", "D. 1917年"], answer: "A", knowledgePoint: "多米诺骨牌：局部冲突如何变成世界大战", analysis: "1914年8月，奥匈帝国向塞尔维亚宣战，第一次世界大战正式爆发。" },
    { type: "choice", difficulty: 2, text: "从萨拉热窝刺杀到世界大战爆发用了多长时间？", options: ["A. 三天", "B. 六个星期", "C. 六个月", "D. 一年"], answer: "B", knowledgePoint: "多米诺骨牌：局部冲突如何变成世界大战", analysis: "6月28日刺杀→7月28日奥匈向塞尔维亚宣战→8月4日英国向德国宣战——六个星期从一起刺杀到世界大战。" },
    { type: "choice", difficulty: 3, text: "七月危机指的是：", options: ["A. 战争结束", "B. 战争爆发前的外交危机", "C. 和平谈判", "D. 经济危机"], answer: "B", knowledgePoint: "多米诺骨牌：局部冲突如何变成世界大战", analysis: "七月危机是指从萨拉热窝事件到战争爆发的一个月里，外交努力失败，局势急剧恶化。" },
    { type: "open", text: "没有人真正'想要'一场世界大战——但一战还是爆发了。请分析：为什么在没有人主动追求战争的预设下，战争仍然不可避免？制度、误判和计划在其中扮演了什么角色？", scoringPoints: ["能分析同盟体系如何使局部冲突扩大化", "能说明战争计划的僵化（如德国的施里芬计划）如何使局势失控", "能对'体系性悲剧'这一概念提出自己的理解"], maxScore: 6 }
  ]},

  { lesson: 29, title: "战壕战", questions: [
    { type: "choice", difficulty: 1, text: "一战的主战场在：", options: ["A. 非洲", "B. 欧洲", "C. 亚洲", "D. 美洲"], answer: "B", knowledgePoint: "新武器：技术让战争更致命", analysis: "第一次世界大战的主战场在欧洲，主要分为西线、东线和南线战场。" },
    { type: "choice", difficulty: 1, text: "一战西线战场的长度约为：", options: ["A. 100公里", "B. 700公里", "C. 2000公里", "D. 5000公里"], answer: "B", knowledgePoint: "战壕：泥泞中的僵局", analysis: "从瑞士边境到英吉利海峡，西线的堑壕系统长达约七百公里——双方在这里对峙了四年。" },
    { type: "choice", difficulty: 2, text: "堑壕战的特点是：", options: ["A. 快速进攻", "B. 长期僵持", "C. 机动灵活", "D. 速战速决"], answer: "B", knowledgePoint: "战壕：泥泞中的僵局", analysis: "堑壕战导致战线长期僵持，双方在战壕中对峙了四年，伤亡惨重。" },
    { type: "choice", difficulty: 2, text: "索姆河战役第一天英军的伤亡人数是：", options: ["A. 约1000人", "B. 约1万人", "C. 约5.7万人", "D. 约57万人"], answer: "C", knowledgePoint: "战壕：泥泞中的僵局", analysis: "1916年7月1日——索姆河战役第一天——英军伤亡57,470人，其中19,240人死亡——这是英国军事史上最惨重的一天。" },
    { type: "choice", difficulty: 3, text: "新式武器包括：", options: ["A. 弓箭", "B. 机关枪", "C. 长矛", "D. 盾牌"], answer: "B", knowledgePoint: "战壕：泥泞中的僵局", analysis: "机关枪、铁丝网、火炮等新技术使进攻变得极其困难，导致了堑壕战的出现。" },
    { type: "open", text: "一战中每前进一米就死两名士兵。请分析：为什么在明知进攻等于自杀的情况下，将军们仍然命令士兵爬出战壕冲锋？这种'无意义的牺牲'给后世留下了什么教训？", scoringPoints: ["能说明当时军事思想的落后（仍沿用拿破仑时代的战术）", "能分析新技术（机关枪）与旧战术之间的矛盾", "能评价战争中对人类生命价值的不同认知"], maxScore: 4 }
  ]},

  { lesson: 30, title: "凡尔赛条约", questions: [
    { type: "choice", difficulty: 1, text: "一战结束于哪一年？", options: ["A. 1918年", "B. 1919年", "C. 1920年", "D. 1921年"], answer: "A", knowledgePoint: "二十年的休战", analysis: "1918年11月11日，德国签署停战协定，第一次世界大战正式结束。" },
    { type: "choice", difficulty: 1, text: "凡尔赛条约第231条（战争罪责条款）的内容是什么？", options: ["A. 德国割让所有殖民地", "B. 德国承担全部战争责任", "C. 德国支付具体赔款数额", "D. 德国解散全部军队"], answer: "B", knowledgePoint: "失败的和平：凡尔赛的惩罚", analysis: "第231条宣布德国对战争造成的所有损失承担全部责任——这在德国人看来是不公平的道德审判。" },
    { type: "choice", difficulty: 2, text: "凡尔赛条约对德国的制裁包括：", options: ["A. 扩大领土", "B. 巨额赔款", "C. 允许扩军", "D. 免除债务"], answer: "B", knowledgePoint: "失败的和平：凡尔赛的惩罚", analysis: "凡尔赛条约要求德国支付巨额赔款，割让领土，限制军队规模。" },
    { type: "choice", difficulty: 2, text: "英国经济学家凯恩斯在凡尔赛条约签署后预言了什么？", options: ["A. 德国会迅速复兴", "B. 这不是和平——是二十年的停战", "C. 欧洲会永久和平", "D. 美国会接管欧洲"], answer: "B", knowledgePoint: "失败的和平：凡尔赛的惩罚", analysis: "凯恩斯是英国参加和会的代表——他提前退出了会议并写了一本书，预言凡尔赛条约不会带来和平，只会导致另一场战争。1939年——他的预言应验了。" },
    { type: "choice", difficulty: 3, text: "凡尔赛条约的影响是：", options: ["A. 促进和平", "B. 埋下二战伏笔", "C. 稳定欧洲", "D. 经济繁荣"], answer: "B", knowledgePoint: "二十年的休战", analysis: "凡尔赛条约对德国过于苛刻，激起了德国民众的不满，为二战埋下了伏笔。" },
    { type: "open", text: "凡尔赛条约制造了一个被羞辱但未被摧毁的德国。请分析：为什么'太过苛刻'和'不够严厉'的矛盾并存于这一条约中？一个更好的和约应该是什么样的？", scoringPoints: ["能分析条约既苛刻（赔款/领土）又不够彻底（保留了德国统一）的矛盾", "能讨论'惩罚vs和解'在战后处理中的永恒困境", "能提出自己对'公正和平'的理解"], maxScore: 6 }
  ]},

  // ── 第7章 两次世界大战 ──────────────────────────────────────

  { lesson: 31, title: "索姆河战役", questions: [
    { type: "choice", difficulty: 1, text: "索姆河战役发生在哪一年？", options: ["A. 1916年", "B. 1917年", "C. 1918年", "D. 1915年"], answer: "A", knowledgePoint: "索姆河：工业化的屠杀", analysis: "1916年7月1日，索姆河战役开始，是一战中最血腥的战役之一。" },
    { type: "choice", difficulty: 1, text: "索姆河战役中英军第一天的伤亡是多少？", options: ["A. 约1千人", "B. 约1万人", "C. 约5.7万人", "D. 约57万人"], answer: "C", knowledgePoint: "索姆河：工业化的屠杀", analysis: "第一天英军就伤亡57,470人——其中近两万人阵亡——这是英国军事史上最惨重的一天。" },
    { type: "choice", difficulty: 2, text: "索姆河战役的特点是：", options: ["A. 速战速决", "B. 伤亡惨重", "C. 轻松胜利", "D. 没有战斗"], answer: "B", knowledgePoint: "索姆河：工业化的屠杀", analysis: "索姆河战役持续了五个月，双方伤亡超过100万人，是一战中最惨烈的战役。" },
    { type: "choice", difficulty: 2, text: "索姆河战役五个月后战线移动了多少？", options: ["A. 约1公里", "B. 约10公里", "C. 约100公里", "D. 约500公里"], answer: "B", knowledgePoint: "索姆河：工业化的屠杀", analysis: "双方超过一百万人伤亡——战线移动了约十公里——每前进一米就死两名士兵。" },
    { type: "choice", difficulty: 3, text: "坦克首次投入使用是在：", options: ["A. 马恩河战役", "B. 凡尔登战役", "C. 索姆河战役", "D. 日德兰海战"], answer: "C", knowledgePoint: "坦克：从索姆河开始的装甲时代", analysis: "1916年索姆河战役中，英军首次使用坦克，这是装甲作战的开端。" },
    { type: "open", text: "索姆河战役展示了新技术（机关枪）如何使战争变成了绞肉机。请分析：为什么技术进步在战争中总是首先被用来提高杀伤效率，而不是用来保护生命？", scoringPoints: ["能具体说明机关枪等技术如何改变了战场", "能分析'进攻vs防御'技术失衡造成的僵局", "能对技术与伦理的关系提出自己的思考"], maxScore: 4 }
  ]},

  { lesson: 32, title: "十月革命", questions: [
    { type: "choice", difficulty: 1, text: "十月革命发生在哪一年？", options: ["A. 1917年", "B. 1918年", "C. 1919年", "D. 1920年"], answer: "A", knowledgePoint: "列宁的四月提纲：和平、土地、面包", analysis: "1917年11月，布尔什维克党在列宁的领导下夺取了政权，建立了世界上第一个社会主义国家。" },
    { type: "choice", difficulty: 1, text: "列宁提出的三个口号是：", options: ["A. 自由、平等、博爱", "B. 和平、土地、面包", "C. 战争、荣誉、祖国", "D. 统一、发展、强大"], answer: "B", knowledgePoint: "列宁的四月提纲：和平、土地、面包", analysis: "列宁提出的和平、土地、面包三个口号直接回应了当时俄国人民最迫切的痛苦，比临时政府的承诺更有吸引力。" },
    { type: "choice", difficulty: 2, text: "十月革命的领导者是：", options: ["A. 斯大林", "B. 列宁", "C. 托洛茨基", "D. 普列汉诺夫"], answer: "B", knowledgePoint: "列宁的四月提纲：和平、土地、面包", analysis: "列宁是布尔什维克党的领袖，领导了十月革命。" },
    { type: "choice", difficulty: 2, text: "二月革命后临时政府犯下的致命错误是什么？", options: ["A. 没有废除封建制度", "B. 决定继续参加一战", "C. 允许列宁回国", "D. 解散了议会"], answer: "B", knowledgePoint: "列宁的四月提纲：和平、土地、面包", analysis: "临时政府选择继续参战——希望通过打赢战争来赢得支持。但战争不会因为你希望赢就赢——前线继续溃败，民众更加绝望。" },
    { type: "choice", difficulty: 3, text: "十月革命的影响是：", options: ["A. 巩固沙皇统治", "B. 建立社会主义", "C. 恢复资本主义", "D. 维持现状"], answer: "B", knowledgePoint: "内战的爆发：红军与白军的四年战争", analysis: "十月革命建立了世界上第一个社会主义国家，对世界历史产生了深远影响。" },
    { type: "open", text: "一战拖垮了沙皇俄国——但同样参战的英国和法国没有发生革命。请分析：为什么一战对俄国的影响比其他大国更致命？", scoringPoints: ["能分析俄国工业基础的薄弱使其无法支撑长期战争", "能说明俄国的社会矛盾（农奴制遗留）比西欧更尖锐", "能对'战争是革命催化剂'这一历史规律提出自己的理解"], maxScore: 6 }
  ]},

  { lesson: 33, title: "纳粹德国崛起", questions: [
    { type: "choice", difficulty: 1, text: "希特勒成为德国总理是在哪一年？", options: ["A. 1933年", "B. 1934年", "C. 1935年", "D. 1936年"], answer: "A", knowledgePoint: "国会纵火案：民主如何自杀", analysis: "1933年，希特勒被任命为德国总理，纳粹党开始在德国掌权。" },
    { type: "choice", difficulty: 1, text: "魏玛共和国崩溃的重要经济背景是？", options: ["A. 经济空前繁荣", "B. 大萧条导致失业率超30%", "C. 对外贸易顺差大", "D. 海外殖民地收入丰厚"], answer: "B", knowledgePoint: "大萧条：纳粹的机遇", analysis: "大萧条使德国经济崩溃——工业停产、银行倒闭、超过600万人失业——绝望中的人投票给了极端政党。" },
    { type: "choice", difficulty: 2, text: "纳粹党的全称是：", options: ["A. 德国社会党", "B. 国家社会主义德国工人党", "C. 德国共产党", "D. 德国自由党"], answer: "B", knowledgePoint: "国会纵火案：民主如何自杀", analysis: "纳粹党全称是国家社会主义德国工人党，宣扬极端民族主义和反犹主义。" },
    { type: "choice", difficulty: 2, text: "国会纵火案后希特勒通过哪个法案将立法权转移到自己手中？", options: ["A. 魏玛宪法", "B. 授权法案", "C. 纽伦堡法案", "D. 凡尔赛条约"], answer: "B", knowledgePoint: "国会纵火案：民主如何自杀", analysis: "1933年国会纵火案后，希特勒利用事件制造的恐慌气氛，让国会通过了《授权法案》——把立法权从国会转移到了内阁，即希特勒手中。" },
    { type: "choice", difficulty: 3, text: "纳粹崛起的原因是：", options: ["A. 经济繁荣", "B. 大萧条", "C. 社会稳定", "D. 国际支持"], answer: "B", knowledgePoint: "大萧条：纳粹的机遇", analysis: "大萧条使德国经济崩溃，民众对政府失去信心，为纳粹党的崛起提供了土壤。" },
    { type: "open", text: "希特勒是通过民主程序上台的——然后迅速摧毁了民主。请分析：民主制度如何被用来终结民主本身？这个教训对我们今天有什么启示？", scoringPoints: ["能具体说明希特勒如何利用魏玛宪法的漏洞合法地夺取权力", "能分析民主制度的内在脆弱性（保护言论自由也包括保护反民主的言论）", "能对现代民主的自我保护机制提出自己的思考"], maxScore: 6 }
  ]},

  { lesson: 34, title: "第二次世界大战", questions: [
    { type: "choice", difficulty: 1, text: "二战爆发于哪一年？", options: ["A. 1939年", "B. 1940年", "C. 1941年", "D. 1942年"], answer: "A", knowledgePoint: "全球战场：欧洲与太平洋", analysis: "1939年9月1日，德国入侵波兰，第二次世界大战正式爆发。" },
    { type: "choice", difficulty: 1, text: "闪击战战术的核心是什么？", options: ["A. 用骑兵突袭敌人后方", "B. 坦克、飞机和步兵的高速协同作战", "C. 使用毒气弹大规模杀伤", "D. 通过宣传瓦解敌军士气"], answer: "B", knowledgePoint: "闪电战：德国如何六周击败法国", analysis: "闪击战的核心是坦克集群在空军掩护下高速突破敌军防线——不是靠人数而是靠速度和协同。" },
    { type: "choice", difficulty: 2, text: "二战的主战场包括：", options: ["A. 只有欧洲", "B. 欧洲和太平洋", "C. 只有亚洲", "D. 只有非洲"], answer: "B", knowledgePoint: "全球战场：欧洲与太平洋", analysis: "二战有两个主要战场：欧洲战场对抗德国和意大利，太平洋战场对抗日本。" },
    { type: "choice", difficulty: 2, text: "法国在马奇诺防线上投入巨资，结果德军从哪里绕过？", options: ["A. 从海上登陆", "B. 穿过阿登森林", "C. 从意大利进攻", "D. 从西班牙借道"], answer: "B", knowledgePoint: "闪电战：德国如何六周击败法国", analysis: "法国在德法边境修建了坚固的马奇诺防线——德军却穿过被认为'坦克无法通过'的阿登森林绕过了它。" },
    { type: "choice", difficulty: 3, text: "二战的转折点是：", options: ["A. 珍珠港事件", "B. 斯大林格勒战役", "C. 诺曼底登陆", "D. 柏林战役"], answer: "B", knowledgePoint: "全球战场：欧洲与太平洋", analysis: "斯大林格勒战役是二战的转折点，苏军击败德军，开始战略反攻。" },
    { type: "open", text: "一战的堑壕里四年推进不到十公里——二战中德国六周内就穿越了整个法国。请分析：军事技术的变化如何改变了战争的面貌？", scoringPoints: ["能对比一战堑壕战和二战闪击战的战术差异", "能分析坦克和无线电台等新技术如何使高速作战成为可能", "能讨论'速度vs杀伤'在战争中的关系"], maxScore: 4 }
  ]},

  { lesson: 35, title: "大屠杀", questions: [
    { type: "choice", difficulty: 1, text: "大屠杀中遇难的犹太人约有：", options: ["A. 100万", "B. 300万", "C. 600万", "D. 900万"], answer: "C", knowledgePoint: "铭记与反思：大屠杀的历史教训", analysis: "在纳粹统治期间，大约600万犹太人被系统性地屠杀。" },
    { type: "choice", difficulty: 1, text: "大屠杀的'最终解决方案'是在哪次会议上制定的？", options: ["A. 雅尔塔会议", "B. 万湖会议", "C. 慕尼黑会议", "D. 柏林会议"], answer: "B", knowledgePoint: "'最终解决方案'：工业化的种族灭绝", analysis: "1942年1月，纳粹高级官员在柏林万湖开会，制定了系统性地消灭欧洲约一千一百万犹太人的'最终解决方案'。" },
    { type: "choice", difficulty: 2, text: "集中营的作用是：", options: ["A. 关押战犯", "B. 种族灭绝", "C. 劳动改造", "D. 教育中心"], answer: "B", knowledgePoint: "铭记与反思：大屠杀的历史教训", analysis: "纳粹建立了多个集中营，用于关押和屠杀犹太人及其他被视为敌人的群体。" },
    { type: "choice", difficulty: 2, text: "战后对纳粹领导人进行审判的地点是在：", options: ["A. 柏林", "B. 纽伦堡", "C. 慕尼黑", "D. 维也纳"], answer: "B", knowledgePoint: "'最终解决方案'：工业化的种族灭绝", analysis: "1945-1946年，同盟国在德国纽伦堡对纳粹主要战犯进行了审判，确立了'反人类罪'的法律概念。" },
    { type: "choice", difficulty: 3, text: "大屠杀的教训是：", options: ["A. 种族主义无害", "B. 警惕极端主义", "C. 战争是解决问题的方式", "D. 偏见是正常的"], answer: "B", knowledgePoint: "铭记与反思：大屠杀的历史教训", analysis: "大屠杀提醒我们要警惕种族主义和极端主义，尊重人类的多样性。" },
    { type: "open", text: "大屠杀不只是希特勒和几个恶魔犯下的罪行——它涉及了无数普通人的配合：铁路工人把犹太人运到集中营、公务员制定种族法、普通市民对邻居的遭遇视而不见。请谈谈你如何看待'普通人在极端体制下的共谋'？", scoringPoints: ["能分析极权体制下从歧视到屠杀的渐进过程", "能讨论'服从权威'和'个人良知'之间的冲突", "能对'如何在日常中防止类似悲剧'提出自己的思考"], maxScore: 6 }
  ]},

  // ── 第8章 冷战 ──────────────────────────────────────────

  { lesson: 36, title: "雅尔塔会议", questions: [
    { type: "choice", difficulty: 1, text: "雅尔塔会议召开于哪一年？", options: ["A. 1945年", "B. 1946年", "C. 1947年", "D. 1948年"], answer: "A", knowledgePoint: "三巨头：罗斯福、丘吉尔、斯大林", analysis: "1945年，二战结束前夕，美英苏三国领导人在雅尔塔会面，划分了战后的势力范围。" },
    { type: "choice", difficulty: 1, text: "雅尔塔会议的三个参加国是：", options: ["A. 美、英、法", "B. 美、英、苏", "C. 美、苏、中", "D. 英、苏、中"], answer: "B", knowledgePoint: "三巨头：罗斯福、丘吉尔、斯大林", analysis: "雅尔塔会议由美国总统罗斯福、英国首相丘吉尔和苏联领导人斯大林参加。" },
    { type: "choice", difficulty: 2, text: "雅尔塔会议的参与国是：", options: ["A. 美国、英国、苏联", "B. 美国、英国、法国", "C. 苏联、中国、英国", "D. 美国、苏联、中国"], answer: "A", knowledgePoint: "三巨头：罗斯福、丘吉尔、斯大林", analysis: "雅尔塔会议由美国、英国和苏联三国领导人参加。" },
    { type: "choice", difficulty: 2, text: "雅尔塔会议上关于德国的决定是什么？", options: ["A. 德国被彻底毁灭", "B. 德国被四个战胜国分区占领", "C. 德国继续保持统一", "D. 德国成为中立国"], answer: "B", knowledgePoint: "三巨头：罗斯福、丘吉尔、斯大林", analysis: "德国被分成四个占领区——美国、英国、法国、苏联各管一块。柏林虽然深入苏联占领区也被分成四块。" },
    { type: "choice", difficulty: 3, text: "雅尔塔会议的影响是：", options: ["A. 促进世界和平", "B. 奠定冷战格局", "C. 消灭共产主义", "D. 统一欧洲"], answer: "B", knowledgePoint: "三巨头：罗斯福、丘吉尔、斯大林", analysis: "雅尔塔会议划分了战后的势力范围，奠定了冷战的基础。" },
    { type: "open", text: "雅尔塔会议上没有一张地图被正式画过线——但一条隐形的线从那一刻起横贯了欧洲。请分析：为什么在会议桌上画出的'势力范围'在没有被明文规定的情况下仍然被执行了几十年？", scoringPoints: ["能分析大国之间'心照不宣'的默契和军事对峙的现实", "能讨论势力范围对东欧国家主权的剥夺", "能对大国外交中的'潜规则'提出自己的理解"], maxScore: 4 }
  ]},

  { lesson: 37, title: "铁幕与马歇尔计划", questions: [
    { type: "choice", difficulty: 1, text: "铁幕演说发表于哪一年？", options: ["A. 1946年", "B. 1947年", "C. 1948年", "D. 1949年"], answer: "A", knowledgePoint: "铁幕演说：冷战有了名字", analysis: "1946年，丘吉尔发表铁幕演说，拉开了冷战的序幕。" },
    { type: "choice", difficulty: 1, text: "'铁幕'指的是什么？", options: ["A. 欧洲的钢铁工业区", "B. 苏联在东欧建立的势力和控制线", "C. 防止德国入侵的军事防线", "D. 联合国在欧洲的巡逻线"], answer: "B", knowledgePoint: "铁幕演说：冷战有了名字", analysis: "铁幕是一个比喻——苏联在东欧建立了一条封锁线，铁幕东侧的国家不能自由选择政府、不能自由与西方贸易、不能自由获取信息。" },
    { type: "choice", difficulty: 2, text: "马歇尔计划的目的是：", options: ["A. 援助苏联", "B. 援助欧洲重建", "C. 扩张领土", "D. 发动战争"], answer: "B", knowledgePoint: "马歇尔计划：美元如何重建欧洲", analysis: "马歇尔计划通过经济援助帮助欧洲重建，同时加强了美国对欧洲的影响力。" },
    { type: "choice", difficulty: 2, text: "杜鲁门主义的核心是：", options: ["A. 孤立主义", "B. 遏制政策", "C. 扩张主义", "D. 和平主义"], answer: "B", knowledgePoint: "杜鲁门主义与遏制政策", analysis: "杜鲁门主义确立了美国的遏制政策，旨在阻止苏联的扩张。" },
    { type: "choice", difficulty: 3, text: "马歇尔计划援助欧洲的金额约为：", options: ["A. 13亿美元", "B. 130亿美元", "C. 1300亿美元", "D. 1.3万亿美元"], answer: "B", knowledgePoint: "马歇尔计划：美元如何重建欧洲", analysis: "1948年到1951年间美国通过马歇尔计划向16个西欧国家提供了约130亿美元的援助——不是贷款，主要是赠款和物资。" },
    { type: "open", text: "马歇尔计划被说成是'人类历史上最慷慨的援助计划'——但它的动机包括了防止共产主义扩张和为美国商品打开市场。请分析：援助可以同时是道德的和自私的吗？'利他'和'利己'一定矛盾吗？", scoringPoints: ["能具体说明马歇尔计划的多重动机", "能分析经济援助作为外交工具的效果", "能评价国际关系中的'利己利他'问题"], maxScore: 4 }
  ]},

  { lesson: 38, title: "朝鲜战争", questions: [
    { type: "choice", difficulty: 1, text: "朝鲜战争爆发于哪一年？", options: ["A. 1950年", "B. 1951年", "C. 1952年", "D. 1953年"], answer: "A", knowledgePoint: "三八线：一条纬度线如何变成一个国家的命运", analysis: "1950年6月，朝鲜战争爆发，这是冷战中的第一次大规模热战。" },
    { type: "choice", difficulty: 1, text: "朝鲜战争前朝鲜半岛的分界线是？", options: ["A. 17度线", "B. 38度线（三八线）", "C. 纬线39度", "D. 北纬40度"], answer: "B", knowledgePoint: "三八线：一条纬度线如何变成一个国家的命运", analysis: "二战后朝鲜以三八线（北纬38度）为界，苏联占领北部、美国占领南部——后来分别建立了两个意识形态完全不同的国家。" },
    { type: "choice", difficulty: 2, text: "朝鲜战争的结果是：", options: ["A. 朝鲜统一", "B. 韩国统一", "C. 维持分裂", "D. 中国占领"], answer: "C", knowledgePoint: "三八线：一条纬度线如何变成一个国家的命运", analysis: "1953年，双方签署停战协定，朝鲜仍然分裂为南北两个国家。" },
    { type: "choice", difficulty: 2, text: "朝鲜战争中中国在什么时候参战？", options: ["A. 战争刚开始", "B. 联合国军打到鸭绿江边时", "C. 战争结束时", "D. 中国没有参战"], answer: "B", knowledgePoint: "三八线：一条纬度线如何变成一个国家的命运", analysis: "1950年10月，联合国军一路向北打到鸭绿江边后，中国派遣志愿军参战，将联军推回三八线附近。" },
    { type: "choice", difficulty: 3, text: "朝鲜战争的影响是：", options: ["A. 缓和冷战", "B. 加剧冷战紧张", "C. 结束冷战", "D. 促进和平"], answer: "B", knowledgePoint: "一场没有赢家的战争", analysis: "朝鲜战争加剧了冷战的紧张局势，导致军备竞赛进一步升级。" },
    { type: "open", text: "朝鲜战争打了三年，数百万人死亡，最终边界和战前几乎一模一样。请分析：当战争'一无所获'时，我们如何评价它的历史意义？", scoringPoints: ["能列出朝鲜战争的实际结果（分裂依旧）", "能分析其间接影响——美国增加军费、中美对抗、冷战升级", "能对'战争的成本vs收益'提出自己的评判"], maxScore: 4 }
  ]},

  { lesson: 39, title: "古巴导弹危机", questions: [
    { type: "choice", difficulty: 1, text: "古巴导弹危机发生在哪一年？", options: ["A. 1962年", "B. 1963年", "C. 1964年", "D. 1965年"], answer: "A", knowledgePoint: "十三天：人类站在核战争的边缘", analysis: "1962年10月，古巴导弹危机爆发，是冷战中美苏最接近核战争的一次危机。" },
    { type: "choice", difficulty: 1, text: "古巴导弹危机持续了多少天？", options: ["A. 3天", "B. 13天", "C. 30天", "D. 100天"], answer: "B", knowledgePoint: "十三天：人类站在核战争的边缘", analysis: "从1962年10月16日肯尼迪得知导弹部署，到10月28日赫鲁晓夫同意撤出——整整十三天。" },
    { type: "choice", difficulty: 2, text: "古巴导弹危机的原因是：", options: ["A. 苏联在古巴部署导弹", "B. 美国入侵古巴", "C. 古巴进攻美国", "D. 经济制裁"], answer: "A", knowledgePoint: "从危机到缓和：核战争没有赢家", analysis: "苏联在古巴部署导弹，威胁到美国的安全，引发了危机。" },
    { type: "choice", difficulty: 2, text: "古巴导弹危机中最接近战争的是哪一天？", options: ["A. 危机第一天", "B. 10月27日'黑色星期六'", "C. 最后一天", "D. 危机一周后"], answer: "B", knowledgePoint: "十三天：人类站在核战争的边缘", analysis: "10月27日——美军U-2侦察机在古巴被击落——军方要求立即报复——肯尼迪拒绝——这是人类离核战争最近的时刻。" },
    { type: "choice", difficulty: 3, text: "古巴导弹危机的解决方式是：", options: ["A. 战争", "B. 外交谈判", "C. 经济制裁", "D. 军事威胁"], answer: "B", knowledgePoint: "从危机到缓和：核战争没有赢家", analysis: "经过紧张的外交谈判，苏联同意撤除导弹，美国承诺不入侵古巴，危机和平解决。" },
    { type: "open", text: "古巴导弹危机后美苏建立了直接通讯热线——'红色电话'。请分析：这个危机的最大教训是什么？为什么两位领导人明明都不想打核战争，却几乎走到了战争边缘？", scoringPoints: ["能分析危机中双方信息不畅和误判的风险", "能说明'红色电话'如何降低了未来危机的风险", "能对'沟通在国际危机中的作用'提出自己的观点"], maxScore: 4 }
  ]},

  { lesson: 40, title: "柏林墙", questions: [
    { type: "choice", difficulty: 1, text: "柏林墙建立于哪一年？", options: ["A. 1961年", "B. 1962年", "C. 1963年", "D. 1964年"], answer: "A", knowledgePoint: "一夜之间建成的墙", analysis: "1961年，东德修建柏林墙，分隔了东柏林和西柏林。" },
    { type: "choice", difficulty: 1, text: "修建柏林墙的直接原因是什么？", options: ["A. 防御北约进攻", "B. 阻止东德人大规模逃往西德", "C. 作为旅游景点", "D. 美化城市环境"], answer: "B", knowledgePoint: "一夜之间建成的墙", analysis: "1949到1961年间约270万东德人通过西柏林逃往西德——大部分是年轻人和技术工人——东德经济无法承受这种流失。" },
    { type: "choice", difficulty: 2, text: "柏林墙倒塌于哪一年？", options: ["A. 1989年", "B. 1990年", "C. 1991年", "D. 1987年"], answer: "A", knowledgePoint: "墙倒了：1989年11月9日", analysis: "1989年11月9日，柏林墙倒塌，象征着冷战秩序开始瓦解。" },
    { type: "choice", difficulty: 2, text: "柏林墙倒塌的直接触发事件是什么？", options: ["A. 苏联下令拆除", "B. 东德政府发言人的口误导致民众涌向边境", "C. 西德军队进攻东德", "D. 联合国决议"], answer: "B", knowledgePoint: "墙倒了：1989年11月9日", analysis: "1989年11月9日，东德政府发言人沙博夫斯基在新闻发布会上对新旅行法规表述不清——成千上万人以为边境立即开放——涌向检查站——守卫在压力下打开了大门。" },
    { type: "choice", difficulty: 3, text: "德国统一是在哪一年？", options: ["A. 1989年", "B. 1990年", "C. 1991年", "D. 1987年"], answer: "B", knowledgePoint: "墙倒了：1989年11月9日", analysis: "1990年，东德和西德统一，标志着冷战秩序瓦解过程中的重要转折。" },
    { type: "open", text: "柏林墙用混凝土和铁丝网建成，高3.6米，岗哨300个——但它最终不是被军队而是被和平游行和一次口误推倒的。请分析：为什么物质上最坚固的墙也挡不住人民对自由的渴望？", scoringPoints: ["能具体说明1989年东德和平示威的规模和性质", "能分析体制的合法性来自被统治者的同意这一政治学原理", "能对'墙的倒塌'的象征意义提出自己的理解"], maxScore: 4 }
  ]},

  // ── 第9章 战后世界 ──────────────────────────────────────────

  { lesson: 41, title: "印度独立", questions: [
    { type: "choice", difficulty: 1, text: "印度独立运动的领袖是：", options: ["A. 真纳", "B. 甘地", "C. 尼赫鲁", "D. 泰戈尔"], answer: "B", knowledgePoint: "非暴力不合作：没有枪的革命", analysis: "甘地领导的非暴力不合作运动是印度独立的关键。" },
    { type: "choice", difficulty: 1, text: "甘地最著名的非暴力抗议行动是？", options: ["A. 武装起义占领总督府", "B. 食盐进军——步行400公里自己制盐", "C. 绝食至死威胁英国", "D. 联合日本对抗英国"], answer: "B", knowledgePoint: "非暴力不合作：没有枪的革命", analysis: "1930年，甘地步行400公里到海边自己制盐——这个简单到每个人都能参与、勇敢到英国人无法忽视的行动点燃了全印度的反抗。" },
    { type: "choice", difficulty: 2, text: "印巴分治的时间是：", options: ["A. 1947年", "B. 1948年", "C. 1949年", "D. 1950年"], answer: "A", knowledgePoint: "印巴分治：独立的另一面", analysis: "1947年，印度分为印度和巴基斯坦两个国家。" },
    { type: "choice", difficulty: 2, text: "甘地没有参加1947年8月15日的独立庆祝仪式，原因是：", options: ["A. 他生病了", "B. 他在绝食抗议分治带来的教派暴力", "C. 他被英国禁止参加", "D. 他不认为自己对国家有贡献"], answer: "B", knowledgePoint: "印巴分治：独立的另一面", analysis: "甘地在加尔各答绝食——为分治后大规模教派暴力中的死难者祈祷，也为印度教徒和穆斯林之间的和解。" },
    { type: "choice", difficulty: 3, text: "分治的代价是：", options: ["A. 和平过渡", "B. 大规模冲突", "C. 经济繁荣", "D. 文化融合"], answer: "B", knowledgePoint: "印巴分治：独立的另一面", analysis: "印巴分治导致了大规模的人口迁移和暴力冲突，数百万人死亡或流离失所。" },
    { type: "open", text: "甘地说'以眼还眼，世界只会更盲目'——但他最终死于一个印度教极端主义者的枪下。请评价：非暴力的倡导者死于暴力，这是否意味着非暴力的失败？还是说明了别的什么？", scoringPoints: ["能说明甘地一生的成就与非暴力理念的一致性", "能分析他被害的原因——他在分治后主张保护穆斯林", "能对'思想的殉道'提出自己的理解和评价"], maxScore: 4 }
  ]},

  { lesson: 42, title: "非洲独立浪潮", questions: [
    { type: "choice", difficulty: 1, text: "1960年被称为：", options: ["A. 非洲年", "B. 独立年", "C. 解放年", "D. 自由年"], answer: "A", knowledgePoint: "1960年非洲年：殖民时代终结的开始", analysis: "1960年有17个非洲国家获得独立，被称为非洲年。" },
    { type: "choice", difficulty: 1, text: "撒哈拉以南非洲第一个独立的国家是：", options: ["A. 尼日利亚", "B. 加纳", "C. 肯尼亚", "D. 南非"], answer: "B", knowledgePoint: "1960年非洲年：殖民时代终结的开始", analysis: "1957年，加纳在恩克鲁玛的领导下独立——这是撒哈拉以南非洲第一个摆脱殖民统治的国家，点燃了全非洲的希望。" },
    { type: "choice", difficulty: 2, text: "非洲独立的方式包括：", options: ["A. 只有谈判", "B. 只有武装斗争", "C. 谈判和武装斗争", "D. 外部干预"], answer: "C", knowledgePoint: "1960年非洲年：殖民时代终结的开始", analysis: "非洲各国通过不同方式获得独立：有的通过谈判，有的通过武装斗争。" },
    { type: "choice", difficulty: 2, text: "殖民主义给独立后的非洲留下最持久的政治问题是什么？", options: ["A. 没有国歌和国旗", "B. 柏林会议上用尺子画的直线边界", "C. 没有人想当总统", "D. 没有货币"], answer: "B", knowledgePoint: "独立后的挑战：殖民遗产的重负", analysis: "殖民者走了但边界留了下来——这些直线把同一民族分到不同国家，把世仇关进同一国家，成为非洲无数次冲突的根源。" },
    { type: "choice", difficulty: 3, text: "独立后的挑战包括：", options: ["A. 经济繁荣", "B. 政治稳定", "C. 经济和政治挑战", "D. 文化统一"], answer: "C", knowledgePoint: "独立后的挑战：殖民遗产的重负", analysis: "独立后的非洲国家面临着经济、政治和社会的挑战，如贫困、腐败和冲突。" },
    { type: "open", text: "殖民者走了，但他们画的边界留下来；殖民者把原材料运走了，但没留下工厂。请分析：政治独立和经济独立哪个更难？为什么非洲独立60多年后仍在面对殖民时代留下的问题？", scoringPoints: ["能区分政治独立和经济独立的含义", "能分析殖民经济结构的顽固性（单一原材料出口经济）", "能对'后殖民困境'提出自己的理解"], maxScore: 6 }
  ]},

  { lesson: 43, title: "巴以冲突", questions: [
    { type: "choice", difficulty: 1, text: "以色列建国是在哪一年？", options: ["A. 1948年", "B. 1949年", "C. 1950年", "D. 1951年"], answer: "A", knowledgePoint: "六日战争与持续的和解努力", analysis: "1948年，联合国通过决议，在巴勒斯坦地区建立以色列国。" },
    { type: "choice", difficulty: 1, text: "巴以冲突的核心是什么？", options: ["A. 纯粹的宗教教义分歧", "B. 两个民族对同一片土地的主权争夺", "C. 水资源分配不均", "D. 冷战超级大国的操控"], answer: "B", knowledgePoint: "六日战争与持续的和解努力", analysis: "犹太人和阿拉伯人对巴勒斯坦地区都有历史主张——两个真实的历史叙事指向同一片土地，这是冲突最核心的问题。" },
    { type: "choice", difficulty: 2, text: "巴以冲突的根源包括：", options: ["A. 只有宗教", "B. 历史、宗教和领土", "C. 只有经济", "D. 只有文化"], answer: "B", knowledgePoint: "同一片土地，两个民族的历史叙事", analysis: "巴以冲突涉及历史、宗教、领土等多个复杂因素。" },
    { type: "choice", difficulty: 2, text: "1967年六日战争中以色列占领的区域不包括：", options: ["A. 西奈半岛", "B. 约旦河西岸", "C. 埃及全境", "D. 加沙地带"], answer: "C", knowledgePoint: "六日战争与持续的和解努力", analysis: "六日战争中以色列占领了西奈半岛、加沙地带、约旦河西岸和东耶路撒冷——但从未占领埃及全境。" },
    { type: "choice", difficulty: 3, text: "中东战争共有几次？", options: ["A. 2次", "B. 3次", "C. 4次", "D. 5次"], answer: "C", knowledgePoint: "六日战争与持续的和解努力", analysis: "从1948年到1973年，爆发了四次中东战争。" },
    { type: "open", text: "耶路撒冷对犹太人、基督徒和穆斯林都是圣城。巴以冲突中，主权争执和宗教情感交织在一起，使和平变得极其困难。请分析：当两个民族的历史叙事都声称同一片土地属于自己时，还有和平的可能吗？", scoringPoints: ["能说明双方各自的历史依据", "能分析'共享主权'方案的可能性和困难", "能对历史冲突中的妥协提出自己的理解"], maxScore: 6 }
  ]},

  { lesson: 44, title: "越南战争", questions: [
    { type: "choice", difficulty: 1, text: "越南战争持续了多长时间？", options: ["A. 10年", "B. 20年", "C. 30年", "D. 40年"], answer: "B", knowledgePoint: "从法国殖民到美国介入", analysis: "越南战争从1955年到1975年，持续了20年。" },
    { type: "choice", difficulty: 1, text: "美国在越南投入地面部队最多时约有：", options: ["A. 5万人", "B. 54万人", "C. 100万人", "D. 200万人"], answer: "B", knowledgePoint: "从法国殖民到美国介入", analysis: "1968年高峰期约有54万美军在越南——世界上最强大的军队陷入了一场无法打赢的丛林战争。" },
    { type: "choice", difficulty: 2, text: "美国介入越南战争的原因是：", options: ["A. 人道主义", "B. 遏制共产主义", "C. 经济利益", "D. 领土扩张"], answer: "B", knowledgePoint: "从法国殖民到美国介入", analysis: "美国试图阻止共产主义在越南的扩张，这是冷战遏制政策的一部分。" },
    { type: "choice", difficulty: 2, text: "1968年春节攻势的意义在于：", options: ["A. 越共被彻底消灭", "B. 虽然越共军事上输了但政治赢了——美国民众不再相信政府在赢", "C. 战争结束", "D. 美国增兵越南"], answer: "B", knowledgePoint: "战争对美国社会的撕裂", analysis: "春节攻势中越共攻入了美国大使馆——虽然被击退——但电视画面让美国民众看到了战争的真实面貌，反战运动从此急剧升级。" },
    { type: "choice", difficulty: 3, text: "越南战争的结果是：", options: ["A. 美国胜利", "B. 北越胜利", "C. 和平共处", "D. 分裂状态"], answer: "B", knowledgePoint: "战争对美国社会的撕裂", analysis: "1975年，南越政权垮台，越南实现统一，美国最终失败。" },
    { type: "open", text: "美国赢得了越南战争中的每一场正面战役——却输掉了整场战争。请分析：为什么在军事上'不败'的情况下，美国仍然失败了？", scoringPoints: ["能分析游击战的特点——常规军队无法消灭隐藏在民众中的敌人", "能说明美国国内反战运动的压力如何迫使政府撤军","能对'军事胜利不等于政治胜利'这一命题提出自己的理解"], maxScore: 6 }
  ]},

  { lesson: 45, title: "民权运动", questions: [
    { type: "choice", difficulty: 1, text: "马丁·路德·金是哪个运动的领袖？", options: ["A. 女权运动", "B. 民权运动", "C. 反战运动", "D. 环保运动"], answer: "B", knowledgePoint: "从1964年民权法案到今天", analysis: "马丁·路德·金是美国民权运动的领袖，为黑人争取平等权利。" },
    { type: "choice", difficulty: 1, text: "1955年蒙哥马利公车抵制的导火索是：", options: ["A. 公车票价上涨", "B. 罗莎·帕克斯拒绝给白人让座", "C. 公车路线被取消", "D. 黑人被禁止乘坐公车"], answer: "B", knowledgePoint: "蒙哥马利：一辆公共汽车上的革命", analysis: "1955年12月1日，黑人女裁缝罗莎·帕克斯在公车上拒绝把座位让给白人——这一事件点燃了长达381天的蒙哥马利公车抵制运动。" },
    { type: "choice", difficulty: 2, text: "《我有一个梦想》演讲发表于哪一年？", options: ["A. 1963年", "B. 1964年", "C. 1965年", "D. 1966年"], answer: "A", knowledgePoint: "蒙哥马利：一辆公共汽车上的革命", analysis: "1963年，马丁·路德·金在华盛顿发表了著名的《我有一个梦想》演讲。" },
    { type: "choice", difficulty: 2, text: "1964年民权法案的主要作用是？", options: ["A. 建立了种族隔离制度", "B. 禁止基于种族、肤色的歧视", "C. 取消了黑人投票权", "D. 允许黑人担任总统"], answer: "B", knowledgePoint: "从1964年民权法案到今天", analysis: "1964年民权法案禁止在公共设施、就业和教育中的种族歧视——这是民权运动最重要的法律成果，但法律改变不意味着社会现实立刻改变。" },
    { type: "choice", difficulty: 3, text: "民权法案通过于哪一年？", options: ["A. 1963年", "B. 1964年", "C. 1965年", "D. 1966年"], answer: "B", knowledgePoint: "从1964年民权法案到今天", analysis: "1964年，美国通过了重要的民权法案，禁止种族歧视。" },
    { type: "open", text: "民权运动改变了法律——1964年民权法案和1965年投票权法案消除了法律上的种族歧视。但法律改变后，实际上的种族不平等仍然存在。请分析：为什么改变法律比改变社会更容易？消除法律歧视只是第一步，下一步是什么？", scoringPoints: ["能区分'法律上的平等'和'事实上的平等'", "能分析经济不平等和教育不平等如何代际传递", "能对'社会正义需要什么'提出自己的观点"], maxScore: 4 }
  ]},

  { lesson: 46, title: "史料分析", questions: [
    { type: "choice", difficulty: 1, text: "一手资料是指：", options: ["A. 后人写的历史书", "B. 原始的历史材料", "C. 历史老师的讲义", "D. 历史纪录片"], answer: "B", knowledgePoint: "一手资料与二手资料", analysis: "一手资料是指直接来自历史事件的原始材料，如日记、信件、官方文件等。" },
    { type: "choice", difficulty: 1, text: "以下哪项属于一手资料？", options: ["A. 二十世纪八十年代出版的历史教科书", "B. 1918年士兵在前线写的家信", "C. 历史教授的讲课稿", "D. 百科全书条目"], answer: "B", knowledgePoint: "一手资料与二手资料", analysis: "1918年的家信是当时写的原始材料——直接来自历史现场，没有经过后人的加工和解释。" },
    { type: "choice", difficulty: 2, text: "二手资料是指：", options: ["A. 原始文件", "B. 后人的研究和解释", "C. 考古发现", "D. 口述历史"], answer: "B", knowledgePoint: "一手资料与二手资料", analysis: "二手资料是后人对历史的研究和解释，如历史书籍、学术论文等。" },
    { type: "choice", difficulty: 2, text: "判断一份史料是否可靠，应该先问什么问题？", options: ["A. 它有多古老", "B. 谁写的、写给谁、为什么写", "C. 它有多长", "D. 它是否被很多人引用"], answer: "B", knowledgePoint: "史料可靠性的判断标准", analysis: "判断史料可靠性要分析来源（谁写的）、背景（在什么情况下写的）、目的（为什么写）——这些决定了史料的价值和局限。" },
    { type: "choice", difficulty: 3, text: "判断史料可靠性的方法包括：", options: ["A. 只看作者", "B. 考察来源、作者、目的", "C. 凭感觉判断", "D. 只看内容"], answer: "B", knowledgePoint: "史料可靠性的判断标准", analysis: "判断史料的可靠性需要考虑来源、作者、目的等因素，进行综合分析。" },
    { type: "open", text: "你找到一份1950年的报纸报道和一位老人的口述回忆，两者关于同一事件的说法有出入。请说明：你会如何决定哪份史料更可信？如果你必须用它们写一篇历史文章，你会如何处理这个矛盾？", scoringPoints: ["能比较两种史料的各自的优势和局限", "能说明'交叉验证'的原则", "能展示处理矛盾史料的分析思路"], maxScore: 6 }
  ]},

  // ── 第10章 历史方法论 ──────────────────────────────────────

  { lesson: 47, title: "偏见与视角", questions: [
    { type: "choice", difficulty: 1, text: "历史通常是由谁书写的？", options: ["A. 普通人", "B. 胜利者和统治阶级", "C. 历史学家", "D. 考古学家"], answer: "B", knowledgePoint: "谁写了历史？胜利者的视角", analysis: "历史通常是由胜利者、统治阶级书写的，这导致历史叙述可能带有片面性。" },
    { type: "choice", difficulty: 1, text: "历史叙述中的偏见主要来自哪里？", options: ["A. 历史学家不诚实", "B. 作者的立场、时代背景和视角", "C. 史料本身有错", "D. 读者理解能力差"], answer: "B", knowledgePoint: "谁写了历史？胜利者的视角", analysis: "偏见不一定来自恶意——一个1830年的英国历史学家真诚地认为帝国是好事，这是他的时代和立场塑造的视角。" },
    { type: "choice", difficulty: 2, text: "历史叙述中的偏见来源包括：", options: ["A. 只有政治观点", "B. 立场、时代背景、政治观点", "C. 只有个人喜好", "D. 没有偏见"], answer: "B", knowledgePoint: "谁写了历史？胜利者的视角", analysis: "偏见可能来自作者的立场、时代背景、政治观点等多种因素。" },
    { type: "choice", difficulty: 2, text: "多元视角的历史研究方法论意义是什么？", options: ["A. 让历史研究变得更混乱", "B. 通过不同视角的交叉让历史理解更完整", "C. 证明没有历史真相", "D. 取消历史研究的价值"], answer: "B", knowledgePoint: "多元视角：历史学的核心技能", analysis: "多元视角不是否定历史真相，而是承认真相比一种叙述更复杂——同一事件从不同视角看有不同的面向。" },
    { type: "choice", difficulty: 3, text: "理解历史需要：", options: ["A. 单一视角", "B. 多元视角", "C. 官方视角", "D. 权威视角"], answer: "B", knowledgePoint: "多元视角：历史学的核心技能", analysis: "理解历史需要从多个视角出发，倾听不同声音，才能更全面地理解历史事件。" },
    { type: "open", text: "一本英国史书上说'殖民帝国把现代文明带到了印度'，一本印度史书上说'殖民主义摧毁了印度经济'。两人都不在撒谎。请分析：为什么同一段历史会产生如此不同的叙述？作为历史研究者，你如何面对这种矛盾？", scoringPoints: ["能分析两国史学家不同的立场和背景", "能说明殖民主义双重性的两个方面", "能展示处理矛盾历史叙述的方法论思路"], maxScore: 6 }
  ]},

  { lesson: 48, title: "历史解释", questions: [
    { type: "choice", difficulty: 1, text: "同一历史事件可以有：", options: ["A. 唯一解释", "B. 多种解释", "C. 没有解释", "D. 官方解释"], answer: "B", knowledgePoint: "同一事件的多重解释", analysis: "同一历史事件可以有多种解释，不同的历史学家可能会有不同的观点。" },
    { type: "choice", difficulty: 1, text: "历史解释多元性的主要原因是什么？", options: ["A. 史料太少", "B. 不同的理论框架和问题意识", "C. 历史学家不专业", "D. 历史本身不存在"], answer: "B", knowledgePoint: "同一事件的多重解释", analysis: "不同历史学家带着不同的问题和理论框架研究同一事件——马克思主义者看到阶级冲突，文化史学家看到思想的影响，政治史学家看到决策——他们都提供了不同的解释面。" },
    { type: "choice", difficulty: 2, text: "历史解释多元性的原因是：", options: ["A. 资料不足", "B. 不同的视角和方法", "C. 故意歪曲", "D. 时间流逝"], answer: "B", knowledgePoint: "同一事件的多重解释", analysis: "历史解释的多元性源于不同的视角、方法和理论框架。" },
    { type: "choice", difficulty: 2, text: "好的历史因果分析应该包含哪些层次？", options: ["A. 只需要找出直接原因", "B. 同时考虑长期/短期、结构/个人、直接/根本多个层面", "C. 只看谁的错", "D. 只需列出所有事件"], answer: "B", knowledgePoint: "因果关系的历史分析", analysis: "好的历史分析不是满足于单一原因，而是梳理多个层面：长期结构性原因、短期触发因素、个人决策的作用等，评估它们的相对重要性。" },
    { type: "choice", difficulty: 3, text: "因果关系的特点是：", options: ["A. 单一原因", "B. 复杂多因", "C. 没有原因", "D. 随机发生"], answer: "B", knowledgePoint: "因果关系的历史分析", analysis: "历史事件的原因往往是复杂的，有直接原因、根本原因、偶然因素等。" },
    { type: "open", text: "法国大革命的原因是什么？马克思主义史学家说'资产阶级要政治权力'，修正主义史学家说'财政危机和决策失误'。请分析：你认为哪种解释更有说服力？为什么？", scoringPoints: ["能复述两种解释的基本内容", "能分析两种解释各自的依据和不足", "能提出自己的判断并说明理由"], maxScore: 6 }
  ]},

  { lesson: 49, title: "口述历史", questions: [
    { type: "choice", difficulty: 1, text: "口述历史的价值是：", options: ["A. 没有价值", "B. 提供个人体验", "C. 不如书面资料", "D. 不可信"], answer: "B", knowledgePoint: "口述历史：普通人的历史", analysis: "口述历史可以提供书面资料没有的细节和个人体验，具有独特的价值。" },
    { type: "choice", difficulty: 1, text: "口述历史最重要的伦理原则是什么？", options: ["A. 获取尽可能多的信息", "B. 不伤害受访者，尊重其知情同意权", "C. 尽可能长时间采访", "D. 公布采访全部内容"], answer: "B", knowledgePoint: "口述历史的方法与伦理", analysis: "受访者有权知道研究目的、有权拒绝回答任何问题、有权撤回或修改陈述——不能为了'更好的故事'而伤害活着的人。" },
    { type: "choice", difficulty: 2, text: "口述历史的局限是：", options: ["A. 记忆可靠", "B. 记忆可能不准确", "C. 内容太长", "D. 难以记录"], answer: "B", knowledgePoint: "口述历史的方法与伦理", analysis: "记忆是不可靠的，会受到时间、情感等因素的影响，这是口述历史的主要局限。" },
    { type: "choice", difficulty: 2, text: "做口述历史采访时最有效的提问方式是：", options: ["A. 问是非题——'你是不是害怕了？'", "B. 问开放题——'告诉我那天你经历了什么'", "C. 让受访者自己说不干预", "D. 引导受访者说出你想要的答案"], answer: "B", knowledgePoint: "口述历史的方法与伦理", analysis: "开放性问题让叙述者主导节奏——'告诉我……'比'是不是……'能得到更丰富、更自然的故事。" },
    { type: "choice", difficulty: 3, text: "使用口述资料的正确方法是：", options: ["A. 单独使用", "B. 结合其他资料验证", "C. 完全相信", "D. 完全否定"], answer: "B", knowledgePoint: "口述历史：普通人的历史", analysis: "使用口述资料需要结合其他资料进行验证，不能单独作为证据。" },
    { type: "open", text: "你采访了一位80岁的老人，他讲述了50年前的一件大事——他的叙述很生动，但你后来发现他记错了年份。请回答：这个口述资料还有价值吗？如果还有价值，你会在论文中如何使用它？", scoringPoints: ["能区分'事实错误'和'情感真实'的不同价值", "能说明口述资料可以补充书面史料中缺失的个人体验", "能展示正确使用口述资料的方法：交叉验证、标注不确定性"], maxScore: 4 }
  ]},

  { lesson: 50, title: "GCSE综合复习", questions: [
    { type: "choice", difficulty: 1, text: "GCSE历史考试的范围包括：", options: ["A. 只有古代史", "B. 从中世纪到当代", "C. 只有近代史", "D. 只有二战"], answer: "B", knowledgePoint: "历史是一张网，不是一个清单", analysis: "GCSE历史考试覆盖从中世纪到当代的历史内容。" },
    { type: "choice", difficulty: 1, text: "复习GCSE历史最有效的方法是：", options: ["A. 死记硬背孤立的事件和年代", "B. 理解事件之间的因果链条和相互关联", "C. 只背诵教科书最后一章", "D. 只做选择题练习"], answer: "B", knowledgePoint: "历史是一张网，不是一个清单", analysis: "理解了诺曼征服→封建制度→大宪章→议会这样的因果链，就不需要死记硬背也能推导出事件顺序。" },
    { type: "choice", difficulty: 2, text: "论述题的答题技巧包括：", options: ["A. 论点明确、论据充分", "B. 只写论点", "C. 只写论据", "D. 随意发挥"], answer: "A", knowledgePoint: "历史是一张网，不是一个清单", analysis: "论述题答题应论点明确、论据充分、逻辑清晰。" },
    { type: "choice", difficulty: 2, text: "材料分析题主要考查学生的什么能力？", options: ["A. 记忆力", "B. 分析史料来源、偏见和可靠性的能力", "C. 写字速度", "D. 猜测出题意图的能力"], answer: "B", knowledgePoint: "历史是一张网，不是一个清单", analysis: "材料分析题给你一份陌生史料——你要分析它的来源、它的偏见、它告诉了你什么——这比背诵需要更强的批判性思维能力。" },
    { type: "choice", difficulty: 3, text: "复习策略包括：", options: ["A. 死记硬背", "B. 理解与应用", "C. 只看课本", "D. 不做练习"], answer: "B", knowledgePoint: "历史是一张网，不是一个清单", analysis: "有效的复习策略是理解知识点并能灵活应用，而不是死记硬背。" },
    { type: "open", text: "举例说明一个你在历史课上学到的'因果链'——比如从诺曼征服到议会制度的发展。这个因果链如何帮助你理解历史，而不是死记硬背？", scoringPoints: ["能准确描述一个跨越多个时期的历史因果链", "能说明每个环节之间的逻辑联系", "能展示'理解因果'比'记忆事实'更有效的学习方法"], maxScore: 4 }
  ]},

  // ── 第11章 政治史方法 ──────────────────────────────────────

  { lesson: 51, title: "政治史深度研究", questions: [
    { type: "choice", difficulty: 1, text: "政治史研究的核心是：", options: ["A. 经济发展", "B. 权力与决策", "C. 文化变迁", "D. 社会结构"], answer: "B", knowledgePoint: "政治史的研究核心：权力与决策", analysis: "政治史研究的核心是权力的运作、决策的制定以及政治制度的演变。" },
    { type: "choice", difficulty: 1, text: "政治史研究的三个核心问题是：", options: ["A. 何时、何地、何人", "B. 权力归属、如何获取、决策影响", "C. 战争、和平、条约", "D. 国王、议会、教会"], answer: "B", knowledgePoint: "政治史的研究核心：权力与决策", analysis: "政治史研究谁拥有权力、如何获得、做了什么决策、产生了什么后果——而非简单的年表和人名。" },
    { type: "choice", difficulty: 2, text: "政治人物研究的方法包括：", options: ["A. 只看传记", "B. 分析其政策与影响", "C. 忽略时代背景", "D. 主观评价"], answer: "B", knowledgePoint: "如何分析政治人物：政策与影响", analysis: "研究政治人物需要分析其政策、决策及其对历史进程的影响，结合时代背景进行客观评价。" },
    { type: "choice", difficulty: 2, text: "分析政治人物时，不应问的问题是什么？", options: ["A. 他推行了什么政策", "B. 他是好人还是坏人", "C. 这些政策对谁有利", "D. 他的决策背景是什么"], answer: "B", knowledgePoint: "如何分析政治人物：政策与影响", analysis: "历史分析不是道德评判——'好人或坏人'不是历史问题。应该问：他的政策是什么、对谁产生了什么影响、在什么条件下做出的决策。" },
    { type: "choice", difficulty: 3, text: "政治制度演变的特点是：", options: ["A. 一成不变", "B. 渐进式变革", "C. 突然断裂", "D. 完全偶然"], answer: "B", knowledgePoint: "政治制度的渐进演变", analysis: "政治制度的演变通常是渐进式的，受到多种因素的影响，既有连续性也有变革。" },
    { type: "open", text: "以英国议会制度的演变为例（从大宪章到现代议会），说明为什么政治制度的演变通常是渐进的而不是突然断裂的。", scoringPoints: ["能准确描述英国议会制度发展的关键节点", "能说明每个阶段的'连续性'和'变革'", "能分析渐进演变的优势和劣势"], maxScore: 6 }
  ]},

  { lesson: 52, title: "外交史", questions: [
    { type: "choice", difficulty: 1, text: "外交史研究的对象是：", options: ["A. 国内政策", "B. 国家间关系", "C. 文化交流", "D. 经济发展"], answer: "B", knowledgePoint: "外交史的研究对象：国家间关系", analysis: "外交史研究国家之间的关系、条约签订、外交谈判等国际互动。" },
    { type: "choice", difficulty: 1, text: "研究外交史最核心的一手资料是什么？", options: ["A. 教科书", "B. 外交档案和内部电报", "C. 报纸报道", "D. 政治家传记"], answer: "B", knowledgePoint: "外交档案的价值：揭示决策过程", analysis: "外交档案和内部电报记录了真实的决策过程——公开声明是包装过的，内部文件才更接近政治家的真实想法。" },
    { type: "choice", difficulty: 2, text: "条约的作用是：", options: ["A. 没有法律效力", "B. 规范国家间行为", "C. 单方面强制", "D. 临时性文件"], answer: "B", knowledgePoint: "条约在国际关系中的作用", analysis: "条约是国家间达成的协议，具有国际法效力，规范国家之间的行为和关系。" },
    { type: "choice", difficulty: 2, text: "凡尔赛条约第231条（战争罪责条款）在外交史研究中的意义是什么？", options: ["A. 它精确地分配了战争责任", "B. 它制造了持续的不公平感，成为二战的伏笔", "C. 它只是一个形式条款没有实际影响", "D. 它让德国接受了和平"], answer: "B", knowledgePoint: "条约在国际关系中的作用", analysis: "第231条宣布德国承担全部战争责任——德国人认为这不公平，这种怨恨被希特勒完美地利用来动员民族主义情绪。" },
    { type: "choice", difficulty: 3, text: "外交档案的价值在于：", options: ["A. 记录表面现象", "B. 揭示决策过程", "C. 美化历史", "D. 简单罗列事件"], answer: "B", knowledgePoint: "外交档案的价值：揭示决策过程", analysis: "外交档案能够揭示国家决策的内部过程、动机和考量，是研究外交史的重要一手资料。" },
    { type: "open", text: "1938年张伯伦从慕尼黑回来后说'我们时代的和平'——但一年后二战爆发了。请分析：外交档案中的内部备忘录显示张伯伦真的相信希特勒，还是在明知危险的情况下别无选择？", scoringPoints: ["能引用张伯伦的内部备忘录内容说明其真实想法", "能分析绥靖政策背后的英国国情（军备不足、盟友不确定）", "能对'外交是选择'这一命题提出自己的理解"], maxScore: 6 }
  ]},

  { lesson: 53, title: "档案研究", questions: [
    { type: "choice", difficulty: 1, text: "档案的类型包括：", options: ["A. 只有官方文件", "B. 官方文件、私人信件等", "C. 只有报纸", "D. 只有口述资料"], answer: "B", knowledgePoint: "档案的类型：官方文件与私人记录", analysis: "档案包括官方文件、私人信件、日记、会议记录等多种类型的原始资料。" },
    { type: "choice", difficulty: 1, text: "读档案时第一个要问的问题是：", options: ["A. 它说了什么", "B. 谁写的、写给谁、为什么写", "C. 它有多少页", "D. 它的字迹是否清晰"], answer: "B", knowledgePoint: "阅读档案的方法：来源·作者·背景", analysis: "作者的身份决定了他会说什么和不说什么，写作对象决定了他用什么语气，写作背景决定了他的记忆是否可靠。" },
    { type: "choice", difficulty: 2, text: "阅读档案的方法是：", options: ["A. 只看表面内容", "B. 分析来源、作者、背景", "C. 主观猜测", "D. 忽略细节"], answer: "B", knowledgePoint: "阅读档案的方法：来源·作者·背景", analysis: "阅读档案需要分析其来源、作者身份、写作背景和目的，理解其背后的意图。" },
    { type: "choice", difficulty: 2, text: "为什么私人信件作为档案具有独特的价值？", options: ["A. 它比官方文件更准确", "B. 它比官方文件更坦率——写作者不需要公开表演", "C. 它总是最长的", "D. 它更容易获取"], answer: "B", knowledgePoint: "阅读档案的方法：来源·作者·背景", analysis: "在私人信件中，写作者不需要像在公开声明中那样表演——他们更可能表达真实想法和担忧，这对历史学家极为珍贵。" },
    { type: "choice", difficulty: 3, text: "档案的局限性包括：", options: ["A. 完全可靠", "B. 可能不完整或有偏见", "C. 绝对客观", "D. 无所不包"], answer: "B", knowledgePoint: "档案的局限性：不完整与偏见", analysis: "档案可能存在不完整、选择性留存、作者偏见等问题，需要结合其他资料进行交叉验证。" },
    { type: "open", text: "有人说'历史学家看到的档案，代表了历史留下的痕迹，而不是历史的全貌'。请结合档案的不完整性和选择性留存，谈谈你对这句话的理解。", scoringPoints: ["能说明哪些人的档案更容易被保存（权贵vs普通人）", "能分析选择性留存对历史叙述的影响", "能对'历史知识的不完美性'提出自己的态度"], maxScore: 4 }
  ]},

  { lesson: 54, title: "历史争论解析", questions: [
    { type: "choice", difficulty: 1, text: "历史争论的原因是：", options: ["A. 资料完全一致", "B. 不同视角和解释", "C. 事实单一", "D. 观点统一"], answer: "B", knowledgePoint: "为什么历史学家会争论", analysis: "历史争论源于不同的研究视角、方法论和解释框架，同一事实可能有多种解读。" },
    { type: "choice", difficulty: 1, text: "历史学家之间的争论对历史研究的意义是：", options: ["A. 有害的，破坏了学术团结", "B. 有益的，推动了知识进步", "C. 中性的，没有什么影响", "D. 可悲的，证明历史不是科学"], answer: "B", knowledgePoint: "学术争论的价值：推动知识进步", analysis: "当一个论点被质疑，作者必须回应：要么找到更多证据支持自己，要么修正自己的立场——不管哪个结果，我们对历史的理解都深化了。" },
    { type: "choice", difficulty: 2, text: "史学争论的意义在于：", options: ["A. 混淆视听", "B. 推动知识进步", "C. 否定历史", "D. 制造矛盾"], answer: "B", knowledgePoint: "学术争论的价值：推动知识进步", analysis: "史学争论能够促进对历史问题的深入探讨，推动历史知识的进步和更新。" },
    { type: "choice", difficulty: 2, text: "历史争论最常来自以下哪个方面？", options: ["A. 史料是否被人伪造", "B. 面对同样的史料，不同的解释框架和理论立场", "C. 历史学家的个人关系", "D. 历史事件的年月顺序"], answer: "B", knowledgePoint: "为什么历史学家会争论", analysis: "同样的史料可以用不同理论解读——马克思主义者看到阶级冲突，修正主义者看到政治博弈——框架不同，结论不同。" },
    { type: "choice", difficulty: 3, text: "如何参与学术辩论：", options: ["A. 主观臆断", "B. 基于证据和逻辑", "C. 个人攻击", "D. 忽视他人观点"], answer: "B", knowledgePoint: "如何参与学术辩论：证据与逻辑", analysis: "参与学术辩论需要基于充分的证据和严密的逻辑，尊重不同观点，进行理性讨论。" },
    { type: "open", text: "历史学家对法国大革命的原因争论了两个世纪还没有统一答案。请分析：这种'没有答案'的状态是历史学的失败，还是历史学成熟的标志？", scoringPoints: ["能说明历史事件的复杂性使得单一解释不可能", "能区分'没有标准答案'和'所有解释都同样好'", "能对'历史学的性质——科学还是人文学科？'提出自己的理解"], maxScore: 6 }
  ]},

  { lesson: 55, title: "一战起因学术争议", questions: [
    { type: "choice", difficulty: 1, text: "费希尔论战的核心是：", options: ["A. 一战的责任问题", "B. 战争的持续时间", "C. 战术问题", "D. 战后赔偿"], answer: "A", knowledgePoint: "费希尔论战：德国是否刻意发动一战", analysis: "费希尔论战围绕第一次世界大战的责任问题展开，探讨德国是否有意发动战争。" },
    { type: "choice", difficulty: 1, text: "费希尔在一战责任问题上的立场是什么？", options: ["A. 所有国家都有责任", "B. 德国精英蓄意发动了战争", "C. 没有责任方", "D. 法国和俄国负全责"], answer: "B", knowledgePoint: "费希尔论战：德国是否刻意发动一战", analysis: "费希尔在1961年出版的《德国争雄世界》中提出：一战不是意外发生的——德国的精英阶层蓄意发动了扩张性战争。" },
    { type: "choice", difficulty: 2, text: "多元解释认为一战原因是：", options: ["A. 单一因素", "B. 多种因素共同作用", "C. 偶然事件", "D. 个人因素"], answer: "B", knowledgePoint: "多元解释框架：从单因论到系统性分析", analysis: "多元解释认为一战的爆发是多种因素共同作用的结果，包括帝国主义竞争、民族主义、军备竞赛等。" },
    { type: "choice", difficulty: 2, text: "费希尔论战在德国史学界引发争议的原因是什么？", options: ["A. 费希尔的观点太温和", "B. 它触及了一战责任的敏感话题，挑战了德国史学界的既有立场", "C. 费希尔的德语太差无法阅读", "D. 争论双方都不尊重史料"], answer: "B", knowledgePoint: "费希尔论战：德国是否刻意发动一战", analysis: "费希尔认为德国蓄意发动战争——这挑战了德国史学界'各国有责'的共识，触动了德国人'凡尔赛条约是不公正的'的敏感神经。" },
    { type: "choice", difficulty: 3, text: "史学观点演变的原因是：", options: ["A. 资料不变", "B. 新资料和新视角", "C. 固定不变", "D. 主观偏好"], answer: "B", knowledgePoint: "史学观点如何随时间演变", analysis: "史学观点的演变源于新资料的发现、研究方法的改进和新视角的引入。" },
    { type: "open", text: "费希尔论战持续了十年，最终没有完全的赢家——但历史学界对一战的理解大大深化了。请分析：'没有赢家的争论'——是空耗时间还是学术进步？", scoringPoints: ["能说明费希尔论战如何推进了对一战原因的理解", "能分析'学术争论本身就是知识积累过程'这一观点", "能对'共识vs分歧在学术中的作用'提出自己的评判"], maxScore: 4 }
  ]},

  // ── 第12章 专题史 ──────────────────────────────────────────

  { lesson: 56, title: "媒体与宣传", questions: [
    { type: "choice", difficulty: 1, text: "宣传的目的是：", options: ["A. 客观报道", "B. 影响舆论", "C. 提供娱乐", "D. 传播知识"], answer: "B", knowledgePoint: "宣传的定义与目的", analysis: "宣传的目的是通过特定的信息传播，影响公众舆论和态度，服务于特定的政治或意识形态目标。" },
    { type: "choice", difficulty: 1, text: "一战中宣传最常用的情感动员手法是什么？", options: ["A. 理性的数据分析", "B. 激发爱国热情和制造羞耻感", "C. 科学论证", "D. 全面客观报道"], answer: "B", knowledgePoint: "一战宣传海报：情感动员的手法", analysis: "一战海报的核心技巧是情感动员——激发爱国情感、制造'别人都去了你为什么不去'的羞耻感、把参战塑造成英雄主义行为。" },
    { type: "choice", difficulty: 2, text: "一战海报的特点是：", options: ["A. 客观中立", "B. 情感动员", "C. 科学分析", "D. 艺术欣赏"], answer: "B", knowledgePoint: "一战宣传海报：情感动员的手法", analysis: "一战海报通过强烈的视觉符号和情感诉求，动员民众支持战争，激发爱国热情。" },
    { type: "choice", difficulty: 2, text: "纳粹宣传部长戈培尔的名言'重复一个谎言千次，它就成了真理'说明了宣传的什么机制？", options: ["A. 理性说服", "B. 通过不断重复让特定信息变成'常识'", "C. 用科学数据说话", "D. 尊重多元观点"], answer: "B", knowledgePoint: "纳粹宣传机器：戈培尔的三大法则", analysis: "纳粹宣传的核心是重复——不断重复同样的信息直到人们不再质疑它，把它当作'理所当然'的常识。" },
    { type: "choice", difficulty: 3, text: "纳粹宣传的手段包括：", options: ["A. 理性说服", "B. 重复、恐惧、认同", "C. 客观报道", "D. 多元观点"], answer: "B", knowledgePoint: "纳粹宣传机器：戈培尔的三大法则", analysis: "纳粹宣传运用重复强化、制造恐惧、塑造敌人形象和培养群体认同等手段，实现对民众的思想控制。" },
    { type: "open", text: "1991年的麻瓜已经生活在报纸、广播和电视构成的信息环境里。请比较这些媒介中的政治广告、新闻标题和战时海报：它们和一百年前的宣传有什么相同与不同？为什么识别宣传仍然重要？", scoringPoints: ["能识别1991年前常见媒介中的宣传变体（报纸标题、广播口号、电视政治广告）", "能比较传统宣传和现代大众传媒操控的异同", "能提出识别宣传和维护独立思考的方法"], maxScore: 6 }
  ]},

  { lesson: 57, title: "女性史", questions: [
    { type: "choice", difficulty: 1, text: "女性史研究的对象是：", options: ["A. 男性历史", "B. 女性的经历与贡献", "C. 政治史", "D. 经济史"], answer: "B", knowledgePoint: "女性史的研究视角", analysis: "女性史研究女性在历史中的经历、角色、贡献以及性别关系的演变。" },
    { type: "choice", difficulty: 1, text: "英国女性在什么年份获得了和男性同等的投票权？", options: ["A. 1918年", "B. 1928年", "C. 1938年", "D. 1948年"], answer: "B", knowledgePoint: "参政权运动：为投票权而战", analysis: "1918年30岁以上女性获得投票权——1928年年龄降到21岁，与男性完全平等。" },
    { type: "choice", difficulty: 2, text: "参政权运动的目标是：", options: ["A. 限制女性权利", "B. 争取女性选举权", "C. 维持现状", "D. 男性主导"], answer: "B", knowledgePoint: "参政权运动：为投票权而战", analysis: "参政权运动致力于争取女性的选举权和政治权利，是女性解放运动的重要组成部分。" },
    { type: "choice", difficulty: 2, text: "一战如何改变了女性的社会角色？", options: ["A. 女性完全回归家庭", "B. 女性大规模进入劳动市场代替参军的男性", "C. 没有产生任何变化", "D. 女性被禁止工作"], answer: "B", knowledgePoint: "战时女性角色的转变：从家庭到工厂", analysis: "一战期间数百万男性上了战场，女性走进工厂、公交、医院——一战前英国约357万女性受雇，战后接近800万——翻了不止一倍。" },
    { type: "choice", difficulty: 3, text: "战时女性角色的变化是：", options: ["A. 没有变化", "B. 从家庭到工厂", "C. 完全回归家庭", "D. 政治权力下降"], answer: "B", knowledgePoint: "战时女性角色的转变：从家庭到工厂", analysis: "战争期间，女性大量进入工厂和公共领域，承担起传统上由男性从事的工作，推动了性别角色的重新定义。" },
    { type: "open", text: "女性史不是'关于女性的历史'——它是重新审视整个历史叙事，问'谁没有被讲述'。请以你学过的某个历史事件为例，思考：如果从女性视角来写同一个事件，故事会有什么不同？", scoringPoints: ["能选取一个具体的历史事件", "能想象女性在该事件中的可能经历和视角", "能分析加入女性视角后对整体历史理解的影响"], maxScore: 4 }
  ]},

  { lesson: 58, title: "科技与战争", questions: [
    { type: "choice", difficulty: 1, text: "一战中使用的新式武器是：", options: ["A. 弓箭", "B. 机关枪和毒气", "C. 长矛", "D. 盾牌"], answer: "B", knowledgePoint: "一战的新式武器：机关枪与毒气", analysis: "一战中首次大规模使用机关枪、毒气、坦克等新式武器，改变了战争形态。" },
    { type: "choice", difficulty: 1, text: "坦克第一次大规模用于战场是在哪场战役？", options: ["A. 凡尔登战役", "B. 索姆河战役", "C. 马恩河战役", "D. 中途岛海战"], answer: "B", knowledgePoint: "技术如何改变战争的性质", analysis: "1916年9月15日——英军在索姆河战役中投入了第一批坦克——虽然数量少、故障多——但预示了未来战争的形式。" },
    { type: "choice", difficulty: 2, text: "科技对战争的影响是：", options: ["A. 减少伤亡", "B. 加剧破坏性", "C. 缩短战争", "D. 促进和平"], answer: "B", knowledgePoint: "原子弹与核时代的开始", analysis: "军事技术的发展加剧了战争的破坏性，使战争变得更加残酷和具有毁灭性。" },
    { type: "choice", difficulty: 2, text: "二战中德国闪击战成功的技术基础是什么？", options: ["A. 大规模使用骑兵", "B. 坦克集群加飞机协同作战加无线电通信", "C. 使用核武器", "D. 挖地道偷袭"], answer: "B", knowledgePoint: "技术如何改变战争的性质", analysis: "闪击战的核心不是坦克本身——是坦克、斯图卡俯冲轰炸机和无线电通信被组织成一个整体，实现了高速协同作战。" },
    { type: "choice", difficulty: 3, text: "原子弹的影响是：", options: ["A. 促进常规战争", "B. 改变战争性质和国际格局", "C. 没有影响", "D. 减少核武器"], answer: "B", knowledgePoint: "原子弹与核时代的开始", analysis: "原子弹的发明改变了战争的性质，形成了核威慑格局，深刻影响了战后的国际秩序。" },
    { type: "open", text: "从机关枪到坦克到原子弹——每一次技术进步都让战争变得更致命。有人因此说'技术进步带给人类的首先是更好的杀人工具'。你同意吗？为什么？", scoringPoints: ["能举例说明技术进步在军事领域的应用确实提高了杀伤效率", "也能提出技术进步在民用领域的正面贡献", "能对技术与伦理的关系提出自己的辩证思考"], maxScore: 6 }
  ]},

  { lesson: 59, title: "比较革命研究", questions: [
    { type: "choice", difficulty: 1, text: "比较历史研究的目的是：", options: ["A. 罗列事实", "B. 寻找异同和规律", "C. 单一描述", "D. 主观评价"], answer: "B", knowledgePoint: "比较历史研究方法", analysis: "比较历史研究通过对比不同案例，寻找共同点和差异，揭示历史发展的规律和机制。" },
    { type: "choice", difficulty: 1, text: "法国大革命最突出的特征是：", options: ["A. 温和渐进的改革", "B. 激进的社会政治变革", "C. 没有暴力", "D. 迅速恢复旧制度"], answer: "B", knowledgePoint: "法国大革命的特征：激进变革", analysis: "法国大革命五年内从君主制走到共和国、走到恐怖统治、走向拿破仑——速度极快、范围极广、暴力性极强。" },
    { type: "choice", difficulty: 2, text: "法国大革命的特点是：", options: ["A. 温和改革", "B. 激进变革", "C. 没有变化", "D. 保守主义"], answer: "B", knowledgePoint: "比较历史研究方法", analysis: "法国大革命是一场激进的社会政治变革，推翻了封建制度，确立了资产阶级统治。" },
    { type: "choice", difficulty: 2, text: "比较法国大革命和俄国革命，两者共同的激进原因是？", options: ["A. 两个国家都很富有", "B. 旧制度彻底腐朽，加上内外战争的压力", "C. 两国的宗教冲突", "D. 两国的国王是兄弟"], answer: "B", knowledgePoint: "法国大革命的特征：激进变革", analysis: "两次革命的共同点是：旧制度的彻底腐朽让中间路线不再可能，内外战争的压力把革命推向了极端——激进不是必然，但在这些条件下极难避免。" },
    { type: "choice", difficulty: 3, text: "革命的共同条件包括：", options: ["A. 完全稳定", "B. 危机、不满和组织", "C. 经济繁荣", "D. 没有冲突"], answer: "B", knowledgePoint: "革命爆发的共同条件", analysis: "革命通常发生在社会危机、民众不满和组织动员等条件具备的情况下。" },
    { type: "open", text: "比较法国大革命（1789）和俄国革命（1917），两者都推翻了旧制度，都经历了激进阶段，都产生了新的独裁。请分析：革命是否必然走向激进和独裁？有没有另外的道路？", scoringPoints: ["能用具体事例说明两次革命的共同模式", "能分析革命走向激化的原因（内外战争、内部竞争等）", "能对'革命vs改良'的路径选择提出自己的判断"], maxScore: 6 }
  ]},

  { lesson: 60, title: "历史哲学", questions: [
    { type: "choice", difficulty: 1, text: "历史哲学研究的是：", options: ["A. 具体历史事件", "B. 历史的本质和意义", "C. 年代学", "D. 考古发现"], answer: "B", knowledgePoint: "历史哲学探讨什么", analysis: "历史哲学探讨历史的本质、意义、规律以及历史知识的性质等根本性问题。" },
    { type: "choice", difficulty: 1, text: "历史决定论的核心观点是什么？", options: ["A. 历史是完全随机的", "B. 历史的发展遵循一定的规律和逻辑", "C. 历史由个人意志决定", "D. 历史无法被认识"], answer: "B", knowledgePoint: "历史决定论：历史有规律可循？", analysis: "历史决定论认为历史不是偶然的积累，而是有方向、有规律的进程——比如马克思认为历史是生产力和生产关系矛盾运动驱动的。" },
    { type: "choice", difficulty: 2, text: "历史决定论认为：", options: ["A. 历史是偶然的", "B. 历史有规律可循", "C. 历史无法认识", "D. 历史是主观的"], answer: "B", knowledgePoint: "历史决定论：历史有规律可循？", analysis: "历史决定论认为历史发展遵循一定的规律，受到经济、社会等因素的决定。" },
    { type: "choice", difficulty: 2, text: "历史决定论最有力的批评是：", options: ["A. 它让历史研究变简单了", "B. 如果一切都是'规律'决定的，个人选择还有意义吗？", "C. 它太复杂了", "D. 它只适用于欧洲历史"], answer: "B", knowledgePoint: "历史哲学探讨什么", analysis: "如果一切都是历史规律决定的——那希特勒的决策有意义吗？那些试图避免战争的外交官的努力是徒劳吗？决定论面临的核心问题是：它如何解释个体能动性在历史中的作用？" },
    { type: "choice", difficulty: 3, text: "历史可知性的争论涉及：", options: ["A. 历史完全可知", "B. 历史的客观性与主观性", "C. 历史不可知", "D. 历史是虚构的"], answer: "B", knowledgePoint: "历史的可知性：客观与主观之争", analysis: "历史可知性的争论涉及历史知识的客观性、主观性以及我们能否真正认识过去的问题。" },
    { type: "open", text: "'历史是历史学家与事实之间持续不断的对话'——E.H.卡尔。请分析这句话的含义：如果历史学家不可能完全客观，那我们追求'客观的历史'还有意义吗？", scoringPoints: ["能说明卡尔这句话的含义——历史学家带着自己的问题进入史料", "能区分'完全客观不可能'和'客观性值得追求'", "能对'在承认主观性的前提下追求客观性'提出自己的态度"], maxScore: 6 }
  ]},

  // ── 第13章 史学理论 ──────────────────────────────────────

  { lesson: 61, title: "马克思主义史学", questions: [
    { type: "choice", difficulty: 1, text: "马克思主义史学的核心是：", options: ["A. 英雄史观", "B. 阶级斗争", "C. 文化决定", "D. 个人意志"], answer: "B", knowledgePoint: "历史唯物主义：存在决定意识", analysis: "马克思主义史学以阶级斗争为核心，认为历史是阶级斗争的历史。" },
    { type: "choice", difficulty: 1, text: "马克思的历史唯物主义认为历史的根本动力是：", options: ["A. 伟大领袖的意志", "B. 生产力和生产关系的矛盾", "C. 宗教改革", "D. 自然环境的改变"], answer: "B", knowledgePoint: "马克思主义史学的核心：阶级斗争", analysis: "马克思认为历史不是伟人推动的——而是生产力和生产关系的矛盾运动驱动的。生产方式的变化决定了社会结构的变化。" },
    { type: "choice", difficulty: 2, text: "经济基础与上层建筑的关系是：", options: ["A. 上层建筑决定经济基础", "B. 经济基础决定上层建筑", "C. 两者无关", "D. 相互独立"], answer: "B", knowledgePoint: "经济基础与上层建筑", analysis: "马克思主义认为经济基础决定上层建筑，上层建筑反作用于经济基础。" },
    { type: "choice", difficulty: 2, text: "马克思主义史学的'阶级分析'方法最适用于分析什么类型的历史问题？", options: ["A. 外交条约的签订过程", "B. 工业革命中的劳资冲突和工人运动", "C. 国王的个人性格", "D. 艺术风格的演变"], answer: "B", knowledgePoint: "马克思主义史学的核心：阶级斗争", analysis: "阶级分析在分析经济变革引发的社会冲突方面最有力——如工业革命中资产阶级与工人阶级的矛盾、工人运动的兴起等。" },
    { type: "choice", difficulty: 3, text: "历史唯物主义的观点是：", options: ["A. 意识决定存在", "B. 社会存在决定社会意识", "C. 两者等同", "D. 意识独立"], answer: "B", knowledgePoint: "历史唯物主义：存在决定意识", analysis: "历史唯物主义认为社会存在决定社会意识，物质生产方式的变化推动历史发展。" },
    { type: "open", text: "马克思说'不是意识决定存在，而是存在决定意识'。请用一个具体的历史事例来解释这句话的意思，并谈谈你是否同意。", scoringPoints: ["能用一个具体事例（如工业革命中工人和资本家的不同立场）说明社会存在如何影响意识", "能分析这个理论的解释力", "能对'经济决定论'是否过于简化提出自己的评判"], maxScore: 6 }
  ]},

  { lesson: 62, title: "后现代史学", questions: [
    { type: "choice", difficulty: 1, text: "后现代史学质疑的是：", options: ["A. 历史的客观性", "B. 历史研究", "C. 史料价值", "D. 时间顺序"], answer: "A", knowledgePoint: "后现代史学的根本质疑：客观性是否可能", analysis: "后现代史学质疑历史的客观性和确定性，强调历史叙述的建构性和主观性。" },
    { type: "choice", difficulty: 1, text: "后现代史学对历史叙述的核心质疑是什么？", options: ["A. 历史学家都在撒谎", "B. 历史叙述不可避免地包含选择和建构——不是还原而是创造故事", "C. 历史研究没有意义", "D. 所有历史书都应该被烧掉"], answer: "B", knowledgePoint: "后现代史学的根本质疑：客观性是否可能", analysis: "后现代不是否定历史是真实的——而是说历史学家在选择研究什么、如何叙述时，这些选择本身就带有立场和价值观。" },
    { type: "choice", difficulty: 2, text: "叙事的解构意味着：", options: ["A. 接受单一叙事", "B. 揭示叙事的建构性", "C. 否定所有历史", "D. 坚持传统观点"], answer: "B", knowledgePoint: "叙事解构：揭示历史故事如何被建构", analysis: "叙事的解构意味着揭示历史叙述是如何被建构的，分析其中的权力关系和意识形态。" },
    { type: "choice", difficulty: 2, text: "后现代史学最受批评的方面是什么？", options: ["A. 它太保守了", "B. 如果完全接受后现代视角，可能会滑向'一切皆相对'的虚无主义", "C. 它太容易被理解", "D. 它太尊重史料了"], answer: "B", knowledgePoint: "后现代视角的意义与局限", analysis: "如果后现代主义滑向'一切皆相对，没有真假之分'——那纳粹宣传和严肃学术研究有什么本质区别？这是后现代史学面临的最大挑战。" },
    { type: "choice", difficulty: 3, text: "后现代视角的意义是：", options: ["A. 否定历史", "B. 促进多元理解", "C. 混淆是非", "D. 简化历史"], answer: "B", knowledgePoint: "后现代视角的意义与局限", analysis: "后现代视角促使我们反思历史叙述的多元性，倾听被边缘化的声音，促进对历史更全面的理解。" },
    { type: "open", text: "后现代史学让我们意识到：历史叙述总是有视角、有遗漏的。但这是否意味着'所有历史叙述都一样好'？请分析后现代史学的贡献和危险。", scoringPoints: ["能说明后现代史学对历史学自我反思的贡献", "能分析极端相对主义的危险", "能提出在'承认视角'和'坚持标准'之间的平衡方法"], maxScore: 6 }
  ]},

  { lesson: 63, title: "性别史与后殖民史学", questions: [
    { type: "choice", difficulty: 1, text: "性别史关注的是：", options: ["A. 只关注女性", "B. 性别关系和身份", "C. 政治史", "D. 经济史"], answer: "B", knowledgePoint: "性别史的视角：超越'女性的历史'", analysis: "性别史关注性别关系、性别身份以及性别在历史中的建构和表现。" },
    { type: "choice", difficulty: 1, text: "后殖民理论批判的核心对象是：", options: ["A. 殖民地人民的落后文化", "B. 以欧洲为中心的殖民主义叙事及其权力关系", "C. 独立运动的激进手段", "D. 殖民地经济的发展模式"], answer: "B", knowledgePoint: "后殖民理论的批判：谁在讲述谁的故事", analysis: "后殖民理论批判的是把殖民描述成'文明化使命'的叙事框架——它揭示谁有资格定义'文明'、谁的历史被书写、谁的声音被遗漏。" },
    { type: "choice", difficulty: 2, text: "后殖民理论批判的是：", options: ["A. 殖民统治", "B. 殖民主义的叙事", "C. 所有历史", "D. 独立运动"], answer: "B", knowledgePoint: "后殖民理论的批判：谁在讲述谁的故事", analysis: "后殖民理论批判殖民主义的历史叙事，揭示其权力结构和文化霸权。" },
    { type: "choice", difficulty: 2, text: "边缘群体历史的研究对主流历史叙事有什么影响？", options: ["A. 没有影响", "B. 挑战主流叙事的完整性，让历史变得更丰富", "C. 破坏历史学的客观性", "D. 只适用于少数群体的自我关注"], answer: "B", knowledgePoint: "边缘群体历史的意义：挑战主流叙事", analysis: "边缘群体的历史不是要取代主流叙事——而是要扩充它。加入女性的、劳工的、被殖民者的视角后，历史图像变得更丰富、更诚实。" },
    { type: "choice", difficulty: 3, text: "边缘群体历史的意义是：", options: ["A. 无关紧要", "B. 挑战主流叙事", "C. 重复主流", "D. 缩小历史范围"], answer: "B", knowledgePoint: "边缘群体历史的意义：挑战主流叙事", analysis: "研究边缘群体的历史能够挑战主流叙事，使历史更加多元和包容。" },
    { type: "open", text: "后殖民理论揭示了一个重要的历史认识论问题：'谁有资格定义什么是文明？'请结合殖民历史，分析叙事权力在历史建构中的作用。", scoringPoints: ["能说明欧洲中心主义叙事如何把殖民描述为'文明使命'", "能分析被殖民者丧失话语权的后果", "能对'历史叙事的政治性'提出自己的理解"], maxScore: 4 }
  ]},

  { lesson: 64, title: "计量史学", questions: [
    { type: "choice", difficulty: 1, text: "计量史学的方法是：", options: ["A. 定性描述", "B. 量化分析", "C. 主观判断", "D. 故事叙述"], answer: "B", knowledgePoint: "什么是计量史学", analysis: "计量史学运用统计和量化方法研究历史，揭示历史现象的数量特征和规律。" },
    { type: "choice", difficulty: 1, text: "计量史学最突出的优势是什么？", options: ["A. 能讲述生动的故事", "B. 能提供精确可验证的数据支撑", "C. 能取代所有其他历史研究方法", "D. 不需要阅读大量史料"], answer: "B", knowledgePoint: "量化方法的优势：精确与可验证", analysis: "计量史学能把'工人工资下降'这个模糊印象变成'1800-1850年实际工资下降约15%'——精确、可验证、可被质疑。" },
    { type: "choice", difficulty: 2, text: "量化方法的优势是：", options: ["A. 主观随意", "B. 精确和可验证", "C. 忽视细节", "D. 无法比较"], answer: "B", knowledgePoint: "量化方法的优势：精确与可验证", analysis: "量化方法能够提供精确的数据支持，使研究结果更具可验证性和可比性。" },
    { type: "choice", difficulty: 2, text: "计量史学最大的局限是：", options: ["A. 数据太少", "B. 无法量化情感、意义和文化经验等历史中最重要的内容", "C. 计算太复杂", "D. 历史学家不懂数学"], answer: "B", knowledgePoint: "计量方法的局限性", analysis: "数字能告诉你1840年代爱尔兰有多少人死于饥荒——但数字告诉不了你一个母亲看着孩子饿死时的心情——这需要日记和文学来传达。" },
    { type: "choice", difficulty: 3, text: "计量方法的局限是：", options: ["A. 无所不能", "B. 无法涵盖质性内容", "C. 绝对客观", "D. 取代定性"], answer: "B", knowledgePoint: "计量方法的局限性", analysis: "计量方法无法涵盖无法量化的历史内容，需要与定性方法相结合。" },
    { type: "open", text: "计量史学家说'工业革命期间工人实际工资下降了15%'——传统史学家说'工人失去了尊严和自主性'。两种说法都是真的。请分析：为什么历史研究中既有'数'也有'故事'，两者如何互补？", scoringPoints: ["能说明计量方法的长处（精确、可验证）和短处（无法量化情感）", "能说明定性方法的长处（丰富、深入）和短处（不够精确）", "能提出两者结合的研究思路"], maxScore: 4 }
  ]},

  { lesson: 65, title: "公共史学", questions: [
    { type: "choice", difficulty: 1, text: "公共史学的领域包括：", options: ["A. 只在学术界", "B. 博物馆、纪念馆等", "C. 私人研究", "D. 课堂教学"], answer: "B", knowledgePoint: "公共史学的领域", analysis: "公共史学涵盖博物馆、纪念馆、历史遗址、纪录片等向公众传播历史的领域。" },
    { type: "choice", difficulty: 1, text: "历史记忆塑造集体认同——'我们是谁'。以下哪个例子最能体现历史记忆的建构作用？", options: ["A. 一个家族的家谱", "B. 英国每年11月11日的停战纪念日全国默哀", "C. 个人日记", "D. 护照照片"], answer: "B", knowledgePoint: "历史记忆与集体认同", analysis: "停战纪念日通过集体默哀这个仪式，每年重申一次'我们是谁：一个经历了巨大牺牲、珍视和平的国家'——这是集体记忆的建构。" },
    { type: "choice", difficulty: 2, text: "历史记忆的作用是：", options: ["A. 遗忘过去", "B. 塑造集体认同", "C. 制造分裂", "D. 无关紧要"], answer: "B", knowledgePoint: "历史记忆与集体认同", analysis: "历史记忆在塑造集体认同、传承文化和反思历史方面具有重要作用。" },
    { type: "choice", difficulty: 2, text: "纪念与遗忘的关系是什么？", options: ["A. 纪念越多遗忘越少", "B. 每一次纪念都隐含着一次遗忘——有选择地记住什么意味着同时决定不记什么", "C. 纪念和遗忘无关", "D. 遗忘是对纪念的破坏"], answer: "B", knowledgePoint: "纪念与遗忘的辩证关系", analysis: "英国有无数的二战纪念碑纪念阵亡士兵——但关于殖民地战争、关于殖民暴行的纪念碑在哪里？纪念的选择本身就是一个政治行为。" },
    { type: "choice", difficulty: 3, text: "纪念与遗忘的关系是：", options: ["A. 只有纪念", "B. 选择性记忆", "C. 完全遗忘", "D. 无关"], answer: "B", knowledgePoint: "纪念与遗忘的辩证关系", analysis: "纪念与遗忘是相互关联的，历史记忆往往是选择性的，哪些被纪念、哪些被遗忘反映了特定的价值观和权力关系。" },
    { type: "open", text: "英国有无数的二战纪念碑——但关于殖民暴行的纪念碑几乎没有。请分析：一个社会选择纪念什么、不纪念什么，背后的逻辑是什么？'选择性记忆'是正常的还是应该被反思的？", scoringPoints: ["能分析纪念选择的背后逻辑（民族自豪感vs历史反思）", "能讨论'应该纪念什么'的标准", "能对'记忆的政治'提出自己的评判"], maxScore: 6 }
  ]},

  // ── 第14章 论文写作 ──────────────────────────────────────

  { lesson: 66, title: "论点构建", questions: [
    { type: "choice", difficulty: 1, text: "论文的核心是：", options: ["A. 罗列事实", "B. 论点", "C. 字数", "D. 格式"], answer: "B", knowledgePoint: "论证的三要素：论点·证据·反驳", analysis: "论文的核心是论点，即作者提出的主张和观点。" },
    { type: "choice", difficulty: 1, text: "以下哪个句子是一个真正的历史论点？", options: ["A. '二战于1939年爆发'", "B. '纳粹政策是欧洲犹太人遭系统性灭绝的核心原因'（有争议性的因果主张）", "C. '二战很重要'", "D. '希特勒是德国人'"], answer: "B", knowledgePoint: "论点是论文的灵魂", analysis: "论点是有争议性的主张——别人可以和你辩论。纳粹政策是否'核心原因'是可以争论的，这使它成为论点而非事实陈述。" },
    { type: "choice", difficulty: 2, text: "论证的结构包括：", options: ["A. 只有结论", "B. 论点、论据、反驳", "C. 随意发挥", "D. 单一证据"], answer: "B", knowledgePoint: "论证的三要素：论点·证据·反驳", analysis: "论证需要包括明确的论点、支持论点的论据以及对可能反驳的回应。" },
    { type: "choice", difficulty: 2, text: "有力的历史论点应该具备什么特征？", options: ["A. 模糊笼统以免被批评", "B. 明确、具体、可论证", "C. 尽可能长", "D. 只使用形容词"], answer: "B", knowledgePoint: "如何构建有力的论点", analysis: "'工业革命改变了英国'——太模糊。'工业革命在1780-1850年间通过技术创新和劳动力重组重构了英国社会阶级结构'——这才是一个有力的论点。" },
    { type: "choice", difficulty: 3, text: "如何构建有力的论点：", options: ["A. 主观臆断", "B. 明确、具体、可论证", "C. 模糊不清", "D. 无法验证"], answer: "B", knowledgePoint: "如何构建有力的论点", analysis: "有力的论点需要明确、具体，能够被证据支持和验证。" },
    { type: "open", text: "'第一次世界大战可以避免吗？'请构建一个明确的论点来回答这个问题——然后说明你会用什么证据来支撑这个论点，以及反对者可能如何质疑你。", scoringPoints: ["能提出一个明确、有争议性的论点（而非模糊描述）", "能说明支撑论点的关键证据", "能预判反对者的论点和自己的回应"], maxScore: 6 }
  ]},

  { lesson: 67, title: "证据筛选", questions: [
    { type: "choice", difficulty: 1, text: "证据的类型包括：", options: ["A. 只有文字", "B. 文献、实物、口述等", "C. 只有实物", "D. 没有证据"], answer: "B", knowledgePoint: "历史证据的类型", analysis: "证据包括文献资料、实物证据、口述历史等多种类型。" },
    { type: "choice", difficulty: 1, text: "筛选历史证据的两个核心标准是：", options: ["A. 数量多、年代久", "B. 相关性、可靠性", "C. 篇幅长、知名度高", "D. 文笔好、故事性强"], answer: "B", knowledgePoint: "筛选证据的标准：相关性与可靠性", analysis: "相关性——这条证据和我的论点有什么关系？可靠性——这条证据的来源可信吗？有没有偏见？" },
    { type: "choice", difficulty: 2, text: "筛选证据的标准是：", options: ["A. 主观偏好", "B. 相关性和可靠性", "C. 数量多", "D. 年代久远"], answer: "B", knowledgePoint: "筛选证据的标准：相关性与可靠性", analysis: "筛选证据需要考虑其与论点的相关性和来源的可靠性。" },
    { type: "choice", difficulty: 2, text: "引用规范最重要的意义是什么？", options: ["A. 增加论文长度", "B. 尊重知识产权并让论点可被读者独立验证", "C. 显示自己读了很多书", "D. 避免抄袭指控"], answer: "B", knowledgePoint: "引用规范的重要性", analysis: "引用规范表明'这个观点来自某人'——同时让任何人都能追溯你的证据链，验证你是否正确使用了它。" },
    { type: "choice", difficulty: 3, text: "引用规范的重要性是：", options: ["A. 形式而已", "B. 尊重知识产权和便于查证", "C. 可有可无", "D. 限制创作"], answer: "B", knowledgePoint: "引用规范的重要性", analysis: "引用规范不仅尊重他人的知识产权，也使读者能够查证来源，增强研究的可信度。" },
    { type: "open", text: "你在做一项研究时找到了三份证据：一份政府官方文件、一封私人信件、一份50年后的回忆录。请说明你会如何使用这三份证据，以及你会如何评估它们的相对可靠性。", scoringPoints: ["能分析每种证据类型的优势和局限", "能说明交叉验证的方法", "能展示在论文中使用多种证据的策略"], maxScore: 6 }
  ]},

  { lesson: 68, title: "历史写作风格", questions: [
    { type: "choice", difficulty: 1, text: "历史写作的特点是：", options: ["A. 虚构想象", "B. 客观严谨", "C. 主观抒情", "D. 夸张描述"], answer: "B", knowledgePoint: "历史写作的基本要求：客观与严谨", analysis: "历史写作需要客观、严谨，基于证据进行叙述和分析。" },
    { type: "choice", difficulty: 1, text: "好的学术语言应该是什么样的？", options: ["A. 越复杂越好，显示水平", "B. 准确、清晰、简洁", "C. 多用形容词", "D. 每个句子都超过50个字"], answer: "B", knowledgePoint: "学术语言的规范：准确·清晰·简洁", analysis: "准确——用词精确；清晰——一遍就能读懂；简洁——不用不必要的词。读者应该能在一遍内理解你的意思。" },
    { type: "choice", difficulty: 2, text: "学术语言的要求是：", options: ["A. 口语化", "B. 准确、清晰、简洁", "C. 晦涩难懂", "D. 随意表达"], answer: "B", knowledgePoint: "学术语言的规范：准确·清晰·简洁", analysis: "学术语言需要准确、清晰、简洁，避免歧义。" },
    { type: "choice", difficulty: 2, text: "'显然，一战完全是德国的错误'——这句话在历史写作中有什么问题？", options: ["A. 太短了", "B. '显然'假装论点不言而喻不需要论证，'完全'过度确定", "C. 没有语法错误就没问题", "D. 不应该写德国"], answer: "B", knowledgePoint: "历史写作的基本要求：客观与严谨", analysis: "'显然'暗示论点是不言而喻的——但历史中没有不言而喻的事，每个判断都需要论证。'完全'排除了其他可能性——但历史的复杂性很少允许'完全'。" },
    { type: "choice", difficulty: 3, text: "如何提高写作质量：", options: ["A. 不修改", "B. 反复修改和校对", "C. 一次性完成", "D. 抄袭"], answer: "B", knowledgePoint: "修改是写作的一部分", analysis: "提高写作质量需要反复修改、校对，确保内容准确、表达清晰。" },
    { type: "open", text: "请改写下面这段话：'总的来说，在某种程度上，工业革命可以说在一定意义上对劳动者产生了一些影响。'改写成一两句准确、清晰、有内容的历史写作。", scoringPoints: ["能识别原句中的所有模糊词语（总的来说/某种程度上/一定意义上/一些）", "能提供至少一种具体、准确的改写", "能说明改写如何提高了句子的信息密度"], maxScore: 4 }
  ]},

  { lesson: 69, title: "反驳与综述", questions: [
    { type: "choice", difficulty: 1, text: "反驳的目的是：", options: ["A. 否定一切", "B. 深化论证", "C. 人身攻击", "D. 避免讨论"], answer: "B", knowledgePoint: "学术对话的价值", analysis: "反驳的目的不是否定一切，而是通过回应反对意见来深化和完善自己的论证。" },
    { type: "choice", difficulty: 1, text: "一篇好的历史论文应该如何处理与自己论点相反的证据？", options: ["A. 忽略它", "B. 正面承认并回应，从而深化论证", "C. 隐藏它", "D. 长篇大论地指责对方"], answer: "B", knowledgePoint: "有效的反驳：回应而不是忽视", analysis: "最有力的策略是正面回应——'某学者认为X，但……'——这向读者展示你了解这个争议，并且有能力处理它。" },
    { type: "choice", difficulty: 2, text: "史学综述的作用是：", options: ["A. 简单罗列", "B. 梳理研究现状", "C. 重复他人", "D. 没有价值"], answer: "B", knowledgePoint: "史学综述的写法", analysis: "史学综述梳理相关领域的研究现状，指出已有研究的贡献和不足，为新研究提供背景。" },
    { type: "choice", difficulty: 2, text: "好的史学综述应该达到什么效果？", options: ["A. 列出所有读过的书名", "B. 描绘一张'学术地图'——主要争论线、不同立场、发展趋势", "C. 只引用支持自己的学者", "D. 尽量简短不要给人挑错的机会"], answer: "B", knowledgePoint: "史学综述的写法", analysis: "好的综述让读者看到：你的研究处于什么学术背景里、你要回应哪个争议、你想补充什么没有被充分研究的角度。" },
    { type: "choice", difficulty: 3, text: "学术对话的意义是：", options: ["A. 孤立研究", "B. 推动学术发展", "C. 自我封闭", "D. 重复研究"], answer: "B", knowledgePoint: "学术对话的价值", analysis: "学术对话促进思想交流和知识积累，是推动学术发展的重要动力。" },
    { type: "open", text: "假设你要写一篇关于'第一次世界大战的责任问题'的论文。请写出一段简短的史学综述，说明学界在这个问题上的主要分歧——以及你的立场将如何参与这场争论。", scoringPoints: ["能准确描述费希尔论战等主要学术争论", "能说明不同历史学家的立场", "能清晰地定位自己的研究在学术争论中的位置"], maxScore: 6 }
  ]},

  { lesson: 70, title: "A-Level综合模拟", questions: [
    { type: "choice", difficulty: 1, text: "A-Level历史考试的特点是：", options: ["A. 简单记忆", "B. 深度分析", "C. 单一题型", "D. 短时间"], answer: "B", knowledgePoint: "A-Level历史考试的特点", analysis: "A-Level历史考试注重对历史问题的深度分析和批判性思考。" },
    { type: "choice", difficulty: 1, text: "A-Level考试中最重要的是什么？", options: ["A. 记住所有日期", "B. 提出清晰论点并用证据支撑", "C. 写得越长越好", "D. 使用生僻词汇"], answer: "B", knowledgePoint: "A-Level历史考试的特点", analysis: "A-Level考的不是你知道多少——是你思考得多清晰。提出论点、用证据支撑、回应反驳——比罗列事实重要得多。" },
    { type: "choice", difficulty: 2, text: "答题策略包括：", options: ["A. 随意回答", "B. 结构清晰、论证充分", "C. 只写要点", "D. 冗长啰嗦"], answer: "B", knowledgePoint: "答题策略：结构·论证·深度", analysis: "有效的答题策略包括清晰的结构、充分的论证和准确的引用。" },
    { type: "choice", difficulty: 2, text: "A-Level考试中时间管理的正确策略是：", options: ["A. 把所有时间花在最擅长的题目上", "B. 合理分配时间，确保每道题都有充分作答", "C. 先做最容易的再做最难的", "D. 不管时间，写满为止"], answer: "B", knowledgePoint: "时间管理：分配到完成所有题目", analysis: "一道完美的答案加两道草草结尾的答案，不如三道都有清晰结构的答案——总分是跨题目累加的。" },
    { type: "choice", difficulty: 3, text: "时间管理的重要性是：", options: ["A. 不重要", "B. 合理分配时间确保完成", "C. 快速完成", "D. 拖延"], answer: "B", knowledgePoint: "时间管理：分配到完成所有题目", analysis: "合理的时间管理能够确保在考试中完成所有题目，避免因时间不足而影响成绩。" },
    { type: "open", text: "题目：'评估民族主义在第一次世界大战爆发中的作用。'请构建一个回答结构（不是写全文）：写出你的论点、三个论证层次、以及你会用来支撑的证据类型。", scoringPoints: ["能提出一个明确的论点（而非模糊描述）", "能设计至少三个有逻辑层次的论证点", "能说明每层论证会用到的证据类型"], maxScore: 6 }
  ]}

];

if (typeof window !== 'undefined') {
  window.subject_history_questionBank = { questionBank };
  window.history_questionBank = questionBank;
}

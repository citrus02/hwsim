/**
 * history-questionBank.js
 * 麻瓜学术 · 历史分科 · 题库
 * 教授：赫伯特·宾斯二世
 * 每课 3 题（难度 basic/medium/hard），共 210 题
 */

export const questionBank = [

  // ── 第1章 中世纪英格兰 ──────────────────────────────────────────

  { lesson: 1, title: "诺曼征服1066", questions: [
    { type: "choice", difficulty: 1, text: "黑斯廷斯战役发生在哪一年？", options: ["A. 1066年", "B. 1086年", "C. 1166年", "D. 1215年"], answer: "A", knowledgePoint: "黑斯廷斯战役时间", analysis: "1066年10月14日，诺曼公爵威廉在黑斯廷斯击败盎格鲁-撒克逊国王哈罗德二世，标志着诺曼征服的开始。" },
    { type: "choice", difficulty: 2, text: "威廉一世在英国建立的制度是？", options: ["A. 民主制度", "B. 封建制度", "C. 资本主义制度", "D. 社会主义制度"], answer: "B", knowledgePoint: "封建制度的建立", analysis: "威廉一世引入了欧洲大陆的封建制度，确立了国王、贵族、骑士之间的等级关系和土地分封体系。" },
    { type: "choice", difficulty: 3, text: "诺曼征服对英国文化的影响不包括：", options: ["A. 法语词汇进入英语", "B. 封建制度的建立", "C. 罗马天主教会的衰落", "D. 庄园经济的发展"], answer: "C", knowledgePoint: "诺曼征服的影响", analysis: "诺曼征服加强了罗马天主教会在英国的势力，而非导致其衰落。教会在中世纪是政治、经济和文化的中心。" }
  ]},

  { lesson: 2, title: "封建制度", questions: [
    { type: "choice", difficulty: 1, text: "封建制度的核心是：", options: ["A. 金钱关系", "B. 土地与义务", "C. 民主选举", "D. 商业贸易"], answer: "B", knowledgePoint: "封建制度的核心", analysis: "封建制度以土地为核心，通过分封建立起封君封臣关系，双方互有权利和义务。" },
    { type: "choice", difficulty: 2, text: "封臣对封君的主要义务是：", options: ["A. 缴纳金钱", "B. 提供军事服务", "C. 耕种土地", "D. 传授知识"], answer: "B", knowledgePoint: "封君封臣关系", analysis: "封臣向封君宣誓效忠，主要义务是提供军事服务，跟随封君作战。" },
    { type: "choice", difficulty: 3, text: "庄园经济的特点是：", options: ["A. 商品经济发达", "B. 自给自足", "C. 对外贸易频繁", "D. 工业化生产"], answer: "B", knowledgePoint: "庄园经济", analysis: "庄园是封建经济的基本单位，实行自给自足，生产自己所需的大部分物品。" }
  ]},

  { lesson: 3, title: "黑死病", questions: [
    { type: "choice", difficulty: 1, text: "黑死病传入英国的时间是：", options: ["A. 1348年", "B. 1448年", "C. 1548年", "D. 1648年"], answer: "A", knowledgePoint: "黑死病传入时间", analysis: "1348年，黑死病通过贸易路线传入英国，在接下来的三年里导致约三分之一的人口死亡。" },
    { type: "choice", difficulty: 2, text: "黑死病对社会的影响是：", options: ["A. 劳动力短缺", "B. 人口增加", "C. 封建制度加强", "D. 经济繁荣"], answer: "A", knowledgePoint: "黑死病的社会影响", analysis: "人口锐减导致劳动力短缺，农奴的议价能力提高，为社会变革创造了条件。" },
    { type: "choice", difficulty: 3, text: "黑死病后，农奴地位变化的根本原因是：", options: ["A. 国王的仁慈", "B. 劳动力稀缺", "C. 教会的干预", "D. 法律的改革"], answer: "B", knowledgePoint: "农奴地位变化", analysis: "劳动力稀缺使农奴能够要求更高的工资和更好的待遇，甚至获得人身自由，这是黑死病后社会结构变化的根本原因。" }
  ]},

  { lesson: 4, title: "教会的权力", questions: [
    { type: "choice", difficulty: 1, text: "中世纪教会的最高领袖是：", options: ["A. 国王", "B. 教皇", "C. 大主教", "D. 骑士"], answer: "B", knowledgePoint: "教会的权力结构", analysis: "教皇是罗马天主教会的最高领袖，在中世纪拥有巨大的宗教和政治权力。" },
    { type: "choice", difficulty: 2, text: "十字军东征的主要动机是：", options: ["A. 寻找财富", "B. 收复圣地", "C. 传播文化", "D. 科学探索"], answer: "B", knowledgePoint: "十字军东征", analysis: "十字军东征的主要动机是宗教信仰，即收复被穆斯林占领的圣地耶路撒冷。" },
    { type: "choice", difficulty: 3, text: "教会与王权冲突的实质是：", options: ["A. 个人恩怨", "B. 权力争夺", "C. 文化差异", "D. 经济纠纷"], answer: "B", knowledgePoint: "教会与王权的冲突", analysis: "教会与王权的冲突本质上是权力争夺，双方都试图扩大自己的影响力和控制范围。" }
  ]},

  { lesson: 5, title: "大宪章与议会起源", questions: [
    { type: "choice", difficulty: 1, text: "大宪章签署于哪一年？", options: ["A. 1215年", "B. 1315年", "C. 1415年", "D. 1515年"], answer: "A", knowledgePoint: "大宪章", analysis: "1215年，约翰国王被迫签署大宪章，确立了国王必须遵守法律的原则。" },
    { type: "choice", difficulty: 2, text: "大宪章的核心原则是：", options: ["A. 王权至上", "B. 法律至上", "C. 贵族专权", "D. 民主选举"], answer: "B", knowledgePoint: "大宪章的原则", analysis: "大宪章确立了法律至上的原则，限制了王权，为后来的宪政发展奠定了基础。" },
    { type: "choice", difficulty: 3, text: "议会制度的萌芽来自：", options: ["A. 大宪章的规定", "B. 国王的命令", "C. 人民的起义", "D. 教会的倡议"], answer: "A", knowledgePoint: "议会制度起源", analysis: "大宪章要求国王定期召开会议听取贵族意见，这是议会制度的开端。" }
  ]},

  // ── 第2章 探索与变革 ──────────────────────────────────────────

  { lesson: 6, title: "十字军东征", questions: [
    { type: "choice", difficulty: 1, text: "十字军东征持续了多长时间？", options: ["A. 约100年", "B. 约200年", "C. 约300年", "D. 约400年"], answer: "B", knowledgePoint: "十字军东征的时间", analysis: "十字军东征从1096年开始，到1291年结束，持续了近两个世纪。" },
    { type: "choice", difficulty: 2, text: "十字军东征的结果是：", options: ["A. 成功收复圣地", "B. 最终失败", "C. 建立永久统治", "D. 消灭伊斯兰教"], answer: "B", knowledgePoint: "十字军东征的结果", analysis: "尽管十字军初期取得一些胜利，但最终未能长期控制圣地，1291年最后一个十字军国家被消灭。" },
    { type: "choice", difficulty: 3, text: "十字军东征的文化影响是：", options: ["A. 阻碍东西方交流", "B. 促进文化传播", "C. 消灭东方文化", "D. 封闭西方思想"], answer: "B", knowledgePoint: "十字军东征的文化影响", analysis: "十字军带回了东方的知识、技术和商品，促进了东西方文化交流，为文艺复兴奠定了基础。" }
  ]},

  { lesson: 7, title: "文艺复兴", questions: [
    { type: "choice", difficulty: 1, text: "文艺复兴起源于哪个国家？", options: ["A. 法国", "B. 意大利", "C. 德国", "D. 英国"], answer: "B", knowledgePoint: "文艺复兴起源", analysis: "文艺复兴起源于14世纪的意大利，尤其是佛罗伦萨、威尼斯等城市。" },
    { type: "choice", difficulty: 2, text: "人文主义的核心是：", options: ["A. 神本主义", "B. 人本主义", "C. 物质主义", "D. 虚无主义"], answer: "B", knowledgePoint: "人文主义", analysis: "人文主义强调人的价值和尊严，主张研究古典文化，是文艺复兴的核心思想。" },
    { type: "choice", difficulty: 3, text: "文艺复兴时期的艺术特点是：", options: ["A. 抽象风格", "B. 写实与透视", "C. 几何图案", "D. 单色绘画"], answer: "B", knowledgePoint: "文艺复兴艺术", analysis: "文艺复兴艺术家如达芬奇、米开朗基罗强调写实、透视和人体比例，创造了逼真的艺术作品。" }
  ]},

  { lesson: 8, title: "印刷术革命", questions: [
    { type: "choice", difficulty: 1, text: "古腾堡印刷机发明于哪一年？", options: ["A. 1440年", "B. 1540年", "C. 1640年", "D. 1740年"], answer: "A", knowledgePoint: "印刷术发明", analysis: "1440年左右，约翰内斯·古腾堡发明了活字印刷术，引发了知识传播的革命。" },
    { type: "choice", difficulty: 2, text: "印刷术的影响是：", options: ["A. 知识垄断加强", "B. 知识民主化", "C. 书籍减少", "D. 文盲增加"], answer: "B", knowledgePoint: "印刷术的影响", analysis: "印刷术使书籍变得更便宜、更普及，知识不再是贵族的专利，实现了知识的民主化。" },
    { type: "choice", difficulty: 3, text: "印刷术对宗教改革的作用是：", options: ["A. 阻碍改革", "B. 推动改革", "C. 无关紧要", "D. 消灭宗教"], answer: "B", knowledgePoint: "印刷术与宗教改革", analysis: "印刷术使马丁·路德的著作迅速传播，扩大了宗教改革的影响，推动了新教的发展。" }
  ]},

  { lesson: 9, title: "地理大发现", questions: [
    { type: "choice", difficulty: 1, text: "哥伦布发现美洲是在哪一年？", options: ["A. 1492年", "B. 1592年", "C. 1692年", "D. 1792年"], answer: "A", knowledgePoint: "哥伦布发现美洲", analysis: "1492年，哥伦布率领船队到达美洲，开启了地理大发现的时代。" },
    { type: "choice", difficulty: 2, text: "地理大发现的动机是：", options: ["A. 科学探索", "B. 寻找新航路", "C. 逃避战乱", "D. 传播宗教"], answer: "B", knowledgePoint: "地理大发现的动机", analysis: "欧洲人寻找通往东方的新航路，以获取香料和财富，这是地理大发现的主要动机。" },
    { type: "choice", difficulty: 3, text: "地理大发现的后果不包括：", options: ["A. 殖民扩张", "B. 全球化开始", "C. 文化交流", "D. 世界和平"], answer: "D", knowledgePoint: "地理大发现的后果", analysis: "地理大发现开启了欧洲的殖民扩张，带来了全球化和文化交流，但也引发了长期的冲突和不平等。" }
  ]},

  { lesson: 10, title: "宗教改革", questions: [
    { type: "choice", difficulty: 1, text: "马丁·路德发表九十五条论纲是在哪一年？", options: ["A. 1517年", "B. 1617年", "C. 1717年", "D. 1817年"], answer: "A", knowledgePoint: "宗教改革开始", analysis: "1517年，马丁·路德将九十五条论纲钉在维滕贝格教堂门上，标志着宗教改革的开始。" },
    { type: "choice", difficulty: 2, text: "英国国教的建立者是：", options: ["A. 亨利八世", "B. 伊丽莎白一世", "C. 查理一世", "D. 詹姆士一世"], answer: "A", knowledgePoint: "英国国教", analysis: "亨利八世为了离婚与罗马教廷决裂，建立了英国国教，自己成为教会领袖。" },
    { type: "choice", difficulty: 3, text: "宗教改革的影响是：", options: ["A. 统一基督教", "B. 分裂基督教", "C. 消灭宗教", "D. 加强教皇权力"], answer: "B", knowledgePoint: "宗教改革的影响", analysis: "宗教改革导致基督教分裂为天主教和新教两大阵营，形成了不同的教派。" }
  ]},

  // ── 第3章 英国革命 ──────────────────────────────────────────

  { lesson: 11, title: "都铎王朝崛起", questions: [
    { type: "choice", difficulty: 1, text: "都铎王朝的建立者是：", options: ["A. 亨利七世", "B. 亨利八世", "C. 伊丽莎白一世", "D. 詹姆士一世"], answer: "A", knowledgePoint: "都铎王朝建立", analysis: "1485年，亨利·都铎在博斯沃思战役中击败理查三世，建立了都铎王朝。" },
    { type: "choice", difficulty: 2, text: "玫瑰战争是哪两个家族的斗争？", options: ["A. 约克和兰开斯特", "B. 都铎和斯图亚特", "C. 金雀花和诺曼", "D. 安茹和卡佩"], answer: "A", knowledgePoint: "玫瑰战争", analysis: "玫瑰战争是约克家族（白玫瑰）和兰开斯特家族（红玫瑰）为争夺王位进行的长达30年的战争。" },
    { type: "choice", difficulty: 3, text: "都铎王朝的特点是：", options: ["A. 王权削弱", "B. 专制加强", "C. 民主兴起", "D. 教会独立"], answer: "B", knowledgePoint: "都铎专制", analysis: "都铎王朝加强了王权，建立了强大的中央集权，议会成为国王的工具。" }
  ]},

  { lesson: 12, title: "亨利八世", questions: [
    { type: "choice", difficulty: 1, text: "亨利八世有几位妻子？", options: ["A. 4位", "B. 5位", "C. 6位", "D. 7位"], answer: "C", knowledgePoint: "亨利八世的婚姻", analysis: "亨利八世有六位妻子，其中两位被处决，两位被离婚，一位去世，一位存活。" },
    { type: "choice", difficulty: 2, text: "亨利八世宗教改革的原因是：", options: ["A. 宗教信仰", "B. 离婚问题", "C. 经济利益", "D. 人民要求"], answer: "B", knowledgePoint: "英国宗教改革原因", analysis: "亨利八世为了与凯瑟琳王后离婚，与罗马教廷决裂，推动了英国宗教改革。" },
    { type: "choice", difficulty: 3, text: "解散修道院的影响是：", options: ["A. 削弱王权", "B. 充实王室财政", "C. 加强教会", "D. 减少土地"], answer: "B", knowledgePoint: "解散修道院", analysis: "亨利八世解散修道院，没收其财产，充实了王室财政，削弱了教会势力。" }
  ]},

  { lesson: 13, title: "伊丽莎白一世时代", questions: [
    { type: "choice", difficulty: 1, text: "伊丽莎白一世统治时期被称为：", options: ["A. 黑暗时代", "B. 黄金时代", "C. 动荡时代", "D. 革命时代"], answer: "B", knowledgePoint: "伊丽莎白时代", analysis: "伊丽莎白一世统治时期（1558-1603）被称为英国的黄金时代，经济繁荣，文化昌盛。" },
    { type: "choice", difficulty: 2, text: "英国击败西班牙无敌舰队是在哪一年？", options: ["A. 1588年", "B. 1688年", "C. 1788年", "D. 1888年"], answer: "A", knowledgePoint: "无敌舰队", analysis: "1588年，英国海军击败西班牙无敌舰队，确立了海上霸权。" },
    { type: "choice", difficulty: 3, text: "伊丽莎白时代的文化成就包括：", options: ["A. 莎士比亚的戏剧", "B. 牛顿的科学发现", "C. 工业革命", "D. 计算机发明"], answer: "A", knowledgePoint: "伊丽莎白时代文化", analysis: "莎士比亚、马洛、斯宾塞等文学巨匠活跃在伊丽莎白时代，创造了不朽的文学作品。" }
  ]},

  { lesson: 14, title: "清教徒革命", questions: [
    { type: "choice", difficulty: 1, text: "英国内战爆发于哪一年？", options: ["A. 1642年", "B. 1742年", "C. 1842年", "D. 1942年"], answer: "A", knowledgePoint: "英国内战", analysis: "1642年，查理一世向议会宣战，英国内战正式爆发。" },
    { type: "choice", difficulty: 2, text: "议会军的领袖是：", options: ["A. 查理一世", "B. 奥利弗·克伦威尔", "C. 詹姆士二世", "D. 威廉三世"], answer: "B", knowledgePoint: "克伦威尔", analysis: "奥利弗·克伦威尔率领新模范军击败国王军队，成为议会军的领袖。" },
    { type: "choice", difficulty: 3, text: "查理一世被处决是在哪一年？", options: ["A. 1649年", "B. 1659年", "C. 1669年", "D. 1679年"], answer: "A", knowledgePoint: "查理一世被处决", analysis: "1649年，查理一世被议会处决，英国成为共和国，这是英国历史上唯一一次废除君主制。" }
  ]},

  { lesson: 15, title: "克伦威尔与共和国", questions: [
    { type: "choice", difficulty: 1, text: "克伦威尔的称号是：", options: ["A. 国王", "B. 护国公", "C. 总统", "D. 首相"], answer: "B", knowledgePoint: "护国公", analysis: "克伦威尔成为护国公，实行军事独裁统治，掌握国家实权。" },
    { type: "choice", difficulty: 2, text: "斯图亚特复辟是在哪一年？", options: ["A. 1660年", "B. 1670年", "C. 1680年", "D. 1690年"], answer: "A", knowledgePoint: "斯图亚特复辟", analysis: "1660年，查理二世回到英国，斯图亚特王朝复辟，结束了共和国时期。" },
    { type: "choice", difficulty: 3, text: "共和国失败的原因是：", options: ["A. 经济繁荣", "B. 缺乏合法性", "C. 人民支持", "D. 外部援助"], answer: "B", knowledgePoint: "共和国失败", analysis: "克伦威尔的独裁统治缺乏广泛支持，他去世后政权陷入混乱，最终导致斯图亚特王朝复辟。" }
  ]},

  // ── 第4章 工业革命 ──────────────────────────────────────────

  { lesson: 16, title: "蒸汽机", questions: [
    { type: "choice", difficulty: 1, text: "瓦特改良蒸汽机是在哪一年获得专利？", options: ["A. 1775年", "B. 1875年", "C. 1975年", "D. 1675年"], answer: "A", knowledgePoint: "瓦特蒸汽机", analysis: "1775年，詹姆斯·瓦特获得了蒸汽机的专利，这是工业革命的关键发明。" },
    { type: "choice", difficulty: 2, text: "蒸汽机的能源是：", options: ["A. 石油", "B. 煤炭", "C. 天然气", "D. 电力"], answer: "B", knowledgePoint: "蒸汽机的能源", analysis: "蒸汽机使用煤炭作为能源，开启了化石燃料时代，推动了工业革命。" },
    { type: "choice", difficulty: 3, text: "蒸汽机对工业的影响是：", options: ["A. 手工生产延续", "B. 工厂制度建立", "C. 农业复兴", "D. 商业衰退"], answer: "B", knowledgePoint: "蒸汽机的影响", analysis: "蒸汽机为工厂提供了动力，工厂制度取代了手工工场，改变了生产方式。" }
  ]},

  { lesson: 17, title: "工厂制度", questions: [
    { type: "choice", difficulty: 1, text: "工厂制度的特点是：", options: ["A. 家庭生产", "B. 集中生产", "C. 手工劳动", "D. 分散作业"], answer: "B", knowledgePoint: "工厂制度", analysis: "工厂制度将工人集中在工厂里工作，使用机器进行大规模生产。" },
    { type: "choice", difficulty: 2, text: "工人阶级形成的原因是：", options: ["A. 农业发展", "B. 工业革命", "C. 贵族衰落", "D. 战争影响"], answer: "B", knowledgePoint: "工人阶级形成", analysis: "工业革命导致工厂工人聚集，形成了一个新的社会阶级——工人阶级。" },
    { type: "choice", difficulty: 3, text: "早期工厂工作条件的特点是：", options: ["A. 舒适安全", "B. 恶劣危险", "C. 轻松自由", "D. 高薪优待"], answer: "B", knowledgePoint: "工厂工作条件", analysis: "早期工厂工作时间长、环境恶劣、工资低，工人面临着健康和安全风险。" }
  ]},

  { lesson: 18, title: "城市化", questions: [
    { type: "choice", difficulty: 1, text: "工业革命时期，人口流向是：", options: ["A. 城市到农村", "B. 农村到城市", "C. 农村到农村", "D. 城市到城市"], answer: "B", knowledgePoint: "城市化", analysis: "工业革命推动了城市化进程，大量农村人口进入城市寻找工作机会。" },
    { type: "choice", difficulty: 2, text: "曼彻斯特是因什么而崛起？", options: ["A. 农业", "B. 纺织业", "C. 渔业", "D. 采矿业"], answer: "B", knowledgePoint: "曼彻斯特", analysis: "曼彻斯特因纺织业的发展从一个小镇变成了工业中心，是工业革命的典型城市。" },
    { type: "choice", difficulty: 3, text: "城市化带来的问题不包括：", options: ["A. 污染", "B. 拥挤", "C. 疾病", "D. 人口减少"], answer: "D", knowledgePoint: "城市化问题", analysis: "城市化带来了污染、拥挤和疾病传播等问题，但人口是增加而非减少。" }
  ]},

  { lesson: 19, title: "工人运动", questions: [
    { type: "choice", difficulty: 1, text: "宪章运动的主要要求是：", options: ["A. 君主专制", "B. 普选权", "C. 贵族统治", "D. 社会主义"], answer: "B", knowledgePoint: "宪章运动", analysis: "宪章运动要求普选权和政治改革，是工人阶级第一次大规模的政治行动。" },
    { type: "choice", difficulty: 2, text: "工会的作用是：", options: ["A. 维护资本家利益", "B. 维护工人权益", "C. 破坏生产", "D. 反对改革"], answer: "B", knowledgePoint: "工会", analysis: "工会组织工人争取更好的工资和工作条件，维护工人的权益。" },
    { type: "choice", difficulty: 3, text: "工人运动的结果是：", options: ["A. 没有任何改变", "B. 推动社会改革", "C. 推翻资本主义", "D. 回到封建制度"], answer: "B", knowledgePoint: "工人运动的影响", analysis: "工人运动推动了社会改革，如工厂法的制定，改善了工人的生活和工作条件。" }
  ]},

  { lesson: 20, title: "维多利亚时代", questions: [
    { type: "choice", difficulty: 1, text: "维多利亚女王统治时期是：", options: ["A. 19世纪", "B. 18世纪", "C. 20世纪", "D. 17世纪"], answer: "A", knowledgePoint: "维多利亚时代", analysis: "维多利亚女王从1837年到1901年统治英国，属于19世纪。" },
    { type: "choice", difficulty: 2, text: "大英帝国在维多利亚时代的地位是：", options: ["A. 衰落", "B. 鼎盛", "C. 起步", "D. 灭亡"], answer: "B", knowledgePoint: "大英帝国鼎盛", analysis: "维多利亚时代是大英帝国的鼎盛时期，英国拥有世界上最大的殖民地。" },
    { type: "choice", difficulty: 3, text: "维多利亚时代的社会特点是：", options: ["A. 完全平等", "B. 进步与矛盾并存", "C. 停滞不前", "D. 倒退落后"], answer: "B", knowledgePoint: "维多利亚时代特点", analysis: "维多利亚时代既有工业进步和科学发展，也存在贫困和不平等，是一个充满反差的时代。" }
  ]},

  // ── 第5章 帝国主义 ──────────────────────────────────────────

  { lesson: 21, title: "大英帝国", questions: [
    { type: "choice", difficulty: 1, text: "大英帝国被称为：", options: ["A. 日不落帝国", "B. 日升帝国", "C. 日中帝国", "D. 日没帝国"], answer: "A", knowledgePoint: "日不落帝国", analysis: "大英帝国在19世纪达到顶峰，殖民地遍布全球，太阳永远不会在其领土上落下。" },
    { type: "choice", difficulty: 2, text: "大英帝国的面积占世界的比例是：", options: ["A. 四分之一", "B. 三分之一", "C. 二分之一", "D. 五分之一"], answer: "A", knowledgePoint: "大英帝国的规模", analysis: "大英帝国的领土面积约占世界的四分之一，包括印度、加拿大、澳大利亚等。" },
    { type: "choice", difficulty: 3, text: "帝国扩张的根本原因是：", options: ["A. 传播文明", "B. 经济利益", "C. 军事需要", "D. 宗教使命"], answer: "B", knowledgePoint: "帝国扩张原因", analysis: "经济利益是帝国扩张的根本动力，殖民地为英国提供原材料和市场。" }
  ]},

  { lesson: 22, title: "殖民地的声音", questions: [
    { type: "choice", difficulty: 1, text: "殖民统治的特点是：", options: ["A. 平等合作", "B. 不平等统治", "C. 相互尊重", "D. 文化融合"], answer: "B", knowledgePoint: "殖民统治", analysis: "殖民统治建立了不平等的关系，殖民者享有特权，被殖民者受到压迫和剥削。" },
    { type: "choice", difficulty: 2, text: "殖民主义的双重性是指：", options: ["A. 只有好处", "B. 只有坏处", "C. 既有建设性也有破坏性", "D. 没有影响"], answer: "C", knowledgePoint: "殖民主义的双重性", analysis: "殖民主义破坏了当地传统经济和文化，但也带来了现代教育、医疗和基础设施。" },
    { type: "choice", difficulty: 3, text: "民族意识觉醒的原因是：", options: ["A. 殖民统治", "B. 经济繁荣", "C. 文化传承", "D. 外部援助"], answer: "A", knowledgePoint: "民族意识觉醒", analysis: "殖民统治激发了民族意识，殖民地人民开始争取独立和自决。" }
  ]},

  { lesson: 23, title: "奴隶贸易与废除", questions: [
    { type: "choice", difficulty: 1, text: "三角贸易的路线是：", options: ["A. 欧洲→非洲→美洲→欧洲", "B. 欧洲→美洲→非洲→欧洲", "C. 非洲→欧洲→美洲→非洲", "D. 美洲→非洲→欧洲→美洲"], answer: "A", knowledgePoint: "三角贸易", analysis: "三角贸易路线：欧洲出发→非洲购买奴隶→美洲出售奴隶→返回欧洲。" },
    { type: "choice", difficulty: 2, text: "奴隶贸易持续了多长时间？", options: ["A. 约100年", "B. 约200年", "C. 约300年", "D. 约400年"], answer: "C", knowledgePoint: "奴隶贸易时间", analysis: "奴隶贸易从16世纪开始到19世纪结束，持续了约300年。" },
    { type: "choice", difficulty: 3, text: "废奴运动的领袖包括：", options: ["A. 牛顿", "B. 林肯", "C. 威尔伯福斯", "D. 达尔文"], answer: "C", knowledgePoint: "废奴运动", analysis: "威廉·威尔伯福斯是英国废奴运动的领袖，长期推动废除奴隶制。" }
  ]},

  { lesson: 24, title: "印度", questions: [
    { type: "choice", difficulty: 1, text: "东印度公司最初是：", options: ["A. 军事组织", "B. 贸易公司", "C. 宗教团体", "D. 政府机构"], answer: "B", knowledgePoint: "东印度公司", analysis: "东印度公司最初是一家贸易公司，后来逐渐获得政治权力，成为英国在印度的统治工具。" },
    { type: "choice", difficulty: 2, text: "印度独立是在哪一年？", options: ["A. 1947年", "B. 1957年", "C. 1967年", "D. 1977年"], answer: "A", knowledgePoint: "印度独立", analysis: "1947年，印度获得独立，结束了英国的殖民统治。" },
    { type: "choice", difficulty: 3, text: "印巴分治的原因是：", options: ["A. 地理因素", "B. 宗教差异", "C. 经济矛盾", "D. 外部压力"], answer: "B", knowledgePoint: "印巴分治", analysis: "印度教徒和穆斯林之间的宗教差异导致了印巴分治，印度和巴基斯坦分别独立。" }
  ]},

  { lesson: 25, title: "非洲瓜分", questions: [
    { type: "choice", difficulty: 1, text: "柏林会议召开于哪一年？", options: ["A. 1884年", "B. 1894年", "C. 1904年", "D. 1914年"], answer: "A", knowledgePoint: "柏林会议", analysis: "1884-1885年，欧洲列强在柏林召开会议，瓜分了非洲。" },
    { type: "choice", difficulty: 2, text: "非洲瓜分的特点是：", options: ["A. 尊重当地边界", "B. 地图上的直线", "C. 和平协商", "D. 文化融合"], answer: "B", knowledgePoint: "非洲瓜分特点", analysis: "欧洲列强在地图上直接画直线划分非洲边界，完全无视当地的历史和民族。" },
    { type: "choice", difficulty: 3, text: "非洲反抗殖民统治的例子包括：", options: ["A. 埃及独立", "B. 埃塞俄比亚抗意战争", "C. 南非种族隔离", "D. 刚果自由邦"], answer: "B", knowledgePoint: "非洲反抗", analysis: "埃塞俄比亚在1896年击败意大利军队，是非洲唯一成功抵抗殖民侵略的国家。" }
  ]},

  // ── 第6章 走向一战 ──────────────────────────────────────────

  { lesson: 26, title: "民族主义", questions: [
    { type: "choice", difficulty: 1, text: "巴尔干地区被称为：", options: ["A. 欧洲的花园", "B. 欧洲的火药桶", "C. 欧洲的心脏", "D. 欧洲的门户"], answer: "B", knowledgePoint: "巴尔干火药桶", analysis: "巴尔干地区民族众多，矛盾复杂，是第一次世界大战的导火索所在地。" },
    { type: "choice", difficulty: 2, text: "泛斯拉夫主义的目标是：", options: ["A. 分裂斯拉夫人", "B. 联合所有斯拉夫人", "C. 消灭斯拉夫人", "D. 同化斯拉夫人"], answer: "B", knowledgePoint: "泛斯拉夫主义", analysis: "泛斯拉夫主义主张所有斯拉夫人联合起来，威胁了奥匈帝国的统治。" },
    { type: "choice", difficulty: 3, text: "奥匈帝国解体的原因是：", options: ["A. 经济繁荣", "B. 民族主义", "C. 外部入侵", "D. 自然灾害"], answer: "B", knowledgePoint: "奥匈帝国解体", analysis: "民族主义的兴起导致奥匈帝国这个多民族国家解体，分裂成多个独立国家。" }
  ]},

  { lesson: 27, title: "军备竞赛", questions: [
    { type: "choice", difficulty: 1, text: "三国同盟包括：", options: ["A. 英国、法国、俄国", "B. 德国、奥匈帝国、意大利", "C. 美国、日本、英国", "D. 法国、德国、俄国"], answer: "B", knowledgePoint: "三国同盟", analysis: "三国同盟是德国、奥匈帝国和意大利组成的军事同盟。" },
    { type: "choice", difficulty: 2, text: "三国协约包括：", options: ["A. 德国、奥匈帝国、意大利", "B. 英国、法国、俄国", "C. 美国、日本、英国", "D. 法国、德国、俄国"], answer: "B", knowledgePoint: "三国协约", analysis: "三国协约是英国、法国和俄国组成的军事同盟，与三国同盟对峙。" },
    { type: "choice", difficulty: 3, text: "军备竞赛的影响是：", options: ["A. 促进和平", "B. 增加战争风险", "C. 减少冲突", "D. 经济衰退"], answer: "B", knowledgePoint: "军备竞赛的影响", analysis: "军备竞赛加剧了国际紧张局势，使战争变得越来越可能。" }
  ]},

  { lesson: 28, title: "一战起因", questions: [
    { type: "choice", difficulty: 1, text: "萨拉热窝事件中被刺杀的是：", options: ["A. 威廉二世", "B. 斐迪南大公", "C. 尼古拉二世", "D. 乔治五世"], answer: "B", knowledgePoint: "萨拉热窝事件", analysis: "1914年6月28日，奥匈帝国皇位继承人斐迪南大公在萨拉热窝被刺杀。" },
    { type: "choice", difficulty: 2, text: "一战爆发于哪一年？", options: ["A. 1914年", "B. 1915年", "C. 1916年", "D. 1917年"], answer: "A", knowledgePoint: "一战爆发", analysis: "1914年8月，奥匈帝国向塞尔维亚宣战，第一次世界大战正式爆发。" },
    { type: "choice", difficulty: 3, text: "七月危机指的是：", options: ["A. 战争结束", "B. 战争爆发前的外交危机", "C. 和平谈判", "D. 经济危机"], answer: "B", knowledgePoint: "七月危机", analysis: "七月危机是指从萨拉热窝事件到战争爆发的一个月里，外交努力失败，局势急剧恶化。" }
  ]},

  { lesson: 29, title: "战壕战", questions: [
    { type: "choice", difficulty: 1, text: "一战的主战场在：", options: ["A. 非洲", "B. 欧洲", "C. 亚洲", "D. 美洲"], answer: "B", knowledgePoint: "一战主战场", analysis: "第一次世界大战的主战场在欧洲，主要分为西线、东线和南线战场。" },
    { type: "choice", difficulty: 2, text: "堑壕战的特点是：", options: ["A. 快速进攻", "B. 长期僵持", "C. 机动灵活", "D. 速战速决"], answer: "B", knowledgePoint: "堑壕战", analysis: "堑壕战导致战线长期僵持，双方在战壕中对峙了四年，伤亡惨重。" },
    { type: "choice", difficulty: 3, text: "新式武器包括：", options: ["A. 弓箭", "B. 机关枪", "C. 长矛", "D. 盾牌"], answer: "B", knowledgePoint: "新式武器", analysis: "机关枪、铁丝网、火炮等新技术使进攻变得极其困难，导致了堑壕战的出现。" }
  ]},

  { lesson: 30, title: "凡尔赛条约", questions: [
    { type: "choice", difficulty: 1, text: "一战结束于哪一年？", options: ["A. 1918年", "B. 1919年", "C. 1920年", "D. 1921年"], answer: "A", knowledgePoint: "一战结束", analysis: "1918年11月11日，德国签署停战协定，第一次世界大战正式结束。" },
    { type: "choice", difficulty: 2, text: "凡尔赛条约对德国的制裁包括：", options: ["A. 扩大领土", "B. 巨额赔款", "C. 允许扩军", "D. 免除债务"], answer: "B", knowledgePoint: "凡尔赛条约", analysis: "凡尔赛条约要求德国支付巨额赔款，割让领土，限制军队规模。" },
    { type: "choice", difficulty: 3, text: "凡尔赛条约的影响是：", options: ["A. 促进和平", "B. 埋下二战伏笔", "C. 稳定欧洲", "D. 经济繁荣"], answer: "B", knowledgePoint: "凡尔赛条约的影响", analysis: "凡尔赛条约对德国过于苛刻，激起了德国民众的不满，为二战埋下了伏笔。" }
  ]},

  // ── 第7章 两次世界大战 ──────────────────────────────────────

  { lesson: 31, title: "索姆河战役", questions: [
    { type: "choice", difficulty: 1, text: "索姆河战役发生在哪一年？", options: ["A. 1916年", "B. 1917年", "C. 1918年", "D. 1915年"], answer: "A", knowledgePoint: "索姆河战役", analysis: "1916年7月1日，索姆河战役开始，是一战中最血腥的战役之一。" },
    { type: "choice", difficulty: 2, text: "索姆河战役的特点是：", options: ["A. 速战速决", "B. 伤亡惨重", "C. 轻松胜利", "D. 没有战斗"], answer: "B", knowledgePoint: "索姆河战役特点", analysis: "索姆河战役持续了五个月，双方伤亡超过100万人，是一战中最惨烈的战役。" },
    { type: "choice", difficulty: 3, text: "坦克首次投入使用是在：", options: ["A. 马恩河战役", "B. 凡尔登战役", "C. 索姆河战役", "D. 日德兰海战"], answer: "C", knowledgePoint: "坦克的使用", analysis: "1916年索姆河战役中，英军首次使用坦克，这是装甲作战的开端。" }
  ]},

  { lesson: 32, title: "十月革命", questions: [
    { type: "choice", difficulty: 1, text: "十月革命发生在哪一年？", options: ["A. 1917年", "B. 1918年", "C. 1919年", "D. 1920年"], answer: "A", knowledgePoint: "十月革命", analysis: "1917年11月，布尔什维克党在列宁的领导下夺取了政权，建立了世界上第一个社会主义国家。" },
    { type: "choice", difficulty: 2, text: "十月革命的领导者是：", options: ["A. 斯大林", "B. 列宁", "C. 托洛茨基", "D. 普列汉诺夫"], answer: "B", knowledgePoint: "列宁", analysis: "列宁是布尔什维克党的领袖，领导了十月革命。" },
    { type: "choice", difficulty: 3, text: "十月革命的影响是：", options: ["A. 巩固沙皇统治", "B. 建立社会主义", "C. 恢复资本主义", "D. 维持现状"], answer: "B", knowledgePoint: "十月革命的影响", analysis: "十月革命建立了世界上第一个社会主义国家，对世界历史产生了深远影响。" }
  ]},

  { lesson: 33, title: "纳粹德国崛起", questions: [
    { type: "choice", difficulty: 1, text: "希特勒成为德国总理是在哪一年？", options: ["A. 1933年", "B. 1934年", "C. 1935年", "D. 1936年"], answer: "A", knowledgePoint: "希特勒掌权", analysis: "1933年，希特勒被任命为德国总理，纳粹党开始在德国掌权。" },
    { type: "choice", difficulty: 2, text: "纳粹党的全称是：", options: ["A. 德国社会党", "B. 国家社会主义德国工人党", "C. 德国共产党", "D. 德国自由党"], answer: "B", knowledgePoint: "纳粹党", analysis: "纳粹党全称是国家社会主义德国工人党，宣扬极端民族主义和反犹主义。" },
    { type: "choice", difficulty: 3, text: "纳粹崛起的原因是：", options: ["A. 经济繁荣", "B. 大萧条", "C. 社会稳定", "D. 国际支持"], answer: "B", knowledgePoint: "纳粹崛起原因", analysis: "大萧条使德国经济崩溃，民众对政府失去信心，为纳粹党的崛起提供了土壤。" }
  ]},

  { lesson: 34, title: "第二次世界大战", questions: [
    { type: "choice", difficulty: 1, text: "二战爆发于哪一年？", options: ["A. 1939年", "B. 1940年", "C. 1941年", "D. 1942年"], answer: "A", knowledgePoint: "二战爆发", analysis: "1939年9月1日，德国入侵波兰，第二次世界大战正式爆发。" },
    { type: "choice", difficulty: 2, text: "二战的主战场包括：", options: ["A. 只有欧洲", "B. 欧洲和太平洋", "C. 只有亚洲", "D. 只有非洲"], answer: "B", knowledgePoint: "二战战场", analysis: "二战有两个主要战场：欧洲战场对抗德国和意大利，太平洋战场对抗日本。" },
    { type: "choice", difficulty: 3, text: "二战的转折点是：", options: ["A. 珍珠港事件", "B. 斯大林格勒战役", "C. 诺曼底登陆", "D. 柏林战役"], answer: "B", knowledgePoint: "二战转折", analysis: "斯大林格勒战役是二战的转折点，苏军击败德军，开始战略反攻。" }
  ]},

  { lesson: 35, title: "大屠杀", questions: [
    { type: "choice", difficulty: 1, text: "大屠杀中遇难的犹太人约有：", options: ["A. 100万", "B. 300万", "C. 600万", "D. 900万"], answer: "C", knowledgePoint: "大屠杀", analysis: "在纳粹统治期间，大约600万犹太人被系统性地屠杀。" },
    { type: "choice", difficulty: 2, text: "集中营的作用是：", options: ["A. 关押战犯", "B. 种族灭绝", "C. 劳动改造", "D. 教育中心"], answer: "B", knowledgePoint: "集中营", analysis: "纳粹建立了多个集中营，用于关押和屠杀犹太人及其他被视为敌人的群体。" },
    { type: "choice", difficulty: 3, text: "大屠杀的教训是：", options: ["A. 种族主义无害", "B. 警惕极端主义", "C. 战争是解决问题的方式", "D. 偏见是正常的"], answer: "B", knowledgePoint: "大屠杀的教训", analysis: "大屠杀提醒我们要警惕种族主义和极端主义，尊重人类的多样性。" }
  ]},

  // ── 第8章 冷战 ──────────────────────────────────────────

  { lesson: 36, title: "雅尔塔会议", questions: [
    { type: "choice", difficulty: 1, text: "雅尔塔会议召开于哪一年？", options: ["A. 1945年", "B. 1946年", "C. 1947年", "D. 1948年"], answer: "A", knowledgePoint: "雅尔塔会议", analysis: "1945年，二战结束前夕，美英苏三国领导人在雅尔塔会面，划分了战后的势力范围。" },
    { type: "choice", difficulty: 2, text: "雅尔塔会议的参与国是：", options: ["A. 美国、英国、苏联", "B. 美国、英国、法国", "C. 苏联、中国、英国", "D. 美国、苏联、中国"], answer: "A", knowledgePoint: "雅尔塔会议参与国", analysis: "雅尔塔会议由美国、英国和苏联三国领导人参加。" },
    { type: "choice", difficulty: 3, text: "雅尔塔会议的影响是：", options: ["A. 促进世界和平", "B. 奠定冷战格局", "C. 消灭共产主义", "D. 统一欧洲"], answer: "B", knowledgePoint: "雅尔塔会议的影响", analysis: "雅尔塔会议划分了战后的势力范围，奠定了冷战的基础。" }
  ]},

  { lesson: 37, title: "铁幕与马歇尔计划", questions: [
    { type: "choice", difficulty: 1, text: "铁幕演说发表于哪一年？", options: ["A. 1946年", "B. 1947年", "C. 1948年", "D. 1949年"], answer: "A", knowledgePoint: "铁幕演说", analysis: "1946年，丘吉尔发表铁幕演说，拉开了冷战的序幕。" },
    { type: "choice", difficulty: 2, text: "马歇尔计划的目的是：", options: ["A. 援助苏联", "B. 援助欧洲重建", "C. 扩张领土", "D. 发动战争"], answer: "B", knowledgePoint: "马歇尔计划", analysis: "马歇尔计划通过经济援助帮助欧洲重建，同时加强了美国对欧洲的影响力。" },
    { type: "choice", difficulty: 3, text: "杜鲁门主义的核心是：", options: ["A. 孤立主义", "B. 遏制政策", "C. 扩张主义", "D. 和平主义"], answer: "B", knowledgePoint: "杜鲁门主义", analysis: "杜鲁门主义确立了美国的遏制政策，旨在阻止苏联的扩张。" }
  ]},

  { lesson: 38, title: "朝鲜战争", questions: [
    { type: "choice", difficulty: 1, text: "朝鲜战争爆发于哪一年？", options: ["A. 1950年", "B. 1951年", "C. 1952年", "D. 1953年"], answer: "A", knowledgePoint: "朝鲜战争", analysis: "1950年6月，朝鲜战争爆发，这是冷战中的第一次大规模热战。" },
    { type: "choice", difficulty: 2, text: "朝鲜战争的结果是：", options: ["A. 朝鲜统一", "B. 韩国统一", "C. 维持分裂", "D. 中国占领"], answer: "C", knowledgePoint: "朝鲜战争结果", analysis: "1953年，双方签署停战协定，朝鲜仍然分裂为南北两个国家。" },
    { type: "choice", difficulty: 3, text: "朝鲜战争的影响是：", options: ["A. 缓和冷战", "B. 加剧冷战紧张", "C. 结束冷战", "D. 促进和平"], answer: "B", knowledgePoint: "朝鲜战争的影响", analysis: "朝鲜战争加剧了冷战的紧张局势，导致军备竞赛进一步升级。" }
  ]},

  { lesson: 39, title: "古巴导弹危机", questions: [
    { type: "choice", difficulty: 1, text: "古巴导弹危机发生在哪一年？", options: ["A. 1962年", "B. 1963年", "C. 1964年", "D. 1965年"], answer: "A", knowledgePoint: "古巴导弹危机", analysis: "1962年10月，古巴导弹危机爆发，是冷战中美苏最接近核战争的一次危机。" },
    { type: "choice", difficulty: 2, text: "古巴导弹危机的原因是：", options: ["A. 苏联在古巴部署导弹", "B. 美国入侵古巴", "C. 古巴进攻美国", "D. 经济制裁"], answer: "A", knowledgePoint: "古巴导弹危机原因", analysis: "苏联在古巴部署导弹，威胁到美国的安全，引发了危机。" },
    { type: "choice", difficulty: 3, text: "古巴导弹危机的解决方式是：", options: ["A. 战争", "B. 外交谈判", "C. 经济制裁", "D. 军事威胁"], answer: "B", knowledgePoint: "古巴导弹危机解决", analysis: "经过紧张的外交谈判，苏联同意撤除导弹，美国承诺不入侵古巴，危机和平解决。" }
  ]},

  { lesson: 40, title: "柏林墙", questions: [
    { type: "choice", difficulty: 1, text: "柏林墙建立于哪一年？", options: ["A. 1961年", "B. 1962年", "C. 1963年", "D. 1964年"], answer: "A", knowledgePoint: "柏林墙建立", analysis: "1961年，东德修建柏林墙，分隔了东柏林和西柏林。" },
    { type: "choice", difficulty: 2, text: "柏林墙倒塌于哪一年？", options: ["A. 1989年", "B. 1990年", "C. 1991年", "D. 1992年"], answer: "A", knowledgePoint: "柏林墙倒塌", analysis: "1989年11月9日，柏林墙倒塌，象征着冷战的结束。" },
    { type: "choice", difficulty: 3, text: "德国统一是在哪一年？", options: ["A. 1989年", "B. 1990年", "C. 1991年", "D. 1992年"], answer: "B", knowledgePoint: "德国统一", analysis: "1990年，东德和西德统一，标志着冷战的重要转折。" }
  ]},

  // ── 第9章 战后世界 ──────────────────────────────────────────

  { lesson: 41, title: "印度独立", questions: [
    { type: "choice", difficulty: 1, text: "印度独立运动的领袖是：", options: ["A. 真纳", "B. 甘地", "C. 尼赫鲁", "D. 泰戈尔"], answer: "B", knowledgePoint: "甘地", analysis: "甘地领导的非暴力不合作运动是印度独立的关键。" },
    { type: "choice", difficulty: 2, text: "印巴分治的时间是：", options: ["A. 1947年", "B. 1948年", "C. 1949年", "D. 1950年"], answer: "A", knowledgePoint: "印巴分治", analysis: "1947年，印度分为印度和巴基斯坦两个国家。" },
    { type: "choice", difficulty: 3, text: "分治的代价是：", options: ["A. 和平过渡", "B. 大规模冲突", "C. 经济繁荣", "D. 文化融合"], answer: "B", knowledgePoint: "分治的代价", analysis: "印巴分治导致了大规模的人口迁移和暴力冲突，数百万人死亡或流离失所。" }
  ]},

  { lesson: 42, title: "非洲独立浪潮", questions: [
    { type: "choice", difficulty: 1, text: "1960年被称为：", options: ["A. 非洲年", "B. 独立年", "C. 解放年", "D. 自由年"], answer: "A", knowledgePoint: "非洲年", analysis: "1960年有17个非洲国家获得独立，被称为非洲年。" },
    { type: "choice", difficulty: 2, text: "非洲独立的方式包括：", options: ["A. 只有谈判", "B. 只有武装斗争", "C. 谈判和武装斗争", "D. 外部干预"], answer: "C", knowledgePoint: "非洲独立方式", analysis: "非洲各国通过不同方式获得独立：有的通过谈判，有的通过武装斗争。" },
    { type: "choice", difficulty: 3, text: "独立后的挑战包括：", options: ["A. 经济繁荣", "B. 政治稳定", "C. 经济和政治挑战", "D. 文化统一"], answer: "C", knowledgePoint: "独立后的挑战", analysis: "独立后的非洲国家面临着经济、政治和社会的挑战，如贫困、腐败和冲突。" }
  ]},

  { lesson: 43, title: "巴以冲突", questions: [
    { type: "choice", difficulty: 1, text: "以色列建国是在哪一年？", options: ["A. 1948年", "B. 1949年", "C. 1950年", "D. 1951年"], answer: "A", knowledgePoint: "以色列建国", analysis: "1948年，联合国通过决议，在巴勒斯坦地区建立以色列国。" },
    { type: "choice", difficulty: 2, text: "巴以冲突的根源包括：", options: ["A. 只有宗教", "B. 历史、宗教和领土", "C. 只有经济", "D. 只有文化"], answer: "B", knowledgePoint: "巴以冲突根源", analysis: "巴以冲突涉及历史、宗教、领土等多个复杂因素。" },
    { type: "choice", difficulty: 3, text: "中东战争共有几次？", options: ["A. 2次", "B. 3次", "C. 4次", "D. 5次"], answer: "C", knowledgePoint: "中东战争", analysis: "从1948年到1973年，爆发了四次中东战争。" }
  ]},

  { lesson: 44, title: "越南战争", questions: [
    { type: "choice", difficulty: 1, text: "越南战争持续了多长时间？", options: ["A. 10年", "B. 20年", "C. 30年", "D. 40年"], answer: "B", knowledgePoint: "越南战争", analysis: "越南战争从1955年到1975年，持续了20年。" },
    { type: "choice", difficulty: 2, text: "美国介入越南战争的原因是：", options: ["A. 人道主义", "B. 遏制共产主义", "C. 经济利益", "D. 领土扩张"], answer: "B", knowledgePoint: "美国介入原因", analysis: "美国试图阻止共产主义在越南的扩张，这是冷战遏制政策的一部分。" },
    { type: "choice", difficulty: 3, text: "越南战争的结果是：", options: ["A. 美国胜利", "B. 北越胜利", "C. 和平共处", "D. 分裂状态"], answer: "B", knowledgePoint: "越南战争结果", analysis: "1975年，南越政权垮台，越南实现统一，美国最终失败。" }
  ]},

  { lesson: 45, title: "民权运动", questions: [
    { type: "choice", difficulty: 1, text: "马丁·路德·金是哪个运动的领袖？", options: ["A. 女权运动", "B. 民权运动", "C. 反战运动", "D. 环保运动"], answer: "B", knowledgePoint: "民权运动", analysis: "马丁·路德·金是美国民权运动的领袖，为黑人争取平等权利。" },
    { type: "choice", difficulty: 2, text: "《我有一个梦想》演讲发表于哪一年？", options: ["A. 1963年", "B. 1964年", "C. 1965年", "D. 1966年"], answer: "A", knowledgePoint: "我有一个梦想", analysis: "1963年，马丁·路德·金在华盛顿发表了著名的《我有一个梦想》演讲。" },
    { type: "choice", difficulty: 3, text: "民权法案通过于哪一年？", options: ["A. 1963年", "B. 1964年", "C. 1965年", "D. 1966年"], answer: "B", knowledgePoint: "民权法案", analysis: "1964年，美国通过了重要的民权法案，禁止种族歧视。" }
  ]},

  // ── 第10章 历史方法论 ──────────────────────────────────────

  { lesson: 46, title: "史料分析", questions: [
    { type: "choice", difficulty: 1, text: "一手资料是指：", options: ["A. 后人写的历史书", "B. 原始的历史材料", "C. 历史老师的讲义", "D. 历史纪录片"], answer: "B", knowledgePoint: "一手资料", analysis: "一手资料是指直接来自历史事件的原始材料，如日记、信件、官方文件等。" },
    { type: "choice", difficulty: 2, text: "二手资料是指：", options: ["A. 原始文件", "B. 后人的研究和解释", "C. 考古发现", "D. 口述历史"], answer: "B", knowledgePoint: "二手资料", analysis: "二手资料是后人对历史的研究和解释，如历史书籍、学术论文等。" },
    { type: "choice", difficulty: 3, text: "判断史料可靠性的方法包括：", options: ["A. 只看作者", "B. 考察来源、作者、目的", "C. 凭感觉判断", "D. 只看内容"], answer: "B", knowledgePoint: "史料可靠性", analysis: "判断史料的可靠性需要考虑来源、作者、目的等因素，进行综合分析。" }
  ]},

  { lesson: 47, title: "偏见与视角", questions: [
    { type: "choice", difficulty: 1, text: "历史通常是由谁书写的？", options: ["A. 普通人", "B. 胜利者和统治阶级", "C. 历史学家", "D. 考古学家"], answer: "B", knowledgePoint: "历史的书写者", analysis: "历史通常是由胜利者、统治阶级书写的，这导致历史叙述可能带有片面性。" },
    { type: "choice", difficulty: 2, text: "历史叙述中的偏见来源包括：", options: ["A. 只有政治观点", "B. 立场、时代背景、政治观点", "C. 只有个人喜好", "D. 没有偏见"], answer: "B", knowledgePoint: "偏见来源", analysis: "偏见可能来自作者的立场、时代背景、政治观点等多种因素。" },
    { type: "choice", difficulty: 3, text: "理解历史需要：", options: ["A. 单一视角", "B. 多元视角", "C. 官方视角", "D. 权威视角"], answer: "B", knowledgePoint: "多元视角", analysis: "理解历史需要从多个视角出发，倾听不同声音，才能更全面地理解历史事件。" }
  ]},

  { lesson: 48, title: "历史解释", questions: [
    { type: "choice", difficulty: 1, text: "同一历史事件可以有：", options: ["A. 唯一解释", "B. 多种解释", "C. 没有解释", "D. 官方解释"], answer: "B", knowledgePoint: "历史解释的多元性", analysis: "同一历史事件可以有多种解释，不同的历史学家可能会有不同的观点。" },
    { type: "choice", difficulty: 2, text: "历史解释多元性的原因是：", options: ["A. 资料不足", "B. 不同的视角和方法", "C. 故意歪曲", "D. 时间流逝"], answer: "B", knowledgePoint: "多元性的原因", analysis: "历史解释的多元性源于不同的视角、方法和理论框架。" },
    { type: "choice", difficulty: 3, text: "因果关系的特点是：", options: ["A. 单一原因", "B. 复杂多因", "C. 没有原因", "D. 随机发生"], answer: "B", knowledgePoint: "因果关系", analysis: "历史事件的原因往往是复杂的，有直接原因、根本原因、偶然因素等。" }
  ]},

  { lesson: 49, title: "口述历史", questions: [
    { type: "choice", difficulty: 1, text: "口述历史的价值是：", options: ["A. 没有价值", "B. 提供个人体验", "C. 不如书面资料", "D. 不可信"], answer: "B", knowledgePoint: "口述历史的价值", analysis: "口述历史可以提供书面资料没有的细节和个人体验，具有独特的价值。" },
    { type: "choice", difficulty: 2, text: "口述历史的局限是：", options: ["A. 记忆可靠", "B. 记忆可能不准确", "C. 内容太长", "D. 难以记录"], answer: "B", knowledgePoint: "口述历史的局限", analysis: "记忆是不可靠的，会受到时间、情感等因素的影响，这是口述历史的主要局限。" },
    { type: "choice", difficulty: 3, text: "使用口述资料的正确方法是：", options: ["A. 单独使用", "B. 结合其他资料验证", "C. 完全相信", "D. 完全否定"], answer: "B", knowledgePoint: "口述资料的使用", analysis: "使用口述资料需要结合其他资料进行验证，不能单独作为证据。" }
  ]},

  { lesson: 50, title: "GCSE综合复习", questions: [
    { type: "choice", difficulty: 1, text: "GCSE历史考试的范围包括：", options: ["A. 只有古代史", "B. 从中世纪到当代", "C. 只有近代史", "D. 只有二战"], answer: "B", knowledgePoint: "GCSE考试范围", analysis: "GCSE历史考试覆盖从中世纪到当代的历史内容。" },
    { type: "choice", difficulty: 2, text: "论述题的答题技巧包括：", options: ["A. 论点明确、论据充分", "B. 只写论点", "C. 只写论据", "D. 随意发挥"], answer: "A", knowledgePoint: "论述题技巧", analysis: "论述题答题应论点明确、论据充分、逻辑清晰。" },
    { type: "choice", difficulty: 3, text: "复习策略包括：", options: ["A. 死记硬背", "B. 理解与应用", "C. 只看课本", "D. 不做练习"], answer: "B", knowledgePoint: "复习策略", analysis: "有效的复习策略是理解知识点并能灵活应用，而不是死记硬背。" }
  ]},

  // ── 第11章 政治史方法 ──────────────────────────────────────

  { lesson: 51, title: "政治史深度研究", questions: [
    { type: "choice", difficulty: 1, text: "政治史研究的核心是：", options: ["A. 经济发展", "B. 权力与决策", "C. 文化变迁", "D. 社会结构"], answer: "B", knowledgePoint: "政治史核心", analysis: "政治史研究的核心是权力的运作、决策的制定以及政治制度的演变。" },
    { type: "choice", difficulty: 2, text: "政治人物研究的方法包括：", options: ["A. 只看传记", "B. 分析其政策与影响", "C. 忽略时代背景", "D. 主观评价"], answer: "B", knowledgePoint: "政治人物研究", analysis: "研究政治人物需要分析其政策、决策及其对历史进程的影响，结合时代背景进行客观评价。" },
    { type: "choice", difficulty: 3, text: "政治制度演变的特点是：", options: ["A. 一成不变", "B. 渐进式变革", "C. 突然断裂", "D. 完全偶然"], answer: "B", knowledgePoint: "政治制度演变", analysis: "政治制度的演变通常是渐进式的，受到多种因素的影响，既有连续性也有变革。" }
  ]},

  { lesson: 52, title: "外交史", questions: [
    { type: "choice", difficulty: 1, text: "外交史研究的对象是：", options: ["A. 国内政策", "B. 国家间关系", "C. 文化交流", "D. 经济发展"], answer: "B", knowledgePoint: "外交史对象", analysis: "外交史研究国家之间的关系、条约签订、外交谈判等国际互动。" },
    { type: "choice", difficulty: 2, text: "条约的作用是：", options: ["A. 没有法律效力", "B. 规范国家间行为", "C. 单方面强制", "D. 临时性文件"], answer: "B", knowledgePoint: "条约的作用", analysis: "条约是国家间达成的协议，具有国际法效力，规范国家之间的行为和关系。" },
    { type: "choice", difficulty: 3, text: "外交档案的价值在于：", options: ["A. 记录表面现象", "B. 揭示决策过程", "C. 美化历史", "D. 简单罗列事件"], answer: "B", knowledgePoint: "外交档案价值", analysis: "外交档案能够揭示国家决策的内部过程、动机和考量，是研究外交史的重要一手资料。" }
  ]},

  { lesson: 53, title: "档案研究", questions: [
    { type: "choice", difficulty: 1, text: "档案的类型包括：", options: ["A. 只有官方文件", "B. 官方文件、私人信件等", "C. 只有报纸", "D. 只有口述资料"], answer: "B", knowledgePoint: "档案类型", analysis: "档案包括官方文件、私人信件、日记、会议记录等多种类型的原始资料。" },
    { type: "choice", difficulty: 2, text: "阅读档案的方法是：", options: ["A. 只看表面内容", "B. 分析来源、作者、背景", "C. 主观猜测", "D. 忽略细节"], answer: "B", knowledgePoint: "档案阅读方法", analysis: "阅读档案需要分析其来源、作者身份、写作背景和目的，理解其背后的意图。" },
    { type: "choice", difficulty: 3, text: "档案的局限性包括：", options: ["A. 完全可靠", "B. 可能不完整或有偏见", "C. 绝对客观", "D. 无所不包"], answer: "B", knowledgePoint: "档案局限性", analysis: "档案可能存在不完整、选择性留存、作者偏见等问题，需要结合其他资料进行交叉验证。" }
  ]},

  { lesson: 54, title: "历史争论解析", questions: [
    { type: "choice", difficulty: 1, text: "历史争论的原因是：", options: ["A. 资料完全一致", "B. 不同视角和解释", "C. 事实单一", "D. 观点统一"], answer: "B", knowledgePoint: "历史争论原因", analysis: "历史争论源于不同的研究视角、方法论和解释框架，同一事实可能有多种解读。" },
    { type: "choice", difficulty: 2, text: "史学争论的意义在于：", options: ["A. 混淆视听", "B. 推动知识进步", "C. 否定历史", "D. 制造矛盾"], answer: "B", knowledgePoint: "争论的意义", analysis: "史学争论能够促进对历史问题的深入探讨，推动历史知识的进步和更新。" },
    { type: "choice", difficulty: 3, text: "如何参与学术辩论：", options: ["A. 主观臆断", "B. 基于证据和逻辑", "C. 个人攻击", "D. 忽视他人观点"], answer: "B", knowledgePoint: "学术辩论方法", analysis: "参与学术辩论需要基于充分的证据和严密的逻辑，尊重不同观点，进行理性讨论。" }
  ]},

  { lesson: 55, title: "一战起因学术争议", questions: [
    { type: "choice", difficulty: 1, text: "费希尔论战的核心是：", options: ["A. 一战的责任问题", "B. 战争的持续时间", "C. 战术问题", "D. 战后赔偿"], answer: "A", knowledgePoint: "费希尔论战", analysis: "费希尔论战围绕第一次世界大战的责任问题展开，探讨德国是否有意发动战争。" },
    { type: "choice", difficulty: 2, text: "多元解释认为一战原因是：", options: ["A. 单一因素", "B. 多种因素共同作用", "C. 偶然事件", "D. 个人因素"], answer: "B", knowledgePoint: "多元解释", analysis: "多元解释认为一战的爆发是多种因素共同作用的结果，包括帝国主义竞争、民族主义、军备竞赛等。" },
    { type: "choice", difficulty: 3, text: "史学观点演变的原因是：", options: ["A. 资料不变", "B. 新资料和新视角", "C. 固定不变", "D. 主观偏好"], answer: "B", knowledgePoint: "史学观点演变", analysis: "史学观点的演变源于新资料的发现、研究方法的改进和新视角的引入。" }
  ]},

  // ── 第12章 专题史 ──────────────────────────────────────────

  { lesson: 56, title: "媒体与宣传", questions: [
    { type: "choice", difficulty: 1, text: "宣传的目的是：", options: ["A. 客观报道", "B. 影响舆论", "C. 提供娱乐", "D. 传播知识"], answer: "B", knowledgePoint: "宣传目的", analysis: "宣传的目的是通过特定的信息传播，影响公众舆论和态度，服务于特定的政治或意识形态目标。" },
    { type: "choice", difficulty: 2, text: "一战海报的特点是：", options: ["A. 客观中立", "B. 情感动员", "C. 科学分析", "D. 艺术欣赏"], answer: "B", knowledgePoint: "一战海报", analysis: "一战海报通过强烈的视觉符号和情感诉求，动员民众支持战争，激发爱国热情。" },
    { type: "choice", difficulty: 3, text: "纳粹宣传的手段包括：", options: ["A. 理性说服", "B. 重复、恐惧、认同", "C. 客观报道", "D. 多元观点"], answer: "B", knowledgePoint: "纳粹宣传手段", analysis: "纳粹宣传运用重复强化、制造恐惧、塑造敌人形象和培养群体认同等手段，实现对民众的思想控制。" }
  ]},

  { lesson: 57, title: "女性史", questions: [
    { type: "choice", difficulty: 1, text: "女性史研究的对象是：", options: ["A. 男性历史", "B. 女性的经历与贡献", "C. 政治史", "D. 经济史"], answer: "B", knowledgePoint: "女性史对象", analysis: "女性史研究女性在历史中的经历、角色、贡献以及性别关系的演变。" },
    { type: "choice", difficulty: 2, text: "参政权运动的目标是：", options: ["A. 限制女性权利", "B. 争取女性选举权", "C. 维持现状", "D. 男性主导"], answer: "B", knowledgePoint: "参政权运动", analysis: "参政权运动致力于争取女性的选举权和政治权利，是女性解放运动的重要组成部分。" },
    { type: "choice", difficulty: 3, text: "战时女性角色的变化是：", options: ["A. 没有变化", "B. 从家庭到工厂", "C. 完全回归家庭", "D. 政治权力下降"], answer: "B", knowledgePoint: "战时女性角色", analysis: "战争期间，女性大量进入工厂和公共领域，承担起传统上由男性从事的工作，推动了性别角色的重新定义。" }
  ]},

  { lesson: 58, title: "科技与战争", questions: [
    { type: "choice", difficulty: 1, text: "一战中使用的新式武器是：", options: ["A. 弓箭", "B. 机关枪和毒气", "C. 长矛", "D. 盾牌"], answer: "B", knowledgePoint: "一战新式武器", analysis: "一战中首次大规模使用机关枪、毒气、坦克等新式武器，改变了战争形态。" },
    { type: "choice", difficulty: 2, text: "科技对战争的影响是：", options: ["A. 减少伤亡", "B. 加剧破坏性", "C. 缩短战争", "D. 促进和平"], answer: "B", knowledgePoint: "科技与战争", analysis: "军事技术的发展加剧了战争的破坏性，使战争变得更加残酷和具有毁灭性。" },
    { type: "choice", difficulty: 3, text: "原子弹的影响是：", options: ["A. 促进常规战争", "B. 改变战争性质和国际格局", "C. 没有影响", "D. 减少核武器"], answer: "B", knowledgePoint: "原子弹的影响", analysis: "原子弹的发明改变了战争的性质，形成了核威慑格局，深刻影响了战后的国际秩序。" }
  ]},

  { lesson: 59, title: "比较革命研究", questions: [
    { type: "choice", difficulty: 1, text: "比较历史研究的目的是：", options: ["A. 罗列事实", "B. 寻找异同和规律", "C. 单一描述", "D. 主观评价"], answer: "B", knowledgePoint: "比较研究目的", analysis: "比较历史研究通过对比不同案例，寻找共同点和差异，揭示历史发展的规律和机制。" },
    { type: "choice", difficulty: 2, text: "法国大革命的特点是：", options: ["A. 温和改革", "B. 激进变革", "C. 没有变化", "D. 保守主义"], answer: "B", knowledgePoint: "法国大革命", analysis: "法国大革命是一场激进的社会政治变革，推翻了封建制度，确立了资产阶级统治。" },
    { type: "choice", difficulty: 3, text: "革命的共同条件包括：", options: ["A. 完全稳定", "B. 危机、不满和组织", "C. 经济繁荣", "D. 没有冲突"], answer: "B", knowledgePoint: "革命条件", analysis: "革命通常发生在社会危机、民众不满和组织动员等条件具备的情况下。" }
  ]},

  { lesson: 60, title: "历史哲学", questions: [
    { type: "choice", difficulty: 1, text: "历史哲学研究的是：", options: ["A. 具体历史事件", "B. 历史的本质和意义", "C. 年代学", "D. 考古发现"], answer: "B", knowledgePoint: "历史哲学", analysis: "历史哲学探讨历史的本质、意义、规律以及历史知识的性质等根本性问题。" },
    { type: "choice", difficulty: 2, text: "历史决定论认为：", options: ["A. 历史是偶然的", "B. 历史有规律可循", "C. 历史无法认识", "D. 历史是主观的"], answer: "B", knowledgePoint: "历史决定论", analysis: "历史决定论认为历史发展遵循一定的规律，受到经济、社会等因素的决定。" },
    { type: "choice", difficulty: 3, text: "历史可知性的争论涉及：", options: ["A. 历史完全可知", "B. 历史的客观性与主观性", "C. 历史不可知", "D. 历史是虚构的"], answer: "B", knowledgePoint: "历史可知性", analysis: "历史可知性的争论涉及历史知识的客观性、主观性以及我们能否真正认识过去的问题。" }
  ]},

  // ── 第13章 史学理论 ──────────────────────────────────────

  { lesson: 61, title: "马克思主义史学", questions: [
    { type: "choice", difficulty: 1, text: "马克思主义史学的核心是：", options: ["A. 英雄史观", "B. 阶级斗争", "C. 文化决定", "D. 个人意志"], answer: "B", knowledgePoint: "马克思主义史学核心", analysis: "马克思主义史学以阶级斗争为核心，认为历史是阶级斗争的历史。" },
    { type: "choice", difficulty: 2, text: "经济基础与上层建筑的关系是：", options: ["A. 上层建筑决定经济基础", "B. 经济基础决定上层建筑", "C. 两者无关", "D. 相互独立"], answer: "B", knowledgePoint: "经济基础与上层建筑", analysis: "马克思主义认为经济基础决定上层建筑，上层建筑反作用于经济基础。" },
    { type: "choice", difficulty: 3, text: "历史唯物主义的观点是：", options: ["A. 意识决定存在", "B. 社会存在决定社会意识", "C. 两者等同", "D. 意识独立"], answer: "B", knowledgePoint: "历史唯物主义", analysis: "历史唯物主义认为社会存在决定社会意识，物质生产方式的变化推动历史发展。" }
  ]},

  { lesson: 62, title: "后现代史学", questions: [
    { type: "choice", difficulty: 1, text: "后现代史学质疑的是：", options: ["A. 历史的客观性", "B. 历史研究", "C. 史料价值", "D. 时间顺序"], answer: "A", knowledgePoint: "后现代史学", analysis: "后现代史学质疑历史的客观性和确定性，强调历史叙述的建构性和主观性。" },
    { type: "choice", difficulty: 2, text: "叙事的解构意味着：", options: ["A. 接受单一叙事", "B. 揭示叙事的建构性", "C. 否定所有历史", "D. 坚持传统观点"], answer: "B", knowledgePoint: "叙事解构", analysis: "叙事的解构意味着揭示历史叙述是如何被建构的，分析其中的权力关系和意识形态。" },
    { type: "choice", difficulty: 3, text: "后现代视角的意义是：", options: ["A. 否定历史", "B. 促进多元理解", "C. 混淆是非", "D. 简化历史"], answer: "B", knowledgePoint: "后现代意义", analysis: "后现代视角促使我们反思历史叙述的多元性，倾听被边缘化的声音，促进对历史更全面的理解。" }
  ]},

  { lesson: 63, title: "性别史与后殖民史学", questions: [
    { type: "choice", difficulty: 1, text: "性别史关注的是：", options: ["A. 只关注女性", "B. 性别关系和身份", "C. 政治史", "D. 经济史"], answer: "B", knowledgePoint: "性别史", analysis: "性别史关注性别关系、性别身份以及性别在历史中的建构和表现。" },
    { type: "choice", difficulty: 2, text: "后殖民理论批判的是：", options: ["A. 殖民统治", "B. 殖民主义的叙事", "C. 所有历史", "D. 独立运动"], answer: "B", knowledgePoint: "后殖民理论", analysis: "后殖民理论批判殖民主义的历史叙事，揭示其权力结构和文化霸权。" },
    { type: "choice", difficulty: 3, text: "边缘群体历史的意义是：", options: ["A. 无关紧要", "B. 挑战主流叙事", "C. 重复主流", "D. 缩小历史范围"], answer: "B", knowledgePoint: "边缘群体历史", analysis: "研究边缘群体的历史能够挑战主流叙事，使历史更加多元和包容。" }
  ]},

  { lesson: 64, title: "计量史学", questions: [
    { type: "choice", difficulty: 1, text: "计量史学的方法是：", options: ["A. 定性描述", "B. 量化分析", "C. 主观判断", "D. 故事叙述"], answer: "B", knowledgePoint: "计量史学", analysis: "计量史学运用统计和量化方法研究历史，揭示历史现象的数量特征和规律。" },
    { type: "choice", difficulty: 2, text: "量化方法的优势是：", options: ["A. 主观随意", "B. 精确和可验证", "C. 忽视细节", "D. 无法比较"], answer: "B", knowledgePoint: "量化优势", analysis: "量化方法能够提供精确的数据支持，使研究结果更具可验证性和可比性。" },
    { type: "choice", difficulty: 3, text: "计量方法的局限是：", options: ["A. 无所不能", "B. 无法涵盖质性内容", "C. 绝对客观", "D. 取代定性"], answer: "B", knowledgePoint: "计量局限", analysis: "计量方法无法涵盖无法量化的历史内容，需要与定性方法相结合。" }
  ]},

  { lesson: 65, title: "公共史学", questions: [
    { type: "choice", difficulty: 1, text: "公共史学的领域包括：", options: ["A. 只在学术界", "B. 博物馆、纪念馆等", "C. 私人研究", "D. 课堂教学"], answer: "B", knowledgePoint: "公共史学领域", analysis: "公共史学涵盖博物馆、纪念馆、历史遗址、纪录片等向公众传播历史的领域。" },
    { type: "choice", difficulty: 2, text: "历史记忆的作用是：", options: ["A. 遗忘过去", "B. 塑造集体认同", "C. 制造分裂", "D. 无关紧要"], answer: "B", knowledgePoint: "历史记忆", analysis: "历史记忆在塑造集体认同、传承文化和反思历史方面具有重要作用。" },
    { type: "choice", difficulty: 3, text: "纪念与遗忘的关系是：", options: ["A. 只有纪念", "B. 选择性记忆", "C. 完全遗忘", "D. 无关"], answer: "B", knowledgePoint: "纪念与遗忘", analysis: "纪念与遗忘是相互关联的，历史记忆往往是选择性的，哪些被纪念、哪些被遗忘反映了特定的价值观和权力关系。" }
  ]},

  // ── 第14章 论文写作 ──────────────────────────────────────

  { lesson: 66, title: "论点构建", questions: [
    { type: "choice", difficulty: 1, text: "论文的核心是：", options: ["A. 罗列事实", "B. 论点", "C. 字数", "D. 格式"], answer: "B", knowledgePoint: "论文核心", analysis: "论文的核心是论点，即作者提出的主张和观点。" },
    { type: "choice", difficulty: 2, text: "论证的结构包括：", options: ["A. 只有结论", "B. 论点、论据、反驳", "C. 随意发挥", "D. 单一证据"], answer: "B", knowledgePoint: "论证结构", analysis: "论证需要包括明确的论点、支持论点的论据以及对可能反驳的回应。" },
    { type: "choice", difficulty: 3, text: "如何构建有力的论点：", options: ["A. 主观臆断", "B. 明确、具体、可论证", "C. 模糊不清", "D. 无法验证"], answer: "B", knowledgePoint: "论点构建", analysis: "有力的论点需要明确、具体，能够被证据支持和验证。" }
  ]},

  { lesson: 67, title: "证据筛选", questions: [
    { type: "choice", difficulty: 1, text: "证据的类型包括：", options: ["A. 只有文字", "B. 文献、实物、口述等", "C. 只有实物", "D. 没有证据"], answer: "B", knowledgePoint: "证据类型", analysis: "证据包括文献资料、实物证据、口述历史等多种类型。" },
    { type: "choice", difficulty: 2, text: "筛选证据的标准是：", options: ["A. 主观偏好", "B. 相关性和可靠性", "C. 数量多", "D. 年代久远"], answer: "B", knowledgePoint: "筛选标准", analysis: "筛选证据需要考虑其与论点的相关性和来源的可靠性。" },
    { type: "choice", difficulty: 3, text: "引用规范的重要性是：", options: ["A. 形式而已", "B. 尊重知识产权和便于查证", "C. 可有可无", "D. 限制创作"], answer: "B", knowledgePoint: "引用规范", analysis: "引用规范不仅尊重他人的知识产权，也使读者能够查证来源，增强研究的可信度。" }
  ]},

  { lesson: 68, title: "历史写作风格", questions: [
    { type: "choice", difficulty: 1, text: "历史写作的特点是：", options: ["A. 虚构想象", "B. 客观严谨", "C. 主观抒情", "D. 夸张描述"], answer: "B", knowledgePoint: "历史写作特点", analysis: "历史写作需要客观、严谨，基于证据进行叙述和分析。" },
    { type: "choice", difficulty: 2, text: "学术语言的要求是：", options: ["A. 口语化", "B. 准确、清晰、简洁", "C. 晦涩难懂", "D. 随意表达"], answer: "B", knowledgePoint: "学术语言", analysis: "学术语言需要准确、清晰、简洁，避免歧义。" },
    { type: "choice", difficulty: 3, text: "如何提高写作质量：", options: ["A. 不修改", "B. 反复修改和校对", "C. 一次性完成", "D. 抄袭"], answer: "B", knowledgePoint: "写作质量", analysis: "提高写作质量需要反复修改、校对，确保内容准确、表达清晰。" }
  ]},

  { lesson: 69, title: "反驳与综述", questions: [
    { type: "choice", difficulty: 1, text: "反驳的目的是：", options: ["A. 否定一切", "B. 深化论证", "C. 人身攻击", "D. 避免讨论"], answer: "B", knowledgePoint: "反驳目的", analysis: "反驳的目的不是否定一切，而是通过回应反对意见来深化和完善自己的论证。" },
    { type: "choice", difficulty: 2, text: "史学综述的作用是：", options: ["A. 简单罗列", "B. 梳理研究现状", "C. 重复他人", "D. 没有价值"], answer: "B", knowledgePoint: "史学综述", analysis: "史学综述梳理相关领域的研究现状，指出已有研究的贡献和不足，为新研究提供背景。" },
    { type: "choice", difficulty: 3, text: "学术对话的意义是：", options: ["A. 孤立研究", "B. 推动学术发展", "C. 自我封闭", "D. 重复研究"], answer: "B", knowledgePoint: "学术对话", analysis: "学术对话促进思想交流和知识积累，是推动学术发展的重要动力。" }
  ]},

  { lesson: 70, title: "A-Level综合模拟", questions: [
    { type: "choice", difficulty: 1, text: "A-Level历史考试的特点是：", options: ["A. 简单记忆", "B. 深度分析", "C. 单一题型", "D. 短时间"], answer: "B", knowledgePoint: "A-Level考试特点", analysis: "A-Level历史考试注重对历史问题的深度分析和批判性思考。" },
    { type: "choice", difficulty: 2, text: "答题策略包括：", options: ["A. 随意回答", "B. 结构清晰、论证充分", "C. 只写要点", "D. 冗长啰嗦"], answer: "B", knowledgePoint: "答题策略", analysis: "有效的答题策略包括清晰的结构、充分的论证和准确的引用。" },
    { type: "choice", difficulty: 3, text: "时间管理的重要性是：", options: ["A. 不重要", "B. 合理分配时间确保完成", "C. 快速完成", "D. 拖延"], answer: "B", knowledgePoint: "时间管理", analysis: "合理的时间管理能够确保在考试中完成所有题目，避免因时间不足而影响成绩。" }
  ]}

];

window.history_questionBank = questionBank;
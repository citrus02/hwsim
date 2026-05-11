/**
 * history-questionBank.js
 * 麻瓜学术 · 历史分科 · 题库
 * 教授：赫伯特·宾斯二世
 */

export const questionBank = [
  // ════════════════════════════════════════
  // 第一章：工业革命的兴起
  // ════════════════════════════════════════
  
  { lesson: 1, title: "工业革命的开端", questions: [
    { type: "choice", difficulty: "basic", text: "工业革命最早发生在：", options: ["A. 法国", "B. 德国", "C. 英国", "D. 美国"], answer: "C", knowledgePoint: "工业革命起源地", analysis: "18世纪下半叶工业革命首先发生在英国，得益于英国的煤炭资源、海外贸易、劳动力和技术积累等条件。" },
    { type: "choice", difficulty: "medium", text: "瓦特改良蒸汽机的最重要意义是：", options: ["A. 发明了热量", "B. 使蒸汽机能广泛应用于各种机器", "C. 节省了煤炭", "D. 取代了人力"], answer: "B", knowledgePoint: "蒸汽机的意义", analysis: "瓦特将蒸汽机改良为双向运动并增加离心节速器，使蒸汽机能驱动各种机器，成为工业革命的动力核心。" },
    { type: "choice", difficulty: "hard", text: "工厂制度取代手工作坊，最根本的原因是：", options: ["A. 工厂更漂亮", "B. 机器生产效率更高、成本更低", "C. 国王强制推行", "D. 工人喜欢工厂"], answer: "B", knowledgePoint: "工厂制度兴起原因", analysis: "工厂制度的扩展是市场竞争的结果——机器大生产效率高、成本低，能在竞争中胜出手工作坊，因此市场自然推动了工厂制度的扩张。" }
  ]},
  { lesson: 2, title: "工业革命的社会影响", questions: [
    { type: "choice", difficulty: "basic", text: "工业革命时期，大量人口从农村涌向城市，这一现象被称为：", options: ["A. 城市化", "B. 工业化", "C. 商业化", "D. 现代化"], answer: "A", knowledgePoint: "城市化", analysis: "工业革命推动了城市化进程，大量农村人口进入城市寻找工作机会，城市规模迅速扩大。" },
    { type: "choice", difficulty: "medium", text: "工业革命时期出现的新社会阶层是：", options: ["A. 贵族和农民", "B. 工业资产阶级和工人阶级", "C. 地主和商人", "D. 教士和骑士"], answer: "B", knowledgePoint: "社会阶层变化", analysis: "工业革命催生了工业资产阶级（工厂主）和工人阶级（无产阶级），这两个新阶层成为现代社会的重要组成部分。" },
    { type: "choice", difficulty: "hard", text: "工业革命早期，工人工作条件恶劣的根本原因是：", options: ["A. 工人懒惰", "B. 资本家追求利润最大化", "C. 技术水平低下", "D. 政府不管"], answer: "B", knowledgePoint: "工人处境", analysis: "资本家为了追求最大利润，尽可能降低成本，导致工人工作时间长、工资低、工作环境恶劣，这是资本主义早期的典型特征。" }
  ]},
  { lesson: 3, title: "技术革命与科学进步", questions: [
    { type: "choice", difficulty: "basic", text: "1825年，第一条蒸汽铁路在哪个国家开通？", options: ["A. 法国", "B. 美国", "C. 英国", "D. 德国"], answer: "C", knowledgePoint: "铁路发展", analysis: "1825年，英国建成了世界上第一条蒸汽铁路，标志着铁路时代的开始。" },
    { type: "choice", difficulty: "medium", text: "电磁感应现象的发现者是：", options: ["A. 牛顿", "B. 法拉第", "C. 爱因斯坦", "D. 瓦特"], answer: "B", knowledgePoint: "电磁学发展", analysis: "1831年法拉第发现电磁感应现象，为发电机和电动机的发明奠定了基础，推动了第二次工业革命。" },
    { type: "choice", difficulty: "hard", text: "电报的发明对社会的最大影响是：", options: ["A. 让人们能更快地交流", "B. 增加了就业机会", "C. 促进了铁路建设", "D. 改变了战争方式"], answer: "A", knowledgePoint: "通信革命", analysis: "电报实现了远距离即时通信，改变了人们传递信息的方式，缩短了时空距离，对商业、政治和军事都产生了深远影响。" }
  ]},

  // ════════════════════════════════════════
  // 第二章：民族国家与帝国主义
  // ════════════════════════════════════════
  
  { lesson: 4, title: "民族主义的兴起", questions: [
    { type: "choice", difficulty: "basic", text: "德意志统一的领导人是：", options: ["A. 拿破仑", "B. 俾斯麦", "C. 希特勒", "D. 威廉二世"], answer: "B", knowledgePoint: "德意志统一", analysis: "俾斯麦通过「铁血政策」完成了德意志的统一，1871年德意志帝国成立。" },
    { type: "choice", difficulty: "medium", text: "1848年欧洲革命的主要目标是：", options: ["A. 推翻君主制", "B. 实现民族统一和民主权利", "C. 建立社会主义", "D. 恢复封建制度"], answer: "B", knowledgePoint: "1848年革命", analysis: "1848年欧洲革命浪潮中，人民要求民族独立、统一和民主权利，虽然大多数革命失败，但推动了社会变革。" },
    { type: "choice", difficulty: "hard", text: "民族主义与帝国主义的关系是：", options: ["A. 完全对立", "B. 民族主义是帝国主义的基础之一", "C. 没有关系", "D. 帝国主义反对民族主义"], answer: "B", knowledgePoint: "民族主义与帝国主义", analysis: "民族主义激发了民族自豪感，促使统一后的国家向外扩张，寻求殖民地和霸权，成为帝国主义的重要驱动力。" }
  ]},
  { lesson: 5, title: "帝国主义时代", questions: [
    { type: "choice", difficulty: "basic", text: "19世纪末被称为「非洲的瓜分」时期，主要是哪个国家主导的？", options: ["A. 美国", "B. 日本", "C. 欧洲列强", "D. 中国"], answer: "C", knowledgePoint: "非洲瓜分", analysis: "1884-1885年柏林会议后，欧洲列强（英国、法国、德国等）划分了在非洲的势力范围，掀起了瓜分非洲的狂潮。" },
    { type: "choice", difficulty: "medium", text: "殖民扩张的根本原因是：", options: ["A. 传播宗教", "B. 寻找原料产地和商品市场", "C. 帮助落后国家", "D. 炫耀武力"], answer: "B", knowledgePoint: "殖民动因", analysis: "资本主义发展需要大量原料和广阔市场，这是殖民扩张的根本经济动因，军事和文化因素是次要的。" },
    { type: "choice", difficulty: "hard", text: "殖民主义对被殖民地区的影响是：", options: ["A. 只有坏处", "B. 只有好处", "C. 既有破坏性也有建设性", "D. 没有影响"], answer: "C", knowledgePoint: "殖民主义影响", analysis: "殖民主义破坏了当地传统经济和文化，但也带来了现代教育、医疗和基础设施，对被殖民地区的影响是复杂的，需要多角度评价。" }
  ]},
  { lesson: 6, title: "全球联系的加强", questions: [
    { type: "choice", difficulty: "basic", text: "苏伊士运河开通于哪一年？", options: ["A. 1859年", "B. 1869年", "C. 1879年", "D. 1889年"], answer: "B", knowledgePoint: "苏伊士运河", analysis: "苏伊士运河1869年开通，连接地中海和红海，大大缩短了欧洲到亚洲的航程。" },
    { type: "choice", difficulty: "medium", text: "资本主义世界市场形成的主要标志是：", options: ["A. 新航路开辟", "B. 工业革命完成", "C. 世界被瓜分完毕", "D. 国际贸易全球化"], answer: "D", knowledgePoint: "世界市场形成", analysis: "19世纪末20世纪初，国际贸易和资本输出遍及全球，世界各国经济紧密联系，标志着资本主义世界市场最终形成。" },
    { type: "choice", difficulty: "hard", text: "国际巫师联合会成立于哪一年？", options: ["A. 1850年", "B. 1870年", "C. 1890年", "D. 1910年"], answer: "C", knowledgePoint: "魔法界国际合作", analysis: "1890年国际巫师联合会召开第一次大会，标志着魔法界国际合作的开始，以应对麻瓜世界全球化带来的挑战。" }
  ]},

  // ════════════════════════════════════════
  // 第三章：第一次世界大战
  // ════════════════════════════════════════
  
  { lesson: 7, title: "战争的爆发", questions: [
    { type: "choice", difficulty: "basic", text: "第一次世界大战的导火索是：", options: ["A. 德国入侵波兰", "B. 萨拉热窝事件", "C. 奥匈帝国宣战", "D. 普法战争"], answer: "B", knowledgePoint: "一战导火索", analysis: "1914年6月，奥匈帝国皇位继承人斐迪南大公在萨拉热窝被刺杀，引发了第一次世界大战。" },
    { type: "choice", difficulty: "medium", text: "第一次世界大战是历史上第一次大规模使用：", options: ["A. 骑兵", "B. 化学武器", "C. 弓箭", "D. 大炮"], answer: "B", knowledgePoint: "一战新式武器", analysis: "一战中氯气、芥子气等化学武器首次大规模使用，造成了巨大的人员伤亡和心理创伤。" },
    { type: "choice", difficulty: "hard", text: "一战中的堑壕战（阵地战）说明：", options: ["A. 士兵都懒得进攻", "B. 防御技术进步超过了进攻技术", "C. 军队缺乏弹药", "D. 双方协议不进攻"], answer: "B", knowledgePoint: "堑壕战原因", analysis: "铁丝网、机关枪等防御性武器的发展使进攻方伤亡惨重，防御优势超过进攻优势，导致战线长期僵持，形成堑壕战。" }
  ]},
  { lesson: 8, title: "战争的进程", questions: [
    { type: "choice", difficulty: "basic", text: "一战的主战场在：", options: ["A. 非洲", "B. 亚洲", "C. 欧洲", "D. 美洲"], answer: "C", knowledgePoint: "一战主战场", analysis: "第一次世界大战的主战场在欧洲，主要分为西线、东线和南线战场，其中西线最为惨烈。" },
    { type: "choice", difficulty: "medium", text: "坦克首次投入使用是在哪个战役？", options: ["A. 马恩河战役", "B. 凡尔登战役", "C. 索姆河战役", "D. 日德兰海战"], answer: "C", knowledgePoint: "坦克的使用", analysis: "1916年索姆河战役中，英军首次使用坦克，这是装甲作战的开端。" },
    { type: "choice", difficulty: "hard", text: "一战中，德国实施的「无限制潜艇战」导致哪个国家参战？", options: ["A. 法国", "B. 英国", "C. 美国", "D. 俄国"], answer: "C", knowledgePoint: "美国参战原因", analysis: "德国的无限制潜艇战威胁到美国的航运利益，加上 Zimmerman Telegram事件，促使美国于1917年参战。" }
  ]},
  { lesson: 9, title: "战争的结束与影响", questions: [
    { type: "choice", difficulty: "basic", text: "第一次世界大战结束于哪一年？", options: ["A. 1916年", "B. 1917年", "C. 1918年", "D. 1919年"], answer: "C", knowledgePoint: "一战结束时间", analysis: "1918年11月11日，德国签署停战协定，第一次世界大战正式结束。" },
    { type: "choice", difficulty: "medium", text: "凡尔赛条约对德国的制裁不包括：", options: ["A. 割让领土", "B. 支付巨额赔款", "C. 允许拥有强大军队", "D. 承认奥地利独立"], answer: "C", knowledgePoint: "凡尔赛条约", analysis: "凡尔赛条约限制德国军队规模不得超过10万人，禁止拥有重型武器和空军，因此C选项是错误的。" },
    { type: "choice", difficulty: "hard", text: "一战后，奥匈帝国解体为多个国家，不包括：", options: ["A. 奥地利", "B. 匈牙利", "C. 捷克斯洛伐克", "D. 波兰"], answer: "D", knowledgePoint: "奥匈帝国解体", analysis: "波兰是在一战后复国的，并非从奥匈帝国分裂出来，而奥地利、匈牙利、捷克斯洛伐克都是奥匈帝国解体后的新国家。" }
  ]},

  // ════════════════════════════════════════
  // 第五章：战间期与极权主义
  // ════════════════════════════════════════
  
  { lesson: 13, title: "战后的和平与动荡", questions: [
    { type: "choice", difficulty: "basic", text: "1929年经济大危机首先爆发于哪个国家？", options: ["A. 英国", "B. 德国", "C. 美国", "D. 法国"], answer: "C", knowledgePoint: "大萧条起源", analysis: "1929年10月24日，美国华尔街股市崩盘，引发了全球性的经济大危机。" },
    { type: "choice", difficulty: "medium", text: "魏玛共和国是哪个国家的 Weimar Republic？", options: ["A. 法国", "B. 德国", "C. 意大利", "D. 奥地利"], answer: "B", knowledgePoint: "魏玛共和国", analysis: "魏玛共和国是1919-1933年德国的共和制政权，因宪法在魏玛制定而得名。" },
    { type: "choice", difficulty: "hard", text: "大萧条对魔法界的影响是：", options: ["A. 没有影响", "B. 魔法部限制与麻瓜世界的经济往来", "C. 巫师纷纷破产", "D. 魔法货币贬值"], answer: "B", knowledgePoint: "魔法界应对危机", analysis: "大萧条期间，魔法部限制了与麻瓜世界的经济往来，加强了对巫师银行的监管，以保护巫师世界的经济稳定。" }
  ]},
  { lesson: 14, title: "法西斯主义的兴起", questions: [
    { type: "choice", difficulty: "basic", text: "意大利法西斯党的领导人是：", options: ["A. 希特勒", "B. 墨索里尼", "C. 东条英机", "D. 佛朗哥"], answer: "B", knowledgePoint: "意大利法西斯", analysis: "贝尼托·墨索里尼是意大利法西斯党的创始人，1922年上台执政。" },
    { type: "choice", difficulty: "medium", text: "纳粹党上台的时间是：", options: ["A. 1929年", "B. 1933年", "C. 1936年", "D. 1939年"], answer: "B", knowledgePoint: "纳粹掌权", analysis: "1933年，希特勒被任命为德国总理，纳粹党开始在德国掌权。" },
    { type: "choice", difficulty: "hard", text: "绥靖政策的本质是：", options: ["A. 坚决抵抗侵略", "B. 通过妥协避免战争", "C. 支持法西斯扩张", "D. 中立观望"], answer: "B", knowledgePoint: "绥靖政策", analysis: "绥靖政策是指英国、法国等国通过牺牲小国利益、对法西斯妥协退让来避免战争的政策，最终助长了侵略者的野心。" }
  ]},
  { lesson: 15, title: "战争阴云的聚集", questions: [
    { type: "choice", difficulty: "basic", text: "德国入侵波兰的时间是：", options: ["A. 1938年", "B. 1939年", "C. 1940年", "D. 1941年"], answer: "B", knowledgePoint: "二战爆发", analysis: "1939年9月1日，德国入侵波兰，标志着第二次世界大战正式爆发。" },
    { type: "choice", difficulty: "medium", text: "轴心国不包括：", options: ["A. 德国", "B. 意大利", "C. 日本", "D. 苏联"], answer: "D", knowledgePoint: "轴心国", analysis: "轴心国是二战中德国、意大利、日本组成的军事同盟，苏联属于反法西斯同盟。" },
    { type: "choice", difficulty: "hard", text: "苏德互不侵犯条约签订于哪一年？", options: ["A. 1938年", "B. 1939年", "C. 1940年", "D. 1941年"], answer: "B", knowledgePoint: "苏德条约", analysis: "1939年8月，苏联与德国签订互不侵犯条约，双方划分了在东欧的势力范围，该条约在1941年德国入侵苏联时失效。" }
  ]},

  // ════════════════════════════════════════
  // 第六章：第二次世界大战
  // ════════════════════════════════════════
  
  { lesson: 16, title: "战争的全面爆发", questions: [
    { type: "choice", difficulty: "basic", text: "日本偷袭珍珠港的时间是：", options: ["A. 1940年12月", "B. 1941年12月", "C. 1942年12月", "D. 1943年12月"], answer: "B", knowledgePoint: "珍珠港事件", analysis: "1941年12月7日，日本偷袭美国珍珠港海军基地，美国次日对日宣战，太平洋战争爆发。" },
    { type: "choice", difficulty: "medium", text: "二战中，德国的「闪电战」战术主要应用于：", options: ["A. 海战", "B. 空战", "C. 陆战", "D. 游击战"], answer: "C", knowledgePoint: "闪电战", analysis: "闪电战是德国在二战初期使用的快速进攻战术，集中装甲部队和空军迅速突破敌方防线。" },
    { type: "choice", difficulty: "hard", text: "二战参战国超过多少个？", options: ["A. 40个", "B. 50个", "C. 60个", "D. 70个"], answer: "C", knowledgePoint: "二战规模", analysis: "第二次世界大战是人类历史上规模最大的战争，参战国超过60个，涉及人口超过20亿。" }
  ]},
  { lesson: 17, title: "战争的转折", questions: [
    { type: "choice", difficulty: "basic", text: "斯大林格勒战役发生在哪一年？", options: ["A. 1941年", "B. 1942年", "C. 1943年", "D. 1944年"], answer: "B", knowledgePoint: "斯大林格勒战役", analysis: "1942年7月至1943年2月的斯大林格勒战役是二战的转折点，苏军击败德军，开始反攻。" },
    { type: "choice", difficulty: "medium", text: "中途岛海战中，美国海军击沉了日本几艘航空母舰？", options: ["A. 2艘", "B. 3艘", "C. 4艘", "D. 5艘"], answer: "C", knowledgePoint: "中途岛海战", analysis: "1942年中途岛海战中，美国海军击沉日本4艘航空母舰，取得太平洋战场的决定性胜利。" },
    { type: "choice", difficulty: "hard", text: "诺曼底登陆的代号是：", options: ["A. 霸王行动", "B. 市场花园行动", "C. 火炬行动", "D. 巴巴罗萨行动"], answer: "A", knowledgePoint: "诺曼底登陆", analysis: "1944年6月6日的诺曼底登陆行动代号为「霸王行动」，是历史上最大规模的两栖登陆作战。" }
  ]},
  { lesson: 18, title: "战争的结束", questions: [
    { type: "choice", difficulty: "basic", text: "第二次世界大战结束的年份是：", options: ["A. 1943年", "B. 1944年", "C. 1945年", "D. 1946年"], answer: "C", knowledgePoint: "二战结束时间", analysis: "1945年5月德国投降，1945年8月日本投降，第二次世界大战结束。" },
    { type: "choice", difficulty: "medium", text: "大屠杀（Holocaust）指二战中纳粹德国对哪个群体的系统性种族灭绝？", options: ["A. 波兰人", "B. 犹太人", "C. 苏联人", "D. 法国人"], answer: "B", knowledgePoint: "大屠杀", analysis: "大屠杀（Holocaust）是纳粹德国对犹太人（及其他群体）进行的系统性种族灭绝，约600万犹太人遇难。" },
    { type: "choice", difficulty: "hard", text: "二战后建立的联合国，其最主要目的是：", options: ["A. 统一世界政府", "B. 维护国际和平与安全", "C. 管理殖民地", "D. 推广英语"], answer: "B", knowledgePoint: "联合国成立目的", analysis: "联合国1945年成立，主要目的是维护国际和平与安全，解决国际争端，促进国际合作，避免战争的再次爆发。" }
  ]},

  // ════════════════════════════════════════
  // 第八章：冷战与两极格局
  // ════════════════════════════════════════
  
  { lesson: 22, title: "冷战的形成", questions: [
    { type: "choice", difficulty: "basic", text: "冷战开始的标志是：", options: ["A. 杜鲁门主义出台", "B. 马歇尔计划实施", "C. 北约成立", "D. 华约成立"], answer: "A", knowledgePoint: "冷战开始标志", analysis: "1947年杜鲁门主义出台，标志着冷战的正式开始，美国开始推行遏制苏联的政策。" },
    { type: "choice", difficulty: "medium", text: "冷战时期的两大军事集团是：", options: ["A. 同盟国与协约国", "B. 北约与华约", "C. 轴心国与反法西斯同盟", "D. 三国同盟与三国协约"], answer: "B", knowledgePoint: "冷战军事集团", analysis: "北约（北大西洋公约组织）和华约（华沙条约组织）是冷战时期对峙的两大军事集团。" },
    { type: "choice", difficulty: "hard", text: "冷战结束的标志是：", options: ["A. 柏林墙倒塌", "B. 苏联解体", "C. 华约解散", "D. 德国统一"], answer: "B", knowledgePoint: "冷战结束标志", analysis: "1991年苏联解体标志着冷战的正式结束，两极格局瓦解，世界进入多极化时代。" }
  ]},
  { lesson: 23, title: "冷战的对抗", questions: [
    { type: "choice", difficulty: "basic", text: "朝鲜战争爆发于哪一年？", options: ["A. 1949年", "B. 1950年", "C. 1951年", "D. 1952年"], answer: "B", knowledgePoint: "朝鲜战争", analysis: "1950年6月，朝鲜战争爆发，这是冷战中的第一次大规模热战。" },
    { type: "choice", difficulty: "medium", text: "古巴导弹危机发生在哪一年？", options: ["A. 1960年", "B. 1961年", "C. 1962年", "D. 1963年"], answer: "C", knowledgePoint: "古巴导弹危机", analysis: "1962年的古巴导弹危机是冷战中美苏最接近核战争的一次危机，最终通过外交途径解决。" },
    { type: "choice", difficulty: "hard", text: "太空竞赛中，苏联首先发射的人造卫星名为：", options: ["A. 阿波罗", "B. 东方号", "C. 斯普特尼克", "D. 挑战者"], answer: "C", knowledgePoint: "太空竞赛", analysis: "1957年，苏联发射了世界上第一颗人造卫星「斯普特尼克1号」，开启了太空竞赛。" }
  ]},
  { lesson: 24, title: "冷战的缓和与结束", questions: [
    { type: "choice", difficulty: "basic", text: "柏林墙倒塌于哪一年？", options: ["A. 1988年", "B. 1989年", "C. 1990年", "D. 1991年"], answer: "B", knowledgePoint: "柏林墙倒塌", analysis: "1989年11月9日，柏林墙倒塌，象征着冷战的结束和德国统一的开始。" },
    { type: "choice", difficulty: "medium", text: "détente（缓和）时期主要发生在：", options: ["A. 20世纪50年代", "B. 20世纪60年代", "C. 20世纪70年代", "D. 20世纪80年代"], answer: "C", knowledgePoint: "冷战缓和", analysis: "20世纪70年代是冷战的缓和时期，美苏签署了一系列限制核武器的条约。" },
    { type: "choice", difficulty: "hard", text: "苏联解体后分裂成多少个国家？", options: ["A. 12个", "B. 13个", "C. 14个", "D. 15个"], answer: "D", knowledgePoint: "苏联解体", analysis: "1991年苏联解体，分裂成15个独立国家，包括俄罗斯、乌克兰、白俄罗斯等。" }
  ]},

  // ════════════════════════════════════════
  // 第九章：当代世界的发展
  // ════════════════════════════════════════
  
  { lesson: 25, title: "全球化与经济发展", questions: [
    { type: "choice", difficulty: "basic", text: "欧盟成立于哪一年？", options: ["A. 1990年", "B. 1992年", "C. 1993年", "D. 1995年"], answer: "C", knowledgePoint: "欧盟成立", analysis: "1993年11月1日，欧盟正式成立，标志着欧洲一体化进程进入新阶段。" },
    { type: "choice", difficulty: "medium", text: "世界贸易组织（WTO）成立于哪一年？", options: ["A. 1993年", "B. 1994年", "C. 1995年", "D. 1996年"], answer: "C", knowledgePoint: "WTO成立", analysis: "1995年1月1日，世界贸易组织成立，取代了关贸总协定，成为全球贸易的主要管理机构。" },
    { type: "choice", difficulty: "hard", text: "全球化的主要载体是：", options: ["A. 国家政府", "B. 跨国公司", "C. 国际组织", "D. 非政府组织"], answer: "B", knowledgePoint: "全球化载体", analysis: "跨国公司在全球范围内生产和销售，是经济全球化的主要载体，推动了国际贸易和资本流动。" }
  ]},
  { lesson: 26, title: "社会与文化变迁", questions: [
    { type: "choice", difficulty: "basic", text: "马丁·路德·金是哪个运动的领袖？", options: ["A. 女权运动", "B. 民权运动", "C. 反战运动", "D. 环保运动"], answer: "B", knowledgePoint: "民权运动", analysis: "马丁·路德·金是美国民权运动的领袖，为黑人争取平等权利做出了重要贡献。" },
    { type: "choice", difficulty: "medium", text: "《世界人权宣言》通过于哪一年？", options: ["A. 1945年", "B. 1946年", "C. 1947年", "D. 1948年"], answer: "D", knowledgePoint: "人权宣言", analysis: "1948年12月10日，联合国通过《世界人权宣言》，确立了人类普遍的权利标准。" },
    { type: "choice", difficulty: "hard", text: "文化多元化的核心是：", options: ["A. 文化同化", "B. 文化冲突", "C. 文化尊重与包容", "D. 文化排斥"], answer: "C", knowledgePoint: "文化多元化", analysis: "文化多元化强调不同文化之间的尊重、理解和包容，促进文化交流与融合。" }
  ]},
  { lesson: 27, title: "环境与发展", questions: [
    { type: "choice", difficulty: "basic", text: "巴黎协定签署于哪一年？", options: ["A. 2014年", "B. 2015年", "C. 2016年", "D. 2017年"], answer: "B", knowledgePoint: "巴黎协定", analysis: "2015年12月，联合国气候变化大会通过《巴黎协定》，旨在应对全球气候变化。" },
    { type: "choice", difficulty: "medium", text: "可持续发展的三大支柱是：", options: ["A. 经济、社会、环境", "B. 政治、经济、文化", "C. 科技、教育、环保", "D. 人口、资源、环境"], answer: "A", knowledgePoint: "可持续发展", analysis: "可持续发展包括经济可持续、社会可持续和环境可持续三个方面，强调三者的协调发展。" },
    { type: "choice", difficulty: "hard", text: "麻瓜与魔法界在环保方面的合作主要体现在：", options: ["A. 共享魔法资源", "B. 秘密合作项目", "C. 公开技术交流", "D. 联合环保组织"], answer: "B", knowledgePoint: "魔法与麻瓜环保合作", analysis: "巫师拥有独特的魔法能力，可以在环境保护中发挥作用，已经有巫师组织与麻瓜环保组织开展秘密合作项目。" }
  ]},

  // ════════════════════════════════════════
  // 第十一章：历史学习方法与专题
  // ════════════════════════════════════════
  
  { lesson: 31, title: "史料的解读与运用", questions: [
    { type: "choice", difficulty: "basic", text: "第一手史料是指：", options: ["A. 后人写的历史书", "B. 原始的历史材料", "C. 历史老师的讲义", "D. 历史纪录片"], answer: "B", knowledgePoint: "史料类型", analysis: "第一手史料是指直接来自历史事件的原始材料，如日记、信件、官方文件等，具有较高的可信度。" },
    { type: "choice", difficulty: "medium", text: "鉴别史料真伪的方法不包括：", options: ["A. 考察史料的出处", "B. 比对不同来源的史料", "C. 凭感觉判断", "D. 分析史料的写作背景"], answer: "C", knowledgePoint: "史料鉴别", analysis: "鉴别史料需要科学的方法，包括考察出处、比对来源、分析背景等，凭感觉判断是不科学的。" },
    { type: "choice", difficulty: "hard", text: "从巫师视角解读历史的优势在于：", options: ["A. 可以使用魔法修改历史", "B. 了解魔法世界与麻瓜世界的交集", "C. 可以穿越时空", "D. 记忆力更好"], answer: "B", knowledgePoint: "巫师视角", analysis: "巫师了解魔法世界的存在，可以从独特的角度解读历史事件，特别是魔法与麻瓜世界的互动。" }
  ]},
  { lesson: 32, title: "历史人物评价", questions: [
    { type: "choice", difficulty: "basic", text: "评价历史人物的标准不包括：", options: ["A. 是否推动历史进步", "B. 是否符合人民利益", "C. 外貌是否英俊", "D. 是否顺应时代潮流"], answer: "C", knowledgePoint: "评价标准", analysis: "评价历史人物应看其历史贡献和影响，外貌不是评价的标准。" },
    { type: "choice", difficulty: "medium", text: "多角度评价历史人物意味着：", options: ["A. 只看优点", "B. 只看缺点", "C. 从不同角度全面看待", "D. 只看经济角度"], answer: "C", knowledgePoint: "多角度评价", analysis: "多角度评价要求从政治、经济、文化等不同角度全面看待历史人物，避免片面性。" },
    { type: "choice", difficulty: "hard", text: "评价历史人物应结合：", options: ["A. 时代背景", "B. 个人喜好", "C. 现代价值观", "D. 道听途说"], answer: "A", knowledgePoint: "评价方法", analysis: "评价历史人物必须结合其所处的时代背景，不能用现代标准苛求古人。" }
  ]},
  { lesson: 33, title: "历史事件的因果分析", questions: [
    { type: "choice", difficulty: "basic", text: "历史事件的原因通常是：", options: ["A. 单一的", "B. 多种因素共同作用的", "C. 偶然的", "D. 无法分析的"], answer: "B", knowledgePoint: "因果关系", analysis: "历史事件的发生往往是政治、经济、社会等多种因素共同作用的结果。" },
    { type: "choice", difficulty: "medium", text: "直接原因与根本原因的区别在于：", options: ["A. 没有区别", "B. 直接原因是表面的，根本原因是深层次的", "C. 根本原因是表面的，直接原因是深层次的", "D. 直接原因更重要"], answer: "B", knowledgePoint: "原因类型", analysis: "直接原因是引发事件的直接因素，根本原因是导致事件发生的深层次因素，根本原因更为重要。" },
    { type: "choice", difficulty: "hard", text: "历史的偶然性与必然性的关系是：", options: ["A. 完全对立", "B. 相互依存", "C. 没有关系", "D. 偶然性决定必然性"], answer: "B", knowledgePoint: "偶然与必然", analysis: "历史发展有其必然性，但具体事件的发生可能带有偶然性，两者相互依存、相互作用。" }
  ]},

  // ════════════════════════════════════════
  // 第十二章：麻瓜与魔法世界的历史交汇
  // ════════════════════════════════════════
  
  { lesson: 34, title: "魔法与麻瓜的历史交集", questions: [
    { type: "choice", difficulty: "basic", text: "麻瓜保护法的主要目的是：", options: ["A. 攻击麻瓜", "B. 保护巫师世界的秘密", "C. 限制巫师使用魔法", "D. 促进魔法与麻瓜通婚"], answer: "B", knowledgePoint: "麻瓜保护法", analysis: "麻瓜保护法的主要目的是保护巫师世界的存在不被麻瓜发现，维护保密状态。" },
    { type: "choice", difficulty: "medium", text: "中世纪猎巫运动对巫师世界的影响是：", options: ["A. 没有影响", "B. 促使巫师更加隐蔽", "C. 巫师公开反抗", "D. 巫师与麻瓜和平共处"], answer: "B", knowledgePoint: "猎巫运动", analysis: "中世纪的猎巫运动迫使巫师更加隐蔽，加强了保密措施，对巫师世界的生存策略产生了深远影响。" },
    { type: "choice", difficulty: "hard", text: "魔法部的职责不包括：", options: ["A. 维护保密法", "B. 处理与麻瓜的关系", "C. 管理霍格沃茨", "D. 制定魔法法律"], answer: "C", knowledgePoint: "魔法部职责", analysis: "霍格沃茨由董事会管理，魔法部不直接管理学校，但负责监督和支持。" }
  ]},
  { lesson: 35, title: "近现代的互动", questions: [
    { type: "choice", difficulty: "basic", text: "工业革命时期，巫师对麻瓜技术的态度是：", options: ["A. 完全反对", "B. 完全支持", "C. 既观察又谨慎", "D. 漠不关心"], answer: "C", knowledgePoint: "巫师态度", analysis: "巫师对麻瓜的工业革命保持观察，既好奇又谨慎，部分巫师偷偷帮助改进技术。" },
    { type: "choice", difficulty: "medium", text: "两次世界大战期间，魔法界的立场是：", options: ["A. 积极参战", "B. 严格中立", "C. 支持同盟国", "D. 支持轴心国"], answer: "B", knowledgePoint: "魔法界立场", analysis: "魔法部在两次世界大战期间保持严格中立，禁止巫师参与麻瓜的战争，以保护巫师世界的安全。" },
    { type: "choice", difficulty: "hard", text: "当代魔法与麻瓜的合作主要在哪些领域？", options: ["A. 军事领域", "B. 环境保护和医疗救助", "C. 商业贸易", "D. 文化娱乐"], answer: "B", knowledgePoint: "当代合作", analysis: "在环境保护和医疗救助等领域，巫师和麻瓜已经开展了一些秘密合作项目。" }
  ]},
  { lesson: 36, title: "历史的共同未来", questions: [
    { type: "choice", difficulty: "basic", text: "学习历史的意义在于：", options: ["A. 记住年份和事件", "B. 理解现在，展望未来", "C. 应付考试", "D. 炫耀知识"], answer: "B", knowledgePoint: "历史意义", analysis: "学习历史是为了理解现在，从历史中吸取教训，更好地展望未来。" },
    { type: "choice", difficulty: "medium", text: "魔法世界与麻瓜世界共同发展的基础是：", options: ["A. 相互尊重与理解", "B. 魔法统治麻瓜", "C. 麻瓜消灭魔法", "D. 互不往来"], answer: "A", knowledgePoint: "共同发展", analysis: "两个世界的共同发展需要建立在相互尊重和理解的基础上，尊重彼此的差异和存在。" },
    { type: "choice", difficulty: "hard", text: "我们的历史责任是：", options: ["A. 忘记历史", "B. 传承历史，开创未来", "C. 回到过去", "D. 只关注现在"], answer: "B", knowledgePoint: "历史责任", analysis: "作为年轻的巫师，传承历史、开创未来是我们的责任，为两个世界的和平与发展贡献力量。" }
  ]},

  // ════════════════════════════════════════
  // 第四章：期中复习与考试
  // ════════════════════════════════════════
  
  { lesson: 10, title: "工业革命专题复习", questions: [
    { type: "choice", difficulty: "basic", text: "工业革命发生的根本原因是：", options: ["A. 瓦特发明蒸汽机", "B. 资本主义经济的发展", "C. 国王的命令", "D. 工人的要求"], answer: "B", knowledgePoint: "工业革命原因", analysis: "资本主义经济的发展需要更高效的生产方式，这是工业革命发生的根本原因。" },
    { type: "choice", difficulty: "medium", text: "工业革命对魔法世界的影响是：", options: ["A. 没有影响", "B. 促使魔法部加强保密", "C. 巫师全部搬到麻瓜世界", "D. 魔法消失了"], answer: "B", knowledgePoint: "工业革命与魔法界", analysis: "工业革命使麻瓜世界发生巨大变化，促使魔法部加强保密措施，防止巫师世界被发现。" },
    { type: "choice", difficulty: "hard", text: "工业革命与魔法的相似之处是：", options: ["A. 都能让人飞", "B. 都是对自然力量的利用", "C. 都不需要学习", "D. 都很危险"], answer: "B", knowledgePoint: "工业革命与魔法", analysis: "工业革命利用科学技术改造自然，魔法利用魔力改造自然，两者都是对自然力量的利用。" }
  ]},
  { lesson: 11, title: "帝国主义与一战专题复习", questions: [
    { type: "choice", difficulty: "basic", text: "帝国主义的本质是：", options: ["A. 帮助落后国家", "B. 对外扩张和掠夺", "C. 传播文化", "D. 促进和平"], answer: "B", knowledgePoint: "帝国主义本质", analysis: "帝国主义的本质是垄断资本主义国家对外扩张和掠夺，争夺殖民地和世界霸权。" },
    { type: "choice", difficulty: "medium", text: "一战的性质是：", options: ["A. 正义的战争", "B. 帝国主义战争", "C. 民族解放战争", "D. 宗教战争"], answer: "B", knowledgePoint: "一战性质", analysis: "第一次世界大战是一场帝国主义国家之间争夺霸权和殖民地的非正义战争。" },
    { type: "choice", difficulty: "hard", text: "凡尔赛条约的最大问题是：", options: ["A. 太宽松", "B. 过于苛刻，埋下复仇种子", "C. 没有惩罚德国", "D. 让美国受益"], answer: "B", knowledgePoint: "凡尔赛条约", analysis: "凡尔赛条约对德国过于苛刻，巨额赔款和领土割让激起了德国民众的不满，为二战埋下了伏笔。" }
  ]},
  { lesson: 12, title: "期中考试", questions: [
    { type: "choice", difficulty: "basic", text: "期中考试的范围是：", options: ["A. 第1-2章", "B. 第1-3章", "C. 第1-4章", "D. 全学期"], answer: "B", knowledgePoint: "考试范围", analysis: "期中考试范围是第1-3章，包括工业革命、民族国家与帝国主义、第一次世界大战。" },
    { type: "choice", difficulty: "medium", text: "论述题的答题技巧不包括：", options: ["A. 论点明确", "B. 论据充分", "C. 字迹潦草", "D. 逻辑清晰"], answer: "C", knowledgePoint: "答题技巧", analysis: "论述题答题应论点明确、论据充分、逻辑清晰，字迹潦草会影响评分。" },
    { type: "choice", difficulty: "hard", text: "材料分析题的关键是：", options: ["A. 只看材料", "B. 只背知识点", "C. 结合材料和知识点", "D. 随意发挥"], answer: "C", knowledgePoint: "材料分析", analysis: "材料分析题需要结合材料内容和所学知识点，不能只看材料或只背知识点。" }
  ]},

  // ════════════════════════════════════════
  // 第七章：第一学期期末复习与考试
  // ════════════════════════════════════════
  
  { lesson: 19, title: "二战专题复习", questions: [
    { type: "choice", difficulty: "basic", text: "二战爆发的根本原因是：", options: ["A. 德国入侵波兰", "B. 凡尔赛条约的苛刻条款", "C. 日本偷袭珍珠港", "D. 苏联解体"], answer: "B", knowledgePoint: "二战原因", analysis: "凡尔赛条约的苛刻条款导致德国民族主义和复仇情绪高涨，是二战爆发的根本原因。" },
    { type: "choice", difficulty: "medium", text: "二战的转折点是：", options: ["A. 珍珠港事件", "B. 斯大林格勒战役", "C. 诺曼底登陆", "D. 柏林战役"], answer: "B", knowledgePoint: "二战转折", analysis: "斯大林格勒战役是二战的转折点，苏军击败德军，开始战略反攻。" },
    { type: "choice", difficulty: "hard", text: "二战的性质是：", options: ["A. 帝国主义战争", "B. 反法西斯战争", "C. 宗教战争", "D. 内战"], answer: "B", knowledgePoint: "二战性质", analysis: "第二次世界大战是一场反法西斯的正义战争，世界各国人民联合起来对抗法西斯侵略。" }
  ]},
  { lesson: 20, title: "第一学期总复习", questions: [
    { type: "choice", difficulty: "basic", text: "近代史的时间范围是：", options: ["A. 古代到中世纪", "B. 16世纪到18世纪", "C. 18世纪下半叶至今", "D. 未来"], answer: "C", knowledgePoint: "近代史范围", analysis: "近代史通常指从18世纪下半叶工业革命开始至今的历史时期。" },
    { type: "choice", difficulty: "medium", text: "历史发展的根本动力是：", options: ["A. 英雄人物", "B. 生产力的发展", "C. 战争", "D. 魔法"], answer: "B", knowledgePoint: "历史动力", analysis: "生产力的发展是历史发展的根本动力，推动着社会经济和政治的变革。" },
    { type: "choice", difficulty: "hard", text: "跨章节联系的意义是：", options: ["A. 增加学习难度", "B. 形成完整的知识体系", "C. 浪费时间", "D. 考试不考"], answer: "B", knowledgePoint: "跨章节联系", analysis: "跨章节联系有助于形成完整的知识体系，更好地理解历史发展的脉络。" }
  ]},
  { lesson: 21, title: "第一学期期末考试", questions: [
    { type: "choice", difficulty: "basic", text: "第一学期期末考试的范围是：", options: ["A. 第1-3章", "B. 第1-6章", "C. 第4-6章", "D. 第1-7章"], answer: "B", knowledgePoint: "考试范围", analysis: "第一学期期末考试范围是第1-6章，包括工业革命到第二次世界大战。" },
    { type: "choice", difficulty: "medium", text: "考试时间是：", options: ["A. 60分钟", "B. 90分钟", "C. 120分钟", "D. 150分钟"], answer: "C", knowledgePoint: "考试时间", analysis: "第一学期期末考试时间为120分钟，需合理安排答题时间。" },
    { type: "choice", difficulty: "hard", text: "评分标准中，论述题的重点是：", options: ["A. 字数多少", "B. 论点、论据和逻辑", "C. 字体大小", "D. 答题速度"], answer: "B", knowledgePoint: "评分标准", analysis: "论述题评分主要看论点是否明确、论据是否充分、逻辑是否清晰。" }
  ]},

  // ════════════════════════════════════════
  // 第十章：第二学期期中复习与考试
  // ════════════════════════════════════════
  
  { lesson: 28, title: "冷战专题复习", questions: [
    { type: "choice", difficulty: "basic", text: "冷战的本质是：", options: ["A. 热战", "B. 意识形态对抗", "C. 经济合作", "D. 文化交流"], answer: "B", knowledgePoint: "冷战本质", analysis: "冷战是美苏之间的意识形态对抗，双方在政治、经济、军事等领域进行竞争。" },
    { type: "choice", difficulty: "medium", text: "北约成立于哪一年？", options: ["A. 1945年", "B. 1949年", "C. 1955年", "D. 1960年"], answer: "B", knowledgePoint: "北约成立", analysis: "北约（北大西洋公约组织）成立于1949年，是冷战时期西方的军事同盟。" },
    { type: "choice", difficulty: "hard", text: "冷战结束的根本原因是：", options: ["A. 柏林墙倒塌", "B. 苏联解体", "C. 美国胜利", "D. 经济因素"], answer: "D", knowledgePoint: "冷战结束原因", analysis: "苏联经济衰退、体制僵化是冷战结束的根本原因，柏林墙倒塌和苏联解体是具体表现。" }
  ]},
  { lesson: 29, title: "当代世界专题复习", questions: [
    { type: "choice", difficulty: "basic", text: "全球化的核心是：", options: ["A. 文化隔离", "B. 经济全球化", "C. 政治分裂", "D. 军事对抗"], answer: "B", knowledgePoint: "全球化核心", analysis: "经济全球化是全球化的核心，表现为国际贸易、投资和生产的全球化。" },
    { type: "choice", difficulty: "medium", text: "可持续发展的目标是：", options: ["A. 只追求经济增长", "B. 经济、社会、环境协调发展", "C. 牺牲环境换发展", "D. 回到原始社会"], answer: "B", knowledgePoint: "可持续发展", analysis: "可持续发展追求经济增长、社会进步和环境保护的协调统一。" },
    { type: "choice", difficulty: "hard", text: "当代世界的时代特征是：", options: ["A. 单极化", "B. 多极化", "C. 两极化", "D. 无极化"], answer: "B", knowledgePoint: "时代特征", analysis: "当代世界呈现多极化趋势，美国、欧盟、中国、俄罗斯等多个力量中心并存。" }
  ]},
  { lesson: 30, title: "第二学期期中考试", questions: [
    { type: "choice", difficulty: "basic", text: "第二学期期中考试范围是：", options: ["A. 第8-9章", "B. 第7-9章", "C. 第8-10章", "D. 全学期"], answer: "A", knowledgePoint: "考试范围", analysis: "第二学期期中考试范围是第8-9章，包括冷战与两极格局、当代世界的发展。" },
    { type: "choice", difficulty: "medium", text: "选择题的答题技巧是：", options: ["A. 随意选择", "B. 排除错误选项", "C. 只看第一个选项", "D. 不看题目"], answer: "B", knowledgePoint: "答题技巧", analysis: "选择题可通过排除明显错误选项来提高正确率。" },
    { type: "choice", difficulty: "hard", text: "材料分析题的步骤是：", options: ["A. 直接写答案", "B. 阅读材料→提取信息→结合知识点→组织答案", "C. 只抄材料", "D. 只背知识点"], answer: "B", knowledgePoint: "答题步骤", analysis: "材料分析题应先阅读材料提取关键信息，再结合知识点组织答案。" }
  ]},

  // ════════════════════════════════════════
  // 第十三章：专题复习
  // ════════════════════════════════════════
  
  { lesson: 37, title: "工业时代以来的科技进步", questions: [
    { type: "choice", difficulty: "basic", text: "第一次工业革命的标志是：", options: ["A. 电力的使用", "B. 蒸汽机的改良", "C. 计算机的发明", "D. 核能的利用"], answer: "B", knowledgePoint: "第一次工业革命", analysis: "蒸汽机的改良是第一次工业革命的标志，推动了机器大工业的发展。" },
    { type: "choice", difficulty: "medium", text: "第二次工业革命的标志是：", options: ["A. 蒸汽机", "B. 电力和内燃机", "C. 计算机", "D. 互联网"], answer: "B", knowledgePoint: "第二次工业革命", analysis: "电力和内燃机的发明与应用是第二次工业革命的标志。" },
    { type: "choice", difficulty: "hard", text: "科技与人文的关系是：", options: ["A. 对立的", "B. 相辅相成的", "C. 科技不重要", "D. 人文不重要"], answer: "B", knowledgePoint: "科技与人文", analysis: "科技发展需要人文关怀，人文精神需要科技支撑，两者相辅相成。" }
  ]},
  { lesson: 38, title: "战争与和平", questions: [
    { type: "choice", difficulty: "basic", text: "战争的根源是：", options: ["A. 人性本恶", "B. 利益冲突", "C. 天气不好", "D. 魔法作怪"], answer: "B", knowledgePoint: "战争根源", analysis: "战争的根源是利益冲突，包括领土、资源、意识形态等方面的矛盾。" },
    { type: "choice", difficulty: "medium", text: "联合国的主要作用是：", options: ["A. 发动战争", "B. 维护国际和平与安全", "C. 干涉他国内政", "D. 推广英语"], answer: "B", knowledgePoint: "联合国作用", analysis: "联合国的主要宗旨是维护国际和平与安全，促进国际合作。" },
    { type: "choice", difficulty: "hard", text: "维护和平的途径是：", options: ["A. 军备竞赛", "B. 对话与合作", "C. 孤立他国", "D. 发动战争"], answer: "B", knowledgePoint: "维护和平", analysis: "通过对话、协商和国际合作来解决争端，是维护和平的有效途径。" }
  ]},
  { lesson: 39, title: "社会变迁与文明进步", questions: [
    { type: "choice", difficulty: "basic", text: "文明进步的标志是：", options: ["A. 建筑高度", "B. 社会公平与发展", "C. 武器先进程度", "D. 人口数量"], answer: "B", knowledgePoint: "文明进步", analysis: "文明进步的标志是社会公平、经济发展、文化繁荣和人民生活水平的提高。" },
    { type: "choice", difficulty: "medium", text: "社会结构变化的根本原因是：", options: ["A. 政府政策", "B. 生产力发展", "C. 文化传统", "D. 气候变化"], answer: "B", knowledgePoint: "社会结构变化", analysis: "生产力的发展是社会结构变化的根本原因，推动着生产关系和社会关系的变革。" },
    { type: "choice", difficulty: "hard", text: "人类的共同追求是：", options: ["A. 战争与冲突", "B. 和平、发展、公平、正义", "C. 霸权与统治", "D. 孤立与封闭"], answer: "B", knowledgePoint: "共同追求", analysis: "和平、发展、公平、正义是人类社会的共同追求，也是历史发展的潮流。" }
  ]},

  // ════════════════════════════════════════
  // 第十四章：总复习
  // ════════════════════════════════════════
  
  { lesson: 40, title: "近代史总框架", questions: [
    { type: "choice", difficulty: "basic", text: "近代史的起点是：", options: ["A. 古代", "B. 工业革命", "C. 二战", "D. 冷战"], answer: "B", knowledgePoint: "近代史起点", analysis: "近代史通常以18世纪下半叶的工业革命为起点，标志着人类进入现代社会。" },
    { type: "choice", difficulty: "medium", text: "近代史的核心主题是：", options: ["A. 农业发展", "B. 现代化与全球化", "C. 封建统治", "D. 魔法复兴"], answer: "B", knowledgePoint: "核心主题", analysis: "近代史的核心主题是现代化（工业化、民主化）和全球化（经济、文化联系加强）。" },
    { type: "choice", difficulty: "hard", text: "历史时间线的作用是：", options: ["A. 记住年份", "B. 理解历史发展脉络", "C. 增加负担", "D. 没用"], answer: "B", knowledgePoint: "时间线作用", analysis: "历史时间线帮助我们理解事件的先后顺序和因果关系，把握历史发展脉络。" }
  ]},
  { lesson: 41, title: "重难点突破", questions: [
    { type: "choice", difficulty: "basic", text: "高频考点通常是：", options: ["A. 不重要的内容", "B. 核心知识点", "C. 边缘知识", "D. 冷门内容"], answer: "B", knowledgePoint: "高频考点", analysis: "高频考点通常是课程的核心知识点，需要重点掌握。" },
    { type: "choice", difficulty: "medium", text: "易错点的特点是：", options: ["A. 容易理解", "B. 容易混淆", "C. 简单", "D. 不重要"], answer: "B", knowledgePoint: "易错点", analysis: "易错点通常是相似概念或易混淆的知识点，需要特别注意区分。" },
    { type: "choice", difficulty: "hard", text: "答题技巧的核心是：", options: ["A. 死记硬背", "B. 理解与应用", "C. 作弊", "D. 不答题"], answer: "B", knowledgePoint: "答题技巧", analysis: "答题技巧的核心是理解知识点并能灵活应用，而不是死记硬背。" }
  ]},
  { lesson: 42, title: "综合练习与讲评", questions: [
    { type: "choice", difficulty: "basic", text: "模拟练习的目的是：", options: ["A. 浪费时间", "B. 熟悉题型和考试节奏", "C. 增加压力", "D. 不做也行"], answer: "B", knowledgePoint: "模拟练习", analysis: "模拟练习有助于熟悉考试题型和节奏，提高答题速度和准确性。" },
    { type: "choice", difficulty: "medium", text: "错题分析的意义是：", options: ["A. 打击自信心", "B. 找出薄弱环节", "C. 浪费时间", "D. 没用"], answer: "B", knowledgePoint: "错题分析", analysis: "错题分析能帮助找出知识薄弱环节，有针对性地进行复习。" },
    { type: "choice", difficulty: "hard", text: "考试准备包括：", options: ["A. 熬夜复习", "B. 制定计划、查漏补缺、调整心态", "C. 不复习", "D. 作弊"], answer: "B", knowledgePoint: "考试准备", analysis: "考试准备应包括制定复习计划、查漏补缺和调整心态，保持良好状态。" }
  ]},

  // ════════════════════════════════════════
  // 第十五章：期末考试与总结
  // ════════════════════════════════════════
  
  { lesson: 43, title: "期末考试", questions: [
    { type: "choice", difficulty: "basic", text: "期末考试的范围是：", options: ["A. 第一学期", "B. 第二学期", "C. 全学年", "D. 随机"], answer: "C", knowledgePoint: "考试范围", analysis: "期末考试范围是全学年内容，涵盖第一学期和第二学期的所有知识点。" },
    { type: "choice", difficulty: "medium", text: "期末考试时间是：", options: ["A. 90分钟", "B. 120分钟", "C. 150分钟", "D. 60分钟"], answer: "C", knowledgePoint: "考试时间", analysis: "期末考试时间为150分钟，需合理分配时间完成各类题型。" },
    { type: "choice", difficulty: "hard", text: "论述题的结构应包括：", options: ["A. 只有论点", "B. 论点、论据、结论", "C. 只有论据", "D. 随意写"], answer: "B", knowledgePoint: "论述题结构", analysis: "论述题应包括明确的论点、充分的论据和合理的结论，结构完整。" }
  ]},
  { lesson: 44, title: "试卷讲评", questions: [
    { type: "choice", difficulty: "basic", text: "试卷讲评的目的是：", options: ["A. 批评学生", "B. 分析试题和答题情况", "C. 浪费时间", "D. 念答案"], answer: "B", knowledgePoint: "试卷讲评", analysis: "试卷讲评的目的是分析试题特点和学生答题情况，帮助学生理解错误原因。" },
    { type: "choice", difficulty: "medium", text: "常见错误的类型包括：", options: ["A. 只有粗心", "B. 概念不清、审题错误、分析不深入", "C. 只有不会", "D. 没有错误"], answer: "B", knowledgePoint: "常见错误", analysis: "常见错误包括概念理解不清、审题错误、分析不深入等多种类型。" },
    { type: "choice", difficulty: "hard", text: "改进建议的核心是：", options: ["A. 多做题", "B. 理解知识点、总结方法、加强练习", "C. 只背答案", "D. 不学习"], answer: "B", knowledgePoint: "改进建议", analysis: "改进学习的核心是理解知识点、总结答题方法并加强针对性练习。" }
  ]},
  { lesson: 45, title: "学年总结与展望", questions: [
    { type: "choice", difficulty: "basic", text: "历史思维包括：", options: ["A. 只记年份", "B. 辩证思维、因果分析、史料解读", "C. 不思考", "D. 死记硬背"], answer: "B", knowledgePoint: "历史思维", analysis: "历史思维包括辩证思维、因果分析、史料解读等能力，帮助我们理解和分析历史。" },
    { type: "choice", difficulty: "medium", text: "学习历史的意义是：", options: ["A. 应付考试", "B. 理解现在、展望未来", "C. 没用", "D. 浪费时间"], answer: "B", knowledgePoint: "学习意义", analysis: "学习历史能帮助我们理解现在的世界，从历史中吸取教训，更好地展望未来。" },
    { type: "choice", difficulty: "hard", text: "未来学习历史的方法是：", options: ["A. 只看书", "B. 多阅读、多思考、多实践", "C. 不学习", "D. 只做题"], answer: "B", knowledgePoint: "学习方法", analysis: "未来学习历史应注重多阅读史料、多思考分析、多实践应用，培养历史思维能力。" }
  ]}
];

window.historyQuestionBank = questionBank;

export default questionBank;
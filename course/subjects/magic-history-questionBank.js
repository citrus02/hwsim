/**
 * magic-history-questionBank.js
 * 魔法史 · 随堂测验题库
 * 教授：卡斯伯特·宾斯（幽灵）
 *
 * 情境均为学术设定；不与原著情节逐句对应。
 */

export const questionBank = [
  {
    lesson: 1, title: "魔法史：为什么要研究过去",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔法史课程最核心的学科目标是：",
        options: ["A. 背诵所有日期以应付考试", "B. 理解当下制度、法律与社会格局是如何在历史中形成的", "C. 证明古代巫师比现代巫师更强", "D. 收集幽灵教授的轶事"],
        answer: "B",
        knowledgePoint: "魔法史学科意义",
        analysis: "魔法史关注因果与结构的演变：保密法、魔法部、学院传统与族群关系都不是凭空出现，理解历史才能理解「为何今日如此规定」。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "研究巫师与麻瓜关系史时，哪一种态度最符合严谨的魔法史方法？",
        options: ["A. 只站在巫师立场谴责麻瓜", "B. 只站在麻瓜立场同情猎巫", "C. 区分史料、情境与后人叙事，比较多方记录再下结论", "D. 相信口头传说胜过档案"],
        answer: "C",
        knowledgePoint: "史学方法",
        analysis: "严谨做法是检视档案、法令与多种叙事，意识到记录者的立场与缺失；单一视角容易把复杂冲突简化成道德寓言。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "为何「年代错乱」在魔法史学习中尤其危险？",
        options: ["A. 幽灵教授不在乎年份", "B. 混淆先后会把因果颠倒，从而误解制度的最初用途", "C. 年代错了不影响考试", "D. 魔法史从不考查时间线"],
        answer: "B",
        knowledgePoint: "时序与因果",
        analysis: "制度往往在特定危机或妥协中产生；若年代错乱，会把结果当成原因，进而误解例如保密法或魔法部权力的真正由来。"
      }
    ]
  },
  {
    lesson: 2, title: "霍格沃茨四巨头与建校叙事",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "霍格沃茨传说中四位创办者不包括下列哪位？",
        options: ["A. 戈德里克·格兰芬多", "B. 罗伊娜·拉文克劳", "C. 赫尔加·赫奇帕奇", "D. 梅林"],
        answer: "D",
        knowledgePoint: "四巨头",
        analysis: "四位创办者是格兰芬多、斯莱特林、拉文克劳与赫奇帕奇；梅林是更古老的传说人物，并非建校叙事中的创办者。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "关于「斯莱特林与密室」的史料，魔法史常用的 caution 是：",
        options: ["A. 传说必然全部为真", "B. 传说可能混合恐惧、政治宣传与真实内核，需要对照其他记录", "C. 只要书上印着就是官方定论", "D. 幽灵教授的讲义最不可靠"],
        answer: "B",
        knowledgePoint: "史料批判",
        analysis: "奠基叙事常被后世改写以服务立场；严谨做法是比对档案、器物记载与不同学院流传的版本，分辨层次。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "四巨头「分院」理念的根本张力体现在：",
        options: ["A. 课程收费不同", "B. 对勇气、才智、血统与勤奋等价值的排序不同，导致教育理念分歧", "C. 城堡地基朝向", "D. 飞天扫帚品牌"],
        answer: "B",
        knowledgePoint: "教育理念史",
        analysis: "创办者对「何种品质应被优先培养」有不同侧重；这种价值分歧被制度化为学院传统，并在数百年中不断被重新诠释。"
      }
    ]
  },
  {
    lesson: 3, title: "分院帽与学院制度的形成",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "分院帽在制度史上的角色最接近：",
        options: ["A. 装饰品", "B. 将创办者意志转化为可操作分拣程序的魔法造物", "C. 魁地奇裁判", "D. 魔药搅拌器"],
        answer: "B",
        knowledgePoint: "分院帽",
        analysis: "分院帽承载着创办者的意图与协商结果，把抽象的「培养路线」落实为每年新生的学院归属机制。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "学院制长期延续的主要原因不包括：",
        options: ["A. 形成认同与竞争以促进学习", "B. 便于组织住宿、管理与校内活动", "C. 保证血统纯洁——这是制度设计的公开目的", "D. 传统一旦成型，改革成本极高"],
        answer: "C",
        knowledgePoint: "学院制",
        analysis: "学院制核心是培养路径与集体生活组织；「血统」并非四巨头公开宣称的统一制度目的（尽管历史上某些人物会强调血统）。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "从史学角度看，「帽子也会出错吗」这类争论的价值在于：",
        options: ["A. 证明帽子该报废", "B. 揭示人们对「分类」「命运」与自我选择的焦虑——争论本身是文化史材料", "C. 说明一年级学生最有发言权", "D. 证明占卜学更科学"],
        answer: "B",
        knowledgePoint: "观念史",
        analysis: "制度是否完美常被争论反复提及；这些争论反映不同时代学生对身份、公平与成长的理解，是文化史而非单纯事实题。"
      }
    ]
  },
  {
    lesson: 4, title: "《国际巫师保密法》何以产生",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "保密法（语境设定）最核心的直接目标是：",
        options: ["A. 禁止巫师结婚", "B. 降低巫师社会被麻瓜系统性察觉与攻击的风险", "C. 取消魔杖登记", "D. 废除古灵阁"],
        answer: "B",
        knowledgePoint: "保密法宗旨",
        analysis: "在猎巫压力与冲突加剧的背景下，限制公开施法、规范隐匿与暴露处置，核心是集体安全与存续。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "保密法推行后，巫师社群结构更可能出现的长期变化是：",
        options: ["A. 完全与麻瓜混居且不隐藏", "B. 强化对角巷、霍格莫德式聚居与「麻瓜不可见」机制", "C. 巫师全部移居月球", "D. 取消魔法部"],
        answer: "B",
        knowledgePoint: "聚落模式",
        analysis: "法律压力促使魔法聚居点、遮蔽咒与身份管理技术发展，形成「隐藏平行社会」的空间格局。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "评价保密法时，魔法史强调「利弊同在」是指：",
        options: ["A. 法律没有代价", "B. 安全收益往往伴随权利收紧、边缘群体受压与官僚扩张等代价", "C. 弊远大于利因此该废除", "D. 利远大于弊因此不容批评"],
        answer: "B",
        knowledgePoint: "历史评价",
        analysis: "制度变迁通常交换多种价值：保密换取集体安全，也可能带来监视、处罚加重或对混血/麻瓜出身者的结构性压力——需分层次讨论。"
      }
    ]
  },
  {
    lesson: 5, title: "中世纪：猎巫与巫师的回应",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔法史通常如何区分「麻瓜法庭处决的无辜者」与「真正危险的巫师罪犯」？",
        options: ["A. 不区分，统称巫师", "B. 依据魔法部（前身机构）执法档案与麻瓜记录交叉验证", "C. 看谁更会飞行", "D. 看头发颜色"],
        answer: "B",
        knowledgePoint: "猎巫叙事",
        analysis: "严肃研究强调档案交叉：麻瓜猎巫常波及无辜；同时魔法社会也有自身司法体系追踪真实黑巫师。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "猎巫浪潮对后世魔法教育的间接影响包括：",
        options: ["A. 霍格沃茨关闭", "B. 更强调隐蔽、纪律与「不在麻瓜前暴露」的行为规范", "C. 废除黑魔法防御课", "D. 取消魔杖"],
        answer: "B",
        knowledgePoint: "教育史",
        analysis: "集体创伤与立法推动「隐匿」成为默认伦理，进入校规与日常训练。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "为何不宜用单一道德标签概括「猎巫」？",
        options: ["A. 因为从未发生", "B. 事件跨越数百年与多地，动机含宗教、政治、地方恐慌与经济利益等复合因素", "C. 因为幽灵禁止讨论", "D. 因为考试不考"],
        answer: "B",
        knowledgePoint: "复杂性",
        analysis: "魔法史反对漫画式简化：同样是「审判」，背后可能是派系斗争、财政掠夺或纯粹恐慌，需要具体案例分析。"
      }
    ]
  },
  {
    lesson: 6, title: "保密时代的日常生活与身份管理",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "下列哪一项最符合保密法精神下的日常规范？",
        options: ["A. 在对角巷外向麻瓜演示漂浮咒取乐", "B. 在麻瓜面前把意外事件归因于自然原因并尽量减少魔法痕迹", "C. 强迫麻瓜相信魔法存在", "D. 公开刊登飞天扫帚广告"],
        answer: "B",
        knowledgePoint: "暴露处置",
        analysis: "最小化暴露、善后与遗忘程序（在授权框架内）是常态做法；公开表演通常违规。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "「麻瓜出身巫师」在保密法社会的史学议题通常聚焦于：",
        options: ["A. 他们不能使用魔杖", "B. 双重世界带来的身份张力与制度适应成本", "C. 他们不能进古灵阁", "D. 他们不受魔法部管辖"],
        answer: "B",
        knowledgePoint: "身份政治",
        analysis: "史学关注结构位置：家庭麻瓜社会与魔法社会的切换、偏见与机会差异，而非简单标签。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "魔法交通管理局历史上的争议往往围绕：",
        options: ["A. 颜料配方", "B. 便利与安全、保密暴露风险之间的平衡", "C. 魁地奇门票", "D. 巧克力蛙定价"],
        answer: "B",
        knowledgePoint: "治理史",
        analysis: "飞路网、门钥匙与飞天管制都涉及「速度/便利」与「可控/可追溯」的治理难题——档案里充满扯皮。"
      }
    ]
  },
  {
    lesson: 7, title: "妖精：工艺、信用与政治地位",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "古灵阁巫师银行在魔法经济史中的核心功能是：",
        options: ["A. 教授飞行", "B. 保管贵重物与货币清算，使大额魔法交易可行", "C. 发放霍格沃茨录取通知书", "D. 制定保密法"],
        answer: "B",
        knowledgePoint: "古灵阁",
        analysis: "古灵阁提供金库、铸币与信贷基础设施，是魔法资本主义与长途贸易的关键节点。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "妖精历史上与巫师政权冲突的根源常包括：",
        options: ["A. 对魔杖所有权与武器化的垄断", "B. 对器物「归属权」定义与工作成果分配的矛盾", "C. 对巧克力蛙画片的品味", "D. 对围巾颜色的偏好"],
        answer: "B",
        knowledgePoint: "族群关系",
        analysis: "妖精擅长锻造与金融却不被允许持有魔杖；对产物归属、租金与政策的分歧积累为结构性矛盾。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "魔法史讨论「妖精叛乱」时首先强调的是：",
        options: ["A. 单方面谴责一方", "B. 放在当时的法律、歧视与经济剥削结构中理解动员与暴力升级", "C. 叛乱从未发生", "D. 叛乱全是谣言"],
        answer: "B",
        knowledgePoint: "叛乱史",
        analysis: "教科书要求区分煽动者与结构性怨恨：叛乱往往是长期剥夺感在导火索事件上的爆发。"
      }
    ]
  },
  {
    lesson: 8, title: "妖精叛乱年表与魔法部应对",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔法部（及其前身）处理族群武装冲突时，最常见的后续手段类型是：",
        options: ["A. 假装没看见", "B. 谈判、立法收紧与武力镇压的组合——随年代与派系而变", "C. 把所有妖精流放月球", "D. 禁止巫师使用金币"],
        answer: "B",
        knowledgePoint: "镇压与谈判",
        analysis: "档案显示循环：冲突→停战协议→新的歧视性或妥协性条款→积压矛盾。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "为何金融从业者会在叛乱期间格外紧张？",
        options: ["A. 因为金价不变", "B. 信用体系依赖日常清算与信任，暴力事件会引发挤兑与停摆", "C. 因为幽灵会征税", "D. 因为魁地奇停赛"],
        answer: "B",
        knowledgePoint: "金融史",
        analysis: "古灵阁与社会支付链条绑定；动荡时期金库防守与政策临时管制会成为史料重点。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "从长时段看，「叛乱—改革」循环说明魔法英国政治：",
        options: ["A. 永远完美", "B. 常在危机后才被动调整权利边界", "C. 从不书写档案", "D. 没有族群矛盾"],
        answer: "B",
        knowledgePoint: "政治周期",
        analysis: "魔法史常见模式是危机驱动的渐进改革：平时维持不平等，冲击后才让步。"
      }
    ]
  },
  {
    lesson: 9, title: "巨人、边境与「他者」政策",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔法部对巨人等政策往往混合「威慑」与下列何种考量？",
        options: ["A. 时尚杂志封面", "B. 隔离、迁移与外交谈判以减少对巫师定居点的威胁", "C. 鼓励巨人参选部长", "D. 取消一切魔法武器"],
        answer: "B",
        knowledgePoint: "边境政策",
        analysis: "巨人战斗力强，政策常在军事威慑、安置与秘密外交之间摇摆。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "史学上警惕「巨人野蛮」单一叙事的原因是：",
        options: ["A. 巨人从不存在", "B. 宣传常服务于战争动员，掩盖具体部落差异与被挑衅的事实", "C. 叙事永远准确", "D. 魔法部禁止研究"],
        answer: "B",
        knowledgePoint: "批判叙事",
        analysis: "「野蛮他者」话语在历史上常被用来正当化驱逐与屠杀；魔法史要求核对多方来源。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "狼人政策史与巨人Policy的结构性相似点是：",
        options: ["A. 毫无关系", "B. 都可能把群体整体安全化，混同罪犯与无辜者", "C. 都鼓励公开聚集", "D. 都由魁地奇联盟制定"],
        answer: "B",
        knowledgePoint: "比较史",
        analysis: "非常态身份常被整体污名化；制度可能在「登记—隔离—排斥」上复制相似逻辑。"
      }
    ]
  },
  {
    lesson: 10, title: "近代：交通、通讯与魔法部扩张",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "飞路粉普及对魔法社会的主要影响是：",
        options: ["A. 取消霍格沃茨特快", "B. 提高人员与物资流动效率，同时增加炉网监管需求", "C. 使巫师全部失明", "D. 废除古灵阁"],
        answer: "B",
        knowledgePoint: "交通史",
        analysis: "便利伴随治理：炉网连接许可、监控与事故善后成为部里常年议程。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "魔法部科室增殖反映的历史趋势是：",
        options: ["A. 政府缩小", "B. 保密社会的治理任务增多：执法、交通、生物管控与国际协调", "C. 取消法律", "D. 废除学校"],
        answer: "B",
        knowledgePoint: "官僚化",
        analysis: "立法越多、技术越复杂，行政分支越细分——这也是近代魔法国家的普遍路径。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "国际魔法合作加强的直接动力常来自：",
        options: ["A. 巧克力蛙标准化", "B. 黑魔法、走私与保密被突破等跨国问题需要协调", "C. 统一校服", "D. 取消学院制"],
        answer: "B",
        knowledgePoint: "国际关系史",
        analysis: "现实威胁与条约义务推动联络机制；意识形态一致并非前提。"
      }
    ]
  },
  {
    lesson: 11, title: "二十世纪动荡：权力、恐怖与记忆政治",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔法史讨论「恐慌政治」时指的是：",
        options: ["A. 魁地奇赛场上喝彩", "B. 政权或派系利用恐惧巩固权力、压制异议", "C. 万圣节化妆", "D. 考试周复习"],
        answer: "B",
        knowledgePoint: "政治史",
        analysis: "恐惧可被操纵：制造内外敌人叙事以合理化紧急权力与暴力。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "「记忆篡改作为治理手段」在史学上的争议集中于：",
        options: ["A. 是否好吃", "B. 真相权、问责与民主监督是否被侵蚀", "C. 颜色是否鲜艳", "D. 是否利于种植草药"],
        answer: "B",
        knowledgePoint: "伦理史",
        analysis: "当集体记忆可被魔法改写，档案与证人证言的可靠性成为宪政-level的问题。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "霍格沃茨在政局动荡年代往往被迫扮演：",
        options: ["A. 中立避风港——尽管事实上常被渗透与政治化", "B. 永远纯粹的游乐场", "C. 古灵阁分行", "D. 魔法部附属监狱"],
        answer: "A",
        knowledgePoint: "制度张力",
        analysis: "学校理想上超越派系，但招生、课程与人事仍受时代政治挤压——史书屡见此类张力。"
      }
    ]
  },
  {
    lesson: 12, title: "如何写魔法史：史料、年表与论述",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "撰写魔法史论文时，首要步骤通常是：",
        options: ["A. 先写结论再找证据", "B. 明确问题、划定时空范围并列出可得史料类型", "C. 只引用幽灵口述", "D. 用占卜代替脚注"],
        answer: "B",
        knowledgePoint: "论文方法",
        analysis: "好的论述始于可检验的问题与清晰的时空边界，再匹配档案、器物与二手研究。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "「年表 + 地图 + 机构沿革」三合一对学生的帮助是：",
        options: ["A. 让笔记本更厚", "B. 把孤立事件放回空间与制度脉络中，减少年代错乱", "C. 取代思考", "D. 自动得分 O"],
        answer: "B",
        knowledgePoint: "学习策略",
        analysis: "可视化时间与空间有助于理解立法、战争与资源的联动。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "宾斯教授试卷里所谓「见解题」真正考查的是：",
        options: ["A. 抄写速度", "B. 能否用证据支撑因果判断，而非堆砌形容词", "C. 墨水颜色", "D. 是否睡着"],
        answer: "B",
        knowledgePoint: "评分逻辑",
        analysis: "高分论述需要明确论点—证据链—反例考虑；华丽辞藻不能替代史料支撑。"
      }
    ]
  }
];

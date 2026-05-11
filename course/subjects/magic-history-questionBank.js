/**
 * magic-history-questionBank.js
 * 魔法史·随堂测验题库
 * 教授：卡斯伯特·宾斯（幽灵）
 * 情境均为学术设定；不与原著情节逐句对应；31课与course.js课程表周课时扩展对齐（含六年级衔接纲要）*/

export const questionBank = [
  {
    lesson: 1, title: "魔法史：为什么要研究过去",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔法史课程最核心的学科目标是？",
        options: ["A. 背诵所有日期以应付考试", "B. 理解当下制度、法律与社会格局是如何在历史中形成的", "C. 证明古代巫师比现代巫师更强", "D. 收集幽灵教授的轶事"],
        answer: "B",
        knowledgePoint: "魔法史学科意义",
        analysis: "魔法史关注因果与结构的演变：保密法、魔法部、学院传统与族群关系都不是凭空出现，理解历史才能理解「为何今日如此规定」？"
      },
      {
        type: "choice", difficulty: "medium",
        text: "研究巫师与麻瓜关系史时，哪一种态度最符合严谨的魔法史方法论？",
        options: ["A. 只站在巫师立场谴责麻瓜", "B. 只站在麻瓜立场同情猎巫", "C. 区分史料、情境与后人叙事，比较多方记录再下结论", "D. 相信口头传说胜过档案"],
        answer: "C",
        knowledgePoint: "史学方法",
        analysis: "严谨做法是检视档案、法令与多种叙事，意识到记录者的立场与缺失；单一视角容易把复杂冲突简化成道德寓言。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "为何「年代错乱」在魔法史学习中尤其危险？",
        options: ["A. 幽灵教授不在乎年代", "B. 混淆先后会把因果颠倒，从而误解制度的最初用途", "C. 年代错了不影响考试", "D. 魔法史从不考查时间"],
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
        knowledgePoint: "教育理念",
        analysis: "创办者对「何种品质应被优先培养」有不同侧重；这种价值分歧被制度化为学院传统，并在数百年中不断被重新诠释。"
      }
    ]
  },
  {
    lesson: 3, title: "分院帽与学院制度的形成",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "分院帽在制度史上的角色最接近？",
        options: ["A. 装饰物", "B. 将创办者意志转化为可操作分拣程序的魔法造物", "C. 魁地奇裁判", "D. 魔药搅拌器"],
        answer: "B",
        knowledgePoint: "分院",
        analysis: "分院帽承载着创办者的意图与协商结果，把抽象的「培养路线」落实为每年新生的学院归属机制。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "学院制长期延续的主要原因不包括：",
        options: ["A. 形成认同与竞争以促进学习", "B. 便于组织住宿、管理与校内活动", "C. 保证血统纯洁——这是制度设计的公开目的", "D. 传统一旦成型，改革成本极高"],
        answer: "C",
        knowledgePoint: "学院",
        analysis: "学院制核心是培养路径与集体生活组织；「血统」并非四巨头公开宣称的统一制度目的（尽管历史上某些人物会强调血统）。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "从史学角度看，「帽子也会出错吗」这类争论的价值在于：",
        options: ["A. 证明帽子该报废", "B. 揭示人们对「分类」「命运」与自我选择的焦虑——争论本身是文化史材料", "C. 说明一年级学生最有发言权", "D. 证明占卜学更科学"],
        answer: "B",
        knowledgePoint: "观念",
        analysis: "制度是否完美常被争论反复提及；这些争论反映不同时代学生对身份、公平与成长的理解，是文化史而非单纯事实题。"
      }
    ]
  },
  {
    lesson: 4, title: "中世纪巫师社会鸟瞰",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "一年级绘制「粗年表」时，宾斯最看重的第一步是？",
        options: ["A. 先把形容词写满", "B. 标出地点层级与权力中心的大致时段", "C. 只抄课本插图", "D. 跳过中世纪直接进入保密法"],
        answer: "B",
        knowledgePoint: "鸟瞰",
        analysis: "鸟瞰强调形状与骨架：先把握聚落、权力与冲突高峰的时段位置，再逐年细化，避免一上来陷入细节而颠倒因果。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "在保密法尚未系统成型之前，巫师聚落更容易出现在哪种空间结构中？",
        options: ["A. 完全随机", "B. 依附贸易路线、集市与封建领地缝隙等便于隐匿与交流的节点", "C. 仅在月球", "D. 仅在海底"],
        answer: "B",
        knowledgePoint: "中世纪空间",
        analysis: "早期巫师网络依赖人与人之间的信任与物资流动；靠近集市与交通节点便于信息交换，但也要与麻瓜权力结构保持距离以降低暴露。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "为何魔法史要求「先鸟瞰后审判」？",
        options: ["A. 审判不重要", "B. 缺乏时空骨架时，道德判断容易替代因果解释", "C. 中世纪没有史学", "D. 幽灵禁止批评"],
        answer: "B",
        knowledgePoint: "方法论",
        analysis: "史学先把事件放回结构与时段，再讨论善恶责任；否则容易用现代道德口号覆盖当时的约束与选择集合。"
      }
    ]
  },
  {
    lesson: 5, title: "《国际巫师保密法》何以产生",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "保密法（语境设定）最核心的直接目标是？",
        options: ["A. 禁止巫师结婚", "B. 降低巫师社会被麻瓜系统性察觉与攻击的风险", "C. 取消魔杖登记", "D. 废除古灵阁"],
        answer: "B",
        knowledgePoint: "保密法宗旨",
        analysis: "在猎巫压力与冲突加剧的背景下，限制公开施法、规范隐匿与暴露处置，核心是集体安全与存续。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "保密法推行后，巫师社群结构更可能出现的长期变化是？",
        options: ["A. 完全与麻瓜混居且不隐藏", "B. 强化对角巷、霍格莫德式聚居与「麻瓜不可见」机制", "C. 巫师全部移居月球", "D. 取消魔法"],
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
    lesson: 6, title: "保密法的空间后果：聚居与遮蔽",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "保密法后魔法聚居区（如对角巷模型）对巫师社会的首要意义是？",
        options: ["A. 取消贸易", "B. 降低日常暴露风险并集中提供魔法服务", "C. 废除古灵阁", "D. 取消霍格沃茨"],
        answer: "B",
        knowledgePoint: "聚居逻辑",
        analysis: "聚居把暴露概率高的活动集中于可遮蔽、可监管的空间，配套许可与执法，形成「隐藏城市」式的运行模式。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "「人流跟风险走」在历史解释中主要指？",
        options: ["A. 魁地奇观众路线", "B. 店铺、交通枢纽与权力机构向低风险暴露节点聚集", "C. 随机搬家", "D. 只用飞路"],
        answer: "B",
        knowledgePoint: "空间经济",
        analysis: "风险定价重塑土地利用：人流聚集之处既是商业机会，也是巡逻、许可与罚款政策的焦点。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "霍格莫德式「同质聚居」在史学分析中的双刃剑是？",
        options: ["A. 没有弊端", "B. 降低事故率的同时可能加剧排外与偏见再生产", "C. 必然导致战争", "D. 使魔法失效"],
        answer: "B",
        knowledgePoint: "同质化",
        analysis: "同质社群便于合规与互助，也可能放大「我们/他们」叙事；魔法史要求描述机制而非只褒或只贬。"
      }
    ]
  },
  {
    lesson: 7, title: "猎巫：档案、无辜者与黑巫师",
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
        text: "猎巫浪潮对后世魔法教育的间接影响包括？",
        options: ["A. 霍格沃茨关闭", "B. 更强调隐蔽、纪律与「不在麻瓜前暴露」的行为规范", "C. 废除黑魔法防御课", "D. 取消魔杖"],
        answer: "B",
        knowledgePoint: "教育",
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
    lesson: 8, title: "校纪中的隐蔽伦理从何而来",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "「不许在麻瓜面前施法」进入校纪，史学上最常回溯的根源是：",
        options: ["A. 校长个人偏好", "B. 猎巫纪年与保密社会的集体创伤制度化", "C. 魁地奇规则外溢", "D. 魔药课安全守则"],
        answer: "B",
        knowledgePoint: "教育",
        analysis: "隐蔽伦理往往来自对外暴露风险的长期记忆，通过校纪传递给新一代，形成超越个人品德的制度约束。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "把创伤制度化与「单纯严厉」最根本的差别在于：",
        options: ["A. 没有差别", "B. 前者可在档案中找到立法、事故与修订链条", "C. 后者更温柔", "D. 前者禁止惩罚"],
        answer: "B",
        knowledgePoint: "制度分析",
        analysis: "史学追踪条文、处罚案例与修订理由；单纯严厉可能只是阶段性作风，缺乏可复核的结构轨迹。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "为何说校纪也是「意识形态装置」？",
        options: ["A. 校纪从不惩罚", "B. 它训练学生对保密秩序的自动化服从，塑造符合政权需求的日常身体", "C. 它与历史无关", "D. 它只约束幽灵"],
        answer: "B",
        knowledgePoint: "观念制度",
        analysis: "反复执行的规矩会把宏观立法转化为微观习惯；历史学家关注这种转化的机制与代价。"
      }
    ]
  },
  {
    lesson: 9, title: "双重生活：身份切换的政治",
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
        text: "身份切换的「政治性」体现在？",
        options: ["A. 只是心理不适", "B. 审查节点、惩罚梯度与资源获取在不同身份状态下不对称", "C. 与法律无关", "D. 只对幽灵有意义"],
        answer: "B",
        knowledgePoint: "治理微观",
        analysis: "谁更易被怀疑、谁更难获得救济，是制度性问题；魔法史要把私人叙事放回结构与政策语境。"
      }
    ]
  },
  {
    lesson: 10, title: "飞路网时代以前的出行与通信",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "飞路网普及之前，远距离信息传递更依赖？",
        options: ["A. 只用面对面喊话", "B. 猫头鹰邮政等低速但可达的网络", "C. 只用电视", "D. 取消通信"],
        answer: "B",
        knowledgePoint: "通信",
        analysis: "慢通信拉长决策链条，也使叛乱、谈判与立法节奏与今日不同——这是读年表时要调整的「时间感」。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "门钥匙与临时传送在史学上常被视作：",
        options: ["A. 人人平等的工具", "B. 精英更可得的流动性特权，伴随更高事故与政治敏感性", "C. 麻瓜发明", "D. 从未存在"],
        answer: "B",
        knowledgePoint: "交通阶级",
        analysis: "稀缺与高风险的传送手段常被权力集中分配；档案里多见许可、追责与隐瞒。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "为何宾斯把「飞路网以前的治理难题」称为后世科室扩张的伏笔？",
        options: ["A. 没有原因", "B. 流动性越低，边境与许可证问题仍以其他形式存在；技术变迁会把矛盾转移到监管机构", "C. 过去没有魔法", "D. 飞路网消灭了一切矛盾"],
        answer: "B",
        knowledgePoint: "长时段",
        analysis: "治理矛盾不会消失，只会迁移：从路程审批到炉网连接权，本质是控制暴露与秩序。"
      }
    ]
  },
  {
    lesson: 11, title: "古灵阁与魔法经济骨架",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "古灵阁巫师银行在魔法经济史中的核心功能是？",
        options: ["A. 教授飞行", "B. 保管贵重物与货币清算，使大额魔法交易可行", "C. 发放霍格沃茨录取通知书", "D. 制定保密法"],
        answer: "B",
        knowledgePoint: "古灵阁",
        analysis: "古灵阁提供金库、铸币与信贷基础设施，是魔法资本主义与长途贸易的关键节点。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "信托与清算体系直接影响魔法政治，是因为：",
        options: ["A. 银行从不贷款", "B. 赔偿、军费与叛乱善后都依赖可执行的支付链条", "C. 金币不能流通", "D. 妖精从不工作"],
        answer: "B",
        knowledgePoint: "财政政治",
        analysis: "当支付停摆，动员与镇压都会受阻；金融事件因此常成为政治史的转折点。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "「结构性依赖」在巫师—妖精关系中指：",
        options: ["A. 双方自愿喜爱", "B. 互相厌恶却仍被清算与工艺链条锁定在同一体系", "C. 完全独立", "D. 只有巫师单方面依赖"],
        answer: "B",
        knowledgePoint: "依赖理论",
        analysis: "权力不均未必终结合作；史学关注锁链如何形成，以及断裂时爆发的形态。"
      }
    ]
  },
  {
    lesson: 12, title: "妖精：魔杖禁令与早期冲突线索",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔杖禁令对妖精政治行动的根本限制是：",
        options: ["A. 禁止思考", "B. 剥夺以巫师方式进行自卫与对抗魔法暴力的对称手段", "C. 禁止储蓄", "D. 禁止飞行"],
        answer: "B",
        knowledgePoint: "权力不对称",
        analysis: "魔杖垄断重塑暴力与执法格局；禁令是理解后续动员形式（罢工、金融战等）的关键前置。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "器物归属权争议常表现为：",
        options: ["A. 无人关心", "B. 锻造者、购买者与国家法令对「谁拥有最终处分权」的定义冲突", "C. 只有口头玩笑", "D. 只发生在霍格沃茨"],
        answer: "B",
        knowledgePoint: "财产",
        analysis: "归属定义决定租金、税收与赔偿金流向；文本背后的利益才是史学要拆解的对象。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "魔法史讨论「妖精叛乱」时首先强调的是？",
        options: ["A. 单方面谴责一方", "B. 放在当时的法律、歧视与经济剥削结构中理解动员与暴力升级", "C. 叛乱从未发生", "D. 叛乱全是谣言"],
        answer: "B",
        knowledgePoint: "叛乱",
        analysis: "教科书要求区分煽动者与结构性怨恨：叛乱往往是长期剥夺感在导火索事件上的爆发。"
      }
    ]
  },
  {
    lesson: 13, title: "妖精叛乱年表精读（上）",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "精读叛乱年表时，第一步应划分？",
        options: ["A. 只写形容词", "B. 导火索—动员—首次暴力—相持等阶段", "C. 只抄人名", "D. 跳过阶段"],
        answer: "B",
        knowledgePoint: "分段",
        analysis: "阶段划分帮助识别机制转换点，避免把数月冲突压缩成单一「暴动」标签。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "动员往往依赖？",
        options: ["A. 随机运气", "B. 工匠网络、金库职员与地下传闻等既有社会联系", "C. 只有预言", "D. 只有一年级学生"],
        answer: "B",
        knowledgePoint: "动员机制",
        analysis: "没有网络，愤怒无法转化为持续行动；史学家因此在年表旁画「人群图」。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "分析魔法部公告词汇（如「恢复秩序」）时，高明做法是：",
        options: ["A. 全盘相信", "B. 拆解其掩盖的暴力分配与责任归属，而非据此选边站队", "C. 不许分析", "D. 只翻译成古诗"],
        answer: "B",
        knowledgePoint: "话语分析",
        analysis: "公告是政治行动的一部分；史学把它当作史料读，而不是当作判决。"
      }
    ]
  },
  {
    lesson: 14, title: "妖精叛乱年表精读（下）与金融停摆",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔法部处理族群武装冲突时，常见的后续组合是：",
        options: ["A. 只有一种手段", "B. 谈判、立法收紧与武力镇压随年代与派系变化而组合出现", "C. 从不谈判", "D. 自动赦免"],
        answer: "B",
        knowledgePoint: "镇压与谈判",
        analysis: "档案显示循环：冲突→停战协议→新的歧视性或妥协性条款→积压矛盾。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "挤兑与停摆为何会改变中立派立场？",
        options: ["A. 不影响任何人", "B. 日常支付中断把抽象政治冲突转化为生存级焦虑", "C. 只对妖精有影响", "D. 只会让大家更冷静"],
        answer: "B",
        knowledgePoint: "金融政治",
        analysis: "信用断裂时，公众更容易接受强硬措施或激进动员——史学家据此解释民意摆动。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "「叛乱—改革」循环说明：",
        options: ["A. 改革总在太平年代主动到来", "B. 权利边界常在危机后才被动调整", "C. 从不改革", "D. 改革与叛乱无关"],
        answer: "B",
        knowledgePoint: "政治周期",
        analysis: "魔法史常见模式是危机驱动的渐进改革：平时维持不平等，冲击后才让步。"
      }
    ]
  },
  {
    lesson: 15, title: "巨人政策与「野蛮」叙事批判",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔法部对巨人政策常混合威慑与？",
        options: ["A. 时尚评论", "B. 隔离、迁移与外交谈判以降低对巫师定居点威胁", "C. 强制联姻", "D. 取消边境"],
        answer: "B",
        knowledgePoint: "边境政策",
        analysis: "巨人战斗力强，政策常在军事威慑、安置与秘密外交之间摇摆。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "警惕「野蛮」单一叙事是因为：",
        options: ["A. 巨人不存在", "B. 动员宣传常掩盖部落差异与挑衅链条", "C. 叙事永远虚假", "D. 史学家不许批判"],
        answer: "B",
        knowledgePoint: "批判叙事",
        analysis: "「野蛮他者」话语在历史上常被用来正当化驱逐与屠杀；魔法史要求核对多方来源。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "把巨人政策与狼人登记政策比较，旨在：",
        options: ["A. 偷懒套模板", "B. 识别「整体污名化—登记—排斥」治理结构的重复", "C. 证明二者无关", "D. 取消比较"],
        answer: "B",
        knowledgePoint: "比较",
        analysis: "比较揭示结构而非替换细节：相似的是治理逻辑，不同的是具体族群语境。"
      }
    ]
  },
  {
    lesson: 16, title: "狼人登记与国际魔法合作入门",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "登记制度常与何种治理话语捆绑出现？",
        options: ["A. 娱乐话语", "B. 「公共安全」与对某类身体的可追溯管理", "C. 美术话语", "D. 魁地奇话语"],
        answer: "B",
        knowledgePoint: "安全话语",
        analysis: "安全叙事为监控提供合法性；史学家追问：谁定义危险、程序是否适度并与威胁相称？"
      },
      {
        type: "choice", difficulty: "medium",
        text: "国际魔法合作加强的常见现实动力是？",
        options: ["A. 统一校服", "B. 跨境逃逸、走私与保密突破需要协调", "C. 取消条约", "D. 消灭古灵阁"],
        answer: "B",
        knowledgePoint: "跨国治理",
        analysis: "威胁与供应链跨越国界时，单边立法不够用，条约与联络机制才扩张。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "为何「跨国协调」不等于「道德一致」？",
        options: ["A. 各国必善恶相反", "B. 各国可能在利益交换中妥协，容忍他国不公实践", "C. 条约从不存在", "D. 协调只靠幽灵"],
        answer: "B",
        knowledgePoint: "现实主义",
        analysis: "史学区分理想修辞与实际筹码：条约经常是权力博弈的结果。"
      }
    ]
  },
  {
    lesson: 17, title: "飞路网、交通司与部内扩张",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "飞路粉普及对魔法社会的主要影响是？",
        options: ["A. 取消霍格沃茨特快", "B. 提高流动效率并显著增加炉网监管需求", "C. 消灭猫头鹰", "D. 废除古灵阁"],
        answer: "B",
        knowledgePoint: "交通史",
        analysis: "便利伴随治理：连接许可、监控与事故善后推动科室细化。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "「连接权」为何具有政治性？",
        options: ["A. 连接权只是装修问题", "B. 掌握炉网节点等于掌握人流、征税与突发事件响应优势", "C. 无人关心", "D. 只对麻瓜有意义"],
        answer: "B",
        knowledgePoint: "基础设施政治",
        analysis: "关键节点常被争夺；史学家读连接图如同读选举地图。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "事故档案对书写交通司史的价值在于：",
        options: ["A. 事故不重要", "B. 事故往往是政策突变的前兆：追责、禁令与新科室诞生", "C. 档案不可靠", "D. 只有赞美"],
        answer: "B",
        knowledgePoint: "事件驱动立法",
        analysis: "灾难与丑闻把隐性矛盾公开化，迫使制度补丁出现。"
      }
    ]
  },
  {
    lesson: 18, title: "二十世纪：恐慌政治的机制",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "「恐慌政治」指的是？",
        options: ["A. 魁地奇喝彩", "B. 政权或派系利用恐惧巩固权力、压制异议", "C. 万圣节装扮", "D. 睡眠剥夺"],
        answer: "B",
        knowledgePoint: "政治",
        analysis: "恐惧可被操纵：制造内外敌人叙事以合理化紧急权力与暴力。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "阅读篇幅很长的「例外条款」时，较妥当的做法是？",
        options: ["A. 从不阅读", "B. 当你听见「为了安全」的口号时，核对权力授予范围与期限", "C. 只在放假阅读", "D. 交给宠物阅读"],
        answer: "B",
        knowledgePoint: "宪政敏感",
        analysis: "例外条款往往定义真正的权力扩张幅度；口号本身信息量有限。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "示范性审判在恐慌政治中的功能可能是：",
        options: ["A. 伸张绝对正义", "B. 通过戏剧化惩罚向公众演示「敌人样子」，巩固顺从", "C. 取消司法", "D. 与政治无关"],
        answer: "B",
        knowledgePoint: "司法政治",
        analysis: "史学关注审判的舞台效果与受众——这不削弱对个体正义的追求，但解释机制。"
      }
    ]
  },
  {
    lesson: 19, title: "记忆政治与史学伦理",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "「记忆篡改作为治理手段」引发的史学关切主要是：",
        options: ["A. 墨水美感", "B. 公共真相与问责链条是否被侵蚀", "C. 飞天扫帚库存", "D. 巧克力蛙包装"],
        answer: "B",
        knowledgePoint: "伦理",
        analysis: "当记忆可被系统性改写，档案与证言的可靠性成为核心宪政议题。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "档案缺口作为史料意味着？",
        options: ["A. 应当停止研究", "B. 删禁本身提示权力干预点，可与其他旁证交叉推断", "C. 缺口等于虚构", "D. 缺口随机"],
        answer: "B",
        knowledgePoint: "沉默史料",
        analysis: "缺席有时是刻意的；史学家学会「读洞」。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "史学伦理要求面对记忆魔法时：",
        options: ["A. 放弃求真", "B. 明确证据层级与不确定性，避免把推测写成定论", "C. 只信口述", "D. 只信报纸"],
        answer: "B",
        knowledgePoint: "认识论节制",
        analysis: "谦逊不是虚无：标出边界同样是学术诚实。"
      }
    ]
  },
  {
    lesson: 20, title: "霍格沃茨的制度应变史",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "霍格沃茨在动荡年代常被描述为「中立避风港」，史学修正在于？",
        options: ["A. 它从不中立", "B. 理想中立存在，但现实常有渗透、人事与课程政治", "C. 它与政治无关", "D. 它只培养政客"],
        answer: "B",
        knowledgePoint: "制度张力",
        analysis: "学校理想上超越派系，但招生、课程与人事仍受时代政治挤压。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "校园「沉默」作为史料时指：",
        options: ["A. 无人说话", "B. 不便记录、被禁止扩散或当事人回避的决策过程留下空白", "C. 只有幽灵沉默", "D. 沉默不可研究"],
        answer: "B",
        knowledgePoint: "政治微观",
        analysis: "空白与推迟公布同样是权力运作的痕迹。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "空间政治视角如何理解城堡通道？",
        options: ["A. 只是导航问题", "B. 密道与禁区分配反映安全焦虑、阶级与秘密政治", "C. 没有历史", "D. 只对皮皮鬼有意义"],
        answer: "B",
        knowledgePoint: "空间",
        analysis: "谁可走、谁不可走，是制度的肉身化。"
      }
    ]
  },
  {
    lesson: 21, title: "巫师出版、谣言与舆论史（简）",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "把报纸当史料时，首要警惕？",
        options: ["A. 纸张厚度", "B. 所有权、广告收入与政党立场对选题与措辞的塑造", "C. 插图颜色", "D. 售价整数"],
        answer: "B",
        knowledgePoint: "出版",
        analysis: "媒体不是透明窗口；经济依附与政治联盟会系统性偏移可见真相。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "更正栏之所以宝贵，是因为：",
        options: ["A. 从不更正", "B. 它暴露先前叙述的失败点与权力施压痕迹", "C. 只有诗歌", "D. 与政治无关"],
        answer: "B",
        knowledgePoint: "文本考古",
        analysis: "更正往往是斗争后的妥协文本；比对前后可知叙事如何被修补。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "辨析「事实陈述/推断/煽情修辞」的意义是：",
        options: ["A. 浪费时间", "B. 防止把修辞误当证据，把推断误当年代事实", "C. 三种一致", "D. 只对占卜有用"],
        answer: "B",
        knowledgePoint: "批判阅读",
        analysis: "考试与论文都要求你把三类语言分开标注。"
      }
    ]
  },
  {
    lesson: 22, title: "神秘事务司与保密档案（史学视角）",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "神秘事务司作为「制度黑箱」意味着？",
        options: ["A. 内部全无活动", "B. 外界难以观测决策过程，但可追踪其政策输出与边界推移", "C. 不可研究", "D. 等于谣言"],
        answer: "B",
        knowledgePoint: "黑箱治理",
        analysis: "输入不可见时，史学家从输出与间接痕迹推断结构与激励。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "脚注里的「参见受限」提示研究者：",
        options: ["A. 立即放弃", "B. 存在保密分级，需要寻找可替代的公开旁证或二次研究", "C. 必定造假", "D. 不用管它"],
        answer: "B",
        knowledgePoint: "分级档案",
        analysis: "禁区定义本身构成权力图谱的一部分。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "史学伦理上，追逐机密材料的边界是：",
        options: ["A. 没有边界", "B. 不得以危及他人安全的方式获取或散布仍在生效的机密", "C. 永远禁止写作", "D. 只对幽灵适用"],
        answer: "B",
        knowledgePoint: "研究伦理",
        analysis: "求真与守法、善良之间存在张力；论文题目设计要先评估可得性与后果。"
      }
    ]
  },
  {
    lesson: 23, title: "O.W.L. 魔法史：题型与证据链写作",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "论述题较稳妥的骨架是？",
        options: ["A. 先堆形容词", "B. 一句论点+若干条可分证据+对反例或限定条件的交代", "C. 只写年号", "D. 只抄题干"],
        answer: "B",
        knowledgePoint: "答题结构",
        analysis: "骨架确保阅卷者能扫描到你的推理链；华丽辞藻不能替代。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "同一页混用两种纪年而不说明会导致：",
        options: ["A. 加分", "B. 阅卷者无法复核因果先后，通常视为严重方法错误", "C. 自动 O", "D. 无人发现"],
        answer: "B",
        knowledgePoint: "年代规范",
        analysis: "纪年是因果判断的基础设施；混乱等同于逻辑断裂。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "「因果三句话」规则强调：",
        options: ["A. 越长越好", "B. 机制—条件—结果分层写出，每层可被单独检验", "C. 不许写原因", "D. 只写结果"],
        answer: "B",
        knowledgePoint: "因果分解",
        analysis: "分层写法帮助你自检哪里缺证据、哪里过度跳跃。"
      }
    ]
  },
  {
    lesson: 24, title: "O.W.L. 魔法史综合演习",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "限时考试中较理性的起手策略常是？",
        options: ["A. 从最难的空耗到底", "B. 先做分值密度高且熟练度高的题型", "C. 不做任何题", "D. 先折叠试卷"],
        answer: "B",
        knowledgePoint: "应试策略",
        analysis: "捡分不是丢人：先把确定的分数放入口袋，再攻克不确定项。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "遇到难题时更好的做法是：",
        options: ["A. 盯它直到交卷", "B. 留标记后跳转，避免意志资源单次耗尽", "C. 随机填同一选项", "D. 撕卷"],
        answer: "B",
        knowledgePoint: "认知负荷",
        analysis: "意志与注意力是稀缺资源；调度比蛮力更接近高分。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "复查清单中最常被忽略的致命项是：",
        options: ["A. 封面姓名", "B. 因果箭头方向是否写反、主语是否偷换", "C. 墨水品牌", "D. 桌椅高度"],
        answer: "B",
        knowledgePoint: "逻辑一致性",
        analysis: "许多错误来自方向与主语漂移，而非知识盲区。"
      }
    ]
  },
  {
    lesson: 25, title: "N.E.W.T. 史学方法与论文结构",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "N.E.W.T. 论文与低年级读后感的关键差别在于？",
        options: ["A. 字数更少", "B. 必须呈现可检验的问题意识与方法自觉", "C. 不许引用", "D. 不许脚注"],
        answer: "B",
        knowledgePoint: "论文进阶",
        analysis: "问题意识决定材料是否配得上篇幅；否则只是资料堆砌。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "二手研究在论文中的正确位置是？",
        options: ["A. 用来取代一手材料", "B. 与之对话：继承、修正或反驳其解释框架", "C. 只能附录", "D. 禁止出现"],
        answer: "B",
        knowledgePoint: "学术对话",
        analysis: "对话展示你的立场来源，而不是装饰门面。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "引用幽灵口述的限制主要是？",
        options: ["A. 幽灵从不说话", "B. 口述亦会选择性遗忘或被后世改写，需要情境标注与旁证", "C. 口述永远比档案高级", "D. 口述不算引用"],
        answer: "B",
        knowledgePoint: "口述",
        analysis: "口述是传统也是材料，仍需质检与交叉验证。"
      }
    ]
  },
  {
    lesson: 26, title: "血统话语史：争议史料精读",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "精读血统言论时，首先要还原？",
        options: ["A. 字体美感", "B. 听众是谁、言论在什么制度场合发表", "C. 说话者鞋子尺码", "D. 当日天气"],
        answer: "B",
        knowledgePoint: "语境还原",
        analysis: "同一句话对不同听众功能不同：动员、羞辱或自我安抚。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "话语「后果」链条可能包括：",
        options: ["A. 只有情绪", "B. 立法提案、校园排斥模式与暴力正当化叙事相互强化", "C. 从不影响现实", "D. 只影响幽灵"],
        answer: "B",
        knowledgePoint: "话语制度",
        analysis: "语言不只描述世界，也参与塑造可接受的暴力梯度。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "描述歧视结构为何不等于正当化歧视？",
        options: ["A. 二者相同", "B. 前者解释机制与后果，后者是为不公辩护；史学只做前者并明确规范立场", "C. 史学不许描述", "D. 史学必须辩护"],
        answer: "B",
        knowledgePoint: "规范与解释",
        analysis: "分析与谴责可以并存：分析回答「如何发生」，立场回答「为何不能接受」。"
      }
    ]
  },
  {
    lesson: 27, title: "「黑暗」叙事框架：史学不设剧情",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "史学反对「剧情片配乐式」叙事，主要指：",
        options: ["A. 不许写有趣的内容", "B. 用善恶标签替代对动员、资源与合法性崩溃的机制分析", "C. 不许写日期", "D. 不许写战争"],
        answer: "B",
        knowledgePoint: "反寓言",
        analysis: "戏剧化省略约束条件，会把复杂变迁写成童话。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "证据层级的常识排序通常是：",
        options: ["A. 传闻高于一手", "B. 档案与器物旁证优先于远距离二手传闻（需具体案情调整）", "C. 微博高于档案", "D. 不需要层级"],
        answer: "B",
        knowledgePoint: "证据",
        analysis: "层级帮助你在材料冲突时给出可辩护的取舍理由。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "崩溃后的「制度碎片」为何重要？",
        options: ["A. 碎片无意义", "B. 后续政权可能拾起碎片重组支配技术，形成路径依赖", "C. 碎片自动消失", "D. 只对考古有意义"],
        answer: "B",
        knowledgePoint: "路径依赖",
        analysis: "压迫工具不会随政权更替自动清零；史学追踪再利用。"
      }
    ]
  },
  {
    lesson: 28, title: "当代魔法治理与国际协调",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "条约网络下的主权让渡常表现为？",
        options: ["A. 取消国界", "B. 在保密执法、引渡或信息共享上接受联合程序", "C. 废除魔法", "D. 废除学校"],
        answer: "B",
        knowledgePoint: "条约治理",
        analysis: "让渡换来协作能力，也带来国内政治反弹——这是当代史的张力所在。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "国际协调失败时，常见的国内回应是？",
        options: ["A. 全民放假", "B. 更强边境审查与内部监视升级", "C. 自动和平", "D. 解散魔法部"],
        answer: "B",
        knowledgePoint: "安全螺旋",
        analysis: "外部失灵常被内部强硬派用作扩张筹码。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "把新闻标题还原为「制度参数」意味着？",
        options: ["A. 不看新闻", "B. 追问涉及的科室、权限、预算与先例，而非停在情绪", "C. 只相信标题", "D. 只抄标题"],
        answer: "B",
        knowledgePoint: "公共史学",
        analysis: "公民技艺是把喧嚣还原成可追问的结构问题。"
      }
    ]
  },
  {
    lesson: 29, title: "魔法—法律交界：判例史导论",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "判例思维强调？",
        options: ["A. 每次判决互不相关", "B. 相似事实如何在先例约束与区分技术下被处理", "C. 不许引用旧案", "D. 判例等于谣言"],
        answer: "B",
        knowledgePoint: "先例",
        analysis: "先例链帮助预测权力将如何解释模糊条文。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "「制度缝隙」通常滋养？",
        options: ["A. 绝对透明", "B. 灰色地带实践——弱者也可能利用缝隙求生", "C. 无实际意义", "D. 只有罪犯"],
        answer: "B",
        knowledgePoint: "缝隙政治",
        analysis: "缝隙既是压迫之所，也是抵抗与谈判空间；需具体案例。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "魔法史给法学提供的独特维度是？",
        options: ["A. 咒语发音", "B. 时间纵深：同一条文在不同恐慌周期的执行漂移", "C. 取消法学", "D. 只有图表"],
        answer: "B",
        knowledgePoint: "交叉学科",
        analysis: "法律文本不变也可「变脸」——历史解释执行层面的变迁。"
      }
    ]
  },
  {
    lesson: 30, title: "贯通复习：年表—地图—机制",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "贯通复习时，每条年表条目应能回答：",
        options: ["A. 只有好看的修辞", "B. 「所以呢」——它对结构与后续事件的约束是什么", "C. 不许提问", "D. 只背人名"],
        answer: "B",
        knowledgePoint: "压缩技术",
        analysis: "答不上「所以呢」说明条目仍是孤立事实。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "「三重对齐」指同一时间点上对齐？",
        options: ["A. 只有心情", "B. 地理—机构—族群/阶级位置", "C. 只有货币", "D. 只有课程"],
        answer: "B",
        knowledgePoint: "对齐",
        analysis: "对齐帮助你发现资源与暴力的耦合点。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "结构自述检测优于句子背诵，因为？",
        options: ["A. 句子从不重要", "B. 结构可迁移到新材料；句子换个词你就失效", "C. 结构不许考试", "D. 背诵更高分"],
        answer: "B",
        knowledgePoint: "迁移学习",
        analysis: "考试与新情境都在考迁移，而不是复读机。"
      }
    ]
  },
  {
    lesson: 31, title: "N.E.W.T. 冲刺：引用、口述与收尾",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "脚注的首要功能是？",
        options: ["A. 装饰页面", "B. 让读者复核你的证据来源与限定条件", "C. 隐藏引用", "D. 增加神秘感"],
        answer: "B",
        knowledgePoint: "学术诚实",
        analysis: "脚注是良心的地形图：哪里稳健，哪里推断，一目了然。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "口述材料若要进入核心论证，必须：",
        options: ["A. 无任何说明", "B. 标注讲述者身份、场合与已知偏见，并尽可能交叉验证", "C. 只需写「听说」", "D. 不许使用"],
        answer: "B",
        knowledgePoint: "口述规范",
        analysis: "口述珍贵但不自动为真；质检程序要写进方法段落。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "高分收尾段落通常？",
        options: ["A. 引入全新论点", "B. 收紧到本文证据所能支撑的边界，并明确指出未决问题", "C. 复制开头", "D. 只写口号"],
        answer: "B",
        knowledgePoint: "收尾伦理",
        analysis: "老实界定未知，比假装全知更接近N.E.W.T.的学术品格。"
      }
    ]
  }
];

// biology-questionBank.js
// 霍格沃茨生物课程 - 一年级随堂测验题库（完整版）
// 教授：塔维什·麦克拉伦
// 每课3题：basic（+2分）、medium（0分，全对得E）、hard（-1分）

export const questionBank = [
  // ==================== 第1章 认识生命（第1-3课） ====================
  {
    lesson: 1, title: "什么是生命",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列哪项不是生物的基本特征？", options: ["A. 新陈代谢", "B. 生长发育", "C. 能被魔法变形", "D. 繁殖后代"], answer: "C", knowledgePoint: "生物的基本特征", analysis: "生物的基本特征包括新陈代谢、生长发育、繁殖后代、遗传变异和应激性。被魔法变形不是判断生物的依据。" },
      { type: "choice", difficulty: "medium", text: "岩石在日晒雨淋下会风化碎裂，这是否属于生命现象？", options: ["A. 是，因为它在变化", "B. 是，因为它受环境影响", "C. 否，因为没有新陈代谢", "D. 否，因为它不能移动"], answer: "C", knowledgePoint: "生物与非生物的区别", analysis: "生命现象的核心是新陈代谢（摄取能量、排出废物）。岩石风化是物理化学变化，没有新陈代谢，不是生命现象。" },
      { type: "choice", difficulty: "hard", text: "曼德拉草会在被拔出时发出叫声——麦克拉伦说这证明它有什么生物特征？", options: ["A. 繁殖能力", "B. 应激性（对外界刺激作出反应）", "C. 新陈代谢", "D. 遗传变异"], answer: "B", knowledgePoint: "应激性", analysis: "对外界刺激作出反应叫应激性，是生物的基本特征之一。曼德拉草发出叫声是对被拔出这一刺激的反应。" }
    ]
  },
  {
    lesson: 2, title: "生物的分类",
    questions: [
      { type: "choice", difficulty: "basic", text: "生物分类的基本单位是：", options: ["A. 界", "B. 门", "C. 种", "D. 属"], answer: "C", knowledgePoint: "分类等级", analysis: "种是生物分类的最基本单位，同种生物之间能自然交配并产生可育后代。" },
      { type: "choice", difficulty: "medium", text: "双名法命名中，生物的学名由哪两部分组成？", options: ["A. 科名＋种名", "B. 属名＋种名", "C. 纲名＋种名", "D. 目名＋种名"], answer: "B", knowledgePoint: "双名法", analysis: "林奈双名法：学名由属名（斜体，首字母大写）和种名（斜体，小写）组成。" },
      { type: "choice", difficulty: "hard", text: "狮子和老虎都属于豹属（Panthera），但不属于同一种。判断它们不是同一种的依据最主要是：", options: ["A. 外形差异很大", "B. 生活环境不同", "C. 自然状态下不交配，后代不可育", "D. 食物来源不同"], answer: "C", knowledgePoint: "物种概念", analysis: "判断是否同一物种的标准是：自然状态下能否交配并产生可育后代。狮虎兽虽能人工杂交，但后代不可育，故仍为不同种。" }
    ]
  },
  {
    lesson: 3, title: "显微镜的使用",
    questions: [
      { type: "choice", difficulty: "basic", text: "使用显微镜时，调节视野亮度的部件是：", options: ["A. 目镜", "B. 物镜", "C. 反光镜", "D. 载物台"], answer: "C", knowledgePoint: "显微镜结构", analysis: "反光镜（配合光圈）用于调节进入显微镜的光量，从而控制视野亮度。" },
      { type: "choice", difficulty: "medium", text: "使用显微镜观察时，正确的操作顺序是：", options: ["A. 先高倍镜后低倍镜", "B. 先低倍镜后高倍镜", "C. 直接用高倍镜", "D. 高低倍均可，顺序无所谓"], answer: "B", knowledgePoint: "显微镜使用步骤", analysis: "低倍镜视野大，容易找到目标；找到后换高倍镜放大观察细节。顺序不能颠倒。" },
      { type: "choice", difficulty: "hard", text: "制作临时装片时，盖盖玻片的正确方法是：", options: ["A. 直接盖下，速度要快", "B. 让盖玻片一端先接触水滴，再缓缓放下", "C. 用镊子夹住盖玻片两端同时放下", "D. 先滴碘液再盖玻片"], answer: "B", knowledgePoint: "临时装片制作", analysis: "一端先接触再缓放，能让水逐渐填满，避免产生气泡影响观察。" }
    ]
  },

  // ==================== 第2章 生物与环境（第4-7课） ====================
  {
    lesson: 4, title: "生物与生物的关系",
    questions: [
      { type: "choice", difficulty: "basic", text: "蜜蜂为花朵传粉，同时采集花蜜，这种关系属于：", options: ["A. 捕食关系", "B. 竞争关系", "C. 寄生关系", "D. 互利共生"], answer: "D", knowledgePoint: "种间关系", analysis: "双方都从关系中获益（蜜蜂得到花蜜，花朵得到传粉），称为互利共生。" },
      { type: "choice", difficulty: "medium", text: "大草鱼和小草鱼都以水草为食，它们之间主要是：", options: ["A. 捕食关系", "B. 共生关系", "C. 竞争关系", "D. 寄生关系"], answer: "C", knowledgePoint: "竞争关系", analysis: "两者争夺相同的食物资源，是竞争关系。" },
      { type: "choice", difficulty: "hard", text: "禁林中，某种真菌附着在树根上：树提供有机物给真菌，真菌帮助树根吸收水分和无机盐。这是：", options: ["A. 寄生", "B. 竞争", "C. 互利共生（菌根）", "D. 捕食"], answer: "C", knowledgePoint: "菌根与共生", analysis: "这是典型的菌根共生：真菌（菌根菌）与植物根系互利共生，是自然界中极为普遍的共生现象。" }
    ]
  },
  {
    lesson: 5, title: "生物与环境的适应",
    questions: [
      { type: "choice", difficulty: "basic", text: "变色龙通过改变体色融入环境，这属于：", options: ["A. 警戒色", "B. 保护色", "C. 拟态", "D. 变异"], answer: "B", knowledgePoint: "保护色", analysis: "体色与环境颜色相近，使天敌难以发现，称为保护色。" },
      { type: "choice", difficulty: "medium", text: "竹节虫的身体形态像竹枝，这是：", options: ["A. 保护色", "B. 警戒色", "C. 拟态", "D. 突变"], answer: "C", knowledgePoint: "拟态", analysis: "拟态是指生物的外形模仿另一种生物或非生物，以逃避天敌。竹节虫模仿竹枝形态属于拟态。" },
      { type: "choice", difficulty: "hard", text: "沙漠仙人掌叶变为刺，茎膨大储水。这说明生物的形态结构是：", options: ["A. 生物主动选择的结果", "B. 对环境的适应（自然选择的结果）", "C. 随机发生的", "D. 与环境无关"], answer: "B", knowledgePoint: "适应的形成", analysis: "仙人掌的特征是在干旱环境中经长期自然选择保留下来的有利变异，不是主动选择，而是被动筛选的结果。" }
    ]
  },
  {
    lesson: 6, title: "生态系统的组成",
    questions: [
      { type: "choice", difficulty: "basic", text: "生态系统中，通过光合作用制造有机物的成分称为：", options: ["A. 消费者", "B. 分解者", "C. 生产者", "D. 非生物成分"], answer: "C", knowledgePoint: "生产者", analysis: "植物等能利用光能合成有机物的生物称为生产者，是生态系统中最基础的营养级。" },
      { type: "choice", difficulty: "medium", text: "食物链"草→兔→狐"中，能量流动方向是：", options: ["A. 狐→兔→草", "B. 草→兔→狐", "C. 双向流动", "D. 随机方向"], answer: "B", knowledgePoint: "能量流动方向", analysis: "能量沿食物链从生产者流向高营养级，方向单一，不可逆转。" },
      { type: "choice", difficulty: "hard", text: "生态系统中，分解者的作用是：", options: ["A. 消耗氧气", "B. 将有机物分解为无机物，归还到环境中", "C. 直接进行光合作用", "D. 捕食生产者"], answer: "B", knowledgePoint: "分解者功能", analysis: "分解者（细菌、真菌等）将动植物遗体中的有机物分解为无机盐、CO₂和水，使物质能在生态系统中循环利用。" }
    ]
  },
  {
    lesson: 7, title: "生态系统的稳定性",
    questions: [
      { type: "choice", difficulty: "basic", text: "生态系统的自我调节能力是：", options: ["A. 无限的", "B. 有限的", "C. 恒定不变的", "D. 与物种数量无关"], answer: "B", knowledgePoint: "自我调节能力的限度", analysis: "生态系统有一定的自我调节能力，但这种能力是有限的，超过限度会导致生态失衡。" },
      { type: "choice", difficulty: "medium", text: "一般来说，生物种类越多的生态系统，其自我调节能力：", options: ["A. 越弱", "B. 越强", "C. 不变", "D. 无法判断"], answer: "B", knowledgePoint: "生物多样性与稳定性", analysis: "生物种类越多，食物网越复杂，当某一物种减少时有更多替代路径，稳定性越高。" },
      { type: "choice", difficulty: "hard", text: "禁林作为相对封闭的生态系统，即使没有人类干预也能维持平衡，主要依靠：", options: ["A. 魔法保护结界", "B. 物种间的相互制约和物质循环", "C. 定期人工补充物种", "D. 绝对不受外界影响"], answer: "B", knowledgePoint: "生态平衡机制", analysis: "自然生态系统的平衡依靠物种间的捕食、竞争等相互制约关系，以及物质和能量的循环流动来维持。" }
    ]
  },

  // ==================== 第3章 细胞（第8-12课） ====================
  {
    lesson: 8, title: "细胞的基本结构",
    questions: [
      { type: "choice", difficulty: "basic", text: "细胞膜的主要功能是：", options: ["A. 控制物质进出细胞", "B. 进行光合作用", "C. 储存遗传信息", "D. 提供能量"], answer: "A", knowledgePoint: "细胞膜功能", analysis: "细胞膜具有选择透过性，控制物质进出，维持细胞内环境的稳定。" },
      { type: "choice", difficulty: "medium", text: "细胞进行生命活动所需能量的转化场所是：", options: ["A. 细胞核", "B. 细胞膜", "C. 线粒体", "D. 液泡"], answer: "C", knowledgePoint: "线粒体功能", analysis: "线粒体是细胞进行有氧呼吸的主要场所，将有机物中的化学能转化为细胞可直接利用的能量（ATP）。" },
      { type: "choice", difficulty: "hard", text: "曼德拉草是植物。下列哪组结构是曼德拉草细胞有而人类细胞没有的？", options: ["A. 细胞膜、细胞核、线粒体", "B. 细胞壁、叶绿体、液泡", "C. 细胞核、线粒体、液泡", "D. 细胞壁、细胞核、线粒体"], answer: "B", knowledgePoint: "植物细胞特有结构", analysis: "植物细胞特有结构：细胞壁（提供支撑）、叶绿体（光合作用）、液泡（储存细胞液）。动物细胞没有这三种结构。" }
    ]
  },
  {
    lesson: 9, title: "植物细胞与动物细胞的比较",
    questions: [
      { type: "choice", difficulty: "basic", text: "植物细胞和动物细胞都具有的结构是：", options: ["A. 细胞壁", "B. 叶绿体", "C. 液泡", "D. 细胞核"], answer: "D", knowledgePoint: "共有结构", analysis: "细胞核、细胞膜、细胞质和线粒体是植物细胞和动物细胞共有的基本结构。" },
      { type: "choice", difficulty: "medium", text: "将洋葱表皮细胞放入浓盐水中，液泡会：", options: ["A. 吸水膨胀", "B. 失水缩小", "C. 不变化", "D. 消失"], answer: "B", knowledgePoint: "渗透作用", analysis: "浓盐水溶液浓度高于细胞液，细胞通过渗透作用失水，液泡缩小，发生质壁分离。" },
      { type: "choice", difficulty: "hard", text: "动物细胞没有细胞壁，这使得动物细胞与植物细胞相比：", options: ["A. 形状更固定", "B. 形态更灵活多变", "C. 更不容易变形", "D. 抵抗外力更强"], answer: "B", knowledgePoint: "细胞壁的作用", analysis: "细胞壁给植物细胞提供固定形态和支撑。动物细胞没有细胞壁，形态更灵活，这与动物需要运动和吞噬等功能相适应。" }
    ]
  },
  {
    lesson: 10, title: "细胞的生命活动",
    questions: [
      { type: "choice", difficulty: "basic", text: "细胞进行呼吸作用的目的是：", options: ["A. 储存氧气", "B. 分解有机物，释放能量", "C. 合成有机物", "D. 排出CO₂"], answer: "B", knowledgePoint: "呼吸作用", analysis: "细胞呼吸（细胞呼吸）分解有机物，释放能量供细胞生命活动使用，CO₂是副产物。" },
      { type: "choice", difficulty: "medium", text: "光合作用的原料是：", options: ["A. 葡萄糖和O₂", "B. CO₂和H₂O", "C. 淀粉和H₂O", "D. CO₂和O₂"], answer: "B", knowledgePoint: "光合作用原料", analysis: "光合作用：CO₂＋H₂O→（光能、叶绿体）→有机物＋O₂。原料是CO₂和水，产物是有机物和氧气。" },
      { type: "choice", difficulty: "hard", text: "白天植物既进行光合作用又进行呼吸作用，净表现为释放O₂。这说明白天：", options: ["A. 只进行光合作用", "B. 光合速率 > 呼吸速率", "C. 光合速率 < 呼吸速率", "D. 两者速率相等"], answer: "B", knowledgePoint: "光合与呼吸的关系", analysis: "白天光照充足，光合速率超过呼吸速率，有机物净积累，O₂净释放。夜间无光合，只有呼吸，释放CO₂。" }
    ]
  },
  {
    lesson: 11, title: "细胞的分裂",
    questions: [
      { type: "choice", difficulty: "basic", text: "细胞分裂的直接结果是：", options: ["A. 细胞体积增大", "B. 细胞数量增多", "C. 细胞功能分化", "D. 染色体数目减半"], answer: "B", knowledgePoint: "细胞分裂的结果", analysis: "细胞分裂（有丝分裂）使细胞数量加倍，子细胞与母细胞遗传物质相同。" },
      { type: "choice", difficulty: "medium", text: "细胞分裂前，需要先进行的关键准备是：", options: ["A. 合成更多叶绿素", "B. DNA复制（遗传物质加倍）", "C. 细胞膜增厚", "D. 线粒体消失"], answer: "B", knowledgePoint: "DNA复制", analysis: "细胞分裂前必须先进行DNA复制，使遗传信息加倍，确保子细胞各得到一份完整的遗传信息。" },
      { type: "choice", difficulty: "hard", text: "生物体生长的原因包括：", options: ["A. 只是细胞体积增大", "B. 只是细胞数量增多", "C. 细胞数量增多和细胞体积增大共同作用", "D. 细胞种类增多"], answer: "C", knowledgePoint: "生物体生长的原因", analysis: "生物体生长既依赖细胞分裂（增加数量），也依赖细胞生长（增大体积），两者共同作用。" }
    ]
  },
  {
    lesson: 12, title: "组织、器官与系统",
    questions: [
      { type: "choice", difficulty: "basic", text: "由形态相似、功能相同的细胞群组成的结构叫：", options: ["A. 器官", "B. 系统", "C. 组织", "D. 细胞群落"], answer: "C", knowledgePoint: "组织的定义", analysis: "细胞→组织→器官→系统→生物体，这是多细胞生物的结构层次。" },
      { type: "choice", difficulty: "medium", text: "心脏属于：", options: ["A. 细胞", "B. 组织", "C. 器官", "D. 系统"], answer: "C", knowledgePoint: "器官的概念", analysis: "心脏由心肌组织、上皮组织、结缔组织等多种组织构成，能完成泵血这一特定功能，是器官。" },
      { type: "choice", difficulty: "hard", text: "植物和动物的结构层次有何区别？", options: ["A. 植物没有组织层次", "B. 植物没有系统层次（器官直接构成植物体）", "C. 动物没有器官层次", "D. 两者结构层次完全相同"], answer: "B", knowledgePoint: "植物与动物结构层次比较", analysis: "动物：细胞→组织→器官→系统→动物体。植物：细胞→组织→器官→植物体（植物没有系统这一层次）。" }
    ]
  },

  // ==================== 第4章 期中复习与考试（第13-14课） ====================
  {
    lesson: 13, title: "期中复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "期中考试的范围覆盖前几章？", options: ["A. 第1章", "B. 第1-2章", "C. 第1-3章（第1-12课）", "D. 全部章节"], answer: "C", knowledgePoint: "考试范围", analysis: "期中考试覆盖第1-3章，即第1-12课的全部内容。" },
      { type: "choice", difficulty: "medium", text: "下列关于植物细胞和动物细胞，说法正确的是：", options: ["A. 动物细胞有细胞壁，植物细胞没有", "B. 植物细胞有液泡，动物细胞通常没有", "C. 两者都有叶绿体", "D. 线粒体只在植物细胞中存在"], answer: "B", knowledgePoint: "细胞结构综合", analysis: "植物细胞特有：细胞壁、叶绿体（绿色部分）、液泡。动物细胞无这三种结构。两者都有细胞膜、细胞核、线粒体。" },
      { type: "choice", difficulty: "hard", text: "下列食物链中，正确的是：", options: ["A. 阳光→草→兔→狐", "B. 狐→兔→草", "C. 草→兔→狐", "D. 兔→草→狐"], answer: "C", knowledgePoint: "食物链书写", analysis: "食物链从生产者（植物）开始，箭头指向消费者，表示能量流动方向。阳光不是生物，不写入食物链。" }
    ]
  },
  {
    lesson: 14, title: "期中考试",
    questions: [
      { type: "choice", difficulty: "basic", text: "生物学研究生命现象的基本方法是：", options: ["A. 观察法", "B. 实验法", "C. 调查法", "D. 以上都是科学方法"], answer: "D", knowledgePoint: "科学方法", analysis: "观察、实验、调查都是生物学研究常用的科学方法，相互配合使用。" },
      { type: "choice", difficulty: "medium", text: "蚜虫吸食植物汁液生存，植物因此受损。蚜虫与植物的关系是：", options: ["A. 互利共生", "B. 竞争", "C. 寄生", "D. 捕食"], answer: "C", knowledgePoint: "寄生关系", analysis: "寄生：一方（寄生者）依靠吸取另一方（宿主）的营养生活，宿主受害。蚜虫依附植物、吸食汁液属于寄生。" },
      { type: "choice", difficulty: "hard", text: "生态系统中，物质可以循环利用，而能量不能，原因是：", options: ["A. 物质比能量重要", "B. 能量在传递中以热能散失，不可逆转", "C. 物质数量无限", "D. 生产者不断补充能量"], answer: "B", knowledgePoint: "物质循环与能量流动的区别", analysis: "物质（碳、氮等）在生物与无机环境间循环，可被反复利用。能量沿食物链单向流动，每次传递都有热能散失，热能不能再被利用，故能量不可循环。" }
    ]
  },

  // ==================== 第5章 绿色植物（第15-19课） ====================
  {
    lesson: 15, title: "绿色植物的结构层次",
    questions: [
      { type: "choice", difficulty: "basic", text: "绿色植物的六大器官是：", options: ["A. 根、茎、叶、花、果实、种子", "B. 根、茎、叶、花、细胞、组织", "C. 根、茎、叶、花、果实、系统", "D. 根、茎、叶、枝、花、果实"], answer: "A", knowledgePoint: "植物六大器官", analysis: "绿色植物的六大器官：根（吸收）、茎（运输支撑）、叶（光合）、花（繁殖）、果实（保护种子）、种子（繁殖）。" },
      { type: "choice", difficulty: "medium", text: "植物的营养器官是：", options: ["A. 花、果实、种子", "B. 根、茎、叶", "C. 根、茎、花", "D. 茎、叶、种子"], answer: "B", knowledgePoint: "营养器官与生殖器官", analysis: "根、茎、叶负责植物的营养（吸收、运输、光合），称为营养器官。花、果实、种子负责生殖，称为生殖器官。" },
      { type: "choice", difficulty: "hard", text: "植物组织中，负责运输水和有机物的组织是：", options: ["A. 保护组织", "B. 输导组织", "C. 机械组织", "D. 分生组织"], answer: "B", knowledgePoint: "输导组织", analysis: "输导组织由导管（运水和无机盐，从根到叶）和筛管（运有机物，从叶到其他部分）组成，是植物特有的组织类型。" }
    ]
  },
  {
    lesson: 16, title: "根与茎的结构和功能",
    questions: [
      { type: "choice", difficulty: "basic", text: "植物根部吸收水分的主要区域是：", options: ["A. 根冠", "B. 分生区", "C. 成熟区（根毛区）", "D. 伸长区"], answer: "C", knowledgePoint: "根的吸收区域", analysis: "成熟区表皮细胞向外突出形成根毛，大大增加了吸收面积，是根吸收水和无机盐的主要区域。" },
      { type: "choice", difficulty: "medium", text: "木本植物茎中，负责运输水分（由下向上）的结构是：", options: ["A. 树皮", "B. 木质部（导管）", "C. 韧皮部（筛管）", "D. 形成层"], answer: "B", knowledgePoint: "茎的运输功能", analysis: "木质部中的导管运输水和无机盐（从根向上到叶）；韧皮部中的筛管运输有机物（从叶向下到各部分）。" },
      { type: "choice", difficulty: "hard", text: "环剥树皮（切断韧皮部）后，被剥处上方树干会膨大，原因是：", options: ["A. 水分积累", "B. 有机物（糖类）无法向下运输，积累在剥口上方", "C. 细菌感染导致肿胀", "D. 导管被切断，水分停留"], answer: "B", knowledgePoint: "韧皮部功能验证", analysis: "韧皮部（筛管）运输有机物从叶向下。环剥切断筛管后，叶光合产生的有机物无法向下运输，积累在剥口上方，导致膨大。这是经典的环剥实验现象。" }
    ]
  },
  {
    lesson: 17, title: "叶与光合作用",
    questions: [
      { type: "choice", difficulty: "basic", text: "叶肉细胞中，进行光合作用的细胞器是：", options: ["A. 线粒体", "B. 液泡", "C. 叶绿体", "D. 细胞核"], answer: "C", knowledgePoint: "叶绿体", analysis: "叶绿体含有叶绿素等光合色素，能吸收光能，是光合作用的场所。" },
      { type: "choice", difficulty: "medium", text: "光合作用的产物是：", options: ["A. CO₂和H₂O", "B. 有机物（葡萄糖）和O₂", "C. 无机盐和H₂O", "D. CO₂和有机物"], answer: "B", knowledgePoint: "光合作用产物", analysis: "光合作用：6CO₂ + 6H₂O →（光能、叶绿体）→ C₆H₁₂O₆ + 6O₂。产物是葡萄糖和氧气。" },
      { type: "choice", difficulty: "hard", text: "叶片正面颜色比背面深绿，原因是：", options: ["A. 正面细胞更大", "B. 正面栅栏层细胞排列紧密、叶绿体多", "C. 背面气孔更多散失叶绿素", "D. 正面表皮细胞含叶绿体"], answer: "B", knowledgePoint: "叶片结构", analysis: "叶肉分为栅栏层（正面，柱形细胞排列紧密，叶绿体多）和海绵层（背面，排列疏松，叶绿体少）。栅栏层接受光照多，光合效率更高。" }
    ]
  },
  {
    lesson: 18, title: "蒸腾作用与水分运输",
    questions: [
      { type: "choice", difficulty: "basic", text: "植物散失水分的主要部位是：", options: ["A. 根", "B. 茎", "C. 叶片（气孔）", "D. 花"], answer: "C", knowledgePoint: "蒸腾作用部位", analysis: "蒸腾作用主要通过叶片表面的气孔进行，少量通过茎的皮孔散失。" },
      { type: "choice", difficulty: "medium", text: "蒸腾作用对植物的主要意义是：", options: ["A. 产生氧气", "B. 为光合作用提供CO₂", "C. 产生拉力促进水分和无机盐从根向上运输", "D. 降低植物体温"], answer: "C", knowledgePoint: "蒸腾作用的意义", analysis: "蒸腾作用的核心意义：叶片散失水分→产生负压（拉力）→拉动根部水分和无机盐沿导管向上运输。同时也有降温作用（次要）。" },
      { type: "choice", difficulty: "hard", text: "阴天与晴天相比，植物蒸腾速率降低，原因主要是：", options: ["A. 温度低，气孔关闭", "B. 光照弱，气孔开放程度减小，同时温度低，蒸发减弱", "C. CO₂浓度高", "D. 根部吸水减少"], answer: "B", knowledgePoint: "影响蒸腾速率的因素", analysis: "影响蒸腾速率的主要因素：光照（影响气孔开放）、温度（影响蒸发）、湿度（影响水蒸气扩散）、风速。阴天光弱温低，两者都使蒸腾减弱。" }
    ]
  },
  {
    lesson: 19, title: "花、果实与种子",
    questions: [
      { type: "choice", difficulty: "basic", text: "花的哪个部分发育成果实？", options: ["A. 花瓣", "B. 花萼", "C. 子房", "D. 花柱"], answer: "C", knowledgePoint: "果实的发育", analysis: "受精后，子房发育成果实：子房壁→果皮，受精卵→胚，受精的胚珠→种子。" },
      { type: "choice", difficulty: "medium", text: "种子萌发所需的内部条件是：", options: ["A. 适量水分", "B. 适宜温度", "C. 充足空气（O₂）", "D. 种子本身有活力（胚完好）"], answer: "D", knowledgePoint: "种子萌发条件", analysis: "种子萌发的内部条件：种子本身有活力（胚是活的）；外部条件：适量水分、适宜温度、充足空气。" },
      { type: "choice", difficulty: "hard", text: "自花传粉和异花传粉相比，异花传粉的优势在于：", options: ["A. 更简单，不依赖媒介", "B. 后代遗传多样性更高，适应环境能力更强", "C. 后代数量更多", "D. 能在恶劣天气完成传粉"], answer: "B", knowledgePoint: "传粉方式的比较", analysis: "异花传粉引入了其他个体的遗传信息，后代遗传多样性更高，自然选择的材料更丰富，长期进化上更有利。自花传粉更简单，但后代遗传单一。" }
    ]
  },

  // ==================== 第6章 人体（第20-26课） ====================
  {
    lesson: 20, title: "消化系统",
    questions: [
      { type: "choice", difficulty: "basic", text: "消化食物和吸收营养的主要场所是：", options: ["A. 胃", "B. 小肠", "C. 大肠", "D. 食道"], answer: "B", knowledgePoint: "小肠功能", analysis: "小肠是消化和吸收的主要场所：内壁有皱褶和绒毛，大大增加吸收面积；接受胰液、胆汁、肠液的共同作用。" },
      { type: "choice", difficulty: "medium", text: "胆汁由肝脏分泌，其作用是：", options: ["A. 直接分解脂肪", "B. 将脂肪乳化成小颗粒（促进消化）", "C. 杀死食物中的细菌", "D. 中和胃酸"], answer: "B", knowledgePoint: "胆汁作用", analysis: "胆汁不含消化酶，但能乳化脂肪：将大脂肪滴乳化为微小颗粒，增大与脂肪酶的接触面积，促进脂肪消化。" },
      { type: "choice", difficulty: "hard", text: "波姆弗雷医生需了解消化系统，才能处理学生因吃错食物引发的腹痛。下列关于淀粉消化的顺序，正确的是：", options: ["A. 淀粉→麦芽糖（口腔）→葡萄糖（小肠）", "B. 淀粉→葡萄糖（胃）", "C. 淀粉→脂肪酸（小肠）", "D. 淀粉不需要消化直接吸收"], answer: "A", knowledgePoint: "淀粉消化过程", analysis: "淀粉消化：口腔（唾液淀粉酶）→麦芽糖→小肠（麦芽糖酶等）→葡萄糖，葡萄糖经小肠绒毛吸收入血液。" }
    ]
  },
  {
    lesson: 21, title: "营养物质与健康",
    questions: [
      { type: "choice", difficulty: "basic", text: "为人体提供能量的三大营养物质是：", options: ["A. 蛋白质、维生素、无机盐", "B. 糖类、脂肪、蛋白质", "C. 糖类、维生素、水", "D. 脂肪、无机盐、水"], answer: "B", knowledgePoint: "三大供能物质", analysis: "糖类（主要能源）、脂肪（储备能源）、蛋白质（备用能源，主要用于构建组织）是三大供能物质。" },
      { type: "choice", difficulty: "medium", text: "缺乏维生素C会导致：", options: ["A. 夜盲症", "B. 坏血病", "C. 佝偻病", "D. 脚气病"], answer: "B", knowledgePoint: "维生素缺乏症", analysis: "维生素C缺乏→坏血病（牙龈出血、伤口不愈合）；维生素A缺乏→夜盲症；维生素D缺乏→佝偻病；维生素B₁缺乏→脚气病。" },
      { type: "choice", difficulty: "hard", text: "魔法世界的饮食丰盛，但均衡营养同样重要。长期只吃精白米（缺少粗粮）最可能导致：", options: ["A. 维生素C缺乏", "B. 维生素B₁缺乏（脚气病）", "C. 蛋白质缺乏", "D. 钙缺乏"], answer: "B", knowledgePoint: "维生素B₁缺乏", analysis: "维生素B₁主要存在于糙米、粗粮的米糠层中。精加工去除米糠后，维生素B₁大量损失，长期食用精白米易导致维生素B₁缺乏（脚气病）。" }
    ]
  },
  {
    lesson: 22, title: "呼吸系统",
    questions: [
      { type: "choice", difficulty: "basic", text: "气体在人体内交换的场所是：", options: ["A. 气管", "B. 支气管", "C. 肺泡", "D. 鼻腔"], answer: "C", knowledgePoint: "气体交换场所", analysis: "肺泡壁和毛细血管壁极薄，O₂从肺泡进入血液，CO₂从血液进入肺泡，是气体交换的场所。" },
      { type: "choice", difficulty: "medium", text: "吸气时，膈肌的运动状态是：", options: ["A. 舒张（上移）", "B. 收缩（下移）", "C. 不动", "D. 左右移动"], answer: "B", knowledgePoint: "呼吸运动", analysis: "吸气：膈肌收缩下移，肋间肌收缩，胸腔体积增大，肺被动扩张，气压降低，气体吸入。呼气相反。" },
      { type: "choice", difficulty: "hard", text: "与吸入气体相比，呼出气体中CO₂增多、O₂减少，这是因为：", options: ["A. 肺泡与血液进行了气体交换", "B. 空气在肺泡中被污染", "C. 吸入的O₂全部变成了CO₂", "D. 气管产生了CO₂"], answer: "A", knowledgePoint: "气体交换原理", analysis: "血液从组织带来CO₂（组织细胞呼吸产生），在肺泡处交换：CO₂从血液→肺泡（呼出），O₂从肺泡→血液（带走）。结果呼出气比吸入气CO₂多、O₂少。" }
    ]
  },
  {
    lesson: 23, title: "循环系统",
    questions: [
      { type: "choice", difficulty: "basic", text: "负责将氧气运输到全身各组织的是：", options: ["A. 白细胞", "B. 血小板", "C. 红细胞（血红蛋白）", "D. 血浆"], answer: "C", knowledgePoint: "红细胞功能", analysis: "红细胞含血红蛋白，血红蛋白在O₂浓度高处（肺）与O₂结合，在O₂浓度低处（组织）释放O₂。" },
      { type: "choice", difficulty: "medium", text: "心脏有四个腔，将血液泵入全身（体循环）的是：", options: ["A. 右心房", "B. 右心室", "C. 左心房", "D. 左心室"], answer: "D", knowledgePoint: "心脏结构", analysis: "左心室壁最厚，将含氧血泵入主动脉→全身（体循环）。右心室将缺氧血泵入肺动脉→肺（肺循环）。" },
      { type: "choice", difficulty: "hard", text: "体循环与肺循环的关系是：", options: ["A. 先完成肺循环再进行体循环", "B. 两者同时进行，在心脏汇合", "C. 先完成体循环再进行肺循环", "D. 两者交替进行"], answer: "B", knowledgePoint: "两大循环关系", analysis: "体循环和肺循环同时进行，以心脏为中心连接：肺循环（右心→肺→左心）将缺氧血变为含氧血；体循环（左心→全身→右心）输送O₂并回收CO₂。两者串联、同时运行。" }
    ]
  },
  {
    lesson: 24, title: "泌尿系统",
    questions: [
      { type: "choice", difficulty: "basic", text: "人体形成尿液的器官是：", options: ["A. 膀胱", "B. 肾脏", "C. 输尿管", "D. 尿道"], answer: "B", knowledgePoint: "肾脏功能", analysis: "肾脏是泌尿系统的核心器官，通过肾小球过滤和肾小管重吸收形成尿液，排出代谢废物。" },
      { type: "choice", difficulty: "medium", text: "肾小管的主要功能是：", options: ["A. 过滤血液", "B. 重吸收水、葡萄糖等有用物质", "C. 储存尿液", "D. 分泌激素"], answer: "B", knowledgePoint: "肾小管功能", analysis: "原尿（滤液）流经肾小管时，葡萄糖、大部分水和无机盐被重吸收回血液，剩余形成终尿。" },
      { type: "choice", difficulty: "hard", text: "健康人的尿液中没有葡萄糖，但原尿（肾小球滤液）中有葡萄糖，这说明：", options: ["A. 肾小球不能过滤葡萄糖", "B. 肾小管将葡萄糖全部重吸收", "C. 葡萄糖被分解消耗", "D. 葡萄糖分子太大无法过滤"], answer: "B", knowledgePoint: "肾小管重吸收", analysis: "肾小球对小分子物质（葡萄糖、水、尿素、无机盐）均可过滤，所以原尿含葡萄糖。肾小管将原尿中的葡萄糖全部重吸收回血液，故正常尿液不含葡萄糖。糖尿病人血糖过高，超过肾糖阈，尿液中才出现葡萄糖。" }
    ]
  },
  {
    lesson: 25, title: "神经系统",
    questions: [
      { type: "choice", difficulty: "basic", text: "神经系统的基本结构和功能单位是：", options: ["A. 大脑皮层", "B. 脊髓", "C. 神经元（神经细胞）", "D. 神经纤维"], answer: "C", knowledgePoint: "神经元", analysis: "神经元由细胞体和突起（树突、轴突）组成，是神经系统的基本结构和功能单位，负责接受和传导信息。" },
      { type: "choice", difficulty: "medium", text: "骑扫帚飞行时需要保持平衡，负责这一功能的脑部结构是：", options: ["A. 大脑", "B. 小脑", "C. 脑干", "D. 下丘脑"], answer: "B", knowledgePoint: "小脑功能", analysis: "小脑负责维持身体平衡和协调精细运动。骑扫帚保持姿势平衡依赖小脑持续调控。" },
      { type: "choice", difficulty: "hard", text: "完成缩手反射（碰到热物体迅速缩手）的反射弧顺序是：", options: ["A. 感受器→传入神经→脊髓（神经中枢）→传出神经→效应器", "B. 大脑→脊髓→效应器", "C. 感受器→大脑→效应器", "D. 效应器→脊髓→感受器"], answer: "A", knowledgePoint: "非条件反射弧", analysis: "缩手反射的神经中枢在脊髓（不经过大脑，所以反应快）。完整反射弧：感受器→传入神经→脊髓→传出神经→效应器。大脑之后产生「疼痛感觉」是高级神经活动。" }
    ]
  },
  {
    lesson: 26, title: "感觉器官",
    questions: [
      { type: "choice", difficulty: "basic", text: "眼睛中感受光线的细胞位于：", options: ["A. 角膜", "B. 晶状体", "C. 玻璃体", "D. 视网膜"], answer: "D", knowledgePoint: "视网膜功能", analysis: "视网膜上的视锥细胞（感受颜色）和视杆细胞（感受明暗）负责感受光线刺激，产生视觉信号传入大脑。" },
      { type: "choice", difficulty: "medium", text: "耳朵感受声音振动的结构是：", options: ["A. 耳廓", "B. 外耳道", "C. 鼓膜", "D. 耳蜗（基底膜）"], answer: "D", knowledgePoint: "耳蜗功能", analysis: "声波→耳廓收集→外耳道→鼓膜振动→听小骨→耳蜗（基底膜上的毛细胞感受振动）→听神经→大脑。耳蜗是真正感受声音的结构。" },
      { type: "choice", difficulty: "hard", text: "近视眼的成因是：", options: ["A. 晶状体曲度过小，像成在视网膜后", "B. 晶状体曲度过大（或眼轴过长），像成在视网膜前", "C. 视网膜损伤", "D. 角膜变形"], answer: "B", knowledgePoint: "近视成因", analysis: "近视：晶状体曲度过大（或眼轴过长），平行光线经折射后汇聚在视网膜前，图像模糊。矫正：用凹透镜使光线先发散再汇聚到视网膜上。" }
    ]
  },

  // ==================== 第7章 生物与健康（第27-30课） ====================
  {
    lesson: 27, title: "微生物的世界",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列属于微生物的是：", options: ["A. 蚂蚁", "B. 细菌", "C. 蘑菇", "D. 苔藓"], answer: "B", knowledgePoint: "微生物的概念", analysis: "微生物泛指需要借助显微镜才能看到的微小生物，包括细菌、病毒、真菌（小型）等。蘑菇虽是真菌，但属于大型真菌，不是微生物。" },
      { type: "choice", difficulty: "medium", text: "青霉菌分泌青霉素能杀死细菌，这说明微生物之间存在：", options: ["A. 互利共生", "B. 竞争（通过化学物质抑制对手）", "C. 寄生", "D. 捕食"], answer: "B", knowledgePoint: "微生物间关系", analysis: "青霉菌分泌青霉素抑制细菌细胞壁合成，是竞争关系（化学竞争）。弗莱明发现青霉素正是基于这一观察，开创了抗生素时代。" },
      { type: "choice", difficulty: "hard", text: "病毒不同于细菌的关键之处在于：", options: ["A. 病毒更小", "B. 病毒没有细胞结构，只有蛋白质外壳和遗传物质", "C. 病毒不能繁殖", "D. 病毒不致病"], answer: "B", knowledgePoint: "病毒与细菌的区别", analysis: "细菌有细胞结构（无核膜，原核细胞）；病毒没有细胞结构，只有蛋白质外壳包裹遗传物质（DNA或RNA），必须寄生在活细胞内才能复制，是非细胞生命形式。" }
    ]
  },
  {
    lesson: 28, title: "传染病与免疫",
    questions: [
      { type: "choice", difficulty: "basic", text: "传染病区别于非传染病的核心特征是：", options: ["A. 症状严重", "B. 由病原体引起，能在个体间传播", "C. 需要住院治疗", "D. 只感染老人"], answer: "B", knowledgePoint: "传染病的定义", analysis: "传染病由病原体（细菌、病毒、寄生虫等）引起，具有传染性和流行性。非传染病（如骨折、遗传病）不由病原体引起，不能传播。" },
      { type: "choice", difficulty: "medium", text: "接种疫苗预防传染病，属于传染病预防措施中的：", options: ["A. 控制传染源", "B. 切断传播途径", "C. 保护易感人群", "D. 消灭病原体"], answer: "C", knowledgePoint: "预防传染病的措施", analysis: "预防传染病三大措施：控制传染源（隔离患者）、切断传播途径（消毒、戴口罩）、保护易感人群（疫苗、增强免疫力）。接种疫苗使人产生抗体，属于保护易感人群。" },
      { type: "choice", difficulty: "hard", text: "1918年大流感、2020年新冠——人类医学每次都在应对新病毒。新病毒出现后，人体初次感染无抗体保护，这是因为：", options: ["A. 免疫系统无法识别任何病毒", "B. 特异性免疫需要先接触抗原才能产生针对该抗原的抗体", "C. 人类天生没有免疫力", "D. 新病毒会摧毁免疫系统"], answer: "B", knowledgePoint: "特异性免疫原理", analysis: "特异性免疫（获得性免疫）具有针对性：免疫系统首次接触某种抗原后，才能产生针对该抗原的特异性抗体和记忆细胞。全新病毒尚未与人体相遇，故无预存抗体。" }
    ]
  },
  {
    lesson: 29, title: "人类与生物圈",
    questions: [
      { type: "choice", difficulty: "basic", text: "生物多样性包括：", options: ["A. 只有物种多样性", "B. 物种多样性、基因多样性和生态系统多样性", "C. 物种多样性和生态系统多样性", "D. 只有基因多样性"], answer: "B", knowledgePoint: "生物多样性层次", analysis: "生物多样性分三个层次：基因多样性（同种内的遗传差异）、物种多样性（不同种类）、生态系统多样性（不同类型的生态系统）。" },
      { type: "choice", difficulty: "medium", text: "建立自然保护区是保护濒危物种的：", options: ["A. 迁地保护", "B. 就地保护", "C. 人工繁育", "D. 基因保存"], answer: "B", knowledgePoint: "保护措施", analysis: "就地保护（建立自然保护区）：在物种原生栖息地保护，保护效果最好，是最主要的保护措施。迁地保护（动物园、植物园）是补充手段。" },
      { type: "choice", difficulty: "hard", text: "魔法部对神奇动物实施分级保护制度，与麻瓜《濒危野生动植物种国际贸易公约》（CITES）的核心理念相同之处在于：", options: ["A. 禁止所有人类接触野生动物", "B. 对不同风险等级的物种实施差异化保护，控制过度利用", "C. 消灭所有有害物种", "D. 鼓励人工繁殖取代野生种群"], answer: "B", knowledgePoint: "物种保护制度", analysis: "CITES和魔法部保护制度都基于评估物种受威胁程度，分级管理（严格禁止、有条件许可等），核心目标是防止过度开发导致物种灭绝，实现可持续利用。" }
    ]
  },
  {
    lesson: 30, title: "遗传与变异的初步认识",
    questions: [
      { type: "choice", difficulty: "basic", text: "俗话说"龙生龙，凤生凤"，这描述的是生物的：", options: ["A. 变异", "B. 遗传", "C. 进化", "D. 适应"], answer: "B", knowledgePoint: "遗传的概念", analysis: "遗传：亲代将自身的性状（特征）传递给后代的现象。"龙生龙"描述了性状的代代相传。" },
      { type: "choice", difficulty: "medium", text: "同一品种的郁金香，在不同土壤中花色略有差异，这属于：", options: ["A. 遗传", "B. 由遗传物质改变引起的变异", "C. 由环境影响引起的不可遗传变异", "D. 进化"], answer: "C", knowledgePoint: "变异的类型", analysis: "变异分两类：遗传变异（基因/染色体改变，可遗传）和不可遗传变异（遗传物质未改变，仅由环境影响）。环境导致的花色差异，遗传物质未变，不能遗传给后代。" },
      { type: "choice", difficulty: "hard", text: "遗传物质储存在细胞的哪个结构中？遗传机制的细节将在高中深入学习，初中阶段需掌握的是：", options: ["A. 遗传物质在细胞核中，由父母双方共同提供给后代", "B. 遗传物质只来自母方", "C. 遗传物质在细胞膜上", "D. 遗传物质不能遗传"], answer: "A", knowledgePoint: "遗传物质的位置和来源", analysis: "初中阶段核心结论：遗传物质（DNA）主要储存在细胞核（染色体上）；有性生殖中，后代遗传物质各一半来自父方（精子）和母方（卵细胞），这是后代性状介于父母之间又有所不同的原因。具体的碱基配对、基因表达等机制在高中学习。" }
    ]
  },

  // ==================== 第8章 期末复习与考试（第31-34课） ====================
  {
    lesson: 31, title: "期末复习（上）——生命与环境",
    questions: [
      { type: "choice", difficulty: "basic", text: "以下哪项体现了生物对环境的影响（而非生物适应环境）？", options: ["A. 仙人掌的叶退化为刺", "B. 蚯蚓疏松土壤，改善土质", "C. 北极熊有厚厚的皮下脂肪", "D. 候鸟随季节迁徙"], answer: "B", knowledgePoint: "生物与环境的关系综合", analysis: "A、C、D都是生物适应环境（环境影响生物）；B中蚯蚓的活动改变了土壤结构，是生物影响（改造）环境。" },
      { type: "choice", difficulty: "medium", text: "在一个草原生态系统中：草→蝗虫→蛙→蛇→鹰。若蛙的数量突然大幅减少，短期内蝗虫数量会：", options: ["A. 减少", "B. 增多", "C. 不变", "D. 先增多后减少"], answer: "B", knowledgePoint: "食物网中的数量变化", analysis: "蛙减少→捕食蝗虫的天敌减少→蝗虫天敌压力降低→蝗虫短期增多。（之后蛇可能转而更多捕食其他食物，最终达到新平衡。）" },
      { type: "choice", difficulty: "hard", text: "下列关于能量流动和物质循环的说法，正确的是：", options: ["A. 能量可以循环，物质单向流动", "B. 物质可以循环，能量单向流动并逐级递减", "C. 两者都可以循环", "D. 两者都单向流动"], answer: "B", knowledgePoint: "生态系统功能综合", analysis: "物质（碳、氮等）在生物体与无机环境之间循环，可反复利用。能量从太阳进入生态系统后，沿食物链单向流动，每级都有热能散失，最终以热能形式散失到环境中，不可逆转，不循环。" }
    ]
  },
  {
    lesson: 32, title: "期末复习（下）——植物与人体",
    questions: [
      { type: "choice", difficulty: "basic", text: "植物光合作用和呼吸作用的关系是：", options: ["A. 两者互相对立，不能同时进行", "B. 光合为呼吸提供有机物，呼吸为光合提供CO₂和能量", "C. 光合作用只在白天进行，呼吸作用只在夜间进行", "D. 两者都需要光照"], answer: "B", knowledgePoint: "光合与呼吸的关系", analysis: "光合作用：CO₂+H₂O→有机物+O₂（需要光）；呼吸作用：有机物+O₂→CO₂+H₂O+能量（全天进行）。两者相互依存：光合提供有机物，呼吸分解有机物释放能量。" },
      { type: "choice", difficulty: "medium", text: "人体消化、吸收、运输、利用营养物质涉及多个系统，正确的顺序是：", options: ["A. 消化系统→循环系统→各组织细胞", "B. 循环系统→消化系统→各组织细胞", "C. 消化系统→泌尿系统→各组织细胞", "D. 呼吸系统→消化系统→各组织细胞"], answer: "A", knowledgePoint: "系统协作", analysis: "食物在消化系统（口腔→食道→胃→小肠）消化为小分子，经小肠绒毛吸收进入血液，再由循环系统（血液）运输到全身各组织细胞利用。" },
      { type: "choice", difficulty: "hard", text: "血液经过肺循环（肺毛细血管处气体交换）后，发生的变化是：", options: ["A. 从含氧血变为缺氧血", "B. 从缺氧血变为含氧血，CO₂减少", "C. O₂和CO₂含量不变", "D. 血细胞数量增加"], answer: "B", knowledgePoint: "肺循环气体交换", analysis: "肺循环：右心室→肺动脉→肺毛细血管（气体交换：O₂进入血液，CO₂排出）→肺静脉→左心房。经过肺，缺氧血变为含氧血（动脉血），CO₂浓度降低。" }
    ]
  },
  {
    lesson: 33, title: "模拟考试与答疑",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列关于细胞的说法，正确的是：", options: ["A. 所有生物都由细胞构成", "B. 细胞是除病毒外所有生物的结构和功能单位", "C. 植物细胞一定有叶绿体", "D. 动物细胞有细胞壁"], answer: "B", knowledgePoint: "细胞学综合", analysis: "病毒没有细胞结构；植物细胞不一定有叶绿体（如根细胞）；动物细胞没有细胞壁。正确说法：细胞是除病毒外所有生物的结构和功能单位。" },
      { type: "choice", difficulty: "medium", text: "下列实验操作与目的对应正确的是：", options: ["A. 制作临时装片→观察细胞大小", "B. 先用低倍镜再用高倍镜→找到目标后放大观察细节", "C. 加碘液→观察细胞膜", "D. 使用凹面镜→减弱光线"], answer: "B", knowledgePoint: "实验操作综合", analysis: "A：临时装片用于观察细胞结构，不是专门测大小；B正确；C：碘液遇淀粉变蓝，用于观察淀粉分布（如细胞质），不是细胞膜；D：凹面镜反光强，用于增强光线（光线不足时）。" },
      { type: "choice", difficulty: "hard", text: "某同学将一朵白色花浸入红色素溶液，数小时后花瓣变红，用显微镜观察，茎的横切面中被染红的结构是：", options: ["A. 韧皮部筛管", "B. 木质部导管", "C. 皮层细胞", "D. 髓部"], answer: "B", knowledgePoint: "导管功能实验", analysis: "红色素溶液模拟水分，经根（此实验直接浸茎切面）由木质部导管向上运输，将导管染红。这是经典的观察导管位置实验。" }
    ]
  },
  {
    lesson: 34, title: "期末考试",
    questions: [
      { type: "choice", difficulty: "basic", text: "生命的最基本特征是：", options: ["A. 能够运动", "B. 新陈代谢（与外界交换物质和能量）", "C. 能够繁殖", "D. 能被观察到"], answer: "B", knowledgePoint: "生命的基本特征", analysis: "新陈代谢是生物体维持生命的最基本过程，是其他所有生命现象的基础。没有新陈代谢就没有生命。" },
      { type: "choice", difficulty: "medium", text: "下列关于人体系统协调的例子，说法正确的是：", options: ["A. 消化系统独立完成一切营养供给", "B. 各系统分工合作：消化系统吸收，循环系统运输，各组织细胞利用", "C. 神经系统不参与消化过程", "D. 各系统互相独立，不相互影响"], answer: "B", knowledgePoint: "人体系统协调综合", analysis: "人体是统一整体：消化（消化系统）→运输（循环系统）→利用（组织细胞）→调节（神经+内分泌系统）→排泄（泌尿系统）。各系统相互依存，协同工作。" },
      { type: "choice", difficulty: "hard", text: "学习了一学年生物学，以下哪个说法最能体现生物学的核心思想？", options: ["A. 生物学就是记住各种生物的名字", "B. 结构与功能相统一：生物体的结构是对其功能的适应", "C. 生物学与现实生活无关", "D. 所有生命现象都可以用魔法解释"], answer: "B", knowledgePoint: "生物学核心思想", analysis: "「结构与功能相统一」是贯穿整个生物学的核心思想：小肠绒毛增大吸收面积、叶片栅栏层朝向光源、红细胞双面凹形增大气体交换面积……每一个结构都与其功能精确对应，这是自然选择的结果。" }
    ]
  }
];

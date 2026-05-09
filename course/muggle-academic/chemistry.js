/**
 * subjects/chemistry.js
 * 麻瓜研究 · 化学分科
 * 教授：普里姆罗斯·斯普劳特
 */

export const subjectMeta = {
  key: "chemistry",
  name: "化学",
  icon: "🧪",
  professor: "普里姆罗斯·斯普劳特",
  desc: "元素、反应——和魔药学共享秘密的学科",
  unlockGrade: 3,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle:    "停下来看你，问「你是自己想到的吗？」",
  errorStyle:     "反问引导，不直接给答案，「我们看看哪里卡住了」",
  officeHours:    "实验室全天开放",
  signature:      "同时翻开化学和魔药学两本书对比讲解",
  prop:           "酒精灯、试管、魔药学教材",
  catchphrase:    "等等等等，这个——你们魔药课学过没有？！"
};

export const syllabus = [
  {
    chapter: 1,
    title: "物质的变化与性质",
    lessons: [
      {
        lesson: 1,
        title: "物质的分类与变化",
        keyPoints: [
          "纯净物与混合物的区别",
          "物理变化：没有新物质生成（切割、溶解、沸腾）",
          "化学变化：有新物质生成，常伴随发光发热变色",
          "判断化学变化的本质标准：是否有新物质生成"
        ]
      },
      {
        lesson: 2,
        title: "元素周期表基础",
        keyPoints: [
          "元素的概念：具有相同质子数的一类原子",
          "元素周期表的排列规律：按原子序数（质子数）排列",
          "金属元素、非金属元素、稀有气体的位置",
          "同周期元素性质的规律变化"
        ]
      },
      {
        lesson: 3,
        title: "原子与分子",
        keyPoints: [
          "原子是化学变化中最小的微粒",
          "原子的结构：质子、中子、电子",
          "分子是保持物质化学性质的最小微粒",
          "原子和分子的关系：分子由原子构成"
        ]
      }
    ]
  },
  {
    chapter: 2,
    title: "化学反应基础",
    lessons: [
      {
        lesson: 4,
        title: "化学方程式",
        keyPoints: [
          "化学方程式的意义：表示反应物、生成物和反应条件",
          "化学方程式的配平原则：原子守恒",
          "质量守恒定律：反应前后总质量不变",
          "读写化学方程式的基本规则"
        ]
      },
      {
        lesson: 5,
        title: "氧化还原反应",
        keyPoints: [
          "氧化反应：物质得到氧（或失去电子）",
          "还原反应：物质失去氧（或得到电子）",
          "氧化还原反应总是同时发生",
          "与魔药配方的联系：许多药剂反应本质是氧化还原"
        ]
      },
      {
        lesson: 6,
        title: "酸碱中和",
        keyPoints: [
          "酸的性质：pH < 7，能与碱反应",
          "碱的性质：pH > 7，能与酸反应",
          "中和反应：酸 + 碱 → 盐 + 水",
          "pH指示剂：判断溶液酸碱性"
        ]
      }
    ]
  },
  {
    chapter: 3,
    title: "实验操作",
    lessons: [
      {
        lesson: 7,
        title: "基础实验操作",
        keyPoints: [
          "酒精灯的正确使用（用火柴点燃，不能对吹）",
          "试管的握持与加热方式",
          "过滤操作：一贴二低三靠",
          "蒸发结晶的步骤"
        ]
      },
      {
        lesson: 8,
        title: "气体的检验",
        keyPoints: [
          "氧气检验：带火星的木条复燃",
          "氢气检验：点燃，发出淡蓝色火焰",
          "二氧化碳检验：通入澄清石灰水变浑浊",
          "气体收集方法：排水法、向上排空气法"
        ]
      },
      {
        lesson: 9,
        title: "溶液与浓度",
        keyPoints: [
          "溶液：溶质均匀分散在溶剂中",
          "溶质质量分数 = 溶质质量 / 溶液质量 × 100%",
          "饱和溶液与不饱和溶液",
          "影响溶解度的因素：温度、溶剂种类"
        ]
      }
    ]
  }
];

export const questionBank = [
  {
    lesson: 1, title: "物质的分类与变化",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列变化属于化学变化的是：", options: ["A. 冰雪融化", "B. 木柴燃烧", "C. 玻璃破碎", "D. 酒精挥发"], answer: "B", knowledgePoint: "化学变化判断", analysis: "木柴燃烧生成CO₂和H₂O，有新物质生成，是化学变化。其余均为物理变化。" },
      { type: "choice", difficulty: "medium", text: "判断化学变化的根本标准是：", options: ["A. 是否发光发热", "B. 是否有气泡产生", "C. 是否有新物质生成", "D. 是否颜色改变"], answer: "C", knowledgePoint: "化学变化本质", analysis: "化学变化的本质是有新物质生成，发光发热、气泡、颜色改变都可能是物理变化的伴随现象。" },
      { type: "choice", difficulty: "hard", text: "下列说法正确的是：", options: ["A. 混合物一定含多种元素", "B. 纯净物一定由一种元素组成", "C. 化合物一定含多种元素", "D. 单质一定由金属组成"], answer: "C", knowledgePoint: "物质分类", analysis: "化合物由多种元素组成（如H₂O含H和O）。混合物可含一种元素（如N₂和O₂的混合），纯净物可含多种元素（如H₂O），单质不一定是金属（如O₂、S）。" }
    ]
  },
  {
    lesson: 2, title: "元素周期表基础",
    questions: [
      { type: "choice", difficulty: "basic", text: "元素周期表按什么顺序排列元素？", options: ["A. 原子质量", "B. 原子半径", "C. 原子序数（质子数）", "D. 元素名称首字母"], answer: "C", knowledgePoint: "元素周期表排列", analysis: "元素周期表按原子序数（即质子数）从小到大排列。" },
      { type: "choice", difficulty: "medium", text: "稀有气体在元素周期表的位置在：", options: ["A. 最左边", "B. 最右边", "C. 中间", "D. 上方"], answer: "B", knowledgePoint: "稀有气体位置", analysis: "稀有气体（He、Ne、Ar等）位于元素周期表最右边（第18族）。" },
      { type: "choice", difficulty: "hard", text: "同一周期从左到右，元素的金属性：", options: ["A. 逐渐增强", "B. 逐渐减弱", "C. 先增后减", "D. 保持不变"], answer: "B", knowledgePoint: "元素性质规律", analysis: "同周期从左到右，核电荷数增加，金属性逐渐减弱，非金属性逐渐增强。" }
    ]
  },
  {
    lesson: 3, title: "原子与分子",
    questions: [
      { type: "choice", difficulty: "basic", text: "原子核由什么组成？", options: ["A. 质子和电子", "B. 质子和中子", "C. 中子和电子", "D. 只有质子"], answer: "B", knowledgePoint: "原子结构", analysis: "原子核由质子和中子组成，电子在核外运动。" },
      { type: "choice", difficulty: "medium", text: "保持水的化学性质的最小微粒是：", options: ["A. 氢原子", "B. 氧原子", "C. 水分子", "D. 氢分子"], answer: "C", knowledgePoint: "分子与化学性质", analysis: "分子是保持物质化学性质的最小微粒，保持水化学性质的最小微粒是水分子（H₂O）。" },
      { type: "choice", difficulty: "hard", text: "化学变化的本质是：", options: ["A. 分子的破坏", "B. 原子的重新组合", "C. 电子的转移", "D. 分子大小的改变"], answer: "B", knowledgePoint: "化学变化微观本质", analysis: "化学变化的微观本质是原子的重新组合，旧分子分解，原子重新排列形成新分子，生成新物质。" }
    ]
  },
  {
    lesson: 4, title: "化学方程式",
    questions: [
      { type: "choice", difficulty: "basic", text: "质量守恒定律说明，化学反应前后：", options: ["A. 物质种类不变", "B. 物质总质量不变", "C. 分子数目不变", "D. 原子种类不变"], answer: "B", knowledgePoint: "质量守恒定律", analysis: "质量守恒定律：化学反应前后，参加反应的各物质质量总和等于生成物的质量总和。" },
      { type: "choice", difficulty: "medium", text: "配平化学方程式的原则是：", options: ["A. 分子数守恒", "B. 原子数守恒", "C. 质子数守恒", "D. 电荷守恒"], answer: "B", knowledgePoint: "方程式配平", analysis: "配平化学方程式的依据是质量守恒定律，即反应前后每种原子的数目守恒。" },
      { type: "choice", difficulty: "hard", text: "H₂ + O₂ → H₂O 配平后，H₂、O₂、H₂O的系数比为：", options: ["A. 1:1:1", "B. 2:1:2", "C. 1:2:1", "D. 2:2:1"], answer: "B", knowledgePoint: "化学方程式配平", analysis: "配平后：2H₂ + O₂ → 2H₂O，系数比为2:1:2，反应前后H各4个，O各2个。" }
    ]
  },
  {
    lesson: 5, title: "氧化还原反应",
    questions: [
      { type: "choice", difficulty: "basic", text: "铁在空气中生锈，铁发生了：", options: ["A. 还原反应", "B. 氧化反应", "C. 中和反应", "D. 分解反应"], answer: "B", knowledgePoint: "氧化反应", analysis: "铁与氧气反应生成氧化铁（锈），铁得到氧，发生了氧化反应。" },
      { type: "choice", difficulty: "medium", text: "下列说法正确的是：", options: ["A. 氧化反应一定有火焰", "B. 氧化还原反应必定同时发生", "C. 还原反应一定有还原剂参与", "D. 氧化反应就是燃烧"], answer: "B", knowledgePoint: "氧化还原同时性", analysis: "氧化还原反应中，一种物质被氧化，另一种物质必然被还原，两者同时发生。" },
      { type: "choice", difficulty: "hard", text: "在反应 CuO + H₂ → Cu + H₂O 中，发生还原反应的物质是：", options: ["A. H₂", "B. CuO", "C. Cu", "D. H₂O"], answer: "B", knowledgePoint: "氧化还原反应分析", analysis: "CuO中的铜从+2价变为0价，失去氧，被还原，CuO发生还原反应。H₂得到氧，发生氧化反应。" }
    ]
  },
  {
    lesson: 6, title: "酸碱中和",
    questions: [
      { type: "choice", difficulty: "basic", text: "酸性溶液的pH值：", options: ["A. = 7", "B. > 7", "C. < 7", "D. = 0"], answer: "C", knowledgePoint: "pH与酸碱性", analysis: "pH < 7为酸性，pH = 7为中性，pH > 7为碱性。" },
      { type: "choice", difficulty: "medium", text: "盐酸（HCl）与氢氧化钠（NaOH）反应，生成物是：", options: ["A. Na + Cl + H₂O", "B. NaCl + H₂O", "C. Na + HClO", "D. NaOH + HCl"], answer: "B", knowledgePoint: "中和反应", analysis: "酸碱中和：HCl + NaOH → NaCl + H₂O，生成盐（氯化钠）和水。" },
      { type: "choice", difficulty: "hard", text: "将盐酸逐滴加入氢氧化钠溶液中，溶液pH值变化趋势是：", options: ["A. 一直增大", "B. 先减小后增大", "C. 一直减小", "D. 先增大后减小"], answer: "C", knowledgePoint: "中和过程pH变化", analysis: "NaOH溶液开始pH > 7，加入HCl后发生中和，pH逐渐降低，到恰好完全中和时pH = 7，继续加入HCl，pH继续减小到 < 7。" }
    ]
  },
  {
    lesson: 7, title: "基础实验操作",
    questions: [
      { type: "choice", difficulty: "basic", text: "点燃酒精灯应该用：", options: ["A. 另一只酒精灯", "B. 打火机", "C. 火柴", "D. 以上都可以"], answer: "C", knowledgePoint: "酒精灯使用", analysis: "酒精灯应用火柴点燃，不能用另一只酒精灯（防止酒精溅出引起火灾），不建议用打火机。" },
      { type: "choice", difficulty: "medium", text: "过滤操作中，「一贴」是指：", options: ["A. 滤纸贴紧漏斗", "B. 漏斗贴紧烧杯", "C. 玻璃棒贴烧杯内壁", "D. 烧杯贴桌面"], answer: "A", knowledgePoint: "过滤操作要点", analysis: "过滤「一贴二低三靠」：一贴指滤纸紧贴漏斗内壁；二低指滤纸边缘低于漏斗边缘、液面低于滤纸边缘；三靠指烧杯靠玻璃棒、玻璃棒靠三层滤纸、漏斗下端靠烧杯内壁。" },
      { type: "choice", difficulty: "hard", text: "给液体加热时，试管内液体量不能超过：", options: ["A. 试管容积的1/4", "B. 试管容积的1/3", "C. 试管容积的1/2", "D. 试管容积的2/3"], answer: "B", knowledgePoint: "试管加热规范", analysis: "给液体加热时，液体量不能超过试管容积的1/3，防止液体沸腾时溅出造成烫伤。" }
    ]
  },
  {
    lesson: 8, title: "气体的检验",
    questions: [
      { type: "choice", difficulty: "basic", text: "检验一瓶气体是否为氧气，应使用：", options: ["A. 燃烧的木条", "B. 带火星的木条", "C. 澄清的石灰水", "D. 湿润的石蕊试纸"], answer: "B", knowledgePoint: "氧气检验", analysis: "带火星的木条在氧气中能复燃，这是检验氧气的标准方法。" },
      { type: "choice", difficulty: "medium", text: "将气体通入澄清石灰水中，石灰水变浑浊，说明该气体是：", options: ["A. 氢气", "B. 氧气", "C. 氮气", "D. 二氧化碳"], answer: "D", knowledgePoint: "CO₂检验", analysis: "CO₂与石灰水（Ca(OH)₂）反应生成白色沉淀CaCO₃，使石灰水变浑浊。这是检验CO₂的标准方法。" },
      { type: "choice", difficulty: "hard", text: "收集密度比空气小的气体，应用：", options: ["A. 向上排空气法", "B. 向下排空气法", "C. 排水法", "D. 向上或排水均可"], answer: "B", knowledgePoint: "气体收集方法", analysis: "密度比空气小的气体（如H₂、NH₃），收集时用向下排空气法，瓶口朝下，气体从底部进，空气从瓶口排出。" }
    ]
  },
  {
    lesson: 9, title: "溶液与浓度",
    questions: [
      { type: "choice", difficulty: "basic", text: "将食盐溶于水，食盐是：", options: ["A. 溶剂", "B. 溶质", "C. 溶液", "D. 悬浊液"], answer: "B", knowledgePoint: "溶质溶剂", analysis: "溶质是被溶解的物质（食盐），溶剂是溶解溶质的物质（水），两者共同组成溶液。" },
      { type: "choice", difficulty: "medium", text: "50g溶液中含10g溶质，溶质质量分数为：", options: ["A. 5%", "B. 10%", "C. 20%", "D. 50%"], answer: "C", knowledgePoint: "溶质质量分数计算", analysis: "溶质质量分数 = 10g ÷ 50g × 100% = 20%。" },
      { type: "choice", difficulty: "hard", text: "升高温度，大多数固体物质的溶解度：", options: ["A. 增大", "B. 减小", "C. 不变", "D. 先增大后减小"], answer: "A", knowledgePoint: "溶解度与温度", analysis: "大多数固体溶质的溶解度随温度升高而增大（少数如Ca(OH)₂相反，气体溶解度随温度升高而减小）。" }
    ]
  }
];

export const crossAnchors = [
  {
    concept: "氧化还原反应",
    linkedSubject: "magic_potions_crossref",
    linkedLesson: "—",
    desc: "普里姆罗斯·斯普劳特会指出：魔药配方第三步的材料处理和氧化还原是同一件事——化学和魔药学在这里相遇"
  },
  {
    concept: "溶液浓度",
    linkedSubject: "biology",
    linkedLesson: "第4课",
    desc: "塔维什·麦克拉伦的细胞液浓度与渗透压，和溶液浓度计算用的是同一个逻辑框架"
  },
  {
    concept: "元素的物理特性",
    linkedSubject: "physics",
    linkedLesson: "第6课",
    desc: "物理课讲导体绝缘体时，塞拉菲娜会提到：这和元素周期表里金属非金属的分类是同一件事"
  }
];

window.subject_chemistry = { subjectMeta, syllabus, questionBank, crossAnchors, teachingStyle };

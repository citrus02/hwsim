/**
 * biology-questionBank.js
 * 霍格沃茨生物课程 - 题库（完整版）
 * 教授：塔维什·麦克拉伦
 * 课程体系：英国 KS3 → GCSE → A-Level，共 70 课
 * 每课 3 题：basic（+2分）、medium（0分，全对得E）、hard（-1分）
 */

export const questionBank = [

  // ============ 第1章 生命的单位（1年级·KS3）===========

  {
    lesson: 1, title: "细胞的发现",
    questions: [
      { type: "choice", difficulty: 1, text: "首次观察到细胞的科学家是？", options: ["A. 达尔文", "B. 罗伯特·胡克", "C. 孟德尔", "D. 列文虎克"], answer: "B", knowledgePoint: "细胞发现", analysis: "1665年罗伯特·胡克用自制显微镜观察软木塞切片，发现了蜂窝状结构并命名为细胞。" },
      { type: "choice", difficulty: 2, text: "下列关于显微镜的使用，正确的是？", options: ["A. 直接用高倍镜观察", "B. 先用低倍镜找到目标再换高倍镜", "C. 调节粗准焦螺旋时眼睛看物镜", "D. 光线越亮观察效果越好"], answer: "B", knowledgePoint: "显微镜使用", analysis: "低倍镜视野大，容易找到目标；找到后换高倍镜放大观察细节，这是正确的操作顺序。" },
      { type: "choice", difficulty: 3, text: "列文虎克观察到的'小动物'实际上是？", options: ["A. 真核细胞", "B. 原核细胞（细菌）", "C. 病毒", "D. 真菌"], answer: "B", knowledgePoint: "微生物发现", analysis: "列文虎克用自制的高倍率显微镜观察到的是细菌等原核生物，这是人类首次观察到微生物世界。" }
    ]
  },

  {
    lesson: 2, title: "细胞的基本结构",
    questions: [
      { type: "choice", difficulty: 1, text: "细胞中控制物质进出的结构是？", options: ["A. 细胞核", "B. 细胞膜", "C. 线粒体", "D. 叶绿体"], answer: "B", knowledgePoint: "细胞膜功能", analysis: "细胞膜具有选择透过性，像一道门控制物质进出细胞。" },
      { type: "choice", difficulty: 2, text: "细胞的'动力工厂'是指？", options: ["A. 叶绿体", "B. 细胞核", "C. 线粒体", "D. 液泡"], answer: "C", knowledgePoint: "线粒体功能", analysis: "线粒体通过呼吸作用将有机物中的化学能转化为ATP，为细胞生命活动提供能量。" },
      { type: "choice", difficulty: 3, text: "细胞核中储存遗传信息的物质是？", options: ["A. 蛋白质", "B. 脂肪", "C. DNA", "D. RNA"], answer: "C", knowledgePoint: "遗传物质", analysis: "DNA（脱氧核糖核酸）是储存遗传信息的主要物质，位于细胞核的染色体上。" }
    ]
  },

  {
    lesson: 3, title: "植物细胞与动物细胞",
    questions: [
      { type: "choice", difficulty: 1, text: "植物细胞特有的结构是？", options: ["A. 细胞膜", "B. 细胞核", "C. 细胞壁", "D. 线粒体"], answer: "C", knowledgePoint: "植物细胞特有结构", analysis: "细胞壁是植物细胞特有的，由纤维素组成，提供支撑和保护。" },
      { type: "choice", difficulty: 2, text: "能进行光合作用的细胞器是？", options: ["A. 线粒体", "B. 叶绿体", "C. 液泡", "D. 细胞核"], answer: "B", knowledgePoint: "叶绿体功能", analysis: "叶绿体含有叶绿素，能吸收光能进行光合作用，将二氧化碳和水转化为有机物。" },
      { type: "choice", difficulty: 3, text: "曼德拉草是植物，其细胞与人体细胞相比，特有的结构组合是？", options: ["A. 细胞膜、细胞核", "B. 细胞壁、叶绿体、液泡", "C. 线粒体、核糖体", "D. 中心体、溶酶体"], answer: "B", knowledgePoint: "植物与动物细胞比较", analysis: "植物细胞特有细胞壁、叶绿体和液泡，动物细胞没有这三种结构。" }
    ]
  },

  {
    lesson: 4, title: "显微镜的使用",
    questions: [
      { type: "choice", difficulty: 1, text: "调节视野亮度的部件是？", options: ["A. 目镜", "B. 物镜", "C. 反光镜", "D. 载物台"], answer: "C", knowledgePoint: "显微镜结构", analysis: "反光镜和光圈用于调节进入显微镜的光量，控制视野亮度。" },
      { type: "choice", difficulty: 2, text: "制作临时装片时，盖盖玻片的正确方法是？", options: ["A. 直接盖下", "B. 一端先接触水滴再缓缓放下", "C. 从侧面盖入", "D. 先染色再盖"], answer: "B", knowledgePoint: "临时装片制作", analysis: "一端先接触再缓放，可避免产生气泡影响观察。" },
      { type: "choice", difficulty: 3, text: "目镜10×，物镜40×，总放大倍数是？", options: ["A. 50×", "B. 400×", "C. 30×", "D. 40×"], answer: "B", knowledgePoint: "放大倍数计算", analysis: "显微镜总放大倍数 = 目镜倍数 × 物镜倍数 = 10 × 40 = 400倍。" }
    ]
  },

  {
    lesson: 5, title: "单细胞与多细胞生物",
    questions: [
      { type: "choice", difficulty: 1, text: "下列属于单细胞生物的是？", options: ["A. 人", "B. 草履虫", "C. 松树", "D. 青蛙"], answer: "B", knowledgePoint: "单细胞生物", analysis: "草履虫整个身体只有一个细胞，能独立完成所有生命活动。" },
      { type: "choice", difficulty: 2, text: "多细胞生物中，不同细胞形态功能不同的现象称为？", options: ["A. 细胞生长", "B. 细胞分化", "C. 细胞分裂", "D. 细胞凋亡"], answer: "B", knowledgePoint: "细胞分化", analysis: "细胞分化使细胞形态、结构和功能特化，形成不同组织。" },
      { type: "choice", difficulty: 3, text: "多细胞生物细胞分化的根本原因是？", options: ["A. 细胞大小不同", "B. 基因选择性表达", "C. 细胞数量不同", "D. 营养条件不同"], answer: "B", knowledgePoint: "细胞分化机制", analysis: "细胞分化的本质是基因的选择性表达，不同细胞表达不同的基因组合。" }
    ]
  },

  // ============ 第2章 生态系统（1年级·KS3）===========

  {
    lesson: 6, title: "食物链与食物网",
    questions: [
      { type: "choice", difficulty: 1, text: "食物链的起点通常是？", options: ["A. 动物", "B. 植物", "C. 细菌", "D. 真菌"], answer: "B", knowledgePoint: "食物链", analysis: "食物链从生产者（植物）开始，植物通过光合作用制造有机物。" },
      { type: "choice", difficulty: 2, text: "能量在食物链中流动的特点是？", options: ["A. 循环流动", "B. 单向流动、逐级递减", "C. 双向流动", "D. 恒定不变"], answer: "B", knowledgePoint: "能量流动", analysis: "能量沿食物链单向流动，每经过一个营养级约损失90%，只有约10%传递到下一级。" },
      { type: "choice", difficulty: 3, text: "在食物链'草→兔→狐'中，狐属于第几营养级？", options: ["A. 第一营养级", "B. 第二营养级", "C. 第三营养级", "D. 第四营养级"], answer: "C", knowledgePoint: "营养级", analysis: "草是生产者（第一营养级），兔是初级消费者（第二），狐是次级消费者（第三）。" }
    ]
  },

  {
    lesson: 7, title: "生态系统的组成",
    questions: [
      { type: "choice", difficulty: 1, text: "生态系统中制造有机物的成分是？", options: ["A. 消费者", "B. 分解者", "C. 生产者", "D. 非生物成分"], answer: "C", knowledgePoint: "生产者", analysis: "生产者主要是绿色植物，通过光合作用制造有机物，是生态系统的基础。" },
      { type: "choice", difficulty: 2, text: "分解者的作用是？", options: ["A. 制造有机物", "B. 消耗氧气", "C. 将有机物分解为无机物", "D. 捕食其他生物"], answer: "C", knowledgePoint: "分解者", analysis: "分解者（细菌、真菌）将动植物遗体分解为无机物，归还到环境中供生产者重新利用。" },
      { type: "choice", difficulty: 3, text: "一个完整的生态系统必须包含？", options: ["A. 只需要生物成分", "B. 只需要非生物成分", "C. 生物成分和非生物成分", "D. 只需要生产者"], answer: "C", knowledgePoint: "生态系统组成", analysis: "生态系统由生物成分（生产者、消费者、分解者）和非生物成分（阳光、水、空气等）共同组成。" }
    ]
  },

  {
    lesson: 8, title: "栖息地与生态位",
    questions: [
      { type: "choice", difficulty: 1, text: "生物生活的场所称为？", options: ["A. 生态位", "B. 栖息地", "C. 群落", "D. 种群"], answer: "B", knowledgePoint: "栖息地", analysis: "栖息地是生物生活的地方，提供食物、水和庇护所。" },
      { type: "choice", difficulty: 2, text: "物种在生态系统中的角色和地位称为？", options: ["A. 栖息地", "B. 生态位", "C. 种群", "D. 群落"], answer: "B", knowledgePoint: "生态位", analysis: "生态位包括物种吃什么、被谁吃、活动时间等，是物种在群落中的功能地位。" },
      { type: "choice", difficulty: 3, text: "两个物种生态位完全重叠会导致？", options: ["A. 互利共生", "B. 竞争排除", "C. 寄生", "D. 合作"], answer: "B", knowledgePoint: "竞争排除原理", analysis: "生态位完全重叠时，竞争优势种会淘汰劣势种，这就是竞争排除原理。" }
    ]
  },

  {
    lesson: 9, title: "生物的适应",
    questions: [
      { type: "choice", difficulty: 1, text: "北极熊白色的皮毛属于？", options: ["A. 警戒色", "B. 保护色", "C. 拟态", "D. 变异"], answer: "B", knowledgePoint: "保护色", analysis: "保护色使生物与环境颜色一致，不易被天敌发现。" },
      { type: "choice", difficulty: 2, text: "竹节虫的身体形态像竹枝，这是？", options: ["A. 保护色", "B. 警戒色", "C. 拟态", "D. 进化"], answer: "C", knowledgePoint: "拟态", analysis: "拟态是生物模仿其他生物或非生物的形态，以逃避天敌。" },
      { type: "choice", difficulty: 3, text: "适应是如何形成的？", options: ["A. 生物主动选择", "B. 自然选择的结果", "C. 基因突变直接产生", "D. 上帝创造"], answer: "B", knowledgePoint: "自然选择", analysis: "适应是自然选择的结果——具有有利变异的个体生存下来并繁殖，其性状逐渐扩散。" }
    ]
  },

  {
    lesson: 10, title: "人类活动与生态平衡",
    questions: [
      { type: "choice", difficulty: 1, text: "砍伐森林会导致？", options: ["A. 物种增多", "B. 水土流失", "C. 气候变湿", "D. 氧气增多"], answer: "B", knowledgePoint: "生态破坏", analysis: "森林减少导致水土流失、生物多样性下降、气候恶化。" },
      { type: "choice", difficulty: 2, text: "DDT等农药在食物链中会？", options: ["A. 消失", "B. 被分解", "C. 富集", "D. 减少"], answer: "C", knowledgePoint: "生物富集", analysis: "有毒物质在食物链中逐级积累，营养级越高浓度越高。" },
      { type: "choice", difficulty: 3, text: "保护生物多样性最有效的措施是？", options: ["A. 迁地保护", "B. 就地保护（建立自然保护区）", "C. 人工繁殖", "D. 法律保护"], answer: "B", knowledgePoint: "保护措施", analysis: "就地保护在物种原生栖息地保护，能保护完整的生态系统，是最有效的保护措施。" }
    ]
  },

  // ============ 第3章 人体的运转（2年级·KS3）===========

  {
    lesson: 11, title: "消化系统",
    questions: [
      { type: "choice", difficulty: 1, text: "消化和吸收的主要场所是？", options: ["A. 胃", "B. 小肠", "C. 大肠", "D. 食道"], answer: "B", knowledgePoint: "小肠功能", analysis: "小肠内壁有皱褶和绒毛，吸收面积大，是消化和吸收的主要场所。" },
      { type: "choice", difficulty: 2, text: "胆汁的作用是？", options: ["A. 分解蛋白质", "B. 乳化脂肪", "C. 消化淀粉", "D. 中和胃酸"], answer: "B", knowledgePoint: "胆汁功能", analysis: "胆汁不含消化酶，但能将大脂肪滴乳化为小颗粒，促进脂肪消化。" },
      { type: "choice", difficulty: 3, text: "淀粉消化的最终产物是？", options: ["A. 麦芽糖", "B. 葡萄糖", "C. 脂肪酸", "D. 氨基酸"], answer: "B", knowledgePoint: "淀粉消化", analysis: "淀粉在口腔初步消化为麦芽糖，在小肠最终消化为葡萄糖被吸收。" }
    ]
  },

  {
    lesson: 12, title: "循环系统",
    questions: [
      { type: "choice", difficulty: 1, text: "运输氧气的血细胞是？", options: ["A. 白细胞", "B. 血小板", "C. 红细胞", "D. 血浆"], answer: "C", knowledgePoint: "红细胞功能", analysis: "红细胞含血红蛋白，能运输氧气和部分二氧化碳。" },
      { type: "choice", difficulty: 2, text: "心脏中泵血到全身的是？", options: ["A. 右心房", "B. 右心室", "C. 左心房", "D. 左心室"], answer: "D", knowledgePoint: "心脏结构", analysis: "左心室壁最厚，将含氧血高压泵入全身。" },
      { type: "choice", difficulty: 3, text: "体循环的路径是？", options: ["A. 右心室→肺→左心房", "B. 左心室→全身→右心房", "C. 右心房→右心室→肺", "D. 左心房→左心室→全身"], answer: "B", knowledgePoint: "体循环", analysis: "体循环：左心室→主动脉→全身毛细血管→上下腔静脉→右心房。" }
    ]
  },

  {
    lesson: 13, title: "呼吸系统",
    questions: [
      { type: "choice", difficulty: 1, text: "气体交换的场所是？", options: ["A. 气管", "B. 支气管", "C. 肺泡", "D. 鼻腔"], answer: "C", knowledgePoint: "肺泡功能", analysis: "肺泡壁和毛细血管壁极薄，是气体交换的主要场所。" },
      { type: "choice", difficulty: 2, text: "吸气时膈肌的状态是？", options: ["A. 舒张", "B. 收缩", "C. 不动", "D. 先收缩后舒张"], answer: "B", knowledgePoint: "呼吸运动", analysis: "吸气时膈肌收缩下移，胸腔体积增大，气压降低，空气进入。" },
      { type: "choice", difficulty: 3, text: "呼出气体与吸入气体相比？", options: ["A. O₂增多，CO₂减少", "B. O₂减少，CO₂增多", "C. 两者都增多", "D. 两者都减少"], answer: "B", knowledgePoint: "气体交换", analysis: "肺泡气体交换后，O₂进入血液，CO₂排出，故呼出气体O₂减少、CO₂增多。" }
    ]
  },

  {
    lesson: 14, title: "神经系统",
    questions: [
      { type: "choice", difficulty: 1, text: "神经系统的基本单位是？", options: ["A. 大脑", "B. 脊髓", "C. 神经元", "D. 神经纤维"], answer: "C", knowledgePoint: "神经元", analysis: "神经元是神经系统的基本结构和功能单位，负责传递信息。" },
      { type: "choice", difficulty: 2, text: "维持身体平衡的脑部结构是？", options: ["A. 大脑", "B. 小脑", "C. 脑干", "D. 下丘脑"], answer: "B", knowledgePoint: "小脑功能", analysis: "小脑协调运动和维持平衡，骑扫帚飞行依赖小脑。" },
      { type: "choice", difficulty: 3, text: "反射弧的正确顺序是？", options: ["A. 效应器→传入神经→中枢→传出神经→感受器", "B. 感受器→传入神经→中枢→传出神经→效应器", "C. 感受器→传出神经→中枢→传入神经→效应器", "D. 中枢→传入神经→感受器→传出神经→效应器"], answer: "B", knowledgePoint: "反射弧", analysis: "反射弧：感受器→传入神经→神经中枢→传出神经→效应器。" }
    ]
  },

  {
    lesson: 15, title: "运动系统",
    questions: [
      { type: "choice", difficulty: 1, text: "人体有多少块骨头？", options: ["A. 106", "B. 206", "C. 306", "D. 406"], answer: "B", knowledgePoint: "骨骼系统", analysis: "成年人人体共有206块骨头，支撑身体并保护内脏。" },
      { type: "choice", difficulty: 2, text: "关节的作用是？", options: ["A. 产生运动", "B. 连接骨骼并允许活动", "C. 储存能量", "D. 消化食物"], answer: "B", knowledgePoint: "关节功能", analysis: "关节连接骨骼，允许骨骼间相对运动，如肘关节、膝关节。" },
      { type: "choice", difficulty: 3, text: "肌肉收缩的特点是？", options: ["A. 只能拉不能推", "B. 只能推不能拉", "C. 既能拉也能推", "D. 不产生力"], answer: "A", knowledgePoint: "肌肉功能", analysis: "肌肉只能收缩产生拉力，不能产生推力，因此肌肉总是成对工作。" }
    ]
  },

  // ============ 第4章 遗传入门（2年级·KS3）===========

  {
    lesson: 16, title: "细胞分裂",
    questions: [
      { type: "choice", difficulty: 1, text: "细胞分裂的结果是？", options: ["A. 细胞体积增大", "B. 细胞数量增多", "C. 细胞功能改变", "D. 细胞死亡"], answer: "B", knowledgePoint: "细胞分裂", analysis: "细胞分裂使一个细胞变成两个，增加细胞数量。" },
      { type: "choice", difficulty: 2, text: "有丝分裂产生的子细胞与母细胞？", options: ["A. 遗传物质不同", "B. 遗传物质相同", "C. 形态不同", "D. 功能不同"], answer: "B", knowledgePoint: "有丝分裂", analysis: "有丝分裂保证子细胞与母细胞遗传物质完全相同。" },
      { type: "choice", difficulty: 3, text: "细胞分裂前必须完成？", options: ["A. 细胞分化", "B. DNA复制", "C. 细胞凋亡", "D. 蛋白质分解"], answer: "B", knowledgePoint: "DNA复制", analysis: "细胞分裂前DNA必须复制，确保每个子细胞得到完整遗传信息。" }
    ]
  },

  {
    lesson: 17, title: "DNA的结构",
    questions: [
      { type: "choice", difficulty: 1, text: "DNA的形状是？", options: ["A. 直线", "B. 双螺旋", "C. 三角形", "D. 圆形"], answer: "B", knowledgePoint: "DNA结构", analysis: "DNA是双螺旋结构，像扭曲的梯子。" },
      { type: "choice", difficulty: 2, text: "DNA的基本组成单位是？", options: ["A. 氨基酸", "B. 核苷酸", "C. 葡萄糖", "D. 脂肪酸"], answer: "B", knowledgePoint: "核苷酸", analysis: "DNA由脱氧核糖核苷酸组成，每个核苷酸含脱氧核糖、磷酸和碱基。" },
      { type: "choice", difficulty: 3, text: "DNA中碱基配对原则是？", options: ["A. A-G，C-T", "B. A-T，C-G", "C. A-C，G-T", "D. A-A，T-T"], answer: "B", knowledgePoint: "碱基配对", analysis: "A（腺嘌呤）与T（胸腺嘧啶）配对，C（胞嘧啶）与G（鸟嘌呤）配对。" }
    ]
  },

  {
    lesson: 18, title: "遗传的基本规律",
    questions: [
      { type: "choice", difficulty: 1, text: "性状由什么控制？", options: ["A. 蛋白质", "B. 基因", "C. 糖类", "D. 脂肪"], answer: "B", knowledgePoint: "基因", analysis: "基因是控制性状的基本遗传单位，位于染色体上。" },
      { type: "choice", difficulty: 2, text: "显性基因与隐性基因的关系是？", options: ["A. 隐性基因掩盖显性基因", "B. 显性基因掩盖隐性基因", "C. 两者相互抵消", "D. 随机表达"], answer: "B", knowledgePoint: "显隐性关系", analysis: "显性基因只要有一个就能表现，隐性基因需要两个才表现。" },
      { type: "choice", difficulty: 3, text: "孟德尔遗传定律的发现者是？", options: ["A. 达尔文", "B. 孟德尔", "C. 沃森", "D. 克里克"], answer: "B", knowledgePoint: "孟德尔", analysis: "孟德尔通过豌豆杂交实验发现了分离定律和自由组合定律。" }
    ]
  },

  {
    lesson: 19, title: "变异",
    questions: [
      { type: "choice", difficulty: 1, text: "变异的来源包括？", options: ["A. 基因突变", "B. 基因重组", "C. 环境影响", "D. 以上都是"], answer: "D", knowledgePoint: "变异来源", analysis: "变异包括遗传变异（基因突变、基因重组）和环境变异。" },
      { type: "choice", difficulty: 2, text: "可遗传变异是指？", options: ["A. 环境引起的变化", "B. 遗传物质改变引起的变化", "C. 后天习得的特征", "D. 体型大小的变化"], answer: "B", knowledgePoint: "可遗传变异", analysis: "遗传物质改变引起的变异能传递给后代。" },
      { type: "choice", difficulty: 3, text: "变异对进化的意义是？", options: ["A. 没有意义", "B. 提供进化的原材料", "C. 阻碍进化", "D. 使物种灭绝"], answer: "B", knowledgePoint: "变异与进化", analysis: "变异是自然选择的原材料，没有变异就没有进化。" }
    ]
  },

  {
    lesson: 20, title: "进化初步",
    questions: [
      { type: "choice", difficulty: 1, text: "自然选择的核心是？", options: ["A. 适者生存", "B. 用进废退", "C. 获得性遗传", "D. 定向变异"], answer: "A", knowledgePoint: "自然选择", analysis: "自然选择保留适应环境的个体，淘汰不适应的个体。" },
      { type: "choice", difficulty: 2, text: "物种形成的关键是？", options: ["A. 地理隔离", "B. 生殖隔离", "C. 基因突变", "D. 自然选择"], answer: "B", knowledgePoint: "物种形成", analysis: "生殖隔离是新物种形成的标志，即无法交配或产生可育后代。" },
      { type: "choice", difficulty: 3, text: "生物进化的证据包括？", options: ["A. 化石", "B. 比较解剖学", "C. 分子生物学", "D. 以上都是"], answer: "D", knowledgePoint: "进化证据", analysis: "化石、比较解剖学、胚胎学、分子生物学等都为进化提供了证据。" }
    ]
  },

  // ============ 第5章 植物科学（3年级·KS3）===========

  {
    lesson: 21, title: "光合作用",
    questions: [
      { type: "choice", difficulty: 1, text: "光合作用的原料是？", options: ["A. 有机物和氧气", "B. 二氧化碳和水", "C. 葡萄糖和水", "D. 氧气和水"], answer: "B", knowledgePoint: "光合作用原料", analysis: "光合作用：CO₂ + H₂O → 有机物 + O₂。" },
      { type: "choice", difficulty: 2, text: "光合作用的场所是？", options: ["A. 线粒体", "B. 叶绿体", "C. 细胞核", "D. 液泡"], answer: "B", knowledgePoint: "光合作用场所", analysis: "叶绿体含有叶绿素，是光合作用的场所。" },
      { type: "choice", difficulty: 3, text: "光合作用产生的氧气来自？", options: ["A. CO₂", "B. H₂O", "C. 有机物", "D. 空气"], answer: "B", knowledgePoint: "氧气来源", analysis: "光合作用中释放的氧气全部来自水的光解。" }
    ]
  },

  {
    lesson: 22, title: "根与茎",
    questions: [
      { type: "choice", difficulty: 1, text: "根的主要功能是？", options: ["A. 光合作用", "B. 吸收水分和无机盐", "C. 繁殖", "D. 支撑"], answer: "B", knowledgePoint: "根的功能", analysis: "根吸收水分和无机盐，固定植株。" },
      { type: "choice", difficulty: 2, text: "木质部的作用是？", options: ["A. 运输有机物", "B. 运输水分和无机盐", "C. 光合作用", "D. 储存营养"], answer: "B", knowledgePoint: "木质部", analysis: "木质部中的导管向上运输水分和无机盐。" },
      { type: "choice", difficulty: 3, text: "根毛的作用是？", options: ["A. 保护根部", "B. 增大吸收面积", "C. 支撑植株", "D. 储存水分"], answer: "B", knowledgePoint: "根毛", analysis: "根毛极细极多，大大增加根部吸收面积。" }
    ]
  },

  {
    lesson: 23, title: "花与果实",
    questions: [
      { type: "choice", difficulty: 1, text: "花的哪个部分发育成果实？", options: ["A. 花瓣", "B. 子房", "C. 雄蕊", "D. 花萼"], answer: "B", knowledgePoint: "果实发育", analysis: "受精后子房发育成果实，子房壁发育成果皮。" },
      { type: "choice", difficulty: 2, text: "种子萌发的条件是？", options: ["A. 只需要水分", "B. 水分、温度、空气", "C. 只需要光照", "D. 只需要土壤"], answer: "B", knowledgePoint: "种子萌发", analysis: "种子萌发需要适量水分、适宜温度和充足空气。" },
      { type: "choice", difficulty: 3, text: "自花传粉与异花传粉相比，优点是？", options: ["A. 遗传多样性高", "B. 不需要媒介", "C. 后代更适应环境", "D. 产生更多种子"], answer: "B", knowledgePoint: "传粉方式", analysis: "自花传粉不需要传粉媒介，更稳定，但遗传多样性低。" }
    ]
  },

  {
    lesson: 24, title: "植物激素",
    questions: [
      { type: "choice", difficulty: 1, text: "促进植物生长的激素是？", options: ["A. 脱落酸", "B. 乙烯", "C. 生长素", "D. 细胞分裂素"], answer: "C", knowledgePoint: "生长素", analysis: "生长素促进细胞伸长，使植物生长。" },
      { type: "choice", difficulty: 2, text: "植物向光性的原因是？", options: ["A. 光照直接促进生长", "B. 生长素分布不均", "C. 光合作用增强", "D. 温度变化"], answer: "B", knowledgePoint: "向光性", analysis: "光照使生长素向背光侧移动，导致背光侧生长快于向光侧。" },
      { type: "choice", difficulty: 3, text: "乙烯的作用是？", options: ["A. 促进生长", "B. 促进果实成熟", "C. 抑制发芽", "D. 促进开花"], answer: "B", knowledgePoint: "乙烯", analysis: "乙烯是气体激素，促进果实成熟和叶片脱落。" }
    ]
  },

  {
    lesson: 25, title: "经济植物",
    questions: [
      { type: "choice", difficulty: 1, text: "粮食作物的主要用途是？", options: ["A. 观赏", "B. 提供粮食", "C. 药用", "D. 工业原料"], answer: "B", knowledgePoint: "粮食作物", analysis: "粮食作物如小麦、水稻，主要用于提供食物。" },
      { type: "choice", difficulty: 2, text: "阿司匹林来自哪种植物？", options: ["A. 柳树", "B. 松树", "C. 杨树", "D. 橡树"], answer: "A", knowledgePoint: "药用植物", analysis: "阿司匹林的有效成分水杨酸最初从柳树皮中提取。" },
      { type: "choice", difficulty: 3, text: "经济植物分类包括？", options: ["A. 粮食作物", "B. 纤维作物", "C. 油料作物", "D. 以上都是"], answer: "D", knowledgePoint: "经济植物", analysis: "经济植物包括粮食、纤维、油料、药用等多种类型。" }
    ]
  },

  // ============ 第6章 健康与疾病（3年级·KS3）===========

  {
    lesson: 26, title: "微生物",
    questions: [
      { type: "choice", difficulty: 1, text: "细菌属于？", options: ["A. 真核生物", "B. 原核生物", "C. 病毒", "D. 真菌"], answer: "B", knowledgePoint: "细菌", analysis: "细菌没有细胞核，属于原核生物。" },
      { type: "choice", difficulty: 2, text: "病毒的特点是？", options: ["A. 有细胞结构", "B. 只能寄生在活细胞内", "C. 能独立生活", "D. 体积比细菌大"], answer: "B", knowledgePoint: "病毒", analysis: "病毒没有细胞结构，必须寄生在活细胞内才能复制。" },
      { type: "choice", difficulty: 3, text: "青霉素的发现者是？", options: ["A. 弗莱明", "B. 巴斯德", "C. 列文虎克", "D. 科赫"], answer: "A", knowledgePoint: "青霉素", analysis: "弗莱明发现青霉素，开创了抗生素时代。" }
    ]
  },

  {
    lesson: 27, title: "免疫系统",
    questions: [
      { type: "choice", difficulty: 1, text: "人体的第一道防线是？", options: ["A. 免疫系统", "B. 皮肤和黏膜", "C. 白细胞", "D. 抗体"], answer: "B", knowledgePoint: "非特异性免疫", analysis: "皮肤和黏膜是阻挡病原体的第一道防线。" },
      { type: "choice", difficulty: 2, text: "抗体的作用是？", options: ["A. 直接杀死病原体", "B. 识别并结合抗原", "C. 吞噬病原体", "D. 产生毒素"], answer: "B", knowledgePoint: "抗体", analysis: "抗体能特异性识别并结合抗原，帮助清除病原体。" },
      { type: "choice", difficulty: 3, text: "免疫记忆的意义是？", options: ["A. 首次感染时快速反应", "B. 再次感染时快速产生抗体", "C. 增强非特异性免疫", "D. 阻止所有感染"], answer: "B", knowledgePoint: "免疫记忆", analysis: "记忆细胞能记住曾接触过的抗原，再次感染时快速产生大量抗体。" }
    ]
  },

  {
    lesson: 28, title: "传染病",
    questions: [
      { type: "choice", difficulty: 1, text: "传染病的特点是？", options: ["A. 不传染", "B. 由病原体引起", "C. 只遗传", "D. 无法预防"], answer: "B", knowledgePoint: "传染病", analysis: "传染病由病原体引起，具有传染性。" },
      { type: "choice", difficulty: 2, text: "传染病传播的三个环节是？", options: ["A. 传染源、传播途径、易感人群", "B. 病原体、宿主、环境", "C. 细菌、病毒、真菌", "D. 病人、医生、护士"], answer: "A", knowledgePoint: "传染病传播", analysis: "传染病传播需要传染源、传播途径和易感人群三个环节。" },
      { type: "choice", difficulty: 3, text: "疫苗的原理是？", options: ["A. 直接杀死病原体", "B. 刺激免疫系统产生抗体", "C. 增强体质", "D. 提供抗生素"], answer: "B", knowledgePoint: "疫苗", analysis: "疫苗是减毒或灭活的病原体，刺激免疫系统产生抗体和记忆细胞。" }
    ]
  },

  {
    lesson: 29, title: "传染病防控",
    questions: [
      { type: "choice", difficulty: 1, text: "预防传染病的措施包括？", options: ["A. 控制传染源", "B. 切断传播途径", "C. 保护易感人群", "D. 以上都是"], answer: "D", knowledgePoint: "防控措施", analysis: "预防传染病需要控制传染源、切断传播途径、保护易感人群。" },
      { type: "choice", difficulty: 2, text: "戴口罩属于？", options: ["A. 控制传染源", "B. 切断传播途径", "C. 保护易感人群", "D. 治疗患者"], answer: "B", knowledgePoint: "切断传播途径", analysis: "戴口罩阻止飞沫传播，属于切断传播途径。" },
      { type: "choice", difficulty: 3, text: "抗生素对哪种病原体有效？", options: ["A. 病毒", "B. 细菌", "C. 真菌", "D. 寄生虫"], answer: "B", knowledgePoint: "抗生素", analysis: "抗生素只对细菌有效，对病毒无效。" }
    ]
  },

  {
    lesson: 30, title: "健康生活",
    questions: [
      { type: "choice", difficulty: 1, text: "健康包括？", options: ["A. 身体健康", "B. 心理健康", "C. 社会适应良好", "D. 以上都是"], answer: "D", knowledgePoint: "健康定义", analysis: "健康是身体、心理和社会适应的良好状态。" },
      { type: "choice", difficulty: 2, text: "合理膳食的原则是？", options: ["A. 只吃肉", "B. 均衡营养", "C. 只吃蔬菜", "D. 暴饮暴食"], answer: "B", knowledgePoint: "合理膳食", analysis: "均衡营养，摄入适量的蛋白质、碳水化合物、脂肪、维生素和矿物质。" },
      { type: "choice", difficulty: 3, text: "吸烟对呼吸系统的危害是？", options: ["A. 增强肺功能", "B. 导致肺癌", "C. 增加肺活量", "D. 预防感冒"], answer: "B", knowledgePoint: "吸烟危害", analysis: "吸烟是导致肺癌的主要危险因素之一。" }
    ]
  },

  // ============ 第7章 细胞深化（4年级·GCSE）===========

  {
    lesson: 31, title: "细胞膜",
    questions: [
      { type: "choice", difficulty: 1, text: "细胞膜的结构是？", options: ["A. 单层蛋白质", "B. 磷脂双分子层", "C. 多糖层", "D. 纯脂肪"], answer: "B", knowledgePoint: "细胞膜结构", analysis: "细胞膜由磷脂双分子层和蛋白质组成，是流动镶嵌模型。" },
      { type: "choice", difficulty: 2, text: "物质跨膜运输的方式包括？", options: ["A. 扩散", "B. 主动运输", "C. 渗透", "D. 以上都是"], answer: "D", knowledgePoint: "跨膜运输", analysis: "扩散、渗透、主动运输都是物质跨膜运输的方式。" },
      { type: "choice", difficulty: 3, text: "主动运输的特点是？", options: ["A. 不需要能量", "B. 顺浓度梯度", "C. 需要能量和载体", "D. 只能运输水"], answer: "C", knowledgePoint: "主动运输", analysis: "主动运输需要载体蛋白和ATP，逆浓度梯度运输物质。" }
    ]
  },

  {
    lesson: 32, title: "细胞呼吸",
    questions: [
      { type: "choice", difficulty: 1, text: "有氧呼吸的场所是？", options: ["A. 叶绿体", "B. 线粒体", "C. 细胞核", "D. 液泡"], answer: "B", knowledgePoint: "有氧呼吸", analysis: "线粒体是有氧呼吸的主要场所。" },
      { type: "choice", difficulty: 2, text: "无氧呼吸的产物是？", options: ["A. 乳酸或酒精", "B. 葡萄糖", "C. 氧气", "D. 二氧化碳"], answer: "A", knowledgePoint: "无氧呼吸", analysis: "动物无氧呼吸产生乳酸，植物和微生物产生酒精和CO₂。" },
      { type: "choice", difficulty: 3, text: "细胞呼吸的意义是？", options: ["A. 产生氧气", "B. 分解有机物释放能量", "C. 合成有机物", "D. 储存能量"], answer: "B", knowledgePoint: "呼吸意义", analysis: "细胞呼吸分解有机物，释放能量供生命活动使用。" }
    ]
  },

  {
    lesson: 33, title: "酶",
    questions: [
      { type: "choice", difficulty: 1, text: "酶的本质是？", options: ["A. 糖类", "B. 蛋白质", "C. 脂肪", "D. 核酸"], answer: "B", knowledgePoint: "酶的本质", analysis: "酶是具有催化作用的蛋白质。" },
      { type: "choice", difficulty: 2, text: "酶的特性包括？", options: ["A. 高效性", "B. 特异性", "C. 受温度pH影响", "D. 以上都是"], answer: "D", knowledgePoint: "酶的特性", analysis: "酶具有高效性、特异性，活性受温度和pH影响。" },
      { type: "choice", difficulty: 3, text: "酶的作用机制是？", options: ["A. 提供能量", "B. 降低反应活化能", "C. 改变反应方向", "D. 增加反应物浓度"], answer: "B", knowledgePoint: "酶的机制", analysis: "酶通过降低反应活化能加速化学反应。" }
    ]
  },

  {
    lesson: 34, title: "细胞周期",
    questions: [
      { type: "choice", difficulty: 1, text: "细胞周期包括？", options: ["A. 间期和分裂期", "B. 只有分裂期", "C. 只有间期", "D. 静止期"], answer: "A", knowledgePoint: "细胞周期", analysis: "细胞周期包括间期（准备阶段）和分裂期（有丝分裂）。" },
      { type: "choice", difficulty: 2, text: "间期的主要活动是？", options: ["A. 细胞分裂", "B. DNA复制", "C. 染色体分离", "D. 细胞质分裂"], answer: "B", knowledgePoint: "间期", analysis: "间期完成DNA复制和蛋白质合成，为分裂做准备。" },
      { type: "choice", difficulty: 3, text: "有丝分裂的时期包括？", options: ["A. 前期、中期、后期、末期", "B. 只有前期和末期", "C. 只有中期", "D. 无法划分"], answer: "A", knowledgePoint: "有丝分裂时期", analysis: "有丝分裂分为前期、中期、后期、末期四个时期。" }
    ]
  },

  {
    lesson: 35, title: "减数分裂",
    questions: [
      { type: "choice", difficulty: 1, text: "减数分裂产生的细胞是？", options: ["A. 体细胞", "B. 生殖细胞", "C. 干细胞", "D. 癌细胞"], answer: "B", knowledgePoint: "减数分裂", analysis: "减数分裂产生生殖细胞（精子或卵细胞）。" },
      { type: "choice", difficulty: 2, text: "减数分裂的特点是？", options: ["A. 染色体数目不变", "B. 染色体数目减半", "C. DNA不复制", "D. 只分裂一次"], answer: "B", knowledgePoint: "染色体数目", analysis: "减数分裂后染色体数目减半，形成单倍体配子。" },
      { type: "choice", difficulty: 3, text: "基因重组发生在？", options: ["A. 有丝分裂", "B. 减数分裂", "C. 细胞周期", "D. 细胞凋亡"], answer: "B", knowledgePoint: "基因重组", analysis: "减数分裂时同源染色体交叉互换，产生基因重组。" }
    ]
  },

  // ============ 第8章 遗传学（4年级·GCSE）===========

  {
    lesson: 36, title: "孟德尔定律",
    questions: [
      { type: "choice", difficulty: 1, text: "分离定律的内容是？", options: ["A. 基因在配子中分离", "B. 基因自由组合", "C. 显性基因掩盖隐性基因", "D. 基因连锁"], answer: "A", knowledgePoint: "分离定律", analysis: "分离定律：成对的基因在形成配子时彼此分离。" },
      { type: "choice", difficulty: 2, text: "自由组合定律的适用条件是？", options: ["A. 基因在同一条染色体上", "B. 基因在不同染色体上", "C. 只有显性基因", "D. 只有隐性基因"], answer: "B", knowledgePoint: "自由组合定律", analysis: "自由组合定律适用于位于不同染色体上的基因。" },
      { type: "choice", difficulty: 3, text: "孟德尔选用豌豆的原因是？", options: ["A. 豌豆容易种植", "B. 豌豆性状明显且自花传粉", "C. 豌豆产量高", "D. 豌豆颜色好看"], answer: "B", knowledgePoint: "豌豆实验", analysis: "豌豆自花传粉、闭花授粉，性状稳定且易于观察。" }
    ]
  },

  {
    lesson: 37, title: "遗传图解",
    questions: [
      { type: "choice", difficulty: 1, text: "基因型是指？", options: ["A. 表现出来的性状", "B. 基因组成", "C. 染色体数目", "D. 蛋白质结构"], answer: "B", knowledgePoint: "基因型", analysis: "基因型是生物体的基因组成。" },
      { type: "choice", difficulty: 2, text: "表现型是指？", options: ["A. 基因组成", "B. 表现出来的性状", "C. 染色体结构", "D. DNA序列"], answer: "B", knowledgePoint: "表现型", analysis: "表现型是基因型和环境共同作用的结果。" },
      { type: "choice", difficulty: 3, text: "纯合子与杂合子的区别是？", options: ["A. 纯合子基因不同", "B. 杂合子基因相同", "C. 纯合子基因相同", "D. 没有区别"], answer: "C", knowledgePoint: "纯合子与杂合子", analysis: "纯合子两个等位基因相同，杂合子两个等位基因不同。" }
    ]
  },

  {
    lesson: 38, title: "连锁与互换",
    questions: [
      { type: "choice", difficulty: 1, text: "基因连锁是指？", options: ["A. 基因在不同染色体上", "B. 基因在同一条染色体上", "C. 基因相互独立", "D. 基因随机组合"], answer: "B", knowledgePoint: "基因连锁", analysis: "位于同一条染色体上的基因倾向于一起遗传，称为连锁。" },
      { type: "choice", difficulty: 2, text: "交叉互换发生在？", options: ["A. 有丝分裂", "B. 减数分裂", "C. 细胞间期", "D. 细胞凋亡"], answer: "B", knowledgePoint: "交叉互换", analysis: "减数分裂时同源染色体之间发生交叉互换，打破连锁。" },
      { type: "choice", difficulty: 3, text: "重组率与基因距离的关系是？", options: ["A. 距离越远，重组率越低", "B. 距离越近，重组率越高", "C. 距离越远，重组率越高", "D. 没有关系"], answer: "C", knowledgePoint: "重组率", analysis: "基因距离越远，交叉互换机会越大，重组率越高。" }
    ]
  },

  {
    lesson: 39, title: "基因突变",
    questions: [
      { type: "choice", difficulty: 1, text: "基因突变的类型包括？", options: ["A. 点突变", "B. 插入", "C. 缺失", "D. 以上都是"], answer: "D", knowledgePoint: "基因突变类型", analysis: "基因突变包括点突变、插入、缺失等类型。" },
      { type: "choice", difficulty: 2, text: "基因突变的原因是？", options: ["A. 自发发生", "B. 环境因素诱发", "C. 遗传因素", "D. 以上都是"], answer: "D", knowledgePoint: "突变原因", analysis: "基因突变可自发发生，也可由辐射、化学物质等环境因素诱发。" },
      { type: "choice", difficulty: 3, text: "基因突变的后果是？", options: ["A. 一定有害", "B. 一定有利", "C. 可能有害、有利或中性", "D. 没有影响"], answer: "C", knowledgePoint: "突变后果", analysis: "基因突变的后果取决于具体情况，可能有害、有利或中性。" }
    ]
  },

  {
    lesson: 40, title: "遗传病",
    questions: [
      { type: "choice", difficulty: 1, text: "常染色体显性遗传病的特点是？", options: ["A. 只有隐性基因才发病", "B. 只要有一个显性基因就发病", "C. 只有男性发病", "D. 只有女性发病"], answer: "B", knowledgePoint: "显性遗传", analysis: "常染色体显性遗传病只要有一个显性致病基因就发病。" },
      { type: "choice", difficulty: 2, text: "红绿色盲属于？", options: ["A. 常染色体显性遗传", "B. 常染色体隐性遗传", "C. 伴X隐性遗传", "D. 伴Y遗传"], answer: "C", knowledgePoint: "伴性遗传", analysis: "红绿色盲是伴X隐性遗传病，男性发病率高于女性。" },
      { type: "choice", difficulty: 3, text: "白化病的遗传方式是？", options: ["A. 常染色体显性", "B. 常染色体隐性", "C. 伴X显性", "D. 伴X隐性"], answer: "B", knowledgePoint: "白化病", analysis: "白化病是常染色体隐性遗传病，需要两个隐性基因才发病。" }
    ]
  },

  // ============ 第9章 进化与生态（5年级·GCSE）===========

  {
    lesson: 41, title: "自然选择",
    questions: [
      { type: "choice", difficulty: 1, text: "自然选择的条件是？", options: ["A. 变异存在", "B. 变异可遗传", "C. 选择压力", "D. 以上都是"], answer: "D", knowledgePoint: "自然选择条件", analysis: "自然选择需要变异存在、变异可遗传、存在选择压力。" },
      { type: "choice", difficulty: 2, text: "自然选择的类型包括？", options: ["A. 定向选择", "B. 稳定选择", "C. 分裂选择", "D. 以上都是"], answer: "D", knowledgePoint: "选择类型", analysis: "自然选择包括定向选择、稳定选择、分裂选择等类型。" },
      { type: "choice", difficulty: 3, text: "自然选择作用于？", options: ["A. 基因", "B. 个体", "C. 种群", "D. 物种"], answer: "B", knowledgePoint: "选择作用对象", analysis: "自然选择作用于个体，但进化发生在种群层面。" }
    ]
  },

  {
    lesson: 42, title: "物种形成",
    questions: [
      { type: "choice", difficulty: 1, text: "物种形成的关键步骤是？", options: ["A. 地理隔离", "B. 生殖隔离", "C. 基因突变", "D. 自然选择"], answer: "B", knowledgePoint: "物种形成", analysis: "生殖隔离是新物种形成的标志。" },
      { type: "choice", difficulty: 2, text: "地理隔离的作用是？", options: ["A. 直接形成新物种", "B. 阻止基因交流", "C. 增加基因突变", "D. 促进杂交"], answer: "B", knowledgePoint: "地理隔离", analysis: "地理隔离阻止种群间基因交流，为独立进化创造条件。" },
      { type: "choice", difficulty: 3, text: "物种的定义是？", options: ["A. 外形相似的生物", "B. 能相互交配产生可育后代的生物", "C. 生活在同一地区的生物", "D. 基因完全相同的生物"], answer: "B", knowledgePoint: "物种定义", analysis: "物种是能够相互交配并产生可育后代的一群生物。" }
    ]
  },

  {
    lesson: 43, title: "种群动态",
    questions: [
      { type: "choice", difficulty: 1, text: "种群增长的类型包括？", options: ["A. J型增长", "B. S型增长", "C. 两者都是", "D. 两者都不是"], answer: "C", knowledgePoint: "种群增长", analysis: "种群增长包括J型（理想条件）和S型（现实条件）。" },
      { type: "choice", difficulty: 2, text: "环境容纳量是指？", options: ["A. 种群的最大数量", "B. 环境能承载的最大种群数量", "C. 种群的初始数量", "D. 种群的增长率"], answer: "B", knowledgePoint: "环境容纳量", analysis: "环境容纳量（K值）是环境能承载的最大种群数量。" },
      { type: "choice", difficulty: 3, text: "Logistic增长的特点是？", options: ["A. 增长率恒定", "B. 增长率先增后减", "C. 增长率持续下降", "D. 增长率持续上升"], answer: "B", knowledgePoint: "Logistic增长", analysis: "Logistic增长中，增长率在K/2时最大，随后逐渐下降。" }
    ]
  },

  {
    lesson: 44, title: "能量流动",
    questions: [
      { type: "choice", difficulty: 1, text: "能量流动的起点是？", options: ["A. 消费者", "B. 生产者", "C. 分解者", "D. 非生物环境"], answer: "B", knowledgePoint: "能量起点", analysis: "能量流动从生产者固定太阳能开始。" },
      { type: "choice", difficulty: 2, text: "能量传递效率约为？", options: ["A. 1%", "B. 10%", "C. 50%", "D. 90%"], answer: "B", knowledgePoint: "传递效率", analysis: "能量在营养级间传递效率约为10%，大部分以热能散失。" },
      { type: "choice", difficulty: 3, text: "能量金字塔的特点是？", options: ["A. 上宽下窄", "B. 上窄下宽", "C. 上下一样宽", "D. 没有规律"], answer: "B", knowledgePoint: "能量金字塔", analysis: "能量金字塔下宽上窄，底层生产者能量最多。" }
    ]
  },

  {
    lesson: 45, title: "物质循环",
    questions: [
      { type: "choice", difficulty: 1, text: "碳循环的主要过程是？", options: ["A. 光合作用和呼吸作用", "B. 蒸发和降水", "C. 固氮和反硝化", "D. 风化和沉积"], answer: "A", knowledgePoint: "碳循环", analysis: "碳循环通过光合作用（吸收CO₂）和呼吸作用（释放CO₂）完成。" },
      { type: "choice", difficulty: 2, text: "氮循环中固氮作用是指？", options: ["A. 将硝酸盐转化为氮气", "B. 将氮气转化为氨", "C. 将氨转化为硝酸盐", "D. 将氮气转化为硝酸盐"], answer: "B", knowledgePoint: "固氮作用", analysis: "固氮作用将大气中的氮气转化为氨或铵盐。" },
      { type: "choice", difficulty: 3, text: "人类活动对碳循环的影响是？", options: ["A. 减少大气CO₂", "B. 增加大气CO₂", "C. 没有影响", "D. 使碳循环停止"], answer: "B", knowledgePoint: "人类影响", analysis: "化石燃料燃烧和森林砍伐增加大气CO₂浓度，导致温室效应。" }
    ]
  },

  // ============ 第10章 人体生理（5年级·GCSE）===========

  {
    lesson: 46, title: "激素调节",
    questions: [
      { type: "choice", difficulty: 1, text: "胰岛素的作用是？", options: ["A. 升高血糖", "B. 降低血糖", "C. 促进生长", "D. 促进代谢"], answer: "B", knowledgePoint: "胰岛素", analysis: "胰岛素促进血糖进入细胞，降低血糖浓度。" },
      { type: "choice", difficulty: 2, text: "甲状腺激素的作用是？", options: ["A. 调节血糖", "B. 调节新陈代谢", "C. 调节水盐平衡", "D. 促进生殖"], answer: "B", knowledgePoint: "甲状腺激素", analysis: "甲状腺激素调节新陈代谢和生长发育。" },
      { type: "choice", difficulty: 3, text: "糖尿病的原因是？", options: ["A. 胰岛素分泌过多", "B. 胰岛素分泌不足", "C. 甲状腺激素不足", "D. 生长激素过多"], answer: "B", knowledgePoint: "糖尿病", analysis: "糖尿病主要因胰岛素分泌不足或胰岛素抵抗导致血糖升高。" }
    ]
  },

  {
    lesson: 47, title: "稳态调节",
    questions: [
      { type: "choice", difficulty: 1, text: "稳态是指？", options: ["A. 体内环境绝对不变", "B. 体内环境相对稳定", "C. 体内环境剧烈变化", "D. 体内环境混乱"], answer: "B", knowledgePoint: "稳态", analysis: "稳态是体内环境在一定范围内保持相对稳定的状态。" },
      { type: "choice", difficulty: 2, text: "体温调节的中枢在？", options: ["A. 大脑皮层", "B. 下丘脑", "C. 小脑", "D. 脑干"], answer: "B", knowledgePoint: "体温调节", analysis: "下丘脑是体温调节中枢，维持体温恒定。" },
      { type: "choice", difficulty: 3, text: "水盐平衡调节依靠？", options: ["A. 胰岛素", "B. 抗利尿激素", "C. 甲状腺激素", "D. 生长激素"], answer: "B", knowledgePoint: "水盐平衡", analysis: "抗利尿激素调节肾脏对水的重吸收，维持水盐平衡。" }
    ]
  },

  {
    lesson: 48, title: "神经传导",
    questions: [
      { type: "choice", difficulty: 1, text: "神经冲动的传导形式是？", options: ["A. 化学信号", "B. 电信号", "C. 光信号", "D. 声波"], answer: "B", knowledgePoint: "神经冲动", analysis: "神经冲动以电信号形式在神经元内传导。" },
      { type: "choice", difficulty: 2, text: "突触传递的方式是？", options: ["A. 电信号直接传递", "B. 化学递质传递", "C. 声波传递", "D. 光信号传递"], answer: "B", knowledgePoint: "突触传递", analysis: "突触处神经递质从突触前膜释放，作用于突触后膜。" },
      { type: "choice", difficulty: 3, text: "神经递质的作用是？", options: ["A. 产生电信号", "B. 在神经元间传递信号", "C. 储存能量", "D. 合成蛋白质"], answer: "B", knowledgePoint: "神经递质", analysis: "神经递质在突触间隙传递化学信号，完成神经元间的通讯。" }
    ]
  },

  {
    lesson: 49, title: "免疫深化",
    questions: [
      { type: "choice", difficulty: 1, text: "体液免疫的主要细胞是？", options: ["A. T细胞", "B. B细胞", "C. 巨噬细胞", "D. 红细胞"], answer: "B", knowledgePoint: "体液免疫", analysis: "体液免疫主要依靠B细胞产生抗体。" },
      { type: "choice", difficulty: 2, text: "细胞免疫的主要细胞是？", options: ["A. B细胞", "B. T细胞", "C. 红细胞", "D. 血小板"], answer: "B", knowledgePoint: "细胞免疫", analysis: "细胞免疫主要依靠T细胞直接杀伤感染细胞。" },
      { type: "choice", difficulty: 3, text: "抗体的结构特点是？", options: ["A. 单链蛋白质", "B. Y形蛋白质，有两个抗原结合位点", "C. 球形蛋白质", "D. 纤维状蛋白质"], answer: "B", knowledgePoint: "抗体结构", analysis: "抗体是Y形蛋白质，有两个抗原结合位点，能特异性结合抗原。" }
    ]
  },

  {
    lesson: 50, title: "GCSE复习",
    questions: [
      { type: "choice", difficulty: 1, text: "GCSE生物考试覆盖哪些内容？", options: ["A. 只有细胞生物学", "B. 遗传学、生态学、人体生理等", "C. 只有植物学", "D. 只有动物学"], answer: "B", knowledgePoint: "考试范围", analysis: "GCSE生物覆盖细胞、遗传、生态、人体生理等多个领域。" },
      { type: "choice", difficulty: 2, text: "细胞呼吸与光合作用的关系是？", options: ["A. 互相对立", "B. 相互依存", "C. 没有关系", "D. 完全相同"], answer: "B", knowledgePoint: "光合与呼吸", analysis: "光合作用产生有机物和氧气，呼吸作用消耗有机物和氧气，两者相互依存。" },
      { type: "choice", difficulty: 3, text: "下列哪个说法体现生物学核心思想？", options: ["A. 结构与功能相统一", "B. 所有生物都一样", "C. 生物学与生活无关", "D. 生命可以用魔法解释"], answer: "A", knowledgePoint: "核心思想", analysis: "结构与功能相统一是生物学的核心思想，如小肠绒毛增大吸收面积。" }
    ]
  },

  // ============ 第11章 分子生物学（6年级·A-Level）===========

  {
    lesson: 51, title: "DNA复制",
    questions: [
      { type: "choice", difficulty: 1, text: "DNA复制的方式是？", options: ["A. 全保留复制", "B. 半保留复制", "C. 分散复制", "D. 随机复制"], answer: "B", knowledgePoint: "DNA复制", analysis: "DNA复制是半保留复制，每个新DNA含一条旧链和一条新链。" },
      { type: "choice", difficulty: 2, text: "DNA复制的酶包括？", options: ["A. DNA聚合酶", "B. 解旋酶", "C. 连接酶", "D. 以上都是"], answer: "D", knowledgePoint: "复制酶", analysis: "DNA复制需要解旋酶、DNA聚合酶、连接酶等多种酶。" },
      { type: "choice", difficulty: 3, text: "DNA复制的准确性保证是？", options: ["A. DNA聚合酶的校对功能", "B. 随机配对", "C. 没有保证", "D. RNA的帮助"], answer: "A", knowledgePoint: "复制准确性", analysis: "DNA聚合酶具有3'→5'外切酶活性，能切除错误配对的碱基。" }
    ]
  },

  {
    lesson: 52, title: "蛋白质合成",
    questions: [
      { type: "choice", difficulty: 1, text: "转录的场所是？", options: ["A. 核糖体", "B. 细胞核", "C. 线粒体", "D. 叶绿体"], answer: "B", knowledgePoint: "转录", analysis: "转录在细胞核中进行，DNA→mRNA。" },
      { type: "choice", difficulty: 2, text: "翻译的场所是？", options: ["A. 细胞核", "B. 核糖体", "C. 线粒体", "D. 叶绿体"], answer: "B", knowledgePoint: "翻译", analysis: "翻译在核糖体上进行，mRNA→蛋白质。" },
      { type: "choice", difficulty: 3, text: "密码子的特点是？", options: ["A. 一个密码子对应多个氨基酸", "B. 一个氨基酸只有一个密码子", "C. 密码子具有简并性", "D. 密码子不重叠"], answer: "C", knowledgePoint: "密码子", analysis: "密码子具有简并性，多个密码子可编码同一个氨基酸。" }
    ]
  },

  {
    lesson: 53, title: "基因表达调控",
    questions: [
      { type: "choice", difficulty: 1, text: "原核生物基因调控的主要方式是？", options: ["A. 操纵子", "B. 转录因子", "C. DNA甲基化", "D. 组蛋白修饰"], answer: "A", knowledgePoint: "操纵子", analysis: "原核生物通过操纵子调控基因表达，如乳糖操纵子。" },
      { type: "choice", difficulty: 2, text: "真核生物基因调控的层次包括？", options: ["A. 转录水平", "B. 翻译水平", "C. 表观遗传", "D. 以上都是"], answer: "D", knowledgePoint: "调控层次", analysis: "真核生物基因调控发生在转录、翻译、表观遗传等多个层次。" },
      { type: "choice", difficulty: 3, text: "表观遗传的机制包括？", options: ["A. DNA甲基化", "B. 组蛋白修饰", "C. 非编码RNA", "D. 以上都是"], answer: "D", knowledgePoint: "表观遗传", analysis: "表观遗传包括DNA甲基化、组蛋白修饰、非编码RNA等机制。" }
    ]
  },

  {
    lesson: 54, title: "蛋白质结构",
    questions: [
      { type: "choice", difficulty: 1, text: "蛋白质的基本组成单位是？", options: ["A. 核苷酸", "B. 氨基酸", "C. 葡萄糖", "D. 脂肪酸"], answer: "B", knowledgePoint: "氨基酸", analysis: "蛋白质由氨基酸通过肽键连接形成多肽链。" },
      { type: "choice", difficulty: 2, text: "蛋白质的二级结构包括？", options: ["A. α-螺旋和β-折叠", "B. 氨基酸序列", "C. 亚基组合", "D. 球形结构"], answer: "A", knowledgePoint: "二级结构", analysis: "蛋白质二级结构包括α-螺旋和β-折叠，由氢键维持。" },
      { type: "choice", difficulty: 3, text: "蛋白质变性的本质是？", options: ["A. 氨基酸序列改变", "B. 空间结构破坏", "C. 肽键断裂", "D. 分子量改变"], answer: "B", knowledgePoint: "蛋白质变性", analysis: "变性只破坏空间结构（二、三、四级结构），不破坏一级结构。" }
    ]
  },

  {
    lesson: 55, title: "生物技术",
    questions: [
      { type: "choice", difficulty: 1, text: "PCR的中文名称是？", options: ["A. 聚合酶链式反应", "B. 蛋白质合成", "C. DNA复制", "D. 基因克隆"], answer: "A", knowledgePoint: "PCR", analysis: "PCR（聚合酶链式反应）是快速扩增DNA片段的技术。" },
      { type: "choice", difficulty: 2, text: "电泳技术用于分离？", options: ["A. 蛋白质", "B. DNA片段", "C. 氨基酸", "D. 以上都是"], answer: "D", knowledgePoint: "电泳", analysis: "电泳可根据分子大小和电荷分离DNA、RNA、蛋白质等生物分子。" },
      { type: "choice", difficulty: 3, text: "基因克隆的载体通常是？", options: ["A. 质粒", "B. 染色体", "C. 蛋白质", "D. RNA"], answer: "A", knowledgePoint: "克隆载体", analysis: "质粒是常用的基因克隆载体，能携带外源DNA进入宿主细胞。" }
    ]
  },

  // ============ 第12章 生理与生态（6年级·A-Level）===========

  {
    lesson: 56, title: "循环系统深化",
    questions: [
      { type: "choice", difficulty: 1, text: "血压的最高值称为？", options: ["A. 舒张压", "B. 收缩压", "C. 平均压", "D. 脉压差"], answer: "B", knowledgePoint: "血压", analysis: "收缩压是心脏收缩时的最高血压。" },
      { type: "choice", difficulty: 2, text: "动脉粥样硬化的原因是？", options: ["A. 血管壁脂肪沉积", "B. 血管破裂", "C. 血压过低", "D. 血小板减少"], answer: "A", knowledgePoint: "动脉硬化", analysis: "动脉粥样硬化是血管壁脂质沉积导致血管狭窄。" },
      { type: "choice", difficulty: 3, text: "血流速度与血管横截面积的关系是？", options: ["A. 成正比", "B. 成反比", "C. 无关", "D. 先增后减"], answer: "B", knowledgePoint: "血流动力学", analysis: "根据连续性方程，血管横截面积越大，血流速度越慢。" }
    ]
  },

  {
    lesson: 57, title: "肾脏功能",
    questions: [
      { type: "choice", difficulty: 1, text: "肾脏的基本功能单位是？", options: ["A. 肾小球", "B. 肾小管", "C. 肾单位", "D. 集合管"], answer: "C", knowledgePoint: "肾单位", analysis: "肾单位是肾脏的基本功能单位，包括肾小球和肾小管。" },
      { type: "choice", difficulty: 2, text: "尿液形成的过程包括？", options: ["A. 过滤、重吸收、分泌", "B. 只有过滤", "C. 只有重吸收", "D. 只有分泌"], answer: "A", knowledgePoint: "尿液形成", analysis: "尿液形成包括肾小球过滤、肾小管重吸收和分泌三个过程。" },
      { type: "choice", difficulty: 3, text: "抗利尿激素作用于？", options: ["A. 肾小球", "B. 近端小管", "C. 远端小管和集合管", "D. 肾动脉"], answer: "C", knowledgePoint: "ADH作用", analysis: "抗利尿激素作用于远端小管和集合管，增加水的重吸收。" }
    ]
  },

  {
    lesson: 58, title: "植物应激反应",
    questions: [
      { type: "choice", difficulty: 1, text: "脱落酸（ABA）的作用是？", options: ["A. 促进生长", "B. 促进休眠", "C. 促进开花", "D. 促进果实成熟"], answer: "B", knowledgePoint: "脱落酸", analysis: "脱落酸促进种子休眠和叶片脱落。" },
      { type: "choice", difficulty: 2, text: "植物对干旱的响应包括？", options: ["A. 关闭气孔", "B. 增加根系生长", "C. 合成渗透调节物质", "D. 以上都是"], answer: "D", knowledgePoint: "干旱响应", analysis: "植物通过关闭气孔、增加根系生长、合成渗透调节物质等方式应对干旱。" },
      { type: "choice", difficulty: 3, text: "植物激素信号传导的特点是？", options: ["A. 单一激素独立作用", "B. 多种激素协同或拮抗", "C. 只有促进作用", "D. 只有抑制作用"], answer: "B", knowledgePoint: "激素相互作用", analysis: "植物激素通过协同或拮抗作用共同调节生理过程。" }
    ]
  },

  {
    lesson: 59, title: "群落演替",
    questions: [
      { type: "choice", difficulty: 1, text: "群落演替的起点是？", options: ["A. 顶级群落", "B. 裸地", "C. 森林", "D. 草原"], answer: "B", knowledgePoint: "演替起点", analysis: "群落演替从裸地开始，逐渐发展为复杂群落。" },
      { type: "choice", difficulty: 2, text: "先锋物种的特点是？", options: ["A. 竞争力强", "B. 繁殖快、适应裸地", "C. 体型大", "D. 寿命长"], answer: "B", knowledgePoint: "先锋物种", analysis: "先锋物种繁殖快、能适应裸地环境，是演替的先驱。" },
      { type: "choice", difficulty: 3, text: "顶极群落的特征是？", options: ["A. 物种多样性低", "B. 群落结构简单", "C. 群落稳定、自我维持", "D. 演替仍在进行"], answer: "C", knowledgePoint: "顶极群落", analysis: "顶极群落是演替的最终阶段，群落稳定且能自我维持。" }
    ]
  },

  {
    lesson: 60, title: "环境生物学",
    questions: [
      { type: "choice", difficulty: 1, text: "生物指示物用于监测？", options: ["A. 环境污染", "B. 物种数量", "C. 气候变化", "D. 以上都是"], answer: "D", knowledgePoint: "生物指示物", analysis: "生物指示物可监测环境污染、物种数量和气候变化等。" },
      { type: "choice", difficulty: 2, text: "指示物种的选择标准是？", options: ["A. 对环境变化不敏感", "B. 对环境变化敏感且分布广", "C. 只生活在特定环境", "D. 数量稀少"], answer: "B", knowledgePoint: "指示物种", analysis: "指示物种应对环境变化敏感且分布广泛。" },
      { type: "choice", difficulty: 3, text: "生物监测的优点是？", options: ["A. 只能测单一污染物", "B. 能反映长期综合影响", "C. 结果不准确", "D. 操作复杂"], answer: "B", knowledgePoint: "生物监测", analysis: "生物监测能反映环境变化的长期综合影响。" }
    ]
  },

  // ============ 第13章 遗传与进化（7年级·A-Level）===========

  {
    lesson: 61, title: "基因组学",
    questions: [
      { type: "choice", difficulty: 1, text: "基因组是指？", options: ["A. 一个物种的全部基因", "B. 一个细胞的DNA", "C. 蛋白质的总和", "D. 染色体的数量"], answer: "A", knowledgePoint: "基因组", analysis: "基因组是一个物种的全部遗传信息总和。" },
      { type: "choice", difficulty: 2, text: "基因测序技术包括？", options: ["A. Sanger测序", "B. 下一代测序", "C. 第三代测序", "D. 以上都是"], answer: "D", knowledgePoint: "测序技术", analysis: "基因测序技术包括Sanger测序、下一代测序和第三代测序。" },
      { type: "choice", difficulty: 3, text: "人类基因组计划的完成时间是？", options: ["A. 1990年", "B. 2000年", "C. 2010年", "D. 2020年"], answer: "B", knowledgePoint: "人类基因组计划", analysis: "人类基因组计划于2000年完成草图，2003年完成精细图。" }
    ]
  },

  {
    lesson: 62, title: "表观遗传",
    questions: [
      { type: "choice", difficulty: 1, text: "表观遗传是指？", options: ["A. DNA序列改变", "B. 基因表达改变但DNA序列不变", "C. 染色体数量改变", "D. 基因突变"], answer: "B", knowledgePoint: "表观遗传", analysis: "表观遗传是基因表达的可遗传改变，不涉及DNA序列变化。" },
      { type: "choice", difficulty: 2, text: "DNA甲基化的作用是？", options: ["A. 促进基因表达", "B. 抑制基因表达", "C. 没有作用", "D. 破坏DNA结构"], answer: "B", knowledgePoint: "DNA甲基化", analysis: "DNA甲基化通常导致基因沉默，抑制基因表达。" },
      { type: "choice", difficulty: 3, text: "组蛋白修饰包括？", options: ["A. 乙酰化", "B. 甲基化", "C. 磷酸化", "D. 以上都是"], answer: "D", knowledgePoint: "组蛋白修饰", analysis: "组蛋白修饰包括乙酰化、甲基化、磷酸化等，影响染色质结构和基因表达。" }
    ]
  },

  {
    lesson: 63, title: "进化证据",
    questions: [
      { type: "choice", difficulty: 1, text: "化石证据是？", options: ["A. 间接证据", "B. 直接证据", "C. 没有证据价值", "D. 只能证明灭绝"], answer: "B", knowledgePoint: "化石证据", analysis: "化石是生物进化的直接证据，记录了物种的演变。" },
      { type: "choice", difficulty: 2, text: "比较解剖学证据包括？", options: ["A. 同源器官", "B. 同功器官", "C. 痕迹器官", "D. 以上都是"], answer: "D", knowledgePoint: "比较解剖学", analysis: "比较解剖学通过同源器官、同功器官和痕迹器官证明进化。" },
      { type: "choice", difficulty: 3, text: "分子钟的原理是？", options: ["A. 基因突变率恒定", "B. 进化速度不变", "C. DNA序列越长进化越快", "D. 蛋白质结构不变"], answer: "A", knowledgePoint: "分子钟", analysis: "分子钟基于基因突变率相对恒定的假设，用于估算物种分化时间。" }
    ]
  },

  {
    lesson: 64, title: "物种关系",
    questions: [
      { type: "choice", difficulty: 1, text: "分支分类学的依据是？", options: ["A. 形态相似性", "B. 共同祖先", "C. 地理分布", "D. 体型大小"], answer: "B", knowledgePoint: "分支分类学", analysis: "分支分类学基于共同祖先建立物种关系。" },
      { type: "choice", difficulty: 2, text: "系统发育树的构建方法包括？", options: ["A. 距离法", "B. 最大简约法", "C. 最大似然法", "D. 以上都是"], answer: "D", knowledgePoint: "系统发育分析", analysis: "系统发育树构建方法包括距离法、最大简约法和最大似然法。" },
      { type: "choice", difficulty: 3, text: "单系群的定义是？", options: ["A. 包含祖先和部分后代", "B. 包含祖先和所有后代", "C. 只包含后代", "D. 没有共同祖先"], answer: "B", knowledgePoint: "单系群", analysis: "单系群包含一个共同祖先及其所有后代。" }
    ]
  },

  {
    lesson: 65, title: "生物多样性",
    questions: [
      { type: "choice", difficulty: 1, text: "生物多样性包括？", options: ["A. 物种多样性", "B. 遗传多样性", "C. 生态系统多样性", "D. 以上都是"], answer: "D", knowledgePoint: "生物多样性", analysis: "生物多样性包括物种多样性、遗传多样性和生态系统多样性。" },
      { type: "choice", difficulty: 2, text: "物种丰富度是指？", options: ["A. 物种数量", "B. 物种均匀度", "C. 物种间差异", "D. 物种分布"], answer: "A", knowledgePoint: "物种丰富度", analysis: "物种丰富度是指一个群落或生态系统中的物种数量。" },
      { type: "choice", difficulty: 3, text: "辛普森多样性指数考虑？", options: ["A. 只考虑物种数量", "B. 只考虑物种均匀度", "C. 物种数量和均匀度", "D. 物种大小"], answer: "C", knowledgePoint: "多样性指数", analysis: "辛普森多样性指数同时考虑物种数量和均匀度。" }
    ]
  },

  // ============ 第14章 综合应用（7年级·A-Level）===========

  {
    lesson: 66, title: "生物技术伦理",
    questions: [
      { type: "choice", difficulty: 1, text: "基因编辑的伦理问题包括？", options: ["A. 安全性", "B. 公平性", "C. 人类增强", "D. 以上都是"], answer: "D", knowledgePoint: "基因编辑伦理", analysis: "基因编辑涉及安全性、公平性和人类增强等伦理问题。" },
      { type: "choice", difficulty: 2, text: "CRISPR技术的优点是？", options: ["A. 效率低", "B. 特异性差", "C. 高效且精准", "D. 只能编辑植物"], answer: "C", knowledgePoint: "CRISPR", analysis: "CRISPR-Cas9技术高效且精准，可编辑多种生物的基因。" },
      { type: "choice", difficulty: 3, text: "生殖系基因编辑的争议在于？", options: ["A. 不影响后代", "B. 改变人类基因库", "C. 技术难度大", "D. 成本太高"], answer: "B", knowledgePoint: "生殖系编辑", analysis: "生殖系基因编辑会改变人类基因库，引发伦理争议。" }
    ]
  },

  {
    lesson: 67, title: "医学应用",
    questions: [
      { type: "choice", difficulty: 1, text: "单克隆抗体用于？", options: ["A. 疾病诊断", "B. 疾病治疗", "C. 药物研发", "D. 以上都是"], answer: "D", knowledgePoint: "单克隆抗体", analysis: "单克隆抗体广泛用于疾病诊断、治疗和药物研发。" },
      { type: "choice", difficulty: 2, text: "靶向治疗的特点是？", options: ["A. 无差别攻击细胞", "B. 特异性攻击癌细胞", "C. 只杀死正常细胞", "D. 效果差"], answer: "B", knowledgePoint: "靶向治疗", analysis: "靶向治疗特异性攻击癌细胞，减少对正常细胞的损伤。" },
      { type: "choice", difficulty: 3, text: "CAR-T细胞疗法用于治疗？", options: ["A. 细菌感染", "B. 病毒感染", "C. 癌症", "D. 遗传病"], answer: "C", knowledgePoint: "CAR-T疗法", analysis: "CAR-T细胞疗法通过改造患者T细胞来识别和攻击癌细胞。" }
    ]
  },

  {
    lesson: 68, title: "生态建模",
    questions: [
      { type: "choice", difficulty: 1, text: "Lotka-Volterra方程描述？", options: ["A. 种群增长", "B. 捕食者-猎物关系", "C. 竞争关系", "D. 共生关系"], answer: "B", knowledgePoint: "Lotka-Volterra", analysis: "Lotka-Volterra方程描述捕食者和猎物之间的动态关系。" },
      { type: "choice", difficulty: 2, text: "生态模型的类型包括？", options: ["A. 数学模型", "B. 计算机模拟", "C. 概念模型", "D. 以上都是"], answer: "D", knowledgePoint: "生态模型", analysis: "生态模型包括数学模型、计算机模拟和概念模型。" },
      { type: "choice", difficulty: 3, text: "模型验证的方法是？", options: ["A. 与实际数据对比", "B. 主观判断", "C. 忽略误差", "D. 只看理论"], answer: "A", knowledgePoint: "模型验证", analysis: "模型验证需要将模拟结果与实际观测数据对比。" }
    ]
  },

  {
    lesson: 69, title: "科研方法",
    questions: [
      { type: "choice", difficulty: 1, text: "科学实验的设计原则包括？", options: ["A. 对照原则", "B. 重复原则", "C. 随机原则", "D. 以上都是"], answer: "D", knowledgePoint: "实验设计", analysis: "科学实验设计应遵循对照、重复和随机原则。" },
      { type: "choice", difficulty: 2, text: "统计学检验用于？", options: ["A. 描述数据", "B. 推断总体", "C. 计算平均值", "D. 画图"], answer: "B", knowledgePoint: "统计检验", analysis: "统计学检验用于从样本推断总体特征。" },
      { type: "choice", difficulty: 3, text: "P值的意义是？", options: ["A. 结果的重要性", "B. 结果的可靠性", "C. 零假设成立的概率", "D. 效应大小"], answer: "C", knowledgePoint: "P值", analysis: "P值是在零假设成立的前提下，观察到当前数据或更极端数据的概率。" }
    ]
  },

  {
    lesson: 70, title: "A-Level综合模拟",
    questions: [
      { type: "choice", difficulty: 1, text: "A-Level生物考试重点包括？", options: ["A. 分子生物学", "B. 生态学", "C. 生理学", "D. 以上都是"], answer: "D", knowledgePoint: "考试重点", analysis: "A-Level生物涵盖分子生物学、生态学、生理学等多个领域。" },
      { type: "choice", difficulty: 2, text: "实验题考查的能力包括？", options: ["A. 实验设计", "B. 数据分析", "C. 结果解释", "D. 以上都是"], answer: "D", knowledgePoint: "实验能力", analysis: "A-Level实验题考查实验设计、数据分析和结果解释能力。" },
      { type: "choice", difficulty: 3, text: "科学写作的关键要素是？", options: ["A. 清晰、准确、逻辑", "B. 冗长、复杂", "C. 只描述现象", "D. 不引用文献"], answer: "A", knowledgePoint: "科学写作", analysis: "科学写作应清晰、准确、逻辑严密，引用适当文献。" }
    ]
  }

];

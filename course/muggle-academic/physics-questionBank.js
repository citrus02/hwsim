// physics-questionBank.js
// 霍格沃茨物理课程 - 题库（完整版）
// 教授：塞拉菲娜·穆迪
// 课程体系：英国 KS3 → GCSE → A-Level，共 70 课
// 每课3题：basic（基础）、medium（中等）、hard（困难）

export const questionBank = [
  // ────────────────────────────────────────────────────────────────
  // 第1章 力与运动（1年级·KS3）
  // ────────────────────────────────────────────────────────────────
  {
    lesson: 1, title: "速度、加速度与运动图像",
    questions: [
      { type: "choice", difficulty: 1, text: "平均速度的定义是：", options: ["A. 路程除以时间", "B. 位移除以时间", "C. 速度的平均值", "D. 速率"], answer: "A", knowledgePoint: "平均速度", analysis: "平均速度等于总路程除以总时间，描述物体运动的平均快慢。" },
      { type: "choice", difficulty: 2, text: "关于s-t图像，下列说法正确的是：", options: ["A. 斜率表示加速度", "B. 斜率表示速度", "C. 面积表示速度", "D. 截距表示加速度"], answer: "B", knowledgePoint: "s-t图像", analysis: "位移-时间图像的斜率表示速度，斜率越大，速度越快。" },
      { type: "choice", difficulty: 3, text: "一个物体做匀加速直线运动，初速度为2m/s，加速度为1m/s²，则3秒后的速度是：", options: ["A. 3m/s", "B. 4m/s", "C. 5m/s", "D. 6m/s"], answer: "C", knowledgePoint: "加速度", analysis: "v = v₀ + at = 2 + 1×3 = 5m/s。" }
    ]
  },
  {
    lesson: 2, title: "牛顿第一定律：惯性",
    questions: [
      { type: "choice", difficulty: 1, text: "牛顿第一定律又称为：", options: ["A. 加速度定律", "B. 惯性定律", "C. 作用力定律", "D. 万有引力定律"], answer: "B", knowledgePoint: "牛顿第一定律", analysis: "牛顿第一定律也叫惯性定律，描述物体保持原有运动状态的性质。" },
      { type: "choice", difficulty: 2, text: "关于惯性，下列说法正确的是：", options: ["A. 只有运动的物体才有惯性", "B. 物体速度越大惯性越大", "C. 物体质量越大惯性越大", "D. 惯性是一种力"], answer: "C", knowledgePoint: "惯性", analysis: "惯性是物体的固有属性，只与质量有关，质量越大惯性越大。" },
      { type: "choice", difficulty: 3, text: "汽车急刹车时乘客向前倾，这是因为：", options: ["A. 乘客受到向前的力", "B. 乘客具有惯性", "C. 汽车对乘客的作用力", "D. 乘客受到向后的力"], answer: "B", knowledgePoint: "惯性现象", analysis: "乘客由于惯性保持原来的运动状态，汽车刹车后乘客继续向前运动。" }
    ]
  },
  {
    lesson: 3, title: "牛顿第二定律：F=ma",
    questions: [
      { type: "choice", difficulty: 1, text: "牛顿第二定律的公式是：", options: ["A. F = mv", "B. F = ma", "C. F = m/a", "D. F = a/m"], answer: "B", knowledgePoint: "牛顿第二定律", analysis: "牛顿第二定律：力等于质量乘以加速度，F = ma。" },
      { type: "choice", difficulty: 2, text: "1牛顿的定义是：", options: ["A. 使1kg物体产生1m/s速度的力", "B. 使1kg物体产生1m/s²加速度的力", "C. 使1g物体产生1m/s²加速度的力", "D. 使1kg物体产生1N/kg加速度的力"], answer: "B", knowledgePoint: "力的单位", analysis: "1牛顿是使1千克质量的物体产生1米每二次方秒加速度的力。" },
      { type: "choice", difficulty: 3, text: "一个质量为5kg的物体受到10N的力作用，其加速度是：", options: ["A. 0.5m/s²", "B. 2m/s²", "C. 50m/s²", "D. 15m/s²"], answer: "B", knowledgePoint: "加速度计算", analysis: "a = F/m = 10N ÷ 5kg = 2m/s²。" }
    ]
  },
  {
    lesson: 4, title: "牛顿第三定律：作用与反作用",
    questions: [
      { type: "choice", difficulty: 1, text: "牛顿第三定律描述的是：", options: ["A. 力与加速度的关系", "B. 作用力与反作用力", "C. 惯性定律", "D. 万有引力"], answer: "B", knowledgePoint: "牛顿第三定律", analysis: "牛顿第三定律：作用力与反作用力大小相等、方向相反、作用在不同物体上。" },
      { type: "choice", difficulty: 2, text: "关于作用力与反作用力，下列说法正确的是：", options: ["A. 作用在同一物体上", "B. 大小不等", "C. 方向相同", "D. 作用在不同物体上"], answer: "D", knowledgePoint: "作用力与反作用力", analysis: "作用力与反作用力作用在不同物体上，这是与平衡力的本质区别。" },
      { type: "choice", difficulty: 3, text: "人走路时，人对地面的力和地面对人的力：", options: ["A. 是平衡力", "B. 是作用力与反作用力", "C. 大小不等", "D. 方向相同"], answer: "B", knowledgePoint: "实例分析", analysis: "人对地面的力和地面对人的力是一对作用力与反作用力，分别作用在地面和人身上。" }
    ]
  },
  {
    lesson: 5, title: "重力与自由落体",
    questions: [
      { type: "choice", difficulty: 1, text: "重力的方向总是：", options: ["A. 水平向右", "B. 竖直向下", "C. 垂直向下", "D. 指向天空"], answer: "B", knowledgePoint: "重力方向", analysis: "重力方向总是竖直向下，指向地心。" },
      { type: "choice", difficulty: 2, text: "重力公式是：", options: ["A. G = mv", "B. G = ma", "C. G = mg", "D. G = m/g"], answer: "C", knowledgePoint: "重力公式", analysis: "重力G = mg，其中g是重力加速度，约9.8N/kg。" },
      { type: "choice", difficulty: 3, text: "两个物体同时从同一高度自由下落（忽略空气阻力），则：", options: ["A. 质量大的先落地", "B. 质量小的先落地", "C. 同时落地", "D. 无法确定"], answer: "C", knowledgePoint: "自由落体", analysis: "自由落体运动中，所有物体的加速度都是g，与质量无关，所以同时落地。" }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // 第2章 能量（1年级·KS3）
  // ────────────────────────────────────────────────────────────────
  {
    lesson: 6, title: "能量的形式与守恒",
    questions: [
      { type: "choice", difficulty: 1, text: "下列哪种属于能量的形式？", options: ["A. 质量", "B. 动能", "C. 体积", "D. 密度"], answer: "B", knowledgePoint: "能量形式", analysis: "动能是能量的一种形式，物体由于运动而具有的能量。" },
      { type: "choice", difficulty: 2, text: "能量守恒定律的内容是：", options: ["A. 能量可以凭空产生", "B. 能量可以凭空消失", "C. 能量只能从一种形式转化为另一种形式", "D. 能量总量不断增加"], answer: "C", knowledgePoint: "能量守恒", analysis: "能量既不会凭空产生，也不会凭空消失，只会从一种形式转化为另一种形式。" },
      { type: "choice", difficulty: 3, text: "能量的单位是：", options: ["A. 牛顿", "B. 焦耳", "C. 瓦特", "D. 帕斯卡"], answer: "B", knowledgePoint: "能量单位", analysis: "能量的国际单位是焦耳（J）。" }
    ]
  },
  {
    lesson: 7, title: "做功：力与位移的乘积",
    questions: [
      { type: "choice", difficulty: 1, text: "功的定义是：", options: ["A. 力乘以时间", "B. 力乘以位移", "C. 位移除以时间", "D. 力除以位移"], answer: "B", knowledgePoint: "功的定义", analysis: "功等于力与物体在力的方向上位移的乘积，W = Fs。" },
      { type: "choice", difficulty: 2, text: "下列情况中力对物体做功的是：", options: ["A. 用力推桌子没动", "B. 提着水桶水平走", "C. 用力将石头举高", "D. 扛着书包站着"], answer: "C", knowledgePoint: "做功条件", analysis: "做功需要有力作用在物体上，且物体在力的方向上有位移。" },
      { type: "choice", difficulty: 3, text: "用50N的力将物体沿力的方向移动2m，做的功是：", options: ["A. 25J", "B. 50J", "C. 100J", "D. 52J"], answer: "C", knowledgePoint: "功的计算", analysis: "W = Fs = 50N × 2m = 100J。" }
    ]
  },
  {
    lesson: 8, title: "功率：能量转化的速率",
    questions: [
      { type: "choice", difficulty: 1, text: "功率的定义是：", options: ["A. 单位时间内做的功", "B. 做的总功", "C. 做功的时间", "D. 力的大小"], answer: "A", knowledgePoint: "功率概念", analysis: "功率是单位时间内做的功，描述做功的快慢。" },
      { type: "choice", difficulty: 2, text: "功率的单位是：", options: ["A. 焦耳", "B. 牛顿", "C. 瓦特", "D. 帕斯卡"], answer: "C", knowledgePoint: "功率单位", analysis: "功率的国际单位是瓦特（W）。" },
      { type: "choice", difficulty: 3, text: "一台机器在5秒内做了500焦耳的功，它的功率是：", options: ["A. 10W", "B. 100W", "C. 2500W", "D. 505W"], answer: "B", knowledgePoint: "功率计算", analysis: "P = W/t = 500J ÷ 5s = 100W。" }
    ]
  },
  {
    lesson: 9, title: "机械效率",
    questions: [
      { type: "choice", difficulty: 1, text: "机械效率的定义是：", options: ["A. 有用功与总功的比值", "B. 额外功与总功的比值", "C. 总功与有用功的比值", "D. 有用功与额外功的比值"], answer: "A", knowledgePoint: "机械效率", analysis: "机械效率是有用功占总功的百分比。" },
      { type: "choice", difficulty: 2, text: "机械效率总是：", options: ["A. 大于1", "B. 等于1", "C. 小于1", "D. 大于或等于1"], answer: "C", knowledgePoint: "机械效率特点", analysis: "由于额外功的存在，机械效率总是小于1。" },
      { type: "choice", difficulty: 3, text: "有用功为80J，总功为100J，则机械效率是：", options: ["A. 80%", "B. 20%", "C. 125%", "D. 100%"], answer: "A", knowledgePoint: "机械效率计算", analysis: "η = W有用/W总 × 100% = 80/100 × 100% = 80%。" }
    ]
  },
  {
    lesson: 10, title: "弹性势能与弹簧",
    questions: [
      { type: "choice", difficulty: 1, text: "胡克定律的公式是：", options: ["A. F = kx", "B. F = k/x", "C. F = x/k", "D. F = k+x"], answer: "A", knowledgePoint: "胡克定律", analysis: "胡克定律：弹性力F与形变量x成正比，F = kx。" },
      { type: "choice", difficulty: 2, text: "弹性势能的公式是：", options: ["A. E = kx", "B. E = ½kx", "C. E = ½kx²", "D. E = kx²"], answer: "C", knowledgePoint: "弹性势能", analysis: "弹性势能E = ½kx²，与形变量的平方成正比。" },
      { type: "choice", difficulty: 3, text: "弹簧的劲度系数k=100N/m，压缩0.1m，则弹性势能是：", options: ["A. 0.5J", "B. 1J", "C. 5J", "D. 10J"], answer: "A", knowledgePoint: "弹性势能计算", analysis: "E = ½kx² = 0.5 × 100 × 0.01 = 0.5J。" }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // 第3章 波动（2年级·KS3）
  // ────────────────────────────────────────────────────────────────
  {
    lesson: 11, title: "波的基本属性",
    questions: [
      { type: "choice", difficulty: 1, text: "波速、频率、波长的关系是：", options: ["A. v = fλ", "B. v = f/λ", "C. v = λ/f", "D. v = f+λ"], answer: "A", knowledgePoint: "波速公式", analysis: "波速等于频率乘以波长，v = fλ。" },
      { type: "choice", difficulty: 2, text: "横波与纵波的区别在于：", options: ["A. 传播速度不同", "B. 振动方向与传播方向的关系不同", "C. 波长不同", "D. 频率不同"], answer: "B", knowledgePoint: "横波与纵波", analysis: "横波振动方向与传播方向垂直，纵波振动方向与传播方向平行。" },
      { type: "choice", difficulty: 3, text: "频率为500Hz的声波，波长为0.68m，则声速是：", options: ["A. 340m/s", "B. 680m/s", "C. 170m/s", "D. 3400m/s"], answer: "A", knowledgePoint: "波速计算", analysis: "v = fλ = 500 × 0.68 = 340m/s。" }
    ]
  },
  {
    lesson: 12, title: "声波：纵波与传播介质",
    questions: [
      { type: "choice", difficulty: 1, text: "声音的传播需要：", options: ["A. 真空", "B. 介质", "C. 光", "D. 电场"], answer: "B", knowledgePoint: "声波传播", analysis: "声波是机械波，需要介质才能传播，真空不能传声。" },
      { type: "choice", difficulty: 2, text: "声速在下列哪种介质中最快？", options: ["A. 空气", "B. 水", "C. 钢铁", "D. 真空"], answer: "C", knowledgePoint: "声速与介质", analysis: "声速在固体中最快，液体次之，气体最慢。" },
      { type: "choice", difficulty: 3, text: "音调由什么决定？", options: ["A. 振幅", "B. 频率", "C. 音色", "D. 响度"], answer: "B", knowledgePoint: "音调", analysis: "音调由频率决定，频率越高，音调越高。" }
    ]
  },
  {
    lesson: 13, title: "光的反射：镜面与漫反射",
    questions: [
      { type: "choice", difficulty: 1, text: "光的反射定律中，反射角与入射角的关系是：", options: ["A. 反射角大于入射角", "B. 反射角等于入射角", "C. 反射角小于入射角", "D. 无固定关系"], answer: "B", knowledgePoint: "反射定律", analysis: "反射角等于入射角，这是反射定律的核心。" },
      { type: "choice", difficulty: 2, text: "我们能看到不发光的物体，是因为：", options: ["A. 物体发光", "B. 光的折射", "C. 光的漫反射", "D. 光的色散"], answer: "C", knowledgePoint: "漫反射", analysis: "物体表面发生漫反射，反射光进入我们的眼睛。" },
      { type: "choice", difficulty: 3, text: "平面镜成像的特点是：", options: ["A. 实像，放大", "B. 虚像，等大", "C. 实像，缩小", "D. 虚像，缩小"], answer: "B", knowledgePoint: "平面镜成像", analysis: "平面镜成虚像，像与物体大小相等、左右相反。" }
    ]
  },
  {
    lesson: 14, title: "光的折射：斯涅尔定律",
    questions: [
      { type: "choice", difficulty: 1, text: "光从空气进入水中时，传播方向：", options: ["A. 不改变", "B. 向法线偏折", "C. 远离法线偏折", "D. 任意方向"], answer: "B", knowledgePoint: "光的折射", analysis: "光从光疏介质进入光密介质时，向法线方向偏折。" },
      { type: "choice", difficulty: 2, text: "斯涅尔定律的公式是：", options: ["A. n₁sinθ₁ = n₂sinθ₂", "B. n₁cosθ₁ = n₂cosθ₂", "C. n₁tanθ₁ = n₂tanθ₂", "D. n₁θ₁ = n₂θ₂"], answer: "A", knowledgePoint: "斯涅尔定律", analysis: "n₁sinθ₁ = n₂sinθ₂，描述折射时入射角和折射角的关系。" },
      { type: "choice", difficulty: 3, text: "全反射发生的条件是：", options: ["A. 从光密介质射向光疏介质", "B. 入射角小于临界角", "C. 从光疏介质射向光密介质", "D. 任意情况"], answer: "A", knowledgePoint: "全反射", analysis: "全反射发生在光从光密介质射向光疏介质且入射角大于临界角时。" }
    ]
  },
  {
    lesson: 15, title: "透镜成像与放大镜",
    questions: [
      { type: "choice", difficulty: 1, text: "凸透镜对光线的作用是：", options: ["A. 发散", "B. 会聚", "C. 不变", "D. 先发散后会聚"], answer: "B", knowledgePoint: "凸透镜", analysis: "凸透镜中间厚边缘薄，对光线有会聚作用。" },
      { type: "choice", difficulty: 2, text: "当物体在凸透镜2倍焦距以外时，成的像：", options: ["A. 倒立放大实像", "B. 倒立缩小实像", "C. 正立放大虚像", "D. 不成像"], answer: "B", knowledgePoint: "凸透镜成像", analysis: "u > 2f时，成倒立缩小实像，照相机就是利用这个原理。" },
      { type: "choice", difficulty: 3, text: "放大镜的工作原理是：", options: ["A. 物体在2f以外", "B. 物体在f和2f之间", "C. 物体在f以内", "D. 物体在f处"], answer: "C", knowledgePoint: "放大镜", analysis: "放大镜利用物体在1倍焦距以内成正立放大虚像的原理。" }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // 第4章 电路（2年级·KS3）
  // ────────────────────────────────────────────────────────────────
  {
    lesson: 16, title: "电路基础",
    questions: [
      { type: "choice", difficulty: 1, text: "电路的基本组成包括：", options: ["A. 电源、导线、开关、用电器", "B. 只有电源和导线", "C. 只有开关和用电器", "D. 只有电源和用电器"], answer: "A", knowledgePoint: "电路组成", analysis: "完整电路需要电源、导线、开关和用电器四个部分。" },
      { type: "choice", difficulty: 2, text: "电流的方向规定为：", options: ["A. 电子流动的方向", "B. 正电荷流动的方向", "C. 任意方向", "D. 从负极到正极"], answer: "B", knowledgePoint: "电流方向", analysis: "电流方向规定为正电荷定向移动的方向，与电子流动方向相反。" },
      { type: "choice", difficulty: 3, text: "电路的三种状态不包括：", options: ["A. 通路", "B. 断路", "C. 短路", "D. 回路"], answer: "D", knowledgePoint: "电路状态", analysis: "电路有三种状态：通路、断路（开路）、短路。" }
    ]
  },
  {
    lesson: 17, title: "欧姆定律及其适用范围",
    questions: [
      { type: "choice", difficulty: 1, text: "欧姆定律的公式是：", options: ["A. I = U/R", "B. I = R/U", "C. U = I/R", "D. R = IU"], answer: "A", knowledgePoint: "欧姆定律", analysis: "欧姆定律：I = U/R，电流等于电压除以电阻。" },
      { type: "choice", difficulty: 2, text: "电阻的单位是：", options: ["A. 伏特", "B. 安培", "C. 欧姆", "D. 瓦特"], answer: "C", knowledgePoint: "电阻单位", analysis: "电阻的国际单位是欧姆（Ω）。" },
      { type: "choice", difficulty: 3, text: "一个电阻为20Ω的导体，两端电压为40V，则电流是：", options: ["A. 0.5A", "B. 2A", "C. 800A", "D. 60A"], answer: "B", knowledgePoint: "欧姆定律计算", analysis: "I = U/R = 40V ÷ 20Ω = 2A。" }
    ]
  },
  {
    lesson: 18, title: "串联与并联电路的计算",
    questions: [
      { type: "choice", difficulty: 1, text: "串联电路的特点是：", options: ["A. 电流处处相等", "B. 电压处处相等", "C. 电阻处处相等", "D. 功率处处相等"], answer: "A", knowledgePoint: "串联电路", analysis: "串联电路中电流处处相等，总电压等于各部分电压之和。" },
      { type: "choice", difficulty: 2, text: "并联电路的特点是：", options: ["A. 电流处处相等", "B. 电压处处相等", "C. 电阻处处相等", "D. 功率处处相等"], answer: "B", knowledgePoint: "并联电路", analysis: "并联电路中各支路电压相等，总电流等于各支路电流之和。" },
      { type: "choice", difficulty: 3, text: "两个10Ω的电阻并联，总电阻是：", options: ["A. 20Ω", "B. 10Ω", "C. 5Ω", "D. 1Ω"], answer: "C", knowledgePoint: "并联电阻", analysis: "并联电阻：1/R = 1/R₁ + 1/R₂ = 1/10 + 1/10 = 2/10，所以R = 5Ω。" }
    ]
  },
  {
    lesson: 19, title: "电功率与电能消耗",
    questions: [
      { type: "choice", difficulty: 1, text: "电功率的公式是：", options: ["A. P = UI", "B. P = U/I", "C. P = I/U", "D. P = U+I"], answer: "A", knowledgePoint: "电功率", analysis: "电功率P = UI，等于电压乘以电流。" },
      { type: "choice", difficulty: 2, text: "电能的单位是：", options: ["A. 瓦特", "B. 焦耳或千瓦时", "C. 安培", "D. 伏特"], answer: "B", knowledgePoint: "电能单位", analysis: "电能单位是焦耳（J）或千瓦时（度）。" },
      { type: "choice", difficulty: 3, text: "一个100W的灯泡工作10小时，消耗的电能是：", options: ["A. 1度", "B. 10度", "C. 0.1度", "D. 1000度"], answer: "A", knowledgePoint: "电能计算", analysis: "W = Pt = 0.1kW × 10h = 1kWh = 1度。" }
    ]
  },
  {
    lesson: 20, title: "磁场与电流的关系",
    questions: [
      { type: "choice", difficulty: 1, text: "证明电流周围存在磁场的实验是：", options: ["A. 奥斯特实验", "B. 法拉第实验", "C. 牛顿实验", "D. 伽利略实验"], answer: "A", knowledgePoint: "电流磁效应", analysis: "奥斯特实验证明了电流周围存在磁场。" },
      { type: "choice", difficulty: 2, text: "右手螺旋定则用于判断：", options: ["A. 电流方向", "B. 磁场方向", "C. 力的方向", "D. 电压方向"], answer: "B", knowledgePoint: "右手螺旋定则", analysis: "右手螺旋定则用于判断电流产生的磁场方向。" },
      { type: "choice", difficulty: 3, text: "电磁铁的磁性强弱与什么有关？", options: ["A. 只有电流大小", "B. 只有线圈匝数", "C. 电流大小和线圈匝数", "D. 与电流和匝数无关"], answer: "C", knowledgePoint: "电磁铁", analysis: "电磁铁的磁性强弱与电流大小和线圈匝数都有关。" }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // 第5章 热学（3年级·KS3）
  // ────────────────────────────────────────────────────────────────
  {
    lesson: 21, title: "温度与热量的区别",
    questions: [
      { type: "choice", difficulty: 1, text: "温度是：", options: ["A. 物体所含热量的多少", "B. 物体冷热程度的量度", "C. 物体内能的多少", "D. 物体做功的能力"], answer: "B", knowledgePoint: "温度概念", analysis: "温度是物体冷热程度的标志，是状态量。" },
      { type: "choice", difficulty: 2, text: "热量是：", options: ["A. 状态量", "B. 过程量", "C. 与温度无关", "D. 物体的属性"], answer: "B", knowledgePoint: "热量概念", analysis: "热量是热传递过程中传递的能量，是过程量。" },
      { type: "choice", difficulty: 3, text: "热力学第零定律的意义是：", options: ["A. 定义了温度", "B. 定义了热量", "C. 定义了内能", "D. 定义了功"], answer: "A", knowledgePoint: "热力学第零定律", analysis: "热力学第零定律定义了温度，是热平衡的传递性。" }
    ]
  },
  {
    lesson: 22, title: "热传递：传导、对流、辐射",
    questions: [
      { type: "choice", difficulty: 1, text: "热传导发生在：", options: ["A. 气体中", "B. 液体中", "C. 固体中", "D. 真空中"], answer: "C", knowledgePoint: "热传导", analysis: "热传导主要发生在固体中，通过分子碰撞传递热量。" },
      { type: "choice", difficulty: 2, text: "热对流主要发生在：", options: ["A. 固体中", "B. 流体中", "C. 真空中", "D. 金属中"], answer: "B", knowledgePoint: "热对流", analysis: "热对流发生在流体（液体和气体）中，通过流体流动传递热量。" },
      { type: "choice", difficulty: 3, text: "热辐射的特点是：", options: ["A. 需要介质", "B. 不需要介质", "C. 只在固体中传播", "D. 只在液体中传播"], answer: "B", knowledgePoint: "热辐射", analysis: "热辐射以电磁波形式传播，不需要介质，太阳的热量就是这样传到地球的。" }
    ]
  },
  {
    lesson: 23, title: "比热容：为何海洋比陆地慢热",
    questions: [
      { type: "choice", difficulty: 1, text: "比热容的定义是：", options: ["A. 单位质量升高1℃吸收的热量", "B. 单位体积升高1℃吸收的热量", "C. 单位质量升高1K吸收的热量", "D. 单位物质的量升高1℃吸收的热量"], answer: "A", knowledgePoint: "比热容", analysis: "比热容是单位质量物质升高1℃所吸收的热量。" },
      { type: "choice", difficulty: 2, text: "水的比热容是：", options: ["A. 4.2×10² J/(kg·℃)", "B. 4.2×10³ J/(kg·℃)", "C. 4.2×10⁴ J/(kg·℃)", "D. 4.2 J/(kg·℃)"], answer: "B", knowledgePoint: "水的比热容", analysis: "水的比热容是4.2×10³ J/(kg·℃)，是常见物质中较大的。" },
      { type: "choice", difficulty: 3, text: "质量相同的水和沙子吸收相同热量后：", options: ["A. 水温度升高多", "B. 沙子温度升高多", "C. 温度升高相同", "D. 无法比较"], answer: "B", knowledgePoint: "比热容应用", analysis: "沙子比热容小，吸收相同热量温度升高更多，这就是海边昼夜温差小的原因。" }
    ]
  },
  {
    lesson: 24, title: "物态变化与潜热",
    questions: [
      { type: "choice", difficulty: 1, text: "熔化是：", options: ["A. 固态变液态", "B. 液态变固态", "C. 液态变气态", "D. 固态变气态"], answer: "A", knowledgePoint: "熔化", analysis: "熔化是物质从固态变成液态的过程。" },
      { type: "choice", difficulty: 2, text: "潜热是：", options: ["A. 物态变化时吸收或放出的热量", "B. 温度变化时吸收或放出的热量", "C. 内能变化的量度", "D. 做功的能力"], answer: "A", knowledgePoint: "潜热", analysis: "潜热是物质在物态变化时温度不变但吸收或放出的热量。" },
      { type: "choice", difficulty: 3, text: "下列哪个过程吸收热量？", options: ["A. 凝固", "B. 液化", "C. 凝华", "D. 汽化"], answer: "D", knowledgePoint: "物态变化能量", analysis: "熔化、汽化、升华吸收热量；凝固、液化、凝华放出热量。" }
    ]
  },
  {
    lesson: 25, title: "气体定律：压强、体积、温度",
    questions: [
      { type: "choice", difficulty: 1, text: "波义耳定律描述的是：", options: ["A. 温度不变时，压强与体积的关系", "B. 体积不变时，压强与温度的关系", "C. 压强不变时，体积与温度的关系", "D. 任意情况"], answer: "A", knowledgePoint: "波义耳定律", analysis: "波义耳定律：温度不变时，压强与体积成反比。" },
      { type: "choice", difficulty: 2, text: "查理定律描述的是：", options: ["A. 温度不变时，压强与体积的关系", "B. 体积不变时，压强与温度的关系", "C. 压强不变时，体积与温度的关系", "D. 任意情况"], answer: "B", knowledgePoint: "查理定律", analysis: "查理定律：体积不变时，压强与热力学温度成正比。" },
      { type: "choice", difficulty: 3, text: "理想气体状态方程是：", options: ["A. PV = nRT", "B. PV = RT", "C. P = nRT", "D. V = nRT"], answer: "A", knowledgePoint: "理想气体状态方程", analysis: "理想气体状态方程PV = nRT，综合了波义耳定律和查理定律。" }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // 第6章 粒子物理入门（3年级·KS3）
  // ────────────────────────────────────────────────────────────────
  {
    lesson: 26, title: "原子模型的演变历史",
    questions: [
      { type: "choice", difficulty: 1, text: "道尔顿原子论认为：", options: ["A. 原子是可分的", "B. 原子是不可分的实心球", "C. 原子有内部结构", "D. 原子由电子和原子核组成"], answer: "B", knowledgePoint: "道尔顿原子论", analysis: "道尔顿认为原子是不可分的实心球。" },
      { type: "choice", difficulty: 2, text: "卢瑟福的核式结构模型认为：", options: ["A. 原子是均匀的", "B. 原子中心有一个原子核", "C. 电子均匀分布在原子中", "D. 原子没有结构"], answer: "B", knowledgePoint: "卢瑟福模型", analysis: "卢瑟福通过α粒子散射实验提出原子中心有一个原子核。" },
      { type: "choice", difficulty: 3, text: "玻尔原子模型的特点是：", options: ["A. 电子在任意轨道运动", "B. 电子在特定轨道运动", "C. 电子静止不动", "D. 电子随机运动"], answer: "B", knowledgePoint: "玻尔模型", analysis: "玻尔提出电子在特定轨道上运动，轨道间的能量差是量子化的。" }
    ]
  },
  {
    lesson: 27, title: "放射性：α、β、γ 辐射",
    questions: [
      { type: "choice", difficulty: 1, text: "α射线是：", options: ["A. 电子", "B. 氦原子核", "C. 电磁波", "D. 中子"], answer: "B", knowledgePoint: "α辐射", analysis: "α射线是氦原子核，由2个质子和2个中子组成。" },
      { type: "choice", difficulty: 2, text: "哪种辐射穿透能力最强？", options: ["A. α射线", "B. β射线", "C. γ射线", "D. 一样强"], answer: "C", knowledgePoint: "辐射穿透能力", analysis: "γ射线穿透能力最强，需要铅或混凝土阻挡。" },
      { type: "choice", difficulty: 3, text: "β衰变时，原子核发生什么变化？", options: ["A. 质子数减少1", "B. 质子数增加1", "C. 中子数增加1", "D. 质量数增加1"], answer: "B", knowledgePoint: "β衰变", analysis: "β衰变时，中子变成质子并发射电子，质子数增加1。" }
    ]
  },
  {
    lesson: 28, title: "核裂变与链式反应",
    questions: [
      { type: "choice", difficulty: 1, text: "核裂变是：", options: ["A. 轻核结合成重核", "B. 重核分裂成中核", "C. 原子核发射射线", "D. 原子核吸收中子"], answer: "B", knowledgePoint: "核裂变", analysis: "核裂变是重原子核分裂成两个或多个中等质量的原子核。" },
      { type: "choice", difficulty: 2, text: "链式反应发生的条件是：", options: ["A. 有足够的可裂变物质", "B. 有足够的中子", "C. 有足够的温度", "D. 有足够的压力"], answer: "A", knowledgePoint: "链式反应", analysis: "链式反应需要足够多的可裂变物质（临界质量）才能维持。" },
      { type: "choice", difficulty: 3, text: "核电站利用的是：", options: ["A. 核聚变", "B. 核裂变", "C. 放射性衰变", "D. 化学反应"], answer: "B", knowledgePoint: "核能利用", analysis: "核电站利用核裂变释放的能量发电。" }
    ]
  },
  {
    lesson: 29, title: "核聚变：太阳的能量来源",
    questions: [
      { type: "choice", difficulty: 1, text: "核聚变是：", options: ["A. 重核分裂", "B. 轻核结合", "C. 原子核衰变", "D. 原子核裂变"], answer: "B", knowledgePoint: "核聚变", analysis: "核聚变是轻原子核结合成较重原子核的过程。" },
      { type: "choice", difficulty: 2, text: "太阳的能量来源是：", options: ["A. 核裂变", "B. 核聚变", "C. 化学反应", "D. 放射性衰变"], answer: "B", knowledgePoint: "太阳能量", analysis: "太阳核心进行氢聚变成氦的反应，释放巨大能量。" },
      { type: "choice", difficulty: 3, text: "核聚变与核裂变的区别是：", options: ["A. 核聚变释放能量更多", "B. 核裂变释放能量更多", "C. 释放能量相同", "D. 核聚变不释放能量"], answer: "A", knowledgePoint: "核反应比较", analysis: "核聚变释放的能量比核裂变更多，且燃料更丰富。" }
    ]
  },
  {
    lesson: 30, title: "粒子物理概述：夸克与轻子",
    questions: [
      { type: "choice", difficulty: 1, text: "质子由什么组成？", options: ["A. 电子", "B. 夸克", "C. 中子", "D. 中微子"], answer: "B", knowledgePoint: "夸克", analysis: "质子由两个上夸克和一个下夸克组成。" },
      { type: "choice", difficulty: 2, text: "轻子包括：", options: ["A. 夸克和胶子", "B. 电子和中微子", "C. 质子和中子", "D. 光子和引力子"], answer: "B", knowledgePoint: "轻子", analysis: "轻子包括电子、μ子、τ子及其对应的中微子。" },
      { type: "choice", difficulty: 3, text: "标准模型不包括：", options: ["A. 夸克", "B. 轻子", "C. 希格斯玻色子", "D. 引力子"], answer: "D", knowledgePoint: "标准模型", analysis: "标准模型描述了电磁、弱、强三种相互作用，但不包括引力。" }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // 第7章 力学深化（4年级·GCSE）
  // ────────────────────────────────────────────────────────────────
  {
    lesson: 31, title: "动量与冲量：碰撞分析",
    questions: [
      { type: "choice", difficulty: 1, text: "动量的定义是：", options: ["A. p = mv", "B. p = m/v", "C. p = ma", "D. p = F/t"], answer: "A", knowledgePoint: "动量", analysis: "动量p = mv，是质量与速度的乘积。" },
      { type: "choice", difficulty: 2, text: "动量守恒定律的条件是：", options: ["A. 系统不受外力", "B. 系统受合外力为零", "C. 系统内力为零", "D. 系统动量为零"], answer: "B", knowledgePoint: "动量守恒", analysis: "动量守恒定律：系统不受外力或合外力为零时，总动量守恒。" },
      { type: "choice", difficulty: 3, text: "弹性碰撞的特点是：", options: ["A. 动量守恒，动能不守恒", "B. 动量不守恒，动能守恒", "C. 动量和动能都守恒", "D. 动量和动能都不守恒"], answer: "C", knowledgePoint: "弹性碰撞", analysis: "弹性碰撞中动量和动能都守恒，如理想台球碰撞。" }
    ]
  },
  {
    lesson: 32, title: "圆周运动：向心加速度",
    questions: [
      { type: "choice", difficulty: 1, text: "匀速圆周运动的特点是：", options: ["A. 速度大小和方向都不变", "B. 速度大小不变，方向改变", "C. 速度大小改变，方向不变", "D. 速度大小和方向都改变"], answer: "B", knowledgePoint: "匀速圆周运动", analysis: "匀速圆周运动速率不变，但速度方向沿切线方向不断改变。" },
      { type: "choice", difficulty: 2, text: "向心加速度的公式是：", options: ["A. a = v²/r", "B. a = vr", "C. a = v/r", "D. a = r/v"], answer: "A", knowledgePoint: "向心加速度", analysis: "向心加速度a = v²/r = ω²r，方向指向圆心。" },
      { type: "choice", difficulty: 3, text: "向心力的来源可以是：", options: ["A. 只有重力", "B. 只有弹力", "C. 只有摩擦力", "D. 任何力"], answer: "D", knowledgePoint: "向心力", analysis: "向心力是效果力，可以是重力、弹力、摩擦力或它们的合力。" }
    ]
  },
  {
    lesson: 33, title: "万有引力：行星运动",
    questions: [
      { type: "choice", difficulty: 1, text: "万有引力定律的公式是：", options: ["A. F = Gm₁m₂/r", "B. F = Gm₁m₂/r²", "C. F = Gm₁/m₂r", "D. F = Gm₁+m₂/r"], answer: "B", knowledgePoint: "万有引力定律", analysis: "万有引力F = Gm₁m₂/r²，与质量乘积成正比，与距离平方成反比。" },
      { type: "choice", difficulty: 2, text: "开普勒第一定律说的是：", options: ["A. 行星轨道是椭圆", "B. 行星运动周期的平方与轨道半径的三次方成正比", "C. 行星与太阳连线在相等时间内扫过相等面积", "D. 行星做匀速圆周运动"], answer: "A", knowledgePoint: "开普勒定律", analysis: "开普勒第一定律：行星轨道是椭圆，太阳在一个焦点上。" },
      { type: "choice", difficulty: 3, text: "地球同步卫星的周期是：", options: ["A. 12小时", "B. 24小时", "C. 36小时", "D. 48小时"], answer: "B", knowledgePoint: "同步卫星", analysis: "地球同步卫星的周期与地球自转周期相同，为24小时。" }
    ]
  },
  {
    lesson: 34, title: "简谐运动：摆与弹簧",
    questions: [
      { type: "choice", difficulty: 1, text: "简谐运动的特点是：", options: ["A. 加速度与位移成正比且反向", "B. 加速度与位移成正比且同向", "C. 加速度与速度成正比", "D. 加速度为零"], answer: "A", knowledgePoint: "简谐运动", analysis: "简谐运动中，加速度a = -ω²x，与位移成正比且反向。" },
      { type: "choice", difficulty: 2, text: "单摆的周期公式是：", options: ["A. T = 2π√(l/g)", "B. T = 2π√(g/l)", "C. T = 2π√(m/k)", "D. T = 2π√(k/m)"], answer: "A", knowledgePoint: "单摆周期", analysis: "单摆周期T = 2π√(l/g)，与摆长和重力加速度有关。" },
      { type: "choice", difficulty: 3, text: "弹簧振子的周期公式是：", options: ["A. T = 2π√(l/g)", "B. T = 2π√(g/l)", "C. T = 2π√(m/k)", "D. T = 2π√(k/m)"], answer: "C", knowledgePoint: "弹簧振子周期", analysis: "弹簧振子周期T = 2π√(m/k)，与质量和劲度系数有关。" }
    ]
  },
  {
    lesson: 35, title: "弹性形变与弹性系数",
    questions: [
      { type: "choice", difficulty: 1, text: "弹性限度是：", options: ["A. 材料能承受的最大力", "B. 材料能恢复原状的最大形变量", "C. 材料的断裂点", "D. 材料的熔点"], answer: "B", knowledgePoint: "弹性限度", analysis: "弹性限度是材料能恢复原状的最大形变量，超过此限度会产生永久形变。" },
      { type: "choice", difficulty: 2, text: "劲度系数k的物理意义是：", options: ["A. 弹簧的长度", "B. 使弹簧伸长单位长度所需的力", "C. 弹簧的质量", "D. 弹簧的弹性势能"], answer: "B", knowledgePoint: "劲度系数", analysis: "劲度系数k表示弹簧的'硬度'，k越大，弹簧越硬。" },
      { type: "choice", difficulty: 3, text: "应力的定义是：", options: ["A. 力除以面积", "B. 面积除以力", "C. 力乘以面积", "D. 力加面积"], answer: "A", knowledgePoint: "应力", analysis: "应力σ = F/A，是单位面积上的内力。" }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // 第8章 电磁学（4年级·GCSE）
  // ────────────────────────────────────────────────────────────────
  {
    lesson: 36, title: "电场概念与电场力",
    questions: [
      { type: "choice", difficulty: 1, text: "电场强度的定义是：", options: ["A. E = F/q", "B. E = q/F", "C. E = F×q", "D. E = F+q"], answer: "A", knowledgePoint: "电场强度", analysis: "电场强度E = F/q，是单位正电荷受到的电场力。" },
      { type: "choice", difficulty: 2, text: "库仑定律的公式是：", options: ["A. F = kQ₁Q₂/r", "B. F = kQ₁Q₂/r²", "C. F = kQ₁/Q₂r", "D. F = kQ₁+Q₂/r"], answer: "B", knowledgePoint: "库仑定律", analysis: "库仑定律F = kQ₁Q₂/r²，描述电荷间的静电力。" },
      { type: "choice", difficulty: 3, text: "电场线的特点是：", options: ["A. 从负电荷出发，终止于正电荷", "B. 从正电荷出发，终止于负电荷", "C. 可以相交", "D. 是闭合曲线"], answer: "B", knowledgePoint: "电场线", analysis: "电场线从正电荷出发，终止于负电荷，不相交。" }
    ]
  },
  {
    lesson: 37, title: "电容：储存电荷",
    questions: [
      { type: "choice", difficulty: 1, text: "电容的定义是：", options: ["A. C = Q/U", "B. C = U/Q", "C. C = Q×U", "D. C = Q+U"], answer: "A", knowledgePoint: "电容", analysis: "电容C = Q/U，是电容器储存电荷的能力。" },
      { type: "choice", difficulty: 2, text: "平行板电容器的电容公式是：", options: ["A. C = ε₀εᵣS/d", "B. C = ε₀εᵣd/S", "C. C = ε₀S/εᵣd", "D. C = εᵣS/ε₀d"], answer: "A", knowledgePoint: "平行板电容", analysis: "平行板电容器C = ε₀εᵣS/d，与面积成正比，与距离成反比。" },
      { type: "choice", difficulty: 3, text: "电容串联的特点是：", options: ["A. 总电容增大", "B. 总电容减小", "C. 各电容相等", "D. 各电容电压相等"], answer: "B", knowledgePoint: "电容串联", analysis: "电容串联时总电容减小，与电阻并联类似。" }
    ]
  },
  {
    lesson: 38, title: "电磁感应：法拉第定律",
    questions: [
      { type: "choice", difficulty: 1, text: "电磁感应现象是：", options: ["A. 电流产生磁场", "B. 磁场产生电流", "C. 电场产生磁场", "D. 磁场产生电场"], answer: "B", knowledgePoint: "电磁感应", analysis: "电磁感应是变化的磁场产生感应电流的现象。" },
      { type: "choice", difficulty: 2, text: "法拉第电磁感应定律的公式是：", options: ["A. E = nΔΦ/Δt", "B. E = nΦ/t", "C. E = Φ/nt", "D. E = n+Φ/t"], answer: "A", knowledgePoint: "法拉第定律", analysis: "感应电动势E = nΔΦ/Δt，与磁通量变化率成正比。" },
      { type: "choice", difficulty: 3, text: "楞次定律说的是：", options: ["A. 感应电流的磁场阻碍原磁场变化", "B. 感应电流的磁场增强原磁场", "C. 感应电流与原电流方向相同", "D. 感应电流与原电流方向相反"], answer: "A", knowledgePoint: "楞次定律", analysis: "楞次定律：感应电流的磁场总是阻碍引起感应电流的磁通量变化。" }
    ]
  },
  {
    lesson: 39, title: "交流电与发电机",
    questions: [
      { type: "choice", difficulty: 1, text: "交流电的特点是：", options: ["A. 电流方向不变", "B. 电流方向周期性变化", "C. 电流大小不变", "D. 电压不变"], answer: "B", knowledgePoint: "交流电", analysis: "交流电的电流方向周期性变化。" },
      { type: "choice", difficulty: 2, text: "发电机的原理是：", options: ["A. 电流的磁效应", "B. 电磁感应", "C. 通电线圈在磁场中受力", "D. 静电感应"], answer: "B", knowledgePoint: "发电机", analysis: "发电机利用电磁感应原理，将机械能转化为电能。" },
      { type: "choice", difficulty: 3, text: "我国交流电的频率是：", options: ["A. 40Hz", "B. 50Hz", "C. 60Hz", "D. 100Hz"], answer: "B", knowledgePoint: "交流电频率", analysis: "我国电网交流电频率是50Hz。" }
    ]
  },
  {
    lesson: 40, title: "变压器：能量的高效传输",
    questions: [
      { type: "choice", difficulty: 1, text: "变压器的工作原理是：", options: ["A. 电流的磁效应", "B. 电磁感应", "C. 静电感应", "D. 通电线圈受力"], answer: "B", knowledgePoint: "变压器", analysis: "变压器利用互感现象，属于电磁感应。" },
      { type: "choice", difficulty: 2, text: "理想变压器的变压比是：", options: ["A. U₁/U₂ = n₁/n₂", "B. U₁/U₂ = n₂/n₁", "C. U₁/U₂ = I₁/I₂", "D. U₁/U₂ = P₁/P₂"], answer: "A", knowledgePoint: "变压比", analysis: "理想变压器电压比等于匝数比：U₁/U₂ = n₁/n₂。" },
      { type: "choice", difficulty: 3, text: "远距离输电为什么要用高压？", options: ["A. 减小电流，降低损耗", "B. 增大电流，提高功率", "C. 减小电压，降低风险", "D. 增大电压，提高速度"], answer: "A", knowledgePoint: "高压输电", analysis: "高压输电可以减小电流，根据P=UI和P损=I²R，减小电流能显著降低线路损耗。" }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // 第9章 波动深化（5年级·GCSE）
  // ────────────────────────────────────────────────────────────────
  {
    lesson: 41, title: "波的叠加与干涉现象",
    questions: [
      { type: "choice", difficulty: 1, text: "波的叠加原理是：", options: ["A. 两列波相遇时相互抵消", "B. 两列波相遇时相互增强", "C. 两列波相遇时位移叠加", "D. 两列波相遇时相互排斥"], answer: "C", knowledgePoint: "波的叠加", analysis: "波的叠加原理：两列波相遇时，位移是两列波位移的矢量和。" },
      { type: "choice", difficulty: 2, text: "相长干涉的条件是：", options: ["A. 路程差为波长的整数倍", "B. 路程差为半波长的奇数倍", "C. 路程差为零", "D. 路程差为任意值"], answer: "A", knowledgePoint: "相长干涉", analysis: "相长干涉：路程差为波长的整数倍，振幅相加。" },
      { type: "choice", difficulty: 3, text: "双缝干涉条纹间距公式是：", options: ["A. Δy = λL/d", "B. Δy = λd/L", "C. Δy = Ld/λ", "D. Δy = Lλ/d"], answer: "A", knowledgePoint: "双缝干涉", analysis: "双缝干涉条纹间距Δy = λL/d，与波长成正比。" }
    ]
  },
  {
    lesson: 42, title: "衍射：波绕过障碍物",
    questions: [
      { type: "choice", difficulty: 1, text: "衍射现象是：", options: ["A. 波沿直线传播", "B. 波绕过障碍物传播", "C. 波被障碍物反射", "D. 波被障碍物吸收"], answer: "B", knowledgePoint: "衍射", analysis: "衍射是波绕过障碍物继续传播的现象。" },
      { type: "choice", difficulty: 2, text: "衍射明显的条件是：", options: ["A. 障碍物尺寸远大于波长", "B. 障碍物尺寸与波长相当时", "C. 障碍物尺寸远小于波长", "D. 与尺寸无关"], answer: "B", knowledgePoint: "衍射条件", analysis: "当障碍物尺寸与波长相当时，衍射现象明显。" },
      { type: "choice", difficulty: 3, text: "圆孔衍射的中央亮斑叫：", options: ["A. 牛顿斑", "B. 艾里斑", "C. 泊松斑", "D. 夫琅禾费斑"], answer: "B", knowledgePoint: "圆孔衍射", analysis: "圆孔衍射的中央亮斑称为艾里斑。" }
    ]
  },
  {
    lesson: 43, title: "驻波与共振",
    questions: [
      { type: "choice", difficulty: 1, text: "驻波是：", options: ["A. 两列同向波叠加", "B. 两列反向波叠加", "C. 一列波的传播", "D. 波的反射"], answer: "B", knowledgePoint: "驻波", analysis: "驻波是两列振幅相同的相干波沿相反方向传播时叠加形成的。" },
      { type: "choice", difficulty: 2, text: "驻波中振幅最大的点叫：", options: ["A. 波节", "B. 波腹", "C. 波峰", "D. 波谷"], answer: "B", knowledgePoint: "波腹", analysis: "驻波中振幅最大的点叫波腹，振幅为零的点叫波节。" },
      { type: "choice", difficulty: 3, text: "共振发生的条件是：", options: ["A. 驱动力频率等于固有频率", "B. 驱动力频率大于固有频率", "C. 驱动力频率小于固有频率", "D. 任意频率"], answer: "A", knowledgePoint: "共振", analysis: "当驱动力频率等于物体固有频率时，发生共振，振幅最大。" }
    ]
  },
  {
    lesson: 44, title: "多普勒效应：救护车的音调变化",
    questions: [
      { type: "choice", difficulty: 1, text: "多普勒效应是：", options: ["A. 波源运动时频率变化", "B. 观察者运动时频率变化", "C. 波源或观察者相对运动时频率变化", "D. 频率不变"], answer: "C", knowledgePoint: "多普勒效应", analysis: "多普勒效应：波源和观察者相对运动时，观察者接收到的频率发生变化。" },
      { type: "choice", difficulty: 2, text: "波源靠近观察者时，观察者接收到的频率：", options: ["A. 升高", "B. 降低", "C. 不变", "D. 变为零"], answer: "A", knowledgePoint: "多普勒效应", analysis: "波源靠近时，接收频率升高；远离时，接收频率降低。" },
      { type: "choice", difficulty: 3, text: "光波的多普勒效应表现为：", options: ["A. 只有红移", "B. 只有蓝移", "C. 红移或蓝移", "D. 频率不变"], answer: "C", knowledgePoint: "光学多普勒效应", analysis: "光源靠近时产生蓝移，远离时产生红移。" }
    ]
  },
  {
    lesson: 45, title: "光的波粒二象性",
    questions: [
      { type: "choice", difficulty: 1, text: "光的波动性证据是：", options: ["A. 光电效应", "B. 干涉和衍射", "C. 反射", "D. 折射"], answer: "B", knowledgePoint: "光的波动性", analysis: "干涉和衍射是波动特有的现象，证明光具有波动性。" },
      { type: "choice", difficulty: 2, text: "光的粒子性证据是：", options: ["A. 干涉", "B. 衍射", "C. 光电效应", "D. 折射"], answer: "C", knowledgePoint: "光的粒子性", analysis: "光电效应只能用光的粒子性解释，证明光具有粒子性。" },
      { type: "choice", difficulty: 3, text: "波粒二象性的意义是：", options: ["A. 光只是波", "B. 光只是粒子", "C. 光既是波又是粒子", "D. 光既不是波也不是粒子"], answer: "C", knowledgePoint: "波粒二象性", analysis: "光具有波粒二象性，既是波也是粒子，取决于观测方式。" }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // 第10章 现代物理（5年级·GCSE）
  // ────────────────────────────────────────────────────────────────
  {
    lesson: 46, title: "光电效应：爱因斯坦的解释",
    questions: [
      { type: "choice", difficulty: 1, text: "光电效应是：", options: ["A. 光照射金属产生电流", "B. 金属发光", "C. 电流产生光", "D. 光的折射"], answer: "A", knowledgePoint: "光电效应", analysis: "光电效应是光照射金属表面时，金属中的电子吸收光子能量逸出表面的现象。" },
      { type: "choice", difficulty: 2, text: "爱因斯坦的光子理论认为：", options: ["A. 光是连续的波", "B. 光是一份一份的光子", "C. 光既是波又是粒子", "D. 光只是粒子"], answer: "B", knowledgePoint: "光子理论", analysis: "爱因斯坦提出光是由光子组成的，每个光子的能量E = hf。" },
      { type: "choice", difficulty: 3, text: "光电效应方程是：", options: ["A. E_k = hf - W₀", "B. E_k = hf + W₀", "C. E_k = hf", "D. E_k = W₀"], answer: "A", knowledgePoint: "光电效应方程", analysis: "爱因斯坦光电效应方程：E_k = hf - W₀，最大初动能等于光子能量减去逸出功。" }
    ]
  },
  {
    lesson: 47, title: "原子能级与发射光谱",
    questions: [
      { type: "choice", difficulty: 1, text: "原子的能级是：", options: ["A. 连续的", "B. 离散的", "C. 唯一的", "D. 不存在的"], answer: "B", knowledgePoint: "原子能级", analysis: "原子的能量是量子化的，只能取离散的值，即能级。" },
      { type: "choice", difficulty: 2, text: "电子跃迁时：", options: ["A. 吸收光子时从高能级到低能级", "B. 发射光子时从高能级到低能级", "C. 吸收光子时能量减少", "D. 发射光子时能量增加"], answer: "B", knowledgePoint: "能级跃迁", analysis: "电子从高能级向低能级跃迁时发射光子，从低能级向高能级跃迁时吸收光子。" },
      { type: "choice", difficulty: 3, text: "氢原子的基态能量是：", options: ["A. 0eV", "B. -13.6eV", "C. 13.6eV", "D. -10.2eV"], answer: "B", knowledgePoint: "氢原子能级", analysis: "氢原子基态（n=1）能量为-13.6eV，这是氢原子的最低能量状态。" }
    ]
  },
  {
    lesson: 48, title: "核物理：结合能与质量亏损",
    questions: [
      { type: "choice", difficulty: 1, text: "结合能是：", options: ["A. 把原子核拆散所需的能量", "B. 原子核具有的能量", "C. 核子的动能", "D. 核子的势能"], answer: "A", knowledgePoint: "结合能", analysis: "结合能是将原子核拆成自由核子所需的总能量。" },
      { type: "choice", difficulty: 2, text: "质量亏损是：", options: ["A. 原子核质量大于核子质量之和", "B. 原子核质量小于核子质量之和", "C. 质量不变", "D. 质量增加"], answer: "B", knowledgePoint: "质量亏损", analysis: "原子核的质量小于组成它的核子质量之和，差额就是质量亏损。" },
      { type: "choice", difficulty: 3, text: "质能方程是：", options: ["A. E = mc", "B. E = mc²", "C. E = m/c", "D. E = m+c"], answer: "B", knowledgePoint: "质能方程", analysis: "爱因斯坦质能方程E = mc²，质量和能量可以相互转换。" }
    ]
  },
  {
    lesson: 49, title: "基本粒子标准模型概述",
    questions: [
      { type: "choice", difficulty: 1, text: "标准模型中的基本粒子包括：", options: ["A. 只有夸克", "B. 只有轻子", "C. 夸克和轻子", "D. 只有玻色子"], answer: "C", knowledgePoint: "标准模型", analysis: "标准模型包含夸克和轻子两大类基本粒子。" },
      { type: "choice", difficulty: 2, text: "希格斯玻色子的作用是：", options: ["A. 传递强相互作用", "B. 赋予粒子质量", "C. 传递电磁相互作用", "D. 传递弱相互作用"], answer: "B", knowledgePoint: "希格斯玻色子", analysis: "希格斯玻色子通过希格斯场赋予其他基本粒子质量。" },
      { type: "choice", difficulty: 3, text: "规范玻色子不包括：", options: ["A. 光子", "B. W玻色子", "C. Z玻色子", "D. 电子"], answer: "D", knowledgePoint: "规范玻色子", analysis: "规范玻色子包括光子、W/Z玻色子、胶子，电子是轻子。" }
    ]
  },
  {
    lesson: 50, title: "GCSE综合复习",
    questions: [
      { type: "choice", difficulty: 1, text: "牛顿第二定律的公式是：", options: ["A. F = ma", "B. F = mv", "C. F = m/a", "D. F = a/m"], answer: "A", knowledgePoint: "牛顿第二定律", analysis: "牛顿第二定律F = ma，力等于质量乘以加速度。" },
      { type: "choice", difficulty: 2, text: "欧姆定律的公式是：", options: ["A. I = U/R", "B. I = R/U", "C. U = I/R", "D. R = IU"], answer: "A", knowledgePoint: "欧姆定律", analysis: "欧姆定律I = U/R，电流等于电压除以电阻。" },
      { type: "choice", difficulty: 3, text: "光电效应方程是：", options: ["A. E_k = hf - W₀", "B. E_k = hf + W₀", "C. E_k = hf", "D. E_k = W₀"], answer: "A", knowledgePoint: "光电效应", analysis: "光电效应方程E_k = hf - W₀，最大初动能等于光子能量减去逸出功。" }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // 第11章 力学与场（6年级·A-Level）
  // ────────────────────────────────────────────────────────────────
  {
    lesson: 51, title: "牛顿力学深化：向量分析",
    questions: [
      { type: "choice", difficulty: 1, text: "向量的特点是：", options: ["A. 只有大小", "B. 只有方向", "C. 既有大小又有方向", "D. 没有大小和方向"], answer: "C", knowledgePoint: "向量", analysis: "向量既有大小又有方向，如力、速度、位移等。" },
      { type: "choice", difficulty: 2, text: "向量分解的方法是：", options: ["A. 只能分解为水平分量", "B. 只能分解为竖直分量", "C. 可以分解为任意方向的分量", "D. 不能分解"], answer: "C", knowledgePoint: "向量分解", analysis: "向量可以分解为任意方向的分量，常用直角坐标系分解。" },
      { type: "choice", difficulty: 3, text: "斜面上物体的重力分解为：", options: ["A. 只有沿斜面的分力", "B. 只有垂直斜面的分力", "C. 沿斜面和垂直斜面的分力", "D. 没有分力"], answer: "C", knowledgePoint: "斜面受力分析", analysis: "重力可分解为沿斜面的分力（mgsinθ）和垂直斜面的分力（mgcosθ）。" }
    ]
  },
  {
    lesson: 52, title: "引力场：等势面与场强",
    questions: [
      { type: "choice", difficulty: 1, text: "引力场强度的定义是：", options: ["A. g = F/m", "B. g = m/F", "C. g = F×m", "D. g = F+m"], answer: "A", knowledgePoint: "引力场强度", analysis: "引力场强度g = F/m，是单位质量受到的引力。" },
      { type: "choice", difficulty: 2, text: "等势面的特点是：", options: ["A. 沿等势面移动物体做功", "B. 沿等势面移动物体不做功", "C. 等势面是平面", "D. 等势面不闭合"], answer: "B", knowledgePoint: "等势面", analysis: "等势面上各点电势相等，沿等势面移动电荷不做功。" },
      { type: "choice", difficulty: 3, text: "引力势能的公式是：", options: ["A. E_p = mgh", "B. E_p = -GMm/r", "C. E_p = mgh²", "D. E_p = GMm/r"], answer: "B", knowledgePoint: "引力势能", analysis: "引力势能E_p = -GMm/r，以无穷远为零势能面。" }
    ]
  },
  {
    lesson: 53, title: "电场与磁场的统一",
    questions: [
      { type: "choice", difficulty: 1, text: "电磁场的概念是：", options: ["A. 电场和磁场无关", "B. 电场和磁场是同一事物的不同表现", "C. 只有电场", "D. 只有磁场"], answer: "B", knowledgePoint: "电磁场", analysis: "电场和磁场是统一的电磁场的两个方面，变化的电场产生磁场，变化的磁场产生电场。" },
      { type: "choice", difficulty: 2, text: "麦克斯韦的贡献是：", options: ["A. 提出万有引力定律", "B. 统一电和磁", "C. 提出量子力学", "D. 提出相对论"], answer: "B", knowledgePoint: "麦克斯韦", analysis: "麦克斯韦建立了电磁场方程组，统一了电和磁。" },
      { type: "choice", difficulty: 3, text: "电磁波的预言者是：", options: ["A. 牛顿", "B. 麦克斯韦", "C. 爱因斯坦", "D. 法拉第"], answer: "B", knowledgePoint: "电磁波", analysis: "麦克斯韦从理论上预言了电磁波的存在，后被赫兹实验证实。" }
    ]
  },
  {
    lesson: 54, title: "麦克斯韦方程组的概念",
    questions: [
      { type: "choice", difficulty: 1, text: "电场高斯定律描述：", options: ["A. 电场与电荷的关系", "B. 磁场与电流的关系", "C. 电磁感应", "D. 磁场的性质"], answer: "A", knowledgePoint: "电场高斯定律", analysis: "电场高斯定律描述电场与电荷的关系，通过闭合曲面的电通量与曲面内的电荷成正比。" },
      { type: "choice", difficulty: 2, text: "磁场高斯定律描述：", options: ["A. 磁场是有源场", "B. 磁场是无源场", "C. 磁场与电荷有关", "D. 磁场与电流无关"], answer: "B", knowledgePoint: "磁场高斯定律", analysis: "磁场高斯定律表明磁场是无源场，磁感应线是闭合曲线。" },
      { type: "choice", difficulty: 3, text: "法拉第定律描述：", options: ["A. 电场产生磁场", "B. 磁场产生电场", "C. 电流产生磁场", "D. 电荷产生电场"], answer: "B", knowledgePoint: "法拉第定律", analysis: "法拉第定律描述变化的磁场产生电场，即电磁感应。" }
    ]
  },
  {
    lesson: 55, title: "狭义相对论：时间膨胀与长度收缩",
    questions: [
      { type: "choice", difficulty: 1, text: "狭义相对论的基本假设是：", options: ["A. 光速不变原理", "B. 光速可变原理", "C. 时间绝对", "D. 空间绝对"], answer: "A", knowledgePoint: "狭义相对论", analysis: "狭义相对论的基本假设之一是光速在任何惯性系中都不变。" },
      { type: "choice", difficulty: 2, text: "时间膨胀效应是：", options: ["A. 运动的时钟变慢", "B. 运动的时钟变快", "C. 所有时钟都变慢", "D. 所有时钟都变快"], answer: "A", knowledgePoint: "时间膨胀", analysis: "运动的时钟比静止的时钟走得慢，这就是时间膨胀效应。" },
      { type: "choice", difficulty: 3, text: "长度收缩效应是：", options: ["A. 运动的物体长度变长", "B. 运动的物体长度变短", "C. 所有物体长度都变长", "D. 所有物体长度都变短"], answer: "B", knowledgePoint: "长度收缩", analysis: "运动的物体在运动方向上的长度比静止时短，这就是长度收缩效应。" }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // 第12章 量子与核（6年级·A-Level）
  // ────────────────────────────────────────────────────────────────
  {
    lesson: 56, title: "量子力学基础：概率诠释",
    questions: [
      { type: "choice", difficulty: 1, text: "波函数的意义是：", options: ["A. 粒子的位置", "B. 粒子的速度", "C. 概率振幅", "D. 粒子的质量"], answer: "C", knowledgePoint: "波函数", analysis: "波函数ψ描述粒子的量子状态，|ψ|²表示粒子在空间某点出现的概率密度。" },
      { type: "choice", difficulty: 2, text: "测不准原理是：", options: ["A. 可以同时精确测量位置和动量", "B. 不能同时精确测量位置和动量", "C. 只能测量位置", "D. 只能测量动量"], answer: "B", knowledgePoint: "测不准原理", analysis: "海森堡测不准原理表明，位置和动量不能同时被精确测量。" },
      { type: "choice", difficulty: 3, text: "哥本哈根诠释认为：", options: ["A. 测量前粒子有确定状态", "B. 测量使波函数坍缩", "C. 波函数永远不坍缩", "D. 粒子总是确定的"], answer: "B", knowledgePoint: "哥本哈根诠释", analysis: "哥本哈根诠释认为测量会使波函数坍缩到某一本征态。" }
    ]
  },
  {
    lesson: 57, title: "德布罗意波长",
    questions: [
      { type: "choice", difficulty: 1, text: "物质波的概念是：", options: ["A. 只有光有波动性", "B. 只有粒子有波动性", "C. 所有物质都有波动性", "D. 没有物质有波动性"], answer: "C", knowledgePoint: "物质波", analysis: "德布罗意提出所有物质都具有波动性，称为物质波。" },
      { type: "choice", difficulty: 2, text: "德布罗意关系式是：", options: ["A. λ = h/p", "B. λ = hp", "C. λ = h+p", "D. λ = h-p"], answer: "A", knowledgePoint: "德布罗意关系", analysis: "德布罗意关系式λ = h/p，波长等于普朗克常数除以动量。" },
      { type: "choice", difficulty: 3, text: "电子衍射实验证明了：", options: ["A. 电子只有粒子性", "B. 电子只有波动性", "C. 电子具有波粒二象性", "D. 电子没有波动性"], answer: "C", knowledgePoint: "电子衍射", analysis: "电子衍射实验证明了电子具有波动性，支持了波粒二象性。" }
    ]
  },
  {
    lesson: 58, title: "薛定谔方程：概念理解",
    questions: [
      { type: "choice", difficulty: 1, text: "薛定谔方程描述：", options: ["A. 粒子的位置", "B. 波函数的演化", "C. 粒子的速度", "D. 粒子的质量"], answer: "B", knowledgePoint: "薛定谔方程", analysis: "薛定谔方程描述波函数随时间的演化规律。" },
      { type: "choice", difficulty: 2, text: "定态薛定谔方程的特点是：", options: ["A. 波函数随时间变化", "B. 波函数不随时间变化", "C. 只有一个解", "D. 没有解"], answer: "B", knowledgePoint: "定态", analysis: "定态薛定谔方程的解是定态，波函数不随时间变化。" },
      { type: "choice", difficulty: 3, text: "本征值的意义是：", options: ["A. 任意值", "B. 只能取特定值", "C. 连续值", "D. 负值"], answer: "B", knowledgePoint: "本征值", analysis: "本征值是可观测物理量的可能取值，是量子化的。" }
    ]
  },
  {
    lesson: 59, title: "核稳定性：结合能曲线",
    questions: [
      { type: "choice", difficulty: 1, text: "结合能曲线的峰值在：", options: ["A. 氢元素", "B. 铁元素", "C. 铀元素", "D. 氦元素"], answer: "B", knowledgePoint: "结合能曲线", analysis: "结合能曲线在铁元素处达到峰值，铁是最稳定的原子核。" },
      { type: "choice", difficulty: 2, text: "核聚变发生在：", options: ["A. 轻核结合", "B. 重核分裂", "C. 铁核分裂", "D. 任意核"], answer: "A", knowledgePoint: "核聚变", analysis: "核聚变发生在轻核结合成较重的核时，释放能量。" },
      { type: "choice", difficulty: 3, text: "核裂变发生在：", options: ["A. 轻核结合", "B. 重核分裂", "C. 铁核结合", "D. 任意核"], answer: "B", knowledgePoint: "核裂变", analysis: "核裂变发生在重核分裂成较轻的核时，释放能量。" }
    ]
  },
  {
    lesson: 60, title: "辐射剂量与防护",
    questions: [
      { type: "choice", difficulty: 1, text: "辐射剂量的单位是：", options: ["A. 牛顿", "B. 焦耳", "C. 希沃特", "D. 瓦特"], answer: "C", knowledgePoint: "辐射剂量", analysis: "辐射剂量的国际单位是希沃特（Sv）。" },
      { type: "choice", difficulty: 2, text: "辐射防护的方法不包括：", options: ["A. 距离防护", "B. 时间防护", "C. 屏蔽防护", "D. 增加接触"], answer: "D", knowledgePoint: "辐射防护", analysis: "辐射防护三原则：距离防护、时间防护、屏蔽防护。" },
      { type: "choice", difficulty: 3, text: "天然本底辐射的来源是：", options: ["A. 只有人工辐射", "B. 只有宇宙射线", "C. 宇宙射线和天然放射性物质", "D. 没有来源"], answer: "C", knowledgePoint: "本底辐射", analysis: "天然本底辐射来自宇宙射线和地球中的天然放射性物质。" }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // 第13章 热力学与统计（7年级·A-Level）
  // ────────────────────────────────────────────────────────────────
  {
    lesson: 61, title: "热力学四定律",
    questions: [
      { type: "choice", difficulty: 1, text: "热力学第一定律是：", options: ["A. 能量守恒", "B. 熵增原理", "C. 绝对零度不可达到", "D. 热平衡传递性"], answer: "A", knowledgePoint: "热力学第一定律", analysis: "热力学第一定律是能量守恒定律，ΔU = Q + W。" },
      { type: "choice", difficulty: 2, text: "热力学第二定律是：", options: ["A. 能量守恒", "B. 熵增原理", "C. 绝对零度不可达到", "D. 热平衡传递性"], answer: "B", knowledgePoint: "热力学第二定律", analysis: "热力学第二定律表明孤立系统的熵不会减少。" },
      { type: "choice", difficulty: 3, text: "热力学第三定律是：", options: ["A. 能量守恒", "B. 熵增原理", "C. 绝对零度不可达到", "D. 热平衡传递性"], answer: "C", knowledgePoint: "热力学第三定律", analysis: "热力学第三定律表明绝对零度（0K）是不可能达到的。" }
    ]
  },
  {
    lesson: 62, title: "熵：无序的度量",
    questions: [
      { type: "choice", difficulty: 1, text: "熵的定义是：", options: ["A. 有序的度量", "B. 无序的度量", "C. 能量的度量", "D. 温度的度量"], answer: "B", knowledgePoint: "熵", analysis: "熵是系统无序程度的度量，熵越大，无序程度越高。" },
      { type: "choice", difficulty: 2, text: "熵增原理是：", options: ["A. 孤立系统熵减少", "B. 孤立系统熵不变", "C. 孤立系统熵增加或不变", "D. 孤立系统熵任意变化"], answer: "C", knowledgePoint: "熵增原理", analysis: "孤立系统的熵不会减少，只能增加或保持不变。" },
      { type: "choice", difficulty: 3, text: "熵的统计意义是：", options: ["A. 与微观状态数无关", "B. S = k lnΩ", "C. S = kΩ", "D. S = k/Ω"], answer: "B", knowledgePoint: "玻尔兹曼熵公式", analysis: "玻尔兹曼熵公式S = k lnΩ，熵与微观状态数的对数成正比。" }
    ]
  },
  {
    lesson: 63, title: "统计力学入门：气体的微观解释",
    questions: [
      { type: "choice", difficulty: 1, text: "分子运动论认为：", options: ["A. 气体分子静止", "B. 气体分子做无规则运动", "C. 气体分子有序排列", "D. 气体分子不运动"], answer: "B", knowledgePoint: "分子运动论", analysis: "分子运动论认为气体分子在做永不停息的无规则运动。" },
      { type: "choice", difficulty: 2, text: "理想气体的微观模型假设：", options: ["A. 分子有体积", "B. 分子间有作用力", "C. 分子是质点且无相互作用", "D. 分子静止"], answer: "C", knowledgePoint: "理想气体模型", analysis: "理想气体模型假设分子是质点，分子间无相互作用力。" },
      { type: "choice", difficulty: 3, text: "温度的微观意义是：", options: ["A. 分子的大小", "B. 分子平均动能的量度", "C. 分子的质量", "D. 分子的数量"], answer: "B", knowledgePoint: "温度的微观意义", analysis: "温度是分子平均动能的量度，温度越高，分子平均动能越大。" }
    ]
  },
  {
    lesson: 64, title: "相变的热力学描述",
    questions: [
      { type: "choice", difficulty: 1, text: "相变是：", options: ["A. 温度变化", "B. 压强变化", "C. 物质状态的变化", "D. 体积变化"], answer: "C", knowledgePoint: "相变", analysis: "相变是物质从一种状态转变为另一种状态的过程，如熔化、凝固等。" },
      { type: "choice", difficulty: 2, text: "相图的作用是：", options: ["A. 描述温度与压强的关系", "B. 描述物质状态与温度、压强的关系", "C. 只描述温度", "D. 只描述压强"], answer: "B", knowledgePoint: "相图", analysis: "相图展示物质在不同温度和压强下的稳定状态。" },
      { type: "choice", difficulty: 3, text: "临界点是：", options: ["A. 三相共存的点", "B. 气液不分的点", "C. 固液共存的点", "D. 固气共存的点"], answer: "B", knowledgePoint: "临界点", analysis: "临界点是气液两相不再区分的状态点，超过临界点只有超临界流体。" }
    ]
  },
  {
    lesson: 65, title: "混沌与非线性系统概念",
    questions: [
      { type: "choice", difficulty: 1, text: "非线性系统的特点是：", options: ["A. 叠加原理成立", "B. 叠加原理不成立", "C. 只有线性项", "D. 没有非线性项"], answer: "B", knowledgePoint: "非线性系统", analysis: "非线性系统不满足叠加原理，输出与输入不成正比。" },
      { type: "choice", difficulty: 2, text: "混沌现象是：", options: ["A. 完全随机", "B. 确定性但不可预测", "C. 完全有序", "D. 没有规律"], answer: "B", knowledgePoint: "混沌", analysis: "混沌是确定性系统中的随机行为，对初始条件极其敏感。" },
      { type: "choice", difficulty: 3, text: "蝴蝶效应是指：", options: ["A. 蝴蝶能引起风暴", "B. 微小变化导致巨大差异", "C. 蝴蝶很美", "D. 没有意义"], answer: "B", knowledgePoint: "蝴蝶效应", analysis: "蝴蝶效应描述混沌系统对初始条件的敏感性，微小的初始差异会导致结果的巨大不同。" }
    ]
  },

  // ────────────────────────────────────────────────────────────────
  // 第14章 前沿物理（7年级·A-Level）
  // ────────────────────────────────────────────────────────────────
  {
    lesson: 66, title: "超导体：零电阻与迈斯纳效应",
    questions: [
      { type: "choice", difficulty: 1, text: "超导现象是：", options: ["A. 电阻增大", "B. 电阻为零", "C. 电阻不变", "D. 电阻先增后减"], answer: "B", knowledgePoint: "超导", analysis: "超导现象是指某些材料在低温下电阻突然降为零的现象。" },
      { type: "choice", difficulty: 2, text: "迈斯纳效应是：", options: ["A. 超导体内部磁场增强", "B. 超导体内部磁场被排出", "C. 超导体内部磁场不变", "D. 超导体产生磁场"], answer: "B", knowledgePoint: "迈斯纳效应", analysis: "迈斯纳效应是超导体的完全抗磁性，内部磁场被排出。" },
      { type: "choice", difficulty: 3, text: "高温超导体的临界温度是：", options: ["A. 接近绝对零度", "B. 液氮温度以上", "C. 室温", "D. 任意温度"], answer: "B", knowledgePoint: "高温超导", analysis: "高温超导体的临界温度高于液氮温度（77K），便于实际应用。" }
    ]
  },
  {
    lesson: 67, title: "半导体物理：p-n结与晶体管",
    questions: [
      { type: "choice", difficulty: 1, text: "p型半导体的载流子是：", options: ["A. 电子", "B. 空穴", "C. 质子", "D. 中子"], answer: "B", knowledgePoint: "p型半导体", analysis: "p型半导体的多数载流子是空穴。" },
      { type: "choice", difficulty: 2, text: "n型半导体的载流子是：", options: ["A. 电子", "B. 空穴", "C. 质子", "D. 中子"], answer: "A", knowledgePoint: "n型半导体", analysis: "n型半导体的多数载流子是电子。" },
      { type: "choice", difficulty: 3, text: "p-n结的作用是：", options: ["A. 导电", "B. 整流", "C. 发光", "D. 发热"], answer: "B", knowledgePoint: "p-n结", analysis: "p-n结具有单向导电性，可用于整流。" }
    ]
  },
  {
    lesson: 68, title: "粒子加速器的原理",
    questions: [
      { type: "choice", difficulty: 1, text: "粒子加速器的作用是：", options: ["A. 减速粒子", "B. 加速粒子", "C. 储存粒子", "D. 销毁粒子"], answer: "B", knowledgePoint: "粒子加速器", analysis: "粒子加速器用于加速带电粒子到高能状态。" },
      { type: "choice", difficulty: 2, text: "回旋加速器的原理是：", options: ["A. 利用电场加速", "B. 利用磁场偏转", "C. 电场加速和磁场偏转", "D. 只有电场"], answer: "C", knowledgePoint: "回旋加速器", analysis: "回旋加速器利用电场加速粒子，利用磁场使粒子做圆周运动。" },
      { type: "choice", difficulty: 3, text: "大型强子对撞机（LHC）的作用是：", options: ["A. 加速质子碰撞", "B. 加速电子碰撞", "C. 加速中子碰撞", "D. 加速光子碰撞"], answer: "A", knowledgePoint: "LHC", analysis: "LHC加速质子束进行对撞，用于研究基本粒子。" }
    ]
  },
  {
    lesson: 69, title: "宇宙学：大爆炸与宇宙膨胀",
    questions: [
      { type: "choice", difficulty: 1, text: "大爆炸理论认为：", options: ["A. 宇宙从奇点爆炸产生", "B. 宇宙一直存在", "C. 宇宙在收缩", "D. 宇宙是静止的"], answer: "A", knowledgePoint: "大爆炸理论", analysis: "大爆炸理论认为宇宙起源于一个奇点的爆炸。" },
      { type: "choice", difficulty: 2, text: "宇宙膨胀的证据是：", options: ["A. 星系红移", "B. 星系蓝移", "C. 星系静止", "D. 星系消失"], answer: "A", knowledgePoint: "宇宙膨胀", analysis: "星系光谱的红移表明星系正在远离我们，证明宇宙在膨胀。" },
      { type: "choice", difficulty: 3, text: "宇宙微波背景辐射是：", options: ["A. 宇宙的背景噪声", "B. 大爆炸的余晖", "C. 恒星的辐射", "D. 星系的辐射"], answer: "B", knowledgePoint: "宇宙微波背景", analysis: "宇宙微波背景辐射是大爆炸的余晖，是大爆炸理论的重要证据。" }
    ]
  },
  {
    lesson: 70, title: "A-Level综合模拟",
    questions: [
      { type: "choice", difficulty: 1, text: "牛顿第二定律的公式是：", options: ["A. F = ma", "B. F = mv", "C. F = m/a", "D. F = a/m"], answer: "A", knowledgePoint: "力学综合", analysis: "牛顿第二定律F = ma。" },
      { type: "choice", difficulty: 2, text: "法拉第电磁感应定律的公式是：", options: ["A. E = nΔΦ/Δt", "B. E = nΦ/t", "C. E = Φ/nt", "D. E = n+Φ/t"], answer: "A", knowledgePoint: "电磁学综合", analysis: "法拉第定律E = nΔΦ/Δt。" },
      { type: "choice", difficulty: 3, text: "光电效应方程是：", options: ["A. E_k = hf - W₀", "B. E_k = hf + W₀", "C. E_k = hf", "D. E_k = W₀"], answer: "A", knowledgePoint: "量子综合", analysis: "光电效应方程E_k = hf - W₀。" }
    ]
  }
];
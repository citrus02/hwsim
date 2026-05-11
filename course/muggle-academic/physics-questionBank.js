// physics-questionBank.js
// 霍格沃茨物理课程 - 一年级随堂测验题库（完整版）
// 教授：塞拉菲娜·穆迪
// 每课3题：basic（+2分）、medium（0分，全对得E）、hard（-1分）

export const questionBank = [
  // ==================== 第1章 机械运动（第1-4课） ====================
  {
    lesson: 1, title: "长度和时间的测量",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列长度单位换算正确的是：", options: ["A. 1米=10厘米", "B. 1千米=1000米", "C. 1厘米=100毫米", "D. 1米=1000毫米"], answer: "B", knowledgePoint: "长度单位换算", analysis: "1千米等于1000米，1米等于100厘米，1厘米等于10毫米。" },
      { type: "choice", difficulty: "medium", text: "用刻度尺测量物体长度时，正确的做法是：", options: ["A. 刻度尺可以歪斜放置", "B. 视线要与尺面垂直", "C. 可以从任意刻度开始测量", "D. 测量结果不用估读到分度值下一位"], answer: "B", knowledgePoint: "刻度尺使用", analysis: "测量时刻度尺要放正，视线垂直尺面，通常从零刻度开始测量，结果要估读到分度值下一位。" },
      { type: "choice", difficulty: "hard", text: "一个物体的长度测量结果为12.35cm，其中准确值和估计值分别是：", options: ["A. 12cm和0.35cm", "B. 12.3cm和0.05cm", "C. 12.35cm和0cm", "D. 12cm和0.3cm"], answer: "B", knowledgePoint: "测量结果的组成", analysis: "测量结果中，最后一位是估计值，其余是准确值。12.35cm中，12.3cm是准确值，0.05cm是估计值。" }
    ]
  },
  {
    lesson: 2, title: "运动的描述",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列现象中，不属于机械运动的是：", options: ["A. 树叶飘落", "B. 蜡烛燃烧", "C. 汽车行驶", "D. 鸟儿飞翔"], answer: "B", knowledgePoint: "机械运动的定义", analysis: "机械运动是物体位置随时间的变化。蜡烛燃烧是化学变化，不是位置变化。" },
      { type: "choice", difficulty: "medium", text: "坐在行驶的火车上的乘客，以火车为参照物，乘客是：", options: ["A. 运动的", "B. 静止的", "C. 可能运动也可能静止", "D. 无法判断"], answer: "B", knowledgePoint: "参照物与运动状态", analysis: "以火车为参照物，乘客相对于火车的位置没有变化，所以是静止的。" },
      { type: "choice", difficulty: "hard", text: "甲、乙两车同向行驶，甲车速度为60km/h，乙车速度为80km/h。以甲车为参照物，乙车的速度是：", options: ["A. 20km/h", "B. 140km/h", "C. 80km/h", "D. 60km/h"], answer: "A", knowledgePoint: "相对速度", analysis: "同向行驶时，相对速度等于速度之差：80km/h - 60km/h = 20km/h。" }
    ]
  },
  {
    lesson: 3, title: "运动的快慢",
    questions: [
      { type: "choice", difficulty: "basic", text: "速度的定义是：", options: ["A. 物体运动的距离", "B. 物体运动的时间", "C. 物体运动的快慢", "D. 物体运动的方向"], answer: "C", knowledgePoint: "速度的概念", analysis: "速度是描述物体运动快慢的物理量，定义为路程与时间的比值。" },
      { type: "choice", difficulty: "medium", text: "一辆汽车行驶120km用了2小时，它的平均速度是：", options: ["A. 60km/h", "B. 120km/h", "C. 240km/h", "D. 30km/h"], answer: "A", knowledgePoint: "速度计算", analysis: "平均速度v = s/t = 120km ÷ 2h = 60km/h。" },
      { type: "choice", difficulty: "hard", text: "甲、乙两物体做匀速直线运动，甲的速度是乙的2倍，乙的运动时间是甲的3倍，则甲、乙的路程之比是：", options: ["A. 2:3", "B. 3:2", "C. 1:6", "D. 6:1"], answer: "A", knowledgePoint: "速度公式应用", analysis: "s = vt，s甲:s乙 = (v甲t甲):(v乙t乙) = (2v×t):(v×3t) = 2:3。" }
    ]
  },
  {
    lesson: 4, title: "测量平均速度",
    questions: [
      { type: "choice", difficulty: "basic", text: "测量平均速度的实验原理是：", options: ["A. v = s/t", "B. s = vt", "C. t = s/v", "D. v = t/s"], answer: "A", knowledgePoint: "实验原理", analysis: "平均速度的计算公式是v = s/t，即速度等于路程除以时间。" },
      { type: "choice", difficulty: "medium", text: "在测量平均速度的实验中，需要测量的物理量是：", options: ["A. 路程和时间", "B. 速度和时间", "C. 路程和速度", "D. 只有路程"], answer: "A", knowledgePoint: "实验测量量", analysis: "根据v = s/t，需要测量路程s和时间t。" },
      { type: "choice", difficulty: "hard", text: "小车从斜面顶端滑到底端，路程为1.2m，时间为2s，则平均速度是：", options: ["A. 0.6m/s", "B. 2.4m/s", "C. 0.5m/s", "D. 1.4m/s"], answer: "A", knowledgePoint: "平均速度计算", analysis: "v = s/t = 1.2m ÷ 2s = 0.6m/s。" }
    ]
  },

  // ==================== 第2章 声现象（第5-7课） ====================
  {
    lesson: 5, title: "声音的产生与传播",
    questions: [
      { type: "choice", difficulty: "basic", text: "声音产生的原因是：", options: ["A. 物体运动", "B. 物体振动", "C. 空气流动", "D. 能量传递"], answer: "B", knowledgePoint: "声音产生", analysis: "声音由物体振动产生，振动停止，声音也停止。" },
      { type: "choice", difficulty: "medium", text: "在月球上，两名宇航员面对面无法直接对话，原因是：", options: ["A. 月球上没有空气传播声音", "B. 月球太冷声音被冻住了", "C. 宇航服太厚", "D. 月球引力太大"], answer: "A", knowledgePoint: "声音传播需要介质", analysis: "声音传播需要介质，月球表面是真空，没有介质，声音无法传播。" },
      { type: "choice", difficulty: "hard", text: "同一声源发出的声音，在以下哪种介质中传播最快？", options: ["A. 空气", "B. 水", "C. 木头", "D. 真空"], answer: "C", knowledgePoint: "声速与介质", analysis: "声速在固体>液体>气体，真空中声音无法传播。木头是固体，所以传播最快。" }
    ]
  },
  {
    lesson: 6, title: "声音的特性",
    questions: [
      { type: "choice", difficulty: "basic", text: "决定音调高低的因素是：", options: ["A. 振幅", "B. 频率", "C. 音色", "D. 响度"], answer: "B", knowledgePoint: "音调", analysis: "音调由频率决定，频率越高，音调越高。" },
      { type: "choice", difficulty: "medium", text: "决定响度大小的因素是：", options: ["A. 频率", "B. 音色", "C. 振幅", "D. 音调"], answer: "C", knowledgePoint: "响度", analysis: "响度由振幅决定，振幅越大，响度越大。" },
      { type: "choice", difficulty: "hard", text: "我们能区分不同人的声音，主要是因为他们的：", options: ["A. 音调不同", "B. 响度不同", "C. 音色不同", "D. 频率不同"], answer: "C", knowledgePoint: "音色", analysis: "音色是由发声体本身决定的，不同的人发声体不同，音色不同。" }
    ]
  },
  {
    lesson: 7, title: "声的利用",
    questions: [
      { type: "choice", difficulty: "basic", text: "蝙蝠利用什么来导航？", options: ["A. 超声波", "B. 次声波", "C. 红外线", "D. 紫外线"], answer: "A", knowledgePoint: "超声波的应用", analysis: "蝙蝠利用超声波进行回声定位。" },
      { type: "choice", difficulty: "medium", text: "以下哪个应用是利用声音传递能量？", options: ["A. B超检查", "B. 超声波清洗", "C. 回声定位", "D. 听诊器"], answer: "B", knowledgePoint: "声音传递能量", analysis: "超声波清洗是利用超声波传递的能量来清洗精密仪器。" },
      { type: "choice", difficulty: "hard", text: "关于噪声，下列说法正确的是：", options: ["A. 噪声一定是难听的声音", "B. 噪声只能从声源处减弱", "C. 噪声会影响人们的工作和休息", "D. 噪声的防治只能在人耳处进行"], answer: "C", knowledgePoint: "噪声的危害与控制", analysis: "噪声是指妨碍人们正常休息、学习和工作的声音，防治噪声可以从声源处、传播过程中、人耳处三个方面进行。" }
    ]
  },

  // ==================== 第3章 物态变化（第8-11课） ====================
  {
    lesson: 8, title: "温度",
    questions: [
      { type: "choice", difficulty: "basic", text: "温度计的工作原理是：", options: ["A. 液体热胀冷缩", "B. 液体热缩冷胀", "C. 气体热胀冷缩", "D. 金属导热"], answer: "A", knowledgePoint: "温度计原理", analysis: "温度计利用液体（通常是酒精或汞）热胀冷缩的性质来测量温度。" },
      { type: "choice", difficulty: "medium", text: "以下温度最接近人体体温的是：", options: ["A. 0°C", "B. 20°C", "C. 37°C", "D. 100°C"], answer: "C", knowledgePoint: "常见温度值", analysis: "人体正常体温约为37°C，0°C是冰水混合物温度，100°C是沸水温度。" },
      { type: "choice", difficulty: "hard", text: "用温度计测量液体温度时，正确的做法是：", options: ["A. 温度计玻璃泡可以露出液面", "B. 读数时温度计要离开被测液体", "C. 视线要与液柱上表面相平", "D. 可以直接测量超过量程的温度"], answer: "C", knowledgePoint: "温度计使用", analysis: "测量时玻璃泡要完全浸入液体，读数时不能离开被测液体，视线要与液柱相平，不能测量超过量程的温度。" }
    ]
  },
  {
    lesson: 9, title: "熔化和凝固",
    questions: [
      { type: "choice", difficulty: "basic", text: "物质从固态变成液态的过程叫：", options: ["A. 凝固", "B. 熔化", "C. 汽化", "D. 液化"], answer: "B", knowledgePoint: "熔化的定义", analysis: "熔化是物质从固态变成液态的过程，需要吸收热量。" },
      { type: "choice", difficulty: "medium", text: "晶体和非晶体的主要区别是：", options: ["A. 颜色不同", "B. 有无固定熔点", "C. 硬度不同", "D. 密度不同"], answer: "B", knowledgePoint: "晶体与非晶体的区别", analysis: "晶体有固定的熔点，非晶体没有固定的熔点。" },
      { type: "choice", difficulty: "hard", text: "冰在熔化过程中，温度：", options: ["A. 升高", "B. 降低", "C. 保持不变", "D. 先升高后降低"], answer: "C", knowledgePoint: "晶体熔化特点", analysis: "冰是晶体，晶体在熔化过程中温度保持不变。" }
    ]
  },
  {
    lesson: 10, title: "汽化和液化",
    questions: [
      { type: "choice", difficulty: "basic", text: "物质从液态变成气态的过程叫：", options: ["A. 液化", "B. 汽化", "C. 凝固", "D. 升华"], answer: "B", knowledgePoint: "汽化的定义", analysis: "汽化是物质从液态变成气态的过程，需要吸收热量。" },
      { type: "choice", difficulty: "medium", text: "夏天在地面上洒水感到凉快，是因为：", options: ["A. 水蒸发吸热", "B. 水蒸发放热", "C. 水的温度低", "D. 水的比热容大"], answer: "A", knowledgePoint: "蒸发吸热", analysis: "水蒸发时吸收周围热量，使温度降低。" },
      { type: "choice", difficulty: "hard", text: "使气体液化的方法有：", options: ["A. 只升高温度", "B. 只降低温度", "C. 降低温度或压缩体积", "D. 升高温度或压缩体积"], answer: "C", knowledgePoint: "液化的方法", analysis: "使气体液化可以通过降低温度或压缩体积两种方法。" }
    ]
  },
  {
    lesson: 11, title: "升华和凝华",
    questions: [
      { type: "choice", difficulty: "basic", text: "物质从固态直接变成气态的过程叫：", options: ["A. 凝华", "B. 升华", "C. 汽化", "D. 熔化"], answer: "B", knowledgePoint: "升华的定义", analysis: "升华是物质从固态直接变成气态的过程，需要吸收热量。" },
      { type: "choice", difficulty: "medium", text: "冬天窗户上的冰花是怎么形成的？", options: ["A. 水凝固", "B. 水蒸气凝华", "C. 水蒸发", "D. 冰熔化"], answer: "B", knowledgePoint: "凝华现象", analysis: "冰花是空气中的水蒸气直接变成固体，属于凝华现象。" },
      { type: "choice", difficulty: "hard", text: "下列现象中，属于升华的是：", options: ["A. 冬天结冰的衣服变干", "B. 春天冰雪融化", "C. 夏天水管出汗", "D. 秋天树叶飘落"], answer: "A", knowledgePoint: "升华现象", analysis: "冬天结冰的衣服变干是冰直接变成水蒸气，属于升华现象。" }
    ]
  },

  // ==================== 第4章 光现象（第12-14课） ====================
  {
    lesson: 12, title: "光的直线传播",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列现象中，属于光的直线传播的是：", options: ["A. 镜子中的像", "B. 水中的筷子看起来弯了", "C. 影子的形成", "D. 彩虹"], answer: "C", knowledgePoint: "光的直线传播现象", analysis: "影子是光沿直线传播时被物体挡住形成的。镜子成像是反射，筷子弯折是折射，彩虹是色散。" },
      { type: "choice", difficulty: "medium", text: "光在真空中的传播速度约为：", options: ["A. 3×10⁶m/s", "B. 3×10⁷m/s", "C. 3×10⁸m/s", "D. 3×10⁹m/s"], answer: "C", knowledgePoint: "光速", analysis: "光在真空中的速度约为3×10⁸m/s，这是自然界最快的速度。" },
      { type: "choice", difficulty: "hard", text: "小孔成像的原理是：", options: ["A. 光的反射", "B. 光的折射", "C. 光的直线传播", "D. 光的色散"], answer: "C", knowledgePoint: "小孔成像原理", analysis: "小孔成像是光沿直线传播的典型例子，成的是倒立的实像。" }
    ]
  },
  {
    lesson: 13, title: "光的反射",
    questions: [
      { type: "choice", difficulty: "basic", text: "光的反射定律中，反射角与入射角的关系是：", options: ["A. 反射角大于入射角", "B. 反射角等于入射角", "C. 反射角小于入射角", "D. 没有固定关系"], answer: "B", knowledgePoint: "反射定律", analysis: "反射角等于入射角，这是光的反射定律的核心内容。" },
      { type: "choice", difficulty: "medium", text: "我们能看到不发光的物体，是因为：", options: ["A. 物体本身发光", "B. 光的折射", "C. 光的漫反射", "D. 光的色散"], answer: "C", knowledgePoint: "漫反射", analysis: "我们能看到不发光的物体，是因为物体表面发生漫反射，反射光进入我们的眼睛。" },
      { type: "choice", difficulty: "hard", text: "平面镜成像的特点是：", options: ["A. 成实像，像与物体大小相等", "B. 成虚像，像与物体大小相等", "C. 成实像，像比物体大", "D. 成虚像，像比物体小"], answer: "B", knowledgePoint: "平面镜成像特点", analysis: "平面镜成的是虚像，像与物体大小相等，左右相反。" }
    ]
  },
  {
    lesson: 14, title: "光的折射",
    questions: [
      { type: "choice", difficulty: "basic", text: "光从空气进入水中时，传播方向：", options: ["A. 不改变", "B. 向法线方向偏折", "C. 远离法线方向偏折", "D. 可能向任何方向偏折"], answer: "B", knowledgePoint: "光的折射规律", analysis: "光从空气（光疏介质）进入水（光密介质）时，折射角小于入射角，即向法线方向偏折。" },
      { type: "choice", difficulty: "medium", text: "水中的筷子看起来弯了，这是因为：", options: ["A. 光的反射", "B. 光的折射", "C. 光的直线传播", "D. 光的色散"], answer: "B", knowledgePoint: "折射现象", analysis: "水中的筷子看起来弯了是光的折射现象，我们看到的是筷子的虚像。" },
      { type: "choice", difficulty: "hard", text: "彩虹是怎么形成的？", options: ["A. 光的反射", "B. 光的折射和反射", "C. 光的直线传播", "D. 光的色散"], answer: "B", knowledgePoint: "彩虹的成因", analysis: "彩虹是阳光在水滴中发生折射、反射和色散形成的。" }
    ]
  },

  // ==================== 第5章 透镜及其应用（第15-17课） ====================
  {
    lesson: 15, title: "透镜",
    questions: [
      { type: "choice", difficulty: "basic", text: "凸透镜对光线的作用是：", options: ["A. 发散作用", "B. 会聚作用", "C. 既不发散也不会聚", "D. 先发散后会聚"], answer: "B", knowledgePoint: "凸透镜对光线的作用", analysis: "凸透镜中间厚边缘薄，对光线有会聚作用。" },
      { type: "choice", difficulty: "medium", text: "凹透镜对光线的作用是：", options: ["A. 会聚作用", "B. 发散作用", "C. 既不发散也不会聚", "D. 先会聚后发散"], answer: "B", knowledgePoint: "凹透镜对光线的作用", analysis: "凹透镜中间薄边缘厚，对光线有发散作用。" },
      { type: "choice", difficulty: "hard", text: "平行光线通过凸透镜后：", options: ["A. 仍然平行", "B. 会聚到焦点", "C. 发散", "D. 方向不变"], answer: "B", knowledgePoint: "凸透镜的焦点", analysis: "平行于主光轴的光线通过凸透镜后会聚到焦点。" }
    ]
  },
  {
    lesson: 16, title: "生活中的透镜",
    questions: [
      { type: "choice", difficulty: "basic", text: "照相机利用什么透镜成像？", options: ["A. 凹透镜", "B. 凸透镜", "C. 平面镜", "D. 凸面镜"], answer: "B", knowledgePoint: "照相机的原理", analysis: "照相机利用凸透镜成倒立缩小的实像。" },
      { type: "choice", difficulty: "medium", text: "放大镜是：", options: ["A. 凹透镜", "B. 凸透镜", "C. 平面镜", "D. 凹面镜"], answer: "B", knowledgePoint: "放大镜的原理", analysis: "放大镜是焦距较短的凸透镜，利用物体在1倍焦距以内成正立放大的虚像。" },
      { type: "choice", difficulty: "hard", text: "眼睛的晶状体相当于：", options: ["A. 凹透镜", "B. 凸透镜", "C. 平面镜", "D. 棱镜"], answer: "B", knowledgePoint: "眼睛的结构", analysis: "眼睛的晶状体相当于凸透镜，视网膜相当于光屏。" }
    ]
  },
  {
    lesson: 17, title: "凸透镜成像规律",
    questions: [
      { type: "choice", difficulty: "basic", text: "当物体在凸透镜2倍焦距以外时，成的像是什么样的？", options: ["A. 倒立缩小的实像", "B. 倒立放大的实像", "C. 正立放大的虚像", "D. 不成像"], answer: "A", knowledgePoint: "凸透镜成像规律", analysis: "当物体在2倍焦距以外时，成倒立缩小的实像，这是照相机的原理。" },
      { type: "choice", difficulty: "medium", text: "当物体在凸透镜1倍焦距和2倍焦距之间时，成的像是什么样的？", options: ["A. 倒立缩小的实像", "B. 倒立放大的实像", "C. 正立放大的虚像", "D. 不成像"], answer: "B", knowledgePoint: "凸透镜成像规律", analysis: "当物体在1倍焦距和2倍焦距之间时，成倒立放大的实像，这是投影仪的原理。" },
      { type: "choice", difficulty: "hard", text: "当物体在凸透镜焦点处时：", options: ["A. 成倒立缩小的实像", "B. 成倒立放大的实像", "C. 成正立放大的虚像", "D. 不成像"], answer: "D", knowledgePoint: "凸透镜成像规律", analysis: "当物体在焦点处时，光线经透镜后平行，不成像。" }
    ]
  },

  // ==================== 第6章 质量与密度（第18-21课） ====================
  {
    lesson: 18, title: "质量",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列关于质量的说法，正确的是：", options: ["A. 物体的质量随位置改变", "B. 物体的质量随形状改变", "C. 质量是物体的固有属性", "D. 质量是物体的重量"], answer: "C", knowledgePoint: "质量的特性", analysis: "质量是物体所含物质的多少，是物体的固有属性，不随位置、形状、状态改变。" },
      { type: "choice", difficulty: "medium", text: "下列物体中，质量最接近1kg的是：", options: ["A. 一个鸡蛋", "B. 一本课本", "C. 一头牛", "D. 一支铅笔"], answer: "B", knowledgePoint: "质量估测", analysis: "一个鸡蛋约50g，一本课本约1kg，一头牛约几百kg，一支铅笔约10g。" },
      { type: "choice", difficulty: "hard", text: "用天平测量物体质量时，若左盘放砝码，右盘放物体，则测量结果与实际质量相比：", options: ["A. 偏大", "B. 偏小", "C. 相等", "D. 无法确定"], answer: "A", knowledgePoint: "天平使用", analysis: "天平正确使用是左物右码，若放反了，测量值=砝码质量-游码示数，会偏大。" }
    ]
  },
  {
    lesson: 19, title: "密度",
    questions: [
      { type: "choice", difficulty: "basic", text: "密度的定义是：", options: ["A. 物体的质量", "B. 物体的体积", "C. 单位体积的质量", "D. 质量与体积的和"], answer: "C", knowledgePoint: "密度概念", analysis: "密度是单位体积物质的质量，公式为ρ = m/V。" },
      { type: "choice", difficulty: "medium", text: "水的密度是：", options: ["A. 1g/cm³", "B. 10g/cm³", "C. 0.1g/cm³", "D. 100g/cm³"], answer: "A", knowledgePoint: "水的密度", analysis: "水的密度是1g/cm³或1000kg/m³，这是一个常用的物理常量。" },
      { type: "choice", difficulty: "hard", text: "两个体积相同的物体，甲的质量是乙的2倍，则甲的密度是乙的：", options: ["A. 2倍", "B. 1/2倍", "C. 4倍", "D. 1倍"], answer: "A", knowledgePoint: "密度与质量的关系", analysis: "密度ρ = m/V，体积相同时，密度与质量成正比。甲的质量是乙的2倍，所以密度也是2倍。" }
    ]
  },
  {
    lesson: 20, title: "测量物质的密度",
    questions: [
      { type: "choice", difficulty: "basic", text: "测量物质密度的实验原理是：", options: ["A. ρ = m/V", "B. ρ = V/m", "C. m = ρV", "D. V = m/ρ"], answer: "A", knowledgePoint: "实验原理", analysis: "测量密度需要测量质量m和体积V，然后用公式ρ = m/V计算。" },
      { type: "choice", difficulty: "medium", text: "测量液体体积需要用到：", options: ["A. 天平", "B. 量筒", "C. 刻度尺", "D. 秒表"], answer: "B", knowledgePoint: "测量工具", analysis: "量筒是测量液体体积的工具。" },
      { type: "choice", difficulty: "hard", text: "测量不规则固体体积的方法是：", options: ["A. 用刻度尺测量", "B. 排水法", "C. 称重法", "D. 计算法"], answer: "B", knowledgePoint: "不规则固体体积测量", analysis: "对于不规则固体，通常用排水法测量体积：先测量量筒中水的体积，再将物体浸没，测量总体积，两者之差就是物体体积。" }
    ]
  },
  {
    lesson: 21, title: "密度与社会生活",
    questions: [
      { type: "choice", difficulty: "basic", text: "可以用什么方法鉴别物质？", options: ["A. 测量密度", "B. 测量质量", "C. 测量体积", "D. 测量温度"], answer: "A", knowledgePoint: "密度的应用", analysis: "每种物质都有自己的密度，通过测量密度可以鉴别物质。" },
      { type: "choice", difficulty: "medium", text: "为什么冰会浮在水面上？", options: ["A. 冰的质量比水小", "B. 冰的密度比水小", "C. 冰的体积比水小", "D. 冰是固体"], answer: "B", knowledgePoint: "密度与浮沉", analysis: "冰的密度比水小，所以会浮在水面上。" },
      { type: "choice", difficulty: "hard", text: "关于水的反常膨胀，下列说法正确的是：", options: ["A. 水在0°C到4°C之间膨胀", "B. 水在4°C以上膨胀", "C. 水在任何温度下都膨胀", "D. 水在0°C以下膨胀"], answer: "A", knowledgePoint: "水的反常膨胀", analysis: "水在0°C到4°C之间会反常膨胀，即温度升高时体积减小，密度增大。4°C时水的密度最大。" }
    ]
  },

  // ==================== 第8章 力（第27-30课） ====================
  {
    lesson: 27, title: "力的概念",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列关于力的说法，正确的是：", options: ["A. 力可以脱离物体单独存在", "B. 力是物体对物体的作用", "C. 只有接触的物体间才有力", "D. 力只能改变物体形状"], answer: "B", knowledgePoint: "力的定义", analysis: "力是物体对物体的作用，力不能脱离物体存在，也有不接触的力（如重力）。" },
      { type: "choice", difficulty: "medium", text: "用手推墙，墙不动，手感到疼。这说明：", options: ["A. 手对墙有力，墙对手没有力", "B. 手对墙的力大于墙对手的力", "C. 力的作用是相互的", "D. 手比墙软，所以手疼"], answer: "C", knowledgePoint: "力的相互性", analysis: "力的作用是相互的，手推墙时墙也在推手，两力大小相等方向相反。" },
      { type: "choice", difficulty: "hard", title: "力的三要素", text: "影响力的作用效果的因素是：", options: ["A. 只有力的大小", "B. 只有力的方向", "C. 只有力的作用点", "D. 力的大小、方向、作用点"], answer: "D", knowledgePoint: "力的三要素", analysis: "力的大小、方向、作用点都会影响力的作用效果，称为力的三要素。" }
    ]
  },
  {
    lesson: 28, title: "弹力",
    questions: [
      { type: "choice", difficulty: "basic", text: "弹力产生的条件是：", options: ["A. 物体相互接触", "B. 物体发生弹性形变", "C. 物体相互接触且发生弹性形变", "D. 物体不接触"], answer: "C", knowledgePoint: "弹力产生条件", analysis: "弹力产生需要两个条件：物体相互接触，并且发生弹性形变。" },
      { type: "choice", difficulty: "medium", text: "弹簧测力计的原理是：", options: ["A. 弹簧的长度与拉力成正比", "B. 弹簧的伸长量与拉力成正比", "C. 弹簧的长度与拉力成反比", "D. 弹簧的伸长量与拉力成反比"], answer: "B", knowledgePoint: "弹簧测力计原理", analysis: "在弹性限度内，弹簧的伸长量与所受拉力成正比。" },
      { type: "choice", difficulty: "hard", text: "胡克定律的公式是：", options: ["A. F = kx", "B. F = k/x", "C. F = x/k", "D. F = k+x"], answer: "A", knowledgePoint: "胡克定律", analysis: "胡克定律：在弹性限度内，弹簧的弹力F与伸长量x成正比，F = kx，其中k是劲度系数。" }
    ]
  },
  {
    lesson: 29, title: "重力",
    questions: [
      { type: "choice", difficulty: "basic", text: "重力的方向是：", options: ["A. 指向地心", "B. 垂直向下", "C. 竖直向下", "D. 与地面平行"], answer: "C", knowledgePoint: "重力方向", analysis: "重力方向竖直向下，而不是垂直于地面（斜面上的物体垂直于斜面的方向与竖直向下不同）。" },
      { type: "choice", difficulty: "medium", text: "质量为10kg的物体，受到的重力约为（g=10N/kg）：", options: ["A. 1N", "B. 10N", "C. 100N", "D. 1000N"], answer: "C", knowledgePoint: "重力计算", analysis: "G = mg = 10kg × 10N/kg = 100N。" },
      { type: "choice", difficulty: "hard", text: "关于重力，下列说法正确的是：", options: ["A. 物体的重力与质量无关", "B. 重力的方向总是垂直向下", "C. 物体在月球上的重力比在地球上小", "D. 物体的重力随位置改变而改变"], answer: "C", knowledgePoint: "重力特性", analysis: "月球上的重力加速度比地球小，所以物体在月球上的重力比在地球上小。重力与质量成正比，方向竖直向下。" }
    ]
  },
  {
    lesson: 30, title: "摩擦力",
    questions: [
      { type: "choice", difficulty: "basic", text: "摩擦力的方向与物体相对运动方向：", options: ["A. 相同", "B. 相反", "C. 垂直", "D. 没有关系"], answer: "B", knowledgePoint: "摩擦力的方向", analysis: "摩擦力的方向与物体相对运动方向相反。" },
      { type: "choice", difficulty: "medium", text: "影响滑动摩擦力大小的因素是：", options: ["A. 只有压力", "B. 只有接触面粗糙程度", "C. 压力和接触面粗糙程度", "D. 物体的质量"], answer: "C", knowledgePoint: "摩擦力的影响因素", analysis: "滑动摩擦力的大小与压力和接触面粗糙程度有关。" },
      { type: "choice", difficulty: "hard", text: "下列做法中，属于减小摩擦的是：", options: ["A. 鞋底有花纹", "B. 给机器加润滑油", "C. 用力握紧球拍", "D. 轮胎上有花纹"], answer: "B", knowledgePoint: "减小摩擦的方法", analysis: "给机器加润滑油可以使接触面光滑，减小摩擦。其他选项都是增大摩擦的方法。" }
    ]
  },

  // ==================== 第9章 运动和力（第31-33课） ====================
  {
    lesson: 31, title: "牛顿第一定律",
    questions: [
      { type: "choice", difficulty: "basic", text: "牛顿第一定律的内容是：", options: ["A. 物体受力才能运动", "B. 物体不受力时保持静止", "C. 物体不受力时保持静止或匀速直线运动", "D. 力是维持物体运动的原因"], answer: "C", knowledgePoint: "牛顿第一定律", analysis: "牛顿第一定律：一切物体在没有受到力的作用时，保持静止或匀速直线运动状态。" },
      { type: "choice", difficulty: "medium", text: "下列现象中，利用惯性的是：", options: ["A. 刹车时乘客前倾", "B. 跳远运动员助跑", "C. 人摔倒时向前倒", "D. 汽车转弯时乘客向外侧倾"], answer: "B", knowledgePoint: "惯性的利用", analysis: "跳远运动员助跑是利用惯性，使自己跳得更远。其他选项都是惯性带来的不利影响。" },
      { type: "choice", difficulty: "hard", text: "关于惯性，下列说法正确的是：", options: ["A. 物体速度越大，惯性越大", "B. 物体质量越大，惯性越大", "C. 静止的物体没有惯性", "D. 惯性是一种力"], answer: "B", knowledgePoint: "惯性的特性", analysis: "惯性是物体的固有属性，只与质量有关，与速度无关。一切物体都有惯性，惯性不是力。" }
    ]
  },
  {
    lesson: 32, title: "二力平衡",
    questions: [
      { type: "choice", difficulty: "basic", text: "二力平衡的条件是：", options: ["A. 大小相等", "B. 方向相反", "C. 作用在同一直线上", "D. 以上都是"], answer: "D", knowledgePoint: "二力平衡条件", analysis: "二力平衡需要四个条件：大小相等、方向相反、作用在同一直线上、作用在同一物体上。" },
      { type: "choice", difficulty: "medium", text: "一个物体在两个力的作用下保持静止，这两个力是：", options: ["A. 相互作用力", "B. 平衡力", "C. 作用力和反作用力", "D. 没有关系"], answer: "B", knowledgePoint: "平衡力", analysis: "物体处于静止状态，说明受到的力是平衡力。" },
      { type: "choice", difficulty: "hard", text: "平衡力与相互作用力的区别是：", options: ["A. 大小不同", "B. 方向不同", "C. 作用对象不同", "D. 没有区别"], answer: "C", knowledgePoint: "平衡力与相互作用力的区别", analysis: "平衡力作用在同一物体上，相互作用力作用在不同物体上。" }
    ]
  },
  {
    lesson: 33, title: "力与运动的关系",
    questions: [
      { type: "choice", difficulty: "basic", text: "力是：", options: ["A. 维持物体运动的原因", "B. 改变物体运动状态的原因", "C. 使物体静止的原因", "D. 使物体产生惯性的原因"], answer: "B", knowledgePoint: "力与运动的关系", analysis: "力是改变物体运动状态的原因，而不是维持运动的原因。" },
      { type: "choice", difficulty: "medium", text: "物体不受力时，将：", options: ["A. 一定静止", "B. 一定做匀速直线运动", "C. 保持静止或匀速直线运动", "D. 无法确定"], answer: "C", knowledgePoint: "牛顿第一定律", analysis: "根据牛顿第一定律，物体不受力时将保持静止或匀速直线运动状态。" },
      { type: "choice", difficulty: "hard", text: "物体做加速运动时，受到的力：", options: ["A. 一定是平衡力", "B. 一定是非平衡力", "C. 可能是平衡力", "D. 无法确定"], answer: "B", knowledgePoint: "非平衡力与运动状态", analysis: "物体做加速运动，说明运动状态在改变，所以受到的力是非平衡力。" }
    ]
  },

  // ==================== 第10章 压强（第34-36课） ====================
  {
    lesson: 34, title: "压强",
    questions: [
      { type: "choice", difficulty: "basic", text: "压强的定义是：", options: ["A. 物体受到的压力", "B. 单位面积上受到的压力", "C. 压力的方向", "D. 压力与面积的和"], answer: "B", knowledgePoint: "压强概念", analysis: "压强是单位面积上受到的压力，公式为p = F/S。" },
      { type: "choice", difficulty: "medium", text: "一个重100N的物体放在面积为10m²的水平面上，它对地面的压强是：", options: ["A. 10Pa", "B. 100Pa", "C. 1000Pa", "D. 1Pa"], answer: "A", knowledgePoint: "压强计算", analysis: "p = F/S = 100N ÷ 10m² = 10Pa。" },
      { type: "choice", difficulty: "hard", text: "下列做法中，属于增大压强的是：", options: ["A. 书包带做得宽", "B. 刀刃磨得薄", "C. 铁轨铺在枕木上", "D. 滑雪板做得大"], answer: "B", knowledgePoint: "压强的改变", analysis: "增大压强可以通过减小受力面积实现。刀刃磨薄减小了受力面积，从而增大压强。其他选项都是增大受力面积减小压强。" }
    ]
  },
  {
    lesson: 35, title: "液体的压强",
    questions: [
      { type: "choice", difficulty: "basic", text: "液体压强的特点是：", options: ["A. 只向下有压强", "B. 只向上有压强", "C. 向各个方向都有压强", "D. 没有压强"], answer: "C", knowledgePoint: "液体压强特点", analysis: "液体内部向各个方向都有压强。" },
      { type: "choice", difficulty: "medium", text: "液体压强与什么有关？", options: ["A. 只与深度有关", "B. 只与密度有关", "C. 与深度和密度都有关", "D. 与深度和密度都无关"], answer: "C", knowledgePoint: "液体压强的影响因素", analysis: "液体压强公式p = ρgh，与液体密度ρ和深度h都有关。" },
      { type: "choice", difficulty: "hard", text: "连通器的原理是：", options: ["A. 各容器中的液面高度不同", "B. 各容器中的液面高度相同", "C. 只有一个容器有液体", "D. 容器必须是圆柱形"], answer: "B", knowledgePoint: "连通器原理", analysis: "连通器里的同一种液体不流动时，各容器中的液面保持相平。" }
    ]
  },
  {
    lesson: 36, title: "大气压强",
    questions: [
      { type: "choice", difficulty: "basic", text: "证明大气压存在的实验是：", options: ["A. 托里拆利实验", "B. 马德堡半球实验", "C. 阿基米德实验", "D. 奥斯特实验"], answer: "B", knowledgePoint: "大气压的存在", analysis: "马德堡半球实验证明了大气压的存在。" },
      { type: "choice", difficulty: "medium", text: "标准大气压约为：", options: ["A. 1×10⁴Pa", "B. 1×10⁵Pa", "C. 1×10⁶Pa", "D. 1×10³Pa"], answer: "B", knowledgePoint: "标准大气压", analysis: "标准大气压约为1.01×10⁵Pa，约等于1×10⁵Pa。" },
      { type: "choice", difficulty: "hard", text: "大气压随高度的变化规律是：", options: ["A. 高度越高，大气压越大", "B. 高度越高，大气压越小", "C. 大气压与高度无关", "D. 先增大后减小"], answer: "B", knowledgePoint: "大气压与高度的关系", analysis: "大气压随高度增加而减小。" }
    ]
  },

  // ==================== 第11章 浮力（第37-39课） ====================
  {
    lesson: 37, title: "浮力",
    questions: [
      { type: "choice", difficulty: "basic", text: "浮力的方向是：", options: ["A. 竖直向下", "B. 竖直向上", "C. 水平向右", "D. 任意方向"], answer: "B", knowledgePoint: "浮力方向", analysis: "浮力的方向总是竖直向上的，与重力方向相反。" },
      { type: "choice", difficulty: "medium", text: "关于浮力，下列说法正确的是：", options: ["A. 只有漂浮的物体才受浮力", "B. 只有浸没在液体中的物体才受浮力", "C. 只要物体在液体中就受浮力", "D. 浮力是液体对物体的压力差"], answer: "D", knowledgePoint: "浮力产生原因", analysis: "浮力是液体对物体上下表面的压力差，只要物体在液体中且上下表面有压力差就受浮力。" },
      { type: "choice", difficulty: "hard", text: "一个物体漂浮在水面上，它受到的浮力：", options: ["A. 大于重力", "B. 小于重力", "C. 等于重力", "D. 无法确定"], answer: "C", knowledgePoint: "漂浮条件", analysis: "物体漂浮时，处于平衡状态，浮力等于重力。" }
    ]
  },
  {
    lesson: 38, title: "阿基米德原理",
    questions: [
      { type: "choice", difficulty: "basic", text: "阿基米德原理的内容是：", options: ["A. 浮力等于物体的重力", "B. 浮力等于排开液体的重力", "C. 浮力等于物体的质量", "D. 浮力等于排开液体的体积"], answer: "B", knowledgePoint: "阿基米德原理", analysis: "阿基米德原理：浸在液体中的物体受到的浮力等于它排开的液体的重力。" },
      { type: "choice", difficulty: "medium", text: "阿基米德原理的公式是：", options: ["A. F浮 = G物", "B. F浮 = G排", "C. F浮 = m排", "D. F浮 = V排"], answer: "B", knowledgePoint: "阿基米德原理公式", analysis: "F浮 = G排，即浮力等于排开液体的重力。" },
      { type: "choice", difficulty: "hard", text: "一个物体浸没在水中，排开水的体积为0.01m³，则受到的浮力是（g=10N/kg，ρ水=1000kg/m³）：", options: ["A. 10N", "B. 100N", "C. 1000N", "D. 1N"], answer: "B", knowledgePoint: "浮力计算", analysis: "F浮 = ρ液gV排 = 1000kg/m³ × 10N/kg × 0.01m³ = 100N。" }
    ]
  },
  {
    lesson: 39, title: "浮力的应用",
    questions: [
      { type: "choice", difficulty: "basic", text: "轮船能浮在水面上的原因是：", options: ["A. 轮船的密度比水小", "B. 轮船是空心的，增大了排液体积", "C. 轮船受到的浮力大于重力", "D. 轮船受到的浮力小于重力"], answer: "B", knowledgePoint: "轮船的原理", analysis: "轮船通过做成空心的，增大排开液体的体积，从而增大浮力。" },
      { type: "choice", difficulty: "medium", text: "潜水艇是通过什么方式实现浮沉的？", options: ["A. 改变自身密度", "B. 改变自身重力", "C. 改变浮力", "D. 改变形状"], answer: "B", knowledgePoint: "潜水艇的原理", analysis: "潜水艇通过改变自身重力来实现浮沉。" },
      { type: "choice", difficulty: "hard", text: "热气球能升空的原因是：", options: ["A. 热气球的密度比空气大", "B. 热气球的密度比空气小", "C. 热气球受到的浮力大于重力", "D. 热气球受到的浮力小于重力"], answer: "C", knowledgePoint: "热气球的原理", analysis: "热气球里充入密度比空气小的气体，使热气球的平均密度小于空气，从而受到的浮力大于重力，实现升空。" }
    ]
  },

  // ==================== 第12章 功和机械能（第40-43课） ====================
  {
    lesson: 40, title: "功",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列情况中，力对物体做功的是：", options: ["A. 用力推桌子，桌子没动", "B. 提着水桶在水平地面上走", "C. 用力将石头举高", "D. 扛着书包站着不动"], answer: "C", knowledgePoint: "做功的条件", analysis: "做功需要两个条件：有力作用在物体上，且物体在力的方向上移动距离。只有举石头时满足这两个条件。" },
      { type: "choice", difficulty: "medium", text: "功的单位是：", options: ["A. 牛顿", "B. 焦耳", "C. 瓦特", "D. 帕斯卡"], answer: "B", knowledgePoint: "功的单位", analysis: "功的单位是焦耳（J），牛顿是力的单位，瓦特是功率的单位，帕斯卡是压强的单位。" },
      { type: "choice", difficulty: "hard", text: "用10N的力将物体沿力的方向移动2m，做的功是：", options: ["A. 5J", "B. 10J", "C. 20J", "D. 12J"], answer: "C", knowledgePoint: "功的计算", analysis: "W = Fs = 10N × 2m = 20J。" }
    ]
  },
  {
    lesson: 41, title: "功率",
    questions: [
      { type: "choice", difficulty: "basic", text: "功率的定义是：", options: ["A. 单位时间内做的功", "B. 做的总功", "C. 做功的时间", "D. 做功的力"], answer: "A", knowledgePoint: "功率的概念", analysis: "功率是单位时间内做的功，描述做功的快慢。" },
      { type: "choice", difficulty: "medium", text: "功率的单位是：", options: ["A. 焦耳", "B. 牛顿", "C. 瓦特", "D. 帕斯卡"], answer: "C", knowledgePoint: "功率的单位", analysis: "功率的单位是瓦特（W）。" },
      { type: "choice", difficulty: "hard", text: "一台机器在10秒内做了1000焦耳的功，它的功率是：", options: ["A. 10W", "B. 100W", "C. 1000W", "D. 10000W"], answer: "B", knowledgePoint: "功率的计算", analysis: "P = W/t = 1000J ÷ 10s = 100W。" }
    ]
  },
  {
    lesson: 42, title: "动能和势能",
    questions: [
      { type: "choice", difficulty: "basic", text: "动能是：", options: ["A. 物体由于位置而具有的能量", "B. 物体由于运动而具有的能量", "C. 物体由于弹性形变而具有的能量", "D. 物体由于静止而具有的能量"], answer: "B", knowledgePoint: "动能的概念", analysis: "动能是物体由于运动而具有的能量。" },
      { type: "choice", difficulty: "medium", text: "重力势能与什么有关？", options: ["A. 只与质量有关", "B. 只与高度有关", "C. 与质量和高度都有关", "D. 与质量和高度都无关"], answer: "C", knowledgePoint: "重力势能的影响因素", analysis: "重力势能与质量和高度都有关，公式为Ep = mgh。" },
      { type: "choice", difficulty: "hard", text: "机械能是：", options: ["A. 只有动能", "B. 只有势能", "C. 动能和势能的总和", "D. 动能和势能的差"], answer: "C", knowledgePoint: "机械能的概念", analysis: "机械能是动能和势能的总和。" }
    ]
  },
  {
    lesson: 43, title: "机械能及其转化",
    questions: [
      { type: "choice", difficulty: "basic", text: "物体从高处下落时，能量转化是：", options: ["A. 动能转化为重力势能", "B. 重力势能转化为动能", "C. 动能转化为弹性势能", "D. 弹性势能转化为动能"], answer: "B", knowledgePoint: "能量转化", analysis: "物体下落时，高度降低，速度增大，重力势能转化为动能。" },
      { type: "choice", difficulty: "medium", text: "机械能守恒的条件是：", options: ["A. 只有重力做功", "B. 只有弹力做功", "C. 只有重力或弹力做功", "D. 任何情况下都守恒"], answer: "C", knowledgePoint: "机械能守恒条件", analysis: "在只有重力或弹力做功的情况下，机械能守恒。" },
      { type: "choice", difficulty: "hard", text: "关于能量守恒定律，下列说法正确的是：", options: ["A. 能量可以凭空产生", "B. 能量可以凭空消失", "C. 能量只能从一种形式转化为另一种形式", "D. 能量只能从一个物体转移到另一个物体"], answer: "C", knowledgePoint: "能量守恒定律", analysis: "能量守恒定律：能量既不会凭空产生，也不会凭空消失，只会从一种形式转化为另一种形式，或者从一个物体转移到另一个物体。" }
    ]
  },

  // ==================== 第13章 简单机械（第44-46课） ====================
  {
    lesson: 44, title: "杠杆",
    questions: [
      { type: "choice", difficulty: "basic", text: "杠杆的支点是：", options: ["A. 杠杆上用力的点", "B. 杠杆上承受阻力的点", "C. 杠杆绕着转动的点", "D. 杠杆的端点"], answer: "C", knowledgePoint: "杠杆五要素", analysis: "支点是杠杆绕着转动的点，动力点是用力的点，阻力点是承受阻力的点。" },
      { type: "choice", difficulty: "medium", text: "下列工具中，属于省力杠杆的是：", options: ["A. 筷子", "B. 钓鱼竿", "C. 撬棍", "D. 镊子"], answer: "C", knowledgePoint: "杠杆分类", analysis: "省力杠杆的动力臂大于阻力臂。撬棍是省力杠杆，筷子、钓鱼竿、镊子都是费力杠杆。" },
      { type: "choice", difficulty: "hard", text: "杠杆平衡条件是：", options: ["A. F₁ = F₂", "B. L₁ = L₂", "C. F₁L₁ = F₂L₂", "D. F₁/L₁ = F₂/L₂"], answer: "C", knowledgePoint: "杠杆平衡条件", analysis: "杠杆平衡条件是动力×动力臂=阻力×阻力臂，即F₁L₁ = F₂L₂。" }
    ]
  },
  {
    lesson: 45, title: "滑轮",
    questions: [
      { type: "choice", difficulty: "basic", text: "定滑轮的作用是：", options: ["A. 省力", "B. 改变力的方向", "C. 既省力又改变方向", "D. 不省力也不改变方向"], answer: "B", knowledgePoint: "定滑轮的作用", analysis: "定滑轮不省力，但能改变力的方向。" },
      { type: "choice", difficulty: "medium", text: "动滑轮的作用是：", options: ["A. 不省力", "B. 省一半力", "C. 省全部力", "D. 费力"], answer: "B", knowledgePoint: "动滑轮的作用", analysis: "动滑轮能省一半力，但不能改变力的方向。" },
      { type: "choice", difficulty: "hard", text: "滑轮组的省力程度取决于：", options: ["A. 定滑轮的个数", "B. 动滑轮的个数", "C. 绳子的长度", "D. 物体的重量"], answer: "B", knowledgePoint: "滑轮组的省力程度", analysis: "滑轮组的省力程度由动滑轮的个数决定，动滑轮越多越省力。" }
    ]
  },
  {
    lesson: 46, title: "机械效率",
    questions: [
      { type: "choice", difficulty: "basic", text: "机械效率的定义是：", options: ["A. 有用功与总功的比值", "B. 额外功与总功的比值", "C. 有用功与额外功的比值", "D. 总功与有用功的比值"], answer: "A", knowledgePoint: "机械效率的概念", analysis: "机械效率是有用功占总功的百分比，公式为η = W有用/W总 × 100%。" },
      { type: "choice", difficulty: "medium", text: "机械效率总是：", options: ["A. 大于1", "B. 等于1", "C. 小于1", "D. 大于或等于1"], answer: "C", knowledgePoint: "机械效率的特点", analysis: "由于额外功的存在，有用功总是小于总功，所以机械效率总是小于1。" },
      { type: "choice", difficulty: "hard", text: "提高机械效率的方法是：", options: ["A. 增大额外功", "B. 减小有用功", "C. 减小额外功", "D. 减小总功"], answer: "C", knowledgePoint: "提高机械效率的方法", analysis: "提高机械效率可以通过减小额外功，如减小摩擦、减轻机械自重等。" }
    ]
  },

  // ==================== 第14章 电与磁（第47-49课） ====================
  {
    lesson: 47, title: "电流与电路",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列物质中，属于导体的是：", options: ["A. 橡皮", "B. 玻璃", "C. 铜", "D. 陶瓷"], answer: "C", knowledgePoint: "导体与绝缘体", analysis: "铜是金属，金属中有自由电子，容易导电，是导体。其余都是绝缘体。" },
      { type: "choice", difficulty: "medium", text: "并联电路中，两个灯泡：", options: ["A. 亮度相同，一个断路另一个也灭", "B. 各自独立，一个断路另一个仍亮", "C. 串联在一起", "D. 无法同时发光"], answer: "B", knowledgePoint: "并联特性", analysis: "并联电路各支路独立，一条支路断路不影响其他支路，这也是家庭电路采用并联的原因。" },
      { type: "choice", difficulty: "hard", text: "手电筒里的两节电池串联，每节电压1.5V，则总电压为：", options: ["A. 1.5V", "B. 0.75V", "C. 3V", "D. 无法确定"], answer: "C", knowledgePoint: "串联电压", analysis: "串联电路总电压等于各部分电压之和，1.5V + 1.5V = 3V。" }
    ]
  },
  {
    lesson: 48, title: "欧姆定律",
    questions: [
      { type: "choice", difficulty: "basic", text: "欧姆定律的公式是：", options: ["A. I = U/R", "B. I = R/U", "C. U = I/R", "D. R = IU"], answer: "A", knowledgePoint: "欧姆定律", analysis: "欧姆定律：I = U/R，即电流等于电压除以电阻。" },
      { type: "choice", difficulty: "medium", text: "在电阻不变时，电流与电压的关系是：", options: ["A. 电流随电压增大而减小", "B. 电流随电压增大而增大", "C. 电流与电压无关", "D. 电流与电压成反比"], answer: "B", knowledgePoint: "欧姆定律的应用", analysis: "根据欧姆定律，电阻不变时，电流与电压成正比，电压越大，电流越大。" },
      { type: "choice", difficulty: "hard", text: "一个电阻为10Ω的导体，两端电压为20V，则通过的电流是：", options: ["A. 0.5A", "B. 2A", "C. 200A", "D. 10A"], answer: "B", knowledgePoint: "欧姆定律计算", analysis: "I = U/R = 20V ÷ 10Ω = 2A。" }
    ]
  },
  {
    lesson: 49, title: "磁场与电磁感应",
    questions: [
      { type: "choice", difficulty: "basic", text: "磁场的基本性质是：", options: ["A. 对放入其中的磁体有作用力", "B. 对放入其中的电荷有作用力", "C. 对放入其中的导体有作用力", "D. 对放入其中的物体有作用力"], answer: "A", knowledgePoint: "磁场的性质", analysis: "磁场对放入其中的磁体有磁力作用。" },
      { type: "choice", difficulty: "medium", text: "证明电流周围存在磁场的实验是：", options: ["A. 托里拆利实验", "B. 马德堡半球实验", "C. 奥斯特实验", "D. 阿基米德实验"], answer: "C", knowledgePoint: "电流的磁效应", analysis: "奥斯特实验证明了电流周围存在磁场。" },
      { type: "choice", difficulty: "hard", text: "电磁感应现象是指：", options: ["A. 电流产生磁场", "B. 磁场产生电流", "C. 导体在磁场中运动产生电流", "D. 闭合电路的一部分导体在磁场中做切割磁感线运动时产生电流"], answer: "D", knowledgePoint: "电磁感应", analysis: "电磁感应现象是指闭合电路的一部分导体在磁场中做切割磁感线运动时，导体中会产生感应电流。" }
    ]
  },

  // ==================== 第7章 期中复习与考试（第22-26课） ====================
  {
    lesson: 22, title: "机械运动与声现象复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "一辆汽车行驶360km用了4小时，它的平均速度是：", options: ["A. 90km/h", "B. 1440km/h", "C. 356km/h", "D. 100km/h"], answer: "A", knowledgePoint: "速度计算", analysis: "v = s/t = 360km ÷ 4h = 90km/h。" },
      { type: "choice", difficulty: "medium", text: "关于参照物，下列说法正确的是：", options: ["A. 只有静止的物体才能做参照物", "B. 参照物只能选地面", "C. 选择不同参照物，物体运动状态可能不同", "D. 参照物必须是运动的物体"], answer: "C", knowledgePoint: "参照物", analysis: "参照物可以任意选择，选择不同参照物，物体运动状态可能不同。" },
      { type: "choice", difficulty: "hard", text: "声音在下列介质中传播最快的是：", options: ["A. 空气", "B. 水", "C. 钢铁", "D. 真空"], answer: "C", knowledgePoint: "声速与介质", analysis: "声速在固体>液体>气体，真空中无法传声。钢铁是固体，传播最快。" }
    ]
  },
  {
    lesson: 23, title: "物态变化与光现象复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列现象中，属于熔化的是：", options: ["A. 水结冰", "B. 冰化成水", "C. 水变成水蒸气", "D. 水蒸气变成水"], answer: "B", knowledgePoint: "熔化", analysis: "熔化是物质从固态变成液态的过程。" },
      { type: "choice", difficulty: "medium", text: "光在真空中的传播速度约为：", options: ["A. 3×10⁶m/s", "B. 3×10⁷m/s", "C. 3×10⁸m/s", "D. 3×10⁹m/s"], answer: "C", knowledgePoint: "光速", analysis: "光在真空中的速度约为3×10⁸m/s。" },
      { type: "choice", difficulty: "hard", text: "关于光的反射，下列说法正确的是：", options: ["A. 反射角大于入射角", "B. 反射角等于入射角", "C. 反射角小于入射角", "D. 没有固定关系"], answer: "B", knowledgePoint: "反射定律", analysis: "反射定律的核心是反射角等于入射角。" }
    ]
  },
  {
    lesson: 24, title: "透镜与密度复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "凸透镜对光线的作用是：", options: ["A. 发散作用", "B. 会聚作用", "C. 既不发散也不会聚", "D. 先发散后会聚"], answer: "B", knowledgePoint: "凸透镜", analysis: "凸透镜对光线有会聚作用。" },
      { type: "choice", difficulty: "medium", text: "水的密度是：", options: ["A. 1g/cm³", "B. 10g/cm³", "C. 0.1g/cm³", "D. 100g/cm³"], answer: "A", knowledgePoint: "水的密度", analysis: "水的密度是1g/cm³或1000kg/m³。" },
      { type: "choice", difficulty: "hard", text: "当物体在凸透镜2倍焦距以外时，成的像：", options: ["A. 倒立缩小实像", "B. 倒立放大实像", "C. 正立放大虚像", "D. 不成像"], answer: "A", knowledgePoint: "凸透镜成像规律", analysis: "u > 2f时，成倒立缩小实像。" }
    ]
  },
  {
    lesson: 25, title: "综合练习",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列长度单位换算正确的是：", options: ["A. 1m=10cm", "B. 1km=1000m", "C. 1cm=100mm", "D. 1m=1000mm"], answer: "B", knowledgePoint: "单位换算", analysis: "1千米等于1000米。" },
      { type: "choice", difficulty: "medium", text: "用刻度尺测量物体长度时，正确的做法是：", options: ["A. 刻度尺歪斜放置", "B. 视线垂直尺面", "C. 从任意刻度开始", "D. 不估读"], answer: "B", knowledgePoint: "刻度尺使用", analysis: "测量时刻度尺要放正，视线垂直尺面。" },
      { type: "choice", difficulty: "hard", text: "一个物体的长度测量结果为12.35cm，其中准确值是：", options: ["A. 12cm", "B. 12.3cm", "C. 12.35cm", "D. 0.05cm"], answer: "B", knowledgePoint: "测量结果", analysis: "最后一位是估计值，其余是准确值。" }
    ]
  },
  {
    lesson: 26, title: "期中考试",
    questions: [
      { type: "choice", difficulty: "basic", text: "期中考试的考试范围是：", options: ["A. 第1-3章", "B. 第1-6章", "C. 第1-10章", "D. 全学期"], answer: "B", knowledgePoint: "考试范围", analysis: "期中考试范围是第1-6章。" },
      { type: "choice", difficulty: "medium", text: "期中考试的题型不包括：", options: ["A. 选择题", "B. 填空题", "C. 实验题", "D. 作文题"], answer: "D", knowledgePoint: "考试题型", analysis: "物理期中考试题型包括选择、填空、实验、计算，不包括作文。" },
      { type: "choice", difficulty: "hard", text: "期中考试时间是：", options: ["A. 60分钟", "B. 90分钟", "C. 120分钟", "D. 150分钟"], answer: "C", knowledgePoint: "考试时间", analysis: "期中考试时间为120分钟。" }
    ]
  },

  // ==================== 第15章 期末复习与考试（第50-54课） ====================
  {
    lesson: 50, title: "力与运动专题复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "力的单位是：", options: ["A. 焦耳", "B. 牛顿", "C. 瓦特", "D. 帕斯卡"], answer: "B", knowledgePoint: "力的单位", analysis: "力的单位是牛顿（N）。" },
      { type: "choice", difficulty: "medium", text: "关于惯性，下列说法正确的是：", options: ["A. 速度越大惯性越大", "B. 质量越大惯性越大", "C. 静止物体没有惯性", "D. 惯性是一种力"], answer: "B", knowledgePoint: "惯性", analysis: "惯性只与质量有关，质量越大惯性越大。" },
      { type: "choice", difficulty: "hard", text: "二力平衡的条件是：", options: ["A. 大小相等", "B. 方向相反", "C. 同一直线、同一物体", "D. 以上都是"], answer: "D", knowledgePoint: "二力平衡", analysis: "二力平衡需要四个条件：大小相等、方向相反、同一直线、同一物体。" }
    ]
  },
  {
    lesson: 51, title: "压强与浮力专题复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "压强的单位是：", options: ["A. 牛顿", "B. 焦耳", "C. 帕斯卡", "D. 瓦特"], answer: "C", knowledgePoint: "压强单位", analysis: "压强的单位是帕斯卡（Pa）。" },
      { type: "choice", difficulty: "medium", text: "液体压强公式是：", options: ["A. p = F/S", "B. p = ρgh", "C. p = mv", "D. p = W/t"], answer: "B", knowledgePoint: "液体压强", analysis: "液体压强公式是p = ρgh。" },
      { type: "choice", difficulty: "hard", text: "阿基米德原理的公式是：", options: ["A. F浮 = G物", "B. F浮 = G排", "C. F浮 = m排", "D. F浮 = V排"], answer: "B", knowledgePoint: "阿基米德原理", analysis: "F浮 = G排，即浮力等于排开液体的重力。" }
    ]
  },
  {
    lesson: 52, title: "功与机械能专题复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "功的单位是：", options: ["A. 牛顿", "B. 焦耳", "C. 瓦特", "D. 帕斯卡"], answer: "B", knowledgePoint: "功的单位", analysis: "功的单位是焦耳（J）。" },
      { type: "choice", difficulty: "medium", text: "功率的定义是：", options: ["A. 单位时间内做的功", "B. 做的总功", "C. 做功的时间", "D. 做功的力"], answer: "A", knowledgePoint: "功率", analysis: "功率是单位时间内做的功。" },
      { type: "choice", difficulty: "hard", text: "机械能是：", options: ["A. 只有动能", "B. 只有势能", "C. 动能和势能的总和", "D. 动能和势能的差"], answer: "C", knowledgePoint: "机械能", analysis: "机械能是动能和势能的总和。" }
    ]
  },
  {
    lesson: 53, title: "综合练习",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列情况中，力对物体做功的是：", options: ["A. 用力推桌子没动", "B. 提着水桶水平走", "C. 用力举高石头", "D. 扛着书包站着"], answer: "C", knowledgePoint: "做功条件", analysis: "做功需要有力和在力方向上的位移。" },
      { type: "choice", difficulty: "medium", text: "杠杆平衡条件是：", options: ["A. F₁ = F₂", "B. L₁ = L₂", "C. F₁L₁ = F₂L₂", "D. F₁/L₁ = F₂/L₂"], answer: "C", knowledgePoint: "杠杆平衡", analysis: "杠杆平衡条件是F₁L₁ = F₂L₂。" },
      { type: "choice", difficulty: "hard", text: "机械效率总是：", options: ["A. 大于1", "B. 等于1", "C. 小于1", "D. 大于或等于1"], answer: "C", knowledgePoint: "机械效率", analysis: "由于额外功存在，机械效率总是小于1。" }
    ]
  },
  {
    lesson: 54, title: "期末考试",
    questions: [
      { type: "choice", difficulty: "basic", text: "期末考试的考试范围是：", options: ["A. 第1-6章", "B. 第7-14章", "C. 全学期内容", "D. 第15-18章"], answer: "C", knowledgePoint: "考试范围", analysis: "期末考试范围是全学期内容。" },
      { type: "choice", difficulty: "medium", text: "期末考试的考试时间是：", options: ["A. 90分钟", "B. 120分钟", "C. 150分钟", "D. 180分钟"], answer: "C", knowledgePoint: "考试时间", analysis: "期末考试时间为150分钟。" },
      { type: "choice", difficulty: "hard", text: "期末考试的计算题占比约为：", options: ["A. 10%", "B. 25%", "C. 50%", "D. 75%"], answer: "B", knowledgePoint: "考试结构", analysis: "计算题通常占总分的25%左右。" }
    ]
  },

  // ==================== 第16章 专题复习（第55-57课） ====================
  {
    lesson: 55, title: "实验专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "测量平均速度的实验原理是：", options: ["A. v = s/t", "B. s = vt", "C. t = s/v", "D. v = t/s"], answer: "A", knowledgePoint: "实验原理", analysis: "平均速度公式是v = s/t。" },
      { type: "choice", difficulty: "medium", text: "测量密度需要用到的工具是：", options: ["A. 天平、量筒", "B. 刻度尺、秒表", "C. 弹簧测力计", "D. 温度计"], answer: "A", knowledgePoint: "测量工具", analysis: "测量密度需要测质量（天平）和体积（量筒）。" },
      { type: "choice", difficulty: "hard", text: "凸透镜成像实验中，调整烛焰、透镜、光屏的高度是为了：", options: ["A. 美观", "B. 使像成在光屏中央", "C. 方便操作", "D. 节省时间"], answer: "B", knowledgePoint: "实验操作", analysis: "调整高度使三者中心在同一高度，像才能成在光屏中央。" }
    ]
  },
  {
    lesson: 56, title: "计算题专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "用10N的力将物体移动2m，做的功是：", options: ["A. 5J", "B. 10J", "C. 20J", "D. 12J"], answer: "C", knowledgePoint: "功的计算", analysis: "W = Fs = 10N × 2m = 20J。" },
      { type: "choice", difficulty: "medium", text: "一台机器10秒做1000J的功，功率是：", options: ["A. 10W", "B. 100W", "C. 1000W", "D. 10000W"], answer: "B", knowledgePoint: "功率计算", analysis: "P = W/t = 1000J ÷ 10s = 100W。" },
      { type: "choice", difficulty: "hard", text: "一个物体浸没在水中，排开水的体积0.01m³，浮力是（g=10N/kg）：", options: ["A. 10N", "B. 100N", "C. 1000N", "D. 1N"], answer: "B", knowledgePoint: "浮力计算", analysis: "F浮 = ρ液gV排 = 1000×10×0.01 = 100N。" }
    ]
  },
  {
    lesson: 57, title: "图像专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "s-t图像中，水平直线表示：", options: ["A. 匀速运动", "B. 静止", "C. 加速运动", "D. 减速运动"], answer: "B", knowledgePoint: "s-t图像", analysis: "s-t图像中水平直线表示物体静止。" },
      { type: "choice", difficulty: "medium", text: "v-t图像中，倾斜直线表示：", options: ["A. 匀速运动", "B. 静止", "C. 变速运动", "D. 无法判断"], answer: "C", knowledgePoint: "v-t图像", analysis: "v-t图像中倾斜直线表示变速运动。" },
      { type: "choice", difficulty: "hard", text: "晶体熔化的温度-时间图像特点是：", options: ["A. 温度一直升高", "B. 有一段水平线段", "C. 温度一直降低", "D. 曲线上升"], answer: "B", knowledgePoint: "熔化图像", analysis: "晶体熔化时温度不变，图像有水平线段。" }
    ]
  },

  // ==================== 第17章 知识拓展（第58-60课） ====================
  {
    lesson: 58, title: "物理与魔法的联系",
    questions: [
      { type: "choice", difficulty: "basic", text: "魔法与物理的相似之处是：", options: ["A. 都遵循一定规律", "B. 完全不同", "C. 都不需要能量", "D. 都很神秘"], answer: "A", knowledgePoint: "魔法与物理", analysis: "魔法和物理都遵循一定规律。" },
      { type: "choice", difficulty: "medium", text: "物理中的能量守恒对应魔法中的：", options: ["A. 魔力守恒", "B. 咒语守恒", "C. 魔杖守恒", "D. 巫师守恒"], answer: "A", knowledgePoint: "能量守恒", analysis: "物理有能量守恒，魔法有魔力守恒。" },
      { type: "choice", difficulty: "hard", text: "飞天扫帚利用的物理原理是：", options: ["A. 浮力", "B. 空气动力学", "C. 电磁力", "D. 引力"], answer: "B", knowledgePoint: "魔法物品物理原理", analysis: "飞天扫帚利用空气动力学产生升力。" }
    ]
  },
  {
    lesson: 59, title: "物理学史",
    questions: [
      { type: "choice", difficulty: "basic", text: "经典力学的奠基人是：", options: ["A. 爱因斯坦", "B. 牛顿", "C. 伽利略", "D. 法拉第"], answer: "B", knowledgePoint: "经典力学", analysis: "牛顿奠定了经典力学的基础。" },
      { type: "choice", difficulty: "medium", text: "发现电磁感应的科学家是：", options: ["A. 奥斯特", "B. 法拉第", "C. 麦克斯韦", "D. 安培"], answer: "B", knowledgePoint: "电磁感应", analysis: "法拉第发现了电磁感应。" },
      { type: "choice", difficulty: "hard", text: "提出相对论的科学家是：", options: ["A. 牛顿", "B. 爱因斯坦", "C. 普朗克", "D. 玻尔"], answer: "B", knowledgePoint: "相对论", analysis: "爱因斯坦提出了相对论。" }
    ]
  },
  {
    lesson: 60, title: "生活中的物理",
    questions: [
      { type: "choice", difficulty: "basic", text: "彩虹是怎么形成的？", options: ["A. 光的反射", "B. 光的折射和色散", "C. 光的直线传播", "D. 光的干涉"], answer: "B", knowledgePoint: "彩虹成因", analysis: "彩虹是阳光在水滴中折射和色散形成的。" },
      { type: "choice", difficulty: "medium", text: "电灯利用什么原理发光？", options: ["A. 电流的热效应", "B. 电流的磁效应", "C. 电磁感应", "D. 光电效应"], answer: "A", knowledgePoint: "电灯原理", analysis: "电灯利用电流的热效应发光。" },
      { type: "choice", difficulty: "hard", text: "飞机能升空的原因是：", options: ["A. 飞机很轻", "B. 利用伯努利原理", "C. 利用浮力", "D. 利用磁力"], answer: "B", knowledgePoint: "飞机升空", analysis: "飞机利用伯努利原理产生升力。" }
    ]
  },

  // ==================== 第18章 假期作业指导（第61-63课） ====================
  {
    lesson: 61, title: "寒假作业规划",
    questions: [
      { type: "choice", difficulty: "basic", text: "寒假作业应该：", options: ["A. 最后几天赶完", "B. 每天做一点", "C. 不做", "D. 开学前一天做完"], answer: "B", knowledgePoint: "作业规划", analysis: "合理安排时间，每天做一点效果最好。" },
      { type: "choice", difficulty: "medium", text: "遇到不会的题目应该：", options: ["A. 放弃", "B. 标记下来开学问", "C. 乱填答案", "D. 抄同学的"], answer: "B", knowledgePoint: "学习方法", analysis: "不会的题目标记下来，开学后请教老师或同学。" },
      { type: "choice", difficulty: "hard", text: "寒假每天学习物理的时间建议：", options: ["A. 8小时", "B. 4小时", "C. 1-2小时", "D. 0小时"], answer: "C", knowledgePoint: "时间管理", analysis: "每天1-2小时学习物理比较合理。" }
    ]
  },
  {
    lesson: 62, title: "暑假作业规划",
    questions: [
      { type: "choice", difficulty: "basic", text: "暑假应该：", options: ["A. 只玩不学习", "B. 只学习不玩", "C. 劳逸结合", "D. 天天睡觉"], answer: "C", knowledgePoint: "暑假规划", analysis: "暑假要劳逸结合，既要学习也要休息。" },
      { type: "choice", difficulty: "medium", text: "暑假可以做的事情不包括：", options: ["A. 完成作业", "B. 预习下学期内容", "C. 阅读科普书籍", "D. 整天打游戏"], answer: "D", knowledgePoint: "暑假活动", analysis: "整天打游戏不利于身心健康。" },
      { type: "choice", difficulty: "hard", text: "推荐的物理科普书籍是：", options: ["A. 《物理世界奇遇记》", "B. 《魔法咒语大全》", "C. 《小说集》", "D. 《食谱》"], answer: "A", knowledgePoint: "阅读推荐", analysis: "《物理世界奇遇记》是很好的物理科普书。" }
    ]
  },
  {
    lesson: 63, title: "物理实践活动",
    questions: [
      { type: "choice", difficulty: "basic", text: "制作简易温度计利用的原理是：", options: ["A. 液体热胀冷缩", "B. 气体热胀冷缩", "C. 固体热胀冷缩", "D. 电磁感应"], answer: "A", knowledgePoint: "温度计原理", analysis: "温度计利用液体热胀冷缩原理。" },
      { type: "choice", difficulty: "medium", text: "观察生活中的物理现象可以培养：", options: ["A. 观察能力", "B. 绘画能力", "C. 唱歌能力", "D. 烹饪能力"], answer: "A", knowledgePoint: "实践活动", analysis: "观察物理现象能培养观察能力。" },
      { type: "choice", difficulty: "hard", text: "撰写观察报告的目的是：", options: ["A. 完成任务", "B. 培养观察和写作能力", "C. 浪费时间", "D. 应付老师"], answer: "B", knowledgePoint: "报告撰写", analysis: "撰写报告能培养观察和写作能力。" }
    ]
  }
];

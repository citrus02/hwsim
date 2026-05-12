/**
 * math.js
 * 麻瓜学术系 · 数学
 * 教授：奥古斯都·芬威克（Augustus Fenwick）
 * 课程体系：英国 KS3 → GCSE → A-Level（共 70 课，14 章，横跨 7 年级）
 */

import { lessonMap } from './math-lesson.js';
import { questionBank } from './math-questionBank.js';

export const subjectMeta = {
  key: "math",
  name: "数学",
  icon: "🔢",
  professor: "奥古斯都·芬威克",
  desc: "数字是宇宙的骨架，麻瓜花了几千年把它读清楚。这门课教你用同样的方式读。",
  unlockGrade: 1,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle:    "停顿五秒，拍讲台一下，不说话",
  errorStyle:     "不批评，让回去看定义",
  officeHours:    "周二下午",
  signature:      "黑板右上角永远留一道未解题",
  prop:           "七十年代麻瓜计算器，按键磨白",
  catchphrase:    "这不是在算数，这是在读宇宙的语言。"
};

// 14章 × 5课 = 70课，贯穿1–7年级
export const syllabus = [
  // ── 第1年·KS3 ────────────────────────────────────────────
  {
    chapter: 1, yearRange: "1年级", phase: "KS3",
    title: "数与运算",
    lessons: [
      { lesson: 1,  title: "整数与数轴",       keyPoints: ["正整数、负整数与零", "数轴：方向与位置", "整数的大小比较", "绝对值的概念"] },
      { lesson: 2,  title: "分数：部分与整体",   keyPoints: ["分数的意义与表示", "等值分数与化简", "分数的加减法", "带分数与假分数"] },
      { lesson: 3,  title: "小数与百分比",       keyPoints: ["小数与分数的转换", "百分比的定义与用法", "百分比的计算", "增减百分比"] },
      { lesson: 4,  title: "幂次与方根",         keyPoints: ["乘方的概念与符号", "平方与平方根", "立方与立方根", "指数为0与负数的初探"] },
      { lesson: 5,  title: "比与比例",           keyPoints: ["比的定义与化简", "比例的意义", "正比与反比", "比例在配制中的应用"] }
    ]
  },
  {
    chapter: 2, yearRange: "1年级", phase: "KS3",
    title: "空间入门",
    lessons: [
      { lesson: 6,  title: "角的度量与分类",     keyPoints: ["度作为角的单位", "锐角、直角、钝角、平角", "角的测量方法", "互补角与互余角"] },
      { lesson: 7,  title: "三角形的性质",       keyPoints: ["三角形内角和为180°", "三种三角形的分类", "等腰三角形的性质", "三角形不等式"] },
      { lesson: 8,  title: "四边形与多边形",     keyPoints: ["正方形、长方形、平行四边形", "多边形内角和公式", "对角线的性质", "正多边形"] },
      { lesson: 9,  title: "圆：周长与面积",     keyPoints: ["半径、直径、圆周率π", "周长公式 C = 2πr", "面积公式 A = πr²", "弧长与扇形面积"] },
      { lesson: 10, title: "坐标系与位置",       keyPoints: ["笛卡尔坐标系", "四个象限", "点的坐标表示法", "坐标系在地图中的应用"] }
    ]
  },
  // ── 第2年·KS3 ────────────────────────────────────────────
  {
    chapter: 3, yearRange: "2年级", phase: "KS3",
    title: "代数基础",
    lessons: [
      { lesson: 11, title: "用字母表示数",       keyPoints: ["代数表达式的含义", "代入求值", "化简同类项", "代数式的加减"] },
      { lesson: 12, title: "一次方程的解法",     keyPoints: ["等式的性质", "移项变号", "一步、两步解方程", "验算"] },
      { lesson: 13, title: "不等式与数轴表示",   keyPoints: ["不等号的方向", "解一元一次不等式", "解集的数轴表示", "乘除负数时变向"] },
      { lesson: 14, title: "联立方程初步",       keyPoints: ["两个未知数、两个方程", "代入消元法", "加减消元法", "联立方程的图形意义"] },
      { lesson: 15, title: "函数：输入与输出",   keyPoints: ["函数的定义域与值域", "函数机器模型", "函数表达式与图像", "线性函数的斜率"] }
    ]
  },
  {
    chapter: 4, yearRange: "2年级", phase: "KS3",
    title: "度量与统计",
    lessons: [
      { lesson: 16, title: "平面图形的面积",     keyPoints: ["长方形面积", "三角形面积", "梯形面积", "复合图形面积"] },
      { lesson: 17, title: "立体图形的体积",     keyPoints: ["长方体与正方体", "圆柱的体积", "棱锥与圆锥的体积", "球的体积公式"] },
      { lesson: 18, title: "勾股定理",           keyPoints: ["直角三角形三边关系", "a² + b² = c²", "判断直角三角形", "勾股定理的应用"] },
      { lesson: 19, title: "数据的收集与整理",   keyPoints: ["总体与样本", "频率与频数", "频率分布表", "茎叶图"] },
      { lesson: 20, title: "均值、中位数、众数与概率", keyPoints: ["三种平均值的计算", "各平均值的适用场合", "古典概型", "互斥事件与互补事件"] }
    ]
  },
  // ── 第3年·KS3 ────────────────────────────────────────────
  {
    chapter: 5, yearRange: "3年级", phase: "KS3",
    title: "数论基础",
    lessons: [
      { lesson: 21, title: "质数与因数分解",     keyPoints: ["质数与合数的定义", "因数树", "最大公因数与最小公倍数", "质因数分解的唯一性"] },
      { lesson: 22, title: "整除性与余数",       keyPoints: ["整除的判断规则", "余数的定义", "模运算初步", "辗转相除法"] },
      { lesson: 23, title: "集合语言初步",       keyPoints: ["集合的表示方法", "属于与不属于", "交集与并集", "韦恩图"] },
      { lesson: 24, title: "逻辑推理：命题与反例", keyPoints: ["真命题与假命题", "逆命题与否命题", "反例的意义", "推理链的结构"] },
      { lesson: 25, title: "简单数学证明",       keyPoints: ["直接证明法", "反证法", "证明的书写格式", "穷举法"] }
    ]
  },
  {
    chapter: 6, yearRange: "3年级", phase: "KS3",
    title: "综合应用",
    lessons: [
      { lesson: 26, title: "相似图形与比例缩放",  keyPoints: ["相似图形的定义", "比例因子", "对应边与对应角", "比例在地图与模型中的应用"] },
      { lesson: 27, title: "平移、旋转与反射",   keyPoints: ["三种变换的定义", "变换的坐标描述", "组合变换", "中心对称与轴对称"] },
      { lesson: 28, title: "统计图表的选择与解读", keyPoints: ["条形图、折线图、饼图", "直方图与频率分布", "散点图", "根据目的选图"] },
      { lesson: 29, title: "概率：实验与理论",   keyPoints: ["实验概率与大数定律", "理论概率的计算", "样本空间与事件", "期望值"] },
      { lesson: 30, title: "数学建模初步",       keyPoints: ["建模的步骤", "变量的识别", "假设的设立", "模型的检验与修正"] }
    ]
  },
  // ── 第4年·GCSE ────────────────────────────────────────────
  {
    chapter: 7, yearRange: "4年级", phase: "GCSE",
    title: "代数进阶",
    lessons: [
      { lesson: 31, title: "二次方程：因式分解法", keyPoints: ["二次方程的标准形", "因式分解为两个括号", "零积原理", "判别式初探"] },
      { lesson: 32, title: "配方法与求根公式",   keyPoints: ["配方的步骤", "完全平方式", "一元二次方程求根公式", "重根与虚根的概念"] },
      { lesson: 33, title: "二次函数图像与顶点", keyPoints: ["抛物线的对称轴", "顶点坐标公式", "图像的平移与缩放", "判别式与图像的关系"] },
      { lesson: 34, title: "多项式运算",         keyPoints: ["多项式的加减", "乘积展开", "完全平方公式与平方差公式", "多项式除法初步"] },
      { lesson: 35, title: "含参方程组",         keyPoints: ["参数的含义", "参数影响解的性质", "无解与无数解的条件", "实际问题中的参数"] }
    ]
  },
  {
    chapter: 8, yearRange: "4年级", phase: "GCSE",
    title: "三角学",
    lessons: [
      { lesson: 36, title: "三角比：sin、cos、tan", keyPoints: ["直角三角形中三边的关系", "正弦、余弦、正切的定义", "特殊角的三角值", "三角函数图像"] },
      { lesson: 37, title: "直角三角形的应用",   keyPoints: ["仰角与俯角", "用三角比求边长或角度", "高度与距离问题", "反三角函数"] },
      { lesson: 38, title: "正弦定理与余弦定理", keyPoints: ["非直角三角形", "正弦定理：a/sinA = b/sinB", "余弦定理：a² = b² + c² - 2bc·cosA", "解三角形的步骤"] },
      { lesson: 39, title: "三角方程的解",       keyPoints: ["基本三角方程", "方程的周期性解", "解集的表示", "在给定范围内列出所有解"] },
      { lesson: 40, title: "三角学在测量中的应用", keyPoints: ["三角测量法", "方位角", "多步骤综合题", "误差分析"] }
    ]
  },
  // ── 第5年·GCSE ────────────────────────────────────────────
  {
    chapter: 9, yearRange: "5年级", phase: "GCSE",
    title: "微积分初步",
    lessons: [
      { lesson: 41, title: "变化率的直觉理解",   keyPoints: ["平均速度与瞬时速度", "割线趋近切线", "变化率的几何含义", "生活中的变化率"] },
      { lesson: 42, title: "导数的定义与几何意义", keyPoints: ["极限的直觉概念", "导数的定义", "切线斜率", "导函数的记号"] },
      { lesson: 43, title: "基本求导法则",       keyPoints: ["幂函数求导", "常数倍法则与求和法则", "乘积法则", "链式法则"] },
      { lesson: 44, title: "极值与优化问题",     keyPoints: ["临界点的求法", "二阶导数判别极大极小", "最值问题", "优化问题的建模"] },
      { lesson: 45, title: "积分作为面积——初步", keyPoints: ["黎曼和的思想", "不定积分与反导数", "定积分的计算", "面积的计算"] }
    ]
  },
  {
    chapter: 10, yearRange: "5年级", phase: "GCSE",
    title: "统计深化",
    lessons: [
      { lesson: 46, title: "离散概率分布",       keyPoints: ["随机变量的定义", "概率分布表", "期望值E(X)的计算", "方差Var(X)的计算"] },
      { lesson: 47, title: "条件概率与独立性",   keyPoints: ["条件概率公式 P(A|B)", "乘法定理", "事件独立性的判断", "全概率公式"] },
      { lesson: 48, title: "正态分布的概念",     keyPoints: ["钟形曲线的特征", "均值与标准差", "68-95-99.7法则", "标准化与z值"] },
      { lesson: 49, title: "统计推断基础",       keyPoints: ["总体参数与样本统计量", "置信区间的概念", "假设检验的逻辑", "显著性水平"] },
      { lesson: 50, title: "GCSE综合复习",       keyPoints: ["代数与几何综合", "微积分与统计综合", "解题策略回顾", "考试技巧"] }
    ]
  },
  // ── 第6年·A-Level ─────────────────────────────────────────
  {
    chapter: 11, yearRange: "6年级", phase: "A-Level",
    title: "纯数学",
    lessons: [
      { lesson: 51, title: "函数变换与合成",     keyPoints: ["平移变换 f(x+a)", "伸缩变换 af(x)", "反函数", "复合函数的求导"] },
      { lesson: 52, title: "指数函数与对数",     keyPoints: ["指数函数的图像", "自然对数e", "对数法则", "指数与对数方程的解"] },
      { lesson: 53, title: "三角恒等式",         keyPoints: ["勾股恒等式 sin²θ+cos²θ=1", "二倍角公式", "和差化积", "恒等式证明"] },
      { lesson: 54, title: "微分进阶",           keyPoints: ["乘积法则与商法则", "链式法则的应用", "隐函数求导", "参数方程的导数"] },
      { lesson: 55, title: "积分技巧与应用",     keyPoints: ["换元积分法", "分部积分法", "部分分式", "旋转体体积"] }
    ]
  },
  {
    chapter: 12, yearRange: "6年级", phase: "A-Level",
    title: "应用数学",
    lessons: [
      { lesson: 56, title: "运动方程与自由落体", keyPoints: ["匀变速直线运动方程", "v = u + at 等五个方程", "自由落体的数学描述", "位移-时间图与速度-时间图"] },
      { lesson: 57, title: "牛顿定律的向量形式", keyPoints: ["力的向量表示", "合力的计算", "加速度的向量方程", "斜面上的分力"] },
      { lesson: 58, title: "力矩与平衡",         keyPoints: ["力矩的定义", "力矩定理", "平衡条件", "重心与稳定性"] },
      { lesson: 59, title: "正态分布的应用",     keyPoints: ["用正态分布建模", "查表求概率", "置信区间计算", "二项分布的正态近似"] },
      { lesson: 60, title: "假设检验：t检验概念", keyPoints: ["原假设与备择假设", "t分布", "单尾与双尾检验", "p值的解读"] }
    ]
  },
  // ── 第7年·A-Level ─────────────────────────────────────────
  {
    chapter: 13, yearRange: "7年级", phase: "A-Level",
    title: "高等数学",
    lessons: [
      { lesson: 61, title: "微分方程：分离变量法", keyPoints: ["微分方程的分类", "分离变量的步骤", "通解与特解", "指数增长与衰减模型"] },
      { lesson: 62, title: "数列与级数：收敛性",  keyPoints: ["等差数列与等比数列", "求和公式", "级数的收敛与发散", "无穷级数"] },
      { lesson: 63, title: "复数：极坐标与欧拉公式", keyPoints: ["虚数单位i", "复数的极坐标形式", "棣莫弗定理", "欧拉公式 e^(iθ) = cosθ + i·sinθ"] },
      { lesson: 64, title: "向量：空间直线与平面", keyPoints: ["三维向量的运算", "直线的向量方程", "平面方程", "法向量与点积"] },
      { lesson: 65, title: "矩阵与线性变换初步", keyPoints: ["矩阵的加法与乘法", "行列式的几何意义", "线性变换", "特征值概念"] }
    ]
  },
  {
    chapter: 14, yearRange: "7年级", phase: "A-Level",
    title: "综合冲刺",
    lessons: [
      { lesson: 66, title: "数学建模：微分方程应用", keyPoints: ["种群增长模型", "牛顿冷却定律", "简谐振动方程", "建模流程回顾"] },
      { lesson: 67, title: "数值方法：牛顿迭代",  keyPoints: ["方程数值解的意义", "牛顿迭代公式", "收敛性与误差", "计算器实现"] },
      { lesson: 68, title: "决策数学：图论与网络", keyPoints: ["图的定义与术语", "最短路径算法", "最小生成树", "中国邮递员问题"] },
      { lesson: 69, title: "证明技巧综合",         keyPoints: ["归纳证明", "矛盾证明", "构造证明", "反例的精确使用"] },
      { lesson: 70, title: "A-Level综合模拟",      keyPoints: ["代数综合题", "微积分综合题", "统计与力学综合", "考场策略与时间分配"] }
    ]
  }
];

export const crossAnchors = [
  {
    concept: "比与比例",
    linkedSubject: "chemistry",
    linkedLesson: "魔药配方计算（第3课）",
    desc: "普里姆罗斯·斯普劳特在化学课讲魔药成分配比时——2份曼德拉草、1份蛇皮——用的正是芬威克在第5课教的比的化简方法。两门课在这里完全重叠。"
  },
  {
    concept: "坐标系",
    linkedSubject: "geography",
    linkedLesson: "地图坐标与经纬度（第2课）",
    desc: "韦斯莱讲经纬度时在黑板上画了一个坐标系，芬威克看到了直接走进去说：'我刚讲过这个。'——两门课的坐标系概念是同一件事。"
  },
  {
    concept: "三角学",
    linkedSubject: "astronomy",
    linkedLesson: "天体坐标系（第4课）",
    desc: "天文学课计算星体仰角时直接用到了sin和cos。芬威克把天文学列为数学的一个分支，天文学教授对此保持沉默。"
  },
  {
    concept: "微积分：变化率",
    linkedSubject: "physics",
    linkedLesson: "速度与加速度（第3课）",
    desc: "穆迪讲速度与加速度时在黑板上写了 a = Δv/Δt。芬威克第41课讲变化率时写了同样的符号。两人知道，但从未在课上相互提及。"
  },
  {
    concept: "数学证明",
    linkedSubject: "civics",
    linkedLesson: "论证结构（第8课）",
    desc: "沙克博特在哲学课讲论证的结构——前提、推论、结论——和芬威克的第24课逻辑推理用的是同一个框架，只是一个用数字，一个用语言。"
  }
];

window.subject_math = {
  subjectMeta,
  teachingStyle,
  syllabus,
  crossAnchors,
  lessonMap,
  questionBank
};

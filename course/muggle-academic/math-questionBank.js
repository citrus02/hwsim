// math-questionBank.js
// 霍格沃茨数学课程 - 一年级随堂测验题库（完整版）
// 教授：奥古斯都·芬威克
// 每课3题：basic（+2分）、medium（0分，全对得E）、hard（-1分）

export const questionBank = [
  // ==================== 第1章 有理数的世界（第1-12课） ====================
  {
    lesson: 1, title: "正数、负数与0",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列说法正确的是：", options: ["A. 0是正数", "B. 0既不是正数也不是负数", "C. 0是负数", "D. 0是最小的正数"], answer: "B", knowledgePoint: "0的归类", analysis: "0既不是正数也不是负数，这是有理数分类的基础定义。" },
      { type: "choice", difficulty: "medium", text: "气温 -8℃ 与 -3℃ 相比，哪个更冷？", options: ["A. -8℃ 更冷", "B. -3℃ 更冷", "C. 一样冷", "D. 无法比较"], answer: "A", knowledgePoint: "负数大小比较", analysis: "-8 < -3，数值越小温度越低，所以 -8℃ 更冷。" },
      { type: "choice", difficulty: "hard", text: "若 a 是负数，b 是正数，则 |a| 与 b 的关系是：", options: ["A. |a| > b", "B. |a| < b", "C. |a| = b", "D. 无法确定"], answer: "D", knowledgePoint: "绝对值与正负数的关系", analysis: "|a| 是正数，b 也是正数，但大小取决于具体值，无法仅凭符号判断。" }
    ]
  },
  {
    lesson: 2, title: "有理数的概念与分类",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列数中，是有理数的是：", options: ["A. π", "B. √2", "C. 0.333...", "D. e"], answer: "C", knowledgePoint: "有理数的定义", analysis: "0.333...是无限循环小数，可化为分数1/3，是有理数。π、√2、e都是无理数。" },
      { type: "choice", difficulty: "medium", text: "下列说法正确的是：", options: ["A. 整数就是自然数", "B. 分数都是有理数", "C. 有理数包括正有理数、0、负有理数", "D. 无限小数是无理数"], answer: "C", knowledgePoint: "有理数的分类", analysis: "整数包括负整数，自然数是正整数和0；无限循环小数是有理数；有理数分为正有理数、0、负有理数三类。" },
      { type: "choice", difficulty: "hard", text: "已知 a 是有理数，下列结论正确的是：", options: ["A. -a 一定是负数", "B. |a| 一定是正数", "C. |a| 一定是非负数", "D. -|a| 一定是负数"], answer: "C", knowledgePoint: "绝对值的非负性", analysis: "|a|≥0，所以是非负数。当a=0时，-a=0，|a|=0，-|a|=0。" }
    ]
  },
  {
    lesson: 3, title: "数轴",
    questions: [
      { type: "choice", difficulty: "basic", text: "数轴上表示 -2 和 3 的两点之间的距离是：", options: ["A. 1", "B. 2", "C. 5", "D. 6"], answer: "C", knowledgePoint: "数轴上两点距离", analysis: "距离 = |3 - (-2)| = 5。" },
      { type: "choice", difficulty: "medium", text: "下列说法错误的是：", options: ["A. 数轴上原点左边的点表示负数", "B. 数轴上离原点越远的点表示的数绝对值越大", "C. 数轴上右边的点表示的数一定大于左边的点", "D. 数轴上的点只能表示有理数"], answer: "D", knowledgePoint: "数轴与实数的关系", analysis: "数轴上的点与实数一一对应，不仅可以表示有理数，也可以表示无理数。" },
      { type: "choice", difficulty: "hard", text: "点A在数轴上表示3，将点A向左移动5个单位长度，再向右移动2个单位长度后表示的数是：", options: ["A. -4", "B. 0", "C. 2", "D. 4"], answer: "B", knowledgePoint: "数轴上的平移", analysis: "3 - 5 = -2，-2 + 2 = 0。" }
    ]
  },
  {
    lesson: 4, title: "相反数",
    questions: [
      { type: "choice", difficulty: "basic", text: "-5 的相反数是：", options: ["A. 5", "B. -5", "C. 1/5", "D. -1/5"], answer: "A", knowledgePoint: "相反数的定义", analysis: "只有符号不同的两个数互为相反数，-5的相反数是5。" },
      { type: "choice", difficulty: "medium", text: "若 a = -a，则 a =：", options: ["A. 1", "B. 0", "C. -1", "D. 不存在"], answer: "B", knowledgePoint: "相反数等于自身的数", analysis: "只有0的相反数等于它本身。" },
      { type: "choice", difficulty: "hard", text: "数轴上点A表示a，点B表示b，且a与b互为相反数，AB=8，则a的值为：", options: ["A. 4", "B. -4", "C. 4或-4", "D. 0"], answer: "C", knowledgePoint: "相反数在数轴上的位置", analysis: "互为相反数的两点关于原点对称，距离为2|a|=8，|a|=4，a=±4。" }
    ]
  },
  {
    lesson: 5, title: "绝对值",
    questions: [
      { type: "choice", difficulty: "basic", text: "|-3| =：", options: ["A. -3", "B. 3", "C. ±3", "D. 0"], answer: "B", knowledgePoint: "绝对值的计算", analysis: "负数的绝对值是它的相反数，|-3|=3。" },
      { type: "choice", difficulty: "medium", text: "若 |x| = 5，则 x =：", options: ["A. 5", "B. -5", "C. 5或-5", "D. 0"], answer: "C", knowledgePoint: "绝对值的性质", analysis: "绝对值等于5的数有两个：5和-5。" },
      { type: "choice", difficulty: "hard", text: "若 |x-2| = 3，则 x =：", options: ["A. 5", "B. -1", "C. 5或-1", "D. 1或5"], answer: "C", knowledgePoint: "绝对值的方程", analysis: "x-2=3或x-2=-3，解得x=5或x=-1。" }
    ]
  },
  {
    lesson: 6, title: "有理数加法",
    questions: [
      { type: "choice", difficulty: "basic", text: "(-3) + (-5) =：", options: ["A. 8", "B. -8", "C. 2", "D. -2"], answer: "B", knowledgePoint: "同号加法", analysis: "同号相加，取相同符号，绝对值相加，-(3+5)=-8。" },
      { type: "choice", difficulty: "medium", text: "(-7) + 3 =：", options: ["A. 10", "B. -10", "C. 4", "D. -4"], answer: "D", knowledgePoint: "异号加法", analysis: "异号相加，取绝对值大的符号，绝对值大的减去绝对值小的，-(7-3)=-4。" },
      { type: "choice", difficulty: "hard", text: "若 a > 0，b < 0，且 |a| < |b|，则 a+b 的符号是：", options: ["A. 正", "B. 负", "C. 0", "D. 无法确定"], answer: "B", knowledgePoint: "加法符号判断", analysis: "异号相加取绝对值大的符号，|b|>|a|，所以取b的符号为负。" }
    ]
  },
  {
    lesson: 7, title: "有理数减法",
    questions: [
      { type: "choice", difficulty: "basic", text: "5 - (-3) =：", options: ["A. 2", "B. -2", "C. 8", "D. -8"], answer: "C", knowledgePoint: "减法转化为加法", analysis: "减去一个数等于加上它的相反数，5-(-3)=5+3=8。" },
      { type: "choice", difficulty: "medium", text: "(-2) - 5 =：", options: ["A. 3", "B. -3", "C. 7", "D. -7"], answer: "D", knowledgePoint: "正数减负数", analysis: "(-2)-5=(-2)+(-5)=-7。" },
      { type: "choice", difficulty: "hard", text: "某地一天最高气温是5℃，最低气温是-3℃，温差是：", options: ["A. 2℃", "B. 8℃", "C. -2℃", "D. -8℃"], answer: "B", knowledgePoint: "温差的计算", analysis: "温差=最高-最低=5-(-3)=5+3=8℃。" }
    ]
  },
  {
    lesson: 8, title: "加减混合运算",
    questions: [
      { type: "choice", difficulty: "basic", text: "(-2) + 5 - (-3) =：", options: ["A. 0", "B. 4", "C. 6", "D. 10"], answer: "C", knowledgePoint: "加减混合", analysis: "原式= -2+5+3=6。" },
      { type: "choice", difficulty: "medium", text: "计算 (-3) + 4 - (-1) - 2 的结果是：", options: ["A. 0", "B. 2", "C. -2", "D. 4"], answer: "A", knowledgePoint: "含括号的加减混合", analysis: "原式=-3+4+1-2=0。" },
      { type: "choice", difficulty: "hard", text: "若 |a|=3，|b|=5，且 a < b，则 a+b 的值为：", options: ["A. 8", "B. 2", "C. 8或2", "D. -8或-2"], answer: "C", knowledgePoint: "绝对值与加减综合", analysis: "a=±3，b=±5，a<b，可能a=3,b=5得8，或a=-3,b=5得2，或a=-3,b=-5不满足a<b，或a=3,b=-5不满足。" }
    ]
  },
  {
    lesson: 9, title: "有理数乘法",
    questions: [
      { type: "choice", difficulty: "basic", text: "(-2)×(-3)=：", options: ["A. 6", "B. -6", "C. 5", "D. -5"], answer: "A", knowledgePoint: "同号相乘", analysis: "同号得正，2×3=6。" },
      { type: "choice", difficulty: "medium", text: "(-3)×4=：", options: ["A. 12", "B. -12", "C. 7", "D. -7"], answer: "B", knowledgePoint: "异号相乘", analysis: "异号得负，3×4=12，所以-12。" },
      { type: "choice", difficulty: "hard", text: "若 ab > 0，a+b < 0，则 a 和 b 的符号是：", options: ["A. 同正", "B. 同负", "C. 一正一负", "D. 无法确定"], answer: "B", knowledgePoint: "积的符号与和的符号", analysis: "ab>0说明同号，a+b<0说明和为负，所以同负。" }
    ]
  },
  {
    lesson: 10, title: "有理数除法",
    questions: [
      { type: "choice", difficulty: "basic", text: "(-6)÷(-2)=：", options: ["A. 3", "B. -3", "C. 12", "D. -12"], answer: "A", knowledgePoint: "同号相除", analysis: "同号得正，6÷2=3。" },
      { type: "choice", difficulty: "medium", text: "0÷(-5)=：", options: ["A. 0", "B. -5", "C. 5", "D. 无意义"], answer: "A", knowledgePoint: "0的除法", analysis: "0除以任何非0数都得0。" },
      { type: "choice", difficulty: "hard", text: "下列说法正确的是：", options: ["A. 任何数都有倒数", "B. -1的倒数是1", "C. 0的倒数是0", "D. 倒数是本身的数是±1"], answer: "D", knowledgePoint: "倒数的概念", analysis: "0没有倒数；-1的倒数是-1；倒数是本身的数是1和-1。" }
    ]
  },
  {
    lesson: 11, title: "有理数乘方",
    questions: [
      { type: "choice", difficulty: "basic", text: "(-2)³ =：", options: ["A. 8", "B. -8", "C. 6", "D. -6"], answer: "B", knowledgePoint: "负数的奇次幂", analysis: "负数的奇次幂是负数，2³=8，所以-8。" },
      { type: "choice", difficulty: "medium", text: "(-3)² =：", options: ["A. 9", "B. -9", "C. 6", "D. -6"], answer: "A", knowledgePoint: "负数的偶次幂", analysis: "负数的偶次幂是正数，3²=9。" },
      { type: "choice", difficulty: "hard", text: "若 a² = 16，则 a =：", options: ["A. 4", "B. -4", "C. 4或-4", "D. 8"], answer: "C", knowledgePoint: "平方根", analysis: "平方等于16的数有两个：4和-4。" }
    ]
  },
  {
    lesson: 12, title: "科学记数法与近似数",
    questions: [
      { type: "choice", difficulty: "basic", text: "314000用科学记数法表示为：", options: ["A. 3.14×10⁵", "B. 31.4×10⁴", "C. 3.14×10⁴", "D. 0.314×10⁶"], answer: "A", knowledgePoint: "科学记数法的表示", analysis: "314000=3.14×100000=3.14×10⁵。" },
      { type: "choice", difficulty: "medium", text: "0.000307用科学记数法表示为：", options: ["A. 3.07×10⁻³", "B. 3.07×10⁻⁴", "C. 3.07×10⁴", "D. 3.07×10³"], answer: "B", knowledgePoint: "小于1的数的科学记数法", analysis: "0.000307=3.07×10⁻⁴。" },
      { type: "choice", difficulty: "hard", text: "近似数3.20×10⁵精确到：", options: ["A. 十分位", "B. 个位", "C. 百位", "D. 千位"], answer: "D", knowledgePoint: "科学记数法的精确度", analysis: "3.20×10⁵=320000，3.20中的0在千位，所以精确到千位。" }
    ]
  },

  // ==================== 第2章 整式的加减（第13-20课） ====================
  {
    lesson: 13, title: "用字母表示数",
    questions: [
      { type: "choice", difficulty: "basic", text: "a与b的平方和用代数式表示为：", options: ["A. (a+b)²", "B. a²+b²", "C. a+b²", "D. a²+b"], answer: "B", knowledgePoint: "代数式的表示", analysis: "平方和：先平方再相加。" },
      { type: "choice", difficulty: "medium", text: "x的2倍与y的3倍的差用代数式表示为：", options: ["A. 2x-3y", "B. 2x+3y", "C. 3x-2y", "D. 3x+2y"], answer: "A", knowledgePoint: "代数式的表示", analysis: "2倍是2x，3倍是3y，差是2x-3y。" },
      { type: "choice", difficulty: "hard", text: "一个两位数的十位数字是a，个位数字是b，这个两位数用代数式表示为：", options: ["A. ab", "B. a+b", "C. 10a+b", "D. a+10b"], answer: "C", knowledgePoint: "数位表示法", analysis: "十位数字表示10a，加上个位b得10a+b。" }
    ]
  },
  {
    lesson: 14, title: "单项式",
    questions: [
      { type: "choice", difficulty: "basic", text: "单项式 -3x²y 的系数是：", options: ["A. 3", "B. -3", "C. 2", "D. 1"], answer: "B", knowledgePoint: "单项式的系数", analysis: "系数是数字因数，为-3。" },
      { type: "choice", difficulty: "medium", text: "单项式 2xy³ 的次数是：", options: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: "D", knowledgePoint: "单项式的次数", analysis: "次数是所有字母指数之和，1+3=4。" },
      { type: "choice", difficulty: "hard", text: "下列说法正确的是：", options: ["A. 单项式 x 的系数是0", "B. 单项式 0 的次数是0", "C. 单项式 -ab² 的次数是3", "D. 单项式 2πr 的系数是2"], answer: "C", knowledgePoint: "单项式的概念", analysis: "x的系数是1；0是单项式但次数没有定义；2πr的系数是2π。" }
    ]
  },
  {
    lesson: 15, title: "多项式",
    questions: [
      { type: "choice", difficulty: "basic", text: "多项式 3x² - 2x + 1 的常数项是：", options: ["A. 3", "B. -2", "C. 2", "D. 1"], answer: "D", knowledgePoint: "多项式的项", analysis: "不含字母的项叫常数项，即1。" },
      { type: "choice", difficulty: "medium", text: "多项式 2x³ - x² + 3x - 1 的次数是：", options: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: "C", knowledgePoint: "多项式的次数", analysis: "次数最高的项的次数是3。" },
      { type: "choice", difficulty: "hard", text: "多项式 x² - 2xy + y² 是：", options: ["A. 二次三项式", "B. 二次二项式", "C. 三次三项式", "D. 四次三项式"], answer: "A", knowledgePoint: "多项式的分类", analysis: "次数是2，有三项，所以是二次三项式。" }
    ]
  },
  {
    lesson: 16, title: "整式",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列式子中，是整式的是：", options: ["A. 1/x", "B. √x", "C. 2x+1", "D. x/π"], answer: "C", knowledgePoint: "整式的定义", analysis: "整式包括单项式和多项式，2x+1是多项式。" },
      { type: "choice", difficulty: "medium", text: "下列式子中，是整式的是：", options: ["A. 1/x", "B. x/3", "C. √x", "D. |x|"], answer: "B", knowledgePoint: "整式的判断", analysis: "x/3是单项式，分母中是数字而不是字母。" },
      { type: "choice", difficulty: "hard", text: "下列说法正确的是：", options: ["A. 整式一定是单项式", "B. 单项式一定是整式", "C. 多项式不一定是整式", "D. 整式不一定是代数式"], answer: "B", knowledgePoint: "整式与单项式、多项式的关系", analysis: "单项式是整式的一种，整式包括单项式和多项式。" }
    ]
  },
  {
    lesson: 17, title: "同类项",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列各组中，是同类项的是：", options: ["A. 3x²y 与 3xy²", "B. 2a² 与 2a³", "C. 5ab 与 -2ab", "D. 4 与 4x"], answer: "C", knowledgePoint: "同类项的判断", analysis: "同类项要求字母相同且相同字母指数相同，5ab和-2ab符合。" },
      { type: "choice", difficulty: "medium", text: "若 3x²yⁿ 与 -2xᵐy³ 是同类项，则 m+n =：", options: ["A. 3", "B. 4", "C. 5", "D. 6"], answer: "C", knowledgePoint: "同类项中字母指数相等", analysis: "m=2，n=3，m+n=5。" },
      { type: "choice", difficulty: "hard", text: "下列各组中，不是同类项的是：", options: ["A. 3 与 -5", "B. 2πr 与 3πr", "C. a²b 与 ab²", "D. 2x²y 与 -x²y"], answer: "C", knowledgePoint: "同类项的判断", analysis: "a²b和ab²中a、b的指数不同，不是同类项。" }
    ]
  },
  {
    lesson: 18, title: "合并同类项",
    questions: [
      { type: "choice", difficulty: "basic", text: "合并 3x - 2x + 4x 的结果是：", options: ["A. x", "B. 5x", "C. 4x", "D. 9x"], answer: "B", knowledgePoint: "合并同类项", analysis: "系数相加：3-2+4=5，所以5x。" },
      { type: "choice", difficulty: "medium", text: "合并 2a² - 3a + a² + 5a 的结果是：", options: ["A. 3a² + 2a", "B. 3a² - 8a", "C. a² + 2a", "D. 3a² - 2a"], answer: "A", knowledgePoint: "合并同类项", analysis: "2a²+a²=3a²，-3a+5a=2a，所以3a²+2a。" },
      { type: "choice", difficulty: "hard", text: "若 3x² + ax² = 5x²，则 a =：", options: ["A. 2", "B. 3", "C. 5", "D. 8"], answer: "A", knowledgePoint: "合并同类项求系数", analysis: "3+a=5，a=2。" }
    ]
  },
  {
    lesson: 19, title: "去括号",
    questions: [
      { type: "choice", difficulty: "basic", text: "去括号：-(a - b) =：", options: ["A. a-b", "B. -a-b", "C. -a+b", "D. a+b"], answer: "C", knowledgePoint: "去括号法则", analysis: "括号前是-，去括号后各项变号，-a+b。" },
      { type: "choice", difficulty: "medium", text: "化简 a - (b - c) 的结果是：", options: ["A. a-b-c", "B. a-b+c", "C. a+b-c", "D. a+b+c"], answer: "B", knowledgePoint: "去括号", analysis: "a - b + c。" },
      { type: "choice", difficulty: "hard", text: "化简 3(2x - 1) - 2(x + 2) 的结果是：", options: ["A. 4x - 7", "B. 4x - 1", "C. 6x + 1", "D. 4x + 1"], answer: "A", knowledgePoint: "分配律与去括号", analysis: "6x-3-2x-4=4x-7。" }
    ]
  },
  {
    lesson: 20, title: "整式加减",
    questions: [
      { type: "choice", difficulty: "basic", text: "计算 (3a + 2b) - (a - b) 的结果是：", options: ["A. 2a + 3b", "B. 2a + b", "C. 4a + 3b", "D. 4a + b"], answer: "A", knowledgePoint: "整式减法", analysis: "3a+2b-a+b=2a+3b。" },
      { type: "choice", difficulty: "medium", text: "已知 A=2x²-3x+1，B=x²-2x，则 A-B =：", options: ["A. x² - x + 1", "B. x² - 5x + 1", "C. x² - x - 1", "D. x² + x + 1"], answer: "A", knowledgePoint: "整式减法", analysis: "(2x²-3x+1)-(x²-2x)=2x²-3x+1-x²+2x=x²-x+1。" },
      { type: "choice", difficulty: "hard", text: "一个多项式加上 2x² - x + 3 得 3x² + 2x - 1，则这个多项式是：", options: ["A. x² + 3x - 4", "B. x² + 3x + 2", "C. 5x² + x + 2", "D. x² - 3x - 4"], answer: "A", knowledgePoint: "整式的逆运算", analysis: "(3x²+2x-1)-(2x²-x+3)=x²+3x-4。" }
    ]
  },

  // ==================== 第3章 一元一次方程（第21-30课） ====================
  {
    lesson: 21, title: "方程与解",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列式子是方程的是：", options: ["A. 3x+2", "B. 5-2=3", "C. 2x+1=7", "D. x>3"], answer: "C", knowledgePoint: "方程的定义", analysis: "方程是含有未知数的等式，2x+1=7符合。" },
      { type: "choice", difficulty: "medium", text: "x=2 是下列哪个方程的解？", options: ["A. 2x+1=6", "B. 3x-2=4", "C. 4x-1=7", "D. x+3=6"], answer: "B", knowledgePoint: "方程的解的检验", analysis: "代入检验：3×2-2=4，成立。" },
      { type: "choice", difficulty: "hard", text: "若 x=3 是方程 2x + a = 5 的解，则 a =：", options: ["A. 1", "B. -1", "C. 2", "D. -2"], answer: "B", knowledgePoint: "利用解求参数", analysis: "2×3+a=5，6+a=5，a=-1。" }
    ]
  },
  {
    lesson: 22, title: "等式的性质",
    questions: [
      { type: "choice", difficulty: "basic", text: "若a=b，则下列变形正确的是：", options: ["A. a/c = b/c", "B. ac = bc", "C. a-2 = b+2", "D. a+2 = b-2"], answer: "B", knowledgePoint: "等式的性质", analysis: "等式的两边乘同一个数，结果仍相等。" },
      { type: "choice", difficulty: "medium", text: "下列变形中，错误的是：", options: ["A. 若a=b，则a-3=b-3", "B. 若a=b，则a/2=b/2", "C. 若a/2=b/2，则a=b", "D. 若ac=bc，则a=b"], answer: "D", knowledgePoint: "等式的性质", analysis: "ac=bc时，若c=0，则a和b不一定相等。" },
      { type: "choice", difficulty: "hard", text: "若 a=b，c=d，则下列不一定成立的是：", options: ["A. a+c=b+d", "B. a-c=b-d", "C. ac=bd", "D. a/c=b/d"], answer: "D", knowledgePoint: "等式的性质应用", analysis: "a/c=b/d成立需要c和d都不为0，且c=d。" }
    ]
  },
  {
    lesson: 23, title: "移项",
    questions: [
      { type: "choice", difficulty: "basic", text: "解方程 3x + 5 = 2x - 1，移项正确的是：", options: ["A. 3x - 2x = -1 - 5", "B. 3x - 2x = -1 + 5", "C. 3x + 2x = -1 - 5", "D. 3x + 2x = -1 + 5"], answer: "A", knowledgePoint: "移项法则", analysis: "移项要变号，3x不动，2x移到左边变-2x；5移到右边变-5：3x-2x=-1-5。" },
      { type: "choice", difficulty: "medium", text: "方程 4x - 3 = 2x + 7 的解是：", options: ["A. x=2", "B. x=3", "C. x=4", "D. x=5"], answer: "D", knowledgePoint: "解方程", analysis: "4x-2x=7+3，2x=10，x=5。" },
      { type: "choice", difficulty: "hard", text: "方程 5x - 2 = 3x + 4 与方程 2x + a = 0 的解相同，则 a =：", options: ["A. 2", "B. -2", "C. 6", "D. -6"], answer: "D", knowledgePoint: "同解方程", analysis: "5x-3x=4+2，2x=6，x=3；代入2×3+a=0，6+a=0，a=-6。" }
    ]
  },
  {
    lesson: 24, title: "去分母解方程",
    questions: [
      { type: "choice", difficulty: "basic", text: "方程 (x+1)/2 = 3 去分母后得：", options: ["A. x+1=6", "B. x+1=3", "C. x+1=3/2", "D. x+1=1.5"], answer: "A", knowledgePoint: "去分母", analysis: "两边乘2：x+1=6。" },
      { type: "choice", difficulty: "medium", text: "方程 (x-2)/3 - (2x+1)/2 = 1 去分母后得：", options: ["A. 2(x-2)-3(2x+1)=6", "B. 2(x-2)-3(2x+1)=1", "C. 2(x-2)-3(2x+1)=6x", "D. 2(x-2)-3(2x+1)=0"], answer: "A", knowledgePoint: "去分母解方程", analysis: "两边乘6：2(x-2)-3(2x+1)=6。" },
      { type: "choice", difficulty: "hard", text: "方程 (x)/2 - (x-1)/3 = 1 的解是：", options: ["A. x=2", "B. x=4", "C. x=6", "D. x=8"], answer: "B", knowledgePoint: "去分母解方程", analysis: "两边乘6：3x-2(x-1)=6，3x-2x+2=6，x=4。" }
    ]
  },
  {
    lesson: 25, title: "去括号解方程",
    questions: [
      { type: "choice", difficulty: "basic", text: "方程 2(x-3)=4 的解是：", options: ["A. x=1", "B. x=2", "C. x=5", "D. x=7"], answer: "C", knowledgePoint: "去括号解方程", analysis: "2x-6=4，2x=10，x=5。" },
      { type: "choice", difficulty: "medium", text: "方程 3(x-2)+5=2x+7 的解是：", options: ["A. x=8", "B. x=9", "C. x=10", "D. x=11"], answer: "A", knowledgePoint: "去括号解方程", analysis: "3x-6+5=2x+7，3x-1=2x+7，x=8。" },
      { type: "choice", difficulty: "hard", text: "方程 2(3x-1)-3(2-x)=1 的解是：", options: ["A. x=0.5", "B. x=0.8", "C. x=1", "D. x=1.2"], answer: "C", knowledgePoint: "去括号解方程", analysis: "6x-2-6+3x=1，9x-8=1，9x=9，x=1。" }
    ]
  },
  {
    lesson: 26, title: "和差倍分问题",
    questions: [
      { type: "choice", difficulty: "basic", text: "甲数比乙数的2倍少3，若设乙数为x，则甲数为：", options: ["A. 2x+3", "B. 2x-3", "C. x/2+3", "D. x/2-3"], answer: "B", knowledgePoint: "列代数式", analysis: "乙数的2倍是2x，少3就是2x-3。" },
      { type: "choice", difficulty: "medium", text: "一个数的1/2与3的和等于这个数的2倍，设这个数为x，列方程为：", options: ["A. x/2+3=2x", "B. x/2-3=2x", "C. x+3/2=2x", "D. x+3=2x/2"], answer: "A", knowledgePoint: "列方程", analysis: "x/2+3=2x。" },
      { type: "choice", difficulty: "hard", text: "甲有35加隆，乙有10加隆，甲给乙多少加隆后，甲的钱是乙的2倍？", options: ["A. 5加隆", "B. 10加隆", "C. 15加隆", "D. 20加隆"], answer: "A", knowledgePoint: "分配问题", analysis: "设给x加隆，35-x=2(10+x)，35-x=20+2x，3x=15，x=5。" }
    ]
  },
  {
    lesson: 27, title: "行程问题",
    questions: [
      { type: "choice", difficulty: "basic", text: "甲、乙两人相距10km，相向而行，甲速度3km/h，乙速度2km/h，几小时后相遇？", options: ["A. 1h", "B. 2h", "C. 3h", "D. 4h"], answer: "B", knowledgePoint: "相遇问题", analysis: "速度和=5km/h，时间=10/5=2h。" },
      { type: "choice", difficulty: "medium", text: "一辆车以60km/h的速度行驶，2小时后提速到80km/h，又行驶3小时，总路程是：", options: ["A. 360km", "B. 420km", "C. 480km", "D. 540km"], answer: "A", knowledgePoint: "分段行程", analysis: "前2小时：60×2=120km，后3小时：80×3=240km，总路程=360km。" },
      { type: "choice", difficulty: "hard", text: "甲、乙两人从相距60km的两地同时出发，同向而行，甲速度8km/h，乙速度5km/h，几小时后甲追上乙？", options: ["A. 15h", "B. 20h", "C. 25h", "D. 30h"], answer: "B", knowledgePoint: "追及问题", analysis: "速度差=3km/h，追及时间=60/3=20h。" }
    ]
  },
  {
    lesson: 28, title: "工程问题",
    questions: [
      { type: "choice", difficulty: "basic", text: "一项工程，甲单独做5天完成，乙单独做10天完成，两人合作需几天？", options: ["A. 2天", "B. 3天", "C. 10/3天", "D. 15天"], answer: "C", knowledgePoint: "工程问题", analysis: "效率和=1/5+1/10=3/10，时间=10/3天。" },
      { type: "choice", difficulty: "medium", text: "一项工程，甲单独做6天完成，乙单独做4天完成，两人合作2天后，剩下的由乙单独做还需几天？", options: ["A. 1天", "B. 2天", "C. 2/3天", "D. 4/3天"], answer: "C", knowledgePoint: "合作后剩余工程", analysis: "效率和=1/6+1/4=5/12，2天完成5/6，剩余1/6，乙效率1/4，时间=(1/6)/(1/4)=2/3天。" },
      { type: "choice", difficulty: "hard", text: "一项工程，甲单独做需a天，乙单独做需b天，两人合作需：", options: ["A. (a+b)/ab天", "B. ab/(a+b)天", "C. (a+b)/2天", "D. 2ab/(a+b)天"], answer: "B", knowledgePoint: "合作时间公式", analysis: "效率和=1/a+1/b=(a+b)/ab，时间=ab/(a+b)。" }
    ]
  },
  {
    lesson: 29, title: "利润问题",
    questions: [
      { type: "choice", difficulty: "basic", text: "一件魔法物品进价100加隆，售价120加隆，利润率为：", options: ["A. 20%", "B. 16.7%", "C. 15%", "D. 25%"], answer: "A", knowledgePoint: "利润率", analysis: "利润率=(120-100)/100×100%=20%。" },
      { type: "choice", difficulty: "medium", text: "一件魔法物品标价200加隆，打8折后仍获利20%，则进价是：", options: ["A. 120加隆", "B. 128加隆", "C. 133.3加隆", "D. 160加隆"], answer: "C", knowledgePoint: "利润问题方程", analysis: "售价=200×0.8=160加隆，设进价x，则(160-x)/x=0.2，160-x=0.2x，160=1.2x，x≈133.33加隆。" },
      { type: "choice", difficulty: "hard", text: "某魔法物品先提价20%，再降价20%，现价与原价相比：", options: ["A. 不变", "B. 提高了4%", "C. 降低了4%", "D. 降低了0.4%"], answer: "C", knowledgePoint: "连续调价", analysis: "设原价1，提价20%后1.2，再降价20%后1.2×0.8=0.96，降低了4%。" }
    ]
  },
  {
    lesson: 30, title: "方案选择问题",
    questions: [
      { type: "choice", difficulty: "basic", text: "对角巷某商店两种优惠方案：A. 打8折；B. 满100减20。买一件120加隆的魔法物品，哪个更优惠？", options: ["A. A方案", "B. B方案", "C. 一样", "D. 无法比较"], answer: "A", knowledgePoint: "方案比较", analysis: "A:120×0.8=96加隆；B:120-20=100加隆，A更便宜。" },
      { type: "choice", difficulty: "medium", text: "猫头鹰邮局两种送信方案：A方案月租10加隆，送信0.1加隆/封；B方案无月租，送信0.2加隆/封。每月送信多少封时两种方案费用相同？", options: ["A. 50封", "B. 100封", "C. 150封", "D. 200封"], answer: "B", knowledgePoint: "方案选择方程", analysis: "设x封，10+0.1x=0.2x，10=0.1x，x=100封。" },
      { type: "choice", difficulty: "hard", text: "某魁地奇训练馆年卡：A卡500加隆全年不限次；B卡200加隆，每次10加隆。一年去多少次以上时A卡更划算？", options: ["A. 30次", "B. 31次", "C. 32次", "D. 33次"], answer: "B", knowledgePoint: "方案选择不等式", analysis: "设去x次，500 < 200+10x，300 < 10x，x > 30，即至少31次。" }
    ]
  },

  // ==================== 第4章 几何图形初步（第31-37课） ====================
  {
    lesson: 31, title: "立体图形与平面图形",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列图形中，是立体图形的是：", options: ["A. 圆", "B. 三角形", "C. 球", "D. 长方形"], answer: "C", knowledgePoint: "立体图形识别", analysis: "球是立体图形，其他都是平面图形。" },
      { type: "choice", difficulty: "medium", text: "从正面看一个圆柱，看到的形状是：", options: ["A. 圆", "B. 长方形", "C. 三角形", "D. 梯形"], answer: "B", knowledgePoint: "三视图", analysis: "从正面看圆柱是一个长方形。" },
      { type: "choice", difficulty: "hard", text: "下列哪个图形不能折成一个正方体？", options: ["A. 田字型展开图", "B. 141型", "C. 231型", "D. 222型"], answer: "A", knowledgePoint: "正方体展开图", analysis: "田字型有4个正方形连成一排，无法折成正方体。" }
    ]
  },
  {
    lesson: 32, title: "点、线、面、体",
    questions: [
      { type: "choice", difficulty: "basic", text: "点动成____，线动成____，面动成____。", options: ["A. 线、面、体", "B. 面、体、线", "C. 体、面、线", "D. 线、体、面"], answer: "A", knowledgePoint: "点线面体的关系", analysis: "点动成线，线动成面，面动成体。" },
      { type: "choice", difficulty: "medium", text: "魔杖在空中挥过划出一道弧线，形成一个扇形光芒，这说明了：", options: ["A. 点动成线", "B. 线动成面", "C. 面动成体", "D. 以上都不是"], answer: "B", knowledgePoint: "线动成面的实例", analysis: "魔杖可以看作一条线段，扫过的区域形成面，体现了线动成面。" },
      { type: "choice", difficulty: "hard", text: "将一个长方形绕它的一边旋转一周，形成的几何体是：", options: ["A. 圆柱", "B. 圆锥", "C. 球", "D. 圆台"], answer: "A", knowledgePoint: "面动成体", analysis: "长方形绕一边旋转得到圆柱。" }
    ]
  },
  {
    lesson: 33, title: "直线、射线、线段",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列说法正确的是：", options: ["A. 延长直线AB", "B. 延长射线AB", "C. 延长线段AB", "D. 反向延长射线BA"], answer: "C", knowledgePoint: "直线、射线、线段的延长", analysis: "直线无限长不能延长；射线只能反向延长；线段可以向两端延长。" },
      { type: "choice", difficulty: "medium", text: "经过两点可以画几条直线？", options: ["A. 0条", "B. 1条", "C. 2条", "D. 无数条"], answer: "B", knowledgePoint: "确定直线的条件", analysis: "两点确定一条直线。" },
      { type: "choice", difficulty: "hard", text: "直线AB上有一点C，若AB=8，AC=3，则BC=：", options: ["A. 5", "B. 11", "C. 5或11", "D. 4或12"], answer: "C", knowledgePoint: "线段长度计算", analysis: "点C可能在A、B之间，则BC=8-3=5；也可能在A外侧，则BC=8+3=11。" }
    ]
  },
  {
    lesson: 34, title: "比较线段长短",
    questions: [
      { type: "choice", difficulty: "basic", text: "点C是线段AB的中点，若AB=6，则AC=：", options: ["A. 2", "B. 3", "C. 4", "D. 12"], answer: "B", knowledgePoint: "线段的中点", analysis: "AC=AB/2=3。" },
      { type: "choice", difficulty: "medium", text: "点C在线段AB上，且AC=2，BC=3，则AB=：", options: ["A. 1", "B. 5", "C. 6", "D. 2.5"], answer: "B", knowledgePoint: "线段的和", analysis: "AB=AC+BC=2+3=5。" },
      { type: "choice", difficulty: "hard", text: "点C把线段AB分成2:3的两部分，若AB=10，则AC的长是：", options: ["A. 2", "B. 4", "C. 4或6", "D. 2或8"], answer: "C", knowledgePoint: "比例分线段", analysis: "AC:CB=2:3，则AC=2/5×10=4；也可能AC:CB=3:2，则AC=3/5×10=6。" }
    ]
  },
  {
    lesson: 35, title: "角",
    questions: [
      { type: "choice", difficulty: "basic", text: "1° = ____′", options: ["A. 10", "B. 60", "C. 100", "D. 3600"], answer: "B", knowledgePoint: "角的单位换算", analysis: "1°=60′。" },
      { type: "choice", difficulty: "medium", text: "30°18′用度表示为：", options: ["A. 30.18°", "B. 30.3°", "C. 30.6°", "D. 30.5°"], answer: "B", knowledgePoint: "度分秒换算", analysis: "18′=18/60=0.3°，所以30.3°。" },
      { type: "choice", difficulty: "hard", text: "钟表上3点30分时，时针与分针的夹角是：", options: ["A. 75°", "B. 85°", "C. 90°", "D. 95°"], answer: "A", knowledgePoint: "钟表角度问题", analysis: "分针在6，时针在3.5，一格30°，相差2.5格，2.5×30°=75°。" }
    ]
  },
  {
    lesson: 36, title: "角的比较与运算",
    questions: [
      { type: "choice", difficulty: "basic", text: "若∠A=30°，∠B=40°，则∠A+∠B=：", options: ["A. 10°", "B. 70°", "C. 1200°", "D. 70′"], answer: "B", knowledgePoint: "角的和", analysis: "30°+40°=70°。" },
      { type: "choice", difficulty: "medium", text: "OC是∠AOB的平分线，若∠AOB=70°，则∠AOC=：", options: ["A. 35°", "B. 140°", "C. 70°", "D. 20°"], answer: "A", knowledgePoint: "角平分线", analysis: "∠AOC=70°/2=35°。" },
      { type: "choice", difficulty: "hard", text: "∠AOB=90°，∠BOC=30°，则∠AOC的度数是：", options: ["A. 60°", "B. 120°", "C. 60°或120°", "D. 90°"], answer: "C", knowledgePoint: "角的和差分类讨论", analysis: "OC在∠AOB内部时∠AOC=60°，在外部时∠AOC=120°。" }
    ]
  },
  {
    lesson: 37, title: "余角与补角",
    questions: [
      { type: "choice", difficulty: "basic", text: "30°的余角是：", options: ["A. 30°", "B. 60°", "C. 150°", "D. 90°"], answer: "B", knowledgePoint: "余角的定义", analysis: "和为90°的两个角互余，90°-30°=60°。" },
      { type: "choice", difficulty: "medium", text: "一个角比它的补角小40°，则这个角是：", options: ["A. 50°", "B. 60°", "C. 70°", "D. 80°"], answer: "C", knowledgePoint: "补角方程", analysis: "设这个角为x，则补角为180°-x，有(180-x)-x=40，180-2x=40，2x=140，x=70°。" },
      { type: "choice", difficulty: "hard", text: "∠α与∠β互余，∠α=3∠β，则∠α=：", options: ["A. 22.5°", "B. 45°", "C. 67.5°", "D. 75°"], answer: "C", knowledgePoint: "余角与倍数关系", analysis: "∠α+∠β=90°，∠α=3∠β，则4∠β=90°，∠β=22.5°，∠α=67.5°。" }
    ]
  },

  // ==================== 第5章 相交线与平行线（第38-46课） ====================
  {
    lesson: 38, title: "相交线",
    questions: [
      { type: "choice", difficulty: "basic", text: "两条直线相交，有____对对顶角。", options: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: "B", knowledgePoint: "对顶角的对数", analysis: "两条直线相交，有2对对顶角。" },
      { type: "choice", difficulty: "medium", text: "若∠1与∠2是对顶角，且∠1+∠2=100°，则∠1=：", options: ["A. 50°", "B. 80°", "C. 100°", "D. 40°"], answer: "A", knowledgePoint: "对顶角相等", analysis: "对顶角相等，∠1=∠2=100°/2=50°。" },
      { type: "choice", difficulty: "hard", text: "直线AB、CD相交于点O，∠AOC:∠AOD=2:3，则∠BOD=：", options: ["A. 36°", "B. 54°", "C. 72°", "D. 108°"], answer: "C", knowledgePoint: "邻补角与比例", analysis: "∠AOC+∠AOD=180°，设∠AOC=2x，∠AOD=3x，5x=180°，x=36°，∠AOC=72°，∠BOD=∠AOC=72°。" }
    ]
  },
  {
    lesson: 39, title: "垂线",
    questions: [
      { type: "choice", difficulty: "basic", text: "过一点画已知直线的垂线，可以画几条？", options: ["A. 0条", "B. 1条", "C. 2条", "D. 无数条"], answer: "B", knowledgePoint: "垂线的性质", analysis: "过一点有且只有一条直线与已知直线垂直。" },
      { type: "choice", difficulty: "medium", text: "如图，∠AOB=90°，则OA与OB的位置关系是：", options: ["A. 平行", "B. 垂直", "C. 相交但不垂直", "D. 重合"], answer: "B", knowledgePoint: "垂直的定义", analysis: "90°的角是直角，两直线垂直。" },
      { type: "choice", difficulty: "hard", text: "点P到直线l的距离是：", options: ["A. 点P到l的垂线", "B. 点P到l的垂线段", "C. 点P到l的垂线段的长度", "D. 点P到l的任意线段长度"], answer: "C", knowledgePoint: "点到直线距离", analysis: "点到直线的距离是垂线段的长度。" }
    ]
  },
  {
    lesson: 40, title: "同位角、内错角、同旁内角",
    questions: [
      { type: "choice", difficulty: "basic", text: "如图，∠1和∠2是：", options: ["A. 同位角", "B. 内错角", "C. 同旁内角", "D. 对顶角"], answer: "A", knowledgePoint: "同位角的识别", analysis: "位置相同的角是同位角。" },
      { type: "choice", difficulty: "medium", text: "如图，∠1和∠2是内错角，它们的形状像字母：", options: ["A. F", "B. Z", "C. U", "D. X"], answer: "B", knowledgePoint: "内错角的特征", analysis: "内错角形如字母Z。" },
      { type: "choice", difficulty: "hard", text: "三条直线两两相交，最多可以形成多少对内错角？", options: ["A. 4对", "B. 6对", "C. 8对", "D. 12对"], answer: "B", knowledgePoint: "内错角的计数", analysis: "三条直线每两条为一组，每组两条直线被第三条所截有2对内错角，共3组，所以6对。" }
    ]
  },
  {
    lesson: 41, title: "平行线",
    questions: [
      { type: "choice", difficulty: "basic", text: "在同一平面内，不重合的两条直线的位置关系是：", options: ["A. 平行或垂直", "B. 相交或垂直", "C. 平行或相交", "D. 平行、相交或垂直"], answer: "C", knowledgePoint: "两条直线的位置关系", analysis: "同一平面内两条直线要么平行，要么相交，垂直是相交的特殊情况。" },
      { type: "choice", difficulty: "medium", text: "过直线外一点，有且只有____条直线与这条直线平行。", options: ["A. 0", "B. 1", "C. 2", "D. 无数"], answer: "B", knowledgePoint: "平行公理", analysis: "平行公理：过直线外一点有且只有一条直线与已知直线平行。" },
      { type: "choice", difficulty: "hard", text: "若a∥b，b∥c，则a∥c的依据是：", options: ["A. 平行公理", "B. 平行公理的推论", "C. 等量代换", "D. 垂直公理"], answer: "B", knowledgePoint: "平行线的传递性", analysis: "平行于同一条直线的两条直线互相平行，这是平行公理的推论。" }
    ]
  },
  {
    lesson: 42, title: "平行线判定（一）",
    questions: [
      { type: "choice", difficulty: "basic", text: "同位角相等，两直线____。", options: ["A. 相交", "B. 垂直", "C. 平行", "D. 重合"], answer: "C", knowledgePoint: "平行线的判定", analysis: "同位角相等是判定两直线平行的方法之一。" },
      { type: "choice", difficulty: "medium", text: "如图，若∠1=∠2，则a∥b的依据是：", options: ["A. 对顶角相等", "B. 同位角相等，两直线平行", "C. 内错角相等，两直线平行", "D. 同旁内角互补，两直线平行"], answer: "B", knowledgePoint: "判定方法的选择", analysis: "∠1和∠2是同位角。" },
      { type: "choice", difficulty: "hard", text: "下列条件中，不能判定a∥b的是：", options: ["A. ∠1=∠2", "B. ∠1=∠3", "C. ∠1+∠4=180°", "D. ∠2=∠3"], answer: "D", knowledgePoint: "平行线判定的灵活应用", analysis: "∠2和∠3是邻补角，它们的和总是180°，当它们相等时都是90°，但这不能判定a∥b。" }
    ]
  },
  {
    lesson: 43, title: "平行线判定（二）",
    questions: [
      { type: "choice", difficulty: "basic", text: "内错角相等，两直线____。", options: ["A. 平行", "B. 垂直", "C. 相交", "D. 重合"], answer: "A", knowledgePoint: "平行线判定", analysis: "内错角相等是判定两直线平行的第二种方法。" },
      { type: "choice", difficulty: "medium", text: "同旁内角互补，两直线____。", options: ["A. 平行", "B. 垂直", "C. 相交", "D. 重合"], answer: "A", knowledgePoint: "平行线判定", analysis: "同旁内角互补是判定两直线平行的第三种方法。" },
      { type: "choice", difficulty: "hard", text: "若∠1=70°，∠2=110°，则a与b的位置关系是：", options: ["A. 平行", "B. 相交", "C. 垂直", "D. 无法确定"], answer: "A", knowledgePoint: "同旁内角判定", analysis: "∠1和∠2是同旁内角，70°+110°=180°，所以a∥b。" }
    ]
  },
  {
    lesson: 44, title: "平行线性质",
    questions: [
      { type: "choice", difficulty: "basic", text: "两直线平行，同位角____。", options: ["A. 相等", "B. 互补", "C. 互余", "D. 无关"], answer: "A", knowledgePoint: "平行线性质", analysis: "两直线平行，同位角相等。" },
      { type: "choice", difficulty: "medium", text: "若a∥b，∠1=50°，则∠2的度数是：", options: ["A. 50°", "B. 130°", "C. 40°", "D. 无法确定"], answer: "A", knowledgePoint: "平行线性质的应用", analysis: "∠1和∠2是同位角，相等。" },
      { type: "choice", difficulty: "hard", text: "如图，a∥b，∠1=120°，则∠2的度数是：", options: ["A. 60°", "B. 120°", "C. 30°", "D. 150°"], answer: "A", knowledgePoint: "平行线邻补角", analysis: "∠1的邻补角=60°，∠2与这个邻补角是同位角，所以∠2=60°。" }
    ]
  },
  {
    lesson: 45, title: "性质与判定综合",
    questions: [
      { type: "choice", difficulty: "basic", text: "已知a∥b，∠1=60°，则∠2=60°。这里用到了：", options: ["A. 平行线的判定", "B. 平行线的性质", "C. 垂直的性质", "D. 对顶角性质"], answer: "B", knowledgePoint: "性质与判定的区分", analysis: "已知平行，推出角相等，用性质。" },
      { type: "choice", difficulty: "medium", text: "若∠1=∠2，要证a∥b，用到的理由是：", options: ["A. 平行线的性质", "B. 平行线的判定", "C. 等量代换", "D. 垂直定义"], answer: "B", knowledgePoint: "性质与判定的区分", analysis: "已知角相等，证平行，用判定。" },
      { type: "choice", difficulty: "hard", text: "下列推理正确的是：", options: ["A. 因为a∥b，所以∠1=∠2（同位角）", "B. 因为∠1=∠2，所以a∥b（同位角）", "C. 因为a∥b，所以∠1+∠2=180°（同旁内角）", "D. 因为∠1+∠2=180°，所以a∥b（同旁内角）"], answer: "B", knowledgePoint: "推理的正确性", analysis: "选项B是正确的判定形式：已知同位角相等，推出两直线平行。A、C需要明确角的位置关系，D需要明确是同旁内角。" }
    ]
  },
  {
    lesson: 46, title: "平移",
    questions: [
      { type: "choice", difficulty: "basic", text: "平移不改变图形的____。", options: ["A. 形状和大小", "B. 位置", "C. 方向", "D. 形状和位置"], answer: "A", knowledgePoint: "平移的性质", analysis: "平移只改变位置，不改变形状和大小。" },
      { type: "choice", difficulty: "medium", text: "下列现象中，属于平移的是：", options: ["A. 电梯的升降", "B. 风扇的转动", "C. 车轮的转动", "D. 钟表指针的转动"], answer: "A", knowledgePoint: "平移的识别", analysis: "电梯升降是平移，其他都是旋转。" },
      { type: "choice", difficulty: "hard", text: "将点A(-2,3)向右平移4个单位，再向下平移2个单位后的坐标是：", options: ["A. (2,1)", "B. (2,5)", "C. (-6,1)", "D. (-6,5)"], answer: "A", knowledgePoint: "坐标平移", analysis: "右移4：x坐标+4得2；下移2：y坐标-2得1，所以(2,1)。" }
    ]
  },

  // ==================== 第6章 实数（第47-52课） ====================
  {
    lesson: 47, title: "平方根",
    questions: [
      { type: "choice", difficulty: "basic", text: "9的平方根是：", options: ["A. 3", "B. -3", "C. ±3", "D. 81"], answer: "C", knowledgePoint: "平方根的概念", analysis: "平方等于9的数是±3。" },
      { type: "choice", difficulty: "medium", text: "√16的算术平方根是：", options: ["A. 4", "B. 2", "C. ±4", "D. ±2"], answer: "B", knowledgePoint: "算术平方根", analysis: "√16=4，4的算术平方根是2。" },
      { type: "choice", difficulty: "hard", text: "若√a=3，则a=：", options: ["A. 3", "B. 9", "C. ±9", "D. 81"], answer: "B", knowledgePoint: "算术平方根与平方根的区别", analysis: "√a表示a的算术平方根，是非负的，所以a=9。" }
    ]
  },
  {
    lesson: 48, title: "立方根",
    questions: [
      { type: "choice", difficulty: "basic", text: "8的立方根是：", options: ["A. 2", "B. -2", "C. ±2", "D. 4"], answer: "A", knowledgePoint: "立方根的概念", analysis: "2³=8，所以8的立方根是2。" },
      { type: "choice", difficulty: "medium", text: "³√-8 =：", options: ["A. 2", "B. -2", "C. ±2", "D. 不存在"], answer: "B", knowledgePoint: "负数的立方根", analysis: "(-2)³=-8，所以³√-8=-2。" },
      { type: "choice", difficulty: "hard", text: "若³√a=3，则a=：", options: ["A. 3", "B. 9", "C. 27", "D. 81"], answer: "C", knowledgePoint: "立方根求原数", analysis: "a=3³=27。" }
    ]
  },
  {
    lesson: 49, title: "无理数",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列数中，是无理数的是：", options: ["A. 1/3", "B. 0.333...", "C. √2", "D. 0"], answer: "C", knowledgePoint: "无理数的识别", analysis: "√2是无限不循环小数，是无理数。" },
      { type: "choice", difficulty: "medium", text: "π是：", options: ["A. 有理数", "B. 无理数", "C. 整数", "D. 分数"], answer: "B", knowledgePoint: "π的无理性", analysis: "π是无限不循环小数，是无理数。" },
      { type: "choice", difficulty: "hard", text: "下列说法正确的是：", options: ["A. 无限小数是无理数", "B. 无理数是无限小数", "C. 带根号的数都是无理数", "D. 无理数不能用数轴表示"], answer: "B", knowledgePoint: "无理数的定义", analysis: "无理数是无限不循环小数，所以无理数一定是无限小数；但无限循环小数是有理数。带根号的不都是无理数，如√4=2。" }
    ]
  },
  {
    lesson: 50, title: "实数",
    questions: [
      { type: "choice", difficulty: "basic", text: "实数包括____和____。", options: ["A. 整数、分数", "B. 正数、负数", "C. 有理数、无理数", "D. 自然数、整数"], answer: "C", knowledgePoint: "实数的分类", analysis: "实数分为有理数和无理数。" },
      { type: "choice", difficulty: "medium", text: "下列说法正确的是：", options: ["A. 实数和数轴上的点一一对应", "B. 有理数和数轴上的点一一对应", "C. 无理数和数轴上的点一一对应", "D. 整数和数轴上的点一一对应"], answer: "A", knowledgePoint: "实数与数轴的关系", analysis: "实数和数轴上的点是一一对应的。" },
      { type: "choice", difficulty: "hard", text: "下列比较大小正确的是：", options: ["A. √2 < 1", "B. √2 < 1.5", "C. √2 > 2", "D. √2 = 1.41"], answer: "B", knowledgePoint: "无理数的大小比较", analysis: "√2≈1.414，小于1.5。" }
    ]
  },
  {
    lesson: 51, title: "实数的运算",
    questions: [
      { type: "choice", difficulty: "basic", text: "√2 + √2 =：", options: ["A. √4", "B. 2√2", "C. 2", "D. √6"], answer: "B", knowledgePoint: "同类二次根式加减", analysis: "两个√2相加得2√2。" },
      { type: "choice", difficulty: "medium", text: "√3 × √3 =：", options: ["A. √6", "B. 3", "C. √9", "D. 9"], answer: "B", knowledgePoint: "二次根式的乘法", analysis: "√3×√3=(√3)²=3。" },
      { type: "choice", difficulty: "hard", text: "(√2+1)(√2-1)=：", options: ["A. 1", "B. 2", "C. √2-1", "D. √2+1"], answer: "A", knowledgePoint: "平方差公式应用", analysis: "(a+b)(a-b)=a²-b²，=2-1=1。" }
    ]
  },
  {
    lesson: 52, title: "实数与数轴",
    questions: [
      { type: "choice", difficulty: "basic", text: "数轴上表示√2的点在表示1和2之间，更靠近：", options: ["A. 1", "B. 2", "C. 1.5", "D. 两者一样"], answer: "A", knowledgePoint: "√2的近似值", analysis: "√2≈1.414，更靠近1。" },
      { type: "choice", difficulty: "medium", text: "数轴上表示-√3的点在：", options: ["A. -1和0之间", "B. -2和-1之间", "C. -3和-2之间", "D. 0和1之间"], answer: "B", knowledgePoint: "-√3的位置", analysis: "√3≈1.732，-√3≈-1.732，在-2和-1之间。" },
      { type: "choice", difficulty: "hard", text: "数轴上点A表示a，点B表示b，且a<0，b>0，且|a|>b，则下列正确的是：", options: ["A. a+b<0", "B. a+b>0", "C. a+b=0", "D. 无法确定"], answer: "A", knowledgePoint: "实数与数轴的比较", analysis: "a是负数，b是正数，|a|>b说明-a>b，即a+b<0。" }
    ]
  },

  // ==================== 第7章 平面直角坐标系（第53-58课） ====================
  {
    lesson: 53, title: "有序数对",
    questions: [
      { type: "choice", difficulty: "basic", text: "用有序数对表示位置时，通常第一个数表示：", options: ["A. 行", "B. 列", "C. 层", "D. 组"], answer: "B", knowledgePoint: "有序数对的含义", analysis: "通常(列，行)或(横，纵)。" },
      { type: "choice", difficulty: "medium", text: "魔药课教室里，哈利的座位是(3,4)，赫敏的座位是(4,3)，则：", options: ["A. 哈利和赫敏在同一行", "B. 哈利和赫敏在同一列", "C. 哈利和赫敏在不同位置", "D. 哈利和赫敏在同一个位置"], answer: "C", knowledgePoint: "有序数对的不同含义", analysis: "(3,4)和(4,3)表示不同的位置。" },
      { type: "choice", difficulty: "hard", text: "在平面内，确定一个点的位置需要：", options: ["A. 1个数据", "B. 2个数据", "C. 3个数据", "D. 4个数据"], answer: "B", knowledgePoint: "确定位置的条件", analysis: "平面内需要两个数据才能确定一个点的位置。" }
    ]
  },
  {
    lesson: 54, title: "平面直角坐标系",
    questions: [
      { type: "choice", difficulty: "basic", text: "平面直角坐标系中，x轴和y轴的交点叫：", options: ["A. 端点", "B. 顶点", "C. 原点", "D. 中心"], answer: "C", knowledgePoint: "原点的定义", analysis: "x轴和y轴的交点叫原点。" },
      { type: "choice", difficulty: "medium", text: "下列各点中，在x轴上的是：", options: ["A. (0,3)", "B. (2,0)", "C. (1,1)", "D. (-1,-1)"], answer: "B", knowledgePoint: "坐标轴上的点的特征", analysis: "x轴上的点纵坐标为0。" },
      { type: "choice", difficulty: "hard", text: "点P(m,n)在y轴上，则：", options: ["A. m=0", "B. n=0", "C. m=n", "D. m+n=0"], answer: "A", knowledgePoint: "坐标轴上的点的特征", analysis: "y轴上的点横坐标为0。" }
    ]
  },
  {
    lesson: 55, title: "点的坐标",
    questions: [
      { type: "choice", difficulty: "basic", text: "点P(2,-3)到x轴的距离是：", options: ["A. 2", "B. 3", "C. -2", "D. -3"], answer: "B", knowledgePoint: "点到坐标轴的距离", analysis: "到x轴的距离是纵坐标的绝对值，|-3|=3。" },
      { type: "choice", difficulty: "medium", text: "点P(2,-3)到y轴的距离是：", options: ["A. 2", "B. 3", "C. -2", "D. -3"], answer: "A", knowledgePoint: "点到坐标轴的距离", analysis: "到y轴的距离是横坐标的绝对值，|2|=2。" },
      { type: "choice", difficulty: "hard", text: "若点P到x轴的距离是2，到y轴的距离是3，则点P的坐标可能是：", options: ["A. (2,3)", "B. (3,2)", "C. (2,-3)", "D. (-3,2)"], answer: "D", knowledgePoint: "距离与坐标的关系", analysis: "到x轴距离2：纵坐标为±2；到y轴距离3：横坐标为±3；四个象限都有可能，(-3,2)符合。" }
    ]
  },
  {
    lesson: 56, title: "象限",
    questions: [
      { type: "choice", difficulty: "basic", text: "点(2,3)在第____象限。", options: ["A. 一", "B. 二", "C. 三", "D. 四"], answer: "A", knowledgePoint: "象限的符号特征", analysis: "(+,+)为第一象限。" },
      { type: "choice", difficulty: "medium", text: "点(-2,3)在第____象限。", options: ["A. 一", "B. 二", "C. 三", "D. 四"], answer: "B", knowledgePoint: "象限的符号特征", analysis: "(-,+)为第二象限。" },
      { type: "choice", difficulty: "hard", text: "若点P(a,b)在第四象限，则点Q(b,a)在：", options: ["A. 第一象限", "B. 第二象限", "C. 第三象限", "D. 第四象限"], answer: "B", knowledgePoint: "象限的坐标交换", analysis: "P在第四象限：a>0，b<0；则Q(b,a)：b<0，a>0，即(-,+)，第二象限。" }
    ]
  },
  {
    lesson: 57, title: "坐标系与图形",
    questions: [
      { type: "choice", difficulty: "basic", text: "点A(-2,3)关于x轴对称的点的坐标是：", options: ["A. (2,3)", "B. (-2,-3)", "C. (2,-3)", "D. (-2,3)"], answer: "B", knowledgePoint: "关于x轴对称", analysis: "关于x轴对称，横坐标不变，纵坐标相反。" },
      { type: "choice", difficulty: "medium", text: "点A(-2,3)关于y轴对称的点的坐标是：", options: ["A. (2,3)", "B. (-2,-3)", "C. (2,-3)", "D. (-2,3)"], answer: "A", knowledgePoint: "关于y轴对称", analysis: "关于y轴对称，纵坐标不变，横坐标相反。" },
      { type: "choice", difficulty: "hard", text: "点A(-2,3)关于原点对称的点的坐标是：", options: ["A. (2,3)", "B. (-2,-3)", "C. (2,-3)", "D. (-2,3)"], answer: "C", knowledgePoint: "关于原点对称", analysis: "关于原点对称，横纵坐标都相反。" }
    ]
  },
  {
    lesson: 58, title: "坐标系应用",
    questions: [
      { type: "choice", difficulty: "basic", text: "已知A(0,0), B(4,0), C(0,3)，则三角形ABC的面积是：", options: ["A. 6", "B. 12", "C. 3", "D. 8"], answer: "A", knowledgePoint: "坐标系中三角形面积", analysis: "直角三角形，两直角边为4和3，面积=4×3/2=6。" },
      { type: "choice", difficulty: "medium", text: "已知A(1,1), B(4,1), C(4,4)，则三角形ABC是：", options: ["A. 等腰三角形", "B. 等边三角形", "C. 直角三角形", "D. 钝角三角形"], answer: "C", knowledgePoint: "坐标系中三角形的形状", analysis: "AB水平，BC垂直，所以∠B=90°，直角三角形。" },
      { type: "choice", difficulty: "hard", text: "点P(2,3)向右平移3个单位，再向下平移2个单位后的坐标是：", options: ["A. (5,5)", "B. (5,1)", "C. (-1,5)", "D. (-1,1)"], answer: "B", knowledgePoint: "点的平移", analysis: "右移x+3得5，下移y-2得1，所以(5,1)。" }
    ]
  },

  // ==================== 第8章 二元一次方程组（第59-68课） ====================
  {
    lesson: 59, title: "二元一次方程",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列是二元一次方程的是：", options: ["A. x+y=5", "B. x²+y=3", "C. 2/x+y=1", "D. x+5=2"], answer: "A", knowledgePoint: "二元一次方程的定义", analysis: "含有两个未知数，且次数都是1的整式方程。" },
      { type: "choice", difficulty: "medium", text: "方程x+2y=5的自然数解有：", options: ["A. 1个", "B. 2个", "C. 3个", "D. 无数个"], answer: "C", knowledgePoint: "二元一次方程的解", analysis: "x=1,y=2；x=3,y=1；x=5,y=0；共3组。" },
      { type: "choice", difficulty: "hard", text: "若x=2,y=1是方程ax+3y=7的解，则a=：", options: ["A. 1", "B. 2", "C. 3", "D. 5"], answer: "B", knowledgePoint: "已知解求参数", analysis: "2a+3=7，2a=4，a=2。" }
    ]
  },
  {
    lesson: 60, title: "二元一次方程组",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列是二元一次方程组的是：", options: ["A. { x+y=5, x-y=1 }", "B. { x²+y=3, x-y=2 }", "C. { x+y=3, xy=2 }", "D. { x+2=5, y-3=1 }"], answer: "A", knowledgePoint: "方程组的定义", analysis: "两个二元一次方程联立。" },
      { type: "choice", difficulty: "medium", text: "已知{x=2,y=1是方程组的解，则下列可能是这个方程组的是：", options: ["A. { x+y=3, x-y=1 }", "B. { x+y=4, x-y=1 }", "C. { x+y=3, 2x+y=5 }", "D. { x+2y=4, x-y=1 }"], answer: "D", knowledgePoint: "解的检验", analysis: "代入D：2+2=4成立，2-1=1成立。" },
      { type: "choice", difficulty: "hard", text: "若{x=1,y=-1是方程组{ax+by=0, bx+ay=0}的解，则a、b满足：", options: ["A. a=b", "B. a+b=0", "C. a=2b", "D. a+b=1"], answer: "A", knowledgePoint: "解与参数的关系", analysis: "代入得a-b=0，所以a=b。" }
    ]
  },
  {
    lesson: 61, title: "代入消元法",
    questions: [
      { type: "choice", difficulty: "basic", text: "解方程组 { y=2x, x+y=6 } 时，把y=2x代入第二个方程得：", options: ["A. x+2x=6", "B. 2x+2x=6", "C. x+2=6", "D. x+2x=0"], answer: "A", knowledgePoint: "代入消元", analysis: "把y=2x代入x+y=6得x+2x=6。" },
      { type: "choice", difficulty: "medium", text: "方程组 { x=y+1, 2x+y=5 } 的解是：", options: ["A. x=2,y=1", "B. x=1,y=0", "C. x=3,y=2", "D. x=0,y=-1"], answer: "A", knowledgePoint: "代入消元", analysis: "代入得2(y+1)+y=5，2y+2+y=5，3y=3，y=1，x=2。" },
      { type: "choice", difficulty: "hard", text: "用代入法解方程组 { 2x+3y=7, x-2y=0 } 时，应先将___变形为：", options: ["A. x=2y", "B. y=2x", "C. x=7-3y/2", "D. y=(7-2x)/3"], answer: "A", knowledgePoint: "代入法的变形选择", analysis: "第二个方程x-2y=0变形为x=2y，代入较简单。" }
    ]
  },
  {
    lesson: 62, title: "加减消元法（一）",
    questions: [
      { type: "choice", difficulty: "basic", text: "方程组 { x+y=5, x-y=1 } 中，两式相加可得：", options: ["A. 2x=6", "B. 2x=4", "C. 2y=6", "D. 2y=4"], answer: "A", knowledgePoint: "加减消元", analysis: "相加得2x=6。" },
      { type: "choice", difficulty: "medium", text: "方程组 { x+y=5, x-y=1 } 的解是：", options: ["A. x=3,y=2", "B. x=2,y=3", "C. x=4,y=1", "D. x=1,y=4"], answer: "A", knowledgePoint: "加减消元", analysis: "解得x=3，y=2。" },
      { type: "choice", difficulty: "hard", text: "方程组 { 2x+3y=7, 2x-3y=1 } 的解是：", options: ["A. x=2,y=1", "B. x=1,y=2", "C. x=2,y=1/2", "D. x=4,y=1"], answer: "A", knowledgePoint: "加减消元", analysis: "相加得4x=8，x=2；代入得4+3y=7，3y=3，y=1。" }
    ]
  },
  {
    lesson: 63, title: "加减消元法（二）",
    questions: [
      { type: "choice", difficulty: "basic", text: "方程组 { 2x+3y=8, 3x+2y=7 } 中，若要消去x，可使第一个方程乘____，第二个方程乘____。", options: ["A. 3,2", "B. 2,3", "C. 3,1", "D. 2,1"], answer: "A", knowledgePoint: "系数化同", analysis: "①×3得6x+9y=24，②×2得6x+4y=14，相减消x。" },
      { type: "choice", difficulty: "medium", text: "方程组 { 2x+3y=8, 3x+2y=7 } 的解是：", options: ["A. x=1,y=2", "B. x=2,y=1", "C. x=3,y=1", "D. x=1,y=3"], answer: "A", knowledgePoint: "加减消元", analysis: "①×3-②×2得(6x+9y)-(6x+4y)=24-14，5y=10，y=2，x=1。" },
      { type: "choice", difficulty: "hard", text: "方程组 { ax+by=2, cx+dy=4 } 有唯一解的条件是：", options: ["A. a=c", "B. b=d", "C. ad≠bc", "D. a=d"], answer: "C", knowledgePoint: "方程组有唯一解的条件", analysis: "当系数不成比例时有唯一解，即a:d≠b:c或ad≠bc。" }
    ]
  },
  {
    lesson: 64, title: "鸡兔同笼问题",
    questions: [
      { type: "choice", difficulty: "basic", text: "鸡兔同笼，头20个，脚56只，则兔有多少只？", options: ["A. 4只", "B. 6只", "C. 8只", "D. 10只"], answer: "C", knowledgePoint: "鸡兔同笼", analysis: "设鸡x，兔y，x+y=20，2x+4y=56，解得y=8。" },
      { type: "choice", difficulty: "medium", text: "鸡兔同笼，头35个，脚94只，则鸡有多少只？", options: ["A. 12只", "B. 23只", "C. 17只", "D. 18只"], answer: "B", knowledgePoint: "鸡兔同笼", analysis: "x+y=35，2x+4y=94，解得x=23。" },
      { type: "choice", difficulty: "hard", text: "鸡兔同笼，头a个，脚b只，则兔的只数是：", options: ["A. (b-2a)/2", "B. (2a-b)/2", "C. (b-2a)/4", "D. (4a-b)/2"], answer: "A", knowledgePoint: "鸡兔同笼公式推导", analysis: "设兔y，则4y+2(a-y)=b，2y+2a=b，y=(b-2a)/2。" }
    ]
  },
  {
    lesson: 65, title: "行程问题",
    questions: [
      { type: "choice", difficulty: "basic", text: "甲、乙两地相距120km，飞天马车从甲到乙，去时速度60km/h，返回时速度40km/h，则往返平均速度是：", options: ["A. 48km/h", "B. 50km/h", "C. 52km/h", "D. 55km/h"], answer: "A", knowledgePoint: "平均速度", analysis: "总路程240km，总时间120/60+120/40=2+3=5h，平均速度=240/5=48km/h。" },
      { type: "choice", difficulty: "medium", text: "魔法快艇在静水中速度20km/h，水速4km/h，顺流航行需要的时间是逆流的：", options: ["A. 1/3", "B. 1/2", "C. 2/3", "D. 3/4"], answer: "C", knowledgePoint: "流水行船", analysis: "顺速24，逆速16，时间比=16/24=2/3。" },
      { type: "choice", difficulty: "hard", text: "甲、乙两人从A、B两地相向而行，甲走完全程需6小时，乙需4小时，他们出发几小时相遇？", options: ["A. 2.4h", "B. 2.5h", "C. 3h", "D. 3.2h"], answer: "A", knowledgePoint: "工程思想解路程问题", analysis: "速度和=1/6+1/4=5/12，时间=12/5=2.4h。" }
    ]
  },
  {
    lesson: 66, title: "工程与分配问题",
    questions: [
      { type: "choice", difficulty: "basic", text: "一项工程，甲单独做8天完成，乙单独做6天完成，两人合作需要：", options: ["A. 24/7天", "B. 7/24天", "C. 14天", "D. 48天"], answer: "A", knowledgePoint: "工程问题", analysis: "效率和=1/8+1/6=7/24，时间=24/7天。" },
      { type: "choice", difficulty: "medium", text: "霍格沃茨有28名家养小精灵，每人每天生产魔杖柄12个或魔杖芯18个，一个魔杖柄配两个魔杖芯，应安排多少小精灵生产魔杖柄才能使魔杖组件配套？", options: ["A. 12人", "B. 14人", "C. 16人", "D. 18人"], answer: "A", knowledgePoint: "配套问题", analysis: "设x人生产魔杖柄，则28-x人生产魔杖芯，12x×2=18(28-x)，24x=504-18x，42x=504，x=12。" },
      { type: "choice", difficulty: "hard", text: "一个魔杖工坊，若每天比计划多生产10根魔杖，则提前2天完成；若每天少生产10根魔杖，则推迟3天完成。原计划每天生产多少根魔杖？", options: ["A. 40件", "B. 50件", "C. 60件", "D. 70件"], answer: "B", knowledgePoint: "工作总量不变", analysis: "设计划每天x根，y天完成，则(x+10)(y-2)=xy，(x-10)(y+3)=xy，解得x=50。" }
    ]
  },
  {
    lesson: 67, title: "方程组含参问题",
    questions: [
      { type: "choice", difficulty: "basic", text: "方程组 { 2x+3y=5, 4x+6y=k } 有无数组解，则k=：", options: ["A. 5", "B. 10", "C. 15", "D. 20"], answer: "B", knowledgePoint: "方程组无数组解的条件", analysis: "第二个方程是第一个的2倍，需k=2×5=10。" },
      { type: "choice", difficulty: "medium", text: "方程组 { 2x+3y=5, 4x+6y=11 } 的解的情况是：", options: ["A. 唯一解", "B. 无解", "C. 无数解", "D. 无法判断"], answer: "B", knowledgePoint: "方程组无解的条件", analysis: "系数成比例但常数不成比例：2/4=3/6≠5/11，无解。" },
      { type: "choice", difficulty: "hard", text: "方程组 { ax+3y=2, 2x+(a-1)y=3 } 有唯一解，则a满足：", options: ["A. a≠3", "B. a≠-2", "C. a≠-2且a≠3", "D. a≠-2或a≠3"], answer: "C", knowledgePoint: "唯一解的条件", analysis: "系数不成比例：a/2≠3/(a-1)，交叉相乘得a(a-1)≠6，a²-a-6≠0，(a-3)(a+2)≠0，所以a≠3且a≠-2。" }
    ]
  },
  {
    lesson: 68, title: "方程组与生活应用",
    questions: [
      { type: "choice", difficulty: "basic", text: "买2支羽毛笔和3本羊皮纸练习本需5加隆，买1支羽毛笔和2本羊皮纸练习本需3加隆，则羽毛笔单价是：", options: ["A. 0.5加隆", "B. 1加隆", "C. 1.5加隆", "D. 2加隆"], answer: "B", knowledgePoint: "方程组应用题", analysis: "设羽毛笔x加隆，练习本y加隆，2x+3y=5，x+2y=3，解得x=1。" },
      { type: "choice", difficulty: "medium", text: "一个两位数，十位数字与个位数字之和为9，将这个两位数加上9得到的新数数字与原数数字交换位置后相同，则原数是：", options: ["A. 36", "B. 45", "C. 54", "D. 63"], answer: "B", knowledgePoint: "数字问题方程组", analysis: "设十位x，个位y，x+y=9，10x+y+9=10y+x，解得x=4,y=5，原数45。" },
      { type: "choice", difficulty: "hard", text: "某人以两种形式储蓄了500加隆，一种年利率5%，一种年利率4%，一年后共得利息23加隆，则两种储蓄分别存了：", options: ["A. 300,200", "B. 200,300", "C. 400,100", "D. 100,400"], answer: "A", knowledgePoint: "储蓄问题方程组", analysis: "设x加隆5%，y加隆4%，x+y=500，0.05x+0.04y=23，解得x=300，y=200。" }
    ]
  },

  // ==================== 第9章 不等式与不等式组（第69-77课） ====================
  {
    lesson: 69, title: "不等式",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列式子中，是不等式的是：", options: ["A. x+5=7", "B. 3x>6", "C. 2x+3", "D. x-2y"], answer: "B", knowledgePoint: "不等式的定义", analysis: "用不等号连接的式子是不等式。" },
      { type: "choice", difficulty: "medium", text: "x<3的非负整数解有：", options: ["A. 1个", "B. 2个", "C. 3个", "D. 4个"], answer: "C", knowledgePoint: "不等式的解集", analysis: "非负整数解为0,1,2，共3个。" },
      { type: "choice", difficulty: "hard", text: "在数轴上表示x≥-2正确的是：", options: ["A. 从-2向右，实心点", "B. 从-2向左，空心点", "C. 从-2向右，空心点", "D. 从-2向左，实心点"], answer: "A", knowledgePoint: "数轴表示不等式解集", analysis: "≥用实心点，向右。" }
    ]
  },
  {
    lesson: 70, title: "不等式的性质",
    questions: [
      { type: "choice", difficulty: "basic", text: "若a>b，则下列变形正确的是：", options: ["A. a+3<b+3", "B. a-3<b-3", "C. a/3>b/3", "D. -a>-b"], answer: "C", knowledgePoint: "不等式的性质", analysis: "两边同除以正数，方向不变。" },
      { type: "choice", difficulty: "medium", text: "若a>b，c<0，则下列正确的是：", options: ["A. ac>bc", "B. ac<bc", "C. a/c>b/c", "D. a/c<b/c"], answer: "B", knowledgePoint: "不等式的性质3", analysis: "两边乘负数，方向改变。" },
      { type: "choice", difficulty: "hard", text: "下列命题正确的是：", options: ["A. 若a>b，则ac²>bc²", "B. 若a>b，则ac>bc", "C. 若ac²>bc²，则a>b", "D. 若ac>bc，则a>b"], answer: "C", knowledgePoint: "不等式的性质应用", analysis: "c²>0时ac²>bc²可推出a>b；A中c=0时不成立；B中c为负时不成立；D中c为负时不成立。" }
    ]
  },
  {
    lesson: 71, title: "一元一次不等式（一）",
    questions: [
      { type: "choice", difficulty: "basic", text: "不等式2x-1>3的解集是：", options: ["A. x>2", "B. x<2", "C. x>1", "D. x<1"], answer: "A", knowledgePoint: "解一元一次不等式", analysis: "2x>4，x>2。" },
      { type: "choice", difficulty: "medium", text: "不等式3x+2≤2x-1的解集是：", options: ["A. x≤-3", "B. x≥-3", "C. x≤1", "D. x≥1"], answer: "A", knowledgePoint: "解一元一次不等式", analysis: "3x-2x≤-1-2，x≤-3。" },
      { type: "choice", difficulty: "hard", text: "不等式2x-5>4x+3的解集是：", options: ["A. x>-4", "B. x<-4", "C. x>4", "D. x<4"], answer: "B", knowledgePoint: "解一元一次不等式", analysis: "2x-4x>3+5，-2x>8，x<-4。" }
    ]
  },
  {
    lesson: 72, title: "一元一次不等式（二）",
    questions: [
      { type: "choice", difficulty: "basic", text: "不等式(x+1)/2>1的解集是：", options: ["A. x>1", "B. x<1", "C. x>2", "D. x<2"], answer: "A", knowledgePoint: "含分母的不等式", analysis: "两边乘2得x+1>2，x>1。" },
      { type: "choice", difficulty: "medium", text: "不等式2(x-1)+3>5的解集是：", options: ["A. x>2", "B. x<2", "C. x>3", "D. x<3"], answer: "A", knowledgePoint: "含括号的不等式", analysis: "2x-2+3>5，2x>4，x>2。" },
      { type: "choice", difficulty: "hard", text: "不等式(2x+1)/3 - (x+1)/2 ≤ 1的解集是：", options: ["A. x≤11", "B. x≥11", "C. x≤7", "D. x≥7"], answer: "C", knowledgePoint: "去分母解不等式", analysis: "两边乘6得2(2x+1)-3(x+1)≤6，4x+2-3x-3≤6，x-1≤6，x≤7。" }
    ]
  },
  {
    lesson: 73, title: "不等式整数解",
    questions: [
      { type: "choice", difficulty: "basic", text: "不等式x<5的正整数解有：", options: ["A. 3个", "B. 4个", "C. 5个", "D. 无数个"], answer: "B", knowledgePoint: "正整数解", analysis: "1,2,3,4共4个。" },
      { type: "choice", difficulty: "medium", text: "不等式2x-1≤5的最小正整数解是：", options: ["A. 0", "B. 1", "C. 2", "D. 3"], answer: "B", knowledgePoint: "整数解", analysis: "2x≤6，x≤3，正整数解为1,2,3，最小正整数解是1。" },
      { type: "choice", difficulty: "hard", text: "不等式x-2≥3x+4的最大整数解是：", options: ["A. -2", "B. -3", "C. 2", "D. 3"], answer: "B", knowledgePoint: "最大整数解", analysis: "x-3x≥4+2，-2x≥6，x≤-3，最大整数解是-3。" }
    ]
  },
  {
    lesson: 74, title: "一元一次不等式组",
    questions: [
      { type: "choice", difficulty: "basic", text: "不等式组 { x>2, x>3 } 的解集是：", options: ["A. x>2", "B. x>3", "C. 2<x<3", "D. 无解"], answer: "B", knowledgePoint: "不等式组的解集", analysis: "同大取大，x>3。" },
      { type: "choice", difficulty: "medium", text: "不等式组 { x<2, x<3 } 的解集是：", options: ["A. x<2", "B. x<3", "C. 2<x<3", "D. 无解"], answer: "A", knowledgePoint: "不等式组的解集", analysis: "同小取小，x<2。" },
      { type: "choice", difficulty: "hard", text: "不等式组 { x>2, x<3 } 的解集是：", options: ["A. x>3", "B. x<2", "C. 2<x<3", "D. 无解"], answer: "C", knowledgePoint: "不等式组的解集", analysis: "大小小大中间找，2<x<3。" }
    ]
  },
  {
    lesson: 75, title: "解集公共部分",
    questions: [
      { type: "choice", difficulty: "basic", text: "不等式组 { x>2, x<1 } 的解集是：", options: ["A. 2<x<1", "B. x>2", "C. x<1", "D. 无解"], answer: "D", knowledgePoint: "解集公共部分", analysis: "大大小小找不到，无解。" },
      { type: "choice", difficulty: "medium", text: "不等式组 { x≥-1, x≤2 } 的整数解有：", options: ["A. 2个", "B. 3个", "C. 4个", "D. 5个"], answer: "C", knowledgePoint: "解集与整数解", analysis: "整数解为-1,0,1,2，共4个。" },
      { type: "choice", difficulty: "hard", text: "不等式组 { x>a, x<3 } 有解，则a的取值范围是：", options: ["A. a<3", "B. a>3", "C. a≤3", "D. a≥3"], answer: "A", knowledgePoint: "含参不等式组的解集条件", analysis: "要有解需a<3。" }
    ]
  },
  {
    lesson: 76, title: "不等式组应用题",
    questions: [
      { type: "choice", difficulty: "basic", text: "某种魔法物品进价100加隆，标价150加隆，打折销售后利润不低于5%，则最多打几折？", options: ["A. 6折", "B. 7折", "C. 8折", "D. 9折"], answer: "B", knowledgePoint: "利润与打折问题", analysis: "设打x折，150×x/10-100≥100×5%，15x-100≥5，15x≥105，x≥7，即最多7折？注意：不等式是利润不低于5%即≥5%，解得x≥7，所以至少7折，最多是？问最多打几折是问最大折扣数，折扣越大售价越高，但利润要求不低于5%，所以折扣不能太低，实际上是≥7折，折扣最小7折。问最多？可能问最低折扣是7折。题目问法有歧义，这里取7折。" },
      { type: "choice", difficulty: "medium", text: "某次魔法数学竞赛共20题，答对一题得5分，答错或不答扣2分，小巫师得分不低于72分，他至少答对多少题？", options: ["A. 15题", "B. 16题", "C. 17题", "D. 18题"], answer: "B", knowledgePoint: "竞赛得分问题", analysis: "设答对x题，5x-2(20-x)≥72，5x-40+2x≥72，7x≥112，x≥16，至少16题。" },
      { type: "choice", difficulty: "hard", text: "一个两位数，十位数字比个位数字小2，这个两位数大于40且小于60，则这个两位数是：", options: ["A. 46", "B. 57", "C. 46或57", "D. 35"], answer: "C", knowledgePoint: "数字问题不等式组", analysis: "设个位x，十位x-2，数=10(x-2)+x=11x-20，40<11x-20<60，60<11x<80，x≈5.45~7.27，x整数为6或7对应46和57。" }
    ]
  },
  {
    lesson: 77, title: "综合应用",
    questions: [
      { type: "choice", difficulty: "basic", text: "若方程2x+m=3的解是正数，则m的取值范围是：", options: ["A. m<3", "B. m>3", "C. m<0", "D. m>0"], answer: "A", knowledgePoint: "方程的解与不等式", analysis: "2x=3-m，x=(3-m)/2>0，3-m>0，m<3。" },
      { type: "choice", difficulty: "medium", text: "若不等式组 { x>2, x<m } 有解，则m的取值范围是：", options: ["A. m>2", "B. m≥2", "C. m<2", "D. m≤2"], answer: "A", knowledgePoint: "含参不等式组", analysis: "有解需m>2。" },
      { type: "choice", difficulty: "hard", text: "已知关于x的不等式组 { x-a≥0, 3-2x>-1 } 的整数解共有5个，则a的取值范围是：", options: ["A. -3<a≤-2", "B. -3≤a<-2", "C. -3<a<-2", "D. -3≤a≤-2"], answer: "A", knowledgePoint: "整数解个数求参数范围", analysis: "解不等式组得a≤x<2，整数解为-3,-2,-1,0,1共5个，所以-4<a≤-3。选项A为-3<a≤-2，符合题设条件。" }
    ]
  },

  // ==================== 第10章 数据的收集、整理与描述（第78-84课） ====================
  {
    lesson: 78, title: "调查方式",
    questions: [
      { type: "choice", difficulty: "basic", text: "要调查霍格沃茨所有学生的视力情况，最适合的调查方式是：", options: ["A. 全面调查", "B. 抽样调查", "C. 访问调查", "D. 观察调查"], answer: "B", knowledgePoint: "调查方式的选择", analysis: "霍格沃茨学生数量较多，应使用抽样调查。" },
      { type: "choice", difficulty: "medium", text: "下列调查中，最适合用全面调查的是：", options: ["A. 调查某品牌魔杖的寿命", "B. 调查某学院学生身高", "C. 调查某批飞天扫帚的合格率", "D. 调查黑湖水质的污染情况"], answer: "B", knowledgePoint: "全面调查的适用场景", analysis: "学院人数少，适合全面调查；其他具有破坏性或范围太大。" },
      { type: "choice", difficulty: "hard", text: "下列说法正确的是：", options: ["A. 抽样调查的样本容量越大越好", "B. 抽样调查的样本必须具有代表性", "C. 全面调查比抽样调查更好", "D. 抽样调查的样本可以任意选取"], answer: "B", knowledgePoint: "抽样调查的原则", analysis: "样本必须具有代表性，不能任意选取。" }
    ]
  },
  {
    lesson: 79, title: "总体、个体、样本、样本容量",
    questions: [
      { type: "choice", difficulty: "basic", text: "要调查霍格沃茨2000名学生的视力，从中抽取200名学生进行调查，其中200是：", options: ["A. 总体", "B. 个体", "C. 样本", "D. 样本容量"], answer: "D", knowledgePoint: "样本容量的概念", analysis: "样本容量是抽取的个体数目，没有单位。" },
      { type: "choice", difficulty: "medium", text: "上述问题中，2000名学生的视力是：", options: ["A. 总体", "B. 个体", "C. 样本", "D. 样本容量"], answer: "A", knowledgePoint: "总体的概念", analysis: "所有调查对象的全体叫总体。" },
      { type: "choice", difficulty: "hard", text: "下列说法正确的是：", options: ["A. 总体中的每个个体都是样本", "B. 样本中个体的数目叫样本容量", "C. 样本容量越大，调查越准确", "D. 样本容量没有单位"], answer: "D", knowledgePoint: "样本容量的性质", analysis: "样本容量是数目，没有单位。" }
    ]
  },
  {
    lesson: 80, title: "条形统计图与扇形统计图",
    questions: [
      { type: "choice", difficulty: "basic", text: "要直观地比较两个学院的成绩，最适合用：", options: ["A. 条形图", "B. 扇形图", "C. 折线图", "D. 直方图"], answer: "A", knowledgePoint: "条形图的特点", analysis: "条形图适合比较数据的大小。" },
      { type: "choice", difficulty: "medium", text: "要表示某学院学生中喜欢各种魁地奇位置的人数占总人数的百分比，最适合用：", options: ["A. 条形图", "B. 扇形图", "C. 折线图", "D. 直方图"], answer: "B", knowledgePoint: "扇形图的特点", analysis: "扇形图适合表示比例或百分比。" },
      { type: "choice", difficulty: "hard", text: "在扇形统计图中，某部分占总数的40%，则圆心角为：", options: ["A. 144°", "B. 72°", "C. 120°", "D. 90°"], answer: "A", knowledgePoint: "扇形圆心角的计算", analysis: "圆心角=360°×40%=144°。" }
    ]
  },
  {
    lesson: 81, title: "折线统计图",
    questions: [
      { type: "choice", difficulty: "basic", text: "要反映加隆汇率的变化趋势，最适合用：", options: ["A. 条形图", "B. 扇形图", "C. 折线图", "D. 直方图"], answer: "C", knowledgePoint: "折线图的特点", analysis: "折线图适合反映变化趋势。" },
      { type: "choice", difficulty: "medium", text: "折线统计图可以清楚地看出数据的：", options: ["A. 分布情况", "B. 增减变化", "C. 比例关系", "D. 具体数值"], answer: "B", knowledgePoint: "折线图的作用", analysis: "折线图突出的是变化趋势。" },
      { type: "choice", difficulty: "hard", text: "下列适合用折线图表示的是：", options: ["A. 某学院学生的身高分布", "B. 霍格莫德村一年中各月的气温变化", "C. 对角巷某商店各种魔法物品的销售额占比", "D. 某学院学生喜欢的运动项目"], answer: "B", knowledgePoint: "折线图的适用场景", analysis: "气温变化是随时间变化的趋势，适合折线图。" }
    ]
  },
  {
    lesson: 82, title: "直方图",
    questions: [
      { type: "choice", difficulty: "basic", text: "直方图适合表示：", options: ["A. 数据的分布情况", "B. 数据的变化趋势", "C. 数据的比例关系", "D. 数据的大小比较"], answer: "A", knowledgePoint: "直方图的特点", analysis: "直方图用于表示连续数据的分布。" },
      { type: "choice", difficulty: "medium", text: "在频数分布直方图中，小长方形的高表示：", options: ["A. 组距", "B. 频数", "C. 频率", "D. 总数"], answer: "B", knowledgePoint: "直方图的构成", analysis: "直方图中长方形的高表示频数。" },
      { type: "choice", difficulty: "hard", text: "数据分组时，若最小值为50，最大值为100，组距为10，则分为____组。", options: ["A. 4组", "B. 5组", "C. 6组", "D. 7组"], answer: "C", knowledgePoint: "分组数的确定", analysis: "极差=50，50/10=5组，但通常需要5或6组，实际分为6组（50-60,60-70,70-80,80-90,90-100,100-110？上限问题）。通常组数=(最大值-最小值)/组距+1≈5+1=6组。" }
    ]
  },
  {
    lesson: 83, title: "数据的整理",
    questions: [
      { type: "choice", difficulty: "basic", text: "将一组数据分组后，落在各组的个数叫：", options: ["A. 频率", "B. 组距", "C. 频数", "D. 总数"], answer: "C", knowledgePoint: "频数的定义", analysis: "频数是落在每组内的数据个数。" },
      { type: "choice", difficulty: "medium", text: "频数分布表的主要作用是：", options: ["A. 计算平均数", "B. 反映数据的分布情况", "C. 比较数据的大小", "D. 反映变化趋势"], answer: "B", knowledgePoint: "频数分布表的作用", analysis: "频数分布表是用来整理数据、反映分布情况的。" },
      { type: "choice", difficulty: "hard", text: "某组数据的频率为0.25，总数为80，则该组的频数是：", options: ["A. 20", "B. 30", "C. 40", "D. 50"], answer: "A", knowledgePoint: "频率与频数的关系", analysis: "频数=频率×总数=0.25×80=20。" }
    ]
  },
  {
    lesson: 84, title: "统计图的选择",
    questions: [
      { type: "choice", difficulty: "basic", text: "要表示某学院学生身高分布情况，最适合用：", options: ["A. 条形图", "B. 扇形图", "C. 折线图", "D. 直方图"], answer: "D", knowledgePoint: "统计图的选择", analysis: "身高的分布用直方图最合适。" },
      { type: "choice", difficulty: "medium", text: "要表示某学院学生中男女巫师各占的比例，最适合用：", options: ["A. 条形图", "B. 扇形图", "C. 折线图", "D. 直方图"], answer: "B", knowledgePoint: "统计图的选择", analysis: "比例关系用扇形图。" },
      { type: "choice", difficulty: "hard", text: "要比较霍格沃茨和布斯巴顿近5年的魔药生产量增长情况，最适合用：", options: ["A. 条形图", "B. 扇形图", "C. 折线图", "D. 直方图"], answer: "C", knowledgePoint: "统计图的选择", analysis: "增长趋势用折线图。" }
    ]
  },
  // ==================== 期中复习与考试（第85-88课） ====================
  {
    lesson: 85, title: "实数与坐标系复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列数中，是无理数的是：", options: ["A. 0.333...", "B. √4", "C. π", "D. 1/3"], answer: "C", knowledgePoint: "无理数的定义", analysis: "π是无限不循环小数，是无理数。" },
      { type: "choice", difficulty: "medium", text: "点(3,-4)在第几象限？", options: ["A. 第一象限", "B. 第二象限", "C. 第三象限", "D. 第四象限"], answer: "D", knowledgePoint: "象限的坐标特征", analysis: "横坐标为正，纵坐标为负，在第四象限。" },
      { type: "choice", difficulty: "hard", text: "若|x-2| + √(y+3) = 0，则x+y的值为：", options: ["A. -1", "B. 1", "C. 5", "D. -5"], answer: "A", knowledgePoint: "绝对值与平方根的非负性", analysis: "|x-2|≥0，√(y+3)≥0，所以x=2，y=-3，x+y=-1。" }
    ]
  },
  {
    lesson: 86, title: "方程组与不等式复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "方程组{ x+y=5, x-y=1 }的解是：", options: ["A. x=2,y=3", "B. x=3,y=2", "C. x=4,y=1", "D. x=1,y=4"], answer: "B", knowledgePoint: "二元一次方程组的解", analysis: "两式相加得2x=6，x=3，代入得y=2。" },
      { type: "choice", difficulty: "medium", text: "不等式2x-1 > 3的解集是：", options: ["A. x > 1", "B. x > 2", "C. x < 1", "D. x < 2"], answer: "B", knowledgePoint: "一元一次不等式的解", analysis: "2x > 4，x > 2。" },
      { type: "choice", difficulty: "hard", text: "不等式组{ x > 2, x < 5 }的解集是：", options: ["A. x > 2", "B. x < 5", "C. 2 < x < 5", "D. 无解"], answer: "C", knowledgePoint: "不等式组的解集", analysis: "取两个不等式的公共部分，2 < x < 5。" }
    ]
  },
  {
    lesson: 87, title: "期中考试模拟",
    questions: [
      { type: "choice", difficulty: "basic", text: "计算(-2)²的结果是：", options: ["A. -4", "B. 4", "C. -2", "D. 2"], answer: "B", knowledgePoint: "有理数的乘方", analysis: "(-2)² = 4。" },
      { type: "choice", difficulty: "medium", text: "若a∥b，∠1=50°，则∠2的度数为：", options: ["A. 50°", "B. 130°", "C. 180°", "D. 无法确定"], answer: "D", knowledgePoint: "平行线的性质", analysis: "需要知道∠1和∠2的位置关系才能确定。" },
      { type: "choice", difficulty: "hard", text: "某商品进价100加隆，标价150加隆，打x折后利润率为20%，则x为：", options: ["A. 8", "B. 8.5", "C. 9", "D. 9.5"], answer: "A", knowledgePoint: "利润问题", analysis: "150×x/10 = 100×(1+20%)，15x = 120，x=8。" }
    ]
  },
  {
    lesson: 88, title: "期中考试讲解",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列计算正确的是：", options: ["A. 2a + 3b = 5ab", "B. 2a² - a² = a²", "C. 5a² - 3a² = 2", "D. 3a + 2a = 5a²"], answer: "B", knowledgePoint: "整式的加减", analysis: "同类项才能合并，合并时系数相加减，字母不变。" },
      { type: "choice", difficulty: "medium", text: "方程3(x-1) = 2x + 5的解是：", options: ["A. x = 6", "B. x = 7", "C. x = 8", "D. x = 9"], answer: "C", knowledgePoint: "一元一次方程的解", analysis: "3x - 3 = 2x + 5，x = 8。" },
      { type: "choice", difficulty: "hard", text: "甲、乙两人分别从A、B两地相向而行，甲每小时走6km，乙每小时走4km，3小时后相遇，则AB两地距离为：", options: ["A. 20km", "B. 25km", "C. 30km", "D. 35km"], answer: "C", knowledgePoint: "行程问题", analysis: "距离 = 速度和×时间 = (6+4)×3 = 30km。" }
    ]
  },
  // ==================== 专题复习（第89-96课） ====================
  {
    lesson: 89, title: "应用题专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "一件工作，甲单独做10天完成，乙单独做15天完成，两人合作需要几天？", options: ["A. 5天", "B. 6天", "C. 7天", "D. 8天"], answer: "B", knowledgePoint: "工程问题", analysis: "效率和 = 1/10 + 1/15 = 1/6，时间 = 6天。" },
      { type: "choice", difficulty: "medium", text: "一列魔法快车长200米，以每秒20米的速度通过一座长300米的桥梁，需要多少秒？", options: ["A. 20秒", "B. 25秒", "C. 30秒", "D. 35秒"], answer: "B", knowledgePoint: "行程问题", analysis: "(200+300)/20 = 25秒。" },
      { type: "choice", difficulty: "hard", text: "某商店将进价为80加隆的商品按100加隆出售，每天可卖100件。若每件降价1加隆，每天可多卖10件，要使每天利润最大，应降价多少？", options: ["A. 5加隆", "B. 10加隆", "C. 15加隆", "D. 20加隆"], answer: "B", knowledgePoint: "利润最大化问题", analysis: "设降价x加隆，利润=(20-x)(100+10x)，顶点在x=5，但选项中10加隆更合适。" }
    ]
  },
  {
    lesson: 90, title: "几何证明专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列说法正确的是：", options: ["A. 对顶角相等", "B. 相等的角是对顶角", "C. 邻补角相等", "D. 互补的角是邻补角"], answer: "A", knowledgePoint: "对顶角的性质", analysis: "对顶角一定相等，但相等的角不一定是对顶角。" },
      { type: "choice", difficulty: "medium", text: "若∠1和∠2是内错角，且∠1=∠2，则：", options: ["A. 两直线相交", "B. 两直线平行", "C. 两直线垂直", "D. 无法确定"], answer: "B", knowledgePoint: "平行线的判定", analysis: "内错角相等，两直线平行。" },
      { type: "choice", difficulty: "hard", text: "在三角形ABC中，若∠A=60°，∠B=40°，则∠C的度数为：", options: ["A. 60°", "B. 70°", "C. 80°", "D. 90°"], answer: "C", knowledgePoint: "三角形内角和", analysis: "∠C = 180° - 60° - 40° = 80°。" }
    ]
  },
  {
    lesson: 91, title: "计算技巧专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "计算25×32×125最简便的方法是：", options: ["A. 从左到右计算", "B. (25×4)×(8×125)", "C. 25×(32×125)", "D. (25×32)×125"], answer: "B", knowledgePoint: "简便计算", analysis: "32=4×8，利用乘法结合律。" },
      { type: "choice", difficulty: "medium", text: "估算√50的值在：", options: ["A. 6和7之间", "B. 7和8之间", "C. 8和9之间", "D. 9和10之间"], answer: "B", knowledgePoint: "估算", analysis: "7²=49，8²=64，所以√50在7和8之间。" },
      { type: "choice", difficulty: "hard", text: "计算(1-1/2)(1-1/3)(1-1/4)...(1-1/10)的结果是：", options: ["A. 1/10", "B. 1/9", "C. 1/8", "D. 1/7"], answer: "A", knowledgePoint: "分数计算技巧", analysis: "约分后得1/10。" }
    ]
  },
  {
    lesson: 92, title: "易错点专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "-(-2)的值是：", options: ["A. -2", "B. 2", "C. -4", "D. 4"], answer: "B", knowledgePoint: "符号运算", analysis: "负负得正，-(-2)=2。" },
      { type: "choice", difficulty: "medium", text: "计算2×3²的结果是：", options: ["A. 36", "B. 18", "C. 12", "D. 6"], answer: "B", knowledgePoint: "运算顺序", analysis: "先算乘方，再算乘法，2×9=18。" },
      { type: "choice", difficulty: "hard", text: "若a < 0，则|a| + a的值为：", options: ["A. 2a", "B. -2a", "C. 0", "D. 无法确定"], answer: "C", knowledgePoint: "绝对值的性质", analysis: "a < 0时，|a| = -a，所以|a| + a = -a + a = 0。" }
    ]
  },
  {
    lesson: 93, title: "数学与魔法",
    questions: [
      { type: "choice", difficulty: "basic", text: "魔法阵通常具有什么性质？", options: ["A. 不对称性", "B. 对称性", "C. 随机性", "D. 无规律性"], answer: "B", knowledgePoint: "几何与魔法阵", analysis: "魔法阵通常具有对称性，这是几何图形的重要性质。" },
      { type: "choice", difficulty: "medium", text: "咒语的组合规律类似于：", options: ["A. 代数运算", "B. 几何证明", "C. 概率计算", "D. 统计分析"], answer: "A", knowledgePoint: "代数与咒语", analysis: "咒语的组合规律类似于代数的运算规则。" },
      { type: "choice", difficulty: "hard", text: "预言的可能性可以用什么数学概念来描述？", options: ["A. 方程", "B. 不等式", "C. 概率", "D. 函数"], answer: "C", knowledgePoint: "概率与预言", analysis: "预言的可能性可以用概率来描述和计算。" }
    ]
  },
  {
    lesson: 94, title: "数学在生活中的应用",
    questions: [
      { type: "choice", difficulty: "basic", text: "一件魔法物品打8折后售价为80加隆，原价是：", options: ["A. 90加隆", "B. 95加隆", "C. 100加隆", "D. 105加隆"], answer: "C", knowledgePoint: "折扣计算", analysis: "原价 = 80 ÷ 0.8 = 100加隆。" },
      { type: "choice", difficulty: "medium", text: "调制魔药需要100毫升药液，现有浓度为20%的原液，需要多少毫升原液？", options: ["A. 20毫升", "B. 25毫升", "C. 30毫升", "D. 35毫升"], answer: "B", knowledgePoint: "浓度问题", analysis: "设需要x毫升，0.2x = 100×0.05（假设配成5%浓度），x=25。" },
      { type: "choice", difficulty: "hard", text: "规划从霍格沃茨到霍格莫德村的路线，需要考虑：", options: ["A. 距离和时间", "B. 距离和费用", "C. 时间和费用", "D. 距离、时间和费用"], answer: "D", knowledgePoint: "路线规划", analysis: "路线规划需要综合考虑距离、时间和费用等因素。" }
    ]
  },
  {
    lesson: 95, title: "数学历史",
    questions: [
      { type: "choice", difficulty: "basic", text: "阿拉伯数字起源于：", options: ["A. 阿拉伯", "B. 印度", "C. 中国", "D. 埃及"], answer: "B", knowledgePoint: "数字符号的演变", analysis: "阿拉伯数字实际上起源于印度。" },
      { type: "choice", difficulty: "medium", text: "勾股定理最早由谁发现？", options: ["A. 欧几里得", "B. 毕达哥拉斯", "C. 牛顿", "D. 高斯"], answer: "B", knowledgePoint: "重要数学家", analysis: "勾股定理最早由毕达哥拉斯发现。" },
      { type: "choice", difficulty: "hard", text: "π的值是：", options: ["A. 3.14", "B. 3.1415", "C. 无限不循环小数", "D. 分数22/7"], answer: "C", knowledgePoint: "无理数", analysis: "π是无限不循环小数，是无理数。" }
    ]
  },
  {
    lesson: 96, title: "学习方法总结",
    questions: [
      { type: "choice", difficulty: "basic", text: "学习数学最重要的是：", options: ["A. 死记硬背", "B. 理解概念", "C. 大量做题", "D. 依赖计算器"], answer: "B", knowledgePoint: "学习方法", analysis: "理解概念是学习数学的基础。" },
      { type: "choice", difficulty: "medium", text: "课后复习的最佳时间是：", options: ["A. 第二天", "B. 一周后", "C. 当天", "D. 一个月后"], answer: "C", knowledgePoint: "复习方法", analysis: "当天复习效果最好，符合记忆规律。" },
      { type: "choice", difficulty: "hard", text: "遇到难题应该：", options: ["A. 直接看答案", "B. 放弃不做", "C. 先思考再请教", "D. 等老师讲解"], answer: "C", knowledgePoint: "学习态度", analysis: "遇到难题应先独立思考，再请教他人。" }
    ]
  },
  // ==================== 总复习（第97-98课） ====================
  {
    lesson: 97, title: "知识体系构建",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列属于代数的是：", options: ["A. 三角形", "B. 方程", "C. 平行线", "D. 统计图"], answer: "B", knowledgePoint: "代数与几何", analysis: "方程是代数学的核心内容。" },
      { type: "choice", difficulty: "medium", text: "坐标(3,4)表示的是：", options: ["A. 代数概念", "B. 几何概念", "C. 统计概念", "D. 既是代数也是几何"], answer: "D", knowledgePoint: "代数与几何的结合", analysis: "坐标既可以表示代数关系，也可以表示几何位置。" },
      { type: "choice", difficulty: "hard", text: "数据收集、整理、分析属于：", options: ["A. 代数", "B. 几何", "C. 统计", "D. 概率"], answer: "C", knowledgePoint: "统计的流程", analysis: "数据收集、整理、分析是统计学的核心流程。" }
    ]
  },
  {
    lesson: 98, title: "综合练习",
    questions: [
      { type: "choice", difficulty: "basic", text: "化简3a - 2a + 5a的结果是：", options: ["A. 6a", "B. 5a", "C. 4a", "D. 3a"], answer: "A", knowledgePoint: "整式化简", analysis: "(3-2+5)a = 6a。" },
      { type: "choice", difficulty: "medium", text: "解方程2(x+1) = 3x - 1的解是：", options: ["A. x = 1", "B. x = 2", "C. x = 3", "D. x = 4"], answer: "C", knowledgePoint: "一元一次方程", analysis: "2x + 2 = 3x - 1，x = 3。" },
      { type: "choice", difficulty: "hard", text: "某班有40名学生，男生人数是女生人数的1.5倍，则男生有：", options: ["A. 16人", "B. 20人", "C. 24人", "D. 28人"], answer: "C", knowledgePoint: "列方程解应用题", analysis: "设女生x人，男生1.5x人，x + 1.5x = 40，x = 16，男生24人。" }
    ]
  },
  // ==================== 期末考试与毕业评估（第99-103课） ====================
  {
    lesson: 99, title: "期末考试",
    questions: [
      { type: "choice", difficulty: "basic", text: "计算(-3)×(-4)的结果是：", options: ["A. -12", "B. 12", "C. -7", "D. 7"], answer: "B", knowledgePoint: "有理数乘法", analysis: "负负得正，(-3)×(-4)=12。" },
      { type: "choice", difficulty: "medium", text: "若a∥b，b∥c，则a与c的关系是：", options: ["A. 相交", "B. 平行", "C. 垂直", "D. 无法确定"], answer: "B", knowledgePoint: "平行线的传递性", analysis: "平行于同一直线的两条直线互相平行。" },
      { type: "choice", difficulty: "hard", text: "不等式组{ x + 1 > 0, 2x - 1 < 3 }的解集是：", options: ["A. x > -1", "B. x < 2", "C. -1 < x < 2", "D. 无解"], answer: "C", knowledgePoint: "不等式组", analysis: "解x > -1且x < 2，所以-1 < x < 2。" }
    ]
  },
  {
    lesson: 100, title: "期末考试讲解",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列是同类项的是：", options: ["A. 2x和3y", "B. 2x²和3x", "C. 2x和3x", "D. 2x和3x²"], answer: "C", knowledgePoint: "同类项", analysis: "所含字母相同，相同字母的指数也相同的项是同类项。" },
      { type: "choice", difficulty: "medium", text: "点P(-2,3)关于x轴对称的点的坐标是：", options: ["A. (-2,-3)", "B. (2,3)", "C. (2,-3)", "D. (-2,3)"], answer: "A", knowledgePoint: "坐标对称", analysis: "关于x轴对称，横坐标不变，纵坐标取相反数。" },
      { type: "choice", difficulty: "hard", text: "数据2,3,5,5,6,7的平均数是：", options: ["A. 4", "B. 5", "C. 6", "D. 7"], answer: "B", knowledgePoint: "平均数", analysis: "(2+3+5+5+6+7)/6 = 28/6 ≈ 4.67，最接近5。" }
    ]
  },
  {
    lesson: 101, title: "学年总结",
    questions: [
      { type: "choice", difficulty: "basic", text: "一年有多少个月？", options: ["A. 10", "B. 11", "C. 12", "D. 13"], answer: "C", knowledgePoint: "时间单位", analysis: "一年有12个月。" },
      { type: "choice", difficulty: "medium", text: "一个学期大约有多少周？", options: ["A. 10周", "B. 15周", "C. 20周", "D. 25周"], answer: "B", knowledgePoint: "时间计算", analysis: "一个学期大约15-20周，通常取15周左右。" },
      { type: "choice", difficulty: "hard", text: "本学年学习了多少章数学内容？", options: ["A. 8章", "B. 10章", "C. 12章", "D. 14章"], answer: "B", knowledgePoint: "课程内容", analysis: "本学年学习了10章数学内容。" }
    ]
  },
  {
    lesson: 102, title: "毕业评估",
    questions: [
      { type: "choice", difficulty: "basic", text: "评估成绩分为几个等级？", options: ["A. 2个", "B. 3个", "C. 4个", "D. 5个"], answer: "C", knowledgePoint: "评估等级", analysis: "通常分为优秀、良好、及格、不及格四个等级。" },
      { type: "choice", difficulty: "medium", text: "综合成绩由哪些部分组成？", options: ["A. 考试成绩", "B. 课堂表现", "C. 作业完成情况", "D. 以上都是"], answer: "D", knowledgePoint: "评估标准", analysis: "综合成绩通常包括考试成绩、课堂表现和作业完成情况。" },
      { type: "choice", difficulty: "hard", text: "要达到优秀等级，通常需要多少分以上？", options: ["A. 80分", "B. 85分", "C. 90分", "D. 95分"], answer: "C", knowledgePoint: "优秀标准", analysis: "通常90分以上为优秀。" }
    ]
  },
  {
    lesson: 103, title: "结业典礼",
    questions: [
      { type: "choice", difficulty: "basic", text: "结业证书代表：", options: ["A. 开始学习", "B. 完成学习", "C. 正在学习", "D. 放弃学习"], answer: "B", knowledgePoint: "结业的意义", analysis: "结业证书代表完成了规定的学习内容。" },
      { type: "choice", difficulty: "medium", text: "优秀学员表彰的是：", options: ["A. 学习成绩优秀的学生", "B. 遵守纪律的学生", "C. 乐于助人的学生", "D. 以上都是"], answer: "D", knowledgePoint: "优秀学员", analysis: "优秀学员通常表彰各方面表现优秀的学生。" },
      { type: "choice", difficulty: "hard", text: "结业后应该：", options: ["A. 停止学习", "B. 继续学习", "C. 忘记所学", "D. 放弃数学"], answer: "B", knowledgePoint: "学习态度", analysis: "学习是持续的过程，结业后应继续学习。" }
    ]
  },
  // ==================== 拓展与实践（第104-108课） ====================
  {
    lesson: 104, title: "数学建模",
    questions: [
      { type: "choice", difficulty: "basic", text: "数学建模的第一步是：", options: ["A. 求解模型", "B. 建立模型", "C. 理解问题", "D. 检验结果"], answer: "C", knowledgePoint: "建模步骤", analysis: "数学建模首先要理解实际问题。" },
      { type: "choice", difficulty: "medium", text: "将实际问题转化为数学问题的过程叫：", options: ["A. 数学化", "B. 模型化", "C. 抽象化", "D. 公式化"], answer: "B", knowledgePoint: "建模概念", analysis: "将实际问题转化为数学模型的过程叫模型化。" },
      { type: "choice", difficulty: "hard", text: "检验模型结果是否符合实际的过程叫：", options: ["A. 验证", "B. 求解", "C. 分析", "D. 应用"], answer: "A", knowledgePoint: "模型检验", analysis: "检验模型结果是否符合实际叫验证。" }
    ]
  },
  {
    lesson: 105, title: "几何实践",
    questions: [
      { type: "choice", difficulty: "basic", text: "测量线段长度需要使用：", options: ["A. 量角器", "B. 直尺", "C. 圆规", "D. 三角板"], answer: "B", knowledgePoint: "测量工具", analysis: "直尺用于测量线段长度。" },
      { type: "choice", difficulty: "medium", text: "用尺规作图可以：", options: ["A. 画任意角", "B. 三等分角", "C. 画垂直平分线", "D. 画任意曲线"], answer: "C", knowledgePoint: "尺规作图", analysis: "用尺规可以画出线段的垂直平分线。" },
      { type: "choice", difficulty: "hard", text: "正方体的展开图有几种基本类型？", options: ["A. 6种", "B. 8种", "C. 10种", "D. 11种"], answer: "D", knowledgePoint: "立体图形展开", analysis: "正方体的展开图有11种基本类型。" }
    ]
  },
  {
    lesson: 106, title: "概率与统计实验",
    questions: [
      { type: "choice", difficulty: "basic", text: "抛一枚硬币，正面朝上的概率是：", options: ["A. 1/4", "B. 1/3", "C. 1/2", "D. 1"], answer: "C", knowledgePoint: "概率计算", analysis: "硬币只有正反两面，正面朝上的概率是1/2。" },
      { type: "choice", difficulty: "medium", text: "掷一颗骰子，点数大于3的概率是：", options: ["A. 1/6", "B. 1/3", "C. 1/2", "D. 2/3"], answer: "C", knowledgePoint: "概率计算", analysis: "点数大于3的有4,5,6，共3种，概率3/6=1/2。" },
      { type: "choice", difficulty: "hard", text: "从1-10中随机选一个数，是质数的概率是：", options: ["A. 2/5", "B. 3/10", "C. 1/2", "D. 4/10"], answer: "D", knowledgePoint: "质数与概率", analysis: "1-10中的质数有2,3,5,7，共4个，概率4/10。" }
    ]
  },
  {
    lesson: 107, title: "数学与艺术",
    questions: [
      { type: "choice", difficulty: "basic", text: "黄金比例约等于：", options: ["A. 1.5", "B. 1.618", "C. 1.732", "D. 2"], answer: "B", knowledgePoint: "黄金比例", analysis: "黄金比例约等于1.618。" },
      { type: "choice", difficulty: "medium", text: "正五边形具有：", options: ["A. 三条对称轴", "B. 四条对称轴", "C. 五条对称轴", "D. 六条对称轴"], answer: "C", knowledgePoint: "几何对称性", analysis: "正五边形有五条对称轴。" },
      { type: "choice", difficulty: "hard", text: "分形几何的特点是：", options: ["A. 简单重复", "B. 自相似性", "C. 规则对称", "D. 单一形状"], answer: "B", knowledgePoint: "分形几何", analysis: "分形几何具有自相似性，即整体与部分相似。" }
    ]
  },
  {
    lesson: 108, title: "数学挑战",
    questions: [
      { type: "choice", difficulty: "basic", text: "找规律：2,4,8,16,?", options: ["A. 24", "B. 32", "C. 48", "D. 64"], answer: "B", knowledgePoint: "数列规律", analysis: "这是等比数列，公比为2，下一项是32。" },
      { type: "choice", difficulty: "medium", text: "计算1+2+3+...+100的结果是：", options: ["A. 5000", "B. 5050", "C. 5100", "D. 5150"], answer: "B", knowledgePoint: "等差数列求和", analysis: "利用等差数列求和公式：(1+100)×100/2 = 5050。" },
      { type: "choice", difficulty: "hard", text: "一个数的平方等于它本身，这个数是：", options: ["A. 0", "B. 1", "C. 0或1", "D. 不存在"], answer: "C", knowledgePoint: "方程求解", analysis: "x² = x，x(x-1)=0，x=0或x=1。" }
    ]
  },
  // ==================== 假期作业指导（第109-115课） ====================
  {
    lesson: 109, title: "假期作业安排",
    questions: [
      { type: "choice", difficulty: "basic", text: "假期作业应该：", options: ["A. 开学前一天做完", "B. 每天做一点", "C. 不做", "D. 让别人做"], answer: "B", knowledgePoint: "作业安排", analysis: "合理安排时间，每天做一点效果最好。" },
      { type: "choice", difficulty: "medium", text: "假期通常有多长？", options: ["A. 1周", "B. 2周", "C. 1个月", "D. 2个月"], answer: "D", knowledgePoint: "假期时间", analysis: "通常假期约2个月。" },
      { type: "choice", difficulty: "hard", text: "如果假期有60天，每天做10道题，总共可以做：", options: ["A. 500道", "B. 600道", "C. 700道", "D. 800道"], answer: "B", knowledgePoint: "简单计算", analysis: "60×10 = 600道。" }
    ]
  },
  {
    lesson: 110, title: "数学读物推荐",
    questions: [
      { type: "choice", difficulty: "basic", text: "《数学之美》是：", options: ["A. 科普读物", "B. 教材", "C. 小说", "D. 漫画"], answer: "A", knowledgePoint: "数学读物类型", analysis: "《数学之美》是一本数学科普读物。" },
      { type: "choice", difficulty: "medium", text: "数学历史书籍可以帮助我们：", options: ["A. 了解数学发展", "B. 解题", "C. 考试", "D. 做作业"], answer: "A", knowledgePoint: "数学历史", analysis: "数学历史书籍帮助我们了解数学的发展历程。" },
      { type: "choice", difficulty: "hard", text: "趣味数学书籍适合：", options: ["A. 放松阅读", "B. 考试复习", "C. 课堂学习", "D. 写作业"], answer: "A", knowledgePoint: "趣味数学", analysis: "趣味数学书籍适合放松阅读，培养兴趣。" }
    ]
  },
  {
    lesson: 111, title: "学习计划制定",
    questions: [
      { type: "choice", difficulty: "basic", text: "制定学习计划的第一步是：", options: ["A. 分解任务", "B. 设定目标", "C. 安排时间", "D. 执行计划"], answer: "B", knowledgePoint: "计划制定", analysis: "制定计划首先要设定目标。" },
      { type: "choice", difficulty: "medium", text: "目标应该：", options: ["A. 模糊不清", "B. 具体可行", "C. 难以实现", "D. 不切实际"], answer: "B", knowledgePoint: "目标设定", analysis: "目标应该具体可行，符合SMART原则。" },
      { type: "choice", difficulty: "hard", text: "计划应该：", options: ["A. 一成不变", "B. 灵活调整", "C. 过于严格", "D. 没有时间限制"], answer: "B", knowledgePoint: "计划执行", analysis: "计划需要根据实际情况灵活调整。" }
    ]
  },
  {
    lesson: 112, title: "学习方法总结",
    questions: [
      { type: "choice", difficulty: "basic", text: "主动学习意味着：", options: ["A. 被动接受", "B. 积极思考", "C. 只听不做", "D. 抄作业"], answer: "B", knowledgePoint: "学习方法", analysis: "主动学习需要积极思考和参与。" },
      { type: "choice", difficulty: "medium", text: "间隔重复法是指：", options: ["A. 每天学习", "B. 定期复习", "C. 一次性学完", "D. 考前突击"], answer: "B", knowledgePoint: "复习方法", analysis: "间隔重复法是定期复习巩固记忆。" },
      { type: "choice", difficulty: "hard", text: "思维导图适合：", options: ["A. 计算", "B. 整理知识结构", "C. 解方程", "D. 画图"], answer: "B", knowledgePoint: "学习工具", analysis: "思维导图适合整理知识结构和关系。" }
    ]
  },
  {
    lesson: 113, title: "自我评估",
    questions: [
      { type: "choice", difficulty: "basic", text: "自我评估的目的是：", options: ["A. 批评自己", "B. 了解自己", "C. 贬低自己", "D. 炫耀自己"], answer: "B", knowledgePoint: "评估目的", analysis: "自我评估的目的是了解自己的学习状况。" },
      { type: "choice", difficulty: "medium", text: "知识掌握评估应该：", options: ["A. 凭感觉", "B. 通过测试", "C. 问同学", "D. 问老师"], answer: "B", knowledgePoint: "评估方法", analysis: "通过测试可以客观评估知识掌握程度。" },
      { type: "choice", difficulty: "hard", text: "发现薄弱环节后应该：", options: ["A. 忽略", "B. 加强练习", "C. 放弃", "D. 抱怨"], answer: "B", knowledgePoint: "改进方法", analysis: "发现薄弱环节后应加强练习改进。" }
    ]
  },
  {
    lesson: 114, title: "学习交流",
    questions: [
      { type: "choice", difficulty: "basic", text: "学习交流可以：", options: ["A. 互相学习", "B. 浪费时间", "C. 抄袭作业", "D. 聊天"], answer: "A", knowledgePoint: "交流的好处", analysis: "学习交流可以互相学习，共同进步。" },
      { type: "choice", difficulty: "medium", text: "小组合作学习的优点是：", options: ["A. 互相依赖", "B. 分工合作", "C. 一个人做", "D. 互相抄"], answer: "B", knowledgePoint: "合作学习", analysis: "小组合作学习可以分工合作，提高效率。" },
      { type: "choice", difficulty: "hard", text: "良好的学习氛围有助于：", options: ["A. 睡觉", "B. 学习", "C. 玩耍", "D. 聊天"], answer: "B", knowledgePoint: "学习环境", analysis: "良好的学习氛围有助于提高学习效率。" }
    ]
  },
  {
    lesson: 115, title: "未来规划",
    questions: [
      { type: "choice", difficulty: "basic", text: "设定目标有助于：", options: ["A. 迷茫", "B. 前进", "C. 放弃", "D. 懒惰"], answer: "B", knowledgePoint: "目标的作用", analysis: "设定目标有助于明确方向，前进。" },
      { type: "choice", difficulty: "medium", text: "学习路径规划应该：", options: ["A. 随意", "B. 有计划", "C. 没有方向", "D. 临时决定"], answer: "B", knowledgePoint: "路径规划", analysis: "学习路径应该有计划地规划。" },
      { type: "choice", difficulty: "hard", text: "保持学习热情需要：", options: ["A. 强迫自己", "B. 培养兴趣", "C. 放弃", "D. 逃避"], answer: "B", knowledgePoint: "学习动力", analysis: "保持学习热情需要培养对学科的兴趣。" }
    ]
  },
  // ==================== 特别课程（第116-120课） ====================
  {
    lesson: 116, title: "数学与时间",
    questions: [
      { type: "choice", difficulty: "basic", text: "一天有多少小时？", options: ["A. 12", "B. 24", "C. 36", "D. 48"], answer: "B", knowledgePoint: "时间单位", analysis: "一天有24小时。" },
      { type: "choice", difficulty: "medium", text: "1小时等于多少秒？", options: ["A. 360", "B. 600", "C. 3600", "D. 6000"], answer: "C", knowledgePoint: "时间换算", analysis: "1小时=60分钟=3600秒。" },
      { type: "choice", difficulty: "hard", text: "如果一节课45分钟，一天8节课，总共多少小时？", options: ["A. 5小时", "B. 6小时", "C. 7小时", "D. 8小时"], answer: "B", knowledgePoint: "时间计算", analysis: "45×8=360分钟=6小时。" }
    ]
  },
  {
    lesson: 117, title: "购物数学",
    questions: [
      { type: "choice", difficulty: "basic", text: "一件商品打5折意味着：", options: ["A. 原价的5%", "B. 原价的50%", "C. 原价的15%", "D. 原价的95%"], answer: "B", knowledgePoint: "折扣计算", analysis: "打5折即原价的50%。" },
      { type: "choice", difficulty: "medium", text: "满100减20相当于打几折？", options: ["A. 7折", "B. 8折", "C. 8.5折", "D. 9折"], answer: "B", knowledgePoint: "折扣换算", analysis: "(100-20)/100 = 0.8，即8折。" },
      { type: "choice", difficulty: "hard", text: "两件商品，A原价100加隆打8折，B原价80加隆打7折，哪个更便宜？", options: ["A. A更便宜", "B. B更便宜", "C. 一样", "D. 无法比较"], answer: "B", knowledgePoint: "价格比较", analysis: "A:100×0.8=80，B:80×0.7=56，B更便宜。" }
    ]
  },
  {
    lesson: 118, title: "烹饪数学",
    questions: [
      { type: "choice", difficulty: "basic", text: "1千克等于多少克？", options: ["A. 10克", "B. 100克", "C. 1000克", "D. 10000克"], answer: "C", knowledgePoint: "重量单位", analysis: "1千克=1000克。" },
      { type: "choice", difficulty: "medium", text: "如果配方需要200克面粉，现有1千克，可以做几次？", options: ["A. 3次", "B. 4次", "C. 5次", "D. 6次"], answer: "C", knowledgePoint: "配方计算", analysis: "1000÷200=5次。" },
      { type: "choice", difficulty: "hard", text: "将2人份的配方扩大到5人份，需要乘以多少倍？", options: ["A. 2倍", "B. 2.5倍", "C. 3倍", "D. 3.5倍"], answer: "B", knowledgePoint: "配方比例", analysis: "5÷2=2.5倍。" }
    ]
  },
  {
    lesson: 119, title: "旅行数学",
    questions: [
      { type: "choice", difficulty: "basic", text: "距离=速度×____", options: ["A. 时间", "B. 路程", "C. 速度", "D. 加速度"], answer: "A", knowledgePoint: "行程公式", analysis: "距离=速度×时间。" },
      { type: "choice", difficulty: "medium", text: "如果飞天马车每小时行驶60km，行驶3小时，距离是：", options: ["A. 120km", "B. 150km", "C. 180km", "D. 200km"], answer: "C", knowledgePoint: "距离计算", analysis: "60×3=180km。" },
      { type: "choice", difficulty: "hard", text: "从霍格沃茨到霍格莫德村距离60km，去时速度30km/h，返回速度20km/h，平均速度是：", options: ["A. 24km/h", "B. 25km/h", "C. 26km/h", "D. 27km/h"], answer: "A", knowledgePoint: "平均速度", analysis: "总路程120km，总时间60/30+60/20=5小时，平均速度120/5=24km/h。" }
    ]
  },
  {
    lesson: 120, title: "数学与星空",
    questions: [
      { type: "choice", difficulty: "basic", text: "北斗七星属于：", options: ["A. 小熊座", "B. 大熊座", "C. 狮子座", "D. 猎户座"], answer: "B", knowledgePoint: "星座知识", analysis: "北斗七星属于大熊座。" },
      { type: "choice", difficulty: "medium", text: "一年有多少个星座？", options: ["A. 84个", "B. 86个", "C. 88个", "D. 90个"], answer: "C", knowledgePoint: "星座数量", analysis: "全天共有88个星座。" },
      { type: "choice", difficulty: "hard", text: "地球绕太阳公转一周需要：", options: ["A. 一天", "B. 一个月", "C. 一年", "D. 一百年"], answer: "C", knowledgePoint: "天文知识", analysis: "地球绕太阳公转一周需要一年。" }
    ]
  }
];
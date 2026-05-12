/**
 * math-questionBank.js
 * 麻瓜学术 · 数学 · 题库
 * 每课 3 题（难度 1/2/3），共 210 题
 */

export const questionBank = [

  // ── 第1章 数与运算 ──────────────────────────────────────────

  { lesson: 1, questions: [
    { type:'choice', difficulty:1, text:'下列数中，既不是正整数也不是负整数的是？', options:['A. 5','B. −3','C. 0','D. 100'], answer:'C', knowledgePoint:'正整数、负整数与零', analysis:'零是整数，但不属于正整数也不属于负整数，是整数中的中性成员。' },
    { type:'choice', difficulty:2, text:'在数轴上，−4 与 −1 的大小关系是？', options:['A. −4 > −1','B. −4 = −1','C. −4 < −1','D. 无法比较'], answer:'C', knowledgePoint:'整数的大小比较', analysis:'数轴上越靠右越大。−1 在 −4 右侧，故 −4 < −1。' },
    { type:'choice', difficulty:3, text:'两次魔药效力测试结果分别是 −5 和 +2（正数表示超出预期）。绝对值更大的是哪次？', options:['A. 第一次（−5）','B. 第二次（+2）','C. 两次相同','D. 无法判断'], answer:'A', knowledgePoint:'绝对值的概念', analysis:'|−5| = 5，|+2| = 2，5 > 2，第一次偏差绝对值更大。' }
  ]},

  { lesson: 2, questions: [
    { type:'choice', difficulty:1, text:'分数 12/18 化简后是？', options:['A. 6/9','B. 2/3','C. 4/6','D. 3/4'], answer:'B', knowledgePoint:'等值分数与化简', analysis:'12 和 18 的最大公因数是 6。12÷6=2，18÷6=3，化简为 2/3。' },
    { type:'choice', difficulty:2, text:'计算 ¾ + ⅙，结果是？', options:['A. 4/10','B. 11/12','C. 2/5','D. 9/10'], answer:'B', knowledgePoint:'分数的加减法', analysis:'最小公倍数 12。¾=9/12，⅙=2/12，相加得 11/12。' },
    { type:'choice', difficulty:3, text:'魔药配方需要 2¾ 瓶蛇眼草汁，已用了 1⅓ 瓶，还需多少？', options:['A. 1½ 瓶','B. 1 5/12 瓶','C. 1¼ 瓶','D. 1⅓ 瓶'], answer:'B', knowledgePoint:'带分数与假分数', analysis:'2¾ − 1⅓ = 11/4 − 4/3。公倍数 12：33/12 − 16/12 = 17/12 = 1 5/12 瓶。' }
  ]},

  { lesson: 3, questions: [
    { type:'choice', difficulty:1, text:'0.375 等于哪个分数？', options:['A. 3/8','B. 3/7','C. 37/100','D. 3/5'], answer:'A', knowledgePoint:'小数与分数的转换', analysis:'0.375 = 375/1000 = 3/8。验算：3÷8 = 0.375。' },
    { type:'choice', difficulty:2, text:'某魔法药材原价 40 加隆，涨价 15% 后新价格是？', options:['A. 44 加隆','B. 46 加隆','C. 55 加隆','D. 34 加隆'], answer:'B', knowledgePoint:'增减百分比', analysis:'40 × 1.15 = 46 加隆。' },
    { type:'choice', difficulty:3, text:'某魔药浓度 60%，先降低 20%，再提高 25%，最终浓度是？', options:['A. 60%','B. 65%','C. 58%','D. 75%'], answer:'A', knowledgePoint:'百分比的计算', analysis:'60% × 0.8 = 48%，48% × 1.25 = 60%。连续百分比不能简单叠加。' }
  ]},

  { lesson: 4, questions: [
    { type:'choice', difficulty:1, text:'2⁵ 的值是？', options:['A. 10','B. 25','C. 32','D. 16'], answer:'C', knowledgePoint:'乘方的概念与符号', analysis:'2⁵ = 2×2×2×2×2 = 32。' },
    { type:'choice', difficulty:2, text:'若 x² = 49，x 的所有可能值是？', options:['A. 只有 7','B. 只有 −7','C. 7 或 −7','D. 无解'], answer:'C', knowledgePoint:'平方与平方根', analysis:'7² = 49，(−7)² = 49，故 x = ±7。正数有两个平方根。' },
    { type:'choice', difficulty:3, text:'4⁻² 等于？', options:['A. −16','B. 1/16','C. −8','D. 1/8'], answer:'B', knowledgePoint:'指数为0与负数的初探', analysis:'4⁻² = 1/4² = 1/16。负指数表示倒数。' }
  ]},

  { lesson: 5, questions: [
    { type:'choice', difficulty:1, text:'比 15∶25 化简后是？', options:['A. 3∶5','B. 5∶3','C. 3∶4','D. 1∶2'], answer:'A', knowledgePoint:'比的定义与化简', analysis:'最大公因数 5。15÷5=3，25÷5=5，化简为 3∶5。' },
    { type:'choice', difficulty:2, text:'若 x∶12 = 5∶4，则 x 等于？', options:['A. 10','B. 15','C. 20','D. 9.6'], answer:'B', knowledgePoint:'比例的意义', analysis:'交叉相乘：4x = 60，x = 15。' },
    { type:'choice', difficulty:3, text:'魔药需要曼德拉草汁与月光草汁比例为 2∶3，共配 500 毫升，需曼德拉草汁多少毫升？', options:['A. 150','B. 200','C. 250','D. 300'], answer:'B', knowledgePoint:'比例在配制中的应用', analysis:'500 × 2/(2+3) = 500 × 2/5 = 200 毫升。' }
  ]},

  // ── 第2章 空间入门 ──────────────────────────────────────────

  { lesson: 6, questions: [
    { type:'choice', difficulty:1, text:'钝角的度数范围是？', options:['A. 0° 到 90°','B. 恰好 90°','C. 90° 到 180°','D. 180° 到 360°'], answer:'C', knowledgePoint:'锐角、直角、钝角、平角', analysis:'钝角：90° < θ < 180°。' },
    { type:'choice', difficulty:2, text:'某角的余角是 37°，该角是多少度？', options:['A. 143°','B. 53°','C. 37°','D. 63°'], answer:'B', knowledgePoint:'互补角与互余角', analysis:'互余：两角之和为 90°。该角 = 90° − 37° = 53°。' },
    { type:'choice', difficulty:3, text:'两个互补角，较大角比较小角大 40°，较大角是多少度？', options:['A. 70°','B. 110°','C. 120°','D. 130°'], answer:'B', knowledgePoint:'互补角与互余角', analysis:'设较小角为 x，则 x+(x+40°)=180°，2x=140°，x=70°，较大角=110°。' }
  ]},

  { lesson: 7, questions: [
    { type:'choice', difficulty:1, text:'三角形两内角为 50° 和 70°，第三个内角是？', options:['A. 50°','B. 60°','C. 70°','D. 120°'], answer:'B', knowledgePoint:'三角形内角和为180°', analysis:'第三角 = 180° − 50° − 70° = 60°。' },
    { type:'choice', difficulty:2, text:'等腰三角形顶角为 40°，底角各是多少？', options:['A. 40°','B. 60°','C. 70°','D. 80°'], answer:'C', knowledgePoint:'等腰三角形的性质', analysis:'底角 = (180° − 40°) ÷ 2 = 70°。' },
    { type:'choice', difficulty:3, text:'三条线段 5、9、x 能构成三角形，x 的范围是？', options:['A. 4 < x < 14','B. x > 4','C. x < 14','D. 任意正数'], answer:'A', knowledgePoint:'三角形不等式', analysis:'需满足：5+9>x → x<14；5+x>9 → x>4。取交集：4 < x < 14。' }
  ]},

  { lesson: 8, questions: [
    { type:'choice', difficulty:1, text:'正六边形的内角和是多少度？', options:['A. 540°','B. 720°','C. 900°','D. 1080°'], answer:'B', knowledgePoint:'多边形内角和公式', analysis:'(6−2)×180° = 4×180° = 720°。' },
    { type:'choice', difficulty:2, text:'下列说法错误的是？', options:['A. 正方形是特殊长方形','B. 长方形是特殊平行四边形','C. 菱形是特殊正方形','D. 正方形是特殊菱形'], answer:'C', knowledgePoint:'正方形、长方形、平行四边形', analysis:'菱形四边相等但不一定有直角，不是正方形的特例。正方形才是特殊菱形。' },
    { type:'choice', difficulty:3, text:'一正多边形每个内角为 150°，有几条边？', options:['A. 10','B. 12','C. 15','D. 8'], answer:'B', knowledgePoint:'正多边形', analysis:'(n−2)×180°÷n=150°，解得 30n=360，n=12。' }
  ]},

  { lesson: 9, questions: [
    { type:'choice', difficulty:1, text:'半径为 7 的圆，面积约为（π≈3.14）？', options:['A. 44','B. 154','C. 22','D. 49'], answer:'B', knowledgePoint:'面积公式 A = πr²', analysis:'A = 3.14 × 49 ≈ 153.86 ≈ 154。' },
    { type:'choice', difficulty:2, text:'一圆周长为 31.4（π≈3.14），其半径是？', options:['A. 3','B. 4','C. 5','D. 10'], answer:'C', knowledgePoint:'周长公式 C = 2πr', analysis:'r = C/(2π) = 31.4/6.28 = 5。' },
    { type:'choice', difficulty:3, text:'圆心角 120°、半径 6 的扇形面积是（π≈3.14）？', options:['A. 12.56','B. 37.68','C. 75.36','D. 18.84'], answer:'B', knowledgePoint:'弧长与扇形面积', analysis:'(120/360)×π×36 = (1/3)×3.14×36 ≈ 37.68。' }
  ]},

  { lesson: 10, questions: [
    { type:'choice', difficulty:1, text:'点 (−3, 5) 位于哪个象限？', options:['A. 第一象限','B. 第二象限','C. 第三象限','D. 第四象限'], answer:'B', knowledgePoint:'四个象限', analysis:'x<0，y>0，在第二象限。' },
    { type:'choice', difficulty:2, text:'点 A(2, 3) 与 B(2, −1) 的距离是？', options:['A. 2','B. 3','C. 4','D. 5'], answer:'C', knowledgePoint:'点的坐标表示法', analysis:'x 坐标相同，距离 = |3−(−1)| = 4。' },
    { type:'choice', difficulty:3, text:'守门员在 (0,0)，追球手在 (3,4)，两者直线距离是？', options:['A. 5','B. 7','C. 6','D. 12'], answer:'A', knowledgePoint:'笛卡尔坐标系', analysis:'距离 = √(3²+4²) = √25 = 5。' }
  ]},

  // ── 第3章 代数基础 ──────────────────────────────────────────

  { lesson: 11, questions: [
    { type:'choice', difficulty:1, text:'当 x=3 时，4x−7 等于？', options:['A. 3','B. 5','C. 12','D. 7'], answer:'B', knowledgePoint:'代入求值', analysis:'4×3−7 = 12−7 = 5。' },
    { type:'choice', difficulty:2, text:'化简 3x+5y−x+2y，结果是？', options:['A. 2x+7y','B. 3x+7y','C. 2x+3y','D. 4x+7y'], answer:'A', knowledgePoint:'化简同类项', analysis:'3x−x=2x，5y+2y=7y，结果 2x+7y。' },
    { type:'choice', difficulty:3, text:'(3x+2y)−(x−4y) 等于？', options:['A. 2x+6y','B. 2x−2y','C. 4x−2y','D. 2x+2y'], answer:'A', knowledgePoint:'代数式的加减', analysis:'= 3x+2y−x+4y = 2x+6y。减号进括号，里面每项变号。' }
  ]},

  { lesson: 12, questions: [
    { type:'choice', difficulty:1, text:'解 x+9=16，x 等于？', options:['A. 25','B. 7','C. 8','D. 9'], answer:'B', knowledgePoint:'一步、两步解方程', analysis:'x = 16−9 = 7。' },
    { type:'choice', difficulty:2, text:'解 3x−4=11，x 等于？', options:['A. 3','B. 4','C. 5','D. 7'], answer:'C', knowledgePoint:'移项变号', analysis:'3x=15，x=5。验算：3×5−4=11 ✓' },
    { type:'choice', difficulty:3, text:'x 毫升浓缩液与 3x+5 毫升稀释液混合，总量 45 毫升，x 等于？', options:['A. 8','B. 10','C. 12','D. 15'], answer:'B', knowledgePoint:'等式的性质', analysis:'x+(3x+5)=45，4x+5=45，4x=40，x=10。' }
  ]},

  { lesson: 13, questions: [
    { type:'choice', difficulty:1, text:'解不等式 x+3>10，解集是？', options:['A. x>13','B. x>7','C. x<7','D. x<13'], answer:'B', knowledgePoint:'解一元一次不等式', analysis:'两边减 3：x>7。' },
    { type:'choice', difficulty:2, text:'解 −2x≥8，解集是？', options:['A. x≥4','B. x≥−4','C. x≤4','D. x≤−4'], answer:'D', knowledgePoint:'乘除负数时变向', analysis:'除以 −2，方向反转：x≤−4。' },
    { type:'choice', difficulty:3, text:'3x+1<2x+5 且 x>0 同时成立，x 的范围是？', options:['A. 0<x<4','B. x>4','C. x<4','D. x<0'], answer:'A', knowledgePoint:'解一元一次不等式', analysis:'第一式 → x<4，结合 x>0，取交集：0<x<4。' }
  ]},

  { lesson: 14, questions: [
    { type:'choice', difficulty:1, text:'联立 x+y=7 和 x−y=3，x 等于？', options:['A. 2','B. 4','C. 5','D. 7'], answer:'C', knowledgePoint:'加减消元法', analysis:'两式相加：2x=10，x=5。代入得 y=2。' },
    { type:'choice', difficulty:2, text:'联立 2x+y=9 和 x=y+3，解是？', options:['A. x=4,y=1','B. x=3,y=3','C. x=5,y=2','D. x=4,y=2'], answer:'A', knowledgePoint:'代入消元法', analysis:'代入：2(y+3)+y=9，3y=3，y=1，x=4。' },
    { type:'choice', difficulty:3, text:'甲乙两人共工作 3 天酿 30 瓶魔药，甲每天比乙多酿 2 瓶，甲每天酿几瓶？', options:['A. 4','B. 5','C. 6','D. 7'], answer:'C', knowledgePoint:'联立方程初步', analysis:'设甲 a 瓶、乙 b 瓶：3(a+b)=30 → a+b=10；a−b=2。解得 a=6。' }
  ]},

  { lesson: 15, questions: [
    { type:'choice', difficulty:1, text:'f(x)=3x−2，f(4) 等于？', options:['A. 10','B. 12','C. 14','D. 8'], answer:'A', knowledgePoint:'函数表达式与图像', analysis:'f(4)=3×4−2=10。' },
    { type:'choice', difficulty:2, text:'f(x)=2x+5 的斜率和 y 轴截距分别是？', options:['A. 斜率5，截距2','B. 斜率2，截距5','C. 斜率−2，截距5','D. 斜率2，截距−5'], answer:'B', knowledgePoint:'线性函数的斜率', analysis:'f(x)=mx+c 中，m=2 是斜率，c=5 是截距。' },
    { type:'choice', difficulty:3, text:'f(x)=√x 的定义域是？', options:['A. 所有实数','B. x>0','C. x≥0','D. 所有整数'], answer:'C', knowledgePoint:'函数的定义域与值域', analysis:'平方根要求被开方数非负，x≥0（含 x=0，因为 √0=0 有意义）。' }
  ]},

  // ── 第4章 度量与统计 ──────────────────────────────────────────

  { lesson: 16, questions: [
    { type:'choice', difficulty:1, text:'底 8、高 5 的三角形面积是？', options:['A. 20','B. 40','C. 13','D. 80'], answer:'A', knowledgePoint:'三角形面积', analysis:'½×8×5=20。' },
    { type:'choice', difficulty:2, text:'上底 4、下底 10、高 6 的梯形面积是？', options:['A. 42','B. 60','C. 84','D. 30'], answer:'A', knowledgePoint:'梯形面积', analysis:'½×(4+10)×6=½×14×6=42。' },
    { type:'choice', difficulty:3, text:'8×6 长方形去掉右上角 3×2 小矩形，L 形面积是？', options:['A. 48','B. 42','C. 54','D. 46'], answer:'B', knowledgePoint:'复合图形面积', analysis:'48−3×2=48−6=42。' }
  ]},

  { lesson: 17, questions: [
    { type:'choice', difficulty:1, text:'长5、宽4、高3的长方体体积是？', options:['A. 12','B. 47','C. 60','D. 94'], answer:'C', knowledgePoint:'长方体与正方体', analysis:'5×4×3=60。' },
    { type:'choice', difficulty:2, text:'底面半径3、高10的圆柱体积是（π≈3.14）？', options:['A. 188.4','B. 282.6','C. 94.2','D. 376.8'], answer:'B', knowledgePoint:'圆柱的体积', analysis:'π×9×10=3.14×90=282.6。' },
    { type:'choice', difficulty:3, text:'底面半径6、高8的圆锥体积是（π≈3.14）？', options:['A. 150.7','B. 301.4','C. 904.3','D. 200.96'], answer:'B', knowledgePoint:'棱锥与圆锥的体积', analysis:'(1/3)×π×36×8=(1/3)×3.14×288=(1/3)×904.32≈301.4。' }
  ]},

  { lesson: 18, questions: [
    { type:'choice', difficulty:1, text:'直角三角形两直角边为 6 和 8，斜边是？', options:['A. 10','B. 12','C. 14','D. 7'], answer:'A', knowledgePoint:'a² + b² = c²', analysis:'c=√(36+64)=√100=10。经典勾股数 6-8-10。' },
    { type:'choice', difficulty:2, text:'三边 5、12、13 的三角形是？', options:['A. 锐角三角形','B. 直角三角形','C. 钝角三角形','D. 等腰三角形'], answer:'B', knowledgePoint:'判断直角三角形', analysis:'5²+12²=25+144=169=13²，满足勾股定理，是直角三角形。' },
    { type:'choice', difficulty:3, text:'扫帚水平飞行 24 米，同时垂直上升 7 米，飞行路径长度是？', options:['A. 31','B. 25','C. 17','D. 28'], answer:'B', knowledgePoint:'勾股定理的应用', analysis:'√(24²+7²)=√(576+49)=√625=25。' }
  ]},

  { lesson: 19, questions: [
    { type:'choice', difficulty:1, text:'40 名学生中 24 人喜欢魁地奇，频率是？', options:['A. 24%','B. 40%','C. 60%','D. 0.024'], answer:'C', knowledgePoint:'频率与频数', analysis:'24/40=0.6=60%。' },
    { type:'choice', difficulty:2, text:'关于总体与样本，正确的是？', options:['A. 样本等于总体','B. 总体从样本中抽取','C. 样本量越大越能代表总体','D. 任何样本都等价'], answer:'C', knowledgePoint:'总体与样本', analysis:'样本量越大，统计结果越稳定，对总体的估计越准确。' },
    { type:'choice', difficulty:3, text:'数据 21,22,23,24,25,26,28 的中位数是？', options:['A. 24','B. 23','C. 25','D. 22'], answer:'A', knowledgePoint:'频率分布表', analysis:'共 7 个数，从小到大排列，第 4 个是 24。' }
  ]},

  { lesson: 20, questions: [
    { type:'choice', difficulty:1, text:'数据 3,7,7,8,5 的众数是？', options:['A. 3','B. 5','C. 7','D. 8'], answer:'C', knowledgePoint:'三种平均值的计算', analysis:'7 出现 2 次，其余各 1 次，众数为 7。' },
    { type:'choice', difficulty:2, text:'公平硬币掷两次，至少一次正面的概率是？', options:['A. 1/4','B. 1/2','C. 3/4','D. 1'], answer:'C', knowledgePoint:'互斥事件与互补事件', analysis:'P=1−P(两次反面)=1−(1/2)²=3/4。用互补更快。' },
    { type:'choice', difficulty:3, text:'少数极富家庭学生将零花钱均值拉高，代表"普通学生"水平最合适的统计量是？', options:['A. 均值','B. 中位数','C. 众数','D. 最大值'], answer:'B', knowledgePoint:'各平均值的适用场合', analysis:'中位数不受极端值影响，适合含有异常高值的收入/财富类数据。' }
  ]},

  // ── 第5章 数论基础 ──────────────────────────────────────────

  { lesson: 21, questions: [
    { type:'choice', difficulty:1, text:'下列数中是质数的是？', options:['A. 1','B. 9','C. 13','D. 15'], answer:'C', knowledgePoint:'质数与合数的定义', analysis:'1 既不是质数也不是合数。9=3×3，15=3×5 是合数。13 只能被 1 和 13 整除，是质数。' },
    { type:'choice', difficulty:2, text:'24 和 36 的最大公因数是？', options:['A. 6','B. 12','C. 4','D. 8'], answer:'B', knowledgePoint:'最大公因数与最小公倍数', analysis:'24=2³×3，36=2²×3²。GCD=2²×3=12。' },
    { type:'choice', difficulty:3, text:'60 的完整质因数分解是？', options:['A. 2×30','B. 4×15','C. 2²×3×5','D. 2³×3×5'], answer:'C', knowledgePoint:'质因数分解的唯一性', analysis:'60=2×2×3×5=2²×3×5。' }
  ]},

  { lesson: 22, questions: [
    { type:'choice', difficulty:1, text:'17 除以 5 的余数是？', options:['A. 1','B. 2','C. 3','D. 0'], answer:'B', knowledgePoint:'余数的定义', analysis:'17=5×3+2，余数为 2。' },
    { type:'choice', difficulty:2, text:'下列数中能被 9 整除的是？', options:['A. 451','B. 567','C. 124','D. 218'], answer:'B', knowledgePoint:'整除的判断规则', analysis:'各位数字之和：5+6+7=18，18÷9=2，能整除。' },
    { type:'choice', difficulty:3, text:'求 GCD(48, 18)，用辗转相除法，结果是？', options:['A. 3','B. 6','C. 9','D. 12'], answer:'B', knowledgePoint:'辗转相除法', analysis:'48=2×18+12；18=1×12+6；12=2×6+0。最后非零余数为 6，GCD=6。' }
  ]},

  { lesson: 23, questions: [
    { type:'choice', difficulty:1, text:'A={1,2,3,4}，B={3,4,5,6}，A∩B 是？', options:['A. {1,2,3,4,5,6}','B. {3,4}','C. {1,2}','D. {5,6}'], answer:'B', knowledgePoint:'交集与并集', analysis:'交集是同时属于两个集合的元素：{3,4}。' },
    { type:'choice', difficulty:2, text:'A={1,2,3,4}，B={3,4,5,6}，A∪B 是？', options:['A. {3,4}','B. {1,2,5,6}','C. {1,2,3,4,5,6}','D. {1,2,4,5,6}'], answer:'C', knowledgePoint:'交集与并集', analysis:'并集包含所有属于 A 或 B 的元素，每个写一次：{1,2,3,4,5,6}。' },
    { type:'choice', difficulty:3, text:'学魔咒学 20 人，学草药学 15 人，两者都学的 8 人，只学其中一门的共多少人？', options:['A. 19','B. 27','C. 35','D. 43'], answer:'A', knowledgePoint:'韦恩图', analysis:'只学魔咒学：20−8=12，只学草药学：15−8=7，共 12+7=19 人。' }
  ]},

  { lesson: 24, questions: [
    { type:'choice', difficulty:1, text:'"所有偶数都能被 4 整除"是？', options:['A. 真命题','B. 假命题，6 是反例','C. 假命题，3 是反例','D. 无法判断'], answer:'B', knowledgePoint:'真命题与假命题', analysis:'6 是偶数但 6÷4=1 余 2，不能被 4 整除，是一个反例。' },
    { type:'choice', difficulty:2, text:'"若 x²=4 则 x=2"的逆命题是？', options:['A. 若 x=2 则 x²=4','B. 若 x²≠4 则 x≠2','C. 若 x≠2 则 x²≠4','D. 若 x=2 则 x²≠4'], answer:'A', knowledgePoint:'逆命题与否命题', analysis:'"若 P 则 Q"的逆命题是"若 Q 则 P"。P：x²=4，Q：x=2，逆命题：若 x=2 则 x²=4。' },
    { type:'choice', difficulty:3, text:'证明"存在偶数质数"，最有效的方法是？', options:['A. 反证法','B. 数学归纳法','C. 给出具体例子','D. 穷举所有偶数'], answer:'C', knowledgePoint:'反例的意义', analysis:'证明"存在"只需一个构造性例子：2 是质数也是偶数。' }
  ]},

  { lesson: 25, questions: [
    { type:'choice', difficulty:1, text:'反证法证明"若 n² 是奇数则 n 是奇数"，起点假设是？', options:['A. 假设 n 是奇数','B. 假设 n 是偶数','C. 假设 n² 是偶数','D. 假设 n 是正数'], answer:'B', knowledgePoint:'反证法', analysis:'反证法假设结论不成立。结论"n 是奇数"的否定是"n 是偶数"，从此出发推矛盾。' },
    { type:'choice', difficulty:2, text:'数学归纳法需要证明哪两件事？', options:['A. P(1)成立；P(k)成立时P(k+1)成立','B. P(1)成立；P(k+1)成立时P(k)成立','C. P(n)对偶数成立；P(n)对奇数成立','D. P(1)成立；P(2)成立'], answer:'A', knowledgePoint:'简单数学证明', analysis:'基础步骤证 P(1)，归纳步骤证 P(k)→P(k+1)，两者缺一不可。' },
    { type:'choice', difficulty:3, text:'"能被 6 整除的数能被 2 和 3 整除"，直接证明的正确路线是？', options:['A. 设n=6k，则n=2(3k)被2整除，n=3(2k)被3整除','B. 设n被2整除，则n=2k，代入可知被6整除','C. 举例：6、12、18都能被2和3整除','D. 反证：若不被2整除，则不被6整除'], answer:'A', knowledgePoint:'直接证明法', analysis:'设 n=6k，n=2×(3k) 故被 2 整除，n=3×(2k) 故被 3 整除。直接证明写出推导链。' }
  ]},

  // ── 第6章 综合应用 ──────────────────────────────────────────

  { lesson: 26, questions: [
    { type:'choice', difficulty:1, text:'两相似三角形对应边为 6 和 9，比例因子是？', options:['A. 1∶2','B. 2∶3','C. 3∶2','D. 1∶3'], answer:'B', knowledgePoint:'比例因子', analysis:'比例因子 = 6∶9 = 2∶3。' },
    { type:'choice', difficulty:2, text:'相似图形比例因子为 1∶3，面积比是？', options:['A. 1∶3','B. 1∶6','C. 1∶9','D. 1∶27'], answer:'C', knowledgePoint:'相似图形的定义', analysis:'面积比 = 比例因子的平方：(1∶3)² = 1∶9。' },
    { type:'choice', difficulty:3, text:'地图比例尺 1∶50000，图上 4 厘米代表实际多少千米？', options:['A. 0.5','B. 1','C. 2','D. 4'], answer:'C', knowledgePoint:'比例在地图与模型中的应用', analysis:'4cm×50000=200000cm=2000m=2km。' }
  ]},

  { lesson: 27, questions: [
    { type:'choice', difficulty:1, text:'点 (3,4) 向左平移 5 个单位后坐标是？', options:['A. (8,4)','B. (−2,4)','C. (3,−1)','D. (3,9)'], answer:'B', knowledgePoint:'变换的坐标描述', analysis:'向左 x 减 5：(3−5, 4) = (−2, 4)。' },
    { type:'choice', difficulty:2, text:'点 (2,3) 关于 x 轴反射后坐标是？', options:['A. (−2,3)','B. (2,−3)','C. (−2,−3)','D. (3,2)'], answer:'B', knowledgePoint:'三种变换的定义', analysis:'关于 x 轴反射：x 不变，y 变号。(2,3)→(2,−3)。' },
    { type:'choice', difficulty:3, text:'正方形具有哪些对称性？', options:['A. 只有轴对称','B. 只有中心对称','C. 既有轴对称也有中心对称','D. 两者都没有'], answer:'C', knowledgePoint:'中心对称与轴对称', analysis:'正方形有 4 条对称轴（轴对称），绕中心旋转 180° 重合（中心对称）。' }
  ]},

  { lesson: 28, questions: [
    { type:'choice', difficulty:1, text:'展示四个学院学生人数构成比例，最合适的图是？', options:['A. 折线图','B. 散点图','C. 饼图','D. 茎叶图'], answer:'C', knowledgePoint:'根据目的选图', analysis:'饼图展示各部分占整体的比例，适合此场景。' },
    { type:'choice', difficulty:2, text:'直方图与条形图的主要区别是？', options:['A. 直方图有颜色','B. 直方图条间无空隙，横轴是连续数值','C. 条形图只用于频率','D. 两者完全相同'], answer:'B', knowledgePoint:'直方图与频率分布', analysis:'直方图横轴是连续区间，条形无空隙，面积代表频率；条形图横轴是离散分类。' },
    { type:'choice', difficulty:3, text:'研究扫帚速度与比赛得分的关系，应用哪种图？', options:['A. 饼图','B. 折线图','C. 散点图','D. 条形图'], answer:'C', knowledgePoint:'散点图', analysis:'探索两个数值变量的关系用散点图，观察点的分布趋势。' }
  ]},

  { lesson: 29, questions: [
    { type:'choice', difficulty:1, text:'袋中 3 红 2 蓝球，随机取一个，取到红球的概率是？', options:['A. 2/5','B. 3/5','C. 1/2','D. 3/2'], answer:'B', knowledgePoint:'理论概率的计算', analysis:'P=3/5。' },
    { type:'choice', difficulty:2, text:'掷硬币 100 次，正面 47 次，实验概率与理论概率关系是？', options:['A. 必须相等','B. 实验概率<理论概率','C. 实验概率>理论概率','D. 是不同概念，不一定相等，但次数多了会接近'], answer:'D', knowledgePoint:'实验概率与大数定律', analysis:'大数定律说次数足够多时会趋近，但单次实验不要求相等。' },
    { type:'choice', difficulty:3, text:'掷两枚公平骰子，点数之和为 7 的概率是？', options:['A. 1/6','B. 1/12','C. 7/36','D. 5/36'], answer:'A', knowledgePoint:'样本空间与事件', analysis:'总结果 36 种，和为 7 的有 (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) 共 6 种，P=6/36=1/6。' }
  ]},

  { lesson: 30, questions: [
    { type:'choice', difficulty:1, text:'数学建模中"假设"的作用是？', options:['A. 证明模型一定正确','B. 简化现实使问题可计算','C. 列举所有情况','D. 找到精确答案'], answer:'B', knowledgePoint:'假设的设立', analysis:'假设是对现实的简化，忽略次要因素，使数学处理可行。' },
    { type:'choice', difficulty:2, text:'模型预测与实际差距很大，最合适的做法是？', options:['A. 忽略差距','B. 舍弃数据','C. 检查假设，修正模型','D. 增大样本重复'], answer:'C', knowledgePoint:'模型的检验与修正', analysis:'预测偏差大说明模型有问题，应回检假设和方程，修正模型。' },
    { type:'choice', difficulty:3, text:'扫帚以 v km/h 匀速飞行 t 小时，若 v 翻倍、t 减半，距离 d 如何变？', options:['A. 翻倍','B. 减半','C. 不变','D. 变为 4 倍'], answer:'C', knowledgePoint:'变量的识别', analysis:'d=v×t。新 d=2v×(t/2)=vt=d，距离不变。' }
  ]},

  // ── 第7章 代数进阶（GCSE）──────────────────────────────────

  { lesson: 31, questions: [
    { type:'choice', difficulty:1, text:'x²−7x+12=0 因式分解后是？', options:['A. (x−3)(x−4)=0','B. (x+3)(x+4)=0','C. (x−3)(x+4)=0','D. (x+3)(x−4)=0'], answer:'A', knowledgePoint:'因式分解为两个括号', analysis:'需两数积=12、和=−7：(−3)×(−4)=12，(−3)+(−4)=−7，故(x−3)(x−4)。' },
    { type:'choice', difficulty:2, text:'解 x²−5x+6=0，解是？', options:['A. x=2或x=3','B. x=−2或x=−3','C. x=1或x=6','D. x=5或x=1'], answer:'A', knowledgePoint:'零积原理', analysis:'(x−2)(x−3)=0，x=2 或 x=3。' },
    { type:'choice', difficulty:3, text:'x²+2x+5=0 有多少个实数解？', options:['A. 两个不同实数解','B. 一个重解','C. 没有实数解','D. 无穷多'], answer:'C', knowledgePoint:'判别式初探', analysis:'Δ=4−20=−16<0，无实数解。' }
  ]},

  { lesson: 32, questions: [
    { type:'choice', difficulty:1, text:'用求根公式解 2x²+3x−2=0，正确代入是？', options:['A. x=(−3±√25)/4','B. x=(3±√25)/4','C. x=(−3±√25)/2','D. x=(−2±√20)/4'], answer:'A', knowledgePoint:'一元二次方程求根公式', analysis:'a=2,b=3,c=−2。x=(−3±√(9+16))/4=(−3±√25)/4。' },
    { type:'choice', difficulty:2, text:'x²+6x+7=0 配方后等价于？', options:['A. (x+3)²=2','B. (x+3)²=−2','C. (x+6)²=29','D. (x+3)²=16'], answer:'A', knowledgePoint:'配方的步骤', analysis:'x²+6x=−7，加 9：(x+3)²=2。' },
    { type:'choice', difficulty:3, text:'x²−4x+4=0 的解是？', options:['A. x=2或x=−2','B. x=4','C. x=2（重根）','D. 无实数解'], answer:'C', knowledgePoint:'重根与虚根的概念', analysis:'Δ=16−16=0，x=4/2=2，重根。也可验：(x−2)²=0。' }
  ]},

  { lesson: 33, questions: [
    { type:'choice', difficulty:1, text:'y=x²−4x+3 的对称轴是？', options:['A. x=−2','B. x=2','C. x=4','D. x=−4'], answer:'B', knowledgePoint:'抛物线的对称轴', analysis:'x=−b/(2a)=4/2=2。' },
    { type:'choice', difficulty:2, text:'y=2(x−3)²+1 的顶点坐标是？', options:['A. (3,1)','B. (−3,1)','C. (3,−1)','D. (2,1)'], answer:'A', knowledgePoint:'顶点坐标公式', analysis:'顶点式 y=a(x−h)²+k，顶点 (h,k)=(3,1)。' },
    { type:'choice', difficulty:3, text:'x²−2x+k=0 有两个不同实数解，k 的范围是？', options:['A. k<1','B. k>1','C. k=1','D. k<−1'], answer:'A', knowledgePoint:'判别式与图像的关系', analysis:'Δ=4−4k>0 → k<1。' }
  ]},

  { lesson: 34, questions: [
    { type:'choice', difficulty:1, text:'展开 (x+3)(x−2)，结果是？', options:['A. x²+x−6','B. x²−x−6','C. x²+5x−6','D. x²−6'], answer:'A', knowledgePoint:'乘积展开', analysis:'x²−2x+3x−6=x²+x−6。' },
    { type:'choice', difficulty:2, text:'展开 (2x+3)²，结果是？', options:['A. 4x²+9','B. 4x²+6x+9','C. 4x²+12x+9','D. 2x²+12x+9'], answer:'C', knowledgePoint:'完全平方公式与平方差公式', analysis:'(2x)²+2×2x×3+3²=4x²+12x+9。' },
    { type:'choice', difficulty:3, text:'(x²+3x+2)÷(x+1) 的结果是？', options:['A. x+2','B. x+3','C. x²+2','D. x+1'], answer:'A', knowledgePoint:'多项式除法初步', analysis:'x²+3x+2=(x+1)(x+2)，除以 (x+1) 得 x+2。' }
  ]},

  { lesson: 35, questions: [
    { type:'choice', difficulty:1, text:'方程组 x+ky=5 和 2x+y=6 中，k 是？', options:['A. 未知数','B. 参数','C. 常数 5','D. 无意义'], answer:'B', knowledgePoint:'参数的含义', analysis:'k 不是要解的量，而是控制方程性质的参数；x 和 y 是未知数。' },
    { type:'choice', difficulty:2, text:'方程组 x+y=3 和 x+y=5，解的情况是？', options:['A. 唯一解','B. 无解','C. 无穷多解','D. 两个解'], answer:'B', knowledgePoint:'无解与无数解的条件', analysis:'两方程左边相同，右边矛盾（3≠5），无解。几何上为两条平行线。' },
    { type:'choice', difficulty:3, text:'联立 3x+y=1 和 3x+3y=2，解是？', options:['A. x=1/6, y=1/2','B. 无解','C. 无穷多解','D. x=1, y=−2'], answer:'A', knowledgePoint:'含参方程组', analysis:'两式相减：2y=1，y=1/2。代入第一式：3x=1/2，x=1/6。' }
  ]},


  // ── 第8章 三角学（GCSE）────────────────────────────────────

  { lesson: 36, questions: [
    { type:'choice', difficulty:1, text:'直角三角形中，sin θ 的定义是？', options:['A. 邻边/斜边','B. 对边/斜边','C. 对边/邻边','D. 斜边/对边'], answer:'B', knowledgePoint:'正弦、余弦、正切的定义', analysis:'SOH：Sin=Opposite/Hypotenuse，sin θ = 对边/斜边。' },
    { type:'choice', difficulty:2, text:'sin 30° 等于？', options:['A. √3/2','B. 1/2','C. 1/√2','D. 1'], answer:'B', knowledgePoint:'特殊角的三角值', analysis:'sin 30° = 1/2。来自等边三角形对半切开的直角三角形。' },
    { type:'choice', difficulty:3, text:'直角三角形斜边为 10，一角为 37°（sin37°≈0.6），该角对边长是？', options:['A. 4','B. 5','C. 6','D. 8'], answer:'C', knowledgePoint:'直角三角形中三边的关系', analysis:'对边 = 斜边×sin37° = 10×0.6 = 6。' }
  ]},

  { lesson: 37, questions: [
    { type:'choice', difficulty:1, text:'从地面看一棵树顶的仰角为 45°，这意味着？', options:['A. 水平距离等于树高','B. 斜边长等于树高','C. 树高是水平距离的两倍','D. 无法确定关系'], answer:'A', knowledgePoint:'仰角与俯角', analysis:'tan 45°=1，对边/邻边=1，即树高/水平距离=1，树高=水平距离。' },
    { type:'choice', difficulty:2, text:'距树 20 米处，仰角 30°（tan30°≈0.577），树高约为？', options:['A. 11.5 米','B. 20 米','C. 34.6 米','D. 5.8 米'], answer:'A', knowledgePoint:'用三角比求边长或角度', analysis:'树高 = 20×tan30° ≈ 20×0.577 ≈ 11.5 米。' },
    { type:'choice', difficulty:3, text:'已知直角三角形两直角边为 3 和 4，较小锐角的 tan 值是？', options:['A. 3/4','B. 4/3','C. 3/5','D. 4/5'], answer:'A', knowledgePoint:'反三角函数', analysis:'斜边=5。对应较小锐角（对边3，邻边4），tan=3/4。' }
  ]},

  { lesson: 38, questions: [
    { type:'choice', difficulty:1, text:'正弦定理的表达式是？', options:['A. a/sinA=b/sinB=c/sinC','B. a²=b²+c²−2bc·cosA','C. sinA=a/b','D. a/cosA=b/cosB'], answer:'A', knowledgePoint:'正弦定理：a/sinA = b/sinB = c/sinC', analysis:'正弦定理：三边与对角正弦之比相等。' },
    { type:'choice', difficulty:2, text:'三角形 A=30°，a=5，b=8，sin30°=0.5，sinB 等于？', options:['A. 0.5','B. 0.6','C. 0.8','D. 1.0'], answer:'C', knowledgePoint:'正弦定理：a/sinA = b/sinB = c/sinC', analysis:'a/sinA=b/sinB → 5/0.5=8/sinB → sinB=8×0.5/5=0.8。' },
    { type:'choice', difficulty:3, text:'余弦定理：a²=b²+c²−2bc·cosA，当 A=90° 时退化为？', options:['A. a²=b²+c²','B. a=b+c','C. a²=b²−c²','D. a²=(b+c)²'], answer:'A', knowledgePoint:'余弦定理：a² = b² + c² - 2bc·cosA', analysis:'cos90°=0，所以 −2bc·cosA=0，退化为 a²=b²+c²，即勾股定理。' }
  ]},

  { lesson: 39, questions: [
    { type:'choice', difficulty:1, text:'sin x = 1/2，在 0°≤x≤360° 内，x 的所有解是？', options:['A. 只有 30°','B. 30° 和 150°','C. 30° 和 210°','D. 150° 和 330°'], answer:'B', knowledgePoint:'在给定范围内列出所有解', analysis:'主值 arcsin(1/2)=30°。sin 图像在 0°~360° 内还有对称解 180°−30°=150°。' },
    { type:'choice', difficulty:2, text:'cos x = −1/2，在 0°≤x≤360° 内的解是？', options:['A. 60° 和 300°','B. 120° 和 240°','C. 30° 和 150°','D. 120° 和 300°'], answer:'B', knowledgePoint:'基本三角方程', analysis:'cos为负在第二、三象限。arccos(1/2)=60°，故解为 180°−60°=120° 和 180°+60°=240°。' },
    { type:'choice', difficulty:3, text:'tan x = 1 的通解是（n 为整数）？', options:['A. x=45°+180°n','B. x=45°+360°n','C. x=45°+90°n','D. x=135°+180°n'], answer:'A', knowledgePoint:'方程的周期性解', analysis:'tan 的周期为 180°，主值 arctan(1)=45°，通解为 x=45°+180°n。' }
  ]},

  { lesson: 40, questions: [
    { type:'choice', difficulty:1, text:'方位角的测量起点和方向是？', options:['A. 正东，逆时针','B. 正北，顺时针','C. 正南，顺时针','D. 正西，逆时针'], answer:'B', knowledgePoint:'方位角', analysis:'方位角从正北方向顺时针量度，范围 000°~360°。' },
    { type:'choice', difficulty:2, text:'从 A 点看 B 点方位角为 060°，从 B 点看 A 点方位角约为？', options:['A. 060°','B. 120°','C. 240°','D. 300°'], answer:'C', knowledgePoint:'三角测量法', analysis:'反方位角 = 原方位角 ± 180°。60°+180°=240°。' },
    { type:'choice', difficulty:3, text:'测量时角度误差 0.1°，在 1000 米处引起的位置误差约为（sin0.1°≈0.00175）？', options:['A. 约 0.175 米','B. 约 1.75 米','C. 约 17.5 米','D. 约 175 米'], answer:'B', knowledgePoint:'误差分析', analysis:'误差距离 ≈ 1000×sin(0.1°) ≈ 1000×0.00175 = 1.75 米。' }
  ]},

  // ── 第9章 微积分初步（GCSE）────────────────────────────────

  { lesson: 41, questions: [
    { type:'choice', difficulty:1, text:'平均速度的定义是？', options:['A. 某一时刻的速度','B. 总位移除以总时间','C. 最快速度与最慢速度的平均','D. 速度的导数'], answer:'B', knowledgePoint:'平均速度与瞬时速度', analysis:'平均速度 = 总位移/总时间，描述整段时间的整体效果。' },
    { type:'choice', difficulty:2, text:'位移-时间图上某点的切线斜率代表什么？', options:['A. 平均速度','B. 加速度','C. 瞬时速度','D. 位移'], answer:'C', knowledgePoint:'变化率的几何含义', analysis:'切线斜率是该点处函数的瞬时变化率，在位移-时间图上即为瞬时速度。' },
    { type:'choice', difficulty:3, text:'一个函数在某点的切线斜率为负，这意味着？', options:['A. 函数在该点的值为负','B. 函数在该点递减','C. 函数在该点有极小值','D. 函数在该点为零'], answer:'B', knowledgePoint:'变化率的几何含义', analysis:'斜率为负意味着 x 增大时 y 减小，即函数在该点递减。' }
  ]},

  { lesson: 42, questions: [
    { type:'choice', difficulty:1, text:'导数 f\'(x) 的几何意义是？', options:['A. 函数图像下的面积','B. 函数在 x 处的切线斜率','C. 函数在 x 处的值','D. 函数的最大值'], answer:'B', knowledgePoint:'切线斜率', analysis:'f\'(x) 是函数图像在 x 处切线的斜率，即瞬时变化率。' },
    { type:'choice', difficulty:2, text:'f(x)=x² 在 x=3 处的导数值是？（利用定义：nxⁿ⁻¹）', options:['A. 3','B. 6','C. 9','D. 12'], answer:'B', knowledgePoint:'导数的定义', analysis:'f\'(x)=2x，f\'(3)=2×3=6。' },
    { type:'choice', difficulty:3, text:'若 f\'(a)=0 且 f(a) 是极大值，f\'\'(a) 的符号应为？', options:['A. 正','B. 负','C. 零','D. 无法确定'], answer:'B', knowledgePoint:'切线斜率', analysis:'f\'\'(a)<0 表示函数在 a 处向下弯，对应极大值。' }
  ]},

  { lesson: 43, questions: [
    { type:'choice', difficulty:1, text:'f(x)=x⁵ 的导数是？', options:['A. 5x⁶','B. 5x⁴','C. x⁴','D. 4x⁵'], answer:'B', knowledgePoint:'幂函数求导', analysis:'幂函数法则：(xⁿ)\'=nxⁿ⁻¹。(x⁵)\'=5x⁴。' },
    { type:'choice', difficulty:2, text:'f(x)=3x²+2x−5 的导数是？', options:['A. 6x+2','B. 3x+2','C. 6x−5','D. 6x+2x'], answer:'A', knowledgePoint:'常数倍法则与求和法则', analysis:'逐项求导：(3x²)\'=6x，(2x)\'=2，(−5)\'=0。f\'=6x+2。' },
    { type:'choice', difficulty:3, text:'f(x)=sin(3x) 的导数是？（链式法则）', options:['A. cos(3x)','B. 3cos(3x)','C. −3cos(3x)','D. sin(3)'], answer:'B', knowledgePoint:'链式法则', analysis:'外层 sin，内层 3x。f\'=cos(3x)×3=3cos(3x)。' }
  ]},

  { lesson: 44, questions: [
    { type:'choice', difficulty:1, text:'求函数极值，第一步是？', options:['A. 求二阶导数','B. 令一阶导数等于零','C. 画图像','D. 代入端点'], answer:'B', knowledgePoint:'临界点的求法', analysis:'令 f\'(x)=0，解出临界点候选——这是找极值的入口。' },
    { type:'choice', difficulty:2, text:'f(x)=x²−6x+8，临界点处的值是极大还是极小？', options:['A. 极大值 −1','B. 极小值 −1','C. 极大值 8','D. 极小值 8'], answer:'B', knowledgePoint:'二阶导数判别极大极小', analysis:'f\'=2x−6=0 → x=3。f\'\'=2>0，向上弯，是极小值。f(3)=9−18+8=−1。' },
    { type:'choice', difficulty:3, text:'用最少的围栏围出面积最大的矩形，已知围栏总长 40 米，最大面积是？', options:['A. 100 m²','B. 150 m²','C. 200 m²','D. 400 m²'], answer:'A', knowledgePoint:'优化问题的建模', analysis:'设宽 x，长 20−x（半周长=20）。面积 A=x(20−x)。A\'=20−2x=0，x=10，A=10×10=100 m²。' }
  ]},

  { lesson: 45, questions: [
    { type:'choice', difficulty:1, text:'∫x²dx 等于？', options:['A. 2x','B. x³/3+C','C. 2x+C','D. x³+C'], answer:'B', knowledgePoint:'不定积分与反导数', analysis:'幂函数积分：∫xⁿdx = xⁿ⁺¹/(n+1)+C。∫x²dx=x³/3+C。' },
    { type:'choice', difficulty:2, text:'∫₀² x dx 等于？', options:['A. 1','B. 2','C. 4','D. 8'], answer:'B', knowledgePoint:'定积分的计算', analysis:'F(x)=x²/2。F(2)−F(0)=4/2−0=2。' },
    { type:'choice', difficulty:3, text:'函数 y=x² 在 x=1 到 x=3 上与 x 轴围成的面积是？', options:['A. 26/3','B. 8','C. 9','D. 6'], answer:'A', knowledgePoint:'面积的计算', analysis:'∫₁³ x²dx = [x³/3]₁³ = 27/3−1/3 = 26/3。' }
  ]},

  // ── 第10章 统计深化（GCSE）──────────────────────────────────

  { lesson: 46, questions: [
    { type:'choice', difficulty:1, text:'随机变量 X 的概率分布表中，所有 P(X=x) 之和必须等于？', options:['A. 0','B. 0.5','C. 1','D. 不确定'], answer:'C', knowledgePoint:'概率分布表', analysis:'所有可能取值的概率之和必须等于 1——这是概率的基本性质。' },
    { type:'choice', difficulty:2, text:'X 的概率分布为 P(X=1)=0.3，P(X=2)=0.5，P(X=3)=0.2，E(X) 等于？', options:['A. 1.5','B. 1.9','C. 2','D. 2.5'], answer:'B', knowledgePoint:'期望值E(X)的计算', analysis:'E(X)=1×0.3+2×0.5+3×0.2=0.3+1.0+0.6=1.9。' },
    { type:'choice', difficulty:3, text:'若 E(X)=3，E(X²)=11，则 Var(X)=？', options:['A. 2','B. 4','C. 8','D. 11'], answer:'A', knowledgePoint:'方差Var(X)的计算', analysis:'Var(X)=E(X²)−[E(X)]²=11−9=2。' }
  ]},

  { lesson: 47, questions: [
    { type:'choice', difficulty:1, text:'条件概率 P(A|B) 的含义是？', options:['A. A 和 B 同时发生的概率','B. 已知 B 发生时 A 发生的概率','C. A 或 B 发生的概率','D. B 在 A 之后发生的概率'], answer:'B', knowledgePoint:'条件概率公式 P(A|B)', analysis:'P(A|B) 读作"已知 B 发生时 A 的概率"，分母是 B 的概率（新的样本空间）。' },
    { type:'choice', difficulty:2, text:'P(A)=0.4，P(B)=0.3，若 A 和 B 独立，P(A∩B)=？', options:['A. 0.7','B. 0.1','C. 0.12','D. 0.04'], answer:'C', knowledgePoint:'事件独立性的判断', analysis:'独立事件：P(A∩B)=P(A)×P(B)=0.4×0.3=0.12。' },
    { type:'choice', difficulty:3, text:'P(A)=0.6，P(B|A)=0.5，P(A∩B)=？', options:['A. 0.1','B. 0.3','C. 0.5','D. 0.8'], answer:'B', knowledgePoint:'乘法定理', analysis:'P(A∩B)=P(B|A)×P(A)=0.5×0.6=0.3。' }
  ]},

  { lesson: 48, questions: [
    { type:'choice', difficulty:1, text:'正态分布曲线的形状是？', options:['A. 直线','B. 关于均值对称的钟形曲线','C. 单调递增曲线','D. U 形曲线'], answer:'B', knowledgePoint:'钟形曲线的特征', analysis:'正态分布曲线是关于均值对称的钟形（高斯曲线），均值处最高。' },
    { type:'choice', difficulty:2, text:'X～N(50,4²)，P(42<X<58) 约等于？（68-95-99.7 法则）', options:['A. 68%','B. 95%','C. 99.7%','D. 50%'], answer:'B', knowledgePoint:'68-95-99.7法则', analysis:'42=50−2×4，58=50+2×4，即 μ±2σ，覆盖约 95%。' },
    { type:'choice', difficulty:3, text:'若 X～N(100,15²)，x=130 的 z 值是？', options:['A. 1','B. 2','C. 3','D. −2'], answer:'B', knowledgePoint:'标准化与z值', analysis:'z=(x−μ)/σ=(130−100)/15=30/15=2。' }
  ]},

  { lesson: 49, questions: [
    { type:'choice', difficulty:1, text:'样本统计量与总体参数的关系是？', options:['A. 一定相等','B. 样本统计量是总体参数的估计','C. 总体参数大于样本统计量','D. 没有关系'], answer:'B', knowledgePoint:'总体参数与样本统计量', analysis:'我们用样本统计量（如样本均值）来估计总体参数（如总体均值），两者不一定相等。' },
    { type:'choice', difficulty:2, text:'p 值的正确解读是？', options:['A. H₀ 为真的概率','B. 假设 H₀ 为真时观察到此极端数据的概率','C. H₁ 为真的概率','D. 实验重复性的度量'], answer:'B', knowledgePoint:'假设检验的逻辑', analysis:'p 值是在零假设 H₀ 为真的条件下，观测到当前或更极端结果的概率。' },
    { type:'choice', difficulty:3, text:'显著性水平 α=0.05，p=0.03，应该？', options:['A. 接受 H₀','B. 拒绝 H₀','C. 增大样本量再检验','D. 降低显著性水平'], answer:'B', knowledgePoint:'显著性水平', analysis:'p=0.03 < α=0.05，有统计显著性，拒绝零假设 H₀。' }
  ]},

  { lesson: 50, questions: [
    { type:'choice', difficulty:1, text:'GCSE 数学考试通常覆盖哪几个阶段？', options:['A. 只有代数','B. KS3 和 GCSE 阶段所有内容','C. 只有统计','D. 只有几何'], answer:'B', knowledgePoint:'解题策略回顾', analysis:'GCSE 考试覆盖 KS3（1-3年级）和 GCSE（4-5年级）的全部内容。' },
    { type:'choice', difficulty:2, text:'在考试中，若某题不会解，最佳策略是？', options:['A. 空着跳过','B. 随便写一个答案','C. 写出思路和部分步骤','D. 把时间都花在这题上'], answer:'C', knowledgePoint:'考试技巧', analysis:'写出解题思路和部分正确步骤仍可获得步骤分，比空着或乱写更好。' },
    { type:'choice', difficulty:3, text:'代数方法和几何方法求解同一问题，理论上结果应该？', options:['A. 代数更准确','B. 几何更准确','C. 一致，因为描述的是同一事实','D. 不同，因为方法不同'], answer:'C', knowledgePoint:'代数与几何综合', analysis:'代数和几何是描述同一数学事实的不同语言，正确执行后结果必须一致。' }
  ]},

  // ── 第11章 纯数学（A-Level）────────────────────────────────

  { lesson: 51, questions: [
    { type:'choice', difficulty:1, text:'f(x+3) 相对于 f(x) 的图像变化是？', options:['A. 向右平移 3','B. 向左平移 3','C. 向上平移 3','D. 向下平移 3'], answer:'B', knowledgePoint:'平移变换 f(x+a)', analysis:'f(x+a) 向左平移 a（a>0）。括号内加正数，图像向左。' },
    { type:'choice', difficulty:2, text:'f(x)=x² 的反函数是？（定义域 x≥0）', options:['A. f⁻¹(x)=x²','B. f⁻¹(x)=√x','C. f⁻¹(x)=1/x²','D. f⁻¹(x)=2x'], answer:'B', knowledgePoint:'反函数', analysis:'反函数是输入输出互换：y=x² → x=√y → f⁻¹(x)=√x（定义域 x≥0 保证一一映射）。' },
    { type:'choice', difficulty:3, text:'g(f(x)) 中 f(x)=2x，g(x)=x³，复合函数 g(f(x)) 的导数是？', options:['A. 6(2x)²','B. 24x²','C. 8x³','D. 6x²'], answer:'B', knowledgePoint:'复合函数的求导', analysis:'g(f(x))=(2x)³=8x³。直接求导：24x²。或用链式法则：3(2x)²×2=12x²×2=24x²。' }
  ]},

  { lesson: 52, questions: [
    { type:'choice', difficulty:1, text:'ln(e³) 等于？', options:['A. 3e','B. e³','C. 3','D. 1/3'], answer:'C', knowledgePoint:'自然对数e', analysis:'ln 和 e 互为逆运算：ln(eˣ)=x，所以 ln(e³)=3。' },
    { type:'choice', difficulty:2, text:'解方程 e²ˣ=5，x 等于？', options:['A. ln5/2','B. 2ln5','C. √5','D. ln10'], answer:'A', knowledgePoint:'指数与对数方程的解', analysis:'两边取 ln：2x=ln5，x=ln5/2。' },
    { type:'choice', difficulty:3, text:'ln(6)−ln(2) 等于？', options:['A. ln4','B. ln3','C. ln8','D. 3'], answer:'B', knowledgePoint:'对数法则', analysis:'对数相减等于对数内相除：ln(6)−ln(2)=ln(6/2)=ln3。' }
  ]},

  { lesson: 53, questions: [
    { type:'choice', difficulty:1, text:'sin²θ+cos²θ 等于？', options:['A. 0','B. 1','C. 2','D. sin(2θ)'], answer:'B', knowledgePoint:'勾股恒等式 sin²θ+cos²θ=1', analysis:'勾股恒等式，对任意角 θ 恒成立，来自单位圆定义。' },
    { type:'choice', difficulty:2, text:'sin(2θ) 等于？', options:['A. 2sinθ','B. sin²θ−cos²θ','C. 2sinθcosθ','D. sinθ+cosθ'], answer:'C', knowledgePoint:'二倍角公式', analysis:'二倍角公式：sin(2θ)=2sinθcosθ。' },
    { type:'choice', difficulty:3, text:'证明恒等式，正确做法是？', options:['A. 两边同时加相同的式子','B. 两边同时平方','C. 从一边出发，经变形推出另一边','D. 用具体数值代入验证'], answer:'C', knowledgePoint:'恒等式证明', analysis:'证明恒等式应从一边出发经合法变换推出另一边，不能两边同时操作（那是解方程）。' }
  ]},

  { lesson: 54, questions: [
    { type:'choice', difficulty:1, text:'[f(x)·g(x)]\'的乘积法则是？', options:["A. f'(x)·g'(x)","B. f'(x)·g(x)+f(x)·g'(x)","C. f'(x)/g'(x)","D. f'(x)·g(x)−f(x)·g'(x)"], answer:'B', knowledgePoint:'乘积法则与商法则', analysis:"乘积法则：[uv]'=u'v+uv'，'前导后不动加前不动后导'。" },
    { type:'choice', difficulty:2, text:'f(x)=x²·sin(x) 的导数是？', options:["A. 2x·cos(x)","B. 2x·sin(x)+x²·cos(x)","C. x²·cos(x)","D. 2x·sin(x)−x²·cos(x)"], answer:'B', knowledgePoint:'乘积法则与商法则', analysis:"乘积法则：(x²)'·sin(x)+x²·(sin(x))'=2x·sin(x)+x²·cos(x)。" },
    { type:'choice', difficulty:3, text:'对 x²+y²=25 两边对 x 求导，dy/dx 等于？', options:['A. −x/y','B. x/y','C. −y/x','D. 2x+2y'], answer:'A', knowledgePoint:'隐函数求导', analysis:'2x+2y·(dy/dx)=0，解得 dy/dx=−x/y。注意 y 是 x 的函数，对 y 求导需乘 dy/dx。' }
  ]},

  { lesson: 55, questions: [
    { type:'choice', difficulty:1, text:'∫2x·e^(x²)dx，令 u=x²，变换后成为？', options:['A. ∫e^u du','B. ∫2e^u du','C. ∫u·e^u du','D. ∫e^u·2u du'], answer:'A', knowledgePoint:'换元积分法', analysis:'u=x²，du=2x dx，原式变为 ∫e^u du。' },
    { type:'choice', difficulty:2, text:'∫x·eˣdx 用分部积分（u=x，dv=eˣdx），结果是？', options:['A. xeˣ+C','B. xeˣ−eˣ+C','C. eˣ+C','D. x²eˣ/2+C'], answer:'B', knowledgePoint:'分部积分法', analysis:'∫x·eˣdx=x·eˣ−∫eˣdx=xeˣ−eˣ+C。' },
    { type:'choice', difficulty:3, text:'曲线 y=x 绕 x 轴旋转一圈，从 x=0 到 x=3，旋转体体积是（π≈3.14）？', options:['A. 28.3','B. 56.5','C. 84.8','D. 9π'], answer:'A', knowledgePoint:'旋转体体积', analysis:'V=π∫₀³ x²dx=π[x³/3]₀³=π×9=9π≈28.3。' }
  ]},

  // ── 第12章 应用数学（A-Level）──────────────────────────────

  { lesson: 56, questions: [
    { type:'choice', difficulty:1, text:'匀加速运动公式 v=u+at 中，各字母含义是？', options:['A. v末速度，u初速度，a加速度，t时间','B. v初速度，u末速度，a加速度，t时间','C. v速度，u位移，a面积，t时间','D. v向量，u单位，a角度，t温度'], answer:'A', knowledgePoint:'匀变速直线运动方程', analysis:'v=末速度，u=初速度，a=加速度，t=时间。五个运动方程都用这套符号。' },
    { type:'choice', difficulty:2, text:'从静止开始匀加速 a=2 m/s²，3 秒后速度是？', options:['A. 2 m/s','B. 4 m/s','C. 6 m/s','D. 9 m/s'], answer:'C', knowledgePoint:'v = u + at 等五个方程', analysis:'v=u+at=0+2×3=6 m/s。' },
    { type:'choice', difficulty:3, text:'初速 u=10 m/s，加速度 a=−2 m/s²（减速），物体停止前行驶距离是？', options:['A. 20 m','B. 25 m','C. 30 m','D. 50 m'], answer:'B', knowledgePoint:'自由落体的数学描述', analysis:'v²=u²+2as → 0=100+2(−2)s → s=100/4=25 m。' }
  ]},

  { lesson: 57, questions: [
    { type:'choice', difficulty:1, text:'向量 (3,4) 的大小是？', options:['A. 7','B. 5','C. 12','D. 3.5'], answer:'B', knowledgePoint:'力的向量表示', analysis:'|(3,4)|=√(9+16)=√25=5。' },
    { type:'choice', difficulty:2, text:'物体质量 2 kg，合力 10 N，加速度是？', options:['A. 0.2 m/s²','B. 5 m/s²','C. 12 m/s²','D. 20 m/s²'], answer:'B', knowledgePoint:'加速度的向量方程', analysis:'F=ma → a=F/m=10/2=5 m/s²。' },
    { type:'choice', difficulty:3, text:'倾角 30° 斜面上，物体重力沿斜面方向的分量是（mg 表示重力）？', options:['A. mg/2','B. mg√3/2','C. mg','D. mg/√3'], answer:'A', knowledgePoint:'斜面上的分力', analysis:'沿斜面分量 = mg·sin30° = mg×1/2 = mg/2。' }
  ]},

  { lesson: 58, questions: [
    { type:'choice', difficulty:1, text:'力矩的计算公式是？', options:['A. M=F+d','B. M=F×d','C. M=F/d','D. M=F−d'], answer:'B', knowledgePoint:'力矩的定义', analysis:'力矩 M=F×d，F 是力，d 是力臂（力到转轴的垂直距离），单位 N·m。' },
    { type:'choice', difficulty:2, text:'力 10 N 作用于距转轴 0.5 m 处，力矩是？', options:['A. 20 N·m','B. 5 N·m','C. 0.05 N·m','D. 10.5 N·m'], answer:'B', knowledgePoint:'力矩的定义', analysis:'M=10×0.5=5 N·m。' },
    { type:'choice', difficulty:3, text:'跷跷板平衡时，左侧 60 kg 在 2 m 处，右侧未知质量在 3 m 处，右侧质量是？', options:['A. 30 kg','B. 40 kg','C. 45 kg','D. 90 kg'], answer:'B', knowledgePoint:'力矩定理', analysis:'力矩平衡：60×2=m×3 → m=120/3=40 kg。' }
  ]},

  { lesson: 59, questions: [
    { type:'choice', difficulty:1, text:'X～N(50,10²)，x=60 的 z 值是？', options:['A. 0.5','B. 1','C. 10','D. 2'], answer:'B', knowledgePoint:'用正态分布建模', analysis:'z=(60−50)/10=1。' },
    { type:'choice', difficulty:2, text:'z=1.96 对应 Φ(1.96)≈0.975，则 P(Z>1.96)≈？', options:['A. 0.975','B. 0.025','C. 0.95','D. 0.05'], answer:'B', knowledgePoint:'查表求概率', analysis:'P(Z>1.96)=1−Φ(1.96)=1−0.975=0.025。' },
    { type:'choice', difficulty:3, text:'μ=100 的 95% 置信区间为 [95,105]，样本量翻倍后，置信区间宽度如何变化？', options:['A. 不变','B. 变为原来的 √2 倍','C. 变为原来的 1/√2（变窄）','D. 减半'], answer:'C', knowledgePoint:'置信区间计算', analysis:'区间宽度 ∝ 1/√n，n 翻倍后，宽度变为 1/√2 ≈ 0.707 倍，即变窄。' }
  ]},

  { lesson: 60, questions: [
    { type:'choice', difficulty:1, text:'假设检验中的零假设 H₀ 通常是？', options:['A. 要证明的主张','B. 默认的"无效果"立场','C. 实验结果','D. 备择假设的反面'], answer:'B', knowledgePoint:'原假设与备择假设', analysis:'H₀ 是默认立场，通常是"无效果""无差异""等于某值"。需要数据来推翻它。' },
    { type:'choice', difficulty:2, text:'相比正态分布，t 分布的尾部更？', options:['A. 薄','B. 厚','C. 相同','D. 取决于均值'], answer:'B', knowledgePoint:'t 分布', analysis:'t 分布尾部比正态分布厚（更保守），样本量增大时趋近正态分布。' },
    { type:'choice', difficulty:3, text:'双尾检验 α=0.05，p=0.08，结论是？', options:['A. 拒绝 H₀','B. 不能拒绝 H₀','C. 接受 H₁','D. 实验无效'], answer:'B', knowledgePoint:'单尾与双尾检验', analysis:'p=0.08 > α=0.05，没有足够证据拒绝 H₀。注意：不拒绝 H₀ ≠ 证明 H₀ 为真。' }
  ]},

  // ── 第13章 高等数学（A-Level）──────────────────────────────

  { lesson: 61, questions: [
    { type:'choice', difficulty:1, text:'微分方程 dy/dx=ky 的一般解是？', options:['A. y=kx+C','B. y=Ae^(kx)','C. y=k²x','D. y=ln(kx)'], answer:'B', knowledgePoint:'通解与特解', analysis:'分离变量：dy/y=k dx，两边积分：ln|y|=kx+C，解得 y=Ae^(kx)。' },
    { type:'choice', difficulty:2, text:'初始条件 y(0)=5，解 dy/dx=2y，特解是？', options:['A. y=5e²','B. y=2e^(5x)','C. y=5e^(2x)','D. y=e^(5x)'], answer:'C', knowledgePoint:'分离变量的步骤', analysis:'通解 y=Ae^(2x)。代入 y(0)=5：A=5，特解 y=5e^(2x)。' },
    { type:'choice', difficulty:3, text:'指数衰减模型 y=100e^(−0.1t)，当 y=50 时 t 等于？', options:['A. 5','B. ln2/0.1','C. 10','D. 50'], answer:'B', knowledgePoint:'指数增长与衰减模型', analysis:'50=100e^(−0.1t) → 0.5=e^(−0.1t) → ln0.5=−0.1t → t=−ln0.5/0.1=ln2/0.1≈6.93。' }
  ]},

  { lesson: 62, questions: [
    { type:'choice', difficulty:1, text:'等比数列 2,6,18,54,… 的公比是？', options:['A. 2','B. 3','C. 4','D. 6'], answer:'B', knowledgePoint:'等差数列与等比数列', analysis:'6/2=3，18/6=3，公比 r=3。' },
    { type:'choice', difficulty:2, text:'等比数列首项 a₁=3，公比 r=2，前 4 项之和是？', options:['A. 15','B. 24','C. 45','D. 48'], answer:'C', knowledgePoint:'求和公式', analysis:'S₄=3×(1−2⁴)/(1−2)=3×(−15)/(−1)=45。' },
    { type:'choice', difficulty:3, text:'无穷等比级数 1+1/3+1/9+…，首项 1，公比 1/3，总和是？', options:['A. 3/2','B. 2','C. 3/2','D. 4/3'], answer:'A', knowledgePoint:'级数的收敛与发散', analysis:'|r|=1/3<1，收敛。S=a/(1−r)=1/(1−1/3)=1/(2/3)=3/2。' }
  ]},

  { lesson: 63, questions: [
    { type:'choice', difficulty:1, text:'i² 等于？', options:['A. 1','B. −1','C. i','D. −i'], answer:'B', knowledgePoint:'虚数单位i', analysis:'虚数单位 i 的定义：i²=−1。' },
    { type:'choice', difficulty:2, text:'复数 3+4i 的模是？', options:['A. 7','B. 5','C. 12','D. 25'], answer:'B', knowledgePoint:'复数的极坐标形式', analysis:'|3+4i|=√(3²+4²)=√25=5。' },
    { type:'choice', difficulty:3, text:'欧拉公式 e^(iπ)+1=0 用到了哪些数学常数？', options:['A. e、i、π','B. e、i、π、0、1','C. e、π、0','D. i、π、1'], answer:'B', knowledgePoint:'欧拉公式 e^(iθ) = cosθ + i·sinθ', analysis:'e^(iπ)+1=0 包含 e、i、π、0、1 五个最重要的数学常数。' }
  ]},

  { lesson: 64, questions: [
    { type:'choice', difficulty:1, text:'向量 a⃗=(1,2,3) 和 b⃗=(4,5,6) 的点积是？', options:['A. 14','B. 32','C. 18','D. 28'], answer:'B', knowledgePoint:'三维向量的运算', analysis:'a⃗·b⃗=1×4+2×5+3×6=4+10+18=32。' },
    { type:'choice', difficulty:2, text:'若 a⃗·b⃗=0，则 a⃗ 和 b⃗ 的关系是？', options:['A. 平行','B. 垂直','C. 大小相等','D. 方向相同'], answer:'B', knowledgePoint:'法向量与点积', analysis:'点积为零意味着两向量垂直（夹角为 90°，cos90°=0）。' },
    { type:'choice', difficulty:3, text:'直线方程 r⃗=(1,2,3)+t(2,−1,0)，t=2 时对应点是？', options:['A. (2,−1,0)','B. (5,0,3)','C. (3,1,3)','D. (4,2,6)'], answer:'B', knowledgePoint:'直线的向量方程', analysis:'代入 t=2：r⃗=(1,2,3)+2×(2,−1,0)=(1+4, 2−2, 3+0)=(5,0,3)。' }
  ]},

  { lesson: 65, questions: [
    { type:'choice', difficulty:1, text:'矩阵乘法 AB 是否等于 BA？', options:['A. 总是相等','B. 一般不相等','C. 只对方阵相等','D. 只对对角矩阵相等'], answer:'B', knowledgePoint:'矩阵的加法与乘法', analysis:'矩阵乘法不满足交换律，AB≠BA 是一般情况。' },
    { type:'choice', difficulty:2, text:'矩阵 [[2,0],[0,3]] 的行列式是？', options:['A. 5','B. 6','C. 0','D. 1'], answer:'B', knowledgePoint:'行列式的几何意义', analysis:'对角矩阵的行列式等于对角元素之积：2×3=6。' },
    { type:'choice', difficulty:3, text:'行列式为 0 的矩阵意味着？', options:['A. 矩阵元素全为零','B. 矩阵不可逆，变换压扁了空间','C. 矩阵是单位矩阵','D. 矩阵是正交矩阵'], answer:'B', knowledgePoint:'线性变换', analysis:'行列式为零：变换后空间被压缩成更低维（如压成直线或点），矩阵不可逆。' }
  ]},

  // ── 第14章 综合冲刺（A-Level）──────────────────────────────

  { lesson: 66, questions: [
    { type:'choice', difficulty:1, text:'种群指数增长模型 dP/dt=rP（r>0）的解是？', options:['A. P=P₀+rt','B. P=P₀e^(rt)','C. P=r·t²','D. P=ln(P₀t)'], answer:'B', knowledgePoint:'种群增长模型', analysis:'分离变量积分后得 P=P₀e^(rt)，指数增长。' },
    { type:'choice', difficulty:2, text:'牛顿冷却定律：物体冷却速率正比于与环境的温差，模型是？', options:['A. dT/dt=k','B. dT/dt=k(T−T_env)','C. dT/dt=−k(T−T_env)','D. T=T_env+kt'], answer:'C', knowledgePoint:'牛顿冷却定律', analysis:'冷却：温度下降，速率为负。dT/dt=−k(T−T_env)，k>0，T>T_env 时温度下降。' },
    { type:'choice', difficulty:3, text:'逻辑斯蒂增长与指数增长的主要区别是？', options:['A. 逻辑斯蒂增长更快','B. 逻辑斯蒂有环境容纳量上限','C. 指数增长考虑食物竞争','D. 两者在数学上完全相同'], answer:'B', knowledgePoint:'建模流程回顾', analysis:'逻辑斯蒂增长引入环境容纳量 K，种群趋近 K 时增长减缓，呈 S 型曲线，更符合实际。' }
  ]},

  { lesson: 67, questions: [
    { type:'choice', difficulty:1, text:'牛顿迭代公式是？', options:['A. xₙ₊₁=xₙ+f(xₙ)/f\'(xₙ)','B. xₙ₊₁=xₙ−f(xₙ)/f\'(xₙ)','C. xₙ₊₁=f\'(xₙ)/f(xₙ)','D. xₙ₊₁=xₙ×f(xₙ)'], answer:'B', knowledgePoint:'牛顿迭代公式', analysis:'xₙ₊₁=xₙ−f(xₙ)/f\'(xₙ)。几何含义：切线与 x 轴交点作为下一猜测。' },
    { type:'choice', difficulty:2, text:'用牛顿法解 f(x)=x²−2=0，x₀=1，x₁等于？', options:['A. 1.5','B. 2','C. 1.414','D. 0.5'], answer:'A', knowledgePoint:'牛顿迭代公式', analysis:'f(1)=−1，f\'(x)=2x，f\'(1)=2。x₁=1−(−1)/2=1.5。' },
    { type:'choice', difficulty:3, text:'牛顿迭代法的收敛速度是？', options:['A. 线性收敛（每步多1位有效数字）','B. 二次收敛（每步有效数字大致翻倍）','C. 不收敛','D. 取决于方程的次数'], answer:'B', knowledgePoint:'收敛性与误差', analysis:'牛顿法是二次收敛的——每次迭代后，有效数字大致翻倍，收敛非常快。' }
  ]},

  { lesson: 68, questions: [
    { type:'choice', difficulty:1, text:'图论中，"度"（degree）指的是？', options:['A. 图中节点总数','B. 一个节点连接的边数','C. 图的直径','D. 最短路径长度'], answer:'B', knowledgePoint:'图的定义与术语', analysis:'节点的度（degree）是该节点连接的边的数量。' },
    { type:'choice', difficulty:2, text:'Dijkstra 算法的用途是？', options:['A. 求最小生成树','B. 求图中最短路径','C. 判断图是否连通','D. 求哈密顿回路'], answer:'B', knowledgePoint:'最短路径算法', analysis:'Dijkstra 算法从起点出发，逐步确定到各节点的最短路径。' },
    { type:'choice', difficulty:3, text:'最小生成树的意义是？', options:['A. 经过所有节点的最短路径','B. 连通所有节点且总权重最小的树形子图','C. 最长路径','D. 包含所有边的子图'], answer:'B', knowledgePoint:'最小生成树', analysis:'最小生成树：用最少的总权重边连通所有节点，不形成环，是网络设计中的优化工具。' }
  ]},

  { lesson: 69, questions: [
    { type:'choice', difficulty:1, text:'数学归纳法中，"归纳步骤"是指？', options:['A. 证明 P(1) 成立','B. 证明 P(k) 成立时 P(k+1) 也成立','C. 列举所有情况','D. 找到一个反例'], answer:'B', knowledgePoint:'归纳证明', analysis:'归纳步骤：假设 P(k) 成立，推导 P(k+1) 也成立。配合基础步骤完成归纳证明。' },
    { type:'choice', difficulty:2, text:'用反证法证明"没有最大质数"，假设的起点是？', options:['A. 所有质数都很小','B. 假设存在最大质数 p','C. 假设质数是有限的','D. 假设 p 不是质数'], answer:'B', knowledgePoint:'矛盾证明', analysis:'反证法假设结论不成立：假设存在最大质数 p，然后构造 p!+1 引出矛盾。' },
    { type:'choice', difficulty:3, text:'下列四种证明方法中，哪种用于证明"存在满足条件的对象"最直接？', options:['A. 反证法','B. 数学归纳法','C. 构造证明','D. 穷举法'], answer:'C', knowledgePoint:'构造证明', analysis:'构造证明：直接给出满足条件的具体例子，是证明存在性最直接的方法。' }
  ]},

  { lesson: 70, questions: [
    { type:'choice', difficulty:1, text:'A-Level 数学考试考查的核心能力是？', options:['A. 记忆所有公式','B. 在陌生问题前调动已知工具','C. 快速计算','D. 画出精确图像'], answer:'B', knowledgePoint:'考场策略与时间分配', analysis:'A-Level 的核心是数学思维——在新情境中识别结构、选择工具、推导结论。' },
    { type:'choice', difficulty:2, text:'微积分、统计和力学三个模块的共同底层工具是？', options:['A. 矩阵','B. 三角恒等式','C. 极限和连续性的思想','D. 集合论'], answer:'C', knowledgePoint:'微积分综合题', analysis:'微积分（极限）、统计（大数定律的极限思想）、力学（瞬时量的极限定义）都以极限思想为基础。' },
    { type:'choice', difficulty:3, text:'在 A-Level 综合题中，某步骤的代数结果在几何上不合理（如负面积），应该？', options:['A. 接受结果，代数不会错','B. 检查建模步骤和假设','C. 只看代数，忽略几何意义','D. 重新计算直到几何合理'], answer:'B', knowledgePoint:'统计与力学综合', analysis:'数学答案必须在现实中有意义。结果不合理意味着模型或计算有问题——回检假设和建模步骤。' }
  ]},

];

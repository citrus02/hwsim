/**
 * 数学 · 1年级题库
 * 每课 5 choice + 1 open，共 816 题。
 */

export const questionBank = [
  {
    "lesson": 1,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "下列数中，既不是正整数也不是负整数的是？",
        "options": [
          "A. 5",
          "B. −3",
          "C. 0",
          "D. 100"
        ],
        "answer": "C",
        "knowledgePoint": "正整数、负整数与零",
        "analysis": "零是整数，但不属于正整数也不属于负整数，是整数中的中性成员。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "数轴上，原点表示的数是？",
        "options": [
          "A. 1",
          "B. -1",
          "C. 0",
          "D. 不存在"
        ],
        "answer": "C",
        "knowledgePoint": "数轴：方向与位置",
        "analysis": "原点是数轴的基准点，表示数字0。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "在数轴上，−4 与 −1 的大小关系是？",
        "options": [
          "A. −4 > −1",
          "B. −4 = −1",
          "C. −4 < −1",
          "D. 无法比较"
        ],
        "answer": "C",
        "knowledgePoint": "整数的大小比较",
        "analysis": "数轴上越靠右越大。−1 在 −4 右侧，故 −4 < −1。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "下列哪个数的绝对值最小？",
        "options": [
          "A. -5",
          "B. 3",
          "C. -1",
          "D. 0"
        ],
        "answer": "D",
        "knowledgePoint": "绝对值的概念",
        "analysis": "|0|=0，其他数的绝对值都大于0。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "两次魔药效力测试结果分别是 −5 和 +2（正数表示超出预期）。绝对值更大的是哪次？",
        "options": [
          "A. 第一次（−5）",
          "B. 第二次（+2）",
          "C. 两次相同",
          "D. 无法判断"
        ],
        "answer": "A",
        "knowledgePoint": "绝对值的概念",
        "analysis": "|−5| = 5，|+2| = 2，5 > 2，第一次偏差绝对值更大。"
      },
      {
        "type": "open",
        "text": "用自己的话解释什么是\"绝对值\"，并举一个生活中用到绝对值的例子。",
        "scoringPoints": [
          "正确解释绝对值的含义（数到零的距离，或去掉符号后的值）",
          "举出合理的生活例子（如温差、海拔、误差等）"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 2,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "分数 12/18 化简后是？",
        "options": [
          "A. 6/9",
          "B. 2/3",
          "C. 4/6",
          "D. 3/4"
        ],
        "answer": "B",
        "knowledgePoint": "等值分数与化简",
        "analysis": "12 和 18 的最大公因数是 6。12÷6=2，18÷6=3，化简为 2/3。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "分数 6/8 化简后是？",
        "options": [
          "A. 3/4",
          "B. 2/3",
          "C. 1/2",
          "D. 6/8"
        ],
        "answer": "A",
        "knowledgePoint": "等值分数与化简",
        "analysis": "6和8的最大公因数是2，6÷2=3，8÷2=4，化简为3/4。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "计算 ¾ + ⅙，结果是？",
        "options": [
          "A. 4/10",
          "B. 11/12",
          "C. 2/5",
          "D. 9/10"
        ],
        "answer": "B",
        "knowledgePoint": "分数的加减法",
        "analysis": "最小公倍数 12。¾=9/12，⅙=2/12，相加得 11/12。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "计算 1/2 - 1/4，结果是？",
        "options": [
          "A. 1/4",
          "B. 1/2",
          "C. 3/4",
          "D. 0"
        ],
        "answer": "A",
        "knowledgePoint": "分数的加减法",
        "analysis": "1/2=2/4，2/4-1/4=1/4。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "魔药配方需要 2¾ 瓶蛇眼草汁，已用了 1⅓ 瓶，还需多少？",
        "options": [
          "A. 1½ 瓶",
          "B. 1 5/12 瓶",
          "C. 1¼ 瓶",
          "D. 1⅓ 瓶"
        ],
        "answer": "B",
        "knowledgePoint": "带分数与假分数",
        "analysis": "2¾ − 1⅓ = 11/4 − 4/3。公倍数 12：33/12 − 16/12 = 17/12 = 1 5/12 瓶。"
      },
      {
        "type": "open",
        "text": "分数 ¾ 表示什么意思？用生活中的例子说明\"等值分数\"的概念。",
        "scoringPoints": [
          "正确说明分数的含义（部分与整体的关系）",
          "举出等值分数的生活例子并说明为何它们相等"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 3,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "0.375 等于哪个分数？",
        "options": [
          "A. 3/8",
          "B. 3/7",
          "C. 37/100",
          "D. 3/5"
        ],
        "answer": "A",
        "knowledgePoint": "小数与分数的转换",
        "analysis": "0.375 = 375/1000 = 3/8。验算：3÷8 = 0.375。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "0.5 等于哪个分数？",
        "options": [
          "A. 1/3",
          "B. 1/2",
          "C. 1/4",
          "D. 1/5"
        ],
        "answer": "B",
        "knowledgePoint": "小数与分数的转换",
        "analysis": "0.5 = 5/10 = 1/2。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "某魔法药材原价 40 加隆，涨价 15% 后新价格是？",
        "options": [
          "A. 44 加隆",
          "B. 46 加隆",
          "C. 55 加隆",
          "D. 34 加隆"
        ],
        "answer": "B",
        "knowledgePoint": "增减百分比",
        "analysis": "40 × 1.15 = 46 加隆。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "某商品原价80加隆，打8折后价格是？",
        "options": [
          "A. 60加隆",
          "B. 64加隆",
          "C. 72加隆",
          "D. 88加隆"
        ],
        "answer": "B",
        "knowledgePoint": "增减百分比",
        "analysis": "80×0.8=64加隆。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "某魔药浓度 60%，先降低 20%，再提高 25%，最终浓度是？",
        "options": [
          "A. 60%",
          "B. 65%",
          "C. 58%",
          "D. 75%"
        ],
        "answer": "A",
        "knowledgePoint": "百分比的计算",
        "analysis": "60% × 0.8 = 48%，48% × 1.25 = 60%。连续百分比不能简单叠加。"
      },
      {
        "type": "open",
        "text": "某商品打折 20%，再打折 20%，为什么最终不是打了 40% 折扣？请用你自己的话解释原因。",
        "scoringPoints": [
          "说明两次折扣作用的基数不同（第二次是在打折后价格上再打折）",
          "举例或用数字说明为何不等于一次性打 40% 折扣"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 4,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "2⁵ 的值是？",
        "options": [
          "A. 10",
          "B. 25",
          "C. 32",
          "D. 16"
        ],
        "answer": "C",
        "knowledgePoint": "乘方的概念与符号",
        "analysis": "2⁵ = 2×2×2×2×2 = 32。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "3的平方等于？",
        "options": [
          "A. 6",
          "B. 8",
          "C. 9",
          "D. 12"
        ],
        "answer": "C",
        "knowledgePoint": "乘方的概念与符号",
        "analysis": "3² = 3×3 = 9。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "若 x² = 49，x 的所有可能值是？",
        "options": [
          "A. 只有 7",
          "B. 只有 −7",
          "C. 7 或 −7",
          "D. 无解"
        ],
        "answer": "C",
        "knowledgePoint": "平方与平方根",
        "analysis": "7² = 49，(−7)² = 49，故 x = ±7。正数有两个平方根。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "根号25等于？",
        "options": [
          "A. 5",
          "B. -5",
          "C. 25",
          "D. 12.5"
        ],
        "answer": "A",
        "knowledgePoint": "平方与平方根",
        "analysis": "算术平方根取正值，根号25=5。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "4⁻² 等于？",
        "options": [
          "A. −16",
          "B. 1/16",
          "C. −8",
          "D. 1/8"
        ],
        "answer": "B",
        "knowledgePoint": "指数为0与负数的初探",
        "analysis": "4⁻² = 1/4² = 1/16。负指数表示倒数。"
      },
      {
        "type": "open",
        "text": "平方和平方根是互逆运算。请用你的话解释它们的关系，并说明为什么正数的平方根有两个，而负数没有实数平方根。",
        "scoringPoints": [
          "说明平方与平方根互为逆运算的含义",
          "解释正数有两个平方根（正负各一）的原因",
          "解释负数没有实数平方根的原因（任意实数的平方不为负）"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 5,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "比 15∶25 化简后是？",
        "options": [
          "A. 3∶5",
          "B. 5∶3",
          "C. 3∶4",
          "D. 1∶2"
        ],
        "answer": "A",
        "knowledgePoint": "比的定义与化简",
        "analysis": "最大公因数 5。15÷5=3，25÷5=5，化简为 3∶5。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "比 4:12 化简后是？",
        "options": [
          "A. 1:3",
          "B. 2:6",
          "C. 1:4",
          "D. 3:1"
        ],
        "answer": "A",
        "knowledgePoint": "比的定义与化简",
        "analysis": "最大公因数4。4÷4=1，12÷4=3，化简为1:3。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "若 x∶12 = 5∶4，则 x 等于？",
        "options": [
          "A. 10",
          "B. 15",
          "C. 20",
          "D. 9.6"
        ],
        "answer": "B",
        "knowledgePoint": "比例的意义",
        "analysis": "交叉相乘：4x = 60，x = 15。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "若 a:b = 2:3，且 a=10，则 b 等于？",
        "options": [
          "A. 12",
          "B. 15",
          "C. 20",
          "D. 30"
        ],
        "answer": "B",
        "knowledgePoint": "比例的意义",
        "analysis": "a/b=2/3，10/b=2/3，b=10×3/2=15。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "魔药需要曼德拉草汁与月光草汁比例为 2∶3，共配 500 毫升，需曼德拉草汁多少毫升？",
        "options": [
          "A. 150",
          "B. 200",
          "C. 250",
          "D. 300"
        ],
        "answer": "B",
        "knowledgePoint": "比例在配制中的应用",
        "analysis": "500 × 2/(2+3) = 500 × 2/5 = 200 毫升。"
      },
      {
        "type": "open",
        "text": "正比和反比有什么区别？各举一个你生活中能观察到的例子说明。",
        "scoringPoints": [
          "正确解释正比（一个量增大另一个也增大，比值不变）",
          "正确解释反比（一个量增大另一个减小，乘积不变）",
          "各举出一个合理的生活例子"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 6,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "钝角的度数范围是？",
        "options": [
          "A. 0° 到 90°",
          "B. 恰好 90°",
          "C. 90° 到 180°",
          "D. 180° 到 360°"
        ],
        "answer": "C",
        "knowledgePoint": "锐角、直角、钝角、平角",
        "analysis": "钝角：90° < θ < 180°。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "锐角的度数范围是？",
        "options": [
          "A. 0度到90度",
          "B. 恰好90度",
          "C. 90度到180度",
          "D. 大于180度"
        ],
        "answer": "A",
        "knowledgePoint": "锐角、直角、钝角、平角",
        "analysis": "锐角：大于0度且小于90度。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "某角的余角是 37°，该角是多少度？",
        "options": [
          "A. 143°",
          "B. 53°",
          "C. 37°",
          "D. 63°"
        ],
        "answer": "B",
        "knowledgePoint": "互补角与互余角",
        "analysis": "互余：两角之和为 90°。该角 = 90° − 37° = 53°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一个角的补角是65度，该角是多少度？",
        "options": [
          "A. 25度",
          "B. 115度",
          "C. 65度",
          "D. 180度"
        ],
        "answer": "B",
        "knowledgePoint": "互补角与互余角",
        "analysis": "互补：两角之和为180度。该角=180-65=115度。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "两个互补角，较大角比较小角大 40°，较大角是多少度？",
        "options": [
          "A. 70°",
          "B. 110°",
          "C. 120°",
          "D. 130°"
        ],
        "answer": "B",
        "knowledgePoint": "互补角与互余角",
        "analysis": "设较小角为 x，则 x+(x+40°)=180°，2x=140°，x=70°，较大角=110°。"
      },
      {
        "type": "open",
        "text": "钝角和锐角有什么区别？请用生活中的例子说明这两种角。",
        "scoringPoints": [
          "正确说明钝角范围（90度到180度）",
          "正确说明锐角范围（0度到90度）",
          "举出合理的生活例子"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 7,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "三角形两内角为 50° 和 70°，第三个内角是？",
        "options": [
          "A. 50°",
          "B. 60°",
          "C. 70°",
          "D. 120°"
        ],
        "answer": "B",
        "knowledgePoint": "三角形内角和为180°",
        "analysis": "第三角 = 180° − 50° − 70° = 60°。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "三角形三个内角和是？",
        "options": [
          "A. 90度",
          "B. 180度",
          "C. 270度",
          "D. 360度"
        ],
        "answer": "B",
        "knowledgePoint": "三角形内角和为180°",
        "analysis": "任意三角形三个内角之和等于180度。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "等腰三角形顶角为 40°，底角各是多少？",
        "options": [
          "A. 40°",
          "B. 60°",
          "C. 70°",
          "D. 80°"
        ],
        "answer": "C",
        "knowledgePoint": "等腰三角形的性质",
        "analysis": "底角 = (180° − 40°) ÷ 2 = 70°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "等边三角形每个内角是？",
        "options": [
          "A. 60度",
          "B. 90度",
          "C. 120度",
          "D. 180度"
        ],
        "answer": "A",
        "knowledgePoint": "等腰三角形的性质",
        "analysis": "等边三角形三个角相等，每个角=180÷3=60度。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "三条线段 5、9、x 能构成三角形，x 的范围是？",
        "options": [
          "A. 4 < x < 14",
          "B. x > 4",
          "C. x < 14",
          "D. 任意正数"
        ],
        "answer": "A",
        "knowledgePoint": "三角形不等式",
        "analysis": "需满足：5+9>x → x<14；5+x>9 → x>4。取交集：4 < x < 14。"
      },
      {
        "type": "open",
        "text": "为什么三角形三个内角之和等于180度？请用你自己的话解释这个定理。",
        "scoringPoints": [
          "能够用平行线性质解释",
          "能够用剪拼或折叠验证",
          "表达清晰合理"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 8,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "正六边形的内角和是多少度？",
        "options": [
          "A. 540°",
          "B. 720°",
          "C. 900°",
          "D. 1080°"
        ],
        "answer": "B",
        "knowledgePoint": "多边形内角和公式",
        "analysis": "(6−2)×180° = 4×180° = 720°。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "正方形的内角和是？",
        "options": [
          "A. 180度",
          "B. 270度",
          "C. 360度",
          "D. 540度"
        ],
        "answer": "C",
        "knowledgePoint": "多边形内角和公式",
        "analysis": "(4-2)×180=2×180=360度。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "下列说法错误的是？",
        "options": [
          "A. 正方形是特殊长方形",
          "B. 长方形是特殊平行四边形",
          "C. 菱形是特殊正方形",
          "D. 正方形是特殊菱形"
        ],
        "answer": "C",
        "knowledgePoint": "正方形、长方形、平行四边形",
        "analysis": "菱形四边相等但不一定有直角，不是正方形的特例。正方形才是特殊菱形。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "平行四边形的对边有什么关系？",
        "options": [
          "A. 不相等",
          "B. 平行且相等",
          "C. 垂直",
          "D. 互相平分"
        ],
        "answer": "B",
        "knowledgePoint": "正方形、长方形、平行四边形",
        "analysis": "平行四边形的两组对边分别平行且相等。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一正多边形每个内角为 150°，有几条边？",
        "options": [
          "A. 10",
          "B. 12",
          "C. 15",
          "D. 8"
        ],
        "answer": "B",
        "knowledgePoint": "正多边形",
        "analysis": "(n−2)×180°÷n=150°，解得 30n=360，n=12。"
      },
      {
        "type": "open",
        "text": "正方形、长方形和菱形有什么相同点和不同点？请比较这三种图形。",
        "scoringPoints": [
          "正确说明正方形的特征",
          "正确说明长方形和菱形的特征",
          "能够比较它们的相同点和不同点"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 9,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "半径为 7 的圆，面积约为（π≈3.14）？",
        "options": [
          "A. 44",
          "B. 154",
          "C. 22",
          "D. 49"
        ],
        "answer": "B",
        "knowledgePoint": "面积公式 A = πr²",
        "analysis": "A = 3.14 × 49 ≈ 153.86 ≈ 154。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "直径为10的圆，半径是？",
        "options": [
          "A. 5",
          "B. 10",
          "C. 20",
          "D. 31.4"
        ],
        "answer": "A",
        "knowledgePoint": "面积公式 A = πr²",
        "analysis": "半径=直径÷2=10÷2=5。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一圆周长为 31.4（π≈3.14），其半径是？",
        "options": [
          "A. 3",
          "B. 4",
          "C. 5",
          "D. 10"
        ],
        "answer": "C",
        "knowledgePoint": "周长公式 C = 2πr",
        "analysis": "r = C/(2π) = 31.4/6.28 = 5。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "半径为5的圆，周长约为（π约等于3.14）？",
        "options": [
          "A. 15.7",
          "B. 31.4",
          "C. 78.5",
          "D. 25"
        ],
        "answer": "B",
        "knowledgePoint": "周长公式 C = 2πr",
        "analysis": "C=2πr=2×3.14×5=31.4。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "圆心角 120°、半径 6 的扇形面积是（π≈3.14）？",
        "options": [
          "A. 12.56",
          "B. 37.68",
          "C. 75.36",
          "D. 18.84"
        ],
        "answer": "B",
        "knowledgePoint": "弧长与扇形面积",
        "analysis": "(120/360)×π×36 = (1/3)×3.14×36 ≈ 37.68。"
      },
      {
        "type": "open",
        "text": "圆的周长和面积公式分别是什么？请解释这两个公式中各字母的含义。",
        "scoringPoints": [
          "正确写出周长公式C=2πr",
          "正确写出面积公式A=πr²",
          "正确解释r和π的含义"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 10,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "点 (−3, 5) 位于哪个象限？",
        "options": [
          "A. 第一象限",
          "B. 第二象限",
          "C. 第三象限",
          "D. 第四象限"
        ],
        "answer": "B",
        "knowledgePoint": "四个象限",
        "analysis": "x<0，y>0，在第二象限。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "点(2,3)位于哪个象限？",
        "options": [
          "A. 第一象限",
          "B. 第二象限",
          "C. 第三象限",
          "D. 第四象限"
        ],
        "answer": "A",
        "knowledgePoint": "四个象限",
        "analysis": "x大于0，y大于0，在第一象限。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "点 A(2, 3) 与 B(2, −1) 的距离是？",
        "options": [
          "A. 2",
          "B. 3",
          "C. 4",
          "D. 5"
        ],
        "answer": "C",
        "knowledgePoint": "点的坐标表示法",
        "analysis": "x 坐标相同，距离 = |3−(−1)| = 4。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "点(-2,-4)位于哪个象限？",
        "options": [
          "A. 第一象限",
          "B. 第二象限",
          "C. 第三象限",
          "D. 第四象限"
        ],
        "answer": "C",
        "knowledgePoint": "四个象限",
        "analysis": "x小于0，y小于0，在第三象限。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "守门员在 (0,0)，追球手在 (3,4)，两者直线距离是？",
        "options": [
          "A. 5",
          "B. 7",
          "C. 6",
          "D. 12"
        ],
        "answer": "A",
        "knowledgePoint": "笛卡尔坐标系",
        "analysis": "距离 = √(3²+4²) = √25 = 5。"
      },
      {
        "type": "open",
        "text": "笛卡尔坐标系有什么用途？请举一个生活中用到坐标系的例子。",
        "scoringPoints": [
          "说明坐标系用于定位和描述位置",
          "举出合理的生活例子（如地图、GPS等）",
          "表达清晰"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 11,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "-2 + (-3) = ?",
        "options": [
          "A. -5",
          "B. 5",
          "C. -1",
          "D. 1"
        ],
        "answer": "A",
        "knowledgePoint": "同号相加看同一方向",
        "analysis": "两个负数同号相加，方向都向左，绝对值相加，结果为 -5。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "-7 + 3 的结果符号是什么？",
        "options": [
          "A. 负号",
          "B. 正号",
          "C. 没有符号",
          "D. 无法判断"
        ],
        "answer": "A",
        "knowledgePoint": "异号相加先抵消",
        "analysis": "7 比 3 大，抵消后剩下的方向仍在负数一边。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "5 + 0 等于多少？",
        "options": [
          "A. 5",
          "B. 0",
          "C. -5",
          "D. 10"
        ],
        "answer": "A",
        "knowledgePoint": "用数轴检查移动",
        "analysis": "零在加法中不改变原来的数。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "4 + (-6) 在数轴上从 4 出发应往哪边走？",
        "options": [
          "A. 向左",
          "B. 向右",
          "C. 不动",
          "D. 先到 10"
        ],
        "answer": "A",
        "knowledgePoint": "用数轴检查移动",
        "analysis": "加负数表示向左移动。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "下列哪一种说法正确？",
        "options": [
          "A. 异号相加先抵消",
          "B. 所有负数相加都会变正",
          "C. 加零会变成零",
          "D. 数轴不能检查加法"
        ],
        "answer": "A",
        "knowledgePoint": "异号相加先抵消",
        "analysis": "异号相加代表相反方向的移动，先抵消再看剩余方向。"
      },
      {
        "type": "open",
        "text": "请解释《正负数加法：方向与抵消》这一课最重要的规则，并举一个算式说明你如何检查答案。",
        "scoringPoints": [
          "说明同号相加：同一方向继续移动或异号相加：相反方向互相抵消",
          "给出正确算式例子",
          "说明检查过程"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 12,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "5 - 2 在数轴上表示什么？",
        "options": [
          "A. 从 5 向左 2 格",
          "B. 从 5 向右 2 格",
          "C. 从 2 向右 5 格",
          "D. 不移动"
        ],
        "answer": "A",
        "knowledgePoint": "减去正数等于向左走",
        "analysis": "减去正数表示向左移动。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "5 - (-2) 应改写为？",
        "options": [
          "A. 5 + 2",
          "B. 5 - 2",
          "C. -5 + 2",
          "D. -5 - 2"
        ],
        "answer": "A",
        "knowledgePoint": "减去负数等于加正数",
        "analysis": "减去一个数等于加它的相反数，-2 的相反数是 +2。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "8 - (-3) 等于多少？",
        "options": [
          "A. 11",
          "B. 5",
          "C. -11",
          "D. -5"
        ],
        "answer": "A",
        "knowledgePoint": "减去正数等于向左走",
        "analysis": "8 - (-3) = 8 + 3 = 11。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "12 - 5 = 7 的验算式是？",
        "options": [
          "A. 7 + 5 = 12",
          "B. 7 - 5 = 12",
          "C. 12 + 5 = 7",
          "D. 5 - 7 = 12"
        ],
        "answer": "A",
        "knowledgePoint": "用加法检查减法",
        "analysis": "减掉的数加回结果，应回到原数。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "减去负数为什么会变大？",
        "options": [
          "A. 因为它等于加正数",
          "B. 因为负数没有意义",
          "C. 因为减法总会变大",
          "D. 因为零改变了方向"
        ],
        "answer": "A",
        "knowledgePoint": "减去负数等于加正数",
        "analysis": "减去负数就是加它的相反数。"
      },
      {
        "type": "open",
        "text": "请解释《正负数减法：减去就是加相反数》这一课最重要的规则，并举一个算式说明你如何检查答案。",
        "scoringPoints": [
          "说明减去正数：向左移动或减去负数：改成加相反数",
          "给出正确算式例子",
          "说明检查过程"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 13,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "计算 (-3) x 4 时，结果的符号应该是什么？",
        "options": [
          "A. 正号",
          "B. 负号",
          "C. 没有符号",
          "D. 无法判断"
        ],
        "answer": "B",
        "knowledgePoint": "异号相乘得负",
        "analysis": "一个负因数和一个正因数相乘，是异号相乘，结果为负。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "(-2) x (-5) 的结果是？",
        "options": [
          "A. -10",
          "B. 10",
          "C. -7",
          "D. 7"
        ],
        "answer": "B",
        "knowledgePoint": "同号相乘得正",
        "analysis": "两个因数都是负数，是同号相乘，结果为正；绝对值 2 x 5 = 10。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "(-6) x 3 的结果是？",
        "options": [
          "A. -18",
          "B. 18",
          "C. -9",
          "D. 9"
        ],
        "answer": "A",
        "knowledgePoint": "用除法反查乘法",
        "analysis": "先看符号：异号为负；再算绝对值：6 x 3 = 18，所以结果是 -18。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "三个负因数相乘，结果的符号是？",
        "options": [
          "A. 正号",
          "B. 负号",
          "C. 一定是 0",
          "D. 只看最后一个数"
        ],
        "answer": "B",
        "knowledgePoint": "多个负号看个数",
        "analysis": "负号个数是 3 个，奇数个负号相乘，结果为负。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "下列哪句话正确概括了整数乘法的符号规则？",
        "options": [
          "A. 只要有负数，结果一定为负",
          "B. 同号得正，异号得负",
          "C. 负数越多，结果越小",
          "D. 乘法不需要看符号"
        ],
        "answer": "B",
        "knowledgePoint": "多个负号看个数",
        "analysis": "整数乘法先判断符号：同号相乘结果为正，异号相乘结果为负；多个负号则看负号个数的奇偶。"
      },
      {
        "type": "open",
        "text": "用自己的话说明整数乘法为什么要先判断符号，再计算绝对值，并举一个算式例子。",
        "scoringPoints": [
          "能说出乘法中符号和绝对值是两件事",
          "能正确说明同号得正、异号得负，或多个负号看奇偶",
          "能给出一个正确算式并解释结果"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 14,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "(-12) / 3 的结果是？",
        "options": [
          "A. -4",
          "B. 4",
          "C. -9",
          "D. 9"
        ],
        "answer": "A",
        "knowledgePoint": "整数除法的符号规则",
        "analysis": "负数除以正数是异号相除，结果为负；12 / 3 = 4，所以结果是 -4。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "18 能被 3 整除吗？",
        "options": [
          "A. 能，因为没有余数",
          "B. 不能，因为 18 比 3 大",
          "C. 不能，因为 3 是奇数",
          "D. 无法判断"
        ],
        "answer": "A",
        "knowledgePoint": "整数除法的符号规则",
        "analysis": "18 / 3 = 6，没有余数，所以 18 能被 3 整除。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "19 / 5 的余数是？",
        "options": [
          "A. 3",
          "B. 4",
          "C. 5",
          "D. 14"
        ],
        "answer": "B",
        "knowledgePoint": "因数与倍数",
        "analysis": "5 x 3 = 15，19 - 15 = 4，所以余数是 4。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "要验算 28 / 4 = 7，应该看哪一个乘法？",
        "options": [
          "A. 7 x 4 = 28",
          "B. 28 x 4 = 112",
          "C. 28 - 4 = 24",
          "D. 7 + 4 = 11"
        ],
        "answer": "A",
        "knowledgePoint": "用乘法检查除法",
        "analysis": "除法可以用“商 x 除数 = 被除数”来验算，所以看 7 x 4 是否等于 28。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "下列哪句话最准确地说明“整除”？",
        "options": [
          "A. 只要两个数都很大，就是整除",
          "B. 除完没有余数，才叫整除",
          "C. 只要答案是正数，就是整除",
          "D. 所有除法都叫整除"
        ],
        "answer": "B",
        "knowledgePoint": "整数除法的符号规则",
        "analysis": "整除强调没有余数，不是看数字大小，也不是看结果正负。"
      },
      {
        "type": "open",
        "text": "说明“整除”和“有余数的除法”有什么不同，并用两个算式分别举例。",
        "scoringPoints": [
          "能说明整除没有余数",
          "能说明有余数的除法会剩下一部分",
          "能给出两个正确例子并标清商或余数"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 15,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "计算 3 x (2 + 5) 时，应该先算哪一部分？",
        "options": [
          "A. 3 x 2",
          "B. 2 + 5",
          "C. 3 + 5",
          "D. 最后一个数 5"
        ],
        "answer": "B",
        "knowledgePoint": "括号先算",
        "analysis": "括号会改变默认顺序，括号里的 2 + 5 必须先算。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "3 + 2 x 5 的结果是？",
        "options": [
          "A. 25",
          "B. 13",
          "C. 17",
          "D. 10"
        ],
        "answer": "B",
        "knowledgePoint": "乘除先于加减",
        "analysis": "先算 2 x 5 = 10，再算 3 + 10 = 13。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "20 / 5 x 2 的结果是？",
        "options": [
          "A. 2",
          "B. 8",
          "C. 20",
          "D. 50"
        ],
        "answer": "B",
        "knowledgePoint": "同级运算从左到右",
        "analysis": "除法和乘法同级，从左到右：20 / 5 = 4，再 4 x 2 = 8。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "计算 3 + 2 x (5 - 1) 时，第一步应该是？",
        "options": [
          "A. 3 + 2",
          "B. 2 x 5",
          "C. 5 - 1",
          "D. 1 x 3"
        ],
        "answer": "C",
        "knowledgePoint": "乘除先于加减",
        "analysis": "括号最高优先级，所以先算 5 - 1。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "下列哪条运算顺序是正确的？",
        "options": [
          "A. 加减、乘除、括号",
          "B. 括号、乘除、加减，同级从左到右",
          "C. 从右到左全部计算",
          "D. 先算看起来最大的数"
        ],
        "answer": "B",
        "knowledgePoint": "同级运算从左到右",
        "analysis": "整数混合运算通常按括号、乘除、加减的顺序进行；同级运算从左到右。"
      },
      {
        "type": "open",
        "text": "用一个例子说明为什么 3 + 2 x 5 不能从左到右直接算成 25。",
        "scoringPoints": [
          "能指出乘法优先于加法",
          "能写出正确计算过程 2 x 5 再加 3",
          "能解释错误算法错在改变了运算顺序"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 16,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "计算 -3 + 4 x 2 时，应该先算哪一步？",
        "options": [
          "A. -3 + 4",
          "B. 4 x 2",
          "C. 2 - 3",
          "D. 先改成正数"
        ],
        "answer": "B",
        "knowledgePoint": "再计算绝对值或数量",
        "analysis": "乘法优先于加法，所以先算 4 x 2。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "在 6 - (-2 + 5) 中，括号里的结果是？",
        "options": [
          "A. -7",
          "B. -3",
          "C. 3",
          "D. 7"
        ],
        "answer": "C",
        "knowledgePoint": "先判断符号和方向",
        "analysis": "括号内先算 -2 + 5 = 3。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "(-4) x (3 - 8) 的结果是？",
        "options": [
          "A. -20",
          "B. 20",
          "C. -12",
          "D. 12"
        ],
        "answer": "B",
        "knowledgePoint": "用数轴或逆运算检查",
        "analysis": "先算括号 3 - 8 = -5，再算 (-4) x (-5) = 20。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "检查 (-4) x (-5) 的符号时，应得到什么结论？",
        "options": [
          "A. 两个负号，结果为正",
          "B. 两个负号，结果为负",
          "C. 只看 5，所以为负",
          "D. 无法判断"
        ],
        "answer": "A",
        "knowledgePoint": "用数轴或逆运算检查",
        "analysis": "两个负因数相乘是同号相乘，结果为正。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "为什么复杂整数题最好“一行只改变一件事”？",
        "options": [
          "A. 为了把纸写满",
          "B. 为了让每一步能被检查，错误更容易找到",
          "C. 因为答案会自动变大",
          "D. 因为括号会消失"
        ],
        "answer": "B",
        "knowledgePoint": "把步骤写成可复查的算式",
        "analysis": "一行只改变一件事，可以清楚看见符号、括号和运算顺序是否被正确处理。"
      },
      {
        "type": "open",
        "text": "任选一个含括号和负数的整数混合运算，写出每一步，并说明你怎样检查结果。",
        "scoringPoints": [
          "能写出含括号和负数的合理算式",
          "能按顺序逐步计算，每步只改变必要部分",
          "能说明一种检查方法，如估算、逆运算或符号检查"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 17,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "下面哪个数是12的因数？",
        "options": [
          "A. 3",
          "B. 5",
          "C. 7",
          "D. 8"
        ],
        "answer": "A",
        "knowledgePoint": "列出一个数的因数",
        "analysis": "12÷3=4，没有余数，所以3是12的因数。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "下面哪个数是6的倍数？",
        "options": [
          "A. 24",
          "B. 14",
          "C. 20",
          "D. 25"
        ],
        "answer": "A",
        "knowledgePoint": "认识倍数",
        "analysis": "24=6×4，是6的倍数。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "18的所有正因数是哪一组？",
        "options": [
          "A. 1,2,3,6,9,18",
          "B. 1,3,9,18",
          "C. 2,3,6,9",
          "D. 1,2,4,8,18"
        ],
        "answer": "A",
        "knowledgePoint": "列出一个数的因数",
        "analysis": "能整除18的正整数有1、2、3、6、9、18。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "判断一个数是否是另一个数的因数，关键看什么？",
        "options": [
          "A. 能否整除",
          "B. 数字是否更大",
          "C. 是否是奇数",
          "D. 是否有两位"
        ],
        "answer": "A",
        "knowledgePoint": "找出整除关系",
        "analysis": "如果a能整除b，那么a是b的因数，b是a的倍数。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "24既是3的倍数，也是4的倍数，因此24一定是什么的倍数？",
        "options": [
          "A. 12",
          "B. 7",
          "C. 8一定不是",
          "D. 5"
        ],
        "answer": "A",
        "knowledgePoint": "列出一个数的因数",
        "analysis": "24能被12整除；这里3和4互质，公倍数也是12的倍数。"
      },
      {
        "type": "open",
        "text": "请列出24的所有正因数，并说明怎样检查有没有漏掉。",
        "scoringPoints": [
          "列出1,2,3,4,6,8,12,24",
          "用成对乘积检查如1×24、2×12、3×8、4×6",
          "说明每对乘积都等于24"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 18,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "下面哪个数是质数？",
        "options": [
          "A. 13",
          "B. 12",
          "C. 15",
          "D. 21"
        ],
        "answer": "A",
        "knowledgePoint": "质数只有两个正因数",
        "analysis": "13只有1和13两个正因数，是质数。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "下面哪个数是合数？",
        "options": [
          "A. 9",
          "B. 2",
          "C. 3",
          "D. 5"
        ],
        "answer": "A",
        "knowledgePoint": "合数有两个以上正因数",
        "analysis": "9除了1和9，还有因数3，所以是合数。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "1是质数还是合数？",
        "options": [
          "A. 都不是",
          "B. 质数",
          "C. 合数",
          "D. 既是质数又是合数"
        ],
        "answer": "A",
        "knowledgePoint": "1既不是质数也不是合数",
        "analysis": "1只有一个正因数，不满足质数或合数的定义。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "用筛法找100以内质数时，为什么要划去2的倍数中大于2的数？",
        "options": [
          "A. 它们都有因数2，不是质数",
          "B. 它们都小于2",
          "C. 它们没有因数",
          "D. 它们都是奇数"
        ],
        "answer": "A",
        "knowledgePoint": "用筛法找质数",
        "analysis": "大于2的2的倍数至少有1、2和自身等因数，因此不是质数。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "下面哪组全是质数？",
        "options": [
          "A. 2,3,5,7",
          "B. 1,2,3,4",
          "C. 3,9,11,13",
          "D. 5,15,17,19"
        ],
        "answer": "A",
        "knowledgePoint": "质数只有两个正因数",
        "analysis": "2、3、5、7都只有两个正因数。"
      },
      {
        "type": "open",
        "text": "请解释质数和合数的区别，并说明为什么1不属于两者。",
        "scoringPoints": [
          "质数只有1和它本身两个正因数",
          "合数有两个以上正因数",
          "1只有一个正因数"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 19,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "12的质因数分解是哪一个？",
        "options": [
          "A. 2²×3",
          "B. 2×6",
          "C. 3×4",
          "D. 12×1"
        ],
        "answer": "A",
        "knowledgePoint": "用质因数拆开结构",
        "analysis": "12=2×2×3=2²×3，因数都是质数。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "18的质因数分解是哪一个？",
        "options": [
          "A. 2×3²",
          "B. 3×6",
          "C. 2×9",
          "D. 18×1"
        ],
        "answer": "A",
        "knowledgePoint": "用质因数拆开结构",
        "analysis": "18=2×3×3=2×3²。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "30的质因数分解是？",
        "options": [
          "A. 2×3×5",
          "B. 3×10",
          "C. 5×6",
          "D. 2×15"
        ],
        "answer": "A",
        "knowledgePoint": "分解结果的唯一性",
        "analysis": "30=2×3×5，三者都是质数。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "质因数分解为什么不能停在4×6？",
        "options": [
          "A. 4和6不是质数，还能继续分解",
          "B. 4×6不等于24",
          "C. 只能用奇数",
          "D. 必须有小数"
        ],
        "answer": "A",
        "knowledgePoint": "短除法分解",
        "analysis": "质因数分解必须分到每个因数都是质数。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "72的质因数分解是哪一个？",
        "options": [
          "A. 2³×3²",
          "B. 2²×3²",
          "C. 8×9",
          "D. 2×36"
        ],
        "answer": "A",
        "knowledgePoint": "分解结果的唯一性",
        "analysis": "72=8×9=2³×3²。"
      },
      {
        "type": "open",
        "text": "请把84分解成质因数，并用乘法检查。",
        "scoringPoints": [
          "84=2×42=2×2×21=2²×3×7",
          "所有因数2、3、7都是质数",
          "检查4×3×7=84"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 20,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "12和18的最大公因数是多少？",
        "options": [
          "A. 6",
          "B. 3",
          "C. 12",
          "D. 36"
        ],
        "answer": "A",
        "knowledgePoint": "用质因数找最大公因数",
        "analysis": "12的因数和18的因数中最大的共同因数是6。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "8和20的最大公因数是多少？",
        "options": [
          "A. 4",
          "B. 2",
          "C. 8",
          "D. 40"
        ],
        "answer": "A",
        "knowledgePoint": "用质因数找最大公因数",
        "analysis": "8的因数有1,2,4,8；20的因数有1,2,4,5,10,20，最大共同因数是4。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "18和24的最大公因数是多少？",
        "options": [
          "A. 6",
          "B. 12",
          "C. 3",
          "D. 72"
        ],
        "answer": "A",
        "knowledgePoint": "用最大公因数化简分数",
        "analysis": "18=2×3²，24=2³×3，共同部分2×3=6。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "求最大公因数常用于哪类问题？",
        "options": [
          "A. 尽量平均分组且不剩余",
          "B. 找第一次同时出现",
          "C. 求面积",
          "D. 比较小数位"
        ],
        "answer": "A",
        "knowledgePoint": "把最大公因数用于分组",
        "analysis": "最大公因数适合把两类数量平均分成尽可能大的相同组。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "有24颗糖和36块饼干，平均分给若干人且都不剩，最多能分给几人？",
        "options": [
          "A. 12人",
          "B. 6人",
          "C. 24人",
          "D. 36人"
        ],
        "answer": "A",
        "knowledgePoint": "用质因数找最大公因数",
        "analysis": "最多人数是24和36的最大公因数12。"
      },
      {
        "type": "open",
        "text": "请用列因数或质因数分解求28和42的最大公因数，并说明应用情境。",
        "scoringPoints": [
          "28和42的最大公因数为14",
          "过程可列因数或分解",
          "说明可用于最大平均分组"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 21,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "4和6的最小公倍数是多少？",
        "options": [
          "A. 12",
          "B. 24",
          "C. 6",
          "D. 2"
        ],
        "answer": "A",
        "knowledgePoint": "区分最大公因数和最小公倍数",
        "analysis": "4的倍数12和6的倍数12第一次相同。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "3和5的最小公倍数是多少？",
        "options": [
          "A. 15",
          "B. 8",
          "C. 10",
          "D. 3"
        ],
        "answer": "A",
        "knowledgePoint": "用质因数找最小公倍数",
        "analysis": "3和5互质，最小公倍数为3×5=15。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "8和12的最小公倍数是多少？",
        "options": [
          "A. 24",
          "B. 12",
          "C. 48",
          "D. 4"
        ],
        "answer": "A",
        "knowledgePoint": "区分最大公因数和最小公倍数",
        "analysis": "8的倍数有8,16,24；12的倍数有12,24，最小共同倍数是24。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "求最小公倍数常用于哪类问题？",
        "options": [
          "A. 找周期第一次同时出现",
          "B. 尽量平均分组",
          "C. 求最大因数",
          "D. 求小数位数"
        ],
        "answer": "A",
        "knowledgePoint": "区分最大公因数和最小公倍数",
        "analysis": "最小公倍数适合周期问题中找第一次同时发生的时刻。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一件事每4天一次，另一件事每6天一次，今天同时发生，下次同时发生在几天后？",
        "options": [
          "A. 12天",
          "B. 10天",
          "C. 24天",
          "D. 2天"
        ],
        "answer": "A",
        "knowledgePoint": "区分最大公因数和最小公倍数",
        "analysis": "下次同时发生间隔是4和6的最小公倍数12天。"
      },
      {
        "type": "open",
        "text": "请求6和8的最小公倍数，并写一个“两个周期再次同时出现”的例子。",
        "scoringPoints": [
          "LCM(6,8)=24",
          "过程可列倍数或质因数分解",
          "例子说明每6天和每8天一次，24天后再次同时"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 22,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "分数12/18约分后的最简分数是多少？",
        "options": [
          "A. 2/3",
          "B. 6/9",
          "C. 4/6",
          "D. 3/4"
        ],
        "answer": "A",
        "knowledgePoint": "用约分检查分数等值",
        "analysis": "12和18的最大公因数是6，同时除以6得2/3。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "分数8/20约分后的最简分数是多少？",
        "options": [
          "A. 2/5",
          "B. 4/10",
          "C. 8/10",
          "D. 1/4"
        ],
        "answer": "A",
        "knowledgePoint": "找出分子分母的公因数",
        "analysis": "8和20的最大公因数是4，约分得2/5。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "约分时，分子和分母必须怎样操作？",
        "options": [
          "A. 同时除以同一个非零公因数",
          "B. 只除分子",
          "C. 只除分母",
          "D. 同时加同一个数"
        ],
        "answer": "A",
        "knowledgePoint": "分子分母同时除以同一个数",
        "analysis": "分子分母同除以同一个非零数，分数大小不变。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "18/24约分到最简是多少？",
        "options": [
          "A. 3/4",
          "B. 9/12",
          "C. 6/8",
          "D. 18/6"
        ],
        "answer": "A",
        "knowledgePoint": "判断最简分数",
        "analysis": "18和24最大公因数为6，约分得3/4。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "为什么16/24约分时最好先找最大公因数？",
        "options": [
          "A. 可以一步化到最简",
          "B. 会改变分数大小",
          "C. 只能找最小公倍数",
          "D. 不需要分母"
        ],
        "answer": "A",
        "knowledgePoint": "找出分子分母的公因数",
        "analysis": "用最大公因数8约分，16/24直接变为2/3。"
      },
      {
        "type": "open",
        "text": "请把30/45约分到最简，并说明用到了哪个最大公因数。",
        "scoringPoints": [
          "30和45的最大公因数为15",
          "30÷15=2，45÷15=3",
          "最简为2/3"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 23,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一个数能被2整除，需要满足什么？",
        "options": [
          "A. 个位是0、2、4、6、8",
          "B. 各位数字和是3的倍数",
          "C. 末两位是25",
          "D. 必须是质数"
        ],
        "answer": "A",
        "knowledgePoint": "2、5、10的整除规则",
        "analysis": "偶数能被2整除，个位为0、2、4、6、8。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一个数能被5整除，个位可能是哪一组？",
        "options": [
          "A. 0或5",
          "B. 1或5",
          "C. 2或4",
          "D. 3或6"
        ],
        "answer": "A",
        "knowledgePoint": "2、5、10的整除规则",
        "analysis": "个位是0或5的整数能被5整除。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "判断123是否能被3整除，应看什么？",
        "options": [
          "A. 各位数字和",
          "B. 个位数字",
          "C. 百位数字",
          "D. 数字个数"
        ],
        "answer": "A",
        "knowledgePoint": "3和9的整除规则",
        "analysis": "1+2+3=6，6是3的倍数，所以123能被3整除。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "下面哪个数能被9整除？",
        "options": [
          "A. 432",
          "B. 431",
          "C. 425",
          "D. 422"
        ],
        "answer": "A",
        "knowledgePoint": "3和9的整除规则",
        "analysis": "4+3+2=9，9能被9整除，所以432能被9整除。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "数字□在数2□4中，若这个三位数能被3整除，□可以是哪个？",
        "options": [
          "A. 0",
          "B. 1",
          "C. 2",
          "D. 4"
        ],
        "answer": "A",
        "knowledgePoint": "2、5、10的整除规则",
        "analysis": "2+0+4=6，是3的倍数，所以204能被3整除。"
      },
      {
        "type": "open",
        "text": "请用整除规则判断738能否被2、3、9整除，并说明理由。",
        "scoringPoints": [
          "738个位8，可被2整除",
          "7+3+8=18，可被3整除",
          "18也是9的倍数，可被9整除"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 24,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "17除以5的余数是多少？",
        "options": [
          "A. 2",
          "B. 3",
          "C. 5",
          "D. 12"
        ],
        "answer": "A",
        "knowledgePoint": "余数表示分完后剩下多少",
        "analysis": "17=5×3+2，余数为2。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一个周期长度为4，第9个位置对应周期中的第几个？",
        "options": [
          "A. 第1个",
          "B. 第2个",
          "C. 第3个",
          "D. 第4个"
        ],
        "answer": "A",
        "knowledgePoint": "余数为0表示正好回到周期起点",
        "analysis": "9÷4余1，所以对应周期第1个。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "颜色按红、蓝、绿循环，第8个颜色是什么？",
        "options": [
          "A. 蓝",
          "B. 红",
          "C. 绿",
          "D. 无法判断"
        ],
        "answer": "A",
        "knowledgePoint": "周期问题看余数",
        "analysis": "周期长度3，8÷3余2，对应第2个蓝。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "如果除以6余0，表示什么？",
        "options": [
          "A. 正好整除",
          "B. 余数是6",
          "C. 不能除",
          "D. 商是0"
        ],
        "answer": "A",
        "knowledgePoint": "余数为0表示正好回到周期起点",
        "analysis": "余数为0表示被6整除。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "图案按A,B,C,D循环，第26个图案是什么？",
        "options": [
          "A. B",
          "B. A",
          "C. C",
          "D. D"
        ],
        "answer": "A",
        "knowledgePoint": "周期问题看余数",
        "analysis": "周期4，26÷4余2，对应第2个B。"
      },
      {
        "type": "open",
        "text": "图案按月亮、星星、羽毛三项循环。请判断第20项是什么，并写出余数过程。",
        "scoringPoints": [
          "周期长度3",
          "20÷3余2",
          "第2项是星星"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 25,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "计算2/3×3/5，结果是多少？",
        "options": [
          "A. 2/5",
          "B. 5/8",
          "C. 6/15",
          "D. 1"
        ],
        "answer": "A",
        "knowledgePoint": "分子乘分子，分母乘分母",
        "analysis": "2/3×3/5可约去3，结果2/5。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "计算1/4×8，结果是多少？",
        "options": [
          "A. 2",
          "B. 1/2",
          "C. 8/4",
          "D. 32"
        ],
        "answer": "A",
        "knowledgePoint": "分子乘分子，分母乘分母",
        "analysis": "8的1/4是2。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "求60的2/5是多少？",
        "options": [
          "A. 24",
          "B. 30",
          "C. 12",
          "D. 150"
        ],
        "answer": "A",
        "knowledgePoint": "分子乘分子，分母乘分母",
        "analysis": "60×2/5=24。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "计算3/4×2/9，能先约分吗？",
        "options": [
          "A. 能，3和9可约，2和4可约",
          "B. 不能，必须直接乘",
          "C. 只能约分子",
          "D. 只能约分母"
        ],
        "answer": "A",
        "knowledgePoint": "分子乘分子，分母乘分母",
        "analysis": "分子和分母交叉有公因数时可以先约分。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "计算3/4×2/9的最简结果是多少？",
        "options": [
          "A. 1/6",
          "B. 6/36",
          "C. 5/13",
          "D. 2/12"
        ],
        "answer": "A",
        "knowledgePoint": "分子乘分子，分母乘分母",
        "analysis": "3/4×2/9=6/36=1/6。"
      },
      {
        "type": "open",
        "text": "请计算45的2/3，并说明“求一个数的几分之几”为什么用乘法。",
        "scoringPoints": [
          "45×2/3=30",
          "说明先把45平均分成3份，每份15",
          "取2份为30"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 26,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "3/4的倒数是多少？",
        "options": [
          "A. 4/3",
          "B. 3/4",
          "C. 1/4",
          "D. 7/4"
        ],
        "answer": "A",
        "knowledgePoint": "除以分数等于乘倒数",
        "analysis": "分子分母交换，3/4的倒数是4/3。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "计算1/2÷1/4，结果是多少？",
        "options": [
          "A. 2",
          "B. 1/8",
          "C. 1/6",
          "D. 4"
        ],
        "answer": "A",
        "knowledgePoint": "分数除法先看含义",
        "analysis": "除以1/4等于乘4，1/2×4=2。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "计算2/3÷4/5，正确写法是？",
        "options": [
          "A. 2/3×5/4",
          "B. 2/3×4/5",
          "C. 3/2×4/5",
          "D. 2/3+5/4"
        ],
        "answer": "A",
        "knowledgePoint": "除以分数等于乘倒数",
        "analysis": "除以4/5等于乘它的倒数5/4。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "计算2/3÷4/5，结果是多少？",
        "options": [
          "A. 5/6",
          "B. 8/15",
          "C. 6/5",
          "D. 10/12"
        ],
        "answer": "A",
        "knowledgePoint": "分数除法先看含义",
        "analysis": "2/3×5/4=10/12=5/6。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一条绳子长3/4米，每段1/8米，可以剪几段？",
        "options": [
          "A. 6段",
          "B. 3段",
          "C. 8段",
          "D. 1/6段"
        ],
        "answer": "A",
        "knowledgePoint": "除以分数等于乘倒数",
        "analysis": "3/4÷1/8=3/4×8=6段。"
      },
      {
        "type": "open",
        "text": "请计算5/6÷2/3，并用“乘倒数”说明每一步。",
        "scoringPoints": [
          "把除以2/3改成乘3/2",
          "5/6×3/2=15/12=5/4",
          "可写成1 1/4"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 27,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "计算1/2+1/3，结果是多少？",
        "options": [
          "A. 5/6",
          "B. 2/5",
          "C. 1/6",
          "D. 1"
        ],
        "answer": "A",
        "knowledgePoint": "加减前先通分",
        "analysis": "通分为6分母，3/6+2/6=5/6。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "计算3/4-1/2，结果是多少？",
        "options": [
          "A. 1/4",
          "B. 2/4",
          "C. 1/2",
          "D. 1/8"
        ],
        "answer": "A",
        "knowledgePoint": "加减前先通分",
        "analysis": "1/2=2/4，3/4-2/4=1/4。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "计算1/2+1/3×3/4时，应先算哪一步？",
        "options": [
          "A. 1/3×3/4",
          "B. 1/2+1/3",
          "C. 1/2×3/4",
          "D. 直接通分所有数"
        ],
        "answer": "A",
        "knowledgePoint": "先按运算顺序分层",
        "analysis": "混合运算中乘除先于加减。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "计算1/2+1/3×3/4，结果是多少？",
        "options": [
          "A. 3/4",
          "B. 5/8",
          "C. 7/12",
          "D. 1"
        ],
        "answer": "A",
        "knowledgePoint": "先按运算顺序分层",
        "analysis": "1/3×3/4=1/4，1/2+1/4=3/4。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "计算(1/2+1/3)×6，结果是多少？",
        "options": [
          "A. 5",
          "B. 1",
          "C. 6/5",
          "D. 5/6"
        ],
        "answer": "A",
        "knowledgePoint": "先按运算顺序分层",
        "analysis": "括号内1/2+1/3=5/6，再乘6得5。"
      },
      {
        "type": "open",
        "text": "请计算2/3-1/4×2，并写出为什么先算乘法。",
        "scoringPoints": [
          "先算1/4×2=1/2",
          "再算2/3-1/2=1/6",
          "说明乘法先于减法"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 28,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "带分数1 3/4化成假分数是多少？",
        "options": [
          "A. 7/4",
          "B. 4/7",
          "C. 3/5",
          "D. 5/4"
        ],
        "answer": "A",
        "knowledgePoint": "带分数化假分数",
        "analysis": "1 3/4=(1×4+3)/4=7/4。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "假分数9/4化成带分数是多少？",
        "options": [
          "A. 2 1/4",
          "B. 1 2/4",
          "C. 4 1/2",
          "D. 3 1/4"
        ],
        "answer": "A",
        "knowledgePoint": "带分数化假分数",
        "analysis": "9÷4=2余1，所以9/4=2 1/4。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "2 1/3化成假分数是多少？",
        "options": [
          "A. 7/3",
          "B. 5/3",
          "C. 3/7",
          "D. 6/3"
        ],
        "answer": "A",
        "knowledgePoint": "假分数化带分数",
        "analysis": "2 1/3=(2×3+1)/3=7/3。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "11/5化成带分数是多少？",
        "options": [
          "A. 2 1/5",
          "B. 1 1/5",
          "C. 2 5/1",
          "D. 5 1/2"
        ],
        "answer": "A",
        "knowledgePoint": "带分数化假分数",
        "analysis": "11÷5=2余1，所以是2 1/5。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "计算1 1/2+2 1/3，结果是多少？",
        "options": [
          "A. 3 5/6",
          "B. 3 1/5",
          "C. 2 5/6",
          "D. 4 1/6"
        ],
        "answer": "A",
        "knowledgePoint": "带分数表示整体加部分",
        "analysis": "1 1/2=1 3/6，2 1/3=2 2/6，总和3 5/6。"
      },
      {
        "type": "open",
        "text": "请把2 3/5化成假分数，再把18/5化成带分数。",
        "scoringPoints": [
          "2 3/5=(2×5+3)/5=13/5",
          "18÷5=3余3",
          "18/5=3 3/5"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 29,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "比较1/2和1/3，哪个更大？",
        "options": [
          "A. 1/2",
          "B. 1/3",
          "C. 一样大",
          "D. 无法比较"
        ],
        "answer": "A",
        "knowledgePoint": "同分母比分子",
        "analysis": "同样整体下，二分之一大于三分之一。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "比较3/5和4/5，哪个更大？",
        "options": [
          "A. 4/5",
          "B. 3/5",
          "C. 一样大",
          "D. 无法比较"
        ],
        "answer": "A",
        "knowledgePoint": "同分子比分母",
        "analysis": "分母相同，分子越大分数越大。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "比较2/3和3/4，哪个更大？",
        "options": [
          "A. 3/4",
          "B. 2/3",
          "C. 一样大",
          "D. 无法比较"
        ],
        "answer": "A",
        "knowledgePoint": "通分后比较",
        "analysis": "2/3=8/12，3/4=9/12，所以3/4更大。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "比较5/6和7/9，哪个更大？",
        "options": [
          "A. 5/6",
          "B. 7/9",
          "C. 一样大",
          "D. 无法比较"
        ],
        "answer": "A",
        "knowledgePoint": "通分后比较",
        "analysis": "5×9=45，7×6=42，所以5/6更大。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "下列哪个分数最接近1？",
        "options": [
          "A. 9/10",
          "B. 2/3",
          "C. 3/5",
          "D. 1/4"
        ],
        "answer": "A",
        "knowledgePoint": "通分后比较",
        "analysis": "9/10距离1只差1/10，比其他选项更接近1。"
      },
      {
        "type": "open",
        "text": "请比较5/8和3/5的大小，至少写出一种可靠方法。",
        "scoringPoints": [
          "可通分为25/40和24/40",
          "或交叉乘5×5=25，3×8=24",
          "结论5/8更大"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 30,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一瓶药水用去1/4，还剩多少？",
        "options": [
          "A. 3/4",
          "B. 1/4",
          "C. 1/2",
          "D. 5/4"
        ],
        "answer": "A",
        "knowledgePoint": "先确定整体",
        "analysis": "整体1减去1/4，剩下3/4。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一袋材料有40克，用去1/5，用去了多少克？",
        "options": [
          "A. 8克",
          "B. 20克",
          "C. 5克",
          "D. 35克"
        ],
        "answer": "A",
        "knowledgePoint": "区分全部的几分之几和剩余的几分之几",
        "analysis": "40×1/5=8克。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一袋材料40克，用去1/5后还剩多少克？",
        "options": [
          "A. 32克",
          "B. 8克",
          "C. 35克",
          "D. 20克"
        ],
        "answer": "A",
        "knowledgePoint": "区分全部的几分之几和剩余的几分之几",
        "analysis": "用去8克，剩40-8=32克。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "某数的3/4是18，这个数是多少？",
        "options": [
          "A. 24",
          "B. 13.5",
          "C. 18",
          "D. 72"
        ],
        "answer": "A",
        "knowledgePoint": "区分全部的几分之几和剩余的几分之几",
        "analysis": "整体=18÷3/4=18×4/3=24。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一本书读了2/5，还剩90页。这本书一共有多少页？",
        "options": [
          "A. 150页",
          "B. 36页",
          "C. 225页",
          "D. 90页"
        ],
        "answer": "A",
        "knowledgePoint": "先确定整体",
        "analysis": "剩余为3/5，对应90页，整体=90÷3/5=150页。"
      },
      {
        "type": "open",
        "text": "一瓶药水用去2/5，还剩90ml。请先写出剩余占整体的几分之几，再求原来多少ml。",
        "scoringPoints": [
          "剩余为1-2/5=3/5",
          "整体=90÷3/5=150ml",
          "检查150×3/5=90ml"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 31,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一个量增加1/4后，是原来的多少？",
        "options": [
          "A. 5/4",
          "B. 3/4",
          "C. 1/4",
          "D. 4/5"
        ],
        "answer": "A",
        "knowledgePoint": "增加几分之几先找原量",
        "analysis": "原来是1，增加1/4后为1+1/4=5/4。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一个量减少1/5后，是原来的多少？",
        "options": [
          "A. 4/5",
          "B. 6/5",
          "C. 1/5",
          "D. 5/4"
        ],
        "answer": "A",
        "knowledgePoint": "减少几分之几看剩余",
        "analysis": "原来是1，减少1/5后为4/5。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "80增加1/4后是多少？",
        "options": [
          "A. 100",
          "B. 60",
          "C. 84",
          "D. 20"
        ],
        "answer": "A",
        "knowledgePoint": "增加几分之几先找原量",
        "analysis": "80×(1+1/4)=80×5/4=100。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "80减少1/5后是多少？",
        "options": [
          "A. 64",
          "B. 96",
          "C. 75",
          "D. 16"
        ],
        "answer": "A",
        "knowledgePoint": "减少几分之几看剩余",
        "analysis": "80×4/5=64。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "某数增加1/3后为120，原数是多少？",
        "options": [
          "A. 90",
          "B. 160",
          "C. 40",
          "D. 80"
        ],
        "answer": "A",
        "knowledgePoint": "增加几分之几先找原量",
        "analysis": "增加1/3后是原来的4/3，原数=120÷4/3=90。"
      },
      {
        "type": "open",
        "text": "一种材料原有96克，先减少1/4。请计算剩余量；再说明若减少后是96克，原量应怎样求。",
        "scoringPoints": [
          "96×3/4=72克",
          "若减少后是96克，96对应原量的3/4",
          "原量=96÷3/4=128克"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 32,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "计算2/3+1/6，结果是多少？",
        "options": [
          "A. 5/6",
          "B. 3/9",
          "C. 1/2",
          "D. 2/9"
        ],
        "answer": "A",
        "knowledgePoint": "能约分先约分",
        "analysis": "2/3=4/6，4/6+1/6=5/6。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "计算3/4×2/3，结果是多少？",
        "options": [
          "A. 1/2",
          "B. 5/7",
          "C. 6/12",
          "D. 9/8"
        ],
        "answer": "A",
        "knowledgePoint": "能约分先约分",
        "analysis": "3/4×2/3可约分，结果为1/2。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "计算5/6÷5/12，结果是多少？",
        "options": [
          "A. 2",
          "B. 1/2",
          "C. 25/72",
          "D. 10"
        ],
        "answer": "A",
        "knowledgePoint": "能约分先约分",
        "analysis": "除以5/12等于乘12/5，5/6×12/5=2。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一袋60克材料，用去2/3，还剩多少克？",
        "options": [
          "A. 20克",
          "B. 40克",
          "C. 30克",
          "D. 10克"
        ],
        "answer": "A",
        "knowledgePoint": "能约分先约分",
        "analysis": "用去40克，剩60-40=20克。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "计算(1/2+1/4)÷3/4，结果是多少？",
        "options": [
          "A. 1",
          "B. 3/4",
          "C. 1/2",
          "D. 2"
        ],
        "answer": "A",
        "knowledgePoint": "能约分先约分",
        "analysis": "括号内为3/4，3/4÷3/4=1。"
      },
      {
        "type": "open",
        "text": "请计算(2/3-1/6)×3/5，并写出通分、约分或乘法步骤。",
        "scoringPoints": [
          "2/3-1/6=4/6-1/6=3/6=1/2",
          "1/2×3/5=3/10",
          "步骤清楚可复查"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 33,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "计算0.3×0.4，结果是多少？",
        "options": [
          "A. 0.12",
          "B. 1.2",
          "C. 0.7",
          "D. 12"
        ],
        "answer": "A",
        "knowledgePoint": "小数位数决定小数点位置",
        "analysis": "3×4=12，两因数共有两位小数，结果0.12。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "计算2.5×4，结果是多少？",
        "options": [
          "A. 10",
          "B. 6.5",
          "C. 1",
          "D. 100"
        ],
        "answer": "A",
        "knowledgePoint": "小数位数决定小数点位置",
        "analysis": "25×4=100，2.5×4=10。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "计算1.2×0.5，结果是多少？",
        "options": [
          "A. 0.6",
          "B. 6",
          "C. 1.7",
          "D. 0.06"
        ],
        "answer": "A",
        "knowledgePoint": "小数位数决定小数点位置",
        "analysis": "1.2的一半是0.6。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "2.4×0.3的结果应当怎样估计？",
        "options": [
          "A. 小于2.4",
          "B. 大于24",
          "C. 等于7.2",
          "D. 与0.3无关"
        ],
        "answer": "A",
        "knowledgePoint": "按整数乘法先算数字",
        "analysis": "乘以小于1的正数，结果应小于原数2.4。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "计算2.4×0.3，结果是多少？",
        "options": [
          "A. 0.72",
          "B. 7.2",
          "C. 72",
          "D. 2.7"
        ],
        "answer": "A",
        "knowledgePoint": "小数位数决定小数点位置",
        "analysis": "24×3=72，两因数共有两位小数，结果0.72。"
      },
      {
        "type": "open",
        "text": "请计算3.6×0.25，并说明如何用估算判断结果应小于3.6。",
        "scoringPoints": [
          "可知0.25是1/4，3.6×0.25=0.9",
          "或按小数乘法算出0.9",
          "说明乘以小于1的正数结果变小"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 34,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "计算1.2÷0.3，结果是多少？",
        "options": [
          "A. 4",
          "B. 0.4",
          "C. 3.6",
          "D. 1.5"
        ],
        "answer": "A",
        "knowledgePoint": "用乘法反查小数除法",
        "analysis": "1.2÷0.3等于12÷3=4。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "计算4.5÷0.5，结果是多少？",
        "options": [
          "A. 9",
          "B. 0.9",
          "C. 4",
          "D. 2.25"
        ],
        "answer": "A",
        "knowledgePoint": "除以小于1的小数结果可能变大",
        "analysis": "4.5除以0.5表示有几个0.5，共9个。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "把2.4÷0.6转化为整数除法，应写成？",
        "options": [
          "A. 24÷6",
          "B. 2.4÷6",
          "C. 24÷0.6",
          "D. 240÷6"
        ],
        "answer": "A",
        "knowledgePoint": "除以小于1的小数结果可能变大",
        "analysis": "被除数和除数同时乘10，2.4÷0.6=24÷6。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "计算0.72÷0.3，结果是多少？",
        "options": [
          "A. 2.4",
          "B. 0.24",
          "C. 24",
          "D. 0.216"
        ],
        "answer": "A",
        "knowledgePoint": "用乘法反查小数除法",
        "analysis": "0.72÷0.3=7.2÷3=2.4。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个数除以0.5，结果通常相当于做什么？",
        "options": [
          "A. 乘以2",
          "B. 除以2",
          "C. 加0.5",
          "D. 减0.5"
        ],
        "answer": "A",
        "knowledgePoint": "除以小于1的小数结果可能变大",
        "analysis": "除以0.5就是看有几个一半，相当于乘2。"
      },
      {
        "type": "open",
        "text": "请计算3.75÷0.25，并说明怎样把它转化成整数除法。",
        "scoringPoints": [
          "两数同时乘100，转为375÷25",
          "计算结果15",
          "说明同乘100商不变"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 35,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "0.75写成百分数是多少？",
        "options": [
          "A. 75%",
          "B. 7.5%",
          "C. 750%",
          "D. 0.75%"
        ],
        "answer": "A",
        "knowledgePoint": "小数和百分数互化",
        "analysis": "0.75×100%=75%。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "25%写成小数是多少？",
        "options": [
          "A. 0.25",
          "B. 2.5",
          "C. 25",
          "D. 0.025"
        ],
        "answer": "A",
        "knowledgePoint": "小数和百分数互化",
        "analysis": "25%=25÷100=0.25。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "3/4写成小数和百分数分别是多少？",
        "options": [
          "A. 0.75和75%",
          "B. 0.34和34%",
          "C. 0.3和30%",
          "D. 1.75和175%"
        ],
        "answer": "A",
        "knowledgePoint": "小数和百分数互化",
        "analysis": "3÷4=0.75=75%。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "0.2写成分数最简形式是多少？",
        "options": [
          "A. 1/5",
          "B. 2/10",
          "C. 1/2",
          "D. 2/5"
        ],
        "answer": "A",
        "knowledgePoint": "小数化分数",
        "analysis": "0.2=2/10=1/5。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "比较0.6、5/8、70%，最大的是哪一个？",
        "options": [
          "A. 70%",
          "B. 0.6",
          "C. 5/8",
          "D. 三者相同"
        ],
        "answer": "A",
        "knowledgePoint": "小数化分数",
        "analysis": "0.6=60%，5/8=62.5%，70%最大。"
      },
      {
        "type": "open",
        "text": "请把5/8、0.625、62.5%互相说明为同一个数，并写出转换过程。",
        "scoringPoints": [
          "5÷8=0.625",
          "0.625=62.5%",
          "说明三种写法大小相同"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 36,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "百分数表示什么？",
        "options": [
          "A. 每100份中有多少份",
          "B. 每10份中有多少份",
          "C. 一个必须大于1的数",
          "D. 只能表示价格"
        ],
        "answer": "A",
        "knowledgePoint": "百分数表示每一百份中的多少份",
        "analysis": "百分数表示以100为整体的份数。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "40的25%是多少？",
        "options": [
          "A. 10",
          "B. 25",
          "C. 15",
          "D. 65"
        ],
        "answer": "A",
        "knowledgePoint": "百分数表示每一百份中的多少份",
        "analysis": "40×25%=40×0.25=10。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "18是60的百分之几？",
        "options": [
          "A. 30%",
          "B. 18%",
          "C. 60%",
          "D. 300%"
        ],
        "answer": "A",
        "knowledgePoint": "求一个数的百分之几",
        "analysis": "18÷60=0.3=30%。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一个数的20%是12，这个数是多少？",
        "options": [
          "A. 60",
          "B. 2.4",
          "C. 32",
          "D. 120"
        ],
        "answer": "A",
        "knowledgePoint": "百分数表示每一百份中的多少份",
        "analysis": "整体=12÷0.2=60。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一班有30人，其中60%带了羽毛笔，人数是多少？",
        "options": [
          "A. 18人",
          "B. 60人",
          "C. 12人",
          "D. 50人"
        ],
        "answer": "A",
        "knowledgePoint": "百分数表示每一百份中的多少份",
        "analysis": "30×60%=18人。"
      },
      {
        "type": "open",
        "text": "请解释“某数的35%”是什么意思，并计算80的35%。",
        "scoringPoints": [
          "说明35%表示100份中的35份",
          "80×0.35=28",
          "答案为28"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 37,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "原价100加隆，打8折后的价格是多少？",
        "options": [
          "A. 80加隆",
          "B. 20加隆",
          "C. 120加隆",
          "D. 8加隆"
        ],
        "answer": "A",
        "knowledgePoint": "折扣表示现价占原价的比例",
        "analysis": "8折表示按原价的80%付款，100×0.8=80。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "原价50加隆，涨价20%后的价格是多少？",
        "options": [
          "A. 60加隆",
          "B. 40加隆",
          "C. 70加隆",
          "D. 10加隆"
        ],
        "answer": "A",
        "knowledgePoint": "涨价百分比先求增加量",
        "analysis": "涨价20%后为原价的120%，50×1.2=60。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "原价80加隆，打75折后的价格是多少？",
        "options": [
          "A. 60加隆",
          "B. 75加隆",
          "C. 20加隆",
          "D. 105加隆"
        ],
        "answer": "A",
        "knowledgePoint": "折扣表示现价占原价的比例",
        "analysis": "75折表示75%，80×0.75=60。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "原价120加隆，涨价10%后再打9折，最终价格是多少？",
        "options": [
          "A. 118.8加隆",
          "B. 120加隆",
          "C. 108加隆",
          "D. 132加隆"
        ],
        "answer": "A",
        "knowledgePoint": "折扣表示现价占原价的比例",
        "analysis": "120×1.1×0.9=118.8。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一件商品打8折后是64加隆，原价是多少？",
        "options": [
          "A. 80加隆",
          "B. 72加隆",
          "C. 51.2加隆",
          "D. 56加隆"
        ],
        "answer": "A",
        "knowledgePoint": "折扣表示现价占原价的比例",
        "analysis": "折后价=原价×0.8，所以原价=64÷0.8=80。"
      },
      {
        "type": "open",
        "text": "原价200加隆的长袍先涨价15%，再打8折。请计算最终价格，并说明两步的基数。",
        "scoringPoints": [
          "涨价后200×1.15=230",
          "打8折后230×0.8=184",
          "说明第二步以涨价后的230为基数"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 38,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "从80增加到100，增加了百分之多少？",
        "options": [
          "A. 25%",
          "B. 20%",
          "C. 80%",
          "D. 125%"
        ],
        "answer": "A",
        "knowledgePoint": "变化量等于新值减旧值",
        "analysis": "增加量20，相对原来的80，20÷80=25%。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "从100减少到80，减少了百分之多少？",
        "options": [
          "A. 20%",
          "B. 25%",
          "C. 80%",
          "D. 125%"
        ],
        "answer": "A",
        "knowledgePoint": "区分增加率和减少率",
        "analysis": "减少量20，相对原来的100，20÷100=20%。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "从50增加到60，变化率是多少？",
        "options": [
          "A. 增加20%",
          "B. 增加10%",
          "C. 减少20%",
          "D. 增加120%"
        ],
        "answer": "A",
        "knowledgePoint": "变化率以旧值为基准",
        "analysis": "增加10，相对50是10÷50=20%。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "从60减少到45，变化率是多少？",
        "options": [
          "A. 减少25%",
          "B. 减少15%",
          "C. 增加25%",
          "D. 减少75%"
        ],
        "answer": "A",
        "knowledgePoint": "区分增加率和减少率",
        "analysis": "减少15，相对60是15÷60=25%。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "同样相差20，80到100和100到80的百分比变化为什么不同？",
        "options": [
          "A. 参照的原始量不同",
          "B. 20不是同一个数",
          "C. 百分比不能比较",
          "D. 都应该是20%"
        ],
        "answer": "A",
        "knowledgePoint": "变化率以旧值为基准",
        "analysis": "百分比变化用变化量除以原始量，原始量不同，百分比不同。"
      },
      {
        "type": "open",
        "text": "某物品从120加隆降到90加隆。请计算减少的百分比，并说明分母为什么用120。",
        "scoringPoints": [
          "减少量30",
          "30÷120=25%",
          "分母用原价/变化前的量"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 39,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "198最接近哪个整百数？",
        "options": [
          "A. 200",
          "B. 100",
          "C. 300",
          "D. 190"
        ],
        "answer": "A",
        "knowledgePoint": "四舍五入规则",
        "analysis": "198离200更近。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "3.76保留一位小数是多少？",
        "options": [
          "A. 3.8",
          "B. 3.7",
          "C. 4.0",
          "D. 3.0"
        ],
        "answer": "A",
        "knowledgePoint": "四舍五入规则",
        "analysis": "看百分位6，十分位进1，3.76≈3.8。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "49×21估算最接近多少？",
        "options": [
          "A. 1000",
          "B. 100",
          "C. 10000",
          "D. 70"
        ],
        "answer": "A",
        "knowledgePoint": "估算先抓数量级",
        "analysis": "49≈50，21≈20，50×20=1000。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "7.92保留整数是多少？",
        "options": [
          "A. 8",
          "B. 7",
          "C. 7.9",
          "D. 9"
        ],
        "answer": "A",
        "knowledgePoint": "按要求确定保留位",
        "analysis": "十分位是9，个位进1，约为8。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "估算49×21后，精算结果1029是否合理？",
        "options": [
          "A. 合理，接近1000",
          "B. 不合理，应接近100",
          "C. 不合理，应接近10000",
          "D. 无法估算"
        ],
        "answer": "A",
        "knowledgePoint": "估算先抓数量级",
        "analysis": "估算约1000，1029在合理范围内。"
      },
      {
        "type": "open",
        "text": "请用四舍五入估算203×48，并说明估算结果如何帮助检查精算。",
        "scoringPoints": [
          "203≈200，48≈50",
          "估算200×50=10000",
          "说明精算结果应接近10000"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 40,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "数字3.42有几个有效数字？",
        "options": [
          "A. 3个",
          "B. 2个",
          "C. 1个",
          "D. 4个"
        ],
        "answer": "A",
        "knowledgePoint": "保留指定有效数字",
        "analysis": "3、4、2都是有效数字，共3个。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "0.056有几个有效数字？",
        "options": [
          "A. 2个",
          "B. 3个",
          "C. 1个",
          "D. 4个"
        ],
        "answer": "A",
        "knowledgePoint": "从第一个非零数字开始数",
        "analysis": "前面的0不算有效数字，5和6是有效数字。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "把12.68保留3个有效数字是多少？",
        "options": [
          "A. 12.7",
          "B. 12.6",
          "C. 13.0",
          "D. 12.68"
        ],
        "answer": "A",
        "knowledgePoint": "保留指定有效数字",
        "analysis": "前三个有效数字是1、2、6，下一位8使6进为7，得12.7。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "把0.004321保留2个有效数字是多少？",
        "options": [
          "A. 0.0043",
          "B. 0.0044",
          "C. 0.004",
          "D. 0.00432"
        ],
        "answer": "A",
        "knowledgePoint": "从第一个非零数字开始数",
        "analysis": "有效数字从4开始，保留4和3，下一位2不进。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "测量值写成3.0cm和3cm有什么区别？",
        "options": [
          "A. 3.0cm表示精确到十分位，信息更细",
          "B. 完全没有任何区别",
          "C. 3.0cm比3cm大",
          "D. 3cm一定错"
        ],
        "answer": "A",
        "knowledgePoint": "用有效数字表达测量精度",
        "analysis": "3.0中的0是有效数字，表示测量精度到0.1cm。"
      },
      {
        "type": "open",
        "text": "请说明0.0705有几个有效数字，并把它保留2个有效数字。",
        "scoringPoints": [
          "有效数字为7、0、5，共3个",
          "保留2个有效数字看第三个5",
          "结果约为0.071"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 41,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "1米等于多少厘米？",
        "options": [
          "A. 100厘米",
          "B. 10厘米",
          "C. 1000厘米",
          "D. 1厘米"
        ],
        "answer": "A",
        "knowledgePoint": "大单位到小单位用乘法",
        "analysis": "1米=100厘米。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "1千克等于多少克？",
        "options": [
          "A. 1000克",
          "B. 100克",
          "C. 10克",
          "D. 1克"
        ],
        "answer": "A",
        "knowledgePoint": "大单位到小单位用乘法",
        "analysis": "1千克=1000克。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "2.5米等于多少厘米？",
        "options": [
          "A. 250厘米",
          "B. 25厘米",
          "C. 2500厘米",
          "D. 2.5厘米"
        ],
        "answer": "A",
        "knowledgePoint": "小单位到大单位用除法",
        "analysis": "2.5×100=250厘米。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "750克等于多少千克？",
        "options": [
          "A. 0.75千克",
          "B. 7.5千克",
          "C. 75千克",
          "D. 750千克"
        ],
        "answer": "A",
        "knowledgePoint": "大单位到小单位用乘法",
        "analysis": "750÷1000=0.75千克。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "3米+40厘米等于多少厘米？",
        "options": [
          "A. 340厘米",
          "B. 43厘米",
          "C. 3040厘米",
          "D. 120厘米"
        ],
        "answer": "A",
        "knowledgePoint": "大单位到小单位用乘法",
        "analysis": "3米=300厘米，300+40=340厘米。"
      },
      {
        "type": "open",
        "text": "请把2千克350克换成克，再换成千克小数。",
        "scoringPoints": [
          "2千克=2000克，总共2350克",
          "2350克=2.35千克",
          "写清换算方向"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 42,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "0.25写成百分数是多少？",
        "options": [
          "A. 25%",
          "B. 2.5%",
          "C. 250%",
          "D. 0.25%"
        ],
        "answer": "A",
        "knowledgePoint": "把百分数还原成比例",
        "analysis": "小数乘100并加百分号，0.25=25%。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "75%写成小数是多少？",
        "options": [
          "A. 0.75",
          "B. 7.5",
          "C. 75",
          "D. 0.075"
        ],
        "answer": "A",
        "knowledgePoint": "把百分数还原成比例",
        "analysis": "75%=75÷100=0.75。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "0.6、3/5、60%三者关系是什么？",
        "options": [
          "A. 相等",
          "B. 0.6最大",
          "C. 60%最大",
          "D. 3/5最小"
        ],
        "answer": "A",
        "knowledgePoint": "检查答案是否符合情境",
        "analysis": "3/5=0.6=60%。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "40的15%是多少？",
        "options": [
          "A. 6",
          "B. 15",
          "C. 25",
          "D. 60"
        ],
        "answer": "A",
        "knowledgePoint": "把百分数还原成比例",
        "analysis": "40×0.15=6。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个数的20%是18，这个数是多少？",
        "options": [
          "A. 90",
          "B. 3.6",
          "C. 38",
          "D. 180"
        ],
        "answer": "A",
        "knowledgePoint": "把百分数还原成比例",
        "analysis": "整体=18÷0.2=90。"
      },
      {
        "type": "open",
        "text": "请把0.375改写成分数和百分数，并说明两种写法表示同一个量。",
        "scoringPoints": [
          "0.375=375/1000=3/8",
          "0.375=37.5%",
          "说明换写法不改变大小"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 43,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "比6:9化简后是多少？",
        "options": [
          "A. 2:3",
          "B. 3:2",
          "C. 6:3",
          "D. 1:9"
        ],
        "answer": "A",
        "knowledgePoint": "化简比",
        "analysis": "6和9同时除以3，得2:3。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "比8:12化简后是多少？",
        "options": [
          "A. 2:3",
          "B. 3:2",
          "C. 4:6",
          "D. 8:3"
        ],
        "answer": "A",
        "knowledgePoint": "化简比",
        "analysis": "8和12同时除以4，得2:3。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "男生:女生=3:5，男生6人时，女生多少人？",
        "options": [
          "A. 10人",
          "B. 8人",
          "C. 15人",
          "D. 5人"
        ],
        "answer": "A",
        "knowledgePoint": "写出两个量的对应关系",
        "analysis": "男生从3到6乘2，女生5×2=10。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "比的顺序为什么不能随便换？",
        "options": [
          "A. 前后对应的量会改变",
          "B. 冒号会消失",
          "C. 数字会变大",
          "D. 比不能化简"
        ],
        "answer": "A",
        "knowledgePoint": "写出两个量的对应关系",
        "analysis": "男生:女生和女生:男生意义不同。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "A:B=4:7，总数33，A是多少？",
        "options": [
          "A. 12",
          "B. 21",
          "C. 11",
          "D. 28"
        ],
        "answer": "A",
        "knowledgePoint": "比可以同倍放大或缩小",
        "analysis": "总份数11，每份33÷11=3，A为4份=12。"
      },
      {
        "type": "open",
        "text": "把18:24化简，并解释化简前后为什么表示同一个比。",
        "scoringPoints": [
          "18和24最大公因数6",
          "18:24=3:4",
          "说明两边同时除以同一个非零数，比值不变"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 44,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "比例式2:3=4:6是否成立？",
        "options": [
          "A. 成立",
          "B. 不成立",
          "C. 无法判断",
          "D. 只在整数中成立"
        ],
        "answer": "A",
        "knowledgePoint": "比例式表示两个比相等",
        "analysis": "2/3=4/6，所以比例式成立。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "比例式中，若a:b=c:d，可以怎样检查？",
        "options": [
          "A. 比值是否相等",
          "B. 四个数是否一样",
          "C. 字母是否相邻",
          "D. 是否都有单位"
        ],
        "answer": "A",
        "knowledgePoint": "比例式表示两个比相等",
        "analysis": "比例式表示两个比相等。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "求2:5=x:20中的x。",
        "options": [
          "A. 8",
          "B. 10",
          "C. 4",
          "D. 40"
        ],
        "answer": "A",
        "knowledgePoint": "比例式表示两个比相等",
        "analysis": "5到20乘4，2也乘4，x=8。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "求3:4=9:x中的x。",
        "options": [
          "A. 12",
          "B. 10",
          "C. 6",
          "D. 16"
        ],
        "answer": "A",
        "knowledgePoint": "比例式表示两个比相等",
        "analysis": "3到9乘3，4也乘3，x=12。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "比例式6:x=2:5中，x是多少？",
        "options": [
          "A. 15",
          "B. 10",
          "C. 30",
          "D. 3"
        ],
        "answer": "A",
        "knowledgePoint": "比例式表示两个比相等",
        "analysis": "6/x=2/5，2x=30，x=15。"
      },
      {
        "type": "open",
        "text": "请解比例4:7=x:21，并用比值检查答案。",
        "scoringPoints": [
          "7到21乘3，所以x=12",
          "检查4:7=12:21",
          "两者都化简为4:7"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 45,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "正比例关系可以写成哪种形式？",
        "options": [
          "A. y=kx",
          "B. y=k/x",
          "C. xy=k",
          "D. y=x+k且k随时变"
        ],
        "answer": "A",
        "knowledgePoint": "正比例中比值保持不变",
        "analysis": "正比例中两个量的比值固定，常写作y=kx。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "若y=3x，x=4时y是多少？",
        "options": [
          "A. 12",
          "B. 7",
          "C. 1",
          "D. 3/4"
        ],
        "answer": "A",
        "knowledgePoint": "用比例式解决正比例问题",
        "analysis": "y=3×4=12。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "表格x:1,2,3；y:5,10,15是否表示正比例？",
        "options": [
          "A. 是",
          "B. 否",
          "C. 只有前两项是",
          "D. 无法判断"
        ],
        "answer": "A",
        "knowledgePoint": "用比例式解决正比例问题",
        "analysis": "y/x都等于5，比值固定。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "正比例y=4x中，y/x等于多少？",
        "options": [
          "A. 4",
          "B. x",
          "C. y",
          "D. 0"
        ],
        "answer": "A",
        "knowledgePoint": "用比例式解决正比例问题",
        "analysis": "y/x=4，是固定比例常数。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "若3支羽毛笔12加隆，同单价下5支多少钱？",
        "options": [
          "A. 20加隆",
          "B. 15加隆",
          "C. 24加隆",
          "D. 60加隆"
        ],
        "answer": "A",
        "knowledgePoint": "用比例式解决正比例问题",
        "analysis": "单价固定，总价与数量成正比例；每支4加隆，5支20加隆。"
      },
      {
        "type": "open",
        "text": "请说明为什么“单价固定时，总价和数量成正比例”，并举一组数据。",
        "scoringPoints": [
          "说明总价/数量=单价固定",
          "写出如每支4加隆，1支4、2支8、3支12",
          "指出比值都为4"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 46,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "反比例关系常见特征是什么？",
        "options": [
          "A. 两个量的乘积固定",
          "B. 两个量的和固定",
          "C. 两个量完全相等",
          "D. 两个量都不变"
        ],
        "answer": "A",
        "knowledgePoint": "反比例中乘积保持不变",
        "analysis": "反比例中一个量变大，另一个量按乘积固定而变小。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "路程固定时，速度越快，时间通常怎样？",
        "options": [
          "A. 越短",
          "B. 越长",
          "C. 不变",
          "D. 变成速度"
        ],
        "answer": "A",
        "knowledgePoint": "反比例中乘积保持不变",
        "analysis": "路程=速度×时间固定，速度变大，时间变小。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "若xy=24，x=6时y是多少？",
        "options": [
          "A. 4",
          "B. 18",
          "C. 30",
          "D. 144"
        ],
        "answer": "A",
        "knowledgePoint": "用方程求反比例未知量",
        "analysis": "y=24÷6=4。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一项工作总量固定，4人做需6小时，8人做需多少小时？",
        "options": [
          "A. 3小时",
          "B. 12小时",
          "C. 10小时",
          "D. 48小时"
        ],
        "answer": "A",
        "knowledgePoint": "用方程求反比例未知量",
        "analysis": "人数加倍，时间减半，6÷2=3小时。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "表格x:2,3,6；y:12,8,4是否可能表示反比例？",
        "options": [
          "A. 是",
          "B. 否",
          "C. 只有前两项是",
          "D. 一定是正比例"
        ],
        "answer": "A",
        "knowledgePoint": "反比例中乘积保持不变",
        "analysis": "各组乘积2×12=24，3×8=24，6×4=24，乘积固定。"
      },
      {
        "type": "open",
        "text": "路程为60km固定。请列出速度10、20、30km/h对应的时间，并说明速度和时间为什么成反比例。",
        "scoringPoints": [
          "时间分别为6、3、2小时",
          "说明速度×时间=60固定",
          "指出速度增大时时间减小"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 47,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "比例尺1cm表示50m，图上4cm表示实际多少米？",
        "options": [
          "A. 200m",
          "B. 54m",
          "C. 12.5m",
          "D. 50m"
        ],
        "answer": "A",
        "knowledgePoint": "比例尺表示图上距离与实际距离的比",
        "analysis": "每1cm表示50m，4cm表示4×50=200m。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "实际150m在1cm表示50m的地图上应画多少厘米？",
        "options": [
          "A. 3cm",
          "B. 100cm",
          "C. 7500cm",
          "D. 50cm"
        ],
        "answer": "A",
        "knowledgePoint": "比例尺表示图上距离与实际距离的比",
        "analysis": "150÷50=3cm。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "比例尺1:2000表示图上1cm对应实际多少厘米？",
        "options": [
          "A. 2000cm",
          "B. 2000m",
          "C. 20cm",
          "D. 2cm"
        ],
        "answer": "A",
        "knowledgePoint": "比例尺表示图上距离与实际距离的比",
        "analysis": "1:2000表示图上1份对应实际2000份。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "把“1cm表示20m”写成数字比例尺前，20m应换成多少厘米？",
        "options": [
          "A. 2000cm",
          "B. 200cm",
          "C. 20cm",
          "D. 20000cm"
        ],
        "answer": "A",
        "knowledgePoint": "实际距离要统一单位",
        "analysis": "1m=100cm，20m=2000cm。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "图上6cm，实际300m。比例尺可写成1cm表示多少米？",
        "options": [
          "A. 50m",
          "B. 300m",
          "C. 1800m",
          "D. 6m"
        ],
        "answer": "A",
        "knowledgePoint": "比例尺表示图上距离与实际距离的比",
        "analysis": "300÷6=50，所以1cm表示50m。"
      },
      {
        "type": "open",
        "text": "地图上两点相距7cm，比例尺为1cm表示40m。请算实际距离，并说明反向换算怎么做。",
        "scoringPoints": [
          "实际距离7×40=280m",
          "反向用实际距离÷40",
          "单位写清cm和m"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 48,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "速度、时间、路程的基本关系是什么？",
        "options": [
          "A. 路程=速度×时间",
          "B. 速度=路程×时间",
          "C. 时间=速度×路程",
          "D. 路程=速度+时间"
        ],
        "answer": "A",
        "knowledgePoint": "路程等于速度乘时间",
        "analysis": "路程等于速度乘时间。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "速度6km/h，走4小时，路程是多少？",
        "options": [
          "A. 24km",
          "B. 10km",
          "C. 2km",
          "D. 1.5km"
        ],
        "answer": "A",
        "knowledgePoint": "时间固定时，路程与速度成正比例",
        "analysis": "6×4=24km。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "路程45km，时间5小时，速度是多少？",
        "options": [
          "A. 9km/h",
          "B. 40km/h",
          "C. 225km/h",
          "D. 50km/h"
        ],
        "answer": "A",
        "knowledgePoint": "路程固定时，速度与时间成反比例",
        "analysis": "速度=路程÷时间=45÷5=9km/h。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "路程36km，速度12km/h，时间是多少？",
        "options": [
          "A. 3小时",
          "B. 24小时",
          "C. 48小时",
          "D. 432小时"
        ],
        "answer": "A",
        "knowledgePoint": "时间固定时，路程与速度成正比例",
        "analysis": "时间=路程÷速度=36÷12=3小时。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "同一段路程，速度从4km/h变成8km/h，时间会怎样？",
        "options": [
          "A. 变为原来的一半",
          "B. 变为原来的2倍",
          "C. 不变",
          "D. 变为原来的4倍"
        ],
        "answer": "A",
        "knowledgePoint": "路程固定时，速度与时间成反比例",
        "analysis": "路程固定，速度加倍，所需时间减半。"
      },
      {
        "type": "open",
        "text": "一只猫头鹰每小时飞15km，飞了x小时到达60km外的地点。请列式求x，并写单位。",
        "scoringPoints": [
          "列15x=60或60÷15",
          "求得x=4",
          "答案4小时"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 49,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "单价、数量与总价的关系是什么？",
        "options": [
          "A. 总价=单价×数量",
          "B. 单价=总价×数量",
          "C. 数量=单价×总价",
          "D. 总价=单价+数量"
        ],
        "answer": "A",
        "knowledgePoint": "总价等于单价乘数量",
        "analysis": "总价等于单价乘数量。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "每本3加隆，买5本，总价是多少？",
        "options": [
          "A. 15加隆",
          "B. 8加隆",
          "C. 2加隆",
          "D. 35加隆"
        ],
        "answer": "A",
        "knowledgePoint": "数量固定时，总价与单价成正比例",
        "analysis": "3×5=15加隆。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "总价24加隆，买6本，每本多少加隆？",
        "options": [
          "A. 4加隆",
          "B. 18加隆",
          "C. 30加隆",
          "D. 144加隆"
        ],
        "answer": "A",
        "knowledgePoint": "总价固定时，单价与数量成反比例",
        "analysis": "单价=总价÷数量=24÷6=4加隆。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "总价35加隆，每本5加隆，买了几本？",
        "options": [
          "A. 7本",
          "B. 30本",
          "C. 40本",
          "D. 175本"
        ],
        "answer": "A",
        "knowledgePoint": "数量固定时，总价与单价成正比例",
        "analysis": "数量=总价÷单价=35÷5=7本。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "每瓶药水8西可，买x瓶共40西可。方程应写成？",
        "options": [
          "A. 8x=40",
          "B. x+8=40",
          "C. x-8=40",
          "D. 40x=8"
        ],
        "answer": "A",
        "knowledgePoint": "数量固定时，总价与单价成正比例",
        "analysis": "单价×数量=总价，所以8x=40。"
      },
      {
        "type": "open",
        "text": "每支羽毛笔4加隆，买若干支共28加隆。请列方程求数量，并代回检查。",
        "scoringPoints": [
          "列4x=28",
          "x=7",
          "代回4×7=28"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 50,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "配方中粉末:清水=2:5，粉末2份时清水是多少份？",
        "options": [
          "A. 5份",
          "B. 2份",
          "C. 7份",
          "D. 10份"
        ],
        "answer": "A",
        "knowledgePoint": "用单位检验配方比例",
        "analysis": "比例2:5表示粉末2份对应清水5份。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "2:5同倍放大4倍后是多少？",
        "options": [
          "A. 8:20",
          "B. 8:5",
          "C. 2:20",
          "D. 6:9"
        ],
        "answer": "A",
        "knowledgePoint": "按同一倍数放大配方",
        "analysis": "两边同时乘4，得到8:20。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "粉末:清水=2:5，粉末6份时清水是多少份？",
        "options": [
          "A. 15份",
          "B. 9份",
          "C. 30份",
          "D. 3份"
        ],
        "answer": "A",
        "knowledgePoint": "按同一倍数放大配方",
        "analysis": "粉末从2到6是乘3，清水5×3=15。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "配方2:5总共有多少份？",
        "options": [
          "A. 7份",
          "B. 10份",
          "C. 3份",
          "D. 5份"
        ],
        "answer": "A",
        "knowledgePoint": "用总份数求各材料数量",
        "analysis": "总份数=2+5=7份。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "配方2:5总量为140ml，粉末是多少ml？",
        "options": [
          "A. 40ml",
          "B. 100ml",
          "C. 20ml",
          "D. 70ml"
        ],
        "answer": "A",
        "knowledgePoint": "用单位检验配方比例",
        "analysis": "每份140÷7=20ml，粉末2份为40ml。"
      },
      {
        "type": "open",
        "text": "配方A:B=3:7，总量为200ml。请计算每份多少ml，A和B各多少ml。",
        "scoringPoints": [
          "总份数10份",
          "每份200÷10=20ml",
          "A=60ml，B=140ml"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 51,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "判断比例应用题时，先要看清哪一件事？",
        "options": [
          "A. 哪两个量对应",
          "B. 字写得多不多",
          "C. 是否有颜色",
          "D. 是否必须相加"
        ],
        "answer": "A",
        "knowledgePoint": "写出两个量的对应关系",
        "analysis": "比例题要先确认量与量的对应顺序。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "若3本书重1.2kg，6本同样的书重多少kg？",
        "options": [
          "A. 2.4kg",
          "B. 7.2kg",
          "C. 1.8kg",
          "D. 0.6kg"
        ],
        "answer": "A",
        "knowledgePoint": "保持同倍放大或缩小",
        "analysis": "书本数从3到6乘2，重量也乘2，1.2×2=2.4kg。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "4瓶药水需要12片叶子，10瓶需要多少片叶子？",
        "options": [
          "A. 30片",
          "B. 22片",
          "C. 48片",
          "D. 18片"
        ],
        "answer": "A",
        "knowledgePoint": "用单位检验比例式",
        "analysis": "每瓶需要3片叶子，10瓶需要30片。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "比例题中“每瓶3片叶子”这个量表示什么？",
        "options": [
          "A. 单位数量对应量",
          "B. 总瓶数",
          "C. 总叶子数",
          "D. 面积"
        ],
        "answer": "A",
        "knowledgePoint": "写出两个量的对应关系",
        "analysis": "每瓶3片说明1瓶和3片叶子的固定对应关系。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "6个同样包裹重9kg，10个重多少kg？",
        "options": [
          "A. 15kg",
          "B. 19kg",
          "C. 54kg",
          "D. 60kg"
        ],
        "answer": "A",
        "knowledgePoint": "用单位检验比例式",
        "analysis": "每个包裹9÷6=1.5kg，10个为15kg。"
      },
      {
        "type": "open",
        "text": "3瓶药水需要12片叶子。请用比例方法求8瓶需要多少片，并写出检查。",
        "scoringPoints": [
          "每瓶12÷3=4片",
          "8瓶需要8×4=32片",
          "检查瓶数和叶子数同倍变化"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 52,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一件物品原价100加隆，涨价20%后价格是多少？",
        "options": [
          "A. 120加隆",
          "B. 80加隆",
          "C. 20加隆",
          "D. 200加隆"
        ],
        "answer": "A",
        "knowledgePoint": "把百分数还原成比例",
        "analysis": "涨价20%后为100×1.2=120加隆。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一件物品原价100加隆，降价20%后价格是多少？",
        "options": [
          "A. 80加隆",
          "B. 120加隆",
          "C. 20加隆",
          "D. 200加隆"
        ],
        "answer": "A",
        "knowledgePoint": "把百分数还原成比例",
        "analysis": "降价20%后为100×0.8=80加隆。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "80加隆涨价25%后是多少？",
        "options": [
          "A. 100加隆",
          "B. 105加隆",
          "C. 60加隆",
          "D. 95加隆"
        ],
        "answer": "A",
        "knowledgePoint": "把百分数还原成比例",
        "analysis": "80×1.25=100。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一瓶药水先打8折，再在折后价上打5折，原价100加隆，最终价是多少？",
        "options": [
          "A. 40加隆",
          "B. 30加隆",
          "C. 50加隆",
          "D. 80加隆"
        ],
        "answer": "A",
        "knowledgePoint": "把百分数还原成比例",
        "analysis": "100×0.8×0.5=40。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "先涨价20%，再降价20%，最终价格为什么不一定回到原价？",
        "options": [
          "A. 第二次计算的基数已经变了",
          "B. 百分比不能相乘",
          "C. 20%不是数字",
          "D. 降价一定无效"
        ],
        "answer": "A",
        "knowledgePoint": "把百分数还原成比例",
        "analysis": "涨价后基数变为120%，再降20%是对新价格计算。"
      },
      {
        "type": "open",
        "text": "原价200加隆，先涨价10%，再降价10%。请计算最终价格，并说明为什么不是原价。",
        "scoringPoints": [
          "涨价后200×1.1=220",
          "再降价220×0.9=198",
          "说明两次百分比基数不同"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 53,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "每袋有3枚硬币，x袋共有多少枚？",
        "options": [
          "A. 3x",
          "B. x+3",
          "C. x-3",
          "D. 3/x"
        ],
        "answer": "A",
        "knowledgePoint": "用字母表示变化的量",
        "analysis": "每袋3枚，x袋就是3x枚。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一个数比x大5，可以表示为？",
        "options": [
          "A. x+5",
          "B. 5x",
          "C. x-5",
          "D. 5-x"
        ],
        "answer": "A",
        "knowledgePoint": "代数式记录数量关系",
        "analysis": "比x大5，就是x+5。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "x的2倍再少7，可以表示为？",
        "options": [
          "A. 2x-7",
          "B. 2(x-7)",
          "C. x+2-7",
          "D. 7-2x"
        ],
        "answer": "A",
        "knowledgePoint": "代数式记录数量关系",
        "analysis": "x的2倍是2x，再少7是2x-7。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "a支羽毛笔每支4加隆，总价可以表示为？",
        "options": [
          "A. 4a",
          "B. a+4",
          "C. a-4",
          "D. 4/a"
        ],
        "answer": "A",
        "knowledgePoint": "用字母表示变化的量",
        "analysis": "单价×数量=总价，4×a=4a。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "“比n的三倍多2”应写成？",
        "options": [
          "A. 3n+2",
          "B. 3(n+2)",
          "C. n+3+2",
          "D. 2n+3"
        ],
        "answer": "A",
        "knowledgePoint": "用具体数检验表达式",
        "analysis": "先取n的三倍3n，再多2，得到3n+2。"
      },
      {
        "type": "open",
        "text": "请把“每盒6支，买x盒，又多给2支”写成代数式，并解释x代表什么。",
        "scoringPoints": [
          "写出6x+2",
          "说明x代表盒数",
          "说明6x表示盒内总支数，再加额外2支"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 54,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "代数式3x+2，当x=4时等于多少？",
        "options": [
          "A. 14",
          "B. 9",
          "C. 20",
          "D. 12"
        ],
        "answer": "A",
        "knowledgePoint": "代入数值检验表达式",
        "analysis": "3×4+2=14。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "代数式x²，当x=5时等于多少？",
        "options": [
          "A. 25",
          "B. 10",
          "C. 7",
          "D. 5"
        ],
        "answer": "A",
        "knowledgePoint": "代入数值检验表达式",
        "analysis": "x²表示x乘x，5²=25。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "代数式2a-3，当a=6时等于多少？",
        "options": [
          "A. 9",
          "B. 15",
          "C. 6",
          "D. 12"
        ],
        "answer": "A",
        "knowledgePoint": "按运算顺序计算代入结果",
        "analysis": "2×6-3=9。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "代数式4(x+1)，当x=2时等于多少？",
        "options": [
          "A. 12",
          "B. 9",
          "C. 8",
          "D. 6"
        ],
        "answer": "A",
        "knowledgePoint": "代入数值检验表达式",
        "analysis": "4×(2+1)=12。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "代入x=-2计算x²+3x，结果是多少？",
        "options": [
          "A. -2",
          "B. 10",
          "C. 2",
          "D. -10"
        ],
        "answer": "A",
        "knowledgePoint": "按运算顺序计算代入结果",
        "analysis": "(-2)²+3×(-2)=4-6=-2。"
      },
      {
        "type": "open",
        "text": "请计算代数式2x²+1在x=3和x=-3时的值，并比较结果。",
        "scoringPoints": [
          "x=3时2×9+1=19",
          "x=-3时2×9+1=19",
          "说明平方使正负代入结果相同"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 55,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "合并3x+5x，结果是什么？",
        "options": [
          "A. 8x",
          "B. 8x²",
          "C. 15x",
          "D. 2x"
        ],
        "answer": "A",
        "knowledgePoint": "合并同类项时只合并系数",
        "analysis": "同类项合并只合并系数，3x+5x=8x。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "2a和3b能直接合并吗？",
        "options": [
          "A. 不能",
          "B. 能，得5ab",
          "C. 能，得5a",
          "D. 能，得6ab"
        ],
        "answer": "A",
        "knowledgePoint": "识别同类项",
        "analysis": "字母部分不同，不是同类项，不能直接合并。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "合并4x+2- x+7，结果是什么？",
        "options": [
          "A. 3x+9",
          "B. 5x+9",
          "C. 3x+5",
          "D. 4x+9"
        ],
        "answer": "A",
        "knowledgePoint": "合并同类项时只合并系数",
        "analysis": "4x-x=3x，2+7=9，所以为3x+9。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "合并2a+3b+5a-b，结果是什么？",
        "options": [
          "A. 7a+2b",
          "B. 10ab",
          "C. 7a+4b",
          "D. 5a+2b"
        ],
        "answer": "A",
        "knowledgePoint": "合并同类项时只合并系数",
        "analysis": "2a+5a=7a，3b-b=2b。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "合并3x²+2x+5x²-x，结果是什么？",
        "options": [
          "A. 8x²+x",
          "B. 10x³",
          "C. 8x²+3x",
          "D. 5x²+4x"
        ],
        "answer": "A",
        "knowledgePoint": "不同类项不能合并",
        "analysis": "x²项合并为8x²，x项合并为x。"
      },
      {
        "type": "open",
        "text": "请化简5m+2n-3m+4n，并说明哪些项是同类项。",
        "scoringPoints": [
          "5m和-3m合并为2m",
          "2n和4n合并为6n",
          "结果2m+6n"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 56,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "(3x+2)+(2x+5)等于什么？",
        "options": [
          "A. 5x+7",
          "B. 5x+10",
          "C. x+7",
          "D. 6x+7"
        ],
        "answer": "A",
        "knowledgePoint": "加法中合并同类项",
        "analysis": "3x+2x=5x，2+5=7。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "(5x+8)-(2x+3)等于什么？",
        "options": [
          "A. 3x+5",
          "B. 3x+11",
          "C. 7x+5",
          "D. 3x-5"
        ],
        "answer": "A",
        "knowledgePoint": "减法先分配负号",
        "analysis": "减去括号要变号：5x+8-2x-3=3x+5。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "(4a-1)+(a+6)等于什么？",
        "options": [
          "A. 5a+5",
          "B. 5a-7",
          "C. 3a+5",
          "D. 4a+5"
        ],
        "answer": "A",
        "knowledgePoint": "加法中合并同类项",
        "analysis": "4a+a=5a，-1+6=5。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "(6y-4)-(y-9)等于什么？",
        "options": [
          "A. 5y+5",
          "B. 5y-13",
          "C. 7y+5",
          "D. 6y+5"
        ],
        "answer": "A",
        "knowledgePoint": "减法先分配负号",
        "analysis": "6y-4-y+9=5y+5。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "化简2(x+3)-(x-4)，结果是什么？",
        "options": [
          "A. x+10",
          "B. x+2",
          "C. 3x+2",
          "D. x-10"
        ],
        "answer": "A",
        "knowledgePoint": "加法中合并同类项",
        "analysis": "2x+6-x+4=x+10。"
      },
      {
        "type": "open",
        "text": "请化简(4x+7)-(x-2)+(3x+1)，并写出每一步去括号和合并。",
        "scoringPoints": [
          "去括号得4x+7-x+2+3x+1",
          "合并x项为6x",
          "常数7+2+1=10，结果6x+10"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 57,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "展开3(x+2)，结果是什么？",
        "options": [
          "A. 3x+6",
          "B. 3x+2",
          "C. x+6",
          "D. 3x+5"
        ],
        "answer": "A",
        "knowledgePoint": "括号里有减号时保留符号",
        "analysis": "3要分别乘括号里的x和2，所以3(x+2)=3x+6。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "展开2(a-5)，结果是什么？",
        "options": [
          "A. 2a-10",
          "B. 2a-5",
          "C. a-10",
          "D. 2a+10"
        ],
        "answer": "A",
        "knowledgePoint": "展开后合并同类项",
        "analysis": "2分别乘a和-5，得到2a-10。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "展开-4(x-3)，结果是什么？",
        "options": [
          "A. -4x+12",
          "B. -4x-12",
          "C. 4x+12",
          "D. -x+12"
        ],
        "answer": "A",
        "knowledgePoint": "负数在括号外",
        "analysis": "-4乘x得-4x，-4乘-3得+12。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "3(x+2)=3x+2的错误在哪里？",
        "options": [
          "A. 3没有乘到括号里的2",
          "B. x不能在括号里",
          "C. 3不能乘字母",
          "D. 括号必须保留"
        ],
        "answer": "A",
        "knowledgePoint": "括号里有减号时保留符号",
        "analysis": "括号外的3要乘括号里的每一项，不能漏乘2。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "展开并合并：2(x+3)+x，结果是什么？",
        "options": [
          "A. 3x+6",
          "B. 2x+3",
          "C. 2x+6",
          "D. 3x+3"
        ],
        "answer": "A",
        "knowledgePoint": "展开后合并同类项",
        "analysis": "2(x+3)+x=2x+6+x=3x+6。"
      },
      {
        "type": "open",
        "text": "请展开4(x-2)，再用x=3代入原式和展开式检查是否相等。",
        "scoringPoints": [
          "展开为4x-8",
          "原式代入4(3-2)=4",
          "展开式代入4×3-8=4"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 58,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "表达式6x+9中，最大公因数是几？",
        "options": [
          "A. 3",
          "B. 6",
          "C. 9",
          "D. x"
        ],
        "answer": "A",
        "knowledgePoint": "找出每一项共有的因数",
        "analysis": "6和9的最大公因数是3。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "提取公因式：6x+9等于什么？",
        "options": [
          "A. 3(2x+3)",
          "B. 6(x+9)",
          "C. 9(x+6)",
          "D. 3(6x+9)"
        ],
        "answer": "A",
        "knowledgePoint": "公因式含字母时一起提",
        "analysis": "6x+9=3(2x+3)。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "提取公因式：4a+8等于什么？",
        "options": [
          "A. 4(a+2)",
          "B. 2(a+4)",
          "C. 8(a+4)",
          "D. a(4+8)"
        ],
        "answer": "A",
        "knowledgePoint": "公因式含字母时一起提",
        "analysis": "4a和8都含有因数4，所以提出4。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "提取公因式后，怎样检查结果是否正确？",
        "options": [
          "A. 再展开看能否回到原式",
          "B. 只看括号长不长",
          "C. 把字母删掉",
          "D. 改成小数"
        ],
        "answer": "A",
        "knowledgePoint": "展开检查提取是否正确",
        "analysis": "提取公因式和展开互为逆过程，展开能回原式就可靠。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "提取公因式：10x-15，正确的是？",
        "options": [
          "A. 5(2x-3)",
          "B. 5(2x+3)",
          "C. 10(x-15)",
          "D. 15(10x-1)"
        ],
        "answer": "A",
        "knowledgePoint": "公因式含字母时一起提",
        "analysis": "10x-15=5(2x-3)。"
      },
      {
        "type": "open",
        "text": "请提取公因式12x+18，并展开检查。",
        "scoringPoints": [
          "最大公因数为6",
          "12x+18=6(2x+3)",
          "展开6(2x+3)=12x+18"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 59,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "长方形面积公式可以写成什么？",
        "options": [
          "A. A=lw",
          "B. A=2l+2w",
          "C. A=l+w",
          "D. A=l/w"
        ],
        "answer": "A",
        "knowledgePoint": "区分面积和周长公式",
        "analysis": "长方形面积等于长乘宽，常写作A=lw。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "如果A=lw，l=5，w=3，那么A是多少？",
        "options": [
          "A. 15",
          "B. 8",
          "C. 10",
          "D. 2"
        ],
        "answer": "A",
        "knowledgePoint": "代入公式求值",
        "analysis": "A=5×3=15。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "速度v、时间t、路程s的关系可以写成？",
        "options": [
          "A. s=vt",
          "B. s=v+t",
          "C. v=st",
          "D. t=sv"
        ],
        "answer": "A",
        "knowledgePoint": "用字母表示公式中的量",
        "analysis": "路程=速度×时间，写作s=vt。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "若s=vt，v=4，t=6，则s是多少？",
        "options": [
          "A. 24",
          "B. 10",
          "C. 2",
          "D. 46"
        ],
        "answer": "A",
        "knowledgePoint": "代入公式求值",
        "analysis": "s=4×6=24。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "公式P=2l+2w中，l=7，w=4，P是多少？",
        "options": [
          "A. 22",
          "B. 28",
          "C. 11",
          "D. 18"
        ],
        "answer": "A",
        "knowledgePoint": "代入公式求值",
        "analysis": "P=2×7+2×4=14+8=22。"
      },
      {
        "type": "open",
        "text": "请选择一个你熟悉的公式，说明每个字母代表什么，并代入一组数值计算。",
        "scoringPoints": [
          "写出正确公式",
          "说明每个字母的含义和单位",
          "完成一次正确代入计算"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 60,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "由A=lw变形求l，正确的是？",
        "options": [
          "A. l=A/w",
          "B. l=Aw",
          "C. l=A+w",
          "D. l=w/A"
        ],
        "answer": "A",
        "knowledgePoint": "代入数值检验变形",
        "analysis": "A=lw，两边除以w，得到l=A/w。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "由s=vt变形求t，正确的是？",
        "options": [
          "A. t=s/v",
          "B. t=sv",
          "C. t=s+v",
          "D. t=v/s"
        ],
        "answer": "A",
        "knowledgePoint": "等式两边同步操作",
        "analysis": "s=vt，两边除以v，得到t=s/v。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "若P=2l+2w，要求l，第一步可以做什么？",
        "options": [
          "A. 两边先减2w",
          "B. 两边先加2w",
          "C. 只把右边除以2",
          "D. 把P改成0"
        ],
        "answer": "A",
        "knowledgePoint": "等式两边同步操作",
        "analysis": "P=2l+2w，先减去2w，得到P-2w=2l。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "由P=2l+2w变形求l，正确的是？",
        "options": [
          "A. l=(P-2w)/2",
          "B. l=P-2w",
          "C. l=P/2+w",
          "D. l=2P-w"
        ],
        "answer": "A",
        "knowledgePoint": "代入数值检验变形",
        "analysis": "P-2w=2l，再除以2，l=(P-2w)/2。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "公式C=2πr中，要求r，正确的是？",
        "options": [
          "A. r=C/(2π)",
          "B. r=2πC",
          "C. r=C+2π",
          "D. r=2π/C"
        ],
        "answer": "A",
        "knowledgePoint": "代入数值检验变形",
        "analysis": "C=2πr，两边除以2π，r=C/(2π)。"
      },
      {
        "type": "open",
        "text": "请把公式s=vt分别变形成求v和求t的形式，并说明每一步如何保持等式平衡。",
        "scoringPoints": [
          "求v：v=s/t",
          "求t：t=s/v",
          "说明两边同时除以同一个非零量"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 61,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "数列2,5,8,11的公差是多少？",
        "options": [
          "A. 3",
          "B. 2",
          "C. 5",
          "D. 11"
        ],
        "answer": "A",
        "knowledgePoint": "区分项数和项的值",
        "analysis": "相邻两项都增加3。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "数列2,5,8,11的下一项是多少？",
        "options": [
          "A. 14",
          "B. 13",
          "C. 12",
          "D. 16"
        ],
        "answer": "A",
        "knowledgePoint": "代入检验规律",
        "analysis": "每次加3，11+3=14。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "数列4,8,16,32的规律是什么？",
        "options": [
          "A. 每次乘2",
          "B. 每次加2",
          "C. 每次减4",
          "D. 每次除8"
        ],
        "answer": "A",
        "knowledgePoint": "代入检验规律",
        "analysis": "4×2=8，8×2=16，16×2=32。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "数列4,8,16,32的下一项是多少？",
        "options": [
          "A. 64",
          "B. 48",
          "C. 36",
          "D. 40"
        ],
        "answer": "A",
        "knowledgePoint": "区分项数和项的值",
        "analysis": "每次乘2，32×2=64。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "数列3,7,11,15的第n项可写成哪一个？",
        "options": [
          "A. 4n-1",
          "B. 3n+4",
          "C. n+3",
          "D. 7n-4"
        ],
        "answer": "A",
        "knowledgePoint": "用字母表示第n项",
        "analysis": "当n=1,2,3,4时，4n-1分别为3,7,11,15。"
      },
      {
        "type": "open",
        "text": "请为数列5,9,13,17写出规律、下一项和第n项表达式。",
        "scoringPoints": [
          "说明每次加4",
          "下一项为21",
          "第n项可写成4n+1"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 62,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "合并同类项3x+2x，结果是什么？",
        "options": [
          "A. 5x",
          "B. 5x²",
          "C. 6x",
          "D. x"
        ],
        "answer": "A",
        "knowledgePoint": "展开和合并分步写",
        "analysis": "同类项合并只合并系数，3x+2x=5x。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "展开2(x+4)，结果是什么？",
        "options": [
          "A. 2x+8",
          "B. 2x+4",
          "C. x+8",
          "D. 6x"
        ],
        "answer": "A",
        "knowledgePoint": "展开和合并分步写",
        "analysis": "2分别乘x和4，得到2x+8。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "提取公因式8x+12，结果是什么？",
        "options": [
          "A. 4(2x+3)",
          "B. 8(x+12)",
          "C. 2(8x+12)",
          "D. 12(8x+1)"
        ],
        "answer": "A",
        "knowledgePoint": "提取公因式反向检查",
        "analysis": "8和12的最大公因数是4，所以8x+12=4(2x+3)。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "表达式2x+3x+4在x=2时的值是多少？",
        "options": [
          "A. 14",
          "B. 10",
          "C. 18",
          "D. 9"
        ],
        "answer": "A",
        "knowledgePoint": "代入数值检验表达式",
        "analysis": "先合并为5x+4，代入x=2得10+4=14。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "展开3(x-1)+2x并合并，结果是什么？",
        "options": [
          "A. 5x-3",
          "B. 3x-1",
          "C. 5x+3",
          "D. x-3"
        ],
        "answer": "A",
        "knowledgePoint": "展开和合并分步写",
        "analysis": "3(x-1)+2x=3x-3+2x=5x-3。"
      },
      {
        "type": "open",
        "text": "请化简2(x+3)+3(x-1)，并用x=2代入原式和化简式检查。",
        "scoringPoints": [
          "展开为2x+6+3x-3",
          "合并为5x+3",
          "代入x=2，两边都为13"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 63,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "等式两边同时加同一个数，等式是否仍成立？",
        "options": [
          "A. 成立",
          "B. 一定不成立",
          "C. 只有左边成立",
          "D. 无法判断"
        ],
        "answer": "A",
        "knowledgePoint": "等式两边同时加减同一个数",
        "analysis": "等式两边同时加同一个数，等式仍保持平衡。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "等式两边同时乘同一个非零数，等式是否仍成立？",
        "options": [
          "A. 成立",
          "B. 一定不成立",
          "C. 只对整数成立",
          "D. 只对负数成立"
        ],
        "answer": "A",
        "knowledgePoint": "等式两边同时乘除同一个非零数",
        "analysis": "等式两边同时乘同一个数，等式仍成立；解方程除法时除数不能为0。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "若a=b，下列哪一个一定成立？",
        "options": [
          "A. a+3=b+3",
          "B. a+3=b",
          "C. 3a=b",
          "D. a-2=b+2"
        ],
        "answer": "A",
        "knowledgePoint": "等式两边同时加减同一个数",
        "analysis": "两边同时加3，等式仍成立。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "若2x=10，两边同时除以2，得到什么？",
        "options": [
          "A. x=5",
          "B. x=12",
          "C. 2x=5",
          "D. x=20"
        ],
        "answer": "A",
        "knowledgePoint": "等式两边同时乘除同一个非零数",
        "analysis": "两边除以2，得到x=5。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "解方程时只对左边减3，没有对右边减3，会造成什么问题？",
        "options": [
          "A. 等式失去平衡",
          "B. 一定更简单",
          "C. 答案自动正确",
          "D. x消失"
        ],
        "answer": "A",
        "knowledgePoint": "等式两边同时加减同一个数",
        "analysis": "方程靠等号两边同值成立，只改一边会破坏平衡。"
      },
      {
        "type": "open",
        "text": "请用天平作比喻解释等式性质，并举一个两边同时减同一个数的例子。",
        "scoringPoints": [
          "说明等式像天平两边平衡",
          "两边做同样操作仍平衡",
          "举出如x+3=8，两边减3得x=5"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 64,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "解x+5=12，x等于多少？",
        "options": [
          "A. 7",
          "B. 17",
          "C. 60",
          "D. 5"
        ],
        "answer": "A",
        "knowledgePoint": "用逆运算解加减方程",
        "analysis": "两边减5，x=7。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "解x-4=9，x等于多少？",
        "options": [
          "A. 13",
          "B. 5",
          "C. 36",
          "D. -13"
        ],
        "answer": "A",
        "knowledgePoint": "用逆运算解加减方程",
        "analysis": "两边加4，x=13。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "解3x=18，x等于多少？",
        "options": [
          "A. 6",
          "B. 15",
          "C. 21",
          "D. 54"
        ],
        "answer": "A",
        "knowledgePoint": "用逆运算解乘除方程",
        "analysis": "两边除以3，x=6。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "解x/5=4，x等于多少？",
        "options": [
          "A. 20",
          "B. 9",
          "C. 4/5",
          "D. 1"
        ],
        "answer": "A",
        "knowledgePoint": "用逆运算解乘除方程",
        "analysis": "两边乘5，x=20。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "解一步方程后，为什么要代回原方程？",
        "options": [
          "A. 检查答案是否让等式成立",
          "B. 让步骤变长",
          "C. 改变题目",
          "D. 去掉未知数"
        ],
        "answer": "A",
        "knowledgePoint": "代回原题验算",
        "analysis": "代回能确认等号两边是否相等。"
      },
      {
        "type": "open",
        "text": "请解方程x-7=15，并把答案代回验算。",
        "scoringPoints": [
          "两边加7得到x=22",
          "代回22-7=15",
          "说明等式成立"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 65,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "解2x+3=11，第一步最好做什么？",
        "options": [
          "A. 两边同时减3",
          "B. 只把左边减3",
          "C. 先把11除以2",
          "D. 两边加3"
        ],
        "answer": "A",
        "knowledgePoint": "先移开加减项",
        "analysis": "先消去+3，两边同时减3。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "解2x+3=11，x等于多少？",
        "options": [
          "A. 4",
          "B. 7",
          "C. 5.5",
          "D. 8"
        ],
        "answer": "A",
        "knowledgePoint": "再处理乘除系数",
        "analysis": "2x=8，x=4。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "解3x-5=10，x等于多少？",
        "options": [
          "A. 5",
          "B. 3",
          "C. 15",
          "D. 45"
        ],
        "answer": "A",
        "knowledgePoint": "移项后检查符号",
        "analysis": "3x=15，x=5。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "解方程x/2+4=9，x等于多少？",
        "options": [
          "A. 10",
          "B. 5",
          "C. 26",
          "D. 2.5"
        ],
        "answer": "A",
        "knowledgePoint": "再处理乘除系数",
        "analysis": "x/2=5，x=10。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "解4x-7=21后，正确验算是哪一个？",
        "options": [
          "A. x=7，4×7-7=21",
          "B. x=7，4+7-7=4",
          "C. x=14，4×14-7=49",
          "D. x=21，4×21=84"
        ],
        "answer": "A",
        "knowledgePoint": "代回原题验算",
        "analysis": "4x=28，x=7；代回4×7-7=21。"
      },
      {
        "type": "open",
        "text": "请解方程5x+6=31，写出每一步，并代回检查。",
        "scoringPoints": [
          "两边减6得5x=25",
          "两边除以5得x=5",
          "代回5×5+6=31"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 66,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "解3(x+2)=15，第一步可以怎样做？",
        "options": [
          "A. 两边先除以3",
          "B. 只把x加2",
          "C. 把15加2",
          "D. 把括号删掉不算"
        ],
        "answer": "A",
        "knowledgePoint": "括号前有负号要变号",
        "analysis": "两边除以3，得到x+2=5。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "解3(x+2)=15，x等于多少？",
        "options": [
          "A. 3",
          "B. 5",
          "C. 7",
          "D. 45"
        ],
        "answer": "A",
        "knowledgePoint": "括号前有负号要变号",
        "analysis": "x+2=5，所以x=3。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "展开方程2(x-4)=10后，得到什么？",
        "options": [
          "A. 2x-8=10",
          "B. 2x-4=10",
          "C. x-8=10",
          "D. 2x+8=10"
        ],
        "answer": "A",
        "knowledgePoint": "括号前有负号要变号",
        "analysis": "2要乘括号里的x和-4，得到2x-8=10。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "解2(x-4)=10，x等于多少？",
        "options": [
          "A. 9",
          "B. 5",
          "C. 14",
          "D. 3"
        ],
        "answer": "A",
        "knowledgePoint": "括号前有负号要变号",
        "analysis": "2x-8=10，2x=18，x=9。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "方程4(x+1)=2x+10中，x等于多少？",
        "options": [
          "A. 3",
          "B. 2",
          "C. 4",
          "D. 6"
        ],
        "answer": "A",
        "knowledgePoint": "括号前有负号要变号",
        "analysis": "展开得4x+4=2x+10，2x=6，x=3。"
      },
      {
        "type": "open",
        "text": "请解方程2(x+3)=18，并分别用“先除以2”和“先展开”两种思路说明。",
        "scoringPoints": [
          "先除以2：x+3=9，x=6",
          "先展开：2x+6=18，2x=12，x=6",
          "代回2(6+3)=18"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 67,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "解方程x/3=5，x等于多少？",
        "options": [
          "A. 15",
          "B. 8",
          "C. 5/3",
          "D. 2"
        ],
        "answer": "A",
        "knowledgePoint": "多个分母可同乘公倍数",
        "analysis": "两边同时乘3，x=15。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "解方程x/4+2=7，第一步最好做什么？",
        "options": [
          "A. 两边同时减2",
          "B. 两边同时乘4",
          "C. 只把左边减2",
          "D. 把x改成0"
        ],
        "answer": "A",
        "knowledgePoint": "先移开加减项",
        "analysis": "先消去+2，两边同时减2，得到x/4=5。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "解方程x/4+2=7，x等于多少？",
        "options": [
          "A. 20",
          "B. 5",
          "C. 9",
          "D. 28"
        ],
        "answer": "A",
        "knowledgePoint": "多个分母可同乘公倍数",
        "analysis": "x/4+2=7，x/4=5，所以x=20。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "方程(1/2)x=6中，x等于多少？",
        "options": [
          "A. 12",
          "B. 3",
          "C. 6",
          "D. 1/12"
        ],
        "answer": "A",
        "knowledgePoint": "多个分母可同乘公倍数",
        "analysis": "两边乘2，或除以1/2，得到x=12。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "解x/5-3=1后，最合适的验算是哪一个？",
        "options": [
          "A. 把x=20代回，20/5-3=1",
          "B. 只看20是不是偶数",
          "C. 把5和3相加",
          "D. 不需要验算"
        ],
        "answer": "A",
        "knowledgePoint": "用估算和代回检查",
        "analysis": "x/5-3=1，x/5=4，x=20；代回20/5-3=1成立。"
      },
      {
        "type": "open",
        "text": "请解方程x/6+4=9，并把答案代回原方程检查。",
        "scoringPoints": [
          "两边减4得到x/6=5",
          "两边乘6得到x=30",
          "代回30/6+4=9"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 68,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "姐姐年龄是弟弟的2倍，弟弟x岁，姐姐应表示为？",
        "options": [
          "A. 2x岁",
          "B. x+2岁",
          "C. x-2岁",
          "D. x/2岁"
        ],
        "answer": "A",
        "knowledgePoint": "根据关系列等式",
        "analysis": "“2倍”表示姐姐年龄为2x。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "弟弟x岁，姐姐比弟弟大5岁，姐姐应表示为？",
        "options": [
          "A. x+5岁",
          "B. 5x岁",
          "C. x-5岁",
          "D. 5-x岁"
        ],
        "answer": "A",
        "knowledgePoint": "代回原题验算年龄",
        "analysis": "比弟弟大5岁，就是x+5。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "弟弟x岁，姐姐x+5岁，两人年龄和为25。方程应写成？",
        "options": [
          "A. x+(x+5)=25",
          "B. x+5=25",
          "C. 5x=25",
          "D. x-5=25"
        ],
        "answer": "A",
        "knowledgePoint": "代回原题验算年龄",
        "analysis": "两人年龄相加为25，所以x+(x+5)=25。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "解x+(x+5)=25，弟弟多少岁？",
        "options": [
          "A. 10岁",
          "B. 15岁",
          "C. 20岁",
          "D. 5岁"
        ],
        "answer": "A",
        "knowledgePoint": "解方程时保持平衡",
        "analysis": "2x+5=25，2x=20，x=10。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "弟弟10岁、姐姐15岁，怎样检查“姐姐比弟弟大5岁，两人共25岁”？",
        "options": [
          "A. 15-10=5且10+15=25",
          "B. 15×10=150",
          "C. 25-5=20",
          "D. 10÷15"
        ],
        "answer": "A",
        "knowledgePoint": "代回原题验算年龄",
        "analysis": "年龄题要同时检查差和总和是否符合题意。"
      },
      {
        "type": "open",
        "text": "弟弟x岁，姐姐比弟弟大4岁，两人一共24岁。请列方程、求年龄，并验算。",
        "scoringPoints": [
          "列x+(x+4)=24",
          "解得x=10，姐姐14岁",
          "检查14-10=4且10+14=24"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 69,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "每本练习册3加隆，买x本，总价应表示为？",
        "options": [
          "A. 3x加隆",
          "B. x+3加隆",
          "C. x-3加隆",
          "D. 3/x加隆"
        ],
        "answer": "A",
        "knowledgePoint": "把未知量设成数量",
        "analysis": "单价乘数量得到总价，3×x=3x。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "买x本每本3加隆，又买一支2加隆羽毛笔，总价应表示为？",
        "options": [
          "A. 3x+2",
          "B. 3x-2",
          "C. 2x+3",
          "D. 5x"
        ],
        "answer": "A",
        "knowledgePoint": "根据总额列方程",
        "analysis": "练习册总价3x，加上羽毛笔2加隆，总价3x+2。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "3x+2=20中，x等于多少？",
        "options": [
          "A. 6",
          "B. 7",
          "C. 18",
          "D. 5"
        ],
        "answer": "A",
        "knowledgePoint": "解方程并检查数量是否合理",
        "analysis": "3x=18，x=6。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "每本3加隆，买6本，再买2加隆羽毛笔，总价是多少？",
        "options": [
          "A. 20加隆",
          "B. 18加隆",
          "C. 11加隆",
          "D. 24加隆"
        ],
        "answer": "A",
        "knowledgePoint": "代回原题验算金额",
        "analysis": "3×6+2=20加隆。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "方程3x+2=20表示买练习册和羽毛笔。解出x=6后，x的单位是什么？",
        "options": [
          "A. 本",
          "B. 加隆",
          "C. 支",
          "D. 平方厘米"
        ],
        "answer": "A",
        "knowledgePoint": "解方程并检查数量是否合理",
        "analysis": "x表示练习册本数，所以单位是本。"
      },
      {
        "type": "open",
        "text": "每本练习册4加隆，另买3加隆墨水，总共23加隆。设买x本练习册，请列方程并求x。",
        "scoringPoints": [
          "列4x+3=23",
          "解得4x=20，x=5",
          "说明可以买5本练习册"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 70,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "速度、时间、路程的关系是哪一个？",
        "options": [
          "A. 路程=速度×时间",
          "B. 速度=路程×时间",
          "C. 时间=路程×速度",
          "D. 路程=速度+时间"
        ],
        "answer": "A",
        "knowledgePoint": "把未知量设成时间或路程",
        "analysis": "基本行程公式为路程=速度×时间。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "速度为5km/h，走3小时，路程是多少？",
        "options": [
          "A. 15km",
          "B. 8km",
          "C. 2km",
          "D. 5/3km"
        ],
        "answer": "A",
        "knowledgePoint": "根据总路程列方程",
        "analysis": "路程=5×3=15km。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "总路程20km，速度4km/h，时间是多少？",
        "options": [
          "A. 5小时",
          "B. 16小时",
          "C. 80小时",
          "D. 24小时"
        ],
        "answer": "A",
        "knowledgePoint": "把未知量设成时间或路程",
        "analysis": "时间=路程÷速度=20÷4=5小时。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "某人每小时走4km，x小时走了12km。方程应写成？",
        "options": [
          "A. 4x=12",
          "B. x+4=12",
          "C. x-4=12",
          "D. 12x=4"
        ],
        "answer": "A",
        "knowledgePoint": "根据总路程列方程",
        "analysis": "速度×时间=路程，所以4x=12。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "解4x=12后，x=3。怎样验算？",
        "options": [
          "A. 4×3=12",
          "B. 4+3=12",
          "C. 12÷3=3",
          "D. 3-4=12"
        ],
        "answer": "A",
        "knowledgePoint": "代回原题验算路程",
        "analysis": "把时间3小时代回，路程=4×3=12km。"
      },
      {
        "type": "open",
        "text": "猫头鹰每小时飞18km，飞了x小时后共飞72km。请列方程、求x，并写单位。",
        "scoringPoints": [
          "列18x=72",
          "解得x=4",
          "答案为4小时并代回18×4=72"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 71,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "符号“>”表示什么？",
        "options": [
          "A. 大于",
          "B. 小于",
          "C. 等于",
          "D. 不等于"
        ],
        "answer": "A",
        "knowledgePoint": "理解大于等于和小于等于",
        "analysis": ">表示左边大于右边。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "符号“<”表示什么？",
        "options": [
          "A. 小于",
          "B. 大于",
          "C. 等于",
          "D. 约等于"
        ],
        "answer": "A",
        "knowledgePoint": "理解大于等于和小于等于",
        "analysis": "<表示左边小于右边。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "下面哪个不等式正确？",
        "options": [
          "A. 7>3",
          "B. 2>8",
          "C. 5<1",
          "D. 4<0"
        ],
        "answer": "A",
        "knowledgePoint": "理解大于等于和小于等于",
        "analysis": "7确实大于3，其他选项不正确。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "“至少5个”可以用哪个不等式表示？",
        "options": [
          "A. x≥5",
          "B. x>5",
          "C. x≤5",
          "D. x<5"
        ],
        "answer": "A",
        "knowledgePoint": "在数轴上表示不等式",
        "analysis": "至少5个表示可以等于5，也可以多于5，所以x≥5。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "“少于10加隆”可以用哪个不等式表示？",
        "options": [
          "A. x<10",
          "B. x≤10",
          "C. x>10",
          "D. x=10"
        ],
        "answer": "A",
        "knowledgePoint": "理解大于等于和小于等于",
        "analysis": "少于10表示严格小于10，不包括10。"
      },
      {
        "type": "open",
        "text": "请分别用不等式表示：“最多8人”“超过12分”“不少于3瓶”。",
        "scoringPoints": [
          "最多8人写x≤8",
          "超过12分写x>12",
          "不少于3瓶写x≥3"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 72,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "解不等式x+3>8，第一步可以做什么？",
        "options": [
          "A. 两边同时减3",
          "B. 只减左边",
          "C. 两边乘0",
          "D. 改成等号"
        ],
        "answer": "A",
        "knowledgePoint": "像方程一样移开加减项",
        "analysis": "保持不等关系，两边同时减3。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "x+3>8的解集是什么？",
        "options": [
          "A. x>5",
          "B. x<5",
          "C. x=5",
          "D. x>11"
        ],
        "answer": "A",
        "knowledgePoint": "用数轴和代入检查解集",
        "analysis": "两边减3，得到x>5。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "解2x≤10，解集是什么？",
        "options": [
          "A. x≤5",
          "B. x≥5",
          "C. x<8",
          "D. x=5"
        ],
        "answer": "A",
        "knowledgePoint": "乘除正数方向不变",
        "analysis": "两边除以正数2，不等号方向不变，x≤5。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "x=4是否满足x+3>8？",
        "options": [
          "A. 不满足",
          "B. 满足",
          "C. 无法判断",
          "D. 一定满足"
        ],
        "answer": "A",
        "knowledgePoint": "用数轴和代入检查解集",
        "analysis": "4+3=7，7不大于8。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "解不等式3x-2≥7，解集是什么？",
        "options": [
          "A. x≥3",
          "B. x≤3",
          "C. x≥5",
          "D. x≤5"
        ],
        "answer": "A",
        "knowledgePoint": "用数轴和代入检查解集",
        "analysis": "3x≥9，x≥3。"
      },
      {
        "type": "open",
        "text": "请解不等式2x+1<9，并用一个满足解集的数代入检查。",
        "scoringPoints": [
          "两边减1得2x<8",
          "两边除以2得x<4",
          "代入如x=3，2×3+1=7<9"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 73,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "直角是多少度？",
        "options": [
          "A. 90°",
          "B. 180°",
          "C. 360°",
          "D. 45°"
        ],
        "answer": "A",
        "knowledgePoint": "区分锐角、直角、钝角和平角",
        "analysis": "直角大小为90°。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "平角是多少度？",
        "options": [
          "A. 180°",
          "B. 90°",
          "C. 360°",
          "D. 60°"
        ],
        "answer": "A",
        "knowledgePoint": "区分锐角、直角、钝角和平角",
        "analysis": "一条直线形成平角，大小为180°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一个角小于90°，它是什么角？",
        "options": [
          "A. 锐角",
          "B. 钝角",
          "C. 平角",
          "D. 周角"
        ],
        "answer": "A",
        "knowledgePoint": "区分锐角、直角、钝角和平角",
        "analysis": "大于0°且小于90°的角是锐角。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一个角是120°，它是什么角？",
        "options": [
          "A. 钝角",
          "B. 锐角",
          "C. 直角",
          "D. 零角"
        ],
        "answer": "A",
        "knowledgePoint": "区分锐角、直角、钝角和平角",
        "analysis": "120°大于90°小于180°，是钝角。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "量角器读数时，角的一边应对准哪里？",
        "options": [
          "A. 0°刻度线",
          "B. 90°刻度线",
          "C. 任意位置",
          "D. 180°数字"
        ],
        "answer": "A",
        "knowledgePoint": "量角器中心对准顶点",
        "analysis": "量角时顶点对中心，一边对准0°刻度线，再读另一边。"
      },
      {
        "type": "open",
        "text": "请说明锐角、直角、钝角、平角分别对应什么度数范围或度数。",
        "scoringPoints": [
          "锐角小于90°",
          "直角等于90°",
          "钝角大于90°小于180°，平角等于180°"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 74,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "两个角互余，它们的和是多少？",
        "options": [
          "A. 90°",
          "B. 180°",
          "C. 360°",
          "D. 45°"
        ],
        "answer": "A",
        "knowledgePoint": "互余角和为90°",
        "analysis": "互余角的和为90°。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "两个角互补，它们的和是多少？",
        "options": [
          "A. 180°",
          "B. 90°",
          "C. 360°",
          "D. 60°"
        ],
        "answer": "A",
        "knowledgePoint": "互补角和为180°",
        "analysis": "互补角的和为180°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一个角是35°，它的余角是多少？",
        "options": [
          "A. 55°",
          "B. 145°",
          "C. 65°",
          "D. 35°"
        ],
        "answer": "A",
        "knowledgePoint": "互余角和为90°",
        "analysis": "余角=90°-35°=55°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一个角是70°，它的补角是多少？",
        "options": [
          "A. 110°",
          "B. 20°",
          "C. 70°",
          "D. 160°"
        ],
        "answer": "A",
        "knowledgePoint": "互补角和为180°",
        "analysis": "补角=180°-70°=110°。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个角的余角是25°，这个角是多少？",
        "options": [
          "A. 65°",
          "B. 155°",
          "C. 25°",
          "D. 115°"
        ],
        "answer": "A",
        "knowledgePoint": "互余角和为90°",
        "analysis": "这个角与25°相加为90°，所以是65°。"
      },
      {
        "type": "open",
        "text": "一个角为48°。请分别求它的余角和补角，并说明两者总和标准不同。",
        "scoringPoints": [
          "余角90°-48°=42°",
          "补角180°-48°=132°",
          "说明互余和为90°，互补和为180°"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 75,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "两条直线相交形成的对顶角有什么关系？",
        "options": [
          "A. 相等",
          "B. 相加90°",
          "C. 相加360°",
          "D. 没关系"
        ],
        "answer": "A",
        "knowledgePoint": "对顶角相等",
        "analysis": "两条直线相交时，对顶角相等。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一个角是60°，它的对顶角是多少？",
        "options": [
          "A. 60°",
          "B. 120°",
          "C. 30°",
          "D. 180°"
        ],
        "answer": "A",
        "knowledgePoint": "对顶角相等",
        "analysis": "对顶角相等，所以也是60°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "两条直线相交，一个角是110°，与它相邻的角是多少？",
        "options": [
          "A. 70°",
          "B. 110°",
          "C. 90°",
          "D. 180°"
        ],
        "answer": "A",
        "knowledgePoint": "相邻角互补",
        "analysis": "相邻角组成平角，180°-110°=70°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "两条直线相交形成四个角，其中一个是110°，四个角中会有几个110°？",
        "options": [
          "A. 2个",
          "B. 1个",
          "C. 3个",
          "D. 4个"
        ],
        "answer": "A",
        "knowledgePoint": "对顶角相等",
        "analysis": "该角和它的对顶角都是110°，共2个。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "若两条直线相交，一个角为x，对顶角为3x-40。x是多少？",
        "options": [
          "A. 20",
          "B. 40",
          "C. 60",
          "D. 80"
        ],
        "answer": "A",
        "knowledgePoint": "对顶角相等",
        "analysis": "对顶角相等，x=3x-40，2x=40，x=20。"
      },
      {
        "type": "open",
        "text": "两条直线相交，其中一个角为125°。请写出另外三个角的度数，并说明用到对顶角和邻补角。",
        "scoringPoints": [
          "对顶角也是125°",
          "相邻角为180°-125°=55°",
          "另一个对顶角也是55°"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 76,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "两条平行线被一条截线所截，同位角有什么关系？",
        "options": [
          "A. 相等",
          "B. 相加90°",
          "C. 相加360°",
          "D. 一定不相等"
        ],
        "answer": "A",
        "knowledgePoint": "用位置关系检查角度",
        "analysis": "平行线被截时，同位角相等。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "两条平行线被截，内错角有什么关系？",
        "options": [
          "A. 相等",
          "B. 互余",
          "C. 互补",
          "D. 无法比较"
        ],
        "answer": "A",
        "knowledgePoint": "内错角相等",
        "analysis": "平行线被截时，内错角相等。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "两条平行线被截，一个同位角是65°，对应同位角是多少？",
        "options": [
          "A. 65°",
          "B. 115°",
          "C. 25°",
          "D. 180°"
        ],
        "answer": "A",
        "knowledgePoint": "用位置关系检查角度",
        "analysis": "同位角相等，所以对应角也是65°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "平行线被截，同旁内角有什么关系？",
        "options": [
          "A. 和为180°",
          "B. 相等",
          "C. 和为90°",
          "D. 都为0°"
        ],
        "answer": "A",
        "knowledgePoint": "同旁内角互补",
        "analysis": "平行线被截时，同旁内角互补，和为180°。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "平行线被截，一个同旁内角是72°，另一个是多少？",
        "options": [
          "A. 108°",
          "B. 72°",
          "C. 18°",
          "D. 118°"
        ],
        "answer": "A",
        "knowledgePoint": "同旁内角互补",
        "analysis": "同旁内角和为180°，另一个=180°-72°=108°。"
      },
      {
        "type": "open",
        "text": "两条平行线被截，一个内错角为58°。请写出对应内错角，并求与它同旁内角的角度。",
        "scoringPoints": [
          "对应内错角为58°",
          "同旁内角与58°互补",
          "同旁内角=122°"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 77,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "三角形的内角和是多少？",
        "options": [
          "A. 180°",
          "B. 90°",
          "C. 360°",
          "D. 270°"
        ],
        "answer": "A",
        "knowledgePoint": "三角形三个内角和为180°",
        "analysis": "任意三角形的三个内角和都是180°。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "三角形两个角是50°和60°，第三个角是多少？",
        "options": [
          "A. 70°",
          "B. 110°",
          "C. 80°",
          "D. 60°"
        ],
        "answer": "A",
        "knowledgePoint": "用已知角求未知角",
        "analysis": "第三角=180°-50°-60°=70°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "三角形两个角是35°和75°，第三个角是多少？",
        "options": [
          "A. 70°",
          "B. 80°",
          "C. 110°",
          "D. 145°"
        ],
        "answer": "A",
        "knowledgePoint": "三角形三个内角和为180°",
        "analysis": "180°-35°-75°=70°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一个三角形三个角可能是40°、60°、90°吗？",
        "options": [
          "A. 不可能",
          "B. 可能",
          "C. 一定是等边三角形",
          "D. 无法判断"
        ],
        "answer": "A",
        "knowledgePoint": "三角形三个内角和为180°",
        "analysis": "40°+60°+90°=190°，超过180°，不可能是三角形内角。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "三角形一个外角等于相邻内角的补角。若相邻内角为110°，这个外角是多少？",
        "options": [
          "A. 70°",
          "B. 110°",
          "C. 180°",
          "D. 290°"
        ],
        "answer": "A",
        "knowledgePoint": "三角形三个内角和为180°",
        "analysis": "外角与相邻内角成一条直线，和为180°，所以外角70°。"
      },
      {
        "type": "open",
        "text": "一个三角形有两个角分别为42°和68°。请计算第三个角，并用内角和检查。",
        "scoringPoints": [
          "写出三角形内角和180°",
          "计算180°-42°-68°=70°",
          "检查42°+68°+70°=180°"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 78,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "三个角都小于90°的三角形叫什么？",
        "options": [
          "A. 锐角三角形",
          "B. 直角三角形",
          "C. 钝角三角形",
          "D. 等腰三角形"
        ],
        "answer": "A",
        "knowledgePoint": "按角分类",
        "analysis": "三个角都小于90°，是锐角三角形。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "有一个角等于90°的三角形叫什么？",
        "options": [
          "A. 直角三角形",
          "B. 锐角三角形",
          "C. 钝角三角形",
          "D. 等边三角形"
        ],
        "answer": "A",
        "knowledgePoint": "等边三角形也是等腰三角形",
        "analysis": "含有一个90°角的三角形是直角三角形。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "角为30°、60°、90°的三角形按角分类是什么？",
        "options": [
          "A. 直角三角形",
          "B. 锐角三角形",
          "C. 钝角三角形",
          "D. 不能成三角形"
        ],
        "answer": "A",
        "knowledgePoint": "等边三角形也是等腰三角形",
        "analysis": "有一个90°角，所以是直角三角形。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "三边都相等的三角形叫什么？",
        "options": [
          "A. 等边三角形",
          "B. 钝角三角形",
          "C. 直角三角形",
          "D. 普通四边形"
        ],
        "answer": "A",
        "knowledgePoint": "按边分类",
        "analysis": "三条边都相等的三角形是等边三角形。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个三角形三个角为40°、40°、100°。按角分类是什么？",
        "options": [
          "A. 钝角三角形",
          "B. 锐角三角形",
          "C. 直角三角形",
          "D. 等边三角形"
        ],
        "answer": "A",
        "knowledgePoint": "等边三角形也是等腰三角形",
        "analysis": "含有一个大于90°的角100°，所以是钝角三角形。"
      },
      {
        "type": "open",
        "text": "请分别举出一个锐角、直角、钝角三角形的角度例子，并检查三个角和为180°。",
        "scoringPoints": [
          "锐角例子三个角都小于90°且和180°",
          "直角例子含90°且和180°",
          "钝角例子含一个大于90°角且和180°"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 79,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "等腰三角形有什么边的特征？",
        "options": [
          "A. 有两条边相等",
          "B. 三条边都不同",
          "C. 一定有四条边",
          "D. 没有角"
        ],
        "answer": "A",
        "knowledgePoint": "等腰三角形有两条相等的边",
        "analysis": "等腰三角形至少有两条边相等。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "等腰三角形的两个底角有什么关系？",
        "options": [
          "A. 相等",
          "B. 相加一定90°",
          "C. 一个是另一个两倍",
          "D. 都是0°"
        ],
        "answer": "A",
        "knowledgePoint": "两个底角相等",
        "analysis": "等腰三角形两腰相等，对应的两个底角相等。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "等腰三角形顶角为40°，每个底角是多少？",
        "options": [
          "A. 70°",
          "B. 40°",
          "C. 100°",
          "D. 60°"
        ],
        "answer": "A",
        "knowledgePoint": "等腰三角形有两条相等的边",
        "analysis": "剩余角和为140°，两个底角相等，所以每个70°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "等腰三角形一个底角是50°，顶角是多少？",
        "options": [
          "A. 80°",
          "B. 50°",
          "C. 100°",
          "D. 130°"
        ],
        "answer": "A",
        "knowledgePoint": "用内角和求顶角或底角",
        "analysis": "两个底角都是50°，顶角=180°-50°-50°=80°。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个三角形角为70°、70°、40°，可以判断它是什么三角形？",
        "options": [
          "A. 等腰三角形",
          "B. 直角三角形",
          "C. 不可能的三角形",
          "D. 四边形"
        ],
        "answer": "A",
        "knowledgePoint": "等腰三角形有两条相等的边",
        "analysis": "两个角相等，对应边也相等，所以是等腰三角形。"
      },
      {
        "type": "open",
        "text": "等腰三角形顶角为36°。请计算两个底角，并说明用到了哪些性质。",
        "scoringPoints": [
          "写出三角形内角和180°",
          "剩余144°平分给两个底角",
          "每个底角72°，用到底角相等"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 80,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "平行四边形的对边有什么关系？",
        "options": [
          "A. 分别平行且相等",
          "B. 都相交于直角",
          "C. 只有一条边",
          "D. 必须都是曲线"
        ],
        "answer": "A",
        "knowledgePoint": "平行四边形和菱形",
        "analysis": "平行四边形两组对边分别平行且相等。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "长方形有什么角的特征？",
        "options": [
          "A. 四个角都是直角",
          "B. 只有一个直角",
          "C. 没有直角",
          "D. 角和为180°"
        ],
        "answer": "A",
        "knowledgePoint": "长方形和正方形",
        "analysis": "长方形四个角都是90°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "正方形和长方形相比，多了哪一个条件？",
        "options": [
          "A. 四条边都相等",
          "B. 没有直角",
          "C. 只有三条边",
          "D. 对边不平行"
        ],
        "answer": "A",
        "knowledgePoint": "长方形和正方形",
        "analysis": "正方形既有四个直角，又有四条相等的边。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "只有一组对边平行的四边形通常叫作什么？",
        "options": [
          "A. 梯形",
          "B. 正方形",
          "C. 三角形",
          "D. 圆"
        ],
        "answer": "A",
        "knowledgePoint": "梯形有一组对边平行",
        "analysis": "梯形通常指只有一组对边平行的四边形。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个四边形四个角都是直角，邻边不相等。它最准确可称为什么？",
        "options": [
          "A. 长方形",
          "B. 正方形",
          "C. 梯形",
          "D. 三角形"
        ],
        "answer": "A",
        "knowledgePoint": "平行四边形和菱形",
        "analysis": "四个直角说明是长方形；邻边不相等则不是正方形。"
      },
      {
        "type": "open",
        "text": "请比较平行四边形、长方形、正方形的共同点和区别。",
        "scoringPoints": [
          "说明它们都是四边形",
          "说明长方形有四个直角",
          "说明正方形在长方形基础上四边相等"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 81,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "n边形内角和公式是哪一个？",
        "options": [
          "A. (n-2)×180°",
          "B. n×180°",
          "C. (n+2)×90°",
          "D. n+180°"
        ],
        "answer": "A",
        "knowledgePoint": "内角和公式",
        "analysis": "n边形可以分成n-2个三角形，所以内角和为(n-2)×180°。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "四边形内角和是多少？",
        "options": [
          "A. 360°",
          "B. 180°",
          "C. 540°",
          "D. 720°"
        ],
        "answer": "A",
        "knowledgePoint": "正多边形每个内角",
        "analysis": "(4-2)×180°=360°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "五边形内角和是多少？",
        "options": [
          "A. 540°",
          "B. 360°",
          "C. 720°",
          "D. 180°"
        ],
        "answer": "A",
        "knowledgePoint": "正多边形每个内角",
        "analysis": "(5-2)×180°=540°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "六边形内角和是多少？",
        "options": [
          "A. 720°",
          "B. 540°",
          "C. 360°",
          "D. 1080°"
        ],
        "answer": "A",
        "knowledgePoint": "正多边形每个内角",
        "analysis": "(6-2)×180°=720°。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个四边形三个角为80°、90°、100°，第四个角是多少？",
        "options": [
          "A. 90°",
          "B. 80°",
          "C. 100°",
          "D. 180°"
        ],
        "answer": "A",
        "knowledgePoint": "正多边形每个内角",
        "analysis": "四边形内角和360°，第四角=360°-80°-90°-100°=90°。"
      },
      {
        "type": "open",
        "text": "请用“分成三角形”的思路解释五边形内角和为什么是540°。",
        "scoringPoints": [
          "说明从一个顶点可把五边形分成3个三角形",
          "每个三角形180°",
          "3×180°=540°"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 82,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "几何综合题中，看到角度条件时最应先写清什么？",
        "options": [
          "A. 已知角和要求的未知角",
          "B. 答案颜色",
          "C. 只看角的名字不标位置",
          "D. 随机公式"
        ],
        "answer": "A",
        "knowledgePoint": "先画出已知图形",
        "analysis": "几何题先把已知角、边和目标标到图上。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "三角形两角为45°和65°，第三角是多少？",
        "options": [
          "A. 70°",
          "B. 110°",
          "C. 80°",
          "D. 45°"
        ],
        "answer": "A",
        "knowledgePoint": "选择合适的图形性质",
        "analysis": "180°-45°-65°=70°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "四边形三个角为70°、80°、90°，第四个角是多少？",
        "options": [
          "A. 120°",
          "B. 100°",
          "C. 110°",
          "D. 130°"
        ],
        "answer": "A",
        "knowledgePoint": "选择合适的图形性质",
        "analysis": "360°-70°-80°-90°=120°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "等腰三角形两个底角都是55°，顶角是多少？",
        "options": [
          "A. 70°",
          "B. 55°",
          "C. 125°",
          "D. 110°"
        ],
        "answer": "A",
        "knowledgePoint": "选择合适的图形性质",
        "analysis": "顶角=180°-55°-55°=70°。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个五边形四个角为100°、110°、90°、120°，第五个角是多少？",
        "options": [
          "A. 120°",
          "B. 100°",
          "C. 140°",
          "D. 180°"
        ],
        "answer": "A",
        "knowledgePoint": "先画出已知图形",
        "analysis": "五边形内角和540°，已知四角和420°，第五角120°。"
      },
      {
        "type": "open",
        "text": "请任选三角形、四边形或五边形，设计一道求未知角的题，并写出总和检查。",
        "scoringPoints": [
          "题目中的图形内角和正确",
          "求未知角过程清楚",
          "用所有角相加回到总和检查"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 83,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "周长描述的是什么？",
        "options": [
          "A. 图形边界的总长度",
          "B. 平面内部大小",
          "C. 空间体积",
          "D. 坐标位置"
        ],
        "answer": "A",
        "knowledgePoint": "周长是边界长度",
        "analysis": "周长是沿图形边界走一圈的总长度。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "面积描述的是什么？",
        "options": [
          "A. 平面区域的大小",
          "B. 边界长度",
          "C. 物体重量",
          "D. 角度大小"
        ],
        "answer": "A",
        "knowledgePoint": "面积是内部区域大小",
        "analysis": "面积表示平面内部区域大小。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "长方形长6cm、宽4cm，周长是多少？",
        "options": [
          "A. 20cm",
          "B. 24平方厘米",
          "C. 10cm",
          "D. 24cm"
        ],
        "answer": "A",
        "knowledgePoint": "周长是边界长度",
        "analysis": "周长=2×(6+4)=20cm。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "长方形长6cm、宽4cm，面积是多少？",
        "options": [
          "A. 24平方厘米",
          "B. 20cm",
          "C. 10平方厘米",
          "D. 24立方厘米"
        ],
        "answer": "A",
        "knowledgePoint": "同一图形可同时有周长和面积",
        "analysis": "面积=6×4=24平方厘米。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "学生把长方形面积答案写成24cm，错在哪里？",
        "options": [
          "A. 面积单位应是平方厘米",
          "B. 6×4不能算",
          "C. 周长单位应是平方厘米",
          "D. 面积没有单位"
        ],
        "answer": "A",
        "knowledgePoint": "用单位检查答案",
        "analysis": "面积用平方单位，长度或周长才用厘米。"
      },
      {
        "type": "open",
        "text": "请用同一个长方形长8cm、宽3cm，分别求周长和面积，并说明单位不同的原因。",
        "scoringPoints": [
          "周长=2×(8+3)=22cm",
          "面积=8×3=24平方厘米",
          "说明周长是长度，面积是区域"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 84,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "长方形面积公式是什么？",
        "options": [
          "A. 长×宽",
          "B. 2×(长+宽)",
          "C. 边长×4",
          "D. 底×高÷2"
        ],
        "answer": "A",
        "knowledgePoint": "长方形面积等于长乘宽",
        "analysis": "长方形面积等于长乘宽。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "正方形面积公式是什么？",
        "options": [
          "A. 边长×边长",
          "B. 边长×4",
          "C. 边长+4",
          "D. 2πr"
        ],
        "answer": "A",
        "knowledgePoint": "正方形面积等于边长平方",
        "analysis": "正方形面积等于边长的平方。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "长方形长7cm、宽5cm，面积是多少？",
        "options": [
          "A. 35平方厘米",
          "B. 24cm",
          "C. 12平方厘米",
          "D. 49平方厘米"
        ],
        "answer": "A",
        "knowledgePoint": "长方形面积等于长乘宽",
        "analysis": "7×5=35平方厘米。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "正方形边长6cm，面积是多少？",
        "options": [
          "A. 36平方厘米",
          "B. 24cm",
          "C. 12平方厘米",
          "D. 6平方厘米"
        ],
        "answer": "A",
        "knowledgePoint": "正方形面积等于边长平方",
        "analysis": "6×6=36平方厘米。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个长方形长2m、宽50cm。求面积前应先做什么？",
        "options": [
          "A. 统一单位",
          "B. 直接2×50",
          "C. 把宽去掉",
          "D. 改用周长公式"
        ],
        "answer": "A",
        "knowledgePoint": "代入前统一单位",
        "analysis": "长和宽单位不同，计算面积前要统一单位。"
      },
      {
        "type": "open",
        "text": "长方形长12cm、宽5cm，正方形边长8cm。请分别求面积，并比较哪个更大。",
        "scoringPoints": [
          "长方形面积12×5=60平方厘米",
          "正方形面积8×8=64平方厘米",
          "比较正方形面积更大"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 85,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "三角形面积公式是什么？",
        "options": [
          "A. 底×高÷2",
          "B. 底×高",
          "C. 长×宽",
          "D. 2×(长+宽)"
        ],
        "answer": "A",
        "knowledgePoint": "三角形面积公式",
        "analysis": "三角形面积是同底同高平行四边形面积的一半。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "三角形底8cm、高5cm，面积是多少？",
        "options": [
          "A. 20平方厘米",
          "B. 40平方厘米",
          "C. 13平方厘米",
          "D. 26平方厘米"
        ],
        "answer": "A",
        "knowledgePoint": "三角形面积公式",
        "analysis": "8×5÷2=20平方厘米。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "三角形面积公式中的高必须怎样？",
        "options": [
          "A. 与底垂直",
          "B. 等于任意斜边",
          "C. 总是最长边",
          "D. 可以随便取"
        ],
        "answer": "A",
        "knowledgePoint": "三角形面积公式",
        "analysis": "高是从顶点到底边或其延长线的垂直距离。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "底10m、高300cm的三角形，计算面积前应先做什么？",
        "options": [
          "A. 统一单位",
          "B. 直接10×300÷2",
          "C. 把底和高相加",
          "D. 改成周长"
        ],
        "answer": "A",
        "knowledgePoint": "三角形面积公式",
        "analysis": "米和厘米不同，代入面积公式前要统一。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "学生算三角形面积时只写底×高，漏了什么？",
        "options": [
          "A. 除以2",
          "B. 乘以2",
          "C. 加上周长",
          "D. 换成体积"
        ],
        "answer": "A",
        "knowledgePoint": "三角形面积公式",
        "analysis": "三角形面积是底×高的一半，必须除以2。"
      },
      {
        "type": "open",
        "text": "三角形底12cm、高7cm。请计算面积，并说明为什么要除以2。",
        "scoringPoints": [
          "写出12×7÷2=42平方厘米",
          "说明两个同样三角形可拼成平行四边形",
          "三角形面积是对应平行四边形的一半"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 86,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "平行四边形面积公式是什么？",
        "options": [
          "A. 底×高",
          "B. 底×高÷2",
          "C. 上底+下底",
          "D. 边长×4"
        ],
        "answer": "A",
        "knowledgePoint": "平行四边形可转化为长方形",
        "analysis": "平行四边形面积等于底乘对应的高。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "平行四边形底9cm、高4cm，面积是多少？",
        "options": [
          "A. 36平方厘米",
          "B. 18平方厘米",
          "C. 26cm",
          "D. 13平方厘米"
        ],
        "answer": "A",
        "knowledgePoint": "面积等于底乘高",
        "analysis": "9×4=36平方厘米。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "平行四边形面积中的高必须和底怎样？",
        "options": [
          "A. 垂直",
          "B. 平行",
          "C. 相等",
          "D. 没关系"
        ],
        "answer": "A",
        "knowledgePoint": "底和高必须对应",
        "analysis": "高是到底边的垂直距离，必须与底垂直。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "底6m、高50cm的平行四边形，计算面积前应先做什么？",
        "options": [
          "A. 统一单位",
          "B. 直接6×50",
          "C. 把高除以2",
          "D. 求周长"
        ],
        "answer": "A",
        "knowledgePoint": "平行四边形可转化为长方形",
        "analysis": "底和高单位不同，需要统一后再计算。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "平行四边形底为10cm，斜边为8cm，高为6cm。面积应使用哪个长度？",
        "options": [
          "A. 高6cm",
          "B. 斜边8cm",
          "C. 底和斜边相加",
          "D. 只用斜边"
        ],
        "answer": "A",
        "knowledgePoint": "底和高必须对应",
        "analysis": "面积=底×对应高，不能用斜边代替高。"
      },
      {
        "type": "open",
        "text": "平行四边形底14cm、高5cm。请计算面积，并说明为什么不能用斜边代替高。",
        "scoringPoints": [
          "写出14×5=70平方厘米",
          "说明高必须垂直于底",
          "说明斜边不表示底到对边的垂直距离"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 87,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "梯形面积公式是哪一个？",
        "options": [
          "A. (上底+下底)×高÷2",
          "B. 长×宽",
          "C. 边长×4",
          "D. 底×高"
        ],
        "answer": "A",
        "knowledgePoint": "梯形面积公式",
        "analysis": "梯形面积等于上底与下底之和乘高，再除以2。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "梯形上底4cm、下底10cm、高6cm，面积是多少？",
        "options": [
          "A. 42平方厘米",
          "B. 84平方厘米",
          "C. 60平方厘米",
          "D. 20平方厘米"
        ],
        "answer": "A",
        "knowledgePoint": "梯形由上底、下底和高决定面积",
        "analysis": "(4+10)×6÷2=14×6÷2=42平方厘米。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "计算梯形面积时，高指的是什么？",
        "options": [
          "A. 两底之间的垂直距离",
          "B. 任意一条斜边",
          "C. 上底长度",
          "D. 下底长度"
        ],
        "answer": "A",
        "knowledgePoint": "梯形由上底、下底和高决定面积",
        "analysis": "梯形的高是两条平行底边之间的垂直距离。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "梯形面积答案应使用什么单位？",
        "options": [
          "A. 平方单位",
          "B. 长度单位",
          "C. 立方单位",
          "D. 没有单位"
        ],
        "answer": "A",
        "knowledgePoint": "梯形由上底、下底和高决定面积",
        "analysis": "面积表示平面区域大小，使用平方单位。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "梯形上底5m、下底7m、高300cm。计算面积前最先要做什么？",
        "options": [
          "A. 统一单位",
          "B. 直接把5+7+300相加",
          "C. 把高除以2",
          "D. 改成体积"
        ],
        "answer": "A",
        "knowledgePoint": "代入前统一单位并估算",
        "analysis": "5m、7m和300cm单位不同，代入公式前应先统一单位。"
      },
      {
        "type": "open",
        "text": "梯形上底6cm、下底12cm、高5cm。请计算面积，并说明为什么最后单位是平方厘米。",
        "scoringPoints": [
          "写出公式(6+12)×5÷2",
          "算出45平方厘米",
          "说明面积描述平面区域，单位为平方厘米"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 88,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "求复合图形面积时，常用的第一步是什么？",
        "options": [
          "A. 把图形分割或补成长方形、三角形等基本图形",
          "B. 只量最长边",
          "C. 直接求周长",
          "D. 写一个随机数"
        ],
        "answer": "A",
        "knowledgePoint": "拆分成已知图形",
        "analysis": "复合图形面积通常先分割或补成已会计算的基本图形。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一个L形图形可以看成两个长方形拼成。总面积应怎样求？",
        "options": [
          "A. 两个长方形面积相加",
          "B. 两个长方形周长相加",
          "C. 只算较大的长方形",
          "D. 相乘"
        ],
        "answer": "A",
        "knowledgePoint": "拆分成已知图形",
        "analysis": "拼合图形没有重叠时，总面积等于各部分面积之和。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "大长方形面积60平方厘米，挖去小长方形面积12平方厘米，剩余面积是多少？",
        "options": [
          "A. 48平方厘米",
          "B. 72平方厘米",
          "C. 5平方厘米",
          "D. 60平方厘米"
        ],
        "answer": "A",
        "knowledgePoint": "补全后再相减",
        "analysis": "剩余面积=60-12=48平方厘米。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "分割复合图形时，为什么要避免重叠计算？",
        "options": [
          "A. 重叠部分会被算两次",
          "B. 面积会变成周长",
          "C. 单位会消失",
          "D. 图形不能分割"
        ],
        "answer": "A",
        "knowledgePoint": "拆分成已知图形",
        "analysis": "若分割部分重叠，重叠区域会被重复加入总面积。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个复合图形可分成8×4和3×2两个不重叠长方形。总面积是多少？",
        "options": [
          "A. 38",
          "B. 32",
          "C. 48",
          "D. 13"
        ],
        "answer": "A",
        "knowledgePoint": "拆分成已知图形",
        "analysis": "8×4=32，3×2=6，总面积32+6=38。"
      },
      {
        "type": "open",
        "text": "请说明求复合图形面积的两种思路：分割法和补形法，并各举一个简单例子。",
        "scoringPoints": [
          "说明分割法是拆成基本图形后相加",
          "说明补形法是先算大图形再减去缺口",
          "例子中面积计算合理"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 89,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "圆的周长公式可以写成哪一个？",
        "options": [
          "A. C=2πr",
          "B. A=πr²",
          "C. V=lwh",
          "D. S=lw"
        ],
        "answer": "A",
        "knowledgePoint": "周长公式",
        "analysis": "圆周长C=2πr，也可以写成C=πd。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "圆的直径是半径的几倍？",
        "options": [
          "A. 2倍",
          "B. 3倍",
          "C. 1/2倍",
          "D. 4倍"
        ],
        "answer": "A",
        "knowledgePoint": "认识半径、直径和圆周率",
        "analysis": "直径穿过圆心，两端在圆上，长度是半径的2倍。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "半径为3cm的圆，周长是多少？",
        "options": [
          "A. 6π cm",
          "B. 3π cm",
          "C. 9π cm²",
          "D. 12π cm"
        ],
        "answer": "A",
        "knowledgePoint": "认识半径、直径和圆周率",
        "analysis": "C=2πr=2π×3=6π cm。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "直径为10cm的圆，周长是多少？",
        "options": [
          "A. 10π cm",
          "B. 20π cm",
          "C. 100π cm²",
          "D. 5π cm"
        ],
        "answer": "A",
        "knowledgePoint": "认识半径、直径和圆周率",
        "analysis": "C=πd=10π cm。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "学生把半径4cm的圆周长写成16π平方厘米，错在哪里？",
        "options": [
          "A. 周长应用长度单位，且公式应为2πr=8π cm",
          "B. π不能使用",
          "C. 半径不能是4",
          "D. 周长一定是面积"
        ],
        "answer": "A",
        "knowledgePoint": "用估算检查周长",
        "analysis": "圆周长是长度，半径4cm时C=8π cm，不是16π平方厘米。"
      },
      {
        "type": "open",
        "text": "一个圆半径为5cm。请计算周长，并说明周长和面积的单位为什么不同。",
        "scoringPoints": [
          "写出C=2π×5=10π cm",
          "说明周长是边界长度，用cm",
          "说明面积才用平方厘米"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 90,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "圆的面积公式是哪一个？",
        "options": [
          "A. A=πr²",
          "B. C=2πr",
          "C. V=lwh",
          "D. P=2l+2w"
        ],
        "answer": "A",
        "knowledgePoint": "面积公式",
        "analysis": "圆面积等于π乘半径的平方。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "半径为3cm的圆，面积是多少？",
        "options": [
          "A. 9π平方厘米",
          "B. 6π厘米",
          "C. 3π平方厘米",
          "D. 12π平方厘米"
        ],
        "answer": "A",
        "knowledgePoint": "区分圆周长和圆面积",
        "analysis": "A=π×3²=9π平方厘米。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "直径为8cm的圆，半径是多少？",
        "options": [
          "A. 4cm",
          "B. 8cm",
          "C. 16cm",
          "D. 2cm"
        ],
        "answer": "A",
        "knowledgePoint": "由直径求半径",
        "analysis": "半径是直径的一半，8÷2=4cm。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "直径为8cm的圆，面积是多少？",
        "options": [
          "A. 16π平方厘米",
          "B. 8π平方厘米",
          "C. 64π平方厘米",
          "D. 16π厘米"
        ],
        "answer": "A",
        "knowledgePoint": "由直径求半径",
        "analysis": "半径4cm，面积=π×4²=16π平方厘米。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "计算圆面积时，学生把半径5直接乘2π得到10π。这个结果其实是什么？",
        "options": [
          "A. 周长",
          "B. 面积",
          "C. 体积",
          "D. 直径"
        ],
        "answer": "A",
        "knowledgePoint": "区分圆周长和圆面积",
        "analysis": "2πr是圆周长公式，不是面积公式。"
      },
      {
        "type": "open",
        "text": "一个圆直径为12cm。请先求半径，再求面积，并写清单位。",
        "scoringPoints": [
          "半径=12÷2=6cm",
          "面积=π×6²=36π平方厘米",
          "单位为平方厘米"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 91,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "长方体体积公式是哪一个？",
        "options": [
          "A. V=长×宽×高",
          "B. S=长×宽",
          "C. P=2长+2宽",
          "D. C=2πr"
        ],
        "answer": "A",
        "knowledgePoint": "长方体体积公式",
        "analysis": "长方体体积等于长、宽、高相乘。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "长方体长5cm、宽4cm、高3cm，体积是多少？",
        "options": [
          "A. 60立方厘米",
          "B. 12平方厘米",
          "C. 24厘米",
          "D. 20立方厘米"
        ],
        "answer": "A",
        "knowledgePoint": "长方体体积公式",
        "analysis": "V=5×4×3=60立方厘米。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "体积描述的是什么？",
        "options": [
          "A. 物体占据空间的大小",
          "B. 图形边界长度",
          "C. 平面区域大小",
          "D. 坐标位置"
        ],
        "answer": "A",
        "knowledgePoint": "体积表示占据空间的大小",
        "analysis": "体积是三维空间大小，用立方单位表示。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "底面积为20平方厘米，高为6厘米的长方体，体积是多少？",
        "options": [
          "A. 120立方厘米",
          "B. 26立方厘米",
          "C. 120平方厘米",
          "D. 60立方厘米"
        ],
        "answer": "A",
        "knowledgePoint": "长方体体积公式",
        "analysis": "体积=底面积×高=20×6=120立方厘米。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "长方体长2m、宽50cm、高30cm。计算体积前应先做什么？",
        "options": [
          "A. 统一单位",
          "B. 只算2×50",
          "C. 把高度去掉",
          "D. 改成面积题"
        ],
        "answer": "A",
        "knowledgePoint": "代入前统一单位",
        "analysis": "三个长度单位不同，乘之前要统一单位。"
      },
      {
        "type": "open",
        "text": "长方体长8cm、宽5cm、高4cm。请计算体积，并说明为什么使用立方厘米。",
        "scoringPoints": [
          "写出8×5×4=160",
          "答案160立方厘米",
          "说明体积是三维空间大小，用立方单位"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 92,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "长方体表面积问的是什么？",
        "options": [
          "A. 所有外表面面积总和",
          "B. 内部能装多少",
          "C. 一条边有多长",
          "D. 一个点的位置"
        ],
        "answer": "A",
        "knowledgePoint": "表面积是所有外表面的面积总和",
        "analysis": "表面积是立体图形所有外表面的面积总和。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "长方体有几个面？",
        "options": [
          "A. 6个",
          "B. 4个",
          "C. 8个",
          "D. 12个"
        ],
        "answer": "A",
        "knowledgePoint": "长方体表面积公式",
        "analysis": "长方体有六个面，相对面面积相等。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "长方体长l、宽w、高h，表面积公式可以写成什么？",
        "options": [
          "A. 2lw+2lh+2wh",
          "B. lwh",
          "C. lw+lh+wh",
          "D. 2l+2w"
        ],
        "answer": "A",
        "knowledgePoint": "长方体表面积公式",
        "analysis": "长方体有三组相对面，每组两个，所以S=2lw+2lh+2wh。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "长方体长3、宽2、高4，表面积是多少？",
        "options": [
          "A. 52",
          "B. 24",
          "C. 26",
          "D. 36"
        ],
        "answer": "A",
        "knowledgePoint": "表面积是所有外表面的面积总和",
        "analysis": "S=2×3×2+2×3×4+2×2×4=12+24+16=52。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "学生求长方体表面积只算lw+lh+wh，主要漏了什么？",
        "options": [
          "A. 每组相对面还有另一个面",
          "B. 高不能参与计算",
          "C. 表面积要用立方单位",
          "D. 只能算体积"
        ],
        "answer": "A",
        "knowledgePoint": "表面积是所有外表面的面积总和",
        "analysis": "lw、lh、wh只算了三种面各一个，长方体每种面都有一对。"
      },
      {
        "type": "open",
        "text": "长方体长4cm、宽3cm、高2cm。请计算表面积，并说明和体积题有什么不同。",
        "scoringPoints": [
          "写出2×4×3+2×4×2+2×3×2=52平方厘米",
          "说明表面积算外面六个面",
          "说明体积算内部空间，用立方单位"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 93,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "坐标平面中，两条轴的交点叫什么？",
        "options": [
          "A. 原点",
          "B. 终点",
          "C. 顶点",
          "D. 中点"
        ],
        "answer": "A",
        "knowledgePoint": "认识横轴、纵轴和原点",
        "analysis": "x轴和y轴的交点叫原点，坐标为(0,0)。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "(3,2)表示怎样移动？",
        "options": [
          "A. 向右3格，再向上2格",
          "B. 向上3格，再向右2格",
          "C. 向左3格，再向下2格",
          "D. 向右2格，再向上3格"
        ],
        "answer": "A",
        "knowledgePoint": "先横坐标后纵坐标",
        "analysis": "坐标按(x,y)读，先横后纵。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "点(-2,4)应怎样描？",
        "options": [
          "A. 向左2格，再向上4格",
          "B. 向右2格，再向上4格",
          "C. 向左4格，再向上2格",
          "D. 向下2格，再向右4格"
        ],
        "answer": "A",
        "knowledgePoint": "根据坐标描点",
        "analysis": "x=-2向左，y=4向上。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "点(0,5)在哪里？",
        "options": [
          "A. y轴上",
          "B. x轴上",
          "C. 第一象限内",
          "D. 第三象限内"
        ],
        "answer": "A",
        "knowledgePoint": "先横坐标后纵坐标",
        "analysis": "x=0的点在y轴上。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "如果把(3,2)误读成(2,3)，会发生什么？",
        "options": [
          "A. 点的位置改变",
          "B. 点仍在原处",
          "C. 变成原点",
          "D. 不能描点"
        ],
        "answer": "A",
        "knowledgePoint": "用坐标检查位置",
        "analysis": "坐标是有序数对，交换顺序通常得到不同位置。"
      },
      {
        "type": "open",
        "text": "请说明点(-4,3)从原点怎样移动，并判断它大致位于坐标平面的哪一块。",
        "scoringPoints": [
          "说明先向左4格",
          "再向上3格",
          "判断在左上方/第二象限"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 94,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "点(-2,3)在哪个象限？",
        "options": [
          "A. 第二象限",
          "B. 第一象限",
          "C. 第四象限",
          "D. 第三象限"
        ],
        "answer": "A",
        "knowledgePoint": "四个象限的符号",
        "analysis": "x负向左，y正向上，点在第二象限。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "点(0,4)属于哪个象限？",
        "options": [
          "A. 不属于任何象限",
          "B. 第一象限",
          "C. 第二象限",
          "D. 第四象限"
        ],
        "answer": "A",
        "knowledgePoint": "坐标轴上的点不属于任何象限",
        "analysis": "x=0的点在y轴上，坐标轴上的点不属于任何象限。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "第一象限点的坐标符号是什么？",
        "options": [
          "A. (+,+)",
          "B. (-,+)",
          "C. (-,-)",
          "D. (+,-)"
        ],
        "answer": "A",
        "knowledgePoint": "坐标轴上的点不属于任何象限",
        "analysis": "第一象限在右上方，x正、y正。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "第四象限点的坐标符号是什么？",
        "options": [
          "A. (+,-)",
          "B. (+,+)",
          "C. (-,+)",
          "D. (-,-)"
        ],
        "answer": "A",
        "knowledgePoint": "四个象限的符号",
        "analysis": "第四象限在右下方，x正、y负。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "点(-5,-1)在哪个象限？",
        "options": [
          "A. 第三象限",
          "B. 第二象限",
          "C. 第四象限",
          "D. 第一象限"
        ],
        "answer": "A",
        "knowledgePoint": "四个象限的符号",
        "analysis": "x负向左，y负向下，点在第三象限。"
      },
      {
        "type": "open",
        "text": "请写出四个象限的坐标符号，并举一个第二象限的点。",
        "scoringPoints": [
          "写出第一(+,+)、第二(-,+)、第三(-,-)、第四(+,-)",
          "举出如(-2,3)的第二象限点",
          "说明x负y正对应第二象限"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 95,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "A(2,3)和B(7,3)的水平距离是多少？",
        "options": [
          "A. 5",
          "B. 4",
          "C. 10",
          "D. 1"
        ],
        "answer": "A",
        "knowledgePoint": "水平距离看横坐标差",
        "analysis": "y相同，只看x差，|7-2|=5。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "C(4,-1)和D(4,5)的垂直距离是多少？",
        "options": [
          "A. 6",
          "B. 4",
          "C. -6",
          "D. 9"
        ],
        "answer": "A",
        "knowledgePoint": "垂直距离看纵坐标差",
        "analysis": "x相同，只看y差，|5-(-1)|=6。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "两个点纵坐标相同，说明它们在什么方向上对齐？",
        "options": [
          "A. 水平方向",
          "B. 垂直方向",
          "C. 斜线方向",
          "D. 无法判断"
        ],
        "answer": "A",
        "knowledgePoint": "水平距离看横坐标差",
        "analysis": "y相同表示高度相同，两点在同一水平线上。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "两个点横坐标相同，垂直距离看哪个坐标的差？",
        "options": [
          "A. 纵坐标",
          "B. 横坐标",
          "C. 两者相加",
          "D. 两者相乘"
        ],
        "answer": "A",
        "knowledgePoint": "垂直距离看纵坐标差",
        "analysis": "x相同，竖直方向变化来自y坐标。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "点E(-2,4)和F(3,4)的距离是多少？",
        "options": [
          "A. 5",
          "B. 1",
          "C. -5",
          "D. 7"
        ],
        "answer": "A",
        "knowledgePoint": "水平距离看横坐标差",
        "analysis": "y相同，距离=|3-(-2)|=5。"
      },
      {
        "type": "open",
        "text": "请分别求A(-1,2)、B(5,2)的水平距离，以及C(3,-4)、D(3,1)的垂直距离，并说明为什么距离不带负号。",
        "scoringPoints": [
          "水平距离|5-(-1)|=6",
          "垂直距离|1-(-4)|=5",
          "说明距离表示长度，用绝对值，不带负号"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 96,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一个点是线段中点，需要满足什么？",
        "options": [
          "A. 在线段上，并且到两端距离相等",
          "B. 离其中一个端点最近",
          "C. 坐标数字最大",
          "D. 一定在原点"
        ],
        "answer": "A",
        "knowledgePoint": "中点到两端距离相等",
        "analysis": "中点在线段上，并把线段分成相等的两段。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "A(2,4)和B(8,4)的中点坐标是多少？",
        "options": [
          "A. (5,4)",
          "B. (10,4)",
          "C. (5,8)",
          "D. (6,4)"
        ],
        "answer": "A",
        "knowledgePoint": "水平线段的中点看横坐标平均",
        "analysis": "x取平均(2+8)÷2=5，y保持4。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "C(3,-2)和D(3,6)的中点坐标是多少？",
        "options": [
          "A. (3,2)",
          "B. (2,3)",
          "C. (3,4)",
          "D. (6,2)"
        ],
        "answer": "A",
        "knowledgePoint": "垂直线段的中点看纵坐标平均",
        "analysis": "x保持3，y取平均(-2+6)÷2=2。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "水平线段的中点保留哪个相同坐标？",
        "options": [
          "A. 纵坐标y",
          "B. 横坐标x",
          "C. 两个都改变",
          "D. 都变成0"
        ],
        "answer": "A",
        "knowledgePoint": "水平线段的中点看横坐标平均",
        "analysis": "水平线段两端y相同，中点y也相同。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "E(-4,1)和F(2,1)的中点是多少？",
        "options": [
          "A. (-1,1)",
          "B. (1,-1)",
          "C. (3,1)",
          "D. (-2,1)"
        ],
        "answer": "A",
        "knowledgePoint": "水平线段的中点看横坐标平均",
        "analysis": "x=(-4+2)÷2=-1，y=1，所以中点为(-1,1)。"
      },
      {
        "type": "open",
        "text": "请求A(-2,5)和B(6,5)的中点，并用两段距离相等来检查。",
        "scoringPoints": [
          "中点x=(-2+6)÷2=2，y=5",
          "中点为(2,5)",
          "检查从-2到2是4格，从2到6也是4格"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 97,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "函数机器的规则是“×2再+1”，输入3，输出是多少？",
        "options": [
          "A. 7",
          "B. 6",
          "C. 8",
          "D. 5"
        ],
        "answer": "A",
        "knowledgePoint": "输入、规则和输出",
        "analysis": "按规则计算：3×2+1=7。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "在同一个函数规则下，同一个输入通常对应几个输出？",
        "options": [
          "A. 一个",
          "B. 两个",
          "C. 任意多个",
          "D. 没有输出"
        ],
        "answer": "A",
        "knowledgePoint": "同一输入只能有一个输出",
        "analysis": "规则固定时，同一个输入只能得到一个确定输出。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "规则y=2x+1，当x=4时，y是多少？",
        "options": [
          "A. 9",
          "B. 8",
          "C. 7",
          "D. 10"
        ],
        "answer": "A",
        "knowledgePoint": "输入、规则和输出",
        "analysis": "y=2×4+1=9。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "规则y=2x+1，输出y=11时，输入x是多少？",
        "options": [
          "A. 5",
          "B. 6",
          "C. 10",
          "D. 4"
        ],
        "answer": "A",
        "knowledgePoint": "输入、规则和输出",
        "analysis": "2x+1=11，2x=10，x=5。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "函数机器规则是“先减3，再乘4”。输入8，输出是多少？",
        "options": [
          "A. 20",
          "B. 29",
          "C. 17",
          "D. 32"
        ],
        "answer": "A",
        "knowledgePoint": "输入、规则和输出",
        "analysis": "先算8-3=5，再算5×4=20。"
      },
      {
        "type": "open",
        "text": "请设计一个函数机器规则，并给出两个输入和对应输出。要求说明规则是否每次保持不变。",
        "scoringPoints": [
          "写出明确规则",
          "给出两个输入和正确输出",
          "说明同一规则下输出由输入决定"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 98,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "规则y=3x-2，当x=2时，y是多少？",
        "options": [
          "A. 4",
          "B. 1",
          "C. 6",
          "D. 5"
        ],
        "answer": "A",
        "knowledgePoint": "按规则填写函数表",
        "analysis": "把x=2代入，y=3×2-2=4。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "函数表中一行通常对应什么？",
        "options": [
          "A. 一组输入和输出",
          "B. 一个标题",
          "C. 一个单位名称",
          "D. 一张图"
        ],
        "answer": "A",
        "knowledgePoint": "从表格看变化",
        "analysis": "函数表每一行记录一个输入x及对应输出y。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "表格x:1,2,3,4；y:5,7,9,11。x每增加1，y怎样变化？",
        "options": [
          "A. 增加2",
          "B. 减少2",
          "C. 不变",
          "D. 增加1"
        ],
        "answer": "A",
        "knowledgePoint": "从表格看变化",
        "analysis": "5到7、7到9、9到11，每次都增加2。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "表格中x=2时y=5，那么点(2,5)是否匹配这行数据？",
        "options": [
          "A. 匹配",
          "B. 不匹配",
          "C. 无法判断",
          "D. 只有画图才知道"
        ],
        "answer": "A",
        "knowledgePoint": "用表格检查点是否匹配",
        "analysis": "点(2,5)表示x=2、y=5，正好对应同一行。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "规则y=4x+1，表格中x=0、1、2对应的y依次是？",
        "options": [
          "A. 1,5,9",
          "B. 0,4,8",
          "C. 1,4,8",
          "D. 4,5,6"
        ],
        "answer": "A",
        "knowledgePoint": "按规则填写函数表",
        "analysis": "x=0时y=1，x=1时y=5，x=2时y=9。"
      },
      {
        "type": "open",
        "text": "请为规则y=2x+3填写x=0、1、2、3的函数表，并说明y的变化规律。",
        "scoringPoints": [
          "正确算出y为3、5、7、9",
          "说明x每增加1，y增加2",
          "表格中每行输入输出对应"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 99,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "表格x:0,1,2,3；y:1,3,5,7中，x每增加1，y增加多少？",
        "options": [
          "A. 2",
          "B. 1",
          "C. 3",
          "D. 0"
        ],
        "answer": "A",
        "knowledgePoint": "一次关系有固定变化率",
        "analysis": "输出从1到3到5到7，每步增加2。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "若x=0时y=1，且x每增加1时y增加2，规则可写成什么？",
        "options": [
          "A. y=2x+1",
          "B. y=x+2",
          "C. y=2x-1",
          "D. y=x-2"
        ],
        "answer": "A",
        "knowledgePoint": "一次关系有固定变化率",
        "analysis": "变化率是2，x=0时的起点是1，所以y=2x+1。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "用y=2x+1检查x=3，得到y是多少？",
        "options": [
          "A. 7",
          "B. 6",
          "C. 8",
          "D. 5"
        ],
        "answer": "A",
        "knowledgePoint": "用代入检查规则",
        "analysis": "y=2×3+1=7。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一次关系y=5x-2中，x每增加1，y增加多少？",
        "options": [
          "A. 5",
          "B. 2",
          "C. 3",
          "D. 1"
        ],
        "answer": "A",
        "knowledgePoint": "一次关系有固定变化率",
        "analysis": "x前的系数5表示x每增加1，y增加5。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "表格x:0,1,2；y:4,7,10。最合适的一次关系是哪一个？",
        "options": [
          "A. y=3x+4",
          "B. y=4x+3",
          "C. y=x+4",
          "D. y=7x"
        ],
        "answer": "A",
        "knowledgePoint": "用起点和变化写规则",
        "analysis": "x=0时y=4，变化率为3，所以规则是y=3x+4。"
      },
      {
        "type": "open",
        "text": "给出表格x:0,1,2,3；y:2,5,8,11。请写出一次关系，并代入x=3检查。",
        "scoringPoints": [
          "说明y每次增加3",
          "写出x=0时y=2，所以y=3x+2",
          "代入x=3得到11并与表格一致"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 100,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "表格中x=1、y=3对应哪个坐标点？",
        "options": [
          "A. (1,3)",
          "B. (3,1)",
          "C. (1,1)",
          "D. (3,3)"
        ],
        "answer": "A",
        "knowledgePoint": "把函数表转成坐标点",
        "analysis": "坐标按(x,y)写，x=1、y=3对应(1,3)。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一次函数的图像通常是什么？",
        "options": [
          "A. 一条直线",
          "B. 一个圆",
          "C. 一个孤立点",
          "D. 一张表"
        ],
        "answer": "A",
        "knowledgePoint": "一次函数的点在直线上",
        "analysis": "一次函数图像是一条直线。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "点(3,7)是否在y=2x+1的图像上？",
        "options": [
          "A. 在",
          "B. 不在",
          "C. 无法判断",
          "D. 只看点名"
        ],
        "answer": "A",
        "knowledgePoint": "用代入检查点是否在图像上",
        "analysis": "把x=3代入，2×3+1=7，与点的y坐标相同。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "点(2,6)是否在y=2x+1的图像上？",
        "options": [
          "A. 不在",
          "B. 在",
          "C. 一定在",
          "D. 无法代入"
        ],
        "answer": "A",
        "knowledgePoint": "用代入检查点是否在图像上",
        "analysis": "x=2时，2×2+1=5，不等于6，所以不在图像上。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "表格点(0,1)、(1,3)、(2,5)来自哪个规则？",
        "options": [
          "A. y=2x+1",
          "B. y=x+1",
          "C. y=3x+1",
          "D. y=2x-1"
        ],
        "answer": "A",
        "knowledgePoint": "用代入检查点是否在图像上",
        "analysis": "这些点的y值随x每增加1而增加2，且x=0时y=1。"
      },
      {
        "type": "open",
        "text": "请把表格x:0,1,2；y:2,4,6写成三个坐标点，并判断它们是否满足y=2x+2。",
        "scoringPoints": [
          "写出(0,2)、(1,4)、(2,6)",
          "逐个代入或说明规则匹配",
          "结论为都满足"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 101,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "下面哪个式子表示正比例关系？",
        "options": [
          "A. y=3x",
          "B. y=3x+1",
          "C. y=x-2",
          "D. y=2x+5"
        ],
        "answer": "A",
        "knowledgePoint": "正比例关系写成y=kx",
        "analysis": "正比例关系写成y=kx，没有额外加减项。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "正比例图像一定经过哪个点？",
        "options": [
          "A. (0,0)",
          "B. (1,0)",
          "C. (0,1)",
          "D. (1,1)"
        ],
        "answer": "A",
        "knowledgePoint": "图像经过原点",
        "analysis": "y=kx中x=0时y=0，所以经过原点。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "点(5,15)是否符合y=3x？",
        "options": [
          "A. 符合",
          "B. 不符合",
          "C. 无法判断",
          "D. 只看图才知道"
        ],
        "answer": "A",
        "knowledgePoint": "用比例常数判断点",
        "analysis": "3×5=15，点的y坐标正好是15。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "正比例关系y=4x中，比例常数k是多少？",
        "options": [
          "A. 4",
          "B. x",
          "C. y",
          "D. 0"
        ],
        "answer": "A",
        "knowledgePoint": "用比例常数判断点",
        "analysis": "y=kx中x前的固定倍数是k，这里k=4。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "下面哪组点都可能在正比例y=2x上？",
        "options": [
          "A. (1,2)、(3,6)",
          "B. (1,3)、(3,6)",
          "C. (0,1)、(2,4)",
          "D. (2,5)、(4,8)"
        ],
        "answer": "A",
        "knowledgePoint": "正比例关系写成y=kx",
        "analysis": "(1,2)和(3,6)都满足y=2x。"
      },
      {
        "type": "open",
        "text": "请解释为什么y=2x是正比例关系，并用两个点检查它的图像经过原点。",
        "scoringPoints": [
          "说明形式为y=kx",
          "写出x=0时y=0经过原点",
          "举出如(1,2)、(2,4)等点"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 102,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "P(-3,2)应怎样移动描点？",
        "options": [
          "A. 向左3格，再向上2格",
          "B. 向上3格，再向左2格",
          "C. 向右3格，再向下2格",
          "D. 向右2格，再向下3格"
        ],
        "answer": "A",
        "knowledgePoint": "先读坐标顺序",
        "analysis": "x=-3向左3格，y=2向上2格。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "A(1,5)和B(7,5)的中点是多少？",
        "options": [
          "A. (4,5)",
          "B. (6,5)",
          "C. (4,10)",
          "D. (8,5)"
        ],
        "answer": "A",
        "knowledgePoint": "距离和中点看变化的坐标",
        "analysis": "横坐标取平均(1+7)÷2=4，纵坐标保持5。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "点(4,7)是否满足y=2x-1？",
        "options": [
          "A. 满足",
          "B. 不满足",
          "C. 只看图才能知道",
          "D. 无法计算"
        ],
        "answer": "A",
        "knowledgePoint": "函数图像用代入检查",
        "analysis": "x=4时，2×4-1=7，与点的y相同。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "点(-3,2)位于哪个象限？",
        "options": [
          "A. 第二象限",
          "B. 第一象限",
          "C. 第三象限",
          "D. 第四象限"
        ],
        "answer": "A",
        "knowledgePoint": "距离和中点看变化的坐标",
        "analysis": "x负向左，y正向上，点在第二象限。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "C(2,-1)和D(2,5)的垂直距离是多少？",
        "options": [
          "A. 6",
          "B. 4",
          "C. -6",
          "D. 3"
        ],
        "answer": "A",
        "knowledgePoint": "距离和中点看变化的坐标",
        "analysis": "x相同，垂直距离为|5-(-1)|=6。"
      },
      {
        "type": "open",
        "text": "请综合使用坐标知识：描点A(2,3)、B(8,3)，求水平距离和中点，并说明每一步看哪个坐标。",
        "scoringPoints": [
          "说明两点y相同，是水平线段",
          "距离|8-2|=6",
          "中点((2+8)/2,3)=(5,3)"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 103,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "“最喜欢的课程”属于哪类数据？",
        "options": [
          "A. 分类数据",
          "B. 连续测量数据",
          "C. 时间数据",
          "D. 平均数"
        ],
        "answer": "A",
        "knowledgePoint": "分类数据记录类别",
        "analysis": "课程名称表示类别，不能直接加减。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "“每天阅读分钟数”为什么是数值数据？",
        "options": [
          "A. 可以比较大小并计算",
          "B. 它是课程名称",
          "C. 它没有单位",
          "D. 它不能排序"
        ],
        "answer": "A",
        "knowledgePoint": "数值数据可以计算",
        "analysis": "分钟数是数字，可以比较、求和或求平均。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "班级人数通常属于哪一种数值数据？",
        "options": [
          "A. 离散数据",
          "B. 连续数据",
          "C. 分类数据",
          "D. 百分数数据"
        ],
        "answer": "A",
        "knowledgePoint": "数值数据可以计算",
        "analysis": "人数来自计数，不能有半个人，通常是离散数据。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "身高通常属于哪一种数值数据？",
        "options": [
          "A. 连续数据",
          "B. 离散数据",
          "C. 分类数据",
          "D. 学院名称"
        ],
        "answer": "A",
        "knowledgePoint": "数值数据可以计算",
        "analysis": "身高来自测量，可以有小数。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "下面哪一组最适合先做频数统计？",
        "options": [
          "A. 学生选择的交通方式",
          "B. 每个人的精确身高",
          "C. 一条直线的长度",
          "D. 一个方程的未知数"
        ],
        "answer": "A",
        "knowledgePoint": "分类数据记录类别",
        "analysis": "交通方式是分类数据，适合统计每类出现次数。"
      },
      {
        "type": "open",
        "text": "请分别举一个分类数据、离散数值数据和连续数值数据，并说明判断依据。",
        "scoringPoints": [
          "分类数据例子说明是类别名称",
          "离散数据例子说明来自计数",
          "连续数据例子说明来自测量且可取小数"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 104,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "在频数表中，“蓝:6”表示什么？",
        "options": [
          "A. 蓝色出现6次",
          "B. 蓝色排第6名",
          "C. 蓝色长6厘米",
          "D. 蓝色概率一定为6"
        ],
        "answer": "A",
        "knowledgePoint": "频数表示出现次数",
        "analysis": "频数表示某个类别或数值出现的次数。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "制作频数表时，逐条划记主要是为了什么？",
        "options": [
          "A. 减少漏数和重复数",
          "B. 让表格更花哨",
          "C. 不用看原始数据",
          "D. 改变数据"
        ],
        "answer": "A",
        "knowledgePoint": "用正字或划记计数",
        "analysis": "每读一条数据就划一笔，有助于防止遗漏和重复。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "红4、蓝6、绿5的频数合计是多少？",
        "options": [
          "A. 15",
          "B. 11",
          "C. 9",
          "D. 30"
        ],
        "answer": "A",
        "knowledgePoint": "频数合计应等于数据总数",
        "analysis": "4+6+5=15。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "如果原始数据有15条，频数合计应该是多少？",
        "options": [
          "A. 15",
          "B. 14",
          "C. 16",
          "D. 0"
        ],
        "answer": "A",
        "knowledgePoint": "频数合计应等于数据总数",
        "analysis": "每条原始数据都应被统计一次，所以合计等于原始数据条数。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "原始数据有20条，频数表合计18。最可能说明什么？",
        "options": [
          "A. 有数据漏记",
          "B. 表格一定正确",
          "C. 原始数据不能统计",
          "D. 需要求平均数"
        ],
        "answer": "A",
        "knowledgePoint": "频数合计应等于数据总数",
        "analysis": "合计少于原始数据总数，通常说明有遗漏。"
      },
      {
        "type": "open",
        "text": "一组颜色记录中红4次、蓝6次、绿5次。请写出频数表合计，并说明怎样用合计检查。",
        "scoringPoints": [
          "写出频数合计4+6+5=15",
          "说明合计应等于原始记录条数",
          "说明不相等时需回查遗漏或重复"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 105,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "条形图最适合展示什么？",
        "options": [
          "A. 不同类别的数量比较",
          "B. 一条线的连续变化",
          "C. 一个点的坐标",
          "D. 一个方程解"
        ],
        "answer": "A",
        "knowledgePoint": "条形图适合比较类别数量",
        "analysis": "条形图用柱高比较不同类别的数量或频数。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "红色频数是4，柱子顶端应到哪里？",
        "options": [
          "A. 刻度4",
          "B. 刻度6",
          "C. 类别名称处",
          "D. 原点以下"
        ],
        "answer": "A",
        "knowledgePoint": "柱高必须对准刻度",
        "analysis": "柱高表示频数，红色频数4就应对准刻度4。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "红4、蓝6、绿5的条形图中，哪个类别最多？",
        "options": [
          "A. 蓝",
          "B. 绿",
          "C. 红",
          "D. 一样多"
        ],
        "answer": "A",
        "knowledgePoint": "条形图适合比较类别数量",
        "analysis": "蓝色频数6最高。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "条形图中横轴通常放什么？",
        "options": [
          "A. 类别",
          "B. 只放最大值",
          "C. 方程",
          "D. 未知角"
        ],
        "answer": "A",
        "knowledgePoint": "条形图适合比较类别数量",
        "analysis": "条形图常用横轴表示类别，纵轴表示数量或频数。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "条形图纵轴刻度为0、2、4、6，某柱频数为5，柱顶应在哪里？",
        "options": [
          "A. 4和6之间正中",
          "B. 刻度4",
          "C. 刻度6",
          "D. 刻度0"
        ],
        "answer": "A",
        "knowledgePoint": "柱高必须对准刻度",
        "analysis": "5位于4和6之间，且距离两者相等。"
      },
      {
        "type": "open",
        "text": "根据频数红4、蓝6、绿5，说明怎样画条形图，并写出最多和最少的类别。",
        "scoringPoints": [
          "说明横轴写类别、纵轴写频数",
          "柱高分别到4、6、5",
          "最多蓝，最少红"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 106,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一周气温变化最适合用什么图表示？",
        "options": [
          "A. 折线图",
          "B. 饼图",
          "C. 只写一行文字",
          "D. 坐标点不连线"
        ],
        "answer": "A",
        "knowledgePoint": "折线图适合表示随时间变化",
        "analysis": "气温随时间变化，折线图适合显示趋势。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "如果折线从14降到13，这段趋势是什么？",
        "options": [
          "A. 下降",
          "B. 上升",
          "C. 不变",
          "D. 无法读"
        ],
        "answer": "A",
        "knowledgePoint": "读上升、下降和不变",
        "analysis": "后一个数13比14小，所以趋势下降。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "从12°到14°，气温变化了多少？",
        "options": [
          "A. 上升2°",
          "B. 下降2°",
          "C. 上升26°",
          "D. 不变"
        ],
        "answer": "A",
        "knowledgePoint": "读上升、下降和不变",
        "analysis": "14-12=2，气温上升2°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "读折线图趋势时，应按什么顺序读？",
        "options": [
          "A. 横轴时间顺序",
          "B. 从最高点随便读",
          "C. 从右到左一定正确",
          "D. 只读最后一点"
        ],
        "answer": "A",
        "knowledgePoint": "折线图适合表示随时间变化",
        "analysis": "折线图通常按横轴时间或顺序从左到右读取变化。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "周一12°、周二14°、周三13°。哪一天比前一天下降？",
        "options": [
          "A. 周三",
          "B. 周二",
          "C. 周一",
          "D. 都下降"
        ],
        "answer": "A",
        "knowledgePoint": "折线图适合表示随时间变化",
        "analysis": "周三13°比周二14°低，表示周三相对前一天下降。"
      },
      {
        "type": "open",
        "text": "气温记录为周一12°、周二14°、周三13°、周四16°。请描述每段趋势和变化量。",
        "scoringPoints": [
          "周一到周二上升2°",
          "周二到周三下降1°",
          "周三到周四上升3°"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 107,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "饼图中整个圆通常表示什么？",
        "options": [
          "A. 整体",
          "B. 一个点",
          "C. 一条线段",
          "D. 一个未知数"
        ],
        "answer": "A",
        "knowledgePoint": "饼图表示整体中的比例",
        "analysis": "饼图用整个圆表示整体，各扇形表示部分占比。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一个完整饼图中，各部分百分比合计应是多少？",
        "options": [
          "A. 100%",
          "B. 50%",
          "C. 0%",
          "D. 200%"
        ],
        "answer": "A",
        "knowledgePoint": "所有比例合计为100%",
        "analysis": "饼图表示整体分配，各部分合计为100%。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "总数80人，其中40%选择红色，人数是多少？",
        "options": [
          "A. 32人",
          "B. 40人",
          "C. 20人",
          "D. 120人"
        ],
        "answer": "A",
        "knowledgePoint": "由比例求数量",
        "analysis": "40%=0.4，80×0.4=32人。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "红40%、蓝35%、绿25%，哪一部分最大？",
        "options": [
          "A. 红",
          "B. 蓝",
          "C. 绿",
          "D. 三者相同"
        ],
        "answer": "A",
        "knowledgePoint": "饼图表示整体中的比例",
        "analysis": "40%大于35%和25%，红色部分最大。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "饼图中三部分标成40%、35%、20%。最先应检查什么？",
        "options": [
          "A. 合计是否为100%",
          "B. 颜色是否好看",
          "C. 百分号能否省略",
          "D. 扇形名字是否一样长"
        ],
        "answer": "A",
        "knowledgePoint": "所有比例合计为100%",
        "analysis": "40%+35%+20%=95%，没有合成完整整体，需要回查数据。"
      },
      {
        "type": "open",
        "text": "一个饼图显示80名学生中，40%选红色，35%选蓝色，25%选绿色。请分别求三类人数，并检查总数。",
        "scoringPoints": [
          "红色80×40%=32人",
          "蓝色80×35%=28人，绿色80×25%=20人",
          "检查32+28+20=80人"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 108,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "4、6、8的平均数是多少？",
        "options": [
          "A. 6",
          "B. 18",
          "C. 8",
          "D. 4"
        ],
        "answer": "A",
        "knowledgePoint": "平均数可以不是原始数据",
        "analysis": "平均数=(4+6+8)÷3=18÷3=6。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "平均数等于什么？",
        "options": [
          "A. 总和除以个数",
          "B. 最大值减最小值",
          "C. 第一个数",
          "D. 出现最多的数"
        ],
        "answer": "A",
        "knowledgePoint": "平均数等于总和除以个数",
        "analysis": "平均数=数据总和÷数据个数。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "1、2、2的平均数约为1.67。它一定出现在原始数据中吗？",
        "options": [
          "A. 不一定",
          "B. 一定",
          "C. 只能是最大值",
          "D. 只能是整数"
        ],
        "answer": "A",
        "knowledgePoint": "平均数可以不是原始数据",
        "analysis": "平均数是计算出的代表值，不一定等于某个原始数据。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "甲组6、7、8，乙组5、7、9。两组平均数都是多少？",
        "options": [
          "A. 7",
          "B. 8",
          "C. 6",
          "D. 9"
        ],
        "answer": "A",
        "knowledgePoint": "平均数用于比较总体水平",
        "analysis": "甲组平均21÷3=7，乙组平均21÷3=7。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "两组平均数相同，能说明什么？",
        "options": [
          "A. 总体平均水平相同",
          "B. 每个数据都相同",
          "C. 最大值一定相同",
          "D. 最小值一定相同"
        ],
        "answer": "A",
        "knowledgePoint": "平均数用于比较总体水平",
        "analysis": "平均数相同只能说明总体平均水平相同，不代表每个数据一致。"
      },
      {
        "type": "open",
        "text": "请计算5、7、12的平均数，并说明平均数能告诉我们什么、不能告诉我们什么。",
        "scoringPoints": [
          "写出5+7+12=24，24÷3=8",
          "说明平均数表示总体代表水平",
          "说明它不表示每个数据都等于8"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 109,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "3、4、4、8、10的中位数是多少？",
        "options": [
          "A. 4",
          "B. 8",
          "C. 10",
          "D. 3"
        ],
        "answer": "A",
        "knowledgePoint": "中位数先排序再找中间",
        "analysis": "排序后中间的第3个数是4。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "3、4、4、8、10的众数是多少？",
        "options": [
          "A. 4",
          "B. 3",
          "C. 10",
          "D. 8"
        ],
        "answer": "A",
        "knowledgePoint": "众数是出现次数最多的数",
        "analysis": "4出现2次，其他数各出现1次，所以众数是4。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "2、5、7、10的中位数是多少？",
        "options": [
          "A. 6",
          "B. 5",
          "C. 7",
          "D. 10"
        ],
        "answer": "A",
        "knowledgePoint": "偶数个数据取中间两个的平均",
        "analysis": "偶数个数据取中间两个5和7的平均数，(5+7)÷2=6。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "求中位数前必须先做什么？",
        "options": [
          "A. 按大小排序",
          "B. 全部乘2",
          "C. 只看最大值",
          "D. 改成百分数"
        ],
        "answer": "A",
        "knowledgePoint": "中位数先排序再找中间",
        "analysis": "中位数看排序后的位置，乱序中找中间不可靠。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一组数据2、2、3、3、4可能有几个众数？",
        "options": [
          "A. 2个",
          "B. 0个",
          "C. 1个",
          "D. 4个"
        ],
        "answer": "A",
        "knowledgePoint": "众数是出现次数最多的数",
        "analysis": "2和3都出现2次，且次数最多，因此有两个众数。"
      },
      {
        "type": "open",
        "text": "请找出数据2、5、5、8、10、12的中位数和众数，并写出步骤。",
        "scoringPoints": [
          "先排序，数据已从小到大排列",
          "中位数=(5+8)÷2=6.5",
          "众数是5，因为5出现最多"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 110,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "在6、7、8、9、100中，哪个数最像极端值？",
        "options": [
          "A. 100",
          "B. 8",
          "C. 7",
          "D. 9"
        ],
        "answer": "A",
        "knowledgePoint": "极端值是远离大多数数据的值",
        "analysis": "100明显远离大多数数据6到9。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "极端大值通常会怎样影响平均数？",
        "options": [
          "A. 把平均数拉高",
          "B. 一定不影响",
          "C. 把平均数变成0",
          "D. 只影响众数"
        ],
        "answer": "A",
        "knowledgePoint": "中位数较不受极端值影响",
        "analysis": "平均数使用总和，极端大值会显著增加总和。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "6、7、8、9、10的平均数是多少？",
        "options": [
          "A. 8",
          "B. 10",
          "C. 6",
          "D. 40"
        ],
        "answer": "A",
        "knowledgePoint": "平均数容易被极端值拉动",
        "analysis": "总和40，40÷5=8。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "6、7、8、9、100的中位数是多少？",
        "options": [
          "A. 8",
          "B. 26",
          "C. 100",
          "D. 7"
        ],
        "answer": "A",
        "knowledgePoint": "极端值是远离大多数数据的值",
        "analysis": "排序后中间位置仍是8。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "为什么有极端值时，中位数有时比平均数更适合描述典型水平？",
        "options": [
          "A. 中位数看位置，不容易被末端数拉动",
          "B. 中位数总是最大值",
          "C. 平均数不能计算",
          "D. 极端值必须删除"
        ],
        "answer": "A",
        "knowledgePoint": "中位数较不受极端值影响",
        "analysis": "中位数由排序后的中间位置决定，通常较不受极端值影响。"
      },
      {
        "type": "open",
        "text": "比较6、7、8、9、10和6、7、8、9、100两组数据的平均数和中位数，说明极端值影响了什么。",
        "scoringPoints": [
          "算出第一组平均8、中位数8",
          "算出第二组平均26、中位数8",
          "说明100拉高平均数但中位数不变"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 111,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "普通六面骰子掷出7属于哪种事件？",
        "options": [
          "A. 不可能",
          "B. 可能",
          "C. 必然",
          "D. 已发生"
        ],
        "answer": "A",
        "knowledgePoint": "不可能、可能和必然",
        "analysis": "普通骰子只有1到6，没有7，所以掷出7不可能。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "必然事件的概率是多少？",
        "options": [
          "A. 1",
          "B. 0",
          "C. 1/2",
          "D. 2"
        ],
        "answer": "A",
        "knowledgePoint": "概率在0到1之间",
        "analysis": "必然事件一定发生，概率为1。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一个事件的概率可以是1.4吗？",
        "options": [
          "A. 不可以",
          "B. 可以",
          "C. 只有骰子题可以",
          "D. 只有百分数可以"
        ],
        "answer": "A",
        "knowledgePoint": "用分数、百分数和小数表达概率",
        "analysis": "概率范围是0到1，不能大于1。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "1/2、0.5和50%表示的概率是否相同？",
        "options": [
          "A. 相同",
          "B. 不同",
          "C. 只有前两个相同",
          "D. 只有后两个相同"
        ],
        "answer": "A",
        "knowledgePoint": "用分数、百分数和小数表达概率",
        "analysis": "1/2=0.5=50%，只是写法不同。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "概率为0的事件应怎样描述？",
        "options": [
          "A. 不可能事件",
          "B. 必然事件",
          "C. 一定发生",
          "D. 超过整体"
        ],
        "answer": "A",
        "knowledgePoint": "不可能、可能和必然",
        "analysis": "概率0表示事件不会发生。"
      },
      {
        "type": "open",
        "text": "请分别举一个不可能事件、可能事件和必然事件，并写出它们的概率范围或具体概率。",
        "scoringPoints": [
          "举出合理的不可能事件并说明概率0",
          "举出可能事件并说明概率在0和1之间",
          "举出必然事件并说明概率1"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 112,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "掷一次公平六面骰，掷出偶数的概率是多少？",
        "options": [
          "A. 3/6=1/2",
          "B. 2/6",
          "C. 1/6",
          "D. 6/3"
        ],
        "answer": "A",
        "knowledgePoint": "概率等于有利结果除以总结果",
        "analysis": "偶数有2、4、6三个，总结果6个，概率3/6=1/2。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "简单概率的基本公式是什么？",
        "options": [
          "A. 有利结果数÷总结果数",
          "B. 总结果数+有利结果数",
          "C. 最大值-最小值",
          "D. 平均数÷2"
        ],
        "answer": "A",
        "knowledgePoint": "概率等于有利结果除以总结果",
        "analysis": "等可能情况下，概率=有利结果数÷总结果数。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "直接用“有利结果÷总结果”时，通常要求各结果怎样？",
        "options": [
          "A. 等可能",
          "B. 名字一样长",
          "C. 一定很多",
          "D. 都是偶数"
        ],
        "answer": "A",
        "knowledgePoint": "等可能结果才能直接数",
        "analysis": "各结果机会相同时，直接数结果才可靠。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "3/6化简后是多少？",
        "options": [
          "A. 1/2",
          "B. 3/3",
          "C. 1/6",
          "D. 6/3"
        ],
        "answer": "A",
        "knowledgePoint": "化简概率分数",
        "analysis": "分子分母同除以3，3/6=1/2。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "袋中有3颗红珠和2颗蓝珠，随机摸一颗，摸到红珠的概率是多少？",
        "options": [
          "A. 3/5",
          "B. 2/5",
          "C. 3/2",
          "D. 5/3"
        ],
        "answer": "A",
        "knowledgePoint": "概率等于有利结果除以总结果",
        "analysis": "总数5颗，红珠3颗，概率为3/5。"
      },
      {
        "type": "open",
        "text": "袋中有4颗红珠、1颗蓝珠、5颗绿珠。随机摸一颗，求摸到绿珠的概率，并说明分母和分子分别表示什么。",
        "scoringPoints": [
          "写出总结果数4+1+5=10",
          "写出有利结果绿珠5颗，概率5/10=1/2",
          "说明分母是总数，分子是满足条件的数量"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 113,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "树状图的一条完整路径表示什么？",
        "options": [
          "A. 一个完整结果",
          "B. 一个类别名称",
          "C. 一个平均数",
          "D. 一个角"
        ],
        "answer": "A",
        "knowledgePoint": "用树状图找有利结果",
        "analysis": "从起点走到终点的一条路径对应一个完整结果。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "颜色有红、蓝两种，数字有1、2两种，共有几个结果？",
        "options": [
          "A. 4个",
          "B. 2个",
          "C. 3个",
          "D. 6个"
        ],
        "answer": "A",
        "knowledgePoint": "总结果数来自路径数",
        "analysis": "2种颜色×2个数字=4个结果。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "红1、红2、蓝1、蓝2中，含红色的结果有几个？",
        "options": [
          "A. 2个",
          "B. 1个",
          "C. 4个",
          "D. 0个"
        ],
        "answer": "A",
        "knowledgePoint": "用树状图找有利结果",
        "analysis": "含红的完整结果是红1和红2，共2个。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "树状图每一层通常表示什么？",
        "options": [
          "A. 一步选择",
          "B. 最终答案",
          "C. 单位换算",
          "D. 平均数"
        ],
        "answer": "A",
        "knowledgePoint": "每一层表示一步选择",
        "analysis": "多步选择中，每一层表示一步选择。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "先选颜色红/蓝，再选数字1/2/3，共有几条完整路径？",
        "options": [
          "A. 6条",
          "B. 5条",
          "C. 3条",
          "D. 2条"
        ],
        "answer": "A",
        "knowledgePoint": "总结果数来自路径数",
        "analysis": "每种颜色配3个数字，共2×3=6条路径。"
      },
      {
        "type": "open",
        "text": "请为“先选红/蓝，再选1/2”写出所有完整结果，并求选到红色的概率。",
        "scoringPoints": [
          "列出红1、红2、蓝1、蓝2",
          "指出含红结果2个，总结果4个",
          "概率2/4=1/2"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 114,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "系统列举时，为什么要固定顺序？",
        "options": [
          "A. 减少遗漏和重复",
          "B. 让答案更短",
          "C. 不用检查",
          "D. 改变题意"
        ],
        "answer": "A",
        "knowledgePoint": "按固定顺序列结果",
        "analysis": "固定顺序能帮助看出有没有漏项或重复项。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "3个字母和2个数字配对，一共有几个组合？",
        "options": [
          "A. 6个",
          "B. 5个",
          "C. 3个",
          "D. 2个"
        ],
        "answer": "A",
        "knowledgePoint": "表格帮助列全组合",
        "analysis": "3×2=6个组合。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "表格列举中，一个格子通常对应什么？",
        "options": [
          "A. 一个组合结果",
          "B. 一个标题",
          "C. 一个单位",
          "D. 一个平均数"
        ],
        "answer": "A",
        "knowledgePoint": "表格帮助列全组合",
        "analysis": "行列交叉的每个格子对应一个组合。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "列举结果中同一个组合写了两次，应该怎样处理？",
        "options": [
          "A. 删去重复并检查是否漏项",
          "B. 把它算两次",
          "C. 全部重写成平均数",
          "D. 不用管"
        ],
        "answer": "A",
        "knowledgePoint": "检查是否重复",
        "analysis": "重复项不能多算，删去后还要检查是否有遗漏。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "A、B、C配1、2时，下面哪组列举是完整且不重复的？",
        "options": [
          "A. A1,A2,B1,B2,C1,C2",
          "B. A1,A2,B1,C1",
          "C. A1,A1,B1,B2,C1,C2",
          "D. A1,B2,C3"
        ],
        "answer": "A",
        "knowledgePoint": "按固定顺序列结果",
        "analysis": "每个字母都配1和2，共六个结果，且没有重复。"
      },
      {
        "type": "open",
        "text": "用表格或有序列表列出A、B、C与1、2的所有组合，并说明你怎样检查完整性。",
        "scoringPoints": [
          "列出六个组合",
          "说明每个字母都配两个数字",
          "说明没有重复项"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 115,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "“每盒6支铅笔，买4盒”中，哪一项是条件？",
        "options": [
          "A. 每盒6支和买4盒",
          "B. 一共有多少支",
          "C. 答案必须是24",
          "D. 粉笔颜色"
        ],
        "answer": "A",
        "knowledgePoint": "条件是题目给出的信息",
        "analysis": "条件是题目已经给出的信息。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "题目问“一共有多少支”，目标是什么？",
        "options": [
          "A. 总支数",
          "B. 每盒支数",
          "C. 盒子的颜色",
          "D. 题目长度"
        ],
        "answer": "A",
        "knowledgePoint": "目标是问题要回答的量",
        "analysis": "目标是题目要求求出的量，这里是总支数。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "6支/盒×4盒的结果单位应是什么？",
        "options": [
          "A. 支",
          "B. 盒",
          "C. 支/盒",
          "D. 没有单位"
        ],
        "answer": "A",
        "knowledgePoint": "单位帮助检查答案",
        "analysis": "每盒支数乘盒数，得到总支数，单位为支。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "读文字题时，为什么不要把问题句当作已知条件？",
        "options": [
          "A. 问题句是要找的目标",
          "B. 问题句一定没用",
          "C. 问题句只能画图",
          "D. 问题句没有单位"
        ],
        "answer": "A",
        "knowledgePoint": "条件是题目给出的信息",
        "analysis": "问题句告诉你要回答什么，不是题目已经给出的值。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "“每盒6支，买4盒，一共多少支？”最合适的算式是？",
        "options": [
          "A. 6×4=24支",
          "B. 6+4=10盒",
          "C. 6÷4支",
          "D. 4-6支"
        ],
        "answer": "A",
        "knowledgePoint": "条件是题目给出的信息",
        "analysis": "总支数=每盒支数×盒数=6×4=24支。"
      },
      {
        "type": "open",
        "text": "请把“每袋3枚硬币，买5袋，一共有多少枚？”拆成条件、目标和算式。",
        "scoringPoints": [
          "条件：每袋3枚，买5袋",
          "目标：总枚数",
          "算式3×5=15枚并写单位"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 116,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "线段图中更长的线段通常表示什么？",
        "options": [
          "A. 数量更大",
          "B. 名字更长",
          "C. 一定是答案",
          "D. 没有意义"
        ],
        "answer": "A",
        "knowledgePoint": "线段长度表示数量大小",
        "analysis": "线段长度用来表示数量大小。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "乙是甲的3倍，乙的线段应分成几段与甲相等？",
        "options": [
          "A. 3段",
          "B. 2段",
          "C. 4段",
          "D. 1段"
        ],
        "answer": "A",
        "knowledgePoint": "倍数关系用等分线段表示",
        "analysis": "3倍表示有3个相同单位段。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "如果一段表示8，三段表示多少？",
        "options": [
          "A. 24",
          "B. 11",
          "C. 32",
          "D. 8"
        ],
        "answer": "A",
        "knowledgePoint": "从图回到算式",
        "analysis": "三段就是3个8，3×8=24。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "画线段图最适合帮助整理哪类关系？",
        "options": [
          "A. 比较、差额和倍数关系",
          "B. 字体大小",
          "C. 只看最后一个数字",
          "D. 颜色深浅"
        ],
        "answer": "A",
        "knowledgePoint": "倍数关系用等分线段表示",
        "analysis": "线段图适合把谁多谁少、差多少、几倍关系画清楚。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "甲为8，乙是甲的3倍。若学生把乙写成11，最可能错在哪里？",
        "options": [
          "A. 把倍数关系误当成加法",
          "B. 忘了写甲",
          "C. 单位一定错误",
          "D. 乙不能比较"
        ],
        "answer": "A",
        "knowledgePoint": "倍数关系用等分线段表示",
        "analysis": "乙是甲的3倍应为8×3=24，写11像是算成8+3。"
      },
      {
        "type": "open",
        "text": "请用线段图思路解决：甲有8枚，乙是甲的3倍。乙有多少？两人共有多少？",
        "scoringPoints": [
          "说明乙由3段甲组成",
          "计算乙=8×3=24枚",
          "计算总数8+24=32枚"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 117,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "列表法中，一行通常记录什么？",
        "options": [
          "A. 一种可能情况",
          "B. 所有答案混在一起",
          "C. 题目标题",
          "D. 无关数字"
        ],
        "answer": "A",
        "knowledgePoint": "一行记录一种可能",
        "analysis": "列表法把不同可能逐行记录，一行对应一种情况。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "设置表格列名时，最应该参考什么？",
        "options": [
          "A. 题目条件和目标",
          "B. 纸张宽度",
          "C. 字母顺序",
          "D. 随机词语"
        ],
        "answer": "A",
        "knowledgePoint": "列名要对应条件",
        "analysis": "列名要服务解题，通常来自条件、目标和需要检查的量。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "3个字母A、B、C分别配数字1、2，一共有几个组合？",
        "options": [
          "A. 6个",
          "B. 5个",
          "C. 3个",
          "D. 2个"
        ],
        "answer": "A",
        "knowledgePoint": "一行记录一种可能",
        "analysis": "每个字母都能配2个数字，共3×2=6个组合。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "系统列表时按1、2、3、4顺序尝试，主要是为了什么？",
        "options": [
          "A. 方便发现遗漏",
          "B. 让答案更长",
          "C. 避免计算",
          "D. 改变题意"
        ],
        "answer": "A",
        "knowledgePoint": "按顺序尝试并筛选",
        "analysis": "固定顺序能让缺失的行更容易被发现。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "表格中A1出现了两次。最合理的处理是什么？",
        "options": [
          "A. 删去重复并检查是否漏项",
          "B. 把A1算两次",
          "C. 只留下重复项",
          "D. 改成平均数"
        ],
        "answer": "A",
        "knowledgePoint": "一行记录一种可能",
        "analysis": "同一个组合在列举中通常只能占一个位置，重复项要删去并重新检查。"
      },
      {
        "type": "open",
        "text": "用列表法列出A、B两种颜色和1、2、3三个数字的所有组合，并说明怎样检查不漏不重。",
        "scoringPoints": [
          "列出A1、A2、A3、B1、B2、B3",
          "说明一行或一个位置对应一种组合",
          "说明按顺序检查遗漏和重复"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 118,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一个数先乘3再加5得到23，倒推第一步应做什么？",
        "options": [
          "A. 23-5",
          "B. 23÷3",
          "C. 23+5",
          "D. 23×3"
        ],
        "answer": "A",
        "knowledgePoint": "倒推后要正向检查",
        "analysis": "倒推要从最后一步开始撤销；最后加5，反向先减5。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "乘以4的相反运算是什么？",
        "options": [
          "A. 除以4",
          "B. 加4",
          "C. 乘以-4",
          "D. 减4"
        ],
        "answer": "A",
        "knowledgePoint": "相反运算成对出现",
        "analysis": "乘以4可以用除以4撤销。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一个数先乘3再加5得到23，这个数是多少？",
        "options": [
          "A. 6",
          "B. 8",
          "C. 9",
          "D. 18"
        ],
        "answer": "A",
        "knowledgePoint": "倒推后要正向检查",
        "analysis": "23-5=18，18÷3=6。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一个数先减7再除以2得到5。倒推时应先做什么？",
        "options": [
          "A. 5×2",
          "B. 5+7",
          "C. 5-7",
          "D. 5÷2"
        ],
        "answer": "A",
        "knowledgePoint": "倒推后要正向检查",
        "analysis": "正向最后一步是除以2，倒推第一步要乘以2。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "倒推出起点后，为什么还要正向代回原过程？",
        "options": [
          "A. 检查倒推顺序和答案是否正确",
          "B. 让步骤变长",
          "C. 改变题目条件",
          "D. 避免写单位"
        ],
        "answer": "A",
        "knowledgePoint": "倒推后要正向检查",
        "analysis": "倒推可能顺序出错，正向代回能验证是否得到题目给定结果。"
      },
      {
        "type": "open",
        "text": "一个数先加4，再乘2，最后得到30。请用逆向思考求这个数，并正向检查。",
        "scoringPoints": [
          "倒推30÷2=15",
          "再算15-4=11",
          "正向检查11+4=15，15×2=30"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 119,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "把整数分成偶数和奇数，这两类是否覆盖全部整数？",
        "options": [
          "A. 是",
          "B. 不是",
          "C. 只能覆盖正整数",
          "D. 只能覆盖小于10的数"
        ],
        "answer": "A",
        "knowledgePoint": "分类要覆盖所有可能",
        "analysis": "每个整数不是偶数就是奇数，因此两类合起来覆盖全部整数。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "分类讨论时，同一个情况最好出现几次？",
        "options": [
          "A. 一次",
          "B. 两次",
          "C. 越多越好",
          "D. 不需要出现"
        ],
        "answer": "A",
        "knowledgePoint": "分类之间不要重复",
        "analysis": "分类要避免重复，否则可能把同一情况算多次。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "用“小于5”和“大于等于5”分类，数字5属于哪一类？",
        "options": [
          "A. 大于等于5",
          "B. 小于5",
          "C. 两类都属于",
          "D. 两类都不属于"
        ],
        "answer": "A",
        "knowledgePoint": "分类之间不要重复",
        "analysis": "5满足大于等于5，不满足小于5。边界要写清。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "分类讨论每类算完后，还需要做什么？",
        "options": [
          "A. 合并并检查结论",
          "B. 只保留第一类",
          "C. 把分类擦掉",
          "D. 改成平均数"
        ],
        "answer": "A",
        "knowledgePoint": "分别求解后合并结论",
        "analysis": "分类是过程，最后要合并各类结论来回答原题。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "把数分成“小于10”和“偶数”有什么问题？",
        "options": [
          "A. 两类可能重叠且不能覆盖全部情况",
          "B. 两类名称太短",
          "C. 偶数不能分类",
          "D. 小于10没有意义"
        ],
        "answer": "A",
        "knowledgePoint": "分类要覆盖所有可能",
        "analysis": "例如2既小于10又是偶数，会重复；11既不小于10也不是偶数，会遗漏。"
      },
      {
        "type": "open",
        "text": "请把整数按“负数、零、正数”分类，并说明这组三类为什么不漏也不重。",
        "scoringPoints": [
          "说明负数、零、正数覆盖全部整数",
          "说明一个整数不能同时属于两类",
          "举例验证边界零单独一类"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 120,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "“所有质数都是奇数”的反例是什么？",
        "options": [
          "A. 2",
          "B. 3",
          "C. 9",
          "D. 15"
        ],
        "answer": "A",
        "knowledgePoint": "反例不等于证明相反命题",
        "analysis": "2是质数，但不是奇数，能推翻原命题。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一个合格反例必须怎样？",
        "options": [
          "A. 满足原条件但不满足结论",
          "B. 不满足原条件也不满足结论",
          "C. 只是一个很大的数",
          "D. 和题目无关"
        ],
        "answer": "A",
        "knowledgePoint": "反例必须满足原条件",
        "analysis": "反例要进入命题范围，同时让结论失败。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "为什么9不能反驳“所有质数都是奇数”？",
        "options": [
          "A. 9不是质数",
          "B. 9太大",
          "C. 9是奇数",
          "D. 9不能写成分数"
        ],
        "answer": "A",
        "knowledgePoint": "反例不等于证明相反命题",
        "analysis": "9没有满足“质数”条件，因此不能作为这个命题的反例。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "找到一个反例后，能说明什么？",
        "options": [
          "A. 原来的“所有”说法不成立",
          "B. 相反说法一定成立",
          "C. 所有例子都错",
          "D. 不需要看条件"
        ],
        "answer": "A",
        "knowledgePoint": "反例不等于证明相反命题",
        "analysis": "一个反例能推翻全称命题，但不自动证明相反命题。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "命题“所有偶数都大于0”的合格反例是哪一个？",
        "options": [
          "A. -2",
          "B. 3",
          "C. 5",
          "D. 7"
        ],
        "answer": "A",
        "knowledgePoint": "反例不等于证明相反命题",
        "analysis": "-2是偶数，但不大于0，满足条件且结论失败。"
      },
      {
        "type": "open",
        "text": "请给出一个反例，推翻“所有整数都大于0”，并说明它为什么合格。",
        "scoringPoints": [
          "给出0或负整数作为反例",
          "说明它是整数",
          "说明它不大于0"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 121,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "198×20最接近下面哪个数？",
        "options": [
          "A. 4000",
          "B. 400",
          "C. 40000",
          "D. 40"
        ],
        "answer": "A",
        "knowledgePoint": "先估结果范围",
        "analysis": "198≈200，200×20=4000。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "49×21大约是多少？",
        "options": [
          "A. 1000",
          "B. 100",
          "C. 10000",
          "D. 70"
        ],
        "answer": "A",
        "knowledgePoint": "估算能发现位数错误",
        "analysis": "49≈50，21≈20，50×20=1000。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "如果49×21的答案写成102.9，最明显的问题是什么？",
        "options": [
          "A. 数量级太小",
          "B. 一定完全正确",
          "C. 只能用除法检查",
          "D. 单位太长"
        ],
        "answer": "A",
        "knowledgePoint": "估算能发现位数错误",
        "analysis": "估算结果约1000，102.9明显小了一个数量级。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "估算得到约1000后，是否还需要精确计算？",
        "options": [
          "A. 需要",
          "B. 不需要",
          "C. 只在考试外需要",
          "D. 只能口算"
        ],
        "answer": "A",
        "knowledgePoint": "估算后还要精算",
        "analysis": "估算判断方向和范围，精确答案仍要按题目要求计算。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个乘法精算结果为9876，但估算应在1000附近。最先应该怎么做？",
        "options": [
          "A. 回查位数、小数点或抄写错误",
          "B. 直接接受答案",
          "C. 把估算删掉",
          "D. 改用饼图"
        ],
        "answer": "A",
        "knowledgePoint": "估算能发现位数错误",
        "analysis": "精算结果与估算范围差太多，说明可能有位数或抄写错误。"
      },
      {
        "type": "open",
        "text": "请用估算检查198×20的结果是否接近合理范围，再说明估算和精算的分工。",
        "scoringPoints": [
          "写出198≈200",
          "写出200×20=4000",
          "说明估算看范围，精算给最终答案"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 122,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "2米+30厘米等于多少厘米？",
        "options": [
          "A. 230厘米",
          "B. 32厘米",
          "C. 2.30厘米",
          "D. 60厘米"
        ],
        "answer": "A",
        "knowledgePoint": "计算前统一单位",
        "analysis": "2米=200厘米，200厘米+30厘米=230厘米。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "6支/盒×4盒的结果单位是什么？",
        "options": [
          "A. 支",
          "B. 盒",
          "C. 支/盒",
          "D. 没有单位"
        ],
        "answer": "A",
        "knowledgePoint": "乘除时保留单位意义",
        "analysis": "每盒6支乘4盒，得到总支数，单位是支。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "题目问“多少小时”，算出90分钟后应怎样写？",
        "options": [
          "A. 换成1.5小时",
          "B. 直接写90小时",
          "C. 不写单位",
          "D. 写90盒"
        ],
        "answer": "A",
        "knowledgePoint": "答案单位要回答问题",
        "analysis": "90分钟=90÷60=1.5小时，答案要回到题目要求的单位。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "计算长度加减前，为什么要统一单位？",
        "options": [
          "A. 不同单位的数字不能直接相加减",
          "B. 统一单位会改变长度",
          "C. 单位不重要",
          "D. 只为了让数字变大"
        ],
        "answer": "A",
        "knowledgePoint": "计算前统一单位",
        "analysis": "米和厘米表示不同尺度，必须先换成同一种单位。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "学生把2米+30厘米写成32厘米，最可能错在哪里？",
        "options": [
          "A. 把米和厘米的数字直接相加",
          "B. 把30看成3",
          "C. 忘了乘以4",
          "D. 用了平均数"
        ],
        "answer": "A",
        "knowledgePoint": "乘除时保留单位意义",
        "analysis": "2米应先换成200厘米，不能直接用2+30。"
      },
      {
        "type": "open",
        "text": "请计算3米+45厘米等于多少厘米，并说明你先做了哪一步单位换算。",
        "scoringPoints": [
          "写出3米=300厘米",
          "计算300+45=345厘米",
          "说明加法前要统一单位"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 123,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "9:00到10:30相隔多久？",
        "options": [
          "A. 90分钟",
          "B. 30分钟",
          "C. 150分钟",
          "D. 45分钟"
        ],
        "answer": "A",
        "knowledgePoint": "把时间读成间隔",
        "analysis": "9:00到10:00是60分钟，再到10:30是30分钟，共90分钟。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "魔药课90分钟，草药课60分钟，合计多少分钟？",
        "options": [
          "A. 150分钟",
          "B. 30分钟",
          "C. 2.5分钟",
          "D. 90分钟"
        ],
        "answer": "A",
        "knowledgePoint": "连续活动要相加",
        "analysis": "连续活动总时长相加：90+60=150分钟。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "150分钟等于多少小时？",
        "options": [
          "A. 2.5小时",
          "B. 1.5小时",
          "C. 150小时",
          "D. 15小时"
        ],
        "answer": "A",
        "knowledgePoint": "把时间读成间隔",
        "analysis": "150÷60=2.5小时。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "10:30下课，11:15上下一节课，中间空档是多少？",
        "options": [
          "A. 45分钟",
          "B. 15分钟",
          "C. 85分钟",
          "D. 30小时"
        ],
        "answer": "A",
        "knowledgePoint": "空档时间用前后相减",
        "analysis": "10:30到11:00是30分钟，再到11:15是15分钟，共45分钟。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "若两节课之间空档算成85分钟，最先应回查什么？",
        "options": [
          "A. 开始和结束时刻是否分段计算正确",
          "B. 科目名称是否正确",
          "C. 教室是否足够大",
          "D. 是否用了平均数"
        ],
        "answer": "A",
        "knowledgePoint": "空档时间用前后相减",
        "analysis": "空档来自前一活动结束到后一活动开始，要按时间线分段检查。"
      },
      {
        "type": "open",
        "text": "上午9:15开始上课，10:45结束。请计算课程时长，并说明怎样把小时和分钟分开数。",
        "scoringPoints": [
          "写出9:15到10:15为60分钟",
          "写出10:15到10:45为30分钟",
          "合计90分钟"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 124,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "学院分为320、295、310、305，最高分是多少？",
        "options": [
          "A. 320",
          "B. 295",
          "C. 310",
          "D. 305"
        ],
        "answer": "A",
        "knowledgePoint": "读取和比较分数",
        "analysis": "比较四个数，320最大。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "320分比310分多多少？",
        "options": [
          "A. 10分",
          "B. 30分",
          "C. 630分",
          "D. 20分"
        ],
        "answer": "A",
        "knowledgePoint": "差值表示领先多少",
        "analysis": "求多多少用减法，320-310=10分。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "四个学院分数比较，最适合用什么图？",
        "options": [
          "A. 条形图",
          "B. 饼图一定更好",
          "C. 只画圆",
          "D. 不用任何图"
        ],
        "answer": "A",
        "knowledgePoint": "用条形图表达分数",
        "analysis": "学院是类别，分数是数值，用条形图便于比较高低。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "分数295、305、310、320中，最高和最低相差多少？",
        "options": [
          "A. 25分",
          "B. 15分",
          "C. 615分",
          "D. 5分"
        ],
        "answer": "A",
        "knowledgePoint": "差值表示领先多少",
        "analysis": "最高320，最低295，相差320-295=25分。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "如果要说明“第一名领先第二名多少”，应比较哪些数？",
        "options": [
          "A. 最高分和第二高分",
          "B. 最高分和最低分",
          "C. 所有分数相加",
          "D. 只看学院名字"
        ],
        "answer": "A",
        "knowledgePoint": "读取和比较分数",
        "analysis": "领先第二名要用第一名分数减第二名分数。"
      },
      {
        "type": "open",
        "text": "四个学院分数为320、295、310、305。请找出最高、最低和最高最低差，并说明适合用什么图展示。",
        "scoringPoints": [
          "指出最高320、最低295",
          "计算320-295=25",
          "说明条形图适合比较类别分数"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 125,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "药粉:清水=2:5表示什么？",
        "options": [
          "A. 药粉2份对应清水5份",
          "B. 一共只有2份",
          "C. 清水比药粉少",
          "D. 两者没有顺序"
        ],
        "answer": "A",
        "knowledgePoint": "比例表示两个量的对应关系",
        "analysis": "比例左边对应药粉，右边对应清水，表示2份对5份。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "2:5同倍放大3倍后是多少？",
        "options": [
          "A. 6:15",
          "B. 6:5",
          "C. 2:15",
          "D. 5:2"
        ],
        "answer": "A",
        "knowledgePoint": "同倍放大保持比例",
        "analysis": "保持比例不变，两边都乘3，得到6:15。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "2:5的总份数是多少？",
        "options": [
          "A. 7份",
          "B. 10份",
          "C. 3份",
          "D. 5份"
        ],
        "answer": "A",
        "knowledgePoint": "用总份数求每份量",
        "analysis": "总份数=2+5=7份。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "2:5的总量是70ml，一份是多少ml？",
        "options": [
          "A. 10ml",
          "B. 7ml",
          "C. 35ml",
          "D. 20ml"
        ],
        "answer": "A",
        "knowledgePoint": "比例表示两个量的对应关系",
        "analysis": "总份数7份，70÷7=10ml。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "配比2:5中只把药粉从2份改成6份，清水仍5份，会发生什么？",
        "options": [
          "A. 比例被破坏",
          "B. 比例仍完全相同",
          "C. 总份数不变",
          "D. 清水变成15份"
        ],
        "answer": "A",
        "knowledgePoint": "同倍放大保持比例",
        "analysis": "保持比例必须两边同倍变化，只改一边会改变比例。"
      },
      {
        "type": "open",
        "text": "魔药配比为药粉:清水=2:5，总量为140ml。请计算每份多少ml，以及两种材料各多少ml。",
        "scoringPoints": [
          "写出总份数2+5=7",
          "算出140÷7=20ml",
          "药粉40ml，清水100ml"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 126,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "记录草药高度随天数变化时，第一列最适合写什么？",
        "options": [
          "A. 天数",
          "B. 颜色",
          "C. 学生姓名",
          "D. 学院口号"
        ],
        "answer": "A",
        "knowledgePoint": "按时间记录数据",
        "analysis": "数据随天数变化，第一列应记录时间顺序。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "草药高度随时间变化，适合用什么图？",
        "options": [
          "A. 折线图",
          "B. 饼图",
          "C. 只画一个圆",
          "D. 不写图"
        ],
        "answer": "A",
        "knowledgePoint": "选择折线图看趋势",
        "analysis": "折线图适合表示数据随时间变化的趋势。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "草药从6cm长到9cm，增长了多少？",
        "options": [
          "A. 3cm",
          "B. 15cm",
          "C. 6cm",
          "D. 9cm"
        ],
        "answer": "A",
        "knowledgePoint": "用差值看增长量",
        "analysis": "增长量=后一次高度-前一次高度=9-6=3cm。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "第1天4cm、第2天6cm、第3天9cm，哪一段增长更多？",
        "options": [
          "A. 第2天到第3天",
          "B. 第1天到第2天",
          "C. 两段一样",
          "D. 无法比较"
        ],
        "answer": "A",
        "knowledgePoint": "用差值看增长量",
        "analysis": "第1到第2天增长2cm，第2到第3天增长3cm，后者更多。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "若折线图横轴天数顺序写成1、3、2，最先影响什么？",
        "options": [
          "A. 趋势读取",
          "B. 高度单位",
          "C. 平均数公式",
          "D. 概率范围"
        ],
        "answer": "A",
        "knowledgePoint": "按时间记录数据",
        "analysis": "折线图按时间顺序读变化，横轴顺序错会误导趋势。"
      },
      {
        "type": "open",
        "text": "草药第1到第4天高度为4cm、6cm、9cm、13cm。请写出每天之间的增长量，并说明折线图能看出什么趋势。",
        "scoringPoints": [
          "写出增长量2cm、3cm、4cm",
          "说明高度持续上升",
          "说明增长量也在变大"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 127,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "三场魁地奇得分分别是150、90、120，总分是多少？",
        "options": [
          "A. 360",
          "B. 120",
          "C. 270",
          "D. 330"
        ],
        "answer": "A",
        "knowledgePoint": "平均分先求总分",
        "analysis": "150+90+120=360。求平均分前先求总分。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "三场总分360分，平均每场得分是多少？",
        "options": [
          "A. 120分",
          "B. 180分",
          "C. 90分",
          "D. 360分"
        ],
        "answer": "A",
        "knowledgePoint": "平均分表示每场代表水平",
        "analysis": "平均分=总分÷场次数=360÷3=120分。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "甲队三场平均120分，乙队三场平均110分。两队平均分相差多少？",
        "options": [
          "A. 10分",
          "B. 30分",
          "C. 230分",
          "D. 不能比较"
        ],
        "answer": "A",
        "knowledgePoint": "比较队伍平均表现",
        "analysis": "两组平均分单位相同，可以直接相减：120-110=10分。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "三场得分150、90、120的平均分是120。这说明什么？",
        "options": [
          "A. 平均每场代表水平是120分",
          "B. 每场都得了120分",
          "C. 最高分是120分",
          "D. 最低分是120分"
        ],
        "answer": "A",
        "knowledgePoint": "平均分表示每场代表水平",
        "analysis": "平均数表示总体代表水平，不表示每一个原始数据都相同。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "某队四场得分为80、100、140、160。若要比较这四场总体表现，先算什么最合适？",
        "options": [
          "A. 总分和平均分",
          "B. 只看第一场",
          "C. 只看最高分",
          "D. 把场次当单位相加"
        ],
        "answer": "A",
        "knowledgePoint": "平均分表示每场代表水平",
        "analysis": "比较多场总体表现，通常先求总分，再除以场次数得到平均分。"
      },
      {
        "type": "open",
        "text": "魁地奇三场得分为90、120、150。请算出平均分，并说明平均分为什么不等于每场实际得分。",
        "scoringPoints": [
          "写出总分90+120+150=360",
          "写出平均分360÷3=120",
          "说明平均数是代表水平，不表示每场都相同"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 128,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "围绕一点转一整圈是多少度？",
        "options": [
          "A. 360°",
          "B. 180°",
          "C. 90°",
          "D. 45°"
        ],
        "answer": "A",
        "knowledgePoint": "一周角是360度",
        "analysis": "一整圈是周角，大小为360°。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一条直线上的相邻两个角组成平角，它们的和是多少？",
        "options": [
          "A. 180°",
          "B. 360°",
          "C. 90°",
          "D. 270°"
        ],
        "answer": "A",
        "knowledgePoint": "直线上的角和为180度",
        "analysis": "直线上的相邻角组成平角，和为180°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "直线上一个角是65°，相邻角是多少？",
        "options": [
          "A. 115°",
          "B. 65°",
          "C. 125°",
          "D. 245°"
        ],
        "answer": "A",
        "knowledgePoint": "未知角用总和求",
        "analysis": "相邻角和为180°，未知角=180°-65°=115°。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "围绕同一点的三个角分别为80°、120°和未知角x，x是多少？",
        "options": [
          "A. 160°",
          "B. 140°",
          "C. 100°",
          "D. 200°"
        ],
        "answer": "A",
        "knowledgePoint": "一周角是360度",
        "analysis": "围绕一点一圈共360°，x=360°-80°-120°=160°。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "天文观测图中，一个未知角算出260°，但它和已知80°角在同一直线上相邻。这个结果最先哪里不合理？",
        "options": [
          "A. 260°与80°相加超过180°",
          "B. 260°不是整数",
          "C. 80°不能出现在图中",
          "D. 所有角都必须小于60°"
        ],
        "answer": "A",
        "knowledgePoint": "直线上的角和为180度",
        "analysis": "直线上相邻角和应为180°，260°+80°不可能组成平角。"
      },
      {
        "type": "open",
        "text": "一条直线上相邻两个角，其中一个是72°。请求另一个角，并写出你用什么性质检查。",
        "scoringPoints": [
          "写出直线相邻角和为180°",
          "计算180°-72°=108°",
          "用72°+108°=180°检查"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 129,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "若1加隆=17西可，2加隆等于多少西可？",
        "options": [
          "A. 34西可",
          "B. 19西可",
          "C. 17西可",
          "D. 15西可"
        ],
        "answer": "A",
        "knowledgePoint": "兑换率说明对应关系",
        "analysis": "每1加隆换17西可，2加隆就是2×17=34西可。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "若1加隆=17西可，34西可等于多少加隆？",
        "options": [
          "A. 2加隆",
          "B. 17加隆",
          "C. 51加隆",
          "D. 34加隆"
        ],
        "answer": "A",
        "knowledgePoint": "反向兑换用除法",
        "analysis": "从西可换回加隆，用34÷17=2。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "3加隆兑换成西可，算式应写成哪一个？",
        "options": [
          "A. 3×17",
          "B. 3+17",
          "C. 17-3",
          "D. 3÷17"
        ],
        "answer": "A",
        "knowledgePoint": "反向兑换用除法",
        "analysis": "从加隆到西可，每加隆换17西可，所以用3×17。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "51西可兑换成加隆，答案单位应是什么？",
        "options": [
          "A. 加隆",
          "B. 西可",
          "C. 西可/加隆",
          "D. 没有单位"
        ],
        "answer": "A",
        "knowledgePoint": "答案要写清单位",
        "analysis": "题目要求从西可换回加隆，最终单位应写加隆。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "学生把4加隆换成21西可。若1加隆=17西可，最先应检查什么？",
        "options": [
          "A. 兑换方向和乘法是否漏算",
          "B. 21是不是偶数",
          "C. 加隆能不能写成小数",
          "D. 是否画了图"
        ],
        "answer": "A",
        "knowledgePoint": "反向兑换用除法",
        "analysis": "4加隆应是4×17=68西可，21明显太小，可能把兑换方向或运算弄错。"
      },
      {
        "type": "open",
        "text": "按1加隆=17西可，计算5加隆等于多少西可；再说明如果已知85西可，怎样换回加隆。",
        "scoringPoints": [
          "写出5×17=85西可",
          "说明反向兑换用85÷17",
          "写出85西可=5加隆并保留单位"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 130,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "地图比例尺为1cm表示50m，图上3cm表示实际多少米？",
        "options": [
          "A. 150m",
          "B. 53m",
          "C. 15m",
          "D. 300m"
        ],
        "answer": "A",
        "knowledgePoint": "比例尺连接图上距离和实际距离",
        "analysis": "每1cm代表50m，3cm代表3×50=150m。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "实际200m在“1cm表示50m”的地图上应画多少厘米？",
        "options": [
          "A. 4cm",
          "B. 250cm",
          "C. 50cm",
          "D. 2cm"
        ],
        "answer": "A",
        "knowledgePoint": "比例尺连接图上距离和实际距离",
        "analysis": "实际距离除以每厘米代表的实际距离：200÷50=4cm。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "把“1cm表示50m”写成数字比例尺前，50m应先换成多少厘米？",
        "options": [
          "A. 5000cm",
          "B. 50cm",
          "C. 500cm",
          "D. 5cm"
        ],
        "answer": "A",
        "knowledgePoint": "单位统一后再写比例",
        "analysis": "1m=100cm，所以50m=5000cm。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "比例尺1:5000表示图上1cm对应实际多少厘米？",
        "options": [
          "A. 5000cm",
          "B. 5000m",
          "C. 1m",
          "D. 50cm"
        ],
        "answer": "A",
        "knowledgePoint": "比例尺连接图上距离和实际距离",
        "analysis": "1:5000表示图上1份对应实际5000份；若图上是1cm，实际就是5000cm。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "图上距离4cm，比例尺1cm表示50m。学生写实际距离为54m，最可能错在哪里？",
        "options": [
          "A. 把乘法误做成加法",
          "B. 把厘米看成角度",
          "C. 忘了画直线",
          "D. 把4看成50"
        ],
        "answer": "A",
        "knowledgePoint": "比例尺连接图上距离和实际距离",
        "analysis": "应为4×50=200m，54m像是把4和50相加。"
      },
      {
        "type": "open",
        "text": "地图上两点相距6cm，比例尺为1cm表示50m。请算实际距离，并说明反向求图上距离时应怎么做。",
        "scoringPoints": [
          "写出6×50=300m",
          "说明反向用实际距离÷50",
          "答案带上m或cm单位"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 131,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "建模时设x表示购买盒数，x的单位是什么？",
        "options": [
          "A. 盒",
          "B. 英镑",
          "C. 厘米",
          "D. 分钟"
        ],
        "answer": "A",
        "knowledgePoint": "定义变量和单位",
        "analysis": "变量要有含义。x表示盒数，所以单位是盒。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "每盒4英镑，买x盒，总价应表示为？",
        "options": [
          "A. 4x",
          "B. 4+x",
          "C. x-4",
          "D. 4÷x"
        ],
        "answer": "A",
        "knowledgePoint": "建立关系式",
        "analysis": "总价=单价×数量=4x。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "若总价模型是4x=24，x表示盒数，那么x等于多少？",
        "options": [
          "A. 6",
          "B. 20",
          "C. 28",
          "D. 96"
        ],
        "answer": "A",
        "knowledgePoint": "解释答案含义",
        "analysis": "4x=24，两边除以4，x=6。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "解出x=6后，最完整的解释是哪一个？",
        "options": [
          "A. 购买6盒",
          "B. 答案是6英镑",
          "C. 总价是6盒",
          "D. x没有单位"
        ],
        "answer": "A",
        "knowledgePoint": "解释答案含义",
        "analysis": "x定义为盒数，所以x=6表示购买6盒。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个模型算出购买盒数x=2.5，但题目要求买整盒。此时应先检查什么？",
        "options": [
          "A. 答案是否符合情境限制",
          "B. 2.5是否比2大",
          "C. 字母是否写得漂亮",
          "D. 能否把单位删掉"
        ],
        "answer": "A",
        "knowledgePoint": "定义变量和单位",
        "analysis": "建模答案要回到情境。若必须买整盒，2.5盒不直接符合要求。"
      },
      {
        "type": "open",
        "text": "每盒羽毛笔4英镑，学生带了28英镑。设x为可买盒数，请列方程、求x，并解释答案。",
        "scoringPoints": [
          "写出4x=28",
          "解出x=7",
          "说明x表示盒数，所以可以买7盒"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 132,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "证明题中，每一步推理最好依靠什么？",
        "options": [
          "A. 已知条件或已学性质",
          "B. 猜测",
          "C. 字写得更大",
          "D. 只看答案"
        ],
        "answer": "A",
        "knowledgePoint": "证明从条件推到结论",
        "analysis": "证明要从条件出发，用定义、性质或已知结论连接到目标。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "合格反例必须满足什么？",
        "options": [
          "A. 满足条件但不满足结论",
          "B. 不满足条件也不满足结论",
          "C. 只要数字很特别",
          "D. 只要答案很短"
        ],
        "answer": "A",
        "knowledgePoint": "反例检查条件真结论假",
        "analysis": "反例要进入原命题范围，同时让结论失败。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "命题“所有质数都是奇数”的反例是哪一个？",
        "options": [
          "A. 2",
          "B. 9",
          "C. 15",
          "D. 21"
        ],
        "answer": "A",
        "knowledgePoint": "选择证明还是反例",
        "analysis": "2是质数，但2不是奇数，所以能推翻“所有质数都是奇数”。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "题目要求说明“这个说法不总是对”，最合适的方法是什么？",
        "options": [
          "A. 找一个有效反例",
          "B. 计算平均数",
          "C. 画饼图",
          "D. 把所有数字相加"
        ],
        "answer": "A",
        "knowledgePoint": "选择证明还是反例",
        "analysis": "要推翻“总是成立”的说法，找到一个满足条件但结论失败的反例即可。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "有人用9反驳“所有质数都是奇数”。这个反例为什么不合格？",
        "options": [
          "A. 9不是质数，没有满足条件",
          "B. 9是奇数",
          "C. 9太大",
          "D. 9不能写在黑板上"
        ],
        "answer": "A",
        "knowledgePoint": "反例检查条件真结论假",
        "analysis": "反例必须先满足“质数”这个条件。9不是质数，所以不能用于反驳这句话。"
      },
      {
        "type": "open",
        "text": "请用“所有质数都是奇数”为例，写出一个合格反例，并说明它为什么能推翻原命题。",
        "scoringPoints": [
          "指出反例是2",
          "说明2是质数",
          "说明2不是奇数，因此原命题不成立"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 133,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "在数轴上比较-5和-2，哪一个更大？",
        "options": [
          "A. -2",
          "B. -5",
          "C. 一样大",
          "D. 无法比较"
        ],
        "answer": "A",
        "knowledgePoint": "用数轴整理整数和负数",
        "analysis": "数轴上越靠右越大，-2在-5右边，所以-2更大。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "0.75可以写成哪个百分数？",
        "options": [
          "A. 75%",
          "B. 7.5%",
          "C. 750%",
          "D. 0.75%"
        ],
        "answer": "A",
        "knowledgePoint": "把分数、小数和百分数互相翻译",
        "analysis": "0.75表示百分之七十五，写成75%。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "3+2×5应先算哪一步？",
        "options": [
          "A. 2×5",
          "B. 3+2",
          "C. 3×5",
          "D. 先算加减都可以"
        ],
        "answer": "A",
        "knowledgePoint": "按运算顺序计算并估算检查",
        "analysis": "没有括号时，乘除先于加减，所以先算2×5。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "2.4×0.3的结果应当怎样估计？",
        "options": [
          "A. 小于2.4",
          "B. 大于24",
          "C. 一定等于7.2",
          "D. 与0.3无关"
        ],
        "answer": "A",
        "knowledgePoint": "按运算顺序计算并估算检查",
        "analysis": "0.3小于1，2.4乘以0.3后应小于2.4。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "如果学生把2.4×0.3写成7.2，最先暴露出哪类问题？",
        "options": [
          "A. 小数乘法的大小感错误",
          "B. 负数方向错误",
          "C. 角度总和错误",
          "D. 坐标顺序错误"
        ],
        "answer": "A",
        "knowledgePoint": "把分数、小数和百分数互相翻译",
        "analysis": "乘以小于1的正数，结果应变小；7.2明显不合理。"
      },
      {
        "type": "open",
        "text": "请用一个例子说明怎样用估算检查计算结果是否合理。",
        "scoringPoints": [
          "给出一个具体算式",
          "写出近似估算过程",
          "说明估算如何发现或确认答案大小"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 134,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "药粉:清水=2:5，药粉是4份时，清水应是多少份？",
        "options": [
          "A. 10份",
          "B. 7份",
          "C. 2.5份",
          "D. 20份"
        ],
        "answer": "A",
        "knowledgePoint": "区分正比例和反比例",
        "analysis": "药粉从2份变成4份，是乘2；清水也乘2，5×2=10份。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "每袋3枚，再多2枚，用x表示袋数，总数应写成？",
        "options": [
          "A. 3x+2",
          "B. 3+x+2",
          "C. 3+2x",
          "D. x÷3+2"
        ],
        "answer": "A",
        "knowledgePoint": "用字母表示数量关系",
        "analysis": "每袋3枚，x袋是3x枚，再多2枚，所以总数是3x+2。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "当x=4时，3x+2等于多少？",
        "options": [
          "A. 14",
          "B. 9",
          "C. 20",
          "D. 12"
        ],
        "answer": "A",
        "knowledgePoint": "用等式平衡解方程",
        "analysis": "把x换成4，3×4+2=14。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "解2x+3=11时，第一步最好做什么？",
        "options": [
          "A. 两边同时减3",
          "B. 只把左边减3",
          "C. 先把11除以2",
          "D. 把x改成0"
        ],
        "answer": "A",
        "knowledgePoint": "用等式平衡解方程",
        "analysis": "为保持等式平衡，消去+3时两边都要减3。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "路程固定时，速度变为原来的2倍，时间通常怎样变化？",
        "options": [
          "A. 变为原来的一半",
          "B. 也变为原来的2倍",
          "C. 保持不变",
          "D. 变为原来的4倍"
        ],
        "answer": "A",
        "knowledgePoint": "区分正比例和反比例",
        "analysis": "路程固定，速度和时间乘积固定；速度加倍，时间减半。"
      },
      {
        "type": "open",
        "text": "药粉:清水=2:5。如果药粉用6份，请求清水份数，并说明比例顺序为什么不能换。",
        "scoringPoints": [
          "写出药粉从2到6是乘3",
          "写出清水5×3=15份",
          "说明左边始终对应药粉，右边始终对应清水"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 135,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "三角形两个角分别是50°和60°，第三个角是多少？",
        "options": [
          "A. 70°",
          "B. 110°",
          "C. 80°",
          "D. 120°"
        ],
        "answer": "A",
        "knowledgePoint": "区分周长、面积和体积",
        "analysis": "三角形内角和180°，第三角=180°-50°-60°=70°。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "长方形长6厘米、宽4厘米，面积是多少？",
        "options": [
          "A. 24平方厘米",
          "B. 20厘米",
          "C. 10平方厘米",
          "D. 24厘米"
        ],
        "answer": "A",
        "knowledgePoint": "区分周长、面积和体积",
        "analysis": "面积=长×宽=6×4=24，单位是平方厘米。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "点(3,-2)表示怎样移动？",
        "options": [
          "A. 向右3格，再向下2格",
          "B. 向上3格，再向右2格",
          "C. 向左3格，再向下2格",
          "D. 向右2格，再向下3格"
        ],
        "answer": "A",
        "knowledgePoint": "用坐标和图表表示位置与变化",
        "analysis": "坐标按(x,y)读，x=3向右3格，y=-2向下2格。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "数据6、7、8、9、30中，若想描述典型水平，哪个量比平均数更不容易被30拉动？",
        "options": [
          "A. 中位数",
          "B. 最大值",
          "C. 总和",
          "D. 极差"
        ],
        "answer": "A",
        "knowledgePoint": "选择合适的数据代表值",
        "analysis": "30是极端大值，会拉动平均数；中位数更稳定。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个学生把长方形面积6×4写成24厘米，主要漏了什么检查？",
        "options": [
          "A. 面积应使用平方单位",
          "B. 乘法不能用于面积",
          "C. 6和4不能相乘",
          "D. 长方形没有宽"
        ],
        "answer": "A",
        "knowledgePoint": "区分周长、面积和体积",
        "analysis": "面积描述平面区域，单位应为平方厘米，而不是厘米。"
      },
      {
        "type": "open",
        "text": "请用一个几何或数据例子说明：为什么答案不仅要算数值，还要检查单位或代表值是否合适。",
        "scoringPoints": [
          "给出几何或数据例子",
          "说明计算过程",
          "说明单位或代表值选择的检查理由"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 136,
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "面对含百分数、表格和未知数x的综合题，第一步最稳妥的做法是什么？",
        "options": [
          "A. 圈出已知条件和要求",
          "B. 先把所有数字相加",
          "C. 直接猜x的值",
          "D. 只看最后一句"
        ],
        "answer": "A",
        "knowledgePoint": "先判断题型和已知条件",
        "analysis": "综合题先找已知、目标和限制，再决定用哪种工具。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "哪一种写法更适合交给别人检查？",
        "options": [
          "A. 设x为袋数，2x+3=11，所以x=4",
          "B. 答案是4",
          "C. 我觉得是4",
          "D. 4看起来合适"
        ],
        "answer": "A",
        "knowledgePoint": "把步骤写成可复查的过程",
        "analysis": "设未知量、列式和计算过程都写出来，别人才能复查。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "3(x+2)展开时，正确结果是什么？",
        "options": [
          "A. 3x+6",
          "B. 3x+2",
          "C. x+6",
          "D. 3x+5"
        ],
        "answer": "A",
        "knowledgePoint": "用错因分类完成讲评",
        "analysis": "3要同时乘括号里的x和2，所以3(x+2)=3x+6。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "3(x+2)=3x+2的主要错误是什么？",
        "options": [
          "A. 3没有同时乘括号里的2",
          "B. x不能和数字同在括号里",
          "C. 括号一定不能展开",
          "D. 2必须先变成0"
        ],
        "answer": "A",
        "knowledgePoint": "用错因分类完成讲评",
        "analysis": "分配律要求括号里的每一项都乘3，漏乘2会得到错误的3x+2。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "写完计算结果后，最后还应该检查什么？",
        "options": [
          "A. 数值、单位、问题目标和能否代回",
          "B. 粉笔颜色是否一致",
          "C. 数字写得是否足够大",
          "D. 是否用了最长公式"
        ],
        "answer": "A",
        "knowledgePoint": "把答案放回情境检查",
        "analysis": "综合题的最后一步是把答案放回题意，检查单位、大小、目标和代回是否成立。"
      },
      {
        "type": "open",
        "text": "请任选一道本学年内容的小题，写出“读题入口、列式、计算、回到题意检查”四步。",
        "scoringPoints": [
          "写出已知条件和目标",
          "列出合适算式或方程",
          "完成计算并把答案放回题意检查"
        ],
        "maxScore": 4
      }
    ]
  }
];

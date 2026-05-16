// physics-questionBank.js
// 霍格沃茨物理课程 - 题库（完整版）
// 教授：塞拉菲娜·穆迪
// 课程体系：英国 KS3 → GCSE → A-Level，共 70 课
// 每课6题：基础2题(difficulty:1)、理解2题(difficulty:2)、应用1题(difficulty:3)、开放1题(type:open)

export const questionBank = [
  {
    "lesson": 1,
    "title": "速度、加速度与运动图像",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "霍格沃茨特快列车在9¾站台的平均速度是30m/s，它运行1800s通过的距离是：",
        "options": ["A. 54000m", "B. 5400m", "C. 60m", "D. 540m"],
        "answer": "A",
        "knowledgePoint": "速度与距离",
        "analysis": "距离等于速度乘以时间！30m/s × 1800s = 54000m。就像游走球飞过的路径长度一样简单。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "一个麻瓜司机驾驶汽车2小时内行驶了100公里，他的平均速度是：",
        "options": ["A. 50km/h", "B. 100km/h", "C. 200km/h", "D. 20km/h"],
        "answer": "A",
        "knowledgePoint": "平均速度",
        "analysis": "平均速度就是总路程除以总时间！100公里 ÷ 2小时 = 50公里/小时。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "在位移-时间图像中，一只猫头鹰从A点飞到B点，图像是一条直线且向上倾斜，这意味着：",
        "options": ["A. 猫头鹰在减速飞行", "B. 猫头鹰匀速飞行", "C. 猫头鹰在加速飞行", "D. 猫头鹰静止不动"],
        "answer": "B",
        "knowledgePoint": "s-t图像",
        "analysis": "s-t图像中直线表示匀速运动——斜率恒定，速度不变。向上倾斜说明位移在增加。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "骑士公共汽车的加速度是8m/s²，表示的含义是：",
        "options": ["A. 每秒行驶8米", "B. 每秒速度增加8m/s", "C. 每秒位移增加8米", "D. 每秒减速度8m/s²"],
        "answer": "B",
        "knowledgePoint": "加速度",
        "analysis": "8m/s²意味着这辆疯狂的巴士每秒速度增加8米/秒。加速度是速度的变化率。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个魔法学徒使用悬浮术，将一个物体从静止开始匀加速提升，2秒后速度达到6m/s，则加速度和3秒后的速度分别是：",
        "options": ["A. 3m/s², 9m/s", "B. 12m/s², 18m/s", "C. 3m/s², 12m/s", "D. 6m/s², 9m/s"],
        "answer": "A",
        "knowledgePoint": "加速度计算",
        "analysis": "a = (6-0)/2 = 3m/s²。v = 0 + 3×3 = 9m/s。就像施展变形术需要逐步进行。"
      },
      {
        "type": "open",
        "text": "小巫师哈利准备骑飞天扫帚从霍格莫德村飞往霍格沃茨城堡。已知他以5m/s的速度匀速飞行了100秒，然后又以2m/s²的加速度加速飞行了5秒。请画出他整个过程的v-t图像，并求出他飞行的总位移。",
        "scoringPoints": ["正确识别匀速阶段和加速阶段", "正确计算匀速阶段位移：s₁ = 5×100 = 500m", "正确计算加速阶段末速度：v = 5 + 2×5 = 15m/s", "正确计算加速阶段位移：s₂ = (5+15)/2 × 5 = 50m", "正确计算总位移：s = 500 + 50 = 550m", "v-t图像形状正确"],
        "maxScore": 6
      }
    ]
  },
  {
    "lesson": 2,
    "title": "牛顿第一定律：惯性",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "根据牛顿第一定律，物体在不受外力作用时会：",
        "options": ["A. 立即停止", "B. 保持静止或匀速直线运动", "C. 加速运动", "D. 做曲线运动"],
        "answer": "B",
        "knowledgePoint": "惯性定律",
        "analysis": "物体具有保持原有运动状态的性质！这就是惯性，就像你坐在扫帚上不想下来一样。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "下列哪个物体的惯性最大？",
        "options": ["A. 羽毛", "B. 游走球", "C. 霍格沃茨特快列车", "D. 光轮2000"],
        "answer": "C",
        "knowledgePoint": "惯性与质量",
        "analysis": "惯性与质量成正比！特快列车质量最大，惯性也最大，就像让它停下来需要更大的力。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "当魁地奇球员突然刹车时，身体会向前倾，这是因为：",
        "options": ["A. 受到向前的力", "B. 身体的惯性", "C. 扫帚的推力", "D. 空气阻力"],
        "answer": "B",
        "knowledgePoint": "惯性现象",
        "analysis": "身体保持原来的运动状态！扫帚停了，但身体还想继续前进，所以会前倾。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "在没有空气阻力的情况下，一颗子弹和一张纸同时从高处落下：",
        "options": ["A. 子弹先落地", "B. 纸先落地", "C. 同时落地", "D. 无法确定"],
        "answer": "C",
        "knowledgePoint": "自由落体",
        "analysis": "重力加速度相同！没有空气阻力时，所有物体下落速度相同。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一辆马车在光滑的冰面上匀速行驶，如果马突然停止用力，马车将：",
        "options": ["A. 立即停止", "B. 继续匀速行驶", "C. 减速行驶", "D. 加速行驶"],
        "answer": "B",
        "knowledgePoint": "牛顿第一定律应用",
        "analysis": "光滑冰面摩擦力为零！没有外力作用，马车将保持匀速直线运动。"
      },
      {
        "type": "open",
        "text": "解释为什么魔法师在使用漂浮咒时，物体从静止到运动需要一个过程？结合惯性概念说明。",
",
        "scoringPoints": ["惯性定义：物体保持原有状态的性质", "静止物体具有保持静止的惯性", "需要外力克服惯性", "漂浮咒提供的力需要时间改变物体状态", "类比麻瓜世界中的推桌子现象"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 3,
    "title": "牛顿第二定律：F=ma",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "牛顿第二定律的数学表达式是：",
        "options": ["A. F = mv", "B. F = ma", "C. F = m/a", "D. F = a/m"],
        "answer": "B",
        "knowledgePoint": "牛顿第二定律公式",
        "analysis": "力等于质量乘以加速度！记住这个公式，就像记住咒语一样重要。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "如果作用在物体上的力加倍，质量不变，加速度将：",
        "options": ["A. 不变", "B. 加倍", "C. 减半", "D. 变为四倍"],
        "answer": "B",
        "knowledgePoint": "力与加速度关系",
        "analysis": "加速度与力成正比！力越大，加速度越大，就像用更大的力气推游走球。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "用相同的力分别推动一辆空马车和一辆满载的马车，哪辆加速度更大？",
        "options": ["A. 空马车", "B. 满载马车", "C. 一样大", "D. 无法确定"],
        "answer": "A",
        "knowledgePoint": "质量与加速度关系",
        "analysis": "加速度与质量成反比！质量越小，加速度越大。空马车更容易推动。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一个2kg的物体受到10N的力作用，其加速度是：",
        "options": ["A. 20m/s²", "B. 0.2m/s²", "C. 5m/s²", "D. 12m/s²"],
        "answer": "C",
        "knowledgePoint": "加速度计算",
        "analysis": "a = F/m = 10N / 2kg = 5m/s²。就这么简单！"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "哈利骑着光轮2000加速飞行，质量为50kg的哈利和3kg的扫帚一起受到106N的推力，加速度是：",
        "options": ["A. 2m/s²", "B. 1m/s²", "C. 0.5m/s²", "D. 4m/s²"],
        "answer": "A",
        "knowledgePoint": "系统质量",
        "analysis": "总质量m = 50 + 3 = 53kg，a = F/m = 106/53 = 2m/s²。要考虑整个系统的质量！"
      },
      {
        "type": "open",
        "text": "设计一个实验验证牛顿第二定律，说明实验装置、测量方法和数据处理过程。",
        "scoringPoints": ["实验装置：小车、滑轮、砝码、打点计时器", "控制变量法：保持质量不变改变力，保持力不变改变质量", "测量加速度的方法", "数据记录表格", "a-F图像和a-1/m图像分析"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 4,
    "title": "牛顿第三定律：作用力与反作用力",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "牛顿第三定律说明：",
        "options": ["A. 作用力大于反作用力", "B. 作用力小于反作用力", "C. 作用力等于反作用力", "D. 作用力和反作用力无关"],
        "answer": "C",
        "knowledgePoint": "作用力与反作用力",
        "analysis": "作用力等于反作用力！大小相等、方向相反、作用在不同物体上。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "当你推墙时，墙对你的反作用力：",
        "options": ["A. 不存在", "B. 比你推墙的力小", "C. 比你推墙的力大", "D. 与你推墙的力大小相等"],
        "answer": "D",
        "knowledgePoint": "第三定律应用",
        "analysis": "力的作用是相互的！你推墙的同时，墙也在推你。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "火箭能升空是因为：",
        "options": ["A. 火箭克服了重力", "B. 火箭喷出气体，气体对火箭有反作用力", "C. 火箭变轻了", "D. 魔法的作用"],
        "answer": "B",
        "knowledgePoint": "反冲运动",
        "analysis": "火箭向下喷出气体，气体给火箭向上的反作用力！就像麻瓜的火箭一样工作。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "下列哪对力是作用力与反作用力？",
        "options": ["A. 书的重力和桌子对书的支持力", "B. 人推箱子的力和箱子受到的摩擦力", "C. 地球对月亮的引力和月亮对地球的引力", "D. 以上都不是"],
        "answer": "C",
        "knowledgePoint": "区分平衡力与反作用力",
        "analysis": "作用力与反作用力作用在不同物体上！地球和月亮之间的引力是相互的。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "两个滑冰运动员面对面站立，甲推乙一下，两人会：",
        "options": ["A. 甲不动，乙后退", "B. 乙不动，甲后退", "C. 两人都后退", "D. 两人都不动"],
        "answer": "C",
        "knowledgePoint": "相互作用",
        "analysis": "甲推乙，乙也推甲！两人受到大小相等的反作用力，都会后退。"
      },
      {
        "type": "open",
        "text": "解释为什么魁地奇球员踢游走球时，脚会感到疼痛？结合牛顿第三定律说明。",
        "scoringPoints": ["球员对球施加作用力", "球对脚产生反作用力", "力的作用是相互的", "疼痛来自反作用力", "类比麻瓜踢足球的体验"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 5,
    "title": "摩擦力",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "摩擦力的方向总是：",
        "options": ["A. 与物体运动方向相同", "B. 与物体运动方向相反", "C. 与相对运动趋势相反", "D. 竖直向下"],
        "answer": "C",
        "knowledgePoint": "摩擦力方向",
        "analysis": "摩擦力阻碍相对运动！方向与相对运动或相对运动趋势相反。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "下列哪种情况摩擦力最大？",
        "options": ["A. 冰面上滑行", "B. 草地上跑步", "C. 水泥地上拖箱子", "D. 光滑玻璃上滑动"],
        "answer": "C",
        "knowledgePoint": "摩擦力大小",
        "analysis": "摩擦力与接触面粗糙程度有关！水泥地最粗糙，摩擦力最大。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "增大摩擦力的方法是：",
        "options": ["A. 减小压力", "B. 使接触面更光滑", "C. 增大压力或使接触面更粗糙", "D. 减小接触面积"],
        "answer": "C",
        "knowledgePoint": "改变摩擦力",
        "analysis": "摩擦力与压力和粗糙程度成正比！增大压力或粗糙程度都能增大摩擦力。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "静止在斜面上的物体受到的摩擦力是：",
        "options": ["A. 滑动摩擦力", "B. 静摩擦力", "C. 滚动摩擦力", "D. 没有摩擦力"],
        "answer": "B",
        "knowledgePoint": "静摩擦力",
        "analysis": "物体静止但有下滑趋势！静摩擦力阻碍相对运动趋势。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个50kg的箱子放在水平地面上，摩擦系数为0.3，要使箱子匀速移动需要的力是：",
        "options": ["A. 15N", "B. 150N", "C. 500N", "D. 30N"],
        "answer": "B",
        "knowledgePoint": "摩擦力计算",
        "analysis": "f = μN = 0.3 × 50×10 = 150N。需要150N的力来克服摩擦力。"
      },
      {
        "type": "open",
        "text": "分析魁地奇比赛中，球员如何利用摩擦力来控制飞天扫帚？摩擦力在飞行中有什么作用？",
        "scoringPoints": ["脚与扫帚的摩擦力提供操控力", "空气阻力也是一种摩擦", "摩擦力帮助改变方向", "光滑的扫帚表面减小空气阻力", "对比麻瓜骑自行车的操控"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 6,
    "title": "功和能",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "功的计算公式是：",
        "options": ["A. W = Fs", "B. W = Ft", "C. W = mv", "D. W = ma"],
        "answer": "A",
        "knowledgePoint": "功的公式",
        "analysis": "功等于力乘以距离！W = Fs，就像把行李搬上楼梯需要做功。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "下列哪种情况做了功？",
        "options": ["A. 提着水桶站着不动", "B. 推着墙但墙没动", "C. 马拉车前进", "D. 抱着书在水平地面行走"],
        "answer": "C",
        "knowledgePoint": "做功条件",
        "analysis": "必须有力且物体在力的方向上移动！马拉车时力和位移都有，做了功。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "动能的计算公式是：",
        "options": ["A. Ek = mv", "B. Ek = ½mv²", "C. Ek = mgh", "D. Ek = Ft"],
        "answer": "B",
        "knowledgePoint": "动能公式",
        "analysis": "动能等于二分之一质量乘以速度的平方！速度对动能影响更大。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一个质量为2kg的物体以10m/s的速度运动，其动能是：",
        "options": ["A. 20J", "B. 100J", "C. 200J", "D. 50J"],
        "answer": "B",
        "knowledgePoint": "动能计算",
        "analysis": "Ek = ½ × 2 × 10² = 100J。记住公式就能算对！"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "游走球质量为1kg，以20m/s的速度飞向球员，如果球员用100N的力使其在0.1秒内停下，球员做了多少功？",
        "options": ["A. 10J", "B. 200J", "C. 100J", "D. 50J"],
        "answer": "B",
        "knowledgePoint": "动能定理",
        "analysis": "动能变化等于合外力做的功！初动能=½×1×20²=200J，末动能=0，所以做功200J。"
      },
      {
        "type": "open",
        "text": "比较光轮2000和火弩箭在相同高度飞行时的重力势能，说明为什么火弩箭更快。",
        "scoringPoints": ["重力势能公式Ep=mgh", "质量对势能的影响", "动能与势能的转化", "空气阻力的影响", "扫帚设计对能量损耗的影响"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 7,
    "title": "能量守恒",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "能量守恒定律说明：",
        "options": ["A. 能量可以凭空产生", "B. 能量可以凭空消失", "C. 能量只能从一种形式转化为另一种形式", "D. 能量总量会减少"],
        "answer": "C",
        "knowledgePoint": "能量守恒",
        "analysis": "能量既不会创生也不会消失！只能转化或转移，总量保持不变。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "自由下落的物体，重力势能转化为：",
        "options": ["A. 热能", "B. 动能", "C. 光能", "D. 声能"],
        "answer": "B",
        "knowledgePoint": "势能转化",
        "analysis": "物体下落时高度降低，速度增加！重力势能转化为动能。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "单摆摆动过程中，能量转化正确的是：",
        "options": ["A. 动能→势能→动能", "B. 势能→动能→势能", "C. 只有动能", "D. 只有势能"],
        "answer": "B",
        "knowledgePoint": "机械能转化",
        "analysis": "最高点势能最大，最低点动能最大！势能和动能相互转化。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "下列哪种能量转化是错误的？",
        "options": ["A. 电能→光能", "B. 化学能→机械能", "C. 动能→电能", "D. 热能→凭空消失"],
        "answer": "D",
        "knowledgePoint": "能量转化",
        "analysis": "热能不会凭空消失！它会转移到其他物体或转化为其他形式。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个小球从2m高处自由落下，落地时速度约为：",
        "options": ["A. 2m/s", "B. 6m/s", "C. 10m/s", "D. 4m/s"],
        "answer": "B",
        "knowledgePoint": "能量守恒应用",
        "analysis": "mgh = ½mv² → v = √(2gh) = √(40) ≈ 6m/s。忽略空气阻力时机械能守恒。"
      },
      {
        "type": "open",
        "text": "分析霍格沃茨城堡中的壁炉火焰，说明能量是如何转化的？涉及哪些能量形式？",
        "scoringPoints": ["木材的化学能", "燃烧转化为热能和光能", "热传递到房间", "能量守恒定律的体现", "实际中的能量损耗"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 8,
    "title": "功率",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "功率的物理意义是：",
        "options": ["A. 做功的多少", "B. 做功的快慢", "C. 能量的大小", "D. 力的大小"],
        "answer": "B",
        "knowledgePoint": "功率定义",
        "analysis": "功率表示做功的快慢！就像比较两个巫师谁能更快搬完一堆书。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "功率的单位是：",
        "options": ["A. 焦耳(J)", "B. 瓦特(W)", "C. 牛顿(N)", "D. 帕斯卡(Pa)"],
        "answer": "B",
        "knowledgePoint": "功率单位",
        "analysis": "功率单位是瓦特！1瓦特等于1焦耳每秒。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "功率的计算公式是：",
        "options": ["A. P = W/t", "B. P = Fs", "C. P = mv", "D. P = mgh"],
        "answer": "A",
        "knowledgePoint": "功率公式",
        "analysis": "功率等于功除以时间！P = W/t，也可以用P = Fv。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "甲用10秒做了100J的功，乙用5秒做了60J的功，谁的功率大？",
        "options": ["A. 甲", "B. 乙", "C. 一样大", "D. 无法比较"],
        "answer": "A",
        "knowledgePoint": "功率计算",
        "analysis": "P甲 = 100/10 = 10W，P乙 = 60/5 = 12W。乙的功率更大！"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一台功率为500W的魔法咖啡机，3分钟能做多少功？",
        "options": ["A. 500J", "B. 1500J", "C. 90000J", "D. 3000J"],
        "answer": "C",
        "knowledgePoint": "功的计算",
        "analysis": "W = Pt = 500W × 180s = 90000J。注意单位换算！"
      },
      {
        "type": "open",
        "text": "比较火弩箭和光轮2000的功率差异，说明为什么火弩箭是更快的扫帚？",
        "scoringPoints": ["功率与速度的关系", "扫帚的推进力", "能量转化效率", "空气阻力的影响", "设计差异"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 9,
    "title": "动量与冲量",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "动量的计算公式是：",
        "options": ["A. p = mv", "B. p = ma", "C. p = Ft", "D. p = W/s"],
        "answer": "A",
        "knowledgePoint": "动量公式",
        "analysis": "动量等于质量乘以速度！p = mv，是描述物体运动状态的量。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "冲量的物理意义是：",
        "options": ["A. 力的大小", "B. 力对时间的累积效应", "C. 能量的变化", "D. 速度的变化"],
        "answer": "B",
        "knowledgePoint": "冲量定义",
        "analysis": "冲量是力在时间上的积累！I = Ft，会引起动量变化。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "动量定理说明：",
        "options": ["A. 冲量等于动量", "B. 冲量等于动量变化", "C. 力等于动量", "D. 力等于动量变化"],
        "answer": "B",
        "knowledgePoint": "动量定理",
        "analysis": "合外力的冲量等于动量的变化！Ft = Δp = mv₂ - mv₁。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一个质量为2kg的物体，速度从3m/s增加到7m/s，动量变化是：",
        "options": ["A. 8kg·m/s", "B. 14kg·m/s", "C. 6kg·m/s", "D. 20kg·m/s"],
        "answer": "A",
        "knowledgePoint": "动量变化",
        "analysis": "Δp = m(v₂ - v₁) = 2×(7-3) = 8kg·m/s。记住公式很简单！"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "游走球质量为0.5kg，以10m/s的速度撞击球员后以5m/s反弹，碰撞过程的冲量是：",
        "options": ["A. 2.5N·s", "B. 5N·s", "C. 7.5N·s", "D. 15N·s"],
        "answer": "C",
        "knowledgePoint": "冲量计算",
        "analysis": "Δp = 0.5×(-5) - 0.5×10 = -7.5kg·m/s，冲量大小为7.5N·s。注意速度方向！"
      },
      {
        "type": "open",
        "text": "解释为什么魁地奇守门员需要穿防护装备？结合动量定理说明缓冲的作用。",
        "scoringPoints": ["动量定理Ft=Δp", "防护装备增加作用时间", "减小冲击力", "受伤风险降低", "实际案例分析"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 10,
    "title": "圆周运动",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "匀速圆周运动的特点是：",
        "options": ["A. 速度大小不变，方向不变", "B. 速度大小不变，方向改变", "C. 速度大小改变，方向不变", "D. 速度大小和方向都改变"],
        "answer": "B",
        "knowledgePoint": "匀速圆周运动",
        "analysis": "速度大小不变但方向不断改变！因为有向心加速度。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "向心力的方向是：",
        "options": ["A. 沿切线方向", "B. 背离圆心", "C. 指向圆心", "D. 竖直向下"],
        "answer": "C",
        "knowledgePoint": "向心力方向",
        "analysis": "向心力指向圆心！使物体做圆周运动。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "向心力的计算公式是：",
        "options": ["A. F = mv/r", "B. F = mv²/r", "C. F = mr²", "D. F = m/r"],
        "answer": "B",
        "knowledgePoint": "向心力公式",
        "analysis": "向心力F = mv²/r！与速度平方成正比，与半径成反比。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "当物体做圆周运动的速度加倍时，所需向心力变为原来的：",
        "options": ["A. 2倍", "B. 4倍", "C. ½倍", "D. ¼倍"],
        "answer": "B",
        "knowledgePoint": "速度与向心力",
        "analysis": "F与v²成正比！速度加倍，向心力变为4倍。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "哈利骑着扫帚以10m/s的速度做半径为5m的圆周运动，所需向心力与体重的比值是：",
        "options": ["A. 1", "B. 2", "C. 0.5", "D. 4"],
        "answer": "B",
        "knowledgePoint": "向心力应用",
        "analysis": "F = mv²/r = m×100/5 = 20m，体重G = mg ≈ 10m，所以F/G = 2。需要2倍体重的向心力！"
      },
      {
        "type": "open",
        "text": "分析魁地奇比赛中球员做急转弯时的受力情况，说明为什么需要倾斜身体？",
        "scoringPoints": ["圆周运动需要向心力", "摩擦力提供向心力", "倾斜身体的力学原理", "防止滑倒的措施", "实际体验"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 11,
    "title": "万有引力",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "万有引力定律的发现者是：",
        "options": ["A. 爱因斯坦", "B. 牛顿", "C. 伽利略", "D. 麦克斯韦"],
        "answer": "B",
        "knowledgePoint": "万有引力发现",
        "analysis": "牛顿发现了万有引力！据说他是被苹果砸中后想到的。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "万有引力的大小与距离的关系是：",
        "options": ["A. 成正比", "B. 成反比", "C. 与距离平方成正比", "D. 与距离平方成反比"],
        "answer": "D",
        "knowledgePoint": "万有引力定律",
        "analysis": "F与距离平方成反比！距离越远，引力越小。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "地球同步卫星的特点是：",
        "options": ["A. 速度与地球自转相同", "B. 周期与地球自转相同", "C. 距离地面很近", "D. 不受重力"],
        "answer": "B",
        "knowledgePoint": "同步卫星",
        "analysis": "同步卫星周期与地球自转周期相同！看起来好像静止在天空中。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "如果地球质量加倍，月球受到的引力将：",
        "options": ["A. 不变", "B. 加倍", "C. 变为4倍", "D. 减半"],
        "answer": "B",
        "knowledgePoint": "质量与引力",
        "analysis": "引力与质量成正比！地球质量加倍，引力也加倍。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "两个物体距离变为原来的3倍，它们之间的引力变为原来的：",
        "options": ["A. 3倍", "B. 9倍", "C. 1/3", "D. 1/9"],
        "answer": "D",
        "knowledgePoint": "距离与引力",
        "analysis": "引力与距离平方成反比！距离变为3倍，引力变为1/9。"
      },
      {
        "type": "open",
        "text": "解释为什么月球绕地球旋转而不会飞走？说明万有引力在其中的作用。",
        "scoringPoints": ["万有引力提供向心力", "月球的速度与引力平衡", "轨道稳定的条件", "类比用绳子拴着石头旋转", "实际数据说明"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 12,
    "title": "机械波基础",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "波的传播需要：",
        "options": ["A. 只需要能量", "B. 只需要介质", "C. 介质和能量", "D. 什么都不需要"],
        "answer": "C",
        "knowledgePoint": "波的传播",
        "analysis": "波需要介质来传播！比如声波需要空气，水波需要水。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "横波和纵波的区别是：",
        "options": ["A. 传播速度不同", "B. 振动方向与传播方向的关系不同", "C. 波长不同", "D. 频率不同"],
        "answer": "B",
        "knowledgePoint": "横波与纵波",
        "analysis": "横波振动方向垂直于传播方向，纵波振动方向平行于传播方向！"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "波速、波长和频率的关系是：",
        "options": ["A. v = λf", "B. v = λ/f", "C. v = f/λ", "D. v = λ + f"],
        "answer": "A",
        "knowledgePoint": "波的基本公式",
        "analysis": "波速等于波长乘以频率！v = λf，记住这个公式。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "声波在空气中的传播速度约为：",
        "options": ["A. 340m/s", "B. 3×10⁸m/s", "C. 100m/s", "D. 1000m/s"],
        "answer": "A",
        "knowledgePoint": "声速",
        "analysis": "声波在空气中约340m/s！比光速慢得多。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一列频率为500Hz的声波，波长为0.68m，其波速是：",
        "options": ["A. 340m/s", "B. 500m/s", "C. 1000m/s", "D. 170m/s"],
        "answer": "A",
        "knowledgePoint": "波速计算",
        "analysis": "v = λf = 0.68 × 500 = 340m/s。正好是声速！"
      },
      {
        "type": "open",
        "text": "分析霍格沃茨城堡中的钟声是如何传播的？解释声波的特性。",
        "scoringPoints": ["钟声产生振动", "振动在空气中传播", "纵波的特点", "声波的反射和折射", "人耳如何感知声音"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 13,
    "title": "声音的特性",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "声音的音调由什么决定？",
        "options": ["A. 振幅", "B. 频率", "C. 波长", "D. 速度"],
        "answer": "B",
        "knowledgePoint": "音调",
        "analysis": "音调由频率决定！频率越高，音调越高，就像女高音比男低音频率高。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "声音的响度由什么决定？",
        "options": ["A. 频率", "B. 振幅", "C. 波长", "D. 速度"],
        "answer": "B",
        "knowledgePoint": "响度",
        "analysis": "响度由振幅决定！振幅越大，声音越响亮。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "下列哪种声音频率最高？",
        "options": ["A. 鼓声", "B. 钢琴高音", "C. 男低音歌唱", "D. 雷声"],
        "answer": "B",
        "knowledgePoint": "频率比较",
        "analysis": "钢琴高音频率最高！鼓声和雷声频率较低。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "人耳能听到的声音频率范围是：",
        "options": ["A. 10Hz-1000Hz", "B. 20Hz-20000Hz", "C. 1Hz-100000Hz", "D. 0Hz-无限"],
        "answer": "B",
        "knowledgePoint": "听觉范围",
        "analysis": "人耳能听到20Hz到20kHz的声音！低于20Hz是次声波，高于20kHz是超声波。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "两个声音的频率分别为256Hz和512Hz，它们的音调关系是：",
        "options": ["A. 相同", "B. 后者是前者的2倍", "C. 后者是前者的4倍", "D. 后者是前者的½"],
        "answer": "B",
        "knowledgePoint": "频率与音调",
        "analysis": "音调与频率成正比！512Hz是256Hz的2倍，音调高一个八度。"
      },
      {
        "type": "open",
        "text": "解释为什么在霍格沃茨的大礼堂里说话会有回声？如何减少回声？",
        "scoringPoints": ["回声产生的原理", "声波的反射", "混响时间", "吸音材料的作用", "实际应用"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 14,
    "title": "光的反射",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "光的反射定律说明：",
        "options": ["A. 入射角大于反射角", "B. 入射角小于反射角", "C. 入射角等于反射角", "D. 没有规律"],
        "answer": "C",
        "knowledgePoint": "反射定律",
        "analysis": "入射角等于反射角！这是光反射的基本规律。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "平面镜成像的特点是：",
        "options": ["A. 实像，放大", "B. 虚像，等大", "C. 实像，缩小", "D. 虚像，放大"],
        "answer": "B",
        "knowledgePoint": "平面镜成像",
        "analysis": "平面镜成虚像，与物体等大！像与物关于镜面对称。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "当光线垂直入射到镜面时，反射角是：",
        "options": ["A. 90°", "B. 45°", "C. 0°", "D. 180°"],
        "answer": "C",
        "knowledgePoint": "垂直入射",
        "analysis": "垂直入射时光线沿原路返回！反射角为0度。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "凸面镜的作用是：",
        "options": ["A. 会聚光线", "B. 发散光线", "C. 反射光线不变", "D. 吸收光线"],
        "answer": "B",
        "knowledgePoint": "凸面镜",
        "analysis": "凸面镜发散光线！可以扩大视野，常用于后视镜。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一束光线以30°入射角射到平面镜上，反射光线与入射光线的夹角是：",
        "options": ["A. 30°", "B. 60°", "C. 90°", "D. 120°"],
        "answer": "B",
        "knowledgePoint": "反射角计算",
        "analysis": "入射角30°，反射角也是30°，所以夹角是60°！"
      },
      {
        "type": "open",
        "text": "分析厄里斯魔镜的成像原理，为什么它能显示人心中最深切的渴望？",
        "scoringPoints": ["镜面成像的基本原理", "魔镜的魔法特性", "心理投射的概念", "与普通镜子的区别", "象征意义"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 15,
    "title": "光的折射",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "光从空气进入水中时，传播速度会：",
        "options": ["A. 变快", "B. 变慢", "C. 不变", "D. 变为零"],
        "answer": "B",
        "knowledgePoint": "光速与介质",
        "analysis": "光在介质中的速度比在真空中慢！水中光速约为真空中的3/4。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "光的折射定律也称为：",
        "options": ["A. 牛顿定律", "B. 斯涅尔定律", "C. 安培定律", "D. 法拉第定律"],
        "answer": "B",
        "knowledgePoint": "折射定律",
        "analysis": "斯涅尔定律描述光的折射！n₁sinθ₁ = n₂sinθ₂。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "当光从光密介质进入光疏介质时：",
        "options": ["A. 折射角小于入射角", "B. 折射角大于入射角", "C. 不发生折射", "D. 光线返回"],
        "answer": "B",
        "knowledgePoint": "光密与光疏",
        "analysis": "光从光密到光疏介质时，折射角大于入射角！比如从水到空气。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "全反射发生的条件是：",
        "options": ["A. 光从光疏到光密介质", "B. 入射角小于临界角", "C. 光从光密到光疏介质且入射角大于临界角", "D. 任何情况都能发生"],
        "answer": "C",
        "knowledgePoint": "全反射",
        "analysis": "全反射需要两个条件：光密到光疏，入射角大于临界角！"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "光从水(n=1.33)进入空气(n=1)，入射角为45°，折射角约为：",
        "options": ["A. 32°", "B. 45°", "C. 62°", "D. 90°"],
        "answer": "C",
        "knowledgePoint": "折射角计算",
        "analysis": "1.33×sin45° = 1×sinθ₂ → sinθ₂ ≈ 0.94 → θ₂ ≈ 62°。"
      },
      {
        "type": "open",
        "text": "解释为什么水中的筷子看起来是弯曲的？结合折射原理说明。",
        "scoringPoints": ["光线从水到空气发生折射", "折射角大于入射角", "人眼逆着折射光线看", "视觉错觉产生", "实际实验验证"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 16,
    "title": "透镜",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "凸透镜对光线的作用是：",
        "options": ["A. 发散", "B. 会聚", "C. 反射", "D. 吸收"],
        "answer": "B",
        "knowledgePoint": "凸透镜",
        "analysis": "凸透镜会聚光线！中间厚边缘薄的透镜。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "凹透镜对光线的作用是：",
        "options": ["A. 会聚", "B. 发散", "C. 反射", "D. 吸收"],
        "answer": "B",
        "knowledgePoint": "凹透镜",
        "analysis": "凹透镜发散光线！中间薄边缘厚的透镜。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "凸透镜成像时，当物体在2倍焦距外，像的性质是：",
        "options": ["A. 倒立放大实像", "B. 倒立缩小实像", "C. 正立放大虚像", "D. 正立缩小虚像"],
        "answer": "B",
        "knowledgePoint": "凸透镜成像",
        "analysis": "物体在2f外，成倒立缩小实像！照相机就是利用这个原理。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "放大镜利用的是凸透镜的哪种成像情况？",
        "options": ["A. 物体在2f外", "B. 物体在f和2f之间", "C. 物体在f内", "D. 物体在2f处"],
        "answer": "C",
        "knowledgePoint": "放大镜原理",
        "analysis": "物体在焦点内成正立放大虚像！这就是放大镜的原理。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个焦距为10cm的凸透镜，物体放在15cm处，像距是：",
        "options": ["A. 10cm", "B. 15cm", "C. 30cm", "D. 5cm"],
        "answer": "C",
        "knowledgePoint": "透镜公式",
        "analysis": "1/f = 1/u + 1/v → 1/10 = 1/15 + 1/v → 1/v = 1/30 → v = 30cm。"
      },
      {
        "type": "open",
        "text": "分析望远镜的工作原理，说明物镜和目镜的作用。",
        "scoringPoints": ["物镜会聚光线成实像", "目镜放大这个像", "视角放大的原理", "开普勒望远镜与伽利略望远镜的区别", "实际应用"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 17,
    "title": "静电现象",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "摩擦起电的原理是：",
        "options": ["A. 创造电荷", "B. 电荷转移", "C. 电荷消失", "D. 改变电荷性质"],
        "answer": "B",
        "knowledgePoint": "摩擦起电",
        "analysis": "摩擦起电是电荷转移！不是创造电荷。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "同种电荷相互：",
        "options": ["A. 吸引", "B. 排斥", "C. 无作用", "D. 先吸引后排斥"],
        "answer": "B",
        "knowledgePoint": "电荷相互作用",
        "analysis": "同种电荷相互排斥！异种电荷相互吸引。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "导体和绝缘体的区别是：",
        "options": ["A. 导体有电荷，绝缘体没有", "B. 导体能导电，绝缘体不能", "C. 导体质量大，绝缘体质量小", "D. 导体温度高，绝缘体温度低"],
        "answer": "B",
        "knowledgePoint": "导体与绝缘体",
        "analysis": "导体能导电，绝缘体不能！导体中有自由电荷。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "验电器的工作原理是：",
        "options": ["A. 摩擦起电", "B. 同种电荷排斥", "C. 异种电荷吸引", "D. 静电感应"],
        "answer": "B",
        "knowledgePoint": "验电器",
        "analysis": "验电器利用同种电荷排斥！箔片带上同种电荷后张开。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "两个点电荷之间的库仑力与距离的关系是：",
        "options": ["A. 成正比", "B. 成反比", "C. 与距离平方成正比", "D. 与距离平方成反比"],
        "answer": "D",
        "knowledgePoint": "库仑定律",
        "analysis": "库仑力与距离平方成反比！和万有引力类似。"
      },
      {
        "type": "open",
        "text": "解释为什么冬天脱毛衣时会有火花和噼啪声？结合静电原理说明。",
        "scoringPoints": ["摩擦起电产生静电", "电荷积累", "放电现象", "火花和声音的产生", "安全注意事项"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 18,
    "title": "电流与电路",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "电流的定义是：",
        "options": ["A. 电荷的多少", "B. 电荷的移动速度", "C. 单位时间内通过导体横截面的电荷量", "D. 电压的大小"],
        "answer": "C",
        "knowledgePoint": "电流定义",
        "analysis": "电流是单位时间通过的电荷量！I = Q/t。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "电流的单位是：",
        "options": ["A. 伏特(V)", "B. 安培(A)", "C. 欧姆(Ω)", "D. 瓦特(W)"],
        "answer": "B",
        "knowledgePoint": "电流单位",
        "analysis": "电流单位是安培！纪念物理学家安培。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "欧姆定律的表达式是：",
        "options": ["A. U = IR", "B. U = I/R", "C. U = R/I", "D. I = UR"],
        "answer": "A",
        "knowledgePoint": "欧姆定律",
        "analysis": "电压等于电流乘以电阻！U = IR，记住这个公式。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "电阻的单位是：",
        "options": ["A. 伏特", "B. 安培", "C. 欧姆", "D. 瓦特"],
        "answer": "C",
        "knowledgePoint": "电阻单位",
        "analysis": "电阻单位是欧姆！用Ω表示。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个电阻为10Ω的导体，两端电压为20V，通过的电流是：",
        "options": ["A. 2A", "B. 0.5A", "C. 200A", "D. 10A"],
        "answer": "A",
        "knowledgePoint": "欧姆定律应用",
        "analysis": "I = U/R = 20/10 = 2A。简单的计算！"
      },
      {
        "type": "open",
        "text": "分析霍格沃茨城堡的照明系统，说明电路的基本组成和工作原理。",
        "scoringPoints": ["电源提供电能", "导线传导电流", "用电器消耗电能", "开关控制电路", "安全保护装置"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 19,
    "title": "串联与并联电路",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "串联电路的特点是：",
        "options": ["A. 各支路电压相等", "B. 各支路电流相等", "C. 总电阻等于各电阻之和", "D. 以上都对"],
        "answer": "B",
        "knowledgePoint": "串联电路",
        "analysis": "串联电路中电流处处相等！就像一根水管里的水流一样。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "并联电路的特点是：",
        "options": ["A. 各支路电压相等", "B. 各支路电流相等", "C. 总电阻等于各电阻之和", "D. 以上都对"],
        "answer": "A",
        "knowledgePoint": "并联电路",
        "analysis": "并联电路中各支路电压相等！就像同一高度的水压一样。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "两个电阻R₁=4Ω和R₂=6Ω串联，总电阻是：",
        "options": ["A. 10Ω", "B. 24Ω", "C. 2.4Ω", "D. 1.5Ω"],
        "answer": "A",
        "knowledgePoint": "串联电阻",
        "analysis": "串联总电阻等于各电阻之和！4+6=10Ω。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "两个电阻R₁=4Ω和R₂=6Ω并联，总电阻是：",
        "options": ["A. 10Ω", "B. 24Ω", "C. 2.4Ω", "D. 1.5Ω"],
        "answer": "C",
        "knowledgePoint": "并联电阻",
        "analysis": "1/R = 1/4 + 1/6 = 5/12 → R = 12/5 = 2.4Ω。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "三个相同的灯泡串联在电路中，每个灯泡的电压是总电压的：",
        "options": ["A. 1倍", "B. 1/2", "C. 1/3", "D. 3倍"],
        "answer": "C",
        "knowledgePoint": "串联分压",
        "analysis": "串联电路电压按电阻分配！相同电阻分压相等，每个得1/3总电压。"
      },
      {
        "type": "open",
        "text": "比较串联和并联电路在实际应用中的优缺点，举例说明。",
        "scoringPoints": ["串联电路：一个损坏全部失效，分压", "并联电路：独立工作，分流", "家庭电路用并联的原因", "节日彩灯用串联的原因", "实际案例分析"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 20,
    "title": "电功与电功率",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "电功的计算公式是：",
        "options": ["A. W = UIt", "B. W = IR", "C. W = P/t", "D. W = Fs"],
        "answer": "A",
        "knowledgePoint": "电功公式",
        "analysis": "电功W = UIt！电压乘以电流乘以时间。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "电功率的计算公式是：",
        "options": ["A. P = UI", "B. P = IR", "C. P = Wt", "D. P = U/I"],
        "answer": "A",
        "knowledgePoint": "电功率公式",
        "analysis": "电功率P = UI！电压乘以电流。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "一个100W的灯泡工作2小时，消耗的电能是：",
        "options": ["A. 200J", "B. 200kWh", "C. 0.2kWh", "D. 50J"],
        "answer": "C",
        "knowledgePoint": "电能计算",
        "analysis": "W = Pt = 100W × 2h = 200Wh = 0.2kWh。注意单位！"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "根据焦耳定律，电热的计算公式是：",
        "options": ["A. Q = I²Rt", "B. Q = UIt", "C. Q = Pt", "D. 以上都对"],
        "answer": "D",
        "knowledgePoint": "焦耳定律",
        "analysis": "Q = I²Rt = UIt = Pt！都是计算电热的公式。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个电阻为10Ω的电热器，通过2A电流，工作5分钟产生的热量是：",
        "options": ["A. 12000J", "B. 200J", "C. 100J", "D. 60000J"],
        "answer": "A",
        "knowledgePoint": "电热计算",
        "analysis": "Q = I²Rt = 4 × 10 × 300 = 12000J。注意时间换算！"
      },
      {
        "type": "open",
        "text": "分析霍格沃茨城堡的电热壁炉，说明电能是如何转化为热能的？",
        "scoringPoints": ["电流通过电阻产生热量", "焦耳定律的应用", "能量转化效率", "安全保护措施", "与魔法火焰的对比"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 21,
    "title": "磁场基础",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "磁体的基本性质是：",
        "options": ["A. 只有一个磁极", "B. 有两个磁极", "C. 没有磁极", "D. 有三个磁极"],
        "answer": "B",
        "knowledgePoint": "磁体性质",
        "analysis": "磁体有两个磁极！南极和北极，不可分割。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "磁场的方向是：",
        "options": ["A. 从南极指向北极", "B. 从北极指向南极", "C. 没有固定方向", "D. 竖直向下"],
        "answer": "B",
        "knowledgePoint": "磁场方向",
        "analysis": "磁场方向从北极指向南极！就像小磁针N极指向的方向。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "电流周围存在磁场，这是：",
        "options": ["A. 牛顿发现的", "B. 奥斯特发现的", "C. 法拉第发现的", "D. 麦克斯韦发现的"],
        "answer": "B",
        "knowledgePoint": "电流的磁效应",
        "analysis": "奥斯特发现电流周围有磁场！电生磁的现象。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "右手螺旋定则用于判断：",
        "options": ["A. 电场方向", "B. 电流产生的磁场方向", "C. 磁场产生的电流方向", "D. 力的方向"],
        "answer": "B",
        "knowledgePoint": "右手螺旋定则",
        "analysis": "右手螺旋定则用来判断电流产生的磁场方向！记住这个定则。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "通电螺线管内部的磁场方向是：",
        "options": ["A. 从右端到左端", "B. 从左端到右端", "C. 垂直于螺线管", "D. 没有磁场"],
        "answer": "B",
        "knowledgePoint": "螺线管磁场",
        "analysis": "用右手螺旋定则！四指沿电流方向，大拇指指向就是磁场方向。"
      },
      {
        "type": "open",
        "text": "分析电磁铁的工作原理，说明如何控制电磁铁的磁性强弱？",
        "scoringPoints": ["电流的磁效应", "铁芯的作用", "线圈匝数的影响", "电流大小的影响", "实际应用"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 22,
    "title": "电磁感应",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "电磁感应现象是由谁发现的？",
        "options": ["A. 奥斯特", "B. 法拉第", "C. 安培", "D. 麦克斯韦"],
        "answer": "B",
        "knowledgePoint": "电磁感应发现",
        "analysis": "法拉第发现了电磁感应！磁生电的现象。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "产生感应电流的条件是：",
        "options": ["A. 导体在磁场中运动", "B. 闭合回路的磁通量变化", "C. 导体静止在磁场中", "D. 以上都对"],
        "answer": "B",
        "knowledgePoint": "感应电流条件",
        "analysis": "闭合回路的磁通量发生变化才能产生感应电流！"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "楞次定律说明：",
        "options": ["A. 感应电流的磁场阻碍原磁通量变化", "B. 感应电流的磁场增强原磁通量", "C. 感应电流与原电流方向相同", "D. 没有规律"],
        "answer": "A",
        "knowledgePoint": "楞次定律",
        "analysis": "楞次定律说感应电流的磁场总是阻碍原磁通量的变化！就像惯性一样。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "法拉第电磁感应定律的表达式是：",
        "options": ["A. E = BLv", "B. E = ΔΦ/Δt", "C. E = IR", "D. E = F/q"],
        "answer": "B",
        "knowledgePoint": "法拉第定律",
        "analysis": "感应电动势等于磁通量的变化率！E = ΔΦ/Δt。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个线圈有100匝，磁通量在0.1秒内从0.02Wb变为0.05Wb，感应电动势是：",
        "options": ["A. 30V", "B. 3V", "C. 0.3V", "D. 300V"],
        "answer": "A",
        "knowledgePoint": "感应电动势计算",
        "analysis": "E = nΔΦ/Δt = 100×(0.05-0.02)/0.1 = 30V。记住公式！"
      },
      {
        "type": "open",
        "text": "解释发电机的工作原理，说明它如何将机械能转化为电能？",
        "scoringPoints": ["电磁感应原理", "线圈在磁场中转动", "磁通量变化", "感应电流产生", "能量转化过程"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 23,
    "title": "交流电",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "交流电的特点是：",
        "options": ["A. 电流方向不变", "B. 电流大小不变", "C. 电流方向周期性变化", "D. 没有电流"],
        "answer": "C",
        "knowledgePoint": "交流电特点",
        "analysis": "交流电的电流方向周期性变化！就像正弦波一样。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "我国民用交流电的频率是：",
        "options": ["A. 50Hz", "B. 60Hz", "C. 100Hz", "D. 25Hz"],
        "answer": "A",
        "knowledgePoint": "交流电频率",
        "analysis": "我国民用交流电是50Hz！周期是0.02秒。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "交流电的有效值和最大值的关系是：",
        "options": ["A. 有效值=最大值", "B. 有效值=最大值/√2", "C. 有效值=最大值×√2", "D. 没有关系"],
        "answer": "B",
        "knowledgePoint": "有效值",
        "analysis": "正弦交流电的有效值等于最大值除以根号2！U有效 = U最大/√2。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "变压器的工作原理是：",
        "options": ["A. 欧姆定律", "B. 电磁感应", "C. 焦耳定律", "D. 库仑定律"],
        "answer": "B",
        "knowledgePoint": "变压器原理",
        "analysis": "变压器利用电磁感应！原线圈变化的电流产生变化的磁场，在副线圈产生感应电动势。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "理想变压器原线圈匝数1000，副线圈匝数200，输入电压220V，输出电压是：",
        "options": ["A. 44V", "B. 1100V", "C. 220V", "D. 440V"],
        "answer": "A",
        "knowledgePoint": "变压器电压",
        "analysis": "U1/U2 = n1/n2 → 220/U2 = 1000/200 → U2 = 44V。电压与匝数成正比！"
      },
      {
        "type": "open",
        "text": "比较交流电和直流电的优缺点，说明为什么电力系统使用交流电？",
        "scoringPoints": ["交流电容易变压", "远距离输电损耗小", "发电机容易产生交流电", "直流电的应用场景", "实际案例"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 24,
    "title": "电磁波",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "电磁波的传播速度是：",
        "options": ["A. 340m/s", "B. 3×10⁸m/s", "C. 3×10⁶m/s", "D. 1000m/s"],
        "answer": "B",
        "knowledgePoint": "电磁波速度",
        "analysis": "电磁波在真空中的速度是光速！3×10⁸m/s。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "电磁波谱中频率最高的是：",
        "options": ["A. 无线电波", "B. 可见光", "C. X射线", "D. γ射线"],
        "answer": "D",
        "knowledgePoint": "电磁波谱",
        "analysis": "γ射线频率最高！能量也最大。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "电磁波的产生是由于：",
        "options": ["A. 静止电荷", "B. 运动电荷", "C. 加速运动的电荷", "D. 磁性材料"],
        "answer": "C",
        "knowledgePoint": "电磁波产生",
        "analysis": "加速运动的电荷会产生电磁波！比如振荡电路中的电荷。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "下列哪种不是电磁波？",
        "options": ["A. 无线电波", "B. 声波", "C. 红外线", "D. 紫外线"],
        "answer": "B",
        "knowledgePoint": "电磁波种类",
        "analysis": "声波不是电磁波！它是机械波，需要介质传播。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "波长为1米的电磁波，频率是：",
        "options": ["A. 3×10⁸Hz", "B. 3×10⁶Hz", "C. 3×10¹⁰Hz", "D. 3×10⁴Hz"],
        "answer": "A",
        "knowledgePoint": "波长频率关系",
        "analysis": "c = λf → f = c/λ = 3×10⁸/1 = 3×10⁸Hz。"
      },
      {
        "type": "open",
        "text": "分析手机通信的原理，说明电磁波在其中的作用。",
        "scoringPoints": ["电磁波的发射", "调制与解调", "信号传输", "接收与解码", "实际应用"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 25,
    "title": "热学基础",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "温度的国际单位是：",
        "options": ["A. 摄氏度(°C)", "B. 华氏度(°F)", "C. 开尔文(K)", "D. 列氏度(°R)"],
        "answer": "C",
        "knowledgePoint": "温度单位",
        "analysis": "温度的国际单位是开尔文！0K是绝对零度。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "热传递的三种方式是：",
        "options": ["A. 传导、对流、辐射", "B. 传导、对流、扩散", "C. 传导、辐射、扩散", "D. 对流、辐射、扩散"],
        "answer": "A",
        "knowledgePoint": "热传递方式",
        "analysis": "热传递有三种方式：传导、对流和辐射！"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "物质从固态变为液态的过程叫做：",
        "options": ["A. 凝固", "B. 熔化", "C. 汽化", "D. 液化"],
        "answer": "B",
        "knowledgePoint": "物态变化",
        "analysis": "固态变液态是熔化！需要吸收热量。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "理想气体定律的表达式是：",
        "options": ["A. PV = nRT", "B. PV = RT", "C. P = nRT/V", "D. V = nRT/P"],
        "answer": "A",
        "knowledgePoint": "理想气体定律",
        "analysis": "理想气体定律PV = nRT！描述气体状态。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一定质量的理想气体，温度从27°C升高到127°C，体积不变，压强变为原来的：",
        "options": ["A. 4倍", "B. 127/27倍", "C. 400/300倍", "D. 127/300倍"],
        "answer": "C",
        "knowledgePoint": "查理定律",
        "analysis": "P/T = 常数！T1=300K，T2=400K，所以P2/P1 = 400/300。"
      },
      {
        "type": "open",
        "text": "解释为什么冬天窗户玻璃会结冰？结合热传递和物态变化说明。",
        "scoringPoints": ["室内水蒸气接触冷玻璃", "热传导使水蒸气降温", "水蒸气凝华成冰", "冰的形成过程", "实际观察"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 26,
    "title": "热力学第一定律",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "热力学第一定律的表达式是：",
        "options": ["A. ΔU = Q + W", "B. ΔU = Q - W", "C. ΔU = W - Q", "D. ΔU = Q × W"],
        "answer": "A",
        "knowledgePoint": "热力学第一定律",
        "analysis": "ΔU = Q + W！内能变化等于吸收的热量加外界对系统做的功。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "内能的定义是：",
        "options": ["A. 物体的动能", "B. 物体内所有分子动能和势能的总和", "C. 物体的势能", "D. 物体的热量"],
        "answer": "B",
        "knowledgePoint": "内能定义",
        "analysis": "内能是物体内所有分子动能和势能的总和！是状态量。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "绝热过程的特点是：",
        "options": ["A. Q = 0", "B. W = 0", "C. ΔU = 0", "D. P = 0"],
        "answer": "A",
        "knowledgePoint": "绝热过程",
        "analysis": "绝热过程没有热量交换！Q = 0，ΔU = W。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "等容过程中，外界对系统做功：",
        "options": ["A. 大于零", "B. 小于零", "C. 等于零", "D. 无法确定"],
        "answer": "C",
        "knowledgePoint": "等容过程",
        "analysis": "等容过程体积不变！W = 0，ΔU = Q。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "系统吸收200J热量，对外做功100J，内能变化是：",
        "options": ["A. 100J", "B. 300J", "C. -100J", "D. -300J"],
        "answer": "A",
        "knowledgePoint": "热力学第一定律应用",
        "analysis": "ΔU = Q + W = 200 + (-100) = 100J。注意符号！"
      },
      {
        "type": "open",
        "text": "分析压缩气体温度升高的原因，结合热力学第一定律说明。",
        "scoringPoints": ["外界对气体做功", "绝热过程Q=0", "内能增加", "温度升高", "实际应用"],
        "maxScore": 5
      }
    ]
  },
  {
    "lesson": 27,
    "title": "热力学第二定律",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "热力学第二定律说明：",
        "options": ["A. 能量守恒", "B. 热量不能自发从低温传到高温", "C. 内能可以全部转化为功", "D. 熵总是减少"],
        "answer": "B",
        "knowledgePoint": "热力学第二定律",
        "analysis": "热量不能自发从低温传到高温！需要外界做功。"
      },
      {
        "type": "choice",
        "difficulty": 1,
        "text": "熵的物理意义是：",
        "options": ["A. 能量的多少", "B. 系统的无序程度", "C. 温度的高低", "D. 热量的大小"],
        "answer": "B",
        "knowledgePoint": "熵",
        "analysis": "熵是系统无序程度的量度！熵越大越无序。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "熵增原理说明：",
        "options": ["A. 孤立系统的熵永不减少", "B. 熵总是减少", "C. 熵保持不变", "D. 熵可以任意变化"],
        "answer": "A",
        "knowledgePoint": "熵增原理",
        "analysis": "孤立系统熵永不减少！这是宇宙的基本规律。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "卡诺热机的效率取决于：",
        "options": ["A. 工作物质", "B. 高温热源和低温热源的温度", "C. 循环次数", "D. 功率"],
        "answer": "B",
        "knowledgePoint": "卡诺循环",
        "analysis": "卡诺效率η=1-Tc/Th！只与热源温度有关。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "卡诺热机工作在1000K和300K之间，其效率为：",
        "options": ["A. 70%", "B. 30%", "C. 100%", "D. 50%"],
        "answer": "A",
        "knowledgePoint": "热机效率",
        "analysis": "η=1-300/1000=0.7=70%。记住公式！"
      },
      {
        "type": "open",
        "text": "讨论熵增原理在日常生活中的体现，说明为什么第二类永动机不可能实现。",
        "scoringPoints": ["熵增的例子", "第二类永动机定义", "热力学第二定律限制", "能量品质", "实际意义"],
        "maxScore": 5
      }
    ]
  }
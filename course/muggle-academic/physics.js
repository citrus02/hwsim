/**
 * subjects/physics.js
 * 麻瓜研究 · 物理分科
 * 教授：塞拉菲娜·穆迪
 */

export const subjectMeta = {
  key: "physics",
  name: "物理",
  icon: "⚡",
  professor: "塞拉菲娜·穆迪",
  desc: "力、能量、电——麻瓜修理世界的方式",
  unlockGrade: 3,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle:    "大声喊「漂亮！就是它！」，有时拍手",
  errorStyle:     "「炸了不过炸也是数据」，立刻分析原因",
  officeHours:    "周三课后，实验室开放",
  signature:      "总有一台麻瓜电器被拆开摆在讲台上",
  prop:           "麻瓜手电筒、拆开的风扇、电池",
  catchphrase:    "炸了不过炸也是数据"
};

export const syllabus = [
  {
    chapter: 1,
    title: "力与运动",
    lessons: [
      {
        lesson: 1,
        title: "力的基本概念",
        keyPoints: [
          "力是物体对物体的作用",
          "力的三要素：大小、方向、作用点",
          "力的单位：牛顿（N）",
          "力的效果：改变形状或改变运动状态"
        ]
      },
      {
        lesson: 2,
        title: "重力与弹力",
        keyPoints: [
          "重力：地球对物体的引力，方向竖直向下",
          "重力加速度 g ≈ 9.8 m/s²",
          "弹力：形变产生的力",
          "弹簧的弹力与形变量成正比（胡克定律）"
        ]
      },
      {
        lesson: 3,
        title: "摩擦力",
        keyPoints: [
          "摩擦力阻碍物体间的相对运动",
          "静摩擦力与滑动摩擦力",
          "影响摩擦力的因素：压力大小和接触面粗糙程度",
          "麻瓜生活中的摩擦力应用"
        ]
      }
    ]
  },
  {
    chapter: 2,
    title: "声与热",
    lessons: [
      {
        lesson: 4,
        title: "声音的产生与传播",
        keyPoints: [
          "声音由物体振动产生",
          "声音的传播需要介质，真空不能传声",
          "声速在不同介质中不同，固体>液体>气体",
          "音调、响度、音色三要素"
        ]
      },
      {
        lesson: 5,
        title: "热与温度",
        keyPoints: [
          "温度：物体冷热程度的量度",
          "温度计的原理：液体热胀冷缩",
          "摄氏温标与热力学温标",
          "热量的传递方式：传导、对流、辐射"
        ]
      }
    ]
  },
  {
    chapter: 3,
    title: "电与磁",
    lessons: [
      {
        lesson: 6,
        title: "电流与电路",
        keyPoints: [
          "电流：电荷的定向移动",
          "电路的基本组成：电源、导线、开关、用电器",
          "串联与并联的区别",
          "导体与绝缘体"
        ]
      },
      {
        lesson: 7,
        title: "欧姆定律",
        keyPoints: [
          "欧姆定律：I = U/R",
          "电压、电流、电阻的关系",
          "电阻的影响因素：材料、长度、截面积、温度",
          "灯泡发光的原理：电阻产生热量"
        ]
      },
      {
        lesson: 8,
        title: "磁场与电磁感应",
        keyPoints: [
          "磁场的基本性质与磁感线",
          "地球磁场与指南针",
          "电生磁：奥斯特发现",
          "磁生电：电磁感应现象"
        ]
      }
    ]
  },
  {
    chapter: 4,
    title: "能量守恒",
    lessons: [
      {
        lesson: 9,
        title: "能量与能量守恒定律",
        keyPoints: [
          "能量的形式：动能、势能、热能、电能、光能",
          "能量守恒定律：能量不生不灭，只转化",
          "机械能守恒",
          "麻瓜能源利用与转化链"
        ]
      }
    ]
  }
];

export const questionBank = [
  {
    lesson: 1,
    title: "力的基本概念",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "下列关于力的说法，正确的是：",
        options: ["A. 力可以脱离物体单独存在", "B. 力是物体对物体的作用", "C. 只有接触的物体间才有力", "D. 力只能改变物体形状"],
        answer: "B",
        knowledgePoint: "力的定义",
        analysis: "力是物体对物体的作用，力不能脱离物体存在，也有不接触的力（如重力）。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "用手推墙，墙不动，手感到疼。这说明：",
        options: ["A. 手对墙有力，墙对手没有力", "B. 手对墙的力大于墙对手的力", "C. 力的作用是相互的", "D. 手比墙软，所以手疼"],
        answer: "C",
        knowledgePoint: "力的相互性",
        analysis: "力的作用是相互的，手推墙时墙也在推手，两力大小相等方向相反。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "一个物体同时受到两个力，这两个力的合力：",
        options: ["A. 一定比每个力都大", "B. 一定比每个力都小", "C. 可能为零", "D. 一定不为零"],
        answer: "C",
        knowledgePoint: "力的合成",
        analysis: "两个力大小相等、方向相反时，合力为零。合力可以比每个分力大、小或等于。"
      }
    ]
  },
  {
    lesson: 2,
    title: "重力与弹力",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "重力的方向是：",
        options: ["A. 指向地心", "B. 垂直向下", "C. 竖直向下", "D. 与地面平行"],
        answer: "C",
        knowledgePoint: "重力方向",
        analysis: "重力方向竖直向下，而不是垂直于地面（斜面上的物体垂直于斜面的方向与竖直向下不同）。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "质量为10kg的物体，受到的重力约为（g=10N/kg）：",
        options: ["A. 1N", "B. 10N", "C. 100N", "D. 1000N"],
        answer: "C",
        knowledgePoint: "重力计算",
        analysis: "G = mg = 10kg × 10N/kg = 100N。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "弹簧被压缩，产生弹力的原因是：",
        options: ["A. 弹簧有弹性", "B. 弹簧发生了弹性形变", "C. 弹簧受到了外力", "D. 弹簧想恢复原状"],
        answer: "B",
        knowledgePoint: "弹力产生条件",
        analysis: "弹力产生的根本原因是弹性形变。只有在弹性限度内，形变才能产生弹力。"
      }
    ]
  },
  {
    lesson: 3,
    title: "摩擦力",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "以下哪种情况会增大摩擦力？",
        options: ["A. 在机器齿轮上加润滑油", "B. 把轮子做成圆形", "C. 在冰鞋底部加装刀片", "D. 在轮胎上加防滑链"],
        answer: "D",
        knowledgePoint: "摩擦力的影响因素",
        analysis: "加防滑链增大了接触面的粗糙程度，从而增大摩擦力，其余选项都是减小摩擦力。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "一本书放在桌上静止不动，书受到的摩擦力：",
        options: ["A. 方向向右", "B. 方向向左", "C. 大小为零", "D. 大小等于书的重力"],
        answer: "C",
        knowledgePoint: "静摩擦力",
        analysis: "静止的书没有运动趋势，静摩擦力为零。摩擦力只在有相对运动或运动趋势时存在。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "用相同的力推重量不同的两个箱子，哪个受到的摩擦力更大？",
        options: ["A. 重的箱子", "B. 轻的箱子", "C. 一样大", "D. 取决于箱子材质"],
        answer: "A",
        knowledgePoint: "压力与摩擦力",
        analysis: "在接触面相同的情况下，压力越大（重的物体对地面压力更大），摩擦力越大。"
      }
    ]
  },
  {
    lesson: 4,
    title: "声音的产生与传播",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "声音产生的原因是：",
        options: ["A. 物体运动", "B. 物体振动", "C. 空气流动", "D. 能量传递"],
        answer: "B",
        knowledgePoint: "声音产生",
        analysis: "声音由物体振动产生，振动停止，声音也停止。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "在月球上，两名宇航员面对面无法直接对话，原因是：",
        options: ["A. 月球上没有空气传播声音", "B. 月球太冷声音被冻住了", "C. 宇航服太厚", "D. 月球引力太大"],
        answer: "A",
        knowledgePoint: "声音传播需要介质",
        analysis: "声音传播需要介质，月球表面是真空，没有介质，声音无法传播。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "同一声源发出的声音，在以下哪种介质中传播最快？",
        options: ["A. 空气", "B. 水", "C. 木头", "D. 真空"],
        answer: "C",
        knowledgePoint: "声速与介质",
        analysis: "声速在固体>液体>气体，真空中声音无法传播。木头是固体，所以传播最快。"
      }
    ]
  },
  {
    lesson: 5,
    title: "热与温度",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "温度计的工作原理是：",
        options: ["A. 液体热胀冷缩", "B. 液体热缩冷胀", "C. 气体热胀冷缩", "D. 金属导热"],
        answer: "A",
        knowledgePoint: "温度计原理",
        analysis: "温度计利用液体（通常是酒精或汞）热胀冷缩的性质来测量温度。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "热量从高温物体传向低温物体，直到两者温度相同，这个过程叫：",
        options: ["A. 热平衡", "B. 热传导", "C. 热对流", "D. 热辐射"],
        answer: "A",
        knowledgePoint: "热平衡",
        analysis: "两个温度不同的物体接触后，热量传递直到温度相同，达到热平衡。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "下列现象中，通过对流传热的是：",
        options: ["A. 太阳照射地球", "B. 炉子旁边的人感到热", "C. 用热水袋暖手", "D. 烧水时锅底的水上升"],
        answer: "D",
        knowledgePoint: "热传递方式",
        analysis: "对流是流体（液体和气体）通过流动传递热量。烧水时底部水受热密度变小上升，形成对流。"
      }
    ]
  },
  {
    lesson: 6,
    title: "电流与电路",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "下列物质中，属于导体的是：",
        options: ["A. 橡皮", "B. 玻璃", "C. 铜", "D. 陶瓷"],
        answer: "C",
        knowledgePoint: "导体与绝缘体",
        analysis: "铜是金属，金属中有自由电子，容易导电，是导体。其余都是绝缘体。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "并联电路中，两个灯泡：",
        options: ["A. 亮度相同，一个断路另一个也灭", "B. 各自独立，一个断路另一个仍亮", "C. 串联在一起", "D. 无法同时发光"],
        answer: "B",
        knowledgePoint: "并联特性",
        analysis: "并联电路各支路独立，一条支路断路不影响其他支路，这也是家庭电路采用并联的原因。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "手电筒里的两节电池串联，每节电压1.5V，则总电压为：",
        options: ["A. 1.5V", "B. 0.75V", "C. 3V", "D. 无法确定"],
        answer: "C",
        knowledgePoint: "串联电压",
        analysis: "串联电路总电压等于各部分电压之和，1.5V + 1.5V = 3V。"
      }
    ]
  },
  {
    lesson: 7,
    title: "欧姆定律",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "欧姆定律的公式是：",
        options: ["A. I = U/R", "B. I = R/U", "C. U = I/R", "D. R = I×U"],
        answer: "A",
        knowledgePoint: "欧姆定律公式",
        analysis: "欧姆定律：电流I等于电压U除以电阻R，即I = U/R。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "电阻为10Ω，两端电压为5V，通过的电流为：",
        options: ["A. 50A", "B. 2A", "C. 0.5A", "D. 0.2A"],
        answer: "C",
        knowledgePoint: "欧姆定律计算",
        analysis: "I = U/R = 5V ÷ 10Ω = 0.5A。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "将电阻R接在电路中，电压不变，若将R增大为原来的2倍，则电流变为原来的：",
        options: ["A. 2倍", "B. 4倍", "C. 1/2倍", "D. 1/4倍"],
        answer: "C",
        knowledgePoint: "欧姆定律比例关系",
        analysis: "U不变，R增大2倍，由I=U/R，I减小为原来的1/2。"
      }
    ]
  },
  {
    lesson: 8,
    title: "磁场与电磁感应",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "指南针能指向南北，是因为：",
        options: ["A. 地球是一块大磁铁", "B. 地球有引力", "C. 指南针有魔力", "D. 太阳的引力"],
        answer: "A",
        knowledgePoint: "地球磁场",
        analysis: "地球本身是一个巨大的磁体，地磁场使指南针的N极指向地理南方（地磁北方）。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "奥斯特发现了电流能够：",
        options: ["A. 产生引力", "B. 产生磁场", "C. 产生光", "D. 产生声音"],
        answer: "B",
        knowledgePoint: "电流的磁效应",
        analysis: "丹麦物理学家奥斯特发现导线通电时附近磁针偏转，证明电流能产生磁场。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "发电机的工作原理是：",
        options: ["A. 电流产生磁场", "B. 磁场产生电流（电磁感应）", "C. 机械能直接变成电能", "D. 化学能转化为电能"],
        answer: "B",
        knowledgePoint: "电磁感应",
        analysis: "发电机利用电磁感应原理，导体在磁场中运动产生电流，将机械能转化为电能。"
      }
    ]
  },
  {
    lesson: 9,
    title: "能量与能量守恒定律",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "下列能量转化，正确描述电灯工作过程的是：",
        options: ["A. 光能→电能", "B. 电能→热能+光能", "C. 化学能→光能", "D. 电能→动能"],
        answer: "B",
        knowledgePoint: "能量转化",
        analysis: "电灯工作时，电能转化为热能和光能（灯丝电阻发热发光）。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "能量守恒定律的含义是：",
        options: ["A. 能量会消失", "B. 能量会凭空产生", "C. 能量只能转化，总量不变", "D. 能量转化会有损耗"],
        answer: "C",
        knowledgePoint: "能量守恒定律",
        analysis: "能量守恒定律：能量既不能凭空产生，也不能凭空消失，只能从一种形式转化为另一种形式，总量守恒。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "永动机（不消耗能量但持续做功的机器）不可能存在，原因是：",
        options: ["A. 技术不够先进", "B. 材料不够好", "C. 违反了能量守恒定律", "D. 理论上可能，实践上不行"],
        answer: "C",
        knowledgePoint: "能量守恒与永动机",
        analysis: "永动机违背了能量守恒定律，做功需要消耗能量，没有能量输入就无法持续做功。"
      }
    ]
  }
];

export const crossAnchors = [
  {
    concept: "正负数与温度计",
    linkedSubject: "math",
    linkedLesson: "第1课",
    desc: "芬威克讲正负数时，塞拉菲娜的温度计刻度就是最好的现实案例——两者逻辑完全相同"
  },
  {
    concept: "工业革命与能量利用",
    linkedSubject: "history",
    linkedLesson: "第2课",
    desc: "赫伯特讲工业革命时，塞拉菲娜会从能量转化角度重新讲蒸汽机——同一段历史，两种解读"
  },
  {
    concept: "电路与逻辑推导",
    linkedSubject: "math",
    linkedLesson: "第9课",
    desc: "方程求解和电路分析都需要同样的逻辑推导能力——找未知量，建立等式，求解"
  }
];

window.subject_physics = { subjectMeta, syllabus, questionBank, crossAnchors, teachingStyle };

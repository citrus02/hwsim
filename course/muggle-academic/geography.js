/**
 * geography.js
 * 麻瓜学术 · 地理
 * 教授：菲利克斯·韦斯莱（Felix Weasley）
 * 课程体系：英国 KS3 → GCSE → A-Level（共 70 课，14 章，横跨 7 年级）
 */

import { lessonMap } from './geography-lesson.js';
import { questionBank } from './geography-questionBank.js';

export const subjectMeta = {
  key: "geography",
  name: "地理",
  icon: "🌍",
  professor: "菲利克斯·韦斯莱",
  desc: "地图、气候、探险——麻瓜用两条腿走遍的世界",
  unlockGrade: 1,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle:    "拍手，「太棒了！你以后一定要选我的提高班！」",
  errorStyle:     "「哎，我下次讲清楚点」，自揽责任，画示意图",
  officeHours:    "随时，地图室全天开放",
  signature:      "把地图铺满整张桌子，让你亲手标注",
  prop:           "麻瓜指南针、地球仪、各种麻瓜地图",
  catchphrase:    "麻瓜用两条腿走遍了世界，你们觉得这算不算一种魔法？"
};

// 14章 × 5课 = 70课，贯穿1-7年级
export const syllabus = [
  // ── 1-3年·KS3 ────────────────────────────────────────────
  {
    chapter: 1, yearRange: "1年级", phase: "KS3",
    title: "自然地理",
    lessons: [
      { lesson: 1,  title: "地球结构与板块构造",     keyPoints: ["地球内部结构：地壳、地幔、地核", "岩石圈与六大板块", "板块边界类型：碰撞、张裂、平移", "板块运动与地震火山的关联"] },
      { lesson: 2,  title: "火山：岩浆的出口",       keyPoints: ["火山的形成与岩浆来源", "火山类型：盾状、复合、火山渣锥", "火山喷发物：熔岩、火山灰、气体", "著名火山案例：维苏威、富士山"] },
      { lesson: 3,  title: "地震：能量的释放",       keyPoints: ["地震的成因：板块边界应力释放", "震级与烈度的区别", "地震波：纵波与横波", "地震带分布与防灾措施"] },
      { lesson: 4,  title: "岩石循环：三类岩石的转化", keyPoints: ["岩浆岩、沉积岩、变质岩的形成", "岩石循环过程与地质时间", "常见岩石类型及其特征", "岩石与人类利用"] },
      { lesson: 5,  title: "河流系统：侵蚀、搬运、沉积", keyPoints: ["河流的侵蚀作用：下切与侧蚀", "搬运方式：悬浮、滚动、溶解", "沉积作用与三角洲形成", "河谷地貌演化"] }
    ]
  },
  {
    chapter: 2, yearRange: "1年级", phase: "KS3",
    title: "人文地理",
    lessons: [
      { lesson: 6,  title: "人口分布：为什么人住在这里", keyPoints: ["世界人口分布的不均衡性", "影响人口分布的因素：气候、地形、资源", "人口密度的计算与地图表示", "人口稠密区与稀疏区"] },
      { lesson: 7,  title: "城乡差异：生活方式的地理基础", keyPoints: ["城市与乡村的定义", "城乡人口结构差异", "城乡经济活动差异", "城乡文化差异"] },
      { lesson: 8,  title: "土地利用类型与变化",     keyPoints: ["土地利用分类：农业、工业、居住、交通", "土地利用变化的驱动力", "城市扩张与农田流失", "土地利用规划"] },
      { lesson: 9,  title: "经济活动的分布",         keyPoints: ["第一、二、三产业的划分", "各产业的特点与分布", "产业结构的地区差异", "经济全球化对产业的影响"] },
      { lesson: 10, title: "地图阅读与比例尺",       keyPoints: ["地图的三要素：比例尺、方向、图例", "比例尺的三种表示形式", "比例尺与地图详略的关系", "实地距离计算"] }
    ]
  },
  {
    chapter: 3, yearRange: "2年级", phase: "KS3",
    title: "气候与生态",
    lessons: [
      { lesson: 11, title: "气候带划分：纬度与洋流的作用", keyPoints: ["全球气候带的分布规律", "纬度对气候的影响", "洋流的增温增湿与降温减湿作用", "气压带风带的季节性移动"] },
      { lesson: 12, title: "季风系统：降水的季节变化",     keyPoints: ["季风的形成原因", "亚洲季风的特点", "季风对农业和生活的影响", "季风与洪涝灾害"] },
      { lesson: 13, title: "热带雨林：最高效的生态系统", keyPoints: ["热带雨林的分布与特征", "物种多样性与生态位", "雨林分层结构", "热带雨林面临的威胁"] },
      { lesson: 14, title: "荒漠：极端环境的适应",       keyPoints: ["荒漠的分布与类型", "荒漠气候特征", "动植物的适应策略", "荒漠化问题"] },
      { lesson: 15, title: "气候变化的证据与机制",       keyPoints: ["气候变化的观测证据", "温室效应的原理", "人类活动的影响", "自然因素的影响"] }
    ]
  },
  {
    chapter: 4, yearRange: "2年级", phase: "KS3",
    title: "城市地理",
    lessons: [
      { lesson: 16, title: "城市化进程：工业化与人口迁移", keyPoints: ["城市化的定义与衡量", "城市化的阶段特征", "推拉理论与人口迁移", "世界城市化趋势"] },
      { lesson: 17, title: "城市内部土地利用模型",       keyPoints: ["同心圆模型、扇形模型、多核心模型", "城市功能分区", "CBD的特征与作用", "居住区分化"] },
      { lesson: 18, title: "逆城市化：为何人口向郊区迁移", keyPoints: ["逆城市化的定义", "逆城市化的原因", "郊区化与通勤模式", "城市空心化问题"] },
      { lesson: 19, title: "发展中国家的城市问题：贫民窟", keyPoints: ["贫民窟的形成原因", "贫民窟的特征", "贫民窟的挑战：住房、卫生、安全", "贫民窟的应对措施"] },
      { lesson: 20, title: "城市可持续发展案例",         keyPoints: ["可持续城市的特征", "绿色建筑与公共交通", "城市绿化与生态修复", "成功案例分析"] }
    ]
  },
  {
    chapter: 5, yearRange: "3年级", phase: "KS3",
    title: "全球化",
    lessons: [
      { lesson: 21, title: "贸易网络：货物如何绕地球流动", keyPoints: ["国际贸易的发展历程", "全球贸易路线", "集装箱运输与供应链", "贸易协定与关税"] },
      { lesson: 22, title: "跨国公司：全球工厂在哪里",     keyPoints: ["跨国公司的定义与特征", "跨国公司的区位选择", "跨国公司对发展的影响", "跨国公司的社会责任"] },
      { lesson: 23, title: "旅游业的双刃剑：收入与破坏",   keyPoints: ["旅游业的经济贡献", "旅游对环境的影响", "文化遗产保护与旅游", "可持续旅游"] },
      { lesson: 24, title: "文化全球化：本土文化的应对",   keyPoints: ["文化全球化的表现", "文化同质化与多样性", "本土文化的保护", "文化交流与融合"] },
      { lesson: 25, title: "全球发展不平等：中心与外围",   keyPoints: ["全球南北差异", "中心-外围理论", "发展差距的成因", "缩小差距的途径"] }
    ]
  },
  {
    chapter: 6, yearRange: "3年级", phase: "KS3",
    title: "自然灾害",
    lessons: [
      { lesson: 26, title: "热带气旋：能量来自温暖的海洋", keyPoints: ["热带气旋的形成条件", "热带气旋的结构", "台风、飓风、旋风的区别", "热带气旋的危害与防范"] },
      { lesson: 27, title: "洪水：成因、影响与管理",       keyPoints: ["洪水的类型：河流洪水、海岸洪水", "洪水的成因", "洪水的社会经济影响", "洪水管理措施"] },
      { lesson: 28, title: "地震防灾：为何同震级损失不同", keyPoints: ["地震灾害的影响因素", "建筑物抗震设计", "地震预警系统", "社区防灾准备"] },
      { lesson: 29, title: "人类与灾害风险：脆弱性的地理", keyPoints: ["灾害脆弱性的概念", "脆弱性的影响因素", "风险评估方法", "减少脆弱性的策略"] },
      { lesson: 30, title: "灾后重建：海地与日本的对比",   keyPoints: ["灾后重建的阶段", "不同国家的重建模式", "国际援助的作用", "重建中的挑战"] }
    ]
  },
  // ── 4-5年·GCSE ────────────────────────────────────────────
  {
    chapter: 7, yearRange: "4年级", phase: "GCSE",
    title: "物理地貌",
    lessons: [
      { lesson: 31, title: "冰川作用：U形谷与冰碛物",     keyPoints: ["冰川的类型与特征", "冰川侵蚀作用：刨蚀与磨蚀", "U形谷、冰斗、角峰的形成", "冰碛物的特征与分布"] },
      { lesson: 32, title: "风成地貌：沙漠中的风的雕塑",   keyPoints: ["风的侵蚀作用：吹蚀与磨蚀", "风积地貌：沙丘的类型", "沙漠化过程", "风成地貌的分布"] },
      { lesson: 33, title: "喀斯特地貌：石灰岩的溶蚀",     keyPoints: ["喀斯特地貌的形成条件", "溶洞、石林、地下河的形成", "喀斯特地区的水资源特征", "喀斯特地貌的利用与保护"] },
      { lesson: 34, title: "河流洪泛管理：硬措施与软措施", keyPoints: ["防洪硬措施：大坝、堤防", "防洪软措施：湿地恢复、分洪道", "洪水风险管理策略", "案例分析"] },
      { lesson: 35, title: "海岸侵蚀与防护：悬崖后退",     keyPoints: ["海岸侵蚀的原因", "海蚀地貌的类型", "海岸防护措施", "海平面上升的影响"] }
    ]
  },
  {
    chapter: 8, yearRange: "4年级", phase: "GCSE",
    title: "发展地理",
    lessons: [
      { lesson: 36, title: "发展的测量：GDP与HDI的差异",   keyPoints: ["GDP的定义与局限性", "HDI的构成：健康、教育、收入", "其他发展指标", "指标选择的意义"] },
      { lesson: 37, title: "贫困的成因与贫困陷阱",         keyPoints: ["贫困的定义与类型", "贫困陷阱的机制", "贫困与环境的关系", "减贫策略"] },
      { lesson: 38, title: "国际援助：援助的逻辑与批评",   keyPoints: ["国际援助的类型", "援助的理论基础", "援助的有效性争论", "替代援助模式"] },
      { lesson: 39, title: "新兴经济体：金砖国家的崛起之路", keyPoints: ["金砖国家的特点", "经济增长的驱动力", "面临的挑战", "对全球经济的影响"] },
      { lesson: 40, title: "粮食安全：谁在挨饿，为什么",   keyPoints: ["粮食安全的定义", "粮食不安全的原因", "农业生产与分配", "粮食安全战略"] }
    ]
  },
  {
    chapter: 9, yearRange: "5年级", phase: "GCSE",
    title: "环境挑战",
    lessons: [
      { lesson: 41, title: "气候变化的影响：不均等的未来", keyPoints: ["气候变化的区域差异", "脆弱地区的识别", "气候变化与社会公正", "适应与减缓策略"] },
      { lesson: 42, title: "水资源争夺：稀缺与冲突",       keyPoints: ["水资源分布不均", "水资源冲突的案例", "水资源管理", "国际河流的治理"] },
      { lesson: 43, title: "生物多样性丧失的速率与原因",   keyPoints: ["生物多样性的价值", "物种灭绝的速率", "威胁因素：栖息地破坏、入侵物种", "保护措施"] },
      { lesson: 44, title: "能源转型：可再生能源的地理",   keyPoints: ["可再生能源的类型", "可再生能源的地理分布", "能源转型的挑战", "案例研究"] },
      { lesson: 45, title: "可持续发展目标：2030年的承诺", keyPoints: ["SDGs的背景与框架", "17项目标的相互关系", "实现路径", "监测与评估"] }
    ]
  },
  {
    chapter: 10, yearRange: "5年级", phase: "GCSE",
    title: "地理研究方法",
    lessons: [
      { lesson: 46, title: "田野调查设计与实践",           keyPoints: ["田野调查的步骤", "数据收集方法", "抽样技术", "伦理考虑"] },
      { lesson: 47, title: "GIS应用：空间数据的力量",       keyPoints: ["GIS的概念与功能", "空间数据类型", "GIS分析方法", "GIS在决策中的应用"] },
      { lesson: 48, title: "数据统计与图表呈现",           keyPoints: ["描述性统计", "图表类型选择", "地图可视化", "数据解读"] },
      { lesson: 49, title: "地理信息的批判性解读",         keyPoints: ["信息来源的可靠性", "地图的偏差", "数据的局限性", "批判性思维"] },
      { lesson: 50, title: "GCSE综合复习",                 keyPoints: ["核心概念回顾", "答题技巧", "案例分析方法", "考试准备"] }
    ]
  },
  // ── 6-7年·A-Level ─────────────────────────────────────────
  {
    chapter: 11, yearRange: "6年级", phase: "A-Level",
    title: "地球系统科学",
    lessons: [
      { lesson: 51, title: "大气层化学：温室气体的机制",   keyPoints: ["大气组成与结构", "温室效应原理", "温室气体的来源", "辐射强迫"] },
      { lesson: 52, title: "海洋环流：热盐循环的全球意义", keyPoints: ["海洋环流的驱动因素", "热盐循环的路径", "洋流对气候的影响", "气候变化与环流变化"] },
      { lesson: 53, title: "碳循环与气候模型",             keyPoints: ["碳循环的过程", "碳汇与碳源", "气候模型的类型", "模型验证与不确定性"] },
      { lesson: 54, title: "极地冰芯：十万年的气候档案",   keyPoints: ["冰芯的形成与分析", "冰芯中的气候信息", "古气候重建", "气候变化的历史证据"] },
      { lesson: 55, title: "地球临界点：不可逆变化的阈值", keyPoints: ["临界点的概念", "主要临界点识别", "临界点的影响", "阈值估算"] }
    ]
  },
  {
    chapter: 12, yearRange: "6年级", phase: "A-Level",
    title: "人文地理深化",
    lessons: [
      { lesson: 56, title: "移民与难民：驱动力与目的地",   keyPoints: ["移民的推拉因素", "难民危机的成因", "移民政策与管理", "移民的社会影响"] },
      { lesson: 57, title: "地缘政治：资源、领土与权力",   keyPoints: ["地缘政治的概念", "资源地缘政治", "领土争端", "地缘政治格局变化"] },
      { lesson: 58, title: "资源战争：水、石油、稀土",     keyPoints: ["资源稀缺与冲突", "石油地缘政治", "水资源冲突", "战略资源竞争"] },
      { lesson: 59, title: "城市贫民窟的非正规经济",       keyPoints: ["非正规经济的特征", "非正规经济的作用", "非正规经济面临的挑战", "政策响应"] },
      { lesson: 60, title: "土著权利与土地所有权",         keyPoints: ["土著土地权利", "土地侵占与保护", "土著知识与可持续发展", "案例研究"] }
    ]
  },
  {
    chapter: 13, yearRange: "7年级", phase: "A-Level",
    title: "环境政策与地缘政治",
    lessons: [
      { lesson: 61, title: "国际气候协议：《京都议定书》到《巴黎协定》", keyPoints: ["气候协议的发展历程", "京都议定书的机制", "巴黎协定的目标", "协议执行的挑战"] },
      { lesson: 62, title: "水资源外交：跨境河流的谈判",     keyPoints: ["跨境河流的治理", "水资源外交案例", "国际水法", "合作机制"] },
      { lesson: 63, title: "北极资源争夺：融冰与新边界",     keyPoints: ["北极资源潜力", "北极地缘政治", "国际法与北极", "环境与开发的平衡"] },
      { lesson: 64, title: "跨国污染责任：谁来承担",         keyPoints: ["跨国污染的类型", "污染责任的界定", "国际环境法", "案例分析"] },
      { lesson: 65, title: "环境正义：污染总在穷人家门口",   keyPoints: ["环境正义的概念", "环境不平等的表现", "环境正义运动", "政策响应"] }
    ]
  },
  {
    chapter: 14, yearRange: "7年级", phase: "A-Level",
    title: "研究与综合",
    lessons: [
      { lesson: 66, title: "独立研究课题设计",             keyPoints: ["研究问题的提出", "研究设计", "方法论选择", "研究计划制定"] },
      { lesson: 67, title: "混合方法研究：定量与定性",     keyPoints: ["定量研究方法", "定性研究方法", "混合方法设计", "三角验证"] },
      { lesson: 68, title: "地理写作：论证与证据",         keyPoints: ["学术写作规范", "论证结构", "证据使用", "批判性分析"] },
      { lesson: 69, title: "数据解读的批判性思维",         keyPoints: ["数据的局限性", "偏见识别", "替代解释", "反思性实践"] },
      { lesson: 70, title: "A-Level综合模拟",              keyPoints: ["知识整合", "综合题解题技巧", "时间管理", "考试策略"] }
    ]
  }
];

export const crossAnchors = [
  {
    concept: "坐标系与位置",
    linkedSubject: "math",
    linkedLesson: "坐标系与位置（第10课）",
    desc: "芬威克讲笛卡尔坐标系时，韦斯莱直接走进来说：'我刚讲过这个——数学的坐标系和地理的经纬度是同一件事的不同尺度表达'"
  },
  {
    concept: "大气压与高度",
    linkedSubject: "physics",
    linkedLesson: "气体定律（第2课）",
    desc: "哈珀演示气压随高度变化时，韦斯莱在窗外放飞了一个气象气球"
  },
  {
    concept: "生态系统物质循环",
    linkedSubject: "biology",
    linkedLesson: "生态系统（第5课）",
    desc: "斯普劳特介绍碳循环时，韦斯莱拿来了冰芯样本展示十万年的气候变化"
  },
  {
    concept: "全球气候变化",
    linkedSubject: "chemistry",
    linkedLesson: "温室气体（第8课）",
    desc: "斯内普讲解二氧化碳分子结构时，韦斯莱展示了工业革命以来的碳排放曲线"
  }
];

export const gradeMap = {
  1: [1, 2],
  2: [3, 4],
  3: [5, 6],
  4: [7, 8],
  5: [9, 10],
  6: [11, 12],
  7: [13, 14]
};

window.subject_geography = {
  subjectMeta,
  teachingStyle,
  syllabus,
  crossAnchors,
  lessonMap,
  questionBank,
  gradeMap
};

export default {
  subjectMeta,
  teachingStyle,
  syllabus,
  crossAnchors,
  questionBank,
  gradeMap,
  lessonMap
};

/**
 * subjects/geography.js
 * 麻瓜研究 · 地理分科
 * 教授：菲利克斯·韦斯利
 */

export const subjectMeta = {
  key: "geography",
  name: "地理",
  icon: "🗺️",
  professor: "菲利克斯·韦斯利",
  desc: "地图、气候、探险——麻瓜用两条腿走遍的世界",
  unlockGrade: 3,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle:    "拍手，「太棒了！你以后一定要选我的提高班！」",
  errorStyle:     "「哎，我下次讲清楚点」，自揽责任，画示意图",
  officeHours:    "随时，地图室全天开放",
  signature:      "把地图铺满整张桌子，让你亲手摸",
  prop:           "麻瓜指南针、地球仪、各种麻瓜地图",
  catchphrase:    "麻瓜用两条腿走遍了世界，你们觉得这算不算一种魔法？"
};

export const syllabus = [
  { chapter: 1, title: "地图与地球", lessons: [
    { lesson: 1, title: "地球的形状与大小", keyPoints: ["地球是近似球体（赤道略鼓）", "地球的大小：周长约4万千米", "麻瓜如何测量地球大小（埃拉托色尼）", "人造卫星对地理学的影响"] },
    { lesson: 2, title: "经纬度与地图", keyPoints: ["经线：连接南北两极的半圆", "纬线：平行于赤道的圆", "经纬度的读写方法", "地图的三要素：方向、比例尺、图例"] },
    { lesson: 3, title: "地图的种类与使用", keyPoints: ["地形图、政区图、气候图的区别", "比例尺的计算与应用", "等高线地形图的判读", "麻瓜探险家的制图历史"] }
  ]},
  { chapter: 2, title: "自然地理", lessons: [
    { lesson: 4, title: "板块运动与地形", keyPoints: ["板块构造学说", "六大板块的名称与位置", "地震和火山的分布规律", "山脉的形成与分布"] },
    { lesson: 5, title: "气候与气候类型", keyPoints: ["影响气候的因素：纬度、海陆、地形", "主要气候类型及分布", "气候与植被的关系", "气候变化与人类活动"] },
    { lesson: 6, title: "河流与水循环", keyPoints: ["水循环的过程", "世界主要河流及流向", "河流对文明的影响", "流域、分水岭的概念"] }
  ]},
  { chapter: 3, title: "人文地理", lessons: [
    { lesson: 7, title: "世界人口与城市", keyPoints: ["世界人口分布特点", "人口增长的历史趋势", "城市化进程", "人口问题与资源"] },
    { lesson: 8, title: "经济地理基础", keyPoints: ["农业的分布与自然条件", "工业的区位因素", "全球贸易路线", "麻瓜经济与资源分布"] },
    { lesson: 9, title: "洋流与气候", keyPoints: ["洋流的形成原因", "暖流与寒流对气候的影响", "北大西洋暖流与西欧气候", "麻瓜如何利用洋流航行"] }
  ]}
];

export const questionBank = [
  { lesson: 1, title: "地球的形状与大小", questions: [
    { type: "choice", difficulty: "basic", text: "地球的形状是：", options: ["A. 完美球体", "B. 赤道略扁的椭球体", "C. 赤道略鼓的椭球体", "D. 正方体"], answer: "C", knowledgePoint: "地球形状", analysis: "地球是两极稍扁、赤道略鼓的不规则椭球体，赤道半径（约6378km）略大于极半径（约6357km）。" },
    { type: "choice", difficulty: "medium", text: "最早科学估算地球周长的是：", options: ["A. 牛顿", "B. 埃拉托色尼", "C. 哥白尼", "D. 达芬奇"], answer: "B", knowledgePoint: "地球大小测量历史", analysis: "古希腊学者埃拉托色尼约在公元前240年，通过测量两地正午太阳角度差来计算地球周长，结果与现代测量值相当接近。" },
    { type: "choice", difficulty: "hard", text: "坐飞机从北京到纽约，最短路线应该：", options: ["A. 沿纬线向东飞", "B. 经过北极地区飞行", "C. 沿赤道飞行", "D. 向南经过太平洋"], answer: "B", knowledgePoint: "球面最短路线", analysis: "在球面上两点之间最短的路线是大圆弧，北京到纽约走北极上空的大圆弧比沿纬线飞行短得多，这是极地航线的原理。" }
  ]},
  { lesson: 5, title: "气候与气候类型", questions: [
    { type: "choice", difficulty: "basic", text: "影响气候最基本的因素是：", options: ["A. 纬度", "B. 洋流", "C. 地形", "D. 植被"], answer: "A", knowledgePoint: "影响气候的基本因素", analysis: "纬度是影响气候最基本的因素，决定了获得太阳辐射的多少，从而决定了温度带的分布。" },
    { type: "choice", difficulty: "medium", text: "地中海气候的特点是：", options: ["A. 全年多雨", "B. 夏干冬湿", "C. 全年干旱", "D. 全年高温"], answer: "B", knowledgePoint: "地中海气候特征", analysis: "地中海气候分布在南北纬30°~40°的大陆西岸，特点是夏季炎热干燥、冬季温和湿润（夏干冬湿）。" },
    { type: "choice", difficulty: "hard", text: "西欧气候温和湿润，与同纬度其他地区相比偏暖，主要原因是：", options: ["A. 地势低平", "B. 北大西洋暖流的影响", "C. 西风带", "D. B和C共同影响"], answer: "D", knowledgePoint: "西欧气候成因", analysis: "西欧气候温和受北大西洋暖流（增温增湿）和盛行西风（从大西洋带来湿润气流）共同影响，两者缺一不可。" }
  ]},
  { lesson: 9, title: "洋流与气候", questions: [
    { type: "choice", difficulty: "basic", text: "暖流经过的地区，气候特点是：", options: ["A. 增温增湿", "B. 降温减湿", "C. 增温减湿", "D. 不影响气候"], answer: "A", knowledgePoint: "暖流对气候的影响", analysis: "暖流水温高于流经海区，向大气输送热量和水汽，使沿岸气候增温增湿。" },
    { type: "choice", difficulty: "medium", text: "秘鲁寒流（洪堡寒流）沿南美洲西海岸流动，使当地：", options: ["A. 气候温暖湿润", "B. 形成沙漠（阿塔卡马沙漠）", "C. 海洋生物减少", "D. 降水增多"], answer: "B", knowledgePoint: "寒流与沙漠", analysis: "寒流经过使大气稳定，抑制对流和降水，加之当地位于副热带高压下，形成了阿塔卡马沙漠——世界最干旱的地区之一。" },
    { type: "choice", difficulty: "hard", text: "麻瓜古代航海家发现可以利用洋流和风向航行，这最能体现：", options: ["A. 麻瓜运气好", "B. 麻瓜通过观察自然规律解决实际问题", "C. 洋流是巫师控制的", "D. 帆船速度与洋流无关"], answer: "B", knowledgePoint: "麻瓜认识自然规律", analysis: "麻瓜古代航海家通过长期观察，总结洋流和风向规律，设计航线，这正是菲利克斯·韦斯利经常强调的——麻瓜用观察和智慧了解并利用自然。" }
  ]}
];

export const crossAnchors = [
  { concept: "正负数与海拔", linkedSubject: "math", linkedLesson: "第1课", desc: "芬威克讲正负数，最好的现实例子就是海拔——珠穆朗玛峰的高度和马里亚纳海沟的深度" },
  { concept: "板块运动与地球物理", linkedSubject: "physics", linkedLesson: "第4课", desc: "地震波是物理课里声波和机械波知识的地球尺度应用，两门课在这里相遇" },
  { concept: "地理与历史", linkedSubject: "history", linkedLesson: "第1课", desc: "英国工业革命为什么在英国发生？地理提供了一部分答案：岛国、丰富煤炭、便利水运" }
];

window.subject_geography = { subjectMeta, syllabus, questionBank, crossAnchors, teachingStyle };

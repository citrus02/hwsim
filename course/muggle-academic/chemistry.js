/**
 * chemistry.js
 * 麻瓜学术 · 化学分科
 * 教授：普里姆罗斯·斯普劳特
 *
 * 包含：
 *   subjectMeta      科目元数据
 *   syllabus         课程大纲（章节+知识点）
 *   crossAnchors     跨学科锚点
 *   teachingStyle    教学风格常量
 */

import { lessonMap } from './chemistry-lesson.js';
import { questionBank } from './chemistry-questionBank.js';

export const subjectMeta = {
  key: "chemistry",
  name: "化学",
  icon: "🧪",
  professor: "普里姆罗斯·斯普劳特",
  desc: "元素、反应——和魔药学共享秘密的学科",
  unlockGrade: 3,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle: "点头微笑，说\"很好，像培育曼德拉草一样细心\"",
  errorStyle: "轻轻摇头，说\"别急，魔药也不是一次就能熬好的\"",
  officeHours: "周三下午3-5点，温室旁边的办公室",
  catchphrase: "记住，无论是魔药还是化学，耐心都是最好的试剂",
  teachingMethod: "常将化学原理与魔药课内容联系讲解"
};

export const syllabus = [
  {
    chapter: 1,
    year: 1,
    title: "开启化学之门",
    lessons: [1, 2, 3],
    keyPoints: ["化学的研究对象", "物理变化与化学变化", "化学实验基本操作"]
  },
  {
    chapter: 2,
    year: 1,
    title: "我们周围的空气",
    lessons: [4, 5, 6, 7],
    keyPoints: ["空气的组成", "氧气的性质与制取", "燃烧与灭火"]
  },
  {
    chapter: 3,
    year: 1,
    title: "物质构成的奥秘",
    lessons: [8, 9, 10, 11],
    keyPoints: ["分子与原子", "原子结构", "元素", "离子"]
  },
  {
    chapter: 4,
    year: 1,
    title: "自然界的水",
    lessons: [12, 13, 14],
    keyPoints: ["水的组成", "水的净化", "爱护水资源"]
  },
  {
    chapter: 5,
    year: 1,
    title: "化学方程式",
    lessons: [15, 16, 17],
    keyPoints: ["质量守恒定律", "化学方程式书写", "化学计算"]
  },
  {
    chapter: 6,
    year: 1,
    title: "碳和碳的氧化物",
    lessons: [18, 19, 20],
    keyPoints: ["碳的单质", "二氧化碳制取", "CO与CO₂性质"]
  },
  {
    chapter: 7,
    year: 1,
    title: "期中复习与考试",
    lessons: [21, 22, 23, 24, 25],
    keyPoints: ["专题复习", "综合练习", "期中考试"]
  },
  {
    chapter: 8,
    year: 2,
    title: "燃料及其利用",
    lessons: [26, 27, 28],
    keyPoints: ["燃烧与灭火", "燃料与热量", "环境影响"]
  },
  {
    chapter: 9,
    year: 2,
    title: "金属和金属材料",
    lessons: [29, 30, 31],
    keyPoints: ["金属材料", "金属化学性质", "金属资源保护"]
  },
  {
    chapter: 10,
    year: 2,
    title: "溶液",
    lessons: [32, 33, 34],
    keyPoints: ["溶液形成", "溶解度", "溶质质量分数"]
  },
  {
    chapter: 11,
    year: 2,
    title: "酸和碱",
    lessons: [35, 36, 37],
    keyPoints: ["常见酸碱", "中和反应", "酸碱性意义"]
  },
  {
    chapter: 12,
    year: 2,
    title: "盐 化肥",
    lessons: [38, 39],
    keyPoints: ["常见盐", "化学肥料"]
  },
  {
    chapter: 13,
    year: 2,
    title: "第二学期期中复习与考试",
    lessons: [40, 41, 42, 43, 44],
    keyPoints: ["专题复习", "期中考试"]
  },
  {
    chapter: 14,
    year: 2,
    title: "专题复习",
    lessons: [45, 46, 47, 48],
    keyPoints: ["实验专题", "计算专题", "推断专题", "化学与生活"]
  },
  {
    chapter: 15,
    year: 2,
    title: "总复习",
    lessons: [49, 50, 51, 52, 53],
    keyPoints: ["物质构成", "化学反应", "常见物质", "实验探究", "易错点"]
  },
  {
    chapter: 16,
    year: 2,
    title: "期末复习与考试",
    lessons: [54, 55, 56],
    keyPoints: ["第一学期内容总复习", "第二学期内容总复习", "期末考试"]
  }
];

export const crossAnchors = [
  {
    concept: "光合作用是化学反应",
    linkedSubject: "biology",
    linkedLesson: "叶与光合作用（第17课）",
    desc: "塔维什描述光合作用「植物吸收CO₂制造有机物」时，普里姆罗斯从化学角度补充：这是一个吸热反应，光能转化为化学能储存在有机物分子中——这是化学能与生命的接口"
  },
  {
    concept: "溶液浓度与细胞液渗透",
    linkedSubject: "biology",
    linkedLesson: "植物细胞与动物细胞的比较（第9课）",
    desc: "化学第10章讲溶质质量分数时，塔维什会指出：细胞液本质上就是一种溶液，浓度决定了细胞从环境中吸水还是失水——化学概念直接解释了生命现象"
  },
  {
    concept: "碳循环与温室效应",
    linkedSubject: "geography",
    linkedLesson: "人类活动与气候（第56课）",
    desc: "普里姆罗斯讲碳的化合物（CO₂）时，地理课第56课「全球气候变暖」会从宏观尺度呈现化学变化的地理后果——课堂里化学方程式的箭头，指向了整个地球的气候系统"
  },
  {
    concept: "燃烧反应与热能输出",
    linkedSubject: "physics",
    linkedLesson: "燃料燃烧与热能（第26课）",
    desc: "化学第8章「燃料及其利用」与物理能量转化在此交汇：化学描述燃烧反应的物质变化，物理解释热能如何做功——同一个现象的两种语言"
  }
];

export { lessonMap, questionBank };

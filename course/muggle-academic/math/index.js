/**
 * math.js
 * 麻瓜学术系 · 数学
 * 教授：奥古斯都·芬威克（Augustus Fenwick）
 *
 * 课程按学年拆分在 ./yearN/ 下。当前已接入 Year 1：136课。
 */

import { syllabus as year1Syllabus } from './year1/index.js';
import { lessonMap as year1LessonMap } from './year1/lesson.js';
import { questionBank as year1QuestionBank } from './year1/question-bank.js';
import { registerSubjectData } from '../../subject-registry.js';

export const subjectMeta = {
  "key": "math",
  "name": "数学",
  "icon": "🔢",
  "professor": "奥古斯都·芬威克",
  "desc": "数字是宇宙的骨架，麻瓜花了几千年把它读清楚。这门课教你用同样的方式读。",
  "unlockGrade": 1,
  "housePointsPerLesson": {
    "O": 6,
    "E": 5,
    "A": 3,
    "P": 1,
    "D": -1,
    "T": -3
  }
};

export const teachingStyle = {
  "praiseStyle": "停顿五秒，拍讲台一下，不说话",
  "errorStyle": "不批评，让回去看定义",
  "officeHours": "周二下午",
  "signature": "黑板右上角永远留一道未解题",
  "prop": "七十年代麻瓜计算器，按键磨白",
  "catchphrase": "这不是在算数，这是在读宇宙的语言。"
};

export const syllabus = [
  ...year1Syllabus
];

export const lessonMap = {
  ...year1LessonMap
};

export const questionBank = [
  ...year1QuestionBank
];

export const crossAnchors = [
  {
    "concept": "比与比例",
    "linkedSubject": "chemistry",
    "linkedLesson": "魔药配方计算（第3课）",
    "desc": "普里姆罗斯·斯普劳特在化学课讲魔药成分配比时——2份曼德拉草、1份蛇皮——用的正是芬威克在第5课教的比的化简方法。两门课在这里完全重叠。"
  },
  {
    "concept": "坐标系",
    "linkedSubject": "geography",
    "linkedLesson": "地图坐标与经纬度（第2课）",
    "desc": "韦斯莱讲经纬度时在黑板上画了一个坐标系，芬威克看到了直接走进去说：'我刚讲过这个。'——两门课的坐标系概念是同一件事。"
  },
  {
    "concept": "三角学",
    "linkedSubject": "astronomy",
    "linkedLesson": "天体坐标系（第4课）",
    "desc": "天文学课计算星体仰角时直接用到了sin和cos。芬威克把天文学列为数学的一个分支，天文学教授对此保持沉默。"
  },
  {
    "concept": "微积分：变化率",
    "linkedSubject": "physics",
    "linkedLesson": "速度与加速度（第3课）",
    "desc": "穆迪讲速度与加速度时在黑板上写了 a = Δv/Δt。芬威克第41课讲变化率时写了同样的符号。两人知道，但从未在课上相互提及。"
  },
  {
    "concept": "数学证明",
    "linkedSubject": "civics",
    "linkedLesson": "论证结构（第8课）",
    "desc": "沙克博特在哲学课讲论证的结构——前提、推论、结论——和芬威克的第24课逻辑推理用的是同一个框架，只是一个用数字，一个用语言。"
  }
];

const subjectData = {
  subjectMeta,
  teachingStyle,
  syllabus,
  crossAnchors,
  lessonMap,
  questionBank
};

registerSubjectData(subjectMeta.key, subjectData);
window.subject_math = subjectData;

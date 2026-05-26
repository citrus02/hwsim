import { FLIGHT_LESSON_PLAN, lessonMap } from './flight-lesson.js';
import { questionBank } from './flight-questionBank.js';
import { registerSubjectData } from '../subject-registry.js';

export const subjectMeta = {
  key: "flight",
  name: "飞行课",
  icon: "🧹",
  professor: "罗兰达·霍琦",
  desc: "扫帚飞行、空中判断与安全控制训练。动作要准，胆量要听从判断。",
  unlockGrade: 1,
  housePointsPerLesson: { O: 7, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle: "哨声短促地一响，霍琦教授点头：“干净。再来一次，记住这个感觉。”",
  errorStyle: "霍琦教授立刻让你降落，指出你的手腕、重心和视线分别出了什么问题。",
  officeHours: "魁地奇球场边的器材室。训练后，霍琦教授会检查扫帚、护具和你的路线记录。",
  signature: "金色眼睛锐利，银哨从不离手，说话像判罚一样简洁。",
  prop: "学校旧扫帚、银哨、护具和一卷写满路线的羊皮纸。",
  catchphrase: "先控制，再加速。"
};

export const syllabus = [
  {
    chapter: 1,
    title: "一年级 · 基础飞行训练（34课）",
    lessons: FLIGHT_LESSON_PLAN
      .filter(item => item.year === 1)
      .map(item => ({ lesson: item.lesson, title: item.title, keyPoints: item.focus }))
  },
  {
    chapter: 2,
    title: "二年级 · 进阶飞行与魁地奇基础（34课）",
    lessons: FLIGHT_LESSON_PLAN
      .filter(item => item.year === 2)
      .map(item => ({ lesson: item.lesson, title: item.title, keyPoints: item.focus }))
  }
];

export const crossAnchors = [
  {
    concept: "空中反应与防御",
    linkedSubject: "黑魔法防御术",
    linkedLesson: "威胁判断",
    desc: "飞行中的避让训练和防御术一样，都是先判断威胁，再选择最小风险动作。"
  },
  {
    concept: "风向与地理",
    linkedSubject: "麻瓜研究·地理",
    linkedLesson: "气候与风",
    desc: "读风能力能帮助你在复杂天气里稳定路线。"
  },
  {
    concept: "动作节奏与魔咒",
    linkedSubject: "魔咒学",
    linkedLesson: "手势控制",
    desc: "飞行和施咒都需要动作清楚、节奏稳定、意图明确。"
  },
  {
    concept: "魁地奇与团队判断",
    linkedSubject: "保护神奇动物",
    linkedLesson: "安全距离与信任",
    desc: "飞行协作和照顾危险生物一样，都要求先读懂对方的位置和状态。"
  }
];

export const professorComments = {
  O: [
    "干净利落。你不是在赌运气，你是在控制扫帚。",
    "很好。动作小，判断快，落地稳。",
    "O。你今天每一次修正都提前了半秒。"
  ],
  E: [
    "很好，只差一点稳定性。别急着加速。",
    "E。路线漂亮，最后降落再收干净一点。",
    "判断正确，动作还可以更省。"
  ],
  A: [
    "通过。你知道该怎么做，但身体还没完全记住。",
    "A。基础够了，下次把手腕放松。",
    "能飞完路线，但别让紧张替你决定动作。"
  ],
  P: [
    "你有几个动作是对的，但顺序乱了。重新练降落。",
    "P。先慢下来，飞行课不是抢时间。",
    "方向对，控制不足。下次从悬停开始。"
  ],
  D: [
    "太冒险。你跳过了判断，直接把自己交给扫帚。",
    "D。今天的问题是急，不是不会。",
    "降落前失去控制，这不合格。"
  ],
  T: [
    "停下。你今天不能继续飞。先学会听指令。",
    "T。每一个错误都在变成下一个危险。",
    "这不是勇敢，是鲁莽。下课后留下。"
  ]
};

export const quickStudyEvents = [
  "你在低空悬停了整整一分钟，霍琦教授吹了一声短哨表示通过。",
  "你练习了三次安全降落，最后一次终于没有踉跄。",
  "你学会了在侧风里保持扫帚头稳定。",
  "你完成了一组基础转弯训练。",
  "你把急停动作练到不再把自己甩出去。",
  "你在障碍训练后主动回到安全高度。",
  "你和同伴完成了一次平稳的空中传递。",
  "你的飞行路线比上次更干净了。",
  "你在魁地奇球场外圈完成了长距离返航。",
  "霍琦教授让你重飞一段路线，这一次你的判断明显提前了。"
];

const subjectData = {
  subjectMeta,
  teachingStyle,
  syllabus,
  crossAnchors,
  professorComments,
  quickStudyEvents,
  lessonMap,
  questionBank
};

registerSubjectData(subjectMeta.key, subjectData);
window.subject_flight = subjectData;

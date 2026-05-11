import { APPARITION_LESSON_PLAN, lessonMap } from './apparition-lesson.js';
import { questionBank } from './apparition-questionBank.js';

export const subjectMeta = {
  key: "apparition",
  name: "幻影移形",
  icon: "💨",
  professor: "威斯考特教授",
  desc: "目标、决心与从容的高阶移动训练。完整抵达，比消失更重要。",
  unlockGrade: 5,
  housePointsPerLesson: { O: 8, E: 6, A: 3, P: 1, D: -2, T: -5 }
};

export const teachingStyle = {
  praiseStyle: "威斯考特教授看了看你抵达的位置，只说：“完整，准确，清醒。很好。”",
  errorStyle: "他没有提高音量，只让你重复描述目标，直到你意识到自己在哪里模糊了。",
  officeHours: "礼堂清场后的半小时，他会留下来给高年级学生做定位复盘。",
  signature: "声音平稳，动作克制，怀表链总是垂在长袖前。",
  prop: "粉笔圆圈、怀表、目标木环和一叠事故记录表。",
  catchphrase: "不确定，就不要移动。"
};

export const syllabus = [
  {
    chapter: 1,
    title: "五年级 · 幻影移形许可预备（34课）",
    lessons: APPARITION_LESSON_PLAN.map(item => ({
      lesson: item.lesson,
      title: item.title,
      keyPoints: item.focus
    }))
  }
];

export const crossAnchors = [
  {
    concept: "空间目标与算术占卜",
    linkedSubject: "算术占卜",
    linkedLesson: "定位与概率",
    desc: "精确目标需要像计算一样排除模糊变量。"
  },
  {
    concept: "从容与防御术",
    linkedSubject: "黑魔法防御术",
    linkedLesson: "压力下决策",
    desc: "压力越大，越需要先恢复判断能力。"
  },
  {
    concept: "身体边界与变形术",
    linkedSubject: "变形术",
    linkedLesson: "身体结构",
    desc: "理解身体完整性有助于避免分体风险。"
  },
  {
    concept: "保密法与麻瓜研究",
    linkedSubject: "麻瓜研究",
    linkedLesson: "公共空间规则",
    desc: "合法移形不仅看技术，也看场合是否允许。"
  }
];

export const professorComments = {
  O: [
    "O。你抵达得很安静，这通常说明你真的掌握了。",
    "完整、准确、没有多余魔力波动。很好。",
    "你中途有干扰，但目标没有散。满分。"
  ],
  E: [
    "E。目标清楚，抵达检查再快一点。",
    "很好。你已经知道什么时候该继续，什么时候该停。",
    "只差一点从容。不要急着证明。"
  ],
  A: [
    "通过。三要素都在，但还不够稳定。",
    "A。你能抵达，不过目标细节需要更清楚。",
    "合格。下次把中止判断做得更早。"
  ],
  P: [
    "目标不够具体。你移动前其实已经知道自己不确定。",
    "P。决心有，从容不足。",
    "你抵达了，但过程太乱。重新练短距离。"
  ],
  D: [
    "D。你把希望当成了目标。",
    "边界不清，这是严重问题。今天不要继续。",
    "你没有完成安全检查，不合格。"
  ],
  T: [
    "停止训练。强行继续只会制造事故。",
    "T。你今天的每一步都在忽视中止信号。",
    "这不是失误，是危险。下课后留下复盘。"
  ]
};

export const quickStudyEvents = [
  "你在粉笔圆圈间练习短距离定位，目标比上次清楚了。",
  "你主动中止了一次模糊目标，威斯考特教授点头表示认可。",
  "你用三次呼吸把注意力重新拉回目标。",
  "你完成了一次携带空布袋的短距移形。",
  "你抵达后认真检查了身体和随身物品。",
  "你复盘了一次失败，找到了分心的具体瞬间。",
  "你能更准确地描述不可见目标的细节。",
  "你的三要素练习更稳定了。",
  "你在室外目标区先排除了危险落点，再开始准备。",
  "你判断出一个公共场所目标不适合移形，教授给了你额外加分。"
];

window.subject_apparition = {
  subjectMeta,
  teachingStyle,
  syllabus,
  crossAnchors,
  professorComments,
  quickStudyEvents,
  lessonMap,
  questionBank
};

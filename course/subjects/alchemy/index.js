import { ALCHEMY_LESSON_PLAN, lessonMap } from './lesson.js';
import { questionBank } from './question-bank.js';
import { registerSubjectData } from '../../subject-registry.js';

export const subjectMeta = {
  key: "alchemy",
  name: "炼金术",
  icon: "⚜️",
  professor: "尼可·勒梅通信课程",
  desc: "物质转化、炼金符号、守恒、坩埚阵列与高阶伦理课程。",
  unlockGrade: 6,
  housePointsPerLesson: { O: 8, E: 6, A: 3, P: 1, D: -2, T: -4 }
};

export const teachingStyle = {
  praiseStyle: "红墨水在页边写下：守恒成立。可以进入下一步。",
  errorStyle: "羊皮纸上的批注只有一行：记录不足，结论无效。",
  officeHours: "炼金术课后复盘时间，教授会抽查你的课堂记录和错题。",
  signature: "炼金术课堂强调循序渐进，漂亮结果必须能被解释和重复。",
  prop: "炼金术课本、课堂记录、练习器材和错题羊皮纸。",
  catchphrase: "符号推理先于结果。"
};

export const syllabus = [
  {
    "chapter": 6,
    "title": "六年级 · 炼金术（34课）",
    "lessons": [
      {
        "lesson": 1,
        "title": "六年级第1课：催化材料·导入",
        "keyPoints": [
          "催化材料基础",
          "导入控制",
          "考试应用"
        ]
      },
      {
        "lesson": 2,
        "title": "六年级第2课：贤者石史·演示",
        "keyPoints": [
          "贤者石史识别",
          "贤者石史误差",
          "风险记录"
        ]
      },
      {
        "lesson": 3,
        "title": "六年级第3课：转化失败·练习",
        "keyPoints": [
          "转化失败原理",
          "材料守恒",
          "考试应用"
        ]
      },
      {
        "lesson": 4,
        "title": "六年级第4课：炼金阵列·诊断",
        "keyPoints": [
          "诊断目标",
          "诊断控制",
          "风险记录"
        ]
      },
      {
        "lesson": 5,
        "title": "六年级第5课：魔药交叉·应用",
        "keyPoints": [
          "魔药交叉条件",
          "魔药交叉误差",
          "考试应用"
        ]
      },
      {
        "lesson": 6,
        "title": "六年级第6课：魔文交叉·复盘",
        "keyPoints": [
          "魔文交叉边界",
          "材料守恒",
          "风险记录"
        ]
      },
      {
        "lesson": 7,
        "title": "六年级第7课：生命伦理·导入",
        "keyPoints": [
          "生命伦理基础",
          "导入控制",
          "考试应用"
        ]
      },
      {
        "lesson": 8,
        "title": "六年级第8课：N.E.W.T.实验·演示",
        "keyPoints": [
          "N.E.W.T.实验识别",
          "N.E.W.T.实验误差",
          "风险记录"
        ]
      },
      {
        "lesson": 9,
        "title": "六年级第9课：毕业展示·练习",
        "keyPoints": [
          "毕业展示原理",
          "材料守恒",
          "考试应用"
        ]
      },
      {
        "lesson": 10,
        "title": "六年级第10课：炼金符号·诊断",
        "keyPoints": [
          "诊断目标",
          "诊断控制",
          "风险记录"
        ]
      },
      {
        "lesson": 11,
        "title": "六年级第11课：金属七阶·应用",
        "keyPoints": [
          "金属七阶条件",
          "金属七阶误差",
          "考试应用"
        ]
      },
      {
        "lesson": 12,
        "title": "六年级第12课：守恒原则·复盘",
        "keyPoints": [
          "守恒原则边界",
          "材料守恒",
          "风险记录"
        ]
      },
      {
        "lesson": 13,
        "title": "六年级第13课：催化材料·导入",
        "keyPoints": [
          "催化材料基础",
          "导入控制",
          "考试应用"
        ]
      },
      {
        "lesson": 14,
        "title": "六年级第14课：贤者石史·演示",
        "keyPoints": [
          "贤者石史识别",
          "贤者石史误差",
          "风险记录"
        ]
      },
      {
        "lesson": 15,
        "title": "六年级第15课：转化失败·练习",
        "keyPoints": [
          "转化失败原理",
          "材料守恒",
          "考试应用"
        ]
      },
      {
        "lesson": 16,
        "title": "六年级第16课：炼金阵列·诊断",
        "keyPoints": [
          "诊断目标",
          "诊断控制",
          "风险记录"
        ]
      },
      {
        "lesson": 17,
        "title": "六年级第17课：魔药交叉·应用",
        "keyPoints": [
          "魔药交叉条件",
          "魔药交叉误差",
          "考试应用"
        ]
      },
      {
        "lesson": 18,
        "title": "六年级第18课：魔文交叉·复盘",
        "keyPoints": [
          "魔文交叉边界",
          "材料守恒",
          "风险记录"
        ]
      },
      {
        "lesson": 19,
        "title": "六年级第19课：生命伦理·导入",
        "keyPoints": [
          "生命伦理基础",
          "导入控制",
          "考试应用"
        ]
      },
      {
        "lesson": 20,
        "title": "六年级第20课：N.E.W.T.实验·演示",
        "keyPoints": [
          "N.E.W.T.实验识别",
          "N.E.W.T.实验误差",
          "风险记录"
        ]
      },
      {
        "lesson": 21,
        "title": "六年级第21课：毕业展示·练习",
        "keyPoints": [
          "毕业展示原理",
          "材料守恒",
          "考试应用"
        ]
      },
      {
        "lesson": 22,
        "title": "六年级第22课：炼金符号·诊断",
        "keyPoints": [
          "诊断目标",
          "诊断控制",
          "风险记录"
        ]
      },
      {
        "lesson": 23,
        "title": "六年级第23课：金属七阶·应用",
        "keyPoints": [
          "金属七阶条件",
          "金属七阶误差",
          "考试应用"
        ]
      },
      {
        "lesson": 24,
        "title": "六年级第24课：守恒原则·复盘",
        "keyPoints": [
          "守恒原则边界",
          "材料守恒",
          "风险记录"
        ]
      },
      {
        "lesson": 25,
        "title": "六年级第25课：催化材料·导入",
        "keyPoints": [
          "催化材料基础",
          "导入控制",
          "考试应用"
        ]
      },
      {
        "lesson": 26,
        "title": "六年级第26课：贤者石史·演示",
        "keyPoints": [
          "贤者石史识别",
          "贤者石史误差",
          "风险记录"
        ]
      },
      {
        "lesson": 27,
        "title": "六年级第27课：转化失败·练习",
        "keyPoints": [
          "转化失败原理",
          "材料守恒",
          "考试应用"
        ]
      },
      {
        "lesson": 28,
        "title": "六年级第28课：炼金阵列·诊断",
        "keyPoints": [
          "诊断目标",
          "诊断控制",
          "风险记录"
        ]
      },
      {
        "lesson": 29,
        "title": "六年级第29课：魔药交叉·应用",
        "keyPoints": [
          "魔药交叉条件",
          "魔药交叉误差",
          "考试应用"
        ]
      },
      {
        "lesson": 30,
        "title": "六年级第30课：魔文交叉·复盘",
        "keyPoints": [
          "魔文交叉边界",
          "材料守恒",
          "风险记录"
        ]
      },
      {
        "lesson": 31,
        "title": "六年级第31课：生命伦理·导入",
        "keyPoints": [
          "生命伦理基础",
          "导入控制",
          "考试应用"
        ]
      },
      {
        "lesson": 32,
        "title": "六年级第32课：N.E.W.T.实验·演示",
        "keyPoints": [
          "N.E.W.T.实验识别",
          "N.E.W.T.实验误差",
          "风险记录"
        ]
      },
      {
        "lesson": 33,
        "title": "六年级第33课：毕业展示·练习",
        "keyPoints": [
          "毕业展示原理",
          "材料守恒",
          "考试应用"
        ]
      },
      {
        "lesson": 34,
        "title": "六年级第34课：炼金符号·诊断",
        "keyPoints": [
          "诊断目标",
          "诊断控制",
          "风险记录"
        ]
      }
    ]
  },
  {
    "chapter": 7,
    "title": "七年级 · 炼金术（34课）",
    "lessons": [
      {
        "lesson": 35,
        "title": "七年级第1课：炼金阵列·导入",
        "keyPoints": [
          "炼金阵列边界",
          "材料守恒",
          "错误复盘"
        ]
      },
      {
        "lesson": 36,
        "title": "七年级第2课：魔药交叉·演示",
        "keyPoints": [
          "魔药交叉基础",
          "演示控制",
          "魔药交叉复查"
        ]
      },
      {
        "lesson": 37,
        "title": "七年级第3课：魔文交叉·练习",
        "keyPoints": [
          "魔文交叉识别",
          "魔文交叉误差",
          "错误复盘"
        ]
      },
      {
        "lesson": 38,
        "title": "七年级第4课：生命伦理·诊断",
        "keyPoints": [
          "生命伦理原理",
          "材料守恒",
          "生命伦理复查"
        ]
      },
      {
        "lesson": 39,
        "title": "七年级第5课：N.E.W.T.实验·应用",
        "keyPoints": [
          "应用目标",
          "应用控制",
          "错误复盘"
        ]
      },
      {
        "lesson": 40,
        "title": "七年级第6课：毕业展示·复盘",
        "keyPoints": [
          "毕业展示条件",
          "毕业展示误差",
          "毕业展示复查"
        ]
      },
      {
        "lesson": 41,
        "title": "七年级第7课：炼金符号·导入",
        "keyPoints": [
          "炼金符号边界",
          "材料守恒",
          "错误复盘"
        ]
      },
      {
        "lesson": 42,
        "title": "七年级第8课：金属七阶·演示",
        "keyPoints": [
          "金属七阶基础",
          "演示控制",
          "金属七阶复查"
        ]
      },
      {
        "lesson": 43,
        "title": "七年级第9课：守恒原则·练习",
        "keyPoints": [
          "守恒原则识别",
          "守恒原则误差",
          "错误复盘"
        ]
      },
      {
        "lesson": 44,
        "title": "七年级第10课：催化材料·诊断",
        "keyPoints": [
          "催化材料原理",
          "材料守恒",
          "催化材料复查"
        ]
      },
      {
        "lesson": 45,
        "title": "七年级第11课：贤者石史·应用",
        "keyPoints": [
          "应用目标",
          "应用控制",
          "错误复盘"
        ]
      },
      {
        "lesson": 46,
        "title": "七年级第12课：转化失败·复盘",
        "keyPoints": [
          "转化失败条件",
          "转化失败误差",
          "转化失败复查"
        ]
      },
      {
        "lesson": 47,
        "title": "七年级第13课：炼金阵列·导入",
        "keyPoints": [
          "炼金阵列边界",
          "材料守恒",
          "错误复盘"
        ]
      },
      {
        "lesson": 48,
        "title": "七年级第14课：魔药交叉·演示",
        "keyPoints": [
          "魔药交叉基础",
          "演示控制",
          "魔药交叉复查"
        ]
      },
      {
        "lesson": 49,
        "title": "七年级第15课：魔文交叉·练习",
        "keyPoints": [
          "魔文交叉识别",
          "魔文交叉误差",
          "错误复盘"
        ]
      },
      {
        "lesson": 50,
        "title": "七年级第16课：生命伦理·诊断",
        "keyPoints": [
          "生命伦理原理",
          "材料守恒",
          "生命伦理复查"
        ]
      },
      {
        "lesson": 51,
        "title": "七年级第17课：N.E.W.T.实验·应用",
        "keyPoints": [
          "应用目标",
          "应用控制",
          "错误复盘"
        ]
      },
      {
        "lesson": 52,
        "title": "七年级第18课：毕业展示·复盘",
        "keyPoints": [
          "毕业展示条件",
          "毕业展示误差",
          "毕业展示复查"
        ]
      },
      {
        "lesson": 53,
        "title": "七年级第19课：炼金符号·导入",
        "keyPoints": [
          "炼金符号边界",
          "材料守恒",
          "错误复盘"
        ]
      },
      {
        "lesson": 54,
        "title": "七年级第20课：金属七阶·演示",
        "keyPoints": [
          "金属七阶基础",
          "演示控制",
          "金属七阶复查"
        ]
      },
      {
        "lesson": 55,
        "title": "七年级第21课：守恒原则·练习",
        "keyPoints": [
          "守恒原则识别",
          "守恒原则误差",
          "错误复盘"
        ]
      },
      {
        "lesson": 56,
        "title": "七年级第22课：催化材料·诊断",
        "keyPoints": [
          "催化材料原理",
          "材料守恒",
          "催化材料复查"
        ]
      },
      {
        "lesson": 57,
        "title": "七年级第23课：贤者石史·应用",
        "keyPoints": [
          "应用目标",
          "应用控制",
          "错误复盘"
        ]
      },
      {
        "lesson": 58,
        "title": "七年级第24课：转化失败·复盘",
        "keyPoints": [
          "转化失败条件",
          "转化失败误差",
          "转化失败复查"
        ]
      },
      {
        "lesson": 59,
        "title": "七年级第25课：炼金阵列·导入",
        "keyPoints": [
          "炼金阵列边界",
          "材料守恒",
          "错误复盘"
        ]
      },
      {
        "lesson": 60,
        "title": "七年级第26课：魔药交叉·演示",
        "keyPoints": [
          "魔药交叉基础",
          "演示控制",
          "魔药交叉复查"
        ]
      },
      {
        "lesson": 61,
        "title": "七年级第27课：魔文交叉·练习",
        "keyPoints": [
          "魔文交叉识别",
          "魔文交叉误差",
          "错误复盘"
        ]
      },
      {
        "lesson": 62,
        "title": "七年级第28课：生命伦理·诊断",
        "keyPoints": [
          "生命伦理原理",
          "材料守恒",
          "生命伦理复查"
        ]
      },
      {
        "lesson": 63,
        "title": "七年级第29课：N.E.W.T.实验·应用",
        "keyPoints": [
          "应用目标",
          "应用控制",
          "错误复盘"
        ]
      },
      {
        "lesson": 64,
        "title": "七年级第30课：毕业展示·复盘",
        "keyPoints": [
          "毕业展示条件",
          "毕业展示误差",
          "毕业展示复查"
        ]
      },
      {
        "lesson": 65,
        "title": "七年级第31课：炼金符号·导入",
        "keyPoints": [
          "炼金符号边界",
          "材料守恒",
          "错误复盘"
        ]
      },
      {
        "lesson": 66,
        "title": "七年级第32课：金属七阶·演示",
        "keyPoints": [
          "金属七阶基础",
          "演示控制",
          "金属七阶复查"
        ]
      },
      {
        "lesson": 67,
        "title": "七年级第33课：守恒原则·练习",
        "keyPoints": [
          "守恒原则识别",
          "守恒原则误差",
          "错误复盘"
        ]
      },
      {
        "lesson": 68,
        "title": "七年级第34课：催化材料·诊断",
        "keyPoints": [
          "催化材料原理",
          "材料守恒",
          "催化材料复查"
        ]
      }
    ]
  }
];

export const crossAnchors = [
  { concept: '记录与复盘', linkedSubject: '麻瓜研究', linkedLesson: '学习方法', desc: '稳定进步需要记录错误，而不是只记得成功。' },
  { concept: '安全边界', linkedSubject: '黑魔法防御术', linkedLesson: '风险判断', desc: '任何魔法训练都要先判断风险，再选择动作。' },
  { concept: '考试应用', linkedSubject: '魔法史', linkedLesson: 'O.W.L.制度', desc: '课堂能力最终要能在正式考核里稳定呈现。' }
];

export const professorComments = {
  O: ["红墨水在页边写下：守恒成立。可以进入下一步。", 'O。你把本课重点处理得很稳。', '满分，课堂记录和结果能互相证明。'],
  E: ['E。整体很好，只差一点细节稳定。', '优秀。下一次把检查提前。', '判断正确，动作还可以更省。'],
  A: ['通过。基础成立，但还需要更多重复。', 'A。你完成了要求，复盘还可以更具体。', '合格。下次先慢一点。'],
  P: ['P。方向对，但步骤不够稳。', '你知道答案，但执行顺序乱了。', '先回到基础训练。'],
  D: ["羊皮纸上的批注只有一行：记录不足，结论无效。", 'D。问题不在不会，而在你跳过了该停下的地方。', '停止加难度，先把错误链条写清楚。'],
  T: ['T。今天不能继续训练。', '这是危险，不是勇敢。', '下课后留下，把错误链条写清楚。']
};

export const quickStudyEvents = [
  {
    trigger: "研究催化材料",
    effect: "你研究了炼金术的催化材料，了解了它们在转化过程中的作用。",
    skill: "催化材料",
    grade: 6
  },
  {
    trigger: "学习贤者石历史",
    effect: "你学习了贤者石的历史，了解了它在炼金术发展中的重要地位。",
    skill: "贤者石史",
    grade: 6
  },
  {
    trigger: "分析转化失败",
    effect: "你分析了一次转化失败的案例，理解了守恒原则的重要性。",
    skill: "转化分析",
    grade: 6
  },
  {
    trigger: "构建炼金阵列",
    effect: "你学习了如何构建炼金阵列，掌握了阵列设计的基本原则。",
    skill: "炼金阵列",
    grade: 6
  },
  {
    trigger: "研究魔药交叉",
    effect: "你研究了炼金术与魔药学的交叉应用，发现了有趣的关联。",
    skill: "魔药交叉",
    grade: 6
  },
  {
    trigger: "研究魔文交叉",
    effect: "你研究了炼金术与古代魔文的交叉应用，理解了符号的重要性。",
    skill: "魔文交叉",
    grade: 6
  },
  {
    trigger: "学习生命伦理",
    effect: "你学习了炼金术的生命伦理原则，理解了物质转化的道德边界。",
    skill: "生命伦理",
    grade: 6
  },
  {
    trigger: "准备N.E.W.T.实验",
    effect: "你开始准备N.E.W.T.级别的炼金实验，制定了详细的计划。",
    skill: "N.E.W.T.实验",
    grade: 6
  },
  {
    trigger: "设计毕业展示",
    effect: "你设计了毕业展示的炼金项目，展示了综合能力。",
    skill: "毕业展示",
    grade: 6
  },
  {
    trigger: "学习炼金符号",
    effect: "你学习了炼金符号的含义，理解了它们的象征意义。",
    skill: "炼金符号",
    grade: 6
  },
  {
    trigger: "研究金属七阶",
    effect: "你研究了金属七阶的概念，理解了炼金术的转化阶段。",
    skill: "金属七阶",
    grade: 6
  },
  {
    trigger: "理解守恒原则",
    effect: "你深入理解了炼金术的守恒原则，明白了等价交换的真谛。",
    skill: "守恒原则",
    grade: 6
  },
  {
    trigger: "进行高级转化",
    effect: "你进行了一次高级炼金转化，成功将一种金属转化为另一种。",
    skill: "高级转化",
    grade: 7
  },
  {
    trigger: "研究贤者之石",
    effect: "你深入研究了贤者之石的传说与现实，探讨了它的可能性。",
    skill: "贤者之石研究",
    grade: 7
  },
  {
    trigger: "探索生命转化",
    effect: "你探索了炼金术与生命转化的边界，思考了伦理问题。",
    skill: "生命转化",
    grade: 7
  },
  {
    trigger: "复习基础步骤",
    effect: "你复习了炼金术的基础步骤，熟练度小幅提高。",
    skill: "基础复习",
    grade: 6
  },
  {
    trigger: "整理错题",
    effect: "你整理了一页炼金术错题，终于看出自己常犯的错误。",
    skill: "错题分析",
    grade: 6
  },
  {
    trigger: "完成短练习",
    effect: "你完成了一次短练习，教授认可你的复盘态度。",
    skill: "练习巩固",
    grade: 7
  },
  {
    trigger: "巩固旧知识点",
    effect: "你把一个旧知识点重新练稳了，基础更加扎实。",
    skill: "知识巩固",
    grade: 7
  },
  {
    trigger: "完善记录",
    effect: "你在课后记录里补上了遗漏的安全检查，记录更加完整。",
    skill: "记录完善",
    grade: 7
  }
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
window.subject_alchemy = subjectData;

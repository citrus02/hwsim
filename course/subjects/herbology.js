import { lessonMap } from "./herbology-lesson.js";
import { questionBank } from "./herbology-questionBank.js";
import { registerSubjectData } from "../subject-registry.js";

export const subjectMeta = {
  key: "herbology",
  name: "草药学",
  icon: "🌿",
  professor: "波莫娜·斯普劳特",
  desc: "温室栽培、辨识与安全处理魔法植物——观察、照料与实操流程",
  unlockGrade: 1,
  housePointsPerLesson: { O: 7, E: 5, A: 3, P: 1, D: -1, T: -2 }
};

export const teachingStyle = {
  praiseStyle: "把手套摘下一只，用沾着泥土的手指在你记录本上轻轻点一下，说「这才叫观察」",
  errorStyle: "叹一口气，把你的工具摆回正确位置，再让你把步骤从头按顺序说一遍",
  officeHours: "温室白天大多开着；想问问题就先把手洗干净",
  signature: "永远带着一股温室的泥土气味；说话温和，但对安全与记录极其严格",
  prop: "厚手套与标记笔",
  catchphrase: "先停一秒，看清楚，再动手"
};

export const syllabus = [
  {
    chapter: 1,
    title: "一年级 · 课表每周 2 节",
    lessons: [
      { lesson: 1, title: "温室规则与防护", keyPoints: ["风险评估优先", "常见危险源识别", "观察与记录流程"] },
      { lesson: 2, title: "配土与移栽基础", keyPoints: ["通气/保水/养分平衡", "根系保护", "记录三要素"] },
      { lesson: 3, title: "播种、分株与扦插", keyPoints: ["深度与间距", "切口与介质", "魔力与条件边界"] },
      { lesson: 4, title: "病虫害与隔离处理", keyPoints: ["早期信号", "隔离优先", "剪除消毒与回收"] },
      { lesson: 5, title: "反应性植物入门", keyPoints: ["触发器类型", "工具与距离", "一致性安全"] },
      { lesson: 6, title: "辨识与标本归类", keyPoints: ["多维辨识", "成熟度与部位", "批次与标签"] },
      { lesson: 7, title: "采摘、修剪与保存", keyPoints: ["避开生长期", "控水避光", "净化减少污染"] },
      { lesson: 8, title: "一年级实操考核：照料与记录", keyPoints: ["诊断先于操作", "小步调整", "可复现记录"] }
    ]
  },
  {
    chapter: 2,
    title: "二年级 · 课表每周 1 节",
    lessons: [
      { lesson: 9, title: "曼德拉草：护理与成熟", keyPoints: ["耳塞与距离", "稳定条件", "成熟采收"] },
      { lesson: 10, title: "毒触手：防护与应对", keyPoints: ["缠绕与毒素", "两人协作", "应急顺序"] },
      { lesson: 11, title: "魔法真菌：孢子安全", keyPoints: ["孢子暴露", "湿润压制与密封", "形态辨别"] },
      { lesson: 12, title: "温室事故应对（综合）", keyPoints: ["安全优先", "扩散控制", "复盘记录"] }
    ]
  },
  {
    chapter: 3,
    title: "三年级 · 课表每周 1 节",
    lessons: [
      { lesson: 13, title: "湿地植物与水分", keyPoints: ["缺氧与霉菌", "水位线与矿物", "湿地安全"] },
      { lesson: 14, title: "伪装植物辨识", keyPoints: ["找细节", "现场再确认", "误采封存"] },
      { lesson: 15, title: "扦插与嫁接", keyPoints: ["切口质量", "形成层对齐", "魔力只能辅助"] },
      { lesson: 16, title: "共生与温室布局", keyPoints: ["共生/互害", "传播路径", "系统影响"] }
    ]
  },
  {
    chapter: 4,
    title: "四年级 · 课表每周 1 节",
    lessons: [
      { lesson: 17, title: "药用植物：白鲜与活性窗口", keyPoints: ["采收窗口", "处理方式对应用途", "药用安全"] },
      { lesson: 18, title: "反应性实验：光照与触碰", keyPoints: ["控制变量", "撤离路线", "可比记录"] },
      { lesson: 19, title: "温室系统：微气候与轮作", keyPoints: ["微气候", "魔力循环影响", "轮作与休耕"] },
      { lesson: 20, title: "配给计划与损耗预测", keyPoints: ["周期规划", "批次管理", "风险缓冲"] }
    ]
  },
  {
    chapter: 5,
    title: "五年级 · 课表每周 1 节（O.W.L. 导向）",
    lessons: [
      { lesson: 21, title: "O.W.L. 重点：辨识题", keyPoints: ["特征→结构", "相似点拆解", "证据链书写"] },
      { lesson: 22, title: "O.W.L. 实操：移栽与修剪", keyPoints: ["移栽顺序", "修剪目的", "解释能力"] },
      { lesson: 23, title: "O.W.L. 安全题：毒性与急救", keyPoints: ["毒性分类", "撤离与冲洗", "对症差异"] },
      { lesson: 24, title: "O.W.L. 综合模拟", keyPoints: ["主线策略", "时间复查", "收尾闭环"] }
    ]
  },
  {
    chapter: 6,
    title: "六年级 · 课表每周 1 节",
    lessons: [
      { lesson: 25, title: "N.E.W.T. 预备：稀有植物方案", keyPoints: ["目标条件风险", "不可替代性", "Plan B"] },
      { lesson: 26, title: "与魔药衔接：活性与处理方法", keyPoints: ["状态思维", "粒径与效果", "污染控制"] },
      { lesson: 27, title: "逆境栽培：低魔与资源不足", keyPoints: ["保命优先", "物理替代", "取舍决策"] },
      { lesson: 28, title: "温室改造与轮作计划", keyPoints: ["改造指标", "轮作管理", "维护记录"] }
    ]
  },
  {
    chapter: 7,
    title: "七年级 · 课表未排（N.E.W.T. 冲刺专题）",
    lessons: [
      { lesson: 29, title: "N.E.W.T. 专题：曼德拉草与生命魔力", keyPoints: ["同源机制", "制度化管理", "伦理与追踪"] },
      { lesson: 30, title: "N.E.W.T. 专题：解毒植物与反咒材料", keyPoints: ["解毒定位", "机制分类", "缓冲稳定"] },
      { lesson: 31, title: "N.E.W.T. 冲刺：实操检核与归档", keyPoints: ["稳定与克制", "可交接记录", "流程化清理"] }
    ]
  }
];

export const crossAnchors = [
  { concept: "药材处理与配方反应", linkedSubject: "魔药学", linkedLesson: "基础处理与火候", desc: "同一株植物的不同处理方式会改变反应路径，草药学的“状态”会直接影响坩埚里的结果" },
  { concept: "温室系统与生态管理", linkedSubject: "麻瓜研究·地理", linkedLesson: "气候与环境", desc: "微气候与风向决定传播与病害扩散，温室本质是一个可管理的小环境系统" },
  { concept: "暴露控制与应对", linkedSubject: "黑魔法防御术", linkedLesson: "应急与解除", desc: "先撤离威胁源再处理伤害：同一套顺序思维在温室与实战中都成立" }
];

export const professorComments = {
  O: [
    "很好。你每一步都做得有理由，记录也干净。温室喜欢这种学生",
    "三题全对，而且你把安全写进了思路里——这比答案更重要",
    "漂亮。你没有急，操作克制，判断准确",
    "做得非常好。你看见了细节，也记住了顺序",
    "满分。你把草药当成材料，也当成生命在对待"
  ],
  E: [
    "很接近了。错的那题不是不会，是你跳了一步",
    "两题完全正确。最后一题的处置顺序再理一遍就行",
    "不错。你观察到了，但记录还可以更具体",
    "接近满分。把那处混淆点写成一条对照表，会更稳",
    "很好。下次别急，你会做得更干净"
  ],
  A: [
    "及格。你能做，但还没做到稳定。回去把步骤写成清单",
    "过线了。错题说明你有一个环节还靠感觉",
    "可以。把‘为什么’写得更清楚，答案会更稳",
    "合格。多观察叶背，别只看正面",
    "通过。下次带着你的记录来，我帮你把它写得更专业"
  ],
  P: [
    "不太行。你做得太快，顺序乱了",
    "你有一点方向，但还缺少风险意识。先把护具和距离记牢",
    "今天这几题暴露了基础问题：观察不够具体",
    "较差。回去把“隔离优先”这一条抄在第一页",
    "别灰心。草药学靠的是重复的好习惯，不是一次的灵感"
  ],
  D: [
    "不理想。你跳过了最关键的安全步骤",
    "你把结论写在观察前面了。重新来：先写你看见了什么",
    "这次的问题不是知识，是流程。把顺序重新按一遍",
    "不行。回去把记录模板照着写一遍再来",
    "今天先到这里。下次上课前来温室，把第1课的护具与流程复习一下"
  ],
  T: [
    "很糟。你几乎每一步都在冒险",
    "全错。你需要从第一课的安全与记录重新开始",
    "不行。先把手套戴好，再谈学习",
    "极差。把你今天的思路写下来给我看，我们从哪里断的就从哪里补",
    "今天的结果说明你没掌握基础。来温室补课，别拖到下一次事故"
  ]
};

export const quickStudyEvents = [
  {
    trigger: "在温室观察魔法植物",
    effect: "你仔细观察了温室里的各种魔法植物，学会了如何识别它们的特征。",
    skill: "植物辨识",
    grade: 1
  },
  {
    trigger: "学习配土技巧",
    effect: "斯普劳特教授教你如何配制适合不同植物生长的土壤，你掌握了通气、保水、养分平衡的要点。",
    skill: "配土技巧",
    grade: 1
  },
  {
    trigger: "练习播种",
    effect: "你在温室里练习播种，学会了控制播种深度和间距的技巧。",
    skill: "播种技术",
    grade: 1
  },
  {
    trigger: "照料曼德拉草",
    effect: "你在教授的指导下照料曼德拉草，学会了正确的护理方法和安全距离。",
    skill: "特殊植物护理",
    grade: 2
  },
  {
    trigger: "处理毒触手",
    effect: "你学习了如何安全地处理毒触手，掌握了两人协作的技巧。",
    skill: "危险植物处理",
    grade: 2
  },
  {
    trigger: "研究魔法真菌",
    effect: "你研究了各种魔法真菌，学会了孢子安全处理的方法。",
    skill: "真菌研究",
    grade: 2
  },
  {
    trigger: "学习嫁接技术",
    effect: "你学会了植物嫁接的基本技术，掌握了切口质量和形成层对齐的要点。",
    skill: "嫁接技术",
    grade: 3
  },
  {
    trigger: "观察伪装植物",
    effect: "你学习了如何识别伪装植物，掌握了寻找细节和现场确认的方法。",
    skill: "伪装植物辨识",
    grade: 3
  },
  {
    trigger: "研究湿地植物",
    effect: "你研究了湿地植物的生长条件，了解了缺氧环境下的特殊养护方法。",
    skill: "湿地植物",
    grade: 3
  },
  {
    trigger: "学习药用植物",
    effect: "你学习了白鲜等药用植物的特性，了解了它们的采收窗口和药用安全注意事项。",
    skill: "药用植物",
    grade: 4
  },
  {
    trigger: "实践反应性实验",
    effect: "你进行了光照和触碰对植物反应的实验，学会了控制变量和记录可比数据。",
    skill: "实验设计",
    grade: 4
  },
  {
    trigger: "规划温室布局",
    effect: "你学习了温室微气候和轮作的知识，尝试规划了一个合理的温室布局。",
    skill: "温室管理",
    grade: 4
  },
  {
    trigger: "O.W.L.辨识练习",
    effect: "你进行了O.W.L.级别的植物辨识练习，学会了特征拆解和证据链书写的方法。",
    skill: "O.W.L.准备",
    grade: 5
  },
  {
    trigger: "练习移栽技巧",
    effect: "你练习了O.W.L.级别的移栽操作，掌握了正确的顺序和修剪技巧。",
    skill: "移栽技术",
    grade: 5
  },
  {
    trigger: "学习毒性分类",
    effect: "你深入学习了植物毒性分类和急救方法，提高了安全意识。",
    skill: "毒性知识",
    grade: 5
  },
  {
    trigger: "研究稀有植物",
    effect: "你研究了稀有魔法植物的培育方案，学习了风险评估和备选方案的制定。",
    skill: "稀有植物培育",
    grade: 6
  },
  {
    trigger: "学习逆境栽培",
    effect: "你学习了低魔力环境下的植物栽培技巧，掌握了物理替代和取舍决策的方法。",
    skill: "逆境栽培",
    grade: 6
  },
  {
    trigger: "设计轮作计划",
    effect: "你设计了一个完整的温室轮作计划，考虑了改造指标和维护记录。",
    skill: "轮作设计",
    grade: 6
  },
  {
    trigger: "研究曼德拉草与生命魔力",
    effect: "你深入研究了曼德拉草与生命魔力的同源机制，思考了制度化管理和伦理问题。",
    skill: "生命魔力研究",
    grade: 7
  },
  {
    trigger: "学习解毒植物",
    effect: "你学习了解毒植物和反咒材料，掌握了解毒定位和机制分类的方法。",
    skill: "解毒知识",
    grade: 7
  }
];

const subjectData = {
  subjectMeta,
  teachingStyle,
  syllabus,
  crossAnchors,
  professorComments,
  lessonMap,
  questionBank
};

registerSubjectData(subjectMeta.key, subjectData);
window.subject_herbology = subjectData;

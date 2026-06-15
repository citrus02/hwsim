/**
 * civics.js  →  muggle-academic · 哲学与伦理
 * 教授：康斯坦丝·沙克博特（Constance Shacklebolt）
 *
 * 课程体系：UK KS3 → GCSE → A-Level（共 70 课，14 章，横跨 7 年级）
 *
 * 题库文件：civics-questionBank.js
 */

import { lessonMap } from './lesson.js';
import { questionBank } from './question-bank.js';
import { registerSubjectData } from '../../subject-registry.js';

export const subjectMeta = {
  key: "civics",
  name: "哲学与伦理",
  icon: "⚖️",
  professor: "康斯坦丝·沙克博特",
  desc: "论证、正义、意识——学会思考「为什么」，比知道「是什么」更重要",
  unlockGrade: 1,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle:    "「论证成立。」停顿，走开——这已经是满分评价",
  errorStyle:     "「你有结论，但没有前提。重来。」从不评判观点本身，只评判论证是否有效",
  officeHours:    "周一、周四下午，但她会反问你每一个问题",
  signature:      "把一个道德困境写在黑板上，一句话都不补充，等全班陷入沉默",
  prop:           "磨旧的苏格拉底对话集，一本空白笔记本（她从不提前备课提纲）",
  catchphrase:    "不要同情，要理解。同情是居高临下，理解才是平等。"
};

// 14章 × 5课 = 70课，贯穿1–7年级
export const syllabus = [
  // ── 第1年·KS3 ────────────────────────────────────────────
  {
    chapter: 1, yearRange: "1年级", phase: "KS3",
    title: "伦理学基础",
    lessons: [
      { lesson: 1,  title: "什么是道德问题",       keyPoints: ["道德判断与个人喜好的区别", "道德分歧的特征：无法仅靠实验解决", "「折磨无辜者是错的」——这是直觉还是知识？", "魔法世界与麻瓜世界的道德差异"] },
      { lesson: 2,  title: "电车难题",             keyPoints: ["行动与不行动的道德差异", "后果论的直觉基础", "牺牲少数拯救多数是否正当？", "魔杖选择：如果魔杖能让电车转向，你会挥动吗？"] },
      { lesson: 3,  title: "功利主义",             keyPoints: ["边沁与最大幸福原则", "功利主义的计算方法", "快乐与痛苦的度量问题", "「除忆咒让麻瓜更快乐」——功利主义会如何判断？"] },
      { lesson: 4,  title: "义务论",               keyPoints: ["康德的绝对命令", "有些行为本身是错的，无论结果如何", "说谎的道德性——即使为了保护人", "不可饶恕咒的义务论立场"] },
      { lesson: 5,  title: "美德伦理",             keyPoints: ["亚里士多德：成为什么样的人", "美德是两个极端之间的中道", "勇气、诚实、公正、节制", "性格形成与习惯的重要性"] }
    ]
  },
  {
    chapter: 2, yearRange: "1年级", phase: "KS3",
    title: "知识论",
    lessons: [
      { lesson: 6,  title: "我们如何知道",         keyPoints: ["知识与信念的区别", "柏拉图：知识是有理由的真信念", "葛梯尔问题——这个定义够吗？", "「我知道魔法存在」vs「我相信魔法存在」"] },
      { lesson: 7,  title: "柏拉图洞穴寓言",       keyPoints: ["洞穴囚徒与影子", "表象与实在的区别", "哲学家的任务：走出洞穴", "麻瓜研究课的洞穴隐喻"] },
      { lesson: 8,  title: "感官的可靠性",         keyPoints: ["幻觉与错觉的挑战", "感知不是被动接收，而是主动建构", "我们能信任感官吗？", "魔法幻象对感知哲学的挑战"] },
      { lesson: 9,  title: "理性的力量",           keyPoints: ["先天知识是否存在", "理性主义与经验主义的争论", "数学真理的特殊性", "逻辑推理的可靠性"] },
      { lesson: 10, title: "知识的边界",           keyPoints: ["我们能知道什么？", "怀疑论的挑战", "可知与不可知的划分", "魔法是否超越了知识的边界？"] }
    ]
  },
  // ── 第2年·KS3 ────────────────────────────────────────────
  {
    chapter: 3, yearRange: "2年级", phase: "KS3",
    title: "自由意志与责任",
    lessons: [
      { lesson: 11, title: "什么是自由意志",       keyPoints: ["自由选择的含义", "决定论的挑战：一切都是因果链", "自由意志与道德责任的关系", "日常经验中的自由感"] },
      { lesson: 12, title: "硬决定论",             keyPoints: ["宇宙的因果闭合性", "决定论与自由意志不相容", "如果决定论为真，道德责任是否存在？", "魔药影响下的行为责任"] },
      { lesson: 13, title: "相容论",               keyPoints: ["自由与决定论可以共存", "自由 = 不受外部强迫", "内在原因与外在原因的区别", "相容论对道德责任的辩护"] },
      { lesson: 14, title: "道德责任的基础",       keyPoints: ["责任的条件：知道与选择", "无知与强迫对责任的影响", "部分责任与完全责任", "未成年人的责任边界"] },
      { lesson: 15, title: "意志支配咒与责任",     keyPoints: ["Imperius咒的道德后果", "被控制者的责任程度", "控制者与被控制者的责任分配", "魔法强制与道德责任的哲学争论"] }
    ]
  },
  {
    chapter: 4, yearRange: "2年级", phase: "KS3",
    title: "正义理论",
    lessons: [
      { lesson: 16, title: "什么是公正",           keyPoints: ["分配正义与程序正义", "公平的不同概念", "正义与平等的关系", "巫师社会的正义问题"] },
      { lesson: 17, title: "罗尔斯的无知之幕",     keyPoints: ["思想实验的设计", "在无知状态下的选择", "两个正义原则", "魔法世界的无知之幕会选择什么规则？"] },
      { lesson: 18, title: "惩罚的目的",           keyPoints: ["应报论：以牙还牙", "矫正论：改造罪犯", "威慑论：预防犯罪", "不同理论对阿兹卡班的不同看法"] },
      { lesson: 19, title: "全球正义",             keyPoints: ["对陌生人的道德义务", "富国与穷国的责任", "资源分配的公平性", "巫师与麻瓜之间的正义"] },
      { lesson: 20, title: "分配正义",             keyPoints: ["平等分配 vs 按需分配 vs 按贡献分配", "不同原则的适用场景", "公平与效率的平衡", "魔法能力是否应该影响资源分配？"] }
    ]
  },
  // ── 第3年·KS3 ────────────────────────────────────────────
  {
    chapter: 5, yearRange: "3年级", phase: "KS3",
    title: "心身问题",
    lessons: [
      { lesson: 21, title: "笛卡尔二元论",         keyPoints: ["心灵与身体是两种实体", "松果体作为交互点", "身心交互问题", "幽灵与灵魂的哲学地位"] },
      { lesson: 22, title: "物理主义",             keyPoints: ["心灵是大脑的产物", "神经科学的证据", "还原论的挑战", "意识是否能被完全物理化解释？"] },
      { lesson: 23, title: "意识的难问题",         keyPoints: ["主观体验的本质", "玛丽的房间思想实验", "第三人称描述的局限", "摄魂怪攻击的意识哲学"] },
      { lesson: 24, title: "人格同一性",           keyPoints: ["什么让你成为你？", "忒修斯之船问题", "记忆理论与连续性", "除忆咒后的同一性问题"] },
      { lesson: 25, title: "死亡与继续存在",       keyPoints: ["死亡的哲学定义", "身体死亡 vs 意识终结", "灵魂不朽的论证", "幽灵是否是继续存在的证据？"] }
    ]
  },
  {
    chapter: 6, yearRange: "3年级", phase: "KS3",
    title: "政治哲学",
    lessons: [
      { lesson: 26, title: "国家权力的来源",       keyPoints: ["为什么要服从国家？", "社会契约论", "权力的合法性基础", "魔法部权力的正当性"] },
      { lesson: 27, title: "洛克的社会契约",       keyPoints: ["自然状态与自然权利", "生命、自由、财产", "政府的有限权力", "反抗不公正政府的权利"] },
      { lesson: 28, title: "卢梭与公意",           keyPoints: ["公意 vs 众意", "人民主权", "强迫自由的悖论", "多数人暴政的危险"] },
      { lesson: 29, title: "无政府主义",           keyPoints: ["国家是否必要？", "自愿合作的可能性", "无政府主义的实践挑战", "魔法社会是否需要政府？"] },
      { lesson: 30, title: "公民抗命",             keyPoints: ["违法的道德正当性", "马丁·路德·金的非暴力抵抗", "公民抗命的条件", "反对魔法部不公正法令的伦理"] }
    ]
  },
  // ── 第4年·GCSE ────────────────────────────────────────────
  {
    chapter: 7, yearRange: "4年级", phase: "GCSE",
    title: "生命伦理",
    lessons: [
      { lesson: 31, title: "堕胎的哲学论证",       keyPoints: ["人格与生命权", "胎儿的道德地位", "女性自主权", "不同伦理框架的不同结论"] },
      { lesson: 32, title: "安乐死",               keyPoints: ["自愿与非自愿安乐死", "自主权与生命神圣性", "医生的角色", "痛苦与尊严的权衡"] },
      { lesson: 33, title: "医疗资源分配",         keyPoints: ["稀缺资源的公平分配", "谁先得到治疗？", "年龄、贡献、需要的考量", "魔法治疗是否应该优先？"] },
      { lesson: 34, title: "基因编辑伦理",         keyPoints: ["改造人类的边界", "设计婴儿的争议", "基因增强 vs 基因治疗", "魔法基因改造的伦理"] },
      { lesson: 35, title: "动物权利",             keyPoints: ["动物是否有道德地位？", "功能感受 vs 理性", "物种歧视是否成立", "神奇动物的道德地位"] }
    ]
  },
  {
    chapter: 8, yearRange: "4年级", phase: "GCSE",
    title: "宗教哲学",
    lessons: [
      { lesson: 36, title: "上帝存在的本体论证明", keyPoints: ["安瑟伦的论证", "存在作为谓词的争议", "康德的反驳", "模态版本的论证"] },
      { lesson: 37, title: "宇宙论与设计论证明",   keyPoints: ["第一因论证", "宇宙微调论证", "设计论的挑战", "恶的问题"] },
      { lesson: 38, title: "恶的问题",             keyPoints: ["全知全善全能与苦难的矛盾", "自由意志辩护", "灵魂塑造辩护", "自然恶的挑战"] },
      { lesson: 39, title: "奇迹",                 keyPoints: ["奇迹的定义", "能否作为信仰的理据", "休谟对奇迹的批判", "魔法是否是奇迹？"] },
      { lesson: 40, title: "宗教多元主义",         keyPoints: ["多种宗教的存在", "排他论 vs 包容论 vs 多元论", "不同信仰能否都是真的？", "魔法世界的宗教多样性"] }
    ]
  },
  // ── 第5年·GCSE ────────────────────────────────────────────
  {
    chapter: 9, yearRange: "5年级", phase: "GCSE",
    title: "元伦理学",
    lessons: [
      { lesson: 41, title: "道德实在论",           keyPoints: ["道德事实是否存在？", "客观道德真理", "道德知识的可能性", "道德实在论的挑战"] },
      { lesson: 42, title: "情感主义",             keyPoints: ["道德判断是情感表达", "没有客观道德真理", "情感主义的优势与问题", "道德分歧的本质"] },
      { lesson: 43, title: "道德相对主义",         keyPoints: ["不同文化的道德差异", "相对主义的论证", "对相对主义的反驳", "普遍道德原则是否存在？"] },
      { lesson: 44, title: "道德进步",             keyPoints: ["道德进步是否可能？", "奴隶制的废除", "道德观念的变化", "进步的标准是什么？"] },
      { lesson: 45, title: "道德语言分析",         keyPoints: ["善的含义", "自然主义谬误", "道德术语的用法", "魔法世界的道德语言"] }
    ]
  },
  {
    chapter: 10, yearRange: "5年级", phase: "GCSE",
    title: "GCSE综合",
    lessons: [
      { lesson: 46, title: "哲学论证结构分析",     keyPoints: ["识别前提与结论", "评估论证有效性", "重构论证的技巧", "常见论证形式"] },
      { lesson: 47, title: "概念分析方法",         keyPoints: ["厘清概念的意义", "必要条件与充分条件", "反例测试", "概念的边界"] },
      { lesson: 48, title: "反驳技巧",             keyPoints: ["找到论证的弱点", "归谬法", "区分反驳与驳斥", "善意原则"] },
      { lesson: 49, title: "哲学写作",             keyPoints: ["清晰、精确、有力", "论证结构", "引用与注释", "学术写作规范"] },
      { lesson: 50, title: "GCSE综合复习",         keyPoints: ["伦理学框架回顾", "知识论核心问题", "心灵哲学要点", "政治哲学关键概念"] }
    ]
  },
  // ── 第6年·A-Level ─────────────────────────────────────────
  {
    chapter: 11, yearRange: "6年级", phase: "A-Level",
    title: "认识论深化",
    lessons: [
      { lesson: 51, title: "盖梯尔问题",           keyPoints: ["知识不只是真信念", "盖梯尔反例", "对知识定义的修正", "知识的本质"] },
      { lesson: 52, title: "内在主义与外在主义",   keyPoints: ["确证的内部因素 vs 外部因素", "可靠性理论", "知识的来源", "认知责任"] },
      { lesson: 53, title: "怀疑主义的回应",       keyPoints: ["笛卡尔的回应", "摩尔的常识反驳", "语境主义", "诺齐克的追踪理论"] },
      { lesson: 54, title: "归纳问题",             keyPoints: ["休谟问题", "归纳推理的辩护", "自然齐一性", "科学推理的基础"] },
      { lesson: 55, title: "科学哲学",             keyPoints: ["什么是好的科学解释？", "证伪主义", "范式与科学革命", "科学实在论 vs 工具主义"] }
    ]
  },
  {
    chapter: 12, yearRange: "6年级", phase: "A-Level",
    title: "形而上学",
    lessons: [
      { lesson: 56, title: "存在的本质",           keyPoints: ["为什么有而非无？", "存在与虚无", "本体论问题", "存在的意义"] },
      { lesson: 57, title: "实体理论",             keyPoints: ["世界由什么构成？", "实体与属性", "共相问题", "个体性"] },
      { lesson: 58, title: "时间与空间",           keyPoints: ["绝对时空 vs 相对时空", "时间的流逝", "空间的本质", "时空旅行的可能性"] },
      { lesson: 59, title: "偶然与必然",           keyPoints: ["必然真理与偶然真理", "可能世界语义学", "模态逻辑", "宿命论"] },
      { lesson: 60, title: "反事实推理",           keyPoints: ["虚拟条件句", "可能世界分析", "反事实依赖", "因果关系的反事实理论"] }
    ]
  },
  // ── 第7年·A-Level ─────────────────────────────────────────
  {
    chapter: 13, yearRange: "7年级", phase: "A-Level",
    title: "政治与社会哲学",
    lessons: [
      { lesson: 61, title: "自由主义的张力",       keyPoints: ["自由与平等的冲突", "古典自由主义 vs 社会自由主义", "国家的角色", "福利国家的正当性"] },
      { lesson: 62, title: "共同体主义",           keyPoints: ["对自由主义的批评", "个人与社群的关系", "共同善", "文化认同的重要性"] },
      { lesson: 63, title: "女性主义政治哲学",     keyPoints: ["性别与权力结构", "父权制", "差异女性主义", "性别平等的哲学基础"] },
      { lesson: 64, title: "后殖民批判",           keyPoints: ["殖民主义的遗产", "知识的权力", "文化帝国主义", "去殖民化的哲学"] },
      { lesson: 65, title: "全球治理",             keyPoints: ["主权与人权的冲突", "国际正义", "全球公民身份", "魔法世界的全球治理"] }
    ]
  },
  {
    chapter: 14, yearRange: "7年级", phase: "A-Level",
    title: "哲学综合",
    lessons: [
      { lesson: 66, title: "哲学史脉络",           keyPoints: ["从苏格拉底到维特根斯坦", "哲学传统的发展", "主要哲学流派", "哲学问题的延续与变化"] },
      { lesson: 67, title: "当代哲学问题",         keyPoints: ["AI的道德地位", "气候变化的伦理", "数字时代的隐私", "生物技术的挑战"] },
      { lesson: 68, title: "论文写作",             keyPoints: ["哲学论证的最高标准", "论题设计", "文献综述", "论证深度"] },
      { lesson: 69, title: "批判性思维综合",       keyPoints: ["识别逻辑谬误", "评估证据", "构建有力论证", "理性讨论的艺术"] },
      { lesson: 70, title: "A-Level综合模拟",      keyPoints: ["伦理学综合题", "认识论综合题", "形而上学综合题", "政治哲学综合题"] }
    ]
  }
];

export const crossAnchors = [
  {
    concept: "论证结构",
    linkedSubject: "math",
    linkedLesson: "逻辑推理：命题与反例（第24课）",
    desc: "芬威克在数学第24课讲逻辑推理——前提、推论、结论——和沙克博特的哲学课用的是同一个框架，只是一个用数字，一个用语言。两位教授在教员室就「数学证明和哲学论证是否本质相同」争论过三次。"
  },
  {
    concept: "帝里修斯咒与自由意志",
    linkedSubject: "charms",
    linkedLesson: "记忆咒与抵御：心灵魔法入门（第16课）",
    desc: "弗立维讲帝里修斯咒时说「受控制者道德责任降低」——沙克博特的自由意志课直接给出理论支撑：强制消解了意志自由，而意志自由是道德责任的前提。两位教授就「魔法强制能否完全消除道德责任」有过公开的教员室争论。"
  },
  {
    concept: "历史判断中的道德标准",
    linkedSubject: "history",
    linkedLesson: "帝国主义与两次世界大战（第26-30课）",
    desc: "赫伯特讲历史时尽量不做道德判断，沙克博特认为这是哲学错误：「描述殖民地暴行却拒绝说它是错的，意味着你在用相对主义保护自己不用思考。」两人在如何讲述格林德沃崛起时产生了直接冲突。"
  },
  {
    concept: "文学中的道德困境",
    linkedSubject: "literature",
    linkedLesson: "悲剧的力量（第5课）",
    desc: "哈姆雷特「复仇还是宽恕」、麦克白「野心还是良知」——伊莱莎从文学意境进入，沙克博特从论证结构进入同一个困境。沙克博特偶尔借用伊莱莎的文本作为课堂案例：「文学把道德困境具象化，让我们能在安全距离里练习真实的伦理判断。」"
  },
  {
    concept: "神经科学与道德责任",
    linkedSubject: "biology",
    linkedLesson: "神经系统（第25课）",
    desc: "沙克博特问：「如果大脑前额叶在25岁前发育不完全，青少年的冲动行为应受到同等惩罚吗？」塔维什的神经系统课给出了生理证据；沙克博特把它变成了关于「神经决定论是否消解道德责任」的哲学辩论。"
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
window.subject_civics = subjectData;

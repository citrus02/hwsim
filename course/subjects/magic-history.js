/**
 * subjects/magic-history.js
 * 霍格沃茨 · 魔法史
 * 教授：卡斯伯特·宾斯（幽灵）
 *
 * 包含：
 *   subjectMeta       科目元数据
 *   syllabus          课程大纲（章节+知识点）
 *   questionBank      随堂测验题库（按课次，每课3题）
 *   crossAnchors      跨学科锚点
 *   teachingStyle     教学风格常量
 *   professorComments 教授评语库（O/E/A/P/D/T 各5条）
 *   quickStudyEvents  随便学学事件库（20条）
 *
 * 课时与course.js SCHEDULE对齐（按年级周课时扩展；六年级课表未排本课，仍设少量N.E.W.T.衔接课时）：
 * 1年级：每周1节，共4课
 * 2年级：每周2节，共8课
 * 3-5年级：每周各1节，每年级各4课（共12课）
 * 6年级：课表无魔法史，设3课（纲要衔接，不计入周课表）
 * 7年级：每周1节，共4课
 * 合计31课
 *
 * 接入：
 * classroom.js SUBJECT_WIN_KEY：magicHistory | subject_magicHistory
 * course-data.js「魔法史」条目：hogwartsSubjectKey: "magicHistory"
 */

import { lessonMap } from './magic-history-lesson.js';
import { questionBank } from './magic-history-questionBank.js';

export const subjectMeta = {
  key: "magicHistory",
  name: "魔法史",
  icon: "📜",
  professor: "卡斯伯特·宾斯",
  desc: "巫师世界的制度、族群与保密时代——年表、因果与档案读法",
  unlockGrade: 1,
  housePointsPerLesson: { O: 7, E: 5, A: 3, P: 1, D: -1, T: -2 }
};

export const teachingStyle = {
  label: "宾斯教授",
  praiseStyle: "……正确。（停顿）下一题。",
  errorStyle: "……不对。（停顿）把年份写边上，再试。",
  officeHours: "没有；飘走时提问无效",
  signature: "穿墙入场，语调永不升降，讲义像灰尘悬浮",
  prop: "看不见的厚重羊皮纸",
  catchphrase: "……记下来。"
};

export const syllabus = [
  {
    chapter: 1,
    title: "一年级 · 课表每周1节",
    lessons: [
      { lesson: 1, title: "魔法史：为什么要研究过去", keyPoints: ["学科意义与因果", "史料与叙事", "年代与骨架"] },
      { lesson: 2, title: "霍格沃茨四巨头与建校叙事", keyPoints: ["传说分层", "政治化记忆", "城堡作为史料"] },
      { lesson: 3, title: "分院帽与学院制度的形成", keyPoints: ["程序与韧性", "竞争与偏见", "观念史争议"] },
      { lesson: 4, title: "中世纪巫师社会鸟瞰", keyPoints: ["早期聚落", "与麻瓜权力擦边", "学会画粗年表"] }
    ]
  },
  {
    chapter: 2,
    title: "二年级 · 课表每周2节",
    lessons: [
      { lesson: 5, title: "《国际巫师保密法》何以产生", keyPoints: ["集体安全", "立法恐惧", "利弊分层"] },
      { lesson: 6, title: "保密法的空间后果：聚居与遮蔽", keyPoints: ["对角巷模式", "霍格莫德式聚居", "不可见技术"] },
      { lesson: 7, title: "猎巫：档案、无辜者与黑巫师", keyPoints: ["交叉档案", "两类受害者", "动机多重"] },
      { lesson: 8, title: "校纪中的隐蔽伦理从何而来", keyPoints: ["创伤进入校规", "最小暴力", "教育伦理"] },
      { lesson: 9, title: "双重生活：身份切换的政治", keyPoints: ["麻瓜出身路径", "偏见结构", "日常表演"] },
      { lesson: 10, title: "飞路网时代以前的出行与通信", keyPoints: ["猫头鹰网络", "门钥匙雏形", "治理难题预告"] },
      { lesson: 11, title: "古灵阁与魔法经济骨架", keyPoints: ["清算职能", "信托与安全", "经济与政治绑定"] },
      { lesson: 12, title: "妖精：魔杖禁令与早期冲突线索", keyPoints: ["器物归属", "结构性怨恨", "史料偏见"] }
    ]
  },
  {
    chapter: 3,
    title: "三年级 · 课表每周1节",
    lessons: [
      { lesson: 13, title: "妖精叛乱年表精读（上）", keyPoints: ["导火索类型", "动员机制", "魔法部应对词汇"] },
      { lesson: 14, title: "妖精叛乱年表精读（下）与金融停摆", keyPoints: ["挤兑记忆", "谈判周期", "改革滞后"] },
      { lesson: 15, title: "巨人政策与野蛮叙事批判", keyPoints: ["边境威慑", "宣传机制", "部落差异"] },
      { lesson: 16, title: "狼人登记与国际魔法合作入门", keyPoints: ["比较族群学", "条约线索", "跨国协调"] }
    ]
  },
  {
    chapter: 4,
    title: "四年级 · 课表每周1节",
    lessons: [
      { lesson: 17, title: "飞路网、交通司与部内扩张", keyPoints: ["连接权政治", "事故档案", "官僚化"] },
      { lesson: 18, title: "二十世纪：恐慌政治的机制", keyPoints: ["紧急权力", "例外条款", "公众情绪"] },
      { lesson: 19, title: "记忆政治与史学伦理", keyPoints: ["真相权", "问责链条", "咒语阴影"] },
      { lesson: 20, title: "霍格沃茨的制度应变史", keyPoints: ["中立神话", "渗透现实", "空间政治"] }
    ]
  },
  {
    chapter: 5,
    title: "五年级 · 课表每周1节（O.W.L.导向）",
    lessons: [
      { lesson: 21, title: "巫师出版、谣言与舆论史（简论）", keyPoints: ["报纸政治", "真伪辨认", "史料陷阱"] },
      { lesson: 22, title: "神秘事务司与保密档案（史学视角）", keyPoints: ["可知与不可知", "研究与禁忌", "脚注阅读"] },
      { lesson: 23, title: "O.W.L.魔法史：题型与证据链写作", keyPoints: ["论点先行禁忌", "年代脚注标注", "因果三句式"] },
      { lesson: 24, title: "O.W.L.魔法史综合演练", keyPoints: ["限时策略", "取舍", "复查清单"] }
    ]
  },
  {
    chapter: 6,
    title: "六年级 · 课表未排（N.E.W.T.衔接纲要）",
    lessons: [
      { lesson: 25, title: "N.E.W.T.史学方法与论文结构", keyPoints: ["问题意识", "二手研究位置", "引用幽灵口述的限度"] },
      { lesson: 26, title: "血统话语史：争议史料精读", keyPoints: ["语境还原", "谁是听众", "话语后果"] },
      { lesson: 27, title: "黑暗叙事框架：史学不设剧情", keyPoints: ["结构模型", "证据层级", "反对寓言化"] }
    ]
  },
  {
    chapter: 7,
    title: "七年级 · 课表每周1节",
    lessons: [
      { lesson: 28, title: "当代魔法治理与国际协调", keyPoints: ["条约网络", "主权让渡", "保密共同体"] },
      { lesson: 29, title: "魔法法律交界：判例史导论", keyPoints: ["先例思维", "制度缝隙", "跨学科接口"] },
      { lesson: 30, title: "贯通复习：年表地图机制", keyPoints: ["压缩技巧", "三重对齐", "自述检验"] },
      { lesson: 31, title: "N.E.W.T.冲刺：引用、口述与收尾", keyPoints: ["学术诚实", "收尾句式", "带走一本笔记"] }
    ]
  }
];

export const crossAnchors = [
  { concept: "保密法与政治哲学", linkedSubject: "道德与法治（麻瓜研究）", linkedLesson: "制度分析类课程", desc: "康斯坦丝讲权力如何立法，宾斯讲恐惧如何立法——同一结构，两种档案" },
  { concept: "巫麻冲突叙事", linkedSubject: "历史（麻瓜研究）", linkedLesson: "民族国家与战争", desc: "赫伯特排麻瓜年表，宾斯排巫师反应——对照阅读能看见互动的缝隙" },
  { concept: "记忆与真相", linkedSubject: "魔咒学", linkedLesson: "记忆咒相关理论课", desc: "弗立维讲咒语机制，宾斯讲记忆作为公共物品——碰撞点在可被篡改之物" }
];

export const professorComments = {
  O: [
    "……全对。证据链完整。可以了。",
    "……正确。你没有用形容词代替史料。这很好。",
    "……三道都对。下一章预习范围在黑板上。",
    "……满分。像一份合格的摘要。",
    "……无误。考试保持这样。"
  ],
  E: [
    "……差一点。第三题补上年份标注会更好。",
    "……两道完全正确。一道因果过度跳跃。回去画箭头。",
    "……接近。错的那题不是记忆问题，是分层问题。",
    "……很好。最后一题把为什么写完整。",
    "……不错。把混淆的两个条约拆开。"
  ],
  A: [
    "……及格。但这门课你能走得更稳。",
    "……过了线。错题重写一遍，只要论点证据。",
    "……可以。不要再写口号式结论。",
    "……通过。年表缺了一段，补上。",
    "……勉强。下一课提前五分钟到，看黑板左侧。"
  ],
  P: [
    "……方向有。材料不够。打开课本脚注。",
    "……有一题对了。用同一方法处理另外两题。",
    "……不行。你把结果放在原因前面了。",
    "……再来。先写时间，再写人物。",
    "……较差。把讲义第一节重读。"
  ],
  D: [
    "……不理想。这不是态度问题，是顺序问题。",
    "……混乱。从年表开始重建。",
    "……重做。带着草稿来，我只看推理，不看表情。",
    "……不行。你写了太多形容词。",
    "……较差。下一章之前把术语表抄一遍。"
  ],
  T: [
    "……全部不对。从第一课的定义重新开始。",
    "……极差。先睡一会儿也没关系。醒来再读。",
    "……重来。这不是惩罚，是流程。",
    "……全部错误。写下你最混淆的两个年份。",
    "……极差。把试卷折好，下一课继续。"
  ]
};

export const quickStudyEvents = [
  "你仔细阅读了魔法史讲义，对保密法的产生背景有了更深理解",
  "你整理了妖精叛乱的年表，发现了几个关键节点的因果关系",
  "你研究了霍格沃茨建校传说的不同版本，开始理解史料分层的意义",
  "你练习了画年代粗线图，年表的骨架变得清晰",
  "你重读了课表中关于狼人登记的章节，对跨国协调机制有了新认识",
  "你整理了课上提到的条约名称，按时间顺序排列",
  "你分析了保密法的利弊分层，写了一段简短的笔记",
  "你研究了古灵阁的历史，发现经济与政治的紧密绑定",
  "你复习了记忆政治的概念，对咒语阴影有了新理解",
  "你练习了因果三句式的写作，论点证据结论的结构更清晰",
  "你阅读了妖精叛乱的原始档案摘要，感受到史料的厚重",
  "你整理了霍格沃茨制度应变的几个关键时期",
  "你研究了猎巫时期的交叉档案，发现了两类受害者的差异",
  "你复习了N.E.W.T.史学方法的要点，问题意识更加明确",
  "你练习了脚注阅读技巧，学会从注释中获取额外信息",
  "你分析了血统话语的语境，理解了话语后果的重要性",
  "你整理了当代魔法治理的条约网络，画出了关系图",
  "你研究了魔法法律交界的几个重要判例",
  "你练习了三重对齐（年表地图机制）的分析方法",
  "你在课堂上认真做笔记，宾斯教授的声音穿过你的身体"
];

window.subject_magicHistory = {
  subjectMeta,
  teachingStyle,
  syllabus,
  crossAnchors,
  professorComments,
  quickStudyEvents,
  lessonMap,
  questionBank
};

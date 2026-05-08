/**
 * subjects/magic-history.js
 * 霍格沃茨 · 魔法史
 * 教授：卡斯伯特·宾斯（幽灵）
 *
 * 课时与 course.js 中 SCHEDULE 对齐（按年级周课时扩展；六年级课表未排本课，仍设少量 N.E.W.T. 衔接课时）：
 *   1 年级：每周 1 节 → 4 课
 *   2 年级：每周 2 节 → 8 课
 *   3～5 年级：每周各 1 节 → 每年级各 4 课（共 12 课）
 *   6 年级：课表无魔法史 → 3 课（纲要衔接，不计入周课表）
 *   7 年级：每周 1 节 → 4 课
 *   合计 31 课。
 *
 * 接入：
 *   classroom.js SUBJECT_WIN_KEY：magicHistory → subject_magicHistory
 *   course-data.js 「魔法史」条目：hogwartsSubjectKey: "magicHistory"
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
  praiseStyle:    "……正确。（停顿）下一题。",
  errorStyle:     "……不对。（停顿）把年份写边上，再试。",
  officeHours:    "没有；飘走时提问无效",
  signature:      "穿墙入场，语调永不升降，讲义像灰尘悬浮",
  prop:           "看不见的厚重羊皮纸",
  catchphrase:    "……记下来。"
};

export const syllabus = [
  {
    chapter: 1,
    title: "一年级 · 课表每周 1 节",
    lessons: [
      { lesson: 1, title: "魔法史：为什么要研究过去", keyPoints: ["学科意义与因果", "史料与叙事", "年代与骨架"] },
      { lesson: 2, title: "霍格沃茨四巨头与建校叙事", keyPoints: ["传说分层", "政治化记忆", "城堡作为史料"] },
      { lesson: 3, title: "分院帽与学院制度的形成", keyPoints: ["程序与韧性", "竞争与偏见", "观念史争论"] },
      { lesson: 4, title: "中世纪巫师社会鸟瞰", keyPoints: ["早期聚落", "与麻瓜权力擦肩", "学会画粗年表"] }
    ]
  },
  {
    chapter: 2,
    title: "二年级 · 课表每周 2 节",
    lessons: [
      { lesson: 5, title: "《国际巫师保密法》何以产生", keyPoints: ["集体安全", "立法恐惧", "利弊分层"] },
      { lesson: 6, title: "保密法的空间后果：聚居与遮蔽史", keyPoints: ["对角巷模型", "霍格莫德式聚落", "「不可见」技术"] },
      { lesson: 7, title: "猎巫：档案、无辜者与黑巫师", keyPoints: ["交叉档案", "两类受害者", "动机多重"] },
      { lesson: 8, title: "校纪中的隐蔽伦理从何而来", keyPoints: ["创伤进入校规", "最小暴露", "教育史"] },
      { lesson: 9, title: "双重生活：身份切换的政治性", keyPoints: ["麻瓜出身路径", "偏见结构", "日常表演"] },
      { lesson: 10, title: "飞路网时代以前的出行与通信", keyPoints: ["猫头鹰网络", "门钥匙雏形", "治理难题预告"] },
      { lesson: 11, title: "古灵阁与魔法经济骨架", keyPoints: ["清算职能", "信托与安全", "经济与政治绑定"] },
      { lesson: 12, title: "妖精：魔杖禁令与早期冲突线索", keyPoints: ["器物归属", "结构性怨恨", "史料偏见"] }
    ]
  },
  {
    chapter: 3,
    title: "三年级 · 课表每周 1 节",
    lessons: [
      { lesson: 13, title: "妖精叛乱年表精读（上）", keyPoints: ["导火索类型", "动员机制", "魔法部应对词汇"] },
      { lesson: 14, title: "妖精叛乱年表精读（下）与金融停摆", keyPoints: ["挤兑记忆", "谈判周期", "改革滞后"] },
      { lesson: 15, title: "巨人政策与「野蛮」叙事批判", keyPoints: ["边境威慑", "宣传机制", "部落差异"] },
      { lesson: 16, title: "狼人登记与国际魔法合作入门", keyPoints: ["比较族群法", "条约线索", "跨国协调"] }
    ]
  },
  {
    chapter: 4,
    title: "四年级 · 课表每周 1 节",
    lessons: [
      { lesson: 17, title: "飞路网、交通司与部内扩张", keyPoints: ["连接权政治", "事故档案", "官僚化"] },
      { lesson: 18, title: "二十世纪：恐慌政治的机制", keyPoints: ["紧急权力", "例外条款", "公众情绪"] },
      { lesson: 19, title: "记忆政治与史学伦理", keyPoints: ["真相权", "问责链条", "咒语阴影"] },
      { lesson: 20, title: "霍格沃茨的制度应变史", keyPoints: ["中立神话", "渗透现实", "空间政治"] }
    ]
  },
  {
    chapter: 5,
    title: "五年级 · 课表每周 1 节（O.W.L. 导向）",
    lessons: [
      { lesson: 21, title: "巫师出版、谣言与舆论史（简）", keyPoints: ["报纸政治", "真伪辨认", "史料陷阱"] },
      { lesson: 22, title: "神秘事务司与保密档案（史学视角）", keyPoints: ["可知与不可知", "研究与禁忌", "脚注阅读"] },
      { lesson: 23, title: "O.W.L. 魔法史：题型与证据链写作", keyPoints: ["论点先行禁忌", "的年代标注", "因果三句话"] },
      { lesson: 24, title: "O.W.L. 魔法史综合演练", keyPoints: ["限时策略", "取舍", "复查清单"] }
    ]
  },
  {
    chapter: 6,
    title: "六年级 · 课表未排（N.E.W.T. 衔接纲要）",
    lessons: [
      { lesson: 25, title: "N.E.W.T. 史学方法与论文结构", keyPoints: ["问题意识", "二手研究位置", "引用幽灵口述的限制"] },
      { lesson: 26, title: "血统话语史：争议史料精读", keyPoints: ["语境还原", "谁是听众", "话语后果"] },
      { lesson: 27, title: "「黑暗」叙事框架：史学不设剧情", keyPoints: ["结构模型", "证据层级", "反对寓言化"] }
    ]
  },
  {
    chapter: 7,
    title: "七年级 · 课表每周 1 节",
    lessons: [
      { lesson: 28, title: "当代魔法治理与国际协调", keyPoints: ["条约网络", "主权让渡", "保密共同体"] },
      { lesson: 29, title: "魔法—法律交界：判例史导读", keyPoints: ["先例思维", "制度缝隙", "跨学科接口"] },
      { lesson: 30, title: "贯通复习：年表—地图—机构", keyPoints: ["压缩技能", "三重对齐", "自述检测"] },
      { lesson: 31, title: "N.E.W.T. 冲刺：引用、口述与收尾", keyPoints: ["学术诚实", "收尾句式", "带走一本笔记"] }
    ]
  }
];

export const crossAnchors = [
  { concept: "保密法与政治哲学", linkedSubject: "道德与法治（麻瓜研究）", linkedLesson: "制度分析类课文", desc: "康斯坦丝讲「权力如何立法」，宾斯讲「恐惧如何立法」——同一结构，两种档案" },
  { concept: "巫麻冲突叙事", linkedSubject: "历史（麻瓜研究）", linkedLesson: "民族国家与战争", desc: "赫伯特排麻瓜年表，宾斯排巫师反应——对照阅读能看见互动的缝隙" },
  { concept: "记忆与真相", linkedSubject: "魔咒学", linkedLesson: "记忆咒相关理论课", desc: "弗立维讲咒语机制，宾斯讲记忆作为公共物品——碰撞点在「可被篡改之物」" }
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
    "……很好。最后一题把『为什么』写完整。",
    "……不错。把混淆的两个条约拆开。"
  ],
  A: [
    "……及格。但这门课你能走得更稳。",
    "……过了线。错题重写一遍，只要论点—证据。",
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

window.subject_magicHistory = {
  subjectMeta,
  teachingStyle,
  syllabus,
  crossAnchors,
  professorComments,
  lessonMap,
  questionBank
};

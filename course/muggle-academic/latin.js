/**
 * subjects/latin.js
 * 麻瓜学术系 · 拉丁语分科
 * 教授：米兰达·珀西瓦尔
 *
 * 包含：
 *   subjectMeta      科目元数据
 *   syllabus         课程大纲（章节+知识点）
 *   crossAnchors     跨学科锚点
 *   teachingStyle    教学风格常量
 *
 * 课程安排参考现实初一标准：
 *   - 每周4节课（周一、周三、周五、周六）
 *   - 包含期中和期末考试
 *   - 包含复习环节
 *   - 魔法世界包装，但避免具体学生或原著剧情
 *
 * 题库文件：latin-questionBank.js
 */

import { questionBank } from './latin-questionBank.js';

export const subjectMeta = {
  key: "latin",
  name: "拉丁语",
  icon: "🏛️",
  professor: "米兰达·珀西瓦尔",
  desc: "词根、格变、词源——所有咒语的母语，死的语言里藏着活的魔法",
  unlockGrade: 3,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle:    "停顿一秒，「不错。」然后继续（这已经是最高评价）",
  errorStyle:     "只重复一次正确发音，不解释，等你自己发现哪里不对",
  officeHours:    "预约制，不接受临时来访",
  signature:      "把咒语写在黑板上，然后一个词一个词地剥开它的词根，不带任何表情",
  prop:           "细头钢笔，极其精确的批注，牛津拉丁语词典，一本磨旧的咒语词源手册",
  catchphrase:    "拉丁语是死的语言——但它从未停止说话。"
};

export const syllabus = [
  { chapter: 1, title: "语言基础与词根", lessons: [
    { lesson: 1, title: "词根与词汇构建", keyPoints: [
      "词根是单词的意义核心（如 dict= 说，port= 带）",
      "前缀改变方向或程度（un-, re-, pre-）",
      "后缀改变词性（-tion, -ness, -ly）",
      "通过词根推断未知单词含义的方法"
    ]},
    { lesson: 2, title: "基础词汇积累", keyPoints: [
      "日常高频词汇分类记忆",
      "单词的音形义结合",
      "词汇在句子中的运用",
      "常用介词搭配"
    ]},
    { lesson: 3, title: "词性识别", keyPoints: [
      "名词、动词、形容词、副词的区分",
      "词性变化规则",
      "同一词根不同词性的单词",
      "词性对句子结构的影响"
    ]},
    { lesson: 4, title: "构词法进阶", keyPoints: [
      "合成词的构成方式",
      "转化词的用法",
      "派生词的规律",
      "词源追溯方法"
    ]}
  ]},
  { chapter: 2, title: "语法结构基础", lessons: [
    { lesson: 5, title: "句子成分", keyPoints: [
      "主语、谓语、宾语的识别",
      "定语、状语、补语的作用",
      "基本句型结构",
      "句子成分分析方法"
    ]},
    { lesson: 6, title: "句子类型", keyPoints: [
      "简单句、并列句、复合句",
      "并列连词的使用",
      "从句的基本概念",
      "句子类型判断"
    ]},
    { lesson: 7, title: "名词与冠词", keyPoints: [
      "可数名词与不可数名词",
      "冠词a/an/the的用法",
      "零冠词情况",
      "名词所有格"
    ]},
    { lesson: 8, title: "代词", keyPoints: [
      "人称代词主格与宾格",
      "物主代词与反身代词",
      "指示代词与不定代词",
      "代词的一致性"
    ]}
  ]},
  { chapter: 3, title: "时态系统", lessons: [
    { lesson: 9, title: "一般现在时", keyPoints: [
      "经常性、习惯性动作",
      "客观事实与真理",
      "动词第三人称单数变化",
      "时间标志词"
    ]},
    { lesson: 10, title: "现在进行时", keyPoints: [
      "正在进行的动作",
      "现在分词构成",
      "be动词的配合",
      "暂时情况与发展趋势"
    ]},
    { lesson: 11, title: "一般过去时", keyPoints: [
      "过去发生的动作",
      "规则动词与不规则动词",
      "动词过去式变化",
      "过去时间标志词"
    ]},
    { lesson: 12, title: "过去进行时", keyPoints: [
      "过去某时刻正在进行的动作",
      "过去进行时构成",
      "与一般过去时的区别",
      "场景描述用法"
    ]},
    { lesson: 13, title: "一般将来时", keyPoints: [
      "will/be going to的用法",
      "现在进行时表将来",
      "一般现在时表将来",
      "将来时间表达"
    ]},
    { lesson: 14, title: "现在完成时", keyPoints: [
      "过去动作对现在的影响",
      "already/yet/just的用法",
      "延续性动词与短暂性动词",
      "for与since的区别"
    ]}
  ]},
  { chapter: 4, title: "英式发音与语调", lessons: [
    { lesson: 15, title: "标准英音（RP）", keyPoints: [
      "Received Pronunciation：英国标准发音",
      "元音与辅音的英式发音",
      "重音位置对词义的影响",
      "RP发音特点"
    ]},
    { lesson: 16, title: "连读与省音", keyPoints: [
      "连读规则",
      "省音现象",
      "弱读与强读",
      "口语中的发音变化"
    ]},
    { lesson: 17, title: "语调与节奏", keyPoints: [
      "句子重音与信息焦点",
      "升调与降调的用法",
      "英语节奏特点",
      "语调对语义的影响"
    ]},
    { lesson: 18, title: "音标学习", keyPoints: [
      "国际音标表",
      "元音分类与发音",
      "辅音分类与发音",
      "音标拼读练习"
    ]}
  ]},
  { chapter: 5, title: "英式英语特色", lessons: [
    { lesson: 19, title: "英式与美式差异", keyPoints: [
      "日常词汇差异：lift/elevator, tube/subway",
      "拼写差异：colour/color, centre/center",
      "习语差异",
      "差异的历史原因"
    ]},
    { lesson: 20, title: "英语的历史层次", keyPoints: [
      "古英语与日耳曼词根",
      "诺曼征服后的法语词汇",
      "拉丁语的影响",
      "英语词汇的多元来源"
    ]},
    { lesson: 21, title: "不列颠文化背景", keyPoints: [
      "英语发源地的文化印记",
      "伦敦作为语言中心",
      "牛津英语词典的权威",
      "语言与文化的联系"
    ]},
    { lesson: 22, title: "日常交际用语", keyPoints: [
      "问候与道别",
      "请求与感谢",
      "道歉与回应",
      "礼貌用语"
    ]}
  ]},
  { chapter: 6, title: "第一学期期中复习与考试", lessons: [
    { lesson: 23, title: "词汇专题复习", keyPoints: [
      "词根词缀综合运用",
      "高频词汇回顾",
      "易混词辨析",
      "词汇记忆技巧"
    ]},
    { lesson: 24, title: "语法专题复习", keyPoints: [
      "时态综合运用",
      "句子结构分析",
      "词性与句型",
      "语法易错点"
    ]},
    { lesson: 25, title: "听说专题复习", keyPoints: [
      "发音规则巩固",
      "听力技巧",
      "口语表达",
      "语调练习"
    ]},
    { lesson: 26, title: "综合练习", keyPoints: [
      "模拟测试",
      "错题分析",
      "时间管理",
      "答题技巧"
    ]},
    { lesson: 27, title: "第一学期期中考试", keyPoints: [
      "考试范围：第1-5章",
      "题型：听力、选择、填空、句型转换、写作",
      "考试时间：120分钟",
      "评分标准"
    ]}
  ]},
  { chapter: 7, title: "语法进阶", lessons: [
    { lesson: 28, title: "情态动词", keyPoints: [
      "can/could/may/might的用法",
      "must/have to的区别",
      "should/ought to的用法",
      "情态动词表推测"
    ]},
    { lesson: 29, title: "非谓语动词", keyPoints: [
      "动词不定式",
      "动名词",
      "分词作定语与状语",
      "非谓语动词的选择"
    ]},
    { lesson: 30, title: "比较级与最高级", keyPoints: [
      "形容词比较级构成",
      "最高级用法",
      "比较结构",
      "特殊变化形容词"
    ]},
    { lesson: 31, title: "介词与连词", keyPoints: [
      "常用介词搭配",
      "连词的分类",
      "从属连词用法",
      "介词短语"
    ]}
  ]},
  { chapter: 8, title: "句型转换与复合句", lessons: [
    { lesson: 32, title: "否定句与疑问句", keyPoints: [
      "肯定句变否定句",
      "一般疑问句构成",
      "特殊疑问句",
      "反义疑问句"
    ]},
    { lesson: 33, title: "宾语从句", keyPoints: [
      "that/if/whether引导的从句",
      "特殊疑问词引导的从句",
      "时态一致",
      "语序变化"
    ]},
    { lesson: 34, title: "状语从句", keyPoints: [
      "时间状语从句",
      "条件状语从句",
      "原因状语从句",
      "结果状语从句"
    ]},
    { lesson: 35, title: "定语从句", keyPoints: [
      "关系代词who/whom/which/that",
      "关系副词where/when/why",
      "限定性与非限定性从句",
      "介词+关系代词"
    ]}
  ]},
  { chapter: 9, title: "阅读与写作", lessons: [
    { lesson: 36, title: "阅读理解技巧", keyPoints: [
      "主旨大意把握",
      "细节信息查找",
      "推理判断",
      "词义猜测"
    ]},
    { lesson: 37, title: "记叙文阅读", keyPoints: [
      "故事结构分析",
      "人物与情节",
      "时间顺序",
      "情感表达"
    ]},
    { lesson: 38, title: "应用文写作", keyPoints: [
      "书信格式",
      "邮件写作",
      "通知与便条",
      "邀请函"
    ]},
    { lesson: 39, title: "记叙文写作", keyPoints: [
      "开头与结尾",
      "细节描写",
      "段落衔接",
      "时态运用"
    ]},
    { lesson: 40, title: "说明文写作", keyPoints: [
      "说明顺序",
      "说明方法",
      "语言准确性",
      "结构清晰"
    ]}
  ]},
  { chapter: 10, title: "第一学期期末复习与考试", lessons: [
    { lesson: 41, title: "全学期语法回顾", keyPoints: [
      "时态系统梳理",
      "句型结构总结",
      "复合句综合",
      "语法体系构建"
    ]},
    { lesson: 42, title: "读写专题复习", keyPoints: [
      "阅读理解策略",
      "写作技巧提升",
      "常见错误纠正",
      "表达准确性"
    ]},
    { lesson: 43, title: "听说专题复习", keyPoints: [
      "听力理解训练",
      "口语表达练习",
      "发音与语调",
      "日常对话"
    ]},
    { lesson: 44, title: "综合模拟", keyPoints: [
      "全真模拟考试",
      "时间管理训练",
      "错题回顾",
      "考试策略"
    ]},
    { lesson: 45, title: "第一学期期末考试", keyPoints: [
      "考试范围：第1-9章",
      "题型：听力、选择、完形填空、阅读理解、写作",
      "考试时间：150分钟",
      "评分标准"
    ]}
  ]},
  { chapter: 11, title: "第二学期语法拓展", lessons: [
    { lesson: 46, title: "过去完成时", keyPoints: [
      "过去完成时构成",
      "过去动作的先后顺序",
      "与一般过去时的配合",
      "时间状语"
    ]},
    { lesson: 47, title: "被动语态", keyPoints: [
      "被动语态构成",
      "主动变被动",
      "被动语态的用法",
      "不同时态的被动"
    ]},
    { lesson: 48, title: "直接引语与间接引语", keyPoints: [
      "直接引语变间接引语",
      "时态变化",
      "人称变化",
      "特殊句式"
    ]},
    { lesson: 49, title: "主谓一致", keyPoints: [
      "主谓一致原则",
      "集体名词的主谓一致",
      "并列主语",
      "特殊情况"
    ]}
  ]},
  { chapter: 12, title: "词汇与表达进阶", lessons: [
    { lesson: 50, title: "同义词与反义词", keyPoints: [
      "同义词辨析",
      "反义词运用",
      "近义词替换",
      "词汇多样性"
    ]},
    { lesson: 51, title: "习语与俗语", keyPoints: [
      "常用英语习语",
      "习语的文化背景",
      "习语在语境中的运用",
      "避免字面理解错误"
    ]},
    { lesson: 52, title: "词汇搭配", keyPoints: [
      "动词短语",
      "形容词搭配",
      "介词搭配",
      "固定表达"
    ]},
    { lesson: 53, title: "高级表达", keyPoints: [
      "复杂句型运用",
      "连接词使用",
      "表达准确性提升",
      "正式与非正式表达"
    ]}
  ]},
  { chapter: 13, title: "阅读与写作进阶", lessons: [
    { lesson: 54, title: "说明文阅读", keyPoints: [
      "说明对象与特征",
      "说明顺序",
      "信息提取",
      "图表阅读"
    ]},
    { lesson: 55, title: "议论文阅读", keyPoints: [
      "论点与论据",
      "论证方法",
      "逻辑结构",
      "作者观点"
    ]},
    { lesson: 56, title: "议论文写作", keyPoints: [
      "论点明确",
      "论据充分",
      "论证结构",
      "语言有力"
    ]},
    { lesson: 57, title: "概要写作", keyPoints: [
      "要点提取",
      "语言简洁",
      "结构清晰",
      "保持原意"
    ]},
    { lesson: 58, title: "情景写作", keyPoints: [
      "根据提示写作",
      "情境理解",
      "语言得体",
      "格式正确"
    ]}
  ]},
  { chapter: 14, title: "第二学期期中复习与考试", lessons: [
    { lesson: 59, title: "语法专题复习", keyPoints: [
      "被动语态综合",
      "间接引语运用",
      "时态呼应",
      "易错点总结"
    ]},
    { lesson: 60, title: "读写专题复习", keyPoints: [
      "各类文体阅读",
      "写作技巧提升",
      "表达多样性",
      "逻辑结构"
    ]},
    { lesson: 61, title: "词汇专题复习", keyPoints: [
      "习语与搭配",
      "同义词辨析",
      "词汇运用",
      "词汇量扩展"
    ]},
    { lesson: 62, title: "综合练习", keyPoints: [
      "模拟测试",
      "错题分析",
      "答题策略",
      "时间管理"
    ]},
    { lesson: 63, title: "第二学期期中考试", keyPoints: [
      "考试范围：第10-13章",
      "题型：听力、选择、完形填空、阅读理解、写作",
      "考试时间：120分钟",
      "评分标准"
    ]}
  ]},
  { chapter: 15, title: "专题拓展", lessons: [
    { lesson: 64, title: "英语与魔法", keyPoints: [
      "咒语词源探索",
      "语言的魔力",
      "英语在魔法中的应用",
      "词源与魔力的联系"
    ]},
    { lesson: 65, title: "英国文学选读", keyPoints: [
      "经典文学片段",
      "文学语言特点",
      "名著中的英语",
      "文学欣赏"
    ]},
    { lesson: 66, title: "文化与习俗", keyPoints: [
      "英国文化特色",
      "社交礼仪",
      "节日习俗",
      "文化差异理解"
    ]},
    { lesson: 67, title: "影视与媒体英语", keyPoints: [
      "电影台词赏析",
      "新闻英语",
      "广告语言",
      "媒体英语特点"
    ]}
  ]},
  { chapter: 16, title: "总复习", lessons: [
    { lesson: 68, title: "语法总复习", keyPoints: [
      "时态系统回顾",
      "句型结构梳理",
      "复合句综合",
      "语法体系整合"
    ]},
    { lesson: 69, title: "词汇总复习", keyPoints: [
      "词根词缀系统",
      "高频词汇巩固",
      "词汇运用",
      "词汇网络构建"
    ]},
    { lesson: 70, title: "阅读总复习", keyPoints: [
      "各类文体阅读",
      "阅读技巧总结",
      "快速阅读",
      "深度理解"
    ]},
    { lesson: 71, title: "写作总复习", keyPoints: [
      "各类文体写作",
      "写作结构",
      "语言表达",
      "修改与润色"
    ]},
    { lesson: 72, title: "听说总复习", keyPoints: [
      "听力技巧",
      "口语表达",
      "发音与语调",
      "交际能力"
    ]}
  ]},
  { chapter: 17, title: "期末复习与考试", lessons: [
    { lesson: 73, title: "综合复习（语法·词汇·写作）", keyPoints: [
      "全学年语法体系回顾",
      "高频词汇与词根系统",
      "写作结构与语言表达",
      "阅读策略总结"
    ]},
    { lesson: 74, title: "模拟练习与答疑", keyPoints: [
      "全真模拟练习",
      "疑难点集中答疑",
      "答题技巧与时间分配",
      "常见错误回顾"
    ]},
    { lesson: 75, title: "期末考试", keyPoints: [
      "考试范围：全学年内容",
      "题型：选择、完形填空、阅读理解、写作",
      "考试时间：120分钟",
      "评分标准"
    ]}
  ]}
];

export const crossAnchors = [
  {
    concept: "拉丁语词根与咒语词源",
    linkedSubject: "charms",
    linkedLesson: "咒语发音精准性：拉丁语系魔咒语音学（第17课）",
    desc: "弗立维与珀西瓦尔是学院里公认走得最近的两位教授——珀西瓦尔的拉丁语课拆解词根，弗立维的魔咒课讲同一个词为什么能和魔力共振。弗立维第17课的语音学内容，半数灵感来自珀西瓦尔的「拉丁语音节与魔力频率」讲义；珀西瓦尔批改作业时也偶尔会在空白处注上：「弗立维课上会用到这个」"
  },
  {
    concept: "罗马扩张与拉丁语的传播",
    linkedSubject: "history",
    linkedLesson: "古罗马与帝国主义时代",
    desc: "赫伯特讲帝国怎么传播文化时，米兰达会从语言角度接上：罗马军团把拉丁语带到欧洲每一个角落，今天的法语、西班牙语、意大利语全是它的后裔——包括英语里三分之一的词汇"
  },
  {
    concept: "拉丁语格变与物理描述",
    linkedSubject: "physics",
    linkedLesson: "声音的特性（第6课）",
    desc: "珀西瓦尔讲拉丁语元音发音时，塞拉菲娜的声波课正好解释了原理：不同元音对应不同的声道共振频率——「这就是为什么咒语里每个音节的位置不能随便换，」珀西瓦尔说，「物理不允许。」"
  },
  {
    concept: "拉丁语与英语文学的词汇来源",
    linkedSubject: "literature",
    linkedLesson: "古英语与贝奥武夫（第1课）",
    desc: "伊莱莎讲《贝奥武夫》时会提到，古英语里有大量来自拉丁语的借词——那是罗马人留下的痕迹。珀西瓦尔和洛夫古德偶尔在走廊里对过话：「你讲的那批词，」珀西瓦尔说，「我这边有词根表。」"
  }
];

export { questionBank };

window.subject_latin = { subjectMeta, syllabus, questionBank, crossAnchors, teachingStyle };
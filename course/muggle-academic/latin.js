/**
 * latin.js
 * 麻瓜学术系 · 拉丁语
 * 教授：米兰达·珀西瓦尔（Miranda Percival）
 * 课程体系：英国 KS3 → GCSE → A-Level（共 70 课，14 章，横跨 7 年级）
 */

import { lessonMap } from './latin-lesson.js';
import { questionBank } from './latin-questionBank.js';

export const subjectMeta = {
  key: "latin",
  name: "拉丁语",
  icon: "🏛️",
  professor: "米兰达·珀西瓦尔",
  desc: "词根、格变、词源——所有咒语的母语，死的语言里藏着活的魔法",
  unlockGrade: 1,
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
  // ── 第1年·KS3 ────────────────────────────────────────────
  {
    chapter: 1, yearRange: "1年级", phase: "KS3",
    title: "拉丁语的声音",
    lessons: [
      { lesson: 1,  title: "字母表与发音规则",       keyPoints: ["拉丁字母表", "元音发音规则", "辅音发音规则", "音节划分"] },
      { lesson: 2,  title: "主格与宾格：动作的主语与宾语",   keyPoints: ["主格名词变格", "宾格名词变格", "动词与宾语的一致", "SOV语序"] },
      { lesson: 3,  title: "第一变位动词（现在时）",       keyPoints: ["动词词干识别", "现在时词尾变化", "人称与数的一致", "简单句子翻译"] },
      { lesson: 4,  title: "形容词的性与数格一致",   keyPoints: ["形容词三性", "性数格一致原则", "形容词变格", "名词形容词搭配"] },
      { lesson: 5,  title: "简单句：SOV语序与读法",   keyPoints: ["主-宾-谓语序", "句子成分识别", "基本翻译技巧", "常见句式结构"] }
    ]
  },
  {
    chapter: 2, yearRange: "1年级", phase: "KS3",
    title: "格的系统",
    lessons: [
      { lesson: 6,  title: "与格：间接宾语",     keyPoints: ["与格的功能", "名词与格变格", "与格动词搭配", "给予类动词"] },
      { lesson: 7,  title: "夺格：工具、伴随、来源",       keyPoints: ["夺格的多重用法", "夺格变格", "夺格介词", "工具与方式表达"] },
      { lesson: 8,  title: "属格：所有关系",       keyPoints: ["属格表示所属", "属格变格", "属格位置", "描述性属格"] },
      { lesson: 9,  title: "第二变位动词",     keyPoints: ["第二变位词干", "现在时变位", "与第一变位的区别", "常见第二变位动词"] },
      { lesson: 10, title: "数词与基础词汇（含咒语词根初探）",       keyPoints: ["基数词与序数词", "时间表达", "常用词汇积累", "咒语中的拉丁词根"] }
    ]
  },
  // ── 第2年·KS3 ────────────────────────────────────────────
  {
    chapter: 3, yearRange: "2年级", phase: "KS3",
    title: "时态扩展",
    lessons: [
      { lesson: 11, title: "未完成过去时：持续的动作",       keyPoints: ["未完成时含义", "变位规则", "与现在时的区别", "场景描述"] },
      { lesson: 12, title: "完成时：已完成的事件",     keyPoints: ["完成时构成", "主动态完成时", "不规则完成分词", "时间表达"] },
      { lesson: 13, title: "大过去时",       keyPoints: ["大过去时含义", "变位规则", "与完成时的区别", "叙事时序"] },
      { lesson: 14, title: "间接引语：宾语从句",       keyPoints: ["ut/ne引导从句", "时态变化", "动词不定式用法", "转述技巧"] },
      { lesson: 15, title: "关系从句：qui, quae, quod",   keyPoints: ["关系代词变格", "限定与非限定从句", "先行词一致", "翻译方法"] }
    ]
  },
  {
    chapter: 4, yearRange: "2年级", phase: "KS3",
    title: "句法深化",
    lessons: [
      { lesson: 16, title: "不定式结构（宾语+不定式）",     keyPoints: ["不定式用法", "accusative + infinitive", "主语不定式", "目的表达"] },
      { lesson: 17, title: "分词：现在分词与完成被动分词",   keyPoints: ["现在分词构成", "完成被动分词", "分词作定语", "独立夺格结构"] },
      { lesson: 18, title: "属格的扩展用法（描述性属格）",   keyPoints: ["描述性属格", "主观属格与客观属格", "品质属格", "来源属格"] },
      { lesson: 19, title: "句子成分分析方法",       keyPoints: ["句法分析步骤", "主从结构识别", "修饰关系判断", "复杂句拆解"] },
      { lesson: 20, title: "词根与词缀规律（含英语衍生词）", keyPoints: ["拉丁词根识别", "常见词缀", "英语中的拉丁借词", "词源追溯"] }
    ]
  },
  // ── 第3年·KS3 ────────────────────────────────────────────
  {
    chapter: 5, yearRange: "3年级", phase: "KS3",
    title: "词源学",
    lessons: [
      { lesson: 21, title: "拉丁语对英语词汇的影响",     keyPoints: ["英语中的拉丁词汇", "借词历史", "词汇层次", "词义演变"] },
      { lesson: 22, title: "医学与法律术语的拉丁根",       keyPoints: ["医学术语", "法律术语", "专业词汇构成", "词根识别"] },
      { lesson: 23, title: "科学命名法：双名法与分类",       keyPoints: ["林奈双名法", "属名与种加词", "分类层级", "拉丁语在科学中的地位"] },
      { lesson: 24, title: "咒语词根精析",   keyPoints: ["Lumos、Expecto、Alohomora等词根", "咒语结构分析", "词源与魔力的联系", "发音与效果"] },
      { lesson: 25, title: "罗马世界背景：共和国与帝国",       keyPoints: ["罗马历史概览", "拉丁语发展阶段", "文化背景对语言的影响", "政治术语来源"] }
    ]
  },
  {
    chapter: 6, yearRange: "3年级", phase: "KS3",
    title: "文本阅读",
    lessons: [
      { lesson: 26, title: "简化拉丁文阅读训练",  keyPoints: ["基础阅读技巧", "词汇识别", "句法分析", "翻译实践"] },
      { lesson: 27, title: "凯撒《高卢战记》节选",   keyPoints: ["历史文本特点", "军事术语", "叙事风格", "文化背景"] },
      { lesson: 28, title: "奥维德《变形记》节选",   keyPoints: ["神话文本", "诗歌语言", "变形主题", "文学手法"] },
      { lesson: 29, title: "格言、铭文与箴言",       keyPoints: ["常见拉丁格言", "铭文解读", "箴言的智慧", "引用场景"] },
      { lesson: 30, title: "中世纪拉丁语：教会与学术传统", keyPoints: ["中世纪拉丁特点", "教会拉丁语", "学术拉丁语", "语言延续性"] }
    ]
  },
  // ── 第4年·GCSE ────────────────────────────────────────────
  {
    chapter: 7, yearRange: "4年级", phase: "GCSE",
    title: "高级语法",
    lessons: [
      { lesson: 31, title: "虚拟语气：现在与未完成时", keyPoints: ["虚拟语气用法", "现在虚拟式", "未完成虚拟式", "条件句"] },
      { lesson: 32, title: "条件句：真实与非真实条件",   keyPoints: ["条件句类型", "真实条件", "非真实条件", "时态呼应"] },
      { lesson: 33, title: "间接疑问句",       keyPoints: ["间接疑问结构", "疑问词变化", "语序调整", "时态变化"] },
      { lesson: 34, title: "动名词与目的结构",     keyPoints: ["动名词用法", "目的不定式", "目的从句", "结果从句"] },
      { lesson: 35, title: "被动语态（所有时态）",   keyPoints: ["被动语态构成", "各时态被动", "施动者表达", "翻译技巧"] }
    ]
  },
  {
    chapter: 8, yearRange: "4年级", phase: "GCSE",
    title: "GCSE文本",
    lessons: [
      { lesson: 36, title: "指定文本精读（散文）", keyPoints: ["散文文本分析", "作者风格", "修辞手法", "主题解读"] },
      { lesson: 37, title: "指定诗歌：六音步格律",   keyPoints: ["六音步结构", "韵律分析", "诗歌节奏", "拉丁诗歌特点"] },
      { lesson: 38, title: "修辞手法识别",       keyPoints: ["明喻与暗喻", "反复与排比", "拟人与夸张", "修辞效果"] },
      { lesson: 39, title: "无准备文本翻译训练",   keyPoints: ["快速阅读", "上下文推断", "词义选择", "流畅翻译"] },
      { lesson: 40, title: "文化历史背景：奥古斯都时代", keyPoints: ["奥古斯都时期", "文学繁荣", "政治语境", "文本解读"] }
    ]
  },
  // ── 第5年·GCSE ────────────────────────────────────────────
  {
    chapter: 9, yearRange: "5年级", phase: "GCSE",
    title: "翻译技巧",
    lessons: [
      { lesson: 41, title: "难句结构分析策略",   keyPoints: ["复杂句拆解", "长句处理", "语序调整", "逻辑分析"] },
      { lesson: 42, title: "词义辨析与语境推断",   keyPoints: ["多义词处理", "语境分析", "词义选择", "文化对应"] },
      { lesson: 43, title: "历史语境对理解的影响",   keyPoints: ["历史背景重要性", "时代差异", "文化概念", "文本定位"] },
      { lesson: 44, title: "文本评注方法",       keyPoints: ["评注要素", "语言分析", "文学评价", "学术规范"] },
      { lesson: 45, title: "GCSE真题训练",       keyPoints: ["题型熟悉", "答题技巧", "时间管理", "常见错误"] }
    ]
  },
  {
    chapter: 10, yearRange: "5年级", phase: "GCSE",
    title: "综合输出",
    lessons: [
      { lesson: 46, title: "拉丁短文写作",       keyPoints: ["写作结构", "词汇选择", "语法准确", "表达流畅"] },
      { lesson: 47, title: "文学评论写作框架",   keyPoints: ["评论结构", "论点构建", "文本引用", "分析深度"] },
      { lesson: 48, title: "跨文化比较：罗马与魔法世界的语言观", keyPoints: ["语言与魔法", "文化对比", "词源联系", "概念对应"] },
      { lesson: 49, title: "词源学综合：一个词根的旅程",     keyPoints: ["词根追踪", "词义演变", "跨语言影响", "文化印记"] },
      { lesson: 50, title: "GCSE综合复习",       keyPoints: ["知识梳理", "重点强化", "模拟练习", "考试准备"] }
    ]
  },
  // ── 第6年·A-Level ─────────────────────────────────────────
  {
    chapter: 11, yearRange: "6年级", phase: "A-Level",
    title: "古典文本精读",
    lessons: [
      { lesson: 51, title: "西塞罗散文：修辞结构分析",     keyPoints: ["修辞学", "演讲技巧", "论证结构", "文体特点"] },
      { lesson: 52, title: "维吉尔《埃涅阿斯纪》：史诗传统",     keyPoints: ["史诗结构", "英雄主题", "神话引用", "文学地位"] },
      { lesson: 53, title: "李维历史著作：史学写法",     keyPoints: ["历史叙述", "史料处理", "道德评价", "叙事技巧"] },
      { lesson: 54, title: "塔西佗：讽刺与历史评判",           keyPoints: ["写作风格", "讽刺手法", "历史观", "政治批判"] },
      { lesson: 55, title: "奥古斯都文学的政治语境",     keyPoints: ["文学与政治", "赞助制度", "意识形态", "文本解读"] }
    ]
  },
  {
    chapter: 12, yearRange: "6年级", phase: "A-Level",
    title: "语言学深度",
    lessons: [
      { lesson: 56, title: "拉丁语法理论：格系统的逻辑", keyPoints: ["格理论", "句法功能", "语义角色", "语言类型学"] },
      { lesson: 57, title: "语言演变：拉丁语到罗曼语",   keyPoints: ["语音变化", "形态演变", "语法简化", "罗曼语族"] },
      { lesson: 58, title: "铭文研究与文献考证",     keyPoints: ["铭文类型", "书写系统", "文献校勘", "历史价值"] },
      { lesson: 59, title: "斯多葛与伊壁鸠鲁哲学文本",     keyPoints: ["哲学流派", "文本特点", "概念分析", "翻译难点"] },
      { lesson: 60, title: "学术写作：论证与引证规范", keyPoints: ["学术规范", "引用格式", "论证结构", "学术风格"] }
    ]
  },
  // ── 第7年·A-Level ─────────────────────────────────────────
  {
    chapter: 13, yearRange: "7年级", phase: "A-Level",
    title: "文学与思想",
    lessons: [
      { lesson: 61, title: "悲剧传统：塞内卡与希腊悲剧比较", keyPoints: ["悲剧理论", "塞内卡风格", "希腊影响", "主题对比"] },
      { lesson: 62, title: "贺拉斯：颂歌与文学批评",  keyPoints: ["颂歌形式", "美学理论", "文学批评", "影响研究"] },
      { lesson: 63, title: "卢克莱修：诗歌中的哲学论证", keyPoints: ["伊壁鸠鲁哲学", "诗歌表达", "论证结构", "科学思想"] },
      { lesson: 64, title: "文体比较：散文、诗歌、历史写法的差异", keyPoints: ["文体特征", "写作目的", "语言选择", "读者定位"] },
      { lesson: 65, title: "原创翻译与注释写作", keyPoints: ["翻译策略", "注释规范", "学术深度", "文本阐释"] }
    ]
  },
  {
    chapter: 14, yearRange: "7年级", phase: "A-Level",
    title: "综合冲刺",
    lessons: [
      { lesson: 66, title: "无准备文本：速读与精译", keyPoints: ["快速理解", "准确翻译", "难点处理", "时间控制"] },
      { lesson: 67, title: "文学评论：论点建构",  keyPoints: ["论题设计", "论证展开", "文本支撑", "批判性分析"] },
      { lesson: 68, title: "语言演变论文写作", keyPoints: ["研究选题", "文献综述", "论证结构", "结论推导"] },
      { lesson: 69, title: "跨学科综合（拉丁语与魔咒课的联动）", keyPoints: ["语言与魔法", "词根关联", "发音共振", "知识整合"] },
      { lesson: 70, title: "A-Level综合模拟",      keyPoints: ["模拟考试", "综合训练", "答题策略", "考前准备"] }
    ]
  }
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

window.subject_latin = {
  subjectMeta,
  teachingStyle,
  syllabus,
  crossAnchors,
  lessonMap,
  questionBank
};
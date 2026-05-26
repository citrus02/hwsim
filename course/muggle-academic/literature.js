/**
 * literature.js
 * 麻瓜学术系 · 英国文学
 * 教授：伊莱莎·洛夫古德（Eliza Lovegood）
 * 课程体系：从贝奥武夫到现代文学（共 48 课，13章）
 */

import { lessonMap } from './literature-lesson.js';
import { questionBank } from './literature-questionBank.js';
import { registerSubjectData } from '../subject-registry.js';

export const subjectMeta = {
  key: "literature",
  name: "语文与文学",
  icon: "📖",
  professor: "伊莱莎·洛夫古德",
  desc: "从贝奥武夫到狄更斯——不列颠文字编织的无声咒语",
  unlockGrade: 3,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

export const teachingStyle = {
  praiseStyle:    "「这是你能看见的」，安静而肯定",
  errorStyle:     "「你再听一遍」，从不说错，引导重新感知",
  officeHours:    "随时，但喜欢在窗边聊",
  signature:      "朗读莎士比亚原文，闭眼，然后问「你们听见什么了？」",
  prop:           "旧版莎翁全集、济慈诗集、维多利亚时代文学杂志",
  catchphrase:    "文字是没有魔力的魔法，但在英国，它创造了最伟大的文学"
};

export const syllabus = [
  // ── Year 1 · KS3（莎士比亚与叙事）──────────────────────────────
  { chapter: 1, title: "莎士比亚入门", lessons: [
    { lesson: 1,  title: "《仲夏夜之梦》：魔法、爱情与混乱",   keyPoints: ["戏剧是什么——区别于小说和诗歌", "《仲夏夜之梦》故事概述", "魔法在戏剧中象征内心无法控制的力量"] },
    { lesson: 2,  title: "戏剧结构：幕、场与戏剧性转折",       keyPoints: ["幕（act）的功能与划分", "场（scene）的转换与推进", "戏剧性转折的定义与作用"] },
    { lesson: 3,  title: "喜剧与悲剧的本质区别",               keyPoints: ["喜剧：以混乱开始以团圆结束", "悲剧：以崇高开始以毁灭结束", "卡塔西斯（净化）概念"] },
    { lesson: 4,  title: "莎士比亚的语言：双关、意象与韵律",   keyPoints: ["双关（pun）的定义与例子", "意象（imagery）的作用", "抑扬格五音步（iambic pentameter）"] },
    { lesson: 5,  title: "伊丽莎白时代剧场：环球剧院与观众",   keyPoints: ["环球剧院的结构特点", "观众的阶层分布", "男演员扮演女角色的传统"] }
  ]},
  { chapter: 2, title: "叙事文学", lessons: [
    { lesson: 6,  title: "小说与短篇小说的叙事差异",           keyPoints: ["小说（novel）的定义与特征", "短篇小说（short story）的特征", "篇幅与叙事结构的关系"] },
    { lesson: 7,  title: "叙述者视角：一人称、三人称全知",     keyPoints: ["第一人称（I）叙述的特点与局限", "第三人称全知叙述的特点", "视角选择对故事的影响"] },
    { lesson: 8,  title: "哥特文学：《弗兰肯斯坦》节选",       keyPoints: ["哥特文学的定义与要素", "玛丽·雪莱与《弗兰肯斯坦》的创作背景", "怪物的人性困境"] },
    { lesson: 9,  title: "哥特元素：黑暗、秘密与怪物",         keyPoints: ["哥特式场景的构成", "哥特式人物原型", "怪物作为人性黑暗面的象征"] },
    { lesson: 10, title: "19世纪社会背景与文学的关系",         keyPoints: ["工业革命与狄更斯文学", "中产阶级兴起与连载小说", "女性作家的兴起：奥斯汀与勃朗特姐妹"] }
  ]},

  // ── Year 2 · KS3（诗歌与浪漫主义）────────────────────────────
  { chapter: 3, title: "浪漫主义诗歌", lessons: [
    { lesson: 11, title: "自然诗人：华兹华斯与柯勒律治",   keyPoints: ["浪漫主义诗歌的背景", "华兹华斯：自然与记忆", "柯勒律治：超验想象"] },
    { lesson: 12, title: "激情诗人：拜伦、雪莱与济慈",     keyPoints: ["拜伦式英雄", "雪莱的政治理想", "济慈对美与短暂的探索"] },
    { lesson: 13, title: "诗歌形式：韵律与意象",           keyPoints: ["抒情诗的形式分类", "意象与隐喻的运用", "韵脚与节奏的作用"] },
    { lesson: 14, title: "十四行诗：爱与时间",             keyPoints: ["十四行诗的结构", "莎士比亚十四行诗主题", "彼特拉克式vs莎士比亚式"] },
    { lesson: 15, title: "浪漫主义与工业革命的张力",       keyPoints: ["工业化对自然的破坏", "诗人对现代性的抵抗", "浪漫主义遗产"] }
  ]},

  // ── Year 2 · KS3（维多利亚小说）───────────────────────────────
  { chapter: 4, title: "维多利亚小说", lessons: [
    { lesson: 16, title: "狄更斯与社会批判",             keyPoints: ["狄更斯的创作背景", "连载小说的形式", "儿童与贫困的主题"] },
    { lesson: 17, title: "奥斯汀：婚姻与社会",           keyPoints: ["奥斯汀的叙事讽刺", "婚姻与经济的关系", "自由间接引语技巧"] },
    { lesson: 18, title: "勃朗特姐妹与哥特传统",         keyPoints: ["《简·爱》的女性独立主题", "《呼啸山庄》的哥特氛围", "约克郡荒原的象征"] },
    { lesson: 19, title: "维多利亚时代的女性写作",       keyPoints: ["女性笔名的使用", "女性与阅读大众化", "文学作为女性表达空间"] },
    { lesson: 20, title: "期中复习：Year 1-2要点梳理",   keyPoints: ["莎士比亚与戏剧体系", "叙事视角与哥特元素", "浪漫主义与维多利亚小说"] }
  ]},

  // ── Year 3 · KS3（现代文学）────────────────────────────────────
  { chapter: 5, title: "现代文学转型", lessons: [
    { lesson: 21, title: "意识流：乔伊斯与伍尔夫",       keyPoints: ["意识流的定义", "内心独白技巧", "现代主义对传统叙事的挑战"] },
    { lesson: 22, title: "一战诗歌：壕沟里的文字",       keyPoints: ["战争诗歌的特点", "欧文与格雷夫斯的写作", "幻灭与真实"] },
    { lesson: 23, title: "荒诞与存在：二战后文学",       keyPoints: ["存在主义影响", "荒诞文学的特征", "贝克特与品特"] },
    { lesson: 24, title: "后殖民文学：多元的声音",       keyPoints: ["后殖民写作的背景", "身份认同的主题", "英语作为殖民语言"] },
    { lesson: 25, title: "期末复习：Year 3要点",         keyPoints: ["现代主义技巧", "战争文学", "后殖民视角"] }
  ]},

  // ── Year 4 · GCSE预备（精读与写作技巧）────────────────────────
  { chapter: 6, title: "GCSE文本精读", lessons: [
    { lesson: 26, title: "《哈姆雷特》精读",             keyPoints: ["哈姆雷特的存在之问", "主要独白分析", "延迟行动的主题"] },
    { lesson: 27, title: "《傲慢与偏见》精读",           keyPoints: ["叙事声音分析", "人物关系图", "社会批判的幽默"] },
    { lesson: 28, title: "《呼啸山庄》精读",             keyPoints: ["嵌套叙事结构", "爱情与复仇", "自然的象征功能"] },
    { lesson: 29, title: "战争诗歌精读：欧文",           keyPoints: ["拉丁文引言的讽刺意义", "感官意象的运用", "对荣耀叙事的反驳"] },
    { lesson: 30, title: "GCSE答题技巧：PEE结构",        keyPoints: ["PEE论证结构", "引文选取原则", "分析语言手法的用词"] }
  ]},

  // ── Year 4 · GCSE（写作技巧进阶）──────────────────────────────
  { chapter: 7, title: "写作与创作", lessons: [
    { lesson: 31, title: "创意写作：人物与场景",         keyPoints: ["人物塑造方法", "场景设定技巧", "开头与结尾的设计"] },
    { lesson: 32, title: "说明文与议论文写作",           keyPoints: ["论点的组织", "证据的运用", "说服性语言技巧"] },
    { lesson: 33, title: "诗歌创作：意象与节奏",         keyPoints: ["意象的捕捉", "自由诗与格律诗", "修订与精练"] },
    { lesson: 34, title: "文学评论写作",                 keyPoints: ["文本分析框架", "批判性观点的表达", "论据的层次"] },
    { lesson: 35, title: "期中考试模拟",                 keyPoints: ["GCSE题型练习", "时间管理", "常见错误"] }
  ]},

  // ── Year 5 · GCSE（专题深化）───────────────────────────────────
  { chapter: 8, title: "文学主题专题", lessons: [
    { lesson: 36, title: "权力与压迫",                   keyPoints: ["权力在文学中的呈现", "压迫的语言", "反抗的叙事"] },
    { lesson: 37, title: "身份与他者",                   keyPoints: ["自我认同主题", "边缘化人物", "镜像与影子的象征"] },
    { lesson: 38, title: "自然与文明",                   keyPoints: ["荒野的象征", "人与自然的张力", "生态文学视角"] },
    { lesson: 39, title: "女性声音的演变",               keyPoints: ["从奥斯汀到伍尔夫", "女性主义文学批评", "当代女性写作"] },
    { lesson: 40, title: "比较阅读：跨文本主题分析",     keyPoints: ["主题比较的方法", "不同文体的处理", "综合论证的写作"] }
  ]},

  // ── Year 5 · GCSE（语言与风格）────────────────────────────────
  { chapter: 9, title: "语言与文体分析", lessons: [
    { lesson: 41, title: "语言选择与效果",               keyPoints: ["词汇的内涵与外延", "句式的节奏效果", "语气与调性"] },
    { lesson: 42, title: "比喻与象征",                   keyPoints: ["明喻与暗喻的区别", "延伸隐喻", "象征的建立与运作"] },
    { lesson: 43, title: "叙事结构：开头、中间、结尾",   keyPoints: ["叙事弧线", "情节时序的处理", "开放式结局"] },
    { lesson: 44, title: "戏剧语言：台词与舞台指示",     keyPoints: ["对话的功能", "沉默与省略", "舞台语言的经济性"] },
    { lesson: 45, title: "GCSE期末复习",                 keyPoints: ["核心文本回顾", "写作技巧总结", "模拟练习"] }
  ]},

  // ── Year 6 · A-Level预备（批评理论入门）───────────────────────
  { chapter: 10, title: "文学批评入门", lessons: [
    { lesson: 46, title: "新批评：文本细读",             keyPoints: ["文本自足性", "细读方法", "张力与反讽"] },
    { lesson: 47, title: "历史主义批评",                 keyPoints: ["文本与历史语境", "意识形态分析", "文化物质主义"] },
    { lesson: 48, title: "女性主义批评",                 keyPoints: ["性别与权力", "被压制的女性声音", "重读经典"] },
    { lesson: 49, title: "后殖民批评",                   keyPoints: ["东方主义概念", "混杂性与第三空间", "去殖民化阅读"] },
    { lesson: 50, title: "心理分析批评",                 keyPoints: ["弗洛伊德与文学", "无意识与欲望", "作者、人物与读者"] }
  ]},

  // ── Year 6 · A-Level（经典文本精读）───────────────────────────
  { chapter: 11, title: "A-Level文本精读", lessons: [
    { lesson: 51, title: "《失乐园》与史诗传统",         keyPoints: ["弥尔顿的史诗雄心", "撒旦作为反英雄", "天堂叙事的政治维度"] },
    { lesson: 52, title: "《弗兰肯斯坦》精读",           keyPoints: ["哥特与启蒙的张力", "创造者的责任", "多层嵌套叙事"] },
    { lesson: 53, title: "《黑暗之心》精读",             keyPoints: ["殖民主义的批判", "不可靠叙述者", "象征性的旅程结构"] },
    { lesson: 54, title: "T·S·艾略特诗歌精读",         keyPoints: ["《荒原》的碎片化技巧", "互文性写作", "现代性的危机"] },
    { lesson: 55, title: "《1984》精读",                 keyPoints: ["语言与权力", "反乌托邦叙事", "新话与思想控制"] }
  ]},

  // ── Year 6 · A-Level（综合写作与考试技巧）──────────────────────
  { chapter: 12, title: "A-Level写作与批评", lessons: [
    { lesson: 56, title: "A-Level论文写作",               keyPoints: ["论点的精确化", "批评术语的运用", "文本证据的整合"] },
    { lesson: 57, title: "比较文学论文",                  keyPoints: ["跨文本比较框架", "同异分析结构", "避免描述性写作"] },
    { lesson: 58, title: "独立研究与个人回应",            keyPoints: ["研究问题的设计", "一手文本与二手文献", "个人声音的建立"] },
    { lesson: 59, title: "A-Level模拟考试",              keyPoints: ["限时写作策略", "答题规划", "评分标准解读"] },
    { lesson: 60, title: "期末综合复习",                  keyPoints: ["批评理论回顾", "文本清单", "写作模板整合"] }
  ]},

  // ── Year 7 · A-Level进阶（拓展与创作）──────────────────────────
  { chapter: 13, title: "创作与拓展研究", lessons: [
    { lesson: 61, title: "创意写作：风格模仿",           keyPoints: ["风格分析与模仿", "声音的有意识构建", "模仿与原创的边界"] },
    { lesson: 62, title: "跨媒介改编研究",               keyPoints: ["小说改编为电影", "媒介差异与信息损耗", "改编忠诚度的争议"] },
    { lesson: 63, title: "当代英国文学",                  keyPoints: ["多元文化的英国书写", "移民文学", "身份的流动性"] },
    { lesson: 64, title: "文学与伦理",                    keyPoints: ["文学的道德责任", "同理心与想象力", "有问题的作者与伟大的作品"] },
    { lesson: 65, title: "读者反应理论",                  keyPoints: ["读者的主动性", "诠释社群", "意义的协商产生"] }
  ]},

  // ── Year 7 · A-Level（毕业综合）────────────────────────────────
  { chapter: 14, title: "总复习与期末考试", lessons: [
    { lesson: 66, title: "文学史脉络梳理",               keyPoints: ["古英语到当代文学的演变", "各时期代表作家", "文学史关键转折点"] },
    { lesson: 67, title: "批评理论综合运用",              keyPoints: ["多元批评视角的综合", "选择理论框架的原则", "批评的对话性"] },
    { lesson: 68, title: "写作能力综合提升",              keyPoints: ["各类文体写作要点", "精确与表达力的平衡", "修订策略"] },
    { lesson: 69, title: "模拟练习与答疑",               keyPoints: ["全真模拟训练", "疑难问题解答", "最后冲刺策略"] },
    { lesson: 70, title: "期末考试",                      keyPoints: ["考试范围：全学年内容", "题型：阅读理解·文学评论·创意写作", "考试时间：180分钟"] }
  ]}
];

export const crossAnchors = [
  {
    concept: "莎士比亚语言与词根结构",
    linkedSubject: "latin",
    linkedLesson: "词根与词汇构建（第1课）",
    desc: "伊莱莎从文学意境进入莎士比亚，米兰达从语言结构进入——两门课在同一个词里：「Expectation」（期待）来自拉丁语 exspectare，米兰达会把词根列在黑板上，伊莱莎把这个词放在哈姆雷特的独白里"
  },
  {
    concept: "狄更斯与19世纪工业社会",
    linkedSubject: "history",
    linkedLesson: "技术革命与科学进步（第3课）",
    desc: "赫伯特讲19世纪工业化带来的社会分化时，伊莱莎会提到狄更斯：《雾都孤儿》《双城记》不是偶然产生的，它们是工业革命社会现实的文学记录——历史数据和文学叙事，是同一个时代的两种语言"
  },
  {
    concept: "文学中的社会批判与规则正义",
    linkedSubject: "civics",
    linkedLesson: "社会生活离不开规则（第38课）",
    desc: "狄更斯笔下的童工制度、奥威尔《1984》的极权主义——伊莱莎讲这些文学作品时，康斯坦丝会从规则合法性角度追问：什么样的规则是正义的，谁来决定规则的边界"
  },
  {
    concept: "英国湖区自然诗与地理",
    linkedSubject: "geography",
    linkedLesson: "欧洲西部（第34课）",
    desc: "华兹华斯的湖区诗歌、勃朗特姐妹的约克郡荒原——伊莱莎朗读这些时，菲利克斯会把英国的地形图展开：温带海洋性气候、丘陵地形、多雾多雨，正是塑造了这些文学意象的地理条件"
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
window.subject_literature = subjectData;

// civics-questionBank.js
// 霍格沃茨道德与法治课程 - 一年级随堂测验题库
// 教授：康斯坦丝·沙克博特
// 每课3题：basic（+2分）、medium（0分，全对得E）、hard（-1分）

export const questionBank = [
  // ==================== 第1章 成长的节拍（第1-3课） ====================
  {
    lesson: 1, title: "中学序曲",
    questions: [
      { type: "choice", difficulty: "basic", text: "成长最主要的特点是：", options: ["A. 身高增长", "B. 年龄增长", "C. 身心的变化与发展", "D. 知识增加"], answer: "C", knowledgePoint: "成长的含义", analysis: "成长不仅是身体上的变化，更是心理、认知、情感等多方面的全面发展。" },
      { type: "choice", difficulty: "medium", text: "面对新的学习环境，正确的态度是：", options: ["A. 害怕挑战，逃避困难", "B. 积极适应，主动学习", "C. 等待别人帮助", "D. 保持小学的学习方式"], answer: "B", knowledgePoint: "适应新环境", analysis: "积极主动地适应新环境，调整学习方法，才能更好地应对中学阶段的挑战。" },
      { type: "choice", difficulty: "hard", text: "从魔法视角看，成长意味着：", options: ["A. 魔力增强", "B. 责任与能力的同步提升", "C. 年龄增长", "D. 学会更多咒语"], answer: "B", knowledgePoint: "成长的本质", analysis: "真正的成长不仅是能力的提升，更是对责任的理解与担当，能力与责任应当同步发展。" }
    ]
  },
  {
    lesson: 2, title: "学习新天地",
    questions: [
      { type: "choice", difficulty: "basic", text: "学习的意义在于：", options: ["A. 获得好成绩", "B. 培养能力和思维方式", "C. 应付考试", "D. 得到表扬"], answer: "B", knowledgePoint: "学习的价值", analysis: "学习不仅仅是获取知识，更重要的是培养思维方式和解决问题的能力。" },
      { type: "choice", difficulty: "medium", text: "学习中的困难：", options: ["A. 应该避免", "B. 是成长的机会", "C. 说明自己不行", "D. 是老师的问题"], answer: "B", knowledgePoint: "学习的态度", analysis: "克服困难后的理解，是真正的学习成果和快乐。" },
      { type: "choice", difficulty: "hard", text: "魔法学习与麻瓜学习的共同点是：", options: ["A. 都需要魔杖", "B. 都需要理解和练习", "C. 都很容易", "D. 不需要思考"], answer: "B", knowledgePoint: "学习的共性", analysis: "无论是魔法还是麻瓜知识，都需要理解原理并通过练习掌握。" }
    ]
  },
  {
    lesson: 3, title: "发现自己",
    questions: [
      { type: "choice", difficulty: "basic", text: "认识自己的重要性在于：", options: ["A. 知道自己的缺点", "B. 找到人生方向", "C. 获得自信", "D. 以上都是"], answer: "D", knowledgePoint: "自我认识", analysis: "了解自己的优缺点、兴趣和目标，是做出明智选择的基础。" },
      { type: "choice", difficulty: "medium", text: "接纳自己意味着：", options: ["A. 容忍自己的缺点", "B. 理解并接受真实的自己", "C. 忽视自己的不足", "D. 骄傲自满"], answer: "B", knowledgePoint: "自我接纳", analysis: "接纳自己不是容忍缺点，而是理解真实的自己并努力改进。" },
      { type: "choice", difficulty: "hard", text: "天赋与责任的关系是：", options: ["A. 天赋越大，责任越小", "B. 天赋与责任无关", "C. 天赋越大，责任越大", "D. 责任是负担"], answer: "C", knowledgePoint: "责任意识", analysis: "能力越大，责任越大。天赋的意义在于承担相应的责任。" }
    ]
  },

  // ==================== 第2章 友谊与同行（第4-6课） ====================
  {
    lesson: 4, title: "友谊与成长",
    questions: [
      { type: "choice", difficulty: "basic", text: "友谊最重要的特质是：", options: ["A. 一起玩耍", "B. 相互理解与支持", "C. 物质交换", "D. 相同的兴趣爱好"], answer: "B", knowledgePoint: "友谊的特质", analysis: "真正的友谊建立在相互理解、信任和支持的基础上。" },
      { type: "choice", difficulty: "medium", text: "当朋友之间发生冲突时，正确的做法是：", options: ["A. 立即绝交", "B. 主动沟通，理解对方", "C. 冷战到底", "D. 向他人抱怨"], answer: "B", knowledgePoint: "冲突处理", analysis: "面对冲突，主动沟通、换位思考是解决问题的关键。" },
      { type: "choice", difficulty: "hard", text: "关于友谊的界限，下列说法正确的是：", options: ["A. 朋友之间没有秘密", "B. 朋友应该无条件支持对方", "C. 友谊需要保持适当的边界", "D. 朋友之间可以随意干涉对方"], answer: "C", knowledgePoint: "友谊的边界", analysis: "健康的友谊需要保持适当的个人空间和边界。" }
    ]
  },
  {
    lesson: 5, title: "交友的智慧",
    questions: [
      { type: "choice", difficulty: "basic", text: "建立真挚友谊的基础是：", options: ["A. 真诚", "B. 金钱", "C. 权力", "D. 外貌"], answer: "A", knowledgePoint: "交友原则", analysis: "展现真实的自己，才能吸引真正欣赏你的人。" },
      { type: "choice", difficulty: "medium", text: "慎重交友的原因是：", options: ["A. 朋友会影响你的价值观", "B. 朋友越多越好", "C. 朋友不重要", "D. 交朋友很麻烦"], answer: "A", knowledgePoint: "交友选择", analysis: "朋友会影响你的价值观和行为，选择朋友时要慎重。" },
      { type: "choice", difficulty: "hard", text: "不同背景同学间的交往：", options: ["A. 应该避免", "B. 是学习的机会", "C. 会产生矛盾", "D. 没有意义"], answer: "B", knowledgePoint: "跨背景交往", analysis: "理解不同于你的人，是成长的重要部分。" }
    ]
  },
  {
    lesson: 6, title: "交往新时空",
    questions: [
      { type: "choice", difficulty: "basic", text: "现代交往的特点是：", options: ["A. 距离不再是障碍", "B. 只有面对面交流", "C. 不需要沟通", "D. 很简单"], answer: "A", knowledgePoint: "现代交往", analysis: "网络让我们能与远方的人交流，但也要注意交往的质量。" },
      { type: "choice", difficulty: "medium", text: "虚拟交往与现实交往的关系是：", options: ["A. 虚拟交往可以替代现实交往", "B. 两者相辅相成", "C. 虚拟交往更好", "D. 现实交往不重要"], answer: "B", knowledgePoint: "交往方式", analysis: "虚拟交往拓展了社交范围，但真正的情感需要现实中的陪伴。" },
      { type: "choice", difficulty: "hard", text: "在网络交往中，应该：", options: ["A. 说当面不敢说的话", "B. 保持真实和尊重", "C. 可以随意批评别人", "D. 泄露个人信息"], answer: "B", knowledgePoint: "网络礼仪", analysis: "在虚拟世界中也要保持真实和尊重，不要做当面不敢做的事。" }
    ]
  },

  // ==================== 第3章 师长情谊（第7-9课） ====================
  {
    lesson: 7, title: "走近老师",
    questions: [
      { type: "choice", difficulty: "basic", text: "教师的主要职责是：", options: ["A. 讲课", "B. 教书育人", "C. 批改作业", "D. 维持纪律"], answer: "B", knowledgePoint: "教师职责", analysis: "教师不仅传授知识，更重要的是培养学生的品德和能力。" },
      { type: "choice", difficulty: "medium", text: "理解老师的工作有助于：", options: ["A. 更好地学习", "B. 建立良好的师生关系", "C. 提高成绩", "D. 以上都是"], answer: "D", knowledgePoint: "师生理解", analysis: "理解老师的付出，能帮助学生更好地配合教学。" },
      { type: "choice", difficulty: "hard", text: "不同教学风格的存在说明：", options: ["A. 有的老师教得好，有的教得不好", "B. 教学需要多样化", "C. 老师应该统一教学方式", "D. 学生只能适应一种风格"], answer: "B", knowledgePoint: "教学多样性", analysis: "不同的教学风格适应不同学生的学习特点。" }
    ]
  },
  {
    lesson: 8, title: "亦师亦友",
    questions: [
      { type: "choice", difficulty: "basic", text: "良好师生关系的基础是：", options: ["A. 尊重", "B. 畏惧", "C. 讨好", "D. 无视"], answer: "A", knowledgePoint: "师生关系", analysis: "尊重是建立良好师生关系的基础。" },
      { type: "choice", difficulty: "medium", text: "与老师沟通的正确方式是：", options: ["A. 抱怨", "B. 寻求理解", "C. 沉默", "D. 顶撞"], answer: "B", knowledgePoint: "师生沟通", analysis: "沟通不是抱怨，而是寻求理解和解决问题。" },
      { type: "choice", difficulty: "hard", text: "教学相长的含义是：", options: ["A. 老师教学生", "B. 学生教老师", "C. 师生互相学习", "D. 老师比学生厉害"], answer: "C", knowledgePoint: "教学相长", analysis: "好的教学是双向的，老师和学生可以互相学习。" }
    ]
  },
  {
    lesson: 9, title: "正确对待反馈",
    questions: [
      { type: "choice", difficulty: "basic", text: "表扬的意义在于：", options: ["A. 骄傲的资本", "B. 前进的动力", "C. 停止努力", "D. 看不起别人"], answer: "B", knowledgePoint: "对待表扬", analysis: "表扬是肯定，应该成为前进的动力而非骄傲的资本。" },
      { type: "choice", difficulty: "medium", text: "对待批评的正确态度是：", options: ["A. 生气", "B. 认真倾听并改进", "C. 辩解", "D. 记恨"], answer: "B", knowledgePoint: "对待批评", analysis: "批评是帮助改进的机会，应该认真倾听和分析。" },
      { type: "choice", difficulty: "hard", text: "接受反馈需要：", options: ["A. 封闭的心态", "B. 开放的心态", "C. 固执己见", "D. 拒绝改变"], answer: "B", knowledgePoint: "反馈心态", analysis: "成长需要开放的心态，愿意接受反馈并改变自己。" }
    ]
  },

  // ==================== 第5章 亲情之爱（第13-15课） ====================
  {
    lesson: 13, title: "家的意味",
    questions: [
      { type: "choice", difficulty: "basic", text: "家庭最核心的功能是：", options: ["A. 提供住所", "B. 情感支持与陪伴", "C. 提供物质财富", "D. 传承姓氏"], answer: "B", knowledgePoint: "家庭功能", analysis: "家庭不仅提供物质保障，更重要的是提供情感支持和归属感。" },
      { type: "choice", difficulty: "medium", text: "处理家庭矛盾的关键是：", options: ["A. 争对错", "B. 沟通与理解", "C. 回避问题", "D. 寻求外人帮助"], answer: "B", knowledgePoint: "家庭沟通", analysis: "有效的沟通和相互理解是解决家庭矛盾的关键。" },
      { type: "choice", difficulty: "hard", text: "关于家庭价值观，正确的观点是：", options: ["A. 传统价值观都是好的", "B. 现代价值观完全取代传统", "C. 传统与现代可以融合", "D. 价值观不重要"], answer: "C", knowledgePoint: "家庭价值观", analysis: "家庭价值观的传承需要结合时代发展，传统与现代可以相互融合。" }
    ]
  },
  {
    lesson: 14, title: "让家更美好",
    questions: [
      { type: "choice", difficulty: "basic", text: "家庭关系的特点是：", options: ["A. 简单", "B. 亲密且复杂", "C. 不需要经营", "D. 一成不变"], answer: "B", knowledgePoint: "家庭关系", analysis: "家庭关系是最亲密的关系，也需要用心经营。" },
      { type: "choice", difficulty: "medium", text: "营造和谐家庭氛围需要：", options: ["A. 一个人努力", "B. 每个成员的努力", "C. 父母的努力", "D. 不需要努力"], answer: "B", knowledgePoint: "家庭和谐", analysis: "和谐的家庭需要每个成员的共同努力。" },
      { type: "choice", difficulty: "hard", text: "家庭成员间的沟通应该：", options: ["A. 想说什么就说什么", "B. 尊重对方的感受", "C. 只说好听的", "D. 保持沉默"], answer: "B", knowledgePoint: "家庭沟通技巧", analysis: "有效的沟通需要尊重和理解对方的感受。" }
    ]
  },
  {
    lesson: 15, title: "亲情与责任",
    questions: [
      { type: "choice", difficulty: "basic", text: "家庭成员间的责任是：", options: ["A. 负担", "B. 爱的体现", "C. 麻烦", "D. 可有可无"], answer: "B", knowledgePoint: "家庭责任", analysis: "责任是亲情的体现，是家庭成员间相互关爱的表现。" },
      { type: "choice", difficulty: "medium", text: "相互关爱的做法包括：", options: ["A. 一句问候", "B. 一次帮助", "C. 一份理解", "D. 以上都是"], answer: "D", knowledgePoint: "关爱方式", analysis: "关爱体现在日常生活的小事中。" },
      { type: "choice", difficulty: "hard", text: "家庭价值观的传承：", options: ["A. 不需要改变", "B. 应该完全抛弃传统", "C. 应该结合时代发展", "D. 只传承现代价值观"], answer: "C", knowledgePoint: "价值观传承", analysis: "家庭价值观的传承需要结合时代发展，取其精华去其糟粕。" }
    ]
  },

  // ==================== 第6章 生命的思考（第16-18课） ====================
  {
    lesson: 16, title: "生命的宝贵",
    questions: [
      { type: "choice", difficulty: "basic", text: "生命的特点是：", options: ["A. 可以重来", "B. 不可逆且独特", "C. 没有价值", "D. 很漫长"], answer: "B", knowledgePoint: "生命特性", analysis: "生命是不可逆的，每个人的生命都是独一无二的。" },
      { type: "choice", difficulty: "medium", text: "珍惜生命意味着：", options: ["A. 害怕死亡", "B. 热爱生活", "C. 浪费时间", "D. 无所事事"], answer: "B", knowledgePoint: "生命态度", analysis: "珍惜生命不是害怕死亡，而是充分体验和热爱生活。" },
      { type: "choice", difficulty: "hard", text: "对生命的敬畏之心：", options: ["A. 只敬畏自己的生命", "B. 敬畏所有生命", "C. 不需要敬畏", "D. 只敬畏人类的生命"], answer: "B", knowledgePoint: "生命敬畏", analysis: "敬畏生命不仅是敬畏自己的生命，也是敬畏他人和所有生命。" }
    ]
  },
  {
    lesson: 17, title: "生命的韧性",
    questions: [
      { type: "choice", difficulty: "basic", text: "挫折是：", options: ["A. 坏事", "B. 成长的机会", "C. 应该避免", "D. 无法战胜"], answer: "B", knowledgePoint: "挫折意义", analysis: "挫折是成长的必修课，能让人变得更坚强。" },
      { type: "choice", difficulty: "medium", text: "增强生命韧性的方法是：", options: ["A. 逃避困难", "B. 设定目标、寻求支持", "C. 抱怨命运", "D. 放弃努力"], answer: "B", knowledgePoint: "韧性培养", analysis: "增强韧性需要设定目标、寻求支持、保持积极心态。" },
      { type: "choice", difficulty: "hard", text: "积极面对挫折意味着：", options: ["A. 盲目乐观", "B. 理性应对", "C. 无视困难", "D. 自暴自弃"], answer: "B", knowledgePoint: "挫折应对", analysis: "积极面对不是盲目乐观，而是理性分析和解决问题。" }
    ]
  },
  {
    lesson: 18, title: "绽放生命之花",
    questions: [
      { type: "choice", difficulty: "basic", text: "生命的意义在于：", options: ["A. 长度", "B. 深度和广度", "C. 财富", "D. 地位"], answer: "B", knowledgePoint: "生命意义", analysis: "生命的意义不在于长度，而在于创造的价值和影响。" },
      { type: "choice", difficulty: "medium", text: "实现生命价值的途径是：", options: ["A. 无所事事", "B. 设定目标，努力奋斗", "C. 依赖他人", "D. 等待机会"], answer: "B", knowledgePoint: "价值实现", analysis: "实现生命价值需要设定目标并努力奋斗。" },
      { type: "choice", difficulty: "hard", text: "探索个人价值：", options: ["A. 一次性完成", "B. 持续的过程", "C. 不需要思考", "D. 别人决定"], answer: "B", knowledgePoint: "价值探索", analysis: "探索个人价值是一个持续的过程，需要不断反思和尝试。" }
    ]
  },

  // ==================== 第8章 青春时光（第22-24课） ====================
  {
    lesson: 22, title: "悄悄变化的我",
    questions: [
      { type: "choice", difficulty: "basic", text: "青春期最显著的变化是：", options: ["A. 身高体重增长", "B. 心理成熟", "C. 知识增加", "D. 兴趣变化"], answer: "A", knowledgePoint: "青春期生理变化", analysis: "青春期是身体发育的关键时期，身高体重的快速增长是最直观的表现。" },
      { type: "choice", difficulty: "medium", text: "面对青春期的变化，应该：", options: ["A. 焦虑不安", "B. 接纳并适应", "C. 逃避现实", "D. 过度关注外表"], answer: "B", knowledgePoint: "接纳青春期", analysis: "接纳青春期的身心变化，积极适应，是健康度过青春期的关键。" },
      { type: "choice", difficulty: "hard", text: "自我认同的建立意味着：", options: ["A. 模仿他人", "B. 找到自己的独特价值", "C. 追求完美", "D. 忽视缺点"], answer: "B", knowledgePoint: "自我认同", analysis: "自我认同是在了解自己的基础上，找到独特的自我价值。" }
    ]
  },
  {
    lesson: 23, title: "成长的不仅仅是身体",
    questions: [
      { type: "choice", difficulty: "basic", text: "独立思考意味着：", options: ["A. 盲从", "B. 不盲从，有自己的判断", "C. 固执己见", "D. 不思考"], answer: "B", knowledgePoint: "独立思考", analysis: "独立思考意味着不盲目跟从，有自己的判断和见解。" },
      { type: "choice", difficulty: "medium", text: "开发创造潜力需要：", options: ["A. 勇于尝试", "B. 害怕失败", "C. 墨守成规", "D. 不思考"], answer: "A", knowledgePoint: "创造力培养", analysis: "开发创造力需要勇于尝试、敢于质疑、善于联想。" },
      { type: "choice", difficulty: "hard", text: "批判性思维的作用是：", options: ["A. 否定一切", "B. 理性分析和判断", "C. 盲目相信", "D. 没有用处"], answer: "B", knowledgePoint: "批判性思维", analysis: "批判性思维帮助我们理性分析信息，做出明智的判断。" }
    ]
  },
  {
    lesson: 24, title: "青春有格",
    questions: [
      { type: "choice", difficulty: "basic", text: "行己有耻的含义是：", options: ["A. 知道什么是可耻的", "B. 做任何事都无所谓", "C. 不知羞耻", "D. 只做坏事"], answer: "A", knowledgePoint: "行己有耻", analysis: "行己有耻意味着知道什么是可耻的，并且不去做。" },
      { type: "choice", difficulty: "medium", text: "止于至善的追求是：", options: ["A. 达到完美", "B. 追求最高的道德境界", "C. 做个普通人", "D. 不需要努力"], answer: "B", knowledgePoint: "止于至善", analysis: "止于至善是一个永无止境的追求道德完善的过程。" },
      { type: "choice", difficulty: "hard", text: "道德准则的建立：", options: ["A. 别人强加的", "B. 自己认同的", "C. 不需要准则", "D. 随波逐流"], answer: "B", knowledgePoint: "道德准则", analysis: "道德准则不是别人强加的，而是自己认同并遵守的行为规范。" }
    ]
  },

  // ==================== 第12章 民主与法治（第34-36课） ====================
  {
    lesson: 34, title: "生活需要规则",
    questions: [
      { type: "choice", difficulty: "basic", text: "规则的主要作用是：", options: ["A. 限制自由", "B. 维护秩序与公平", "C. 增加麻烦", "D. 区别对待"], answer: "B", knowledgePoint: "规则的作用", analysis: "规则的核心作用是维护社会秩序，保障公平。" },
      { type: "choice", difficulty: "medium", text: "规则与自由的关系是：", options: ["A. 规则限制自由", "B. 自由不需要规则", "C. 规则保障自由", "D. 规则与自由对立"], answer: "C", knowledgePoint: "规则与自由", analysis: "合理的规则保障每个人平等地享有自由。" },
      { type: "choice", difficulty: "hard", text: "不同体系规则的共同点是：", options: ["A. 维护秩序", "B. 形式相同", "C. 内容一致", "D. 制定者相同"], answer: "A", knowledgePoint: "规则的共性", analysis: "尽管形式不同，规则的核心目的都是维护秩序与和谐。" }
    ]
  },
  {
    lesson: 35, title: "我们与规则同行",
    questions: [
      { type: "choice", difficulty: "basic", text: "依规则行事的要求是：", options: ["A. 被动服从", "B. 主动遵守", "C. 选择性遵守", "D. 不遵守"], answer: "B", knowledgePoint: "规则遵守", analysis: "依规则行事应该是主动的，理解并认同规则的价值。" },
      { type: "choice", difficulty: "medium", text: "树立规则意识的意义是：", options: ["A. 限制自由", "B. 现代公民的基本素养", "C. 没必要", "D. 麻烦"], answer: "B", knowledgePoint: "规则意识", analysis: "规则意识是现代公民的基本素养，无论在哪里都很重要。" },
      { type: "choice", difficulty: "hard", text: "规则意识的培养：", options: ["A. 一蹴而就", "B. 从小培养，逐步养成", "C. 长大后自然有", "D. 不需要培养"], answer: "B", knowledgePoint: "意识培养", analysis: "规则意识需要从小培养，从遵守小事开始。" }
    ]
  },
  {
    lesson: 36, title: "规则伴我们成长",
    questions: [
      { type: "choice", difficulty: "basic", text: "特殊群体需要：", options: ["A. 歧视", "B. 特殊保护", "C. 忽视", "D. 不公平对待"], answer: "B", knowledgePoint: "特殊保护", analysis: "未成年人、老年人等特殊群体需要法律和社会的特殊保护。" },
      { type: "choice", difficulty: "medium", text: "维护权益的途径包括：", options: ["A. 协商", "B. 调解", "C. 法律途径", "D. 以上都是"], answer: "D", knowledgePoint: "权益维护", analysis: "当权益受到侵害时，可以通过协商、调解或法律途径维护。" },
      { type: "choice", difficulty: "hard", text: "自我保护意识的重要性：", options: ["A. 不重要", "B. 生存的重要技能", "C. 害怕的表现", "D. 不需要"], answer: "B", knowledgePoint: "自我保护", analysis: "自我保护是重要的生存技能，需要不断增强。" }
    ]
  },

  // ==================== 第14章 专题复习（第40-42课） ====================
  {
    lesson: 40, title: "道德修养与规则意识",
    questions: [
      { type: "choice", difficulty: "basic", text: "道德与规则的关系是：", options: ["A. 无关", "B. 道德指导规则，规则保障道德", "C. 规则比道德重要", "D. 道德比规则重要"], answer: "B", knowledgePoint: "道德与规则", analysis: "道德是内在准则，规则是外在约束，二者相辅相成。" },
      { type: "choice", difficulty: "medium", text: "道德修养的重要性在于：", options: ["A. 成为更好的人", "B. 获得利益", "C. 炫耀自己", "D. 没用"], answer: "A", knowledgePoint: "道德修养", analysis: "良好的道德修养能让你成为更好的人，也能让社会更美好。" },
      { type: "choice", difficulty: "hard", text: "道德修养与规则意识的关系：", options: ["A. 对立", "B. 相辅相成", "C. 无关", "D. 互相阻碍"], answer: "B", knowledgePoint: "二者关系", analysis: "有道德的人会自觉遵守规则，遵守规则的人会培养良好的道德。" }
    ]
  },
  {
    lesson: 41, title: "社会责任与担当",
    questions: [
      { type: "choice", difficulty: "basic", text: "社会责任的含义是：", options: ["A. 个人对社会的义务", "B. 与自己无关", "C. 负担", "D. 别人的事"], answer: "A", knowledgePoint: "社会责任", analysis: "社会责任是个人对社会应尽的义务，包括关心社会、服务社会。" },
      { type: "choice", difficulty: "medium", text: "担当责任的意义是：", options: ["A. 帮助社会，成长自己", "B. 吃亏", "C. 浪费时间", "D. 没必要"], answer: "A", knowledgePoint: "责任担当", analysis: "担当责任不仅能帮助社会，也能提升自己的能力和价值。" },
      { type: "choice", difficulty: "hard", text: "承担社会责任可以从哪里开始：", options: ["A. 做大事", "B. 身边小事", "C. 等长大了再说", "D. 不需要做"], answer: "B", knowledgePoint: "责任实践", analysis: "承担社会责任可以从身边小事做起，关爱他人、参与公益。" }
    ]
  },
  {
    lesson: 42, title: "成长与发展",
    questions: [
      { type: "choice", difficulty: "basic", text: "成长的阶段性意味着：", options: ["A. 每个阶段都有不同任务", "B. 所有阶段都一样", "C. 不需要成长", "D. 成长很简单"], answer: "A", knowledgePoint: "成长阶段", analysis: "成长有不同阶段，每个阶段有不同的任务和挑战。" },
      { type: "choice", difficulty: "medium", text: "全面发展的要求是：", options: ["A. 只学习知识", "B. 德智体美劳全面发展", "C. 只关注成绩", "D. 不需要发展"], answer: "B", knowledgePoint: "全面发展", analysis: "全面发展包括知识、能力、品德、身体等多方面的发展。" },
      { type: "choice", difficulty: "hard", text: "终身成长的理念是：", options: ["A. 学习只在学校", "B. 持续学习，不断进步", "C. 长大后就不用学习", "D. 学习不重要"], answer: "B", knowledgePoint: "终身学习", analysis: "学习是终身的过程，无论年龄多大都可以学习和成长。" }
    ]
  }
];
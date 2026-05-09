/**
 * muggleStudies-questionBank.js
 * 麻瓜研究课程题库
 * 教授：查瑞蒂·伯比奇（Charity Burbage）
 *
 * 每课 3 题：basic / medium / hard
 */

export const questionBank = [

  // ════════════════════════════════════════
  // 麻瓜日常：生活与家庭（第1-4课）
  // ════════════════════════════════════════

  {
    lesson: 1,
    title: "麻瓜研究导论",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜研究的核心目标是什么？",
        options: ["A. 学习麻瓜的科技发明", "B. 消除偏见，培养同理心，促进两个世界的和平共存", "C. 找出麻瓜的弱点", "D. 准备与麻瓜开战"],
        answer: "B",
        knowledgePoint: "麻瓜研究的核心目标",
        analysis: "麻瓜研究的核心不是学习麻瓜的科技，而是培养同理心，理解与我们不同的人，促进巫师与麻瓜世界的和平共存。消除偏见是这门课最关键的目标。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "为什么理解麻瓜对巫师很重要？",
        options: ["A. 麻瓜人口远超巫师，他们的文化和科技对魔法世界有深远影响", "B. 麻瓜很有趣", "C. 我们可以偷他们的科技", "D. 麻瓜需要我们的帮助"],
        answer: "A",
        knowledgePoint: "理解麻瓜的重要性",
        analysis: "麻瓜人口超过五十亿，而巫师不到十万。他们的文化、科技和观念不可避免地会影响魔法世界。理解他们是和平共存的必要条件。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "「消除偏见」在麻瓜研究中意味着什么？",
        options: ["A. 认为麻瓜不如巫师", "B. 学会把麻瓜当作人来看待，而不是「另一种生物」", "C. 忽略麻瓜的存在", "D. 强迫麻瓜接受魔法"],
        answer: "B",
        knowledgePoint: "消除偏见的含义",
        analysis: "消除偏见意味着放下「麻瓜没有魔法所以不如我们」的想法，学会把麻瓜当作和我们一样的人来看待，理解他们的文化和价值观，培养同理心。"
      }
    ]
  },

  {
    lesson: 2,
    title: "麻瓜家庭结构与日常生活",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜家庭的基本结构通常是什么？",
        options: ["A. 只有一个人", "B. 核心家庭（父母和孩子）", "C. 一个大家族住在一起", "D. 没有家庭概念"],
        answer: "B",
        knowledgePoint: "麻瓜家庭结构",
        analysis: "麻瓜家庭通常是核心家庭——父母和孩子住在一起。虽然大家庭也很重要，但核心家庭是最常见的结构。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "麻瓜的日常作息通常是怎样的？",
        options: ["A. 随心所欲，没有规律", "B. 早上工作/上学，晚上回家休息", "C. 整天睡觉", "D. 只在晚上活动"],
        answer: "B",
        knowledgePoint: "麻瓜日常作息",
        analysis: "麻瓜的一天很规律：早上起床、吃早餐、工作或上学，下午回家，晚上休息。他们没有魔法来快速完成事情，所以时间管理对他们很重要。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "麻瓜非常重视教育的原因是什么？",
        options: ["A. 没事可做", "B. 他们相信知识可以改变命运", "C. 政府强制要求", "D. 为了消磨时间"],
        answer: "B",
        knowledgePoint: "麻瓜的教育价值观",
        analysis: "麻瓜相信教育可以改变命运——通过学习知识和技能，他们可以获得更好的工作和生活。一个麻瓜孩子通常从五岁开始上学，一直学到二十多岁。"
      }
    ]
  },

  {
    lesson: 3,
    title: "麻瓜的教育体系",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜教育的三个阶段是什么？",
        options: ["A. 小学、中学、大学", "B. 幼儿园、小学、中学", "C. 启蒙、进阶、高级", "D. 基础、中级、专业"],
        answer: "A",
        knowledgePoint: "麻瓜教育阶段",
        analysis: "麻瓜教育分三个阶段：小学（六年）教基础知识，中学（六年）分科目学习，大学（四年或更长）专注于专业领域。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "麻瓜课程设置与魔法课程的主要区别是什么？",
        options: ["A. 麻瓜课程更多", "B. 麻瓜用科学和实验，我们用魔法", "C. 麻瓜课程更难", "D. 没有区别"],
        answer: "B",
        knowledgePoint: "麻瓜与魔法教育的区别",
        analysis: "麻瓜教育注重科学、数学、语言等学科，用实验和数据来验证理论；而魔法教育注重咒语、魔药、变形等，用魔法来实现目标。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "麻瓜教育和魔法教育的相似目标是什么？",
        options: ["A. 都是为了培养有知识、有能力的人", "B. 都是为了学习魔法", "C. 都是为了找好工作", "D. 都是为了考试"],
        answer: "A",
        knowledgePoint: "教育目标的相似性",
        analysis: "虽然方法不同，但两种教育的目标都是培养有知识、有能力、能为社会做贡献的人。"
      }
    ]
  },

  {
    lesson: 4,
    title: "第一阶段综合测验",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜家庭的核心价值观是什么？",
        options: ["A. 金钱、权力、地位", "B. 亲情、责任、教育", "C. 自由、独立、冒险", "D. 竞争、胜利、荣誉"],
        answer: "B",
        knowledgePoint: "麻瓜家庭价值观",
        analysis: "麻瓜家庭重视亲情（家庭是中心）、责任（照顾家人）和教育（知识改变命运）。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "为什么理解麻瓜日常对巫师很重要？",
        options: ["A. 可以偷他们的东西", "B. 理解他们的日常就是理解他们的人性", "C. 为了嘲笑他们", "D. 为了学习他们的科技"],
        answer: "B",
        knowledgePoint: "理解麻瓜日常的意义",
        analysis: "理解麻瓜的日常作息、家庭生活和价值观，可以帮助我们看到他们和我们的共性——都是人，都有相同的情感和需求。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "分析麻瓜日常生活描述时，最重要的是什么？",
        options: ["A. 记住细节", "B. 看到细节背后体现的价值观和生活方式", "C. 找出错误", "D. 比较优劣"],
        answer: "B",
        knowledgePoint: "分析麻瓜日常的方法",
        analysis: "分析麻瓜日常生活时，不能只停留在表面细节，要看到这些细节背后体现的价值观、文化和生活方式，这样才能真正理解他们。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 麻瓜社会：经济与职业（第5-8课）
  // ════════════════════════════════════════

  {
    lesson: 5,
    title: "麻瓜的货币与经济体系",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜货币的主要形式是什么？",
        options: ["A. 黄金和宝石", "B. 纸币、硬币和电子支付", "C. 物物交换", "D. 魔法物品"],
        answer: "B",
        knowledgePoint: "麻瓜货币形式",
        analysis: "麻瓜货币主要有三种形式：纸币（如英镑、美元）、硬币（如便士、分）和电子支付（通过银行卡）。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "麻瓜工作的目的是什么？",
        options: ["A. 只是为了赚钱", "B. 赚钱、实现自我价值、为社会做贡献", "C. 打发时间", "D. 避免无聊"],
        answer: "B",
        knowledgePoint: "麻瓜工作的意义",
        analysis: "麻瓜工作不仅是为了赚钱，也是为了实现自我价值，为社会做出贡献。就像我们成为傲罗或魔药师一样。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "麻瓜经济与魔法经济的相似之处是什么？",
        options: ["A. 都依赖魔法", "B. 都需要分工合作、供需关系和信任", "C. 都很简单", "D. 都不依赖货币"],
        answer: "B",
        knowledgePoint: "经济体系的相似性",
        analysis: "虽然形式不同，但两个经济体系都需要分工合作（不同的人做不同的工作）、供需关系（生产和消费）和信任（相信货币有价值）。"
      }
    ]
  },

  {
    lesson: 6,
    title: "麻瓜的职业世界",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜职业主要分为哪几类？",
        options: ["A. 富人、中产阶级、穷人", "B. 工业、商业、服务业、专业领域", "C. 工人、农民、商人", "D. 年轻人、中年人、老年人"],
        answer: "B",
        knowledgePoint: "麻瓜职业分类",
        analysis: "麻瓜职业主要分为四类：工业（制造产品）、商业（买卖商品）、服务业（提供服务）、专业领域（医生、律师、教师等）。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "麻瓜的工作环境通常是什么样的？",
        options: ["A. 都在户外", "B. 办公室、工厂、商店等不同场所", "C. 都在家里", "D. 都在魔法世界"],
        answer: "B",
        knowledgePoint: "麻瓜工作环境",
        analysis: "麻瓜的工作环境各不相同：办公室（坐电脑前工作）、工厂（操作机器）、商店（服务顾客）等。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "麻瓜职业与巫师职业的本质相似性是什么？",
        options: ["A. 都很轻松", "B. 都在为社会做贡献", "C. 都需要魔法", "D. 都很危险"],
        answer: "B",
        knowledgePoint: "职业的本质相似性",
        analysis: "无论是麻瓜的医生、教师、工程师，还是巫师的傲罗、魔药师、教授，本质上都是在为社会做贡献，只是方式不同。"
      }
    ]
  },

  {
    lesson: 7,
    title: "麻瓜的法律与社会秩序",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜法律体系分为哪三个部分？",
        options: ["A. 警察、法官、律师", "B. 立法、司法、执法", "C. 民法、刑法、商法", "D. 书本、法庭、监狱"],
        answer: "B",
        knowledgePoint: "麻瓜法律体系",
        analysis: "麻瓜法律体系分为三个部分：立法（制定法律）、司法（解释和适用法律）、执法（执行法律）。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "麻瓜的警察职责是什么？",
        options: ["A. 欺负麻瓜", "B. 维护治安、调查犯罪、保护公众安全", "C. 只管交通", "D. 不管事"],
        answer: "B",
        knowledgePoint: "麻瓜警察职责",
        analysis: "麻瓜警察负责维护治安、调查犯罪、收集证据、保护公众安全，就像我们的傲罗一样。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "麻瓜法律与魔法法律的共通原则是什么？",
        options: ["A. 都用魔法执行", "B. 都强调证据、程序和保护个人权利", "C. 都很严格", "D. 都不公平"],
        answer: "B",
        knowledgePoint: "法律原则的共通性",
        analysis: "无论是麻瓜法律还是魔法法律，都强调证据（凭证据判案）、程序（遵循法定程序）和保护个人权利（如无罪推定）。"
      }
    ]
  },

  {
    lesson: 8,
    title: "第二阶段综合测验",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜法律强调什么？",
        options: ["A. 权力", "B. 证据和程序", "C. 暴力", "D. 金钱"],
        answer: "B",
        knowledgePoint: "麻瓜法律的特点",
        analysis: "麻瓜法律强调证据（必须有证据才能定罪）和程序（必须遵循法定程序），这和我们的魔法法律很相似。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "魔法世界可以从麻瓜法律中学到什么？",
        options: ["A. 如何使用暴力", "B. 程序透明和保护个人权利", "C. 如何制定更严格的法律", "D. 什么都学不到"],
        answer: "B",
        knowledgePoint: "麻瓜法律的借鉴价值",
        analysis: "麻瓜法律在程序透明（所有人都可以看到法律如何执行）和保护个人权利（如辩护权）方面有值得我们学习的地方。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "分析麻瓜法律案例时，最重要的是什么？",
        options: ["A. 看判决结果", "B. 看证据是否充分、程序是否合法、判决是否公正", "C. 看谁赢了", "D. 看有没有魔法"],
        answer: "B",
        knowledgePoint: "分析法律案例的方法",
        analysis: "分析麻瓜法律案例时，要关注证据是否充分（有没有足够的证据证明罪行）、程序是否合法（有没有遵循法定程序）、判决是否公正（是否符合法律和正义）。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 麻瓜科技：工具与通讯（第9-12课）
  // ════════════════════════════════════════

  {
    lesson: 9,
    title: "麻瓜的日常电器",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜电器的核心是什么？",
        options: ["A. 魔法", "B. 电力和电路", "C. 人力", "D. 动物力"],
        answer: "B",
        knowledgePoint: "麻瓜电器原理",
        analysis: "麻瓜电器的核心是电力——通过发电厂产生电，通过电线输送，电器内部有电路，电流通过电路来工作。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "常见的麻瓜电器有哪些？",
        options: ["A. 魔杖、坩埚、扫帚", "B. 电灯、电话、电视、电脑", "C. 魔法书、魔杖、药水", "D. 飞天扫帚、门钥匙"],
        answer: "B",
        knowledgePoint: "常见麻瓜电器",
        analysis: "麻瓜有很多电器：电灯照明、电话通讯、电视娱乐、电脑工作学习——这些对他们来说就像我们的魔杖和坩埚一样重要。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "魔法与电力的相互影响是什么？",
        options: ["A. 没有影响", "B. 强魔力会干扰麻瓜电器，强大电力也会干扰魔法", "C. 魔法可以增强电力", "D. 电力可以增强魔法"],
        answer: "B",
        knowledgePoint: "魔法与电力的相互作用",
        analysis: "在有强魔力的地方（如霍格沃茨），麻瓜电器会出故障；反过来，强大的电力也会干扰魔法。两个世界的能量是相互作用的。"
      }
    ]
  },

  {
    lesson: 10,
    title: "麻瓜的通讯方式",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜通讯的发展过程是什么？",
        options: ["A. 一直都一样", "B. 从书信到电报、电话、手机、互联网", "C. 只有电话", "D. 只有邮件"],
        answer: "B",
        knowledgePoint: "麻瓜通讯发展",
        analysis: "麻瓜通讯经历了很长的发展过程：最早是书信，然后是电报、电话，现在是手机和互联网，可以实时和全世界的人交流。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "麻瓜远距离通讯工具包括什么？",
        options: ["A. 猫头鹰", "B. 电话、手机、视频通话", "C. 门钥匙", "D. 幻影移形"],
        answer: "B",
        knowledgePoint: "麻瓜通讯工具",
        analysis: "麻瓜有很多远距离通讯工具：电话可以实时通话，手机可以随时随地通讯，视频通话可以看到对方——就像我们的双面镜，但更普及。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "猫头鹰邮件与麻瓜通讯的优缺点是什么？",
        options: ["A. 猫头鹰邮件更好", "B. 猫头鹰邮件可传递实物但速度慢，麻瓜通讯速度快但只能传递信息", "C. 麻瓜通讯更好", "D. 两者一样"],
        answer: "B",
        knowledgePoint: "通讯方式对比",
        analysis: "猫头鹰邮件可以传递实物（如信件、包裹），但速度慢；麻瓜通讯（电话、互联网）速度快，可以实时交流，但只能传递信息，不能传递实物。"
      }
    ]
  },

  {
    lesson: 11,
    title: "麻瓜的交通工具",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜交通工具有哪些？",
        options: ["A. 飞天扫帚、夜骐", "B. 汽车、火车、飞机、轮船", "C. 门钥匙、幻影移形", "D. 魔法地毯"],
        answer: "B",
        knowledgePoint: "麻瓜交通工具",
        analysis: "麻瓜有很多交通工具：汽车在陆地上行驶，火车长途旅行，飞机在空中飞行，轮船在海上航行。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "麻瓜交通系统的特点是什么？",
        options: ["A. 没有规则", "B. 有严格的规则和管理（交通信号灯、警察、管制员）", "C. 随便开", "D. 只有一种交通工具"],
        answer: "B",
        knowledgePoint: "麻瓜交通系统",
        analysis: "麻瓜有一套复杂的交通系统，有严格的规则：交通信号灯指挥车辆，交通警察维护秩序，空中交通管制员管理飞机——确保安全和效率。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "麻瓜交通与巫师交通的对比是什么？",
        options: ["A. 麻瓜交通更好", "B. 巫师交通更快捷但不普及，麻瓜交通更普及但较慢", "C. 巫师交通更好", "D. 两者一样"],
        answer: "B",
        knowledgePoint: "交通方式对比",
        analysis: "巫师交通（飞天扫帚、幻影移形、门钥匙）更快捷，但不是每个人都会使用；麻瓜交通（汽车、火车、飞机）虽然速度慢一些，但几乎每个麻瓜都可以使用，更普及。"
      }
    ]
  },

  {
    lesson: 12,
    title: "第三阶段综合测验",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜电器、通讯工具、交通工具的核心分别是什么？",
        options: ["A. 魔法、魔法、魔法", "B. 电力、电子信号、发动机", "C. 人力、人力、人力", "D. 动物、动物、动物"],
        answer: "B",
        knowledgePoint: "麻瓜科技核心",
        analysis: "麻瓜电器的核心是电力，通讯工具的核心是电子信号，交通工具的核心是发动机。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "麻瓜科技对魔法世界的潜在影响是什么？",
        options: ["A. 没有影响", "B. 医疗技术可以与魔法结合，通讯技术可以改进猫头鹰邮件", "C. 会取代魔法", "D. 会毁灭魔法世界"],
        answer: "B",
        knowledgePoint: "麻瓜科技的潜在价值",
        analysis: "麻瓜的医疗技术可以与魔法治疗结合，创造更好的治疗效果；通讯技术可以为猫头鹰邮件提供新的思路。两个世界的科技可以相互借鉴。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "描述麻瓜电器时，最重要的是什么？",
        options: ["A. 描述外观", "B. 说明用途、工作原理和对麻瓜生活的影响", "C. 比较与魔法物品的优劣", "D. 只说名字"],
        answer: "B",
        knowledgePoint: "描述麻瓜物品的方法",
        analysis: "描述麻瓜电器时，不仅要说明它是什么，还要说明它的用途（做什么用）、工作原理（怎么工作）和对麻瓜生活的影响（为什么重要）。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 麻瓜文化：艺术与娱乐（第13-16课）
  // ════════════════════════════════════════

  {
    lesson: 13,
    title: "麻瓜的艺术形式",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜艺术有哪些形式？",
        options: ["A. 只有绘画", "B. 绘画、音乐、文学、戏剧", "C. 只有音乐", "D. 只有文学"],
        answer: "B",
        knowledgePoint: "麻瓜艺术形式",
        analysis: "麻瓜艺术有很多形式：绘画用视觉表达，音乐用声音表达，文学用文字表达，戏剧结合表演和故事。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "麻瓜艺术的特点是什么？",
        options: ["A. 很无聊", "B. 经历了很多流派的变化，每个流派有自己的风格", "C. 都一样", "D. 没有历史"],
        answer: "B",
        knowledgePoint: "麻瓜艺术流派",
        analysis: "麻瓜艺术有很长的历史，经历了很多流派：古典主义、印象派、现代主义等，每个流派都有自己的特点和风格。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "魔法世界与麻瓜艺术的交流是什么？",
        options: ["A. 没有交流", "B. 巫师收藏麻瓜艺术品，麻瓜艺术家受魔法启发", "C. 只有巫师影响麻瓜", "D. 只有麻瓜影响巫师"],
        answer: "B",
        knowledgePoint: "艺术交流",
        analysis: "魔法世界和麻瓜艺术有双向交流：有些巫师会收藏麻瓜艺术品，有些麻瓜艺术家无意中受到魔法的启发（比如奇幻文学）。"
      }
    ]
  },

  {
    lesson: 14,
    title: "麻瓜的娱乐活动",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜的主要体育项目有哪些？",
        options: ["A. 魁地奇", "B. 足球、篮球、奥林匹克运动会", "C. 只有跑步", "D. 没有体育"],
        answer: "B",
        knowledgePoint: "麻瓜体育",
        analysis: "麻瓜有很多体育项目：足球、篮球、网球、游泳等，每四年举办一次奥林匹克运动会，来自全世界的运动员比赛。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "麻瓜的娱乐方式有哪些？",
        options: ["A. 只有读书", "B. 电影、音乐、游戏", "C. 只有工作", "D. 没有娱乐"],
        answer: "B",
        knowledgePoint: "麻瓜娱乐",
        analysis: "麻瓜的娱乐方式很多：看电影体验不同世界，听音乐表达情感，玩游戏获得乐趣和挑战。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "麻瓜娱乐与巫师娱乐的共同点是什么？",
        options: ["A. 都需要魔法", "B. 都是为了娱乐和社交", "C. 都很无聊", "D. 都很危险"],
        answer: "B",
        knowledgePoint: "娱乐的共同点",
        analysis: "无论是麻瓜的足球、电影、游戏，还是巫师的魁地奇、魔法棋、舞会，核心都是为了娱乐（放松）和社交（与人交流）。"
      }
    ]
  },

  {
    lesson: 15,
    title: "麻瓜的节日与庆典",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜的主要节日有哪些？",
        options: ["A. 只有圣诞节", "B. 新年、圣诞节、复活节", "C. 没有节日", "D. 只有生日"],
        answer: "B",
        knowledgePoint: "麻瓜节日",
        analysis: "麻瓜有很多节日：新年（一月一日）、圣诞节（十二月二十五日）、复活节（春天）——很多和我们的相似，但庆祝方式不同。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "麻瓜节日的传统习俗是什么？",
        options: ["A. 没有习俗", "B. 装饰、聚会、交换礼物、吃特殊食物", "C. 只有睡觉", "D. 只有工作"],
        answer: "B",
        knowledgePoint: "麻瓜节日习俗",
        analysis: "每个麻瓜节日都有习俗：圣诞节装饰圣诞树、唱圣诞歌、吃火鸡；复活节找彩蛋、吃巧克力兔子；新年放烟花、聚会。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "巫师节日与麻瓜节日的异同是什么？",
        options: ["A. 完全不同", "B. 都有家庭聚会、美食、礼物，但巫师节日更多与魔法相关", "C. 完全相同", "D. 巫师节日更无聊"],
        answer: "B",
        knowledgePoint: "节日对比",
        analysis: "两个世界的节日都有家庭聚会、美食、礼物，但巫师节日更多与魔法相关（如万圣节的南瓜灯和魔法装扮），麻瓜节日更多与宗教和季节相关。"
      }
    ]
  },

  {
    lesson: 16,
    title: "第四阶段综合测验",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜文化和娱乐反映了什么？",
        options: ["A. 什么都不反映", "B. 麻瓜的价值观和情感", "C. 魔法的力量", "D. 金钱的重要性"],
        answer: "B",
        knowledgePoint: "文化的意义",
        analysis: "麻瓜文化和娱乐不仅仅是表面的东西，它们反映了麻瓜的价值观（如家庭、友谊）和情感（如爱、勇气）。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "麻瓜艺术对魔法世界的价值是什么？",
        options: ["A. 没有价值", "B. 帮助我们理解麻瓜的情感和想法", "C. 可以当装饰", "D. 可以卖钱"],
        answer: "B",
        knowledgePoint: "艺术的价值",
        analysis: "艺术是文化的镜子，通过麻瓜艺术我们可以看到他们的内心世界——他们的情感、想法和价值观。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "分析麻瓜艺术作品时，最重要的是什么？",
        options: ["A. 描述颜色", "B. 深入分析主题、风格和情感表达", "C. 看价格", "D. 看作者"],
        answer: "B",
        knowledgePoint: "艺术分析方法",
        analysis: "分析麻瓜艺术作品时，不能只描述表面（如颜色、形状），要深入分析主题（表达什么）、风格（怎么表达）和情感表达（传递什么情感）。"
      }
    ]
  },

  // ════════════════════════════════════════
  // O.W.L.进阶：深度理解（第17-20课）
  // ════════════════════════════════════════

  {
    lesson: 17,
    title: "麻瓜历史与巫师世界的交集",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "国际保密法是什么时候颁布的？",
        options: ["A. 1000年", "B. 1692年", "C. 1991年", "D. 2000年"],
        answer: "B",
        knowledgePoint: "保密法时间",
        analysis: "国际保密法于1692年颁布，从那以后，巫师和麻瓜的直接接触就很少了。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "历史上麻瓜与巫师的关系是怎样的？",
        options: ["A. 一直是敌人", "B. 古代相互帮助，后来因为迫害而隐藏", "C. 一直是朋友", "D. 没有关系"],
        answer: "B",
        knowledgePoint: "历史关系",
        analysis: "在古代，巫师经常帮助麻瓜（治愈疾病、预测天气），但后来麻瓜对魔法越来越怀疑和迫害，我们不得不隐藏自己。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "保密法颁布的原因是什么？",
        options: ["A. 巫师想独占魔法", "B. 为了保护巫师和麻瓜双方", "C. 麻瓜要求的", "D. 没有原因"],
        answer: "B",
        knowledgePoint: "保密法背景",
        analysis: "保密法的颁布是为了保护巫师（避免迫害），也是为了保护麻瓜（避免魔法对他们生活的干扰）。"
      }
    ]
  },

  {
    lesson: 18,
    title: "麻瓜心理学与行为模式",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜如何表达情感？",
        options: ["A. 不表达情感", "B. 通过语言、表情、肢体语言", "C. 只用魔法", "D. 只哭"],
        answer: "B",
        knowledgePoint: "情感表达方式",
        analysis: "麻瓜通过语言（说话）、表情（微笑、皱眉）、肢体语言（手势、姿势）来表达情感。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "麻瓜的社会行为规范是什么？",
        options: ["A. 没有规范", "B. 见面握手、礼貌说话、排队遵守秩序", "C. 想做什么就做什么", "D. 只有暴力"],
        answer: "B",
        knowledgePoint: "社会规范",
        analysis: "麻瓜有很多社会行为规范：见面握手表示友好，说话要有礼貌，排队要遵守秩序——违反会被认为不礼貌。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "理解麻瓜思维方式的重要性是什么？",
        options: ["A. 没有重要性", "B. 可以更好地沟通，避免误解", "C. 可以嘲笑他们", "D. 可以控制他们"],
        answer: "B",
        knowledgePoint: "理解思维方式的意义",
        analysis: "麻瓜的思维方式和我们不同——他们更依赖逻辑和证据。理解他们为什么这么想，可以帮助我们更好地沟通，避免误解。"
      }
    ]
  },

  {
    lesson: 19,
    title: "麻瓜研究的伦理问题",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "研究麻瓜的伦理边界是什么？",
        options: ["A. 没有边界", "B. 不未经允许观察私人生活，不干涉决策，不操纵他们", "C. 可以随便研究", "D. 可以控制他们"],
        answer: "B",
        knowledgePoint: "伦理边界",
        analysis: "研究麻瓜有明确的伦理边界：不能未经允许观察他们的私人生活，不能干涉他们的决策，不能利用知识操纵他们——研究的目的是理解，不是控制。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "为什么要尊重麻瓜隐私？",
        options: ["A. 不需要尊重", "B. 他们有权过自己的生活，不受监视", "C. 他们会生气", "D. 法律要求"],
        answer: "B",
        knowledgePoint: "隐私的重要性",
        analysis: "尊重麻瓜隐私是基本的伦理原则——他们有权过自己的生活，不受我们的监视和干扰。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "巫师与麻瓜互动的准则是什么？",
        options: ["A. 随便互动", "B. 不暴露魔法身份，不使用魔法影响他们，尊重他们的意愿", "C. 可以用魔法帮助他们", "D. 可以告诉他们魔法的秘密"],
        answer: "B",
        knowledgePoint: "互动准则",
        analysis: "与麻瓜互动时要遵守准则：尽量不暴露魔法身份，不使用魔法影响他们的生活，尊重他们的意愿——我们和他们是平等的。"
      }
    ]
  },

  {
    lesson: 20,
    title: "O.W.L.综合模拟",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "O.W.L.麻瓜研究笔试考什么？",
        options: ["A. 只考魔法", "B. 知识问答和案例分析", "C. 只考麻瓜科技", "D. 只考麻瓜历史"],
        answer: "B",
        knowledgePoint: "O.W.L.笔试内容",
        analysis: "O.W.L.麻瓜研究笔试包括两部分：知识问答（考查基本知识）和案例分析（考查分析和理解能力）。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "O.W.L.麻瓜研究实操考什么？",
        options: ["A. 考魔法", "B. 识别麻瓜物品、分析场景", "C. 考飞行", "D. 考魔药"],
        answer: "B",
        knowledgePoint: "O.W.L.实操内容",
        analysis: "实操部分要求识别麻瓜物品（说出是什么、怎么用）、分析麻瓜场景（理解背后的文化和价值观）。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "O.W.L.答题策略是什么？",
        options: ["A. 先做难题", "B. 先做容易的题，注意时间管理", "C. 随便答", "D. 只做会的题"],
        answer: "B",
        knowledgePoint: "答题策略",
        analysis: "答题策略：先做容易的题（确保得分），再做难的题；案例分析先理解问题再组织答案；注意时间管理，不要在一道题上花太多时间。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 高阶麻瓜研究：跨学科应用（第21-24课）
  // ════════════════════════════════════════

  {
    lesson: 21,
    title: "麻瓜研究与魔法实践的交叉",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "如何将麻瓜知识应用于魔法实践？",
        options: ["A. 完全不能应用", "B. 用麻瓜心理学辅助魔法治疗，用麻瓜科技改进魔法工具", "C. 只能用麻瓜科技", "D. 只能用麻瓜医学"],
        answer: "B",
        knowledgePoint: "麻瓜知识的应用",
        analysis: "将麻瓜知识应用于魔法实践有很多方式，比如用麻瓜心理学来理解患者的心理状态，用麻瓜医学知识来辅助魔药治疗，用麻瓜科技来改进魔法工具。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "麻瓜科技与魔法结合的可能性是什么？",
        options: ["A. 没有可能性", "B. 用麻瓜传感器检测魔力波动，用麻瓜计算机分析魔法数据", "C. 只能用魔法", "D. 只能用麻瓜科技"],
        answer: "B",
        knowledgePoint: "科技与魔法的结合",
        analysis: "麻瓜科技和魔法的结合有很多可能性，比如用麻瓜的传感器来检测魔力波动，用麻瓜的计算机来分析魔法数据，用麻瓜的材料来制作魔法物品。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "跨学科研究的意义是什么？",
        options: ["A. 没有意义", "B. 结合不同领域知识，创造新的解决方案", "C. 让学习更复杂", "D. 浪费时间"],
        answer: "B",
        knowledgePoint: "跨学科研究",
        analysis: "跨学科研究可以结合不同领域的知识，创造新的解决方案。比如将麻瓜心理学应用于魔法治疗，可以提供更全面的治疗方法。"
      }
    ]
  },

  {
    lesson: 22,
    title: "麻瓜研究在魔法部的应用",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "魔法部的麻瓜联络办公室负责什么？",
        options: ["A. 不管事", "B. 处理麻瓜发现魔法的事件，协调巫师与麻瓜的接触", "C. 只负责文件", "D. 只负责保密"],
        answer: "B",
        knowledgePoint: "麻瓜联络办公室职责",
        analysis: "麻瓜联络办公室负责处理麻瓜发现魔法的事件，协调巫师与麻瓜的接触，制定相关政策。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "巫师与麻瓜的官方互动主要通过什么渠道？",
        options: ["A. 猫头鹰邮件", "B. 麻瓜联络办公室", "C. 直接见面", "D. 魔法"],
        answer: "B",
        knowledgePoint: "官方互动渠道",
        analysis: "巫师与麻瓜的官方互动主要通过麻瓜联络办公室。当麻瓜无意中看到魔法时，办公室会派人去处理——修改记忆、修复损坏、解释现象。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "麻瓜研究对政策制定的影响是什么？",
        options: ["A. 没有影响", "B. 帮助制定更合理的政策，促进两个世界的和平共存", "C. 让政策更严格", "D. 让政策更宽松"],
        answer: "B",
        knowledgePoint: "研究对政策的影响",
        analysis: "麻瓜研究的成果会影响魔法部的政策制定，比如关于如何处理麻瓜发现魔法的政策，关于巫师与麻瓜通婚的政策，关于魔法物品进入麻瓜世界的政策。理解麻瓜的文化和社会，可以帮助我们制定更合理的政策。"
      }
    ]
  },

  {
    lesson: 23,
    title: "麻瓜研究的未来方向",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜研究的前沿领域是什么？",
        options: ["A. 没有前沿领域", "B. 跨学科研究、麻瓜科技与魔法的结合、文化交流", "C. 只研究历史", "D. 只研究科技"],
        answer: "B",
        knowledgePoint: "前沿领域",
        analysis: "麻瓜研究的前沿领域包括跨学科研究、麻瓜科技与魔法的结合、两个世界的文化交流等。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "两个世界和平共存的关键是什么？",
        options: ["A. 隔离", "B. 理解与合作", "C. 征服", "D. 忽视"],
        answer: "B",
        knowledgePoint: "和平共存",
        analysis: "两个世界和平共存需要双方的努力——我们需要理解他们，他们也需要理解我们。合作、理解、共存是关键。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "学习麻瓜研究的职业发展机会有哪些？",
        options: ["A. 没有机会", "B. 魔法部工作、成为教授、从事跨学科研究", "C. 只能教书", "D. 只能做研究"],
        answer: "B",
        knowledgePoint: "职业发展",
        analysis: "学习麻瓜研究有很多职业发展机会，可以在魔法部工作（特别是麻瓜联络办公室），可以成为麻瓜研究教授，可以从事跨学科研究。"
      }
    ]
  },

  {
    lesson: 24,
    title: "第六阶段综合测验",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "高阶麻瓜研究的核心是什么？",
        options: ["A. 记住事实", "B. 将知识应用于实际问题", "C. 只做理论研究", "D. 不做实践"],
        answer: "B",
        knowledgePoint: "高阶研究核心",
        analysis: "高阶麻瓜研究的核心是将知识应用于实际问题，比如设计跨文化交流方案，解决现实中的问题。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "未来两个世界的关系会是什么样的？",
        options: ["A. 永远隔离", "B. 可能更加开放地交流", "C. 完全融合", "D. 互相敌对"],
        answer: "B",
        knowledgePoint: "未来展望",
        analysis: "未来，保密法可能会被重新审视，两个世界可能会更加开放地交流。但这需要双方的理解和努力。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "设计跨文化交流方案需要考虑什么？",
        options: ["A. 只考虑巫师", "B. 文化差异、语言障碍、安全措施", "C. 只考虑麻瓜", "D. 什么都不考虑"],
        answer: "B",
        knowledgePoint: "交流方案设计",
        analysis: "设计跨文化交流方案需要考虑很多方面——文化差异、语言障碍、安全措施、参与人员、活动内容等。"
      }
    ]
  },

  // ════════════════════════════════════════
  // N.E.W.T.级麻瓜研究：专业深化（第25-28课）
  // ════════════════════════════════════════

  {
    lesson: 25,
    title: "麻瓜社会学深度分析",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜社会结构包括什么？",
        options: ["A. 只有一个阶层", "B. 不同的社会阶层、文化群体、利益集团", "C. 没有结构", "D. 只有富人"],
        answer: "B",
        knowledgePoint: "社会结构",
        analysis: "麻瓜社会结构很复杂，有不同的社会阶层、不同的文化群体、不同的利益集团。理解这些结构可以帮助我们理解麻瓜社会的运作方式。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "社会流动是什么？",
        options: ["A. 社会混乱", "B. 通过教育、工作改变自己的社会阶层", "C. 人口流动", "D. 没有意义"],
        answer: "B",
        knowledgePoint: "社会流动",
        analysis: "社会流动是指人们可以通过教育、工作来改变自己的社会阶层。理解社会流动可以帮助我们理解麻瓜的价值观和动力。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "文化差异与融合的意义是什么？",
        options: ["A. 没有意义", "B. 帮助我们更好地与不同背景的人交流", "C. 造成冲突", "D. 不重要"],
        answer: "B",
        knowledgePoint: "文化差异与融合",
        analysis: "麻瓜世界有很多不同的文化，这些文化之间既有差异，也有融合。理解文化差异和融合可以帮助我们更好地与不同背景的麻瓜交流。"
      }
    ]
  },

  {
    lesson: 26,
    title: "麻瓜科技与魔法的理论交叉",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "麻瓜科学与魔法理论的区别是什么？",
        options: ["A. 完全一样", "B. 科学基于实验和证据，魔法基于直觉和魔力", "C. 没有区别", "D. 魔法更好"],
        answer: "B",
        knowledgePoint: "理论对比",
        analysis: "麻瓜科学和魔法理论有很多不同：科学基于实验和证据，魔法基于直觉和魔力。但它们也有相似之处——都试图解释世界的运作方式。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "魔力与物理力的关系是什么？",
        options: ["A. 没有关系", "B. 两种独立的力或同一种力的不同表现", "C. 完全相同", "D. 互相排斥"],
        answer: "B",
        knowledgePoint: "力的关系",
        analysis: "魔力和物理力的关系是一个重要的研究问题。有些研究认为魔力是一种尚未被麻瓜发现的物理力，有些认为是完全不同的东西。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "建立跨学科理论框架的重要性是什么？",
        options: ["A. 不重要", "B. 整合不同领域知识，推动研究发展", "C. 让研究更复杂", "D. 没有意义"],
        answer: "B",
        knowledgePoint: "理论框架",
        analysis: "建立跨学科理论框架很重要，可以整合麻瓜科学和魔法理论，推动研究发展。"
      }
    ]
  },

  {
    lesson: 27,
    title: "麻瓜研究方法论",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "研究麻瓜的科学方法包括什么？",
        options: ["A. 随便观察", "B. 提出问题、设计方案、收集数据、分析结果", "C. 只凭感觉", "D. 不做研究"],
        answer: "B",
        knowledgePoint: "科学方法",
        analysis: "研究麻瓜需要遵循科学方法：首先提出问题，然后设计研究方案，收集数据，分析数据，最后得出结论。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "数据收集的方法有哪些？",
        options: ["A. 只有一种", "B. 观察法、访谈法、问卷调查法", "C. 只看书", "D. 不收集数据"],
        answer: "B",
        knowledgePoint: "数据收集",
        analysis: "数据收集有很多方法：观察法、访谈法、问卷调查法。每种方法都有自己的优缺点。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "研究伦理的重要性是什么？",
        options: ["A. 不重要", "B. 保护研究对象的权益，确保研究的可靠性", "C. 限制研究", "D. 没有意义"],
        answer: "B",
        knowledgePoint: "研究伦理",
        analysis: "研究伦理非常重要，必须获得研究对象的知情同意，保护他们的隐私，避免伤害他们。科学方法和伦理原则是研究的两条腿——缺一不可。"
      }
    ]
  },

  {
    lesson: 28,
    title: "N.E.W.T.终极综合考核",
    questions: [
      {
        type: "choice",
        difficulty: "basic",
        text: "N.E.W.T.麻瓜研究笔试考什么？",
        options: ["A. 只考基础知识", "B. 深度分析与论文", "C. 只考选择题", "D. 不考试"],
        answer: "B",
        knowledgePoint: "N.E.W.T.笔试",
        analysis: "N.E.W.T.麻瓜研究笔试包括深度分析与论文，考查学生的知识深度和分析能力。"
      },
      {
        type: "choice",
        difficulty: "medium",
        text: "N.E.W.T.麻瓜研究实操考什么？",
        options: ["A. 只考理论", "B. 实地考察与报告", "C. 只考记忆", "D. 不考实操"],
        answer: "B",
        knowledgePoint: "N.E.W.T.实操",
        analysis: "实操部分要求学生进行实地考察，观察麻瓜的日常生活，收集数据，撰写报告。"
      },
      {
        type: "choice",
        difficulty: "hard",
        text: "麻瓜研究的终极意义是什么？",
        options: ["A. 通过考试", "B. 理解与共存", "C. 记住知识", "D. 找工作"],
        answer: "B",
        knowledgePoint: "终极意义",
        analysis: "麻瓜研究的终极意义不是为了记住多少麻瓜物品的名称，也不是为了通过考试，而是为了理解——理解与我们不同的人，理解另一种生活方式，理解两个世界可以和平共存。"
      }
    ]
  }
];
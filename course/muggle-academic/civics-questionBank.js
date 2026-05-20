// civics-questionBank.js
// 霍格沃茨哲学与伦理课程 - 随堂测验题库
// 教授：康斯坦丝·沙克博特
// 课程体系：UK KS3 → GCSE → A-Level，共 70 课
// 每课6题：5道选择题 + 1道开放题，共420题

export const questionBank = [
  {
    "lesson": 1,
    "title": "什么是道德问题",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "以下哪个是道德判断？",
        "options": [
          "A. 巧克力比柠檬糖好吃",
          "B. 折磨无辜者是错的",
          "C. 今天天气很好",
          "D. 这本书很有趣"
        ],
        "answer": "B",
        "knowledgePoint": "道德判断与个人喜好的区别",
        "analysis": "道德判断涉及对错，而个人喜好只是个人偏好，不涉及道德评价。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "道德分歧无法仅靠什么解决？",
        "options": [
          "A. 论证",
          "B. 实验",
          "C. 讨论",
          "D. 思考"
        ],
        "answer": "B",
        "knowledgePoint": "道德分歧的特征",
        "analysis": "道德问题无法通过科学实验直接验证，需要通过论证和推理来解决。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "对于'修改记忆是否正当'，巫师和麻瓜可能有不同判断，这说明：",
        "options": [
          "A. 道德是主观的",
          "B. 道德框架不同会导致判断差异",
          "C. 没有客观的道德标准",
          "D. 魔法改变了道德"
        ],
        "answer": "B",
        "knowledgePoint": "道德直觉的地位",
        "analysis": "不同的文化和经验背景会形成不同的道德框架，导致对同一行为的不同判断。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔法世界与麻瓜世界的道德差异”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔法世界与麻瓜世界的道德差异",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“道德判断与个人喜好的区别”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "道德判断与个人喜好的区别",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“什么是道德问题”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 2,
    "title": "电车难题",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "电车难题的核心是：",
        "options": [
          "A. 如何修理电车",
          "B. 行动与不行动的道德差异",
          "C. 电车的速度",
          "D. 轨道的设计"
        ],
        "answer": "B",
        "knowledgePoint": "行动与不行动的道德差异",
        "analysis": "电车难题探讨的是主动行动导致伤害与被动允许伤害之间的道德责任差异。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "大多数人选择扳动开关救五人，这体现了什么伦理直觉？",
        "options": [
          "A. 义务论",
          "B. 后果论",
          "C. 美德伦理",
          "D. 相对主义"
        ],
        "answer": "B",
        "knowledgePoint": "后果论的直觉基础",
        "analysis": "选择拯救更多人体现了后果论的直觉——行为的道德性取决于结果。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "如果用魔法改变电车方向，道德责任与扳动开关相比：",
        "options": [
          "A. 更小",
          "B. 更大",
          "C. 相同",
          "D. 无法比较"
        ],
        "answer": "C",
        "knowledgePoint": "牺牲少数拯救多数是否正当",
        "analysis": "无论使用什么手段，主动做出选择的人都承担相同的道德责任。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔杖选择的道德困境”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔杖选择的道德困境",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“行动与不行动的道德差异”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "行动与不行动的道德差异",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“电车难题”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 3,
    "title": "功利主义",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "功利主义的核心原则是：",
        "options": [
          "A. 最大多数人的最大幸福",
          "B. 遵循道德规则",
          "C. 培养良好品格",
          "D. 追求个人快乐"
        ],
        "answer": "A",
        "knowledgePoint": "边沁与最大幸福原则",
        "analysis": "边沁提出的功利主义认为，行为的道德性取决于它带来的最大幸福。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "功利主义面临的难题是：",
        "options": [
          "A. 如何计算幸福",
          "B. 没有难题",
          "C. 太简单",
          "D. 不实用"
        ],
        "answer": "A",
        "knowledgePoint": "功利主义的计算方法",
        "analysis": "快乐和痛苦的度量是功利主义面临的核心难题——如何比较不同类型的幸福？"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "如果修改麻瓜记忆能让他们更快乐，功利主义会认为：",
        "options": [
          "A. 总是对的",
          "B. 总是错的",
          "C. 需要计算整体幸福",
          "D. 无法判断"
        ],
        "answer": "C",
        "knowledgePoint": "快乐与痛苦的度量问题",
        "analysis": "功利主义需要综合考虑所有相关者的幸福，包括被修改记忆者的自主权和潜在伤害。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“除忆咒的功利主义判断”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "除忆咒的功利主义判断",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“边沁与最大幸福原则”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "边沁与最大幸福原则",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“功利主义”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 4,
    "title": "义务论",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "康德的绝对命令强调：",
        "options": [
          "A. 追求幸福",
          "B. 遵循可普遍化的原则",
          "C. 培养美德",
          "D. 考虑后果"
        ],
        "answer": "B",
        "knowledgePoint": "康德的绝对命令",
        "analysis": "康德认为，道德行为必须遵循能够普遍化的原则。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "根据义务论，说谎：",
        "options": [
          "A. 总是错的",
          "B. 有时是对的",
          "C. 要看后果",
          "D. 无所谓"
        ],
        "answer": "A",
        "knowledgePoint": "可普遍性检验",
        "analysis": "康德认为，说谎无法普遍化，因此在任何情况下都是错的。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "不可饶恕咒无论出于任何理由都是错的，这是哪种立场？",
        "options": [
          "A. 功利主义",
          "B. 义务论",
          "C. 美德伦理",
          "D. 相对主义"
        ],
        "answer": "B",
        "knowledgePoint": "说谎总是错的吗",
        "analysis": "义务论认为某些行为本身就是邪恶的，无论后果如何，不可饶恕咒正是如此。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“不可饶恕咒的义务论立场”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "不可饶恕咒的义务论立场",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“康德的绝对命令”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "康德的绝对命令",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“义务论”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 5,
    "title": "美德伦理",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "美德伦理关注的是：",
        "options": [
          "A. 行为的结果",
          "B. 行为的规则",
          "C. 人的品格",
          "D. 个人的快乐"
        ],
        "answer": "C",
        "knowledgePoint": "成为什么样的人",
        "analysis": "亚里士多德的美德伦理关注培养良好的品格，而不是遵循规则或计算后果。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "勇敢是哪两个极端之间的中道？",
        "options": [
          "A. 懦弱与鲁莽",
          "B. 快乐与痛苦",
          "C. 诚实与欺骗",
          "D. 慷慨与吝啬"
        ],
        "answer": "A",
        "knowledgePoint": "中道学说",
        "analysis": "亚里士多德认为，每种美德都是两个极端之间的中道，勇敢介于懦弱和鲁莽之间。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "一个巫师使用法外咒但出于好动机，美德伦理会关注：",
        "options": [
          "A. 动机的好坏",
          "B. 行为的结果",
          "C. 塑造的品格",
          "D. 规则的遵守"
        ],
        "answer": "C",
        "knowledgePoint": "性格与习惯",
        "analysis": "美德伦理不关注单个行为，而关注这个行为对品格的塑造——使用法外咒会塑造什么样的品格？"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“伦理框架的对比”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "伦理框架的对比",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“成为什么样的人”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "成为什么样的人",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“美德伦理”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 6,
    "title": "我们如何知道",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "知识与信念的区别在于：",
        "options": [
          "A. 知识是真的",
          "B. 知识不需要理由",
          "C. 信念是假的",
          "D. 没有区别"
        ],
        "answer": "A",
        "knowledgePoint": "知识与信念的区别",
        "analysis": "柏拉图认为，知识是有理由的真信念，而信念不一定为真。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "盖梯尔问题挑战了什么？",
        "options": [
          "A. 知识的定义",
          "B. 信念的存在",
          "C. 真理的可能性",
          "D. 怀疑论"
        ],
        "answer": "A",
        "knowledgePoint": "柏拉图的经典定义",
        "analysis": "盖梯尔问题表明，有理由的真信念并不一定等于知识。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "对巫师来说，'我知道魔法存在'和'我相信魔法存在'：",
        "options": [
          "A. 没有区别",
          "B. 前者需要更充分的理由",
          "C. 后者更可靠",
          "D. 都一样"
        ],
        "answer": "B",
        "knowledgePoint": "盖梯尔问题",
        "analysis": "知识需要正当理由，而信念只需要相信——对巫师来说，直接经验提供了相信魔法的理由。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔法知识的特殊性”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔法知识的特殊性",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“知识与信念的区别”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "知识与信念的区别",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“我们如何知道”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 7,
    "title": "柏拉图洞穴寓言",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "洞穴中的囚徒看到的是什么？",
        "options": [
          "A. 真实的事物",
          "B. 影子",
          "C. 阳光",
          "D. 其他囚徒"
        ],
        "answer": "B",
        "knowledgePoint": "洞穴囚徒与影子",
        "analysis": "柏拉图认为，大多数人就像洞穴中的囚徒，只能看到现实的影子而非真实。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "走出洞穴的哲学家看到的是什么？",
        "options": [
          "A. 更多影子",
          "B. 火光",
          "C. 真实的事物",
          "D. 黑暗"
        ],
        "answer": "C",
        "knowledgePoint": "表象与实在的区别",
        "analysis": "走出洞穴的哲学家看到了真实的世界，而不仅仅是表象。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "麻瓜研究课可以被看作：",
        "options": [
          "A. 留在洞穴里",
          "B. 走出洞穴的尝试",
          "C. 制造更多影子",
          "D. 没有意义"
        ],
        "answer": "B",
        "knowledgePoint": "哲学家的使命",
        "analysis": "学习麻瓜文化可以帮助巫师理解不同的视角，就像走出洞穴看到新的世界。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“麻瓜研究的洞穴隐喻”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "麻瓜研究的洞穴隐喻",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“洞穴囚徒与影子”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "洞穴囚徒与影子",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“柏拉图洞穴寓言”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 8,
    "title": "感官的可靠性",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "我们的感官：",
        "options": [
          "A. 总是可靠的",
          "B. 有时会欺骗我们",
          "C. 从不可靠",
          "D. 只在白天可靠"
        ],
        "answer": "B",
        "knowledgePoint": "幻觉与错觉的挑战",
        "analysis": "感官经验可能存在幻觉和错觉，因此不完全可靠。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "感知的本质是：",
        "options": [
          "A. 被动接收",
          "B. 主动建构",
          "C. 完全客观",
          "D. 完全主观"
        ],
        "answer": "B",
        "knowledgePoint": "感知的建构性",
        "analysis": "大脑会根据经验和预期主动解释感官输入，因此感知是建构的。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "魔法幻象对感知哲学的挑战在于：",
        "options": [
          "A. 证明感官完全可靠",
          "B. 说明魔法不存在",
          "C. 质疑现实的可靠性",
          "D. 没有挑战"
        ],
        "answer": "C",
        "knowledgePoint": "感官可靠性的限度",
        "analysis": "如果魔法可以完美复制感官经验，我们如何确定所感知的是真实的？"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔法幻象的哲学挑战”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔法幻象的哲学挑战",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“幻觉与错觉的挑战”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "幻觉与错觉的挑战",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“感官的可靠性”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 9,
    "title": "理性的力量",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "理性主义认为知识来自：",
        "options": [
          "A. 感官经验",
          "B. 理性思考",
          "C. 信仰",
          "D. 传统"
        ],
        "answer": "B",
        "knowledgePoint": "先天知识是否存在",
        "analysis": "理性主义者如笛卡尔认为，知识可以通过纯粹理性获得。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "数学真理的特殊性在于：",
        "options": [
          "A. 依赖经验",
          "B. 是偶然的",
          "C. 是必然的",
          "D. 无法证明"
        ],
        "answer": "C",
        "knowledgePoint": "理性主义与经验主义的争论",
        "analysis": "数学真理是必然的，无论在哪个世界都成立，不依赖经验。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "逻辑推理的可靠性：",
        "options": [
          "A. 只对麻瓜有效",
          "B. 只对巫师有效",
          "C. 对所有人都有效",
          "D. 取决于魔法"
        ],
        "answer": "C",
        "knowledgePoint": "数学真理的特殊性",
        "analysis": "逻辑推理的规则是普遍有效的，无论对麻瓜还是巫师都适用。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“逻辑推理的可靠性”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "逻辑推理的可靠性",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“先天知识是否存在”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "先天知识是否存在",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“理性的力量”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 10,
    "title": "知识的边界",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "怀疑论者认为：",
        "options": [
          "A. 我们可以知道一切",
          "B. 我们无法真正知道任何事情",
          "C. 知识是绝对的",
          "D. 知识很容易获得"
        ],
        "answer": "B",
        "knowledgePoint": "可知与不可知的划分",
        "analysis": "怀疑论者质疑知识的可能性，认为我们无法排除被欺骗的可能性。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "知识的进步意味着：",
        "options": [
          "A. 我们已经知道一切",
          "B. 我们在不断接近真理",
          "C. 知识是固定的",
          "D. 知识不会增长"
        ],
        "answer": "B",
        "knowledgePoint": "怀疑论的挑战",
        "analysis": "知识在不断发展，今天无法回答的问题可能在未来得到解答。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "魔法是否超越了知识的边界？",
        "options": [
          "A. 是的，完全超越",
          "B. 不是，只是尚未理解",
          "C. 魔法不存在",
          "D. 无法判断"
        ],
        "answer": "B",
        "knowledgePoint": "知识的进步",
        "analysis": "魔法似乎违反物理定律，但这可能只是因为我们尚未理解其背后的规律。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔法是否超越知识边界”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔法是否超越知识边界",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“可知与不可知的划分”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "可知与不可知的划分",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“知识的边界”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 11,
    "title": "什么是自由意志",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "自由意志意味着：",
        "options": [
          "A. 可以任意选择",
          "B. 本可以做出不同选择",
          "C. 完全被决定",
          "D. 没有选择"
        ],
        "answer": "B",
        "knowledgePoint": "自由选择的含义",
        "analysis": "自由意志意味着在做出选择的那一刻，你本可以做出不同的选择。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "决定论认为：",
        "options": [
          "A. 一切都是偶然的",
          "B. 一切都是被决定的",
          "C. 只有人类有自由",
          "D. 没有规律"
        ],
        "answer": "B",
        "knowledgePoint": "决定论的挑战",
        "analysis": "决定论认为，宇宙中的每个事件都被之前的事件决定，包括人类的选择。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "如果决定论为真，道德责任：",
        "options": [
          "A. 仍然存在",
          "B. 完全消失",
          "C. 变得更重要",
          "D. 无法确定"
        ],
        "answer": "A",
        "knowledgePoint": "自由意志与道德责任",
        "analysis": "即使决定论为真，道德责任仍然有意义——它可以影响未来的行为。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“日常经验中的自由感”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "日常经验中的自由感",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“自由选择的含义”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "自由选择的含义",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“什么是自由意志”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 12,
    "title": "硬决定论",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "硬决定论认为自由意志：",
        "options": [
          "A. 与决定论相容",
          "B. 是真实的",
          "C. 是幻觉",
          "D. 只存在于人类"
        ],
        "answer": "C",
        "knowledgePoint": "宇宙的因果闭合性",
        "analysis": "硬决定论认为，自由意志是一种幻觉，一切都是因果链的一部分。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "硬决定论对道德责任的看法是：",
        "options": [
          "A. 应该加强",
          "B. 应该取消",
          "C. 没有变化",
          "D. 取决于后果"
        ],
        "answer": "B",
        "knowledgePoint": "决定论与自由意志不相容",
        "analysis": "如果一切都是被决定的，硬决定论者认为没有人应该为自己的行为负责。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "魔药影响下的行为：",
        "options": [
          "A. 完全没有责任",
          "B. 完全有责任",
          "C. 责任减轻",
          "D. 责任增加"
        ],
        "answer": "C",
        "knowledgePoint": "道德责任的消解",
        "analysis": "外部影响会减轻但不一定消除道德责任，这取决于影响的程度和性质。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔药影响下的行为责任”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔药影响下的行为责任",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“宇宙的因果闭合性”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "宇宙的因果闭合性",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“硬决定论”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 13,
    "title": "相容论",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "相容论认为：",
        "options": [
          "A. 自由意志与决定论不相容",
          "B. 自由意志与决定论可以共存",
          "C. 没有自由意志",
          "D. 没有决定论"
        ],
        "answer": "B",
        "knowledgePoint": "自由与决定论的兼容性",
        "analysis": "相容论认为，自由意志和决定论可以同时为真，关键在于如何定义自由。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "相容论定义的自由是：",
        "options": [
          "A. 脱离因果链",
          "B. 不受外部强迫",
          "C. 完全随机",
          "D. 没有限制"
        ],
        "answer": "B",
        "knowledgePoint": "内在原因与外在原因",
        "analysis": "相容论认为，自由不是脱离因果链，而是按照自己的意愿行动，不受外部强迫。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "相容论对道德责任的辩护是：",
        "options": [
          "A. 责任不存在",
          "B. 责任基于内在原因",
          "C. 责任基于后果",
          "D. 责任基于运气"
        ],
        "answer": "B",
        "knowledgePoint": "相容论对道德责任的辩护",
        "analysis": "相容论认为，只要行为反映了个人的真实自我，就应该承担责任，即使这个自我是被决定的。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“对相容论的批评”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "对相容论的批评",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“自由与决定论的兼容性”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "自由与决定论的兼容性",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“相容论”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 14,
    "title": "道德责任的基础",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "承担责任需要：",
        "options": [
          "A. 不知道自己在做什么",
          "B. 无法做出选择",
          "C. 知道且能够选择",
          "D. 被强迫"
        ],
        "answer": "C",
        "knowledgePoint": "责任的条件：知道与选择",
        "analysis": "要承担责任，必须知道自己在做什么，并且能够做出选择。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "无知对责任的影响是：",
        "options": [
          "A. 增加责任",
          "B. 减轻责任",
          "C. 没有影响",
          "D. 完全消除责任"
        ],
        "answer": "B",
        "knowledgePoint": "无知与强迫对责任的影响",
        "analysis": "如果一个人不知道自己的行为会造成伤害，责任会相应减轻。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "未成年人责任较轻的原因是：",
        "options": [
          "A. 年龄小",
          "B. 判断力尚未完全发展",
          "C. 不需要负责",
          "D. 父母负责"
        ],
        "answer": "B",
        "knowledgePoint": "部分责任与完全责任",
        "analysis": "未成年人的判断力尚未完全成熟，因此责任较轻。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“未成年人的责任边界”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "未成年人的责任边界",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“责任的条件：知道与选择”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "责任的条件：知道与选择",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“道德责任的基础”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 15,
    "title": "意志支配咒与责任",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "夺魂咒的效果是：",
        "options": [
          "A. 增强力量",
          "B. 控制意志",
          "C. 治疗疾病",
          "D. 飞行"
        ],
        "answer": "B",
        "knowledgePoint": "Imperius咒的道德后果",
        "analysis": "夺魂咒可以完全控制一个人的意志，使其成为施咒者的傀儡。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "被夺魂咒控制的人：",
        "options": [
          "A. 完全有责任",
          "B. 完全没有责任",
          "C. 部分责任",
          "D. 责任加重"
        ],
        "answer": "B",
        "knowledgePoint": "被控制者的责任程度",
        "analysis": "在魔法法律中，被夺魂咒控制的人通常不承担责任，因为他们的意志被剥夺了。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "如果抵抗是可能的，责任：",
        "options": [
          "A. 完全消失",
          "B. 仍然存在",
          "C. 减轻但存在",
          "D. 无法确定"
        ],
        "answer": "C",
        "knowledgePoint": "控制者与被控制者的责任分配",
        "analysis": "如果被控制者有能力抵抗，即使很困难，他们可能仍然承担部分责任。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔法强制与道德责任的哲学争论”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔法强制与道德责任的哲学争论",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“Imperius咒的道德后果”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "Imperius咒的道德后果",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“意志支配咒与责任”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 16,
    "title": "什么是公正",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "分配正义关注的是：",
        "options": [
          "A. 程序",
          "B. 资源分配",
          "C. 惩罚",
          "D. 法律"
        ],
        "answer": "B",
        "knowledgePoint": "分配正义与程序正义",
        "analysis": "分配正义关注社会资源如何公平分配。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "公平与平等的关系是：",
        "options": [
          "A. 完全相同",
          "B. 公平需要恰当对待",
          "C. 平等就是公平",
          "D. 没有关系"
        ],
        "answer": "B",
        "knowledgePoint": "公平的不同概念",
        "analysis": "公平不等于平等，公平意味着恰当对待，有时需要不同对待才能达到公平。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "巫师社会的正义问题包括：",
        "options": [
          "A. 纯血统优势",
          "B. 资源分配",
          "C. 机会平等",
          "D. 以上都是"
        ],
        "answer": "D",
        "knowledgePoint": "正义与平等的关系",
        "analysis": "巫师社会存在多种正义问题，包括血统歧视、资源分配不均等。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“巫师社会的正义问题”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "巫师社会的正义问题",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“分配正义与程序正义”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "分配正义与程序正义",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“什么是公正”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 17,
    "title": "罗尔斯的无知之幕",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "无知之幕的作用是：",
        "options": [
          "A. 隐藏真相",
          "B. 消除个人偏见",
          "C. 增加知识",
          "D. 制造无知"
        ],
        "answer": "B",
        "knowledgePoint": "无知之幕的思想实验",
        "analysis": "无知之幕让人们在不知道自己社会地位的情况下选择正义原则，从而消除个人偏见。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "罗尔斯认为人们会选择：",
        "options": [
          "A. 对最有利者最有利",
          "B. 对最不利者最有利",
          "C. 平均分配",
          "D. 按能力分配"
        ],
        "answer": "B",
        "knowledgePoint": "在无知状态下的选择",
        "analysis": "罗尔斯认为，在无知之幕下，人们会选择对最不利者最有利的原则。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "如果巫师站在无知之幕后面，不知道自己是否有魔法能力：",
        "options": [
          "A. 会选择隐瞒魔法",
          "B. 会选择公开魔法",
          "C. 无法预测",
          "D. 会选择消灭魔法"
        ],
        "answer": "C",
        "knowledgePoint": "两个正义原则",
        "analysis": "不同的人可能做出不同选择，取决于他们对风险的态度和对公平的理解。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔法世界的无知之幕”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔法世界的无知之幕",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“无知之幕的思想实验”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "无知之幕的思想实验",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“罗尔斯的无知之幕”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 18,
    "title": "惩罚的目的",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "应报论认为惩罚是：",
        "options": [
          "A. 改造罪犯",
          "B. 报复罪行",
          "C. 威慑他人",
          "D. 保护社会"
        ],
        "answer": "B",
        "knowledgePoint": "应报论：以牙还牙",
        "analysis": "应报论认为，惩罚是对罪行的回应，作恶者应该得到他们应得的。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "矫正论关注的是：",
        "options": [
          "A. 报复",
          "B. 改造罪犯",
          "C. 威慑",
          "D. 惩罚"
        ],
        "answer": "B",
        "knowledgePoint": "矫正论：改造罪犯",
        "analysis": "矫正论认为，惩罚的目的是改造罪犯，让他们成为更好的人。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "阿兹卡班体现了哪种理论？",
        "options": [
          "A. 应报论",
          "B. 矫正论",
          "C. 威慑论",
          "D. 以上都有"
        ],
        "answer": "D",
        "knowledgePoint": "威慑论：预防犯罪",
        "analysis": "阿兹卡班综合了多种惩罚理论——既惩罚罪犯（应报），也威慑他人（威慑），但改造的作用有限。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“不同理论对阿兹卡班的看法”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "不同理论对阿兹卡班的看法",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“应报论：以牙还牙”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "应报论：以牙还牙",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“惩罚的目的”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 19,
    "title": "全球正义",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "全球正义关注的是：",
        "options": [
          "A. 一个国家内部",
          "B. 国家之间",
          "C. 个人之间",
          "D. 家庭内部"
        ],
        "answer": "B",
        "knowledgePoint": "对陌生人的道德义务",
        "analysis": "全球正义关注国家之间的公平和对陌生人的道德义务。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "富国对穷国的责任：",
        "options": [
          "A. 没有责任",
          "B. 有帮助的责任",
          "C. 完全负责",
          "D. 取决于意愿"
        ],
        "answer": "B",
        "knowledgePoint": "富国与穷国的责任",
        "analysis": "大多数伦理理论认为，富国对穷国负有一定的帮助责任。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "巫师对麻瓜的责任：",
        "options": [
          "A. 没有责任",
          "B. 有保护的责任",
          "C. 有告知的责任",
          "D. 有统治的责任"
        ],
        "answer": "C",
        "knowledgePoint": "资源分配的公平性",
        "analysis": "从正义角度看，巫师可能有义务告知麻瓜魔法的存在，让他们做出知情选择。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“巫师与麻瓜之间的正义”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "巫师与麻瓜之间的正义",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“对陌生人的道德义务”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "对陌生人的道德义务",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“全球正义”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 20,
    "title": "分配正义",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "按需分配的问题是：",
        "options": [
          "A. 太公平",
          "B. 减少工作激励",
          "C. 太复杂",
          "D. 无法实施"
        ],
        "answer": "B",
        "knowledgePoint": "平等分配的理由与局限",
        "analysis": "按需分配可能减少人们工作的激励，因为无论工作多少都能满足需求。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "按贡献分配的问题是：",
        "options": [
          "A. 忽视天赋差异",
          "B. 太平均",
          "C. 无法计算",
          "D. 太不公平"
        ],
        "answer": "A",
        "knowledgePoint": "按需分配的理由与局限",
        "analysis": "按贡献分配忽略了天赋差异——有些人天生更有能力，不是因为他们更努力。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "魔法能力是否应该影响资源分配？",
        "options": [
          "A. 应该",
          "B. 不应该",
          "C. 部分应该",
          "D. 无法确定"
        ],
        "answer": "B",
        "knowledgePoint": "按贡献分配的理由与局限",
        "analysis": "从公平角度看，天生的能力差异不应该决定资源分配，否则会加剧不平等。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔法能力是否应该影响分配”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔法能力是否应该影响分配",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“平等分配的理由与局限”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "平等分配的理由与局限",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“分配正义”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 21,
    "title": "笛卡尔二元论",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "笛卡尔认为心灵和身体是：",
        "options": [
          "A. 同一种东西",
          "B. 两种不同实体",
          "C. 身体包含心灵",
          "D. 心灵包含身体"
        ],
        "answer": "B",
        "knowledgePoint": "笛卡尔二元论",
        "analysis": "笛卡尔认为，心灵和身体是两种完全不同的实体——心灵是非物质的，身体是物质的。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "二元论面临的难题是：",
        "options": [
          "A. 心灵如何影响身体",
          "B. 身体不存在",
          "C. 心灵不存在",
          "D. 没有难题"
        ],
        "answer": "A",
        "knowledgePoint": "身心交互问题",
        "analysis": "如果心灵是非物质的，它如何影响物质的身体？这是二元论的核心难题。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "幽灵的存在对二元论意味着：",
        "options": [
          "A. 支持二元论",
          "B. 反对二元论",
          "C. 无关",
          "D. 证明二元论错误"
        ],
        "answer": "A",
        "knowledgePoint": "松果体作为交互点",
        "analysis": "如果幽灵存在，它们可能是脱离身体的心灵，这支持了二元论的观点。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“幽灵与灵魂的哲学地位”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "幽灵与灵魂的哲学地位",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“笛卡尔二元论”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "笛卡尔二元论",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“笛卡尔二元论”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 22,
    "title": "物理主义",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "物理主义认为：",
        "options": [
          "A. 只有心灵存在",
          "B. 只有物质存在",
          "C. 心灵和物质都存在",
          "D. 什么都不存在"
        ],
        "answer": "B",
        "knowledgePoint": "心灵是大脑的产物",
        "analysis": "物理主义认为，一切都是物理的，心灵现象可以完全用物理过程解释。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "物理主义面临的挑战是：",
        "options": [
          "A. 解释意识",
          "B. 解释物质",
          "C. 解释运动",
          "D. 没有挑战"
        ],
        "answer": "A",
        "knowledgePoint": "神经科学的证据",
        "analysis": "物理主义难以解释主观意识体验——为什么神经活动会产生'感觉像什么'的体验？"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "即使了解所有神经过程，我们能解释红色看起来是什么样吗？",
        "options": [
          "A. 能",
          "B. 不能",
          "C. 可能",
          "D. 不知道"
        ],
        "answer": "B",
        "knowledgePoint": "还原论的挑战",
        "analysis": "大卫·查默斯认为，意识的主观体验无法完全用物理过程解释，这是'难问题'。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“意识是否能被完全物理化解释”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "意识是否能被完全物理化解释",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“心灵是大脑的产物”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "心灵是大脑的产物",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“物理主义”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 23,
    "title": "意识的难问题",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "意识的难问题是：",
        "options": [
          "A. 大脑如何处理信息",
          "B. 为什么有主观体验",
          "C. 记忆如何存储",
          "D. 语言如何产生"
        ],
        "answer": "B",
        "knowledgePoint": "意识的难问题",
        "analysis": "意识的难问题是解释为什么物理过程会产生主观体验。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "玛丽的房间思想实验说明：",
        "options": [
          "A. 物理知识足够",
          "B. 存在非物理知识",
          "C. 颜色不存在",
          "D. 玛丽看不见颜色"
        ],
        "answer": "B",
        "knowledgePoint": "玛丽的房间思想实验",
        "analysis": "玛丽知道所有关于颜色的物理知识，但第一次看到红色时似乎学到了新东西——红色看起来是什么样的。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "摄魂怪攻击夺走的是：",
        "options": [
          "A. 记忆",
          "B. 意识体验",
          "C. 灵魂",
          "D. 身体能量"
        ],
        "answer": "B",
        "knowledgePoint": "第三人称描述的局限",
        "analysis": "摄魂怪夺走的似乎是快乐等主观体验，这涉及意识的本质问题。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“摄魂怪攻击的意识哲学”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "摄魂怪攻击的意识哲学",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“意识的难问题”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "意识的难问题",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“意识的难问题”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 24,
    "title": "人格同一性",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "个人同一性关注的是：",
        "options": [
          "A. 身体特征",
          "B. 什么使你成为你",
          "C. 名字",
          "D. 外貌"
        ],
        "answer": "B",
        "knowledgePoint": "什么让你成为你",
        "analysis": "个人同一性问的是：什么在时间中保持不变，使你成为同一个人？"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "洛克认为个人同一性在于：",
        "options": [
          "A. 身体",
          "B. 记忆",
          "C. 灵魂",
          "D. 性格"
        ],
        "answer": "B",
        "knowledgePoint": "忒修斯之船问题",
        "analysis": "洛克认为，个人同一性在于记忆的连续性——如果你记得过去的经历，你就是那个经历过的人。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "被除忆咒改变的人还是原来那个人吗？",
        "options": [
          "A. 是",
          "B. 不是",
          "C. 部分是",
          "D. 无法确定"
        ],
        "answer": "C",
        "knowledgePoint": "记忆理论与连续性",
        "analysis": "如果记忆被修改，个人同一性会受到影响，但不完全消失——身体和部分记忆仍然存在。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“除忆咒后的同一性问题”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "除忆咒后的同一性问题",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“什么让你成为你”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "什么让你成为你",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“人格同一性”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 25,
    "title": "死亡与继续存在",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "死亡通常被定义为：",
        "options": [
          "A. 生命的终止",
          "B. 灵魂离开身体",
          "C. 永远睡觉",
          "D. 去另一个世界"
        ],
        "answer": "A",
        "knowledgePoint": "死亡的哲学定义",
        "analysis": "死亡通常被定义为生命的终止，包括心跳和大脑活动的停止。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "柏拉图认为灵魂是：",
        "options": [
          "A. 会死亡的",
          "B. 不朽的",
          "C. 物质的",
          "D. 不存在的"
        ],
        "answer": "B",
        "knowledgePoint": "身体死亡 vs 意识终结",
        "analysis": "柏拉图认为，灵魂是单纯的、不可分割的，因此不会分解，是不朽的。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "幽灵是死者的灵魂吗？",
        "options": [
          "A. 是",
          "B. 不是",
          "C. 可能是",
          "D. 无法证明"
        ],
        "answer": "D",
        "knowledgePoint": "灵魂不朽的论证",
        "analysis": "虽然幽灵看起来像死者的延续，但我们无法证明它们就是灵魂——它们可能是某种能量形式或魔法现象。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“幽灵是否是继续存在的证据”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "幽灵是否是继续存在的证据",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“死亡的哲学定义”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "死亡的哲学定义",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“死亡与继续存在”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 26,
    "title": "国家权力的来源",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "社会契约论认为国家权力来自：",
        "options": [
          "A. 武力",
          "B. 人民的同意",
          "C. 上帝",
          "D. 传统"
        ],
        "answer": "B",
        "knowledgePoint": "为什么要服从国家",
        "analysis": "社会契约论认为，国家的权力来自人民的自愿同意。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "权力的合法性基础是：",
        "options": [
          "A. 武力",
          "B. 正当性",
          "C. 财富",
          "D. 人数"
        ],
        "answer": "B",
        "knowledgePoint": "社会契约论",
        "analysis": "权力的合法性来自正当性，而不是武力或财富。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "魔法部权力的正当性来自：",
        "options": [
          "A. 巫师的同意",
          "B. 武力",
          "C. 传统",
          "D. 魔法能力"
        ],
        "answer": "A",
        "knowledgePoint": "权力的合法性基础",
        "analysis": "魔法部的权力应该来自巫师的同意，如果大多数巫师不同意其政策，其合法性就会受到质疑。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔法部权力的正当性”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔法部权力的正当性",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“为什么要服从国家”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "为什么要服从国家",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“国家权力的来源”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 27,
    "title": "洛克的社会契约",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "洛克认为自然权利包括：",
        "options": [
          "A. 生命、自由、财产",
          "B. 权力、财富、地位",
          "C. 食物、水、住所",
          "D. 魔法能力"
        ],
        "answer": "A",
        "knowledgePoint": "自然状态与自然权利",
        "analysis": "洛克认为，人们在自然状态下享有生命、自由和财产的权利。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "政府的目的是：",
        "options": [
          "A. 统治人民",
          "B. 保护权利",
          "C. 积累财富",
          "D. 扩大权力"
        ],
        "answer": "B",
        "knowledgePoint": "社会契约的签订",
        "analysis": "洛克认为，政府的唯一目的是保护人民的自然权利。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "洛克认为人民有权利：",
        "options": [
          "A. 永远服从政府",
          "B. 反抗不公正的政府",
          "C. 忽视法律",
          "D. 推翻所有政府"
        ],
        "answer": "B",
        "knowledgePoint": "政府的有限权力",
        "analysis": "洛克认为，当政府侵犯人民的权利时，人民有权反抗。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“反抗不公正政府的权利”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "反抗不公正政府的权利",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“自然状态与自然权利”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "自然状态与自然权利",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“洛克的社会契约”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 28,
    "title": "卢梭与公意",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "公意是：",
        "options": [
          "A. 多数人的意志",
          "B. 共同的善",
          "C. 个人意志的总和",
          "D. 统治者的意志"
        ],
        "answer": "B",
        "knowledgePoint": "公意 vs 众意",
        "analysis": "卢梭认为，公意是超越个人利益的、对所有人都有利的共同意志。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "人民主权意味着：",
        "options": [
          "A. 人民统治",
          "B. 国王统治",
          "C. 议会统治",
          "D. 法律统治"
        ],
        "answer": "A",
        "knowledgePoint": "人民主权",
        "analysis": "卢梭认为，主权属于人民，而不是国王或议会。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "强迫自由的悖论指的是：",
        "options": [
          "A. 自由不需要强迫",
          "B. 强迫可以带来自由",
          "C. 自由与强迫对立",
          "D. 强迫总是错的"
        ],
        "answer": "B",
        "knowledgePoint": "强迫自由的悖论",
        "analysis": "卢梭认为，当一个人违背公意时，强迫他做对他有利的事实际上是让他获得真正的自由。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“多数人暴政的危险”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "多数人暴政的危险",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“公意 vs 众意”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "公意 vs 众意",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“卢梭与公意”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 29,
    "title": "无政府主义",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "无政府主义认为：",
        "options": [
          "A. 政府是必要的",
          "B. 政府是有害的",
          "C. 政府可以改进",
          "D. 政府应该扩大"
        ],
        "answer": "B",
        "knowledgePoint": "国家是否必要",
        "analysis": "无政府主义认为，国家不仅不是必要的，而且是有害的。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "无政府主义设想的社会是：",
        "options": [
          "A. 混乱的",
          "B. 由自愿协会组成",
          "C. 由强者统治",
          "D. 没有任何组织"
        ],
        "answer": "B",
        "knowledgePoint": "自愿合作的可能性",
        "analysis": "无政府主义设想一个由自愿协会组成的社会，没有强制权力。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "巫师社会是否需要魔法部？",
        "options": [
          "A. 绝对需要",
          "B. 绝对不需要",
          "C. 可能不需要",
          "D. 无法确定"
        ],
        "answer": "C",
        "knowledgePoint": "无政府主义的实践挑战",
        "analysis": "虽然当前有魔法部，但理论上巫师社会可以通过自愿合作来组织，不一定需要强制政府。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔法社会是否需要政府”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔法社会是否需要政府",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“国家是否必要”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "国家是否必要",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“无政府主义”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 30,
    "title": "公民抗命",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "公民抗命是：",
        "options": [
          "A. 随意违法",
          "B. 出于良知的违法",
          "C. 暴力反抗",
          "D. 逃避法律"
        ],
        "answer": "B",
        "knowledgePoint": "违法的道德正当性",
        "analysis": "公民抗命是出于良知，为了纠正不公正而故意违法。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "马丁·路德·金认为公民抗命应该：",
        "options": [
          "A. 暴力",
          "B. 和平",
          "C. 秘密",
          "D. 大规模"
        ],
        "answer": "B",
        "knowledgePoint": "马丁·路德·金的非暴力抵抗",
        "analysis": "马丁·路德·金认为，公民抗命应该采取非暴力方式。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "反对魔法部不公正法令的伦理条件是：",
        "options": [
          "A. 任何情况都可以",
          "B. 不公正是真实的、和平的、愿意接受惩罚",
          "C. 只要不同意就可以",
          "D. 无法确定"
        ],
        "answer": "B",
        "knowledgePoint": "公民抗命的条件",
        "analysis": "根据金的标准，公民抗命需要满足：不公正是真实的、采取和平方式、愿意接受惩罚。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“反对魔法部不公正法令的伦理”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "反对魔法部不公正法令的伦理",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“违法的道德正当性”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "违法的道德正当性",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“公民抗命”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 31,
    "title": "堕胎的哲学论证",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "堕胎争议的核心是：",
        "options": [
          "A. 胎儿是否是人",
          "B. 母亲的权利",
          "C. 法律规定",
          "D. 宗教信仰"
        ],
        "answer": "A",
        "knowledgePoint": "人格与生命权",
        "analysis": "堕胎争议的核心问题是：胎儿何时成为一个人，从而拥有生命权。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "支持堕胎的主要理由是：",
        "options": [
          "A. 母亲的自主权",
          "B. 胎儿不是人",
          "C. 法律允许",
          "D. 宗教支持"
        ],
        "answer": "A",
        "knowledgePoint": "胎儿的道德地位",
        "analysis": "支持堕胎的主要理由是女性对自己身体的自主权。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "不同伦理框架对堕胎的判断：",
        "options": [
          "A. 完全一致",
          "B. 各不相同",
          "C. 都是错的",
          "D. 都是对的"
        ],
        "answer": "B",
        "knowledgePoint": "女性自主权",
        "analysis": "后果论、义务论和美德伦理对堕胎会有不同的判断，取决于它们的核心原则。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“不同伦理框架的不同结论”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "不同伦理框架的不同结论",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“人格与生命权”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "人格与生命权",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“堕胎的哲学论证”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 32,
    "title": "安乐死",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "安乐死是：",
        "options": [
          "A. 自然死亡",
          "B. 帮助结束生命",
          "C. 拒绝治疗",
          "D. 自杀"
        ],
        "answer": "B",
        "knowledgePoint": "自愿与非自愿安乐死",
        "analysis": "安乐死是指帮助一个人结束生命，以减轻他们的痛苦。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "支持安乐死的理由是：",
        "options": [
          "A. 个人自主权",
          "B. 减轻痛苦",
          "C. 节约资源",
          "D. 以上都是"
        ],
        "answer": "D",
        "knowledgePoint": "自主权与生命神圣性",
        "analysis": "支持安乐死的理由包括个人自主权、减轻痛苦和合理使用资源。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "医生的职责是：",
        "options": [
          "A. 只拯救生命",
          "B. 只减轻痛苦",
          "C. 两者兼顾",
          "D. 听从病人"
        ],
        "answer": "C",
        "knowledgePoint": "医生的角色",
        "analysis": "医生的职责不仅是拯救生命，也是减轻痛苦，这两者有时会产生冲突。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“痛苦与尊严的权衡”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "痛苦与尊严的权衡",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“自愿与非自愿安乐死”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "自愿与非自愿安乐死",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“安乐死”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 33,
    "title": "医疗资源分配",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "稀缺资源分配的原则是：",
        "options": [
          "A. 先到先得",
          "B. 公平合理",
          "C. 随机分配",
          "D. 富人优先"
        ],
        "answer": "B",
        "knowledgePoint": "稀缺资源的公平分配",
        "analysis": "稀缺医疗资源的分配应该公平合理，考虑多种因素。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "应该优先考虑：",
        "options": [
          "A. 病情最严重的人",
          "B. 最有可能康复的人",
          "C. 年轻人",
          "D. 没有固定答案"
        ],
        "answer": "D",
        "knowledgePoint": "谁先得到治疗",
        "analysis": "资源分配没有绝对的标准，需要根据具体情况权衡各种因素。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "魔法治疗是否应该优先给巫师？",
        "options": [
          "A. 应该",
          "B. 不应该",
          "C. 看情况",
          "D. 无法确定"
        ],
        "answer": "B",
        "knowledgePoint": "年龄、贡献、需要的考量",
        "analysis": "从公平角度看，医疗资源不应该因为身份而区别对待，无论是巫师还是麻瓜。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔法治疗是否应该优先”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔法治疗是否应该优先",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“稀缺资源的公平分配”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "稀缺资源的公平分配",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“医疗资源分配”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 34,
    "title": "遗传工程伦理",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "遗传干预在伦理讨论中常被分成哪两种用途？",
        "options": [
          "A. 治疗和增强",
          "B. 复制和删除",
          "C. 阅读和修改",
          "D. 检测和修复"
        ],
        "answer": "A",
        "knowledgePoint": "改造人类的边界",
        "analysis": "治疗与增强的区分是这节课的中心：前者修复疾病，后者改造能力或性状。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“设计婴儿”的课堂讨论，最准确的理解是：",
        "options": [
          "A. 它在课上被当作伦理设想来检验边界",
          "B. 它已经是霍格沃茨常见医疗技术",
          "C. 它与自主权无关",
          "D. 它只是审美选择"
        ],
        "answer": "A",
        "knowledgePoint": "胚胎选择与设计婴儿的争议",
        "analysis": "这里的重点是思想实验，用来分析治疗、增强、自主权与尊严的边界。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "魔法基因改造应该：",
        "options": [
          "A. 完全禁止",
          "B. 只允许治疗",
          "C. 完全自由",
          "D. 无法确定"
        ],
        "answer": "B",
        "knowledgePoint": "基因增强 vs 基因治疗",
        "analysis": "与麻瓜技术类似，魔法基因改造应该只允许用于治疗，禁止用于增强，以避免不平等。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔法基因改造的伦理”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔法基因改造的伦理",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“改造人类的边界”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "改造人类的边界",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“遗传工程伦理”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 35,
    "title": "动物权利",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "边沁认为动物权利的标准是：",
        "options": [
          "A. 是否会思考",
          "B. 是否会感受痛苦",
          "C. 是否有语言",
          "D. 是否是人类"
        ],
        "answer": "B",
        "knowledgePoint": "动物是否有道德地位",
        "analysis": "边沁认为，判断动物是否有道德地位的标准是它们能否感受痛苦。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "物种歧视是：",
        "options": [
          "A. 保护物种",
          "B. 因为物种不同而歧视",
          "C. 研究物种",
          "D. 热爱动物"
        ],
        "answer": "B",
        "knowledgePoint": "功能感受 vs 理性",
        "analysis": "物种歧视是指仅仅因为一个存在物属于不同物种就歧视它。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "神奇动物的道德地位：",
        "options": [
          "A. 与普通动物相同",
          "B. 与人类相同",
          "C. 更高",
          "D. 取决于能力"
        ],
        "answer": "D",
        "knowledgePoint": "物种歧视是否成立",
        "analysis": "神奇动物的道德地位应该取决于它们的能力，特别是感受痛苦和拥有自我意识的能力。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“神奇动物的道德地位”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "神奇动物的道德地位",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“动物是否有道德地位”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "动物是否有道德地位",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“动物权利”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 36,
    "title": "上帝存在的本体论证明",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "安瑟伦的本体论证明认为：",
        "options": [
          "A. 上帝不存在",
          "B. 上帝必须存在",
          "C. 无法证明",
          "D. 上帝可能存在"
        ],
        "answer": "B",
        "knowledgePoint": "安瑟伦的论证",
        "analysis": "安瑟伦认为，上帝是无法想象比它更伟大的存在，因此必须存在。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "康德反驳说：",
        "options": [
          "A. 上帝存在",
          "B. 存在不是一个谓词",
          "C. 证明正确",
          "D. 无法反驳"
        ],
        "answer": "B",
        "knowledgePoint": "存在作为谓词的争议",
        "analysis": "康德认为，存在不是一个可以添加到概念上的属性，因此本体论证明不成立。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "本体论证明的问题在于：",
        "options": [
          "A. 逻辑错误",
          "B. 前提有问题",
          "C. 结论正确",
          "D. 无法确定"
        ],
        "answer": "B",
        "knowledgePoint": "康德的反驳",
        "analysis": "本体论证明的前提——存在是一种完美——是有问题的，存在与完美之间没有必然联系。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“模态版本的论证”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "模态版本的论证",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“安瑟伦的论证”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "安瑟伦的论证",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“上帝存在的本体论证明”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 37,
    "title": "宇宙论与设计论证明",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "宇宙论证明认为：",
        "options": [
          "A. 宇宙没有原因",
          "B. 宇宙有第一因",
          "C. 宇宙是永恒的",
          "D. 宇宙是偶然的"
        ],
        "answer": "B",
        "knowledgePoint": "第一因论证",
        "analysis": "宇宙论证明认为，一切事物都有原因，因此必然有一个无因的第一因——上帝。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "设计论证明认为：",
        "options": [
          "A. 宇宙是随机的",
          "B. 宇宙是设计的",
          "C. 宇宙是偶然的",
          "D. 宇宙没有目的"
        ],
        "answer": "B",
        "knowledgePoint": "宇宙微调论证",
        "analysis": "设计论证明认为，宇宙的秩序和复杂性表明存在一个设计者——上帝。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "进化论对设计论的挑战是：",
        "options": [
          "A. 支持设计论",
          "B. 提供了自然解释",
          "C. 没有影响",
          "D. 证明上帝存在"
        ],
        "answer": "B",
        "knowledgePoint": "设计论的挑战",
        "analysis": "达尔文的进化论表明，复杂的生命可以通过自然选择产生，不需要设计者。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“恶的问题”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "恶的问题",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“第一因论证”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "第一因论证",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“宇宙论与设计论证明”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 38,
    "title": "恶的问题",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "恶的问题是：",
        "options": [
          "A. 为什么有善",
          "B. 为什么有恶",
          "C. 恶不存在",
          "D. 恶是好的"
        ],
        "answer": "B",
        "knowledgePoint": "全知全善全能与苦难的矛盾",
        "analysis": "恶的问题追问：如果上帝是全知、全能、全善的，为什么世界上还有恶？"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "自由意志辩护认为：",
        "options": [
          "A. 恶不存在",
          "B. 恶是自由意志的代价",
          "C. 上帝不是全善的",
          "D. 上帝不存在"
        ],
        "answer": "B",
        "knowledgePoint": "自由意志辩护",
        "analysis": "自由意志辩护认为，上帝赋予人类自由意志，这意味着人类可能选择作恶，这是自由的代价。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "自然恶（如地震）的问题在于：",
        "options": [
          "A. 可以用自由意志解释",
          "B. 无法用自由意志解释",
          "C. 不是恶",
          "D. 是上帝的惩罚"
        ],
        "answer": "B",
        "knowledgePoint": "灵魂塑造辩护",
        "analysis": "自然恶不是人类选择的结果，因此自由意志辩护无法解释它。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“自然恶的挑战”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "自然恶的挑战",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“全知全善全能与苦难的矛盾”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "全知全善全能与苦难的矛盾",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“恶的问题”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 39,
    "title": "奇迹",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "奇迹是：",
        "options": [
          "A. 常见事件",
          "B. 违反自然规律的事件",
          "C. 科学现象",
          "D. 幻觉"
        ],
        "answer": "B",
        "knowledgePoint": "奇迹的定义",
        "analysis": "奇迹通常被定义为违反自然规律的事件，归因于神的干预。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "休谟认为奇迹：",
        "options": [
          "A. 很常见",
          "B. 证据不足",
          "C. 证明上帝存在",
          "D. 总是发生"
        ],
        "answer": "B",
        "knowledgePoint": "能否作为信仰的理据",
        "analysis": "休谟认为，奇迹的证据永远不足以推翻自然规律，因为自然规律有无数经验支持。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "魔法是奇迹吗？",
        "options": [
          "A. 是",
          "B. 不是",
          "C. 对麻瓜来说是",
          "D. 对巫师来说是"
        ],
        "answer": "C",
        "knowledgePoint": "休谟对奇迹的批判",
        "analysis": "魔法对麻瓜来说似乎是奇迹，但对巫师来说是自然的一部分——真正的奇迹应该是超越所有已知规律的事件。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔法是否是奇迹”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔法是否是奇迹",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“奇迹的定义”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "奇迹的定义",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“奇迹”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 40,
    "title": "宗教多元主义",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "宗教多元主义认为：",
        "options": [
          "A. 只有一个宗教是真的",
          "B. 所有宗教都是通向真理的道路",
          "C. 没有宗教是真的",
          "D. 宗教不重要"
        ],
        "answer": "B",
        "knowledgePoint": "多种宗教的存在",
        "analysis": "宗教多元主义认为，所有宗教都是通向同一真理的不同道路。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "排他论认为：",
        "options": [
          "A. 只有一个宗教是真的",
          "B. 所有宗教都是真的",
          "C. 没有宗教是真的",
          "D. 宗教应该融合"
        ],
        "answer": "A",
        "knowledgePoint": "排他论 vs 包容论 vs 多元论",
        "analysis": "排他论认为只有一个宗教是完全真实的，其他宗教都是错误的。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "不同宗教能否都是真的？",
        "options": [
          "A. 能",
          "B. 不能",
          "C. 部分能",
          "D. 无法确定"
        ],
        "answer": "C",
        "knowledgePoint": "不同信仰能否都是真的",
        "analysis": "不同宗教的核心教义可能相互冲突，无法同时为真，但它们可能包含共同的道德真理。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔法世界的宗教多样性”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔法世界的宗教多样性",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“多种宗教的存在”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "多种宗教的存在",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“宗教多元主义”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 41,
    "title": "道德实在论",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "道德实在论认为：",
        "options": [
          "A. 道德事实不存在",
          "B. 道德事实是客观的",
          "C. 道德是主观的",
          "D. 道德是情感表达"
        ],
        "answer": "B",
        "knowledgePoint": "道德事实是否存在",
        "analysis": "道德实在论认为，道德判断描述客观事实，存在客观的道德真理。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "道德实在论的挑战是：",
        "options": [
          "A. 道德分歧",
          "B. 道德事实的奇怪性",
          "C. 无法证明",
          "D. 以上都是"
        ],
        "answer": "D",
        "knowledgePoint": "客观道德真理",
        "analysis": "道德实在论面临多重挑战，包括道德分歧、道德事实的本体论地位等。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "如果道德实在论为真，我们如何认识道德事实？",
        "options": [
          "A. 通过感官",
          "B. 通过理性",
          "C. 通过直觉",
          "D. 无法认识"
        ],
        "answer": "C",
        "knowledgePoint": "道德知识的可能性",
        "analysis": "道德实在论者通常认为，我们通过道德直觉来认识道德事实。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“道德实在论的挑战”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "道德实在论的挑战",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“道德事实是否存在”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "道德事实是否存在",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“道德实在论”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 42,
    "title": "情感主义",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "情感主义认为道德判断是：",
        "options": [
          "A. 事实描述",
          "B. 情感表达",
          "C. 逻辑推理",
          "D. 神的命令"
        ],
        "answer": "B",
        "knowledgePoint": "道德判断是情感表达",
        "analysis": "情感主义认为，道德判断不是描述事实，而是表达情感。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "情感主义的优势是：",
        "options": [
          "A. 解释道德分歧",
          "B. 证明道德真理",
          "C. 提供客观标准",
          "D. 解决所有问题"
        ],
        "answer": "A",
        "knowledgePoint": "没有客观道德真理",
        "analysis": "情感主义很好地解释了道德分歧——人们有不同的情感，因此有不同的道德判断。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "情感主义的问题是：",
        "options": [
          "A. 没有问题",
          "B. 道德争论只是情感冲突",
          "C. 无法解释道德进步",
          "D. 无法解释道德知识"
        ],
        "answer": "B",
        "knowledgePoint": "情感主义的优势与问题",
        "analysis": "如果道德判断只是情感表达，那么道德争论就只是情感冲突，没有理性解决的方法。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“道德分歧的本质”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "道德分歧的本质",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“道德判断是情感表达”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "道德判断是情感表达",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“情感主义”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 43,
    "title": "道德相对主义",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "道德相对主义认为：",
        "options": [
          "A. 道德是普遍的",
          "B. 道德是文化的",
          "C. 道德是客观的",
          "D. 道德是不变的"
        ],
        "answer": "B",
        "knowledgePoint": "不同文化的道德差异",
        "analysis": "道德相对主义认为，道德标准是文化或个人的，没有普遍的道德真理。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "对相对主义的反驳是：",
        "options": [
          "A. 存在普遍道德原则",
          "B. 文化差异不重要",
          "C. 相对主义自相矛盾",
          "D. 以上都是"
        ],
        "answer": "D",
        "knowledgePoint": "相对主义的论证",
        "analysis": "相对主义面临多重反驳，包括普遍道德原则的存在和自相矛盾。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "是否存在跨文化的道德原则？",
        "options": [
          "A. 不存在",
          "B. 存在一些",
          "C. 全部存在",
          "D. 无法确定"
        ],
        "answer": "B",
        "knowledgePoint": "对相对主义的反驳",
        "analysis": "几乎所有文化都禁止谋杀、盗窃等行为，这些可能是跨文化的道德原则。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“普遍道德原则是否存在”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "普遍道德原则是否存在",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“不同文化的道德差异”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "不同文化的道德差异",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“道德相对主义”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 44,
    "title": "道德进步",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "道德进步意味着：",
        "options": [
          "A. 道德变化",
          "B. 朝着更好的方向变化",
          "C. 变得更严格",
          "D. 变得更宽松"
        ],
        "answer": "B",
        "knowledgePoint": "道德进步是否可能",
        "analysis": "道德进步不仅仅是道德观念的变化，而是朝着更公正、更平等的方向变化。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "奴隶制的废除是：",
        "options": [
          "A. 道德退步",
          "B. 道德进步",
          "C. 文化变化",
          "D. 没有变化"
        ],
        "answer": "B",
        "knowledgePoint": "奴隶制的废除",
        "analysis": "奴隶制的废除是公认的道德进步，因为它实现了更大的平等和正义。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "道德进步的标准是：",
        "options": [
          "A. 多数人的意见",
          "B. 更公正、更平等",
          "C. 传统",
          "D. 权力"
        ],
        "answer": "B",
        "knowledgePoint": "道德观念的变化",
        "analysis": "道德进步的标准通常是更公正、更平等、更尊重人权，而不是多数人的意见或传统。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“进步的标准是什么”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "进步的标准是什么",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“道德进步是否可能”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "道德进步是否可能",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“道德进步”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 45,
    "title": "道德语言分析",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "摩尔认为'善'是：",
        "options": [
          "A. 可以定义的",
          "B. 简单不可定义的",
          "C. 不存在的",
          "D. 等同于快乐"
        ],
        "answer": "B",
        "knowledgePoint": "善的含义",
        "analysis": "摩尔认为，'善'是一个简单的、不可定义的概念，试图用自然属性定义它是错误的。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "自然主义谬误是：",
        "options": [
          "A. 正确的推理",
          "B. 用自然属性定义道德术语",
          "C. 道德不存在",
          "D. 道德是主观的"
        ],
        "answer": "B",
        "knowledgePoint": "自然主义谬误",
        "analysis": "自然主义谬误是指试图用自然属性（如快乐、欲望满足）来定义道德术语（如'善'）。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "巫师的道德语言与麻瓜：",
        "options": [
          "A. 完全不同",
          "B. 基本相同",
          "C. 部分相同",
          "D. 无法比较"
        ],
        "answer": "C",
        "knowledgePoint": "道德术语的用法",
        "analysis": "巫师和麻瓜的道德语言在基本概念（如对错、善恶）上是相似的，但在具体应用上可能不同。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔法世界的道德语言”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔法世界的道德语言",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“善的含义”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "善的含义",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“道德语言分析”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 46,
    "title": "哲学论证结构分析",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "论证的基本结构是：",
        "options": [
          "A. 前提+结论",
          "B. 问题+答案",
          "C. 事实+观点",
          "D. 原因+结果"
        ],
        "answer": "A",
        "knowledgePoint": "识别前提与结论",
        "analysis": "每个论证都由前提和结论组成，前提支持结论。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "有效的论证是：",
        "options": [
          "A. 前提为真",
          "B. 结论为真",
          "C. 前提为真则结论必然为真",
          "D. 前提和结论都为真"
        ],
        "answer": "C",
        "knowledgePoint": "评估论证有效性",
        "analysis": "有效的论证是指如果前提为真，结论必然为真，与前提是否实际为真无关。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "重构论证的关键是：",
        "options": [
          "A. 找到隐含前提",
          "B. 忽略细节",
          "C. 改变结论",
          "D. 添加新前提"
        ],
        "answer": "A",
        "knowledgePoint": "重构论证的技巧",
        "analysis": "重构论证需要识别隐含的前提，明确结论，整理推理步骤。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“常见论证形式”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "常见论证形式",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“识别前提与结论”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "识别前提与结论",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“哲学论证结构分析”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 47,
    "title": "概念分析方法",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "概念分析的目的是：",
        "options": [
          "A. 混淆概念",
          "B. 厘清概念的意义",
          "C. 创造新概念",
          "D. 消除概念"
        ],
        "answer": "B",
        "knowledgePoint": "厘清概念的意义",
        "analysis": "概念分析的目的是厘清概念的意义、边界和用法。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "必要条件是：",
        "options": [
          "A. 足够满足的条件",
          "B. 必须满足的条件",
          "C. 可选的条件",
          "D. 无关的条件"
        ],
        "answer": "B",
        "knowledgePoint": "必要条件与充分条件",
        "analysis": "必要条件是定义一个概念必须满足的条件。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "反例测试的作用是：",
        "options": [
          "A. 证明定义正确",
          "B. 检验定义的准确性",
          "C. 创造反例",
          "D. 忽略定义"
        ],
        "answer": "B",
        "knowledgePoint": "反例测试",
        "analysis": "反例测试是检验定义准确性的有效方法——如果一个定义无法解释某个案例，就需要修改。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“概念的边界”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "概念的边界",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“厘清概念的意义”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "厘清概念的意义",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“概念分析方法”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 48,
    "title": "反驳技巧",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "反驳的目的是：",
        "options": [
          "A. 攻击人",
          "B. 指出论证的弱点",
          "C. 同意对方",
          "D. 转移话题"
        ],
        "answer": "B",
        "knowledgePoint": "找到论证的弱点",
        "analysis": "反驳不是攻击人，而是指出论证的弱点。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "归谬法是：",
        "options": [
          "A. 证明自己正确",
          "B. 假设对方观点为真并推导出荒谬结论",
          "C. 同意对方",
          "D. 忽略对方"
        ],
        "answer": "B",
        "knowledgePoint": "归谬法",
        "analysis": "归谬法是一种有力的反驳工具，通过假设对方观点为真并推导出荒谬结论来反驳。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "善意原则要求：",
        "options": [
          "A. 歪曲对方观点",
          "B. 理解对方观点的最佳版本",
          "C. 攻击对方",
          "D. 忽略对方"
        ],
        "answer": "B",
        "knowledgePoint": "区分反驳与驳斥",
        "analysis": "评价论证时要遵循善意原则，理解对方观点的最佳版本。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“善意原则”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "善意原则",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“找到论证的弱点”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "找到论证的弱点",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“反驳技巧”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 49,
    "title": "哲学写作",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "哲学写作的要求是：",
        "options": [
          "A. 模糊晦涩",
          "B. 清晰精确有力",
          "C. 冗长复杂",
          "D. 充满比喻"
        ],
        "answer": "B",
        "knowledgePoint": "清晰、精确、有力",
        "analysis": "哲学写作需要清晰表达观点、精确使用术语、有力论证立场。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "论文结构应该包括：",
        "options": [
          "A. 引言、主体、结论",
          "B. 只有结论",
          "C. 只有引言",
          "D. 没有结构"
        ],
        "answer": "A",
        "knowledgePoint": "论证结构",
        "analysis": "哲学论文应该有引言（说明问题和立场）、主体（论证观点）和结论（总结论证）。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "引用文献的目的是：",
        "options": [
          "A. 凑字数",
          "B. 学术诚信和支持论证",
          "C. 炫耀知识",
          "D. 没有目的"
        ],
        "answer": "B",
        "knowledgePoint": "引用与注释",
        "analysis": "引用文献既是学术诚信的要求，也是为论证提供支持。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“学术写作规范”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "学术写作规范",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“清晰、精确、有力”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "清晰、精确、有力",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“哲学写作”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 50,
    "title": "GCSE综合复习",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "三大伦理框架是：",
        "options": [
          "A. 功利主义、义务论、美德伦理",
          "B. 相对主义、实在论、情感主义",
          "C. 有神论、无神论、不可知论",
          "D. 理性主义、经验主义、怀疑论"
        ],
        "answer": "A",
        "knowledgePoint": "伦理学框架回顾",
        "analysis": "三大伦理框架是功利主义、义务论和美德伦理。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "知识论的核心问题是：",
        "options": [
          "A. 什么是美",
          "B. 什么是知识",
          "C. 什么是正义",
          "D. 什么是存在"
        ],
        "answer": "B",
        "knowledgePoint": "知识论核心问题",
        "analysis": "知识论研究知识的本质、来源和界限。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "政治哲学的关键概念包括：",
        "options": [
          "A. 社会契约、正义、权利",
          "B. 意识、自由意志、同一性",
          "C. 上帝、奇迹、宗教",
          "D. 道德语言、实在论、相对主义"
        ],
        "answer": "A",
        "knowledgePoint": "心灵哲学要点",
        "analysis": "政治哲学关注社会契约、正义理论、权利和权力等概念。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“政治哲学关键概念”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "政治哲学关键概念",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“伦理学框架回顾”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "伦理学框架回顾",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“GCSE综合复习”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 51,
    "title": "盖梯尔问题",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "盖梯尔问题挑战了：",
        "options": [
          "A. 知识的定义",
          "B. 信念的存在",
          "C. 真理的可能性",
          "D. 怀疑论"
        ],
        "answer": "A",
        "knowledgePoint": "盖梯尔问题",
        "analysis": "盖梯尔问题表明，有理由的真信念并不一定等于知识。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "知识需要满足的条件是：",
        "options": [
          "A. 真信念",
          "B. 有理由的真信念",
          "C. 有理由且安全的真信念",
          "D. 无法定义"
        ],
        "answer": "C",
        "knowledgePoint": "对知识定义的修正",
        "analysis": "知识不仅需要有理由的真信念，还需要安全性——如果情况稍有不同，信念仍然为真。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "知识的本质是：",
        "options": [
          "A. 信念状态",
          "B. 与真理的关系",
          "C. 认知成就",
          "D. 以上都是"
        ],
        "answer": "D",
        "knowledgePoint": "知识的本质",
        "analysis": "知识是一种特殊的信念状态，涉及与真理的可靠联系，也是一种认知成就。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“盖梯尔问题”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "盖梯尔问题",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“盖梯尔问题”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "盖梯尔问题",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“盖梯尔问题”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 52,
    "title": "内在主义与外在主义",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "内在主义认为正当性是：",
        "options": [
          "A. 外部的",
          "B. 内省可及的",
          "C. 不可知的",
          "D. 随机的"
        ],
        "answer": "B",
        "knowledgePoint": "内在主义与外在主义",
        "analysis": "内在主义认为，知识所需的正当性是内省可及的——你知道你有理由相信。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "可靠主义是一种：",
        "options": [
          "A. 内在主义",
          "B. 外在主义",
          "C. 怀疑论",
          "D. 相对主义"
        ],
        "answer": "B",
        "knowledgePoint": "可靠性理论",
        "analysis": "可靠主义认为，知识是由可靠的认知过程产生的真信念，这是一种外在主义理论。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "认知责任与可靠性的关系：",
        "options": [
          "A. 对立",
          "B. 互补",
          "C. 无关",
          "D. 等同"
        ],
        "answer": "B",
        "knowledgePoint": "知识的来源",
        "analysis": "内在主义强调认知责任，外在主义强调可靠性，两者可以互补——既要有正当理由，也要有可靠过程。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“认知责任”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "认知责任",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“内在主义与外在主义”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "内在主义与外在主义",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“内在主义与外在主义”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 53,
    "title": "怀疑主义的回应",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "摩尔的常识反驳认为：",
        "options": [
          "A. 我们无法知道任何事情",
          "B. 我们确实知道一些事情",
          "C. 知识是不可能的",
          "D. 怀疑论正确"
        ],
        "answer": "B",
        "knowledgePoint": "怀疑主义的回应",
        "analysis": "摩尔认为，我们确实知道一些事情，比如'我有两只手'，这可以反驳怀疑论。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "语境主义认为知识标准：",
        "options": [
          "A. 固定不变",
          "B. 随语境变化",
          "C. 不存在",
          "D. 由怀疑论决定"
        ],
        "answer": "B",
        "knowledgePoint": "摩尔的常识反驳",
        "analysis": "语境主义认为，知识的标准随语境变化——在日常语境中我们知道很多，在哲学语境中标准更高。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "诺齐克的追踪理论认为：",
        "options": [
          "A. 知识是追踪真理的信念",
          "B. 知识是有理由的真信念",
          "C. 知识不存在",
          "D. 知识是主观的"
        ],
        "answer": "A",
        "knowledgePoint": "语境主义",
        "analysis": "诺齐克认为，知识是追踪真理的信念——如果事情不是这样，你就不会相信它。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“诺齐克的追踪理论”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "诺齐克的追踪理论",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“怀疑主义的回应”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "怀疑主义的回应",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“怀疑主义的回应”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 54,
    "title": "归纳问题",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "休谟问题是关于：",
        "options": [
          "A. 演绎推理",
          "B. 归纳推理",
          "C. 类比推理",
          "D. 因果推理"
        ],
        "answer": "B",
        "knowledgePoint": "归纳问题",
        "analysis": "休谟问题追问归纳推理的理性基础——我们为什么相信未来会像过去一样？"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "归纳推理依赖：",
        "options": [
          "A. 自然齐一性",
          "B. 逻辑必然性",
          "C. 主观信念",
          "D. 上帝存在"
        ],
        "answer": "A",
        "knowledgePoint": "归纳推理的辩护",
        "analysis": "归纳推理依赖自然齐一性原则——自然规律在时间和空间上是一致的。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "科学推理的基础是：",
        "options": [
          "A. 演绎",
          "B. 归纳",
          "C. 类比",
          "D. 直觉"
        ],
        "answer": "B",
        "knowledgePoint": "自然齐一性",
        "analysis": "科学依赖归纳推理，因此如果归纳没有理性基础，科学知识的基础也会受到质疑。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“科学推理的基础”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "科学推理的基础",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“归纳问题”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "归纳问题",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“归纳问题”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 55,
    "title": "科学哲学",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "波普尔的证伪主义认为科学理论应该：",
        "options": [
          "A. 可证实",
          "B. 可证伪",
          "C. 不可检验",
          "D. 永远正确"
        ],
        "answer": "B",
        "knowledgePoint": "什么是好的科学解释",
        "analysis": "波普尔认为，科学理论应该是可证伪的——存在可能的观察会推翻它。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "库恩的范式理论认为科学发展是：",
        "options": [
          "A. 累积的",
          "B. 革命性的",
          "C. 线性的",
          "D. 停滞的"
        ],
        "answer": "B",
        "knowledgePoint": "证伪主义",
        "analysis": "库恩认为，科学发展是范式转换——从一个范式到另一个范式的革命性转变。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "科学实在论与工具主义的争论在于：",
        "options": [
          "A. 科学是否有用",
          "B. 科学理论是否描述真实世界",
          "C. 科学是否进步",
          "D. 科学是否需要实验"
        ],
        "answer": "B",
        "knowledgePoint": "范式与科学革命",
        "analysis": "科学实在论认为科学理论描述真实世界，工具主义认为它们只是预测现象的工具。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“科学实在论 vs 工具主义”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "科学实在论 vs 工具主义",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“什么是好的科学解释”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "什么是好的科学解释",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“科学哲学”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 56,
    "title": "存在的本质",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "本体论研究：",
        "options": [
          "A. 知识的本质",
          "B. 存在的种类",
          "C. 道德的本质",
          "D. 美的本质"
        ],
        "answer": "B",
        "knowledgePoint": "存在的本质",
        "analysis": "本体论研究存在的种类——有哪些东西存在，它们是什么样的。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "为什么有存在而不是虚无？",
        "options": [
          "A. 偶然的",
          "B. 必然的",
          "C. 无法回答",
          "D. 上帝创造"
        ],
        "answer": "C",
        "knowledgePoint": "存在与虚无",
        "analysis": "这是形而上学最根本的问题，目前没有普遍接受的答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "抽象对象是否存在？",
        "options": [
          "A. 存在",
          "B. 不存在",
          "C. 只存在于心灵中",
          "D. 无法确定"
        ],
        "answer": "D",
        "knowledgePoint": "本体论问题",
        "analysis": "数字、共相、命题等抽象对象的存在性是形而上学的重要争论点。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“存在的意义”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "存在的意义",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“存在的本质”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "存在的本质",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“存在的本质”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 57,
    "title": "实体理论",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "实体是：",
        "options": [
          "A. 性质的集合",
          "B. 具有性质但本身不是性质的东西",
          "C. 不存在的",
          "D. 只有心灵"
        ],
        "answer": "B",
        "knowledgePoint": "实体理论",
        "analysis": "传统实体理论认为，实体是具有性质但本身不是性质的东西——是性质的承载者。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "共相问题关注：",
        "options": [
          "A. 个体事物",
          "B. 多个事物共有的性质",
          "C. 特殊事物",
          "D. 不存在的东西"
        ],
        "answer": "B",
        "knowledgePoint": "共相问题",
        "analysis": "共相问题问的是，多个事物共有的性质（如红色）是否独立存在。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "个体性的基础是：",
        "options": [
          "A. 性质",
          "B. 实体",
          "C. 时空位置",
          "D. 无法确定"
        ],
        "answer": "D",
        "knowledgePoint": "个体性",
        "analysis": "什么使一个事物成为它自己，是性质、实体还是其他，这是形而上学的难题。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“实体理论”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "实体理论",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“实体理论”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "实体理论",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“实体理论”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 58,
    "title": "时间与空间",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "绝对时空观认为时空：",
        "options": [
          "A. 依赖物质",
          "B. 独立于物质",
          "C. 不存在",
          "D. 是主观的"
        ],
        "answer": "B",
        "knowledgePoint": "绝对时空 vs 相对时空",
        "analysis": "牛顿认为时空是绝对的——即使没有任何事物，时空依然存在。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "相对时空观认为时空：",
        "options": [
          "A. 独立于物质",
          "B. 依赖物质和能量",
          "C. 是绝对的",
          "D. 不存在"
        ],
        "answer": "B",
        "knowledgePoint": "时间的流逝",
        "analysis": "爱因斯坦认为时空是相对的——时空依赖于物质和能量。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "时间的流逝是：",
        "options": [
          "A. 真实的",
          "B. 幻觉",
          "C. 主观的",
          "D. 无法确定"
        ],
        "answer": "D",
        "knowledgePoint": "空间的本质",
        "analysis": "时间是否真的流逝，还是只是我们的主观感受，这是物理学和哲学的共同问题。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“时空旅行的可能性”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "时空旅行的可能性",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“绝对时空 vs 相对时空”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "绝对时空 vs 相对时空",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“时间与空间”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 59,
    "title": "偶然与必然",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "必然真理是：",
        "options": [
          "A. 在某些世界中为真",
          "B. 在所有可能世界中为真",
          "C. 只在现实世界中为真",
          "D. 永远为假"
        ],
        "answer": "B",
        "knowledgePoint": "必然真理与偶然真理",
        "analysis": "必然真理在所有可能世界中都是真的，比如数学真理。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "可能世界语义学用于理解：",
        "options": [
          "A. 必然性和可能性",
          "B. 时间和空间",
          "C. 因果关系",
          "D. 知识"
        ],
        "answer": "A",
        "knowledgePoint": "可能世界语义学",
        "analysis": "可能世界是理解模态概念（必然性、可能性）的工具。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "宿命论认为：",
        "options": [
          "A. 所有事情都是必然的",
          "B. 所有事情都是偶然的",
          "C. 有些事情是必然的",
          "D. 没有必然的事情"
        ],
        "answer": "A",
        "knowledgePoint": "模态逻辑",
        "analysis": "宿命论认为，所有事情都是必然的——未来已经注定，与自由意志不相容。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“宿命论”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "宿命论",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“必然真理与偶然真理”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "必然真理与偶然真理",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“偶然与必然”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 60,
    "title": "反事实推理",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "反事实条件句是：",
        "options": [
          "A. 关于现实的陈述",
          "B. 关于可能情况的陈述",
          "C. 必然为真的陈述",
          "D. 必然为假的陈述"
        ],
        "answer": "B",
        "knowledgePoint": "反事实推理",
        "analysis": "反事实条件句是'如果A没有发生，B就不会发生'这样的陈述。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "反事实因果理论认为：",
        "options": [
          "A. A导致B如果A不发生B也不发生",
          "B. A导致B如果A发生B也发生",
          "C. 因果关系不存在",
          "D. 因果关系是主观的"
        ],
        "answer": "A",
        "knowledgePoint": "可能世界分析",
        "analysis": "大卫·刘易斯认为，A导致B，如果在最接近的可能世界中A不发生，B也不发生。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "反事实理论的问题是：",
        "options": [
          "A. 过度决定",
          "B. 预设",
          "C. 传递性",
          "D. 以上都是"
        ],
        "answer": "D",
        "knowledgePoint": "反事实依赖",
        "analysis": "反事实因果理论面临过度决定（多个原因导致同一结果）和预设（一个原因预设另一个原因）等问题。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“因果关系的反事实理论”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "因果关系的反事实理论",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“反事实推理”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "反事实推理",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“反事实推理”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 61,
    "title": "自由主义的张力",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "自由与平等的关系是：",
        "options": [
          "A. 完全一致",
          "B. 有时冲突",
          "C. 完全对立",
          "D. 无关"
        ],
        "answer": "B",
        "knowledgePoint": "自由与平等的冲突",
        "analysis": "自由可能导致不平等，平等可能限制自由，两者存在张力。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "古典自由主义强调：",
        "options": [
          "A. 平等优先",
          "B. 自由优先",
          "C. 秩序优先",
          "D. 安全优先"
        ],
        "answer": "B",
        "knowledgePoint": "古典自由主义 vs 社会自由主义",
        "analysis": "古典自由主义强调最小政府、最大自由，认为自由是最重要的价值。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "福利国家的正当性在于：",
        "options": [
          "A. 促进平等",
          "B. 保障自由",
          "C. 两者兼顾",
          "D. 没有正当性"
        ],
        "answer": "C",
        "knowledgePoint": "国家的角色",
        "analysis": "福利国家通过税收提供公共服务，既促进平等，也保障所有人的基本自由。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“福利国家的正当性”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "福利国家的正当性",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“自由与平等的冲突”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "自由与平等的冲突",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“自由主义的张力”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 62,
    "title": "共同体主义",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "共同体主义批评自由主义：",
        "options": [
          "A. 过于强调个人",
          "B. 过于强调国家",
          "C. 过于强调自由",
          "D. 过于强调平等"
        ],
        "answer": "A",
        "knowledgePoint": "对自由主义的批评",
        "analysis": "共同体主义认为，自由主义把个人看作原子化的、脱离社会的存在，忽视了共同体的重要性。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "共同善是：",
        "options": [
          "A. 个人利益的总和",
          "B. 共同体成员共同追求的善",
          "C. 物质财富",
          "D. 权力"
        ],
        "answer": "B",
        "knowledgePoint": "个人与社群的关系",
        "analysis": "共同善是共同体成员共同追求的善，如正义、繁荣、文化传承。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "个人与社群的关系是：",
        "options": [
          "A. 对立",
          "B. 相互构成",
          "C. 个人优先",
          "D. 社群优先"
        ],
        "answer": "B",
        "knowledgePoint": "共同善",
        "analysis": "个人离不开社群，社群也离不开个人——共同体塑造了我们是谁，我们也塑造了共同体。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“文化认同的重要性”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "文化认同的重要性",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“对自由主义的批评”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "对自由主义的批评",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“共同体主义”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 63,
    "title": "女性主义政治哲学",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "女性主义关注：",
        "options": [
          "A. 性别平等",
          "B. 阶级斗争",
          "C. 种族平等",
          "D. 宗教自由"
        ],
        "answer": "A",
        "knowledgePoint": "性别与权力结构",
        "analysis": "女性主义政治哲学关注性别不平等和权力结构，追求性别平等。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "父权制是：",
        "options": [
          "A. 父亲统治",
          "B. 男性主导的权力结构",
          "C. 家庭制度",
          "D. 宗教制度"
        ],
        "answer": "B",
        "knowledgePoint": "父权制",
        "analysis": "父权制是一种权力结构，男性在其中占据主导地位，渗透在社会的各个方面。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "差异女性主义认为：",
        "options": [
          "A. 男女完全相同",
          "B. 男女差异应该被消除",
          "C. 男女差异应该被尊重",
          "D. 女性优于男性"
        ],
        "answer": "C",
        "knowledgePoint": "差异女性主义",
        "analysis": "差异女性主义认为，男女之间存在重要差异，应该被承认和尊重，而不是消除。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“性别平等的哲学基础”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "性别平等的哲学基础",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“性别与权力结构”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "性别与权力结构",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“女性主义政治哲学”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 64,
    "title": "后殖民批判",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "后殖民批判关注：",
        "options": [
          "A. 殖民主义的遗产",
          "B. 经济发展",
          "C. 科技进步",
          "D. 文化传承"
        ],
        "answer": "A",
        "knowledgePoint": "殖民主义的遗产",
        "analysis": "后殖民批判关注殖民主义的遗产和知识的权力，以及文化帝国主义。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "知识与权力的关系是：",
        "options": [
          "A. 无关",
          "B. 交织的",
          "C. 知识决定权力",
          "D. 权力决定知识"
        ],
        "answer": "B",
        "knowledgePoint": "知识的权力",
        "analysis": "福柯认为，知识和权力是交织的——谁拥有知识，谁就拥有权力。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "去殖民化意味着：",
        "options": [
          "A. 政治独立",
          "B. 知识和文化的解放",
          "C. 经济独立",
          "D. 以上都是"
        ],
        "answer": "D",
        "knowledgePoint": "文化帝国主义",
        "analysis": "去殖民化不仅是政治独立，也是知识和文化的解放，需要重新审视被殖民的知识。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“去殖民化的哲学”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "去殖民化的哲学",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“殖民主义的遗产”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "殖民主义的遗产",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“后殖民批判”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 65,
    "title": "全球治理",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "全球治理关注：",
        "options": [
          "A. 国家内部事务",
          "B. 国际事务",
          "C. 个人事务",
          "D. 家庭事务"
        ],
        "answer": "B",
        "knowledgePoint": "主权与人权的冲突",
        "analysis": "全球治理关注如何在主权国家之上建立有效的治理体系，解决全球性问题。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "主权与人权的关系是：",
        "options": [
          "A. 完全一致",
          "B. 有时冲突",
          "C. 完全对立",
          "D. 无关"
        ],
        "answer": "B",
        "knowledgePoint": "国际正义",
        "analysis": "国家主权与普遍人权有时会产生冲突，需要协调两者的关系。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "全球公民身份意味着：",
        "options": [
          "A. 只忠于国家",
          "B. 只忠于世界",
          "C. 既忠于国家也忠于世界",
          "D. 没有忠诚"
        ],
        "answer": "C",
        "knowledgePoint": "全球公民身份",
        "analysis": "全球公民身份认为，我们不仅是某个国家的公民，也是世界的公民，对全人类负有责任。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“魔法世界的全球治理”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "魔法世界的全球治理",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“主权与人权的冲突”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "主权与人权的冲突",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“全球治理”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 66,
    "title": "哲学史脉络",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "哲学史的发展是：",
        "options": [
          "A. 线性进步",
          "B. 对话和回应",
          "C. 断裂的",
          "D. 停滞的"
        ],
        "answer": "B",
        "knowledgePoint": "从苏格拉底到维特根斯坦",
        "analysis": "哲学史不是线性进步，而是不同哲学家之间的对话和回应。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "分析哲学关注：",
        "options": [
          "A. 语言和逻辑",
          "B. 存在和本质",
          "C. 道德和政治",
          "D. 艺术和美"
        ],
        "answer": "A",
        "knowledgePoint": "哲学传统的发展",
        "analysis": "分析哲学强调语言分析和逻辑论证，关注知识、真理、意义等问题。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "哲学问题的延续性在于：",
        "options": [
          "A. 问题相同答案不同",
          "B. 问题不同答案相同",
          "C. 问题和答案都相同",
          "D. 没有延续性"
        ],
        "answer": "A",
        "knowledgePoint": "主要哲学流派",
        "analysis": "有些哲学问题贯穿哲学史，如存在、知识、道德，但不同时代有不同的回答。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“哲学问题的延续与变化”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "哲学问题的延续与变化",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“从苏格拉底到维特根斯坦”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "从苏格拉底到维特根斯坦",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“哲学史脉络”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 67,
    "title": "新兴哲学问题",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "人工智能设想中，一个机器是否具有道德地位最取决于：",
        "options": [
          "A. 外观像人",
          "B. 是否具有意识和感受能力",
          "C. 运行速度",
          "D. 制造价格"
        ],
        "answer": "B",
        "knowledgePoint": "人工智能设想的道德地位",
        "analysis": "沙克博特会要求先界定道德地位：关键不是像不像人，而是是否可能承受伤害或拥有利益。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "气候变化的伦理问题主要涉及：",
        "options": [
          "A. 代际正义",
          "B. 责任分担",
          "C. 全球合作",
          "D. 以上都是"
        ],
        "answer": "D",
        "knowledgePoint": "气候变化的伦理",
        "analysis": "气候变化会影响未来世代，也涉及不同群体和国家之间的责任分担。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "资料隐私的重要性在于：",
        "options": [
          "A. 个人自主",
          "B. 权力平衡",
          "C. 社会信任",
          "D. 以上都是"
        ],
        "answer": "D",
        "knowledgePoint": "资料隐私",
        "analysis": "隐私保护个人自主，平衡个人与权力机构的关系，维护社会信任。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“生物技术的挑战”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "生物技术的挑战",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“人工智能设想的道德地位”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "人工智能设想的道德地位",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“新兴哲学问题”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 68,
    "title": "论文写作",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "优秀哲学论文的标准是：",
        "options": [
          "A. 清晰精确有力",
          "B. 冗长复杂",
          "C. 模糊晦涩",
          "D. 充满比喻"
        ],
        "answer": "A",
        "knowledgePoint": "哲学论证的最高标准",
        "analysis": "优秀哲学论文需要清晰表达观点、精确使用术语、有力论证立场。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "论文的核心是：",
        "options": [
          "A. 文献综述",
          "B. 论证",
          "C. 结论",
          "D. 引言"
        ],
        "answer": "B",
        "knowledgePoint": "论题设计",
        "analysis": "哲学论文的核心是论证——提出观点并为之辩护。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "论证深度意味着：",
        "options": [
          "A. 引用更多文献",
          "B. 考虑反对意见并回应",
          "C. 使用复杂术语",
          "D. 更长的篇幅"
        ],
        "answer": "B",
        "knowledgePoint": "文献综述",
        "analysis": "论证深度在于考虑反对意见，回应反驳，展示论证的复杂性。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“论证深度”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "论证深度",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“哲学论证的最高标准”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "哲学论证的最高标准",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“论文写作”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 69,
    "title": "批判性思维综合",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "批判性思维的核心是：",
        "options": [
          "A. 否定一切",
          "B. 理性分析和判断",
          "C. 盲目相信",
          "D. 主观臆断"
        ],
        "answer": "B",
        "knowledgePoint": "识别逻辑谬误",
        "analysis": "批判性思维帮助我们理性分析信息，做出明智的判断。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "常见的逻辑谬误包括：",
        "options": [
          "A. 诉诸权威",
          "B. 稻草人",
          "C. 人身攻击",
          "D. 以上都是"
        ],
        "answer": "D",
        "knowledgePoint": "评估证据",
        "analysis": "常见的逻辑谬误有诉诸权威、稻草人、人身攻击、滑坡谬误等。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "理性讨论的艺术在于：",
        "options": [
          "A. 说服对方",
          "B. 尊重和倾听",
          "C. 赢得争论",
          "D. 证明自己正确"
        ],
        "answer": "B",
        "knowledgePoint": "构建有力论证",
        "analysis": "理性讨论需要尊重、倾听、开放，即使不同意对方也要认真对待他们的论证。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“理性讨论的艺术”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "理性讨论的艺术",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“识别逻辑谬误”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "识别逻辑谬误",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“批判性思维综合”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  },
  {
    "lesson": 70,
    "title": "A-Level综合模拟",
    "questions": [
      {
        "type": "choice",
        "difficulty": 1,
        "text": "伦理学综合需要：",
        "options": [
          "A. 比较不同框架",
          "B. 只使用一个框架",
          "C. 忽略框架",
          "D. 拒绝所有框架"
        ],
        "answer": "A",
        "knowledgePoint": "伦理学综合题",
        "analysis": "伦理学综合需要比较不同伦理框架在具体案例中的应用。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "认识论综合关注：",
        "options": [
          "A. 知识的定义和来源",
          "B. 道德的本质",
          "C. 存在的意义",
          "D. 政治的正义"
        ],
        "answer": "A",
        "knowledgePoint": "认识论综合题",
        "analysis": "认识论综合关注知识的定义、来源、界限以及怀疑论的挑战。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "哲学综合的关键是：",
        "options": [
          "A. 记忆知识点",
          "B. 整合不同领域",
          "C. 背诵论证",
          "D. 记住哲学家名字"
        ],
        "answer": "B",
        "knowledgePoint": "形而上学综合题",
        "analysis": "哲学综合需要整合不同领域的知识，形成连贯的理解和论证。"
      },
      {
        "type": "choice",
        "difficulty": 2,
        "text": "关于“政治哲学综合题”，最符合沙克博特课堂要求的是：",
        "options": [
          "A. 只背结论",
          "B. 找出前提、推论和反驳",
          "C. 避开材料",
          "D. 用同情代替理解"
        ],
        "answer": "B",
        "knowledgePoint": "政治哲学综合题",
        "analysis": "沙克博特要求学生分析论证结构，而不是背诵标准答案。"
      },
      {
        "type": "choice",
        "difficulty": 3,
        "text": "面对“伦理学综合题”相关案例，第一步应当是：",
        "options": [
          "A. 立即下结论",
          "B. 区分概念并说明理由",
          "C. 只看个人好恶",
          "D. 拒绝比较麻瓜与魔法世界"
        ],
        "answer": "B",
        "knowledgePoint": "伦理学综合题",
        "analysis": "她的课堂强调概念区分和理由，而不是立场先行。"
      },
      {
        "type": "open",
        "difficulty": 3,
        "text": "请围绕“A-Level综合模拟”提出一个清晰立场，并用至少两个理由支持它；同时写出一个可能反驳。",
        "scoringPoints": [
          "能提出清晰立场并界定核心概念",
          "能给出至少两个理由并回应一个反驳"
        ],
        "maxScore": 4
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.subject_civics_questionBank = { questionBank };
  window.civics_questionBank = questionBank;
}

export default questionBank;

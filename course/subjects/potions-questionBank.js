/**
 * potions-questionBank.js
 * 魔药学题库
 * 每课3题，共42课 × 3题 = 126题
 */

export const questionBank = [

  // ════════════════════════════════════════
  // 第1章 魔药基础：坩埚与材料识别
  // ════════════════════════════════════════

  {
    lesson: 1, title: "魔药学导论",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔药学的三重本质不包括：",
        options: ["A. 材料属性", "B. 熬制过程", "C. 魔力注入", "D. 咒语加持"],
        answer: "D",
        knowledgePoint: "魔药学基础概念",
        analysis: "魔药学的三重本质是材料属性、熬制过程、魔力注入。咒语加持不是魔药的本质属性——虽然某些高级魔药可能需要咒语辅助，但基础魔药仅靠材料和熬制就能发挥效果。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "以下哪种不是魔药学的基础原则？",
        options: ["A. 精确测量", "B. 耐心熬制", "C. 直觉判断", "D. 观察变化"],
        answer: "C",
        knowledgePoint: "魔药学基本原则",
        analysis: "魔药学是一门精确的学科，依赖精确测量、耐心熬制和细致观察。直觉判断在魔药学中没有地位——魔药不会因为你的直觉就改变性质。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "关于魔药效力的来源，正确的是：",
        options: ["A. 完全来自材料本身", "B. 完全来自熬制者的魔力", "C. 材料提供载体，魔力提供动力", "D. 完全来自咒语加持"],
        answer: "C",
        knowledgePoint: "魔药效力来源",
        analysis: "魔药的效力来自材料与魔力的结合。材料提供了产生特定效果的物质基础（载体），而熬制过程中注入的魔力提供了激活这些效果的能量（动力）。"
      }
    ]
  },

  {
    lesson: 2, title: "坩埚选择与火焰控制",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "适合基础熬制的坩埚材质是：",
        options: ["A. 金坩埚", "B. 银坩埚", "C. 铜坩埚", "D. 铂金坩埚"],
        answer: "C",
        knowledgePoint: "坩埚材质选择",
        analysis: "铜坩埚适合基础熬制，银坩埚适合高级魔药，金坩埚极其罕见且昂贵。铂金坩埚主要用于特定的炼金术操作，不是常规魔药课使用的容器。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "火焰控制三原则的正确顺序是：",
        options: ["A. 中火预热、文火熬制、小火收尾", "B. 文火预热、中火熬制、小火收尾", "C. 小火预热、中火熬制、文火收尾", "D. 大火预热、中火熬制、小火收尾"],
        answer: "B",
        knowledgePoint: "火焰控制原则",
        analysis: "正确的火焰控制顺序是：文火预热（避免材料突然受热）、中火熬制（保证反应充分进行）、小火收尾（让魔药稳定并浓缩）。温度决定了魔药反应的路径和最终效果。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "坩埚保养的正确方法是：",
        options: ["A. 使用后简单擦拭即可", "B. 使用后彻底清洁，定期魔法抛光", "C. 只需要在学期末清洁一次", "D. 不需要特别保养"],
        answer: "B",
        knowledgePoint: "坩埚保养",
        analysis: "坩埚保养非常重要。每次使用后必须彻底清洁，残留的药渣会影响下次熬制。定期用魔法抛光可以保持坩埚的魔力传导性，确保熬制效果稳定。"
      }
    ]
  },

  {
    lesson: 3, title: "基础材料识别：草本与矿物",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "关于草本材料的处理，正确的是：",
        options: ["A. 所有草本都需要新鲜使用", "B. 所有草本都可以干燥保存", "C. 干荨麻需干燥保存，月光露水需在满月时收集", "D. 草本材料不需要特别处理"],
        answer: "C",
        knowledgePoint: "草本材料处理",
        analysis: "不同草本材料有不同的处理要求。干荨麻需要干燥保存以保留药效，而月光露水必须在满月时收集才能获得最强的魔力。没有统一的处理规则。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "以下哪种材料需要特别注意纯度？",
        options: ["A. 干荨麻", "B. 独角兽角粉", "C. 蛇牙", "D. 豪猪刺"],
        answer: "B",
        knowledgePoint: "矿物材料纯度",
        analysis: "独角兽角粉必须来自纯净的角尖，杂质会严重影响药效。蛇牙和豪猪刺虽然也需要处理，但纯度要求相对较低。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "材料处理方式不包括：",
        options: ["A. 切割", "B. 研磨", "C. 榨汁", "D. 燃烧"],
        answer: "D",
        knowledgePoint: "材料处理方式",
        analysis: "常见的材料处理方式包括切割（如缬草根）、研磨/压碎（如蛇牙）、榨汁（如草蛉虫）。燃烧不是常规的材料处理方式，会破坏材料的有效成分。"
      }
    ]
  },

  {
    lesson: 4, title: "液体材料与溶剂",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "最安全的基础溶剂是：",
        options: ["A. 龙血", "B. 月光露水", "C. 纯净水", "D. 火焰威士忌"],
        answer: "C",
        knowledgePoint: "基础溶剂选择",
        analysis: "纯净水是最安全的基础溶剂，兼容性最强。龙血和月光露水是特殊溶剂，只用于特定配方。火焰威士忌是酒精饮料，不适合作为魔药溶剂。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "火蜥蜴血的主要作用是：",
        options: ["A. 提供颜色", "B. 增强魔力传导", "C. 增加黏稠度", "D. 调味"],
        answer: "B",
        knowledgePoint: "液体材料特性",
        analysis: "火蜥蜴血具有增强魔力传导的特性，常用于需要快速起效的魔药。它不是用来调色或调味的，也不会显著增加黏稠度。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "关于溶剂比例的说法，正确的是：",
        options: ["A. 稍微多一点或少一点没关系", "B. 溶剂比例必须精确控制", "C. 溶剂越多效果越好", "D. 溶剂越少效果越好"],
        answer: "B",
        knowledgePoint: "溶剂比例控制",
        analysis: "溶剂比例必须精确控制。多一滴或少一滴都可能导致完全不同的结果——魔药反应对浓度非常敏感，溶剂比例的微小变化会显著影响最终效果。"
      }
    ]
  },

  {
    lesson: 5, title: "疥疮药水：第一堂实操课",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "疥疮药水的材料不包括：",
        options: ["A. 干荨麻", "B. 蛇牙", "C. 独角兽角粉", "D. 带触角鼻涕虫"],
        answer: "C",
        knowledgePoint: "疥疮药水配方",
        analysis: "疥疮药水的配方是：干荨麻、蛇牙、豪猪刺、带触角鼻涕虫。独角兽角粉是高级魔药的材料，不在基础疥疮药水配方中。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "疥疮药水熬制的正确顺序是：",
        options: ["A. 先加液体材料，再加固体材料", "B. 先加固体材料熬煮，最后加液体材料调节", "C. 所有材料一起加入", "D. 按字母顺序加入"],
        answer: "B",
        knowledgePoint: "熬制顺序",
        analysis: "正确的熬制顺序是先加入固体材料熬煮，让它们充分反应，最后加入液体材料进行调节。液体材料通常比较敏感，过早加入可能会被高温破坏。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "疥疮药水成功的标志是：",
        options: ["A. 保持浑浊的绿色", "B. 变为清澈的蓝绿色", "C. 变成黑色", "D. 完全透明"],
        answer: "B",
        knowledgePoint: "魔药颜色判断",
        analysis: "疥疮药水成功熬制的标志是从浑浊的绿色逐渐变为清澈的蓝绿色。颜色变化是魔药反应程度的指示器——蓝绿色表明材料反应完全，药效达到最佳。"
      }
    ]
  },

  {
    lesson: 6, title: "肿胀药水与缓和药剂",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "肿胀药水的材料不包括：",
        options: ["A. 膨胀苔藓", "B. 火蜥蜴血", "C. 蝙蝠脾脏", "D. 独角兽角粉"],
        answer: "D",
        knowledgePoint: "肿胀药水配方",
        analysis: "肿胀药水的配方是：膨胀苔藓、火蜥蜴血、蝙蝠脾脏。独角兽角粉是高级魔药的材料，不在肿胀药水配方中。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "缓和药剂的主要效果是：",
        options: ["A. 让人兴奋", "B. 助眠、镇静", "C. 让人肿胀", "D. 让人缩小"],
        answer: "B",
        knowledgePoint: "缓和药剂效果",
        analysis: "缓和药剂是基础安眠镇静魔药，主要成分包括罂粟籽、薰衣草、夜影花。它能帮助人放松入睡，缓解焦虑情绪。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "肿胀药水与缓和药剂的区别是：",
        options: ["A. 没有区别", "B. 一个刺激生长，一个抑制活动", "C. 一个让人缩小，一个让人膨胀", "D. 完全相同"],
        answer: "B",
        knowledgePoint: "两种魔药对比",
        analysis: "肿胀药水是刺激生长类魔药，能使身体部位肿胀；缓和药剂是镇静类魔药，能抑制神经活动。它们是完全相反类型的魔药。"
      }
    ]
  },

  {
    lesson: 7, title: "第一阶段综合测验",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔药学的核心原则不包括：",
        options: ["A. 精确", "B. 耐心", "C. 观察", "D. 速度"],
        answer: "D",
        knowledgePoint: "魔药学核心原则",
        analysis: "魔药学的核心原则是精确、耐心、观察。速度不是优点——急于求成往往导致失败。魔药需要时间来完成反应，急躁只会破坏整个过程。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "材料识别的重要性在于：",
        options: ["A. 只是为了考试", "B. 材料错误会导致魔药失效或有毒", "C. 没那么重要", "D. 只是形式上的要求"],
        answer: "B",
        knowledgePoint: "材料识别重要性",
        analysis: "材料识别是魔药学的基础。使用错误的材料不仅会导致魔药失效，还可能产生有毒物质。在实战中，材料识别错误可能是致命的。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "关于魔药熬制，以下说法正确的是：",
        options: ["A. 只要配方正确就能成功", "B. 熬制者的情绪不会影响结果", "C. 魔药不会因为你是某个学院就变得宽容", "D. 失败了可以随便找借口"],
        answer: "C",
        knowledgePoint: "魔药熬制态度",
        analysis: "魔药是客观的——不会因为你的学院、血统或借口就改变性质。配方正确只是基础，熬制技巧、专注度和态度同样重要。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第2章 中级魔药：变形与治疗
  // ════════════════════════════════════════

  {
    lesson: 8, title: "缩身药水与变形魔药原理",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "缩身药水的材料不包括：",
        options: ["A. 雏菊根", "B. 缩皱无花果", "C. 毛毛虫", "D. 凤凰泪"],
        answer: "D",
        knowledgePoint: "缩身药水配方",
        analysis: "缩身药水的配方包括雏菊根、缩皱无花果、毛毛虫、蜘蛛毒液。凤凰泪是传说中的治愈材料，不属于缩身药水配方。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "缩身药水的变形机制是：",
        options: ["A. 通过咒语直接改变形态", "B. 通过魔力改变细胞的生长抑制因子", "C. 只是视觉上的变化", "D. 永久性改变"],
        answer: "B",
        knowledgePoint: "变形魔药机制",
        analysis: "缩身药水通过魔力改变目标细胞的生长抑制因子，使其暂时缩小。这不是永久性的改变，也不是单纯的视觉效果。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "变形魔药与变形术的本质区别是：",
        options: ["A. 没有区别", "B. 变形魔药改变物质形态，变形术改变生物结构", "C. 变形术改变物质形态，变形魔药改变生物结构", "D. 只是名称不同"],
        answer: "B",
        knowledgePoint: "变形魔药与变形术区别",
        analysis: "变形魔药通过化学-魔法反应改变物质的外在形态，而变形术直接改变生物的内在结构。前者是暂时的、表面的变化，后者是更深层次的转变。"
      }
    ]
  },

  {
    lesson: 9, title: "提神药剂：治疗魔药基础",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "提神药剂的材料不包括：",
        options: ["A. 薄荷芽", "B. 甘菊", "C. 日光花瓣", "D. 月长石粉"],
        answer: "D",
        knowledgePoint: "提神药剂配方",
        analysis: "提神药剂的配方是薄荷芽、甘菊、日光花瓣。月长石粉是吐真剂的材料，不属于提神药剂。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "提神药剂的熬制温度应该是：",
        options: ["A. 高温快速熬制", "B. 低温慢熬", "C. 先高温后低温", "D. 随意温度"],
        answer: "B",
        knowledgePoint: "提神药剂熬制温度",
        analysis: "提神药剂需要低温慢熬，这样可以保留材料的有效成分。高温会破坏薄荷芽和甘菊中的挥发性物质，降低药效。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "关于提神药剂的时效性，正确的是：",
        options: ["A. 可以永久保存", "B. 新鲜熬制的效力最强，存放超过一周效力下降", "C. 存放越久效力越强", "D. 时效性与存放方式无关"],
        answer: "B",
        knowledgePoint: "魔药时效性",
        analysis: "大多数魔药都有保质期。提神药剂新鲜熬制时效力最强，存放超过一周后，挥发性成分会逐渐流失，效力下降。"
      }
    ]
  },

  {
    lesson: 10, title: "复方汤剂：身份转换的奥秘",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "复方汤剂的熬制时间是：",
        options: ["A. 1小时", "B. 1天", "C. 21天", "D. 1个月"],
        answer: "C",
        knowledgePoint: "复方汤剂熬制时间",
        analysis: "复方汤剂是最复杂的变形魔药之一，需要整整21天熬制。这个过程不能加速，每一步都需要精确控制。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "复方汤剂中提供身份模板的材料是：",
        options: ["A. 流液草", "B. 草蛉虫", "C. 目标生物毛发", "D. 蚂蟥"],
        answer: "C",
        knowledgePoint: "复方汤剂材料作用",
        analysis: "复方汤剂中，流液草提供形态转换的基础，而目标生物毛发提供了身份模板——没有毛发，魔药无法知道要转换成谁。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "复方汤剂的标准时效是：",
        options: ["A. 30分钟", "B. 1小时", "C. 3小时", "D. 无限期"],
        answer: "B",
        knowledgePoint: "复方汤剂时效",
        analysis: "复方汤剂的标准时效是1小时。高级配方可以通过优化材料比例和熬制过程延长至12小时，但超过这个时间会变得不稳定。"
      }
    ]
  },

  {
    lesson: 11, title: "魔药稳定性与保存",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "影响魔药稳定性的因素不包括：",
        options: ["A. 温度", "B. 光照", "C. 容器材质", "D. 熬制者的心情"],
        answer: "D",
        knowledgePoint: "魔药稳定性因素",
        analysis: "影响魔药稳定性的因素包括温度（高温加速变质）、光照（强光破坏成分）、容器材质（某些材料与容器发生反应）。熬制者的心情在熬制过程中可能有影响，但一旦熬制完成，心情就不再影响稳定性。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "魔药的正确保存方法是：",
        options: ["A. 敞口放置在阳光下", "B. 避光密封保存", "C. 随意放在任何地方", "D. 加热保存"],
        answer: "B",
        knowledgePoint: "魔药保存方法",
        analysis: "魔药应该避光密封保存。阳光会破坏许多魔药成分，敞口会导致挥发和污染。加热会加速变质，只有特殊魔药才需要冷藏。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "魔药变质的迹象不包括：",
        options: ["A. 颜色变化", "B. 异味", "C. 气泡异常", "D. 重量增加"],
        answer: "D",
        knowledgePoint: "魔药变质识别",
        analysis: "魔药变质的常见迹象包括颜色变化（如从蓝色变成黑色）、异味（如硫磺味或腐臭味）、气泡异常（无原因的剧烈冒泡）。重量增加不是变质的典型迹象。"
      }
    ]
  },

  {
    lesson: 12, title: "魔药与草药学的交叉",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔药学与草药学的关系是：",
        options: ["A. 完全独立", "B. 草药学提供原材料，魔药学将其转化为药剂", "C. 魔药学提供原材料，草药学将其转化为药剂", "D. 两者没有关系"],
        answer: "B",
        knowledgePoint: "学科交叉关系",
        analysis: "草药学研究魔法植物的生长、采集和基本特性，提供魔药学所需的原材料。魔药学则研究如何将这些原材料通过熬制转化为具有特定效果的功能性药剂。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "新鲜材料与干燥材料的效力差异是：",
        options: ["A. 没有差异", "B. 新鲜材料效力更强", "C. 干燥材料效力更强", "D. 取决于材料种类"],
        answer: "D",
        knowledgePoint: "材料新鲜度影响",
        analysis: "新鲜材料与干燥材料的效力差异取决于材料种类。例如，新鲜曼德拉草比干燥的效力强3倍，但干荨麻经过干燥后药效更稳定。没有统一的规律。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "草药采集的最佳时机是：",
        options: ["A. 中午阳光最强时", "B. 月光下", "C. 清晨露水多时", "D. 任何时间都一样"],
        answer: "B",
        knowledgePoint: "草药采集时机",
        analysis: "许多魔法草药在月光下采集时魔力最强。月光的魔力会渗透到植物中，增强其药效。这是草药学中的基本常识。"
      }
    ]
  },

  {
    lesson: 13, title: "第二阶段综合测验",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "中级魔药的核心是：",
        options: ["A. 记住更多配方", "B. 理解材料间的相互作用", "C. 购买更贵的材料", "D. 使用更漂亮的坩埚"],
        answer: "B",
        knowledgePoint: "中级魔药核心",
        analysis: "中级魔药不再只是简单地按照配方熬制，而是需要理解材料之间的相互作用——为什么某些材料必须一起熬制？为什么这个顺序很重要？"
      },
      {
        type: "choice", difficulty: "medium",
        text: "复方汤剂的复杂性在于：",
        options: ["A. 需要很多材料", "B. 需要极高的精确性和耐心", "C. 需要特殊的坩埚", "D. 需要咒语加持"],
        answer: "B",
        knowledgePoint: "复方汤剂难点",
        analysis: "复方汤剂的复杂性不在于材料数量，而在于极高的精确性要求（每一步都不能出错）和漫长的熬制时间（需要21天的耐心）。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "关于魔药效力的决定因素，正确的是：",
        options: ["A. 只取决于配方", "B. 只取决于材料质量", "C. 配方、材料质量、熬制者专注度共同决定", "D. 完全取决于运气"],
        answer: "C",
        knowledgePoint: "魔药效力决定因素",
        analysis: "魔药的效力由多个因素共同决定：配方提供了基础，材料质量保证了潜力，而熬制者的专注度决定了最终效果能否达到预期。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第3章 高级魔药：情绪与心智
  // ════════════════════════════════════════

  {
    lesson: 13, title: "欢欣剂：情绪调节魔药",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "欢欣剂的效果是：",
        options: ["A. 让人悲伤", "B. 引发极度愉悦感", "C. 让人愤怒", "D. 让人困倦"],
        answer: "B",
        knowledgePoint: "欢欣剂效果",
        analysis: "欢欣剂是一种情绪调节魔药，能引发极度的愉悦感和幸福感。它不是用来治疗悲伤或愤怒的，而是直接激发积极情绪。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "欢欣剂的材料包括：",
        options: ["A. 雪滴花", "B. 乌头", "C. 狼毒草", "D. 粪石"],
        answer: "A",
        knowledgePoint: "欢欣剂配方",
        analysis: "欢欣剂的材料包括雪滴花（提供快乐因子）、薄荷（增强效果）、阳光花蜜（提升愉悦感）。乌头是镇定剂的材料，狼毒草用于狼毒药剂，粪石用于通用解毒剂。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "欢欣剂过量的副作用是：",
        options: ["A. 嗜睡", "B. 失控的狂欢状态", "C. 失忆", "D. 虚弱"],
        answer: "B",
        knowledgePoint: "欢欣剂副作用",
        analysis: "欢欣剂过量会导致失控的狂欢状态——使用者会陷入无节制的欢乐中，无法控制自己的行为，甚至可能做出危险的决定。"
      }
    ]
  },

  {
    lesson: 15, title: "镇定剂：平复焦虑的艺术",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "镇定剂的主要用途是：",
        options: ["A. 增强体力", "B. 平复焦虑、缓解紧张", "C. 提高智力", "D. 增强视力"],
        answer: "B",
        knowledgePoint: "镇定剂用途",
        analysis: "镇定剂是一种高级镇静魔药，主要用于平复焦虑、缓解紧张情绪。它是O.W.L.备考学生的常备药，帮助他们在考试中保持冷静。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "镇定剂中需要特别处理的危险材料是：",
        options: ["A. 薄荷", "B. 乌头", "C. 水仙根", "D. 蜂蜜"],
        answer: "B",
        knowledgePoint: "镇定剂危险材料",
        analysis: "乌头是一种有毒植物，必须彻底干燥处理后才能使用。如果处理不当，会导致严重中毒。这是镇定剂熬制中最需要注意的环节。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "镇定剂的作用特点是：",
        options: ["A. 只作用于身体", "B. 只作用于心智", "C. 既作用于身体也作用于心智", "D. 只作用于记忆"],
        answer: "C",
        knowledgePoint: "镇定剂作用方式",
        analysis: "镇定剂不仅通过化学作用放松身体，还通过魔力影响使用者的心智，帮助他们从心理上放松。这种身心双重作用是高级情绪魔药的特点。"
      }
    ]
  },

  {
    lesson: 16, title: "遗忘药水：记忆的迷雾",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "遗忘药水的效果是：",
        options: ["A. 增强记忆", "B. 选择性消除记忆", "C. 增强视力", "D. 改变外貌"],
        answer: "B",
        knowledgePoint: "遗忘药水效果",
        analysis: "遗忘药水能选择性地消除使用者的记忆。它不是增强记忆，也不是改变外貌，而是让特定的记忆从意识中消失。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "遗忘药水中带有遗忘魔力的材料是：",
        options: ["A. 睡莲花粉", "B. 苦艾草", "C. 雾隐花", "D. 月光露水"],
        answer: "C",
        knowledgePoint: "遗忘药水材料",
        analysis: "雾隐花本身就带有遗忘的魔力，是遗忘药水的核心成分。睡莲花粉和苦艾草提供辅助效果，但雾隐花是产生遗忘效果的关键。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "关于遗忘药水的伦理考量，正确的是：",
        options: ["A. 可以随意使用", "B. 未经同意使用是严重侵犯", "C. 只能用于敌人", "D. 没有伦理问题"],
        answer: "B",
        knowledgePoint: "遗忘药水伦理",
        analysis: "遗忘药水是魔法世界最具争议的魔药之一。未经同意使用遗忘药水消除他人记忆是严重的侵犯，违反了基本的伦理原则。"
      }
    ]
  },

  {
    lesson: 16, title: "吐真剂：真相的力量",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "吐真剂的效果是：",
        options: ["A. 让人说谎", "B. 强制使用者说真话", "C. 让人失忆", "D. 增强体力"],
        answer: "B",
        knowledgePoint: "吐真剂效果",
        analysis: "吐真剂能强制使用者说出真相。在药效期间，使用者无法说谎，会不由自主地回答所有问题。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "吐真剂的制作要求是：",
        options: ["A. 月长石粉必须在新月时研磨", "B. 可以在任何时间制作", "C. 必须在满月时制作", "D. 需要火焰熊熊咒加持"],
        answer: "A",
        knowledgePoint: "吐真剂制作要求",
        analysis: "吐真剂的制作难度极高，其中月长石粉必须在新月时研磨才能获得正确的魔力属性。这是制作成功的关键步骤。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "吐真剂的使用限制是：",
        options: ["A. 可以用于审判", "B. 只能作为调查辅助工具", "C. 可以随意使用", "D. 没有限制"],
        answer: "B",
        knowledgePoint: "吐真剂使用限制",
        analysis: "吐真剂受魔法部严格管制，不能用于正式审判，只能作为调查辅助工具。这是因为强制获取的证词在法律上被认为是不公正的。"
      }
    ]
  },

  {
    lesson: 17, title: "魔药与心理学",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔药在心理学中的应用不包括：",
        options: ["A. 影响情绪", "B. 改变记忆", "C. 增强认知", "D. 改变身高"],
        answer: "D",
        knowledgePoint: "魔药与心理学交叉",
        analysis: "魔药可以影响情绪（如欢欣剂）、改变记忆（如遗忘药水）、增强认知（某些益智魔药）。改变身高属于变形魔药的范畴，不属于心理学应用。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "情绪魔药的双刃剑效应指的是：",
        options: ["A. 既好看又好用", "B. 既能治疗也能操纵", "C. 既便宜又有效", "D. 既能喝也能外用"],
        answer: "B",
        knowledgePoint: "情绪魔药双刃剑效应",
        analysis: "情绪魔药是一把双刃剑：它可以用于治疗心理疾病（如用镇定剂治疗焦虑），但也可以被用来操纵他人的情绪和行为。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "魔药使用的伦理边界是：",
        options: ["A. 只要有效就可以使用", "B. 必须尊重个体意志", "C. 只需要考虑效果", "D. 没有边界"],
        answer: "B",
        knowledgePoint: "魔药伦理边界",
        analysis: "魔药使用的伦理边界是必须尊重个体意志。任何影响他人思想、情绪或记忆的魔药，都必须在对方知情并同意的情况下使用。"
      }
    ]
  },

  {
    lesson: 18, title: "第三阶段综合测验",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "高级魔药不仅需要技术，更需要：",
        options: ["A. 昂贵的材料", "B. 伦理意识", "C. 漂亮的坩埚", "D. 快速的速度"],
        answer: "B",
        knowledgePoint: "高级魔药要求",
        analysis: "高级魔药涉及情绪、记忆等敏感领域，不仅需要精湛的技术，更需要强烈的伦理意识。没有伦理意识的魔药大师可能会滥用自己的能力。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "情绪魔药的风险在于：",
        options: ["A. 材料昂贵", "B. 熬制困难", "C. 滥用的可能性", "D. 效果不明显"],
        answer: "C",
        knowledgePoint: "情绪魔药风险",
        analysis: "情绪魔药的最大风险不在于材料或熬制难度，而在于滥用的可能性。这些魔药可以轻易地操纵他人的情绪和行为，如果落入坏人手中会造成严重后果。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "作为魔药大师，最重要的品质是：",
        options: ["A. 记住最多配方", "B. 熬制速度最快", "C. 既会熬制也懂得何时不使用", "D. 使用最稀有的材料"],
        answer: "C",
        knowledgePoint: "魔药大师品质",
        analysis: "真正的魔药大师不仅技术精湛，更懂得伦理边界——知道什么魔药应该制作，什么魔药不应该制作。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第4章 O.W.L.进阶：魔药理论与实践
  // ════════════════════════════════════════

  {
    lesson: 20, title: "魔药理论基础：魔力-物质相互作用",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔药的本质是：",
        options: ["A. 纯粹的化学物质", "B. 魔力与物质的结合", "C. 纯粹的魔力", "D. 咒语的产物"],
        answer: "B",
        knowledgePoint: "魔药本质",
        analysis: "魔药的本质是魔力与物质的结合。材料提供了产生特定效果的载体，而魔力提供了激活这些效果的动力。两者缺一不可。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "魔力注入的时机：",
        options: ["A. 只能在开始时注入", "B. 只能在结束时注入", "C. 不同阶段注入会产生不同效果", "D. 不需要注入魔力"],
        answer: "C",
        knowledgePoint: "魔力注入时机",
        analysis: "魔力注入的时机非常关键。在不同阶段注入魔力会引导魔药反应走向不同的路径，产生不同的最终效果。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "魔药效力的量化指标不包括：",
        options: ["A. 标准剂量", "B. 浓度", "C. 颜色", "D. 效力持续时间"],
        answer: "C",
        knowledgePoint: "魔药效力量化",
        analysis: "魔药效力的量化指标包括标准剂量（使用多少才能达到效果）、浓度（单位体积的药效强度）、效力持续时间（效果能维持多久）。颜色是反应状态的指示器，但不是量化指标。"
      }
    ]
  },

  {
    lesson: 21, title: "高级熬制技巧：温度与时间控制",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "温度曲线的正确阶段是：",
        options: ["A. 直接高温熬制", "B. 预热、升温、恒温、降温", "C. 一直用文火", "D. 随意调整温度"],
        answer: "B",
        knowledgePoint: "温度曲线",
        analysis: "正确的温度曲线包括四个阶段：预热（文火，避免材料突然受热）、升温（中火，启动反应）、恒温（保持反应稳定进行）、降温（小火，让魔药稳定）。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "搅拌方向的意义：",
        options: ["A. 没有意义", "B. 顺时针溶解、逆时针混合", "C. 逆时针溶解、顺时针混合", "D. 只能顺时针"],
        answer: "B",
        knowledgePoint: "搅拌技巧",
        analysis: "搅拌方向有特定意义：顺时针搅拌有助于材料溶解，逆时针搅拌有助于不同材料充分混合。特定的搅拌次数也可能影响最终效果。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "关于熬制时间的说法，正确的是：",
        options: ["A. 越快越好", "B. 有些魔药需要精确到秒，有些需要长时间慢熬", "C. 所有魔药都需要相同时间", "D. 时间不重要"],
        answer: "B",
        knowledgePoint: "熬制时间控制",
        analysis: "熬制时间因魔药而异。有些魔药（如瞬间生效的药剂）需要精确到秒的控制，而有些魔药（如复方汤剂）需要长达21天的慢熬。"
      }
    ]
  },

  {
    lesson: 21, title: "复方汤剂进阶：多形态转换",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "复方汤剂的进阶应用是：",
        options: ["A. 单次转换一个身份", "B. 连续转换多个身份", "C. 只能转换为动物", "D. 永久性转换"],
        answer: "B",
        knowledgePoint: "复方汤剂进阶应用",
        analysis: "复方汤剂的进阶应用是连续转换多个身份——在药效持续期间，可以通过服用不同人的毛发来多次转换身份。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "材料兼容性的问题：",
        options: ["A. 所有物种的毛发都兼容", "B. 不同物种的毛发可能不兼容", "C. 只有人类毛发有效", "D. 毛发没有要求"],
        answer: "B",
        knowledgePoint: "复方汤剂材料兼容性",
        analysis: "不同物种的毛发可能不兼容。虽然理论上可以转换为任何生物，但跨物种转换的成功率较低，且可能产生不可预测的副作用。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "长时间使用复方汤剂的风险是：",
        options: ["A. 没有风险", "B. 精神影响和身份混淆", "C. 体力增强", "D. 智力提升"],
        answer: "B",
        knowledgePoint: "复方汤剂长期使用风险",
        analysis: "长时间使用复方汤剂会产生精神影响，使用者可能会混淆自己的真实身份和转换后的身份，甚至出现人格分裂的迹象。"
      }
    ]
  },

  {
    lesson: 22, title: "复方汤剂进阶：多形态转换",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "复方汤剂的进阶应用是：",
        options: ["A. 单次转换一个身份", "B. 连续转换多个身份", "C. 只能转换为动物", "D. 永久性转换"],
        answer: "B",
        knowledgePoint: "复方汤剂进阶应用",
        analysis: "复方汤剂的进阶应用是连续转换多个身份——在药效持续期间，可以通过服用不同人的毛发来多次转换身份。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "材料兼容性的问题：",
        options: ["A. 所有物种的毛发都兼容", "B. 不同物种的毛发可能不兼容", "C. 只有人类毛发有效", "D. 毛发没有要求"],
        answer: "B",
        knowledgePoint: "复方汤剂材料兼容性",
        analysis: "不同物种的毛发可能不兼容。虽然理论上可以转换为任何生物，但跨物种转换的成功率较低，且可能产生不可预测的副作用。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "长时间使用复方汤剂的风险是：",
        options: ["A. 没有风险", "B. 精神影响和身份混淆", "C. 体力增强", "D. 智力提升"],
        answer: "B",
        knowledgePoint: "复方汤剂长期使用风险",
        analysis: "长时间使用复方汤剂会产生精神影响，使用者可能会混淆自己的真实身份和转换后的身份，甚至出现人格分裂的迹象。"
      }
    ]
  },

  {
    lesson: 23, title: "狼毒药剂：治愈狼人",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "狼毒药剂的发明者是：",
        options: ["A. 斯拉格霍恩教授", "B. 斯内普教授", "C. 麦格教授", "D. 邓布利多校长"],
        answer: "B",
        knowledgePoint: "狼毒药剂发明者",
        analysis: "狼毒药剂是西弗勒斯·斯内普教授的杰作。他为卢平教授特制了这种药剂，使其在满月时能够保持理智，避免伤害他人。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "狼毒药剂的效果是：",
        options: ["A. 治愈狼人诅咒", "B. 让狼人在满月时保持理智", "C. 永久消除狼人特征", "D. 增强狼人力量"],
        answer: "B",
        knowledgePoint: "狼毒药剂效果",
        analysis: "狼毒药剂不能治愈狼人诅咒，也不能永久消除狼人特征。它的作用是让狼人在满月变形时保持理智，不伤害自己或他人。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "狼毒药剂的稀有材料是：",
        options: ["A. 银粉", "B. 月光露水", "C. 乌头", "D. 以上都是"],
        answer: "D",
        knowledgePoint: "狼毒药剂材料",
        analysis: "狼毒药剂需要多种稀有材料：银粉必须是纯银，月光露水需在狼人出没的夜晚收集，乌头需要特别处理以去除毒性。"
      }
    ]
  },

  {
    lesson: 23, title: "魔药事故处理",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "常见的魔药事故不包括：",
        options: ["A. 坩埚爆炸", "B. 药水飞溅", "C. 材料中毒", "D. 魔药变色"],
        answer: "D",
        knowledgePoint: "魔药事故类型",
        analysis: "常见的魔药事故包括坩埚爆炸（温度过高或材料冲突）、药水飞溅（操作不当）、材料中毒（处理有毒材料时防护不足）。魔药变色是正常的反应过程，不一定是事故。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "魔药事故的紧急处理方法不包括：",
        options: ["A. 白鲜香精止血", "B. 解毒剂备用", "C. 火焰冻结咒控制火势", "D. 继续添加材料"],
        answer: "D",
        knowledgePoint: "魔药事故处理",
        analysis: "魔药事故的紧急处理方法包括：白鲜香精止血（处理烫伤和割伤）、解毒剂备用（应对中毒）、火焰冻结咒控制火势（应对火灾）。继续添加材料只会加剧事故。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "魔药事故的预防措施不包括：",
        options: ["A. 穿戴防护手套", "B. 保持通风", "C. 严格遵守步骤", "D. 快速操作"],
        answer: "D",
        knowledgePoint: "魔药事故预防",
        analysis: "魔药事故的预防措施包括：穿戴防护手套（防止接触有毒材料）、保持通风（避免有害气体积聚）、严格遵守步骤（避免操作错误）。快速操作往往导致失误。"
      }
    ]
  },

  {
    lesson: 24, title: "O.W.L.综合模拟测验",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "O.W.L.魔药学考试包括：",
        options: ["A. 只有笔试", "B. 只有实操", "C. 笔试+实操", "D. 只有论文"],
        answer: "C",
        knowledgePoint: "O.W.L.考试形式",
        analysis: "O.W.L.魔药学考试包括两部分：笔试（理论知识和配方分析）和实操（现场熬制指定魔药）。两者都必须通过才能获得合格成绩。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "O.W.L.实操考试的评分标准不包括：",
        options: ["A. 配方准确性", "B. 熬制技巧", "C. 成品品质", "D. 坩埚的美观度"],
        answer: "D",
        knowledgePoint: "O.W.L.评分标准",
        analysis: "O.W.L.实操考试的评分标准包括：配方准确性（材料和剂量是否正确）、熬制技巧（温度控制、搅拌等）、成品品质（颜色、纯度、药效）。坩埚的美观度不是评分标准。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "斯内普教授的判分标准是：",
        options: ["A. 及格即可", "B. 完美是最低要求", "C. 看心情", "D. 只看成品"],
        answer: "B",
        knowledgePoint: "斯内普教授判分标准",
        analysis: "斯内普教授对魔药的要求非常严格，完美是最低要求。任何微小的瑕疵都会导致扣分，只有完全符合标准的魔药才能获得最高分。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第5章 N.E.W.T.级：生死与命运
  // ════════════════════════════════════════

  {
    lesson: 25, title: "生死水：假死与重生",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "生死水的效果是：",
        options: ["A. 真正的死亡", "B. 强效昏睡，接近假死", "C. 让人长生不老", "D. 起死回生"],
        answer: "B",
        knowledgePoint: "生死水效果",
        analysis: "生死水是最强效的昏睡剂，能让人陷入深度昏睡，接近假死状态。它不能让人长生不老，也不能起死回生。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "混血王子改良生死水的技巧是：",
        options: ["A. 添加更多材料", "B. 改变熬制顺序", "C. 瞌睡豆的特殊处理", "D. 使用金坩埚"],
        answer: "C",
        knowledgePoint: "生死水改良",
        analysis: "混血王子（斯内普）通过对瞌睡豆的特殊处理大幅降低了生死水的熬制难度，同时保持了药效。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "生死水的应用场景不包括：",
        options: ["A. 医疗麻醉", "B. 深度冥想", "C. 危险环境伪装", "D. 日常睡眠"],
        answer: "D",
        knowledgePoint: "生死水应用",
        analysis: "生死水的应用场景包括：医疗麻醉（大型手术）、深度冥想（魔法研究）、危险环境伪装（假装死亡躲避敌人）。它药效太强，不适合日常睡眠使用。"
      }
    ]
  },

  {
    lesson: 26, title: "福灵剂：幸运的代价",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "福灵剂的效果是：",
        options: ["A. 带来持续的好运", "B. 让人变得聪明", "C. 增强体力", "D. 改变外貌"],
        answer: "A",
        knowledgePoint: "福灵剂效果",
        analysis: "福灵剂是最难熬制的魔药之一，能带来持续的好运。在药效期间，使用者做任何事情都会特别顺利。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "福灵剂的稀有材料是：",
        options: ["A. 龙血", "B. 幸运四叶草", "C. 金盏花", "D. 星辰花蜜"],
        answer: "D",
        knowledgePoint: "福灵剂稀有材料",
        analysis: "星辰花蜜是福灵剂最稀有的材料，只在特定时间和地点出现。它的稀有性是福灵剂难以制作的主要原因之一。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "福灵剂的副作用是：",
        options: ["A. 嗜睡", "B. 狂妄自大和上瘾", "C. 失忆", "D. 虚弱"],
        answer: "B",
        knowledgePoint: "福灵剂副作用",
        analysis: "福灵剂的副作用包括：过量使用会导致狂妄自大（使用者会认为自己无所不能），长期使用会产生依赖性（上瘾）。"
      }
    ]
  },

  {
    lesson: 27, title: "迷情剂：爱情的幻觉",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "迷情剂的效果是：",
        options: ["A. 产生真爱", "B. 产生强烈迷恋", "C. 让人变得美丽", "D. 增强智慧"],
        answer: "B",
        knowledgePoint: "迷情剂效果",
        analysis: "迷情剂是最强的爱情魔药，但它产生的是强烈的迷恋而非真爱。迷恋是单方面的、强迫性的，而真爱需要双方的自愿和理解。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "迷情剂气味的特点是：",
        options: ["A. 所有人闻到的都一样", "B. 每个人闻到的都是自己最渴望的味道", "C. 很难闻", "D. 没有气味"],
        answer: "B",
        knowledgePoint: "迷情剂气味",
        analysis: "迷情剂的气味具有主观性——每个人闻到的都是自己最渴望的味道。这是因为迷情剂会读取使用者的潜意识，展现他们内心深处的欲望。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "迷情剂的伦理禁忌是：",
        options: ["A. 可以随意使用", "B. 使用迷情剂操纵他人是不可饶恕的罪行", "C. 只能用于敌人", "D. 没有禁忌"],
        answer: "B",
        knowledgePoint: "迷情剂伦理",
        analysis: "使用迷情剂操纵他人的感情是严重违反伦理的行为，在魔法世界中被视为不可饶恕的罪行。它剥夺了他人的自由意志。"
      }
    ]
  },

  {
    lesson: 28, title: "通用解毒剂：万灵药的梦想",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "通用解毒剂的效果是：",
        options: ["A. 解所有毒药", "B. 解大多数常见毒药", "C. 只能解一种毒药", "D. 没有效果"],
        answer: "B",
        knowledgePoint: "通用解毒剂效果",
        analysis: "通用解毒剂能解大多数常见毒药和咬伤，但不是万能的。它对黑魔法毒药和极端毒素无效。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "通用解毒剂中的万能解毒成分是：",
        options: ["A. 粪石", "B. 薄荷", "C. 水仙根", "D. 蒲公英"],
        answer: "A",
        knowledgePoint: "通用解毒剂核心成分",
        analysis: "粪石（羊胃结石）是通用解毒剂的核心成分，具有神奇的万能解毒效果。这是天然形成的神奇材料，极其珍贵。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "通用解毒剂的局限性是：",
        options: ["A. 没有局限性", "B. 对黑魔法毒药和极端毒素无效", "C. 只能口服", "D. 价格太便宜"],
        answer: "B",
        knowledgePoint: "通用解毒剂局限性",
        analysis: "通用解毒剂虽然强大，但有局限性：它对黑魔法毒药（如伏地魔的魂器毒药）和极端毒素无效。遇到这些情况，需要更特殊的解毒方法（如凤凰泪）。"
      }
    ]
  },

  {
    lesson: 29, title: "魔药与黑魔法",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "黑魔法魔药的特征不包括：",
        options: ["A. 使用禁忌材料", "B. 产生有害效果", "C. 违背伦理", "D. 颜色鲜艳"],
        answer: "D",
        knowledgePoint: "黑魔法魔药特征",
        analysis: "黑魔法魔药的特征包括：使用禁忌材料（如暗影花、诅咒苔藓）、产生有害效果（如毒药、诅咒）、违背伦理（伤害他人）。颜色鲜艳不是黑魔法魔药的特征。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "识别黑魔法魔药的方法不包括：",
        options: ["A. 颜色异常", "B. 气味刺鼻", "C. 魔力波动扭曲", "D. 价格昂贵"],
        answer: "D",
        knowledgePoint: "黑魔法魔药识别",
        analysis: "识别黑魔法魔药的方法包括：颜色异常（如黑紫色、暗血红）、气味刺鼻（如腐臭味、硫磺味）、魔力波动扭曲（用魔法探测会感觉到异常）。价格昂贵不是识别标准。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "应对黑魔法魔药的防护措施不包括：",
        options: ["A. 识别能力", "B. 解毒准备", "C. 魔法结界", "D. 主动使用"],
        answer: "D",
        knowledgePoint: "黑魔法魔药防护",
        analysis: "应对黑魔法魔药的防护措施包括：识别能力（能分辨危险魔药）、解毒准备（随身携带解毒剂）、魔法结界（防护自身免受影响）。主动使用黑魔法魔药是错误的做法。"
      }
    ]
  },

  {
    lesson: 30, title: "N.E.W.T.综合模拟测验",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "N.E.W.T.魔药学要求：",
        options: ["A. 只会熬制即可", "B. 不仅会熬制，还要理解原理", "C. 只需要记住配方", "D. 只需要速度快"],
        answer: "B",
        knowledgePoint: "N.E.W.T.魔药学要求",
        analysis: "N.E.W.T.魔药学不仅仅是技术层面的考核，更要求学生理解魔药的原理——为什么材料要这样处理？为什么熬制顺序如此重要？"
      },
      {
        type: "choice", difficulty: "medium",
        text: "高阶魔药的核心是：",
        options: ["A. 使用更稀有的材料", "B. 创造力和伦理判断", "C. 熬制速度更快", "D. 坩埚更漂亮"],
        answer: "B",
        knowledgePoint: "高阶魔药核心",
        analysis: "高阶魔药的核心不是材料稀有度或熬制速度，而是创造力（能够改良配方、开发新药）和伦理判断（知道什么该做、什么不该做）。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "斯拉格霍恩教授的标准是：",
        options: ["A. 只要成功就行", "B. 优秀的魔药大师不仅技术精湛，更要有道德底线", "C. 只看成品效果", "D. 只看材料稀有度"],
        answer: "B",
        knowledgePoint: "斯拉格霍恩教授标准",
        analysis: "斯拉格霍恩教授虽然喜欢收集有才华的学生，但他非常重视道德品质。他认为优秀的魔药大师不仅需要精湛的技术，更需要有道德底线。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第6章 魔药大师之路：创新与传承
  // ════════════════════════════════════════

  {
    lesson: 31, title: "配方改良与创新",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔药配方的特点是：",
        options: ["A. 一成不变", "B. 可以根据材料特性改良", "C. 只能按课本熬制", "D. 不需要创新"],
        answer: "B",
        knowledgePoint: "配方改良",
        analysis: "魔药配方不是一成不变的。优秀的魔药大师会根据材料的特性、环境条件等因素进行改良，以提高药效或降低难度。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "混血王子改良配方的原理是：",
        options: ["A. 添加更多材料", "B. 通过改变材料处理方式提高效率", "C. 延长熬制时间", "D. 使用更贵的坩埚"],
        answer: "B",
        knowledgePoint: "混血王子改良原理",
        analysis: "混血王子通过改变材料的处理方式（如特殊研磨、温度控制）来提高魔药的效率和成功率。这种改良不改变配方的核心成分，而是优化熬制过程。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "配方创新的原则不包括：",
        options: ["A. 安全第一", "B. 效果验证", "C. 记录完整", "D. 保密不分享"],
        answer: "D",
        knowledgePoint: "配方创新原则",
        analysis: "配方创新的原则包括：安全第一（确保新配方不会产生危险）、效果验证（通过实验确认药效）、记录完整（详细记录每一步）。保密不分享不符合学术精神。"
      }
    ]
  },

  {
    lesson: 32, title: "稀有材料的获取与替代",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "稀有材料的来源不包括：",
        options: ["A. 魔法生物", "B. 特殊植物", "C. 古老遗迹", "D. 普通商店"],
        answer: "D",
        knowledgePoint: "稀有材料来源",
        analysis: "稀有材料的来源包括：魔法生物（如龙血、凤凰泪）、特殊植物（如月光露水、星辰花蜜）、古老遗迹（失落的魔药材料）。普通商店不会出售这些稀有材料。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "材料替代的可能性：",
        options: ["A. 完全不可能", "B. 某些材料可以用相似属性的材料替代", "C. 所有材料都可以替代", "D. 只能用更贵的材料替代"],
        answer: "B",
        knowledgePoint: "材料替代",
        analysis: "某些材料可以用相似属性的材料替代。例如，在紧急情况下，可以用普通草药替代部分稀有草药。但替代通常会导致药效下降或副作用增加。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "材料替代的风险不包括：",
        options: ["A. 效力下降", "B. 副作用增加", "C. 配方失效", "D. 效果增强"],
        answer: "D",
        knowledgePoint: "材料替代风险",
        analysis: "材料替代的风险包括：效力下降（替代材料的药效不如原材料）、副作用增加（替代材料可能产生额外的副作用）、配方失效（关键材料无法替代）。"
      }
    ]
  },

  {
    lesson: 33, title: "魔药与炼金术的交叉",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "炼金术与魔药学的关系是：",
        options: ["A. 完全相同", "B. 炼金术是魔药学的高阶形式", "C. 魔药学是炼金术的高阶形式", "D. 没有关系"],
        answer: "B",
        knowledgePoint: "炼金术与魔药学关系",
        analysis: "炼金术是魔药学的高阶形式。魔药学研究物质通过化学-魔法反应产生特定效果，而炼金术追求物质的终极转化（如将铅变成金）和创造传说中的物品（如贤者之石）。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "贤者之石的传说不包括：",
        options: ["A. 能将铅变成金", "B. 能制造长生不老药", "C. 能让人隐身", "D. 是炼金术的终极目标"],
        answer: "C",
        knowledgePoint: "贤者之石传说",
        analysis: "贤者之石是炼金术的终极目标，传说它能将铅变成金，并制造长生不老药。让人隐身是隐形衣或幻身药剂的效果，与贤者之石无关。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "魔药与炼金术的本质区别是：",
        options: ["A. 没有区别", "B. 魔药改变性质，炼金术改变本质", "C. 炼金术改变性质，魔药改变本质", "D. 只是名称不同"],
        answer: "B",
        knowledgePoint: "魔药与炼金术区别",
        analysis: "魔药通过化学-魔法反应改变物质的性质（如颜色、效果），而炼金术追求改变物质的本质（如将一种元素变成另一种元素）。"
      }
    ]
  },

  {
    lesson: 34, title: "魔药的商业化",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "对角巷的魔药商店不包括：",
        options: ["A. 月桂魔材药房", "B. 韦斯莱魔法把戏坊", "C. 奥利凡德魔杖店", "D. 蜂蜜公爵"],
        answer: "C",
        knowledgePoint: "对角巷魔药商店",
        analysis: "对角巷的魔药相关商店包括月桂魔材药房（出售原料和成品魔药）、韦斯莱魔法把戏坊（出售恶作剧魔药）、蜂蜜公爵（出售魔法糖果和部分魔药）。奥利凡德是魔杖店，不卖魔药。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "魔药的定价原则不包括：",
        options: ["A. 材料稀有度", "B. 熬制难度", "C. 市场需求", "D. 坩埚颜色"],
        answer: "D",
        knowledgePoint: "魔药定价原则",
        analysis: "魔药的定价原则包括：材料稀有度（越稀有的材料制成的魔药越贵）、熬制难度（难度越高价格越高）、市场需求（需求大的魔药价格更高）。坩埚颜色与定价无关。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "自制与购买魔药的权衡不包括：",
        options: ["A. 经济成本", "B. 时间成本", "C. 品质保证", "D. 坩埚品牌"],
        answer: "D",
        knowledgePoint: "自制vs购买权衡",
        analysis: "自制与购买魔药的权衡包括：经济成本（自制可能更便宜）、时间成本（自制需要时间）、品质保证（购买的魔药通常有品质保证）。坩埚品牌与此无关。"
      }
    ]
  },

  {
    lesson: 35, title: "魔药与医疗魔法",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔药在医疗中的应用不包括：",
        options: ["A. 治疗伤口", "B. 治愈疾病", "C. 缓解疼痛", "D. 读心术"],
        answer: "D",
        knowledgePoint: "魔药医疗应用",
        analysis: "魔药在医疗中的应用包括：治疗伤口（如白鲜香精）、治愈疾病（如治疗魔药）、缓解疼痛（如止痛药）。读心术是魔法咒语，不是魔药的应用。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "魔药与医疗咒语的互补关系是：",
        options: ["A. 魔药提供即时效果，咒语提供持续效果", "B. 魔药提供持续效果，咒语提供即时效果", "C. 两者完全相同", "D. 两者没有关系"],
        answer: "B",
        knowledgePoint: "魔药与咒语互补",
        analysis: "魔药与医疗咒语是互补的：魔药提供持续效果（如长效治疗），咒语提供即时效果（如瞬间止血）。在实际治疗中，两者常常结合使用。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "校医室的常备魔药不包括：",
        options: ["A. 提神药剂", "B. 白鲜香精", "C. 愈合药剂", "D. 福灵剂"],
        answer: "D",
        knowledgePoint: "校医室常备魔药",
        analysis: "校医室的常备魔药包括：提神药剂（治疗轻伤、恢复精力）、白鲜香精（止血、防感染）、愈合药剂（加速伤口愈合）。福灵剂是稀有且有风险的魔药，不会作为常备药。"
      }
    ]
  },

  {
    lesson: 36, title: "第六阶段综合测验",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔药大师需要的品质不包括：",
        options: ["A. 技术", "B. 知识", "C. 创造力", "D. 傲慢"],
        answer: "D",
        knowledgePoint: "魔药大师品质",
        analysis: "魔药大师需要的品质包括：精湛的技术、渊博的知识、创新的创造力、高尚的道德。傲慢会阻碍学习和进步，不是魔药大师应有的品质。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "配方创新的基础是：",
        options: ["A. 凭空想象", "B. 扎实的基础", "C. 运气", "D. 昂贵的材料"],
        answer: "B",
        knowledgePoint: "配方创新基础",
        analysis: "配方创新不是凭空想象，而是建立在扎实的基础知识之上。只有理解了魔药的原理和材料的特性，才能进行有效的创新。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "魔药的终极目标是：",
        options: ["A. 制造最强大的魔药", "B. 帮助他人", "C. 获得财富", "D. 追求权力"],
        answer: "B",
        knowledgePoint: "魔药终极目标",
        analysis: "魔药的终极目标是帮助他人，而非控制或伤害。真正的魔药大师用自己的能力治愈疾病、缓解痛苦，而不是追求权力或财富。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第7章 终极考核：魔药大师的试炼
  // ════════════════════════════════════════

  {
    lesson: 37, title: "凤凰泪药剂：传说中的治愈",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "凤凰泪药剂的效果是：",
        options: ["A. 只能治疗小伤", "B. 能治愈一切伤害", "C. 让人长生不老", "D. 改变外貌"],
        answer: "B",
        knowledgePoint: "凤凰泪药剂效果",
        analysis: "凤凰泪能治愈一切伤害，是魔法世界最珍贵的药剂。它可以治愈任何伤口、化解任何毒素、甚至让人起死回生（在一定条件下）。"
      },
      {
        type: "choice", difficulty: "basic",
        text: "凤凰泪药剂的材料包括：",
        options: ["A. 凤凰泪", "B. 白鲜", "C. 星辰花蜜", "D. 以上都是"],
        answer: "D",
        knowledgePoint: "凤凰泪药剂材料",
        analysis: "凤凰泪药剂的材料包括凤凰泪（核心成分）、白鲜（辅助治愈）、星辰花蜜（增强效果）。这些材料都非常稀有，使得凤凰泪药剂极其珍贵。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "关于凤凰泪药剂的伦理考量：",
        options: ["A. 可以随意使用", "B. 凤凰是神圣生物，不应过度索取", "C. 只能用于战斗", "D. 没有伦理问题"],
        answer: "B",
        knowledgePoint: "凤凰泪药剂伦理",
        analysis: "凤凰是神圣生物，凤凰泪只能由凤凰自愿提供。过度索取或强迫凤凰流泪是不道德的，也会破坏人与神奇生物之间的信任。"
      }
    ]
  },

  {
    lesson: 38, title: "魂器守护剧毒：黑魔法的巅峰",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魂器守护剧毒的特点是：",
        options: ["A. 容易化解", "B. 无解的毒性，只有凤凰泪能解", "C. 只能让人昏睡", "D. 没有效果"],
        answer: "B",
        knowledgePoint: "魂器守护剧毒特点",
        analysis: "伏地魔的魂器毒药是最致命的黑魔法魔药，具有无解的毒性。常规解毒剂对它无效，只有凤凰泪这种传说中的材料才能化解。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "魂器守护剧毒的材料来源：",
        options: ["A. 普通草药", "B. 黑魔法草、龙毒、暗影花等禁忌材料", "C. 日常食材", "D. 阳光花蜜"],
        answer: "B",
        knowledgePoint: "魂器守护剧毒材料",
        analysis: "魂器守护剧毒使用了多种禁忌材料：黑魔法草、龙毒、暗影花、夜影花等。这些材料本身就带有强大的黑暗魔力，使得毒药具有毁灭性的效果。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "黑魔法魔药的警示是：",
        options: ["A. 可以随意制作", "B. 追求力量的代价", "C. 比白魔法魔药更好", "D. 没有风险"],
        answer: "B",
        knowledgePoint: "黑魔法魔药警示",
        analysis: "黑魔法魔药是追求力量的代价。虽然它们可能提供强大的效果，但使用和制作它们会腐蚀使用者的灵魂，最终导致毁灭。真正的魔药大师永远不会触碰黑魔法魔药。"
      }
    ]
  },

  {
    lesson: 39, title: "魔药与命运",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔药可以改变的是：",
        options: ["A. 命运", "B. 身体、情绪、记忆", "C. 过去", "D. 宇宙法则"],
        answer: "B",
        knowledgePoint: "魔药的局限",
        analysis: "魔药可以改变身体（如变形魔药）、情绪（如欢欣剂）、记忆（如遗忘药水），但它无法改变命运。命运是超越魔法的存在，魔药只能在一定范围内发挥作用。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "福灵剂带来的好运是：",
        options: ["A. 永久的", "B. 短暂的，真正的成功来自努力", "C. 无限的", "D. 没有副作用"],
        answer: "B",
        knowledgePoint: "福灵剂的真相",
        analysis: "福灵剂带来的好运是短暂的，药效过后一切恢复正常。真正的成功不是靠运气，而是来自持续的努力和坚定的意志。依赖福灵剂只会让人变得懒惰和狂妄。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "魔药大师的智慧在于：",
        options: ["A. 制作最强大的魔药", "B. 懂得魔药的局限", "C. 收集最多的材料", "D. 熬制最快的速度"],
        answer: "B",
        knowledgePoint: "魔药大师智慧",
        analysis: "真正的魔药大师不仅会制作各种魔药，更懂得魔药的局限。他们知道什么可以改变，什么无法改变，不会盲目追求超越自然的力量。"
      }
    ]
  },

  {
    lesson: 40, title: "魔药的哲学",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔药是：",
        options: ["A. 纯粹的科学", "B. 纯粹的魔法", "C. 科学与魔法的结合", "D. 纯粹的艺术"],
        answer: "C",
        knowledgePoint: "魔药的本质",
        analysis: "魔药是科学与魔法的完美结合。它需要精确的测量（科学）和直觉的平衡（魔法）。没有科学的精确，魔药无法成功；没有魔法的直觉，魔药只是一堆化学物质。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "材料的生命意味着：",
        options: ["A. 材料没有生命", "B. 每一种材料都有独特的性质和记忆", "C. 材料只是工具", "D. 材料可以随意使用"],
        answer: "B",
        knowledgePoint: "材料的生命",
        analysis: "每一种魔药材料都有独特的性质和记忆。它们来自不同的地方，经历过不同的生长过程，这些都会影响最终的魔药效果。尊重材料就是尊重魔药本身。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "熬制者的影响是：",
        options: ["A. 没有影响", "B. 情绪、专注度、意图都会影响最终结果", "C. 只有技术重要", "D. 只有材料重要"],
        answer: "B",
        knowledgePoint: "熬制者的影响",
        analysis: "熬制者的情绪、专注度和意图都会影响魔药的最终结果。一个心怀恶意的人熬制的治愈魔药可能效果不佳，而一个充满善意的人熬制的魔药可能效果超出预期。魔药会反映熬制者的内心。"
      }
    ]
  },

  {
    lesson: 41, title: "魔药学的未来",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔药与麻瓜医学的交叉研究：",
        options: ["A. 两者完全独立", "B. 两种体系可以互补", "C. 麻瓜医学更好", "D. 魔药更好"],
        answer: "B",
        knowledgePoint: "魔药与麻瓜医学交叉",
        analysis: "魔药与麻瓜医学两种体系可以互补。麻瓜医学在某些领域（如外科手术）有优势，而魔药在其他领域（如快速治愈、情绪调节）有优势。两者的结合可能开创医疗的新领域。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "新型魔药的开发方向是：",
        options: ["A. 基于魔法生物学的创新", "B. 只是重复旧配方", "C. 不需要创新", "D. 只使用稀有材料"],
        answer: "A",
        knowledgePoint: "新型魔药开发",
        analysis: "新型魔药的开发方向是基于魔法生物学的创新。随着对魔法生物和植物的深入研究，魔药学家可以开发出更有效、更安全的新型魔药，解决以前无法解决的问题。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "魔药教育的传承是：",
        options: ["A. 只教配方", "B. 从霍格沃茨到新一代魔药大师", "C. 不需要传承", "D. 只教技术"],
        answer: "B",
        knowledgePoint: "魔药教育传承",
        analysis: "魔药教育的传承是从霍格沃茨到新一代魔药大师。霍格沃茨提供了基础教育，但真正的传承需要新一代魔药大师在实践中不断探索、创新，并将知识传递给下一代。"
      }
    ]
  },

  {
    lesson: 42, title: "N.E.W.T.终极综合考核",
    questions: [
      {
        type: "choice", difficulty: "basic",
        text: "魔药学的终极意义是：",
        options: ["A. 制造最强的魔药", "B. 理解物质与魔力的本质", "C. 获得财富", "D. 追求权力"],
        answer: "B",
        knowledgePoint: "魔药学终极意义",
        analysis: "魔药学的终极意义不是制造最强的魔药，而是理解物质与魔力的本质。通过魔药，我们可以理解宇宙的运作方式，理解生命的奥秘，理解魔法的真正含义。"
      },
      {
        type: "choice", difficulty: "medium",
        text: "七年课程的完整弧线是：",
        options: ["A. 从记住配方到熬制魔药", "B. 从材料识别到创造新配方", "C. 从理论到实践", "D. 从简单到复杂"],
        answer: "B",
        knowledgePoint: "魔药课程弧线",
        analysis: "七年魔药课程的完整弧线是从材料识别到创造新配方。一年级学生学习识别基础材料，而七年级学生已经能够理解魔药原理并创造新的配方。这是一个从基础到创新的过程。"
      },
      {
        type: "choice", difficulty: "hard",
        text: "斯内普/斯拉格霍恩教授的寄语是：",
        options: ["A. 魔药越强大越好", "B. 魔药不会说谎——你的每一次熬制都反映了你的内心", "C. 只关注技术", "D. 只关注材料"],
        answer: "B",
        knowledgePoint: "教授寄语",
        analysis: "魔药不会说谎——你的每一次熬制都反映了你的内心。这是两位教授共同的信念。一个人的品格、意图和专注度都会在魔药中体现出来。真正的魔药大师不仅技术精湛，更要有高尚的品格。"
      }
    ]
  }
];
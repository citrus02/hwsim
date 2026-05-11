/**
 * chemistry-questionBank.js
 * 麻瓜学术 · 化学分科 · 随堂测验题库
 * 教授：普里姆罗斯·斯普劳特
 */

export const questionBank = [
  {
    lesson: 1, title: "化学改变世界",
    questions: [
      { type: "choice", difficulty: "basic", text: "化学研究的核心内容是：", options: ["A. 物质的运动规律", "B. 物质的组成、结构、性质及变化", "C. 天体的运行", "D. 生物的进化"], answer: "B", knowledgePoint: "化学研究对象", analysis: "化学是研究物质的组成、结构、性质以及变化规律的科学。" },
      { type: "choice", difficulty: "medium", text: "下列属于化学变化的是：", options: ["A. 冰雪融化", "B. 纸张燃烧", "C. 玻璃破碎", "D. 酒精挥发"], answer: "B", knowledgePoint: "化学变化判断", analysis: "纸张燃烧生成新物质（二氧化碳、水等），属于化学变化。其余都是物理变化。" },
      { type: "choice", difficulty: "hard", text: "化学与魔药学的相似之处在于：", options: ["A. 都使用魔法", "B. 都探索物质的转化", "C. 都不需要实验", "D. 都只研究有机物"], answer: "B", knowledgePoint: "跨学科联系", analysis: "化学和魔药学都研究物质的性质和转化规律，只是手段和范围不同。" }
    ]
  },
  {
    lesson: 2, title: "物质的变化与性质",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列变化属于物理变化的是：", options: ["A. 木柴燃烧", "B. 钢铁生锈", "C. 水结成冰", "D. 食物变质"], answer: "C", knowledgePoint: "物理变化判断", analysis: "水结成冰只是状态改变，没有新物质生成，是物理变化。" },
      { type: "choice", difficulty: "medium", text: "判断化学变化的根本标准是：", options: ["A. 是否发光发热", "B. 是否有气泡产生", "C. 是否有新物质生成", "D. 是否颜色改变"], answer: "C", knowledgePoint: "化学变化本质", analysis: "化学变化的本质是有新物质生成，发光发热、气泡、颜色改变都可能是物理变化的伴随现象。" },
      { type: "choice", difficulty: "hard", text: "下列说法正确的是：", options: ["A. 物质的性质决定用途", "B. 物质的用途决定性质", "C. 物理性质都不需要通过化学变化就能表现", "D. 化学性质都需要通过物理变化才能表现"], answer: "A", knowledgePoint: "性质与用途", analysis: "物质的性质决定其用途，用途反映性质。物理性质不需要化学变化就能表现，化学性质需要通过化学变化表现。" }
    ]
  },
  {
    lesson: 3, title: "走进化学实验室",
    questions: [
      { type: "choice", difficulty: "basic", text: "实验中不小心将酸洒在手上，正确的处理方法是：", options: ["A. 立即用大量水冲洗", "B. 用抹布擦干", "C. 用碱中和", "D. 先擦干再冲洗"], answer: "A", knowledgePoint: "实验室安全", analysis: "酸洒在手上应立即用大量水冲洗，稀释酸液，减轻腐蚀。" },
      { type: "choice", difficulty: "medium", text: "下列仪器中，可直接加热的是：", options: ["A. 烧杯", "B. 烧瓶", "C. 试管", "D. 量筒"], answer: "C", knowledgePoint: "仪器使用", analysis: "试管可以直接加热，烧杯、烧瓶需要垫石棉网，量筒不能加热。" },
      { type: "choice", difficulty: "hard", text: "实验时，液体药品取用的正确操作是：", options: ["A. 用手直接拿取", "B. 倾倒时标签朝向手心", "C. 试剂瓶塞正放在桌上", "D. 滴管伸入试管内滴加"], answer: "B", knowledgePoint: "液体取用", analysis: "倾倒液体时标签应朝向手心，防止腐蚀标签。试剂瓶塞应倒放，滴管不能伸入试管内。" }
    ]
  },
  {
    lesson: 4, title: "空气的组成",
    questions: [
      { type: "choice", difficulty: "basic", text: "空气中含量最多的气体是：", options: ["A. 氧气", "B. 氮气", "C. 二氧化碳", "D. 稀有气体"], answer: "B", knowledgePoint: "空气成分", analysis: "氮气约占空气体积的78%，是含量最多的气体。" },
      { type: "choice", difficulty: "medium", text: "下列关于空气的说法正确的是：", options: ["A. 空气是纯净物", "B. 空气是混合物", "C. 空气中只有氮气和氧气", "D. 空气成分固定不变"], answer: "B", knowledgePoint: "空气性质", analysis: "空气由氮气、氧气、二氧化碳、稀有气体等多种物质组成，是混合物。" },
      { type: "choice", difficulty: "hard", text: "空气中氧气的体积分数约为：", options: ["A. 78%", "B. 21%", "C. 1%", "D. 0.03%"], answer: "B", knowledgePoint: "氧气含量", analysis: "氧气约占空气体积的21%，是维持生命活动的重要气体。" }
    ]
  },
  {
    lesson: 5, title: "氧气的性质",
    questions: [
      { type: "choice", difficulty: "basic", text: "氧气的物理性质是：", options: ["A. 无色无味气体", "B. 有刺激性气味", "C. 密度比空气小", "D. 在水中溶解度很大"], answer: "A", knowledgePoint: "氧气物理性质", analysis: "氧气是无色无味的气体，密度略大于空气，不易溶于水。" },
      { type: "choice", difficulty: "medium", text: "下列物质在氧气中燃烧，产生蓝紫色火焰的是：", options: ["A. 木炭", "B. 铁丝", "C. 硫", "D. 红磷"], answer: "C", knowledgePoint: "物质燃烧现象", analysis: "硫在氧气中燃烧产生蓝紫色火焰，生成有刺激性气味的气体。" },
      { type: "choice", difficulty: "hard", text: "检验氧气的方法是：", options: ["A. 用燃着的木条", "B. 用带火星的木条", "C. 通入澄清石灰水", "D. 观察颜色"], answer: "B", knowledgePoint: "氧气检验", analysis: "带火星的木条在氧气中会复燃，这是检验氧气的标准方法。" }
    ]
  },
  {
    lesson: 6, title: "制取氧气",
    questions: [
      { type: "choice", difficulty: "basic", text: "实验室制取氧气，不需要用到的仪器是：", options: ["A. 酒精灯", "B. 试管", "C. 量筒", "D. 水槽"], answer: "C", knowledgePoint: "实验装置", analysis: "量筒用于量取液体体积，制取氧气时不需要量取液体体积。" },
      { type: "choice", difficulty: "medium", text: "收集氧气可用排水法，因为氧气：", options: ["A. 密度比空气大", "B. 不易溶于水", "C. 密度比空气小", "D. 能溶于水"], answer: "B", knowledgePoint: "收集方法", analysis: "氧气不易溶于水，可用排水法收集；密度比空气大，也可用向上排空气法。" },
      { type: "choice", difficulty: "hard", text: "加热高锰酸钾制氧气的文字表达式是：", options: ["A. 高锰酸钾 → 锰酸钾 + 二氧化锰 + 氧气", "B. 高锰酸钾 → 锰酸钾 + 氧气", "C. 高锰酸钾 + 二氧化锰 → 锰酸钾 + 氧气", "D. 高锰酸钾 → 二氧化锰 + 氧气"], answer: "A", knowledgePoint: "反应原理", analysis: "加热高锰酸钾生成锰酸钾、二氧化锰和氧气，二氧化锰是生成物不是催化剂。" }
    ]
  },
  {
    lesson: 7, title: "燃烧与灭火",
    questions: [
      { type: "choice", difficulty: "basic", text: "燃烧需要的三个条件是：", options: ["A. 可燃物、氧气、二氧化碳", "B. 可燃物、氧气、达到着火点", "C. 氧气、水、达到着火点", "D. 可燃物、水、二氧化碳"], answer: "B", knowledgePoint: "燃烧条件", analysis: "燃烧需要三个条件：可燃物、与氧气接触、温度达到着火点。" },
      { type: "choice", difficulty: "medium", text: "炒菜时油锅着火，正确的灭火方法是：", options: ["A. 用水浇灭", "B. 用锅盖盖灭", "C. 打开排气扇", "D. 继续加热"], answer: "B", knowledgePoint: "灭火方法", analysis: "用锅盖盖灭可以隔绝氧气，达到灭火目的。用水浇油会使油溅出，扩大火势。" },
      { type: "choice", difficulty: "hard", text: "下列关于燃烧的说法正确的是：", options: ["A. 燃烧一定需要氧气", "B. 燃烧一定发光发热", "C. 发光发热的一定是燃烧", "D. 燃烧一定是化学变化"], answer: "D", knowledgePoint: "燃烧概念", analysis: "燃烧是剧烈的氧化反应，一定是化学变化。有些燃烧不需要氧气（如氢气在氯气中燃烧），发光发热的不一定是燃烧（如电灯发光）。" }
    ]
  },
  {
    lesson: 8, title: "分子和原子",
    questions: [
      { type: "choice", difficulty: "basic", text: "保持水的化学性质的最小微粒是：", options: ["A. 氢原子", "B. 氧原子", "C. 水分子", "D. 氢分子"], answer: "C", knowledgePoint: "分子性质", analysis: "分子是保持物质化学性质的最小微粒，保持水化学性质的最小微粒是水分子。" },
      { type: "choice", difficulty: "medium", text: "下列关于分子的说法正确的是：", options: ["A. 分子是静止不动的", "B. 分子是构成物质的唯一微粒", "C. 分子在不断运动", "D. 分子之间没有间隔"], answer: "C", knowledgePoint: "分子特性", analysis: "分子在不断运动，分子之间有间隔，原子、离子也能构成物质。" },
      { type: "choice", difficulty: "hard", text: "化学变化的微观本质是：", options: ["A. 分子的破坏", "B. 原子的重新组合", "C. 电子的转移", "D. 分子大小的改变"], answer: "B", knowledgePoint: "化学变化本质", analysis: "化学变化的微观本质是原子的重新组合，旧分子分解，原子重新排列形成新分子。" }
    ]
  },
  {
    lesson: 9, title: "原子的结构",
    questions: [
      { type: "choice", difficulty: "basic", text: "原子核由什么组成？", options: ["A. 质子和电子", "B. 质子和中子", "C. 中子和电子", "D. 只有质子"], answer: "B", knowledgePoint: "原子结构", analysis: "原子核由质子和中子组成，电子在核外运动。" },
      { type: "choice", difficulty: "medium", text: "在原子中，质子数等于：", options: ["A. 中子数", "B. 电子数", "C. 原子质量", "D. 原子序数"], answer: "B", knowledgePoint: "原子构成", analysis: "在原子中，质子数等于核外电子数，也等于原子序数。" },
      { type: "choice", difficulty: "hard", text: "下列关于原子的说法正确的是：", options: ["A. 原子是不可再分的微粒", "B. 原子的质量主要集中在原子核", "C. 原子核带负电", "D. 电子带正电"], answer: "B", knowledgePoint: "原子性质", analysis: "原子可分为原子核和核外电子，原子核带正电，电子带负电，原子质量主要集中在原子核。" }
    ]
  },
  {
    lesson: 10, title: "元素",
    questions: [
      { type: "choice", difficulty: "basic", text: "元素是具有相同什么的一类原子的总称？", options: ["A. 中子数", "B. 质子数", "C. 电子数", "D. 质量数"], answer: "B", knowledgePoint: "元素定义", analysis: "元素是具有相同质子数（核电荷数）的一类原子的总称。" },
      { type: "choice", difficulty: "medium", text: "下列元素符号书写正确的是：", options: ["A. MG", "B. na", "C. Fe", "D. cL"], answer: "C", knowledgePoint: "元素符号", analysis: "元素符号第一个字母大写，第二个字母小写，Fe是铁的元素符号。" },
      { type: "choice", difficulty: "hard", text: "稀有气体元素位于元素周期表的：", options: ["A. 最左边", "B. 最右边", "C. 中间", "D. 上方"], answer: "B", knowledgePoint: "元素周期表", analysis: "稀有气体元素位于元素周期表最右边（第18族），化学性质稳定。" }
    ]
  },
  {
    lesson: 11, title: "离子",
    questions: [
      { type: "choice", difficulty: "basic", text: "原子失去电子形成：", options: ["A. 阳离子", "B. 阴离子", "C. 原子", "D. 分子"], answer: "A", knowledgePoint: "离子形成", analysis: "原子失去电子带正电，形成阳离子；得到电子带负电，形成阴离子。" },
      { type: "choice", difficulty: "medium", text: "下列粒子中，属于阳离子的是：", options: ["A. 质子数8，电子数10", "B. 质子数11，电子数10", "C. 质子数10，电子数10", "D. 质子数9，电子数10"], answer: "B", knowledgePoint: "离子判断", analysis: "质子数大于电子数的粒子带正电，是阳离子。质子数11，电子数10，带1个单位正电荷。" },
      { type: "choice", difficulty: "hard", text: "离子化合物的形成是由于：", options: ["A. 分子间作用力", "B. 原子间共用电子对", "C. 阴阳离子间的静电作用", "D. 原子核间的引力"], answer: "C", knowledgePoint: "离子键", analysis: "离子化合物由阴阳离子通过静电作用（离子键）结合形成。" }
    ]
  },
  {
    lesson: 12, title: "水的组成",
    questions: [
      { type: "choice", difficulty: "basic", text: "水的化学式是：", options: ["A. H₂O", "B. H₂", "C. O₂", "D. HO"], answer: "A", knowledgePoint: "水的化学式", analysis: "水由氢元素和氧元素组成，化学式为H₂O。" },
      { type: "choice", difficulty: "medium", text: "电解水实验中，正极产生的气体是：", options: ["A. 氢气", "B. 氧气", "C. 氮气", "D. 二氧化碳"], answer: "B", knowledgePoint: "电解水", analysis: "电解水时，正极产生氧气，负极产生氢气，体积比约为1:2。" },
      { type: "choice", difficulty: "hard", text: "下列关于水的说法正确的是：", options: ["A. 水是由氢原子和氧原子构成的", "B. 水是由水分子构成的", "C. 水是由氢气和氧气组成的", "D. 水是纯净物，不含杂质"], answer: "B", knowledgePoint: "水的构成", analysis: "水是由水分子构成的纯净物，水分子由氢原子和氧原子构成。" }
    ]
  },
  {
    lesson: 13, title: "水的净化",
    questions: [
      { type: "choice", difficulty: "basic", text: "过滤操作中，不需要用到的仪器是：", options: ["A. 漏斗", "B. 烧杯", "C. 玻璃棒", "D. 酒精灯"], answer: "D", knowledgePoint: "过滤仪器", analysis: "过滤需要漏斗、烧杯、玻璃棒，不需要酒精灯加热。" },
      { type: "choice", difficulty: "medium", text: "过滤操作的\"一贴\"是指：", options: ["A. 滤纸贴紧漏斗", "B. 漏斗贴紧烧杯", "C. 玻璃棒贴烧杯内壁", "D. 烧杯贴桌面"], answer: "A", knowledgePoint: "过滤要点", analysis: "过滤\"一贴二低三靠\"：一贴指滤纸紧贴漏斗内壁。" },
      { type: "choice", difficulty: "hard", text: "硬水和软水的区别在于：", options: ["A. 水中是否有杂质", "B. 水中钙镁离子的含量", "C. 水的酸碱度", "D. 水的温度"], answer: "B", knowledgePoint: "硬水软水", analysis: "硬水含有较多钙镁离子，软水含有较少或不含钙镁离子，可用肥皂水区分。" }
    ]
  },
  {
    lesson: 14, title: "爱护水资源",
    questions: [
      { type: "choice", difficulty: "basic", text: "地球上淡水资源占总水量的比例约为：", options: ["A. 70%", "B. 30%", "C. 3%", "D. 0.3%"], answer: "C", knowledgePoint: "水资源分布", analysis: "地球上淡水资源约占总水量的3%，可利用的更少。" },
      { type: "choice", difficulty: "medium", text: "下列不属于节约用水的措施是：", options: ["A. 用洗菜水浇花", "B. 随手关闭水龙头", "C. 用流水洗碗", "D. 推广节水器具"], answer: "C", knowledgePoint: "节水措施", analysis: "用流水洗碗会浪费大量水资源，不属于节水措施。" },
      { type: "choice", difficulty: "hard", text: "水体污染的主要来源不包括：", options: ["A. 工业废水", "B. 生活污水", "C. 农业化肥农药", "D. 水蒸气"], answer: "D", knowledgePoint: "水污染来源", analysis: "工业废水、生活污水、农业化肥农药都是水体污染的主要来源，水蒸气不会造成水污染。" }
    ]
  },
  {
    lesson: 15, title: "质量守恒定律",
    questions: [
      { type: "choice", difficulty: "basic", text: "质量守恒定律说明，化学反应前后：", options: ["A. 物质种类不变", "B. 物质总质量不变", "C. 分子数目不变", "D. 原子种类不变"], answer: "B", knowledgePoint: "质量守恒定律", analysis: "质量守恒定律：化学反应前后，参加反应的各物质质量总和等于生成物的质量总和。" },
      { type: "choice", difficulty: "medium", text: "质量守恒定律的微观解释是：", options: ["A. 分子种类不变", "B. 原子种类和数目不变", "C. 原子质量改变", "D. 分子数目不变"], answer: "B", knowledgePoint: "微观解释", analysis: "化学反应前后原子的种类、数目、质量都不变，所以总质量不变。" },
      { type: "choice", difficulty: "hard", text: "3g碳完全燃烧生成11g二氧化碳，则参加反应的氧气质量为：", options: ["A. 3g", "B. 8g", "C. 11g", "D. 14g"], answer: "B", knowledgePoint: "质量守恒计算", analysis: "根据质量守恒定律，氧气质量=11g-3g=8g。" }
    ]
  },
  {
    lesson: 16, title: "化学方程式",
    questions: [
      { type: "choice", difficulty: "basic", text: "化学方程式配平的原则是：", options: ["A. 分子数守恒", "B. 原子数守恒", "C. 质子数守恒", "D. 电荷守恒"], answer: "B", knowledgePoint: "方程式配平", analysis: "配平化学方程式的依据是质量守恒定律，即反应前后每种原子的数目守恒。" },
      { type: "choice", difficulty: "medium", text: "下列化学方程式书写正确的是：", options: ["A. H₂ + O₂ → H₂O", "B. 2H₂ + O₂ → 2H₂O", "C. H₂ + O₂ → 2H₂O", "D. 2H₂ + 2O₂ → 2H₂O"], answer: "B", knowledgePoint: "方程式书写", analysis: "配平后：2H₂ + O₂ → 2H₂O，反应前后H各4个，O各2个。" },
      { type: "choice", difficulty: "hard", text: "化学方程式2H₂O → 2H₂↑ + O₂↑的读法正确的是：", options: ["A. 水等于氢气加氧气", "B. 水在通电条件下生成氢气和氧气", "C. 2个水分子生成2个氢分子和1个氧分子", "D. 以上都正确"], answer: "B", knowledgePoint: "方程式读法", analysis: "化学方程式应读作：水在通电条件下生成氢气和氧气。" }
    ]
  },
  {
    lesson: 17, title: "利用化学方程式的简单计算",
    questions: [
      { type: "choice", difficulty: "basic", text: "根据化学方程式计算的依据是：", options: ["A. 质量守恒定律", "B. 元素周期律", "C. 原子结构", "D. 物质分类"], answer: "A", knowledgePoint: "计算依据", analysis: "根据化学方程式计算的依据是质量守恒定律和各物质的质量比。" },
      { type: "choice", difficulty: "medium", text: "4g氢气完全燃烧需要氧气的质量是：", options: ["A. 4g", "B. 16g", "C. 32g", "D. 64g"], answer: "C", knowledgePoint: "化学计算", analysis: "2H₂ + O₂ → 2H₂O，4g氢气需要32g氧气（质量比1:8）。" },
      { type: "choice", difficulty: "hard", text: "含杂质20%的锌粒10g，与足量稀硫酸反应，生成氢气的质量约为：", options: ["A. 0.2g", "B. 0.25g", "C. 0.3g", "D. 0.32g"], answer: "B", knowledgePoint: "含杂质计算", analysis: "纯锌质量=10g×(1-20%)=8g，Zn+H₂SO₄→ZnSO₄+H₂↑，生成氢气约0.25g。" }
    ]
  },
  {
    lesson: 18, title: "金刚石、石墨和C₆₀",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列物质中，硬度最大的是：", options: ["A. 石墨", "B. 金刚石", "C. C₆₀", "D. 木炭"], answer: "B", knowledgePoint: "碳的单质", analysis: "金刚石是自然界中硬度最大的物质，可用于切割玻璃。" },
      { type: "choice", difficulty: "medium", text: "金刚石和石墨性质不同的原因是：", options: ["A. 组成元素不同", "B. 碳原子排列方式不同", "C. 原子大小不同", "D. 原子数目不同"], answer: "B", knowledgePoint: "同素异形体", analysis: "金刚石和石墨都是由碳元素组成，但碳原子排列方式不同，导致性质差异。" },
      { type: "choice", difficulty: "hard", text: "C₆₀的化学式表示：", options: ["A. 60个碳原子", "B. 一个C₆₀分子由60个碳原子构成", "C. 碳的原子量为60", "D. 碳有60种同位素"], answer: "B", knowledgePoint: "C₆₀", analysis: "C₆₀是由60个碳原子构成的分子，形似足球，又称足球烯。" }
    ]
  },
  {
    lesson: 19, title: "二氧化碳的制取",
    questions: [
      { type: "choice", difficulty: "basic", text: "实验室制取二氧化碳的药品是：", options: ["A. 木炭和氧气", "B. 碳酸钙和稀盐酸", "C. 碳酸钠和稀硫酸", "D. 碳酸钙和稀硫酸"], answer: "B", knowledgePoint: "制取药品", analysis: "实验室常用大理石（碳酸钙）和稀盐酸制取二氧化碳。" },
      { type: "choice", difficulty: "medium", text: "收集二氧化碳可用：", options: ["A. 排水法", "B. 向下排空气法", "C. 向上排空气法", "D. 以上都可以"], answer: "C", knowledgePoint: "收集方法", analysis: "二氧化碳密度比空气大，能溶于水，只能用向上排空气法收集。" },
      { type: "choice", difficulty: "hard", text: "检验二氧化碳的方法是：", options: ["A. 用燃着的木条", "B. 用带火星的木条", "C. 通入澄清石灰水", "D. 观察颜色"], answer: "C", knowledgePoint: "检验方法", analysis: "二氧化碳能使澄清石灰水变浑浊，这是检验二氧化碳的标准方法。" }
    ]
  },
  {
    lesson: 20, title: "二氧化碳和一氧化碳",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列关于二氧化碳的说法正确的是：", options: ["A. 有毒", "B. 能燃烧", "C. 能使澄清石灰水变浑浊", "D. 密度比空气小"], answer: "C", knowledgePoint: "二氧化碳性质", analysis: "二氧化碳无毒、不能燃烧、密度比空气大，能使澄清石灰水变浑浊。" },
      { type: "choice", difficulty: "medium", text: "一氧化碳有毒是因为：", options: ["A. 能使人窒息", "B. 能与血红蛋白结合", "C. 能与氧气反应", "D. 能燃烧"], answer: "B", knowledgePoint: "一氧化碳毒性", analysis: "一氧化碳能与血红蛋白结合，使其失去运输氧气的能力，导致中毒。" },
      { type: "choice", difficulty: "hard", text: "下列用途中，利用二氧化碳物理性质的是：", options: ["A. 灭火", "B. 光合作用", "C. 制干冰", "D. 制汽水"], answer: "C", knowledgePoint: "二氧化碳用途", analysis: "制干冰利用二氧化碳的三态变化，是物理性质；灭火、光合作用、制汽水都利用化学性质。" }
    ]
  },
  {
    lesson: 21, title: "物质构成专题复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列粒子中，能直接构成物质的是：", options: ["A. 质子", "B. 中子", "C. 原子", "D. 夸克"], answer: "C", knowledgePoint: "构成物质的微粒", analysis: "原子可以直接构成物质（如金属、稀有气体），质子、中子、夸克不能直接构成物质。" },
      { type: "choice", difficulty: "medium", text: "下列符号中，表示两个氧原子的是：", options: ["A. 2O", "B. O₂", "C. 2O₂", "D. O²⁻"], answer: "A", knowledgePoint: "化学符号", analysis: "2O表示两个氧原子，O₂表示一个氧分子，2O₂表示两个氧分子，O²⁻表示氧离子。" },
      { type: "choice", difficulty: "hard", text: "某元素的原子结构示意图为，该元素位于元素周期表的：", options: ["A. 第一周期", "B. 第二周期", "C. 第三周期", "D. 第四周期"], answer: "B", knowledgePoint: "周期判断", analysis: "原子有两个电子层，位于第二周期。周期数等于电子层数。" }
    ]
  },
  {
    lesson: 22, title: "化学反应专题复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列反应属于化合反应的是：", options: ["A. 2H₂O → 2H₂↑ + O₂↑", "B. CaO + H₂O → Ca(OH)₂", "C. Fe + CuSO₄ → FeSO₄ + Cu", "D. NaOH + HCl → NaCl + H₂O"], answer: "B", knowledgePoint: "反应类型", analysis: "化合反应是多变一，CaO + H₂O → Ca(OH)₂符合化合反应特点。" },
      { type: "choice", difficulty: "medium", text: "下列化学方程式书写正确且配平的是：", options: ["A. Fe + O₂ → Fe₂O₃", "B. 3Fe + 2O₂ → Fe₃O₄", "C. Fe + O₂ → FeO", "D. 2Fe + O₂ → 2FeO"], answer: "B", knowledgePoint: "方程式配平", analysis: "铁在氧气中燃烧生成四氧化三铁，配平后为3Fe + 2O₂ → Fe₃O₄。" },
      { type: "choice", difficulty: "hard", text: "在化学反应中，催化剂的作用是：", options: ["A. 改变反应速率", "B. 改变生成物质量", "C. 改变反应物质量", "D. 改变反应热"], answer: "A", knowledgePoint: "催化剂", analysis: "催化剂只能改变反应速率，不能改变生成物质量，反应前后质量和化学性质不变。" }
    ]
  },
  {
    lesson: 23, title: "综合练习（一）",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列变化中，属于化学变化的是：", options: ["A. 汽油挥发", "B. 铁生锈", "C. 冰雪融化", "D. 玻璃破碎"], answer: "B", knowledgePoint: "化学变化判断", analysis: "铁生锈生成新物质铁锈，是化学变化。" },
      { type: "choice", difficulty: "medium", text: "下列物质中，属于纯净物的是：", options: ["A. 空气", "B. 海水", "C. 冰水混合物", "D. 石油"], answer: "C", knowledgePoint: "纯净物判断", analysis: "冰水混合物只含有水一种物质，是纯净物。" },
      { type: "choice", difficulty: "hard", text: "下列说法正确的是：", options: ["A. 分子是保持物质性质的最小微粒", "B. 原子是化学变化中最小的微粒", "C. 离子是带电的原子", "D. 元素是具有相同电子数的一类原子"], answer: "B", knowledgePoint: "基本概念", analysis: "原子是化学变化中最小的微粒，分子保持化学性质，元素是具有相同质子数的一类原子。" }
    ]
  },
  {
    lesson: 24, title: "综合练习（二）",
    questions: [
      { type: "choice", difficulty: "basic", text: "空气中含量最多的元素是：", options: ["A. 氧", "B. 氮", "C. 碳", "D. 氢"], answer: "B", knowledgePoint: "空气成分", analysis: "空气中氮气含量最多，所以氮元素含量最多。" },
      { type: "choice", difficulty: "medium", text: "下列实验操作正确的是：", options: ["A. 用嘴吹灭酒精灯", "B. 用托盘天平称量时左物右码", "C. 用量筒量取液体时仰视读数", "D. 将试剂瓶盖正放在桌上"], answer: "B", knowledgePoint: "实验操作", analysis: "用托盘天平称量时应左物右码，其余选项操作错误。" },
      { type: "choice", difficulty: "hard", text: "某化合物的化学式为HnRO₂n，则R的化合价为：", options: ["A. +n", "B. +2n", "C. +3n", "D. +4n"], answer: "C", knowledgePoint: "化合价计算", analysis: "H为+1，O为-2，设R化合价为x，则n+x-4n=0，x=+3n。" }
    ]
  },
  {
    lesson: 25, title: "期中考试",
    questions: [
      { type: "choice", difficulty: "basic", text: "考试范围是：", options: ["A. 第1-3章", "B. 第1-6章", "C. 第4-6章", "D. 全学期内容"], answer: "B", knowledgePoint: "考试范围", analysis: "期中考试范围为第1-6章。" },
      { type: "choice", difficulty: "medium", text: "考试时间为：", options: ["A. 60分钟", "B. 90分钟", "C. 120分钟", "D. 150分钟"], answer: "C", knowledgePoint: "考试时间", analysis: "期中考试时间为120分钟。" },
      { type: "choice", difficulty: "hard", text: "下列说法正确的是：", options: ["A. 化学变化一定伴随物理变化", "B. 物理变化一定伴随化学变化", "C. 化学变化与物理变化无关", "D. 以上都不对"], answer: "A", knowledgePoint: "变化关系", analysis: "化学变化一定伴随物理变化（如状态、颜色改变），但物理变化不一定伴随化学变化。" }
    ]
  },
  {
    lesson: 26, title: "燃烧和灭火",
    questions: [
      { type: "choice", difficulty: "basic", text: "灭火的原理是：", options: ["A. 增加可燃物", "B. 增加氧气", "C. 降低温度到着火点以下", "D. 增加着火点"], answer: "C", knowledgePoint: "灭火原理", analysis: "灭火原理是破坏燃烧条件：清除可燃物、隔绝氧气、降低温度到着火点以下。" },
      { type: "choice", difficulty: "medium", text: "下列物质中，不属于易燃易爆物的是：", options: ["A. 酒精", "B. 汽油", "C. 面粉", "D. 食盐"], answer: "D", knowledgePoint: "易燃易爆物", analysis: "食盐不属于易燃易爆物，酒精、汽油、面粉都是易燃易爆物。" },
      { type: "choice", difficulty: "hard", text: "下列关于燃烧的说法错误的是：", options: ["A. 燃烧一定是氧化反应", "B. 燃烧一定放热", "C. 燃烧一定发光", "D. 燃烧一定需要氧气"], answer: "D", knowledgePoint: "燃烧概念", analysis: "燃烧不一定需要氧气，如氢气在氯气中燃烧。" }
    ]
  },
  {
    lesson: 27, title: "燃料和热量",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列属于化石燃料的是：", options: ["A. 氢气", "B. 天然气", "C. 酒精", "D. 太阳能"], answer: "B", knowledgePoint: "化石燃料", analysis: "化石燃料包括煤、石油、天然气，是不可再生能源。" },
      { type: "choice", difficulty: "medium", text: "下列能源中，属于新能源的是：", options: ["A. 煤", "B. 石油", "C. 风能", "D. 天然气"], answer: "C", knowledgePoint: "新能源", analysis: "风能是新能源，煤、石油、天然气是传统能源。" },
      { type: "choice", difficulty: "hard", text: "下列关于化学反应中能量变化的说法正确的是：", options: ["A. 所有反应都放热", "B. 所有反应都吸热", "C. 反应中能量守恒", "D. 放热反应不需要加热"], answer: "C", knowledgePoint: "能量变化", analysis: "化学反应中能量守恒，有的放热有的吸热，放热反应也可能需要加热（如燃烧需要点燃）。" }
    ]
  },
  {
    lesson: 28, title: "使用燃料对环境的影响",
    questions: [
      { type: "choice", difficulty: "basic", text: "酸雨的主要成因是：", options: ["A. 二氧化碳", "B. 二氧化硫", "C. 氮气", "D. 氧气"], answer: "B", knowledgePoint: "酸雨成因", analysis: "酸雨主要由二氧化硫、二氧化氮等气体引起。" },
      { type: "choice", difficulty: "medium", text: "下列不属于汽车尾气污染物的是：", options: ["A. 一氧化碳", "B. 氮氧化物", "C. 二氧化碳", "D. 颗粒物"], answer: "C", knowledgePoint: "尾气污染", analysis: "二氧化碳是温室气体，但不属于汽车尾气污染物（污染物通常指有毒有害气体）。" },
      { type: "choice", difficulty: "hard", text: "绿色化学的核心是：", options: ["A. 减少污染", "B. 消除污染", "C. 从源头消除污染", "D. 治理污染"], answer: "C", knowledgePoint: "绿色化学", analysis: "绿色化学的核心是从源头消除污染，而不是污染后治理。" }
    ]
  },
  {
    lesson: 29, title: "金属材料",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列金属中，导电性最好的是：", options: ["A. 铁", "B. 铜", "C. 银", "D. 铝"], answer: "C", knowledgePoint: "金属性质", analysis: "银的导电性最好，其次是铜、金、铝。" },
      { type: "choice", difficulty: "medium", text: "下列关于合金的说法正确的是：", options: ["A. 合金是纯净物", "B. 合金的硬度一般比纯金属大", "C. 合金的熔点一般比纯金属高", "D. 合金中只含金属元素"], answer: "B", knowledgePoint: "合金性质", analysis: "合金是混合物，硬度一般比纯金属大，熔点一般比纯金属低，可能含有非金属元素（如生铁含碳）。" },
      { type: "choice", difficulty: "hard", text: "下列金属中，属于黑色金属的是：", options: ["A. 铜", "B. 铝", "C. 铁", "D. 金"], answer: "C", knowledgePoint: "金属分类", analysis: "黑色金属主要指铁、锰、铬及其合金，其余为有色金属。" }
    ]
  },
  {
    lesson: 30, title: "金属的化学性质",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列金属中，活动性最强的是：", options: ["A. 铜", "B. 铁", "C. 锌", "D. 镁"], answer: "D", knowledgePoint: "金属活动性", analysis: "金属活动性顺序：K、Ca、Na、Mg、Al、Zn、Fe、Sn、Pb、(H)、Cu、Hg、Ag、Pt、Au，镁的活动性最强。" },
      { type: "choice", difficulty: "medium", text: "下列金属中，不能与稀盐酸反应的是：", options: ["A. 镁", "B. 锌", "C. 铜", "D. 铁"], answer: "C", knowledgePoint: "金属与酸反应", analysis: "铜位于氢之后，不能与稀盐酸反应。" },
      { type: "choice", difficulty: "hard", text: "将铁钉放入硫酸铜溶液中，观察到的现象是：", options: ["A. 铁钉溶解，溶液变蓝", "B. 铁钉表面有红色物质析出，溶液由蓝色变浅绿色", "C. 无明显现象", "D. 产生气泡"], answer: "B", knowledgePoint: "置换反应", analysis: "铁与硫酸铜反应，铁置换出铜，铁钉表面析出红色的铜，溶液由蓝色（硫酸铜）变为浅绿色（硫酸亚铁）。" }
    ]
  },
  {
    lesson: 31, title: "金属资源的利用和保护",
    questions: [
      { type: "choice", difficulty: "basic", text: "工业炼铁的主要原料是：", options: ["A. 铁矿石、焦炭、石灰石", "B. 铁矿石、木炭、石灰石", "C. 铁矿石、一氧化碳、石灰石", "D. 铁矿石、氧气、石灰石"], answer: "A", knowledgePoint: "炼铁原料", analysis: "工业炼铁的主要原料是铁矿石、焦炭、石灰石。" },
      { type: "choice", difficulty: "medium", text: "铁生锈的条件是：", options: ["A. 只需要氧气", "B. 只需要水", "C. 需要氧气和水", "D. 需要二氧化碳"], answer: "C", knowledgePoint: "铁生锈条件", analysis: "铁生锈需要同时接触氧气和水。" },
      { type: "choice", difficulty: "hard", text: "下列防锈措施中，不正确的是：", options: ["A. 保持铁制品干燥", "B. 在铁制品表面涂油", "C. 在铁制品表面刷漆", "D. 将铁制品放在潮湿环境中"], answer: "D", knowledgePoint: "防锈措施", analysis: "潮湿环境会加速铁生锈，不是防锈措施。" }
    ]
  },
  {
    lesson: 32, title: "溶液的形成",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列物质中，属于溶液的是：", options: ["A. 牛奶", "B. 泥水", "C. 糖水", "D. 花生油"], answer: "C", knowledgePoint: "溶液判断", analysis: "糖水是均一、稳定的混合物，属于溶液；牛奶是乳浊液，泥水是悬浊液。" },
      { type: "choice", difficulty: "medium", text: "溶液的基本特征是：", options: ["A. 均一性和稳定性", "B. 不均一和不稳定", "C. 有颜色", "D. 有味道"], answer: "A", knowledgePoint: "溶液特征", analysis: "溶液具有均一性（各部分性质相同）和稳定性（静置不分层）。" },
      { type: "choice", difficulty: "hard", text: "下列物质溶于水时，溶液温度升高的是：", options: ["A. 硝酸铵", "B. 氯化钠", "C. 氢氧化钠", "D. 蔗糖"], answer: "C", knowledgePoint: "溶解热效应", analysis: "氢氧化钠溶于水放热，溶液温度升高；硝酸铵溶于水吸热，溶液温度降低。" }
    ]
  },
  {
    lesson: 33, title: "溶解度",
    questions: [
      { type: "choice", difficulty: "basic", text: "饱和溶液是指：", options: ["A. 浓度很大的溶液", "B. 不能再溶解溶质的溶液", "C. 含有溶质很多的溶液", "D. 固体完全溶解的溶液"], answer: "B", knowledgePoint: "饱和溶液", analysis: "饱和溶液是指在一定温度下，一定量溶剂中不能再溶解某种溶质的溶液。" },
      { type: "choice", difficulty: "medium", text: "影响固体溶解度的主要因素是：", options: ["A. 溶剂的量", "B. 溶质的量", "C. 温度", "D. 搅拌"], answer: "C", knowledgePoint: "溶解度影响因素", analysis: "温度是影响固体溶解度的主要因素，大多数固体溶解度随温度升高而增大。" },
      { type: "choice", difficulty: "hard", text: "20℃时，氯化钠的溶解度为36g，含义是：", options: ["A. 20℃时，100g溶液中含36g氯化钠", "B. 20℃时，100g水中最多溶解36g氯化钠", "C. 20℃时，136g溶液中含36g氯化钠", "D. 20℃时，36g氯化钠溶解在100g水中"], answer: "B", knowledgePoint: "溶解度定义", analysis: "溶解度指一定温度下，100g溶剂中达到饱和时溶解的溶质质量。" }
    ]
  },
  {
    lesson: 34, title: "溶质的质量分数",
    questions: [
      { type: "choice", difficulty: "basic", text: "溶质质量分数的计算公式是：", options: ["A. 溶质质量/溶剂质量×100%", "B. 溶质质量/溶液质量×100%", "C. 溶剂质量/溶液质量×100%", "D. 溶液质量/溶质质量×100%"], answer: "B", knowledgePoint: "质量分数公式", analysis: "溶质质量分数=溶质质量/溶液质量×100%。" },
      { type: "choice", difficulty: "medium", text: "100g水中溶解20g氯化钠，溶质质量分数为：", options: ["A. 20%", "B. 16.7%", "C. 25%", "D. 80%"], answer: "B", knowledgePoint: "质量分数计算", analysis: "溶液质量=100g+20g=120g，质量分数=20/120×100%≈16.7%。" },
      { type: "choice", difficulty: "hard", text: "将100g质量分数为20%的氯化钠溶液稀释到10%，需要加水：", options: ["A. 50g", "B. 100g", "C. 150g", "D. 200g"], answer: "B", knowledgePoint: "溶液稀释", analysis: "溶质质量=100g×20%=20g，稀释后溶液质量=20g/10%=200g，需加水=200g-100g=100g。" }
    ]
  },
  {
    lesson: 35, title: "常见的酸和碱",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列物质中，属于酸的是：", options: ["A. NaCl", "B. HCl", "C. NaOH", "D. CaCO₃"], answer: "B", knowledgePoint: "酸的判断", analysis: "HCl（盐酸）是酸，NaCl是盐，NaOH是碱，CaCO₃是盐。" },
      { type: "choice", difficulty: "medium", text: "酸具有相似化学性质的原因是：", options: ["A. 都含有氢元素", "B. 都含有酸根离子", "C. 都能电离出H⁺", "D. 都能使石蕊变红"], answer: "C", knowledgePoint: "酸的通性", analysis: "酸在水溶液中都能电离出H⁺，这是酸具有相似化学性质的原因。" },
      { type: "choice", difficulty: "hard", text: "下列关于浓硫酸的说法错误的是：", options: ["A. 具有吸水性", "B. 具有腐蚀性", "C. 可直接稀释", "D. 具有脱水性"], answer: "C", knowledgePoint: "浓硫酸性质", analysis: "稀释浓硫酸时应将浓硫酸缓慢倒入水中，不能将水倒入浓硫酸，否则会发生危险。" }
    ]
  },
  {
    lesson: 36, title: "酸和碱的中和反应",
    questions: [
      { type: "choice", difficulty: "basic", text: "中和反应的产物是：", options: ["A. 酸和碱", "B. 盐和水", "C. 酸和盐", "D. 碱和盐"], answer: "B", knowledgePoint: "中和反应产物", analysis: "中和反应：酸+碱→盐+水。" },
      { type: "choice", difficulty: "medium", text: "中和反应的实质是：", options: ["A. H⁺ + OH⁻ → H₂O", "B. H⁺ + Cl⁻ → HCl", "C. Na⁺ + OH⁻ → NaOH", "D. H⁺ + Na⁺ → NaH"], answer: "A", knowledgePoint: "中和反应实质", analysis: "中和反应的实质是H⁺和OH⁻结合生成水。" },
      { type: "choice", difficulty: "hard", text: "下列实际应用中，利用中和反应的是：", options: ["A. 用盐酸除铁锈", "B. 用氢氧化钠吸收二氧化碳", "C. 用熟石灰改良酸性土壤", "D. 用碳酸钠制玻璃"], answer: "C", knowledgePoint: "中和反应应用", analysis: "熟石灰（氢氧化钙）是碱，与土壤中的酸发生中和反应，改良酸性土壤。" }
    ]
  },
  {
    lesson: 37, title: "酸碱性对生命活动的意义",
    questions: [
      { type: "choice", difficulty: "basic", text: "pH=7的溶液是：", options: ["A. 酸性", "B. 碱性", "C. 中性", "D. 强酸性"], answer: "C", knowledgePoint: "pH与酸碱性", analysis: "pH<7为酸性，pH=7为中性，pH>7为碱性。" },
      { type: "choice", difficulty: "medium", text: "正常人体血液的pH范围是：", options: ["A. 6.5-7.0", "B. 7.35-7.45", "C. 7.5-8.0", "D. 8.0-8.5"], answer: "B", knowledgePoint: "人体pH", analysis: "正常人体血液pH为7.35-7.45，呈弱碱性。" },
      { type: "choice", difficulty: "hard", text: "酸雨的pH值通常小于：", options: ["A. 7", "B. 6.5", "C. 5.6", "D. 4"], answer: "C", knowledgePoint: "酸雨定义", analysis: "pH小于5.6的雨水称为酸雨，因为空气中的二氧化碳溶于水形成碳酸，使雨水天然呈弱酸性。" }
    ]
  },
  {
    lesson: 38, title: "生活中常见的盐",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列物质中，俗称纯碱的是：", options: ["A. NaCl", "B. Na₂CO₃", "C. NaHCO₃", "D. CaCO₃"], answer: "B", knowledgePoint: "常见盐", analysis: "碳酸钠俗称纯碱、苏打。" },
      { type: "choice", difficulty: "medium", text: "下列反应属于复分解反应的是：", options: ["A. 2H₂O → 2H₂↑ + O₂↑", "B. Fe + CuSO₄ → FeSO₄ + Cu", "C. NaOH + HCl → NaCl + H₂O", "D. C + O₂ → CO₂"], answer: "C", knowledgePoint: "复分解反应", analysis: "复分解反应是两种化合物相互交换成分生成另外两种化合物的反应。" },
      { type: "choice", difficulty: "hard", text: "复分解反应发生的条件是：", options: ["A. 有沉淀生成", "B. 有气体生成", "C. 有水生成", "D. 以上任意一种"], answer: "D", knowledgePoint: "复分解条件", analysis: "复分解反应发生的条件是有沉淀、气体或水生成。" }
    ]
  },
  {
    lesson: 39, title: "化学肥料",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列肥料中，属于氮肥的是：", options: ["A. KCl", "B. NH₄NO₃", "C. Ca₃(PO₄)₂", "D. K₂SO₄"], answer: "B", knowledgePoint: "氮肥判断", analysis: "NH₄NO₃（硝酸铵）含有氮元素，是氮肥。" },
      { type: "choice", difficulty: "medium", text: "复合肥料是指含有：", options: ["A. 一种营养元素", "B. 两种或两种以上营养元素", "C. 三种营养元素", "D. 四种营养元素"], answer: "B", knowledgePoint: "复合肥定义", analysis: "同时含有两种或两种以上营养元素的肥料称为复合肥料。" },
      { type: "choice", difficulty: "hard", text: "下列关于化肥的说法正确的是：", options: ["A. 化肥越多越好", "B. 化肥可以替代农家肥", "C. 长期使用化肥会导致土壤板结", "D. 化肥都是无机化合物"], answer: "C", knowledgePoint: "化肥使用", analysis: "长期单一使用化肥会破坏土壤结构，导致土壤板结，应与农家肥配合使用。" }
    ]
  },
  {
    lesson: 40, title: "金属与溶液专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列金属中，不能与稀硫酸反应的是：", options: ["A. Mg", "B. Zn", "C. Cu", "D. Fe"], answer: "C", knowledgePoint: "金属活动性", analysis: "铜位于氢之后，不能与稀硫酸反应。" },
      { type: "choice", difficulty: "medium", text: "将锌片放入硫酸铜溶液中，发生的反应是：", options: ["A. 分解反应", "B. 化合反应", "C. 置换反应", "D. 复分解反应"], answer: "C", knowledgePoint: "反应类型", analysis: "锌置换出铜，是置换反应：Zn + CuSO₄ → ZnSO₄ + Cu。" },
      { type: "choice", difficulty: "hard", text: "某溶液中溶质质量分数为20%，则该溶液中溶质与溶剂的质量比为：", options: ["A. 1:4", "B. 1:5", "C. 4:1", "D. 5:1"], answer: "A", knowledgePoint: "质量分数计算", analysis: "溶质20份，溶液100份，溶剂80份，溶质:溶剂=20:80=1:4。" }
    ]
  },
  {
    lesson: 41, title: "酸碱盐专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列物质中，能使石蕊试液变红的是：", options: ["A. 石灰水", "B. 稀盐酸", "C. 氢氧化钠溶液", "D. 食盐水"], answer: "B", knowledgePoint: "酸碱指示剂", analysis: "稀盐酸是酸，能使石蕊试液变红。" },
      { type: "choice", difficulty: "medium", text: "下列物质中，既能与酸反应又能与碱反应的是：", options: ["A. NaCl", "B. Na₂CO₃", "C. CaCO₃", "D. NaOH"], answer: "B", knowledgePoint: "两性物质", analysis: "碳酸钠能与酸反应生成二氧化碳，能与氢氧化钙等碱反应生成沉淀。" },
      { type: "choice", difficulty: "hard", text: "下列各组物质混合后，能发生复分解反应的是：", options: ["A. NaCl和KNO₃", "B. HCl和NaOH", "C. Ag和CuSO₄", "D. CO₂和H₂O"], answer: "B", knowledgePoint: "复分解反应判断", analysis: "HCl和NaOH发生中和反应，属于复分解反应。" }
    ]
  },
  {
    lesson: 42, title: "综合练习（三）",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列变化中，属于物理变化的是：", options: ["A. 食物腐败", "B. 酒精挥发", "C. 钢铁生锈", "D. 纸张燃烧"], answer: "B", knowledgePoint: "物理变化判断", analysis: "酒精挥发只是状态改变，没有新物质生成，是物理变化。" },
      { type: "choice", difficulty: "medium", text: "下列物质中，属于纯净物的是：", options: ["A. 矿泉水", "B. 空气", "C. 冰水混合物", "D. 石油"], answer: "C", knowledgePoint: "纯净物判断", analysis: "冰水混合物只含有水一种物质，是纯净物。" },
      { type: "choice", difficulty: "hard", text: "下列说法正确的是：", options: ["A. 原子是最小的微粒", "B. 分子是保持物质性质的最小微粒", "C. 离子是带电的原子或原子团", "D. 元素是具有相同中子数的一类原子"], answer: "C", knowledgePoint: "基本概念", analysis: "离子是带电的原子或原子团，原子可再分，分子保持化学性质，元素具有相同质子数。" }
    ]
  },
  {
    lesson: 43, title: "综合练习（四）",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列符号中，表示两个氢分子的是：", options: ["A. 2H", "B. H₂", "C. 2H₂", "D. H₂O"], answer: "C", knowledgePoint: "化学符号", analysis: "2H₂表示两个氢分子，2H表示两个氢原子。" },
      { type: "choice", difficulty: "medium", text: "下列化学方程式书写正确的是：", options: ["A. Fe + O₂ → Fe₂O₃", "B. 2H₂O → 2H₂↑ + O₂↑", "C. Mg + O₂ → MgO", "D. C + O₂ → CO₂↑"], answer: "B", knowledgePoint: "方程式书写", analysis: "2H₂O → 2H₂↑ + O₂↑书写正确，其余未配平或多余↑。" },
      { type: "choice", difficulty: "hard", text: "某元素R的化合价为+3价，其氧化物的化学式为：", options: ["A. RO", "B. R₂O₃", "C. RO₃", "D. R₃O₂"], answer: "B", knowledgePoint: "化学式书写", analysis: "氧为-2价，根据化合价代数和为0，(+3)×2 + (-2)×3 = 0，化学式为R₂O₃。" }
    ]
  },
  {
    lesson: 44, title: "第二学期期中考试",
    questions: [
      { type: "choice", difficulty: "basic", text: "考试范围是：", options: ["A. 第1-6章", "B. 第7-12章", "C. 第8-12章", "D. 全学年内容"], answer: "C", knowledgePoint: "考试范围", analysis: "第二学期期中考试范围为第8-12章。" },
      { type: "choice", difficulty: "medium", text: "考试时间为：", options: ["A. 60分钟", "B. 90分钟", "C. 120分钟", "D. 150分钟"], answer: "C", knowledgePoint: "考试时间", analysis: "期中考试时间为120分钟。" },
      { type: "choice", difficulty: "hard", text: "下列关于溶液的说法正确的是：", options: ["A. 溶液一定是无色的", "B. 溶液一定是液体", "C. 溶液是均一稳定的混合物", "D. 溶液中只能有一种溶质"], answer: "C", knowledgePoint: "溶液概念", analysis: "溶液是均一、稳定的混合物，不一定无色，不一定是液体（如空气），可以有多种溶质。" }
    ]
  },
  {
    lesson: 45, title: "实验专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "实验室制取氧气时，收集氧气的方法是：", options: ["A. 向下排空气法", "B. 排水法或向上排空气法", "C. 只能用排水法", "D. 只能用向上排空气法"], answer: "B", knowledgePoint: "氧气收集", analysis: "氧气不易溶于水，密度比空气大，可用排水法或向上排空气法收集。" },
      { type: "choice", difficulty: "medium", text: "检验二氧化碳的方法是：", options: ["A. 用燃着的木条", "B. 用带火星的木条", "C. 通入澄清石灰水", "D. 观察颜色"], answer: "C", knowledgePoint: "CO₂检验", analysis: "二氧化碳能使澄清石灰水变浑浊。" },
      { type: "choice", difficulty: "hard", text: "下列实验操作正确的是：", options: ["A. 用嘴吹灭酒精灯", "B. 实验剩余药品放回原瓶", "C. 加热液体时试管口对着自己", "D. 闻气体时用手扇动"], answer: "D", knowledgePoint: "实验操作", analysis: "闻气体时应用手在瓶口轻轻扇动，使少量气体飘进鼻孔。" }
    ]
  },
  {
    lesson: 46, title: "计算专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "根据化学方程式计算的依据是：", options: ["A. 质量守恒定律", "B. 元素周期律", "C. 原子结构", "D. 物质分类"], answer: "A", knowledgePoint: "计算依据", analysis: "根据化学方程式计算的依据是质量守恒定律。" },
      { type: "choice", difficulty: "medium", text: "2g氢气完全燃烧生成水的质量是：", options: ["A. 18g", "B. 9g", "C. 36g", "D. 2g"], answer: "A", knowledgePoint: "化学计算", analysis: "2H₂ + O₂ → 2H₂O，4g氢气生成36g水，2g氢气生成18g水。" },
      { type: "choice", difficulty: "hard", text: "将50g质量分数为20%的氯化钠溶液稀释到10%，需要加水：", options: ["A. 25g", "B. 50g", "C. 75g", "D. 100g"], answer: "B", knowledgePoint: "溶液稀释", analysis: "溶质质量=50g×20%=10g，稀释后溶液质量=10g/10%=100g，需加水=100g-50g=50g。" }
    ]
  },
  {
    lesson: 47, title: "推断专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "某气体能使澄清石灰水变浑浊，该气体是：", options: ["A. 氧气", "B. 二氧化碳", "C. 氮气", "D. 氢气"], answer: "B", knowledgePoint: "气体推断", analysis: "二氧化碳能使澄清石灰水变浑浊。" },
      { type: "choice", difficulty: "medium", text: "某物质在氧气中燃烧生成二氧化碳和水，该物质一定含有：", options: ["A. 碳元素", "B. 氢元素", "C. 碳和氢元素", "D. 碳、氢、氧元素"], answer: "C", knowledgePoint: "元素推断", analysis: "根据质量守恒定律，生成物中的碳和氢来自反应物，该物质一定含有碳和氢元素。" },
      { type: "choice", difficulty: "hard", text: "某白色固体溶于水，溶液呈碱性，该固体可能是：", options: ["A. NaCl", "B. HCl", "C. NaOH", "D. H₂SO₄"], answer: "C", knowledgePoint: "物质推断", analysis: "NaOH是碱，溶于水呈碱性；NaCl呈中性，HCl和H₂SO₄呈酸性。" }
    ]
  },
  {
    lesson: 48, title: "化学与生活专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列物质中，属于有机合成材料的是：", options: ["A. 棉花", "B. 羊毛", "C. 塑料", "D. 木材"], answer: "C", knowledgePoint: "材料分类", analysis: "塑料是有机合成材料，棉花、羊毛、木材是天然材料。" },
      { type: "choice", difficulty: "medium", text: "下列做法不利于环境保护的是：", options: ["A. 垃圾分类", "B. 使用一次性筷子", "C. 植树造林", "D. 节约用电"], answer: "B", knowledgePoint: "环保措施", analysis: "使用一次性筷子浪费资源，不利于环境保护。" },
      { type: "choice", difficulty: "hard", text: "下列关于化学与健康的说法正确的是：", options: ["A. 微量元素对人体不重要", "B. 维生素可以替代食物", "C. 合理饮食能保证营养均衡", "D. 保健品比食物更有营养"], answer: "C", knowledgePoint: "化学与健康", analysis: "合理饮食能保证营养均衡，微量元素对人体很重要，维生素不能替代食物，保健品不能替代食物。" }
    ]
  },
  {
    lesson: 49, title: "物质构成总复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "原子的构成是：", options: ["A. 质子和电子", "B. 质子、中子和电子", "C. 中子和电子", "D. 原子核和电子"], answer: "D", knowledgePoint: "原子结构", analysis: "原子由原子核和核外电子构成，原子核由质子和中子组成。" },
      { type: "choice", difficulty: "medium", text: "下列关于分子的说法正确的是：", options: ["A. 分子是静止的", "B. 分子之间没有间隔", "C. 分子在不断运动", "D. 分子是构成物质的唯一微粒"], answer: "C", knowledgePoint: "分子特性", analysis: "分子在不断运动，分子之间有间隔，原子、离子也能构成物质。" },
      { type: "choice", difficulty: "hard", text: "化学变化的微观本质是：", options: ["A. 分子的体积改变", "B. 原子的重新组合", "C. 原子种类改变", "D. 分子数目改变"], answer: "B", knowledgePoint: "化学变化本质", analysis: "化学变化的本质是原子的重新组合，原子种类和数目不变。" }
    ]
  },
  {
    lesson: 50, title: "化学反应总复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列反应属于分解反应的是：", options: ["A. CaO + H₂O → Ca(OH)₂", "B. 2H₂O → 2H₂↑ + O₂↑", "C. Fe + CuSO₄ → FeSO₄ + Cu", "D. NaOH + HCl → NaCl + H₂O"], answer: "B", knowledgePoint: "反应类型", analysis: "分解反应是一变多，2H₂O → 2H₂↑ + O₂↑符合分解反应特点。" },
      { type: "choice", difficulty: "medium", text: "化学方程式配平的原则是：", options: ["A. 分子数相等", "B. 原子数相等", "C. 元素种类相同", "D. 质量相等"], answer: "B", knowledgePoint: "方程式配平", analysis: "配平化学方程式的原则是反应前后每种原子的数目相等。" },
      { type: "choice", difficulty: "hard", text: "在化学反应中，催化剂：", options: ["A. 改变反应热", "B. 改变反应速率", "C. 改变生成物质量", "D. 改变反应物质量"], answer: "B", knowledgePoint: "催化剂", analysis: "催化剂只能改变反应速率，不能改变生成物质量。" }
    ]
  },
  {
    lesson: 51, title: "常见物质总复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列物质中，属于纯净物的是：", options: ["A. 空气", "B. 海水", "C. 蒸馏水", "D. 石油"], answer: "C", knowledgePoint: "纯净物判断", analysis: "蒸馏水只含有水一种物质，是纯净物。" },
      { type: "choice", difficulty: "medium", text: "下列关于氧气的说法正确的是：", options: ["A. 氧气能燃烧", "B. 氧气能支持燃烧", "C. 氧气是无色无味的固体", "D. 氧气密度比空气小"], answer: "B", knowledgePoint: "氧气性质", analysis: "氧气能支持燃烧（助燃性），但本身不能燃烧。" },
      { type: "choice", difficulty: "hard", text: "下列关于二氧化碳的用途错误的是：", options: ["A. 灭火", "B. 人工降雨", "C. 供给呼吸", "D. 制汽水"], answer: "C", knowledgePoint: "CO₂用途", analysis: "二氧化碳不能供给呼吸，氧气才能供给呼吸。" }
    ]
  },
  {
    lesson: 52, title: "实验与探究总复习",
    questions: [
      { type: "choice", difficulty: "basic", text: "实验室制取氧气的药品是：", options: ["A. 过氧化氢和二氧化锰", "B. 碳酸钙和稀盐酸", "C. 锌和稀硫酸", "D. 氯化钠和水"], answer: "A", knowledgePoint: "制氧药品", analysis: "实验室常用过氧化氢和二氧化锰制取氧气。" },
      { type: "choice", difficulty: "medium", text: "检验氧气的方法是：", options: ["A. 用燃着的木条", "B. 用带火星的木条", "C. 通入澄清石灰水", "D. 观察颜色"], answer: "B", knowledgePoint: "氧气检验", analysis: "带火星的木条在氧气中会复燃。" },
      { type: "choice", difficulty: "hard", text: "下列实验操作正确的是：", options: ["A. 加热固体时试管口向上", "B. 实验剩余药品放回原瓶", "C. 闻气体时用手扇动", "D. 用嘴吹灭酒精灯"], answer: "C", knowledgePoint: "实验操作", analysis: "闻气体时应用手在瓶口轻轻扇动。" }
    ]
  },
  {
    lesson: 53, title: "易错点辨析",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列说法正确的是：", options: ["A. 原子是最小的微粒", "B. 分子是保持物质化学性质的最小微粒", "C. 离子是不带电的", "D. 元素是具有相同中子数的一类原子"], answer: "B", knowledgePoint: "基本概念", analysis: "分子是保持物质化学性质的最小微粒。" },
      { type: "choice", difficulty: "medium", text: "下列符号中，表示两个氧原子的是：", options: ["A. O₂", "B. 2O", "C. 2O₂", "D. O²⁻"], answer: "B", knowledgePoint: "化学符号", analysis: "2O表示两个氧原子，O₂表示一个氧分子。" },
      { type: "choice", difficulty: "hard", text: "下列关于质量守恒定律的说法正确的是：", options: ["A. 反应前后分子数目不变", "B. 反应前后原子数目不变", "C. 反应前后物质种类不变", "D. 反应前后元素种类改变"], answer: "B", knowledgePoint: "质量守恒", analysis: "质量守恒定律的微观解释是反应前后原子种类、数目、质量都不变。" }
    ]
  },
  {
    lesson: 54, title: "模拟考试（一）",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列变化属于化学变化的是：", options: ["A. 玻璃破碎", "B. 纸张燃烧", "C. 冰雪融化", "D. 酒精挥发"], answer: "B", knowledgePoint: "化学变化判断", analysis: "纸张燃烧生成新物质，是化学变化。" },
      { type: "choice", difficulty: "medium", text: "下列物质中，属于氧化物的是：", options: ["A. NaCl", "B. H₂O", "C. H₂SO₄", "D. NaOH"], answer: "B", knowledgePoint: "氧化物判断", analysis: "氧化物是由两种元素组成，其中一种是氧元素的化合物。" },
      { type: "choice", difficulty: "hard", text: "下列化学方程式书写正确的是：", options: ["A. Fe + O₂ → Fe₂O₃", "B. 2H₂O → 2H₂↑ + O₂↑", "C. Mg + O₂ → MgO₂", "D. C + O₂ → CO"], answer: "B", knowledgePoint: "方程式书写", analysis: "2H₂O → 2H₂↑ + O₂↑书写正确。" }
    ]
  },
  {
    lesson: 55, title: "模拟考试（二）",
    questions: [
      { type: "choice", difficulty: "basic", text: "空气中含量最多的气体是：", options: ["A. 氧气", "B. 氮气", "C. 二氧化碳", "D. 稀有气体"], answer: "B", knowledgePoint: "空气成分", analysis: "氮气约占空气体积的78%。" },
      { type: "choice", difficulty: "medium", text: "下列金属中，活动性最强的是：", options: ["A. 铜", "B. 铁", "C. 锌", "D. 镁"], answer: "D", knowledgePoint: "金属活动性", analysis: "镁的活动性最强。" },
      { type: "choice", difficulty: "hard", text: "某溶液的pH=3，该溶液呈：", options: ["A. 酸性", "B. 碱性", "C. 中性", "D. 无法判断"], answer: "A", knowledgePoint: "pH与酸碱性", analysis: "pH<7为酸性。" }
    ]
  },
  {
    lesson: 56, title: "考前答疑",
    questions: [
      { type: "choice", difficulty: "basic", text: "期末考试范围是：", options: ["A. 第1-6章", "B. 第7-12章", "C. 全学年内容", "D. 第10-12章"], answer: "C", knowledgePoint: "考试范围", analysis: "期末考试范围为全学年内容。" },
      { type: "choice", difficulty: "medium", text: "考试时间为：", options: ["A. 90分钟", "B. 120分钟", "C. 150分钟", "D. 60分钟"], answer: "B", knowledgePoint: "考试时间", analysis: "期末考试时间为120分钟。" },
      { type: "choice", difficulty: "hard", text: "下列关于考试的说法正确的是：", options: ["A. 只考选择题", "B. 只考填空题", "C. 包含多种题型", "D. 开卷考试"], answer: "C", knowledgePoint: "考试形式", analysis: "期末考试包含选择题、填空题、实验题、计算题等多种题型。" }
    ]
  },
  {
    lesson: 57, title: "期末考试",
    questions: [
      { type: "choice", difficulty: "basic", text: "考试范围是：", options: ["A. 第一学期内容", "B. 第二学期内容", "C. 全学年内容", "D. 随机抽取"], answer: "C", knowledgePoint: "考试范围", analysis: "期末考试范围为全学年内容。" },
      { type: "choice", difficulty: "medium", text: "考试题型包括：", options: ["A. 只有选择题", "B. 只有填空题", "C. 选择题、填空题、实验题、计算题", "D. 只有判断题"], answer: "C", knowledgePoint: "考试题型", analysis: "期末考试包含多种题型。" },
      { type: "choice", difficulty: "hard", text: "下列说法正确的是：", options: ["A. 化学是研究物质的科学", "B. 化学只研究有机物", "C. 化学与生活无关", "D. 化学不需要实验"], answer: "A", knowledgePoint: "化学概念", analysis: "化学是研究物质的组成、结构、性质以及变化规律的科学。" }
    ]
  },
  {
    lesson: 58, title: "成绩分析与总结",
    questions: [
      { type: "choice", difficulty: "basic", text: "成绩分析的目的是：", options: ["A. 批评学生", "B. 了解学习情况", "C. 排名次", "D. 惩罚学生"], answer: "B", knowledgePoint: "成绩分析", analysis: "成绩分析的目的是了解学习情况，找出不足。" },
      { type: "choice", difficulty: "medium", text: "下列关于学习化学的方法正确的是：", options: ["A. 死记硬背", "B. 理解概念", "C. 只看课本", "D. 不做实验"], answer: "B", knowledgePoint: "学习方法", analysis: "学习化学应理解概念，结合实验。" },
      { type: "choice", difficulty: "hard", text: "化学与魔药学的关系是：", options: ["A. 完全相同", "B. 毫无关系", "C. 有相似之处", "D. 互相矛盾"], answer: "C", knowledgePoint: "跨学科联系", analysis: "化学和魔药学都研究物质的性质和转化，有相似之处。" }
    ]
  },
  {
    lesson: 59, title: "化学与魔药学",
    questions: [
      { type: "choice", difficulty: "basic", text: "化学与魔药学的相似之处是：", options: ["A. 都使用魔法", "B. 都研究物质变化", "C. 都不需要实验", "D. 都只研究生物"], answer: "B", knowledgePoint: "跨学科联系", analysis: "化学和魔药学都研究物质的性质和变化。" },
      { type: "choice", difficulty: "medium", text: "下列说法正确的是：", options: ["A. 魔药学完全替代化学", "B. 化学完全替代魔药学", "C. 两者可以相互借鉴", "D. 两者互相排斥"], answer: "C", knowledgePoint: "学科关系", analysis: "化学和魔药学可以相互借鉴，共同发展。" },
      { type: "choice", difficulty: "hard", text: "从化学角度看，魔药配制过程涉及：", options: ["A. 只有物理变化", "B. 只有化学变化", "C. 物理变化和化学变化", "D. 既无物理变化也无化学变化"], answer: "C", knowledgePoint: "变化类型", analysis: "魔药配制过程中既有物质混合（物理变化），也有物质转化（化学变化）。" }
    ]
  },
  {
    lesson: 60, title: "化学实验设计",
    questions: [
      { type: "choice", difficulty: "basic", text: "实验设计的第一步是：", options: ["A. 进行实验", "B. 提出问题", "C. 得出结论", "D. 记录数据"], answer: "B", knowledgePoint: "实验设计", analysis: "实验设计的第一步是提出问题。" },
      { type: "choice", difficulty: "medium", text: "实验设计应遵循的原则是：", options: ["A. 随意设计", "B. 单一变量", "C. 多个变量同时改变", "D. 不设对照组"], answer: "B", knowledgePoint: "实验原则", analysis: "实验设计应遵循单一变量原则，便于得出结论。" },
      { type: "choice", difficulty: "hard", text: "下列关于实验安全的说法正确的是：", options: ["A. 可以随意混合试剂", "B. 实验后不用清洗仪器", "C. 遵守操作规程", "D. 可以品尝化学药品"], answer: "C", knowledgePoint: "实验安全", analysis: "实验时应遵守操作规程，确保安全。" }
    ]
  },
  {
    lesson: 61, title: "化学史",
    questions: [
      { type: "choice", difficulty: "basic", text: "提出原子论的科学家是：", options: ["A. 道尔顿", "B. 阿伏伽德罗", "C. 门捷列夫", "D. 拉瓦锡"], answer: "A", knowledgePoint: "化学史", analysis: "道尔顿提出了原子论。" },
      { type: "choice", difficulty: "medium", text: "发现元素周期律的科学家是：", options: ["A. 道尔顿", "B. 阿伏伽德罗", "C. 门捷列夫", "D. 拉瓦锡"], answer: "C", knowledgePoint: "化学史", analysis: "门捷列夫发现了元素周期律。" },
      { type: "choice", difficulty: "hard", text: "下列关于化学史的说法正确的是：", options: ["A. 化学是现代才出现的", "B. 古代没有化学知识", "C. 化学知识是逐步积累的", "D. 化学是由一位科学家创立的"], answer: "C", knowledgePoint: "化学发展", analysis: "化学知识是经过漫长的历史逐步积累起来的。" }
    ]
  },
  {
    lesson: 62, title: "化学竞赛基础",
    questions: [
      { type: "choice", difficulty: "basic", text: "化学竞赛的目的是：", options: ["A. 淘汰学生", "B. 激发兴趣", "C. 增加负担", "D. 浪费时间"], answer: "B", knowledgePoint: "竞赛目的", analysis: "化学竞赛的目的是激发学生对化学的兴趣。" },
      { type: "choice", difficulty: "medium", text: "参加化学竞赛需要：", options: ["A. 只靠记忆", "B. 理解和应用", "C. 不做练习", "D. 不看课本"], answer: "B", knowledgePoint: "竞赛准备", analysis: "参加化学竞赛需要理解概念并能灵活应用。" },
      { type: "choice", difficulty: "hard", text: "下列关于竞赛的说法正确的是：", options: ["A. 竞赛成绩最重要", "B. 参与过程更重要", "C. 只关注结果", "D. 不需要团队合作"], answer: "B", knowledgePoint: "竞赛态度", analysis: "参与竞赛的过程比结果更重要，能学到很多知识。" }
    ]
  },
  {
    lesson: 63, title: "寒假作业指导",
    questions: [
      { type: "choice", difficulty: "basic", text: "寒假作业的目的是：", options: ["A. 惩罚学生", "B. 巩固知识", "C. 浪费时间", "D. 增加负担"], answer: "B", knowledgePoint: "作业目的", analysis: "寒假作业的目的是巩固所学知识。" },
      { type: "choice", difficulty: "medium", text: "完成作业的正确方法是：", options: ["A. 开学前一天完成", "B. 每天安排一点时间", "C. 不做", "D. 抄袭"], answer: "B", knowledgePoint: "作业方法", analysis: "完成作业应每天安排一点时间，循序渐进。" },
      { type: "choice", difficulty: "hard", text: "下列关于假期学习的说法正确的是：", options: ["A. 完全不学习", "B. 每天学习12小时", "C. 合理安排时间", "D. 只玩不学习"], answer: "C", knowledgePoint: "学习安排", analysis: "假期应合理安排学习和休息时间。" }
    ]
  },
  {
    lesson: 64, title: "暑假作业指导",
    questions: [
      { type: "choice", difficulty: "basic", text: "暑假作业的目的是：", options: ["A. 让学生忙碌", "B. 巩固知识", "C. 浪费时间", "D. 惩罚学生"], answer: "B", knowledgePoint: "作业目的", analysis: "暑假作业的目的是巩固所学知识，为下学期做准备。" },
      { type: "choice", difficulty: "medium", text: "暑假学习的正确态度是：", options: ["A. 完全不学习", "B. 劳逸结合", "C. 每天学习12小时", "D. 只玩不学习"], answer: "B", knowledgePoint: "学习态度", analysis: "暑假学习应劳逸结合，合理安排。" },
      { type: "choice", difficulty: "hard", text: "下列关于暑假的说法正确的是：", options: ["A. 暑假只是用来玩的", "B. 暑假只是用来学习的", "C. 暑假是放松和学习相结合的", "D. 暑假不需要做作业"], answer: "C", knowledgePoint: "假期意义", analysis: "暑假是放松和学习相结合的好时机。" }
    ]
  },
  {
    lesson: 65, title: "化学实践活动",
    questions: [
      { type: "choice", difficulty: "basic", text: "化学实践活动的目的是：", options: ["A. 浪费时间", "B. 应用知识", "C. 玩耍", "D. 逃避学习"], answer: "B", knowledgePoint: "实践目的", analysis: "化学实践活动的目的是将所学知识应用到实际中。" },
      { type: "choice", difficulty: "medium", text: "下列属于化学实践活动的是：", options: ["A. 看电影", "B. 做化学实验", "C. 打篮球", "D. 玩游戏"], answer: "B", knowledgePoint: "实践形式", analysis: "做化学实验是化学实践活动的重要形式。" },
      { type: "choice", difficulty: "hard", text: "实践活动中应注意：", options: ["A. 随意操作", "B. 遵守安全规则", "C. 不记录数据", "D. 不做总结"], answer: "B", knowledgePoint: "实践安全", analysis: "实践活动中应遵守安全规则，确保安全。" }
    ]
  },
  {
    lesson: 66, title: "学习方法分享",
    questions: [
      { type: "choice", difficulty: "basic", text: "学习化学的基本方法是：", options: ["A. 死记硬背", "B. 理解记忆", "C. 不做练习", "D. 不看课本"], answer: "B", knowledgePoint: "学习方法", analysis: "学习化学应理解记忆，而不是死记硬背。" },
      { type: "choice", difficulty: "medium", text: "做好笔记的重要性是：", options: ["A. 浪费时间", "B. 帮助复习", "C. 没有用", "D. 应付老师"], answer: "B", knowledgePoint: "笔记作用", analysis: "做好笔记有助于复习和巩固知识。" },
      { type: "choice", difficulty: "hard", text: "下列关于学习的说法正确的是：", options: ["A. 只靠老师教", "B. 主动学习", "C. 不提问", "D. 不思考"], answer: "B", knowledgePoint: "学习态度", analysis: "学习应主动，积极思考，善于提问。" }
    ]
  },
  {
    lesson: 67, title: "新学期展望",
    questions: [
      { type: "choice", difficulty: "basic", text: "新学期学习计划的重要性是：", options: ["A. 没有用", "B. 指导学习", "C. 浪费时间", "D. 应付任务"], answer: "B", knowledgePoint: "计划作用", analysis: "新学期学习计划能指导学习，提高效率。" },
      { type: "choice", difficulty: "medium", text: "制定学习计划应：", options: ["A. 不切实际", "B. 合理可行", "C. 过于严格", "D. 不执行"], answer: "B", knowledgePoint: "计划制定", analysis: "学习计划应合理可行，便于执行。" },
      { type: "choice", difficulty: "hard", text: "下列关于新学期的说法正确的是：", options: ["A. 继续旧的学习方法", "B. 改进学习方法", "C. 不设定目标", "D. 不努力学习"], answer: "B", knowledgePoint: "学习改进", analysis: "新学期应总结经验，改进学习方法。" }
    ]
  }
];
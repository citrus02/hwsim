/**
 * chemistry-questionBank.js
 * 麻瓜学术 · 化学 · 题库
 * 每课 3 题（难度 1/2/3），共 210 题
 * 教授：普里姆罗斯·斯普劳特
 */

export const questionBank = [

  // ── 第1章 物质的基础 ──────────────────────────────────────────

  { lesson: 1, questions: [
    { type:'choice', difficulty:1, text:'下列哪个是元素符号？', options:['A. H₂O','B. NaCl','C. Fe','D. CO₂'], answer:'C', knowledgePoint:'元素符号', analysis:'Fe是铁的元素符号，其他都是化合物的化学式。' },
    { type:'choice', difficulty:2, text:'元素周期表中，原子序数等于什么？', options:['A. 质子数','B. 中子数','C. 电子数','D. 质量数'], answer:'A', knowledgePoint:'原子序数', analysis:'原子序数等于原子核中的质子数，也等于中性原子的核外电子数。' },
    { type:'choice', difficulty:3, text:'魔药材料"凤凰羽毛"的主要元素成分最可能是？', options:['A. 金和碳','B. 氢和氧','C. 铁和铜','D. 硅和铝'], answer:'A', knowledgePoint:'元素与魔药材料', analysis:'羽毛主要由蛋白质构成（含碳、氢、氧、氮），凤凰羽毛可能含有稀有元素如金。' }
  ]},

  { lesson: 2, questions: [
    { type:'choice', difficulty:1, text:'原子的中心是什么？', options:['A. 电子','B. 原子核','C. 质子','D. 中子'], answer:'B', knowledgePoint:'原子结构', analysis:'原子由中心的原子核和核外电子构成。' },
    { type:'choice', difficulty:2, text:'下列关于原子的说法正确的是？', options:['A. 质子带负电','B. 电子带正电','C. 中子不带电','D. 原子核带负电'], answer:'C', knowledgePoint:'原子构成', analysis:'质子带正电，电子带负电，中子不带电，原子核带正电。' },
    { type:'choice', difficulty:3, text:'若某原子质子数为8，中子数为8，则原子质量约为？', options:['A. 8','B. 16','C. 24','D. 32'], answer:'B', knowledgePoint:'原子质量', analysis:'原子质量≈质子数+中子数=8+8=16。' }
  ]},

  { lesson: 3, questions: [
    { type:'choice', difficulty:1, text:'元素周期表中，横行称为？', options:['A. 族','B. 周期','C. 区','D. 组'], answer:'B', knowledgePoint:'周期与族', analysis:'元素周期表的横行称为周期，纵列称为族。' },
    { type:'choice', difficulty:2, text:'同一周期元素的什么性质具有规律性变化？', options:['A. 原子质量','B. 电子层数','C. 最外层电子数','D. 中子数'], answer:'C', knowledgePoint:'周期规律', analysis:'同一周期元素从左到右，最外层电子数从1递增到8（稀有气体除外）。' },
    { type:'choice', difficulty:3, text:'下列元素中，金属性最强的是？', options:['A. Na','B. Mg','C. Al','D. Si'], answer:'A', knowledgePoint:'元素性质周期性', analysis:'同一周期从左到右金属性减弱，Na在最左边，金属性最强。' }
  ]},

  { lesson: 4, questions: [
    { type:'choice', difficulty:1, text:'水的化学式是？', options:['A. H₂O','B. CO₂','C. NaCl','D. H₂'], answer:'A', knowledgePoint:'化学式', analysis:'水由两个氢原子和一个氧原子构成，化学式为H₂O。' },
    { type:'choice', difficulty:2, text:'氯化钠（NaCl）中，钠的化合价是？', options:['A. -1','B. +1','C. +2','D. -2'], answer:'B', knowledgePoint:'化合价', analysis:'钠是第1族元素，通常显+1价；氯是第17族元素，通常显-1价。' },
    { type:'choice', difficulty:3, text:'硫酸铝的化学式正确的是？', options:['A. AlSO₄','B. Al₂(SO₄)₃','C. Al₃(SO₄)₂','D. Al₂SO₄'], answer:'B', knowledgePoint:'化学式书写', analysis:'Al³+与SO₄²-结合，需2个Al³+和3个SO₄²-使电荷平衡。' }
  ]},

  { lesson: 5, questions: [
    { type:'choice', difficulty:1, text:'1摩尔水的质量约为？', options:['A. 1g','B. 18g','C. 36g','D. 10g'], answer:'B', knowledgePoint:'摩尔质量', analysis:'水的摩尔质量=2×1+16=18g/mol。' },
    { type:'choice', difficulty:2, text:'阿伏伽德罗常数约为？', options:['A. 6.02×10²³','B. 6.02×10²⁰','C. 6.02×10¹⁰','D. 6.02×10³'], answer:'A', knowledgePoint:'阿伏伽德罗常数', analysis:'1摩尔任何物质含有约6.02×10²³个粒子。' },
    { type:'choice', difficulty:3, text:'配制含2摩尔NaCl的溶液，需要NaCl多少克？', options:['A. 58.5g','B. 117g','C. 234g','D. 29.25g'], answer:'B', knowledgePoint:'摩尔计算', analysis:'NaCl摩尔质量=23+35.5=58.5g/mol，2mol×58.5g/mol=117g。' }
  ]},

  // ── 第2章 化学反应入门 ──────────────────────────────────────────

  { lesson: 6, questions: [
    { type:'choice', difficulty:1, text:'下列变化属于化学变化的是？', options:['A. 冰融化','B. 铁生锈','C. 玻璃破碎','D. 酒精挥发'], answer:'B', knowledgePoint:'化学变化判断', analysis:'铁生锈生成新物质铁锈，属于化学变化；其他都是物理变化。' },
    { type:'choice', difficulty:2, text:'质量守恒定律说明化学反应前后什么不变？', options:['A. 物质种类','B. 分子种类','C. 原子种类和数目','D. 分子数目'], answer:'C', knowledgePoint:'质量守恒定律', analysis:'化学反应前后原子的种类、数目和质量都不变。' },
    { type:'choice', difficulty:3, text:'魔药调制过程中，将曼德拉草汁液与月光草混合，发生的是？', options:['A. 物理混合','B. 化学变化','C. 既不是物理也不是化学','D. 可能是化学变化'], answer:'D', knowledgePoint:'魔药中的变化', analysis:'魔药调制可能涉及物理混合也可能涉及化学反应，取决于材料和配方。' }
  ]},

  { lesson: 7, questions: [
    { type:'choice', difficulty:1, text:'化学方程式2H₂ + O₂ → 2H₂O表示什么？', options:['A. 氢和氧混合','B. 氢气燃烧生成水','C. 水分解','D. 氢气和氧气共存'], answer:'B', knowledgePoint:'化学方程式', analysis:'该方程式表示氢气在氧气中燃烧生成水。' },
    { type:'choice', difficulty:2, text:'配平方程式：__Fe + __O₂ → __Fe₂O₃，正确的系数是？', options:['A. 1,1,1','B. 2,1,1','C. 4,3,2','D. 3,2,1'], answer:'C', knowledgePoint:'方程式配平', analysis:'4Fe + 3O₂ → 2Fe₂O₃，反应前后原子数相等。' },
    { type:'choice', difficulty:3, text:'下列方程式书写正确的是？', options:['A. H₂ + O₂ → H₂O','B. 2H₂O → 2H₂ + O₂','C. Fe + CuSO₄ → FeSO₄ + Cu','D. NaOH + HCl → NaCl + H₂'], answer:'C', knowledgePoint:'方程式书写', analysis:'Fe + CuSO₄ → FeSO₄ + Cu是正确的置换反应方程式。' }
  ]},

  { lesson: 8, questions: [
    { type:'choice', difficulty:1, text:'碳燃烧生成二氧化碳是什么反应类型？', options:['A. 分解反应','B. 合成反应','C. 置换反应','D. 复分解反应'], answer:'B', knowledgePoint:'合成反应', analysis:'C + O₂ → CO₂是两种物质生成一种物质的合成反应。' },
    { type:'choice', difficulty:2, text:'下列属于分解反应的是？', options:['A. CaO + H₂O → Ca(OH)₂','B. 2H₂O → 2H₂ + O₂','C. Fe + CuSO₄ → FeSO₄ + Cu','D. NaOH + HCl → NaCl + H₂O'], answer:'B', knowledgePoint:'分解反应', analysis:'水分解生成氢气和氧气，是一种物质生成多种物质的分解反应。' },
    { type:'choice', difficulty:3, text:'光合作用6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂是什么类型的反应？', options:['A. 简单合成','B. 分解','C. 复杂合成反应','D. 置换'], answer:'C', knowledgePoint:'光合作用的反应类型', analysis:'光合作用是复杂的合成反应，将无机物转化为有机物。' }
  ]},

  { lesson: 9, questions: [
    { type:'choice', difficulty:1, text:'铁能从硫酸铜溶液中置换出铜，说明铁比铜？', options:['A. 更不活泼','B. 更活泼','C. 一样活泼','D. 无法判断'], answer:'B', knowledgePoint:'金属活动性', analysis:'活泼金属能置换出不活泼金属，说明铁比铜活泼。' },
    { type:'choice', difficulty:2, text:'下列金属中，不能与稀盐酸反应的是？', options:['A. Mg','B. Zn','C. Fe','D. Cu'], answer:'D', knowledgePoint:'金属与酸反应', analysis:'铜位于金属活动性顺序表中氢之后，不能与稀盐酸反应。' },
    { type:'choice', difficulty:3, text:'将锌片放入硝酸银溶液中，观察到的现象是？', options:['A. 无变化','B. 锌片表面有银白色物质析出','C. 锌片溶解，有气体产生','D. 溶液变蓝色'], answer:'B', knowledgePoint:'置换反应现象', analysis:'锌比银活泼，能置换出银，锌片表面会析出银白色的银。' }
  ]},

  { lesson: 10, questions: [
    { type:'choice', difficulty:1, text:'升高温度通常会使反应速率？', options:['A. 减慢','B. 加快','C. 不变','D. 先快后慢'], answer:'B', knowledgePoint:'温度对速率的影响', analysis:'升高温度使分子运动加快，碰撞频率增加，反应速率加快。' },
    { type:'choice', difficulty:2, text:'催化剂的作用是？', options:['A. 改变反应速率','B. 改变反应物量','C. 改变生成物量','D. 改变反应热'], answer:'A', knowledgePoint:'催化剂', analysis:'催化剂能改变反应速率，但反应前后自身质量和化学性质不变。' },
    { type:'choice', difficulty:3, text:'下列关于催化剂的说法正确的是？', options:['A. 催化剂不参与反应','B. 催化剂只加快反应速率','C. 催化剂降低反应活化能','D. 催化剂改变平衡位置'], answer:'C', knowledgePoint:'催化原理', analysis:'催化剂通过降低反应活化能来改变反应速率。' }
  ]},

  // ── 第3章 物质的状态 ──────────────────────────────────────────

  { lesson: 11, questions: [
    { type:'choice', difficulty:1, text:'水结冰是什么变化？', options:['A. 化学变化','B. 物理变化','C. 核变化','D. 相变'], answer:'B', knowledgePoint:'状态变化', analysis:'水结冰只是状态从液态变为固态，没有新物质生成，是物理变化。' },
    { type:'choice', difficulty:2, text:'物质从固态直接变为气态叫什么？', options:['A. 蒸发','B. 凝固','C. 升华','D. 凝华'], answer:'C', knowledgePoint:'升华', analysis:'物质从固态直接变为气态称为升华，如干冰升华。' },
    { type:'choice', difficulty:3, text:'下列物质中，沸点最高的是？', options:['A. 氢气','B. 氧气','C. 氮气','D. 水'], answer:'D', knowledgePoint:'沸点比较', analysis:'水的沸点是100°C，远高于氢气、氧气和氮气。' }
  ]},

  { lesson: 12, questions: [
    { type:'choice', difficulty:1, text:'波义耳定律描述的是气体的什么关系？', options:['A. 温度与体积','B. 压强与体积','C. 压强与温度','D. 质量与体积'], answer:'B', knowledgePoint:'波义耳定律', analysis:'波义耳定律：温度不变时，气体压强与体积成反比。' },
    { type:'choice', difficulty:2, text:'理想气体状态方程是？', options:['A. PV=nRT','B. P=nRT/V','C. V=nRT/P','D. 以上都对'], answer:'A', knowledgePoint:'理想气体定律', analysis:'理想气体状态方程为PV=nRT。' },
    { type:'choice', difficulty:3, text:'在标准状况下，1摩尔气体的体积约为？', options:['A. 22.4L','B. 24.5L','C. 11.2L','D. 44.8L'], answer:'A', knowledgePoint:'气体摩尔体积', analysis:'标准状况下（0°C，1atm），1摩尔任何理想气体体积约为22.4L。' }
  ]},

  { lesson: 13, questions: [
    { type:'choice', difficulty:1, text:'饱和溶液是指？', options:['A. 浓度很大的溶液','B. 不能再溶解溶质的溶液','C. 含有固体溶质的溶液','D. 浓溶液'], answer:'B', knowledgePoint:'饱和溶液', analysis:'饱和溶液是指在一定温度下，一定量溶剂中不能再溶解某种溶质的溶液。' },
    { type:'choice', difficulty:2, text:'固体物质的溶解度通常随温度升高而？', options:['A. 增大','B. 减小','C. 不变','D. 无法确定'], answer:'A', knowledgePoint:'溶解度与温度', analysis:'大多数固体物质的溶解度随温度升高而增大。' },
    { type:'choice', difficulty:3, text:'20°C时，NaCl溶解度为36g，含义是？', options:['A. 20°C时，100g溶液含36g NaCl','B. 20°C时，100g水最多溶解36g NaCl','C. 20°C时，136g溶液含36g NaCl','D. 20°C时，36g NaCl溶解在100g水中'], answer:'B', knowledgePoint:'溶解度定义', analysis:'溶解度指一定温度下，100g溶剂中达到饱和时溶解的溶质质量。' }
  ]},

  { lesson: 14, questions: [
    { type:'choice', difficulty:1, text:'溶质质量分数的计算公式是？', options:['A. 溶质/溶剂×100%','B. 溶质/溶液×100%','C. 溶剂/溶液×100%','D. 溶液/溶质×100%'], answer:'B', knowledgePoint:'质量分数', analysis:'溶质质量分数=溶质质量/溶液质量×100%。' },
    { type:'choice', difficulty:2, text:'50g水中溶解10g NaCl，溶质质量分数是？', options:['A. 20%','B. 16.7%','C. 25%','D. 10%'], answer:'B', knowledgePoint:'质量分数计算', analysis:'溶液质量=50+10=60g，质量分数=10/60×100%≈16.7%。' },
    { type:'choice', difficulty:3, text:'将100g 20%的溶液稀释到10%，需要加水？', options:['A. 50g','B. 100g','C. 150g','D. 200g'], answer:'B', knowledgePoint:'溶液稀释', analysis:'溶质质量=20g，稀释后溶液质量=20/10%=200g，需加水100g。' }
  ]},

  { lesson: 15, questions: [
    { type:'choice', difficulty:1, text:'下列属于胶体的是？', options:['A. 泥水','B. 牛奶','C. 糖水','D. 盐水'], answer:'B', knowledgePoint:'胶体', analysis:'牛奶是乳浊液，属于胶体范畴；泥水是悬浊液，糖水和盐水是真溶液。' },
    { type:'choice', difficulty:2, text:'丁达尔效应可以区分？', options:['A. 溶液和胶体','B. 胶体和悬浊液','C. 溶液和悬浊液','D. 纯净物和混合物'], answer:'A', knowledgePoint:'丁达尔效应', analysis:'丁达尔效应是胶体特有的性质，可用于区分溶液和胶体。' },
    { type:'choice', difficulty:3, text:'胶体粒子的直径范围是？', options:['A. <1nm','B. 1-100nm','C. >100nm','D. >1000nm'], answer:'B', knowledgePoint:'胶体粒子大小', analysis:'胶体粒子直径在1-100nm之间，这是胶体的特征之一。' }
  ]},

  // ── 第4章 酸碱与盐 ──────────────────────────────────────────

  { lesson: 16, questions: [
    { type:'choice', difficulty:1, text:'下列属于酸的是？', options:['A. NaCl','B. HCl','C. NaOH','D. CaCO₃'], answer:'B', knowledgePoint:'酸的判断', analysis:'HCl是盐酸，属于酸；NaCl是盐，NaOH是碱，CaCO₃是盐。' },
    { type:'choice', difficulty:2, text:'酸能使紫色石蕊试液变？', options:['A. 红色','B. 蓝色','C. 紫色','D. 无色'], answer:'A', knowledgePoint:'酸碱指示剂', analysis:'酸能使紫色石蕊试液变红，碱能使它变蓝。' },
    { type:'choice', difficulty:3, text:'pH=3的溶液是？', options:['A. 中性','B. 酸性','C. 碱性','D. 强碱性'], answer:'B', knowledgePoint:'pH值', analysis:'pH<7为酸性，pH=7为中性，pH>7为碱性。' }
  ]},

  { lesson: 17, questions: [
    { type:'choice', difficulty:1, text:'中和反应的产物是？', options:['A. 酸和碱','B. 盐和水','C. 酸和盐','D. 碱和盐'], answer:'B', knowledgePoint:'中和反应', analysis:'中和反应：酸+碱→盐+水。' },
    { type:'choice', difficulty:2, text:'中和反应的实质是？', options:['A. H⁺+OH⁻→H₂O','B. 生成沉淀','C. 生成气体','D. 氧化还原'], answer:'A', knowledgePoint:'中和反应实质', analysis:'中和反应的实质是H⁺和OH⁻结合生成水。' },
    { type:'choice', difficulty:3, text:'用熟石灰改良酸性土壤利用的是？', options:['A. 氧化还原反应','B. 中和反应','C. 置换反应','D. 分解反应'], answer:'B', knowledgePoint:'中和反应应用', analysis:'熟石灰（Ca(OH)₂）是碱，与土壤中的酸发生中和反应。' }
  ]},

  { lesson: 18, questions: [
    { type:'choice', difficulty:1, text:'碳酸钠的俗称是？', options:['A. 食盐','B. 纯碱','C. 烧碱','D. 小苏打'], answer:'B', knowledgePoint:'常见盐', analysis:'碳酸钠俗称纯碱、苏打；食盐是NaCl，烧碱是NaOH，小苏打是NaHCO₃。' },
    { type:'choice', difficulty:2, text:'下列盐中，不溶于水的是？', options:['A. NaCl','B. KNO₃','C. AgCl','D. Na₂SO₄'], answer:'C', knowledgePoint:'盐的溶解性', analysis:'AgCl是不溶于水的白色沉淀。' },
    { type:'choice', difficulty:3, text:'下列反应属于复分解反应的是？', options:['A. 2H₂O→2H₂+O₂','B. Fe+CuSO₄→FeSO₄+Cu','C. NaOH+HCl→NaCl+H₂O','D. C+O₂→CO₂'], answer:'C', knowledgePoint:'复分解反应', analysis:'NaOH+HCl→NaCl+H₂O是酸和碱的中和反应，属于复分解反应。' }
  ]},

  { lesson: 19, questions: [
    { type:'choice', difficulty:1, text:'电解水时，正极产生的气体是？', options:['A. 氢气','B. 氧气','C. 氮气','D. 二氧化碳'], answer:'B', knowledgePoint:'电解水', analysis:'电解水时，正极产生氧气，负极产生氢气，体积比1:2。' },
    { type:'choice', difficulty:2, text:'电镀的原理是？', options:['A. 电解','B. 原电池','C. 化学反应','D. 物理沉积'], answer:'A', knowledgePoint:'电镀', analysis:'电镀是利用电解原理在金属表面镀上一层其他金属的过程。' },
    { type:'choice', difficulty:3, text:'电解熔融NaCl可得到？', options:['A. Na和Cl₂','B. Na和O₂','C. NaOH和H₂','D. NaCl溶液'], answer:'A', knowledgePoint:'电解熔融盐', analysis:'电解熔融NaCl生成钠和氯气。' }
  ]},

  { lesson: 20, questions: [
    { type:'choice', difficulty:1, text:'下列属于氮肥的是？', options:['A. KCl','B. NH₄NO₃','C. Ca₃(PO₄)₂','D. K₂SO₄'], answer:'B', knowledgePoint:'化肥分类', analysis:'NH₄NO₃含有氮元素，是氮肥；KCl和K₂SO₄是钾肥，Ca₃(PO₄)₂是磷肥。' },
    { type:'choice', difficulty:2, text:'复合肥料是指含有？', options:['A. 一种营养元素','B. 两种或以上营养元素','C. 三种营养元素','D. 有机物'], answer:'B', knowledgePoint:'复合肥', analysis:'同时含有两种或以上营养元素的肥料称为复合肥料。' },
    { type:'choice', difficulty:3, text:'长期使用化肥可能导致？', options:['A. 土壤肥沃','B. 土壤板结','C. 土壤酸化','D. B和C'], answer:'D', knowledgePoint:'化肥使用', analysis:'长期使用化肥可能导致土壤板结和酸化，应与农家肥配合使用。' }
  ]},

  // ── 第5章 金属与非金属 ──────────────────────────────────────────

  { lesson: 21, questions: [
    { type:'choice', difficulty:1, text:'下列属于金属的是？', options:['A. C','B. O','C. Fe','D. N'], answer:'C', knowledgePoint:'金属判断', analysis:'Fe是铁，属于金属；C、O、N都是非金属。' },
    { type:'choice', difficulty:2, text:'金属的共性不包括？', options:['A. 导电性','B. 导热性','C. 延展性','D. 气体状态'], answer:'D', knowledgePoint:'金属性质', analysis:'金属在常温下通常是固体（汞除外），具有导电性、导热性和延展性。' },
    { type:'choice', difficulty:3, text:'合金的硬度通常比纯金属？', options:['A. 更小','B. 更大','C. 相同','D. 不确定'], answer:'B', knowledgePoint:'合金性质', analysis:'合金的硬度通常比组成它的纯金属更大。' }
  ]},

  { lesson: 22, questions: [
    { type:'choice', difficulty:1, text:'铁的矿石主要是？', options:['A. 赤铁矿','B. 石灰石','C. 石英','D. 石墨'], answer:'A', knowledgePoint:'铁矿石', analysis:'赤铁矿（Fe₂O₃）是铁的主要矿石。' },
    { type:'choice', difficulty:2, text:'工业炼铁的还原剂是？', options:['A. 氧气','B. 一氧化碳','C. 氢气','D. 碳'], answer:'B', knowledgePoint:'炼铁原理', analysis:'工业炼铁中，一氧化碳作为还原剂将铁从矿石中还原出来。' },
    { type:'choice', difficulty:3, text:'电解法适用于提取什么金属？', options:['A. 不活泼金属','B. 中等活泼金属','C. 活泼金属','D. 所有金属'], answer:'C', knowledgePoint:'金属提取方法', analysis:'活泼金属如钠、铝需要用电解法提取。' }
  ]},

  { lesson: 23, questions: [
    { type:'choice', difficulty:1, text:'下列属于非金属的是？', options:['A. Cu','B. Al','C. S','D. Zn'], answer:'C', knowledgePoint:'非金属判断', analysis:'S是硫，属于非金属；Cu、Al、Zn都是金属。' },
    { type:'choice', difficulty:2, text:'碳的同素异形体不包括？', options:['A. 金刚石','B. 石墨','C. C₆₀','D. 一氧化碳'], answer:'D', knowledgePoint:'同素异形体', analysis:'碳的同素异形体包括金刚石、石墨、C₆₀等，CO是化合物不是单质。' },
    { type:'choice', difficulty:3, text:'下列关于非金属的说法正确的是？', options:['A. 都不导电','B. 都不能燃烧','C. 常温下都是气体','D. 性质差异较大'], answer:'D', knowledgePoint:'非金属性质', analysis:'非金属性质差异较大，有的导电（如石墨），有的能燃烧，常温下有固体、液体、气体。' }
  ]},

  { lesson: 24, questions: [
    { type:'choice', difficulty:1, text:'二氧化碳能使澄清石灰水变？', options:['A. 红色','B. 蓝色','C. 浑浊','D. 无色'], answer:'C', knowledgePoint:'二氧化碳性质', analysis:'二氧化碳与石灰水反应生成碳酸钙沉淀，使溶液变浑浊。' },
    { type:'choice', difficulty:2, text:'下列物质中，属于有机物的是？', options:['A. CO₂','B. CaCO₃','C. CH₄','D. H₂CO₃'], answer:'C', knowledgePoint:'有机物判断', analysis:'CH₄（甲烷）是最简单的有机物；CO₂、CaCO₃、H₂CO₃通常被看作无机物。' },
    { type:'choice', difficulty:3, text:'碳循环中，植物通过什么过程吸收CO₂？', options:['A. 呼吸作用','B. 光合作用','C. 蒸腾作用','D. 吸收作用'], answer:'B', knowledgePoint:'碳循环', analysis:'植物通过光合作用吸收CO₂并释放O₂。' }
  ]},

  { lesson: 25, questions: [
    { type:'choice', difficulty:1, text:'氧化反应的特征是？', options:['A. 得到电子','B. 失去电子','C. 得到质子','D. 失去质子'], answer:'B', knowledgePoint:'氧化还原', analysis:'氧化反应是失去电子的过程，还原反应是得到电子的过程。' },
    { type:'choice', difficulty:2, text:'下列反应中，属于氧化还原反应的是？', options:['A. NaOH+HCl→NaCl+H₂O','B. CaCO₃→CaO+CO₂','C. Fe+CuSO₄→FeSO₄+Cu','D. AgNO₃+NaCl→AgCl+NaNO₃'], answer:'C', knowledgePoint:'氧化还原判断', analysis:'Fe+CuSO₄→FeSO₄+Cu中，Fe被氧化，Cu²+被还原，是氧化还原反应。' },
    { type:'choice', difficulty:3, text:'燃烧反应一定是？', options:['A. 吸热反应','B. 放热反应','C. 分解反应','D. 置换反应'], answer:'B', knowledgePoint:'燃烧', analysis:'燃烧是剧烈的氧化反应，一定是放热反应。' }
  ]},

  // ── 第6章 化学与生活 ──────────────────────────────────────────

  { lesson: 26, questions: [
    { type:'choice', difficulty:1, text:'空气中含量最多的气体是？', options:['A. 氧气','B. 氮气','C. 二氧化碳','D. 稀有气体'], answer:'B', knowledgePoint:'空气成分', analysis:'氮气约占空气体积的78%，是含量最多的气体。' },
    { type:'choice', difficulty:2, text:'人体呼吸时，吸入的气体主要是？', options:['A. 氧气','B. 氮气','C. 二氧化碳','D. 水蒸气'], answer:'B', knowledgePoint:'呼吸过程', analysis:'吸入的空气主要是氮气（约78%），我们利用其中的氧气。' },
    { type:'choice', difficulty:3, text:'下列关于空气的说法正确的是？', options:['A. 空气是纯净物','B. 空气成分固定不变','C. 空气是混合物','D. 空气中没有稀有气体'], answer:'C', knowledgePoint:'空气性质', analysis:'空气由氮气、氧气、二氧化碳、稀有气体等组成，是混合物。' }
  ]},

  { lesson: 27, questions: [
    { type:'choice', difficulty:1, text:'水的化学式是？', options:['A. H₂','B. O₂','C. H₂O','D. CO₂'], answer:'C', knowledgePoint:'水的化学式', analysis:'水由两个氢原子和一个氧原子构成，化学式为H₂O。' },
    { type:'choice', difficulty:2, text:'硬水和软水的区别在于？', options:['A. 颜色','B. 钙镁离子含量','C. 味道','D. 温度'], answer:'B', knowledgePoint:'硬水软水', analysis:'硬水含有较多钙镁离子，软水含有较少或不含钙镁离子。' },
    { type:'choice', difficulty:3, text:'下列关于水的说法错误的是？', options:['A. 水是良好溶剂','B. 水的比热容大','C. 水在4°C时密度最大','D. 水是单质'], answer:'D', knowledgePoint:'水的性质', analysis:'水是由氢和氧两种元素组成的化合物，不是单质。' }
  ]},

  { lesson: 28, questions: [
    { type:'choice', difficulty:1, text:'下列属于化石燃料的是？', options:['A. 氢气','B. 天然气','C. 太阳能','D. 风能'], answer:'B', knowledgePoint:'化石燃料', analysis:'化石燃料包括煤、石油、天然气，是不可再生能源。' },
    { type:'choice', difficulty:2, text:'燃烧化石燃料主要产生什么气体？', options:['A. 氧气','B. 氮气','C. 二氧化碳','D. 氢气'], answer:'C', knowledgePoint:'燃烧产物', analysis:'化石燃料主要含碳，燃烧产生大量二氧化碳。' },
    { type:'choice', difficulty:3, text:'下列属于新能源的是？', options:['A. 煤','B. 石油','C. 核能','D. 天然气'], answer:'C', knowledgePoint:'新能源', analysis:'核能是新能源；煤、石油、天然气是传统化石能源。' }
  ]},

  { lesson: 29, questions: [
    { type:'choice', difficulty:1, text:'下列属于金属材料的是？', options:['A. 塑料','B. 玻璃','C. 钢铁','D. 木材'], answer:'C', knowledgePoint:'材料分类', analysis:'钢铁是金属材料；塑料是高分子材料，玻璃是无机非金属材料，木材是天然材料。' },
    { type:'choice', difficulty:2, text:'复合材料的特点是？', options:['A. 单一成分','B. 多种成分组合','C. 纯金属','D. 天然材料'], answer:'B', knowledgePoint:'复合材料', analysis:'复合材料由两种或以上不同性质的材料组合而成。' },
    { type:'choice', difficulty:3, text:'下列关于材料的说法正确的是？', options:['A. 合金是纯净物','B. 塑料都是不可降解的','C. 复合材料性能优于单一材料','D. 玻璃是金属材料'], answer:'C', knowledgePoint:'材料性质', analysis:'复合材料通常具有比单一材料更优异的性能。' }
  ]},

  { lesson: 30, questions: [
    { type:'choice', difficulty:1, text:'实验时，液体药品取用应注意？', options:['A. 用手直接拿','B. 标签朝向手心','C. 试剂瓶塞正放','D. 滴管伸入试管'], answer:'B', knowledgePoint:'实验操作', analysis:'倾倒液体时标签应朝向手心，防止腐蚀标签。' },
    { type:'choice', difficulty:2, text:'实验剩余药品应？', options:['A. 放回原瓶','B. 倒入下水道','C. 放入指定容器','D. 随意丢弃'], answer:'C', knowledgePoint:'实验安全', analysis:'实验剩余药品应放入指定容器，不能放回原瓶或随意丢弃。' },
    { type:'choice', difficulty:3, text:'下列实验操作正确的是？', options:['A. 用嘴吹灭酒精灯','B. 加热时试管口朝向自己','C. 闻气体时用手扇动','D. 称量时砝码放左盘'], answer:'C', knowledgePoint:'实验操作规范', analysis:'闻气体时应用手在瓶口轻轻扇动，使少量气体飘进鼻孔。' }
  ]},

  // ── 第7章 化学计量学 ──────────────────────────────────────────

  { lesson: 31, questions: [
    { type:'choice', difficulty:1, text:'根据方程式2H₂+O₂→2H₂O，氢气与氧气的摩尔比是？', options:['A. 1:1','B. 2:1','C. 1:2','D. 2:2'], answer:'B', knowledgePoint:'摩尔比', analysis:'方程式中系数比即为摩尔比，H₂:O₂=2:1。' },
    { type:'choice', difficulty:2, text:'4g氢气完全燃烧需要多少克氧气？', options:['A. 16g','B. 32g','C. 64g','D. 8g'], answer:'B', knowledgePoint:'质量计算', analysis:'2H₂+O₂→2H₂O，4g氢气（2mol）需要1mol O₂（32g）。' },
    { type:'choice', difficulty:3, text:'10g碳酸钙完全分解生成多少克氧化钙？', options:['A. 5.6g','B. 4.4g','C. 10g','D. 2.8g'], answer:'A', knowledgePoint:'化学计算', analysis:'CaCO₃→CaO+CO₂，10g CaCO₃（0.1mol）生成0.1mol CaO=5.6g。' }
  ]},

  { lesson: 32, questions: [
    { type:'choice', difficulty:1, text:'酸碱滴定的指示剂通常是？', options:['A. 石蕊','B. 酚酞','C. 甲基橙','D. 以上都可以'], answer:'D', knowledgePoint:'滴定指示剂', analysis:'石蕊、酚酞、甲基橙都可作为酸碱滴定的指示剂。' },
    { type:'choice', difficulty:2, text:'用0.1mol/L NaOH滴定20mL 0.1mol/L HCl，需要NaOH多少mL？', options:['A. 10mL','B. 20mL','C. 30mL','D. 40mL'], answer:'B', knowledgePoint:'滴定计算', analysis:'NaOH与HCl按1:1反应，浓度相同，体积相同。' },
    { type:'choice', difficulty:3, text:'滴定终点的判断依据是？', options:['A. 颜色变化','B. pH=7','C. 溶液变浑浊','D. 产生气泡'], answer:'A', knowledgePoint:'滴定终点', analysis:'滴定终点通常根据指示剂的颜色变化来判断。' }
  ]},

  { lesson: 33, questions: [
    { type:'choice', difficulty:1, text:'标准状况下，1摩尔气体的体积约为？', options:['A. 11.2L','B. 22.4L','C. 44.8L','D. 24.5L'], answer:'B', knowledgePoint:'气体摩尔体积', analysis:'标准状况下（0°C，1atm），1摩尔任何理想气体体积约为22.4L。' },
    { type:'choice', difficulty:2, text:'同温同压下，气体体积比等于？', options:['A. 质量比','B. 摩尔比','C. 密度比','D. 分子量比'], answer:'B', knowledgePoint:'气体定律', analysis:'同温同压下，气体体积比等于物质的量之比（摩尔比）。' },
    { type:'choice', difficulty:3, text:'在25°C，1atm下，1摩尔气体体积约为？', options:['A. 22.4L','B. 24.5L','C. 20L','D. 28L'], answer:'B', knowledgePoint:'非标准状况', analysis:'在25°C（室温）下，1摩尔气体体积约为24.5L。' }
  ]},

  { lesson: 34, questions: [
    { type:'choice', difficulty:1, text:'百分产率的计算公式是？', options:['A. 实际产量/理论产量×100%','B. 理论产量/实际产量×100%','C. 实际产量/反应物量×100%','D. 理论产量/反应物量×100%'], answer:'A', knowledgePoint:'百分产率', analysis:'百分产率=实际产量/理论产量×100%。' },
    { type:'choice', difficulty:2, text:'理论产量10g，实际产量8g，百分产率是？', options:['A. 80%','B. 125%','C. 20%','D. 90%'], answer:'A', knowledgePoint:'产率计算', analysis:'百分产率=8/10×100%=80%。' },
    { type:'choice', difficulty:3, text:'原子经济性的含义是？', options:['A. 原子利用率高','B. 产量高','C. 速度快','D. 成本低'], answer:'A', knowledgePoint:'原子经济性', analysis:'原子经济性指反应中原料原子转化为产物的比例，比例越高越环保。' }
  ]},

  { lesson: 35, questions: [
    { type:'choice', difficulty:1, text:'可逆反应达到平衡时，正反应速率与逆反应速率？', options:['A. 正反应速率大','B. 逆反应速率大','C. 相等','D. 都为零'], answer:'C', knowledgePoint:'化学平衡', analysis:'化学平衡时，正逆反应速率相等，各物质浓度保持不变。' },
    { type:'choice', difficulty:2, text:'勒沙特列原理说明？', options:['A. 平衡不能移动','B. 平衡会抵抗外界变化','C. 平衡总是向正方向移动','D. 平衡总是向逆方向移动'], answer:'B', knowledgePoint:'勒沙特列原理', analysis:'勒沙特列原理：平衡系统会抵抗外界条件的改变。' },
    { type:'choice', difficulty:3, text:'对于放热反应，升高温度平衡向？', options:['A. 正方向移动','B. 逆方向移动','C. 不移动','D. 无法判断'], answer:'B', knowledgePoint:'温度对平衡的影响', analysis:'升高温度，平衡向吸热方向移动，即逆反应方向。' }
  ]},

  // ── 第8章 有机化学基础 ──────────────────────────────────────────

  { lesson: 36, questions: [
    { type:'choice', difficulty:1, text:'烃类化合物只含有？', options:['A. 碳和氧','B. 碳和氢','C. 碳和氮','D. 碳和硫'], answer:'B', knowledgePoint:'烃的定义', analysis:'烃是只含有碳和氢两种元素的有机化合物。' },
    { type:'choice', difficulty:2, text:'下列属于烷烃的是？', options:['A. C₂H₄','B. C₃H₆','C. C₄H₁₀','D. C₂H₂'], answer:'C', knowledgePoint:'烷烃', analysis:'烷烃通式为CₙH₂ₙ₊₂，C₄H₁₀符合此通式。' },
    { type:'choice', difficulty:3, text:'烯烃的特征官能团是？', options:['A. 碳碳单键','B. 碳碳双键','C. 碳碳三键','D. 羟基'], answer:'B', knowledgePoint:'烯烃', analysis:'烯烃含有碳碳双键，这是其特征官能团。' }
  ]},

  { lesson: 37, questions: [
    { type:'choice', difficulty:1, text:'甲烷燃烧的产物是？', options:['A. CO和H₂O','B. CO₂和H₂O','C. C和H₂','D. C和H₂O'], answer:'B', knowledgePoint:'烃的燃烧', analysis:'甲烷完全燃烧生成二氧化碳和水：CH₄+2O₂→CO₂+2H₂O。' },
    { type:'choice', difficulty:2, text:'乙烯与溴水的反应是？', options:['A. 取代反应','B. 加成反应','C. 聚合反应','D. 分解反应'], answer:'B', knowledgePoint:'加成反应', analysis:'乙烯含有双键，能与溴发生加成反应。' },
    { type:'choice', difficulty:3, text:'聚乙烯是通过什么反应生成的？', options:['A. 加成聚合','B. 缩合聚合','C. 加成反应','D. 取代反应'], answer:'A', knowledgePoint:'聚合反应', analysis:'聚乙烯是通过乙烯的加成聚合反应生成的。' }
  ]},

  { lesson: 38, questions: [
    { type:'choice', difficulty:1, text:'乙醇的官能团是？', options:['A. 羧基','B. 羟基','C. 醛基','D. 酮基'], answer:'B', knowledgePoint:'醇的官能团', analysis:'乙醇（C₂H₅OH）含有羟基（-OH）。' },
    { type:'choice', difficulty:2, text:'乙酸的官能团是？', options:['A. 羧基','B. 羟基','C. 醛基','D. 酮基'], answer:'A', knowledgePoint:'羧酸的官能团', analysis:'乙酸（CH₃COOH）含有羧基（-COOH）。' },
    { type:'choice', difficulty:3, text:'酯化反应的特点是？', options:['A. 快速反应','B. 可逆反应','C. 吸热反应','D. 无需催化剂'], answer:'B', knowledgePoint:'酯化反应', analysis:'酯化反应是可逆反应，通常需要酸催化和加热。' }
  ]},

  { lesson: 39, questions: [
    { type:'choice', difficulty:1, text:'葡萄糖属于？', options:['A. 蛋白质','B. 油脂','C. 碳水化合物','D. 核酸'], answer:'C', knowledgePoint:'生物分子', analysis:'葡萄糖是单糖，属于碳水化合物。' },
    { type:'choice', difficulty:2, text:'蛋白质的基本单位是？', options:['A. 氨基酸','B. 葡萄糖','C. 脂肪酸','D. 核苷酸'], answer:'A', knowledgePoint:'蛋白质结构', analysis:'蛋白质由氨基酸通过肽键连接而成。' },
    { type:'choice', difficulty:3, text:'DNA的基本组成单位是？', options:['A. 氨基酸','B. 葡萄糖','C. 核苷酸','D. 脂肪酸'], answer:'C', knowledgePoint:'核酸', analysis:'DNA由脱氧核糖核苷酸组成。' }
  ]},

  { lesson: 40, questions: [
    { type:'choice', difficulty:1, text:'有机合成的目的是？', options:['A. 分解有机物','B. 合成目标化合物','C. 分析化合物','D. 分离混合物'], answer:'B', knowledgePoint:'有机合成', analysis:'有机合成是通过化学反应合成目标有机化合物。' },
    { type:'choice', difficulty:2, text:'官能团转换的意义是？', options:['A. 改变分子大小','B. 改变分子性质','C. 改变原子种类','D. 改变分子量'], answer:'B', knowledgePoint:'官能团转换', analysis:'通过官能团转换可以改变分子的化学性质。' },
    { type:'choice', difficulty:3, text:'保护基的作用是？', options:['A. 加快反应','B. 保护特定官能团','C. 增加产量','D. 降低成本'], answer:'B', knowledgePoint:'保护基', analysis:'保护基用于在反应中保护特定官能团不被破坏。' }
  ]},

  // ── 第9章 化学能量 ──────────────────────────────────────────

  { lesson: 41, questions: [
    { type:'choice', difficulty:1, text:'放热反应的焓变ΔH是？', options:['A. 正值','B. 负值','C. 零','D. 不确定'], answer:'B', knowledgePoint:'焓变', analysis:'放热反应ΔH<0，吸热反应ΔH>0。' },
    { type:'choice', difficulty:2, text:'反应热与焓变的关系是？', options:['A. 相等','B. 绝对值相等','C. 无关','D. 互为相反数'], answer:'A', knowledgePoint:'反应热', analysis:'在恒压条件下，反应热等于焓变。' },
    { type:'choice', difficulty:3, text:'下列反应中，属于吸热反应的是？', options:['A. 燃烧','B. 中和','C. 碳与二氧化碳反应','D. 金属与酸反应'], answer:'C', knowledgePoint:'吸热反应', analysis:'C+CO₂→2CO是吸热反应，其余都是放热反应。' }
  ]},

  { lesson: 42, questions: [
    { type:'choice', difficulty:1, text:'赫斯定律说明反应热与什么有关？', options:['A. 途径','B. 始态和终态','C. 反应速率','D. 催化剂'], answer:'B', knowledgePoint:'赫斯定律', analysis:'赫斯定律：反应热只与始态和终态有关，与途径无关。' },
    { type:'choice', difficulty:2, text:'已知反应A→B ΔH₁，B→C ΔH₂，则A→C的ΔH是？', options:['A. ΔH₁+ΔH₂','B. ΔH₁-ΔH₂','C. ΔH₂-ΔH₁','D. ΔH₁×ΔH₂'], answer:'A', knowledgePoint:'赫斯定律应用', analysis:'根据赫斯定律，A→C的ΔH=ΔH₁+ΔH₂。' },
    { type:'choice', difficulty:3, text:'热化学方程式中，各物质的系数表示？', options:['A. 质量比','B. 摩尔比','C. 体积比','D. 分子数'], answer:'B', knowledgePoint:'热化学方程式', analysis:'热化学方程式中系数表示物质的量（摩尔比）。' }
  ]},

  { lesson: 43, questions: [
    { type:'choice', difficulty:1, text:'原电池的正极发生什么反应？', options:['A. 氧化反应','B. 还原反应','C. 分解反应','D. 合成反应'], answer:'B', knowledgePoint:'原电池', analysis:'原电池中，正极发生还原反应，负极发生氧化反应。' },
    { type:'choice', difficulty:2, text:'下列关于电池的说法正确的是？', options:['A. 电池将电能转化为化学能','B. 原电池是可逆的','C. 电池内部发生氧化还原反应','D. 所有电池都需要充电'], answer:'C', knowledgePoint:'电池原理', analysis:'电池通过内部的氧化还原反应将化学能转化为电能。' },
    { type:'choice', difficulty:3, text:'燃料电池的优点是？', options:['A. 能量密度低','B. 无污染','C. 需要充电','D. 成本高'], answer:'B', knowledgePoint:'燃料电池', analysis:'燃料电池直接将燃料的化学能转化为电能，产物通常只有水，无污染。' }
  ]},

  { lesson: 44, questions: [
    { type:'choice', difficulty:1, text:'电解池的阳极发生什么反应？', options:['A. 氧化反应','B. 还原反应','C. 分解反应','D. 合成反应'], answer:'A', knowledgePoint:'电解池', analysis:'电解池中，阳极发生氧化反应，阴极发生还原反应。' },
    { type:'choice', difficulty:2, text:'电解水时，阴极产生的气体是？', options:['A. 氧气','B. 氢气','C. 氯气','D. 氮气'], answer:'B', knowledgePoint:'电解水', analysis:'电解水时，阴极产生氢气，阳极产生氧气。' },
    { type:'choice', difficulty:3, text:'法拉第定律描述的是？', options:['A. 电流与电压的关系','B. 电量与产物量的关系','C. 电阻与电流的关系','D. 功率与电压的关系'], answer:'B', knowledgePoint:'法拉第定律', analysis:'法拉第定律描述电解时通过的电量与产物量之间的关系。' }
  ]},

  { lesson: 45, questions: [
    { type:'choice', difficulty:1, text:'电池的发展史中，最早的电池是？', options:['A. 锂电池','B. 铅酸电池','C. 伏打电池','D. 燃料电池'], answer:'C', knowledgePoint:'电池历史', analysis:'伏打电池是最早的化学电池，由伏打在1800年发明。' },
    { type:'choice', difficulty:2, text:'魔法能量与化学能量的共同点是？', options:['A. 都来自物质变化','B. 都需要魔杖','C. 都无限供应','D. 都不需要载体'], answer:'A', knowledgePoint:'能量转换', analysis:'魔法能量和化学能量都与物质的变化有关。' },
    { type:'choice', difficulty:3, text:'化学电池与魔法能量来源的区别是？', options:['A. 化学电池有物质消耗','B. 魔法不需要物质','C. 化学电池效率更高','D. 魔法更稳定'], answer:'A', knowledgePoint:'能量对比', analysis:'化学电池通过物质的氧化还原反应产生电能，有物质消耗；魔法能量来源更神秘。' }
  ]},

  // ── 第10章 分析化学 ──────────────────────────────────────────

  { lesson: 46, questions: [
    { type:'choice', difficulty:1, text:'检验氯离子常用的试剂是？', options:['A. AgNO₃','B. BaCl₂','C. NaOH','D. HCl'], answer:'A', knowledgePoint:'离子检验', analysis:'AgNO₃与Cl⁻反应生成白色AgCl沉淀。' },
    { type:'choice', difficulty:2, text:'焰色反应中，钠的火焰颜色是？', options:['A. 黄色','B. 紫色','C. 绿色','D. 红色'], answer:'A', knowledgePoint:'焰色反应', analysis:'钠的焰色反应为黄色，钾为紫色，铜为绿色。' },
    { type:'choice', difficulty:3, text:'下列离子中，能与Ba²+生成沉淀的是？', options:['A. Cl⁻','B. SO₄²⁻','C. NO₃⁻','D. Na⁺'], answer:'B', knowledgePoint:'沉淀反应', analysis:'BaSO₄是不溶于水的白色沉淀。' }
  ]},

  { lesson: 47, questions: [
    { type:'choice', difficulty:1, text:'重量分析的原理是？', options:['A. 测量体积','B. 测量质量','C. 测量浓度','D. 测量pH'], answer:'B', knowledgePoint:'重量分析', analysis:'重量分析通过测量物质的质量来确定其含量。' },
    { type:'choice', difficulty:2, text:'容量分析的主要方法是？', options:['A. 称量','B. 滴定','C. 分光光度','D. 色谱'], answer:'B', knowledgePoint:'容量分析', analysis:'容量分析主要通过滴定来测定物质含量。' },
    { type:'choice', difficulty:3, text:'仪器分析的特点是？', options:['A. 准确度低','B. 灵敏度高','C. 速度慢','D. 样品量大'], answer:'B', knowledgePoint:'仪器分析', analysis:'仪器分析通常具有高灵敏度和高准确度。' }
  ]},

  { lesson: 48, questions: [
    { type:'choice', difficulty:1, text:'原子光谱的产生与什么有关？', options:['A. 电子跃迁','B. 原子核裂变','C. 分子振动','D. 分子转动'], answer:'A', knowledgePoint:'原子光谱', analysis:'原子光谱是由于电子在不同能级间跃迁产生的。' },
    { type:'choice', difficulty:2, text:'光谱仪的作用是？', options:['A. 分离混合物','B. 测量光谱','C. 称量物质','D. 加热样品'], answer:'B', knowledgePoint:'光谱仪', analysis:'光谱仪用于测量和分析物质的光谱。' },
    { type:'choice', difficulty:3, text:'下列关于光谱分析的说法正确的是？', options:['A. 只能分析固体','B. 只能分析液体','C. 可用于元素定性和定量','D. 不能分析气体'], answer:'C', knowledgePoint:'光谱分析应用', analysis:'光谱分析可用于元素的定性和定量分析。' }
  ]},

  { lesson: 49, questions: [
    { type:'choice', difficulty:1, text:'纸色谱的固定相是？', options:['A. 滤纸','B. 溶剂','C. 样品','D. 气体'], answer:'A', knowledgePoint:'纸色谱', analysis:'纸色谱以滤纸为固定相，溶剂为流动相。' },
    { type:'choice', difficulty:2, text:'气相色谱主要用于分析？', options:['A. 固体','B. 液体','C. 气体','D. 离子'], answer:'C', knowledgePoint:'气相色谱', analysis:'气相色谱主要用于分析挥发性物质和气体。' },
    { type:'choice', difficulty:3, text:'高效液相色谱的特点是？', options:['A. 速度慢','B. 分离效率高','C. 只能分析有机物','D. 样品需要气化'], answer:'B', knowledgePoint:'高效液相色谱', analysis:'高效液相色谱具有高分离效率和高灵敏度。' }
  ]},

  { lesson: 50, questions: [
    { type:'choice', difficulty:1, text:'GCSE化学考试主要考察？', options:['A. 只有理论','B. 理论和实验','C. 只有计算','D. 只有记忆'], answer:'B', knowledgePoint:'考试内容', analysis:'GCSE化学考试考察理论知识和实验技能。' },
    { type:'choice', difficulty:2, text:'化学计算题的关键是？', options:['A. 记住公式','B. 理解原理','C. 背诵答案','D. 猜答案'], answer:'B', knowledgePoint:'解题技巧', analysis:'化学计算题的关键是理解反应原理和掌握计算方法。' },
    { type:'choice', difficulty:3, text:'实验设计的基本原则是？', options:['A. 复杂','B. 可重复','C. 不可控','D. 单一变量'], answer:'B', knowledgePoint:'实验设计', analysis:'实验设计应遵循可重复性、可控性和单一变量原则。' }
  ]},

  // ── 第11章 物理化学 ──────────────────────────────────────────

  { lesson: 51, questions: [
    { type:'choice', difficulty:1, text:'反应速率理论中，有效碰撞需要？', options:['A. 足够能量','B. 正确取向','C. A和B','D. 高温'], answer:'C', knowledgePoint:'碰撞理论', analysis:'有效碰撞需要足够的能量和正确的碰撞取向。' },
    { type:'choice', difficulty:2, text:'过渡态理论认为反应需要经过？', options:['A. 反应物直接转化','B. 过渡态','C. 催化剂','D. 低温'], answer:'B', knowledgePoint:'过渡态理论', analysis:'过渡态理论认为反应需要经过一个高能过渡态。' },
    { type:'choice', difficulty:3, text:'速率方程中，反应级数是？', options:['A. 反应物系数之和','B. 实验测定的值','C. 总是整数','D. 与温度有关'], answer:'B', knowledgePoint:'速率方程', analysis:'反应级数是通过实验测定的，不一定等于反应物系数之和。' }
  ]},

  { lesson: 52, questions: [
    { type:'choice', difficulty:1, text:'化学平衡常数K与什么有关？', options:['A. 浓度','B. 温度','C. 压力','D. 催化剂'], answer:'B', knowledgePoint:'平衡常数', analysis:'平衡常数K只与温度有关，与浓度、压力无关。' },
    { type:'choice', difficulty:2, text:'对于反应aA+bB→cC+dD，平衡表达式是？', options:['A. K=[A]^a[B]^b/[C]^c[D]^d','B. K=[C]^c[D]^d/[A]^a[B]^b','C. K=[A][B]/[C][D]','D. K=[C]+[D]/[A]+[B]'], answer:'B', knowledgePoint:'平衡表达式', analysis:'平衡常数表达式为产物浓度幂次方的乘积除以反应物浓度幂次方的乘积。' },
    { type:'choice', difficulty:3, text:'Q<K时，反应向哪个方向进行？', options:['A. 正方向','B. 逆方向','C. 平衡','D. 无法判断'], answer:'A', knowledgePoint:'反应商', analysis:'当Q<K时，反应向正方向进行以达到平衡。' }
  ]},

  { lesson: 53, questions: [
    { type:'choice', difficulty:1, text:'布朗斯特-劳里理论中，酸是？', options:['A. 质子接受者','B. 质子给予者','C. 电子接受者','D. 电子给予者'], answer:'B', knowledgePoint:'酸碱理论', analysis:'布朗斯特-劳里理论：酸是质子给予者，碱是质子接受者。' },
    { type:'choice', difficulty:2, text:'pH=5的溶液中，H⁺浓度是？', options:['A. 10⁻⁵mol/L','B. 10⁵mol/L','C. 5mol/L','D. 0.5mol/L'], answer:'A', knowledgePoint:'pH计算', analysis:'pH=-lg[H⁺]，所以[H⁺]=10⁻ᵖᴴ=10⁻⁵mol/L。' },
    { type:'choice', difficulty:3, text:'缓冲溶液的作用是？', options:['A. 改变pH','B. 维持pH稳定','C. 中和所有酸','D. 中和所有碱'], answer:'B', knowledgePoint:'缓冲溶液', analysis:'缓冲溶液能抵抗少量酸或碱的加入，维持pH相对稳定。' }
  ]},

  { lesson: 54, questions: [
    { type:'choice', difficulty:1, text:'熵增意味着？', options:['A. 混乱度增加','B. 混乱度减少','C. 温度升高','D. 温度降低'], answer:'A', knowledgePoint:'熵', analysis:'熵是系统混乱度的量度，熵增意味着混乱度增加。' },
    { type:'choice', difficulty:2, text:'吉布斯自由能ΔG的公式是？', options:['A. ΔG=ΔH+TΔS','B. ΔG=ΔH-TΔS','C. ΔG=TΔS-ΔH','D. ΔG=ΔH×TΔS'], answer:'B', knowledgePoint:'吉布斯自由能', analysis:'吉布斯自由能公式为ΔG=ΔH-TΔS。' },
    { type:'choice', difficulty:3, text:'ΔG<0时，反应？', options:['A. 自发','B. 非自发','C. 平衡','D. 无法判断'], answer:'A', knowledgePoint:'自发性判断', analysis:'ΔG<0时反应自发进行，ΔG>0时非自发，ΔG=0时平衡。' }
  ]},

  { lesson: 55, questions: [
    { type:'choice', difficulty:1, text:'相图表示的是物质的什么关系？', options:['A. 温度与压力','B. 浓度与温度','C. 压力与体积','D. 体积与温度'], answer:'A', knowledgePoint:'相图', analysis:'相图表示物质的相态与温度、压力的关系。' },
    { type:'choice', difficulty:2, text:'三相点是指？', options:['A. 三种物质共存','B. 气液固三相共存','C. 温度最高的点','D. 压力最大的点'], answer:'B', knowledgePoint:'三相点', analysis:'三相点是气、液、固三相共存的点。' },
    { type:'choice', difficulty:3, text:'克拉佩龙方程描述的是？', options:['A. 相变时温度与压力的关系','B. 化学反应速率','C. 溶液浓度','D. 气体状态'], answer:'A', knowledgePoint:'克拉佩龙方程', analysis:'克拉佩龙方程描述相变时温度与压力的关系。' }
  ]},

  // ── 第12章 无机化学 ──────────────────────────────────────────

  { lesson: 56, questions: [
    { type:'choice', difficulty:1, text:'同一周期从左到右，原子半径？', options:['A. 增大','B. 减小','C. 不变','D. 先增后减'], answer:'B', knowledgePoint:'原子半径', analysis:'同一周期从左到右，核电荷数增加，原子半径减小。' },
    { type:'choice', difficulty:2, text:'同一族从上到下，电离能？', options:['A. 增大','B. 减小','C. 不变','D. 先减后增'], answer:'B', knowledgePoint:'电离能', analysis:'同一族从上到下，原子半径增大，电离能减小。' },
    { type:'choice', difficulty:3, text:'电负性最大的元素是？', options:['A. F','B. O','C. N','D. Cl'], answer:'A', knowledgePoint:'电负性', analysis:'氟的电负性最大，为4.0。' }
  ]},

  { lesson: 57, questions: [
    { type:'choice', difficulty:1, text:'碱金属属于哪个区？', options:['A. s区','B. p区','C. d区','D. f区'], answer:'A', knowledgePoint:'元素分区', analysis:'碱金属（第1族）属于s区元素。' },
    { type:'choice', difficulty:2, text:'卤素的最外层电子数是？', options:['A. 1','B. 6','C. 7','D. 8'], answer:'C', knowledgePoint:'卤素', analysis:'卤素（第17族）最外层有7个电子。' },
    { type:'choice', difficulty:3, text:'稀有气体的化学性质？', options:['A. 很活泼','B. 较活泼','C. 不活泼','D. 能与所有物质反应'], answer:'C', knowledgePoint:'稀有气体', analysis:'稀有气体最外层电子已满，化学性质稳定，不活泼。' }
  ]},

  { lesson: 58, questions: [
    { type:'choice', difficulty:1, text:'过渡金属的特征是？', options:['A. 只有+1价','B. 多种氧化态','C. 都是气体','D. 不形成配合物'], answer:'B', knowledgePoint:'过渡金属', analysis:'过渡金属具有多种氧化态是其重要特征。' },
    { type:'choice', difficulty:2, text:'配位化合物的中心离子通常是？', options:['A. 主族金属','B. 过渡金属','C. 非金属','D. 稀有气体'], answer:'B', knowledgePoint:'配位化合物', analysis:'过渡金属离子常作为配合物的中心离子。' },
    { type:'choice', difficulty:3, text:'配合物[Cu(NH₃)₄]²+中，配位数是？', options:['A. 1','B. 4','C. 2','D. 6'], answer:'B', knowledgePoint:'配位数', analysis:'配位数是指中心离子周围的配位原子数，[Cu(NH₃)₄]²+中Cu²+与4个NH₃配位，配位数为4。' }
  ]},

  { lesson: 59, questions: [
    { type:'choice', difficulty:1, text:'氧化态的定义是？', options:['A. 原子的电量','B. 元素的化合价','C. 原子的质量','D. 原子的体积'], answer:'B', knowledgePoint:'氧化态', analysis:'氧化态即元素的化合价，表示原子得失电子的数目。' },
    { type:'choice', difficulty:2, text:'KMnO₄中Mn的氧化态是？', options:['A. +7','B. +5','C. +4','D. +2'], answer:'A', knowledgePoint:'氧化态计算', analysis:'K为+1，O为-2，设Mn为x，则1+x+4×(-2)=0，x=+7。' },
    { type:'choice', difficulty:3, text:'电化学序列中，位置越靠上的金属？', options:['A. 越容易被氧化','B. 越不容易被氧化','C. 越容易被还原','D. 氧化性越强'], answer:'A', knowledgePoint:'电化学序列', analysis:'电化学序列中位置越靠上的金属还原性越强，越容易被氧化。' }
  ]},

  { lesson: 60, questions: [
    { type:'choice', difficulty:1, text:'无机合成的目的是？', options:['A. 分解化合物','B. 合成无机化合物','C. 分析物质','D. 分离混合物'], answer:'B', knowledgePoint:'无机合成', analysis:'无机合成是通过化学反应合成无机化合物。' },
    { type:'choice', difficulty:2, text:'单晶培养的常用方法是？', options:['A. 快速冷却','B. 缓慢冷却','C. 高温加热','D. 真空干燥'], answer:'B', knowledgePoint:'单晶培养', analysis:'缓慢冷却有利于晶体缓慢生长，形成完整的单晶。' },
    { type:'choice', difficulty:3, text:'无机材料的特点是？', options:['A. 有机成分','B. 高熔点','C. 柔性','D. 导电性差'], answer:'B', knowledgePoint:'无机材料', analysis:'无机材料通常具有高熔点、高强度等特点。' }
  ]},

  // ── 第13章 有机化学进阶 ──────────────────────────────────────────

  { lesson: 61, questions: [
    { type:'choice', difficulty:1, text:'手性分子的特征是？', options:['A. 平面结构','B. 镜像不能重叠','C. 对称结构','D. 直线结构'], answer:'B', knowledgePoint:'手性分子', analysis:'手性分子与其镜像不能重叠，如同左右手。' },
    { type:'choice', difficulty:2, text:'对映异构体的性质？', options:['A. 完全相同','B. 物理性质相同，化学性质不同','C. 旋光性相反','D. 结构相同'], answer:'C', knowledgePoint:'对映异构体', analysis:'对映异构体具有相同的物理性质，但旋光性相反。' },
    { type:'choice', difficulty:3, text:'下列化合物中具有手性的是？', options:['A. CH₄','B. CH₃OH','C. CH₃CH(OH)COOH','D. CH₃COOH'], answer:'C', knowledgePoint:'手性判断', analysis:'CH₃CH(OH)COOH中有一个碳原子连接四个不同基团，具有手性。' }
  ]},

  { lesson: 62, questions: [
    { type:'choice', difficulty:1, text:'亲电加成反应通常发生在？', options:['A. 烷烃','B. 烯烃','C. 炔烃','D. 芳香烃'], answer:'B', knowledgePoint:'亲电加成', analysis:'烯烃含有双键，容易发生亲电加成反应。' },
    { type:'choice', difficulty:2, text:'SN2反应的特点是？', options:['A. 单分子反应','B. 双分子反应','C. 三级碳最易反应','D. 反应速率只与底物有关'], answer:'B', knowledgePoint:'SN2反应', analysis:'SN2是双分子亲核取代反应，反应速率与底物和亲核试剂浓度都有关。' },
    { type:'choice', difficulty:3, text:'消除反应的产物是？', options:['A. 烷烃','B. 烯烃','C. 炔烃','D. 芳香烃'], answer:'B', knowledgePoint:'消除反应', analysis:'消除反应通常生成烯烃，如卤代烃消除HX生成烯烃。' }
  ]},

  { lesson: 63, questions: [
    { type:'choice', difficulty:1, text:'逆合成分析的目的是？', options:['A. 合成目标分子','B. 分解目标分子','C. 分析反应机理','D. 分离产物'], answer:'B', knowledgePoint:'逆合成分析', analysis:'逆合成分析是从目标分子出发，反向推导合成路线。' },
    { type:'choice', difficulty:2, text:'合成路线优化的原则是？', options:['A. 步骤多','B. 产率低','C. 原料易得','D. 条件苛刻'], answer:'C', knowledgePoint:'路线优化', analysis:'合成路线优化应遵循原料易得、步骤少、产率高、条件温和等原则。' },
    { type:'choice', difficulty:3, text:'绿色合成的特点是？', options:['A. 污染严重','B. 原子经济性高','C. 溶剂有毒','D. 能耗高'], answer:'B', knowledgePoint:'绿色合成', analysis:'绿色合成强调原子经济性高、污染少、能耗低。' }
  ]},

  { lesson: 64, questions: [
    { type:'choice', difficulty:1, text:'红外光谱主要用于检测？', options:['A. 分子量','B. 官能团','C. 分子式','D. 晶体结构'], answer:'B', knowledgePoint:'红外光谱', analysis:'红外光谱可用于检测分子中的官能团。' },
    { type:'choice', difficulty:2, text:'质谱的作用是？', options:['A. 测量分子量','B. 确定官能团','C. 分析晶体结构','D. 测定pH'], answer:'A', knowledgePoint:'质谱', analysis:'质谱主要用于测量分子的精确分子量。' },
    { type:'choice', difficulty:3, text:'核磁共振氢谱可以提供什么信息？', options:['A. 分子量','B. 官能团','C. 氢原子的化学环境','D. 晶体结构'], answer:'C', knowledgePoint:'核磁共振', analysis:'核磁共振氢谱可以提供分子中氢原子的化学环境和数目信息。' }
  ]},

  { lesson: 65, questions: [
    { type:'choice', difficulty:1, text:'聚合物是由什么组成的？', options:['A. 原子','B. 单体','C. 离子','D. 电子'], answer:'B', knowledgePoint:'聚合物', analysis:'聚合物是由许多单体通过聚合反应连接而成的大分子。' },
    { type:'choice', difficulty:2, text:'加聚反应的特点是？', options:['A. 有小分子生成','B. 无小分子生成','C. 缩合反应','D. 取代反应'], answer:'B', knowledgePoint:'加聚反应', analysis:'加聚反应是单体通过加成反应形成聚合物，没有小分子生成。' },
    { type:'choice', difficulty:3, text:'生物聚合物包括？', options:['A. 塑料','B. 橡胶','C. 蛋白质','D. 纤维'], answer:'C', knowledgePoint:'生物聚合物', analysis:'蛋白质是生物体内的天然聚合物。' }
  ]},

  // ── 第14章 综合冲刺 ──────────────────────────────────────────

  { lesson: 66, questions: [
    { type:'choice', difficulty:1, text:'分子建模的目的是？', options:['A. 计算分子量','B. 预测分子性质','C. 分离混合物','D. 分析晶体'], answer:'B', knowledgePoint:'分子建模', analysis:'分子建模用于预测分子的结构和性质。' },
    { type:'choice', difficulty:2, text:'量子化学计算基于什么理论？', options:['A. 经典力学','B. 量子力学','C. 热力学','D. 动力学'], answer:'B', knowledgePoint:'量子化学', analysis:'量子化学计算基于量子力学理论。' },
    { type:'choice', difficulty:3, text:'计算化学的应用包括？', options:['A. 实验验证','B. 预测反应','C. 合成化合物','D. 分析样品'], answer:'B', knowledgePoint:'计算化学', analysis:'计算化学可用于预测化学反应的可能性和产物。' }
  ]},

  { lesson: 67, questions: [
    { type:'choice', difficulty:1, text:'化学研究方法的第一步是？', options:['A. 数据分析','B. 实验设计','C. 提出假设','D. 得出结论'], answer:'C', knowledgePoint:'研究方法', analysis:'科学研究通常从提出假设开始。' },
    { type:'choice', difficulty:2, text:'数据分析的常用方法是？', options:['A. 观察','B. 实验','C. 统计分析','D. 假设'], answer:'C', knowledgePoint:'数据分析', analysis:'统计分析是数据分析的常用方法。' },
    { type:'choice', difficulty:3, text:'研究伦理包括？', options:['A. 数据造假','B. 抄袭','C. 诚信研究','D. 伪造结果'], answer:'C', knowledgePoint:'研究伦理', analysis:'研究伦理要求诚信研究、数据真实、尊重他人成果。' }
  ]},

  { lesson: 68, questions: [
    { type:'choice', difficulty:1, text:'环境污染的主要来源是？', options:['A. 自然现象','B. 人类活动','C. 动物活动','D. 植物活动'], answer:'B', knowledgePoint:'环境污染', analysis:'人类活动是环境污染的主要来源。' },
    { type:'choice', difficulty:2, text:'绿色化学的核心是？', options:['A. 减少污染','B. 从源头消除污染','C. 治理污染','D. 回收利用'], answer:'B', knowledgePoint:'绿色化学', analysis:'绿色化学的核心是从源头消除污染。' },
    { type:'choice', difficulty:3, text:'可持续发展的含义是？', options:['A. 只注重经济发展','B. 只注重环境保护','C. 经济与环境协调发展','D. 牺牲环境发展经济'], answer:'C', knowledgePoint:'可持续发展', analysis:'可持续发展强调经济发展与环境保护相协调。' }
  ]},

  { lesson: 69, questions: [
    { type:'choice', difficulty:1, text:'药物化学研究的是？', options:['A. 药物的合成','B. 药物的分析','C. 药物的作用','D. 以上都是'], answer:'D', knowledgePoint:'药物化学', analysis:'药物化学研究药物的合成、分析和作用机制。' },
    { type:'choice', difficulty:2, text:'诊断技术包括？', options:['A. 光谱分析','B. 色谱分析','C. 影像学','D. 以上都是'], answer:'D', knowledgePoint:'诊断技术', analysis:'诊断技术包括光谱、色谱、影像学等多种方法。' },
    { type:'choice', difficulty:3, text:'魔药与药物的共同点是？', options:['A. 都用魔法','B. 都用于治疗','C. 都不需要科学依据','D. 都有副作用'], answer:'B', knowledgePoint:'魔药与药物', analysis:'魔药和药物都用于治疗疾病或改善健康。' }
  ]},

  { lesson: 70, questions: [
    { type:'choice', difficulty:1, text:'A-Level化学考试覆盖哪些内容？', options:['A. 只有基础化学','B. 物理化学、无机化学、有机化学','C. 只有实验','D. 只有理论'], answer:'B', knowledgePoint:'考试内容', analysis:'A-Level化学考试覆盖物理化学、无机化学和有机化学。' },
    { type:'choice', difficulty:2, text:'综合题的解题技巧是？', options:['A. 跳过不做','B. 分步骤解答','C. 随意作答','D. 只做第一问'], answer:'B', knowledgePoint:'解题技巧', analysis:'综合题应分步骤解答，逐步分析。' },
    { type:'choice', difficulty:3, text:'考试时间管理的关键是？', options:['A. 先做难题','B. 合理分配时间','C. 快速作答','D. 仔细检查一遍'], answer:'B', knowledgePoint:'时间管理', analysis:'考试时间管理的关键是合理分配时间，先易后难。' }
  ]}

];

window.questionBank_chemistry = questionBank;
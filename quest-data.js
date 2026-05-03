/**
 * quest-data.js
 * 任务系统数据层
 *
 * 包含：
 *   DAILY_QUEST_POOL   — 日常任务池（每天随机抽3条）
 *   SIDE_QUESTS        — 支线任务（好感度触发 + NPC主动发布）
 *   ACHIEVEMENTS       — 成就列表（自动追踪）
 *
 * 奖励类型（reward.type）：
 *   "material"    { name, count }     — 添加到背包材料栏
 *   "item"        { name, count }     — 添加到背包道具栏
 *   "housePoint"  { amount }          — 玩家学院加分
 *   "affinity"    { key, delta }      — 指定角色好感度
 *   "log"         { text }            — 写一条日志记录
 *
 * 完成条件（condition.type）：
 *   "courseStudy"     { count }       — 上课（好好学习或随便学学）N次
 *   "duelWin"         { count }       — 赢得决斗N场
 *   "duelPlay"        { count }       — 参与决斗N场（不论胜负）
 *   "explore"         { count }       — 探索N次
 *   "brewPotion"      { count }       — 熬制魔药N次
 *   "spellProf"       { spellId, min }— 某咒语熟练度达到N%
 *   "affinityReach"   { key, tier }   — 某角色好感度达到N级
 *   "collectItem"     { name, count } — 收集特定材料N个（用于NPC找东西任务）
 *   "manual"          {}              — 手动点击完成（用于对话任务）
 */

// ═══════════════════════════════════════════════════════════
// 日常任务池（每天从中随机抽取3条，按权重）
// ═══════════════════════════════════════════════════════════

export const DAILY_QUEST_POOL = [

  // ── 课程类 ─────────────────────────────────────────────

  {
    id: "daily_study_1",
    title: "去上课",
    desc: "随便学学或好好学习任意一门课程。",
    icon: "📚",
    category: "study",
    weight: 10,
    condition: { type: "courseStudy", count: 1 },
    rewards: [
      { type: "material", name: "干荨麻", count: 2 },
      { type: "housePoint", amount: 3 },
    ],
  },
  {
    id: "daily_study_2",
    title: "认真学习",
    desc: "好好学习一节课，弗立维教授说专注是魔法的根本。",
    icon: "📖",
    category: "study",
    weight: 8,
    condition: { type: "goodStudy", count: 1 },
    rewards: [
      { type: "material", name: "薄荷", count: 3 },
      { type: "housePoint", amount: 5 },
    ],
  },
  {
    id: "daily_study_3",
    title: "今日两课",
    desc: "今天学习两门不同的课程。",
    icon: "📝",
    category: "study",
    weight: 6,
    condition: { type: "courseStudy", count: 2 },
    rewards: [
      { type: "material", name: "甘菊", count: 2 },
      { type: "item", name: "巧克力蛙", count: 1 },
    ],
  },

  // ── 决斗类 ─────────────────────────────────────────────

  {
    id: "daily_duel_1",
    title: "踏入决斗场",
    desc: "参与一场决斗，胜负不计。",
    icon: "⚔️",
    category: "duel",
    weight: 9,
    condition: { type: "duelPlay", count: 1 },
    rewards: [
      { type: "material", name: "蛇牙", count: 2 },
      { type: "housePoint", amount: 5 },
    ],
  },
  {
    id: "daily_duel_2",
    title: "赢得一场",
    desc: "在决斗中赢得胜利。",
    icon: "🏆",
    category: "duel",
    weight: 7,
    condition: { type: "duelWin", count: 1 },
    rewards: [
      { type: "material", name: "飞行羽毛", count: 1 },
      { type: "housePoint", amount: 8 },
    ],
  },
  {
    id: "daily_duel_3",
    title: "4v4出战",
    desc: "参与一场4v4团队决斗。",
    icon: "🛡️",
    category: "duel",
    weight: 5,
    condition: { type: "duel4v4Play", count: 1 },
    rewards: [
      { type: "material", name: "疗伤花粉", count: 2 },
      { type: "material", name: "飞行羽毛", count: 1 },
      { type: "housePoint", amount: 10 },
    ],
  },

  // ── 探索类 ─────────────────────────────────────────────

  {
    id: "daily_explore_1",
    title: "出去走走",
    desc: "在城堡里探索一个区域。",
    icon: "🗺️",
    category: "explore",
    weight: 9,
    condition: { type: "explore", count: 1 },
    rewards: [
      { type: "material", name: "露水", count: 3 },
    ],
  },
  {
    id: "daily_explore_2",
    title: "深度探索",
    desc: "今天探索两个不同的区域。",
    icon: "🔍",
    category: "explore",
    weight: 6,
    condition: { type: "explore", count: 2 },
    rewards: [
      { type: "material", name: "老龄苔藓", count: 2 },
      { type: "material", name: "蒲公英", count: 2 },
    ],
  },

  // ── 魔药类 ─────────────────────────────────────────────

  {
    id: "daily_brew_1",
    title: "熬一锅药",
    desc: "在魔药室熬制任意一种药剂。",
    icon: "⚗️",
    category: "brew",
    weight: 7,
    condition: { type: "brewPotion", count: 1 },
    rewards: [
      { type: "material", name: "甘菊", count: 3 },
      { type: "housePoint", amount: 3 },
    ],
  },
  {
    id: "daily_brew_2",
    title: "药剂专注日",
    desc: "今天熬制两次魔药，斯内普教授会满意的。",
    icon: "🧪",
    category: "brew",
    weight: 4,
    condition: { type: "brewPotion", count: 2 },
    rewards: [
      { type: "material", name: "水仙根", count: 2 },
      { type: "material", name: "蚂蟥", count: 1 },
      { type: "housePoint", amount: 5 },
    ],
  },

  // ── 综合类 ─────────────────────────────────────────────

  {
    id: "daily_mix_1",
    title: "全能巫师",
    desc: "今天既上了课，又探索了一个地方。",
    icon: "✨",
    category: "mix",
    weight: 5,
    condition: { type: "compound", conditions: [
      { type: "courseStudy", count: 1 },
      { type: "explore", count: 1 },
    ]},
    rewards: [
      { type: "material", name: "花蜜", count: 3 },
      { type: "item", name: "坩埚蛋糕", count: 1 },
      { type: "housePoint", amount: 5 },
    ],
  },
  {
    id: "daily_mix_2",
    title: "勤勉的一天",
    desc: "今天上了课，也参与了一场决斗。",
    icon: "⚡",
    category: "mix",
    weight: 5,
    condition: { type: "compound", conditions: [
      { type: "courseStudy", count: 1 },
      { type: "duelPlay",    count: 1 },
    ]},
    rewards: [
      { type: "material", name: "蛇牙", count: 2 },
      { type: "housePoint", amount: 8 },
    ],
  },
  {
    id: "daily_mix_3",
    title: "三管齐下",
    desc: "今天上了课、探索了城堡、还熬了药。",
    icon: "🌟",
    category: "mix",
    weight: 3,
    condition: { type: "compound", conditions: [
      { type: "courseStudy", count: 1 },
      { type: "explore",     count: 1 },
      { type: "brewPotion",  count: 1 },
    ]},
    rewards: [
      { type: "material", name: "曼德拉草", count: 1 },
      { type: "material", name: "薰衣草", count: 2 },
      { type: "housePoint", amount: 10 },
      { type: "item", name: "南瓜馅饼", count: 1 },
    ],
  },
  {
    id: "daily_mix_4",
    title: "熟能生巧",
    desc: "今天熬药并赢得一场决斗。",
    icon: "🔥",
    category: "mix",
    weight: 4,
    condition: { type: "compound", conditions: [
      { type: "brewPotion", count: 1 },
      { type: "duelWin",    count: 1 },
    ]},
    rewards: [
      { type: "material", name: "石榴汁", count: 2 },
      { type: "housePoint", amount: 8 },
    ],
  },
];

// ═══════════════════════════════════════════════════════════
// 支线任务
// triggerType：
//   "affinityTier" — 好感度升到指定级别时自动推送
//   "npcPublish"   — NPC主动发布（在好感度面板互动时可见）
// ═══════════════════════════════════════════════════════════

export const SIDE_QUESTS = [

  // ── 西尔维娅·麦克米兰 ──────────────────────────────────

  {
    id: "side_sylvia_1",
    characterKey: "sylviaMacmillan",
    title: "一份借阅记录",
    triggerType: "affinityTier",
    triggerTier: 3,
    npcMessage: "西尔维娅·麦克米兰有话和你说。",
    desc: "麦克米兰教授想让你帮她去图书馆找一本关于麻瓜工业史的书，她说借阅记录上应该有。",
    icon: "🪡",
    condition: { type: "collectItem", name: "古籍墨粉", count: 3 },
    conditionDesc: "收集 古籍墨粉 ×3（探索图书馆区域可获得）",
    rewards: [
      { type: "affinity", key: "sylviaMacmillan", delta: 8 },
      { type: "material", name: "书页苔藓", count: 2 },
      { type: "housePoint", amount: 5 },
      { type: "log", text: "你把那本书交给麦克米兰教授，她翻了翻，没有说谢谢，但把书放在了桌子正中央。" },
    ],
    completionText: "「……在这里，」她把书推过来，「你找到了。」她的语气一如既往地平静，但你注意到她把书放在了桌子最显眼的位置。",
    repeatable: false,
  },
  {
    id: "side_sylvia_2",
    characterKey: "sylviaMacmillan",
    title: "实地报告的材料",
    triggerType: "npcPublish",
    triggerTier: 3,
    npcMessage: "西尔维娅·麦克米兰正在准备一份报告，需要一些材料。",
    desc: "她需要一些花茶原料——不是魔法用途，只是她在写一份关于麻瓜植物学的研究报告，想附上实物样本。",
    icon: "📋",
    condition: { type: "collectItem", name: "花茶原料", count: 4 },
    conditionDesc: "收集 花茶原料 ×4（探索霍格莫德白鼬夫人茶屋可获得）",
    rewards: [
      { type: "affinity", key: "sylviaMacmillan", delta: 6 },
      { type: "item", name: "黄油啤酒软糖", count: 2 },
      { type: "log", text: "她收下材料，说了一句「这对报告很有帮助」。对她来说，这已经算是很多话了。" },
    ],
    completionText: "她检查了一下样本，放进文件袋里。「正好，」她说，「这对报告很有帮助。」你等了一下，以为她还有别的话——但她已经转回去继续写了。",
    repeatable: false,
  },

  // ── 斯内普 ────────────────────────────────────────────

  {
    id: "side_snape_1",
    characterKey: "severusSnape",
    title: "缺失的药剂原料",
    triggerType: "npcPublish",
    triggerTier: 3,
    npcMessage: "斯内普教授的药剂储藏室缺少了某种原料。",
    desc: "储藏室里的蜘蛛毒液用完了，他没有明说是谁用的，只是把清单放在了你实验台上。",
    icon: "🧪",
    condition: { type: "collectItem", name: "蜘蛛毒液", count: 2 },
    conditionDesc: "收集 蜘蛛毒液 ×2（探索禁林可获得）",
    rewards: [
      { type: "affinity", key: "severusSnape", delta: 10 },
      { type: "material", name: "乌头", count: 1 },
      { type: "housePoint", amount: 5 },
      { type: "log", text: "你把毒液放在他的实验台上，什么都没说。他也什么都没说，但那天课上你的药剂没有被批评。" },
    ],
    completionText: "你把两瓶毒液放在他实验台上，没有出声。他看了一眼，把瓶子收进柜子，继续在黑板上写字。课堂上，他路过你的实验台，停了半秒。你的药剂那天没出问题。",
    repeatable: false,
  },
  {
    id: "side_snape_2",
    characterKey: "severusSnape",
    title: "午夜的实验",
    triggerType: "affinityTier",
    triggerTier: 4,
    npcMessage: "斯内普教授……好像在等你做什么。",
    desc: "你在深夜路过魔药课实验室，发现门没关——里面有一个进行到一半的实验，和一张写着「火灰蛇蛋 ×1」的字条。",
    icon: "🌑",
    condition: { type: "collectItem", name: "火灰蛇蛋", count: 1 },
    conditionDesc: "收集 火灰蛇蛋 ×1（探索禁林深处稀有获得）",
    rewards: [
      { type: "affinity", key: "severusSnape", delta: 15 },
      { type: "material", name: "龙毒", count: 1 },
      { type: "housePoint", amount: 8 },
      { type: "log", text: "第二天你发现实验室桌上有一个小瓶装着成品药剂，没有名字，没有说明。" },
    ],
    completionText: "你把蛇蛋放在实验台上，转身离开。第二天，桌上多了一个小玻璃瓶，里面是深红色的液体，没有标签。你没有问这是什么，也没有人解释。",
    repeatable: false,
  },

  // ── 麦格教授 ──────────────────────────────────────────

  {
    id: "side_mcgonagall_1",
    characterKey: "minervaMcGonagall",
    title: "变形课的演示材料",
    triggerType: "npcPublish",
    triggerTier: 2,
    npcMessage: "麦格教授需要一些演示用的材料。",
    desc: "变形课下次要演示一个复杂的无生命变形练习，她需要几块特定的石头样本。",
    icon: "🦁",
    condition: { type: "collectItem", name: "月长石碎块", count: 2 },
    conditionDesc: "收集 月长石碎块 ×2（探索城堡地下室或天文塔区域）",
    rewards: [
      { type: "affinity", key: "minervaMcGonagall", delta: 6 },
      { type: "material", name: "星尘粉", count: 2 },
      { type: "housePoint", amount: 6 },
      { type: "log", text: "麦格教授检查了石头，放进了实验柜。「做得不错，」她说。四个字。" },
    ],
    completionText: "她拿起石头，对着光检查了一会儿，然后放进柜子里。「做得不错，」她说。就四个字。你知道这已经是很高的评价了。",
    repeatable: false,
  },
  {
    id: "side_mcgonagall_2",
    characterKey: "minervaMcGonagall",
    title: "苏格兰的薄荷",
    triggerType: "affinityTier",
    triggerTier: 4,
    npcMessage: "麦格教授的办公室门开着，你听见了烧水壶的声音。",
    desc: "她在泡茶，需要一种特定的薄荷，说是苏格兰本地产的才对味，霍格沃茨温室里没有。",
    icon: "🍵",
    condition: { type: "collectItem", name: "薄荷", count: 5 },
    conditionDesc: "收集 薄荷 ×5（城堡草药温室区域常见）",
    rewards: [
      { type: "affinity", key: "minervaMcGonagall", delta: 12 },
      { type: "item", name: "南瓜馅饼", count: 1 },
      { type: "housePoint", amount: 8 },
      { type: "log", text: "你们喝了一杯茶。她说了一些和课程无关的事情。" },
    ],
    completionText: "她接过薄荷，仔细闻了一下，「差不多，」她说，这对她来说算是认可了。她泡了两杯茶，把其中一杯推给你。你们就这么坐着，说了些和课程完全无关的事，大概二十分钟。",
    repeatable: false,
  },

  // ── 塞拉菲娜·穆迪 ────────────────────────────────────

  {
    id: "side_serafina_1",
    characterKey: "serafinaMoody",
    title: "闪电实验",
    triggerType: "npcPublish",
    triggerTier: 2,
    npcMessage: "塞拉菲娜·穆迪在做一个实验，需要你帮忙收集材料。",
    desc: "她在研究闪电在魔法环境中的传导特性，需要一些特定的材料。",
    icon: "⚡",
    condition: { type: "collectItem", name: "闪电花残片", count: 3 },
    conditionDesc: "收集 闪电花残片 ×3（探索天文塔或城堡塔楼区域）",
    rewards: [
      { type: "affinity", key: "serafinaMoody", delta: 6 },
      { type: "material", name: "星尘粉", count: 2 },
      { type: "housePoint", amount: 5 },
    ],
    completionText: "「不错，」她把材料放进实验瓶，「比我预期的快。」这是她最高的表扬方式。",
    repeatable: false,
  },

  // ── 奥古斯都·芬威克 ───────────────────────────────────

  {
    id: "side_augustus_1",
    characterKey: "augustusFenwick",
    title: "数字与魔法",
    triggerType: "affinityTier",
    triggerTier: 3,
    npcMessage: "芬威克教授在做一个关于魔法与数学关联的研究，想找你谈谈。",
    desc: "他想验证一个理论：魔咒的精准度是否和施法者的专注度有数学规律。他需要你参与一些测试，同时提供一些用于记录的材料。",
    icon: "🔢",
    condition: { type: "compound", conditions: [
      { type: "collectItem", name: "古籍墨粉", count: 2 },
      { type: "duelPlay", count: 1 },
    ]},
    conditionDesc: "收集 古籍墨粉 ×2 + 参与一场决斗（用于数据记录）",
    rewards: [
      { type: "affinity", key: "augustusFenwick", delta: 10 },
      { type: "material", name: "古老魔材", count: 2 },
      { type: "housePoint", amount: 6 },
      { type: "log", text: "芬威克教授把你的数据记进了笔记本，说「符合预期的误差范围」。" },
    ],
    completionText: "他把数据整理进一个精密的表格，说「这印证了我的假设——在一定置信区间内。」你觉得你完全理解了他说的，也完全没理解。",
    repeatable: false,
  },

  // ── 邓布利多（高难度，需要tier4）────────────────────────

  {
    id: "side_dumbledore_1",
    characterKey: "albusDumbledore",
    title: "校长的一个小请求",
    triggerType: "affinityTier",
    triggerTier: 4,
    npcMessage: "邓布利多校长……好像一直知道你在哪里，然后在走廊等你。",
    desc: "他说他需要一样东西，方式非常随意，好像是顺带提到的：「独角兽毛，如果你碰巧遇到的话——我在做一个小实验。」",
    icon: "✨",
    condition: { type: "collectItem", name: "独角兽毛", count: 1 },
    conditionDesc: "收集 独角兽毛 ×1（探索禁林独角兽栖息地稀有获得）",
    rewards: [
      { type: "affinity", key: "albusDumbledore", delta: 15 },
      { type: "material", name: "凤凰羽毛", count: 1 },
      { type: "housePoint", amount: 15 },
      { type: "log", text: "邓布利多接过独角兽毛，像是一件很普通的事，然后从口袋里掏出一颗蜜蜂糖递给你。" },
    ],
    completionText: "你把独角兽毛交给他，他举起来对着窗外的光看了一会儿，点点头。「谢谢，」他说，语气和你递给他一块饼干没什么两样。然后他从口袋里掏出一颗蜜蜂糖，「拿着，」他说，「不要问为什么。」",
    repeatable: false,
  },
];

// ═══════════════════════════════════════════════════════════
// 成就列表
// ═══════════════════════════════════════════════════════════

export const ACHIEVEMENTS = [

  // ── 课程类 ─────────────────────────────────────────────

  {
    id: "ach_study_1",
    title: "初入课堂",
    desc: "第一次上课。",
    icon: "📚",
    category: "study",
    condition: { type: "courseStudy", count: 1 },
    rewards: [{ type: "housePoint", amount: 3 }],
  },
  {
    id: "ach_study_10",
    title: "勤学不辍",
    desc: "累计上课10次。",
    icon: "📖",
    category: "study",
    condition: { type: "courseStudy", count: 10 },
    rewards: [
      { type: "housePoint", amount: 10 },
      { type: "material", name: "甘菊", count: 3 },
    ],
  },
  {
    id: "ach_study_30",
    title: "霍格沃茨的学生",
    desc: "累计上课30次。",
    icon: "🎓",
    category: "study",
    condition: { type: "courseStudy", count: 30 },
    rewards: [
      { type: "housePoint", amount: 20 },
      { type: "item", name: "巧克力蛙", count: 2 },
    ],
  },
  {
    id: "ach_charms_done",
    title: "魔咒学成",
    desc: "完成魔咒学全部课时。",
    icon: "✨",
    category: "study",
    condition: { type: "courseComplete", subject: "魔咒学" },
    rewards: [
      { type: "housePoint", amount: 15 },
      { type: "material", name: "星尘粉", count: 2 },
    ],
  },
  {
    id: "ach_transfig_done",
    title: "变形有成",
    desc: "完成变形术全部课时。",
    icon: "🔁",
    category: "study",
    condition: { type: "courseComplete", subject: "变形术" },
    rewards: [
      { type: "housePoint", amount: 15 },
      { type: "material", name: "月长石碎块", count: 2 },
    ],
  },

  // ── 决斗类 ─────────────────────────────────────────────

  {
    id: "ach_duel_first",
    title: "初次决斗",
    desc: "第一次参与决斗。",
    icon: "⚔️",
    category: "duel",
    condition: { type: "duelPlay", count: 1 },
    rewards: [{ type: "housePoint", amount: 5 }],
  },
  {
    id: "ach_duel_win_1",
    title: "第一场胜利",
    desc: "赢得第一场决斗。",
    icon: "🏆",
    category: "duel",
    condition: { type: "duelWin", count: 1 },
    rewards: [
      { type: "housePoint", amount: 8 },
      { type: "material", name: "飞行羽毛", count: 1 },
    ],
  },
  {
    id: "ach_duel_win_10",
    title: "决斗好手",
    desc: "赢得10场决斗。",
    icon: "⚡",
    category: "duel",
    condition: { type: "duelWin", count: 10 },
    rewards: [
      { type: "housePoint", amount: 20 },
      { type: "material", name: "火灰蛇蛋", count: 1 },
    ],
  },
  {
    id: "ach_duel_4v4_first",
    title: "团队作战",
    desc: "第一次参与4v4团队决斗。",
    icon: "🛡️",
    category: "duel",
    condition: { type: "duel4v4Play", count: 1 },
    rewards: [{ type: "housePoint", amount: 10 }],
  },
  {
    id: "ach_spell_master",
    title: "咒语精通",
    desc: "任意一个咒语熟练度达到100%。",
    icon: "💫",
    category: "duel",
    condition: { type: "anySpellMastered" },
    rewards: [
      { type: "housePoint", amount: 15 },
      { type: "material", name: "星辰粉", count: 1 },
    ],
  },

  // ── 探索类 ─────────────────────────────────────────────

  {
    id: "ach_explore_1",
    title: "初探城堡",
    desc: "第一次探索霍格沃茨。",
    icon: "🗺️",
    category: "explore",
    condition: { type: "explore", count: 1 },
    rewards: [{ type: "housePoint", amount: 3 }],
  },
  {
    id: "ach_explore_20",
    title: "城堡漫游者",
    desc: "累计探索20次。",
    icon: "🔍",
    category: "explore",
    condition: { type: "explore", count: 20 },
    rewards: [
      { type: "housePoint", amount: 12 },
      { type: "material", name: "疗伤草", count: 2 },
    ],
  },

  // ── 好感度类 ───────────────────────────────────────────

  {
    id: "ach_affinity_first",
    title: "初结友谊",
    desc: "任意角色好感度达到2级。",
    icon: "🤝",
    category: "affinity",
    condition: { type: "anyAffinityTier", tier: 2 },
    rewards: [{ type: "housePoint", amount: 5 }],
  },
  {
    id: "ach_affinity_deep",
    title: "深交",
    desc: "任意角色好感度达到4级。",
    icon: "💛",
    category: "affinity",
    condition: { type: "anyAffinityTier", tier: 4 },
    rewards: [
      { type: "housePoint", amount: 15 },
      { type: "material", name: "疗伤花粉", count: 3 },
    ],
  },
  {
    id: "ach_side_complete_3",
    title: "乐于助人",
    desc: "完成3个支线任务。",
    icon: "🌟",
    category: "affinity",
    condition: { type: "sideQuestDone", count: 3 },
    rewards: [
      { type: "housePoint", amount: 20 },
      { type: "item", name: "巧克力蛙", count: 3 },
    ],
  },

  // ── 日常类 ─────────────────────────────────────────────

  {
    id: "ach_daily_7",
    title: "坚持七天",
    desc: "累计完成7天的日常任务。",
    icon: "📅",
    category: "daily",
    condition: { type: "dailyDaysDone", count: 7 },
    rewards: [
      { type: "housePoint", amount: 15 },
      { type: "item", name: "南瓜馅饼", count: 2 },
    ],
  },
  {
    id: "ach_daily_30",
    title: "一月勤奋",
    desc: "累计完成30天的日常任务。",
    icon: "🏅",
    category: "daily",
    condition: { type: "dailyDaysDone", count: 30 },
    rewards: [
      { type: "housePoint", amount: 40 },
      { type: "material", name: "独角兽角粉", count: 1 },
    ],
  },
];

// ═══════════════════════════════════════════════════════════
// 工具
// ═══════════════════════════════════════════════════════════

/**
 * 按权重从日常任务池中随机抽取N条
 */
export function drawDailyQuests(count = 3) {
  const pool = [...DAILY_QUEST_POOL];
  const total = pool.reduce((s, q) => s + (q.weight || 1), 0);
  const result = [];
  const used   = new Set();

  for (let i = 0; i < count && used.size < pool.length; i++) {
    let r = Math.random() * pool.filter(q => !used.has(q.id))
              .reduce((s, q) => s + (q.weight || 1), 0);
    for (const q of pool) {
      if (used.has(q.id)) continue;
      r -= (q.weight || 1);
      if (r <= 0) { result.push(q); used.add(q.id); break; }
    }
  }
  return result;
}

/**
 * 获取角色当前可见的NPC发布任务（需好感度达标且未完成）
 */
export function getNpcPublishedQuests(characterKey, currentTier, completedIds = []) {
  return SIDE_QUESTS.filter(q =>
    q.characterKey    === characterKey &&
    q.triggerType     === "npcPublish" &&
    currentTier       >= q.triggerTier &&
    !completedIds.includes(q.id)
  );
}

window.questData = {
  DAILY_QUEST_POOL,
  SIDE_QUESTS,
  ACHIEVEMENTS,
  drawDailyQuests,
  getNpcPublishedQuests,
};

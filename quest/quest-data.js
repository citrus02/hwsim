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

import { DAILY_QUEST_EXPANSION } from './daily-quest-expansion.js';

// ═══════════════════════════════════════════════════════════
// 日常任务池（每天从中随机抽取3条，按权重）
// ═══════════════════════════════════════════════════════════

export const DAILY_BASE_QUEST_POOL = [

  // ── 同学委托 ───────────────────────────────────────────

  {
    id: "daily_study_1",
    title: "纳威的蟾蜍又不见了",
    desc: "纳威站在公共休息室门口，抱着一个空盒子小声问你有没有看见莱福。去城堡里找找，它通常不在合理的地方。",
    source: "纳威的求助",
    location: "城堡走廊",
    hook: "盒子里还留着一点湿泥，像一条非常不可靠的线索。",
    completionText: "你在一处拐角附近听见熟悉的“呱”。纳威接过盒子时整个人都亮了一下。",
    icon: "🐸",
    category: "explore",
    weight: 10,
    condition: { type: "explore", count: 1 },
    conditionLabels: { explore: "寻找莱福" },
    rewards: [
      { type: "affinity", key: "neville", delta: 4 },
      { type: "item", name: "巧克力蛙", count: 1 },
      { type: "money", sickles: 2 },
    ],
  },
  {
    id: "daily_study_2",
    title: "赫敏要查一条脚注",
    desc: "赫敏在图书馆找一本被借走的参考书。好好上一节课，记下教授提到的来源，回头帮她补上那条脚注。",
    source: "赫敏的书单",
    location: "课堂与图书馆",
    hook: "她说“只是顺便”，但那张书单已经按字母顺序排好了。",
    completionText: "你把来源记给她。赫敏立刻在羊皮纸边缘补了一行字，然后很快地说了声谢谢。",
    icon: "📚",
    category: "study",
    weight: 8,
    requiresClass: true,
    condition: { type: "goodStudy", count: 1 },
    conditionLabels: { goodStudy: "认真听课查脚注" },
    rewards: [
      { type: "affinity", key: "hermione", delta: 3 },
      { type: "housePoint", amount: 4 },
      { type: "money", sickles: 2 },
    ],
  },
  {
    id: "daily_study_3",
    title: "罗恩丢了巫师棋马",
    desc: "罗恩坚称那枚棋马是自己跑掉的。探索一次，帮他从城堡哪个奇怪角落里把它找回来。",
    source: "罗恩的棋盒",
    location: "休息室附近",
    hook: "棋盘上剩下的棋子都装作没看见。",
    completionText: "你找回棋马时，它正在桌脚下撞来撞去。罗恩说它“脾气一直这样”。",
    icon: "♞",
    category: "explore",
    weight: 8,
    condition: { type: "explore", count: 1 },
    conditionLabels: { explore: "寻找棋马" },
    rewards: [
      { type: "affinity", key: "ron", delta: 4 },
      { type: "item", name: "南瓜馅饼", count: 1 },
      { type: "money", sickles: 2, knuts: 10 },
    ],
  },

  // ── 教授跑腿 ───────────────────────────────────────────

  {
    id: "daily_duel_1",
    title: "麦格教授的课堂材料",
    desc: "麦格教授需要一份演示材料。去城堡里找找合适的样本，再把它按时送到教室。",
    source: "麦格教授",
    location: "走廊与变形术教室",
    hook: "她没有催促，但你知道“准时”在她那里不是建议。",
    completionText: "样本被整齐地放进讲桌抽屉。麦格教授点了点头，这已经足够像表扬。",
    icon: "📎",
    category: "explore",
    weight: 7,
    condition: { type: "explore", count: 1 },
    conditionLabels: { explore: "寻找课堂材料" },
    rewards: [
      { type: "housePoint", amount: 6 },
      { type: "money", sickles: 3 },
      { type: "material", name: "月长石碎块", count: 1 },
    ],
  },
  {
    id: "daily_duel_2",
    title: "斯内普的备用坩埚",
    desc: "魔药教室缺一份能用的成品样本。熬制一份魔药，放到标着“不要碰”的那张桌子上。",
    source: "斯内普的纸条",
    location: "魔药课教室",
    hook: "纸条只有四个字：今天补上。",
    completionText: "药瓶被收走了。斯内普没有说话，只把你的名字从另一张名单上划掉。",
    icon: "⚗️",
    category: "brew",
    weight: 7,
    condition: { type: "brewPotion", count: 1 },
    conditionLabels: { brewPotion: "熬制备用药剂" },
    rewards: [
      { type: "affinity", key: "severusSnape", delta: 2 },
      { type: "housePoint", amount: 3 },
      { type: "money", sickles: 4 },
    ],
  },
  {
    id: "daily_duel_3",
    title: "弗立维教授的咒语示范",
    desc: "弗立维教授想找学生做一次实战示范。参加一场决斗，让课堂上的小动作变成真正能用的反应。",
    source: "弗立维教授",
    location: "决斗场",
    hook: "他说“轻松一点”，然后把一摞评分表放在旁边。",
    completionText: "你完成了示范。弗立维教授高兴得差点从书堆上跳下来。",
    icon: "✨",
    category: "duel",
    weight: 6,
    condition: { type: "duelPlay", count: 1 },
    conditionLabels: { duelPlay: "完成咒语示范" },
    rewards: [
      { type: "material", name: "飞行羽毛", count: 1 },
      { type: "housePoint", amount: 5 },
      { type: "money", sickles: 3 },
    ],
  },

  // ── 传闻调查 ───────────────────────────────────────────

  {
    id: "daily_explore_1",
    title: "三楼盔甲半夜换了姿势",
    desc: "有人说盔甲在午夜后自己转身。去探索一次，确认它是真的会动，还是有人在恶作剧。",
    source: "走廊传闻",
    location: "三楼走廊",
    hook: "画像们对此意见不一，但每一幅都讲得像亲眼所见。",
    completionText: "你没抓到罪魁祸首，但盔甲脚边多了一枚奇怪的螺丝。",
    icon: "🛡️",
    category: "explore",
    weight: 9,
    condition: { type: "explore", count: 1 },
    conditionLabels: { explore: "调查盔甲传闻" },
    rewards: [
      { type: "material", name: "星尘粉", count: 1 },
      { type: "money", sickles: 2, knuts: 12 },
    ],
  },
  {
    id: "daily_explore_2",
    title: "图书馆书架后的纸条",
    desc: "一本书后面夹着半张纸，写着“别相信第七排”。探索两次，把这条传闻查清楚。",
    source: "图书馆纸条",
    location: "图书馆与走廊",
    hook: "纸条背面有一块巧克力污渍，线索质量非常霍格沃茨。",
    completionText: "第七排没有危险，只有一排会把书脊转过去的旧书。你把结论写回纸条背面。",
    icon: "🔍",
    category: "explore",
    weight: 6,
    condition: { type: "explore", count: 2 },
    conditionLabels: { explore: "追查纸条线索" },
    rewards: [
      { type: "material", name: "老龄苔藓", count: 1 },
      { type: "item", name: "巧克力蛙", count: 1 },
      { type: "money", sickles: 3 },
    ],
  },

  // ── 朋友组队 ───────────────────────────────────────────

  {
    id: "daily_brew_1",
    title: "罗恩想试试新战术",
    desc: "罗恩画了一张战术图，至少有三条线是反的。参加一场4v4团队决斗，看看它到底有没有用。",
    source: "罗恩的战术图",
    location: "决斗场",
    hook: "他把图举起来时很自信，虽然图是倒着的。",
    completionText: "战术图没完全发挥作用，但你们至少一起打完了。罗恩坚持说这是“第一版”。",
    icon: "🛡️",
    category: "duel",
    weight: 6,
    condition: { type: "duel4v4Play", count: 1 },
    conditionLabels: { duel4v4Play: "和朋友组队决斗" },
    rewards: [
      { type: "affinity", key: "ron", delta: 4 },
      { type: "housePoint", amount: 8 },
      { type: "money", sickles: 5 },
    ],
  },
  {
    id: "daily_brew_2",
    title: "哈利缺一个陪练",
    desc: "哈利想在正式训练前试一遍防守节奏。参加一场决斗，帮他把节奏磨顺。",
    source: "哈利的请求",
    location: "决斗场",
    hook: "他说只是随便练练，但魔杖已经拿在手里了。",
    completionText: "你们把几个反应动作来回试了几遍。哈利笑了一下，说这样踏实多了。",
    icon: "⚔️",
    category: "duel",
    weight: 7,
    condition: { type: "duelPlay", count: 1 },
    conditionLabels: { duelPlay: "陪哈利练习" },
    rewards: [
      { type: "affinity", key: "harry", delta: 4 },
      { type: "material", name: "疗伤花粉", count: 2 },
      { type: "money", sickles: 3 },
    ],
  },

  // ── 跨系统小冒险 ───────────────────────────────────────

  {
    id: "daily_mix_1",
    title: "露娜说墙里有回声",
    desc: "露娜听见一段“像月亮一样薄”的回声。先探索一次，再把发现告诉她。",
    source: "露娜的观察",
    location: "塔楼与走廊",
    hook: "她说如果你没听见也没关系，很多重要的东西一开始都听不见。",
    completionText: "你描述了那段回声。露娜认真点头，像你们刚完成一项非常正式的研究。",
    icon: "🌙",
    category: "mix",
    weight: 6,
    condition: { type: "compound", conditions: [
      { type: "explore", count: 1 },
    ]},
    conditionLabels: { explore: "调查奇怪回声" },
    rewards: [
      { type: "affinity", key: "luna", delta: 4 },
      { type: "material", name: "星尘粉", count: 1 },
      { type: "money", sickles: 2 },
    ],
  },
  {
    id: "daily_mix_2",
    title: "德拉科的走廊挑衅",
    desc: "德拉科说你只会在课堂上装认真。赢下一场决斗，让他把这句话咽回去一点。",
    source: "斯莱特林走廊",
    location: "决斗场",
    hook: "他说得很轻，但旁边的人都听见了。",
    completionText: "你赢得很干净。德拉科转身离开前冷哼了一声，听起来没那么有底气。",
    icon: "🐍",
    category: "mix",
    weight: 5,
    condition: { type: "duelWin", count: 1 },
    conditionLabels: { duelWin: "赢下一场决斗" },
    rewards: [
      { type: "material", name: "蛇牙", count: 2 },
      { type: "affinity", key: "draco", delta: 2 },
      { type: "housePoint", amount: 6 },
      { type: "money", sickles: 5 },
    ],
  },
  {
    id: "daily_mix_3",
    title: "禁林边缘的备用材料",
    desc: "草药课温室少了几份材料。先探索一次，再熬制一份魔药，把能用的部分处理出来。",
    source: "温室便条",
    location: "城堡周边与魔药室",
    hook: "便条末尾写着：如果材料在动，先盖住盒子。",
    completionText: "材料被处理进坩埚，温室清单也被补上了。你闻起来有点像草药柜。",
    icon: "🌿",
    category: "mix",
    weight: 5,
    condition: { type: "compound", conditions: [
      { type: "explore",     count: 1 },
      { type: "brewPotion",  count: 1 },
    ]},
    conditionLabels: { explore: "寻找材料", brewPotion: "处理材料" },
    rewards: [
      { type: "material", name: "干荨麻", count: 2 },
      { type: "material", name: "露水", count: 2 },
      { type: "housePoint", amount: 5 },
      { type: "money", sickles: 4 },
    ],
  },
  {
    id: "daily_mix_4",
    title: "医疗箱里的空瓶",
    desc: "决斗场医疗箱少了一瓶基础药剂。熬制一份魔药，再参加一场决斗，确认补给真的派得上用场。",
    source: "决斗场值日",
    location: "魔药室与决斗场",
    hook: "纸箱上写着：请在需要之前补上，而不是之后。",
    completionText: "药剂被放回医疗箱。决斗结束后你看了它一眼，幸好暂时没用上。",
    icon: "🔥",
    category: "mix",
    weight: 4,
    requiresClass: true,
    condition: { type: "compound", conditions: [
      { type: "brewPotion", count: 1 },
      { type: "duelPlay",   count: 1 },
    ]},
    conditionLabels: { brewPotion: "补医疗药剂", duelPlay: "测试补给" },
    rewards: [
      { type: "material", name: "石榴汁", count: 2 },
      { type: "housePoint", amount: 6 },
      { type: "money", sickles: 4 },
    ],
  },
  {
    id: "daily_mix_5",
    title: "韦斯莱双胞胎的试用品",
    desc: "弗雷德和乔治想知道某个小道具会不会干扰决斗反应。参加一场决斗，回来告诉他们结果。",
    source: "弗雷德和乔治",
    location: "决斗场",
    hook: "他们保证“理论上绝对安全”。这个保证本身就很可疑。",
    completionText: "你带回了反馈。他们听得很认真，认真到让你更担心下一版。",
    icon: "🎇",
    category: "mix",
    weight: 4,
    condition: { type: "duelPlay", count: 1 },
    conditionLabels: { duelPlay: "试用并决斗" },
    rewards: [
      { type: "affinity", key: "fredWeasley", delta: 2 },
      { type: "affinity", key: "georgeWeasley", delta: 2 },
      { type: "item", name: "坩埚蛋糕", count: 1 },
      { type: "money", sickles: 5 },
    ],
  },
  {
    id: "daily_mix_6",
    title: "课堂疑问的现场答案",
    desc: "课堂上听到一个没讲完的问题。认真上一节课，再探索一次，把答案从书本外面找回来。",
    source: "自己的笔记",
    location: "课堂与城堡",
    hook: "你在页边写了一个问号，它看起来很不甘心。",
    completionText: "你把问号改成了一句完整结论。今天的笔记忽然有了故事。",
    icon: "🕯️",
    category: "mix",
    weight: 4,
    condition: { type: "compound", conditions: [
      { type: "goodStudy", count: 1 },
      { type: "explore", count: 1 },
    ]},
    conditionLabels: { goodStudy: "认真听线索", explore: "现场验证" },
    rewards: [
      { type: "material", name: "星尘粉", count: 1 },
      { type: "item", name: "巧克力蛙", count: 1 },
      { type: "housePoint", amount: 7 },
    ],
  },
  {
    id: "daily_social_1",
    title: "金妮想寄一封信",
    desc: "金妮把信封压在书下面，问你去猫头鹰棚时能不能顺路。探索一次，帮她把信送出去。",
    source: "金妮的信封",
    location: "猫头鹰棚方向",
    hook: "她没有说信寄给谁，只把封口按得很紧。",
    completionText: "信被猫头鹰带走。金妮看着它飞远，轻声说了一句谢谢。",
    icon: "✉️",
    category: "explore",
    weight: 5,
    condition: { type: "explore", count: 1 },
    conditionLabels: { explore: "送信跑腿" },
    rewards: [
      { type: "affinity", key: "ginnyWeasley", delta: 4 },
      { type: "money", sickles: 2 },
      { type: "item", name: "南瓜馅饼", count: 1 },
    ],
  },
  {
    id: "daily_social_2",
    title: "潘西的流言来源",
    desc: "有人把一条离谱流言传到了斯莱特林那边。探索两次，找出它最早是从哪条走廊开始的。",
    source: "公共休息室闲谈",
    location: "城堡走廊",
    hook: "流言内容每转述一次就多一只袜子，可信度正在快速下降。",
    completionText: "你找到了流言源头：一句被听错的抱怨。至少城堡少了一条荒唐新闻。",
    icon: "🗞️",
    category: "explore",
    weight: 4,
    condition: { type: "explore", count: 2 },
    conditionLabels: { explore: "追查流言" },
    rewards: [
      { type: "housePoint", amount: 4 },
      { type: "money", sickles: 4 },
      { type: "material", name: "蒲公英", count: 2 },
    ],
  },
];

export const DAILY_QUEST_POOL = [
  ...DAILY_BASE_QUEST_POOL,
  ...DAILY_QUEST_EXPANSION,
];

// ═══════════════════════════════════════════════════════════
// 支线任务
// triggerType：
//   "affinityTier" — 好感度升到指定级别时自动推送
//   "npcPublish"   — NPC主动发布（在好感度面板互动时可见）
// ═══════════════════════════════════════════════════════════

export const SIDE_QUESTS = [

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

  // ── 时间转换器类 ───────────────────────────────────────

  {
    id: "ach_tt_first",
    title: "时间旅行者",
    desc: "第一次使用时间转换器。",
    icon: "⏳",
    category: "special",
    condition: { type: "timeTurnerUse", count: 1 },
    rewards: [{ type: "housePoint", amount: 10 }],
  },
  {
    id: "ach_tt_5",
    title: "反复横跳",
    desc: "累计使用时间转换器5次。",
    icon: "🔄",
    category: "special",
    condition: { type: "timeTurnerUse", count: 5 },
    rewards: [
      { type: "housePoint", amount: 20 },
      { type: "item", name: "巧克力蛙", count: 2 },
    ],
  },
  {
    id: "ach_tt_20",
    title: "时间的囚徒",
    desc: "累计使用时间转换器20次。赫敏·格兰杰也会为你叹服。",
    icon: "🕰️",
    category: "special",
    condition: { type: "timeTurnerUse", count: 20 },
    rewards: [
      { type: "housePoint", amount: 50 },
      { type: "material", name: "时间之沙", count: 1 },
    ],
  },
];

// ═══════════════════════════════════════════════════════════
// 工具
// ═══════════════════════════════════════════════════════════

/**
 * 按权重从日常任务池中随机抽取N条
 */
export function drawDailyQuests(count = 3, pool = DAILY_QUEST_POOL) {
  const source = [...pool];
  const result = [];
  const used   = new Set();

  for (let i = 0; i < count && used.size < source.length; i++) {
    let r = Math.random() * source.filter(q => !used.has(q.id))
              .reduce((s, q) => s + (q.weight || 1), 0);
    for (const q of source) {
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

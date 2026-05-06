/**
 * duel-data.js
 * 决斗系统数据层
 *
 * 包含：
 *   STUDENT_OPPONENTS   — 匿名学生对手（1v1 / 4v4 随机对手池）
 *   CHARACTER_DUEL_STATS — 好感度角色的战斗属性（邀请队友 / 选为对手）
 *   ENEMY_TEAMS         — 预设对手队伍组合（4v4用）
 *   getAvailableAllies  — 读取好感度，返回可邀请队友列表
 *   getAvailableOpponents — 返回可选对手列表（学生+角色）
 */

// ═══════════════════════════════════════════════════════════
// 匿名学生对手池
// ═══════════════════════════════════════════════════════════

export const STUDENT_OPPONENTS = [
  {
    id: "firstYear",
    name: "一年级新生",
    portrait: "🧑‍🎓",
    level: 1,
    hp: 40,
    spells: ["lumos", "accio"],
    aiAccuracy: 0.55,
    aiDelay: [1200, 2000],
    flavorText: "手持魔杖，神情紧张，还没学会怎么稳定持杖。",
    role: "damage",
    rewardBase: 10,
  },
  {
    id: "secondYear",
    name: "二年级学生",
    portrait: "🧑‍🎓",
    level: 2,
    hp: 55,
    spells: ["expelliarmus", "protego", "accio"],
    aiAccuracy: 0.65,
    aiDelay: [1000, 1800],
    flavorText: "已经上过一年魔咒课，除你武器用得还算流畅。",
    role: "damage",
    rewardBase: 18,
  },
  {
    id: "thirdYear",
    name: "三年级学生",
    portrait: "🧑‍🎓",
    level: 3,
    hp: 70,
    spells: ["expelliarmus", "protego", "stupefy", "accio"],
    aiAccuracy: 0.72,
    aiDelay: [800, 1500],
    flavorText: "镜片后的眼睛冷静地打量着你，显然做过充分准备。",
    role: "damage",
    rewardBase: 28,
  },
  {
    id: "fourthYear",
    name: "四年级学生",
    portrait: "🧑‍🎓",
    level: 4,
    hp: 85,
    spells: ["expelliarmus", "protego", "stupefy", "diffindo", "depulso"],
    aiAccuracy: 0.78,
    aiDelay: [700, 1300],
    flavorText: "斜靠着墙，嘴角带着一丝傲慢。显然觉得这场决斗毫无悬念。",
    role: "damage",
    rewardBase: 40,
  },
  {
    id: "duelClub",
    name: "决斗俱乐部选手",
    portrait: "⚔️",
    level: 5,
    hp: 100,
    spells: ["expelliarmus", "protego", "stupefy", "diffindo", "bombarda", "glacius"],
    aiAccuracy: 0.85,
    aiDelay: [600, 1100],
    flavorText: "这人在决斗俱乐部练了两年——每个手势都干净利落。",
    role: "damage",
    rewardBase: 60,
  },
  {
    id: "prefect",
    name: "级长",
    portrait: "🏅",
    level: 6,
    hp: 120,
    spells: ["protego", "stupefy", "expelliarmus", "incendio", "glacius", "arresto"],
    aiAccuracy: 0.88,
    aiDelay: [500, 1000],
    flavorText: "胸口的级长徽章在烛光下反光。他的眼神平静，这种平静比愤怒更难对付。",
    role: "tank",
    rewardBase: 85,
  },
];

// ═══════════════════════════════════════════════════════════
// 好感度角色战斗属性
// 同时适用于：邀请为队友 / 选为1v1对手 / 作为4v4对手成员
// ═══════════════════════════════════════════════════════════

export const CHARACTER_DUEL_STATS = {

  // ── 麻瓜研究教师组 ──────────────────────────────────────

  sylviaMacmillan: {
    name: "西尔维娅·麦克米兰",
    portrait: "🪡",
    role: "support",           // 偏好：优先治疗和防护
    hp: 90,
    spells: ["protego", "reparo", "accio", "expelliarmus"],
    aiAccuracy: 0.72,
    aiDelay: [900, 1500],
    requiredTier: 2,           // 好感度≥2可邀请为队友
    joinQuote: "「……好吧，我不确定这是个好主意，但我来了。」",
    battleQuotes: [
      "「注意你的站位——」",
      "「盔甲护身！快！」",
      "「这不是课堂，但原理是一样的。」",
    ],
    victoryQuote: "「……还不错。不过下次别让我这么担心。」",
    defeatQuote: "「没关系，我们再来。」",
    enemyFlavorText: "她站在对面，手持魔杖，表情比在课堂上严肃得多。",
  },

  augustusFenwick: {
    name: "奥古斯都·芬威克",
    portrait: "🔢",
    role: "damage",
    hp: 80,
    spells: ["stupefy", "diffindo", "expelliarmus", "depulso"],
    aiAccuracy: 0.76,
    aiDelay: [750, 1300],
    requiredTier: 2,
    joinQuote: "「从数学角度来看，我们胜算还不错——来吧。」",
    battleQuotes: [
      "「角度和速度——就是这样！」",
      "「精准是一切的前提。」",
      "「好，下一个。」",
    ],
    victoryQuote: "「结果完全在预期范围内。」",
    defeatQuote: "「有趣，我需要重新计算。」",
    enemyFlavorText: "他用计算的眼神打量着你，像是已经算好了你的弱点。",
  },

  serafinaMoody: {
    name: "塞拉菲娜·穆迪",
    portrait: "⚡",
    role: "damage",
    hp: 85,
    spells: ["stupefy", "incendio", "bombarda", "expelliarmus"],
    aiAccuracy: 0.80,
    aiDelay: [650, 1100],
    requiredTier: 2,
    joinQuote: "「终于来了点有趣的事情。」",
    battleQuotes: [
      "「燃烧咒——！」",
      "「别站着，动起来！」",
      "「这才像话。」",
    ],
    victoryQuote: "「就这样，下一个。」",
    defeatQuote: "「好吧，他们比我想的有料一点。」",
    enemyFlavorText: "她的站姿随意，但魔杖指向精准——这是见过真实危险的人的样子。",
  },

  elizaLovegood: {
    name: "伊莱莎·洛夫古德",
    portrait: "📖",
    role: "support",
    hp: 75,
    spells: ["protego", "accio", "relashio", "quietus"],
    aiAccuracy: 0.68,
    aiDelay: [1000, 1800],
    requiredTier: 2,
    joinQuote: "「语言即力量——施咒语时，相信你说的每一个字。」",
    battleQuotes: [
      "「词语比你想的更有力量——」",
      "「注意——盔甲护身！」",
      "「……这咒语的词源很有意思。」",
    ],
    victoryQuote: "「这证明了语言的威力，不是吗？」",
    defeatQuote: "「失败也是一种信息。」",
    enemyFlavorText: "她在对面安静地站着，手中魔杖轻轻转动，像是在思考什么词语。",
  },

  constanceShacklebolt: {
    name: "康斯坦丝·沙克博特",
    portrait: "⚖️",
    role: "tank",
    hp: 110,
    spells: ["protego", "expelliarmus", "arresto", "depulso"],
    aiAccuracy: 0.74,
    aiDelay: [850, 1400],
    requiredTier: 2,
    joinQuote: "「规则说决斗需要正当理由。我认为这个理由成立。」",
    battleQuotes: [
      "「在规则允许的范围内——出手！」",
      "「防护盾！」",
      "「这是合理使用。」",
    ],
    victoryQuote: "「结果符合规则。」",
    defeatQuote: "「这需要重新评估。」",
    enemyFlavorText: "她站得很正，像是在执行某项正式程序，而不是参加决斗。",
  },

  // ── 霍格沃茨教授 ─────────────────────────────────────────

  severusSnape: {
    name: "西弗勒斯·斯内普",
    portrait: "🧪",
    role: "damage",
    hp: 130,
    spells: ["stupefy", "expelliarmus", "diffindo", "incendio", "depulso", "glacius"],
    aiAccuracy: 0.92,
    aiDelay: [400, 800],
    requiredTier: 3,           // 斯内普需要好感度≥3
    joinQuote: "「……我不知道为什么要同意这件事。不要让我后悔。」",
    battleQuotes: [
      "「愚蠢——」他冷声说，魔杖已经扬起。",
      "「封堵！」他的声音像在上课，平静而精准。",
      "「你们还在等什么——」",
    ],
    victoryQuote: "「如我所料。」他转身，黑袍扫过地面。",
    defeatQuote: "「……」他一句话没说，但眼神说明了一切。",
    enemyFlavorText: "斯内普站在对面，黑袍纹丝不动，魔杖悬在指尖。这种平静令人不安。",
  },

  minervaMcGonagall: {
    name: "米勒娃·麦格",
    portrait: "🦁",
    role: "tank",
    hp: 140,
    spells: ["protego", "stupefy", "expelliarmus", "diffindo", "arresto", "depulso"],
    aiAccuracy: 0.90,
    aiDelay: [450, 850],
    requiredTier: 2,
    joinQuote: "「好。站直。」",
    battleQuotes: [
      "「盔甲护身——现在！」",
      "「你的左侧——注意——」",
      "「做得不错。」",
    ],
    victoryQuote: "「还可以。」她收起魔杖，「下次做得更好。」",
    defeatQuote: "「起来，」她说，「决斗还没结束。」",
    enemyFlavorText: "麦格教授站在对面，眼镜后的目光冷静而精准，没有任何多余的动作。",
  },

  albusDumbledore: {
    name: "阿不思·邓布利多",
    portrait: "✨",
    role: "support",
    hp: 200,
    spells: ["protego", "stupefy", "expelliarmus", "accio", "incendio", "bombarda", "arresto", "glacius"],
    aiAccuracy: 0.97,
    aiDelay: [300, 600],
    requiredTier: 4,
    joinQuote: "「我在旁边看着就好——」他停顿，眼睛亮了一下，「或者，偶尔出手也无妨。」",
    battleQuotes: [
      "「啊——」他语气温和，魔杖轻扬，「有趣。」",
      "「注意你们的背后。」",
      "「我想，现在是个好时机——」",
    ],
    victoryQuote: "「蜜蜂糖？」他从口袋里掏出一颗，「你们都辛苦了。」",
    defeatQuote: "「很好，」他微笑，「这说明对方相当出色。我们继续。」",
    enemyFlavorText: "邓布利多站在对面，半月形眼镜后的眼睛里有一种宁静的光芒。这让人想起太阳——温暖，但不能直视。",
  },

  // ── 霍格沃茨教授（新增）───────────────────────────────────

  remusLupin: {
    name: "莱姆斯·卢平",
    portrait: "🐺",
    role: "support",
    hp: 110,
    spells: ["protego", "expelliarmus", "stupefy", "diffindo", "reparo"],
    aiAccuracy: 0.85,
    aiDelay: [500, 900],
    requiredTier: 2,
    joinQuote: "「好，我来帮你——但记住，防御永远比进攻重要。」",
    battleQuotes: [
      "「盔甲护身——别慌！」",
      "「很好，保持节奏。」",
      "「你的反应速度不错。」",
    ],
    victoryQuote: "「干得漂亮，」他递过一块巧克力，「这是奖励。」",
    defeatQuote: "「没关系，」他微笑，「失败是最好的老师。」",
    enemyFlavorText: "卢平教授站在对面，温和的笑容下是精准到毫厘的施法节奏。他教你的东西，现在用来对付你了。",
  },

  pomonaSprout: {
    name: "波莫纳·斯普劳特",
    portrait: "🌿",
    role: "tank",
    hp: 120,
    spells: ["protego", "expelliarmus", "stupefy", "arresto", "reparo"],
    aiAccuracy: 0.78,
    aiDelay: [700, 1200],
    requiredTier: 2,
    joinQuote: "「温室里的植物教了我一件事——韧性比力量重要。」",
    battleQuotes: [
      "「像处理触手藤一样——稳住！」",
      "「盔甲护身！」",
      "「好，现在反击。」",
    ],
    victoryQuote: "「不错，像一株茁壮的曼德拉草。」",
    defeatQuote: "「别灰心，连曼德拉草也需要时间成长。」",
    enemyFlavorText: "斯普劳特教授的围裙上还沾着泥土，但她握魔杖的手稳如磐石。",
  },

  filiusFlitwick: {
    name: "弗立维·弗利维克",
    portrait: "🪄",
    role: "damage",
    hp: 95,
    spells: ["expelliarmus", "stupefy", "protego", "diffindo", "bombarda"],
    aiAccuracy: 0.88,
    aiDelay: [450, 850],
    requiredTier: 2,
    joinQuote: "「决斗？当然！这可是魔咒学的实践课！」",
    battleQuotes: [
      "「看好了——除你武器！」",
      "「精准，这就是魔咒学的精髓！」",
      "「漂亮的手势！」",
    ],
    victoryQuote: "「精彩！满分！」他兴奋地跳了一下。",
    defeatQuote: "「没关系，下次手势再标准一些。」",
    enemyFlavorText: "弗立维教授站在一摞书上，但他的魔杖挥舞速度比任何人都快。",
  },

  quirrell: {
    name: "奎洛教授",
    portrait: "🧣",
    role: "damage",
    hp: 80,
    spells: ["stupefy", "expelliarmus", "protego", "incendio"],
    aiAccuracy: 0.70,
    aiDelay: [800, 1400],
    requiredTier: 1,
    joinQuote: "「呃……好、好吧，我试试……」",
    battleQuotes: [
      "「看——看招！」",
      "「这、这个咒语……我练过的……」",
      "「别、别小看我……」",
    ],
    victoryQuote: "「我……我赢了？」他难以置信地看着你。",
    defeatQuote: "「果然……我果然还是不行……」",
    enemyFlavorText: "奎洛教授的围巾遮住了半张脸，但他的手在发抖——是紧张，还是别的什么？",
  },

  // ── 学生角色 ─────────────────────────────────────────────

  harry: {
    name: "哈利·波特",
    portrait: "⚡",
    role: "damage",
    hp: 100,
    spells: ["expelliarmus", "protego", "stupefy", "accio"],
    aiAccuracy: 0.82,
    aiDelay: [500, 900],
    requiredTier: 2,
    joinQuote: "「一起上！我掩护你。」",
    battleQuotes: [
      "「除你武器！」",
      "「注意左边！」",
      "「我们能做到！」",
    ],
    victoryQuote: "「我们赢了！」他的绿眼睛亮了起来。",
    defeatQuote: "「没关系，再来一次。」他擦了擦额角的汗。",
    enemyFlavorText: "哈利·波特站在对面，闪电伤疤下的绿眼睛专注而坚定。他最擅长的咒语只有一个——但那一个就够了。",
  },

  hermione: {
    name: "赫敏·格兰杰",
    portrait: "📚",
    role: "support",
    hp: 85,
    spells: ["protego", "expelliarmus", "stupefy", "reparo", "arresto"],
    aiAccuracy: 0.86,
    aiDelay: [500, 900],
    requiredTier: 2,
    joinQuote: "「我已经背过了所有决斗规则——第二条，不许用不可饶恕咒。」",
    battleQuotes: [
      "「盔甲护身——快！」",
      "「根据《决斗基础》，现在应该防守！」",
      "「你的施法角度偏了三度！」",
    ],
    victoryQuote: "「果然，准备充分就不会输。」",
    defeatQuote: "「我需要再研究一下……」她已经在翻书了。",
    enemyFlavorText: "赫敏·格兰杰站在对面，魔杖握得标准而有力。她大概已经把你的弱点全分析完了。",
  },

  ron: {
    name: "罗恩·韦斯莱",
    portrait: "♟️",
    role: "tank",
    hp: 105,
    spells: ["expelliarmus", "protego", "stupefy", "depulso"],
    aiAccuracy: 0.72,
    aiDelay: [700, 1300],
    requiredTier: 2,
    joinQuote: "「来吧！韦斯莱家的人从来不退缩——呃，大部分时候。」",
    battleQuotes: [
      "「看我的——！」",
      "「嘿，我挡住了！」",
      "「好吧，这比下棋刺激。」",
    ],
    victoryQuote: "「看到了吗！我也能赢！」",
    defeatQuote: "「呃……至少我试了。」",
    enemyFlavorText: "罗恩·韦斯莱握着魔杖，看起来有点紧张——但他的眼神告诉你，他不会轻易认输。",
  },

  draco: {
    name: "德拉科·马尔福",
    portrait: "🐍",
    role: "damage",
    hp: 90,
    spells: ["expelliarmus", "stupefy", "serpensortia", "depulso", "protego"],
    aiAccuracy: 0.80,
    aiDelay: [550, 1000],
    requiredTier: 1,
    joinQuote: "「哼，你倒是有点胆量。」",
    battleQuotes: [
      "「你配做我的对手吗？」",
      "「太慢了——」",
      "「这就是你的水平？」",
    ],
    victoryQuote: "「如我所料。」他收起魔杖，嘴角带着一丝冷笑。",
    defeatQuote: "「……这次不算。」他转身就走。",
    enemyFlavorText: "德拉科·马尔福站在对面，铂金色的头发在烛光下闪着冷光。他的笑容比他的咒语更让人不舒服。",
  },

  neville: {
    name: "纳威·隆巴顿",
    portrait: "🌱",
    role: "tank",
    hp: 110,
    spells: ["expelliarmus", "protego", "stupefy", "diffindo"],
    aiAccuracy: 0.68,
    aiDelay: [800, 1500],
    requiredTier: 2,
    joinQuote: "「我……我可以的。对，我可以的。」",
    battleQuotes: [
      "「盔甲护身——！」",
      "「我……我做到了？」",
      "「格兰芬多不认输！」",
    ],
    victoryQuote: "「我……我赢了？」他难以置信地看着自己的魔杖。",
    defeatQuote: "「没关系……我习惯了。」他苦笑了一下。",
    enemyFlavorText: "纳威·隆巴顿握着魔杖的手在微微发抖——但他的脚没有后退一步。",
  },

  luna: {
    name: "卢娜·洛夫古德",
    portrait: "🌙",
    role: "support",
    hp: 80,
    spells: ["protego", "expelliarmus", "stupefy", "accio", "reparo"],
    aiAccuracy: 0.74,
    aiDelay: [700, 1300],
    requiredTier: 2,
    joinQuote: "「Nargles说今天适合决斗。」",
    battleQuotes: [
      "「你的咒语飞歪了，可能是Wrackspurt在干扰。」",
      "「盔甲护身——这招我练过。」",
      "「有趣，你的施法方式很独特。」",
    ],
    victoryQuote: "「也许是对手被Nargles分散了注意力。」她认真地说。",
    defeatQuote: "「没关系，输赢只是角度问题。」",
    enemyFlavorText: "卢娜·洛夫古德站在对面，萝卜耳环晃来晃去，看起来完全没把决斗当回事——但她的魔杖稳得出奇。",
  },

  ginnyWeasley: {
    name: "金妮·韦斯莱",
    portrait: "🔥",
    role: "damage",
    hp: 90,
    spells: ["expelliarmus", "stupefy", "diffindo", "bombarda", "protego"],
    aiAccuracy: 0.83,
    aiDelay: [500, 950],
    requiredTier: 2,
    joinQuote: "「别小看我——我可是韦斯莱家最猛的。」",
    battleQuotes: [
      "「看招！」",
      "「太慢了！」",
      "「这就是格兰芬多的打法！」",
    ],
    victoryQuote: "「怎么样？」她收起魔杖，嘴角带着得意的笑。",
    defeatQuote: "「下次你没那么幸运了。」",
    enemyFlavorText: "金妮·韦斯莱站在对面，红头发像火焰一样，眼神比她的蝙蝠精咒还锐利。",
  },

  fredWeasley: {
    name: "弗雷德·韦斯莱",
    portrait: "🃏",
    role: "damage",
    hp: 95,
    spells: ["expelliarmus", "stupefy", "bombarda", "depulso", "protego"],
    aiAccuracy: 0.78,
    aiDelay: [550, 1000],
    requiredTier: 2,
    joinQuote: "「决斗？乔治不在的时候，我一个人也能赢——大概。」",
    battleQuotes: [
      "「送你一个惊喜——爆炸咒！」",
      "「这可不是恶作剧——好吧，有一点是。」",
      "「别眨眼！」",
    ],
    victoryQuote: "「韦斯莱家的胜利！」他比了个V。",
    defeatQuote: "「好吧，下次带乔治来。」",
    enemyFlavorText: "弗雷德·韦斯莱站在对面，嘴角带着那种让你不安的笑——他肯定藏了什么花招。",
  },

  georgeWeasley: {
    name: "乔治·韦斯莱",
    portrait: "🃏",
    role: "damage",
    hp: 95,
    spells: ["expelliarmus", "stupefy", "bombarda", "depulso", "protego"],
    aiAccuracy: 0.78,
    aiDelay: [550, 1000],
    requiredTier: 2,
    joinQuote: "「弗雷德不在？没关系，我一个人就够——我们本来就一模一样。」",
    battleQuotes: [
      "「接招！」",
      "「这招是新产品——还没上市。」",
      "「别担心，只是轻微爆炸。」",
    ],
    victoryQuote: "「韦斯莱魔法把戏坊——决斗分店！」",
    defeatQuote: "「下次一定带足臭气弹。」",
    enemyFlavorText: "乔治·韦斯莱站在对面，表情和弗雷德一模一样——你甚至不确定这是不是弗雷德假扮的。",
  },

  siriusBlack: {
    name: "小天狼星·布莱克",
    portrait: "🐕",
    role: "damage",
    hp: 115,
    spells: ["expelliarmus", "stupefy", "diffindo", "bombarda", "protego", "incendio"],
    aiAccuracy: 0.87,
    aiDelay: [450, 850],
    requiredTier: 3,
    joinQuote: "「终于来点有意思的了——我等这一天等了十二年。」",
    battleQuotes: [
      "「来啊！布莱克家的人从不退缩！」",
      "「这就是阿兹卡班之后的自由——痛快！」",
      "「你的左侧露破绽了！」",
    ],
    victoryQuote: "「哈！就像当年和詹姆一起——」他停住，笑了。",
    defeatQuote: "「不错，你让我想起了自己年轻的时候。」",
    enemyFlavorText: "小天狼星·布莱克站在对面，黑发垂在眼前，眼神里有十二年的压抑和此刻的痛快。",
  },
};

// ═══════════════════════════════════════════════════════════
// 预设 4v4 对手队伍组合
// ═══════════════════════════════════════════════════════════

export const ENEMY_TEAMS = [
  {
    id: "slytherin_squad",
    name: "斯莱特林小队",
    icon: "🐍",
    difficulty: 2,
    flavorText: "四个斯莱特林学生，步调一致，眼神里有同一种冷漠。",
    members: [
      { ...STUDENT_OPPONENTS[3], name: "德拉科式的四年级生" },
      { ...STUDENT_OPPONENTS[2], name: "斯莱特林三年级" },
      { ...STUDENT_OPPONENTS[2], name: "斯莱特林三年级" },
      { ...STUDENT_OPPONENTS[1], name: "斯莱特林二年级" },
    ],
  },
  {
    id: "duel_club_elite",
    name: "决斗俱乐部精英队",
    icon: "⚔️",
    difficulty: 3,
    flavorText: "他们在决斗俱乐部里见过太多阵势——对你们投来评估的目光。",
    members: [
      { ...STUDENT_OPPONENTS[4], name: "决斗俱乐部队长" },
      { ...STUDENT_OPPONENTS[4], name: "决斗俱乐部老将" },
      { ...STUDENT_OPPONENTS[3], name: "决斗俱乐部四年级" },
      { ...STUDENT_OPPONENTS[3], name: "决斗俱乐部四年级" },
    ],
  },
  {
    id: "prefect_team",
    name: "级长团队",
    icon: "🏅",
    difficulty: 4,
    flavorText: "四名级长，胸口的徽章在烛光下一齐发光。他们有权在走廊扣你分——现在他们要在这里赢你。",
    members: [
      { ...STUDENT_OPPONENTS[5], name: "格兰芬多级长" },
      { ...STUDENT_OPPONENTS[5], name: "拉文克劳级长" },
      { ...STUDENT_OPPONENTS[5], name: "赫奇帕奇级长" },
      { ...STUDENT_OPPONENTS[5], name: "斯莱特林级长" },
    ],
  },
  {
    id: "mixed_random",
    name: "随机混合对手",
    icon: "🎲",
    difficulty: 2,
    flavorText: "来自不同学院、不同年级——唯一的共同点是今天想赢你。",
    members: null,             // null = 运行时随机生成
    randomPool: STUDENT_OPPONENTS,
    randomCount: 4,
  },
  {
    id: "teachers_wrath",
    name: "教授联队",
    icon: "🎓",
    difficulty: 5,
    flavorText: "四位教授站在对面，表情各不相同，但目的是一样的。",
    members: [
      CHARACTER_DUEL_STATS.minervaMcGonagall,
      CHARACTER_DUEL_STATS.severusSnape,
      CHARACTER_DUEL_STATS.serafinaMoody,
      CHARACTER_DUEL_STATS.constanceShacklebolt,
    ],
  },
  {
    id: "custom",
    name: "自定义对手",
    icon: "✏️",
    difficulty: 0,            // 自定义，难度由成员决定
    flavorText: "你选择了自己的对手——愿赌服输。",
    members: null,             // 由玩家在 UI 里选择
    isCustom: true,
  },
];

// ═══════════════════════════════════════════════════════════
// 工具函数
// ═══════════════════════════════════════════════════════════

/**
 * 获取当前可邀请的队友列表（好感度达标）
 * @returns {Array} 可邀请的角色战斗数据列表，含 tierCurrent 字段
 */
function _isKnown(key) {
  try {
    const raw = localStorage.getItem("hogwarts");
    const data = raw ? JSON.parse(raw) : {};
    if (data.knownCharacters?.includes(key)) return true;
    if (data.affinity?.[key]) return true;
    return false;
  } catch (e) { return false; }
}

function _getTier(key) {
  try {
    const raw = localStorage.getItem("hogwarts");
    const data = raw ? JSON.parse(raw) : {};
    const aff = data.affinity?.[key];
    if (!aff) return 0;
    const v = typeof aff === 'object' ? (aff.value || 0) : aff;
    if (v >= 80) return 5;
    if (v >= 60) return 4;
    if (v >= 40) return 3;
    if (v >= 20) return 2;
    if (v >= 0) return 1;
    if (v >= -39) return -1;
    return -2;
  } catch (e) { return 0; }
}

export function getAvailableAllies() {
  const result = [];
  Object.entries(CHARACTER_DUEL_STATS).forEach(([key, stats]) => {
    const known = _isKnown(key);
    const tier = _getTier(key);
    result.push({
      ...stats,
      characterKey: key,
      tierCurrent: tier,
      canInvite: known,
    });
  });
  return result.sort((a, b) => {
    if (a.canInvite !== b.canInvite) return a.canInvite ? -1 : 1;
    return b.tierCurrent - a.tierCurrent;
  });
}

export function getAvailableOpponents1v1() {
  const characters = Object.entries(CHARACTER_DUEL_STATS)
    .map(([key, stats]) => {
      const known = _isKnown(key);
      const tier = _getTier(key);
      return { ...stats, characterKey: key, tierCurrent: tier, canChallenge: known };
    })
    .filter(c => c.canChallenge);

  return [
    ...STUDENT_OPPONENTS.map(o => ({ ...o, isStudent: true, canChallenge: true })),
    ...characters.map(c => ({ ...c, isStudent: false })),
  ];
}

export function getAffinityCooperation(characterKey) {
  const tier = _getTier(characterKey);
  if (tier >= 5) return { accuracyBonus: 0.15, healChance: 0.4, shieldPriority: true, label: "完美配合" };
  if (tier >= 4) return { accuracyBonus: 0.10, healChance: 0.3, shieldPriority: true, label: "默契" };
  if (tier >= 3) return { accuracyBonus: 0.06, healChance: 0.2, shieldPriority: false, label: "信任" };
  if (tier >= 2) return { accuracyBonus: 0.03, healChance: 0.1, shieldPriority: false, label: "认识" };
  if (tier >= 1) return { accuracyBonus: 0, healChance: 0, shieldPriority: false, label: "陌生" };
  if (tier < 0)  return { accuracyBonus: -0.10, healChance: 0, shieldPriority: false, label: "敌意" };
  return { accuracyBonus: 0, healChance: 0, shieldPriority: false, label: "陌生" };
}

export function getAffinityBattleQuotes(characterKey, defaultQuotes) {
  const tier = _getTier(characterKey);
  const quotes = [...(defaultQuotes || [])];
  if (tier >= 4 && quotes.length > 0) {
    const closeQuotes = {
      harry: "「我不会让你倒下的——我发誓。」",
      hermione: "「你的左侧——我来挡！」",
      ron: "「兄弟，我罩你！」",
      draco: "「……别误会，我只是不想输给弱队。」",
      neville: "「这次，换我来保护你！」",
      luna: "「你比Nargles可靠多了。」",
      ginnyWeasley: "「谁敢动你，先过我这关！」",
      fredWeasley: "「放心，我的爆炸咒只炸对面！」",
      georgeWeasley: "「你负责赢，我负责帅。」",
      siriusBlack: "「你就像詹姆的孩子——我不会让你出事。」",
      severusSnape: "「……别死。」",
      minervaMcGonagall: "「格兰芬多不会丢下自己人！」",
      remusLupin: "「我答应过要保护你们——我会做到。」",
      albusDumbledore: "「有我在，放心施法。」",
      pomonaSprout: "「像曼德拉草一样——扎根，不倒！」",
      filiusFlitwick: "「你的咒语越来越漂亮了！」",
      quirrell: "「我……我可以帮忙的……」",
      sylviaMacmillan: "「别担心，我在看着呢。」",
      augustusFenwick: "「概率在我们这边！」",
      serafinaMoody: "「别磨蹭，冲！」",
      elizaLovegood: "「语言有力量——你的咒语也是。」",
      constanceShacklebolt: "「规则允许互相保护。」",
    };
    const special = closeQuotes[characterKey];
    if (special) quotes.push(special);
  }
  return quotes;
}

/**
 * 生成随机对手队伍（用于 mixed_random）
 * @param {Array} pool
 * @param {number} count
 */
export function buildRandomTeam(pool, count) {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((o, i) => ({
    ...o,
    name: `${o.name}${i > 0 ? `（${i+1}）` : ''}`,
  }));
}

// 全局挂载
window.duelData = {
  STUDENT_OPPONENTS,
  CHARACTER_DUEL_STATS,
  ENEMY_TEAMS,
  getAvailableAllies,
  getAvailableOpponents1v1,
  getAffinityCooperation,
  getAffinityBattleQuotes,
  buildRandomTeam,
};

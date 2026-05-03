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
    requiredTier: 4,           // 邓布利多需要好感度≥4才能邀请
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
export function getAvailableAllies() {
  const result = [];
  Object.entries(CHARACTER_DUEL_STATS).forEach(([key, stats]) => {
    const tier = window.affinitySystem?.getTier?.(key) ?? 0;
    result.push({
      ...stats,
      characterKey: key,
      tierCurrent: tier,
      canInvite: tier >= stats.requiredTier,
    });
  });
  // 按好感度降序排，可邀请的在前
  return result.sort((a, b) => {
    if (a.canInvite !== b.canInvite) return a.canInvite ? -1 : 1;
    return b.tierCurrent - a.tierCurrent;
  });
}

/**
 * 获取 1v1 可选对手列表（学生池 + 好感度达标的角色）
 * @returns {Array}
 */
export function getAvailableOpponents1v1() {
  const allies = Object.entries(CHARACTER_DUEL_STATS)
    .map(([key, stats]) => {
      const tier = window.affinitySystem?.getTier?.(key) ?? 0;
      return { ...stats, characterKey: key, tierCurrent: tier, canChallenge: tier >= 1 };
    })
    .filter(c => c.canChallenge);

  return [
    ...STUDENT_OPPONENTS.map(o => ({ ...o, isStudent: true, canChallenge: true })),
    ...allies.map(c => ({ ...c, isStudent: false })),
  ];
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
  buildRandomTeam,
};

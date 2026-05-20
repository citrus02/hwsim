// duel-team-service.js - known character duel stats and 4v4 team helpers
import { OPPONENTS } from './duel-config.js';

function getSave() { return window.saveSys?.getSave?.() || {}; }

export const KNOWN_CHARACTERS = {
  minervaMcGonagall: { name: "米勒娃·麦格", portrait: "🐱", hp: 130, role: "tank", spells: ["protego","expelliarmus","stupefy","depulso"], aiAccuracy: 0.9, aiDelay: [400,800], enemyFlavorText: "麦格教授站在对面，方形眼镜后的眼神比她的咒语还锐利。", joinQuote: "「格兰芬多不会退缩。」" },
  severusSnape: { name: "西弗勒斯·斯内普", portrait: "🧪", hp: 120, role: "damage", spells: ["expelliarmus","stupefy","diffindo","protego","incendio"], aiAccuracy: 0.92, aiDelay: [350,700], enemyFlavorText: "斯内普教授的黑袍在暗处飘动，他甚至懒得看你——但他的魔杖已经举起。", joinQuote: "「……别拖后腿。」" },
  albusDumbledore: { name: "阿不思·邓布利多", portrait: "✨", hp: 200, role: "support", spells: ["protego","stupefy","expelliarmus","accio","incendio","bombarda"], aiAccuracy: 0.97, aiDelay: [300,600], enemyFlavorText: "邓布利多站在对面，半月形眼镜后的眼睛里有一种宁静的光芒。", joinQuote: "「偶尔出手也无妨。」" },
  filiusFlitwick: { name: "弗立维·弗利维克", portrait: "🪄", hp: 95, role: "damage", spells: ["expelliarmus","stupefy","protego","diffindo","bombarda"], aiAccuracy: 0.88, aiDelay: [450,850], enemyFlavorText: "弗立维教授站在一摞书上，但他的魔杖挥舞速度比任何人都快。", joinQuote: "「决斗？当然！」" },
  pomonaSprout: { name: "波莫纳·斯普劳特", portrait: "🌿", hp: 120, role: "tank", spells: ["protego","expelliarmus","stupefy","arresto","reparo"], aiAccuracy: 0.78, aiDelay: [700,1200], enemyFlavorText: "斯普劳特教授的围裙上还沾着泥土，但她握魔杖的手稳如磐石。", joinQuote: "「韧性比力量重要。」" },
  quirrell: { name: "奎洛教授", portrait: "🧣", hp: 80, role: "damage", spells: ["stupefy","expelliarmus","protego","incendio"], aiAccuracy: 0.7, aiDelay: [800,1400], enemyFlavorText: "奎洛教授的围巾遮住了半张脸，但他的手在发抖。", joinQuote: "「呃……好吧，我试试……」" },
  rolandaHooch: { name: "罗兰达·霍琦", portrait: "🦅", hp: 100, role: "damage", spells: ["expelliarmus","stupefy","protego","depulso"], aiAccuracy: 0.82, aiDelay: [500,900], enemyFlavorText: "霍琦教授的黄色鹰眼紧盯着你，像审视一个犯规的球员。", joinQuote: "「注意你的姿势！」" },
  remusLupin: { name: "莱姆斯·卢平", portrait: "🐺", hp: 110, role: "support", spells: ["protego","expelliarmus","stupefy","diffindo","reparo"], aiAccuracy: 0.85, aiDelay: [500,900], enemyFlavorText: "卢平教授温和的笑容下是精准到毫厘的施法节奏。", joinQuote: "「防御永远比进攻重要。」" },
  harry: { name: "哈利·波特", portrait: "⚡", hp: 100, role: "damage", spells: ["expelliarmus","protego","stupefy","accio"], aiAccuracy: 0.82, aiDelay: [500,900], enemyFlavorText: "哈利·波特站在对面，闪电伤疤下的绿眼睛专注而坚定。", joinQuote: "「一起上！我掩护你。」" },
  hermione: { name: "赫敏·格兰杰", portrait: "📚", hp: 85, role: "support", spells: ["protego","expelliarmus","stupefy","reparo","arresto"], aiAccuracy: 0.86, aiDelay: [500,900], enemyFlavorText: "赫敏·格兰杰站在对面，魔杖握得标准而有力。", joinQuote: "「我已经背过了所有决斗规则。」" },
  ron: { name: "罗恩·韦斯莱", portrait: "♟️", hp: 105, role: "tank", spells: ["expelliarmus","protego","stupefy","depulso"], aiAccuracy: 0.72, aiDelay: [700,1300], enemyFlavorText: "罗恩·韦斯莱握着魔杖，看起来有点紧张——但他的眼神告诉你，他不会轻易认输。", joinQuote: "「来吧！韦斯莱家的人不退缩！」" },
  draco: { name: "德拉科·马尔福", portrait: "🐍", hp: 90, role: "damage", spells: ["expelliarmus","stupefy","depulso","protego"], aiAccuracy: 0.8, aiDelay: [550,1000], enemyFlavorText: "德拉科·马尔福站在对面，铂金色的头发在烛光下闪着冷光。", joinQuote: "「哼，你倒是有点胆量。」" },
  neville: { name: "纳威·隆巴顿", portrait: "🌱", hp: 110, role: "tank", spells: ["expelliarmus","protego","stupefy","diffindo"], aiAccuracy: 0.68, aiDelay: [800,1500], enemyFlavorText: "纳威·隆巴顿握着魔杖的手在微微发抖——但他的脚没有后退一步。", joinQuote: "「我……我可以的。」" },
  luna: { name: "卢娜·洛夫古德", portrait: "🌙", hp: 80, role: "support", spells: ["protego","expelliarmus","stupefy","accio","reparo"], aiAccuracy: 0.74, aiDelay: [700,1300], enemyFlavorText: "卢娜·洛夫古德站在对面，萝卜耳环晃来晃去，看起来完全没把决斗当回事。", joinQuote: "「Nargles说今天适合决斗。」" },
  ginnyWeasley: { name: "金妮·韦斯莱", portrait: "🔥", hp: 90, role: "damage", spells: ["expelliarmus","stupefy","diffindo","bombarda","protego"], aiAccuracy: 0.83, aiDelay: [500,950], enemyFlavorText: "金妮·韦斯莱站在对面，红头发像火焰一样。", joinQuote: "「别小看我！」" },
  fredWeasley: { name: "弗雷德·韦斯莱", portrait: "🃏", hp: 95, role: "damage", spells: ["expelliarmus","stupefy","bombarda","depulso","protego"], aiAccuracy: 0.78, aiDelay: [550,1000], enemyFlavorText: "弗雷德·韦斯莱站在对面，嘴角带着那种让你不安的笑。", joinQuote: "「我一个人也能赢——大概。」" },
  georgeWeasley: { name: "乔治·韦斯莱", portrait: "🃏", hp: 95, role: "damage", spells: ["expelliarmus","stupefy","bombarda","depulso","protego"], aiAccuracy: 0.78, aiDelay: [550,1000], enemyFlavorText: "乔治·韦斯莱站在对面，表情和弗雷德一模一样。", joinQuote: "「我一个人就够。」" },
  siriusBlack: { name: "小天狼星·布莱克", portrait: "🐕", hp: 115, role: "damage", spells: ["expelliarmus","stupefy","diffindo","bombarda","protego","incendio"], aiAccuracy: 0.87, aiDelay: [450,850], enemyFlavorText: "小天狼星·布莱克站在对面，黑发垂在眼前，眼神里有十二年的压抑。", joinQuote: "「终于来点有意思的了。」" },
};

export function _getKnownCharacters() {
  const result = [];
  try {
    const data = getSave();
    Object.entries(KNOWN_CHARACTERS).forEach(([key, stats]) => {
      const known = data.knownCharacters?.includes(key) || !!data.affinity?.[key];
      if (known) {
        const aff = data.affinity?.[key];
        const v = typeof aff === 'object' ? (aff.value || 0) : (aff || 0);
        let tier = 1;
        if (v >= 80) tier = 5; else if (v >= 60) tier = 4; else if (v >= 40) tier = 3; else if (v >= 20) tier = 2; else if (v < 0) tier = -1;
        result.push({ ...stats, characterKey: key, tierCurrent: tier, isStudent: false, canChallenge: true, canInvite: true });
      }
    });
  } catch (e) {}
  return result;
}

export function _getEnemyTeams() {
  if (window.duelData?.ENEMY_TEAMS?.length) return window.duelData.ENEMY_TEAMS;
  return [
    {
      id: "slytherin_squad", name: "斯莱特林小队", icon: "🐍", difficulty: 2,
      flavorText: "四个斯莱特林学生，步调一致，眼神里有同一种冷漠。",
      members: [
        { ...OPPONENTS[3], name: "德拉科式的四年级生" },
        { ...OPPONENTS[2], name: "斯莱特林三年级" },
        { ...OPPONENTS[2], name: "斯莱特林三年级" },
        { ...OPPONENTS[1], name: "斯莱特林二年级" },
      ],
    },
    {
      id: "duel_club_elite", name: "决斗俱乐部精英队", icon: "⚔️", difficulty: 3,
      flavorText: "他们在决斗俱乐部里见过太多阵势——对你们投来评估的目光。",
      members: [
        { ...OPPONENTS[4], name: "决斗俱乐部队长" },
        { ...OPPONENTS[4], name: "决斗俱乐部老将" },
        { ...OPPONENTS[3], name: "决斗俱乐部四年级" },
        { ...OPPONENTS[3], name: "决斗俱乐部四年级" },
      ],
    },
    {
      id: "prefect_team", name: "级长团队", icon: "🏅", difficulty: 4,
      flavorText: "四名级长，胸口的徽章在烛光下一齐发光。",
      members: [
        { ...OPPONENTS[5], name: "格兰芬多级长" },
        { ...OPPONENTS[5], name: "拉文克劳级长" },
        { ...OPPONENTS[5], name: "赫奇帕奇级长" },
        { ...OPPONENTS[5], name: "斯莱特林级长" },
      ],
    },
    {
      id: "mixed_random", name: "随机混合对手", icon: "🎲", difficulty: 2,
      flavorText: "来自不同学院、不同年级——唯一的共同点是今天想赢你。",
      members: null, randomPool: OPPONENTS, randomCount: 4,
    },
  ];
}

export function _getAffinityCooperation(characterKey) {
  if (window.duelData?.getAffinityCooperation) return window.duelData.getAffinityCooperation(characterKey);
  return { accuracyBonus: 0, healChance: 0, shieldPriority: false, label: "陌生" };
}

export function _buildRandomTeam(pool, count) {
  if (window.duelData?.buildRandomTeam) return window.duelData.buildRandomTeam(pool, count);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((o, i) => ({
    ...o, name: `${o.name}${i > 0 ? `（${i+1}）` : ''}`,
  }));
}

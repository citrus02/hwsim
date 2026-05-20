// duel-config.js - duel opponent pools and spell combat effects

export const NAMED_OPPONENTS = {
  1: [
    { name: "奥利弗·平克斯", house: "赫奇帕奇", flavor: "手指发抖，魔杖差点掉在地上。" },
    { name: "玛格丽特·弗利", house: "格兰芬多", flavor: "紧张地咬着嘴唇，但还是举起了魔杖。" },
    { name: "塞缪尔·巴比奇", house: "拉文克劳", flavor: "嘴里念念有词地复习咒语口诀。" },
    { name: "伊妮德·普朗克特", house: "斯莱特林", flavor: "虽然害怕，但眼神里有一股倔强。" },
    { name: "蒂莫西·珀克斯", house: "格兰芬多", flavor: "第一次站在决斗台上，双腿微微发颤。" },
    { name: "维罗妮卡·斯梅威克", house: "拉文克劳", flavor: "默默背诵着《标准咒语·初级》的每一页。" },
  ],
  2: [
    { name: "菲利克斯·拉什", house: "格兰芬多", flavor: "除你武器已经练了整整一年，终于能稳定释放了。" },
    { name: "多丽丝·珀基斯", house: "赫奇帕奇", flavor: "虽然不擅长攻击咒语，但防御倒是做得不错。" },
    { name: "伦道夫·伯罗斯", house: "斯莱特林", flavor: "嘴角带着一丝轻蔑，觉得一年级生根本不值一提。" },
    { name: "西西莉·万斯", house: "拉文克劳", flavor: "冷静地调整站姿，显然在家练习过。" },
    { name: "赫克托·达利", house: "格兰芬多", flavor: "挥魔杖的姿势很夸张，但咒语倒确实有效。" },
    { name: "米尔德里德·塔特", house: "赫奇帕奇", flavor: "不太情愿上台，但被朋友推了上来。" },
  ],
  3: [
    { name: "昆廷·特林布尔", house: "拉文克劳", flavor: "镜片后的眼睛冷静地打量着你，显然做过充分准备。" },
    { name: "阿格尼丝·梅里韦瑟", house: "格兰芬多", flavor: "三年级就敢挑战高年级，勇气可嘉。" },
    { name: "雷金纳德·科顿", house: "斯莱特林", flavor: "擅长用障碍咒拖延对手，再伺机出击。" },
    { name: "菲比·格林斯特德", house: "赫奇帕奇", flavor: "看起来温和无害，但昏迷咒出手极快。" },
    { name: "巴塞洛缪·克劳奇", house: "斯莱特林", flavor: "家族里出过不少傲罗，决斗是传统。" },
    { name: "尤菲米娅·普拉特", house: "拉文克劳", flavor: "在图书馆研究过每一种决斗咒语的理论。" },
  ],
  4: [
    { name: "康奈利·普威特", house: "格兰芬多", flavor: "韦斯莱家的邻居，继承了红头发和倔脾气。" },
    { name: "贝拉·普威特", house: "格兰芬多", flavor: "康奈利的双胞胎妹妹，咒语比哥哥还快。" },
    { name: "西奥多·诺特", house: "斯莱特林", flavor: "斜靠着墙，嘴角带着一丝傲慢。显然觉得这场决斗毫无悬念。" },
    { name: "格特鲁德·斯平纳", house: "拉文克劳", flavor: "四年级就精通四种攻击咒语，被称为'咒语机器'。" },
    { name: "阿尔伯图斯·弗林特", house: "斯莱特林", flavor: "魁地奇球场上的冲撞让他习惯了对抗。" },
    { name: "罗莎琳·希金斯", house: "赫奇帕奇", flavor: "看起来文静，但四年的魔咒课让她脱胎换骨。" },
  ],
  5: [
    { name: "卡修斯·沃林顿", house: "斯莱特林", flavor: "在决斗俱乐部练了两年——每个手势都干净利落。" },
    { name: "安吉利卡·科尔", house: "格兰芬多", flavor: "五年级的级长候选人，决斗实力是她的竞选资本。" },
    { name: "菲利达·斯普劳特", house: "赫奇帕奇", flavor: "草药学和魔咒双修，咒语带着植物般的生命力。" },
    { name: "达克·塞尔温", house: "斯莱特林", flavor: "家族世代出食死徒，但他只想在决斗中证明自己。" },
    { name: "普鲁登斯·迈尔斯", house: "拉文克劳", flavor: "每场决斗前都会做详细的心理分析。" },
    { name: "鲁弗斯·德里克", house: "格兰芬多", flavor: "沉默寡言，但魔杖从不犹豫。" },
  ],
  6: [
    { name: "埃文·罗齐尔", house: "斯莱特林", flavor: "胸口的级长徽章在烛光下反光，眼神比咒语更冷。" },
    { name: "阿米莉亚·博恩斯", house: "赫奇帕奇", flavor: "魔法部未来的新星，公正且强大。" },
    { name: "吉迪翁·普威特", house: "格兰芬多", flavor: "凤凰社成员的弟弟，决斗天赋丝毫不逊。" },
    { name: "伊万·多卡洛夫", house: "拉文克劳", flavor: "德姆斯特朗转学生，融合了两种决斗风格。" },
    { name: "克拉丽莎·麦克米兰", house: "赫奇帕奇", flavor: "级长中的级长，连教授都对她点头称赞。" },
    { name: "塞拉斯·雅克斯利", house: "斯莱特林", flavor: "法律执行司司长的侄子，决斗风格冷酷高效。" },
  ],
};

export function _pickNamedOpponent(grade) {
  const pool = NAMED_OPPONENTS[grade];
  if (!pool || pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function _pickSecondFromPool(grade, excludeName) {
  const pool = NAMED_OPPONENTS[grade];
  if (!pool || pool.length === 0) return { portrait: "🧑‍🎓", name: "对手的助手" };
  const filtered = pool.filter(n => n.name !== excludeName);
  const pick = filtered.length > 0 ? filtered[Math.floor(Math.random() * filtered.length)] : pool[0];
  return { portrait: "🧑‍🎓", name: pick.name };
}

export const OPPONENTS = [
  {
    id: "firstYear",
    name: "随机一年级新生",
    house: "随机",
    level: 1,
    hp: 40,
    spells: ["lumos", "accio"],
    portrait: "🧑‍🎓",
    flavorText: "手持魔杖，神情紧张，还没学会怎么稳定持杖。",
    aiDelay: [1200, 2000],
    aiAccuracy: 0.55,
    rewardExp: 10,
  },
  {
    id: "secondYear",
    name: "随机二年级学生",
    house: "格兰芬多",
    level: 2,
    hp: 55,
    spells: ["expelliarmus", "protego", "accio"],
    portrait: "🧑‍🎓",
    flavorText: "已经上过一年魔咒课，除你武器用得还算流畅。",
    aiDelay: [1000, 1800],
    aiAccuracy: 0.65,
    rewardExp: 18,
  },
  {
    id: "thirdYear",
    name: "随机三年级学生",
    house: "拉文克劳",
    level: 3,
    hp: 70,
    spells: ["expelliarmus", "protego", "stupefy", "accio"],
    portrait: "🧑‍🎓",
    flavorText: "镜片后的眼睛冷静地打量着你，显然做过充分准备。",
    aiDelay: [800, 1500],
    aiAccuracy: 0.72,
    rewardExp: 28,
  },
  {
    id: "fourthYear",
    name: "随机四年级学生",
    house: "斯莱特林",
    level: 4,
    hp: 85,
    spells: ["expelliarmus", "protego", "stupefy", "diffindo", "depulso"],
    portrait: "🧑‍🎓",
    flavorText: "斜靠着墙，嘴角带着一丝傲慢。显然觉得这场决斗毫无悬念。",
    aiDelay: [700, 1300],
    aiAccuracy: 0.78,
    rewardExp: 40,
  },
  {
    id: "duelClub",
    name: "随机决斗俱乐部选手",
    house: "混合",
    level: 5,
    hp: 100,
    spells: ["expelliarmus", "protego", "stupefy", "diffindo", "bombarda", "glacius"],
    portrait: "⚔️",
    flavorText: "这人在决斗俱乐部练了两年——每个手势都干净利落。",
    aiDelay: [600, 1100],
    aiAccuracy: 0.85,
    rewardExp: 60,
  },
  {
    id: "prefect",
    name: "随机级长",
    house: "拉文克劳",
    level: 6,
    hp: 120,
    spells: ["protego", "stupefy", "expelliarmus", "incendio", "glacius", "arresto"],
    portrait: "🏅",
    flavorText: "胸口的级长徽章在烛光下反光。他/她的眼神平静，这种平静比愤怒更难对付。",
    aiDelay: [500, 1000],
    aiAccuracy: 0.88,
    rewardExp: 85,
  },
];

// ═══════════════════════════════════════════════════════════
// 咒语效果定义（决斗中）
// ═══════════════════════════════════════════════════════════

export const SPELL_EFFECTS = {
  // 伤害型
  stupefy:     { type: "damage",  base: 20, label: "昏昏倒地",  color: "#f87830", icon: "🔴" },
  expelliarmus:{ type: "disarm",  base: 15, label: "除你武器",  color: "#f87878", icon: "💫" },
  diffindo:    { type: "damage",  base: 22, label: "切割咒",    color: "#f8f870", icon: "⚡" },
  bombarda:    { type: "damage",  base: 30, label: "爆炸咒",    color: "#f85820", icon: "💥" },
  incendio:    { type: "damage",  base: 25, label: "燃烧咒",    color: "#f85820", icon: "🔥" },
  depulso:     { type: "knockback",base:12, label: "击退咒",    color: "#c888f8", icon: "💨" },
  glacius:     { type: "slow",    base: 18, label: "冰冻咒",    color: "#a8e8f8", icon: "❄️" },
  relashio:    { type: "damage",  base: 14, label: "力松劲泄",  color: "#f8a850", icon: "✨" },
  arresto:     { type: "slow",    base: 10, label: "停止咒",    color: "#88a8f8", icon: "🛑" },
  // 防御型
  protego:     { type: "shield",  base: 0,  label: "盔甲护身",  color: "#80c8f8", icon: "🛡️" },
  // 工具型（决斗中减益效果）
  accio:       { type: "disrupt", base: 8,  label: "飞来咒",    color: "#f8c870", icon: "🌀" },
  lumos:       { type: "dazzle",  base: 5,  label: "荧光闪烁",  color: "#f8e870", icon: "✦" },
  aguamenti:   { type: "disrupt", base: 10, label: "清水如泉",  color: "#78c8f8", icon: "💧" },
  reparo:      { type: "heal",    base: 12, label: "修复如初",  color: "#a8f0c8", icon: "💚" },
  scourgify:   { type: "disrupt", base: 6,  label: "清理一新",  color: "#c8f8e8", icon: "🌀" },
  serpensortia:{ type: "damage",  base: 18, label: "乌龙出洞",  color: "#5cb85c", icon: "🐍" },
};

// 默认效果（未定义咒语）
export function getSpellEffect(spellId) {
  return SPELL_EFFECTS[spellId] || { type: "damage", base: 10, label: spellId, color: "#aaaaaa", icon: "🔮" };
}

// ═══════════════════════════════════════════════════════════
// 决斗状态
// ═══════════════════════════════════════════════════════════

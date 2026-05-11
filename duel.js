/**
 * duel.js
 * 霍格沃茨决斗系统
 *
 * 流程：
 *   进入决斗 → 选择咒语 → 手势输入（限时）→ 判定命中/失败/超时
 *   → 对手回合 → 循环直到一方HP归零
 *
 * 与现有系统的对接：
 *   - 使用 spell.js 的 getSpellListWithStatus() 获取已解锁咒语
 *   - 使用 gesture-data.js 的 getGestureBySpellId() 获取手势
 *   - 使用 gesture-widget.js 的 GestureWidget.render() 渲染输入
 *   - 使用 save-system.js 的 getSave/setSave 存储决斗记录
 *   - 消耗一次 dailyAction（通过 costAction）
 */

// ── 运行时依赖（通过 window/localStorage 访问，无 import 依赖）──
function getSpellListWithStatus() {
  if (window.getSpellListWithStatus) return window.getSpellListWithStatus();
  const save = window.saveSys?.getSave?.() || {};
  const learned = save.spellList || [];
  const prof    = save.spellProficiency || {};
  return learned.map(id => ({ id, nameCn: id, nameEn: id, isLearned: true, proficiency: prof[id] || 0, sourceType: 'hogwarts' }));
}
function getSave()          { return window.saveSys?.getSave?.() || {}; }
function setSave(data)      { if (window.saveSys?.setSave) window.saveSys.setSave(data); }
function addLog(text)       { window.addLog?.(text); }
function renderLog()        { window.renderLog?.(); }
const GestureWidget = {
  render:        (...a) => window.GestureWidget?.render(...a),
  renderPreview: (...a) => window.GestureWidget?.renderPreview(...a)
};
function getGestureBySpellId(id) { return window.getGestureBySpellId?.(id) || null; }
function getGestureById(id)      { return window.getGestureById?.(id) || null; }

// ═══════════════════════════════════════════════════════════
// 对手数据库
// ═══════════════════════════════════════════════════════════

const NAMED_OPPONENTS = {
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

function _pickNamedOpponent(grade) {
  const pool = NAMED_OPPONENTS[grade];
  if (!pool || pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

function _pickSecondFromPool(grade, excludeName) {
  const pool = NAMED_OPPONENTS[grade];
  if (!pool || pool.length === 0) return { portrait: "🧑‍🎓", name: "对手的助手" };
  const filtered = pool.filter(n => n.name !== excludeName);
  const pick = filtered.length > 0 ? filtered[Math.floor(Math.random() * filtered.length)] : pool[0];
  return { portrait: "🧑‍🎓", name: pick.name };
}

const OPPONENTS = [
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

const SPELL_EFFECTS = {
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
function getSpellEffect(spellId) {
  return SPELL_EFFECTS[spellId] || { type: "damage", base: 10, label: spellId, color: "#aaaaaa", icon: "🔮" };
}

// ═══════════════════════════════════════════════════════════
// 决斗状态
// ═══════════════════════════════════════════════════════════

let _duel = null;

function _resetDuel() { _duel = null; }

function _getPlayerMaxHp() {
  const data = getSave();
  const grade = data.time?.currentGrade || 1;
  const hpTable = { 1: 40, 2: 55, 3: 70, 4: 85, 5: 100, 6: 120, 7: 140 };
  return hpTable[grade] || 40 + (grade - 1) * 15;
}

function _initDuel(opponent, playerSpells, second) {
  const maxHp = _getPlayerMaxHp();
  const oppDisplayName = opponent.displayName || opponent.name;
  const oppDisplayHouse = opponent.displayHouse || opponent.house;
  const oppDisplayFlavor = opponent.displayFlavor || opponent.flavorText;
  _duel = {
    opponent:     { ...opponent, currentHp: opponent.hp, shielded: false, slowed: false, name: oppDisplayName, house: oppDisplayHouse, flavorText: oppDisplayFlavor },
    player:       { hp: maxHp, maxHp, shielded: false, disarmed: false },
    second:       second ? { ...second, currentHp: second.hp || 80, maxHp: second.hp || 80, shielded: false, disarmed: false, active: false } : null,
    round:        1,
    log:          [],
    phase:        "select",
    selectedSpell: null,
    gestureResult: null,
    spellHits:    {},
  };
}

// ═══════════════════════════════════════════════════════════
// UI 主面板
// ═══════════════════════════════════════════════════════════

export function openDuelPanel() {
  document.getElementById("actionMain").style.display = "none";
  const exploreMain = document.getElementById("exploreMain");
  if (exploreMain) exploreMain.style.display = "none";

  document.getElementById("duelMain")?.remove();

  const panel = document.createElement("div");
  panel.id = "duelMain";
  panel.innerHTML = `
    <div class="duel-header">
      <span class="duel-title">⚔️ 决斗俱乐部</span>
      <button class="duel-header-btn" id="duel-grimoire-btn">📖 咒语</button>
      <button class="duel-close-btn" id="duel-close">离开</button>
    </div>
    <div class="duel-body" id="duel-body"></div>`;

  document.querySelector("#actionMain").closest(".card").appendChild(panel);
  document.getElementById("duel-close").onclick = closeDuelPanel;
  document.getElementById("duel-grimoire-btn").onclick = _renderGrimoire;
  _renderModeSelect();
}

export function closeDuelPanel() {
  document.getElementById("duelMain")?.remove();
  document.getElementById("actionMain").style.display = "block";
  _resetDuel();
  if (window.timeSystem?.dailyActionLeft <= 0) {
    setTimeout(() => { window.nextTime?.(); window.syncActionUI?.(); }, 50);
  }
}

// ─── 咒语图鉴 ────────────────────────────────────────────

function _renderGrimoire() {
  const body = document.getElementById("duel-body");
  if (!body) return;
  body.innerHTML = `
    <button class="duel-back-btn" id="duel-back">← 返回</button>
    <div id="duel-grimoire-mount"></div>`;
  document.getElementById("duel-back").onclick = _renderOpponentSelect;

  const mount = document.getElementById("duel-grimoire-mount");
  if (mount && window._renderInlineGrimoire) {
    window._renderInlineGrimoire(mount);
  }
}

// ─── 对手选择 ────────────────────────────────────────────

let _currentMode = "1v1";

function _renderModeSelect() {
  const body = document.getElementById("duel-body");
  if (!body) return;

  body.innerHTML = `
    <div class="duel-mode-select">
      <div class="duel-mode-card" id="duel-pick-1v1">
        <div class="duel-mode-icon">⚔️</div>
        <div class="duel-mode-name">1v1 决斗</div>
        <div class="duel-mode-desc">与一名对手单挑，考验个人实力</div>
      </div>
      <div class="duel-mode-card" id="duel-pick-4v4">
        <div class="duel-mode-icon">🛡️</div>
        <div class="duel-mode-name">4v4 团队战</div>
        <div class="duel-mode-desc">邀请队友组队，挑战敌方队伍</div>
      </div>
    </div>`;

  document.getElementById("duel-pick-1v1").onclick = () => {
    _currentMode = "1v1";
    _renderOpponentSelect();
  };
  document.getElementById("duel-pick-4v4").onclick = () => {
    _currentMode = "4v4";
    _render4v4Select();
  };
}

function _switchMode(mode) {
  _currentMode = mode;
  _renderModeSelect();
}

const KNOWN_CHARACTERS = {
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

function _getKnownCharacters() {
  const result = [];
  try {
    const raw = localStorage.getItem("hogwarts");
    const data = raw ? JSON.parse(raw) : {};
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

function _getEnemyTeams() {
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

function _getAffinityCooperation(characterKey) {
  if (window.duelData?.getAffinityCooperation) return window.duelData.getAffinityCooperation(characterKey);
  return { accuracyBonus: 0, healChance: 0, shieldPriority: false, label: "陌生" };
}

function _buildRandomTeam(pool, count) {
  if (window.duelData?.buildRandomTeam) return window.duelData.buildRandomTeam(pool, count);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map((o, i) => ({
    ...o, name: `${o.name}${i > 0 ? `（${i+1}）` : ''}`,
  }));
}

function _renderOpponentSelect() {
  const body = document.getElementById("duel-body");
  if (!body) return;

  body.innerHTML = `
    <div class="duel-section-title">选择对手</div>
    <div class="duel-opponent-list" id="duel-opp-list"></div>`;

  const list = document.getElementById("duel-opp-list");

  const learnedSpells = getSpellListWithStatus().filter(s => s.isLearned);
  const canFight = learnedSpells.length >= 1;

  const characters = _getKnownCharacters();

  const makeCard = (opp) => {
    const card = document.createElement("div");
    card.className = "duel-opp-card" + (opp.isStudent ? "" : " duel-opp-character");
    const level = opp.level ?? Math.round((opp.hp || 80) / 20);
    const rewardExp = opp.rewardExp ?? opp.rewardBase ?? Math.round((opp.hp || 80) * 0.7);
    const flavor = opp.enemyFlavorText || opp.flavorText;
    const tierLabel = opp.tierCurrent ? ` ❤️${opp.tierCurrent}` : '';
    card.innerHTML = `
      <div class="duel-opp-portrait">${opp.portrait}</div>
      <div class="duel-opp-info">
        <div class="duel-opp-name">${opp.name}
          <span class="duel-opp-level">Lv.${level}${tierLabel}</span>
        </div>
        <div class="duel-opp-flavor">${flavor}</div>
        <div class="duel-opp-meta">
          <span class="duel-opp-hp">❤️ ${opp.hp}</span>
          <span class="duel-opp-reward">经验 +${rewardExp}</span>
        </div>
      </div>`;
    card.style.cursor = canFight ? "pointer" : "not-allowed";
    card.style.opacity = canFight ? "1" : "0.5";
    if (canFight) {
      card.onclick = () => {
        let finalOpp;
        if (opp.isStudent === false && opp.characterKey) {
          finalOpp = { ...opp, level, rewardExp, displayName: opp.name, displayHouse: opp.house || "", displayFlavor: opp.enemyFlavorText || opp.flavorText };
        } else {
          const named = _pickNamedOpponent(opp.level || 1);
          finalOpp = {
            ...opp, level, rewardExp,
            displayName: named ? named.name : opp.name,
            displayHouse: named ? named.house : opp.house,
            displayFlavor: named ? named.flavor : (opp.enemyFlavorText || opp.flavorText),
          };
        }
        _selectSecond(finalOpp, learnedSpells);
      };
    }
    return card;
  };

  OPPONENTS.forEach(opp => list.appendChild(makeCard({ ...opp, isStudent: true })));

  if (characters.length > 0) {
    const divider = document.createElement("div");
    divider.className = "duel-section-title";
    divider.style.marginTop = "12px";
    divider.textContent = "认识的人";
    list.appendChild(divider);
    characters.forEach(opp => list.appendChild(makeCard(opp)));
  }

  if (!canFight) {
    const tip = document.createElement("div");
    tip.className = "duel-notice";
    tip.textContent = "⚠️ 至少需要习得一个咒语才能参与决斗。请先上魔咒课解锁咒语。";
    body.appendChild(tip);
  }
}

function _render4v4Select() {
  const body = document.getElementById("duel-body");
  if (!body) return;

  const learnedSpells = getSpellListWithStatus().filter(s => s.isLearned);
  const canFight = learnedSpells.length >= 1;

  const knownAllies = _getKnownCharacters();

  body.innerHTML = `
    <div class="duel-section-title">🛡️ 邀请队友（最多3人）</div>
    <div class="duel-ally-list" id="duel-ally-list"></div>
    <div class="duel-section-title" style="margin-top:12px">🎯 选择对手队伍</div>
    <div class="duel-team-list" id="duel-team-list"></div>`;

  const allyList = document.getElementById("duel-ally-list");
  const selectedAllies = [];

  if (knownAllies.length === 0) {
    allyList.innerHTML = '<div class="duel-notice">暂无认识的人可以邀请。多去上课和探索吧！</div>';
  } else {
    knownAllies.forEach(ally => {
      const card = document.createElement("div");
      card.className = "duel-ally-card";
      const coop = _getAffinityCooperation(ally.characterKey);
      const coopLabel = coop ? ` · ${coop.label}` : '';
      card.innerHTML = `
        <div class="duel-opp-portrait">${ally.portrait}</div>
        <div class="duel-opp-info">
          <div class="duel-opp-name">${ally.name}<span class="duel-opp-level">❤️${ally.tierCurrent}${coopLabel}</span></div>
          <div class="duel-opp-flavor">${ally.joinQuote}</div>
        </div>
        <div class="duel-ally-check" id="ally-check-${ally.characterKey}">☐</div>`;
      card.onclick = () => {
        const idx = selectedAllies.findIndex(a => a.characterKey === ally.characterKey);
        if (idx >= 0) {
          selectedAllies.splice(idx, 1);
          document.getElementById(`ally-check-${ally.characterKey}`).textContent = "☐";
          card.classList.remove("duel-ally-selected");
        } else if (selectedAllies.length < 3) {
          selectedAllies.push(ally);
          document.getElementById(`ally-check-${ally.characterKey}`).textContent = "☑";
          card.classList.add("duel-ally-selected");
        }
      };
      allyList.appendChild(card);
    });
  }

  const teamList = document.getElementById("duel-team-list");
  const teams = _getEnemyTeams();

  teams.forEach(team => {
    if (team.isCustom) return;
    const card = document.createElement("div");
    card.className = "duel-opp-card";
    const diffStars = "⭐".repeat(Math.min(team.difficulty || 1, 5));
    card.innerHTML = `
      <div class="duel-opp-portrait">${team.icon}</div>
      <div class="duel-opp-info">
        <div class="duel-opp-name">${team.name}<span class="duel-opp-level">${diffStars}</span></div>
        <div class="duel-opp-flavor">${team.flavorText}</div>
      </div>`;
    card.style.cursor = canFight ? "pointer" : "not-allowed";
    card.style.opacity = canFight ? "1" : "0.5";
    if (canFight) {
      card.onclick = () => _start4v4Battle(selectedAllies, team, learnedSpells);
    }
    teamList.appendChild(card);
  });

  if (!canFight) {
    const tip = document.createElement("div");
    tip.className = "duel-notice";
    tip.textContent = "⚠️ 至少需要习得一个咒语才能参与决斗。";
    body.appendChild(tip);
  }
}

function _start4v4Battle(selectedAllies, enemyTeam, playerSpells) {
  if (window.costAction && !window.costAction()) return;
  let members = enemyTeam.members;
  if (!members && enemyTeam.randomPool) {
    members = _buildRandomTeam(enemyTeam.randomPool, enemyTeam.randomCount || 4) ?? [];
  }
  if (!members || members.length === 0) return;

  const alliesData = selectedAllies.map(a => ({ ...a, id: a.characterKey }));

  const callbacks = {
    onLog: (text, cls) => {
      const logEl = document.getElementById("duel-log");
      if (logEl) {
        const entry = document.createElement("div");
        entry.className = cls || "dlog-sys";
        entry.textContent = text;
        logEl.appendChild(entry);
        logEl.scrollTop = logEl.scrollHeight;
      }
    },
    onHPUpdate: (state) => {
      state.myTeam.forEach((u, i) => {
        const bar = document.getElementById(`hp-ally-${i}`);
        if (bar) bar.style.width = `${Math.max(0, (u.hp / u.maxHp) * 100)}%`;
        const num = document.getElementById(`hp-ally-num-${i}`);
        if (num) num.textContent = `${Math.max(0, u.hp)}/${u.maxHp}`;
      });
      state.enemyTeam.forEach((u, i) => {
        const bar = document.getElementById(`hp-enemy-${i}`);
        if (bar) bar.style.width = `${Math.max(0, (u.hp / u.maxHp) * 100)}%`;
        const num = document.getElementById(`hp-enemy-num-${i}`);
        if (num) num.textContent = `${Math.max(0, u.hp)}/${u.maxHp}`;
      });
    },
    onPhaseChange: (phase) => {
      const area = document.getElementById("duel-4v4");
      if (!area) return;
      if (phase === "select") _render4v4SpellSelect(engine, playerSpells);
      else if (phase === "gesture") {}
      else if (phase === "enemy") {
        const info = document.getElementById("duel-4v4-info");
        if (info) info.textContent = "敌方回合...";
      }
    },
    onRoundStart: (round) => {
      const info = document.getElementById("duel-4v4-info");
      if (info) info.textContent = `第 ${round} 回合 — 选择咒语`;
    },
    onResult: (won, gains, record) => {
      _duelEnd4v4(won, gains, record, selectedAllies, enemyTeam);
    },
    onAllyAction: (unit, spellId, success) => {},
    onEnemyAction: (enemy, spellId, success) => {},
  };

  const body = document.getElementById("duel-body");
  body.innerHTML = `
    <div class="duel-4v4" id="duel-4v4">
      <div class="duel-4v4-status">
        <div class="duel-4v4-team">
          <div class="duel-4v4-team-label">🟦 己方</div>
          ${["你", ...alliesData.map(a => a.name)].map((name, i) => `
            <div class="duel-4v4-unit">
              <span class="duel-4v4-unit-name">${i === 0 ? "🧙" : (alliesData[i-1]?.portrait || "🧙")} ${name}</span>
              <div class="duel-hp-bar-wrap"><div class="duel-hp-bar" id="hp-ally-${i}" style="width:100%"></div></div>
              <span class="duel-hp-num" id="hp-ally-num-${i}">${i === 0 ? `${_getPlayerMaxHp()}/${_getPlayerMaxHp()}` : `${alliesData[i-1]?.hp||80}/${alliesData[i-1]?.hp||80}`}</span>
            </div>`).join("")}
        </div>
        <div class="duel-4v4-team">
          <div class="duel-4v4-team-label">🟥 对方</div>
          ${members.map((m, i) => `
            <div class="duel-4v4-unit">
              <span class="duel-4v4-unit-name">${m.portrait || "🧑‍🎓"} ${m.name}</span>
              <div class="duel-hp-bar-wrap"><div class="duel-hp-bar duel-hp-enemy" id="hp-enemy-${i}" style="width:100%"></div></div>
              <span class="duel-hp-num" id="hp-enemy-num-${i}">${m.hp}/${m.hp}</span>
            </div>`).join("")}
        </div>
      </div>
      <div class="duel-4v4-info" id="duel-4v4-info">第 1 回合 — 选择咒语</div>
      <div class="duel-log" id="duel-log"></div>
      <div class="duel-4v4-spells" id="duel-4v4-spells"></div>
    </div>`;

  const engine = window.DuelEngine?.start4v4?.(alliesData, members, playerSpells, callbacks);
  if (!engine) {
    body.innerHTML = '<div class="duel-notice">4v4 模式暂不可用</div>';
  } else {
    const infoEl = document.getElementById("duel-4v4-info");
    if (infoEl) infoEl.textContent = "敬礼中……";
    const spellsEl = document.getElementById("duel-4v4-spells");
    if (spellsEl) spellsEl.innerHTML = "";
    _duelLog(`⚔️ 4v4团队决斗开始！`);
    _duelLog(`双方队员面对面站定，举起魔杖。`);
    setTimeout(() => {
      _duelLog(`🤝 「敬礼！」——双方郑重地相互鞠躬。`);
      setTimeout(() => {
        _duelLog(`三……`);
        setTimeout(() => {
          _duelLog(`二……`);
          setTimeout(() => {
            _duelLog(`一……`);
            setTimeout(() => {
              _duelLog(`⚡ 开始！`);
              if (infoEl) infoEl.textContent = "第 1 回合 — 选择咒语";
              _render4v4SpellSelect(engine, playerSpells);
            }, 500);
          }, 500);
        }, 500);
      }, 600);
    }, 800);
  }
}

function _render4v4SpellSelect(engine, playerSpells) {
  const container = document.getElementById("duel-4v4-spells");
  if (!container || !engine) return;

  container.innerHTML = "";
  const grid = document.createElement("div");
  grid.className = "duel-spell-grid";

  playerSpells.forEach(spell => {
    const btn = document.createElement("button");
    btn.className = "duel-spell-btn";
    const eff = SPELL_EFFECTS[spell.id] || { label: spell.nameCn, icon: "✨", color: "#888" };
    btn.innerHTML = `<span class="duel-spell-icon">${eff.icon}</span> ${eff.label}`;
    btn.style.borderColor = eff.color;
    btn.onclick = () => {
      const targetArea = document.getElementById("duel-4v4-spells");
      if (targetArea) targetArea.innerHTML = '<div class="duel-notice">画出手势...</div>';
      GestureWidget.render(
        targetArea || container,
        spell.id,
        (result) => {
          engine.playerCast(spell.id, result);
        },
        { timeout: 6000 }
      );
    };
    grid.appendChild(btn);
  });

  container.appendChild(grid);
}

function _duelEnd4v4(won, gains, record, allies, enemyTeam) {
  const body = document.getElementById("duel-body");
  if (!body) return;

  if (won) {
    allies.forEach(a => {
      if (a.characterKey) {
        window.affinitySystem?.addAffinity(a.characterKey, 2, 'duel4v4');
      }
    });
  }

  const save = getSave();
  addLog(won
    ? `🏆 4v4团队决斗胜利！`
    : `💔 4v4团队决斗失败。`);
  window.renderLog?.();
  window._questHook_duelEnd?.(won, true);

  const profHTML = gains.length > 0 ? `
    <div class="duel-prof-gains">
      <div class="duel-prof-gains-title">⚡ 熟练度提升</div>
      ${gains.map(g => `
        <div class="duel-prof-gain-row">
          <span>${g.name}</span><span>+${g.gain}%</span><span>${g.mastered ? '【精通】' : `→ ${g.newProf}%`}</span>
        </div>`).join("")}
    </div>` : "";

  body.innerHTML = `
    <div class="duel-result ${won ? 'duel-result-win' : 'duel-result-lose'}">
      <div class="duel-result-icon">${won ? '🏆' : '💔'}</div>
      <div class="duel-result-title">${won ? '团队胜利！' : '团队失败'}</div>
      ${profHTML}
      <div class="duel-result-record">战绩：${record.wins} 胜 / ${record.losses} 负</div>
      <div class="duel-result-btns">
        <button class="duel-btn-primary" id="duel-again">再来一场</button>
        <button class="duel-btn-sec" id="duel-exit">离开决斗场</button>
      </div>
    </div>`;

  document.getElementById("duel-again").onclick = () => _render4v4Select();
  document.getElementById("duel-exit").onclick = closeDuelPanel;
}

// ─── 选择助手 ────────────────────────────────────────────

function _selectSecond(opponent, playerSpells) {
  const body = document.getElementById("duel-body");
  if (!body) return;

  const characters = _getKnownCharacters();
  const oppKey = opponent.characterKey || null;
  const allies = characters.filter(c => c.canInvite !== false && c.characterKey !== oppKey);
  const oppName = opponent.displayName || opponent.name;
  const oppFlavor = opponent.displayFlavor || opponent.flavorText;

  body.innerHTML = `
    <div class="duel-section-title">🤝 选择助手</div>
    <div style="font-size:12px;color:#888;margin-bottom:6px;">对手：${opponent.portrait} ${oppName}（${opponent.displayHouse || opponent.house}）</div>
    <div style="font-size:11px;color:#666;margin-bottom:12px;font-style:italic;">${oppFlavor}</div>
    <div style="font-size:12px;color:#888;margin-bottom:12px;">正式决斗中需要一位助手，在你倒下时接替你继续战斗。也可以独自上场。</div>
    <div class="duel-ally-list" id="duel-second-list"></div>`;

  const list = document.getElementById("duel-second-list");

  const soloCard = document.createElement("div");
  soloCard.className = "duel-opp-card";
  soloCard.innerHTML = `
    <div class="duel-opp-portrait">🧙</div>
    <div class="duel-opp-info">
      <div class="duel-opp-name">独自上场</div>
      <div class="duel-opp-flavor">不需要助手，一个人也能行。</div>
    </div>`;
  soloCard.style.cursor = "pointer";
  soloCard.onclick = () => _startDuel(opponent, playerSpells, null);
  list.appendChild(soloCard);

  allies.forEach(ally => {
    const card = document.createElement("div");
    card.className = "duel-opp-card duel-opp-character";
    const coop = _getAffinityCooperation(ally.characterKey);
    card.innerHTML = `
      <div class="duel-opp-portrait">${ally.portrait || '🧑‍🎓'}</div>
      <div class="duel-opp-info">
        <div class="duel-opp-name">${ally.name} <span class="duel-opp-level">配合度：${coop.label}</span></div>
        <div class="duel-opp-flavor">${coop.label === '陌生' ? '还不太熟悉，但也许能帮上忙。' : coop.label === '信赖' ? '会毫不犹豫地为你挡咒。' : '愿意站在你身边。'}</div>
      </div>`;
    card.style.cursor = "pointer";
    card.onclick = () => _startDuel(opponent, playerSpells, ally);
    list.appendChild(card);
  });
}

// ─── 开始决斗 ────────────────────────────────────────────

function _startDuel(opponent, playerSpells, second) {
  if (window.costAction && !window.costAction()) return;
  _initDuel(opponent, playerSpells, second);

  const maxHp = _getPlayerMaxHp();
  const secondName = second ? `${second.portrait || '🧑‍🎓'} ${second.name}` : null;

  const oppName = opponent.displayName || opponent.name;
  const oppGrade = opponent.level || 1;
  const enemySecond = _pickSecondFromPool(oppGrade, oppName);

  const secondLine = `🤝 你的助手：${secondName || '无'} ｜ 对手的助手：${enemySecond.portrait} ${enemySecond.name}`;

  const body = document.getElementById("duel-body");
  body.innerHTML = `
    <div class="duel-arena" id="duel-arena">
      <!-- 状态栏 -->
      <div class="duel-status-bar">
        <div class="duel-combatant duel-player-side">
          <div class="duel-comb-name">你</div>
          <div class="duel-hp-bar-wrap">
            <div class="duel-hp-bar" id="duel-player-hp" style="width:100%;"></div>
          </div>
          <div class="duel-hp-num" id="duel-player-num">${maxHp} / ${maxHp}</div>
          <div class="duel-status-icons" id="duel-player-icons"></div>
        </div>
        <div class="duel-vs">VS</div>
        <div class="duel-combatant duel-enemy-side">
          <div class="duel-comb-name">${opponent.portrait} ${oppName}</div>
          <div class="duel-hp-bar-wrap">
            <div class="duel-hp-bar duel-hp-enemy" id="duel-enemy-hp" style="width:100%;"></div>
          </div>
          <div class="duel-hp-num" id="duel-enemy-num">${opponent.hp} / ${opponent.hp}</div>
          <div class="duel-status-icons" id="duel-enemy-icons"></div>
        </div>
      </div>
      <div class="duel-second-tag">${secondLine}</div>
      <!-- 战斗日志 -->
      <div class="duel-log" id="duel-log"></div>
      <!-- 主内容区 -->
      <div class="duel-main-area" id="duel-main-area"></div>
    </div>`;

  _duelLog(`⚔️ 决斗开始！对手：${opponent.portrait} ${oppName}（${opponent.displayHouse || opponent.house}）`);
  _duelLog(secondLine);
  _duelLog(`你们面对面站定，举起魔杖。`);
  setTimeout(() => {
    _duelLog(`🤝 「敬礼！」——你们郑重地相互鞠躬。`);
    setTimeout(() => {
      _duelLog(`三……`);
      setTimeout(() => {
        _duelLog(`二……`);
        setTimeout(() => {
          _duelLog(`一……`);
          setTimeout(() => {
            _duelLog(`⚡ 开始！`);
            _renderSpellSelect(playerSpells);
          }, 500);
        }, 500);
      }, 500);
    }, 600);
  }, 800);
}

// ─── 战斗日志 ────────────────────────────────────────────

function _duelLog(text, cls = "") {
  if (!_duel) return;
  _duel.log.push(text);
  const logEl = document.getElementById("duel-log");
  if (!logEl) return;
  const line = document.createElement("div");
  line.className = "duel-log-line" + (cls ? ` ${cls}` : "");
  line.textContent = text;
  logEl.appendChild(line);
  logEl.scrollTop = logEl.scrollHeight;
}

// ─── 更新HP显示 ──────────────────────────────────────────

function _updateHP() {
  if (!_duel) return;
  const { player, opponent } = _duel;

  const pPct = Math.max(0, player.hp / player.maxHp * 100);
  document.getElementById("duel-player-hp").style.width = `${pPct}%`;
  document.getElementById("duel-player-num").textContent = `${Math.max(0,player.hp)} / ${player.maxHp}`;

  const ePct = Math.max(0, opponent.currentHp / opponent.hp * 100);
  document.getElementById("duel-enemy-hp").style.width = `${ePct}%`;
  document.getElementById("duel-enemy-num").textContent = `${Math.max(0,opponent.currentHp)} / ${opponent.hp}`;

  // 状态图标
  const pIcons = document.getElementById("duel-player-icons");
  const eIcons = document.getElementById("duel-enemy-icons");
  if (pIcons) pIcons.innerHTML =
    (player.shielded ? '<span class="duel-icon-shield">🛡️</span>' : "") +
    (player.disarmed  ? '<span class="duel-icon-debuff">💫</span>' : "");
  if (eIcons) eIcons.innerHTML =
    (opponent.shielded ? '<span class="duel-icon-shield">🛡️</span>' : "") +
    (opponent.slowed   ? '<span class="duel-icon-debuff">❄️</span>' : "");
}

// ─── 选择咒语 ────────────────────────────────────────────

function _renderSpellSelect(playerSpells) {
  if (!_duel) return;
  _duel.phase = "select";
  const area = document.getElementById("duel-main-area");
  if (!area) return;

  // 重置玩家缴械状态（每回合开始）
  if (_duel.player.disarmed) {
    _duel.player.disarmed = false;
    _duelLog("你重新拿起了魔杖。");
  }

  area.innerHTML = `
    <div class="duel-select-title">回合 ${_duel.round} · 选择咒语</div>
    <div class="duel-spell-grid" id="duel-spell-grid"></div>`;

  const grid = document.getElementById("duel-spell-grid");

  playerSpells.filter(s => s.isLearned).forEach(spell => {
    const effect  = getSpellEffect(spell.id);
    const gesture = getGestureBySpellId(spell.id);
    const prof    = spell.proficiency || 0;

    const btn = document.createElement("button");
    btn.className = "duel-spell-btn";
    btn.innerHTML = `
      <div class="duel-spell-icon">${effect.icon}</div>
      <div class="duel-spell-name" style="color:${effect.color}">${spell.nameCn}</div>
      <div class="duel-spell-en">${spell.nameEn}</div>
      <div class="duel-spell-type">${_effectTypeLabel(effect.type)}</div>
      ${gesture ? `<div class="duel-spell-gesture-hint">✋ 需要手势</div>` : ""}
      <div class="duel-spell-prof">
        <div class="duel-prof-bar" style="width:${prof}%"></div>
      </div>
      <div class="duel-spell-prof-num">${prof >= 100 ? "精通" : `熟练度 ${prof}%`}</div>`;

    btn.onclick = () => _selectSpell(spell, playerSpells);
    grid.appendChild(btn);
  });
}

function _effectTypeLabel(type) {
  return { damage:"⚔️ 伤害", shield:"🛡️ 防护", disarm:"💫 缴械",
           knockback:"💨 击退", slow:"❄️ 减速", heal:"💚 回复",
           disrupt:"🌀 干扰", dazzle:"✦ 眩晕" }[type] || "🔮 效果";
}

// ─── 选择咒语后进入手势阶段 ──────────────────────────────

function _selectSpell(spell, playerSpells) {
  if (!_duel) return;
  _duel.selectedSpell = spell;
  _duel.phase = "gesture";

  const gesture = getGestureBySpellId(spell.id);

  if (!gesture) {
    // 无手势的咒语直接执行（工具型/基础咒）
    _executePlayerSpell(spell, null, playerSpells);
    return;
  }

  const area = document.getElementById("duel-main-area");
  if (!area) return;

  const timeLimit = _duel.opponent.slowed
    ? Math.floor((gesture.duelTimeLimit || 3500) * 1.4)
    : (gesture.duelTimeLimit || 3500);

  area.innerHTML = `
    <div class="duel-gesture-header">
      <span class="duel-gesture-spell-name" style="color:${getSpellEffect(spell.id).color}">
        ${getSpellEffect(spell.id).icon} ${spell.nameCn}
      </span>
      <span class="duel-gesture-prompt">——画出手势，施放咒语！</span>
    </div>
    <div id="duel-gest-mount"></div>`;

  const mount = document.getElementById("duel-gest-mount");
  GestureWidget.render(mount, gesture, {
    mode: "duel",
    timeLimit,
    showLabel: false,
    onComplete: (result) => {
      _duel.gestureResult = result;
      _executePlayerSpell(spell, result, playerSpells);
    }
  });
}

// ─── 施法记录工具 ─────────────────────────────────────────

function _recordSpellHit(spellId, accuracy) {
  if (!_duel) return;
  if (!_duel.spellHits[spellId]) _duel.spellHits[spellId] = { hits: 0, totalAccuracy: 0, misses: 0 };
  _duel.spellHits[spellId].hits++;
  _duel.spellHits[spellId].totalAccuracy += accuracy;
}

function _recordSpellMiss(spellId) {
  if (!_duel) return;
  if (!_duel.spellHits[spellId]) _duel.spellHits[spellId] = { hits: 0, totalAccuracy: 0, misses: 0 };
  _duel.spellHits[spellId].misses++;
}

// ─── 执行玩家咒语 ─────────────────────────────────────────

function _executePlayerSpell(spell, gestureResult, playerSpells) {
  if (!_duel) return;
  const effect  = getSpellEffect(spell.id);
  const { opponent, player } = _duel;

  // 命中率计算：基础100% * 手势精准度 * 熟练度系数
  let hitChance = 1.0;
  let gestureAccuracy = 1.0;
  if (gestureResult) {
    if (!gestureResult.success) {
      // 手势失败——记录miss，直接哑火
      _recordSpellMiss(spell.id);
      _duelLog(`💨 手势不完整，${spell.nameCn} 哑火了！`);
      _updateHP();
      setTimeout(() => _enemyTurn(playerSpells), 800);
      return;
    }
    gestureAccuracy = gestureResult.accuracy;
    hitChance *= (0.5 + gestureAccuracy * 0.5);
  }

  // 成功施法——记录命中数据
  _recordSpellHit(spell.id, gestureAccuracy);

  // 熟练度加成（50%熟练 = 无加成，100%精通 = 伤害+20%）
  const profBonus = 1 + (spell.proficiency / 100) * 0.2;

  // 对手盾牌判定
  const isShielded = opponent.shielded && effect.type !== "disarm";

  switch (effect.type) {
    case "shield":
      player.shielded = true;
      _duelLog(`🛡️ 你施放了盔甲护身——防护盾已就位！`, "duel-log-player");
      break;

    case "damage":
    case "knockback":
    case "dazzle": {
      let dmg = Math.round(effect.base * profBonus * hitChance);
      if (opponent.slowed) dmg = Math.round(dmg * 1.15); // 对被冻结的对手伤害+15%
      if (isShielded) {
        const reduced = Math.round(dmg * 0.3);
        opponent.currentHp -= reduced;
        opponent.shielded = false;
        _duelLog(`${effect.icon} 你的 ${spell.nameCn} 击碎了对手的防护盾！造成 ${reduced} 点穿透伤害。`, "duel-log-player");
      } else {
        opponent.currentHp -= dmg;
        _duelLog(`${effect.icon} 你的 ${spell.nameCn} 命中！造成 ${dmg} 点伤害。`, "duel-log-player");
      }
      break;
    }

    case "disarm":
      if (isShielded) {
        opponent.shielded = false;
        _duelLog(`💫 你的除你武器击碎了对手的防护盾！`, "duel-log-player");
      } else {
        const disarmDmg = Math.round(effect.base * profBonus);
        opponent.currentHp -= disarmDmg;
        _duelLog(`💫 你的除你武器命中！对手魔杖飞出，造成 ${disarmDmg} 点伤害，下回合跳过进攻。`, "duel-log-player");
        // 对手被缴械：下一回合跳过
        _duel._enemyDisarmedNextRound = true;
      }
      break;

    case "slow":
    case "disrupt":
      if (!isShielded) {
        opponent.slowed = true;
        const sdmg = Math.round(effect.base * profBonus * hitChance);
        opponent.currentHp -= sdmg;
        _duelLog(`${effect.icon} 你的 ${spell.nameCn} 命中！造成 ${sdmg} 点伤害，对手行动迟缓。`, "duel-log-player");
      } else {
        _duelLog(`${effect.icon} 你的 ${spell.nameCn} 被防护盾挡住了。`, "duel-log-player");
      }
      break;

    case "heal":
      const healed = Math.min(player.maxHp - player.hp, Math.round(effect.base * profBonus));
      player.hp += healed;
      _duelLog(`💚 你的 ${spell.nameCn} 让你恢复了 ${healed} 点HP。`, "duel-log-player");
      break;

    default:
      const defDmg = Math.round(effect.base * profBonus * hitChance);
      if (!isShielded) {
        opponent.currentHp -= defDmg;
        _duelLog(`🔮 你的 ${spell.nameCn} 造成了 ${defDmg} 点伤害。`, "duel-log-player");
      }
  }

  // 清除对手减速（每回合结束后消失）
  opponent.slowed = false;

  _updateHP();
  opponent.currentHp = Math.max(0, opponent.currentHp);

  if (opponent.currentHp <= 0) {
    setTimeout(() => _duelEnd(true, playerSpells), 600);
  } else {
    setTimeout(() => _enemyTurn(playerSpells), 700);
  }
}

// ─── 敌方回合 ────────────────────────────────────────────

function _enemyTurn(playerSpells) {
  if (!_duel) return;
  _duel.phase = "enemy";
  const { opponent, player } = _duel;

  const area = document.getElementById("duel-main-area");
  if (area) {
    area.innerHTML = `<div class="duel-enemy-thinking">
      ${opponent.portrait} ${opponent.name} 正在施法……
    </div>`;
  }

  // 被缴械：跳过
  if (_duel._enemyDisarmedNextRound) {
    _duel._enemyDisarmedNextRound = false;
    _duelLog(`💫 ${opponent.name} 的魔杖还没捡回来，被迫跳过这一回合！`);
    _updateHP();
    _nextRound(playerSpells);
    return;
  }

  // AI选咒（优先攻击，血量低时用防护）
  const [minDelay, maxDelay] = opponent.aiDelay;
  const thinkTime = minDelay + Math.random() * (maxDelay - minDelay);

  setTimeout(() => {
    if (!_duel) return;

    // AI决策
    let chosenSpellId;
    const hpRatio = opponent.currentHp / opponent.hp;
    const useShield = hpRatio < 0.35 && opponent.spells.includes("protego") && Math.random() < 0.4;

    if (useShield) {
      chosenSpellId = "protego";
    } else {
      // 从对手咒语列表中随机选攻击性咒语
      const attackSpells = opponent.spells.filter(s => {
        const ef = getSpellEffect(s);
        return ef.type !== "shield";
      });
      chosenSpellId = attackSpells[Math.floor(Math.random() * attackSpells.length)];
    }

    const ef = getSpellEffect(chosenSpellId);
    const gesture = getGestureBySpellId(chosenSpellId);

    // AI手势成功率
    const aiSuccess = Math.random() < opponent.aiAccuracy;

    if (!aiSuccess && gesture) {
      _duelLog(`💨 ${opponent.name} 的 ${ef.label} 手势出错——哑火！`);
      _updateHP();
      _nextRound(playerSpells);
      return;
    }

    // AI执行效果
    switch (ef.type) {
      case "shield":
        opponent.shielded = true;
        _duelLog(`🛡️ ${opponent.name} 施放盔甲护身——防护盾就位！`, "duel-log-enemy");
        break;

      case "damage":
      case "knockback":
      case "dazzle": {
        let dmg = Math.round(ef.base * (0.85 + Math.random() * 0.3));
        if (player.shielded) {
          const reduced = Math.round(dmg * 0.3);
          player.hp -= reduced;
          player.shielded = false;
          _duelLog(`${ef.icon} ${opponent.name} 的 ${ef.label} 击碎了你的防护盾！穿透伤害 ${reduced}。`, "duel-log-enemy");
        } else {
          player.hp -= dmg;
          _duelLog(`${ef.icon} ${opponent.name} 的 ${ef.label} 命中！你受到 ${dmg} 点伤害。`, "duel-log-enemy");
        }
        break;
      }

      case "disarm": {
        const ddmg = Math.round(ef.base * (0.85 + Math.random() * 0.3));
        if (player.shielded) {
          player.shielded = false;
          _duelLog(`💫 ${opponent.name} 的除你武器击碎了你的防护盾！`, "duel-log-enemy");
        } else {
          player.hp -= ddmg;
          player.disarmed = true;
          _duelLog(`💫 ${opponent.name} 的除你武器命中！你的魔杖飞出，下回合只能防御。`, "duel-log-enemy");
        }
        break;
      }

      case "slow":
      case "disrupt": {
        const sdmg = Math.round(ef.base * (0.85 + Math.random() * 0.3));
        if (!player.shielded) {
          player.hp -= sdmg;
          _duelLog(`${ef.icon} ${opponent.name} 的 ${ef.label} 命中！你受到 ${sdmg} 点伤害并减速。`, "duel-log-enemy");
        }
        break;
      }
    }

    // 对手盾牌在使用后消失
    if (ef.type !== "shield") opponent.shielded = false;

    player.hp = Math.max(0, player.hp);
    _updateHP();

    if (player.hp <= 0) {
      if (_duel.second && !_duel.second.active) {
        _duelLog(`💔 你倒下了！`, "duel-log-enemy");
        _activateSecond(playerSpells);
      } else {
        setTimeout(() => _duelEnd(false, playerSpells), 600);
      }
    } else {
      _nextRound(playerSpells);
    }
  }, thinkTime);
}

// ─── 助手接替战斗 ────────────────────────────────────────

function _activateSecond(playerSpells) {
  if (!_duel || !_duel.second) return;
  const sec = _duel.second;
  sec.active = true;

  const secName = sec.name || "助手";
  const secPortrait = sec.portrait || "🧑‍🎓";

  _duelLog(`🤝 ${secPortrait} ${secName} 接替了你，走上决斗台！`, "duel-log-sys");

  const statusBar = document.querySelector(".duel-status-bar");
  if (statusBar) {
    const playerSide = statusBar.querySelector(".duel-player-side");
    if (playerSide) {
      const nameEl = playerSide.querySelector(".duel-comb-name");
      if (nameEl) nameEl.textContent = `${secPortrait} ${secName}`;
    }
  }

  const hpBar = document.getElementById("duel-player-hp");
  const hpNum = document.getElementById("duel-player-num");
  if (hpBar) hpBar.style.width = `${Math.max(0, (sec.currentHp / sec.maxHp) * 100)}%`;
  if (hpNum) hpNum.textContent = `${sec.currentHp} / ${sec.maxHp}`;

  setTimeout(() => _secondTurn(playerSpells), 800);
}

function _secondTurn(playerSpells) {
  if (!_duel || !_duel.second || !_duel.second.active) return;
  const { opponent, second: sec } = _duel;

  const secName = sec.name || "助手";
  const secPortrait = sec.portrait || "🧑‍🎓";

  const area = document.getElementById("duel-main-area");
  if (area) {
    area.innerHTML = `<div class="duel-enemy-thinking">
      ${secPortrait} ${secName} 正在施法……
    </div>`;
  }

  const secSpells = sec.spells || ["expelliarmus", "protego", "stupefy"];
  const secAccuracy = sec.aiAccuracy || 0.7;
  const secDelay = sec.aiDelay || [600, 1000];
  const [minD, maxD] = secDelay;
  const thinkTime = minD + Math.random() * (maxD - minD);

  setTimeout(() => {
    if (!_duel || !_duel.second || !_duel.second.active) return;

    const hpRatio = sec.currentHp / sec.maxHp;
    const useShield = hpRatio < 0.35 && secSpells.includes("protego") && Math.random() < 0.4;

    let chosenSpellId;
    if (useShield) {
      chosenSpellId = "protego";
    } else {
      const attackSpells = secSpells.filter(s => {
        const ef = getSpellEffect(s);
        return ef.type !== "shield";
      });
      chosenSpellId = attackSpells[Math.floor(Math.random() * attackSpells.length)] || "expelliarmus";
    }

    const ef = getSpellEffect(chosenSpellId);
    const gesture = getGestureBySpellId(chosenSpellId);
    const aiSuccess = Math.random() < secAccuracy;

    if (!aiSuccess && gesture) {
      _duelLog(`💨 ${secName} 的 ${ef.label} 手势出错——哑火！`);
      setTimeout(() => _enemyTurnAfterSecond(playerSpells), 400);
      return;
    }

    switch (ef.type) {
      case "shield":
        sec.shielded = true;
        _duelLog(`🛡️ ${secName} 施放盔甲护身——防护盾就位！`, "duel-log-player");
        break;

      case "damage":
      case "knockback":
      case "dazzle": {
        let dmg = Math.round(ef.base * (0.85 + Math.random() * 0.3));
        if (opponent.shielded) {
          const reduced = Math.round(dmg * 0.3);
          opponent.currentHp -= reduced;
          opponent.shielded = false;
          _duelLog(`${ef.icon} ${secName} 的 ${ef.label} 击碎了对手的防护盾！穿透伤害 ${reduced}。`, "duel-log-player");
        } else {
          opponent.currentHp -= dmg;
          _duelLog(`${ef.icon} ${secName} 的 ${ef.label} 命中！造成 ${dmg} 点伤害。`, "duel-log-player");
        }
        break;
      }

      case "disarm": {
        const ddmg = Math.round(ef.base * (0.85 + Math.random() * 0.3));
        if (opponent.shielded) {
          opponent.shielded = false;
          _duelLog(`💫 ${secName} 的除你武器击碎了对手的防护盾！`, "duel-log-player");
        } else {
          opponent.currentHp -= ddmg;
          _duel._enemyDisarmedNextRound = true;
          _duelLog(`💫 ${secName} 的除你武器命中！对手魔杖飞出。`, "duel-log-player");
        }
        break;
      }

      case "slow":
      case "disrupt": {
        const sdmg = Math.round(ef.base * (0.85 + Math.random() * 0.3));
        if (!opponent.shielded) {
          opponent.currentHp -= sdmg;
          opponent.slowed = true;
          _duelLog(`${ef.icon} ${secName} 的 ${ef.label} 命中！造成 ${sdmg} 点伤害。`, "duel-log-player");
        }
        break;
      }

      case "heal": {
        const healed = Math.min(sec.maxHp - sec.currentHp, Math.round(ef.base * (0.85 + Math.random() * 0.3)));
        sec.currentHp += healed;
        _duelLog(`💚 ${secName} 的 ${ef.label} 恢复了 ${healed} 点HP。`, "duel-log-player");
        break;
      }

      default: {
        const defDmg = Math.round(ef.base * (0.85 + Math.random() * 0.3));
        if (!opponent.shielded) {
          opponent.currentHp -= defDmg;
          _duelLog(`🔮 ${secName} 的 ${ef.label} 造成了 ${defDmg} 点伤害。`, "duel-log-player");
        }
      }
    }

    if (ef.type !== "shield") opponent.shielded = false;
    opponent.slowed = false;
    opponent.currentHp = Math.max(0, opponent.currentHp);
    _updateSecondHP();

    if (opponent.currentHp <= 0) {
      setTimeout(() => _duelEnd(true, playerSpells), 600);
    } else {
      setTimeout(() => _enemyTurnAfterSecond(playerSpells), 700);
    }
  }, thinkTime);
}

function _enemyTurnAfterSecond(playerSpells) {
  if (!_duel) return;
  const { opponent, second: sec } = _duel;
  if (!sec || !sec.active) return;

  const secName = sec.name || "助手";

  const area = document.getElementById("duel-main-area");
  if (area) {
    area.innerHTML = `<div class="duel-enemy-thinking">
      ${opponent.portrait} ${opponent.name} 正在施法……
    </div>`;
  }

  if (_duel._enemyDisarmedNextRound) {
    _duel._enemyDisarmedNextRound = false;
    _duelLog(`💫 ${opponent.name} 的魔杖还没捡回来，被迫跳过这一回合！`);
    _duel.round++;
    setTimeout(() => _secondTurn(playerSpells), 400);
    return;
  }

  const [minDelay, maxDelay] = opponent.aiDelay;
  const thinkTime = minDelay + Math.random() * (maxDelay - minDelay);

  setTimeout(() => {
    if (!_duel || !sec.active) return;

    let chosenSpellId;
    const hpRatio = opponent.currentHp / opponent.hp;
    const useShield = hpRatio < 0.35 && opponent.spells.includes("protego") && Math.random() < 0.4;

    if (useShield) {
      chosenSpellId = "protego";
    } else {
      const attackSpells = opponent.spells.filter(s => {
        const ef = getSpellEffect(s);
        return ef.type !== "shield";
      });
      chosenSpellId = attackSpells[Math.floor(Math.random() * attackSpells.length)];
    }

    const ef = getSpellEffect(chosenSpellId);
    const gesture = getGestureBySpellId(chosenSpellId);
    const aiSuccess = Math.random() < opponent.aiAccuracy;

    if (!aiSuccess && gesture) {
      _duelLog(`💨 ${opponent.name} 的 ${ef.label} 手势出错——哑火！`);
      _duel.round++;
      setTimeout(() => _secondTurn(playerSpells), 400);
      return;
    }

    switch (ef.type) {
      case "shield":
        opponent.shielded = true;
        _duelLog(`🛡️ ${opponent.name} 施放盔甲护身——防护盾就位！`, "duel-log-enemy");
        break;

      case "damage":
      case "knockback":
      case "dazzle": {
        let dmg = Math.round(ef.base * (0.85 + Math.random() * 0.3));
        if (sec.shielded) {
          const reduced = Math.round(dmg * 0.3);
          sec.currentHp -= reduced;
          sec.shielded = false;
          _duelLog(`${ef.icon} ${opponent.name} 的 ${ef.label} 击碎了${secName}的防护盾！穿透伤害 ${reduced}。`, "duel-log-enemy");
        } else {
          sec.currentHp -= dmg;
          _duelLog(`${ef.icon} ${opponent.name} 的 ${ef.label} 命中！${secName}受到 ${dmg} 点伤害。`, "duel-log-enemy");
        }
        break;
      }

      case "disarm": {
        const ddmg = Math.round(ef.base * (0.85 + Math.random() * 0.3));
        if (sec.shielded) {
          sec.shielded = false;
          _duelLog(`💫 ${opponent.name} 的除你武器击碎了${secName}的防护盾！`, "duel-log-enemy");
        } else {
          sec.currentHp -= ddmg;
          _duelLog(`💫 ${opponent.name} 的除你武器命中！${secName}的魔杖飞出。`, "duel-log-enemy");
        }
        break;
      }

      case "slow":
      case "disrupt": {
        const sdmg = Math.round(ef.base * (0.85 + Math.random() * 0.3));
        if (!sec.shielded) {
          sec.currentHp -= sdmg;
          _duelLog(`${ef.icon} ${opponent.name} 的 ${ef.label} 命中！${secName}受到 ${sdmg} 点伤害。`, "duel-log-enemy");
        }
        break;
      }
    }

    if (ef.type !== "shield") opponent.shielded = false;
    sec.currentHp = Math.max(0, sec.currentHp);
    _updateSecondHP();

    if (sec.currentHp <= 0) {
      _duelLog(`💔 ${secName} 也倒下了！`, "duel-log-enemy");
      setTimeout(() => _duelEnd(false, playerSpells), 600);
    } else {
      _duel.round++;
      setTimeout(() => _secondTurn(playerSpells), 400);
    }
  }, thinkTime);
}

function _updateSecondHP() {
  if (!_duel || !_duel.second || !_duel.second.active) return;
  const sec = _duel.second;
  const pct = Math.max(0, (sec.currentHp / sec.maxHp) * 100);
  const hpBar = document.getElementById("duel-player-hp");
  const hpNum = document.getElementById("duel-player-num");
  if (hpBar) hpBar.style.width = `${pct}%`;
  if (hpNum) hpNum.textContent = `${Math.max(0, sec.currentHp)} / ${sec.maxHp}`;
}

// ─── 进入下一回合 ────────────────────────────────────────

function _nextRound(playerSpells) {
  if (!_duel) return;
  _duel.round++;
  _duel.phase = "select";
  setTimeout(() => _renderSpellSelect(playerSpells), 400);
}

// ─── 决斗结束 ────────────────────────────────────────────

function _duelEnd(playerWon, playerSpells) {
  if (!_duel) return;
  _duel.phase = "result";

  const { opponent, round, spellHits } = _duel;
  const area = document.getElementById("duel-main-area");
  if (!area) return;

  // ── 熟练度结算 ──────────────────────────────────────────
  // 每次成功命中：基础 +3，乘以平均精准度系数
  // 胜利额外加成 ×1.3，单场单咒上限 20
  const profGains = [];
  Object.entries(spellHits).forEach(([spellId, rec]) => {
    if (rec.hits === 0) return;
    const avgAccuracy = rec.totalAccuracy / rec.hits;
    let gain = Math.round(rec.hits * 3 * (0.5 + avgAccuracy * 0.5));
    if (playerWon) gain = Math.round(gain * 1.3);
    gain = Math.min(gain, 20);
    if (gain <= 0) return;
    const newProf = window.gainProficiency?.(spellId, gain);
    const spellInfo = playerSpells.find(s => s.id === spellId);
    if (spellInfo && newProf !== undefined) {
      profGains.push({ name: spellInfo.nameCn, gain, newProf, mastered: newProf >= 100 });
    }
  });

  // ── 存档 ──────────────────────────────────────────────
  const save = getSave();
  if (!save.duelRecord) save.duelRecord = { wins: 0, losses: 0, totalRounds: 0 };
  save.duelRecord.totalRounds += round - 1;
  if (playerWon) save.duelRecord.wins++;
  else save.duelRecord.losses++;
  setSave(save);
  // ── 学生角色好感度触发（决斗胜利）─────────────────────
  if (playerWon) {
    window.affinityUI?.tryStudentActionEncounter('duelWin');
    window.affinityUI?.checkStudentSpecialTriggers('duelWin', { 
      opponentLevel: opponent.level || 1 
    });
  }

  window._questHook_duelEnd?.(playerWon, false);

  if (opponent.characterKey) {
    const delta = playerWon ? 3 : -1;
    window.affinitySystem?.addAffinity(opponent.characterKey, delta, 'duel');
    const charName = opponent.name;
    const deltaText = delta > 0 ? `+${delta}` : `${delta}`;
    addLog(`❤️ ${charName}好感度${deltaText}（决斗${playerWon ? '胜利' : '失败'}）`);
  }

  if (_duel.second && _duel.second.active && _duel.second.characterKey) {
    const secDelta = playerWon ? 4 : 1;
    window.affinitySystem?.addAffinity(_duel.second.characterKey, secDelta, 'duel');
    const secDeltaText = secDelta > 0 ? `+${secDelta}` : `${secDelta}`;
    addLog(`❤️ ${_duel.second.name}好感度${secDeltaText}（决斗${playerWon ? '协助胜利' : '并肩作战'}）`);
  }

  const secondInfo = _duel.second;
  const secondTag = secondInfo ? (secondInfo.active ? `（${secondInfo.name} 接替了你）` : '') : '';

  const resultText = playerWon
    ? `🏆 你赢得了对 ${opponent.name} 的决斗！（${round-1} 回合）${secondTag}`
    : `💔 你在第 ${round-1} 回合被 ${opponent.name} 击败了。${secondTag}`;
  addLog(resultText);
  if (window.renderLog) renderLog();

  // ── 熟练度展示 HTML ────────────────────────────────────
  const profHTML = profGains.length > 0 ? `
    <div class="duel-prof-gains">
      <div class="duel-prof-gains-title">⚡ 决斗熟练度提升</div>
      ${profGains.map(g => `
        <div class="duel-prof-gain-row">
          <span class="duel-prof-gain-name">${g.name}</span>
          <span class="duel-prof-gain-val">+${g.gain}%</span>
          <span class="duel-prof-gain-total ${g.mastered ? 'duel-prof-mastered' : ''}">
            ${g.mastered ? '【精通】' : `→ ${g.newProf}%`}
          </span>
        </div>`).join("")}
    </div>` : "";

  area.innerHTML = `
    <div class="duel-result ${playerWon ? 'duel-result-win' : 'duel-result-lose'}">
      <div class="duel-result-icon">${playerWon ? '🏆' : '💔'}</div>
      <div class="duel-result-title">${playerWon ? '决斗胜利！' : '决斗失败'}</div>
      <div class="duel-result-desc">${playerWon
        ? `在 ${round-1} 个回合后，${opponent.name} 认输了。${secondTag}`
        : `${opponent.name} 施法稳健——继续练习吧。${secondTag}`}</div>
      ${profHTML}
      <div class="duel-result-record">
        战绩：${save.duelRecord.wins} 胜 / ${save.duelRecord.losses} 负
      </div>
      <div class="duel-result-btns">
        <button class="duel-btn-primary" id="duel-again">再来一场</button>
        <button class="duel-btn-sec" id="duel-exit">离开决斗场</button>
      </div>
    </div>`;

  document.getElementById("duel-again").onclick = () => {
    _resetDuel();
    _renderOpponentSelect();
  };
  document.getElementById("duel-exit").onclick = closeDuelPanel;
}

// ═══════════════════════════════════════════════════════════
// 全局挂载
// ═══════════════════════════════════════════════════════════

window.openDuelPanel  = openDuelPanel;
window._getPlayerMaxHp = _getPlayerMaxHp;
window.closeDuelPanel = closeDuelPanel;

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
function _ls()              { try { return JSON.parse(localStorage.getItem('hogwarts') || '{}'); } catch(e) { return {}; } }
function _lsSave(d)         { try { localStorage.setItem('hogwarts', JSON.stringify(d)); } catch(e) {} }
function getSpellListWithStatus() {
  // spell.js 挂载在 window.getSpellListWithStatus 或从存档直接读
  if (window.getSpellListWithStatus) return window.getSpellListWithStatus();
  const save = _ls();
  const learned = save.spellList || [];
  const prof    = save.spellProficiency || {};
  return learned.map(id => ({ id, nameCn: id, nameEn: id, isLearned: true, proficiency: prof[id] || 0, sourceType: 'hogwarts' }));
}
function getSave()          { return window.saveSys?.getSave?.() || _ls(); }
function setSave(data)      { if (window.saveSys?.setSave) window.saveSys.setSave(data); else _lsSave(data); }
function addLog(text)       { if (window.addLog) window.addLog(text); else { const d=_ls(); if(!d.log)d.log=[]; d.log.unshift(text); _lsSave(d); } }
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

const OPPONENTS = [
  {
    id: "firstYear",
    name: "一年级新生",
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
    name: "二年级学生",
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
    name: "三年级学生",
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
    name: "四年级学生",
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
    name: "决斗俱乐部选手",
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
    name: "级长",
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

function _initDuel(opponent, playerSpells) {
  _duel = {
    opponent:     { ...opponent, currentHp: opponent.hp, shielded: false, slowed: false },
    player:       { hp: 100, maxHp: 100, shielded: false, disarmed: false },
    round:        1,
    log:          [],
    phase:        "select",
    selectedSpell: null,
    gestureResult: null,
    // 本场决斗的施法记录：{ spellId -> { hits, totalAccuracy, misses } }
    spellHits:    {},
  };
}

// ═══════════════════════════════════════════════════════════
// UI 主面板
// ═══════════════════════════════════════════════════════════

export function openDuelPanel() {
  if (!window.costAction?.()) return;

  document.getElementById("actionMain").style.display = "none";
  const exploreMain = document.getElementById("exploreMain");
  if (exploreMain) exploreMain.style.display = "none";

  document.getElementById("duelMain")?.remove();

  const panel = document.createElement("div");
  panel.id = "duelMain";
  panel.innerHTML = `
    <div class="duel-header">
      <span class="duel-title">⚔️ 决斗训练场</span>
      <button class="duel-close-btn" id="duel-close">离开</button>
    </div>
    <div class="duel-body" id="duel-body"></div>`;

  document.querySelector("#actionMain").closest(".card").appendChild(panel);
  document.getElementById("duel-close").onclick = closeDuelPanel;
  _renderOpponentSelect();
}

export function closeDuelPanel() {
  document.getElementById("duelMain")?.remove();
  document.getElementById("actionMain").style.display = "block";
  _resetDuel();
}

// ─── 对手选择 ────────────────────────────────────────────

function _renderOpponentSelect() {
  const body = document.getElementById("duel-body");
  if (!body) return;

  body.innerHTML = `
    <div class="duel-section-title">选择对手</div>
    <div class="duel-opponent-list" id="duel-opp-list"></div>`;

  const list = document.getElementById("duel-opp-list");

  // 读取玩家已解锁咒语
  const learnedSpells = getSpellListWithStatus().filter(s => s.isLearned);
  const canFight = learnedSpells.length >= 1;

  OPPONENTS.forEach(opp => {
    const card = document.createElement("div");
    card.className = "duel-opp-card";
    card.innerHTML = `
      <div class="duel-opp-portrait">${opp.portrait}</div>
      <div class="duel-opp-info">
        <div class="duel-opp-name">${opp.name}
          <span class="duel-opp-level">Lv.${opp.level}</span>
        </div>
        <div class="duel-opp-flavor">${opp.flavorText}</div>
        <div class="duel-opp-meta">
          <span class="duel-opp-hp">❤️ ${opp.hp}</span>
          <span class="duel-opp-reward">经验 +${opp.rewardExp}</span>
        </div>
      </div>`;
    card.style.cursor = canFight ? "pointer" : "not-allowed";
    card.style.opacity = canFight ? "1" : "0.5";
    if (canFight) {
      card.onclick = () => _startDuel(opp, learnedSpells);
    }
    list.appendChild(card);
  });

  if (!canFight) {
    const tip = document.createElement("div");
    tip.className = "duel-notice";
    tip.textContent = "⚠️ 至少需要习得一个咒语才能参与决斗。请先上魔咒课解锁咒语。";
    body.appendChild(tip);
  }
}

// ─── 开始决斗 ────────────────────────────────────────────

function _startDuel(opponent, playerSpells) {
  _initDuel(opponent, playerSpells);

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
          <div class="duel-hp-num" id="duel-player-num">100 / 100</div>
          <div class="duel-status-icons" id="duel-player-icons"></div>
        </div>
        <div class="duel-vs">VS</div>
        <div class="duel-combatant duel-enemy-side">
          <div class="duel-comb-name">${opponent.portrait} ${opponent.name}</div>
          <div class="duel-hp-bar-wrap">
            <div class="duel-hp-bar duel-hp-enemy" id="duel-enemy-hp" style="width:100%;"></div>
          </div>
          <div class="duel-hp-num" id="duel-enemy-num">${opponent.hp} / ${opponent.hp}</div>
          <div class="duel-status-icons" id="duel-enemy-icons"></div>
        </div>
      </div>
      <!-- 战斗日志 -->
      <div class="duel-log" id="duel-log"></div>
      <!-- 主内容区 -->
      <div class="duel-main-area" id="duel-main-area"></div>
    </div>`;

  _duelLog(`⚔️ 决斗开始！对手：${opponent.portrait} ${opponent.name}`);
  _duelLog(`弗立维教授大喊「开始！」，你们相互鞠躬。`);
  _renderSpellSelect(playerSpells);
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
      setTimeout(() => _duelEnd(false, playerSpells), 600);
    } else {
      _nextRound(playerSpells);
    }
  }, thinkTime);
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

  // ── 日志 ──────────────────────────────────────────────
  const resultText = playerWon
    ? `🏆 你赢得了对 ${opponent.name} 的决斗！（${round-1} 回合）`
    : `💔 你在第 ${round-1} 回合被 ${opponent.name} 击败了。`;
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
        ? `在 ${round-1} 个回合后，${opponent.name} 认输了。`
        : `${opponent.name} 施法稳健——继续练习吧。`}</div>
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
window.closeDuelPanel = closeDuelPanel;
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

import {
  getSpellListWithStatus,
  getSave,
  setSave,
  addLog,
  renderLog,
  GestureWidget,
  getGestureBySpellId,
  getGestureById,
} from './duel-runtime.js';
import {
  OPPONENTS,
  SPELL_EFFECTS,
  _pickNamedOpponent,
  _pickSecondFromPool,
  getSpellEffect,
} from './duel-config.js';
import {
  _getKnownCharacters,
  _getEnemyTeams,
  _getAffinityCooperation,
  _buildRandomTeam,
} from './duel-team-service.js';
import { settleDuelResult } from './duel-result-service.js';

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
  const { save, secondTag, profHTML } = settleDuelResult({
    duel: _duel,
    playerWon,
    playerSpells,
  });

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

/**
 * duel-ui.js
 * 决斗系统 UI 层
 *
 * 入口：openDuelPanel() / closeDuelPanel()
 * 依赖（window）：
 *   window.duelData     — duel-data.js
 *   window.DuelEngine   — duel-engine.js
 *   window.GestureWidget
 *   window.getGestureBySpellId
 *   window.gainProficiency
 *   window.costAction
 *   window.saveSys / window.addLog / window.renderLog
 *   window.getSpellListWithStatus
 */

// ── 运行时依赖包装 ───────────────────────────────────────
function _ls()          { try { return JSON.parse(localStorage.getItem('hogwarts')||'{}'); } catch(e){return{};} }
function getSave()      { return window.saveSys?.getSave?.() || _ls(); }
function addLog(t)      { window.addLog?.(t); }

// ═══════════════════════════════════════════════════════════
// 面板管理
// ═══════════════════════════════════════════════════════════

export function openDuelPanel() {
  if (!window.costAction?.()) return;

  document.getElementById("actionMain").style.display = "none";
  const ex = document.getElementById("exploreMain");
  if (ex) ex.style.display = "none";

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

  _renderModeSelect();
}

export function closeDuelPanel() {
  document.getElementById("duelMain")?.remove();
  document.getElementById("actionMain").style.display = "block";
}

function _body() { return document.getElementById("duel-body"); }

// ═══════════════════════════════════════════════════════════
// 1. 模式选择
// ═══════════════════════════════════════════════════════════

function _renderModeSelect() {
  const b = _body(); if (!b) return;
  b.innerHTML = `
    <div class="duel-section-title">选择决斗模式</div>
    <div class="duel-mode-grid">
      <button class="duel-mode-card" id="btn-1v1">
        <div class="duel-mode-icon">⚔️</div>
        <div class="duel-mode-name">1v1 单挑</div>
        <div class="duel-mode-desc">单独对决，选择对手</div>
      </button>
      <button class="duel-mode-card" id="btn-4v4">
        <div class="duel-mode-icon">🛡️</div>
        <div class="duel-mode-name">4v4 团队战</div>
        <div class="duel-mode-desc">邀请队友，组队迎战</div>
      </button>
    </div>`;

  document.getElementById("btn-1v1").onclick = _renderOpponentSelect1v1;
  document.getElementById("btn-4v4").onclick = _renderAllySelect;
}

// ═══════════════════════════════════════════════════════════
// 2. 1v1 对手选择
// ═══════════════════════════════════════════════════════════

function _renderOpponentSelect1v1() {
  const b = _body(); if (!b) return;
  const opponents = window.duelData?.getAvailableOpponents1v1?.() || [];

  b.innerHTML = `
    <button class="duel-back-btn" id="duel-back">← 返回</button>
    <div class="duel-section-title">选择对手（1v1）</div>
    <div class="duel-opp-list" id="duel-opp-list"></div>`;

  document.getElementById("duel-back").onclick = _renderModeSelect;

  const list = document.getElementById("duel-opp-list");
  opponents.forEach(opp => {
    const card = document.createElement("button");
    card.className = "duel-opp-card";
    const tierBadge = opp.requiredTier
      ? `<span class="duel-opp-tier ${opp.canChallenge?'':'duel-opp-locked'}">好感度 Lv.${opp.tierCurrent||0}</span>`
      : "";
    card.innerHTML = `
      <div class="duel-opp-portrait">${opp.portrait}</div>
      <div class="duel-opp-info">
        <div class="duel-opp-name">${opp.name}
          ${opp.level ? `<span class="duel-opp-level">Lv.${opp.level}</span>` : ""}
          ${tierBadge}
        </div>
        <div class="duel-opp-flavor">${opp.flavorText||opp.enemyFlavorText||""}</div>
        <div class="duel-opp-meta">
          <span class="duel-opp-hp">❤️ ${opp.hp}</span>
        </div>
      </div>`;
    card.onclick = () => _startBattle1v1(opp);
    list.appendChild(card);
  });
}

// ═══════════════════════════════════════════════════════════
// 3. 4v4 队友选择
// ═══════════════════════════════════════════════════════════

let _selectedAllies = [];

function _renderAllySelect() {
  _selectedAllies = [];
  const b = _body(); if (!b) return;
  const allAllies = window.duelData?.getAvailableAllies?.() || [];

  b.innerHTML = `
    <button class="duel-back-btn" id="duel-back">← 返回</button>
    <div class="duel-section-title">选择队友（最多3名，好感度≥2可邀请）</div>
    <div class="duel-ally-selected" id="duel-ally-selected">
      <span class="duel-ally-sel-label">已选：</span>
      <span id="duel-ally-sel-names">无</span>
    </div>
    <div class="duel-ally-grid" id="duel-ally-grid"></div>
    <button class="duel-btn-primary" id="duel-ally-next" disabled>
      选好了，选择对手 →
    </button>`;

  document.getElementById("duel-back").onclick = _renderModeSelect;
  document.getElementById("duel-ally-next").onclick = _renderEnemyTeamSelect;

  function _refreshAllyList() {
    const grid = document.getElementById("duel-ally-grid");
    if (!grid) return;
    grid.innerHTML = "";

    allAllies.forEach(ally => {
      const selected = _selectedAllies.some(a => a.characterKey === ally.characterKey);
      const disabled = !ally.canInvite && !selected;
      const card = document.createElement("button");
      card.className = `duel-ally-card${selected?" duel-ally-selected-card":""}${disabled?" duel-ally-locked":""}`;
      card.disabled = disabled;
      card.innerHTML = `
        <div class="duel-ally-portrait">${ally.portrait}</div>
        <div class="duel-ally-info">
          <div class="duel-ally-name">${ally.name}</div>
          <div class="duel-ally-role">${_roleLabel(ally.role)} · ❤️${ally.hp}</div>
          <div class="duel-ally-tier ${ally.canInvite?'duel-tier-ok':'duel-tier-lock'}">
            ${ally.canInvite
              ? `✓ 好感度 Lv.${ally.tierCurrent}`
              : `🔒 需 Lv.${ally.requiredTier}（当前 Lv.${ally.tierCurrent}）`}
          </div>
          ${selected ? `<div class="duel-ally-check">✦ 已选</div>` : ""}
        </div>`;

      card.onclick = () => {
        if (selected) {
          _selectedAllies = _selectedAllies.filter(a => a.characterKey !== ally.characterKey);
        } else if (_selectedAllies.length < 3) {
          _selectedAllies.push(ally);
        }
        _refreshAllyList();
        _refreshAllyBar();
      };
      grid.appendChild(card);
    });
  }

  function _refreshAllyBar() {
    const el   = document.getElementById("duel-ally-sel-names");
    const btn  = document.getElementById("duel-ally-next");
    if (el)  el.textContent  = _selectedAllies.length ? _selectedAllies.map(a=>a.name).join("、") : "无";
    if (btn) btn.disabled = _selectedAllies.length === 0;
  }

  _refreshAllyList();
}

// ═══════════════════════════════════════════════════════════
// 4. 4v4 对手队伍选择
// ═══════════════════════════════════════════════════════════

function _renderEnemyTeamSelect() {
  const b = _body(); if (!b) return;
  const teams = window.duelData?.ENEMY_TEAMS || [];

  b.innerHTML = `
    <button class="duel-back-btn" id="duel-back">← 重新选队友</button>
    <div class="duel-section-title">选择对手队伍</div>
    <div class="duel-enemy-team-list" id="duel-et-list"></div>`;

  document.getElementById("duel-back").onclick = _renderAllySelect;

  const list = document.getElementById("duel-et-list");
  teams.forEach(team => {
    if (team.isCustom) return; // 自定义另做
    const card = document.createElement("button");
    card.className = "duel-et-card";

    // 成员预览
    const members = team.members
      ? team.members.map(m => m.portrait || "🧙").join(" ")
      : "🎲 随机生成";

    card.innerHTML = `
      <div class="duel-et-header">
        <span class="duel-et-icon">${team.icon}</span>
        <span class="duel-et-name">${team.name}</span>
        <span class="duel-et-diff">${_diffLabel(team.difficulty)}</span>
      </div>
      <div class="duel-et-flavor">${team.flavorText}</div>
      <div class="duel-et-members">${members}</div>`;

    card.onclick = () => _startBattle4v4(team);
    list.appendChild(card);
  });

  // 自定义对手
  const customCard = document.createElement("button");
  customCard.className = "duel-et-card duel-et-custom";
  customCard.innerHTML = `
    <div class="duel-et-header">
      <span class="duel-et-icon">✏️</span>
      <span class="duel-et-name">自定义对手队伍</span>
    </div>
    <div class="duel-et-flavor">从所有角色和学生中自选4名对手。</div>`;
  customCard.onclick = _renderCustomEnemySelect;
  list.appendChild(customCard);
}

// ─── 自定义对手选择 ─────────────────────────────────────

let _customEnemies = [];

function _renderCustomEnemySelect() {
  _customEnemies = [];
  const b = _body(); if (!b) return;

  const allChar = Object.values(window.duelData?.CHARACTER_DUEL_STATS || {});
  const allStudents = window.duelData?.STUDENT_OPPONENTS || [];

  b.innerHTML = `
    <button class="duel-back-btn" id="duel-back">← 返回队伍选择</button>
    <div class="duel-section-title">自选对手（选4名）</div>
    <div class="duel-ally-selected">
      <span class="duel-ally-sel-label">已选：</span>
      <span id="duel-custom-names">无</span>
    </div>
    <div class="duel-section-title" style="margin-top:8px;font-size:11px;">— 学生 —</div>
    <div class="duel-ally-grid" id="duel-custom-students"></div>
    <div class="duel-section-title" style="margin-top:8px;font-size:11px;">— 角色 —</div>
    <div class="duel-ally-grid" id="duel-custom-chars"></div>
    <button class="duel-btn-primary" id="duel-custom-go" disabled>开始决斗 →</button>`;

  document.getElementById("duel-back").onclick = _renderEnemyTeamSelect;
  document.getElementById("duel-custom-go").onclick = () => {
    if (_customEnemies.length !== 4) return;
    _startBattle4v4({ id:"custom", name:"自定义队伍", members: _customEnemies });
  };

  function _refreshCustom() {
    const n   = document.getElementById("duel-custom-names");
    const btn = document.getElementById("duel-custom-go");
    if (n)   n.textContent = _customEnemies.length ? _customEnemies.map(e=>e.name).join("、") : "无";
    if (btn) btn.disabled  = _customEnemies.length !== 4;
  }

  function _mkCard(data, container) {
    const sel  = _customEnemies.some(e => e.id === (data.id||data.characterKey));
    const card = document.createElement("button");
    card.className = `duel-ally-card${sel?" duel-ally-selected-card":""}`;
    card.innerHTML = `
      <div class="duel-ally-portrait">${data.portrait}</div>
      <div class="duel-ally-info">
        <div class="duel-ally-name">${data.name}</div>
        <div class="duel-ally-role">❤️${data.hp} · ${_roleLabel(data.role)}</div>
      </div>`;
    card.onclick = () => {
      const uid = data.id || data.characterKey;
      const idx = _customEnemies.findIndex(e => (e.id||e.characterKey) === uid);
      if (idx >= 0) _customEnemies.splice(idx, 1);
      else if (_customEnemies.length < 4) _customEnemies.push(data);
      _refreshCustom();
      // 刷新所有卡片
      document.getElementById("duel-custom-students").innerHTML = "";
      document.getElementById("duel-custom-chars").innerHTML = "";
      allStudents.forEach(s => _mkCard(s, document.getElementById("duel-custom-students")));
      allChar.forEach(c => _mkCard(c, document.getElementById("duel-custom-chars")));
    };
    container.appendChild(card);
  }

  allStudents.forEach(s => _mkCard(s, document.getElementById("duel-custom-students")));
  allChar.forEach(c => _mkCard(c, document.getElementById("duel-custom-chars")));
}

// ═══════════════════════════════════════════════════════════
// 5. 战斗界面（通用框架）
// ═══════════════════════════════════════════════════════════

function _buildBattleFrame(mode) {
  const b = _body(); if (!b) return;
  b.innerHTML = `
    <div class="duel-status-bar" id="duel-status-bar"><!-- HP栏 --></div>
    <div class="duel-log" id="duel-log"></div>
    <div class="duel-main-area" id="duel-main-area"></div>`;
}

function _duelLog(text, cls = "") {
  const el = document.getElementById("duel-log");
  if (!el) return;
  const line = document.createElement("div");
  line.className = "duel-log-line" + (cls ? ` ${cls}` : "");
  line.textContent = text;
  el.appendChild(line);
  el.scrollTop = el.scrollHeight;
}

// ─── HP栏渲染：1v1 ────────────────────────────────────────

function _renderHP1v1(state) {
  const bar = document.getElementById("duel-status-bar");
  if (!bar) return;
  const { player, enemy } = state;
  const pPct = Math.max(0, player.hp / player.maxHp * 100);
  const ePct = Math.max(0, enemy.hp  / enemy.maxHp  * 100);
  bar.innerHTML = `
    <div class="duel-combatant duel-player-side">
      <div class="duel-comb-name">你</div>
      <div class="duel-hp-bar-wrap"><div class="duel-hp-bar" style="width:${pPct}%"></div></div>
      <div class="duel-hp-num">${Math.max(0,player.hp)} / ${player.maxHp}</div>
      <div class="duel-status-icons">
        ${player.shielded?"<span>🛡️</span>":""}${player.disarmed?"<span>💫</span>":""}
      </div>
    </div>
    <div class="duel-vs">VS</div>
    <div class="duel-combatant duel-enemy-side">
      <div class="duel-comb-name">${enemy.portrait} ${enemy.name}</div>
      <div class="duel-hp-bar-wrap"><div class="duel-hp-bar duel-hp-enemy" style="width:${ePct}%"></div></div>
      <div class="duel-hp-num">${Math.max(0,enemy.hp)} / ${enemy.maxHp}</div>
      <div class="duel-status-icons">
        ${enemy.shielded?"<span>🛡️</span>":""}${enemy.slowed?"<span>❄️</span>":""}
      </div>
    </div>`;
}

// ─── HP栏渲染：4v4 ────────────────────────────────────────

function _renderHP4v4(state) {
  const bar = document.getElementById("duel-status-bar");
  if (!bar) return;
  const { myTeam, enemyTeam } = state;

  function unitHTML(u, isEnemy) {
    const pct = Math.max(0, u.hp / u.maxHp * 100);
    return `<div class="duel-unit-mini ${u.fainted?"duel-unit-fainted":""}${isEnemy?" duel-unit-enemy":""}">
      <div class="duel-unit-portrait">${u.portrait}</div>
      <div class="duel-unit-name">${u.name.length>4?u.name.slice(0,4)+"…":u.name}</div>
      <div class="duel-hp-bar-wrap duel-hp-wrap-mini">
        <div class="duel-hp-bar${isEnemy?" duel-hp-enemy":""}" style="width:${pct}%"></div>
      </div>
      <div class="duel-unit-hp">${u.fainted?"❌":Math.max(0,u.hp)}</div>
      ${u.shielded?"<span class='duel-icon-shield'>🛡️</span>":""}
    </div>`;
  }

  bar.innerHTML = `
    <div class="duel-4v4-bar">
      <div class="duel-4v4-team duel-4v4-my">
        ${myTeam.map(u => unitHTML(u, false)).join("")}
      </div>
      <div class="duel-4v4-vs">VS</div>
      <div class="duel-4v4-team duel-4v4-enemy">
        ${enemyTeam.map(u => unitHTML(u, true)).join("")}
      </div>
    </div>`;
}

// ─── 咒语选择界面 ─────────────────────────────────────────

function _renderSpellSelect(playerSpells, onSelect) {
  const area = document.getElementById("duel-main-area");
  if (!area) return;

  area.innerHTML = `
    <div class="duel-select-title" id="duel-round-label">选择咒语</div>
    <div class="duel-spell-grid">
      ${playerSpells.filter(s=>s.isLearned).map(spell => {
        const gesture = window.getGestureBySpellId?.(spell.id);
        const prof    = spell.proficiency || 0;
        return `<button class="duel-spell-btn" data-id="${spell.id}">
          <div class="duel-spell-name">${spell.nameCn}</div>
          <div class="duel-spell-en">${spell.nameEn||""}</div>
          ${gesture?`<div class="duel-spell-gesture-hint">✋ 需手势</div>`:""}
          <div class="duel-spell-prof">
            <div class="duel-prof-bar" style="width:${prof}%"></div>
          </div>
          <div class="duel-spell-prof-num">${prof>=100?"精通":prof+"%"}</div>
        </button>`;
      }).join("")}
    </div>`;

  area.querySelectorAll(".duel-spell-btn").forEach(btn => {
    btn.onclick = () => onSelect(btn.dataset.id);
  });
}

// ─── 手势施法界面 ─────────────────────────────────────────

function _renderGesturePhase(spell, onComplete) {
  const area = document.getElementById("duel-main-area");
  if (!area) return;

  const gesture = window.getGestureBySpellId?.(spell.id);

  area.innerHTML = `
    <div class="duel-gesture-header">
      <span class="duel-gesture-spell-name">${spell.nameCn}</span>
      <span class="duel-gesture-prompt">——画出手势，施放咒语！</span>
    </div>
    <div id="duel-gest-mount"></div>`;

  const mount = document.getElementById("duel-gest-mount");

  if (!gesture) {
    // 无手势咒语：直接成功
    area.innerHTML += `<div class="duel-no-gesture">（此咒语无需手势，直接施放）</div>`;
    setTimeout(() => onComplete(null), 500);
    return;
  }

  window.GestureWidget?.render(mount, gesture, {
    mode: "duel",
    timeLimit: gesture.duelTimeLimit,
    showLabel: false,
    onComplete,
  });
}

// ─── 敌方思考动画 ─────────────────────────────────────────

function _renderEnemyThinking(unit) {
  const area = document.getElementById("duel-main-area");
  if (!area) return;
  area.innerHTML = `
    <div class="duel-enemy-thinking">
      ${unit.portrait} ${unit.name} 正在施法……
    </div>`;
}

// ─── 队友出手动画 ─────────────────────────────────────────

function _renderAllyAction(ally, spellId) {
  const area = document.getElementById("duel-main-area");
  if (!area) return;
  const ef = _getEffect(spellId);
  area.innerHTML = `
    <div class="duel-ally-action">
      <div class="duel-ally-action-portrait">${ally.portrait}</div>
      <div class="duel-ally-action-name">${ally.name}</div>
      <div class="duel-ally-action-spell">${ef.icon} ${ef.label}</div>
    </div>`;
}

function _getEffect(id) {
  const map = { stupefy:{icon:"🔴",label:"昏昏倒地"}, expelliarmus:{icon:"💫",label:"除你武器"},
    diffindo:{icon:"⚡",label:"切割咒"}, bombarda:{icon:"💥",label:"爆炸咒"},
    incendio:{icon:"🔥",label:"燃烧咒"}, protego:{icon:"🛡️",label:"盔甲护身"},
    glacius:{icon:"❄️",label:"冰冻咒"}, reparo:{icon:"💚",label:"修复如初"},
    depulso:{icon:"💨",label:"击退咒"}, accio:{icon:"🌀",label:"飞来咒"},
    stupefy:{icon:"🔴",label:"昏昏倒地"}, arresto:{icon:"🛑",label:"停止咒"},
  };
  return map[id] || { icon:"🔮", label: id };
}

// ─── 结果页 ────────────────────────────────────────────────

function _renderResult(won, profGains, record, mode) {
  const area = document.getElementById("duel-main-area");
  if (!area) return;

  const profHTML = profGains?.length ? `
    <div class="duel-prof-gains">
      <div class="duel-prof-gains-title">⚡ 决斗熟练度提升 ${mode==="4v4"?"（×1.5 团队加成）":""}</div>
      ${profGains.map(g=>`
        <div class="duel-prof-gain-row">
          <span class="duel-prof-gain-name">${g.name}</span>
          <span class="duel-prof-gain-val">+${g.gain}%</span>
          <span class="duel-prof-gain-total ${g.mastered?"duel-prof-mastered":""}">
            ${g.mastered?"【精通】":"→ "+g.newProf+"%"}
          </span>
        </div>`).join("")}
    </div>` : "";

  area.innerHTML = `
    <div class="duel-result ${won?"duel-result-win":"duel-result-lose"}">
      <div class="duel-result-icon">${won?"🏆":"💔"}</div>
      <div class="duel-result-title">${won?"决斗胜利！":"决斗失败"}</div>
      ${profHTML}
      <div class="duel-result-record">战绩：${record?.wins||0} 胜 / ${record?.losses||0} 负</div>
      <div class="duel-result-btns">
        <button class="duel-btn-primary" id="duel-again">再来一场</button>
        <button class="duel-btn-sec"     id="duel-exit">离开</button>
      </div>
    </div>`;

  document.getElementById("duel-again").onclick = _renderModeSelect;
  document.getElementById("duel-exit").onclick   = closeDuelPanel;
}

// ═══════════════════════════════════════════════════════════
// 6. 开始战斗：1v1
// ═══════════════════════════════════════════════════════════

function _startBattle1v1(opponent) {
  const playerSpells = (window.getSpellListWithStatus?.() || []).filter(s => s.isLearned);
  if (!playerSpells.length) {
    alert("你还没有习得任何咒语，无法参与决斗！");
    return;
  }

  _buildBattleFrame("1v1");

  let engine;

  const callbacks = {
    onLog: _duelLog,
    onHPUpdate: (state) => _renderHP1v1(state),
    onPhaseChange: (phase) => {
      if (phase === "enemy") _renderEnemyThinking(opponent);
    },
    onRoundStart: (round) => {
      const lbl = document.getElementById("duel-round-label");
      if (lbl) lbl.textContent = `回合 ${round} · 选择咒语`;
    },
    onResult: (won, gains, record) => _renderResult(won, gains, record, "1v1"),
    onEnemyAction: (enemy, spellId) => _renderEnemyThinking(enemy),
  };

  engine = window.DuelEngine?.start1v1(opponent, playerSpells, callbacks);
  if (!engine) { _duelLog("⚠️ 引擎加载失败，请刷新重试", "dlog-err"); return; }

  // 渲染咒语选择
  function showSpellSelect() {
    _renderSpellSelect(playerSpells, (spellId) => {
      const spell = playerSpells.find(s => s.id === spellId);
      const gesture = window.getGestureBySpellId?.(spellId);
      if (gesture) {
        _renderGesturePhase(spell, (result) => {
          engine.playerCast(spellId, result);
          // 下一轮由 onPhaseChange("select") 触发
          callbacks.onPhaseChange = (phase) => {
            if (phase === "select") showSpellSelect();
            if (phase === "enemy") _renderEnemyThinking(opponent);
          };
        });
      } else {
        engine.playerCast(spellId, null);
        callbacks.onPhaseChange = (phase) => {
          if (phase === "select") showSpellSelect();
          if (phase === "enemy") _renderEnemyThinking(opponent);
        };
      }
    });
  }

  // 覆盖 onPhaseChange 以绑定界面
  callbacks.onPhaseChange = (phase) => {
    if (phase === "select") showSpellSelect();
    if (phase === "enemy") _renderEnemyThinking(opponent);
  };

  showSpellSelect();
}

// ═══════════════════════════════════════════════════════════
// 7. 开始战斗：4v4
// ═══════════════════════════════════════════════════════════

function _startBattle4v4(teamConfig) {
  const playerSpells = (window.getSpellListWithStatus?.() || []).filter(s => s.isLearned);
  if (!playerSpells.length) {
    alert("你还没有习得任何咒语，无法参与决斗！");
    return;
  }

  // 构建对手成员
  let enemyMembers = teamConfig.members;
  if (!enemyMembers && teamConfig.randomPool) {
    enemyMembers = window.duelData?.buildRandomTeam?.(teamConfig.randomPool, teamConfig.randomCount || 4) || [];
  }
  if (!enemyMembers || enemyMembers.length === 0) {
    _duelLog("⚠️ 对手配置错误", "dlog-err");
    return;
  }

  _buildBattleFrame("4v4");

  let engine;

  const callbacks = {
    onLog: _duelLog,
    onHPUpdate: (state) => _renderHP4v4(state),
    onPhaseChange: (phase) => {},
    onRoundStart: (round) => {
      _duelLog(`── 第 ${round} 回合 ──`, "dlog-round");
    },
    onResult: (won, gains, record) => _renderResult(won, gains, record, "4v4"),
    onAllyAction: (ally, spellId, success) => {
      _renderAllyAction(ally, spellId);
    },
    onEnemyAction: (enemy, spellId) => {
      _renderEnemyThinking(enemy);
    },
  };

  engine = window.DuelEngine?.start4v4(_selectedAllies, enemyMembers, playerSpells, callbacks);
  if (!engine) { _duelLog("⚠️ 引擎加载失败", "dlog-err"); return; }

  function showSpellSelect() {
    _renderSpellSelect(playerSpells, (spellId) => {
      const spell   = playerSpells.find(s => s.id === spellId);
      const gesture = window.getGestureBySpellId?.(spellId);
      if (gesture) {
        _renderGesturePhase(spell, (result) => {
          engine.playerCast(spellId, result);
          rebindPhase();
        });
      } else {
        engine.playerCast(spellId, null);
        rebindPhase();
      }
    });
  }

  function rebindPhase() {
    callbacks.onPhaseChange = (phase) => {
      if (phase === "select") showSpellSelect();
    };
  }

  callbacks.onPhaseChange = (phase) => {
    if (phase === "select") showSpellSelect();
  };

  showSpellSelect();
}

// ═══════════════════════════════════════════════════════════
// 工具
// ═══════════════════════════════════════════════════════════

function _roleLabel(role) {
  return { damage:"⚔️ 攻击", tank:"🛡️ 防守", support:"💚 辅助" }[role] || role;
}

function _diffLabel(d) {
  return ["","⭐","⭐⭐","⭐⭐⭐","⭐⭐⭐⭐","⭐⭐⭐⭐⭐"][d] || "";
}

// ═══════════════════════════════════════════════════════════
// 全局挂载
// ═══════════════════════════════════════════════════════════

window.openDuelPanel  = openDuelPanel;
window.closeDuelPanel = closeDuelPanel;

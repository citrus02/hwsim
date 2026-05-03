/**
 * duel-engine.js
 * 决斗战斗核心引擎（1v1 + 4v4）
 *
 * 对外接口：
 *   DuelEngine.start1v1(opponent, playerSpells, callbacks)
 *   DuelEngine.start4v4(allies, enemyTeam, playerSpells, callbacks)
 *
 * callbacks：
 *   onLog(text, cls)         — 写战斗日志
 *   onHPUpdate(state)        — HP状态更新
 *   onPhaseChange(phase)     — 阶段切换
 *   onRoundStart(round)      — 回合开始
 *   onResult(won, profGains) — 战斗结束
 *   onAllyAction(ally, spell, success) — 队友出手（用于动画）
 *   onEnemyAction(enemy, spell)        — 对手出手（用于动画）
 */

// ── 运行时依赖 ───────────────────────────────────────────
function getSave()     { return window.saveSys?.getSave?.() || JSON.parse(localStorage.getItem('hogwarts')||'{}'); }
function setSave(d)    { window.saveSys?.setSave?.(d) || localStorage.setItem('hogwarts', JSON.stringify(d)); }
function addLog(t)     { window.addLog?.(t); }

// ── 咒语效果表 ────────────────────────────────────────────
const SPELL_EFFECTS = {
  stupefy:      { type:"damage",    base:20, label:"昏昏倒地",  icon:"🔴" },
  expelliarmus: { type:"disarm",    base:15, label:"除你武器",  icon:"💫" },
  diffindo:     { type:"damage",    base:22, label:"切割咒",    icon:"⚡" },
  bombarda:     { type:"damage",    base:30, label:"爆炸咒",    icon:"💥" },
  incendio:     { type:"damage",    base:25, label:"燃烧咒",    icon:"🔥" },
  depulso:      { type:"knockback", base:12, label:"击退咒",    icon:"💨" },
  glacius:      { type:"slow",      base:18, label:"冰冻咒",    icon:"❄️" },
  relashio:     { type:"damage",    base:14, label:"力松劲泄",  icon:"✨" },
  arresto:      { type:"slow",      base:10, label:"停止咒",    icon:"🛑" },
  protego:      { type:"shield",    base:0,  label:"盔甲护身",  icon:"🛡️" },
  accio:        { type:"disrupt",   base:8,  label:"飞来咒",    icon:"🌀" },
  lumos:        { type:"dazzle",    base:5,  label:"荧光闪烁",  icon:"✦"  },
  aguamenti:    { type:"disrupt",   base:10, label:"清水如泉",  icon:"💧" },
  reparo:       { type:"heal",      base:12, label:"修复如初",  icon:"💚" },
  scourgify:    { type:"disrupt",   base:6,  label:"清理一新",  icon:"🌀" },
};
function getEffect(id) {
  return SPELL_EFFECTS[id] || { type:"damage", base:10, label:id, icon:"🔮" };
}

// ── 战斗单位工厂 ─────────────────────────────────────────
function makeUnit(data, isPlayer = false) {
  return {
    id:        data.id || data.characterKey || data.name,
    name:      data.name,
    portrait:  data.portrait || "🧙",
    hp:        data.hp,
    maxHp:     data.hp,
    spells:    data.spells || ["expelliarmus"],
    aiAccuracy:data.aiAccuracy || 0.75,
    aiDelay:   data.aiDelay   || [700, 1300],
    role:      data.role      || "damage",
    isPlayer,
    // 状态
    shielded:  false,
    disarmed:  false,
    slowed:    false,
    fainted:   false,
    // 台词（队友用）
    battleQuotes: data.battleQuotes || [],
    victoryQuote: data.victoryQuote || "",
    defeatQuote:  data.defeatQuote  || "",
  };
}

// ═══════════════════════════════════════════════════════════
// 战斗状态对象
// ═══════════════════════════════════════════════════════════

let _battle = null;

function _resetBattle() { _battle = null; }

// ═══════════════════════════════════════════════════════════
// 公共伤害计算
// ═══════════════════════════════════════════════════════════

function _calcDamage(effect, proficiency, accuracy, isSlowed) {
  let dmg = Math.round(effect.base * (0.85 + Math.random() * 0.3));
  if (proficiency) dmg = Math.round(dmg * (1 + proficiency / 500));
  if (accuracy !== undefined) dmg = Math.round(dmg * (0.5 + accuracy * 0.5));
  if (isSlowed) dmg = Math.round(dmg * 1.15);
  return Math.max(1, dmg);
}

function _applyEffect(attacker, target, spellId, gestureAccuracy, proficiency) {
  const effect = getEffect(spellId);
  const lines  = [];
  let hit      = false;

  if (target.fainted) return { lines: [], hit: false };

  switch (effect.type) {
    case "shield":
      attacker.shielded = true;
      lines.push({ text: `${attacker.portrait} ${attacker.name} 施放${effect.icon}${effect.label}——防护盾就位！`, cls: "dlog-shield" });
      break;

    case "heal": {
      const healed = Math.min(attacker.maxHp - attacker.hp, Math.round(effect.base * (1 + (proficiency||0)/500)));
      attacker.hp += healed;
      lines.push({ text: `${attacker.portrait} ${attacker.name} 用${effect.icon}${effect.label}恢复了 ${healed} HP`, cls: "dlog-heal" });
      hit = true;
      break;
    }

    case "damage":
    case "knockback":
    case "dazzle": {
      const dmg = _calcDamage(effect, proficiency, gestureAccuracy, target.slowed);
      if (target.shielded) {
        const reduced = Math.round(dmg * 0.3);
        target.hp -= reduced;
        target.shielded = false;
        lines.push({ text: `${effect.icon} ${effect.label} 击碎了 ${target.portrait}${target.name} 的防护盾！穿透 ${reduced} 伤害`, cls: "dlog-shieldbreak" });
      } else {
        target.hp -= dmg;
        lines.push({ text: `${effect.icon} ${effect.label} 命中 ${target.portrait}${target.name}，造成 ${dmg} 伤害`, cls: "dlog-hit" });
      }
      hit = true;
      break;
    }

    case "disarm": {
      const ddmg = Math.round(effect.base * (1 + (proficiency||0)/500));
      if (target.shielded) {
        target.shielded = false;
        lines.push({ text: `💫 除你武器击碎了 ${target.portrait}${target.name} 的防护盾！`, cls: "dlog-shieldbreak" });
      } else {
        target.hp -= ddmg;
        target.disarmed = true;
        lines.push({ text: `💫 除你武器命中 ${target.portrait}${target.name}！魔杖飞出，下回合跳过进攻`, cls: "dlog-hit" });
      }
      hit = true;
      break;
    }

    case "slow":
    case "disrupt": {
      const sdmg = _calcDamage(effect, proficiency, gestureAccuracy);
      if (!target.shielded) {
        target.hp -= sdmg;
        target.slowed = true;
        lines.push({ text: `${effect.icon} ${effect.label} 命中 ${target.portrait}${target.name}，造成 ${sdmg} 伤害并减速`, cls: "dlog-hit" });
        hit = true;
      } else {
        lines.push({ text: `${effect.icon} ${effect.label} 被 ${target.portrait}${target.name} 的防护盾挡住`, cls: "dlog-miss" });
      }
      break;
    }
  }

  target.hp       = Math.max(0, target.hp);
  target.fainted  = target.hp <= 0;
  target.slowed   = false; // 减速每回合消失

  return { lines, hit };
}

// ═══════════════════════════════════════════════════════════
// 熟练度结算（战斗结束时调用）
// ═══════════════════════════════════════════════════════════

function _settleProficiency(spellHits, playerSpells, won, teamBonus = 1.0) {
  const gains = [];
  Object.entries(spellHits).forEach(([spellId, rec]) => {
    if (rec.hits === 0) return;
    const avgAcc = rec.totalAccuracy / rec.hits;
    let gain = Math.round(rec.hits * 3 * (0.5 + avgAcc * 0.5));
    if (won) gain = Math.round(gain * 1.3);
    gain = Math.round(gain * teamBonus);
    gain = Math.min(gain, 20);
    if (gain <= 0) return;
    const newProf = window.gainProficiency?.(spellId, gain);
    const info    = playerSpells.find(s => s.id === spellId);
    if (info && newProf !== undefined) {
      gains.push({ name: info.nameCn || spellId, gain, newProf, mastered: newProf >= 100 });
    }
  });
  return gains;
}

// ═══════════════════════════════════════════════════════════
// AI 出手逻辑（1v1 + 4v4 AI 成员共用）
// ═══════════════════════════════════════════════════════════

function _aiChooseSpell(unit, targets) {
  // 血量低时优先防护，有治疗时优先治疗
  const hpRatio = unit.hp / unit.maxHp;
  const canHeal = unit.spells.includes("reparo") && unit.role === "support" && hpRatio < 0.4;
  const canShield = unit.spells.includes("protego") && hpRatio < 0.35 && !unit.shielded;

  if (canHeal)   return "reparo";
  if (canShield) return "protego";

  // 否则从攻击咒中随机选
  const attackSpells = unit.spells.filter(s => {
    const ef = getEffect(s);
    return ef.type !== "shield" && ef.type !== "heal";
  });
  // 选择 HP 最高的存活目标（tank 优先打最厚的）
  const alive = targets.filter(t => !t.fainted);
  if (alive.length === 0) return attackSpells[0];

  return attackSpells[Math.floor(Math.random() * attackSpells.length)];
}

// ═══════════════════════════════════════════════════════════
// 1v1 引擎
// ═══════════════════════════════════════════════════════════

export const DuelEngine = {

  // ── 1v1 入口 ─────────────────────────────────────────────

  start1v1(opponentData, playerSpells, callbacks) {
    const { onLog, onHPUpdate, onPhaseChange, onRoundStart, onResult, onEnemyAction } = callbacks;

    const player   = makeUnit({ name:"你", portrait:"🧙", hp:100, spells: playerSpells.map(s=>s.id), role:"damage" }, true);
    const opponent = makeUnit(opponentData);

    _battle = {
      mode: "1v1",
      player,
      opponent,
      round: 1,
      spellHits: {},          // { spellId: { hits, totalAccuracy, misses } }
      playerSpells,
    };

    function getState() {
      return {
        mode: "1v1",
        player: _battle.player,
        enemy:  _battle.opponent,
      };
    }

    onLog(`⚔️ 决斗开始！对手：${opponentData.portrait} ${opponentData.name}`);
    onHPUpdate(getState());
    onPhaseChange("select");
    onRoundStart(1);

    // 返回控制接口
    return {
      // 玩家选择咒语后调用
      playerCast(spellId, gestureResult) {
        if (!_battle) return;
        const spell    = playerSpells.find(s => s.id === spellId);
        const profBonus = spell?.proficiency || 0;

        // 手势失败
        if (gestureResult && !gestureResult.success) {
          _recordMiss(spellId);
          onLog(`💨 手势不完整——${spell?.nameCn || spellId} 哑火了！`, "dlog-miss");
          _triggerEnemyTurn();
          return;
        }

        const accuracy = gestureResult?.accuracy ?? 1.0;
        _recordHit(spellId, accuracy);

        const { lines, hit } = _applyEffect(player, opponent, spellId, accuracy, profBonus);
        lines.forEach(l => onLog(l.text, l.cls + " dlog-player"));
        onHPUpdate(getState());

        if (opponent.fainted) {
          _finish(true);
        } else {
          setTimeout(_triggerEnemyTurn, hit ? 600 : 400);
        }
      },

      getState,
      getSpellHits: () => _battle?.spellHits || {},
      reset: _resetBattle,
    };

    function _triggerEnemyTurn() {
      if (!_battle || _battle.opponent.fainted) return;

      onPhaseChange("enemy");

      if (opponent.disarmed) {
        opponent.disarmed = false;
        onLog(`💫 ${opponent.portrait}${opponent.name} 捡回魔杖，跳过本回合进攻`, "dlog-sys");
        onHPUpdate(getState());
        _nextRound();
        return;
      }

      const [minD, maxD] = opponent.aiDelay;
      const delay = minD + Math.random() * (maxD - minD);

      const spellId = _aiChooseSpell(opponent, [player]);

      setTimeout(() => {
        if (!_battle) return;
        const success = Math.random() < opponent.aiAccuracy;
        if (onEnemyAction) onEnemyAction(opponent, spellId, success);

        if (!success) {
          onLog(`💨 ${opponent.portrait}${opponent.name} 的 ${getEffect(spellId).label} 哑火`, "dlog-miss");
        } else {
          const { lines } = _applyEffect(opponent, player, spellId);
          lines.forEach(l => onLog(l.text, l.cls + " dlog-enemy"));
        }

        onHPUpdate(getState());

        if (player.fainted) {
          _finish(false);
        } else {
          _nextRound();
        }
      }, delay);
    }

    function _nextRound() {
      if (!_battle) return;
      _battle.round++;
      // 清除缴械状态（新回合）
      player.disarmed   = false;
      opponent.shielded = false;
      setTimeout(() => {
        onRoundStart(_battle.round);
        onPhaseChange("select");
      }, 300);
    }

    function _finish(won) {
      if (!_battle) return;
      const gains = _settleProficiency(_battle.spellHits, playerSpells, won, 1.0);
      const save  = getSave();
      if (!save.duelRecord) save.duelRecord = { wins:0, losses:0 };
      if (won) save.duelRecord.wins++; else save.duelRecord.losses++;
      setSave(save);
      addLog(won
        ? `🏆 你赢得了对 ${opponentData.name} 的决斗！（${_battle.round-1} 回合）`
        : `💔 你在第 ${_battle.round-1} 回合被 ${opponentData.name} 击败。`);
      window.renderLog?.();
      _resetBattle();
      onResult(won, gains, save.duelRecord);
    }

    function _recordHit(spellId, acc) {
      if (!_battle.spellHits[spellId]) _battle.spellHits[spellId] = { hits:0, totalAccuracy:0, misses:0 };
      _battle.spellHits[spellId].hits++;
      _battle.spellHits[spellId].totalAccuracy += acc;
    }
    function _recordMiss(spellId) {
      if (!_battle.spellHits[spellId]) _battle.spellHits[spellId] = { hits:0, totalAccuracy:0, misses:0 };
      _battle.spellHits[spellId].misses++;
    }
  },

  // ── 4v4 入口 ─────────────────────────────────────────────

  start4v4(alliesData, enemyTeamData, playerSpells, callbacks) {
    const {
      onLog, onHPUpdate, onPhaseChange, onRoundStart,
      onResult, onAllyAction, onEnemyAction,
    } = callbacks;

    // 构建双方队伍
    const playerUnit = makeUnit({
      name:"你", portrait:"🧙",
      hp:100, spells: playerSpells.map(s=>s.id), role:"damage"
    }, true);

    const allies = alliesData.map(a => makeUnit(a));
    const myTeam = [playerUnit, ...allies];         // 己方4人
    const enemyTeam = enemyTeamData.map(e => makeUnit(e)); // 敌方4人

    _battle = {
      mode: "4v4",
      myTeam,
      enemyTeam,
      playerUnit,
      round: 1,
      spellHits: {},
      playerSpells,
      // 本回合轮次索引（己方按顺序出手）
      myTurnIdx: 0,
    };

    function getState() {
      return {
        mode: "4v4",
        myTeam:    _battle.myTeam,
        enemyTeam: _battle.enemyTeam,
      };
    }

    function aliveIn(team) { return team.filter(u => !u.fainted); }
    function firstAliveEnemy()  { return aliveIn(enemyTeam)[0] || null; }
    function firstAliveAlly()   { return aliveIn(myTeam)[0] || null; }

    onLog(`⚔️ 4v4 团队决斗开始！`);
    onLog(`🟦 己方：${myTeam.map(u => u.portrait+u.name).join(" · ")}`);
    onLog(`🟥 对方：${enemyTeam.map(u => u.portrait+u.name).join(" · ")}`);
    onHPUpdate(getState());
    onRoundStart(1);

    // 第一个出手的是玩家，调用方渲染选咒界面
    onPhaseChange("select");

    return {

      // 玩家选好咒语+完成手势后调用
      playerCast(spellId, gestureResult) {
        if (!_battle) return;
        const spell    = playerSpells.find(s => s.id === spellId);
        const profBonus = spell?.proficiency || 0;
        const target   = firstAliveEnemy();
        if (!target) return;

        if (gestureResult && !gestureResult.success) {
          _recordMiss4(spellId);
          onLog(`💨 你的手势不完整——${spell?.nameCn||spellId} 哑火！`, "dlog-miss");
        } else {
          const accuracy = gestureResult?.accuracy ?? 1.0;
          _recordHit4(spellId, accuracy);
          const { lines } = _applyEffect(playerUnit, target, spellId, accuracy, profBonus);
          lines.forEach(l => onLog(l.text, l.cls + " dlog-player"));
        }

        onHPUpdate(getState());
        _checkFainted();

        if (_isOver()) { _finishAll(); return; }

        // 继续下一个己方成员出手
        _battle.myTurnIdx = 1;
        _runAllyTurns();
      },

      getState,
      reset: _resetBattle,
    };

    // ── 己方 AI 队友依次出手 ────────────────────────────────
    function _runAllyTurns() {
      if (!_battle) return;
      const idx   = _battle.myTurnIdx;
      const unit  = _battle.myTeam[idx];

      if (!unit || idx >= _battle.myTeam.length) {
        // 己方全部出手完毕 → 敌方回合
        setTimeout(_enemyTeamTurn, 400);
        return;
      }

      if (unit.fainted || unit.isPlayer) {
        _battle.myTurnIdx++;
        _runAllyTurns();
        return;
      }

      // 队友缴械处理
      if (unit.disarmed) {
        unit.disarmed = false;
        onLog(`💫 ${unit.portrait}${unit.name} 捡回魔杖，跳过本回合`, "dlog-sys");
        _battle.myTurnIdx++;
        setTimeout(_runAllyTurns, 600);
        return;
      }

      // 队友随机台词
      if (unit.battleQuotes?.length) {
        const q = unit.battleQuotes[Math.floor(Math.random() * unit.battleQuotes.length)];
        onLog(`${unit.portrait} ${unit.name}：${q}`, "dlog-ally");
      }

      const [minD, maxD] = unit.aiDelay;
      const delay = minD + Math.random() * (maxD - minD);

      setTimeout(() => {
        if (!_battle) return;
        const target  = firstAliveEnemy();
        if (!target)  { _finishAll(); return; }

        const spellId = _aiChooseSpell(unit, aliveIn(enemyTeam));
        const success = Math.random() < unit.aiAccuracy;

        if (onAllyAction) onAllyAction(unit, spellId, success);

        if (!success) {
          onLog(`💨 ${unit.portrait}${unit.name} 的 ${getEffect(spellId).label} 哑火`, "dlog-miss");
        } else {
          const { lines } = _applyEffect(unit, target, spellId);
          lines.forEach(l => onLog(l.text, l.cls + " dlog-ally"));
        }

        onHPUpdate(getState());
        _checkFainted();

        if (_isOver()) { _finishAll(); return; }

        _battle.myTurnIdx++;
        _runAllyTurns();
      }, delay);
    }

    // ── 敌方队伍依次出手 ─────────────────────────────────────
    function _enemyTeamTurn() {
      if (!_battle) return;
      const enemies = aliveIn(enemyTeam);
      if (enemies.length === 0) { _finishAll(); return; }

      let idx = 0;
      function nextEnemy() {
        if (!_battle) return;
        if (idx >= enemies.length) {
          // 敌方全部出手 → 新回合
          _nextRound4();
          return;
        }

        const enemy = enemies[idx];
        idx++;

        if (enemy.fainted) { nextEnemy(); return; }

        if (enemy.disarmed) {
          enemy.disarmed = false;
          onLog(`💫 ${enemy.portrait}${enemy.name} 捡回魔杖，跳过本回合`, "dlog-sys");
          setTimeout(nextEnemy, 500);
          return;
        }

        const [minD, maxD] = enemy.aiDelay;
        const delay = minD + Math.random() * (maxD - minD);

        setTimeout(() => {
          if (!_battle) return;
          const myAlive = aliveIn(myTeam);
          if (myAlive.length === 0) { _finishAll(); return; }

          // 敌方选目标：偏向HP最低的己方成员
          const target = myAlive.reduce((a, b) => a.hp < b.hp ? a : b);
          const spellId = _aiChooseSpell(enemy, myAlive);
          const success = Math.random() < enemy.aiAccuracy;

          if (onEnemyAction) onEnemyAction(enemy, spellId, success);

          if (!success) {
            onLog(`💨 ${enemy.portrait}${enemy.name} 的 ${getEffect(spellId).label} 哑火`, "dlog-miss");
          } else {
            const { lines } = _applyEffect(enemy, target, spellId);
            lines.forEach(l => onLog(l.text, l.cls + " dlog-enemy"));
          }

          onHPUpdate(getState());
          _checkFainted();

          if (_isOver()) { _finishAll(); return; }
          nextEnemy();
        }, delay);
      }

      nextEnemy();
    }

    function _nextRound4() {
      if (!_battle) return;
      _battle.round++;
      _battle.myTurnIdx = 0;
      setTimeout(() => {
        onRoundStart(_battle.round);
        onPhaseChange("select");
      }, 400);
    }

    function _checkFainted() {
      [...myTeam, ...enemyTeam].forEach(u => {
        if (!u.fainted && u.hp <= 0) {
          u.fainted = true;
          onLog(`💔 ${u.portrait}${u.name} 倒下了！`, "dlog-faint");
          // 队友倒地台词
          if (!u.isPlayer && u.defeatQuote) {
            setTimeout(() => onLog(`${u.portrait} ${u.name}：「${u.defeatQuote}」`, "dlog-ally-quote"), 300);
          }
        }
      });
    }

    function _isOver() {
      return aliveIn(myTeam).length === 0 || aliveIn(enemyTeam).length === 0;
    }

    function _finishAll() {
      if (!_battle) return;
      const won = aliveIn(myTeam).length > 0;

      // 胜利/失败台词
      if (won) {
        aliveIn(myTeam).forEach(u => {
          if (!u.isPlayer && u.victoryQuote) {
            onLog(`${u.portrait} ${u.name}：「${u.victoryQuote}」`, "dlog-ally-quote");
          }
        });
      }

      // 4v4 熟练度有 1.5× 加成
      const gains = _settleProficiency(_battle.spellHits, playerSpells, won, 1.5);

      const save = getSave();
      if (!save.duelRecord) save.duelRecord = { wins:0, losses:0 };
      if (won) save.duelRecord.wins++; else save.duelRecord.losses++;
      setSave(save);

      addLog(won
        ? `🏆 4v4 团队决斗胜利！（${_battle.round-1} 回合）`
        : `💔 4v4 团队决斗失败，第 ${_battle.round-1} 回合。`);
      window.renderLog?.();

      _resetBattle();
      onResult(won, gains, save.duelRecord);
    }

    function _recordHit4(spellId, acc) {
      if (!_battle.spellHits[spellId]) _battle.spellHits[spellId] = { hits:0, totalAccuracy:0, misses:0 };
      _battle.spellHits[spellId].hits++;
      _battle.spellHits[spellId].totalAccuracy += acc;
    }
    function _recordMiss4(spellId) {
      if (!_battle.spellHits[spellId]) _battle.spellHits[spellId] = { hits:0, totalAccuracy:0, misses:0 };
      _battle.spellHits[spellId].misses++;
    }
  },
};

window.DuelEngine = DuelEngine;

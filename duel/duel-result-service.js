// duel-result-service.js - duel outcome persistence, affinity hooks, and reward summaries
import { getSave, setSave, addLog, renderLog } from './duel-runtime.js';
import { grantDuelReward } from '../economy-rewards.js';

export function collectProficiencyGains(spellHits, playerSpells, playerWon) {
  const profGains = [];
  Object.entries(spellHits || {}).forEach(([spellId, rec]) => {
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
  return profGains;
}

export function buildProficiencyGainsHtml(profGains) {
  return profGains.length > 0 ? `
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
}

export function settleDuelResult({ duel, playerWon, playerSpells }) {
  const { opponent, round, spellHits } = duel;
  const profGains = collectProficiencyGains(spellHits, playerSpells, playerWon);

  const save = getSave();
  if (!save.duelRecord) save.duelRecord = { wins: 0, losses: 0, totalRounds: 0 };
  save.duelRecord.totalRounds += round - 1;
  if (playerWon) save.duelRecord.wins++;
  else save.duelRecord.losses++;
  setSave(save);

  if (playerWon) {
    grantDuelReward({ won: true, opponentLevel: opponent.level || 1, is4v4: false });
    window.affinityUI?.tryStudentActionEncounter('duelWin');
    window.affinityUI?.checkStudentSpecialTriggers('duelWin', {
      opponentLevel: opponent.level || 1
    });
    // 写入带标签的决斗胜利记忆
    const memData = window.saveSys?.getSave?.();
    if (memData) {
      if (!memData.world) memData.world = {};
      if (!Array.isArray(memData.world.memory)) memData.world.memory = [];
      memData.world.memory.push({
        date: memData.time?.currentDate || '',
        time: memData.time?.nowTime || '上午',
        type: 'duel',
        text: '你在决斗中取得了胜利。',
        tag: 'duel_win',
      });
      memData.world.memory = memData.world.memory.slice(-80);
      window.saveSys?.setSave?.(memData);
    }
  }

  window._questHook_duelEnd?.(playerWon, false);

  if (opponent.characterKey) {
    const delta = playerWon ? 3 : -1;
    window.affinitySystem?.addAffinity(opponent.characterKey, delta, 'duel');
    const deltaText = delta > 0 ? `+${delta}` : `${delta}`;
    addLog(`❤️ ${opponent.name}好感度${deltaText}（决斗${playerWon ? '胜利' : '失败'}）`);
  }

  if (duel.second && duel.second.active && duel.second.characterKey) {
    const secDelta = playerWon ? 4 : 1;
    window.affinitySystem?.addAffinity(duel.second.characterKey, secDelta, 'duel');
    const secDeltaText = secDelta > 0 ? `+${secDelta}` : `${secDelta}`;
    addLog(`❤️ ${duel.second.name}好感度${secDeltaText}（决斗${playerWon ? '协助胜利' : '并肩作战'}）`);
  }

  const secondInfo = duel.second;
  const secondTag = secondInfo ? (secondInfo.active ? `（${secondInfo.name} 接替了你）` : '') : '';
  const resultText = playerWon
    ? `🏆 你赢得了对 ${opponent.name} 的决斗！（${round - 1} 回合）${secondTag}`
    : `💔 你在第 ${round - 1} 回合被 ${opponent.name} 击败了。${secondTag}`;
  addLog(resultText);
  if (window.renderLog) renderLog();

  return {
    save,
    secondTag,
    profHTML: buildProficiencyGainsHtml(profGains),
  };
}

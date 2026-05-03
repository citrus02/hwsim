/**
 * quest-engine.js
 * 任务引擎：状态管理、触发检测、奖励发放
 *
 * 存档结构（data.quests）：
 * {
 *   daily: {
 *     date: "1991-09-02",          // 当前日常任务的日期
 *     quests: [                    // 今日3条任务
 *       { id, progress:{}, done, claimed }
 *     ],
 *     doneCount: 0,                // 历史累计完成日常的天数
 *   },
 *   side: {
 *     [questId]: { triggered, done, claimed }
 *   },
 *   achievements: {
 *     [achId]: { done, claimed, progress }
 *   },
 *   counters: {                    // 全局累计计数器（用于成就和日常判断）
 *     courseStudy: 0,
 *     goodStudy: 0,
 *     duelPlay: 0,
 *     duelWin: 0,
 *     duel4v4Play: 0,
 *     duel4v4Win: 0,
 *     explore: 0,
 *     brewPotion: 0,
 *     sideQuestDone: 0,
 *     dailyDaysDone: 0,
 *   },
 *   todayCounters: {               // 今日计数（日常任务用，每天重置）
 *     courseStudy: 0,
 *     goodStudy: 0,
 *     duelPlay: 0,
 *     duelWin: 0,
 *     duel4v4Play: 0,
 *     explore: 0,
 *     brewPotion: 0,
 *   }
 * }
 *
 * 对外接口（均挂载到 window.questEngine）：
 *   init()                    — 页面加载时初始化
 *   notify(event, payload)    — 游戏事件通知（各系统调用）
 *   claimDaily(questId)       — 领取日常任务奖励
 *   claimSide(questId)        — 领取支线任务奖励
 *   claimAchievement(achId)   — 领取成就奖励
 *   getTodayDailies()         — 获取今日日常任务（含进度）
 *   getActiveSideQuests()     — 获取已触发、未完成的支线任务
 *   getAchievements()         — 获取所有成就状态
 *   getSideQuestsByChar(key)  — 获取指定角色的NPC发布任务
 *   checkSideQuestTriggers()  — 检查好感度触发类支线
 *   onQuestUpdate             — 任务状态变化时的回调（UI层绑定）
 */

import { DAILY_QUEST_POOL, SIDE_QUESTS, ACHIEVEMENTS, drawDailyQuests } from './quest-data.js';

// ── 运行时依赖 ───────────────────────────────────────────
function _ls()     { try { return JSON.parse(localStorage.getItem('hogwarts')||'{}'); } catch(e){return{};} }
function _lsSet(d) { try { localStorage.setItem('hogwarts', JSON.stringify(d)); } catch(e){} }
function getSave() { return window.saveSys?.getSave?.() || _ls(); }
function setSave(d){ if(window.saveSys?.setSave) window.saveSys.setSave(d); else _lsSet(d); }
function addLog(t) { window.addLog?.(t); window.renderLog?.(); }
function getDate() {
  const d = getSave();
  return d.time?.currentDate || d.time?.currentDate || "1991-09-02";
}

// ═══════════════════════════════════════════════════════════
// 存档初始化
// ═══════════════════════════════════════════════════════════

function _initQuestData(data) {
  if (!data.quests) data.quests = {};
  const q = data.quests;

  if (!q.daily) q.daily = { date: "", quests: [], doneCount: 0 };
  if (!q.side)  q.side  = {};
  if (!q.achievements) q.achievements = {};

  if (!q.counters) q.counters = {
    courseStudy: 0, goodStudy: 0,
    duelPlay: 0, duelWin: 0,
    duel4v4Play: 0, duel4v4Win: 0,
    explore: 0, brewPotion: 0,
    sideQuestDone: 0, dailyDaysDone: 0,
  };

  if (!q.todayCounters) q.todayCounters = {
    courseStudy: 0, goodStudy: 0,
    duelPlay: 0, duelWin: 0,
    duel4v4Play: 0, explore: 0, brewPotion: 0,
  };

  return data;
}

function _getQuests() {
  const data = getSave();
  _initQuestData(data);
  return data.quests;
}

function _saveQuests(q) {
  const data = getSave();
  data.quests = q;
  setSave(data);
}

// ═══════════════════════════════════════════════════════════
// 日常任务管理
// ═══════════════════════════════════════════════════════════

function _refreshDailyIfNeeded(q) {
  const today = getDate();
  if (q.daily.date === today) return false; // 今天已刷新过

  // 新的一天：重置今日计数器
  q.todayCounters = {
    courseStudy: 0, goodStudy: 0,
    duelPlay: 0, duelWin: 0,
    duel4v4Play: 0, explore: 0, brewPotion: 0,
  };

  // 抽取今日3条任务（排除昨天的）
  const lastIds = (q.daily.quests || []).map(dq => dq.id);
  const pool    = DAILY_QUEST_POOL.filter(qd => !lastIds.includes(qd.id));
  const drawn   = drawDailyQuests(3, pool.length >= 3 ? pool : DAILY_QUEST_POOL);

  q.daily.date   = today;
  q.daily.quests = drawn.map(qd => ({
    id:       qd.id,
    progress: {},       // { subConditionKey: count } 用于compound
    done:     false,
    claimed:  false,
  }));

  return true; // 刷新了
}

// ─── 检查单条日常任务是否完成 ────────────────────────────

function _checkDailyDone(qState, qDef, todayCounters) {
  if (qState.done) return true;
  const cond = qDef.condition;

  if (cond.type === "compound") {
    return cond.conditions.every(sub => {
      const key = sub.type;
      return (todayCounters[key] || 0) >= sub.count;
    });
  }

  const key = cond.type;
  return (todayCounters[key] || 0) >= (cond.count || 1);
}

// ═══════════════════════════════════════════════════════════
// 支线任务管理
// ═══════════════════════════════════════════════════════════

function _triggerSideQuest(q, questId) {
  if (!q.side[questId]) {
    q.side[questId] = { triggered: true, done: false, claimed: false };
    return true;
  }
  return false;
}

/** 检查好感度自动触发的支线任务 */
function _checkAffinityTriggers(q) {
  const triggered = [];
  SIDE_QUESTS.forEach(sq => {
    if (sq.triggerType !== "affinityTier") return;
    if (q.side[sq.id]?.triggered) return; // 已触发过

    const tier = window.affinitySystem?.getTier?.(sq.characterKey) ?? 0;
    if (tier >= sq.triggerTier) {
      const isNew = _triggerSideQuest(q, sq.id);
      if (isNew) triggered.push(sq);
    }
  });
  return triggered;
}

/** 检查支线任务收集条件是否满足 */
function _checkSideDone(sq) {
  const cond = sq.condition;

  if (cond.type === "collectItem") {
    const data = getSave();
    const bag  = data.bag?.material || [];
    const found = bag.find(m => m.name === cond.name);
    return (found?.count || 0) >= cond.count;
  }

  if (cond.type === "manual") return false; // 手动触发，不自动完成

  if (cond.type === "compound") {
    const q = _getQuests();
    return cond.conditions.every(sub => {
      if (sub.type === "collectItem") {
        const data = getSave();
        const bag  = data.bag?.material || [];
        const found = bag.find(m => m.name === sub.name);
        return (found?.count || 0) >= sub.count;
      }
      return (q.counters[sub.type] || 0) >= (sub.count || 1);
    });
  }

  const q = _getQuests();
  return (q.counters[cond.type] || 0) >= (cond.count || 1);
}

// ═══════════════════════════════════════════════════════════
// 成就管理
// ═══════════════════════════════════════════════════════════

function _checkAchievements(q) {
  const newDone = [];

  ACHIEVEMENTS.forEach(ach => {
    const state = q.achievements[ach.id];
    if (state?.done) return;

    let done = false;
    const cond = ach.condition;

    switch (cond.type) {
      case "courseStudy":    done = q.counters.courseStudy  >= cond.count; break;
      case "duelPlay":       done = q.counters.duelPlay     >= cond.count; break;
      case "duelWin":        done = q.counters.duelWin      >= cond.count; break;
      case "duel4v4Play":    done = q.counters.duel4v4Play  >= cond.count; break;
      case "explore":        done = q.counters.explore      >= cond.count; break;
      case "brewPotion":     done = q.counters.brewPotion   >= cond.count; break;
      case "sideQuestDone":  done = q.counters.sideQuestDone >= cond.count; break;
      case "dailyDaysDone":  done = q.counters.dailyDaysDone >= cond.count; break;

      case "courseComplete": {
        const data  = getSave();
        done = (data.course?.[cond.subject] || 0) >= 100;
        break;
      }

      case "anyAffinityTier": {
        const allAff = window.affinitySystem?.getAllAffinity?.() || {};
        done = Object.values(allAff).some(a => a.tier >= cond.tier);
        break;
      }

      case "anySpellMastered": {
        const data = getSave();
        const prof = data.spellProficiency || {};
        done = Object.values(prof).some(v => v >= 100);
        break;
      }
    }

    if (done) {
      if (!q.achievements[ach.id]) q.achievements[ach.id] = {};
      q.achievements[ach.id].done = true;
      newDone.push(ach);
    }
  });

  return newDone;
}

// ═══════════════════════════════════════════════════════════
// 奖励发放
// ═══════════════════════════════════════════════════════════

function _grantRewards(rewards) {
  const lines = [];
  rewards.forEach(r => {
    switch (r.type) {
      case "material":
        window.addMaterialToBag?.(r.name, r.count);
        lines.push(`📦 ${r.name} ×${r.count}`);
        break;
      case "item":
        window.addItemToBag?.("item", { name: r.name, count: r.count });
        lines.push(`🎁 ${r.name} ×${r.count}`);
        break;
      case "housePoint":
        window.housePoints?.addPlayerPoints?.(r.amount);
        lines.push(`🏅 学院积分 +${r.amount}`);
        break;
      case "affinity":
        window.affinitySystem?.addAffinity?.(r.key, r.delta, "任务奖励");
        const name = window.affinityData?.AFFINITY_CHARACTERS?.[r.key]?.name || r.key;
        lines.push(`💛 ${name} 好感度 +${r.delta}`);
        break;
      case "log":
        addLog(r.text);
        break;
    }
  });
  window.refreshAll?.();
  return lines;
}

// ═══════════════════════════════════════════════════════════
// 主引擎对象
// ═══════════════════════════════════════════════════════════

export const QuestEngine = {

  /** 页面加载/每次切换到任务页时调用 */
  init() {
    const data = getSave();
    _initQuestData(data);
    setSave(data);

    const q     = data.quests;
    const refreshed = _refreshDailyIfNeeded(q);

    // 检查好感度自动触发
    const newSide = _checkAffinityTriggers(q);

    // 检查今日日常完成状态
    this._refreshDailyDoneStates(q);

    // 检查成就
    const newAch = _checkAchievements(q);

    _saveQuests(q);

    if (newSide.length) {
      newSide.forEach(sq => {
        window.questEngine?.onQuestUpdate?.("sideTriggered", sq);
      });
    }
    if (newAch.length) {
      newAch.forEach(ach => {
        window.questEngine?.onQuestUpdate?.("achDone", ach);
      });
    }
    if (refreshed) {
      window.questEngine?.onQuestUpdate?.("dailyRefreshed", null);
    }
  },

  /** 刷新日常任务完成状态 */
  _refreshDailyDoneStates(q) {
    q.daily.quests.forEach(dqState => {
      if (dqState.done) return;
      const def = DAILY_QUEST_POOL.find(d => d.id === dqState.id);
      if (!def) return;
      if (_checkDailyDone(dqState, def, q.todayCounters)) {
        dqState.done = true;
      }
    });
  },

  /**
   * 游戏事件通知入口
   * @param {string} event  事件名
   * @param {object} payload 事件数据
   *
   * 支持的 event：
   *   "courseStudy"   — 上了一节课
   *   "goodStudy"     — 好好学习了一节课
   *   "duelPlay"      — 参与了一场决斗
   *   "duelWin"       — 赢得了一场决斗
   *   "duel4v4Play"   — 参与了4v4决斗
   *   "duel4v4Win"    — 4v4获胜
   *   "explore"       — 探索了一次
   *   "brewPotion"    — 熬制了魔药
   *   "affinityChange"— 好感度变化（检查触发）
   *   "bagChanged"    — 背包材料变化（检查支线收集条件）
   */
  notify(event, payload = {}) {
    const data = getSave();
    _initQuestData(data);
    const q = data.quests;

    // 更新今日计数器（日常任务用）
    const todayCounterKeys = ["courseStudy","goodStudy","duelPlay","duelWin","duel4v4Play","explore","brewPotion"];
    if (todayCounterKeys.includes(event)) {
      q.todayCounters[event] = (q.todayCounters[event] || 0) + 1;
    }

    // 更新全局计数器（成就用）
    const globalCounterKeys = ["courseStudy","goodStudy","duelPlay","duelWin","duel4v4Play","duel4v4Win","explore","brewPotion"];
    if (globalCounterKeys.includes(event)) {
      q.counters[event] = (q.counters[event] || 0) + 1;
    }

    // 刷新日常完成状态
    this._refreshDailyDoneStates(q);

    // 检查是否有日常全部完成（记录完成天数）
    const allDone = q.daily.quests.every(dq => dq.done);
    if (allDone && q.daily.quests.length > 0) {
      const key = `dailyAllDone_${q.daily.date}`;
      if (!q._dailyDoneFlags) q._dailyDoneFlags = {};
      if (!q._dailyDoneFlags[key]) {
        q._dailyDoneFlags[key] = true;
        q.counters.dailyDaysDone = (q.counters.dailyDaysDone || 0) + 1;
      }
    }

    // 检查好感度触发支线
    if (event === "affinityChange") {
      const newSide = _checkAffinityTriggers(q);
      newSide.forEach(sq => {
        window.questEngine?.onQuestUpdate?.("sideTriggered", sq);
        addLog(`📜 新任务：${sq.npcMessage}`);
      });
    }

    // 检查支线收集条件
    if (["bagChanged", "duelPlay", "duelWin", "duel4v4Play", "brewPotion"].includes(event)) {
      SIDE_QUESTS.forEach(sq => {
        const state = q.side[sq.id];
        if (!state?.triggered || state.done) return;
        if (_checkSideDone(sq)) {
          state.done = true;
          window.questEngine?.onQuestUpdate?.("sideDone", sq);
        }
      });
    }

    // 检查成就
    const newAch = _checkAchievements(q);
    newAch.forEach(ach => {
      window.questEngine?.onQuestUpdate?.("achDone", ach);
      addLog(`🏅 成就解锁：${ach.title}`);
    });

    setSave(data);

    // 通知UI刷新
    window.questEngine?.onQuestUpdate?.("progress", null);
  },

  // ─── 领取奖励 ───────────────────────────────────────────

  claimDaily(questId) {
    const data = getSave();
    _initQuestData(data);
    const q = data.quests;

    const dqState = q.daily.quests.find(dq => dq.id === questId);
    if (!dqState?.done || dqState.claimed) return null;

    const def = DAILY_QUEST_POOL.find(d => d.id === questId);
    if (!def) return null;

    dqState.claimed = true;

    // 检查今日全部领取完，记录 dailyDaysDone
    const allClaimed = q.daily.quests.every(dq => dq.claimed);
    if (allClaimed) {
      const key = `dailyClaimed_${q.daily.date}`;
      if (!q._dailyDoneFlags) q._dailyDoneFlags = {};
      if (!q._dailyDoneFlags[key]) {
        q._dailyDoneFlags[key] = true;
        q.daily.doneCount = (q.daily.doneCount || 0) + 1;
        q.counters.dailyDaysDone = q.daily.doneCount;
      }
    }

    setSave(data);
    addLog(`✅ 完成日常任务「${def.title}」`);

    const rewardLines = _grantRewards(def.rewards);
    this._recheck();
    return { def, rewardLines };
  },

  claimSide(questId) {
    const data = getSave();
    _initQuestData(data);
    const q = data.quests;

    const state = q.side[questId];
    if (!state?.done || state.claimed) return null;

    const def = SIDE_QUESTS.find(sq => sq.id === questId);
    if (!def) return null;

    state.claimed = true;
    q.counters.sideQuestDone = (q.counters.sideQuestDone || 0) + 1;

    setSave(data);
    addLog(`✅ 完成支线任务「${def.title}」`);

    const rewardLines = _grantRewards(def.rewards);
    this._recheck();
    return { def, rewardLines };
  },

  claimAchievement(achId) {
    const data = getSave();
    _initQuestData(data);
    const q = data.quests;

    const state = q.achievements[achId];
    if (!state?.done || state.claimed) return null;

    const def = ACHIEVEMENTS.find(a => a.id === achId);
    if (!def) return null;

    state.claimed = true;
    setSave(data);
    addLog(`🏅 领取成就奖励「${def.title}」`);

    const rewardLines = _grantRewards(def.rewards);
    this._recheck();
    return { def, rewardLines };
  },

  // ─── 查询接口 ───────────────────────────────────────────

  getTodayDailies() {
    const q = _getQuests();
    _refreshDailyIfNeeded(q);
    _saveQuests(q);

    return q.daily.quests.map(dqState => {
      const def = DAILY_QUEST_POOL.find(d => d.id === dqState.id);
      if (!def) return null;

      // 计算进度文字
      let progressText = "";
      const cond = def.condition;
      if (cond.type === "compound") {
        progressText = cond.conditions.map(sub => {
          const cur = q.todayCounters[sub.type] || 0;
          return `${sub.type}: ${Math.min(cur, sub.count)}/${sub.count}`;
        }).join(" · ");
      } else {
        const cur = q.todayCounters[cond.type] || 0;
        if (cond.count > 1) progressText = `${Math.min(cur, cond.count)} / ${cond.count}`;
      }

      return { ...def, state: dqState, progressText };
    }).filter(Boolean);
  },

  getActiveSideQuests() {
    const q = _getQuests();
    return SIDE_QUESTS
      .filter(sq => q.side[sq.id]?.triggered)
      .map(sq => ({ ...sq, state: q.side[sq.id] }));
  },

  getAchievements() {
    const q = _getQuests();
    return ACHIEVEMENTS.map(ach => ({
      ...ach,
      state: q.achievements[ach.id] || { done: false, claimed: false },
      progress: this._getAchProgress(ach, q),
    }));
  },

  _getAchProgress(ach, q) {
    const cond = ach.condition;
    switch (cond.type) {
      case "courseStudy":   return { cur: q.counters.courseStudy  || 0, max: cond.count };
      case "duelPlay":      return { cur: q.counters.duelPlay     || 0, max: cond.count };
      case "duelWin":       return { cur: q.counters.duelWin      || 0, max: cond.count };
      case "duel4v4Play":   return { cur: q.counters.duel4v4Play  || 0, max: cond.count };
      case "explore":       return { cur: q.counters.explore      || 0, max: cond.count };
      case "brewPotion":    return { cur: q.counters.brewPotion   || 0, max: cond.count };
      case "sideQuestDone": return { cur: q.counters.sideQuestDone|| 0, max: cond.count };
      case "dailyDaysDone": return { cur: q.counters.dailyDaysDone|| 0, max: cond.count };
      default: return null;
    }
  },

  getSideQuestsByChar(characterKey) {
    const q   = _getQuests();
    const tier = window.affinitySystem?.getTier?.(characterKey) ?? 0;
    const completedIds = Object.entries(q.side)
      .filter(([, s]) => s.claimed)
      .map(([id]) => id);

    const { getNpcPublishedQuests } = window.questData || {};
    return (getNpcPublishedQuests?.(characterKey, tier, completedIds) || [])
      .map(sq => ({ ...sq, state: q.side[sq.id] || { triggered: false } }));
  },

  /** 检查并触发支线任务（供好感度系统在升级时调用） */
  checkSideQuestTriggers() {
    const data = getSave();
    _initQuestData(data);
    const q = data.quests;
    const newSide = _checkAffinityTriggers(q);
    if (newSide.length) {
      _saveQuests(q);
      newSide.forEach(sq => {
        addLog(`📜 ${sq.npcMessage}`);
        window.questEngine?.onQuestUpdate?.("sideTriggered", sq);
      });
    }
  },

  /** 重新检查成就（领取奖励后调用） */
  _recheck() {
    const data = getSave();
    _initQuestData(data);
    const q = data.quests;
    _checkAchievements(q);
    setSave(data);
  },

  /** UI层绑定的回调，任务状态变化时调用 */
  onQuestUpdate: null,
};

// ── 接入现有系统的钩子 ────────────────────────────────────
// 在现有系统的关键操作后插入 notify 调用

// 课程完成后通知
const _origAffinityOnClassResult = window.affinitySystem?.onClassResult;
window._questHook_courseStudy = function(isGoodStudy = false) {
  QuestEngine.notify("courseStudy");
  if (isGoodStudy) QuestEngine.notify("goodStudy");
};

// 好感度变化通知（升级时触发支线检查）
window._affinityOnTierUp = function(key, oldTier, newTier) {
  QuestEngine.notify("affinityChange", { key, oldTier, newTier });
  QuestEngine.checkSideQuestTriggers();
};

// 背包材料变化通知
const _origAddMaterial = window.addMaterialToBag;
window.addMaterialToBag = function(name, count = 1) {
  _origAddMaterial?.(name, count);
  // 延迟通知，确保存档已写入
  setTimeout(() => QuestEngine.notify("bagChanged", { name, count }), 100);
};

// 探索通知
window._questHook_explore = function() {
  QuestEngine.notify("explore");
};

// 魔药通知
window._questHook_brew = function() {
  QuestEngine.notify("brewPotion");
};

// 决斗通知
window._questHook_duelEnd = function(won, is4v4) {
  QuestEngine.notify(is4v4 ? "duel4v4Play" : "duelPlay");
  if (won) QuestEngine.notify(is4v4 ? "duel4v4Win" : "duelWin");
};

// 全局挂载
window.questEngine = QuestEngine;

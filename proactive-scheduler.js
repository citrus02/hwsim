/**
 * proactive-scheduler.js
 * 角色主动事件调度器
 *
 * 每天在 nextDay() 中调用一次，遍历所有角色的 proactive 事件定义，
 * 根据条件筛选候选池并掷骰决定今日是否有角色主动来找玩家。
 *
 * 核心原则：有原因、有节制、不可预测
 */

import { getSave, setSave, addLog, getYearGrade } from './save/save-system.js';
import { ALL_CHARACTERS } from './characters/registry.js';

// ── 常量 ──────────────────────────────────────────────────
const MAX_TODAY = 1; // 每天最多1个主动事件
const MAX_ACTIVE_PROACTIVE = 1;
const DEFAULT_PROACTIVE_TTL_DAYS = 3;
const DEFAULT_CHARACTER_COOLDOWN_DAYS = 5;
const MIN_PROACTIVE_RELATION_VALUE = 20;

// ── 工具函数 ──────────────────────────────────────────────

/** 将日期字符串解析为可比较的天数（简化：直接用日期字符串差） */
function daysBetween(dateStr1, dateStr2) {
  const d1 = new Date(dateStr1);
  const d2 = new Date(dateStr2);
  if (isNaN(d1.getTime()) || isNaN(d2.getTime())) return 999;
  return Math.floor(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24));
}

/** Fisher-Yates 洗牌 */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function sanitizeProactiveAiSeed(seed) {
  if (!seed || typeof seed !== 'string') return '';
  const metaPatterns = [
    '体现',
    '表现',
    '写成',
    '写出',
    '重点是',
    '不要',
    '玩家',
    '人设',
    '气质',
    '真实',
    '可读性',
    '沉浸',
  ];
  return metaPatterns.some(pattern => seed.includes(pattern)) ? '' : seed;
}

// ── 条件筛选 ──────────────────────────────────────────────

/** 检查好感阶段门槛 */
function getStoredAffinity(data, characterKey) {
  const affinity = data.affinity?.[characterKey];
  return affinity && typeof affinity === 'object' ? affinity : null;
}

function getStoredAffinityTier(data, characterKey) {
  const affinity = getStoredAffinity(data, characterKey);
  if (Number.isFinite(affinity?.tier)) return affinity.tier;
  if (!Number.isFinite(affinity?.value)) return null;
  const tier = window.affinitySystem?.getTierByValue?.(affinity.value);
  return Number.isFinite(tier?.tier) ? tier.tier : null;
}

function hasRealAcquaintance(data, characterKey) {
  if (!characterKey) return false;
  if (data.knownCharacters?.includes(characterKey)) return true;

  const affinity = getStoredAffinity(data, characterKey);
  if (!affinity) return false;
  if (Number.isFinite(affinity.value) && Math.abs(affinity.value) >= MIN_PROACTIVE_RELATION_VALUE) return true;

  const tier = getStoredAffinityTier(data, characterKey);
  return Number.isFinite(tier) && tier >= 2;
}

function checkAcquaintance(data, characterKey, req = {}) {
  if (req.allowStranger === true) return true;
  return hasRealAcquaintance(data, characterKey);
}

function checkMinTier(data, characterKey, minTier) {
  if (!minTier) return true;
  const tier = getStoredAffinityTier(data, characterKey);
  if (tier == null) return false;
  return tier >= minTier;
}

/** 检查 world.memory 中是否有带指定 tag 的条目 */
function checkMemoryTag(data, memoryTag) {
  if (!memoryTag) return true; // 无 tag 要求则通过
  const memory = data.world?.memory || [];
  return memory.some(item => item.tag === memoryTag);
}

/** 检查冷却期 */
function checkCooldown(data, eventId, cooldownDays) {
  if (!cooldownDays) return true;
  const cooldowns = data.world?.proactiveCooldown || {};
  const lastDate = cooldowns[eventId];
  if (!lastDate) return true;
  const today = data.time?.currentDate || '';
  return daysBetween(lastDate, today) >= cooldownDays;
}

function checkCharacterCooldown(data, characterKey, cooldownDays = DEFAULT_CHARACTER_COOLDOWN_DAYS) {
  if (!cooldownDays) return true;
  const cooldowns = data.world?.proactiveCharacterCooldown || {};
  const lastDate = cooldowns[characterKey];
  if (!lastDate) return true;
  const today = data.time?.currentDate || '';
  return daysBetween(lastDate, today) >= cooldownDays;
}

/** 检查一次性事件是否已触发 */
function checkOneTime(characterKey, eventId, oneTime) {
  if (!oneTime) return true;
  return !window.affinitySystem?.hasFlag?.(characterKey, `proactive_${eventId}`);
}

/** 检查主动来访事件是否属于当前年级 */
function checkGradeRange(ev, grade = getYearGrade()) {
  if (!ev) return true;
  const req = ev.require || {};
  const grades = ev.grades || req.grades;
  const minGrade = ev.minGrade ?? req.minGrade;
  const maxGrade = ev.maxGrade ?? req.maxGrade;
  if (Array.isArray(grades) && !grades.includes(grade)) return false;
  if (minGrade != null && grade < minGrade) return false;
  if (maxGrade != null && grade > maxGrade) return false;
  return true;
}

function isProactiveExpired(hook, today) {
  if (!hook?.date) return false;
  const ttlDays = hook.ttlDays ?? DEFAULT_PROACTIVE_TTL_DAYS;
  return daysBetween(hook.date, today) > ttlDays;
}

function isActiveProactiveHook(hook, today) {
  return hook && !hook.consumed && hook.type === 'proactive' && !isProactiveExpired(hook, today);
}

function getActiveProactiveHooksFromData(data) {
  const hooks = data.world?.hooks;
  if (!Array.isArray(hooks)) return [];
  const today = data.time?.currentDate || '';
  return hooks.filter(hook => isActiveProactiveHook(hook, today));
}

function expireStaleProactiveHooks(data) {
  const hooks = data.world?.hooks;
  if (!Array.isArray(hooks)) return false;
  const today = data.time?.currentDate || '';
  let changed = false;
  for (const hook of hooks) {
    if (hook?.type !== 'proactive' || hook.consumed) continue;
    if (!isProactiveExpired(hook, today)) continue;
    hook.consumed = true;
    hook.expired = true;
    hook.consumedAt = `${today} ${data.time?.nowTime || '上午'}`;
    changed = true;
  }
  return changed;
}

// ── 投放逻辑 ──────────────────────────────────────────────

/** 投放一个主动事件 */
function deployProactiveEvent(data, character, ev) {
  const today = data.time?.currentDate || '';
  if (!data.world || typeof data.world !== 'object') data.world = {};
  if (getActiveProactiveHooksFromData(data).length >= MAX_ACTIVE_PROACTIVE) return false;

  // 1. 创建 proactive 类型的钩子
  const hookData = {
    type: 'proactive',
    characterKey: character.key,
    characterName: character.name,
    eventId: ev.id,
    title: `${character.name}似乎在找你`,
    sourceText: ev.opening,
    choices: ev.choices,
    aiSeed: sanitizeProactiveAiSeed(ev.aiSeed),
    persona: character.persona || null,
  };

  // 使用 npc-events 的 createWorldHook
  if (window.npcEvents?.createWorldHook) {
    // 需要直接调用内部函数，通过 world.hooks 操作
  }

  // 直接操作 hooks（因为 createWorldHook 在 npc-events 内部）
  const world = data.world;
  if (!Array.isArray(world.hooks)) world.hooks = [];

  // 去重：同 eventId 不重复
  const duplicate = world.hooks.some(h =>
    !h.consumed &&
    h.type === 'proactive' &&
    h.eventId === ev.id
  );
  if (duplicate) return false;

  const date = data.time?.currentDate || today;
  const time = data.time?.nowTime || '上午';
  world.hooks.push({
    id: `${date}-${time}-proactive-${ev.id}-${Math.random().toString(36).slice(2, 8)}`,
    date,
    time,
    consumed: false,
    ttlDays: ev.require?.ttlDays ?? DEFAULT_PROACTIVE_TTL_DAYS,
    ...hookData,
  });
  world.hooks = world.hooks.slice(-40);

  // 2. 记录冷却
  if (!world.proactiveCooldown) world.proactiveCooldown = {};
  world.proactiveCooldown[ev.id] = today;
  if (!world.proactiveCharacterCooldown) world.proactiveCharacterCooldown = {};
  world.proactiveCharacterCooldown[character.key] = today;

  // 3. 如果是一次性事件，标记 flag
  if (ev.require?.oneTime) {
    window.affinitySystem?.setFlag?.(character.key, `proactive_${ev.id}`);
  }

  // 4. 写入 memory
  if (window.npcEvents?.rememberWorldEvent) {
    // 通过 addLog + 直接操作 world.memory
  }
  if (!Array.isArray(world.memory)) world.memory = [];
  world.memory.push({
    date: today,
    time: data.time?.nowTime || '上午',
    type: 'proactive',
    key: character.key,
    text: `${character.name}主动来找你了。`,
    tag: `proactive_${ev.id}`,
  });
  world.memory = world.memory.slice(-80);

  // 5. 保存
  setSave(data);

  // 6. 日志 + 城堡动向提示
  addLog(`🔔 ${character.name}好像在找你。`, 'story');

  return true;
}

// ── 主调度函数 ────────────────────────────────────────────

export function runProactiveScheduler() {
  const data = getSave();
  const today = data.time?.currentDate || '';
  if (!today) return;
  const expiredAny = expireStaleProactiveHooks(data);
  if (expiredAny) setSave(data);
  const grade = getYearGrade();

  const candidates = [];

  for (const character of ALL_CHARACTERS) {
    if (!character.proactive || !character.proactive.length) continue;

    for (const ev of character.proactive) {
      const req = ev.require || {};

      // 逐条硬性筛选
      if (!checkAcquaintance(data, character.key, req)) continue;
      if (!checkMinTier(data, character.key, req.minTier)) continue;
      if (!checkMemoryTag(data, req.memoryTag)) continue;
      if (!checkCooldown(data, ev.id, req.cooldownDays)) continue;
      if (!checkCharacterCooldown(data, character.key, req.characterCooldownDays)) continue;
      if (!checkOneTime(character.key, ev.id, req.oneTime)) continue;
      if (!checkGradeRange(ev, grade)) continue;

      // 通过硬性条件，进候选池
      candidates.push({ character, ev, chance: req.chance || 0.2 });
    }
  }

  if (candidates.length === 0) return; // 今天没人来，很正常
  if (getActiveProactiveHooksFromData(data).length >= MAX_ACTIVE_PROACTIVE) return;

  // 节制控制
  let triggered = 0;
  const shuffled = shuffle(candidates);

  for (const cand of shuffled) {
    if (triggered >= MAX_TODAY) break;
    if (Math.random() < cand.chance) {
      const freshData = getSave(); // 重新读取最新数据
      const deployed = deployProactiveEvent(freshData, cand.character, cand.ev);
      if (deployed) {
        triggered++;
      }
    }
  }
}

// ── 获取当前活跃的主动事件钩子 ────────────────────────────

export function getProactiveHooks() {
  const data = getSave();
  return getActiveProactiveHooksFromData(data).slice(0, MAX_ACTIVE_PROACTIVE);
}

// ── 全局挂载 ──────────────────────────────────────────────
window.proactiveScheduler = { run: runProactiveScheduler, getProactiveHooks };

/**
 * affinity-system.js
 * 好感度系统核心引擎
 *
 * 存档结构：
 *   data.affinity[characterKey] = {
 *     value: 0~100,
 *     tier: 1~5,
 *     flags: { [eventId]: true }   // 已触发的一次性事件
 *   }
 *
 * 对外接口：
 *   addAffinity(key, delta, source)   增减好感度
 *   getAffinity(key)                  读取好感度对象
 *   getTier(key)                      读取当前阶段
 *   hasFlag(key, eventId)             检查事件是否已触发
 *   setFlag(key, eventId)             标记事件已触发
 *   getAllAffinity()                   获取全部好感度数据
 */

import { loadSave, writeSave } from './course/save-utils.js';

// ── 阶段定义 ────────────────────────────────────────────────
export const TIERS = [
  { tier: 1, min: 0,  max: 19,  label: "陌生人" },
  { tier: 2, min: 20, max: 39,  label: "认识了" },
  { tier: 3, min: 40, max: 59,  label: "被记住了" },
  { tier: 4, min: 60, max: 79,  label: "有点特别" },
  { tier: 5, min: 80, max: 100, label: "真正的关系" },
];

export function getTierByValue(value) {
  return TIERS.findLast(t => value >= t.min) || TIERS[0];
}

// ── 存档读写 ────────────────────────────────────────────────
function _load() {
  const data = loadSave();
  if (!data.affinity) data.affinity = {};
  return data;
}

function _getChar(data, key) {
  if (!data.affinity[key]) {
    // 邓布利多初始 Tier3（40分）
    const initValue = key === 'albusDumbledore' ? 40 : 0;
    data.affinity[key] = { value: initValue, tier: key === 'albusDumbledore' ? 3 : 1, flags: {} };
  }
  return data.affinity[key];
}

// ── 核心接口 ────────────────────────────────────────────────

/**
 * 增减好感度
 * @param {string} key        人物键名
 * @param {number} delta      变化量（正负均可）
 * @param {string} [source]   来源说明（调试用）
 * @returns {{ tierUp: boolean, oldTier: number, newTier: number, newValue: number }}
 */
export function addAffinity(key, delta, source = '') {
  const data = _load();
  const char = _getChar(data, key);

  const oldValue = char.value;
  const oldTier  = char.tier;

  char.value = Math.max(0, Math.min(100, char.value + delta));
  const newTierObj = getTierByValue(char.value);
  char.tier = newTierObj.tier;

  writeSave(data);

  const tierUp = char.tier > oldTier;
  if (tierUp) {
    window._affinityOnTierUp?.(key, oldTier, char.tier, char.value);
  }
  return { tierUp, oldTier, newTier: char.tier, newValue: char.value };
}

/**
 * 读取好感度对象
 */
export function getAffinity(key) {
  const data = _load();
  return _getChar(data, key);
}

/**
 * 读取当前阶段编号
 */
export function getTier(key) {
  return getAffinity(key).tier;
}

/**
 * 检查一次性事件是否已触发
 */
export function hasFlag(key, eventId) {
  return !!getAffinity(key).flags?.[eventId];
}

/**
 * 标记一次性事件已触发
 */
export function setFlag(key, eventId) {
  const data = _load();
  const char = _getChar(data, key);
  if (!char.flags) char.flags = {};
  char.flags[eventId] = true;
  writeSave(data);
}

/**
 * 获取全部好感度数据（用于 UI 展示）
 */
export function getAllAffinity() {
  const data = _load();
  return data.affinity || {};
}

// ── 课堂评级 → 好感度（主要触发点）──────────────────────────

// 麻瓜研究分科 → 教授键名映射
export const SUBJECT_TO_CHARACTER = {
  math:       'augustusFenwick',
  physics:    'serafinaMoody',
  chemistry:  'primroseSprout',
  biology:    'tavishMacLaren',
  history:    'herbertBinns',
  civics:     'constanceShacklebolt',
  geography:  'felixWeasley',
  literature: 'elizaLovegood',
  english:    'mirandaPercival',
};

// 原著科目 → 教授键名映射
export const COURSE_TO_CHARACTER = {
  '变形术':     'minervaMcGonagall',
  '魔咒学':     'filiusFlitwick',
  '魔药学':     'severusSnape',
  '黑魔法防御术': 'quirrell',
  '草药学':     'pomonaSprout',
  '魔法史':     'cuthbertBinns',
  '天文学':     null,
  '飞行课':     'rolandaHooch',
  '占卜学':     'sybillTrelawney',
};

// 评级 → 好感度变化
const RATING_DELTA = { O: 6, E: 3, A: 1, P: 0, D: -2, T: -2 };

/**
 * 课堂结算后调用
 * @param {string} subjectKey  分科键（math/physics 等）或科目名
 * @param {string} rating      O/E/A/P/D/T
 * @param {boolean} isMuggle   是否为麻瓜研究分科
 */
export function onClassResult(subjectKey, rating, isMuggle = true) {
  const charKey = isMuggle
    ? SUBJECT_TO_CHARACTER[subjectKey]
    : COURSE_TO_CHARACTER[subjectKey];
  if (!charKey) return null;
  const delta = RATING_DELTA[rating] ?? 0;
  if (delta === 0) return null;
  return addAffinity(charKey, delta, `课堂:${subjectKey}:${rating}`);
}

/**
 * 完成某分科全部课时（一次性 +10）
 */
export function onSubjectCompleted(subjectKey) {
  const charKey = SUBJECT_TO_CHARACTER[subjectKey];
  if (!charKey) return;
  if (hasFlag(charKey, `completed_${subjectKey}`)) return;
  setFlag(charKey, `completed_${subjectKey}`);
  addAffinity(charKey, 10, `完成全部课时:${subjectKey}`);
}

/**
 * 魔药熬制结果
 * @param {boolean} success  是否成功
 * @param {boolean} mastered 是否达成精通
 */
export function onBrewResult(success, mastered = false) {
  if (success) addAffinity('severusSnape', mastered ? 5 : 1, '熬制魔药');
}

// 全局挂载
window.affinitySystem = {
  addAffinity, getAffinity, getTier, hasFlag, setFlag,
  getAllAffinity, onClassResult, onSubjectCompleted, onBrewResult,
  SUBJECT_TO_CHARACTER, COURSE_TO_CHARACTER, TIERS, getTierByValue,
};

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
  { tier: -2, min: -100, max: -40, label: "敌对" },
  { tier: -1, min: -39,  max: -1,  label: "厌恶" },
  { tier: 1,  min: 0,    max: 19,  label: "陌生人" },
  { tier: 2,  min: 20,   max: 39,  label: "认识了" },
  { tier: 3,  min: 40,   max: 59,  label: "被记住了" },
  { tier: 4,  min: 60,   max: 79,  label: "有点特别" },
  { tier: 5,  min: 80,   max: 100, label: "真正的关系" },
];

// ── 好感度阶段奖励配置 ──────────────────────────────────────
const TIER_REWARDS = [
  {
    character: 'severusSnape',
    minTier: 5,
    reward: {
      type: 'item',
      name: '混血王子的旧书',
      message: '📕 斯内普教授对你的能力表示认可，将他珍藏的魔药课本送给了你——《混血王子的旧书》！'
    }
  }
];

export function getTierByValue(value) {
  return TIERS.findLast(t => value >= t.min) || TIERS[0];
}

// ── 存档读写 ────────────────────────────────────────────────
function _load() {
  const data = loadSave();
  if (!data.affinity) data.affinity = {};
  if (!data.knownCharacters) data.knownCharacters = [];
  return data;
}

function _getChar(data, key) {
  if (!data.affinity[key]) {
    const initValue = key === 'albusDumbledore' ? 40 : 0;
    data.affinity[key] = { value: initValue, tier: key === 'albusDumbledore' ? 3 : 1, flags: {} };
  }
  return data.affinity[key];
}

// ── 认识追踪 ────────────────────────────────────────────────

export function markCharacterKnown(key) {
  if (!key) return;
  const data = _load();
  if (!data.knownCharacters) data.knownCharacters = [];
  if (!data.knownCharacters.includes(key)) {
    data.knownCharacters.push(key);
    writeSave(data);
  }
}

export function isCharacterKnown(key) {
  if (!key) return false;
  const data = _load();
  if (data.knownCharacters?.includes(key)) return true;
  if (data.affinity?.[key]) return true;
  return false;
}

export function getKnownCharacters() {
  const data = _load();
  return data.knownCharacters || [];
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

  char.value = Math.max(-100, Math.min(100, char.value + delta));
  const newTierObj = getTierByValue(char.value);
  char.tier = newTierObj.tier;

  if (!data.knownCharacters) data.knownCharacters = [];
  if (!data.knownCharacters.includes(key)) {
    data.knownCharacters.push(key);
  }

  writeSave(data);

  const tierUp = char.tier > oldTier;
  if (tierUp) {
    window._affinityOnTierUp?.(key, oldTier, char.tier, char.value);

    for (const config of TIER_REWARDS) {
      if (config.character !== key) continue;
      if (char.tier < config.minTier) continue;
      
      const rewardFlag = `tier_reward_${config.minTier}`;
      if (char.flags?.[rewardFlag]) continue;

      const data = _load();
      const charData = _getChar(data, key);
      if (!charData.flags) charData.flags = {};
      charData.flags[rewardFlag] = true;

      if (config.reward.type === 'item') {
        const items = data.bag?.item || [];
        if (!items.some(item => item.name === config.reward.name)) {
          if (!data.bag) data.bag = { material: [], potion: [], item: [] };
          data.bag.item.push({ name: config.reward.name });
        }
        window.doStudyLog?.(config.reward.message);
      }

      writeSave(data);
    }
  }
  const result = { tierUp, oldTier, newTier: char.tier, newValue: char.value };
  window.npcEvents?.recordAffinityEcho?.(key, delta, source, result);
  return result;
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
  '黑魔法防御术': 'remusLupin',
  '草药学':     'pomonaSprout',
  '魔法史':     'herbertBinns',
  '天文学':     'auroraSinistra',
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
 * 完成某门霍格沃茨必修/选修课全部课时（一次性 +10）
 * @param {string} courseChineseName 与 COURSE_TO_CHARACTER 键一致，如「变形术」
 */
export function onCourseSubjectCompleted(courseChineseName) {
  const charKey = COURSE_TO_CHARACTER[courseChineseName];
  if (!charKey) return;
  const flagKey = `completed_course_${courseChineseName}`;
  if (hasFlag(charKey, flagKey)) return;
  setFlag(charKey, flagKey);
  addAffinity(charKey, 10, `完成全部课时:${courseChineseName}`);
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
  getAllAffinity, onClassResult, onSubjectCompleted, onCourseSubjectCompleted, onBrewResult,
  SUBJECT_TO_CHARACTER, COURSE_TO_CHARACTER, TIERS, getTierByValue,
  markCharacterKnown, isCharacterKnown, getKnownCharacters,
};

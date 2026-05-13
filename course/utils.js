/**
 * course/utils.js
 * 课程系统公共工具模块
 * 统一管理学科键名映射、数据获取等通用功能
 */

// ── 学科键名常量 ─────────────────────────────────────────────

export const SUBJECT_WIN_KEY = {
  math: "subject_math",
  physics: "subject_physics",
  chemistry: "subject_chemistry",
  biology: "subject_biology",
  history: "subject_history",
  civics: "subject_civics",
  geography: "subject_geography",
  literature: "subject_literature",
  latin: "subject_latin",
  transfiguration: "subject_transfiguration",
  charms: "subject_charms",
  magicHistory: "subject_magicHistory",
  defense: "subject_defense",
  herbology: "subject_herbology",
  astronomy: "subject_astronomy",
  potions: "subject_potions",
  flight: "subject_flight",
  muggleStudies: "subject_muggleStudies",
  careOfMagicalCreatures: "subject_careOfMagicalCreatures",
  apparition: "subject_apparition",
  alchemy: "subject_alchemy",
  divination: "subject_divination",
  arithmancy: "subject_arithmancy",
  ancientRunes: "subject_ancientRunes",
};

export const SUBJECT_NAME_KEY = {
  "变形术": "transfiguration",
  "魔咒学": "charms",
  "魔法史": "magicHistory",
  "黑魔法防御术": "defense",
  "草药学": "herbology",
  "天文学": "astronomy",
  "魔药学": "potions",
  "飞行课": "flight",
  "麻瓜研究": "muggleStudies",
  "保护神奇动物": "careOfMagicalCreatures",
  "幻影移形": "apparition",
  "炼金术": "alchemy",
  "占卜学": "divination",
  "算术占卜": "arithmancy",
  "古代魔文": "ancientRunes",
};

export const MUGGLE_SUBJECTS = [
  "math", "physics", "chemistry", "biology", 
  "history", "civics", "geography", "literature", "latin"
];

export const HOGWARTS_SUBJECT_KEYS = new Set(
  Object.keys(SUBJECT_WIN_KEY).filter(k => !MUGGLE_SUBJECTS.includes(k))
);

// ── 学科数据缓存 ─────────────────────────────────────────────

const subjectDataCache = new Map();

export function getSubjectData(subjectKey) {
  if (!subjectKey) return null;
  
  if (subjectDataCache.has(subjectKey)) {
    return subjectDataCache.get(subjectKey);
  }
  
  const winKey = SUBJECT_WIN_KEY[subjectKey];
  if (!winKey) return null;
  
  const data = window[winKey];
  if (data) {
    subjectDataCache.set(subjectKey, data);
  }
  
  return data;
}

export function clearSubjectDataCache() {
  subjectDataCache.clear();
}

// ── 课时工具函数 ─────────────────────────────────────────────

export function getAllLessons(syllabus) {
  const out = [];
  (syllabus || []).forEach(ch => (ch.lessons || []).forEach(l => out.push(l)));
  return out;
}

export function getItemSubjectKey(item) {
  return item?.muggleSubjectKey || item?.hogwartsSubjectKey || SUBJECT_NAME_KEY[item?.name] || null;
}

// ── 评分工具函数 ─────────────────────────────────────────────

export function scoreToRating(score) {
  if (score >= 6) return 'O';
  if (score >= 4) return 'E';
  if (score >= 2) return 'A';
  if (score >= 0) return 'P';
  if (score >= -2) return 'D';
  return 'T';
}

export const HOUSE_POINTS_MAP = {
  O: 10,
  E: 5,
  A: 2,
  P: 0,
  D: -5,
  T: -10
};

// ── 全局挂载（保持向后兼容）──────────────────────────────────

window.CourseUtils = {
  SUBJECT_WIN_KEY,
  SUBJECT_NAME_KEY,
  MUGGLE_SUBJECTS,
  HOGWARTS_SUBJECT_KEYS,
  getSubjectData,
  clearSubjectDataCache,
  getAllLessons,
  getItemSubjectKey,
  scoreToRating,
  HOUSE_POINTS_MAP
};

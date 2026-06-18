// save-system.js — 存档核心读写 + 数据结构 + 日志 + 时间轴

import { REMOVED_CHARACTERS } from '../affinity/affinity-data.js';
import { addLog, renderLog } from './save-log.js';
import { renderTimeline } from './save-timeline.js';
import { getAllSlots, saveAllSlots } from './save-slots.js';

export const SAVE_KEY = "hogwarts";
export const SAVE_SCHEMA_VERSION = 2;
export const SAVE_FILE_MAGIC = "HOGWARTS_SIM_SAVE";
const SAVE_BACKUP_KEY = `${SAVE_KEY}_bak`;
const SLOT_COUNT = 10;

const allCourseList = [
  "变形术","魔咒学","魔药学","黑魔法防御术","草药学","魔法史","天文学","飞行课",
  "算术占卜","古代魔文","占卜学","保护神奇动物","麻瓜研究","幻影移形","炼金术"
];

function isPlainObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function deepClone(value) {
  if (value === undefined) return undefined;
  return JSON.parse(JSON.stringify(value));
}

function mergeMissing(target, defaults) {
  const out = isPlainObject(target) ? target : {};
  Object.entries(defaults).forEach(([key, value]) => {
    if (out[key] === undefined) {
      out[key] = deepClone(value);
    } else if (isPlainObject(out[key]) && isPlainObject(value)) {
      out[key] = mergeMissing(out[key], value);
    }
  });
  return out;
}

function stableStringify(value) {
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(',')}]`;
  return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(',')}}`;
}

function checksum(text) {
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;
  for (let i = 0; i < text.length; i++) {
    const ch = text.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return `${(h2 >>> 0).toString(16).padStart(8, '0')}${(h1 >>> 0).toString(16).padStart(8, '0')}`;
}

function getCurrentGameVersion() {
  try { return localStorage.getItem('hogwarts_version') || ''; }
  catch (_) { return ''; }
}

function getCourseDefaults() {
  const course = {};
  allCourseList.forEach(c => course[c] = 0);
  course.absenceStats = { total: 0, bySubject: {}, records: [] };
  course.attendance = {};
  course.muggleExams = { gcse: {}, alevel: {} };
  course.muggleHumanities = null;
  course.aLevelSubjects = [];
  course.yearGrade = 1;
  return course;
}

export function getDefaultSave() {
  const course = getCourseDefaults();
  return {
    _saveMeta: {
      schemaVersion: SAVE_SCHEMA_VERSION,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    year: 1991, month: 9, day: 2, actions: 1,
    log: [], timeline: [],
    player: { name: "无名巫师", era: "", house: "", blood: "", wand: "", wandAccepted: true, galleons: 10 },
    bag: { material: [], potion: [], item: [], wizardCard: [] },
    economy: { exploreMilestones: {}, interestPaid: {}, houseCupPaid: {} },
    course,
    potion: {},
    world: { dateBriefed: "", memory: [], rumors: [], locationStatus: {}, hooks: [], daily: {}, proactiveCooldown: {}, npcMemory: {} },
    time: { year: 1991, month: 9, day: 2, dailyActionLeft: 1, nowTime: "夜晚", currentDate: "1991-09-02" }
  };
}

export function createNewSave(opts = {}) {
  const data = getDefaultSave();
  data.player = {
    ...(data.player || {}),
    name: opts.name || data.player?.name || "Student",
    blood: opts.blood || data.player?.blood || "",
    house: opts.house || data.player?.house || "",
    wand: opts.wand || data.player?.wand || "",
    wandAccepted: opts.wandAccepted ?? data.player?.wandAccepted ?? true
  };
  data.log = Array.isArray(opts.log) ? opts.log : (data.log || []);
  return migrateSaveData(data);
}

export function migrateSaveData(save) {
  if (isPlainObject(save) && save.magic === SAVE_FILE_MAGIC && save.payload) {
    save = save.payload;
  }
  if (!save || typeof save !== 'object' || Array.isArray(save)) save = getDefaultSave();
  save = mergeMissing(save, getDefaultSave());
  save._saveMeta = {
    ...(save._saveMeta || {}),
    schemaVersion: SAVE_SCHEMA_VERSION,
    updatedAt: new Date().toISOString()
  };

  if (!save.knownCharacters) save.knownCharacters = [];
  if (!save.knownSpells) save.knownSpells = [];
  if (!save.affinity) save.affinity = {};
  if (!save.housePoints) save.housePoints = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
  if (!save.duelRecord) save.duelRecord = { wins: 0, losses: 0 };
  if (!save.quests) save.quests = {};
  if (!save.spellList) save.spellList = [];
  if (!save.spellProficiency) save.spellProficiency = {};
  if (!save.darkMagicRecord) save.darkMagicRecord = 0;
  if (!save.explore) save.explore = {};
  if (!save.world) save.world = { dateBriefed: "", memory: [], rumors: [], locationStatus: {}, daily: {}, npcMemory: {} };
  if (!Array.isArray(save.world.memory)) save.world.memory = [];
  if (!Array.isArray(save.world.rumors)) save.world.rumors = [];
  if (!Array.isArray(save.world.hooks)) save.world.hooks = [];
  if (!save.world.locationStatus || typeof save.world.locationStatus !== "object") save.world.locationStatus = {};
  if (!save.world.daily || typeof save.world.daily !== "object") save.world.daily = {};
  if (!save.world.proactiveCooldown || typeof save.world.proactiveCooldown !== "object") save.world.proactiveCooldown = {};
  if (!save.world.npcMemory || typeof save.world.npcMemory !== "object") save.world.npcMemory = {};
  if (!save.story) save.story = { completed: {}, active: null };
  if (!save.bag) save.bag = { material: [], potion: [], item: [], wizardCard: [] };
  if (!save.economy || typeof save.economy !== "object") save.economy = {};
  if (!save.economy.exploreMilestones || typeof save.economy.exploreMilestones !== "object") save.economy.exploreMilestones = {};
  if (!save.economy.interestPaid || typeof save.economy.interestPaid !== "object") save.economy.interestPaid = {};
  if (!save.economy.houseCupPaid || typeof save.economy.houseCupPaid !== "object") save.economy.houseCupPaid = {};
  if (!save.player) save.player = {};
  if (save.player.sickles === undefined) save.player.sickles = 0;
  if (save.player.knuts === undefined) save.player.knuts = 0;
  if (!save.course) save.course = {};
  allCourseList.forEach(c => {
    if (save.course[c] === undefined) save.course[c] = 0;
  });
  if (!save.course.absenceStats) save.course.absenceStats = { total: 0, bySubject: {}, records: [] };
  if (!save.course.attendance) save.course.attendance = {};
  if (!save.course.muggleExams) save.course.muggleExams = { gcse: {}, alevel: {} };
  if (!save.course.muggleExams.gcse) save.course.muggleExams.gcse = {};
  if (!save.course.muggleExams.alevel) save.course.muggleExams.alevel = {};
  if (save.course.muggleHumanities === undefined) save.course.muggleHumanities = null;
  if (!Array.isArray(save.course.aLevelSubjects)) save.course.aLevelSubjects = [];
  if (save.course.yearGrade === undefined) save.course.yearGrade = 1;

  for (const charKey of REMOVED_CHARACTERS) {
    if (save.affinity?.[charKey]) delete save.affinity[charKey];
  }
  if (Array.isArray(save.knownCharacters)) {
    save.knownCharacters = save.knownCharacters.filter(charKey => !REMOVED_CHARACTERS.includes(charKey));
  }

  return save;
}

function parseStoredSave(raw) {
  if (!raw) return null;
  const parsed = JSON.parse(raw);
  const payload = unwrapSavePayload(parsed);
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error('Invalid save payload');
  }
  return payload;
}

export function unwrapSavePayload(parsed) {
  if (!isPlainObject(parsed)) return parsed;

  if (parsed.magic === SAVE_FILE_MAGIC) {
    if (!isPlainObject(parsed.payload)) {
      throw new Error('Invalid save file: missing payload');
    }
    if (parsed.checksum) {
      const actual = checksum(stableStringify(parsed.payload));
      if (actual !== parsed.checksum) {
        throw new Error('Invalid save file: checksum mismatch');
      }
    }
    return parsed.payload;
  }

  if (isPlainObject(parsed.payload)) return parsed.payload;
  if (isPlainObject(parsed.save)) return parsed.save;
  if (isPlainObject(parsed.data)) return parsed.data;
  return parsed;
}

export function makeSaveFile(data = getSave()) {
  const payload = migrateSaveData(deepClone(data));
  const file = {
    magic: SAVE_FILE_MAGIC,
    formatVersion: 1,
    schemaVersion: SAVE_SCHEMA_VERSION,
    gameVersion: getCurrentGameVersion(),
    exportedAt: new Date().toISOString(),
    payload
  };
  file.checksum = checksum(stableStringify(payload));
  return file;
}

export function serializeSaveFile(data = getSave()) {
  return JSON.stringify(makeSaveFile(data), null, 2);
}

export function parseSaveFileText(text) {
  const parsed = JSON.parse(text);
  return migrateSaveData(unwrapSavePayload(parsed));
}

export function importSaveObject(obj) {
  const data = migrateSaveData(unwrapSavePayload(obj));
  setSave(data);
  return data;
}

export function importSaveFileText(text) {
  const data = parseSaveFileText(text);
  setSave(data);
  return data;
}

export function downloadSaveFile(data = getSave(), filename = '') {
  const save = migrateSaveData(deepClone(data));
  const playerName = String(save.player?.name || 'wizard').replace(/[\\/:*?"<>|\s]+/g, '_').slice(0, 32);
  const date = save.time?.currentDate || 'unknown-date';
  const fileName = filename || `hogwarts-save-${playerName}-${date}.json`;
  const blob = new Blob([serializeSaveFile(save)], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return fileName;
}

export function getSave() {
  try {
    try {
      const save = parseStoredSave(localStorage.getItem(SAVE_KEY)) || getDefaultSave();
      return migrateSaveData(save);
    } catch (e) {
      console.error('⚠️ 主存档损坏，尝试从备份恢复:', e);
      const backupRaw = localStorage.getItem(SAVE_BACKUP_KEY);
      const backup = parseStoredSave(backupRaw);
      if (backupRaw) localStorage.setItem(SAVE_KEY, backupRaw);
      return migrateSaveData(backup || getDefaultSave());
    }
  } catch (e) {
    console.error('⚠️ 存档读取失败:', e);
    return migrateSaveData(getDefaultSave());
  }
}

export function setSave(data) {
  try {
    const serialized = JSON.stringify(migrateSaveData(data));
    localStorage.setItem(SAVE_KEY, serialized);
    try { localStorage.setItem(SAVE_BACKUP_KEY, serialized); } catch (_) {}
    return JSON.parse(serialized);
  }
  catch (e) { console.error('⚠️ 存档失败:', e); }
}

export function resetAll() { localStorage.clear(); location.reload(); }

export function hasAnySave() {
  try {
    if (localStorage.getItem(SAVE_KEY)) return true;
    const slots = getAllSlots();
    if (slots.some(Boolean)) return true;
    for (let i = 1; i <= SLOT_COUNT; i++) {
      if (localStorage.getItem('save_' + i)) return true;
    }
  } catch (_) {}
  return false;
}

export function restartGame() {
  const old = getSave();
  const course = {};
  allCourseList.forEach(c => course[c] = 0);
  course.absenceStats = { total: 0, bySubject: {}, records: [] };
  course.attendance = {};
  const fresh = {
    player: { name: "无名巫师", era: "", house: "", blood: "", wand: "", wandAccepted: true, galleons: 10, sickles: 0, knuts: 0 },
    time: { year: 1991, month: 9, day: 2, dailyActionLeft: 1, nowTime: "夜晚", currentDate: "1991-09-02" },
    log: [],
    timeline: [],
    course,
    bag: { material: [], potion: [], item: [], wizardCard: [] },
    economy: { exploreMilestones: {}, interestPaid: {}, houseCupPaid: {} },
    affinity: {},
    knownCharacters: [],
    knownSpells: [],
    housePoints: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 },
    duelRecord: { wins: 0, losses: 0 },
    quests: {},
    spellList: [],
    spellProficiency: {},
    darkMagicRecord: 0,
    explore: {},
    world: { dateBriefed: "", memory: [], rumors: [], locationStatus: {}, hooks: [], daily: {}, proactiveCooldown: {}, npcMemory: {} },
    potion: {},
    story: { completed: {}, active: null },
  };
  setSave(fresh);

  if (window.loadTimeFromSave) window.loadTimeFromSave();
  if (window.timeSystem) {
    window.timeSystem.dailyActionLeft = 1;
    window.timeSystem.nowTime = "夜晚";
    window.timeSystem.currentDate = "1991-09-02";
  }
  if (window.syncActionUI) window.syncActionUI();
  window.classroom?.resetClassroom?.();
  window.loadCourseProgressFromSave?.();

  document.getElementById("screen-main")?.classList.remove("active");
  document.getElementById("screen-create")?.classList.add("active");
  if (window.refreshAll) window.refreshAll();
}

export function getYearGrade() {
  const data = getSave();
  const currentDate = data.time?.currentDate ?? "1991-09-02";
  const parsedYear = parseInt(currentDate.split('-')[0], 10);
  if (parsedYear && parsedYear >= 1991) return parsedYear - 1990;
  const year = data.time?.year ?? data.year ?? 1991;
  return year - 1990;
}

export function getPlayerHouse() {
  const data = getSave();
  return data.player?.house || "";
}

export function checkYearUpgrade() {
  const data = getSave();
  const currentDate = data.time?.currentDate ?? "1991-09-02";
  const parts = currentDate.split('-');
  const parsedMonth = parseInt(parts[1], 10);
  const parsedDay = parseInt(parts[2], 10);
  const month = data.time?.month ?? data.month ?? parsedMonth;
  const day   = data.time?.day   ?? data.day   ?? parsedDay;
  const upgraded = data.time?._yearUpgraded ?? data._yearUpgraded;

  if (month === 9 && day === 1 && !upgraded) {
    if (data.time) {
      data.time.year = (data.time.year ?? 1991) + 1;
      data.time._yearUpgraded = true;
    } else {
      data.year = (data.year ?? 1991) + 1;
      data._yearUpgraded = true;
    }
    setSave(data);
    addLog(`🎓 新学年开启！年份更替，你已晋升为【${getYearGrade()}年级】`);
    if (window.autoUpdateCourseUnlock) window.autoUpdateCourseUnlock();
    if (window.refreshAll) window.refreshAll();
  } else if (!(month === 9 && day === 1)) {
    if (data.time?._yearUpgraded) { data.time._yearUpgraded = false; setSave(data); }
    else if (data._yearUpgraded)  { data._yearUpgraded = false; setSave(data); }
  }
}

export function loadPlayer(player) {
  const data = getSave();
  if (data.player) Object.assign(player, data.player);
}

export function savePlayer(player) {
  const data = getSave();
  data.player = { ...data.player, ...player };
  setSave(data);
}

export function loadTime(timeSystem) {
  const data = getSave();
  if (data.time) Object.assign(timeSystem, data.time);
}

export function saveTime(timeSystem) {
  const data = getSave();
  data.time = { ...data.time, ...timeSystem };
  setSave(data);
  checkYearUpgrade();
}

export { addLog, renderLog } from './save-log.js';
export { renderTimeline } from './save-timeline.js';
export { getAllSlots, saveAllSlots } from './save-slots.js';

// 全局挂载
window.saveSys = {
  getSave,
  setSave,
  getDefaultSave,
  createNewSave,
  migrateSaveData,
  makeSaveFile,
  serializeSaveFile,
  parseSaveFileText,
  importSaveObject,
  importSaveFileText,
  downloadSaveFile,
  hasAnySave,
  loadPlayer,
  savePlayer,
  loadTime,
  saveTime,
  addLog,
  resetAll,
  checkYearUpgrade
};
window.addLog = addLog;
window.doStudyLog = (text) => addLog(text);
window.doExploreLog = window.doStudyLog;
window.renderLog = renderLog;
window.renderTimeline = renderTimeline;

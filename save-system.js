// save-system.js — 存档核心读写 + 数据结构 + 日志 + 时间轴

import { REMOVED_CHARACTERS } from './affinity-data.js';

export const SAVE_KEY = "hogwarts";
export const SAVE_SCHEMA_VERSION = 2;
export const SAVE_FILE_MAGIC = "HOGWARTS_SIM_SAVE";
const SAVE_BACKUP_KEY = `${SAVE_KEY}_bak`;
const SAVE_SLOT_KEY = "hogwarts_slots";
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
    course,
    potion: {},
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
  if (!save.story) save.story = { completed: {}, active: null };
  if (!save.bag) save.bag = { material: [], potion: [], item: [], wizardCard: [] };
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

function unwrapSavePayload(parsed) {
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

const MAX_LOG_ENTRIES = 200;
const RENDER_LOG_LIMIT = 50;

export function addLog(text, type = 'player', house = '') {
  const d = getSave();
  if (!d.log) d.log = [];
  const curDate = d.time?.currentDate || "1991-09-02";
  const curTime = d.time?.nowTime || "上午";
  const typeTag = type === 'player' ? '' : `[${type}]`;
  const houseTag = house ? `[${house}]` : '';
  d.log.push(`[${curDate} ${curTime}] ${typeTag}${houseTag} ${text}`);
  if (d.log.length > MAX_LOG_ENTRIES) d.log = d.log.slice(-MAX_LOG_ENTRIES);
  setSave(d);
  if (window.renderLog) window.renderLog();
}

export function renderLog() {
  const data = getSave();
  const el = document.getElementById("log");
  const filtersEl = document.getElementById("log-filters");
  
  if (!el) return;
  if (!Array.isArray(data.log)) data.log = [];

  // 初始化筛选器（简化横板样式）
  if (filtersEl) {
    const filters = data.logFilters || { story: true, npc: true, player: true };
    filtersEl.innerHTML =
      `<label style="display:inline-flex;align-items:center;white-space:nowrap;cursor:pointer"><input type="checkbox" data-filter="story" ${filters.story ? 'checked' : ''} style="margin-right:4px"><span style="font-size:11px;color:rgba(255,255,255,0.7)">旁白</span></label>` +
      `<label style="display:inline-flex;align-items:center;white-space:nowrap;cursor:pointer"><input type="checkbox" data-filter="npc" ${filters.npc ? 'checked' : ''} style="margin-right:4px"><span style="font-size:11px;background:linear-gradient(to right,#dc143c,#ffd700,#4169e1,#5cb85c);-webkit-background-clip:text;-webkit-text-fill-color:transparent">角色</span></label>` +
      `<label style="display:inline-flex;align-items:center;white-space:nowrap;cursor:pointer"><input type="checkbox" data-filter="player" ${filters.player ? 'checked' : ''} style="margin-right:4px"><span style="font-size:11px;color:#9999cc">自己</span></label>`;

    filtersEl.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', () => {
        const newFilters = { ...(data.logFilters || { story: true, npc: true, player: true }) };
        newFilters[cb.dataset.filter] = cb.checked;
        data.logFilters = newFilters;
        setSave(data);
        renderLog();
      });
    });
  }

  const filters = data.logFilters || { story: true, npc: true, player: true };
  const recent = data.log.slice(-RENDER_LOG_LIMIT);
  el.innerHTML = "";
  
  const storyKeywords = ["成功进入霍格沃茨", "剧情事件", "已保存至", "已读取", "已清空", "即将发生", "新学年开启", "无法进入"];
  
  const houseColors = {
    gryffindor: "#dc143c",
    slytherin: "#5cb85c",
    ravenclaw: "#6b9fff",
    hufflepuff: "#ffd700"
  };
  
  recent.forEach(t => {
    const p = document.createElement("p");
    
    let logType = 'player';
    let displayText = t;
    let house = '';
    
    const npcMatch = t.match(/\[npc\](\[(\w+)\])?/i);
  const storyMatch = t.match(/\[story\]/i);
  if (npcMatch) {
    logType = 'npc';
    displayText = t.replace(/\[npc\](\[\w+\])?\s*/i, '');
    if (npcMatch[2]) house = npcMatch[2].toLowerCase();
    p.className = "log-npc";
  } else if (storyMatch || storyKeywords.some(kw => t.includes(kw))) {
    logType = 'story';
    displayText = t.replace(/\[story\]\s*/i, '');
    p.className = "log-story";
  }
    
    if (filters[logType]) {
      p.innerText = displayText;
      
      if (logType === 'npc') {
        let npcColor = '';
        if (house && houseColors[house]) {
          npcColor = houseColors[house];
        } else {
          if (t.includes('🦁')) npcColor = houseColors.gryffindor;
          else if (t.includes('🐍')) npcColor = houseColors.slytherin;
          else if (t.includes('🦅')) npcColor = houseColors.ravenclaw;
          else if (t.includes('🦡')) npcColor = houseColors.hufflepuff;
        }
        p.style.color = npcColor || '#8a8a6a';
        p.style.opacity = '0.8';
      } else if (logType === 'story') {
        p.style.color = 'rgba(255,255,255,0.7)';
      } else {
        p.style.color = '#9999cc';
      }
      
      el.appendChild(p);
    }
  });
  el.scrollTop = el.scrollHeight;
}

// 时间轴
const baseEvents = [
  { date: "1960-01-09", text: "西弗勒斯・斯内普 生日", isBirthday: true, character: "西弗勒斯・斯内普", storyId: "birthday_snape" },
  { date: "1960-03-27", text: "莱姆斯・卢平 生日", isBirthday: true, character: "莱姆斯・卢平", storyId: "birthday_lupin" },
  { date: "1960-11-19", text: "小天狼星・布莱克 生日", isBirthday: true, character: "小天狼星・布莱克", storyId: "birthday_sirius" },
  { date: "1979-09-19", text: "赫敏・格兰杰 生日", isBirthday: true, character: "赫敏・格兰杰", storyId: "birthday_hermione" },
  { date: "1980-03-01", text: "罗恩・韦斯莱 生日", isBirthday: true, character: "罗恩・韦斯莱", storyId: "birthday_ron" },
  { date: "1980-07-31", text: "哈利・波特 生日", isBirthday: true, character: "哈利・波特", storyId: "birthday_harry" },
  { date: "1981-08-11", text: "金妮・韦斯莱 生日", isBirthday: true, character: "金妮・韦斯莱", storyId: "birthday_ginny" },
  { date: "1991-07-31", text: "海格的来信", storyId: "story_0_1" },
  { date: "1991-08-15", text: "对角巷购杖", storyId: "story_0_2" },
  { date: "1991-09-01", text: "九又四分之三", storyId: "story_0_3" },
  { date: "1991-09-02", text: "分院仪式之夜", storyId: "story_1_1" },
  { date: "1991-09-15", text: "走廊里的飞行课", storyId: "story_1_2" },
  { date: "1991-10-31", text: "万圣节的尖叫", storyId: "story_1_3" },
  { date: "1991-12-01", text: "三楼走廊的秘密", storyId: "story_1_4" },
  { date: "1991-12-25", text: "圣诞节的隐形衣", storyId: "story_1_5" },
  { date: "1992-06-01", text: "魔法石之夜", storyId: "story_1_6" },
  { date: "1992-08-01", text: "多比的警告", storyId: "story_2_0" },
  { date: "1992-09-01", text: "飞车撞打人柳", storyId: "story_2_0b" },
  { date: "1992-10-31", text: "墙上的血字", storyId: "story_2_1" },
  { date: "1992-12-10", text: "决斗俱乐部的蛇", storyId: "story_2_2" },
  { date: "1993-05-25", text: "密室关闭", storyId: "story_2_3" },
  { date: "1993-07-15", text: "布莱克越狱", storyId: "story_3_0" },
  { date: "1993-09-01", text: "卢平就任教授" },
  { date: "1993-09-01", text: "摄魂怪", storyId: "story_3_1" },
  { date: "1993-10-01", text: "守护神咒", storyId: "story_3_1b" },
  { date: "1994-04-15", text: "尖叫棚屋的真相", storyId: "story_3_2" },
  { date: "1994-06-06", text: "时间转换器", storyId: "story_3_2b" },
  { date: "1994-06-24", text: "纳吉尼魂器" },
  { date: "1994-08-15", text: "世界杯骚乱", storyId: "story_4_0" },
  { date: "1994-10-01", text: "三强争霸赛重启" },
  { date: "1994-10-15", text: "火焰杯的选择", storyId: "story_4_1" },
  { date: "1994-11-01", text: "哈利成为第四勇士" },
  { date: "1994-12-25", text: "圣诞舞会", storyId: "story_4_1b" },
  { date: "1995-02-24", text: "黑湖任务" },
  { date: "1995-06-24", text: "墓地的闪光", storyId: "story_4_2" },
  { date: "1995-08-02", text: "摄魂怪受审", storyId: "story_5_0" },
  { date: "1995-09-01", text: "乌姆里奇就任" },
  { date: "1995-09-10", text: "粉色的独裁", storyId: "story_5_1" },
  { date: "1995-10-05", text: "邓布利多军", storyId: "story_5_1b" },
  { date: "1996-01-02", text: "布莱克牺牲", storyId: "story_5_2" },
  { date: "1996-06-01", text: "乌姆里奇下台" },
  { date: "1996-09-01", text: "斯拉格霍恩任教", storyId: "story_6_0" },
  { date: "1996-09-15", text: "王子的笔记", storyId: "story_6_1" },
  { date: "1996-10-01", text: "混血王子课本" },
  { date: "1996-12-01", text: "魂器的秘密", storyId: "story_6_1b" },
  { date: "1997-03-01", text: "邓布利多受伤" },
  { date: "1997-06-01", text: "天文塔的绿光", storyId: "story_6_2" },
  { date: "1997-06-30", text: "邓布利多陨落" },
  { date: "1997-07-27", text: "七哈利转移", storyId: "story_7_0" },
  { date: "1997-09-01", text: "铁三角逃亡" },
  { date: "1998-01-05", text: "销毁挂坠盒" },
  { date: "1998-02-01", text: "死亡圣器传说" },
  { date: "1998-03-01", text: "马尔福庄园", storyId: "story_7_0b" },
  { date: "1998-04-01", text: "抢劫古灵阁", storyId: "story_7_0c" },
  { date: "1998-05-01", text: "最后的战斗", storyId: "story_7_1" },
  { date: "1998-05-02", text: "霍格沃茨大战" },
  { date: "1998-05-08", text: "霍格沃茨重建" },
  { date: "1999-09-01", text: "和平时代开启" },
  { date: "2017-09-01", text: "十九年后" }
];

function generateAllEvents() {
  const birthdays = baseEvents.filter(e => e.isBirthday);
  const story = baseEvents.filter(e => !e.isBirthday);
  const all = [...story];
  for (let y = 1990; y <= 2018; y++) {
    birthdays.forEach(b => {
      const [, m, d] = b.date.split('-');
      all.push({ date: `${y}-${m}-${d}`, text: `🎂 ${b.character} 生日快乐`, isAutoBirthday: true, storyId: b.storyId });
    });
  }
  return all.sort((a, b) => a.date.localeCompare(b.date));
}

const events = generateAllEvents();

export function renderTimeline() {
  const data = getSave();
  const today = data.time?.currentDate || "1991-09-02";
  const el = document.getElementById('timeline');
  if (!el) return;

  const storyData = data.story || { completed: {} };
  const STORY_MAP = {};
  if (window.STORY_EVENTS) {
    for (const evt of window.STORY_EVENTS) {
      STORY_MAP[evt.id] = evt;
    }
  }

  const past = events.filter(e => e.date < today).slice(-3);
  const now = events.filter(e => e.date === today);
  const future = events.filter(e => e.date > today).slice(0, 3);

  let html = '';

  html += '<h4>✅ 已发生（最近3件）</h4>';
  past.forEach(e => { html += _renderTimelineEntry(e, storyData, STORY_MAP, today); });
  html += '<div class="divider"></div><h4>🔴 正在发生</h4>';
  now.forEach(e => { html += _renderTimelineEntry(e, storyData, STORY_MAP, today); });
  html += '<div class="divider"></div><h4>🔜 即将发生（最近3件）</h4>';
  future.forEach(e => { html += _renderTimelineEntry(e, storyData, STORY_MAP, today); });

  el.innerHTML = html;

  el.querySelectorAll('.tl-story-toggle').forEach(toggle => {
    toggle.onclick = () => {
      const entry = toggle.closest('.tl-story-entry');
      const detail = entry?.querySelector('.tl-story-detail');
      if (detail) {
        const open = detail.style.display !== 'none';
        detail.style.display = open ? 'none' : 'block';
        toggle.querySelector('.tl-toggle-arrow').textContent = open ? '▸' : '▾';
      }
    };
  });
}

function _renderTimelineEntry(e, storyData, STORY_MAP, today) {
  const storyId = e.storyId;
  if (!storyId) {
    return `<p><span class="event-date">${e.date}</span> ${e.text}</p>`;
  }

  const evt = STORY_MAP[storyId];
  const isCompleted = !!storyData.completed[storyId];
  let isAvailable = false;
  if (evt) {
    const data = getSave();
    const isTimeTraveling = !!data.timeTurner?.isTraveling;

    function _prereqOk(prereqId) {
      if (!prereqId) return true;
      if (storyData.completed[prereqId]) return true;
      if (isTimeTraveling) {
        const prereqEvt = STORY_MAP[prereqId];
        if (prereqEvt && !prereqEvt.isBirthday && prereqEvt.dateRange) {
          if (prereqEvt.dateRange[1] <= today) return true;
        }
        if (prereqEvt?.isBirthday && prereqEvt.birthdayDate) {
          const bdThisYear = `${today.substring(0, 5)}${prereqEvt.birthdayDate}`;
          if (bdThisYear <= today) return true;
        }
      }
      return false;
    }

    if (evt.isBirthday) {
      const todayMD = today.substring(5);
      const completedYear = storyData.completed[storyId];
      const currentYear = parseInt(today.split('-')[0], 10);
      isAvailable = todayMD === evt.birthdayDate && completedYear !== currentYear
        && _prereqOk(evt.prerequisite);
    } else {
      isAvailable = !isCompleted && today >= evt.dateRange[0] && today <= evt.dateRange[1]
        && _prereqOk(evt.prerequisite);
    }
  }

  if (!evt) {
    return `<p><span class="event-date">${e.date}</span> ${e.text}</p>`;
  }

  const desc = evt.summary || e.text;

  const badge = isCompleted ? '<span class="tl-story-badge tl-badge-done">✓</span>' : '';
  const triggerBtn = isAvailable
    ? `<button class="story-trigger-btn" onclick="window.storyEngine.startStoryEvent('${storyId}')">📖 参与剧情</button>`
    : '';

  return `<div class="tl-story-entry ${isCompleted ? 'tl-story-completed' : isAvailable ? 'tl-story-available' : ''}">
    <div class="tl-story-header">
      <span class="event-date">${e.date}</span>
      <span class="tl-story-toggle" title="点击展开/收起"><span class="tl-toggle-arrow">▸</span> ${e.text}</span>
      ${badge}${triggerBtn}
    </div>
    <div class="tl-story-detail" style="display:none">${desc.split('\n').map(l => `<p>${l}</p>`).join('')}</div>
  </div>`;
}

// 存档槽（供 slot-system.js 使用）
export function getAllSlots() {
  try {
    const data = localStorage.getItem(SAVE_SLOT_KEY);
    const parsed = data ? JSON.parse(data) : [];
    const slots = Array.isArray(parsed)
      ? parsed.slice(0, SLOT_COUNT).map(slot => slot ? migrateSaveData(unwrapSavePayload(slot)) : null)
      : [];
    while (slots.length < SLOT_COUNT) slots.push(null);
    return slots;
  } catch (e) { return Array(SLOT_COUNT).fill(null); }
}

export function saveAllSlots(slots) {
  const normalized = Array.isArray(slots)
    ? slots.slice(0, SLOT_COUNT).map(slot => slot ? migrateSaveData(slot) : null)
    : [];
  while (normalized.length < SLOT_COUNT) normalized.push(null);
  localStorage.setItem(SAVE_SLOT_KEY, JSON.stringify(normalized));
}

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

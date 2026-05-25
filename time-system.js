export const timeSystem = {
  dailyActionLeft: 1,
  nowTime: "夜晚",
  currentDate: "1991-09-02"
};

function saveTimeToSave() {
  // ✅ FIX #5：加防御检查，避免 saveSys 未就绪时静默失败
  if (!window.saveSys) {
    console.warn('⚠️ timeSystem: saveSys 未就绪，跳过保存');
    return;
  }
  const data = window.saveSys.getSave();
  const parts = timeSystem.currentDate.split('-');
  const year = parseInt(parts[0], 10) || 1991;
  const month = parseInt(parts[1], 10) || 9;
  const day = parseInt(parts[2], 10) || 2;
  data.time = {
    ...data.time,
    year, month, day,
    dailyActionLeft: timeSystem.dailyActionLeft,
    nowTime: timeSystem.nowTime,
    currentDate: timeSystem.currentDate
  };
  window.saveSys.setSave(data);
  window.saveSys.checkYearUpgrade();
}

export function loadTimeFromSave() {
  if (!window.saveSys) {
    console.warn('⚠️ timeSystem: saveSys 未就绪，跳过加载');
    return;
  }
  const data = window.saveSys.getSave();
  if (data.time) {
    timeSystem.dailyActionLeft = data.time.dailyActionLeft ?? 3;
    timeSystem.nowTime = data.time.nowTime ?? "上午";
    timeSystem.currentDate = data.time.currentDate ?? "1991-09-02";
    if (data.time.year !== undefined) timeSystem.year = data.time.year;
    if (data.time.month !== undefined) timeSystem.month = data.time.month;
    if (data.time.day !== undefined) timeSystem.day = data.time.day;
    syncUI();
  }
}

function updateTimeByActions() {
  if (timeSystem.dailyActionLeft >= 3) timeSystem.nowTime = "上午";
  else if (timeSystem.dailyActionLeft === 2) timeSystem.nowTime = "下午";
  else if (timeSystem.dailyActionLeft === 1) timeSystem.nowTime = "夜晚";
  else timeSystem.nowTime = "深夜";
}

export function costAction() {
  if (timeSystem.dailyActionLeft <= 0) return false;
  window.courseAttendance?.recordMissedClassesForCurrentWindow?.();
  timeSystem.dailyActionLeft--;
  updateTimeByActions();
  syncUI();
  saveTimeToSave();
  window.npcEvents?.triggerNpcActionEvents?.();
  window.courseAttendance?.remindCurrentWindowClasses?.();
  return true;
}

export function doNothing() {
  if (!costAction()) {
    if (timeSystem.dailyActionLeft <= 0) nextDay();
    return;
  }
  
  const messages = [
    "你决定今天什么也不做，好好休息一下。",
    "你悠闲地度过了一段时间，什么也没做。",
    "你找了个安静的角落发呆，时间就这样过去了。",
    "你闭目养神，享受片刻的宁静。",
    "什么也不做，有时候也是一种选择。",
    "你放空自己，让身心都得到了放松。",
    "你望着窗外发呆，不知不觉时间就过去了。",
    "你决定给自己放个假，什么都不做。"
  ];
  
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  if (window.doExploreLog) {
    window.doExploreLog(`😴 ${randomMessage}`);
  }
  
  if (timeSystem.dailyActionLeft <= 0) {
    nextDay();
  }
}

export function nextDay() {
  while (timeSystem.dailyActionLeft > 0) {
    window.courseAttendance?.recordMissedClassesForCurrentWindow?.();
    timeSystem.dailyActionLeft--;
  }

  let date = new Date(timeSystem.currentDate);
  if (isNaN(date.getTime())) {
    console.warn(`⚠️ 无效的日期格式：${timeSystem.currentDate}，使用默认日期`);
    date = new Date("1991-09-02");
  }

  date.setDate(date.getDate() + 1);
  timeSystem.currentDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  timeSystem.year = date.getFullYear();
  timeSystem.month = date.getMonth() + 1;
  timeSystem.day = date.getDate();
  timeSystem.dailyActionLeft = 3;
  timeSystem.nowTime = "上午";
  syncUI();
  saveTimeToSave();
  window.courseAttendance?.remindCurrentWindowClasses?.();

  setTimeout(() => {
    if (window.checkTimeTurnerAutoEnd) window.checkTimeTurnerAutoEnd();
  }, 100);

  setTimeout(() => {
    if (window.storyEngine?.checkAndTriggerStory) {
      window.storyEngine.checkAndTriggerStory();
    }
    window.npcEvents?.triggerDailyBrief?.(true);
    window.proactiveScheduler?.run?.();
  }, 200);
}

export function nextTime() {
  if (timeSystem.dailyActionLeft <= 0) {
    if (window.isTimeTraveling?.()) {
      return false;
    }
    nextDay();
    return true;
  }
  return false;
}

export function checkAreaTimeLimit() { return true; }
export function syncActionUI() { syncUI(); }

const HOLIDAYS = [
  { start: "12-20", end: "01-05", name: "圣诞假期" },
  { start: "06-15", end: "09-01", name: "暑假" },
];

const DATE_EVENTS = [
  { date: "09-02", name: "开学日", noClass: true, noClassLabel: "开学日" },
  { date: "10-31", name: "万圣节", noClassPeriods: [3], noClassLabel: "万圣节宴会" },
  { date: "02-14", name: "情人节" },
];

function getEasterDate(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function getDateEvent(dateStr) {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return null;
  const md = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  return DATE_EVENTS.find(e => e.exactDate === dateStr) || DATE_EVENTS.find(e => e.date === md) || null;
}

export function isHoliday(dateStr) {
  if (!dateStr) dateStr = timeSystem.currentDate;
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return null;
  
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  for (const h of HOLIDAYS) {
    const [sm, sd] = h.start.split('-').map(Number);
    const [em, ed] = h.end.split('-').map(Number);
    
    let startDate = new Date(year, sm - 1, sd);
    let endDate = new Date(year, em - 1, ed);
    
    if (endDate < startDate) {
      endDate = new Date(year + 1, em - 1, ed);
    }
    
    if (date >= startDate && date <= endDate) {
      return h.name;
    }
  }

  const easter = getEasterDate(year);
  const easterStart = new Date(easter);
  easterStart.setDate(easter.getDate() - 7);
  const easterEnd = new Date(easter);
  easterEnd.setDate(easter.getDate() + 7);
  if (date >= easterStart && date <= easterEnd) {
    return "复活节假期";
  }

  return null;
}

export function getDateEventName(dateStr) {
  if (!dateStr) dateStr = timeSystem.currentDate;
  const event = getDateEvent(dateStr);
  if (event) return event.name;
  return isHoliday(dateStr) || "";
}

export function getNoClassReason(dateStr, period = null) {
  if (!dateStr) dateStr = timeSystem.currentDate;
  const holiday = isHoliday(dateStr);
  if (holiday) return holiday;

  const event = getDateEvent(dateStr);
  if (!event) return "";
  if (event.noClass) return event.noClassLabel || event.name;
  if (period && event.noClassPeriods?.includes(period)) return event.noClassLabel || event.name;
  return "";
}

export function isSchoolNoClassDate(dateStr) {
  return !!getNoClassReason(dateStr);
}

export function isSchoolNoClassPeriod(dateStr, period) {
  return !!getNoClassReason(dateStr, period);
}

export function isHogsmeadeWeekend(dateStr) {
  if (!dateStr) dateStr = timeSystem.currentDate;
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return false;
  const day = date.getDay();
  if (day !== 0 && day !== 6) return false;
  const holiday = isHoliday(dateStr);
  if (holiday) return false;
  const parts = dateStr.split('-');
  const mm = parseInt(parts[1], 10);
  if (mm >= 6 && mm <= 8) return false;
  return true;
}

window.isHoliday = isHoliday;
window.getDateEventName = getDateEventName;
window.getNoClassReason = getNoClassReason;
window.isSchoolNoClassDate = isSchoolNoClassDate;
window.isSchoolNoClassPeriod = isSchoolNoClassPeriod;
window.isHogsmeadeWeekend = isHogsmeadeWeekend;

function syncUI() {
  const a = document.getElementById("actions");
  const t = document.getElementById("timeOfDay");
  const d = document.getElementById("date");
  const w = document.getElementById("weekday");
  const e = document.getElementById("dateEvent");
  if (a) a.textContent = timeSystem.dailyActionLeft;
  if (t) t.textContent = timeSystem.nowTime;
  if (d) d.textContent = timeSystem.currentDate;
  if (w) {
    const weekdays = ["周日","周一","周二","周三","周四","周五","周六"];
    const dateObj = new Date(timeSystem.currentDate);
    w.textContent = isNaN(dateObj.getTime()) ? "" : weekdays[dateObj.getDay()];
  }
  if (e) e.textContent = getDateEventName(timeSystem.currentDate);

  const exploreBtn = document.getElementById("exploreBtn");
  if (exploreBtn) {
    exploreBtn.textContent = "🗺️ 探索城堡";
  }
  
  const adventureBtn = document.getElementById("adventureBtn");
  if (adventureBtn) {
    const holiday = isHoliday();
    adventureBtn.style.display = holiday ? "block" : "none";
  }
}

window.timeSystem = timeSystem;
window.costAction = costAction;
window.nextTime = nextTime;
window.nextDay = nextDay;
window.syncActionUI = syncActionUI;
window.loadTimeFromSave = loadTimeFromSave;
window.doNothing = doNothing;

document.addEventListener("DOMContentLoaded", () => {
  loadTimeFromSave();
});

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
    timeSystem.nowTime = data.time.nowTime ?? "早晨";
    timeSystem.currentDate = data.time.currentDate ?? "1991-09-02";
    if (data.time.year !== undefined) timeSystem.year = data.time.year;
    if (data.time.month !== undefined) timeSystem.month = data.time.month;
    if (data.time.day !== undefined) timeSystem.day = data.time.day;
    syncUI();
  }
}

function updateTimeByActions() {
  if (timeSystem.dailyActionLeft >= 3) timeSystem.nowTime = "早晨";
  else if (timeSystem.dailyActionLeft === 2) timeSystem.nowTime = "中午";
  else if (timeSystem.dailyActionLeft === 1) timeSystem.nowTime = "夜晚";
  else timeSystem.nowTime = "深夜";
}

export function costAction() {
  if (timeSystem.dailyActionLeft <= 0) return false;
  timeSystem.dailyActionLeft--;
  updateTimeByActions();
  syncUI();
  saveTimeToSave();
  return true;
}

export function nextDay() {
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
  timeSystem.nowTime = "早晨";
  syncUI();
  saveTimeToSave();

  setTimeout(() => {
    if (window.checkTimeTurnerAutoEnd) window.checkTimeTurnerAutoEnd();
  }, 100);

  setTimeout(() => {
    if (window.storyEngine?.checkAndTriggerStory) {
      window.storyEngine.checkAndTriggerStory();
    }
    if (window.npcEvents?.triggerNpcDailyEvents) {
      window.npcEvents.triggerNpcDailyEvents();
    }
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
  { start: "03-28", end: "04-14", name: "复活节假期" },
  { start: "06-15", end: "09-01", name: "暑假" },
];

export function isHoliday(dateStr) {
  if (!dateStr) dateStr = timeSystem.currentDate;
  const parts = dateStr.split('-');
  const mm = parseInt(parts[1], 10);
  const dd = parseInt(parts[2], 10);
  const mmdd = mm * 100 + dd;

  for (const h of HOLIDAYS) {
    const [sm, sd] = h.start.split('-').map(Number);
    const [em, ed] = h.end.split('-').map(Number);
    const start = sm * 100 + sd;
    const end = em * 100 + ed;
    if (start <= end) {
      if (mmdd >= start && mmdd <= end) return h.name;
    } else {
      if (mmdd >= start || mmdd <= end) return h.name;
    }
  }
  return null;
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
window.isHogsmeadeWeekend = isHogsmeadeWeekend;

function syncUI() {
  const a = document.getElementById("actions");
  const t = document.getElementById("timeOfDay");
  const d = document.getElementById("date");
  if (a) a.textContent = timeSystem.dailyActionLeft;
  if (t) t.textContent = timeSystem.nowTime;
  if (d) d.textContent = timeSystem.currentDate;

  const exploreBtn = document.getElementById("exploreBtn");
  if (exploreBtn) {
    const holiday = isHoliday();
    exploreBtn.textContent = holiday ? "🚪 出门探险" : "🗺️ 探索城堡";
  }
}

window.timeSystem = timeSystem;
window.costAction = costAction;
window.nextTime = nextTime;
window.nextDay = nextDay;
window.syncActionUI = syncActionUI;
window.loadTimeFromSave = loadTimeFromSave;

document.addEventListener("DOMContentLoaded", () => {
  loadTimeFromSave();
});

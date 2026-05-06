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

function syncUI() {
  const a = document.getElementById("actions");
  const t = document.getElementById("timeOfDay");
  const d = document.getElementById("date");
  if (a) a.textContent = timeSystem.dailyActionLeft;
  if (t) t.textContent = timeSystem.nowTime;
  if (d) d.textContent = timeSystem.currentDate;
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

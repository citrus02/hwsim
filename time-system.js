export const timeSystem = {
  dailyActionLeft: 3,
  nowTime: "早晨",
  currentDate: "1991-09-02"
};

function saveTimeToSave() {
  // ✅ FIX #5：加防御检查，避免 saveSys 未就绪时静默失败
  if (!window.saveSys) {
    console.warn('⚠️ timeSystem: saveSys 未就绪，跳过保存');
    return;
  }
  const data = window.saveSys.getSave();
  data.time = {
    dailyActionLeft: timeSystem.dailyActionLeft,
    nowTime: timeSystem.nowTime,
    currentDate: timeSystem.currentDate
  };
  window.saveSys.setSave(data);
  window.saveSys.checkYearUpgrade();
}

export function loadTimeFromSave() {
  // ✅ FIX #5：加防御检查，避免 saveSys 未就绪时报错
  if (!window.saveSys) {
    console.warn('⚠️ timeSystem: saveSys 未就绪，跳过加载');
    return;
  }
  const data = window.saveSys.getSave();
  if (data.time) {
    timeSystem.dailyActionLeft = data.time.dailyActionLeft ?? 3;
    timeSystem.nowTime = data.time.nowTime ?? "早晨";
    timeSystem.currentDate = data.time.currentDate ?? "1991-09-02";
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
  timeSystem.dailyActionLeft = 3;
  timeSystem.nowTime = "早晨";
  syncUI();
  saveTimeToSave();
}

export function nextTime() {
  if (timeSystem.dailyActionLeft <= 0) {
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

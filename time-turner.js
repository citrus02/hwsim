import { getSave, setSave, addLog } from './save/save-system.js';
import { unlockAchievement } from './course/achievement.js';

const TIME_PERIODS = ["上午", "下午", "夜晚"];
const TEST_MODE_FUTURE_YEARS = 7;
const TIME_TURNER_PRESERVED_KEYS = [
  "bag",
  "course",
  "spellProficiency",
  "potion",
  "exploreRate",
  "housePoints",
];
const TIME_TURNER_TRANSIENT_KEYS = [
  "originalTime",
  "affinitySnapshot",
  "knownCharactersSnapshot",
  "courseSnapshot",
];

function _cloneSaveSlice(value) {
  if (value === undefined) return undefined;
  return JSON.parse(JSON.stringify(value));
}

function _snapshotSaveKeys(data, keys) {
  return keys.reduce((snapshot, key) => {
    if (data[key] !== undefined) snapshot[key] = _cloneSaveSlice(data[key]);
    return snapshot;
  }, {});
}

function _restoreSaveKeys(data, snapshot) {
  Object.entries(snapshot || {}).forEach(([key, value]) => {
    data[key] = _cloneSaveSlice(value);
  });
}

function _createTravelSnapshots(data, isFutureTravel) {
  return {
    affinitySnapshot: _cloneSaveSlice(data.affinity) || {},
    knownCharactersSnapshot: Array.isArray(data.knownCharacters) ? [...data.knownCharacters] : [],
    courseSnapshot: isFutureTravel && data.course ? _cloneSaveSlice(data.course) : null,
  };
}

function _clearTravelState(timeTurner) {
  TIME_TURNER_TRANSIENT_KEYS.forEach(key => {
    timeTurner[key] = null;
  });
  timeTurner.isTraveling = false;
  timeTurner.isFutureTravel = false;
}

function isTimeTraveling() {
  const data = getSave();
  return !!data.timeTurner?.isTraveling;
}

function getOriginalTime() {
  const data = getSave();
  return data.timeTurner?.originalTime || null;
}

function getUsesLeft() {
  const data = getSave();
  return data.timeTurner?.usesLeft ?? -1;
}

function _dateStr(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function _parseDate(s) {
  const parts = s.split('-');
  return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
}

function _getMaxSelectableMonth(year, endDate) {
  return year === endDate.getFullYear() ? endDate.getMonth() + 1 : 12;
}

function _getMaxSelectableDay(year, month, endDate) {
  const daysInMonth = new Date(year, month, 0).getDate();
  if (year === endDate.getFullYear() && month === endDate.getMonth() + 1) {
    return Math.min(daysInMonth, endDate.getDate());
  }
  return daysInMonth;
}

function _periodToAction(period) {
  if (period === "上午") return 3;
  if (period === "下午") return 2;
  if (period === "夜晚") return 1;
  return 0;
}

function _dateGTE(a, b) {
  return a > b || a === b;
}

const PERIOD_ORDER = { "上午": 0, "下午": 1, "夜晚": 2, "深夜": 3 };

function _getWeekday(dateStr) {
  const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const date = _parseDate(dateStr);
  return isNaN(date.getTime()) ? "" : weekdays[date.getDay()];
}

function _hasReachedOriginal(currentDate, currentPeriod, origDate, origPeriod) {
  if (currentDate > origDate) return true;
  if (currentDate < origDate) return false;
  return (PERIOD_ORDER[currentPeriod] ?? 0) >= (PERIOD_ORDER[origPeriod] ?? 0);
}

function isTestMode() {
  const data = getSave();
  return !!data.timeTurner?.isTestMode;
}

function openTimeTurnerPanel() {
  if (isTimeTraveling()) {
    _renderReturnPanel();
    return;
  }

  const data = getSave();
  const usesLeft = getUsesLeft();
  const unlimited = usesLeft === -1;
  const currentDate = data.time?.currentDate || "1991-09-02";
  const currentPeriod = "上午";
  const testMode = isTestMode();

  let existing = document.getElementById("timeTurnerPanel");
  if (existing) existing.remove();

  const startDate = _parseDate("1991-09-02");
  const todayDate = _parseDate(currentDate);
  const futureLimit = new Date(todayDate);
  futureLimit.setFullYear(futureLimit.getFullYear() + TEST_MODE_FUTURE_YEARS);
  const endDate = testMode ? futureLimit : todayDate;

  const currentParts = currentDate.split('-');
  const curYear = parseInt(currentParts[0]);
  const curMonth = parseInt(currentParts[1]);
  const curDay = parseInt(currentParts[2]);

  const minYear = startDate.getFullYear();
  const maxYear = endDate.getFullYear();

  let yearOptions = "";
  for (let y = minYear; y <= maxYear; y++) {
    const isFutureYear = y > todayDate.getFullYear();
    const prefix = isFutureYear ? "🔮 " : "";
    const selected = y === curYear ? "selected" : "";
    yearOptions += `<option value="${y}" ${selected}>${prefix}${y}年</option>`;
  }

  let monthOptions = "";
  const maxInitialMonth = _getMaxSelectableMonth(curYear, endDate);
  const initialMonth = Math.min(curMonth, maxInitialMonth);
  for (let m = 1; m <= maxInitialMonth; m++) {
    const selected = m === initialMonth ? "selected" : "";
    monthOptions += `<option value="${m}" ${selected}>${m}月</option>`;
  }

  let dayOptions = "";
  const daysInMonth = _getMaxSelectableDay(curYear, initialMonth, endDate);
  const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const initialDay = Math.min(curDay, daysInMonth);
  for (let d = 1; d <= daysInMonth; d++) {
    const selected = d === initialDay ? "selected" : "";
    const date = new Date(curYear, initialMonth - 1, d);
    const weekday = weekdays[date.getDay()];
    dayOptions += `<option value="${d}" ${selected}>${d}日 ${weekday}</option>`;
  }

  let periodOptions = TIME_PERIODS.map(p => {
    const selected = p === currentPeriod ? "selected" : "";
    return `<option value="${p}" ${selected}>${p}</option>`;
  }).join("");

  const testBadge = testMode
    ? `<div style="font-size:10px;color:#ff6b6b;background:rgba(255,107,107,0.15);border:1px solid rgba(255,107,107,0.3);border-radius:4px;padding:2px 8px;display:inline-block;margin-top:6px;">🧪 测试专用 · 可前往未来</div>`
    : '';

  const futureRule = testMode
    ? `<div>• <span style="color:#ff6b6b">测试功能</span>：可选择未来日期（最多${TEST_MODE_FUTURE_YEARS}年），🔮 标记为未来日期</div>
       <div>• 前往未来时，好感度和认识角色<span style="color:#5cb85c">保留不变</span>（非还原）</div>`
    : '';

  const selectStyle = "padding:8px 10px;background:#2a2a3e;color:#e0d8c0;border:1px solid #444;border-radius:8px;font-size:14px;";

  const panel = document.createElement("div");
  panel.id = "timeTurnerPanel";
  panel.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:10000;display:flex;align-items:center;justify-content:center;";
  panel.innerHTML = `
    <div style="background:#1a1a2e;border:2px solid #c9a84c;border-radius:16px;padding:28px 32px;max-width:420px;width:90%;color:#e0d8c0;position:relative;">
      <button data-tt-action="close" style="position:absolute;top:12px;right:16px;background:none;border:none;color:#888;font-size:20px;cursor:pointer;">✕</button>
      <div style="text-align:center;margin-bottom:20px;">
        <div style="font-size:2.4em;">⏳</div>
        <div style="font-size:18px;font-weight:bold;color:#c9a84c;margin-top:8px;">时间转换器</div>
        <div style="font-size:12px;color:#888;margin-top:4px;">${unlimited ? '使用次数：无限' : `剩余使用次数：${usesLeft}`} <span style="color:#666">| 累计使用：${data.timeTurner?.totalUses || 0}次</span></div>
        ${testBadge}
      </div>
      <div style="margin-bottom:16px;">
        <label style="font-size:13px;color:#aaa;display:block;margin-bottom:6px;">选择日期</label>
        <div style="display:flex;gap:6px;">
          <select id="tt-year" style="flex:1;${selectStyle}">${yearOptions}</select>
          <select id="tt-month" style="flex:0.6;${selectStyle}">${monthOptions}</select>
          <select id="tt-day" style="flex:0.6;${selectStyle}">${dayOptions}</select>
        </div>
      </div>
      <div style="margin-bottom:20px;">
        <label style="font-size:13px;color:#aaa;display:block;margin-bottom:6px;">选择时段</label>
        <select id="tt-period" style="width:100%;${selectStyle}">${periodOptions}</select>
      </div>
      <div style="font-size:11px;color:#777;margin-bottom:16px;line-height:1.6;">
        <div style="color:#aaa;margin-bottom:4px;">⏳ 使用规则</div>
        <div>• 选择过去的日期和时段，回到那个时间点并获得对应行动次数</div>
        <div>• <span style="color:#5cb85c">保留</span>：道具、课程进度、咒语熟练度、魔药熟练度、探索进度、学院分</div>
        <div>• <span style="color:#dc143c">还原</span>：好感度、认识的角色（返回时恢复到旅行前）</div>
        <div>• 时间旅行中可参与对应时间点的剧情（前置剧情自动视为已完成）</div>
        <div>• 每次行动后会询问是否返回原时间</div>
        <div>• 若时间推进到原时间点，旅行自动结束</div>
        ${futureRule}
      </div>
      <button id="tt-go" style="width:100%;padding:12px;background:${(unlimited || usesLeft > 0) ? 'linear-gradient(135deg,#c9a84c,#a07830)' : '#333'};color:${(unlimited || usesLeft > 0) ? '#1a1a2e' : '#666'};border:none;border-radius:10px;font-size:15px;font-weight:bold;cursor:${(unlimited || usesLeft > 0) ? 'pointer' : 'not-allowed'};">
        ${(unlimited || usesLeft > 0) ? '转动时间转换器' : '使用次数已耗尽'}
      </button>
    </div>
  `;

  document.body.appendChild(panel);

  panel.addEventListener('click', (e) => {
    if (e.target.closest("[data-tt-action='close']")) {
      panel.remove();
      return;
    }
    if (e.target === panel) panel.remove();
  });

  const yearSel = document.getElementById("tt-year");
  const monthSel = document.getElementById("tt-month");
  const daySel = document.getElementById("tt-day");

  function _updateMonths() {
    const y = parseInt(yearSel.value);
    const maxMonth = _getMaxSelectableMonth(y, endDate);
    const curM = parseInt(monthSel.value) || 1;
    monthSel.innerHTML = '';
    for (let m = 1; m <= maxMonth; m++) {
      const opt = document.createElement('option');
      opt.value = m;
      opt.textContent = `${m}月`;
      if (m === Math.min(curM, maxMonth)) opt.selected = true;
      monthSel.appendChild(opt);
    }
  }

  function _updateDays() {
    const y = parseInt(yearSel.value);
    const m = parseInt(monthSel.value);
    const maxDay = _getMaxSelectableDay(y, m, endDate);
    const curD = parseInt(daySel.value);
    const selectedDay = Math.min(curD || 1, maxDay);
    const weekdays = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    daySel.innerHTML = '';
    for (let d = 1; d <= maxDay; d++) {
      const opt = document.createElement('option');
      opt.value = d;
      const date = new Date(y, m - 1, d);
      const weekday = weekdays[date.getDay()];
      opt.textContent = `${d}日 ${weekday}`;
      if (d === selectedDay) opt.selected = true;
      daySel.appendChild(opt);
    }
    _updateWeekday();
  }

  function _updateWeekday() {
    const y = parseInt(yearSel.value);
    const m = parseInt(monthSel.value);
    const d = parseInt(daySel.value);
    const dateStr = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const weekday = document.getElementById("tt-weekday");
    if (weekday) {
      weekday.textContent = `${dateStr} ${_getWeekday(dateStr)}`;
    }
  }

  yearSel.addEventListener('change', () => {
    _updateMonths();
    _updateDays();
  });
  monthSel.addEventListener('change', _updateDays);
  daySel.addEventListener('change', _updateWeekday);

  const goBtn = document.getElementById("tt-go");
  if (goBtn && (unlimited || usesLeft > 0)) {
    goBtn.addEventListener('click', () => {
      const y = parseInt(yearSel.value);
      const m = parseInt(monthSel.value);
      const d = parseInt(daySel.value);
      const targetDate = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const targetPeriod = document.getElementById("tt-period").value;
      _travelTo(targetDate, targetPeriod);
    });
  }
}

function _travelTo(targetDate, targetPeriod) {
  let data = getSave();
  const currentFullDate = data.time?.currentDate || "1991-09-02";
  const currentPeriod = data.time?.nowTime || "上午";
  const currentActions = data.time?.dailyActionLeft ?? 3;
  const targetActions = _periodToAction(targetPeriod);

  if (targetDate === currentFullDate && targetPeriod === currentPeriod) {
    addLog("⏳ 时间转换器嗡嗡作响——你已经在那个时间点了。");
    const panel = document.getElementById("timeTurnerPanel");
    if (panel) panel.remove();
    return;
  }

  const targetDateObj = _parseDate(targetDate);
  const currentDateObj = _parseDate(currentFullDate);
  const isFuture = targetDateObj > currentDateObj
    || (targetDate === currentFullDate && (PERIOD_ORDER[targetPeriod] ?? 0) > (PERIOD_ORDER[currentPeriod] ?? 0));

  if (isFuture && !isTestMode()) {
    addLog("⏳ 时间转换器只能回到过去，无法前往未来。");
    const panel = document.getElementById("timeTurnerPanel");
    if (panel) panel.remove();
    return;
  }

  const travelSnapshots = _createTravelSnapshots(data, isFuture);
  if (isFuture) {
    window.courseAttendance?.recordMissedClassesBetween?.(
      currentFullDate,
      currentActions,
      targetDate,
      targetActions
    );
    data = getSave();
  }

  data.timeTurner = {
    isTraveling: true,
    originalTime: {
      currentDate: currentFullDate,
      nowTime: currentPeriod,
      dailyActionLeft: currentActions,
    },
    ...travelSnapshots,
    isFutureTravel: isFuture,
    travelHistory: [...(data.timeTurner?.travelHistory || []), {
      from: { currentDate: currentFullDate, nowTime: currentPeriod },
      to: { currentDate: targetDate, nowTime: targetPeriod },
    }],
    usesLeft: data.timeTurner?.usesLeft === -1 ? -1 : Math.max(0, (data.timeTurner?.usesLeft ?? 0) - 1),
    totalUses: (data.timeTurner?.totalUses || 0) + 1,
    isTestMode: data.timeTurner?.isTestMode || false,
  };

  data.time.currentDate = targetDate;
  data.time.nowTime = targetPeriod;
  data.time.dailyActionLeft = targetActions;

  data._storyNotified = [];

  const parts = targetDate.split('-');
  data.time.year = parseInt(parts[0]);
  data.time.month = parseInt(parts[1]);
  data.time.day = parseInt(parts[2]);

  setSave(data);

  window.timeSystem.currentDate = targetDate;
  window.timeSystem.nowTime = targetPeriod;
  window.timeSystem.dailyActionLeft = targetActions;
  if (window.syncActionUI) window.syncActionUI();

  const panel = document.getElementById("timeTurnerPanel");
  if (panel) panel.remove();

  if (isFuture) {
    addLog(`🔮⏳ 时间转换器逆转——你来到了未来：${targetDate} ${targetPeriod}。`, 'story');
    addLog(`🧪 测试功能：好感度和认识角色保留不变。`, 'story');
  } else {
    addLog(`⏳ 时间转换器转动——你回到了 ${targetDate} ${targetPeriod}。`, 'story');
    addLog(`⏳ 提示：道具和课程进度会保留，好感度变化在返回时还原。`, 'story');
  }

  if (window.questEngine?.notify) window.questEngine.notify("timeTurnerUse");

  _checkTimeBeforeStartAchievement(targetDate, targetPeriod);

  if (window.refreshAll) window.refreshAll();
  window.refreshCoursePanel?.();
}

function _checkTimeBeforeStartAchievement(targetDate, targetPeriod) {
  const START_DATE = "1991-09-02";
  const START_PERIOD = "夜晚";
  const PERIOD_ORDER = { "上午": 0, "下午": 1, "夜晚": 2, "深夜": 3 };

  if (targetDate < START_DATE) {
    unlockAchievement("hidden_time_before_start");
    return;
  }

  if (targetDate === START_DATE && PERIOD_ORDER[targetPeriod] < PERIOD_ORDER[START_PERIOD]) {
    unlockAchievement("hidden_time_before_start");
  }
}

function _renderReturnPanel() {
  const orig = getOriginalTime();
  if (!orig) return;

  const data = getSave();
  const isFuture = !!data.timeTurner?.isFutureTravel;

  let existing = document.getElementById("timeTurnerPanel");
  if (existing) existing.remove();

  const travelLabel = isFuture ? "你正在未来的时间中" : "你正在过去的时间中";
  const returnRules = isFuture
    ? `<div>• <span style="color:#5cb85c">保留</span>：道具、课程、咒语、魔药、探索进度、学院分</div>
       <div>• <span style="color:#5cb85c">保留</span>：好感度、认识的角色（未来旅行不还原）</div>`
    : `<div>• <span style="color:#5cb85c">保留</span>：道具、课程、咒语、魔药、探索进度、学院分</div>
       <div>• <span style="color:#dc143c">还原</span>：好感度、认识的角色</div>`;

  const testBadge = isFuture
    ? `<div style="font-size:10px;color:#ff6b6b;background:rgba(255,107,107,0.15);border:1px solid rgba(255,107,107,0.3);border-radius:4px;padding:2px 8px;display:inline-block;margin-top:6px;">🧪 测试专用 · 未来旅行</div>`
    : '';

  const panel = document.createElement("div");
  panel.id = "timeTurnerPanel";
  panel.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:10000;display:flex;align-items:center;justify-content:center;";
  panel.innerHTML = `
    <div style="background:#1a1a2e;border:2px solid #c9a84c;border-radius:16px;padding:28px 32px;max-width:380px;width:90%;color:#e0d8c0;position:relative;">
      <button data-tt-action="close" style="position:absolute;top:12px;right:16px;background:none;border:none;color:#888;font-size:20px;cursor:pointer;">✕</button>
      <div style="text-align:center;margin-bottom:20px;">
        <div style="font-size:2.4em;">⏳</div>
        <div style="font-size:18px;font-weight:bold;color:#c9a84c;margin-top:8px;">时间转换器</div>
        <div style="font-size:12px;color:#888;margin-top:4px;">${travelLabel}</div>
        ${testBadge}
      </div>
      <div style="background:#2a2a3e;border-radius:8px;padding:14px;margin-bottom:16px;">
        <div style="font-size:12px;color:#888;margin-bottom:8px;">原时间节点</div>
        <div style="font-size:15px;color:#c9a84c;">📅 ${orig.currentDate} ${orig.nowTime}</div>
        <div style="font-size:12px;color:#888;margin-top:6px;">剩余行动次数：${orig.dailyActionLeft}</div>
      </div>
      <div style="font-size:11px;color:#777;margin-bottom:16px;line-height:1.5;">
        <div style="color:#aaa;margin-bottom:4px;">返回规则</div>
        ${returnRules}
      </div>
      <button id="tt-return" style="width:100%;padding:12px;background:linear-gradient(135deg,#c9a84c,#a07830);color:#1a1a2e;border:none;border-radius:10px;font-size:15px;font-weight:bold;cursor:pointer;">
        返回原时间
      </button>
    </div>
  `;

  document.body.appendChild(panel);

  panel.addEventListener('click', (e) => {
    if (e.target.closest("[data-tt-action='close']")) {
      panel.remove();
      return;
    }
    if (e.target === panel) panel.remove();
  });

  document.getElementById("tt-return")?.addEventListener('click', () => {
    _returnToOriginal();
  });
}

function _returnToOriginal() {
  const data = getSave();
  const orig = data.timeTurner?.originalTime;
  if (!orig) return;

  const preservedState = _snapshotSaveKeys(data, TIME_TURNER_PRESERVED_KEYS);
  const wasFutureTravel = !!data.timeTurner.isFutureTravel;

  data.time.currentDate = orig.currentDate;
  data.time.nowTime = orig.nowTime;
  data.time.dailyActionLeft = orig.dailyActionLeft;

  const parts = orig.currentDate.split('-');
  data.time.year = parseInt(parts[0]);
  data.time.month = parseInt(parts[1]);
  data.time.day = parseInt(parts[2]);

  if (data.timeTurner.affinitySnapshot && !wasFutureTravel) {
    data.affinity = _cloneSaveSlice(data.timeTurner.affinitySnapshot);
  }
  if (data.timeTurner.knownCharactersSnapshot && !wasFutureTravel) {
    data.knownCharacters = [...data.timeTurner.knownCharactersSnapshot];
  }

  _restoreSaveKeys(data, preservedState);
  if (wasFutureTravel && data.timeTurner.courseSnapshot) {
    data.course = _cloneSaveSlice(data.timeTurner.courseSnapshot);
  }
  _clearTravelState(data.timeTurner);

  setSave(data);

  window.timeSystem.currentDate = orig.currentDate;
  window.timeSystem.nowTime = orig.nowTime;
  window.timeSystem.dailyActionLeft = orig.dailyActionLeft;
  if (window.syncActionUI) window.syncActionUI();

  const panel = document.getElementById("timeTurnerPanel");
  if (panel) panel.remove();

  if (wasFutureTravel) {
    addLog(`🔮⏳ 时间转换器再次转动——你从未来回到了 ${orig.currentDate} ${orig.nowTime}。`, 'story');
    addLog(`🧪 测试功能：好感度和认识角色保留不变。`, 'story');
  } else {
    addLog(`⏳ 时间转换器再次转动——你回到了 ${orig.currentDate} ${orig.nowTime}。`, 'story');
    addLog(`⏳ 道具、课程和咒语进度已保留，好感度已还原。`, 'story');
  }

  if (window.refreshAll) window.refreshAll();
  window.refreshCoursePanel?.();
}

function _checkAutoEnd() {
  if (!isTimeTraveling()) return;
  const data = getSave();
  const orig = data.timeTurner?.originalTime;
  if (!orig) return;

  if (data.timeTurner.isFutureTravel) return;

  const currentDate = data.time?.currentDate || "1991-09-02";
  const currentPeriod = data.time?.nowTime || "上午";

  if (_hasReachedOriginal(currentDate, currentPeriod, orig.currentDate, orig.nowTime)) {
    addLog(`⏳ 时间已追平原时间点，时间旅行自动结束。`, 'story');
    _returnToOriginal();
  }
}

function promptReturnAfterAction() {
  if (!isTimeTraveling()) return;

  _checkAutoEnd();
  if (!isTimeTraveling()) return;

  const orig = getOriginalTime();
  if (!orig) return;

  let existing = document.getElementById("ttReturnPrompt");
  if (existing) existing.remove();

  const prompt = document.createElement("div");
  prompt.id = "ttReturnPrompt";
  prompt.style.cssText = "position:fixed;bottom:8px;right:8px;background:#1a1a2e;border:1px solid #c9a84c;border-radius:8px;padding:8px 12px;color:#e0d8c0;z-index:9998;display:flex;align-items:center;gap:10px;box-shadow:0 2px 10px rgba(0,0,0,0.4);max-width:280px;font-size:12px;";
  prompt.innerHTML = `
    <span style="font-size:1.2em;">⏳</span>
    <div style="flex:1;">
      <div style="color:#c9a84c;font-weight:bold;font-size:12px;">返回原时间？</div>
      <div style="color:#888;margin-top:1px;font-size:10px;">${orig.currentDate} ${orig.nowTime}</div>
    </div>
    <button id="tt-prompt-yes" style="padding:4px 10px;background:linear-gradient(135deg,#c9a84c,#a07830);color:#1a1a2e;border:none;border-radius:6px;font-size:11px;font-weight:bold;cursor:pointer;">返回</button>
    <button id="tt-prompt-no" style="padding:4px 10px;background:#333;color:#aaa;border:1px solid #555;border-radius:6px;font-size:11px;cursor:pointer;">留下</button>
  `;

  document.body.appendChild(prompt);

  document.getElementById("tt-prompt-yes")?.addEventListener('click', () => {
    prompt.remove();
    _returnToOriginal();
  });

  document.getElementById("tt-prompt-no")?.addEventListener('click', () => {
    prompt.remove();
  });

  setTimeout(() => {
    const p = document.getElementById("ttReturnPrompt");
    if (p) p.remove();
  }, 15000);
}

function grantTimeTurner(uses = 3) {
  const data = getSave();
  if (!data.timeTurner) {
    data.timeTurner = { isTraveling: false, originalTime: null, travelHistory: [], usesLeft: uses, totalUses: 0 };
  } else {
    data.timeTurner.usesLeft = (data.timeTurner.usesLeft || 0) + uses;
  }
  setSave(data);
  addLog(`⏳ 你获得了时间转换器！（${uses}次使用机会）`, 'story');
  if (window.renderBag) window.renderBag();
}

window.openTimeTurnerPanel = openTimeTurnerPanel;
window.isTimeTraveling = isTimeTraveling;
window.promptReturnAfterAction = promptReturnAfterAction;
window.grantTimeTurner = grantTimeTurner;
window.getTimeTurnerUsesLeft = getUsesLeft;
window.checkTimeTurnerAutoEnd = _checkAutoEnd;

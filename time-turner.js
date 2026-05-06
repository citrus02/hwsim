import { getSave, setSave, addLog } from './save-system.js';

const TIME_PERIODS = ["早晨", "中午", "夜晚"];

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

function _periodToAction(period) {
  if (period === "早晨") return 3;
  if (period === "中午") return 2;
  if (period === "夜晚") return 1;
  return 0;
}

function _dateGTE(a, b) {
  return a > b || a === b;
}

const PERIOD_ORDER = { "早晨": 0, "中午": 1, "夜晚": 2, "深夜": 3 };

function _hasReachedOriginal(currentDate, currentPeriod, origDate, origPeriod) {
  if (currentDate > origDate) return true;
  if (currentDate < origDate) return false;
  return (PERIOD_ORDER[currentPeriod] ?? 0) >= (PERIOD_ORDER[origPeriod] ?? 0);
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
  const currentPeriod = data.time?.nowTime || "早晨";

  let existing = document.getElementById("timeTurnerPanel");
  if (existing) existing.remove();

  const startDate = _parseDate("1991-09-02");
  const todayDate = _parseDate(currentDate);

  let dateOptions = "";
  let d = new Date(startDate);
  while (d <= todayDate) {
    const ds = _dateStr(d);
    const selected = ds === currentDate ? "selected" : "";
    dateOptions += `<option value="${ds}" ${selected}>${ds}</option>`;
    d.setDate(d.getDate() + 1);
  }

  let periodOptions = TIME_PERIODS.map(p => {
    const selected = p === currentPeriod ? "selected" : "";
    return `<option value="${p}" ${selected}>${p}</option>`;
  }).join("");

  const panel = document.createElement("div");
  panel.id = "timeTurnerPanel";
  panel.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:10000;display:flex;align-items:center;justify-content:center;";
  panel.innerHTML = `
    <div style="background:#1a1a2e;border:2px solid #c9a84c;border-radius:16px;padding:28px 32px;max-width:420px;width:90%;color:#e0d8c0;position:relative;">
      <button onclick="document.getElementById('timeTurnerPanel').remove()" style="position:absolute;top:12px;right:16px;background:none;border:none;color:#888;font-size:20px;cursor:pointer;">✕</button>
      <div style="text-align:center;margin-bottom:20px;">
        <div style="font-size:2.4em;">⏳</div>
        <div style="font-size:18px;font-weight:bold;color:#c9a84c;margin-top:8px;">时间转换器</div>
        <div style="font-size:12px;color:#888;margin-top:4px;">${unlimited ? '使用次数：无限' : `剩余使用次数：${usesLeft}`} <span style="color:#666">| 累计使用：${data.timeTurner?.totalUses || 0}次</span></div>
      </div>
      <div style="margin-bottom:16px;">
        <label style="font-size:13px;color:#aaa;display:block;margin-bottom:6px;">选择日期</label>
        <select id="tt-date" style="width:100%;padding:8px 12px;background:#2a2a3e;color:#e0d8c0;border:1px solid #444;border-radius:8px;font-size:14px;">
          ${dateOptions}
        </select>
      </div>
      <div style="margin-bottom:20px;">
        <label style="font-size:13px;color:#aaa;display:block;margin-bottom:6px;">选择时段</label>
        <select id="tt-period" style="width:100%;padding:8px 12px;background:#2a2a3e;color:#e0d8c0;border:1px solid #444;border-radius:8px;font-size:14px;">
          ${periodOptions}
        </select>
      </div>
      <div style="font-size:11px;color:#777;margin-bottom:16px;line-height:1.6;">
        <div style="color:#aaa;margin-bottom:4px;">⏳ 使用规则</div>
        <div>• 选择过去的日期和时段，回到那个时间点并获得对应行动次数</div>
        <div>• <span style="color:#5cb85c">保留</span>：道具、课程进度、咒语熟练度、魔药熟练度、探索进度、学院分</div>
        <div>• <span style="color:#dc143c">还原</span>：好感度、认识的角色（返回时恢复到旅行前）</div>
        <div>• 每次行动后会询问是否返回原时间</div>
        <div>• 若时间推进到原时间点，旅行自动结束</div>
      </div>
      <button id="tt-go" style="width:100%;padding:12px;background:${(unlimited || usesLeft > 0) ? 'linear-gradient(135deg,#c9a84c,#a07830)' : '#333'};color:${(unlimited || usesLeft > 0) ? '#1a1a2e' : '#666'};border:none;border-radius:10px;font-size:15px;font-weight:bold;cursor:${(unlimited || usesLeft > 0) ? 'pointer' : 'not-allowed'};">
        ${(unlimited || usesLeft > 0) ? '转动时间转换器' : '使用次数已耗尽'}
      </button>
    </div>
  `;

  document.body.appendChild(panel);

  panel.addEventListener('click', (e) => {
    if (e.target === panel) panel.remove();
  });

  const goBtn = document.getElementById("tt-go");
  if (goBtn && (unlimited || usesLeft > 0)) {
    goBtn.addEventListener('click', () => {
      const targetDate = document.getElementById("tt-date").value;
      const targetPeriod = document.getElementById("tt-period").value;
      _travelTo(targetDate, targetPeriod);
    });
  }
}

function _travelTo(targetDate, targetPeriod) {
  const data = getSave();
  const currentFullDate = data.time?.currentDate || "1991-09-02";
  const currentPeriod = data.time?.nowTime || "早晨";
  const currentActions = data.time?.dailyActionLeft ?? 3;

  if (targetDate === currentFullDate && targetPeriod === currentPeriod) {
    addLog("⏳ 时间转换器嗡嗡作响——你已经在那个时间点了。");
    const panel = document.getElementById("timeTurnerPanel");
    if (panel) panel.remove();
    return;
  }

  const affinitySnapshot = data.affinity ? JSON.parse(JSON.stringify(data.affinity)) : {};
  const knownCharactersSnapshot = data.knownCharacters ? [...data.knownCharacters] : [];

  data.timeTurner = {
    isTraveling: true,
    originalTime: {
      currentDate: currentFullDate,
      nowTime: currentPeriod,
      dailyActionLeft: currentActions,
    },
    affinitySnapshot,
    knownCharactersSnapshot,
    travelHistory: [...(data.timeTurner?.travelHistory || []), {
      from: { currentDate: currentFullDate, nowTime: currentPeriod },
      to: { currentDate: targetDate, nowTime: targetPeriod },
    }],
    usesLeft: data.timeTurner?.usesLeft === -1 ? -1 : Math.max(0, (data.timeTurner?.usesLeft ?? 0) - 1),
    totalUses: (data.timeTurner?.totalUses || 0) + 1,
  };

  const targetActions = _periodToAction(targetPeriod);
  data.time.currentDate = targetDate;
  data.time.nowTime = targetPeriod;
  data.time.dailyActionLeft = targetActions;

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

  addLog(`⏳ 时间转换器转动——你回到了 ${targetDate} ${targetPeriod}。`, 'story');
  addLog(`⏳ 提示：道具和课程进度会保留，好感度变化在返回时还原。`, 'story');

  if (window.questEngine?.notify) window.questEngine.notify("timeTurnerUse");

  if (window.refreshAll) window.refreshAll();
}

function _renderReturnPanel() {
  const orig = getOriginalTime();
  if (!orig) return;

  let existing = document.getElementById("timeTurnerPanel");
  if (existing) existing.remove();

  const panel = document.createElement("div");
  panel.id = "timeTurnerPanel";
  panel.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:10000;display:flex;align-items:center;justify-content:center;";
  panel.innerHTML = `
    <div style="background:#1a1a2e;border:2px solid #c9a84c;border-radius:16px;padding:28px 32px;max-width:380px;width:90%;color:#e0d8c0;position:relative;">
      <button onclick="document.getElementById('timeTurnerPanel').remove()" style="position:absolute;top:12px;right:16px;background:none;border:none;color:#888;font-size:20px;cursor:pointer;">✕</button>
      <div style="text-align:center;margin-bottom:20px;">
        <div style="font-size:2.4em;">⏳</div>
        <div style="font-size:18px;font-weight:bold;color:#c9a84c;margin-top:8px;">时间转换器</div>
        <div style="font-size:12px;color:#888;margin-top:4px;">你正在过去的时间中</div>
      </div>
      <div style="background:#2a2a3e;border-radius:8px;padding:14px;margin-bottom:16px;">
        <div style="font-size:12px;color:#888;margin-bottom:8px;">原时间节点</div>
        <div style="font-size:15px;color:#c9a84c;">📅 ${orig.currentDate} ${orig.nowTime}</div>
        <div style="font-size:12px;color:#888;margin-top:6px;">剩余行动次数：${orig.dailyActionLeft}</div>
      </div>
      <div style="font-size:11px;color:#777;margin-bottom:16px;line-height:1.5;">
        <div style="color:#aaa;margin-bottom:4px;">返回规则</div>
        <div>• <span style="color:#5cb85c">保留</span>：道具、课程、咒语、魔药、探索进度、学院分</div>
        <div>• <span style="color:#dc143c">还原</span>：好感度、认识的角色</div>
      </div>
      <button id="tt-return" style="width:100%;padding:12px;background:linear-gradient(135deg,#c9a84c,#a07830);color:#1a1a2e;border:none;border-radius:10px;font-size:15px;font-weight:bold;cursor:pointer;">
        返回原时间
      </button>
    </div>
  `;

  document.body.appendChild(panel);

  panel.addEventListener('click', (e) => {
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

  const currentBag = data.bag ? JSON.parse(JSON.stringify(data.bag)) : null;
  const currentCourse = data.course ? JSON.parse(JSON.stringify(data.course)) : null;
  const currentSpellProf = data.spellProficiency ? JSON.parse(JSON.stringify(data.spellProficiency)) : null;
  const currentPotion = data.potion ? JSON.parse(JSON.stringify(data.potion)) : null;
  const currentExploreRate = data.exploreRate ? JSON.parse(JSON.stringify(data.exploreRate)) : null;
  const currentHousePoints = data.housePoints ? JSON.parse(JSON.stringify(data.housePoints)) : null;

  data.time.currentDate = orig.currentDate;
  data.time.nowTime = orig.nowTime;
  data.time.dailyActionLeft = orig.dailyActionLeft;

  const parts = orig.currentDate.split('-');
  data.time.year = parseInt(parts[0]);
  data.time.month = parseInt(parts[1]);
  data.time.day = parseInt(parts[2]);

  if (data.timeTurner.affinitySnapshot) {
    data.affinity = JSON.parse(JSON.stringify(data.timeTurner.affinitySnapshot));
  }
  if (data.timeTurner.knownCharactersSnapshot) {
    data.knownCharacters = [...data.timeTurner.knownCharactersSnapshot];
  }

  if (currentBag) data.bag = currentBag;
  if (currentCourse) data.course = currentCourse;
  if (currentSpellProf) data.spellProficiency = currentSpellProf;
  if (currentPotion) data.potion = currentPotion;
  if (currentExploreRate) data.exploreRate = currentExploreRate;
  if (currentHousePoints) data.housePoints = currentHousePoints;

  data.timeTurner.isTraveling = false;
  data.timeTurner.originalTime = null;
  data.timeTurner.affinitySnapshot = null;
  data.timeTurner.knownCharactersSnapshot = null;

  setSave(data);

  window.timeSystem.currentDate = orig.currentDate;
  window.timeSystem.nowTime = orig.nowTime;
  window.timeSystem.dailyActionLeft = orig.dailyActionLeft;
  if (window.syncActionUI) window.syncActionUI();

  const panel = document.getElementById("timeTurnerPanel");
  if (panel) panel.remove();

  addLog(`⏳ 时间转换器再次转动——你回到了 ${orig.currentDate} ${orig.nowTime}。`, 'story');
  addLog(`⏳ 道具、课程和咒语进度已保留，好感度已还原。`, 'story');

  if (window.refreshAll) window.refreshAll();
}

function _checkAutoEnd() {
  if (!isTimeTraveling()) return;
  const data = getSave();
  const orig = data.timeTurner?.originalTime;
  if (!orig) return;

  const currentDate = data.time?.currentDate || "1991-09-02";
  const currentPeriod = data.time?.nowTime || "早晨";

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

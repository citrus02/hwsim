// save-system.js — 存档核心读写 + 数据结构 + 日志 + 时间轴

export const SAVE_KEY = "hogwarts";
const SAVE_SLOT_KEY = "hogwarts_slots";
const SLOT_COUNT = 10;

const allCourseList = [
  "变形术","魔咒学","魔药学","黑魔法防御术","草药学","魔法史","天文学","飞行课",
  "算术占卜","古代魔文","占卜学","保护神奇动物","麻瓜研究","幻影移形","炼金术"
];

function getDefaultSave() {
  const course = {};
  allCourseList.forEach(c => course[c] = 0);
  return {
    year: 1991, month: 9, day: 2, actions: 1,
    log: [], timeline: [],
    player: { name: "无名巫师", era: "", house: "", blood: "", wand: "", wandAccepted: true, galleons: 10 },
    bag: { material: [], potion: [], item: [], wizardCard: [] },
    course,
    potion: {},
    time: { year: 1991, month: 9, day: 2, dailyActionLeft: 1, nowTime: "夜晚", currentDate: "1991-09-02" }
  };
}

export function getSave() {
  try {
    const data = localStorage.getItem(SAVE_KEY);
    return data ? JSON.parse(data) : getDefaultSave();
  } catch (e) { return getDefaultSave(); }
}

export function setSave(data) {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(data)); }
  catch (e) { console.error('⚠️ 存档失败:', e); }
}

export function resetAll() { localStorage.clear(); location.reload(); }

export function restartGame() {
  const old = getSave();
  const course = {};
  allCourseList.forEach(c => course[c] = 0);
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
    story: { completed: {}, active: null }
  };
  setSave(fresh);

  if (window.loadTimeFromSave) window.loadTimeFromSave();
  if (window.timeSystem) {
    window.timeSystem.dailyActionLeft = 1;
    window.timeSystem.nowTime = "夜晚";
    window.timeSystem.currentDate = "1991-09-02";
  }
  if (window.syncActionUI) window.syncActionUI();

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
  const curTime = d.time?.nowTime || "早晨";
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
      `<label style="display:inline-flex;align-items:center;white-space:nowrap;cursor:pointer;margin-right:12px"><input type="checkbox" data-filter="story" ${filters.story ? 'checked' : ''} style="margin-right:2px"><span style="font-size:11px;color:rgba(255,255,255,0.7)">旁白</span></label>` +
      `<label style="display:inline-flex;align-items:center;white-space:nowrap;cursor:pointer;margin-right:12px"><input type="checkbox" data-filter="npc" ${filters.npc ? 'checked' : ''} style="margin-right:2px"><span style="font-size:11px;background:linear-gradient(to right,#dc143c,#ffd700,#4169e1,#2e8b2e);-webkit-background-clip:text;-webkit-text-fill-color:transparent">角色</span></label>` +
      `<label style="display:inline-flex;align-items:center;white-space:nowrap;cursor:pointer"><input type="checkbox" data-filter="player" ${filters.player ? 'checked' : ''} style="margin-right:2px"><span style="font-size:11px;color:#9999cc">自己</span></label>`;

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
    slytherin: "#2e8b2e",
    ravenclaw: "#6b9fff",
    hufflepuff: "#ffd700"
  };
  
  recent.forEach(t => {
    const p = document.createElement("p");
    
    let logType = 'player';
    let displayText = t;
    let house = '';
    
    const npcMatch = t.match(/\[NPC\](\[(\w+)\])?/);
    const storyMatch = t.match(/\[story\]/);
    if (npcMatch) {
      logType = 'npc';
      displayText = t.replace(/\[NPC\](\[\w+\])?\s*/, '');
      if (npcMatch[2]) house = npcMatch[2];
      p.className = "log-npc";
    } else if (storyMatch || storyKeywords.some(kw => t.includes(kw))) {
      logType = 'story';
      displayText = t.replace(/\[story\]\s*/, '');
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
  { date: "1960-01-09", text: "西弗勒斯・斯内普 生日", isBirthday: true, character: "西弗勒斯・斯内普" },
  { date: "1960-03-27", text: "莱姆斯・卢平 生日", isBirthday: true, character: "莱姆斯・卢平" },
  { date: "1960-11-19", text: "小天狼星・布莱克 生日", isBirthday: true, character: "小天狼星・布莱克" },
  { date: "1979-09-19", text: "赫敏・格兰杰 生日", isBirthday: true, character: "赫敏・格兰杰" },
  { date: "1980-03-01", text: "罗恩・韦斯莱 生日", isBirthday: true, character: "罗恩・韦斯莱" },
  { date: "1980-07-31", text: "哈利・波特 生日", isBirthday: true, character: "哈利・波特" },
  { date: "1981-08-11", text: "金妮・韦斯莱 生日", isBirthday: true, character: "金妮・韦斯莱" },
  { date: "1991-07-31", text: "哈利・波特11岁生日，鲁伯・海格到访，告知巫师身世" },
  { date: "1991-08-15", text: "哈利・波特前往对角巷，购买冬青木凤凰羽毛魔杖" },
  { date: "1991-09-01", text: "9¾站台，哈利・波特结识罗恩・韦斯莱、赫敏・格兰杰" },
  { date: "1991-09-02", text: "分院仪式之夜", storyId: "story_1_1" },
  { date: "1991-09-15", text: "走廊里的飞行课", storyId: "story_1_2" },
  { date: "1991-10-31", text: "万圣节的尖叫", storyId: "story_1_3" },
  { date: "1991-12-01", text: "三楼走廊的秘密", storyId: "story_1_4" },
  { date: "1991-12-25", text: "圣诞节的隐形衣", storyId: "story_1_5" },
  { date: "1992-06-01", text: "魔法石之夜", storyId: "story_1_6" },
  { date: "1992-08-01", text: "多比警告哈利・波特，阻止他返回霍格沃茨" },
  { date: "1992-09-01", text: "哈利・波特与罗恩・韦斯莱驾驶飞车撞断打人柳" },
  { date: "1992-10-31", text: "墙上的血字", storyId: "story_2_1" },
  { date: "1992-12-10", text: "决斗俱乐部的蛇", storyId: "story_2_2" },
  { date: "1993-05-25", text: "密室关闭", storyId: "story_2_3" },
  { date: "1993-07-15", text: "哈利・波特逃离女贞路，小天狼星・布莱克越狱消息公布" },
  { date: "1993-09-01", text: "莱姆斯・卢平就任黑魔法防御术教授" },
  { date: "1993-09-01", text: "摄魂怪", storyId: "story_3_1" },
  { date: "1993-10-01", text: "摄魂怪进驻学校，哈利・波特开始学习守护神咒" },
  { date: "1994-04-15", text: "尖叫棚屋的真相", storyId: "story_3_2" },
  { date: "1994-06-06", text: "赫敏・格兰杰使用时间转换器，拯救巴克比克与小天狼星・布莱克" },
  { date: "1994-06-24", text: "伏地魔复活，制造纳吉尼魂器" },
  { date: "1994-08-15", text: "魁地奇世界杯，食死徒现身，黑魔标记重现" },
  { date: "1994-10-01", text: "三强争霸赛重启，布斯巴顿与德姆斯特朗抵达" },
  { date: "1994-10-15", text: "火焰杯的选择", storyId: "story_4_1" },
  { date: "1994-11-01", text: "火焰杯选中哈利・波特成为第四位勇士" },
  { date: "1994-12-25", text: "圣诞舞会，罗恩・韦斯莱与赫敏・格兰杰爆发矛盾" },
  { date: "1995-02-24", text: "黑湖任务，哈利・波特救下罗恩・韦斯莱与芙蓉・德拉库尔妹妹" },
  { date: "1995-06-24", text: "墓地的闪光", storyId: "story_4_2" },
  { date: "1995-08-02", text: "哈利・波特遭遇摄魂怪，使用守护神咒受审" },
  { date: "1995-09-01", text: "多洛雷斯・乌姆里奇就任，开始独裁统治" },
  { date: "1995-09-10", text: "粉色的独裁", storyId: "story_5_1" },
  { date: "1995-10-05", text: "邓布利多军正式成立" },
  { date: "1996-01-02", text: "神秘事务司大战，小天狼星・布莱克牺牲" },
  { date: "1996-06-01", text: "乌姆里奇下台，霍格沃茨进入危机；阿不思・邓布利多摧毁冈特戒指魂器" },
  { date: "1996-09-01", text: "霍拉斯・斯拉格霍恩任教，德拉科・马尔福执行暗杀邓布利多任务" },
  { date: "1996-09-15", text: "王子的笔记", storyId: "story_6_1" },
  { date: "1996-10-01", text: "哈利・波特获得混血王子课本，魔药天赋觉醒" },
  { date: "1996-12-01", text: "阿不思・邓布利多开始讲解魂器真相" },
  { date: "1997-03-01", text: "阿不思・邓布利多带哈利・波特寻找魂器，身受重伤" },
  { date: "1997-06-01", text: "天文塔的绿光", storyId: "story_6_2" },
  { date: "1997-06-30", text: "天文塔决战，阿不思・邓布利多陨落" },
  { date: "1997-07-27", text: "七哈利转移计划，海德薇死亡，乔治・韦斯莱失一耳" },
  { date: "1997-09-01", text: "铁三角开始荒野逃亡，寻找魂器" },
  { date: "1998-01-05", text: "赫敏・格兰杰销毁斯莱特林挂坠盒魂器" },
  { date: "1998-02-01", text: "三人得知死亡圣器传说" },
  { date: "1998-03-01", text: "马尔福庄园被俘，多比牺牲" },
  { date: "1998-04-01", text: "抢劫古灵阁，赫敏・格兰杰销毁赫奇帕奇金杯魂器" },
  { date: "1998-05-01", text: "最后的战斗", storyId: "story_7_1" },
  { date: "1998-05-02", text: "霍格沃茨大战全面爆发" },
  { date: "1998-05-08", text: "霍格沃茨重建，第二次巫师战争结束" },
  { date: "1999-09-01", text: "金斯莱・沙克尔成为魔法部长，开启和平时代" },
  { date: "2017-09-01", text: "十九年后，国王十字车站送别孩子们入学" }
];

function generateAllEvents() {
  const birthdays = baseEvents.filter(e => e.isBirthday);
  const story = baseEvents.filter(e => !e.isBirthday);
  const all = [...story];
  for (let y = 1990; y <= 2018; y++) {
    birthdays.forEach(b => {
      const [, m, d] = b.date.split('-');
      all.push({ date: `${y}-${m}-${d}`, text: `🎂 ${b.character} 生日快乐`, isAutoBirthday: true });
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
  const isAvailable = evt && !isCompleted && today >= evt.dateRange[0] && today <= evt.dateRange[1]
    && (!evt.prerequisite || storyData.completed[evt.prerequisite]);

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
    return data ? JSON.parse(data) : Array(SLOT_COUNT).fill(null);
  } catch (e) { return Array(SLOT_COUNT).fill(null); }
}

export function saveAllSlots(slots) {
  localStorage.setItem(SAVE_SLOT_KEY, JSON.stringify(slots));
}

// 全局挂载
window.saveSys = { getSave, setSave, loadPlayer, savePlayer, loadTime, saveTime, addLog, resetAll, checkYearUpgrade };
window.addLog = addLog;
window.doStudyLog = (text) => addLog(text);
window.doExploreLog = window.doStudyLog;
window.renderLog = renderLog;
window.renderTimeline = renderTimeline;
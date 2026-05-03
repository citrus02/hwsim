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
    year: 1991, month: 9, day: 2, actions: 3,
    log: [], timeline: [],
    player: { name: "无名巫师", era: "", house: "", blood: "", wand: "", wandAccepted: true, galleons: 10 },
    bag: { material: [], potion: [], item: [], wizardCard: [] },
    course,
    potion: {},
    time: { dailyActionLeft: 3, nowTime: "早晨", currentDate: "1991-09-02" }
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

export function getYearGrade() {
  const data = getSave();
  // 兼容两种存档结构：data.time.year（新）和 data.year（旧）
  const year = data.time?.year ?? data.year ?? 1991;
  return year - 1990;
}

export function getPlayerHouse() {
  const data = getSave();
  return data.player?.house || "";
}

export function checkYearUpgrade() {
  const data = getSave();
  // 兼容两种存档结构：time子对象（新）和根层（旧）
  const month = data.time?.month ?? data.month;
  const day   = data.time?.day   ?? data.day;
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

export function addLog(text) {
  const d = getSave();
  if (!d.log) d.log = [];
  const curDate = d.time?.currentDate || "1991-09-02";
  const curTime = d.time?.nowTime || "早晨";
  d.log.push(`[${curDate} ${curTime}] ${text}`);
  setSave(d);
  if (window.renderLog) window.renderLog();
}

export function renderLog() {
  const data = getSave();
  const el = document.getElementById("log");
  if (!el) return;
  if (!Array.isArray(data.log)) data.log = []; 
  el.innerHTML = "";
  data.log.forEach(t => {
    const p = document.createElement("p");
    p.innerText = t;
    el.appendChild(p);
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
  { date: "1991-09-02", text: "分院仪式，哈利・波特、罗恩・韦斯莱、赫敏・格兰杰进入格兰芬多" },
  { date: "1991-09-15", text: "哈利・波特入选格兰芬多魁地奇找球手" },
  { date: "1991-10-31", text: "万圣节巨怪入侵，铁三角正式结盟" },
  { date: "1991-12-01", text: "哈利・波特发现三头犬路威与魔法石的秘密" },
  { date: "1991-12-25", text: "哈利・波特收到父亲的隐形衣，开始夜间探索" },
  { date: "1992-06-01", text: "三人组闯过机关守护魔法石" },
  { date: "1992-06-02", text: "哈利・波特击退伏地魔与奇洛・奎里纳斯，魔法石保全" },
  { date: "1992-08-01", text: "多比警告哈利・波特，阻止他返回霍格沃茨" },
  { date: "1992-09-01", text: "哈利・波特与罗恩・韦斯莱驾驶飞车撞断打人柳" },
  { date: "1992-10-01", text: "密室开启，麻瓜出身学生开始被石化" },
  { date: "1992-12-01", text: "哈利・波特展现蛇语，被怀疑为斯莱特林继承人" },
  { date: "1993-03-01", text: "哈利・波特捡到里德尔日记，窥见50年前真相" },
  { date: "1993-06-01", text: "金妮・韦斯莱被掳入密室" },
  { date: "1993-06-02", text: "哈利・波特斩杀蛇怪，销毁里德尔日记魂器" },
  { date: "1993-07-15", text: "哈利・波特逃离女贞路，小天狼星・布莱克越狱消息公布" },
  { date: "1993-09-01", text: "莱姆斯・卢平就任黑魔法防御术教授" },
  { date: "1993-10-01", text: "摄魂怪进驻学校，哈利・波特开始学习守护神咒" },
  { date: "1994-04-15", text: "尖叫棚屋真相揭开：小天狼星・布莱克无辜，小矮星・彼得是叛徒" },
  { date: "1994-06-06", text: "赫敏・格兰杰使用时间转换器，拯救巴克比克与小天狼星・布莱克" },
  { date: "1994-06-24", text: "伏地魔复活，制造纳吉尼魂器" },
  { date: "1994-08-15", text: "魁地奇世界杯，食死徒现身，黑魔标记重现" },
  { date: "1994-10-01", text: "三强争霸赛重启，布斯巴顿与德姆斯特朗抵达" },
  { date: "1994-11-01", text: "火焰杯选中哈利・波特成为第四位勇士" },
  { date: "1994-12-25", text: "圣诞舞会，罗恩・韦斯莱与赫敏・格兰杰爆发矛盾" },
  { date: "1995-02-24", text: "黑湖任务，哈利・波特救下罗恩・韦斯莱与芙蓉・德拉库尔妹妹" },
  { date: "1995-06-24", text: "三强杯成为门钥匙，塞德里克・迪戈里被杀，伏地魔复活" },
  { date: "1995-08-02", text: "哈利・波特遭遇摄魂怪，使用守护神咒受审" },
  { date: "1995-09-01", text: "多洛雷斯・乌姆里奇就任，开始独裁统治" },
  { date: "1995-10-05", text: "邓布利多军正式成立" },
  { date: "1996-01-02", text: "神秘事务司大战，小天狼星・布莱克牺牲" },
  { date: "1996-06-01", text: "乌姆里奇下台，霍格沃茨进入危机；阿不思・邓布利多摧毁冈特戒指魂器" },
  { date: "1996-09-01", text: "霍拉斯・斯拉格霍恩任教，德拉科・马尔福执行暗杀邓布利多任务" },
  { date: "1996-10-01", text: "哈利・波特获得混血王子课本，魔药天赋觉醒" },
  { date: "1996-12-01", text: "阿不思・邓布利多开始讲解魂器真相" },
  { date: "1997-03-01", text: "阿不思・邓布利多带哈利・波特寻找魂器，身受重伤" },
  { date: "1997-06-30", text: "天文塔决战，阿不思・邓布利多陨落" },
  { date: "1997-07-27", text: "七哈利转移计划，海德薇死亡，乔治・韦斯莱失一耳" },
  { date: "1997-09-01", text: "铁三角开始荒野逃亡，寻找魂器" },
  { date: "1998-01-05", text: "赫敏・格兰杰销毁斯莱特林挂坠盒魂器" },
  { date: "1998-02-01", text: "三人得知死亡圣器传说" },
  { date: "1998-03-01", text: "马尔福庄园被俘，多比牺牲" },
  { date: "1998-04-01", text: "抢劫古灵阁，赫敏・格兰杰销毁赫奇帕奇金杯魂器" },
  { date: "1998-05-01", text: "哈利・波特返回学校，销毁拉文克劳冠冕魂器" },
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
  const past = events.filter(e => e.date < today).slice(-3);
  const now = events.filter(e => e.date === today);
  const future = events.filter(e => e.date > today).slice(0, 3);
  let html = '<h4>✅ 已发生（最近3件）</h4>';
  past.forEach(e => { html += `<p><span class="event-date">${e.date}</span> ${e.text}</p>`; });
  html += '<div class="divider"></div><h4>🔴 正在发生</h4>';
  now.forEach(e => { html += `<p><span class="event-date">${e.date}</span> ${e.text}</p>`; });
  html += '<div class="divider"></div><h4>🔜 即将发生（最近3件）</h4>';
  future.forEach(e => { html += `<p><span class="event-date">${e.date}</span> ${e.text}</p>`; });
  el.innerHTML = html;
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
window.doStudyLog = (text) => addLog(text);
window.doExploreLog = window.doStudyLog;
window.renderLog = renderLog;
window.renderTimeline = renderTimeline;
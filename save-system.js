const SAVE_KEY = "hogwarts";
const SAVE_SLOT_KEY = "hogwarts_slots";
const SLOT_COUNT = 9;
const DEFAULT_BAG_SLOTS = 20;

const COLOR_SAVE = "#37594e";
const COLOR_LOAD = "#3a5270";
const COLOR_CLEAR = "#6b3f48";
const CARD_BG = "#161d2f";
const CARD_BORDER = "#2a3b66";
const TEXT_COLOR = "#e6e6e6";
const TITLE_COLOR = "#f8c850";

const allCourseList = [
  "变形术","魔咒学","魔药学","黑魔法防御术","草药学","魔法史","天文学","飞行课",
  "算术占卜","古代魔文","占卜学","保护神奇动物","麻瓜研究","幻影移形","炼金术"
];

export let nowBagType = "material";

// ===========================
// 默认存档结构
// ===========================
function getDefaultSave() {
  const course = {};
  allCourseList.forEach(c => course[c] = 0);
  return {
    year: 1991, month: 9, day: 2, actions: 3,
    log: [], timeline: [],
    player: { name: "无名巫师", era: "", house: "", blood: "", wand: "", wandAccepted: true },
    bag: { material: [], potion: [], item: [] },
    course,
    potion: {},
    time: { dailyActionLeft: 3, nowTime: "早晨", currentDate: "1991-09-02" }
  };
}

// ===========================
// 存档核心读写
// ===========================
export function getSave() {
  try {
    const data = localStorage.getItem(SAVE_KEY);
    return data ? JSON.parse(data) : getDefaultSave();
  } catch (e) {
    return getDefaultSave();
  }
}

// ✅ FIX #1：存档失败时输出错误，不再静默吞掉
export function setSave(data) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('⚠️ 存档失败（可能是 localStorage 空间不足）:', e);
  }
}

export function resetAll() {
  localStorage.clear();
  location.reload();
}

// ===========================
// 年级换算：1991 = 1年级
// ===========================
export function getYearGrade() {
  const data = getSave();
  return (data.year ?? 1991) - 1990;
}

// ===========================
// 跨年升级：每年9月1日升学
// 用 _yearUpgraded 标记防止重复触发
// ===========================
export function checkYearUpgrade() {
  const data = getSave();
  if (data.month === 9 && data.day === 1 && !data._yearUpgraded) {
    data.year += 1;
    data._yearUpgraded = true;
    setSave(data);
    const newGrade = getYearGrade();
    addLog(`🎓 新学年开启！年份更替，你已晋升为【${newGrade}年级】`);
    if (window.autoUpdateCourseUnlock) window.autoUpdateCourseUnlock();
    refreshAll();
  } else if (!(data.month === 9 && data.day === 1)) {
    if (data._yearUpgraded) {
      data._yearUpgraded = false;
      setSave(data);
    }
  }
}

// ===========================
// 玩家 / 时间 存取
// ===========================
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

// ===========================
// 日志
// ===========================
export function addLog(text) {
  const d = getSave();
  if (!d.log) d.log = [];
  const curDate = d.time?.currentDate || "1991-09-02";
  const curTime = d.time?.nowTime || "早晨";
  d.log.push(`[${curDate} ${curTime}] ${text}`);
  setSave(d);
  // ✅ FIX #2：统一用 window.renderLog() 调用，避免模块作用域找不到
  if (window.renderLog) window.renderLog();
}

// ===========================
// 背包
// ===========================
export function setBagType(type) {
  nowBagType = type;
  renderBag();
}

export function renderBag() {
  const g = document.getElementById("bagGrid");
  if (!g) return;
  const data = getSave();
  const list = (data.bag?.[nowBagType] || []).filter(i => i != null);
  const totalSlots = Math.max(DEFAULT_BAG_SLOTS, list.length);
  let html = "";
  for (let i = 0; i < totalSlots; i++) {
    const item = list[i];
    if (item) {
      let emoji = "";
      if (nowBagType === "material") emoji = (window.getMatEmoji ? getMatEmoji(item.name) : "") + " ";
      else if (nowBagType === "potion") emoji = (window.getPotionEmoji ? getPotionEmoji(item.name) : "") + " ";
      html += `<div class="bag-slot has-item">${emoji}${item.name} ×${item.count || 1}</div>`;
    } else {
      html += `<div class="bag-slot empty">空</div>`;
    }
  }
  g.innerHTML = html;
}

export function addItemToBag(type, itemData) {
  const data = getSave();
  if (!data.bag) data.bag = { material: [], potion: [], item: [] };
  const list = data.bag[type] || [];
  const exist = list.find(it => it?.name === itemData.name);
  if (exist) {
    exist.count = (exist.count || 1) + 1;
  } else {
    list.push({ ...itemData, count: 1 });
  }
  data.bag[type] = list;
  setSave(data);
  renderBag();
}

export function initBagData() {}

// ===========================
// 课程渲染
// ===========================
export function renderCourse() {
  const data = getSave();
  const wrap = document.getElementById("courseList");
  if (!wrap) return;
  wrap.innerHTML = "";
  allCourseList.forEach(name => {
    const v = data.course[name] || 0;
    let lvl = "未学习";
    if (v >= 100) lvl = "精通";
    else if (v >= 75) lvl = "优秀";
    else if (v >= 50) lvl = "良好";
    else if (v >= 20) lvl = "普通";
    else if (v > 0) lvl = "初学";
    const div = document.createElement("div");
    div.className = "course-item";
    div.innerText = `${name} | ${v}% | ${lvl}`;
    wrap.appendChild(div);
  });
}

// ===========================
// 时间轴
// ===========================
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
  { date: "1998-05-02", text: "霍格沃茨大战全面爆发；西弗勒斯・斯内普临终交付记忆，揭露全部真相；伏地魔亲手摧毁哈利・波特体内的灵魂碎片；纳威・隆巴顿斩杀纳吉尼，最后一个魂器销毁；伏地魔杀戮咒反弹，彻底死亡" },
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

// ===========================
// 日志渲染
// ===========================
export function renderLog() {
  const data = getSave();
  const el = document.getElementById("log");
  if (!el) return;
  el.innerHTML = "";
  data.log.forEach(t => {
    const p = document.createElement("p");
    p.innerText = t;
    el.appendChild(p);
  });
  el.scrollTop = el.scrollHeight;
}

// ===========================
// 全局刷新
// ===========================
export function refreshAll() {
  const data = getSave();
  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
  };
  setText("stat-name", data.player?.name || "—");
  setText("stat-blood", data.player?.blood || "—");
  setText("stat-house", data.player?.house || "—");
  setText("stat-wand", data.player?.wand || "—");
  setText("date", data.time?.currentDate || "1991-09-02");
  setText("timeOfDay", data.time?.nowTime || "早晨");
  setText("actions", data.time?.dailyActionLeft ?? 3);
  renderBag();
  renderLog();
  renderTimeline();
}

// ===========================
// 标签页初始化
// ===========================
function initTabs() {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-screen").forEach(s => s.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`tab-${tab}`).classList.add("active");
      refreshAll();
    });
  });
  document.querySelectorAll(".bag-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      nowBagType = btn.dataset.bag;
      document.querySelectorAll(".bag-tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderBag();
    });
  });
}

// ===========================
// 存档槽：公共卡片构建
// ===========================
export function getAllSlots() {
  try {
    const data = localStorage.getItem(SAVE_SLOT_KEY);
    return data ? JSON.parse(data) : Array(SLOT_COUNT).fill(null);
  } catch (e) {
    return Array(SLOT_COUNT).fill(null);
  }
}

export function saveAllSlots(slots) {
  localStorage.setItem(SAVE_SLOT_KEY, JSON.stringify(slots));
}

function createSlotCard(i, slots, mode) {
  const item = document.createElement("div");
  Object.assign(item.style, {
    background: CARD_BG, border: `1px solid ${CARD_BORDER}`,
    borderRadius: "8px", padding: "12px", color: TEXT_COLOR, boxSizing: "border-box"
  });

  const timeText = slots[i]?.time
    ? `${slots[i].time.currentDate} ${slots[i].time.nowTime}`
    : "空存档";
  const info = document.createElement("div");
  Object.assign(info.style, { fontSize: "13px", lineHeight: "1.4", marginBottom: "10px" });
  info.innerHTML = `<div style="color:${TITLE_COLOR};font-weight:bold;">存档${i + 1}</div><div style="margin-top:4px;">${timeText}</div>`;
  item.appendChild(info);

  function makeBtn(label, bg, hoverBg, disabled) {
    const btn = document.createElement("button");
    Object.assign(btn.style, {
      flex: "1", border: "none", borderRadius: "4px", padding: "6px 0",
      background: bg, color: "#fff", cursor: "pointer", transition: "all 0.2s ease"
    });
    btn.innerText = label;
    btn.disabled = disabled;
    btn.onmouseover = () => { btn.style.background = hoverBg; btn.style.transform = "translateY(-1px)"; };
    btn.onmouseout = () => { btn.style.background = bg; btn.style.transform = "translateY(0)"; };
    btn.onmousedown = () => btn.style.transform = "translateY(1px)";
    btn.onmouseup = () => btn.style.transform = "translateY(0)";
    return btn;
  }

  if (mode === "save") {
    const btn = makeBtn(slots[i] ? "覆盖存档" : "存档", COLOR_SAVE, "#497c68", false);
    btn.style.width = "100%";
    btn.onclick = () => { slots[i] = getSave(); saveAllSlots(slots); openSave(); addLog(`✅ 已保存至【存档${i + 1}】`); };
    item.appendChild(btn);
  } else {
    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.gap = "6px";
    const loadBtn = makeBtn("读取", COLOR_LOAD, "#486899", !slots[i]);
    const delBtn = makeBtn("清空", COLOR_CLEAR, "#8c5260", !slots[i]);
    loadBtn.onclick = () => { setSave(slots[i]); refreshAll(); addLog(`📥 已读取【存档${i + 1}】`); };
    delBtn.onclick = () => { slots[i] = null; saveAllSlots(slots); openLoad(); addLog(`🗑️ 已清空【存档${i + 1}】`); };
    wrap.appendChild(loadBtn);
    wrap.appendChild(delBtn);
    item.appendChild(wrap);
  }
  return item;
}

window.openSave = function () {
  const slots = getAllSlots();
  const slotBox = document.getElementById("slotBox");
  slotBox.innerHTML = "";
  for (let i = 0; i < SLOT_COUNT; i++) slotBox.appendChild(createSlotCard(i, slots, "save"));
};

window.openLoad = function () {
  const slots = getAllSlots();
  const slotBox = document.getElementById("slotBox");
  slotBox.innerHTML = "";
  for (let i = 0; i < SLOT_COUNT; i++) slotBox.appendChild(createSlotCard(i, slots, "load"));
};

window.resetGame = function () {
  if (confirm("确定要清空进度吗？")) { 
    if (window.versionMgr) window.versionMgr.clearVersionInfo();
    localStorage.clear(); 
    location.reload(); 
  }
};

// ===========================
// 全局挂载
// ===========================
window.saveSys = { getSave, setSave, loadPlayer, savePlayer, loadTime, saveTime, addLog, resetAll, checkYearUpgrade };
window.doStudyLog = (text) => addLog(text);
window.doExploreLog = window.doStudyLog;
window.refreshAll = refreshAll;
window.renderCourse = renderCourse;
window.renderBag = renderBag;
window.renderLog = renderLog;
window.renderTimeline = renderTimeline;
window.setBagType = setBagType;
window.addMaterialToBag = (name) => addItemToBag("material", { name });
window.addPotionToBag = (potion) => addItemToBag("potion", potion);

// ✅ FIX #9：合并两个 DOMContentLoaded 为一个，防止初始化顺序问题
document.addEventListener("DOMContentLoaded", () => {
  getScrollbarWidth(); // 预计算滚动条宽度
  initTabs();
  refreshAll();
  checkYearUpgrade();

  const noteButton = document.getElementById('note-button-main');
  const closeFeedbackBtn = document.getElementById('close-feedback');
  const cancelFeedbackBtn = document.getElementById('cancel-feedback');

  if (noteButton) noteButton.addEventListener('click', openFeedback);
  if (closeFeedbackBtn) closeFeedbackBtn.addEventListener('click', closeFeedback);
  if (cancelFeedbackBtn) cancelFeedbackBtn.addEventListener('click', closeFeedback);

  initCopyButton();
});

// ==================== 问题反馈功能 ====================

const EMAIL = 'hwsimgame@qq.com';
let scrollTop = 0;
let scrollbarWidth = 0;

function getScrollbarWidth() {
  if (scrollbarWidth > 0) return scrollbarWidth;
  const div = document.createElement('div');
  div.style.cssText = 'width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;';
  document.body.appendChild(div);
  scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollbarWidth;
}

function openFeedback() {
  const modal = document.getElementById('feedback-modal');
  scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
  document.body.classList.add('modal-open');
  document.body.style.top = '-' + scrollTop + 'px';
  document.addEventListener('wheel', preventScroll, { passive: false });
  document.addEventListener('touchmove', preventScroll, { passive: false });
  modal.classList.add('show');
  initCopyButton();
}

function closeFeedback() {
  const modal = document.getElementById('feedback-modal');
  modal.classList.remove('show');
  document.body.classList.remove('modal-open');
  document.body.style.top = '';
  document.removeEventListener('wheel', preventScroll);
  document.removeEventListener('touchmove', preventScroll);
  setTimeout(() => { window.scrollTo(0, scrollTop); }, 0);
}

function preventScroll(e) {
  const modalContent = document.querySelector('.modal-content');
  if (modalContent && modalContent.contains(e.target)) return;
  e.preventDefault();
  return false;
}

// ==================== 复制邮箱功能 ====================

function initCopyButton() {
  const copyBtn = document.getElementById('copy-email');
  if (!copyBtn) return;
  copyBtn.removeEventListener('click', handleCopyClick);
  copyBtn.addEventListener('click', handleCopyClick);
}

function handleCopyClick(e) {
  e.preventDefault();
  e.stopPropagation();
  const btn = e.currentTarget;
  const originalText = btn.textContent;
  if (!EMAIL) {
    btn.textContent = '❌ 邮箱未配置';
    setTimeout(() => { btn.textContent = originalText; }, 1500);
    return;
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(EMAIL)
      .then(() => showCopySuccess(btn, originalText))
      .catch(() => fallbackCopy(btn, originalText));
  } else {
    fallbackCopy(btn, originalText);
  }
}

function showCopySuccess(btn, originalText) {
  btn.textContent = '✓ 已复制！';
  btn.style.background = '#2a7a3e';
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
  }, 1500);
}

// ✅ FIX #3：finally 块用变量引用 textarea，不再用选择器查找，防止误删其他元素
function fallbackCopy(btn, originalText) {
  let textarea = null;
  try {
    textarea = document.createElement('textarea');
    textarea.value = EMAIL;
    textarea.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;pointer-events:none;z-index:-9999;';
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    if (document.execCommand('copy')) {
      showCopySuccess(btn, originalText);
    } else {
      throw new Error('复制失败');
    }
  } catch (err) {
    console.error('复制失败:', err);
    btn.textContent = '❌ 复制失败';
    setTimeout(() => { btn.textContent = originalText; }, 1500);
  } finally {
    if (textarea && textarea.parentNode) document.body.removeChild(textarea);
  }
}

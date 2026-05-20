// save-log.js - log persistence and rendering
import { getSave, setSave } from './save-system.js';

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

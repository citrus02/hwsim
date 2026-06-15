// save-timeline.js - timeline event generation and rendering
import { getSave } from './save-system.js';

const baseEvents = [
  { date: "1960-01-09", text: "西弗勒斯・斯内普 生日", isBirthday: true, character: "西弗勒斯・斯内普", storyId: "birthday_snape" },
  { date: "1960-03-27", text: "莱姆斯・卢平 生日", isBirthday: true, character: "莱姆斯・卢平", storyId: "birthday_lupin" },
  { date: "1960-11-19", text: "小天狼星・布莱克 生日", isBirthday: true, character: "小天狼星・布莱克", storyId: "birthday_sirius" },
  { date: "1979-09-19", text: "赫敏・格兰杰 生日", isBirthday: true, character: "赫敏・格兰杰", storyId: "birthday_hermione" },
  { date: "1980-03-01", text: "罗恩・韦斯莱 生日", isBirthday: true, character: "罗恩・韦斯莱", storyId: "birthday_ron" },
  { date: "1980-07-31", text: "哈利・波特 生日", isBirthday: true, character: "哈利・波特", storyId: "birthday_harry" },
  { date: "1981-08-11", text: "金妮・韦斯莱 生日", isBirthday: true, character: "金妮・韦斯莱", storyId: "birthday_ginny" },
  { date: "1991-07-31", text: "海格的来信", storyId: "story_0_1" },
  { date: "1991-08-15", text: "对角巷购杖", storyId: "story_0_2" },
  { date: "1991-09-01", text: "九又四分之三", storyId: "story_0_3" },
  { date: "1991-09-02", text: "分院仪式之夜", storyId: "story_1_1" },
  { date: "1991-09-15", text: "走廊里的飞行课", storyId: "story_1_2" },
  { date: "1991-10-31", text: "万圣节的尖叫", storyId: "story_1_3" },
  { date: "1991-12-01", text: "三楼走廊的秘密", storyId: "story_1_4" },
  { date: "1991-12-25", text: "圣诞节的隐形衣", storyId: "story_1_5" },
  { date: "1992-06-01", text: "魔法石之夜", storyId: "story_1_6" },
  { date: "1992-08-01", text: "多比的警告", storyId: "story_2_0" },
  { date: "1992-09-01", text: "飞车撞打人柳", storyId: "story_2_0b" },
  { date: "1992-10-31", text: "墙上的血字", storyId: "story_2_1" },
  { date: "1992-12-10", text: "决斗俱乐部的蛇", storyId: "story_2_2" },
  { date: "1993-05-25", text: "密室关闭", storyId: "story_2_3" },
  { date: "1993-07-15", text: "布莱克越狱", storyId: "story_3_0" },
  { date: "1993-09-01", text: "卢平就任教授" },
  { date: "1993-09-01", text: "摄魂怪", storyId: "story_3_1" },
  { date: "1993-10-01", text: "守护神咒", storyId: "story_3_1b" },
  { date: "1994-04-15", text: "尖叫棚屋的真相", storyId: "story_3_2" },
  { date: "1994-06-06", text: "时间转换器", storyId: "story_3_2b" },
  { date: "1994-06-24", text: "纳吉尼魂器" },
  { date: "1994-08-15", text: "世界杯骚乱", storyId: "story_4_0" },
  { date: "1994-10-01", text: "三强争霸赛重启" },
  { date: "1994-10-15", text: "火焰杯的选择", storyId: "story_4_1" },
  { date: "1994-11-01", text: "哈利成为第四勇士" },
  { date: "1994-12-25", text: "圣诞舞会", storyId: "story_4_1b" },
  { date: "1995-02-24", text: "黑湖任务" },
  { date: "1995-06-24", text: "墓地的闪光", storyId: "story_4_2" },
  { date: "1995-08-02", text: "摄魂怪受审", storyId: "story_5_0" },
  { date: "1995-09-01", text: "乌姆里奇就任" },
  { date: "1995-09-10", text: "粉色的独裁", storyId: "story_5_1" },
  { date: "1995-10-05", text: "邓布利多军", storyId: "story_5_1b" },
  { date: "1996-01-02", text: "布莱克牺牲", storyId: "story_5_2" },
  { date: "1996-06-01", text: "乌姆里奇下台" },
  { date: "1996-09-01", text: "斯拉格霍恩任教", storyId: "story_6_0" },
  { date: "1996-09-15", text: "王子的笔记", storyId: "story_6_1" },
  { date: "1996-10-01", text: "混血王子课本" },
  { date: "1996-12-01", text: "魂器的秘密", storyId: "story_6_1b" },
  { date: "1997-03-01", text: "邓布利多受伤" },
  { date: "1997-06-01", text: "天文塔的绿光", storyId: "story_6_2" },
  { date: "1997-06-30", text: "邓布利多陨落" },
  { date: "1997-07-27", text: "七哈利转移", storyId: "story_7_0" },
  { date: "1997-09-01", text: "铁三角逃亡" },
  { date: "1998-01-05", text: "销毁挂坠盒" },
  { date: "1998-02-01", text: "死亡圣器传说" },
  { date: "1998-03-01", text: "马尔福庄园", storyId: "story_7_0b" },
  { date: "1998-04-01", text: "抢劫古灵阁", storyId: "story_7_0c" },
  { date: "1998-05-01", text: "最后的战斗", storyId: "story_7_1" },
  { date: "1998-05-02", text: "霍格沃茨大战" },
  { date: "1998-05-08", text: "霍格沃茨重建" },
  { date: "1999-09-01", text: "和平时代开启" },
  { date: "2017-09-01", text: "十九年后" }
];

function generateAllEvents() {
  const birthdays = baseEvents.filter(e => e.isBirthday);
  const story = baseEvents.filter(e => !e.isBirthday);
  const all = [...story];
  for (let y = 1990; y <= 2018; y++) {
    birthdays.forEach(b => {
      const [, m, d] = b.date.split('-');
      all.push({ date: `${y}-${m}-${d}`, text: `🎂 ${b.character} 生日快乐`, isAutoBirthday: true, storyId: b.storyId });
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
    toggle.addEventListener("click", () => {
      const entry = toggle.closest('.tl-story-entry');
      const detail = entry?.querySelector('.tl-story-detail');
      if (detail) {
        const open = detail.style.display !== 'none';
        detail.style.display = open ? 'none' : 'block';
        toggle.querySelector('.tl-toggle-arrow').textContent = open ? '▶' : '▼';
      }
    });
  });

  el.querySelectorAll(".story-trigger-btn[data-story-id]").forEach(button => {
    button.addEventListener("click", () => {
      window.storyEngine?.startStoryEvent?.(button.dataset.storyId);
    });
  });
}

function _renderTimelineEntry(e, storyData, STORY_MAP, today) {
  const storyId = e.storyId;
  if (!storyId) {
    return `<p><span class="event-date">${e.date}</span> ${e.text}</p>`;
  }

  const evt = STORY_MAP[storyId];
  const completedValue = storyData.completed[storyId];
  const eventYear = parseInt(e.date.split('-')[0], 10);
  const isCompleted = evt?.isBirthday ? completedValue === eventYear : !!completedValue;
  let isAvailable = false;
  let isExpired = false;
  if (evt) {
    const data = getSave();
    const isTimeTraveling = !!data.timeTurner?.isTraveling;

    function _prereqOk(prereqId) {
      if (!prereqId) return true;
      if (storyData.completed[prereqId]) return true;
      if (isTimeTraveling) {
        const prereqEvt = STORY_MAP[prereqId];
        if (prereqEvt && !prereqEvt.isBirthday && prereqEvt.dateRange) {
          if (prereqEvt.dateRange[1] <= today) return true;
        }
        if (prereqEvt?.isBirthday && prereqEvt.birthdayDate) {
          const bdThisYear = `${today.substring(0, 5)}${prereqEvt.birthdayDate}`;
          if (bdThisYear <= today) return true;
        }
      }
      return false;
    }

    if (evt.isBirthday) {
      const todayMD = today.substring(5);
      const completedYear = completedValue;
      const currentYear = parseInt(today.split('-')[0], 10);
      isAvailable = todayMD === evt.birthdayDate && completedYear !== currentYear
        && _prereqOk(evt.prerequisite);
      isExpired = e.date < today && completedYear !== eventYear;
    } else {
      isAvailable = !isCompleted && today >= evt.dateRange[0] && today <= evt.dateRange[1]
        && _prereqOk(evt.prerequisite);
      isExpired = !isCompleted && today > evt.dateRange[1];
    }
  }

  if (!evt) {
    return `<p><span class="event-date">${e.date}</span> ${e.text}</p>`;
  }

  const desc = evt.summary || e.text;

  let badge = '';
  if (isCompleted) {
    badge = '<span class="tl-story-badge tl-badge-done">✓</span>';
  } else if (isAvailable) {
    badge = '<span class="tl-story-badge tl-badge-active">快去参加</span>';
  } else if (isExpired) {
    badge = '<span class="tl-story-badge tl-badge-expired">时间结束</span>';
  }
  const triggerBtn = isAvailable
    ? `<button class="story-trigger-btn" data-story-id="${storyId}">📖 参与剧情</button>`
    : '';

  return `<div class="tl-story-entry ${isCompleted ? 'tl-story-completed' : isAvailable ? 'tl-story-available' : isExpired ? 'tl-story-expired' : ''}">
    <div class="tl-story-header">
      <span class="event-date">${e.date}</span>
      <span class="tl-story-toggle" title="点击展开/收起"><span class="tl-toggle-arrow">▸</span> ${e.text}</span>
      ${badge}${triggerBtn}
    </div>
    <div class="tl-story-detail" style="display:none">${desc.split('\n').map(l => `<p>${l}</p>`).join('')}</div>
  </div>`;
}

// 存档槽（供 slot-system.js 使用）

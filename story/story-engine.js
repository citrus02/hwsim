import { STORY_EVENTS } from './story-events.js';
import { getSave, setSave, addLog, getYearGrade } from '../save/save-system.js';
import { addAffinity } from '../affinity/affinity-system.js';
import { markSpellKnown } from '../spell/spell.js';

function _getStoryData() {
  const data = getSave();
  if (!data.story) data.story = { completed: {}, active: null };
  return data.story;
}

function _saveStoryData(story) {
  const data = getSave();
  data.story = story;
  setSave(data);
}

function _getAffinityTier(key) {
  const data = getSave();
  const aff = data.affinity?.[key];
  if (!aff) return 0;
  const v = typeof aff === 'object' ? (aff.value || 0) : aff;
  if (v >= 80) return 5;
  if (v >= 60) return 4;
  if (v >= 40) return 3;
  if (v >= 20) return 2;
  if (v >= 0) return 1;
  if (v >= -39) return -1;
  return -2;
}

function _getCourseTotal() {
  const data = getSave();
  if (!data.course) return 0;
  return Object.values(data.course).reduce((s, v) => s + (v || 0), 0);
}

function _checkCondition(condition) {
  if (!condition) return true;
  if (condition.minGrade && getYearGrade() < condition.minGrade) return false;
  if (condition.minCourseTotal && _getCourseTotal() < condition.minCourseTotal) return false;
  if (condition.minAffinity) {
    const tier = _getAffinityTier(condition.minAffinity.key);
    if (tier < condition.minAffinity.tier) return false;
  }
  return true;
}

function _isPrereqSatisfied(prereqId, story) {
  if (!prereqId) return true;
  if (story.completed[prereqId]) return true;

  const data = getSave();
  if (data.timeTurner?.isTraveling) {
    const today = data.time?.currentDate || "1991-09-02";
    const prereqEvt = STORY_EVENTS.find(e => e.id === prereqId);
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

export function getAvailableStoryEvents() {
  const story = _getStoryData();
  const today = getSave().time?.currentDate || "1991-09-02";
  const currentYear = parseInt(today.split('-')[0], 10);

  return STORY_EVENTS.filter(evt => {
    if (evt.isBirthday) {
      const bd = evt.birthdayDate;
      const todayMD = today.substring(5);
      if (todayMD !== bd) return false;
      const completedYear = story.completed[evt.id];
      if (completedYear === currentYear) return false;
      if (!_isPrereqSatisfied(evt.prerequisite, story)) return false;
      if (!_checkCondition(evt.condition)) return false;
      return true;
    }
    if (story.completed[evt.id]) return false;
    if (!_isPrereqSatisfied(evt.prerequisite, story)) return false;
    if (!_checkCondition(evt.condition)) return false;
    if (today < evt.dateRange[0] || today > evt.dateRange[1]) return false;
    return true;
  }).sort((a, b) => b.priority - a.priority);
}

export function getCompletedStoryEvents() {
  const story = _getStoryData();
  return STORY_EVENTS.filter(evt => {
    if (!story.completed[evt.id]) return false;
    if (evt.isBirthday) return true;
    return true;
  }).sort((a, b) => {
    const aDate = a.dateRange ? a.dateRange[0] : a.birthdayDate || '';
    const bDate = b.dateRange ? b.dateRange[0] : b.birthdayDate || '';
    return aDate.localeCompare(bDate);
  });
}

export function getUpcomingStoryEvents() {
  const story = _getStoryData();
  const today = getSave().time?.currentDate || "1991-09-02";

  return STORY_EVENTS.filter(evt => {
    if (story.completed[evt.id]) {
      if (evt.isBirthday) {
        const currentYear = parseInt(today.split('-')[0], 10);
        if (story.completed[evt.id] === currentYear) return false;
      } else {
        return false;
      }
    }
    if (evt.prerequisite && !story.completed[evt.prerequisite]) return false;
    if (!_checkCondition(evt.condition)) return false;
    if (evt.isBirthday) {
      const todayMD = today.substring(5);
      return todayMD < evt.birthdayDate;
    }
    return today < evt.dateRange[0];
  }).sort((a, b) => {
    const aDate = a.dateRange ? a.dateRange[0] : a.birthdayDate || '';
    const bDate = b.dateRange ? b.dateRange[0] : b.birthdayDate || '';
    return aDate.localeCompare(bDate);
  });
}

export function startStoryEvent(eventId) {
  const story = _getStoryData();
  if (story.active) return false;

  const evt = STORY_EVENTS.find(e => e.id === eventId);
  if (!evt) return false;
  if (story.completed[eventId]) {
    if (evt.isBirthday) {
      const today = getSave().time?.currentDate || "1991-09-02";
      const currentYear = parseInt(today.split('-')[0], 10);
      if (story.completed[eventId] === currentYear) return false;
    } else {
      return false;
    }
  }
  if (evt.prerequisite && !story.completed[evt.prerequisite]) return false;
  if (!_checkCondition(evt.condition)) return false;

  story.active = { id: eventId, sceneIndex: 0 };
  _saveStoryData(story);

  if (evt.knownCharacters?.length) {
    const data = getSave();
    if (!data.knownCharacters) data.knownCharacters = [];
    for (const key of evt.knownCharacters) {
      if (!data.knownCharacters.includes(key)) {
        data.knownCharacters.push(key);
      }
    }
    setSave(data);
  }

  if (evt.knownSpells?.length) {
    for (const spellId of evt.knownSpells) {
      markSpellKnown(spellId);
    }
  }

  _renderStoryScene();
  return true;
}

export function advanceStory(choiceIndex) {
  const story = _getStoryData();
  if (!story.active) return;

  const evt = STORY_EVENTS.find(e => e.id === story.active.id);
  if (!evt) return;

  const scene = evt.scenes[story.active.sceneIndex];
  if (scene.choices && choiceIndex !== undefined && choiceIndex !== null) {
    const choice = scene.choices[choiceIndex];
    if (choice && choice.reward) {
      _grantRewards([choice.reward]);
    }
    if (choice && choice.next !== undefined) {
      story.active.sceneIndex = choice.next;
    } else {
      story.active.sceneIndex++;
    }
  } else {
    story.active.sceneIndex++;
  }

  if (story.active.sceneIndex >= evt.scenes.length) {
    _completeStoryEvent(evt);
    return;
  }

  _saveStoryData(story);
  _renderStoryScene();
}

export function skipStoryScene() {
  advanceStory(null);
}

function _completeStoryEvent(evt) {
  const story = _getStoryData();
  if (evt.isBirthday) {
    const today = getSave().time?.currentDate || "1991-09-02";
    story.completed[evt.id] = parseInt(today.split('-')[0], 10);
  } else {
    story.completed[evt.id] = true;
  }
  story.active = null;
  _saveStoryData(story);

  if (evt.rewards) {
    _grantRewards(evt.rewards);
  }

  _closeStoryModal();
  if (window.renderTimeline) window.renderTimeline();
  if (window.refreshAll) window.refreshAll();
}

function _grantRewards(rewards) {
  rewards.forEach(r => {
    switch (r.type) {
      case "housePoint": {
        const data = getSave();
        const house = data.player?.house || "格兰芬多";
        const key = { "格兰芬多": "gryffindor", "斯莱特林": "slytherin", "拉文克劳": "ravenclaw", "赫奇帕奇": "hufflepuff" }[house] || "gryffindor";
        if (!data.housePoints) data.housePoints = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
        data.housePoints[key] = (data.housePoints[key] || 0) + r.amount;
        setSave(data);
        addLog(`🏆 学院分 +${r.amount}`);
        break;
      }
      case "affinity": {
        addAffinity(r.key, r.delta, 'story');
        break;
      }
      case "material": {
        const data = getSave();
        if (!data.bag) data.bag = { material: [], potion: [], item: [], wizardCard: [] };
        const existing = data.bag.material.find(m => m.name === r.name);
        if (existing) existing.count += r.count;
        else data.bag.material.push({ name: r.name, count: r.count });
        setSave(data);
        addLog(`📦 获得 ${r.name} ×${r.count}`);
        break;
      }
      case "item": {
        const data = getSave();
        if (!data.bag) data.bag = { material: [], potion: [], item: [], wizardCard: [] };
        const existing = data.bag.item.find(m => m.name === r.name);
        if (existing) existing.count += r.count;
        else data.bag.item.push({ name: r.name, count: r.count });
        setSave(data);
        addLog(`🎁 获得 ${r.name} ×${r.count}`);
        break;
      }
      case "log": {
        addLog(r.text);
        break;
      }
    }
  });
}

function _escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function _formatStoryLine(line) {
  return _escapeHtml(line)
    .replace(/([。！？])(?=[^\n」])/g, "$1<br>")
    .replace(/([。！？]」)(?=[^\n，。、！？：」<])/g, "$1<br>")
    .replace(/「([^」]*)」/g, '<span class="story-dialogue">「$1」</span>');
}

function _renderStoryText(text) {
  const normalized = String(text ?? "").replace(/\r\n?/g, "\n").trim();
  if (!normalized) return "";

  return normalized
    .split(/\n{2,}/)
    .map(block => {
      const lines = block.split("\n").map(line => line.trim()).filter(Boolean);
      if (!lines.length) return "";

      const listItems = lines
        .map(line => line.match(/^[-•]\s*(.+)$/))
        .filter(Boolean);
      if (listItems.length === lines.length) {
        const items = listItems
          .map(match => `<li>${_formatStoryLine(match[1])}</li>`)
          .join("");
        return `<ul class="story-text-block story-observation-list">${items}</ul>`;
      }

      const speakerMatch = lines[0].match(/^(.{1,16})[：:]$/);
      if (speakerMatch) {
        const speaker = _escapeHtml(speakerMatch[1]);
        const dialogue = lines.slice(1).map(_formatStoryLine).join("<br>");
        return `<div class="story-text-block story-dialogue-block"><div class="story-inline-speaker">${speaker}</div><p class="story-dialogue-line">${dialogue}</p></div>`;
      }

      return `<p class="story-text-block story-narration-block">${lines.map(_formatStoryLine).join("<br>")}</p>`;
    })
    .filter(Boolean)
    .join("");
}

function _renderStoryScene() {
  const story = _getStoryData();
  if (!story.active) return;

  const evt = STORY_EVENTS.find(e => e.id === story.active.id);
  if (!evt) return;

  let scene = evt.scenes[story.active.sceneIndex];
  if (!scene) return;

  while (scene && scene.minAffinityTier) {
    const tier = _getAffinityTier(scene.minAffinityTier.key || evt.affinityKey);
    if (tier >= scene.minAffinityTier.tier) break;
    story.active.sceneIndex++;
    _saveStoryData(story);
    if (story.active.sceneIndex >= evt.scenes.length) {
      _completeStoryEvent(evt);
      return;
    }
    scene = evt.scenes[story.active.sceneIndex];
  }
  if (!scene) return;

  let modal = document.getElementById("story-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "story-modal";
    document.body.appendChild(modal);
  }

  const totalScenes = evt.scenes.length;
  const currentScene = story.active.sceneIndex + 1;
  const progress = Math.round((currentScene / totalScenes) * 100);

  let choicesHtml = "";
  if (scene.choices) {
    choicesHtml = scene.choices.map((c, i) =>
      `<button class="story-choice-btn" data-choice="${i}">${_escapeHtml(c.text)}</button>`
    ).join("");
  } else {
    choicesHtml = `<button class="story-choice-btn story-next-btn" data-choice="null">继续</button>`;
  }

  const storyTextHtml = _renderStoryText(scene.text);

  modal.innerHTML = `
    <div class="story-overlay">
      <div class="story-dialog">
        <div class="story-header">
          <span class="story-chapter">${_escapeHtml(evt.chapter)}</span>
          <span class="story-title">${_escapeHtml(evt.title)}</span>
          <span class="story-progress">${currentScene}/${totalScenes}</span>
        </div>
        <div class="story-progress-bar">
          <div class="story-progress-fill" style="width:${progress}%"></div>
        </div>
        <div class="story-content">
          <div class="story-speaker">${_escapeHtml(scene.speaker)}</div>
          <div class="story-text">${storyTextHtml}</div>
        </div>
        <div class="story-choices">${choicesHtml}</div>
      </div>
    </div>`;

  modal.querySelectorAll(".story-choice-btn").forEach(btn => {
    btn.onclick = () => {
      const idx = btn.dataset.choice;
      advanceStory(idx === "null" ? null : parseInt(idx));
    };
  });
}

function _closeStoryModal() {
  const modal = document.getElementById("story-modal");
  if (modal) modal.remove();
}

export function checkAndTriggerStory() {
  const story = _getStoryData();
  if (story.active) {
    _renderStoryScene();
  }
}

export function hasActiveStory() {
  const story = _getStoryData();
  return !!story.active;
}

export function resumeActiveStory() {
  if (hasActiveStory()) {
    _renderStoryScene();
  }
}

window.storyEngine = {
  getAvailableStoryEvents,
  getCompletedStoryEvents,
  getUpcomingStoryEvents,
  startStoryEvent,
  advanceStory,
  skipStoryScene,
  checkAndTriggerStory,
  hasActiveStory,
  resumeActiveStory
};

window.STORY_EVENTS = STORY_EVENTS;

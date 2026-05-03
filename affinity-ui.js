/**
 * affinity-ui.js  v2 — 含学生角色四维度支持
 *
 * 功能：
 *   1. Tier 升级通知
 *   2. 探索偶遇弹窗（教授 + 学生）
 *   3. 好感度总览面板（分组：教职员 / 同学）
 *   4. 故事 / 信件阅读弹窗
 *   5. 主动找学生聊聊（维度三，消耗行动，每日冷却）
 *   6. 行动触发偶遇（维度一）
 *   7. 专属条件触发（维度四）
 */

import { getAllAffinity, getTierByValue, addAffinity, setFlag, hasFlag } from './affinity-system.js';
import {
  AFFINITY_CHARACTERS,
  CHARACTER_DISPLAY_ORDER,   // 保留，其他地方可能用到
  MUGGLE_STUDIES_ORDER,
  HOGWARTS_STAFF_ORDER,
  HEADMASTER_ORDER,
  DEFAULT_TIER_LABELS,
} from './affinity-data.js';

import {
  STUDENT_CHARACTERS,
  STUDENT_DISPLAY_ORDER,     // 保留向后兼容
  GRYFFINDOR_ORDER,
  SLYTHERIN_ORDER,
  RAVENCLAW_ORDER,
  STUDENT_ACTION_ENCOUNTERS,
  STUDENT_SPECIAL_TRIGGERS,
} from './affinity-students.js';
import { loadSave, writeSave } from './course/save-utils.js';

// ════════════════════════════════════════════════════════════
//  内部工具
// ════════════════════════════════════════════════════════════

/** 同时在教授和学生表里查角色配置 */
function getConfig(key) {
  return AFFINITY_CHARACTERS[key] || STUDENT_CHARACTERS[key] || null;
}

/**
 * 获取角色当前 tier（支持哈利的自定义阈值 tierThresholds）
 */
function getCharTier(config, value) {
  if (config?.tierThresholds) {
    const bounds = config.tierThresholds; // 如 [0, 25, 50, 70, 88]
    let tier = 1;
    for (let i = 0; i < bounds.length; i++) {
      if (value >= bounds[i]) tier = i + 1;
    }
    return Math.min(tier, 5);
  }
  return getTierByValue(value).tier;
}

/** 计算进度条百分比（到下一级）*/
function getTierBarPct(config, value, tier) {
  let tierMin, tierMax;
  if (config?.tierThresholds) {
    const b = config.tierThresholds;
    tierMin = b[tier - 1] ?? 0;
    tierMax = tier >= 5 ? 100 : (b[tier] ?? 100);
  } else {
    const BOUNDS = [0, 20, 40, 60, 80, 100];
    tierMin = BOUNDS[tier - 1];
    tierMax = BOUNDS[tier];
  }
  if (tier >= 5) return 100;
  return Math.round(Math.max(0, Math.min(100,
    (value - tierMin) / (tierMax - tierMin) * 100
  )));
}

/** 轻量 Toast 提示 */
function _showToast(text) {
  const el = document.createElement('div');
  el.className = 'affinity-toast';
  el.textContent = text;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => {
    el.classList.remove('show');
    el.addEventListener('transitionend', () => el.remove(), { once: true });
  }, 2500);
}

// ════════════════════════════════════════════════════════════
//  1. Tier 升级通知
// ════════════════════════════════════════════════════════════

export function showAffinityNotification(charKey, oldTier, newTier, newValue) {
  const config     = getConfig(charKey);
  const name       = config?.name || charKey;
  const icon       = config?.icon || '👤';
  const tierLabel  = config?.tiers?.[newTier - 1] || DEFAULT_TIER_LABELS[newTier - 1];
  const unlockHint = config?.tierUnlocks?.[newTier - 1] || null;

  const el = document.createElement('div');
  el.className = 'affinity-notif';
  el.innerHTML = `
    <div class="affinity-notif-header">
      <span class="affinity-notif-icon">${icon}</span>
      <span class="affinity-notif-name">${name}</span>
      <span class="affinity-notif-tier">Lv.${newTier}</span>
    </div>
    <div class="affinity-notif-desc">${tierLabel}</div>
    ${unlockHint ? `<div class="affinity-notif-unlock">${unlockHint}</div>` : ''}
  `;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => {
    el.classList.remove('show');
    el.addEventListener('transitionend', () => el.remove(), { once: true });
  }, 3500);
}

window._affinityOnTierUp = showAffinityNotification;

// ════════════════════════════════════════════════════════════
//  2. 偶遇弹窗（教授 + 学生区域偶遇，维度二）
// ════════════════════════════════════════════════════════════

export function tryTriggerEncounter(areaName) {
  // 合并教授与学生的 encounters
  const allConfigs = [
    ...Object.values(AFFINITY_CHARACTERS),
    ...Object.values(STUDENT_CHARACTERS),
  ];
  const allData = getAllAffinity();

  const candidates = [];
  allConfigs.forEach(config => {
    if (!config.encounters) return;
    const charAff  = allData[config.key];
    const value    = charAff?.value || 0;
    const curTier  = getCharTier(config, value);

    config.encounters.forEach(enc => {
      if (enc.area !== areaName) return;
      if (curTier < enc.minTier) return;
      if (enc.oneTime && hasFlag(config.key, enc.id)) return;
      candidates.push({ config, enc });
    });
  });

  if (candidates.length === 0) return;
  if (Math.random() > 0.30) return;

  const { config, enc } = candidates[Math.floor(Math.random() * candidates.length)];
  _showEncounterModal(config, enc);
}

function _showEncounterModal(config, enc) {
  document.getElementById('affinity-encounter-modal')?.remove();

  const modal = document.createElement('div');
  modal.id    = 'affinity-encounter-modal';
  modal.className = 'affinity-modal-overlay';

  const tag = config.isStudent ? '偶遇 · 同学' : '偶遇';

  modal.innerHTML = `
    <div class="affinity-modal-box">
      <div class="affinity-enc-header">
        <span class="affinity-enc-icon">${config.icon}</span>
        <span class="affinity-enc-name">${config.name}</span>
        <span class="affinity-enc-tag">${tag}</span>
      </div>
      <div class="affinity-enc-text">${enc.text}</div>
      <div class="affinity-enc-choices" id="aff-choices">
        ${enc.choices.map((c, i) =>
          `<button class="affinity-enc-choice-btn" data-idx="${i}">${c.label}</button>`
        ).join('')}
      </div>
      <div class="affinity-enc-response" id="aff-response" style="display:none"></div>
      <button class="affinity-enc-close" id="aff-enc-close" style="display:none">继续</button>
    </div>`;

  document.body.appendChild(modal);
  if (enc.oneTime) setFlag(config.key, enc.id);

  modal.querySelectorAll('.affinity-enc-choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const choice = enc.choices[parseInt(btn.dataset.idx)];

      modal.querySelectorAll('.affinity-enc-choice-btn').forEach(b => {
        b.disabled = true;
        b.style.opacity = b === btn ? '1' : '0.35';
      });

      addAffinity(config.key, choice.delta, `偶遇:${enc.id}`);

      const resp = document.getElementById('aff-response');
      resp.textContent = choice.response;
      resp.style.display = 'block';

      const closeBtn = document.getElementById('aff-enc-close');
      closeBtn.style.display = 'block';
      closeBtn.addEventListener('click', () => modal.remove());
    });
  });

  modal.addEventListener('click', e => {
    if (e.target === modal &&
        document.getElementById('aff-response')?.style.display === 'block') {
      modal.remove();
    }
  });
}

// ════════════════════════════════════════════════════════════
//  3. 好感度总览面板（分组显示）
// ════════════════════════════════════════════════════════════

export function openAffinityPanel() {
  document.getElementById('affinity-panel')?.remove();

  const data      = getAllAffinity();
  const saveData  = loadSave();
  const todayDate = saveData.time?.currentDate || '';
  const panel     = document.createElement('div');
  panel.id        = 'affinity-panel';
  panel.className = 'affinity-panel-overlay';

  // ── 渲染一组人物卡片（sectionTitle 传 null 则不显示分组标题）──
  function renderSection(keys, configMap, sectionTitle) {
    const items = keys
      .map(key => ({ key, config: configMap[key] }))
      .filter(x => x.config);
    if (items.length === 0) return '';

    const cardsHtml = items.map(({ key, config }) => {
      const aff       = data[key] || { value: config.initValue || 0 };
      const value     = aff.value;
      const tier      = getCharTier(config, value);
      const tierLabel = config.tiers?.[tier - 1] || DEFAULT_TIER_LABELS[tier - 1];
      const barPct    = getTierBarPct(config, value, tier);
      const hasStory  = config.story  && tier >= config.story.unlockTier;
      const hasLetter = config.letter && tier >= config.letter.unlockTier;

      const canChat     = config.isStudent && !!config.activeChat;
      const chatCoolKey = `chatCooldown_${todayDate}`;
      const onCooldown  = canChat && hasFlag(key, chatCoolKey);

      const tierBadge = config.relationLabel
        ? `${config.relationLabel} Lv.${tier}`
        : `Lv.${tier}`;

      return `
        <div class="affinity-char-card" data-key="${key}">
          <div class="affinity-char-top">
            <span class="affinity-char-icon">${config.icon}</span>
            <div class="affinity-char-info">
              <div class="affinity-char-name">${config.name}</div>
              <div class="affinity-char-role">${config.role}</div>
            </div>
            <div class="affinity-char-tier-badge">${tierBadge}</div>
          </div>
          <div class="affinity-char-tier-label">${tierLabel}</div>
          <div class="affinity-char-bar-wrap">
            <div class="affinity-char-bar" style="width:${barPct}%"></div>
          </div>
          <div class="affinity-char-actions">
            ${canChat ? `
              <button class="affinity-char-btn affinity-btn-chat ${onCooldown ? 'affinity-btn-cooldown' : ''}"
                data-key="${key}" ${onCooldown ? 'disabled' : ''}>
                💬 ${onCooldown ? '今天聊过了' : '主动找他聊聊'}
              </button>` : ''}
            ${hasStory  ? `<button class="affinity-char-btn affinity-btn-story"  data-key="${key}">📜 故事碎片</button>` : ''}
            ${hasLetter ? `<button class="affinity-char-btn affinity-btn-letter" data-key="${key}">✉️ 来信</button>` : ''}
          </div>
        </div>`;
    }).join('');

    return `
      <div class="affinity-section">
        ${sectionTitle ? `<div class="affinity-section-title">${sectionTitle}</div>` : ''}
        <div class="affinity-panel-grid">${cardsHtml}</div>
      </div>`;
  }

  // ── 三个标签页定义 ──────────────────────────────────────
  const TABS = [
    {
      id:    'muggle',
      label: '🏫 麻瓜系',
      html:  () => renderSection(MUGGLE_STUDIES_ORDER, AFFINITY_CHARACTERS, null),
    },
    {
      id:    'staff',
      label: '📚 教职员',
      html:  () =>
        renderSection(HOGWARTS_STAFF_ORDER, AFFINITY_CHARACTERS, null) +
        renderSection(HEADMASTER_ORDER,     AFFINITY_CHARACTERS, '✨ 校长室'),
    },
    {
      id:    'students',
      label: '🎓 同学',
      html:  () =>
        renderSection(GRYFFINDOR_ORDER, STUDENT_CHARACTERS, '🦁 格兰芬多') +
        renderSection(SLYTHERIN_ORDER,  STUDENT_CHARACTERS, '🐍 斯莱特林') +
        renderSection(RAVENCLAW_ORDER,  STUDENT_CHARACTERS, '🦅 拉文克劳'),
    },
  ];

  panel.innerHTML = `
    <div class="affinity-panel-box">
      <div class="affinity-panel-header">
        <span>👥 人物关系</span>
        <button id="affinity-panel-close">✕</button>
      </div>
      <div class="aff-tab-bar">
        ${TABS.map((t, i) =>
          `<button class="aff-tab-btn ${i === 0 ? 'active' : ''}" data-tab="${t.id}">${t.label}</button>`
        ).join('')}
      </div>
      <div class="affinity-panel-body">
        ${TABS.map((t, i) =>
          `<div class="aff-tab-pane ${i === 0 ? 'active' : ''}" data-tab="${t.id}">${t.html()}</div>`
        ).join('')}
      </div>
    </div>`;

  document.body.appendChild(panel);

  // ── 标签页切换 ──────────────────────────────────────────
  panel.querySelectorAll('.aff-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      panel.querySelectorAll('.aff-tab-btn').forEach(b => b.classList.remove('active'));
      panel.querySelectorAll('.aff-tab-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      panel.querySelector(`.aff-tab-pane[data-tab="${btn.dataset.tab}"]`)?.classList.add('active');
    });
  });

  // ── 关闭 ───────────────────────────────────────────────
  document.getElementById('affinity-panel-close').addEventListener('click', () => panel.remove());
  panel.addEventListener('click', e => { if (e.target === panel) panel.remove(); });

  // ── 主动聊天 ────────────────────────────────────────────
  panel.querySelectorAll('.affinity-btn-chat:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => tryActiveChat(btn.dataset.key, panel));
  });

  // ── 故事 / 信件 ─────────────────────────────────────────
  panel.querySelectorAll('.affinity-btn-story').forEach(btn => {
    btn.addEventListener('click', () => {
      const cfg = getConfig(btn.dataset.key);
      if (cfg?.story) showReadModal(cfg.story.title, cfg.story.text, '📜 故事碎片');
    });
  });
  panel.querySelectorAll('.affinity-btn-letter').forEach(btn => {
    btn.addEventListener('click', () => {
      const cfg = getConfig(btn.dataset.key);
      if (cfg?.letter) showReadModal(`✉️ 来自 ${cfg.name} 的信`, cfg.letter.text, '✉️ 来信');
    });
  });
}

// ════════════════════════════════════════════════════════════
//  4. 故事 / 信件阅读弹窗
// ════════════════════════════════════════════════════════════

function showReadModal(title, text, tag) {
  document.getElementById('affinity-read-modal')?.remove();

  const modal = document.createElement('div');
  modal.id    = 'affinity-read-modal';
  modal.className = 'affinity-modal-overlay';

  modal.innerHTML = `
    <div class="affinity-modal-box affinity-read-box">
      <div class="affinity-read-tag">${tag}</div>
      <div class="affinity-read-title">${title}</div>
      <div class="affinity-read-body">${text.replace(/\n/g, '<br>')}</div>
      <button class="affinity-enc-close" id="affinity-read-close">关闭</button>
    </div>`;

  document.body.appendChild(modal);
  document.getElementById('affinity-read-close').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

// ════════════════════════════════════════════════════════════
//  5. 主动找学生聊聊（维度三）
// ════════════════════════════════════════════════════════════

export function tryActiveChat(charKey, panelEl = null, onComplete = null) {
  const config = STUDENT_CHARACTERS[charKey];
  if (!config?.activeChat) return;

  const saveData    = loadSave();
  const todayDate   = saveData.time?.currentDate || '';
  const actionsLeft = saveData.time?.dailyActionLeft ?? 0;
  const cost        = config.activeChat.cost || 1;
  const cooldownKey = `chatCooldown_${todayDate}`;

  // 今日已聊
  if (config.activeChat.dailyCooldown && hasFlag(charKey, cooldownKey)) {
    _showToast(`${config.icon} ${config.name} 今天已经聊过了。`);
    return;
  }

  // 行动不足
  if (actionsLeft < cost) {
    _showToast(`行动次数不足，今天没有时间去找 ${config.name} 聊聊了。`);
    return;
  }

  // 筛选当前 tier 可用的聊天事件
  const allData = getAllAffinity();
  const value   = allData[charKey]?.value || 0;
  const curTier = getCharTier(config, value);
  const eligible = (config.activeChat.events || []).filter(ev => curTier >= ev.minTier);

  if (eligible.length === 0) {
    _showToast(`${config.icon} ${config.name} 现在好像不太方便。`);
    return;
  }

  // 扣行动 + 标记冷却 + 保存
  saveData.time.dailyActionLeft -= cost;
  writeSave(saveData);  // ← 同步保存
  setFlag(charKey, cooldownKey);
  window.refreshAll?.();

  // 随机抽一个事件
  const ev = eligible[Math.floor(Math.random() * eligible.length)];
  _showActiveChatModal(config, ev, panelEl, onComplete);  // ← 传入回调
}

function _showActiveChatModal(config, ev, panelEl, onComplete = null) {
  document.getElementById('affinity-chat-modal')?.remove();

  const modal = document.createElement('div');
  modal.id    = 'affinity-chat-modal';
  modal.className = 'affinity-modal-overlay';

  modal.innerHTML = `
    <div class="affinity-modal-box">
      <div class="affinity-enc-header">
        <span class="affinity-enc-icon">${config.icon}</span>
        <span class="affinity-enc-name">${config.name}</span>
        <span class="affinity-enc-tag">主动交流</span>
      </div>
      <div class="affinity-enc-text">${ev.text}</div>
      <div class="affinity-enc-choices" id="chat-choices">
        ${ev.choices.map((c, i) =>
          `<button class="affinity-enc-choice-btn" data-idx="${i}">${c.label}</button>`
        ).join('')}
      </div>
      <div class="affinity-enc-response" id="chat-response" style="display:none"></div>
      <button class="affinity-enc-close" id="affinity-chat-close" style="display:none">继续</button>
    </div>`;

  document.body.appendChild(modal);

  modal.querySelectorAll('.affinity-enc-choice-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const choice = ev.choices[parseInt(btn.dataset.idx)];

      modal.querySelectorAll('.affinity-enc-choice-btn').forEach(b => {
        b.disabled = true;
        b.style.opacity = b === btn ? '1' : '0.35';
      });

      addAffinity(config.key, choice.delta, `主动聊天:${ev.id}`);
      writeSave(loadSave());  // ← 确保同步保存

      const resp = document.getElementById('chat-response');
      resp.textContent = choice.response;
      resp.style.display = 'block';

      const closeBtn = document.getElementById('affinity-chat-close');
      closeBtn.style.display = 'block';
      closeBtn.addEventListener('click', () => {
        modal.remove();
        
        // ← 立即调用回调，无延迟
        if (typeof onComplete === 'function') {
          onComplete();
        }
        
        // 面板还在则重新渲染（更新冷却状态）
        if (panelEl && document.body.contains(panelEl)) {
          panelEl.remove();
          openAffinityPanel();
        }
      });
    });
  });

  modal.addEventListener('click', e => {
    if (e.target === modal &&
        document.getElementById('chat-response')?.style.display === 'block') {
      modal.remove();
    }
  });
}

// ════════════════════════════════════════════════════════════
//  6. 行动触发偶遇（维度一）
//     在课程/决斗/探索完成后调用
// ════════════════════════════════════════════════════════════

/**
 * @param {string} actionType  'courseStudy' | 'duelWin' | 'explore' | 'duel4v4Win'
 */
export function tryStudentActionEncounter(actionType) {
  const pool = STUDENT_ACTION_ENCOUNTERS[actionType];
  if (!pool || pool.length === 0) return;

  const allData = getAllAffinity();

  const candidates = pool.filter(enc => {
    const config = STUDENT_CHARACTERS[enc.characterKey];
    if (!config) return false;
    const value   = allData[enc.characterKey]?.value || 0;
    const curTier = getCharTier(config, value);
    if (curTier < enc.minTier) return false;
    if (enc.oneTime && hasFlag(enc.characterKey, enc.id)) return false;
    return true;
  });

  if (candidates.length === 0) return;
  if (Math.random() > 0.45) return; // 45% 概率触发

  // 按权重随机选取
  const total = candidates.reduce((s, e) => s + (e.weight || 1), 0);
  let r = Math.random() * total;
  let selected = candidates[candidates.length - 1];
  for (const enc of candidates) {
    r -= (enc.weight || 1);
    if (r <= 0) { selected = enc; break; }
  }

  const config = STUDENT_CHARACTERS[selected.characterKey];
  if (config) _showEncounterModal(config, selected);
}

// ════════════════════════════════════════════════════════════
//  7. 专属条件触发（维度四）
//     在关键节点调用
// ════════════════════════════════════════════════════════════

/**
 * @param {string} eventType   'courseGrade' | 'duelWin' | 'explore' | 'goodStudy'
 * @param {object} payload     附加数据，如 { subject, rating, opponentLevel, area }
 */
export function checkStudentSpecialTriggers(eventType, payload = {}) {
  const saveData = loadSave();
  const today    = saveData.time?.currentDate || '';
  const allData  = getAllAffinity();

  STUDENT_SPECIAL_TRIGGERS.forEach(trigger => {
    if (trigger.event !== eventType) return;

    // 条件检查（传入 getTier 工具，支持 harry_special_trust 类型的判断）
    const passes = trigger.condition(payload, (key) => {
      const cfg = STUDENT_CHARACTERS[key];
      const val = allData[key]?.value || 0;
      return getCharTier(cfg, val);
    });
    if (!passes) return;

    // 冷却检查（按天）
    const cdKey = `special_${trigger.id}_${today}`;
    if ((trigger.cooldownDays || 0) > 0 && hasFlag(trigger.characterKey, cdKey)) return;

    // 触发好感变化
    addAffinity(trigger.characterKey, trigger.delta, `专属:${trigger.id}`);

    // 标记冷却
    if ((trigger.cooldownDays || 0) > 0) setFlag(trigger.characterKey, cdKey);

    // 写入行动日志
    const logMsg = typeof trigger.logText === 'function' ? trigger.logText(payload) : null;
    if (logMsg) {
      const logEl = document.getElementById('log');
      if (logEl) {
        const p = document.createElement('p');
        p.textContent = logMsg;
        logEl.prepend(p);
      }
    }

    // 轻量提示
    if (trigger.notifText) {
      const cfg = STUDENT_CHARACTERS[trigger.characterKey];
      _showToast(`${cfg?.icon || '👤'} ${trigger.notifText}`);
    }
  });
}

// ════════════════════════════════════════════════════════════
//  内嵌渲染模式（用于 UI 面板）
// ════════════════════════════════════════════════════════════

export function renderAffinityPanelInline(containerEl) {
  if (!containerEl) return;
  
  const data      = getAllAffinity();
  const saveData  = loadSave();
  const todayDate = saveData.time?.currentDate || '';

  // ── 渲染一组人物卡片 ──
  function renderSection(keys, configMap, sectionTitle) {
    const items = keys
      .map(key => ({ key, config: configMap[key] }))
      .filter(x => x.config);
    if (items.length === 0) return '';

    const cardsHtml = items.map(({ key, config }) => {
      const aff       = data[key] || { value: config.initValue || 0 };
      const value     = aff.value;
      const tier      = getCharTier(config, value);
      const tierLabel = config.tiers?.[tier - 1] || DEFAULT_TIER_LABELS[tier - 1];
      const barPct    = getTierBarPct(config, value, tier);
      const hasStory  = config.story  && tier >= config.story.unlockTier;
      const hasLetter = config.letter && tier >= config.letter.unlockTier;

      const canChat     = config.isStudent && !!config.activeChat;
      const chatCoolKey = `chatCooldown_${todayDate}`;
      const onCooldown  = canChat && hasFlag(key, chatCoolKey);

      const tierBadge = config.relationLabel
        ? `${config.relationLabel} Lv.${tier}`
        : `Lv.${tier}`;

      return `
        <div class="affinity-char-card" data-key="${key}">
          <div class="affinity-char-top">
            <span class="affinity-char-icon">${config.icon}</span>
            <div class="affinity-char-info">
              <div class="affinity-char-name">${config.name}</div>
              <div class="affinity-char-role">${config.role}</div>
            </div>
            <div class="affinity-char-tier-badge">${tierBadge}</div>
          </div>
          <div class="affinity-char-tier-label">${tierLabel}</div>
          <div class="affinity-char-bar-wrap">
            <div class="affinity-char-bar" style="width:${barPct}%"></div>
          </div>
          <div class="affinity-char-actions">
            ${canChat ? `
              <button class="affinity-char-btn affinity-btn-chat ${onCooldown ? 'affinity-btn-cooldown' : ''}"
                data-key="${key}" ${onCooldown ? 'disabled' : ''}>
                💬 ${onCooldown ? '今天聊过了' : '主动找他聊聊'}
              </button>` : ''}
            ${hasStory  ? `<button class="affinity-char-btn affinity-btn-story"  data-key="${key}">📜 故事碎片</button>` : ''}
            ${hasLetter ? `<button class="affinity-char-btn affinity-btn-letter" data-key="${key}">✉️ 来信</button>` : ''}
          </div>
        </div>`;
    }).join('');

    return `
      <div class="affinity-section">
        ${sectionTitle ? `<div class="affinity-section-title">${sectionTitle}</div>` : ''}
        <div class="affinity-panel-grid">${cardsHtml}</div>
      </div>`;
  }

  // ── 三个标签页定义 ──────────────────────────────────────
  const TABS = [
    {
      id:    'muggle',
      label: '🏫 麻瓜系',
      html:  () => renderSection(MUGGLE_STUDIES_ORDER, AFFINITY_CHARACTERS, null),
    },
    {
      id:    'staff',
      label: '📚 教职员',
      html:  () =>
        renderSection(HOGWARTS_STAFF_ORDER, AFFINITY_CHARACTERS, null) +
        renderSection(HEADMASTER_ORDER,     AFFINITY_CHARACTERS, '✨ 校长室'),
    },
    {
      id:    'students',
      label: '🎓 同学',
      html:  () =>
        renderSection(GRYFFINDOR_ORDER, STUDENT_CHARACTERS, '🦁 格兰芬多') +
        renderSection(SLYTHERIN_ORDER,  STUDENT_CHARACTERS, '🐍 斯莱特林') +
        renderSection(RAVENCLAW_ORDER,  STUDENT_CHARACTERS, '🦅 拉文克劳'),
    },
  ];

  // ── 渲染 HTML ──────────────────────────────────────────
  containerEl.innerHTML = `
    <div class="aff-inline-wrapper">
      <div class="aff-tab-bar">
        ${TABS.map((t, i) =>
          `<button class="aff-tab-btn ${i === 0 ? 'active' : ''}" data-tab="${t.id}">${t.label}</button>`
        ).join('')}
      </div>
      <div class="affinity-panel-body">
        ${TABS.map((t, i) =>
          `<div class="aff-tab-pane ${i === 0 ? 'active' : ''}" data-tab="${t.id}">${t.html()}</div>`
        ).join('')}
      </div>
    </div>`;

  // ── 标签页切换 ──────────────────────────────────────────
  containerEl.querySelectorAll('.aff-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      containerEl.querySelectorAll('.aff-tab-btn').forEach(b => b.classList.remove('active'));
      containerEl.querySelectorAll('.aff-tab-pane').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      containerEl.querySelector(`.aff-tab-pane[data-tab="${btn.dataset.tab}"]`)?.classList.add('active');
    });
  });

  // ── 主动聊天 ────────────────────────────────────────────
  containerEl.querySelectorAll('.affinity-btn-chat:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key;
      
      // 立即禁用按钮，防止连续点击
      btn.disabled = true;
      btn.classList.add('affinity-btn-cooldown');
      btn.textContent = '💬 今天聊过了';
      
      // 聊天完成后的回调
      const onComplete = () => {
        renderAffinityPanelInline(containerEl);  // 立即重新渲染
      };
      
      tryActiveChat(key, null, onComplete);
    });
  });

  // ── 故事 / 信件 ─────────────────────────────────────────
  containerEl.querySelectorAll('.affinity-btn-story').forEach(btn => {
    btn.addEventListener('click', () => {
      const cfg = getConfig(btn.dataset.key);
      if (cfg?.story) showReadModal(cfg.story.title, cfg.story.text, '📜 故事碎片');
    });
  });
  containerEl.querySelectorAll('.affinity-btn-letter').forEach(btn => {
    btn.addEventListener('click', () => {
      const cfg = getConfig(btn.dataset.key);
      if (cfg?.letter) showReadModal(`✉️ 来自 ${cfg.name} 的信`, cfg.letter.text, '✉️ 来信');
    });
  });
}

// ════════════════════════════════════════════════════════════
//  全局挂载
// ════════════════════════════════════════════════════════════

window.affinityUI = {
  openAffinityPanel,
  renderAffinityPanelInline,  // ← 加这行
  tryTriggerEncounter,
  tryStudentActionEncounter,
  checkStudentSpecialTriggers,
  tryActiveChat,
  showAffinityNotification,
};

// 也挂载到全局，方便 index.html 调用
window.renderAffinityInline = () => {
  const mount = document.getElementById('info-affinity-mount');
  if (mount) window.affinityUI.renderAffinityPanelInline(mount);
};
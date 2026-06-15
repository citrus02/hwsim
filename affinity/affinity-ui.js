/**
 * affinity-ui.js  v2 — 含学生角色四维度支持
 *
 * 功能：
 *   1. Tier 升级通知
 *   2. 探索偶遇弹窗（教授 + 学生）
 *   3. 好感度总览面板（分组：教职员 / 同学）
 *   4. 故事 / 信件阅读弹窗
 *   5. 主动找认识的人聊聊（维度三，消耗行动，每日冷却）
 *   6. 行动触发偶遇（维度一）
 *   7. 专属条件触发（维度四）
 */

import { getAllAffinity, getTierByValue, addAffinity, setFlag, hasFlag, isCharacterKnown, getKnownCharacters } from './affinity-system.js';
import { addLog, getYearGrade } from '../save/save-system.js';
import {
  AFFINITY_CHARACTERS,
  CHARACTER_DISPLAY_ORDER,
  MUGGLE_STUDIES_ORDER,
  HOGWARTS_STAFF_ORDER,
  DEFAULT_TIER_LABELS,
} from './affinity-data.js';

import {
  STUDENT_CHARACTERS,
  STUDENT_DISPLAY_ORDER,     // 保留向后兼容
  GRYFFINDOR_ORDER,
  SLYTHERIN_ORDER,
  RAVENCLAW_ORDER,
  HUFFLEPUFF_ORDER,
  STUDENT_ACTION_ENCOUNTERS,
  STUDENT_SPECIAL_TRIGGERS,
} from './affinity-students.js';
import { loadSave, writeSave } from '../course/save-utils.js';
import { getProactiveHooks } from '../proactive-scheduler.js';

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
    const bounds = config.tierThresholds;
    let tier = 1;
    for (let i = 0; i < bounds.length; i++) {
      if (value >= bounds[i]) tier = i + 1;
    }
    return Math.min(tier, 5);
  }
  return getTierByValue(value).tier;
}

function getTierBarPct(config, value, tier) {
  let tierMin, tierMax;
  if (config?.tierThresholds) {
    const b = config.tierThresholds;
    tierMin = b[tier - 1] ?? 0;
    tierMax = tier >= 5 ? 100 : (b[tier] ?? 100);
  } else if (tier < 0) {
    const BOUNDS = { '-2': [-100, -40], '-1': [-39, -1] };
    tierMin = BOUNDS[tier]?.[0] ?? -100;
    tierMax = BOUNDS[tier]?.[1] ?? -1;
  } else {
    const BOUNDS = [0, 20, 40, 60, 80, 100];
    tierMin = BOUNDS[tier - 1];
    tierMax = BOUNDS[tier];
  }
  if (tier <= -2) return 100;
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

function escapeHtml(text = "") {
  return String(text).replace(/[&<>"']/g, ch => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

function renderParagraphs(text = "") {
  return String(text)
    .split(/\n{2,}/)
    .map(part => part.trim())
    .filter(Boolean)
    .map(part => `<p>${escapeHtml(part)}</p>`)
    .join("");
}

function inGradeRange(entry, grade = getYearGrade()) {
  if (!entry) return true;
  if (Array.isArray(entry.grades) && !entry.grades.includes(grade)) return false;
  if (entry.minGrade != null && grade < entry.minGrade) return false;
  if (entry.maxGrade != null && grade > entry.maxGrade) return false;
  return true;
}

// ════════════════════════════════════════════════════════════
//  1. Tier 升级通知
// ════════════════════════════════════════════════════════════

export function showAffinityNotification(charKey, oldTier, newTier, newValue) {
  const config     = getConfig(charKey);
  const name       = config?.name || charKey;
  const icon       = config?.icon || '👤';
  const tierLabel  = config?.tiers?.[newTier - 1] || DEFAULT_TIER_LABELS[newTier];
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
  const grade = getYearGrade();

  const candidates = [];
  allConfigs.forEach(config => {
    if (!config.encounters) return;
    const charAff  = allData[config.key];
    const value    = charAff?.value || 0;
    const curTier  = getCharTier(config, value);

    config.encounters.forEach(enc => {
      if (enc.area !== areaName) return;
      if (curTier < enc.minTier) return;
      if (!inGradeRange(enc, grade)) return;
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
  window.saveSys?.addLog?.(`${config.icon} 偶遇了${config.name}：${enc.text.slice(0, 30)}${enc.text.length > 30 ? '…' : ''}`);

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
//  3. 故事 / 信件阅读弹窗
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
//  5. 主动找认识的人聊聊（维度三）
// ════════════════════════════════════════════════════════════

function getActiveChatConfig(config) {
  if (!config) return null;
  if (config.activeChat) return config.activeChat;
  return {
    cost: 1,
    dailyCooldown: true,
    events: [
      {
        id: `${config.key}_generic_chat`,
        minTier: 1,
        text: `你找到${config.name}。这不是一场正式事件，只是霍格沃茨一天里可以被接住的一小段谈话。${config.role ? `对方身上仍带着“${config.role}”这个身份的影子，但此刻也只是愿意停下来听你说两句的人。` : ''}`,
        choices: [
          {
            label: '问候近况',
            delta: 1,
            response: `${config.name}没有把话说得很长，却认真回应了你。关系有时候就是这样，从一次没有被敷衍的问候开始。`,
          },
          {
            label: '聊起最近的传闻',
            delta: 1,
            response: `${config.name}听见传闻后停顿了一下，给出一句点到为止的看法。你感觉这段谈话以后还可以继续。`,
          },
        ],
      },
    ],
  };
}

export function tryActiveChat(charKey, panelEl = null, onComplete = null) {
  const config = getConfig(charKey);
  const activeChat = getActiveChatConfig(config);
  if (!config || !activeChat) return;

  const saveData    = loadSave();
  const todayDate   = saveData.time?.currentDate || '';
  const actionsLeft = saveData.time?.dailyActionLeft ?? 0;
  const cost        = activeChat.cost || 1;
  const cooldownKey = `chatCooldown_${todayDate}`;

  // 今日已聊
  if (activeChat.dailyCooldown && hasFlag(charKey, cooldownKey)) {
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
  const grade = getYearGrade();
  const eligible = (activeChat.events || []).filter(ev => curTier >= ev.minTier && inGradeRange(ev, grade));

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
          const mount = document.getElementById('info-affinity-mount');
          if (mount) renderAffinityPanelInline(mount);
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
  const grade = getYearGrade();

  const candidates = pool.filter(enc => {
    const config = STUDENT_CHARACTERS[enc.characterKey];
    if (!config) return false;
    const value   = allData[enc.characterKey]?.value || 0;
    const curTier = getCharTier(config, value);
    if (curTier < enc.minTier) return false;
    if (!inGradeRange(enc, grade)) return false;
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
  const grade    = getYearGrade();

  STUDENT_SPECIAL_TRIGGERS.forEach(trigger => {
    if (trigger.event !== eventType) return;
    if (!inGradeRange(trigger, grade)) return;

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

    // 写入带 memoryTag 的世界记忆（供主动事件调度器检查）
    if (trigger.memoryTag) {
      const data = loadSave();
      if (!data.world) data.world = {};
      if (!Array.isArray(data.world.memory)) data.world.memory = [];
      const logMsgForMemory = typeof trigger.logText === 'function' ? trigger.logText(payload) : '';
      data.world.memory.push({
        date: today,
        time: saveData.time?.nowTime || '上午',
        type: 'specialTrigger',
        key: trigger.characterKey,
        text: logMsgForMemory || `${trigger.notifText || trigger.id}`,
        tag: trigger.memoryTag,
      });
      data.world.memory = data.world.memory.slice(-80);
      writeSave(data);
    }

    // 写入行动日志
    const logMsg = typeof trigger.logText === 'function' ? trigger.logText(payload) : null;
    if (logMsg) {
      addLog(logMsg, 'player');
    }

    // 轻量提示
    if (trigger.notifText) {
      const cfg = STUDENT_CHARACTERS[trigger.characterKey];
      _showToast(`${cfg?.icon || '👤'} ${trigger.notifText}`);
    }
  });
}

// ════════════════════════════════════════════════════════════
//  主动事件弹窗（"有人找你"）
// ════════════════════════════════════════════════════════════

async function tryAiProactiveDialog(hook, modal) {
  // Check if AI is available
  const apiMode = localStorage.getItem('apiMode');
  if (apiMode === 'local') return; // Explicitly set to local mode
  const hasKey = window.aiGrader?.hasApiKey?.();
  if (!hasKey && apiMode !== 'default') return;

  // Check if hook has AI seed
  if (!hook.aiSeed) return;

  const persona = hook.persona;
  if (!persona) return;

  try {
    // Build context from world memory
    const data = window.saveSys?.getSave?.();
    const relevantMemory = (data?.world?.memory || [])
      .filter(m => m.key === hook.characterKey || m.type === 'proactive')
      .slice(-5)
      .map(m => m.text)
      .join('\n');

    const systemPrompt = `你正在扮演${hook.characterName || '对方'}，一个霍格沃茨的学生。

人设概要：${persona.summary || ''}
说话风格：${persona.speechStyle || ''}
关键设定：${(persona.facts || []).join('；')}

你现在主动来找玩家。请用角色的口吻说话，保持人设一致。回复应该是角色说的话，用中文，50-150字。`;

    const userPrompt = `场景种子：${hook.aiSeed}

${relevantMemory ? `相关记忆：\n${relevantMemory}` : ''}

请以${hook.characterName || '对方'}的身份，说出你来找玩家时说的第一段话。只输出角色说的话，不要加引号或旁白。`;

    // Get API config from grader's infrastructure
    const provider = localStorage.getItem('apiProvider') || 'deepseek';
    const apiKey = localStorage.getItem('apiKey') || localStorage.getItem('deepseek_api_key') || '';

    if (!apiKey) return;

    const API_CONFIG = {
      openai: { url: "https://api.openai.com/v1/chat/completions", model: "gpt-4o-mini" },
      claude: { url: "https://api.anthropic.com/v1/messages", model: "claude-3-haiku-20240307" },
      deepseek: { url: "https://api.deepseek.com/chat/completions", model: "deepseek-v4-flash" },
      doubao: { url: "https://ark.cn-beijing.volces.com/api/v3/chat/completions", model: "doubot-1-5-pro-32k-250115" },
      gemini: { url: "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-latest:generateContent", model: "gemini-1.5-flash-latest" },
      qianwen: { url: "https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions", model: "qwen-turbo" },
      glm: { url: "https://open.bigmodel.cn/api/paas/v4/chat/completions", model: "glm-4-flash" },
      kimi: { url: "https://api.moonshot.cn/v1/chat/completions", model: "moonshot-v1-8k" },
    };

    const cfg = API_CONFIG[provider] || API_CONFIG.deepseek;

    let requestBody;
    let headers = { "Content-Type": "application/json" };

    if (provider === 'claude') {
      headers["x-api-key"] = apiKey;
      headers["anthropic-version"] = "2023-06-01";
      requestBody = {
        model: cfg.model,
        max_tokens: 300,
        temperature: 0.8,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }]
      };
    } else if (provider === 'gemini') {
      headers["X-Goog-Api-Key"] = apiKey;
      requestBody = {
        contents: [{ parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }] }],
        generationConfig: { temperature: 0.8, maxOutputTokens: 300 }
      };
    } else {
      headers["Authorization"] = `Bearer ${apiKey}`;
      requestBody = {
        model: cfg.model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.8,
        max_tokens: 300
      };
    }

    const response = await fetch(cfg.url, {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) return; // Silently fail, keep local text

    const result = await response.json();
    let aiText;

    if (provider === 'claude') {
      aiText = result.content?.[0]?.text;
    } else if (provider === 'gemini') {
      aiText = result.candidates?.[0]?.content?.parts?.[0]?.text;
    } else {
      aiText = result.choices?.[0]?.message?.content;
    }

    if (!aiText) return;

    // Update the dialog with AI-generated text
    const textEl = modal.querySelector(".affinity-enc-text");
    if (textEl) {
      textEl.innerHTML = renderParagraphs(aiText);
    }
  } catch (e) {
    // Silently fail - keep local text
    console.warn('AI proactive dialog failed, using local text:', e);
  }
}

function showProactiveEventDialog(hook) {
  document.getElementById("proactive-event-modal")?.remove();
  const modal = document.createElement("div");
  modal.id = "proactive-event-modal";
  modal.className = "affinity-modal-overlay";

  const choices = Array.isArray(hook.choices) ? hook.choices : [];
  const name = hook.characterName || "对方";

  modal.innerHTML = `
    <div class="affinity-modal-box">
      <div class="affinity-enc-header">
        <span class="affinity-enc-icon">🔔</span>
        <span class="affinity-enc-name">${escapeHtml(name)}</span>
        <span class="affinity-enc-tag">主动来找你</span>
      </div>
      <div class="affinity-enc-text">${renderParagraphs(hook.sourceText || '')}</div>
      ${choices.length ? `
        <div class="affinity-enc-choices">
          ${choices.map((c, i) => `<button class="affinity-enc-choice-btn" data-idx="${i}">${escapeHtml(c.label)}</button>`).join("")}
        </div>
      ` : ""}
      <button class="affinity-enc-close" id="proactive-event-close" style="${choices.length ? "display:none" : ""}">继续</button>
    </div>`;

  document.body.appendChild(modal);

  // Try AI enhancement in background (falls back to local text if fails)
  tryAiProactiveDialog(hook, modal);

  const closeBtn = modal.querySelector("#proactive-event-close");
  const choicesEl = modal.querySelector(".affinity-enc-choices");
  let resultShown = false;

  const refreshAffinityPanel = () => {
    const mount = document.getElementById("info-affinity-mount");
    if (mount && window.affinityUI?.renderAffinityPanelInline) {
      window.affinityUI.renderAffinityPanelInline(mount);
    }
  };

  const closeDialog = () => {
    modal.remove();
    window.refreshAll?.();
    refreshAffinityPanel();
  };

  modal.querySelectorAll(".affinity-enc-choice-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const choice = choices[Number(btn.dataset.idx)];
      if (!choice) return;

      // Disable all buttons
      modal.querySelectorAll(".affinity-enc-choice-btn").forEach(other => {
        other.disabled = true;
        other.style.opacity = other === btn ? "1" : "0.35";
      });

      // Apply affinity change
      if (choice.delta && hook.characterKey && window.affinitySystem?.addAffinity) {
        window.affinitySystem.addAffinity(hook.characterKey, choice.delta, "主动事件");
      }

      // Write memory
      const data = window.saveSys?.getSave?.();
      if (data) {
        if (!data.world) data.world = {};
        if (!Array.isArray(data.world.memory)) data.world.memory = [];
        data.world.memory.push({
          date: data.time?.currentDate || '',
          time: data.time?.nowTime || '上午',
          type: 'proactiveChoice',
          key: hook.characterKey,
          text: choice.response || '',
        });
        // If choice has addMemory, write tagged memory
        if (choice.addMemory) {
          data.world.memory.push({
            date: data.time?.currentDate || '',
            time: data.time?.nowTime || '上午',
            type: 'proactiveTag',
            key: hook.characterKey,
            text: `${name}的主动来访：${choice.label}`,
            tag: choice.addMemory,
          });
        }
        data.world.memory = data.world.memory.slice(-80);
        window.saveSys?.setSave?.(data);
      }

      // Show response
      const responseEl = modal.querySelector(".affinity-enc-text");
      if (responseEl) responseEl.innerHTML = renderParagraphs(choice.response || '');
      if (choicesEl) choicesEl.style.display = "none";
      resultShown = true;
      if (closeBtn) {
        closeBtn.textContent = "继续";
        closeBtn.style.display = "block";
      }
      window.refreshAll?.();
      refreshAffinityPanel();
    });
  });

  closeBtn?.addEventListener("click", closeDialog);
  modal.addEventListener("click", e => {
    if (e.target === modal && (!choices.length || resultShown)) closeDialog();
  });
}

function triggerProactiveEvent(hookId) {
  const hooks = getProactiveHooks();
  const hook = hooks.find(h => h.id === hookId);
  if (!hook) {
    _showToast('这个事件已经处理过了。');
    return;
  }
  // Mark hook as consumed
  window.npcEvents?.consumeHook?.(hookId);
  showProactiveEventDialog(hook);
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
  function renderSection(keys, configMap, sectionTitle, collapsible = false) {
    const items = keys
      .map(key => ({ key, config: configMap[key] }))
      .filter(x => x.config)
      .filter(x => isCharacterKnown(x.key));
    if (items.length === 0) return '';

    const cardsHtml = items.map(({ key, config }) => {
      const aff       = data[key] || { value: config.initValue || 0 };
      const value     = aff.value;
      const tier      = getCharTier(config, value);
      const tierLabel = config.tiers?.[tier - 1] || DEFAULT_TIER_LABELS[tier] || getTierByValue(value).label;
      const barPct    = getTierBarPct(config, value, tier);
      const isNeg     = value < 0;
      const hasStory  = config.story  && tier >= config.story.unlockTier;
      const hasLetter = config.letter && tier >= config.letter.unlockTier;

      const canChat     = !!getActiveChatConfig(config);
      const chatCoolKey = `chatCooldown_${todayDate}`;
      const onCooldown  = canChat && hasFlag(key, chatCoolKey);
      const clueCount   = window.npcEvents?.getCharacterHooks?.(key)?.length || 0;

      const tierBadge = config.relationLabel
        ? `${config.relationLabel} Lv.${tier}`
        : `Lv.${tier}`;

      return `
        <div class="affinity-char-card${isNeg ? ' affinity-char-card-neg' : ''}" data-key="${key}">
          <div class="affinity-char-top">
            <span class="affinity-char-icon">${config.icon}</span>
            <div class="affinity-char-info">
              <div class="affinity-char-name">${config.name}</div>
              <div class="affinity-char-role">${config.role}</div>
            </div>
            <div class="affinity-char-tier-badge${isNeg ? ' affinity-tier-badge-neg' : ''}">${tierBadge}</div>
          </div>
          <div class="affinity-char-tier-label${isNeg ? ' affinity-tier-label-neg' : ''}">${tierLabel}</div>
          <div class="affinity-char-bar-wrap">
            <div class="affinity-char-bar${isNeg ? ' affinity-char-bar-neg' : ''}" style="width:${barPct}%"></div>
          </div>
          <div class="affinity-char-actions">
            <button class="affinity-char-btn affinity-btn-gift" data-key="${key}">🎁 送礼</button>
            ${clueCount ? `<button class="affinity-char-btn affinity-btn-world" data-key="${key}">🔎 追问线索</button>` : ''}
            ${canChat ? `
              <button class="affinity-char-btn affinity-btn-chat ${onCooldown ? 'affinity-btn-cooldown' : ''}"
                data-key="${key}" ${onCooldown ? 'disabled' : ''}>
                💬 ${onCooldown ? '今天聊过了' : '主动找对方聊聊'}
              </button>` : ''}
            ${hasStory  ? `<button class="affinity-char-btn affinity-btn-story"  data-key="${key}">📜 故事碎片</button>` : ''}
            ${hasLetter ? `<button class="affinity-char-btn affinity-btn-letter" data-key="${key}">✉️ 来信</button>` : ''}
          </div>
        </div>`;
    }).join('');

    if (collapsible) {
      const sectionId = 'aff-inl-' + sectionTitle.replace(/[^a-zA-Z0-9\u4e00-\u9fff]/g, '');
      return `
        <div class="affinity-section affinity-collapsible">
          <div class="affinity-collapse-header" data-target="${sectionId}">
            <span class="affinity-section-title">${sectionTitle}</span>
            <span class="affinity-collapse-count">${items.length}</span>
            <span class="affinity-collapse-arrow">▶</span>
          </div>
          <div class="affinity-collapse-body affinity-collapse-closed" id="${sectionId}">
            <div class="affinity-panel-grid">${cardsHtml}</div>
          </div>
        </div>`;
    }

    return `
      <div class="affinity-section">
        ${sectionTitle ? `<div class="affinity-section-title">${sectionTitle}</div>` : ''}
        <div class="affinity-panel-grid">${cardsHtml}</div>
      </div>`;
  }

  // ── 三个标签页定义 ──────────────────────────────────────
  const TABS = [
    {
      id:    'professors',
      label: '🧙 教授',
      html:  () => {
        const html =
          renderSection(HOGWARTS_STAFF_ORDER, AFFINITY_CHARACTERS, '🏰 霍格沃茨教授', true) +
          renderSection(MUGGLE_STUDIES_ORDER, AFFINITY_CHARACTERS, '🏫 麻瓜研究系', true);
        return html || '<div class="aff-empty-tip">暂无认识的教授</div>';
      },
    },
    {
      id:    'staff',
      label: '🔧 员工',
      html:  () => {
        const html = renderSection([], AFFINITY_CHARACTERS, null);
        return html || '<div class="aff-empty-tip">暂无认识的员工</div>';
      },
    },
    {
      id:    'students',
      label: '🎓 同学',
      html:  () => {
        const html =
          renderSection(GRYFFINDOR_ORDER, STUDENT_CHARACTERS, '🦁 格兰芬多', true) +
          renderSection(SLYTHERIN_ORDER,  STUDENT_CHARACTERS, '🐍 斯莱特林', true) +
          renderSection(RAVENCLAW_ORDER,  STUDENT_CHARACTERS, '🦅 拉文克劳', true) +
          renderSection(HUFFLEPUFF_ORDER, STUDENT_CHARACTERS, '🦡 赫奇帕奇', true);
        return html || '<div class="aff-empty-tip">暂无认识的同学</div>';
      },
    },
    {
      id:    'others',
      label: '📋 其他',
      html:  () => {
        const html = renderSection([], AFFINITY_CHARACTERS, null);
        return html || '<div class="aff-empty-tip">暂无认识的其他人</div>';
      },
    },
  ];

  // ── 主动事件钩子 ──────────────────────────────────────
  const proactiveHooks = getProactiveHooks();
  const proactiveHtml = proactiveHooks.length > 0
    ? `<div class="affinity-proactive-section">
        <div class="affinity-proactive-header">🔔 有人找你</div>
        <div class="affinity-proactive-list">
          ${proactiveHooks.map(hook => `
            <button class="affinity-proactive-item" data-hook-id="${escapeHtml(hook.id)}">
              <span class="affinity-proactive-name">${escapeHtml(hook.characterName || '对方')}</span>
              <span class="affinity-proactive-title">${escapeHtml(hook.title || '')}</span>
            </button>
          `).join('')}
        </div>
      </div>`
    : '';

  // ── 渲染 HTML ──────────────────────────────────────────
  containerEl.innerHTML = `
    <div class="aff-inline-wrapper">
      ${proactiveHtml}
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

  // ── 主动事件点击 ──────────────────────────────────────
  containerEl.querySelectorAll('.affinity-proactive-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const hookId = btn.dataset.hookId;
      if (hookId) triggerProactiveEvent(hookId);
    });
  });

  // ── 学院分组折叠/展开 ──────────────────────────────────
  containerEl.querySelectorAll('.affinity-collapse-header').forEach(header => {
    header.addEventListener('click', () => {
      const target = document.getElementById(header.dataset.target);
      if (!target) return;
      const isOpen = !target.classList.contains('affinity-collapse-closed');
      if (isOpen) {
        target.classList.add('affinity-collapse-closed');
        header.classList.add('affinity-collapse-header-closed');
      } else {
        target.classList.remove('affinity-collapse-closed');
        header.classList.remove('affinity-collapse-header-closed');
      }
    });
  });

  // ── 送礼 ──────────────────────────────────────────────
  containerEl.querySelectorAll('.affinity-btn-gift').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key;
      if (window.openGiftPanel) window.openGiftPanel(key);
    });
  });

  containerEl.querySelectorAll('.affinity-btn-world').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.key;
      const ok = window.npcEvents?.triggerCharacterHook?.(key);
      if (ok) renderAffinityPanelInline(containerEl);
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
  renderAffinityPanelInline,
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

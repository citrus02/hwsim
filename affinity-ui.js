/**
 * affinity-ui.js
 * 好感度系统 UI
 *
 * 功能：
 *   1. Tier 升级通知（角落淡出小卡片）
 *   2. 探索偶遇弹窗（选择题）
 *   3. 好感度总览面板
 *   4. 个人故事/信件阅读弹窗
 */

import { getAllAffinity, getTierByValue, addAffinity, setFlag, hasFlag } from './affinity-system.js';
import { AFFINITY_CHARACTERS, CHARACTER_DISPLAY_ORDER, DEFAULT_TIER_LABELS } from './affinity-data.js';

// ════════════════════════════════════════════════════════════
//  1. Tier 升级通知
// ════════════════════════════════════════════════════════════

/**
 * 在角落显示一条淡出通知
 * 由 affinity-system.js 里的 window._affinityOnTierUp 回调触发
 */
export function showAffinityNotification(charKey, oldTier, newTier, newValue) {
  const config  = AFFINITY_CHARACTERS[charKey];
  const name    = config?.name || charKey;
  const icon    = config?.icon || '👤';
  const tierLabel = (config?.tiers?.[newTier - 1]) || DEFAULT_TIER_LABELS[newTier - 1];
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

  // 淡入
  requestAnimationFrame(() => el.classList.add('show'));
  // 3.5s 后淡出销毁
  setTimeout(() => {
    el.classList.remove('show');
    el.addEventListener('transitionend', () => el.remove(), { once: true });
  }, 3500);
}

// 注册全局回调
window._affinityOnTierUp = showAffinityNotification;

// ════════════════════════════════════════════════════════════
//  2. 探索偶遇弹窗
// ════════════════════════════════════════════════════════════

/**
 * 触发偶遇事件
 * @param {string} areaName  当前探索区域
 */
export function tryTriggerEncounter(areaName) {
  const allChars = Object.values(AFFINITY_CHARACTERS);
  const allData  = getAllAffinity();

  // 收集当前区域、满足 minTier 且未触发（oneTime）的事件
  const candidates = [];
  allChars.forEach(config => {
    if (!config.encounters) return;
    const charAffinity = allData[config.key];
    const currentTier  = charAffinity ? getTierByValue(charAffinity.value).tier : 1;

    config.encounters.forEach(enc => {
      if (enc.area !== areaName) return;
      if (currentTier < enc.minTier) return;
      if (enc.oneTime && hasFlag(config.key, enc.id)) return;
      candidates.push({ config, enc });
    });
  });

  if (candidates.length === 0) return;

  // 随机触发一条（概率 30%，不强制每次都出现）
  if (Math.random() > 0.30) return;

  const { config, enc } = candidates[Math.floor(Math.random() * candidates.length)];
  showEncounterModal(config, enc);
}

function showEncounterModal(config, enc) {
  document.getElementById('affinity-encounter-modal')?.remove();

  const modal = document.createElement('div');
  modal.id    = 'affinity-encounter-modal';
  modal.className = 'affinity-modal-overlay';

  modal.innerHTML = `
    <div class="affinity-modal-box">
      <div class="affinity-enc-header">
        <span class="affinity-enc-icon">${config.icon}</span>
        <span class="affinity-enc-name">${config.name}</span>
        <span class="affinity-enc-tag">偶遇</span>
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
      const idx    = parseInt(btn.dataset.idx);
      const choice = enc.choices[idx];

      // 禁用所有选项
      modal.querySelectorAll('.affinity-enc-choice-btn').forEach(b => {
        b.disabled = true;
        b.style.opacity = b === btn ? '1' : '0.35';
      });

      // 应用好感度
      addAffinity(config.key, choice.delta, `偶遇:${enc.id}`);

      // 显示反馈
      const resp = document.getElementById('aff-response');
      resp.textContent = choice.response;
      resp.style.display = 'block';

      // 显示关闭按钮
      const closeBtn = document.getElementById('aff-enc-close');
      closeBtn.style.display = 'block';
      closeBtn.addEventListener('click', () => modal.remove());
    });
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      const resp = document.getElementById('aff-response');
      if (resp.style.display === 'block') modal.remove();
    }
  });
}

// ════════════════════════════════════════════════════════════
//  3. 好感度总览面板
// ════════════════════════════════════════════════════════════

export function openAffinityPanel() {
  document.getElementById('affinity-panel')?.remove();

  const data = getAllAffinity();
  const panel = document.createElement('div');
  panel.id    = 'affinity-panel';
  panel.className = 'affinity-panel-overlay';

  // 过滤有配置的人物
  const chars = CHARACTER_DISPLAY_ORDER
    .map(key => ({ key, config: AFFINITY_CHARACTERS[key] }))
    .filter(x => x.config);

  const cardsHtml = chars.map(({ key, config }) => {
    const aff      = data[key] || { value: config.initValue || 0, tier: config.initValue ? 3 : 1 };
    const tierObj  = getTierByValue(aff.value);
    const tierLabel = config.tiers?.[tierObj.tier - 1] || DEFAULT_TIER_LABELS[tierObj.tier - 1];
    const hasStory  = config.story && tierObj.tier >= config.story.unlockTier;
    const hasLetter = config.letter && tierObj.tier >= config.letter.unlockTier;
    const pct       = aff.value;

    // 进度条：显示到下一 tier 的进度
    const TIER_BOUNDS = [0, 20, 40, 60, 80, 100];
    const tierMin  = TIER_BOUNDS[tierObj.tier - 1];
    const tierMax  = TIER_BOUNDS[tierObj.tier];
    const barPct   = tierObj.tier === 5 ? 100
      : Math.round((pct - tierMin) / (tierMax - tierMin) * 100);

    return `
      <div class="affinity-char-card" data-key="${key}">
        <div class="affinity-char-top">
          <span class="affinity-char-icon">${config.icon}</span>
          <div class="affinity-char-info">
            <div class="affinity-char-name">${config.name}</div>
            <div class="affinity-char-role">${config.role}</div>
          </div>
          <div class="affinity-char-tier-badge">Lv.${tierObj.tier}</div>
        </div>
        <div class="affinity-char-tier-label">${tierLabel}</div>
        <div class="affinity-char-bar-wrap">
          <div class="affinity-char-bar" style="width:${barPct}%"></div>
        </div>
        <div class="affinity-char-actions">
          ${hasStory  ? `<button class="affinity-char-btn affinity-btn-story"  data-key="${key}">📜 故事碎片</button>` : ''}
          ${hasLetter ? `<button class="affinity-char-btn affinity-btn-letter" data-key="${key}">✉️ 来信</button>` : ''}
        </div>
      </div>`;
  }).join('');

  panel.innerHTML = `
    <div class="affinity-panel-box">
      <div class="affinity-panel-header">
        <span>👥 人物关系</span>
        <button id="affinity-panel-close">✕</button>
      </div>
      <div class="affinity-panel-grid">${cardsHtml}</div>
    </div>`;

  document.body.appendChild(panel);

  document.getElementById('affinity-panel-close').addEventListener('click', () => panel.remove());
  panel.addEventListener('click', e => { if (e.target === panel) panel.remove(); });

  // 故事/信件按钮
  panel.querySelectorAll('.affinity-btn-story').forEach(btn => {
    btn.addEventListener('click', () => {
      const config = AFFINITY_CHARACTERS[btn.dataset.key];
      if (config?.story) showReadModal(config.story.title, config.story.text, '📜 故事碎片');
    });
  });
  panel.querySelectorAll('.affinity-btn-letter').forEach(btn => {
    btn.addEventListener('click', () => {
      const config = AFFINITY_CHARACTERS[btn.dataset.key];
      if (config?.letter) showReadModal(`✉️ 来自 ${config.name} 的信`, config.letter.text, '✉️ 来信');
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

// 全局挂载
window.affinityUI = { openAffinityPanel, tryTriggerEncounter, showAffinityNotification };

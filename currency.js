/**
 * currency.js
 * 魔法货币系统
 *
 * 货币单位：
 *   1 加隆（Galleon）  = 17 西可（Sickle）
 *   1 西可（Sickle）   = 29 纳特（Knut）
 *
 * 存档字段（data.player）：
 *   galleons: number
 *   sickles:  number
 *   knuts:    number
 *
 * 全局挂载：window.currency
 */

import { getSave, setSave } from './save/save-system.js';

// ── 换算常量 ─────────────────────────────────────────────
const SICKLES_PER_GALLEON = 17;
const KNUTS_PER_SICKLE    = 29;
const KNUTS_PER_GALLEON   = SICKLES_PER_GALLEON * KNUTS_PER_SICKLE; // 493

// ── 初始化货币字段（首次加载时补齐）────────────────────
export function initCurrency() {
  const data = getSave();
  if (!data.player) data.player = {};
  let changed = false;
  if (data.player.galleons === undefined) { data.player.galleons = 10; changed = true; }
  if (data.player.sickles  === undefined) { data.player.sickles  = 0;   changed = true; }
  if (data.player.knuts    === undefined) { data.player.knuts    = 0;   changed = true; }
  if (changed) setSave(data);
}

// ── 获取货币 ─────────────────────────────────────────────
export function getWallet() {
  const data = getSave();
  return {
    galleons: data.player?.galleons ?? 10,
    sickles:  data.player?.sickles  ?? 0,
    knuts:    data.player?.knuts    ?? 0,
  };
}

// ── 总纳特数（方便比较） ─────────────────────────────────
export function getTotalKnuts() {
  const { galleons, sickles, knuts } = getWallet();
  return galleons * KNUTS_PER_GALLEON + sickles * KNUTS_PER_SICKLE + knuts;
}

// ── 加钱 ─────────────────────────────────────────────────
/**
 * @param {number} galleons
 * @param {number} sickles
 * @param {number} knuts
 * @param {string} reason 日志原因
 */
export function addMoney(galleons = 0, sickles = 0, knuts = 0, reason = "") {
  const data = getSave();
  if (!data.player) data.player = {};

  let totalKnuts = getTotalKnuts()
    + galleons * KNUTS_PER_GALLEON
    + sickles  * KNUTS_PER_SICKLE
    + knuts;

  if (totalKnuts < 0) totalKnuts = 0;

  data.player.galleons = Math.floor(totalKnuts / KNUTS_PER_GALLEON);
  totalKnuts %= KNUTS_PER_GALLEON;
  data.player.sickles  = Math.floor(totalKnuts / KNUTS_PER_SICKLE);
  data.player.knuts    = totalKnuts % KNUTS_PER_SICKLE;

  setSave(data);

  if (reason) window.doStudyLog?.(`💰 ${reason}`);
  window.refreshAll?.();
  return getWallet();
}

// ── 扣钱（返回是否成功）────────────────────────────────
/**
 * @param {number} galleons
 * @param {number} sickles
 * @param {number} knuts
 * @param {string} reason
 * @returns {boolean} 余额足够返回true，不足返回false
 */
export function spendMoney(galleons = 0, sickles = 0, knuts = 0, reason = "") {
  const cost = galleons * KNUTS_PER_GALLEON + sickles * KNUTS_PER_SICKLE + knuts;
  if (getTotalKnuts() < cost) return false;
  addMoney(-galleons, -sickles, -knuts, reason);
  return true;
}

// ── 格式化显示 ───────────────────────────────────────────
/**
 * 返回格式化字符串，例：「🥇5 🥈3 🥉12」
 */
export function formatWallet() {
  const { galleons, sickles, knuts } = getWallet();
  const parts = [];
  if (galleons > 0 || (sickles === 0 && knuts === 0)) parts.push(`🥇${galleons}`);
  if (sickles  > 0) parts.push(`🥈${sickles}`);
  if (knuts    > 0) parts.push(`🥉${knuts}`);
  return parts.join(" ") || "🥇0";
}

/**
 * 返回带单位的完整字符串，例：「5加隆 3西可 12纳特」
 */
export function formatWalletFull() {
  const { galleons, sickles, knuts } = getWallet();
  const parts = [];
  if (galleons > 0) parts.push(`${galleons} 加隆`);
  if (sickles  > 0) parts.push(`${sickles} 西可`);
  if (knuts    > 0) parts.push(`${knuts} 纳特`);
  return parts.join(" ") || "0 加隆";
}

// ── UI 刷新（由 refreshAll 调用）────────────────────────
function formatCompactNumber(value) {
  const n = Number(value) || 0;
  const abs = Math.abs(n);
  if (abs < 10000) return String(n);
  if (abs < 1000000) {
    const k = n / 1000;
    return `${k >= 100 ? Math.round(k) : k.toFixed(1).replace(/\.0$/, '')}k`;
  }
  const m = n / 1000000;
  return `${m >= 100 ? Math.round(m) : m.toFixed(1).replace(/\.0$/, '')}m`;
}

export function refreshCurrencyUI() {
  const { galleons, sickles, knuts } = getWallet();
  const g = document.getElementById("stat-galleons");
  const s = document.getElementById("stat-sickles");
  const k = document.getElementById("stat-knuts");
  if (g) { g.textContent = formatCompactNumber(galleons); g.removeAttribute("title"); }
  if (s) { s.textContent = formatCompactNumber(sickles); s.removeAttribute("title"); }
  if (k) { k.textContent = formatCompactNumber(knuts); k.removeAttribute("title"); }
}

// ── 全局挂载 ─────────────────────────────────────────────
window.currency = {
  initCurrency,
  getWallet,
  getTotalKnuts,
  addMoney,
  spendMoney,
  formatWallet,
  formatWalletFull,
  refreshCurrencyUI,
};

// 页面加载时初始化
initCurrency();

/**
 * house-points.js
 * 学院积分系统
 *
 * 存档字段（data.housePoints）：
 *   { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 }
 *   玩家学院积分累加在对应键，其他三院为NPC对手分（随机波动）
 *
 * 全局挂载：window.housePoints
 */

import { getSave, setSave } from './save-system.js';

const HOUSE_MAP = {
  "格兰芬多": "gryffindor",
  "斯莱特林": "slytherin",
  "拉文克劳": "ravenclaw",
  "赫奇帕奇": "hufflepuff",
};

const HOUSE_DISPLAY = {
  gryffindor: { label: "🦁 格兰芬多", color: "#ff6b6b", barClass: "hp-bar-g" },
  slytherin:  { label: "🐍 斯莱特林", color: "#6bff6b", barClass: "hp-bar-s" },
  ravenclaw:  { label: "🦅 拉文克劳", color: "#6b9fff", barClass: "hp-bar-r" },
  hufflepuff: { label: "🦡 赫奇帕奇", color: "#ffd700", barClass: "hp-bar-h" },
};

// ── 默认积分结构 ─────────────────────────────────────────
function _defaultScores() {
  return { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
}

// ── 初始化 ───────────────────────────────────────────────
export function initHousePoints() {
  const data = getSave();
  if (typeof data.housePoints === "number") {
    const playerHouseKey = HOUSE_MAP[data.player?.house] || "gryffindor";
    const scores = _defaultScores();
    scores[playerHouseKey] = data.housePoints;
    data.housePoints = scores;
    setSave(data);
  } else if (!data.housePoints || typeof data.housePoints !== "object") {
    data.housePoints = _defaultScores();
    setSave(data);
  }
}

// ── 获取积分 ─────────────────────────────────────────────
export function getScores() {
  const data = getSave();
  if (typeof data.housePoints === "object" && data.housePoints !== null) {
    return { ..._defaultScores(), ...data.housePoints };
  }
  return _defaultScores();
}

export function getPlayerScore() {
  const data  = getSave();
  const key   = HOUSE_MAP[data.player?.house] || null;
  if (!key) return 0;
  return getScores()[key] || 0;
}

// ── 加减分 ───────────────────────────────────────────────
export function addPoints(houseKey, points, reason = "") {
  const key = HOUSE_MAP[houseKey] || houseKey;
  if (!HOUSE_DISPLAY[key]) return;

  const data   = getSave();
  const scores = typeof data.housePoints === "object" ? data.housePoints : _defaultScores();
  scores[key]  = Math.max(0, (scores[key] || 0) + points);
  data.housePoints = scores;
  setSave(data);

  if (reason && points !== 0) {
    const sign = points > 0 ? "+" : "";
    window.doStudyLog?.(`🏅 ${HOUSE_DISPLAY[key]?.label} ${sign}${points}分｜${reason}`);
  }
  window.refreshAll?.();
}

export function addPlayerPoints(points, reason = "") {
  const data = getSave();
  const key  = HOUSE_MAP[data.player?.house];
  if (!key) return;
  addPoints(key, points, reason);
}

// ── UI 刷新 ──────────────────────────────────────────────
export function refreshHousePointsUI() {
  const scores   = getScores();
  const data     = getSave();
  const maxScore = Math.max(...Object.values(scores), 1);
  const playerKey = HOUSE_MAP[data.player?.house] || "";

  const topEl = document.getElementById("stat-house-points");
  if (topEl) topEl.textContent = playerKey ? (scores[playerKey] || 0) : 0;

  Object.entries(HOUSE_DISPLAY).forEach(([key, info]) => {
    const score   = scores[key] || 0;
    const bar     = document.getElementById(`hp-bar-${key[0]}`);
    const scoreEl = document.getElementById(`hp-score-${key[0]}`);
    const isPlayer = key === playerKey;
    if (bar) {
      bar.style.width = Math.round(score / maxScore * 100) + "%";
      bar.style.opacity = isPlayer ? "1" : "0.6";
    }
    if (scoreEl) scoreEl.textContent = score;
  });
}

// ── 全局挂载 ─────────────────────────────────────────────
window.housePoints = {
  initHousePoints,
  getScores,
  getPlayerScore,
  addPoints,
  addPlayerPoints,
  refreshHousePointsUI,
  HOUSE_MAP,
  HOUSE_DISPLAY,
};

initHousePoints();
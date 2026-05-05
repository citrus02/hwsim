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
  gryffindor: { label: "🦁 格兰芬多", color: "#ff6b6b" },
  slytherin:  { label: "🐍 斯莱特林", color: "#6bff6b" },
  ravenclaw:  { label: "🦅 拉文克劳", color: "#6b9fff" },
  hufflepuff: { label: "🦡 赫奇帕奇", color: "#ffd700" },
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
    const score    = scores[key] || 0;
    const sandEl   = document.getElementById(`hg-sand-${key}`);
    const scoreEl  = document.getElementById(`hp-score-${key[0]}`);
    const isPlayer = key === playerKey;

    if (sandEl) {
      const fillPct = maxScore > 0 ? Math.round(score / maxScore * 100) : 0;
      sandEl.style.opacity = isPlayer ? "1" : "0.7";

      let orbsHtml = '';
      let totalOrbH = 0;
      if (score > 0) {
        const containerW = (sandEl.parentElement?.offsetWidth || 44) - 6;
        const orbCount = Math.min(Math.ceil(score / 5), 20);
        const baseSize = Math.max(5, Math.min(12, 5 + score / 25));
        const sizes = [];
        for (let i = 0; i < orbCount; i++) sizes.push(baseSize + Math.random() * 2);

        let rowX = 0, rowY = 0, rowH = 0;
        for (let i = 0; i < sizes.length; i++) {
          const s = sizes[i];
          if (rowX + s > containerW && rowX > 0) {
            rowX = 0;
            rowY += rowH + 1;
            rowH = 0;
          }
          rowH = Math.max(rowH, s);
          orbsHtml += `<span class="hg-orb" style="width:${s}px;height:${s}px;left:${rowX}px;bottom:${rowY}px"></span>`;
          rowX += s + 1;
        }
        totalOrbH = rowY + rowH;
      }
      const glassH = sandEl.parentElement?.offsetHeight || 120;
      const minH = totalOrbH + 4;
      const fillH = Math.round(glassH * fillPct / 100);
      sandEl.style.height = Math.max(minH, fillH) + 'px';
      sandEl.innerHTML = orbsHtml;
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
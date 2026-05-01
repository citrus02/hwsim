/**
 * muggle-studies.js
 * 麻瓜研究核心规则引擎（精简版）
 *
 * 职责：
 *   - 内部积分管理（internalPoints）
 *   - 评分计分规则（SCORE_MAP / HOUSE_POINTS_MAP）
 *   - scoreToRating（唯一权威版本，classroom.js 复用此处）
 *   - 学期结算（内部积分→学院分）
 *   - 熟练度读取
 *
 * 已拆出至独立文件：
 *   - 成就系统   → achievement.js
 *   - 教授评语 / 分科事件 → course-default.js（唯一权威来源）
 *
 * 依赖：
 *   - save-utils.js（loadSave / writeSave）
 */

import { loadSave, writeSave } from './save-utils.js';

// ── 评级→积分映射 ──────────────────────────────────────────
export const SCORE_MAP = {
  O: 6,   // Outstanding
  E: 5,   // Exceeds Expectations
  A: 3,   // Acceptable
  P: 1,   // Poor
  D: -1,  // Dreadful
  T: -3   // Troll
};

// 学院分（每节课结束时）
export const HOUSE_POINTS_MAP = {
  O: 6, E: 5, A: 3, P: 1, D: -1, T: -3
};

// ── 测验评级计算 ──────────────────────────────────────────
/**
 * 根据答题得分计算评级（唯一权威版本）
 * 计分规则：正确+2 / 错误压轴题-1
 * 满分6分（3道题全对）
 * @param {number} score 原始得分
 * @returns {string} 评级 O/E/A/P/D/T
 */
export function scoreToRating(score) {
  if (score >= 6)  return "O";
  if (score >= 5)  return "E";
  if (score >= 3)  return "A";
  if (score >= 1)  return "P";
  if (score >= -1) return "D";
  return "T";
}

// ── 内部积分管理 ──────────────────────────────────────────

/**
 * 增加内部积分
 * @param {number} points 积分值（可为负）
 * @param {string} reason 原因说明
 */
export function addInternalPoints(points, reason = "") {
  const data = loadSave();
  if (!data.muggleStudies) data.muggleStudies = { internalPoints: 0 };
  data.muggleStudies.internalPoints = (data.muggleStudies.internalPoints || 0) + points;
  if (!data.muggleStudies.pointsLog) data.muggleStudies.pointsLog = [];
  data.muggleStudies.pointsLog.push({
    delta: points,
    reason,
    timestamp: Date.now(),
    total: data.muggleStudies.internalPoints
  });
  writeSave(data);
  return data.muggleStudies.internalPoints;
}

/**
 * 获取当前内部积分
 */
export function getInternalPoints() {
  const data = loadSave();
  return data.muggleStudies?.internalPoints || 0;
}

// ── 学期末结算 ─────────────────────────────────────────────
/**
 * 学期末结算：内部积分→学院分贡献
 * 规则：内部积分 ÷ 10 = 学院分贡献值
 */
export function semesterSettlement() {
  const pts = getInternalPoints();
  const housePointsBonus = Math.floor(pts / 10);
  const data = loadSave();
  if (data.muggleStudies) {
    data.muggleStudies.lastSemesterPoints = pts;
    data.muggleStudies.internalPoints = 0;
  }
  writeSave(data);
  return { housePointsBonus, settledPoints: pts };
}

/**
 * 读取课程进度
 * @param {string} subjectKey
 * @returns {number} studyRate(0~100)
 */
export function getSubjectStudyRate(subjectKey) {
  const data = loadSave();
  return data.course?.[subjectKey] || 0;
}

/**
 * 综合贡献值计算
 * 学术分×0.5 + 贡献分×0.3 + 成就分×0.2
 */
export function calcComprehensiveScore(academicScore, contributionScore) {
  const achievementScore = window.achievementSystem
    ? window.achievementSystem.getTotalAchievementScore()
    : 0;
  return Math.round(
    academicScore * 0.5 +
    contributionScore * 0.3 +
    achievementScore * 0.2
  );
}

// 全局挂载
window.muggleStudiesSystem = {
  SCORE_MAP,
  HOUSE_POINTS_MAP,
  scoreToRating,
  addInternalPoints,
  getInternalPoints,
  semesterSettlement,
  getSubjectStudyRate,
  calcComprehensiveScore
};

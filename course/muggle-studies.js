/**
 * muggle-studies.js
 * 麻瓜研究核心规则引擎（精简版）
 *
 * 职责：
 *   - 内部积分管理（internalPoints）
 *   - 评分计分规则（SCORE_MAP）
 *   - 学期结算（内部积分→学院分）
 *   - 熟练度更新
 *
 * 已拆出至独立文件：
 *   - 成就系统   → achievement.js
 *   - 教授评语   → course-default.js（professorComments）
 *   - 分科事件   → course-default.js（muggleStudiesEvents）
 *
 * 依赖：
 *   - achievement.js（window.achievementSystem）
 *   - course-default.js（getProfessorComment, recordProfessorComment）
 */

import { checkAchievementByStudy, recordProfessorComment } from './achievement.js';
import { getProfessorComment } from './course-default.js';

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
 * 根据答题得分计算评级
 * 计分规则：完全正确+2 / 部分正确+0 / 完全错误-1
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
function _loadData() {
  try {
    const raw = localStorage.getItem("hogwarts");
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function _saveData(data) {
  try {
    localStorage.setItem("hogwarts", JSON.stringify(data));
  } catch {}
}

/**
 * 增加内部积分
 * @param {number} points 积分值（可为负）
 * @param {string} reason 原因说明
 */
export function addInternalPoints(points, reason = "") {
  const data = _loadData();
  if (!data.muggleStudies) data.muggleStudies = { internalPoints: 0 };
  data.muggleStudies.internalPoints = (data.muggleStudies.internalPoints || 0) + points;
  if (!data.muggleStudies.pointsLog) data.muggleStudies.pointsLog = [];
  data.muggleStudies.pointsLog.push({
    delta: points,
    reason,
    timestamp: Date.now(),
    total: data.muggleStudies.internalPoints
  });
  _saveData(data);
  return data.muggleStudies.internalPoints;
}

/**
 * 获取当前内部积分
 */
export function getInternalPoints() {
  const data = _loadData();
  return data.muggleStudies?.internalPoints || 0;
}

// ── 学习结算（完整流程）────────────────────────────────────
/**
 * 完成一次分科学习后的完整结算
 * @param {string} subjectKey  科目键名
 * @param {number} rawScore    原始测验得分（-3~6），无测验传null
 * @param {object} courseRef   课程对象引用（含studyRate等字段）
 * @returns {object} 结算结果 { rating, comment, housePoints, internalDelta, newStudyRate, newAchievements }
 */
export function settleMuggleStudySession(subjectKey, rawScore, courseRef) {
  const rating = rawScore !== null ? scoreToRating(rawScore) : null;

  // 熟练度更新
  const studyAdd = 5;
  const newStudyRate = Math.min(100, (courseRef.studyRate || 0) + studyAdd);
  courseRef.studyRate = newStudyRate;

  // 内部积分
  let internalDelta = 1; // 基础学习积分
  if (rating) {
    internalDelta += SCORE_MAP[rating] || 0;
  }
  const totalPoints = addInternalPoints(internalDelta, `学习结算：${subjectKey}（${rating || "无测验"}）`);

  // 学院分
  const housePoints = rating ? (HOUSE_POINTS_MAP[rating] || 0) : 0;

  // 教授评语
  let comment = "";
  if (rating) {
    comment = getProfessorComment(subjectKey, rating);
    recordProfessorComment(subjectKey);
  }

  // 成就检测
  const newAchievements = checkAchievementByStudy(subjectKey, newStudyRate, rating);

  // 持久化课程进度
  const data = _loadData();
  if (!data.course) data.course = {};
  data.course[subjectKey] = newStudyRate;
  _saveData(data);

  return {
    rating,
    comment,
    housePoints,
    internalDelta,
    totalInternalPoints: totalPoints,
    newStudyRate,
    newAchievements
  };
}

/**
 * 学期末结算：内部积分→学院分贡献
 * 规则：内部积分 ÷ 10 = 学院分贡献值
 */
export function semesterSettlement() {
  const pts = getInternalPoints();
  const housePointsBonus = Math.floor(pts / 10);
  // 重置内部积分
  const data = _loadData();
  if (data.muggleStudies) {
    data.muggleStudies.lastSemesterPoints = pts;
    data.muggleStudies.internalPoints = 0;
  }
  _saveData(data);
  return { housePointsBonus, settledPoints: pts };
}

/**
 * 读取课程进度
 * @param {string} subjectKey
 * @returns {number} studyRate(0~100)
 */
export function getSubjectStudyRate(subjectKey) {
  const data = _loadData();
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
  settleMuggleStudySession,
  semesterSettlement,
  getSubjectStudyRate,
  calcComprehensiveScore
};

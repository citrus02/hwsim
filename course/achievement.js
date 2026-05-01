/**
 * achievement-system.js
 * 独立成就系统
 *
 * 包含：
 *   ACHIEVEMENTS          全部成就定义（常规 + 隐藏）
 *   unlockAchievement(id) 解锁成就
 *   getUnlockedAchievements()  获取已解锁列表
 *   getTotalAchievementScore() 获取成就总分
 *   getHiddenAchievementCount() 已解锁隐藏成就数量
 *   checkAchievementByStudy(subjectKey, studyRate, rating) 学习后自动检测
 */

import { loadSave, writeSave } from './save-utils.js';

// ── 常规成就（19个）──────────────────────────────────────────

const REGULAR_ACHIEVEMENTS = [
  {
    id: "first_muggle_lesson",
    name: "第一次走进课堂",
    desc: "完成第一节麻瓜研究分科课程",
    icon: "📚",
    points: 5,
    hidden: false,
    condition: "完成任意分科第1次学习"
  },
  {
    id: "math_mastered",
    name: "芬威克的点头",
    desc: "将数学分科学习进度提升至50%",
    icon: "🔢",
    points: 10,
    hidden: false,
    condition: "math studyRate >= 50"
  },
  {
    id: "physics_mastered",
    name: "没有炸掉的实验",
    desc: "将物理分科学习进度提升至50%",
    icon: "⚡",
    points: 10,
    hidden: false,
    condition: "physics studyRate >= 50"
  },
  {
    id: "chemistry_mastered",
    name: "等等等等",
    desc: "将化学分科学习进度提升至50%",
    icon: "🧪",
    points: 10,
    hidden: false,
    condition: "chemistry studyRate >= 50"
  },
  {
    id: "biology_mastered",
    name: "显微镜下的世界",
    desc: "将生物分科学习进度提升至50%",
    icon: "🔬",
    points: 10,
    hidden: false,
    condition: "biology studyRate >= 50"
  },
  {
    id: "history_mastered",
    name: "共同的历史",
    desc: "将历史分科学习进度提升至50%",
    icon: "📜",
    points: 10,
    hidden: false,
    condition: "history studyRate >= 50"
  },
  {
    id: "civics_mastered",
    name: "论证成立",
    desc: "将道德与法治分科学习进度提升至50%",
    icon: "⚖️",
    points: 10,
    hidden: false,
    condition: "civics studyRate >= 50"
  },
  {
    id: "geography_mastered",
    name: "来选我的提高班",
    desc: "将地理分科学习进度提升至50%",
    icon: "🗺️",
    points: 10,
    hidden: false,
    condition: "geography studyRate >= 50"
  },
  {
    id: "literature_mastered",
    name: "你听见了",
    desc: "将语文与文学分科学习进度提升至50%",
    icon: "📖",
    points: 10,
    hidden: false,
    condition: "literature studyRate >= 50"
  },
  {
    id: "english_mastered",
    name: "不错",
    desc: "将英语分科学习进度提升至50%",
    icon: "🔤",
    points: 10,
    hidden: false,
    condition: "english studyRate >= 50"
  },
  {
    id: "all_subjects_started",
    name: "好奇的巫师",
    desc: "九门分科全部开始学习",
    icon: "🌟",
    points: 20,
    hidden: false,
    condition: "所有9门分科 studyRate >= 1"
  },
  {
    id: "score_O_first",
    name: "第一个O",
    desc: "在任意分科测验中首次获得O评级",
    icon: "🏆",
    points: 15,
    hidden: false,
    condition: "任意分科 rating = O（首次）"
  },
  {
    id: "score_O_five",
    name: "优秀已成习惯",
    desc: "累计在分科测验中获得5次O评级",
    icon: "⭐",
    points: 25,
    hidden: false,
    condition: "累计 O 评级 >= 5"
  },
  {
    id: "no_fail_streak",
    name: "稳如磐石",
    desc: "连续10次分科学习无D/T评级",
    icon: "🛡️",
    points: 20,
    hidden: false,
    condition: "连续10次测验不出现D或T"
  },
  {
    id: "internal_points_100",
    name: "认真的学生",
    desc: "麻瓜研究内部积分达到100分",
    icon: "📊",
    points: 15,
    hidden: false,
    condition: "internalPoints >= 100"
  },
  {
    id: "internal_points_500",
    name: "麻瓜通",
    desc: "麻瓜研究内部积分达到500分",
    icon: "🎓",
    points: 30,
    hidden: false,
    condition: "internalPoints >= 500"
  },
  {
    id: "cross_subject_3",
    name: "触类旁通",
    desc: "触发3次跨学科知识联系",
    icon: "🔗",
    points: 15,
    hidden: false,
    condition: "crossAnchorTriggered >= 3"
  },
  {
    id: "perfect_week",
    name: "完美的一周",
    desc: "连续7天都完成了至少一次分科学习",
    icon: "📅",
    points: 25,
    hidden: false,
    condition: "连续7天登录并学习"
  },
  {
    id: "all_professors_met",
    name: "九位教授",
    desc: "九位麻瓜研究教授都给过你评语",
    icon: "👨‍🏫",
    points: 20,
    hidden: false,
    condition: "9位教授各至少获得过1次评语"
  }
];

// ── 隐藏成就（8个）──────────────────────────────────────────

const HIDDEN_ACHIEVEMENTS = [
  {
    id: "hidden_fail_to_O",
    name: "涅槃",
    desc: "在同一分科中，从T评级逆袭到O评级",
    icon: "🔥",
    points: 30,
    hidden: true,
    condition: "同一科目 rating T 后出现 rating O"
  },
  {
    id: "hidden_fenwick_tuesday",
    name: "周二下午",
    desc: "在周二下午进行了数学分科学习（现实时间）",
    icon: "📐",
    points: 15,
    hidden: true,
    condition: "周二14:00-18:00 进行数学学习"
  },
  {
    id: "hidden_biology_period",
    name: "。",
    desc: "在生物分科测验中获得O评级，触发塔维什·麦克拉伦的句号评语",
    icon: "🔬",
    points: 20,
    hidden: true,
    condition: "biology rating O 并触发句号评语"
  },
  {
    id: "hidden_chemistry_double",
    name: "魔药与化学",
    desc: "在化学分科连续学习时，普里姆罗斯·斯普劳特连续两次提到魔药学",
    icon: "⚗️",
    points: 20,
    hidden: true,
    condition: "连续2次化学事件均触发魔药学关联"
  },
  {
    id: "hidden_history_late",
    name: "我找到了一份原件",
    desc: "赫伯特·宾斯二世在评语中提到了麻瓜文件原件（特定评语触发）",
    icon: "📰",
    points: 15,
    hidden: true,
    condition: "触发赫伯特特定收藏家事件评语"
  },
  {
    id: "hidden_all_O",
    name: "让幽灵宾斯走廊那位也知道",
    desc: "在一学期内，所有九门分科测验全部获得O评级",
    icon: "👻",
    points: 50,
    hidden: true,
    condition: "同一学期内9门分科全部O"
  },
  {
    id: "hidden_geography_tuesday",
    name: "博士论文封面",
    desc: "发现菲利克斯·韦斯利讲桌玻璃下的褪色封面（触发特定地理事件）",
    icon: "🗂️",
    points: 15,
    hidden: true,
    condition: "触发菲利克斯博士论文事件"
  },
  {
    id: "hidden_mcmillan",
    name: "麦克米兰地铁票的回响",
    desc: "【终极隐藏成就】在同一游戏存档内完成所有常规成就，并在10月31日进行麻瓜研究学习",
    icon: "🎫",
    points: 100,
    hidden: true,
    secretHint: "有时候，最普通的东西藏着最不普通的意义。",
    condition: "完成全部19个常规成就 + 10月31日学习"
  }
];

// 合并所有成就
export const ACHIEVEMENTS = [...REGULAR_ACHIEVEMENTS, ...HIDDEN_ACHIEVEMENTS];

// ── 内部状态（存入localStorage）─────────────────────────────

function _loadState() {
  const data = loadSave();
  if (!data.achievements) data.achievements = {};
  if (!data.achievementStats) data.achievementStats = {
    ratingHistory: [],       // [{subjectKey, rating, date}]
    oCount: 0,
    noFailStreak: 0,
    internalPoints: 0,
    crossAnchorsTriggered: 0,
    professorsCommented: [],  // 数组，可被 JSON 序列化（原为 new Set()，无法持久化）
    studyDates: [],
  };
  return data;
}

function _saveState(data) {
  writeSave(data);
}

// ── 核心接口 ──────────────────────────────────────────────────

/**
 * 解锁成就
 * @param {string} id 成就ID
 * @returns {object|null} 如果首次解锁返回成就对象，否则null
 */
export function unlockAchievement(id) {
  const data = _loadState();
  if (data.achievements[id]) return null; // 已解锁
  const achievement = ACHIEVEMENTS.find(a => a.id === id);
  if (!achievement) return null;

  data.achievements[id] = {
    unlockedAt: Date.now(),
    points: achievement.points
  };
  _saveState(data);

  // 发出全局事件，UI层可监听
  window.dispatchEvent(new CustomEvent("achievementUnlocked", {
    detail: { achievement }
  }));

  return achievement;
}

/**
 * 获取所有已解锁成就列表
 */
export function getUnlockedAchievements() {
  const data = _loadState();
  return ACHIEVEMENTS.filter(a => data.achievements[a.id]).map(a => ({
    ...a,
    unlockedAt: data.achievements[a.id].unlockedAt
  }));
}

/**
 * 获取已解锁成就总分
 */
export function getTotalAchievementScore() {
  const data = _loadState();
  return Object.entries(data.achievements).reduce((sum, [id, info]) => {
    return sum + (info.points || 0);
  }, 0);
}

/**
 * 获取已解锁隐藏成就数量
 */
export function getHiddenAchievementCount() {
  const data = _loadState();
  return HIDDEN_ACHIEVEMENTS.filter(a => data.achievements[a.id]).length;
}

/**
 * 成就进度检查（学习/测验后调用）
 * @param {string} subjectKey 科目键名
 * @param {number} studyRate  当前熟练度(0~100)
 * @param {string} rating     本次评级(O/E/A/P/D/T)，无测验时传null
 */
export function checkAchievementByStudy(subjectKey, studyRate, rating) {
  const unlocked = [];
  const data = _loadState();
  const stats = data.achievementStats || {};

  // 记录本次学习
  if (!stats.ratingHistory) stats.ratingHistory = [];
  if (rating) {
    stats.ratingHistory.push({ subjectKey, rating, date: Date.now() });
  }

  // 1. 第一次学习
  if (!data.achievements["first_muggle_lesson"]) {
    const r = unlockAchievement("first_muggle_lesson");
    if (r) unlocked.push(r);
  }

  // 2. 各分科50%
  const masteryMap = {
    math: "math_mastered", physics: "physics_mastered",
    chemistry: "chemistry_mastered", biology: "biology_mastered",
    history: "history_mastered", civics: "civics_mastered",
    geography: "geography_mastered", literature: "literature_mastered",
    english: "english_mastered"
  };
  if (studyRate >= 50 && masteryMap[subjectKey]) {
    const r = unlockAchievement(masteryMap[subjectKey]);
    if (r) unlocked.push(r);
  }

  // 3. O评级统计
  if (rating === "O") {
    stats.oCount = (stats.oCount || 0) + 1;
    const r1 = unlockAchievement("score_O_first");
    if (r1) unlocked.push(r1);
    if (stats.oCount >= 5) {
      const r2 = unlockAchievement("score_O_five");
      if (r2) unlocked.push(r2);
    }
  }

  // 4. 无失败连续streak
  if (rating && rating !== "D" && rating !== "T") {
    stats.noFailStreak = (stats.noFailStreak || 0) + 1;
    if (stats.noFailStreak >= 10) {
      const r = unlockAchievement("no_fail_streak");
      if (r) unlocked.push(r);
    }
  } else if (rating === "D" || rating === "T") {
    stats.noFailStreak = 0;
  }

  // 5. 隐藏：T后逆袭O
  if (rating === "O") {
    const history = stats.ratingHistory || [];
    const pastT = history.find(h => h.subjectKey === subjectKey && h.rating === "T");
    if (pastT) {
      const r = unlockAchievement("hidden_fail_to_O");
      if (r) unlocked.push(r);
    }
  }

  // 6. 隐藏：周二下午数学
  if (subjectKey === "math") {
    const now = new Date();
    if (now.getDay() === 2 && now.getHours() >= 14 && now.getHours() < 18) {
      const r = unlockAchievement("hidden_fenwick_tuesday");
      if (r) unlocked.push(r);
    }
  }

  // 7. 隐藏：10月31日 + 全部常规成就
  const now = new Date();
  if (now.getMonth() === 9 && now.getDate() === 31) {
    const allRegularDone = REGULAR_ACHIEVEMENTS.every(a => data.achievements[a.id]);
    if (allRegularDone) {
      const r = unlockAchievement("hidden_mcmillan");
      if (r) unlocked.push(r);
    }
  }

  data.achievementStats = stats;
  _saveState(data);

  return unlocked; // 返回本次新解锁的成就列表
}

/**
 * 记录教授评语（用于"九位教授"成就）
 * @param {string} subjectKey
 */
export function recordProfessorComment(subjectKey) {
  const data = _loadState();
  const stats = data.achievementStats || {};
  if (!stats.professorsCommented) stats.professorsCommented = [];
  if (!stats.professorsCommented.includes(subjectKey)) {
    stats.professorsCommented.push(subjectKey);
  }
  if (stats.professorsCommented.length >= 9) {
    const r = unlockAchievement("all_professors_met");
    if (r) {
      data.achievementStats = stats;
      _saveState(data);
      return r;
    }
  }
  data.achievementStats = stats;
  _saveState(data);
  return null;
}

/**
 * 重置成就（调试用）
 */
export function resetAchievements() {
  const data = _loadState();
  data.achievements = {};
  data.achievementStats = {};
  _saveState(data);
}

// 全局挂载
window.achievementSystem = {
  ACHIEVEMENTS,
  unlockAchievement,
  getUnlockedAchievements,
  getTotalAchievementScore,
  getHiddenAchievementCount,
  checkAchievementByStudy,
  recordProfessorComment,
  resetAchievements
};

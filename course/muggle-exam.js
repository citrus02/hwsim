/**
 * muggle-exam.js
 * 麻瓜学术系考试机制
 *
 * 体系对照：
 *   GCSE  ↔ O.W.L.   （霍格沃茨 Year 5，5月起可报考）
 *   A-Level ↔ N.E.W.T. （霍格沃茨 Year 7，5月起可报考）
 *
 * 考试条件：
 *   GCSE   ：yearGrade >= 5  AND 该科目学习进度 >= 60%
 *   A-Level：yearGrade >= 7  AND GCSE 成绩 >= A       AND 进度 >= 85%
 *
 * 成绩等级（与魔法考试统一）：
 *   O (Outstanding)        ≥ 90分
 *   E (Exceeds Expectations) ≥ 75分
 *   A (Acceptable)         ≥ 60分
 *   P (Poor)               ≥ 45分
 *   D (Dreadful)           ≥ 30分
 *   T (Troll)               < 30分
 *
 * 存档结构：
 *   data.course.muggleExams.gcse[subjectKey]    = { grade, score, takenDate }
 *   data.course.muggleExams.alevel[subjectKey]  = { grade, score, takenDate }
 *
 * 接口：
 *   getMuggleExams()                          读取全部考试记录
 *   getMuggleExamResult(subjectKey, type)     读取单科结果
 *   canTakeExam(subjectKey, type)             检查资格 → { eligible, reason }
 *   takeMuggleExam(subjectKey, type)          执行考试 → { grade, score, passed, narrative }
 *   getMuggleExamSummary()                    汇总成绩单
 */

import { getSave, setSave, getYearGrade } from '../save-system.js';

// ── 成绩常量 ─────────────────────────────────────────────────
export const EXAM_GRADES = ['O', 'E', 'A', 'P', 'D', 'T'];
export const GRADE_THRESHOLDS = { O: 90, E: 75, A: 60, P: 45, D: 30, T: 0 };
export const GRADE_NAMES = {
  O: '卓越（Outstanding）',
  E: '超出预期（Exceeds Expectations）',
  A: '合格（Acceptable）',
  P: '差强人意（Poor）',
  D: '糟糕（Dreadful）',
  T: '灾难（Troll）'
};
export const PASSING_GRADES = new Set(['O', 'E', 'A']);  // A 及以上视为通过

// GCSE 科目中文名（用于叙事文本）
const EXAM_TYPE_NAMES = { gcse: 'GCSE', alevel: 'A-Level' };

// ── 存档读写 ─────────────────────────────────────────────────

function ensureMuggleExams(data) {
  if (!data.course) data.course = {};
  if (!data.course.muggleExams) data.course.muggleExams = {};
  if (!data.course.muggleExams.gcse) data.course.muggleExams.gcse = {};
  if (!data.course.muggleExams.alevel) data.course.muggleExams.alevel = {};
  return data;
}

export function getMuggleExams() {
  const data = getSave();
  return {
    gcse:   data.course?.muggleExams?.gcse   ?? {},
    alevel: data.course?.muggleExams?.alevel ?? {}
  };
}

export function getMuggleExamResult(subjectKey, type = 'gcse') {
  return getMuggleExams()[type]?.[subjectKey] ?? null;
}

// ── 获取科目学习进度（0-1）────────────────────────────────────

function getSubjectProgress(subjectKey) {
  const winKey = `subject_${subjectKey}`;
  const subjectData = window[winKey];
  if (!subjectData?.syllabus) return 0;

  let total = 0;
  subjectData.syllabus.forEach(ch => { total += ch.lessons?.length ?? 0; });
  if (total === 0) return 0;

  const data = getSave();
  const current = data.course?.muggleSchedule?.[subjectKey]?.currentLesson ?? 1;
  return Math.min(current / total, 1);
}

// ── 考试资格检查 ──────────────────────────────────────────────

/**
 * 检查某科目的考试报名资格
 * @param {string} subjectKey
 * @param {'gcse'|'alevel'} type
 * @returns {{ eligible: boolean, reason: string }}
 */
export function canTakeExam(subjectKey, type = 'gcse') {
  const grade = getYearGrade();
  const progress = getSubjectProgress(subjectKey);
  const exams = getMuggleExams();

  if (type === 'gcse') {
    if (grade < 5)
      return { eligible: false, reason: `GCSE 需要至少 5 年级，当前 ${grade} 年级` };
    if (progress < 0.6)
      return { eligible: false, reason: `GCSE 需要完成 60% 课程，当前 ${Math.round(progress * 100)}%` };
    if (exams.gcse[subjectKey]?.grade)
      return { eligible: false, reason: `已参加 GCSE，成绩：${exams.gcse[subjectKey].grade}` };
    return { eligible: true, reason: '' };
  }

  if (type === 'alevel') {
    if (grade < 7)
      return { eligible: false, reason: `A-Level 需要至少 7 年级，当前 ${grade} 年级` };
    const gcseGrade = exams.gcse[subjectKey]?.grade;
    if (!gcseGrade)
      return { eligible: false, reason: 'A-Level 需要先通过 GCSE' };
    if (!PASSING_GRADES.has(gcseGrade))
      return { eligible: false, reason: `GCSE 成绩 ${gcseGrade} 不足以报考 A-Level（需要 A 或以上）` };
    if (progress < 0.85)
      return { eligible: false, reason: `A-Level 需要完成 85% 课程，当前 ${Math.round(progress * 100)}%` };
    if (exams.alevel[subjectKey]?.grade)
      return { eligible: false, reason: `已参加 A-Level，成绩：${exams.alevel[subjectKey].grade}` };
    return { eligible: true, reason: '' };
  }

  return { eligible: false, reason: '未知考试类型' };
}

// ── 出题逻辑 ─────────────────────────────────────────────────

/**
 * 从科目题库中抽取考试题目
 * GCSE：抽 10 题，来自前 60% 进度范围内
 * A-Level：抽 15 题，全范围
 */
function drawExamQuestions(subjectKey, type) {
  const winKey = `subject_${subjectKey}`;
  const subjectData = window[winKey];
  // 题库格式：[{ lesson, questions: [...] }, ...]
  const rawBank = subjectData?.questionBank ?? [];
  const count = type === 'alevel' ? 15 : 10;

  // 展开成单题列表，保留 lesson 号
  let pool = rawBank.flatMap(entry =>
    (entry.questions ?? []).map(q => ({ ...q, lesson: entry.lesson ?? 0 }))
  );
  if (pool.length === 0) return [];

  // GCSE 只取前 60% 课次范围内的题
  if (type === 'gcse') {
    const totalLessons = rawBank.length;
    const maxLesson = Math.floor(totalLessons * 0.6) || totalLessons;
    const filtered = pool.filter(q => q.lesson <= maxLesson);
    if (filtered.length > 0) pool = filtered;
  }

  return [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));
}

// ── 评分 ─────────────────────────────────────────────────────

function scoreToGrade(score) {
  if (score >= GRADE_THRESHOLDS.O) return 'O';
  if (score >= GRADE_THRESHOLDS.E) return 'E';
  if (score >= GRADE_THRESHOLDS.A) return 'A';
  if (score >= GRADE_THRESHOLDS.P) return 'P';
  if (score >= GRADE_THRESHOLDS.D) return 'D';
  return 'T';
}

// ── 考试叙事文本 ──────────────────────────────────────────────

function buildNarrative(subjectKey, type, grade, score) {
  const examName = EXAM_TYPE_NAMES[type];
  const subjectDisplayName = window.muggleSchedule?.SUBJECT_NAMES?.[subjectKey] ?? subjectKey;
  const professorName = window.muggleSchedule?.professorIntroductions?.[subjectKey]?.professor ?? '教授';

  const passed = PASSING_GRADES.has(grade);
  const gradeFullName = GRADE_NAMES[grade];

  const openings = {
    O: `考场里安静得只剩下笔尖划过纸张的声音。你放下笔时，知道自己答完了每一道题。`,
    E: `最后一道题让你想了很久，但你想清楚了。`,
    A: `有几道题你不确定，但你写下了自己能想到的最好答案。`,
    P: `中途有几道题让你卡住了，你努力回忆着课堂上的内容。`,
    D: `你盯着试卷上的几道空白，意识到有些内容你没有真正理解。`,
    T: `你进考场时已经预感到结果不会好，出来时什么都没改变。`
  };

  const closings = passed
    ? `${professorName}看到成绩时，停顿了一下，说：「${grade === 'O' ? '论证完整。' : '及格了。'}」`
    : `${professorName}没有评论，只是在你的成绩单上画了一条线。`;

  return `${openings[grade] ?? ''} ${subjectDisplayName} ${examName} 考试结束。\n得分：${score} 分 → ${gradeFullName}\n${closings}`;
}

// ── 执行考试（核心函数）──────────────────────────────────────

/**
 * 执行麻瓜学术考试
 *
 * 调用方负责提供答题结果（correctCount），或传入 null 由系统基于进度模拟
 * （正式接入 UI 后替换为真实答题流程）
 *
 * @param {string} subjectKey
 * @param {'gcse'|'alevel'} type
 * @param {number|null} correctCount  答对题数；null = 按进度自动模拟
 * @returns {{ grade, score, passed, narrative, error? }}
 */
export function takeMuggleExam(subjectKey, type = 'gcse', correctCount = null) {
  const eligibility = canTakeExam(subjectKey, type);
  if (!eligibility.eligible) {
    return { grade: null, score: 0, passed: false, narrative: '', error: eligibility.reason };
  }

  const questions = drawExamQuestions(subjectKey, type);
  const total = questions.length || (type === 'alevel' ? 15 : 10);

  // 若未提供真实答题结果，按进度估算（供占位使用，接入 UI 后移除）
  let correct = correctCount;
  if (correct === null) {
    const progress = getSubjectProgress(subjectKey);
    const baseMean = progress * total;
    const noise = (Math.random() - 0.5) * total * 0.25;
    correct = Math.round(Math.max(0, Math.min(total, baseMean + noise)));
  }

  const score = Math.round((correct / total) * 100);
  const grade = scoreToGrade(score);
  const passed = PASSING_GRADES.has(grade);
  const takenDate = getSave().time?.currentDate ?? '1991-09-02';

  // 写入存档
  const data = ensureMuggleExams(getSave());
  data.course.muggleExams[type][subjectKey] = { grade, score, takenDate, correct, total };
  setSave(data);

  return {
    grade,
    score,
    passed,
    narrative: buildNarrative(subjectKey, type, grade, score),
    correct,
    total
  };
}

// ── 成绩单汇总 ───────────────────────────────────────────────

/**
 * 返回麻瓜学术系全科成绩单
 * @returns {{ gcse: Object, alevel: Object, gcseSummary: string, alevelSummary: string }}
 */
export function getMuggleExamSummary() {
  const { gcse, alevel } = getMuggleExams();
  const subjectNames = window.muggleSchedule?.SUBJECT_NAMES ?? {};

  function formatRecord(record, subjectKey) {
    const name = subjectNames[subjectKey] ?? subjectKey;
    if (!record?.grade) return `${name}：未参加`;
    const passed = PASSING_GRADES.has(record.grade) ? '✓' : '✗';
    return `${passed} ${name}：${record.grade}（${record.score}分）`;
  }

  const subjects = window.muggleSchedule?.MUGGLE_SUBJECTS ?? Object.keys(subjectNames);

  const gcseSummary = subjects.map(k => formatRecord(gcse[k], k)).join('\n');
  const alevelSummary = subjects
    .filter(k => alevel[k])
    .map(k => formatRecord(alevel[k], k))
    .join('\n') || '（尚未参加任何 A-Level 考试）';

  return { gcse, alevel, gcseSummary, alevelSummary };
}

// ── 获取所有可报考科目列表 ────────────────────────────────────

/**
 * 返回当前可报考的科目列表（含资格原因）
 * @param {'gcse'|'alevel'} type
 * @returns {Array<{ subjectKey, name, eligible, reason }>}
 */
export function getExamEligibilityList(type = 'gcse') {
  const subjects = window.muggleSchedule?.MUGGLE_SUBJECTS ?? [];
  const subjectNames = window.muggleSchedule?.SUBJECT_NAMES ?? {};
  return subjects.map(key => {
    const { eligible, reason } = canTakeExam(key, type);
    return { subjectKey: key, name: subjectNames[key] ?? key, eligible, reason };
  });
}

// ── 全局挂载 ─────────────────────────────────────────────────
window.muggleExam = {
  EXAM_GRADES,
  GRADE_THRESHOLDS,
  GRADE_NAMES,
  PASSING_GRADES,
  getMuggleExams,
  getMuggleExamResult,
  canTakeExam,
  takeMuggleExam,
  getMuggleExamSummary,
  getExamEligibilityList
};

export default window.muggleExam;

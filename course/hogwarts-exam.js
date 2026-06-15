/**
 * hogwarts-exam.js
 * 霍格沃茨魔法考试机制
 *
 * 体系对照：
 *   O.W.L. (Ordinary Wizarding Level)     普通巫师等级考试（霍格沃茨 Year 5，5月起可报考）
 *   N.E.W.T. (Nastily Exhausting Wizarding Test) 终极巫师等级考试（霍格沃茨 Year 7，5月起可报考）
 *
 * 考试条件：
 *   O.W.L. ：yearGrade >= 5  AND 该科目学习进度 >= 60%
 *   N.E.W.T.：yearGrade >= 7  AND O.W.L. 成绩 >= A       AND 进度 >= 85%
 *
 * 成绩等级（与麻瓜考试统一）：
 *   O (Outstanding)        ≥ 90分
 *   E (Exceeds Expectations) ≥ 75分
 *   A (Acceptable)         ≥ 60分
 *   P (Poor)               ≥ 45分
 *   D (Dreadful)           ≥ 30分
 *   T (Troll)               < 30分
 *
 * 存档结构：
 *   data.course.hogwartsExams.owl[subjectKey]    = { grade, score, takenDate }
 *   data.course.hogwartsExams.newt[subjectKey]   = { grade, score, takenDate }
 *
 * 接口：
 *   getHogwartsExams()                          读取全部考试记录
 *   getHogwartsExamResult(subjectKey, type)     读取单科结果
 *   canTakeExam(subjectKey, type)               检查资格 → { eligible, reason }
 *   takeHogwartsExam(subjectKey, type)          执行考试 → { grade, score, passed, narrative }
 *   getHogwartsExamSummary()                    汇总成绩单
 */

import { getSave, setSave, getYearGrade } from '../save/save-system.js';

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
export const PASSING_GRADES = new Set(['O', 'E', 'A']);

const EXAM_TYPE_NAMES = { owl: 'O.W.L.', newt: 'N.E.W.T.' };

const HOGWARTS_SUBJECTS = [
  'transfiguration',
  'charms',
  'potions',
  'defense',
  'herbology',
  'magicHistory',
  'astronomy',
  'flight',
  'arithmancy',
  'ancientRunes',
  'divination',
  'careOfMagicalCreatures',
  'muggleStudies',
  'apparition',
  'alchemy'
];

const SUBJECT_DISPLAY_NAMES = {
  transfiguration: '变形术',
  charms: '魔咒学',
  potions: '魔药学',
  defense: '黑魔法防御术',
  herbology: '草药学',
  magicHistory: '魔法史',
  astronomy: '天文学',
  flight: '飞行课',
  arithmancy: '算术占卜',
  ancientRunes: '古代魔文',
  divination: '占卜学',
  careOfMagicalCreatures: '保护神奇动物',
  muggleStudies: '麻瓜研究',
  apparition: '幻影移形',
  alchemy: '炼金术'
};

function ensureHogwartsExams(data) {
  if (!data.course) data.course = {};
  if (!data.course.hogwartsExams) data.course.hogwartsExams = {};
  if (!data.course.hogwartsExams.owl) data.course.hogwartsExams.owl = {};
  if (!data.course.hogwartsExams.newt) data.course.hogwartsExams.newt = {};
  return data;
}

export function getHogwartsExams() {
  const data = getSave();
  return {
    owl:  data.course?.hogwartsExams?.owl  ?? {},
    newt: data.course?.hogwartsExams?.newt ?? {}
  };
}

export function getHogwartsExamResult(subjectKey, type = 'owl') {
  return getHogwartsExams()[type]?.[subjectKey] ?? null;
}

function getSubjectProgress(subjectKey) {
  const winKey = `subject_${subjectKey}`;
  const subjectData = window[winKey];
  if (!subjectData?.syllabus) return 0;

  let total = 0;
  subjectData.syllabus.forEach(ch => { total += ch.lessons?.length ?? 0; });
  if (total === 0) return 0;

  const data = getSave();
  const progress = data.course?.muggleProgress?.[subjectKey];
  if (progress) {
    const progressedLessons = new Set([
      ...(progress.completed || []),
      ...(progress.expired || []),
    ]).size;
    return Math.min(progressedLessons / total, 1);
  }

  const current = data.course?.progress?.[subjectKey]?.currentLesson ?? 1;
  return Math.min(Math.max(current - 1, 0) / total, 1);
}

export function canTakeExam(subjectKey, type = 'owl') {
  const grade = getYearGrade();
  const progress = getSubjectProgress(subjectKey);
  const exams = getHogwartsExams();

  if (type === 'owl') {
    if (grade < 5)
      return { eligible: false, reason: `O.W.L. 需要至少 5 年级，当前 ${grade} 年级` };
    if (progress < 0.6)
      return { eligible: false, reason: `O.W.L. 需要完成 60% 课程，当前 ${Math.round(progress * 100)}%` };
    if (exams.owl[subjectKey]?.grade)
      return { eligible: false, reason: `已参加 O.W.L.，成绩：${exams.owl[subjectKey].grade}` };
    return { eligible: true, reason: '' };
  }

  if (type === 'newt') {
    if (grade < 7)
      return { eligible: false, reason: `N.E.W.T. 需要至少 7 年级，当前 ${grade} 年级` };
    const owlGrade = exams.owl[subjectKey]?.grade;
    if (!owlGrade)
      return { eligible: false, reason: 'N.E.W.T. 需要先通过 O.W.L.' };
    if (!PASSING_GRADES.has(owlGrade))
      return { eligible: false, reason: `O.W.L. 成绩 ${owlGrade} 不足以报考 N.E.W.T.（需要 A 或以上）` };
    if (progress < 0.85)
      return { eligible: false, reason: `N.E.W.T. 需要完成 85% 课程，当前 ${Math.round(progress * 100)}%` };
    if (exams.newt[subjectKey]?.grade)
      return { eligible: false, reason: `已参加 N.E.W.T.，成绩：${exams.newt[subjectKey].grade}` };
    return { eligible: true, reason: '' };
  }

  return { eligible: false, reason: '未知考试类型' };
}

function drawExamQuestions(subjectKey, type) {
  const winKey = `subject_${subjectKey}`;
  const subjectData = window[winKey];
  const rawBank = subjectData?.questionBank ?? [];
  const count = type === 'newt' ? 15 : 10;

  let pool = rawBank.flatMap(entry =>
    (entry.questions ?? []).map(q => ({ ...q, lesson: entry.lesson ?? 0 }))
  );
  if (pool.length === 0) return [];

  if (type === 'owl') {
    const totalLessons = rawBank.length;
    const maxLesson = Math.floor(totalLessons * 0.6) || totalLessons;
    const filtered = pool.filter(q => q.lesson <= maxLesson);
    if (filtered.length > 0) pool = filtered;
  }

  return [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(count, pool.length));
}

function scoreToGrade(score) {
  if (score >= GRADE_THRESHOLDS.O) return 'O';
  if (score >= GRADE_THRESHOLDS.E) return 'E';
  if (score >= GRADE_THRESHOLDS.A) return 'A';
  if (score >= GRADE_THRESHOLDS.P) return 'P';
  if (score >= GRADE_THRESHOLDS.D) return 'D';
  return 'T';
}

function buildNarrative(subjectKey, type, grade, score) {
  const examName = EXAM_TYPE_NAMES[type];
  const subjectDisplayName = SUBJECT_DISPLAY_NAMES[subjectKey] ?? subjectKey;

  const passed = PASSING_GRADES.has(grade);
  const gradeFullName = GRADE_NAMES[grade];

  const professors = {
    transfiguration: '麦格教授',
    charms: '弗立维教授',
    potions: '斯内普教授',
    defense: '卢平教授',
    herbology: '斯普劳特教授',
    magicHistory: '宾斯教授',
    astronomy: '辛尼斯塔教授',
    flight: '霍琦夫人',
    arithmancy: '维克多教授',
    ancientRunes: '弗立维教授',
    divination: '特里劳妮教授',
    careOfMagicalCreatures: '海格',
    muggleStudies: '凯特尔伯恩教授',
    apparition: '幻影移形教师',
    alchemy: '炼金术教授'
  };

  const professorName = professors[subjectKey] || '教授';

  const openings = {
    O: `考场里弥漫着古老羊皮纸和墨水的气息。你放下羽毛笔时，知道自己完成了一场完美的答卷。`,
    E: `最后一道实操题让你思考了许久，但你成功地施展了那个复杂的咒语。`,
    A: `有几道题你不太确定，但你尽最大努力写下了答案。`,
    P: `考试进行到一半时，你发现有些内容还没有完全掌握。`,
    D: `你盯着试卷上的空白，意识到自己遗漏了不少重要的知识点。`,
    T: `你走进考场时就预感结果不会理想，事实证明你的预感是对的。`
  };

  const closings = passed
    ? `${professorName}看着你的成绩，微微点头：「${grade === 'O' ? '出色的表现。' : '及格了。'}」`
    : `${professorName}只是在你的成绩单上画了一条线，什么都没说。`;

  return `${openings[grade] ?? ''} ${subjectDisplayName} ${examName} 考试结束。\n得分：${score} 分 → ${gradeFullName}\n${closings}`;
}

export function takeHogwartsExam(subjectKey, type = 'owl', correctCount = null) {
  const eligibility = canTakeExam(subjectKey, type);
  if (!eligibility.eligible) {
    return { grade: null, score: 0, passed: false, narrative: '', error: eligibility.reason };
  }

  const questions = drawExamQuestions(subjectKey, type);
  const total = questions.length || (type === 'newt' ? 15 : 10);

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

  const data = ensureHogwartsExams(getSave());
  data.course.hogwartsExams[type][subjectKey] = { grade, score, takenDate, correct, total };
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

export function getHogwartsExamSummary() {
  const { owl, newt } = getHogwartsExams();

  function formatRecord(record, subjectKey) {
    const name = SUBJECT_DISPLAY_NAMES[subjectKey] ?? subjectKey;
    if (!record?.grade) return `${name}：未参加`;
    const passed = PASSING_GRADES.has(record.grade) ? '✓' : '✗';
    return `${passed} ${name}：${record.grade}（${record.score}分）`;
  }

  const owlSummary = HOGWARTS_SUBJECTS.map(k => formatRecord(owl[k], k)).join('\n');
  const newtSummary = HOGWARTS_SUBJECTS
    .filter(k => newt[k])
    .map(k => formatRecord(newt[k], k))
    .join('\n') || '（尚未参加任何 N.E.W.T. 考试）';

  return { owl, newt, owlSummary, newtSummary, SUBJECT_DISPLAY_NAMES };
}

export function getExamEligibilityList(type = 'owl') {
  const exams = getHogwartsExams();

  return HOGWARTS_SUBJECTS.map(key => {
    const { eligible, reason } = canTakeExam(key, type);
    const hasResult = type === 'owl' ? exams.owl[key]?.grade : exams.newt[key]?.grade;
    return { subjectKey: key, name: SUBJECT_DISPLAY_NAMES[key] ?? key, eligible, reason, hasResult };
  });
}

window.hogwartsExam = {
  EXAM_GRADES,
  GRADE_THRESHOLDS,
  GRADE_NAMES,
  PASSING_GRADES,
  getHogwartsExams,
  getHogwartsExamResult,
  canTakeExam,
  takeHogwartsExam,
  getHogwartsExamSummary,
  getExamEligibilityList,
  SUBJECT_DISPLAY_NAMES
};

export default window.hogwartsExam;

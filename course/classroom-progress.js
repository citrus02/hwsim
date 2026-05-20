// classroom-progress.js - lesson lookup, course progress, and open-answer persistence
import { loadSave, writeSave } from './save-utils.js';
import { MUGGLE_SUBJECTS, getCurrentLesson as getMuggleCurrentLesson } from './muggle-schedule.js';
import { SUBJECT_WIN_KEY, HOGWARTS_SUBJECT_KEYS, getSubjectData, getAllLessons, HOUSE_POINTS_MAP } from './utils.js';

export function getCurrentLesson(subjectKey) {
  const data = getSubjectData(subjectKey);
  if (!data) return null;
  const all = getAllLessons(data.syllabus);

  // 麻瓜课程使用特殊课时逻辑：基于课程表和学习进度
  if (MUGGLE_SUBJECTS.includes(subjectKey)) {
    const currentLessonNum = getMuggleCurrentLesson(subjectKey);
    return all.find(l => l.lesson === currentLessonNum) || all[all.length - 1];
  }

  // 霍格沃茨课程使用原有逻辑
  const prog = loadSave().course?.muggleProgress?.[subjectKey] || {};
  const done = [...(prog.completed || []), ...(prog.expired || [])];
  return all.find(l => !done.includes(l.lesson)) || all[all.length - 1];
}

export function getQuestionsForLesson(questionBank, lessonNum) {
  return (questionBank || []).find(q => q.lesson === lessonNum) || null;
}

// ── 结算写档 ─────────────────────────────────────────────
export function saveProgress(subjectKey, lessonNum, rating) {
  const data = loadSave();
  if (!data.course) data.course = {};
  if (!data.course.muggleProgress) data.course.muggleProgress = {};
  if (!data.course.muggleProgress[subjectKey])
    data.course.muggleProgress[subjectKey] = { completed: [], expired: [] };

  const prog = data.course.muggleProgress[subjectKey];
  if (!prog.completed.includes(lessonNum)) prog.completed.push(lessonNum);

  // ── 霍格沃茨课程：按完成课时数更新 data.course[课程名] ──
  const sd = getSubjectData(subjectKey);
  if (sd) {
    const total = getAllLessons(sd.syllabus).length;
    const done  = new Set([...(prog.completed || []), ...(prog.expired || [])]).size;
    const pct   = total > 0 ? Math.floor(done / total * 100) : 0;
    // 找到课程对应的中文名写入 data.course
    const courseName = sd.subjectMeta?.name;
    if (courseName) data.course[courseName] = pct;
  }

  // ── 麻瓜研究总进度（九门均值）──────────────────────────
  const MUGGLE_KEYS = Object.keys(SUBJECT_WIN_KEY).filter(k => !HOGWARTS_SUBJECT_KEYS.has(k));
  let totalRate = 0;
  MUGGLE_KEYS.forEach(k => {
    const sd2 = getSubjectData(k);
    if (!sd2) return;
    const total = getAllLessons(sd2.syllabus).length;
    const p = data.course.muggleProgress?.[k] || {};
    const done  = new Set([...(p.completed || []), ...(p.expired || [])]).size;
    totalRate += total > 0 ? Math.floor(done / total * 100) : 0;
  });
  if (MUGGLE_KEYS.length > 0)
    data.course["麻瓜研究"] = Math.round(totalRate / MUGGLE_KEYS.length);

  writeSave(data);

  // ── 学院分 ──────────────────────────────────────────────
  if (rating && HOUSE_POINTS_MAP[rating]) {
    const hpData   = loadSave();
    const pKey     = window.housePoints?.HOUSE_MAP?.[hpData.player?.house];
    if (pKey && window.housePoints?.HOUSE_DISPLAY?.[pKey]) {
      if (!hpData.housePoints || typeof hpData.housePoints !== "object")
        hpData.housePoints = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
      hpData.housePoints[pKey] = Math.max(0, (hpData.housePoints[pKey] || 0) + HOUSE_POINTS_MAP[rating]);
      writeSave(hpData);
    }
  }

  window.refreshAll?.();
  window.autoUnlockByCourse?.();
}

export function saveOpenAnswerEntry(st, subjectKey, lesson, rating = null) {
  if (st.openScore == null || !st.openAnswer) return;
  const data = loadSave();
  const key = `${subjectKey}_${lesson.lesson}`;
  const timestamp = st.openAnswerTimestamp || Date.now();
  st.openAnswerTimestamp = timestamp;

  if (!data.openAnswers) data.openAnswers = {};
  if (!data.openAnswers[key]) data.openAnswers[key] = [];

  const entry = {
    answer:         st.openAnswer,
    question:       st.openQuestion || "",
    score:          st.openScore,
    maxScore:       st.openMaxScore,
    feedback:       st.openFeedback,
    pointsAchieved: st.openPointsAchieved || [],
    lessonTitle:    lesson.title,
    lessonNum:      lesson.lesson,
    rating,
    timestamp
  };

  const existingIdx = data.openAnswers[key].findIndex(e => e.timestamp === timestamp);
  if (existingIdx >= 0) data.openAnswers[key][existingIdx] = { ...data.openAnswers[key][existingIdx], ...entry };
  else data.openAnswers[key].unshift(entry);

  if (data.openAnswers[key].length > 5) data.openAnswers[key].length = 5;
  writeSave(data);
}

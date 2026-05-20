// course-attendance.js - scheduled course lookup, access checks, attendance, and missed-class progress
import { isSchoolNoClassDate, isSchoolNoClassPeriod } from '../time-system.js';
import { getYearGrade } from '../save-system.js';
import { courseData } from './course-data.js';
import { loadSave, writeSave } from './save-utils.js';
import { showLearnChoiceModal } from './classroom.js';
import { getSubjectData, getAllLessons, getItemSubjectKey } from './utils.js';
import { courseScheduleManager } from './course-schedule.js';

export const SCHOOL_DAYS = ["周一", "周二", "周三", "周四", "周五"];
export const DAY_NAMES = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
export const GRADE_TEXT = ["", "一年级", "二年级", "三年级", "四年级", "五年级", "六年级", "七年级"];
export const ACTION_PERIODS = {
  3: { period: 1, time: "上午", label: "上午" },
  2: { period: 2, time: "下午", label: "下午" },
  1: { period: 3, time: "夜晚", label: "夜晚" },
};
export function getDayName(dateStr) {
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? "" : DAY_NAMES[date.getDay()];
}

export function findCourseItemByName(name, items = courseData) {
  for (const item of items) {
    if (item.name === name) return item;
    if (item.children) {
      const found = findCourseItemByName(name, item.children);
      if (found) return found;
    }
  }
  return null;
}

export function findCourseItemBySubjectKey(subjectKey, keyName, items = courseData) {
  for (const item of items) {
    if (item[keyName] === subjectKey) return item;
    if (item.children) {
      const found = findCourseItemBySubjectKey(subjectKey, keyName, item.children);
      if (found) return found;
    }
  }
  return null;
}

export function getCurrentActionPeriod() {
  const data = loadSave();
  const left = window.timeSystem?.dailyActionLeft ?? data.time?.dailyActionLeft ?? 3;
  return ACTION_PERIODS[left]?.period || null;
}

export function openScheduledCourse({ type, day, period, subject, subjectKey }) {
  const data = loadSave();
  const today = window.timeSystem?.currentDate || data.time?.currentDate || "1991-09-02";
  const todayDayName = getDayName(today);

  if (day !== todayDayName || isSchoolNoClassPeriod(today, period)) {
    window.doStudyLog?.(`📅 今天没有${subject}课。`);
    return;
  }

  if (period !== getCurrentActionPeriod()) {
    window.doStudyLog?.(getCourseTimeMessage(period, subject));
    return;
  }

  const item = type === "muggle"
    ? findCourseItemBySubjectKey(subjectKey, "muggleSubjectKey")
    : findCourseItemByName(subject);

  if (!item) {
    window.doStudyLog?.(`📅 没有找到这门课：${subject}`);
    return;
  }

  showLearnChoiceModal(item, courseData, "课程表");
}

export function bindScheduleCourseClicks(container) {
  container.querySelectorAll(".schedule-course-cell").forEach(cell => {
    cell.addEventListener("click", () => {
      openScheduledCourse({
        type: cell.dataset.courseType,
        day: cell.dataset.day,
        period: Number(cell.dataset.period),
        subject: cell.dataset.subject,
        subjectKey: cell.dataset.subjectKey || null,
      });
    });
    cell.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        cell.click();
      }
    });
  });
}

export function getHogwartsTodaySchedule(dateStr = null) {
  const data = loadSave();
  const today = dateStr || data.time?.currentDate || "1991-09-02";
  const dayName = getDayName(today);
  if (!SCHOOL_DAYS.includes(dayName) || isSchoolNoClassDate(today)) return [];

  const grade = getYearGrade();
  const gradeSchedule = courseScheduleManager.getGradeSchedule(grade) || courseScheduleManager.getGradeSchedule(1);
  if (!gradeSchedule) return [];
  
  const dayCourses = gradeSchedule[dayName] || [];
  return dayCourses.map(course => {
    const item = findCourseItemByName(course.subject);
    return {
      ...course,
      type: "hogwarts",
      period: Object.values(ACTION_PERIODS).find(p => p.time === course.time)?.period || 0,
      subjectKey: item?.hogwartsSubjectKey || null,
    };
  });
}

export function getMuggleTodaySchedule(dateStr = null) {
  const muggleSchedule = window.muggleSchedule;
  const data = loadSave();
  const today = dateStr || data.time?.currentDate || "1991-09-02";
  if (isSchoolNoClassDate(today)) return [];
  if (!muggleSchedule?.getTodaySchedule) return [];
  return muggleSchedule.getTodaySchedule(today).map(course => ({
    type: "muggle",
    period: course.period,
    time: Object.values(ACTION_PERIODS).find(p => p.period === course.period)?.time || "",
    subject: muggleSchedule.SUBJECT_NAMES?.[course.subject] || course.subject,
    subjectKey: course.subject,
    icon: muggleSchedule.SUBJECT_ICONS?.[course.subject] || "📚",
  }));
}

export function getTodayScheduledCourses(dateStr = null) {
  return [...getHogwartsTodaySchedule(dateStr), ...getMuggleTodaySchedule(dateStr)];
}

export function getCurrentWindowCourses(dateStr = null, actionLeft = null) {
  const data = loadSave();
  const today = dateStr || data.time?.currentDate || "1991-09-02";
  const left = actionLeft ?? data.time?.dailyActionLeft ?? window.timeSystem?.dailyActionLeft ?? 3;
  const period = ACTION_PERIODS[left]?.period;
  if (!period) return [];
  if (isSchoolNoClassPeriod(today, period)) return [];
  return getTodayScheduledCourses(today).filter(course => course.period === period);
}

export function getAttendanceKey(course) {
  return `${course.type}:${course.subjectKey || course.subject}:${course.period}`;
}

export function ensureAttendance(data, dateStr) {
  if (!data.course) data.course = {};
  if (!data.course.attendance) data.course.attendance = {};
  if (!data.course.attendance[dateStr]) data.course.attendance[dateStr] = {};
  return data.course.attendance[dateStr];
}

export function isCourseResolved(course, dateStr) {
  const data = loadSave();
  return !!data.course?.attendance?.[dateStr]?.[getAttendanceKey(course)];
}

export function courseMatchesItem(course, item) {
  const key = getItemSubjectKey(item);
  if (item?.muggleSubjectKey) return course.type === "muggle" && course.subjectKey === key;
  if (item?.hogwartsSubjectKey) return course.type === "hogwarts" && course.subjectKey === key;
  return course.type === "hogwarts" && course.subject === item?.name;
}

export function getCourseTimeMessage(period, subjectName) {
  const currentPeriod = getCurrentActionPeriod();
  const timePeriod = Object.values(ACTION_PERIODS).find(p => p.period === period);
  const timeLabel = timePeriod?.time || '';

  if (period < currentPeriod) {
    return `⚠️ 已经错过了今天${timeLabel}的${subjectName}课。如果可以补课的话……`;
  } else {
    return `⏰ 现在还没到【${subjectName}】的上课时间，等上课的时候再来吧！`;
  }
}

export function validateCourseAccess(item) {
  if (!item) {
    return { ok: false, message: "📅 没有找到这门课" };
  }
  const data = loadSave();
  const today = data.time?.currentDate || "1991-09-02";

  const current = getCurrentWindowCourses(today).find(course => courseMatchesItem(course, item));
  if (!current) {
    const allToday = getTodayScheduledCourses(today).filter(course => courseMatchesItem(course, item));
    if (allToday.length === 0) {
      return { ok: false, message: `📅 今天没有${item.name}课。` };
    }
    return { ok: false, message: getCourseTimeMessage(allToday[0].period, item.name) };
  }

  if (isCourseResolved(current, today)) {
    const attendanceStatus = data.course?.attendance?.[today]?.[getAttendanceKey(current)];
    if (attendanceStatus === 'missed') {
      return { ok: false, message: getCourseTimeMessage(current.period, item.name) };
    }
    const timePeriod = Object.values(ACTION_PERIODS).find(p => p.period === current.period);
    return { ok: false, message: `✅ 今天${timePeriod?.time || ''}已经上过${item.name}课了。` };
  }

  return { ok: true, course: current };
}

export function markAttended(item) {
  const availability = validateCourseAccess(item);
  if (!availability.ok) return false;

  const data = loadSave();
  const today = data.time?.currentDate || "1991-09-02";
  const attendance = ensureAttendance(data, today);
  attendance[getAttendanceKey(availability.course)] = "attended";
  writeSave(data);
  return true;
}

export function advanceSkippedLesson(data, course) {
  if (!data) {
    console.warn('[course.js] advanceSkippedLesson: data is null or undefined');
    return;
  }
  if (!course) {
    console.warn('[course.js] advanceSkippedLesson: course is null or undefined');
    return;
  }
  if (!data.course) data.course = {};

  if (course.type === "muggle") {
    if (!course.subjectKey) {
      console.warn('[course.js] advanceSkippedLesson: muggle course missing subjectKey');
      return;
    }
    const subjectData = getSubjectData(course.subjectKey);
    if (!data.course.muggleProgress) data.course.muggleProgress = {};
    if (!data.course.muggleProgress[course.subjectKey]) {
      data.course.muggleProgress[course.subjectKey] = { completed: [], expired: [] };
    }
    if (!data.course.muggleSchedule) data.course.muggleSchedule = {};
    if (!data.course.muggleSchedule[course.subjectKey]) {
      data.course.muggleSchedule[course.subjectKey] = {
        currentLesson: 1,
        lastStudiedDate: null,
        hasMetProfessor: false
      };
    }
    const allLessons = getAllLessons(subjectData?.syllabus);
    const currentLesson = data.course.muggleSchedule?.[course.subjectKey]?.currentLesson || 1;
    if (allLessons.length > 0) {
      const lesson = allLessons.find(l => l.lesson === currentLesson) || allLessons[allLessons.length - 1];
      if (lesson && !data.course.muggleProgress[course.subjectKey].expired.includes(lesson.lesson)) {
        data.course.muggleProgress[course.subjectKey].expired.push(lesson.lesson);
      }
      if (currentLesson < allLessons.length) {
        data.course.muggleSchedule[course.subjectKey].currentLesson = currentLesson + 1;
      }
      const progressed = new Set([
        ...(data.course.muggleProgress[course.subjectKey].completed || []),
        ...(data.course.muggleProgress[course.subjectKey].expired || [])
      ]).size;
      if (course.subject) {
        data.course[course.subject] = Math.floor(progressed / allLessons.length * 100);
      }
    }
    updateMuggleOverallProgress(data);
    return;
  }

  if (!course.subject) {
    console.warn('[course.js] advanceSkippedLesson: hogwarts course missing subject name');
    return;
  }

  const item = findCourseItemByName(course.subject);
  const subjectKey = course.subjectKey || item?.hogwartsSubjectKey;
  const subjectData = subjectKey ? getSubjectData(subjectKey) : null;
  if (subjectData?.syllabus) {
    if (!data.course.muggleProgress) data.course.muggleProgress = {};
    if (!data.course.muggleProgress[subjectKey]) {
      data.course.muggleProgress[subjectKey] = { completed: [], expired: [] };
    }
    const prog = data.course.muggleProgress[subjectKey];
    const skipped = [...(prog.completed || []), ...(prog.expired || [])];
    const lesson = getAllLessons(subjectData.syllabus).find(l => !skipped.includes(l.lesson));
    if (lesson) prog.expired.push(lesson.lesson);
    const total = getAllLessons(subjectData.syllabus).length;
    const progressed = new Set([...(prog.completed || []), ...(prog.expired || [])]).size;
    if (total > 0) data.course[course.subject] = Math.floor(progressed / total * 100);
  } else {
    data.course[course.subject] = Math.min(100, (data.course[course.subject] || 0) + 5);
  }
}

export function updateMuggleOverallProgress(data) {
  const muggleKeys = ["math", "physics", "chemistry", "biology", "history", "civics", "geography", "literature", "latin"];
  let totalRate = 0;
  let counted = 0;

  for (const key of muggleKeys) {
    const subjectData = getSubjectData(key);
    const lessons = getAllLessons(subjectData?.syllabus);
    if (lessons.length === 0) continue;
    const prog = data.course?.muggleProgress?.[key] || {};
    const progressed = new Set([...(prog.completed || []), ...(prog.expired || [])]).size;
    totalRate += Math.floor(progressed / lessons.length * 100);
    counted++;
  }

  if (counted > 0) data.course["麻瓜研究"] = Math.round(totalRate / counted);
}

export function remindCurrentWindowClasses() {
  const data = loadSave();
  const today = window.timeSystem?.currentDate || data.time?.currentDate || "1991-09-02";
  const actionLeft = window.timeSystem?.dailyActionLeft ?? data.time?.dailyActionLeft ?? 3;
  const windowInfo = ACTION_PERIODS[actionLeft];
  if (!windowInfo) return;

  const courses = getCurrentWindowCourses(today, actionLeft)
    .filter(course => !data.course?.attendance?.[today]?.[getAttendanceKey(course)]);
  if (courses.length === 0) return;

  if (!data.course) data.course = {};
  if (!data.course.scheduleReminders) data.course.scheduleReminders = {};
  if (!data.course.scheduleReminders[today]) data.course.scheduleReminders[today] = {};
  if (data.course.scheduleReminders[today][windowInfo.period]) return;

  data.course.scheduleReminders[today][windowInfo.period] = true;
  writeSave(data);

  const names = courses.map(c => `${c.icon || "📚"}${c.subject}`).join("、");
  window.doStudyLog?.(`🔔 ${windowInfo.label}有课：${names}。上课不消耗行动次数，${windowInfo.label}结束前记得去。`);
}

export function recordMissedClassesForCurrentWindow() {
  const data = loadSave();
  const today = window.timeSystem?.currentDate || data.time?.currentDate || "1991-09-02";
  const actionLeft = window.timeSystem?.dailyActionLeft ?? data.time?.dailyActionLeft ?? 3;
  const windowInfo = ACTION_PERIODS[actionLeft];
  if (!windowInfo) return;

  const attendance = ensureAttendance(data, today);
  const courses = getCurrentWindowCourses(today, actionLeft);
  const missed = [];

  for (const course of courses) {
    const key = getAttendanceKey(course);
    if (attendance[key]) continue;
    attendance[key] = "missed";
    advanceSkippedLesson(data, course);

    if (!data.course.absenceStats) data.course.absenceStats = { total: 0, bySubject: {}, records: [] };
    data.course.absenceStats.total = (data.course.absenceStats.total || 0) + 1;
    if (!data.course.absenceStats.bySubject) data.course.absenceStats.bySubject = {};
    data.course.absenceStats.bySubject[course.subject] = (data.course.absenceStats.bySubject[course.subject] || 0) + 1;
    if (!Array.isArray(data.course.absenceStats.records)) data.course.absenceStats.records = [];
    data.course.absenceStats.records.push({
      date: today,
      window: windowInfo.label,
      period: course.period,
      type: course.type,
      subject: course.subject,
      subjectKey: course.subjectKey || null,
    });
    data.course.absenceStats.records = data.course.absenceStats.records.slice(-200);
    missed.push(course);
  }

  if (missed.length > 0) {
    writeSave(data);
    const names = missed.map(c => `${c.icon || "📚"}${c.subject}`).join("、");
    window.doStudyLog?.(`⚠️ 你错过了${windowInfo.label}的课程：${names}。课程进度已照常推进，旷课次数已记录。`);
    window.loadCourseProgressFromSave?.();
    window.refreshAll?.();
  }
}

export function getNextSchoolWindow(dateStr, actionLeft) {
  if (actionLeft > 1) {
    return { date: dateStr, actionLeft: actionLeft - 1 };
  }

  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return null;
  date.setDate(date.getDate() + 1);
  return {
    date: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`,
    actionLeft: 3,
  };
}

export function isBeforeSchoolWindow(dateStr, actionLeft, targetDate, targetActionLeft) {
  if (dateStr < targetDate) return true;
  if (dateStr > targetDate) return false;
  return (ACTION_PERIODS[actionLeft]?.period || 0) < (ACTION_PERIODS[targetActionLeft]?.period || 0);
}

export function recordMissedClassesBetween(fromDate, fromActionLeft, targetDate, targetActionLeft) {
  const data = loadSave();
  let cursor = {
    date: fromDate || data.time?.currentDate || "1991-09-02",
    actionLeft: fromActionLeft ?? data.time?.dailyActionLeft ?? 3,
  };
  const endDate = targetDate || data.time?.currentDate || cursor.date;
  const endActionLeft = targetActionLeft ?? data.time?.dailyActionLeft ?? cursor.actionLeft;
  const missed = [];
  let guard = 0;

  while (
    isBeforeSchoolWindow(cursor.date, cursor.actionLeft, endDate, endActionLeft) &&
    guard < 4000
  ) {
    const windowInfo = ACTION_PERIODS[cursor.actionLeft];
    if (windowInfo) {
      const attendance = ensureAttendance(data, cursor.date);
      for (const course of getCurrentWindowCourses(cursor.date, cursor.actionLeft)) {
        const key = getAttendanceKey(course);
        if (attendance[key]) continue;
        attendance[key] = "missed";
        advanceSkippedLesson(data, course);

        if (!data.course.absenceStats) data.course.absenceStats = { total: 0, bySubject: {}, records: [] };
        data.course.absenceStats.total = (data.course.absenceStats.total || 0) + 1;
        if (!data.course.absenceStats.bySubject) data.course.absenceStats.bySubject = {};
        data.course.absenceStats.bySubject[course.subject] = (data.course.absenceStats.bySubject[course.subject] || 0) + 1;
        if (!Array.isArray(data.course.absenceStats.records)) data.course.absenceStats.records = [];
        data.course.absenceStats.records.push({
          date: cursor.date,
          window: windowInfo.label,
          period: course.period,
          type: course.type,
          subject: course.subject,
          subjectKey: course.subjectKey || null,
        });
        missed.push(course);
      }
    }

    const next = getNextSchoolWindow(cursor.date, cursor.actionLeft);
    if (!next) break;
    cursor = next;
    guard++;
  }

  if (missed.length > 0) {
    if (data.course?.absenceStats?.records) {
      data.course.absenceStats.records = data.course.absenceStats.records.slice(-200);
    }
    writeSave(data);
    window.loadCourseProgressFromSave?.();
    window.refreshAll?.();
  }

  return missed.length;
}

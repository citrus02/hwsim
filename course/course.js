/**
 * course.js
 * 课程系统主逻辑 & UI
 *
 * =====================================================================
 *  传统巫师课七年制 · 年级课时总表（开发完整度检查用）
 * =====================================================================
 *
 *  说明：
 *  - 固定课程表定义在本文件 SCHEDULE 常量中。
 *  - 目标课时 = 周课时 × 34周（每年级）。
 *  - 当前课时 = syllabus / lessonMap / questionBank 三边现状。
 *  - 质量优先：已移除批量生成稿，后续按手写课堂标准逐门补齐。
 *
 *  科目             年1 年2 年3 年4 年5 年6 年7   目标   当前
 *  ─────────────────────────────────────────────────────────
 *  变形术            2   2   1   1   1   1   1      306    42/24/42
 *  魔咒学            2   2   1   1   1   1   1      306    42/42/42
 *  魔药学            2   2   2   2   2   2   2      476    46/46/46
 *  黑魔法防御术      2   2   2   2   2   2   2      476    42/42/42
 *  草药学            2   1   1   1   1   1   —      238    31/31/31
 *  魔法史            1   2   1   1   1   —   1      238    31/31/31
 *  天文学            1   1   1   1   1   1   1      238    42/42/42
 *  飞行课            1   1   —   —   —   —   —       68    68/68/68
 *  占卜学            —   —   1   1   1   —   1      136    待手写
 *  保护神奇动物      —   —   1   1   1   1   1      170    待手写
 *  算术占卜          —   —   1   1   —   1   1      136    待手写
 *  古代魔文          —   —   1   1   1   1   —      136    待手写
 *  幻影移形          —   —   —   —   1   —   —       34    34/34/34
 *  炼金术            —   —   —   —   —   1   1       68    待手写
 *  ─────────────────────────────────────────────────────────
 *  年级合计          13  13  13  13  13  13  13
 *  年级目标课时      442 442 442 442 442 442 442
 * =====================================================================
 */

import { loadTimeFromSave, isHoliday, getNoClassReason, isSchoolNoClassDate, isSchoolNoClassPeriod } from '../time-system.js';
import { getYearGrade, getSave } from '../save-system.js';
import { courseData, getStudyEvent } from './course-data.js';
import { addInternalPoints } from './muggle-studies.js';
import { loadSave, writeSave } from './save-utils.js';
import { showLearnChoiceModal } from './classroom.js';

const SCHEDULE = {
  1: {
    周一: [
      { time: "上午", subject: "草药学", icon: "🌿", prof: "斯普劳特教授" },
      { time: "下午", subject: "魔咒学", icon: "✨", prof: "弗立维教授" },
      { time: "夜晚", subject: "天文学", icon: "🌌", prof: "辛尼斯特拉教授" },
    ],
    周二: [
      { time: "上午", subject: "变形术", icon: "🔁", prof: "麦格教授" },
      { time: "下午", subject: "魔法史", icon: "📜", prof: "宾斯教授" },
      { time: "夜晚", subject: "魔药学", icon: "⚗️", prof: "斯内普教授" },
    ],
    周三: [
      { time: "上午", subject: "黑魔法防御术", icon: "🛡️", prof: "奇洛教授" },
      { time: "下午", subject: "飞行课", icon: "🧹", prof: "霍琦教授" },
    ],
    周四: [
      { time: "上午", subject: "魔药学", icon: "⚗️", prof: "斯内普教授" },
      { time: "下午", subject: "草药学", icon: "🌿", prof: "斯普劳特教授" },
    ],
    周五: [
      { time: "上午", subject: "魔咒学", icon: "✨", prof: "弗立维教授" },
      { time: "下午", subject: "变形术", icon: "🔁", prof: "麦格教授" },
      { time: "夜晚", subject: "黑魔法防御术", icon: "🛡️", prof: "奇洛教授" },
    ],
  },
  2: {
    周一: [
      { time: "上午", subject: "变形术", icon: "🔁", prof: "麦格教授" },
      { time: "下午", subject: "魔药学", icon: "⚗️", prof: "斯内普教授" },
      { time: "夜晚", subject: "黑魔法防御术", icon: "🛡️", prof: "洛哈特教授" },
    ],
    周二: [
      { time: "上午", subject: "黑魔法防御术", icon: "🛡️", prof: "洛哈特教授" },
      { time: "下午", subject: "草药学", icon: "🌿", prof: "斯普劳特教授" },
    ],
    周三: [
      { time: "上午", subject: "魔咒学", icon: "✨", prof: "弗立维教授" },
      { time: "下午", subject: "魔法史", icon: "📜", prof: "宾斯教授" },
      { time: "夜晚", subject: "天文学", icon: "🌌", prof: "辛尼斯特拉教授" },
    ],
    周四: [
      { time: "上午", subject: "飞行课", icon: "🧹", prof: "霍琦教授" },
      { time: "下午", subject: "变形术", icon: "🔁", prof: "麦格教授" },
      { time: "夜晚", subject: "魔药学", icon: "⚗️", prof: "斯内普教授" },
    ],
    周五: [
      { time: "上午", subject: "魔咒学", icon: "✨", prof: "弗立维教授" },
      { time: "下午", subject: "魔法史", icon: "📜", prof: "宾斯教授" },
    ],
  },
  3: {
    周一: [
      { time: "上午", subject: "黑魔法防御术", icon: "🛡️", prof: "卢平教授" },
      { time: "下午", subject: "占卜学", icon: "🔮", prof: "特里劳妮教授" },
    ],
    周二: [
      { time: "上午", subject: "变形术", icon: "🔁", prof: "麦格教授" },
      { time: "下午", subject: "保护神奇动物", icon: "🦎", prof: "海格教授" },
    ],
    周三: [
      { time: "上午", subject: "魔药学", icon: "⚗️", prof: "斯内普教授" },
      { time: "下午", subject: "魔咒学", icon: "✨", prof: "弗立维教授" },
      { time: "夜晚", subject: "天文学", icon: "🌌", prof: "辛尼斯特拉教授" },
    ],
    周四: [
      { time: "上午", subject: "草药学", icon: "🌿", prof: "斯普劳特教授" },
      { time: "下午", subject: "魔法史", icon: "📜", prof: "宾斯教授" },
      { time: "夜晚", subject: "黑魔法防御术", icon: "🛡️", prof: "卢平教授" },
    ],
    周五: [
      { time: "上午", subject: "算术占卜", icon: "🔢", prof: "维克多教授" },
      { time: "下午", subject: "古代魔文", icon: "𓂀", prof: "巴希达教授" },
      { time: "夜晚", subject: "魔药学", icon: "⚗️", prof: "斯内普教授" },
    ],
  },
  4: {
    周一: [
      { time: "上午", subject: "魔药学", icon: "⚗️", prof: "斯内普教授" },
      { time: "下午", subject: "黑魔法防御术", icon: "🛡️", prof: "穆迪教授" },
    ],
    周二: [
      { time: "上午", subject: "变形术", icon: "🔁", prof: "麦格教授" },
      { time: "下午", subject: "魔咒学", icon: "✨", prof: "弗立维教授" },
    ],
    周三: [
      { time: "上午", subject: "占卜学", icon: "🔮", prof: "特里劳妮教授" },
      { time: "下午", subject: "保护神奇动物", icon: "🦎", prof: "海格教授" },
      { time: "夜晚", subject: "天文学", icon: "🌌", prof: "辛尼斯特拉教授" },
    ],
    周四: [
      { time: "上午", subject: "草药学", icon: "🌿", prof: "斯普劳特教授" },
      { time: "下午", subject: "魔法史", icon: "📜", prof: "宾斯教授" },
      { time: "夜晚", subject: "黑魔法防御术", icon: "🛡️", prof: "穆迪教授" },
    ],
    周五: [
      { time: "上午", subject: "算术占卜", icon: "🔢", prof: "维克多教授" },
      { time: "下午", subject: "古代魔文", icon: "𓂀", prof: "巴希达教授" },
      { time: "夜晚", subject: "魔药学", icon: "⚗️", prof: "斯内普教授" },
    ],
  },
  5: {
    周一: [
      { time: "上午", subject: "变形术", icon: "🔁", prof: "麦格教授" },
      { time: "下午", subject: "魔药学", icon: "⚗️", prof: "斯内普教授" },
    ],
    周二: [
      { time: "上午", subject: "黑魔法防御术", icon: "🛡️", prof: "乌姆里奇教授" },
      { time: "下午", subject: "占卜学", icon: "🔮", prof: "特里劳妮教授" },
    ],
    周三: [
      { time: "上午", subject: "魔咒学", icon: "✨", prof: "弗立维教授" },
      { time: "下午", subject: "保护神奇动物", icon: "🦎", prof: "海格教授" },
      { time: "夜晚", subject: "天文学", icon: "🌌", prof: "辛尼斯特拉教授" },
    ],
    周四: [
      { time: "上午", subject: "幻影移形", icon: "💨", prof: "威斯考特教授" },
      { time: "下午", subject: "古代魔文", icon: "𓂀", prof: "巴希达教授" },
      { time: "夜晚", subject: "黑魔法防御术", icon: "🛡️", prof: "乌姆里奇教授" },
    ],
    周五: [
      { time: "上午", subject: "草药学", icon: "🌿", prof: "斯普劳特教授" },
      { time: "下午", subject: "魔法史", icon: "📜", prof: "宾斯教授" },
      { time: "夜晚", subject: "魔药学", icon: "⚗️", prof: "斯内普教授" },
    ],
  },
  6: {
    周一: [
      { time: "上午", subject: "魔药学", icon: "⚗️", prof: "斯拉格霍恩教授" },
      { time: "下午", subject: "黑魔法防御术", icon: "🛡️", prof: "斯内普教授" },
    ],
    周二: [
      { time: "上午", subject: "变形术", icon: "🔁", prof: "麦格教授" },
      { time: "下午", subject: "魔咒学", icon: "✨", prof: "弗立维教授" },
    ],
    周三: [
      { time: "上午", subject: "保护神奇动物", icon: "🦎", prof: "海格教授" },
      { time: "下午", subject: "炼金术", icon: "🥇", prof: "尼可·勒梅" },
    ],
    周四: [
      { time: "上午", subject: "天文学", icon: "🌌", prof: "辛尼斯特拉教授" },
      { time: "下午", subject: "古代魔文", icon: "𓂀", prof: "巴希达教授" },
      { time: "夜晚", subject: "魔药学", icon: "⚗️", prof: "斯拉格霍恩教授" },
    ],
    周五: [
      { time: "上午", subject: "算术占卜", icon: "🔢", prof: "维克多教授" },
      { time: "下午", subject: "草药学", icon: "🌿", prof: "斯普劳特教授" },
      { time: "夜晚", subject: "黑魔法防御术", icon: "🛡️", prof: "斯内普教授" },
    ],
  },
  7: {
    周一: [
      { time: "上午", subject: "黑魔法防御术", icon: "🛡️", prof: "卡罗教授" },
      { time: "下午", subject: "变形术", icon: "🔁", prof: "麦格教授" },
    ],
    周二: [
      { time: "上午", subject: "魔药学", icon: "⚗️", prof: "斯拉格霍恩教授" },
      { time: "下午", subject: "魔咒学", icon: "✨", prof: "弗立维教授" },
    ],
    周三: [
      { time: "上午", subject: "魔法史", icon: "📜", prof: "宾斯教授" },
      { time: "下午", subject: "保护神奇动物", icon: "🦎", prof: "海格教授" },
    ],
    周四: [
      { time: "上午", subject: "天文学", icon: "🌌", prof: "辛尼斯特拉教授" },
      { time: "下午", subject: "炼金术", icon: "🥇", prof: "尼可·勒梅" },
      { time: "夜晚", subject: "黑魔法防御术", icon: "🛡️", prof: "卡罗教授" },
    ],
    周五: [
      { time: "上午", subject: "占卜学", icon: "🔮", prof: "特里劳妮教授" },
      { time: "下午", subject: "算术占卜", icon: "🔢", prof: "维克多教授" },
      { time: "夜晚", subject: "魔药学", icon: "⚗️", prof: "斯拉格霍恩教授" },
    ],
  },
};

const SCHOOL_DAYS = ["周一", "周二", "周三", "周四", "周五"];
const DAY_NAMES = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const GRADE_TEXT = ["", "一年级", "二年级", "三年级", "四年级", "五年级", "六年级", "七年级"];
const ACTION_PERIODS = {
  3: { period: 1, time: "上午", label: "早晨" },
  2: { period: 2, time: "下午", label: "中午" },
  1: { period: 3, time: "夜晚", label: "夜晚" },
};
const SUBJECT_WIN_KEY = {
  math:"subject_math", physics:"subject_physics", chemistry:"subject_chemistry",
  biology:"subject_biology", history:"subject_history", civics:"subject_civics",
  geography:"subject_geography", literature:"subject_literature", latin:"subject_latin",
  transfiguration: "subject_transfiguration",
  charms: "subject_charms",
  magicHistory: "subject_magicHistory",
  defense: "subject_defense",
  herbology: "subject_herbology",
  astronomy: "subject_astronomy",
  potions: "subject_potions",
  flight: "subject_flight",
  muggleStudies: "subject_muggleStudies",
  careOfMagicalCreatures: "subject_careOfMagicalCreatures",
  apparition: "subject_apparition",
  alchemy: "subject_alchemy",
  divination: "subject_divination",
  arithmancy: "subject_arithmancy",
  ancientRunes: "subject_ancientRunes",
};
function getDayName(dateStr) {
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? "" : DAY_NAMES[date.getDay()];
}

function getSubjectData(subjectKey) {
  return window[SUBJECT_WIN_KEY[subjectKey]] || null;
}

function getAllLessons(syllabus) {
  const out = [];
  (syllabus || []).forEach(ch => (ch.lessons || []).forEach(l => out.push(l)));
  return out;
}

function getItemSubjectKey(item) {
  return item?.muggleSubjectKey || item?.hogwartsSubjectKey || null;
}

function findCourseItemByName(name, items = courseData) {
  for (const item of items) {
    if (item.name === name) return item;
    if (item.children) {
      const found = findCourseItemByName(name, item.children);
      if (found) return found;
    }
  }
  return null;
}

function findCourseItemBySubjectKey(subjectKey, keyName, items = courseData) {
  for (const item of items) {
    if (item[keyName] === subjectKey) return item;
    if (item.children) {
      const found = findCourseItemBySubjectKey(subjectKey, keyName, item.children);
      if (found) return found;
    }
  }
  return null;
}

function getCurrentActionPeriod() {
  const data = loadSave();
  const left = window.timeSystem?.dailyActionLeft ?? data.time?.dailyActionLeft ?? 3;
  return ACTION_PERIODS[left]?.period || null;
}

function openScheduledCourse({ type, day, period, subject, subjectKey }) {
  const data = loadSave();
  const today = window.timeSystem?.currentDate || data.time?.currentDate || "1991-09-02";
  const todayDayName = getDayName(today);

  if (day !== todayDayName || isSchoolNoClassPeriod(today, period)) {
    window.doStudyLog?.(`📅 今天没有这门课：${subject}`);
    return;
  }

  if (period !== getCurrentActionPeriod()) {
    window.doStudyLog?.(`⏰ 现在不是【${subject}】的上课时间。窗口一过就不能补上这节课了。`);
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

function bindScheduleCourseClicks(container) {
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

function getHogwartsTodaySchedule(dateStr = null) {
  const data = loadSave();
  const today = dateStr || data.time?.currentDate || "1991-09-02";
  const dayName = getDayName(today);
  if (!SCHOOL_DAYS.includes(dayName) || isSchoolNoClassDate(today)) return [];

  const grade = getYearGrade();
  const gradeSchedule = SCHEDULE[grade] || SCHEDULE[1];
  return (gradeSchedule[dayName] || []).map(course => {
    const item = findCourseItemByName(course.subject);
    return {
      ...course,
      type: "hogwarts",
      period: Object.values(ACTION_PERIODS).find(p => p.time === course.time)?.period || 0,
      subjectKey: item?.hogwartsSubjectKey || null,
    };
  });
}

function getMuggleTodaySchedule(dateStr = null) {
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

function getTodayScheduledCourses(dateStr = null) {
  return [...getHogwartsTodaySchedule(dateStr), ...getMuggleTodaySchedule(dateStr)];
}

function getCurrentWindowCourses(dateStr = null, actionLeft = null) {
  const data = loadSave();
  const today = dateStr || data.time?.currentDate || "1991-09-02";
  const left = actionLeft ?? data.time?.dailyActionLeft ?? window.timeSystem?.dailyActionLeft ?? 3;
  const period = ACTION_PERIODS[left]?.period;
  if (!period) return [];
  if (isSchoolNoClassPeriod(today, period)) return [];
  return getTodayScheduledCourses(today).filter(course => course.period === period);
}

function getAttendanceKey(course) {
  return `${course.type}:${course.subjectKey || course.subject}:${course.period}`;
}

function ensureAttendance(data, dateStr) {
  if (!data.course) data.course = {};
  if (!data.course.attendance) data.course.attendance = {};
  if (!data.course.attendance[dateStr]) data.course.attendance[dateStr] = {};
  return data.course.attendance[dateStr];
}

function isCourseResolved(course, dateStr) {
  const data = loadSave();
  return !!data.course?.attendance?.[dateStr]?.[getAttendanceKey(course)];
}

function courseMatchesItem(course, item) {
  const key = getItemSubjectKey(item);
  if (item?.muggleSubjectKey) return course.type === "muggle" && course.subjectKey === key;
  if (item?.hogwartsSubjectKey) return course.type === "hogwarts" && course.subjectKey === key;
  return course.type === "hogwarts" && course.subject === item?.name;
}

function validateCourseAccess(item) {
  if (!item) {
    return { ok: false, message: "📅 没有找到这门课" };
  }
  const data = loadSave();
  const today = data.time?.currentDate || "1991-09-02";
  const allToday = getTodayScheduledCourses(today).filter(course => courseMatchesItem(course, item));
  if (allToday.length === 0) {
    return { ok: false, message: `📅 今天没有这门课：${item.name}` };
  }

  const current = getCurrentWindowCourses(today).find(course => courseMatchesItem(course, item));
  if (!current) {
    return { ok: false, message: `⏰ 现在不是【${item.name}】的上课时间。窗口一过就不能补上这节课了。` };
  }

  if (isCourseResolved(current, today)) {
    return { ok: false, message: `✅ 今天这个时段的【${item.name}】已经处理过了。` };
  }

  return { ok: true, course: current };
}

function markAttended(item) {
  const availability = validateCourseAccess(item);
  if (!availability.ok) return false;

  const data = loadSave();
  const today = data.time?.currentDate || "1991-09-02";
  const attendance = ensureAttendance(data, today);
  attendance[getAttendanceKey(availability.course)] = "attended";
  writeSave(data);
  return true;
}

function advanceSkippedLesson(data, course) {
  if (!data.course) data.course = {};

  if (course.type === "muggle") {
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
    const lesson = allLessons.find(l => l.lesson === currentLesson) || allLessons[allLessons.length - 1];
    if (lesson && !data.course.muggleProgress[course.subjectKey].expired.includes(lesson.lesson)) {
      data.course.muggleProgress[course.subjectKey].expired.push(lesson.lesson);
    }
    if (!allLessons.length || currentLesson < allLessons.length) {
      data.course.muggleSchedule[course.subjectKey].currentLesson = currentLesson + 1;
    }
    if (allLessons.length > 0) {
      const progressed = new Set([
        ...(data.course.muggleProgress[course.subjectKey].completed || []),
        ...(data.course.muggleProgress[course.subjectKey].expired || [])
      ]).size;
      data.course[course.subject] = Math.floor(progressed / allLessons.length * 100);
    }
    updateMuggleOverallProgress(data);
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

function updateMuggleOverallProgress(data) {
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

function remindCurrentWindowClasses() {
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
  window.doStudyLog?.(`🔔 ${windowInfo.label}有课：${names}。上课不消耗行动次数，窗口结束前记得去。`);
}

function recordMissedClassesForCurrentWindow() {
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

function _renderSchedule(container) {
  const data = getSave();
  const grade = getYearGrade();
  const currentDate = data.time?.currentDate || "1991-09-02";
  const dateObj = new Date(currentDate);
  const dayOfWeek = isNaN(dateObj.getTime()) ? -1 : dateObj.getDay();
  const dayNames = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const todayDayName = dayNames[dayOfWeek] || "";

  const holiday = isHoliday(currentDate);
  const gradeSchedule = SCHEDULE[grade] || SCHEDULE[1];

  let html = '';
  const gradeLabel = GRADE_TEXT[grade] || `${grade}年级`;

  const allDayNoClass = getNoClassReason(currentDate);
  const holidayTag = holiday
    ? `<div class="schedule-holiday-tag">🏖️ ${holiday}</div>`
    : allDayNoClass
      ? `<div class="schedule-holiday-tag">⭐ ${allDayNoClass} · 无课</div>`
      : `<div></div>`;

  html += `<div class="schedule-header">`;
  html += holidayTag;
  html += `<div class="schedule-grade">📖 ${gradeLabel}课程表</div>`;
  html += `<div></div>`;
  html += `</div>`;

  html += `<div class="schedule-table">`;
  html += `<div class="schedule-row schedule-row-header">
    <div class="schedule-cell schedule-cell-time">时段</div>
    <div class="schedule-cell">周一</div>
    <div class="schedule-cell">周二</div>
    <div class="schedule-cell">周三</div>
    <div class="schedule-cell">周四</div>
    <div class="schedule-cell">周五</div>
  </div>`;

  html += `<div class="schedule-row">
    <div class="schedule-cell schedule-cell-time">上午</div>`;
  for (const day of SCHOOL_DAYS) {
    const cls = day === todayDayName && !holiday ? "schedule-cell schedule-cell-today" : "schedule-cell";
    const noClassLabel = day === todayDayName ? getNoClassReason(currentDate, 1) : "";
    const isSpecialNoClassCell = !!noClassLabel;
    const course = isSpecialNoClassCell ? null : gradeSchedule[day]?.find(c => c.time === "上午");
    if (course) {
      const item = findCourseItemByName(course.subject);
      html += `<div class="${cls} schedule-course-cell" role="button" tabindex="0" data-course-type="hogwarts" data-day="${day}" data-period="1" data-subject="${course.subject}" data-subject-key="${item?.hogwartsSubjectKey || ""}"><div class="schedule-icon">${course.icon}</div><div class="schedule-name">${course.subject}</div><div class="schedule-prof">${course.prof}</div></div>`;
    } else if (isSpecialNoClassCell) {
      html += `<div class="${cls}"><div class="schedule-empty">${noClassLabel}</div></div>`;
    } else {
      html += `<div class="${cls}"><div class="schedule-empty">—</div></div>`;
    }
  }
  html += `</div>`;

  html += `<div class="schedule-row">
    <div class="schedule-cell schedule-cell-time">下午</div>`;
  for (const day of SCHOOL_DAYS) {
    const cls = day === todayDayName && !holiday ? "schedule-cell schedule-cell-today" : "schedule-cell";
    const noClassLabel = day === todayDayName ? getNoClassReason(currentDate, 2) : "";
    const isSpecialNoClassCell = !!noClassLabel;
    const course = isSpecialNoClassCell ? null : gradeSchedule[day]?.find(c => c.time === "下午");
    if (course) {
      const item = findCourseItemByName(course.subject);
      html += `<div class="${cls} schedule-course-cell" role="button" tabindex="0" data-course-type="hogwarts" data-day="${day}" data-period="2" data-subject="${course.subject}" data-subject-key="${item?.hogwartsSubjectKey || ""}"><div class="schedule-icon">${course.icon}</div><div class="schedule-name">${course.subject}</div><div class="schedule-prof">${course.prof}</div></div>`;
    } else if (isSpecialNoClassCell) {
      html += `<div class="${cls}"><div class="schedule-empty">${noClassLabel}</div></div>`;
    } else {
      html += `<div class="${cls}"><div class="schedule-empty">—</div></div>`;
    }
  }
  html += `</div>`;

  html += `<div class="schedule-row">
    <div class="schedule-cell schedule-cell-time">夜晚</div>`;
  for (const day of SCHOOL_DAYS) {
    const cls = day === todayDayName && !holiday ? "schedule-cell schedule-cell-today" : "schedule-cell";
    const noClassLabel = day === todayDayName ? getNoClassReason(currentDate, 3) : "";
    const isSpecialNoClassCell = !!noClassLabel;
    const course = isSpecialNoClassCell ? null : gradeSchedule[day]?.find(c => c.time === "夜晚");
    if (course) {
      const item = findCourseItemByName(course.subject);
      html += `<div class="${cls} schedule-course-cell" role="button" tabindex="0" data-course-type="hogwarts" data-day="${day}" data-period="3" data-subject="${course.subject}" data-subject-key="${item?.hogwartsSubjectKey || ""}"><div class="schedule-icon">${course.icon}</div><div class="schedule-name">${course.subject}</div><div class="schedule-prof">${course.prof}</div></div>`;
    } else if (isSpecialNoClassCell) {
      html += `<div class="${cls}"><div class="schedule-empty">${noClassLabel}</div></div>`;
    } else {
      html += `<div class="${cls}"><div class="schedule-empty">自习</div></div>`;
    }
  }
  html += `</div>`;

  html += `</div>`;

  html += `<div class="schedule-note">💡 周末和假期没有固定课程，可以自由探索、决斗或熬制魔药</div>`;

  container.innerHTML = html;
  bindScheduleCourseClicks(container);
}

function _renderMuggleSchedule(container) {
  const muggleSchedule = window.muggleSchedule;
  if (!muggleSchedule || typeof muggleSchedule !== 'object') {
    container.innerHTML = `<div style="padding:20px;text-align:center;color:#ff8888">⚠️ 麻瓜学术系系统加载失败</div>`;
    console.error('[course.js] muggleSchedule module not properly loaded');
    return;
  }

  const { SUBJECT_NAMES, SUBJECT_ICONS, getWeeklySchedule, WEEKLY_SCHEDULE } = muggleSchedule;

  const data = getSave();
  const grade = getYearGrade();

  // 4 年级首次进入：触发人文选科
  if (grade >= 4 && data.course?.muggleHumanities == null) {
    _renderHumanitiesChoice(container);
    return;
  }

  // 6 年级首次进入：触发 A-Level 选科
  if (grade >= 6 && (!data.course?.aLevelSubjects || data.course.aLevelSubjects.length === 0)) {
    _renderALevelChoice(container);
    return;
  }

  // 根据年级和存档选取对应课表
  const ACTIVE_SCHEDULE = getWeeklySchedule
    ? getWeeklySchedule(grade, data.course)
    : (WEEKLY_SCHEDULE || {});

  const currentDate = data.time?.currentDate || "1991-09-02";
  const dateObj = new Date(currentDate);
  const dayOfWeek = isNaN(dateObj.getTime()) ? -1 : dateObj.getDay();
  const dayNames = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const todayDayName = dayNames[dayOfWeek] || "";
  const holiday = isHoliday(currentDate);
  const gradeLabel = GRADE_TEXT[grade] || `${grade}年级`;

  let html = '';

  const allDayNoClass = getNoClassReason(currentDate);
  const muggleHolidayTag = holiday
    ? `<div class="schedule-holiday-tag">🏖️ ${holiday}</div>`
    : allDayNoClass
      ? `<div class="schedule-holiday-tag">⭐ ${allDayNoClass} · 无课</div>`
      : `<div></div>`;
  html += `<div class="schedule-header">`;
  html += muggleHolidayTag;
  html += `<div class="schedule-grade">📖 ${gradeLabel}课程表</div>`;
  html += `<button id="muggle-exam-entry-btn" class="schedule-exam-entry-btn" title="GCSE 相当于 O.W.L.，A-Level 相当于 N.E.W.T.">🎓 GCSE · A-Level</button>`;
  html += `</div>`;

  html += `<div class="schedule-table">`;
  html += `<div class="schedule-row schedule-row-header">
    <div class="schedule-cell schedule-cell-time">课时</div>
    <div class="schedule-cell">周一</div>
    <div class="schedule-cell">周二</div>
    <div class="schedule-cell">周三</div>
    <div class="schedule-cell">周四</div>
    <div class="schedule-cell">周五</div>
  </div>`;

  const periods = [1, 2, 3];
  const periodNames = ['早晨（第1节）', '中午（第2节）', '夜晚（第3节）'];

  periods.forEach((period, idx) => {
    html += `<div class="schedule-row">`;
    html += `<div class="schedule-cell schedule-cell-time">${periodNames[idx]}</div>`;
    
    for (const day of SCHOOL_DAYS) {
      const cls = day === todayDayName && !holiday ? "schedule-cell schedule-cell-today" : "schedule-cell";
      const noClassLabel = day === todayDayName ? getNoClassReason(currentDate, period) : "";
      const isSpecialNoClassCell = !!noClassLabel;
      const course = isSpecialNoClassCell ? null : ACTIVE_SCHEDULE[day]?.find(c => c.period === period);
      
      if (course) {
        const icon = SUBJECT_ICONS[course.subject] || '📚';
        const name = SUBJECT_NAMES[course.subject] || course.subject;
        const profFullName = muggleSchedule.professorIntroductions[course.subject]?.professor || '';
        const lastName = profFullName.split('·').pop(); // 提取姓氏（最后一个·之后）
        const prof = lastName ? `${lastName}教授` : '';
        html += `<div class="${cls} schedule-course-cell" role="button" tabindex="0" data-course-type="muggle" data-day="${day}" data-period="${period}" data-subject="${name}" data-subject-key="${course.subject}"><div class="schedule-icon">${icon}</div><div class="schedule-name">${name}</div>${prof ? `<div class="schedule-prof">${prof}</div>` : ''}</div>`;
      } else if (isSpecialNoClassCell) {
        html += `<div class="${cls}"><div class="schedule-empty">${noClassLabel}</div></div>`;
      } else {
        html += `<div class="${cls}"><div class="schedule-empty">—</div></div>`;
      }
    }
    
    html += `</div>`;
  });

  html += `</div>`;

  html += `<div class="schedule-note">💡 周末和假期没有固定课程，可以自由探索、决斗或熬制魔药</div>`;

  container.innerHTML = html;
  bindScheduleCourseClicks(container);

  const examEntryBtn = container.querySelector('#muggle-exam-entry-btn');
  if (examEntryBtn) {
    examEntryBtn.addEventListener('click', () => _renderMuggleExams(container));
  }
}

// ============================================================
// 麻瓜学术系 · 选科 UI
// ============================================================

/** 4 年级：人文方向二选一（历史 or 地理） */
function _renderHumanitiesChoice(container) {
  const choices = [
    {
      key: 'history',
      icon: '📜',
      name: '历史',
      desc: '从诺曼征服到冷战，赫伯特·宾斯二世教授带你走过麻瓜文明的风暴与变革',
    },
    {
      key: 'geography',
      icon: '🌍',
      name: '地理',
      desc: '板块运动、城市化、气候变迁，菲利克斯·韦斯莱教授带你丈量麻瓜的世界',
    },
  ];

  let html = `<div style="padding:14px">
    <div style="font-size:14px;font-weight:bold;color:#88f8d8;margin-bottom:6px">选择你的人文方向（此后不可更改）</div>
    <div style="font-size:11px;color:#ff8888;margin-bottom:14px;padding:8px;background:#1a1a2a;border-radius:6px">
      ⚠️ 进入 4 年级后仅此一次选择机会，未选科目无法报考 GCSE / A-Level
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">`;

  choices.forEach(c => {
    html += `<button data-choice="${c.key}" style="padding:18px 14px;background:#1d3b3a;border:2px solid #2b5654;border-radius:8px;cursor:pointer;text-align:left;color:#e0f7f5">
      <div style="font-size:28px;margin-bottom:8px">${c.icon}</div>
      <div style="font-size:14px;font-weight:bold;color:#88f8d8;margin-bottom:4px">${c.name}</div>
      <div style="font-size:11px;color:#7ecdc8;line-height:1.6">${c.desc}</div>
    </button>`;
  });

  html += `</div></div>`;
  container.innerHTML = html;

  container.querySelectorAll('button[data-choice]').forEach(btn => {
    btn.addEventListener('mouseover', () => { btn.style.borderColor = '#88f8d8'; });
    btn.addEventListener('mouseout',  () => { btn.style.borderColor = '#2b5654'; });
    btn.addEventListener('click', () => {
      const data = loadSave();
      if (!data.course) data.course = {};
      data.course.muggleHumanities = btn.dataset.choice;
      writeSave(data);
      _renderMuggleSchedule(container);
    });
  });
}

/** 6 年级：A-Level 选科（最多 3 科，须 GCSE ≥ A） */
function _renderALevelChoice(container) {
  const muggleSchedule = window.muggleSchedule;
  const examSys = window.muggleExam;
  const subjectNames = muggleSchedule?.SUBJECT_NAMES ?? {};
  const subjectIcons = muggleSchedule?.SUBJECT_ICONS ?? {};
  const allSubjects  = muggleSchedule?.MUGGLE_SUBJECTS ?? [];
  const gcse = examSys?.getMuggleExams?.()?.gcse ?? {};
  const MAX_PICK = 3;

  const subjects = allSubjects.map(key => {
    const result = gcse[key];
    // 合格 = O / E / A（PASSING_GRADES），且不是 P/D/T
    const qualifying = result?.grade && examSys?.PASSING_GRADES?.has(result.grade);
    return { key, name: subjectNames[key] ?? key, icon: subjectIcons[key] ?? '📚', gcseGrade: result?.grade ?? null, qualifying: !!qualifying };
  });

  let html = `<div style="padding:14px">
    <div style="font-size:14px;font-weight:bold;color:#88f8d8;margin-bottom:6px">选择 A-Level 科目（最多 ${MAX_PICK} 科）</div>
    <div style="font-size:11px;color:#7ecdc8;margin-bottom:12px;line-height:1.6">
      只有 GCSE 成绩达到 A 或以上的科目可以选择，未合格的科目灰显。
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px" id="alevel-grid">`;

  subjects.forEach(s => {
    const gradeText = s.gcseGrade ? `GCSE: ${s.gcseGrade}` : '未参加 GCSE';
    const available = s.qualifying;
    html += `<button data-subject="${s.key}"
      style="padding:10px 8px;background:${available ? '#1d3b3a' : '#1a1a1a'};border:2px solid transparent;border-radius:6px;cursor:${available ? 'pointer' : 'default'};text-align:center;color:${available ? '#e0f7f5' : '#555'};opacity:${available ? '1' : '0.5'}"
      ${available ? '' : 'disabled'}>
      <div style="font-size:20px">${s.icon}</div>
      <div style="font-size:12px;margin-top:4px">${s.name}</div>
      <div style="font-size:10px;color:#7ecdc8;margin-top:2px">${gradeText}</div>
    </button>`;
  });

  html += `</div>
    <div id="alevel-count" style="font-size:12px;color:#7ecdc8;margin-bottom:10px">已选：0 / ${MAX_PICK}</div>
    <button id="alevel-confirm" disabled style="width:100%;padding:10px;background:#1a2a1a;color:#666;border:none;border-radius:6px;cursor:not-allowed;font-size:13px">
      确认选科
    </button>
  </div>`;

  container.innerHTML = html;

  const selected  = new Set();
  const countEl   = container.querySelector('#alevel-count');
  const confirmBtn = container.querySelector('#alevel-confirm');

  function refreshConfirm() {
    countEl.textContent = `已选：${selected.size} / ${MAX_PICK}`;
    if (selected.size > 0) {
      confirmBtn.disabled = false;
      confirmBtn.style.cssText = 'width:100%;padding:10px;background:#2b5654;color:#88f8d8;border:none;border-radius:6px;cursor:pointer;font-size:13px';
    } else {
      confirmBtn.disabled = true;
      confirmBtn.style.cssText = 'width:100%;padding:10px;background:#1a2a1a;color:#666;border:none;border-radius:6px;cursor:not-allowed;font-size:13px';
    }
  }

  container.querySelectorAll('button[data-subject]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.subject;
      if (selected.has(key)) {
        selected.delete(key);
        btn.style.borderColor = 'transparent';
        btn.style.background = '#1d3b3a';
      } else {
        if (selected.size >= MAX_PICK) return;
        selected.add(key);
        btn.style.borderColor = '#88f8d8';
        btn.style.background = '#1a3b2a';
      }
      refreshConfirm();
    });
  });

  confirmBtn.addEventListener('click', () => {
    if (selected.size === 0) return;
    const data = loadSave();
    if (!data.course) data.course = {};
    data.course.aLevelSubjects = [...selected];
    writeSave(data);
    _renderMuggleSchedule(container);
  });
}

// ============================================================
// 麻瓜考试 UI
// ============================================================

/** 渲染考试报名总览（GCSE / A-Level 两区块） */
function _renderMuggleExams(container) {
  const examSys = window.muggleExam;
  if (!examSys) {
    container.innerHTML = `<div style="padding:20px;color:#ff8888">⚠️ 考试系统未加载</div>`;
    return;
  }

  const grade = getYearGrade();
  const subjectNames = window.muggleSchedule?.SUBJECT_NAMES ?? {};
  const subjectIcons = window.muggleSchedule?.SUBJECT_ICONS ?? {};

  function buildExamBlock(type, minGrade, title, subtitle) {
    const list = examSys.getExamEligibilityList(type);
    const { gcse, alevel } = examSys.getMuggleExams();
    const results = type === 'gcse' ? gcse : alevel;

    let html = `<div style="margin-bottom:16px">`;
    html += `<div style="font-size:14px;font-weight:bold;color:#88f8d8;margin-bottom:4px">${title}</div>`;
    html += `<div style="font-size:11px;color:#7ecdc8;margin-bottom:8px">${subtitle}</div>`;

    if (grade < minGrade) {
      html += `<div style="color:#ff8888;font-size:12px;padding:8px;background:#1a2a2a;border-radius:6px">🔒 需要 ${minGrade} 年级（当前 ${grade} 年级）</div>`;
    } else {
      html += `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px">`;
      list.forEach(({ subjectKey, name, eligible, reason }) => {
        const result = results[subjectKey];
        const icon = subjectIcons[subjectKey] ?? '📚';
        const hasResult = !!result?.grade;
        const gradeLabel = hasResult ? result.grade : '';
        const gradeColor = hasResult
          ? (examSys.PASSING_GRADES.has(result.grade) ? '#88f8d8' : '#ff8888')
          : '#b2dfdb';

        let btnStyle = `padding:8px;border-radius:6px;border:none;cursor:pointer;text-align:left;font-size:12px;`;
        if (hasResult) {
          btnStyle += `background:#1a3a1a;color:${gradeColor};`;
        } else if (eligible) {
          btnStyle += `background:#1d3b3a;color:#e0f7f5;`;
        } else {
          btnStyle += `background:#1a1a2a;color:#888;cursor:not-allowed;opacity:0.7;`;
        }

        html += `<button style="${btnStyle}"
          data-exam-key="${subjectKey}" data-exam-type="${type}"
          ${!eligible && !hasResult ? 'disabled' : ''}
          title="${hasResult ? `${examSys.GRADE_NAMES[result.grade]}（${result.score}分）` : (eligible ? '点击参加考试' : reason)}">
          <div>${icon} ${name}</div>
          <div style="font-size:11px;margin-top:2px;color:${hasResult ? gradeColor : (eligible ? '#88f8d8' : '#666')}">
            ${hasResult ? `${gradeLabel}（${result.score}分）` : (eligible ? '可报考 ▶' : '不可报考')}
          </div>
        </button>`;
      });
      html += `</div>`;
    }
    html += `</div>`;
    return html;
  }

  container.innerHTML = `
    <div style="padding:12px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
        <button id="muggle-exam-back-btn" class="schedule-exam-entry-btn">← 返回课程表</button>
        <div style="font-size:13px;color:#b2dfdb">麻瓜学术系资质考试</div>
      </div>
      <div style="font-size:11px;color:#7ecdc8;margin-bottom:12px;line-height:1.6">
        <b style="color:#88f8d8">GCSE</b>（普通中等教育证书）· 5年级参加 · 对应 O.W.L.<br>
        <b style="color:#88f8d8">A-Level</b>（高级水平证书）· 7年级参加 · 对应 N.E.W.T. · 需 GCSE 成绩 A 或以上
      </div>
      ${buildExamBlock('gcse', 5, '📋 GCSE（普通中等教育证书）', '需要 5 年级，且各科完成 60% 以上课程')}
      ${buildExamBlock('alevel', 7, '🎓 A-Level（高级水平证书）', '需要 7 年级，且 GCSE 成绩达到 A 或以上')}
    </div>`;

  // 返回课程表
  const backBtn = container.querySelector('#muggle-exam-back-btn');
  if (backBtn) backBtn.addEventListener('click', () => _renderMuggleSchedule(container));

  // 绑定点击事件
  container.querySelectorAll('button[data-exam-key]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.examKey;
      const type = btn.dataset.examType;
      const result = type === 'gcse'
        ? examSys.getMuggleExams().gcse[key]
        : examSys.getMuggleExams().alevel[key];
      if (result?.grade) {
        // 已有成绩，显示历史记录
        _showExamResult(container, key, type, result);
      } else {
        _renderExamSession(container, key, type);
      }
    });
  });
}

/** 渲染答题页 */
function _renderExamSession(container, subjectKey, type) {
  const examSys = window.muggleExam;
  const subjectData = window[`subject_${subjectKey}`];
  const subjectName = window.muggleSchedule?.SUBJECT_NAMES?.[subjectKey] ?? subjectKey;
  const examTypeName = type === 'gcse' ? 'GCSE' : 'A-Level';
  const questionCount = type === 'alevel' ? 15 : 10;

  // 从题库里随机抽题
  const pool = (subjectData?.questionBank ?? []).flatMap(ch => ch.questions ?? []);
  if (pool.length === 0) {
    container.innerHTML = `<div style="padding:20px;color:#ff8888">⚠️ ${subjectName} 题库为空，无法开始考试</div>`;
    return;
  }
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const questions = shuffled.slice(0, Math.min(questionCount, shuffled.length));

  let html = `
    <div style="padding:12px">
      <div style="font-size:14px;font-weight:bold;color:#88f8d8;margin-bottom:4px">
        ${subjectName} · ${examTypeName} 考试
      </div>
      <div style="font-size:11px;color:#7ecdc8;margin-bottom:12px">
        共 ${questions.length} 题，每题选择最符合的一项
      </div>`;

  questions.forEach((q, i) => {
    html += `<div style="margin-bottom:14px;padding:10px;background:#1a2a2a;border-radius:6px" data-q="${i}">`;
    html += `<div style="font-size:13px;color:#e0f7f5;margin-bottom:8px">${i + 1}. ${q.text}</div>`;
    (q.options ?? []).forEach(opt => {
      const val = opt.charAt(0); // "A", "B", "C", "D"
      html += `<label style="display:block;padding:4px 6px;cursor:pointer;border-radius:4px;font-size:12px;color:#b2dfdb">
        <input type="radio" name="q${i}" value="${val}" style="margin-right:6px">${opt}
      </label>`;
    });
    html += `</div>`;
  });

  html += `
    <div id="exam-warn" style="color:#ff8888;font-size:12px;display:none;margin-bottom:8px">⚠️ 请回答所有题目再提交</div>
    <button id="exam-submit-btn" style="width:100%;padding:10px;background:#2b5654;color:#88f8d8;border:none;border-radius:6px;cursor:pointer;font-size:13px">
      📝 提交答卷
    </button>
    <button id="exam-back-btn" style="width:100%;padding:8px;background:#1a1a2a;color:#888;border:none;border-radius:6px;cursor:pointer;font-size:12px;margin-top:6px">
      ← 返回考试列表
    </button>
    </div>`;

  container.innerHTML = html;

  document.getElementById('exam-back-btn').addEventListener('click', () => {
    _renderMuggleExams(container);
  });

  document.getElementById('exam-submit-btn').addEventListener('click', () => {
    // 收集答案
    let answered = 0;
    let correct = 0;
    questions.forEach((q, i) => {
      const selected = container.querySelector(`input[name="q${i}"]:checked`);
      if (selected) {
        answered++;
        if (selected.value === q.answer) correct++;
      }
    });

    if (answered < questions.length) {
      document.getElementById('exam-warn').style.display = 'block';
      return;
    }

    const result = examSys.takeMuggleExam(subjectKey, type, correct);
    if (result.error) {
      container.innerHTML = `<div style="padding:20px;color:#ff8888">❌ ${result.error}</div>`;
      return;
    }
    _showExamResult(container, subjectKey, type, result, { questions, correct });
  });
}

/** 显示考试结果页 */
function _showExamResult(container, subjectKey, type, result, detail = null) {
  const examSys = window.muggleExam;
  const subjectName = window.muggleSchedule?.SUBJECT_NAMES?.[subjectKey] ?? subjectKey;
  const examTypeName = type === 'gcse' ? 'GCSE' : 'A-Level';
  const passed = examSys.PASSING_GRADES.has(result.grade);
  const gradeColor = passed ? '#88f8d8' : '#ff8888';

  let detailHtml = '';
  if (detail?.questions) {
    detailHtml = `<div style="margin-top:12px;font-size:12px;color:#7ecdc8">答对 ${detail.correct} / ${detail.questions.length} 题</div>`;
  } else if (result.correct !== undefined) {
    detailHtml = `<div style="margin-top:12px;font-size:12px;color:#7ecdc8">答对 ${result.correct} / ${result.total} 题</div>`;
  }

  container.innerHTML = `
    <div style="padding:16px">
      <div style="font-size:14px;font-weight:bold;color:#88f8d8;margin-bottom:12px">
        ${subjectName} · ${examTypeName} 成绩
      </div>
      <div style="text-align:center;padding:20px;background:#1a2a2a;border-radius:8px;margin-bottom:12px">
        <div style="font-size:48px;font-weight:bold;color:${gradeColor}">${result.grade}</div>
        <div style="font-size:13px;color:${gradeColor};margin-top:4px">${examSys.GRADE_NAMES[result.grade]}</div>
        <div style="font-size:22px;color:#b2dfdb;margin-top:8px">${result.score} 分</div>
        ${detailHtml}
      </div>
      <div style="font-size:12px;color:#b2dfdb;line-height:1.6;white-space:pre-line;padding:10px;background:#111;border-radius:6px;margin-bottom:12px">
        ${result.narrative ?? ''}
      </div>
      <button id="exam-result-back" style="width:100%;padding:10px;background:#1d3b3a;color:#e0f7f5;border:none;border-radius:6px;cursor:pointer;font-size:13px">
        ← 返回考试列表
      </button>
    </div>`;

  document.getElementById('exam-result-back').addEventListener('click', () => {
    _renderMuggleExams(container);
  });

  // 同步写入游戏日志
  if (result.narrative) {
    window.doStudyLog?.(result.narrative);
  }
}

export function getCurrentGrade() {
  return getYearGrade();
}

// ============================================================
// 解锁更新（遍历三级结构）
// ============================================================

export function autoUpdateCourseUnlock() {
  const nowGrade = getCurrentGrade();

  function traverse(list) {
    list.forEach(item => {
      if (item.children) {
        // 父节点自身解锁状态（三级情况下 children 父也有 unlockGrade）
        if (item.unlockGrade !== undefined) {
          item.unlock = nowGrade >= item.unlockGrade;
        }
        traverse(item.children);
      } else {
        item.unlock = nowGrade >= item.unlockGrade;
      }
    });
  }

  traverse(courseData);
}

// ============================================================
// UI 样式
// ============================================================

const courseBtnStyle = [
  "width:100%",
  "text-align:left",
  "padding:10px 12px",
  "border:none",
  "border-radius:6px",
  "background:#1d3b3a",
  "color:#e0f7f5",
  "cursor:pointer",
  "box-sizing:border-box",
  "transition:all 0.2s",
  "min-height:120px"
].join(";") + ";";

const courseBtnHover = "background:#2b5654;";

function createCourseButton(data, onClickHandler) {
  const btn = document.createElement("button");
  btn.style.cssText = courseBtnStyle;

  const name = document.createElement("div");
  name.style.fontSize = "15px";
  name.innerText = data.name;
  btn.appendChild(name);

  const desc = document.createElement("div");
  desc.style.cssText = "font-size:12px;color:#b2dfdb;margin-top:4px;";
  desc.innerText = data.desc;
  btn.appendChild(desc);

  if (data.tip) {
    const tip = document.createElement("div");
    tip.style.cssText = `font-size:11px;margin-top:2px;color:${data.tipColor || "#88f8d8"};`;
    tip.innerText = data.tip;
    btn.appendChild(tip);
  }

  if (data.professor) {
    const prof = document.createElement("div");
    prof.style.cssText = "font-size:10px;margin-top:4px;color:#7ecdc8;opacity:0.8;";
    prof.innerText = `👤 ${data.professor}`;
    btn.appendChild(prof);
  }

  btn.addEventListener("mouseover", () => btn.style.cssText = courseBtnStyle + courseBtnHover);
  btn.addEventListener("mouseout",  () => btn.style.cssText = courseBtnStyle);
  btn.addEventListener("click", onClickHandler);

  return btn;
}

function createBackButton(label, callback) {
  const back = document.createElement("button");
  back.className = "action-btn";
  back.innerText = `← ${label}`;
  back.style.cssText = "position:sticky;top:0;z-index:999;grid-column:1 / -1;margin-bottom:8px;";
  back.addEventListener("click", callback);
  return back;
}

// ============================================================
// 面板状态（三层导航栈）
// ============================================================

let navStack = [];   // [{list, title}] 导航历史栈

// ============================================================
// 面板开关
// ============================================================

export function openCoursePanel() {
  loadTimeFromSave();

  document.getElementById("actionMain").style.display = "none";
  const exploreMain = document.getElementById("exploreMain");
  if (exploreMain) exploreMain.style.display = "none";

  let oldPanel = document.getElementById("courseMain");
  if (oldPanel) oldPanel.remove();

  const courseBox = document.createElement("div");
  courseBox.id = "courseMain";

  const tabHtml = `
    <div class="course-tabs">
      <button class="course-tab active" id="courseTabSchedule">📅 传统课程表</button>
      <button class="course-tab" id="courseTabMuggleSchedule">📖 麻瓜学术系</button>
    </div>`;

  courseBox.innerHTML = tabHtml;

  const container = document.createElement("div");
  container.id = "course-container";
  container.style.cssText = "max-height:400px;overflow:auto;display:none;grid-template-columns:repeat(3,1fr);gap:8px;";

  const scheduleContainer = document.createElement("div");
  scheduleContainer.id = "schedule-container";
  scheduleContainer.style.display = "block";

  const muggleScheduleContainer = document.createElement("div");
  muggleScheduleContainer.id = "muggle-schedule-container";
  muggleScheduleContainer.style.display = "none";


  const backBtn = document.createElement("button");
  backBtn.className = "action-btn";
  backBtn.innerText = "← 返回行动";
  backBtn.style.marginTop = "10px";
  backBtn.addEventListener("click", closeCoursePanel);

  const card = document.querySelector("#actionMain")?.closest(".card");
  if (card) {
    card.appendChild(courseBox);
    courseBox.appendChild(container);
    courseBox.appendChild(scheduleContainer);
    courseBox.appendChild(muggleScheduleContainer);
    courseBox.appendChild(backBtn);
  }

  const courseTabSchedule = document.getElementById("courseTabSchedule");
  const courseTabMuggleSchedule = document.getElementById("courseTabMuggleSchedule");

  if (courseTabSchedule) {
    courseTabSchedule.addEventListener("click", () => {
      courseTabSchedule.classList.add("active");
      if (courseTabMuggleSchedule) courseTabMuggleSchedule.classList.remove("active");
      container.style.display = "none";
      muggleScheduleContainer.style.display = "none";
      scheduleContainer.style.display = "block";
      _renderSchedule(scheduleContainer);
    });
  }

  if (courseTabMuggleSchedule) {
    courseTabMuggleSchedule.addEventListener("click", () => {
      courseTabMuggleSchedule.classList.add("active");
      if (courseTabSchedule) courseTabSchedule.classList.remove("active");
      container.style.display = "none";
      scheduleContainer.style.display = "none";
      muggleScheduleContainer.style.display = "block";
      _renderMuggleSchedule(muggleScheduleContainer);
    });
  }

  navStack = [];
  loadCourseProgressFromSave(); // 先读 studyRate
  autoUpdateCourseUnlock();     // 再计算 unlock（必须在 loadProgress 之后）
  _renderSchedule(scheduleContainer);
}

export function closeCoursePanel() {
  const box = document.getElementById("courseMain");
  if (box) box.remove();
  document.getElementById("actionMain").style.display = "block";
  navStack = [];
  if (window.timeSystem?.dailyActionLeft <= 0) {
    setTimeout(() => { window.nextTime?.(); window.syncActionUI?.(); }, 50);
  }
}

// ============================================================
// 渲染层（通用，适配三级导航）
// ============================================================

/**
 * 渲染任意一层列表
 * @param {Array} items   当前层的数据列表
 * @param {string} title  当前层标题（用于面包屑返回按钮）
 */
function renderLevel(items, title) {
  const wrap = document.getElementById("course-container");
  if (!wrap) return;
  wrap.innerHTML = "";

  // 返回按钮（根层不显示）
  if (navStack.length > 0) {
    const prev = navStack[navStack.length - 1];
    wrap.appendChild(createBackButton(prev.title, () => {
      navStack.pop();
      if (navStack.length === 0) {
        renderLevel(courseData, "课程列表");
      } else {
        const top = navStack[navStack.length - 1];
        renderLevel(top.items, top.title);
      }
    }));
  }

  const nowGrade = getCurrentGrade();

  items.forEach(item => {
    // ── 大类节点（有 children，但没有 unlockGrade）── 进入下一层
    if (item.children && item.unlockGrade === undefined) {
      const btn = createCourseButton(
        { name: `${item.icon} ${item.name}`, desc: item.desc },
        () => {
          navStack.push({ items, title });
          renderLevel(item.children, item.name);
        }
      );
      wrap.appendChild(btn);
      return;
    }

    // ── 麻瓜学术系（hasMuggleStudiesSystem，有 children，有 unlockGrade）── 进入分科层
    if (item.hasMuggleStudiesSystem && item.children) {
      const locked = !item.unlock;
      const rateText = calcMuggleOverallRate(item.children);

      const btn = createCourseButton(
        {
          name: `${item.icon} ${item.name}  ${rateText}`,
          desc: item.desc,
          tip: locked
            ? `🔒 解锁条件：${item.unlockGrade} 年级`
            : `✅ 已解锁  当前${nowGrade}年级｜共九门分科`,
          tipColor: locked ? "#ff8888" : "#88f8d8"
        },
        () => {
          if (locked) {
            window.doStudyLog?.(`❌ 无法进入【${item.name}】：需要 ${item.unlockGrade} 年级`);
            return;
          }
          navStack.push({ items, title });
          renderLevel(item.children, "麻瓜学术系 · 分科");
        }
      );
      if (locked) { btn.style.opacity = "0.6"; btn.style.cursor = "not-allowed"; }
      wrap.appendChild(btn);
      return;
    }

    // ── 叶节点（可直接学习的科目）──
    const isComplete = item.studyRate >= 100;
    const rateText = isComplete ? "【已完全掌握】" : `（${item.studyRate || 0}%）`;

    const btn = createCourseButton(
      {
        name: `${item.icon} ${item.name}  ${rateText}`,
        desc: item.desc,
        professor: item.professor || null,
        tip: item.unlock
          ? `✅ 已解锁｜当前${nowGrade}年级`
          : `🔒 解锁条件：${item.unlockGrade} 年级`,
        tipColor: item.unlock ? "#88f8d8" : "#ff8888"
      },
      () => {
        if (!item.unlock) {
          window.doStudyLog?.(`❌ 无法学习【${item.name}】：需要 ${item.unlockGrade} 年级`);
          return;
        }
        if (isComplete) {
          window.doStudyLog?.(`✅ ${item.name} 已完全掌握`);
          return;
        }
        // 弹出选择弹窗（好好学习 / 随便学学）
        showLearnChoiceModal(item, items, title);
      }
    );

    if (!item.unlock || isComplete) {
      btn.style.opacity = "0.6";
      btn.style.cursor = "not-allowed";
    }

    wrap.appendChild(btn);
  });
}

// ============================================================
// 辅助函数
// ============================================================

/** 计算麻瓜学术系总进度文本（九门均值） */
function calcMuggleOverallRate(subjects) {
  if (!subjects || subjects.length === 0) return "（0%）";
  const avg = subjects.reduce((s, c) => s + (c.studyRate || 0), 0) / subjects.length;
  return avg >= 100 ? "【已完全掌握】" : `（${Math.round(avg)}%）`;
}

// ============================================================
// 存档读取（支持三级结构）
// ============================================================

function loadCourseProgressFromSave() {
  const data = loadSave();
  if (!data.course) return;

  function traverse(items) {
    items.forEach(it => {
      if (it.children) traverse(it.children);
      else it.studyRate = data.course[it.name] || 0;
    });
  }
  traverse(courseData);
}

// ============================================================
// 全局挂载 & 导出
// ============================================================

window.openCoursePanel       = openCoursePanel;
window.closeCoursePanel      = closeCoursePanel;
window.autoUpdateCourseUnlock = autoUpdateCourseUnlock;
window.getCurrentGrade       = getCurrentGrade;
window.renderLevelFn         = renderLevel;
window.loadCourseProgressFromSave = loadCourseProgressFromSave;
window.courseAttendance = {
  getHogwartsTodaySchedule,
  getMuggleTodaySchedule,
  getTodayScheduledCourses,
  getCurrentWindowCourses,
  validateCourseAccess,
  markAttended,
  recordMissedClassesForCurrentWindow,
  remindCurrentWindowClasses,
  isSchoolNoClassDate,
  isSchoolNoClassPeriod
};

export default {
  openCoursePanel,
  closeCoursePanel,
  autoUpdateCourseUnlock,
  getCurrentGrade,
  getHogwartsTodaySchedule,
  getMuggleTodaySchedule,
  getTodayScheduledCourses,
  getCurrentWindowCourses,
  validateCourseAccess,
  markAttended,
  recordMissedClassesForCurrentWindow,
  remindCurrentWindowClasses,
  isSchoolNoClassDate,
  isSchoolNoClassPeriod
};

setTimeout(() => {
  window.courseAttendance?.remindCurrentWindowClasses?.();
}, 0);

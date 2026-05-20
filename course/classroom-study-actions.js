// classroom-study-actions.js - quick and focused study entry actions
import { loadSave, writeSave } from './save-utils.js';
import { MUGGLE_SUBJECTS, recordStudyDate, advanceLesson } from './muggle-schedule.js';
import { HOGWARTS_SUBJECT_KEYS, getSubjectData, getItemSubjectKey } from './utils.js';
import { getCurrentLesson, saveProgress } from './classroom-progress.js';

export function doQuickStudy(item, items, title) {
  if (!item.unlock) {
    window.doStudyLog?.(`❌ 无法学习【${item.name}】：需要 ${item.unlockGrade} 年级`);
    return;
  }
  if ((item.studyRate || 0) >= 100) {
    window.doStudyLog?.(`✅ ${item.name} 已完全掌握`);
    return;
  }
  const availability = window.courseAttendance?.validateCourseAccess?.(item);
  if (availability && !availability.ok) {
    window.doStudyLog?.(availability.message);
    return;
  }
  window.courseAttendance?.markAttended?.(item);

  const data = loadSave();
  if (!data.course) data.course = {};
  const currentRate = data.course[item.name] || 0;
  const add = 5;
  item.studyRate = Math.min(100, currentRate + add);
  data.course[item.name] = item.studyRate;
  writeSave(data);

  // 推进课程进度
  const subjectKey = getItemSubjectKey(item);
  if (item.muggleSubjectKey && MUGGLE_SUBJECTS.includes(item.muggleSubjectKey)) {
    // 麻瓜课：记录学习日期并推进课时
    recordStudyDate(item.muggleSubjectKey);
    advanceLesson(item.muggleSubjectKey);
  } else if (subjectKey && HOGWARTS_SUBJECT_KEYS.has(subjectKey)) {
    // 霍格沃茨课：推进课时（不计分）
    const lesson = getCurrentLesson(subjectKey);
    if (lesson) saveProgress(subjectKey, lesson.lesson, null);
  }

  const subjectData = subjectKey && HOGWARTS_SUBJECT_KEYS.has(subjectKey) ? getSubjectData(subjectKey) : null;
  const quickEvents = subjectData?.quickStudyEvents || [];
  const subjectQuickEvent = quickEvents.length
    ? quickEvents[Math.floor(Math.random() * quickEvents.length)]
    : "";
  const evt = (item.muggleSubjectKey || subjectKey)
    ? (item.muggleSubjectKey
        ? (window.courseDefault?.getMuggleStudiesEvent(item.muggleSubjectKey) || "你专心学习，知识稳步提升")
        : (subjectQuickEvent || window.courseDefault?.getQuickStudyEvent?.(subjectKey) || window.getStudyEvent?.(item.name) || "你专心学习，知识稳步提升"))
    : (window.getStudyEvent?.(item.name) || "你专心学习，知识稳步提升");

  window.doStudyLog?.(`📚 ${item.name}（熟练度+${add}%，共${item.studyRate}%）｜${evt}`);
  window._questHook_courseStudy?.(false);
  window.refreshAll?.();
  window.autoUnlockByCourse?.();

  window.renderLevelFn?.(items, title);
}

export function doFocusedStudy(item, items, title) {
  if (!item.unlock) {
    window.doStudyLog?.(`❌ 无法学习【${item.name}】：需要 ${item.unlockGrade} 年级`);
    return;
  }
  if ((item.studyRate || 0) >= 100) {
    window.doStudyLog?.(`✅ ${item.name} 已完全掌握`);
    return;
  }
  const availability = window.courseAttendance?.validateCourseAccess?.(item);
  if (availability && !availability.ok) {
    window.doStudyLog?.(availability.message);
    return;
  }

  const data = loadSave();
  if (!data.course) data.course = {};
  const currentRate = data.course[item.name] || 0;
  const add = 10;
  item.studyRate = Math.min(100, currentRate + add);
  data.course[item.name] = item.studyRate;
  writeSave(data);
  window.courseAttendance?.markAttended?.(item);

  const evt = window.getStudyEvent?.(item.name) || "你认真听完了这一节课，整理了课堂笔记，知识明显扎实了一些";
  window.doStudyLog?.(`📖 ${item.name}（熟练度+${add}%，共${item.studyRate}%）｜${evt}`);
  window._questHook_courseStudy?.(true);
  window.refreshAll?.();
  window.autoUnlockByCourse?.();
  window.renderLevelFn?.(items, title);
}

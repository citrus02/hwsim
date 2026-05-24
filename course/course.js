/**
 * course.js
 * 课程系统主逻辑 & UI
 *
 * =====================================================================
 *  传统巫师课七年制 · 年级课时总表（开发完整度检查用）
 * =====================================================================
 *
 *  说明：
 *  - 固定课程表由 courseScheduleManager 提供。
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
import './course-ui.js';
import { addInternalPoints } from './muggle-academic/system.js';
import { loadSave, writeSave } from './save-utils.js';
import { showLearnChoiceModal } from './classroom.js';
import { courseScheduleManager } from './course-schedule.js';

import {
  SCHOOL_DAYS,
  GRADE_TEXT,
  bindScheduleCourseClicks,
  findCourseItemByName,
  getHogwartsTodaySchedule,
  getMuggleTodaySchedule,
  getTodayScheduledCourses,
  getCurrentWindowCourses,
  validateCourseAccess,
  markAttended,
  recordMissedClassesForCurrentWindow,
  recordMissedClassesBetween,
  remindCurrentWindowClasses,
} from './course-attendance.js';

function _formatDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function _getSchoolWeekDateMap(currentDate) {
  const date = new Date(currentDate);
  if (isNaN(date.getTime())) return new Map();

  const weekStart = new Date(date);
  const dayOfWeek = weekStart.getDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  weekStart.setDate(weekStart.getDate() + mondayOffset);

  return new Map(SCHOOL_DAYS.map((day, index) => {
    const cellDate = new Date(weekStart);
    cellDate.setDate(weekStart.getDate() + index);
    return [day, _formatDate(cellDate)];
  }));
}

function _renderSchedule(container) {
  const data = getSave();
  const grade = getYearGrade();
  const currentDate = data.time?.currentDate || "1991-09-02";
  const dateObj = new Date(currentDate);
  const dayOfWeek = isNaN(dateObj.getTime()) ? -1 : dateObj.getDay();
  const dayNames = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const todayDayName = dayNames[dayOfWeek] || "";
  const schoolWeekDates = _getSchoolWeekDateMap(currentDate);

  const holiday = isHoliday(currentDate);
  const gradeSchedule = courseScheduleManager.getGradeSchedule(grade) || courseScheduleManager.getGradeSchedule(1) || {};

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
  html += `<button id="hogwarts-exam-entry-btn" class="schedule-exam-entry-btn" title="O.W.L. 五年级报考，N.E.W.T. 七年级报考">🏆 O.W.L. · N.E.W.T.</button>`;
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
    const cellDate = schoolWeekDates.get(day) || currentDate;
    const noClassLabel = getNoClassReason(cellDate, 1);
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
    const cellDate = schoolWeekDates.get(day) || currentDate;
    const noClassLabel = getNoClassReason(cellDate, 2);
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
    const cellDate = schoolWeekDates.get(day) || currentDate;
    const noClassLabel = getNoClassReason(cellDate, 3);
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

  const hogwartsExamEntryBtn = container.querySelector('#hogwarts-exam-entry-btn');
  if (hogwartsExamEntryBtn) {
    hogwartsExamEntryBtn.addEventListener('click', () => _renderHogwartsExams(container));
  }
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
  const schoolWeekDates = _getSchoolWeekDateMap(currentDate);
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
  const periodNames = ['上午（第1节）', '下午（第2节）', '夜晚（第3节）'];

  periods.forEach((period, idx) => {
    html += `<div class="schedule-row">`;
    html += `<div class="schedule-cell schedule-cell-time">${periodNames[idx]}</div>`;
    
    for (const day of SCHOOL_DAYS) {
      const cls = day === todayDayName && !holiday ? "schedule-cell schedule-cell-today" : "schedule-cell";
      const cellDate = schoolWeekDates.get(day) || currentDate;
      const noClassLabel = getNoClassReason(cellDate, period);
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
    // 空题库降级处理：允许跳过考试，记录为缺考（T级）
    container.innerHTML = `
      <div style="padding:20px">
        <div style="font-size:14px;color:#ffc888;margin-bottom:12px">📋 ${subjectName} · ${examTypeName} 考试</div>
        <div style="padding:12px;background:#1a2a2a;border-radius:8px;margin-bottom:16px">
          <div style="color:#ff8888;margin-bottom:8px">⚠️ 该科目题库暂未完善</div>
          <div style="color:#b2dfdb;font-size:12px">系统将根据你的课程进度自动评定成绩，或你可以选择跳过本次考试。</div>
        </div>
        <button id="exam-auto-btn" style="width:100%;padding:10px;background:#2b5654;color:#88f8d8;border:none;border-radius:6px;cursor:pointer;font-size:13px;margin-bottom:8px">
          🎲 基于进度自动评分
        </button>
        <button id="exam-skip-btn" style="width:100%;padding:8px;background:#1a1a2a;color:#888;border:none;border-radius:6px;cursor:pointer;font-size:12px;margin-bottom:8px">
          ⏭️ 跳过本次考试
        </button>
        <button id="exam-back-btn" style="width:100%;padding:8px;background:#1a1a2a;color:#888;border:none;border-radius:6px;cursor:pointer;font-size:12px">
          ← 返回考试列表
        </button>
      </div>`;

    document.getElementById('exam-auto-btn').addEventListener('click', () => {
      // 基于进度自动评分
      const result = examSys.takeMuggleExam(subjectKey, type, null);
      _showExamResult(container, subjectKey, type, result);
    });

    document.getElementById('exam-skip-btn').addEventListener('click', () => {
      // 跳过考试，记录为缺考（T级）
      const result = examSys.takeMuggleExam(subjectKey, type, 0);
      _showExamResult(container, subjectKey, type, result);
    });

    document.getElementById('exam-back-btn').addEventListener('click', () => {
      _renderMuggleExams(container);
    });
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

// ============================================================
// 霍格沃茨考试 UI
// ============================================================

function _renderHogwartsExams(container) {
  const examSys = window.hogwartsExam;
  if (!examSys) {
    container.innerHTML = `<div style="padding:20px;color:#ff8888">⚠️ 考试系统未加载</div>`;
    return;
  }

  function buildExamBlock(type, minGrade, title, subtitle) {
    const list = examSys.getExamEligibilityList(type);
    const { owl, newt } = examSys.getHogwartsExams();
    const exams = type === 'owl' ? owl : newt;

    let items = '';
    list.forEach(item => {
      const result = exams[item.subjectKey];
      const hasResult = !!result?.grade;
      const eligible = item.eligible;
      const reason = item.reason;
      const passed = hasResult && examSys.PASSING_GRADES.has(result.grade);

      let itemClass = 'hogwarts-exam-item';
      if (hasResult) {
        itemClass += passed ? ' hogwarts-exam-item--completed' : ' hogwarts-exam-item--completed fail';
      } else if (!eligible) {
        itemClass += ' hogwarts-exam-item--locked';
      }

      let gradeClass = 'hogwarts-exam-item-grade';
      if (hasResult) {
        gradeClass += passed ? ' hogwarts-exam-item-grade--passed' : ' hogwarts-exam-item-grade--failed';
      } else if (eligible) {
        gradeClass += ' hogwarts-exam-item-grade--eligible';
      } else {
        gradeClass += ' hogwarts-exam-item-grade--locked';
      }

      let detailHtml = '';
      if (hasResult) {
        detailHtml = `<div class="hogwarts-exam-item-detail hogwarts-exam-item-detail--success">得分：${result.score}分 · ${examSys.GRADE_NAMES[result.grade]}</div>`;
      } else if (!eligible) {
        detailHtml = `<div class="hogwarts-exam-item-detail hogwarts-exam-item-detail--error">${reason}</div>`;
      }

      items += `<button
        ${eligible && !hasResult ? '' : 'disabled'}
        class="${itemClass}"
        data-exam-key="${item.subjectKey}" data-exam-type="${type}"
        title="${hasResult ? `${examSys.GRADE_NAMES[result.grade]}（${result.score}分）` : (eligible ? '点击参加考试' : reason)}">
        <div class="hogwarts-exam-item-header">
          <span class="hogwarts-exam-item-name">${item.name}</span>
          <span class="${gradeClass}">${hasResult ? result.grade : (eligible ? '📝' : '🔒')}</span>
        </div>
        ${detailHtml}
      </button>`;
    });

    return `<div class="hogwarts-exam-block">
      <div class="exam-block-title">${title}</div>
      <div class="exam-block-subtitle">${subtitle}</div>
      <div class="hogwarts-exam-list">${items}</div>
    </div>`;
  }

  let html = `<div class="exam-page">
    <div class="exam-header">
      <button id="hogwarts-exam-back-btn" class="schedule-exam-entry-btn">← 返回课程表</button>
      <div class="exam-title">霍格沃茨资质考试</div>
    </div>
    <div class="exam-info">
      <span class="exam-info-highlight">O.W.L.</span>（普通巫师等级考试）· 5年级参加<br>
      <span class="exam-info-highlight">N.E.W.T.</span>（终极巫师等级考试）· 7年级参加 · 需 O.W.L. 成绩 A 或以上
    </div>

    ${buildExamBlock('owl', 5, '📋 O.W.L.（普通巫师等级考试）', '需要 5 年级，且各科完成 60% 以上课程')}
    ${buildExamBlock('newt', 7, '🎓 N.E.W.T.（终极巫师等级考试）', '需要 7 年级，且 O.W.L. 成绩达到 A 或以上')}
  </div>`;

  container.innerHTML = html;

  const backBtn = container.querySelector('#hogwarts-exam-back-btn');
  if (backBtn) {
    backBtn.addEventListener('click', () => _renderSchedule(container));
  }

  container.querySelectorAll('button[data-exam-key]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.examKey;
      const type = btn.dataset.examType;
      const result = type === 'owl'
        ? examSys.getHogwartsExams().owl[key]
        : examSys.getHogwartsExams().newt[key];
      if (result) {
        _showHogwartsExamResult(container, key, type, result);
      } else {
        _renderHogwartsExamSession(container, key, type);
      }
    });
  });
}

function _renderHogwartsExamSession(container, subjectKey, type) {
  const examSys = window.hogwartsExam;
  if (!examSys) return;

  const examTypeName = type === 'owl' ? 'O.W.L.' : 'N.E.W.T.';
  const subjectName = examSys.SUBJECT_DISPLAY_NAMES[subjectKey] || subjectKey;

  let html = `<div class="exam-session">
    <div class="exam-session-title">📋 ${subjectName} · ${examTypeName} 考试</div>
    <div class="exam-session-desc">系统将根据你的课程进度自动评定成绩，或你可以选择跳过本次考试。</div>
    <button id="exam-auto-btn" class="exam-action-btn">
      ✨ 参加考试（系统自动评分）
    </button>
    <button id="exam-skip-btn" class="exam-action-btn exam-action-btn--secondary">
      ⏭️ 跳过本次考试
    </button>
    <button id="exam-back-btn" class="exam-action-btn exam-action-btn--secondary">
      ← 返回考试列表
    </button>
  </div>`;

  container.innerHTML = html;

  document.getElementById('exam-auto-btn').addEventListener('click', () => {
    const result = examSys.takeHogwartsExam(subjectKey, type, null);
    _showHogwartsExamResult(container, subjectKey, type, result);
  });

  document.getElementById('exam-skip-btn').addEventListener('click', () => {
    const result = examSys.takeHogwartsExam(subjectKey, type, 0);
    _showHogwartsExamResult(container, subjectKey, type, result);
  });

  document.getElementById('exam-back-btn').addEventListener('click', () => {
    _renderHogwartsExams(container);
  });
}

function _showHogwartsExamResult(container, subjectKey, type, result) {
  const examSys = window.hogwartsExam;
  if (!examSys) return;

  const examTypeName = type === 'owl' ? 'O.W.L.' : 'N.E.W.T.';
  const subjectName = examSys.SUBJECT_DISPLAY_NAMES[subjectKey] || subjectKey;
  const passed = examSys.PASSING_GRADES.has(result.grade);
  const gradeClass = passed ? 'exam-result-grade--passed' : 'exam-result-grade--failed';

  let html = `<div class="exam-result">
    <div class="exam-result-title">${subjectName} · ${examTypeName} 成绩</div>
    <div class="exam-result-grade ${gradeClass}">${result.grade}</div>
    <div class="exam-result-grade-name ${gradeClass}">${examSys.GRADE_NAMES[result.grade]}</div>
    <div class="exam-result-score">得分：${result.score}分${result.correct !== undefined ? `（${result.correct}/${result.total}题正确）` : ''}</div>
    <div class="exam-result-narrative">${result.narrative ?? ''}</div>
    <button id="exam-result-back" class="exam-result-back-btn">← 返回考试列表</button>
  </div>`;

  container.innerHTML = html;

  document.getElementById('exam-result-back').addEventListener('click', () => {
    _renderHogwartsExams(container);
  });

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

export function refreshCoursePanel() {
  const box = document.getElementById("courseMain");
  if (!box) return;

  const hadClassroomPanel = !!document.getElementById("classroomPanel");
  document.getElementById("classroomPanel")?.remove();
  document.getElementById("cls-choice-modal")?.remove();
  document.body.classList.remove("modal-open");
  if (hadClassroomPanel) {
    closeCoursePanel();
    return;
  }
  box.style.display = "";

  loadTimeFromSave();
  loadCourseProgressFromSave();
  autoUpdateCourseUnlock();

  const scheduleContainer = document.getElementById("schedule-container");
  const muggleScheduleContainer = document.getElementById("muggle-schedule-container");
  const courseContainer = document.getElementById("course-container");

  if (scheduleContainer && scheduleContainer.style.display !== "none") {
    _renderSchedule(scheduleContainer);
  } else if (muggleScheduleContainer && muggleScheduleContainer.style.display !== "none") {
    _renderMuggleSchedule(muggleScheduleContainer);
  } else if (courseContainer && courseContainer.style.display !== "none") {
    navStack = [];
    renderLevel(courseData, "课程列表");
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
window.refreshCoursePanel    = refreshCoursePanel;
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
  recordMissedClassesBetween,
  remindCurrentWindowClasses,
  isSchoolNoClassDate,
  isSchoolNoClassPeriod,
  _renderSchedule,
  _renderMuggleSchedule
};

export default {
  openCoursePanel,
  closeCoursePanel,
  refreshCoursePanel,
  autoUpdateCourseUnlock,
  getCurrentGrade,
  getHogwartsTodaySchedule,
  getMuggleTodaySchedule,
  getTodayScheduledCourses,
  getCurrentWindowCourses,
  validateCourseAccess,
  markAttended,
  recordMissedClassesForCurrentWindow,
  recordMissedClassesBetween,
  remindCurrentWindowClasses,
  isSchoolNoClassDate,
  isSchoolNoClassPeriod
};

/**
 * 初始化课程表系统
 * 验证课程表数据完整性并记录版本信息
 */
function initializeCourseScheduleSystem() {
  const errors = courseScheduleManager.validateSchedule();
  if (errors.length > 0) {
    console.warn('[Course Schedule] Validation warnings:', errors);
  }

  const versionInfo = courseScheduleManager.getVersionInfo();
  console.log('[Course Schedule] Loaded:', versionInfo);
}

// 初始化课程表系统
initializeCourseScheduleSystem();

setTimeout(() => {
  window.courseAttendance?.remindCurrentWindowClasses?.();
}, 0);

/**
 * muggle-schedule.js
 * 麻瓜学术系九门课程特殊课程表系统（现实学校模式）
 * 
 * 核心特性：
 *   1. 参考现实初中课程表，每周固定安排课程
 *   2. 1991年霍格沃茨1年级对照初一课程安排
 *   3. 第一次上某门课时触发教授自我介绍
 * 
 * 课程安排（参考初一标准）：
 *   - 数学：每周4节
 *   - 语文与文学：每周4节
 *   - 英语：每周4节
 *   - 物理：每周3节
 *   - 化学：每周3节
 *   - 生物：每周2节
 *   - 历史：每周2节
 *   - 地理：每周2节
 *   - 道德与法治：每周1节
 */

import { loadSave, writeSave } from './save-utils.js';
import { isHoliday } from '../time-system.js';

// ── 九门麻瓜课程键名 ────────────────────────────────────────
export const MUGGLE_SUBJECTS = [
  'math', 'physics', 'chemistry', 'biology', 
  'history', 'civics', 'geography', 'literature', 'english'
];

// ── 课程显示名称映射 ────────────────────────────────────────
export const SUBJECT_NAMES = {
  math: '数学',
  physics: '物理',
  chemistry: '化学',
  biology: '生物',
  history: '历史',
  civics: '道德与法治',
  geography: '地理',
  literature: '语文与文学',
  english: '英语'
};

// ── 课程图标映射 ────────────────────────────────────────────
export const SUBJECT_ICONS = {
  math: '🔢',
  physics: '⚡',
  chemistry: '🧪',
  biology: '🔬',
  history: '📜',
  civics: '⚖️',
  geography: '🗺️',
  literature: '📖',
  english: '🔤'
};

// ── 每周固定课程表（初一标准，每天3节课）───────────────────────
// 1991年霍格沃茨1年级 = 现实初中1年级
// 每天3节课，对应每天3次行动
// 全周15节课，完整覆盖九门学科
export const WEEKLY_SCHEDULE = {
  周一: [
    { period: 1, subject: 'math' },
    { period: 2, subject: 'literature' },
    { period: 3, subject: 'english' },
  ],
  周二: [
    { period: 1, subject: 'physics' },
    { period: 2, subject: 'chemistry' },
    { period: 3, subject: 'biology' },
  ],
  周三: [
    { period: 1, subject: 'math' },
    { period: 2, subject: 'literature' },
    { period: 3, subject: 'history' },
  ],
  周四: [
    { period: 1, subject: 'english' },
    { period: 2, subject: 'geography' },
    { period: 3, subject: 'civics' },
  ],
  周五: [
    { period: 1, subject: 'math' },
    { period: 2, subject: 'english' },
    { period: 3, subject: 'chemistry' },
  ],
};

// ── 每周课时统计（总计15节课/周）────────────────────────────────
export const WEEKLY_HOURS = {
  math: 3,       // 周一、周三、周五
  literature: 2, // 周一、周三
  english: 3,    // 周一、周四、周五
  physics: 1,    // 周二
  chemistry: 2,  // 周二、周五
  biology: 1,    // 周二
  history: 1,    // 周三
  geography: 1,  // 周四
  civics: 1      // 周四
};

// ── 教授自我介绍数据 ────────────────────────────────────────
export const professorIntroductions = {
  math: {
    professor: "奥古斯都·芬威克",
    title: "数学教授",
    introduction: "「我是奥古斯都·芬威克。」他在讲台后面站定，声音不大却清晰地传遍整个教室。「我不擅长闲聊。我们开始。」他顿了顿，目光扫过全班，「数学不是算数，是宇宙的语言。希望你们能学会读它。」",
    portrait: "一位瘦削的中年巫师，穿着磨旧的深色长袍，左手总握着一支粉笔，右手边永远放着一台麻瓜计算器"
  },
  physics: {
    professor: "塞拉菲娜·穆迪",
    title: "物理教授",
    introduction: "「早上好！我是塞拉菲娜·穆迪！」她的声音带着一种几乎能触摸到的热情，「我在麻瓜世界生活了七年——让我告诉你们，那些不用魔法的人是怎么修理这个世界的！」她举起一台拆开的麻瓜电风扇，「今天我们从最基础的开始：力。」",
    portrait: "一位精力充沛的女巫，短发，眼睛像在发光，讲台上永远摆着各种麻瓜电器零件"
  },
  chemistry: {
    professor: "普里姆罗斯·斯普劳特",
    title: "化学教授",
    introduction: "「等等等等，先别急着坐下！」她走进教室，目光扫过每个人的坩埚，「我是普里姆罗斯·斯普劳特。你们魔药课学过的，有些东西在这里会以不同的方式出现。」她敲了敲讲台，「化学和魔药学，其实在分享同一个秘密。」",
    portrait: "一位温和的女巫，穿着浅绿色长袍，手上总沾着些粉末，看起来比魔药课的斯普劳特教授年轻一些"
  },
  biology: {
    professor: "塔维什·麦克拉伦",
    title: "生物教授",
    introduction: "「……」他站在讲台上，沉默了足足十秒。「塔维什·麦克拉伦。」他终于开口，声音低沉。「生物学是一门严谨到让人沉默的学科。」他指向墙上的细胞结构图，「今天，我们从最基础的开始。」",
    portrait: "一位沉默寡言的男巫，总是穿着深灰色长袍，眼神专注，讲台上永远放着一台麻瓜显微镜"
  },
  history: {
    professor: "赫伯特·宾斯二世",
    title: "历史教授",
    introduction: "「我是赫伯特·宾斯二世！」他重重拍了一下讲台，全班都吓了一跳。「不要叫我走廊那位——那是我祖父！」他转身在黑板上画了一条长长的时间线，「今天我们讲的，不是麻瓜的历史，是我们共同的历史。」",
    portrait: "一位充满激情的中年男巫，头发有些凌乱，讲课时常激动地挥舞手臂，年表永远贴满教室墙壁"
  },
  civics: {
    professor: "康斯坦丝·沙克博特",
    title: "道德与法治教授",
    introduction: "「康斯坦丝·沙克博特。」她在讲台后坐下，合上手中的书。「这门课不教同情，教理解。」她的目光锐利，「你们会学到制度、法律、权力——以及它们如何塑造这个世界。不要带着偏见来上课。」",
    portrait: "一位冷峻的女巫，穿着一丝不苟的深蓝色长袍，说话简洁有力，眼神总能看穿人心"
  },
  geography: {
    professor: "菲利克斯·韦斯利",
    title: "地理教授",
    introduction: "「嘿！我是菲利克斯·韦斯利！」他抱着一叠巨大的麻瓜地图走进来，眼睛亮晶晶的，「你们知道吗？麻瓜用两条腿走遍了整个世界！今天我们就从这张世界地图开始——来找找霍格沃茨在哪里！」",
    portrait: "一位年轻充满活力的男巫，总穿着旅行靴，随身携带麻瓜指南针，讲台上铺满各种地图"
  },
  literature: {
    professor: "伊莱莎·洛夫古德",
    title: "语文与文学教授",
    introduction: "「……」她闭上眼睛，轻声念了一句什么，然后睁开眼微笑。「伊莱莎·洛夫古德。」她从窗台取下一本诗集，「文字是没有魔力的魔法。今天，我们来听听它们在说什么。」",
    portrait: "一位气质优雅的女巫，穿着淡紫色长袍，头发上总别着一朵干花，教室角落堆满了麻瓜书籍"
  },
  english: {
    professor: "米兰达·珀西瓦尔",
    title: "英语教授",
    introduction: "「米兰达·珀西瓦尔。」她的发音清晰得像水晶。「英语不仅仅是麻瓜的语言——它是巫师咒语最古老的来源之一。」她在黑板上写下一个咒语词源，「今天，我们从词根开始。」",
    portrait: "一位严谨的女巫，穿着整洁的白色衬衫和深色马甲，讲课时语调平稳，批改作业用细头钢笔"
  }
};

// ── 获取今日课程安排 ────────────────────────────────────────
/**
 * 获取今天的麻瓜课程安排
 * @param {string} dateStr 日期字符串（格式：YYYY-MM-DD）
 * @returns {Array} 今日课程列表 [{ period, subject, subjectKey }]
 */
export function getTodaySchedule(dateStr = null) {
  const data = loadSave();
  const today = dateStr || data.time?.currentDate || '1991-09-02';
  
  const date = new Date(today);
  if (isNaN(date.getTime())) {
    console.warn('Invalid date:', today);
    return [];
  }
  
  const dayOfWeek = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][date.getDay()];
  
  // 周末没有课程
  if (dayOfWeek === '周六' || dayOfWeek === '周日') {
    return [];
  }
  
  // 检查是否是假期
  if (isHoliday(today)) {
    return [];
  }
  
  return WEEKLY_SCHEDULE[dayOfWeek] || [];
}

// ── 获取当前课时对应的课程 ──────────────────────────────────
/**
 * 获取当前行动次数对应的课程
 * 每天3次行动 = 3节课
 * actionLeft=3 → 第1节（早晨）
 * actionLeft=2 → 第2节（下午）
 * actionLeft=1 → 第3节（傍晚）
 * @returns {Object|null} 当前课程信息 { period, subject, subjectKey, icon, isAvailable }
 */
export function getCurrentPeriodCourse() {
  const todaySchedule = getTodaySchedule();
  if (todaySchedule.length === 0) {
    return null;
  }
  
  const data = loadSave();
  const actionLeft = data.time?.dailyActionLeft || 3;
  
  // 行动次数倒推当前课时：剩余次数越多，当前课时越早
  // actionLeft = 3 → period = 1（第一节/早晨）
  // actionLeft = 2 → period = 2（第二节/下午）
  // actionLeft = 1 → period = 3（第三节/晚上）
  const period = 4 - actionLeft;
  
  // 找到对应课时的课程
  const course = todaySchedule.find(c => c.period === period);
  if (!course) {
    return null;
  }
  
  // 检查该课程今日是否已上过
  const hasStudiedToday = hasStudiedSubjectToday(course.subject);
  
  return {
    period: course.period,
    subject: SUBJECT_NAMES[course.subject],
    subjectKey: course.subject,
    icon: SUBJECT_ICONS[course.subject],
    isAvailable: !hasStudiedToday
  };
}

// ── 获取今日可上的所有课程 ────────────────────────────────
/**
 * 获取今天所有可上的麻瓜课程（未上过的）
 * @returns {Array} 可上课列表
 */
export function getAvailableCoursesToday() {
  const todaySchedule = getTodaySchedule();
  if (todaySchedule.length === 0) {
    return [];
  }
  
  return todaySchedule.map(course => ({
    period: course.period,
    subject: SUBJECT_NAMES[course.subject],
    subjectKey: course.subject,
    icon: SUBJECT_ICONS[course.subject],
    isAvailable: !hasStudiedSubjectToday(course.subject)
  }));
}

// ── 检查今日是否已学习某科目 ───────────────────────────────
/**
 * 检查今日是否已学习某科目
 * @param {string} subjectKey 
 * @returns {boolean}
 */
export function hasStudiedSubjectToday(subjectKey) {
  const data = loadSave();
  const today = data.time?.currentDate || '1991-09-02';
  
  if (!data.course?.muggleSchedule?.[subjectKey]) {
    return false;
  }
  
  return data.course.muggleSchedule[subjectKey].lastStudiedDate === today;
}

// ── 检查是否已见过教授 ──────────────────────────────────────
/**
 * 检查玩家是否已见过某科目的教授
 * @param {string} subjectKey 
 * @returns {boolean}
 */
export function hasMetProfessor(subjectKey) {
  const data = loadSave();
  return data.course?.muggleSchedule?.[subjectKey]?.hasMetProfessor || false;
}

/**
 * 标记已见过教授
 * @param {string} subjectKey 
 */
export function markMetProfessor(subjectKey) {
  const data = loadSave();
  if (!data.course) data.course = {};
  if (!data.course.muggleSchedule) data.course.muggleSchedule = {};
  if (!data.course.muggleSchedule[subjectKey]) {
    data.course.muggleSchedule[subjectKey] = {
      currentLesson: 1,
      lastStudiedDate: null,
      hasMetProfessor: true
    };
  } else {
    data.course.muggleSchedule[subjectKey].hasMetProfessor = true;
  }
  writeSave(data);
}

// ── 记录学习日期 ────────────────────────────────────────────
/**
 * 记录今日已学习某科目
 * @param {string} subjectKey 
 */
export function recordStudyDate(subjectKey) {
  const data = loadSave();
  const today = data.time?.currentDate || '1991-09-02';
  
  if (!data.course) data.course = {};
  if (!data.course.muggleSchedule) data.course.muggleSchedule = {};
  if (!data.course.muggleSchedule[subjectKey]) {
    data.course.muggleSchedule[subjectKey] = {
      currentLesson: 1,
      lastStudiedDate: today,
      hasMetProfessor: false
    };
  } else {
    data.course.muggleSchedule[subjectKey].lastStudiedDate = today;
  }
  writeSave(data);
}

// ── 获取课程进度信息 ────────────────────────────────────────
/**
 * 获取某科目的课程进度信息
 * @param {string} subjectKey 
 * @returns {Object} { currentLesson, totalLessons, progressPercent, hasMetProfessor }
 */
export function getSubjectProgress(subjectKey) {
  const data = loadSave();
  const schedule = data.course?.muggleSchedule?.[subjectKey];
  const subjectData = window[`subject_${subjectKey}`];
  
  const totalLessons = subjectData?.syllabus ? getAllLessonsCount(subjectData.syllabus) : 0;
  const currentLesson = schedule?.currentLesson || 1;
  const progressPercent = totalLessons > 0 ? Math.round((currentLesson / totalLessons) * 100) : 0;
  
  return {
    currentLesson,
    totalLessons,
    progressPercent,
    hasMetProfessor: schedule?.hasMetProfessor || false
  };
}

/**
 * 获取某科目的总课时数
 */
function getAllLessonsCount(syllabus) {
  let count = 0;
  syllabus.forEach(chapter => {
    count += chapter.lessons?.length || 0;
  });
  return count;
}

// ── 获取当前课时 ────────────────────────────────────────────
/**
 * 获取某科目当前应上的课时
 * @param {string} subjectKey 
 * @returns {number} 当前课时号
 */
export function getCurrentLesson(subjectKey) {
  const data = loadSave();
  if (!data.course?.muggleSchedule?.[subjectKey]) {
    return 1;
  }
  return data.course.muggleSchedule[subjectKey].currentLesson || 1;
}

/**
 * 更新课程进度（上完一节课后调用）
 * @param {string} subjectKey 
 */
export function advanceLesson(subjectKey) {
  const data = loadSave();
  const subjectData = window[`subject_${subjectKey}`];
  
  if (!data.course) data.course = {};
  if (!data.course.muggleSchedule) data.course.muggleSchedule = {};
  if (!data.course.muggleSchedule[subjectKey]) {
    data.course.muggleSchedule[subjectKey] = {
      currentLesson: 2,
      lastStudiedDate: null,
      hasMetProfessor: false
    };
  } else {
    const totalLessons = subjectData?.syllabus ? getAllLessonsCount(subjectData.syllabus) : 100;
    if (data.course.muggleSchedule[subjectKey].currentLesson < totalLessons) {
      data.course.muggleSchedule[subjectKey].currentLesson++;
    }
  }
  
  writeSave(data);
}

// ── 获取本周课程表字符串 ────────────────────────────────────
/**
 * 获取本周课程表的可读字符串
 * @returns {string} 课程表文本
 */
export function getWeeklyScheduleText() {
  const days = ['周一', '周二', '周三', '周四', '周五'];
  let text = '📅 本周麻瓜学术系课程表\n\n';
  
  days.forEach(day => {
    text += `${day}:\n`;
    WEEKLY_SCHEDULE[day].forEach(course => {
      const periodName = getPeriodName(course.period);
      text += `  ${periodName} ${SUBJECT_ICONS[course.subject]} ${SUBJECT_NAMES[course.subject]}\n`;
    });
    text += '\n';
  });
  
  text += '📊 每周课时统计：\n';
  Object.entries(WEEKLY_HOURS).forEach(([key, hours]) => {
    text += `  ${SUBJECT_ICONS[key]} ${SUBJECT_NAMES[key]}: ${hours}节/周\n`;
  });
  
  return text;
}

/**
 * 获取课时名称
 */
function getPeriodName(period) {
  const names = {
    1: '早晨（第1节）',
    2: '下午（第2节）',
    3: '傍晚（第3节）'
  };
  return names[period] || `第${period}节`;
}

// ── 全局挂载 ────────────────────────────────────────────────
window.muggleSchedule = {
  MUGGLE_SUBJECTS,
  SUBJECT_NAMES,
  SUBJECT_ICONS,
  WEEKLY_SCHEDULE,
  WEEKLY_HOURS,
  professorIntroductions,
  getTodaySchedule,
  getCurrentPeriodCourse,
  getAvailableCoursesToday,
  hasStudiedSubjectToday,
  hasMetProfessor,
  markMetProfessor,
  recordStudyDate,
  getSubjectProgress,
  getCurrentLesson,
  advanceLesson,
  getWeeklyScheduleText
};

export default {
  MUGGLE_SUBJECTS,
  SUBJECT_NAMES,
  SUBJECT_ICONS,
  WEEKLY_SCHEDULE,
  WEEKLY_HOURS,
  professorIntroductions,
  getTodaySchedule,
  getCurrentPeriodCourse,
  getAvailableCoursesToday,
  hasStudiedSubjectToday,
  hasMetProfessor,
  markMetProfessor,
  recordStudyDate,
  getSubjectProgress,
  getCurrentLesson,
  advanceLesson,
  getWeeklyScheduleText
};
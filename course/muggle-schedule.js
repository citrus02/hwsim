/**
 * muggle-schedule.js
 * 麻瓜学术系九门课程特殊课程表系统（现实学校模式）
 *
 * 核心特性：
 *   1. 参考现实初中课程表，每周固定安排课程
 *   2. 1991年霍格沃茨1年级对照初一课程安排
 *   3. 第一次上某门课时触发教授自我介绍
 *   4. 每天3节课，周一至周五上课，周六周日不上课
 *
 * 课程安排（参考英国Year 7（11-12岁）标准，周一至周五上课，共15节/周）：
 *   周一：数学（1）、英语（2）、英语文学（3）
 *   周二：数学（1）、英语（2）、历史（3）
 *   周三：英语（1）、地理（2）、生物（3）
 *   周四：数学（1）、英语（2）、化学（3）
 *   周五：数学（1）、物理（2）、道德与法治（3）
 *
 *   英语4 + 数学4 + 物理1 + 化学1 + 生物1 + 历史1 + 地理1 + 英语文学1 + 道德与法治1 = 15
 *
 *   【英国Year 7课表核心逻辑】
 *   英国 vs 中国初一最大区别：
 *   1. 英语（English）是母语课，节数最多（英国通常5节/周，游戏适配为4节）
 *   2. 没有独立"语文"科目——阅读/写作/文学全归入 English 体系
 *      → literature 科目重新定位为"英语文学"课（English Literature）
 *   3. 历史与地理在英国Year 7受到更高重视（各2节/周，游戏压缩至1节）
 *   4. 自然科学在英国Year 7通常作综合科学教授，但霍格沃茨麻瓜学术系
 *      保留了物理/化学/生物三科分设的传统（与英国私立学校做法一致）
 *   5. 道德与法治对应英国 RE（Religious Education）+ PSHE 课程性质
 *
 * =====================================================================
 *  麻瓜学术系七年制 · 年级课时总表  （开发完整度检查用）
 *  说明：Year 1 数据实际采集自各科目 .js 文件，Year 2-7 为规划目标
 * =====================================================================
 *
 *  学年有效教学周：约34周（37校历周 - 圣诞2.5周 - 复活节1周 - 考试约0.5周）
 *  目标课时 = 周课时 × 34周（每年级）
 *  实际课时 = 各科目 .js 文件中最大 lesson 编号（仅 Year 1 已实现）
 *
 *  科目         周时  年1目标/实现     年2    年3    年4    年5    年6    年7
 *  ─────────────────────────────────────────────────────────────────────
 *  数学           4   136 / 110 ⚠   136    136    136    136    136    —
 *  语文与文学      3   102 /  48 ❌   102    102    102    102    102    —
 *  英语            2    68 /  75 ✅    68     68     68     68     68    —
 *  物理            1    34 /  60 ⚠    34     34     34     34     34    —
 *  化学            1    34 /  56 ⚠    34     34     34     34     34    —
 *  生物            1    34 /  34 ✅    34     34     —      —      —     —
 *  历史            1    34 /  45 ⚠    34     34     34     34     —     —
 *  地理            1    34 /  69 ⚠    34     —      —      —      —     —
 *  道德与法治       1    34 /  45 ⚠    34     34     —      —      —     —
 *  ─────────────────────────────────────────────────────────────────────
 *  年级合计      15   510 / 482      510    476    408    374    374    —
 *
 *  ✅ 达标   ⚠ 偏差（超出或不足）   ❌ 严重不足   — 该年级无此科目
 *
 *  【各年级科目规划（对应中国学制）】
 *  年1（初一）：全9科开放
 *  年2（初二）：全9科，地理内容压缩进阶
 *  年3（初三）：8科（地理结束，理化生深化，道德继续）
 *  年4（高一）：7科（道德与法治结束，转为政治选修；理化生高中版本）
 *  年5（高二）：6科（生物选修化；O.W.L.考试年）
 *  年6（高三）：5科（选修制深化；N.E.W.T.准备）
 *  年7（毕业年）：无麻瓜学术必修课，N.E.W.T.另立
 *
 *  【Year 1 各科目完整度诊断】
 *  数学   (110课)：目标136，缺26课 ——初一下学期部分知识点可补充
 *  语文   ( 48课)：目标102，缺54课 ——水课已清除，真实章节内容待大量补充
 *  英语   ( 75课)：目标 68，超  7课 ——可接受，含复习和拓展
 *  物理   ( 60课)：目标 34，超 26课 ——建议视为Year1+Year2联合内容
 *  化学   ( 56课)：目标 34，超 22课 ——建议视为Year1+Year2联合内容
 *  生物   ( 34课)：目标 34，精确对齐✅
 *  历史   ( 45课)：目标 34，超 11课 ——约含Year2初期内容
 *  地理   ( 69课)：目标 34，超 35课 ——约覆盖Year1+Year2全部
 *  道德   ( 45课)：目标 34，超 11课 ——约含Year2初期内容
 *
 *  【内容文件位置】
 *  course/muggle-academic/math.js / math-lesson.js / math-questionBank.js
 *  course/muggle-academic/literature.js / literature-lesson.js
 *  course/muggle-academic/latin.js / latin-questionBank.js / latin-lesson.js
 *  course/muggle-academic/physics.js / physics-lesson.js / physics-questionBank.js
 *  course/muggle-academic/chemistry.js / chemistry-lesson.js / chemistry-questionBank.js
 *  course/muggle-academic/biology.js / biology-lesson.js / biology-questionBank.js
 *  course/muggle-academic/history.js / history-lesson.js / history-questionBank.js
 *  course/muggle-academic/geography.js / geography-questionBank.js
 *  course/muggle-academic/civics.js / civics-lesson.js / civics-questionBank.js
 * =====================================================================
 */

import { loadSave, writeSave } from './save-utils.js';
import { isHoliday, isSchoolNoClassDate } from '../time-system.js';
import { getYearGrade } from '../save/save-system.js';

// ── 九门麻瓜课程键名 ────────────────────────────────────────
export const MUGGLE_SUBJECTS = [
  'math', 'physics', 'chemistry', 'biology', 
  'history', 'civics', 'geography', 'literature', 'latin'
];

// ── 课程显示名称映射 ────────────────────────────────────────
// 基于英国Year 7课程体系：英语文学作为独立科目；道德与法治对应RE+PSHE
export const SUBJECT_NAMES = {
  math: '数学',
  physics: '物理',
  chemistry: '化学',
  biology: '生物',
  history: '历史',
  civics: '哲学与伦理',
  geography: '地理',
  literature: '英语文学',
  latin: '拉丁语'
};

// ── 课程图标映射 ────────────────────────────────────────────
export const SUBJECT_ICONS = {
  math: '🔢',
  physics: '⚡',
  chemistry: '⚗️',
  biology: '🌿',
  history: '📜',
  civics: '⚖️',
  geography: '🌍',
  literature: '📖',
  latin: '🏛️'
};

// ── 人文选科科目（4年级触发，二选一）──────────────────────────
export const HUMANITIES_CHOICE_SUBJECTS = ['history', 'geography'];

// ── A-Level 课表槽位模板（每科5节/周，共3科×5=15节）──────────────
// 科目A=aLevelSubjects[0]，B=[1]，C=[2]
export const ALEVEL_SLOT_TEMPLATE = {
  周一: [{ period: 1, slot: 'A' }, { period: 2, slot: 'B' }, { period: 3, slot: 'C' }],
  周二: [{ period: 1, slot: 'A' }, { period: 2, slot: 'C' }, { period: 3, slot: 'B' }],
  周三: [{ period: 1, slot: 'B' }, { period: 2, slot: 'A' }, { period: 3, slot: 'C' }],
  周四: [{ period: 1, slot: 'A' }, { period: 2, slot: 'B' }, { period: 3, slot: 'C' }],
  周五: [{ period: 1, slot: 'C' }, { period: 2, slot: 'A' }, { period: 3, slot: 'B' }],
};

// ── KS3 课表（1–3年级，全科，math×4 latin×4 其余各×1）──────────────
// 每天3节课，周一至周五上课，周六周日休息，总计15节/周
// 英语（4节）= 数学（4节），英语为母语主科；三门自然科学各1节分散全周
export const WEEKLY_SCHEDULE = {
  周一: [
    { period: 1, subject: 'math' },
    { period: 2, subject: 'latin' },
    { period: 3, subject: 'literature' },  // English Literature（英语文学）
  ],
  周二: [
    { period: 1, subject: 'math' },
    { period: 2, subject: 'latin' },
    { period: 3, subject: 'history' },
  ],
  周三: [
    { period: 1, subject: 'latin' },
    { period: 2, subject: 'geography' },
    { period: 3, subject: 'biology' },
  ],
  周四: [
    { period: 1, subject: 'math' },
    { period: 2, subject: 'latin' },
    { period: 3, subject: 'chemistry' },
  ],
  周五: [
    { period: 1, subject: 'math' },
    { period: 2, subject: 'physics' },
    { period: 3, subject: 'civics' },  // RE + PSHE（宗教教育与公民课）
  ],
};

// ── 每周课时统计（总计15节课/周，周一至周五）───────────────────────
// 英国Year 7：英语与数学并列最高（各4节），理科三门各1节分布全周
export const WEEKLY_HOURS = {
  math: 4,       // 周一、周二、周四、周五
  latin: 4,      // 周一、周二、周三、周四（英国Year 7母语科，与数学并列）
  literature: 1, // 周一（English Literature，英语文学专课）
  history: 1,    // 周二
  geography: 1,  // 周三
  biology: 1,    // 周三
  chemistry: 1,  // 周四
  physics: 1,    // 周五
  civics: 1      // 周五（RE + PSHE）
};

// ── GCSE 课表（4–5年级，选 history）──────────────────────────────
// math×5, latin×4, biology×2, literature/history/chemistry/physics 各×1
const GCSE_HISTORY_SCHEDULE = {
  周一: [{ period: 1, subject: 'math' }, { period: 2, subject: 'latin' },    { period: 3, subject: 'literature' }],
  周二: [{ period: 1, subject: 'math' }, { period: 2, subject: 'latin' },    { period: 3, subject: 'history' }],
  周三: [{ period: 1, subject: 'latin' },{ period: 2, subject: 'biology' },  { period: 3, subject: 'biology' }],
  周四: [{ period: 1, subject: 'math' }, { period: 2, subject: 'latin' },    { period: 3, subject: 'chemistry' }],
  周五: [{ period: 1, subject: 'math' }, { period: 2, subject: 'physics' },  { period: 3, subject: 'math' }],
};

// ── GCSE 课表（4–5年级，选 geography）──────────────────────────
const GCSE_GEOGRAPHY_SCHEDULE = {
  周一: [{ period: 1, subject: 'math' }, { period: 2, subject: 'latin' },    { period: 3, subject: 'literature' }],
  周二: [{ period: 1, subject: 'math' }, { period: 2, subject: 'latin' },    { period: 3, subject: 'geography' }],
  周三: [{ period: 1, subject: 'latin' },{ period: 2, subject: 'biology' },  { period: 3, subject: 'biology' }],
  周四: [{ period: 1, subject: 'math' }, { period: 2, subject: 'latin' },    { period: 3, subject: 'chemistry' }],
  周五: [{ period: 1, subject: 'math' }, { period: 2, subject: 'physics' },  { period: 3, subject: 'math' }],
};

// ── 获取指定年级和存档数据对应的每周课表 ──────────────────────────
/**
 * @param {number} yearGrade  当前年级（1–7）
 * @param {Object} saveData   存档对象（data.course 下的字段）
 * @returns {Object} 当周课表，格式同 WEEKLY_SCHEDULE
 */
export function getWeeklySchedule(yearGrade, saveData) {
  // 1–3年级：KS3 固定课表
  if (yearGrade <= 3) {
    return WEEKLY_SCHEDULE;
  }

  // 4–5年级：GCSE，按人文选科返回对应课表
  if (yearGrade <= 5) {
    const humanities = saveData?.muggleHumanities;
    if (humanities === 'geography') return GCSE_GEOGRAPHY_SCHEDULE;
    // 未选或选了 history，都用 history 课表（选科界面由 course.js 处理）
    return GCSE_HISTORY_SCHEDULE;
  }

  // 6–7年级：A-Level，按选科动态生成课表
  const subjects = saveData?.aLevelSubjects || [];
  if (subjects.length === 0) return {};

  const [A, B, C] = subjects;
  const schedule = {};
  for (const [day, slots] of Object.entries(ALEVEL_SLOT_TEMPLATE)) {
    schedule[day] = slots.map(({ period, slot }) => {
      const subject = slot === 'A' ? A : slot === 'B' ? (B || A) : (C || B || A);
      return { period, subject };
    });
  }
  return schedule;
}

// ── 教授自我介绍数据 ────────────────────────────────────────
export const professorIntroductions = {
  math: {
    professor: "奥古斯都·芬威克",
    title: "数学教授",
    introduction: "「我是奥古斯都·芬威克。」他在讲台后面站定，声音不大却清晰地传遍整个教室。「我不擅长闲聊。我们开始。」他顿了顿，目光扫过全班，「数学不是算数，是宇宙的语言。希望你们能学会读它。」",
    portrait: "一位瘦削的中年巫师，穿着磨旧的深色长袍，左手总握着一支粉笔，右手边永远放着一台麻瓜计算器。"
  },
  physics: {
    professor: "塞拉菲娜·穆迪",
    title: "物理教授",
    introduction: "「早上好！我是塞拉菲娜·穆迪！」她的声音带着一种几乎能触摸到的热情，「我在麻瓜世界生活了七年——让我告诉你们，那些不用魔法的人是怎么修理这个世界的！」她举起一台拆开的麻瓜电风扇，「今天我们从最基础的开始：力。」",
    portrait: "一位精力充沛的女巫，短发，眼睛像在发光，讲台上永远摆着各种麻瓜电器零件。"
  },
  chemistry: {
    professor: "普里姆罗斯·斯普劳特",
    title: "化学教授",
    introduction: "「等等等等，先别急着坐下！」她走进教室，目光扫过每个人的坩埚，「我是普里姆罗斯·斯普劳特。你们魔药课学过的，有些东西在这里会以不同的方式出现。」她敲了敲讲台，「化学和魔药学，其实在分享同一个秘密。」",
    portrait: "一位温和的女巫，穿着浅绿色长袍，手上总沾着些粉末，看起来比魔药课的斯普劳特教授年轻一些。"
  },
  biology: {
    professor: "塔维什·麦克拉伦",
    title: "生物教授",
    introduction: "「……」他站在讲台上，沉默了足足十秒。「塔维什·麦克拉伦。」他终于开口，声音低沉。「生物学是一门严谨到让人沉默的学科。」他指向墙上的细胞结构图，「今天，我们从最基础的开始。」",
    portrait: "一位沉默寡言的男巫，总是穿着深灰色长袍，眼神专注，讲台上永远放着一台麻瓜显微镜。"
  },
  history: {
    professor: "赫伯特·宾斯二世",
    title: "历史教授",
    introduction: "「我是赫伯特·宾斯二世！」他重重拍了一下讲台，全班都吓了一跳。「不要叫我走廊那位——那是我祖父！」他转身在黑板上画了一条长长的时间线，「今天我们讲的，不是麻瓜的历史，是我们共同的历史。」",
    portrait: "一位充满激情的中年男巫，头发有些凌乱，讲课时常激动地挥舞手臂，年表永远贴满教室墙壁。"
  },
  civics: {
    professor: "康斯坦丝·沙克博特",
    title: "哲学与伦理教授",
    introduction: "「康斯坦丝·沙克博特。」她在讲台后坐下，把一本书翻到某页，推到最近的桌上。「电车失控，轨道上有五个人。你可以拉变轨杆，把它转向另一条轨道，但那里有一个人。」她抬起眼，「你拉吗？」全班沉默。她等了十秒。「好。我们开始上课了。」",
    portrait: "一位冷峻的女巫，穿着一丝不苟的深蓝色长袍，讲台上只有一本空白笔记本和一根粉笔，从不提前准备讲义。"
  },
  geography: {
    professor: "菲利克斯·韦斯莱",
    title: "地理教授",
    introduction: "「嘿！我是菲利克斯·韦斯莱！」他抱着一叠巨大的麻瓜地图走进来，眼睛亮晶晶的，「你们知道吗？麻瓜用两条腿走遍了整个世界！今天我们就从这张世界地图开始——来找找霍格沃茨在哪里！」",
    portrait: "一位年轻充满活力的男巫，总穿着旅行靴，随身携带麻瓜指南针，讲台上铺满各种地图。"
  },
  literature: {
    professor: "伊莱莎·洛夫古德",
    title: "英语文学教授",
    introduction: "「……」她闭上眼睛，轻声念了一句什么，然后睁开眼微笑。「伊莱莎·洛夫古德。」她从窗台取下一本诗集，「莎士比亚、狄更斯、奥斯汀——麻瓜把灵魂写进了书里。」她把书推到第一排桌上，「今天，我们来听听它们在说什么。」",
    portrait: "一位气质优雅的女巫，穿着淡紫色长袍，头发上总别着一朵干花，教室角落堆满了英国文学经典原著。"
  },
  latin: {
    professor: "米兰达·珀西瓦尔",
    title: "拉丁语教授",
    introduction: "「米兰达·珀西瓦尔。」她的发音清晰得像水晶，清晰到每个音节都有自己的重量。「拉丁语是死的语言——」她在黑板上写下 <em>Lumos</em>，「但它从未停止说话。」她顿了顿，「今天，我们来看看它说了什么。」",
    portrait: "一位严谨的女巫，穿着整洁的白色衬衫和深色马甲，讲台上永远放着拉丁语词典和一本磨旧的咒语词源手册，批改作业用细头钢笔。"
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

  // 周六周日均无课
  if (dayOfWeek === '周日' || dayOfWeek === '周六') {
    return [];
  }

  // 检查是否是假期
  if (isHoliday(today) || isSchoolNoClassDate(today)) {
    return [];
  }

  const yearGrade = getYearGrade();
  const schedule = getWeeklySchedule(yearGrade, data.course);
  return schedule[dayOfWeek] || [];
}

// ── 获取当前课时对应的课程 ──────────────────────────────────
/**
 * 获取当前行动次数对应的课程
 * 每天3次行动 = 3节课
 * actionLeft=3 → 第1节（上午）
 * actionLeft=2 → 第2节（下午）
 * actionLeft=1 → 第3节（夜晚）
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
  // actionLeft = 3 → period = 1（第一节/上午）
  // actionLeft = 2 → period = 2（第二节/下午）
  // actionLeft = 1 → period = 3（第三节/夜晚）
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
  const data = loadSave();
  const yearGrade = getYearGrade();
  const schedule = getWeeklySchedule(yearGrade, data.course);

  const days = ['周一', '周二', '周三', '周四', '周五'];
  let text = '📅 本周麻瓜学术系课程表\n\n';

  days.forEach(day => {
    const daySchedule = schedule[day] || [];
    if (daySchedule.length === 0) return;
    text += `${day}:\n`;
    daySchedule.forEach(course => {
      const periodName = getPeriodName(course.period);
      text += `  ${periodName} ${SUBJECT_ICONS[course.subject] || ''} ${SUBJECT_NAMES[course.subject] || course.subject}\n`;
    });
    text += '\n';
  });

  return text;
}

/**
 * 获取课时名称
 */
function getPeriodName(period) {
  const names = {
    1: '上午（第1节）',
    2: '下午（第2节）',
    3: '夜晚（第3节）'
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
  HUMANITIES_CHOICE_SUBJECTS,
  ALEVEL_SLOT_TEMPLATE,
  getWeeklySchedule,
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
  HUMANITIES_CHOICE_SUBJECTS,
  ALEVEL_SLOT_TEMPLATE,
  getWeeklySchedule,
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

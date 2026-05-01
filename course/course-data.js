/**
 * course-data.js
 * 霍格沃茨课程数据：课程树结构
 *
 * 结构说明：
 *   一级：大类（必修核心 / 高阶选修 / 专精进阶）
 *   二级：具体科目
 *   三级（仅麻瓜研究）：九门独立分科，每门携带 muggleSubjectKey
 *
 * 麻瓜研究分科键名：
 *   math / physics / chemistry / biology / history / civics / geography / literature / english
 *
 * 学习事件库与教授评语已统一至 course-default.js，本文件只负责数据结构。
 */

import { getMuggleStudiesEvent, getStudyEvent } from './course-default.js';

// ============================================================
// 麻瓜研究九门分科
// ============================================================

const muggleStudiesSubjects = [
  {
    level: 4,
    name: "数学",
    icon: "🔢",
    desc: "芬威克教授·有理数、方程、几何图形——麻瓜用来读懂宇宙的语言",
    unlock: false,
    studyRate: 0,
    unlockGrade: 1,
    muggleSubjectKey: "math",
    professor: "奥古斯都·芬威克"
  },
  {
    level: 4,
    name: "物理",
    icon: "⚡",
    desc: "塞拉菲娜·穆迪教授·力、能量、电——麻瓜修理世界的方式",
    unlock: false,
    studyRate: 0,
    unlockGrade: 1,
    muggleSubjectKey: "physics",
    professor: "塞拉菲娜·穆迪"
  },
  {
    level: 4,
    name: "化学",
    icon: "🧪",
    desc: "普里姆罗斯·斯普劳特教授·元素、反应——和魔药学共享秘密的学科",
    unlock: false,
    studyRate: 0,
    unlockGrade: 1,
    muggleSubjectKey: "chemistry",
    professor: "普里姆罗斯·斯普劳特"
  },
  {
    level: 4,
    name: "生物",
    icon: "🔬",
    desc: "塔维什·麦克拉伦教授·细胞、进化、分类——严谨到让人沉默的学科",
    unlock: false,
    studyRate: 0,
    unlockGrade: 1,
    muggleSubjectKey: "biology",
    professor: "塔维什·麦克拉伦"
  },
  {
    level: 4,
    name: "历史",
    icon: "📜",
    desc: "赫伯特·宾斯二世教授·工业革命到两次大战——这是我们共同的历史",
    unlock: false,
    studyRate: 0,
    unlockGrade: 1,
    muggleSubjectKey: "history",
    professor: "赫伯特·宾斯二世"
  },
  {
    level: 4,
    name: "道德与法治",
    icon: "⚖️",
    desc: "康斯坦丝·沙克博特教授·制度、法律、权力——不要同情，要理解",
    unlock: false,
    studyRate: 0,
    unlockGrade: 1,
    muggleSubjectKey: "civics",
    professor: "康斯坦丝·沙克博特"
  },
  {
    level: 4,
    name: "地理",
    icon: "🗺️",
    desc: "菲利克斯·韦斯利教授·地图、气候、探险——麻瓜用两条腿走遍的世界",
    unlock: false,
    studyRate: 0,
    unlockGrade: 1,
    muggleSubjectKey: "geography",
    professor: "菲利克斯·韦斯利"
  },
  {
    level: 4,
    name: "语文与文学",
    icon: "📖",
    desc: "伊莱莎·洛夫古德教授·诗歌、小说、文字——没有魔力的魔法",
    unlock: false,
    studyRate: 0,
    unlockGrade: 1,
    muggleSubjectKey: "literature",
    professor: "伊莱莎·洛夫古德"
  },
  {
    level: 4,
    name: "英语",
    icon: "🔤",
    desc: "米兰达·珀西瓦尔教授·语言学、词源——巫师咒语最古老的来源",
    unlock: false,
    studyRate: 0,
    unlockGrade: 1,
    muggleSubjectKey: "english",
    professor: "米兰达·珀西瓦尔"
  }
];

// ============================================================
// 课程树（三级结构）
// ============================================================

export const courseData = [
  {
    level: 2,
    name: "必修核心课程",
    icon: "📖",
    desc: "1~2年级巫师必修基础课程",
    children: [
      { level: 4, name: "变形术",      icon: "🔁", desc: "麦格教授教授，物体变形与人体变形",  unlock: false, studyRate: 0, unlockGrade: 1 },
      { level: 4, name: "魔咒学",      icon: "✨", desc: "各类攻击、防御、生活实用魔咒",     unlock: false, studyRate: 0, unlockGrade: 1 },
      { level: 4, name: "魔药学",      icon: "⚗️", desc: "药剂调配、魔法草药与材料使用",     unlock: false, studyRate: 0, unlockGrade: 1 },
      { level: 4, name: "黑魔法防御术", icon: "🛡️", desc: "抵御黑暗魔法、诅咒与邪恶生物",  unlock: false, studyRate: 0, unlockGrade: 1 },
      { level: 4, name: "草药学",      icon: "🌿", desc: "培育、识别与使用魔法植物",         unlock: false, studyRate: 0, unlockGrade: 1 },
      { level: 4, name: "魔法史",      icon: "📜", desc: "巫师世界千年历史与大事件",         unlock: false, studyRate: 0, unlockGrade: 1 },
      { level: 4, name: "天文学",      icon: "🌌", desc: "星辰观测与星象魔法理论",           unlock: false, studyRate: 0, unlockGrade: 1 },
      { level: 4, name: "飞行课",      icon: "🧹", desc: "扫帚飞行基础与空中操控",           unlock: false, studyRate: 0, unlockGrade: 1 }
    ]
  },
  {
    level: 2,
    name: "高阶选修课程",
    icon: "🔮",
    desc: "三年级以上可选修的进阶课程",
    children: [
      { level: 4, name: "算术占卜",    icon: "🔢", desc: "数字命理与未来推算",               unlock: false, studyRate: 0, unlockGrade: 3 },
      { level: 4, name: "古代魔文",    icon: "𓂀", desc: "远古符文与魔法文字破译",           unlock: false, studyRate: 0, unlockGrade: 3 },
      { level: 4, name: "占卜学",      icon: "🔮", desc: "水晶球、茶叶、手相预言",           unlock: false, studyRate: 0, unlockGrade: 3 },
      { level: 4, name: "保护神奇动物", icon: "🦎", desc: "认识、驯养与保护魔法生物",        unlock: false, studyRate: 0, unlockGrade: 3 },
      {
        level: 4,
        name: "麻瓜研究",
        icon: "🌐",
        desc: "麦克米兰教授主持·九门分科独立学习（限时解锁）",
        unlock: false,
        studyRate: 0,
        unlockGrade: 1,
        hasMuggleStudiesSystem: true,
        children: muggleStudiesSubjects
      }
    ]
  },
  {
    level: 2,
    name: "专精进阶学科",
    icon: "📑",
    desc: "高年级限定的顶尖魔法学科",
    children: [
      { level: 4, name: "幻影移形", icon: "💨", desc: "巫师瞬间移动魔法",      unlock: false, studyRate: 0, unlockGrade: 5 },
      { level: 4, name: "炼金术",   icon: "🥇", desc: "物质转化与贤者之石研究", unlock: false, studyRate: 0, unlockGrade: 6 }
    ]
  }
];

export { getMuggleStudiesEvent, getStudyEvent };

window.courseData = courseData;
window.getStudyEvent = getStudyEvent;
window.getMuggleStudiesEvent = getMuggleStudiesEvent;

import { loadTimeFromSave } from './time-system.js';
import { getYearGrade } from './save-system.js';

export function getCurrentGrade() {
  return getYearGrade();
}

const courseData = [
  {
    level: 2,
    name: "必修核心课程",
    icon: "📖",
    desc: "1~2年级巫师必修基础课程",
    children: [
      { level: 4, name: "变形术", icon: "🔁", desc: "麦格教授教授，物体变形与人体变形", unlock: false, studyRate: 0, unlockGrade: 1 },
      { level: 4, name: "魔咒学", icon: "✨", desc: "各类攻击、防御、生活实用魔咒", unlock: false, studyRate: 0, unlockGrade: 1 },
      { level: 4, name: "魔药学", icon: "⚗️", desc: "药剂调配、魔法草药与材料使用", unlock: false, studyRate: 0, unlockGrade: 1 },
      { level: 4, name: "黑魔法防御术", icon: "🛡️", desc: "抵御黑暗魔法、诅咒与邪恶生物", unlock: false, studyRate: 0, unlockGrade: 1 },
      { level: 4, name: "草药学", icon: "🌿", desc: "培育、识别与使用魔法植物", unlock: false, studyRate: 0, unlockGrade: 1 },
      { level: 4, name: "魔法史", icon: "📜", desc: "巫师世界千年历史与大事件", unlock: false, studyRate: 0, unlockGrade: 1 },
      { level: 4, name: "天文学", icon: "🌌", desc: "星辰观测与星象魔法理论", unlock: false, studyRate: 0, unlockGrade: 1 },
      { level: 4, name: "飞行课", icon: "🧹", desc: "扫帚飞行基础与空中操控", unlock: false, studyRate: 0, unlockGrade: 1 }
    ]
  },
  {
    level: 2,
    name: "高阶选修课程",
    icon: "🔮",
    desc: "三年级以上可选修的进阶课程",
    children: [
      { level: 4, name: "算术占卜", icon: "🔢", desc: "数字命理与未来推算", unlock: false, studyRate: 0, unlockGrade: 3 },
      { level: 4, name: "古代魔文", icon: "𓂀", desc: "远古符文与魔法文字破译", unlock: false, studyRate: 0, unlockGrade: 3 },
      { level: 4, name: "占卜学", icon: "🔮", desc: "水晶球、茶叶、手相预言", unlock: false, studyRate: 0, unlockGrade: 3 },
      { level: 4, name: "保护神奇动物", icon: "🦎", desc: "认识、驯养与保护魔法生物", unlock: false, studyRate: 0, unlockGrade: 3 },
      { level: 4, name: "麻瓜研究", icon: "🌐", desc: "麻瓜文明、科技与常识", unlock: false, studyRate: 0, unlockGrade: 3 }
    ]
  },
  {
    level: 2,
    name: "专精进阶学科",
    icon: "📑",
    desc: "高年级限定的顶尖魔法学科",
    children: [
      { level: 4, name: "幻影移形", icon: "💨", desc: "巫师瞬间移动魔法", unlock: false, studyRate: 0, unlockGrade: 5 },
      { level: 4, name: "炼金术", icon: "🥇", desc: "物质转化与贤者之石研究", unlock: false, studyRate: 0, unlockGrade: 6 }
    ]
  }
];

export function autoUpdateCourseUnlock() {
  const nowGrade = getCurrentGrade();

  function traverse(list) {
    list.forEach(item => {
      if (item.children) {
        traverse(item.children);
      } else {
        item.unlock = nowGrade >= item.unlockGrade;
      }
    });
  }

  traverse(courseData);
}

function studyCourse(course) {
  if (!course.unlock) return `🔒 未解锁：需要 ${course.unlockGrade} 年级`;
  if (course.studyRate >= 100) return "✅ 已完全掌握这门课程";
  
  const add = 5;
  course.studyRate = Math.min(100, course.studyRate + add);

  const data = JSON.parse(localStorage.getItem("hogwarts")) || {};
  if (!data.course) data.course = {};
  
  /* ✅ FIX #1：删除冗余的keyMap，直接用course.name */
  data.course[course.name] = course.studyRate;
  
  localStorage.setItem("hogwarts", JSON.stringify(data));

  if (window.autoUnlockByCourse) window.autoUnlockByCourse();
  return `📚 学习：${course.name}（熟练度+${add}%，共${course.studyRate}%）`;
}

function getStudyEvent(courseName) {
  const events = {
    "变形术": [
      "你成功变形了一个小物体",
      "你掌握了一个新的变形技巧",
      "你尝试将火柴变成针，效果稳定",
      "你对变形咒的控制力更加精准",
      "你理解了变形魔法的基础法则",
      "你成功维持变形状态更久",
      "你纠正了手势错误，变形更流畅",
      "你尝试简单的活体变形初见成效",
      "你的咒语发音更标准，变形更稳定",
      "你能快速切换不同变形目标",
      "你减少了魔力消耗，效率提升",
      "你掌握了逆向变形的安全技巧",
      "你能预判变形失败并及时修正",
      "你对非生命体变形更加熟练",
      "你的变形范围与精度同步提升",
      "你学会快速施法，缩短咒语时长",
      "你能稳定控制变形后的形态",
      "你理解变形与物质结构的关联",
      "你在压力下仍能完成正确变形",
      "你对变形学理论理解更加深刻"
    ],
    "魔咒学": [
      "你成功挥杖释放了咒语",
      "咒语威力小幅提升",
      "你掌握了更标准的魔杖动作",
      "你的咒语稳定性明显增强",
      "你能更快完成咒语吟唱",
      "你减少了魔力浪费，威力更集中",
      "你纠正了发音偏差，咒语更顺畅",
      "你在移动中也能稳定释放咒语",
      "你对咒语的适用范围更加清晰",
      "你学会连续释放基础咒语",
      "你能感知咒语是否成功构建",
      "你的咒语穿透力小幅增强",
      "你掌握咒语的蓄力与释放技巧",
      "你对不同咒语的克制关系更了解",
      "你在干扰环境下仍能成功施法",
      "你能微调咒语效果以适应场景",
      "你的魔杖挥动轨迹更加标准",
      "你对魔咒原理理解更加透彻",
      "你能预判咒语反噬并及时规避",
      "你综合施法能力稳步提升"
    ],
    "魔药学": [
      "你成功识别了药草特性",
      "你对药剂配方更加熟悉",
      "你掌握了更精准的材料切割技巧",
      "你控制火候更加稳定，不易失败",
      "你能正确判断药剂熬制的阶段",
      "你减少了材料浪费，效率提升",
      "你记住更多稀有材料的特性",
      "你搅拌速度与方向更加标准",
      "你能提前预判药剂可能的偏差",
      "你对药剂反应理解更加深刻",
      "你掌握安全添加危险材料的方法",
      "你能微调配方以提升稳定性",
      "你识别药剂瑕疵的能力增强",
      "你熬制药剂的速度小幅提升",
      "你对药剂副作用更加了解",
      "你掌握药剂保存的正确方法",
      "你能修正轻微失败的药剂",
      "你对魔药理论体系更加清晰",
      "你调配药剂的成功率稳步提升",
      "你对魔药药性组合更加熟练"
    ],
    "黑魔法防御术": [
      "你练习了基础防御姿势",
      "你对黑暗魔法抵抗力增强",
      "你掌握更标准的格挡手势",
      "你对诅咒的识别能力增强",
      "你能更快反应应对突袭",
      "你的防御咒稳定性提升",
      "你学会基础解除咒的正确用法",
      "你对黑暗生物弱点更加了解",
      "你在压力下防御更稳定",
      "你减少防御时的魔力消耗",
      "你能预判攻击并提前防御",
      "你对常见黑魔法咒语更了解",
      "你掌握简单驱散邪恶的技巧",
      "你的防御范围与强度同步提升",
      "你能连续维持防御咒语",
      "你在移动中防御更加流畅",
      "你对防御咒原理理解更透彻",
      "你能识别伪装的黑暗魔法痕迹",
      "你面对威胁时心态更稳定",
      "你综合防御能力明显增强"
    ],
    "草药学": [
      "你正确分辨了多种草药",
      "你对植物特性更加了解",
      "你掌握更安全的采摘方法",
      "你能判断草药成熟度与品质",
      "你学会正确保存新鲜草药",
      "你对草药生长环境更加了解",
      "你识别有毒草药的能力增强",
      "你掌握基础培育魔法植物技巧",
      "你能快速区分相似草药",
      "你对草药药性搭配更加熟悉",
      "你减少处理草药时的失误",
      "你理解草药与魔力的共鸣",
      "你能照顾脆弱的稀有魔法植物",
      "你对草药用途记忆更加清晰",
      "你掌握草药干燥与萃取技巧",
      "你识别植物病变的能力增强",
      "你培育植物的存活率提升",
      "你对草药学理论体系更完整",
      "你能快速判断草药适用场景",
      "你对魔法植物认知全面提升"
    ],
    "魔法史": [
      "你记住了一段魔法历史",
      "你对魔法起源更加清晰",
      "你理解了古代巫师的社会结构",
      "你记住了重要魔法法典的来历",
      "你理清了千年战争的时间线",
      "你认识更多历史上的著名巫师",
      "你理解魔法与麻瓜冲突的根源",
      "你记住了魔法物品的发展史",
      "你对学院起源故事更加熟悉",
      "你理清古代魔法体系演变",
      "你记住重要历史事件的因果",
      "你理解魔法戒律形成的原因",
      "你对巫师族群演变更加了解",
      "你记住魔法学校的发展历程",
      "你理清黑暗魔法的历史脉络",
      "你理解古代仪式的意义",
      "你对魔法文化传承更清晰",
      "你记住重要历史人物的贡献",
      "你能串联历史事件形成体系",
      "你对魔法世界全貌认知加深"
    ],
    "天文学": [
      "你完成了星图观测",
      "你对天体运行更加熟悉",
      "你正确识别了多个星座",
      "你掌握观星仪器的使用方法",
      "你理解星辰与魔力的关联",
      "你记住行星运行的基本规律",
      "你能准确判断观测时间点",
      "你对星象魔法理论更了解",
      "你绘制星图的精度提升",
      "你理解月相变化对魔法的影响",
      "你识别特殊星象的能力增强",
      "你掌握观星时的安全注意事项",
      "你对天体命名与传说更熟悉",
      "你能通过星象判断基础预兆",
      "你理解星辰与魔法属性的关系",
      "你观测记录更加规范完整",
      "你对天文学理论体系更清晰",
      "你能独立完成完整星图绘制",
      "你对星空魔力流动更加敏感",
      "你综合观星能力稳步提升"
    ],
    "飞行课": [
      "你稳住了扫帚平衡",
      "你的飞行技巧小幅提升",
      "你掌握更标准的起飞姿势",
      "你在空中转向更加流畅",
      "你能稳定控制扫帚升降",
      "你克服高空紧张，心态更稳",
      "你学会基础空中刹车技巧",
      "你飞行时魔力消耗减少",
      "你能适应不同扫帚的特性",
      "你低空飞行更加精准安全",
      "你掌握编队飞行的基础规则",
      "你应对气流突变的能力增强",
      "你快速上下扫帚更加熟练",
      "你飞行路线规划更加合理",
      "你能保持长时间稳定飞行",
      "你理解扫帚与魔力的共鸣",
      "你紧急避险反应更加迅速",
      "你对飞行安全规则更熟悉",
      "你高速飞行控制力增强",
      "你整体飞行水平明显进步"
    ],
    "算术占卜": [
      "你解开了一段数字预言",
      "你的数理直觉增强",
      "你掌握数字对应的基础含义",
      "你能完成简单命理算式",
      "你对数字周期规律更了解",
      "你推理命理链条更加清晰",
      "你减少计算错误，准确率提升",
      "你理解数字与命运的关联",
      "你快速心算能力小幅增强",
      "你识别命理关键数字更准确",
      "你对占卜算式结构更熟悉",
      "你能推导简单未来趋势",
      "你理解数字魔力的基础理论",
      "你组合算式分析能力增强",
      "你对命理变化节点更敏感",
      "你记录占卜结果更加规范",
      "你修正算式偏差的能力提升",
      "你对算术占卜体系更完整",
      "你预判简单事件走向更准确",
      "你数理占卜能力稳步提升"
    ],
    "古代魔文": [
      "你破译了一段古代铭文",
      "你对魔文共鸣加深",
      "你记住更多基础古代字符",
      "你理解魔文的魔力结构",
      "你发音更标准，共鸣更稳定",
      "你识别残缺铭文的能力增强",
      "你掌握魔文组合的基础规则",
      "你对古代文字历史更了解",
      "你能简单运用魔文激活物品",
      "你减少破译错误，成功率提升",
      "你理解魔文与咒语的关系",
      "你记忆长篇铭文更快更牢",
      "你感知魔文魔力流动更清晰",
      "你翻译古文段落更加流畅",
      "你对不同时代魔文差异更了解",
      "你运用魔文防御简单干扰",
      "你破译速度小幅提升",
      "你对古代魔文文化更熟悉",
      "你组合魔文形成简单效果",
      "你古代魔文水平全面提升"
    ],
    "占卜学": [
      "你隐约看到了预兆",
      "你的感知能力小幅提升",
      "你从水晶球中看到模糊画面",
      "你读懂茶叶形成的简单图案",
      "你对预兆含义理解更准确",
      "你集中精神观想能力增强",
      "你识别梦境预兆的能力提升",
      "你掌握基础手相解读技巧",
      "你对占卜环境要求更熟悉",
      "你减少主观干扰，判断更客观",
      "你感知魔力波动的灵敏度提升",
      "你解读预兆细节更加完整",
      "你对占卜工具共鸣加深",
      "你预判短期小事件更准确",
      "你理解占卜与概率的关系",
      "你保持专注的时间更长",
      "你区分真假预兆的能力增强",
      "你对占卜理论体系更清晰",
      "你综合占卜感知稳步提升",
      "你能给出更完整的占卜解读"
    ],
    "保护神奇动物": [
      "你安抚了一只小动物",
      "你与生物更加亲近",
      "你正确识别一种魔法生物",
      "你掌握接近生物的安全方式",
      "你理解生物的情绪与习性",
      "你喂食生物的技巧更加熟练",
      "你对生物弱点与禁忌更了解",
      "你减少引起生物敌意的行为",
      "你照顾受伤生物能力增强",
      "你识别生物健康状态更准确",
      "你理解生物与魔法的关联",
      "你模仿生物语言更相似",
      "你保护生物的意识更加完整",
      "你应对生物攻击反应更合理",
      "你对生物栖息地更了解",
      "你训练简单指令更有效",
      "你感知生物情绪更敏锐",
      "你对神奇动物知识体系更全",
      "你与魔法生物共鸣加深",
      "你照料与保护能力明显提升"
    ],
    "麻瓜研究": [
      "你理解了一些麻瓜常识",
      "你对麻瓜世界更加了解",
      "你明白麻瓜基本生活方式",
      "你学习麻瓜基础工具用途",
      "你理解麻瓜社会简单规则",
      "你对麻瓜文化习俗更熟悉",
      "你区分麻瓜与魔法的差异",
      "你了解麻瓜基础科学概念",
      "你理解麻瓜交通与通讯方式",
      "你对麻瓜家庭结构更清晰",
      "你学习麻瓜常用语言表达",
      "你明白麻瓜娱乐与节日",
      "你理解麻瓜货币与交易",
      "你对麻瓜历史简单脉络更清",
      "你识别麻瓜常见物品更准确",
      "你理解麻瓜与巫师和平共处",
      "你对麻瓜知识体系更完整",
      "你模仿麻瓜行为更自然",
      "你尊重麻瓜的意识增强",
      "你麻瓜研究认知全面提升"
    ],
    "幻影移形": [
      "你尝试了空间移动",
      "你的集中力小幅提升",
      "你掌握基础站姿与手势",
      "你理解三D法则：目的地、决心、延迟",
      "你减少分裂风险，更安全",
      "你集中精神锁定目标更准",
      "你克服空间眩晕，状态更稳",
      "你控制魔力输出更加均匀",
      "你短距离移形成功率提升",
      "你识别安全移形区域更准确",
      "你应对魔力回流更熟练",
      "你保持移形前后平衡更稳",
      "你理解空间与魔力结构关系",
      "你连续移形疲劳度降低",
      "你预判移形偏差并修正",
      "你在安静环境移形更流畅",
      "你掌握紧急停移的安全方法",
      "你对空间感知更加敏锐",
      "你移形精准度小幅提升",
      "你幻影移形水平稳步增强"
    ],
    "炼金术": [
      "你掌握了基础炼成原理",
      "你的转化知识小幅提升",
      "你理解物质基础结构特性",
      "你掌握简单材料转化技巧",
      "你控制炼成魔力更稳定",
      "你对炼成公式理解更清晰",
      "你识别炼成失败原因更准确",
      "你减少材料消耗，效率提升",
      "你理解贤者之石基础传说",
      "你掌握炼成安全防护方法",
      "你对物质能量转换更了解",
      "你修正炼成偏差能力增强",
      "你记忆炼成符号更加牢固",
      "你感知炼成魔力流动更清",
      "你组合炼成步骤更合理",
      "你对炼金术历史更熟悉",
      "你基础炼成成功率提升",
      "你理解炼成与生命的关联",
      "你控制炼成强度更精准",
      "你炼金术知识全面加深"
    ]
  };
  return events[courseName] ?? ["你专心学习，知识稳步提升"];
}

let currentCourseList = [];
let currentCourseParent = null;

const courseBtnStyle = "width:100%;text-align:left;padding:10px 12px;border:none;border-radius:6px;background:#1d3b3a;color:#e0f7f5;cursor:pointer;box-sizing:border-box;transition:all 0.2s;min-height:120px;";
const courseBtnHover = "background:#2b5654;";

/* ✅ FIX #2：提取重复的按钮创建逻辑 */
function createCourseButton(data, onClickHandler) {
  const btn = document.createElement("button");
  btn.style.cssText = courseBtnStyle;  /* ✅ FIX #3：用 .cssText 而不是直接赋值 */

  const name = document.createElement("div");
  name.style.fontSize = "15px";
  name.innerText = data.name;

  const desc = document.createElement("div");
  desc.style.fontSize = "12px";
  desc.style.color = "#b2dfdb";
  desc.style.marginTop = "4px";
  desc.innerText = data.desc;

  btn.appendChild(name);
  btn.appendChild(desc);

  if (data.tip) {
    const tip = document.createElement("div");
    tip.style.fontSize = "11px";
    tip.style.marginTop = "2px";
    tip.style.color = data.tipColor || "#88f8d8";
    tip.innerText = data.tip;
    btn.appendChild(tip);
  }

  btn.addEventListener("mouseover", () => btn.style.cssText = courseBtnStyle + courseBtnHover);
  btn.addEventListener("mouseout", () => btn.style.cssText = courseBtnStyle);
  btn.addEventListener("click", onClickHandler);

  return btn;
}

/* ✅ FIX #4：提取"返回"按钮创建逻辑 */
function createBackButton(callback) {
  const back = document.createElement("button");
  back.className = "action-btn";
  back.innerText = "← 返回上一层";
  back.style.cssText = "position:sticky;top:0;z-index:999;grid-column:1 / -1;margin-bottom:8px;";
  back.addEventListener("click", callback);
  return back;
}

export function openCoursePanel() {
  loadTimeFromSave();
  autoUpdateCourseUnlock();

  document.getElementById("actionMain").style.display = "none";
  const exploreMain = document.getElementById("exploreMain");
  if (exploreMain) exploreMain.style.display = "none";

  let oldPanel = document.getElementById("courseMain");
  if (oldPanel) oldPanel.remove();

  const courseBox = document.createElement("div");
  courseBox.id = "courseMain";
  courseBox.innerHTML = `<div class="title">🪶 学习课程</div>`;

  const container = document.createElement("div");
  container.id = "course-container";
  container.style.cssText = "max-height:400px;overflow:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;";

  const backBtn = document.createElement("button");
  backBtn.className = "action-btn";
  backBtn.innerText = "← 返回行动";
  backBtn.style.marginTop = "10px";
  backBtn.addEventListener("click", closeCoursePanel);

  const card = document.querySelector("#actionMain")?.closest(".card");
  if (card) {
    card.appendChild(courseBox);
    courseBox.appendChild(container);
    courseBox.appendChild(backBtn);
  }

  currentCourseList = courseData;
  renderCourseRoot();
  loadCourseProgressFromSave();
}

export function closeCoursePanel() {
  const box = document.getElementById("courseMain");
  if (box) box.remove();
  document.getElementById("actionMain").style.display = "block";
}

function renderCourseRoot() {
  const wrap = document.getElementById("course-container");
  if (!wrap) return;
  wrap.innerHTML = "";

  currentCourseList.forEach(item => {
    const btn = createCourseButton(
      { name: `${item.icon} ${item.name}`, desc: item.desc },
      () => {
        currentCourseParent = item;
        renderCourseList();
      }
    );
    wrap.appendChild(btn);
  });
}

function renderCourseList() {
  const wrap = document.getElementById("course-container");
  if (!wrap || !currentCourseParent?.children) return;
  wrap.innerHTML = "";
  
  wrap.appendChild(createBackButton(() => renderCourseRoot()));

  const nowGrade = getCurrentGrade();

  currentCourseParent.children.forEach(item => {
    const isComplete = item.studyRate >= 100;
    const rateText = isComplete ? "【已完全掌握】" : `（${item.studyRate || 0}%）`;

    const btn = createCourseButton(
      {
        name: `${item.icon} ${item.name} ${rateText}`,
        desc: item.desc,
        tip: item.unlock 
          ? `✅ 已解锁｜当前${nowGrade}年级`
          : `🔒 解锁条件：${item.unlockGrade} 年级`,
        tipColor: item.unlock ? "#88f8d8" : "#ff8888"
      },
      () => {
        if (!item.unlock) {
          window.doStudyLog(`❌ 无法学习【${item.name}】：需要 ${item.unlockGrade} 年级`);
          return;
        }
        if (item.studyRate >= 100) {
          window.doStudyLog(`✅ ${item.name} 已完全掌握`);
          return;
        }
        if (window.costAction && !window.costAction()) return;

        const res = studyCourse(item);
        const evtList = getStudyEvent(item.name);
        const evt = evtList[Math.floor(Math.random() * evtList.length)];
        
        if (window.doStudyLog) window.doStudyLog(`${res}｜${evt}`);
        if (window.refreshAll) window.refreshAll();

        if (window.timeSystem?.dailyActionLeft <= 0) {
          closeCoursePanel();
          setTimeout(() => {
            if (window.nextTime) window.nextTime();
            if (window.syncActionUI) window.syncActionUI();
          }, 50);
          return;
        }

        renderCourseList();
      }
    );
    
    /* ✅ FIX #5：上锁课程禁用样式 */
    if (!item.unlock || item.studyRate >= 100) {
      btn.style.opacity = "0.6";
      btn.style.cursor = "not-allowed";
    }

    wrap.appendChild(btn);
  });
}

function loadCourseProgressFromSave() {
  const data = JSON.parse(localStorage.getItem("hogwarts")) || {};
  if (!data.course) return;
  
  function traverse(items) {
    items.forEach(it => {
      if (it.children) traverse(it.children);
      else it.studyRate = data.course[it.name] || 0;
    });
  }
  traverse(courseData);
}

// ======================== 全局挂载 & 导出 ========================
window.openCoursePanel = openCoursePanel;
window.closeCoursePanel = closeCoursePanel;
window.autoUpdateCourseUnlock = autoUpdateCourseUnlock;
window.getCurrentGrade = getCurrentGrade;

export default {
  openCoursePanel,
  closeCoursePanel,
  autoUpdateCourseUnlock,
  getCurrentGrade
};
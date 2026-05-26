/**
 * physics.js
 * 麻瓜学术系 · 物理
 * 教授：塞拉菲娜·穆迪（Serafina Moody）
 * 课程体系：英国 KS3 → GCSE → A-Level（共 70 课，14 章，横跨 7 年级）
 */

import { lessonMap } from './physics-lesson.js';
import { questionBank } from './physics-questionBank.js';
import { registerSubjectData } from '../subject-registry.js';

// ── 元数据 ────────────────────────────────────────────────────
export const subjectMeta = {
  key: "physics",
  name: "物理",
  icon: "⚡",
  professor: "塞拉菲娜·穆迪",
  desc: "力、能量、电——麻瓜修理世界的方式",
  unlockGrade: 3,
  housePointsPerLesson: { O: 6, E: 5, A: 3, P: 1, D: -1, T: -3 }
};

// ── 教学风格常量 ───────────────────────────────────────────────
export const teachingStyle = {
  praiseStyle:    "大声喊「漂亮！就是它！」，有时拍手",
  errorStyle:     "「炸了不过炸也是数据」，立刻分析原因",
  officeHours:    "周三课后，实验室开放",
  signature:      "总有一台麻瓜电器被拆开摆在讲台上",
  prop:           "麻瓜手电筒、拆开的风扇、电池",
  catchphrase:    "炸了不过炸也是数据"
};

// 14章 × 5课 = 70课，贯穿1–7年级
export const syllabus = [
  // ── 第1年·KS3 ────────────────────────────────────────────
  {
    chapter: 1, yearRange: "1年级", phase: "KS3",
    title: "力与运动",
    lessons: [
      { lesson: 1, title: "速度、加速度与运动图像", keyPoints: ["平均速度与瞬时速度的区别", "加速度：速度变化率", "s-t图像与v-t图像的解读", "运动图像的绘制方法"] },
      { lesson: 2, title: "牛顿第一定律：惯性", keyPoints: ["惯性定律的表述", "惯性是物体的固有属性", "质量是惯性大小的量度", "生活中的惯性现象"] },
      { lesson: 3, title: "牛顿第二定律：F=ma", keyPoints: ["力、质量、加速度的关系", "公式 F=ma 的物理意义", "力的单位：牛顿（N）的定义", "单位换算与量纲分析"] },
      { lesson: 4, title: "牛顿第三定律：作用与反作用", keyPoints: ["作用力与反作用力的关系", "成对出现、大小相等、方向相反", "作用在不同物体上", "常见实例分析"] },
      { lesson: 5, title: "重力与自由落体", keyPoints: ["重力的概念与方向", "重力公式 G = mg", "自由落体运动的特点", "飞行扫帚的麻瓜视角解释"] }
    ]
  },
  {
    chapter: 2, yearRange: "1年级", phase: "KS3",
    title: "能量",
    lessons: [
      { lesson: 6, title: "能量的形式与守恒", keyPoints: ["能量的多种形式", "能量守恒定律", "能量转化与转移", "能量单位：焦耳（J）"] },
      { lesson: 7, title: "做功：力与位移的乘积", keyPoints: ["功的定义 W = Fs", "功的正负判断", "不做功的情况", "功与能量变化的关系"] },
      { lesson: 8, title: "功率：能量转化的速率", keyPoints: ["功率的定义 P = W/t", "功率单位：瓦特（W）", "功率与效率的区别", "实际功率与额定功率"] },
      { lesson: 9, title: "机械效率", keyPoints: ["有用功、额外功、总功", "机械效率公式 η = W有用/W总", "影响效率的因素", "提高效率的方法"] },
      { lesson: 10, title: "弹性势能与弹簧", keyPoints: ["弹性形变与塑性形变", "胡克定律 F = kx", "弹性势能公式", "弹簧振子的周期"] }
    ]
  },
  // ── 第2年·KS3 ────────────────────────────────────────────
  {
    chapter: 3, yearRange: "2年级", phase: "KS3",
    title: "波动",
    lessons: [
      { lesson: 11, title: "波的基本属性", keyPoints: ["波的传播与能量传递", "频率、波长、振幅的定义", "波速公式 v = fλ", "横波与纵波的区别"] },
      { lesson: 12, title: "声波：纵波与传播介质", keyPoints: ["声波的产生与传播", "声速与介质的关系", "声音的三要素：音调、响度、音色", "超声波与次声波"] },
      { lesson: 13, title: "光的反射：镜面与漫反射", keyPoints: ["光的反射定律", "镜面反射与漫反射的区别", "平面镜成像特点", "光的可逆性"] },
      { lesson: 14, title: "光的折射：斯涅尔定律", keyPoints: ["光的折射现象", "斯涅尔定律 n₁sinθ₁ = n₂sinθ₂", "折射率的意义", "全反射条件"] },
      { lesson: 15, title: "透镜成像与放大镜", keyPoints: ["凸透镜与凹透镜", "焦点与焦距", "凸透镜成像规律", "放大镜的工作原理"] }
    ]
  },
  {
    chapter: 4, yearRange: "2年级", phase: "KS3",
    title: "电路",
    lessons: [
      { lesson: 16, title: "电路基础", keyPoints: ["电路的组成：电源、导线、开关、用电器", "电流的概念与方向", "电压的作用", "电路的三种状态"] },
      { lesson: 17, title: "欧姆定律及其适用范围", keyPoints: ["欧姆定律 I = U/R", "电阻的定义与单位", "欧姆定律的适用条件", "电阻的影响因素"] },
      { lesson: 18, title: "串联与并联电路的计算", keyPoints: ["串联电路的特点", "并联电路的特点", "等效电阻的计算", "分压与分流原理"] },
      { lesson: 19, title: "电功率与电能消耗", keyPoints: ["电功率公式 P = UI", "电能的计算", "电功与电热的区别", "家庭电路的功率"] },
      { lesson: 20, title: "磁场与电流的关系", keyPoints: ["磁体与磁场", "电流的磁效应（奥斯特实验）", "右手螺旋定则", "电磁铁的原理"] }
    ]
  },
  // ── 第3年·KS3 ────────────────────────────────────────────
  {
    chapter: 5, yearRange: "3年级", phase: "KS3",
    title: "热学",
    lessons: [
      { lesson: 21, title: "温度与热量的区别", keyPoints: ["温度与热量的概念", "热平衡与温度传递", "热力学第零定律", "温标的种类"] },
      { lesson: 22, title: "热传递：传导、对流、辐射", keyPoints: ["热传导的机制", "对流的形成条件", "热辐射的特点", "三种传热方式的应用"] },
      { lesson: 23, title: "比热容：为何海洋比陆地慢热", keyPoints: ["比热容的定义", "比热容的物理意义", "热量计算公式 Q = mcΔT", "水的比热容特点"] },
      { lesson: 24, title: "物态变化与潜热", keyPoints: ["六种物态变化", "潜热的概念", "熔化热与汽化热", "物态变化的能量变化"] },
      { lesson: 25, title: "气体定律：压强、体积、温度", keyPoints: ["波义耳定律", "查理定律", "理想气体状态方程", "气体定律的应用"] }
    ]
  },
  {
    chapter: 6, yearRange: "3年级", phase: "KS3",
    title: "粒子物理入门",
    lessons: [
      { lesson: 26, title: "原子模型的演变历史", keyPoints: ["道尔顿原子论", "汤姆逊葡萄干布丁模型", "卢瑟福核式结构", "玻尔原子模型"] },
      { lesson: 27, title: "放射性：α、β、γ 辐射", keyPoints: ["三种辐射的性质", "辐射的穿透能力", "辐射的危害与防护", "放射性衰变"] },
      { lesson: 28, title: "核裂变与链式反应", keyPoints: ["核裂变的过程", "链式反应的条件", "核反应堆的原理", "核能的利用"] },
      { lesson: 29, title: "核聚变：太阳的能量来源", keyPoints: ["核聚变的条件", "太阳的能量产生机制", "核聚变与核裂变的区别", "可控核聚变的挑战"] },
      { lesson: 30, title: "粒子物理概述：夸克与轻子", keyPoints: ["基本粒子的分类", "夸克的种类", "轻子家族", "标准模型简介"] }
    ]
  },
  // ── 第4年·GCSE ────────────────────────────────────────────
  {
    chapter: 7, yearRange: "4年级", phase: "GCSE",
    title: "力学深化",
    lessons: [
      { lesson: 31, title: "动量与冲量：碰撞分析", keyPoints: ["动量的定义 p = mv", "冲量的概念", "动量守恒定律", "弹性碰撞与非弹性碰撞"] },
      { lesson: 32, title: "圆周运动：向心加速度", keyPoints: ["匀速圆周运动的特点", "向心加速度公式", "向心力的来源", "离心现象"] },
      { lesson: 33, title: "万有引力：行星运动", keyPoints: ["万有引力定律", "万有引力常数", "开普勒定律", "人造卫星的轨道"] },
      { lesson: 34, title: "简谐运动：摆与弹簧", keyPoints: ["简谐运动的特点", "周期与频率", "单摆的周期公式", "弹簧振子的周期"] },
      { lesson: 35, title: "弹性形变与弹性系数", keyPoints: ["弹性限度", "弹性系数的测定", "应力与应变", "弹性势能的计算"] }
    ]
  },
  {
    chapter: 8, yearRange: "4年级", phase: "GCSE",
    title: "电磁学",
    lessons: [
      { lesson: 36, title: "电场概念与电场力", keyPoints: ["电场的定义", "电场强度", "库仑定律", "电场线的性质"] },
      { lesson: 37, title: "电容：储存电荷", keyPoints: ["电容器的结构", "电容的定义", "平行板电容器", "电容的串联与并联"] },
      { lesson: 38, title: "电磁感应：法拉第定律", keyPoints: ["电磁感应现象", "法拉第电磁感应定律", "楞次定律", "右手定则"] },
      { lesson: 39, title: "交流电与发电机", keyPoints: ["交流电的产生", "交流电的频率与周期", "发电机的原理", "交流电与直流电的区别"] },
      { lesson: 40, title: "变压器：能量的高效传输", keyPoints: ["变压器的结构", "变压比公式", "理想变压器", "远距离输电"] }
    ]
  },
  // ── 第5年·GCSE ────────────────────────────────────────────
  {
    chapter: 9, yearRange: "5年级", phase: "GCSE",
    title: "波动深化",
    lessons: [
      { lesson: 41, title: "波的叠加与干涉现象", keyPoints: ["波的叠加原理", "相长干涉与相消干涉", "双缝干涉实验", "干涉条纹的形成"] },
      { lesson: 42, title: "衍射：波绕过障碍物", keyPoints: ["衍射现象", "单缝衍射", "圆孔衍射", "衍射与波长的关系"] },
      { lesson: 43, title: "驻波与共振", keyPoints: ["驻波的形成", "波节与波腹", "共振现象", "共振的应用与危害"] },
      { lesson: 44, title: "多普勒效应：救护车的音调变化", keyPoints: ["多普勒效应的现象", "多普勒效应公式", "声波与光波的多普勒效应", "应用实例"] },
      { lesson: 45, title: "光的波粒二象性", keyPoints: ["光的波动性证据", "光的粒子性证据", "波粒二象性的意义", "量子力学的开端"] }
    ]
  },
  {
    chapter: 10, yearRange: "5年级", phase: "GCSE",
    title: "现代物理",
    lessons: [
      { lesson: 46, title: "光电效应：爱因斯坦的解释", keyPoints: ["光电效应现象", "爱因斯坦的光子理论", "光电效应方程", "光子能量"] },
      { lesson: 47, title: "原子能级与发射光谱", keyPoints: ["原子的能级结构", "能级跃迁", "发射光谱与吸收光谱", "光谱分析"] },
      { lesson: 48, title: "核物理：结合能与质量亏损", keyPoints: ["结合能的概念", "质量亏损", "质能方程 E=mc²", "核反应中的能量变化"] },
      { lesson: 49, title: "基本粒子标准模型概述", keyPoints: ["标准模型的组成", "夸克与轻子", "规范玻色子", "希格斯玻色子"] },
      { lesson: 50, title: "GCSE综合复习", keyPoints: ["力学综合", "电磁学综合", "波动与量子综合", "解题策略"] }
    ]
  },
  // ── 第6年·A-Level ─────────────────────────────────────────
  {
    chapter: 11, yearRange: "6年级", phase: "A-Level",
    title: "力学与场",
    lessons: [
      { lesson: 51, title: "牛顿力学深化：向量分析", keyPoints: ["力的向量表示", "合力的计算", "向量的分解", "斜面上的受力分析"] },
      { lesson: 52, title: "引力场：等势面与场强", keyPoints: ["引力场的概念", "引力场强度", "等势面的性质", "引力势能"] },
      { lesson: 53, title: "电场与磁场的统一", keyPoints: ["电场与磁场的联系", "电磁场的概念", "麦克斯韦的贡献", "电磁波的预言"] },
      { lesson: 54, title: "麦克斯韦方程组的概念", keyPoints: ["四个方程的意义", "电场的高斯定律", "磁场的高斯定律", "法拉第定律与安培定律"] },
      { lesson: 55, title: "狭义相对论：时间膨胀与长度收缩", keyPoints: ["狭义相对论的基本假设", "时间膨胀效应", "长度收缩效应", "洛伦兹变换"] }
    ]
  },
  {
    chapter: 12, yearRange: "6年级", phase: "A-Level",
    title: "量子与核",
    lessons: [
      { lesson: 56, title: "量子力学基础：概率诠释", keyPoints: ["波函数的概念", "概率密度", "测不准原理", "量子力学的哥本哈根诠释"] },
      { lesson: 57, title: "德布罗意波长", keyPoints: ["物质波的概念", "德布罗意关系式", "电子衍射实验", "波粒二象性的统一"] },
      { lesson: 58, title: "薛定谔方程：概念理解", keyPoints: ["薛定谔方程的形式", "波函数的演化", "定态与本征值", "量子态的描述"] },
      { lesson: 59, title: "核稳定性：结合能曲线", keyPoints: ["结合能曲线的形状", "核稳定性的规律", "核聚变与核裂变的能量来源", "铁元素的特殊地位"] },
      { lesson: 60, title: "辐射剂量与防护", keyPoints: ["辐射剂量的单位", "辐射的生物效应", "辐射防护的方法", "放射性安全标准"] }
    ]
  },
  // ── 第7年·A-Level ─────────────────────────────────────────
  {
    chapter: 13, yearRange: "7年级", phase: "A-Level",
    title: "热力学与统计",
    lessons: [
      { lesson: 61, title: "热力学四定律", keyPoints: ["热力学第零定律", "热力学第一定律", "热力学第二定律", "热力学第三定律"] },
      { lesson: 62, title: "熵：无序的度量", keyPoints: ["熵的定义", "熵增原理", "熵与热力学第二定律", "熵的统计意义"] },
      { lesson: 63, title: "统计力学入门：气体的微观解释", keyPoints: ["分子运动论", "理想气体的微观模型", "压强的微观解释", "温度的微观意义"] },
      { lesson: 64, title: "相变的热力学描述", keyPoints: ["相变的特点", "相图的解读", "相变潜热", "临界现象"] },
      { lesson: 65, title: "混沌与非线性系统概念", keyPoints: ["非线性系统的特点", "混沌现象", "蝴蝶效应", "分形与自相似性"] }
    ]
  },
  {
    chapter: 14, yearRange: "7年级", phase: "A-Level",
    title: "前沿物理",
    lessons: [
      { lesson: 66, title: "超导体：零电阻与迈斯纳效应", keyPoints: ["超导现象", "临界温度", "迈斯纳效应", "超导体的应用"] },
      { lesson: 67, title: "半导体物理：p-n结与晶体管", keyPoints: ["半导体的特性", "p型与n型半导体", "p-n结的形成", "晶体管的工作原理"] },
      { lesson: 68, title: "粒子加速器的原理", keyPoints: ["加速器的类型", "加速原理", "粒子碰撞的意义", "大型强子对撞机"] },
      { lesson: 69, title: "宇宙学：大爆炸与宇宙膨胀", keyPoints: ["大爆炸理论", "宇宙膨胀的证据", "宇宙微波背景辐射", "宇宙的演化"] },
      { lesson: 70, title: "A-Level综合模拟", keyPoints: ["力学综合题", "电磁学综合题", "量子与热力学综合", "考场策略与时间分配"] }
    ]
  }
];

// ── 跨学科知识锚点 ─────────────────────────────────────────────
export const crossAnchors = [
  {
    concept: "数轴与温度计",
    linkedSubject: "math",
    linkedLesson: "数轴（第3课）",
    desc: "芬威克讲数轴时，温度计刻度就是最直观的物理模型：0°C是原点，正数向上，负数向下，数轴上每一格对应温度的每一度"
  },
  {
    concept: "蒸汽机与热能转化",
    linkedSubject: "history",
    linkedLesson: "工业革命的开端（第1课）",
    desc: "赫伯特讲瓦特改良蒸汽机时，塞拉菲娜会从热→机械能转化角度补充——同一台蒸汽机，历史课看它改变了社会，物理课看它怎么把热变成力"
  },
  {
    concept: "欧姆定律与方程求解",
    linkedSubject: "math",
    linkedLesson: "方程与解（第21课）",
    desc: "解电路题和解方程完全是同一件事：找未知量（电流/电压/电阻），建立等式（I=U/R），代入求解——数学方法直接迁移到物理计算"
  },
  {
    concept: "燃料燃烧与热能",
    linkedSubject: "chemistry",
    linkedLesson: "燃料及其利用（第26课）",
    desc: "普里姆罗斯讲燃烧热值时，塞拉菲娜会解释化学能→热能的转化过程——化学描述「发生了什么反应」，物理解释「能量去哪里了」"
  },
  {
    concept: "生态系统与能量流动",
    linkedSubject: "biology",
    linkedLesson: "生态系统的组成（第6课）",
    desc: "塔维什讲食物链中能量逐级递减时，塞拉菲娜会补充热力学背景：每次能量传递都有热能散失，这不是浪费而是物理定律"
  }
];

const subjectData = {
  subjectMeta,
  teachingStyle,
  syllabus,
  crossAnchors,
  lessonMap,
  questionBank
};

registerSubjectData(subjectMeta.key, subjectData);
window.subject_physics = subjectData;

/**
 * gesture-data.js
 * 魔咒手势数据库
 *
 * 参考来源：
 *   - 原著文字描述（弗立维教学场景）
 *   - Hogwarts Legacy 官方游戏手势动画
 *   - PlayStation/Nintendo Switch 版体感手势设计
 *   - 魔法世界官方周边手册（Spellbook）
 *
 * 坐标系：100×100，左上角(0,0)，右下角(100,100)
 * nodes：玩家需要按顺序点击的关键节点
 * tolerance：点击允许误差（坐标单位）
 * svgPath：手势轨迹的SVG path d属性（用于预览图）
 * duelTimeLimit：决斗模式限时（毫秒）
 * difficulty：1=基础 2=进阶 3=高阶（影响决斗成功加成系数）
 */

export const gestureData = {

  // ══════════════════════════════════════════
  // 基础光源咒
  // ══════════════════════════════════════════

  lumos: {
    id: "lumos",
    spellId: "lumos",
    nameCn: "荧光闪烁",
    nameEn: "Lumos",
    description: "向上点亮——魔杖从低位向右上轻抬，在顶点收腕，形成一个短促的上扬点触动作。",
    tip: "收腕要干净，不要拖尾——拖尾会让光源闪烁不稳定。",
    difficulty: 1,
    duelTimeLimit: null,
    nodes: [
      { id: 1, x: 30, y: 80, label: "低位起点" },
      { id: 2, x: 55, y: 45, label: "右上扬起" },
      { id: 3, x: 65, y: 25, label: "顶点收腕" },
    ],
    svgPath: "M 30 80 Q 45 55 55 45 Q 60 32 65 25",
    arrowAt: 2,
    color: "#f8e870",
  },

  nox: {
    id: "nox",
    spellId: "nox",
    nameCn: "诺克斯",
    nameEn: "Nox",
    description: "向下熄灭——与荧光闪烁相反，从高位向左下轻压，在低点轻扣腕部。",
    tip: "是荧光闪烁的镜像动作，学会一个就能推算另一个。",
    difficulty: 1,
    duelTimeLimit: null,
    nodes: [
      { id: 1, x: 65, y: 25, label: "高位起点" },
      { id: 2, x: 50, y: 55, label: "左下压落" },
      { id: 3, x: 35, y: 75, label: "低点扣腕" },
    ],
    svgPath: "M 65 25 Q 56 42 50 55 Q 42 66 35 75",
    arrowAt: 2,
    color: "#8899cc",
  },

  // ══════════════════════════════════════════
  // 悬浮与召唤
  // ══════════════════════════════════════════

  wingardiumLeviosa: {
    id: "wingardiumLeviosa",
    spellId: "wingardiumLeviosa",
    nameCn: "羽加迪姆·勒维奥萨",
    nameEn: "Wingardium Leviosa",
    description: "扬弧——魔杖从左下起，向右上画出一段弧线，在最高点轻转腕部，最后向右下方收势锁定。弗立维强调：腕部旋转是「扬」的核心，不转腕就没有悬浮力。",
    tip: "「扬」字诀：弧线要流畅，腕部旋转不能省，收势必须锁定——三步缺一不可。",
    difficulty: 1,
    duelTimeLimit: 4500,
    nodes: [
      { id: 1, x: 18, y: 78, label: "左下：低位持杖" },
      { id: 2, x: 42, y: 38, label: "右上：扬弧中段" },
      { id: 3, x: 68, y: 18, label: "顶点：腕部轻转" },
      { id: 4, x: 82, y: 38, label: "收势：右下锁定" },
    ],
    svgPath: "M 18 78 Q 28 52 42 38 Q 56 22 68 18 Q 76 18 82 38",
    arrowAt: 3,
    color: "#a8d8f8",
  },

  accio: {
    id: "accio",
    spellId: "accio",
    nameCn: "飞来咒",
    nameEn: "Accio",
    description: "向内拉引——魔杖从外侧向施法者方向画出一道弧线，末端有一个向内勾的收尾动作，象征将目标「拉」向自己。",
    tip: "末端的内勾动作是召唤力的来源——不勾，物体方向会偏。",
    difficulty: 1,
    duelTimeLimit: 4000,
    nodes: [
      { id: 1, x: 78, y: 28, label: "外侧起点" },
      { id: 2, x: 55, y: 48, label: "弧线内收" },
      { id: 3, x: 35, y: 62, label: "向内引导" },
      { id: 4, x: 25, y: 72, label: "内勾收尾" },
    ],
    svgPath: "M 78 28 Q 65 38 55 48 Q 44 56 35 62 Q 28 68 25 72",
    arrowAt: 3,
    color: "#f8c870",
  },

  // ══════════════════════════════════════════
  // 开锁与封锁
  // ══════════════════════════════════════════

  alohomora: {
    id: "alohomora",
    spellId: "alohomora",
    nameCn: "阿拉霍洞开",
    nameEn: "Alohomora",
    description: "逆时针螺旋——魔杖从中心出发，向外画一个小的逆时针弧，然后向上顺势点出，象征拨开锁芯。Hogwarts Legacy中为典型的S形变体。",
    tip: "逆时针方向很重要——顺时针是速速禁锢的方向，两者不能搞混。",
    difficulty: 1,
    duelTimeLimit: 3500,
    nodes: [
      { id: 1, x: 50, y: 65, label: "中心起点" },
      { id: 2, x: 30, y: 50, label: "逆时针左弧" },
      { id: 3, x: 45, y: 35, label: "上弧转折" },
      { id: 4, x: 65, y: 28, label: "右上点出" },
    ],
    svgPath: "M 50 65 Q 32 58 30 50 Q 28 40 45 35 Q 56 30 65 28",
    arrowAt: 3,
    color: "#c8f0a8",
  },

  colloportus: {
    id: "colloportus",
    spellId: "colloportus",
    nameCn: "速速禁锢",
    nameEn: "Colloportus",
    description: "顺时针封压——与阿拉霍洞开镜像，顺时针弧后向下压定，象征将锁芯压入锁定状态。",
    tip: "和阿拉霍洞开是完全的镜像关系——方向相反，一开一关。",
    difficulty: 1,
    duelTimeLimit: 3500,
    nodes: [
      { id: 1, x: 50, y: 35, label: "中心起点" },
      { id: 2, x: 70, y: 50, label: "顺时针右弧" },
      { id: 3, x: 55, y: 65, label: "下弧转折" },
      { id: 4, x: 35, y: 72, label: "左下压定" },
    ],
    svgPath: "M 50 35 Q 68 42 70 50 Q 72 60 55 65 Q 44 70 35 72",
    arrowAt: 3,
    color: "#e0a8f8",
  },

  // ══════════════════════════════════════════
  // 防护与对抗
  // ══════════════════════════════════════════

  protego: {
    id: "protego",
    spellId: "protego",
    nameCn: "盔甲护身",
    nameEn: "Protego",
    description: "横挡——魔杖从左侧起，快速向右横扫，在终点骤然锁腕，形成一道水平防护线。Hogwarts Legacy中护盾横扫后有一个向前推出的收势。",
    tip: "横扫必须果断——犹豫会导致防护盾面积缩小。收腕必须有「顿」感，不能软。",
    difficulty: 1,
    duelTimeLimit: 2500,
    nodes: [
      { id: 1, x: 12, y: 50, label: "左侧起点" },
      { id: 2, x: 40, y: 48, label: "横向中段" },
      { id: 3, x: 68, y: 50, label: "右侧加速" },
      { id: 4, x: 88, y: 50, label: "终点锁腕" },
    ],
    svgPath: "M 12 50 L 40 48 L 68 50 L 88 50",
    arrowAt: 3,
    color: "#80c8f8",
  },

  expelliarmus: {
    id: "expelliarmus",
    spellId: "expelliarmus",
    nameCn: "除你武器",
    nameEn: "Expelliarmus",
    description: "斜斩下压——从右上方向左下快速斜斩，末端有一个向外弹出的小翻腕，象征将对方武器击飞。Hogwarts Legacy中为典型的斜向下挥动。",
    tip: "斜斩的角度约45°——太平会变成横扫盾，太竖会变成下压咒。翻腕方向决定了武器飞出的方向。",
    difficulty: 2,
    duelTimeLimit: 3000,
    nodes: [
      { id: 1, x: 75, y: 18, label: "右上起点" },
      { id: 2, x: 55, y: 42, label: "斜斩中段" },
      { id: 3, x: 35, y: 62, label: "加速斜压" },
      { id: 4, x: 20, y: 75, label: "左下翻腕" },
    ],
    svgPath: "M 75 18 Q 64 30 55 42 Q 44 53 35 62 Q 26 69 20 75",
    arrowAt: 3,
    color: "#f87878",
  },

  stupefy: {
    id: "stupefy",
    spellId: "stupefy",
    nameCn: "昏昏倒地",
    nameEn: "Stupefy",
    description: "直刺前推——魔杖从腰侧直线向前刺出，末端有一个向上微翘的收势，象征将魔力集中向前爆发射出。决斗中最常用的攻击手势之一。",
    tip: "速度是关键——慢速的昏昏倒地威力减半。刺出时全程保持直线，不要画弧。",
    difficulty: 2,
    duelTimeLimit: 2800,
    nodes: [
      { id: 1, x: 20, y: 60, label: "腰侧蓄力" },
      { id: 2, x: 45, y: 52, label: "向前加速" },
      { id: 3, x: 70, y: 46, label: "直线刺出" },
      { id: 4, x: 85, y: 40, label: "微翘收势" },
    ],
    svgPath: "M 20 60 L 45 52 L 70 46 Q 78 43 85 40",
    arrowAt: 3,
    color: "#f87830",
  },

  // ══════════════════════════════════════════
  // 清洁与修复
  // ══════════════════════════════════════════

  reparo: {
    id: "reparo",
    spellId: "reparo",
    nameCn: "修复如初",
    nameEn: "Reparo",
    description: "向内聚合——双点对中，魔杖先点向左，再向右，最后两点在中央汇聚收束，象征将碎片拼合归位。",
    tip: "两点对称要准确——左右偏差会导致修复结果歪斜。",
    difficulty: 1,
    duelTimeLimit: null,
    nodes: [
      { id: 1, x: 22, y: 50, label: "左侧点" },
      { id: 2, x: 50, y: 50, label: "中心汇聚" },
      { id: 3, x: 78, y: 50, label: "右侧点" },
      { id: 4, x: 50, y: 50, label: "中心收束" },
    ],
    svgPath: "M 22 50 L 50 50 L 78 50 L 50 50",
    arrowAt: 1,
    color: "#a8f0c8",
  },

  scourgify: {
    id: "scourgify",
    spellId: "scourgify",
    nameCn: "清理一新",
    nameEn: "Scourgify",
    description: "扫除弧——从左到右画一个向上凸起的弧线，末端轻扫收腕，象征将污渍一扫而光。",
    tip: "弧线凸起方向向上——向下凸起会变成旋风扫净的轨迹。",
    difficulty: 1,
    duelTimeLimit: null,
    nodes: [
      { id: 1, x: 15, y: 65, label: "左侧起扫" },
      { id: 2, x: 40, y: 35, label: "上凸弧顶" },
      { id: 3, x: 65, y: 35, label: "弧线右段" },
      { id: 4, x: 85, y: 62, label: "收腕扫尾" },
    ],
    svgPath: "M 15 65 Q 28 30 40 35 Q 53 38 65 35 Q 76 38 85 62",
    arrowAt: 3,
    color: "#c8f8e8",
  },

  // ══════════════════════════════════════════
  // 体积变形
  // ══════════════════════════════════════════

  engorgio: {
    id: "engorgio",
    spellId: "engorgio",
    nameCn: "放大咒",
    nameEn: "Engorgio",
    description: "向外扩张——从中心向外画两段向外辐射的弧，象征目标体积向外膨胀扩大。",
    tip: "两段弧的方向对称——不对称会导致目标向一侧扩大。",
    difficulty: 2,
    duelTimeLimit: 3500,
    nodes: [
      { id: 1, x: 50, y: 50, label: "中心起点" },
      { id: 2, x: 22, y: 28, label: "左上扩张" },
      { id: 3, x: 50, y: 50, label: "回到中心" },
      { id: 4, x: 78, y: 72, label: "右下扩张" },
    ],
    svgPath: "M 50 50 Q 34 36 22 28 M 50 50 Q 65 62 78 72",
    arrowAt: 1,
    color: "#f8d498",
  },

  reducio: {
    id: "reducio",
    spellId: "reducio",
    nameCn: "速速缩小",
    nameEn: "Reducio",
    description: "向内收缩——从外侧两点向中心画弧汇聚，象征目标体积从外向内压缩。是放大咒的镜像手势。",
    tip: "和放大咒方向完全相反——从外向内，而不是从内向外。",
    difficulty: 2,
    duelTimeLimit: 3500,
    nodes: [
      { id: 1, x: 22, y: 28, label: "左上起点" },
      { id: 2, x: 50, y: 50, label: "向中心收" },
      { id: 3, x: 78, y: 72, label: "右下起点" },
      { id: 4, x: 50, y: 50, label: "中心汇聚" },
    ],
    svgPath: "M 22 28 Q 36 40 50 50 M 78 72 Q 65 60 50 50",
    arrowAt: 1,
    color: "#b8c8f8",
  },

  // ══════════════════════════════════════════
  // 声音控制
  // ══════════════════════════════════════════

  sonorus: {
    id: "sonorus",
    spellId: "sonorus",
    nameCn: "声音洪亮",
    nameEn: "Sonorus",
    description: "向外扩散弧——从中心向外画一个完整的扩散弧，象征声音向四面八方放大传播。",
    tip: "扩散弧要流畅，停顿会让音量出现断层。",
    difficulty: 1,
    duelTimeLimit: null,
    nodes: [
      { id: 1, x: 50, y: 55, label: "中心起点" },
      { id: 2, x: 25, y: 38, label: "左上扩散" },
      { id: 3, x: 50, y: 22, label: "正上顶点" },
      { id: 4, x: 75, y: 38, label: "右上扩散" },
    ],
    svgPath: "M 50 55 Q 32 44 25 38 Q 36 26 50 22 Q 64 26 75 38",
    arrowAt: 3,
    color: "#f8d870",
  },

  quietus: {
    id: "quietus",
    spellId: "quietus",
    nameCn: "悄声细语",
    nameEn: "Quietus",
    description: "向内收束弧——与声音洪亮相反，从外向内画收束弧，象征将声音收拢压低。",
    tip: "收束弧末端要轻——重压会变成压制咒的手势。",
    difficulty: 1,
    duelTimeLimit: null,
    nodes: [
      { id: 1, x: 25, y: 38, label: "左上起点" },
      { id: 2, x: 50, y: 22, label: "正上汇聚" },
      { id: 3, x: 75, y: 38, label: "右上收" },
      { id: 4, x: 50, y: 55, label: "中心压低" },
    ],
    svgPath: "M 25 38 Q 36 26 50 22 Q 64 26 75 38 Q 64 48 50 55",
    arrowAt: 3,
    color: "#9898c8",
  },

  // ══════════════════════════════════════════
  // 水与清洁
  // ══════════════════════════════════════════

  aguamenti: {
    id: "aguamenti",
    spellId: "aguamenti",
    nameCn: "清水如泉",
    nameEn: "Aguamenti",
    description: "波浪流出——魔杖从左侧起，画出一段向右流动的波浪线，末端向下流落，象征水流从魔杖末端涌出。",
    tip: "波浪要有节律，急切的直线会让水流变成喷射而不是稳定涌出。",
    difficulty: 1,
    duelTimeLimit: null,
    nodes: [
      { id: 1, x: 15, y: 45, label: "左侧起点" },
      { id: 2, x: 35, y: 35, label: "上波峰" },
      { id: 3, x: 55, y: 55, label: "下波谷" },
      { id: 4, x: 75, y: 42, label: "右段波峰" },
      { id: 5, x: 85, y: 68, label: "末端流落" },
    ],
    svgPath: "M 15 45 Q 25 28 35 35 Q 46 46 55 55 Q 66 38 75 42 Q 82 46 85 68",
    arrowAt: 4,
    color: "#78c8f8",
  },

  impervius: {
    id: "impervius",
    spellId: "impervius",
    nameCn: "防水防湿",
    nameEn: "Impervius",
    description: "覆盖下压——魔杖从上方向下画一个覆盖弧，末端向目标物体轻压，象征在目标表面附加防水层。",
    tip: "覆盖弧要完整——覆盖不完整会导致目标只有部分区域防水。",
    difficulty: 1,
    duelTimeLimit: null,
    nodes: [
      { id: 1, x: 25, y: 28, label: "左上起点" },
      { id: 2, x: 50, y: 18, label: "上方顶弧" },
      { id: 3, x: 75, y: 28, label: "右上弧段" },
      { id: 4, x: 50, y: 65, label: "中心下压" },
    ],
    svgPath: "M 25 28 Q 38 16 50 18 Q 62 16 75 28 Q 65 48 50 65",
    arrowAt: 3,
    color: "#88d8f8",
  },

  // ══════════════════════════════════════════
  // 束缚与解除
  // ══════════════════════════════════════════

  relashio: {
    id: "relashio",
    spellId: "relashio",
    nameCn: "力松劲泄",
    nameEn: "Relashio",
    description: "弹开甩出——魔杖从紧握姿势向外快速甩出一道弧线，末端有一个爆发性的翻腕，象征强制松开抓握。",
    tip: "末端翻腕要有爆发感——缓慢的翻腕只能让对方放松，不能强制松开。",
    difficulty: 2,
    duelTimeLimit: 3000,
    nodes: [
      { id: 1, x: 35, y: 62, label: "紧握蓄力" },
      { id: 2, x: 55, y: 45, label: "向外甩弧" },
      { id: 3, x: 75, y: 32, label: "加速外展" },
      { id: 4, x: 85, y: 22, label: "爆发翻腕" },
    ],
    svgPath: "M 35 62 Q 46 52 55 45 Q 66 37 75 32 Q 81 26 85 22",
    arrowAt: 3,
    color: "#f8a850",
  },

  diffindo: {
    id: "diffindo",
    spellId: "diffindo",
    nameCn: "切割咒",
    nameEn: "Diffindo",
    description: "垂直下切——从上方垂直向下斩出一道直线，末端骤停，象征用魔力切断目标。Hogwarts Legacy中为典型的竖向下劈动作。",
    tip: "必须是垂直线——斜切会导致切割方向偏转，结果不可控。",
    difficulty: 2,
    duelTimeLimit: 3000,
    nodes: [
      { id: 1, x: 50, y: 15, label: "正上起点" },
      { id: 2, x: 50, y: 40, label: "垂直中段" },
      { id: 3, x: 50, y: 65, label: "加速下切" },
      { id: 4, x: 50, y: 82, label: "骤停收势" },
    ],
    svgPath: "M 50 15 L 50 40 L 50 65 L 50 82",
    arrowAt: 3,
    color: "#f8f870",
  },

  // ══════════════════════════════════════════
  // 高阶攻防（决斗专用）
  // ══════════════════════════════════════════

  bombarda: {
    id: "bombarda",
    spellId: "bombarda",
    nameCn: "爆炸咒",
    nameEn: "Bombarda",
    description: "向外爆发圆——从中心向外画一个完整的圆圈，末端向外爆发甩出，象征魔力向四周爆炸性扩散。Hogwarts Legacy中为典型的圆形手势。",
    tip: "圆圈要闭合——不闭合的爆炸咒会向缺口方向单向爆炸，伤及施法者。",
    difficulty: 3,
    duelTimeLimit: 4000,
    nodes: [
      { id: 1, x: 50, y: 30, label: "正上起点" },
      { id: 2, x: 75, y: 50, label: "右侧弧段" },
      { id: 3, x: 50, y: 70, label: "正下弧段" },
      { id: 4, x: 25, y: 50, label: "左侧弧段" },
      { id: 5, x: 50, y: 30, label: "闭合顶点" },
    ],
    svgPath: "M 50 30 Q 75 30 75 50 Q 75 70 50 70 Q 25 70 25 50 Q 25 30 50 30",
    arrowAt: 4,
    color: "#f87840",
  },

  depulso: {
    id: "depulso",
    spellId: "depulso",
    nameCn: "击退咒",
    nameEn: "Depulso",
    description: "向前推压——魔杖从身侧快速向前直推，末端有一个向下的压势，象征将目标向前击飞。",
    tip: "向前推的力道决定击退距离——在决斗中这个咒语用于拉开与对手的距离。",
    difficulty: 2,
    duelTimeLimit: 3000,
    nodes: [
      { id: 1, x: 20, y: 55, label: "身侧蓄力" },
      { id: 2, x: 50, y: 50, label: "向前推出" },
      { id: 3, x: 75, y: 48, label: "前推加速" },
      { id: 4, x: 85, y: 60, label: "末端下压" },
    ],
    svgPath: "M 20 55 L 50 50 L 75 48 Q 82 52 85 60",
    arrowAt: 3,
    color: "#c888f8",
  },

  glacius: {
    id: "glacius",
    spellId: "glacius",
    nameCn: "冰冻咒",
    nameEn: "Glacius",
    description: "下压冰封——从上方向下画一道下压弧，末端向外展开，象征冰层从上向下覆盖冻结目标。",
    tip: "末端展开要宽——窄的收势只会冻住目标的一部分。",
    difficulty: 2,
    duelTimeLimit: 3500,
    nodes: [
      { id: 1, x: 50, y: 20, label: "正上起点" },
      { id: 2, x: 50, y: 45, label: "垂直下压" },
      { id: 3, x: 30, y: 65, label: "左展" },
      { id: 4, x: 70, y: 65, label: "右展" },
    ],
    svgPath: "M 50 20 L 50 45 Q 38 58 30 65 M 50 45 Q 62 58 70 65",
    arrowAt: 2,
    color: "#a8e8f8",
  },

  incendio: {
    id: "incendio",
    spellId: "incendio",
    nameCn: "燃烧咒",
    nameEn: "Incendio",
    description: "向上爆燃弧——魔杖从下方向右上快速甩出一道弧线，末端向上翻腕，象征火焰从下向上喷发燃起。",
    tip: "上翻腕决定火焰高度——翻腕越高，火柱越高。决斗中翻腕过高会让火焰越过目标。",
    difficulty: 2,
    duelTimeLimit: 3200,
    nodes: [
      { id: 1, x: 25, y: 78, label: "低位起点" },
      { id: 2, x: 45, y: 55, label: "右上甩弧" },
      { id: 3, x: 65, y: 35, label: "加速上扬" },
      { id: 4, x: 72, y: 18, label: "上翻腕" },
    ],
    svgPath: "M 25 78 Q 36 64 45 55 Q 56 43 65 35 Q 69 25 72 18",
    arrowAt: 3,
    color: "#f85820",
  },

  arresto: {
    id: "arresto",
    spellId: "arresto",
    nameCn: "停止咒",
    nameEn: "Arresto Momentum",
    description: "向下拦截压——从右上向左下斜压，末端有一个向外的横挡动作，象征拦截并减缓目标的动量。",
    tip: "斜压方向要对准目标运动的反方向——顺着目标运动方向压会失效。",
    difficulty: 3,
    duelTimeLimit: 3000,
    nodes: [
      { id: 1, x: 72, y: 22, label: "右上起点" },
      { id: 2, x: 52, y: 45, label: "斜压中段" },
      { id: 3, x: 35, y: 62, label: "向左下压" },
      { id: 4, x: 20, y: 55, label: "横挡收势" },
    ],
    svgPath: "M 72 22 Q 61 34 52 45 Q 42 55 35 62 Q 26 60 20 55",
    arrowAt: 3,
    color: "#88a8f8",
  },
};

// ── 工具函数 ────────────────────────────────────────────────

/** 按咒语ID查找手势数据 */
export function getGestureBySpellId(spellId) {
  return Object.values(gestureData).find(g => g.spellId === spellId) || null;
}

/** 按手势ID查找手势数据 */
export function getGestureById(gestureId) {
  return gestureData[gestureId] || null;
}

/** 获取所有决斗可用手势（有duelTimeLimit的） */
export function getDuelGestures() {
  return Object.values(gestureData).filter(g => g.duelTimeLimit !== null);
}

/** 获取指定难度的手势列表 */
export function getGesturesByDifficulty(level) {
  return Object.values(gestureData).filter(g => g.difficulty === level);
}

window.gestureData = gestureData;
window.getGestureBySpellId = getGestureBySpellId;
window.getGestureById = getGestureById;

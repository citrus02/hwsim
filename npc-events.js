import { getSave, setSave, addLog } from './save-system.js';

const HOUSE_MAP = {
  "格兰芬多": "gryffindor",
  "斯莱特林": "slytherin",
  "拉文克劳": "ravenclaw",
  "赫奇帕奇": "hufflepuff",
};

const CLASS_KEYWORDS = ['课上', '课堂', '考试', '作业', '训练', '加练', '教授', '课', '课时', '课程'];

const NPC_EVENTS = {
  gryffindor: {
    school: [
      { text: "哈利·波特在飞行课上展现了惊人的天赋", points: 5 },
      { text: "李·乔丹在魔药课上偷偷扔了个粪弹", points: -3 },
      { text: "金妮·韦斯莱在魔咒课上施出了完美的蝙蝠魔咒", points: 4 },
      { text: "西莫·斐尼甘的魔药又炸了", points: -2 },
      { text: "赫敏·格兰杰在图书馆完成了额外的论文", points: 5 },
      { text: "纳威·隆巴顿在草药课上成功 repotted 一株毒触手", points: 3 },
      { text: "李·乔丹在魁地奇比赛中对斯莱特林球员出言不逊", points: -3 },
      { text: "珀西·韦斯莱扣了在走廊奔跑的低年级学生分", points: 2 },
      { text: "金妮·韦斯莱的蝙蝠精咒让全班惊叹", points: 4 },
      { text: "西莫·斐尼甘终于成功施展了悬浮咒", points: 2 },
      { text: "迪安·托马斯替西莫修补了炸裂的坩埚", points: 2 },
      { text: "赫敏·格兰杰帮助纳威完成了变形课作业", points: 3 },
      { text: "纳威·隆巴顿忘带隐形衣被罚留堂", points: -2 },
      { text: "罗恩·韦斯莱在魔药课上偷偷加了太多豪猪刺", points: -3 },
      { text: "赫敏·格兰杰在课堂上纠正了教科书的错误", points: 5 },
      { text: "纳威·隆巴顿在黑魔法防御课上成功施展了缴械咒", points: 4 },
      { text: "金妮·韦斯莱在魁地奇训练中打出了漂亮的进球", points: 4 },
      { text: "格兰芬多学生在有求必应屋秘密练习防御术", points: 5 },
      { text: "纳威·隆巴顿在温室里成功培育了曼德拉草", points: 4 },
      { text: "西莫·斐尼甘终于熬出了一锅合格的缩骨药", points: 3 },
      { text: "金妮·韦斯莱用精妙的咒语击退了走廊里的博格特", points: 4 },
    ],
    holiday: [
      { text: "罗恩·韦斯莱在下棋比赛中获胜", points: 3 },
      { text: "纳威·隆巴顿鼓起勇气站了出来", points: 10 },
      { text: "弗雷德和乔治·韦斯莱又在走廊里放臭气弹", points: -5 },
      { text: "珀西·韦斯莱认真完成了级长巡逻", points: 2 },
      { text: "迪安·托马斯的画作被麦格教授表扬", points: 2 },
      { text: "格兰芬多魁地奇球队加练了一整晚", points: 5 },
      { text: "弗雷德和乔治·韦斯莱把走廊变成了沼泽", points: -10 },
      { text: "罗恩·韦斯莱用巫师棋赢了拉文克劳的选手", points: 3 },
      { text: "格兰芬多学生在禁林边缘发现了独角兽的踪迹", points: 3 },
      { text: "哈利·波特深夜在走廊被费尔奇抓住", points: -5 },
      { text: "弗雷德·韦斯莱把斯内普的办公室门涂成了粉红色", points: -8 },
      { text: "格兰芬多学生在公共休息室举办了一场即兴派对", points: 2 },
      { text: "金妮·韦斯莱替哥哥们向麦格教授求情", points: 2 },
      { text: "李·乔丹偷偷在乌姆里奇的办公室放了嗷嗷叫的吼叫信", points: -5 },
      { text: "珀西·韦斯莱写了一封措辞严厉的告密信", points: -3 },
      { text: "西莫·斐尼甘和迪安·托马斯就魁地奇球队吵了一架", points: -2 },
      { text: "格兰芬多一年级新生勇敢地面对了皮皮鬼的恶作剧", points: 3 },
      { text: "弗雷德和乔治发明了新的笑话产品并在走廊试卖", points: -4 },
      { text: "罗恩·韦斯莱帮海格喂了一次炸尾螺", points: 2 },
      { text: "哈利·波特在走廊里阻止了一场低年级学生的争执", points: 3 },
      { text: "李·乔丹在早餐时表演了一段滑稽的模仿秀", points: 1 },
      { text: "赫敏·格兰杰组织了家养小精灵权益促进会的集会", points: 3 },
      { text: "珀西·韦斯莱因过于严厉被低年级学生投诉", points: -2 },
      { text: "弗雷德和乔治把斯莱特林的队徽变成了蝴蝶", points: -6 },
      { text: "迪安·托马斯为魁地奇球队设计了新的海报", points: 2 },
      { text: "格兰芬多学生在万圣节盛宴上大吃大喝", points: 1 },
      { text: "罗恩·韦斯莱在走廊里被皮皮鬼泼了一身水", points: -1 },
      { text: "哈利·波特主动帮迷路的一年级新生找到教室", points: 2 },
      { text: "格兰芬多学生集体在公共休息室为魁地奇比赛加油", points: 2 },
    ],
  },
  slytherin: {
    school: [
      { text: "德拉科·马尔福在魔药课上表现出色", points: 5 },
      { text: "斯内普教授又找借口给斯莱特林加分", points: 4 },
      { text: "潘西·帕金森在草药课上回答了问题", points: 2 },
      { text: "布雷司·沙比尼完成了一篇出色的论文", points: 3 },
      { text: "米尔森在变形课上成功变形了一只甲虫", points: 2 },
      { text: "斯内普教授无理由地扣了格兰芬多的分", points: 3 },
      { text: "克拉布在魔药课上偷吃了材料", points: -3 },
      { text: "高尔在黑魔法防御课上打瞌睡被罚站", points: -2 },
      { text: "布雷司·沙比尼在图书馆找到了一本珍稀的魔药典籍", points: 4 },
      { text: "斯莱特林学生在地牢里偷偷熬制违禁魔药", points: -5 },
      { text: "马尔福向斯内普告密了邓布利多军的集会", points: 3 },
      { text: "斯内普教授表扬了斯莱特林学生的课堂表现", points: 4 },
      { text: "潘西·帕金森在变形课上成功施展了消失咒", points: 3 },
      { text: "斯内普教授为斯莱特林学生额外开设了魔药辅导", points: 4 },
      { text: "斯莱特林学生偷偷在格兰芬多队服上施了瘙痒咒", points: -5 },
      { text: "德拉科·马尔福在魔药考试中获得了全班最高分", points: 5 },
      { text: "潘西·帕金森在飞行课上展现了不错的操控技巧", points: 2 },
      { text: "高尔在魔药课上终于没有打翻坩埚", points: 1 },
      { text: "布雷司·沙比尼完成了一篇关于黑魔法防御的深度论文", points: 4 },
      { text: "布雷司·沙比尼在草药课上成功处理了触手藤", points: 3 },
      { text: "马尔福在黑魔法防御课上施展了完美的蛇语咒", points: 4 },
      { text: "斯莱特林学生在图书馆安静地完成了小组作业", points: 2 },
    ],
    holiday: [
      { text: "克拉布和高尔在走廊里欺负低年级学生", points: -3 },
      { text: "斯莱特林魁地奇球队训练时违规使用犯规战术", points: -4 },
      { text: "马尔福向费尔奇告发了走廊里的学生", points: 2 },
      { text: "马库斯·弗林特在比赛中犯规被罚", points: -5 },
      { text: "斯莱特林公共休息室举办了一场优雅的茶会", points: 3 },
      { text: "德拉科·马尔福在走廊里嘲笑纳威·隆巴顿", points: -2 },
      { text: "潘西·帕金森组织了一场斯莱特林内部舞会", points: 2 },
      { text: "马库斯·弗林特在训练中撞伤了队友", points: -4 },
      { text: "斯莱特林级长在走廊里公正地处理了一起纠纷", points: 2 },
      { text: "德拉科·马尔福在魁地奇比赛中买通了裁判", points: -6 },
      { text: "克拉布和高尔在食堂抢走了赫奇帕奇学生的甜点", points: -3 },
      { text: "斯莱特林学生在黑湖边发现了一种稀有的水生植物", points: 3 },
      { text: "布雷司·沙比尼在巫师棋比赛中击败了拉文克劳选手", points: 3 },
      { text: "斯莱特林魁地奇球队更换了最新的光轮扫帚", points: 2 },
      { text: "马尔福在走廊里被皮皮鬼浇了一桶冷水", points: -1 },
      { text: "高尔终于学会了正确的魔杖握法", points: 1 },
      { text: "德拉科·马尔福在大礼堂炫耀了他新买的鹰马", points: -2 },
      { text: "斯莱特林学生在地牢里举办了一场秘密的决斗俱乐部", points: -3 },
      { text: "潘西·帕金森在走廊里散布了关于格兰芬多的谣言", points: -4 },
      { text: "斯莱特林级长在夜间巡逻时抓获了违规学生", points: 3 },
      { text: "克拉布不小心在公共休息室放了一个臭气弹", points: -2 },
      { text: "斯内普教授在走廊里无视了斯莱特林学生的违规行为", points: 2 },
      { text: "马库斯·弗林特在训练后主动留下来加练", points: 2 },
      { text: "斯莱特林学生在大礼堂用餐时保持了一贯的优雅", points: 1 },
      { text: "斯莱特林学生在温室里培育出了一种罕见的毒蘑菇", points: 3 },
      { text: "马尔福偷偷在走廊里贴了嘲笑罗恩·韦斯莱的漫画", points: -4 },
      { text: "斯莱特林学生集体向斯内普教授赠送了节日礼物", points: 2 },
      { text: "克拉布在魁地奇训练中意外击出了一记漂亮的击球", points: 2 },
    ],
  },
  ravenclaw: {
    school: [
      { text: "秋·张在飞行课上展现了优雅的技巧", points: 4 },
      { text: "帕德玛·佩蒂尔在魔咒考试中名列前茅", points: 5 },
      { text: "安东尼·戈德斯坦在变形课上走神被罚", points: -2 },
      { text: "卢娜·洛夫古德在保护神奇动物课上与夜骐建立了联系", points: 4 },
      { text: "帕德玛·佩蒂尔在图书馆完成了一篇关于古代魔文的论文", points: 4 },
      { text: "泰瑞·布特在魔药课上调配出了完美的迷情剂", points: 3 },
      { text: "迈克尔·科纳在黑魔法防御课上成功施展了守护神咒", points: 4 },
      { text: "安东尼·戈德斯坦在魔法史考试中取得了满分", points: 5 },
      { text: "帕德玛·佩蒂尔在变形课上成功施展了复杂的变形术", points: 4 },
      { text: "迈克尔·科纳在草药课上成功培育了月光草", points: 3 },
      { text: "秋·张在魔咒课上成功施展了召唤咒", points: 3 },
      { text: "帕德玛·佩蒂尔在巫师棋锦标赛中进入了决赛", points: 4 },
      { text: "泰瑞·布特在魔药课上因为太追求完美延误了提交", points: -2 },
      { text: "安东尼·戈德斯坦在课堂上引用了冷门的魔法史典故", points: 3 },
      { text: "帕德玛·佩蒂尔在草药课上成功处理了一株危险的触手藤", points: 3 },
      { text: "泰瑞·布特在占卜课上准确预言了一场小意外", points: 3 },
      { text: "迈克尔·科纳在黑魔法防御课上与搭档完美配合", points: 3 },
      { text: "秋·张在魁地奇训练中受了轻伤仍坚持练习", points: 3 },
      { text: "帕德玛·佩蒂尔在魔咒课上成功施展了无声咒", points: 5 },
      { text: "迈克尔·科纳在变形课上成功将茶壶变成了乌龟", points: 3 },
    ],
    holiday: [
      { text: "卢娜·洛夫古德提出了一个独特的见解", points: 3 },
      { text: "泰瑞·布特在图书馆待到深夜被费尔奇发现", points: -2 },
      { text: "拉文克劳学生联名提交了一份学术建议", points: 3 },
      { text: "迈克尔·科纳在巫师棋比赛中连胜三局", points: 2 },
      { text: "拉文克劳公共休息室的谜题被一年级新生解开", points: 4 },
      { text: "拉文克劳学生自发组织了读书会", points: 3 },
      { text: "一位拉文克劳学生发现了隐藏的密道", points: 2 },
      { text: "秋·张在魁地奇比赛中完成了一次精彩的抓取", points: 5 },
      { text: "拉文克劳学生在天文塔观测到了一颗新的彗星", points: 5 },
      { text: "卢娜·洛夫古德相信走廊里的嗡嗡声是骚扰虻", points: -1 },
      { text: "秋·张在走廊里被皮皮鬼吓了一跳", points: -1 },
      { text: "拉文克劳学生在禁书区偷偷查阅了古代典籍", points: -3 },
      { text: "泰瑞·布特在图书馆与赫敏·格兰杰展开了学术辩论", points: 3 },
      { text: "拉文克劳学生为霍格沃茨校报撰写了一篇深度报道", points: 3 },
      { text: "安东尼·戈德斯坦在走廊里因为看书撞到了墙壁", points: -2 },
      { text: "卢娜·洛夫古德在走廊里丢了一只萝卜耳环", points: -1 },
      { text: "拉文克劳学生在公共休息室举办了一场天文观星会", points: 3 },
      { text: "拉文克劳学生发现了一种新的魔杖木材特性", points: 5 },
      { text: "迈克尔·科纳在魁地奇看台上为拉文克劳球队出谋划策", points: 2 },
      { text: "卢娜·洛夫古德在走廊里倒着走路说能看到更多东西", points: -1 },
      { text: "秋·张在图书馆安静地完成了一篇关于符文的论文", points: 3 },
      { text: "拉文克劳学生集体向弗立维教授请教了高级魔咒", points: 4 },
      { text: "拉文克劳学生在公共休息室的谜题墙上留下了新的谜语", points: 2 },
      { text: "安东尼·戈德斯坦在食堂里纠正了同学的魔药配方错误", points: 2 },
      { text: "卢娜·洛夫古德在温室里和一株会唱歌的植物聊天", points: 1 },
      { text: "拉文克劳学生在天文塔上记录了完整的星象数据", points: 4 },
      { text: "泰瑞·布特在图书馆发现了一本被遗忘的古代手稿", points: 4 },
      { text: "拉文克劳学生组织了一场跨学院的学术交流会", points: 3 },
      { text: "卢娜·洛夫古德在走廊里捡到了一只迷路的猫狸子", points: 2 },
      { text: "拉文克劳学生为弗立维教授的生日准备了一首拉丁语诗歌", points: 3 },
    ],
  },
  hufflepuff: {
    school: [
      { text: "赫奇帕奇学生在草药课上照料出了稀有的植物", points: 4 },
      { text: "汉娜·艾博在魔药课上不小心打翻了坩埚", points: -2 },
      { text: "苏珊·博恩斯在黑魔法防御课上表现出色", points: 4 },
      { text: "汉娜·艾博在草药课上成功培育了一株月光花", points: 3 },
      { text: "厄尼·麦克米兰在魔法史考试中取得了优异成绩", points: 4 },
      { text: "贾斯廷·芬列里在麻瓜研究课上分享了自己的见解", points: 2 },
      { text: "汉娜·艾博在魔药课上终于没有打翻任何东西", points: 2 },
      { text: "苏珊·博恩斯在黑魔法防御课上成功施展了缴械咒", points: 3 },
      { text: "汉娜·艾博在变形课上成功将一只纽扣变成了甲虫", points: 3 },
      { text: "厄尼·麦克米兰在课堂上认真做了详细的笔记", points: 2 },
      { text: "苏珊·博恩斯在草药课上帮助同学处理了危险的藤蔓", points: 3 },
      { text: "贾斯廷·芬列里在麻瓜研究课上展示了一个有趣的麻瓜发明", points: 3 },
      { text: "塞德里克·迪戈里在飞行课上帮助了一位恐高的同学", points: 3 },
      { text: "汉娜·艾博在草药课上不小心被咬人甘蓝咬了一口", points: -2 },
      { text: "塞德里克·迪戈里在魔咒课上成功施展了复杂的召唤咒", points: 4 },
      { text: "贾斯廷·芬列里在黑魔法防御课上勇敢地面对了博格特", points: 3 },
      { text: "汉娜·艾博在魔药课上调配出了令人满意的遗忘药水", points: 3 },
      { text: "厄尼·麦克米兰在变形课上成功将一只茶壶变成了乌龟", points: 3 },
    ],
    holiday: [
      { text: "塞德里克·迪戈里帮助了一位迷路的一年级新生", points: 5 },
      { text: "厄尼·麦克米兰公正地调解了一场纠纷", points: 3 },
      { text: "赫奇帕奇学生集体打扫了温室", points: 3 },
      { text: "贾斯廷·芬列里与差点没命的尼克聊天到很晚", points: -2 },
      { text: "赫奇帕奇魁地奇球队加练后留下了更衣室一片狼藉", points: -3 },
      { text: "一位赫奇帕奇学生主动帮平斯夫人整理图书", points: 3 },
      { text: "赫奇帕奇学生为医院翼送去了自制的糖果", points: 2 },
      { text: "塞德里克·迪戈里在魁地奇比赛中展现了公平竞赛精神", points: 5 },
      { text: "苏珊·博恩斯在走廊里安慰了一位哭泣的一年级新生", points: 3 },
      { text: "赫奇帕奇学生在厨房帮家养小精灵准备晚餐", points: 3 },
      { text: "赫奇帕奇学生自发组织了校园清洁活动", points: 4 },
      { text: "塞德里克·迪戈里在走廊里捡到了失物并归还了主人", points: 2 },
      { text: "厄尼·麦克米兰在公共休息室组织了一场学习互助会", points: 3 },
      { text: "赫奇帕奇学生为被欺负的低年级学生挺身而出", points: 4 },
      { text: "贾斯廷·芬列里在图书馆安静地完成了作业", points: 2 },
      { text: "赫奇帕奇学生在温室里发现了一株被认为已灭绝的植物", points: 5 },
      { text: "塞德里克·迪戈里在魁地奇训练后主动帮海格搬运饲料", points: 3 },
      { text: "赫奇帕奇学生在大礼堂主动帮低年级学生端菜", points: 2 },
      { text: "贾斯廷·芬列里在走廊里被皮皮鬼的恶作剧吓到了", points: -1 },
      { text: "赫奇帕奇学生集体为校医院编织了温暖的围巾", points: 3 },
      { text: "汉娜·艾博在公共休息室为大家烤了饼干", points: 2 },
      { text: "厄尼·麦克米兰在巫师棋比赛中展现了出色的策略", points: 3 },
      { text: "苏珊·博恩斯在走廊里捡到了一封遗落的信件并交给了教授", points: 2 },
      { text: "赫奇帕奇学生在黑湖边发现了一只受伤的巨乌贼幼崽", points: 3 },
      { text: "赫奇帕奇学生为万圣节盛宴制作了特别的南瓜灯", points: 3 },
      { text: "厄尼·麦克米兰在走廊里公正地处理了一起低年级冲突", points: 3 },
      { text: "苏珊·博恩斯在图书馆帮助一位同学找到了需要的书籍", points: 2 },
      { text: "赫奇帕奇学生在公共休息室举办了一场温馨的茶话会", points: 2 },
      { text: "赫奇帕奇学生主动帮庞弗雷夫人整理了校医院的药柜", points: 3 },
      { text: "塞德里克·迪戈里在魁地奇比赛中坚持公平竞争拒绝犯规", points: 5 },
      { text: "赫奇帕奇学生为斯普劳特教授的生日准备了花束", points: 3 },
      { text: "苏珊·博恩斯在走廊里阻止了一场即将升级的争吵", points: 3 },
    ],
  },
};

const HOUSE_ICONS = {
  gryffindor: "🦁",
  slytherin: "🐍",
  ravenclaw: "🦅",
  hufflepuff: "🦡",
};

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function isHoliday() {
  const data = getSave();
  const dayOfWeek = data.time?.dayOfWeek || 1;
  
  if (window.timeSystem?.isHoliday) {
    return window.timeSystem.isHoliday();
  }
  
  if (dayOfWeek === 6 || dayOfWeek === 7) {
    return true;
  }
  
  return false;
}

function generateNpcEvents() {
  const data = getSave();
  const playerHouseKey = HOUSE_MAP[data.player?.house] || "gryffindor";
  const houses = Object.keys(NPC_EVENTS);
  const events = [];
  const count = 1 + Math.floor(Math.random() * 3);
  const holiday = isHoliday();

  for (let i = 0; i < count; i++) {
    const house = rand(houses);
    const eventList = holiday ? NPC_EVENTS[house].holiday : NPC_EVENTS[house].school;
    const evt = rand(eventList);
    events.push({ house, ...evt });
  }

  return events;
}

function applyNpcEvents(events) {
  const data = getSave();
  if (!data.housePoints || typeof data.housePoints !== "object") {
    data.housePoints = { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 };
  }

  events.forEach(evt => {
    data.housePoints[evt.house] = Math.max(0, (data.housePoints[evt.house] || 0) + evt.points);
  });

  setSave(data);

  events.forEach(evt => {
    const icon = HOUSE_ICONS[evt.house] || "";
    const sign = evt.points >= 0 ? "+" : "";
    addLog(`${icon} ${evt.text}（${sign}${evt.points}分）`, 'npc', evt.house);
  });

  window.refreshAll?.();
}

export function triggerNpcDailyEvents() {
  const events = generateNpcEvents();
  if (events.length > 0) applyNpcEvents(events);
}

window.npcEvents = { triggerNpcDailyEvents };

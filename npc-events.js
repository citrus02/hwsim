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

const CANON_ACTION_EVENTS = {
  gryffindor: {
    school: [
      { text: "赫敏·格兰杰在魔咒课上准确说出了咒语的发音", points: 4 },
      { text: "罗恩·韦斯莱在魔药课上把豪猪刺放早了", points: -2 },
      { text: "纳威·隆巴顿在草药课上小心照料曼德拉草", points: 3, minYear: 1992 },
      { text: "哈利·波特在飞行训练中稳稳接住了金色飞贼", points: 4 },
      { text: "西莫·斐尼甘的羽毛在魔咒课上冒出了黑烟", points: -2 },
      { text: "帕瓦蒂·佩蒂尔在占卜课上认真记录茶叶图案", points: 2, minYear: 1993 },
      { text: "迪安·托马斯替同学补好了被火星烧焦的课本", points: 2 },
      { text: "珀西·韦斯莱维持课堂秩序受到了教授表扬", points: 2, maxYear: 1993 },
    ],
    holiday: [
      { text: "弗雷德和乔治·韦斯莱在走廊里放了费力拔烟火", points: -4 },
      { text: "赫敏·格兰杰在图书馆帮一年级学生找到参考书", points: 3 },
      { text: "纳威·隆巴顿鼓起勇气阻止同学夜游", points: 5 },
      { text: "罗恩·韦斯莱在巫师棋局里赢下了一盘漂亮的棋", points: 2 },
      { text: "哈利·波特深夜离开公共休息室被费尔奇记下", points: -3 },
      { text: "金妮·韦斯莱主动帮麦格教授整理散落的羊皮纸", points: 2, minYear: 1992 },
      { text: "李·乔丹在魁地奇看台上喊得太过火", points: -2 },
      { text: "格兰芬多学生把胖夫人画像前的通道收拾干净", points: 2 },
    ],
  },
  slytherin: {
    school: [
      { text: "德拉科·马尔福在魔药课上交出了一瓶清亮的药剂", points: 4 },
      { text: "克拉布和高尔在走廊里推搡低年级学生", points: -3 },
      { text: "潘西·帕金森在变形课上回答了麦格教授的问题", points: 2 },
      { text: "斯莱特林学生在斯内普教授面前表现得格外安静", points: 2 },
      { text: "德拉科·马尔福在保护神奇动物课上故意挑衅巴克比克", points: -4, minYear: 1993, maxYear: 1993 },
      { text: "布雷司·沙比尼完成了一篇工整的魔药论文", points: 3 },
      { text: "高尔在黑魔法防御课上打瞌睡被点名", points: -2 },
      { text: "斯莱特林魁地奇队员在训练中犯规抢占场地", points: -3, minYear: 1992 },
    ],
    holiday: [
      { text: "德拉科·马尔福向费尔奇报告了走廊里的恶作剧", points: 2 },
      { text: "马库斯·弗林特在魁地奇训练中撞倒了队友", points: -3, maxYear: 1994 },
      { text: "斯莱特林级长在地牢入口拦下了夜游学生", points: 3 },
      { text: "克拉布把一包糖果碎屑留在公共休息室门口", points: -1 },
      { text: "潘西·帕金森在大礼堂嘲笑格兰芬多学生", points: -2 },
      { text: "斯莱特林学生为斯内普教授擦净了几只备用坩埚", points: 2 },
      { text: "德拉科·马尔福在走廊里散布关于海格课程的坏话", points: -2, minYear: 1993 },
      { text: "斯莱特林魁地奇队按时归还了训练用球", points: 1 },
    ],
  },
  ravenclaw: {
    school: [
      { text: "秋·张在飞行课上展现了稳定的控帚技巧", points: 3 },
      { text: "帕德玛·佩蒂尔在魔咒课上完成了漂亮的漂浮咒", points: 3, minYear: 1991 },
      { text: "安东尼·戈德斯坦在魔法史课上准确补充了妖精叛乱的年份", points: 3 },
      { text: "泰瑞·布特在变形课上把火柴变成了针", points: 2 },
      { text: "迈克尔·科纳在课堂上翻书太入神错过了提问", points: -1, minYear: 1991 },
      { text: "卢娜·洛夫古德在保护神奇动物课上耐心观察夜骐", points: 3, minYear: 1995 },
      { text: "拉文克劳学生在天文学课上交出了清晰的星图", points: 4 },
      { text: "一位拉文克劳学生在魔药课上因过度修改配方被扣分", points: -2 },
    ],
    holiday: [
      { text: "拉文克劳公共休息室的门环谜题被新生答对", points: 3 },
      { text: "泰瑞·布特在图书馆逗留到宵禁后才离开", points: -2 },
      { text: "秋·张在魁地奇训练后主动收好了队服", points: 2 },
      { text: "帕德玛·佩蒂尔帮同学整理了一叠古代魔文笔记", points: 2, minYear: 1993 },
      { text: "卢娜·洛夫古德在走廊里寻找丢失的萝卜耳环", points: -1, minYear: 1992 },
      { text: "拉文克劳学生为弗立维教授准备了生日贺卡", points: 2 },
      { text: "安东尼·戈德斯坦在楼梯变换时仍扶住了一年级学生", points: 3 },
      { text: "拉文克劳学生在图书馆小声争论魔法史细节", points: -1 },
    ],
  },
  hufflepuff: {
    school: [
      { text: "塞德里克·迪戈里在飞行课上帮助同学调整扫帚姿势", points: 3 },
      { text: "汉娜·艾博在草药课上认真给植物换盆", points: 3 },
      { text: "厄尼·麦克米兰在魔法史课上交了整齐的笔记", points: 2 },
      { text: "苏珊·博恩斯在黑魔法防御课上成功施出缴械咒", points: 3 },
      { text: "贾斯廷·芬列里在草药课上被咬人甘蓝吓退半步", points: -1, minYear: 1991 },
      { text: "赫奇帕奇学生帮斯普劳特教授搬运龙粪肥料", points: 3 },
      { text: "汉娜·艾博在魔药课上不小心碰翻了量杯", points: -2 },
      { text: "厄尼·麦克米兰在课堂讨论中坚持公正地引用资料", points: 2 },
    ],
    holiday: [
      { text: "塞德里克·迪戈里把捡到的围巾还给了低年级学生", points: 3 },
      { text: "赫奇帕奇学生在厨房附近帮家养小精灵收拾餐具", points: 2 },
      { text: "苏珊·博恩斯在走廊里安慰了一位受惊的新生", points: 3 },
      { text: "厄尼·麦克米兰调解了公共休息室里的一场争执", points: 2 },
      { text: "贾斯廷·芬列里在宵禁后还留在走廊和幽灵聊天", points: -2 },
      { text: "赫奇帕奇学生把温室门口的泥土清扫干净", points: 2 },
      { text: "汉娜·艾博给公共休息室带来一盘刚烤好的点心", points: 1 },
      { text: "赫奇帕奇魁地奇队训练后忘记归还一只游走球", points: -2 },
    ],
  },
};

const CANON_EVENT_FRAGMENTS = {
  gryffindor: {
    actors: [
      { name: "哈利·波特" },
      { name: "罗恩·韦斯莱" },
      { name: "赫敏·格兰杰" },
      { name: "纳威·隆巴顿" },
      { name: "西莫·斐尼甘" },
      { name: "迪安·托马斯" },
      { name: "弗雷德·韦斯莱" },
      { name: "乔治·韦斯莱" },
      { name: "李·乔丹" },
      { name: "珀西·韦斯莱", maxYear: 1993 },
      { name: "金妮·韦斯莱", minYear: 1992 },
    ],
    schoolPlaces: ["魔咒课上", "变形课上", "魔药课上", "草药课上", "飞行训练中", "黑魔法防御课上", "图书馆里"],
    holidayPlaces: ["格兰芬多公共休息室", "大理石楼梯旁", "魁地奇球场边", "图书馆里", "大礼堂门口", "胖夫人画像前", "庭院里"],
    good: [
      { text: "{actor}在{place}主动帮助了低年级学生", points: [2, 4] },
      { text: "{actor}在{place}表现出了格兰芬多式的勇气", points: [2, 5] },
      { text: "{actor}把差点失控的小事故及时处理好", points: [2, 4] },
      { text: "{actor}为同学补上了一段关键笔记", points: [1, 3] },
      { text: "{actor}在教授提问时给出了机敏的回答", points: [2, 4], schoolOnly: true },
    ],
    bad: [
      { text: "{actor}在{place}为了恶作剧耽误了别人", points: [-4, -2] },
      { text: "{actor}被费尔奇记下了走廊奔跑的名字", points: [-3, -1] },
      { text: "{actor}因为太冲动差点惹出麻烦", points: [-3, -1] },
      { text: "{actor}把课堂材料弄得一团糟", points: [-3, -1], schoolOnly: true },
      { text: "{actor}在宵禁后还逗留在城堡走廊", points: [-4, -2], holidayOnly: true },
    ],
  },
  slytherin: {
    actors: [
      { name: "德拉科·马尔福" },
      { name: "潘西·帕金森" },
      { name: "布雷司·沙比尼" },
      { name: "克拉布" },
      { name: "高尔" },
      { name: "马库斯·弗林特", maxYear: 1994 },
      { name: "斯莱特林级长" },
      { name: "一位斯莱特林学生" },
    ],
    schoolPlaces: ["魔药课上", "变形课上", "黑魔法防御课上", "草药课上", "地牢教室里", "飞行训练中", "图书馆里"],
    holidayPlaces: ["地牢入口", "斯莱特林公共休息室外", "黑湖边", "大礼堂里", "魁地奇球场边", "走廊拐角处"],
    good: [
      { text: "{actor}在{place}交出了一份格外工整的作业", points: [2, 4] },
      { text: "{actor}在{place}精准完成了教授布置的练习", points: [2, 4], schoolOnly: true },
      { text: "{actor}提醒同院学生遵守级长的巡逻要求", points: [1, 3] },
      { text: "{actor}在竞争中展现了冷静和野心", points: [2, 3] },
      { text: "{actor}把地牢附近的魔药器具收拾得井井有条", points: [1, 3] },
    ],
    bad: [
      { text: "{actor}在{place}故意嘲笑别院学生", points: [-4, -2] },
      { text: "{actor}被发现把责任推给了一年级学生", points: [-3, -1] },
      { text: "{actor}在魁地奇训练里动作过于粗鲁", points: [-4, -2] },
      { text: "{actor}在课堂上低声说了刻薄话", points: [-3, -1], schoolOnly: true },
      { text: "{actor}在宵禁后还停留在地牢外", points: [-3, -1], holidayOnly: true },
    ],
  },
  ravenclaw: {
    actors: [
      { name: "秋·张" },
      { name: "帕德玛·佩蒂尔" },
      { name: "泰瑞·布特" },
      { name: "迈克尔·科纳" },
      { name: "安东尼·戈德斯坦" },
      { name: "卢娜·洛夫古德", minYear: 1992 },
      { name: "一位拉文克劳学生" },
    ],
    schoolPlaces: ["魔咒课上", "变形课上", "魔法史课上", "天文学课上", "图书馆里", "古代魔文课上", "黑魔法防御课上"],
    holidayPlaces: ["拉文克劳塔楼门口", "图书馆里", "天文塔上", "大礼堂长桌旁", "楼梯平台上", "庭院长廊里"],
    good: [
      { text: "{actor}在{place}给出了让教授点头的解释", points: [2, 5] },
      { text: "{actor}整理出一页清楚的复习提纲并借给同学", points: [2, 3] },
      { text: "{actor}解开了门环留下的新谜题", points: [2, 4], holidayOnly: true },
      { text: "{actor}在{place}准确引用了一段冷门资料", points: [2, 4] },
      { text: "{actor}把星象记录补得又细又准", points: [2, 4] },
    ],
    bad: [
      { text: "{actor}在{place}因为看书太入神错过了指令", points: [-2, -1] },
      { text: "{actor}为了争论一个细节打断了课堂节奏", points: [-3, -1], schoolOnly: true },
      { text: "{actor}在图书馆逗留到宵禁后才想起离开", points: [-3, -1], holidayOnly: true },
      { text: "{actor}把一卷羊皮纸忘在了会移动的楼梯上", points: [-2, -1] },
      { text: "{actor}在休息时间的小辩论里说得太大声", points: [-2, -1] },
    ],
  },
  hufflepuff: {
    actors: [
      { name: "塞德里克·迪戈里" },
      { name: "汉娜·艾博" },
      { name: "厄尼·麦克米兰" },
      { name: "苏珊·博恩斯" },
      { name: "贾斯廷·芬列里" },
      { name: "一位赫奇帕奇学生" },
    ],
    schoolPlaces: ["草药课上", "魔药课上", "黑魔法防御课上", "变形课上", "温室里", "魔法史课上", "飞行训练中"],
    holidayPlaces: ["赫奇帕奇公共休息室外", "厨房附近", "温室门口", "大礼堂里", "校医院门前", "黑湖边"],
    good: [
      { text: "{actor}在{place}耐心帮同学补完了练习", points: [2, 4] },
      { text: "{actor}主动把散落的工具收拾回原处", points: [1, 3] },
      { text: "{actor}公平地劝开了一场小争执", points: [2, 4] },
      { text: "{actor}在{place}细心照料了需要看护的植物", points: [2, 4] },
      { text: "{actor}把捡到的东西交还给了主人", points: [2, 3] },
    ],
    bad: [
      { text: "{actor}在{place}不小心碰翻了材料", points: [-3, -1], schoolOnly: true },
      { text: "{actor}训练后忘记归还一件公用器材", points: [-2, -1] },
      { text: "{actor}在走廊里停下聊天挡住了路", points: [-2, -1] },
      { text: "{actor}因为太紧张答错了教授的简单问题", points: [-2, -1], schoolOnly: true },
      { text: "{actor}宵禁后还在厨房附近逗留", points: [-3, -1], holidayOnly: true },
    ],
  },
};

const GENERIC_HOUSE_ACTORS = {
  gryffindor: [
    { name: "一位格兰芬多学生" },
    { name: "几个格兰芬多学生" },
    { name: "格兰芬多低年级学生" },
    { name: "格兰芬多魁地奇队员" },
    { name: "格兰芬多级长" },
    { name: "格兰芬多长桌旁的学生" },
    { name: "一名红金围巾的学生" },
  ],
  slytherin: [
    { name: "一位斯莱特林学生" },
    { name: "几个斯莱特林学生" },
    { name: "斯莱特林低年级学生" },
    { name: "斯莱特林魁地奇队员" },
    { name: "斯莱特林级长" },
    { name: "斯莱特林长桌旁的学生" },
    { name: "一名银绿围巾的学生" },
  ],
  ravenclaw: [
    { name: "一位拉文克劳学生" },
    { name: "几个拉文克劳学生" },
    { name: "拉文克劳低年级学生" },
    { name: "拉文克劳魁地奇队员" },
    { name: "拉文克劳级长" },
    { name: "拉文克劳长桌旁的学生" },
    { name: "一名蓝铜围巾的学生" },
  ],
  hufflepuff: [
    { name: "一位赫奇帕奇学生" },
    { name: "几个赫奇帕奇学生" },
    { name: "赫奇帕奇低年级学生" },
    { name: "赫奇帕奇魁地奇队员" },
    { name: "赫奇帕奇级长" },
    { name: "赫奇帕奇长桌旁的学生" },
    { name: "一名黄黑围巾的学生" },
  ],
};

const CANON_DETAIL_POOLS = {
  school: {
    subject: ["魔咒课", "变形课", "魔药课", "草药课", "魔法史课", "天文学课", "黑魔法防御课", "飞行课"],
    professor: ["麦格教授", "弗立维教授", "斯内普教授", "斯普劳特教授", "宾斯教授", "霍琦夫人", "庞弗雷夫人"],
    object: ["羽毛", "火柴", "银针", "坩埚", "月长石粉", "豪猪刺", "曼德拉草盆", "星图", "羊皮纸卷", "旧课本", "玻璃小瓶", "黄铜天平"],
    spell: ["漂浮咒", "开锁咒", "缴械咒", "召唤咒", "变形咒", "盾牌咒", "清理一新", "修复如初", "荧光闪烁"],
    creature: ["曼德拉草", "火螃蟹", "护树罗锅", "蟾蜍", "猫头鹰", "小型博格特", "咬人甘蓝"],
    result: ["让全班安静了一瞬", "被教授点名表扬", "让旁边几张桌子都看了过来", "被要求课后留下说明情况", "换来一阵低声议论", "让课堂恢复了秩序"],
    detail: ["赶在铃声前", "在一阵粉笔灰里", "趁画像们还在打盹", "在坩埚冒烟之前", "把声音压得很低", "在长袍袖口沾满墨水时"],
  },
  holiday: {
    subject: ["魁地奇训练", "巫师棋局", "图书馆自习", "级长巡逻", "公共休息室整理", "猫头鹰棚屋值日", "庭院练习"],
    professor: ["费尔奇", "平斯夫人", "庞弗雷夫人", "海格", "麦格教授", "弗立维教授", "斯普劳特教授"],
    object: ["巧克力蛙卡片", "会尖叫的羽毛笔", "一卷羊皮纸", "魁地奇护具", "猫头鹰食盆", "南瓜汁杯", "破旧棋子", "会移动的楼梯扶手", "油灯", "失物袋"],
    spell: ["清理一新", "修复如初", "荧光闪烁", "无声漂浮咒", "锁腿咒", "显形咒", "混淆咒"],
    creature: ["皮皮鬼", "胖夫人画像", "差点没头的尼克", "血人巴罗", "家养小精灵", "洛丽丝夫人", "一只迷路的蟾蜍"],
    result: ["被路过的学生小声称赞", "让费尔奇皱起了眉", "没有惊动画像", "在长桌旁传成了小新闻", "让级长记在了巡逻簿上", "被平斯夫人用目光赶出了图书馆"],
    detail: ["趁楼梯刚刚停稳", "在晚餐前", "趁雨点敲着窗户", "在壁炉火光旁", "赶在宵禁钟声前", "在走廊盔甲咔嗒作响时"],
  },
};

const COMMON_EVENT_TEMPLATES = {
  good: [
    { text: "{actor}在{place}{detail}用{spell}处理好了{object}，{result}", points: [2, 5] },
    { text: "{actor}在{place}主动把{object}归还原处，{result}", points: [1, 3] },
    { text: "{actor}在{subject}相关练习里表现稳定，{professor}点了点头", points: [2, 4], schoolOnly: true },
    { text: "{actor}帮同学弄明白了{subject}的一个难点，{result}", points: [2, 4], schoolOnly: true },
    { text: "{actor}及时拦住了围着{creature}起哄的学生，{result}", points: [2, 4] },
    { text: "{actor}把一场关于{object}的小混乱收拾干净，{result}", points: [1, 3] },
    { text: "{actor}在{place}耐心安抚了受惊的一年级学生", points: [2, 4] },
    { text: "{actor}为{professor}送回了遗落的{object}", points: [1, 3] },
    { text: "{actor}{detail}完成了额外的{subject}笔记", points: [2, 4], schoolOnly: true },
    { text: "{actor}在{place}用一句话化解了两名学生的争执", points: [2, 4] },
    { text: "{actor}把{creature}引回安全的地方，没让事情闹大", points: [2, 4] },
    { text: "{actor}在{place}提醒大家遵守宵禁前的规矩", points: [1, 3], holidayOnly: true },
    { text: "{actor}整理好了散在桌上的{object}，让平斯夫人少瞪了几眼", points: [1, 3] },
    { text: "{actor}在{place}发现并报告了一处危险的小故障", points: [2, 5] },
    { text: "{actor}把{subject}练习留下的狼藉清理干净", points: [1, 3] },
  ],
  bad: [
    { text: "{actor}在{place}{detail}把{object}弄得满地都是，{result}", points: [-4, -1] },
    { text: "{actor}滥用了{spell}，差点波及旁边的{object}", points: [-5, -2] },
    { text: "{actor}在{subject}里小声起哄，被{professor}听见了", points: [-4, -1], schoolOnly: true },
    { text: "{actor}为了看热闹围住了{creature}，让走廊堵了起来", points: [-3, -1] },
    { text: "{actor}把{object}忘在会移动的楼梯上，害得级长找了半天", points: [-3, -1] },
    { text: "{actor}在{place}说话太大声，惹恼了画像", points: [-3, -1], holidayOnly: true },
    { text: "{actor}在{place}试图偷偷练习{spell}，结果被费尔奇记下名字", points: [-5, -2], holidayOnly: true },
    { text: "{actor}交上来的{subject}作业沾满了南瓜汁", points: [-3, -1], schoolOnly: true },
    { text: "{actor}把{professor}刚整理好的{object}碰乱了", points: [-3, -1] },
    { text: "{actor}因为争抢{object}和同学吵了起来", points: [-3, -1] },
    { text: "{actor}在{place}追着{creature}跑，吓到了低年级学生", points: [-4, -1] },
    { text: "{actor}在宵禁钟声后还留在{place}", points: [-4, -2], holidayOnly: true },
    { text: "{actor}把{spell}念错，害得{object}弹到了教室另一头", points: [-4, -1], schoolOnly: true },
    { text: "{actor}在{place}留下了一摊可疑的魔药痕迹", points: [-4, -1] },
    { text: "{actor}没按要求归还{object}，被级长扣下了名字", points: [-3, -1] },
  ],
};

const WORLD_YEAR_THEMES = [
  { year: 1991, rumors: ["三楼右边走廊被反复提起，连画像都装作没听见。", "有人在谈论尼可·勒梅这个名字，但说法各不相同。", "奇洛教授的围巾味道让前排学生苦不堪言。"], mood: "新生们仍在摸索城堡的楼梯规律。" },
  { year: 1992, rumors: ["走廊里的低语常常提到密室，声音一低再低。", "有人说墙上的水迹不是普通漏水。", "洛哈特教授的签名照又被贴到了公告栏边。"], mood: "城堡里多了些紧张的窃窃私语。" },
  { year: 1993, rumors: ["摄魂怪让学生们经过校门时不自觉放慢脚步。", "小天狼星·布莱克的名字在长桌间悄悄传来传去。", "卢平教授的课后，学生们讨论黑魔法防御术的声音明显兴奋了些。"], mood: "守卫和巡逻让城堡显得比往常更冷。" },
  { year: 1994, rumors: ["三强争霸赛的可能性让高年级学生格外躁动。", "有人在猜测今年会不会有远方学校来访。", "魁地奇世界杯的话题还没有完全从长桌旁散去。"], mood: "城堡像是在等一件大事发生。" },
  { year: 1995, rumors: ["有人悄悄议论魔法部对学校的干预。", "黑魔法防御课的气氛让不少学生憋着一肚子话。", "粉红色的规章布告让公告栏看起来格外刺眼。"], mood: "学生们说话时更常先看看周围。" },
  { year: 1996, rumors: ["魔药课的优秀学生名单成了不少人的谈资。", "有人在猜测斯拉格霍恩教授究竟邀请了哪些学生。", "魁地奇训练之外，城堡里的紧张感仍然压在窗外。"], mood: "晚餐时的笑声里混着不安。" },
  { year: 1997, rumors: ["走廊里的脚步声比往年更轻。", "不少学生把信件藏得更深，读完就立刻收起。", "教授们的脸色让低年级学生不敢多问。"], mood: "城堡像屏住了呼吸。" },
];

const WORLD_RUMOR_TEMPLATES = [
  "有人说{place}附近的画像整晚都在互相传话。",
  "{place}今天格外热闹，连低年级学生都知道那里出了点小状况。",
  "一条关于{object}的传闻从大礼堂一路传到了楼梯口。",
  "{professor}似乎在追查一件和{object}有关的小事故。",
  "几个学生赌咒说他们在{place}听见了{creature}的动静。",
  "有人把{spell}念错的故事讲了三遍，每次都更夸张。",
  "公告栏旁有人压低声音讨论{subject}，一见教授经过就散开了。",
  "平斯夫人今天比往常更严厉，图书馆里连翻页声都变轻了。",
  "长桌旁有人说，费尔奇正在追查一串奇怪的脚印。",
  "画像们似乎知道一点新消息，但谁也不肯先开口。"
];

const WORLD_MEMORY_FOLLOWUPS = [
  "昨天那件事还在学生间流传，不过版本已经变得离谱了。",
  "费尔奇似乎还没放弃追查上一桩小麻烦。",
  "几个低年级学生还在模仿刚刚传开的那件事。",
  "相关的学生今天明显安分了些。",
  "长桌旁有人又提起了刚才那条传闻，声音很快被压低。"
];

const WORLD_RELATION_EVENTS = [
  { text: "哈利和罗恩在长桌旁交换了一个只有他们懂的眼神。", key: "harry", name: "哈利", minYear: 1991 },
  { text: "赫敏把一叠补充笔记推给了同学，嘴上却说只是顺手。", key: "hermione", name: "赫敏", minYear: 1991 },
  { text: "马尔福和几个斯莱特林学生在走廊拐角低声议论，见人靠近便停了下来。", key: "draco", name: "马尔福", minYear: 1991 },
  { text: "纳威被几名同学围着鼓励，脸红得几乎和围巾一样。", key: "neville", name: "纳威", minYear: 1991 },
  { text: "弗雷德和乔治似乎在计划新的恶作剧，李·乔丹负责望风。", key: "fredWeasley", name: "弗雷德", minYear: 1991 },
  { text: "秋·张和拉文克劳同学讨论魁地奇战术，声音轻而认真。", minYear: 1991 },
  { text: "塞德里克帮一位低年级学生捡起课本，引来赫奇帕奇长桌一阵善意的笑。", minYear: 1991 },
  { text: "金妮在公共区域匆匆经过，怀里抱着一摞比她还高的书。", key: "ginnyWeasley", name: "金妮", minYear: 1992 },
  { text: "卢娜认真讲起一种没人听过的生物，旁边的人一时不知道该不该点头。", key: "luna", name: "卢娜", minYear: 1992 },
  { text: "几名学生谈起洛哈特教授时努力忍住笑，最后还是失败了。", minYear: 1992, maxYear: 1992 },
  { text: "卢平教授下课后被学生围住提问，少见地露出疲倦但温和的笑。", minYear: 1993, maxYear: 1993 },
  { text: "三强争霸赛的传闻让高年级学生之间的谈话变得热烈起来。", minYear: 1994, maxYear: 1994 },
  { text: "几个学生一见乌姆里奇经过便闭上嘴，等她走远才重新交换眼神。", minYear: 1995, maxYear: 1995 },
  { text: "斯拉格霍恩教授的邀请名单成了晚餐时最热门的话题之一。", minYear: 1996, maxYear: 1996 },
  { text: "越来越多学生把谈话压得很低，像是连墙壁都不再可靠。", minYear: 1997 },
];

const COURSE_DYNAMIC_EVENTS = [
  { subject: "魔咒课", location: "魔咒课教室", professor: "弗立维教授", text: "弗立维教授让学生们轮流练习漂浮咒，几片羽毛一直飘到下课铃响。", minYear: 1991 },
  { subject: "变形术", location: "一楼走廊", professor: "麦格教授", text: "麦格教授把一摞火柴变成针作为示范，教室里立刻安静得能听见羽毛笔刮纸。", minYear: 1991 },
  { subject: "魔药课", location: "魔药课教室", professor: "斯内普教授", text: "斯内普教授逐一检查坩埚，地牢里只剩药水冒泡和学生屏住呼吸的声音。", minYear: 1991 },
  { subject: "草药课", location: "草药课温室", professor: "斯普劳特教授", text: "斯普劳特教授带学生整理温室里的尖牙天竺葵，手套和护目镜一件也不许少。", minYear: 1991 },
  { subject: "魔法史", location: "魔法史教室", professor: "宾斯教授", text: "宾斯教授照旧讲着妖精叛乱，不少学生把笔记写得像梦游记录。", minYear: 1991 },
  { subject: "飞行课", location: "魁地奇球场", professor: "霍琦夫人", text: "霍琦夫人要求低年级学生重新练习起飞和降落，草地上留下了一排歪歪扭扭的扫帚痕。", minYear: 1991 },
  { subject: "黑魔法防御术", location: "黑魔法防御术教室", professor: "奇洛教授", text: "奇洛教授结结巴巴地讲完防御咒，教室后排仍有人小声议论那股大蒜味。", minYear: 1991, maxYear: 1991 },
  { subject: "黑魔法防御术", location: "黑魔法防御术教室", professor: "洛哈特教授", text: "洛哈特教授把课堂大半时间用来展示签名照，学生们的表情比课本还厚。", minYear: 1992, maxYear: 1992 },
  { subject: "黑魔法防御术", location: "黑魔法防御术教室", professor: "卢平教授", text: "卢平教授让学生们讨论如何分辨博格特，课堂气氛少见地既紧张又期待。", minYear: 1993, maxYear: 1993 },
  { subject: "黑魔法防御术", location: "黑魔法防御术教室", professor: "穆迪教授", text: "穆迪教授的魔眼扫过全班，所有人都把魔杖握得比平时更紧。", minYear: 1994, maxYear: 1994 },
  { subject: "黑魔法防御术", location: "黑魔法防御术教室", professor: "乌姆里奇教授", text: "乌姆里奇教授要求全班只读教材，羽毛笔划过羊皮纸的声音显得格外刺耳。", minYear: 1995, maxYear: 1995 },
  { subject: "魔药课", location: "魔药课教室", professor: "斯拉格霍恩教授", text: "斯拉格霍恩教授绕着坩埚点评药色，还顺口提起几位他从前教过的名人。", minYear: 1996, maxYear: 1996 },
  { subject: "占卜课", location: "天文塔", professor: "特里劳妮教授", text: "特里劳妮教授让学生解读茶叶渣，几张桌子同时传出压低的惊呼。", minYear: 1993 },
  { subject: "保护神奇动物课", location: "庭院草坪", professor: "海格教授", text: "海格教授把一只装着神奇动物饲料的木桶拎到场地边，学生们下意识站得更远了些。", minYear: 1993 },
];

const WORLD_AFFINITY_EVENTS = [
  { key: "hermione", name: "赫敏", delta: 1, text: "赫敏在图书馆替你留意到一本可能有用的参考书。", minYear: 1991 },
  { key: "ron", name: "罗恩", delta: 1, text: "罗恩在长桌旁给你让了个位置，还顺手把南瓜汁推了过来。", minYear: 1991 },
  { key: "harry", name: "哈利", delta: 1, text: "哈利经过走廊时朝你点了点头，像是记得上次的帮忙。", minYear: 1991 },
  { key: "neville", name: "纳威", delta: 1, text: "纳威结结巴巴地向你道谢，说你之前提醒他的事很有用。", minYear: 1991 },
  { key: "draco", name: "马尔福", delta: -1, text: "马尔福听见你的名字后挑了挑眉，显然把某件小事记在心里。", minYear: 1991 },
  { key: "fredWeasley", name: "弗雷德", delta: 1, text: "弗雷德冲你眨了眨眼，像是把你列入了某个恶作剧的旁观名单。", minYear: 1991 },
  { key: "georgeWeasley", name: "乔治", delta: 1, text: "乔治顺手帮你挡开了皮皮鬼扔来的粉笔头。", minYear: 1991 },
  { key: "ginnyWeasley", name: "金妮", delta: 1, text: "金妮匆匆经过时小声向你问好，脸上带着一点不好意思的笑。", minYear: 1992 },
  { key: "luna", name: "卢娜", delta: 1, text: "卢娜认真告诉你，她觉得你今天身边没有骚扰虻，语气非常郑重。", minYear: 1992 },
  { key: "minervaMcGonagall", name: "麦格教授", delta: 1, text: "麦格教授在走廊里看见你按时赶路，神色稍微缓和了一点。", minYear: 1991 },
  { key: "severusSnape", name: "斯内普教授", delta: -1, text: "斯内普教授的视线在你身上停了一秒，像是又发现了什么可扣分的理由。", minYear: 1991 },
  { key: "filiusFlitwick", name: "弗立维教授", delta: 1, text: "弗立维教授听说你认真练习咒语，显得相当高兴。", minYear: 1991 },
  { key: "pomonaSprout", name: "斯普劳特教授", delta: 1, text: "斯普劳特教授注意到你没有踩到温室边的幼苗，满意地点了点头。", minYear: 1991 },
  { key: "remusLupin", name: "卢平教授", delta: 1, text: "卢平教授温和地问起你最近的练习，像是真正在意答案。", minYear: 1993, maxYear: 1993 },
];

const LOCATION_STATUS_POOLS = {
  "城堡图书馆": ["平斯夫人严查高声说话", "几张长桌堆满了复习用书", "禁书区门口的锁链被擦得发亮", "靠窗座位被高年级学生占满"],
  "图书馆禁书区": ["门口有教授经过的脚步声", "书架深处传来细微的纸页声", "今天的禁书区格外安静"],
  "霍格沃茨大礼堂": ["长桌旁传闻四起", "南瓜汁壶被传来传去", "天花板上的云层看起来很低", "各院学生都在讨论学院分"],
  "一楼走廊": ["费尔奇巡逻得很勤", "几幅画像正在吵架", "楼梯口挤满了换课的学生", "盔甲发出断断续续的咔嗒声"],
  "魔药课教室": ["坩埚气味久久不散", "斯内普教授留下的批注让人背后一凉", "地牢里比平时更冷"],
  "魔咒课教室": ["羽毛和碎纸片散在桌边", "弗立维教授刚清理过讲台", "黑板上还留着咒语发音提示"],
  "黑魔法防御术教室": ["课桌被推到墙边", "柜子里传来轻微响动", "学生们还在讨论刚才的练习"],
  "魔法史教室": ["粉笔灰落了厚厚一层", "几个学生在努力保持清醒", "宾斯教授的声音仿佛还在回荡"],
  "草药课温室": ["泥土味和龙粪肥料味混在一起", "几盆植物被临时遮上了布", "斯普劳特教授留下了一张照料清单"],
  "魁地奇球场": ["看台上传来断续的欢呼", "训练用球箱还没锁好", "风把学院旗帜吹得猎猎作响"],
  "庭院草坪": ["学生们三三两两坐在草地上", "猫头鹰的影子掠过草坪", "有人在树荫下赶作业"],
  "校医院": ["庞弗雷夫人不许学生久留", "床帘后传来轻轻的咳嗽声", "药水气味让人立刻放轻脚步"],
  "猫头鹰塔楼": ["羽毛落了一地", "几只猫头鹰显得很不耐烦", "信件的蜡封在窗边闪光"],
  "格兰芬多公共休息室": ["壁炉火烧得很旺", "沙发旁有人在争论魁地奇", "胖夫人画像前排着队"],
  "斯莱特林公共休息室": ["湖水的绿光映在墙上", "地牢里的脚步声格外清楚", "壁炉旁有人压低声音交谈"],
  "拉文克劳公共休息室": ["门环留下了新的谜题", "窗边堆着几卷星图", "塔楼风声让谈话显得很轻"],
  "赫奇帕奇公共休息室": ["空气里有烘烤点心的味道", "圆窗旁摆着几盆植物", "有人在帮低年级学生补作业"],
};

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function getCurrentYear() {
  const data = getSave();
  const dateYear = Number(String(data.time?.currentDate || "").slice(0, 4));
  return data.time?.year || dateYear || 1991;
}

function getCurrentDate() {
  const data = getSave();
  return window.timeSystem?.currentDate || data.time?.currentDate || "1991-09-02";
}

function inCurrentYear(evt, year) {
  return (evt.minYear == null || year >= evt.minYear) && (evt.maxYear == null || year <= evt.maxYear);
}

function fillEventTemplate(template, values) {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, value),
    template
  );
}

function pickEventValues(house, bucket, actor, place) {
  const pools = CANON_DETAIL_POOLS[bucket];
  return {
    actor,
    place,
    subject: rand(pools.subject),
    professor: rand(pools.professor),
    object: rand(pools.object),
    spell: rand(pools.spell),
    creature: rand(pools.creature),
    result: rand(pools.result),
    detail: rand(pools.detail),
    house,
  };
}

function getFragmentPool(house, bucket, year) {
  const fragments = CANON_EVENT_FRAGMENTS[house];
  if (!fragments) return null;
  const actors = [
    ...fragments.actors,
    ...(GENERIC_HOUSE_ACTORS[house] || []),
  ].filter(actor => inCurrentYear(actor, year));
  const templates = [
    ...fragments.good,
    ...fragments.bad,
    ...COMMON_EVENT_TEMPLATES.good,
    ...COMMON_EVENT_TEMPLATES.bad,
  ].filter(template => {
    if (bucket === "school" && template.holidayOnly) return false;
    if (bucket === "holiday" && template.schoolOnly) return false;
    return inCurrentYear(template, year);
  });
  const places = bucket === "school" ? fragments.schoolPlaces : fragments.holidayPlaces;
  if (!actors.length || !templates.length || !places.length) return null;
  return { actors, templates, places };
}

function generateFragmentEvent(house, bucket, year) {
  const pool = getFragmentPool(house, bucket, year);
  if (!pool) return null;
  const actor = rand(pool.actors).name;
  const template = rand(pool.templates);
  const place = rand(pool.places);
  const [min, max] = template.points;
  const values = pickEventValues(house, bucket, actor, place);
  return {
    house,
    text: fillEventTemplate(template.text, values),
    points: randInt(min, max),
  };
}

function getCanonActionEvent(house, bucket, year) {
  const staticList = CANON_ACTION_EVENTS[house]?.[bucket] || [];
  const eligibleStatic = staticList.filter(evt => inCurrentYear(evt, year));
  if (eligibleStatic.length && Math.random() < 0.15) {
    const evt = rand(eligibleStatic);
    return { house, text: evt.text, points: evt.points };
  }
  return generateFragmentEvent(house, bucket, year) || (eligibleStatic.length ? { house, ...rand(eligibleStatic) } : null);
}

function isNoClassDay() {
  const currentDate = getCurrentDate();
  const date = new Date(currentDate);
  const day = date.getDay();
  const isWeekend = !isNaN(date.getTime()) && (day === 0 || day === 6);
  return isWeekend || !!window.isSchoolNoClassDate?.(currentDate) || !!window.isHoliday?.(currentDate);
}

function getRecentNpcEventTexts(limit = 180) {
  const data = getSave();
  const recentLogs = Array.isArray(data.log) ? data.log.slice(-limit) : [];
  return new Set(recentLogs.map(log => {
    const match = String(log).match(/\]\s*\[npc\](?:\[\w+\])?\s*(?:[🦁🐍🦅🦡]\s*)?(.+?)（[+-]?\d+分）/);
    return match?.[1] || "";
  }).filter(Boolean));
}

function ensureWorld(data = getSave()) {
  if (!data.world || typeof data.world !== "object") data.world = {};
  if (!Array.isArray(data.world.memory)) data.world.memory = [];
  if (!Array.isArray(data.world.rumors)) data.world.rumors = [];
  if (!Array.isArray(data.world.hooks)) data.world.hooks = [];
  if (!data.world.locationStatus || typeof data.world.locationStatus !== "object") data.world.locationStatus = {};
  if (!data.world.daily || typeof data.world.daily !== "object") data.world.daily = {};
  if (typeof data.world.dateBriefed !== "string") data.world.dateBriefed = "";
  return data.world;
}

function rememberWorldEvent(data, entry) {
  const world = ensureWorld(data);
  world.memory.push({
    date: data.time?.currentDate || getCurrentDate(),
    time: data.time?.nowTime || "上午",
    ...entry,
  });
  world.memory = world.memory.slice(-80);
}

function createWorldHook(data, hook) {
  const world = ensureWorld(data);
  const duplicate = world.hooks.some(item =>
    !item.consumed &&
    item.type === hook.type &&
    item.location === hook.location &&
    item.characterKey === hook.characterKey &&
    item.sourceText === hook.sourceText
  );
  if (duplicate) return false;

  const date = data.time?.currentDate || getCurrentDate();
  const time = data.time?.nowTime || "上午";
  world.hooks.push({
    id: `${date}-${time}-${hook.type}-${Math.random().toString(36).slice(2, 8)}`,
    date,
    time,
    consumed: false,
    ...hook,
  });
  world.hooks = world.hooks.slice(-40);
  return true;
}

function getActiveHooks(filter = {}) {
  const data = getSave();
  const world = ensureWorld(data);
  return world.hooks.filter(hook => {
    if (hook.consumed) return false;
    if (filter.location && hook.location !== filter.location) return false;
    if (filter.characterKey && hook.characterKey !== filter.characterKey) return false;
    return true;
  });
}

function consumeHook(hookId) {
  const data = getSave();
  const world = ensureWorld(data);
  const hook = world.hooks.find(item => item.id === hookId && !item.consumed);
  if (!hook) return null;
  hook.consumed = true;
  hook.consumedAt = `${data.time?.currentDate || getCurrentDate()} ${data.time?.nowTime || "上午"}`;
  setSave(data);
  return hook;
}

function currentYearTheme(year = getCurrentYear()) {
  return WORLD_YEAR_THEMES.find(theme => theme.year === year) || WORLD_YEAR_THEMES[0];
}

function getWorldValues(bucket) {
  const house = rand(Object.keys(CANON_EVENT_FRAGMENTS));
  const fragments = CANON_EVENT_FRAGMENTS[house];
  const places = bucket === "school" ? fragments.schoolPlaces : fragments.holidayPlaces;
  return pickEventValues(house, bucket, rand(GENERIC_HOUSE_ACTORS[house]).name, rand(places));
}

function generateRumor(bucket) {
  const year = getCurrentYear();
  const theme = currentYearTheme(year);
  if (theme?.rumors?.length && Math.random() < 0.35) return rand(theme.rumors);
  return fillEventTemplate(rand(WORLD_RUMOR_TEMPLATES), getWorldValues(bucket));
}

function updateLocationStatuses(data, count = 1) {
  const world = ensureWorld(data);
  const keys = Object.keys(LOCATION_STATUS_POOLS);
  for (let i = 0; i < count; i++) {
    const location = rand(keys);
    const status = rand(LOCATION_STATUS_POOLS[location]);
    world.locationStatus[location] = {
      text: status,
      date: data.time?.currentDate || getCurrentDate(),
      ttl: randInt(2, 5),
    };
    rememberWorldEvent(data, { type: "location", location, text: `${location}：${status}` });
  }
}

function ageLocationStatuses(data) {
  const world = ensureWorld(data);
  Object.entries(world.locationStatus).forEach(([location, status]) => {
    const ttl = (status?.ttl ?? 1) - 1;
    if (ttl <= 0) delete world.locationStatus[location];
    else world.locationStatus[location] = { ...status, ttl };
  });
}

function getWorldSummaryLine(data = getSave()) {
  const world = ensureWorld(data);
  const statuses = Object.entries(world.locationStatus || {}).slice(-2)
    .map(([location, status]) => `${location}：${status.text}`);
  if (statuses.length) return statuses.join("；");
  return currentYearTheme(getCurrentYear()).mood;
}

export function getLocationStatus(locationName) {
  const data = getSave();
  const status = ensureWorld(data).locationStatus?.[locationName];
  return status?.text || "";
}

export function renderLocationStatus(locationName) {
  const status = getLocationStatus(locationName);
  const hooks = getActiveHooks({ location: locationName });
  const clue = hooks.length ? `线索：${hooks[0].title || "这里似乎还有后续"}` : "";
  return [status ? `近况：${status}` : "", clue].filter(Boolean).join("｜");
}

function addStoryLog(text) {
  addLog(text, "story");
}

function buildMemoryFollowup(data) {
  const memory = ensureWorld(data).memory
    .filter(item => item.text && !["brief", "followup", "hookConsumed"].includes(item.type))
    .slice(-8);
  if (!memory.length) return null;
  const base = rand(memory);
  if (base.type === "course") {
    return `关于“${base.text}”，走廊里又多了一个版本：有人说下课后还有学生回去重试了一遍，结果让${base.location || "教室"}又热闹了一阵。`;
  }
  if (base.type === "relation" || base.type === "affinity") {
    return `关于“${base.text}”，长桌旁又有人低声提起。听起来，当事人并不想把这件事闹大。`;
  }
  if (base.type === "housePoints") {
    return `学院分沙漏旁还有人在讨论“${base.text}”。得分的学生被同院拍了拍肩，扣分的那边则安静了不少。`;
  }
  if (base.type === "rumor") {
    return `那条传闻又转了一圈：“${base.text}”已经被讲出了第三种版本。`;
  }
  return null;
}

function buildLocationFollowup(hook) {
  const source = hook.sourceText || "刚才听到的那条线索";
  if (hook.subject && hook.professor) {
    const details = [
      `你来到${hook.location}时，讲台边还留着没擦净的粉笔字。`,
      `几张课桌被推得不太整齐，像是下课后还有学生围在这里争论过一阵。`,
      `你听见门边两个学生提到，${hook.professor}下课后又单独提醒了一名学生。`,
      `这才解释了为什么“${source}”会一路从教室传到长桌旁。`,
    ];
    return details.join("\n\n");
  }
  return [
    `你来到${hook.location}追查“${source}”。`,
    "这里的气氛确实不太寻常，但真正有用的不是传闻本身，而是附近学生忽然压低的声音。",
    "你把几句零散的话拼在一起，终于明白这条线索为什么会被传开。",
  ].join("\n\n");
}

function buildCharacterFollowup(hook) {
  const name = hook.characterName || "对方";
  const source = hook.sourceText || "刚才那件事";
  const byKey = {
    harry: [`你提起“${source}”。`, `${name}先是一怔，像是没想到这件事已经传到你这里。`, "他压低声音说那不是他一个人的主意。罗恩也在旁边补了半句，又立刻停住，像是他们还没决定要不要把事情讲完。"],
    ron: [`你问起“${source}”。`, `${name}的耳朵有点发红，先咕哝说事情没有传闻里那么夸张。`, "可他很快又忍不住把最关键的一段讲给你听，讲到最后还小声补了一句：“别告诉赫敏我说漏嘴了。”"],
    hermione: [`你提起“${source}”。`, `${name}几乎立刻纠正了两个被传错的细节。`, "她说完才意识到自己讲得太认真，于是把书抱紧了一点，像是想把这份在意藏回课本后面。"],
    draco: [`你问起“${source}”。`, `${name}露出一点得意又警惕的表情。`, "他没有全说，只轻飘飘地丢出半句线索；可你听得出来，这件事后面还牵着斯莱特林长桌上的几句低语。"],
    neville: [`你问起“${source}”。`, `${name}紧张地捏了捏袍角。你没有催他。`, "他才断断续续把经过说完；这一次，讲到最后时他的声音比开头稳了一些。"],
    fredWeasley: [`你追问“${source}”。`, `${name}笑得太快了些，像是早就等着有人来问。`, "他承认里面有一半是真的，另一半“最好等乔治在场时再说”，然后把一颗不知道什么味道的糖塞回口袋。"],
    georgeWeasley: [`你追问“${source}”。`, `${name}认真地点头三秒，然后给出一句完全不像解释的解释。`, "至少你确定了，这件事和韦斯莱双胞胎脱不了关系，而且乔治负责的很可能是善后。"],
    ginnyWeasley: [`你提到“${source}”。`, `${name}有些不好意思，但还是告诉你她看到了一点别人没注意到的细节。`, "她说完后匆匆跑开，红头发在走廊拐角一闪就不见了。"],
    luna: [`你说起“${source}”。`, `${name}像是在回答一个非常正常的问题。`, "她的解释听起来很奇怪，里面却有一个细节和传闻完全对上。你一时不知道该怀疑传闻，还是怀疑自己太普通。"],
  };
  const lines = byKey[hook.characterKey] || [
    `你提起“${source}”。`,
    `${name}认真回应了你，没有把它当成普通闲聊。`,
    "你们把前因后果补齐，这条线索终于不再只是走廊里的一句话。",
  ];
  return lines.join("\n\n");
}

function getCharacterTopic(hook) {
  const name = hook.characterName || "";
  const source = hook.sourceText || "刚才那件事";
  const directTopics = {
    severusSnape: "刚才那道审视的目光",
    minervaMcGonagall: "她刚才在走廊里的点头",
    filiusFlitwick: "弗立维教授听说你练习后的反应",
    pomonaSprout: "温室边那次小小的认可",
    remusLupin: "卢平教授刚才温和的询问",
    harry: "哈利刚才那个像是认出你的点头",
    ron: "长桌旁那个顺手让出的位置",
    hermione: "赫敏替你留意到的那本参考书",
    draco: "马尔福刚才那个记仇的眼神",
    neville: "纳威刚才那句结结巴巴的道谢",
    fredWeasley: "弗雷德那个意味深长的眨眼",
    georgeWeasley: "乔治刚才顺手帮的小忙",
    ginnyWeasley: "金妮匆匆经过时的小声问好",
    luna: "卢娜刚才那句郑重其事的提醒",
  };
  if (hook.sourceKind === "direct" || (name && source.includes(name))) {
    return directTopics[hook.characterKey] || "刚才和对方有关的那件小事";
  }
  return source;
}

function isDirectCharacterHook(hook) {
  const name = hook.characterName || "";
  const source = hook.sourceText || "";
  return hook.sourceKind === "direct" || (name && source.includes(name));
}

function getDirectRelationDelta(hook) {
  if (typeof hook.relationshipDelta === "number") return hook.relationshipDelta;
  if (hook.characterKey === "draco" || hook.characterKey === "severusSnape") return -1;
  return 1;
}

function getDirectBackstory(hook) {
  const relationDelta = getDirectRelationDelta(hook);
  const positive = relationDelta >= 0;
  const byKey = {
    hermione: "她记得你上次在课后问过一个真正查过资料的人才会问的问题，所以路过书架时顺手替你留意了这本书。",
    ron: "你之前没有拿他的小失误开玩笑；在罗恩看来，这已经很够朋友了，所以他用最不隆重的方式给你留了个位置。",
    harry: "他记得你上次没有把麻烦推到别人身上。哈利不擅长把这种感谢说出口，于是只用点头代替。",
    neville: "你之前提醒他的那句话让他少出了一次丑。纳威记了很久，只是一直没找到合适的机会说谢谢。",
    fredWeasley: "弗雷德注意到你看见恶作剧时没有立刻告状，也没有装作完全不感兴趣；这让他觉得你可以被拉进旁观席。",
    georgeWeasley: "乔治帮你不是因为突然善心大发，而是因为他记得你之前替他们挡过一句不必要的追问。",
    ginnyWeasley: "金妮记得你没有在人多的时候追问她，也没有把她的小尴尬讲出去；她的小声问好更像一次试探性的回礼。",
    luna: "卢娜觉得你上次没有嘲笑她的说法。对她来说，这已经足够把你归入“可以认真说话的人”。",
    minervaMcGonagall: "麦格教授注意到你最近几次都准时、克制，而且没有在走廊里添乱。她不会夸得太明显，但她确实看见了。",
    filiusFlitwick: "弗立维教授听说你练习时没有只追求声势，而是在纠正发音。对他来说，这比一次漂亮的施法更值得鼓励。",
    pomonaSprout: "斯普劳特教授看重的是你没有踩到幼苗这种小事。很多学生只看见结果，她更在意你有没有照顾到周围。",
    remusLupin: "卢平教授记得你上次没有把别人的害怕当笑话。那让他觉得你也许能理解防御术真正要学的东西。",
    severusSnape: "斯内普教授并不是突然针对你。他注意到你手里的东西、你站的位置，以及你刚才那一瞬间的迟疑，然后把它们都算成了可疑。",
    draco: "马尔福记住的不是那件小事本身，而是你让他在旁人面前失了些主动权。他不一定要立刻报复，但他一定会先把账记下。",
  };
  return byKey[hook.characterKey] || (positive
    ? "对方不是无缘无故靠近你。你之前某个小小的选择被记住了，只是这份好意来得很轻，不像正式道谢。"
    : "对方不是随便看你不顺眼。你之前某个小动作碰到了对方在意的地方，所以这次反应才会显得格外明显。");
}

function buildDirectCharacterIntro(hook) {
  const name = hook.characterName || "对方";
  const byKey = {
    severusSnape: [
      "你没有追上去解释，也没有立刻低头躲开。",
      `${name}像是原本已经准备离开，却因为你没有慌张而停了一下。那一眼仍然冷得像地窖里的石墙，但至少不再只是路过时的审视。`,
    ],
    hermione: [
      "你在图书馆的书架旁找到赫敏时，她正把一本厚重的参考书从一叠资料里抽出来。",
      "她看见你过来，先把书脊上的灰拍掉，又很快补了一句：“我只是觉得你可能会用得上，不代表这可以替代你自己查资料。”",
    ],
    ron: [
      "你在长桌旁坐下时，罗恩把南瓜汁往你这边推了推，动作随意得像是根本没发生过。",
      "可他又偷偷看了你一眼，显然很想知道你有没有注意到这个小小的示好。",
    ],
    harry: [
      "你在走廊里遇见哈利，他刚才那个点头不像客套，更像是他确实记住了你。",
      "他停下脚步，手指还搭在书包带上，表情有点犹豫，但没有急着走开。",
    ],
    draco: [
      "你在走廊拐角追上马尔福，问他刚才为什么听见你的名字就露出那种表情。",
      "他停下来，先看了一眼你身后的空走廊，才慢慢转回视线。那副样子不像被冒犯，倒像是终于等到你自己送上门来。",
    ],
    neville: [
      "纳威说完谢谢以后还站在原地，像是怕自己说得太小声。",
      "你没有催他。他终于抬起头，脸还是红的，但比刚才稳了一点。",
    ],
    minervaMcGonagall: [
      `${name}已经走过你身边，又在两步之后停住。`,
      "她回头看了你一眼，那不是亲切的表情，却比平时少了一点严厉。",
    ],
    filiusFlitwick: [
      `${name}看见你时笑了笑，像是还记得刚才听说的那次练习。`,
      "他没有急着夸奖，只是抬起魔杖，示意你注意一个很小的发音差别。",
    ],
    pomonaSprout: [
      `${name}正在温室门口整理手套，看见你没有踩到幼苗，脸上的笑意更明显了些。`,
      "她挥手让你靠近一点，顺口提醒你别碰旁边那盆看起来太安静的植物。",
    ],
    luna: [
      "卢娜说完那句关于骚扰虻的话以后，仍然很认真地看着你。",
      "她似乎一点也不觉得这句话需要解释，但也愿意等你问下去。",
    ],
  };
  const lines = byKey[hook.characterKey] || [
    `你找到${name}时，对方还记得刚才那件小事。`,
    "这不像传闻，更像一次可以顺势接上的短暂交谈。",
  ];
  return lines.join("\n\n");
}

function getHookDisplaySource(hook) {
  if (!isDirectCharacterHook(hook)) return hook.sourceText || "";
  const byKey = {
    severusSnape: "斯内普教授在走廊里停下脚步，冷冷看了你一眼。",
    hermione: "赫敏在图书馆替你留意到一本可能有用的参考书。",
    ron: "罗恩在长桌旁给你让了个位置，还把南瓜汁推近了一点。",
    harry: "哈利经过走廊时朝你点了点头。",
    draco: "马尔福听见你的名字后挑了挑眉，显然把某件小事记在心里。",
    neville: "纳威结结巴巴地向你道谢，像是怕自己说得不够清楚。",
    minervaMcGonagall: "麦格教授看见你按时赶路，神色稍微缓和了一点。",
    filiusFlitwick: "弗立维教授听说你认真练习咒语，显得相当高兴。",
    pomonaSprout: "斯普劳特教授注意到你小心避开了温室边的幼苗。",
    remusLupin: "卢平教授温和地问起你最近的练习。",
    fredWeasley: "弗雷德冲你眨了眨眼，像是把你列入了某个旁观名单。",
    georgeWeasley: "乔治顺手帮你挡开了一场小麻烦。",
    ginnyWeasley: "金妮匆匆经过时小声向你问好。",
    luna: "卢娜认真告诉你，她觉得你今天身边没有骚扰虻。",
  };
  return byKey[hook.characterKey] || "刚才那件小事让你们之间多了一点可以继续说下去的话题。";
}

function buildCharacterIntro(hook) {
  const name = hook.characterName || "对方";
  const source = getCharacterTopic(hook);
  if (isDirectCharacterHook(hook)) return buildDirectCharacterIntro(hook);
  const byKey = {
    severusSnape: [
      `你在阴冷的走廊边提起“${source}”。`,
      `${name}停下脚步，目光慢慢落到你身上，像是在判断你是鲁莽、好奇，还是两者都有。`,
    ],
    minervaMcGonagall: [
      `你在楼梯平台旁叫住${name}，把“${source}”说得尽量简短。`,
      `她没有打断你，只是越听越严肃，像是已经在心里把事情分成事实和传闻两栏。`,
    ],
    filiusFlitwick: [
      `你提到“${source}”时，${name}从一摞羊皮纸后抬起头。`,
      `他没有先问是谁传的，反而很快注意到里面那个和咒语有关的细节。`,
    ],
    pomonaSprout: [
      `你在温室附近提起“${source}”。`,
      `${name}一边擦掉手套上的泥，一边示意你说下去；她关心的显然不只是学生有没有闯祸。`,
    ],
    remusLupin: [
      `你把“${source}”告诉${name}时，他没有露出惊讶。`,
      `他只是请你从头讲一遍，语气温和，却像已经听出了学生们漏掉的那一部分。`,
    ],
    harry: [
      `你在长桌旁提起“${source}”。`,
      `哈利先看了看罗恩，又看了看赫敏，像是在一秒钟里决定这件事能不能告诉你。`,
    ],
    ron: [
      `你刚提到“${source}”，罗恩的耳朵就红了。`,
      `他立刻说这事没有大家讲得那么夸张，可这句话本身听起来就很可疑。`,
    ],
    hermione: [
      `你还没把“${source}”讲完，赫敏已经皱起眉。`,
      `她不是生气你来问，而是明显忍不了这件事被传成现在这个样子。`,
    ],
    draco: [
      `你装作随意地提起“${source}”。`,
      `马尔福的笑意立刻变得锋利起来，像是你刚把一枚棋子推到了他喜欢的位置。`,
    ],
    neville: [
      `你避开人群，低声问纳威关于“${source}”的事。`,
      `他紧张地攥住袍角，但没有逃开；只是看起来需要一点时间把话说出来。`,
    ],
    fredWeasley: [
      `你提到“${source}”，弗雷德几乎立刻笑了。`,
      `那不是被问住的笑，更像是有人终于找到了正确的门把手。`,
    ],
    georgeWeasley: [
      `你问乔治关于“${source}”的事。`,
      `他用一种过分无辜的表情看着你，仿佛这座城堡里所有巧合都和他无关。`,
    ],
    ginnyWeasley: [
      `你在走廊边轻声叫住金妮，提起“${source}”。`,
      `她先低头看了一眼怀里的书，又很快抬起头，像是在鼓起勇气把自己看见的说清楚。`,
    ],
    luna: [
      `你问卢娜关于“${source}”的事。`,
      `她一点也不像被传闻打扰，反而像你终于问到了一个本来就该被认真讨论的问题。`,
    ],
  };
  const lines = byKey[hook.characterKey] || [
    `你找到${name}，提起“${source}”。`,
    `对方没有把它当成普通闲聊，反应里藏着一点值得追下去的东西。`,
  ];
  return lines.join("\n\n");
}

function buildDirectCharacterChoices(hook, choice) {
  const name = hook.characterName || "对方";
  const backstory = getDirectBackstory(hook);
  const byKey = {
    hermione: [
      choice("接过书并认真道谢", 2, [
        "你接过那本书，没有把这当成理所当然。",
        "赫敏的表情松了一点，但还是立刻指出你应该先看哪几章、哪些注释可以跳过。",
        "她说得很快，像是在掩饰自己其实很高兴有人认真听。",
      ]),
      choice("问她为什么想到你", 1, [
        "你问她为什么会觉得这本书适合你。",
        "赫敏抱紧怀里的资料，像是这个问题比查资料本身更不好回答。",
        `“因为你上次问的问题不算糟。”她说。${backstory}`,
      ]),
      choice("请她一起找下一条资料", 2, [
        "你没有急着离开，而是问她愿不愿意一起找下一条资料。",
        "赫敏先说自己还有很多事要做，可手已经伸向旁边的索引卡。",
        "几分钟后，你们并排站在书架前，她开始用一种很严肃的语气分配查找范围。",
      ]),
    ],
    severusSnape: [
      choice("安静等他先开口", 1, [
        "你没有解释，也没有急着证明自己无辜。",
        `${name}盯着你看了片刻，像是在确认你到底有没有意识到自己哪里危险。`,
        "“别把沉默误认成聪明。”他说完便移开视线。但他没有扣分，这已经接近一种宽容。",
      ]),
      choice("低声问自己哪里做错", 0, [
        "你压低声音问自己哪里做错了。",
        `${name}的眉毛动了一下，显然不喜欢这个问题，却更不喜欢学生不知道自己错在哪里。`,
        `他用一句极短的话指出了问题。${backstory}`,
      ]),
      choice("立刻退到一旁", 0, [
        "你没有继续挡在路中间，立刻退到一旁。",
        `${name}的袍角掠过你身边，没有停下。`,
        "几秒后你才意识到，他刚才看的不是你本人，而是你手里那件很容易惹麻烦的东西。",
      ]),
    ],
    ron: [
      choice("问他为什么突然这么好", 1, [
        "你看了看那杯被推过来的南瓜汁，直接问罗恩为什么突然这么照顾你。",
        "罗恩差点被自己的馅饼噎住，耳朵迅速红了起来。",
        backstory,
      ]),
      choice("把南瓜汁推回去一点", 1, [
        "你把南瓜汁又往中间推了一点，表示你看见了他的好意。",
        "罗恩咧嘴笑了，随即装作只是在够盘子里的土豆。",
        "这不是多正式的友谊宣言，但在长桌旁已经足够清楚。",
      ]),
      choice("问他今天作业写完没", 0, [
        "你顺口问他作业写完没有。",
        "罗恩脸上的轻松立刻僵住，像是你刚念出了一个危险咒语。",
        "他含糊其辞地换了话题，但还是把最后一块馅饼分给了你。",
      ]),
      choice("假装什么也没发现", 1, [
        "你假装没注意到那个小动作，只自然地坐下。",
        "罗恩看起来反而更自在，开始讲刚才长桌另一头发生的小混乱。",
        "有些好意被看穿会尴尬，被接住就够了。",
      ]),
    ],
    harry: [
      choice("问他是不是记得上次的事", 1, [
        "你问哈利，他是不是还记得上次那件小事。",
        "哈利低头笑了一下，像是被你说中了，却又不太习惯把感谢讲得太直白。",
        backstory,
      ]),
      choice("点头回应", 1, [
        "你也向哈利点了点头，没有把这一刻弄得太郑重。",
        "他像是松了口气，随后停下来和你并肩走了几步。",
        "你们没有聊什么大事，但那种不必解释的熟悉感多了一点。",
      ]),
      choice("问他是不是要去训练", 1, [
        "你问他是不是要去魁地奇训练。",
        "哈利的表情一下子亮了些，话也多起来。",
        "他没有说太多秘密，只抱怨了一句训练时间，又很快笑了。",
      ]),
      choice("提醒他别又惹麻烦", 0, [
        "你半开玩笑地提醒他别又惹麻烦。",
        "哈利苦笑了一下，像是觉得这建议很好，但命运通常不太听话。",
        "“我尽量。”他说。这听起来已经是他能给出的最大保证。",
      ]),
    ],
    draco: [
      choice("直接问他为什么记着你", 0, [
        "你没有绕弯，直接问马尔福为什么要把这件小事记在心里。",
        "他笑了一下，像是这个问题正中他的下怀。",
        `“因为有些人总以为自己不会被注意到。”他说。${backstory}`,
      ]),
      choice("反问他是不是很在意", -1, [
        "你问他是不是太在意你了。",
        "马尔福的笑容立刻收窄，旁边两个斯莱特林学生也安静下来。",
        "“别自作多情。”他说得很快。正因为太快，这句话反而显得没那么有底气。",
      ]),
      choice("提醒他别拿小事告状", 1, [
        "你提醒他，如果只是这点小事，拿去告状未免太难看。",
        "马尔福的脸色沉了一瞬，却没有立刻反驳。",
        "他大概确实想过这么做。你提前把这条路说出来，反而让它变得没那么好用了。",
      ]),
    ],
    neville: [
      choice("问他为什么特地道谢", 2, [
        "你问纳威为什么特地跑来向你道谢。",
        "他先摇头，又点头，像是终于决定把话说完整。",
        backstory,
      ]),
      choice("告诉他你听见了", 2, [
        "你告诉纳威，你听见了他的谢谢。",
        "他像是终于确定自己没有把话说丢，肩膀放松下来。",
        "“那就好。”他小声说，随即露出一点不好意思的笑。",
      ]),
      choice("问他那件事后来怎样", 1, [
        "你问他之前那件事后来怎么样了。",
        "纳威讲得很慢，中途还纠正了自己两次。",
        "但这一次他没有把责任全揽到自己身上，这已经是很大的进步。",
      ]),
      choice("陪他走一段", 2, [
        "你没有继续追问，只陪纳威往前走了一段。",
        "走廊里人声渐渐远了，他才小声补充了真正想说的话。",
        "那句话很短，却比刚才那句谢谢更像信任。",
      ]),
    ],
  };
  const fallback = [
    choice(getDirectRelationDelta(hook) >= 0 ? "问清楚为什么" : "直接问为什么", 1, [
      `你没有把${name}的反应当成偶然，而是直接问了原因。`,
      backstory,
      "这让你们之间的变化不再只是一个数字，而是有了可以接下去的前因后果。",
    ]),
    choice("自然接过话头", 1, [
      `你没有把这件小事说破，只顺着${name}的反应接了一句。`,
      "对方明显自在了一些，交谈也因此没有变成尴尬的追问。",
    ]),
    choice("认真道谢", 2, [
      "你认真道了谢，没有让这份好意轻飘飘地过去。",
      `${name}的反应很轻，却不像毫无触动。你们之间多了一点可以记住的东西。`,
    ]),
    choice("先不多问", 0, [
      "你决定先不多问，只把这次短暂互动记在心里。",
      "有些关系不是靠一句话推进的，尤其在霍格沃茨这样的地方。",
    ]),
  ];
  return byKey[hook.characterKey] || fallback;
}

function buildLocationChoices(hook) {
  const source = hook.sourceText || "刚才听到的那条线索";
  const place = hook.location || "这里";
  if (hook.subject) {
    return [
      {
        label: "查看课桌和黑板",
        result: [
          `你没有急着问人，而是先看了看${place}。`,
          `讲台旁的粉笔字、被推歪的课桌和地上几片碎纸拼在一起，说明“${source}”不是一句夸张传闻。`,
          `这更像是下课后又发生过一小段插曲，只是被学生们讲得越来越热闹。`,
        ].join("\n\n"),
      },
      {
        label: "问门口的学生",
        result: [
          `你在${place}门口拦下一名正要离开的学生。`,
          `对方一开始说“没什么”，但听你提起“${source}”后，忍不住补了两句。`,
          `${hook.professor || "教授"}确实在下课后又叫住了人，真正让大家议论的不是课堂本身，而是那之后短短几分钟里发生的事。`,
        ].join("\n\n"),
      },
      {
        label: "先记下细节",
        result: [
          `你把“${source}”记在心里，没有继续追问。`,
          `${place}里还有人来来往往，现在不是把事情问开的好时机。`,
          `但你已经知道该留意谁、留意哪张课桌、以及下次再听到这件事时该往哪里看。`,
        ].join("\n\n"),
      },
    ];
  }
  return [
    {
      label: "顺着声音找过去",
      result: [
        `你顺着${place}附近压低的说话声走过去。`,
        `学生们一看见你靠近就换了话题，但你还是听见了“${source}”里被省掉的那一小截。`,
        "这条线索并不轰动，却足够说明城堡里确实有人在悄悄关注它。",
      ].join("\n\n"),
    },
    {
      label: "观察周围的变化",
      result: [
        `你没有打断任何人，只在${place}多停了一会儿。`,
        "几幅画像的眼神、学生突然收住的话头、还有被匆匆带走的羊皮纸，都让这条线索变得更具体了。",
        `传闻说的是“${source}”，而你看到的是它在城堡里留下的余波。`,
      ].join("\n\n"),
    },
    {
      label: "当作普通传闻放过",
      result: [
        `你最终没有继续追查“${source}”。`,
        "霍格沃茨每天都有太多半真半假的故事，有些故事越追越乱。你决定先让它留在传闻里。",
      ].join("\n\n"),
    },
  ];
}

function buildCharacterChoices(hook) {
  const name = hook.characterName || "对方";
  const source = getCharacterTopic(hook);
  const choice = (label, delta, paragraphs) => ({
    label,
    delta,
    result: paragraphs.join("\n\n"),
  });
  if (isDirectCharacterHook(hook)) return buildDirectCharacterChoices(hook, choice);

  const byKey = {
    severusSnape: [
      choice("把话说得尽量精确", 0, [
        `你没有寒暄，直接把“${source}”里最可疑的地方说出来。`,
        `${name}没有立刻回答。他只是看着你，像在衡量你到底是观察到了什么，还是只是碰巧说中了。`,
        `“至少你没有把传闻原样背一遍。”他说。语气仍然冷，但没有把你赶走。`,
      ]),
      choice("先承认自己只是听说", 1, [
        `你先说明自己只是听见了“${source}”，并不确定真假。`,
        `${name}的脸色没有变好，但也没有变得更坏。`,
        `“难得。”他慢慢说，“知道自己不知道，比大多数学生强一点。”他没有解释更多，却把最关键的错误版本指出来了。`,
      ]),
      choice("沉默等他开口", 1, [
        `你没有继续追问，只站在原地等。`,
        `沉默拖得很长。${name}终于移开视线，低声说了一句几乎像批改意见的话。`,
        `那句话不完整，却足够让你明白：这件事真正重要的地方，不在学生传的那一段。`,
      ]),
    ],
    minervaMcGonagall: [
      choice("说明你担心有人被误会", 2, [
        `你提起“${source}”，重点不是八卦，而是担心有人被传错。`,
        `${name}的神情严肃起来。她听完后点了一下头，像是认可你问这件事的理由。`,
        `“传闻不是证据。”她说，“但愿意先确认事实，是一种难得的克制。”`,
      ]),
      choice("请她判断该不该管", 1, [
        `你问${name}，这件事是否该由学生插手。`,
        `她没有立刻给答案，而是反问你已经看见了什么、听见了什么。`,
        `等你说完，她只说：“如果你决定做什么，就把后果也算进去。”`,
      ]),
      choice("承诺不添乱", 1, [
        `你告诉${name}，你不会把“${source}”继续传下去。`,
        `她看了你一眼，表情比刚才缓和一点。`,
        `“很好。”她说，“霍格沃茨最不缺会添油加醋的人。”`,
      ]),
    ],
    filiusFlitwick: [
      choice("问他咒语细节", 2, [
        `你没有先问谁出错，而是问“${source}”里提到的咒语细节。`,
        `${name}立刻精神起来，甚至在空气中比划了一下魔杖角度。`,
        `他说到一半才意识到自己讲得太细，笑着补了一句：“当然，这也说明你听得很认真。”`,
      ]),
      choice("说你想避免同样错误", 1, [
        `你说自己想弄清楚“${source}”，免得下次练习时犯同样的错。`,
        `${name}很高兴你把传闻当成学习机会。`,
        `他没有说出所有人的名字，只把最值得注意的那个发音问题提醒了你。`,
      ]),
      choice("夸那次施法很漂亮", 1, [
        `你提到“${source}”时，顺口说那次施法听起来很漂亮。`,
        `${name}笑了起来，声音轻快。`,
        `“漂亮不只是结果，”他说，“还有控制。记住这一点。”`,
      ]),
    ],
    pomonaSprout: [
      choice("问植物有没有受伤", 2, [
        `你问起“${source}”时，第一句问的是植物有没有受伤。`,
        `${name}立刻露出赞许的神色。`,
        `她告诉你事情没有传得那么严重，还顺手教你辨认叶片卷边代表的真正问题。`,
      ]),
      choice("主动提出帮忙收拾", 2, [
        `你没有继续追问细节，而是问需不需要帮忙收拾。`,
        `${name}大笑起来，把一副手套递给你。`,
        `等你们把泥土清完，她才把事情原委慢慢讲给你听。`,
      ]),
      choice("问学生是不是太紧张", 1, [
        `你问“${source}”是不是因为学生太紧张。`,
        `${name}叹了口气，又有点心软。`,
        `“很多事故不是因为笨，”她说，“是因为他们太害怕犯错。”`,
      ]),
    ],
    remusLupin: [
      choice("温和地问他是否需要帮忙", 2, [
        `你提起“${source}”时，没有追问细节，只问是否需要帮忙。`,
        `${name}看起来有些疲惫，却认真向你道谢。`,
        `他补充了一个被学生传漏的关键点：当时有人其实是在保护另一个人。`,
      ]),
      choice("问课堂上真正危险的地方", 1, [
        `你问${name}，“${source}”里真正危险的地方是什么。`,
        `他没有把你当成爱听热闹的学生，而是把问题拆开讲给你听。`,
        `“恐惧本身不丢人，”他说，“不知道怎么面对它，才会让人出错。”`,
      ]),
      choice("递给他一块巧克力", 2, [
        `你没有多问，只把一小块巧克力递过去。`,
        `${name}怔了一下，随后笑得很轻。`,
        `“这通常是我做的事。”他说。气氛因此松下来，他也愿意多讲一点。`,
      ]),
    ],
    harry: [
      choice("问他是不是遇到麻烦", 1, [
        `你问哈利是不是因为“${source}”遇到了麻烦。`,
        `他下意识看向罗恩，像是在确认能不能说。`,
        `最后他只承认事情确实没传闻那么简单，但你听得出，他愿意让你知道这一点。`,
      ]),
      choice("提到罗恩也在场", 0, [
        `你提到罗恩也许知道“${source}”的另一半。`,
        `哈利差点笑出来，又很快压住。`,
        `“罗恩会说得比我夸张三倍。”他说。这句话本身已经透露了不少。`,
      ]),
      choice("说你不会告诉教授", 2, [
        `你告诉哈利，你不是来告状的。`,
        `他明显放松了一点。`,
        `他说那件事本来只是想帮忙，后来才变得难以解释。你相信他说的是实话。`,
      ]),
    ],
    ron: [
      choice("问他到底发生了什么", 1, [
        `你问罗恩“${source}”到底是怎么回事。`,
        `他的耳朵立刻红了。`,
        `他先说“没什么”，然后在三秒内把“没什么”讲成了一整段。`,
      ]),
      choice("用玩笑让他放松", 1, [
        `你用玩笑把“${source}”带过去。`,
        `罗恩先是瞪你，随后自己也笑了。`,
        `笑过以后，他讲得顺多了，还补了一句：“这部分别让赫敏知道。”`,
      ]),
      choice("保证不告诉赫敏", 2, [
        `你保证不会把这件事告诉赫敏。`,
        `罗恩立刻露出如释重负的表情。`,
        `他把最丢脸的一段讲了出来。你听完后觉得，传闻已经算很客气了。`,
      ]),
    ],
    hermione: [
      choice("请她纠正传闻细节", 2, [
        `你请赫敏纠正“${source}”里被传错的地方。`,
        `她几乎立刻开始纠正，从时间顺序到措辞都不放过。`,
        `讲到最后，她才发现你一直在认真听，于是声音小了一点：“总之，事实应该被说清楚。”`,
      ]),
      choice("问她为什么在意", 1, [
        `你问赫敏为什么这么在意“${source}”。`,
        `她抱紧书，像是这个问题比传闻本身更难回答。`,
        `“因为错的说法会伤人。”她最后说。语气很硬，但不是冲你。`,
      ]),
      choice("帮她把书抱稳", 1, [
        `你没有继续追问，而是帮赫敏扶住快滑下来的书。`,
        `她愣了一下，小声说了句谢谢。`,
        `过了一会儿，她主动补充了一个细节，像是用事实回报你的安静。`,
      ]),
    ],
    draco: [
      choice("装作随口一问", 0, [
        `你装作只是随口提起“${source}”。`,
        `马尔福立刻看出你在试探，但他似乎很享受这种你来我往。`,
        `他给了你一个半真半假的答案。假话很浮夸，真话藏在他停顿的地方。`,
      ]),
      choice("反问他知道多少", -1, [
        `你反问马尔福到底知道多少。`,
        `他的笑容变冷了一点。`,
        `“比你多。”他说。也许是真的，也许只是他不愿意输掉这场对话。`,
      ]),
      choice("让他别牵连别人", 1, [
        `你提醒马尔福，别把“${source}”牵连到无关的人身上。`,
        `他像是听见了什么可笑的话，却没有立刻反驳。`,
        `这短短的停顿比回答更有用。至少他知道你看出了重点。`,
      ]),
    ],
    neville: [
      choice("问他有没有受伤", 2, [
        `你没有问纳威出了什么丑，只问他有没有受伤。`,
        `他愣住，然后摇摇头。`,
        `“没有。”他说，“就是有点吓人。”这句话说完，他反而没那么紧张了。`,
      ]),
      choice("帮他离开人群", 2, [
        `你没有当着那群学生继续问，而是帮纳威从人群里走出来。`,
        `离开视线后，他才小声把经过讲给你听。`,
        `他说得不快，但比你想象得清楚。`,
      ]),
      choice("告诉他做得不错", 1, [
        `你告诉纳威，他刚才做得不错。`,
        `他脸红得更厉害，却没有否认。`,
        `过了一会儿，他小声说：“我只是……不想再躲了。”`,
      ]),
    ],
    fredWeasley: [
      choice("问他是不是早就知道", 1, [
        `你问弗雷德是不是早就知道“${source}”会传开。`,
        `${name}露出一种“这问题问得很好”的笑容。`,
        `“早就知道？不不不。”他说，“顶多是合理预测。”他没有把经过全讲完，但你已经听出乔治一定也在里面。`,
      ]),
      choice("问乔治在哪里", 1, [
        `你没有追问弗雷德本人，反而问乔治在哪里。`,
        `${name}的笑容停了一拍，随即变得更灿烂。`,
        `“聪明。”他说，“不过如果乔治现在不在，那通常说明最精彩的部分已经发生了。”`,
      ]),
      choice("提醒他别害到低年级", 2, [
        `你提醒弗雷德，别让“${source}”牵连到低年级学生。`,
        `${name}难得没有立刻开玩笑。`,
        `他把手里的小玩意收进口袋，说：“我们有原则。”听起来像玩笑，但这次不像全是假话。`,
      ]),
    ],
    georgeWeasley: [
      choice("让他补全弗雷德没说的部分", 1, [
        `你让乔治补全弗雷德没有说完的那一半。`,
        `${name}认真地点了点头，认真到明显是在装。`,
        `他给出的版本比弗雷德更短，却更接近真相：这件事不是失控，只是比他们预计的响了一点。`,
      ]),
      choice("问他负责哪一段", 1, [
        `你问乔治在“${source}”里负责哪一段。`,
        `${name}想了想，说：“从法律角度讲，我可能只是路过。”`,
        `你听出这句话的重点不在“路过”，而在“可能”。`,
      ]),
      choice("装作完全相信他", 0, [
        `你装作完全相信乔治的解释。`,
        `${name}反而眯起眼看你，像是觉得你比传闻本身更可疑。`,
        `他最后笑了笑，把一个关键地点说漏了出来。`,
      ]),
    ],
    ginnyWeasley: [
      choice("低声问她看见了什么", 2, [
        `你没有在人多的地方追问，只低声问金妮看见了什么。`,
        `${name}先看了看周围，确认没人盯着她。`,
        `她说得很快，但细节很准。她不是想参与热闹，只是不想让真正发生的事被说歪。`,
      ]),
      choice("说你不是来笑她的", 2, [
        `你先说明自己不是来笑她，也不是来追着传闲话。`,
        `${name}的肩膀明显放松了一点。`,
        `她小声补充了一个别人忽略的动作。那一下很短，却足够改变你对整件事的判断。`,
      ]),
      choice("问她要不要一起走开", 1, [
        `你问金妮要不要先离开人群。`,
        `${name}点点头，抱紧书跟你走到走廊边上。`,
        `离开那些目光以后，她终于把话说完整了。`,
      ]),
    ],
    luna: [
      choice("认真听她的奇怪解释", 2, [
        `你没有打断卢娜关于“${source}”的解释。`,
        `${name}说到一半，提到了一个没人会编进传闻里的细节。`,
        `那听起来仍然很古怪，却奇妙地和你听见的另一条线索对上了。`,
      ]),
      choice("问她看见了什么而不是听见什么", 2, [
        `你问卢娜亲眼看见了什么，而不是别人怎么说。`,
        `${name}歪了歪头，像是很高兴你问对了问题。`,
        `她描述的画面和长桌上传开的版本不同，却更安静，也更可信。`,
      ]),
      choice("顺着她的说法继续问", 1, [
        `你顺着卢娜的说法继续问下去。`,
        `${name}一点也不意外，甚至像早就知道你会这么问。`,
        `她给了你一个方向：不要看最吵的人，去看那个一直没说话的人。`,
      ]),
    ],
  };
  const fallback = [
    choice("顺着传闻问一句", 1, [
      `你顺着“${source}”问了一句。`,
      `${name}没有把话完全说开，但你从反应里看出这件事确实有后续。`,
    ]),
    choice("先观察对方反应", 0, [
      `你没有急着追问，只观察${name}听见“${source}”时的反应。`,
      `那一瞬间的停顿，比回答更能说明问题。`,
    ]),
    choice("表示你不会乱传", 2, [
      `你告诉${name}，你不会把“${source}”继续传出去。`,
      `对方因此多说了一点，让这条线索有了更清楚的轮廓。`,
    ]),
  ];
  return byKey[hook.characterKey] || fallback;
}
function resolveWorldHookChoice(hook, choice) {
  if (choice.delta && hook.characterKey && window.affinitySystem?.addAffinity) {
    window.affinitySystem.addAffinity(hook.characterKey, choice.delta, "世界线索选择");
  }
  const data = getSave();
  rememberWorldEvent(data, {
    type: "hookChoice",
    key: hook.characterKey,
    location: hook.location,
    text: choice.result,
  });
  setSave(data);
  addStoryLog(`${hook.type === "character" ? "💬 线索对话" : "🔎 线索后续"}：${compactLogText(choice.result)}`);
}

function escapeHtml(text = "") {
  return String(text).replace(/[&<>"']/g, ch => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

function renderParagraphs(text = "") {
  return String(text)
    .split(/\n{2,}/)
    .map(part => part.trim())
    .filter(Boolean)
    .map(part => `<p>${escapeHtml(part)}</p>`)
    .join("");
}

function compactLogText(text = "") {
  return String(text).replace(/\s*\n+\s*/g, " ").trim();
}

function maybeLogRumor(data, bucket) {
  if (Math.random() > 0.45) return null;
  const rumor = generateRumor(bucket);
  const world = ensureWorld(data);
  if (world.rumors.slice(-12).some(item => item.text === rumor)) return null;
  world.rumors.push({ date: data.time?.currentDate || getCurrentDate(), text: rumor });
  world.rumors = world.rumors.slice(-40);
  rememberWorldEvent(data, { type: "rumor", text: rumor });
  return `🗞️ 校园传闻：${rumor}`;
}

function maybeLogMemoryFollowup(data) {
  const memory = ensureWorld(data).memory;
  if (memory.length < 3 || Math.random() > 0.25) return null;
  const followup = buildMemoryFollowup(data) || rand(WORLD_MEMORY_FOLLOWUPS);
  rememberWorldEvent(data, { type: "followup", text: followup });
  return `💬 后续：${followup}`;
}

function maybeLogRelationEvent(data) {
  if (Math.random() > 0.35) return null;
  const year = getCurrentYear();
  const options = WORLD_RELATION_EVENTS.filter(evt => inCurrentYear(evt, year));
  if (!options.length) return null;
  const event = rand(options);
  rememberWorldEvent(data, { type: "relation", key: event.key, text: event.text });
  if (event.key) {
    createWorldHook(data, {
      type: "character",
      characterKey: event.key,
      characterName: event.name,
      title: `${event.name}似乎知道后续`,
      sourceText: event.text,
      delta: 1,
    });
  }
  return `👥 人际动态：${event.text}`;
}

function maybeLogCourseDynamic(data) {
  if (isNoClassDay() || Math.random() > 0.5) return null;
  const year = getCurrentYear();
  const options = COURSE_DYNAMIC_EVENTS.filter(evt => inCurrentYear(evt, year));
  if (!options.length) return null;
  const event = rand(options);
  const world = ensureWorld(data);
  if (world.memory.slice(-12).some(item => item.type === "course" && item.text === event.text)) return null;
  world.locationStatus[event.location] = {
    text: `${event.professor}刚上完${event.subject}`,
    date: data.time?.currentDate || getCurrentDate(),
    ttl: randInt(2, 4),
  };
  rememberWorldEvent(data, {
    type: "course",
    subject: event.subject,
    location: event.location,
    text: event.text,
  });
  createWorldHook(data, {
    type: "location",
    location: event.location,
    title: `${event.subject}留下了后续`,
    sourceText: event.text,
    subject: event.subject,
    professor: event.professor,
  });
  return `📚 课程动态：${event.text}`;
}

function maybeApplyWorldAffinity() {
  if (Math.random() > 0.25) return;
  if (!window.affinitySystem?.addAffinity) return;

  const year = getCurrentYear();
  const options = WORLD_AFFINITY_EVENTS.filter(evt => inCurrentYear(evt, year));
  if (!options.length) return;

  const event = rand(options);
  window.affinitySystem.addAffinity(event.key, event.delta, "背景世界流");

  const data = getSave();
  rememberWorldEvent(data, {
    type: "affinity",
    key: event.key,
    delta: event.delta,
    text: event.text,
  });
  createWorldHook(data, {
    type: "character",
    characterKey: event.key,
    characterName: event.name,
    title: `找${event.name}聊聊`,
    sourceText: event.text,
    sourceKind: "direct",
    relationshipDelta: event.delta,
    delta: event.delta > 0 ? 1 : 0,
  });
  setSave(data);

  const sign = event.delta > 0 ? "+" : "";
  addStoryLog(`💛 关系波动：${event.text}（${event.name}${sign}${event.delta}）`);
}

export function getLocationHooks(locationName) {
  return getActiveHooks({ location: locationName });
}

export function getCharacterHooks(characterKey) {
  return getActiveHooks({ characterKey });
}

export function triggerLocationHook(locationName) {
  const hook = getLocationHooks(locationName)[0];
  if (!hook) return "";
  const consumed = consumeHook(hook.id);
  if (!consumed) return "";
  const intro = buildLocationFollowup(consumed);
  const choices = buildLocationChoices(consumed);
  const data = getSave();
  rememberWorldEvent(data, { type: "hookConsumed", text: intro });
  setSave(data);
  showWorldHookDialog({ ...consumed, followup: intro, choices });
  return `｜🔎 你发现了和刚才传闻有关的线索，正在决定怎么处理。`;
}

export function triggerCharacterHook(characterKey) {
  const hook = getCharacterHooks(characterKey)[0];
  if (!hook) return false;
  const consumed = consumeHook(hook.id);
  if (!consumed) return false;

  const followup = buildCharacterIntro(consumed);
  const choices = buildCharacterChoices(consumed);
  const data = getSave();
  rememberWorldEvent(data, { type: "hookConsumed", key: characterKey, text: followup });
  setSave(data);
  showWorldHookDialog({ ...consumed, followup, choices });
  return true;
}

function showWorldHookDialog(hook) {
  document.getElementById("world-hook-modal")?.remove();
  const modal = document.createElement("div");
  modal.id = "world-hook-modal";
  modal.className = "affinity-modal-overlay";
  const choices = Array.isArray(hook.choices) ? hook.choices : [];
  const displaySource = getHookDisplaySource(hook);
  modal.innerHTML = `
    <div class="affinity-modal-box">
      <div class="affinity-enc-header">
        <span class="affinity-enc-icon">💬</span>
        <span class="affinity-enc-name">${hook.characterName || "线索后续"}</span>
        <span class="affinity-enc-tag">线索跟进</span>
      </div>
      <div class="affinity-enc-text world-hook-source">${renderParagraphs(displaySource)}</div>
      <div class="affinity-enc-response world-hook-response" style="display:block">${renderParagraphs(hook.followup || "")}</div>
      ${choices.length ? `
        <div class="affinity-enc-choices world-hook-choices">
          ${choices.map((choice, i) => `<button class="affinity-enc-choice-btn" data-idx="${i}">${escapeHtml(choice.label)}</button>`).join("")}
        </div>
      ` : ""}
      <button class="affinity-enc-close" id="world-hook-close" style="${choices.length ? "display:none" : ""}">继续</button>
    </div>`;
  document.body.appendChild(modal);
  const responseEl = modal.querySelector(".world-hook-response");
  const closeBtn = modal.querySelector("#world-hook-close");
  modal.querySelectorAll(".affinity-enc-choice-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const choice = choices[Number(btn.dataset.idx)];
      if (!choice) return;
      modal.querySelectorAll(".affinity-enc-choice-btn").forEach(other => {
        other.disabled = true;
        other.style.opacity = other === btn ? "1" : "0.35";
      });
      resolveWorldHookChoice(hook, choice);
      if (responseEl) responseEl.innerHTML = renderParagraphs(choice.result);
      if (closeBtn) closeBtn.style.display = "block";
      window.refreshAll?.();
    });
  });
  closeBtn?.addEventListener("click", () => modal.remove());
  modal.addEventListener("click", e => {
    if (e.target === modal && (!choices.length || closeBtn?.style.display === "block")) modal.remove();
  });
}

export function triggerDailyBrief(force = false) {
  const data = getSave();
  const world = ensureWorld(data);
  const date = data.time?.currentDate || getCurrentDate();
  if (!force && world.dateBriefed === date) return false;

  const year = getCurrentYear();
  const theme = currentYearTheme(year);
  const noClassDay = isNoClassDay();
  const dateEvent = window.getDateEventName?.(date) || "";
  const summary = getWorldSummaryLine(data);
  const classLine = noClassDay
    ? (dateEvent ? `今天不上课，${dateEvent}让城堡节奏慢了下来。` : "今天不上课，学生们更多地在公共区域和场地间活动。")
    : "今天照常上课，课程表和学院分都在悄悄推动着各院气氛。";

  world.dateBriefed = date;
  world.daily = { date, mood: theme.mood, summary };
  ageLocationStatuses(data);
  updateLocationStatuses(data, 2);
  rememberWorldEvent(data, { type: "brief", text: `${classLine}${theme.mood}` });
  setSave(data);
  addStoryLog(`📰 城堡动向：${date}。${classLine}${theme.mood} ${summary}`);
  return true;
}

function generateNpcEvents() {
  const data = getSave();
  const playerHouseKey = HOUSE_MAP[data.player?.house] || "gryffindor";
  const houses = Object.keys(NPC_EVENTS);
  const events = [];
  const count = 1 + Math.floor(Math.random() * 3);
  const holiday = isNoClassDay();

  for (let i = 0; i < count; i++) {
    const house = rand(houses);
    const eventList = holiday ? NPC_EVENTS[house].holiday : NPC_EVENTS[house].school;
    const evt = rand(eventList);
    events.push({ house, ...evt });
  }

  return events;
}

function generateNpcActionEvents() {
  const houses = Object.keys(CANON_ACTION_EVENTS);
  const events = [];
  const count = 1 + Math.floor(Math.random() * 3);
  const noClassDay = isNoClassDay();
  const bucket = noClassDay ? "holiday" : "school";
  const year = getCurrentYear();
  const usedKeys = new Set();
  const recentTexts = getRecentNpcEventTexts();

  for (let i = 0, attempts = 0; i < count && attempts < count * 24; attempts++) {
    const house = rand(houses);
    const evt = getCanonActionEvent(house, bucket, year);
    if (!evt) continue;
    const eventKey = `${house}:${evt.text}`;
    if (usedKeys.has(eventKey)) continue;
    if (recentTexts.has(evt.text) && attempts < count * 20) continue;
    usedKeys.add(eventKey);
    events.push(evt);
    i++;
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
    rememberWorldEvent(data, { type: "housePoints", house: evt.house, text: evt.text, points: evt.points });
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

export function triggerNpcActionEvents() {
  triggerDailyBrief();
  const events = generateNpcActionEvents();
  if (events.length > 0) applyNpcEvents(events);
  const data = getSave();
  const bucket = isNoClassDay() ? "holiday" : "school";
  const worldLogs = [];
  if (Math.random() < 0.55) updateLocationStatuses(data, 1);
  [maybeLogRumor(data, bucket), maybeLogRelationEvent(data), maybeLogCourseDynamic(data), maybeLogMemoryFollowup(data)]
    .filter(Boolean)
    .forEach(log => worldLogs.push(log));
  setSave(data);
  worldLogs.forEach(addStoryLog);
  maybeApplyWorldAffinity();
}

window.npcEvents = {
  triggerNpcDailyEvents,
  triggerNpcActionEvents,
  triggerDailyBrief,
  getLocationStatus,
  renderLocationStatus,
  getLocationHooks,
  getCharacterHooks,
  triggerLocationHook,
  triggerCharacterHook,
};

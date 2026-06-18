/**
 * daily-quest-expansion.js
 * 大规模日常任务扩展包。
 *
 * 这里使用人工编写的人物轴、地点轴、物件轴、传闻轴和完成反馈轴组合出大量任务。
 * 每条生成任务都有稳定 id、完整文案字段、任务语义目标和奖励组合。
 */

const classmates = [
  { key: "neville", name: "纳威", thing: "莱福", tone: "紧张地把空盒子抱在怀里", rewardItem: "巧克力蛙" },
  { key: "ron", name: "罗恩", thing: "巫师棋子", tone: "嘴上说不是很急，眼睛却一直往棋盘瞟", rewardItem: "南瓜馅饼" },
  { key: "hermione", name: "赫敏", thing: "借阅卡", tone: "把问题按重要程度排好了顺序", rewardItem: "巧克力蛙" },
  { key: "harry", name: "哈利", thing: "训练手套", tone: "尽量说得轻松，但手已经按在魔杖上", rewardItem: "坩埚蛋糕" },
  { key: "luna", name: "露娜", thing: "一张画着月亮的纸片", tone: "像在描述一件非常普通又非常重要的事", rewardItem: "巧克力蛙" },
  { key: "ginnyWeasley", name: "金妮", thing: "没有署名的信封", tone: "把信封压在书下，只露出一角", rewardItem: "南瓜馅饼" },
  { key: "fredWeasley", name: "弗雷德", thing: "试验说明书", tone: "保证这一次绝对没有爆炸风险", rewardItem: "坩埚蛋糕" },
  { key: "georgeWeasley", name: "乔治", thing: "备用引线", tone: "补充说风险通常只发生在别人身上", rewardItem: "坩埚蛋糕" },
  { key: "draco", name: "德拉科", thing: "银色袖扣", tone: "说得像命令，但显然不想让太多人知道", rewardItem: "巧克力蛙" },
  { key: "pansy", name: "潘西", thing: "绿缎发带", tone: "把请求说得像一次礼貌的挑剔", rewardItem: "南瓜馅饼" },
  { key: "cedricDiggory", name: "塞德里克", thing: "级长记录夹", tone: "先确认这不会耽误你的安排", rewardItem: "巧克力蛙" },
  { key: "hannahAbbott", name: "汉娜", thing: "草药课围裙", tone: "小声解释自己可能把它落在了不该落的地方", rewardItem: "南瓜馅饼" },
];

const lostPlaces = [
  { label: "画像吵得最凶的走廊", location: "二楼走廊", clue: "旁边一幅画像坚持说它什么都没看见，语气很可疑。" },
  { label: "楼梯今天改道的转角", location: "移动楼梯", clue: "楼梯扶手上有一道新鲜擦痕，像是谁匆忙抓过。" },
  { label: "图书馆靠窗的长桌下", location: "城堡图书馆", clue: "平斯夫人看了你一眼，意思是可以找，但不许吵。" },
  { label: "大礼堂长桌尽头", location: "大礼堂", clue: "餐具们非常配合地让开了一条窄缝。" },
  { label: "公共休息室壁炉旁", location: "公共休息室", clue: "壁炉火光把影子晃得像在偷偷指路。" },
  { label: "猫头鹰棚的旧木梁下", location: "猫头鹰棚", clue: "一只猫头鹰歪头看你，像觉得你终于发现了重点。" },
  { label: "温室外的泥脚印旁", location: "草药温室", clue: "泥点从门口一路延到一只倒扣的花盆后面。" },
  { label: "决斗场看台角落", location: "决斗场", clue: "那里还留着几根被咒语烤卷的羽毛。" },
];

const professors = [
  { key: "minervaMcGonagall", name: "麦格教授", icon: "📎", place: "变形术教室", manner: "语气平稳，但每个字都像已经排好队", material: "月长石碎块" },
  { key: "severusSnape", name: "斯内普", icon: "⚗️", place: "魔药课教室", manner: "只留下几行冷冰冰的字", material: "干荨麻" },
  { key: "filiusFlitwick", name: "弗立维教授", icon: "✨", place: "咒语课教室", manner: "从一摞书后探出头来，显得很高兴", material: "飞行羽毛" },
  { key: "pomonaSprout", name: "斯普劳特教授", icon: "🌿", place: "草药温室", manner: "手套上还沾着泥，笑得很实在", material: "蒲公英" },
  { key: "poppyPomfrey", name: "庞弗雷夫人", icon: "🩹", place: "校医院", manner: "一边检查药柜一边提醒你别跑", material: "疗伤花粉" },
  { key: "rolandaHooch", name: "霍琦夫人", icon: "🧹", place: "飞行训练场", manner: "把哨子挂回脖子上，直接说明要求", material: "飞行羽毛" },
  { key: "rubeusHagrid", name: "海格", icon: "🪵", place: "禁林边缘", manner: "说这事一点都不危险，但声音低了半截", material: "老龄苔藓" },
  { key: "auroraSinistra", name: "辛尼斯塔教授", icon: "🔭", place: "天文塔", manner: "指尖还沾着粉笔灰，目光停在星图上", material: "星尘粉" },
  { key: "septaVector", name: "维克多教授", icon: "🔢", place: "算术占卜教室", manner: "把清单折成非常准确的三等分", material: "古籍墨粉" },
  { key: "cuthbertBinns", name: "宾斯教授", icon: "📜", place: "魔法史教室", manner: "像刚想起你是活人一样停顿了一下", material: "古老墨水" },
  { key: "charityBurbage", name: "布巴吉教授", icon: "🏫", place: "麻瓜研究教室", manner: "把麻瓜物件摆得整整齐齐", material: "麻瓜报纸剪片" },
  { key: "albusDumbledore", name: "邓布利多", icon: "🍬", place: "校长室门外", manner: "像只是顺路想起一件小事", material: "蜂蜜糖纸" },
];

const professorErrands = [
  { verb: "送一份课堂样本", cond: "explore", label: "寻找课堂样本", result: "样本被放到指定位置，对方的反应很轻，却足够让你知道事情办妥了。" },
  { verb: "补一份备用材料", cond: "explore", label: "补齐备用材料", result: "材料清单被划掉一行，旁边多了一个很小的确认记号。" },
  { verb: "把纸条交到指定教室", cond: "explore", label: "递送教授纸条", result: "纸条被收走后，教室里的节奏像轻轻接上了一拍。" },
  { verb: "查一条课堂来源", cond: "goodStudy", label: "认真听课查来源", result: "你把来源记下来时，才发现这条线索比想象中更有用。", requiresClass: true },
  { verb: "准备一份演示药剂", cond: "brewPotion", label: "准备演示药剂", result: "药剂安稳地待在瓶子里，没有变色，也没有试图逃走。" },
  { verb: "确认一段咒语反应", cond: "duelPlay", label: "完成实战确认", result: "实战反应被记录下来，那张表格终于不再空着。" },
  { verb: "整理一件被误放的物品", cond: "explore", label: "整理误放物品", result: "东西回到了它该在的位置，城堡因此少了一点混乱。" },
  { verb: "补上医疗箱里的空位", cond: "brewPotion", label: "补医疗箱药剂", result: "空格被填上了。你希望今天不会有人太快用到它。" },
];

const rumorPlaces = [
  "大礼堂", "城堡图书馆", "移动楼梯", "二楼走廊", "三楼走廊", "门厅", "庭院草坪", "黑湖湖畔", "猫头鹰棚", "草药温室", "天文塔", "决斗场",
];

const rumors = [
  { title: "盔甲换了站姿", object: "一副盔甲", detail: "脚边多了一枚不属于它的螺丝" },
  { title: "画像拒绝开口", object: "一幅画像", detail: "画框边缘沾着一点亮晶晶的糖霜" },
  { title: "楼梯少走一级", object: "一段楼梯", detail: "扶手自己向左偏了一寸" },
  { title: "书本背过身去", object: "一排旧书", detail: "书脊像商量好似的全转向墙面" },
  { title: "猫头鹰送错方向", object: "一只猫头鹰", detail: "脚环上挂着两张互相矛盾的小纸条" },
  { title: "餐具排成箭头", object: "几只银勺", detail: "勺柄指向一个没人承认的位置" },
  { title: "门环忽然讲礼貌", object: "一只门环", detail: "它只肯回答用敬语提出的问题" },
  { title: "窗边有细小敲击声", object: "一扇高窗", detail: "窗台灰尘里有一串细小印子" },
  { title: "公告多出一行字", object: "公告栏", detail: "那行字被写得太端正，反而可疑" },
  { title: "扫帚自己挪了位置", object: "一把旧扫帚", detail: "扫帚柄上缠着一截陌生细绳" },
];

const duelFriends = [
  { key: "ron", name: "罗恩", angle: "试一张明显画反的战术图", label: "陪罗恩试战术", needsWin: false },
  { key: "harry", name: "哈利", angle: "确认一组防守反应", label: "陪哈利练习", needsWin: false },
  { key: "hermione", name: "赫敏", angle: "验证课本里的咒语描述是否可靠", label: "验证咒语描述", needsWin: false },
  { key: "neville", name: "纳威", angle: "练习别在第一秒就慌掉", label: "陪纳威练胆量", needsWin: false },
  { key: "draco", name: "德拉科", angle: "回应一次走廊里的轻声挑衅", label: "赢下挑衅决斗", needsWin: true },
  { key: "luna", name: "露娜", angle: "观察咒语光影是不是会留下回声", label: "陪露娜观察咒语", needsWin: false },
  { key: "ginnyWeasley", name: "金妮", angle: "试一套更利落的反击节奏", label: "陪金妮练反击", needsWin: false },
  { key: "cedricDiggory", name: "塞德里克", angle: "补齐一支临时队伍", label: "临时组队决斗", needsWin: false, team: true },
  { key: "fredWeasley", name: "弗雷德", angle: "测试一个听起来太安全的小道具", label: "测试双胞胎道具", needsWin: false },
  { key: "georgeWeasley", name: "乔治", angle: "确认道具不会让队友先笑场", label: "测试双胞胎道具", needsWin: false },
  { key: "pansy", name: "潘西", angle: "把一句刻薄评价挡回去", label: "赢下体面之战", needsWin: true },
  { key: "choChang", name: "秋·张", angle: "帮她适应不同施法节奏", label: "陪秋练节奏", needsWin: false },
];

const duelSituations = [
  "练习榜旁边还空着一行",
  "看台上有人已经开始下注谁会先乱",
  "医疗箱被提前摆到了最显眼的位置",
  "弗立维教授的评分表压在桌角",
  "场地边缘还残留着上一场咒语的亮痕",
  "一个高年级生说这只是热身，听起来很不可信",
  "队友们临时凑在一起，连站位都还没商量好",
  "对面的表情比咒语本身更让人想认真一点",
];

const materialRequests = [
  { source: "温室值日表", location: "草药温室", item: "干荨麻", label: "找草药材料", next: "brewPotion", nextLabel: "处理材料" },
  { source: "魔药室清单", location: "魔药课教室", item: "甘菊", label: "补魔药材料", next: "brewPotion", nextLabel: "熬制药剂" },
  { source: "校医院便条", location: "校医院", item: "疗伤花粉", label: "找医疗材料", next: "brewPotion", nextLabel: "补医疗药剂" },
  { source: "天文塔记录", location: "天文塔", item: "星尘粉", label: "收集星尘样本", next: "explore", nextLabel: "核对星图" },
  { source: "海格的小纸条", location: "禁林边缘", item: "老龄苔藓", label: "取回苔藓", next: "explore", nextLabel: "避开泥坑" },
  { source: "决斗场补给箱", location: "决斗场", item: "飞行羽毛", label: "补训练材料", next: "duelPlay", nextLabel: "测试补给" },
  { source: "图书馆修补单", location: "城堡图书馆", item: "古籍墨粉", label: "找修书材料", next: "explore", nextLabel: "交回图书馆" },
  { source: "猫头鹰棚记录", location: "猫头鹰棚", item: "露水", label: "清理棚架", next: "explore", nextLabel: "确认信件" },
];

const libraryHooks = [
  { who: "赫敏", key: "hermione", topic: "一条脚注", label: "认真听课查脚注" },
  { who: "珀西", key: "percyWeasley", topic: "级长排班表", label: "核对排班来源" },
  { who: "秋·张", key: "choChang", topic: "拉文克劳借阅记录", label: "查借阅记录" },
  { who: "汉娜", key: "hannahAbbott", topic: "草药课旧笔记", label: "查草药笔记" },
  { who: "贾斯廷", key: "justinFinchFletchley", topic: "麻瓜词条", label: "查麻瓜词条" },
  { who: "泰瑞", key: "terryBoot", topic: "一组数字谜题", label: "听课找线索" },
  { who: "帕德玛", key: "padmaPatil", topic: "一本错架的书", label: "查错架书名" },
  { who: "安东尼", key: "anthonyGoldstein", topic: "课堂旁注", label: "补课堂旁注" },
  { who: "迈克尔", key: "michaelCorner", topic: "咒语索引", label: "查咒语索引" },
  { who: "厄尼", key: "ernieMacmillan", topic: "赫奇帕奇公共记录", label: "核对公共记录" },
];

const studyPlaces = [
  "魔法史教室", "变形术教室", "咒语课教室", "草药温室", "图书馆靠窗座位", "大礼堂长桌边", "公共休息室壁炉旁", "走廊公告板",
];

const holidaySources = [
  { title: "假期猫头鹰挤满棚架", source: "猫头鹰棚值日", location: "猫头鹰棚", label: "整理假期信件" },
  { title: "大礼堂多出节日彩带", source: "礼堂布置清单", location: "大礼堂", label: "帮忙检查布置" },
  { title: "留校学生的棋盘", source: "公共休息室角落", location: "公共休息室", label: "陪留校学生走走" },
  { title: "厨房送错的点心盒", source: "厨房纸条", location: "大礼堂附近", label: "送回点心盒" },
  { title: "假期温室保温帘", source: "温室值日表", location: "草药温室", label: "检查保温帘" },
  { title: "雪地里的细脚印", source: "门厅传闻", location: "庭院草坪", label: "追踪雪地脚印" },
  { title: "无人走廊的回声", source: "假期走廊", location: "城堡走廊", label: "调查假期回声" },
  { title: "留校名单少了一格", source: "级长名单", location: "门厅公告板", label: "核对留校名单" },
];

const holidayDetails = [
  "城堡比平时安静，连画像说话都像压低了一点。",
  "壁炉火烧得很旺，窗外的冷光贴在地板上。",
  "留下来的学生不多，任何小动静都会被听见。",
  "长桌空出大片位置，餐具声显得比平时清楚。",
  "楼梯好像也懒得频繁改道，难得显得可靠。",
  "猫头鹰们比学生还忙，羽毛落得到处都是。",
  "门厅带进来一股冷风，雪水在石板上慢慢化开。",
  "假期让城堡露出另一种节奏，慢，但并不空。",
  "没有课程铃声，传闻反而跑得更远。",
  "节日装饰自己轻轻晃动，像在等人注意。",
];

const weekendSources = [
  { title: "蜂蜜公爵包装纸", location: "霍格莫德路口", source: "周末传闻" },
  { title: "三把扫帚的留言", location: "霍格莫德路口", source: "周末留言" },
  { title: "佐科笑话店试纸", location: "霍格莫德路口", source: "玩笑商品传闻" },
  { title: "邮局错分的明信片", location: "霍格莫德邮局方向", source: "周末邮差" },
  { title: "风雅牌巫师服装袋", location: "霍格莫德路口", source: "周末跑腿" },
  { title: "茶馆窗边的预约条", location: "帕笛芙夫人茶馆附近", source: "周末纸条" },
];

const owlTasks = [
  { source: "金妮的信封", who: "金妮", key: "ginnyWeasley", label: "送出私人信件" },
  { source: "赫敏的订书单", who: "赫敏", key: "hermione", label: "寄出订书单" },
  { source: "罗恩的家信", who: "罗恩", key: "ron", label: "补寄家信" },
  { source: "纳威的提醒卡", who: "纳威", key: "neville", label: "寄出提醒卡" },
  { source: "卢娜的奇怪明信片", who: "露娜", key: "luna", label: "寄出明信片" },
  { source: "珀西的正式通知", who: "珀西", key: "percyWeasley", label: "递交正式通知" },
  { source: "秋·张的回信", who: "秋·张", key: "choChang", label: "寄出回信" },
  { source: "塞德里克的名单", who: "塞德里克", key: "cedricDiggory", label: "递送名单" },
];

const owlDetails = [
  "猫头鹰不肯伸脚，除非你先把信封捋平。",
  "棚架上方落下一根羽毛，正好停在收件人名字旁边。",
  "风把信纸边缘吹得发抖，你不得不用手掌压住。",
  "一只灰猫头鹰盯着你看，像在评估你的投递资格。",
  "信封上的蜡封还温着，说明写信的人刚刚犹豫完。",
  "猫头鹰棚的木板发出轻响，像在催你快点决定。",
  "有两封信差点被送反，你及时把它们分开。",
  "羽毛和墨水味混在一起，比课堂更像真实生活。",
];

const clubNotices = [
  { club: "决斗俱乐部", icon: "⚔️", location: "决斗场", type: "duelPlay", label: "完成社团陪练", reward: "蛇牙" },
  { club: "魔药互助角", icon: "⚗️", location: "魔药课教室", type: "brewPotion", label: "补一份练习药剂", reward: "甘菊" },
  { club: "图书馆志愿表", icon: "📚", location: "城堡图书馆", type: "explore", label: "整理错架线索", reward: "古籍墨粉" },
  { club: "猫头鹰棚值日", icon: "✉️", location: "猫头鹰棚", type: "explore", label: "整理猫头鹰棚", reward: "飞行羽毛" },
  { club: "温室帮工名单", icon: "🌿", location: "草药温室", type: "explore", label: "照看温室角落", reward: "蒲公英" },
  { club: "级长公告板", icon: "📋", location: "门厅公告板", type: "explore", label: "核对公告板", reward: "蜂蜜糖纸" },
  { club: "飞行训练名单", icon: "🧹", location: "飞行训练场", type: "duel4v4Play", label: "参加团队演练", reward: "飞行羽毛" },
  { club: "校医院补给单", icon: "🩹", location: "校医院", type: "brewPotion", label: "补基础药剂", reward: "疗伤花粉" },
  { club: "天文塔观测表", icon: "🔭", location: "天文塔", type: "explore", label: "核对观测记录", reward: "星尘粉" },
  { club: "大礼堂帮忙表", icon: "🍽️", location: "大礼堂", type: "explore", label: "处理礼堂小事", reward: "南瓜馅饼", itemReward: true },
];

const clubMoments = [
  "公告角落被人画了一个很小的箭头，像是怕真正需要帮忙的人看不见。",
  "旁边有人补了一句玩笑话，但正事本身看起来确实需要人处理。",
  "名单上已经有两个名字被划掉，说明这不是第一个临时麻烦。",
  "墨水还没完全干，发布这条委托的人大概刚走不久。",
  "纸边被折过三次，像是在犹豫要不要把事情写出来。",
  "一枚图钉松了，公告纸随着走廊风轻轻发抖。",
  "有人在底下写了“别拖到晚上”，这句提醒显然很有经验。",
  "这条委托没有署名，但地点已经把事情说得差不多了。",
];

function money(sickles, knuts = 0) {
  return knuts ? { type: "money", sickles, knuts } : { type: "money", sickles };
}

function material(name, count = 1) {
  return { type: "material", name, count };
}

function affinity(key, delta = 3) {
  return { type: "affinity", key, delta };
}

function item(name, count = 1) {
  return { type: "item", name, count };
}

function buildFindTasks() {
  const tasks = [];
  classmates.forEach((person, personIndex) => {
    lostPlaces.forEach((place, placeIndex) => {
      tasks.push({
        id: `daily_find_${person.key}_${placeIndex + 1}`,
        title: `${person.name}在找${person.thing}`,
        desc: `${person.name}${person.tone}，说${person.thing}可能落在${place.label}。去找一圈，别让这件事变成全学院都知道的麻烦。`,
        source: `${person.name}的求助`,
        location: place.location,
        hook: place.clue,
        completionText: `你在${place.label}附近找到了${person.thing}。${person.name}接过去时松了口气，这种感谢比正式道谢更明显。`,
        icon: "🔎",
        category: "explore",
        weight: 6,
        condition: { type: "explore", count: 1 },
        conditionLabels: { explore: `寻找${person.thing}` },
        rewards: [affinity(person.key, 3 + (personIndex % 2)), item(person.rewardItem), money(2, placeIndex % 3 ? 0 : 8)],
      });
    });
  });
  return tasks;
}

function buildProfessorTasks() {
  const tasks = [];
  professors.forEach((prof, profIndex) => {
    professorErrands.forEach((errand, errandIndex) => {
      tasks.push({
        id: `daily_prof_${prof.key}_${errandIndex + 1}`,
        title: `${prof.name}需要你${errand.verb}`,
        desc: `${prof.name}${prof.manner}，请你去${prof.place}${errand.verb}。这不是大事，但在教授那里，小事也有小事的标准。`,
        source: prof.name,
        location: prof.place,
        hook: `清单角落压着一点${prof.material}，像是在提醒你别把细节漏掉。`,
        completionText: errand.result,
        icon: prof.icon,
        category: errand.cond === "brewPotion" ? "brew" : errand.cond === "duelPlay" ? "duel" : "explore",
        weight: 5,
        requiresClass: !!errand.requiresClass,
        condition: { type: errand.cond, count: 1 },
        conditionLabels: { [errand.cond]: errand.label },
        rewards: [material(prof.material), { type: "housePoint", amount: 3 + (profIndex % 4) }, money(2 + (errandIndex % 3))],
      });
    });
  });
  return tasks;
}

function buildRumorTasks() {
  const tasks = [];
  rumorPlaces.forEach((place, placeIndex) => {
    rumors.forEach((rumor, rumorIndex) => {
      tasks.push({
        id: `daily_rumor_${placeIndex + 1}_${rumorIndex + 1}`,
        title: `${place}${rumor.title}`,
        desc: `今天有人说${place}的${rumor.object}不太对劲。去调查一次，确认这是不是又一个被传歪的霍格沃茨小新闻。`,
        source: `${place}传闻`,
        location: place,
        hook: `最早讲这件事的人提到：${rumor.detail}。`,
        completionText: `你在${place}查清了这件事。真相比传闻小一点，但比普通日子有趣一点。`,
        icon: "🗞️",
        category: "explore",
        weight: 7,
        condition: { type: "explore", count: rumorIndex % 4 === 0 ? 2 : 1 },
        conditionLabels: { explore: `调查${rumor.object}` },
        rewards: [material(["星尘粉", "老龄苔藓", "露水", "蒲公英"][rumorIndex % 4]), money(2 + (placeIndex % 3), rumorIndex % 2 ? 0 : 12)],
      });
    });
  });
  return tasks;
}

function buildDuelTasks() {
  const tasks = [];
  duelFriends.forEach((friend, friendIndex) => {
    duelSituations.forEach((situation, situationIndex) => {
      const type = friend.team || situationIndex % 7 === 0 ? "duel4v4Play" : friend.needsWin ? "duelWin" : "duelPlay";
      tasks.push({
        id: `daily_duel_friend_${friend.key}_${situationIndex + 1}`,
        title: `${friend.name}想${friend.angle}`,
        desc: `${friend.name}今天想${friend.angle}。${situation}，所以这场练习最好认真一点。`,
        source: `${friend.name}的邀请`,
        location: "决斗场",
        hook: friend.needsWin ? "这不是普通练习，至少对旁边看热闹的人来说不是。" : "这场练习的重点不是好看，是让下次别手忙脚乱。",
        completionText: `训练结束后，${friend.name}的表情比开场时放松了一些。决斗场边缘的亮痕慢慢暗下去。`,
        icon: friend.team || type === "duel4v4Play" ? "🛡️" : "⚔️",
        category: "duel",
        weight: 5,
        condition: { type, count: 1 },
        conditionLabels: { [type]: friend.label },
        rewards: [affinity(friend.key, friend.needsWin ? 2 : 4), material(["蛇牙", "飞行羽毛", "疗伤花粉"][friendIndex % 3]), money(3 + (situationIndex % 3))],
      });
    });
  });
  return tasks;
}

function buildMaterialTasks() {
  const tasks = [];
  materialRequests.forEach((request, requestIndex) => {
    lostPlaces.forEach((place, placeIndex) => {
      tasks.push({
        id: `daily_material_${requestIndex + 1}_${placeIndex + 1}`,
        title: `${request.source}缺少${request.item}`,
        desc: `${request.source}上多了一行小字：需要${request.item}。先去${place.location}找找，再把它送回${request.location}。`,
        source: request.source,
        location: `${place.location}到${request.location}`,
        hook: place.clue,
        completionText: `${request.item}被放回该在的位置。清单短了一行，今天的城堡也少了一点临时麻烦。`,
        icon: "📦",
        category: "mix",
        weight: 4,
        condition: { type: "compound", conditions: [
          { type: "explore", count: 1 },
          { type: request.next, count: 1 },
        ]},
        conditionLabels: { explore: request.label, [request.next]: request.nextLabel },
        rewards: [material(request.item, 2), money(3 + (placeIndex % 2)), request.next === "duelPlay" ? { type: "housePoint", amount: 4 } : item("巧克力蛙")],
      });
    });
  });
  return tasks;
}

function buildLibraryTasks() {
  const tasks = [];
  libraryHooks.forEach((entry, entryIndex) => {
    studyPlaces.forEach((place, placeIndex) => {
      tasks.push({
        id: `daily_library_${entry.key}_${placeIndex + 1}`,
        title: `${entry.who}要查${entry.topic}`,
        desc: `${entry.who}在${place}提到${entry.topic}还差一个可靠来源。认真听一节课，把能用的线索记下来。`,
        source: `${entry.who}的书单`,
        location: place,
        hook: "页边留着一个小问号，像在等今天把它补成句号。",
        completionText: `你把线索补回去时，${entry.who}看了一眼，像是终于能把那一页翻过去。`,
        icon: "📚",
        category: "study",
        weight: 3,
        requiresClass: true,
        condition: { type: "goodStudy", count: 1 },
        conditionLabels: { goodStudy: entry.label },
        rewards: [affinity(entry.key, 3), { type: "housePoint", amount: 3 }, money(2 + (entryIndex % 2))],
      });
    });
  });
  return tasks;
}

function buildHolidayTasks() {
  const tasks = [];
  holidaySources.forEach((source, sourceIndex) => {
    holidayDetails.forEach((detail, detailIndex) => {
      tasks.push({
        id: `daily_holiday_${sourceIndex + 1}_${detailIndex + 1}`,
        title: source.title,
        desc: `${detail} ${source.source}请你帮忙处理一件假期里的小事，不需要上课铃，也不会被课程表卡住。`,
        source: source.source,
        location: source.location,
        hook: "假期里的霍格沃茨不空，只是把声音放轻了。",
        completionText: "事情处理完后，城堡仍旧安静，但你知道它并不是停下来了。",
        icon: "🎄",
        category: "explore",
        weight: 8,
        holidayOnly: true,
        noClassSafe: true,
        condition: { type: "explore", count: 1 },
        conditionLabels: { explore: source.label },
        rewards: [money(3 + (detailIndex % 3)), item(detailIndex % 2 ? "南瓜馅饼" : "巧克力蛙"), material(["露水", "甘菊", "蒲公英"][sourceIndex % 3])],
      });
    });
  });
  return tasks;
}

function buildWeekendTasks() {
  const tasks = [];
  weekendSources.forEach((source, sourceIndex) => {
    lostPlaces.forEach((place, placeIndex) => {
      tasks.push({
        id: `daily_weekend_${sourceIndex + 1}_${placeIndex + 1}`,
        title: source.title,
        desc: `周末的消息从${source.location}传回城堡，说有件东西和${place.label}有关。去探索一次，把这条周末小线索接上。`,
        source: source.source,
        location: `${source.location}与${place.location}`,
        hook: "周末总让消息跑得比平时远一点。",
        completionText: "线索被接上了。它不算惊天动地，但足够让今天不像普通日子。",
        icon: "🛍️",
        category: "explore",
        weight: 4,
        weekendOnly: true,
        noClassSafe: true,
        condition: { type: "explore", count: 1 },
        conditionLabels: { explore: "追查周末线索" },
        rewards: [money(4 + (sourceIndex % 3)), item(placeIndex % 2 ? "坩埚蛋糕" : "巧克力蛙"), material("蜂蜜糖纸")],
      });
    });
  });
  return tasks;
}

function buildOwlTasks() {
  const tasks = [];
  owlTasks.forEach((task, taskIndex) => {
    owlDetails.forEach((detail, detailIndex) => {
      tasks.push({
        id: `daily_owl_${task.key}_${detailIndex + 1}`,
        title: `${task.who}想寄一封信`,
        desc: `${task.who}把信交给你，拜托你去猫头鹰棚跑一趟。${detail}`,
        source: task.source,
        location: "猫头鹰棚",
        hook: "送信这种小事，总是比看起来更私人一点。",
        completionText: `猫头鹰振翅飞远，${task.who}没有多解释，但你看得出这封信很重要。`,
        icon: "✉️",
        category: "explore",
        weight: 5,
        noClassSafe: true,
        condition: { type: "explore", count: 1 },
        conditionLabels: { explore: task.label },
        rewards: [affinity(task.key, 3), money(2 + (detailIndex % 3)), item(detailIndex % 2 ? "南瓜馅饼" : "巧克力蛙")],
      });
    });
  });
  return tasks;
}

function buildClubTasks() {
  const tasks = [];
  clubNotices.forEach((notice, noticeIndex) => {
    clubMoments.forEach((moment, momentIndex) => {
      const reward = notice.itemReward ? item(notice.reward) : material(notice.reward);
      tasks.push({
        id: `daily_club_${noticeIndex + 1}_${momentIndex + 1}`,
        title: `${notice.club}贴了新委托`,
        desc: `${notice.club}在公告板上留下了一条小委托。去${notice.location}处理一下，顺手把这个角落的麻烦清掉。`,
        source: notice.club,
        location: notice.location,
        hook: moment,
        completionText: `你把${notice.location}的小事处理完，公告上的那一行终于可以被划掉了。`,
        icon: notice.icon,
        category: notice.type === "brewPotion" ? "brew" : notice.type.includes("duel") ? "duel" : "explore",
        weight: 5,
        noClassSafe: true,
        condition: { type: notice.type, count: 1 },
        conditionLabels: { [notice.type]: notice.label },
        rewards: [reward, money(2 + (momentIndex % 4)), momentIndex % 3 === 0 ? { type: "housePoint", amount: 3 } : item("巧克力蛙")],
      });
    });
  });
  return tasks;
}

function buildDailyQuestExpansion() {
  return [
    ...buildFindTasks(),
    ...buildProfessorTasks(),
    ...buildRumorTasks(),
    ...buildDuelTasks(),
    ...buildMaterialTasks(),
    ...buildLibraryTasks(),
    ...buildHolidayTasks(),
    ...buildWeekendTasks(),
    ...buildOwlTasks(),
    ...buildClubTasks(),
  ];
}

export const DAILY_QUEST_EXPANSION = buildDailyQuestExpansion();

/**
 * year1-hufflepuff-students-plus.js
 * 一年级赫奇帕奇学生主动来访加厚包。
 *
 * 赫奇帕奇不是“温和背景板”：这里写勤恳、公平、照顾、紧张、
 * 以及不声张却很坚定的勇气。
 */

export const YEAR1_HUFFLEPUFF_STUDENT_PLUS_PROACTIVE = {
  cedricDiggory: [
    {
      id: 'cedric_year1_fair_turn',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '塞德里克在温室外追上你，手里拿着一张排班表。「你刚才是不是被跳过了？」他问。几个学生正围着一盆会打喷嚏的植物轮流练习，名单上你的名字被墨水蹭得有点模糊。塞德里克没有提高声音，只把表递到你面前，像先确认事实比立刻替人出头更重要。',
      choices: [
        { label: '告诉他确实被跳过了', delta: 5, response: '塞德里克点点头，走回队伍旁边，很平静地把顺序重新排好。他没有责怪任何人，只说每个人都该轮到一次。轮到你时，那盆植物正好打了个喷嚏，泥点溅到他袖口上，他只是笑了一下。', addMemory: 'cedric_fair_turn' },
        { label: '说没关系下次也行', delta: 3, response: '塞德里克温和地看着你，说下次当然也行，但这次也应该算数。他的语气不强硬，却让人很难敷衍。你发现公平在他那里不是响亮口号，而是把小顺序认真放正。' },
      ],
      aiSeed: '塞德里克主动注意到玩家在温室练习中被跳过。写他的公平、温和和不张扬的坚持。',
    },
    {
      id: 'cedric_year1_lost_scarf',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '雨停后，塞德里克拿着一条沾了草屑的围巾在庭院边等你。「这是你的，还是你知道是谁的？」他说。围巾被他仔细拧干，搭在手臂上，没有随便团成一团。石缝里的水还在往下滴，他却像已经在这里等了好一会儿。',
      choices: [
        { label: '帮他一起找主人', delta: 4, response: '你们沿着庭院问了几个人，最后找到那个丢围巾的新生。对方脸红得厉害，塞德里克只说雨后东西容易掉，没有让感谢变成尴尬。他把好意做得像顺路，让人更容易收下。', addMemory: 'cedric_lost_scarf' },
        { label: '问他为什么亲自等', delta: 3, response: '他说如果把它挂到公告栏，可能会被雨再淋一次。这个理由朴素得让人没法反驳。你看见他总会多想一步，而且那一步通常是替别人想的。' },
      ],
      aiSeed: '塞德里克主动归还遗失围巾。体现体贴、公平和让别人不难堪的分寸。',
    },
    {
      id: 'cedric_year1_practice_partner',
      require: { minTier: 3, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '塞德里克在一间空教室门口叫住你，里面的桌椅已经被挪到墙边。「你愿意陪我练一下缴械咒吗？」他问，「我会慢一点。不是因为你不行，是因为我想把动作练准。」他先把魔杖尖垂下，等你答应后才退到另一边。',
      choices: [
        { label: '陪他认真练习', delta: 5, response: '塞德里克每次出咒前都会确认距离，咒语落点也避开你的手腕。练到第三轮时，他终于找到节奏，魔杖轻轻一跳。他没有炫耀，只说这样双方都能学到东西。你觉得和他练习让失败也不丢脸。', addMemory: 'cedric_practice_partner' },
        { label: '问他为什么选你', delta: 4, response: '他说因为你会认真指出问题，不会把练习变成证明谁更厉害。这个回答让空教室里的气氛稳了下来，像他信任的不只是你的咒语，还有你的态度。' },
      ],
      aiSeed: '塞德里克主动邀请玩家练习缴械咒。写安全感、公平练习和让对方体面成长的温柔。',
    },
    {
      id: 'cedric_year1_quiet_credit',
      require: { minTier: 4, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '课后，塞德里克在走廊窗边等你，手里拿着一份被教授表扬过的小组作业。「刚才他们只提了我的名字。」他说，「但第三段是你想出来的。」窗外的黑湖泛着灰光，他把作业递给你，神情认真得像这不是一句客套，而是一件必须纠正的事。',
      choices: [
        { label: '说你并不介意', delta: 3, response: '塞德里克点头，却仍然说他介意。下一堂课前，他把你的贡献补充给教授听，语气自然，没有把自己显得多高尚。你看着他把功劳放回该在的位置，忽然觉得这种公平比奖赏本身更让人踏实。', addMemory: 'cedric_quiet_credit' },
        { label: '谢谢他记得', delta: 5, response: '塞德里克笑了笑，说这不是记性好，是应该。那句“应该”说得很轻，却有重量。他没有让你欠他人情，只让你知道有人看见了你做的部分。' },
      ],
      aiSeed: '塞德里克主动指出小组作业功劳遗漏。体现公平、不占便宜和温和但坚定的品格。',
    },
  ],

  hannahAbbott: [
    {
      id: 'hannah_year1_greenhouse_bandage',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '汉娜在温室门口小跑过来，手里攥着一卷干净绷带。「你刚才被叶子刮到了。」她说完立刻脸红，「我不是一直盯着你看，只是那种植物的边缘很细。」她把绷带递过来，眼神在你的手背和地面之间来回移动。',
      choices: [
        { label: '让她帮忙包一下', delta: 5, response: '汉娜包得很仔细，甚至在结尾把绷带角压平。她说自己总怕多管闲事，可如果不说又会一直担心。你告诉她这样刚好，她整个人像被阳光照了一下，终于笑出来。', addMemory: 'hannah_greenhouse_bandage' },
        { label: '说只是小伤', delta: 3, response: '她点点头，却仍坚持让你至少擦干净。声音很小，态度却没有退。你发现汉娜的温柔不是没有主意，而是把坚持放得很轻。' },
      ],
      aiSeed: '汉娜主动注意到玩家在温室被划伤并送绷带。写紧张、细心和轻声坚持。',
    },
    {
      id: 'hannah_year1_table_space',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '晚餐时，汉娜站在赫奇帕奇长桌边向你招了招手。「这里还有位置。」她说，又赶紧补充，「如果你想坐的话。」桌上南瓜汁被传来传去，旁边几个学生讨论草药课作业，气氛热闹但不压人。她把一盘土豆往你这边推了推，动作小心翼翼。',
      choices: [
        { label: '坐到她旁边', delta: 4, response: '你坐下后，汉娜明显松了口气。她说有时候看见别人端着盘子找不到位置，会让她想起自己第一天进礼堂。她讲这句话时没有夸张，只是认真把一块热土豆分到你盘里。', addMemory: 'hannah_table_space' },
        { label: '问她是不是总会留意座位', delta: 3, response: '汉娜不好意思地点头，说也不是总会，只是看见了就很难假装没看见。这个答案像赫奇帕奇长桌本身，朴素、暖和、让人愿意停下来。' },
      ],
      aiSeed: '汉娜主动在礼堂给玩家留位置。写赫奇帕奇长桌的温暖日常和她对局促者的敏感。',
    },
    {
      id: 'hannah_year1_wrong_potion_label',
      require: { minTier: 3, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '汉娜在魔药教室外追上你，怀里抱着两只小瓶，瓶签被她捏得有点皱。「我觉得这两个标签贴反了。」她说，声音紧张，「但如果我错了，会不会显得很傻？」瓶子里的液体颜色相近，一个微微发绿，一个几乎透明。',
      choices: [
        { label: '陪她核对课本', delta: 5, response: '你们翻到对应页，发现她果然看对了。汉娜长长呼出一口气，赶在上课前把标签换回来。她没有宣扬，只把瓶子整齐放好。你知道她刚刚避免了一锅很糟糕的魔药事故。', addMemory: 'hannah_potion_label' },
        { label: '鼓励她去提醒教授', delta: 4, response: '汉娜犹豫了很久，终于走到教授桌边，小声说明问题。回来时她脸还是红的，但眼神亮了一点。她说原来害怕说错和必须说出来可以同时存在。' },
      ],
      aiSeed: '汉娜主动怀疑魔药标签贴反。写她紧张但细致，敢在重要时候开口。',
    },
    {
      id: 'hannah_year1_homesick_teapot',
      require: { minTier: 4, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '雨夜，汉娜在一条靠近厨房的走廊里叫住你，手里捧着一只会自己冒热气的小茶壶。「我问厨房要了点热茶。」她说，「不是因为我哭了很久。只是……热的东西会有用。」她把这句话说得很努力，像在给自己也给你找一个体面的理由。',
      choices: [
        { label: '陪她分一杯茶', delta: 5, response: '你们坐在窗台边，茶有蜂蜜味。汉娜承认自己有点想家，尤其是雨声像家里屋檐的时候。她说完后没有更难过，反而像终于把一只沉甸甸的杯子放下了。', addMemory: 'hannah_homesick_teapot' },
        { label: '问她为什么找你', delta: 4, response: '汉娜小声说因为你不会把想家说成幼稚。这个信任轻得像茶壶上的热气，却让雨夜的城堡不再那么空。' },
      ],
      aiSeed: '汉娜主动带热茶找玩家。写想家、温暖和不把脆弱戏剧化的真实霍格沃茨夜晚。',
    },
  ],

  ernieMacmillan: [
    {
      id: 'ernie_year1_fair_statement',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '厄尼拿着一张写得非常工整的声明在走廊等你。「我想请你听一遍。」他说，语气像在召开正式会议，「有人说贾斯廷偷懒，我认为这不公正。」羊皮纸第一句是“鉴于今日草药课分工存在严重误解”，长得像一份小型公文。',
      choices: [
        { label: '建议他说得更像自己', delta: 4, response: '你把那句长开头改成“他其实做了最难的部分”。厄尼读了两遍，承认这样更有力。正式感从他身上退去一点，留下更真诚的维护朋友。', addMemory: 'ernie_fair_statement' },
        { label: '问他为什么这么生气', delta: 3, response: '厄尼说因为偷懒这种指控会粘在人身上，而事实不该被懒得解释的人弄脏。虽然措辞仍然很隆重，但你听得出他是真的在乎公平。' },
      ],
      aiSeed: '厄尼主动请玩家听维护朋友的声明。写正式、略夸张但真心维护公平。',
    },
    {
      id: 'ernie_year1_study_roll',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '厄尼在图书馆门口拦住你，拿着一卷复习计划。「我制定了一个较为合理的晚间学习安排。」他说，「但汉娜认为它看起来像惩罚。」计划表密密麻麻，从魔法史到草药学，每一格都排得端正得令人有点害怕。',
      choices: [
        { label: '帮他删掉过满安排', delta: 5, response: '你建议给每小时之间留十分钟。厄尼一开始试图辩解，后来盯着表格承认人确实不是坩埚，不能一直煮。这个比喻让他自己也笑了，计划终于像可以被活人使用的东西。', addMemory: 'ernie_study_roll' },
        { label: '问他为什么排这么满', delta: 4, response: '他说如果计划够满，就不会担心自己不够努力。说完他有些尴尬，像没料到这句话会这么诚实。你没有嘲笑，他便把最晚那一格擦掉了。' },
      ],
      aiSeed: '厄尼主动请玩家看复习计划。写勤奋、焦虑和愿意修正自己的正式感。',
    },
    {
      id: 'ernie_year1_common_room_vote',
      require: { minTier: 3, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '厄尼在赫奇帕奇公共休息室入口附近找你，手里有一张小投票单。「关于今晚公共休息室壁炉旁的位置分配，我认为应当有更明确的办法。」他说得非常严肃。你很快明白，事情起因只是几个人都想坐最暖的软椅。',
      choices: [
        { label: '帮他把规则写简单', delta: 4, response: '你们把复杂的轮换制度改成“先到先坐，久坐让位”。厄尼看着这八个字，沉痛地承认它比自己的三段式提案更适合壁炉。晚些时候，真的有人按这条规则让了座。', addMemory: 'ernie_common_room_vote' },
        { label: '问他为什么不直接说一声', delta: 3, response: '厄尼说直接说容易显得偏袒，规则至少看起来公正。你提醒他太复杂的公正也会让人害怕，他认真记下了这点。' },
      ],
      aiSeed: '厄尼主动处理公共休息室软椅分配。用小事表现他的公平观和过度正式的可爱。',
    },
    {
      id: 'ernie_year1_admit_mistake',
      require: { minTier: 4, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '厄尼在盔甲走廊等你，脸上有种准备接受审判的表情。「我今天早些时候误会了一个人。」他说，「我已经道歉，但我想知道道歉是否足够明确。」盔甲的影子落在他肩上，让这场小小的反省显得格外庄重。',
      choices: [
        { label: '陪他复盘道歉措辞', delta: 5, response: '你指出他解释原因太多，承认错误太少。厄尼虽然脸红，还是把话重新写短：我误会你了，对不起。读完后他沉默很久，说这句话比他的长版本更难说。', addMemory: 'ernie_admit_mistake' },
        { label: '问他怕失去面子吗', delta: 4, response: '厄尼挺直背，说当然怕，但怕不代表可以绕开事实。这个回答带着一点少年人的用力，却也有真正的正直。' },
      ],
      aiSeed: '厄尼主动请玩家确认道歉是否清楚。写他正式、好面子，但愿意把事实放在面子前面。',
    },
  ],

  susanBones: [
    {
      id: 'susan_year1_archives_name',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '苏珊在图书馆旧报纸架旁等你，指尖停在一行很小的名字上。「你能帮我确认这个姓氏是不是拼错了吗？」她问。她的声音很稳，但手里的纸边微微发抖。旧报纸散着灰尘味，像把很远的事情带回了霍格沃茨。',
      choices: [
        { label: '陪她查另一份记录', delta: 5, response: '你们找到第二份记录，确认那行名字确实少了一个字母。苏珊把正确拼写仔细抄下，像替一个不在场的人把外袍上的灰拍掉。她没有讲太多家族往事，但你知道这对她很重要。', addMemory: 'susan_archives_name' },
        { label: '问她是不是很在意名字', delta: 4, response: '苏珊点头，说名字是有些人留下来的最后东西。她说完后有点后悔似的低头，你没有追问。安静在这里比安慰更有用。' },
      ],
      aiSeed: '苏珊主动请玩家查旧报纸中姓名拼写。写她对名字、记录和家族记忆的敏感。',
    },
    {
      id: 'susan_year1_notice_courage',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '公告栏前，苏珊把一张被人压住的寻物启事轻轻抽出来。「这张不该被盖住。」她说。启事上是一枚丢失的旧胸针，墨水写得有些歪。旁边几个高年级学生正笑着贴新的魁地奇传单，苏珊看起来不想惹麻烦，却也没有把手收回去。',
      choices: [
        { label: '陪她把启事重新贴好', delta: 5, response: '你们把寻物启事移到显眼位置。高年级学生看了一眼，没有说什么。苏珊松了口气，轻声说有些东西对旁人只是旧胸针，对丢的人却可能很重要。她的勇气不响亮，但确实在那里。', addMemory: 'susan_notice_courage' },
        { label: '问她刚才怕不怕', delta: 4, response: '苏珊承认有一点。随后她说，怕的时候也可以把图钉按下去，只要手别抖得太厉害。这句话像她给自己的咒语。' },
      ],
      aiSeed: '苏珊主动维护被盖住的寻物启事。体现温和但坚定的小勇气。',
    },
    {
      id: 'susan_year1_ministry_question',
      require: { minTier: 3, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '苏珊在魔法史教室外叫住你，怀里抱着书。「如果一个决定写在文件里，它就一定是对的吗？」她问。问题来得突然，又不像课堂讨论。窗外的雨声很细，她看着走廊尽头，像那里有一个她还不敢直视的答案。',
      choices: [
        { label: '说文件也会出错', delta: 5, response: '苏珊慢慢点头，说她也是这么想的，只是不总敢说。她提到家里有人总说记录很重要，可记录也需要有人检查。你们没有把话题说得太沉，却都知道它不只是作业问题。', addMemory: 'susan_ministry_question' },
        { label: '问她为什么想到这个', delta: 3, response: '她说宾斯教授讲到一段审判时太快了，好像只要盖章就结束。她觉得不应该那么快。这个“不应该”很轻，却让历史里的灰尘浮了起来。' },
      ],
      aiSeed: '苏珊主动问文件和正义的关系。联系她的家庭背景，但不直白说教，保持一年级可承受的沉度。',
    },
    {
      id: 'susan_year1_steady_walk',
      require: { minTier: 4, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '宵禁前的走廊有些空，苏珊抱着一摞书站在岔路口。「你能陪我走到楼梯那边吗？」她问完立刻补充，「不是因为我害怕。」远处一幅画像忽然打了个响亮的喷嚏，她被吓得书角一抖，但仍努力站直。',
      choices: [
        { label: '陪她走过去', delta: 5, response: '你们并肩穿过走廊。苏珊一开始走得很快，后来慢下来，说其实害怕也没什么，只是她不想每次都被害怕决定路线。走到楼梯口时，她看起来比出发时高了一点。', addMemory: 'susan_steady_walk' },
        { label: '说画像也会吓人', delta: 4, response: '苏珊笑了一下，紧绷的肩膀放松了。画像又打了个喷嚏，她这次没有抖，只小声说祝它健康。这个小玩笑让走廊重新变回霍格沃茨，而不是一条吓人的黑路。' },
      ],
      aiSeed: '苏珊主动请玩家陪她走过夜间走廊。写怕但不被怕控制的勇气，加入画像和城堡日常。',
    },
  ],

  justinFinchFletchley: [
    {
      id: 'justin_year1_old_school_habit',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '贾斯廷在礼堂门口追上你，手里拿着一张被划掉好几次的课程表。「你有没有发现我总是下意识想找教室编号？」他说，有点不好意思，「这里的门会动，楼梯会改主意，画像还会评论你的领带。」他笑了一下，却明显还没完全适应。',
      choices: [
        { label: '帮他做一份霍格沃茨路线表', delta: 5, response: '你们把“二楼第三间”改成“会抱怨潮湿的骑士画像旁边”。贾斯廷越写越觉得好笑，最后说这比编号荒唐，但确实有用。霍格沃茨第一次像能被他用自己的方式记住。', addMemory: 'justin_route_table' },
        { label: '问他想念旧学校吗', delta: 4, response: '他承认想念，尤其是那些不会突然改方向的走廊。说完他又赶紧补充霍格沃茨当然非常了不起。你告诉他两件事可以同时成立，他像终于得到许可一样松了口气。' },
      ],
      aiSeed: '贾斯廷主动谈旧学校习惯和霍格沃茨路线。写麻瓜出身适应魔法学校的真实不适。',
    },
    {
      id: 'justin_year1_cutlery_charm',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '贾斯廷在赫奇帕奇长桌边小声叫你，面前的叉子正固执地自己转圈。「我只是轻轻碰了一下。」他说，「它就像决定参加舞会。」叉子转得越来越快，旁边的餐巾被带起一角，他努力保持体面，表情却快绷不住了。',
      choices: [
        { label: '帮他把叉子按住', delta: 4, response: '你们合力把叉子按住，贾斯廷念了好几遍停止咒，终于让它安静下来。他松开手时，餐巾已经绕成了一个很滑稽的结。他先是尴尬，随后自己也笑了。', addMemory: 'justin_cutlery_charm' },
        { label: '说这在霍格沃茨很常见', delta: 3, response: '贾斯廷看起来既安心又震惊，说如果这叫常见，他需要重新定义常见。这个说法让你们都笑起来，长桌边的尴尬也被热南瓜汁和笑声化开了。' },
      ],
      aiSeed: '贾斯廷主动请求玩家处理失控餐具。写魔法日常荒唐感和他努力维持体面的可爱。',
    },
    {
      id: 'justin_year1_family_letter_terms',
      require: { minTier: 3, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '贾斯廷拿着一封写给家里的信在窗边等你。「你觉得我该怎么解释‘草药课上的曼德拉草幼苗’？」他问，「如果我写得太详细，家里会担心；写得太少，他们又会以为我在寄宿学校学园艺。」信纸上已经列了好几个被划掉的比喻。',
      choices: [
        { label: '帮他找不吓人的说法', delta: 5, response: '你们把曼德拉草写成“非常吵闹但受严格照看的魔法植物”。贾斯廷读了一遍，觉得既诚实又不会让母亲立刻写信给校长。他说给麻瓜家人写信就像在两种语言之间搭桥。', addMemory: 'justin_family_terms' },
        { label: '问他想不想写真实一点', delta: 4, response: '他沉默片刻，说想，可他也想让家里睡得着觉。这个回答让他的兴奋里露出一点责任感。他不是想隐瞒霍格沃茨，只是还在学习怎样把奇迹讲给担心他的人听。' },
      ],
      aiSeed: '贾斯廷主动请玩家帮忙给麻瓜家人解释魔法课程。写双重世界的翻译感和家庭牵挂。',
    },
    {
      id: 'justin_year1_brave_question',
      require: { minTier: 4, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '贾斯廷在黑湖边叫住你，湖面被风吹得发皱。「你觉得一个人问很多基础问题，会不会显得很没用？」他说完就看向湖水，好像那里面有一个更体面的说法。他手里攥着魔咒课笔记，边角已经被翻软了。',
      choices: [
        { label: '说敢问才学得快', delta: 5, response: '贾斯廷慢慢点头，说他以前总知道该问什么，现在却常常连问题都像刚学会走路。你告诉他这不丢脸。他笑得有些松动，说那他明天要问一个很基础但很必要的问题。', addMemory: 'justin_brave_question' },
        { label: '问他怕谁笑', delta: 4, response: '他说不一定是谁，也许是自己先在脑子里笑自己。这个回答很诚实。湖边的风吹过来，你们站了一会儿，他终于把笔记重新夹好，像准备把那点害怕也带回课堂。' },
      ],
      aiSeed: '贾斯廷主动谈害怕问基础问题。写麻瓜出身学生的学习压力和愿意开口的勇气。',
    },
  ],
};

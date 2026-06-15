/**
 * year1-ravenclaw-students-plus.js
 * 一年级拉文克劳学生主动来访加厚包。
 *
 * 拉文克劳不只等于“聪明”：这里分别写观察、推理、争辩、整理、
 * 审美和对答案之外过程的执着。
 */

export const YEAR1_RAVENCLAW_STUDENT_PLUS_PROACTIVE = {
  choChang: [
    {
      id: 'cho_year1_wet_goggles',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '秋在魁地奇看台底下叫住你，手里拿着一副被雨水打湿的护目镜。「你能帮我看一下这边是不是裂了吗？」她问得很轻，却把护目镜递得很稳。镜片边缘有一条细细的水痕，不仔细看几乎像雨线。远处球场还空着，风把草压成一层暗绿色的波。',
      choices: [
        { label: '仔细检查镜片', delta: 4, response: '你发现那不是裂纹，只是雨水沿着边框渗进去。秋松了口气，又很快把护目镜擦干，像不允许自己在装备上有一点含糊。她说找球手有时候看错一瞬间，就会把整场比赛交给运气。', addMemory: 'cho_wet_goggles' },
        { label: '问她是不是紧张训练', delta: 3, response: '秋笑了笑，说紧张不是坏事，只要别让它坐到扫帚前面去。这个说法柔和，却很准确。你突然明白她的温柔不是慢，而是把锋利收得很安静。' },
      ],
      aiSeed: '',
    },
    {
      id: 'cho_year1_silent_stands',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '傍晚的看台没有比赛，秋坐在中层位置，听见你上来后往旁边让了让。「这里风声最清楚。」她说。下面的球门环在暮色里只剩轮廓，她没有立刻聊天，只把一张写着飞行路线的小纸压在膝上，像在等某个看不见的答案落下来。',
      choices: [
        { label: '问她在等什么', delta: 5, response: '秋说她在等自己不再急着看见金色飞贼。太急的时候，眼睛会把每一道光都当成答案。你们一起坐了一会儿，风声穿过看台木板，她的呼吸慢慢平稳下来。', addMemory: 'cho_silent_stands' },
        { label: '安静陪她坐一会儿', delta: 4, response: '你没有说话。秋似乎很感激这种安静，过了一阵才告诉你，她喜欢球场空下来的时候，因为那时胜负还没有把每个人的声音变大。这个霍格沃茨角落忽然显得很真实。' },
      ],
      aiSeed: '',
    },
    {
      id: 'cho_year1_ravenclaw_ribbon',
      require: { minTier: 3, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '秋拿着一段蓝银色缎带在走廊拐角等你。「你会不会打一个不会在风里散开的结？」她问。缎带是给拉文克劳看台横幅用的，边缘已经被她试着折过好几次。她看起来有点不好意思，像这样的小事不该难住她。',
      choices: [
        { label: '教她打牢一点的结', delta: 4, response: '你们把缎带绕过栏杆试了几遍，终于打出一个不太漂亮但很稳的结。秋认真记下步骤，说漂亮可以在最后补，先别让它掉下去。她把这句话说得像飞行，也像生活。', addMemory: 'cho_ribbon_knot' },
        { label: '说这不算小事', delta: 3, response: '秋抬眼看你，笑意轻了一点。她说很多东西在掉下来之前都像小事，等真的掉下来，大家才会想起是谁没系好。你发现她总能在很轻的语气里放进很清楚的责任。' },
      ],
      aiSeed: '',
    },
    {
      id: 'cho_year1_misread_score',
      require: { minTier: 4, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '秋在记分牌旁追上你，手里拿着一张练习赛记录。「你刚才也在吧？我想确认最后那十分是不是记错了。」她没有急着指责谁，只把几个时间点圈出来。记分牌上的数字还没擦干净，粉笔灰被风吹得像薄雾。',
      choices: [
        { label: '帮她核对时间点', delta: 5, response: '你们把最后几次进球重新排了一遍，发现确实少记了一球。秋没有欢呼，只去找负责记录的学生温和地说明。她回来时说分数应该正确，不是因为赢，而是因为每个人都该知道自己做成了什么。', addMemory: 'cho_misread_score' },
        { label: '问她为什么这么认真', delta: 4, response: '秋说训练赛也会被人记在心里，尤其是第一次进球的人。如果记分错了，那个人也许会以为自己没有做到。她说这话时看向球门环，像看见了很多别人忽略的瞬间。' },
      ],
      aiSeed: '',
    },
  ],

  padmaPatil: [
    {
      id: 'padma_year1_door_riddle_variant',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '帕德玛在拉文克劳门环旁等你，手里拿着三张写满答案的羊皮纸。「同一个谜题有三种答案。」她说，「门环接受了第一种，但我怀疑第二种更优雅。」青铜鹰环安静地垂在门上，像也在旁听这场小小的审判。',
      choices: [
        { label: '听她讲三种答案', delta: 4, response: '帕德玛讲得很快，却会在你皱眉时停下来重排逻辑。最后你指出第三种虽然不漂亮，却最不容易被误解。她沉思片刻，把它圈了起来，说清楚有时比漂亮更难。', addMemory: 'padma_riddle_variant' },
        { label: '问她为什么不满足于通过', delta: 3, response: '她像听到一个奇怪的问题，说通过只是门让你进去，理解才是你真的进去了。说完她自己也笑了一下，承认这听起来非常拉文克劳。' },
      ],
      aiSeed: '',
    },
    {
      id: 'padma_year1_parvati_letter',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '帕德玛把一封写给帕瓦蒂的短信拿给你看，表情有些犹豫。「你觉得这句话是不是听起来像我在纠正她？」她指着中间一行，「我只是想说她的占卜作业论点不够稳，但她会以为我在扫兴。」信纸边缘被折出一道深痕，显然她已经重写过。',
      choices: [
        { label: '帮她把语气放软', delta: 5, response: '你建议她先写“我喜欢你那个想法”，再写“也许可以换个支撑”。帕德玛试着读了一遍，肩膀放松下来。她说姐妹之间最麻烦的地方，是你太容易知道对方会误会哪里。', addMemory: 'padma_parvati_letter' },
        { label: '问她是不是常担心这个', delta: 4, response: '帕德玛承认她不想总像那个负责指出漏洞的人，可漏洞确实在那里。你没有笑，她便继续说，有时候聪明不难，难的是聪明完以后还让人愿意听。' },
      ],
      aiSeed: '',
    },
    {
      id: 'padma_year1_wrong_stair_proof',
      require: { minTier: 3, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '帕德玛在移动楼梯前拦住你，羊皮纸上画着一张复杂的路线图。「我认为这段楼梯不是随机移动。」她说，「至少星期三晚餐后不是。」楼梯正慢悠悠地偏向另一个方向，她的眼睛亮得像抓住了城堡的一根线头。',
      choices: [
        { label: '陪她验证路线', delta: 4, response: '你们在楼梯口等了三轮，终于发现它每次都避开一扇会打喷嚏的画像。帕德玛兴奋地把结论写下，又承认样本还不够。她高兴的不是证明自己对，而是城堡真的愿意露出一点规律。', addMemory: 'padma_stair_proof' },
        { label: '问如果证明错了怎么办', delta: 3, response: '她毫不犹豫地说那也很好，至少可以排除一种解释。这个回答干净利落，让失败听起来也像知识的一部分。' },
      ],
      aiSeed: '',
    },
    {
      id: 'padma_year1_common_room_noise',
      require: { minTier: 4, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '帕德玛在图书馆角落找你，手里夹着一支快写秃的羽毛笔。「拉文克劳公共休息室今晚太吵了。」她说得很平静，却把“太吵”两个字写进了笔记边缘三次。「你知道哪里能让人安静想完一个问题吗？不是躲起来，只是想完。」',
      choices: [
        { label: '带她去一处安静窗台', delta: 5, response: '你们找到一处能看见黑湖的窗台。帕德玛坐下后先长长呼了口气，随后才重新展开笔记。她说有时候大家以为拉文克劳都喜欢讨论，可她偶尔只想听见自己脑子里那条线走到尽头。', addMemory: 'padma_quiet_window' },
        { label: '问她不喜欢热闹吗', delta: 4, response: '她说喜欢，只是不喜欢每个问题刚冒头就被别人抢去变成比赛。这个说法让你想到公共休息室里那些聪明而尖锐的声音，也想到她在其中努力保留自己的节奏。' },
      ],
      aiSeed: '',
    },
  ],

  terryBoot: [
    {
      id: 'terry_year1_chalk_diagram',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '泰瑞在空教室黑板前叫住你，袖口沾满粉笔灰。「你能不能站在那里别动一下？」他指着门边的影子，「我在验证光线会不会影响隐形咒的边缘。」黑板上画满弧线和小箭头，像他把整个下午都塞进了粉笔里。',
      choices: [
        { label: '配合他站到位置上', delta: 4, response: '你站到门边，泰瑞立刻记录影子的变化。他兴奋地说这说明咒语边缘不是消失，而是让人错过。你不确定自己完全听懂了，但他看见你认真站着，语气明显亮起来。', addMemory: 'terry_chalk_diagram' },
        { label: '问他为什么不用简单办法', delta: 3, response: '泰瑞认真回答，简单办法只能知道能不能用，不能知道为什么能用。说完他自己也觉得太像课本，尴尬地咳了一声，却没有收回。' },
      ],
      aiSeed: '',
    },
    {
      id: 'terry_year1_missing_step_essay',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '泰瑞把一篇论文草稿摊在你面前，第三段和第四段之间画着一个很大的问号。「这里跳得太快。」他说，「教授可能不会扣很多分，但我会一直记得。」他看起来不是害怕成绩，而是害怕脑子里有一块地板没有铺好。',
      choices: [
        { label: '陪他补中间一步', delta: 5, response: '你们把第三段拆成两句，又在中间补了一个例子。泰瑞读完后终于露出如释重负的表情，像一座小桥终于架上了。他说答案突然能走过去了，而不是跳过去。', addMemory: 'terry_missing_step_essay' },
        { label: '说读者可能看得懂', delta: 3, response: '泰瑞点头承认，也许看得懂。但他又说，能看懂不代表被照顾好了。这个说法有点古怪，却让你看见他对清晰表达的认真。' },
      ],
      aiSeed: '',
    },
    {
      id: 'terry_year1_quill_experiment',
      require: { minTier: 3, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '泰瑞举着两支羽毛笔追上你，一支普通，一支笔尖微微发蓝。「你能闭眼抽一支吗？」他问得很认真，「我想确认防漏墨咒是不是只改变了书写手感，而不是心理暗示。」旁边几个学生以为他在开玩笑，他却已经准备好了记录表。',
      choices: [
        { label: '认真参与测试', delta: 4, response: '你闭眼写了三行字，泰瑞逐项记录，最后发现发蓝那支确实更顺。围观的人散了，他却还在高兴，因为这个小实验没有被当成怪事。你帮他证明的不只是羽毛笔，也是他提问的方式值得被认真对待。', addMemory: 'terry_quill_experiment' },
        { label: '问这实验有什么用', delta: 3, response: '泰瑞说如果能让羽毛笔少漏墨，宾斯教授课上大家至少能少毁几张笔记。这个用途朴素得出乎意料，也让他的古怪显得可爱了些。' },
      ],
      aiSeed: '',
    },
    {
      id: 'terry_year1_tower_sundial',
      require: { minTier: 4, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '天文塔下，泰瑞拦住你，手里拿着一张画了太阳影子的纸。「你注意过这座城堡的影子不太守规矩吗？」他问。黄昏的光斜斜落在石墙上，塔影像被谁轻轻拨动过一样，和普通日晷的方向差了一点。',
      choices: [
        { label: '陪他观察塔影', delta: 5, response: '你们等到钟声响起，塔影果然慢了半拍才移动。泰瑞兴奋得几乎忘了压低声音，又立刻把发现写下来。他说霍格沃茨最迷人的地方就是连影子都像有自己的意见。', addMemory: 'terry_tower_sundial' },
        { label: '问他会不会只是看错', delta: 4, response: '泰瑞说当然可能，所以才需要第二个人。这个回答没有防备，只有对验证的尊重。你忽然觉得被他叫来不是当听众，而是真正参与了发现。' },
      ],
      aiSeed: '',
    },
  ],

  michaelCorner: [
    {
      id: 'michael_year1_counterspell_argument',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '迈克尔在庭院长廊追上你，开口第一句就是：「你刚才那个反咒慢了半拍。」他说完立刻把羊皮纸摊开，像已经准备好为这句话打一场小型辩论。纸上画着两个人决斗的站位，线条急促，却并不潦草。',
      choices: [
        { label: '和他推演反咒时机', delta: 4, response: '你指出自己慢半拍是为了等对方咒语完全成形。迈克尔一开始不服，推演到第三遍时却停住了。他承认这在某些情况下更稳，语气仍然不甘心，但眼睛很亮。被反驳并没有让他扫兴，反而让他更认真。', addMemory: 'michael_counterspell_argument' },
        { label: '问他是不是专门来挑错', delta: 3, response: '他笑了一下，说挑错只是讨论的一种不礼貌开头。随后他又补充，他会努力换一种开头。这个承认让他的锋芒没有那么刺人。' },
      ],
      aiSeed: '',
    },
    {
      id: 'michael_year1_chess_table',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '迈克尔在拉文克劳公共休息室外的石桌旁等你，桌上摆着一盘只剩半局的巫师棋。「我需要一个不会在骑士被吃掉时大喊大叫的人。」他说。棋子们正在互相抱怨，尤其是一个失去马的骑士，声音大得几乎传到门环那里。',
      choices: [
        { label: '陪他复盘棋局', delta: 4, response: '你们把前三步倒回去，发现真正的问题不是骑士，而是一个太早推进的兵。迈克尔盯着棋盘，最后承认自己只顾着进攻。这个承认很快，却比赢一局更难。', addMemory: 'michael_chess_table' },
        { label: '问他为什么不找同院同学', delta: 3, response: '他说同院的人太快把讨论变成排名。你看着他，又看着那盘棋，明白他想要的不是观众，而是一个能让他输得有意义的人。' },
      ],
      aiSeed: '',
    },
    {
      id: 'michael_year1_wrong_answer_pride',
      require: { minTier: 3, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '课后，迈克尔在走廊拐角等你，脸色有点僵。「你刚才听见我答错了吧？」他问得像在挑战你承认事实。旁边画像还在低声重复那个错误答案，他瞪了画像一眼，画像立刻假装欣赏自己的画框。',
      choices: [
        { label: '说你也答错过', delta: 4, response: '迈克尔的表情松了一点，但立刻说这不是重点。重点是他明明知道前一步，却在最后一步急了。你陪他把题重新走了一遍，他终于把正确答案说出口，像把卡在喉咙里的刺拔掉。', addMemory: 'michael_wrong_answer_pride' },
        { label: '问他怕别人笑吗', delta: 5, response: '他沉默片刻，说怕别人以为他其实没那么聪明。说完他很快补充每个人都会有这种时候。你没有拆穿他把“我”换成了“每个人”，只是点了点头。' },
      ],
      aiSeed: '',
    },
    {
      id: 'michael_year1_bridge_challenge',
      require: { minTier: 4, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '迈克尔在通往庭院的石桥上叫住你，桥下雾气翻着白边。「给你一个问题。」他说，「如果一座桥会改变长度，你先测哪一边？」他说完就盯着你，显然这不是玩笑，而是他刚才真的被这座桥气到了。',
      choices: [
        { label: '认真给出测量办法', delta: 5, response: '你建议先找固定参照物，再测桥两端的影子。迈克尔原本准备反驳，听完后却慢慢点头，说这比他刚才那套办法少走两步。雾从桥下升上来，你们像两个认真研究城堡脾气的人。', addMemory: 'michael_bridge_challenge' },
        { label: '问桥为什么会变长', delta: 3, response: '迈克尔立刻说这正是问题所在，然后又忽然笑了。他承认也许霍格沃茨只是讨厌有人赶时间。这个结论不严谨，却让他第一次没有急着把城堡完全解释清楚。' },
      ],
      aiSeed: '',
    },
  ],

  anthonyGoldstein: [
    {
      id: 'anthony_year1_index_cards',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '安东尼抱着一叠索引卡在图书馆门口拦住你，卡片按颜色分成四摞。「我需要一个外部读者。」他说得很正式，「不是帮我背，是确认这些分类对别人是否也说得通。」每张卡片边缘都写得整整齐齐，像小小的秩序堡垒。',
      choices: [
        { label: '帮他试读分类', delta: 4, response: '你发现两张卡片其实可以合并。安东尼认真考虑后把它们放到一起，还在角落标了“更清晰”。他没有因为自己的系统被改动而不高兴，反而像系统终于呼吸顺了。', addMemory: 'anthony_index_cards' },
        { label: '问他为什么要外部读者', delta: 3, response: '他说人很容易把自己脑子里的桥当成纸上也存在。这个说法严谨得有点可爱。你意识到他追求的不是炫耀知识，而是让知识真的能被别人走过去。' },
      ],
      aiSeed: '',
    },
    {
      id: 'anthony_year1_history_dispute',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '魔法史课后，安东尼在盔甲旁追上你，眉头紧锁。「宾斯教授刚才把一个日期说成了另一场叛乱的年份。」他说，「我知道打断幽灵教授不现实，但错误留在那里也很难受。」盔甲咔哒一声转过头，像也想听听怎么办。',
      choices: [
        { label: '帮他写一张更正便条', delta: 5, response: '你们用礼貌得近乎小心的措辞写下更正，夹进课后作业里。安东尼检查了三遍语气，确认它不像挑衅。做完后他说事实不需要大声，也应该被放回正确位置。', addMemory: 'anthony_history_dispute' },
        { label: '问他为什么这么难受', delta: 4, response: '他说日期错了，后面的因果也会错；因果错了，人们就会误会那些做选择的人。这个答案让魔法史从一串年份里短暂活了过来。' },
      ],
      aiSeed: '',
    },
    {
      id: 'anthony_year1_tidy_notice',
      require: { minTier: 3, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '安东尼站在公告栏前，正把几张被贴歪的通知重新排齐。他看见你，稍微有些尴尬。「我知道这不是我的职责。」他说，「但斜着贴会让人漏看下面那张。」最底下的通知是关于温室临时关闭的，已经被一张魁地奇涂鸦遮住一半。',
      choices: [
        { label: '帮他重新整理公告', delta: 4, response: '你们把公告按日期排好，安东尼在最下面留出那张温室通知。路过的学生终于停下来看了一眼，他像松了口气。秩序在这里不是洁癖，而是让重要的小事不被热闹盖住。', addMemory: 'anthony_tidy_notice' },
        { label: '问他不怕被说多管闲事吗', delta: 3, response: '安东尼说有可能，但如果有人因此少跑一趟温室，那就值得。他把图钉按牢，语气平稳，却带着一种不显眼的勇气。' },
      ],
      aiSeed: '',
    },
    {
      id: 'anthony_year1_shared_notes',
      require: { minTier: 4, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '安东尼把一份誊抄得很清楚的课堂笔记递给你。「我听说你那节课墨水洒了。」他说，「这份不是答案，只是结构。」每个标题下面都有空行，留给你补自己的理解。他似乎很在意你不要把这当成施舍。',
      choices: [
        { label: '认真收下笔记', delta: 5, response: '你翻开笔记，发现他没有把自己的结论塞满整页，而是留了足够空间。安东尼说好的笔记应该帮人找回思路，不应该替人思考。你向他道谢，他露出一个克制但真心的笑。', addMemory: 'anthony_shared_notes' },
        { label: '问他为什么留空行', delta: 4, response: '他说每个人理解的顺序不一样，如果笔记太满，会让后来的人以为只有一种走法。这句话让他严谨的外表忽然变得宽阔起来。' },
      ],
      aiSeed: '',
    },
  ],
};

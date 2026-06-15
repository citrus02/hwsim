/**
 * year1-students-foundation.js
 * 一年级学生主动来访基础包。
 *
 * 先保证每个学生都不是被动站桩：他们会因为自己的生活、压力、玩笑、
 * 好奇或求助来找玩家。
 */

export const YEAR1_STUDENT_FOUNDATION_PROACTIVE = {
  luna: [
    {
      id: 'luna_year1_lost_list',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '卢娜在公告栏前等你，手里拿着一张写满奇怪项目的清单：鞋、耳环、会自己换位置的羽毛笔、也许并不存在的蓝色小东西。「我想请你帮我看一眼，」她说，「不是帮我找，暂时不是。只是确认它们丢得有没有规律。」她的语气很平静，像丢东西也是一种值得研究的天文现象。',
      choices: [
        { label: '认真看清单', delta: 5, response: '你把清单按地点重新排了一遍，发现大多数东西都在拉文克劳塔楼附近消失。卢娜点点头，说这说明不是骚扰虻特别偏爱她，而是有人很缺乏想象力。她看起来并不难过，只是很感谢你没有把清单当笑话。', addMemory: 'luna_lost_list_pattern' },
        { label: '问她会不会生气', delta: 4, response: '卢娜想了想，说会，但生气容易让人看不见小线索。她把清单折好，补充说如果你哪天也丢了不想被别人笑的东西，她会帮你找。' },
      ],
      aiSeed: '',
    },
  ],
  ginnyWeasley: [
    {
      id: 'ginny_year1_table_escape',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '金妮在格兰芬多长桌旁叫住你，声音压得很低。「你能不能假装有事找我？」她的耳朵有点红，旁边几个韦斯莱正聊得热火朝天，完全没注意到她已经被“妹妹”“新生”和“你还小”这几个词压得快喘不过气。她看向你，眼神里带着一点请求，也带着不想承认自己在请求的倔强。',
      choices: [
        { label: '顺势把她叫走', delta: 5, response: '你随便编了个关于作业的问题，金妮立刻站起来，快得像早就等着这个台阶。走到门口后，她长长吐了口气，说有时候家人太多也会让人没有地方放下自己。她说完看向你，像确认你不会拿这句话去换笑料。', addMemory: 'ginny_escaped_table' },
        { label: '问她想去哪儿', delta: 4, response: '她想了想，说哪里都行，只要暂时没有人提醒她她是谁的妹妹。你们最后去了球场边，风很大，她反而看起来更自在。' },
      ],
      aiSeed: '',
    },
  ],
  fredWeasley: [
    {
      id: 'fred_year1_fake_notice',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '弗雷德拿着一张伪造得相当认真的公告来找你，标题写着“关于禁止楼梯在不合适时间移动的严正通知”。他一本正经地问你：「太假吗？」纸边还画着一个明显不属于麦格教授风格的小烟花。乔治远远看着你们，像在等一场专业评审。',
      choices: [
        { label: '指出烟花太明显', delta: 4, response: '弗雷德看起来受到了艺术上的伤害，但还是把小烟花划掉了。「你说得对，」他说，「严肃的胡说八道要有严肃的外观。」他把修改后的公告举起来，像你刚参与了一次重大创作。', addMemory: 'fred_fake_notice_review' },
        { label: '问贴出去会怎样', delta: 5, response: '弗雷德咧嘴笑，说最理想的结果是楼梯自己感到羞愧。你提醒他别让新生真的信了。他点点头，在底部加了一行小字：如楼梯拒不配合，请不要尝试争辩。' },
      ],
      aiSeed: '',
    },
  ],
  georgeWeasley: [
    {
      id: 'george_year1_missing_punchline',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '乔治在公共休息室壁炉旁拦住你，手里拿着一张只写了前半截的笑话。「我们遇到严重危机，」他说，「弗雷德觉得结尾应该爆炸，我觉得结尾应该沉默三秒再爆炸。你看起来像能理解沉默三秒价值的人。」壁炉火光把纸上的涂改照得一清二楚，背面还写着“如果有人哭，立刻取消”。',
      choices: [
        { label: '支持沉默三秒', delta: 4, response: '乔治郑重宣布你有惊人的艺术判断力。他把那三秒写进计划里，又在旁边标注“观察对象是否真的觉得好笑”。你发现他在意的不只是效果，也在意笑声落到谁身上。', addMemory: 'george_punchline_review' },
        { label: '问为什么要取消', delta: 5, response: '乔治翻到背面，看了那行字一眼，说笑话如果只能靠别人难堪来成立，就不够聪明。说完他像觉得自己太严肃，立刻补了一句当然爆炸还是必要的。' },
      ],
      aiSeed: '',
    },
  ],
  seamus: [
    {
      id: 'seamus_year1_smoke_feather',
      require: { minTier: 1, cooldownDays: 9, chance: 0.2, minGrade: 1, maxGrade: 1 },
      opening: '西莫在魔咒课后追上你，袖口还冒着一点灰烟。「你刚才看见了吗？」他问，语气里一半尴尬一半兴奋，「羽毛确实没飞起来，但它也没有完全爆炸。严格来说，这算进步。」他把那根焦黑羽毛举起来，像举着一面战旗。',
      choices: [
        { label: '承认这是进步', delta: 4, response: '西莫立刻笑开了，说你很有科学精神。随后他压低声音承认，他写信给家里时可能会省略“冒烟”那部分。你建议写“几乎成功”，他认真考虑了。', addMemory: 'seamus_smoke_progress' },
        { label: '问他还敢再试吗', delta: 3, response: '西莫像被冒犯了似的挺起胸，说当然敢。三秒后他又补充，最好站远一点。你们都笑了，那根焦黑羽毛也终于不那么像失败。' },
      ],
      aiSeed: '',
    },
  ],
  deanThomas: [
    {
      id: 'dean_year1_banner_opinion',
      require: { minTier: 1, cooldownDays: 9, chance: 0.2, minGrade: 1, maxGrade: 1 },
      opening: '迪安在看台下找到你，手里展开一张还没上色的学院横幅草图。红金色的位置被他用很细的线标出来，旁边还画着几只在空中追逐的小狮子。「你觉得这里太满了吗？」他问，「我不想它看起来像麻瓜广告牌，但也不能太无聊。」',
      choices: [
        { label: '认真看构图', delta: 4, response: '你指出右上角可以留白，迪安立刻用炭笔改了几下。横幅一下子有了呼吸感。他笑着说你比某些只会喊“画大点”的人有用多了。', addMemory: 'dean_banner_opinion' },
        { label: '问麻瓜广告牌是什么', delta: 3, response: '迪安来了精神，给你讲伦敦街边那些巨大海报。说着说着，他又低头看霍格沃茨的看台，像在把两个世界的颜色慢慢调到一起。' },
      ],
      aiSeed: '',
    },
  ],
  leeJordan: [
    {
      id: 'lee_year1_commentary_test',
      require: { minTier: 1, cooldownDays: 9, chance: 0.2, minGrade: 1, maxGrade: 1 },
      opening: '李·乔丹在魁地奇看台最高处朝你挥手，手里拿着一卷写满涂改的解说稿。「听众来了，太好了。」他说，「我需要测试一句话到底是好笑，还是会让我被麦格教授用眼神杀死。」风把稿纸吹得哗哗响，他却护得很认真。',
      choices: [
        { label: '让他念来听听', delta: 4, response: '李清了清嗓子，用正式比赛的架势念出那句解说。确实好笑，也确实危险。你建议他删掉最后半句，他遗憾地点头，说活着解说下一场也很重要。', addMemory: 'lee_commentary_test' },
        { label: '问他怕麦格吗', delta: 3, response: '李立刻说这是尊重，不是害怕。远处麦格教授恰好经过看台下方，他的音量瞬间降了一半。你们对视一眼，谁也没有拆穿他。' },
      ],
      aiSeed: '',
    },
  ],
  percyWeasley: [
    {
      id: 'percy_year1_patrol_table',
      require: { minTier: 1, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '珀西在公告栏前叫住你，手里拿着一张排得密密麻麻的巡逻表。「你刚才从三楼下来，对吗？」他说得像在审问，随后又把语气放缓一点，「我需要确认那条楼梯今晚有没有乱动。不是为了扣分，是为了避免有人真的迷路。」',
      choices: [
        { label: '告诉他楼梯情况', delta: 3, response: '珀西认真把你的描述记下来，还在旁边标了时间。你发现他并不是享受管人，而是真的相信秩序能让大家少出事。这让他的严肃不那么讨厌了。', addMemory: 'percy_patrol_info' },
        { label: '问他会不会太累', delta: 4, response: '珀西愣了一下，像这个问题不在表格范围内。他说级长职责本来就多，随后又小声承认今天还没写完变形术论文。你帮他把表格压平，他没有拒绝。' },
      ],
      aiSeed: '',
    },
  ],
  pansy: [
    {
      id: 'pansy_year1_public_face',
      require: { minTier: 1, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '潘西在二楼镜子前叫住你，语气挑剔得像你欠她一个答案。「你刚才经过斯莱特林长桌时看见了吧？」她问。镜子里的她发卡端正，表情也端正，只有手套边缘被她攥出一点皱痕。「那两个新生吵得太难看。我只是让他们别丢脸。」',
      choices: [
        { label: '说她控场很稳', delta: 4, response: '潘西显然准备好了反击，却没准备好被这样评价。她哼了一声，说这只是基本能力。可她重新看向镜子时，嘴角有一点很快压下去的得意。', addMemory: 'pansy_table_control' },
        { label: '问她为什么在意体面', delta: 3, response: '她立刻说体面就是位置，位置就是安全。话说出口后，她像意识到太直接，又用一句刻薄把它盖住。但你已经听见了。' },
      ],
      aiSeed: '',
    },
  ],
  blaiseZabini: [
    {
      id: 'blaise_year1_quiet_warning',
      require: { minTier: 1, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '布雷司在地牢走廊阴影里等你，手里合着一本薄诗集。「如果你打算从东边楼梯走，」他说，「现在不是好时候。」他说完就像准备离开，仿佛提醒你只是顺手，而不是他专门站在这里等了几分钟。',
      choices: [
        { label: '问他怎么知道', delta: 4, response: '布雷司看了你一眼，说有些人吵架时声音太大，有些教授生气时脚步太轻。你顺着他指的方向绕开，远处果然传来斯内普教授冰冷的声音。', addMemory: 'blaise_quiet_warning' },
        { label: '谢谢他的提醒', delta: 3, response: '他没有表现出高兴，只淡淡说你如果被扣分，走廊会更吵。可他离开时把诗集夹在臂弯里，脚步比刚才轻松一点。' },
      ],
      aiSeed: '',
    },
  ],
  crabbe: [
    {
      id: 'crabbe_year1_pastry_share',
      require: { minTier: 1, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '克拉布在厨房附近拦住你，动作快得不像平时。他把一块还热的馅饼塞到你手里，然后左右看了看，像怕被谁发现自己在做一件不够凶的事。「多拿的，」他说，声音很低，「别浪费。」',
      choices: [
        { label: '接过馅饼', delta: 3, response: '馅饼还很热，边缘有点烫手。你说谢谢，克拉布只是点点头，转身就走。走了几步后，他又回头补一句：里面是肉馅，比甜的好。那像是他能给出的详细关心。', addMemory: 'crabbe_pastry_share' },
        { label: '问他要不要一起吃', delta: 4, response: '克拉布明显愣住，像这个选项不在他的计划里。最后他坐到墙边，和你分着吃完。你们说话不多，但这次沉默并不尴尬。' },
      ],
      aiSeed: '',
    },
  ],
  goyle: [
    {
      id: 'goyle_year1_short_warning',
      require: { minTier: 1, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '高尔在地牢入口站着，像一堵不太想移动的墙。你经过时，他忽然低声说：「别进去。」说完他看向另一边，仿佛这三个字已经用完了今天所有主动说话的额度。门后传来坩埚摔碎的声音，紧接着是斯内普教授令人发冷的沉默。',
      choices: [
        { label: '听他的绕路', delta: 4, response: '你改走另一条路。高尔没有看你，只把肩膀稍微往旁边挪，让你能过去。这个动作很小，但显然不是偶然。', addMemory: 'goyle_short_warning' },
        { label: '问里面怎么了', delta: 3, response: '高尔想了很久，最后说：「有人蠢。」这解释短得过分，却足够准确。你忍住没笑，他看起来因此没那么紧绷。' },
      ],
      aiSeed: '',
    },
  ],
  marcusFlint: [
    {
      id: 'flint_year1_ball_box',
      require: { minTier: 1, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '弗林特在魁地奇球场边粗声叫住你，脚边的球箱正在不安分地震动。「过来按一下。」他说得像命令，又像懒得解释。箱扣松了一边，里面的游走球撞得木板咚咚响。他的护具上沾着泥，显然已经一个人折腾了很久。',
      choices: [
        { label: '帮他压住球箱', delta: 3, response: '你按住箱盖，弗林特迅速扣上锁。游走球在里面重重撞了一下，终于安静。他看你一眼，粗声说你手劲还行。对他来说，这大概已经是相当正式的感谢。', addMemory: 'flint_ball_box_help' },
        { label: '问队友去哪了', delta: 4, response: '弗林特冷哼一声，说队长最后总得收拾别人留下的东西。那句话不客气，却让你看见他粗鲁下面那点责任。' },
      ],
      aiSeed: '',
    },
  ],
  choChang: [
    {
      id: 'cho_year1_seeker_question',
      require: { minTier: 1, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '秋·张在看台边叫住你，手里拿着一副旧望远镜。「你刚才在看训练吗？」她问得很轻，却不是寒暄。她把望远镜递给你，指向球场上方一处几乎看不清的金色残影。「你觉得找球手应该先看飞贼，还是先看其他找球手？」',
      choices: [
        { label: '说先看其他人', delta: 4, response: '秋的眼睛亮了一下，说很多人都只盯着金色，可耐心常常先从人的动作里漏出来。她接过望远镜，像你刚刚答对的不是战术题，而是她看世界的一种方式。', addMemory: 'cho_seeker_question' },
        { label: '问她自己的答案', delta: 3, response: '她笑了笑，说要看风、看人、也看自己什么时候开始急。这个答案很温和，却藏着找球手的锋利。' },
      ],
      aiSeed: '',
    },
  ],
  padmaPatil: [
    {
      id: 'padma_year1_riddle_argument',
      require: { minTier: 1, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '帕德玛在拉文克劳门环前叫住你，手里拿着一张写满推理的纸。「我想听一个非拉文克劳的答案，」她说，「不是因为你们不聪明，是因为你们有时候不把问题想得那么……绕。」门环刚才问的问题还在空气里回响：什么东西被拥有时最容易失去？',
      choices: [
        { label: '给出直觉答案', delta: 4, response: '你说出自己的答案，帕德玛没有立刻评判，而是认真把它写到纸边。她说这比她那版简洁，虽然不够漂亮。过了一会儿，她又补充，有时简洁本身就很漂亮。', addMemory: 'padma_riddle_answer' },
        { label: '问她的推理过程', delta: 3, response: '帕德玛立刻展开那张纸，从三个假设讲到两个排除项。她讲得很快，但发现你在听，就把最后一步放慢了。那是她表达尊重的方式。' },
      ],
      aiSeed: '',
    },
  ],
  terryBoot: [
    {
      id: 'terry_year1_proof_gap',
      require: { minTier: 1, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '泰瑞·布特拿着一张写满算式和咒语结构的羊皮纸追上你，神情严肃得像发现了密道。「你能不能看一下这里？」他指着中间一处被圈起来的空白，「我知道结论是对的，但中间少了一步。少一步就很烦。」',
      choices: [
        { label: '陪他补那一步', delta: 4, response: '你们站在窗台边讨论了很久，终于找到缺失的推导。泰瑞长出一口气，像心里一块歪掉的砖终于放正。他说你不一定懂全部，但你很会问让人停下来的问题。', addMemory: 'terry_proof_gap' },
        { label: '问为什么这么在意', delta: 3, response: '泰瑞说答案对不代表路是对的，路错了下次还会摔。说完他有点不好意思，像刚把自己最较真的部分暴露出来。' },
      ],
      aiSeed: '',
    },
  ],
  michaelCorner: [
    {
      id: 'michael_year1_duel_argument',
      require: { minTier: 1, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '迈克尔·科纳在庭院长廊追上你，手里拿着一张简陋的决斗站位图。「你刚才那场练习我看了，」他说，语气像挑战又像邀请，「你第二步如果往左半步，结果会完全不一样。」风把图纸吹得翻起，他用手肘压住，显然准备和你争很久。',
      choices: [
        { label: '和他认真争论', delta: 4, response: '你指出往左会暴露侧面，迈克尔立刻反驳，又在第三次推演时停住。你们谁也没完全赢，但他看起来很高兴，因为这场争论没有变成面子问题。', addMemory: 'michael_duel_argument' },
        { label: '问他是不是想赢你', delta: 3, response: '迈克尔笑了一下，说当然想，但更想知道自己想得对不对。这个答案比单纯好胜诚实得多，也让他没那么刺人。' },
      ],
      aiSeed: '',
    },
  ],
  anthonyGoldstein: [
    {
      id: 'anthony_year1_timeline_check',
      require: { minTier: 1, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '安东尼·戈德斯坦在魔法史教室外叫住你，手里拿着一张时间线。「我知道这听起来很无聊，」他说，虽然表情完全不像觉得无聊，「但宾斯教授刚才把两个年份讲得太近了，很多人会记混。你愿意帮我确认一下哪种写法更清楚吗？」',
      choices: [
        { label: '帮他看时间线', delta: 4, response: '你指出其中一段可以换成事件顺序，安东尼认真改了。改完后他承认这样更容易懂。这个承认很正式，却一点也不敷衍。', addMemory: 'anthony_timeline_check' },
        { label: '问他为什么帮别人整理', delta: 3, response: '他说如果大家都记错，课堂讨论会变得很痛苦。停了一下，他又补充，也许他只是受不了混乱。诚实让这句话听起来没那么自负。' },
      ],
      aiSeed: '',
    },
  ],
  cedricDiggory: [
    {
      id: 'cedric_year1_returned_book',
      require: { minTier: 1, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '塞德里克在图书馆门口追上你，递来一本你以为已经找不到的参考书。「我看到有人拿错了，」他说，「没有恶意，只是放回了别的架子。」书页里夹着一张小纸条，标出你可能要看的章节。他说得很自然，仿佛替别人把事情做好只是顺路。',
      choices: [
        { label: '认真道谢', delta: 4, response: '塞德里克笑了笑，说不是什么大事。可他没有敷衍，而是提醒你第三章有一处容易误读。你发现他的体贴不是表演，是已经习惯先替别人多想一步。', addMemory: 'cedric_returned_book' },
        { label: '问他怎么知道你要用', delta: 3, response: '他说你上次在长桌旁提过一次。你自己几乎忘了，他却记住了。这个事实比那本书本身更让人意外。' },
      ],
      aiSeed: '',
    },
  ],
  hannahAbbott: [
    {
      id: 'hannah_year1_biscuit_bag',
      require: { minTier: 1, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '汉娜在温室门口叫住你，手里攥着一个小纸包。「我多拿了几块饼干，」她说，立刻又补充，「不是偷拿，是厨房的小精灵给的。也不是特意给你，就是……你刚才看起来有点累。」她说到最后声音越来越小，像怕自己的关心太明显。',
      choices: [
        { label: '接过饼干', delta: 4, response: '饼干有一点姜味，暖得很快。汉娜看你吃了一口，整个人都放松下来。她小声说她紧张的时候也会想吃东西，所以也许这有用。', addMemory: 'hannah_biscuit_bag' },
        { label: '问她自己紧不紧张', delta: 5, response: '汉娜愣了一下，随后点点头。她说温室里的植物有些会突然咬人，学生有时也差不多。你们一起笑了，她终于没那么绷着。' },
      ],
      aiSeed: '',
    },
  ],
  ernieMacmillan: [
    {
      id: 'ernie_year1_apology_draft',
      require: { minTier: 1, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '厄尼·麦克米兰拿着一张写得非常正式的羊皮纸找到你。「我想请你看一封道歉信，」他说，语气像在宣布学生会决议，「不是我的错全在我，但我确实说得太重。」羊皮纸第一行写着“鉴于本人在走廊争执中措辞欠妥”，长得像法律文件。',
      choices: [
        { label: '建议写简单点', delta: 4, response: '厄尼一开始有点受伤，但还是听你把那句改成“对不起，我刚才太急了”。他读了两遍，承认这比原文更像人话。这个承认让他显得比正式声明可靠得多。', addMemory: 'ernie_apology_draft' },
        { label: '问他为什么道歉', delta: 3, response: '他说公正不是只在别人错的时候坚持，也包括自己错了一部分时承认。说这话时，他挺直背，像终于找到了比体面更重要的东西。' },
      ],
      aiSeed: '',
    },
  ],
  susanBones: [
    {
      id: 'susan_year1_notice_pause',
      require: { minTier: 1, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '苏珊在公告栏前等你，手指停在一张魔法部通知旁边。她没有立刻说话，像是在决定这个话题会不会太沉。「你能陪我去图书馆查一个名字吗？」她问，「不是作业。我只是想确认它有没有被写错。」',
      choices: [
        { label: '陪她去查', delta: 5, response: '你们在旧报纸里找到那个名字，拼写确实和通知上不一样。苏珊把两种写法抄下来，手指有点发白。她说名字如果被写错，后面的事也会一点点歪掉。', addMemory: 'susan_checked_name' },
        { label: '问这个名字重要吗', delta: 4, response: '苏珊看着公告，说对某些人来说重要。她没有讲家族故事，你也没有逼她。那份克制让她终于能继续站在你身边。' },
      ],
      aiSeed: '',
    },
  ],
  justinFinchFletchley: [
    {
      id: 'justin_year1_muggle_comparison',
      require: { minTier: 1, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '贾斯廷在大礼堂门口追上你，手里拿着一张写满课程名的纸。「你有空吗？我想确认一下，变形术是不是有点像……不，完全不像几何。」他苦恼地看着那张纸，「我总想用以前学校的方式理解这里，可它们总是不太合适。」',
      choices: [
        { label: '帮他找新类比', delta: 4, response: '你们把变形术比作一种更任性的语法，把魔药课比作绝不能省略步骤的烹饪。贾斯廷笑了，说这听起来终于像他能抓住的东西。', addMemory: 'justin_muggle_comparison' },
        { label: '问他想念旧学校吗', delta: 5, response: '贾斯廷沉默了一会儿，说有时候想。不是因为霍格沃茨不好，而是因为在旧学校里他至少知道自己该怎么当学生。你没有笑这个理由，他明显松了口气。' },
      ],
      aiSeed: '',
    },
  ],
};

/**
 * 一年级学生主动聊聊加厚包（一）。
 *
 * 每名学生补一条可反复进入人物关系的“校园片刻”，重点让玩家感觉是在和同学相处，
 * 而不是点击资料卡：有人急躁，有人爱面子，有人温吞，有人把善意藏得很深。
 */

export const STUDENT_YEAR1_CHAT_PLUS_SCENES = {
  hermione: {
    activeChatEvents: [{
      id: 'hermione_year1_chat_spare_parchment',
      minTier: 1,
      text: '赫敏在图书馆把几张备用羊皮纸压平，边角对得很齐。她看见你时，先下意识把书签夹好，才像忽然想起自己并不是在接受检查。',
      choices: [
        { label: '问她在准备什么', delta: 3, response: '她说不是准备，只是避免“突然需要时什么都没有”。随后她停顿一下，把一张羊皮纸推给你，语气仍然很快，却没有那么硬。' },
        { label: '说她总是想得很周到', delta: 4, response: '赫敏耳尖红了一点，立刻说这只是基本习惯。但她把羽毛笔摆回墨水瓶旁时，动作明显轻快了些。' },
      ],
    }],
  },
  ron: {
    activeChatEvents: [{
      id: 'ron_year1_chat_chess_piece',
      minTier: 1,
      text: '罗恩在公共休息室桌边修一枚巫师棋棋子。那匹小骑士似乎不太配合，一直用细小的剑柄戳他的手指。罗恩一边躲一边嘟囔，像在和一个脾气很坏的老朋友吵架。',
      choices: [
        { label: '问它是不是常这样', delta: 3, response: '罗恩说这匹骑士从查理那儿传下来时就这样，家里旧东西大多有点脾气。他说着说着笑了，显然觉得这毛病也算一种家族特色。' },
        { label: '帮他按住棋盘', delta: 4, response: '你按住棋盘，罗恩终于把松动的底座卡回去。他得意地宣布这是一次伟大的战术胜利，棋子则愤怒地敲了敲盾牌。' },
      ],
    }],
  },
  harry: {
    activeChatEvents: [{
      id: 'harry_year1_chat_quiet_window',
      minTier: 1,
      text: '哈利站在走廊窗边看魁地奇球场，手指无意识地摸着校袍袖口。远处有人喊他的名字，他没有立刻回应，像偶尔也需要确认自己只是一个站在窗边的学生。',
      choices: [
        { label: '陪他看一会儿', delta: 4, response: '你没有急着说话。过了一会儿，哈利说城堡有时候太吵了，但从这里看出去，声音会变远。他看起来轻松了一点。' },
        { label: '问他想不想去球场', delta: 3, response: '哈利笑了一下，说想，但现在不想被所有人盯着看。他说完像有点不好意思，却没有把话收回去。' },
      ],
    }],
  },
  neville: {
    activeChatEvents: [{
      id: 'neville_year1_chat_pocket_list',
      minTier: 1,
      text: '纳威从口袋里摸出一张皱巴巴的清单，上面写着课本、羽毛笔、手套，还有“不要忘记清单”。他看到最后一项时脸红了，赶紧想把纸塞回去。',
      choices: [
        { label: '说这其实很聪明', delta: 4, response: '纳威停住了。他小声说如果连清单都忘了就太糟了，但你说得这么认真，他好像第一次觉得这不完全是笑话。' },
        { label: '帮他检查有没有漏项', delta: 3, response: '你们一起看完清单，发现他真的忘了手套。纳威慌忙道谢，跑开几步又回头补了一句：“幸好还没进温室。”' },
      ],
    }],
  },
  fredWeasley: {
    activeChatEvents: [{
      id: 'fred_year1_chat_label_swap',
      minTier: 1,
      text: '弗雷德拿着两张外观相同的糖果标签，在走廊角落里认真比较。他的认真只持续到你靠近为止，随即变成那种“我什么都没计划”的笑容。',
      choices: [
        { label: '问哪张是真的', delta: 3, response: '弗雷德说这取决于你对“真”的定义。如果一张标签能让珀西多检查三遍，那它产生的效果难道不真实吗？' },
        { label: '提醒他别牵连无辜的人', delta: 4, response: '他举起双手表示受到了高尚道德的震撼。随后他把其中一张标签收起来，说好吧，无辜的人今天暂时安全。' },
      ],
    }],
  },
  georgeWeasley: {
    activeChatEvents: [{
      id: 'george_year1_chat_silent_timing',
      minTier: 1,
      text: '乔治坐在楼梯扶手旁，看一只小纸鸟沿着栏杆蹦跳。他没有像弗雷德那样立刻解释，只是数着纸鸟每次停顿的时间，神情安静得有点反常。',
      choices: [
        { label: '问他在等什么', delta: 4, response: '乔治说好玩不只靠爆炸，还靠刚好在别人眨眼时发生。他把纸鸟放飞，纸鸟正好落在一顶路过的帽子上，时机确实完美。' },
        { label: '陪他一起数', delta: 3, response: '你跟着数到第七下，乔治满意地点头，说你有耐心，这在恶作剧行业是被严重低估的品质。' },
      ],
    }],
  },
  draco: {
    activeChatEvents: [{
      id: 'draco_year1_chat_polished_badge',
      minTier: 1,
      text: '德拉科在地下走廊擦自己的校袍徽章。徽章本来已经很亮了，他却仍嫌某个角度不够体面。看见你时，他立刻把布收起来，像刚才那点用心不该被别人发现。',
      choices: [
        { label: '说徽章很亮', delta: 3, response: '德拉科抬起下巴，说马尔福家的东西当然应该亮。可他还是低头看了一眼徽章，显然没有讨厌这句评价。' },
        { label: '问他是不是很在意形象', delta: 4, response: '他先想嘲讽你，最后只说有些人天生被看着。那句话说得傲慢，却也露出一点被看见太久的疲惫。' },
      ],
    }],
  },
  luna: {
    activeChatEvents: [{
      id: 'luna_year1_chat_window_dust',
      minTier: 1,
      text: '卢娜用指尖在窗台灰尘上画出一串小小的弯线。她说那像一种会在下午变透明的足迹，然后抬头问你有没有看见。',
      choices: [
        { label: '认真看那些弯线', delta: 4, response: '你看了一会儿，说它们像走得很慢的小东西。卢娜高兴地点头，说慢的东西比较容易发现别人遗漏的门。' },
        { label: '问是不是某种生物', delta: 3, response: '她说也许是，也许只是灰尘记得风怎么走。这个回答听起来不实用，却让窗台忽然变得有趣起来。' },
      ],
    }],
  },
  ginnyWeasley: {
    activeChatEvents: [{
      id: 'ginny_year1_chat_quill_grip',
      minTier: 1,
      text: '金妮在公共休息室角落练习用新羽毛笔写字。她写得太用力，纸面被戳出几个小点。听见脚步声，她迅速用袖子挡住那行歪掉的字。',
      choices: [
        { label: '说新笔都不好控制', delta: 4, response: '金妮放下袖子，像松了口气。她说家里的旧笔总是被哥哥们先用到不剩什么好脾气，这支至少还愿意听她的。' },
        { label: '问她在写什么', delta: 3, response: '她说只是练字，语气很快。过了一会儿，她又补充说是在给家里写信，但还没想好怎么让妈妈别太担心。' },
      ],
    }],
  },
  seamus: {
    activeChatEvents: [{
      id: 'seamus_year1_chat_singed_sleeve',
      minTier: 1,
      text: '西莫低头研究自己袖口的一小块焦痕，表情介于懊恼和骄傲之间。那点焦痕并不严重，却像他刚从某次“差一点成功”的尝试里带回来的纪念品。',
      choices: [
        { label: '问这次炸了什么', delta: 3, response: '西莫立刻辩解说不能算炸，只能算“非常热情地失败”。他说完自己先笑了，显然这不是第一次。' },
        { label: '建议他下次站远点', delta: 4, response: '他认真点头，说这是个好建议。停顿一秒后又补充，当然，站太远就看不清到底哪里出错了。' },
      ],
    }],
  },
  deanThomas: {
    activeChatEvents: [{
      id: 'dean_year1_chat_margin_sketch',
      minTier: 1,
      text: '迪安在羊皮纸边角画魁地奇球员，线条很快，却把动作抓得很准。他发现你在看时，没有立刻遮住，反而把纸转了个角度，让那个人物看起来像刚刚俯冲下来。',
      choices: [
        { label: '夸动作画得像真的', delta: 4, response: '迪安笑了，说他以前画过足球，现在发现扫帚也差不多，关键是要先相信人真的能冲那么快。' },
        { label: '问能不能画你', delta: 3, response: '他上下打量你一眼，说可以，但你得先摆一个不那么像等着上课的姿势。说完他自己笑得很开心。' },
      ],
    }],
  },
  leeJordan: {
    activeChatEvents: [{
      id: 'lee_year1_chat_commentary_practice',
      minTier: 1,
      text: '李·乔丹站在一段空走廊里，对着一只路过的甲虫练习解说。甲虫显然没有意识到自己正处在一场激烈赛事中，慢吞吞地爬过石缝。',
      choices: [
        { label: '接一句解说', delta: 4, response: '你补上一句，李立刻精神大振，把甲虫描述成“本世纪最冷静的突破手”。那只甲虫钻进墙缝时，他还郑重宣布比赛结束。' },
        { label: '问他为什么练这个', delta: 3, response: '他说真正上场前要先学会让无聊的东西也听起来有故事。霍格沃茨显然给了他大量练习材料。' },
      ],
    }],
  },
  percyWeasley: {
    activeChatEvents: [{
      id: 'percy_year1_chat_notice_spacing',
      minTier: 1,
      text: '珀西站在公告栏前，调整一张通知的边距。它已经贴得足够端正了，他却仍然用尺子量了一次，眉头紧得像整个学院秩序都取决于这半英寸。',
      choices: [
        { label: '问这样会有人更认真看吗', delta: 3, response: '珀西说当然会，清楚的通知能减少混乱。随后他像意识到自己太严肃，补了一句至少理论上如此。' },
        { label: '帮他按住通知下角', delta: 4, response: '你按住羊皮纸，他顺利贴好。珀西清了清嗓子，说谢谢，语气正式得像给你颁发了一枚无形的秩序维护奖章。' },
      ],
    }],
  },
  pansy: {
    activeChatEvents: [{
      id: 'pansy_year1_chat_ribbon_choice',
      minTier: 1,
      text: '潘西在地下走廊挑一截绿色缎带，旁边几个斯莱特林学生等着她开口评价。她把缎带绕在指尖，表情像在判断它配不配出现在今天的场合里。',
      choices: [
        { label: '说颜色很衬她', delta: 3, response: '潘西看似漫不经心地说你眼光还不算糟。她没有笑得太明显，但把那截缎带收了起来，而不是丢回盒子。' },
        { label: '问为什么要选这么久', delta: 4, response: '她说有些东西不选也会被人议论，那不如自己先选得漂亮一点。话说得尖，却藏着一点不愿被别人安排的用力。' },
      ],
    }],
  },
  blaiseZabini: {
    activeChatEvents: [{
      id: 'blaise_year1_chat_silent_table',
      minTier: 1,
      text: '布雷司坐在礼堂长桌末端，面前的餐盘几乎没动。他听着周围人说话，偶尔露出一个很淡的笑，像把每句话都先放在心里称重，再决定值不值得回应。',
      choices: [
        { label: '问他怎么不说话', delta: 3, response: '布雷司说不是每次沉默都代表没话说，有时只是别人已经替自己暴露得足够多了。他说得轻描淡写，却很像真心经验。' },
        { label: '换个安静话题', delta: 4, response: '你没有逼他加入热闹，只问了一本书。布雷司终于看向你，回答比预想中认真得多，像认可这种不急着占据空气的聊天。' },
      ],
    }],
  },
  crabbe: {
    activeChatEvents: [{
      id: 'crabbe_year1_chat_extra_roll',
      minTier: 1,
      text: '克拉布在礼堂拿了一个多余的面包卷，举到一半又停住，像忽然想起有人可能会因此笑他。他皱着眉，把面包卷放回去，又很不情愿地看了一眼。',
      choices: [
        { label: '说饿了就拿', delta: 4, response: '克拉布看你一眼，像在确认这不是陷阱。随后他把面包卷拿回来，低声说了一句“也是”，吃得比刚才自在多了。' },
        { label: '把果酱递给他', delta: 3, response: '他接过果酱，动作有点迟疑。过了一会儿，他把盘子往你这边推了推，算是把这种笨拙的和平延长了一点。' },
      ],
    }],
  },
  goyle: {
    activeChatEvents: [{
      id: 'goyle_year1_chat_heavy_bag',
      minTier: 1,
      text: '高尔拎着一只很重的书包站在楼梯口，显然不想承认它勒得手疼。他换了几次姿势，脸上仍摆着“这不算什么”的表情。',
      choices: [
        { label: '问要不要换手拎', delta: 3, response: '高尔先摇头，几秒后又把书包换到另一只手。这个让步小得几乎看不见，但他的肩膀明显松了一点。' },
        { label: '提醒书包带快断了', delta: 4, response: '他低头看见裂开的皮带，表情有点尴尬。你没有笑，他便闷声说了句谢谢，声音低得几乎被楼梯声盖住。' },
      ],
    }],
  },
  marcusFlint: {
    activeChatEvents: [{
      id: 'marcus_year1_chat_drill_marks',
      minTier: 1,
      text: '马库斯·弗林特在魁地奇球场边用靴尖划训练路线。线条粗糙，却很明确。他看见低年级靠近，第一反应是皱眉，像球场连空气都该听他的。',
      choices: [
        { label: '问这是什么战术', delta: 4, response: '他哼了一声，本来不想讲，最后还是用靴尖点出两个位置。解释很不客气，但你听得出来他真的懂球。' },
        { label: '说这条路线太冒险', delta: 3, response: '弗林特瞪你一眼，随即低头重新看那条线。他嘴上说一年级少管闲事，却把终点往回挪了一点。' },
      ],
    }],
  },
  choChang: {
    activeChatEvents: [{
      id: 'cho_year1_chat_blue_pin',
      minTier: 1,
      text: '秋·张在看台边整理一枚蓝色发夹。风一直把碎发吹乱，她却没有急躁，只一次次把发夹别回去，动作轻巧得像赛前的小仪式。',
      choices: [
        { label: '说风太烦人了', delta: 3, response: '秋笑了，说球场的风至少很诚实，从不假装自己温柔。她把发夹固定好，像已经和这阵风达成短暂停战。' },
        { label: '问她今天训练吗', delta: 4, response: '她点头，说只是普通练习，但普通练习也要认真。她说这句话时没有逞强，只是很自然地相信稳定比炫耀更重要。' },
      ],
    }],
  },
  padmaPatil: {
    activeChatEvents: [{
      id: 'padma_year1_chat_bookmark_order',
      minTier: 1,
      text: '帕德玛把几枚书签按颜色排在桌上，每一种颜色对应不同科目。她发现其中一枚被别人随手夹错了位置，眉头轻轻皱了一下，却没有立刻发火。',
      choices: [
        { label: '帮她找回原位', delta: 4, response: '你按她的顺序把书签放回去。帕德玛说谢谢，随后承认她知道这看起来有点夸张，但东西各在其位时，她脑子也会安静些。' },
        { label: '问颜色是怎么分的', delta: 3, response: '她立刻讲起自己的分类方式，条理清楚到像一张小地图。讲完后她有点不好意思，问你是不是太细了。' },
      ],
    }],
  },
  terryBoot: {
    activeChatEvents: [{
      id: 'terry_year1_chat_half_question',
      minTier: 1,
      text: '泰瑞在公共休息室把一个问题写到一半，又把后半句划掉。他盯着那条墨线，像问题本身突然背叛了他。',
      choices: [
        { label: '问为什么划掉', delta: 4, response: '他说写出来才发现自己其实问了两个问题。好问题不该把回答的人逼到两个方向同时奔跑。这个说法很泰瑞，也很有道理。' },
        { label: '建议先问简单的那个', delta: 3, response: '泰瑞想了想，把羊皮纸翻到背面重新写。写完后他满意地说简单不等于浅，复杂也不等于聪明。' },
      ],
    }],
  },
  michaelCorner: {
    activeChatEvents: [{
      id: 'michael_year1_chat_argument_replay',
      minTier: 1,
      text: '迈克尔一个人坐在窗台边，小声复盘刚才的争论。他把自己的句子重复了一遍，随即皱眉，像终于听见其中某个不太漂亮的转折。',
      choices: [
        { label: '问他还在想吗', delta: 3, response: '他说当然，赢了不代表说得最好。这个回答带着一点骄傲，也带着一点难得的自省。' },
        { label: '说那句确实有点冲', delta: 4, response: '迈克尔看起来想反驳，但最后只长出一口气。他说下次会换种说法，当然，前提是对方也别那么离谱。' },
      ],
    }],
  },
  anthonyGoldstein: {
    activeChatEvents: [{
      id: 'anthony_year1_chat_rule_edge',
      minTier: 1,
      text: '安东尼在公告栏旁读一条校规，指尖停在“不得”两个字上。他没有像珀西那样立刻维护它，而是在旁边写下一个很小的问号。',
      choices: [
        { label: '问他觉得哪里不对', delta: 4, response: '他说规则本身可能必要，但写得太宽会把无辜的人也罩进去。你们一起看那句话，忽然觉得标点也有重量。' },
        { label: '说他想得太认真了', delta: 3, response: '安东尼并不生气，只说如果规则不认真想，执行时就会让别人替它付代价。他说得平静，却不容易被敷衍过去。' },
      ],
    }],
  },
  cedricDiggory: {
    activeChatEvents: [{
      id: 'cedric_year1_chat_returned_scarf',
      minTier: 1,
      text: '塞德里克拿着一条落在看台上的围巾，正问路过的人是谁丢的。他问得很耐心，没有因为没人认领就显得不耐烦。',
      choices: [
        { label: '帮他一起问', delta: 4, response: '你们问到第三个人时终于找到失主。塞德里克把围巾递过去，像这不是一件小事，而是今天本来就该被妥善完成的一件事。' },
        { label: '问他为什么不交给教授', delta: 3, response: '他说当然可以，但如果能直接还给对方，对方就不用多跑一趟。他说得很自然，像体贴不是额外美德，只是普通做法。' },
      ],
    }],
  },
  hannahAbbott: {
    activeChatEvents: [{
      id: 'hannah_year1_chat_spilled_tea',
      minTier: 1,
      text: '汉娜在赫奇帕奇附近的走廊里不小心洒了一点茶，正慌忙用手帕擦。茶渍并不大，她却紧张得像整个城堡都会因此责怪她。',
      choices: [
        { label: '帮她一起擦', delta: 4, response: '你蹲下来帮忙，汉娜连说了好几声谢谢。等茶渍消失后，她终于笑了一下，说也许事情没有她刚才想得那么糟。' },
        { label: '说没人会在意的', delta: 3, response: '她点点头，却还是把最后一点水痕擦干净。她说自己知道，可是把事情收拾好会让心里也干净一点。' },
      ],
    }],
  },
  ernieMacmillan: {
    activeChatEvents: [{
      id: 'ernie_year1_chat_formal_apology',
      minTier: 1,
      text: '厄尼拿着一张写了一半的道歉信，表情郑重得像在起草魔法部公告。他反复斟酌“非常抱歉”和“深感歉意”哪个更合适。',
      choices: [
        { label: '问发生了什么', delta: 3, response: '他说自己误会了一个同学，虽然对方说没关系，但“没关系”不等于不用道歉。语气有点夸张，心意却是真的。' },
        { label: '建议写得简单一点', delta: 4, response: '厄尼犹豫很久，最后把长句改成一句直接的“我错了”。他看着那行字，像发现诚恳有时确实不需要礼服。' },
      ],
    }],
  },
  susanBones: {
    activeChatEvents: [{
      id: 'susan_year1_chat_family_name',
      minTier: 1,
      text: '苏珊在走廊尽头听见有人提到博恩斯这个姓氏，脚步顿了一下。她没有上前，也没有躲开，只把书抱得更紧。',
      choices: [
        { label: '换个话题陪她走', delta: 4, response: '你没有追问。走出一段后，苏珊轻声说谢谢。她说有些名字会让别人想起故事，但对她来说，先是家人。' },
        { label: '问她还好吗', delta: 3, response: '苏珊点点头，又摇摇头。她说自己不是不能听见，只是有时候希望别人说这些名字时能轻一点。' },
      ],
    }],
  },
  justinFinchFletchley: {
    activeChatEvents: [{
      id: 'justin_year1_chat_muggle_phrase',
      minTier: 1,
      text: '贾斯廷在礼堂里说了一个麻瓜学校常用的词，旁边几个人没听懂。他立刻解释，越解释越正式，像怕自己把两个世界都说错了。',
      choices: [
        { label: '说你听懂了', delta: 4, response: '贾斯廷明显放松下来，笑着说太好了。他承认有时候自己像随身带着一本翻译词典，只是词典也会紧张。' },
        { label: '请他再讲一遍', delta: 3, response: '他重新解释，这次慢了许多，也生动许多。讲完后他有点高兴，像终于把一块旧生活稳稳放到了霍格沃茨的桌上。' },
      ],
    }],
  },
};

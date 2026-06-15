/**
 * year1-core-students.js
 * 一年级核心学生主动来访补充包。
 *
 * 目标：让核心学生不是只在玩家点面板时出现，而是会带着自己的事来找玩家。
 */

export const YEAR1_CORE_STUDENT_PROACTIVE = {
  hermione: [
    {
      id: 'hermione_year1_library_correction',
      require: { minTier: 2, cooldownDays: 8, chance: 0.22, minGrade: 1, maxGrade: 1 },
      opening: '赫敏在图书馆闭馆前追上你，怀里抱着一本厚得离谱的参考书。她看起来已经憋了很久，连平斯夫人警告的目光都没能让她退缩。「我需要纠正一件事，」她压低声音说，「不是你的错，是课本写得太含糊了。但如果你按那个说法继续理解，迟早会在变形术作业里出问题。」她把书翻到夹着三张纸条的那一页，眼睛里全是认真到发烫的光。',
      choices: [
        { label: '请她从头讲', delta: 4, response: '赫敏明显松了一口气，像终于有人没有把“纠正”听成炫耀。她从定义讲到例外，又在你皱眉时主动放慢。讲完以后，她小声说：「你刚才那个问题很好。」对她来说，这几乎等同于一次郑重邀请。', addMemory: 'hermione_corrected_textbook' },
        { label: '先问她有没有吃晚饭', delta: 3, response: '她被问得一愣，本能地说这不重要。可下一秒，她的肚子替她做了回答。赫敏脸红得厉害，最后允许你陪她去大礼堂拿点吃的。一路上她还在讲那条定义，只是语气没那么绷了。' },
      ],
      aiSeed: '',
    },
    {
      id: 'hermione_year1_first_rule_worry',
      require: { minTier: 3, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '赫敏在一楼走廊拦住你，手里攥着一张从公告栏抄下来的校规。她显然已经在心里演练过好几遍开场白，可真正开口时还是快得像咒语。「我知道你不喜欢别人管你，」她说，「但那条楼梯今晚真的不能走。不是因为我想表现得像个级长，事实上我还不是级长，是因为费尔奇刚刚在那里巡了三遍，而且皮皮鬼也在。」',
      choices: [
        { label: '谢谢她提醒', delta: 4, response: '赫敏像是没想到你会这么直接地接受。她把那张抄下来的校规折好，声音低了一点：「好。那就好。」这不是一次说教成功，而是她第一次发现关心可以不必伪装成批评。', addMemory: 'hermione_warned_corridor' },
        { label: '问她为什么亲自来', delta: 5, response: '她立刻说因为你可能不会看公告。停了一下，她又补充：「而且……我不想明天在麦格教授那里听见你的名字。」说完她移开目光，像这句话比校规难背得多。' },
      ],
      aiSeed: '',
    },
    {
      id: 'hermione_year1_quill_note',
      require: { minTier: 4, cooldownDays: 12, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '你回到长桌时，发现课本里夹着一张赫敏的纸条。字迹很整齐，开头却被划掉了两次。她本人坐在不远处，假装在看书，眼神却一直往你这边飘。纸条上写着：你上次问的问题，我后来查了。答案比我当时说的复杂。',
      choices: [
        { label: '过去找她继续聊', delta: 5, response: '赫敏立刻把书翻到标记好的地方，像已经等你很久。她没有说“我就知道你会来”，但那些密密麻麻的书签已经替她说了。你们聊到南瓜汁都凉了，她仍然没有露出不耐烦。', addMemory: 'hermione_followed_question' },
        { label: '在纸条背面回谢', delta: 4, response: '你写下一句谢谢，把纸条推回去。赫敏读完后把它收进书页，没有抬头，却用羽毛笔在自己的笔记边画了一个很小的星号。那不是课堂标记，更像某种私人记号。' },
      ],
      aiSeed: '',
    },
    {
      id: 'hermione_year1_common_room_help',
      require: { minTier: 2, cooldownDays: 9, chance: 0.2, minGrade: 1, maxGrade: 1 },
      opening: '公共休息室快熄灯了，赫敏抱着一叠羊皮纸站到你面前。她先说「这不是作业」，随后又像觉得这个开场不够清楚，补了一句：「好吧，和作业有关，但不是让你抄。」壁炉火光照着她疲惫的脸，她把其中一张递给你，上面是她整理出的复习易错点，边角还写着几句明显是专门给你的提醒。',
      choices: [
        { label: '认真读她的提醒', delta: 4, response: '你没有只看答案，而是把她写在边角的提醒一句句读完。赫敏看起来比你答对题还高兴：「我就知道你会注意到那里。」她说得太快，像怕这份期待显得过分。', addMemory: 'hermione_shared_revision' },
        { label: '问她是不是也很累', delta: 3, response: '赫敏本来准备继续讲重点，听见这句话后停住了。她低头看那叠纸，承认有一点。但她马上补充，累不代表不值得。你没有反驳，只帮她把羊皮纸按顺序理好。' },
      ],
      aiSeed: '',
    },
  ],
  ron: [
    {
      id: 'ron_year1_sandwich_share',
      require: { minTier: 2, cooldownDays: 8, chance: 0.23, minGrade: 1, maxGrade: 1 },
      opening: '罗恩在大礼堂追上你，手里抓着两个被油纸包住的三明治。「别问，」他先说，「我妈总觉得我会饿死在学校里。」他把其中一个往你面前一塞，表情别扭得像在递一份秘密文件。「你刚才错过晚饭了吧？我看见了。不是特意看的，就是……你座位空着很明显。」',
      choices: [
        { label: '接过三明治', delta: 4, response: '罗恩明显松了口气，立刻开始抱怨家里寄来的包裹总是太大。可他说着说着又忍不住补充，里面的东西其实都挺好吃。你们分着吃完三明治，他假装这只是处理多余食物。', addMemory: 'ron_shared_sandwich' },
        { label: '问他自己够不够吃', delta: 5, response: '罗恩像被这个问题烫了一下，立刻说当然够。过了一会儿，他把另一个三明治掰成两半，说这样比较公平。你没有拆穿他的慷慨，他看起来因此轻松许多。' },
      ],
      aiSeed: '',
    },
    {
      id: 'ron_year1_chess_piece_escape',
      require: { minTier: 2, cooldownDays: 8, chance: 0.22, minGrade: 1, maxGrade: 1 },
      opening: '一只巫师棋骑士突然从拐角冲出来，差点撞上你的鞋。罗恩跟在后面追得气喘吁吁，耳朵红得厉害。「抓住它！」他喊，「它不服昨天那盘棋，说要去找更有前途的指挥官！」那枚骑士举着小剑，在石板地上跑得格外有尊严。',
      choices: [
        { label: '帮他堵住棋子', delta: 4, response: '你在楼梯口截住骑士，罗恩一把将它按回盒子。棋子还在抗议，但罗恩笑得停不下来。他说它虽然嘴坏，眼光倒不错。你知道这句夸奖绕了一个很大的弯才落到你身上。', addMemory: 'ron_chess_piece_escape' },
        { label: '问棋子为什么叛逃', delta: 3, response: '罗恩立刻试图解释战术失误，讲到一半自己也笑了。那不是尴尬的笑，而是有人愿意听他把一盘棋讲成史诗之后的满足。' },
      ],
      aiSeed: '',
    },
    {
      id: 'ron_year1_old_robe_joke',
      require: { minTier: 3, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '罗恩在公共休息室门口叫住你，手里拎着一件被改短的旧袍子。「你会不会缝扣子？」他问完马上补充，「不是我不会，是这个扣子显然对我有意见。」袍子袖口有被重新缝过的痕迹，他说得很轻松，手指却一直挡着那块补丁。',
      choices: [
        { label: '帮他看扣子', delta: 4, response: '你没有提补丁，只认真看那枚松掉的扣子。罗恩慢慢放下挡着袖口的手，说这袍子以前是比尔的，也可能是查理的，他已经懒得追究。语气是抱怨，里面却有一点属于家的温度。', addMemory: 'ron_old_robe_button' },
        { label: '说旧袍子挺有故事', delta: 5, response: '罗恩本来准备反驳，最后却咧嘴笑了，说它的故事大概包括很多次被迫参加家庭合照。你们一起把扣子缝回去，他不再急着把袖口藏起来。' },
      ],
      aiSeed: '',
    },
    {
      id: 'ron_year1_rat_trouble',
      require: { minTier: 2, cooldownDays: 9, chance: 0.2, minGrade: 1, maxGrade: 1 },
      opening: '罗恩从男生宿舍方向探出头，神情严肃得像出了大事。「你有空吗？斑斑不见了。」他停了一下，又压低声音，「别告诉珀西，他会写一篇关于宠物管理责任的演讲稿。」走廊里传来一阵窸窣声，罗恩立刻把魔杖举反了。',
      choices: [
        { label: '陪他一起找', delta: 4, response: '你们在旧沙发底下找到斑斑，它正睡得理直气壮。罗恩松了口气，嘴上却骂它没良心。他把老鼠揣回口袋时，小声说谢谢，像这件小事对他比看起来重要得多。', addMemory: 'ron_found_scabbers' },
        { label: '提醒他魔杖拿反了', delta: 3, response: '罗恩低头一看，脸瞬间红了。「我知道，」他说，「这是战术。」你没有笑得太大声，于是他也跟着笑了出来。紧张散掉后，找老鼠这件事终于没那么像灾难。' },
      ],
      aiSeed: '',
    },
  ],
  harry: [
    {
      id: 'harry_year1_normal_walk',
      require: { minTier: 2, cooldownDays: 9, chance: 0.2, minGrade: 1, maxGrade: 1 },
      opening: '哈利在门厅边等你，旁边几个学生正假装没看他。等你走近，他把书包往肩上提了提。「你要去图书馆吗？」他问得很随意，但你看得出这不是随口一问。「我想找个人一起走。只是走过去，不是讨论伤疤，也不是讨论三楼走廊。」',
      choices: [
        { label: '一起走去图书馆', delta: 4, response: '你们一路聊的都是作业、楼梯和今天南瓜汁太甜。哈利走到图书馆门口时笑了一下，说这大概是他今天最正常的十分钟。对他来说，这不是小事。', addMemory: 'harry_normal_walk' },
        { label: '问他是不是被盯烦了', delta: 5, response: '哈利沉默了一会儿，说有一点。不是所有目光都恶意，可一直被看着还是很累。你没有安慰得太用力，只陪他绕开那群还在偷看的学生。' },
      ],
      aiSeed: '',
    },
    {
      id: 'harry_year1_broom_polish',
      require: { minTier: 3, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '哈利拿着一小罐扫帚护理油找到你，手背上沾着一点草屑。「你上次问扫帚尾枝怎么保养，」他说，「我可以给你看。」他说完像有些不好意思，因为这邀请听起来比他预想的更郑重。球场那边风很大，他却明显期待你跟过去。',
      choices: [
        { label: '跟他去球场', delta: 5, response: '哈利在看台阴影下把扫帚横放到膝上，认真得像在处理一件会回应他的活物。他教你顺着尾枝方向擦油，说飞行不是命令扫帚，而是让它相信你知道自己在做什么。你听得出，他说的不只是扫帚。', addMemory: 'harry_broom_care_together' },
        { label: '问他为什么愿意教你', delta: 4, response: '哈利想了想，说因为你问的时候不是为了看热闹。这个答案很短，却像把你从围观者那边划到了他愿意分享东西的人那边。' },
      ],
      aiSeed: '',
    },
    {
      id: 'harry_year1_trophy_name',
      require: { minTier: 4, cooldownDays: 12, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '哈利在奖杯陈列室门口找到你，声音很轻。「你有一分钟吗？」他带你走到一只旧奖杯前，上面刻着一个波特的名字。玻璃擦得很亮，把他的脸和那个姓氏叠在一起。「我不知道为什么想让你看看，」他说，「可能因为你不会立刻说那些大家都会说的话。」',
      choices: [
        { label: '安静陪他看', delta: 5, response: '你们站了很久。哈利没有讲父母，也没有讲传闻，只说这个姓在这里看起来不像姨妈家嘴里的坏词。你点点头，没有把沉默填满。那让他明显轻松了一点。', addMemory: 'harry_shared_potter_name' },
        { label: '问这个名字让他难过吗', delta: 4, response: '哈利想了很久，说不完全是。难过、好奇、还有一点他不太敢承认的骄傲混在一起。能把这些说出口以后，他不再一直盯着玻璃里的倒影。' },
      ],
      aiSeed: '',
    },
  ],
  neville: [
    {
      id: 'neville_year1_toad_search',
      require: { minTier: 2, cooldownDays: 8, chance: 0.24, minGrade: 1, maxGrade: 1 },
      opening: '纳威在楼梯平台上叫住你，脸色发白，手里攥着一只空空的蟾蜍盒。「莱福又不见了，」他说，声音小得快被画像们的议论盖过去，「我知道这听起来很蠢，可是……它真的会乱跑。你能不能帮我找一下？」他问完立刻低下头，像已经准备好被拒绝。',
      choices: [
        { label: '立刻陪他找', delta: 4, response: '你们在盔甲后面找到莱福。纳威小心把它捧起来，松了口气之后差点哭出来。他说自己总是弄丢东西，你说至少这次你们找回来了。他把这句话听得很认真。', addMemory: 'neville_found_trevor_together' },
        { label: '先问它常去哪里', delta: 5, response: '纳威愣住了，像第一次有人把他当成最了解莱福的人。他想了想，说它喜欢潮湿阴凉的地方。你们按这个线索找，果然在石缝边找到它。纳威看起来比被直接帮忙还高兴。' },
      ],
      aiSeed: '',
    },
    {
      id: 'neville_year1_gran_parcel',
      require: { minTier: 3, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '纳威抱着一个刚拆开的包裹站在门厅边，里面有围巾、糖果和一封写得很满的信。「奶奶寄来的，」他说，努力让语气听起来轻松，「她说如果我再丢三落四，就给我寄一只会咬人的记事本。」他笑了一下，但那笑很快掉下去。',
      choices: [
        { label: '问信里还写了什么', delta: 4, response: '纳威犹豫很久，最后说奶奶希望他“像个隆巴顿”。他说这句话时肩膀缩了一下。你没有评价，只帮他把围巾叠好。那份安静让他没有继续把自己藏起来。', addMemory: 'neville_gran_letter_shared' },
        { label: '帮他收拾包裹', delta: 3, response: '你们把东西一件件放好。纳威发现糖果下面还压着一包植物种子，眼睛立刻亮了。他说奶奶大概忘了写，但这才是最好的东西。' },
      ],
      aiSeed: '',
    },
    {
      id: 'neville_year1_plant_rescue',
      require: { minTier: 3, memoryTag: 'herbology_good', cooldownDays: 10, chance: 0.2, minGrade: 1, maxGrade: 1 },
      opening: '纳威从温室跑来，袍角还沾着泥。「你能来一下吗？」他喘着气说，「有盆幼苗快不行了，斯普劳特教授去拿药土，我、我想先试着稳住它，但我需要多一双手。」他说“需要”这个词时很紧张，却没有退回去。',
      choices: [
        { label: '跟他去温室', delta: 5, response: '你们一起扶住那株软下去的幼苗，纳威的声音在讲养护步骤时越来越稳。等叶片终于不再继续垂下，他长长松了口气。你发现他不是在求你救场，而是在邀请你进入他真正擅长的世界。', addMemory: 'neville_saved_seedling' },
        { label: '让他指挥你', delta: 5, response: '纳威愣了一下，随后认真告诉你该扶哪里、什么时候松手。你照做以后，他整个人都变得不一样了。那一小会儿，他不是总出错的纳威，而是知道怎么救活一株植物的人。' },
      ],
      aiSeed: '',
    },
  ],
  draco: [
    {
      id: 'draco_year1_private_correction',
      require: { minTier: 2, cooldownDays: 9, chance: 0.2, minGrade: 1, maxGrade: 1 },
      opening: '马尔福在地牢入口拦住你，克拉布和高尔不在，这让他的挑衅少了一层观众。「你今天那个魔药步骤错了，」他说，语气像在宣布判决，「如果不是斯内普教授忙着骂别人，你的坩埚会很难看。」他停了一下，把一张写着正确顺序的纸塞给你，动作快得像怕被人看见。',
      choices: [
        { label: '问他为什么提醒你', delta: 4, response: '马尔福立刻说他只是不想下次闻到失败药剂的味道。可他没有把纸抢回去。你看见那张纸边缘写得很整齐，显然不是随手一划。', addMemory: 'draco_private_potion_note' },
        { label: '认真看那张纸', delta: 3, response: '你没有嘲笑他的别扭，也没有道谢得太响。马尔福似乎满意这种分寸，只冷冷补了一句：「别让我后悔浪费墨水。」这句话听起来像威胁，实际更像遮掩。' },
      ],
      aiSeed: '',
    },
    {
      id: 'draco_year1_table_position',
      require: { minTier: 3, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '斯莱特林长桌旁，马尔福朝你抬了抬下巴，像这是他能给出的最低限度邀请。桌边空着一个位置，不算亲近，却也绝不随便。「站在那里很蠢，」他说，「坐下吧，除非你更喜欢让所有人看你不知道该去哪。」周围人的目光短暂扫过来，又被他一个眼神压回去。',
      choices: [
        { label: '坐到那个位置', delta: 4, response: '马尔福没有表示欢迎，只把一盘你够不到的食物推近一点。他继续和旁人说话，仿佛你本来就该坐在那里。那种别扭的维护，比一句欢迎更像斯莱特林式的承认。', addMemory: 'draco_offered_seat' },
        { label: '问这算邀请吗', delta: 5, response: '他立刻说当然不是，只是看不惯你挡路。可他没有收回那个位置。你坐下时，他的嘴角动了一下，像赢了一场只有他自己知道规则的小比赛。' },
      ],
      aiSeed: '',
    },
    {
      id: 'draco_year1_owlery_weather',
      require: { minTier: 4, cooldownDays: 12, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '猫头鹰塔楼风大得几乎站不稳，马尔福却在那里等你。他没有解释为什么知道你会来，只把一封已经封好的信握在手里。「别误会，」他说，「我只是需要一个不会立刻问蠢问题的人站在旁边。」他看向塔外的黑湖，脸上的骄傲被风吹得有些松动。',
      choices: [
        { label: '不问信的内容', delta: 5, response: '你们只谈天气、猫头鹰和塔楼有多冷。马尔福等了很久才把信放出去。猫头鹰飞远后，他说有些信寄出去以前比寄出去以后更烦人。你没有接着问，他因此没有离开。', addMemory: 'draco_owlery_silence' },
        { label: '问他是不是紧张', delta: 4, response: '马尔福的脸色瞬间冷下来，却没有否认得太干净。他说马尔福家的人不紧张，只是讨厌无能的猫头鹰。那只猫头鹰在风里飞得很稳，你们都看见了。' },
      ],
      aiSeed: '',
    },
  ],
  luna: [
    {
      id: 'luna_year1_found_button',
      require: { minTier: 2, cooldownDays: 8, chance: 0.23, minGrade: 1, maxGrade: 1 },
      opening: '卢娜毫无预兆地出现在你旁边，掌心托着一枚普通校袍纽扣。「它想见你，」她说得非常自然，像这是纽扣自己做出的决定。纽扣上缠着一根淡金色的线，大概来自她的头发，也可能不是。走廊里有人笑了一声，卢娜没有回头。',
      choices: [
        { label: '问纽扣为什么找你', delta: 4, response: '卢娜认真想了想，说也许是因为你最近没有把小东西看得太轻。她把纽扣放到你手里，像交付一个任务。你忽然觉得这枚纽扣确实不该被随便丢掉。', addMemory: 'luna_gave_button' },
        { label: '帮她找原主人', delta: 5, response: '你们沿着走廊问了几个人，最后发现纽扣来自一个新生快散开的袖口。卢娜说你看，小东西总会带人去该去的地方。她说这话时，一点也不像在开玩笑。' },
      ],
      aiSeed: '',
    },
    {
      id: 'luna_year1_corridor_listening',
      require: { minTier: 3, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '卢娜在走廊窗边等你，耳朵上挂着一只萝卜耳环，另一只却不见了。「我听见你今天没有跟着他们笑，」她说。窗外雨水顺着玻璃往下爬，她的声音像在说天气，「所以我想把一个发现告诉你。不是秘密，只是大多数人听见了也会笑。」',
      choices: [
        { label: '说你想听', delta: 5, response: '卢娜告诉你画像背后有一阵细小的刮擦声，像有什么东西每天同一时间经过。你陪她听了很久，真的听见了。她没有得意，只说你果然比较不容易被笑声挡住耳朵。', addMemory: 'luna_shared_corridor_sound' },
        { label: '问她另一只耳环呢', delta: 3, response: '她摸了摸空着的耳朵，说大概去参加短途旅行了。你没有笑，她便补充，如果它回来时带着消息，她会第一个告诉你。' },
      ],
      aiSeed: '',
    },
    {
      id: 'luna_year1_rain_note',
      require: { minTier: 4, cooldownDays: 12, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '你在课本里发现一张被雨点打皱的小纸条，上面是卢娜的字：今天窗上的雨路很适合看见没说出口的事。纸条背面画着一只看起来像猫头鹰又像茶壶的生物。等你抬头，她正站在几步外，像只是碰巧路过。',
      choices: [
        { label: '问她看见了什么', delta: 5, response: '卢娜说她看见你最近把一句话吞回去很多次。她没有追问那句话是什么，只把纸条折成小船，放到窗台积水里。小船漂了一小段，停在你手边。', addMemory: 'luna_rain_note' },
        { label: '说画得很像茶壶', delta: 4, response: '卢娜看起来很高兴，说它确实有一点茶壶血统。你们就这只奇怪生物聊了很久，直到那句没说出口的话不再那么堵。' },
      ],
      aiSeed: '',
    },
  ],
  ginnyWeasley: [
    {
      id: 'ginny_year1_broom_tail',
      require: { minTier: 2, cooldownDays: 9, chance: 0.2, minGrade: 1, maxGrade: 1 },
      opening: '金妮在魁地奇球场边等你，手里攥着一根旧扫帚尾枝。「你别告诉罗恩，」她开口第一句就很干脆，「他会大惊小怪。」她把尾枝递给你看，上面被她用小刀刻了几道标记，像某种秘密练习表。风从看台底下穿过，她的眼睛一直看着空中的球门环。',
      choices: [
        { label: '问她想怎么练', delta: 5, response: '金妮立刻讲出一套躲开家人视线的练习计划，详细得不像临时起意。你没有笑她，她的声音就越来越稳。那根旧尾枝在她手里不再像废物，而像第一把真正属于她的扫帚。', addMemory: 'ginny_secret_broom_practice' },
        { label: '答应不告诉罗恩', delta: 4, response: '她看着你确认了一秒，像在判断你的承诺是不是会漏风。最后她点点头，说那你可以站远一点看。不是为了保护你，是她不想第一次练习就撞到朋友。' },
      ],
      aiSeed: '',
    },
    {
      id: 'ginny_year1_bat_bogey_whisper',
      require: { minTier: 3, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '金妮在走廊拐角叫住你，脸上带着一种努力压住的兴奋。「我学到一个咒语，」她说，「还不太稳定，但很有用。」远处两个高年级学生正在取笑一个新生，她的目光越过你落到那边，手已经摸向魔杖。',
      choices: [
        { label: '问她咒语是什么', delta: 4, response: '金妮小声说出名字，语气里有一点恶作剧的亮光。你提醒她别在走廊里乱试，她不情愿地哼了一声，却没有反驳。你看得出她不是想惹事，只是不喜欢有人仗着高个子欺负人。', addMemory: 'ginny_shared_bat_bogey' },
        { label: '和她一起走过去', delta: 5, response: '你们并肩走向那几个高年级学生。金妮没有施咒，只用很清楚的声音问他们是不是迷路到低年级面前找存在感。那几个人愣住了。她转头看你，眼睛亮得像刚赢了一场小仗。' },
      ],
      aiSeed: '',
    },
    {
      id: 'ginny_year1_diary_silence',
      require: { minTier: 4, cooldownDays: 12, chance: 0.15, minGrade: 1, maxGrade: 1 },
      opening: '金妮在大礼堂门口等你，手里没有书，也没有扫帚，只是把校袍袖口捏得很紧。「我有时候会觉得，」她说到一半又停住，像这句话差点从她手里滑掉。周围学生从你们身边经过，她等人声稍远才继续，「算了。你能不能陪我走一段？不用问。」',
      choices: [
        { label: '陪她走一段', delta: 5, response: '你们沿着走廊慢慢走，金妮一路没有解释。快到楼梯口时，她忽然说谢谢。你没有问她谢什么。她松开被捏皱的袖口，像这段没被追问的路本身就已经帮了她。', addMemory: 'ginny_walked_without_questions' },
        { label: '说想说时你会听', delta: 4, response: '金妮抬头看你，眼神有点防备，又慢慢软下来。她说也许以后会说。不是今天，但也许以后。这个“以后”听起来很小，却很认真。' },
      ],
      aiSeed: '',
    },
  ],
  fredWeasley: [
    {
      id: 'fred_year1_secret_audience',
      require: { minTier: 2, cooldownDays: 8, chance: 0.22, minGrade: 1, maxGrade: 1 },
      opening: '弗雷德突然从盔甲后面探出头，朝你招手。「我们需要一位观众，」他说，「不是告密的那种，是有鉴赏力的那种。」他手里捏着一张折得很小的时间表，上面写满了费尔奇巡逻的空档。远处乔治正在假装欣赏墙上的挂毯，假装得非常不自然。',
      choices: [
        { label: '问表演内容', delta: 4, response: '弗雷德郑重宣布这是一场关于“盔甲是否会打喷嚏”的严肃实验。你看见他在计划表底部写着“避开一年级”。他注意到你的目光，耸耸肩说艺术也要有底线。', addMemory: 'fred_invited_audience' },
        { label: '提醒别伤到人', delta: 5, response: '弗雷德脸上的笑短暂收了一点，随后说这就是为什么他来找你而不是随便找个人。你们一起检查退路和解咒，他把认真藏在夸张鞠躬下面，却没有藏得很成功。' },
      ],
      aiSeed: '',
    },
    {
      id: 'fred_year1_confiscated_sweets',
      require: { minTier: 3, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '弗雷德在奖杯陈列室外拦住你，表情悲壮得像刚失去一位挚友。「我们有一批糖被费尔奇非法扣押，」他说，「当然，从某些狭隘角度看，那批糖也许本来就不该出现在走廊里。」他把一张草图塞给你，上面画着费尔奇办公室附近的柜子。',
      choices: [
        { label: '问糖有什么效果', delta: 3, response: '弗雷德开始列举：打嗝、变声、短暂长出非常有礼貌的小胡子。说到最后一种时，他自己先笑了。你指出这听起来不完全安全，他立刻补充解药已经准备好了。', addMemory: 'fred_confiscated_sweets' },
        { label: '建议先别去偷回', delta: 4, response: '弗雷德露出受伤表情，说你竟然站在费尔奇那边。可他没有真的生气，反而摸着下巴承认也许可以等巡逻松一点。你的谨慎被他翻译成“战略耐心”。' },
      ],
      aiSeed: '',
    },
    {
      id: 'fred_year1_after_prank_apology',
      require: { minTier: 4, cooldownDays: 12, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '弗雷德在公共休息室门口等你，罕见地没有先开玩笑。他手里拿着一颗普通太妃糖，糖纸被折得很平。「你觉得，」他说，「如果一个笑话让人笑完以后觉得自己很蠢，那还算好笑吗？」他问得像随口，眼神却没看别处。',
      choices: [
        { label: '说要看被笑的人', delta: 5, response: '弗雷德点点头，像你说中了他不想自己说出的部分。他把那颗普通糖塞进口袋，说有个低年级今天可能需要这个，而不是会喷烟的那种。你看见他把道歉藏进了糖纸里。', addMemory: 'fred_checked_prank_line' },
        { label: '问是不是出事了', delta: 4, response: '他立刻说没有，最多只是艺术效果过强。可过了一会儿，他承认那孩子脸色不太好。弗雷德不常承认过界，这次承认得很轻，却很认真。' },
      ],
      aiSeed: '',
    },
  ],
  georgeWeasley: [
    {
      id: 'george_year1_exit_map',
      require: { minTier: 2, cooldownDays: 8, chance: 0.22, minGrade: 1, maxGrade: 1 },
      opening: '乔治在楼梯平台找到你，递来一张只画了一半的地图。「我们正在进行一项非常学术的研究，」他说，「主题是费尔奇什么时候最容易出现在不该出现的地方。」地图上不只有路线，还有几个写着“低年级避让”的小叉。',
      choices: [
        { label: '认真看地图', delta: 4, response: '你发现那些小叉都避开了最容易让新生迷路的走廊。乔治说研究必须考虑无辜群众安全，语气像在宣读校规。你们一起补了两条退路，他把你的名字缩写写在角落。', addMemory: 'george_exit_map' },
        { label: '问弗雷德知不知道', delta: 3, response: '乔治说弗雷德负责制造问题，他负责确保问题有出口。说完他又补充，两人偶尔互换，但最好别在报告里写。' },
      ],
      aiSeed: '',
    },
    {
      id: 'george_year1_paper_bird_delivery',
      require: { minTier: 3, cooldownDays: 10, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '乔治拦住你时，肩上停着一只折纸鸟。它歪歪扭扭地啄他的耳朵，像急着出发。「需要你帮我确认一个地址，」他说，「这只鸟要把一张笑话送给今天差点哭出来的新生。不能送错，不然就会变成非常尴尬的慈善事业。」',
      choices: [
        { label: '帮他确认是谁', delta: 5, response: '你们在人群里找到那个新生，纸鸟飞过去，把小纸条落在他课本上。新生读完后笑了一下。乔治没有上前邀功，只远远看着，像确认某个小机关成功把难过转了个方向。', addMemory: 'george_sent_paper_bird' },
        { label: '问纸条写了什么', delta: 3, response: '乔治给你看备份，上面是一句非常笨、却刚好能让人笑出来的双关。你说这不像恶作剧，他说你又来了，老是低估温柔造成的破坏力。' },
      ],
      aiSeed: '',
    },
    {
      id: 'george_year1_quiet_inventory',
      require: { minTier: 4, cooldownDays: 12, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '公共休息室深夜只剩壁炉声，乔治坐在地毯上清点一堆小玩意。没有弗雷德在旁边接话，他显得安静得多。「别告诉他我说这个，」乔治抬头看你，「但有些点子还没准备好，不应该拿出去试。」他把一只会尖叫的纽扣单独放进盒子最底层。',
      choices: [
        { label: '问为什么不准备好', delta: 5, response: '乔治说一个玩笑如果只能靠别人倒霉才能成立，就太懒了。他说得很轻，像怕这句话太严肃。你帮他把危险品分开放好，他没有开玩笑，只说你眼光不错。', addMemory: 'george_inventory_line' },
        { label: '帮他一起清点', delta: 4, response: '你们给每样东西贴上小标签：可用、待改、绝对别给弗雷德单独拿走。乔治看到最后一类时笑了很久，笑完却真的把盒子锁上了。' },
      ],
      aiSeed: '',
    },
  ],
};

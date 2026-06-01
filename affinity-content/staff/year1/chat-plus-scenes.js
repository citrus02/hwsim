/**
 * 一年级教职员工主动聊聊加厚包（一）。
 *
 * 教师的聊天不写成“功能介绍”，而写成课外相处：办公室门口、走廊、温室、球场、
 * 图书馆和塔楼里的短暂交谈，让成年人也像真实生活在城堡里。
 */

export const STAFF_YEAR1_CHAT_PLUS_SCENES = {
  augustusFenwick: {
    activeChatEvents: [{
      id: 'fenwick_year1_chat_wrong_answer',
      minTier: 1,
      text: '芬威克教授在黑板前看一道被擦了一半的题。粉笔灰落在他袖口上，他却没有拍掉，只盯着那个错误的中间步骤，像那里面藏着比正确答案更有意思的东西。',
      choices: [
        { label: '问错在哪里', delta: 4, response: '他没有直接指出答案，只圈出一个符号，说错误常常不是突然发生的，而是在某一步被悄悄允许进来。那句话听起来像数学，也像别的什么。' },
        { label: '说错误也能留下来吗', delta: 3, response: '芬威克教授点头，说当然。擦得太干净，人就会忘记自己曾经为什么走错。随后他把那一行保留到了下课铃响。' },
      ],
    }],
  },
  serafinaMoody: {
    activeChatEvents: [{
      id: 'serafina_year1_chat_burnt_wire',
      minTier: 1,
      text: '塞拉菲娜教授把一截烧黑的铜线放在托盘里，神情不像失败，反倒像收获了一条脾气很坏的证词。她看见你，立刻把护目镜往额头上一推。',
      choices: [
        { label: '问它怎么烧坏的', delta: 4, response: '她兴致勃勃地讲了三种可能，讲到第二种时已经开始在空气里画电路。最后她说烧坏不是羞耻，烧坏还不知道为什么才羞耻。' },
        { label: '提醒她袖口也黑了', delta: 3, response: '她低头看了一眼，毫不在意地说这是证据沾到了目击者身上。随后还是把袖口卷了起来，显然不想把证据带进晚餐。' },
      ],
    }],
  },
  elizaLovegood: {
    activeChatEvents: [{
      id: 'eliza_year1_chat_sentence_taste',
      minTier: 1,
      text: '伊莱莎教授在窗边低声读同一句话，读到第三遍时换了一个停顿。她没有看书页，而像在听那句话自己决定要在哪里呼吸。',
      choices: [
        { label: '问为什么反复读', delta: 4, response: '她说句子也有味道，第一遍只能尝到表面，第二遍才知道它有没有回甘。她把书递给你，让你也试着读一遍。' },
        { label: '说刚才那遍更好听', delta: 3, response: '伊莱莎教授笑了，说你听见了停顿。许多人只听词，忘了沉默也在句子里工作。' },
      ],
    }],
  },
  constanceShacklebolt: {
    activeChatEvents: [{
      id: 'constance_year1_chat_small_fairness',
      minTier: 1,
      text: '康斯坦丝教授在礼堂边看两个学生分最后一块馅饼。她没有介入，只观察他们怎么决定大小，神情认真得像在看一次微型审判。',
      choices: [
        { label: '问这也算政治吗', delta: 4, response: '她说当然。只要有人分东西，权力就已经坐到桌边了。馅饼很小，道理并不会因此变小。' },
        { label: '说他们分得还挺公平', delta: 3, response: '她点头，说公平有时候不是精确到一模一样，而是两个人都能抬头看对方。她说完，那两个学生正好笑了起来。' },
      ],
    }],
  },
  severusSnape: {
    activeChatEvents: [{
      id: 'snape_year1_chat_clean_cauldron',
      minTier: 1,
      text: '斯内普教授站在魔药教室后排，检查一口被洗得发亮的坩埚。他用指尖擦过边缘，似乎终于没有找到可以讽刺的残渣，于是表情更阴沉了。',
      choices: [
        { label: '问这样算合格吗', delta: 3, response: '他说“勉强没有令人绝望”。这听起来不像夸奖，但他没有让你重洗，也没有把坩埚推回水槽。' },
        { label: '说干净也挺难的', delta: 4, response: '斯内普教授冷冷看你一眼，说至少你知道某些基础工作并不会因为无聊就变得不重要。他转身时，语气里的尖刺少了一点点。' },
      ],
    }],
  },
  minervaMcGonagall: {
    activeChatEvents: [{
      id: 'mcgonagall_year1_chat_tartan_pin',
      minTier: 1,
      text: '麦格教授在办公室门口调整一枚格纹别针。她的动作很快，却并不敷衍。走廊里有学生跑过，她头也不抬地叫出对方全名，别针仍稳稳扣上。',
      choices: [
        { label: '问她怎么做到一心二用', delta: 4, response: '她说这不是一心二用，而是学生们太容易把自己以为没人看见的事做得很响。说完她看你一眼，像顺便提醒你也在名单上。' },
        { label: '说别针很好看', delta: 3, response: '麦格教授短暂地停了一下，说谢谢。她的语气依旧端正，但那枚别针被她轻轻抚平，像一句被稳妥收下的赞美。' },
      ],
    }],
  },
  albusDumbledore: {
    activeChatEvents: [{
      id: 'dumbledore_year1_chat_blue_socks',
      minTier: 1,
      text: '邓布利多校长在楼梯平台停下，低头看自己的蓝色袜子。那双袜子上织着小小星星，和他袍子的颜色完全不搭，他却显得相当满意。',
      choices: [
        { label: '说袜子很醒目', delta: 3, response: '他愉快地说醒目有时是一种善意，尤其当早晨太灰、楼梯太长的时候。随后他认真问你觉得星星是不是织得有点歪。' },
        { label: '问校长也会挑袜子吗', delta: 4, response: '邓布利多说校长尤其需要挑袜子，因为许多严肃决定已经够沉重了，脚踝至少应当保留一点自由。' },
      ],
    }],
  },
  primroseSprout: {
    activeChatEvents: [{
      id: 'primrose_year1_chat_ink_measure',
      minTier: 1,
      text: '普里姆罗斯教授在实验室外给几瓶墨水标容量。她的字很小，却一笔一画写得清楚，仿佛哪怕只是墨水，也有权利被准确对待。',
      choices: [
        { label: '问墨水也要测量吗', delta: 4, response: '她说当然。人们总在重要液体上小心，却在寻常东西上粗心。可寻常东西用得最多，出错时也最容易被忽略。' },
        { label: '帮她递标签', delta: 3, response: '你把标签一张张递过去。普里姆罗斯教授道谢，说稳定的手比漂亮的咒语更少被称赞，但实验室最需要它。' },
      ],
    }],
  },
  tavishMacLaren: {
    activeChatEvents: [{
      id: 'tavish_year1_chat_shell_weight',
      minTier: 1,
      text: '塔维什教授把一枚空壳放在小天平上，等指针慢慢停稳。标本室里很安静，只有天平轻微摇晃，像一只离开的生物还留下最后一点重量。',
      choices: [
        { label: '问空壳还重要吗', delta: 4, response: '他说重要。离开的东西不等于不存在过，空壳能告诉你它怎样长大、怎样保护自己，又怎样把某个阶段留在身后。' },
        { label: '帮他记录数字', delta: 3, response: '你写下重量。塔维什教授看了一眼，说数字很轻，但有时足够把一段生命从“差不多”里救出来。' },
      ],
    }],
  },
  herbertBinns: {
    activeChatEvents: [{
      id: 'herbert_year1_chat_dusty_index',
      minTier: 1,
      text: '赫伯特·宾斯教授翻着一册布满灰尘的索引，指尖停在一个拼错的姓氏上。他没有立刻纠正，只像在给那个错误一个解释自己的机会。',
      choices: [
        { label: '问拼错会有什么影响', delta: 4, response: '他说一个名字错了，后面所有寻找它的人都会先走一段弯路。历史有时不是被遗忘，而是被一个小错误藏起来。' },
        { label: '帮他查正确拼法', delta: 3, response: '你们翻了三本书才确认拼写。宾斯教授把更正写得很慢，说这不是改字，是把一个人送回自己的位置。' },
      ],
    }],
  },
  felixWeasley: {
    activeChatEvents: [{
      id: 'felix_year1_chat_floor_creak',
      minTier: 1,
      text: '菲利克斯教授站在三楼走廊，反复踩同一块地板。每踩一次，地板都会发出细微不同的响声。他听得非常专心，像那块木板正用吱呀声讲述城堡近况。',
      choices: [
        { label: '问地板怎么了', delta: 4, response: '他说也许只是潮气，也许是下面的梁老了。城堡不总会大声求救，很多时候只是先轻轻抱怨一下。' },
        { label: '帮他听哪次最响', delta: 3, response: '你听了几次，指出靠左的位置更响。菲利克斯教授立刻在本子上记下，赞许你耳朵比某些肖像诚实。' },
      ],
    }],
  },
  mirandaPercival: {
    activeChatEvents: [{
      id: 'miranda_year1_chat_return_stamp',
      minTier: 1,
      text: '米兰达教授给归还书盖章，印泥颜色有些淡了。她没有急着重盖，而是看着那枚浅浅的日期，像在判断它是否仍然足够说明一次相遇已经结束。',
      choices: [
        { label: '问需要重盖吗', delta: 3, response: '她说不用太重。书已经回来，日期只需轻轻证明它曾经离开过。图书馆里很多痕迹都不必喊得太响。' },
        { label: '帮她换印泥', delta: 4, response: '你递上新印泥。米兰达教授说谢谢，然后把下一枚章盖得清楚许多。她说清楚不是为了审问读者，而是为了让下一次借阅从容开始。' },
      ],
    }],
  },
  filiusFlitwick: {
    activeChatEvents: [{
      id: 'flitwick_year1_chat_tiny_spark',
      minTier: 1,
      text: '弗立维教授在讲台上检查一串很小的银色火花。它们一颗颗跳起又熄灭，像一群努力排队的小星星。他看得满脸欢喜，完全不嫌它们微弱。',
      choices: [
        { label: '问火花太小算成功吗', delta: 4, response: '他立刻说当然算。小火花也是火花，尤其对第一次成功的人来说，它可能比烟花还大。' },
        { label: '帮他数有几颗', delta: 3, response: '你数到第十二颗时漏了一颗。弗立维教授笑着说没关系，魔法和数数一样，偶尔漏掉一点也可以重新来。' },
      ],
    }],
  },
  pomonaSprout: {
    activeChatEvents: [{
      id: 'sprout_year1_chat_muddy_boots',
      minTier: 1,
      text: '斯普劳特教授坐在温室门口刮靴底的泥。泥土里混着细小根须，她没有嫌脏，反而把其中一截轻轻挑出来，放回旁边的花盆里。',
      choices: [
        { label: '问那还活着吗', delta: 4, response: '她说也许活着，也许只是值得试一试。植物有时候比人想象得倔强，尤其当有人不急着判它没救。' },
        { label: '帮她端花盆', delta: 3, response: '你把花盆端近些。斯普劳特教授笑着说这才像话，救小东西不能一边嫌它麻烦一边指望它努力。' },
      ],
    }],
  },
  rolandaHooch: {
    activeChatEvents: [{
      id: 'hooch_year1_chat_whistle_lanyard',
      minTier: 1,
      text: '霍琦夫人在球场边重新系哨子的挂绳。那根绳子磨得发亮，显然经历过无数次训练和喝止。她试着拉了拉结，确认它不会在关键时刻掉链子。',
      choices: [
        { label: '问哨子用多久了', delta: 3, response: '她说久到足够知道哪些学生听见它会立刻停，哪些会先假装没听见。她看你一眼，像在判断你属于哪一种。' },
        { label: '说结打得很牢', delta: 4, response: '霍琦夫人点头，说飞行课上很多安全都从地面开始。绳结、鞋带、扫帚尾枝，没有一样会因为不起眼就不重要。' },
      ],
    }],
  },
  sybillTrelawney: {
    activeChatEvents: [{
      id: 'trelawney_year1_chat_cup_saucer',
      minTier: 1,
      text: '特里劳妮教授在北塔把茶杯一只只配回杯碟。她偶尔把两只颜色相近的放在一起，又很快分开，仿佛茶具之间也有不愿明说的命运冲突。',
      choices: [
        { label: '问杯碟也有征兆吗', delta: 3, response: '她庄严地说当然，裂纹、缺口和不匹配都在诉说。随后她又小声承认，有些杯子只是洗碗时放错了。' },
        { label: '帮她找同一套', delta: 4, response: '你找到一只花纹相同的杯碟。特里劳妮教授欣慰地说秩序偶尔也会伪装成预言，特别是在下午茶之前。' },
      ],
    }],
  },
  remusLupin: {
    activeChatEvents: [{
      id: 'lupin_year1_chat_chocolate_wrapper',
      minTier: 1,
      text: '卢平教授把几张巧克力包装纸叠好，放进抽屉。那些包装纸原本可以随手扔掉，他却叠得很整齐，像每一块巧克力都曾在某个糟糕时刻派上用场。',
      choices: [
        { label: '问他为什么留着', delta: 4, response: '他说不算留着，只是还没扔。随后他笑了笑，承认有些普通东西会提醒人，自己曾经被很小的甜味救过一次。' },
        { label: '问还能不能分一块', delta: 3, response: '卢平教授从抽屉里拿出一块新的递给你，说预防性巧克力并非正式课程要求，但他个人相当推荐。' },
      ],
    }],
  },
  siriusBlack: {
    activeChatEvents: [{
      id: 'sirius_year1_chat_scuffed_boot',
      minTier: 1,
      text: '小天狼星坐在城堡台阶上，用魔杖尖敲自己靴子上的一道刮痕。他看起来不像想修好它，更像在判断这道痕迹是不是值得留下。',
      choices: [
        { label: '问靴子怎么刮的', delta: 4, response: '他说故事很长，涉及一扇坏门、一个坏主意，以及一个自以为跑得很快的人。说到最后他咧嘴笑了，没说明那个倒霉蛋是不是自己。' },
        { label: '说刮痕挺适合他', delta: 3, response: '小天狼星挑眉，说这是他今天听到最像赞美的侮辱。随后他果然没有修那道刮痕，只把靴子往台阶外伸了伸。' },
      ],
    }],
  },
  auroraSinistra: {
    activeChatEvents: [{
      id: 'sinistra_year1_chat_cloud_gap',
      minTier: 1,
      text: '辛尼斯特拉教授站在天文塔边，仰头等云层裂开。她没有显得焦躁，只把星图卷在手里，像等待也是天文学的一部分。',
      choices: [
        { label: '问要等多久', delta: 3, response: '她说可能一分钟，也可能一小时。天空从不因为课程表变得更守时，学观测的人必须先学会不把等待当成浪费。' },
        { label: '陪她看云移动', delta: 4, response: '你们一起看云慢慢让出一小块夜空。辛尼斯特拉教授指给你看那一点星光，说有些发现并不壮观，只是准时奖励了耐心。' },
      ],
    }],
  },
};

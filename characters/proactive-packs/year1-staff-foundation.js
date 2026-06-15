/**
 * year1-staff-foundation.js
 * 一年级教职员主动来访基础包。
 *
 * 教授/讲师主动找玩家必须有职责、观察或具体事务作为原因。
 */

export const YEAR1_STAFF_FOUNDATION_PROACTIVE = {
  augustusFenwick: [
    {
      id: 'fenwick_year1_blackboard_question',
      require: { minTier: 1, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '芬威克教授在下课后叫住你，没有寒暄，只用粉笔点了点黑板右下角一道没有讲过的题。「你今天看了它三次，」他说，「这说明你不是完全没兴趣。」走廊里的脚步声渐渐远了，黑板上那串数字在粉笔灰里显得很安静，像一扇还没有决定要不要打开的小门。',
      choices: [
        { label: '承认你没看懂', delta: 4, response: '芬威克教授点点头，像这才是最有用的回答。他把题目擦掉一半，只留下第一步，说从这里开始。那不是补课，更像他允许你进入一条他自己也走得很慢的路。', addMemory: 'fenwick_blackboard_question' },
        { label: '问他为什么留这道题', delta: 3, response: '他说因为不是所有问题都该在课堂上有答案。说完他把粉笔递给你，让你随便写一个猜想。那支粉笔比想象中更重。' },
      ],
      aiSeed: '',
    },
  ],
  serafinaMoody: [
    {
      id: 'serafina_year1_device_help',
      require: { minTier: 1, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '塞拉菲娜教授拎着一个拆了一半的麻瓜电器从走廊尽头大步走来，差点把旁边画像吓得退框。「你，来得正好。」她把一把螺丝刀塞给你，「别紧张，它已经不通电了。大概。」工具箱里滚出几枚小螺丝，她却先护住那只电器，像护住一个正在讲述秘密的麻瓜物件。',
      choices: [
        { label: '帮她按住外壳', delta: 4, response: '你按住外壳，她利落地拆开后盖，露出一圈细密铜线。塞拉菲娜教授得意地说，看，麻瓜让东西动起来也不是靠奇迹。她说这句话时，语气里有一种粗粝的敬意。', addMemory: 'serafina_device_help' },
        { label: '问它原本做什么', delta: 3, response: '她立刻讲起电风扇、夏天和伦敦小公寓里热得睡不着的人。你本来以为她要讲物理，最后却听见一小段麻瓜生活。' },
      ],
      aiSeed: '',
    },
  ],
  elizaLovegood: [
    {
      id: 'eliza_year1_poem_line',
      require: { minTier: 1, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '伊莱莎教授在图书馆窗边叫住你，手里夹着一本薄诗集。「我想请你读一行，」她说，语气不像课堂提问，更像把一只很轻的鸟交到你手上。窗外雨水把玻璃洗得发亮，她翻到折角那页，指尖停在一行短短的句子旁。',
      choices: [
        { label: '照着读出来', delta: 4, response: '你读得有些慢，中间停了一下。伊莱莎教授没有纠正你，只说那个停顿很好，因为句子自己也在那里停了。你突然觉得朗读不是考试，而是让一句话有地方呼吸。', addMemory: 'eliza_poem_line' },
        { label: '问为什么选你', delta: 3, response: '她说因为你今天看起来像需要一行不要求你立刻回答的话。这个解释温柔得很安静，像窗边那点雨声。' },
      ],
      aiSeed: '',
    },
  ],
  constanceShacklebolt: [
    {
      id: 'constance_year1_second_view',
      require: { minTier: 1, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '沙克博特教授在一间安静教室门口等你，手里拿着你上次课堂讨论的记录。「你给出的判断不算错，」她说，「但太快。」她把羊皮纸翻过来，背面写着同一件事的另一个视角。阳光从窗框落到桌面上，把那两种说法分得很清楚。',
      choices: [
        { label: '重新读另一面', delta: 4, response: '你读到一半就明白她为什么说你太快。沙克博特教授没有责备，只让你把最难承认的一句划出来。那一笔落下去时，你觉得公正忽然不只是一个漂亮词。', addMemory: 'constance_second_view' },
        { label: '问她是否总这样谨慎', delta: 3, response: '她说不谨慎的判断通常更轻松，也更危险。说完她把记录还给你，像把一个尚未写完的问题交回你手里。' },
      ],
      aiSeed: '',
    },
  ],
  severusSnape: [
    {
      id: 'snape_year1_label_warning',
      require: { minTier: 1, cooldownDays: 12, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '斯内普教授在地牢门口叫住你，声音像从湿冷石墙里渗出来。「如果你下次再把这两种药材混在一起，」他把两只几乎一模一样的玻璃瓶放到你面前，「校医院会很忙。」瓶中药材颜色只差一点，标签末尾的墨点也只差一点。他看起来不像在关心你，更像在关心霍格沃茨不要多一个蠢事故。',
      choices: [
        { label: '认真分辨标签', delta: 4, response: '你低头看了很久，终于指出末尾墨点不同。斯内普哼了一声，说你的眼睛至少不是完全摆设。那句话冷得刺人，却把危险差别清清楚楚留给了你。', addMemory: 'snape_label_warning' },
        { label: '问他为什么提醒你', delta: 3, response: '他的表情更冷了，说他没有兴趣清理你的错误后果。可他离开前还是补了一句：右边那瓶闻起来更甜，蠢人才会因此拿错。' },
      ],
      aiSeed: '',
    },
  ],
  minervaMcGonagall: [
    {
      id: 'mcgonagall_year1_corridor_order',
      require: { minTier: 1, cooldownDays: 12, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '麦格教授在一楼走廊停下，叫出你的名字。她手里拿着一份被风吹乱的夜巡名单，声音严厉得让旁边画像立刻闭嘴。「我听说你最近总能在楼梯改变前避开最糟糕的那一段。」她把名单递近一点，「告诉我，是巧合，还是你真的在观察？」',
      choices: [
        { label: '说出你的观察', delta: 4, response: '你把楼梯变换的规律说了几条，麦格教授听完没有夸奖，只在名单旁加了一行备注。收起羊皮纸时，她说如果你愿意把聪明用在避免麻烦上，霍格沃茨会少很多麻烦。', addMemory: 'mcgonagall_corridor_observation' },
        { label: '问她为什么要知道', delta: 3, response: '她看向走廊尽头，说因为一年级学生摔下楼梯时，聪明的理由不会让骨头少疼一点。这句话严厉，却扎扎实实是在保护人。' },
      ],
      aiSeed: '',
    },
  ],
  albusDumbledore: [
    {
      id: 'dumbledore_year1_lemon_question',
      require: { minTier: 2, cooldownDays: 16, chance: 0.1, minGrade: 1, maxGrade: 1 },
      opening: '邓布利多在大礼堂人少时叫住你，面前放着一盘柠檬雪宝。「我发现，」他说，半月形眼镜后的蓝眼睛带着笑，「学生们在刚入学时提出的问题通常比七年后更诚实。你今天有没有一个还没问出口的问题？」他把糖盘往你这边推了一点，像给问题也让了个座位。',
      choices: [
        { label: '问一个真正的问题', delta: 5, response: '邓布利多听完后没有立刻回答。他剥开一颗糖，说有些问题太急着要答案会变瘦，应该先让它在心里长一长。你没有得到结论，却觉得那个问题被认真接住了。', addMemory: 'dumbledore_lemon_question' },
        { label: '说你还没想好', delta: 4, response: '他愉快地点头，说没想好的问题通常很有前途。糖果酸得你眯起眼，他笑着补充，重要的思考也常常第一口不甜。' },
      ],
      aiSeed: '',
    },
  ],
  primroseSprout: [
    {
      id: 'primrose_year1_safety_mark',
      require: { minTier: 1, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '普里姆罗斯教授在实验室门口叫住你，递来一小条写着红色符号的标签。「你上次盯着这个看了很久。」她说，「很好，说明你知道自己不懂。」实验桌上几只玻璃瓶整齐排开，阳光照出液体里细小的悬浮物，漂亮得很危险。',
      choices: [
        { label: '问符号的意思', delta: 4, response: '她把标签贴到空瓶上，解释这个符号不是“不要碰”，而是“碰之前先知道后果”。她说化学不讨厌好奇，只讨厌不肯承认风险的好奇。', addMemory: 'primrose_safety_mark' },
        { label: '承认你有点怕', delta: 3, response: '普里姆罗斯教授点头，说怕是好事，前提是别让怕替你思考。她给你一副护目镜，像给你一份可以继续靠近的许可。' },
      ],
      aiSeed: '',
    },
  ],
  tavishMacLaren: [
    {
      id: 'tavish_year1_leaf_wait',
      require: { minTier: 1, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '麦克拉伦教授在温室边叫住你，把一片叶子放到你掌心。「不要急着说它是什么。」他说。叶片很薄，叶脉像一张微小地图。温室里有人搬花盆经过，他却只是等着，仿佛这片叶子会在足够安静的时候自己说明来历。',
      choices: [
        { label: '照他说的等', delta: 4, response: '过了一会儿，你看见叶片边缘微微卷起。麦克拉伦教授点点头，说许多生命的变化都小到只奖励愿意等待的人。那一瞬间，等待不再像浪费时间。', addMemory: 'tavish_leaf_wait' },
        { label: '问他看到了什么', delta: 3, response: '他说他看到一个学生愿不愿意把答案放慢。这个回答让你有些不好意思，却也让那片叶子突然变得重要。' },
      ],
      aiSeed: '',
    },
  ],
  herbertBinns: [
    {
      id: 'herbert_year1_wrong_name',
      require: { minTier: 1, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '宾斯教授在魔法史教室门口叫住你，手里拿着一张旧记录的复印件。你几乎以为他不会记得你的名字，但他叫得很准确。「你上次问那个名字为什么有两个拼法。」他说，「我查了一下。不是拼写问题，是记录问题。」他的声音仍然平板，可那张纸被他捏得很稳。',
      choices: [
        { label: '请他讲记录差异', delta: 4, response: '宾斯教授把两份记录并排放在桌上。一个名字被写错后，后面三十年都跟着错。他说历史有时不是宏大事件，而是某个人再也没被正确叫出名字。', addMemory: 'herbert_wrong_name' },
        { label: '问他为什么特意查', delta: 3, response: '他停顿了一下，说因为你问了。这个答案短得像课堂注脚，却让你意识到他确实把问题带走，又带回来了。' },
      ],
      aiSeed: '',
    },
  ],
  felixWeasley: [
    {
      id: 'felix_year1_map_route',
      require: { minTier: 1, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '菲利克斯教授在地图桌前招呼你过去，桌上摊着一张麻瓜城市地图。「你觉得这条路为什么绕这么远？」他问。红线从一个街区绕开，又绕回来，乍看很不合理。窗外猫头鹰飞过，他却看着那张不会移动的地图，像里面藏着某种活的生活。',
      choices: [
        { label: '猜那里有障碍', delta: 4, response: '菲利克斯教授笑了，说可能是桥、车站、房租，也可能是人们习惯走那条路。地图上每一道弯都不是错误，有时是生活留下的痕迹。', addMemory: 'felix_map_route' },
        { label: '问他去过那里吗', delta: 3, response: '他说只去过附近，不敢说认识。路过和认识不是一回事，他补充。你忽然觉得这句话也适用于人。' },
      ],
      aiSeed: '',
    },
  ],
  mirandaPercival: [
    {
      id: 'miranda_year1_word_choice',
      require: { minTier: 1, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '珀西瓦尔教授在作文批改桌旁叫住你，指着你作业里被圈出的一处词。「这个词不是错的。」她说。红墨水停在词旁，没有划掉，也没有改写。「我只是想知道，你是自己选它，还是顺手用了它？」',
      choices: [
        { label: '说是想了很久', delta: 4, response: '她点点头，把红墨水收回去，说那就留下。准确的词不一定漂亮，但它知道自己为什么在那里。你第一次觉得一个词也可以被这样郑重对待。', addMemory: 'miranda_word_choice' },
        { label: '问有没有更漂亮的词', delta: 3, response: '她反问漂亮是为了谁。你看着那处被圈出的词，忽然明白她不是在挑剔文采，而是在问你有没有背叛自己的意思。' },
      ],
      aiSeed: '',
    },
  ],
  filiusFlitwick: [
    {
      id: 'flitwick_year1_feather_retry',
      require: { minTier: 1, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '弗立维教授在魔咒课后叫住你，手里托着一根羽毛。「它今天差一点就飞起来了。」他说，听起来比你本人还高兴。教室里的学生已经散去，只剩几张歪桌子和空气里细小的粉笔灰。他把羽毛放到桌上，像邀请你再给它一次机会。',
      choices: [
        { label: '再试一次咒语', delta: 4, response: '羽毛晃了晃，终于离开桌面一小截。弗立维教授几乎要鼓掌，又怕惊到它似的压低声音说看见了吗，进步有时就是这么高一点点。', addMemory: 'flitwick_feather_retry' },
        { label: '问发音哪里不对', delta: 3, response: '他立刻示范两个极近的音，耐心得像在调一件乐器。你跟着念到第三遍时，他眼睛亮了，说就是这里。' },
      ],
      aiSeed: '',
    },
  ],
  pomonaSprout: [
    {
      id: 'sprout_year1_glove_check',
      require: { minTier: 1, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '斯普劳特教授在温室门口叫住你，直接抓起你的手腕检查手套。「这副太松。」她说。温室里传来植物轻轻擦动玻璃的声音，她的围裙上全是泥点，语气却温暖得像刚烤好的面包。「勇敢很好，但别把粗心也算进去。」',
      choices: [
        { label: '重新扣紧手套', delta: 4, response: '你把手套扣紧，她满意地点头，又顺手替你拍掉袖口的泥。斯普劳特教授说能照顾好自己的人，才有资格照顾会咬人的植物。', addMemory: 'sprout_glove_check' },
        { label: '问今天植物会咬人吗', delta: 3, response: '她笑起来，说当然会，不然就少了很多教学意义。她指给你看最容易被咬的位置，语气像在介绍一位脾气不好的朋友。' },
      ],
      aiSeed: '',
    },
  ],
  rolandaHooch: [
    {
      id: 'hooch_year1_grip_warning',
      require: { minTier: 1, cooldownDays: 12, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '霍琦夫人在球场边叫住你，黄色眼睛扫过你的手腕。「你握扫帚的时候太僵。」她说得干脆，像哨声一样没有装饰。风从草地上卷过，她拿起一把训练扫帚，示范时手腕轻得几乎没有用力。',
      choices: [
        { label: '照她示范调整', delta: 4, response: '你放松手腕，扫帚立刻稳了一点。霍琦夫人哼了一声，说这才像骑扫帚，不像和木棍打架。她的话短，但每个字都落在能救命的位置。', addMemory: 'hooch_grip_warning' },
        { label: '问她怎么一眼看出', delta: 3, response: '她说害怕的人总先抓紧，聪明的人学会什么时候松。说完她把扫帚还给你，像把一句更大的提醒也一并交给你。' },
      ],
      aiSeed: '',
    },
  ],
  sybillTrelawney: [
    {
      id: 'trelawney_year1_tea_shadow',
      require: { minTier: 1, cooldownDays: 14, chance: 0.1, minGrade: 1, maxGrade: 1 },
      opening: '特里劳妮教授在北塔楼梯口忽然叫住你，手里端着一只还冒热气的茶杯。「亲爱的，」她说，声音飘忽得像从香炉烟里绕出来，「你的影子今天走得比你快。」她把茶杯递近一点，杯底的茶叶贴成一个很难说清的形状。',
      choices: [
        { label: '问影子去了哪', delta: 3, response: '她眯起眼，郑重地说去了一个你还没有承认想去的地方。你不知道这是不是预言，但她说完后，竟然没有立刻夸张地解释，只是让你小心楼梯。', addMemory: 'trelawney_tea_shadow' },
        { label: '提醒她茶快凉了', delta: 4, response: '特里劳妮教授低头看茶，像这才发现它属于现实世界。她叹了口气，说许多预兆也是这样，被注意到时已经凉了。随后她还是把茶喝了。' },
      ],
      aiSeed: '',
    },
  ],
  auroraSinistra: [
    {
      id: 'sinistra_year1_star_correction',
      require: { minTier: 1, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '辛尼斯特拉教授在天文塔楼梯上叫住你，递来一张折好的观测记录。「你昨晚把那颗星记偏了半格。」她说。语气不重，却准确得让人无法逃开。塔楼窗外天色还没完全暗，铜望远镜在墙边安静反光。',
      choices: [
        { label: '请她指出偏差', delta: 4, response: '她把记录摊开，指尖落在那半格误差上。不是为了批评，而是让你看见天空不会因为你只错一点就改变位置。精确在她这里不是冷漠，是尊重。', addMemory: 'sinistra_star_correction' },
        { label: '问半格重要吗', delta: 3, response: '辛尼斯特拉教授看向窗外，说在地面上也许不重要，在星图里足够让一个人找错方向。你忽然觉得那半格变得很远。' },
      ],
      aiSeed: '',
    },
  ],
  remusLupin: [
    {
      id: 'lupin_year1_chocolate_check',
      require: { minTier: 1, cooldownDays: 12, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '卢平教授在黑魔法防御术教室门口叫住你，递来一小块巧克力。「你刚才脸色不太好。」他说。教室里那只旧柜子已经上锁，仍偶尔发出轻轻一声碰撞。他没有问你怕不怕，只把巧克力放到你能接住的位置。',
      choices: [
        { label: '接过巧克力', delta: 4, response: '巧克力在掌心微微发软。卢平教授说有些东西简单，但简单不等于没用。你咬下一口，才发现自己刚才一直绷着肩膀。', addMemory: 'lupin_chocolate_check' },
        { label: '承认有点害怕', delta: 5, response: '他点点头，像这正是一个值得认真对待的答案。他说防御术不是让你不害怕，而是让你害怕时还有办法。那句话比巧克力更慢地暖起来。' },
      ],
      aiSeed: '',
    },
  ],
  siriusBlack: [
    {
      id: 'sirius_year1_margin_note',
      require: { minTier: 1, cooldownDays: 14, chance: 0.1, minGrade: 1, maxGrade: 1 },
      opening: '你翻开课本时，一张没有署名的短笺滑了出来：今晚别走三楼东侧，除非你想听费尔奇讲半小时规矩。字迹潦草，墨水在边角蹭开，旁边还夹着一根黑色毛发。短笺最后一行补得很重：看路，别犯傻。',
      choices: [
        { label: '照提醒绕路', delta: 4, response: '你绕开三楼东侧，远远听见费尔奇和洛丽丝夫人在那边巡逻。第二天，短笺背面多出一个潦草的勾，像某个脾气很差的人确认你终于听话了一次。', addMemory: 'sirius_margin_note' },
        { label: '在纸背写谢谢', delta: 5, response: '过了很久，纸背浮出一行新字：少谢，少惹事。语气糟糕得像训斥，可你读完反而觉得那份关心热得有点烫手。' },
      ],
      aiSeed: '',
    },
  ],
};

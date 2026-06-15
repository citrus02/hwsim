/**
 * year1-gryffindor-students-plus.js
 * 一年级格兰芬多二线学生主动来访加厚包。
 *
 * 西莫、迪安、李、珀西都需要能主动带着自己的日常来找玩家，
 * 而不是只作为长桌背景或主角团旁边的人出现。
 */

export const YEAR1_GRYFFINDOR_STUDENT_PLUS_PROACTIVE = {
  seamus: [
    {
      id: 'seamus_year1_mam_reply',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '西莫在猫头鹰塔楼门口拦住你，手里攥着一封刚写到一半的家信。纸上有几处被墨水涂黑，旁边还画着一根冒烟的羽毛。「你觉得，」他压低声音问，「如果我写‘今天魔咒课很顺利’，这算撒谎吗？严格来说，没人受伤。」塔楼里的猫头鹰咕咕叫着，像在等你给出判决。',
      choices: [
        { label: '建议写得诚实一点', delta: 4, response: '西莫叹了口气，在“很顺利”后面加上“除了羽毛短暂着火”。他看着那行字，自己先笑了出来。你发现他并不怕家里知道失败，他只是想让他们知道自己还在继续试。', addMemory: 'seamus_honest_letter' },
        { label: '问他妈妈会怎么回', delta: 3, response: '他说妈妈大概会先担心，再说她早就知道霍格沃茨不可能完全安全。说到这里，他的语气软了一点，像家信里的那个人突然离塔楼近了许多。' },
      ],
      aiSeed: '',
    },
    {
      id: 'seamus_year1_spell_retry',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '西莫在一间空教室门口探出头，脸上带着那种“我保证这次不爆炸”的表情。「你有空吗？」他问，「我想再试一次修复咒。不是在课堂上，课堂上大家都盯着，羽毛也会紧张。」桌上摆着一只裂了口的茶杯，旁边放着半湿的抹布，显然已经经历过几次失败。',
      choices: [
        { label: '站远一点陪他试', delta: 4, response: '你很有礼貌地后退两步，西莫假装没看见。咒语落下时，茶杯裂缝真的合上了一小段，没有火星，也没有黑烟。他愣了一下，随后笑得像赢了魁地奇杯。', addMemory: 'seamus_repair_retry' },
        { label: '帮他稳住茶杯', delta: 5, response: '你按住茶杯底座，他深吸一口气，把咒语念得比平时慢。裂缝一点点收拢，最后只剩一道浅痕。西莫小声说原来慢一点也行，语气里有种刚发现新路的惊喜。' },
      ],
      aiSeed: '',
    },
    {
      id: 'seamus_year1_burnt_sleeve',
      require: { minTier: 3, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '西莫在公共休息室壁炉旁叫住你，袖口有一小块被火星燎过的痕迹。他努力把那块地方往身后藏，结果反而更明显。「你觉得这个能补吗？」他问，「别误会，我不是怕被笑。我只是……不想让我妈下次寄来三封吼叫信。」',
      choices: [
        { label: '帮他想办法补', delta: 4, response: '你们找来一小块颜色相近的布。西莫缝得歪歪扭扭，最后像给袍子加了一枚很古怪的勋章。他看着补丁，忽然说也许可以告诉妈妈这是实践痕迹。', addMemory: 'seamus_burnt_sleeve_patch' },
        { label: '说这像战绩', delta: 3, response: '西莫立刻挺起胸，说当然，这是非常有教育意义的战绩。说完他又低头看袖口，笑得有点不好意思。失败被你这样一说，终于没那么难堪了。' },
      ],
      aiSeed: '',
    },
    {
      id: 'seamus_year1_firstyear_help',
      require: { minTier: 3, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '西莫在魔咒课教室外追上你，难得没有先讲笑话。「刚才那个新生，」他说，「他把羽毛点着了，大家都笑。我知道这听起来很荒唐，但我想跟他说点什么，又怕他说‘你有什么资格’。」他挠了挠头，耳朵有点红。',
      choices: [
        { label: '陪他去找新生', delta: 5, response: '你们在楼梯边找到那个新生。西莫讲了自己第一次爆炸的事，讲得夸张又诚实。新生终于笑出来，不再像快哭了。西莫走回来时装作很随意，可脚步轻了很多。', addMemory: 'seamus_helped_firstyear' },
        { label: '建议先讲自己的糗事', delta: 4, response: '西莫认真想了想，说可供选择的素材太丰富了。你们一起挑了一个“最不致命”的版本。他边排练边笑，笑里有一点真正的温柔。' },
      ],
      aiSeed: '',
    },
  ],
  deanThomas: [
    {
      id: 'dean_year1_muggle_pitch',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '迪安在庭院长廊追上你，手里拿着一张画到一半的魁地奇战术草图。「你觉得这看起来像足球阵型吗？」他问完自己先笑了，「算了，你可能不知道足球。」纸上球门环和箭头交错在一起，旁边还有他下意识画出的麻瓜球门线。',
      choices: [
        { label: '请他解释足球', delta: 4, response: '迪安眼睛亮起来，给你讲麻瓜球场、守门员和一脚远射的声音。他讲着讲着又把魁地奇箭头改了几笔，说两个世界其实都懂得什么叫空间。', addMemory: 'dean_explained_football' },
        { label: '帮他看战术图', delta: 3, response: '你指出一个箭头会撞上击球手路线。迪安立刻改掉，又在旁边写了个小注。他说你虽然不懂足球，但很懂别让人撞成一团。' },
      ],
      aiSeed: '',
    },
    {
      id: 'dean_year1_poster_colour',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '迪安在公共休息室角落叫你过去，地上摊着几张给学院比赛画的海报。红金颜料在火光下亮得有些过分，他皱着眉问：「是不是太吵了？」墙边几个学生只会喊“再大点”，显然这不是他想听的意见。',
      choices: [
        { label: '建议压暗一点金色', delta: 4, response: '迪安立刻试了试，海报一下子稳了下来。他看着颜色变化，露出很满足的表情。你没有只说“好看”，而是看见了他真正花心思的地方。', addMemory: 'dean_poster_colour' },
        { label: '问他为什么这么认真', delta: 3, response: '他说因为大家会举着它喊很久，如果画得不好，连欢呼都会显得廉价。这个理由朴素得出奇，却让你看见他对热闹背后的认真。' },
      ],
      aiSeed: '',
    },
    {
      id: 'dean_year1_home_sketch',
      require: { minTier: 3, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '迪安在窗边等你，手里拿着一本小素描本。他翻开其中一页，是一条没有魔法的街：路灯、公交站、湿漉漉的砖墙。霍格沃茨的窗外是草地和塔楼，那张画却像把另一个世界悄悄带进了城堡。',
      choices: [
        { label: '问那条街在哪里', delta: 5, response: '迪安告诉你那是家附近一段很普通的路。普通到离开以后才发现自己记得每块砖的颜色。他说霍格沃茨很好，但有时候他也想念不会动的楼梯。', addMemory: 'dean_home_sketch' },
        { label: '说它很像真的', delta: 4, response: '迪安低头笑了，说真的东西不一定会动。你看着那张安静的街道，忽然明白他画下的不只是地方，也是他还没完全丢掉的旧生活。' },
      ],
      aiSeed: '',
    },
    {
      id: 'dean_year1_draw_player',
      require: { minTier: 4, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '迪安有点不好意思地把一张小画递给你。画上是你在长桌边低头整理课本的样子，只有几笔线，却抓住了你自己都没注意过的姿势。「我不是故意盯着你看，」他赶紧说，「就是光线刚好。」',
      choices: [
        { label: '认真收下画', delta: 5, response: '你把画夹进课本，没有说“随便画画而已”。迪安明显松了口气，又有点高兴。他说霍格沃茨太吵了，所以他有时候会把安静的人画下来。你第一次意识到自己也在别人的日常里。', addMemory: 'dean_drew_player' },
        { label: '问他什么时候画的', delta: 4, response: '他说是某个晚餐时，大家都在聊魁地奇，你却在和一摞书斗争。这个观察让你有点意外，也让那张小画突然变得比纸本身重。' },
      ],
      aiSeed: '',
    },
  ],
  leeJordan: [
    {
      id: 'lee_year1_script_margin',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '李·乔丹在图书馆书架后拦住你，手里拿着一卷解说稿，页边写满了“删掉”“麦格会杀我”“这个可以保留”。他压低声音说：「我需要一个不会只说‘更好笑一点’的人。」平斯夫人从远处投来警告目光，他立刻把音量降到几乎像秘密会议。',
      choices: [
        { label: '帮他删掉过火句子', delta: 4, response: '你指出一句会让队员难堪的玩笑，李没有争辩，只把它划掉。他说好笑应该让人抬头，不该让人想躲到看台下面。那句话比他平时的解说安静，却更像真正的原则。', addMemory: 'lee_script_margin' },
        { label: '问他为什么在图书馆写', delta: 3, response: '他说这里能逼他小声思考。你差点笑出来，平斯夫人正好经过，你们两个同时装作在研究一本非常厚的书。' },
      ],
      aiSeed: '',
    },
    {
      id: 'lee_year1_twins_alibi',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '李·乔丹在走廊拐角突然拦住你，表情严肃得十分可疑。「如果有人问，」他说，「我刚才一直在和你讨论魁地奇规则。非常枯燥，非常正当。」远处传来弗雷德和乔治过于无辜的口哨声，紧接着是费尔奇的怒吼。',
      choices: [
        { label: '问真实情况', delta: 3, response: '李立刻说真实情况是一种哲学概念。几秒后他承认自己只是负责把烟雾弹从错误的走廊拿走。你提醒他这听起来不太无辜，他说所以才需要魁地奇规则。', addMemory: 'lee_twins_alibi' },
        { label: '配合他的说法', delta: 4, response: '费尔奇经过时，你们真的开始讨论犯规判罚。李说得头头是道，差点把自己也说信了。等费尔奇走远，他朝你眨眨眼，笑声里有一种同伙式的感激。' },
      ],
      aiSeed: '',
    },
    {
      id: 'lee_year1_empty_stands',
      require: { minTier: 3, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '雨后的魁地奇看台空荡荡的，李·乔丹却坐在最高处，没有练解说。木板边缘还滴着水，他听得很认真，像看台本身正在讲什么。看见你上来，他没有立刻开玩笑，只拍了拍旁边的位置。',
      choices: [
        { label: '问他在听什么', delta: 5, response: '李说球场空下来以后有自己的声音，欢呼太多时反而听不见。你坐下听了一会儿，水滴、风和远处扫帚棚的门响混在一起。他说如果一直热闹，人会忘记自己为什么喜欢这里。', addMemory: 'lee_empty_stands' },
        { label: '安静坐一会儿', delta: 4, response: '你们很久没说话。李最后轻声说这地方不是只有比赛才有意思。这个安静的李·乔丹很少见，却一点也不假。' },
      ],
      aiSeed: '',
    },
    {
      id: 'lee_year1_commentator_nerves',
      require: { minTier: 4, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '比赛前一天，李·乔丹在看台底下找到你，手里那卷解说稿被攥得起皱。「你有没有过那种感觉，」他问，「大家都以为你只是负责喊得很大声，所以你就更不能喊错？」他马上补了一句：「当然，我通常不会错。通常。」',
      choices: [
        { label: '说喊错也没关系', delta: 4, response: '李摇头，说有关系。球员飞得那么快，观众很多时候是通过他的声音看见比赛。你没想到他会这么认真。他看见你的表情，终于笑了，说别告诉别人他其实有职业操守。', addMemory: 'lee_commentator_nerves' },
        { label: '帮他顺一遍稿子', delta: 5, response: '你们把稿子从头过到尾，删掉两句太危险的笑话，又保留了三句绝佳的。李卷好羊皮纸时像终于能呼吸，说如果麦格教授明天只瞪他两次，你功不可没。' },
      ],
      aiSeed: '',
    },
  ],
  percyWeasley: [
    {
      id: 'percy_year1_lost_firstyear',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '珀西在移动楼梯旁叫住你，怀里夹着巡逻表，脸色比平时更紧。「有个一年级新生没回公共休息室。」他说，「不要慌，我没有慌。这只是需要系统处理的情况。」他说“系统处理”时，羽毛笔差点从手里滑下去。',
      choices: [
        { label: '帮他分头找', delta: 4, response: '你们按楼层分开搜索，最后在盔甲走廊找到那个迷路的新生。珀西松了口气，却立刻恢复严肃，给对方讲了整整三条安全路线。你听出他不是爱训人，是刚才真的担心。', addMemory: 'percy_found_firstyear' },
        { label: '提醒他先深呼吸', delta: 5, response: '珀西看起来想反驳，最后还是照做了。深呼吸后，他的计划清楚多了。事后他别扭地说你的建议有一定实际价值，这大概是他版本的感谢。' },
      ],
      aiSeed: '',
    },
    {
      id: 'percy_year1_prefect_badge',
      require: { minTier: 2, cooldownDays: 9, chance: 0.18, minGrade: 1, maxGrade: 1 },
      opening: '珀西在公共休息室角落叫住你，手里拿着级长徽章，正用手帕擦得发亮。「不是炫耀，」他先说，「只是上面沾了南瓜汁。」壁炉火把徽章照得很亮，他的表情却没有那么得意，反而有点紧张。',
      choices: [
        { label: '说它很重要', delta: 4, response: '珀西抬头看你，像第一次听见有人没有把徽章当笑话。他说重要的不是金属本身，而是别人相信你会负责。说完他又擦了一下，动作比刚才轻。', addMemory: 'percy_prefect_badge' },
        { label: '问他累不累', delta: 3, response: '他立刻列举级长职责，试图证明一切井然有序。列到第五项时自己停住了，承认有时候确实很累。这个承认很短，却不容易。' },
      ],
      aiSeed: '',
    },
    {
      id: 'percy_year1_family_noise',
      require: { minTier: 3, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '珀西在走廊里拦住你，远处传来弗雷德和乔治夸张的笑声。他闭了闭眼，像在用意志力维持级长尊严。「如果他们问，」他说，「你没看见我往那个方向走。」说完他自己也意识到这听起来不像级长该说的话。',
      choices: [
        { label: '问他是不是想躲清静', delta: 4, response: '珀西沉默了一会儿，说只是需要十分钟不处理爆炸、烟雾和家族名誉危机。你没有笑，他反而更尴尬，却明显放松了。', addMemory: 'percy_family_noise' },
        { label: '帮他指另一条路', delta: 3, response: '你告诉他一条不经过双胞胎的路线。珀西认真点头，像你刚提供了重要战略情报。临走前他补充，韦斯莱家当然非常团结，只是有时过于声势浩大。' },
      ],
      aiSeed: '',
    },
    {
      id: 'percy_year1_rule_exception',
      require: { minTier: 4, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '珀西在宵禁前叫住你，手里拿着一张借阅许可。「按规定这本书明天才能借，」他说，表情严肃得像正面对道德危机，「但你明早要交作业，而且图书馆今天提前关门。」他把许可递给你，声音压低了一点：「这不是破例，是合理解释规则。」',
      choices: [
        { label: '接过许可', delta: 5, response: '你接过那张写得工整的许可。珀西像松了一口气，又立刻补充必须按时归还。你看着他努力把帮忙包装成程序正确，忽然觉得他的规则并不总是冰冷的。', addMemory: 'percy_rule_exception' },
        { label: '问他会不会被说', delta: 4, response: '他说如果有人问，他会解释。停顿后又补充，规则存在是为了让事情变好，不是为了让人输给格式。说完他自己似乎也被这句话说服了。' },
      ],
      aiSeed: '',
    },
  ],
};

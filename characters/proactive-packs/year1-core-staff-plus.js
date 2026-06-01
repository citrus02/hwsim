/**
 * year1-core-staff-plus.js
 * 一年级核心教职员工主动来访加厚包。
 *
 * 教授主动来找玩家时，重点不是“发任务”，而是让玩家感到他们也在城堡里生活、
 * 巡视、担心、忙碌、记得学生的小事，并以各自的方式介入学生的日常。
 */

export const YEAR1_CORE_STAFF_PLUS_PROACTIVE = {
  severusSnape: [
    {
      id: 'snape_year1_unlabeled_vial',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '斯内普教授在地下走廊的阴影里叫住你，手里夹着一只没有标签的小瓶。「这瓶东西出现在一年级操作台边。」他的声音像冰冷的刀背，「我希望你能回忆一下，今天谁把材料放错了位置。」瓶中液体安静得过分，连火把光都像不愿碰它。',
      choices: [
        { label: '认真回忆魔药课细节', delta: 4, response: '你说出一个靠近储物架的新生和一袋错放的蛇牙。斯内普眯起眼，没有表扬，只说你的观察力“尚未完全浪费”。他转身离开前，把那只危险的小瓶收进袖中，走廊重新安静下来。', addMemory: 'snape_unlabeled_vial' },
        { label: '承认自己不确定', delta: 3, response: '斯内普冷冷看着你，说不确定总比胡乱指认稍微不那么愚蠢。他要求你下次在魔药课上学会看见手边三英尺以内的世界。话难听，却把真正的风险压在了训斥下面。' },
      ],
      aiSeed: '斯内普主动找玩家核对无标签药瓶来源。保持尖刻与压迫感，但事件核心是安全和课堂责任。',
    },
    {
      id: 'snape_year1_ink_on_recipe',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '你刚离开图书馆，斯内普教授就从书架阴影后递出一张被墨水污了一角的配方抄本。「既然你有时间在这里晃荡，」他说，「或许可以证明你还有基本阅读能力。这里被遮住的剂量是多少？」配方边缘散着苦艾味，显然不是普通作业。',
      choices: [
        { label: '根据上下文推断剂量', delta: 5, response: '你谨慎地给出答案，并说明前后步骤的理由。斯内普沉默了两秒，像在寻找可供讥讽的漏洞，最后只把抄本收回去。「勉强没有致命。」他说。对他而言，这几乎像一句允许你继续活着的认可。', addMemory: 'snape_recipe_dose' },
        { label: '说不能凭猜测加药', delta: 4, response: '斯内普的目光更冷了，却没有立刻驳斥。他说很好，至少你明白魔药不是用勇气搅拌出来的。那句话尖锐，却让你意识到他要的答案也许正是“不该乱猜”。' },
      ],
      aiSeed: '斯内普主动考玩家被墨水遮住的配方剂量。重点是魔药严谨性，不要写成普通问答任务。',
    },
    {
      id: 'snape_year1_corridor_smoke',
      require: { minTier: 3, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '地下教室外飘着一缕淡紫色烟雾。斯内普教授站在门口，袍角几乎不动。「进去之前，告诉我你闻到了什么。」他没有解释为什么问你。烟味里有一点烧焦羽毛、一点薄荷，还有某种让舌根发苦的气息。',
      choices: [
        { label: '描述闻到的气味', delta: 4, response: '你把气味一一说出。斯内普挥杖让烟雾倒卷回坩埚，冷冷说至少你的鼻子还没有被南瓜汁泡坏。随后他命令几个学生退出教室，显然你刚才的判断帮他确认了反应程度。', addMemory: 'snape_corridor_smoke' },
        { label: '问是否有危险', delta: 3, response: '他说如果真有危险，凭你现在的站位已经太晚了。可他还是把你往身后冷硬地一挡，才推开教室门。那动作快得几乎不像关心，却很难被误认为偶然。' },
      ],
      aiSeed: '斯内普主动让玩家辨认地下教室外的烟味。用嗅觉、地下空间和冷硬保护感制造真实课堂事故氛围。',
    },
    {
      id: 'snape_year1_leftover_antidote',
      require: { minTier: 4, cooldownDays: 14, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '斯内普教授在医疗翼门口叫住你，递来一个极小的纸包。「交给庞弗雷夫人。」他说，「不要打开，不要晃，不要试图表现你那点可怜的好奇心。」纸包外没有署名，只有一行极细的字：备用解毒剂，夜间有效。',
      choices: [
        { label: '立刻送去医疗翼', delta: 5, response: '你把纸包交给庞弗雷夫人时，她只看了一眼就收进药柜，说斯内普教授总是嘴上不说，却比许多人更早想到夜里会用到什么。你回头看走廊，斯内普已经不见了，只剩火把在石墙上冷冷燃着。', addMemory: 'snape_leftover_antidote' },
        { label: '问为什么让你送', delta: 3, response: '斯内普说因为你正好挡在路上，而他有更重要的事要做。这个理由听起来毫无温度，可纸包被他用防潮咒包得很严，像某些关心只能以最不讨人喜欢的方式出现。' },
      ],
      aiSeed: '斯内普主动让玩家送备用解毒剂到医疗翼。表现他不温柔但周密、提前防备风险。',
    },
  ],

  minervaMcGonagall: [
    {
      id: 'mcgonagall_year1_crooked_tie',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '麦格教授在楼梯平台上叫住你，目光先落在你的领带上。「请等一下。」她说。她没有立刻批评，只用魔杖轻轻一点，让松散的结回到端正位置。「霍格沃茨不要求你时时完美，」她补充，「但它会要求你学会在走进重要房间前整理好自己。」',
      choices: [
        { label: '向她道谢', delta: 4, response: '麦格教授点点头，神情仍然严肃，却没有冷淡。她说一年级最难的不是学会多少咒语，而是在紧张时仍记得自己可以站稳。那句提醒比整理领带本身更郑重。', addMemory: 'mcgonagall_crooked_tie' },
        { label: '说自己刚从楼梯上跑下来', delta: 3, response: '她扬起眉毛，说这解释了领带，但不解释跑步。随后她让开一步，提醒你下一段楼梯今晚会转得很突然。批评和照看在她这里总是挨得很近。' },
      ],
      aiSeed: '麦格教授主动整理玩家歪掉的领带。写严格、体面和关照新生的边界感。',
    },
    {
      id: 'mcgonagall_year1_lost_transfiguration_note',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '麦格教授在变形术教室门口递给你一页折好的笔记。「这是你落下的。」纸上有几处被红墨水圈出的错误，旁边却不是简单的叉，而是极细的提示。「我建议你今晚重看第三段，尤其是‘意图’和‘形态’的区别。」',
      choices: [
        { label: '认真收下笔记', delta: 5, response: '你翻开笔记，发现她把最容易混淆的地方都标了出来。麦格教授说错误本身不可怕，可怕的是把错误折起来当作没发生。她转身回教室前，又补了一句明天可以提前十分钟来问。', addMemory: 'mcgonagall_returned_note' },
        { label: '问她是否觉得你跟不上', delta: 4, response: '麦格教授看着你，说如果她认为你不值得教，就不会在这页纸上花时间。那句话严厉得像一扇门，却也清楚地告诉你门还开着。' },
      ],
      aiSeed: '麦格教授主动归还并批注玩家遗落的变形术笔记。体现严格教学和不放弃学生。',
    },
    {
      id: 'mcgonagall_year1_firstyear_argument',
      require: { minTier: 3, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '走廊尽头两个一年级正小声争执，麦格教授从画像旁走出，先叫住了你。「你刚才经过时，看见事情如何开始的吗？」她问。语气平稳，却让人不敢随便站队。两名学生立刻闭嘴，连画像里的贵妇都停止了扇扇子。',
      choices: [
        { label: '如实说明你看到的部分', delta: 5, response: '你只说自己亲眼看见的事，没有补上猜测。麦格教授听完后点头，让两名学生分别补充。她没有急着扣分，而是把事实一块块放回桌面。你第一次看见严厉也可以是一种保护。', addMemory: 'mcgonagall_fair_witness' },
        { label: '承认你没看全', delta: 4, response: '麦格教授说这正是她需要听到的答案。没有看全就不该说全，这条规则在她口中像变形术的基础原则一样不可动摇。' },
      ],
      aiSeed: '麦格教授主动询问玩家作为走廊争执见证人。写她的公正、纪律和事实感。',
    },
    {
      id: 'mcgonagall_year1_window_cat',
      require: { minTier: 4, cooldownDays: 14, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '雨后的窗台上蹲着一只花斑猫，正盯着你脚边那本快被水洇湿的课本。你弯腰去捡时，猫已经轻巧地用爪子把书往干处推了一寸。下一秒，麦格教授站在那里，神情镇定得仿佛什么也没有发生。',
      choices: [
        { label: '假装没有看见变形', delta: 4, response: '麦格教授接过你递起的课本，检查封面是否受潮。「谨慎有时比惊叫更有用。」她说。你不确定她是在评价你的反应，还是在提醒你保护书本。也许两者都有。', addMemory: 'mcgonagall_window_cat' },
        { label: '向她道谢保护课本', delta: 5, response: '她的表情没有变化，只说课本若受潮，明天的作业会更糟。可她把书还给你时，已经用干燥咒处理过每一页。严格的关照仍然是关照。' },
      ],
      aiSeed: '麦格教授以阿尼马格斯形态短暂保护玩家课本。场景要克制、有霍格沃茨魔法日常感。',
    },
  ],

  albusDumbledore: [
    {
      id: 'dumbledore_year1_lemon_drop_stair',
      require: { minTier: 2, cooldownDays: 12, chance: 0.13, minGrade: 1, maxGrade: 1 },
      opening: '邓布利多校长在一段刚刚转错方向的楼梯上与你并肩停下，像这完全在他的计划之中。「柠檬雪宝？」他摊开手心，糖纸在烛光里闪了一下。「楼梯有时比学生更坚持己见。等待时吃点甜的，通常不算坏主意。」',
      choices: [
        { label: '接过糖果', delta: 4, response: '糖很酸，酸得你差点皱脸。邓布利多愉快地眨了眨眼，说人生里许多有趣的东西一开始都让人表情失控。楼梯慢慢转回去，你忽然没那么急了。', addMemory: 'dumbledore_lemon_drop_stair' },
        { label: '问他是否知道楼梯何时回来', delta: 3, response: '他说知道也许会少一点惊喜，不知道则多一点耐心。然后他补充，当然，如果你赶着上课，耐心也可以走另一条路。他用魔杖点亮一条你从没注意过的侧廊。' },
      ],
      aiSeed: '邓布利多主动在移动楼梯上与玩家短暂交谈。要有古怪、温柔和不直接说教的智慧。',
    },
    {
      id: 'dumbledore_year1_portrait_argument',
      require: { minTier: 2, cooldownDays: 12, chance: 0.13, minGrade: 1, maxGrade: 1 },
      opening: '一幅老巫师画像正和另一幅画像争论谁的帽子更有历史价值。邓布利多校长站在旁边，听得十分认真。看见你路过，他微笑着问：「你愿意做一位临时裁判吗？请放心，失败的一方最多只会生三十年的气。」',
      choices: [
        { label: '认真比较两顶帽子', delta: 4, response: '你指出一顶帽子年代更久，另一顶保养更好。邓布利多像听见了很精彩的论文，宣布两幅画像分别赢得“古老”和“精神饱满”两项荣誉。争吵终于变成了互相吹嘘。', addMemory: 'dumbledore_portrait_argument' },
        { label: '说自己不敢裁判', delta: 3, response: '邓布利多点头，说谨慎也是一种裁决，尤其在画像记仇时。两幅画像立刻抗议自己非常宽宏大量，声音大得经过的学生都笑了。' },
      ],
      aiSeed: '邓布利多主动让玩家调停画像争帽子。写城堡幽默和他把小争执变轻的能力。',
    },
    {
      id: 'dumbledore_year1_homesick_window',
      require: { minTier: 3, cooldownDays: 14, chance: 0.11, minGrade: 1, maxGrade: 1 },
      opening: '夜晚的走廊窗边，邓布利多校长停在你旁边，没有立刻说话。窗外黑湖像一块安静的墨色玻璃。「有些窗户很适合想家。」他轻声说，「尤其是那些不会急着回答你的窗户。」',
      choices: [
        { label: '承认自己有点想家', delta: 5, response: '邓布利多没有说想家会过去，也没有说你应该勇敢。他只是告诉你，霍格沃茨最初也常常像别人的房子，住久了才会在某个清晨忽然变成自己的。那句话安静地落在窗台上。', addMemory: 'dumbledore_homesick_window' },
        { label: '说自己只是在看湖', delta: 3, response: '他微笑着说湖也很值得看，尤其当一个人暂时不想解释自己为什么站在这里时。你忽然觉得不解释也被允许。' },
      ],
      aiSeed: '邓布利多主动在夜晚窗边陪玩家处理想家感。要温柔克制，不要鸡汤化。',
    },
    {
      id: 'dumbledore_year1_socks_question',
      require: { minTier: 4, cooldownDays: 16, chance: 0.1, minGrade: 1, maxGrade: 1 },
      opening: '邓布利多校长在礼堂外叫住你，郑重其事得像要宣布重大校务。「我需要一个诚实意见。」他说，「星星图案的袜子，是否比月亮图案更适合星期四？」他抬起袍角一点点，露出一只颜色相当不安分的袜子。',
      choices: [
        { label: '认真选择星星图案', delta: 4, response: '邓布利多欣然接受你的建议，说星期四确实需要一点星光来提醒人们周末并非遥不可及。他把袍角放下，像你刚帮他完成了一项复杂决策。你离开时心情莫名轻了一些。', addMemory: 'dumbledore_socks_question' },
        { label: '问为什么不两只不同', delta: 5, response: '邓布利多眼睛亮了起来，说这正是校长室里某些画像一直反对的激进方案。你们短暂而严肃地讨论了袜子的自由，路过的学生都努力不去笑。霍格沃茨因此显得更活了。' },
      ],
      aiSeed: '邓布利多主动向玩家征求袜子图案意见。保留古怪幽默，让玩家感到校长也有日常和游戏感。',
    },
  ],

  filiusFlitwick: [
    {
      id: 'flitwick_year1_floating_books',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '弗立维教授从一摞漂浮的书本后探出头来，声音轻快得像银铃。「啊，正好！能请你帮我数一下是不是少了一本吗？」那些书排成摇摇晃晃的一队，最末一本显然想往盔甲走廊逃走。',
      choices: [
        { label: '帮他数漂浮书本', delta: 4, response: '你数到第七本时，那本逃跑的书打了个转。弗立维教授挥杖把它轻轻召回，笑着说书有时也会被盔甲的回声吸引。你帮他把书送回教室，他真诚地向你鞠了一小躬。', addMemory: 'flitwick_floating_books' },
        { label: '追上逃跑的那本书', delta: 5, response: '你在盔甲前截住那本书，盔甲还很配合地伸出手挡了一下。弗立维教授高兴地说你反应敏捷，随后补充，和书本打交道时温柔比胜利更重要。' },
      ],
      aiSeed: '弗立维教授主动请玩家帮忙数漂浮书。写轻快魔法、课堂日常和教授的礼貌温暖。',
    },
    {
      id: 'flitwick_year1_wand_angle',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '弗立维教授在走廊里叫住你，手里拿着一根短粉笔。「你刚才练漂浮咒时，手腕角度很好，只有最后一下太急。」他把粉笔变成一条细细的银线，在空气里勾出一个弧度。「看这里，不必用力压住咒语。」',
      choices: [
        { label: '照着弧度练一次', delta: 5, response: '你按他示范的动作念咒，粉笔轻轻浮起，没有撞到天花板。弗立维教授高兴得几乎跳起来，说这才是咒语愿意被邀请的样子。那种喜悦真诚得让你也跟着笑了。', addMemory: 'flitwick_wand_angle' },
        { label: '问他怎么注意到的', delta: 3, response: '弗立维教授说学生的魔杖动作就像小小的笔迹，每个人都不同。他说这话时眼睛发亮，仿佛教一年级不是重复劳动，而是在读很多刚开始写的故事。' },
      ],
      aiSeed: '弗立维教授主动指出玩家漂浮咒手腕角度。写教学细节和他对学生进步的真心兴奋。',
    },
    {
      id: 'flitwick_year1_charmed_cushion',
      require: { minTier: 3, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '咒语课教室门口，一个软垫正固执地在半空弹来弹去。弗立维教授站在椅子上，仍然保持着令人敬佩的镇定。「它原本只是用来接住掉落课本的，」他说，「现在它似乎决定发展表演事业。能帮我关上那扇窗吗？」',
      choices: [
        { label: '跑去关窗', delta: 4, response: '你关上窗后，软垫终于不再被风带着乱飘。弗立维教授用一个漂亮的小咒语让它落回地面，随后笑着说魔法物件一旦有了风，就会以为自己被邀请去旅行。', addMemory: 'flitwick_charmed_cushion' },
        { label: '试着接住软垫', delta: 3, response: '软垫撞进你怀里，力道比想象中轻。弗立维教授鼓掌称赞你的勇气和缓冲能力，并保证下次会给软垫更清楚的职业规划。' },
      ],
      aiSeed: '弗立维教授主动请玩家协助处理乱飞软垫。要有轻巧幽默和咒语教室活泼感。',
    },
    {
      id: 'flitwick_year1_tiny_concert',
      require: { minTier: 4, cooldownDays: 14, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '晚饭后，弗立维教授在空教室里摆着三只茶杯，每只杯子都发出不同音高的轻响。他看见你路过，招招手。「帮我听听第三只是不是低了一点？我打算让它们明天提醒学生收拾魔杖。」',
      choices: [
        { label: '认真听茶杯音高', delta: 5, response: '你指出第三只确实低了一点。弗立维教授调整咒语后，三只茶杯唱出一段短短的旋律。他高兴地说纪律也可以用温柔一点的声音来提醒。你忽然期待起明天的下课铃。', addMemory: 'flitwick_tiny_concert' },
        { label: '问为什么不用普通铃声', delta: 4, response: '弗立维教授笑着说普通铃声当然有效，但霍格沃茨已经有太多会吓人的门、楼梯和盔甲了，偶尔也该有些东西只是轻轻唱歌。' },
      ],
      aiSeed: '弗立维教授主动请玩家听被施咒茶杯音高。写音乐感、温柔纪律和霍格沃茨小魔法。',
    },
  ],

  pomonaSprout: [
    {
      id: 'sprout_year1_muddy_boots',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '斯普劳特教授在温室门口拦住你，目光落在你靴底的泥上。「别动。」她说，随手拿起一把小刷子，「这不是普通泥，是会在石缝里长出小蘑菇的泥。」她说得非常平常，仿佛鞋底长蘑菇是霍格沃茨周三应有的风险。',
      choices: [
        { label: '乖乖让她刷掉泥', delta: 4, response: '斯普劳特教授把泥刷进陶盆里，又撒了一撮灰。她说温室里的东西不是都危险，但都应该被带到合适的地方。你看着那团泥微微鼓起，庆幸它没有在宿舍地板上醒来。', addMemory: 'sprout_muddy_boots' },
        { label: '问蘑菇会怎样', delta: 3, response: '她笑眯眯地说，通常只是唱歌，唱得难听时就比较麻烦。随后她叮嘱你下次离开温室前先跺一跺脚，语气像在传授一条很重要的生存经验。' },
      ],
      aiSeed: '斯普劳特教授主动处理玩家靴底的温室泥。写草药学日常的温暖荒诞和实用照顾。',
    },
    {
      id: 'sprout_year1_thirsty_fern',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '斯普劳特教授端着一盆蔫巴巴的蕨类植物追上你。「你能帮我拿一下喷壶吗？这孩子今天情绪很低。」那株植物的叶片垂得像刚听完宾斯教授三小时讲座。温室玻璃上蒙着水雾，里面暖得像另一个季节。',
      choices: [
        { label: '帮她给蕨类喷水', delta: 5, response: '你轻轻喷水，叶片慢慢抬起一点。斯普劳特教授满意地点头，说大多数植物和学生一样，不一定需要大道理，有时只是缺水、缺光，或者缺一个人注意到它。', addMemory: 'sprout_thirsty_fern' },
        { label: '问植物真的有情绪吗', delta: 4, response: '她说当然有，只是表达得比人诚实。饿了就蔫，怕冷就卷叶，不像某些一年级明明困得发晃还说自己不累。她看了你一眼，笑得很慈祥。' },
      ],
      aiSeed: '斯普劳特教授主动请玩家帮忙照看蔫掉的蕨类。用植物照顾映照学生照顾，不要说教。',
    },
    {
      id: 'sprout_year1_seed_packet',
      require: { minTier: 3, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '斯普劳特教授在餐厅外把一个小纸包递给你。「帮我带给海格，路上别把它放进口袋深处。」纸包里有什么东西轻轻敲着纸面。她补充道：「它们只是种子，但有些种子在被忽视时会很有意见。」',
      choices: [
        { label: '小心送去给海格', delta: 5, response: '你一路捧着纸包，里面的种子偶尔不满地撞一下。海格接过后咧嘴笑，说斯普劳特教授总能弄到最有脾气的小东西。回程时你觉得自己像完成了一次很小但很正式的托付。', addMemory: 'sprout_seed_packet' },
        { label: '问它们会不会咬人', delta: 3, response: '斯普劳特教授想了想，说现在不会，如果你唱歌太难听就不好说。她把纸包拍进你手心，笑着让你走稳一点。' },
      ],
      aiSeed: '斯普劳特教授主动托玩家送有脾气的种子给海格。体现温室、海格和城堡生活互相连接。',
    },
    {
      id: 'sprout_year1_after_frost',
      require: { minTier: 4, cooldownDays: 14, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '清晨温室外结了一层薄霜，斯普劳特教授裹着厚围巾，正给一排小苗罩玻璃罩。她看见你，招手让你过去。「帮我扶一下这个角。霜不坏，」她说，「坏的是我们假装它不会来。」',
      choices: [
        { label: '帮她罩好幼苗', delta: 5, response: '你扶住玻璃罩，斯普劳特教授把边缘压进土里。小苗在里面微微颤动，却被护住了。她说照顾不是让植物永远不遇见冷，而是在冷来之前准备好。那句话在清晨白雾里显得很踏实。', addMemory: 'sprout_after_frost' },
        { label: '问她每天都这么早吗', delta: 4, response: '她笑着说植物不会因为教授想多睡一会儿就推迟冻伤。说完她又把围巾往上拉了拉，显然自己也很冷。你忽然觉得勤恳不是口号，是清晨湿冷泥土上的脚印。' },
      ],
      aiSeed: '斯普劳特教授主动请玩家清晨帮忙防霜。写勤恳、照料和真实温室劳动感。',
    },
  ],

  rolandaHooch: [
    {
      id: 'hooch_year1_broom_splinter',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '霍琦夫人在飞行课后叫住你，把一把学校扫帚横过来。「看这里。」她指着把柄上一道细小木刺，「你刚才握到它了吗？」她的黄眼睛锐利得像能看见你还没说出口的逞强。风从球场边吹过，扫帚尾枝沙沙作响。',
      choices: [
        { label: '承认刚才扎到了手', delta: 5, response: '霍琦夫人哼了一声，立刻把扫帚收走，叫你去处理手掌。她说飞行课上最危险的学生不是飞不好的人，而是受伤了还假装没事的人。训话很硬，却把你的手看得比一把扫帚重要。', addMemory: 'hooch_broom_splinter' },
        { label: '说只是小刺', delta: 3, response: '她眯起眼，说小刺在半空中也能变成大麻烦。随后她用干脆利落的动作把木刺削平，像在处理一场还没发生的事故。' },
      ],
      aiSeed: '霍琦夫人主动检查玩家扫帚木刺。写飞行安全、干脆严厉和真实训练场细节。',
    },
    {
      id: 'hooch_year1_wind_line',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '球场边，霍琦夫人忽然把哨子从嘴边放下，叫你过去。「站在这里，告诉我风从哪边来。」她没有看天空，只看着你的袍角和草尖。几名学生还骑在扫帚上等命令，整个球场像屏住了呼吸。',
      choices: [
        { label: '根据草尖判断风向', delta: 4, response: '你指出风正从湖面方向转急。霍琦夫人点头，立刻让学生降低高度。她说飞得好不是只看前面，脚下的草有时比天上的云更早告诉你答案。', addMemory: 'hooch_wind_line' },
        { label: '说自己不确定', delta: 3, response: '她说不确定就先降落，这是飞行课上最值得记住的答案之一。随后她吹响哨子，声音短促清亮，学生们一个个落回地面。' },
      ],
      aiSeed: '霍琦夫人主动让玩家判断风向。表现飞行训练中的观察、安全和球场真实感。',
    },
    {
      id: 'hooch_year1_loose_tailtwig',
      require: { minTier: 3, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '霍琦夫人把一把扫帚递给你，尾枝有一处松散。「不用飞，帮我扶稳。」她说。她从口袋里取出细绳，动作快得像在给扫帚包扎伤口。旁边一只游走球箱震了一下，她连头都没回。',
      choices: [
        { label: '帮她扶稳扫帚', delta: 4, response: '你扶住扫帚，尾枝在她手下重新收紧。霍琦夫人说一把扫帚如果在起飞前就不被尊重，飞到半空也不会尊重你。她把扫帚架回去，顺手把游走球箱也踢得更稳。', addMemory: 'hooch_loose_tailtwig' },
        { label: '问扫帚会不会记仇', delta: 3, response: '她看你一眼，说扫帚不记仇，但重力会。这个回答干脆得让人立刻明白玩笑可以有，安全不能省。' },
      ],
      aiSeed: '霍琦夫人主动请玩家帮忙修松散尾枝。写扫帚维护和她的硬朗幽默。',
    },
    {
      id: 'hooch_year1_after_fall',
      require: { minTier: 4, cooldownDays: 14, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '一次低空练习后，有个新生摔进草地，虽然没受伤，却坐在那里不肯再看扫帚。霍琦夫人没有立刻把人拉起来，而是叫住你。「去把那把扫帚捡回来，慢一点。」她的声音压低了些，不像平时那么尖利。',
      choices: [
        { label: '慢慢把扫帚捡回来', delta: 5, response: '你把扫帚递回去时，霍琦夫人蹲下对那个新生说，害怕落地很正常，下一次先站到扫帚旁边就够了。她没有把勇敢说得很响，却给了对方一个可以重新开始的台阶。', addMemory: 'hooch_after_fall' },
        { label: '问为什么让你去捡', delta: 4, response: '她说摔倒的人有时需要先看见扫帚不是敌人，而不是看见一群人围着自己。你忽然明白她的严厉下面藏着许多关于恐惧的经验。' },
      ],
      aiSeed: '霍琦夫人主动让玩家帮忙处理摔倒后的新生。写飞行恐惧、训练经验和不煽情的照顾。',
    },
  ],

  sybillTrelawney: [
    {
      id: 'trelawney_year1_teacup_cloud',
      require: { minTier: 2, cooldownDays: 12, chance: 0.13, minGrade: 1, maxGrade: 1 },
      opening: '特里劳妮教授从一阵香气浓重的茶雾里叫住你，双眼在大镜片后显得格外朦胧。「亲爱的，过来看看这只杯子。」茶叶在杯底聚成一团云状，她压低声音，「它刚才非常坚持地转向门口，显然在等待某个人。」',
      choices: [
        { label: '认真看茶叶形状', delta: 4, response: '你说那团茶叶像一片被风吹散的云。特里劳妮教授深深吸气，仿佛你刚说出一个古老真理。她说云代表漂泊，也代表迟到的作业。最后一句让你不确定她是不是已经看见你的书包。', addMemory: 'trelawney_teacup_cloud' },
        { label: '问杯子是不是在等你', delta: 3, response: '她神秘地点头，又说命运常常借最近的人敲门。随后她把杯子递给你，里面的茶已经不烫了，味道却意外温和。' },
      ],
      aiSeed: '特里劳妮教授主动叫玩家看茶叶形状。保留神秘、滑稽和偶尔准确的混合感。',
    },
    {
      id: 'trelawney_year1_fallen_beads',
      require: { minTier: 2, cooldownDays: 12, chance: 0.13, minGrade: 1, maxGrade: 1 },
      opening: '一串珠帘在北塔楼梯口散了，紫色珠子滚得到处都是。特里劳妮教授站在台阶上，悲伤地宣布：「它们预感到了分离。」然后她看向你，声音恢复了一点实际，「亲爱的，能帮我捡一下那颗滚到画像下面的吗？」',
      choices: [
        { label: '帮她捡回珠子', delta: 4, response: '你趴到画像下方把珠子摸出来，画像里的老巫婆嫌弃地抱怨你挡住了她的地毯。特里劳妮教授郑重感谢你，说被找回的小东西总会改变一点未来。珠子重新串起时，北塔楼梯也不那么阴森了。', addMemory: 'trelawney_fallen_beads' },
        { label: '问珠子真的预感到了吗', delta: 3, response: '她说当然，也可能只是线太旧。这个罕见的现实答案很快又被她用一声叹息盖住，但你已经听见了。' },
      ],
      aiSeed: '特里劳妮教授主动请玩家帮忙捡散落珠帘。写北塔、神秘感和生活化的狼狈。',
    },
    {
      id: 'trelawney_year1_draft_in_tower',
      require: { minTier: 3, cooldownDays: 14, chance: 0.11, minGrade: 1, maxGrade: 1 },
      opening: '北塔的活板门下透出一股冷风。特里劳妮教授裹着披肩探头出来，严肃地说：「这不是普通穿堂风。它带着一种非常明显的预兆。」停顿片刻后，她补充，「也可能只是窗户没关严。你愿意帮我看一眼吗？」',
      choices: [
        { label: '帮她关上高窗', delta: 5, response: '你踩着小凳关上窗，冷风立刻弱了。特里劳妮教授把披肩裹紧，宣布预兆已被暂时安抚。她给你倒了一杯热茶作为感谢，茶香把塔楼里的寒意一点点挤走。', addMemory: 'trelawney_tower_draft' },
        { label: '问她为什么不自己关', delta: 3, response: '她看了看那张摇摇晃晃的小凳，诚实地说她的天眼今天不适合高处作业。这个说法荒唐又合理，让你忍不住笑了一下。' },
      ],
      aiSeed: '特里劳妮教授主动请玩家关北塔高窗。用预兆语言包裹很实际的需求。',
    },
    {
      id: 'trelawney_year1_lucky_pin',
      require: { minTier: 4, cooldownDays: 16, chance: 0.1, minGrade: 1, maxGrade: 1 },
      opening: '特里劳妮教授在楼梯上叫住你，递来一枚小小的银色别针。「它今天早上从我的披肩上掉下来，然后滚到你脚边。」她神情庄重，「这种轨迹很少没有意义。或者，至少说明它不想再挂在我身上。」',
      choices: [
        { label: '暂时替她保管别针', delta: 4, response: '你把别针收好，特里劳妮教授满意地点头，说它若选择回来，自会回来。几分钟后，她又小声补充，如果你下次路过北塔，也可以顺便带来。命运忽然显得很会安排跑腿。', addMemory: 'trelawney_lucky_pin' },
        { label: '问它是否会带来好运', delta: 5, response: '她说好运常常伪装成你愿意替别人保管一件小东西。这个回答比你预想的更温柔。别针在你掌心微微发凉，像一枚从古怪里递出来的信任。' },
      ],
      aiSeed: '特里劳妮教授主动把掉落别针交给玩家暂管。让她古怪中有柔软，不要单纯笑料化。',
    },
  ],

  auroraSinistra: [
    {
      id: 'sinistra_year1_star_chart_corner',
      require: { minTier: 2, cooldownDays: 12, chance: 0.13, minGrade: 1, maxGrade: 1 },
      opening: '辛尼斯特拉教授在天文塔阶梯上叫住你，手里拿着一张卷起的星图。「帮我按住这个角。」夜风从塔顶灌下来，星图边缘不停翻动，像有一小片天空不愿被纸面困住。',
      choices: [
        { label: '帮她按住星图', delta: 4, response: '你按住星图一角，辛尼斯特拉教授用银墨标出几颗星的位置。她说天文课最先教人的不是远方，而是耐心看准一个点。风很冷，可星图在你们手下慢慢安静下来。', addMemory: 'sinistra_star_chart_corner' },
        { label: '问为什么晚上还在画', delta: 3, response: '她说星星不会因为明天有课就提前摆好姿势。这个回答平静而理所当然，让你第一次意识到天文教授的工作常常发生在别人睡着以后。' },
      ],
      aiSeed: '辛尼斯特拉教授主动请玩家按住星图。写天文塔夜风、耐心和夜间工作感。',
    },
    {
      id: 'sinistra_year1_misnamed_star',
      require: { minTier: 2, cooldownDays: 12, chance: 0.13, minGrade: 1, maxGrade: 1 },
      opening: '辛尼斯特拉教授把一份作业递给你，指着上面一个被圈出的星名。「你把它和旁边那颗混淆了。」她的语气没有责备，只像把望远镜调回焦距。「今晚如果有云散开的间隙，你可以亲自再看一次。」',
      choices: [
        { label: '请她指出区别', delta: 5, response: '辛尼斯特拉教授带你走到窗边，用魔杖在空气中画出两个微小的亮点。她说名字不是为了背诵，而是为了你下次抬头时能认出老朋友。这个说法让那颗星忽然不再只是作业答案。', addMemory: 'sinistra_misnamed_star' },
        { label: '承认自己只按图背了', delta: 4, response: '她点头，说很多人都是这样开始的，但不能永远这样结束。她没有让你难堪，只把作业折好交回，像把夜空重新还给你。' },
      ],
      aiSeed: '辛尼斯特拉教授主动指出玩家星名混淆。写温和纠错和“看见”而非死记。',
    },
    {
      id: 'sinistra_year1_cloud_wait',
      require: { minTier: 3, cooldownDays: 14, chance: 0.11, minGrade: 1, maxGrade: 1 },
      opening: '天文塔上云层很厚，学生们都以为今晚什么也看不见。辛尼斯特拉教授却叫住你，指向云缝边缘。「等三分钟。」她说。她没有解释更多，只把怀表扣在掌心，像正在和天空进行一场安静的约定。',
      choices: [
        { label: '陪她等三分钟', delta: 5, response: '第三分钟快结束时，云层真的裂开一道缝，一颗亮星短暂出现。辛尼斯特拉教授让你看准那一点，说天文有时就是愿意比失望多等一小会儿。星光很快消失，却足够留下印象。', addMemory: 'sinistra_cloud_wait' },
        { label: '问如果云没散呢', delta: 3, response: '她说那也算一次观测，因为你学会了今晚的云不愿合作。这个答案平静得几乎严厉，却让失败显得不那么空。' },
      ],
      aiSeed: '辛尼斯特拉教授主动让玩家等待云缝观星。写耐心、失败也算观测的天文学气质。',
    },
    {
      id: 'sinistra_year1_lantern_oil',
      require: { minTier: 4, cooldownDays: 16, chance: 0.1, minGrade: 1, maxGrade: 1 },
      opening: '深夜下塔时，辛尼斯特拉教授在楼梯口递给你一盏小灯。「拿着。塔阶在潮湿时会反光，容易让人看错下一步。」灯油有淡淡松木味，光不大，却稳定地照出每一级石阶。',
      choices: [
        { label: '接过灯慢慢下楼', delta: 5, response: '你提着灯走下楼梯，辛尼斯特拉教授在后面保持不远不近的距离。她没有催促，只在你快踩到湿滑处时轻声提醒。你忽然觉得她教的不只是星星，也包括如何安全回到地面。', addMemory: 'sinistra_lantern_oil' },
        { label: '问她是否总会备灯', delta: 4, response: '她说仰望天空的人更应该记得脚下。这个答案短而稳，像她本人。灯光落在石阶上，夜里的霍格沃茨因此少了一点危险，多了一点被照看的感觉。' },
      ],
      aiSeed: '辛尼斯特拉教授主动给玩家夜间下塔灯。体现天文课后的安全照看和她沉静可靠的气质。',
    },
  ],

  remusLupin: [
    {
      id: 'lupin_year1_chocolate_after_scare',
      require: { minTier: 2, cooldownDays: 12, chance: 0.13, minGrade: 1, maxGrade: 1 },
      opening: '卢平教授在黑魔法防御术教室外叫住你，递来一小块巧克力。「你刚才被那只衣柜里的东西吓到了。」他说得很轻，没有让“吓到”听起来像指责。「先吃一点，等手不抖了再回去。」',
      choices: [
        { label: '接过巧克力', delta: 5, response: '巧克力在舌尖化开，手指真的慢慢稳下来。卢平教授没有急着讲勇气，只说恐惧有时会让身体先替你说话。知道这一点，比假装没怕过更有用。', addMemory: 'lupin_chocolate_after_scare' },
        { label: '说自己没事', delta: 3, response: '卢平教授温和地看着你，说没事的人也可以吃巧克力。这个台阶给得太自然，你终于不用继续证明自己没有被吓到。' },
      ],
      aiSeed: '卢平教授主动给玩家巧克力安抚受惊。写温柔、理解恐惧和防御术课堂余波。',
    },
    {
      id: 'lupin_year1_boggart_note',
      require: { minTier: 2, cooldownDays: 12, chance: 0.13, minGrade: 1, maxGrade: 1 },
      opening: '卢平教授把一张折好的纸条递给你。「如果你愿意，可以写下你觉得好笑的东西。」他说，「不是现在交，也不是必须交。只是下一次面对害怕时，有个能抓住的念头会方便些。」纸条很普通，却被他递得像一件工具。',
      choices: [
        { label: '收下纸条', delta: 4, response: '你把纸条夹进课本。卢平教授说笑并不总是轻浮，有时它只是让恐惧松开一只手。你忽然明白防御术不只是学会攻击，也是在最慌的时候给自己留一条路。', addMemory: 'lupin_boggart_note' },
        { label: '问他自己会写什么', delta: 5, response: '卢平教授笑了笑，说也许是一顶非常不合身的帽子。他没有解释更多，但那一瞬间的笑意真实而疲惫，让你觉得他也在用自己的办法对付某些东西。' },
      ],
      aiSeed: '卢平教授主动给玩家写滑稽念头的纸条。温柔地把教学延伸到课后，不要过度沉重。',
    },
    {
      id: 'lupin_year1_threadbare_sleeve',
      require: { minTier: 3, cooldownDays: 14, chance: 0.11, minGrade: 1, maxGrade: 1 },
      opening: '卢平教授在走廊窗边停下，发现自己袖口勾住了一颗松动钉子。他轻轻扯了一下，旧布料发出危险的细响。看见你路过，他有些无奈地笑了笑。「能帮我把那颗钉子按回去吗？我的袍子恐怕经不起一场英勇牺牲。」',
      choices: [
        { label: '帮他按回松钉', delta: 4, response: '你用魔杖柄把钉子压回木框。卢平教授整理袖口，认真向你道谢，像你刚帮他解决的不是一件小狼狈，而是避免了一个漫长下午的尴尬。他很会让小帮助显得被珍惜。', addMemory: 'lupin_threadbare_sleeve' },
        { label: '问他要不要修补袖口', delta: 5, response: '他低头看了看磨薄的袖口，说也许周末会补。停了停，他又说人和衣服一样，有些地方旧了也仍然能撑很久。那句话很轻，像不小心说出来的真话。' },
      ],
      aiSeed: '卢平教授主动请玩家帮忙处理勾住袍子的钉子。写他的旧袍子、温和幽默和被生活磨损的质感。',
    },
    {
      id: 'lupin_year1_moonlit_corridor',
      require: { minTier: 4, cooldownDays: 16, chance: 0.1, minGrade: 1, maxGrade: 1 },
      opening: '月光把走廊铺得很白，卢平教授站在窗边，手里拿着一摞作业。他看见你，先把作业抱稳，才轻声问：「睡不着？」他没有追问原因，只往旁边让出一点位置，让窗外的黑湖也进入你们的沉默里。',
      choices: [
        { label: '承认睡不着', delta: 5, response: '卢平教授点点头，说城堡夜里会把很多声音放大，脚步声、画像声，还有脑子里没说完的话。他建议你回去前数三盏灯，不必数完所有烦恼。这个办法小得正好能用。', addMemory: 'lupin_moonlit_corridor' },
        { label: '问他也睡不着吗', delta: 4, response: '他看向月光，笑意淡了一点，说教授也会有需要批改作业到很晚的时候。你没有拆穿这句话里的空隙，他似乎因此感到轻松。' },
      ],
      aiSeed: '卢平教授主动在月光走廊关照睡不着的玩家。温柔克制，暗示但不直白展开他的沉重。',
    },
  ],

  siriusBlack: [
    {
      id: 'sirius_year1_escaped_map_prank',
      require: { minTier: 2, cooldownDays: 12, chance: 0.13, minGrade: 1, maxGrade: 1 },
      opening: '小天狼星在一条空走廊里叫住你，手里拿着一张明显不是正规地图的羊皮纸。「别问它从哪来。」他说，笑得有点危险，「我只是需要确认这条密道现在是不是还会把人送到扫帚柜里。」画像们纷纷假装没有听见。',
      choices: [
        { label: '提醒他这听起来很可疑', delta: 4, response: '小天狼星大笑，说可疑和有趣之间常常只隔着一个安全出口。随后他真的先检查了出口，确认没有一年级会被困进去。你发现他的鲁莽里至少还有一条底线。', addMemory: 'sirius_map_prank' },
        { label: '帮他看守走廊一会儿', delta: 3, response: '你站在拐角处，听见里面传来一声闷响和小天狼星压低的咒骂。片刻后他带着满肩灰尘出来，郑重宣布扫帚柜结论依旧有效。你很难不笑。' },
      ],
      aiSeed: '小天狼星主动让玩家卷入检查密道的小冒险。要有危险边缘、玩笑和保护一年级的底线。',
    },
    {
      id: 'sirius_year1_motorbike_story',
      require: { minTier: 2, cooldownDays: 12, chance: 0.13, minGrade: 1, maxGrade: 1 },
      opening: '小天狼星坐在庭院矮墙上，像那不是学校财产而是他私人沙发。他看见你，忽然问：「你知道摩托车飞起来时最先听见什么吗？」没等你回答，他已经抬头看向天空，眼神亮得像那里还有一条没人批准的路。',
      choices: [
        { label: '请他讲下去', delta: 5, response: '他说最先听见的不是风，而是地面被甩在身后的那一下安静。故事讲得很夸张，肯定删掉了许多危险细节。可你听得出来，他说的不是炫耀，而是对自由的怀念。', addMemory: 'sirius_motorbike_story' },
        { label: '问这是否违反校规', delta: 3, response: '小天狼星看起来非常受伤，说有些问题会让故事提前衰老。随后他承认，是的，通常违反。这个“通常”被他说得相当骄傲。' },
      ],
      aiSeed: '小天狼星主动给玩家讲飞天摩托故事。写自由、夸张和不完全可靠但迷人的叙述。',
    },
    {
      id: 'sirius_year1_guarded_dog',
      require: { minTier: 3, cooldownDays: 14, chance: 0.11, minGrade: 1, maxGrade: 1 },
      opening: '黄昏时，庭院角落有一只黑狗趴在阴影里，目光警觉地盯着通往禁林的路。你刚走近，它就站起来挡在你前面。下一秒，小天狼星若无其事地从柱子后出现，拍了拍袍子上的灰。「那边今晚不适合散步。」',
      choices: [
        { label: '听他的离开禁林方向', delta: 5, response: '你跟着他绕回城堡。小天狼星没有解释太多，只说有些夜晚会把蠢主意放大。走到门口时，那只黑狗已经不见了。他冲你眨眨眼，像刚才什么也没发生。', addMemory: 'sirius_guarded_dog' },
        { label: '问那只狗是不是他', delta: 4, response: '小天狼星露出一个极其无辜的表情，说霍格沃茨有很多品味很好的黑狗。然后他补充，如果你看见其中任何一只挡路，最好听它的。' },
      ],
      aiSeed: '小天狼星以黑狗形态阻止玩家靠近禁林方向。写阿尼马格斯的保护感和玩世不恭。',
    },
    {
      id: 'sirius_year1_old_detention_mark',
      require: { minTier: 4, cooldownDays: 16, chance: 0.1, minGrade: 1, maxGrade: 1 },
      opening: '小天狼星在奖杯陈列室外叫住你，指着木门边一道很浅的刻痕。「看见了吗？那是历史。」他语气庄严得很不可信，「准确地说，是一次禁闭结束后，一个非常有才华的学生留下的求生痕迹。」刻痕旁边还隐约有被擦掉的名字首字母。',
      choices: [
        { label: '问那个学生是谁', delta: 4, response: '小天狼星把手按在胸口，说他受过良好教育，绝不会出卖旧友。然后他笑起来，笑声在陈列室玻璃间撞了好几下。你看见他眼里的怀念，比玩笑停得更久一点。', addMemory: 'sirius_old_detention_mark' },
        { label: '说这不值得骄傲', delta: 5, response: '他歪头想了想，承认有些事当年值得骄傲，现在只值得庆幸没有闹得更糟。这个回答比你预料的诚实。随后他又补充，当然，刻得还挺漂亮。' },
      ],
      aiSeed: '小天狼星主动向玩家展示旧禁闭痕迹。写玩笑、怀旧和成年后对少年鲁莽的复杂回望。',
    },
  ],
};

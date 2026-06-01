/**
 * year1-muggle-staff-plus.js
 * 一年级麻瓜课程教职员工主动来访加厚包。
 *
 * 这些老师要避免只剩“学科拟人”：每一次主动来找玩家，
 * 都要有具体地点、具体物件、具体教学习惯，以及他们作为人的偏执、温柔或分寸。
 */

export const YEAR1_MUGGLE_STAFF_PLUS_PROACTIVE = {
  augustusFenwick: [
    {
      id: 'fenwick_year1_wrong_step_margin',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '芬威克教授在图书馆长桌尽头叫住你，递来一页没有署名的草稿。「这是你的字。」他说得非常确定。纸上第三行有一道小小的断裂，像楼梯少了一阶。「答案错得不严重，错法却很有意思。」',
      choices: [
        { label: '请他指出断掉的一步', delta: 5, response: '芬威克教授没有直接写答案，只把第三行前后各圈了一处，让你自己把中间补上。等你终于写出那一步，他点了点头，像一扇很窄的门终于开了。对他来说，这已经是相当明确的高兴。', addMemory: 'fenwick_wrong_step_margin' },
        { label: '问为什么认得你的字', delta: 3, response: '他说每个人写等号的方式都不一样，有人急，有人怕，有人把它写得像要逃跑。你低头看自己的等号，忽然觉得数学作业也暴露了不少秘密。' },
      ],
      aiSeed: '芬威克主动把玩家遗落的数学草稿还来，并指出推导断步。他不热情，但认真看见学生的思路。',
    },
    {
      id: 'fenwick_year1_stair_count',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '移动楼梯前，芬威克教授忽然停下脚步，问你：「你上来时数过台阶吗？」他手里拿着一小本黑皮笔记，里面密密麻麻记着日期、时间和楼梯变换。「霍格沃茨不守规矩，但不代表它完全没有规律。」',
      choices: [
        { label: '和他一起数台阶', delta: 4, response: '你们等楼梯转过两次，发现同一段台阶在晚餐前后确实少了一阶。芬威克教授把结果记下，语气平淡地说这足以说明城堡也会给数学制造麻烦。你第一次看见他眼里有很淡的笑意。', addMemory: 'fenwick_stair_count' },
        { label: '问这算数学还是魔法', delta: 3, response: '他回答说这是一个好问题，因为它暂时不急着归类。那句话不像夸奖，却让你觉得自己刚刚真的问到了什么。' },
      ],
      aiSeed: '芬威克主动让玩家一起数移动楼梯台阶。把数学和霍格沃茨城堡怪规律结合起来。',
    },
    {
      id: 'fenwick_year1_quiet_number',
      require: { minTier: 3, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '芬威克教授在空教室黑板前站着，黑板上只有一个数字。他听见你路过，头也不回地问：「你觉得它孤独吗？」这不像玩笑。他把粉笔放下，等你的答案，仿佛一个数字也值得被认真对待。',
      choices: [
        { label: '说数字要看它旁边是谁', delta: 5, response: '芬威克教授终于转过身，把第二个数字写在旁边。原本普通的数忽然成了比例、距离和关系。他说数学里很少有东西真正单独存在，人也一样。那句话短得几乎像他不小心多说了。', addMemory: 'fenwick_quiet_number' },
        { label: '说数字不会孤独', delta: 3, response: '他点头，说这是一个可防守的答案，但不是唯一答案。随后他在旁边写下一串变化，黑板像慢慢出现了呼吸。' },
      ],
      aiSeed: '芬威克主动用黑板上的单个数字引发玩家思考关系。保持克制，不要过度抒情。',
    },
    {
      id: 'fenwick_year1_exam_panic_grid',
      require: { minTier: 4, cooldownDays: 14, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '一次小测前，芬威克教授把一张空白方格纸递给你。「你紧张时会把题目看成一团。」他说，「把它们放进格子里。」他的语气没有安慰，反而像在递一件工具。方格纸很薄，却整齐得让人呼吸慢下来。',
      choices: [
        { label: '按他的办法整理题目', delta: 5, response: '你把已知、未知和第一步分别写进格子。题目没有变简单，却不再像一团黑雾。芬威克教授看了一眼，说恐慌也是一种未分类的信息。这个说法冷静得古怪，却意外有用。', addMemory: 'fenwick_panic_grid' },
        { label: '问他也会紧张吗', delta: 4, response: '他沉默片刻，说会，只是后来学会不把紧张误认为命令。说完他把一支削好的铅笔放到你桌边，像给出另一句没有说出口的鼓励。' },
      ],
      aiSeed: '芬威克主动给玩家方格纸处理测验紧张。写数学老师式实用关怀。',
    },
  ],

  serafinaMoody: [
    {
      id: 'serafina_year1_battery_spark',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '塞拉菲娜·穆迪教授在走廊尽头举着一只拆开的电池盒，头发被静电翘起一小撮。「来得正好。」她把护目镜推到你手里，「我需要一个人告诉我，火花是在接触前出现，还是接触后出现。」盒子里发出细小的噼啪声，旁边画像已经缩到画框边缘。',
      choices: [
        { label: '戴上护目镜观察', delta: 5, response: '你看见火花在金属片真正接触前就跳了出来。塞拉菲娜满意地一拍桌子，震得螺丝滚了一地。她说看见“还没碰到就发生”的瞬间，比背十行定义更有用。', addMemory: 'serafina_battery_spark' },
        { label: '提醒她画像快吓坏了', delta: 3, response: '她回头看了一眼，向画像郑重保证爆炸半径不包括肖像油彩。画像显然没有被安慰到，但你被她一本正经的样子逗笑了。' },
      ],
      aiSeed: '塞拉菲娜主动让玩家观察电池火花。写物理实验的粗粝活力和她的安全边界。',
    },
    {
      id: 'serafina_year1_falling_feather',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '塞拉菲娜教授在一段高窗下叫住你，手里拿着一根羽毛和一颗小石子。「你觉得它们谁先落地？」她问。你还没回答，她已经把两样东西举到同一高度，眼睛亮得像正等一个世界被拆开给人看。',
      choices: [
        { label: '认真猜一个答案', delta: 4, response: '你的答案刚说完，她就松手。羽毛慢悠悠地飘，石子啪地落到掌心。她没有嘲笑，只问你看见空气做了什么。问题忽然从对错变成了看见看不见的东西。', addMemory: 'serafina_falling_feather' },
        { label: '问这和魔法有什么关系', delta: 5, response: '她咧嘴笑，说关系大了，魔法也得和世界原本的脾气谈判。你第一次觉得物理不是反魔法，而是在听魔法落地时踩到什么。' },
      ],
      aiSeed: '塞拉菲娜主动用羽毛和石子演示下落。把麻瓜物理和魔法世界连接起来。',
    },
    {
      id: 'serafina_year1_broken_fan',
      require: { minTier: 3, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '一台麻瓜小风扇在教室角落里发出悲惨的嗡鸣。塞拉菲娜教授蹲在旁边，袖子卷到手肘。「别站门口，过来。」她说，「它不是快死了，它只是被灰尘和坏接触气得不想工作。」',
      choices: [
        { label: '帮她递工具', delta: 4, response: '你把螺丝刀递给她，她拆开外壳，露出里面细小的线圈。风扇重新转起来时，她让它吹向闷热的教室，得意地说修好东西比买新东西更能让人理解它。', addMemory: 'serafina_broken_fan' },
        { label: '问她为什么带风扇来霍格沃茨', delta: 3, response: '她说因为不是所有凉风都需要咒语，而且有些麻瓜发明很固执、很诚实、坏了也愿意告诉你坏在哪里。她说这话时像在夸一位脾气相投的老朋友。' },
      ],
      aiSeed: '塞拉菲娜主动请玩家协助修风扇。写麻瓜技术的生活感和她对机械的粗粝热爱。',
    },
    {
      id: 'serafina_year1_noise_meter',
      require: { minTier: 4, cooldownDays: 14, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '塞拉菲娜教授在礼堂外举着一个指针乱颤的小仪器。「别动。」她盯着仪表，「我在测长桌欢呼声能不能让指针越界。」里面正好传来一阵魁地奇相关的喝彩，指针猛地撞到红线，她高兴得差点把仪器举过头顶。',
      choices: [
        { label: '帮她记录读数', delta: 5, response: '你把几次欢呼的读数记下来，塞拉菲娜说这说明声音不只是热闹，也是能量在空气里横冲直撞。礼堂门缝里透出烛光和笑声，物理忽然不像冷冰冰的公式，而像霍格沃茨正在发出的脉搏。', addMemory: 'serafina_noise_meter' },
        { label: '问会不会太吵', delta: 4, response: '她说当然吵，但吵也可以被理解。理解不等于压低所有声音，只是知道什么时候该戴耳塞。随后她真的从口袋里掏出一副耳塞递给你。' },
      ],
      aiSeed: '塞拉菲娜主动测礼堂欢呼声。把物理测量和霍格沃茨热闹生活结合。',
    },
  ],

  elizaLovegood: [
    {
      id: 'eliza_year1_rain_sentence',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '伊莱莎·洛夫古德教授在图书馆窗边叫住你，窗外雨水正沿着玻璃一行行落下。「给这场雨写一句话。」她说，把一张空白纸推过来，「不要写它像眼泪，除非你真的听见它在哭。」',
      choices: [
        { label: '写一句自己的比喻', delta: 5, response: '你写完后，她读得很慢，像怕惊动句子。她没有说好或不好，只圈出一个动词，说它让雨有了脚步。你忽然觉得写作不是堆漂亮词，而是让世界用一种更准确的方式出现。', addMemory: 'eliza_rain_sentence' },
        { label: '说自己想不出来', delta: 3, response: '她说想不出来时可以先听。你们沉默了一会儿，只听雨敲窗框。过了片刻，她让你写下第一个听见的声音。纸上终于有了一个不急的开头。' },
      ],
      aiSeed: '伊莱莎主动让玩家给雨写一句话。写文学课的感官训练和她温柔但精确的审美。',
    },
    {
      id: 'eliza_year1_found_bookmark',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '伊莱莎教授把一枚干花书签递给你。「它夹在你还回来的书里。」她说。书签上的花已经褪色，边缘却保存得很好。「我不确定这是你忘了拿，还是书舍不得放你走。」',
      choices: [
        { label: '收回书签', delta: 4, response: '你接过书签，花瓣薄得几乎透明。伊莱莎教授说读过的书有时会在我们身上留下这种东西，很轻，却能证明那段时间真的存在。她没有追问书签来历，只把安静留给你。', addMemory: 'eliza_found_bookmark' },
        { label: '问她喜欢这本书吗', delta: 3, response: '她笑着说喜欢，但更想知道你在哪里停下过。她翻到书页压痕的位置，说一个人停顿的地方，常常比读完的地方更诚实。' },
      ],
      aiSeed: '伊莱莎主动归还干花书签。写文学、记忆和不逼问的温柔。',
    },
    {
      id: 'eliza_year1_read_aloud_pause',
      require: { minTier: 3, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '伊莱莎教授在空教室里请你读一段短文。你读到中间停了一下，她没有催，只抬手让窗边的一支蜡烛安静燃着。「那里为什么停？」她问，「是喘气，还是句子碰到了你？」',
      choices: [
        { label: '说那句话让你想到别的事', delta: 5, response: '她点点头，让你把那件事写在页边，不必给别人看。她说阅读有时不是理解作者，而是发现自己被哪一句轻轻碰了一下。你继续读时，声音比刚才稳了。', addMemory: 'eliza_read_pause' },
        { label: '说只是读错了', delta: 3, response: '她没有反驳，只说读错也有原因。然后她让你重读那一句，这次慢一点。句子的边缘终于清楚起来，像从雾里走出来。' },
      ],
      aiSeed: '伊莱莎主动关注玩家朗读停顿。写她对语言、声音和学生情绪的敏锐。',
    },
    {
      id: 'eliza_year1_library_whisper',
      require: { minTier: 4, cooldownDays: 14, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '图书馆深处有一本书正轻声重复最后一行诗，像忘了自己已经被合上。伊莱莎教授站在书架旁，对你做了个噤声手势。「它今天不愿结束。」她低声说，「帮我听听，它到底卡在哪个词上？」',
      choices: [
        { label: '俯身听那一行诗', delta: 5, response: '你听出那本书一直在重复“归来”。伊莱莎教授轻轻抚过书脊，把它放回更低的一层，说有些词需要被放到人能拿到的地方。书终于安静下来，像被理解了。', addMemory: 'eliza_library_whisper' },
        { label: '问书为什么会这样', delta: 4, response: '她说有些书被太多人急着读完，就会把最想说的词留在门口。这个解释不一定符合任何图书馆规则，却完全符合霍格沃茨。' },
      ],
      aiSeed: '伊莱莎主动让玩家听一本不愿结束的书。写魔法图书馆和文学老师的细腻。',
    },
  ],

  constanceShacklebolt: [
    {
      id: 'constance_year1_empty_chair',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '康斯坦丝·沙克博特教授在教室里指着一把空椅子。「今天讨论时，所有人都替在场的人说话。」她说，「现在试试替不在场的人说。」她把粉笔递给你，黑板上只写着一个问题：谁没有被听见？',
      choices: [
        { label: '写下一个被忽略的人', delta: 5, response: '你写下答案后，她没有立刻评价，只让你解释为什么。说到一半，你发现自己原本的判断有了缝隙。康斯坦丝教授点点头，说公正常常从那条缝隙开始。', addMemory: 'constance_empty_chair' },
        { label: '说这很难判断', delta: 4, response: '她说正因为难，才值得慢下来。容易的同情有时只是站在最近的人旁边，难的是为看不见的人留一把椅子。' },
      ],
      aiSeed: '康斯坦丝主动让玩家思考不在场者视角。写道德与法治课堂的克制和深度。',
    },
    {
      id: 'constance_year1_rule_notice',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '公告栏前，康斯坦丝教授把一张新贴的校规通知读了两遍，然后叫住你。「你觉得这条规则保护了谁？」她问。通知上写着宵禁时间调整，字句正式得没有温度。走廊里学生匆匆经过，很少有人真正停下来看。',
      choices: [
        { label: '认真分析规则目的', delta: 4, response: '你说它保护迷路的新生，也保护夜巡的人。康斯坦丝教授点头，又问它可能让谁不方便。你被迫把规则看成一张网，而不是一根棍子。', addMemory: 'constance_rule_notice' },
        { label: '问规则不就是用来遵守的吗', delta: 3, response: '她说当然，但理解一条规则，是为了在它不够好时知道如何改，而不是只会害怕它。那句话让公告栏上的字忽然有了重量。' },
      ],
      aiSeed: '康斯坦丝主动让玩家分析校规通知。写规则、保护和不便之间的复杂性。',
    },
    {
      id: 'constance_year1_apology_witness',
      require: { minTier: 3, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '康斯坦丝教授在盔甲走廊叫住你，旁边站着两个刚争执过的学生。「你不需要裁决谁是好人。」她说，「只需要告诉我，你听见了哪一句伤人的话。」盔甲们安静得出奇，像也在等待证词。',
      choices: [
        { label: '只复述你听见的话', delta: 5, response: '你没有添油加醋，只把那句话重复出来。康斯坦丝教授让说话的人听完自己的话，再决定如何道歉。你第一次看见“见证”不是站队，而是让伤害无法假装没有发生。', addMemory: 'constance_apology_witness' },
        { label: '说你不想让事情更糟', delta: 4, response: '她说沉默有时会让事情看起来平静，却把糟糕留给被伤到的人。她没有逼你，只让你想清楚自己保护的是谁。' },
      ],
      aiSeed: '康斯坦丝主动请玩家作为争执见证人。强调事实、伤害和道歉，不要写成审判爽文。',
    },
    {
      id: 'constance_year1_private_question',
      require: { minTier: 4, cooldownDays: 14, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '下课后，康斯坦丝教授没有立刻收走黑板上的问题。她等学生离开，才问你：「如果你知道正确的事会让朋友不高兴，你会怎么做？」她没有看你，像这个问题也曾经在她自己的桌上停留很久。',
      choices: [
        { label: '说要看事情严重程度', delta: 5, response: '康斯坦丝教授点头，说这是一个诚实的开始，因为真正的道德问题很少允许人轻松漂亮。她让你把“严重程度”拆成三条具体标准。问题没有变轻，却变得能被拿起来看。', addMemory: 'constance_private_question' },
        { label: '问她自己的答案', delta: 4, response: '她说她的答案也不是每次都一样，但她会尽量不把“怕失去朋友”伪装成“为对方好”。这句话安静得有些锋利。' },
      ],
      aiSeed: '康斯坦丝主动问玩家一个私人道德困境。写她严谨、克制、愿意承认答案不简单。',
    },
  ],

  primroseSprout: [
    {
      id: 'primrose_year1_blue_flame',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '普里姆罗斯·斯普劳特教授在实验室门口叫住你，指着一盏火焰微微发蓝的酒精灯。「看见了吗？」她问，「它没有大喊，也没有爆炸，只是在告诉你空气不够。」实验室里玻璃瓶安静排着队，像都在等你学会听懂这种小声提醒。',
      choices: [
        { label: '帮她调整通风', delta: 4, response: '你打开上方小窗，火焰慢慢回到稳定颜色。普里姆罗斯教授说化学里最危险的东西常常不是响声，而是被忽略的细微变化。她把这句话说得很轻，却让你背后发紧。', addMemory: 'primrose_blue_flame' },
        { label: '问蓝色是不是更漂亮', delta: 3, response: '她看你一眼，说漂亮和安全没有必然关系，这正是许多一年级需要学会的第一课。随后她又补充，当然，漂亮本身无罪。' },
      ],
      aiSeed: '普里姆罗斯主动让玩家观察酒精灯火焰颜色。写化学安全和细节观察。',
    },
    {
      id: 'primrose_year1_unknown_crystal',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '普里姆罗斯教授把一只小托盘放到你面前，里面有几粒透明晶体。「不要碰。」她先说，「先看。」晶体在灯下闪着很干净的光，像完全无害的小盐粒。她站在旁边，耐心等你把“想碰”的冲动咽回去。',
      choices: [
        { label: '只观察不触碰', delta: 5, response: '你描述晶体形状和边缘，普里姆罗斯教授满意地点头。她说克制也是实验技能，尤其当一个东西看起来很像厨房里的盐时。她把托盘收进柜子，柜门上的锁轻轻咔哒一声。', addMemory: 'primrose_unknown_crystal' },
        { label: '问它到底是什么', delta: 3, response: '她说现在知道名字并不重要，重要的是你已经在不知道名字时做出了安全选择。这个答案让你有点不甘心，却也让晶体更神秘了。' },
      ],
      aiSeed: '普里姆罗斯主动训练玩家观察未知晶体。强调克制和实验安全。',
    },
    {
      id: 'primrose_year1_report_smudge',
      require: { minTier: 3, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '普里姆罗斯教授把你的实验报告放在窗边晾干，报告角落有一团被药液晕开的墨迹。「这里本来写了什么？」她问。语气没有责备，反而像在追踪一条被雨冲淡的线索。',
      choices: [
        { label: '凭记忆补回观察记录', delta: 5, response: '你努力回忆颜色变化和时间，补回了那一小段。普里姆罗斯教授说数据丢失时，诚实比完美更重要。她没有把墨迹擦掉，只在旁边写了“已补记”。那团污迹成了实验的一部分。', addMemory: 'primrose_report_smudge' },
        { label: '承认记不清了', delta: 4, response: '她说那就写“记不清”，不要写一个漂亮的谎。实验室里有些错误可以重做，有些谎会让后面所有结论都变坏。' },
      ],
      aiSeed: '普里姆罗斯主动处理玩家实验报告被晕开的观察记录。写科学诚实和不粉饰数据。',
    },
    {
      id: 'primrose_year1_after_lab_air',
      require: { minTier: 4, cooldownDays: 14, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '实验结束后，普里姆罗斯教授没有让你立刻走，而是打开窗户，示意你站到新鲜空气旁。「深呼吸。」她说，「不是每一次不舒服都需要逞强。」窗外传来远处学生的笑声，实验室里的酸味慢慢散开。',
      choices: [
        { label: '照她说的深呼吸', delta: 5, response: '冷空气进到肺里，你才发现自己刚才一直绷着。普里姆罗斯教授把一杯清水递给你，说好学生不该把身体当作实验耗材。她的关心非常实际，实际得让人无法拒绝。', addMemory: 'primrose_after_lab_air' },
        { label: '说自己没事', delta: 3, response: '她淡淡地说“没事”需要证据。然后她让你坐够两分钟，像在执行一项实验室规程。你抱着水杯，忽然觉得被严格照看也不错。' },
      ],
      aiSeed: '普里姆罗斯主动让玩家实验后通风休息。写严谨、身体照顾和实验室真实感。',
    },
  ],

  tavishMacLaren: [
    {
      id: 'tavish_year1_moth_wing',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '塔维什·麦克拉伦教授在温室外的灯下叫住你，灯罩里停着一只小飞蛾。「别碰它。」他说得很慢，「先看翅膀。」飞蛾翅面有细得像灰尘的纹路，在光下轻轻发亮。',
      choices: [
        { label: '安静观察翅纹', delta: 5, response: '你看见翅纹并不对称。塔维什教授点头，说活物很少像图鉴那样整齐，图鉴只是起点，不是审判。飞蛾忽然振翅，像把这个结论带进了夜色里。', addMemory: 'tavish_moth_wing' },
        { label: '问为什么不能碰', delta: 3, response: '他说因为有些美丽靠很薄的东西活着。这个答案很慢，很轻，却让你把伸出去的手收了回来。' },
      ],
      aiSeed: '塔维什主动让玩家观察飞蛾翅纹。写生物学观察、耐心和对脆弱生命的尊重。',
    },
    {
      id: 'tavish_year1_specimen_label',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '标本室里，塔维什教授把一张泛黄标签递给你。「读给我听。」他说。瓶中的小型水生生物蜷在透明液体里，像一个很久以前停下的动作。标签上的墨水褪得厉害，只剩几段断裂的字母。',
      choices: [
        { label: '努力辨认标签文字', delta: 4, response: '你读出地点和日期，塔维什教授把它们重新誊写到新标签上。他说一个标本如果失去来处，就会从生命变成摆设。你看着那只小生物，忽然觉得标签也是一种记忆。', addMemory: 'tavish_specimen_label' },
        { label: '问它是什么物种', delta: 3, response: '他说这当然重要，但还不够。它在哪里被发现、那天水温如何、谁把它带回来，这些都决定它不仅仅是一个名字。' },
      ],
      aiSeed: '塔维什主动请玩家辨认标本旧标签。写生物学记录和生命来处的重要性。',
    },
    {
      id: 'tavish_year1_seedling_silence',
      require: { minTier: 3, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '塔维什教授在温室角落放着一盆刚出芽的小苗，见你经过，做了个安静的手势。「它刚才动了一下。」他低声说。你们站在泥土味和玻璃雾气里，等一片几乎看不见的嫩叶再次展开。',
      choices: [
        { label: '陪他等小苗展开', delta: 5, response: '过了很久，那片嫩叶真的向光偏了一点。塔维什教授没有得意，只说有些事情发生得太慢，不适合被急性子宣布不存在。你觉得这句话也许不只是在说植物。', addMemory: 'tavish_seedling_silence' },
        { label: '问他怎么知道刚才动了', delta: 4, response: '他说因为他昨天也在这里，前天也在。很多观察并不依靠一眼看见，而依靠你愿意一再回来。' },
      ],
      aiSeed: '塔维什主动邀请玩家等待幼苗微动。写慢观察和生命过程。',
    },
    {
      id: 'tavish_year1_field_notebook',
      require: { minTier: 4, cooldownDays: 14, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '塔维什教授把一本磨旧的田野笔记放到你手里。「翻一页。」他说。笔记里夹着压平的草叶、泥点和小小的天气记录。每一页都不像课堂讲义，更像某个人在野外蹲了很久才留下的呼吸。',
      choices: [
        { label: '翻到一页草叶记录', delta: 5, response: '你读出那天的风向和土壤湿度。塔维什教授说他已经忘了那顿午饭吃了什么，却记得那片草叶为什么向北倒。记忆在他这里不是热闹故事，而是被认真看过的细节。', addMemory: 'tavish_field_notebook' },
        { label: '问他为什么给你看', delta: 4, response: '他想了很久，说因为你开始学会看慢东西。这个评价很轻，却像一枚被郑重交到你手里的徽章。' },
      ],
      aiSeed: '塔维什主动给玩家看田野笔记。写他长期观察的质感和对玩家成长的认可。',
    },
  ],

  herbertBinns: [
    {
      id: 'herbert_year1_footnote',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '赫伯特·宾斯教授在魔法史教室门口叫住你，递来一张只有脚注的纸。「你上次问的那场谈判，课本正文漏掉了一个人。」他说。纸上名字很小，像被历史放在页脚里很久。',
      choices: [
        { label: '请他讲脚注里的人', delta: 5, response: '宾斯教授讲得依然平稳，却没有跳过那个人的选择和迟疑。听到最后，你发现所谓脚注并不是不重要，只是过去有人觉得它可以小一点。', addMemory: 'herbert_footnote_person' },
        { label: '问为什么正文没有写', delta: 4, response: '他说正文通常留给胜者、王室和签字的人，脚注则收留那些让事情真正发生的人。那句话很淡，却把一整页历史翻了过来。' },
      ],
      aiSeed: '赫伯特主动给玩家补充课本脚注人物。写历史讲师对被忽略者的重视。',
    },
    {
      id: 'herbert_year1_dusty_date',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '宾斯教授把一份旧档案放在窗边，灰尘在光里慢慢浮动。「这个日期，你觉得它为什么被改过？」他问。档案上的数字有刮擦痕迹，像有人试图让某一天从纸上挪开。',
      choices: [
        { label: '观察刮擦痕迹', delta: 4, response: '你指出新墨水比旧墨水浅。宾斯教授点头，说历史有时不是遗忘，而是修改得太用力。你看着那几个数字，第一次觉得日期也会受伤。', addMemory: 'herbert_dusty_date' },
        { label: '问是谁改的', delta: 3, response: '他说这正是问题，但在问谁之前，先要承认它被改过。许多调查失败在第一步，因为人们太急着找罪人，忘了先看纸。' },
      ],
      aiSeed: '赫伯特主动让玩家观察旧档案日期刮改。写历史证据感和档案室气氛。',
    },
    {
      id: 'herbert_year1_map_of_revolt',
      require: { minTier: 3, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '魔法史教室里，宾斯教授没有立刻开始讲课，而是把一张叛乱路线图铺在你桌上。「从这里到这里，为什么不是直线？」他问。地图上的墨线绕过山谷和城镇，像一段不肯被简化的路。',
      choices: [
        { label: '猜测他们绕开城镇', delta: 5, response: '宾斯教授说很可能，因为城镇里有家人、债务和不愿被卷入的人。叛乱忽然不只是旗帜和口号，而是很多人绕路时做出的选择。', addMemory: 'herbert_revolt_map' },
        { label: '问课本为什么只画箭头', delta: 4, response: '他说箭头容易记，绕路才接近真实。你看着那条弯曲的墨线，觉得历史第一次像有人真正走过。' },
      ],
      aiSeed: '赫伯特主动让玩家看叛乱路线图。写历史中的地理、普通人和被简化的复杂性。',
    },
    {
      id: 'herbert_year1_after_bell',
      require: { minTier: 4, cooldownDays: 14, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '下课铃响后，宾斯教授仍站在讲台前，像铃声只是历史里一件不太相关的小事。等学生都离开，他才叫住你。「你今天没有记最后一句。」他说，「我不确定是因为你累了，还是因为那句值得停一停。」',
      choices: [
        { label: '请他再说一遍最后一句', delta: 5, response: '他重复道：「留下记录的人，不一定理解自己留下了什么。」这一次你写得很慢。宾斯教授看着你写完，没有表情变化，却把讲义留在你桌上，让你带走。', addMemory: 'herbert_after_bell' },
        { label: '承认自己走神了', delta: 3, response: '他说走神也可以成为线索，只要你愿意回头看它把你带去了哪里。他没有责备你，只把那句话重新放回你面前。' },
      ],
      aiSeed: '赫伯特主动注意到玩家没记最后一句。写他平静但敏锐地看见学生状态。',
    },
  ],

  felixWeasley: [
    {
      id: 'felix_year1_home_map',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '菲利克斯·韦斯莱教授在地图桌旁叫住你，桌上摊着一张英国地图。「指给我看，你觉得家大概在哪里。」他说，「不需要准确，地理课最开始通常不是精确，而是承认自己从哪里出发。」',
      choices: [
        { label: '在地图上指出方向', delta: 5, response: '你指了一个位置，菲利克斯教授没有纠正，只问你想到那里的第一种天气。地图忽然不是考试工具，而像一张能把气味、路灯和早餐声都装进去的纸。', addMemory: 'felix_home_map' },
        { label: '说自己不太确定', delta: 4, response: '他说不确定也很好，很多人第一次看地图时都会把家缩成一个模糊点。重要的是从模糊点开始，而不是假装自己一开始就知道经纬度。' },
      ],
      aiSeed: '菲利克斯主动让玩家在地图上指出家。写地理与个人记忆连接。',
    },
    {
      id: 'felix_year1_weather_pin',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '菲利克斯教授把几枚彩色图钉递给你，指向墙上的天气图。「帮我把今天早晨的雾钉上去。」他说。地图上有风向、雨线和一片用蓝色铅笔涂出的冷空气，像天空被拆开铺在墙上。',
      choices: [
        { label: '把雾标到黑湖附近', delta: 4, response: '你把图钉按到黑湖边，菲利克斯教授满意地点头，说雾不是“到处都有”，它也有来处和停留的理由。霍格沃茨早晨那片白茫茫的东西忽然有了路线。', addMemory: 'felix_weather_pin' },
        { label: '问雾也能算地理吗', delta: 3, response: '他笑着说当然，地理不是只研究硬邦邦的山和河，也研究人为什么在某些早晨看不见三步外的路。' },
      ],
      aiSeed: '菲利克斯主动让玩家标天气图。写地理的天气、地点和生活连接。',
    },
    {
      id: 'felix_year1_map_smell',
      require: { minTier: 3, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '菲利克斯教授递给你一本旅行笔记，翻开的那页夹着一片干海藻。「别只看字。」他说，「闻闻。」纸页带着盐和旧皮箱的味道，和霍格沃茨潮湿石墙的气味完全不同。',
      choices: [
        { label: '照他说的闻一闻', delta: 5, response: '你说闻起来像海边和雨后绳索。菲利克斯教授高兴地拍了拍笔记，说这比“沿海地区”四个字好得多。一个地方如果没有气味，就还没有真正进入脑子里。', addMemory: 'felix_map_smell' },
        { label: '问笔记来自哪里', delta: 4, response: '他讲起一座风很大的港口，讲那里的路牌总被盐雾弄得发白。故事绕得有点远，但你这次没有急着等考点。' },
      ],
      aiSeed: '菲利克斯主动让玩家闻旅行笔记中的海藻。写地理的感官与故事，不要只讲知识点。',
    },
    {
      id: 'felix_year1_wrong_route_kindness',
      require: { minTier: 4, cooldownDays: 14, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '菲利克斯教授在走廊上拦住你，递来一张手绘小地图。「你上次走这条路绕了很久。」他说，「但我没有立刻提醒，因为有些绕路会让人认识城堡。」地图上标着一幅爱打岔的画像和一扇只在午后开着的小门。',
      choices: [
        { label: '收下小地图', delta: 5, response: '你发现地图没有画最短路线，而是画了一条会经过暖窗台和少人的楼梯。菲利克斯教授说效率不是唯一的地理，有些路线是为了让人愿意再走一次。', addMemory: 'felix_wrong_route_kindness' },
        { label: '问为什么现在提醒', delta: 3, response: '他说因为绕路一次是认识，绕路五次就是疲惫。地理课偶尔也应该教人什么时候该回到近路。' },
      ],
      aiSeed: '菲利克斯主动给玩家一张手绘城堡小地图。写路线、绕路和善意。',
    },
  ],

  mirandaPercival: [
    {
      id: 'miranda_year1_sentence_breath',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '米兰达·珀西瓦尔教授在走廊窗边叫住你，把你的英文短文翻到一段长句。「读出来。」她说。你刚读到一半就没气了。她没有笑，只在句子中间轻轻画了一道斜线。「看，文字也需要呼吸。」',
      choices: [
        { label: '按她标出的停顿重读', delta: 5, response: '你重读一遍，句子终于不再像一根绷紧的绳子。米兰达教授点头，说标点不是装饰，它们是读者能继续走下去的台阶。你第一次觉得逗号也很可靠。', addMemory: 'miranda_sentence_breath' },
        { label: '问是否要改短', delta: 3, response: '她说不一定。长句如果知道自己为什么长，就可以保留；不知道时才会变成迷宫。她让你自己决定删哪里，而不是替你动笔。' },
      ],
      aiSeed: '米兰达主动让玩家朗读英文长句并标停顿。写声音、标点和表达节奏。',
    },
    {
      id: 'miranda_year1_library_recommendation',
      require: { minTier: 2, cooldownDays: 10, chance: 0.16, minGrade: 1, maxGrade: 1 },
      opening: '米兰达教授从图书馆书架上抽出一本薄薄的书，放到你手里。「不是作业。」她先说，「只是我想知道它会不会适合你。」封面旧得发软，扉页上有一行铅笔字，像很久以前某个学生留下的感想。',
      choices: [
        { label: '问为什么觉得适合你', delta: 4, response: '她说因为你写东西时总在最后一句突然变诚实，而这本书也有同样的习惯。这个评价让你有些不好意思，却也让那本书变得像一封被挑选过的信。', addMemory: 'miranda_book_recommendation' },
        { label: '答应借来看', delta: 5, response: '米兰达教授没有要求读后感，只说如果读到一半讨厌它，也可以把讨厌的那一页折起来。她似乎更关心你真的与书发生关系，而不是礼貌地读完。' },
      ],
      aiSeed: '米兰达主动给玩家推荐一本非教学大纲书。写她对学生表达习惯的观察和阅读自由。',
    },
    {
      id: 'miranda_year1_word_left_out',
      require: { minTier: 3, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
      opening: '米兰达教授把你作文里的一个空缺指给你看。「你这里少了一个词。」她说，「不是语法必须，是你自己绕开了。」那一行明明通顺，却像有个脚印突然停在门外。',
      choices: [
        { label: '试着补上那个词', delta: 5, response: '你补上的词并不华丽，却让整段话忽然稳了。米兰达教授没有多问，只说有些词不是不会写，是不敢写。她把作文还给你时，那一行看起来比之前更像你自己。', addMemory: 'miranda_word_left_out' },
        { label: '问她怎么发现的', delta: 4, response: '她说句子会在逃避的地方变得太客气。这个判断安静却准，让你开始怀疑她批改的不是作文，而是你藏在作文里的退路。' },
      ],
      aiSeed: '米兰达主动指出玩家作文里被绕开的词。写她敏锐、克制，不逼迫但看见表达回避。',
    },
    {
      id: 'miranda_year1_ink_translation',
      require: { minTier: 4, cooldownDays: 14, chance: 0.12, minGrade: 1, maxGrade: 1 },
      opening: '米兰达教授在一盏晕黄的灯下叫住你，桌上摊着一段短短的英文。「试着不要逐词翻译。」她说，「告诉我这句话想做什么。」窗外有人经过，脚步声很快远去，教室里只剩纸页和墨水味。',
      choices: [
        { label: '说出句子的意图', delta: 5, response: '你说那句话像是在安慰一个不肯承认自己难过的人。米兰达教授的眼神柔和了一点，说很好，语言首先是动作，其次才是词典。那一刻，英文不再像一堵墙，而像一只伸出的手。', addMemory: 'miranda_ink_translation' },
        { label: '问标准答案是什么', delta: 3, response: '她微微摇头，说有些句子没有标准答案，只有更诚实和更偷懒的读法。她把词典推远一点，让你再看一遍原句。' },
      ],
      aiSeed: '米兰达主动让玩家理解英文句子的意图而非逐词翻译。写语言作为动作和关系。',
    },
  ],
};

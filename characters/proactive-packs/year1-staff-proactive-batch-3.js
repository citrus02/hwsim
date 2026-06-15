/**
 * year1-staff-proactive-batch-3.js
 * 一年级教职工主动来找玩家加厚包（三）。
 * 每名教职工 5 条。只保留可进入游戏的场景、选项和反馈。
 */

const ev = (id, minTier, opening, first, second) => ({
  id,
  require: { minTier, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
  opening,
  choices: [
    { label: first[0], delta: first[1], response: first[2], ...(first[3] ? { addMemory: first[3] } : {}) },
    { label: second[0], delta: second[1], response: second[2], ...(second[3] ? { addMemory: second[3] } : {}) },
  ],
});

export const YEAR1_STAFF_PROACTIVE_BATCH_3 = {
  augustusFenwick: [
    ev('fenwick_year1_proactive_b3_margin_proof', 1, '芬威克教授在图书馆边叫住你，递来一张只有半行算式的纸。「补完它。不是为了分数，是为了让答案有地方站稳。」', ['补完算式', 5, '他看完后点了点头，把纸折好，说思路若能自己走到结论，就不必靠运气拖着。', 'fenwick_proactive_margin_proof'], ['说我不确定', 4, '他说不确定可以写在第一行，不能藏在最后一行。']),
    ev('fenwick_year1_proactive_b3_borrowed_ruler', 1, '他把一把麻瓜直尺放到你面前。「有人把它当魔杖挥了三次。请你告诉他，它的才能更安静。」', ['替他转告', 5, '那名学生尴尬地收起直尺。芬威克远远看见，像一件工具终于恢复了尊严。', 'fenwick_proactive_ruler_dignity'], ['问为什么不用魔法尺', 3, '他说魔法不是拒绝简单工具的理由。']),
    ev('fenwick_year1_proactive_b3_exam_fear', 2, '芬威克教授在空教室门口停下。「你刚才盯着试卷发呆。下次如果卡住，先写你知道的第一件事。」', ['认真记下', 5, '他说第一件事不一定通向答案，但总比坐在原地等待恐惧批改你要好。', 'fenwick_proactive_first_known'], ['说脑子会空', 4, '他点头，说所以要给空白一个台阶。']),
    ev('fenwick_year1_proactive_b3_clock_error', 1, '芬威克教授指着墙上的钟。「它慢了四分钟。告诉我，这会造成什么麻烦？」', ['认真推想', 5, '你说到迟到、交接和误会。他点头，说时间的小错喜欢让人替它付大账。', 'fenwick_proactive_clock_error'], ['说四分钟不多', 3, '他说在火车、考试和魔药里，四分钟常常很有野心。']),
    ev('fenwick_year1_proactive_b3_quiet_praise', 2, '他在走廊里叫住你，语气仍然平稳。「你今天没有抢答。你等别人说完了。继续。」', ['点头接受', 5, '那句“继续”短得像批注，却让你觉得他确实看见了。', 'fenwick_proactive_waited_turn'], ['问这是表扬吗', 4, '他说如果你需要它被命名，那么，是。']),
  ],
  serafinaMoody: [
    ev('serafina_year1_proactive_b3_goggle_strap', 1, '塞拉菲娜教授把一副护目镜扔给你。「带给那边那个小家伙。带子松了，爆裂声不会因为他脸小就绕开。」', ['送去护目镜', 5, '护目镜重新扣紧。塞拉菲娜竖起拇指，像你刚拆除了一枚很小的事故。', 'serafina_proactive_goggle_strap'], ['问会爆吗', 3, '她说不会最好，会的话你会感谢这副护目镜。']),
    ev('serafina_year1_proactive_b3_wire_smell', 2, '她在实验桌边叫住你。「闻到焦味了吗？别靠太近。告诉我从哪边来的。」', ['帮她判断方向', 5, '你指出右侧插线板。她立刻切断电源，说鼻子今天比魔杖可靠。', 'serafina_proactive_wire_smell'], ['说有一点', 4, '她点头，说一点焦味就是机器低声骂人。']),
    ev('serafina_year1_proactive_b3_failed_radio', 1, '塞拉菲娜抱着一台吱吱响的旧收音机拦住你。「它只愿意播放天气。你帮我转旋钮，我要知道它是坏了还是有品味。」', ['帮她转旋钮', 5, '收音机忽然吐出一小段音乐。她大笑，说看来它只是需要被礼貌威胁。', 'serafina_proactive_radio_knob'], ['问这东西危险吗', 3, '她说目前只对耐心危险。']),
    ev('serafina_year1_proactive_b3_lab_rule', 2, '她用粉笔在地上画了一条线，抬头看你。「帮我守这条线。谁越过，就让他解释为什么自己的眉毛不重要。」', ['帮她守线', 5, '没有人越线。塞拉菲娜满意地说，恐吓如果能保护眉毛，就算教育。', 'serafina_proactive_lab_line'], ['说这话太吓人', 4, '她说比起真的少一撮眉毛，这已经很温柔了。']),
    ev('serafina_year1_proactive_b3_muggle_button', 1, '塞拉菲娜把一个拆下来的按钮递给你。「按下去时要有反馈。魔法世界太习惯命令，麻瓜机器会要求你听它回答。」', ['按下按钮', 5, '按钮发出清脆一声。她说听见了吗，这就是小东西认真工作的声音。', 'serafina_proactive_button_feedback'], ['说它很普通', 3, '她挑眉，说普通如果能每天工作，就值得尊重。']),
  ],
  elizaLovegood: [
    ev('eliza_year1_proactive_b3_window_sentence', 1, '伊莱莎教授在窗边叫住你，递来一张空纸。「写一句你现在看见的东西。不要写漂亮，先写真的。」', ['写下眼前景象', 5, '她读完后微笑，说这句没有急着讨好任何人，所以它站得很稳。', 'eliza_proactive_true_sentence'], ['说我不会写', 4, '她说那就写“我不会写”。诚实常是第一句。']),
    ev('eliza_year1_proactive_b3_luna_crumbs', 2, '她捧着一小撮饼干屑来找你。「卢娜说这是月光留下的。你愿意和我一起把它们放到窗台吗？」', ['陪她放到窗台', 5, '饼干屑在光里闪了一下。伊莱莎说，有些解释不必赢，只要被温柔放下。', 'eliza_proactive_luna_crumbs'], ['问这不是饼干吗', 3, '她笑了，说是饼干，也可以临时担任月光。']),
    ev('eliza_year1_proactive_b3_overwritten_essay', 2, '伊莱莎教授把一篇作文递给你，页上满是华丽词句。「你能帮我找出哪一句最安静吗？这个孩子把自己藏得太深了。」', ['找出一句朴素的话', 5, '她把那句圈起来，说这里有呼吸，其他地方暂时都在穿礼服。', 'eliza_proactive_quiet_sentence'], ['说都很好看', 3, '她轻轻摇头，说好看有时会挡住人。']),
    ev('eliza_year1_proactive_b3_book_return', 1, '她拿着一本封皮磨旧的书找到你。「这本书借阅记录里有你的名字。它想回去以前，也许该听你说一句再见。」', ['对书说再见', 5, '伊莱莎认真点头，把书抱回怀里，像替一位老朋友送行。', 'eliza_proactive_book_goodbye'], ['说这有点奇怪', 4, '她说奇怪常常只是礼貌还没被多数人承认。']),
    ev('eliza_year1_proactive_b3_rain_reading', 1, '雨声很密时，伊莱莎教授在廊下叫住你。「读这一段给雨听。它今天敲窗敲得很认真，应该有资格旁听。」', ['读给雨听', 5, '雨声像真的放轻了一点。伊莱莎说，听众不一定都坐在椅子上。', 'eliza_proactive_rain_reading'], ['问雨会听吗', 3, '她说至少你读的时候，会听见自己。']),
  ],
  constanceShacklebolt: [
    ev('constance_year1_proactive_b3_exit_count', 1, '康斯坦丝教授在礼堂门口叫住你。「数一眼出口。任何热闹地方都该先知道怎么离开。」', ['照她说数出口', 5, '她点头，说这不是害怕，是给自己留选择。', 'constance_proactive_exit_count'], ['问这里会出事吗', 3, '她说希望不会，但希望不是路线图。']),
    ev('constance_year1_proactive_b3_found_pin', 1, '她把一枚弯掉的徽章放到你手心。「在楼梯下捡到的。问问是谁的，不要大张旗鼓。」', ['低调寻找主人', 5, '徽章回到主人手里时，对方明显松了口气。康斯坦丝远远看见，什么也没说。', 'constance_proactive_found_pin'], ['交给失物箱', 3, '她说可以，但先问两个人，失物箱不是所有故事的终点。']),
    ev('constance_year1_proactive_b3_conflict_angle', 2, '康斯坦丝教授指向远处一场小争执。「站在这里看。告诉我谁想结束，谁只是想赢。」', ['认真观察', 5, '你看出一个学生已经退了半步。康斯坦丝说，调停常从看见这半步开始。', 'constance_proactive_conflict_angle'], ['说都在生气', 4, '她说生气只是表面温度，下面的方向更重要。']),
    ev('constance_year1_proactive_b3_secret_path', 2, '她在一条偏僻走廊停下，低声说：「这扇门今天被开过。别碰，帮我记住它原来的缝隙宽度。」', ['记住缝隙', 5, '她检查完门锁后点头，说好记性有时比好奇心更能保护人。', 'constance_proactive_door_gap'], ['问里面是什么', 3, '她看你一眼，说现在最有用的答案是：暂时别进去。']),
    ev('constance_year1_proactive_b3_thankless_work', 2, '康斯坦丝教授在巡查结束后叫住你。「刚才你提醒那孩子绕开湿地板。没人注意到，对吗？」', ['说没人注意', 5, '她点头，说很多有用的事都这样。别因此少做。', 'constance_proactive_unseen_help'], ['问这算重要吗', 4, '她说避免一次摔倒，不必等到有人流血才重要。']),
  ],
  severusSnape: [
    ev('snape_year1_proactive_b3_clean_ladle', 1, '斯内普教授把一只长柄勺放到你面前。「洗干净。不是冲一下。残留的药液不会因为你赶时间就变得无害。」', ['认真清洗', 5, '他检查后把长柄勺收回，没有讽刺。地下教室里，这已经接近认可。', 'snape_proactive_clean_ladle'], ['说看起来挺干净', 3, '他的目光冷得像石板，说眼睛若足够可靠，魔药课就不需要坩埚了。']),
    ev('snape_year1_proactive_b3_wrong_shelf', 2, '斯内普在储藏柜前叫住你。「这瓶不该在这里。告诉我它应该去哪一层。」', ['指出正确架子', 5, '他把瓶子放回原位，说至少你还没有把分类当成装饰。', 'snape_proactive_shelf_sort'], ['说不知道', 4, '他说不知道可以学，自信地乱放会害人。']),
    ev('snape_year1_proactive_b3_potter_detour', 2, '斯内普从阴影里出现，声音很低。「如果波特打算穿过三楼走廊，告诉他换一条路。不要添油加醋。」', ['照办', 5, '哈利虽然困惑，还是换了路线。斯内普远远看了一眼便离开，像这件事从未发生。', 'snape_proactive_potter_detour'], ['问为什么不自己说', 3, '他缓缓说，因为有些学生听见警告时，会先把它当挑战。']),
    ev('snape_year1_proactive_b3_burn_mark', 1, '斯内普抓起一张被烧焦边的羊皮纸。「谁的作业？」他看向你，「去问清楚。若是坩埚温度失控，我要在下一锅之前知道。」', ['帮他查清', 5, '你带回答案后，他立刻调整了下一组火候要求。冷硬的话背后，事故被提前拦住了。', 'snape_proactive_burn_mark'], ['说可能只是蜡烛', 3, '他说“可能”不能放进药剂里当材料。']),
    ev('snape_year1_proactive_b3_exact_word', 2, '斯内普把你的笔记推回来，指着一个词。「‘一些’？药剂学不使用这种软弱词。写出数量。」', ['改成具体数量', 5, '他冷冷点头，说精确不是美德，是活下去的最低条件。', 'snape_proactive_exact_quantity'], ['说课本也这么写', 3, '他眯起眼睛，说课本若让你停止思考，就只是昂贵的纸。']),
  ],
  minervaMcGonagall: [
    ev('mcgonagall_year1_proactive_b3_timetable_fold', 1, '麦格教授把一张折皱的课程表递给你。「请把它重新抄一份。不是为了好看，是为了你明天不再把魔咒课当成变形术。」', ['重新抄好', 5, '她检查后点头，说整洁有时能替混乱的脑子争取一点时间。', 'mcgonagall_proactive_timetable_copy'], ['说我记得住', 3, '她看了你一眼，说霍格沃茨专门惩罚这种自信。']),
    ev('mcgonagall_year1_proactive_b3_cat_pause', 2, '一只虎斑猫在走廊口停下，静静看了你一眼。下一秒，麦格教授恢复人形。「你刚才没有追猫。很好。」', ['说怕打扰它', 5, '她的嘴角几乎动了一下，说尊重边界是相当稀有的常识。', 'mcgonagall_proactive_cat_boundary'], ['问教授一直在看吗', 4, '她说教师不必一直出现，才能知道学生在做什么。']),
    ev('mcgonagall_year1_proactive_b3_neat_spell', 2, '麦格教授在空教室里叫住你，指着一只半变形的杯子。「它不是差一点成功。它是差一点被你放弃。再来。」', ['再试一次', 5, '杯子终于变得像该有的样子。麦格教授说，耐心不是温柔词，是技术要求。', 'mcgonagall_proactive_retry_cup'], ['说我做不到', 4, '她说你现在做不到，和永远做不到，是两件完全不同的事。']),
    ev('mcgonagall_year1_proactive_b3_house_fairness', 1, '麦格教授把两张扣分记录放在桌上。「同一件事，两个学院。请告诉我记录是否一致。」', ['帮她核对', 5, '你指出措辞差异。她立刻改正，说公正不该靠记忆维持。', 'mcgonagall_proactive_fair_records'], ['问为什么给我看', 4, '她说旁观者若认真，常能发现执行者习惯性的偏差。']),
    ev('mcgonagall_year1_proactive_b3_private_encouragement', 2, '麦格教授在下课后叫住你。「今天你没有成功，但你没有退到笑话后面躲起来。记住这一点。」', ['认真听下去', 5, '她没有多说，转身前补了一句：「下次带着这一点来上课。」', 'mcgonagall_proactive_failed_bravely'], ['说还是失败了', 4, '她说失败是事实，不是你的全名。']),
  ],
  albusDumbledore: [
    ev('dumbledore_year1_proactive_b3_sherbet_order', 1, '邓布利多在楼梯旁停下，像在等一个老朋友。「如果你经过厨房，能替我问问柠檬雪宝是否还能订到吗？有些问题适合交给年轻的脚步。」', ['替他去问', 5, '厨房热情得像接到重大任务。邓布利多听完后郑重道谢，仿佛你刚挽救了一项传统。', 'dumbledore_proactive_sherbet_order'], ['问为什么是我', 4, '他说因为你看起来还没有低估糖果在校务中的地位。']),
    ev('dumbledore_year1_proactive_b3_portrait_argument', 2, '邓布利多站在两幅争吵画像中间，向你眨眨眼。「你觉得帽子应该按羽毛大小分配，还是按头脑大小？」', ['帮他调停画像', 5, '画像们被你的答案带偏，争论变成了谁的头脑更适合羽毛。邓布利多看起来十分满意。', 'dumbledore_proactive_hat_argument'], ['说我不知道', 3, '他说不知道是很好的起点，尤其在帽子们已经知道太多的时候。']),
    ev('dumbledore_year1_proactive_b3_memory_drop', 2, '邓布利多捧着一个小玻璃瓶，里面有银色光丝。「别怕，它只是记忆。帮我拿一下门，好吗？记忆有时比老人更需要稳当。」', ['替他开门', 5, '他把瓶子安稳收好，向你点头，说谢谢你没有把好奇心伸得太快。', 'dumbledore_proactive_memory_vial'], ['问是什么记忆', 4, '他温和地说，有些记忆要等自己愿意被介绍。']),
    ev('dumbledore_year1_proactive_b3_lonely_table', 1, '邓布利多在礼堂边叫住你，目光落向一个独自吃饭的学生。「你若正好想换个座位，那里有一只空椅子。」', ['坐到那边', 5, '那名学生起初紧张，后来慢慢和你聊起南瓜馅饼。邓布利多没有看过来，但你知道他知道。', 'dumbledore_proactive_lonely_seat'], ['问您为什么不直接说', 4, '他说校长的邀请有时太重，一名同学的椅子轻得多。']),
    ev('dumbledore_year1_proactive_b3_wrong_turn', 1, '邓布利多在走廊尽头叫住你。「这条路不会去你想去的地方。不过，它也许会带你看见一扇很有趣的门。你今天赶时间吗？」', ['跟他看那扇门', 5, '那扇门后只是一间存放旧椅子的房间。邓布利多说，不是每个发现都要伟大，才值得走错路。', 'dumbledore_proactive_wrong_turn'], ['说我赶时间', 3, '他说那就下次再错路。好错路也需要礼貌预约。']),
  ],
  primroseSprout: [
    ev('primrose_year1_proactive_b3_seed_warmth', 1, '普里姆罗斯教授把一只小布袋放进你手心。「捂一会儿。种子太冷了，魔法不是每次都比体温合适。」', ['替她暖种子', 5, '布袋慢慢变暖。她笑着说，看，手也能是一间很小的温室。', 'primrose_proactive_seed_warmth'], ['问会发芽吗', 4, '她说还不会，别催它。活东西通常不喜欢被催着证明自己。']),
    ev('primrose_year1_proactive_b3_green_smudge', 1, '她拦住你，指了指你袖口的绿色痕迹。「别擦掉，先闻闻。知道是什么植物留下的，比立刻变干净更有用。」', ['仔细辨认气味', 5, '你闻出一点薄荷味。她点头，说衣服可以晚点洗，线索不等人。', 'primrose_proactive_green_smudge'], ['说我只想洗掉', 3, '她笑了，说这也是合理愿望，但先让它教完最后一句。']),
    ev('primrose_year1_proactive_b3_help_shy_student', 2, '普里姆罗斯教授看向温室角落。「那个孩子不敢碰花盆。你递给他一只空盆，别说太多。」', ['照她说做', 5, '对方接过空盆后，终于愿意靠近植物。普里姆罗斯轻声说，有时第一步要空一点，才放得下勇气。', 'primrose_proactive_empty_pot'], ['问为什么不用满盆', 4, '她说满盆太像任务，空盆比较像邀请。']),
    ev('primrose_year1_proactive_b3_rain_barrel', 1, '她在温室外叫住你，指着一只雨水桶。「帮我盖上。雨水很好，但太多好东西也会把根泡坏。」', ['帮她盖桶', 5, '桶盖合上，雨声轻轻敲着木板。她说照顾不是越多越好，是刚刚好最难。', 'primrose_proactive_rain_barrel'], ['问自来水不行吗', 3, '她说可以，但雨水有自己的脾气，植物们有时偏爱熟人。']),
    ev('primrose_year1_proactive_b3_leaf_gift', 2, '普里姆罗斯教授递给你一片压平的叶子。「夹进书里吧。它今天掉得很漂亮，不该直接进扫帚堆。」', ['收进书里', 5, '叶脉在纸页间铺开，像一张绿色小地图。她满意地点头。', 'primrose_proactive_leaf_gift'], ['问为什么给我', 4, '她说你刚才没有踩到它，这在走廊里已经算一种缘分。']),
  ],
  tavishMacLaren: [
    ev('tavish_year1_proactive_b3_quiet_bucket', 1, '麦克拉伦教授把一只空桶递给你。「拿着，别敲。空桶最喜欢把自己说得很响，动物最讨厌这个。」', ['安静拿桶', 5, '你一路没有让桶响。麦克拉伦点头，说很好，你今天比桶懂事。', 'tavish_proactive_quiet_bucket'], ['问为什么不用魔法', 3, '他说魔法会让人忘记手也该学规矩。']),
    ev('tavish_year1_proactive_b3_feather_track', 2, '他蹲在草地边，捡起一根弯折的羽毛。「看这里。不是掉毛，是撞过什么。跟我走两步。」', ['跟他查看踪迹', 5, '你们在篱笆旁找到一处擦痕。麦克拉伦说动物不会写报告，只能把事留在地上。', 'tavish_proactive_feather_track'], ['问是什么动物', 4, '他说先别急着命名，名字有时会让眼睛偷懒。']),
    ev('tavish_year1_proactive_b3_hagrid_message', 1, '麦克拉伦教授把一张纸条交给你。「若见到海格，告诉他那只小东西已经肯吃了。别让他一路跑过来，地面受不了。」', ['替他传话', 5, '海格听后笑得胡子都在抖，但真的没有冲过来。麦克拉伦后来显得很满意。', 'tavish_proactive_hagrid_message'], ['问是什么小东西', 3, '他说等它不再把每只手都当敌人时，你会知道。']),
    ev('tavish_year1_proactive_b3_fence_shadow', 2, '麦克拉伦在围栏旁叫住你。「站那儿，别动。你的影子挡住门口了，它们不敢出来。」', ['换个位置', 5, '你移开后，草丛里探出一个小脑袋。麦克拉伦低声说，许多恐惧只需要一小块光。', 'tavish_proactive_shadow_gate'], ['说我没碰它们', 4, '他说有时候存在本身就够大了，尤其对小东西而言。']),
    ev('tavish_year1_proactive_b3_bad_curiosity', 1, '他在禁林边缘拦住你，声音沉稳。「今天别往里看太久。好奇心如果学不会眨眼，很快就会学会跑。」', ['立刻后退', 5, '麦克拉伦点点头，说聪明不是不想知道，是知道什么时候先活着。', 'tavish_proactive_forest_look'], ['问里面有什么', 3, '他说正是这句话，最容易让学生把脚放错地方。']),
  ],
  herbertBinns: [
    ev('binns_year1_proactive_b3_missing_date', 1, '宾斯教授从黑板前飘到你桌边，声音毫无波澜。「你的笔记少了日期。没有日期的事件很快会变成传说，然后变成错误。」', ['补上日期', 5, '他似乎没有表情，却停留到你写完才飘走。', 'binns_proactive_missing_date'], ['问日期这么重要吗', 3, '他说没有日期，人类会把所有麻烦都放到“很久以前”。']),
    ev('binns_year1_proactive_b3_ghost_chalk', 1, '一截粉笔从黑板边缓缓飘到你面前。宾斯教授说：「递给第二排。它已经习惯穿过桌子，但不习惯被忽略。」', ['递给第二排', 5, '粉笔冰凉得像旧石头。第二排学生接过时，宾斯教授已经继续讲到下一场叛乱。', 'binns_proactive_ghost_chalk'], ['盯着粉笔看', 3, '宾斯教授提醒你，粉笔的存在状态不在本节考试范围内。']),
    ev('binns_year1_proactive_b3_wrong_rebellion', 2, '宾斯教授停在你旁边。「你把两次妖精叛乱混在一起了。许多学生也会这么做。许多学生已经死了。」', ['请他区分两次', 5, '他用同样平板的声音讲了五分钟，差异竟然清楚得可怕。', 'binns_proactive_rebellion_difference'], ['说它们太像了', 3, '他说战争相似，不代表死者可以互换。']),
    ev('binns_year1_proactive_b3_unasked_question', 2, '下课后，宾斯教授没有立刻穿墙离开。「你在第三段时想问问题。现在问。」', ['把问题问出来', 5, '他回答得很长，长到教室里只剩你们两个和一块安静黑板。', 'binns_proactive_delayed_question'], ['说已经不重要了', 3, '他说许多问题正是这样被埋葬的。']),
    ev('binns_year1_proactive_b3_old_ink', 1, '宾斯教授指向讲台上一瓶干涸墨水。「把它拿给我。不要摇。某些沉淀物比在场学生更有历史。」', ['小心拿给他', 5, '他看了一眼瓶底，说这是上一任教师留下的。然后像什么也没发生一样继续讲课。', 'binns_proactive_old_ink'], ['问还能用吗', 4, '他说使用价值不是历史价值的全部。']),
  ],
  felixWeasley: [
    ev('felix_year1_proactive_b3_sugar_quill', 1, '菲利克斯·韦斯莱从口袋里摸出一支糖羽毛笔。「拿着，备用。不是贿赂，是防止下午课前士气塌方。」', ['收下糖羽毛笔', 5, '糖味很淡。他笑着说，甜东西若太甜，就会失去教育意义。', 'felix_proactive_sugar_quill'], ['问您总带这些吗', 4, '他说韦斯莱的口袋如果不能救急，就只是布料浪费。']),
    ev('felix_year1_proactive_b3_twin_damage', 2, '菲利克斯指着墙上一片闪粉，叹了口气。「告诉我，这像弗雷德，像乔治，还是像他们共同逃跑后的成果？」', ['帮他判断', 5, '你指出闪粉边缘的纸屑。他点头，说乔治善后时会更干净些。', 'felix_proactive_twin_trace'], ['说都像', 3, '他大笑，说这是最安全也最没用的答案。']),
    ev('felix_year1_proactive_b3_family_warmth', 1, '菲利克斯在礼堂边叫住你。「罗恩今天看起来像被锅盖扣过。你若坐他旁边，别问太多，先递土豆。」', ['照他说做', 5, '罗恩接过土豆后果然慢慢恢复。菲利克斯远远冲你眨眼。', 'felix_proactive_ron_potato'], ['问发生什么了', 3, '他说在韦斯莱家，有时原因不如一盘热食管用。']),
    ev('felix_year1_proactive_b3_small_repair', 2, '他拿着一只松掉的书包扣来找你。「帮我按住这边。修东西时，第三只手比高深咒语更稀有。」', ['帮他按住', 5, '扣子修好了。他甩了甩书包，说看，世界又少了一场小灾难。', 'felix_proactive_bag_clasp'], ['问为什么亲自修', 4, '他说能修就修，别让小坏事太早学会扩大。']),
    ev('felix_year1_proactive_b3_kind_laugh', 2, '菲利克斯在走廊里拦住你，声音轻了些。「刚才那个孩子摔倒，大家笑得太快了。你能不能帮我把他的书送回去？」', ['送书回去', 5, '那孩子接过书时脸色好了很多。菲利克斯说笑声过去以后，留下来的事才算数。', 'felix_proactive_after_laugh'], ['说您自己送吧', 3, '他说我送会让场面更大，你送刚好。']),
  ],
  mirandaPercival: [
    ev('miranda_year1_proactive_b3_cloud_gap', 1, '米兰达·珀西瓦尔在塔楼边叫住你。「云层会在几分钟后开一道缝。你愿意替我守着吗？星星很少配合人类时间表。」', ['帮她守着天空', 5, '云缝果然打开，星光短短露出一瞬。她说看见了吗，等待没有白费。', 'miranda_proactive_cloud_gap'], ['说我怕错过', 4, '她说错过也是观测的一部分，只要你知道自己在等什么。']),
    ev('miranda_year1_proactive_b3_cold_hands', 1, '她把一副手套递给你。「给那边记星图的孩子。他写得太认真，忘了手指也属于身体。」', ['送去手套', 5, '那名学生戴上后继续写。米兰达轻声说，热情需要手指帮忙。', 'miranda_proactive_cold_hands'], ['问为什么不让他休息', 3, '她说先让他暖起来，再谈停止。']),
    ev('miranda_year1_proactive_b3_star_name_story', 2, '米兰达指着星图上一串名字。「选一个你觉得最难念的。我告诉你它为什么被记住。」', ['选一个星名', 5, '她讲起古老航路和迷路的人，那个拗口名字忽然不再像死记硬背。', 'miranda_proactive_star_story'], ['说都难', 3, '她点头，说宇宙在命名上从不体谅一年级。']),
    ev('miranda_year1_proactive_b3_lens_cap', 1, '米兰达教授递给你一个镜头盖。「帮我找出是哪架望远镜的。别硬塞，星星不喜欢通过受伤的工具被看见。」', ['逐架试找', 5, '镜头盖终于合上。她满意地说，照顾工具也是照顾远方。', 'miranda_proactive_lens_cap'], ['问盖错会怎样', 4, '她说工具会沉默，但沉默不代表不疼。']),
    ev('miranda_year1_proactive_b3_night_fear', 2, '她在天文塔楼梯边等你。「有个学生怕黑，却不想承认。你走在他后面，不要说破。」', ['照她安排', 5, '那名学生一路没有回头，却走得稳了些。米兰达在塔顶轻轻点头。', 'miranda_proactive_dark_stairs'], ['问为什么不点灯', 3, '她说灯可以点，尊严也要留。']),
  ],
  filiusFlitwick: [
    ev('flitwick_year1_proactive_b3_charm_echo', 1, '弗立维教授站在书堆上向你招手。「来，听听这个回声咒。它刚才把我的尾音学得太热情了。」', ['帮他听回声', 5, '回声果然多重复了一次。弗立维高兴地说，连错误都很有节奏感。', 'flitwick_proactive_echo_charm'], ['问这是失败吗', 4, '他说是小小的失败，也是很好的发现。']),
    ev('flitwick_year1_proactive_b3_tiny_medal', 1, '他递给你一枚小小银章。「交给那位刚成功漂浮羽毛的学生。别太隆重，隆重会把胆小的胜利吓回去。」', ['替他送去', 5, '那名学生接过银章，笑得像羽毛还在空中。弗立维远远鼓了鼓掌。', 'flitwick_proactive_tiny_medal'], ['问为什么不亲自给', 3, '他说我会给，但先让同学的认可轻轻落下。']),
    ev('flitwick_year1_proactive_b3_squeaky_cup', 2, '弗立维教授把一只吱吱叫的茶杯放到你面前。「它被咒语弄得太兴奋了。你能帮我数它每隔几秒叫一次吗？」', ['帮他计时', 5, '你们数出规律。弗立维满意地说，连茶杯闹脾气也可以很有条理。', 'flitwick_proactive_squeaky_cup'], ['说茶杯好吵', 3, '他说是啊，所以我们要用科学把它变得有礼貌。']),
    ev('flitwick_year1_proactive_b3_duel_bow', 2, '弗立维教授在决斗练习前叫住你。「帮我示范鞠躬。不是装饰，是提醒对手：我们在练习，不是在结仇。」', ['认真示范', 5, '他满意地点头，随后全班的动作都端正了些。', 'flitwick_proactive_duel_bow'], ['问真的重要吗', 4, '他说礼节有时是最早生效的保护咒。']),
    ev('flitwick_year1_proactive_b3_wand_spark', 1, '他看见你魔杖尖冒出一点火花，立刻小跑过来。「别慌，别甩。把手放低，对，就是这样。」', ['照他说做', 5, '火花很快熄灭。弗立维松了口气，说恐慌比火花更容易蔓延。', 'flitwick_proactive_wand_spark'], ['问是不是坏了', 3, '他说未必，也许只是你的魔杖今天比你更想发言。']),
  ],
  pomonaSprout: [
    ev('pomona_year1_proactive_b3_root_tangle', 1, '波莫纳·斯普劳特教授把一盆根系缠住的植物推给你。「帮我托着叶子。别拉，根不喜欢粗鲁的热心。」', ['帮她托住叶子', 5, '她慢慢理开根须，说很多麻烦不能靠力气，只能靠耐心松开。', 'pomona_proactive_root_tangle'], ['问会疼吗', 4, '她说植物不会用你的方式喊疼，但这不代表它没感觉。']),
    ev('pomona_year1_proactive_b3_greenhouse_sweep', 1, '斯普劳特教授递给你一把小扫帚。「把这边泥扫回花床。泥土离家太远，也会让地板不高兴。」', ['帮她扫泥', 5, '泥土回到花床边，她笑得很满意，说清理也是草药学的一半。', 'pomona_proactive_sweep_soil'], ['说地板会高兴吗', 3, '她说至少费尔奇会，这已经足够接近奇迹。']),
    ev('pomona_year1_proactive_b3_mandrake_label', 2, '她把一张空标签递给你。「写‘未成熟曼德拉草’，字要大。小字会让自信的学生犯大错。」', ['认真写标签', 5, '标签插好后，斯普劳特教授点头，说清楚的字有时比大声警告更管用。', 'pomona_proactive_mandrake_label'], ['问会有人看错吗', 4, '她说亲爱的，霍格沃茨每天都在回答这个问题。']),
    ev('pomona_year1_proactive_b3_tea_leaf', 1, '斯普劳特教授把一片香叶放进你手心。「带给特里劳妮教授。告诉她这是叶子，不是预兆，除非她坚持。」', ['替她送去', 5, '特里劳妮教授坚持它“略带命运”。斯普劳特教授听后笑得肩膀都在动。', 'pomona_proactive_leaf_to_trelawney'], ['问她们常这样吗', 3, '她说教授们也需要一点无害的争论来保持叶绿素。']),
    ev('pomona_year1_proactive_b3_student_pride', 2, '她指向一个满手泥的学生。「去告诉他，手脏得很好。别笑，他需要知道这不是失败。」', ['转告那名学生', 5, '对方低头看了看自己的手，笑了。斯普劳特教授满意地继续修枝。', 'pomona_proactive_good_mud'], ['问手脏也算好吗', 4, '她说在温室里，干净有时只说明你没真正开始。']),
  ],
  rolandaHooch: [
    ev('hooch_year1_proactive_b3_broom_splinter', 1, '霍琦夫人把一把扫帚递给你。「摸这里。慢点。木刺不大，但飞起来以后，小问题会长牙。」', ['小心摸到木刺', 5, '她立刻把扫帚收走，说很好，地面上发现的问题最便宜。', 'hooch_proactive_splinter_check'], ['问还能飞吗', 3, '她说能飞和该飞之间隔着医疗翼。']),
    ev('hooch_year1_proactive_b3_whistle_signal', 1, '她吹了一短一长两声哨，转头问你：「什么意思？」', ['回答停下并看向我', 5, '霍琦夫人点头，说听懂哨声的人，比飞得快的人更少摔下来。', 'hooch_proactive_whistle_signal'], ['说不知道', 4, '她说那就现在学。天空不会等你读说明书。']),
    ev('hooch_year1_proactive_b3_wind_warning', 2, '霍琦夫人在球场边叫住你，指向远处草尖。「告诉那几个孩子，今天别贴塔飞。侧风会把自信吹成事故。」', ['替她警告他们', 5, '几个学生虽然失望，还是退回安全范围。霍琦夫人满意地压了压手套。', 'hooch_proactive_sidewind_warning'], ['问风有这么大吗', 3, '她说风最擅长让地面上的人低估它。']),
    ev('hooch_year1_proactive_b3_fallen_broom', 1, '她把一把掉在地上的扫帚扶起来，皱眉看向你。「看见扫帚倒了就扶。工具被怎样对待，常预告学生会怎样飞。」', ['帮她扶好扫帚', 5, '扫帚排回架上。霍琦夫人说整齐不是漂亮，是准备好。', 'hooch_proactive_broom_respect'], ['说只是扫帚', 3, '她瞥你一眼，说每个摔下来的人起飞前也这么想过。']),
    ev('hooch_year1_proactive_b3_nervous_flyer', 2, '霍琦夫人指向一个紧抓扫帚的学生。「去和他说，先别飞高。飞低不是丢脸，是学会回来。」', ['替她转告', 5, '那学生照做后稳了许多。霍琦夫人说很好，胆量终于长了脑子。', 'hooch_proactive_low_flight'], ['问为什么不鼓励他高飞', 4, '她说鼓励不是把人推上去，是让他知道怎么下来。']),
  ],
  sybillTrelawney: [
    ev('trelawney_year1_proactive_b3_curtain_tangle', 1, '特里劳妮教授被一串珠帘缠住袖子，庄重地向你伸手。「命运暂时抓住了我。孩子，帮我温柔地劝它放手。」', ['帮她解开珠帘', 5, '珠帘松开后，她长舒一口气，说你对命运有罕见的手法。', 'trelawney_proactive_curtain_free'], ['说只是珠帘', 3, '她凝重地看你，说许多预兆一开始都假装自己只是珠帘。']),
    ev('trelawney_year1_proactive_b3_dream_note', 2, '她拿着一本梦境记录本叫住你。「你昨夜若梦见水、门或非常固执的萝卜，请立刻告诉我。」', ['说没有萝卜', 5, '她似乎松了一口气，又略显失望，说那至少说明命运今天保持了体面。', 'trelawney_proactive_dream_note'], ['问萝卜代表什么', 3, '她压低声音说，通常代表晚餐，偶尔代表更深的晚餐。']),
    ev('trelawney_year1_proactive_b3_teacup_return', 1, '特里劳妮教授把一只茶杯递给你。「把它还给厨房。告诉他们杯底的形状非常有启示性，但它仍然需要清洗。」', ['替她还茶杯', 5, '厨房听完后没有太惊讶。特里劳妮后来宣布杯子的旅程已圆满闭合。', 'trelawney_proactive_teacup_return'], ['问为什么不自己还', 3, '她说杯子刚经历灵视，需要一位较年轻的护送者。']),
    ev('trelawney_year1_proactive_b3_student_fright', 2, '她在楼梯边叫住你，神情有点担忧。「那个孩子把我的‘阴影临近’理解得太严重了。你能告诉他，我说的也可能只是下午有云吗？」', ['替她解释', 5, '那孩子脸色好了一些。特里劳妮远远按住胸口，像解开了一个小小的结。', 'trelawney_proactive_cloud_shadow'], ['问您为什么不说清楚', 4, '她低声说，内眼有时忘了外耳需要普通话。']),
    ev('trelawney_year1_proactive_b3_crystal_dust', 1, '特里劳妮教授递给你一块绒布。「帮我擦水晶球。轻一点，尘埃也可能带着宇宙消息。」', ['轻轻擦拭', 5, '水晶球亮起来，映出北塔柔软的光。她满意地说宇宙今天终于不那么模糊。', 'trelawney_proactive_crystal_clean'], ['问会不会擦掉预兆', 3, '她停顿片刻，说真正的预兆不会怕一点家务。']),
  ],
  remusLupin: [
    ev('lupin_year1_proactive_b3_old_book', 1, '卢平教授拿着一本封皮松动的旧书叫住你。「帮我按住这里。我想修好它，至少让它撑过下一次被学生塞进书包。」', ['帮他按住封皮', 5, '书被细心粘好。卢平说旧东西有时只需要有人相信它还能继续。', 'lupin_proactive_old_book'], ['问为什么不换新书', 3, '他笑了笑，说新书当然好，但这本已经知道很多学生的脾气。']),
    ev('lupin_year1_proactive_b3_fear_list', 2, '卢平教授递给你一张空纸。「如果你愿意，写下三样害怕的东西。不给我看也可以，只是先把它们从脑子里请出来。」', ['写下三样东西', 5, '他没有偷看，只把纸折好递回给你，说能被折起来的恐惧，已经小了一点。', 'lupin_proactive_fear_list'], ['说我不想写', 4, '他点头，说不写也可以。门知道自己在那儿就好，不必今天打开。']),
    ev('lupin_year1_proactive_b3_harry_normal', 2, '卢平教授在走廊边低声叫住你。「如果你去找哈利，问他魁地奇，不要问伤疤。今天他需要一个普通问题。」', ['照他说做', 5, '哈利聊起飞行时眼神亮了起来。卢平远远看着，神情温和而安静。', 'lupin_proactive_harry_normal_question'], ['问您为什么提醒我', 4, '他说有些孩子被特殊看得太久，会忘了普通也是礼物。']),
    ev('lupin_year1_proactive_b3_chocolate_stock', 1, '卢平教授从口袋里摸出两块巧克力，递给你一块。「帮我确认它没有被压碎。防御术教师的口袋需要可靠后勤。」', ['帮他检查巧克力', 5, '巧克力只碎了一角。卢平说很好，碎掉的部分正适合立即处理。', 'lupin_proactive_chocolate_stock'], ['问为什么总带巧克力', 4, '他说因为许多可怕的事结束后，人需要一点简单而确定的东西。']),
    ev('lupin_year1_proactive_b3_tired_smile', 2, '卢平教授在窗边叫住你，脸色有些苍白。「你刚才帮那个学生捡书了。谢谢你。小善意常比咒语更安静，也更持久。」', ['说只是顺手', 5, '他笑了笑，说许多重要的事都被人叫作顺手。', 'lupin_proactive_small_kindness'], ['问您还好吗', 4, '他说会好的。那句话很轻，却不像敷衍。']),
  ],
  siriusBlack: [
    ev('sirius_year1_proactive_b3_bad_corridor', 1, '小天狼星在走廊口拦住你，笑得懒散。「别走那边。费尔奇心情坏得像湿袜子。除非你今天特别想听拖把训话。」', ['听他的绕路', 5, '你们绕过一条窄楼梯，小天狼星说聪明的冒险知道什么时候不撞上拖把。', 'sirius_proactive_filch_detour'], ['问你怎么知道', 4, '他说有些人的坏心情隔着两层楼都能闻见。']),
    ev('sirius_year1_proactive_b3_harry_letter', 2, '小天狼星把一张没写完的纸折起来，忽然问你：「给一个孩子写信，怎样才不像在命令他活得开心？」', ['帮他想一句', 5, '他听完后沉默了一会儿，把那句话写下，笔迹比平时慢得多。', 'sirius_proactive_harry_letter'], ['说直接写想他', 4, '他笑了一下，说直接有时比闯禁林还需要胆子。']),
    ev('sirius_year1_proactive_b3_old_prank_mark', 1, '小天狼星指着墙上一道几乎看不出的划痕。「看见没？年轻时留下的。别问细节，细节会让麦格教授从空气里出现。」', ['听他讲一点', 5, '他只讲了开头，就笑着打住。那笑里有得意，也有一点很久以前的风。', 'sirius_proactive_old_mark'], ['提醒别教坏学生', 3, '他说学生不需要他教也会坏，他只是负责让故事更有品味。']),
    ev('sirius_year1_proactive_b3_dog_guard', 2, '一只大黑狗在院子边拦住你，轻轻咬住你的袍角往回拽。片刻后，小天狼星恢复人形。「那边有东西。不适合一年级。」', ['听话退回去', 5, '他拍了拍袍子上的草，语气轻松，眼神却一直留意着远处。', 'sirius_proactive_dog_guard'], ['问是什么东西', 4, '他说你现在需要知道的部分是：它不值得你今晚去认识。']),
    ev('sirius_year1_proactive_b3_free_window', 1, '小天狼星坐在高窗边，向你招手。「上来看看。不是要跳，只是有时候人需要知道窗外还在。」', ['爬上去看一眼', 5, '夜风吹进来，他安静了一会儿，说自由有时只是一口没有被允许之前就吸到的空气。', 'sirius_proactive_free_window'], ['说这不安全', 3, '他说完全安全的窗户只能看见墙。']),
  ],
  auroraSinistra: [
    ev('sinistra_year1_proactive_b3_red_star', 1, '辛尼斯塔教授在天文塔叫住你，指向望远镜。「看那颗偏红的星。不要急着记名字，先记住颜色。」', ['认真观察颜色', 5, '红色在视野里慢慢稳定。辛尼斯塔说名字会来，观察必须先到。', 'sinistra_proactive_red_star'], ['说它很小', 3, '她说远方常被误认为渺小，这是地面上的偏见。']),
    ev('sinistra_year1_proactive_b3_chart_weight', 1, '她把一角星图递给你。「按住。夜风今晚很有意见，星图不必跟着参与争论。」', ['帮她按住星图', 5, '星图终于平稳。辛尼斯塔快速标注完位置，向你点了点头。', 'sinistra_proactive_chart_hold'], ['问为什么不用镇纸', 4, '她说镇纸在桌上，学生在这里。两者都该发挥作用。']),
    ev('sinistra_year1_proactive_b3_wrong_constellation', 2, '辛尼斯塔教授停在你身边。「你把那组星认错了。别急着擦掉，先告诉我你为什么会认错。」', ['解释判断过程', 5, '她听完后指出偏差，说错误若被看清，也是一种地图。', 'sinistra_proactive_misread_reason'], ['直接改正', 3, '她阻止你，说改正太快，会让同一个错误下次换衣服回来。']),
    ev('sinistra_year1_proactive_b3_late_descent', 2, '夜课后，辛尼斯塔教授把一盏小灯交给你。「带着它下楼。塔楼的台阶不会因为你年轻就变得更宽。」', ['接过小灯', 5, '灯光稳稳照着楼梯。她在塔顶看着你走下第一段，才转身收望远镜。', 'sinistra_proactive_stair_lamp'], ['说我看得见', 3, '她说夜晚最擅长让人过分相信眼睛。']),
    ev('sinistra_year1_proactive_b3_silent_sky', 1, '辛尼斯塔教授在栏杆旁叫住你。「今晚先别说话。看十息天空，然后再决定你有没有问题。」', ['安静看天空', 5, '十息之后，问题少了，星星多了。辛尼斯塔轻声说，这就是观测课的第一步。', 'sinistra_proactive_ten_breaths'], ['说我已经有问题', 4, '她点头，说很好，让问题也先看一会儿天。']),
  ],
};

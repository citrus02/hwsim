/**
 * year1-staff-proactive-batch-2.js
 * 一年级教职工主动来找玩家加厚包（二）。
 * 每名教职工 5 条。成年人主动找学生必须有职责、观察、委托或性格驱动。
 */

const ev = (id, minTier, opening, first, second, aiSeed = '') => ({
  id,
  require: { minTier, cooldownDays: 12, chance: 0.14, minGrade: 1, maxGrade: 1 },
  opening,
  choices: [
    { label: first[0], delta: first[1], response: first[2], ...(first[3] ? { addMemory: first[3] } : {}) },
    { label: second[0], delta: second[1], response: second[2], ...(second[3] ? { addMemory: second[3] } : {}) },
  ],
  aiSeed,
});

export const YEAR1_STAFF_PROACTIVE_BATCH_2 = {
  augustusFenwick: [
    ev('fenwick_year1_proactive_b2_wrong_sum', 1, '芬威克教授在课后把你的羊皮纸推回来，指尖点着一行数字。「不是答案错了，是你在正确之前跳得太快。把中间那一步补上。」', ['补上推导', 5, '他看完只说“可以”，但把纸放回你面前时动作很轻。', 'fenwick_proactive_middle_step'], ['问这也算错误吗', 4, '他说算。无法复查的正确，比错误更危险。']),
    ev('fenwick_year1_proactive_b2_abacus', 1, '他把一只旧算盘放到桌上。「麻瓜用它算数。巫师常把没见过的工具当落后，这是一种懒惰。」', ['听他演示', 5, '珠子清脆地移动，他说声音也能帮助思考，前提是你肯听。', 'fenwick_proactive_abacus'], ['问它比魔法好吗', 3, '他说好坏不是问题，能否让你知道自己在做什么才是。']),
    ev('fenwick_year1_proactive_b2_group_quiet', 2, '芬威克教授在走廊里叫住你，指向教室里一个沉默的学生。「下次小组讨论时，先问他一句。聪明学生不一定发出最大声音。」', ['照做', 5, '那个学生终于说出一个关键思路。芬威克远远点头，像这才是他想看的答案。', 'fenwick_proactive_quiet_student'], ['问为什么是我', 4, '他说同龄人的邀请，有时比教师的命令更少重量。']),
    ev('fenwick_year1_proactive_b2_chalk_box', 1, '他递给你一盒粉笔。「放到第二间教室。不要摔。粉笔断了仍能写，但有些人会因此更急躁。」', ['小心送去', 5, '粉笔完整送到。他说工具被尊重时，使用工具的人也更容易尊重问题。', 'fenwick_proactive_chalk_box'], ['问为什么不施咒', 3, '他说因为你有手，而且这正好是一段路。']),
    ev('fenwick_year1_proactive_b2_window_measure', 2, '芬威克教授在窗边等你，手里拿着卷尺。「这扇窗每天午后投影不同。你愿意帮我记三天吗？别急着问用途。」', ['答应记录', 5, '他把表格交给你，说耐心是许多答案进入房间前先敲的门。', 'fenwick_proactive_window_measure'], ['问用途', 4, '他说到第三天你也许会自己看见。']),
  ],
  serafinaMoody: [
    ev('serafina_year1_proactive_b2_spark_distance', 1, '塞拉菲娜教授把一副护目镜塞给你。「站这条线外。等会儿如果有火花，你负责告诉我颜色，不负责尖叫。」', ['认真观察颜色', 5, '火花是绿蓝色。她立刻记下，说恐惧如果能睁眼，就会变成数据。', 'serafina_proactive_spark_color'], ['问真的会有火花？', 3, '她咧嘴一笑，说没有火花的实验像没脾气的茶。']),
    ev('serafina_year1_proactive_b2_broken_switch', 1, '她在走廊里拦住你，手里拿着一个坏掉的开关。「按一下。轻点。它已经够丢脸了。」', ['按下开关', 5, '开关发出轻响。她满意地说，麻瓜机器最诚实的地方就是坏了会承认。', 'serafina_proactive_switch'], ['问会不会电到我', 4, '她说所以才叫你轻点，也所以她站在旁边。']),
    ev('serafina_year1_proactive_b2_tool_names', 2, '塞拉菲娜把一排工具摆到你面前。「说出三个名字。别怕错，怕错的人最容易把螺丝刀当餐具。」', ['试着认工具', 5, '你认对两个。她说足够开始，不足够自满。', 'serafina_proactive_tool_names'], ['承认不会', 4, '她说很好，诚实是第一件防护装备。']),
    ev('serafina_year1_proactive_b2_loud_bang', 2, '实验室里响过一声巨响后，塞拉菲娜反而叫住你。「刚才谁先后退了？不是要扣分，我想知道谁有生存本能。」', ['告诉她观察', 5, '她点头，说下次就让那个孩子站安全提醒位。胆小有时是岗位优势。', 'serafina_proactive_bang_observe'], ['说没看清', 3, '她说没看清也比乱编强。现在你可以帮忙开窗。']),
    ev('serafina_year1_proactive_b2_battery_warm', 1, '她把一节电池放在你掌心，很快又拿走。「温热，对吧？记住，麻瓜东西不发光不代表它没在工作。」', ['记下感觉', 5, '她说很多危险都很安静，学会尊重安静比学会躲爆炸更早。', 'serafina_proactive_battery_warm'], ['说有点神奇', 4, '她笑了，说别让麻瓜听见，他们会得意。']),
  ],
  elizaLovegood: [
    ev('eliza_year1_proactive_b2_sentence_breath', 1, '伊莱莎教授在窗边叫住你，递来一页散文。「读到逗号时停一下。句子如果没有呼吸，就会把读者拖着跑。」', ['按她说读', 5, '她闭眼听完，说很好，你让那句话自己走完了路。', 'eliza_proactive_sentence_breath'], ['问为什么找我读', 4, '她说因为今天你的脚步听起来需要慢一点。']),
    ev('eliza_year1_proactive_b2_found_metaphor', 1, '她把一片落叶夹进书里，微笑着说：「有人把它丢在诗集里。你觉得这是书签，还是一个没写完的比喻？」', ['说是比喻', 5, '她笑了，说那就让它先在书里待着，等主人回来继续写。', 'eliza_proactive_leaf_metaphor'], ['说只是书签', 3, '她点头，说“只是”有时也很温柔。']),
    ev('eliza_year1_proactive_b2_student_voice', 2, '伊莱莎把一篇匿名作文递给你。「这孩子太想写得漂亮了。你能找出哪一句最像他自己吗？」', ['指出一句朴素的话', 5, '她把那句圈起来，说文章常在忘记表演时露出心跳。', 'eliza_proactive_student_voice'], ['说都挺漂亮', 3, '她轻轻摇头，说漂亮如果太满，真实就没有地方坐下。']),
    ev('eliza_year1_proactive_b2_luna_note', 2, '伊莱莎教授拿着一张画着奇怪生物的小纸条。「卢娜把它留给我。你觉得它像在飞，还是像在听？」', ['说像在听', 5, '她眼睛一亮，说是啊，有些翅膀长出来不是为了远离，而是为了接近声音。', 'eliza_proactive_luna_note'], ['说像在飞', 4, '她点头，说飞也是一种听，天空只是更大的耳朵。']),
    ev('eliza_year1_proactive_b2_quiet_title', 1, '她在图书馆轻声叫住你。「帮我给这首短诗选题。不要宏大，宏大的题目常把小诗压矮。」', ['选一个小题目', 5, '她满意地写下，说小题目有时更敢靠近真相。', 'eliza_proactive_small_title'], ['说我不会取题', 3, '她说不会也很好，题目本来就不该比诗更急。']),
  ],
  constanceShacklebolt: [
    ev('constance_year1_proactive_b2_corridor_watch', 1, '康斯坦丝教授在走廊边叫住你，目光没有离开人群。「站我旁边一分钟。告诉我谁在躲谁，别告诉我谁看起来可疑。」', ['认真观察', 5, '你说出一个细节，她点头，说恐惧常比罪恶先露面。', 'constance_proactive_corridor_watch'], ['问区别在哪', 4, '她说看错区别，可能会把需要帮助的人当成麻烦。']),
    ev('constance_year1_proactive_b2_sealed_note', 2, '她把一封封好的便条递给你。「送到麦格教授办公室。路上如果有人问内容，你只需要说不知道。」', ['立刻送去', 5, '你送到时封口完好。康斯坦丝后来只说了一句“做得稳”。', 'constance_proactive_sealed_note'], ['问为什么让我送', 4, '她说因为你问之前先看了封口，这说明你知道边界在哪里。']),
    ev('constance_year1_proactive_b2_false_alarm', 1, '康斯坦丝教授拦住你，声音很低。「刚才有人说看见黑影。你陪我走一段，记住你看见的，不要急着解释。」', ['陪她巡查', 5, '最后只是帷幔。她说虚惊一场仍然要认真，因为下次也许不是。', 'constance_proactive_false_alarm'], ['说可能没事', 3, '她说可能没事不是结论，只是一个需要检查的开头。']),
    ev('constance_year1_proactive_b2_kind_intervention', 2, '她看向两个争吵的学生，忽然对你说：「你先过去问他们有没有受伤。别问谁对谁错。」', ['照做', 5, '两个人的声音都低下来。康斯坦丝这才走近，像一把刀先收进鞘里。', 'constance_proactive_injury_first'], ['问为什么先问受伤', 4, '她说身体比面子诚实，先照看诚实的部分。']),
    ev('constance_year1_proactive_b2_family_silence', 2, '康斯坦丝在楼梯口停住，像随口一问：「如果家里有人习惯不说害怕，你会怎么知道？」', ['说看行动', 5, '她看了你一眼，说不错。沉默的人常把情绪藏在选择里。', 'constance_proactive_silence_action'], ['说直接问', 3, '她说可以，但不是所有人都会把门开给直接。']),
  ],
  severusSnape: [
    ev('snape_year1_proactive_b2_label_sloppy', 1, '斯内普教授把一只药瓶放到你面前，声音像冷水。「标签歪了。药剂不会因为你的字迹可怜就降低毒性。」', ['重新贴好标签', 5, '他检查后没有再讽刺，这在魔药课里几乎算表扬。', 'snape_proactive_label_fix'], ['说只是标签', 3, '他的眼神冷下来，说“只是”是事故最喜欢的开头。']),
    ev('snape_year1_proactive_b2_ingredient_smell', 2, '他在储藏柜前叫住你。「闻一下。告诉我这是不是月长石粉。不要把鼻子伸进去，除非你想证明自己没有自保能力。」', ['谨慎辨认', 5, '你答对了。他合上瓶盖，说至少你的嗅觉还没有被冲动毁掉。', 'snape_proactive_smell_identify'], ['说不确定', 4, '他说不确定比自信地错强，现在记住这个气味。']),
    ev('snape_year1_proactive_b2_potter_shadow', 2, '斯内普在走廊阴影里叫住你，目光掠过远处的哈利。「波特又被一群人围住。去把他带走，免得走廊继续堵塞。」', ['去替哈利解围', 5, '你带哈利离开时，斯内普已经转身。他的袍角像一句没有说完的命令。', 'snape_proactive_harry_crowd'], ['问您是在关心他吗', 3, '他缓慢地看向你，说你的想象力已经到了危险程度。']),
    ev('snape_year1_proactive_b2_failed_brew', 1, '斯内普把一锅失败药剂推近些。「看。它没有爆炸，不代表你成功了。说出第一处错误。」', ['认真分析', 5, '你指出火候。他冷冷说迟来的观察仍有价值，前提是下次来得早。', 'snape_proactive_failed_brew'], ['说看不出来', 3, '他说至少诚实没有继续污染坩埚。然后从第一步讲起。']),
    ev('snape_year1_proactive_b2_silence_order', 2, '他在课堂前经过你身边，低声说：「今天别让后排那两个人交头接耳。提醒一次就够，第二次我会处理。」', ['替他提醒', 5, '后排果然安静许多。斯内普没有看你，却把一只干净量匙放到你桌边。', 'snape_proactive_back_row'], ['问为什么是我', 4, '他说因为你坐得近，而我不打算为显而易见的事浪费嗓音。']),
  ],
  minervaMcGonagall: [
    ev('mcgonagall_year1_proactive_b2_cloak_button', 1, '麦格教授在走廊里叫住你，目光落在你的斗篷扣子上。「扣好。霍格沃茨允许惊奇，不允许邋遢成为习惯。」', ['立刻扣好', 5, '她点头，神情仍严肃，但声音缓了一点。', 'mcgonagall_proactive_button'], ['说刚才太急', 3, '她说急迫不是放弃体面的理由，只是更需要练习。']),
    ev('mcgonagall_year1_proactive_b2_transfiguration_patience', 2, '她把一根弯掉的火柴放到你桌上。「它没有失败，只是被你催得变形到一半。再试一次，慢一点。」', ['重新尝试', 5, '火柴这次更像针。麦格教授说，控制不是用力，是听见变化何时已经足够。', 'mcgonagall_proactive_match_patience'], ['说我怕又错', 4, '她说害怕错误可以理解，停在错误前不动才可惜。']),
    ev('mcgonagall_year1_proactive_b2_house_points', 1, '麦格教授叫住你，递来一张记录纸。「帮我核对这几项加分。学院荣誉不是账目游戏，但账目不能错。」', ['帮她核对', 5, '你找出一处重复记录。她迅速改正，说公平有时就藏在一行小数目里。', 'mcgonagall_proactive_points_check'], ['问教授也会算错吗', 3, '她看了你一眼，说正因如此才核对。']),
    ev('mcgonagall_year1_proactive_b2_student_courage', 2, '她在教室门口停住，低声对你说：「隆巴顿先生刚才主动回答了问题。下课后若你遇见他，告诉他我注意到了。」', ['转告纳威', 5, '纳威听完脸红得厉害，却站得比平时直。麦格教授远远看见，没有打扰。', 'mcgonagall_proactive_neville_notice'], ['问为什么不亲自说', 4, '她说有些称赞从同学口中出来，更容易被收下。']),
    ev('mcgonagall_year1_proactive_b2_late_excuse', 1, '麦格教授在楼梯口拦住你。「你迟到了三分钟。现在，请给我一个事实，而不是一场表演。」', ['如实说明', 5, '她听完后只扣了一点时间记录，说诚实不能取消后果，但能改变后果的性质。', 'mcgonagall_proactive_late_truth'], ['试图解释很多', 3, '她抬手止住你，说越长的解释越需要先找到骨架。']),
  ],
  albusDumbledore: [
    ev('dumbledore_year1_proactive_b2_lemon_drop_choice', 1, '邓布利多在走廊窗边叫住你，掌心摊着两颗糖。「柠檬雪宝，还是薄荷蟾蜍？选择糖果有时比选择道路更诚实。」', ['选柠檬雪宝', 5, '他笑着说酸甜会让人记住自己还有舌头，尤其在太紧张的时候。', 'dumbledore_proactive_lemon_drop'], ['选薄荷蟾蜍', 4, '他点头说勇气不错，毕竟不是所有糖果都愿意安静待着。']),
    ev('dumbledore_year1_proactive_b2_phoenix_feather', 2, '他捧着一根红金色羽毛从你身边经过，又停下。「福克斯今天掉了一根羽毛。你觉得掉落是失去，还是留下？」', ['说是留下', 5, '邓布利多眼睛弯起来，说这个答案很适合送给一只懂得重生的鸟。', 'dumbledore_proactive_phoenix_feather'], ['说是失去', 4, '他点头，说失去若被温柔看见，也会变得不那么孤单。']),
    ev('dumbledore_year1_proactive_b2_small_secret', 1, '邓布利多把一只空糖纸递给你。「如果你路过厨房，能替我问问他们是否还记得这种口味吗？不要声张，校长也需要一点神秘。」', ['替他去问', 5, '厨房的回答很热情。邓布利多听后郑重点头，像确认了一条古老盟约。', 'dumbledore_proactive_kitchen_sweet'], ['问为什么不自己问', 3, '他说亲自问当然可以，但秘密被别人带回来时，常更有滋味。']),
    ev('dumbledore_year1_proactive_b2_second_look', 2, '他在画像前叫住你。「你刚才回头看了一眼那个独自站着的学生。愿意告诉我你看见了什么吗？」', ['说出观察', 5, '他听完轻轻点头，说第二眼常比第一眼更接近善良。', 'dumbledore_proactive_second_look'], ['说没什么', 3, '他说没什么也可能是一扇门，只是还没决定开向哪里。']),
    ev('dumbledore_year1_proactive_b2_password_memory', 1, '邓布利多停在楼梯旁，像忽然想起什么。「我似乎忘了一个口令。也可能是口令忘了我。你愿意陪我想一想吗？」', ['陪他猜口令', 5, '猜到第三个时，他忽然笑了，说记忆愿意回来，多半是因为你没有催它。', 'dumbledore_proactive_password_memory'], ['问校长也会忘吗', 4, '他说当然，年纪让人拥有许多记忆，也让它们学会四处散步。']),
  ],
  primroseSprout: [
    ev('primrose_year1_proactive_b2_seed_tray', 1, '普里姆罗斯教授端着一盘幼苗叫住你。「帮我拿稳一边。它们不重，但新生命不该被颠得像坐夜骐车。」', ['帮她端稳', 5, '幼苗顺利放到温室架上。她说温柔有时就是把手放稳。', 'primrose_proactive_seed_tray'], ['问是什么幼苗', 4, '她笑着说先让它们习惯被看见，再谈名字。']),
    ev('primrose_year1_proactive_b2_pollen_sneeze', 1, '她递给你一块手帕。「那边有个孩子被花粉呛得眼泪汪汪。别笑，植物有时比教授更会让人难堪。」', ['送去手帕', 5, '那个学生终于止住喷嚏。普里姆罗斯满意地说照顾人和照顾植物一样，要先递对东西。', 'primrose_proactive_pollen_help'], ['问花粉危险吗', 3, '她说只对骄傲危险，暂时如此。']),
    ev('primrose_year1_proactive_b2_overpruned', 2, '普里姆罗斯教授把一株被剪得可怜的植物给你看。「看见了吗？热心加上剪刀，常常比冷漠更可怕。」', ['帮她修整', 5, '你们把剩下的枝叶理顺。她说补救的第一步，是承认自己帮过头了。', 'primrose_proactive_overpruned'], ['问还能活吗', 4, '她说能，植物很坚强，但坚强不是粗心的许可证。']),
    ev('primrose_year1_proactive_b2_greenhouse_key', 2, '她把一串钥匙放进你手里。「替我锁上第三温室。确认两遍。里面有些东西会把‘差不多’理解成邀请。」', ['确认两遍', 5, '门锁稳稳合上。她说很好，你今晚替大家少做了一个噩梦。', 'primrose_proactive_greenhouse_lock'], ['问里面是什么', 3, '她温柔地说，好奇心可以明早在安全距离外继续。']),
    ev('primrose_year1_proactive_b2_leaf_spot', 1, '普里姆罗斯教授在路上叫住你，递来一片有斑点的叶子。「别急着害怕。先看斑点边缘，是病，还是太阳留下的记号？」', ['仔细观察', 5, '你看出边缘很柔和。她点头，说不是所有痕迹都代表伤害。', 'primrose_proactive_leaf_spot'], ['说看不出来', 4, '她说看不出来是好开头，至少你没有把它想成最坏。']),
  ],
  tavishMacLaren: [
    ev('tavish_year1_proactive_b2_feed_bucket', 1, '麦克拉伦教授把一只饲料桶递给你。「拿稳。别晃。它们会以为你手里有节日。」', ['稳稳拿住', 5, '小动物们没有乱冲。他点头，说人类学会不制造误会，已经算进步。', 'tavish_proactive_feed_bucket'], ['问它们会咬吗', 3, '他说如果你像摇铃一样晃食物，它们有理由误会。']),
    ev('tavish_year1_proactive_b2_track_mark', 2, '他蹲在泥地边，招手让你过来。「看脚印。告诉我它是急着走，还是害怕跑。」', ['观察脚印', 5, '你指出间距不稳。他说对，恐惧会把步子写歪。', 'tavish_proactive_track_mark'], ['说看不懂', 4, '他说那就先看深浅，地面比动物更愿意解释。']),
    ev('tavish_year1_proactive_b2_bitten_glove', 1, '麦克拉伦把一只被咬破的手套给你看。「这不是坏脾气，是我靠太近。记住，动物咬过的地方常写着人的错误。」', ['认真听教训', 5, '他把手套收起，说经验若不传出去，就只是伤口。', 'tavish_proactive_bitten_glove'], ['问疼吗', 4, '他说疼，所以记得牢。']),
    ev('tavish_year1_proactive_b2_rain_shelter', 2, '雨忽然下大，麦克拉伦在院子边叫住你。「帮我把那只笼子抬到廊下。湿冷会让小东西用生病表达不满。」', ['一起抬笼子', 5, '笼子移到干处后，里面传来细小动静。他说这是谢谢，虽然听起来像抱怨。', 'tavish_proactive_rain_shelter'], ['问里面是什么', 3, '他说现在是需要干燥的客人，名字晚点再说。']),
    ev('tavish_year1_proactive_b2_forest_edge', 1, '麦克拉伦在禁林边缘等你，神情沉稳。「如果有人问你那边有没有捷径，告诉他有。通往医务室的捷径。」', ['答应传话', 5, '他哼了一声，说有些警告得用他们听得懂的形状。', 'tavish_proactive_forest_shortcut'], ['说这有点吓人', 4, '他说吓住一次，比找回来一次便宜。']),
  ],
  herbertBinns: [
    ev('binns_year1_proactive_b2_wrong_century', 1, '宾斯教授半透明地飘到你桌边，语气平板。「你把十七世纪写成十六世纪。许多学生活着时也这么粗心。」', ['立刻改正', 5, '他似乎满意，又似乎只是继续飘着。羽毛笔自己在纸上留下一个小勾。', 'binns_proactive_century_fix'], ['问差很多吗', 3, '他说差一百年。对人类而言，这通常足够出生、犯错并死亡。']),
    ev('binns_year1_proactive_b2_name_misread', 2, '宾斯教授从黑板前飘来。「你刚才把叛乱领袖的名字读错了。死者未必介意，历史介意。」', ['请他再读一遍', 5, '他重复发音，声音没有起伏，却把每个音节放得很稳。', 'binns_proactive_name_pronounce'], ['说名字太难', 3, '他说许多战争也很难，但它们仍然发生了。']),
    ev('binns_year1_proactive_b2_floating_note', 1, '一张半透明便条从墙里飘出来，落到你面前。宾斯教授的声音从远处传来：「把它交给下一排。不要惊慌，它已经死过了。」', ['递给下一排', 5, '便条穿过一只墨水瓶又停下。宾斯教授继续讲课，好像这完全正常。', 'binns_proactive_ghost_note'], ['盯着便条看', 3, '宾斯教授说课堂上有比纸张状态更重要的内容。']),
    ev('binns_year1_proactive_b2_unfinished_question', 2, '宾斯教授在下课铃后没有离开，反而飘到你旁边。「你刚才的问题没有问完。继续。活人常把有价值的疑问咽回去。」', ['把问题问完', 5, '他回答了很久，虽然声音单调，但内容出奇完整。', 'binns_proactive_finish_question'], ['说忘了', 3, '他说遗忘是历史最大的竞争者。']),
    ev('binns_year1_proactive_b2_dusty_map', 1, '宾斯教授指向一张积灰地图。「把它展开。小心边角。它比在场多数人年长，也比多数人安静。」', ['展开地图', 5, '地图露出旧边界。宾斯教授开始讲一场几乎被忘掉的争执。', 'binns_proactive_dusty_map'], ['问为什么不用新地图', 4, '他说新地图擅长显示现状，旧地图擅长证明现状并非天生如此。']),
  ],
  felixWeasley: [
    ev('felix_year1_proactive_b2_family_letter', 1, '菲利克斯·韦斯莱把一封信折好，笑着叫住你。「帮我看一眼，这句像不像在训人？韦斯莱家的关心很容易长成吼叫。」', ['帮他改温和', 5, '他把句子改短，说温柔有时需要先把嗓门放进抽屉。', 'felix_proactive_letter_soft'], ['说有一点像', 4, '他大笑，说诚实很好，尤其在信寄出去之前。']),
    ev('felix_year1_proactive_b2_corridor_prank_trace', 2, '菲利克斯在走廊里看着一串紫色脚印，招手叫你。「猜猜看，是双胞胎，还是有人想让我们以为是双胞胎？」', ['一起追踪脚印', 5, '脚印通向一幅装无辜的画像。他说霍格沃茨最麻烦的是证据也会讲笑话。', 'felix_proactive_purple_tracks'], ['直接说双胞胎', 3, '他说合理，但合理有时正是陷阱想让你走的路。']),
    ev('felix_year1_proactive_b2_pocket_sweets', 1, '他从口袋里摸出几颗糖，递给你一颗。「拿着。不是奖励，是预防。下午第一节课前，孩子们容易像没上油的门。」', ['收下糖', 5, '糖有点酸。他眨眨眼，说清醒通常不全是甜的。', 'felix_proactive_sour_sweet'], ['问您总带糖吗', 4, '他说带糖、备用羽毛笔和一点耐心，成年人就能勉强上岗。']),
    ev('felix_year1_proactive_b2_ron_message', 2, '菲利克斯叫住你，压低声音。「如果你见到罗恩，提醒他别把家里来信塞到作业本里。教授批改时读到妈妈的附言会很尴尬。」', ['替他提醒罗恩', 5, '罗恩脸红得厉害。菲利克斯远远笑了，却没有过去添乱。', 'felix_proactive_ron_letter'], ['问为什么不自己说', 4, '他说叔叔式提醒太容易变成全家围观。']),
    ev('felix_year1_proactive_b2_laugh_boundary', 1, '菲利克斯在教室门口叫住你。「刚才那个笑话让人笑了，但也让一个孩子低头了。你看见了吗？」', ['说看见了', 5, '他点头，说笑声如果让一个人掉队，就该有人回头。', 'felix_proactive_laugh_boundary'], ['说没注意', 3, '他说那下次注意。幽默不是不用负责的魔法。']),
  ],
  mirandaPercival: [
    ev('miranda_year1_proactive_b2_star_chart', 1, '米兰达·珀西瓦尔把一张星图摊到你面前。「帮我找出今晚最容易被云遮住的那颗星。预测不是神秘，是承认视线有限。」', ['帮她找星', 5, '她在星图上做了记号，说看不见也要知道自己错过了什么。', 'miranda_proactive_cloud_star'], ['问为什么不选最亮的', 3, '她说最亮的星从不缺观众。']),
    ev('miranda_year1_proactive_b2_lamp_trim', 1, '她在塔楼楼梯口递给你一盏小灯。「把灯芯剪短一点。太亮会毁掉夜视，太暗会让胆小的人摔倒。」', ['帮她修灯芯', 5, '灯光变得稳定。米兰达说天文学也需要很实际的手。', 'miranda_proactive_lamp_trim'], ['问这是天文学吗', 4, '她说能否看见星星，常先取决于你有没有照顾好灯。']),
    ev('miranda_year1_proactive_b2_sleepy_student', 2, '米兰达指向一个打瞌睡的学生，轻声说：「替我把这杯温水给他。别吓醒他，夜课已经够像惩罚了。」', ['送去温水', 5, '那学生清醒了些。米兰达没有责备，只把望远镜角度调低。', 'miranda_proactive_sleepy_water'], ['问为什么不扣分', 3, '她说疲惫不是品格缺陷。']),
    ev('miranda_year1_proactive_b2_moon_phase', 2, '她在窗边叫住你。「今晚月相很适合纠正一个误会。你知道新月不是月亮消失吗？」', ['听她解释', 5, '她讲得很慢，像怕惊动夜色。你忽然觉得看不见也可以是一种位置。', 'miranda_proactive_new_moon'], ['说以前以为是', 4, '她点头，说许多人都这样，以为没被照亮的东西就不存在。']),
    ev('miranda_year1_proactive_b2_telescope_smudge', 1, '米兰达把一块软布递给你。「擦这架望远镜。小心，别用袖子。天空不该透过午餐痕迹被观察。」', ['认真擦镜片', 5, '镜片清亮起来。她说尊重远方，先从不弄脏眼前开始。', 'miranda_proactive_telescope_clean'], ['问擦干净有区别吗', 3, '她说一点污迹就能把星星变成错误。']),
  ],
  filiusFlitwick: [
    ev('flitwick_year1_proactive_b2_feather_balance', 1, '弗立维教授站在一摞书上向你招手。「来，帮我看这根羽毛。它不是飞不起来，是被你的咒语吓得不知道该往哪儿去。」', ['重新施咒', 5, '羽毛轻轻浮起。弗立维高兴得像第一次看见这件事发生。', 'flitwick_proactive_feather_balance'], ['说我太用力了吗', 4, '他说正是，咒语也喜欢礼貌的邀请。']),
    ev('flitwick_year1_proactive_b2_tiny_chair', 1, '他指着一把小椅子说：「帮我搬一下，谢谢。不是所有小东西都轻，也不是所有高处都重要。」', ['帮他搬椅子', 5, '椅子放稳后，他笑着说你刚帮一堂课有了更好的视野。', 'flitwick_proactive_tiny_chair'], ['问为什么不用魔法', 3, '他说偶尔让学生帮忙，也是一种很好的咒语。']),
    ev('flitwick_year1_proactive_b2_wrong_pronunciation', 2, '弗立维教授轻快地追上你。「刚才那个音节，你差一点把羽毛变成了愤怒的小鸟。我们来救它一下。」', ['跟他练发音', 5, '你重复几遍后，他满意鼓掌，说音节终于不再踩自己的袍子。', 'flitwick_proactive_pronunciation'], ['问差很多吗', 4, '他说在咒语里，一点点就足够让结果去完全不同的房间。']),
    ev('flitwick_year1_proactive_b2_duel_safety', 2, '他把一卷垫子递给你。「帮我铺到那边。决斗练习可以精彩，但精彩不该以门牙为代价。」', ['帮他铺好垫子', 5, '垫子铺好后，他检查每个角，满意地说安全也是优雅的一部分。', 'flitwick_proactive_duel_mats'], ['问会摔得很厉害吗', 3, '他说希望不会，但希望不是防护咒。']),
    ev('flitwick_year1_proactive_b2_encourage_shy', 1, '弗立维教授悄悄叫住你，指向一个不敢举手的学生。「你等会儿能先试一次吗？有人开头后，勇气会传染得快一点。」', ['先示范一次', 5, '你的咒语不完美，但那名学生真的举起了魔杖。弗立维开心得胡子都翘了。', 'flitwick_proactive_courage_spread'], ['问如果我失败呢', 4, '他说那更好，失败如果还能继续，会比成功更会鼓励人。']),
  ],
  pomonaSprout: [
    ev('pomona_year1_proactive_b2_soil_under_nails', 1, '波莫纳·斯普劳特教授把一盆土推给你，笑眯眯地说：「把手伸进去。别皱眉，泥土不是脏，是植物的床。」', ['照做', 5, '土壤温暖松软。她说很好，现在你至少知道根在什么地方睡觉。', 'pomona_proactive_soil_touch'], ['问会不会有虫', 3, '她说当然可能有，健康的床总有邻居。']),
    ev('pomona_year1_proactive_b2_mandrake_warning', 2, '她递给你一副耳罩，神情仍然和蔼。「把这副送给那边的孩子。他觉得自己耳朵很勇敢，曼德拉草会纠正这种误会。」', ['送去耳罩', 5, '那孩子乖乖戴上。斯普劳特教授满意地拍了拍你的肩。', 'pomona_proactive_earmuffs'], ['问真的那么危险？', 3, '她说亲爱的，是的，尤其对自信的耳朵。']),
    ev('pomona_year1_proactive_b2_compost_virtue', 1, '斯普劳特教授叫住你，指着一桶堆肥。「闻起来不太诗意，对吧？但好东西不总是从好闻的地方开始。」', ['帮她搬堆肥', 5, '堆肥倒进花床，她说成长很少干干净净，这不妨碍它美。', 'pomona_proactive_compost'], ['说味道太重', 3, '她大笑，说植物可不这么挑剔。']),
    ev('pomona_year1_proactive_b2_student_gloves', 2, '她拿着一双备用手套来找你。「那孩子不肯承认手磨破了。你帮我递过去，就说这是多出来的。」', ['替她递手套', 5, '对方接过手套，没有觉得丢脸。斯普劳特教授远远向你眨了眨眼。', 'pomona_proactive_spare_gloves'], ['问为什么不直接说', 4, '她说有些骄傲像嫩芽，不能用手指戳。']),
    ev('pomona_year1_proactive_b2_plant_song', 1, '斯普劳特教授在温室里轻轻哼歌，看见你便招手。「来，帮我记住下一句。我总在这儿忘词，可花们似乎不介意。」', ['帮她接歌词', 5, '她笑着把歌唱完，几片叶子在玻璃下轻轻抖动。', 'pomona_proactive_greenhouse_song'], ['问植物喜欢歌吗', 4, '她说至少它们从不抱怨跑调。']),
  ],
  rolandaHooch: [
    ev('hooch_year1_proactive_b2_grip_check', 1, '霍琦夫人在球场边叫住你，伸手指向你的扫帚柄。「握法太紧。你不是在掐一条蛇，放松。」', ['调整握法', 5, '扫帚在掌下稳了些。她点头，说会飞的人先学会不和扫帚打架。', 'hooch_proactive_grip_check'], ['说怕掉下去', 4, '她说怕可以，僵硬不行。天空不喜欢木头人。']),
    ev('hooch_year1_proactive_b2_weather_read', 2, '霍琦夫人抬头看云，又看向你。「告诉我风从哪边来。别看旗子，看草。」', ['观察草叶', 5, '你答对方向。她说旗子会表演，草只说实话。', 'hooch_proactive_wind_grass'], ['说看不出来', 3, '她指给你看，说飞行前看不出风，飞起来就会被风提醒。']),
    ev('hooch_year1_proactive_b2_broom_line', 1, '她把几把扫帚排成一列。「帮我检查哪把摆歪了。训练开始前，混乱最好先在地面上结束。」', ['帮她排齐', 5, '扫帚排成整齐一线。霍琦夫人满意地说好，至少它们现在看起来像听命令。', 'hooch_proactive_broom_line'], ['问扫帚也要排队？', 3, '她说学生都要，扫帚凭什么例外。']),
    ev('hooch_year1_proactive_b2_shaken_student', 2, '霍琦夫人看着一个刚从扫帚上摔下来的学生，低声对你说：「把水递过去。别问他还敢不敢飞，这种蠢问题留给看台。」', ['送水过去', 5, '那学生接过水，慢慢点头。霍琦夫人只说了一句，休息五分钟。', 'hooch_proactive_fallen_student'], ['问他还要继续吗', 3, '她说等他手不抖了再问。']),
    ev('hooch_year1_proactive_b2_whistle_lost', 1, '霍琦夫人在更衣室门口皱眉。「我的哨子不见了。帮我找。没有哨子的训练会让学生误以为我需要提高嗓门。」', ['帮她找哨子', 5, '哨子卡在长椅缝里。她吹了一声，满意得像秩序重新归位。', 'hooch_proactive_whistle_find'], ['说您嗓门够大', 3, '她瞥你一眼，说所以更要保护它。']),
  ],
  sybillTrelawney: [
    ev('trelawney_year1_proactive_b2_tea_symbol', 1, '特里劳妮教授忽然从帷幔后探出头，递来一只茶杯。「看这里，孩子。你觉得这像一只乌鸦，还是一把小勺？」', ['说像小勺', 5, '她沉吟片刻，说务实的象征也很神秘，尤其在早餐前。', 'trelawney_proactive_tea_spoon'], ['说像乌鸦', 3, '她立刻压低声音，说黑羽预兆总爱挑选敏感的眼睛。']),
    ev('trelawney_year1_proactive_b2_lost_shawl', 1, '特里劳妮教授披着一条不对称的披肩拦住你。「我遗失了一条紫色披肩。它可能预感到自己会被遗失，所以先离开了。」', ['帮她寻找', 5, '披肩挂在椅背上。她郑重宣布你拥有发现被命运遮盖之物的天赋。', 'trelawney_proactive_shawl_find'], ['说也许就在附近', 3, '她说附近是最狡猾的远方。']),
    ev('trelawney_year1_proactive_b2_ominous_draft', 2, '她把一张羊皮纸递给你，上面写着几句预言式评语。「‘轻微不祥’这个说法会不会太轻？我不想伤害孩子们，又不能背叛内眼。」', ['建议温和些', 5, '她把“不祥”改成“需要留意”，看起来像拯救了一个学生的午餐胃口。', 'trelawney_proactive_soft_omen'], ['说确实太轻', 3, '她眼睛亮了起来，立刻准备加上三个感叹号。']),
    ev('trelawney_year1_proactive_b2_crystal_reflection', 2, '特里劳妮教授在水晶球旁叫住你。「你看见了吗？球里有一道影子。也可能是我的耳环。命运有时很爱借珠宝说话。」', ['帮她分辨', 5, '你指出那确实是耳环反光。她叹息说物质世界总爱打断灵视。', 'trelawney_proactive_crystal_earring'], ['说像影子', 3, '她立刻低声说你也许比自己以为的更接近迷雾。']),
    ev('trelawney_year1_proactive_b2_student_fear', 1, '她难得认真地叫住你。「那个孩子被我的话吓到了。你能告诉他，预兆并不总是判决吗？从别人嘴里说，或许更容易听进去。」', ['替她去安慰', 5, '那孩子脸色好了一些。特里劳妮在远处按住胸口，像自己也松了口气。', 'trelawney_proactive_omen_comfort'], ['问您为什么不说', 4, '她小声说有时说出恐惧的人，未必最适合收回它。']),
  ],
  remusLupin: [
    ev('lupin_year1_proactive_b2_chocolate_piece', 1, '卢平教授把一小块巧克力递给你。「拿着。你刚才脸色像被走廊吞了一半。先吃，再决定要不要说话。」', ['接过巧克力', 5, '甜味慢慢散开。他没有追问，只陪你站了一会儿。', 'lupin_proactive_chocolate_calm'], ['说我没事', 4, '他温和地点头，说没事的人也可以吃巧克力。']),
    ev('lupin_year1_proactive_b2_boggart_note', 2, '卢平教授在课后叫住你。「如果以后要面对博格特，先想清楚什么能让你笑。笑不是轻视恐惧，是给自己留一扇窗。」', ['和他讨论笑点', 5, '他说你的想法很具体，这很好，抽象的勇气在教室里常找不到门。', 'lupin_proactive_boggart_laughter'], ['问恐惧能这么简单吗', 4, '他说不能，但第一步不必承担全部路程。']),
    ev('lupin_year1_proactive_b2_old_cloak', 1, '他拿着一件旧斗篷在走廊边停下。「这块补丁松了。你能帮我拿一下线轴吗？别担心，它比看上去更愿意继续服役。」', ['帮他拿线轴', 5, '他把补丁缝好，笑着说旧东西得到修补后，常比新东西更忠诚。', 'lupin_proactive_cloak_patch'], ['问为什么不换新的', 3, '他说有些东西陪你久了，离开会显得不礼貌。']),
    ev('lupin_year1_proactive_b2_harry_distance', 2, '卢平教授看着远处的哈利，轻声叫住你。「他今天被问了太多问题。如果你过去，只说普通的事。」', ['过去陪哈利聊普通事', 5, '哈利慢慢加入了关于晚饭的闲聊。卢平远远看着，表情很轻。', 'lupin_proactive_harry_ordinary'], ['问您为什么不过去', 4, '他说有些关心需要先学会不占满房间。']),
    ev('lupin_year1_proactive_b2_map_memory', 1, '卢平教授停在一条岔路前，微微一笑。「这条路以前没有这么安静。你愿意陪我走另一边吗？我想看看城堡是否还记得旧脚步。」', ['陪他绕路', 5, '他一路说起几幅画像的旧脾气，像在和年轻时的城堡轻声打招呼。', 'lupin_proactive_old_path'], ['问您以前常来吗', 4, '他笑而不答，只说每个学生都会有几条只属于自己的路。']),
  ],
  siriusBlack: [
    ev('sirius_year1_proactive_b2_door_escape', 1, '小天狼星倚在门边，冲你扬了扬下巴。「那边太闷了。走不走？我保证只违反一条非常无聊的建议。」', ['跟他走一段', 5, '他带你绕到一扇能看见天空的小窗前，说城堡如果没有出口，简直对不起它的楼梯。', 'sirius_proactive_escape_walk'], ['问是哪条建议', 3, '他说如果建议值得记住，就不该这么无聊。']),
    ev('sirius_year1_proactive_b2_harry_guard', 2, '小天狼星忽然收起笑，目光落在远处的哈利身上。「如果有人又拿他父母说事，先来找我。或者先把他带走。最好两个都做。」', ['答应留意', 5, '他点头，声音低下来，说孩子不该每次都替大人的故事付账。', 'sirius_proactive_harry_guard'], ['说哈利能应付', 4, '他说能应付不代表应该总让他应付。']),
    ev('sirius_year1_proactive_b2_bad_advice', 1, '小天狼星把一张写着恶作剧点子的纸递给你。「帮我判断，这主意是精彩，还是会让我被麦格变成地毯？」', ['说太危险', 5, '他遗憾地叹气，说成熟真烦人，但偶尔有救命价值。', 'sirius_proactive_prank_check'], ['说很精彩', 3, '他眼睛一亮，随即又怀疑地看你，说你是不是想看他倒霉。']),
    ev('sirius_year1_proactive_b2_family_name', 2, '小天狼星在走廊阴影里叫住你，语气仍轻快，眼神却不太一样。「如果有人拿姓氏给你套绳子，记得先咬断绳子。」', ['问他怎么咬断', 5, '他笑了笑，说先学会说“不”，再学会走开，最后学会不回头。', 'sirius_proactive_family_rope'], ['说这听起来很难', 4, '他说当然难，容易的话就不叫挣脱了。']),
    ev('sirius_year1_proactive_b2_midnight_window', 1, '小天狼星指着一扇高窗。「看见那块月光了吗？霍格沃茨最好的地方就是它总有一块地方像在等人翻出去。」', ['陪他看月光', 5, '他安静了一会儿，说自由有时不必真的跑，只要知道门还存在。', 'sirius_proactive_moon_window'], ['提醒夜游会被抓', 3, '他咧嘴说被抓也是路线的一部分，只是别总选这部分。']),
  ],
  auroraSinistra: [
    ev('sinistra_year1_proactive_b2_star_focus', 1, '辛尼斯塔教授把望远镜调好，叫你过去。「看那颗星。不要急着说看见了，先让眼睛真正到那里。」', ['安静观察', 5, '星光慢慢清晰。她说宇宙不奖励匆忙，只允许它偶尔安静下来。', 'sinistra_proactive_star_focus'], ['说太暗了', 4, '她说暗不是拒绝你，只是要求你多待一会儿。']),
    ev('sinistra_year1_proactive_b2_chart_error', 2, '她递来一张星图，指尖点在一处。「这里抄错了。找出来。天文学里，小错误会把你送到很远的错误地方。」', ['仔细找错', 5, '你找出标记偏差。辛尼斯塔点头，说很好，星星不负责纠正人类粗心。', 'sinistra_proactive_chart_error'], ['问差一点也不行吗', 3, '她说天空很大，差一点走久了就会很远。']),
    ev('sinistra_year1_proactive_b2_cold_roof', 1, '辛尼斯塔教授把一条厚披肩递给你。「带给塔楼上那个学生。观星可以冷，但不该愚蠢。」', ['送去披肩', 5, '学生裹紧披肩继续看星。辛尼斯塔没有笑，只把记录表往你这边推了推。', 'sinistra_proactive_warm_shawl'], ['问为什么不让他下来', 4, '她说热情值得保护，不值得冻坏。']),
    ev('sinistra_year1_proactive_b2_planet_patience', 2, '她在栏杆旁叫住你。「今晚等行星升起。你可以走，也可以留下学一件事：不是所有重要的东西都会准时为你出现。」', ['留下等待', 5, '行星终于越过塔尖。辛尼斯塔轻声说，等待让看见变得有重量。', 'sinistra_proactive_planet_wait'], ['说太晚了', 3, '她点头，说那就记住，有些知识确实需要代价。']),
    ev('sinistra_year1_proactive_b2_misnamed_star', 1, '辛尼斯塔教授停在你桌边。「你把星名念错了。再念一次。名字不是装饰，是找到它的方式。」', ['重新念星名', 5, '她纠正你的重音，直到那个名字终于像能在夜空中站稳。', 'sinistra_proactive_star_name'], ['说名字太长', 3, '她说宇宙从不为了课堂方便而缩短自己。']),
  ],
};

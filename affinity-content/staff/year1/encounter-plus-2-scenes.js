/**
 * 一年级教职员工偶遇加厚包（二）。
 *
 * 目标：把所有教职员工的偶遇最低线继续抬高，同时让教授们在课堂之外
 * 保持自己的学科气质、生活习惯和霍格沃茨现场感。
 */

export const STAFF_YEAR1_ENCOUNTER_PLUS_2_SCENES = {
  augustusFenwick: {
    encounters: [{
      id: 'fenwick_year1_enc_calculator_click',
      area: '城堡图书馆',
      minTier: 2,
      text: '图书馆靠窗的位置，芬威克教授面前放着一台按键磨白的麻瓜计算器。他每按一下都停一会儿，不像在求答案，更像在听机器是否诚实。',
      choices: [
        { label: '问计算器在算什么', delta: 4, response: '他说不是算什么，是确认自己手算没有错。随后他把一串数字推给你，让你按一遍。小小的按键声在图书馆里显得很清楚，像另一种没有魔杖的咒语。' },
        { label: '安静坐在旁边', delta: 3, response: '你没有打扰。过了一会儿，芬威克教授把一张草稿纸推过来，纸角写着“如果有兴趣”。这在他那里几乎像一次热情邀请。' },
      ],
    }],
  },
  serafinaMoody: {
    encounters: [{
      id: 'serafina_year1_enc_toolbox_latch',
      area: '一楼走廊',
      minTier: 2,
      text: '塞拉菲娜教授的工具箱在走廊上啪地弹开，螺丝、线圈和一只小灯泡滚了满地。她先护住灯泡，再看向四散的工具，像面对一场非常有教育意义的灾难。',
      choices: [
        { label: '帮她捡螺丝', delta: 4, response: '你把几颗螺丝捡回盒里。塞拉菲娜说每颗螺丝都有位置，别看它小，少了它，整个东西就会用很吵的方式表达不满。' },
        { label: '问灯泡为什么优先', delta: 3, response: '她说因为螺丝可以再找，玻璃碎了会让人流血。这个回答粗粝又实际，像她所有安全原则一样藏在热闹背后。' },
      ],
    }],
  },
  elizaLovegood: {
    encounters: [{
      id: 'eliza_year1_enc_creased_page',
      area: '城堡图书馆',
      minTier: 2,
      text: '伊莱莎教授正在抚平一本旧书的折角。那一页被很多人折过，纸边柔软得像一枚反复被摸到的记忆。她没有责怪折书的人，只看着那一页很久。',
      choices: [
        { label: '问那页有什么特别', delta: 4, response: '她读出其中一句：关于一个人终于说出真话。她说也许许多人都在这里停过，因为这句话替他们先勇敢了一次。' },
        { label: '帮她压平纸角', delta: 3, response: '你们一起把纸角压平。伊莱莎教授说书页会记得人怎么读它，折痕不是罪证，有时是相遇留下的手印。' },
      ],
    }],
  },
  constanceShacklebolt: {
    encounters: [{
      id: 'constance_year1_enc_quiet_vote',
      area: '空教室',
      minTier: 2,
      text: '空教室里，康斯坦丝教授把几张写着不同意见的纸条摊在桌上。没有名字，只有简短的理由。她看见你，问：「匿名会让人更诚实，还是更轻率？」',
      choices: [
        { label: '说两者都有可能', delta: 5, response: '她点头，把纸条分成两堆：有理由的和只有情绪的。她说制度设计最难的地方，是既保护胆小的真话，也拦住不用负责的伤人话。' },
        { label: '问这些纸条来自哪里', delta: 3, response: '她说来自一次课堂投票，关于一个看似很小的座位问题。小问题不代表没有权力，只是权力坐得比较低。' },
      ],
    }],
  },
  severusSnape: {
    encounters: [{
      id: 'snape_year1_enc_scorched_ladle',
      area: '魔药课教室',
      minTier: 2,
      text: '魔药课教室空无一人，斯内普教授正检查一柄被烧黑的长柄勺。勺柄焦得发亮，他的表情比那块焦痕更黑。你站在门口时，他没有抬头。',
      choices: [
        { label: '问是不是有人受伤', delta: 4, response: '他说暂时没有，这显然是今天唯一值得庆幸的事。随后他把勺子放进废弃器具盒，冷冷补充：工具会替愚蠢先承受一次，但不会永远承受。' },
        { label: '安静把门带上', delta: 3, response: '你把门带上，挡住走廊风。斯内普看了你一眼，没有说话。几秒后，他把一瓶舒缓药膏放到讲台边，显然是给明天可能逞强不说的学生准备的。' },
      ],
    }],
  },
  minervaMcGonagall: {
    encounters: [{
      id: 'mcgonagall_year1_enc_biscuit_tin',
      area: '教师办公室走廊',
      minTier: 2,
      text: '麦格教授从办公室出来，手里拿着一只铁皮饼干盒。盒盖没有完全扣紧，一点黄油香气从缝里漏出来。她看见你盯着盒子，眉毛微微一扬。',
      choices: [
        { label: '假装没闻到饼干味', delta: 3, response: '麦格教授似乎满意你的克制，却还是打开盒子，递给你一块。她说这不是奖励，只是你看起来需要在下一节课前补充一点理智。' },
        { label: '问这是给谁的', delta: 4, response: '她说给刚结束魁地奇训练又试图假装不饿的学生。语气严厉，但饼干盒里每一块都摆得很整齐，像她的关心也有自己的规矩。' },
      ],
    }],
  },
  albusDumbledore: {
    encounters: [{
      id: 'dumbledore_year1_enc_stuck_portrait',
      area: '八楼走廊',
      minTier: 2,
      text: '邓布利多校长站在一幅卡住的画像前，画像里的巫师半个身子已经跨到隔壁画框，却被自己的袍角绊住。校长看起来一点也不急，反而像在欣赏一场慢动作喜剧。',
      choices: [
        { label: '帮忙提醒画像抬脚', delta: 4, response: '画像照做后终于挪了过去。邓布利多认真感谢你，说许多困境的解决办法就是有人在旁边温和地说一句“抬脚”。这听起来像玩笑，也像一句很小的真理。' },
        { label: '问他为什么不直接施咒', delta: 3, response: '他笑着说如果每次袍角绊住都靠校长施咒，画像们会失去很多自我发现的机会。画像表示强烈不同意。' },
      ],
    }],
  },
  primroseSprout: {
    encounters: [{
      id: 'primrose_year1_enc_litmus_strip',
      area: '实验室走廊',
      minTier: 2,
      text: '普里姆罗斯教授把几条变色试纸夹在笔记本里，正站在窗边记录颜色。每一条都只差一点点色阶，她却看得很仔细，像在听很轻的回答。',
      choices: [
        { label: '帮她对照色卡', delta: 4, response: '你把色卡举到光下。普里姆罗斯教授说颜色会骗人，光线也会，所以实验需要第二双眼睛。你们最后确认了读数，她在记录旁写下“复核”。' },
        { label: '问差一点也重要吗', delta: 3, response: '她说差一点有时就是安全和不安全的边界。很多人只在爆炸后才相信边界存在，而那通常太晚。' },
      ],
    }],
  },
  tavishMacLaren: {
    encounters: [{
      id: 'tavish_year1_enc_breathing_jar',
      area: '标本室',
      minTier: 2,
      text: '标本室里，塔维什教授把一个空玻璃罐放到窗边。罐里什么也没有，只有一点凝在内壁的水汽。他看着水汽慢慢消失，像那也是值得记录的生命迹象。',
      choices: [
        { label: '问罐里原来有什么', delta: 4, response: '他说是一只已经放归的小蜗牛。留下水汽不是标本，却证明它刚才在这里呼吸过。你看着空罐，突然觉得“离开”也能被观察。' },
        { label: '帮他擦干玻璃', delta: 3, response: '他摇头，说再等一会儿。不是所有痕迹都要立刻清理，有些应该被允许自己慢慢消失。' },
      ],
    }],
  },
  herbertBinns: {
    encounters: [{
      id: 'herbert_year1_enc_old_seal',
      area: '城堡图书馆',
      minTier: 2,
      text: '赫伯特·宾斯教授坐在旧档案旁，手里拿着一枚脱落的蜡封。蜡封已经裂开一半，上面的纹章几乎看不清。他没有急着修复，只把它放在一张干净纸上。',
      choices: [
        { label: '问蜡封属于谁', delta: 4, response: '他说这正是问题。纹章模糊，署名缺失，但裂开的方式说明它曾经被很急地打开。你第一次觉得一枚坏掉的蜡封也能带出人的呼吸。' },
        { label: '帮他找纹章索引', delta: 3, response: '你在索引里翻找相似图案。宾斯教授说有些历史不是从大事件开始，而是从一个人为什么急着拆信开始。' },
      ],
    }],
  },
  felixWeasley: {
    encounters: [{
      id: 'felix_year1_enc_window_route',
      area: '高塔窗边',
      minTier: 2,
      text: '菲利克斯教授站在高塔窗边，从上往下看庭院里学生走出的路。他在纸上画下一道道弯线，连几次绕开水洼都认真标了出来。',
      choices: [
        { label: '问为什么画学生走路', delta: 4, response: '他说真正的路不总是铺出来的，也会被人每天走出来。你看着那些绕开水洼和阴影的线，觉得地图忽然有人味了。' },
        { label: '帮他辨认一条路线', delta: 3, response: '你指出那条通向温室的小路。菲利克斯教授在旁边标注“赶课常用，雨天慎行”，像给霍格沃茨的日常添上一条脚注。' },
      ],
    }],
  },
  mirandaPercival: {
    encounters: [{
      id: 'miranda_year1_enc_reading_list',
      area: '城堡图书馆',
      minTier: 2,
      text: '米兰达教授在书架前整理一张阅读清单。她划掉了一个过于艰深的标题，又在旁边写下“以后”。动作很轻，像不是删除，而是把一本书送到更合适的时间。',
      choices: [
        { label: '问为什么划掉', delta: 4, response: '她说不是每本好书都应该立刻交给一年级。太早读到，有时会让人误以为自己不喜欢它。你看见她对书的尊重，也包括不急着让人喜欢。' },
        { label: '帮她挑一本入门书', delta: 3, response: '你选了一本较薄的。米兰达教授翻了几页，点头说它不炫耀自己的聪明，这很好，读者第一步需要的是门，不是墙。' },
      ],
    }],
  },
  filiusFlitwick: {
    encounters: [{
      id: 'flitwick_year1_enc_wand_polish',
      area: '咒语课教室',
      minTier: 2,
      text: '弗立维教授在课后擦拭几根备用魔杖。每根魔杖旁边都有一张小纸条，写着“太急”“发音好”“需要信心”之类的记录。',
      choices: [
        { label: '问纸条写给谁', delta: 4, response: '他说不是写给谁，是写给下次教学。魔杖会记住手的紧张，教授也应该记住。你忽然觉得他看见的学生远比课堂上表现出来的更多。' },
        { label: '帮他整理纸条', delta: 3, response: '你按魔杖顺序排好纸条。弗立维教授开心地说整齐的记录能让明天的鼓励更准确。' },
      ],
    }],
  },
  pomonaSprout: {
    encounters: [{
      id: 'sprout_year1_enc_compost_bucket',
      area: '温室',
      minTier: 2,
      text: '斯普劳特教授提着一只堆肥桶穿过温室，桶里是枯叶、旧土和看起来非常不体面的植物残枝。她却提得很郑重，像里面装着下一季的希望。',
      choices: [
        { label: '帮她扶住桶盖', delta: 4, response: '你帮她按住摇晃的桶盖。她说别嫌它难看，许多新叶都从这些旧东西里长出来。温室里泥土味很重，却让人安心。' },
        { label: '问这些还能用吗', delta: 3, response: '她笑着说当然，植物世界很少真正浪费。人也可以学一学，不要急着把失败的东西全扔掉。' },
      ],
    }],
  },
  rolandaHooch: {
    encounters: [{
      id: 'hooch_year1_enc_goalpost_wind',
      area: '魁地奇球场',
      minTier: 2,
      text: '霍琦夫人站在球门环下，看一条悬在横杆上的测风布。布条被风扯得笔直，她的哨子却还没响，像她正在等风给出最后一句话。',
      choices: [
        { label: '问是不是要取消训练', delta: 4, response: '她说还不取消，但要降低高度。风不是敌人，假装它不存在才是。她吹响哨子，声音被风带得很远。' },
        { label: '帮她收起一只备用球', delta: 3, response: '你把备用球放回箱里。霍琦夫人说球场上每少一个乱飞的东西，就多一点活着回去的机会。话糙，意思很清楚。' },
      ],
    }],
  },
  sybillTrelawney: {
    encounters: [{
      id: 'trelawney_year1_enc_card_draft',
      area: '北塔教室',
      minTier: 2,
      text: '特里劳妮教授把几张占卜牌摊在圆桌上，窗缝吹来的风让最边上一张不断翻起。她凝视那张牌，神情像它正在犹豫要不要开口。',
      choices: [
        { label: '帮她按住那张牌', delta: 4, response: '你按住牌角。特里劳妮教授深深吸气，说命运有时也需要一根稳定的手指。随后她眯眼看牌面，宣布今天适合避免楼梯争执。' },
        { label: '问牌是不是被风吹的', delta: 3, response: '她说当然，亲爱的，风也是宇宙表达意见的一种方式。然后她起身把窗关小了一点，显然宇宙意见太大也会冷。' },
      ],
    }],
  },
  auroraSinistra: {
    encounters: [{
      id: 'sinistra_year1_enc_cold_telescope',
      area: '天文塔',
      minTier: 2,
      text: '辛尼斯特拉教授正在给一架望远镜的金属支架包上软布。夜里太冷，金属表面结了一层薄霜，碰上去会让手指发麻。',
      choices: [
        { label: '帮她固定软布', delta: 4, response: '你把软布系紧，她检查了一下结。辛尼斯特拉教授说仰望星空的人不该因为忘记手指而受罚。这个说法平静，却很温柔。' },
        { label: '问今晚星星好吗', delta: 3, response: '她抬头看了一眼，说星星很好，空气很坏。观测就是这样，不只看你想看什么，也看夜晚允许什么。' },
      ],
    }],
  },
  remusLupin: {
    encounters: [{
      id: 'lupin_year1_enc_tea_stack',
      area: '黑魔法防御术教室',
      minTier: 2,
      text: '卢平教授把一摞茶杯从讲台边挪到窗台上，每只杯子旁边都放着一小块巧克力。教室里没有学生，只有窗外阴云压得很低。',
      choices: [
        { label: '问这是给谁准备的', delta: 4, response: '他说给下节课后可能需要坐一会儿的人。不是所有学生都会承认自己被吓到，所以有些东西最好提前放在那里。' },
        { label: '帮他摆好杯子', delta: 3, response: '你把杯子排成不那么正式的一列。卢平教授笑着说这样好，安慰如果看起来太像制度，就会吓跑真正需要它的人。' },
      ],
    }],
  },
  siriusBlack: {
    encounters: [{
      id: 'sirius_year1_enc_cloak_dust',
      area: '奖杯陈列室',
      minTier: 2,
      text: '小天狼星靠在奖杯陈列室门口，斗篷上沾着一片灰。他正盯着一只旧奖杯，表情介于怀念和想把它藏起来之间。',
      choices: [
        { label: '问奖杯和他有关吗', delta: 4, response: '他立刻说当然无关，然后指出上面某个名字刻得歪了。你看见他嘴角的笑停得比平时久，像那只奖杯里装着一段不能大声说的旧日子。' },
        { label: '提醒他斗篷有灰', delta: 3, response: '他随手拍了拍，灰尘飞得更厉害。小天狼星说这叫历史附着，不叫脏。可他还是多拍了两下。' },
      ],
    }],
  },
};

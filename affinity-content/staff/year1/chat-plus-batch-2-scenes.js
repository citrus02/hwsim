/**
 * 一年级教职员工主动聊聊加厚包（二）。
 *
 * 每位成年人一次补两条，覆盖课后、办公室、走廊、球场、塔楼和温室里的日常缝隙。
 */

export const STAFF_YEAR1_CHAT_PLUS_BATCH_2_SCENES = {
  augustusFenwick: {
    activeChatEvents: [
      {
        id: 'fenwick_year1_chat_chalk_fraction',
        minTier: 1,
        text: '芬威克教授把一小截粉笔折成两段，又把其中一段再折开。他看着那些不均匀的白色碎块，像在思考分数为什么总比整数更诚实。',
        choices: [
          { label: '问这也是题吗', delta: 4, response: '他说是，也不是。许多学生以为分开就是变少，其实有时只是看见整体里原本藏着的结构。' },
          { label: '帮他捡起碎粉笔', delta: 3, response: '你把碎粉笔放进盒里。芬威克教授说短粉笔适合写短答案，可惜世上短答案太少。' },
        ],
      },
      {
        id: 'fenwick_year1_chat_window_numbers',
        minTier: 2,
        text: '他站在窗边数院子里学生走过的路线，手指在袖口轻轻点着节奏。那些脚步在他眼里似乎也能变成某种图形。',
        choices: [
          { label: '问他数出了什么', delta: 4, response: '他说大多数人会避开水洼，但不是所有人。例外最有意思，因为它们证明人不是只按最短路径行走。' },
          { label: '说这不像数学课', delta: 3, response: '芬威克教授说数学从来不只在课上，只是课上比较容易被逮住。' },
        ],
      },
    ],
  },
  serafinaMoody: {
    activeChatEvents: [
      {
        id: 'serafina_year1_chat_screw_sort',
        minTier: 1,
        text: '塞拉菲娜教授把一把拆下来的螺丝倒在桌上，按长度和磨损程度分堆。她分得很快，像这些小东西都有脾气和履历。',
        choices: [
          { label: '问为什么不直接换新的', delta: 4, response: '她说旧螺丝能告诉你机器哪里受过力。只换新的，等于把证人赶出房间。' },
          { label: '帮她分最短的那堆', delta: 3, response: '你分错了两颗，她立刻纠正，却没有嘲笑。她说眼睛要练，手也要练。' },
        ],
      },
      {
        id: 'serafina_year1_chat_static_hair',
        minTier: 2,
        text: '一次演示后，塞拉菲娜教授的头发有几缕竖了起来。她若无其事地继续收仪器，仿佛这只是物理学在她头上签了名。',
        choices: [
          { label: '提醒她头发竖起来了', delta: 3, response: '她摸了摸，满意地说至少说明实验不是完全没有结果。随后还是用手把它们压了下去。' },
          { label: '问刚才失败了吗', delta: 4, response: '她说如果目标是证明“不要这样接线”，那成功得非常彻底。她笑得很亮，像失败也有火花。' },
        ],
      },
    ],
  },
  elizaLovegood: {
    activeChatEvents: [
      {
        id: 'eliza_year1_chat_book_smell',
        minTier: 1,
        text: '伊莱莎教授轻轻翻开一本旧书，没有立刻读，而是让纸页的气味散出来。她说每本旧书开口前都会先叹一口气。',
        choices: [
          { label: '问这本书叹什么气', delta: 4, response: '她说也许是嫌自己等太久，也许是庆幸终于被打开。文学很少只给一个答案。' },
          { label: '说闻起来像雨天', delta: 3, response: '她笑着点头，说你听见了气味里的天气。这句话古怪，却像一枚正式的认可。' },
        ],
      },
      {
        id: 'eliza_year1_chat_misread_line',
        minTier: 2,
        text: '她把一句诗读错了一个词，停下后没有立刻改正，而是把错读的版本又念了一遍。',
        choices: [
          { label: '问错的也好听吗', delta: 4, response: '她说有时错误会打开另一扇窗。不能因此假装它正确，但可以先看看窗外有什么。' },
          { label: '帮她找到原句', delta: 3, response: '你指出原句，她道谢后重新朗读。正确版本回来时，似乎比刚才更清楚了。' },
        ],
      },
    ],
  },
  constanceShacklebolt: {
    activeChatEvents: [
      {
        id: 'constance_year1_chat_queue_line',
        minTier: 1,
        text: '康斯坦丝教授站在礼堂门口，看一小队学生排队取东西。有人试图插队，她没有立刻训斥，只等那人自己意识到所有目光都看了过去。',
        choices: [
          { label: '问她为什么不马上管', delta: 4, response: '她说有些规则先让共同体开口，比让教师开口更有用。前提是教师在旁边看着，别让沉默变成纵容。' },
          { label: '说那人退回去了', delta: 3, response: '她点头，说这比惩罚好。不是每次纠正都需要一场审判。' },
        ],
      },
      {
        id: 'constance_year1_chat_word_choice',
        minTier: 2,
        text: '她在一份课堂材料上把“服从”划掉，改成“同意遵守”。改完后，她盯着两个词之间的差别看了很久。',
        choices: [
          { label: '问差别很大吗', delta: 4, response: '她说非常大。前者只要求低头，后者至少承认人有头可以抬起来。' },
          { label: '说学生会注意吗', delta: 3, response: '她说也许不会立刻注意。但教育里很多重要东西，都是先被使用，后来才被理解。' },
        ],
      },
    ],
  },
  severusSnape: {
    activeChatEvents: [
      {
        id: 'snape_year1_chat_ingredient_order',
        minTier: 1,
        text: '斯内普教授把干荨麻和蛇牙粉的位置调换了半英寸。储藏架看起来没有任何变化，他的脸色却像终于纠正了一个严重错误。',
        choices: [
          { label: '问半英寸也重要吗', delta: 3, response: '他说半英寸足够让愚蠢的手先碰到不该碰的东西。显然，在他看来这已经是充分理由。' },
          { label: '记住新的位置', delta: 4, response: '他注意到你的视线，说至少你没有把观察力全浪费在发呆上。这句话阴冷，却不完全是否定。' },
        ],
      },
      {
        id: 'snape_year1_chat_silent_warning',
        minTier: 2,
        text: '你差点碰到一只没有标签的黑色小瓶。斯内普教授没有喊，只用魔杖尖轻轻敲了一下桌面。',
        choices: [
          { label: '立刻收回手', delta: 4, response: '他冷冷说很好，看来求生本能尚未完全离你而去。随后他给那只瓶子贴上标签，动作比话语温和。' },
          { label: '问里面是什么', delta: 3, response: '他说是足以让好奇心后悔终生的东西。你觉得这大概已经是最详细的解释。' },
        ],
      },
    ],
  },
  minervaMcGonagall: {
    activeChatEvents: [
      {
        id: 'mcgonagall_year1_chat_straight_frame',
        minTier: 1,
        text: '麦格教授把走廊里一幅歪掉的画像扶正。画像抱怨自己喜欢这个角度，她只说城堡已经够不稳定了，墙上的人不必帮忙。',
        choices: [
          { label: '忍住笑', delta: 3, response: '麦格教授看见了，但没有责备。她只是说纪律和幽默并非敌人，只是幽默常常忘了排队。' },
          { label: '帮她扶住画框', delta: 4, response: '你扶住画框，她把钉子重新固定。画像小声嘀咕，麦格教授完全没有被动摇。' },
        ],
      },
      {
        id: 'mcgonagall_year1_chat_teacup_mark',
        minTier: 2,
        text: '她在办公室门口用手帕擦掉茶杯底留下的圆痕。动作很克制，却没有匆忙，像整洁本身也是一种让人稳住的方式。',
        choices: [
          { label: '问是不是有人来过', delta: 4, response: '她说是一个需要坐下来喝杯茶的学生。并非所有训话都需要站着完成。' },
          { label: '递给她干净手帕', delta: 3, response: '她接过后说谢谢，语气很短，但没有把你的帮助当成理所当然。' },
        ],
      },
    ],
  },
  albusDumbledore: {
    activeChatEvents: [
      {
        id: 'dumbledore_year1_chat_stair_pause',
        minTier: 1,
        text: '邓布利多校长在活动楼梯转动时停下来，像顺便欣赏一场很慢的舞蹈。他手里的银色小仪器轻轻吐着烟圈。',
        choices: [
          { label: '问它在测什么', delta: 3, response: '他说也许在测耐心，也许在测楼梯的幽默感。仪器吐出一个歪烟圈，像不愿被定义。' },
          { label: '陪他等楼梯停下', delta: 4, response: '楼梯终于靠岸时，他说等待有时会把人送到比原计划更好的地方。你不确定他说的是楼梯还是别的。' },
        ],
      },
      {
        id: 'dumbledore_year1_chat_empty_plate',
        minTier: 2,
        text: '晚餐后，邓布利多校长看着一只空甜点盘，神情严肃得像在研究古代魔法。盘子里只剩一颗糖渣。',
        choices: [
          { label: '问是不是少了什么', delta: 4, response: '他说是的，少了一块本来很有前途的太妃糖。随后他把糖渣分给一只路过的画像鸟。' },
          { label: '说甜点会再来的', delta: 3, response: '他赞同地点头，说希望是人生许多方面都该具备的品质，尤其是甜点方面。' },
        ],
      },
    ],
  },
  primroseSprout: {
    activeChatEvents: [
      {
        id: 'primrose_year1_chat_clean_lens',
        minTier: 1,
        text: '普里姆罗斯教授在实验室外擦一片放大镜，反复确认边缘没有水痕。她说看不清不是小问题，很多危险都先伪装成模糊。',
        choices: [
          { label: '帮她举到光下', delta: 4, response: '你把放大镜举到窗边，她终于满意。她说第二双眼睛常常比第二个咒语更可靠。' },
          { label: '问会看什么', delta: 3, response: '她说看叶脉，也看学生有没有把样本切得像遭遇过战争。语气温和，判断却很准确。' },
        ],
      },
      {
        id: 'primrose_year1_chat_numbered_jars',
        minTier: 2,
        text: '她给一排玻璃罐编号，写到第七个时停下，重新检查前三个。不是不信自己，而是不信任何未经复核的确定。',
        choices: [
          { label: '问她总检查两遍吗', delta: 4, response: '她说至少两遍。信心如果不能接受复查，就只是打扮过的粗心。' },
          { label: '帮她读回编号', delta: 3, response: '你照着读了一遍，她逐一核对。最后她在记录上写下“确认”，像给混乱系上一根细线。' },
        ],
      },
    ],
  },
  tavishMacLaren: {
    activeChatEvents: [
      {
        id: 'tavish_year1_chat_quiet_cage',
        minTier: 1,
        text: '塔维什教授站在一个空笼前，检查门扣是否顺滑。笼子里没有动物，他仍然把水碟摆正，像尊重即将到来的生命。',
        choices: [
          { label: '问笼子给谁用', delta: 4, response: '他说还不知道，也正因此要准备好。照料不是等需要出现才开始。' },
          { label: '帮他试门扣', delta: 3, response: '门扣轻轻合上，没有发出刺耳声。他点头说很好，害怕的动物不需要额外的噪音。' },
        ],
      },
      {
        id: 'tavish_year1_chat_field_note',
        minTier: 2,
        text: '他在笔记本上画一串细小爪印，旁边标着“可能不是同一只”。字迹谨慎得几乎谦卑。',
        choices: [
          { label: '问为什么不确定', delta: 4, response: '他说自然很少为观察者摆好姿势。不确定不是失败，是诚实地给事实留位置。' },
          { label: '帮他比较大小', delta: 3, response: '你指出第二个爪印更浅。他说很好，深浅有时比形状更会说话。' },
        ],
      },
    ],
  },
  herbertBinns: {
    activeChatEvents: [
      {
        id: 'herbert_year1_chat_archive_thread',
        minTier: 1,
        text: '赫伯特·宾斯教授用棉线重新捆一卷旧档案。线头断了一次，他没有显出烦躁，只把断处剪齐，重新开始。',
        choices: [
          { label: '问这些档案讲什么', delta: 4, response: '他说讲一次很小的校董争执。小争执若被保存得够久，也会露出时代的牙齿。' },
          { label: '帮他按住纸卷', delta: 3, response: '你按住档案，他把线绕好。宾斯教授说档案最怕英雄式的手忙脚乱。' },
        ],
      },
      {
        id: 'herbert_year1_chat_ink_faded',
        minTier: 2,
        text: '他把一页褪色信件移到光下，字迹几乎看不清。宾斯教授没有施咒，只慢慢改变角度，让旧墨水自己显现。',
        choices: [
          { label: '问为什么不用咒语', delta: 4, response: '他说有些旧东西经不起热心。历史不喜欢被粗暴地照亮。' },
          { label: '帮他挡住反光', delta: 3, response: '反光退去后，一个名字终于浮现。宾斯教授轻轻读出它，像怕声音太重会压坏纸页。' },
        ],
      },
    ],
  },
  felixWeasley: {
    activeChatEvents: [
      {
        id: 'felix_year1_chat_door_hinge',
        minTier: 1,
        text: '菲利克斯教授给一扇门的铰链滴油。门还没坏，只是开合时有一点轻响，他却已经带着工具来了。',
        choices: [
          { label: '问这么小也要修吗', delta: 4, response: '他说小响声是城堡先礼貌地提醒你。等它开始大叫，通常已经晚了。' },
          { label: '帮他扶住门', delta: 3, response: '你扶住门，他拧紧最后一颗螺丝。门安静合上，他满意得像听见了掌声。' },
        ],
      },
      {
        id: 'felix_year1_chat_hidden_draft',
        minTier: 2,
        text: '他在一处墙角点燃细小火苗，看烟往哪里飘。烟丝钻进石缝，很快消失，像城堡偷偷吸了一口气。',
        choices: [
          { label: '问那里有暗道吗', delta: 4, response: '菲利克斯说也许只是通风，也许是历史留下的懒惰。他还不能确定，不能确定时最好别乱宣布发现。' },
          { label: '帮他记下方向', delta: 3, response: '你写下烟飘的方向。他说建筑不会说谎，只是常常说得太小声。' },
        ],
      },
    ],
  },
  mirandaPercival: {
    activeChatEvents: [
      {
        id: 'miranda_year1_chat_dogear',
        minTier: 1,
        text: '米兰达教授发现一本书被折了角。她没有发怒，只把折痕慢慢压平，像在安抚一处不该承受的委屈。',
        choices: [
          { label: '问她会罚借书人吗', delta: 3, response: '她说会提醒。惩罚不能替代理解，理解也不能替代修正。' },
          { label: '递给她书签', delta: 4, response: '她接过书签夹进去，说这比训斥更能预防下一次。图书馆喜欢实际的善意。' },
        ],
      },
      {
        id: 'miranda_year1_chat_shelf_gap',
        minTier: 2,
        text: '她看着书架上一处空缺，手指轻轻点在标签下方。那本书被借走了，她却像仍然能看见它留下的形状。',
        choices: [
          { label: '问那本书很重要吗', delta: 4, response: '她说重要，但被需要也是书的重要方式。只要它会回来，空位就不是失去。' },
          { label: '帮她查借阅记录', delta: 3, response: '你们找到借阅名字。她点头说很好，图书馆不是收藏沉默，而是管理流动。' },
        ],
      },
    ],
  },
  filiusFlitwick: {
    activeChatEvents: [
      {
        id: 'flitwick_year1_chat_warmup_note',
        minTier: 1,
        text: '弗立维教授在课前哼一小段音阶，魔杖尖随声音轻轻亮起。他说咒语和歌一样，不能指望喉咙一醒来就很勇敢。',
        choices: [
          { label: '问念咒也要热身吗', delta: 4, response: '他高兴地说当然。嘴、手腕和信心都要热身，尤其是信心。' },
          { label: '跟着哼一下', delta: 3, response: '你哼得不太准，他却认真点头，说准可以练，愿意开口已经很好。' },
        ],
      },
      {
        id: 'flitwick_year1_chat_fallen_cushion',
        minTier: 2,
        text: '讲台旁的小垫子掉到地上。弗立维教授把它拍干净放回原位，完全没有因为这事重复发生而不耐烦。',
        choices: [
          { label: '帮他摆稳', delta: 4, response: '你把垫子移到不容易滑的位置。弗立维教授说课堂里每个高度都该被认真考虑。' },
          { label: '问为什么不用固定咒', delta: 3, response: '他说固定咒当然方便，但垫子偶尔移动，说明它也参与了课堂生活。' },
        ],
      },
    ],
  },
  pomonaSprout: {
    activeChatEvents: [
      {
        id: 'sprout_year1_chat_leaf_spots',
        minTier: 1,
        text: '斯普劳特教授托着一片有斑点的叶子，对着光看了很久。她的眉头皱着，却不是嫌弃，更像在听一个不会说话的学生讲述不舒服。',
        choices: [
          { label: '问它生病了吗', delta: 4, response: '她说可能只是晒伤，也可能缺了什么。照料第一步不是下结论，而是别把症状当成麻烦。' },
          { label: '帮她拿来喷壶', delta: 3, response: '她接过喷壶，先试了试水雾细不细。温柔在她手里总是很实际。' },
        ],
      },
      {
        id: 'sprout_year1_chat_pot_label',
        minTier: 2,
        text: '她把一个写错名字的花盆标签拔出来，重新写好。旧标签背面沾着泥，她没有扔掉，只放进围裙口袋。',
        choices: [
          { label: '问旧标签还留着吗', delta: 3, response: '斯普劳特教授说可以当临时刮泥片。温室里没有多少东西该被轻易浪费。' },
          { label: '帮她插回新标签', delta: 4, response: '你把标签插稳。她说名字要写对，植物不会读，但照顾它的人会因此少犯错。' },
        ],
      },
    ],
  },
  rolandaHooch: {
    activeChatEvents: [
      {
        id: 'hooch_year1_chat_ground_check',
        minTier: 1,
        text: '霍琦夫人蹲在球场边按草皮，检查雨后地面是否太滑。她的哨子没有响，但几个学生已经自动放慢脚步。',
        choices: [
          { label: '问今天还能飞吗', delta: 4, response: '她说能不能飞不只看天，还看落地时地面愿不愿意接住你。今天要降低高度。' },
          { label: '帮她标出湿滑区域', delta: 3, response: '你插好小旗。霍琦夫人说好，球场上最聪明的人通常先尊重地面。' },
        ],
      },
      {
        id: 'hooch_year1_chat_broom_name',
        minTier: 2,
        text: '她检查一把训练扫帚时，低声叫出了它的编号，语气像在叫一个不太听话的老队员。',
        choices: [
          { label: '问她记得每把扫帚吗', delta: 4, response: '她说当然。哪把爱偏左，哪把脾气急，哪把需要夸两句，她都知道。安全从记性开始。' },
          { label: '问扫帚需要夸吗', delta: 3, response: '霍琦夫人看你一眼，说学生都需要，扫帚为什么不能。她不像在开玩笑。' },
        ],
      },
    ],
  },
  sybillTrelawney: {
    activeChatEvents: [
      {
        id: 'trelawney_year1_chat_curtain_tassel',
        minTier: 1,
        text: '特里劳妮教授给北塔窗帘的流苏重新打结。她说结打歪会影响气流，而气流会影响茶叶，而茶叶当然会影响命运的表达。',
        choices: [
          { label: '帮她扶住流苏', delta: 3, response: '你扶住流苏，她郑重道谢，说你刚刚稳定了一个非常微妙的宇宙环节。' },
          { label: '问真的会影响吗', delta: 4, response: '她眯起眼，说亲爱的，怀疑也是影响的一部分。随后她把结打得更紧了。' },
        ],
      },
      {
        id: 'trelawney_year1_chat_lost_bead',
        minTier: 2,
        text: '她在地毯上寻找一颗掉落的珠子，说那是某串重要项链的第三十七颗。地毯颜色复杂得像专门反对寻找。',
        choices: [
          { label: '蹲下来一起找', delta: 4, response: '你在桌脚边找到珠子。特里劳妮教授捧起它，说命运有时非常小，且喜欢滚到家具下面。' },
          { label: '问少一颗会怎样', delta: 3, response: '她说项链会变轻，而轻一点的预兆也许会飘到错误的方向。这个解释相当认真。' },
        ],
      },
    ],
  },
  remusLupin: {
    activeChatEvents: [
      {
        id: 'lupin_year1_chat_stack_books',
        minTier: 1,
        text: '卢平教授抱着一摞旧书，最上面那本封皮快脱落了。他用手掌压住裂口，像压住一个不愿添麻烦的旧伤。',
        choices: [
          { label: '帮他接过几本', delta: 4, response: '他把两本递给你，笑着说谢谢。书减轻后，他整个人像也轻了一点。' },
          { label: '问为什么不用新书', delta: 3, response: '他说旧书有旧书的好处，它们被很多双害怕的手翻过，所以比较懂学生。' },
        ],
      },
      {
        id: 'lupin_year1_chat_rain_window',
        minTier: 2,
        text: '雨点敲在黑魔法防御术教室窗上，卢平教授停下整理讲义，听了一会儿。那短暂停顿让教室忽然不像课堂，更像避雨的地方。',
        choices: [
          { label: '问他喜欢雨吗', delta: 4, response: '他说喜欢雨把人留在室内的借口。不是所有停下都需要解释成偷懒。' },
          { label: '帮他合上窗缝', delta: 3, response: '你把窗关紧，雨声变闷。卢平教授说谢谢，然后把巧克力盒往你那边推了推。' },
        ],
      },
    ],
  },
  siriusBlack: {
    activeChatEvents: [
      {
        id: 'sirius_year1_chat_dog_whistle',
        minTier: 1,
        text: '小天狼星把一声很低的口哨吹向空院子，像在叫某个不存在的伙伴。吹完后他自己笑了笑，表情里有一点转瞬即逝的寂寞。',
        choices: [
          { label: '问他在叫谁', delta: 4, response: '他说也许是过去的坏习惯。随后又补充，坏习惯如果会摇尾巴，就更难戒。' },
          { label: '装作没听见', delta: 3, response: '你没有追问。他伸了个懒腰，说你这个人偶尔挺懂事，虽然这话听起来不像夸奖。' },
        ],
      },
      {
        id: 'sirius_year1_chat_bad_advice',
        minTier: 2,
        text: '他在走廊拐角给一个高年级学生出主意，主意听起来很痛快，也很可能让人被关禁闭。说完后，他自己先皱了下眉。',
        choices: [
          { label: '问这是好建议吗', delta: 4, response: '小天狼星沉默一秒，说是痛快建议，不一定是好建议。能承认这点显然让他有点不爽。' },
          { label: '说也许别照做', delta: 3, response: '他看你一眼，笑着说你越来越像某些他认识的讨厌理智的人。可他还是把那个学生叫回来补充了两句。' },
        ],
      },
    ],
  },
  auroraSinistra: {
    activeChatEvents: [
      {
        id: 'sinistra_year1_chat_star_names',
        minTier: 1,
        text: '辛尼斯特拉教授在星图边缘写下几个星名，字迹很细。她每写完一个都会停顿，仿佛名字不只是标签，也是一次确认。',
        choices: [
          { label: '问为什么不用编号', delta: 4, response: '她说编号有用，名字也有用。一个帮助计算，一个提醒你抬头看的不是墨点。' },
          { label: '请她念一个名字', delta: 3, response: '她念得很慢，音节像从很远的地方传来。你忽然觉得星图安静了许多。' },
        ],
      },
      {
        id: 'sinistra_year1_chat_cold_hands',
        minTier: 2,
        text: '夜里的天文塔很冷，辛尼斯特拉教授把手指贴在杯壁上取暖，眼睛却没有离开望远镜。',
        choices: [
          { label: '提醒她手冻红了', delta: 3, response: '她看了一眼，说观测常常先冻到手，再冻到耐心。今晚手还可以，耐心也还可以。' },
          { label: '帮她递热茶', delta: 4, response: '她接过茶，轻声道谢。雾气升起来时，她说星光很远，热茶很近，二者都能让人继续看下去。' },
        ],
      },
    ],
  },
};

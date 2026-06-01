/**
 * 一年级学生主动聊聊加厚包（二）。
 *
 * 本包按“每人多条”推进，避免内容增长像挤牙膏；每条仍保留人物专属动作、
 * 校园位置和可回应的关系瞬间。
 */

export const STUDENT_YEAR1_CHAT_PLUS_BATCH_2_SCENES = {
  hermione: {
    activeChatEvents: [
      {
        id: 'hermione_year1_chat_library_clock',
        minTier: 1,
        text: '赫敏在图书馆抬头看钟，像刚刚发现时间竟然没有按她的计划走。她桌上摊着三本书，每本都夹着不同颜色的纸条。',
        choices: [
          { label: '提醒她休息一下', delta: 4, response: '她本想反驳，却在看见自己墨水瓶快空了时停住。她说只休息五分钟，随后真的把书合上了，虽然手还压在封面上。' },
          { label: '问哪本最有用', delta: 3, response: '赫敏立刻讲出三本书各自的优缺点，讲到一半才意识到你只是问“最有用”。她有点不好意思，但显然讲得很开心。' },
        ],
      },
      {
        id: 'hermione_year1_chat_corrected_map',
        minTier: 2,
        text: '赫敏在一张城堡小地图上改了好几处错误，尤其是活动楼梯的位置。她皱着眉说地图如果不承认变化，就只能算装饰。',
        choices: [
          { label: '帮她标出今天的楼梯', delta: 4, response: '你们把新路线补上去。赫敏满意地点头，说知识也要随时修订，否则再漂亮也会带人走错路。' },
          { label: '说城堡太难画了', delta: 3, response: '她承认确实难，但难不是不画的理由。说完她又加了一条注释，笔迹比刚才轻松了些。' },
        ],
      },
    ],
  },
  ron: {
    activeChatEvents: [
      {
        id: 'ron_year1_chat_second_helping',
        minTier: 1,
        text: '罗恩盯着盘子里最后一块烤土豆，明显想拿又觉得自己已经拿过太多。他看起来像在进行一场严肃的家庭资源谈判。',
        choices: [
          { label: '把土豆推给他', delta: 4, response: '罗恩立刻说你真是个好人，语气认真得有点夸张。他把土豆分成两半，硬是给你留了一份。' },
          { label: '开玩笑说它在等他', delta: 3, response: '他笑出声，说那他不能辜负一块土豆的期待。餐桌上的拘谨一下子散了。' },
        ],
      },
      {
        id: 'ron_year1_chat_old_jumper',
        minTier: 2,
        text: '罗恩把袖口往下扯了扯，那件旧毛衣有一点长，颜色也洗淡了。他发现你注意到，立刻摆出一副毫不在乎的样子。',
        choices: [
          { label: '说毛衣很暖和', delta: 4, response: '罗恩嘟囔说妈妈织的东西当然暖和。话是抱怨，手却没再扯袖口。' },
          { label: '问是不是家里寄来的', delta: 3, response: '他点头，说每年都寄，有时候颜色很可怕，但没收到会更可怕。这句话说得很轻。' },
        ],
      },
    ],
  },
  harry: {
    activeChatEvents: [
      {
        id: 'harry_year1_chat_owl_perch',
        minTier: 1,
        text: '哈利在猫头鹰棚屋外停下，看海德薇整理羽毛。风吹乱他的头发，他却难得没有急着走，像这里的安静比礼堂更容易让人呼吸。',
        choices: [
          { label: '问他在等信吗', delta: 3, response: '哈利摇头，又说也不完全是。他看着海德薇，说有时候只是知道有谁会飞回来，就已经很好了。' },
          { label: '陪他喂海德薇', delta: 4, response: '海德薇接过食物，轻轻啄了啄哈利手指。哈利笑了，那种笑不像新闻里的波特，只像一个被猫头鹰信任的男孩。' },
        ],
      },
      {
        id: 'harry_year1_chat_trophy_shadow',
        minTier: 2,
        text: '哈利路过奖杯陈列室时放慢脚步，目光在几个旧名字上停了一下。他没有靠近波特这个姓，只远远看着，像怕惊动玻璃里的过去。',
        choices: [
          { label: '不提他的父母', delta: 4, response: '你只问旁边那个奖杯是哪场比赛。哈利明显松了口气，认真看起说明，像终于不用先成为别人的故事。' },
          { label: '问他想进去看看吗', delta: 3, response: '他犹豫一会儿，说改天吧。这个“改天”不是拒绝，更像他还需要一点勇气。' },
        ],
      },
    ],
  },
  neville: {
    activeChatEvents: [
      {
        id: 'neville_year1_chat_seed_packet',
        minTier: 1,
        text: '纳威小心捧着一包种子，包装角被他捏得皱皱的。他说这是温室里剩下的，斯普劳特教授允许他试着种一小盆。',
        choices: [
          { label: '问它会长成什么', delta: 4, response: '纳威立刻讲起来，声音越来越稳。说到照料方法时，他甚至忘了紧张，像终于站在自己熟悉的土地上。' },
          { label: '说你想看它发芽', delta: 3, response: '他眼睛亮了一下，说如果真的发芽，他会告诉你。那语气像你已经替那包种子多给了一点信心。' },
        ],
      },
      {
        id: 'neville_year1_chat_mended_button',
        minTier: 2,
        text: '纳威低头缝校袍纽扣，针脚歪歪扭扭，却很努力。他每扎一针都停一下，确认自己没有把袖子和袍子缝在一起。',
        choices: [
          { label: '帮他拿稳布料', delta: 4, response: '你帮他绷平布料，纽扣终于稳住了。纳威松了口气，说奶奶大概还是会嫌丑，但至少它不会掉了。' },
          { label: '说这比魔咒还实用', delta: 3, response: '纳威笑了笑，说很多事魔咒能解决，但他总觉得亲手补好会更踏实一点。' },
        ],
      },
    ],
  },
  fredWeasley: {
    activeChatEvents: [
      {
        id: 'fred_year1_chat_blank_firework',
        minTier: 1,
        text: '弗雷德拿着一支还没点燃的小烟花，认真给它起名字。名字从“伟大的走廊灾难”改到“珀西的眉毛预警”，每一个都不像能通过审查。',
        choices: [
          { label: '建议一个温和点的名字', delta: 3, response: '弗雷德震惊地说温和是烟花最不需要的品质。不过他还是把你的建议记下，放进“必要时迷惑教授”的名单里。' },
          { label: '问它会不会伤人', delta: 4, response: '他收起玩笑，说不会，他们试过很多次。然后又补充，最多伤害尊严，尤其是珀西的。' },
        ],
      },
      {
        id: 'fred_year1_chat_mapless_route',
        minTier: 2,
        text: '弗雷德在一条岔路前停下，像突然和城堡进行某种无声谈判。他说今天左边闻起来比较像麻烦。',
        choices: [
          { label: '问麻烦是什么味道', delta: 4, response: '他说一点灰尘、一点费尔奇，还有一点“你明知道不该去但还是想去”。他说得太具体，显然经验丰富。' },
          { label: '建议走右边', delta: 3, response: '弗雷德叹气说理智获胜真是悲伤。走出几步后，左边传来洛丽丝夫人的叫声，他立刻宣布你是今日战术顾问。' },
        ],
      },
    ],
  },
  georgeWeasley: {
    activeChatEvents: [
      {
        id: 'george_year1_chat_pocket_string',
        minTier: 1,
        text: '乔治从口袋里拉出一长串彩色细绳，每隔几英寸打着不同的结。他说这是记事方法，当然，也可能是某种会让人打喷嚏的实验。',
        choices: [
          { label: '问哪个结代表什么', delta: 4, response: '他指给你看：一个代表作业，一个代表恶作剧，一个代表别忘了弗雷德也会忘。最后那个结最大。' },
          { label: '说这看起来很危险', delta: 3, response: '乔治认真点头，说危险和有条理并不冲突。然后他把绳子收回去，动作熟练得像收起一条小蛇。' },
        ],
      },
      {
        id: 'george_year1_chat_laugh_after',
        minTier: 2,
        text: '一个玩笑结束后，乔治没有马上跟着大家笑，而是看向被捉弄的人，确认对方也笑了，才放松肩膀。',
        choices: [
          { label: '说你注意到了', delta: 4, response: '乔治耸肩，说玩笑如果只有一边高兴，那就只是换了件衣服的欺负。说完他又恢复懒洋洋的表情。' },
          { label: '问弗雷德也这样想吗', delta: 3, response: '他笑了，说弗雷德想得没这么慢，但大多数时候会在关键处刹车。大多数时候。' },
        ],
      },
    ],
  },
  draco: {
    activeChatEvents: [
      {
        id: 'draco_year1_chat_family_letter',
        minTier: 1,
        text: '德拉科把一封家信折得边角笔直，像信纸也必须服从某种家族规矩。他看见你时，立刻把信收进书里。',
        choices: [
          { label: '不问信的内容', delta: 4, response: '你转而问明天的课。德拉科看起来有点意外，随后用挑剔的语气评价课程，却没有再把书抱得那么紧。' },
          { label: '问家里常写信吗', delta: 3, response: '他说当然，家里关心他在学校是否“一切得体”。这个词从他嘴里出来时，像一件不太合身的长袍。' },
        ],
      },
      {
        id: 'draco_year1_chat_green_apple',
        minTier: 2,
        text: '德拉科在礼堂拿着一只青苹果，迟迟没有咬下去。他似乎更在意苹果有没有光泽，而不是它甜不甜。',
        choices: [
          { label: '说看起来很酸', delta: 3, response: '他立刻说马尔福不怕酸，然后咬了一口，表情僵硬了一瞬。你装作没看见，他也装作没有发生。' },
          { label: '问为什么选这个', delta: 4, response: '他说颜色合适。停顿后又补充，小时候家里果盘总这样摆，看起来冷冰冰，但他习惯了。' },
        ],
      },
    ],
  },
  luna: {
    activeChatEvents: [
      {
        id: 'luna_year1_chat_button_moon',
        minTier: 1,
        text: '卢娜把一枚掉下来的纽扣举到光里，说它看起来像一颗不太圆的月亮。旁边有人笑，她却只是认真转动纽扣。',
        choices: [
          { label: '说月亮本来也会缺', delta: 4, response: '卢娜高兴地看向你，说是呀，所以不圆不代表坏掉。她把纽扣收好，像收起一颗小天体。' },
          { label: '问她要把它缝回去吗', delta: 3, response: '她说也许会，也许会先问问它想不想回原来的地方。这个问题听起来奇怪，却让你真的看了纽扣一眼。' },
        ],
      },
      {
        id: 'luna_year1_chat_humming_stairs',
        minTier: 2,
        text: '卢娜在活动楼梯上轻轻哼歌。楼梯转向时，她没有惊慌，反而像早就知道旋律会把她带到另一个地方。',
        choices: [
          { label: '问她知道会去哪吗', delta: 4, response: '她说不完全知道，但有些路如果只去已经知道的地方，就会很寂寞。楼梯停下时，你们竟然离目的地更近了。' },
          { label: '跟着哼两句', delta: 3, response: '卢娜偏头听了一会儿，说你的版本比较适合阴天。她说得真诚，让这句话完全不像嘲笑。' },
        ],
      },
    ],
  },
  ginnyWeasley: {
    activeChatEvents: [
      {
        id: 'ginny_year1_chat_borrowed_book',
        minTier: 1,
        text: '金妮抱着一本从罗恩那里借来的书，书页边角有许多旧折痕。她说这些折痕大概每个哥哥都贡献过一点。',
        choices: [
          { label: '问她喜欢旧书吗', delta: 4, response: '她说喜欢，也不喜欢。旧书像已经有很多故事，可有时候她也想第一个在某页留下痕迹。' },
          { label: '说折痕像地图', delta: 3, response: '金妮笑了，说那这本书大概去过不少危险地方，比如弗雷德和乔治的床底下。' },
        ],
      },
      {
        id: 'ginny_year1_chat_practice_throw',
        minTier: 2,
        text: '金妮在院子边把一个小石子抛起又接住，动作很快，眼神比平时更专注。她发现你看见后，立刻把石子攥进手心。',
        choices: [
          { label: '说她接得很准', delta: 4, response: '金妮没有否认，只小声说在家里不抢快一点，什么都轮不到自己。她又抛了一次，这次没有躲开你的目光。' },
          { label: '问是不是想打魁地奇', delta: 3, response: '她看向球场方向，说只是随便练练。那句“随便”说得太快，反而不像随便。' },
        ],
      },
    ],
  },
  seamus: {
    activeChatEvents: [
      {
        id: 'seamus_year1_chat_lucky_match',
        minTier: 1,
        text: '西莫把一根烧短的火柴夹在书页里，说这是幸运火柴。它看起来更像一次不太成功的魔咒后幸存的证据。',
        choices: [
          { label: '问它哪里幸运', delta: 3, response: '西莫说它没有把整张桌子点着，这已经相当幸运。说完他自己也觉得很有道理。' },
          { label: '建议别带进魔药课', delta: 4, response: '他严肃地点头，说这是成熟的判断。然后把火柴夹得更深，像成熟判断也需要一点纪念品。' },
        ],
      },
      {
        id: 'seamus_year1_chat_home_word',
        minTier: 2,
        text: '西莫讲到家里时夹了一个你没听过的词，发现你困惑后，他停下来解释，语气忽然比平时耐心很多。',
        choices: [
          { label: '请他再说一遍发音', delta: 4, response: '他重复了一遍，还纠正你的舌头位置。你学得不太像，他笑得很大声，但不是嘲笑。' },
          { label: '问那是家乡话吗', delta: 3, response: '他点头，说有些词翻成别的说法就没那个味道了。那一刻他看起来很想家，又很骄傲。' },
        ],
      },
    ],
  },
  deanThomas: {
    activeChatEvents: [
      {
        id: 'dean_year1_chat_poster_corner',
        minTier: 1,
        text: '迪安在寝室外修一张海报的翘角，指尖沾了一点胶。他把海报压平时很专注，像墙面终于愿意承认麻瓜足球也该在这里有位置。',
        choices: [
          { label: '问海报上的队伍', delta: 4, response: '迪安立刻讲起来，讲到关键进球时手势都变大了。他说完才笑，说霍格沃茨很多人完全不知道自己错过了什么。' },
          { label: '帮他压住另一边', delta: 3, response: '你帮他把海报贴平。迪安退后看了看，说现在好多了，像这里终于多了一点他原来的房间。' },
        ],
      },
      {
        id: 'dean_year1_chat_new_broom_shape',
        minTier: 2,
        text: '迪安在羊皮纸上画扫帚结构，旁边还标着他从麻瓜运动里借来的箭头。魔法和麻瓜线条挤在一起，却意外清楚。',
        choices: [
          { label: '问这些箭头是什么意思', delta: 4, response: '他解释起速度和方向，越说越兴奋。最后他说也许画出来以后，飞行就没那么像单纯靠胆子了。' },
          { label: '夸这个角度好看', delta: 3, response: '迪安把纸举远一点，笑着说你说得对，这个角度适合画进正式版。' },
        ],
      },
    ],
  },
  leeJordan: {
    activeChatEvents: [
      {
        id: 'lee_year1_chat_voice_warmup',
        minTier: 1,
        text: '李·乔丹在看台下清嗓子，练习把“危险的传球”说得更惊心动魄。他的声音在空看台之间弹回来，听起来像已经有观众。',
        choices: [
          { label: '建议他压低声音开场', delta: 4, response: '李试了一遍，立刻惊喜地说这样更像秘密要爆炸了。他把你的建议记下，称你为幕后战术大师。' },
          { label: '问他不怕教授听见吗', delta: 3, response: '他说怕，但优秀解说不能因为恐惧放弃排练。然后他把音量压低了三成，显然恐惧也有实际用途。' },
        ],
      },
      {
        id: 'lee_year1_chat_twins_material',
        minTier: 2,
        text: '李拿着小本子记录弗雷德和乔治的日常言行，说这是“未来伟大解说素材”。本子里显然已经有不少危险内容。',
        choices: [
          { label: '问会不会被他们发现', delta: 3, response: '李说发现也没关系，他们会提出修改意见，通常更危险也更好笑。' },
          { label: '提醒他也写自己的事', delta: 4, response: '他愣了一下，随后笑着在本子上写下“本人今日得到严肃建议”。他说这条可能很重要。' },
        ],
      },
    ],
  },
  percyWeasley: {
    activeChatEvents: [
      {
        id: 'percy_year1_chat_extra_ink',
        minTier: 1,
        text: '珀西在书包里放了两瓶备用墨水，并严肃地检查瓶塞。他说突发情况往往来自别人没有准备，而他不打算成为“别人”。',
        choices: [
          { label: '问会不会太多了', delta: 3, response: '珀西说一点也不多，直到他发现其中一瓶已经漏了一点。沉默片刻后，他承认“适量检查”也许同样重要。' },
          { label: '帮他擦掉墨迹', delta: 4, response: '你递给他布巾。珀西郑重道谢，仿佛你刚刚协助避免了一场行政灾难。' },
        ],
      },
      {
        id: 'percy_year1_chat_younger_shadow',
        minTier: 2,
        text: '珀西看见弗雷德和乔治从走廊尽头溜走，脸上的表情瞬间变得疲惫。他没有追，只把手里的通知捏得更紧。',
        choices: [
          { label: '问他总要管他们吗', delta: 4, response: '他说如果他不管，就会有人说韦斯莱家没有规矩。那句话说得板正，却藏着一点不像级长的委屈。' },
          { label: '说他们其实听你的', delta: 3, response: '珀西显然不信，但表情松动了一点。他说如果那也算听，那标准未免太低。' },
        ],
      },
    ],
  },
  pansy: {
    activeChatEvents: [
      {
        id: 'pansy_year1_chat_table_laugh',
        minTier: 1,
        text: '潘西在斯莱特林长桌边笑得很响，笑完却迅速看了一眼周围人的反应。那一眼很短，短到几乎会被当成骄傲。',
        choices: [
          { label: '不附和别人的刻薄', delta: 4, response: '你没有接那个嘲笑。潘西挑眉看你，像想说你扫兴，但最终只换了个不那么尖的话题。' },
          { label: '问她真的觉得好笑吗', delta: 3, response: '她说当然，随后又说有些人本来就该被笑。可她的语气没有刚才那么稳。' },
        ],
      },
      {
        id: 'pansy_year1_chat_mirror_check',
        minTier: 2,
        text: '潘西在盔甲反光里检查发型，发现一缕头发不肯听话。她烦躁地别回去，像那一缕头发在公开挑战她的体面。',
        choices: [
          { label: '递给她一枚发夹', delta: 4, response: '她接过发夹，说你准备得倒齐全。语气仍带刺，但她没有把发夹还回来。' },
          { label: '说这样也不难看', delta: 3, response: '潘西看你一眼，说你安慰人的水平很普通。不过她重新看向盔甲时，似乎没那么生气了。' },
        ],
      },
    ],
  },
  blaiseZabini: {
    activeChatEvents: [
      {
        id: 'blaise_year1_chat_empty_seat',
        minTier: 1,
        text: '布雷司在礼堂挑了一个靠边的位置，那里能看见整张长桌，却不太容易被卷进谈话。他坐下时动作从容，像这是精心选择的距离。',
        choices: [
          { label: '问能不能坐旁边', delta: 4, response: '他看了你一会儿，说如果你不急着把沉默填满，就可以。你坐下后，他竟然先开口问了今天的课。' },
          { label: '问他为什么坐这里', delta: 3, response: '他说边缘有时比中央看得清楚。说完他端起杯子，像这已经足够解释。' },
        ],
      },
      {
        id: 'blaise_year1_chat_expensive_glove',
        minTier: 2,
        text: '布雷司摘下一只做工很好的手套，慢慢抚平指节处的褶皱。那动作优雅，却不炫耀，像他早就习惯了好东西也需要被小心对待。',
        choices: [
          { label: '说手套很好看', delta: 3, response: '他淡淡说谢谢，没有得意。片刻后又补充，这是母亲选的，她对细节从不宽容。' },
          { label: '问怕不怕弄脏', delta: 4, response: '布雷司说当然怕，但东西如果只因为怕脏就不使用，也只是另一种浪费。这个回答比你预想中实在。' },
        ],
      },
    ],
  },
  crabbe: {
    activeChatEvents: [
      {
        id: 'crabbe_year1_chat_slow_answer',
        minTier: 1,
        text: '克拉布在课堂后还盯着黑板，显然有个问题没想明白。其他人已经走远，他却不肯立刻放弃，只是越盯越皱眉。',
        choices: [
          { label: '问他卡在哪', delta: 4, response: '他指了指中间一步，声音很低。你没有笑，他便真的试着说出自己的想法，虽然慢，但并非没有逻辑。' },
          { label: '建议从前一步看', delta: 3, response: '克拉布照做，过了一会儿终于点头。那点明白来得不响亮，却让他整个人不再那么僵。' },
        ],
      },
      {
        id: 'crabbe_year1_chat_guarded_door',
        minTier: 2,
        text: '克拉布站在地下教室门口，像被谁安排在这里等人。他看起来不太高兴，却仍然尽职地挡住一阵穿堂风。',
        choices: [
          { label: '问他冷不冷', delta: 3, response: '他愣了一下，似乎没想到有人会问这个。然后他说还行，但把袍子拢紧了一点。' },
          { label: '陪他站一会儿', delta: 4, response: '你没有说太多。克拉布过了很久才嘟囔一句，其实等人很无聊。这个抱怨听起来普通，却像难得的真话。' },
        ],
      },
    ],
  },
  goyle: {
    activeChatEvents: [
      {
        id: 'goyle_year1_chat_broken_lace',
        minTier: 1,
        text: '高尔的鞋带断了一截，他蹲在楼梯旁笨拙地打结。手指太大，细绳太短，他越急越打不好。',
        choices: [
          { label: '递给他一截备用绳', delta: 4, response: '高尔接过去，低声说谢谢。他把新绳系上后站起来，像终于摆脱了一件让人难堪的小事。' },
          { label: '帮他挡住人群视线', delta: 3, response: '你站在旁边，路过的人少看了几眼。高尔没说什么，但离开时轻轻碰了碰你的肩，算是一种谢意。' },
        ],
      },
      {
        id: 'goyle_year1_chat_leftover_pie',
        minTier: 2,
        text: '高尔看见桌上剩下一小块馅饼，先看了看德拉科在不在，又看了看周围有没有人注意。他的犹豫比平时更像一个普通学生。',
        choices: [
          { label: '说没人要就吃吧', delta: 4, response: '他迅速拿走馅饼，吃到一半才想起要点头致谢。那点迟来的礼貌有些笨，却很真实。' },
          { label: '问他喜欢什么馅', delta: 3, response: '高尔想了很久，说肉馅。停顿后补充，苹果也行。这个答案像一次谨慎扩展的信任。' },
        ],
      },
    ],
  },
  marcusFlint: {
    activeChatEvents: [
      {
        id: 'marcus_year1_chat_bludger_bruise',
        minTier: 1,
        text: '马库斯·弗林特卷起袖子看手臂上的淤青，表情不是疼，而是评估。他像在判断这块青紫是否证明今天训练足够有价值。',
        choices: [
          { label: '问他不疼吗', delta: 3, response: '他嗤笑一声，说疼当然疼，不疼就说明没碰上真东西。可他说话时还是把袖子放下了。' },
          { label: '说训练也要留到明天', delta: 4, response: '弗林特本想反驳，最后只说低年级懂什么。过了一会儿，他把下一轮训练少划掉了一项。' },
        ],
      },
      {
        id: 'marcus_year1_chat_team_list',
        minTier: 2,
        text: '弗林特看着一张队员名单，羽毛笔在某个名字旁停了很久。他的脸色很凶，却迟迟没有划掉那个人。',
        choices: [
          { label: '问那人飞得不好吗', delta: 4, response: '他说飞得不稳，但胆子够。对弗林特来说，这显然是个复杂问题，因为他既讨厌不稳，也尊重胆子。' },
          { label: '建议再给一次机会', delta: 3, response: '他瞪你一眼，说队伍不是慈善。可名单最终还是没少那个名字。' },
        ],
      },
    ],
  },
  choChang: {
    activeChatEvents: [
      {
        id: 'cho_year1_chat_wet_gloves',
        minTier: 1,
        text: '秋·张把训练手套摊在看台边晾干，雨水顺着皮革边缘滴下来。她没有抱怨天气，只仔细把每根手指的位置理顺。',
        choices: [
          { label: '问雨天也训练吗', delta: 4, response: '她说比赛不会总挑晴天。说这话时她笑了一下，平静里带着一点很稳的倔强。' },
          { label: '帮她按住被风吹起的手套', delta: 3, response: '你按住一只手套。秋向你道谢，说风比某些对手更难预测，至少对手不会把手套吹走。' },
        ],
      },
      {
        id: 'cho_year1_chat_ravenclaw_riddle',
        minTier: 2,
        text: '秋在拉文克劳门口等朋友，门环刚问完谜题。她答对后没有进去，而是站在旁边听另一个学生慢慢想。',
        choices: [
          { label: '问她为什么不提示', delta: 4, response: '她说提示太快会偷走别人答出来的那一刻。等对方终于想通时，她比对方还先笑了。' },
          { label: '夸她很有耐心', delta: 3, response: '秋摇头说不是耐心，只是记得自己第一次也卡了很久。' },
        ],
      },
    ],
  },
  padmaPatil: {
    activeChatEvents: [
      {
        id: 'padma_year1_chat_twin_note',
        minTier: 1,
        text: '帕德玛读着帕瓦蒂传来的便条，嘴角一动，像想笑又不想承认。便条末尾画了一个夸张的小星星，显然不是她的风格。',
        choices: [
          { label: '问是帕瓦蒂写的吗', delta: 3, response: '她点头，说除了帕瓦蒂没人会把提醒写得像舞会邀请。语气嫌弃，却把便条折得很仔细。' },
          { label: '说你们很不一样', delta: 4, response: '帕德玛说当然，不一样不是关系不好。她说这句话时很平静，像已经解释过许多次。' },
        ],
      },
      {
        id: 'padma_year1_chat_spare_answer',
        minTier: 2,
        text: '帕德玛在羊皮纸旁边写了另一个答案，标注“备用”。她说有些问题不止一种正确，但有些教授不总是欣赏这一点。',
        choices: [
          { label: '问哪个答案更像她', delta: 4, response: '她想了很久，指向备用答案。然后她笑了一下，说所以它才是备用。' },
          { label: '建议都交上去', delta: 3, response: '帕德玛摇头，说策略也是智慧的一部分。不过她把备用答案留下了，没有划掉。' },
        ],
      },
    ],
  },
  terryBoot: {
    activeChatEvents: [
      {
        id: 'terry_year1_chat_door_knocker',
        minTier: 1,
        text: '泰瑞站在拉文克劳门环前，明明已经答对谜题，却还在追问另一个可能答案是否也成立。门环看起来快被他问烦了。',
        choices: [
          { label: '提醒门快开了', delta: 3, response: '泰瑞这才回过神，说对，进门也是当前目标之一。他迈进去时还在回头看门环。' },
          { label: '听他讲另一个答案', delta: 4, response: '他兴奋地解释起来，最后承认也许门环的问题比看起来更宽。门环沉默地晃了晃，像拒绝继续参与。' },
        ],
      },
      {
        id: 'terry_year1_chat_ink_diagram',
        minTier: 2,
        text: '泰瑞把一个推理画成图，箭头密密麻麻。中间一滴墨水晕开，刚好盖住最关键的一步，他看起来受到了严肃打击。',
        choices: [
          { label: '帮他补回那一步', delta: 4, response: '你们凭记忆把那一步补上。泰瑞说这证明记录系统需要冗余，随即又在旁边加了一个备份框。' },
          { label: '说图已经够清楚了', delta: 3, response: '他盯着图看了一会儿，勉强接受。对泰瑞来说，勉强接受已经很接近放松。' },
        ],
      },
    ],
  },
  michaelCorner: {
    activeChatEvents: [
      {
        id: 'michael_year1_chat_too_fast',
        minTier: 1,
        text: '迈克尔讲一个观点讲得太快，讲完发现对面的人已经完全跟丢。他停住，表情像刚意识到胜利不能建立在别人没听懂上。',
        choices: [
          { label: '请他慢慢重讲', delta: 4, response: '他吸了口气，从第一步重新讲。第二遍清楚很多，他自己也发现了，语气少了点锋利。' },
          { label: '说你差点没跟上', delta: 3, response: '迈克尔先说“差点就还好”，随后看见你的表情，改口说好吧，下次慢一点。' },
        ],
      },
      {
        id: 'michael_year1_chat_window_strategy',
        minTier: 2,
        text: '迈克尔在窗边看魁地奇训练，嘴上说只是随便看看，手却在纸上画了三个战术箭头。',
        choices: [
          { label: '问他支持谁', delta: 3, response: '他立刻说支持更聪明的打法。停顿后又承认，如果秋在场，他的判断可能会稍微复杂一点。' },
          { label: '讨论那条路线', delta: 4, response: '你指出一个盲点，他认真看了很久，最后说这次你有道理。能让他说出这句已经很不容易。' },
        ],
      },
    ],
  },
  anthonyGoldstein: {
    activeChatEvents: [
      {
        id: 'anthony_year1_chat_shared_quill',
        minTier: 1,
        text: '安东尼把自己的备用羽毛笔借给一个忘带文具的新生，还认真说明用完要放平，别把笔尖压坏。',
        choices: [
          { label: '说他很细心', delta: 3, response: '他说工具被好好对待，下一位使用者才不会倒霉。听起来像规矩，也像体贴。' },
          { label: '帮他找回笔套', delta: 4, response: '你在桌下找到笔套。安东尼松了口气，说小东西失踪最能证明秩序有多脆弱。' },
        ],
      },
      {
        id: 'anthony_year1_chat_fair_turn',
        minTier: 2,
        text: '公共休息室里几个人抢着发表看法，安东尼敲了敲桌面，让刚才一直没说话的人先讲。那一下不重，却很有效。',
        choices: [
          { label: '说他控场很好', delta: 4, response: '安东尼说不是控场，只是让轮到的人真的轮到。这个区别对他而言显然很重要。' },
          { label: '问没人听怎么办', delta: 3, response: '他说那就再敲一次，必要时把规则先讲清楚。温和不等于含糊。' },
        ],
      },
    ],
  },
  cedricDiggory: {
    activeChatEvents: [
      {
        id: 'cedric_year1_chat_after_practice',
        minTier: 1,
        text: '塞德里克训练后留下来把散落的护具收进箱子。其他人已经走了，他没有显得委屈，只把每件东西放回该在的位置。',
        choices: [
          { label: '帮他一起收', delta: 4, response: '他笑着道谢，说这样明天大家就不会一开始就乱成一团。那不是抱怨，更像他习惯把事情做好。' },
          { label: '问为什么总是他收', delta: 3, response: '塞德里克说不总是，只是今天轮到他看见。这个回答简单得让人没法反驳。' },
        ],
      },
      {
        id: 'cedric_year1_chat_small_win',
        minTier: 2,
        text: '有人夸塞德里克刚才飞得好，他先说谢谢，然后立刻补充另一个队员的传球更关键。那句话说得自然，没有一点勉强。',
        choices: [
          { label: '说他不用总谦虚', delta: 3, response: '他笑了，说不是谦虚，是事实。停顿后又承认，自己也确实飞得不错。' },
          { label: '问他怎么注意到的', delta: 4, response: '塞德里克说比赛里没人是单独赢的。能看见别人做了什么，自己才知道下一步该往哪飞。' },
        ],
      },
    ],
  },
  hannahAbbott: {
    activeChatEvents: [
      {
        id: 'hannah_year1_chat_wrong_door',
        minTier: 1,
        text: '汉娜站在一扇陌生门前，手里攥着课表，脸上写满“我绝对走错了但不想承认”。门后传来盔甲挪动的声音，她更紧张了。',
        choices: [
          { label: '陪她一起找路', delta: 4, response: '你们沿着走廊重新数门。找到正确教室时，汉娜长出一口气，说和别人一起迷路比一个人迷路好多了。' },
          { label: '说很多人都会走错', delta: 3, response: '她点点头，笑得有点不好意思。她说霍格沃茨好像总能在她刚记住路线时改变主意。' },
        ],
      },
      {
        id: 'hannah_year1_chat_kind_note',
        minTier: 2,
        text: '汉娜在一本借来的书里发现一张鼓励便条。她反复看那行字，像在确认有人真的写给了她。',
        choices: [
          { label: '问是谁写的', delta: 3, response: '她摇头说不知道，但这反而很好。匿名的善意不会要求她立刻回应，只是安静地放在那里。' },
          { label: '建议她也留一张', delta: 4, response: '汉娜眼睛亮了。她认真想了很久，最后写下一句很简单的话，夹进另一本可能会被紧张新生借走的书里。' },
        ],
      },
    ],
  },
  ernieMacmillan: {
    activeChatEvents: [
      {
        id: 'ernie_year1_chat_family_phrase',
        minTier: 1,
        text: '厄尼提到家族格言时坐得更直，像那几个词本身会检查他的姿势。他说完后又有点担心自己听起来太夸张。',
        choices: [
          { label: '问格言是什么意思', delta: 4, response: '厄尼立刻解释，越说越认真。讲到最后，他承认自己有时候也分不清是在继承荣誉，还是在努力配得上它。' },
          { label: '说听起来很正式', delta: 3, response: '他尴尬地笑了，说家里很多东西都很正式，包括餐巾折法。这个补充让他显得亲近不少。' },
        ],
      },
      {
        id: 'ernie_year1_chat_checked_fact',
        minTier: 2,
        text: '厄尼拿着一本书回来，郑重宣布自己刚才说错了一个日期。他看起来不像被迫纠正，倒像准备完成一项道德义务。',
        choices: [
          { label: '谢谢他特地说明', delta: 4, response: '厄尼明显松了口气，说错误如果不纠正就会越滚越大。虽然只是一年号，他仍然觉得该回来讲清楚。' },
          { label: '说没人会发现的', delta: 3, response: '他严肃地说正因为没人发现，才更应该自己发现。那一刻他的郑重一点也不滑稽。' },
        ],
      },
    ],
  },
  susanBones: {
    activeChatEvents: [
      {
        id: 'susan_year1_chat_safe_corner',
        minTier: 1,
        text: '苏珊在图书馆挑了一个能看见门的位置坐下。她把书放好后才真正开始读，像确认周围环境是她进入故事前的一部分。',
        choices: [
          { label: '问这里是不是比较安静', delta: 3, response: '她说安静，也看得见人来人往。这个位置让她觉得自己既没有躲起来，也不会被突然吓到。' },
          { label: '陪她坐一会儿', delta: 4, response: '你没有多问。苏珊翻过一页后轻声说谢谢，像感谢的不是陪伴本身，而是你没有把它说破。' },
        ],
      },
      {
        id: 'susan_year1_chat_careful_question',
        minTier: 2,
        text: '苏珊想问一个课堂问题，却把手抬到一半又放下。她不是不知道答案，只像在衡量自己的声音会不会太响。',
        choices: [
          { label: '鼓励她问出来', delta: 4, response: '她终于举手，问题问得很清楚。教授回答后，她低头写笔记，嘴角却轻轻弯了一下。' },
          { label: '课后陪她去问', delta: 3, response: '你们等人少些再过去。苏珊说这样也很好，有些勇气可以绕一小段路。' },
        ],
      },
    ],
  },
  justinFinchFletchley: {
    activeChatEvents: [
      {
        id: 'justin_year1_chat_old_school',
        minTier: 1,
        text: '贾斯廷讲起自己原本差点去的麻瓜学校，语气像在描述一条没有走上的路。他说那里也有制服，只是不会自己把墨水打翻。',
        choices: [
          { label: '问他会想那里吗', delta: 4, response: '他承认会想。有时候不是后悔，只是想知道另一个自己现在会在做什么。说完他又笑，说大概不会被楼梯带跑。' },
          { label: '说霍格沃茨也挺适合他', delta: 3, response: '贾斯廷挺了挺背，说他正在努力适合这里。那句话很正式，却也很真诚。' },
        ],
      },
      {
        id: 'justin_year1_chat_cutlery_confusion',
        minTier: 2,
        text: '贾斯廷在礼堂看着自动添菜的餐盘，仍然会短暂露出“这不该发生”的表情。他很快调整好，装作自己一直都习惯。',
        choices: [
          { label: '说你第一次也会吓到', delta: 4, response: '他立刻放松，笑着承认自己刚才差点对餐盘道谢。你们都觉得这其实并不坏。' },
          { label: '问麻瓜学校吃什么', delta: 3, response: '他开始描述餐厅和排队，越说越生动。霍格沃茨的盘子在旁边自动添了一勺土豆泥，像不服输。' },
        ],
      },
    ],
  },
};

/**
 * affinity-students-extra-scenes.js
 * 补充同学的人物可玩内容分片。
 *
 * 主文件负责登记人物；这里继续补主动聊天与探索偶遇，让 npc-events.js
 * 中已经露面的人不只是背景名字，而是能被玩家反复结交的人。
 */

export const STUDENT_CHARACTER_ENRICHMENTS = {
  seamus: {
    activeChatEvents: [
      {
        id: 'seamus_chat_firework',
        minTier: 2,
        text: '西莫在废弃教室门口把一小撮灰从袖口拍下来，神情非常努力地保持镇定。墙边的烛台还在冒烟，像刚刚见证了一个被他称为“几乎成功”的咒语。',
        choices: [
          { label: '问他哪里几乎成功', delta: 3, response: '西莫立刻精神起来，指着烛台解释火花本来应该转成一朵花。你听完才明白，爆炸只是最后一步偏离得太热情。' },
          { label: '帮他把灰扫掉', delta: 2, response: '他一边帮忙一边小声说这次真的比上次好。你没有反驳，这让他看起来比被夸奖还高兴。' },
        ],
      },
      {
        id: 'seamus_chat_confidence',
        minTier: 4,
        text: '西莫这次没有讲笑话。他拿着魔杖看了很久，忽然问你是不是有些人就是比别人更容易把事情搞砸。',
        choices: [
          { label: '说失败也能练出来', delta: 5, response: '他沉默了一会儿，随后用力点头。那不是平时那种逞强的点头，更像终于有人把他一直想相信的话说出来。' },
          { label: '让他再试一次', delta: 4, response: '西莫深吸一口气重新举起魔杖。这一次火花很小，却稳稳停在空中，没有炸开。你们都假装这只是普通进步。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'seamus_enc_after_class',
        area: '魔咒课教室',
        minTier: 2,
        text: '下课后的魔咒课教室里，西莫一个人留下来擦黑板。黑板角落有一块被熏得发黑，他擦了很久也没擦干净。',
        choices: [
          { label: '陪他一起擦', delta: 3, response: '你们擦到手指发酸，黑印仍然淡淡留着。西莫看着它，忽然笑了，说至少这次没有把整块黑板炸下来。' },
          { label: '说这像战绩', delta: 2, response: '西莫大笑起来，随即又紧张地看了一眼门口。笑声压低以后，他承认自己其实挺怕教授失望。' },
        ],
      },
    ],
  },
  deanThomas: {
    activeChatEvents: [
      {
        id: 'dean_chat_poster',
        minTier: 2,
        text: '迪安在格兰芬多公共休息室的窗边画新海报。火光映在颜料上，红色和金色被他调得比学院围巾更亮一点。',
        choices: [
          { label: '问他为什么这样配色', delta: 3, response: '迪安给你看了草稿边缘的小标记，说颜色要从看台最后一排也能认出来。他不是随便画漂亮，是在想人群怎么看见它。' },
          { label: '聊麻瓜海报', delta: 3, response: '他明显高兴起来，讲起麻瓜世界的球队海报和电影广告。那一刻霍格沃茨的壁炉旁多了一点伦敦街角的颜色。' },
        ],
      },
      {
        id: 'dean_chat_home',
        minTier: 4,
        text: '迪安盯着一封家信看了很久，信纸折痕被他反复压平。看见你走近，他没有立刻把信收起来。',
        choices: [
          { label: '问他想家吗', delta: 5, response: '他笑了一下，说当然想，但不是每天都说出来。麻瓜家里的事和魔法学校离得太远，有时候远得像两个不同的人生。' },
          { label: '陪他坐一会儿', delta: 4, response: '你没有追问信里写了什么。过了一会儿，迪安主动说起家里人对霍格沃茨的想象，说到一半自己先笑了。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'dean_enc_quidditch_sketch',
        area: '魁地奇看台',
        minTier: 2,
        text: '看台空下来以后，迪安还坐在高处速写球场。风把纸角掀起来，他用手肘压住，仍然不肯停笔。',
        choices: [
          { label: '帮他按住纸角', delta: 3, response: '他顺势把最后几根球门柱线条画完，抬头时眼睛很亮。「你看，」他说，「从这里看，球场像一张会飞的地图。」' },
          { label: '问能不能看看', delta: 2, response: '迪安有点不好意思，但还是把画递给你。纸上不是比赛的热闹，而是训练后留下的风和草痕。' },
        ],
      },
    ],
  },
  leeJordan: {
    activeChatEvents: [
      {
        id: 'lee_chat_commentary',
        minTier: 2,
        text: '李·乔丹在大礼堂长桌边练习解说词，把一盘烤土豆描述得像正在高速俯冲的鬼飞球。',
        choices: [
          { label: '给他补一句解说', delta: 3, response: '他愣了一秒，随即兴奋地接上你的句子。旁边几个人笑得差点呛到，李郑重宣布你有“副解说潜质”。' },
          { label: '提醒他别被麦格听见', delta: 2, response: '李立刻把声音降到几乎耳语，但语速一点没慢。他说真正的解说员必须在危险环境下保持稳定发挥。' },
        ],
      },
      {
        id: 'lee_chat_twins',
        minTier: 4,
        text: '李·乔丹在走廊窗边等人，手里拿着一个明显不该出现在学校规章里的小盒子。他看见你，先把盒子往身后藏了一下。',
        choices: [
          { label: '问是不是双胞胎的东西', delta: 4, response: '他露出“你已经知道太多”的表情，却没有否认。随后他压低声音解释自己只是负责观察效果，理论上非常无辜。' },
          { label: '问他为什么总帮他们', delta: 5, response: '李想了想，说因为有人得负责把精彩部分讲给世界听。说完他自己也安静了一瞬，像这句话比玩笑更认真。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'lee_enc_stands',
        area: '魁地奇看台',
        minTier: 2,
        text: '比赛还没开始，李·乔丹已经占好了最适合观察全场的位置。他把羊皮纸卷成临时话筒，对着空看台试音。',
        choices: [
          { label: '坐到旁边听', delta: 2, response: '他立刻把你当成试播观众，连讲三段开场。你发现他的热闹不是乱喊，每个队员的位置他都看得很准。' },
          { label: '指出一句太夸张', delta: 3, response: '李不但没生气，还认真修改了那句，然后说夸张和失实之间有一条非常细的线，他正在练习别跨过去太远。' },
        ],
      },
    ],
  },
  percyWeasley: {
    activeChatEvents: [
      {
        id: 'percy_chat_prefect',
        minTier: 2,
        text: '珀西在教师办公室走廊外整理一叠申请表，每张纸的边角都对得过分整齐。他看见你，像是在判断你会不会把这叠纸弄乱。',
        choices: [
          { label: '问级长工作累不累', delta: 3, response: '他先说这是职责，随后才承认有时确实很累。承认这件事让他有点不自在，但他没有把话收回去。' },
          { label: '帮他分表格', delta: 2, response: '珀西立刻告诉你按学院、年级和紧急程度分三堆。你照做后，他罕见地说了一句“效率不错”。' },
        ],
      },
      {
        id: 'percy_chat_family',
        minTier: 4,
        text: '珀西在大礼堂门口看着双胞胎远去，表情介于恼火和担心之间。他注意到你，却没有立刻摆出级长的架子。',
        choices: [
          { label: '说他们其实听他的', delta: 4, response: '珀西显然不相信，但嘴角动了一下。他说他们只在惹麻烦时听得见他的声音，可你听出他并不真的只是在抱怨。' },
          { label: '问他会不会羡慕他们', delta: 5, response: '他沉默了很久，最后说自由也需要有人收拾后果。这句话听起来像规训，也像他给自己的解释。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'percy_enc_noticeboard',
        area: '一楼走廊',
        minTier: 2,
        text: '公告栏前挤满了学生，珀西努力让每个人按顺序看通知。他声音严肃，但手里那张名单已经被挤得皱了边。',
        choices: [
          { label: '帮他维持队伍', delta: 3, response: '你把几个低年级学生劝到旁边等，珀西明显松了口气。他没有当众夸你，只在名单边缘做了一个小小记号。' },
          { label: '提醒他纸快破了', delta: 2, response: '珀西低头一看，立刻把名单换到另一只手。他清了清嗓子，说你的观察“尚算及时”。' },
        ],
      },
    ],
  },
  pansy: {
    activeChatEvents: [
      {
        id: 'pansy_chat_gloves',
        minTier: 2,
        text: '潘西在斯莱特林公共休息室外整理手套，动作慢而挑剔。她看见你注意到线头，立刻把手套翻了过去。',
        choices: [
          { label: '假装没看见线头', delta: 2, response: '她斜了你一眼，像在判断你是不是故意体面。几秒后，她用没那么尖的语气问你来这里做什么。' },
          { label: '说这颜色很衬她', delta: 3, response: '潘西明显准备好了反击，却被这句普通称赞堵住。她哼了一声，说你眼光至少还没坏到无可救药。' },
        ],
      },
      {
        id: 'pansy_chat_table',
        minTier: 4,
        text: '潘西在长桌旁看着马尔福和别人说话，表情不像平时那样夸张。她很快发现你在看，立刻恢复了挑剔神色。',
        choices: [
          { label: '问她是不是累了', delta: 5, response: '她第一反应是嘲笑这个问题，可话到嘴边又停住。最后她只说，不是所有人都能一直表演得很有精神。' },
          { label: '说你不会告诉别人', delta: 4, response: '潘西沉默片刻，把视线转回长桌。她没有感谢你，但这次没有把你赶走。对她来说，这已经很接近信任。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'pansy_enc_hall',
        area: '霍格沃茨大礼堂',
        minTier: 2,
        text: '潘西在长桌边挑剔地评价一枚胸针，旁边的女生们笑得很轻。她说到一半看见你，语气立刻变得更尖。',
        choices: [
          { label: '不被她激怒', delta: 2, response: '你没有接那句刺。潘西像是失去了一点乐趣，却也因此没继续追打。她换了个话题，语气微妙地平和了一些。' },
          { label: '反问她真正意见', delta: 3, response: '她挑眉看你，终于说那枚胸针其实做工不错，只是戴的人太急着炫耀。这个判断刻薄，却并不空洞。' },
        ],
      },
    ],
  },
  blaiseZabini: {
    activeChatEvents: [
      {
        id: 'blaise_chat_observe',
        minTier: 2,
        text: '布雷司靠在地牢走廊的墙边，像是在等一场已经知道结果的争论结束。他没有参与，却显然听见了每一句。',
        choices: [
          { label: '问他为什么不说话', delta: 3, response: '他看了你一眼，说有些人说得越多，暴露得越多。他的声音很平静，像只是陈述天气。' },
          { label: '说沉默也会表态', delta: 3, response: '布雷司终于笑了一下，说你比看起来更会惹麻烦。这个评价听起来不像责备。' },
        ],
      },
      {
        id: 'blaise_chat_family',
        minTier: 4,
        text: '布雷司正在读一封精致得过分的家信，信纸边缘带着淡淡香气。他合上信，却没有把它收起来。',
        choices: [
          { label: '问家里来信了吗', delta: 4, response: '他没有正面回答，只说有些信不是为了让人高兴，而是提醒你该表现成什么样子。说完他把信折得很平。' },
          { label: '不追问信的内容', delta: 5, response: '你只是换了个轻一点的话题。布雷司似乎因此放松了些，第一次主动问起你的近况。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'blaise_enc_library',
        area: '城堡图书馆',
        minTier: 2,
        text: '布雷司在图书馆角落翻一本薄薄的诗集，和周围厚重的课本格格不入。他发现你看见书名，没有立刻合上。',
        choices: [
          { label: '问他喜欢诗吗', delta: 3, response: '他说谈不上喜欢，只是有些话由别人写出来比较安全。这个回答很轻，却让你听出一点不愿明说的东西。' },
          { label: '推荐另一首', delta: 2, response: '布雷司听完标题，没有评价好坏，只把名字记在羊皮纸角落。你看见他后来真的去找了。' },
        ],
      },
    ],
  },
  crabbe: {
    activeChatEvents: [
      {
        id: 'crabbe_chat_food',
        minTier: 2,
        text: '克拉布在厨房附近被一阵烤肉香味绊住脚步，手里还攥着半块没来得及藏好的馅饼。他看见你，表情立刻变得警惕。',
        choices: [
          { label: '问他哪种馅饼最好吃', delta: 3, response: '克拉布明显没想到你会问这个。他认真比较了三种馅料，严肃程度像在讨论魁地奇战术。' },
          { label: '提醒他擦掉碎屑', delta: 2, response: '他低头看见袍子上的碎屑，耳朵红了一点。你没有笑，他便含糊地说了声谢。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'crabbe_enc_dungeon',
        area: '斯莱特林公共休息室',
        minTier: 2,
        text: '地牢外有几个学生在笑克拉布答错了问题。他站得很僵，像不知道该还嘴还是装作没听见。',
        choices: [
          { label: '岔开话题', delta: 3, response: '你问起魁地奇训练，克拉布立刻抓住这个台阶。等那群人走远，他才低声说他其实知道刚才那题的后半段。' },
          { label: '直接说那并不好笑', delta: 2, response: '笑声停了一下。克拉布没有看你，却把肩膀放松了些。这个动作很小，但你看见了。' },
        ],
      },
    ],
  },
  goyle: {
    activeChatEvents: [
      {
        id: 'goyle_chat_waiting',
        minTier: 2,
        text: '高尔站在走廊盔甲旁边等人，盔甲偶尔动一下，他也跟着看一眼。你站过去时，他没有挪开。',
        choices: [
          { label: '一起等一会儿', delta: 3, response: '你们沉默着站了几分钟。高尔忽然说那副盔甲每次有人撒谎都会咔嗒一声，语气认真得不像开玩笑。' },
          { label: '问他是不是不爱说话', delta: 2, response: '他想了很久才回答，说话多的人也未必说得对。这句话慢，却不笨。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'goyle_enc_hall',
        area: '一楼走廊',
        minTier: 2,
        text: '一群低年级学生被移动楼梯吓得站在原地，高尔路过时停了一下，看起来像想帮忙又不知道该怎么开口。',
        choices: [
          { label: '请他帮忙拦住人群', delta: 3, response: '高尔点点头，往楼梯口一站，效果立竿见影。低年级学生顺利过去后，他看起来有点意外自己真的帮上了忙。' },
          { label: '和他一起指路', delta: 2, response: '你负责解释，高尔负责指方向。事情结束后，他只说了一句“那边比较近”，像是在补充自己迟到的善意。' },
        ],
      },
    ],
  },
  marcusFlint: {
    activeChatEvents: [
      {
        id: 'flint_chat_captain',
        minTier: 2,
        text: '弗林特在魁地奇球场边训人，声音粗得能穿过半个看台。等队员散开，他才弯腰重新系紧一只旧护具。',
        choices: [
          { label: '问队长是不是很难当', delta: 3, response: '他冷笑一声，说难的是让一群自以为聪明的人按计划飞。可他没有否认“难”这个字。' },
          { label: '指出他护具裂了', delta: 2, response: '弗林特低头看了一眼，骂了一句，随后把护具换下。临走前他说你眼睛挺尖，别到处乱说。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'flint_enc_pitch',
        area: '魁地奇球场',
        minTier: 2,
        text: '训练结束后，弗林特一个人把球箱拖回储物间。草地上全是扫帚压出的乱痕，他的脸色比天色还沉。',
        choices: [
          { label: '帮他推球箱', delta: 3, response: '他先说不用，球箱卡住时又没有阻止你搭手。推到门口后，他粗声说今天这群人飞得像散架的椅子。' },
          { label: '问哪一段训练最糟', delta: 2, response: '弗林特立刻说出三个问题，精准得让你惊讶。他脾气很坏，但确实知道每个队员哪里没练到位。' },
        ],
      },
    ],
  },
  choChang: {
    activeChatEvents: [
      {
        id: 'cho_chat_quidditch',
        minTier: 2,
        text: '秋·张在看台最上层收起望远镜，风把她的头发吹到脸侧。她刚看完一场训练，眼神还停在球场上。',
        choices: [
          { label: '问她刚才那次转向', delta: 3, response: '她很快明白你说的是哪一个动作，抬手在空中比了一下路线。谈起飞行时，她的声音比平时更稳。' },
          { label: '说她观察得很细', delta: 2, response: '秋笑了笑，说找球手如果看得不细，就只能靠运气。那句话轻，却带着一点骄傲。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'cho_enc_lake',
        area: '黑湖湖畔',
        minTier: 2,
        text: '秋·张一个人站在湖边，手里拿着一条蓝铜色围巾。湖风很冷，她却像只是需要安静一会儿。',
        choices: [
          { label: '问她要不要回城堡', delta: 2, response: '她说再站一小会儿。你没有催她，她反而慢慢说起今天训练时一个让她一直在想的瞬间。' },
          { label: '陪她看湖面', delta: 3, response: '你们并排站着，谁都没有急着找话。过了一会儿，秋轻声说有时候安静比安慰更有用。' },
        ],
      },
    ],
  },
  padmaPatil: {
    activeChatEvents: [
      {
        id: 'padma_chat_riddle',
        minTier: 2,
        text: '帕德玛站在拉文克劳门环前，像刚刚听完一个让人不太满意的问题。她看见你，问你愿不愿意听听另一个答案。',
        choices: [
          { label: '认真听她的答案', delta: 3, response: '她的答案不是最快的，却把问题拆得很干净。说完以后，她像是第一次真正把你当成讨论对象。' },
          { label: '提出不同想法', delta: 3, response: '帕德玛没有立刻反驳，而是让你把理由说完。你们最后谁也没完全说服谁，但她显然很满意这场争论。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'padma_enc_library',
        area: '城堡图书馆',
        minTier: 2,
        text: '帕德玛在图书馆长桌边整理复习卡，每张卡片都写得极小。旁边有人想借走一叠，她皱了皱眉。',
        choices: [
          { label: '帮她分出可借的部分', delta: 3, response: '你们把卡片分成两堆，帕德玛的表情终于缓和。她说分享可以，但不能把辛苦整理的逻辑也弄乱。' },
          { label: '问她复习方法', delta: 2, response: '她先确认你不是想偷懒，才给你讲她的卡片顺序。讲到最后，她甚至替你改了两张。' },
        ],
      },
    ],
  },
  terryBoot: {
    activeChatEvents: [
      {
        id: 'terry_chat_argument',
        minTier: 2,
        text: '泰瑞拿着一张羊皮纸冲到你面前，说他终于想明白昨天那个问题为什么不对。看样子他已经憋了一路。',
        choices: [
          { label: '让他从头讲', delta: 3, response: '泰瑞如释重负，从第一个前提开始讲起。你听得很累，却也被他那种非弄明白不可的劲头带进去。' },
          { label: '指出你听不懂第三步', delta: 3, response: '他立刻停住，重新画了一张图。比起被打断，他更高兴你真的在跟。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'terry_enc_ravenclaw',
        area: '拉文克劳公共休息室',
        minTier: 2,
        text: '拉文克劳公共休息室里，泰瑞和几个人围着一张星图争论。桌边空着一个位置，他看见你后把纸往旁边挪了挪。',
        choices: [
          { label: '坐下参与讨论', delta: 3, response: '你刚说出一个可能性，泰瑞就抓住它继续推下去。几分钟后，你已经变成这场讨论的一部分。' },
          { label: '先听他们争完', delta: 2, response: '你安静听着，最后指出他们其实在用不同定义争同一件事。泰瑞睁大眼睛，然后笑了。' },
        ],
      },
    ],
  },
  michaelCorner: {
    activeChatEvents: [
      {
        id: 'michael_chat_debate',
        minTier: 2,
        text: '迈克尔在庭院长廊里和人争论防御咒的最佳时机。对方走后，他仍显得意犹未尽，像一场棋局刚开头就被收走。',
        choices: [
          { label: '接着和他辩', delta: 3, response: '他立刻把注意力转向你。你们争得很快，却没有变成吵架；迈克尔显然喜欢有人能跟上他的节奏。' },
          { label: '问他会不会太较真', delta: 2, response: '他想反驳，最后却承认也许有一点。这个承认很小，但足够让谈话从辩论变成聊天。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'michael_enc_courtyard',
        area: '庭院草坪',
        minTier: 2,
        text: '迈克尔把一本书摊在膝上，旁边却放着魁地奇战术图。他似乎在两个兴趣之间来回切换。',
        choices: [
          { label: '问他到底在看哪一个', delta: 2, response: '他说两个都在看，因为咒语和战术一样都讲究时机。这个说法有点牵强，却被他说得很认真。' },
          { label: '帮他压住战术图', delta: 3, response: '风把纸吹起来，你伸手帮他按住。迈克尔顺势讲起图上那条路线，语气比争论时柔和不少。' },
        ],
      },
    ],
  },
  anthonyGoldstein: {
    activeChatEvents: [
      {
        id: 'anthony_chat_fairness',
        minTier: 2,
        text: '安东尼正在替两个低年级学生分清谁先借了书。他语气温和，但每个细节都问得很准。',
        choices: [
          { label: '等他处理完再说话', delta: 3, response: '他处理完才转向你，明显感谢你没有插嘴。随后他解释为什么顺序重要，因为公平通常藏在小细节里。' },
          { label: '补充你看到的细节', delta: 2, response: '安东尼认真听完，把你的证词加进判断里。他没有夸张感谢，只说这让结论更稳。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'anthony_enc_history',
        area: '魔法史教室',
        minTier: 2,
        text: '魔法史课后，安东尼还在整理时间线。宾斯教授的声音仿佛仍留在教室里，他却看起来一点也不困。',
        choices: [
          { label: '问他怎么听进去的', delta: 2, response: '安东尼说只要把事件因果理清，魔法史并不无聊。他说这话时很认真，认真到你差点被说服。' },
          { label: '帮他核对年份', delta: 3, response: '你们一起核对了几处年份。他发现你没有敷衍，便把自己整理的缩略表借给你看。' },
        ],
      },
    ],
  },
  cedricDiggory: {
    activeChatEvents: [
      {
        id: 'cedric_chat_fair_play',
        minTier: 2,
        text: '塞德里克在球场边把护具递还给队友，确认每个人都拿到自己的东西以后才坐下。他看见你，笑得很自然。',
        choices: [
          { label: '问他为什么总照顾别人', delta: 3, response: '他说队长不只是飞得快的人。说完又觉得这话太正式，笑着补充说，不然东西总会丢。' },
          { label: '聊比赛压力', delta: 3, response: '塞德里克承认压力当然有，但公平比赛能让压力变得清楚。你听得出他不是装谦虚。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'cedric_enc_hall',
        area: '霍格沃茨大礼堂',
        minTier: 2,
        text: '塞德里克在赫奇帕奇长桌旁替低年级学生让出位置，自己端着盘子站了一会儿。',
        choices: [
          { label: '给他挪个座位', delta: 3, response: '他有些意外，随后坐下向你道谢。这个动作很小，却让他看你的眼神多了一点真正的亲近。' },
          { label: '说他太客气了', delta: 2, response: '塞德里克笑着说客气不是坏事，只要不是为了显得自己好。你发现他对这种分寸想得很清楚。' },
        ],
      },
    ],
  },
  hannahAbbott: {
    activeChatEvents: [
      {
        id: 'hannah_chat_nerves',
        minTier: 2,
        text: '汉娜在温室外反复检查自己的手套，明明已经戴好了，还总觉得哪里不对。',
        choices: [
          { label: '帮她检查一遍', delta: 3, response: '你认真看完，说没有问题。汉娜松了口气，随后小声承认她只是有点怕今天的植物。' },
          { label: '说紧张也没关系', delta: 3, response: '她抬头看你，像是没想到这句话可以这么直接。过了一会儿，她点点头，把手套扣紧了。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'hannah_enc_kitchen',
        area: '家养小精灵厨房',
        minTier: 2,
        text: '厨房门口，汉娜抱着一篮点心不知该不该进去打扰。里面的小精灵忙得脚不沾地。',
        choices: [
          { label: '陪她一起进去', delta: 3, response: '你们把点心送进去，小精灵们高兴得连连鞠躬。汉娜脸红得厉害，却笑得很轻松。' },
          { label: '帮她问一句', delta: 2, response: '你替她问过以后，她终于敢把篮子递出去。离开厨房时，她小声说谢谢你没有笑她胆小。' },
        ],
      },
    ],
  },
  ernieMacmillan: {
    activeChatEvents: [
      {
        id: 'ernie_chat_statement',
        minTier: 2,
        text: '厄尼在赫奇帕奇公共休息室外练习一段道歉，措辞正式得像准备在全校面前宣读。',
        choices: [
          { label: '建议他说得简单点', delta: 3, response: '他先有点受伤，随后认真删掉了三句。删完以后，那段道歉听起来反而真诚多了。' },
          { label: '问他为什么这么重视', delta: 2, response: '厄尼说误会如果不及时澄清，就会变成新的不公平。他说得一本正经，却不是为了显摆。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'ernie_enc_corridor',
        area: '一楼走廊',
        minTier: 2,
        text: '厄尼站在两名争吵的学生中间，努力让双方轮流说话。场面有点滑稽，但确实比刚才安静。',
        choices: [
          { label: '帮他拦住插话', delta: 3, response: '你让其中一人等对方说完。厄尼感激地看了你一眼，像终于有人理解程序的重要性。' },
          { label: '事后问他累不累', delta: 2, response: '厄尼长长叹了口气，说公正有时非常费嗓子。这个抱怨让他显得比平时真实得多。' },
        ],
      },
    ],
  },
  susanBones: {
    activeChatEvents: [
      {
        id: 'susan_chat_notice',
        minTier: 2,
        text: '苏珊在公告栏前停了很久。羊皮纸上是魔法部的通知，她的目光却像越过了那些正式措辞。',
        choices: [
          { label: '问她想到了什么', delta: 3, response: '她没有立刻说家人的事，只说有些名字出现在通知上时，会让人意识到规则背后都是真人。' },
          { label: '陪她站一会儿', delta: 3, response: '你没有逼她解释。过了一会儿，苏珊轻声说谢谢，像是谢谢你把沉默也当成一种回答。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'susan_enc_library',
        area: '城堡图书馆',
        minTier: 2,
        text: '苏珊在图书馆查一份旧报纸，手指停在某个姓氏旁边。她看见你，慢慢把报纸合上一半。',
        choices: [
          { label: '问需不需要帮忙找资料', delta: 2, response: '她犹豫了一下，把年份告诉你。你们一起翻找旧报纸，谁都没有把这当成普通作业。' },
          { label: '不追问姓氏', delta: 3, response: '你只是把旁边一叠报纸推近些。苏珊看了你一眼，明显明白你为什么没有问。' },
        ],
      },
    ],
  },
  justinFinchFletchley: {
    activeChatEvents: [
      {
        id: 'justin_chat_muggle',
        minTier: 2,
        text: '贾斯廷正在向同学解释麻瓜学校的寄宿制度，越解释越发现对方把它想得像另一种魔法学校。',
        choices: [
          { label: '帮他找一个魔法类比', delta: 3, response: '你把麻瓜学校比作没有画像和楼梯的霍格沃茨。贾斯廷笑了，说这虽然不严谨，但终于能让人听懂。' },
          { label: '问他更想念哪边', delta: 3, response: '他想了很久，说两边都想，也两边都不完全属于。这个回答让他自己也安静下来。' },
        ],
      },
    ],
    encounters: [
      {
        id: 'justin_enc_hall',
        area: '霍格沃茨大礼堂',
        minTier: 2,
        text: '大礼堂里有人把麻瓜习惯讲得离谱，贾斯廷努力保持礼貌，刀叉却被他握得很紧。',
        choices: [
          { label: '替他纠正一句', delta: 3, response: '你把那个误解轻轻纠正过来。贾斯廷立刻看向你，像终于有人替他说了一句不用解释太多的话。' },
          { label: '事后问他还好吗', delta: 2, response: '他说没事，随后又承认有时候解释自己的来处很累。你们在长桌边聊到南瓜汁变凉。' },
        ],
      },
    ],
  },
};

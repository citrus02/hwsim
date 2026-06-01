/**
 * affinity-students-bespoke-secondary-scenes.js
 * 非主角高频同学专属互动分片。
 *
 * 这些人物已经有 30 条底线内容；本分片继续加入更强的人物专属事件，
 * 避免他们只靠学院印象或长尾模板支撑。
 */

export const STUDENT_SECONDARY_BESPOKE_ENRICHMENTS = {
  seamus: {
    activeChatEvents: [
      {
        id: 'seamus_bespoke_mam_letter',
        minTier: 2,
        text: '西莫在猫头鹰塔楼给家里写信，羽毛笔停在“今天没有爆炸”这句话后面。他盯着那行字看了很久，又在旁边加了一个很小的“几乎”。',
        choices: [
          { label: '说这样更诚实', delta: 4, response: '西莫瞪你一眼，随后自己也笑了。他说妈妈总能看出他什么时候省略重点，所以不如先写得聪明一点。' },
          { label: '问他家里会担心吗', delta: 3, response: '他耸耸肩，说当然会，但他们也知道他总会再试一次。说这句话时，他比平时安静，也更像真的骄傲。' },
        ],
      },
      {
        id: 'seamus_bespoke_not_only_boom',
        minTier: 3,
        text: '魔咒课后，西莫成功完成了一次很小、很稳的修复咒。旁边没人注意，因为这次没有任何响声。',
        choices: [
          { label: '认真祝贺他', delta: 5, response: '他先以为你在开玩笑，确认你是真心后反而有些不好意思。「小声点，」他说，「这种成功我还不太习惯。」' },
          { label: '问他要不要再试一次', delta: 4, response: '西莫重新举起魔杖。这一次咒语仍然稳。没有爆炸的沉默持续了几秒，然后他露出一个非常亮的笑。' },
        ],
      },
      {
        id: 'seamus_bespoke_defend_firstyear',
        minTier: 4,
        text: '一名一年级学生练咒失败，几个人开始笑。西莫站在旁边，脸上少见地没有跟着起哄。',
        choices: [
          { label: '看他怎么做', delta: 4, response: '西莫走过去，给那名学生讲了一个自己更惨烈的失败案例。笑声很快变成真正的笑，那名学生也没那么难堪了。' },
          { label: '事后说他处理得好', delta: 5, response: '他挠挠头，说自己只是知道被笑的时候是什么感觉。这句话轻得像玩笑，却比玩笑真得多。' },
        ],
      },
    ],
  },
  deanThomas: {
    activeChatEvents: [
      {
        id: 'dean_bespoke_two_worlds',
        minTier: 2,
        text: '迪安在公共休息室画一条麻瓜街道，街灯不会动，车也不会飞。可他画得很认真，像怕那条街从记忆里褪色。',
        choices: [
          { label: '问这是哪里', delta: 4, response: '他告诉你那是家附近的一段路，没什么特别。说完又补充，正因为没什么特别，所以想画下来。' },
          { label: '说它看起来很真实', delta: 3, response: '迪安低头看画，笑得有点怀念。他说真实有时候不是会不会动，而是你能不能记得那里的光。' },
        ],
      },
      {
        id: 'dean_bespoke_banner',
        minTier: 3,
        text: '魁地奇赛前，迪安一个人在看台下修补学院横幅。针脚不算整齐，但每一处都压得很牢。',
        choices: [
          { label: '帮他拉住布角', delta: 4, response: '你帮他把布拉平，他终于能把裂口缝直。横幅重新展开时，红金色在风里亮起来，他看得很满意。' },
          { label: '问为什么不找别人帮忙', delta: 3, response: '他说大家都忙着激动，总得有人把东西弄好。这个回答一点也不张扬，却很迪安。' },
        ],
      },
      {
        id: 'dean_bespoke_draw_player',
        minTier: 4,
        text: '迪安递给你一张小画，画的是你坐在长桌边低头看书的侧影。线条很少，却抓住了你自己都没注意过的姿势。',
        choices: [
          { label: '问他什么时候画的', delta: 5, response: '他说就是某个晚餐时。霍格沃茨每天太吵，他有时候会画下安静的人。你第一次意识到自己也在别人的日常里。' },
          { label: '认真收下', delta: 4, response: '你把画收好，没有说“随便画画而已”。迪安看起来很高兴，因为你尊重了这张小纸片里的认真。' },
        ],
      },
    ],
  },
  leeJordan: {
    activeChatEvents: [
      {
        id: 'lee_bespoke_not_just_noise',
        minTier: 2,
        text: '李·乔丹在图书馆写解说稿，羽毛笔尖停在一句玩笑前。他皱着眉，像在判断这句会不会让某个队员难堪。',
        choices: [
          { label: '建议换一种说法', delta: 4, response: '他听完后没有反驳，而是把那句划掉重写。李说好笑应该让人想抬头，不该让人想躲起来。' },
          { label: '问他为什么这么认真', delta: 3, response: '他看了看稿子，说大家以为解说只是喊得响，其实喊出去的话会留在很多人耳朵里。' },
        ],
      },
      {
        id: 'lee_bespoke_twins_friend',
        minTier: 3,
        text: '弗雷德和乔治被罚去擦奖杯，李在门口晃了半天，嘴上说只是路过，手里却拿着另一块抹布。',
        choices: [
          { label: '问他为什么不进去', delta: 3, response: '他说进去就显得太讲义气了，影响他冷静旁观者的形象。说完他还是推门进去了。' },
          { label: '替他拿着羊皮纸', delta: 4, response: '你帮他拿着解说稿，他挽起袖子进门。里面很快传来双胞胎夸张的欢迎声，李的笑声也混了进去。' },
        ],
      },
      {
        id: 'lee_bespoke_quiet_stands',
        minTier: 4,
        text: '雨后的魁地奇看台空无一人，李坐在最高处，没有练解说，也没有开玩笑，只听水滴从木板边缘落下去。',
        choices: [
          { label: '问他在听什么', delta: 5, response: '他说每个球场空下来以后都有自己的声音，平时被欢呼盖住了。你坐下听了一会儿，发现他说得并不夸张。' },
          { label: '不打扰地坐旁边', delta: 4, response: '你们并排坐着。过了很久，李才说如果一直热闹，人会忘记自己其实为什么喜欢这里。' },
        ],
      },
    ],
  },
  cedricDiggory: {
    activeChatEvents: [
      {
        id: 'cedric_bespoke_win_clean',
        minTier: 2,
        text: '塞德里克在魁地奇球场边把一只护腕还给对手队员。刚才那场训练里，对方撞得很重，他却先确认那人还能不能继续飞。',
        choices: [
          { label: '问他为什么对对手也这样', delta: 4, response: '塞德里克笑了笑，说对手也是一起完成比赛的人。如果只想赢，很多事会简单些，但也会变得没那么值得。' },
          { label: '帮他检查护腕扣带', delta: 3, response: '你帮他把扣带重新穿好。他低声道谢，又把护腕擦干净才递出去。这个动作很小，却像他的全部作风。' },
        ],
      },
      {
        id: 'cedric_bespoke_attention',
        minTier: 3,
        text: '大礼堂里有人起哄让塞德里克讲讲今天的漂亮动作。他笑着应付了几句，等人散开后却明显松了口气。',
        choices: [
          { label: '问他是不是不爱被围着', delta: 4, response: '他没有否认，只说被喜欢当然很好，但有时候大家喜欢的是一个更顺眼的版本。说完他有点不好意思，像这话太不谦虚。' },
          { label: '聊起普通作业', delta: 3, response: '你把话题转到作业，他反而轻松许多。你们认真抱怨了一会儿论文长度，他看起来终于像个普通高年级学生。' },
        ],
      },
      {
        id: 'cedric_bespoke_tri_worry',
        minTier: 4,
        text: '三强争霸赛传闻最热的时候，塞德里克在黑湖边站了很久。湖风把他的围巾吹得很乱，他却没有整理。',
        choices: [
          { label: '问他会不会害怕', delta: 5, response: '他先说每个人都会紧张，随后停了一下，改口说是的，会害怕。他说得很平静，像不想让诚实显得沉重。' },
          { label: '说不必一直表现完美', delta: 5, response: '塞德里克看着湖面，过了一会儿才说谢谢。他没有再补一句谦虚的话，这反而让这句谢谢显得更真。' },
        ],
      },
    ],
  },
  choChang: {
    activeChatEvents: [
      {
        id: 'cho_bespoke_seekers_eye',
        minTier: 2,
        text: '秋·张在看台高处看训练，手里没有望远镜，只用眼睛追着金色飞贼练习轨迹。风很大，她却几乎没有眨眼。',
        choices: [
          { label: '问她怎么跟得上', delta: 4, response: '她抬手指了指空中的一处转折，说不能只看飞贼，要看追它的人什么时候失去耐心。你发现她的温柔并不妨碍她很锋利。' },
          { label: '安静陪她看完', delta: 3, response: '你没有打扰。训练结束后，秋轻声说刚才第三次转向很漂亮，像是在把一件私人的喜欢分享给你。' },
        ],
      },
      {
        id: 'cho_bespoke_grief_quiet',
        minTier: 4,
        text: '秋在黑湖湖畔捏着一封折好的信，信纸边缘已经被水汽弄软。她看见你，没有把信藏起来，只是把它握得更紧。',
        choices: [
          { label: '问要不要一个人待着', delta: 5, response: '她摇摇头，又点点头，最后轻声说她也不知道。你没有催她做决定，只陪她站着。过了一会儿，她终于能呼吸得稳一点。' },
          { label: '说可以不说话', delta: 5, response: '秋看了你一眼，眼眶有些红，却露出很小的笑。你们真的很久都没说话，那段沉默没有让人难堪。' },
        ],
      },
      {
        id: 'cho_bespoke_public_face',
        minTier: 3,
        text: '拉文克劳长桌旁，有人问秋是不是“总能保持冷静”。她笑着回答，手却在桌下把餐巾攥出一道折痕。',
        choices: [
          { label: '事后问她累不累', delta: 4, response: '她先说还好，随后低声承认有时候保持温和比生气更累。能说出这句话时，她看起来反而没那么紧绷。' },
          { label: '递给她一杯南瓜汁', delta: 3, response: '你没有多问，只把杯子推过去。秋接过时轻轻说谢谢，像感谢的不是南瓜汁，而是你没让她继续表演冷静。' },
        ],
      },
    ],
  },
  pansy: {
    activeChatEvents: [
      {
        id: 'pansy_bespoke_mirror',
        minTier: 2,
        text: '潘西在二楼走廊的镜子前停下，检查发卡有没有歪。镜子里的她看起来比平时安静，直到发现你也在，才立刻恢复挑剔表情。',
        choices: [
          { label: '说发卡没歪', delta: 3, response: '她准备好的讽刺卡在嘴边，最后只哼了一声。「我当然知道。」可她没有马上走开，反而又看了一眼镜子。' },
          { label: '问她为什么总要完美', delta: 4, response: '潘西立刻说这不叫完美，叫不让别人看笑话。话一出口，她自己也意识到说得太真，表情变得更尖了一点。' },
        ],
      },
      {
        id: 'pansy_bespoke_table_power',
        minTier: 3,
        text: '斯莱特林长桌旁，潘西用一句很轻的话让两个正在争座位的低年级安静下来。她没有提高声音，却显然知道怎样让人听见。',
        choices: [
          { label: '说她很会控场', delta: 4, response: '潘西挑眉，说这叫基本能力。可她看起来很受用，因为你称赞的不是漂亮，也不是刻薄，而是她真的擅长的东西。' },
          { label: '问她是不是总得这样', delta: 3, response: '她说如果你不先占住位置，就会有人替你决定位置。那句话很斯莱特林，却也很像她自己。' },
        ],
      },
      {
        id: 'pansy_bespoke_soft_spot',
        minTier: 4,
        text: '你看见潘西把一瓶修复药膏塞给一个被同院嘲笑的低年级学生。她塞完立刻冷着脸说别误会，只是看不惯伤口太难看。',
        choices: [
          { label: '假装没看见善意', delta: 5, response: '潘西明显松了口气，又像不愿承认自己松了口气。她走过你身边时很轻地说了一句「算你识相」。' },
          { label: '说这药膏很有用', delta: 4, response: '她瞪你一眼，像在警告你不要给这件事取温柔的名字。但她没有否认，只把空药瓶收进袖子。' },
        ],
      },
    ],
  },
  blaiseZabini: {
    activeChatEvents: [
      {
        id: 'blaise_bespoke_silence',
        minTier: 2,
        text: '布雷司在图书馆靠窗的位置读书，旁边几个斯莱特林学生争论得越来越刻薄。他没有参与，只翻过一页。',
        choices: [
          { label: '问他为什么不阻止', delta: 3, response: '他说每个人都要为自己说出口的话负责。停了一下，他又补充，如果局面真的变糟，他会站起来。这个补充很轻，却很关键。' },
          { label: '坐下读自己的书', delta: 4, response: '你没有逼他表态，只在旁边坐下。过了一会儿，他把一本你可能用得上的书推过来，动作自然得像只是顺手。' },
        ],
      },
      {
        id: 'blaise_bespoke_mother',
        minTier: 4,
        text: '布雷司收到一封用昂贵香水熏过的信。看到署名时，他的表情没有变化，只是把信折得非常慢。',
        choices: [
          { label: '问信是不是让他不高兴', delta: 5, response: '他沉默很久，说有些信不是让人高兴或难过，而是提醒你别忘了自己该扮演谁。说完他把信收得很平。' },
          { label: '不追问，只换话题', delta: 4, response: '你问起今天的课。他像是接受了这份分寸，回答得比平时多一些。不是热情，却是很明确的允许。' },
        ],
      },
      {
        id: 'blaise_bespoke_judgment',
        minTier: 3,
        text: '地牢走廊里，布雷司看完一场小冲突，给出的评价只有一句：“他输在太想赢。”',
        choices: [
          { label: '问他怎么看出来的', delta: 4, response: '布雷司看向你，像终于遇到一个问对问题的人。他把那场冲突拆成三个停顿，每个停顿都比争吵本身更说明问题。' },
          { label: '说这听起来也像马尔福', delta: 3, response: '他笑了一下，没有承认也没有否认。「你最好别在他面前这么说。」这句提醒带着一点真正的好意。' },
        ],
      },
    ],
  },
  susanBones: {
    activeChatEvents: [
      {
        id: 'susan_bespoke_family_name',
        minTier: 2,
        text: '苏珊在公告栏前看魔法部公告。她的手指停在“博恩斯”这个姓氏附近，停得太久，连路过的人都差点注意到。',
        choices: [
          { label: '站到旁边挡住视线', delta: 4, response: '你没有问，只稍微挪了一步，挡住别人好奇的目光。苏珊轻声说谢谢，眼睛仍看着公告，却不再那么僵。' },
          { label: '问她需不需要一起查资料', delta: 4, response: '她点点头，说不是现在。过了一会儿，她又补充说，如果要查，她希望有人能记得这些名字不只是历史。' },
        ],
      },
      {
        id: 'susan_bespoke_courage',
        minTier: 3,
        text: '赫奇帕奇公共休息室外，有人说苏珊“总是太担心”。她听见了，脸色发白，却没有立刻反驳。',
        choices: [
          { label: '说担心不是软弱', delta: 5, response: '苏珊看了你很久，像这句话正好落在她一直不敢替自己辩护的地方。她低声说她只是知道有些事真的会发生。' },
          { label: '陪她走开', delta: 4, response: '你没有要求她当场证明自己。离开那段走廊后，她慢慢说起她为什么会对通知、名单和传闻格外敏感。' },
        ],
      },
      {
        id: 'susan_bespoke_ministry',
        minTier: 4,
        text: '苏珊在图书馆翻一份旧审判记录，旁边摆着几张做了标记的羊皮纸。她看起来不是为作业而查。',
        choices: [
          { label: '问她找到什么了', delta: 4, response: '她把记录转给你看，指着其中一个证词说真正可怕的不是黑魔法，而是所有人事后都说自己没办法。她说得很轻，却很稳。' },
          { label: '帮她整理年份', delta: 5, response: '你们一起把记录按时间排好。整理完以后，苏珊说这样至少能看清事情是怎么一步步发生的。她需要的不是安慰，是清楚。' },
        ],
      },
    ],
  },
  ernieMacmillan: {
    activeChatEvents: [
      {
        id: 'ernie_bespoke_apology',
        minTier: 2,
        text: '厄尼在一张羊皮纸上写道歉稿，第一句就用了三个“鉴于”。他读给自己听时，脸色越来越严肃。',
        choices: [
          { label: '建议他直接说对不起', delta: 4, response: '厄尼像被这朴素建议击中，沉默后划掉大半段。剩下那句短短的道歉反而真诚得多，他看起来有些不好意思。' },
          { label: '问他为什么要道歉', delta: 3, response: '他说因为自己太快下判断。能这样承认，对厄尼来说比写三页声明难得多。' },
        ],
      },
      {
        id: 'ernie_bespoke_fairness_cost',
        minTier: 3,
        text: '厄尼刚调解完一场争执，所有人都走了，他还站在原地揉额角。看起来公正比他想象中费力。',
        choices: [
          { label: '问他后不后悔插手', delta: 4, response: '他说不后悔，只是希望公正能少费一点嗓子。这个抱怨很真，让他不再像一份会走路的规章。' },
          { label: '递给他一杯水', delta: 3, response: '厄尼郑重接过，像你递给他的不是水，而是对程序正义的支持。你差点笑出来，但忍住了。' },
        ],
      },
      {
        id: 'ernie_bespoke_wrong_about_harry',
        minTier: 4,
        text: '厄尼在走廊尽头停住，像是终于下定决心。他提到自己曾经误会过别人，声音比平时低很多。',
        choices: [
          { label: '听他说完', delta: 5, response: '你没有替他说“没关系”。厄尼把那段话完整说完，承认自己当时既害怕又想显得正确。说完以后，他像轻了一点。' },
          { label: '说能改口也需要勇气', delta: 4, response: '厄尼抬头看你，认真得几乎要把这句话记进笔记。他说希望下次自己能更早一点改口。' },
        ],
      },
    ],
  },
  justinFinchFletchley: {
    activeChatEvents: [
      {
        id: 'justin_bespoke_muggleborn',
        minTier: 2,
        text: '贾斯廷在大礼堂试图解释自己入学前差点去伊顿。旁边有人把伊顿听成一种咒语，他努力保持礼貌。',
        choices: [
          { label: '帮他解释那是学校', delta: 4, response: '贾斯廷立刻松了口气，补充说那是麻瓜学校，而且不是所有麻瓜学校都那样。终于有人帮他把第一步说清楚了。' },
          { label: '问他会不会想念那条路', delta: 4, response: '他想了很久，说会，也不会。霍格沃茨像一扇突然打开的门，但门后面的世界并不会让原来的路消失。' },
        ],
      },
      {
        id: 'justin_bespoke_fear',
        minTier: 3,
        text: '某次关于密室的传闻后，贾斯廷在走廊里明显避开了人群。他看见你时先紧张了一下，又很快为自己的反应尴尬。',
        choices: [
          { label: '说害怕很正常', delta: 5, response: '他闭了闭眼，说自己讨厌这样疑神疑鬼，却控制不住。你没有责备他，他终于把肩膀放下来一点。' },
          { label: '陪他走到大礼堂', delta: 4, response: '一路上你们没有谈传闻，只聊今天的课程。到大礼堂门口时，他说谢谢，声音比刚才稳多了。' },
        ],
      },
      {
        id: 'justin_bespoke_politeness',
        minTier: 4,
        text: '贾斯廷被一幅画像纠缠着问麻瓜礼仪，他回答得非常礼貌，礼貌到你都看出他快撑不住了。',
        choices: [
          { label: '替他结束谈话', delta: 4, response: '你找了个自然理由把他带走。转过拐角后，贾斯廷长出一口气，说有时候礼貌像一件扣得太紧的外套。' },
          { label: '问他为什么不直接走', delta: 3, response: '他说自己总觉得直接走很失礼，哪怕对方是一幅画像。说完他也笑了，像终于意识到这确实有点荒唐。' },
        ],
      },
    ],
  },
};

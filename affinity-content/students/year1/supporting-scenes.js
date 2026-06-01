/**
 * affinity-students-bespoke-tertiary-scenes.js
 * 第三批同学专属互动分片。
 *
 * 覆盖帕德玛、泰瑞、迈克尔、安东尼、克拉布、高尔、弗林特，
 * 继续降低长尾通用感，强化“任何人都能被结交”的沉浸体验。
 */

export const STUDENT_TERTIARY_BESPOKE_ENRICHMENTS = {
  padmaPatil: {
    activeChatEvents: [
      {
        id: 'padma_bespoke_parvati',
        minTier: 2,
        text: '帕德玛在拉文克劳公共休息室外停下，听见有人把她和帕瓦蒂的名字又混在一起。她没有纠正，只把书抱得更紧了一点。',
        choices: [
          { label: '叫对她的名字', delta: 4, response: '帕德玛抬头看你，神情缓和了一瞬。只是一个名字，却像你把她从“佩蒂尔姐妹”里单独认了出来。' },
          { label: '问她烦不烦', delta: 4, response: '她说习惯了，但习惯不等于喜欢。她说这句话时很平静，反而显得更真。' },
        ],
      },
      {
        id: 'padma_bespoke_yule',
        minTier: 3,
        text: '圣诞舞会前，帕德玛看着一张舞会名单，表情不像期待，也不像不高兴，更像在计算怎么让这一晚少一点尴尬。',
        choices: [
          { label: '问她想不想去', delta: 4, response: '她停顿了一下，说想去和被安排去是两回事。说完她把名单折好，像终于把一个模糊的不满说清楚了。' },
          { label: '聊舞会之外的事', delta: 3, response: '你把话题转到最近的谜题。帕德玛明显轻松下来，像终于不用只作为“舞伴”被谈论。' },
        ],
      },
      {
        id: 'padma_bespoke_riddle_pride',
        minTier: 4,
        text: '门环问了一个新谜题，旁边几个学生急着给答案。帕德玛没有抢答，只等他们都错完，才慢慢开口。',
        choices: [
          { label: '等她完整解释', delta: 5, response: '她的答案不只对，还把为什么错也讲清楚。你没有催她快点说结论，这让她看起来很满意。' },
          { label: '问她为什么不先答', delta: 3, response: '帕德玛说有些人需要先听见自己错在哪里，才会真的听见答案。她说得不尖刻，却很有分量。' },
        ],
      },
    ],
  },
  terryBoot: {
    activeChatEvents: [
      {
        id: 'terry_bespoke_not_showing_off',
        minTier: 2,
        text: '泰瑞在图书馆长桌旁讲一个复杂推导，讲到一半忽然停住，问你是不是觉得他在炫耀。',
        choices: [
          { label: '说你知道他只是兴奋', delta: 4, response: '泰瑞松了口气，像这个误会他已经遇见过很多次。他重新讲下去，这次会时不时确认你跟上没有。' },
          { label: '请他画图说明', delta: 3, response: '他立刻抽出一张新羊皮纸。画图以后，他自己也发现原来有一步可以讲得更清楚。' },
        ],
      },
      {
        id: 'terry_bespoke_wrong_proof',
        minTier: 3,
        text: '泰瑞拿着自己昨天写的证明，脸色难得有些挫败。最底下一行被他划掉了三次，墨水几乎磨穿羊皮纸。',
        choices: [
          { label: '陪他找错处', delta: 5, response: '你们从第一行开始看。找到问题时，泰瑞没有懊恼太久，反而兴奋地说错得漂亮，因为它终于说明了哪里不该走。' },
          { label: '说错证明也有用', delta: 4, response: '他盯着那张纸，慢慢点头。对泰瑞来说，这句话不是安慰，而是一个可以继续想下去的新前提。' },
        ],
      },
      {
        id: 'terry_bespoke_social_gap',
        minTier: 4,
        text: '公共休息室里大家在聊天，泰瑞几次想插话，都因为话题跳得太快而停住。他看起来比做难题时更困惑。',
        choices: [
          { label: '把话题递给他', delta: 4, response: '你自然地问他怎么看。泰瑞接上以后讲得有点长，但没人打断。过后他小声说谢谢，像你帮他解开了另一种题。' },
          { label: '陪他坐到旁边', delta: 3, response: '你们换到安静位置。泰瑞承认自己有时更懂公式，不太懂什么时候该说话。这个承认让他显得很真实。' },
        ],
      },
    ],
  },
  michaelCorner: {
    activeChatEvents: [
      {
        id: 'michael_bespoke_need_win',
        minTier: 2,
        text: '迈克尔刚赢了一场小辩论，却看起来没有多高兴。他反复整理书页，像还在回想自己有没有哪句话说得太重。',
        choices: [
          { label: '问赢了还不高兴吗', delta: 4, response: '他想反驳，最后承认赢和被理解不是一回事。这个答案比他平时的锋利辩词慢得多。' },
          { label: '指出他有句说重了', delta: 3, response: '迈克尔皱眉，沉默后点头。他不喜欢被纠正，但更不喜欢自己靠压过别人取胜。' },
        ],
      },
      {
        id: 'michael_bespoke_cho',
        minTier: 3,
        text: '迈克尔在看台边提到秋·张时语气明显变轻，随后又像意识到什么，立刻把话题转回战术。',
        choices: [
          { label: '不拿这件事打趣', delta: 4, response: '你顺着他说战术。迈克尔明显放松下来，后来反而自己提了一句秋刚才那个判断很准。' },
          { label: '问他是不是很在意', delta: 3, response: '他耳朵红了一点，说你这个问题毫无学术价值。停顿后又补充，也不是完全没有价值。' },
        ],
      },
      {
        id: 'michael_bespoke_admit_wrong',
        minTier: 4,
        text: '一次魔咒讨论后，迈克尔拿着书回来找你。他翻到某一页，表情很别扭，像这趟路比上课还难。',
        choices: [
          { label: '等他说完', delta: 5, response: '他终于说昨天你是对的。说完立刻补充“只是在那个特定前提下”。你笑了，他也笑了，承认错误因此没那么难堪。' },
          { label: '说不用这么正式', delta: 4, response: '迈克尔松了口气，却仍坚持把那页给你看。他说既然争论过，就该把结论补上。' },
        ],
      },
    ],
  },
  anthonyGoldstein: {
    activeChatEvents: [
      {
        id: 'anthony_bespoke_too_strict',
        minTier: 2,
        text: '安东尼在帮低年级改作业，批注写得清楚又严厉。那个学生看起来快被“逻辑不完整”四个字压扁了。',
        choices: [
          { label: '提醒他语气太硬', delta: 4, response: '安东尼愣了一下，重新读自己的批注，耳朵有点红。他把其中一句改成了问题，而不是判决。' },
          { label: '帮他补一句鼓励', delta: 3, response: '你建议在最后加一句做得好的地方。安东尼认真照做，像发现公平不只包括指出错误。' },
        ],
      },
      {
        id: 'anthony_bespoke_lineage',
        minTier: 3,
        text: '有人在走廊里拿姓氏和出身开玩笑。安东尼听见后停住脚步，表情不像生气，更像在判断该不该把话说清。',
        choices: [
          { label: '站在他旁边', delta: 4, response: '你没有替他说完，只站到他旁边。安东尼开口时语气很平稳，把那句玩笑拆得无处可躲。' },
          { label: '事后问他还好吗', delta: 4, response: '他说还好，随后承认有些话不是第一次听见。你没有把它当成小题大做，他看起来很感激。' },
        ],
      },
      {
        id: 'anthony_bespoke_debate_kindness',
        minTier: 4,
        text: '拉文克劳公共休息室里，安东尼主持一场小辩论。轮到一个紧张的新生时，他把问题放慢了很多。',
        choices: [
          { label: '说他刚才很体贴', delta: 4, response: '安东尼像不太习惯被这样评价。他说规则应该让人能参与，而不是把人挡在外面。那句话很像他。' },
          { label: '问他怎么想到的', delta: 3, response: '他说自己以前也被太快的问题堵住过。公平不是所有人都用同一速度，而是都能跟得上。' },
        ],
      },
    ],
  },
  crabbe: {
    activeChatEvents: [
      {
        id: 'crabbe_bespoke_not_joke',
        minTier: 2,
        text: '克拉布在魔药课后盯着自己做对的一小步，旁边有人还在笑他刚才切材料太慢。',
        choices: [
          { label: '指出他这步做对了', delta: 4, response: '他抬头看你，像一时没听懂。确认你不是讽刺后，他把那一小块材料切得更认真了。' },
          { label: '帮他挡开嘲笑', delta: 3, response: '你把话题岔开。克拉布没有道谢，但之后把多余的材料默默推给你一点。' },
        ],
      },
      {
        id: 'crabbe_bespoke_simple_loyalty',
        minTier: 3,
        text: '马尔福走远后，克拉布还站在原地，像在消化刚才那串命令。他脸上没有平时那种跟着起哄的表情。',
        choices: [
          { label: '问他自己想不想去', delta: 4, response: '克拉布沉默很久，说马尔福说要去。你没有追问，他却又小声补了一句：“但我有点饿。”这比你想象的更像真话。' },
          { label: '建议先去吃饭', delta: 3, response: '他看起来被这个选择震住，随后认真点头。也许不是每一次忠诚都必须饿着肚子证明。' },
        ],
      },
      {
        id: 'crabbe_bespoke_small_help',
        minTier: 4,
        text: '一个低年级学生够不到高处的书，克拉布路过时停了一下。他似乎想帮忙，又怕自己的动作看起来太突兀。',
        choices: [
          { label: '请他帮忙拿书', delta: 5, response: '你开口后，他立刻把书拿下来，动作比平时小心得多。低年级学生道谢时，他只含糊地嗯了一声。' },
          { label: '事后说他做得好', delta: 4, response: '克拉布皱眉，像不确定这算不算被取笑。过了一会儿，他很低地说：“只是顺手。”但他看起来没那么凶了。' },
        ],
      },
    ],
  },
  goyle: {
    activeChatEvents: [
      {
        id: 'goyle_bespoke_slow_answer',
        minTier: 2,
        text: '高尔在图书馆还书，平斯夫人问他书放哪一层。他沉默得太久，后面的人开始不耐烦。',
        choices: [
          { label: '替他争取一点时间', delta: 4, response: '你说他在想。高尔终于指向正确书架，平斯夫人哼了一声放过他。走开后，他低声说自己只是需要多想一会儿。' },
          { label: '帮他看书脊编号', delta: 3, response: '你指给他看编号规律。高尔点点头，下次自己找到了位置。他没有笑，但眼神像记住了。' },
        ],
      },
      {
        id: 'goyle_bespoke_warning',
        minTier: 3,
        text: '走廊尽头传来费尔奇的脚步声，高尔看见你正要往那边走。他嘴唇动了一下，像在犹豫要不要提醒。',
        choices: [
          { label: '停下来等他说', delta: 4, response: '高尔终于说：“别去。”两个字很短，却来得及时。你改走另一条路，他看起来像完成了一件很难的事。' },
          { label: '问他听见什么了', delta: 3, response: '他说脚步声不一样，费尔奇生气时走得更快。这个观察意外地细。' },
        ],
      },
      {
        id: 'goyle_bespoke_not_shadow',
        minTier: 4,
        text: '斯莱特林公共休息室外，有人叫高尔“马尔福后面那个”。他停下脚步，脸色慢慢沉下来。',
        choices: [
          { label: '叫他的名字', delta: 5, response: '你直接叫他高尔。他看了你一眼，像确认你不是为了讽刺。那一刻，他的肩膀松了一点。' },
          { label: '换个具体话题问他', delta: 4, response: '你问他魁地奇训练的事。他回答得很短，却是自己的判断，不是替谁重复。' },
        ],
      },
    ],
  },
  marcusFlint: {
    activeChatEvents: [
      {
        id: 'flint_bespoke_captain_pressure',
        minTier: 2,
        text: '弗林特在球场边冲队员吼完，转身却自己把散落的护具一件件捡起来。天快黑了，他还没走。',
        choices: [
          { label: '问他为什么自己收', delta: 4, response: '他粗声说因为他们收不好。停了一下又补充，队长不收，明天训练就会有人受伤。这个理由比骂声可靠得多。' },
          { label: '帮他捡护具', delta: 3, response: '他先说不用，随后把最重的那只球箱踢到你旁边。你们没怎么说话，却一起把场地收干净了。' },
        ],
      },
      {
        id: 'flint_bespoke_foul_line',
        minTier: 3,
        text: '有人在看台下夸弗林特“犯规犯得漂亮”。他咧嘴笑了一下，但笑意很快淡了。',
        choices: [
          { label: '问他是不是真这么想', delta: 4, response: '弗林特看你半天，说赢当然重要，但被裁判抓到的犯规就是蠢。你发现他粗鲁，却不是真的没脑子。' },
          { label: '说队长不只靠凶', delta: 3, response: '他哼了一声，说你知道什么。可之后训练时，他确实少吼了一次，把错误直接示范了一遍。' },
        ],
      },
      {
        id: 'flint_bespoke_last_year',
        minTier: 4,
        text: '临近毕业的弗林特在空球场看台下站着，盯着门柱很久。平时那股凶劲被傍晚拉得很薄。',
        choices: [
          { label: '问他会不会想这里', delta: 5, response: '他立刻说不会。过了一会儿又补充，最多会想念赢球的感觉。可他说这话时一直看着球场，不像只在说赢。' },
          { label: '聊最后一场比赛', delta: 4, response: '弗林特讲得很粗，但每个队员的位置都记得清清楚楚。你听出他记住的不只是比分，还有那支队伍。' },
        ],
      },
    ],
  },
};

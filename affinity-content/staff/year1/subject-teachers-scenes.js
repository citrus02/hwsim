/**
 * affinity-staff-bespoke-secondary-scenes.js
 * 教授与教职员专属互动精修分片（二）。
 *
 * 本分片覆盖尚未精修的麻瓜研究系教师与常驻教职员。
 * 长尾包保证数量；这里负责让每个人有自己的气味、节奏和秘密。
 */

export const STAFF_SECONDARY_BESPOKE_SCENE_ENRICHMENTS = {
  augustusFenwick: {
    activeChatEvents: [
      {
        id: 'fenwick_bespoke_blackboard_corner',
        minTier: 2,
        text: '晚饭后，芬威克教授还站在空教室的黑板前。右下角那道题被擦掉又写回去，粉笔灰落在他袖口上，他却像完全没有察觉。',
        choices: [
          { label: '问他为什么总写在右下角', delta: 4, response: '他沉默了一会儿，说那里最不妨碍别人上课。你忽然明白，那些没有答案的问题一直被他安放在不打扰任何人的地方。' },
          { label: '把粉笔递给他', delta: 3, response: '他接过粉笔，没有道谢，只在等式旁补了一小段推导。末了他说：「你刚才没有问答案。这很好。」' },
        ],
      },
      {
        id: 'fenwick_bespoke_wrong_step',
        minTier: 4,
        text: '你在楼梯转角遇到芬威克教授。他把你的作业本递回来，错题旁没有叉，只有一行很小的字：这里不是错，是你太早放弃了。',
        choices: [
          { label: '问他能不能再讲一遍', delta: 5, response: '他把作业本翻到背面，用极慢的速度重写那一步。讲完后他补了一句：「数学有时不是更聪明，是更耐心。」' },
          { label: '说你会重新算', delta: 4, response: '他点点头，把作业本推回你怀里。「明天之前。」听起来像命令，也像他已经相信你能做到。' },
        ],
      },
    ],
  },
  serafinaMoody: {
    activeChatEvents: [
      {
        id: 'serafina_bespoke_burnt_wire',
        minTier: 2,
        text: '塞拉菲娜教授的桌上摊着一只烧焦的麻瓜插头。她一边拆螺丝一边骂设计者，一边又把每个零件摆得整整齐齐。',
        choices: [
          { label: '问烧焦前发生了什么', delta: 4, response: '她立刻精神起来，像终于等到一个真正的问题。五分钟后，你们已经从电阻讲到厨房里跳闸的灯。' },
          { label: '帮她按住外壳', delta: 3, response: '她把螺丝刀递给你，说手稳比胆子大有用。外壳打开时，她短促地笑了一声，像一次小型胜利。' },
        ],
      },
      {
        id: 'serafina_bespoke_muggle_bill',
        minTier: 4,
        text: '图书馆靠窗处，塞拉菲娜教授夹着一张旧电费单。纸边已经发黄，她却把它压得很平，像保存一封重要来信。',
        choices: [
          { label: '安静坐在旁边', delta: 4, response: '她过了很久才开口，说麻瓜世界有些恐惧很小，却每天都在。她没有把账单给你看，只把它重新夹回书里。' },
          { label: '问这是不是教材资料', delta: 5, response: '「也算。」她说。然后又摇头：「不，只是我不想忘记他们怎么生活。」那句话比一次爆炸实验安静，却更响。' },
        ],
      },
    ],
  },
  primroseSprout: {
    activeChatEvents: [
      {
        id: 'primrose_bespoke_blue_flame',
        minTier: 2,
        text: '普里姆罗斯教授正盯着一盏蓝色火焰。实验台四周安静得反常，连旁边的玻璃瓶都像怕惊动她。',
        choices: [
          { label: '压低声音问能不能靠近', delta: 4, response: '她没有回头，只说可以，但脚步要轻。等你走近，她才指给你看火焰边缘那一点几乎看不见的绿色。' },
          { label: '先把护目镜戴好', delta: 3, response: '她注意到了，眼神柔和了一瞬。「很好，」她说，「好奇心需要眼睛陪它活得久一点。」' },
        ],
      },
      {
        id: 'primrose_bespoke_failed_precipitate',
        minTier: 4,
        text: '你的沉淀实验失败了。普里姆罗斯教授没有立刻指出错误，只把失败的烧杯放到阳光下，让里面浑浊的东西慢慢显出层次。',
        choices: [
          { label: '认真看失败留下的纹理', delta: 5, response: '她终于点头，说失败也会留下证词，前提是有人愿意读。那天你没有重做实验，却学会了另一种观察。' },
          { label: '承认你刚才急了', delta: 4, response: '「急不是罪，」她说，「但化学不会因为你急就改变脾气。」她把新的试管递给你，像递回一次机会。' },
        ],
      },
    ],
  },
  tavishMacLaren: {
    activeChatEvents: [
      {
        id: 'tavish_bespoke_specimen_label',
        minTier: 2,
        text: '标本室里，塔维什教授正在给一只旧昆虫标本重写标签。他写得很慢，每个字母都像是在确认这只小生命曾经存在过。',
        choices: [
          { label: '问它是在哪里采到的', delta: 4, response: '他把笔停在半空，想了很久才回答。那是一个雨后的下午，他记得泥土的气味，也记得采集者的名字。' },
          { label: '帮他递标签纸', delta: 3, response: '你一张张递过去，他一张张写。沉默没有变得尴尬，反而像标本室本来就该有的呼吸。' },
        ],
      },
      {
        id: 'tavish_bespoke_living_thing',
        minTier: 4,
        text: '塔维什教授把一片叶子放在你掌心。叶脉细得像地图，他让你别急着说看见了什么，先等。',
        choices: [
          { label: '真的等一会儿', delta: 5, response: '过了一阵，你看见叶片边缘有极轻微的卷曲。他说很多生命的变化都很小，小到只有愿意等待的人才配看见。' },
          { label: '问他每天都这样观察吗', delta: 4, response: '他笑得很浅，说不是每天，是每次他快要把世界想得太简单的时候。' },
        ],
      },
    ],
  },
  herbertBinns: {
    activeChatEvents: [
      {
        id: 'herbert_bespoke_marginal_note',
        minTier: 2,
        text: '赫伯特教授把一份史料复印件放到你桌上。页边有一行旧批注，墨迹很淡，语气却不像教材，倒像一个人在忍着怒气说话。',
        choices: [
          { label: '问批注是谁写的', delta: 4, response: '他说是一个没有被写进主要章节的人。停顿后，他又补充：「历史常常这样，声音越小，越需要有人靠近。」' },
          { label: '先读完再抬头', delta: 3, response: '你读到最后才发现他一直在等。赫伯特教授没有催你，只说：「现在你知道日期后面有人了。」' },
        ],
      },
      {
        id: 'herbert_bespoke_wrong_winner',
        minTier: 4,
        text: '课后，赫伯特教授在壁炉旁讲起一场几乎没人记得的审判。他说到判决时停了下来，像那一天仍然让他难以接受。',
        choices: [
          { label: '问他赢家是谁', delta: 5, response: '「记录上有一个。」他说，「但我越来越不确定那是不是赢家。」火光照着他的脸，你第一次觉得历史不是过去，而是尚未结案。' },
          { label: '问他为什么还讲这件事', delta: 4, response: '他看向壁炉，声音平稳：「因为不讲，第二次发生时大家会觉得它是第一次。」' },
        ],
      },
    ],
  },
  constanceShacklebolt: {
    activeChatEvents: [
      {
        id: 'constance_bespoke_unanswered_question',
        minTier: 2,
        text: '康斯坦丝教授在作业末尾写了一个问号，没有分数，也没有评语。你去问她，她正把一摞羊皮纸按颜色分开。',
        choices: [
          { label: '问那个问号是什么意思', delta: 4, response: '她说那不是否定，是你论证停下来的地方。然后她让你把最后一句话重新读给自己听。' },
          { label: '说你以为自己写完了', delta: 3, response: '「写完和想完不是同一件事。」她把作业还给你，语气很淡，却没有把门关上。' },
        ],
      },
      {
        id: 'constance_bespoke_corridor_fairness',
        minTier: 4,
        text: '走廊里两个学生争得面红耳赤。康斯坦丝教授没有立刻评判，只让他们各自把对方的话复述一遍。',
        choices: [
          { label: '旁听到最后', delta: 4, response: '争吵慢慢降下来。她看见你还在，问你刚才最难的部分是什么。你说，是承认对方也有一点道理。她点头。' },
          { label: '事后问这算不算惩罚', delta: 5, response: '她说不算，惩罚比理解容易得多。她宁可多花时间让人学会困难的那一种。' },
        ],
      },
    ],
  },
  felixWeasley: {
    activeChatEvents: [
      {
        id: 'felix_bespoke_map_smudge',
        minTier: 2,
        text: '菲利克斯教授摊开一张被雨水泡皱的地图，边角有泥点。他指着一个几乎被晕开的圈，说那地方教材上只用了一行。',
        choices: [
          { label: '问他在那里发生过什么', delta: 4, response: '他立刻讲起山路、迷路的牛和一户请他喝茶的人家。知识点绕了很远才回来，但你一点也不想催。' },
          { label: '帮他压住地图角', delta: 3, response: '地图终于不卷了。他满意地说，一张地图如果没有脾气，多半还没被真正用过。' },
        ],
      },
      {
        id: 'felix_bespoke_home_place',
        minTier: 4,
        text: '他问起你的家乡，不是寒暄，而是真的等你回答。你说完后，他在地图上找了好一会儿，像要把你放回一个准确的位置。',
        choices: [
          { label: '告诉他一个很小的地方名', delta: 5, response: '他认真记下，说小地方也有经纬度，也有天气和故事。那一刻你觉得自己不只是霍格沃茨的一名学生。' },
          { label: '问他是否去过那里', delta: 4, response: '他说可能路过附近，但路过不算认识。然后他补上一句：「人也是。」' },
        ],
      },
    ],
  },
  elizaLovegood: {
    activeChatEvents: [
      {
        id: 'eliza_bespoke_line_break',
        minTier: 2,
        text: '伊莱莎教授把诗集翻到一页，让你读一行。你读完，她没有评价，只用指尖轻轻点了点停顿的位置。',
        choices: [
          { label: '重新读一遍', delta: 4, response: '第二遍读到那个停顿时，句子忽然亮了一下。她微笑，说文字有时不是藏在词里，而是藏在你肯停下来的地方。' },
          { label: '问她为什么选这一行', delta: 3, response: '她说因为这一行很诚实，不急着变得漂亮。说完她合上书，好像已经给了你一件小礼物。' },
        ],
      },
      {
        id: 'eliza_bespoke_luna_shadow',
        minTier: 4,
        text: '窗边有一本被翻旧的童话书，书签是一片压干的浅色叶子。伊莱莎教授看见你注意到它，眼神轻轻晃了一下。',
        choices: [
          { label: '说这片叶子很美', delta: 5, response: '她把叶子托起来，说有些人觉得它只是干叶子，有些人会看见它曾经怎样绿过。她说这话时，声音像在保护某个不在场的人。' },
          { label: '没有追问', delta: 4, response: '她感激地看了你一眼，把书签放回去。过了一会儿，她把另一本诗集借给你，说这本更适合夜里读。' },
        ],
      },
    ],
  },
  mirandaPercival: {
    activeChatEvents: [
      {
        id: 'miranda_bespoke_read_aloud',
        minTier: 2,
        text: '米兰达教授让你把一段英文读出声。教室里很安静，你读到中途卡了一下，她没有替你补词。',
        choices: [
          { label: '自己找回句子', delta: 4, response: '你终于接回去。她点头，说声音里摔一跤并不可怕，可怕的是不愿意听见自己怎么站起来。' },
          { label: '承认那个词不熟', delta: 3, response: '她把词写在黑板上，拆给你看它从哪里来。一个陌生词忽然有了来历，就不再那么吓人。' },
        ],
      },
      {
        id: 'miranda_bespoke_chosen_word',
        minTier: 4,
        text: '她在你的作文里圈出一个词。不是错词，也不是好词，只是一个太准确、因此显得有点孤单的词。',
        choices: [
          { label: '说那是你想了很久才写的', delta: 5, response: '米兰达教授把羽毛笔放下，像确认了一件重要的事。「那就留下它。」她说，「准确不必总向流畅道歉。」' },
          { label: '问能不能换得更漂亮', delta: 4, response: '她反问你，漂亮是为了谁。你忽然意识到，她不是在教你装饰句子，而是在教你不要背叛意思。' },
        ],
      },
    ],
  },
  rolandaHooch: {
    activeChatEvents: [
      {
        id: 'hooch_bespoke_broom_grip',
        minTier: 2,
        text: '霍琦教授站在球场边，黄色眼睛扫过每一把扫帚。轮到你时，她没有看扫帚，先看你的手。',
        choices: [
          { label: '按她的示意放松手腕', delta: 4, response: '扫帚微微下沉，又稳住了。霍琦教授哼了一声，说这才像是在骑扫帚，不像是在和木棍决斗。' },
          { label: '问她怎么一眼看出来', delta: 3, response: '她说害怕的人总会先抓紧，聪明的人学会在该抓紧的时候再抓紧。风从球场掠过，你把这句话记住了。' },
        ],
      },
      {
        id: 'hooch_bespoke_after_match',
        minTier: 4,
        text: '魁地奇比赛结束后，霍琦教授一个人在收球。鬼飞球在箱子里不安分地撞着，她的动作却干净利落，没有半点多余。',
        choices: [
          { label: '帮她扣住球箱', delta: 4, response: '她让你站在左侧，等球撞来时一起压下锁扣。锁上后，她说比赛不只在空中，很多人忘了地面也需要人守住。' },
          { label: '问她今天判罚难不难', delta: 5, response: '她看向空荡荡的看台，说难的是所有人都只看自己想看的那一瞬。裁判必须看完整件事。' },
        ],
      },
    ],
  },
  sybillTrelawney: {
    activeChatEvents: [
      {
        id: 'trelawney_bespoke_cold_cup',
        minTier: 2,
        text: '占卜塔里香气太浓，茶杯却已经冷了。特里劳妮教授盯着杯底的茶叶，神情比平时少了一点戏剧化。',
        choices: [
          { label: '问她看见了什么', delta: 4, response: '她眨了眨放大的眼睛，说看见一个人正把害怕误认成命运。然后她把杯子推远，像不愿再多看。' },
          { label: '说茶已经凉了', delta: 3, response: '她轻轻叹气，说很多预兆都是这样，被人发现时已经凉了。可她还是重新给你倒了一杯热茶。' },
        ],
      },
      {
        id: 'trelawney_bespoke_real_moment',
        minTier: 4,
        text: '走廊拐角处，特里劳妮教授忽然停住。她扶着墙，眼神短暂地空了一下，说出一句不像她平时会编排出来的话。',
        choices: [
          { label: '记住那句话', delta: 5, response: '她回过神后似乎不记得自己说过什么。你没有追问，只把那句话收好，像收好一根还没有落下的羽毛。' },
          { label: '问她是否不舒服', delta: 4, response: '她急忙恢复那种飘忽的腔调，说天目偶尔会让凡俗身体疲惫。但她接过你递来的水时，手指确实有些发凉。' },
        ],
      },
    ],
  },
  auroraSinistra: {
    activeChatEvents: [
      {
        id: 'sinistra_bespoke_telescope_screw',
        minTier: 2,
        text: '午夜的天文塔上，辛尼斯特拉教授正在调一枚细小的螺丝。风很冷，她的手却稳得像星图上的线。',
        choices: [
          { label: '帮她扶住望远镜', delta: 4, response: '望远镜终于对准。她让你看那颗暗星，说亮的东西很容易被找到，困难的是承认微弱也值得记录。' },
          { label: '问她为什么不用魔法校准', delta: 3, response: '她说魔法可以让东西动起来，却不能替你知道它为什么偏了。天文学不奖励省略。' },
        ],
      },
      {
        id: 'sinistra_bespoke_meteor_wait',
        minTier: 4,
        text: '流星雨迟迟没有出现。几个学生已经开始抱怨，辛尼斯特拉教授只是把披肩拉紧，继续看着一片黑得很深的天空。',
        choices: [
          { label: '陪她继续等', delta: 5, response: '第一颗流星划过时几乎没有声音。她没有欢呼，只轻声说：「看，宇宙从不因为我们不耐烦就提前。」' },
          { label: '问她会不会失望', delta: 4, response: '她说当然会，观测者不是石头。但失望不该决定你什么时候合上记录本。' },
        ],
      },
    ],
  },
};

/**
 * affinity-staff-bespoke-scenes.js
 * 教授与教职员专属互动精修分片。
 *
 * 长尾池保证数量；本分片负责把教授写成具体的人，
 * 而不是课堂功能按钮或加减分机器。
 */

export const STAFF_BESPOKE_SCENE_ENRICHMENTS = {
  minervaMcGonagall: {
    activeChatEvents: [
      {
        id: 'mcgonagall_bespoke_almost_praise',
        minTier: 2,
        text: '麦格教授在一楼走廊停下，目光落到你怀里那叠没有散开的课本上。旁边刚有学生撞翻盔甲，她看起来正努力不叹气。',
        choices: [
          { label: '站直等她开口', delta: 3, response: '她只说了一句“继续保持”。语气仍然严肃，却比任何热情夸奖都更像真正的认可。' },
          { label: '主动帮忙扶盔甲', delta: 4, response: '你把盔甲扶正。麦格教授没有立刻表扬，只检查它有没有少零件。离开前，她向你点了一下头。' },
        ],
      },
      {
        id: 'mcgonagall_bespoke_house_head',
        minTier: 4,
        text: '格兰芬多公共休息室门外，麦格教授刚训完几个学生。等他们走远，她的表情有一瞬间不像院长，更像一个担心得太久的人。',
        choices: [
          { label: '问她是不是很累', delta: 5, response: '她看了你一眼，像这个问题越界了。可她没有斥责，只说“职责从来不以疲惫为转移”。这句话很硬，也很真。' },
          { label: '说他们其实听进去了', delta: 4, response: '麦格教授的嘴角几不可察地动了一下。她说希望如此，然后把披肩整理好，重新变回那个不容置疑的教授。' },
        ],
      },
    ],
  },
  severusSnape: {
    activeChatEvents: [
      {
        id: 'snape_bespoke_correct_brew',
        minTier: 2,
        text: '斯内普教授在地牢里检查坩埚。轮到你时，他停得比平时久一点，蒸汽在他黑袍边缘慢慢散开。',
        choices: [
          { label: '先说出你改过的步骤', delta: 3, response: '他冷冷指出你差点把顺序颠倒。停顿后又补了一句：“但至少你知道自己改了什么。”这几乎接近夸奖。' },
          { label: '安静等批评', delta: 2, response: '斯内普没有立刻说话，只用银匙拨开药液表面。最后他说颜色“尚可”。你决定把这个词记住。' },
        ],
      },
      {
        id: 'snape_bespoke_protection_disguised',
        minTier: 4,
        text: '走廊里有人拿一瓶来历不明的药剂炫耀。斯内普教授忽然出现，一句话就把所有人冻在原地。',
        choices: [
          { label: '注意他先收走药瓶', delta: 5, response: '你发现他骂人之前先把瓶塞拧紧，避开了溅出的风险。斯内普看见你的目光，冷声说：“别把基本常识误认成善意。”' },
          { label: '事后问那药危险吗', delta: 4, response: '他瞥你一眼，说危险到足够让蠢货安静三天。可他还是告诉你该怎么辨认那股气味。' },
        ],
      },
    ],
  },
  filiusFlitwick: {
    activeChatEvents: [
      {
        id: 'flitwick_bespoke_tiny_sound',
        minTier: 2,
        text: '弗立维教授站在一摞书上，示范同一个咒语的两个发音。差别小得几乎听不出，他却像在展示两种完全不同的音乐。',
        choices: [
          { label: '请他再念慢一点', delta: 4, response: '他高兴得眼睛发亮，立刻放慢到每个音节都能落在空气里。你终于听出那一点细微差别。' },
          { label: '试着复述区别', delta: 3, response: '你说得不完全准，但方向对了。弗立维教授用魔杖尖在空中点出一个小小光点，说这就是进步的位置。' },
        ],
      },
      {
        id: 'flitwick_bespoke_short_student',
        minTier: 4,
        text: '下课后，一个个子很小的新生因为够不到练习物而沮丧。弗立维教授没有立刻施法帮他，只把讲台旁的书堆推过去。',
        choices: [
          { label: '帮忙稳住书堆', delta: 4, response: '你扶住书堆，新生终于完成咒语。弗立维教授对你眨眨眼，像你们共同守住了一点不伤自尊的帮助。' },
          { label: '问他为什么不直接施法', delta: 5, response: '他说有些高度要让学生自己站上去，哪怕那高度来自几本旧书。这个回答轻快，却很温柔。' },
        ],
      },
    ],
  },
  pomonaSprout: {
    activeChatEvents: [
      {
        id: 'sprout_bespoke_gloves',
        minTier: 2,
        text: '斯普劳特教授在温室门口分发手套，每一副都检查过接缝。她看见你戴得不够紧，立刻把你叫住。',
        choices: [
          { label: '重新扣好手套', delta: 3, response: '她满意地点头，说勇敢和粗心不是一回事。温室里的植物像是听懂了这句话，叶子轻轻抖了一下。' },
          { label: '问今天的植物危险吗', delta: 3, response: '她笑着说当然危险，所以才值得好好学。随后她把最容易被咬的地方指给你看。' },
        ],
      },
      {
        id: 'sprout_bespoke_after_storm',
        minTier: 4,
        text: '暴风雨后，温室有几盆植物被吹歪。斯普劳特教授蹲在泥水里扶正它们，袍角全湿了，却一点也不急。',
        choices: [
          { label: '一起扶正花盆', delta: 5, response: '你们把一盆盆植物扶回原位。斯普劳特教授说有些东西受惊后不能催，植物和学生都一样。' },
          { label: '递给她干毛巾', delta: 4, response: '她接过毛巾，笑得很暖，说你总算先照顾到活人了。随后她又立刻去看下一盆植物。' },
        ],
      },
    ],
  },
  albusDumbledore: {
    activeChatEvents: [
      {
        id: 'dumbledore_bespoke_lemon_drop',
        minTier: 2,
        text: '邓布利多在大礼堂人少时递给你一颗柠檬雪宝，像这只是再普通不过的糖果邀请。他的半月形眼镜后，目光却像已经知道你有问题想问。',
        choices: [
          { label: '接过糖果', delta: 3, response: '糖果酸得你差点皱脸。邓布利多愉快地说，很多重要问题也差不多，第一口总不太像人们期待的甜。' },
          { label: '问他是不是知道什么', delta: 4, response: '他眨眨眼，说知道许多事和该说许多事是两种完全不同的麻烦。你没有得到答案，却得到一个更好的问题。' },
        ],
      },
      {
        id: 'dumbledore_bespoke_choice',
        minTier: 4,
        text: '校长室门外的滴水嘴石兽安静得不寻常。邓布利多站在门边，没有请你进去，只和你一起看着窗外的天色。',
        choices: [
          { label: '问选择会不会太晚', delta: 5, response: '邓布利多没有立刻回答。过了一会儿他说，太晚的选择仍然是选择，只是代价会更诚实。' },
          { label: '说你不知道该信谁', delta: 5, response: '他轻轻点头，说这不是坏事。完全不怀疑的人常常更危险；真正重要的是怀疑之后仍愿意善良。' },
        ],
      },
    ],
  },
  remusLupin: {
    activeChatEvents: [
      {
        id: 'lupin_bespoke_chocolate',
        minTier: 2,
        text: '卢平教授课后把一小块巧克力推到你面前。他看起来有些疲惫，却仍先问你刚才那次练习有没有被吓到。',
        choices: [
          { label: '承认有点害怕', delta: 4, response: '他点点头，像这正是一个值得认真对待的答案。「好，」他说，「那我们从害怕开始，而不是假装它不存在。」' },
          { label: '问他为什么总带巧克力', delta: 3, response: '他笑了笑，说有些简单东西确实有用。停了一下又补充，尤其是在世界突然变冷以后。' },
        ],
      },
      {
        id: 'lupin_bespoke_teacher_limit',
        minTier: 4,
        text: '黑魔法防御术教室空下来后，卢平教授还在收拾博格特柜子。他的动作很慢，像每一次关上柜门都需要多一点力气。',
        choices: [
          { label: '问他是不是也会怕', delta: 5, response: '卢平教授没有否认。「当然。」他说，「只是年纪大一点的人比较会把害怕放到合适的位置。」' },
          { label: '帮他收拾教具', delta: 4, response: '你把护具叠好。他看见后轻声道谢，说有些课后工作不难，只是一个人做会显得很长。' },
        ],
      },
    ],
  },
  siriusBlack: {
    activeChatEvents: [
      {
        id: 'sirius_bespoke_unsigned_note',
        minTier: 2,
        text: '你在书页里发现一张没有署名的短笺，提醒你今晚别走三楼东侧。字迹潦草，墨水像是匆忙中抹开的。',
        choices: [
          { label: '照着提醒绕路', delta: 3, response: '你改走另一边，远远听见费尔奇在东侧走廊咆哮。第二天，那张短笺不见了，只留下一根黑色狗毛似的东西。' },
          { label: '把短笺收好', delta: 4, response: '你没有把它拿去给教授看。后来又有一张新纸条出现，只有两个字：聪明。' },
        ],
      },
      {
        id: 'sirius_bespoke_reckless_care',
        minTier: 4,
        text: '一封短笺夹在猫头鹰送来的广告里，语气非常不客气地骂你差点走进麻烦。骂完以后，最后一行又写着：下次看路。',
        choices: [
          { label: '回一句你知道了', delta: 4, response: '你把回信夹回原处。第二天纸条上多了一句：知道不等于会做。那种关心粗鲁得几乎发烫。' },
          { label: '写谢谢', delta: 5, response: '很久没有回应。等你几乎忘了，纸条背面出现一句潦草的话：别谢，活着就行。' },
        ],
      },
    ],
  },
};

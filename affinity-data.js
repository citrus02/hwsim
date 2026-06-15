﻿﻿﻿﻿﻿/**
 * affinity-data.js
 * 好感度系统：人物配置、阶段文本、偶遇事件、阶段解锁内容
 */

import { STAFF_LONGTAIL_PACK_ENRICHMENTS } from './affinity-content/staff/common/longtail-scenes.js';
import { STAFF_BESPOKE_SCENE_ENRICHMENTS } from './affinity-content/staff/year1/core-scenes.js';
import { STAFF_SECONDARY_BESPOKE_SCENE_ENRICHMENTS } from './affinity-content/staff/year1/subject-teachers-scenes.js';
import { STAFF_BESPOKE_ENCOUNTER_ENRICHMENTS } from './affinity-content/staff/year1/encounters.js';
import { STAFF_YEAR1_DEPTH_SCENE_ENRICHMENTS } from './affinity-content/staff/year1/depth-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_SCENES } from './affinity-content/staff/year1/encounter-plus-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_2_SCENES } from './affinity-content/staff/year1/encounter-plus-2-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_3_SCENES } from './affinity-content/staff/year1/encounter-plus-3-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_4_SCENES } from './affinity-content/staff/year1/encounter-plus-4-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_5_SCENES } from './affinity-content/staff/year1/encounter-plus-5-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_6_SCENES } from './affinity-content/staff/year1/encounter-plus-6-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_7_SCENES } from './affinity-content/staff/year1/encounter-plus-7-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_8_SCENES } from './affinity-content/staff/year1/encounter-plus-8-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_9_SCENES } from './affinity-content/staff/year1/encounter-plus-9-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_10_SCENES } from './affinity-content/staff/year1/encounter-plus-10-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_11_SCENES } from './affinity-content/staff/year1/encounter-plus-11-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_12_SCENES } from './affinity-content/staff/year1/encounter-plus-12-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_13_SCENES } from './affinity-content/staff/year1/encounter-plus-13-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_14_SCENES } from './affinity-content/staff/year1/encounter-plus-14-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_15_SCENES } from './affinity-content/staff/year1/encounter-plus-15-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_16_SCENES } from './affinity-content/staff/year1/encounter-plus-16-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_17_SCENES } from './affinity-content/staff/year1/encounter-plus-17-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_18_SCENES } from './affinity-content/staff/year1/encounter-plus-18-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_19_SCENES } from './affinity-content/staff/year1/encounter-plus-19-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_20_SCENES } from './affinity-content/staff/year1/encounter-plus-20-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_21_SCENES } from './affinity-content/staff/year1/encounter-plus-21-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_22_SCENES } from './affinity-content/staff/year1/encounter-plus-22-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_23_SCENES } from './affinity-content/staff/year1/encounter-plus-23-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_24_SCENES } from './affinity-content/staff/year1/encounter-plus-24-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_25_SCENES } from './affinity-content/staff/year1/encounter-plus-25-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_26_SCENES } from './affinity-content/staff/year1/encounter-plus-26-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_27_SCENES } from './affinity-content/staff/year1/encounter-plus-27-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_28_SCENES } from './affinity-content/staff/year1/encounter-plus-28-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_29_SCENES } from './affinity-content/staff/year1/encounter-plus-29-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_30_SCENES } from './affinity-content/staff/year1/encounter-plus-30-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_31_SCENES } from './affinity-content/staff/year1/encounter-plus-31-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_32_SCENES } from './affinity-content/staff/year1/encounter-plus-32-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_33_SCENES } from './affinity-content/staff/year1/encounter-plus-33-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_34_SCENES } from './affinity-content/staff/year1/encounter-plus-34-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_35_SCENES } from './affinity-content/staff/year1/encounter-plus-35-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_36_SCENES } from './affinity-content/staff/year1/encounter-plus-36-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_37_SCENES } from './affinity-content/staff/year1/encounter-plus-37-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_38_SCENES } from './affinity-content/staff/year1/encounter-plus-38-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_39_SCENES } from './affinity-content/staff/year1/encounter-plus-39-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_40_SCENES } from './affinity-content/staff/year1/encounter-plus-40-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_41_SCENES } from './affinity-content/staff/year1/encounter-plus-41-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_42_SCENES } from './affinity-content/staff/year1/encounter-plus-42-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_43_SCENES } from './affinity-content/staff/year1/encounter-plus-43-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_44_SCENES } from './affinity-content/staff/year1/encounter-plus-44-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_45_SCENES } from './affinity-content/staff/year1/encounter-plus-45-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_46_SCENES } from './affinity-content/staff/year1/encounter-plus-46-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_47_SCENES } from './affinity-content/staff/year1/encounter-plus-47-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_48_SCENES } from './affinity-content/staff/year1/encounter-plus-48-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_49_SCENES } from './affinity-content/staff/year1/encounter-plus-49-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_50_SCENES } from './affinity-content/staff/year1/encounter-plus-50-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_51_SCENES } from './affinity-content/staff/year1/encounter-plus-51-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_52_SCENES } from './affinity-content/staff/year1/encounter-plus-52-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_53_SCENES } from './affinity-content/staff/year1/encounter-plus-53-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_54_SCENES } from './affinity-content/staff/year1/encounter-plus-54-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_55_SCENES } from './affinity-content/staff/year1/encounter-plus-55-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_56_SCENES } from './affinity-content/staff/year1/encounter-plus-56-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_57_SCENES } from './affinity-content/staff/year1/encounter-plus-57-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_58_SCENES } from './affinity-content/staff/year1/encounter-plus-58-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_59_SCENES } from './affinity-content/staff/year1/encounter-plus-59-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_60_SCENES } from './affinity-content/staff/year1/encounter-plus-60-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_61_SCENES } from './affinity-content/staff/year1/encounter-plus-61-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_62_SCENES } from './affinity-content/staff/year1/encounter-plus-62-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_63_SCENES } from './affinity-content/staff/year1/encounter-plus-63-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_64_SCENES } from './affinity-content/staff/year1/encounter-plus-64-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_65_SCENES } from './affinity-content/staff/year1/encounter-plus-65-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_66_SCENES } from './affinity-content/staff/year1/encounter-plus-66-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_67_SCENES } from './affinity-content/staff/year1/encounter-plus-67-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_68_SCENES } from './affinity-content/staff/year1/encounter-plus-68-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_69_SCENES } from './affinity-content/staff/year1/encounter-plus-69-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_70_SCENES } from './affinity-content/staff/year1/encounter-plus-70-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_71_SCENES } from './affinity-content/staff/year1/encounter-plus-71-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_72_SCENES } from './affinity-content/staff/year1/encounter-plus-72-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_73_SCENES } from './affinity-content/staff/year1/encounter-plus-73-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_74_SCENES } from './affinity-content/staff/year1/encounter-plus-74-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_75_SCENES } from './affinity-content/staff/year1/encounter-plus-75-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_76_SCENES } from './affinity-content/staff/year1/encounter-plus-76-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_77_SCENES } from './affinity-content/staff/year1/encounter-plus-77-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_78_SCENES } from './affinity-content/staff/year1/encounter-plus-78-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_79_SCENES } from './affinity-content/staff/year1/encounter-plus-79-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_80_SCENES } from './affinity-content/staff/year1/encounter-plus-80-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_81_SCENES } from './affinity-content/staff/year1/encounter-plus-81-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_82_SCENES } from './affinity-content/staff/year1/encounter-plus-82-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_83_SCENES } from './affinity-content/staff/year1/encounter-plus-83-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_84_SCENES } from './affinity-content/staff/year1/encounter-plus-84-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_85_SCENES } from './affinity-content/staff/year1/encounter-plus-85-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_86_SCENES } from './affinity-content/staff/year1/encounter-plus-86-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_87_SCENES } from './affinity-content/staff/year1/encounter-plus-87-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_88_SCENES } from './affinity-content/staff/year1/encounter-plus-88-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_89_SCENES } from './affinity-content/staff/year1/encounter-plus-89-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_90_SCENES } from './affinity-content/staff/year1/encounter-plus-90-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_91_SCENES } from './affinity-content/staff/year1/encounter-plus-91-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_92_SCENES } from './affinity-content/staff/year1/encounter-plus-92-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_93_SCENES } from './affinity-content/staff/year1/encounter-plus-93-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_94_SCENES } from './affinity-content/staff/year1/encounter-plus-94-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_95_SCENES } from './affinity-content/staff/year1/encounter-plus-95-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_96_SCENES } from './affinity-content/staff/year1/encounter-plus-96-scenes.js';
import { STAFF_YEAR1_ENCOUNTER_PLUS_97_SCENES } from './affinity-content/staff/year1/encounter-plus-97-scenes.js';
import { STAFF_YEAR1_CHAT_PLUS_SCENES } from './affinity-content/staff/year1/chat-plus-scenes.js';
import { STAFF_YEAR1_CHAT_PLUS_BATCH_2_SCENES } from './affinity-content/staff/year1/chat-plus-batch-2-scenes.js';
import { STAFF_YEAR1_CHAT_PLUS_BATCH_3_SCENES } from './affinity-content/staff/year1/chat-plus-batch-3-scenes.js';
import { STAFF_YEAR1_CHAT_PLUS_BATCH_4_SCENES } from './affinity-content/staff/year1/chat-plus-batch-4-scenes.js';
import { STAFF_YEAR1_CHAT_PLUS_BATCH_5_SCENES } from './affinity-content/staff/year1/chat-plus-batch-5-scenes.js';
import { STAFF_YEAR1_CHAT_PLUS_BATCH_6_SCENES } from './affinity-content/staff/year1/chat-plus-batch-6-scenes.js';
import { STAFF_YEAR1_CHAT_PLUS_BATCH_7_SCENES } from './affinity-content/staff/year1/chat-plus-batch-7-scenes.js';
import { STAFF_YEAR1_CHAT_PLUS_BATCH_8_SCENES } from './affinity-content/staff/year1/chat-plus-batch-8-scenes.js';
import { STAFF_YEAR1_CHAT_PLUS_BATCH_9_SCENES } from './affinity-content/staff/year1/chat-plus-batch-9-scenes.js';
import { STAFF_YEAR1_CHAT_PLUS_BATCH_10_SCENES } from './affinity-content/staff/year1/chat-plus-batch-10-scenes.js';
import { STAFF_YEAR1_CHAT_PLUS_BATCH_11_SCENES } from './affinity-content/staff/year1/chat-plus-batch-11-scenes.js';
import { STAFF_YEAR1_CHAT_PLUS_BATCH_12_SCENES } from './affinity-content/staff/year1/chat-plus-batch-12-scenes.js';
import { STAFF_YEAR1_CHAT_PLUS_BATCH_13_SCENES } from './affinity-content/staff/year1/chat-plus-batch-13-scenes.js';
import { STAFF_YEAR1_CHAT_PLUS_BATCH_14_SCENES } from './affinity-content/staff/year1/chat-plus-batch-14-scenes.js';
import { STAFF_YEAR1_CHAT_PLUS_BATCH_15_SCENES } from './affinity-content/staff/year1/chat-plus-batch-15-scenes.js';
import { STAFF_YEAR1_CHAT_PLUS_BATCH_16_SCENES } from './affinity-content/staff/year1/chat-plus-batch-16-scenes.js';

export const AFFINITY_CHARACTERS = {
  augustusFenwick: {
    key: 'augustusFenwick',
    name: '奥古斯都·芬威克',
    role: '数学讲师',
    icon: '🔢',
    subject: '数学',
    tiers: [
      '他不记得你的名字。但他记得你第三道题做错在哪一步。',
      '他开始在讲课时用你的错题作例子，不说名字，但你认得出来。',
      '他在你的作业本上写了不只一行批注。对他来说，这相当于长篇演讲。',
      '他留了一道题在黑板右下角，那道题没有写给全班——写完课他站在那道题前等了一会儿，然后看了你一眼。',
      '他在某次测验后沉默了比平时更长的时间，然后说：「这道题，你是自己想到的。」'
    ],
    tierUnlocks: [null, '解锁：芬威克专属课堂事件（更细腻的师生互动）', '解锁：偶遇事件「黑板上留给你的题」', '解锁：个人故事碎片《他唯一的遗憾》', '解锁：专属信件 + 成就「宇宙的语言」'],
    encounters: [{
      id: 'fenwick_enc_1',
      area: '魔药课教室',
      minTier: 2,
      text: '放学后的走廊，你碰到芬威克教授一个人站在黑板前，在一道未解题旁边写了什么又擦掉。他没注意到你。',
      choices: [{ label: '悄悄离开', delta: 0, response: '你走了。那道题在第二天还在黑板上。' }, { label: '走进去看一眼那道题', delta: 3, response: '他听到脚步声转身，看你一眼，又转回去。「你要看就看，」他说，「但别问我答案——我也不知道。」' }]
    }, {
      id: 'fenwick_enc_2',
      area: '城堡图书馆',
      minTier: 3,
      oneTime: true,
      text: '图书馆里，芬威克教授正在翻一本麻瓜数学期刊，他那台磨白按键的计算器放在旁边。他抬眼看到你，停了一下。',
      choices: [{ label: '「教授，那是什么题？」', delta: 5, response: '「黎曼猜想，」他说，「麻瓜数学家还没解开。我也没解开。」他把计算器推到你面前，「你来按一遍这串数字。」你们就这么在图书馆待了半个小时。' }, { label: '找自己的位置坐下', delta: 1, response: '他低头继续看期刊。但临走时他合上书，说：「下次来早一点，这里安静。」' }]
    }],
    story: {
      title: '他唯一的遗憾',
      unlockTier: 4,
      text: '奥古斯都·芬威克从未在麻瓜世界长期生活过。这是他唯一的遗憾。他写《无魔之算》花了七年。所有数据来自魔法部档案室的麻瓜文献馆。他申请过麻瓜融入计划，被拒了两次，理由是「年龄偏大，适应风险较高」。第三次申请时，他已经收到霍格沃茨的邀请。他在自己办公室里有一份1990年代的伦敦地图，是麻瓜版本，上面有地铁线路。他用红笔圈出了几个地方，没有标注名字。学生问过他为什么圈那些地方。他说：「想去看看。」那张地图一直在那里。'
    },
    letter: {
      unlockTier: 5,
      text: '字迹歪斜，墨迹有些晕开，像是在匆忙中写的。「我不写信。但我写了这封。你在第六课的测验里，最后一题用了一个我没教过的方法。我检查了两遍，是对的。那个方法比我教的简洁。我在想，你是怎么想到的。如果你愿意，可以来告诉我。不计入成绩，只是……我想知道。——芬威克。P.S. 黑板右下角那道题的答案，我还没有。但方向应该是对的。」'
    }
  },
  serafinaMoody: {
    key: 'serafinaMoody',
    name: '塞拉菲娜·穆迪',
    role: '物理讲师',
    icon: '⚡',
    subject: '物理',
    tiers: [
      '她上课永远有爆炸，有噪音，有演示失败再分析，你在里面是一个观众。',
      '她课上开始点你的名字问问题，不是为了测试——是因为她想听你的想法。',
      '她演示失败时看了你一眼，「这是今天第二个知识点——你来说说哪里出问题了。」',
      '她课后拦住你，递给你一件拆开的麻瓜电器，「下周你告诉我这是什么。」',
      '她某节课突然停下来，说了一句和物理无关的话。那句话你记了很久。'
    ],
    tierUnlocks: [null, '解锁：塞拉菲娜专属课堂互动文本', '解锁：偶遇事件「她递给你的那件电器」', '解锁：个人故事碎片《伦敦七年》', '解锁：专属信件 + 成就「没有魔法也能发光」'],
    encounters: [{
      id: 'serafina_enc_1',
      area: '一楼走廊',
      minTier: 2,
      text: '走廊上，塞拉菲娜教授一手提着一个装满东西的袋子，另一手拿着一个拆了一半的麻瓜电风扇。她走路带风，从你身边经过时叶片差点碰到你。',
      choices: [{ label: '「教授，要帮忙吗？」', delta: 3, response: '「帮我拿这个，」她毫不犹豫把风扇塞给你，「别问我从哪搞到的，问了我要讲三十分钟。」' }, { label: '让开路，让她过去', delta: 0, response: '她大步走过，叶片哗哗响。五步之外她回头：「你站那里像根木头。」不确定是批评还是玩笑。' }]
    }, {
      id: 'serafina_enc_2',
      area: '城堡图书馆',
      minTier: 3,
      oneTime: true,
      text: '图书馆靠窗的位置，塞拉菲娜教授坐在那里，手边不是魔法书，是一份麻瓜报纸，她看得很认真。你走近，她没有抬头。',
      choices: [{ label: '在旁边坐下，不打扰她', delta: 2, response: '过了一会儿，她把报纸推过来，指着一段话：「这是伦敦电价上涨的新闻。我认识的麻瓜朋友曾经为电费账单哭过一晚上。」她没有再说什么，收起报纸离开了。' }, { label: '「教授，您在看什么？」', delta: 4, response: '她直接把报纸翻给你看。「麻瓜的事。我在麻瓜世界那七年——」她开了个头，然后讲了很久。你没想到她会讲那么多真实的事。' }]
    }],
    story: {
      title: '伦敦七年',
      unlockTier: 4,
      text: '塞拉菲娜·穆迪在麻瓜世界生活了七年。她做过仓库员工、电器维修学徒。她拆过两百多件麻瓜电器——不是为了学术，最初只是因为她想知道它们是怎么工作的。第三年，她认识了一个麻瓜老太太，叫多萝西。多萝西七十二岁，一个人住，那年冬天的暖气坏了。塞拉菲娜花了一整个下午帮她修暖气，用的是麻瓜工具，因为那是多萝西能理解的方式。修好的时候多萝西说：「你手真巧。」塞拉菲娜在研究报告里有一章叫《麻瓜修理东西的方式：一种没有魔法的执着》。没人知道这章的标题是从多萝西那句话来的。七年结束时她回到魔法世界。离开前她给多萝西留了一个地址——是一个永远不会有回信的地址，但她仍然留了。'
    },
    letter: {
      unlockTier: 5,
      text: '信纸上有一个小油渍，像是写信的时候手上有什么东西没擦干净。「我不太写信。但这件事我想告诉你。我在麻瓜世界第四年认识了一个老太太。她后来问我：\'你会一直记得怎么修这个吗？\'我说会。我一直记得。你上次说的那句话——\'他们靠这些活着\'——你是怎么想到的？因为我花了七年才想到那句话。——塞拉菲娜·穆迪。P.S. 那件电风扇还在我办公室，你随时可以来看完它怎么工作的。」'
    }
  },
  elizaLovegood: {
    key: 'elizaLovegood',
    name: '伊莱莎·洛夫古德',
    role: '语文与文学讲师',
    icon: '📖',
    subject: '语文与文学',
    tiers: [
      '她闭眼朗读诗歌时，你是台下一个听着的学生。',
      '她开始在课上问你「你听见了什么」——不是测试，是真的想知道。',
      '她从窗台取下一本麻瓜诗集，翻到某一页，把书递给你：「你来读。」',
      '课后她说：「再往深一点呢？」你意识到你说的只是开始。',
      '她停下来，像在自言自语地说了一句话，但是看着你说的。'
    ],
    tierUnlocks: [null, '解锁：伊莱莎专属课堂文本', '解锁：偶遇事件「图书馆的那本诗集」', '解锁：个人故事碎片《没有魔力的魔法》', '解锁：专属信件 + 成就「文字是最古老的魔法」'],
    encounters: [{
      id: 'eliza_enc_1',
      area: '城堡图书馆',
      minTier: 2,
      text: '图书馆里，伊莱莎教授正在一个书架前，抽出一本书翻了翻又放回去，再抽下一本，像是在找什么但不确定自己要找什么。',
      choices: [{ label: '「教授在找什么书？」', delta: 3, response: '她停下来看你。「一首诗。不确定在哪本书里。」她说完继续翻，「你喜欢诗吗？」不是一般的问候，她是真的在问。' }, { label: '帮她一起找', delta: 4, response: '你们在书架前站了二十分钟。最后她从一本不相干的文集里找到了那首诗。「谢谢，」她说，「陪着找这件事本身就有意义。」' }]
    }, {
      id: 'eliza_enc_2',
      area: '教师办公室走廊',
      minTier: 4,
      oneTime: true,
      text: '你路过伊莱莎教授的办公室，门半开着。她坐在窗边，手里拿着一本书，但没在看，只是看窗外。',
      choices: [{ label: '轻轻敲门', delta: 5, response: '她转头，神情平静。「进来，」她说，「你来得正好，我在想一个问题，没有答案——你愿不愿意帮我想？」你进去坐了很久。' }, { label: '悄悄走开', delta: 1, response: '你没打扰她。但第二天她在课上说：「有时候，一个人看窗外需要另一个人悄悄走过去再走开。」' }]
    }],
    story: {
      title: '没有魔力的魔法',
      unlockTier: 4,
      text: '伊莱莎·洛夫古德开这门课之前，没有人认为「语文与文学」应该是麻瓜研究系的必修内容。她花了三年游说课程委员会。不是用论文，是用一首诗。她在委员会会议上朗读了那首诗——一首麻瓜诗人写的，关于失去一个人的感受。读完，她说：「这首诗没有魔力。但我读完它觉得某个东西改变了。你也是吧？」委员会沉默了很长时间。「开课，」最后有人说，「但你要能让学生感受到这个，不只是分析它。」伊莱莎每节课都闭眼朗读一首诗。不是表演，是因为她真的每次都在重新感受一遍。她说过：「文字是没有魔力的魔法。」她从不解释这句话是什么意思。'
    },
    letter: {
      unlockTier: 5,
      text: '信写在一张浅蓝色的纸上，字迹很轻。「我不常写信，因为我更相信说出来的话。但有些话，写下来更接近它本来的样子。你上次在课上说——麻瓜的文字留下了他们真正想说的话，不是魔法，也不需要是。我当时没说什么。我应该说：是的，你说的是对的。文字不需要魔力。你也不需要什么特别的理由才能被打动。——伊莱莎。P.S. 窗台那本诗集，你可以借走。」'
    }
  },
  constanceShacklebolt: {
    key: 'constanceShacklebolt',
    name: '康斯坦丝·沙克博特',
    role: '道德与法治讲师',
    icon: '⚖️',
    subject: '道德与法治',
    tiers: [
      '她把你的作业还给你，没有评语，只有一个分数。',
      '她把作业还给你，分数旁边多了一行字：「论证方向正确，但没走完。」',
      '她课上问了你一个问题，等了很长时间，直到你自己想清楚才继续。',
      '你课后留下来问她一个问题，聊了一个小时，她没看一次时间。',
      '她在你的论文最后一行写了额外的两行批注——她说，她破了自己的记录。'
    ],
    tierUnlocks: [null, '解锁：康斯坦丝专属课堂文本', '解锁：偶遇事件「她在等你自己想清楚」', '解锁：个人故事碎片《不要同情，要理解》', '解锁：专属信件 + 成就「论证成立」'],
    encounters: [{
      id: 'constance_enc_1',
      area: '城堡图书馆',
      minTier: 2,
      text: '图书馆里，康斯坦丝教授把麻瓜议会的资料和魔法部文件并排放在桌上，对比看着。她没有在做笔记，只是看。',
      choices: [{ label: '「教授，这两个有什么关系？」', delta: 4, response: '她把两份文件推过来，「你先说。」你说了一分钟，她一直听，什么都没打断。最后：「你看见了一个，还差一个。」' }, { label: '在旁边安静坐下', delta: 1, response: '她没有理你，继续看资料。但临走时她说：「你能安静坐下的人不多。」' }]
    }, {
      id: 'constance_enc_2',
      area: '教师办公室走廊',
      minTier: 4,
      oneTime: true,
      text: '你在走廊上碰到康斯坦丝教授，她正把一叠作业夹在手臂下，另一手拿着一个麻瓜法律文本。她停下来，看了你一眼。',
      choices: [{ label: '「教授，有时间吗，我有个问题——」', delta: 5, response: '「现在有，」她直接说，「说。」你们在走廊里站了半个小时。有两个其他学生路过，她完全没注意到。' }, { label: '点头走过', delta: 0, response: '她也点头。走了几步她回头：「你那篇论文的第三段，下次有时间再谈。」然后继续走。' }]
    }],
    story: {
      title: '不要同情，要理解',
      unlockTier: 4,
      text: '康斯坦丝·沙克博特在第一节课就说了这句话：「不要同情他们，要理解他们。同情是居高临下，理解才是平等。」这句话在麻瓜研究系内部引发了半个学期的讨论。赫伯特·宾斯二世认为她说得对但太冷。伊莱莎·洛夫古德认为理解和同情不是对立的。课程委员会没有表态，但在下一次会议上，有人引用了这句话。康斯坦丝自己的来历复杂——她的家族里有曾在魔法部做过联络官的长辈，见过太多「同情麻瓜」最后变成俯视麻瓜的例子。她不说这些。她只教学生怎么分析一个制度，怎么看见权力的结构，怎么在不带情绪的情况下理解一个和自己不同的世界。她课后和学生谈过最长的一次话：四个小时。那个学生后来在魔法部做了政策研究。康斯坦丝听说这件事时的反应是：「那很好。」'
    },
    letter: {
      unlockTier: 5,
      text: '一张正式的白色信纸，字迹工整，没有一处涂改。「你上学期的最后一篇论文，我给了满分。这是我教课以来第三次给满分。不是因为你的结论对——结论在这门课里从来不是重点。是因为你在论证过程里改变了自己的立场，并且解释了为什么。这比得出正确答案难得多。如果你以后有机会做任何和政策、制度、法律有关的事，记住这件事。——沙克博特」'
    }
  },
  severusSnape: {
    key: 'severusSnape',
    name: '西弗勒斯·斯内普',
    role: '魔药学教授',
    icon: '🧪',
    subject: '魔药学',
    isSnapeMode: true,
    tiers: [
      '他叫不出你的名字。你只是另一个会在魔药课上搞砸的学生。',
      '他知道你的名字，但只在出错时提起它。',
      '他在你的魔药失败时，语气里少了一点什么——不是宽容，只是没有以前那么锋利。',
      '他路过你的实验台，停了一秒，什么都没说，然后走了。但你的药剂那次没有被当众批评。',
      '某次你遇到困难，不是在课堂上，也不是关于魔药的。他知道了，出了手。没有解释，没有承认。'
    ],
    tierUnlocks: [null, '解锁：斯内普专属评语（刻薄但稍有不同）', '解锁：偶遇事件「走廊上的那一秒」', '解锁：个人故事碎片《混血王子的注脚》', '解锁：专属信件 + 成就「他没有说」'],
    encounters: [{
      id: 'snape_enc_1',
      area: '一楼走廊',
      minTier: 2,
      text: '走廊上，斯内普教授从你身边走过，没有声音，但你感觉到了他的存在。他没有看你，但走过去之后他慢了半步。',
      choices: [{ label: '假装没注意到', delta: 1, response: '他继续走了。什么都没发生，但那半步你一直记得。' }, { label: '「教授。」', delta: -1, response: '他回头，表情没有变化。「走廊不是说话的地方。」然后走了。' }]
    }, {
      id: 'snape_enc_2',
      area: '魔药课教室',
      minTier: 3,
      oneTime: true,
      text: '深夜，你在魔药课教室补一个实验，灯光昏暗。你没想到斯内普会出现——他站在门口，看了你一眼，看了实验台一眼。',
      choices: [{ label: '「教授……我在补课。」', delta: 2, response: '「我看见了，」他说，「那个火候还差两度。」然后他走进来，在你的实验台旁边站了十分钟，什么都没再说。药剂那晚成功了。' }, { label: '沉默，继续实验', delta: 3, response: '他在门口站了一会儿。你没有回头。他最后走进来，在你背后的架子上取了一瓶试剂放到你手边，然后离开。那瓶试剂正是你缺少的那味。' }]
    }],
    story: {
      title: '半血王子的注脚',
      unlockTier: 4,
      text: '西弗勒斯·斯内普的父亲是麻瓜。他从不谈论这件事。麻瓜研究系档案室的借阅记录里有他的名字，借阅日期是深夜，归还日期是第二天清晨。他借过的书是麻瓜工业化学期刊和一本关于纺织工业的历史。他订阅了麻瓜研究系的内部学报，从未退订。他的课本里有几处空白处密密麻麻的注解，大多数是关于配方的，但有一条在某个关于麻瓜工业的注脚旁边写着三个字：「父亲厂。」那本课本现在在禁书区存档，没有人特别注意过那三个字。'
    },
    letter: {
      unlockTier: 5,
      text: '没有信封。一张撕下来的羊皮纸，折叠成方块，放在你的实验台上。字迹很小，墨水颜色比平时用的深。「上周你的情况我知道了。我处理了。不要问是怎么处理的。不要来道谢。不要在走廊上提这件事。——S.S.」纸的背面有半行字，像是写了又用墨涂掉的，但对着光还是能看见几个字的轮廓。你没有去猜那几个字是什么。'
    }
  },
  minervaMcGonagall: {
    key: 'minervaMcGonagall',
    name: '米勒娃·麦格',
    role: '变形学教授 / 格兰芬多院长',
    icon: '🦁',
    subject: '变形术',
    tiers: [
      '她对你的标准和对其他三百个学生完全一样。',
      '她在你做对了的时候，沉默了一秒再继续——你开始明白那一秒的意思。',
      '她课上说了「做得不错」。班里有人倒抽一口气。你也是。',
      '她在课后单独叫住你，不为批评——只是说了一句和课程无关的话。',
      '多年后你偶尔想起她，想起的不是课堂上的某道题，是她某次说话的方式。'
    ],
    tierUnlocks: [null, '解锁：麦格专属课堂文本', '解锁：偶遇事件「苏格兰饼干」', '解锁：个人故事碎片《她的麻瓜父亲》', '解锁：专属信件 + 成就「做得不错」'],
    encounters: [{
      id: 'mcgonagall_enc_1',
      area: '霍格沃茨大礼堂',
      minTier: 2,
      text: '早饭时间，你看到麦格教授站在大礼堂门口，手里拿着一叠通知，神情严肃地扫视全场。她的目光在你身上停留了半秒。',
      choices: [{ label: '低头吃饭', delta: 0, response: '她继续扫视。什么都没发生。' }, { label: '点头致意', delta: 2, response: '她回了一个极轻微的点头。你不确定这算不算表情，但那个点头是真实的。' }]
    }, {
      id: 'mcgonagall_enc_2',
      area: '教师办公室走廊',
      minTier: 3,
      oneTime: true,
      text: '你经过麦格教授的办公室，门开着，她在看一份文件。桌上有一盒苏格兰饼干，开着。她听到脚步声抬起头。',
      choices: [{ label: '「教授，打扰了——」快步走过', delta: 1, response: '「不是打扰，」她说，「进来一下。」你进去，她把饼干盒推过来，「坐。」就这么待了十分钟，什么正事都没谈。' }, { label: '停下来敲门', delta: 4, response: '「进来，」她说，声音比在课堂上少一点力气，多一点正常。「吃块饼干，」她说，「这是苏格兰的。」你们谈了一些和课程无关的事。' }]
    }],
    story: {
      title: '她的麻瓜父亲',
      unlockTier: 4,
      text: '米勒娃·麦格的父亲是麻瓜牧师。她从未在课堂上提过这件事。她比大多数霍格沃茨教授更了解麻瓜世界日常是什么样的——不是抽象的了解，是具体的：周日早上父亲讲道的样子，邻居们的名字，村子里谁家屋顶漏水。她和麻瓜研究系的教授们保持着一种默契的支持关系。在课程委员会，麦格从不主动发言支持麻瓜研究系，但她的投票始终倾向于这门课程的发展。这件事，大家都心照不宣。'
    },
    letter: {
      unlockTier: 5,
      text: '霍格沃茨院长信纸，笔迹严谨，字间距均匀。「我不习惯写这类信件。但这封是应该写的。你在这里的这段时间，我注意到你的进步——不只是课堂上的，是更难描述的那种。你越来越清楚自己在做什么，为什么做。这比学会任何一个咒语都难。苏格兰的饼干还有，你随时可以来。——麦格」'
    }
  },
  albusDumbledore: {
    key: 'albusDumbledore',
    name: '阿不思·邓布利多',
    role: '校长',
    icon: '✨',
    subject: null,
    initValue: 40,
    tiers: ['——', '——', '他在走廊上叫出了你的名字，好像早就知道它。你没有告诉过他。', '他在某次意外场合停下来，和你说了一句话。那句话听起来随意，但你想了很久。', '你意识到他其实一直在某处注意着你——不是监视，是一种你说不清楚但感觉得到的关注。'],
    tierUnlocks: [null, null, '已解锁：邓布利多会主动在走廊打招呼', '解锁：偶遇事件「他说的那句话」', '解锁：专属信件 + 成就「他早就知道了」'],
    encounters: [{
      id: 'dumbledore_enc_1',
      area: '城堡正门门厅',
      minTier: 3,
      text: '门厅里，邓布利多校长正要离开，他停下来，转身，准确地看向你，像是早就知道你在那里。「啊，」他说，「就是你。」',
      choices: [{ label: '「校长？」', delta: 3, response: '「没什么，」他笑了，「只是印证了一件我早就知道的事。」然后他走了，留下你在门厅里站着，不知道他说的是什么。' }, { label: '「……您认识我？」', delta: 4, response: '「当然，」他说，「霍格沃茨很大，但你不容易忘记。」他说完就走了，像是什么都没有发生过。' }]
    }, {
      id: 'dumbledore_enc_2',
      area: '霍格沃茨大礼堂',
      minTier: 4,
      oneTime: true,
      text: '大礼堂里，邓布利多校长从教师桌那端站起来，绕了一大圈，走到你面前。他弯下腰，低声说了一句话，然后转身走回去，像是只是路过。',
      choices: [{ label: '（听清楚了）', delta: 5, response: '他说的是：「音乐——或者任何你真正感受到的东西——比我们在这里教的任何魔法都更高级。你已经知道这件事了。」你不知道他怎么知道你知道。' }]
    }],
    letter: {
      unlockTier: 5,
      text: '信纸是薰衣草色的，上面有一点蜜蜂糖的甜味。「我很少写信给学生——这不是因为我不想，而是因为很多事情说出来反而少了一些什么。但这件事我想写下来：你来到这里的这段时间，我在不同的地方看见过你，在你以为没有人注意的时候。你在思考真正重要的事，不是考试，不是分数，是那些没有标准答案的事。这是很少见的。我放了一块蜜蜂糖在信里，不是因为这是惯例，是因为我觉得你今天需要它。——邓布利多」信纸下面，是一块蜂蜜色的糖。'
    }
  },
  primroseSprout: {
    key: 'primroseSprout',
    name: '普里姆罗斯·斯普劳特',
    role: '化学讲师',
    icon: '🌸',
    subject: '化学',
    tiers: ['她记得你的实验编号，不记得你的名字——对她来说，这是一视同仁的标准。', '你的实验快失败的那次，她路过，没有批评，只是轻轻把酒精灯调低了两格。', '她在你的实验报告旁留了一行小字：「这个思路值得继续。」字很小，但在那里。', '课后她叫住你，说了一些不在教学大纲里的东西——像是在告诉你化学真正让她着迷的是什么。', '你发现了一个她没提过的现象。她静静看了一会儿，说：「你注意到了。」'],
    tierUnlocks: [null, '解锁：普里姆罗斯专属课堂反馈', '解锁：偶遇事件「实验室里的那个下午」', '解锁：个人故事碎片', '解锁：专属信件']
  },
  tavishMacLaren: {
    key: 'tavishMacLaren',
    name: '塔维什·麦克拉伦',
    role: '生物讲师',
    icon: '🔬',
    subject: '生物',
    tiers: ['他说话很慢，像是在给每句话留出思考的空间。你是三十个听众之一。', '他提问，你回答了，他点了一下头——这对他来说是明确的认可。', '他在你的作业里写的批注比你写的原文还长。你不确定该怎么形容这件事，但你觉得他认真了。', '他课后找到你，不是为了讨论作业，是因为你某次随口一说的问题——他想了很久才来问你。', '他让你看了他研究了二十年的标本。「很少有人会真的看，」他说。'],
    tierUnlocks: [null, '解锁：塔维什专属课堂互动', '解锁：偶遇事件「标本室」', '解锁：个人故事碎片', '解锁：专属信件']
  },
  herbertBinns: {
    key: 'herbertBinns',
    name: '赫伯特·宾斯',
    role: '历史讲师',
    icon: '📜',
    subject: '历史',
    tiers: ['他讲课的方式和任何你听说过的历史课都不同——他不是在背书，但你不确定他是不是在说给你听。', '他在课上点了你的名，不是考你，是问：「你觉得他们当时在想什么？」', '他把一份原始史料的复印件放在你桌上，什么都没说——像是在等你主动翻开。', '你翻开了。第二天他知道了，他的表情没有变化，但他开始在课上更多地看向你。', '他说了一句话，你觉得他不是在说历史，是在说他自己：「留下来的人，不一定是赢的那个。」'],
    tierUnlocks: [null, '解锁：赫伯特专属课堂文本', '解锁：偶遇事件「档案室的那份文件」', '解锁：个人故事碎片', '解锁：专属信件']
  },
  felixWeasley: {
    key: 'felixWeasley',
    name: '菲利克斯·韦斯莱',
    role: '地理讲师',
    icon: '🗺️',
    subject: '地理',
    tiers: ['他上课喜欢绕远路——每个知识点都要先说三个故事。你是今天的听众。', '他注意到你在听那三个故事，不只是在等考点——所以他开始多说第四个，好像专门给你的。', '他把一张自己画的地图给你看：「我在这里待过六个月，那是最好的田野调查。」', '他问过你的家乡，然后认真想了一会儿，说了一件和你家乡有关的、你不知道的事。', '他把旅行时的笔记本借给你：「里面有些地方我没写进教材，你来找找。」'],
    tierUnlocks: [null, '解锁：菲利克斯专属课堂互动', '解锁：偶遇事件「地图上的那个圈」', '解锁：个人故事碎片', '解锁：专属信件']
  },
  mirandaPercival: {
    key: 'mirandaPercival',
    name: '米兰达·珀西瓦尔',
    role: '英文讲师',
    icon: '✒️',
    subject: '英文',
    tiers: ['她要求你把每篇文章读出声，「文字要通过声音才能完整，」她说。你是今天读的那个人。', '她在你的作文旁圈了一个词：「这个词是你自己选的吗？」那是个很准确的词。', '她偶尔在选读文本时问你的意见——不是测试，是真的想知道你会喜欢什么。', '她推荐了一本不在教学大纲里的书：「这本书改变了我对英语的看法。」她说。', '你朗读时停了一下，她没有催，只是等。那一停里有某种她理解的东西。'],
    tierUnlocks: [null, '解锁：米兰达专属课堂反馈', '解锁：偶遇事件「图书馆的那本书」', '解锁：个人故事碎片', '解锁：专属信件']
  },
  filiusFlitwick: {
    key: 'filiusFlitwick',
    name: '弗立维·弗利维克',
    role: '魔咒学教授',
    icon: '🪄',
    subject: '魔咒学',
    tiers: ['他站在教室前面，声音却清晰得能传到最后一排。你是其中一个听到的人。', '他施展咒语时，专门停下来让你看仔细——不是因为你没学好，是因为你问了一个好问题。', '他在走廊上遇到你，破例说了句和课程无关的话，像是把课堂外的一小块自己给了你。', '他让你在课上演示——不是因为你最好，是因为你有一个别人没发现的方式。', '他笑起来，你才知道：教了这么多年魔咒，真正让他高兴的，是学生第一次施法成功时的表情。'],
    tierUnlocks: [null, '解锁：弗立维专属课堂互动', '解锁：偶遇事件「走廊上的一小段路」', '解锁：个人故事碎片', '解锁：专属信件']
  },
  pomonaSprout: {
    key: 'pomonaSprout',
    name: '波莫纳·斯普劳特',
    role: '草药学教授',
    icon: '🌱',
    subject: '草药学',
    tiers: ['她永远沾着泥，笑声很大，你是温室里二十个学生之一。', '她注意到你对那株奇怪的植物多看了一眼——「去摸摸，」她说，「这个品种不咬人。」', '她叫你名字的时候语气不像在叫学生，更像在叫一个她知道会来的人。', '她多给了你一盆植物，「你会照顾它的，」她说，没有解释她为什么这么确定。', '你在温室发现一株生病的植物，你处理了，没有等她来。她后来说：「这是对的。」'],
    tierUnlocks: [null, '解锁：波莫纳专属课堂互动', '解锁：偶遇事件「温室的深处」', '解锁：个人故事碎片', '解锁：专属信件']
  },
  rolandaHooch: {
    key: 'rolandaHooch',
    name: '罗兰达·霍琦',
    role: '飞行课教授 / 魁地奇裁判',
    icon: '🧹',
    subject: '飞行课',
    tiers: ['她看你飞行，不说话，黄色的眼睛像鹰一样——她记住了你的飞行姿势。', '「你的手腕太僵，」她说，然后演示了一遍。你意识到你从没见过这么干净的飞行。', '训练结束后她多留了你五分钟，教了一个不在课程里的技巧：「以防万一你用得上。」', '她在比赛里看到了你，训练结束后朝你点了一下头。那个点头是整年最好的评价。', '你飞行出了问题，是她接住了你。她说：「你已经比我第一次教你时好多了。」'],
    tierUnlocks: [null, '解锁：霍琦专属课堂互动', '解锁：偶遇事件「球场之后」', '解锁：个人故事碎片', '解锁：专属信件']
  },
  sybillTrelawney: {
    key: 'sybillTrelawney',
    name: '西比尔·特里劳妮',
    role: '占卜学教授',
    icon: '🔮',
    subject: '占卜学',
    tiers: ['她看了你的茶叶，说了一些话。也许是随机的，也许不是。', '她把你单独叫出来，说你的气场「比一般人清晰」——你不确定这什么意思，但她说时是认真的。', '她在走廊突然停下，说了一句话，然后继续走，什么都没解释。那句话你想了很久。', '她给你看一张十五年前画的星象图：「这里，我当时没看懂，现在看懂了。」', '你说了一个梦给她听，她没有笑，安静地听完：「你的感知比你知道的要准确。」'],
    tierUnlocks: [null, '解锁：特里劳妮专属课堂预言', '解锁：偶遇事件「占卜塔上的雾」', '解锁：个人故事碎片', '解锁：专属信件']
  },
  remusLupin: {
    key: 'remusLupin',
    name: '莱姆斯·卢平',
    role: '黑魔法防御术教授',
    icon: '🐺',
    subject: '黑魔法防御术',
    tiers: ['他温和地微笑，像是对每个学生都一样。但你注意到他眼下的黑眼圈比昨天更深了。', '他在课后多留了一会儿，回答了你关于博格特的问题。他的耐心不像是在尽义务，更像是真的想让你理解。', '他递给你一块巧克力，「满月前后记得吃，」他说。你知道他不是在说天气。', '他在你面前不再掩饰满月后的疲惫。你帮他整理了一次教室，他没有说谢谢，但他的眼神说了。', '他说：「你是少数知道我全部真相还愿意站在这里的人。」他的声音很轻，但很确定。'],
    tierUnlocks: [null, '解锁：卢平专属课堂互动', '解锁：偶遇事件「满月后的办公室」', '解锁：个人故事碎片', '解锁：专属信件']
  },
  siriusBlack: {
    key: 'siriusBlack',
    name: '小天狼星·布莱克',
    role: '凤凰社成员',
    icon: '🐕',
    subject: null,
    tiers: ['你只在照片上见过他——阿兹卡班的囚徒，布莱克家族的叛逆者。', '他给你写了一封信，笔迹潦草但真诚。在阿兹卡班那些年，他几乎忘了怎么写字。', '他在格里莫广场12号跟你说了几句话，不是关于任务的，只是闲聊。他太久没有和人闲聊了。', '他变成大黑狗的时候，会靠在你脚边。那是他最放松的时刻——不需要伪装，不需要解释。', '他说：「你是我在这个世界上少数还愿意为之活下去的理由之一。」他的眼睛是湿的，但他在笑。'],
    tierUnlocks: [null, '解锁：小天狼星来信', '解锁：偶遇事件「格里莫广场的厨房」', '解锁：个人故事碎片', '解锁：专属信件']
  },
  auroraSinistra: {
    key: 'auroraSinistra',
    name: '奥罗拉·辛尼斯特拉',
    role: '天文学教授',
    icon: '🌌',
    subject: '天文学',
    tiers: [
      '午夜的天文塔上，她是那个站在望远镜旁的人。你只是三十个冻得发抖的学生之一。',
      '她在你的观测记录旁写了一个词：「精确。」没有多余的话——但她写下来了。',
      '她在课后把一台校准过的望远镜留给你，「今晚有流星雨，值得一看。」她没说「你也值得一看」，但你听出了那层意思。',
      '她让你帮她在天文塔记录了一次罕见的天象。你们在寒风中待了两个小时，她给你倒了一杯热可可，说了些和星星无关的事。',
      '她在某次课后说了一句话：「星空不会因为你的急躁而改变。」你忽然明白她不只是在说天文学。'
    ],
    tierUnlocks: [null, '解锁：辛尼斯特拉专属课堂互动', '解锁：偶遇事件「天文塔的深夜」', '解锁：个人故事碎片', '解锁：专属信件'],
    encounters: [{
      id: 'sinistra_enc_1',
      area: '天文塔',
      minTier: 2,
      text: '深夜，你路过天文塔的楼梯，看到辛尼斯特拉教授独自站在塔顶，没有用望远镜，只是看着天空。她的深蓝色斗篷在夜风中轻轻摆动。',
      choices: [
        { label: '「教授，今晚的星空很美。」', delta: 3, response: '她没有转头。「是的。」停顿了一下，「你知道为什么吗？因为今晚大气稳定，视宁度极佳。美和精确，在天文学里是同一件事。」' },
        { label: '安静地站在旁边看了一会儿', delta: 2, response: '她注意到了你，但没有说话。你们在天文塔上站了大约十分钟，只有风声。临走时她说：「你比大多数人有耐心。」' }
      ]
    }, {
      id: 'sinistra_enc_2',
      area: '天文塔',
      minTier: 3,
      oneTime: true,
      text: '你在天文塔上补观测记录，辛尼斯特拉教授走了上来。她看了你的记录本，沉默了一会儿，然后指向一处，「这里的坐标差了两秒。」',
      choices: [
        { label: '「两秒也重要吗？」', delta: 4, response: '「两秒，」她说，「在一光年的尺度上，两秒的偏差就是几百万公里的误差。」她坐下来，拿起你的笔，在你记录旁边画了一张小图，「看——这就是为什么精确。」你们在天文塔上聊了快一个小时。' },
        { label: '认真修改并道谢', delta: 3, response: '你改完了。她看了一眼，点头。「习惯精确，」她说，「这比任何单个观测结果都重要。」然后她站起来准备走，走了两步回头，「你的记录比上学期好多了。」' }
      ]
    }],
    story: {
      title: '她选择在深夜工作',
      unlockTier: 4,
      text: '奥罗拉·辛尼斯特拉选择在深夜工作，不是因为天文学只能在夜间进行——很多计算和数据分析白天也能做。她选择深夜是因为那是唯一没有人打扰她的时间。白天是课堂、会议、行政事务，只有午夜的天文塔属于她自己。她的研究方向是行星运动与魔力场的统计关联，这在学术圈不受重视——有人觉得这和占卜学没什么区别。她从不争辩，只是把数据拿出来。数据不会因为你不重视就不存在。她有一个习惯：每次发现一个特别精确的天象预报窗口时，会在记录本角落画一个小星号。她的记录本里已经画了几百个星号。没有人知道这件事。'
    },
    letter: {
      unlockTier: 5,
      text: '深蓝色的信纸，字迹极工整，每一行都像校准过的坐标。「你的观测记录我从头到尾看了一遍。不是检查——是阅读。你的记录方式变了。从第一学期只写天体名称和坐标，到现在你开始记录你自己看到那些天体时的状态——温度、风力、心境。这不是我教你的。你自己发现了天文学最重要的东西：观测者也是观测的一部分。继续保持。——辛尼斯特拉 P.S. 今晚木星大冲，天文塔见。」'
    }
  }
};

function mergeAffinityCharacterEnrichments(characters, enrichments) {
  Object.entries(enrichments).forEach(([key, patch]) => {
    const target = characters[key];
    if (!target) return;
    if (patch.activeChatEvents?.length) {
      if (!target.activeChat) target.activeChat = { cost: 1, dailyCooldown: true, events: [] };
      target.activeChat.events = [
        ...(target.activeChat.events || []),
        ...patch.activeChatEvents,
      ];
    }
    if (patch.encounters?.length) {
      target.encounters = [
        ...(target.encounters || []),
        ...patch.encounters,
      ];
    }
    if (patch.tiers) target.tiers = patch.tiers;
    if (patch.tierUnlocks) target.tierUnlocks = patch.tierUnlocks;
    if (patch.story) target.story = patch.story;
    if (patch.letter) target.letter = patch.letter;
  });
}

function withGradeRange(enrichments, range) {
  const tagEvents = events => (events || []).map(event => ({
    ...event,
    minGrade: event.minGrade ?? range.minGrade,
    maxGrade: event.maxGrade ?? range.maxGrade,
    grades: event.grades ?? range.grades,
  }));

  return Object.fromEntries(Object.entries(enrichments).map(([key, patch]) => [key, {
    ...patch,
    activeChatEvents: tagEvents(patch.activeChatEvents),
    encounters: tagEvents(patch.encounters),
  }]));
}

mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, STAFF_LONGTAIL_PACK_ENRICHMENTS);
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_BESPOKE_SCENE_ENRICHMENTS, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_SECONDARY_BESPOKE_SCENE_ENRICHMENTS, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_BESPOKE_ENCOUNTER_ENRICHMENTS, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_DEPTH_SCENE_ENRICHMENTS, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_2_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_3_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_4_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_5_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_6_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_7_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_8_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_9_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_10_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_11_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_12_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_13_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_14_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_15_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_16_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_17_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_18_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_19_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_20_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_21_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_22_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_23_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_24_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_25_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_26_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_27_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_28_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_29_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_30_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_31_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_32_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_33_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_34_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_35_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_36_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_37_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_38_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_39_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_40_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_41_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_42_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_43_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_44_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_45_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_46_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_47_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_48_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_49_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_50_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_51_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_52_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_53_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_54_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_55_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_56_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_57_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_58_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_59_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_60_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_61_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_62_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_63_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_64_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_65_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_66_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_67_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_68_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_69_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_70_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_71_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_72_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_73_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_74_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_75_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_76_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_77_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_78_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_79_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_80_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_81_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_82_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_83_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_84_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_85_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_86_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_87_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_88_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_89_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_90_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_91_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_92_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_93_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_94_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_95_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_96_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_ENCOUNTER_PLUS_97_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_CHAT_PLUS_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_CHAT_PLUS_BATCH_2_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_CHAT_PLUS_BATCH_3_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_CHAT_PLUS_BATCH_4_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_CHAT_PLUS_BATCH_5_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_CHAT_PLUS_BATCH_6_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_CHAT_PLUS_BATCH_7_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_CHAT_PLUS_BATCH_8_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_CHAT_PLUS_BATCH_9_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_CHAT_PLUS_BATCH_10_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_CHAT_PLUS_BATCH_11_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_CHAT_PLUS_BATCH_12_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_CHAT_PLUS_BATCH_13_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_CHAT_PLUS_BATCH_14_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_CHAT_PLUS_BATCH_15_SCENES, { minGrade: 1, maxGrade: 1 }));
mergeAffinityCharacterEnrichments(AFFINITY_CHARACTERS, withGradeRange(STAFF_YEAR1_CHAT_PLUS_BATCH_16_SCENES, { minGrade: 1, maxGrade: 1 }));

export const CHARACTER_DISPLAY_ORDER = ['augustusFenwick', 'serafinaMoody', 'primroseSprout', 'tavishMacLaren', 'herbertBinns', 'constanceShacklebolt', 'felixWeasley', 'elizaLovegood', 'mirandaPercival', 'minervaMcGonagall', 'severusSnape', 'filiusFlitwick', 'pomonaSprout', 'rolandaHooch', 'sybillTrelawney', 'auroraSinistra', 'albusDumbledore'];

// ── 已删除角色列表 ────────────────────────────────────────────
// 用于存档迁移：清理旧版本存档中已删除角色的数据
export const REMOVED_CHARACTERS = [
  'sylviaMacmillan',  // 西尔维娅·麦克米兰 - 麻瓜研究导论教授（已删除）
];

export const MUGGLE_STUDIES_ORDER = ['augustusFenwick', 'serafinaMoody', 'primroseSprout', 'tavishMacLaren', 'herbertBinns', 'constanceShacklebolt', 'felixWeasley', 'elizaLovegood', 'mirandaPercival'];

export const HOGWARTS_STAFF_ORDER = ['albusDumbledore', 'minervaMcGonagall', 'severusSnape', 'filiusFlitwick', 'pomonaSprout', 'rolandaHooch', 'sybillTrelawney', 'auroraSinistra', 'remusLupin', 'siriusBlack'];

export const DEFAULT_TIER_LABELS = { '-2': '敌对', '-1': '厌恶', 1: '陌生人', 2: '认识了', 3: '被记住了', 4: '有点特别', 5: '真正的关系' };

export function getCharacterConfig(key) {
  return AFFINITY_CHARACTERS[key] || null;
}

if (typeof window !== 'undefined') {
  window.affinityData = { AFFINITY_CHARACTERS, CHARACTER_DISPLAY_ORDER, getCharacterConfig };
}

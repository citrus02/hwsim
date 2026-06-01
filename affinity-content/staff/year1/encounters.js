/**
 * affinity-staff-bespoke-encounters.js
 * 教授与教职员偶遇精修分片。
 *
 * 主动聊天负责可反复交流；偶遇负责让人物真的出现在城堡生活里。
 */

export const STAFF_BESPOKE_ENCOUNTER_ENRICHMENTS = {
  primroseSprout: {
    encounters: [
      {
        id: 'primrose_enc_silent_lab',
        area: '空教室',
        minTier: 3,
        text: '你路过一间临时借用的空教室，闻到一股很淡的金属气味。普里姆罗斯教授正把几支试管收进木盒，动作轻得像怕惊动里面尚未结束的反应。',
        choices: [
          { label: '帮她把窗户推开', delta: 4, response: '冷空气慢慢进来，金属气味散了些。她看你一眼，说你没有急着问危险不危险，这很好，因为实验室里最先要处理的往往不是恐惧，是空气。' },
          { label: '问是不是失败了', delta: 3, response: '她摇头，说只是没有得到预期结果。失败是很大的词，不该随便盖在每一次偏离上。' },
        ],
      },
    ],
  },
  tavishMacLaren: {
    encounters: [
      {
        id: 'tavish_enc_rain_barrel',
        area: '庭院',
        minTier: 3,
        text: '雨后庭院的石缝里积着水，塔维什教授蹲在一个旧木桶旁，观察桶壁上一小片透明的卵。他没有撑伞，袍角已经湿了。',
        choices: [
          { label: '把伞偏过去一点', delta: 4, response: '他抬头说了声谢谢，又低头看那片卵。过了一会儿，他告诉你它们明天可能就不在了，所以今天值得多看一分钟。' },
          { label: '问那是什么生物', delta: 4, response: '他没有直接给名字，先让你描述形状、位置和颜色。等你说完，他才点头，说分类从来不是抢答。' },
        ],
      },
    ],
  },
  herbertBinns: {
    encounters: [
      {
        id: 'herbert_enc_archive_dust',
        area: '城堡图书馆',
        minTier: 3,
        text: '图书馆深处，赫伯特教授正从一只灰扑扑的档案盒里取出旧报纸。灰尘在光柱里漂浮，他却像听见很远处有人说话。',
        choices: [
          { label: '帮他按年份排序', delta: 4, response: '你们把报纸一张张排开。赫伯特教授指着其中一角的小广告，说有时最不像史料的东西，反而最诚实地留下了生活。' },
          { label: '问他在找哪一年', delta: 3, response: '他说不是找年份，是找一群人什么时候开始被写错名字。那句话让档案盒忽然变得沉重。' },
        ],
      },
    ],
  },
  felixWeasley: {
    encounters: [
      {
        id: 'felix_enc_stair_map',
        area: '移动楼梯',
        minTier: 3,
        text: '移动楼梯停在一个很别扭的角度，菲利克斯教授站在台阶上，居然认真地给它画草图。楼梯一动，他的线条就歪掉一截。',
        choices: [
          { label: '提醒他楼梯又要动了', delta: 3, response: '他敏捷地退回平台，笑着说这里是全英国最难测绘的地方之一，难就难在它完全不尊重测绘员。' },
          { label: '问这种地图有什么用', delta: 4, response: '他说地图不一定为了控制地点，有时只是为了承认自己迷过路。然后他在图上标了一个小小的「此处会骗人」。' },
        ],
      },
    ],
  },
  mirandaPercival: {
    encounters: [
      {
        id: 'miranda_enc_library_murmur',
        area: '城堡图书馆',
        minTier: 3,
        text: '米兰达教授坐在靠墙的长桌边，低声读一段英文。她读得很轻，却把每个停顿都放在该在的位置，像在给空气校准节拍。',
        choices: [
          { label: '等她读完再走近', delta: 4, response: '她合上书，感谢你没有打断句子的呼吸。然后她把那一页推给你，说这段不难，难的是读得诚实。' },
          { label: '问她是不是在备课', delta: 3, response: '她说也许是，也许只是有些句子太久没人读出声，会变得孤单。她说这话时一点也不像玩笑。' },
        ],
      },
    ],
  },
  filiusFlitwick: {
    encounters: [
      {
        id: 'flitwick_enc_fallen_books',
        area: '三楼走廊',
        minTier: 3,
        text: '三楼走廊一摞书忽然从盔甲旁滑下来。弗立维教授站在书堆前，魔杖已经举起，却没有立刻施咒，因为旁边一个新生正尴尬得脸通红。',
        choices: [
          { label: '先帮新生捡起最近的书', delta: 4, response: '弗立维教授随即让其余书本轻轻排成一列。他对你眨眨眼，说有些咒语最好等尊严先站稳了再用。' },
          { label: '问是不是可以直接恢复如初', delta: 3, response: '他说当然可以，但学生以后还要自己整理书包。魔法能解决事故，不一定能教会习惯。' },
        ],
      },
    ],
  },
  pomonaSprout: {
    encounters: [
      {
        id: 'sprout_enc_greenhouse_lantern',
        area: '温室',
        minTier: 3,
        text: '傍晚的温室亮着一盏低低的灯。波莫纳教授正给一排萎蔫的幼苗换土，泥点溅在她围裙上，她却像在照顾发烧的孩子。',
        choices: [
          { label: '帮她递新的花盆', delta: 4, response: '你递得及时，她把幼苗稳稳移进去。她说很多东西恢复得慢，不是因为不努力，只是根还在重新找方向。' },
          { label: '问它们能不能救回来', delta: 4, response: '她看着叶片，说能不能是一回事，照不照顾是另一回事。温室里的灯因此显得更暖了一点。' },
        ],
      },
    ],
  },
  rolandaHooch: {
    encounters: [
      {
        id: 'hooch_enc_broom_shed',
        area: '魁地奇球场',
        minTier: 3,
        text: '球场边的扫帚棚半开着，霍琦教授正检查尾枝。她一把把看过去，挑出有裂纹的，脸色比比赛判罚时还严肃。',
        choices: [
          { label: '帮她把坏扫帚单独放好', delta: 4, response: '她没有客套，只告诉你放在左边，不能混回去。等你做完，她说飞行课最重要的不是飞起来，是让所有人都能落下来。' },
          { label: '问裂纹很危险吗', delta: 3, response: '她把扫帚递给你看，让你摸那道几乎看不见的细缝。高空上的危险常常就是这么细。' },
        ],
      },
    ],
  },
  sybillTrelawney: {
    encounters: [
      {
        id: 'trelawney_enc_stairwell_incense',
        area: '北塔楼梯',
        minTier: 3,
        text: '北塔楼梯间飘着淡淡熏香。特里劳妮教授抱着一只水晶球，站在窗边看雾，神情罕见地安静。',
        choices: [
          { label: '问她在等什么', delta: 4, response: '她说也许是一个征兆，也许只是雾散。然后她低头看你，补了一句：有时这两者差别并不大。' },
          { label: '提醒她楼梯风很冷', delta: 3, response: '她夸张地裹紧披肩，恢复了平时的语调。但离开前，她还是把水晶球换到不迎风的一侧。' },
        ],
      },
    ],
  },
  remusLupin: {
    encounters: [
      {
        id: 'lupin_enc_empty_classroom',
        area: '黑魔法防御术教室',
        minTier: 3,
        text: '黑魔法防御术教室已经空了，卢平教授还坐在讲台边，把巧克力分成小块。窗外阴云很低，他看上去比白天更疲惫。',
        choices: [
          { label: '问他需不需要帮忙', delta: 4, response: '他笑了笑，说你可以帮他把课桌摆回去。你们一前一后搬动桌椅，木脚擦过地面的声音让教室重新变得普通。' },
          { label: '说今天的课很有用', delta: 5, response: '他低头把巧克力包好，过了一会儿才说，有用就好。他说得很轻，像这句话对他也同样重要。' },
        ],
      },
    ],
  },
  siriusBlack: {
    encounters: [
      {
        id: 'sirius_enc_fireplace_ash',
        area: '格兰芬多公共休息室',
        minTier: 3,
        text: '夜深时，壁炉里的火忽然噼啪一响。灰烬里露出一张模糊的脸，只停了一瞬，你却认出那种焦躁又警觉的目光。',
        choices: [
          { label: '低声说这里没人', delta: 4, response: '小天狼星的声音从火里传来，沙哑地说很好，然后立刻问你最近有没有惹麻烦。语气像责备，里面全是担心。' },
          { label: '问他是否安全', delta: 5, response: '他短促地笑了一声，说这不是你该操心的事。火焰暗下去前，他又补了一句：但谢谢。' },
        ],
      },
    ],
  },
};

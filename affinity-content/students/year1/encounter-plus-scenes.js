/**
 * 一年级学生偶遇加厚包。
 *
 * 这一包先把二线与三线学生的偶遇从“只有一两次看见”抬高：
 * 每条都要有地点、动作和关系推进，不写成换名模板。
 */

export const STUDENT_YEAR1_ENCOUNTER_PLUS_SCENES = {
  fredWeasley: {
    encounters: [{
      id: 'fred_year1_enc_stair_notice',
      area: '移动楼梯',
      minTier: 2,
      text: '移动楼梯刚转到一半，弗雷德正把一张“本楼梯今日心情不佳”的假通知贴到墙上。纸边卷着，显然是匆忙写的，但下面还有一行小字：请一年级不要在它打喷嚏时奔跑。',
      choices: [
        { label: '指出小字才是真重点', delta: 4, response: '弗雷德看起来像被你揭穿了艺术创作里的善意，立刻说那只是为了让恶作剧显得专业。可他把通知贴得更牢了一点，确保新生真能看见。' },
        { label: '帮他望风', delta: 3, response: '你站在拐角听脚步声。弗雷德贴完后向你行了个夸张的礼，说你刚刚为城堡交通安全做出了不可告人的贡献。' },
      ],
    }],
  },
  georgeWeasley: {
    encounters: [{
      id: 'george_year1_enc_quiet_firework',
      area: '庭院',
      minTier: 2,
      text: '乔治坐在庭院矮墙上，手里捏着一枚没有点燃的小烟花。几个低年级从旁边经过，他把烟花收进袖子里，等他们走远才重新拿出来端详。',
      choices: [
        { label: '问他为什么不放', delta: 4, response: '乔治说好笑的东西也要挑听众。太小的孩子只会被吓到，那就浪费了。他说得很随意，却把烟花重新放回口袋。' },
        { label: '建议改成不会响的', delta: 5, response: '他眼睛一亮，立刻开始考虑“只冒出一行字”的版本。你们一起想了三个标语，其中两个明显会让费尔奇暴怒。' },
      ],
    }],
  },
  luna: {
    encounters: [{
      id: 'luna_year1_enc_shoe_direction',
      area: '三楼走廊',
      minTier: 2,
      text: '卢娜坐在窗台边，认真把一只鞋尖朝东摆好。另一只鞋放在膝上，鞋带结成了很奇怪的形状。路过的人看了一眼就笑，她却像完全没听见。',
      choices: [
        { label: '问鞋为什么朝东', delta: 4, response: '卢娜说这样它就不容易想念早晨。你没有笑，她便补充，有些东西被穿着走了太多路，也需要知道太阳从哪里回来。' },
        { label: '帮她解开鞋带结', delta: 5, response: '你小心解开那个复杂的结。卢娜感谢你，说这大概不是骚扰虻打的，因为它们通常更有对称感。她说得很认真，你也认真地点了点头。' },
      ],
    }],
  },
  ginnyWeasley: {
    encounters: [{
      id: 'ginny_year1_enc_stands_tailtwig',
      area: '魁地奇看台',
      minTier: 2,
      text: '金妮在空看台下面练习握一根旧扫帚尾枝。她听见脚步声立刻把尾枝藏到身后，可藏得太快，反而让几片枝条从袖口露出来。',
      choices: [
        { label: '假装没看见尾枝', delta: 3, response: '你看向球门环，金妮慢慢放松下来。过了一会儿，她自己把尾枝拿出来，说只是随便练一下。那个“随便”轻得像一扇刚开缝的门。' },
        { label: '问她想不想以后飞', delta: 5, response: '她抬头看向球场，回答得很小声却很坚定：「想。」风从看台穿过，你觉得那一个字已经在这里等了很久。' },
      ],
    }],
  },
  seamus: {
    encounters: [{
      id: 'seamus_year1_enc_smoke_window',
      area: '魔咒课教室外',
      minTier: 2,
      text: '魔咒课教室外的窗户开着，西莫正把一根冒烟的羽毛伸到窗外，表情介于自豪和心虚之间。烟很细，像一条不肯承认失败的小蛇。',
      choices: [
        { label: '说至少没爆炸', delta: 4, response: '西莫立刻精神起来，说这正是他准备写进家信的重点。你提醒他可以顺便写“窗户及时发挥了重要作用”，他认真考虑了。' },
        { label: '帮他把烟扇出去', delta: 3, response: '你们一起用课本扇风，烟终于散掉。西莫说你很适合担任非正式事故处理委员会成员，听起来像一句玩笑，也像邀请。' },
      ],
    }],
  },
  deanThomas: {
    encounters: [{
      id: 'dean_year1_enc_goalpost_sketch',
      area: '魁地奇球场',
      minTier: 2,
      text: '迪安坐在球场边的木箱上，画一只魁地奇球门环。画到一半，他又在旁边加了一个麻瓜足球球门的轮廓，两种线条重叠在一起，显得奇怪又认真。',
      choices: [
        { label: '问他为什么画两个球门', delta: 5, response: '迪安说他有时候需要把旧世界画在新世界旁边，才知道自己不是把前一个丢了。你看着那两组线条，觉得它们并没有互相排斥。' },
        { label: '帮他看比例', delta: 3, response: '你指出魁地奇球门环画得太低，他立刻改了几笔。迪安说魔法世界什么都爱往天上跑，连构图都不放过人。' },
      ],
    }],
  },
  leeJordan: {
    encounters: [{
      id: 'lee_year1_enc_empty_commentary',
      area: '魁地奇看台',
      minTier: 2,
      text: '李·乔丹站在空看台最高处，对着没有观众的球场练一句开场白。说到最激动处，他忽然停下，把羊皮纸上的一个玩笑划掉。',
      choices: [
        { label: '问为什么划掉', delta: 4, response: '他说那句会很好笑，但可能让某个守门员想钻进草里。你没想到他会这样说。他耸耸肩，补充好笑也得有准头。' },
        { label: '当他的试听观众', delta: 5, response: '你坐到第一排，他重新念了一遍开场白。空球场把他的声音送得很远，你听见的不只是热闹，还有他对比赛本身的爱。' },
      ],
    }],
  },
  percyWeasley: {
    encounters: [{
      id: 'percy_year1_enc_notice_alignment',
      area: '公告栏',
      minTier: 2,
      text: '珀西站在公告栏前，把一张贴歪的巡逻通知重新按平。旁边有人小声笑他过分认真，他像没听见，只把图钉按得更稳。',
      choices: [
        { label: '帮他压住纸角', delta: 4, response: '你按住被风掀起的纸角，珀西迅速补上一枚图钉。他说通知贴歪不是大事，错过通知后迷路才是大事。严肃下面有一种很实际的担心。' },
        { label: '问他累不累', delta: 3, response: '珀西本能地列举级长职责，列到一半停住，说有一点。这个承认短得像从规章缝里漏出来的叹气。' },
      ],
    }],
  },
  pansy: {
    encounters: [{
      id: 'pansy_year1_enc_table_whisper',
      area: '霍格沃茨大礼堂',
      minTier: 2,
      text: '潘西在斯莱特林长桌边低声纠正一个新生的餐巾摆法。她语气挑剔，却在高年级看过来前，把那个新生挡在自己身侧。',
      choices: [
        { label: '说她其实是在帮忙', delta: 4, response: '潘西立刻皱眉，说你不要把话说得这么难听。可那个新生终于没再发抖，她也没有离开位置。体面在她这里常常像一层硬壳，里面装着不愿承认的照看。' },
        { label: '装作路过', delta: 3, response: '你没有拆穿她。潘西看见你识趣，表情缓和了一瞬，又很快恢复成挑剔的样子。那一瞬间足够说明很多事。' },
      ],
    }],
  },
  blaiseZabini: {
    encounters: [{
      id: 'blaise_year1_enc_shadow_reading',
      area: '地牢走廊',
      minTier: 2,
      text: '布雷司坐在地牢走廊的阴影里读书。火把光照不到书页，他却像不需要更多光。你经过时，他没有抬头，只把脚边一只快滚到水渍里的墨水瓶往里拨了拨。',
      choices: [
        { label: '提醒他光线太暗', delta: 3, response: '他说暗处有暗处的好处，至少能听见谁在假装没看见你。话说得冷淡，可墨水瓶已经被他救回来了。' },
        { label: '问他在读什么', delta: 4, response: '他把书脊转给你看，是一本薄诗集。布雷司说有些句子适合在亮处读，有些适合在别人不急着评论的时候读。' },
      ],
    }],
  },
  crabbe: {
    encounters: [{
      id: 'crabbe_year1_enc_kitchen_corner',
      area: '厨房附近',
      minTier: 2,
      text: '克拉布坐在厨房附近的石阶上，手里拿着一块还热的馅饼。他看见你，犹豫了一下，把馅饼掰成两半，递出较大的一块。',
      choices: [
        { label: '接过馅饼', delta: 4, response: '馅饼很烫，里面是肉馅。克拉布说“热的好”，像这是他能给出的最高评价。你们坐在石阶上吃完，没说几句话，却一点也不尴尬。' },
        { label: '问他怎么找到厨房', delta: 3, response: '他想了很久，说闻到的。这个答案简单得无法反驳。过了一会儿，他又补充说左边那条路少遇见费尔奇。' },
      ],
    }],
  },
  goyle: {
    encounters: [{
      id: 'goyle_year1_enc_heavy_door',
      area: '地牢入口',
      minTier: 2,
      text: '地牢入口那扇门卡住了，高尔一只手撑着门，等几个低年级先过去。他没有催，也没有露出自己在帮忙的样子，只像一堵临时变得很有用的墙。',
      choices: [
        { label: '帮他扶住门', delta: 4, response: '你接过一部分重量，高尔看了你一眼，低声说“重”。这大概是他对共同劳动的总结。等最后一个学生过去，他才慢慢松手。' },
        { label: '向他道谢', delta: 3, response: '高尔耸耸肩，说门坏了。可他明明可以自己先走。你没有追问，他看起来因此舒服一点。' },
      ],
    }],
  },
  marcusFlint: {
    encounters: [{
      id: 'flint_year1_enc_rain_practice',
      area: '魁地奇球场',
      minTier: 2,
      text: '细雨里，弗林特一个人在球场边收训练用球。队员早就回更衣室了，游走球箱还在不耐烦地震。他一边骂天气，一边把箱扣扣得很牢。',
      choices: [
        { label: '帮他按住球箱', delta: 4, response: '你按住箱盖，弗林特迅速扣锁。他粗声说你力气还行，随后又补一句别把手指放在缝里。那句提醒比夸奖更像他。' },
        { label: '问为什么不叫队员帮忙', delta: 3, response: '他说队长最后检查。语气像在抱怨，动作却熟练得很。你看见他的责任感不漂亮，但确实沉甸甸地在那里。' },
      ],
    }],
  },
  choChang: {
    encounters: [{
      id: 'cho_year1_enc_wind_flag',
      area: '魁地奇看台',
      minTier: 2,
      text: '秋站在看台边，抬头看一面被风扯得很紧的旗。她没有拿望远镜，只用眼睛追着旗角最细微的颤动，像在听一段没有声音的提示。',
      choices: [
        { label: '问她在看什么', delta: 4, response: '秋说风向变了，但还没变到需要取消训练。她说找球手不能只盯着金色飞贼，也要看那些会让自己错过它的东西。' },
        { label: '陪她看一会儿', delta: 3, response: '你们站了一会儿，旗角突然往另一侧一抖。秋轻轻点头，像验证了某个判断。安静的观察在她身上也很锋利。' },
      ],
    }],
  },
  padmaPatil: {
    encounters: [{
      id: 'padma_year1_enc_door_ring_wait',
      area: '拉文克劳塔楼',
      minTier: 2,
      text: '帕德玛站在拉文克劳门环前，没有敲第二次。她手里捏着一张写满推理的纸，似乎正在决定要不要推翻自己刚才的答案。',
      choices: [
        { label: '问她卡在哪里', delta: 4, response: '她把纸递给你，指出最后一个假设太漂亮，反而可疑。你听她把思路重新拆开，觉得聪明在这里不是快速答对，而是愿意承认自己差点被漂亮骗了。' },
        { label: '陪她安静想', delta: 3, response: '你没有催。过了一会儿，她重新敲响门环，说出一个更简单的答案。门开了，她回头对你笑了一下，像把这份安静也算进了推理。' },
      ],
    }],
  },
  terryBoot: {
    encounters: [{
      id: 'terry_year1_enc_chalk_floor',
      area: '空教室',
      minTier: 2,
      text: '泰瑞·布特跪在空教室地上，用粉笔画一串咒语轨迹。线条绕过桌脚，又在门边停住。他皱着眉，像地板拒绝给出最后一步。',
      choices: [
        { label: '问他在证明什么', delta: 4, response: '泰瑞说他想知道一个咒语失败时，失败到底从哪里开始。你听了一会儿，发现他不是害怕错，而是讨厌不知道自己为什么错。' },
        { label: '帮他按住卷起的纸', delta: 3, response: '你按住记录纸，他终于能把轨迹补完。泰瑞说这一步很重要，虽然看起来只是纸不乱飞。许多推理都败在这种小麻烦上。' },
      ],
    }],
  },
  michaelCorner: {
    encounters: [{
      id: 'michael_year1_enc_bridge_debate',
      area: '庭院石桥',
      minTier: 2,
      text: '迈克尔·科纳站在石桥中央，和一幅挂在桥头的旧画像争论桥是否会变长。画像显然不想参与科学讨论，只想继续睡觉。',
      choices: [
        { label: '加入争论', delta: 4, response: '你提出可以用桥影测量。迈克尔立刻来了精神，画像则假装自己早就这么想。争论变得更热闹，却不再只是迈克尔一个人的固执。' },
        { label: '问他为什么非要证明', delta: 3, response: '他说因为如果桥会变，迟到就不全是学生的错。这个理由听起来像玩笑，但他眼睛里的兴奋是真的。' },
      ],
    }],
  },
  anthonyGoldstein: {
    encounters: [{
      id: 'anthony_year1_enc_notice_order',
      area: '公告栏',
      minTier: 2,
      text: '安东尼·戈德斯坦在公告栏前整理一排被贴乱的通知。他按日期、地点和紧急程度分成三列，旁边几个学生觉得这过于认真，他却完全不受影响。',
      choices: [
        { label: '帮他按紧图钉', delta: 4, response: '你按住一张快掉下来的通知。安东尼说如果重要信息被魁地奇海报挡住，那就不是热闹，是噪音。整理完后，公告栏真的清楚了许多。' },
        { label: '问他为什么在意', delta: 3, response: '他说混乱会把不敢开口的人排除在外，因为他们更不敢问。这个答案比“看着舒服”认真得多。' },
      ],
    }],
  },
  cedricDiggory: {
    encounters: [{
      id: 'cedric_year1_enc_dropped_books',
      area: '一楼走廊',
      minTier: 2,
      text: '一名新生的书散了一地，塞德里克已经蹲下帮忙捡。周围人来来往往，他把每本书都拍掉灰，再按课表顺序叠好。',
      choices: [
        { label: '一起帮忙捡书', delta: 4, response: '你递给他最后一本书，他把整摞交还给新生，没有让对方反复道谢。等人走远后，他说谁都有第一周手忙脚乱的时候。' },
        { label: '说他很会处理这种事', delta: 3, response: '塞德里克笑了笑，说只是别把小尴尬变成大场面。你发现他的体贴常常体现在让别人不用意识到自己被照顾。' },
      ],
    }],
  },
  hannahAbbott: {
    encounters: [{
      id: 'hannah_year1_enc_warm_mug',
      area: '厨房附近',
      minTier: 2,
      text: '汉娜站在厨房附近，捧着一杯热南瓜汁。她看见你，立刻解释说这是厨房小精灵多给的，不是她特意拿来等谁。杯口的热气却正好朝你这边飘。',
      choices: [
        { label: '接过她分来的半杯', delta: 4, response: '热南瓜汁甜得刚好。汉娜看你喝了一口，才放心地笑了。她说有时候人看起来不是难过，只是太冷了。' },
        { label: '问她是不是也冷', delta: 3, response: '她点点头，又小声说不过两个人分着喝，好像就没那么冷。走廊里的石墙因此显得没那么硬。' },
      ],
    }],
  },
  ernieMacmillan: {
    encounters: [{
      id: 'ernie_year1_enc_fair_queue',
      area: '温室门口',
      minTier: 2,
      text: '温室门口排队领取工具，厄尼·麦克米兰正严肃地数每个人是否都拿到手套。他手里那张小表格写得工整得近乎庄严。',
      choices: [
        { label: '帮他核对人数', delta: 4, response: '你们发现少了一副手套。厄尼立刻把自己的那副让给后面的学生，又坚称这只是临时分配优化。正式措辞挡不住那点真诚。' },
        { label: '问他是不是太认真了', delta: 3, response: '他说手套少一副，刺扎进手里时就不会觉得这是小事。你不得不承认他有道理。' },
      ],
    }],
  },
  susanBones: {
    encounters: [{
      id: 'susan_year1_enc_name_on_list',
      area: '公告栏',
      minTier: 2,
      text: '苏珊站在公告栏前，认真看一张名单。她的手指停在一个拼错的姓氏旁边，眉头很轻地皱着，像怕自己多事，又无法假装没看见。',
      choices: [
        { label: '陪她去找人更正', delta: 5, response: '你们把错误告诉负责张贴的学生。苏珊说名字写错不是最严重的事，但如果没人改，它就会一直错下去。她说完后看起来轻松了一点。' },
        { label: '问她为什么在意', delta: 3, response: '她说有些人留下来的东西本来就不多，名字至少应该对。那句话很轻，却让公告栏前的空气沉了一点。' },
      ],
    }],
  },
  justinFinchFletchley: {
    encounters: [{
      id: 'justin_year1_enc_stair_confusion',
      area: '移动楼梯',
      minTier: 2,
      text: '贾斯廷站在移动楼梯平台上，手里拿着一张自己画的路线表。楼梯刚刚转走，他看着空出来的墙面，露出一种非常有礼貌的绝望。',
      choices: [
        { label: '帮他重新找路', delta: 4, response: '你们绕过一幅爱纠正发音的画像，终于找到正确楼层。贾斯廷把路线表改成“经过脾气不好的画像后左转”，说这比编号更符合霍格沃茨实际。' },
        { label: '说这里人人都会迷路', delta: 3, response: '他明显松了口气，说那真是令人安慰又令人担忧。你们一起笑了，楼梯也终于慢吞吞转了回来。' },
      ],
    }],
  },
};

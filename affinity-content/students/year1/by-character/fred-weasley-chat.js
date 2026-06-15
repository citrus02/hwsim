/**
 * Year 1 students chat scenes for fredWeasley.
 * Keep future additions in this character file.
 */

export const FRED_WEASLEY_YEAR1_CHAT_SCENES = {
  "fredWeasley": {
    "activeChatEvents": [
      {
        "id": "fred_year1_chat_label_swap",
        "minTier": 1,
        "text": "弗雷德拿着两张外观相同的糖果标签，在走廊角落里认真比较。他的认真只持续到你靠近为止，随即变成那种“我什么都没计划”的笑容。",
        "choices": [
          {
            "label": "问哪张是真的",
            "delta": 3,
            "response": "弗雷德说这取决于你对“真”的定义。如果一张标签能让珀西多检查三遍，那它产生的效果难道不真实吗？"
          },
          {
            "label": "提醒他别牵连无辜的人",
            "delta": 4,
            "response": "他举起双手表示受到了高尚道德的震撼。随后他把其中一张标签收起来，说好吧，无辜的人今天暂时安全。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_blank_firework",
        "minTier": 1,
        "text": "弗雷德拿着一支还没点燃的小烟花，认真给它起名字。名字从“伟大的走廊灾难”改到“珀西的眉毛预警”，每一个都不像能通过审查。",
        "choices": [
          {
            "label": "建议一个温和点的名字",
            "delta": 3,
            "response": "弗雷德震惊地说温和是烟花最不需要的品质。不过他还是把你的建议记下，放进“必要时迷惑教授”的名单里。"
          },
          {
            "label": "问它会不会伤人",
            "delta": 4,
            "response": "他收起玩笑，说不会，他们试过很多次。然后又补充，最多伤害尊严，尤其是珀西的。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_mapless_route",
        "minTier": 2,
        "text": "弗雷德在一条岔路前停下，像突然和城堡进行某种无声谈判。他说今天左边闻起来比较像麻烦。",
        "choices": [
          {
            "label": "问麻烦是什么味道",
            "delta": 4,
            "response": "他说一点灰尘、一点费尔奇，还有一点“你明知道不该去但还是想去”。他说得太具体，显然经验丰富。"
          },
          {
            "label": "建议走右边",
            "delta": 3,
            "response": "弗雷德叹气说理智获胜真是悲伤。走出几步后，左边传来洛丽丝夫人的叫声，他立刻宣布你是今日战术顾问。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_fake_notice",
        "minTier": 1,
        "text": "弗雷德在公告栏前端详一张通知，神情庄严得可疑。他说通知这种东西太严肃，偶尔需要一点艺术援助。",
        "choices": [
          {
            "label": "问艺术援助是什么",
            "delta": 3,
            "response": "他展示一行小字：请勿喂食盔甲。你不得不承认它看起来很像真的。"
          },
          {
            "label": "提醒别害到低年级",
            "delta": 4,
            "response": "弗雷德收起最离谱的版本，说你这个道德顾问很扫兴，但有用。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_silence_test",
        "minTier": 2,
        "text": "他和乔治罕见地沉默着穿过走廊。弗雷德说这是测试：他们不说话时，费尔奇会不会更紧张。",
        "choices": [
          {
            "label": "问结果如何",
            "delta": 4,
            "response": "他说非常成功，费尔奇已经怀疑到自己的影子了。"
          },
          {
            "label": "说沉默不像你们",
            "delta": 3,
            "response": "弗雷德叹气说艺术家总要拓展领域。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_pocket_smoke",
        "minTier": 1,
        "text": "弗雷德口袋里冒出一缕细烟。他低头看了看，像在判断这是计划内效果还是计划外惊喜。",
        "choices": [
          {
            "label": "递给他水杯",
            "delta": 4,
            "response": "他接过水杯把烟压灭，郑重宣布你拯救了一项尚未命名的伟大发明。"
          },
          {
            "label": "问安全吗",
            "delta": 3,
            "response": "他说目前看来对口袋不太安全，对人还算友好。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_percy_impression",
        "minTier": 2,
        "text": "弗雷德模仿珀西读通知，连清嗓子的节奏都一模一样。笑声里却没有真正的恶意。",
        "choices": [
          {
            "label": "说他其实很了解珀西",
            "delta": 4,
            "response": "弗雷德愣了一下，然后说了解敌人是战略需要。可他笑得没那么锋利了。"
          },
          {
            "label": "让他再来一句",
            "delta": 3,
            "response": "他立刻加演，远处真正的珀西似乎听见了，你们迅速撤退。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_last_sweet",
        "minTier": 1,
        "text": "弗雷德把最后一颗糖放在掌心，没有立刻吃。他说最后一颗总需要一个值得纪念的理由。",
        "choices": [
          {
            "label": "编一个理由",
            "delta": 4,
            "response": "你说庆祝今天没被抓。弗雷德认为理由充分，把糖掰成两半分给你。"
          },
          {
            "label": "说留给乔治",
            "delta": 3,
            "response": "弗雷德夸张地叹气，说你唤醒了他稀有的兄弟情。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_decoy_sock",
        "minTier": 1,
        "text": "弗雷德把一只袜子挂在盔甲手上，说这是战术诱饵。那只袜子看起来对自己的使命毫无准备。",
        "choices": [
          {
            "label": "问诱谁",
            "delta": 3,
            "response": "他说诱导费尔奇判断错误。伟大战术往往始于一只孤独袜子。"
          },
          {
            "label": "建议袜子太显眼",
            "delta": 4,
            "response": "弗雷德认真后退观察，承认它确实有点用力过猛，于是给它换了个更隐蔽的位置。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_laugh_check",
        "minTier": 2,
        "text": "一个玩笑刚结束，弗雷德第一时间看向被捉弄的人。对方笑了，他才真正笑开。",
        "choices": [
          {
            "label": "说你注意到了",
            "delta": 4,
            "response": "他耸肩说别告诉别人他有职业道德。可那句话比玩笑本身更像真话。"
          },
          {
            "label": "问如果对方没笑呢",
            "delta": 3,
            "response": "他说那就得补救。恶作剧失败也要负责售后。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_pocket_list",
        "minTier": 1,
        "text": "弗雷德口袋里掉出一张清单，上面写着“烟、线、糖、别忘乔治”。最后一项被圈了两遍。",
        "choices": [
          {
            "label": "念出最后一项",
            "delta": 4,
            "response": "他一把抢回清单，故作镇定地说那是战略需求。耳朵却红了。"
          },
          {
            "label": "问糖做什么",
            "delta": 3,
            "response": "他说视情况可以吃，也可以救场，也可以贿赂心软的人。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_fake_surrender",
        "minTier": 2,
        "text": "被珀西堵住时，弗雷德立刻举手投降，姿势熟练得让人怀疑排练过。",
        "choices": [
          {
            "label": "问这招有用吗",
            "delta": 3,
            "response": "他说有时有用，主要看珀西当天的眉毛角度。"
          },
          {
            "label": "帮他转移话题",
            "delta": 4,
            "response": "你问起公告栏，珀西果然分神。弗雷德向你投来极其正式的感激眼神。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_good_target",
        "minTier": 1,
        "text": "弗雷德挑恶作剧目标时，排除了一个刚被教授训过的新生。他说那样不好玩。",
        "choices": [
          {
            "label": "问什么才好玩",
            "delta": 4,
            "response": "他说对方事后也想讲给别人听的那种。不是所有笑声都合格。"
          },
          {
            "label": "说这很有分寸",
            "delta": 3,
            "response": "他立刻说别这么夸，听起来像珀西。可他没有反驳。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_anti_boredom",
        "minTier": 1,
        "text": "弗雷德宣布无聊是霍格沃茨最被低估的危险，然后掏出一张写满计划的纸。",
        "choices": [
          {
            "label": "问哪个最安全",
            "delta": 4,
            "response": "他认真看了看，说安全和有趣不是敌人，只是经常吵架。"
          },
          {
            "label": "建议先吃饭",
            "delta": 3,
            "response": "弗雷德说饱腹能提升创意稳定性，于是把计划暂时塞回口袋。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_george_signal",
        "minTier": 2,
        "text": "乔治只咳了一声，弗雷德就立刻换了话题。两人之间像有一套别人听不见的路标。",
        "choices": [
          {
            "label": "问刚才是什么意思",
            "delta": 4,
            "response": "弗雷德说那是“撤退，左后方有风险”。他讲得像一门严肃外语。"
          },
          {
            "label": "说你们太默契",
            "delta": 3,
            "response": "他笑说从小共用麻烦训练出来的。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_prank_budget",
        "minTier": 1,
        "text": "弗雷德在纸上认真计算恶作剧成本，糖、线、烟粉都列得清清楚楚。",
        "choices": [
          {
            "label": "问还有预算吗",
            "delta": 3,
            "response": "他说伟大事业永远预算紧张。然后把“珀西赔偿基金”划掉又写回去。"
          },
          {
            "label": "帮他省一项",
            "delta": 4,
            "response": "你建议用旧线替代新线。他夸你很有商业头脑，虽然道德前景不明。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_kind_lie",
        "minTier": 2,
        "text": "一个新生问自己刚才是不是很丢脸，弗雷德张口就想调侃，最后说“还行”。",
        "choices": [
          {
            "label": "说你刚才很克制",
            "delta": 4,
            "response": "他叹气说克制让人显得成熟，成熟非常危险。可他看起来不后悔。"
          },
          {
            "label": "问真实评价呢",
            "delta": 3,
            "response": "他说真实评价可以等那孩子笑得出来再说。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_escape_aftercare",
        "minTier": 1,
        "text": "弗雷德从费尔奇巡逻路线旁溜走后，还回头确认乔治和李都跟上了。",
        "choices": [
          {
            "label": "说你还会点人数",
            "delta": 4,
            "response": "他说团队精神，不是点人数。虽然听起来完全就是点人数。"
          },
          {
            "label": "问如果有人没跟上",
            "delta": 3,
            "response": "他收起笑，说那就回去。答案很快，没有玩笑。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_alarm_thread",
        "minTier": 1,
        "text": "弗雷德把一根细线系在走廊两端，认真声明这是“早期预警系统”，绝非恶作剧。",
        "choices": [
          {
            "label": "问预警谁",
            "delta": 3,
            "response": "他说预警所有不懂欣赏的人，特别是费尔奇。"
          },
          {
            "label": "提醒别绊倒人",
            "delta": 4,
            "response": "他降低了线的位置又改成铃铛，承认文明需要技术升级。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_joke_revision",
        "minTier": 2,
        "text": "弗雷德把一个笑话改了三遍，最后删掉最伤人的那句。删的时候表情很悲壮。",
        "choices": [
          {
            "label": "说新版更好",
            "delta": 4,
            "response": "他说你说得对，但别让乔治知道他向道德妥协。"
          },
          {
            "label": "问为什么删",
            "delta": 3,
            "response": "他说因为那句笑完会剩刺，不够高级。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_percy_rescue",
        "minTier": 1,
        "text": "珀西被一群新生围着问路，弗雷德远远看见，嘴上笑话他，脚却已经往那边走。",
        "choices": [
          {
            "label": "问你要帮他吗",
            "delta": 4,
            "response": "弗雷德说当然不是，只是防止交通堵塞。随后三句话解散了人群。"
          },
          {
            "label": "一起过去",
            "delta": 3,
            "response": "你们把新生分流，珀西脸色复杂地道谢。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_no_audience",
        "minTier": 2,
        "text": "没有观众时，弗雷德仍认真测试一个会变色的小纸片。它只变了一半，他反而更专注。",
        "choices": [
          {
            "label": "问没人看也做吗",
            "delta": 4,
            "response": "他说观众只看见结果，麻烦都在没人看见的地方长大。"
          },
          {
            "label": "帮他记颜色",
            "delta": 3,
            "response": "你记下变化顺序，他说你适合当实验同谋。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_shared_blame",
        "minTier": 1,
        "text": "一次小事故后，弗雷德抢在乔治前面承认是两个人的主意。乔治看了他一眼，没有反驳。",
        "choices": [
          {
            "label": "问其实是谁的主意",
            "delta": 3,
            "response": "弗雷德说历史会记住共同创作。"
          },
          {
            "label": "说你护着乔治",
            "delta": 4,
            "response": "他立刻否认，但笑得太快。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch7_blank_label",
        "minTier": 1,
        "text": "弗雷德把一张空标签贴在瓶子上，郑重宣布这是“可能性”。",
        "choices": [
          {
            "label": "问里面是什么",
            "delta": 3,
            "response": "他说你问得太早，伟大发明最怕被未成熟的问题催熟。"
          },
          {
            "label": "说听起来危险",
            "delta": 4,
            "response": "他满意地点头，说如果听起来完全安全，就只能叫作家庭作业。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch7_fake_serious",
        "minTier": 2,
        "text": "他忽然摆出极其严肃的表情，向你询问走廊风向，仿佛正在筹备一场军事行动。",
        "choices": [
          {
            "label": "配合报告风向",
            "delta": 4,
            "response": "他听完后点头，说很好，羽毛笔纸飞机部队今晚会记住你的贡献。"
          },
          {
            "label": "问又要捣乱吗",
            "delta": 3,
            "response": "他说“捣乱”这个词太狭窄，他们更喜欢“现场气氛修复”。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch7_brother_sync",
        "minTier": 1,
        "text": "弗雷德话说到一半，乔治从远处补完后半句。弗雷德看起来一点都不意外。",
        "choices": [
          {
            "label": "问你们怎么做到的",
            "delta": 4,
            "response": "他说多年的训练、共同的敌人以及对无聊的深刻仇恨。"
          },
          {
            "label": "说这有点吓人",
            "delta": 3,
            "response": "他笑着说别怕，他们还没发展到同时替别人写作业的程度。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch7_confiscated_note",
        "minTier": 2,
        "text": "他从袖子里掏出一张被没收后又奇迹般回来的纸条，表情非常无辜。",
        "choices": [
          {
            "label": "问怎么拿回来的",
            "delta": 3,
            "response": "他说纸条有自己的回家本能，他只是提供方向。"
          },
          {
            "label": "提醒小心被抓",
            "delta": 4,
            "response": "他认真地点头，说被抓不是问题，被抓得毫无风格才是问题。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch7_kind_prank",
        "minTier": 1,
        "text": "一个新生哭丧着脸经过，弗雷德把一颗会唱跑调歌的糖塞给他，又装作什么都没发生。",
        "choices": [
          {
            "label": "说这不像恶作剧",
            "delta": 4,
            "response": "他耸肩，说不是所有恶作剧都以尖叫为目标，有些只负责把脸拉回来。"
          },
          {
            "label": "问糖安全吗",
            "delta": 3,
            "response": "他说安全得令人失望，只会让人笑得稍微丢脸。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch8_experiment_box",
        "minTier": 1,
        "text": "弗雷德抱着一个盒子，盒盖不时跳一下。他严肃地说里面是“教育材料”。",
        "choices": [
          {
            "label": "问教育谁",
            "delta": 4,
            "response": "他说主要教育无聊，其次教育走廊里过于自信的人。"
          },
          {
            "label": "后退半步",
            "delta": 3,
            "response": "他赞许地说良好的距离感是与发明共处的第一课。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch8_fake_notice",
        "minTier": 2,
        "text": "他正在仿写一张公告，内容是“今日禁止严肃超过三分钟”。",
        "choices": [
          {
            "label": "说字迹很像",
            "delta": 3,
            "response": "他得意地说这是对行政美学的深入研究。"
          },
          {
            "label": "提醒别贴出去",
            "delta": 4,
            "response": "他表示遗憾，但承认好作品有时只适合在小范围流传。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch8_sudden_kindness",
        "minTier": 1,
        "text": "弗雷德看见一个学生被书堆压得摇摇晃晃，顺手接过一半，还假装只是路过。",
        "choices": [
          {
            "label": "说你看见了",
            "delta": 4,
            "response": "他眨眼说你什么都没看见。善举如果被记录，就会影响他的职业形象。"
          },
          {
            "label": "帮忙拿剩下的",
            "delta": 3,
            "response": "他立刻宣布你加入临时搬运队，职位是“副混乱管理人”。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch8_detention_plan",
        "minTier": 2,
        "text": "他提到禁闭时一点也不绝望，反而开始计算如何在擦奖杯时发明新游戏。",
        "choices": [
          {
            "label": "问这也能玩",
            "delta": 3,
            "response": "他说只要有抹布、反光和足够低的期待，哪里都能玩。"
          },
          {
            "label": "说别再惹事",
            "delta": 4,
            "response": "他认真点头三秒，然后承认这个建议理论上很优秀。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch8_twin_signal",
        "minTier": 1,
        "text": "弗雷德突然停下话头，望向走廊另一端，像接收到某种只有双胞胎能听见的警报。",
        "choices": [
          {
            "label": "问发生什么",
            "delta": 4,
            "response": "他说乔治刚想到一个坏主意，他得去确认它是否足够坏。"
          },
          {
            "label": "说你们真默契",
            "delta": 3,
            "response": "他笑说这不是默契，是长期共同犯罪留下的基础设施。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch9_paper_crown",
        "minTier": 1,
        "text": "弗雷德给一只南瓜馅饼戴上纸王冠，宣布它统治甜点王国直到被吃掉。",
        "choices": [
          {
            "label": "向馅饼行礼",
            "delta": 4,
            "response": "他严肃回礼，说你已获得甜点王国临时爵位。"
          },
          {
            "label": "问王国寿命多久",
            "delta": 3,
            "response": "他说取决于罗恩是否经过，政治局势十分不稳。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch9_teacher_escape",
        "minTier": 2,
        "text": "他听见教授脚步声，立刻把可疑纸包塞进袖子，表情无辜得过分。",
        "choices": [
          {
            "label": "问里面是什么",
            "delta": 3,
            "response": "他说你的求知欲非常危险，但包装良好。"
          },
          {
            "label": "提醒袖子鼓起来了",
            "delta": 4,
            "response": "他低头看一眼，迅速调整，称你为灾难预防部优秀员工。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch9_kind_lie",
        "minTier": 1,
        "text": "一个新生问自己的咒语是不是很糟，弗雷德沉默半秒，说“有潜力造成印象”。",
        "choices": [
          {
            "label": "说你这话很绕",
            "delta": 4,
            "response": "他说诚实和不伤人正在里面友好摔跤。"
          },
          {
            "label": "帮他补一句鼓励",
            "delta": 3,
            "response": "他立刻接上，说对，至少桌子现在非常记得你。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch9_shared_blame",
        "minTier": 2,
        "text": "弗雷德承认一次小事故是他的主意，却把乔治的名字也带上，像分担责任是双胞胎本能。",
        "choices": [
          {
            "label": "问是不是你主谋",
            "delta": 3,
            "response": "他说“主谋”听起来太孤独，他们更喜欢共同署名。"
          },
          {
            "label": "说别连累乔治",
            "delta": 4,
            "response": "他笑说乔治会感动的，前提是他不是另一个主谋。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch9_sudden_serious",
        "minTier": 1,
        "text": "弗雷德笑到一半忽然正经起来，拦住一个快要踩进水洼的新生。",
        "choices": [
          {
            "label": "说他变脸真快",
            "delta": 4,
            "response": "他说好笑和摔跤之间只差一脚，他偏爱前者。"
          },
          {
            "label": "帮忙拉那新生",
            "delta": 3,
            "response": "新生安全绕开水洼，弗雷德立刻恢复嬉皮笑脸。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch10_suspicious_marmalade",
        "minTier": 1,
        "text": "弗雷德盯着一罐橘子酱，说它今天看起来太平静，值得怀疑。",
        "choices": [
          {
            "label": "问你做了什么",
            "delta": 3,
            "response": "他说目前什么都没做，这正是橘子酱反常之处。"
          },
          {
            "label": "先不吃",
            "delta": 4,
            "response": "他赞许地点头，说警觉是通往长寿和好笑的第一步。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch10_prank_blueprint",
        "minTier": 2,
        "text": "他在纸上画机关图，图旁边写着“不要伤人，只伤自尊”。",
        "choices": [
          {
            "label": "问这是原则吗",
            "delta": 4,
            "response": "他说当然，自尊会长回来，眉毛不一定。"
          },
          {
            "label": "建议再加逃跑路线",
            "delta": 3,
            "response": "他立刻补上一条，称你为战术顾问。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch10_praise_george",
        "minTier": 1,
        "text": "弗雷德提到乔治做的机关，罕见地没有抢功，只说“那一下是他想的”。",
        "choices": [
          {
            "label": "说你很骄傲",
            "delta": 4,
            "response": "他耸肩说当然，乔治的坏主意里偶尔有天才。"
          },
          {
            "label": "问你不嫉妒吗",
            "delta": 3,
            "response": "他说嫉妒自己另一半脑子听起来效率太低。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch10_bad_day_joke",
        "minTier": 2,
        "text": "看见你心情不好，弗雷德先递糖，再讲笑话，顺序像经过认真研究。",
        "choices": [
          {
            "label": "问为什么先给糖",
            "delta": 4,
            "response": "他说空腹的人对笑话评判过于残酷。"
          },
          {
            "label": "说笑话一般",
            "delta": 3,
            "response": "他说太好了，说明糖还没完全发挥作用。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch10_quiet_exit",
        "minTier": 1,
        "text": "恶作剧成功后弗雷德没有立刻大笑，而是先确认没人真的被吓哭。",
        "choices": [
          {
            "label": "说你在检查后果",
            "delta": 4,
            "response": "他说别这么说，会显得他们像有良心。虽然他确实松了口气。"
          },
          {
            "label": "问如果有人哭呢",
            "delta": 3,
            "response": "他说那就是失败，不是恶作剧。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch11_fake_recipe",
        "minTier": 1,
        "text": "弗雷德在纸上写“完美道歉配方”，第一项是“先确认没有烟”。",
        "choices": [
          {
            "label": "问第二项",
            "delta": 3,
            "response": "他说第二项是把责任说得比借口大声。偶尔他们也会认真。"
          },
          {
            "label": "说这不像玩笑",
            "delta": 4,
            "response": "他眨眼说最好的玩笑必须知道什么时候停。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch11_gift_prank",
        "minTier": 2,
        "text": "他递给你一颗糖，郑重声明“目前没有副作用”。",
        "choices": [
          {
            "label": "问目前？",
            "delta": 4,
            "response": "他说科学诚实要求他保留观察窗口。"
          },
          {
            "label": "先让他吃",
            "delta": 3,
            "response": "他痛心地说你竟如此不信任一位可靠发明家。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch11_george_absent",
        "minTier": 1,
        "text": "乔治不在时，弗雷德讲笑话会慢半拍，像缺了一个回声。",
        "choices": [
          {
            "label": "问不习惯？",
            "delta": 4,
            "response": "他说他当然习惯，只是有些句子天生需要另一个人接住。"
          },
          {
            "label": "帮他接话",
            "delta": 3,
            "response": "你接得不太像乔治，但弗雷德仍然满意地拍了拍桌子。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch11_boredom_enemy",
        "minTier": 2,
        "text": "弗雷德说无聊比费尔奇更危险，因为费尔奇至少会发出脚步声。",
        "choices": [
          {
            "label": "问无聊怎么危险",
            "delta": 4,
            "response": "他说无聊会让人以为日子本来就该这样，而这非常不可接受。"
          },
          {
            "label": "说你夸张了",
            "delta": 3,
            "response": "他说夸张是治疗无聊的第一剂药。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch11_small_mercy",
        "minTier": 1,
        "text": "他看见一个人已经被捉弄过一次，立刻把第二个机关拆了。",
        "choices": [
          {
            "label": "说你有分寸",
            "delta": 4,
            "response": "他说分寸这个词太严肃，但他承认同一人连续倒霉会不好笑。"
          },
          {
            "label": "问机关是什么",
            "delta": 3,
            "response": "他说现在不能说，因为它未来可能重获新生。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch12_danger_label",
        "minTier": 1,
        "text": "弗雷德给一个纸包贴上“基本安全”，然后又加了一个问号。",
        "choices": [
          {
            "label": "问问号是什么意思",
            "delta": 4,
            "response": "他说这是对未来保持谦逊。"
          },
          {
            "label": "把纸包推远",
            "delta": 3,
            "response": "他赞许地说距离感是智慧的亲戚。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch12_rescue_boredom",
        "minTier": 2,
        "text": "他看见一桌人沉闷得像魔法史讲义，立刻开始策划“气氛救援”。",
        "choices": [
          {
            "label": "问怎么救",
            "delta": 3,
            "response": "他说先用低风险笑话试探生命迹象。"
          },
          {
            "label": "提醒别太过",
            "delta": 4,
            "response": "他说放心，今天目标是复苏，不是爆破。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch12_george_signal2",
        "minTier": 1,
        "text": "弗雷德突然改口，说乔治刚才从远处给了他一个“别现在”的眼神。",
        "choices": [
          {
            "label": "你看见了？",
            "delta": 4,
            "response": "他说当然，乔治的眉毛在战术沟通上极有天赋。"
          },
          {
            "label": "问为什么别现在",
            "delta": 3,
            "response": "他说观众不合适，笑话也要挑天气。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch12_genuine_sorry",
        "minTier": 2,
        "text": "一个玩笑让人真难过，弗雷德少见地没有找借口，直接说了抱歉。",
        "choices": [
          {
            "label": "说这样很好",
            "delta": 4,
            "response": "他说别夸，他已经够尴尬了。但道歉没有收回。"
          },
          {
            "label": "问会补救吗",
            "delta": 3,
            "response": "他说会，而且这次不带机关。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch12_little_legend",
        "minTier": 1,
        "text": "弗雷德说每条走廊都值得有一个传说，哪怕只是关于一块特别滑的地砖。",
        "choices": [
          {
            "label": "问这块地砖呢",
            "delta": 3,
            "response": "他说它正在等待英雄和合适鞋底。"
          },
          {
            "label": "说别制造传说",
            "delta": 4,
            "response": "他叹气说你对建筑民俗的发展缺乏热情。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch13_fake_notice",
        "minTier": 1,
        "text": "弗雷德正在草拟一张“请勿惊扰此楼梯，它正在思考”的告示。",
        "choices": [
          {
            "label": "问楼梯想什么",
            "delta": 4,
            "response": "他说显然在想怎样让珀西迟到而不留下证据。"
          },
          {
            "label": "提醒别贴太显眼",
            "delta": 3,
            "response": "他赞许地点头，说优秀建议总能减少扣分概率。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch13_mercy_prank",
        "minTier": 2,
        "text": "他把一个恶作剧改轻了，因为目标今天看起来已经够倒霉。",
        "choices": [
          {
            "label": "说这很有分寸",
            "delta": 4,
            "response": "他假装震惊，说别把他描述得太高尚，会影响市场声誉。"
          },
          {
            "label": "问原版多严重",
            "delta": 3,
            "response": "他只说原版会让鞋带重新思考人生。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch13_percy_patrol",
        "minTier": 1,
        "text": "弗雷德听见珀西巡逻的脚步声，立刻把脸摆成“我热爱纪律”的样子。",
        "choices": [
          {
            "label": "说不像",
            "delta": 4,
            "response": "他说这正是艺术，太像就失去讽刺。"
          },
          {
            "label": "一起装无辜",
            "delta": 3,
            "response": "珀西走过时多看了你们一眼，弗雷德事后评价你有潜力。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch13_twin_pause",
        "minTier": 2,
        "text": "乔治没接他的半句话，弗雷德停了一瞬，像舞步忽然少了另一只脚。",
        "choices": [
          {
            "label": "问他担心吗",
            "delta": 4,
            "response": "他说不担心，只是在等宇宙恢复正常。没多久乔治果然补上了后半句。"
          },
          {
            "label": "替他接一句",
            "delta": 3,
            "response": "他听完大笑，说方向正确，但韦斯莱味还需培养。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch13_kind_distraction",
        "minTier": 1,
        "text": "一个新生快哭了，弗雷德立刻让自己的羽毛笔假装摔倒，夸张地向墨水道歉。",
        "choices": [
          {
            "label": "帮他转移注意",
            "delta": 4,
            "response": "新生笑出来后，弗雷德向你眨眼，像完成了一次不宜公开的救援。"
          },
          {
            "label": "问笔疼不疼",
            "delta": 3,
            "response": "他说它会康复，只要墨水愿意原谅。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch14_spare_escape",
        "minTier": 1,
        "text": "弗雷德声称自己从不迷路，只是偶尔给城堡一个展示复杂性的机会。",
        "choices": [
          {
            "label": "问这次展示到哪了",
            "delta": 4,
            "response": "他说大概展示到了三楼错误走廊，以及一扇十分自信的门。"
          },
          {
            "label": "帮他找路",
            "delta": 3,
            "response": "他接受帮助，却坚持这是联合侦察。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch14_prank_math",
        "minTier": 2,
        "text": "他认真计算一场恶作剧的时间差，表情严肃得几乎像在做算术作业。",
        "choices": [
          {
            "label": "说你也会认真",
            "delta": 4,
            "response": "他说当然，混乱若不精确，就只是摔东西。"
          },
          {
            "label": "问结果",
            "delta": 3,
            "response": "他说结论是珀西的耐心比预计短四秒。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch14_small_applause",
        "minTier": 1,
        "text": "一个新生讲笑话没人笑，弗雷德带头鼓掌，掌声夸张却不刻薄。",
        "choices": [
          {
            "label": "说你很会救场",
            "delta": 4,
            "response": "他说每个笑话都有第一次，不能让它刚出生就冻死。"
          },
          {
            "label": "一起鼓掌",
            "delta": 3,
            "response": "新生终于笑了，虽然更像松了口气。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch14_george_disagree",
        "minTier": 2,
        "text": "乔治不同意他的点子，弗雷德没有立刻反驳，只把纸转过去让乔治改。",
        "choices": [
          {
            "label": "问你不坚持？",
            "delta": 4,
            "response": "他说天才也需要第二个天才负责刹车。"
          },
          {
            "label": "看他们修改",
            "delta": 3,
            "response": "计划变得更短、更安全，也更像双胞胎。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch14_secret_pocket",
        "minTier": 1,
        "text": "他口袋里响了一声，他立刻按住口袋，严肃地说那是“尚未发表的灵感”。",
        "choices": [
          {
            "label": "问灵感会爆吗",
            "delta": 4,
            "response": "他说目前只有轻微文学性风险。"
          },
          {
            "label": "后退半步",
            "delta": 3,
            "response": "他赞许地点头，说你已经具备初级生存审美。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch15_fake_survey",
        "minTier": 1,
        "text": "弗雷德设计了一份“楼梯满意度调查”，第一题是“你是否曾被楼梯背叛”。",
        "choices": [
          {
            "label": "填写一份",
            "delta": 4,
            "response": "他郑重收下，说你的证词将推动城堡基础设施改革。"
          },
          {
            "label": "问有用吗",
            "delta": 3,
            "response": "他说没用，但没用的文件常常最有娱乐价值。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch15_percy_mercy",
        "minTier": 2,
        "text": "他看见珀西累得揉眼睛，竟取消了一个针对级长徽章的玩笑。",
        "choices": [
          {
            "label": "说你心软",
            "delta": 4,
            "response": "他说胡说，他只是尊重疲劳状态下的靶子质量不佳。"
          },
          {
            "label": "问原计划",
            "delta": 3,
            "response": "他拒绝透露，声称那是被仁慈封存的艺术品。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch15_george_missing",
        "minTier": 1,
        "text": "乔治暂时不在，弗雷德讲笑话时少了一半回声，他皱眉说空气今天配合度不高。",
        "choices": [
          {
            "label": "接他一句",
            "delta": 4,
            "response": "他立刻精神起来，说你暂时获得实习双胞胎资格。"
          },
          {
            "label": "问不习惯？",
            "delta": 3,
            "response": "他说当然不习惯，半首歌唱起来很荒唐。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch15_trick_warning",
        "minTier": 2,
        "text": "他递给你一块糖，随后严肃补充“可能存在轻微戏剧效果”。",
        "choices": [
          {
            "label": "问多轻微",
            "delta": 4,
            "response": "他说取决于你对头发变色的哲学态度。"
          },
          {
            "label": "先不吃",
            "delta": 3,
            "response": "他赞许地点头，说谨慎让惊喜更有悬念。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch15_after_detention",
        "minTier": 1,
        "text": "禁闭后弗雷德一边揉手腕，一边宣布自己对抄写产生了深刻敌意。",
        "choices": [
          {
            "label": "问后悔吗",
            "delta": 4,
            "response": "他说后悔被抓，不后悔核心创意。"
          },
          {
            "label": "帮他拿书",
            "delta": 3,
            "response": "他感谢你，说同情犯错艺术家是一种高尚品质。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch16_noise_inventory",
        "minTier": 1,
        "text": "弗雷德给各种声响分级，从“轻微惊喜”到“费尔奇会出现”。",
        "choices": [
          {
            "label": "问最高级是什么",
            "delta": 4,
            "response": "他说最高级没有名字，因为命名者通常来不及写完。"
          },
          {
            "label": "帮他分类",
            "delta": 3,
            "response": "你们把一声可疑爆响归入“迅速离开”。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch16_kind_target",
        "minTier": 2,
        "text": "他放弃捉弄一个已经够倒霉的人，转而捉弄一扇总是夹人袍子的门。",
        "choices": [
          {
            "label": "说门活该",
            "delta": 4,
            "response": "他庄重点头，说正义偶尔需要针对家具。"
          },
          {
            "label": "问门会生气吗",
            "delta": 3,
            "response": "他说那就让它写投诉信。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch16_percy_line",
        "minTier": 1,
        "text": "珀西经过时，弗雷德已经张嘴，却看见他抱着一摞文件，又把话吞回去。",
        "choices": [
          {
            "label": "问你忍住了？",
            "delta": 4,
            "response": "他说不是忍，是战略性延期。爱护敌方体力也是策略。"
          },
          {
            "label": "说难得",
            "delta": 3,
            "response": "他警告你别记录这段黑历史。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch16_twin_halftruth",
        "minTier": 2,
        "text": "被问计划时，弗雷德说了半句真话，剩下半句留给乔治从另一边补刀。",
        "choices": [
          {
            "label": "说配合完美",
            "delta": 4,
            "response": "他说当然，完整谎言太笨重，半真半假才跑得快。"
          },
          {
            "label": "问真是哪半句",
            "delta": 3,
            "response": "他笑说这问题已经接近危险核心。"
          }
        ]
      },
      {
        "id": "fred_year1_chat_batch16_laughter_check",
        "minTier": 1,
        "text": "玩笑结束后，弗雷德偷偷回头确认被逗的人是不是真的笑了。",
        "choices": [
          {
            "label": "说你也会确认",
            "delta": 4,
            "response": "他说当然，笑话投递失败要负责售后。"
          },
          {
            "label": "帮他看一眼",
            "delta": 3,
            "response": "那人确实在笑，他夸张地松了口气。"
          }
        ]
      }
    ]
  }
};

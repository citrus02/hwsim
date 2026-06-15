/**
 * Year 1 students chat scenes for anthonyGoldstein.
 * Keep future additions in this character file.
 */

export const ANTHONY_GOLDSTEIN_YEAR1_CHAT_SCENES = {
  "anthonyGoldstein": {
    "activeChatEvents": [
      {
        "id": "anthony_year1_chat_rule_edge",
        "minTier": 1,
        "text": "安东尼在公告栏旁读一条校规，指尖停在“不得”两个字上。他没有像珀西那样立刻维护它，而是在旁边写下一个很小的问号。",
        "choices": [
          {
            "label": "问他觉得哪里不对",
            "delta": 4,
            "response": "他说规则本身可能必要，但写得太宽会把无辜的人也罩进去。你们一起看那句话，忽然觉得标点也有重量。"
          },
          {
            "label": "说他想得太认真了",
            "delta": 3,
            "response": "安东尼并不生气，只说如果规则不认真想，执行时就会让别人替它付代价。他说得平静，却不容易被敷衍过去。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_shared_quill",
        "minTier": 1,
        "text": "安东尼把自己的备用羽毛笔借给一个忘带文具的新生，还认真说明用完要放平，别把笔尖压坏。",
        "choices": [
          {
            "label": "说他很细心",
            "delta": 3,
            "response": "他说工具被好好对待，下一位使用者才不会倒霉。听起来像规矩，也像体贴。"
          },
          {
            "label": "帮他找回笔套",
            "delta": 4,
            "response": "你在桌下找到笔套。安东尼松了口气，说小东西失踪最能证明秩序有多脆弱。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_fair_turn",
        "minTier": 2,
        "text": "公共休息室里几个人抢着发表看法，安东尼敲了敲桌面，让刚才一直没说话的人先讲。那一下不重，却很有效。",
        "choices": [
          {
            "label": "说他控场很好",
            "delta": 4,
            "response": "安东尼说不是控场，只是让轮到的人真的轮到。这个区别对他而言显然很重要。"
          },
          {
            "label": "问没人听怎么办",
            "delta": 3,
            "response": "他说那就再敲一次，必要时把规则先讲清楚。温和不等于含糊。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_clean_argument",
        "minTier": 1,
        "text": "安东尼把一场争论整理成三条观点，刻意删掉了所有人身攻击。纸面一下子清爽得惊人。",
        "choices": [
          {
            "label": "说这样好懂多了",
            "delta": 4,
            "response": "他说观点被洗干净后，谁站不住就更明显。"
          },
          {
            "label": "问为什么删那么多",
            "delta": 3,
            "response": "他说因为那些话只制造噪音，不提供理由。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_shared_rule",
        "minTier": 1,
        "text": "他给几个人分配讨论顺序，连自己也排在后面。有人问为什么，他说规则不该只管别人。",
        "choices": [
          {
            "label": "支持这个安排",
            "delta": 4,
            "response": "安东尼点头，表情放松些。被理解时，他的严肃会少一点防备。"
          },
          {
            "label": "问他不想先说吗",
            "delta": 3,
            "response": "他说当然想，所以更不能先说。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_family_name",
        "minTier": 2,
        "text": "有人把他的姓念错，安东尼温和纠正。第二次念错时，他的温和还在，边缘却硬了一点。",
        "choices": [
          {
            "label": "帮忙重复正确读法",
            "delta": 4,
            "response": "你自然地念了一遍正确姓氏。安东尼看向你，郑重地点了点头。"
          },
          {
            "label": "问他常被念错吗",
            "delta": 3,
            "response": "他说常有。名字被说对不是奢侈，是基本礼貌。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_book_return",
        "minTier": 2,
        "text": "安东尼把借来的书包上纸套再归还，连折痕都压平。他说归还是借用的一部分。",
        "choices": [
          {
            "label": "说对方会高兴",
            "delta": 3,
            "response": "他说希望如此。尊重如果无人看见，也仍然该做。"
          },
          {
            "label": "帮他贴好纸套",
            "delta": 4,
            "response": "你们把纸套整理平整。他满意得像完成了一份小契约。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_soft_correction",
        "minTier": 1,
        "text": "一个低年级答错问题，安东尼本能地想纠正，开口前先把语气放轻。",
        "choices": [
          {
            "label": "说他刚才很温和",
            "delta": 4,
            "response": "他像没想到你会注意，说正确不该把人推远。"
          },
          {
            "label": "问他怎么做到",
            "delta": 3,
            "response": "他说先记得自己也答错过。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_balanced_scale",
        "minTier": 1,
        "text": "安东尼在纸上画天平来整理观点，一边写“事实”，一边写“感受”。两边他都没有划掉。",
        "choices": [
          {
            "label": "问感受也算吗",
            "delta": 4,
            "response": "他说感受不等于证据，但会影响人如何听证据。忽略它并不理性。"
          },
          {
            "label": "帮他补事实",
            "delta": 3,
            "response": "他把你的补充写进左边，又认真问右边有没有遗漏。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_precise_apology",
        "minTier": 2,
        "text": "安东尼向一个同学道歉，明确说出自己错在“假设你没读完”。这比一般道歉长，也更有用。",
        "choices": [
          {
            "label": "说这样很清楚",
            "delta": 4,
            "response": "他说含糊的道歉容易把责任留在雾里。清楚一点比较公平。"
          },
          {
            "label": "问会不会太正式",
            "delta": 3,
            "response": "他承认可能，但至少不会让对方猜。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_minor_rule",
        "minTier": 1,
        "text": "他发现一条小规定前后矛盾，立刻在书页间夹了纸条。旁边人觉得无所谓，他却很认真。",
        "choices": [
          {
            "label": "问小矛盾也重要吗",
            "delta": 4,
            "response": "他说小矛盾一旦执行，就会变成某个人的大麻烦。"
          },
          {
            "label": "帮他找另一处引用",
            "delta": 3,
            "response": "你找到相关段落，他把两处并排抄下。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_kind_challenge",
        "minTier": 2,
        "text": "他反驳别人时先说“我可能理解错了”。那句话不是退让，而是给对方留台阶。",
        "choices": [
          {
            "label": "说这句很好",
            "delta": 4,
            "response": "安东尼有点意外，说争论不该以羞辱为燃料。"
          },
          {
            "label": "问他总这样吗",
            "delta": 3,
            "response": "他说尽量。失败时通常是因为自己太急。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_family_dinner",
        "minTier": 1,
        "text": "安东尼提到家里晚餐讨论新闻，每个人都得说理由。他说得平静，像这本来就是正常餐桌。",
        "choices": [
          {
            "label": "问会不会累",
            "delta": 3,
            "response": "他说会，但也训练人不要只会重复别人。"
          },
          {
            "label": "说听起来有趣",
            "delta": 4,
            "response": "他笑了，说如果你喜欢被祖母追问三次“为什么”，那确实有趣。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_margin_objection",
        "minTier": 1,
        "text": "安东尼在课本页边写下“反对，但需更多证据”。他连不同意都不同意得很守规矩。",
        "choices": [
          {
            "label": "问证据从哪找",
            "delta": 4,
            "response": "他立刻列出三本书和一个可能需要请教的教授。反对在他这里会长出路线图。"
          },
          {
            "label": "说你真谨慎",
            "delta": 3,
            "response": "他说谨慎不是胆小，是不把情绪冒充结论。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_table_mediator",
        "minTier": 2,
        "text": "长桌上一场争执快要升级，安东尼把双方各自最后一句重复了一遍，声音平稳得像压纸石。",
        "choices": [
          {
            "label": "说你很适合调停",
            "delta": 4,
            "response": "他说调停不是让大家都高兴，而是先让大家别继续误解。"
          },
          {
            "label": "帮他总结一点",
            "delta": 3,
            "response": "你补出共同点，他立刻接住，争执有了落脚处。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_principle_cost",
        "minTier": 2,
        "text": "安东尼坚持一件小事按规则来，哪怕这让他自己也要多跑一趟。",
        "choices": [
          {
            "label": "问不嫌麻烦吗",
            "delta": 4,
            "response": "他说如果原则只在方便时存在，那不叫原则，叫偏好。"
          },
          {
            "label": "陪他一起去",
            "delta": 3,
            "response": "他看起来很感激，但仍坚持自己也拿一半资料。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_kind_fact",
        "minTier": 1,
        "text": "一个学生把日期背错，安东尼纠正前先说“你前面那部分是对的”。",
        "choices": [
          {
            "label": "说这样很好",
            "delta": 4,
            "response": "他说纠错不该把正确部分一起踩碎。"
          },
          {
            "label": "问他以前被这样纠正过吗",
            "delta": 3,
            "response": "他点头，说被完整否定的感觉很糟。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_family_expectation",
        "minTier": 1,
        "text": "安东尼提到家里希望他“说话有分寸”。他说这话时笑了一下，像这句话曾经被重复很多次。",
        "choices": [
          {
            "label": "问你做到了吗",
            "delta": 4,
            "response": "他说还在做。分寸不是少说话，是知道话会落到哪里。"
          },
          {
            "label": "说听起来挺难",
            "delta": 3,
            "response": "他承认难，尤其在别人明显错的时候。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_respectful_pause",
        "minTier": 1,
        "text": "安东尼发言前停了一下，确认上一位真的说完。他像把礼貌当成逻辑的一部分。",
        "choices": [
          {
            "label": "说你很注意这个",
            "delta": 4,
            "response": "他说不确认别人说完就反驳，很多时候只是在反驳自己的想象。"
          },
          {
            "label": "问这是习惯吗",
            "delta": 3,
            "response": "他说是，也是在家里被纠正出来的。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_rule_exception_case",
        "minTier": 2,
        "text": "他为一条规则写下例外情况，字迹比规则本身还谨慎。",
        "choices": [
          {
            "label": "问例外不会破坏规则吗",
            "delta": 4,
            "response": "他说好的例外能保护规则不变成盲目。"
          },
          {
            "label": "帮他想一个例子",
            "delta": 3,
            "response": "你们写下场景，他立刻标注限制条件。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_precise_kind_word",
        "minTier": 1,
        "text": "安东尼夸人时也很精确：不是“很好”，而是“第二段论证很稳”。",
        "choices": [
          {
            "label": "说这样更可信",
            "delta": 4,
            "response": "他点头，说模糊夸奖有时像没认真看。"
          },
          {
            "label": "问他会不会太严肃",
            "delta": 3,
            "response": "他说可能，但严肃不一定缺少善意。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_family_debate_echo",
        "minTier": 2,
        "text": "他听见别人用“因为我说了算”结束争论，眉头立刻皱起来。",
        "choices": [
          {
            "label": "问你不喜欢这句",
            "delta": 4,
            "response": "他说这不是理由，是把理由赶出房间。"
          },
          {
            "label": "问家里会这么说吗",
            "delta": 3,
            "response": "他说很少，因为会立刻有人问“凭什么”。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_difficult_fairness",
        "minTier": 1,
        "text": "安东尼承认自己更喜欢某个同学，却仍把发言机会先给另一个更少说话的人。",
        "choices": [
          {
            "label": "问这难吗",
            "delta": 4,
            "response": "他说难，所以才需要规则帮忙。"
          },
          {
            "label": "说你做得公平",
            "delta": 3,
            "response": "他看起来松了口气，像公平也需要旁证。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch7_clean_argument",
        "minTier": 1,
        "text": "安东尼把争论中的观点写成三条，连反对意见都整理得很整洁。",
        "choices": [
          {
            "label": "问为什么替对方整理",
            "delta": 4,
            "response": "他说如果连反对意见都说不清，赢了也只是赢了稻草人。"
          },
          {
            "label": "帮他补一条",
            "delta": 3,
            "response": "他认真记下，并承认这条让问题更难，但也更诚实。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch7_polite_correction",
        "minTier": 2,
        "text": "他纠正别人错误时先说“我可能理解错了”，明明看起来一点也没理解错。",
        "choices": [
          {
            "label": "说他太客气了",
            "delta": 3,
            "response": "他笑说客气能让真相少带一点刺，不代表真相变软。"
          },
          {
            "label": "问如果对方不听呢",
            "delta": 4,
            "response": "他说那就把证据放在桌上，让证据自己学会耐心。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch7_family_candle",
        "minTier": 1,
        "text": "晚餐后安东尼提到家里点烛的习惯，语气安静，像那束光仍在他记忆里亮着。",
        "choices": [
          {
            "label": "问他想家吗",
            "delta": 4,
            "response": "他说想，但想念不一定是坏事，它提醒人自己从哪里被爱过。"
          },
          {
            "label": "安静听他说",
            "delta": 3,
            "response": "他讲得不多，却把每个细节都说得很稳。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch7_exam_fairness",
        "minTier": 2,
        "text": "有人抱怨题目不公平，安东尼没有附和，先问“不公平在哪里”。",
        "choices": [
          {
            "label": "说他很较真",
            "delta": 3,
            "response": "他说抱怨若不具体，就很难被认真帮助。"
          },
          {
            "label": "一起分析题目",
            "delta": 4,
            "response": "你们发现题目确实有歧义。他决定去问教授，语气像提交一份温和的上诉。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch7_shared_silence",
        "minTier": 1,
        "text": "图书馆里，安东尼把椅子轻轻拉开，尽量不发出声音。旁边人睡着了，他还顺手把书垫远一点。",
        "choices": [
          {
            "label": "说他很细心",
            "delta": 4,
            "response": "他小声说公共空间靠每个人少制造一点麻烦来维持。"
          },
          {
            "label": "帮他放轻脚步",
            "delta": 3,
            "response": "你们像在一场安静的仪式里移动，连书页都翻得慢了些。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch8_balanced_scale",
        "minTier": 1,
        "text": "安东尼把两种观点写在纸上，中间画了一条线，仿佛纸也该保持公正站姿。",
        "choices": [
          {
            "label": "问他支持哪边",
            "delta": 4,
            "response": "他说还不到支持的时候，先让双方都把鞋穿好。"
          },
          {
            "label": "帮他补证据",
            "delta": 3,
            "response": "他认真道谢，把你的证据放到较弱一边，像在扶一张倾斜的桌子。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch8_small_prayer",
        "minTier": 2,
        "text": "晚餐前，他安静了一小会儿，没有打扰别人，也没有要求别人注意。",
        "choices": [
          {
            "label": "问这是习惯吗",
            "delta": 4,
            "response": "他说是。有些习惯不需要被解释才能真实存在。"
          },
          {
            "label": "尊重地等着",
            "delta": 3,
            "response": "他睁眼后对你点头，感谢你没有把安静变成问题。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch8_precise_word",
        "minTier": 1,
        "text": "他为了一个词是否准确犹豫很久，最后把“公平”改成“合宜”。",
        "choices": [
          {
            "label": "问区别在哪里",
            "delta": 4,
            "response": "他说公平是天平，合宜还要看天平放在哪间屋子里。"
          },
          {
            "label": "说太讲究了",
            "delta": 3,
            "response": "他笑说语言不讲究时，误会会替它讲究。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch8_lost_temper",
        "minTier": 2,
        "text": "安东尼难得提高了声音，说完立刻停住，像比别人更先意识到自己越线。",
        "choices": [
          {
            "label": "问他还好吗",
            "delta": 4,
            "response": "他说不好，但可以修正。他随后向对方道歉，话不多却很清楚。"
          },
          {
            "label": "说谁都会生气",
            "delta": 3,
            "response": "他说是，但“谁都会”不能替“我做了什么”签字。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch8_shared_reference",
        "minTier": 1,
        "text": "他递给你一本书，说里面第三章能回答你昨天的问题，页角已经折好。",
        "choices": [
          {
            "label": "说他还记得",
            "delta": 4,
            "response": "他说问题若被认真问出，就值得被认真记住。"
          },
          {
            "label": "立刻翻到第三章",
            "delta": 3,
            "response": "那一页有他很轻的铅笔线，像一条安静的路标。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch9_shared_pen",
        "minTier": 1,
        "text": "安东尼借出羽毛笔时顺手提醒对方笔尖较软，别太用力。",
        "choices": [
          {
            "label": "说他提醒得细",
            "delta": 4,
            "response": "他说物品被借出后，责任并不完全离开主人。"
          },
          {
            "label": "问这是很贵的笔吗",
            "delta": 3,
            "response": "他说不贵，但习惯贵在被尊重。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch9_moral_example",
        "minTier": 2,
        "text": "他举例说明一个道德难题，例子具体到让听的人都沉默下来。",
        "choices": [
          {
            "label": "问这是听来的事吗",
            "delta": 4,
            "response": "他说有些例子不是为了猎奇，而是为了防止道理飘在半空。"
          },
          {
            "label": "说有点沉重",
            "delta": 3,
            "response": "他点头，说沉重的问题若被讲轻了，就不诚实。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch9_after_apology",
        "minTier": 1,
        "text": "别人向安东尼道歉后，他没有立刻说没关系，而是先点头说“我听见了”。",
        "choices": [
          {
            "label": "问为什么不马上原谅",
            "delta": 4,
            "response": "他说原谅不是自动回信，先确认对方的话送到了。"
          },
          {
            "label": "说这样很公平",
            "delta": 3,
            "response": "他说希望如此。公平有时也需要给自己留一点时间。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch9_precise_praise",
        "minTier": 2,
        "text": "他夸人时总能说出具体哪里好，不像随手撒糖。",
        "choices": [
          {
            "label": "问怎么做到",
            "delta": 4,
            "response": "他说如果说不出具体处，夸奖就像没有地址的信。"
          },
          {
            "label": "让他评价你",
            "delta": 3,
            "response": "他认真说出一处你没注意到的优点，听起来很稳。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch9_window_reflection",
        "minTier": 1,
        "text": "安东尼在窗边整理思路，倒影里的他看起来比平时更年轻一点。",
        "choices": [
          {
            "label": "问他在想什么",
            "delta": 3,
            "response": "他说在想今天有一句话说得太快了，可能该明天补一句。"
          },
          {
            "label": "说你已经很周到",
            "delta": 4,
            "response": "他笑了笑，说周到不该成为停止反省的理由，但谢谢。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch10_ink_balance",
        "minTier": 1,
        "text": "安东尼写字时墨水浓淡均匀，连删改都尽量保持整洁。",
        "choices": [
          {
            "label": "问怎么做到",
            "delta": 3,
            "response": "他说慢一点，别让急躁替手做决定。"
          },
          {
            "label": "说很赏心悦目",
            "delta": 4,
            "response": "他笑说整洁不是目的，但能让思考少被绊倒。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch10_question_consent",
        "minTier": 2,
        "text": "他问别人私人问题前先说“你可以不回答”，语气自然得像真正相信这句话。",
        "choices": [
          {
            "label": "说这很体贴",
            "delta": 4,
            "response": "他说允许沉默存在，回答才比较像回答。"
          },
          {
            "label": "问他怎么想到的",
            "delta": 3,
            "response": "他说每个人都有不该被走廊随便打开的抽屉。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch10_argument_repair",
        "minTier": 1,
        "text": "争论后安东尼主动找对方补一句话，说明自己刚才哪个词用重了。",
        "choices": [
          {
            "label": "说你很认真",
            "delta": 4,
            "response": "他说词会留下痕迹，修补得及时些，关系就不必背着它走。"
          },
          {
            "label": "问对方接受了吗",
            "delta": 3,
            "response": "他说接受了，至少愿意继续坐在同一张桌边。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch10_family_food",
        "minTier": 2,
        "text": "他提到家里某种节日食物，描述得很细，像味道还停在舌尖。",
        "choices": [
          {
            "label": "问想念吗",
            "delta": 4,
            "response": "他说想念，但这种想念是暖的，不全是疼。"
          },
          {
            "label": "问怎么做",
            "delta": 3,
            "response": "他认真讲了步骤，讲到调味时笑了，说这里大概找不齐。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch10_principle_flex",
        "minTier": 1,
        "text": "他承认自己改变了一个判断，理由是新信息出现了。说得坦然，像原则并没因此倒塌。",
        "choices": [
          {
            "label": "说改变很难",
            "delta": 4,
            "response": "他说难，但拒绝新信息更像固执，不像原则。"
          },
          {
            "label": "问会不会尴尬",
            "delta": 3,
            "response": "他说会，尴尬不是错误，只是转弯时鞋底发出的声音。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch11_fair_queue",
        "minTier": 1,
        "text": "安东尼发现排队顺序乱了，没有指责，只重新问每个人原本的位置。",
        "choices": [
          {
            "label": "说你很会处理",
            "delta": 4,
            "response": "他说争端不一定要先找坏人，有时先找事实就够了。"
          },
          {
            "label": "帮他核对",
            "delta": 3,
            "response": "队伍重新排好，没人太尴尬。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch11_sabbath_memory",
        "minTier": 2,
        "text": "他说起家里某个安静的夜晚，声音也跟着放轻，像怕惊动那段记忆。",
        "choices": [
          {
            "label": "问你想家吗",
            "delta": 4,
            "response": "他说想，但安静的想念不总是难过，有时像一盏灯。"
          },
          {
            "label": "安静听他说",
            "delta": 3,
            "response": "他讲得不多，却把每个细节放得很稳。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch11_word_repair",
        "minTier": 1,
        "text": "他说错别人的名字后立刻纠正并道歉，没有把它当小事滑过去。",
        "choices": [
          {
            "label": "说你很尊重人",
            "delta": 4,
            "response": "他说名字不是装饰，叫错了就该停下来修正。"
          },
          {
            "label": "问对方介意吗",
            "delta": 3,
            "response": "他说也许不介意，但这不免除他认真。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch11_doubt_welcome",
        "minTier": 2,
        "text": "有人质疑他的观点，安东尼先说“好问题”，再开始回答。",
        "choices": [
          {
            "label": "问你真的觉得好？",
            "delta": 4,
            "response": "他说是。能让观点站稳的问题都值得欢迎，即使它来得不客气。"
          },
          {
            "label": "帮他补证据",
            "delta": 3,
            "response": "他接过你的证据，明确说明这是你提供的。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch11_kind_boundary",
        "minTier": 1,
        "text": "有人请求他帮忙到很晚，安东尼温和拒绝，说自己也需要休息。",
        "choices": [
          {
            "label": "说你拒绝得好",
            "delta": 4,
            "response": "他说帮助别人不能建立在假装自己不会累上。"
          },
          {
            "label": "问对方生气吗",
            "delta": 3,
            "response": "他说有点，但边界不因别人不喜欢就自动消失。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch12_careful_listen",
        "minTier": 1,
        "text": "安东尼听别人解释时不打断，哪怕他明显已经发现问题。",
        "choices": [
          {
            "label": "问为什么等",
            "delta": 4,
            "response": "他说让人把话说完整，纠正才不会像抢夺。"
          },
          {
            "label": "说你很有耐心",
            "delta": 3,
            "response": "他说耐心有时只是尊重的可见形式。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch12_fair_word",
        "minTier": 2,
        "text": "他把“错”改成“不充分”，说这两个词给人的路不同。",
        "choices": [
          {
            "label": "问区别",
            "delta": 4,
            "response": "他说“错”容易让人关门，“不充分”告诉人还能补。"
          },
          {
            "label": "说你很会用词",
            "delta": 3,
            "response": "他笑说词若选错，道理会穿错鞋。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch12_holiday_memory",
        "minTier": 1,
        "text": "他说家里节日会有很长的餐桌和很多声音，讲到这里笑得很温和。",
        "choices": [
          {
            "label": "问想念吗",
            "delta": 4,
            "response": "他说想念，尤其是那种不用解释自己是谁的声音。"
          },
          {
            "label": "问最想哪道菜",
            "delta": 3,
            "response": "他讲得很细，像味道能短暂越过城堡。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch12_boundary_help",
        "minTier": 2,
        "text": "有人请求他替自己说谎，安东尼温和但明确地拒绝。",
        "choices": [
          {
            "label": "说你拒绝得稳",
            "delta": 4,
            "response": "他说帮朋友不应包括帮谎言长腿。"
          },
          {
            "label": "问对方生气吗",
            "delta": 3,
            "response": "他说生气，但他宁愿承受这点生气。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch12_shared_doubt",
        "minTier": 1,
        "text": "安东尼承认自己也会不确定，只是喜欢先把不确定整理好再拿出来。",
        "choices": [
          {
            "label": "说这很真实",
            "delta": 4,
            "response": "他笑了，说不确定若被整理过，就比较不会到处撞人。"
          },
          {
            "label": "问怎么整理",
            "delta": 3,
            "response": "他写下证据、担心和下一步，像给迷雾分格子。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch13_fair_turn",
        "minTier": 1,
        "text": "安东尼坚持让每个人轮流发言，连最吵的人也被他礼貌地按回顺序里。",
        "choices": [
          {
            "label": "说你很公正",
            "delta": 4,
            "response": "他说公正不是大家都满意，而是大家都知道为什么轮到谁。"
          },
          {
            "label": "帮他记顺序",
            "delta": 3,
            "response": "他向你点头，讨论终于不再像一群猫头鹰同时送信。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch13_precise_words",
        "minTier": 2,
        "text": "他为一个词斟酌很久，因为“可能”与“很可能”在他看来不是一回事。",
        "choices": [
          {
            "label": "问差别大吗",
            "delta": 4,
            "response": "他说差别大到足以改变一个结论的脊梁。"
          },
          {
            "label": "说你很严谨",
            "delta": 3,
            "response": "他微笑，说严谨是给误会提前修门锁。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch13_friend_mediator",
        "minTier": 1,
        "text": "两个同学争执时，安东尼没有急着判谁对，而是先把双方话里相同的部分找出来。",
        "choices": [
          {
            "label": "问这样有用吗",
            "delta": 4,
            "response": "他说人一旦发现自己不是完全孤岛，就比较愿意修桥。"
          },
          {
            "label": "帮他复述",
            "delta": 3,
            "response": "争吵声音降下来，他悄悄松了口气。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch13_private_worry",
        "minTier": 2,
        "text": "他承认自己有时怕说错话，因为说错话也可能显得很有条理。",
        "choices": [
          {
            "label": "说可以改正",
            "delta": 4,
            "response": "他说是，所以他喜欢铅笔，虽然巫师们对橡皮缺乏敬意。"
          },
          {
            "label": "问你常担心吗",
            "delta": 3,
            "response": "他说越想负责，越知道话会走得比人远。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch13_small_courtesy",
        "minTier": 1,
        "text": "他给画像让路，还认真说了声抱歉，画像愣了一下才回礼。",
        "choices": [
          {
            "label": "说你真礼貌",
            "delta": 4,
            "response": "他说礼貌花费很少，却能防止许多不必要的幽灵式怨恨。"
          },
          {
            "label": "向画像点头",
            "delta": 3,
            "response": "画像满意地挺直了背，像走廊秩序因此恢复。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch14_table_rules",
        "minTier": 1,
        "text": "安东尼给小组讨论定了三条规则，最后一条是“允许改变想法”。",
        "choices": [
          {
            "label": "问为什么写这条",
            "delta": 4,
            "response": "他说不允许改变想法的讨论，只是在比赛谁更固执。"
          },
          {
            "label": "帮他念规则",
            "delta": 3,
            "response": "大家笑了一下，但讨论确实顺畅了。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch14_precise_apology",
        "minTier": 2,
        "text": "他道歉时明确说出自己哪句话不合适，没有用“如果你觉得”开头。",
        "choices": [
          {
            "label": "说这样很好",
            "delta": 4,
            "response": "他说道歉若把责任递回给对方，就不是道歉，是包装过的逃跑。"
          },
          {
            "label": "问学来的？",
            "delta": 3,
            "response": "他说是从很多糟糕示范里反向学来的。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch14_uncertain_kind",
        "minTier": 1,
        "text": "有人问他答案，他先说“不确定”，再把可能性一项项列出来。",
        "choices": [
          {
            "label": "说你很诚实",
            "delta": 4,
            "response": "他说诚实有时比正确更能让别人安全。"
          },
          {
            "label": "一起查证",
            "delta": 3,
            "response": "答案确认后，他把“不确定”旁边补上日期。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch14_small_injustice",
        "minTier": 2,
        "text": "一个安静学生的想法被别人抢先说出，安东尼立刻把功劳还给原本的人。",
        "choices": [
          {
            "label": "支持他",
            "delta": 4,
            "response": "被点名的学生脸红了，却坐直了一点。安东尼看起来很满意。"
          },
          {
            "label": "问你怎么注意到",
            "delta": 3,
            "response": "他说沉默的人常常先把好想法递出去，却没人接收据。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch14_late_candle",
        "minTier": 1,
        "text": "他熬夜整理笔记，蜡烛快烧到底，还在给标题重新命名。",
        "choices": [
          {
            "label": "提醒他睡觉",
            "delta": 4,
            "response": "他说标题若不准，明天的自己会被今天的自己误导。然后终于合上本子。"
          },
          {
            "label": "帮他想标题",
            "delta": 3,
            "response": "你们想出一个简短标题，他郑重写下。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch15_notes_citation",
        "minTier": 1,
        "text": "安东尼在同学笔记旁标注出处，说好想法也该知道自己从哪里来。",
        "choices": [
          {
            "label": "问这么正式？",
            "delta": 4,
            "response": "他说尊重来源能避免许多未来争吵。"
          },
          {
            "label": "帮他补页码",
            "delta": 3,
            "response": "页码补上后，他明显舒坦了。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch15_conflict_summary",
        "minTier": 2,
        "text": "两个人吵到互相听不见时，安东尼把双方观点各总结一句。",
        "choices": [
          {
            "label": "说你像裁判",
            "delta": 4,
            "response": "他说裁判太重了，他只是临时给混乱加字幕。"
          },
          {
            "label": "帮他确认",
            "delta": 3,
            "response": "双方终于发现自己至少听懂了一点对方。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch15_polite_no",
        "minTier": 1,
        "text": "有人请他帮忙作弊，安东尼拒绝得很礼貌，却没有留下任何误解空间。",
        "choices": [
          {
            "label": "说拒绝得好",
            "delta": 4,
            "response": "他说模糊拒绝会让坏主意误以为还有门缝。"
          },
          {
            "label": "问对方生气吗",
            "delta": 3,
            "response": "他说可能，但生气不等于值得让步。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch15_worry_list",
        "minTier": 2,
        "text": "他列出自己担心的事，写完后发现有些担心只是在重复敲门。",
        "choices": [
          {
            "label": "问有帮助吗",
            "delta": 4,
            "response": "他说有，把担心写出来，它至少不能同时从四面八方说话。"
          },
          {
            "label": "帮他删重复",
            "delta": 3,
            "response": "清单短了些，他看起来也轻了一点。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch15_credit_to_quiet",
        "minTier": 1,
        "text": "小组展示时，安东尼特意提到一个沉默成员的贡献。",
        "choices": [
          {
            "label": "说你记得她",
            "delta": 4,
            "response": "他说安静工作若没人说出来，就太容易被当作空气。"
          },
          {
            "label": "一起鼓掌",
            "delta": 3,
            "response": "那名成员脸红了，但笑得很真实。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch16_argument_map",
        "minTier": 1,
        "text": "安东尼把争论画成箭头图，努力找出大家究竟从哪一步开始互相听不懂。",
        "choices": [
          {
            "label": "问找到了吗",
            "delta": 4,
            "response": "他说找到了，是一个被所有人跳过的定义。"
          },
          {
            "label": "帮他补定义",
            "delta": 3,
            "response": "定义写清后，争论立刻小了一圈。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch16_kind_precision",
        "minTier": 2,
        "text": "他纠正朋友用词时先说“我知道你不是这个意思”，再指出问题。",
        "choices": [
          {
            "label": "说这样很周到",
            "delta": 4,
            "response": "他说准确不该靠让朋友难堪来显得准确。"
          },
          {
            "label": "问区别在哪里",
            "delta": 3,
            "response": "他解释得很清楚，还给了例句。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch16_dinner_fair",
        "minTier": 1,
        "text": "分最后几块点心时，安东尼提议按还没吃到的人优先，而不是谁手快。",
        "choices": [
          {
            "label": "说很公平",
            "delta": 4,
            "response": "他说公平常常就是让速度慢的人也能得到一块。"
          },
          {
            "label": "帮他分",
            "delta": 3,
            "response": "点心分完后，桌边少了许多尴尬。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch16_private_uncertain",
        "minTier": 2,
        "text": "他承认自己有时也想直接赢过别人，不想总做理性的人。",
        "choices": [
          {
            "label": "说这很正常",
            "delta": 4,
            "response": "他笑了笑，说谢谢，理性的人也偶尔想把纸团扔进壁炉。"
          },
          {
            "label": "问会扔吗",
            "delta": 3,
            "response": "他说不会。大概不会。"
          }
        ]
      },
      {
        "id": "anthony_year1_chat_batch16_listening_credit",
        "minTier": 1,
        "text": "讨论结束后，安东尼特意感谢一个人“没有打断”，那人显然第一次因此被表扬。",
        "choices": [
          {
            "label": "说这也值得谢",
            "delta": 4,
            "response": "他说当然，好的倾听常被误认为只是没说话。"
          },
          {
            "label": "一起道谢",
            "delta": 3,
            "response": "对方有点不好意思，却坐得更直了。"
          }
        ]
      }
    ]
  }
};

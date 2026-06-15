/**
 * Year 1 students chat scenes for hermione.
 * Keep future additions in this character file.
 */

export const HERMIONE_YEAR1_CHAT_SCENES = {
  "hermione": {
    "activeChatEvents": [
      {
        "id": "hermione_year1_chat_spare_parchment",
        "minTier": 1,
        "text": "赫敏在图书馆把几张备用羊皮纸压平，边角对得很齐。她看见你时，先下意识把书签夹好，才像忽然想起自己并不是在接受检查。",
        "choices": [
          {
            "label": "问她在准备什么",
            "delta": 3,
            "response": "她说不是准备，只是避免“突然需要时什么都没有”。随后她停顿一下，把一张羊皮纸推给你，语气仍然很快，却没有那么硬。"
          },
          {
            "label": "说她总是想得很周到",
            "delta": 4,
            "response": "赫敏耳尖红了一点，立刻说这只是基本习惯。但她把羽毛笔摆回墨水瓶旁时，动作明显轻快了些。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_library_clock",
        "minTier": 1,
        "text": "赫敏在图书馆抬头看钟，像刚刚发现时间竟然没有按她的计划走。她桌上摊着三本书，每本都夹着不同颜色的纸条。",
        "choices": [
          {
            "label": "提醒她休息一下",
            "delta": 4,
            "response": "她本想反驳，却在看见自己墨水瓶快空了时停住。她说只休息五分钟，随后真的把书合上了，虽然手还压在封面上。"
          },
          {
            "label": "问哪本最有用",
            "delta": 3,
            "response": "赫敏立刻讲出三本书各自的优缺点，讲到一半才意识到你只是问“最有用”。她有点不好意思，但显然讲得很开心。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_corrected_map",
        "minTier": 2,
        "text": "赫敏在一张城堡小地图上改了好几处错误，尤其是活动楼梯的位置。她皱着眉说地图如果不承认变化，就只能算装饰。",
        "choices": [
          {
            "label": "帮她标出今天的楼梯",
            "delta": 4,
            "response": "你们把新路线补上去。赫敏满意地点头，说知识也要随时修订，否则再漂亮也会带人走错路。"
          },
          {
            "label": "说城堡太难画了",
            "delta": 3,
            "response": "她承认确实难，但难不是不画的理由。说完她又加了一条注释，笔迹比刚才轻松了些。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_margin_rule",
        "minTier": 1,
        "text": "赫敏在作业页边写下“引用出处”，又把这几个字圈起来。她说不是所有人都会查，但她自己会知道有没有偷懒。",
        "choices": [
          {
            "label": "问她会不会太累",
            "delta": 3,
            "response": "她抿了抿嘴，说累不是降低标准的理由。过了一会儿，她又承认，偶尔有人提醒她休息也不坏。"
          },
          {
            "label": "帮她找书名",
            "delta": 4,
            "response": "你替她翻到版权页。赫敏立刻记下，像你帮她把一块摇晃的地砖按稳了。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_rule_exception",
        "minTier": 2,
        "text": "她在走廊听见有人误解校规，几乎立刻想纠正，却硬生生停住，像在练习先听完别人说话。",
        "choices": [
          {
            "label": "等她自己决定",
            "delta": 4,
            "response": "赫敏最后用很温和的句子补充了事实。她看起来有点惊讶，像发现正确不一定要冲出去。"
          },
          {
            "label": "问她为什么停住",
            "delta": 3,
            "response": "她说因为有时一开口就像在宣判，而她只是想说明。这个区别她正在学。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_book_stack",
        "minTier": 1,
        "text": "赫敏抱着一摞书，最上面那本不断往下滑。她拒绝承认太重，只把下巴压得更低。",
        "choices": [
          {
            "label": "接过两本",
            "delta": 4,
            "response": "她先说不用，随后终于把两本递给你。她走得轻松许多，却仍坚持这是“合理分工”。"
          },
          {
            "label": "说图书馆不会跑",
            "delta": 3,
            "response": "赫敏瞪你一眼，随即笑了一下。她说书不会跑，但借书名额会。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_practice_spell",
        "minTier": 2,
        "text": "她在空教室里反复练一个咒语，成功后没有欢呼，只立刻记下发音和手势。",
        "choices": [
          {
            "label": "夸她成功了",
            "delta": 3,
            "response": "赫敏说一次成功还不能证明掌握。可她眼睛亮着，显然那句夸奖还是落到了实处。"
          },
          {
            "label": "请她教你诀窍",
            "delta": 4,
            "response": "她立刻把步骤拆开讲，讲到最后比自己练习时还投入。帮助别人让她的紧张变得有方向。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_dining_note",
        "minTier": 1,
        "text": "礼堂里很吵，赫敏却在餐巾旁记下一句课堂上没听清的补充。她写字时眉头紧皱，像噪声也是一道题。",
        "choices": [
          {
            "label": "帮她回忆那句话",
            "delta": 4,
            "response": "你补出半句，她立刻接上后半句。她郑重道谢，像你们刚救回一只差点飞走的小鸟。"
          },
          {
            "label": "劝她先吃饭",
            "delta": 3,
            "response": "她看了看快凉的盘子，终于放下笔。她说五分钟以后再查，语气像和自己签订条约。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_unsent_question",
        "minTier": 1,
        "text": "赫敏在羊皮纸底部写了一个问题，又用尺子把它轻轻划掉。她看起来不是不想问，而是担心自己问得太多。",
        "choices": [
          {
            "label": "说好问题值得问",
            "delta": 4,
            "response": "她抬头看你，像被这句话允许了一下。下课后她真的去问了，回来时脚步轻快许多。"
          },
          {
            "label": "问她为什么划掉",
            "delta": 3,
            "response": "她说别人可能觉得烦。说完她自己皱眉，像也不喜欢这个理由。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_library_ladder",
        "minTier": 2,
        "text": "赫敏站在图书馆小梯上够一本高处的书，嘴里还念着索书号，像怕自己一停顿书就会溜走。",
        "choices": [
          {
            "label": "扶住梯子",
            "delta": 4,
            "response": "你扶住梯子，她拿到书后认真道谢。她说稳定的梯子和准确的索引一样重要。"
          },
          {
            "label": "问为什么非要这本",
            "delta": 3,
            "response": "她立刻讲起版本差异，越讲越快。你发现她的兴奋总是从“有根据”开始。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_incorrect_rumor",
        "minTier": 1,
        "text": "走廊里有人把一个事实说错，赫敏的手指在书脊上收紧。她努力让自己别像一支冲出去的羽毛笔。",
        "choices": [
          {
            "label": "给她一个眼神",
            "delta": 4,
            "response": "她深吸一口气，用尽量平和的语气纠正了那句话。纠正完后，她像完成了一次很难的咒语。"
          },
          {
            "label": "说也许不用管",
            "delta": 3,
            "response": "赫敏看起来很痛苦，说错误如果没人管，会长得比杂草还快。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_color_tabs",
        "minTier": 2,
        "text": "她给课本贴彩色索引条，每个颜色都有含义。贴到一半，她发现某个颜色不够，表情严肃得像学院杯被扣分。",
        "choices": [
          {
            "label": "借她一张相近颜色",
            "delta": 4,
            "response": "她犹豫后接受，又在旁边标注“临时”。即使妥协，她也要让妥协有记录。"
          },
          {
            "label": "说颜色差一点也行",
            "delta": 3,
            "response": "她说差一点当然能用，但以后找错页的人会是自己。这个理由很赫敏。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_first_wrong",
        "minTier": 1,
        "text": "一次练习里，赫敏第一次念错咒语。她停在原地，脸色比咒语失败本身还难看。",
        "choices": [
          {
            "label": "说谁都会错",
            "delta": 3,
            "response": "她说知道，可知道和接受是两回事。她重新举起魔杖时，手稳了一点。"
          },
          {
            "label": "请她再试一次",
            "delta": 4,
            "response": "你没有安慰太多，只等她准备好。第二次咒语成功，她小声说谢谢你没有大惊小怪。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_rulebook_ribbon",
        "minTier": 1,
        "text": "赫敏给校规手册夹了一根细丝带，位置正好停在图书馆借阅规则。她说规则如果找不到，就和没有差不多。",
        "choices": [
          {
            "label": "问她真的常查吗",
            "delta": 3,
            "response": "她说当然。然后停顿一下，承认有时只是为了确认自己记得没错。"
          },
          {
            "label": "说这很有用",
            "delta": 4,
            "response": "她满意地点头，像你刚承认了一项重要公共服务。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_corrected_spellbook",
        "minTier": 2,
        "text": "她在咒语书旁边写了一个小小的“此处不严谨”，字迹端正得像正式抗议。",
        "choices": [
          {
            "label": "问书也会错吗",
            "delta": 4,
            "response": "赫敏说书很有用，但书不是神谕。她说这话时既尊重书，也不肯向它低头。"
          },
          {
            "label": "帮她查另一版",
            "delta": 3,
            "response": "你们找到另一版写法。赫敏眼睛亮起来，像抓住了证据。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_peer_help",
        "minTier": 1,
        "text": "一个同学请赫敏讲题，她讲到第三步时发现对方已经迷路，立刻把羽毛笔放慢了。",
        "choices": [
          {
            "label": "说她讲得更清楚了",
            "delta": 4,
            "response": "她有点惊讶，说自己以前可能太急。能发现这一点让她比答对题还认真。"
          },
          {
            "label": "帮她画图",
            "delta": 3,
            "response": "你画出示意图，她接着讲下去，语气终于不再像赶火车。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_messy_bag",
        "minTier": 1,
        "text": "赫敏的书包难得乱了一次，羊皮纸边角露在外面。她看见后像发现一场小型灾难。",
        "choices": [
          {
            "label": "帮她整理",
            "delta": 4,
            "response": "你递纸，她分类。几分钟后书包恢复秩序，她整个人也像重新扣好了纽扣。"
          },
          {
            "label": "说偶尔乱也正常",
            "delta": 3,
            "response": "她说知道，但正常不等于舒服。然后把最后一张纸压平。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_unsure_praise",
        "minTier": 2,
        "text": "教授夸赫敏答案完整，她低头写笔记，耳朵却红了。她像不太知道该怎么把夸奖收好。",
        "choices": [
          {
            "label": "说你答得确实好",
            "delta": 4,
            "response": "她小声说谢谢，然后立刻补充还有两点可以更准确。快乐和改进在她这里从不分家。"
          },
          {
            "label": "问她在补什么",
            "delta": 3,
            "response": "她把补充给你看，语气又恢复熟悉的笃定。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_ink_schedule",
        "minTier": 1,
        "text": "赫敏把一天的安排写在羊皮纸背面，连“查漏”都单独占了一行。她看起来像在和时间订契约。",
        "choices": [
          {
            "label": "问查漏是什么",
            "delta": 4,
            "response": "她说就是确认自己没有因为自信漏掉东西。自信在她这里也要接受检查。"
          },
          {
            "label": "提醒她留空",
            "delta": 3,
            "response": "她犹豫后加了一小格“意外”。这已经是很大的让步。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_library_dispute",
        "minTier": 2,
        "text": "图书馆里有人把书放错区，赫敏的表情像听见一只坩埚被拿来当鼓。",
        "choices": [
          {
            "label": "陪她放回去",
            "delta": 4,
            "response": "你们把书归位，她说错误位置会让下一个人走冤枉路。"
          },
          {
            "label": "劝她别太生气",
            "delta": 3,
            "response": "她说自己不是生气，是对分类系统受到伤害表示关切。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_first_friend_note",
        "minTier": 1,
        "text": "赫敏收到一张简短便条，读完后反复折平边角。她像不确定这种东西该放在哪个分类里。",
        "choices": [
          {
            "label": "问是谁写的",
            "delta": 3,
            "response": "她说只是同学。可那个“只是”被她说得很不只是。"
          },
          {
            "label": "说可以夹进书里",
            "delta": 4,
            "response": "她照做了，神情认真得像给友情找到索引号。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_tired_precision",
        "minTier": 2,
        "text": "夜里赫敏写字开始歪了，她仍坚持把最后一句补完整。",
        "choices": [
          {
            "label": "说歪了也能明天改",
            "delta": 4,
            "response": "她看着那行字，终于承认明天的自己可能更可靠。"
          },
          {
            "label": "帮她收墨水",
            "delta": 3,
            "response": "你盖上墨水瓶，她没有反对，只小声说谢谢。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_question_queue",
        "minTier": 1,
        "text": "她在课堂后排队等教授，手里有三张问题。排到她时，她先删掉了最不重要的一张。",
        "choices": [
          {
            "label": "问为什么删掉",
            "delta": 4,
            "response": "她说教授也只有一个下午。有效提问不等于把所有疑惑倾倒出去。"
          },
          {
            "label": "帮她排序",
            "delta": 3,
            "response": "你们把最关键的问题放在最上面，她明显安心了。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch7_ink_chart",
        "minTier": 1,
        "text": "赫敏把不同墨水在羊皮纸上的晕开速度记成表格，旁边还写着“可能影响复习效率”。",
        "choices": [
          {
            "label": "问这也要研究吗",
            "delta": 4,
            "response": "她说当然，如果笔记糊成一团，知识就等于在最后关头叛逃。"
          },
          {
            "label": "帮她计时",
            "delta": 3,
            "response": "你数到第十秒，她立刻记下结果，满意得像刚抓住一条狡猾的事实。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch7_wrong_pronunciation",
        "minTier": 2,
        "text": "她听见有人把咒语读错，整个人都僵了一下，像一只差点冲出书页的批注。",
        "choices": [
          {
            "label": "劝她温和一点提醒",
            "delta": 4,
            "response": "她深吸一口气，用尽量不吓人的语气纠正了对方，虽然眉毛仍很用力。"
          },
          {
            "label": "说可能只是紧张",
            "delta": 3,
            "response": "她承认紧张会让舌头打结，但错误若不拆开，结会越勒越紧。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch7_library_seat",
        "minTier": 1,
        "text": "赫敏在图书馆换了三次座位，最后选中能看见门、远离窗、靠近参考书的位置。",
        "choices": [
          {
            "label": "问她怎么判断",
            "delta": 4,
            "response": "她认真解释光线、噪音和取书距离，仿佛选座也是一门有考试的学科。"
          },
          {
            "label": "坐到她对面",
            "delta": 3,
            "response": "她把一叠书往旁边挪了两寸，算是给你留出一块正式认可的学习领地。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch7_unsent_letter",
        "minTier": 2,
        "text": "她写给家里的信写到一半停住，羽毛笔悬在空中，好像有些事太魔法，反而不知怎么解释。",
        "choices": [
          {
            "label": "问她写不下去吗",
            "delta": 4,
            "response": "她小声说不是写不下去，是不想让父母担心，又不想撒谎。"
          },
          {
            "label": "建议写今天吃了什么",
            "delta": 3,
            "response": "她笑了，说这是个安全开头。于是信里先出现了南瓜馅饼。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch7_rule_exception",
        "minTier": 1,
        "text": "赫敏在一本校规册旁做标记，忽然皱眉，说这条规定显然没有考虑到移动楼梯。",
        "choices": [
          {
            "label": "问她要投诉吗",
            "delta": 3,
            "response": "她说不是投诉，是合理建议。然后开始措辞，严肃得像要给魔法部写信。"
          },
          {
            "label": "帮她找前后条款",
            "delta": 4,
            "response": "你翻到相关页，她立刻把两条规定并排比较，眼睛亮得像发现校规也会自相矛盾。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch8_index_cards",
        "minTier": 1,
        "text": "赫敏把复习卡按颜色分开，红色是“必须背会”，蓝色是“已经会但不能骄傲”，绿色是“待证明”。",
        "choices": [
          {
            "label": "问绿色最多吗",
            "delta": 4,
            "response": "她严肃地点头，说真正危险的不是不会，而是以为自己已经会了。"
          },
          {
            "label": "帮她递卡片",
            "delta": 3,
            "response": "你递错一次，她立刻重新排序，嘴上道歉，手却比道歉更快。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch8_library_cough",
        "minTier": 2,
        "text": "图书馆有人咳嗽得厉害，赫敏皱眉看了看，又把自己备用的润喉糖推过去。",
        "choices": [
          {
            "label": "说她很细心",
            "delta": 4,
            "response": "她小声说这不是细心，是保护公共学习环境。可是糖纸被她推得很轻。"
          },
          {
            "label": "问她怎么总有备用",
            "delta": 3,
            "response": "她说准备不是多虑，准备是让意外少一点戏份。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch8_spell_history",
        "minTier": 1,
        "text": "她查一个咒语的历史查到忘了吃点心，发现时看起来很震惊，像身体背叛了计划。",
        "choices": [
          {
            "label": "提醒她吃一点",
            "delta": 4,
            "response": "她接过点心，承认知识再重要，也不该让血糖成为牺牲品。"
          },
          {
            "label": "问查到什么",
            "delta": 3,
            "response": "她立刻精神起来，讲得太详细，以至点心又差点被忘记。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch8_raised_hand",
        "minTier": 2,
        "text": "赫敏举手前看见别人也要举手，手在空中停了一下，最后还是举得笔直。",
        "choices": [
          {
            "label": "问她犹豫了",
            "delta": 3,
            "response": "她说只是想确认不是自己抢话。正确答案也应该有礼貌。"
          },
          {
            "label": "说她回答得很好",
            "delta": 4,
            "response": "她努力压住笑意，说那是因为她准备了，准备理应偶尔得到回报。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch8_book_apology",
        "minTier": 1,
        "text": "她不小心把书角折了一点，立刻抚平，认真得像在向书道歉。",
        "choices": [
          {
            "label": "说书不会介意",
            "delta": 3,
            "response": "她说书也许不会，但借书的人应该介意自己的手。"
          },
          {
            "label": "帮她找书签",
            "delta": 4,
            "response": "你找到一张干净书签，她明显松口气，说文明有时就靠这种小薄片维持。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch9_spare_plan",
        "minTier": 1,
        "text": "赫敏在日程表旁另写了一套备用计划，备用计划旁边居然还有“备用计划失效时”。",
        "choices": [
          {
            "label": "问会不会太多",
            "delta": 3,
            "response": "她说计划不嫌多，只嫌没有用；不过说完自己也笑了。"
          },
          {
            "label": "帮她删一项",
            "delta": 4,
            "response": "她犹豫很久删掉一项，像亲手放走一只过度负责的小鸟。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch9_friend_note",
        "minTier": 2,
        "text": "她把一条提醒罗恩带书的便条写得很严厉，写完又改软了一点。",
        "choices": [
          {
            "label": "说这样更像关心",
            "delta": 4,
            "response": "她脸微红，说关心如果太像命令，确实容易被韦斯莱误读。"
          },
          {
            "label": "问为什么不当面说",
            "delta": 3,
            "response": "她说当面说他会顶嘴，纸条至少不会立刻反驳。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch9_rule_mercy",
        "minTier": 1,
        "text": "赫敏盯着一条校规，忽然说这条规定如果照字面执行，会让人很难过。",
        "choices": [
          {
            "label": "问她会违反吗",
            "delta": 4,
            "response": "她严肃地说不是违反，是寻找合理解释。声音里却有一点冒险的影子。"
          },
          {
            "label": "说规则也要看情况",
            "delta": 3,
            "response": "她点头，又补充前提是情况必须真实，不是懒惰临时换的名字。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch9_tired_eyes",
        "minTier": 2,
        "text": "她读书读到眼睛发红，还坚持说只差一章。那一章厚得像小砖头。",
        "choices": [
          {
            "label": "劝她休息",
            "delta": 4,
            "response": "她最终合上书，承认大脑也许不是无限延展咒。"
          },
          {
            "label": "帮她做书签",
            "delta": 3,
            "response": "你把书签夹好，她像接受临时停战一样点点头。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch9_good_question",
        "minTier": 1,
        "text": "有人问了一个她本想问的问题，赫敏先是失落，随后认真听完答案。",
        "choices": [
          {
            "label": "说她很大方",
            "delta": 4,
            "response": "她说问题被问出来才重要，不一定非要由自己举手。可这句话像刚学会。"
          },
          {
            "label": "问她还想补充吗",
            "delta": 3,
            "response": "她立刻补了一个更细的问题，眼睛重新亮起来。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch10_bad_source",
        "minTier": 1,
        "text": "赫敏发现一本参考书的注释来源不清，表情像书架上混进了一只会撒谎的茶杯。",
        "choices": [
          {
            "label": "问有这么严重吗",
            "delta": 4,
            "response": "她说来源不清的知识会把错误打扮得很体面。"
          },
          {
            "label": "帮她查目录",
            "delta": 3,
            "response": "你们翻到出处，她终于松口气，像给那段话补上了身份证明。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch10_friend_defense",
        "minTier": 2,
        "text": "有人说罗恩不认真，赫敏立刻皱眉，反驳得比罗恩本人还快。",
        "choices": [
          {
            "label": "说你很护着他",
            "delta": 4,
            "response": "她脸红了一点，说她只是反对不准确评价。语气却没那么学术。"
          },
          {
            "label": "帮她补一句",
            "delta": 3,
            "response": "她接受你的补充，又迅速把它整理成更严谨的版本。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch10_neat_failure",
        "minTier": 1,
        "text": "她把一次失败练习记录得非常整齐，甚至给失败原因编号。",
        "choices": [
          {
            "label": "问失败也要编号？",
            "delta": 3,
            "response": "她说当然，否则下次失败会假装自己是新来的。"
          },
          {
            "label": "夸她不逃避",
            "delta": 4,
            "response": "她看起来有点高兴，说错误被写清楚后就没那么吓人了。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch10_common_room_noise",
        "minTier": 2,
        "text": "公共休息室太吵，赫敏用书挡住耳朵，仍坚持说自己可以继续读。",
        "choices": [
          {
            "label": "建议换地方",
            "delta": 4,
            "response": "她挣扎片刻同意了，说撤退不是失败，是战略性保护注意力。"
          },
          {
            "label": "帮她挡一点声音",
            "delta": 3,
            "response": "你压低周围人的谈话，她飞快读完一页，向你比了个很小的感谢手势。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch10_home_words",
        "minTier": 1,
        "text": "她给父母写信时把“魔药”解释成“非常讲究步骤的化学”，写完自己也笑了。",
        "choices": [
          {
            "label": "说这个解释很好",
            "delta": 4,
            "response": "她点头，说如果从他们懂的地方开始，魔法也许没那么遥远。"
          },
          {
            "label": "问会不会太简化",
            "delta": 3,
            "response": "她说会，但信不是论文，家人先读懂比较重要。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch11_citation_slip",
        "minTier": 1,
        "text": "赫敏把一张引用出处的小纸条夹进书里，夹完又检查了一遍页码。",
        "choices": [
          {
            "label": "问页码也会错吗",
            "delta": 4,
            "response": "她说当然，错误最喜欢躲在别人懒得核对的地方。"
          },
          {
            "label": "帮她念页码",
            "delta": 3,
            "response": "你念完后，她满意地点头，像给知识锁上了正确的小扣子。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch11_ron_argument",
        "minTier": 2,
        "text": "她和罗恩争完后还在生气，却把他落下的课本收好放到长桌边。",
        "choices": [
          {
            "label": "说你还帮他",
            "delta": 4,
            "response": "她僵了一下，说生气和让他明天找不到书是两回事。"
          },
          {
            "label": "帮她放过去",
            "delta": 3,
            "response": "她把书交给你，嘴上说随便，眼神却确认书没有被摔坏。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch11_sleep_rule",
        "minTier": 1,
        "text": "她给自己写下“十一点必须睡”，但后面又补了一句“除非很重要”。",
        "choices": [
          {
            "label": "问什么算重要",
            "delta": 3,
            "response": "她看着那行字沉默，承认这个漏洞确实过于宽泛。"
          },
          {
            "label": "帮她划掉除非",
            "delta": 4,
            "response": "她挣扎着同意，说理性有时需要别人替它拿笔。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch11_fair_answer",
        "minTier": 2,
        "text": "有人答题时漏了一个关键点，赫敏举手补充前先看了对方一眼，像在衡量会不会显得抢功。",
        "choices": [
          {
            "label": "说可以补充",
            "delta": 4,
            "response": "她补得很准确，也特意说“接着刚才的答案”。那名学生松了口气。"
          },
          {
            "label": "问她在犹豫什么",
            "delta": 3,
            "response": "她说正确答案不该踩着别人头顶进门。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch11_muggle_habit",
        "minTier": 1,
        "text": "赫敏下意识用麻瓜方式解释一件魔法物品，解释到一半自己笑了。",
        "choices": [
          {
            "label": "说这样更清楚",
            "delta": 4,
            "response": "她高兴地说两种世界的词如果肯合作，很多事就没那么陌生。"
          },
          {
            "label": "问会不会被笑",
            "delta": 3,
            "response": "她说会，但被笑不等于没用。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch12_library_rule",
        "minTier": 1,
        "text": "赫敏发现有人把书放错架，表情像亲眼看见一条小型秩序裂缝。",
        "choices": [
          {
            "label": "帮她放回去",
            "delta": 4,
            "response": "她立刻找准位置，说谢谢，图书馆终于少了一处未来灾难。"
          },
          {
            "label": "说一本而已",
            "delta": 3,
            "response": "她说一本书放错，就等于一个答案被流放。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch12_soft_compromise",
        "minTier": 2,
        "text": "罗恩求她别把复习安排得太满，赫敏握着羽毛笔犹豫了好一会儿。",
        "choices": [
          {
            "label": "建议留休息",
            "delta": 4,
            "response": "她勉强加上一段休息时间，郑重声明这不是懈怠，是长期效率。"
          },
          {
            "label": "问她会执行吗",
            "delta": 3,
            "response": "她看着那段休息，像看一种新奇而可疑的魔法。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch12_question_before_answer",
        "minTier": 1,
        "text": "她读到一道题，没有立刻答，而是在旁边写下“这题真正问的是什么”。",
        "choices": [
          {
            "label": "问为什么",
            "delta": 4,
            "response": "她说很多错答案不是不会答，是急着答错了问题。"
          },
          {
            "label": "帮她拆题",
            "delta": 3,
            "response": "你们把题干划开，她看起来像终于抓住了题目的袖子。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch12_muggle_pen",
        "minTier": 2,
        "text": "赫敏拿出一支麻瓜圆珠笔，解释说它不会漏墨，也不会因为情绪太激动而飞起来。",
        "choices": [
          {
            "label": "说很实用",
            "delta": 4,
            "response": "她高兴地点头，说麻瓜发明常常低调到被巫师低估。"
          },
          {
            "label": "问教授会介意吗",
            "delta": 3,
            "response": "她说只要作业清楚，工具不该被出身歧视。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch12_tired_kindness",
        "minTier": 1,
        "text": "她困得眼睛发直，却仍帮一个同学找资料，找完才意识到自己拿反了书。",
        "choices": [
          {
            "label": "提醒她休息",
            "delta": 4,
            "response": "她终于承认今天的脑子已经开始把封面当正文。"
          },
          {
            "label": "帮她找完最后一本",
            "delta": 3,
            "response": "你们找到资料，她感激地说合作比硬撑更明智。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch13_ink_index",
        "minTier": 1,
        "text": "赫敏给自己的笔记做索引，连墨水颜色都按重要程度排好，像在给混乱世界立法。",
        "choices": [
          {
            "label": "问她会不会太累",
            "delta": 4,
            "response": "她说会，但找不到资料时更累。说完又把“可能有用”改成“必须复查”。"
          },
          {
            "label": "帮她贴书签",
            "delta": 3,
            "response": "她接过书签，严肃地说这不是装饰，是救命绳。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch13_rule_exception",
        "minTier": 2,
        "text": "她在校规旁边写下一行小字：例外不应被滥用，但也不应被忘记。",
        "choices": [
          {
            "label": "问她在想什么",
            "delta": 4,
            "response": "她合上书，说规则如果不理解人，就会变成另一种粗心。"
          },
          {
            "label": "说这句很好",
            "delta": 3,
            "response": "她耳尖微红，立刻补充说这只是临时注释，不是格言。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch13_wrong_answer_kind",
        "minTier": 1,
        "text": "一个同学答错后缩了回去，赫敏把自己的羊皮纸往旁边挪了挪，让对方能看见第一步。",
        "choices": [
          {
            "label": "夸她温柔",
            "delta": 4,
            "response": "她小声说只是避免重复错误。可她没有把纸挪回去。"
          },
          {
            "label": "一起讲第一步",
            "delta": 3,
            "response": "你们把最难的地方拆小，那位同学终于敢再试一次。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch13_muggle_memory",
        "minTier": 2,
        "text": "她忽然说起麻瓜小学的图书馆，那里没有会咬人的书，却有很严格的借阅卡。",
        "choices": [
          {
            "label": "问她想那里吗",
            "delta": 4,
            "response": "她说有一点。不是想离开这里，只是想念一种她已经知道怎么表现好的地方。"
          },
          {
            "label": "问借阅卡是什么",
            "delta": 3,
            "response": "她详细解释，语气里有一种把两个世界小心缝在一起的认真。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch13_after_argument",
        "minTier": 1,
        "text": "争论结束后，赫敏还坐在原处，把自己说得太快的几句话重新写了一遍。",
        "choices": [
          {
            "label": "问她后悔吗",
            "delta": 4,
            "response": "她说不后悔观点，只后悔让别人来不及跟上。"
          },
          {
            "label": "陪她整理",
            "delta": 3,
            "response": "她把句子改短，像给真理也留出呼吸。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch14_second_source",
        "minTier": 1,
        "text": "赫敏坚持为一条看似简单的结论找第二个出处，说单一本书也可能自信过头。",
        "choices": [
          {
            "label": "帮她查目录",
            "delta": 4,
            "response": "你们找到另一处注释，她满意得像把一块松动地砖按回原位。"
          },
          {
            "label": "问她信不过书吗",
            "delta": 3,
            "response": "她说不是不信，是尊重知识到不让它孤零零站着。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch14_friend_revision",
        "minTier": 2,
        "text": "她给朋友改论文，红墨水写到一半停住，换成了更柔和的措辞。",
        "choices": [
          {
            "label": "问为什么改",
            "delta": 4,
            "response": "她说指出错误不必让人觉得自己也被划掉。"
          },
          {
            "label": "说这样很好",
            "delta": 3,
            "response": "她有点不好意思，却把后面的批注都写得更清楚。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch14_rulebook_weight",
        "minTier": 1,
        "text": "她抱着校规册走路，书厚得压弯手臂，可她仍说“知道规则才知道危险在哪里”。",
        "choices": [
          {
            "label": "帮她拿一半",
            "delta": 4,
            "response": "她犹豫后递给你，认真提醒别把夹条顺序弄乱。"
          },
          {
            "label": "问全都要看？",
            "delta": 3,
            "response": "她说不一定全背，但至少要知道哪页能救急。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch14_embarrassed_pride",
        "minTier": 2,
        "text": "教授表扬她时，赫敏立刻低头记笔记，像把高兴藏进墨水里会更安全。",
        "choices": [
          {
            "label": "说你可以高兴",
            "delta": 4,
            "response": "她小声说她确实高兴，只是不想让别人觉得她在炫耀。"
          },
          {
            "label": "问表扬哪点",
            "delta": 3,
            "response": "她复述得非常准确，连语气都记得。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch14_midnight_plan",
        "minTier": 1,
        "text": "她说晚上不能熬太晚，然后开始制定一份防止自己熬太晚的详细计划。",
        "choices": [
          {
            "label": "提醒计划也耗时间",
            "delta": 4,
            "response": "她停笔，严肃承认这是一个有教育意义的悖论。"
          },
          {
            "label": "帮她删两项",
            "delta": 3,
            "response": "清单变短后，她看起来既轻松又不太放心。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch15_library_card",
        "minTier": 1,
        "text": "赫敏替一本被借走太久的书写提醒条，措辞礼貌得像在给迟到的知识留面子。",
        "choices": [
          {
            "label": "帮她措辞",
            "delta": 4,
            "response": "你们把“立刻归还”改成“请尽快归还”，她说礼貌不妨碍坚定。"
          },
          {
            "label": "问会有人理吗",
            "delta": 3,
            "response": "她说如果没人理，下一张提醒条会更有法律感。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch15_friend_sleep",
        "minTier": 2,
        "text": "她发现朋友困得看不进书，竟主动把书合上，说疲惫的大脑会制造假记忆。",
        "choices": [
          {
            "label": "说你也该休息",
            "delta": 4,
            "response": "她停了一下，承认这句话可能也适用于她本人。"
          },
          {
            "label": "帮她收书",
            "delta": 3,
            "response": "她收得很慢，像和今晚未完成的计划谈判。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch15_misquoted_fact",
        "minTier": 1,
        "text": "有人把课本内容记错，赫敏差点立刻纠正，最后先问对方是不是愿意听原文。",
        "choices": [
          {
            "label": "说这样更好",
            "delta": 4,
            "response": "她说知识不该像石头一样砸过去，哪怕它是对的。"
          },
          {
            "label": "请她讲原文",
            "delta": 3,
            "response": "她讲得清楚，还特意放慢了语速。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch15_quill_backup",
        "minTier": 2,
        "text": "她包里有三支备用羽毛笔，理由是“学习不该败给工具事故”。",
        "choices": [
          {
            "label": "借一支",
            "delta": 4,
            "response": "她立刻递给你，还附赠关于笔尖维护的简短说明。"
          },
          {
            "label": "说准备充分",
            "delta": 3,
            "response": "她满意点头，说意外最讨厌遇到有准备的人。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch15_soft_laugh",
        "minTier": 1,
        "text": "罗恩说错一个词，赫敏本想纠正，却先笑了出来，笑完才认真解释。",
        "choices": [
          {
            "label": "说你也会先笑",
            "delta": 4,
            "response": "她脸红，说这不代表她不重视准确，只是那词确实荒唐。"
          },
          {
            "label": "问正确说法",
            "delta": 3,
            "response": "她立刻切回教学状态，像笑声从未扰乱秩序。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch16_quiet_correction",
        "minTier": 1,
        "text": "赫敏在别人读错咒语名时没有当众打断，而是在课后把正确读音写给对方。",
        "choices": [
          {
            "label": "说你很体贴",
            "delta": 4,
            "response": "她说纠正若只为了显得自己会，就已经错了一半。"
          },
          {
            "label": "帮她递纸条",
            "delta": 3,
            "response": "对方接过纸条时松了口气，赫敏也松了口气。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch16_overfull_bag",
        "minTier": 2,
        "text": "她的书包沉得像装了半个图书馆，却仍坚持每本都有可能“今天用上”。",
        "choices": [
          {
            "label": "帮她背一段",
            "delta": 4,
            "response": "她犹豫后同意，严肃说明哪本不能倒放。"
          },
          {
            "label": "问哪本最可能",
            "delta": 3,
            "response": "她立刻列出三本，证明“可能”也有等级。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch16_friend_rulebreak",
        "minTier": 1,
        "text": "朋友想钻一个小空子，赫敏皱眉很久，最后先问这么做会不会伤到别人。",
        "choices": [
          {
            "label": "问如果不会呢",
            "delta": 4,
            "response": "她说那也要看会不会伤到自己以后说话的底气。"
          },
          {
            "label": "说你想得远",
            "delta": 3,
            "response": "她说规则问题从来不只在当下。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch16_muggle_bookmark",
        "minTier": 2,
        "text": "她用一张麻瓜地铁票当书签，发现你看见后认真解释它不是废纸。",
        "choices": [
          {
            "label": "问它有什么故事",
            "delta": 4,
            "response": "她说那是她来这里前最后一次坐地铁，票很普通，所以很重要。"
          },
          {
            "label": "说很适合做书签",
            "delta": 3,
            "response": "她笑了，说它把两个世界夹在同一本书里。"
          }
        ]
      },
      {
        "id": "hermione_year1_chat_batch16_answer_kindness",
        "minTier": 1,
        "text": "她答对问题后看见旁边同学失落，悄悄把自己的推理步骤挪过去一点。",
        "choices": [
          {
            "label": "说你注意到了",
            "delta": 4,
            "response": "她低声说聪明若让别人更不敢问，就不算用得好。"
          },
          {
            "label": "一起解释",
            "delta": 3,
            "response": "那位同学终于点头，赫敏看起来比自己得分还满意。"
          }
        ]
      }
    ]
  }
};

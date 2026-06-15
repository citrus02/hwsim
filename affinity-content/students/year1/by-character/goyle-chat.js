/**
 * Year 1 students chat scenes for goyle.
 * Keep future additions in this character file.
 */

export const GOYLE_YEAR1_CHAT_SCENES = {
  "goyle": {
    "activeChatEvents": [
      {
        "id": "goyle_year1_chat_heavy_bag",
        "minTier": 1,
        "text": "高尔拎着一只很重的书包站在楼梯口，显然不想承认它勒得手疼。他换了几次姿势，脸上仍摆着“这不算什么”的表情。",
        "choices": [
          {
            "label": "问要不要换手拎",
            "delta": 3,
            "response": "高尔先摇头，几秒后又把书包换到另一只手。这个让步小得几乎看不见，但他的肩膀明显松了一点。"
          },
          {
            "label": "提醒书包带快断了",
            "delta": 4,
            "response": "他低头看见裂开的皮带，表情有点尴尬。你没有笑，他便闷声说了句谢谢，声音低得几乎被楼梯声盖住。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_broken_lace",
        "minTier": 1,
        "text": "高尔的鞋带断了一截，他蹲在楼梯旁笨拙地打结。手指太大，细绳太短，他越急越打不好。",
        "choices": [
          {
            "label": "递给他一截备用绳",
            "delta": 4,
            "response": "高尔接过去，低声说谢谢。他把新绳系上后站起来，像终于摆脱了一件让人难堪的小事。"
          },
          {
            "label": "帮他挡住人群视线",
            "delta": 3,
            "response": "你站在旁边，路过的人少看了几眼。高尔没说什么，但离开时轻轻碰了碰你的肩，算是一种谢意。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_leftover_pie",
        "minTier": 2,
        "text": "高尔看见桌上剩下一小块馅饼，先看了看德拉科在不在，又看了看周围有没有人注意。他的犹豫比平时更像一个普通学生。",
        "choices": [
          {
            "label": "说没人要就吃吧",
            "delta": 4,
            "response": "他迅速拿走馅饼，吃到一半才想起要点头致谢。那点迟来的礼貌有些笨，却很真实。"
          },
          {
            "label": "问他喜欢什么馅",
            "delta": 3,
            "response": "高尔想了很久，说肉馅。停顿后补充，苹果也行。这个答案像一次谨慎扩展的信任。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_silent_nod",
        "minTier": 1,
        "text": "高尔听别人争论时一直不说话，只在某句话后很轻地点了点头。那一下快得几乎没人注意。",
        "choices": [
          {
            "label": "问他同意哪句",
            "delta": 4,
            "response": "他想了很久，慢慢说出理由。句子不多，却不是没有想法。"
          },
          {
            "label": "等他开口",
            "delta": 3,
            "response": "你没有抢话。过了一会儿，他终于补了一句，声音低但清楚。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_tight_sleeve",
        "minTier": 1,
        "text": "高尔的袍袖卡在手腕处，他粗暴地扯了几下，越扯越烦。",
        "choices": [
          {
            "label": "提醒慢慢来",
            "delta": 4,
            "response": "他停下，笨拙地把袖口理顺。这个小胜利让他脸色没那么硬了。"
          },
          {
            "label": "帮他拉平布料",
            "delta": 3,
            "response": "你帮了一下，他没有拒绝，只低声说别告诉别人。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_follow_or_wait",
        "minTier": 2,
        "text": "德拉科已经走远，高尔却停在原地看一张公告。他似乎想看完，又怕自己落后。",
        "choices": [
          {
            "label": "说看完也不晚",
            "delta": 4,
            "response": "高尔真的把公告读完了。追上去前，他像对自己完成了一件小事。"
          },
          {
            "label": "帮他读重点",
            "delta": 3,
            "response": "你念出关键时间，他点头记住，随后才离开。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_careful_carry",
        "minTier": 2,
        "text": "他搬一摞易碎杯子，手臂僵硬得像抱着炸弹。平时粗笨的人，此刻每一步都很小心。",
        "choices": [
          {
            "label": "帮他开门",
            "delta": 4,
            "response": "你替他推开门，他安全通过。高尔长出一口气，说这些杯子太吵了，即使没碎。"
          },
          {
            "label": "说他拿得很稳",
            "delta": 3,
            "response": "他看起来有点不习惯被这样评价，只说杯子没掉就行。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_late_laugh",
        "minTier": 1,
        "text": "别人笑话讲完很久，高尔才忽然笑了一声。大家看向他，他立刻闭嘴。",
        "choices": [
          {
            "label": "也笑一下",
            "delta": 4,
            "response": "你跟着笑，尴尬散掉了。高尔低头吃东西，但嘴角还在。"
          },
          {
            "label": "问他刚明白吗",
            "delta": 3,
            "response": "他闷声说嗯。你没有嘲笑，他便没有再缩回去。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_careful_word",
        "minTier": 1,
        "text": "高尔想说什么，嘴唇动了两次才挤出一句短话。说完他立刻看向别处，像话太多会让他暴露。",
        "choices": [
          {
            "label": "认真回应",
            "delta": 4,
            "response": "你按他说的内容回答，没有替他补完。高尔点点头，像发现短话也能被听见。"
          },
          {
            "label": "等他继续",
            "delta": 3,
            "response": "他又补了一句，比刚才更小声，但更清楚。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_shield_plate",
        "minTier": 1,
        "text": "他端着一盘食物走过拥挤长桌，笨拙却努力不碰到任何人。那份小心和他的体型很不相称。",
        "choices": [
          {
            "label": "帮他让路",
            "delta": 4,
            "response": "你提醒旁边的人挪开。高尔安全通过，回头看了你一眼。"
          },
          {
            "label": "说拿得挺稳",
            "delta": 3,
            "response": "他低头看盘子，像第一次发现自己也能被夸稳。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_missing_partner",
        "minTier": 2,
        "text": "克拉布不在时，高尔站在走廊口，不确定该去哪里。他的茫然比平时的沉默更明显。",
        "choices": [
          {
            "label": "问他想去哪",
            "delta": 4,
            "response": "他想了很久，说去吃点东西。这个答案朴素，但至少是他自己的。"
          },
          {
            "label": "陪他走一段",
            "delta": 3,
            "response": "你们走到楼梯口，他终于认出方向。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_small_repair",
        "minTier": 2,
        "text": "高尔把断掉的书包扣用粗线缠起来，缠得不漂亮，但很牢。",
        "choices": [
          {
            "label": "说这样能用",
            "delta": 4,
            "response": "他看起来有点满意，说能用就行。这个判断比外表更适合他。"
          },
          {
            "label": "帮他剪线头",
            "delta": 3,
            "response": "你剪掉多余线头，扣子看起来整齐了一点。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_warning_step",
        "minTier": 1,
        "text": "他走在前面，忽然回头说前面那阶松。提醒很短，差点被脚步声盖住。",
        "choices": [
          {
            "label": "谢谢他提醒",
            "delta": 4,
            "response": "高尔点点头，继续往前走。你看见他之后又提醒了另一个学生。"
          },
          {
            "label": "问他怎么发现的",
            "delta": 3,
            "response": "他说踩过。回答简单，却很有说服力。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_door_hold",
        "minTier": 1,
        "text": "高尔替后面的人扶着门，扶了太久才意识到自己一直站在那里。",
        "choices": [
          {
            "label": "说谢谢",
            "delta": 4,
            "response": "他松开门，点了点头。被感谢后，他没有立刻把善意藏起来。"
          },
          {
            "label": "提醒可以走了",
            "delta": 3,
            "response": "他这才反应过来，像从一个简单任务里醒过来。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_torn_page",
        "minTier": 2,
        "text": "高尔不小心撕破书页，整个人僵住。那本书不是他的，他显得比平时小很多。",
        "choices": [
          {
            "label": "帮他找修补纸",
            "delta": 4,
            "response": "你们把裂口贴好。他低声说别告诉。你说应该告诉书主人，他想了很久，点头。"
          },
          {
            "label": "说可以补",
            "delta": 3,
            "response": "听见“可以”两个字，他明显没那么慌。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_thoughtful_pause",
        "minTier": 1,
        "text": "别人问高尔意见时，他沉默得太久，对方差点转走。他终于说出一句很短的判断。",
        "choices": [
          {
            "label": "认真听完",
            "delta": 4,
            "response": "你没有催。那句话虽然短，却正中问题。高尔像第一次发现慢也能有用。"
          },
          {
            "label": "请他再说一点",
            "delta": 3,
            "response": "他补充了一个例子，声音还是低，但没退回去。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_shared_umbrella",
        "minTier": 2,
        "text": "下雨时，高尔把伞偏向旁边一个更矮的学生，自己肩膀湿了一块。他似乎没意识到这算体贴。",
        "choices": [
          {
            "label": "提醒他自己也淋湿了",
            "delta": 4,
            "response": "他看了看肩膀，像才发现。然后把伞稍微挪回来一点，两个人都能遮住。"
          },
          {
            "label": "说你做得好",
            "delta": 3,
            "response": "高尔含糊地嗯了一声，耳朵却红了。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_wrong_laugh",
        "minTier": 1,
        "text": "有人笑一个笨拙的新生，高尔跟着笑了一下，随后看见对方低头，笑声停住了。",
        "choices": [
          {
            "label": "看他会怎么做",
            "delta": 4,
            "response": "高尔沉默一会儿，把掉在地上的书替那个新生捡起来。"
          },
          {
            "label": "问还好笑吗",
            "delta": 3,
            "response": "他摇头，很慢。这个摇头比解释更清楚。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_bread_share",
        "minTier": 1,
        "text": "高尔把面包掰开时掰得很不均匀。他看了看两块，默默把大的一块推给旁边人。",
        "choices": [
          {
            "label": "说你也吃大的吧",
            "delta": 4,
            "response": "他摇头，又把小块蘸了汤。动作笨，却很确定。"
          },
          {
            "label": "接过并道谢",
            "delta": 3,
            "response": "他嗯了一声，继续吃，像没发生什么大事。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_table_corner",
        "minTier": 2,
        "text": "高尔发现桌角有尖刺，伸手挡了一下，免得经过的新生撞到。",
        "choices": [
          {
            "label": "说你注意到了",
            "delta": 4,
            "response": "他看着桌角，说会刮袍子。理由很实际，也足够好。"
          },
          {
            "label": "帮他贴布",
            "delta": 3,
            "response": "你找来布条，他按住桌角，直到它不再危险。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_difficult_word",
        "minTier": 1,
        "text": "高尔反复念一个难词，声音越来越低。那个词像在他嘴里卡住了。",
        "choices": [
          {
            "label": "陪他拆音节",
            "delta": 4,
            "response": "你把词分开，他终于念顺。成功后他没有笑，但眼神松了。"
          },
          {
            "label": "说不用急",
            "delta": 3,
            "response": "他点头，又试了一遍。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_after_help",
        "minTier": 2,
        "text": "你帮高尔找回掉落的课本，他接过后站了很久，像在寻找合适反应。",
        "choices": [
          {
            "label": "等他开口",
            "delta": 4,
            "response": "他最后说谢谢。两个字很硬，却没有被省略。"
          },
          {
            "label": "说小事",
            "delta": 3,
            "response": "他点点头，把书抱得更稳。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_sudden_question",
        "minTier": 1,
        "text": "高尔忽然问你下一节课是不是在三楼。这个问题普通得让人惊讶，因为他平时很少主动问。",
        "choices": [
          {
            "label": "告诉他路线",
            "delta": 4,
            "response": "他认真听完，重复了一遍关键转弯。"
          },
          {
            "label": "问要不要一起走",
            "delta": 3,
            "response": "他犹豫后点头。一路上话不多，但没走错。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch7_shoelace",
        "minTier": 1,
        "text": "高尔蹲在走廊里系鞋带，动作很慢，却打了一个结实得过分的结。",
        "choices": [
          {
            "label": "说结打得好",
            "delta": 4,
            "response": "他抬头看你，有点意外，然后低声说家里以前教过。"
          },
          {
            "label": "等他系完",
            "delta": 3,
            "response": "你没有催，他站起来后把路让开，像用动作说了声谢谢。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch7_misheard_spell",
        "minTier": 2,
        "text": "高尔把一个咒语听错，嘴里反复念那几个音，像在努力抓住一条滑走的鱼。",
        "choices": [
          {
            "label": "慢慢念给他听",
            "delta": 4,
            "response": "他跟着念了几遍，终于点头。那一刻他看起来不是迟钝，只是很用力。"
          },
          {
            "label": "写给他看",
            "delta": 3,
            "response": "他盯着字母看了很久，说这样清楚些。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch7_guard_door",
        "minTier": 1,
        "text": "他站在门边等德拉科，像一堵不会主动说话的墙。可有人差点撞上门框时，他伸手挡了一下。",
        "choices": [
          {
            "label": "说他反应快",
            "delta": 4,
            "response": "他愣了愣，说只是看见了。对他来说，这像一个足够的解释。"
          },
          {
            "label": "问他等多久了",
            "delta": 3,
            "response": "他说不知道。时间对他而言似乎经常由别人决定。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch7_crumb_trail",
        "minTier": 2,
        "text": "高尔发现地上掉了一路饼干屑，顺着找到一只破袋子，表情非常认真。",
        "choices": [
          {
            "label": "帮他收拾",
            "delta": 3,
            "response": "你们把碎屑扫掉。他说浪费不好，尤其是饼干。"
          },
          {
            "label": "问是不是他的",
            "delta": 4,
            "response": "他摇头，又补充说如果是他的，他会承认，因为饼干值得尊重。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch7_short_laugh",
        "minTier": 1,
        "text": "有人讲了个简单笑话，高尔反应慢了半拍，突然笑出声，吓了旁边人一跳。",
        "choices": [
          {
            "label": "也跟着笑",
            "delta": 4,
            "response": "他笑得更放心了些，像终于确认自己没有弄错。"
          },
          {
            "label": "问他刚懂吗",
            "delta": 3,
            "response": "他说刚懂。然后又笑了一下，第二次明显属于他自己。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch8_biscuit_count",
        "minTier": 1,
        "text": "高尔把饼干数了一遍，又按大小重新排，似乎公平首先要从点心开始。",
        "choices": [
          {
            "label": "问怎么分",
            "delta": 4,
            "response": "他说大的给饿的人，小的给说不饿但一直看的人。这个规则意外合理。"
          },
          {
            "label": "说你不饿",
            "delta": 3,
            "response": "他看了你一眼，还是把一块中等大小的推给你。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch8_slow_reading",
        "minTier": 2,
        "text": "高尔读公告读得很慢，每个词都像要搬过一条河。",
        "choices": [
          {
            "label": "等他读完",
            "delta": 4,
            "response": "他终于读完，抬头时有点意外你还在。等待有时比催促更像帮助。"
          },
          {
            "label": "帮他念一遍",
            "delta": 3,
            "response": "你念得很慢，他跟着点头，像终于不用一个人推那张公告。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch8_big_shadow",
        "minTier": 1,
        "text": "走廊灯把高尔的影子拉得很长，他看着影子，忽然说这样看起来像别人。",
        "choices": [
          {
            "label": "问像谁",
            "delta": 3,
            "response": "他说不知道，可能像更聪明一点的人。说完自己先尴尬了。"
          },
          {
            "label": "说影子不负责聪明",
            "delta": 4,
            "response": "他想了想，笑了一下，说那它至少很高。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch8_dropped_coin",
        "minTier": 2,
        "text": "有人掉了一枚硬币，高尔捡起来追过去还给对方，动作很快，说话却很少。",
        "choices": [
          {
            "label": "说他做得对",
            "delta": 4,
            "response": "他低头看了看手，说捡到了就还。简单的话里有种不简单的直。"
          },
          {
            "label": "问为什么不留下",
            "delta": 3,
            "response": "他皱眉，像这个问题本身很奇怪，说那不是他的。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch8_fireplace_doze",
        "minTier": 1,
        "text": "高尔靠近炉火站着，眼皮慢慢往下掉，又猛地睁开。",
        "choices": [
          {
            "label": "让他坐会儿",
            "delta": 3,
            "response": "他坐下后立刻放松，像椅子替他承认了疲惫。"
          },
          {
            "label": "递给他热饮",
            "delta": 4,
            "response": "他接过去，小声说谢谢，捧杯子的动作比平时轻很多。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch9_sturdy_chair",
        "minTier": 1,
        "text": "高尔坐下前先试了试椅子稳不稳，动作谨慎得和他的体格很不相称。",
        "choices": [
          {
            "label": "问怕椅子坏吗",
            "delta": 3,
            "response": "他说坏过。然后不再解释，像那把椅子的牺牲仍值得沉默。"
          },
          {
            "label": "帮他换一把",
            "delta": 4,
            "response": "他点头坐下，低声说这把好。简单评价里有明显放松。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch9_word_copy",
        "minTier": 2,
        "text": "他抄一个长单词抄了三遍，每次都错在不同地方，眉头越皱越紧。",
        "choices": [
          {
            "label": "帮他分段",
            "delta": 4,
            "response": "你把单词拆开，他终于抄对一次，表情像把石头推上了坡顶。"
          },
          {
            "label": "说别急",
            "delta": 3,
            "response": "他点头，握笔的手却还是很用力。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch9_small_rule",
        "minTier": 1,
        "text": "高尔提醒别人不要把杯子放在书上，说话很短，却很认真。",
        "choices": [
          {
            "label": "问为什么在意",
            "delta": 4,
            "response": "他说书湿了不好。对他来说，这就是完整理由。"
          },
          {
            "label": "把杯子挪开",
            "delta": 3,
            "response": "他看着书安全了，像整张桌子终于恢复秩序。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch9_follow_or_choose",
        "minTier": 2,
        "text": "德拉科走远后，高尔站在岔路口迟疑了一下，像突然需要自己决定方向。",
        "choices": [
          {
            "label": "问你去哪边",
            "delta": 4,
            "response": "他想了想，指向礼堂，说饿了。这是一个很高尔、也很自己的决定。"
          },
          {
            "label": "陪他走一段",
            "delta": 3,
            "response": "他没有说谢，但步子明显稳了些。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch9_warm_grin",
        "minTier": 1,
        "text": "有人真心夸高尔搬东西帮了忙，他过了好一会儿才咧嘴笑。",
        "choices": [
          {
            "label": "说你笑了",
            "delta": 3,
            "response": "他立刻收住，又很快忍不住。"
          },
          {
            "label": "再道一次谢",
            "delta": 4,
            "response": "他低头说没事，像感谢太多会把他弄得不知道手该放哪。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch10_crumb_cleanup",
        "minTier": 1,
        "text": "高尔默默把桌上的饼干屑扫到手心，动作笨拙却很认真。",
        "choices": [
          {
            "label": "说谢谢",
            "delta": 4,
            "response": "他看起来有点意外，低声说不然会粘手。"
          },
          {
            "label": "帮他拿纸",
            "delta": 3,
            "response": "你递过去，他把碎屑包好，像完成一项小而必要的工作。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch10_friend_wait",
        "minTier": 2,
        "text": "高尔站在门口等克拉布，自己不进去，也不催，像一块很有耐心的石头。",
        "choices": [
          {
            "label": "问等多久了",
            "delta": 3,
            "response": "他说不久。你怀疑这不久已经很久。"
          },
          {
            "label": "陪他等一会儿",
            "delta": 4,
            "response": "他没有多说，但克拉布出来时，他明显高兴了一点。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch10_simple_truth",
        "minTier": 1,
        "text": "有人绕着弯解释为什么没完成事，高尔听完只说：“你没做。”",
        "choices": [
          {
            "label": "说他说得直接",
            "delta": 4,
            "response": "他皱眉，像不明白为什么事实需要绕远路。"
          },
          {
            "label": "问会不会太硬",
            "delta": 3,
            "response": "他说可是就是没做。你一时无法反驳。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch10_drawing_line",
        "minTier": 2,
        "text": "高尔用羽毛笔画直线，画得很慢，线却出乎意料地稳。",
        "choices": [
          {
            "label": "夸他手稳",
            "delta": 4,
            "response": "他低头看线，小声说他搬东西也得稳。"
          },
          {
            "label": "问在画什么",
            "delta": 3,
            "response": "他说还没想好，先画一条不会乱跑的线。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch10_tired_smile",
        "minTier": 1,
        "text": "晚饭后高尔靠着墙，听别人讲话听得一知半解，却在该笑时慢慢笑了。",
        "choices": [
          {
            "label": "问听懂了吗",
            "delta": 3,
            "response": "他说一半。然后又补一句，够笑了。"
          },
          {
            "label": "给他解释另一半",
            "delta": 4,
            "response": "他听完后又笑了一次，比第一次更自在。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch11_heavy_kind",
        "minTier": 1,
        "text": "高尔帮人搬箱子时一句话不说，搬完才问“放这里？”",
        "choices": [
          {
            "label": "说这里就好",
            "delta": 4,
            "response": "他点头，像任务完成后终于可以放心。"
          },
          {
            "label": "道谢",
            "delta": 3,
            "response": "他低声说没事，手还扶着箱子确认不会倒。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch11_puzzle_piece",
        "minTier": 2,
        "text": "一块拼图卡住，高尔没用力硬塞，而是慢慢转了方向。",
        "choices": [
          {
            "label": "说你很有耐心",
            "delta": 4,
            "response": "他看着拼图合上，小声说硬塞会坏。"
          },
          {
            "label": "问谁教你的",
            "delta": 3,
            "response": "他说没人，坏过就知道。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch11_dumb_label",
        "minTier": 1,
        "text": "有人在背后说高尔笨，他听见了，脸上没什么表情，手却攥紧了。",
        "choices": [
          {
            "label": "说那人不对",
            "delta": 4,
            "response": "他看你一眼，像不知道该怎么接这句话，最后点了点头。"
          },
          {
            "label": "带他走开",
            "delta": 3,
            "response": "你们走到安静处，他松开手，指节有点发白。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch11_small_rule2",
        "minTier": 2,
        "text": "高尔坚持把借来的东西放回原位，哪怕原主人已经说随便。",
        "choices": [
          {
            "label": "问为什么",
            "delta": 4,
            "response": "他说借的就该放回去。简单得不容讨价还价。"
          },
          {
            "label": "帮他找原位",
            "delta": 3,
            "response": "东西归位后，他整个人都松了一点。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch11_cookie_math",
        "minTier": 1,
        "text": "高尔用很直接的方法分饼干：一人一块，剩下的再看谁还饿。",
        "choices": [
          {
            "label": "说很公平",
            "delta": 4,
            "response": "他点头，似乎觉得这是少数世界本该简单的事。"
          },
          {
            "label": "问你还饿吗",
            "delta": 3,
            "response": "他认真想了想，说一直有点。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch12_broken_mug",
        "minTier": 1,
        "text": "高尔看见一只杯子裂了，没有碰它，只站在旁边提醒别人别拿。",
        "choices": [
          {
            "label": "说你很谨慎",
            "delta": 4,
            "response": "他说会割手。理由短，但很认真。"
          },
          {
            "label": "帮他找新杯子",
            "delta": 3,
            "response": "你们把坏杯子换掉，他看起来终于放心。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch12_word_help",
        "minTier": 2,
        "text": "他把一个问题憋了很久才问出口，问完像准备被笑。",
        "choices": [
          {
            "label": "认真回答",
            "delta": 4,
            "response": "他听完点头，神情放松很多，像问题终于没那么危险。"
          },
          {
            "label": "说你可以早问",
            "delta": 3,
            "response": "他说有时不知道是不是该问。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch12_friend_food2",
        "minTier": 1,
        "text": "高尔把两块点心分得一大一小，犹豫后把大的给克拉布。",
        "choices": [
          {
            "label": "问为什么",
            "delta": 3,
            "response": "他说他今天帮我拿书。"
          },
          {
            "label": "再拿一块给他",
            "delta": 4,
            "response": "他接过后明显高兴，公平终于回到胃里。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch12_slow_smile",
        "minTier": 2,
        "text": "有人真正把高尔的话听完，他过了几秒才笑，像理解和高兴都慢慢抵达。",
        "choices": [
          {
            "label": "等他笑完",
            "delta": 4,
            "response": "你没有催，他的笑停得也不急。"
          },
          {
            "label": "问刚才想什么",
            "delta": 3,
            "response": "他说没什么，就是有人听完了。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch12_own_choice2",
        "minTier": 1,
        "text": "高尔在午餐选菜时没有等别人先拿，自己拿了想吃的那盘。",
        "choices": [
          {
            "label": "说这盘不错",
            "delta": 4,
            "response": "他点头，像这个小选择值得被确认。"
          },
          {
            "label": "问喜欢这个？",
            "delta": 3,
            "response": "他说喜欢，今天想吃。话很短，却很像他自己。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch13_pocket_string",
        "minTier": 1,
        "text": "高尔口袋里缠着一团线，他说是用来记路的，虽然已经忘了哪头是起点。",
        "choices": [
          {
            "label": "帮他理开",
            "delta": 4,
            "response": "线终于松开时，他看起来像脑子里也少了一处结。"
          },
          {
            "label": "问有效吗",
            "delta": 3,
            "response": "他说有时有效，有时只是证明自己确实迷过路。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch13_careful_cup",
        "minTier": 2,
        "text": "他端热茶时走得极慢，全部注意力都放在不让杯子晃出来。",
        "choices": [
          {
            "label": "替他开路",
            "delta": 4,
            "response": "他成功放下杯子，像完成了一项严肃任务。"
          },
          {
            "label": "说你很稳",
            "delta": 3,
            "response": "他点头，低声说慢一点就能稳一点。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch13_laugh_delay",
        "minTier": 1,
        "text": "别人笑完一个笑话后，高尔过了好几秒才突然笑出来。",
        "choices": [
          {
            "label": "问现在懂了？",
            "delta": 4,
            "response": "他说刚刚懂。笑得迟一点不代表不好笑。"
          },
          {
            "label": "也跟着笑",
            "delta": 3,
            "response": "他笑得更安心，像迟到的笑声终于有人接住。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch13_not_mean",
        "minTier": 2,
        "text": "有人以为他要吓唬新生，高尔其实只是想告诉对方画像后面不是路。",
        "choices": [
          {
            "label": "帮他解释",
            "delta": 4,
            "response": "新生道谢后，高尔不自在地摸摸后颈，说别撞墙就行。"
          },
          {
            "label": "问你怎么知道",
            "delta": 3,
            "response": "他说因为他撞过。语气平静得像陈述天气。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch13_simple_loyalty",
        "minTier": 1,
        "text": "德拉科心情不好，高尔把甜点盘往他那边推了推，没有说话。",
        "choices": [
          {
            "label": "说这是好办法",
            "delta": 4,
            "response": "他说有时候吃的比话有用，话会弄错，蛋糕不会。"
          },
          {
            "label": "问他也想吃吗",
            "delta": 3,
            "response": "他看了看盘子，说可以等德拉科先拿。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch14_misread_door",
        "minTier": 1,
        "text": "高尔把门牌读错，推开一间空教室后沉默片刻，说这门写得太像另一扇。",
        "choices": [
          {
            "label": "帮他找对门",
            "delta": 4,
            "response": "他认真记下转角，说这次应该能少错一扇。"
          },
          {
            "label": "说门确实像",
            "delta": 3,
            "response": "他明显安心了，仿佛错误被分出去一半。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch14_shared_chips",
        "minTier": 2,
        "text": "他把炸土豆分给克拉布时，数得很慢，努力确保两边一样多。",
        "choices": [
          {
            "label": "说很公平",
            "delta": 4,
            "response": "他说不公平会吵，吵了就吃不香。"
          },
          {
            "label": "帮他数",
            "delta": 3,
            "response": "你们终于分完，他满意地立刻吃掉自己的那份。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch14_slow_thought",
        "minTier": 1,
        "text": "别人说话太快，高尔皱眉听着，最后问能不能“把中间那块再说一遍”。",
        "choices": [
          {
            "label": "请对方慢点",
            "delta": 4,
            "response": "对方重说后，他点头，终于跟上了谈话。"
          },
          {
            "label": "帮他概括",
            "delta": 3,
            "response": "他看向你，说这样好多了，像路上多了路标。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch14_unseen_kind",
        "minTier": 2,
        "text": "他看见地上有墨水，默默把椅子挪开，免得下一个人踩到。",
        "choices": [
          {
            "label": "说你做了好事",
            "delta": 4,
            "response": "他有点茫然，说只是地上很滑。"
          },
          {
            "label": "一起擦掉",
            "delta": 3,
            "response": "墨水擦干后，他检查了两遍才走。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch14_thunder_startle",
        "minTier": 1,
        "text": "雷声响起时，高尔抖了一下，随后装作只是调整坐姿。",
        "choices": [
          {
            "label": "问怕雷吗",
            "delta": 4,
            "response": "他说不怕。过了一会儿补充，只是不喜欢它突然说话。"
          },
          {
            "label": "把窗关上",
            "delta": 3,
            "response": "声音小了一些，他低声说这样好多了。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch15_button_found",
        "minTier": 1,
        "text": "高尔捡到一颗扣子，拿在手里研究很久，像它可能会主动说明主人。",
        "choices": [
          {
            "label": "帮他找失主",
            "delta": 4,
            "response": "你们问了三个人终于找对，他看起来非常满意。"
          },
          {
            "label": "问怎么不丢掉",
            "delta": 3,
            "response": "他说扣子掉了，衣服会难受，人也会。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch15_slow_joke",
        "minTier": 2,
        "text": "他终于理解昨天的笑话，今天早饭时突然笑出声，把旁边人吓了一跳。",
        "choices": [
          {
            "label": "问哪个笑话",
            "delta": 4,
            "response": "他说昨天那个。笑容迟到，但很真诚。"
          },
          {
            "label": "也笑起来",
            "delta": 3,
            "response": "他更开心了，像笑话终于等到同伴。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch15_protect_cake",
        "minTier": 1,
        "text": "高尔把蛋糕护在盘子边缘，认真防止它被路过的袖子扫走。",
        "choices": [
          {
            "label": "说它很安全",
            "delta": 4,
            "response": "他说蛋糕不该在被吃之前经历意外。"
          },
          {
            "label": "帮他挪盘子",
            "delta": 3,
            "response": "盘子安全后，他立刻奖励自己一大口。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch15_draco_confused",
        "minTier": 2,
        "text": "德拉科说了句很复杂的讽刺，高尔皱眉半天，最后决定先点头。",
        "choices": [
          {
            "label": "问你听懂了吗",
            "delta": 4,
            "response": "他说没有，但德拉科听起来需要有人点头。"
          },
          {
            "label": "帮他解释",
            "delta": 3,
            "response": "他恍然大悟，说这句其实可以说短一点。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch15_careful_step",
        "minTier": 1,
        "text": "他看见地上有一只小蜗牛，绕了一个很大的弯才走过去。",
        "choices": [
          {
            "label": "说你很小心",
            "delta": 4,
            "response": "他说它走得慢，所以别人要看得快一点。"
          },
          {
            "label": "一起把它移开",
            "delta": 3,
            "response": "蜗牛被放到墙边后，他低声说这样好多了。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch16_pudding_guard",
        "minTier": 1,
        "text": "高尔负责看住布丁盘，认真得像布丁涉及学院荣誉。",
        "choices": [
          {
            "label": "说交给你放心",
            "delta": 4,
            "response": "他郑重点头，说布丁没有少。"
          },
          {
            "label": "问能吃吗",
            "delta": 3,
            "response": "他说可以，但要先数清楚。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch16_simple_help",
        "minTier": 2,
        "text": "他看见别人够不到书架，没说话，直接把书拿下来递过去。",
        "choices": [
          {
            "label": "说你很帮忙",
            "delta": 4,
            "response": "他有点困惑，说书在那里，他手够得到。"
          },
          {
            "label": "帮忙道谢",
            "delta": 3,
            "response": "对方道谢后，他慢慢点头，像刚理解这也算好事。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch16_wrong_turn_again",
        "minTier": 1,
        "text": "高尔又走错楼梯，停在原地想了半天，最后决定先不装懂。",
        "choices": [
          {
            "label": "给他指路",
            "delta": 4,
            "response": "他说谢谢，声音很低，但真心。"
          },
          {
            "label": "陪他走",
            "delta": 3,
            "response": "他一路重复路线，努力把它记住。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch16_soft_for_crabbe",
        "minTier": 2,
        "text": "克拉布被人笑反应慢，高尔慢慢皱起眉，说“他会懂的”。",
        "choices": [
          {
            "label": "说你护朋友",
            "delta": 4,
            "response": "他说朋友不用马上懂，也还是朋友。"
          },
          {
            "label": "帮他接话",
            "delta": 3,
            "response": "笑声停了，高尔看起来仍不太高兴。"
          }
        ]
      },
      {
        "id": "goyle_year1_chat_batch16_cat_sleep",
        "minTier": 1,
        "text": "一只猫睡在路中央，高尔站住不动，仿佛这条走廊暂时归猫管理。",
        "choices": [
          {
            "label": "绕过去",
            "delta": 4,
            "response": "他小心绕开，说睡觉的时候被踩很糟。"
          },
          {
            "label": "问要不要叫醒",
            "delta": 3,
            "response": "他说不要，它可能难得睡好。"
          }
        ]
      }
    ]
  }
};

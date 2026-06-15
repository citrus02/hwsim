/**
 * Year 1 staff chat scenes for augustusFenwick.
 * Keep future additions in this character file.
 */

export const STAFF_AUGUSTUS_FENWICK_YEAR1_CHAT_SCENES = {
  "augustusFenwick": {
    "activeChatEvents": [
      {
        "id": "fenwick_year1_chat_wrong_answer",
        "minTier": 1,
        "text": "芬威克教授在黑板前看一道被擦了一半的题。粉笔灰落在他袖口上，他却没有拍掉，只盯着那个错误的中间步骤，像那里面藏着比正确答案更有意思的东西。",
        "choices": [
          {
            "label": "问错在哪里",
            "delta": 4,
            "response": "他没有直接指出答案，只圈出一个符号，说错误常常不是突然发生的，而是在某一步被悄悄允许进来。那句话听起来像数学，也像别的什么。"
          },
          {
            "label": "说错误也能留下来吗",
            "delta": 3,
            "response": "芬威克教授点头，说当然。擦得太干净，人就会忘记自己曾经为什么走错。随后他把那一行保留到了下课铃响。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_chalk_fraction",
        "minTier": 1,
        "text": "芬威克教授把一小截粉笔折成两段，又把其中一段再折开。他看着那些不均匀的白色碎块，像在思考分数为什么总比整数更诚实。",
        "choices": [
          {
            "label": "问这也是题吗",
            "delta": 4,
            "response": "他说是，也不是。许多学生以为分开就是变少，其实有时只是看见整体里原本藏着的结构。"
          },
          {
            "label": "帮他捡起碎粉笔",
            "delta": 3,
            "response": "你把碎粉笔放进盒里。芬威克教授说短粉笔适合写短答案，可惜世上短答案太少。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_window_numbers",
        "minTier": 2,
        "text": "他站在窗边数院子里学生走过的路线，手指在袖口轻轻点着节奏。那些脚步在他眼里似乎也能变成某种图形。",
        "choices": [
          {
            "label": "问他数出了什么",
            "delta": 4,
            "response": "他说大多数人会避开水洼，但不是所有人。例外最有意思，因为它们证明人不是只按最短路径行走。"
          },
          {
            "label": "说这不像数学课",
            "delta": 3,
            "response": "芬威克教授说数学从来不只在课上，只是课上比较容易被逮住。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_eraser_dust",
        "minTier": 1,
        "text": "芬威克教授把黑板擦拍在窗边，粉笔灰像一小团白雾散开。他看着灰尘落下，仿佛连它们也有轨迹可算。",
        "choices": [
          {
            "label": "问他在看什么",
            "delta": 4,
            "response": "他说混乱不代表没有规律，只是规律还没有礼貌地站出来。"
          },
          {
            "label": "帮他打开窗",
            "delta": 3,
            "response": "风把粉笔灰带走，他点头说这比大多数学生的解法更有效率。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_short_proof",
        "minTier": 2,
        "text": "他在纸上写下一段很短的证明，又把它划掉，说“太漂亮了，可能有问题”。",
        "choices": [
          {
            "label": "问漂亮为什么有问题",
            "delta": 4,
            "response": "他说漂亮会让人放松警惕，而数学最会趁人自满时咬一口。"
          },
          {
            "label": "陪他检查",
            "delta": 3,
            "response": "你们一行行看过去。最后证明没错，他的表情仍然像不完全信任它。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_late_lamp",
        "minTier": 1,
        "text": "夜里教室还亮着灯，芬威克教授坐在讲台边，面前只有一盏台灯和一道题。",
        "choices": [
          {
            "label": "提醒他很晚了",
            "delta": 3,
            "response": "他说题目不会因为夜深就变简单。可他还是合上本子，像接受了一条外部约束。"
          },
          {
            "label": "问题有进展吗",
            "delta": 4,
            "response": "他说没有，但排除了三条错路。对他来说，这显然也算前进。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_student_error",
        "minTier": 2,
        "text": "他看着一份作业上反复出现的同一类错误，没有生气，只在旁边写了一个很小的箭头。",
        "choices": [
          {
            "label": "问为什么不直接写答案",
            "delta": 4,
            "response": "他说答案给得太快，会让错误学会躲藏。箭头比较诚实，只指出方向。"
          },
          {
            "label": "说这个学生会懂吗",
            "delta": 3,
            "response": "他说也许不会第一次懂，所以还有第二次批改。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_calculator_case",
        "minTier": 1,
        "text": "芬威克教授把那台磨白按键的计算器装回旧皮套，扣带已经有些松。",
        "choices": [
          {
            "label": "问它用了多久",
            "delta": 4,
            "response": "他说久到按键比某些人更可靠。停顿后又补充，也更沉默。"
          },
          {
            "label": "说皮套该修了",
            "delta": 3,
            "response": "他看了看扣带，说确实。能承认物品需要照顾，对他来说像承认一个定理。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_prime_numbers",
        "minTier": 1,
        "text": "芬威克教授在黑板边写下一串质数，写到某个数字时停顿很久，像那数字刚刚不礼貌地拒绝解释自己。",
        "choices": [
          {
            "label": "问这个数特别吗",
            "delta": 4,
            "response": "他说所有质数都特别，只是有些特别得比较沉默。"
          },
          {
            "label": "帮他擦掉旧题",
            "delta": 3,
            "response": "你擦出一块空白。他说空白是非常重要的教学工具，可惜学生通常只在考试时发现。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_student_pace",
        "minTier": 2,
        "text": "他看一名学生算得很慢，却没有催，只把旁边同学的窃笑用眼神压了回去。",
        "choices": [
          {
            "label": "问慢会不会拖课",
            "delta": 4,
            "response": "他说慢不等于错，催促倒常常能把对的东西催坏。"
          },
          {
            "label": "帮忙维持安静",
            "delta": 3,
            "response": "教室安静下来，那名学生终于算完。芬威克教授点头，像这也是答案的一部分。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_pencil_stub",
        "minTier": 1,
        "text": "他的铅笔短到几乎握不住，仍然被削得很尖。它看起来像一件坚持到最后的工具。",
        "choices": [
          {
            "label": "递给他新铅笔",
            "delta": 3,
            "response": "他接过，却把旧铅笔也放进抽屉，说还没完全没用。"
          },
          {
            "label": "问为什么不用羽毛笔",
            "delta": 4,
            "response": "他说铅笔允许人撤回，数学有时需要这种诚实。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_bad_estimate",
        "minTier": 2,
        "text": "芬威克教授听见一个离谱估算，没有立刻纠正，而是让学生把估算过程讲出来。",
        "choices": [
          {
            "label": "问为什么让他说完",
            "delta": 4,
            "response": "他说错误的答案本身没价值，错误怎样抵达那里才有价值。"
          },
          {
            "label": "说这样不尴尬",
            "delta": 3,
            "response": "他说尴尬不能完全避免，但可以不把它当教学目标。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_quiet_reward",
        "minTier": 1,
        "text": "课后，他把一道额外题留在你桌角，没有说明奖励，也没有说明惩罚。",
        "choices": [
          {
            "label": "问这是作业吗",
            "delta": 3,
            "response": "他说不是，只是如果你的脑子今晚无事可做，可以让它有点事做。"
          },
          {
            "label": "收下题目",
            "delta": 4,
            "response": "他看见你把纸折好，嘴角几乎动了一下。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_unsolved_corner",
        "minTier": 1,
        "text": "芬威克教授把一道没解出的题留在黑板角落，没有擦掉。那块角落像被允许暂时承认无能为力。",
        "choices": [
          {
            "label": "问明天还会在吗",
            "delta": 4,
            "response": "他说会，问题不因我们睡觉而失效。明天醒来，或许我们会稍微聪明一点。"
          },
          {
            "label": "说没解出也能留着",
            "delta": 3,
            "response": "他点头，说诚实的空白比虚假的答案更有教育价值。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_number_patience",
        "minTier": 2,
        "text": "他看着一名学生反复算错同一步，脸色没有变，只把椅子往旁边拉近了一点。",
        "choices": [
          {
            "label": "问他不急吗",
            "delta": 4,
            "response": "他说急只会让学生把错误藏得更深。数学不喜欢被追赶。"
          },
          {
            "label": "陪着等",
            "delta": 3,
            "response": "那名学生终于自己发现问题。芬威克教授轻轻敲了敲桌面，像给答案盖章。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_muggle_calendar",
        "minTier": 1,
        "text": "芬威克教授对着一张麻瓜日历写下巫师节日对应日期，眉头皱得像两套时间制度正在争吵。",
        "choices": [
          {
            "label": "问为什么要对照",
            "delta": 4,
            "response": "他说因为学生活在两种世界里，时间不能只承认其中一种。"
          },
          {
            "label": "帮他查日期",
            "delta": 3,
            "response": "你找到一个节日，他把它写进表格，像给两边世界架了一块小木板。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_silent_approval",
        "minTier": 2,
        "text": "你解出一道题时，芬威克教授没有夸奖，只把你的解法拿到窗边又看了一遍。",
        "choices": [
          {
            "label": "问是否错了",
            "delta": 3,
            "response": "他说没有。停顿后补一句，所以他才看第二遍。"
          },
          {
            "label": "等他评价",
            "delta": 4,
            "response": "他最终说“方法干净”。这四个字在他那里比掌声还重。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_miscounted_steps",
        "minTier": 1,
        "text": "他走楼梯时忽然停下，说自己刚才数错了一阶。一个成年人为一阶楼梯皱眉，显得奇异又认真。",
        "choices": [
          {
            "label": "问这重要吗",
            "delta": 3,
            "response": "他说不重要，但错误被发现时应当被承认，不管它多小。"
          },
          {
            "label": "陪他重新数",
            "delta": 4,
            "response": "你们从下一段重新数起。芬威克教授似乎对世界恢复了少许信任。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch6_margin_sum",
        "minTier": 1,
        "text": "芬威克教授在一张旧羊皮纸边缘写算式，写到没有地方了，仍不肯换纸。他说空白太多会让思路误以为自己很富裕。",
        "choices": [
          {
            "label": "递给他新纸",
            "delta": 3,
            "response": "他接过新纸，却先把旧纸夹进书里，说错误和犹豫也属于证明的地基。"
          },
          {
            "label": "问为什么不用魔法扩宽",
            "delta": 4,
            "response": "他说因为边界会迫使人承认取舍。魔法若太顺手，脑子就会偷懒。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch6_window_count",
        "minTier": 2,
        "text": "他站在窗边数庭院里经过的人，忽然皱眉，说刚才有一个数被他当成了影子。",
        "choices": [
          {
            "label": "陪他重数",
            "delta": 4,
            "response": "你们从头数起。他最后说，重新开始不丢脸，假装没错才丢脸。"
          },
          {
            "label": "说影子也算一个",
            "delta": 3,
            "response": "他看了你一眼，竟然认真想了想，说诗人或许会同意，统计学不会。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch6_muggle_coin",
        "minTier": 1,
        "text": "芬威克教授把一枚麻瓜硬币放在桌上，来回翻看，像在研究一个小而固执的定理。",
        "choices": [
          {
            "label": "问硬币哪里有趣",
            "delta": 4,
            "response": "他说它不需要咒语就能代表价值，这件事本身很值得巫师谦虚。"
          },
          {
            "label": "帮他认面值",
            "delta": 3,
            "response": "他把数字记下，又问不同年份是否会改变收藏价值，神情比讲考试范围时更专注。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch6_wrong_answer_kept",
        "minTier": 2,
        "text": "他把一份错得很整齐的作业留在桌上，红墨水没有盖过原字，反而沿着错误走了一圈。",
        "choices": [
          {
            "label": "问为什么不直接改掉",
            "delta": 4,
            "response": "他说错误如果有结构，就值得被看清。把它涂黑，只会让下一次错误换个地方出现。"
          },
          {
            "label": "说这份作业很用心",
            "delta": 3,
            "response": "他点头，说用心不能替代正确，但能让正确有地方落脚。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch6_stair_fraction",
        "minTier": 1,
        "text": "移动楼梯停在半截，芬威克教授望着悬空的距离，说这很像一个不愿化简的分数。",
        "choices": [
          {
            "label": "问分母是什么",
            "delta": 3,
            "response": "他说大概是耐心。然后他真的在扶手上比划了一个分数线。"
          },
          {
            "label": "等楼梯自己接上",
            "delta": 4,
            "response": "你们一起等着。他说有些题不是不会做，只是还没轮到它转过来。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch7_blunt_pencil",
        "minTier": 1,
        "text": "芬威克教授把一支钝铅笔削了很久，削下来的木屑排成小小一圈，像某种安静的证明。",
        "choices": [
          {
            "label": "问为什么不用自动羽毛笔",
            "delta": 4,
            "response": "他说自动完成的字迹会让人误以为思考也能自动完成。"
          },
          {
            "label": "帮他清理木屑",
            "delta": 3,
            "response": "他点头道谢，把最后一片木屑也拨进纸篓，像不愿给混乱留下余数。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch7_unsent_solution",
        "minTier": 2,
        "text": "他写完一份解答后没有交出去，而是折起来压在书下，说还差一个理由。",
        "choices": [
          {
            "label": "问答案不是对的吗",
            "delta": 4,
            "response": "他说对不等于完整。很多错误正是躲在“差不多对”后面活得很好。"
          },
          {
            "label": "建议明天再看",
            "delta": 3,
            "response": "他接受了，说隔夜的脑子有时比今晚的自信可靠。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch7_clock_seconds",
        "minTier": 1,
        "text": "走廊钟摆慢了一点，芬威克教授站在下面听了半分钟，表情严肃得像钟犯了学术错误。",
        "choices": [
          {
            "label": "问慢多少",
            "delta": 3,
            "response": "他说还不能确定，需要更多样本。你忽然意识到他真的想继续听。"
          },
          {
            "label": "陪他数摆动",
            "delta": 4,
            "response": "你们数完一轮，他满意地说，时间若不准，至少我们可以准一点。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch7_student_blank",
        "minTier": 2,
        "text": "一名学生交上空白作业，芬威克教授没有立刻批评，只在第一页写下“从第一步开始”。",
        "choices": [
          {
            "label": "问他不生气吗",
            "delta": 4,
            "response": "他说空白有时是懒，有时是怕。教师若分不清，就会把两者都教坏。"
          },
          {
            "label": "说这句话很温和",
            "delta": 3,
            "response": "他像没听懂夸奖，只说第一步总比最后通牒有用。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch7_moon_geometry",
        "minTier": 1,
        "text": "他看着窗外月亮，忽然说今晚的弧度适合讲圆，却不适合讲圆满。",
        "choices": [
          {
            "label": "问有什么区别",
            "delta": 4,
            "response": "他说圆是形状，圆满是愿望。数学只负责前者，后者交给人。"
          },
          {
            "label": "说这不像数学课",
            "delta": 3,
            "response": "他沉默片刻，说所有学科偶尔都会越界，只要别太频繁。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch8_bent_ruler",
        "minTier": 1,
        "text": "芬威克教授发现一把尺子微微弯了，神情像在面对一位背叛直线的同事。",
        "choices": [
          {
            "label": "问还能用吗",
            "delta": 3,
            "response": "他说能，但必须记住它不再诚实。工具失准比工具损坏更危险。"
          },
          {
            "label": "帮他换一把",
            "delta": 4,
            "response": "他接过新尺子，把旧尺子贴上标签收好，说错误工具也有教学价值。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch8_unasked_formula",
        "minTier": 2,
        "text": "他在黑板上写下一个没人问的公式，写完又擦掉，只留下粉笔灰的影子。",
        "choices": [
          {
            "label": "问为什么擦掉",
            "delta": 4,
            "response": "他说问题还没长到能承受答案的时候。太早的公式会像硬塞的钥匙。"
          },
          {
            "label": "说刚才没看清",
            "delta": 3,
            "response": "他说那也许是好事。有些东西第二次出现时才该被看见。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch8_calculator_battery",
        "minTier": 1,
        "text": "他的麻瓜计算器按键反应迟钝，芬威克教授却没有立刻施咒，只把电池盖打开。",
        "choices": [
          {
            "label": "问不用魔法修吗",
            "delta": 4,
            "response": "他说麻瓜物品有自己的尊严。先按它的方式理解它，再谈帮助。"
          },
          {
            "label": "帮他找电池",
            "delta": 3,
            "response": "你找到备用电池，他换上后按了几下，表情像一条证明重新通了气。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch8_silent_lunch",
        "minTier": 2,
        "text": "午餐时芬威克教授一边吃一边看题，叉子停在半空很久，像连土豆都不敢打扰。",
        "choices": [
          {
            "label": "提醒他吃饭",
            "delta": 3,
            "response": "他低头看见叉子，承认人体并不因数学暂时暂停。"
          },
          {
            "label": "问题很难吗",
            "delta": 4,
            "response": "他说难，但不是坏事。难题至少不会假装自己很容易。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch8_student_method",
        "minTier": 1,
        "text": "他看见学生用了笨办法算出正确答案，没有嘲笑，只问“你确定每一步都愿意再走一次吗”。",
        "choices": [
          {
            "label": "问这算批评吗",
            "delta": 4,
            "response": "他说算提醒。路可以长，但不能靠侥幸刚好到达。"
          },
          {
            "label": "说答案毕竟对了",
            "delta": 3,
            "response": "他说对是终点之一，不是全部旅程。数学讨厌迷路后硬说自己散步。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch9_chalk_stub",
        "minTier": 1,
        "text": "芬威克教授把一截短粉笔用到几乎握不住，仍不肯换新的。",
        "choices": [
          {
            "label": "问为什么不用新的",
            "delta": 4,
            "response": "他说还没写完它能写的东西。浪费常从“差不多”开始。"
          },
          {
            "label": "递给他粉笔夹",
            "delta": 3,
            "response": "他接过去，像给这截粉笔延长了一段严肃职业生涯。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch9_window_formula",
        "minTier": 2,
        "text": "他在起雾的窗上写公式，雾散后公式也慢慢消失，像一道题选择保密。",
        "choices": [
          {
            "label": "问为什么写窗上",
            "delta": 3,
            "response": "他说临时想法需要临时表面，纸太正式。"
          },
          {
            "label": "趁没散前看完",
            "delta": 4,
            "response": "你看完最后一行，他点头，说短暂也可以足够清楚。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch9_student_shortcut",
        "minTier": 1,
        "text": "学生用了一个投机取巧的算法，芬威克教授盯着看了很久。",
        "choices": [
          {
            "label": "问错了吗",
            "delta": 4,
            "response": "他说没错，但它不知道自己为什么对。这样的正确很容易迷路。"
          },
          {
            "label": "说挺快的",
            "delta": 3,
            "response": "他说快若不能解释，迟早会撞上第一个不让路的问题。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch9_lost_number",
        "minTier": 2,
        "text": "他在笔记里找一个数字，翻了三页都没找到，脸色比丢了钥匙还糟。",
        "choices": [
          {
            "label": "帮他一起找",
            "delta": 4,
            "response": "你在页角找到它。他松口气，说数字也应当对自己的位置负责。"
          },
          {
            "label": "问很重要吗",
            "delta": 3,
            "response": "他说也许不重要，但未知的重要性最不讲道理。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch9_evening_silence",
        "minTier": 1,
        "text": "傍晚教室空了，芬威克教授仍站在黑板前，像在等一个迟到的答案。",
        "choices": [
          {
            "label": "问他在等什么",
            "delta": 4,
            "response": "他说等脑子承认它今天到此为止。"
          },
          {
            "label": "帮他擦黑板",
            "delta": 3,
            "response": "你擦掉半块板，他看着干净处，说有时结束也需要外力。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch10_unfinished_grid",
        "minTier": 1,
        "text": "芬威克教授在方格纸上画到一半停住，像某个坐标突然拒绝继续合作。",
        "choices": [
          {
            "label": "问哪里卡住",
            "delta": 4,
            "response": "他说不是卡住，是图形暂时不肯承认自己的意图。"
          },
          {
            "label": "帮他压住纸角",
            "delta": 3,
            "response": "他点头，把最后一条线画完，像终于让纸安静下来。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch10_small_error",
        "minTier": 2,
        "text": "他发现自己算错一位小数，没有掩饰，立刻把整行重写。",
        "choices": [
          {
            "label": "说只是小错",
            "delta": 3,
            "response": "他说小错若站在支点上，就能撬翻整道题。"
          },
          {
            "label": "等他重算",
            "delta": 4,
            "response": "他重算完后说谢谢你没有催促，催促会让错误学会藏身。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch10_muggle_ticket",
        "minTier": 1,
        "text": "他把一张麻瓜车票夹在书里，研究票面数字像研究一张陌生星图。",
        "choices": [
          {
            "label": "问去过吗",
            "delta": 4,
            "response": "他说没有，那张票是别人给他的。未使用的路线也会让人想象。"
          },
          {
            "label": "问票还能用吗",
            "delta": 3,
            "response": "他说不能，但不能用不等于没有意义。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch10_class_afterthought",
        "minTier": 2,
        "text": "下课后他又回到教室，在黑板角落补上一句说明，仿佛怕明天的学生误会今天的沉默。",
        "choices": [
          {
            "label": "问为什么回来",
            "delta": 4,
            "response": "他说一个没写清的前提会在夜里变得很吵。"
          },
          {
            "label": "帮他点灯",
            "delta": 3,
            "response": "灯亮后，那行字显得踏实多了。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch10_number_kindness",
        "minTier": 1,
        "text": "芬威克教授说数字并不冷酷，冷酷的是人们用数字时忘了数字后面有人。",
        "choices": [
          {
            "label": "问数学也有关心吗",
            "delta": 4,
            "response": "他说当然，精确有时正是为了不让人被含糊伤害。"
          },
          {
            "label": "说这不像他会说的",
            "delta": 3,
            "response": "他沉默一下，说那你对他了解还不够精确。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch11_spare_decimal",
        "minTier": 1,
        "text": "芬威克教授把小数点写得很重，像怕它趁人不注意逃走。",
        "choices": [
          {
            "label": "问小数点这么重要？",
            "delta": 4,
            "response": "他说一粒点能把答案从正确带到荒唐，轻视它是灾难的开端。"
          },
          {
            "label": "帮他检查一遍",
            "delta": 3,
            "response": "你们逐行核对，他满意地说眼睛成双也不是没有理由。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch11_empty_margin",
        "minTier": 2,
        "text": "他在作业边留了很大空白，只写一句“这里还可以再想”。",
        "choices": [
          {
            "label": "问为什么不直接讲",
            "delta": 4,
            "response": "他说学生自己跨过的一寸，比教师替他铺好的一尺更稳。"
          },
          {
            "label": "说这很含蓄",
            "delta": 3,
            "response": "他说含蓄不是少说，是给思考留入口。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch11_muggle_map_math",
        "minTier": 1,
        "text": "芬威克教授用麻瓜地图计算两站之间距离，眉头皱得像地铁线路故意绕远。",
        "choices": [
          {
            "label": "问您要去哪",
            "delta": 3,
            "response": "他说暂时哪也不去，只是想知道若去，需要多久。"
          },
          {
            "label": "帮他看站名",
            "delta": 4,
            "response": "你念出站名，他把距离记下，像一段未发生的旅程获得了形状。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch11_student_patience",
        "minTier": 2,
        "text": "学生反复算错时，芬威克教授把椅子拉近，没有提高声音。",
        "choices": [
          {
            "label": "问您不急吗",
            "delta": 4,
            "response": "他说急只会让错误更会躲。算术不怕慢，怕慌。"
          },
          {
            "label": "陪着等",
            "delta": 3,
            "response": "那名学生终于自己发现错处，芬威克教授点头，像证明了等待的价值。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch11_closed_book",
        "minTier": 1,
        "text": "他忽然合上书，说今天的脑子已经不再诚实，继续读只会制造假勤奋。",
        "choices": [
          {
            "label": "说这很难承认",
            "delta": 4,
            "response": "他说是，所以更该练习。疲惫最喜欢冒充毅力。"
          },
          {
            "label": "建议去吃点东西",
            "delta": 3,
            "response": "他看了看时间，接受了这个非常非数学但合理的建议。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch12_square_corner",
        "minTier": 1,
        "text": "芬威克教授用手指压住方格纸一角，像怕整个证明从角落滑走。",
        "choices": [
          {
            "label": "问纸会跑吗",
            "delta": 3,
            "response": "他说思路会，纸只是替它表现出来。"
          },
          {
            "label": "帮他压另一角",
            "delta": 4,
            "response": "他点头，线条终于画直，像想法暂时同意被约束。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch12_student_guess",
        "minTier": 2,
        "text": "学生猜对答案，芬威克教授没有立刻满意，只问“你是知道，还是撞见了？”",
        "choices": [
          {
            "label": "问区别大吗",
            "delta": 4,
            "response": "他说很大。撞见的答案下次未必认得你。"
          },
          {
            "label": "让学生解释",
            "delta": 3,
            "response": "学生磕绊着解释完，他点头，说现在它开始像知识。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch12_old_receipt",
        "minTier": 1,
        "text": "他研究一张麻瓜收据上的税额，眉头皱得像发现一种日常数学怪物。",
        "choices": [
          {
            "label": "问这也有趣？",
            "delta": 4,
            "response": "他说有趣，价格从不只是价格，背后总有人制定规则。"
          },
          {
            "label": "帮他看小字",
            "delta": 3,
            "response": "你念出税率，他把它记进本子，像收服了一个小谜题。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch12_late_lamp",
        "minTier": 2,
        "text": "深夜教室灯还亮着，芬威克教授盯着一个未解步骤，茶杯早已空了。",
        "choices": [
          {
            "label": "提醒他该休息",
            "delta": 4,
            "response": "他说未解问题不会逃走，这一点比人类身体更可靠。然后合上了本子。"
          },
          {
            "label": "问差哪一步",
            "delta": 3,
            "response": "他指给你看，眼神里没有疲惫，只有顽固。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch12_kind_precision",
        "minTier": 1,
        "text": "他说精确有时不是为了显得聪明，而是为了不让别人替你的模糊付代价。",
        "choices": [
          {
            "label": "说这很像伦理课",
            "delta": 4,
            "response": "他沉默一下，说所有好数学最后都会碰到伦理。"
          },
          {
            "label": "记下这句",
            "delta": 3,
            "response": "他看见你写下，像有点不习惯自己的话被当成句子保存。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch13_chalk_dust",
        "minTier": 1,
        "text": "芬威克教授用袖口擦掉黑板边缘的粉笔灰，动作笨拙，却像在清理一条思路的杂音。",
        "choices": [
          {
            "label": "问灰也碍事吗",
            "delta": 4,
            "response": "他说碍事。眼睛先被灰骗走，脑子就会以为错误不重要。"
          },
          {
            "label": "递给他抹布",
            "delta": 3,
            "response": "他接过去，低声说工具合适时，人会少犯几种愚蠢错误。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch13_rounding_mercy",
        "minTier": 2,
        "text": "他讲四舍五入时停了一下，说近似不是撒谎，而是承认世界有时不肯给你完整答案。",
        "choices": [
          {
            "label": "问这算妥协吗",
            "delta": 4,
            "response": "他说是有纪律的妥协。没有纪律的妥协只是懒。"
          },
          {
            "label": "记下这句",
            "delta": 3,
            "response": "他看你写下，皱眉说别把数学课记成诗集。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch13_muggle_bus",
        "minTier": 1,
        "text": "他研究一张麻瓜公交时刻表，眉头紧得像面对一份会迟到的证明题。",
        "choices": [
          {
            "label": "问哪里难",
            "delta": 4,
            "response": "他说难在它假装精确，却把交通、天气和人类迟疑都藏起来。"
          },
          {
            "label": "帮他看路线",
            "delta": 3,
            "response": "你们找出换乘点，他像解开一道不太诚实的题。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch13_student_blank",
        "minTier": 2,
        "text": "一个学生交了空白答案，芬威克教授没有立刻批评，只在旁边写下“从这里开始”。",
        "choices": [
          {
            "label": "问为什么这样写",
            "delta": 4,
            "response": "他说空白不是终点，除非教师也懒得找入口。"
          },
          {
            "label": "说这很温和",
            "delta": 3,
            "response": "他说温和不等于降低要求，只是先别把门锁死。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch13_private_smile",
        "minTier": 1,
        "text": "他看到一道漂亮解法时嘴角动了一下，随即恢复平静，好像笑容也该被严格控制。",
        "choices": [
          {
            "label": "说您刚才笑了",
            "delta": 4,
            "response": "他说没有。停顿后补充，即使有，也是解法的责任。"
          },
          {
            "label": "问解法哪里好",
            "delta": 3,
            "response": "他立刻讲起结构，声音比平时轻快半拍。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch14_spare_chalk",
        "minTier": 1,
        "text": "芬威克教授把半截粉笔收进盒子，说还能写两个有用的结论。",
        "choices": [
          {
            "label": "问这也要留？",
            "delta": 4,
            "response": "他说浪费小东西的人，常在大问题上也不够警惕。"
          },
          {
            "label": "帮他整理",
            "delta": 3,
            "response": "粉笔按长短排好，他看起来终于不再被盒子冒犯。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch14_student_shortcut",
        "minTier": 2,
        "text": "学生用了捷径，他没有立刻否定，只要求对方证明捷径不是悬崖。",
        "choices": [
          {
            "label": "问捷径不好吗",
            "delta": 4,
            "response": "他说好，前提是你知道它省掉的不是地基。"
          },
          {
            "label": "一起检查",
            "delta": 3,
            "response": "捷径成立，他罕见地点头说“可以”。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch14_old_calculator",
        "minTier": 1,
        "text": "他的旧计算器按键有些磨白，他按下去时很轻，像怕惊扰一位固执老友。",
        "choices": [
          {
            "label": "问用了很久？",
            "delta": 4,
            "response": "他说久到它比许多学生更懂沉默的重要。"
          },
          {
            "label": "说它很可靠",
            "delta": 3,
            "response": "他看着计算器，说可靠的东西不该因为旧就被轻视。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch14_clear_board",
        "minTier": 2,
        "text": "下课后他擦黑板，却留下一道未解题，像故意让教室还有一点没睡。",
        "choices": [
          {
            "label": "问为什么不擦",
            "delta": 4,
            "response": "他说问题若还活着，就不该被清洁工作误杀。"
          },
          {
            "label": "看那道题",
            "delta": 3,
            "response": "他没有解释答案，只说方向比速度重要。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch14_kind_error",
        "minTier": 1,
        "text": "他把一份错得很整齐的作业退回去，批语是“错误有秩序，修正会容易些”。",
        "choices": [
          {
            "label": "说这算鼓励吗",
            "delta": 4,
            "response": "他说算事实。事实若恰好鼓励人，那是额外收益。"
          },
          {
            "label": "问怎么改",
            "delta": 3,
            "response": "他指出第一处岔路，剩下的要求学生自己走。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch15_ledger_margin",
        "minTier": 1,
        "text": "芬威克教授盯着账本边缘的数字，像那几列加总不只是钱，而是一种秩序测试。",
        "choices": [
          {
            "label": "问哪里不对",
            "delta": 4,
            "response": "他说不一定不对，但没有被检查过的正确不值得信任。"
          },
          {
            "label": "帮他复算",
            "delta": 3,
            "response": "结果一致后，他轻轻点头，像允许数字暂时休息。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch15_student_method",
        "minTier": 2,
        "text": "学生用了笨办法算对题，他没有嘲笑，只问笨办法是否愿意变短一点。",
        "choices": [
          {
            "label": "问笨办法也可以？",
            "delta": 4,
            "response": "他说可以。路长不是罪，前提是你知道自己在路上。"
          },
          {
            "label": "一起缩短步骤",
            "delta": 3,
            "response": "步骤少了两行，学生眼睛亮起来。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch15_muggle_clock",
        "minTier": 1,
        "text": "他拆看一只麻瓜闹钟的说明书，认为它比许多巫师论文更诚实。",
        "choices": [
          {
            "label": "问为什么",
            "delta": 4,
            "response": "他说它至少明确告诉你哪颗螺丝负责什么。"
          },
          {
            "label": "帮他找零件名",
            "delta": 3,
            "response": "他把名称抄下，像收集一套新的语法。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch15_noisy_class",
        "minTier": 2,
        "text": "教室太吵时，芬威克教授没有提高声音，只在黑板写下一个巨大的等号。",
        "choices": [
          {
            "label": "问等号什么意思",
            "delta": 4,
            "response": "他说等号两边都需要听见彼此，否则它只是两条横线。"
          },
          {
            "label": "安静下来",
            "delta": 3,
            "response": "班里慢慢收声，他才继续讲。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch15_lonely_problem",
        "minTier": 1,
        "text": "他把一道难题称作“还没有找到谈话对象的问题”，语气少见地柔和。",
        "choices": [
          {
            "label": "问您陪它谈？",
            "delta": 4,
            "response": "他说有时是它陪他。未解之物很有耐心。"
          },
          {
            "label": "看题目",
            "delta": 3,
            "response": "题目很难，却因他的说法显得不那么冰冷。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch16_misplaced_decimal",
        "minTier": 1,
        "text": "芬威克教授把一个小数点圈了三遍，说它小到可笑，却足够毁掉整道题。",
        "choices": [
          {
            "label": "问这么严重？",
            "delta": 4,
            "response": "他说错误不按体积收费。"
          },
          {
            "label": "帮他重算",
            "delta": 3,
            "response": "答案终于对上，他像从一场小型灾难中撤离。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch16_slow_student",
        "minTier": 2,
        "text": "学生算得很慢，他没有催，只说速度若踩碎理解，就不值得追。",
        "choices": [
          {
            "label": "说这很温和",
            "delta": 4,
            "response": "他说这叫效率。重学三遍才是真的慢。"
          },
          {
            "label": "陪学生算完",
            "delta": 3,
            "response": "最后一步出来时，他点头说“现在它站住了”。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch16_train_table",
        "minTier": 1,
        "text": "他研究麻瓜火车时刻表，认为它是一篇关于希望与延误的数学论文。",
        "choices": [
          {
            "label": "问有趣吗",
            "delta": 4,
            "response": "他说非常有趣，尤其当人类试图让时间听话时。"
          },
          {
            "label": "帮他看换乘",
            "delta": 3,
            "response": "他记下路线，神情像解开一个固执句子。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch16_chalk_break",
        "minTier": 2,
        "text": "粉笔断成两截，他平静地把短的那截继续用完。",
        "choices": [
          {
            "label": "问不换新的？",
            "delta": 4,
            "response": "他说能继续工作的东西不该因不完整被抛弃。"
          },
          {
            "label": "递给他粉笔盒",
            "delta": 3,
            "response": "他说待会儿，现在这截还没有结束。"
          }
        ]
      },
      {
        "id": "fenwick_year1_chat_batch16_answer_humility",
        "minTier": 1,
        "text": "他说正确答案若让人停止思考，就只是另一种漂亮陷阱。",
        "choices": [
          {
            "label": "问那答案有什么用",
            "delta": 4,
            "response": "他说用来确认你走到了这里，不是用来证明你不必再走。"
          },
          {
            "label": "记下这句",
            "delta": 3,
            "response": "他皱眉说别把它写得太像箴言。"
          }
        ]
      }
    ]
  }
};

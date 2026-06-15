/**
 * Year 1 staff chat scenes for elizaLovegood.
 * Keep future additions in this character file.
 */

export const STAFF_ELIZA_LOVEGOOD_YEAR1_CHAT_SCENES = {
  "elizaLovegood": {
    "activeChatEvents": [
      {
        "id": "eliza_year1_chat_sentence_taste",
        "minTier": 1,
        "text": "伊莱莎教授在窗边低声读同一句话，读到第三遍时换了一个停顿。她没有看书页，而像在听那句话自己决定要在哪里呼吸。",
        "choices": [
          {
            "label": "问为什么反复读",
            "delta": 4,
            "response": "她说句子也有味道，第一遍只能尝到表面，第二遍才知道它有没有回甘。她把书递给你，让你也试着读一遍。"
          },
          {
            "label": "说刚才那遍更好听",
            "delta": 3,
            "response": "伊莱莎教授笑了，说你听见了停顿。许多人只听词，忘了沉默也在句子里工作。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_book_smell",
        "minTier": 1,
        "text": "伊莱莎教授轻轻翻开一本旧书，没有立刻读，而是让纸页的气味散出来。她说每本旧书开口前都会先叹一口气。",
        "choices": [
          {
            "label": "问这本书叹什么气",
            "delta": 4,
            "response": "她说也许是嫌自己等太久，也许是庆幸终于被打开。文学很少只给一个答案。"
          },
          {
            "label": "说闻起来像雨天",
            "delta": 3,
            "response": "她笑着点头，说你听见了气味里的天气。这句话古怪，却像一枚正式的认可。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_misread_line",
        "minTier": 2,
        "text": "她把一句诗读错了一个词，停下后没有立刻改正，而是把错读的版本又念了一遍。",
        "choices": [
          {
            "label": "问错的也好听吗",
            "delta": 4,
            "response": "她说有时错误会打开另一扇窗。不能因此假装它正确，但可以先看看窗外有什么。"
          },
          {
            "label": "帮她找到原句",
            "delta": 3,
            "response": "你指出原句，她道谢后重新朗读。正确版本回来时，似乎比刚才更清楚了。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_window_verse",
        "minTier": 1,
        "text": "伊莱莎教授把一句诗写在窗边雾气上。字很快散开，她却像这正是它应该有的结尾。",
        "choices": [
          {
            "label": "说字消失了",
            "delta": 3,
            "response": "她说有些句子适合留下，有些适合证明自己来过。"
          },
          {
            "label": "请她再写一遍",
            "delta": 4,
            "response": "她笑着重写，动作比第一次慢，好像第二次也不是重复。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_silent_student",
        "minTier": 2,
        "text": "她读完一段故事后，没有立刻提问，只等教室里的沉默自己变形。",
        "choices": [
          {
            "label": "问沉默也算回答吗",
            "delta": 4,
            "response": "她说当然。有些文字先让人安静，之后才让人开口。"
          },
          {
            "label": "说刚才那段很难过",
            "delta": 3,
            "response": "她点头，说你先感到了，理解可以稍后赶上。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_bad_summary",
        "minTier": 1,
        "text": "一名学生把故事概括得干巴巴，伊莱莎教授没有责备，只问“还有气味吗？”",
        "choices": [
          {
            "label": "问她是什么意思",
            "delta": 4,
            "response": "她说摘要不能只剩骨头，至少要让人闻见房间里曾经有人生活。"
          },
          {
            "label": "试着补一个细节",
            "delta": 3,
            "response": "她听完后微笑，说现在故事终于有一点体温。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_book_repair",
        "minTier": 2,
        "text": "她用细纸修补一本诗集的裂页，手指轻得像在替一句话包扎。",
        "choices": [
          {
            "label": "帮她按住纸边",
            "delta": 4,
            "response": "你按住边缘，她把裂口贴平。她说修书最怕急，急会把伤口弄得更大。"
          },
          {
            "label": "问为什么不换新书",
            "delta": 3,
            "response": "她说新书没有这道裂痕，也就没有这段被救回来的经历。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_reading_voice",
        "minTier": 1,
        "text": "伊莱莎教授让不同学生读同一段话，听到某个停顿时眼睛亮了一下。",
        "choices": [
          {
            "label": "问那个停顿好吗",
            "delta": 4,
            "response": "她说好，因为它让句子像真的想了一想。"
          },
          {
            "label": "试着读一遍",
            "delta": 3,
            "response": "你读得不完美，她却指出一个很自然的地方，让你突然没那么怕出声。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_sentence_cut",
        "minTier": 1,
        "text": "伊莱莎教授把一篇学生作文里过长的句子轻轻分成两句，像替喘不过气的文字开窗。",
        "choices": [
          {
            "label": "问为什么要断开",
            "delta": 4,
            "response": "她说好句子也需要呼吸。太长的真心有时会把自己累坏。"
          },
          {
            "label": "试着重读",
            "delta": 3,
            "response": "你读完后，她点头说现在它愿意被听见了。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_lost_metaphor",
        "minTier": 2,
        "text": "她盯着一个比喻看了很久，说它很漂亮，但没有走到该去的地方。",
        "choices": [
          {
            "label": "问漂亮还不够吗",
            "delta": 4,
            "response": "她说漂亮只是门面，门后如果没有房间，读者会摔跤。"
          },
          {
            "label": "帮她找更贴的说法",
            "delta": 3,
            "response": "你们换了一个朴素比喻，她满意地说它终于有脚了。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_reading_circle",
        "minTier": 1,
        "text": "她让学生围坐朗读，每个人只读一句。轮到紧张的人时，她把目光移向书页，给对方少一点压力。",
        "choices": [
          {
            "label": "注意到她的目光",
            "delta": 4,
            "response": "她课后说有些鼓励不是盯着人看，而是让他暂时不必被看见。"
          },
          {
            "label": "一起放低声音",
            "delta": 3,
            "response": "那名学生顺利读完。伊莱莎轻轻合上书，像合上一阵风。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_desk_flower",
        "minTier": 1,
        "text": "她桌上插着一枝快蔫的野花。她没有换掉，只把水添满。",
        "choices": [
          {
            "label": "问为什么还留着",
            "delta": 3,
            "response": "她说故事到后半段也还是故事，不能只爱开头。"
          },
          {
            "label": "帮她换水",
            "delta": 4,
            "response": "你换了清水，花枝微微立起。她说有些句子也只是需要一点水。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_untranslated_word",
        "minTier": 2,
        "text": "她在黑板上写下一个无法完全翻译的词，旁边空着，像承认空白也是解释的一部分。",
        "choices": [
          {
            "label": "问不翻译怎么办",
            "delta": 4,
            "response": "她说先让它保持陌生。太急着翻译，有时会把它变小。"
          },
          {
            "label": "写下自己的理解",
            "delta": 3,
            "response": "她读了你的解释，说虽然不是全部，但很诚实。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_reading_lamp",
        "minTier": 1,
        "text": "伊莱莎教授调低读书灯，说光太亮会让某些句子显得没有秘密。",
        "choices": [
          {
            "label": "问句子需要秘密吗",
            "delta": 4,
            "response": "她说不是藏起来的秘密，而是让读者愿意靠近一点的余地。"
          },
          {
            "label": "帮她拉窗帘",
            "delta": 3,
            "response": "房间暗下来，她轻声读了一段，文字像终于找到合适的温度。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_student_metaphor",
        "minTier": 2,
        "text": "一个学生写下笨拙比喻，她没有划掉，只在旁边写“再往里走一步”。",
        "choices": [
          {
            "label": "问是什么意思",
            "delta": 4,
            "response": "她说比喻已经敲门了，只是还站在门外。"
          },
          {
            "label": "试着帮忙改",
            "delta": 3,
            "response": "你们把比喻改得朴素些。她说现在它终于不是穿错衣服的客人了。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_lost_page",
        "minTier": 1,
        "text": "一本旧书缺了一页，伊莱莎教授读到那里时停住，没有立刻跳过。",
        "choices": [
          {
            "label": "问少了什么",
            "delta": 3,
            "response": "她说正因为少了，才会让人想象它原本多重要。"
          },
          {
            "label": "帮她找别的版本",
            "delta": 4,
            "response": "你们在另一册里找到缺页。她读得很慢，像让失踪的人回到座位。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_laughing_line",
        "minTier": 2,
        "text": "她读到一句幽默处先笑了，随后解释为什么好笑。解释没有毁掉笑，反而让它更清楚。",
        "choices": [
          {
            "label": "问笑话也能分析吗",
            "delta": 4,
            "response": "她说可以，但要小心。解剖笑话不能把它弄死。"
          },
          {
            "label": "说刚才很好笑",
            "delta": 3,
            "response": "她点头，说文字偶尔也会伸个懒腰。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_word_for_home",
        "minTier": 1,
        "text": "她让学生写一个“家”的词。收上来时，她看得很慢，像每个词后面都有一扇门。",
        "choices": [
          {
            "label": "问她会怎么评价",
            "delta": 4,
            "response": "她说这种题不该先评价，应先感谢。"
          },
          {
            "label": "问她自己的词",
            "delta": 3,
            "response": "她想了很久，说“回声”。然后没有解释。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch6_book_smell",
        "minTier": 1,
        "text": "伊莱莎教授翻开一本旧书，先轻轻闻了闻纸页。她说有些书会把前任读者的安静也留住。",
        "choices": [
          {
            "label": "问闻到了什么",
            "delta": 4,
            "response": "她说有灰尘、墨水和一点急着长大的年轻人。"
          },
          {
            "label": "把书递近些",
            "delta": 3,
            "response": "她让你也闻，笑着说如果闻不出故事，至少闻得出图书馆没有偷懒。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch6_crossed_line",
        "minTier": 2,
        "text": "她在一篇作文旁画了一条很轻的线，没有删掉那句话，只让它像站到灯下。",
        "choices": [
          {
            "label": "问这句哪里不好",
            "delta": 4,
            "response": "她说不是不好，是还没有承担自己暗示的重量。"
          },
          {
            "label": "试着重写一句",
            "delta": 3,
            "response": "你改得朴素些。她点头，说现在这句话终于肯用自己的脚走路了。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch6_rain_poem",
        "minTier": 1,
        "text": "雨水敲着窗，伊莱莎教授忽然停笔，说今天所有比喻都不该太响，雨已经替它们说得够多。",
        "choices": [
          {
            "label": "问可以写雨吗",
            "delta": 4,
            "response": "她说当然，但要写你听见的雨，不要写别人教你应该听见的雨。"
          },
          {
            "label": "安静听一会儿",
            "delta": 3,
            "response": "你们听着窗声。她说有时候沉默不是空白，是段落。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch6_name_in_margin",
        "minTier": 2,
        "text": "她发现有人把名字写在借书卡边角，字很小，像怕书不记得自己来过。",
        "choices": [
          {
            "label": "问这算违规吗",
            "delta": 3,
            "response": "她说算一点点，但孤独有时会用很笨的方式请求被看见。"
          },
          {
            "label": "帮她擦掉名字",
            "delta": 4,
            "response": "你擦得很轻。她把借书卡收好，说不要让规矩比人更急着开口。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch6_story_ending",
        "minTier": 1,
        "text": "伊莱莎教授把一个故事读到结尾前停住，合上书，问你觉得人物会不会回头。",
        "choices": [
          {
            "label": "说会回头",
            "delta": 3,
            "response": "她问是因为勇敢，还是因为还舍不得。这个问题让结尾忽然变得不简单。"
          },
          {
            "label": "说不会回头",
            "delta": 4,
            "response": "她点头，说有些成长不是走向远方，而是不再向旧伤口讨答案。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch7_margin_flower",
        "minTier": 1,
        "text": "伊莱莎教授在一篇文章旁画了一朵很小的花，花下写着“这里终于开了”。",
        "choices": [
          {
            "label": "问是什么意思",
            "delta": 4,
            "response": "她说那一段之前一直在解释，到了这里才真正活了一下。"
          },
          {
            "label": "说批注很漂亮",
            "delta": 3,
            "response": "她笑说批注不必总拿着尺子，偶尔也可以拿水壶。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch7_reading_pause",
        "minTier": 2,
        "text": "她朗读时在一句话前停顿很久，停得学生都抬头看她。",
        "choices": [
          {
            "label": "问为什么停",
            "delta": 4,
            "response": "她说有些句子需要门廊，不能一脚踢进屋里。"
          },
          {
            "label": "说刚才很安静",
            "delta": 3,
            "response": "她点头，说安静若用得好，也是一种标点。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch7_bad_title",
        "minTier": 1,
        "text": "她看着一篇题目过大的作文，轻轻叹气，说标题像穿了别人的斗篷。",
        "choices": [
          {
            "label": "问该怎么改",
            "delta": 4,
            "response": "她建议把题目缩小到作者真正走过的地方。"
          },
          {
            "label": "说大标题很有气势",
            "delta": 3,
            "response": "她说气势若没有路可走，只会在门口摔倒。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch7_book_return",
        "minTier": 2,
        "text": "有人还书时夹进一张干叶子，伊莱莎教授没有立刻丢掉，而是把它放进废纸旁边。",
        "choices": [
          {
            "label": "问为什么留下",
            "delta": 3,
            "response": "她说读者留下的东西不一定有用，但常常说明书在哪里停过。"
          },
          {
            "label": "说像书签",
            "delta": 4,
            "response": "她说是的，也像一场读到一半的秋天。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch7_soft_disagreement",
        "minTier": 1,
        "text": "她不同意一个学生的解释，却没有说“不对”，只是问“你愿意再往下一层想吗”。",
        "choices": [
          {
            "label": "问她为何这样问",
            "delta": 4,
            "response": "她说直接否定太容易让门关上。她更想听见门里还有没有脚步声。"
          },
          {
            "label": "试着补充一层",
            "delta": 3,
            "response": "你顺着想下去，她点头，说这就比原来的答案多了呼吸。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch8_creased_letter",
        "minTier": 1,
        "text": "伊莱莎教授把一封旧信夹回书里，纸上折痕很深，像被读过太多次。",
        "choices": [
          {
            "label": "问那封信重要吗",
            "delta": 3,
            "response": "她说重要的东西不一定需要被解释，尤其当它已经被时间解释过。"
          },
          {
            "label": "不追问",
            "delta": 4,
            "response": "她看出你的分寸，微笑说谢谢。有些纸页只适合自己翻。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch8_student_voice",
        "minTier": 2,
        "text": "她读一篇学生作文时停下，说这句话终于不像从课本里借来的嗓子。",
        "choices": [
          {
            "label": "问怎样算自己的声音",
            "delta": 4,
            "response": "她说不是非要新奇，而是句子里能听见作者真的在场。"
          },
          {
            "label": "说这很难",
            "delta": 3,
            "response": "她点头，说所以才值得慢慢写，借来的声音走不远。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch8_library_light",
        "minTier": 1,
        "text": "黄昏的光斜斜落在书页上，伊莱莎教授把书往光里挪了一寸，像给句子换了座位。",
        "choices": [
          {
            "label": "问光会影响阅读吗",
            "delta": 4,
            "response": "她说会。不同光线会让同一句话露出不同心情。"
          },
          {
            "label": "帮她拉开窗帘",
            "delta": 3,
            "response": "光铺开后，她轻声读了一句，像确认文字终于醒了。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch8_torn_page_edge",
        "minTier": 2,
        "text": "一本书的页边被撕破，她没有先责怪，只用薄纸修补，动作慢得像缝合沉默。",
        "choices": [
          {
            "label": "问会追查谁撕的",
            "delta": 3,
            "response": "她说会，但修补要先于责备。伤口不能等调查结束再止血。"
          },
          {
            "label": "帮她压住书页",
            "delta": 4,
            "response": "你按住纸边，她贴得很平，说谢谢，书也需要有人在旁边扶一扶。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch8_one_good_sentence",
        "minTier": 1,
        "text": "她说一篇糟糕文章里有一句好句子，不该因为周围糟糕就被一起埋掉。",
        "choices": [
          {
            "label": "问那句在哪",
            "delta": 4,
            "response": "她指给你看。那句话确实像一扇小窗，虽然开在一堵歪墙上。"
          },
          {
            "label": "说这样很温柔",
            "delta": 3,
            "response": "她说不是温柔，是公平。好句子也有被认出的权利。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch9_tea_book",
        "minTier": 1,
        "text": "伊莱莎教授把茶杯放得离书很远，说温柔也要和纸张保持边界。",
        "choices": [
          {
            "label": "问曾经洒过吗",
            "delta": 3,
            "response": "她说洒过一次，从此那本书永远带着薄荷味反驳她。"
          },
          {
            "label": "帮她挪开书",
            "delta": 4,
            "response": "她笑说谢谢，你刚刚避免了一场文学与饮品的悲剧。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch9_student_title",
        "minTier": 2,
        "text": "她替学生把一个夸张题目改小，改完后整篇文章反而站稳了。",
        "choices": [
          {
            "label": "问为什么小了更好",
            "delta": 4,
            "response": "她说小标题能让作者真的走进去，大标题有时只会把人挡在门外。"
          },
          {
            "label": "说原来很有气势",
            "delta": 3,
            "response": "她说气势若没有内容支撑，只是穿大袍子的小孩。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch9_reading_voice",
        "minTier": 1,
        "text": "她让学生用自己的声音读一段文字，不许模仿“课堂朗读腔”。",
        "choices": [
          {
            "label": "问为什么",
            "delta": 4,
            "response": "她说文字需要活人经过，不需要空洞的礼堂回声。"
          },
          {
            "label": "试着读一句",
            "delta": 3,
            "response": "她纠正你放松一点，说句子不是被押送出来的。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch9_lost_bookmark",
        "minTier": 2,
        "text": "她找不到书签，最后从书页里发现一片旧花瓣，便决定今天用它。",
        "choices": [
          {
            "label": "问花瓣哪来的",
            "delta": 3,
            "response": "她说可能来自一个比她更会记日子的读者。"
          },
          {
            "label": "说很适合",
            "delta": 4,
            "response": "她把花瓣放回页间，说有些临时替代品比原本安排更懂事。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch9_quiet_praise",
        "minTier": 1,
        "text": "她夸作业时声音很轻，像怕夸奖太响会把好句子吓跑。",
        "choices": [
          {
            "label": "问为什么不大声",
            "delta": 4,
            "response": "她说有些进步还很嫩，先让它在纸上站稳。"
          },
          {
            "label": "说学生会高兴",
            "delta": 3,
            "response": "她点头，说是的，但高兴也可以有私密的房间。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch10_pencil_shadow",
        "minTier": 1,
        "text": "伊莱莎教授用铅笔在句子下画浅线，浅到像怕惊动文字。",
        "choices": [
          {
            "label": "问为什么不用墨水",
            "delta": 4,
            "response": "她说有些判断应该允许自己被后来更好的理解擦掉。"
          },
          {
            "label": "说这很谨慎",
            "delta": 3,
            "response": "她点头，说阅读若太确信，容易把门关早。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch10_student_silence",
        "minTier": 2,
        "text": "学生交了一篇很短的作文，伊莱莎教授没有嫌短，只说沉默也要看是否诚实。",
        "choices": [
          {
            "label": "问怎么看",
            "delta": 4,
            "response": "她说有的短是偷懒，有的短是把话咬得太紧。"
          },
          {
            "label": "帮她读一遍",
            "delta": 3,
            "response": "你读完后，她在旁边写下“可以再信任一句”。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch10_window_story",
        "minTier": 1,
        "text": "她说城堡某扇窗适合写开头，另一扇窗适合写告别，语气认真。",
        "choices": [
          {
            "label": "问为什么",
            "delta": 4,
            "response": "她说光线不同，人站在窗前想留下的东西也不同。"
          },
          {
            "label": "说想去看看",
            "delta": 3,
            "response": "她告诉你路线，像给你一张寻找句子的地图。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch10_book_rescue",
        "minTier": 2,
        "text": "她从桌脚下救出一本被垫歪的书，轻轻拍去灰尘。",
        "choices": [
          {
            "label": "问书会疼吗",
            "delta": 3,
            "response": "她说也许不会，但人若习惯这样对待书，也会这样对待别的沉默东西。"
          },
          {
            "label": "帮她换垫片",
            "delta": 4,
            "response": "桌子终于平稳，她说书恢复了自己的职业尊严。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch10_last_line",
        "minTier": 1,
        "text": "伊莱莎教授读到一个结尾，合上书后没有说话，像让最后一句自己走远。",
        "choices": [
          {
            "label": "问结尾好吗",
            "delta": 4,
            "response": "她说好，好到不该马上被评价追上。"
          },
          {
            "label": "安静等着",
            "delta": 3,
            "response": "过了一会儿她才微笑，说谢谢你没有踩住余音。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch11_sentence_breath",
        "minTier": 1,
        "text": "伊莱莎教授说一句长句需要呼吸，不然读者会以为自己被绑架。",
        "choices": [
          {
            "label": "问怎么给句子呼吸",
            "delta": 4,
            "response": "她说删去炫耀的词，留下真正走路的词。"
          },
          {
            "label": "试着改一句",
            "delta": 3,
            "response": "你删掉两个词，她说句子终于能从椅子上站起来。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch11_dogear_mercy",
        "minTier": 2,
        "text": "她看见书页被折角，神情痛苦，却先问是不是没有书签。",
        "choices": [
          {
            "label": "问折角很糟吗",
            "delta": 3,
            "response": "她说糟，但绝望时人会伤害纸张，所以要先提供替代方案。"
          },
          {
            "label": "递书签",
            "delta": 4,
            "response": "她立刻把书签放进书里，像终止一场页角战争。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch11_student_title2",
        "minTier": 1,
        "text": "学生给文章取了个很平的题目，伊莱莎教授却说它至少诚实。",
        "choices": [
          {
            "label": "诚实够吗",
            "delta": 4,
            "response": "她说不够，但诚实是能继续改的地板。"
          },
          {
            "label": "帮她想新题",
            "delta": 3,
            "response": "你们把题目改得稍微亮一点，仍没有离开文章本身。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch11_rain_reading",
        "minTier": 2,
        "text": "雨天她把朗读速度放慢，说雨已经负责了背景，不必再急着抢戏。",
        "choices": [
          {
            "label": "说听起来很好",
            "delta": 4,
            "response": "她笑说天气偶尔是最懂节奏的助教。"
          },
          {
            "label": "问晴天呢",
            "delta": 3,
            "response": "她说晴天适合让句子更清楚地露面。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch11_private_note",
        "minTier": 1,
        "text": "她在学生作文后写了一句私人评语，写完用手遮了一下，像评语也需要隐私。",
        "choices": [
          {
            "label": "问写了什么",
            "delta": 3,
            "response": "她说是给作者的，不是给走廊的。"
          },
          {
            "label": "不追问",
            "delta": 4,
            "response": "她点头，说谢谢，阅读别人的脆弱时脚步要轻。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch12_sentence_window",
        "minTier": 1,
        "text": "伊莱莎教授说一句好句子像窗，不一定大，但应该让人看见别处。",
        "choices": [
          {
            "label": "问怎样算别处",
            "delta": 4,
            "response": "她说读完后，你心里多出一个之前没有的位置。"
          },
          {
            "label": "说这很难写",
            "delta": 3,
            "response": "她点头，说所以好窗户不多，才要珍惜。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch12_student_crossout",
        "minTier": 2,
        "text": "学生把一整段划掉，伊莱莎教授没有可惜，只问划掉后剩下的是否更真实。",
        "choices": [
          {
            "label": "问删掉也算进步？",
            "delta": 4,
            "response": "她说当然。许多文章不是写出来的，是让多余部分安静离开。"
          },
          {
            "label": "帮她读剩下的",
            "delta": 3,
            "response": "剩下的段落短了，却更有力。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch12_tea_pause",
        "minTier": 1,
        "text": "她喝茶前先把书签夹好，像给阅读一个体面的暂停。",
        "choices": [
          {
            "label": "问暂停也讲究？",
            "delta": 3,
            "response": "她说暂停若太粗鲁，回来时句子会不认得你。"
          },
          {
            "label": "帮她续茶",
            "delta": 4,
            "response": "她道谢，说温热的茶很适合让思想不要太急。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch12_old_book_owner",
        "minTier": 2,
        "text": "旧书扉页有前主人的名字，伊莱莎教授轻轻念了一遍。",
        "choices": [
          {
            "label": "问认识吗",
            "delta": 3,
            "response": "她说不认识，但名字说明有人曾经把这本书带回去过。"
          },
          {
            "label": "说像问候",
            "delta": 4,
            "response": "她笑说是的，读旧书总像和迟到的人握手。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch12_kind_critique",
        "minTier": 1,
        "text": "她批评文章时先说“这里值得保留”，再谈问题，像先给作者找一块站脚处。",
        "choices": [
          {
            "label": "问为什么先说优点",
            "delta": 4,
            "response": "她说人站稳了，才听得进该往哪走。"
          },
          {
            "label": "说这样不伤人",
            "delta": 3,
            "response": "她说批评不该以伤人为目标，虽然它有时会疼。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch13_page_breath",
        "minTier": 1,
        "text": "伊莱莎教授翻页前停了一下，像给上一页最后一句话留出离开的时间。",
        "choices": [
          {
            "label": "问为什么停顿",
            "delta": 4,
            "response": "她说句子也需要门廊，不该一读完就被下一句推倒。"
          },
          {
            "label": "安静等她",
            "delta": 3,
            "response": "她继续读时，声音比刚才更低，像走进了更深的房间。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch13_bad_poem",
        "minTier": 2,
        "text": "她读到一首笨拙的学生诗，没有笑，只说这里有一个诚实但还没学会走路的想法。",
        "choices": [
          {
            "label": "问怎么教它走路",
            "delta": 4,
            "response": "她说先别嘲笑它跌倒，再替它删掉三只多余的鞋。"
          },
          {
            "label": "说这很仁慈",
            "delta": 3,
            "response": "她说仁慈不是放过粗糙，而是相信它能被打磨。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch13_luna_name",
        "minTier": 1,
        "text": "她看见一处奇怪比喻，笑意很淡，说有些眼睛天生会从斜处看月亮。",
        "choices": [
          {
            "label": "问您喜欢吗",
            "delta": 4,
            "response": "她说喜欢。世界若只被正面看见，会少很多入口。"
          },
          {
            "label": "问这是谁写的",
            "delta": 3,
            "response": "她合上纸页，说作者的名字不必总走在句子前面。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch13_library_rain",
        "minTier": 2,
        "text": "雨敲着图书馆窗户，她说雨声会让人误以为自己更孤独，也可能更诚实。",
        "choices": [
          {
            "label": "问是哪一种",
            "delta": 4,
            "response": "她说要看你愿不愿意把窗外当作陪伴。"
          },
          {
            "label": "听雨不说话",
            "delta": 3,
            "response": "她没有催你，沉默像被雨声轻轻托住。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch13_revision_mercy",
        "minTier": 1,
        "text": "她把一段文章退回给学生，批注是：请再给它一次成为自己的机会。",
        "choices": [
          {
            "label": "问这是什么意思",
            "delta": 4,
            "response": "她说现在这段太像借来的声音，借来的声音走不远。"
          },
          {
            "label": "说批注很美",
            "delta": 3,
            "response": "她笑说若批注太美而文章不改，那就是批注失败。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch14_margin_flower",
        "minTier": 1,
        "text": "伊莱莎教授发现学生在页边画花，没有责备，只问这朵花是否和段落有关。",
        "choices": [
          {
            "label": "问画花也可以？",
            "delta": 4,
            "response": "她说如果花帮助思想开口，就可以；如果只是逃跑，也值得知道它逃去哪。"
          },
          {
            "label": "一起看段落",
            "delta": 3,
            "response": "那朵花旁边最终多了一句很清楚的批注。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch14_read_aloud",
        "minTier": 2,
        "text": "她让学生朗读时先站稳，说声音不是从喉咙出发，而是从人愿意被听见的地方出发。",
        "choices": [
          {
            "label": "问怎么站稳",
            "delta": 4,
            "response": "她调整学生肩膀，说先别向自己的句子道歉。"
          },
          {
            "label": "安静听",
            "delta": 3,
            "response": "第二遍朗读明显更稳，像句子终于抬头。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch14_old_letter",
        "minTier": 1,
        "text": "她把一封旧信夹回书中，边角已经柔软，像被读过太多次。",
        "choices": [
          {
            "label": "问是谁写的",
            "delta": 4,
            "response": "她说一个曾经很会听雨的人。名字不总是故事里最重要的部分。"
          },
          {
            "label": "不追问",
            "delta": 3,
            "response": "她向你轻轻点头，把书放回靠心口的位置。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch14_word_taste",
        "minTier": 2,
        "text": "她说有些词读起来像青苹果，有些词像旧木头，让学生先别急着笑。",
        "choices": [
          {
            "label": "问这个比喻对吗",
            "delta": 4,
            "response": "她说不需要对所有人都对，只要能让你更准确地听见它。"
          },
          {
            "label": "说一个词给她",
            "delta": 3,
            "response": "她认真品评，仿佛词语真的能在舌尖留下纹理。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch14_late_lamp",
        "minTier": 1,
        "text": "夜里她还在批作文，灯光把她的影子拉得很长，像每一篇文章都多留她一会儿。",
        "choices": [
          {
            "label": "提醒她休息",
            "delta": 4,
            "response": "她说等这一篇找到回家的路。然后真的合上了下一叠。"
          },
          {
            "label": "帮她添茶",
            "delta": 3,
            "response": "她道谢，说温茶能让尖锐批注先冷静一点。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch15_sentence_seed",
        "minTier": 1,
        "text": "伊莱莎教授说一个句子若种得太浅，风一吹就只剩漂亮词。",
        "choices": [
          {
            "label": "问怎么种深",
            "delta": 4,
            "response": "她说让它有具体事物可抓：一只杯子、一扇窗、一次没说出口的道歉。"
          },
          {
            "label": "记下例子",
            "delta": 3,
            "response": "她微笑说例子是文字的根。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch15_student_voice",
        "minTier": 2,
        "text": "她把一篇模仿名家的作文退回去，说“我听见了别人，却还没听见你”。",
        "choices": [
          {
            "label": "问会不会太重",
            "delta": 4,
            "response": "她说重，但诚实。学生值得被邀请回自己的句子里。"
          },
          {
            "label": "帮她想批注",
            "delta": 3,
            "response": "批注最后变得更柔和，也更准确。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch15_luna_letter",
        "minTier": 1,
        "text": "她读到一封语序古怪的信，笑着说有些信不是写直线，是写小路。",
        "choices": [
          {
            "label": "问小路好吗",
            "delta": 4,
            "response": "她说只要能抵达真心，小路很好。"
          },
          {
            "label": "问谁写的",
            "delta": 3,
            "response": "她把信合上，说写信的人已经在句子里了。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch15_quiet_grief",
        "minTier": 2,
        "text": "她说有些书不适合在人多时读，因为读者可能需要一点体面地难过。",
        "choices": [
          {
            "label": "问您也会吗",
            "delta": 4,
            "response": "她说当然。文学若从不让人难过，就太客气了。"
          },
          {
            "label": "安静点头",
            "delta": 3,
            "response": "她像接受了这份理解，继续把书签夹好。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch15_word_return",
        "minTier": 1,
        "text": "她把学生删掉的一个词圈回来，说它不是错，只是刚才站错了地方。",
        "choices": [
          {
            "label": "问词也会站错？",
            "delta": 4,
            "response": "她说会。好词若挤错门，也会显得粗鲁。"
          },
          {
            "label": "一起调位置",
            "delta": 3,
            "response": "句子顺了许多，她说现在它终于会呼吸。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch16_blank_page",
        "minTier": 1,
        "text": "伊莱莎教授说空白页并不可怕，可怕的是为了不空白而随便填满。",
        "choices": [
          {
            "label": "问怎么开始",
            "delta": 4,
            "response": "她说先写一个真实的小东西，不必一开头就拯救世界。"
          },
          {
            "label": "写下一句",
            "delta": 3,
            "response": "她看完说这句有门，可以进去。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch16_student_metaphor",
        "minTier": 2,
        "text": "学生写了一个奇怪比喻，她没有改掉，只问这个比喻是否愿意承担自己的奇怪。",
        "choices": [
          {
            "label": "问比喻也要承担？",
            "delta": 4,
            "response": "她说当然，漂亮话也有责任。"
          },
          {
            "label": "帮学生解释",
            "delta": 3,
            "response": "解释后，比喻不那么古怪，反而更有力量。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch16_reading_voice",
        "minTier": 1,
        "text": "她读到悲伤段落时没有压低到煽情，只让声音稳稳经过。",
        "choices": [
          {
            "label": "问为什么这么读",
            "delta": 4,
            "response": "她说悲伤已经足够重，朗读者不必再坐上去。"
          },
          {
            "label": "安静听完",
            "delta": 3,
            "response": "句子落下后，房间安静了一会儿。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch16_luna_margin",
        "minTier": 2,
        "text": "她在页边看到一行像梦话的批注，笑着说有些理解先长成野草。",
        "choices": [
          {
            "label": "问要修剪吗",
            "delta": 4,
            "response": "她说要，但别急着拔掉，野草有时知道土壤真正在哪里。"
          },
          {
            "label": "问谁写的",
            "delta": 3,
            "response": "她只是把纸收好，说作者已经足够清楚。"
          }
        ]
      },
      {
        "id": "eliza_year1_chat_batch16_letter_unsent",
        "minTier": 1,
        "text": "她抽屉里有一封没寄出的信，封口干净，像沉默被保存得很体面。",
        "choices": [
          {
            "label": "问为什么没寄",
            "delta": 4,
            "response": "她说有些信写完就是抵达，不必再让邮差辛苦。"
          },
          {
            "label": "不追问",
            "delta": 3,
            "response": "她轻轻合上抽屉，像感谢你没有碰那封沉默。"
          }
        ]
      }
    ]
  }
};

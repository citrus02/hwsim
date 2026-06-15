/**
 * Year 1 staff chat scenes for mirandaPercival.
 * Keep future additions in this character file.
 */

export const STAFF_MIRANDA_PERCIVAL_YEAR1_CHAT_SCENES = {
  "mirandaPercival": {
    "activeChatEvents": [
      {
        "id": "miranda_year1_chat_return_stamp",
        "minTier": 1,
        "text": "米兰达教授给归还书盖章，印泥颜色有些淡了。她没有急着重盖，而是看着那枚浅浅的日期，像在判断它是否仍然足够说明一次相遇已经结束。",
        "choices": [
          {
            "label": "问需要重盖吗",
            "delta": 3,
            "response": "她说不用太重。书已经回来，日期只需轻轻证明它曾经离开过。图书馆里很多痕迹都不必喊得太响。"
          },
          {
            "label": "帮她换印泥",
            "delta": 4,
            "response": "你递上新印泥。米兰达教授说谢谢，然后把下一枚章盖得清楚许多。她说清楚不是为了审问读者，而是为了让下一次借阅从容开始。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_dogear",
        "minTier": 1,
        "text": "米兰达教授发现一本书被折了角。她没有发怒，只把折痕慢慢压平，像在安抚一处不该承受的委屈。",
        "choices": [
          {
            "label": "问她会罚借书人吗",
            "delta": 3,
            "response": "她说会提醒。惩罚不能替代理解，理解也不能替代修正。"
          },
          {
            "label": "递给她书签",
            "delta": 4,
            "response": "她接过书签夹进去，说这比训斥更能预防下一次。图书馆喜欢实际的善意。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_shelf_gap",
        "minTier": 2,
        "text": "她看着书架上一处空缺，手指轻轻点在标签下方。那本书被借走了，她却像仍然能看见它留下的形状。",
        "choices": [
          {
            "label": "问那本书很重要吗",
            "delta": 4,
            "response": "她说重要，但被需要也是书的重要方式。只要它会回来，空位就不是失去。"
          },
          {
            "label": "帮她查借阅记录",
            "delta": 3,
            "response": "你们找到借阅名字。她点头说很好，图书馆不是收藏沉默，而是管理流动。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_overdue_card",
        "minTier": 1,
        "text": "米兰达教授看着一张逾期借阅卡，没有生气，只在名字旁画了一个小点。",
        "choices": [
          {
            "label": "问会催还吗",
            "delta": 3,
            "response": "她说会温和地催。书需要回家，读者也不该被吓跑。"
          },
          {
            "label": "帮她找那本书位置",
            "delta": 4,
            "response": "你们确认书架空位，她说空位有时比书本更会提醒人。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_whisper_rule",
        "minTier": 1,
        "text": "她提醒两个学生小声些，语气轻得几乎和图书馆本身一样。",
        "choices": [
          {
            "label": "说她从不大声",
            "delta": 4,
            "response": "她说在图书馆里，大声维持安静本身就是矛盾。"
          },
          {
            "label": "帮她关上窗",
            "delta": 3,
            "response": "风声小了，她向你点头，像给安静盖上一层薄毯。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_new_reader",
        "minTier": 2,
        "text": "一个新生不知道该借什么书，米兰达教授没有立刻推荐名著，而是先问他最近为什么睡不着。",
        "choices": [
          {
            "label": "问选书要问这个吗",
            "delta": 4,
            "response": "她说当然。书不是奖杯，是要在某个晚上陪人的东西。"
          },
          {
            "label": "帮她拿低书架的书",
            "delta": 3,
            "response": "你递过去一本薄书，她说入门书不该让人觉得门太高。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_bookplate",
        "minTier": 2,
        "text": "她把一枚旧藏书票贴回书封内侧，动作像替书找回名字。",
        "choices": [
          {
            "label": "问藏书票是谁的",
            "delta": 4,
            "response": "她说是一位很多年前的学生。人离开学校后，有时书还记得他来过。"
          },
          {
            "label": "帮她压平",
            "delta": 3,
            "response": "你按住边角，她说谢谢，别让胶水替记忆起皱。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_rain_reading",
        "minTier": 1,
        "text": "雨天图书馆人多，米兰达教授在通道间缓慢行走，像确认每个人都找到了可停靠的地方。",
        "choices": [
          {
            "label": "问雨天更忙吗",
            "delta": 3,
            "response": "她说是，但也更像图书馆该有的样子：很多人暂时愿意安静。"
          },
          {
            "label": "帮她收回散书",
            "delta": 4,
            "response": "你把散书归到车上。她说归位不是结束，是方便下一次相遇。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_book_weather",
        "minTier": 1,
        "text": "米兰达教授说今天适合读短篇，因为雨声太密，长篇会被打断。她说得像在安排天气和文字的座位。",
        "choices": [
          {
            "label": "问晴天适合什么",
            "delta": 4,
            "response": "她说适合读会让人走远的书，因为阳光会负责把人带回来。"
          },
          {
            "label": "借一本短篇",
            "delta": 3,
            "response": "她挑了一本薄书，叮嘱你不要因为薄就读得太快。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_reader_face",
        "minTier": 2,
        "text": "她看见一个学生合上书后发呆，没有催还，只把借阅台的声音放轻。",
        "choices": [
          {
            "label": "问他怎么了",
            "delta": 3,
            "response": "她说可能刚从书里回来。刚回来的人需要一点路。"
          },
          {
            "label": "也放轻动作",
            "delta": 4,
            "response": "你把书轻轻放下。她向你点头，像认可你没有惊动一场归来。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_mended_spine",
        "minTier": 1,
        "text": "她修补一本书的书脊，胶水味很淡。那本书被翻旧了，却没有被嫌弃。",
        "choices": [
          {
            "label": "问还能借吗",
            "delta": 4,
            "response": "她说当然。旧书不是病人，只是需要更小心的手。"
          },
          {
            "label": "帮她压住封面",
            "delta": 3,
            "response": "你按住封面，她把书脊贴平，说谢谢，别让它以为自己没人要。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_bad_title",
        "minTier": 2,
        "text": "一个学生因为书名无聊不想借，米兰达教授没有反驳，只翻开第一页让他读三行。",
        "choices": [
          {
            "label": "问三行够吗",
            "delta": 4,
            "response": "她说有些书三行就知道自己在不在等你。"
          },
          {
            "label": "也读三行",
            "delta": 3,
            "response": "三行之后你想继续读。她露出一点“我就知道”的微笑。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_late_return",
        "minTier": 1,
        "text": "有人逾期还书，不停道歉。米兰达教授先检查书有没有受潮，再轻声说下次记得日期。",
        "choices": [
          {
            "label": "说她没有生气",
            "delta": 4,
            "response": "她说书平安回来时，生气可以小一点。规则仍在，但不必拿来砸人。"
          },
          {
            "label": "帮她盖章",
            "delta": 3,
            "response": "你递过印章，她在日期旁盖得清清楚楚。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_quiet_recommendation",
        "minTier": 1,
        "text": "米兰达教授推荐书时声音很轻，像怕太大声会把书吓得失去神秘感。",
        "choices": [
          {
            "label": "问为什么选这本",
            "delta": 4,
            "response": "她说因为它不会急着证明自己聪明。许多一年级需要这样的书。"
          },
          {
            "label": "接过书",
            "delta": 3,
            "response": "她把借阅卡夹好，像替一次相遇安排座位。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_reader_return",
        "minTier": 2,
        "text": "一个学生还书时说“不太懂”。米兰达教授没有失望，反而问哪一页最不懂。",
        "choices": [
          {
            "label": "问不懂也好吗",
            "delta": 4,
            "response": "她说当然。完全没留下问题的书，有时只是从你身边走过去了。"
          },
          {
            "label": "帮她翻到那页",
            "delta": 3,
            "response": "她和学生一起看那段，图书馆因此像一间小课堂。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_shelf_dust",
        "minTier": 1,
        "text": "她擦书架灰尘时动作很慢，没有把灰扬起来。阳光里细小尘埃像一群迟到的字。",
        "choices": [
          {
            "label": "帮她递布",
            "delta": 3,
            "response": "她接过布，说清洁不是让痕迹消失，而是让书能被再次找到。"
          },
          {
            "label": "说灰也挺漂亮",
            "delta": 4,
            "response": "她笑了，说漂亮不代表适合待在书脊上。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_secret_reader",
        "minTier": 2,
        "text": "有人偷偷借了一本诗集又迅速藏进书包。米兰达教授看见了，却只在借阅卡上盖章。",
        "choices": [
          {
            "label": "问她不点破吗",
            "delta": 4,
            "response": "她说有些读者需要先从秘密开始，才敢承认自己喜欢。"
          },
          {
            "label": "帮她挡住视线",
            "delta": 3,
            "response": "你站到旁边，那个学生顺利离开。她向你轻轻点头。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_endpaper_note",
        "minTier": 1,
        "text": "她在书的空白护页发现一行很久以前的铅笔字，没有立刻擦掉。",
        "choices": [
          {
            "label": "问要保留吗",
            "delta": 4,
            "response": "她说先记录。读者留下的话不一定该在书里，但也不该被匆忙抹去。"
          },
          {
            "label": "帮她誊到卡片上",
            "delta": 3,
            "response": "你把那行字抄下，她才轻轻擦淡铅笔痕。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch6_map_pin",
        "minTier": 1,
        "text": "米兰达教授在地图上插针，针脚密得像一场安静的风暴。她每插一枚，都会停下确认海岸线。",
        "choices": [
          {
            "label": "问在标什么",
            "delta": 4,
            "response": "她说标人们以为自己发现世界时，世界早已存在的地方。"
          },
          {
            "label": "帮她递图钉",
            "delta": 3,
            "response": "她接过图钉，提醒你别让颜色替事实做决定。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch6_wrong_river",
        "minTier": 2,
        "text": "她发现一张旧地图把河流画错，眉头皱得很深，像那条河真的被迫走了冤枉路。",
        "choices": [
          {
            "label": "问旧地图还能用吗",
            "delta": 4,
            "response": "她说能用，但必须知道它在哪里撒谎。"
          },
          {
            "label": "帮她标注错误",
            "delta": 3,
            "response": "你写下注释。她说地理学最怕漂亮的错误，因为人们愿意相信它。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch6_globe_spin",
        "minTier": 1,
        "text": "一只地球仪被学生转得太快，米兰达教授轻轻按停它，说世界不是用来晕眩的玩具。",
        "choices": [
          {
            "label": "问能不能转慢点",
            "delta": 3,
            "response": "她说可以。慢慢转时，边界和山脉才有机会被看见。"
          },
          {
            "label": "看它停在哪里",
            "delta": 4,
            "response": "地球仪停在一片海上。她说空白处也不是空白，只是地图还不够诚实。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch6_weather_note",
        "minTier": 2,
        "text": "窗外风向变了，米兰达教授立刻在笔记本上记下一行，像天气亲自交了一份作业。",
        "choices": [
          {
            "label": "问这也要记吗",
            "delta": 4,
            "response": "她说当然。地点不只是石头和名字，也包括风什么时候改变主意。"
          },
          {
            "label": "帮她看云",
            "delta": 3,
            "response": "你描述云层。她没有纠正你的比喻，只把其中能用的部分改成观察。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch6_missing_scale",
        "minTier": 1,
        "text": "她拿起一张没有比例尺的地图，沉默两秒，说这像一封不愿说真话的信。",
        "choices": [
          {
            "label": "问比例尺这么重要吗",
            "delta": 4,
            "response": "她说没有比例尺，远近就会任由傲慢安排。"
          },
          {
            "label": "帮她补上估算",
            "delta": 3,
            "response": "你们用已知距离推算。她说不完美的诚实，比精美的含糊可靠。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch7_compass_shiver",
        "minTier": 1,
        "text": "米兰达教授的指南针在城堡里轻轻乱颤，她看着指针，说霍格沃茨很不尊重北方。",
        "choices": [
          {
            "label": "问还能用吗",
            "delta": 4,
            "response": "她说能，只要你知道它什么时候不可靠。工具的诚实包括承认自己的脾气。"
          },
          {
            "label": "帮她记录偏差",
            "delta": 3,
            "response": "你们记下走廊位置，她说城堡也许需要一张诚实到会承认迷路的地图。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch7_coastline_lesson",
        "minTier": 2,
        "text": "她用手指沿着地图上海岸线移动，指尖很慢，像怕把海岸磨平。",
        "choices": [
          {
            "label": "问为什么这么慢",
            "delta": 4,
            "response": "她说因为曲折不是多余，许多人的生活就住在这些弯里。"
          },
          {
            "label": "说地图很漂亮",
            "delta": 3,
            "response": "她说漂亮可以是入口，但不能让人忘记那里真的有人住。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch7_mislabeled_town",
        "minTier": 1,
        "text": "米兰达发现地图上一座城镇拼错，立刻在旁边写下正确拼法，字迹坚定。",
        "choices": [
          {
            "label": "问拼错严重吗",
            "delta": 4,
            "response": "她说名字是地方递给外人的第一只手，握错了很失礼。"
          },
          {
            "label": "帮她查来源",
            "delta": 3,
            "response": "你们找到旧版拼写，她说错误也有历史，只是不能因此继续错。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch7_rain_measure",
        "minTier": 2,
        "text": "下雨时她把杯子放到窗台量雨水，像天气正在参加一场小测验。",
        "choices": [
          {
            "label": "问这样准吗",
            "delta": 3,
            "response": "她说不够准，但比只说“雨很大”诚实。"
          },
          {
            "label": "帮她记时间",
            "delta": 4,
            "response": "你记下开始时间，她满意地说观察一旦有了时间，就不会只剩情绪。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch7_home_distance",
        "minTier": 1,
        "text": "她在地图上量两个地方的距离，忽然说人们总以为远方只是一串数字。",
        "choices": [
          {
            "label": "问远方还是什么",
            "delta": 4,
            "response": "她说是路费、天气、胆量，以及有人在尽头等不等你。"
          },
          {
            "label": "安静听着",
            "delta": 3,
            "response": "她把尺子收起，像刚才那句话不适合再被量一次。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch8_folded_map",
        "minTier": 1,
        "text": "米兰达教授折地图时每条折痕都避开地名，像怕把城市折疼。",
        "choices": [
          {
            "label": "问为什么避开",
            "delta": 4,
            "response": "她说名字不该被折在看不见的地方。地图也需要礼貌。"
          },
          {
            "label": "帮她压平边角",
            "delta": 3,
            "response": "她提醒你别压住河口，说那里已经够拥挤了。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch8_border_argument",
        "minTier": 2,
        "text": "她讲边界时没有立刻画线，而是先讲线两边的人怎么来往。",
        "choices": [
          {
            "label": "问边界不是线吗",
            "delta": 4,
            "response": "她说在地图上是线，在人身上常常是桥、市场和亲戚。"
          },
          {
            "label": "说这样更复杂",
            "delta": 3,
            "response": "她点头，说地理一旦遇见人，就从来不肯保持简单。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch8_muddy_boots",
        "minTier": 1,
        "text": "她靴子上沾着泥，显然刚从户外回来，却先把泥土颜色记进本子。",
        "choices": [
          {
            "label": "问泥土也要记",
            "delta": 4,
            "response": "她说颜色会告诉你水、石头和路的脾气。泥从不只是脏。"
          },
          {
            "label": "递给她刷子",
            "delta": 3,
            "response": "她刷掉泥前先看了最后一眼，像告别一段路。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch8_wrong_north",
        "minTier": 2,
        "text": "一张学生作业把北方标错，米兰达教授没有立刻打叉，而是在旁边写“世界从这里开始迷路”。",
        "choices": [
          {
            "label": "问这算严重吗",
            "delta": 4,
            "response": "她说很严重。北方错了，所有自信都会一起走偏。"
          },
          {
            "label": "帮她画正确箭头",
            "delta": 3,
            "response": "你重新标出方向，她说箭头小，责任很大。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch8_window_route",
        "minTier": 1,
        "text": "她从窗口看向远处小路，忽然说那条路比地图上画得更弯。",
        "choices": [
          {
            "label": "问地图错了吗",
            "delta": 3,
            "response": "她说地图简化了。简化不是罪，但忘记自己简化过就是罪。"
          },
          {
            "label": "问她去过吗",
            "delta": 4,
            "response": "她说去过，鞋知道的路比纸多。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch9_ruler_shadow",
        "minTier": 1,
        "text": "米兰达教授用尺量地图距离，又检查尺子的影子有没有遮住地名。",
        "choices": [
          {
            "label": "问影子也要管吗",
            "delta": 4,
            "response": "她说观察者制造的遮挡最容易被观察者忽略。"
          },
          {
            "label": "帮她移灯",
            "delta": 3,
            "response": "灯光换了角度，地名露出来，她满意地点头。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch9_travel_stain",
        "minTier": 2,
        "text": "她的地图边缘有水渍，形状像一片不在图上的湖。",
        "choices": [
          {
            "label": "问怎么来的",
            "delta": 3,
            "response": "她说一场雨，一段坏路，以及她低估了云的决心。"
          },
          {
            "label": "说像新地形",
            "delta": 4,
            "response": "她笑说地图最怕这种幽默，但有时也最需要。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch9_student_home_map",
        "minTier": 1,
        "text": "学生在地图上找家乡，米兰达教授没有催，只把地图转到对方看得舒服的方向。",
        "choices": [
          {
            "label": "问为什么转地图",
            "delta": 4,
            "response": "她说找家的时候，世界应当稍微迁就一下人。"
          },
          {
            "label": "帮忙找地名",
            "delta": 3,
            "response": "你们找到小小的点，学生的肩膀一下放松。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch9_wrong_scale_again",
        "minTier": 2,
        "text": "她看到没有比例尺的草图，轻轻吸气，像忍住一场地理灾难。",
        "choices": [
          {
            "label": "问先改哪里",
            "delta": 4,
            "response": "她说先给距离诚实。没有诚实，漂亮线条只是在撒娇。"
          },
          {
            "label": "帮她补比例尺",
            "delta": 3,
            "response": "她画上比例尺后，整张图突然像愿意负责了。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch9_north_window",
        "minTier": 1,
        "text": "她站在窗边确认北方，表情像在和城堡不可靠的方向感谈判。",
        "choices": [
          {
            "label": "问霍格沃茨会干扰吗",
            "delta": 3,
            "response": "她说这里连楼梯都不守常理，方向当然也会有意见。"
          },
          {
            "label": "拿出指南针",
            "delta": 4,
            "response": "指针晃了晃，她说看，北方正在犹豫，这很霍格沃茨。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch10_river_story",
        "minTier": 1,
        "text": "米兰达教授说河流不只是线，还是人们决定在哪里停下、在哪里离开的理由。",
        "choices": [
          {
            "label": "问地图能画出来吗",
            "delta": 4,
            "response": "她说画不全，但好的地图至少知道自己画不全。"
          },
          {
            "label": "说这像故事",
            "delta": 3,
            "response": "她点头，说地理总在故事开始前先铺路。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch10_misfolded_map",
        "minTier": 2,
        "text": "有人把地图折坏，折痕穿过一座城。米兰达教授看起来像被冒犯了。",
        "choices": [
          {
            "label": "问能修吗",
            "delta": 3,
            "response": "她说能修纸，不能修对地图的态度。"
          },
          {
            "label": "帮她压平",
            "delta": 4,
            "response": "你们小心压平折痕，她说城市终于不用背着不属于它的山脊。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch10_compass_lie",
        "minTier": 1,
        "text": "她说指南针在霍格沃茨偶尔会撒谎，但撒谎也有规律。",
        "choices": [
          {
            "label": "问什么规律",
            "delta": 4,
            "response": "她说它总在你最自信时犹豫，这点很有教育意义。"
          },
          {
            "label": "拿出来试",
            "delta": 3,
            "response": "指针轻轻晃动，她说看，北方今天有社交焦虑。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch10_student_route",
        "minTier": 2,
        "text": "学生画了回寝室路线，米兰达教授先问他实际走过没有。",
        "choices": [
          {
            "label": "问不走也能画吧",
            "delta": 4,
            "response": "她说能，但没走过的地图常常对脚不负责任。"
          },
          {
            "label": "建议实地核对",
            "delta": 3,
            "response": "她满意地说地理学终于从纸上站起来了。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch10_faraway_home",
        "minTier": 1,
        "text": "她在地图边写下“远不是空白”，像是在提醒某个看不见的人。",
        "choices": [
          {
            "label": "问写给谁",
            "delta": 3,
            "response": "她说给所有把远方说得太轻的人。"
          },
          {
            "label": "说这句话很好",
            "delta": 4,
            "response": "她微笑，说如果学生记住这句，很多地图就不会被读得那么傲慢。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch11_map_smudge",
        "minTier": 1,
        "text": "米兰达教授发现地图上一处墨迹，把它圈起来标注“非真实沼泽”。",
        "choices": [
          {
            "label": "问需要标吗",
            "delta": 4,
            "response": "她说当然，地图上的错误若不承认，会让人以为那里真有泥。"
          },
          {
            "label": "帮她吸墨",
            "delta": 3,
            "response": "墨迹淡了些，她说好，沼泽危机减轻。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch11_path_memory",
        "minTier": 2,
        "text": "她说一条路的长度不只由距离决定，还由谁走、为什么走决定。",
        "choices": [
          {
            "label": "问地图怎么写",
            "delta": 4,
            "response": "她说地图写不完，但至少不该装作路只是一条线。"
          },
          {
            "label": "说这像人生",
            "delta": 3,
            "response": "她笑说地理学偶尔也会不小心说出人生。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch11_student_border",
        "minTier": 1,
        "text": "学生把边界画得很粗，米兰达教授问：“你想让它阻止什么？”",
        "choices": [
          {
            "label": "问边界也有意图？",
            "delta": 4,
            "response": "她说画边界的人有意图，线只是替他沉默。"
          },
          {
            "label": "帮学生重画",
            "delta": 3,
            "response": "线变细后，地图像终于愿意让人穿过去。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch11_weather_route",
        "minTier": 2,
        "text": "她根据窗外云向改变下午路线，说地图若不看天气，就是半张地图。",
        "choices": [
          {
            "label": "问天气这么重要？",
            "delta": 3,
            "response": "她说雨能把最近的路变成最蠢的路。"
          },
          {
            "label": "帮她改路线",
            "delta": 4,
            "response": "你们换了一条绕路，她说这才叫尊重现实。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch11_home_dot",
        "minTier": 1,
        "text": "她指着地图上一点，说每个点若放大，都有人觉得那里是整个世界。",
        "choices": [
          {
            "label": "问您也有这样的点？",
            "delta": 4,
            "response": "她点头，没有说在哪儿，只把手指从地图上移开。"
          },
          {
            "label": "安静看地图",
            "delta": 3,
            "response": "那一小点忽然比刚才大了许多。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch12_map_edge",
        "minTier": 1,
        "text": "米兰达教授说地图边缘最危险，因为人们总以为边缘之外不重要。",
        "choices": [
          {
            "label": "问边缘之外是什么",
            "delta": 4,
            "response": "她说别人的中心。"
          },
          {
            "label": "记下这句",
            "delta": 3,
            "response": "她点头，说地理学若只能看见自己站的地方，就太小了。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch12_rain_path",
        "minTier": 2,
        "text": "雨后她观察泥路上的脚印，说地图有时会临时写在地上。",
        "choices": [
          {
            "label": "问能读出来？",
            "delta": 4,
            "response": "她说能读出谁急、谁绕路、谁踩进了本可避开的水坑。"
          },
          {
            "label": "帮她看脚印",
            "delta": 3,
            "response": "你发现一串很小的脚印，她说看，地图开始有角色了。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch12_student_scale",
        "minTier": 1,
        "text": "学生把城堡画得巨大，把村庄画得很小，米兰达教授问他是否因为住在城堡里。",
        "choices": [
          {
            "label": "问这是偏见吗",
            "delta": 4,
            "response": "她说是视角。视角不该被骂，但必须被认出。"
          },
          {
            "label": "帮学生重画",
            "delta": 3,
            "response": "村庄变大后，地图不再像只属于城堡。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch12_compass_case",
        "minTier": 2,
        "text": "她把指南针收进小盒前轻敲一下，说今天辛苦了。",
        "choices": [
          {
            "label": "问对工具说话？",
            "delta": 3,
            "response": "她说经常帮你不迷路的东西，值得一句感谢。"
          },
          {
            "label": "也向它道谢",
            "delta": 4,
            "response": "她笑着说很好，方向感需要仪式维持。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch12_far_route",
        "minTier": 1,
        "text": "她说最短路线有时不是最好路线，因为人还需要避开疲惫、雨和不想遇见的人。",
        "choices": [
          {
            "label": "问这也算地理？",
            "delta": 4,
            "response": "她说当然。地理从不只属于石头。"
          },
          {
            "label": "说很真实",
            "delta": 3,
            "response": "她微笑，说地图若不真实，只是漂亮谎言。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch13_chart_line",
        "minTier": 1,
        "text": "米兰达教授在星图上画线，手很稳，像不愿让任何一颗星被粗心牵错。",
        "choices": [
          {
            "label": "问线代表什么",
            "delta": 4,
            "response": "她说代表关系，也代表我们承认自己看不完天空时的谦逊。"
          },
          {
            "label": "帮她压纸",
            "delta": 3,
            "response": "羊皮纸不再卷起，她说观测首先需要让纸安静。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch13_cloud_patience",
        "minTier": 2,
        "text": "云遮住星空，她没有抱怨，只让学生记录“未能观测”的原因。",
        "choices": [
          {
            "label": "问空白也算记录？",
            "delta": 4,
            "response": "她说当然。诚实的空白比编造的星光更有价值。"
          },
          {
            "label": "一起等云开",
            "delta": 3,
            "response": "云层慢慢移动，她的耐心像夜色一样稳定。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch13_student_wonder",
        "minTier": 1,
        "text": "有学生第一次看见土星环，米兰达教授没有立刻讲定义，只让那声惊叹多停了一会儿。",
        "choices": [
          {
            "label": "问为什么不讲",
            "delta": 4,
            "response": "她说惊叹是理解的门，教师不该急着把门当黑板用。"
          },
          {
            "label": "也看一眼",
            "delta": 3,
            "response": "镜筒里的光很小，却足够让人忘记寒冷。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch13_old_telescope",
        "minTier": 2,
        "text": "她擦拭一架旧望远镜，动作像对一位脾气古怪的同事表示尊重。",
        "choices": [
          {
            "label": "问它很老吗",
            "delta": 4,
            "response": "她说老到见过许多学生第一次仰头，也见过他们毕业后不再回来。"
          },
          {
            "label": "帮她擦镜筒",
            "delta": 3,
            "response": "她提醒你轻一点，说老东西不怕慢，怕被当成废物。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch13_constellation_story",
        "minTier": 1,
        "text": "她说星座故事很美，但美不代表它们能替你观测。",
        "choices": [
          {
            "label": "问故事没用吗",
            "delta": 4,
            "response": "她说有用，故事让人抬头，数据让人看清。"
          },
          {
            "label": "记下两者",
            "delta": 3,
            "response": "她点头，说浪漫若愿意和准确同行，就会走得更远。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch14_red_star",
        "minTier": 1,
        "text": "米兰达教授指向一颗泛红的星，说颜色有时是温度写给距离的信。",
        "choices": [
          {
            "label": "问能读懂吗",
            "delta": 4,
            "response": "她说只能读一部分，所以观测者应当保持谦逊。"
          },
          {
            "label": "继续看",
            "delta": 3,
            "response": "那点红光很远，却在望远镜里安静地燃着。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch14_careful_focus",
        "minTier": 2,
        "text": "她调整望远镜焦距时让学生轮流看，强调别替下一个人弄坏清晰。",
        "choices": [
          {
            "label": "问这也算礼貌？",
            "delta": 4,
            "response": "她说当然。公共清晰需要公共责任。"
          },
          {
            "label": "帮她提醒",
            "delta": 3,
            "response": "学生们动作小心了许多，镜筒终于不再被粗鲁扭动。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch14_missed_meteor",
        "minTier": 1,
        "text": "一颗流星划过时，有学生低头错过了。米兰达教授没有责备，只说错过也是夜空课程的一部分。",
        "choices": [
          {
            "label": "问这也能学？",
            "delta": 4,
            "response": "她说能。错过会教人下次如何在场。"
          },
          {
            "label": "安慰学生",
            "delta": 3,
            "response": "学生重新抬头，她把下一片天空指给他看。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch14_star_names",
        "minTier": 2,
        "text": "她说星名像旧语言留下的门牌，有些门早已无人居住，却仍值得辨认。",
        "choices": [
          {
            "label": "问最喜欢哪个",
            "delta": 4,
            "response": "她念出一个名字，发音很轻，像怕惊动遥远的光。"
          },
          {
            "label": "跟着读",
            "delta": 3,
            "response": "你读得不准，她耐心纠正，没有一点嘲笑。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch14_night_discipline",
        "minTier": 1,
        "text": "凌晨的塔楼很冷，她仍要求记录格式清楚，说浪漫不能替代日期。",
        "choices": [
          {
            "label": "说您很严格",
            "delta": 4,
            "response": "她说星空已经足够辽阔，笔记就不必再漫无边际。"
          },
          {
            "label": "帮她分发记录纸",
            "delta": 3,
            "response": "纸张在夜风里发抖，她用镇纸稳稳压住。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch15_lens_fog",
        "minTier": 1,
        "text": "米兰达教授擦去镜片雾气，说急促呼吸也会暂时遮住宇宙。",
        "choices": [
          {
            "label": "问要怎么办",
            "delta": 4,
            "response": "她说先慢下来。星星不会因你慢半分钟就离开。"
          },
          {
            "label": "帮她递布",
            "delta": 3,
            "response": "镜片清亮后，星点重新出现。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch15_failed_observation",
        "minTier": 2,
        "text": "一次观测失败，她让学生完整记录失败条件，语气像这同样值得尊重。",
        "choices": [
          {
            "label": "问失败也要写？",
            "delta": 4,
            "response": "她说不写失败，就会把未来的人送回同一个坑。"
          },
          {
            "label": "一起整理",
            "delta": 3,
            "response": "记录完成后，失败显得不再白费。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch15_night_tea",
        "minTier": 1,
        "text": "她在塔楼上倒出一小杯热茶，杯口白汽很快被夜风吹薄。",
        "choices": [
          {
            "label": "问冷吗",
            "delta": 4,
            "response": "她说冷，但清醒。天文课常常用不舒适换准确。"
          },
          {
            "label": "递给她披肩",
            "delta": 3,
            "response": "她道谢，披上后继续调整星图。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch15_student_poetry",
        "minTier": 2,
        "text": "学生把星星写得太浪漫，她没有删掉，只在旁边要求补上方位和时间。",
        "choices": [
          {
            "label": "问不能只写美吗",
            "delta": 4,
            "response": "她说可以写美，但美若愿意带上坐标，就更不容易飘散。"
          },
          {
            "label": "帮他查方位",
            "delta": 3,
            "response": "诗意旁边多了准确数据，反而更有重量。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch15_long_light",
        "minTier": 1,
        "text": "她说星光走了很久才抵达眼睛，所以看见本身就是一种迟到的会面。",
        "choices": [
          {
            "label": "问会寂寞吗",
            "delta": 4,
            "response": "她说也许，但迟到不等于无意义。"
          },
          {
            "label": "继续看着",
            "delta": 3,
            "response": "远处星光沉默，却像真的刚刚赴约。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch16_star_mistake",
        "minTier": 1,
        "text": "米兰达教授纠正一处星图错误，说错星名并不可怕，可怕的是不愿重新抬头。",
        "choices": [
          {
            "label": "问重新看就行？",
            "delta": 4,
            "response": "她说重新看是许多学科共同的美德。"
          },
          {
            "label": "一起校对",
            "delta": 3,
            "response": "星图清楚后，夜空像被擦亮一角。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch16_telescope_queue",
        "minTier": 2,
        "text": "她安排学生轮流看望远镜，连最兴奋的人也不能多占时间。",
        "choices": [
          {
            "label": "问为什么严格",
            "delta": 4,
            "response": "她说天空给每个人都很远，望远镜就更该公平。"
          },
          {
            "label": "帮她计时",
            "delta": 3,
            "response": "队伍流动起来，没有人被落下。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch16_cloud_note",
        "minTier": 1,
        "text": "云遮住观测目标，她在记录上写“云层厚，耐心不足”，随后把后半句划掉。",
        "choices": [
          {
            "label": "问谁耐心不足",
            "delta": 4,
            "response": "她说是她。教师也需要校正自己。"
          },
          {
            "label": "说可以留下",
            "delta": 3,
            "response": "她想了想，重新写成“观测者情绪：略急”。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch16_student_story",
        "minTier": 2,
        "text": "学生给星座编故事，她听完后先说故事好，再要求标出真实星位。",
        "choices": [
          {
            "label": "问两者都要？",
            "delta": 4,
            "response": "她说想象力若知道自己站在哪里，会更自由。"
          },
          {
            "label": "帮他标星位",
            "delta": 3,
            "response": "故事没有变小，反而更像能被找到。"
          }
        ]
      },
      {
        "id": "miranda_year1_chat_batch16_dawn_walk",
        "minTier": 1,
        "text": "下塔楼时天快亮了，米兰达教授说最难的是让学生困倦时仍尊重楼梯。",
        "choices": [
          {
            "label": "问有人摔过？",
            "delta": 4,
            "response": "她说足够多，多到她对黎明的浪漫保持谨慎。"
          },
          {
            "label": "慢慢下楼",
            "delta": 3,
            "response": "她满意地说这就是观星课最后一项安全训练。"
          }
        ]
      }
    ]
  }
};

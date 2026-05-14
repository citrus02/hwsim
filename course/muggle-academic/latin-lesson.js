/**
 * latin-lesson.js
 * 麻瓜学术系 · 拉丁语分科 · 每课完整课堂内容
 * 教授：米兰达·珀西瓦尔（Miranda Percival）
 *
 * 风格：严谨、精确、相信语言是最古老的魔法
 * 教学方式：讲解、示范、让学生自己发现规律
 * 特色：融入魔法世界视角，将拉丁语与咒语词源相联系
 */

export const lessonMap = {

  // ════════════════════════════════════════
  // 第1章 拉丁语的声音
  // ════════════════════════════════════════

  1: {
    atmosphere: "拉丁语教室在城堡西塔楼顶层，窗外是湖面的灰光。墙上挂着一幅手抄体字母表，墨迹极工整。米兰达·珀西瓦尔站在讲台后，细头钢笔搁在牛津拉丁语词典旁，另一边是一本磨旧的咒语词源手册。她没有看任何人。",
    opening: "等最后一个学生坐下，她拿起粉笔在黑板正中写了一个词：Lumos。\n「你们都认识这个词。」她的声音清晰得像水晶，「但你们不知道它为什么是这个声音，不是别的。」她在 Lumos 下面画了一条横线，「今天我们学四件事：拉丁语有哪些字母，元音怎么发音，辅音怎么发音，音节怎么划分。学完之后，你们就能读出任何一个拉丁语单词——包括你们每天念的咒语。」她停了一秒，「开始。」",
    keyPoints: [
      {
        point: "拉丁字母表：23个字母",
        blackboardQ: {
          type: "formulas",
          label: "拉丁字母表",
          lines: [
            "A B C D E F G H I K L M",
            "N O P Q R S T V X Y Z",
            "",
            "共 23 个字母",
            "没有 J, U, W"
          ]
        },
        question: {
          leadIn: "珀西瓦尔在黑板上写下一行字母。「拉丁语——古典拉丁语——使用23个字母。」她逐个点过，「A、B、C、D、E、F、G、H、I、K、L、M、N、O、P、Q、R、S、T、V、X、Y、Z。」她在三个位置划了空格，「注意：没有J，没有U，没有W。这三个是后来才加进去的。」她转身，「I 兼任 J 的角色，V 兼任 U 和 W 的角色。所以你们在古罗马铭文上看到的 V，读起来可能是 U 的音。」",
          text: "「古典拉丁字母表中，哪个字母不存在？」",
          options: ["K", "J", "Y"],
          answer: 1
        },
        contextRight: "「对。」珀西瓦尔在 J 的位置画了一个叉。「J 不在古典拉丁字母表中。你们在咒语里看到的 J，是中世纪以后才从 I 分化出来的。」她停了一秒，「同理，U 和 W 也是后来才从 V 分出来的。古典时期只有一个 V，它既是辅音也是元音。」",
        contextWrong: "她没有表情，只是在 J 的位置画了一个叉。「J 不在古典拉丁字母表中。」她重复了一遍，「J 是中世纪以后才从 I 分化出来的。K 和 Y 都在——K 只用于极少数借词，Y 用于希腊借词，但它们存在。」她停顿，「记住：23个字母。没有J，没有U，没有W。」",
        blackboard: {
          type: "formulas",
          label: "拉丁字母表",
          lines: [
            "A B C D E F G H I K L M",
            "N O P Q R S T V X Y Z",
            "",
            "23 个字母",
            "X  J  -->  由 I 分化",
            "X  U  -->  由 V 分化",
            "X  W  -->  由 V 分化"
          ],
          note: "I 兼任 J，V 兼任 U/W"
        }
      },
      {
        point: "五个元音：每个只有一种发音",
        blackboardQ: {
          type: "formulas",
          label: "拉丁语元音",
          lines: [
            "a  =  [a:]  如 fAther",
            "e  =  [e:]  如 thEY",
            "i  =  [i:]  如 machIne",
            "o  =  [o:]  如 bOAt",
            "u  =  [u:]  如 rUde",
            "",
            "每个元音只有一种发音"
          ],
          audio: [
            { text: "a", src: "audio/latin/lesson-1/vowel-a.wav" },
            { text: "e", src: "audio/latin/lesson-1/vowel-e.wav" },
            { text: "i", src: "audio/latin/lesson-1/vowel-i.wav" },
            { text: "o", src: "audio/latin/lesson-1/vowel-o.wav" },
            { text: "u", src: "audio/latin/lesson-1/vowel-u.wav" }
          ]
        },
        question: {
          leadIn: "珀西瓦尔在黑板上写下五个字母。「拉丁语有五个元音：a、e、i、o、u。」她逐一发音，每个音都清晰稳定，「a——如英语 father 中的 a。e——如英语 they 中的 e。i——如英语 machine 中的 i。o——如英语 boat 中的 o。u——如英语 rude 中的 u。」她放下粉笔，「关键在这里：每个元音只有一种发音。不像英语——英语的 a 可以读成 cat、cake、car，但拉丁语的 a 永远是 a。永远。」",
          text: "「拉丁语元音 i 的发音接近英语哪个词中的 i？」",
          options: ["sit", "machine", "like"],
          answer: 1
        },
        contextRight: "「对。」珀西瓦尔点了一下头。「拉丁语的 i 读长音 [i:]，和英语 machine 里的 i 一样。不是 sit 里的短 i，不是 like 里的双元音 aɪ。只有一种发音。」她停了一秒，「这就是拉丁语比英语简单的地方——元音不会骗你。」",
        contextWrong: "她重复了一遍正确的发音。「[i:]——machine。」不带感情，「不是 sit，不是 like。拉丁语的 i 只有一种发音：长音 [i:]。」她在 machine 旁边画了一个圈，「记住这个参照。以后遇到 i，就发这个音。没有例外。」",
        blackboard: {
          type: "formulas",
          label: "拉丁语元音",
          lines: [
            "a  =  [a:]  如 fAther",
            "e  =  [e:]  如 thEY",
            "i  =  [i:]  如 machIne",
            "o  =  [o:]  如 bOAt",
            "u  =  [u:]  如 rUde"
          ],
          note: "每个元音只有一种发音，没有例外",
          audio: [
            { text: "a", src: "audio/latin/lesson-1/vowel-a.wav" },
            { text: "e", src: "audio/latin/lesson-1/vowel-e.wav" },
            { text: "i", src: "audio/latin/lesson-1/vowel-i.wav" },
            { text: "o", src: "audio/latin/lesson-1/vowel-o.wav" },
            { text: "u", src: "audio/latin/lesson-1/vowel-u.wav" }
          ]
        }
      },
      {
        point: "辅音的关键例外：c、g 和双辅音",
        blackboardQ: {
          type: "formulas",
          label: "辅音关键规则",
          lines: [
            "c  =  永远 [k]",
            "ca = [ka]",
            "ce = [ke]",
            "ci = [ki]",
            "co = [ko]",
            "cu = [ku]",
            "",
            "g  =  永远 [g]（永远硬）",
            "ga = [ga]",
            "ge = [ge]",
            "gi = [gi]",
            "go = [go]",
            "gu = [gu]",
            "",
            "双辅音发长音（停留时间加倍）：",
            "vil-la（别墅）  ll → [l:l]",
            "ter-ra（土地）  rr → [r:r]"
          ],
          audio: [
            { text: "ca", src: "audio/latin/lesson-1/consonant-ca.wav", lineIndex: 1 },
            { text: "ce", src: "audio/latin/lesson-1/consonant-ce.wav", lineIndex: 2 },
            { text: "ci", src: "audio/latin/lesson-1/consonant-ci.wav", lineIndex: 3 },
            { text: "co", src: "audio/latin/lesson-1/consonant-co.wav", lineIndex: 4 },
            { text: "cu", src: "audio/latin/lesson-1/consonant-cu.wav", lineIndex: 5 },
            { text: "ga", src: "audio/latin/lesson-1/consonant-ga.wav", lineIndex: 8 },
            { text: "ge", src: "audio/latin/lesson-1/consonant-ge.wav", lineIndex: 9 },
            { text: "gi", src: "audio/latin/lesson-1/consonant-gi.wav", lineIndex: 10 },
            { text: "go", src: "audio/latin/lesson-1/consonant-go.wav", lineIndex: 11 },
            { text: "gu", src: "audio/latin/lesson-1/consonant-gu.wav", lineIndex: 12 },
            { text: "villa", src: "audio/latin/lesson-1/double-villa.wav", lineIndex: 15 },
            { text: "terra", src: "audio/latin/lesson-1/double-terra.wav", lineIndex: 16 }
          ]
        },
        question: {
          leadIn: "「大多数辅音和英语一样，」珀西瓦尔说，「但有两个必须从现在就记住。」她在黑板上写下 c 和 g。「c——永远发 [k]。不管后面跟什么元音。ca 是 ka，ce 是 ke，ci 是 ki，co 是 ko，cu 是 ku。不是英语那种 c 在 e 前面变 s 的规则——拉丁语没有那种规则。」她指向 g，「g——永远发 [g]。ga、ge、gi、go、gu，永远是硬 g，不会变成英语 gym 里那种 [dʒ]。」她又写了一行，「还有双辅音：ll、ss、rr、tt——两个相同的辅音连在一起，要发长音，停留时间加倍。」",
          text: "「拉丁语单词 ceno（我用餐）中，c 的发音是？」",
          options: ["[s]（如英语 cent）", "[k]（如英语 cat）", "[ch]（如英语 church）"],
          answer: 1
        },
        contextRight: "「对。」珀西瓦尔没有多余的表情。「[k]。ceno 读作 ke-no。不管 c 后面跟的是 e 还是 i，永远是 [k]。这是古典拉丁语最铁的规则之一。」她停了一秒，「你们以后念咒语的时候会感谢这条规则的——至少 c 不会骗你。」",
        contextWrong: "她重复了一遍。「ke-no。」只重复一次，不解释。「c 在拉丁语中永远发 [k]。不是 [s]，不是 [ch]。英语里 c 在 e、i 前面会变软，拉丁语不会。」她在 ceno 上方写了一个 k，「记住：c 永远硬。没有例外。」",
        blackboard: {
          type: "formulas",
          label: "辅音关键规则",
          lines: [
            "c  =  永远 [k]",
            "ca = [ka]",
            "ce = [ke]",
            "ci = [ki]",
            "co = [ko]",
            "cu = [ku]",
            "",
            "g  =  永远 [g]（永远硬）",
            "ga = [ga]",
            "ge = [ge]",
            "gi = [gi]",
            "go = [go]",
            "gu = [gu]",
            "",
            "双辅音发长音（停留时间加倍）：",
            "vil-la（别墅）  ll → [l:l]",
            "ter-ra（土地）  rr → [r:r]"
          ],
          note: "c 和 g 永远硬，不会软化",
          audio: [
            { text: "ca", src: "audio/latin/lesson-1/consonant-ca.wav", lineIndex: 1 },
            { text: "ce", src: "audio/latin/lesson-1/consonant-ce.wav", lineIndex: 2 },
            { text: "ci", src: "audio/latin/lesson-1/consonant-ci.wav", lineIndex: 3 },
            { text: "co", src: "audio/latin/lesson-1/consonant-co.wav", lineIndex: 4 },
            { text: "cu", src: "audio/latin/lesson-1/consonant-cu.wav", lineIndex: 5 },
            { text: "ga", src: "audio/latin/lesson-1/consonant-ga.wav", lineIndex: 8 },
            { text: "ge", src: "audio/latin/lesson-1/consonant-ge.wav", lineIndex: 9 },
            { text: "gi", src: "audio/latin/lesson-1/consonant-gi.wav", lineIndex: 10 },
            { text: "go", src: "audio/latin/lesson-1/consonant-go.wav", lineIndex: 11 },
            { text: "gu", src: "audio/latin/lesson-1/consonant-gu.wav", lineIndex: 12 },
            { text: "villa", src: "audio/latin/lesson-1/double-villa.wav", lineIndex: 15 },
            { text: "terra", src: "audio/latin/lesson-1/double-terra.wav", lineIndex: 16 }
          ]
        }
      },
      {
        point: "音节划分与重音规则",
        blackboardQ: {
          type: "formulas",
          label: "音节划分",
          lines: [
            "AM-i-cus  (朋友)    3 音节",
            "DO-mi-nus (主人)    3 音节",
            "LU-mos    (荧光)    2 音节",
            "",
            "每个音节包含一个元音",
            "重音规则：",
            "  两音节 --> 重音在倒数第2",
            "  三音节+ --> 看倒数第2音节长短"
          ],
          audio: [
            { text: "amicus",  src: "audio/latin/lesson-1/word-amicus.wav" },
            { text: "dominus", src: "audio/latin/lesson-1/word-dominus.wav" },
            { text: "lumos",   src: "audio/latin/lesson-1/word-lumos.wav" }
          ]
        },
        question: {
          leadIn: "珀西瓦尔在黑板上写下 am-i-cus。「音节——以元音为中心的发音单位。每个音节必须包含一个元音。am-i-cus：a-mi-cus，三个元音，三个音节。」她用竖线把单词切开，「划音节就是找元音，一个元音一个音节。」她又写了 do-mi-nus，「重音——拉丁语的重音有固定规则。两个音节的词，重音永远在倒数第二个音节：LU-mos。」她指着黑板上的规则，「三个或更多音节的词，看倒数第二个音节：如果它是长音节，重音就在它上面；如果它是短音节，重音就往前移到倒数第三个。」",
          text: "「两个音节的拉丁语单词，重音在哪个音节？」",
          options: ["第一个（倒数第二）", "最后一个", "随便哪个都行"],
          answer: 0
        },
        contextRight: "「对。」珀西瓦尔点了一下头。「两个音节的词，重音永远在第一个——也就是倒数第二个。LU-mos，LU。」她在黑板上补了一条线，「三个音节的词，看倒数第二个音节：pu-EL-la 的 el 是长音节，重音就落在 EL，不是第一个音节。」她停了一秒，「拉丁语的重音是可以预测的，不像英语那样毫无规律。」",
        contextWrong: "她没有表情。「两个音节，重音在倒数第二个——也就是第一个音节。」她在 LU-mos 的 LU 下面画了一条线，「LU-mos。永远如此。拉丁语的重音是可以预测的，不像英语。」她停顿，「这是拉丁语比英语简单的又一个地方。」",
        blackboard: {
          type: "formulas",
          label: "音节与重音",
          lines: [
            "音节：每个元音 = 一个音节",
            "",
            "AM-i-cus （朋友）",
            "DO-mi-nus（主人）",
            "LU-mos   （荧光闪烁）",
            "NO-x     （夜）",
            "CE-no    （我用餐）",
            "pu-EL-la （女孩）",
            "",
            "重音规则：",
            "2 音节词 --> 重音在倒数第2",
            "  LU-mos",
            "3+音节词 --> 看倒数第2音节长短",
            "  长 --> 重音在倒数第2",
            "  短 --> 重音在倒数第3"
          ],
          note: "拉丁语重音可预测，无例外",
          audio: [
            { text: "amicus",  src: "audio/latin/lesson-1/word-amicus.wav",  lineIndex: 2 },
            { text: "dominus", src: "audio/latin/lesson-1/word-dominus.wav", lineIndex: 3 },
            { text: "lumos",   src: "audio/latin/lesson-1/word-lumos.wav",   lineIndex: 4 },
            { text: "nox",     src: "audio/latin/lesson-1/word-nox.wav",     lineIndex: 5 },
            { text: "ceno",    src: "audio/latin/lesson-1/word-ceno.wav",    lineIndex: 6 },
            { text: "puella",  src: "audio/latin/lesson-1/word-puella.wav",  lineIndex: 7 }
          ]
        }
      }
    ],
    lessonSummary: "今天学了四件事：第一，古典拉丁字母表只有23个字母——没有J、U、W，I兼任J，V兼任U和W。第二，五个元音每个只有一种发音，不会像英语那样变来变去。第三，辅音里c永远发[k]、g永远发[g]，双辅音要发长音。第四，音节以元音划分，两个音节的词重音永远在第一个音节。",
    nextLessonPreview: "下一课，我们用这些字母和发音搭建第一个句子——主格和宾格。你们会发现，拉丁语里一个词的尾巴变了，它在句子里的角色就变了。"
  },

  2: {
    atmosphere: "学生们面前的课桌上放着拉丁语名词变格表。珀西瓦尔教授在黑板上写下名词变格范例，她的钢笔在纸上划出精确的字迹。",
    opening: "「名词有格的变化。」珀西瓦尔写下 'puella'（女孩），「今天我们学习主格和宾格——动作的主语与宾语。」",
    keyPoints: [
      {
        point: "主格名词变格",
        context: "「主格表示动作的执行者。」珀西瓦尔举例：'Puella cantat'（女孩唱歌）。「puella是主格，是句子的主语。第一变格法名词主格以-a结尾。」"
      },
      {
        point: "宾格名词变格",
        context: "「宾格表示动作的承受者。」她写下：'Magister videt puellam'（老师看见女孩）。「puellam是宾格，作为videt（看见）的宾语。第一变格法宾格以-am结尾。」"
      },
      {
        point: "动词与宾语的一致",
        context: "「拉丁语的动词会根据主语变化。」珀西瓦尔展示：'amo'（我爱）、'amas'（你爱）、'amat'（他/她爱）。「动词的词尾告诉我们谁在做动作。」"
      },
      {
        point: "SOV语序",
        context: "「拉丁语的基本语序是主语-宾语-谓语。」她举例：'Puella librum legit'（女孩读书）。「记住这个顺序，就像记住咒语的正确手势顺序。」"
      }
    ]
  },

  3: {
    atmosphere: "黑板上写着第一变位动词的变位表。珀西瓦尔教授在讲解动词变位，她的语调平稳，不带多余的感情。",
    opening: "「动词是句子的核心。」珀西瓦尔指着黑板，「今天我们学习第一变位动词的现在时变位。」",
    keyPoints: [
      {
        point: "动词词干识别",
        context: "「第一变位动词的词干是去掉词尾-are。」珀西瓦尔举例：'amare'（爱）→词干是'am-'。「找到词干是变位的第一步。」"
      },
      {
        point: "现在时词尾变化",
        context: "「现在时的词尾根据人称变化：-o（我）、-s（你）、-t（他/她）、-mus（我们）、-tis（你们）、-nt（他们）。」她写下完整变位：amo, amas, amat, amamus, amatis, amant。"
      },
      {
        point: "人称与数的一致",
        context: "「动词必须与主语在人称和数上保持一致。」珀西瓦尔举例：'Tu amas'（你爱）、'Nos amamus'（我们爱）。「就像魔杖必须与巫师匹配才能发挥最大效果。」"
      },
      {
        point: "简单句子翻译",
        context: "「把拉丁语翻译成英语时，要调整语序。」她示范：'Amicus meus librum legit' → 'My friend reads the book'。「记住SOV到SVO的转换。」"
      }
    ]
  },

  4: {
    atmosphere: "教室的墙上贴满了形容词变格图表。珀西瓦尔教授在讲解形容词与名词的配合，学生们在练习纸上记录。",
    opening: "「形容词修饰名词，必须与名词保持一致。」珀西瓦尔在黑板上写下 'bonus puer'（好男孩），「今天我们学习形容词的性、数、格一致。」",
    keyPoints: [
      {
        point: "形容词三性",
        context: "「拉丁语形容词有三种性：阳性、阴性、中性。」珀西瓦尔举例：bonus（阳性）、bona（阴性）、bonum（中性）。「形容词的性必须与它修饰的名词一致。」"
      },
      {
        point: "性数格一致原则",
        context: "「形容词必须在性、数、格上都与名词保持一致。」她演示：'boni pueri'（好男孩们，主格复数）、'bonas puellas'（好女孩们，宾格复数）。「这就像魔药材料必须按正确的比例搭配。」"
      },
      {
        point: "形容词变格",
        context: "「第一/第二变格法形容词与名词变格相似。」珀西瓦尔列出变位表，「阳性变格如第一变格法名词，阴性如第二变格法名词。」"
      },
      {
        point: "名词形容词搭配",
        context: "「把形容词放在名词旁边。」她举例：'Magna puella'（大女孩）、'Parvus liber'（小书）。「形容词通常放在名词前面，但也可以放在后面。」"
      }
    ]
  },

  5: {
    atmosphere: "黑板上画着拉丁语句法分析图。珀西瓦尔教授用细头钢笔在图上标注，每个标记都精确无比。",
    opening: "「拉丁语的语序与英语不同。」珀西瓦尔指着图，「今天我们学习SOV语序和简单句结构。」",
    keyPoints: [
      {
        point: "主-宾-谓语序",
        context: "「拉丁语的基本语序是主语-宾语-谓语。」珀西瓦尔举例：'Caesar pontem aedificat'（凯撒建造桥梁）。「Caesar是主语，pontem是宾语，aedificat是谓语。」"
      },
      {
        point: "句子成分识别",
        context: "「识别句子成分是理解的关键。」她分析句子：'Magister discipulos docet'（老师教学生）。「magister是主格主语，discipulos是宾格宾语，docet是谓语动词。」"
      },
      {
        point: "基本翻译技巧",
        context: "「翻译时先找主语，再找宾语，最后找动词。」珀西瓦尔演示：'Aquila cibum capit' → 'The eagle catches food'。「调整语序使其符合英语习惯。」"
      },
      {
        point: "常见句式结构",
        context: "「最常见的句式是陈述句。」她列出：'Subiectum obiectum verbum'（主语 宾语 动词）。「记住这个公式，就能理解大多数简单句。」"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第2章 格的系统
  // ════════════════════════════════════════

  6: {
    atmosphere: "学生们在练习纸上填写名词变格表。珀西瓦尔教授在教室里走动，她的脚步轻盈，目光锐利。",
    opening: "「拉丁语有六个格。」珀西瓦尔拿起一张练习纸，「今天我们学习与格——间接宾语。」",
    keyPoints: [
      {
        point: "与格的功能",
        context: "「与格表示动作的间接对象。」珀西瓦尔举例：'Magister discipulo librum dat'（老师给学生一本书）。「discipulo是与格，表示书是给学生的。」"
      },
      {
        point: "名词与格变格",
        context: "「第一变格法名词与格以-ae结尾，第二变格法以-o结尾。」她写下：puella（主格）→ puellae（与格），puer（主格）→ puero（与格）。"
      },
      {
        point: "与格动词搭配",
        context: "「有些动词要求与格宾语。」珀西瓦尔列出：'dare'（给）、'credere'（相信）、'servire'（服务）。「这些动词后面通常接与格。」"
      },
      {
        point: "给予类动词",
        context: "「表示给予、告诉、展示的动词常用与格。」她举例：'Dico tibi veritatem'（我告诉你真相）。「tibi是与格，表示'对你'。」"
      }
    ]
  },

  7: {
    atmosphere: "黑板上写着夺格变格表。珀西瓦尔教授在讲解夺格的多重用法，她的语调平稳，不带多余的感情。",
    opening: "「夺格是用途最广的格。」珀西瓦尔指着黑板，「今天我们学习夺格表示工具、伴随和来源。」",
    keyPoints: [
      {
        point: "夺格的多重用法",
        context: "「夺格可以表示工具、方式、伴随、来源等。」珀西瓦尔举例：'Gladio pugnat'（用剑战斗）、'Amico ambulat'（和朋友一起散步）。"
      },
      {
        point: "夺格变格",
        context: "「第一变格法名词夺格以-a结尾，第二变格法以-o结尾。」她写下：puella（主格）→ puella（夺格），puer（主格）→ puero（夺格）。"
      },
      {
        point: "夺格介词",
        context: "「有些介词要求夺格宾语。」珀西瓦尔列出：'cum'（和...一起）、'ex'（从...）、'in'（在...里）。「记住这些介词搭配。」"
      },
      {
        point: "工具与方式表达",
        context: "「用夺格表示做事的工具或方式。」她举例：'Lapis aedificatur'（用石头建造）。「就像用魔杖施展魔法——魔杖就是夺格。」"
      }
    ]
  },

  8: {
    atmosphere: "教室的墙上贴满了属格用法图表。珀西瓦尔教授在讲解属格表示所有关系，学生们在练习纸上记录。",
    opening: "「属格表示所属关系。」珀西瓦尔在黑板上写下 'liber magistri'（老师的书），「今天我们学习属格的用法。」",
    keyPoints: [
      {
        point: "属格表示所属",
        context: "「属格表示'的'的关系。」珀西瓦尔举例：'domus regis'（国王的房子）。「属格名词通常放在被修饰名词的后面。」"
      },
      {
        point: "属格变格",
        context: "「第一变格法名词属格以-ae结尾，第二变格法以-i结尾。」她写下：puella（主格）→ puellae（属格），puer（主格）→ pueri（属格）。"
      },
      {
        point: "属格位置",
        context: "「属格通常放在被修饰名词之后。」珀西瓦尔举例：'amicus puellae'（女孩的朋友）。「记住这个顺序。」"
      },
      {
        point: "描述性属格",
        context: "「属格也可以表示描述。」她举例：'vir magnae virtutis'（有伟大美德的人）。「这是属格的扩展用法。」"
      }
    ]
  },

  9: {
    atmosphere: "黑板上写着第二变位动词的变位表。珀西瓦尔教授在讲解第二变位动词，她的钢笔在纸上划出精确的字迹。",
    opening: "「第二变位动词以-ere结尾。」珀西瓦尔写下 'videre'（看），「今天我们学习第二变位动词的现在时。」",
    keyPoints: [
      {
        point: "第二变位词干",
        context: "「第二变位动词的词干是去掉词尾-ere。」珀西瓦尔举例：'videre'（看）→词干是'vid-'。「找到词干是变位的第一步。」"
      },
      {
        point: "现在时变位",
        context: "「现在时的词尾与第一变位类似，但有变化。」她写下：video（我看）、vides（你看）、videt（他/她看）、videmus（我们看）、videtis（你们看）、vident（他们看）。"
      },
      {
        point: "与第一变位的区别",
        context: "「第二变位动词词干以-e结尾。」珀西瓦尔对比：'amo'（爱，第一变位）vs 'video'（看，第二变位）。「注意词干的区别。」"
      },
      {
        point: "常见第二变位动词",
        context: "「常见的第二变位动词有：videre（看）、dicere（说）、habere（有）、tenere（保持）。」她列出这些动词，「记住它们，就像记住常用的咒语。」"
      }
    ]
  },

  10: {
    atmosphere: "教室的讲台上放着一本咒语词源手册。珀西瓦尔教授在讲解数词和基础词汇，特别强调咒语词根。",
    opening: "「数词是语言的基石。」珀西瓦尔翻开手册，「今天我们学习数词和基础词汇——包括咒语中常见的词根。」",
    keyPoints: [
      {
        point: "基数词与序数词",
        context: "「基数词表示数量：unus（一）、duo（二）、tres（三）。序数词表示顺序：primus（第一）、secundus（第二）。」珀西瓦尔列出基础数词。"
      },
      {
        point: "时间表达",
        context: "「拉丁语用夺格表示时间：'Hora tertia est'（现在是三点钟）。」她举例说明时间的表达方法。"
      },
      {
        point: "常用词汇积累",
        context: "「积累常用词汇：domus（房子）、liber（书）、magister（老师）、discipulus（学生）。」珀西瓦尔强调，「这些是构建句子的基础。」"
      },
      {
        point: "咒语中的拉丁词根",
        context: "「很多咒语来源于拉丁语。」珀西瓦尔指着手册，「'Lumos'来自'lux'（光），'Expecto'来自'exspecto'（期待），'Alohomora'包含'开'的词根。理解拉丁语，就能理解咒语的力量。」"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第3章 时态扩展
  // ════════════════════════════════════════

  11: {
    atmosphere: "黑板上画着时间轴，标注着未完成过去时的用法。珀西瓦尔教授用教鞭指着时间轴，讲解未完成过去时。",
    opening: "「未完成过去时描述持续的动作。」珀西瓦尔指着时间轴，「今天我们学习这个重要的过去时态。」",
    keyPoints: [
      {
        point: "未完成时含义",
        context: "「未完成过去时表示过去正在进行或习惯性的动作。」珀西瓦尔举例：'Cantabam'（我当时正在唱歌）。「它描述的是一个持续的状态。」"
      },
      {
        point: "变位规则",
        context: "「第一变位动词未完成时：词干+ -bam, -bas, -bat, -bamus, -batis, -bant。」她写下：amabam（我当时爱）、amabas（你当时爱）。"
      },
      {
        point: "与现在时的区别",
        context: "「现在时表示现在的动作，未完成时表示过去持续的动作。」珀西瓦尔对比：'amo'（我爱）vs 'amabam'（我当时爱）。"
      },
      {
        point: "场景描述",
        context: "「未完成时常用于描述背景或场景。」她举例：'Ibi erant multi homines'（当时那里有很多人）。「就像描绘一幅过去的画面。」"
      }
    ]
  },

  12: {
    atmosphere: "学生们在做完成时的练习。珀西瓦尔教授在巡视，偶尔停下来纠正错误，只重复一次正确版本。",
    opening: "「完成时表示已完成的动作。」珀西瓦尔在黑板上写了一个句子，「它描述一个已经结束的事件。」",
    keyPoints: [
      {
        point: "完成时构成",
        context: "「完成时由完成分词+助动词sum构成。」珀西瓦尔举例：'Amavi'（我爱过）= 'Amatus/a/um + sum'。「完成分词通常以-us/-a/-um结尾。」"
      },
      {
        point: "主动态完成时",
        context: "「主动态完成时直接用完成分词变化。」她写下：amavi（我爱过）、amavisti（你爱过）、amavit（他/她爱过）。"
      },
      {
        point: "不规则完成分词",
        context: "「有些动词的完成分词不规则。」珀西瓦尔列出：'videre'→'vidi'（我看见过）、'dicere'→'dixi'（我说过）。「这些需要特殊记忆。」"
      },
      {
        point: "时间表达",
        context: "「完成时表示动作已经完成。」她举例：'Librum legi'（我读完了书）。「强调动作的结果。」"
      }
    ]
  },

  13: {
    atmosphere: "黑板上写着大过去时的变位表。珀西瓦尔教授在讲解大过去时，她的语调平稳，没有多余的修饰。",
    opening: "「大过去时表示过去的过去。」珀西瓦尔翻开一本旧书，「它描述在另一个过去动作之前发生的事情。」",
    keyPoints: [
      {
        point: "大过去时含义",
        context: "「大过去时表示在过去某个时间点之前已经完成的动作。」珀西瓦尔举例：'Cenaveram cum venisti'（你到的时候我已经吃过饭了）。"
      },
      {
        point: "变位规则",
        context: "「大过去时由完成分词+助动词的未完成时构成。」她写下：amavaram（我当时已经爱过）、amavaras（你当时已经爱过）。"
      },
      {
        point: "与完成时的区别",
        context: "「完成时表示相对于现在已经完成，大过去时表示相对于过去已经完成。」珀西瓦尔对比两者的用法。"
      },
      {
        point: "叙事时序",
        context: "「在叙事中，大过去时用于倒叙或回忆更早发生的事情。」她举例说明如何在故事中使用大过去时。"
      }
    ]
  },

  14: {
    atmosphere: "学生们在练习间接引语。珀西瓦尔教授在黑板上写下间接引语的结构，她的钢笔在纸上划出精确的字迹。",
    opening: "「间接引语用于转述别人的话。」珀西瓦尔指着黑板，「今天我们学习如何将直接引语改为间接引语。」",
    keyPoints: [
      {
        point: "ut/ne引导从句",
        context: "「肯定句用ut引导：'Dicit ut veniat'（他说他要来）。否定句用ne引导：'Dicit ne veniat'（他说他不要来）。」"
      },
      {
        point: "时态变化",
        context: "「间接引语中，动词时态需要根据主句时态调整。」珀西瓦尔解释时态呼应规则。"
      },
      {
        point: "动词不定式用法",
        context: "「有些动词后面接不定式结构：'Dico te venire'（我说你来）。」她举例说明accusative + infinitive结构。"
      },
      {
        point: "转述技巧",
        context: "「转述时要注意人称和时态的变化。」珀西瓦尔示范如何正确转述句子。"
      }
    ]
  },

  15: {
    atmosphere: "黑板上画着关系从句的结构图。珀西瓦尔教授用细头钢笔在图上标注，每个标记都精确无比。",
    opening: "「关系从句用来修饰名词。」珀西瓦尔指着图，「今天我们学习关系代词qui, quae, quod的用法。」",
    keyPoints: [
      {
        point: "关系代词变格",
        context: "「qui（阳性）、quae（阴性）、quod（中性）的变格。」珀西瓦尔列出完整变格表。"
      },
      {
        point: "限定与非限定从句",
        context: "「限定性关系从句必不可少，非限定性从句用逗号隔开。」她举例说明两者的区别。"
      },
      {
        point: "先行词一致",
        context: "「关系代词必须与先行词在性、数上保持一致。」珀西瓦尔强调一致原则。"
      },
      {
        point: "翻译方法",
        context: "「翻译关系从句时，通常将其放在先行词前面。」她示范翻译技巧。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第4章 句法深化
  // ════════════════════════════════════════

  16: {
    atmosphere: "学生们在练习不定式结构。珀西瓦尔教授在黑板上写下不定式用法，她的书写工整得像印刷体。",
    opening: "「不定式是动词的名词形式。」珀西瓦尔指着黑板，「今天我们学习不定式的各种用法。」",
    keyPoints: [
      {
        point: "不定式用法",
        context: "「不定式可以作主语、宾语、定语等。」珀西瓦尔举例：'Amare est vivere'（爱就是生活）。"
      },
      {
        point: "accusative + infinitive",
        context: "「某些动词后接宾语+不定式结构：'Volumus te venire'（我们希望你来）。」她解释这个结构的用法。"
      },
      {
        point: "主语不定式",
        context: "「不定式可以作句子的主语：'Legere est bonum'（阅读是好的）。」"
      },
      {
        point: "目的表达",
        context: "「不定式可以表示目的：'Venio ut doceam'（我来是为了教）。」"
      }
    ]
  },

  17: {
    atmosphere: "教室的墙上贴满了分词用法图表。珀西瓦尔教授在讲解分词，学生们在练习纸上记录。",
    opening: "「分词是动词的形容词形式。」珀西瓦尔在黑板上写下分词形式，「今天我们学习现在分词和完成被动分词。」",
    keyPoints: [
      {
        point: "现在分词构成",
        context: "「现在分词由词干+-ans/-ens构成。」珀西瓦尔举例：'amans'（爱的）、'videns'（看的）。"
      },
      {
        point: "完成被动分词",
        context: "「完成被动分词由词干+-atus/-ata/-atum构成。」她举例：'amatus'（被爱的）、'vidatus'（被看见的）。"
      },
      {
        point: "分词作定语",
        context: "「分词可以作定语修饰名词：'puella amans'（爱的女孩）、'liber scriptus'（被写的书）。」"
      },
      {
        point: "独立夺格结构",
        context: "「独立夺格表示伴随情况：'Magistro dicente, discipuli audiunt'（老师说话时，学生们听）。」"
      }
    ]
  },

  18: {
    atmosphere: "黑板上写着属格的各种用法。珀西瓦尔教授在讲解属格的扩展用法，她的语调平稳，不带多余的感情。",
    opening: "「属格不仅仅表示所属。」珀西瓦尔指着黑板，「今天我们学习属格的扩展用法。」",
    keyPoints: [
      {
        point: "描述性属格",
        context: "「描述性属格表示性质或特征：'vir magnae virtutis'（有伟大美德的人）。」"
      },
      {
        point: "主观属格与客观属格",
        context: "「主观属格表示动作的发出者：'amor Dei'（上帝的爱——上帝爱）。客观属格表示动作的对象：'amor patriae'（对祖国的爱）。」"
      },
      {
        point: "品质属格",
        context: "「品质属格描述事物的品质：'homo bonae spei'（有良好希望的人）。」"
      },
      {
        point: "来源属格",
        context: "「来源属格表示来源：'filius regis'（国王的儿子）。」"
      }
    ]
  },

  19: {
    atmosphere: "学生们在分析拉丁语句子成分。珀西瓦尔教授在教室里走动，她的脚步轻盈，目光锐利。",
    opening: "「分析句子成分是理解拉丁语的关键。」珀西瓦尔拿起一张练习纸，「今天我们学习句子成分分析方法。」",
    keyPoints: [
      {
        point: "句法分析步骤",
        context: "「先找动词，再找主语和宾语，最后分析其他成分。」珀西瓦尔讲解分析步骤。"
      },
      {
        point: "主从结构识别",
        context: "「识别主句和从句，注意连接词和关系代词。」她举例说明如何区分主从结构。"
      },
      {
        point: "修饰关系判断",
        context: "「判断定语、状语等修饰成分与中心词的关系。」珀西瓦尔示范分析方法。"
      },
      {
        point: "复杂句拆解",
        context: "「将复杂句拆解为简单句来理解。」她演示如何拆解长句。"
      }
    ]
  },

  20: {
    atmosphere: "教室的讲台上放着一本词源词典。珀西瓦尔教授在讲解词根与词缀，特别强调拉丁语对英语的影响。",
    opening: "「拉丁语是英语词汇的重要来源。」珀西瓦尔翻开词典，「今天我们学习拉丁语词根与英语衍生词。」",
    keyPoints: [
      {
        point: "拉丁词根识别",
        context: "「常见的拉丁词根：dict（说）、port（带）、scrib（写）、spect（看）。」珀西瓦尔列出常见词根。"
      },
      {
        point: "常见词缀",
        context: "「前缀：pre-（前）、un-（不）、re-（再）。后缀：-tion、-ment、-able。」她解释词缀的作用。"
      },
      {
        point: "英语中的拉丁借词",
        context: "「很多英语单词来自拉丁语：education（教育）、science（科学）、hospital（医院）。」珀西瓦尔举例说明。"
      },
      {
        point: "词源追溯",
        context: "「追溯词源能帮助理解单词的本质。」她示范如何追溯单词的拉丁语来源。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第5章 词源学
  // ════════════════════════════════════════

  21: {
    atmosphere: "黑板上写着拉丁语对英语词汇的影响图表。珀西瓦尔教授在讲解这种影响，她的语气客观，不带偏好。",
    opening: "「英语中有大量拉丁语借词。」珀西瓦尔指着图表，「今天我们学习拉丁语对英语词汇的影响。」",
    keyPoints: [
      {
        point: "英语中的拉丁词汇",
        context: "「英语中约三分之一的词汇来自拉丁语。」珀西瓦尔举例说明。"
      },
      {
        point: "借词历史",
        context: "「拉丁语借词主要通过三个时期进入英语：罗马统治时期、基督教传入时期、文艺复兴时期。」珀西瓦尔解释借词的历史背景。"
      },
      {
        point: "词汇层次",
        context: "「拉丁语词汇通常更正式、学术化。」她举例：'begin'（日耳曼）vs 'commence'（拉丁语）。「两者意思相近，但语体不同。」"
      },
      {
        point: "词义演变",
        context: "「很多拉丁借词的意思发生了变化。」珀西瓦尔举例说明词义的演变过程。"
      }
    ]
  },

  22: {
    atmosphere: "教室的讲台上放着医学和法律词典。珀西瓦尔教授在讲解专业术语的拉丁根。",
    opening: "「医学和法律术语大量使用拉丁语。」珀西瓦尔翻开词典，「今天我们学习这些专业术语的拉丁根。」",
    keyPoints: [
      {
        point: "医学术语",
        context: "「医学术语多来自拉丁语和希腊语：cardio-（心脏）、neuro-（神经）、-ology（学科）。」珀西瓦尔举例说明。"
      },
      {
        point: "法律术语",
        context: "「法律术语大量使用拉丁语：pro bono、habeas corpus、ad hoc。」她解释这些术语的含义和用法。"
      },
      {
        point: "专业词汇构成",
        context: "「专业词汇通常由词根+词缀构成。」珀西瓦尔示范如何拆解专业术语。"
      },
      {
        point: "词根识别",
        context: "「识别词根是理解专业术语的关键。」她强调掌握词根的重要性。"
      }
    ]
  },

  23: {
    atmosphere: "黑板上写着林奈双名法的例子。珀西瓦尔教授在讲解科学命名法。",
    opening: "「科学命名法使用拉丁语。」珀西瓦尔指着黑板，「今天我们学习双名法与分类。」",
    keyPoints: [
      {
        point: "林奈双名法",
        context: "「双名法由属名+种加词构成。」珀西瓦尔举例：'Homo sapiens'（智人）。「属名大写，种加词小写。」"
      },
      {
        point: "属名与种加词",
        context: "「属名表示属，种加词表示种。」她解释命名规则。"
      },
      {
        point: "分类层级",
        context: "「分类层级：界、门、纲、目、科、属、种。」珀西瓦尔列出层级结构。"
      },
      {
        point: "拉丁语在科学中的地位",
        context: "「拉丁语是科学的国际语言。」她说明为什么科学使用拉丁语。"
      }
    ]
  },

  24: {
    atmosphere: "教室的讲台上放着一本咒语词源手册。珀西瓦尔教授在讲解咒语的拉丁词根。",
    opening: "「咒语源于拉丁语。」珀西瓦尔翻开手册，「今天我们深入分析咒语词根。」",
    keyPoints: [
      {
        point: "Lumos、Expecto、Alohomora等词根",
        context: "「'Lumos'来自'lux'（光），'Expecto'来自'exspecto'（期待），'Alohomora'包含'开'的词根。」珀西瓦尔拆解常见咒语。"
      },
      {
        point: "咒语结构分析",
        context: "「咒语通常由词根+词缀构成。」她分析咒语的结构特点。"
      },
      {
        point: "词源与魔力的联系",
        context: "「理解词源能帮助理解咒语的效果。」珀西瓦尔解释词源与魔法的关联。"
      },
      {
        point: "发音与效果",
        context: "「正确的发音至关重要。」她强调发音准确性对咒语效果的影响。"
      }
    ]
  },

  25: {
    atmosphere: "教室的墙上挂着罗马历史时间线。珀西瓦尔教授在讲解罗马世界背景。",
    opening: "「拉丁语诞生于罗马。」珀西瓦尔指着时间线，「今天我们了解罗马共和国与帝国。」",
    keyPoints: [
      {
        point: "罗马历史概览",
        context: "「罗马共和国（公元前509-27年）、罗马帝国（公元前27年-476年）。」珀西瓦尔概述罗马历史。"
      },
      {
        point: "拉丁语发展阶段",
        context: "「古典拉丁语、通俗拉丁语、中世纪拉丁语。」她解释拉丁语的发展阶段。"
      },
      {
        point: "文化背景对语言的影响",
        context: "「罗马的扩张将拉丁语带到欧洲各地。」珀西瓦尔说明文化背景对语言的影响。"
      },
      {
        point: "政治术语来源",
        context: "「很多政治术语来自拉丁语：senate（元老院）、republic（共和国）、emperor（皇帝）。」"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第6章 文本阅读
  // ════════════════════════════════════════

  26: {
    atmosphere: "学生们在阅读简化的拉丁文本。珀西瓦尔教授在讲解阅读技巧，她的语气平稳但充满智慧。",
    opening: "「阅读是学习拉丁语的关键。」珀西瓦尔打开一本拉丁语课本，「今天我们进行简化拉丁文阅读训练。」",
    keyPoints: [
      {
        point: "基础阅读技巧",
        context: "「先识别单词，再分析句子结构。」珀西瓦尔讲解阅读步骤。"
      },
      {
        point: "词汇识别",
        context: "「根据词根词缀识别单词。」她示范如何推断生词含义。"
      },
      {
        point: "句法分析",
        context: "「分析句子成分，注意语序。」珀西瓦尔示范句法分析方法。"
      },
      {
        point: "翻译实践",
        context: "「将拉丁语翻译成英语，注意调整语序。」她布置翻译练习。"
      }
    ]
  },

  27: {
    atmosphere: "教室的讲台上放着凯撒的《高卢战记》。珀西瓦尔教授在讲解这部历史著作。",
    opening: "「凯撒是伟大的军事家和作家。」珀西瓦尔翻开书，「今天我们阅读《高卢战记》节选。」",
    keyPoints: [
      {
        point: "历史文本特点",
        context: "「历史文本注重事实和细节。」珀西瓦尔说明历史文本的特点。"
      },
      {
        point: "军事术语",
        context: "「学习军事相关的拉丁语词汇。」她列出常见军事术语。"
      },
      {
        point: "叙事风格",
        context: "「凯撒的风格简洁、直接。」珀西瓦尔分析凯撒的写作风格。"
      },
      {
        point: "文化背景",
        context: "「了解高卢战争的历史背景。」她讲解历史背景知识。"
      }
    ]
  },

  28: {
    atmosphere: "学生们在阅读奥维德的《变形记》。珀西瓦尔教授在讲解这部神话作品。",
    opening: "「奥维德是古罗马最伟大的诗人之一。」珀西瓦尔翻开书，「今天我们阅读《变形记》节选。」",
    keyPoints: [
      {
        point: "神话文本",
        context: "「神话文本充满想象力和象征意义。」珀西瓦尔说明神话文本的特点。"
      },
      {
        point: "诗歌语言",
        context: "「诗歌语言富有韵律和美感。」她分析诗歌的语言特点。"
      },
      {
        point: "变形主题",
        context: "「变形是《变形记》的核心主题。」珀西瓦尔讲解变形主题的意义。"
      },
      {
        point: "文学手法",
        context: "「识别比喻、拟人等文学手法。」她举例说明文学手法的运用。"
      }
    ]
  },

  29: {
    atmosphere: "黑板上写着拉丁格言和铭文。珀西瓦尔教授在讲解这些古老的智慧。",
    opening: "「拉丁格言蕴含着古老的智慧。」珀西瓦尔指着黑板，「今天我们学习格言、铭文与箴言。」",
    keyPoints: [
      {
        point: "常见拉丁格言",
        context: "「Carpe diem（及时行乐）、Veni, vidi, vici（我来，我见，我征服）。」珀西瓦尔列举常见格言。"
      },
      {
        point: "铭文解读",
        context: "「解读古罗马铭文。」她示范如何解读铭文。"
      },
      {
        point: "箴言的智慧",
        context: "「箴言包含人生智慧。」珀西瓦尔讲解箴言的意义。"
      },
      {
        point: "引用场景",
        context: "「学习在适当场合引用拉丁格言。」她说明引用的场合。"
      }
    ]
  },

  30: {
    atmosphere: "教室的讲台上放着中世纪拉丁语文本。珀西瓦尔教授在讲解中世纪拉丁语。",
    opening: "「拉丁语在中世纪继续发展。」珀西瓦尔翻开文本，「今天我们学习中世纪拉丁语。」",
    keyPoints: [
      {
        point: "中世纪拉丁特点",
        context: "「中世纪拉丁语词汇和语法有所变化。」珀西瓦尔说明特点。"
      },
      {
        point: "教会拉丁语",
        context: "「教会使用拉丁语进行宗教仪式。」她讲解教会拉丁语的用途。"
      },
      {
        point: "学术拉丁语",
        context: "「中世纪学者使用拉丁语写作。」珀西瓦尔说明学术拉丁语的特点。"
      },
      {
        point: "语言延续性",
        context: "「拉丁语虽然是死语言，但从未停止使用。」她强调拉丁语的延续性。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第7章 高级语法
  // ════════════════════════════════════════

  31: {
    atmosphere: "黑板上写着虚拟语气的用法。珀西瓦尔教授在讲解虚拟语气，她的语调平稳，不带多余的感情。",
    opening: "「虚拟语气表达可能性、愿望、建议等。」珀西瓦尔指着黑板，「今天我们学习虚拟语气。」",
    keyPoints: [
      {
        point: "虚拟语气用法",
        context: "「虚拟语气用于表达不确定、愿望、建议、条件等。」珀西瓦尔解释用法。"
      },
      {
        point: "现在虚拟式",
        context: "「现在虚拟式变位：amem、ames、amet等。」她列出变位表。"
      },
      {
        point: "未完成虚拟式",
        context: "「未完成虚拟式变位：amarem、amares、amaret等。」珀西瓦尔说明用法。"
      },
      {
        point: "条件句",
        context: "「条件句中常用虚拟语气。」她举例说明条件句的用法。"
      }
    ]
  },

  32: {
    atmosphere: "学生们在练习条件句。珀西瓦尔教授在黑板上写下条件句的结构。",
    opening: "「条件句表达假设情况。」珀西瓦尔指着黑板，「今天我们学习条件句。」",
    keyPoints: [
      {
        point: "条件句类型",
        context: "「真实条件和非真实条件。」珀西瓦尔区分两种条件句。"
      },
      {
        point: "真实条件",
        context: "「真实条件表示可能发生的情况：'Si venis, docebo'（如果你来了，我会教你）。」"
      },
      {
        point: "非真实条件",
        context: "「非真实条件表示不可能或不太可能的情况：'Si venires, docerem'（如果你来了，我会教你——但你不来）。」"
      },
      {
        point: "时态呼应",
        context: "「条件句中时态需要呼应。」珀西瓦尔说明时态呼应规则。"
      }
    ]
  },

  33: {
    atmosphere: "黑板上写着间接疑问句的例子。珀西瓦尔教授在讲解间接疑问句。",
    opening: "「间接疑问句用于转述问题。」珀西瓦尔指着黑板，「今天我们学习间接疑问句。」",
    keyPoints: [
      {
        point: "间接疑问结构",
        context: "「间接疑问句由疑问词+虚拟语气构成。」珀西瓦尔举例说明。"
      },
      {
        point: "疑问词变化",
        context: "「疑问词在间接疑问句中保持不变。」她说明疑问词的用法。"
      },
      {
        point: "语序调整",
        context: "「间接疑问句使用陈述语序。」珀西瓦尔强调语序规则。"
      },
      {
        point: "时态变化",
        context: "「间接疑问句中时态可能需要调整。」她说明时态变化规则。"
      }
    ]
  },

  34: {
    atmosphere: "学生们在练习动名词和目的结构。珀西瓦尔教授在黑板上写下这些结构的用法。",
    opening: "「动名词和目的结构是重要的句法结构。」珀西瓦尔指着黑板，「今天我们学习这些结构。」",
    keyPoints: [
      {
        point: "动名词用法",
        context: "「动名词由动词词干+-ndus/-nda/-ndum构成。」珀西瓦尔举例说明。"
      },
      {
        point: "目的不定式",
        context: "「目的不定式表示目的：'Venio ut doceam'（我来是为了教）。」"
      },
      {
        point: "目的从句",
        context: "「目的从句由ut或ne引导。」她说明用法。"
      },
      {
        point: "结果从句",
        context: "「结果从句由ut或ut non引导。」珀西瓦尔举例说明。"
      }
    ]
  },

  35: {
    atmosphere: "黑板上写着被动语态的变位表。珀西瓦尔教授在讲解被动语态。",
    opening: "「被动语态表示动作的承受者。」珀西瓦尔指着黑板，「今天我们学习被动语态。」",
    keyPoints: [
      {
        point: "被动语态构成",
        context: "「被动语态由完成分词+助动词sum构成。」珀西瓦尔说明构成方式。"
      },
      {
        point: "各时态被动",
        context: "「现在时被动、未完成时被动、完成时被动等。」她列出各时态的被动形式。"
      },
      {
        point: "施动者表达",
        context: "「用ab+夺格表示施动者：'Liber ab puella scriptus est'（书被女孩写了）。」"
      },
      {
        point: "翻译技巧",
        context: "「翻译被动语态时，通常转换为主动语态。」珀西瓦尔示范翻译方法。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第8章 GCSE文本
  // ════════════════════════════════════════

  36: {
    atmosphere: "学生们在精读指定的拉丁散文文本。珀西瓦尔教授在讲解文本分析方法。",
    opening: "「精读是GCSE考试的重点。」珀西瓦尔打开课本，「今天我们学习指定文本精读。」",
    keyPoints: [
      {
        point: "散文文本分析",
        context: "「分析散文的结构、主题、语言特点。」珀西瓦尔讲解分析方法。"
      },
      {
        point: "作者风格",
        context: "「识别作者的写作风格。」她举例说明不同作者的风格特点。"
      },
      {
        point: "修辞手法",
        context: "「识别比喻、排比、夸张等修辞手法。」珀西瓦尔讲解修辞分析。"
      },
      {
        point: "主题解读",
        context: "「理解文本的主题和思想。」她示范主题解读方法。"
      }
    ]
  },

  37: {
    atmosphere: "教室的讲台上放着拉丁诗歌集。珀西瓦尔教授在讲解六音步格律。",
    opening: "「拉丁诗歌有严格的格律。」珀西瓦尔翻开诗集，「今天我们学习六音步格律。」",
    keyPoints: [
      {
        point: "六音步结构",
        context: "「六音步由六个音步组成。」珀西瓦尔解释音步结构。"
      },
      {
        point: "韵律分析",
        context: "「分析诗歌的韵律。」她示范韵律分析方法。"
      },
      {
        point: "诗歌节奏",
        context: "「感受诗歌的节奏和韵律美。」珀西瓦尔讲解节奏特点。"
      },
      {
        point: "拉丁诗歌特点",
        context: "「拉丁诗歌注重形式和韵律。」她说明拉丁诗歌的特点。"
      }
    ]
  },

  38: {
    atmosphere: "黑板上写着各种修辞手法的例子。珀西瓦尔教授在讲解修辞手法识别。",
    opening: "「修辞手法使语言更生动。」珀西瓦尔指着黑板，「今天我们学习修辞手法识别。」",
    keyPoints: [
      {
        point: "明喻与暗喻",
        context: "「明喻用like或as，暗喻直接比较。」珀西瓦尔举例说明。"
      },
      {
        point: "反复与排比",
        context: "「反复重复词语，排比结构相似。」她解释这两种手法。"
      },
      {
        point: "拟人与夸张",
        context: "「拟人赋予事物人性，夸张夸大描述。」珀西瓦尔举例说明。"
      },
      {
        point: "修辞效果",
        context: "「理解修辞手法的效果。」她讲解修辞的作用。"
      }
    ]
  },

  39: {
    atmosphere: "学生们在做无准备文本翻译练习。珀西瓦尔教授在观察，偶尔纠正错误。",
    opening: "「无准备翻译是考试的重要部分。」珀西瓦尔分发练习纸，「今天我们进行无准备文本翻译训练。」",
    keyPoints: [
      {
        point: "快速阅读",
        context: "「快速浏览文本，了解大意。」珀西瓦尔讲解阅读技巧。"
      },
      {
        point: "上下文推断",
        context: "「根据上下文推断生词含义。」她说明推断方法。"
      },
      {
        point: "词义选择",
        context: "「根据语境选择合适的词义。」珀西瓦尔强调词义选择的重要性。"
      },
      {
        point: "流畅翻译",
        context: "「确保翻译流畅自然。」她建议翻译技巧。"
      }
    ]
  },

  40: {
    atmosphere: "教室的墙上挂着奥古斯都时代的地图和画像。珀西瓦尔教授在讲解文化历史背景。",
    opening: "「理解文化背景有助于理解文本。」珀西瓦尔指着地图，「今天我们学习奥古斯都时代。」",
    keyPoints: [
      {
        point: "奥古斯都时期",
        context: "「奥古斯都时期是罗马的黄金时代。」珀西瓦尔概述这个时期。"
      },
      {
        point: "文学繁荣",
        context: "「奥古斯都时期文学繁荣，出现了维吉尔、贺拉斯等伟大作家。」她介绍当时的文学成就。"
      },
      {
        point: "政治语境",
        context: "「了解当时的政治背景。」珀西瓦尔讲解政治语境对文学的影响。"
      },
      {
        point: "文本解读",
        context: "「结合历史背景解读文本。」她示范如何结合背景理解文本。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第9章 翻译技巧
  // ════════════════════════════════════════

  41: {
    atmosphere: "学生们在分析难句结构。珀西瓦尔教授在讲解分析策略。",
    opening: "「难句是翻译的难点。」珀西瓦尔指着黑板，「今天我们学习难句结构分析策略。」",
    keyPoints: [
      {
        point: "复杂句拆解",
        context: "「将复杂句拆解为简单句。」珀西瓦尔讲解拆解方法。"
      },
      {
        point: "长句处理",
        context: "「处理长句时，先找主干，再分析修饰成分。」她说明长句处理技巧。"
      },
      {
        point: "语序调整",
        context: "「根据目标语言调整语序。」珀西瓦尔强调语序调整的重要性。"
      },
      {
        point: "逻辑分析",
        context: "「分析句子的逻辑关系。」她讲解逻辑分析方法。"
      }
    ]
  },

  42: {
    atmosphere: "黑板上写着多义词的例子。珀西瓦尔教授在讲解词义辨析。",
    opening: "「多义词需要根据语境判断。」珀西瓦尔指着黑板，「今天我们学习词义辨析与语境推断。」",
    keyPoints: [
      {
        point: "多义词处理",
        context: "「根据上下文确定多义词的含义。」珀西瓦尔举例说明。"
      },
      {
        point: "语境分析",
        context: "「分析句子的语境和上下文。」她讲解语境分析方法。"
      },
      {
        point: "词义选择",
        context: "「选择最符合语境的词义。」珀西瓦尔强调词义选择的重要性。"
      },
      {
        point: "文化对应",
        context: "「注意文化差异，找到合适的对应词。」她说明文化对应的重要性。"
      }
    ]
  },

  43: {
    atmosphere: "教室的讲台上放着历史文献。珀西瓦尔教授在讲解历史语境的重要性。",
    opening: "「历史语境对理解文本至关重要。」珀西瓦尔翻开文献，「今天我们学习历史语境对理解的影响。」",
    keyPoints: [
      {
        point: "历史背景重要性",
        context: "「了解历史背景有助于理解文本含义。」珀西瓦尔强调历史背景的重要性。"
      },
      {
        point: "时代差异",
        context: "「注意古今差异，避免误解。」她说明时代差异的影响。"
      },
      {
        point: "文化概念",
        context: "「理解古代文化概念。」珀西瓦尔讲解文化概念的重要性。"
      },
      {
        point: "文本定位",
        context: "「确定文本的历史定位。」她示范如何定位文本。"
      }
    ]
  },

  44: {
    atmosphere: "学生们在练习文本评注。珀西瓦尔教授在讲解评注方法。",
    opening: "「文本评注是学术写作的重要部分。」珀西瓦尔在黑板上写下评注要点，「今天我们学习文本评注方法。」",
    keyPoints: [
      {
        point: "评注要素",
        context: "「评注包括文本分析、语言分析、文学评价等。」珀西瓦尔列出评注要素。"
      },
      {
        point: "语言分析",
        context: "「分析语言特点和修辞手法。」她讲解语言分析方法。"
      },
      {
        point: "文学评价",
        context: "「评价文本的文学价值。」珀西瓦尔说明评价标准。"
      },
      {
        point: "学术规范",
        context: "「遵守学术规范，正确引用。」她强调学术规范的重要性。"
      }
    ]
  },

  45: {
    atmosphere: "学生们在做GCSE真题练习。珀西瓦尔教授在分发真题试卷。",
    opening: "「真题练习是备考的关键。」珀西瓦尔分发试卷，「今天我们进行GCSE真题训练。」",
    keyPoints: [
      {
        point: "题型熟悉",
        context: "「熟悉GCSE考试的题型。」珀西瓦尔介绍考试题型。"
      },
      {
        point: "答题技巧",
        context: "「掌握答题技巧，提高得分。」她讲解答题策略。"
      },
      {
        point: "时间管理",
        context: "「合理安排答题时间。」珀西瓦尔强调时间管理的重要性。"
      },
      {
        point: "常见错误",
        context: "「避免常见错误。」她列出常见易错点。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第10章 综合输出
  // ════════════════════════════════════════

  46: {
    atmosphere: "学生们在练习拉丁短文写作。珀西瓦尔教授在讲解写作方法。",
    opening: "「写作是语言能力的综合体现。」珀西瓦尔在黑板上写下写作要点，「今天我们学习拉丁短文写作。」",
    keyPoints: [
      {
        point: "写作结构",
        context: "「短文结构：引言、正文、结论。」珀西瓦尔讲解结构要点。"
      },
      {
        point: "词汇选择",
        context: "「选择合适的词汇。」她强调词汇选择的重要性。"
      },
      {
        point: "语法准确",
        context: "「确保语法正确。」珀西瓦尔提醒语法注意事项。"
      },
      {
        point: "表达流畅",
        context: "「使表达流畅自然。」她建议写作技巧。"
      }
    ]
  },

  47: {
    atmosphere: "学生们在练习文学评论写作。珀西瓦尔教授在讲解评论框架。",
    opening: "「文学评论需要深入分析。」珀西瓦尔打开课本，「今天我们学习文学评论写作框架。」",
    keyPoints: [
      {
        point: "评论结构",
        context: "「评论结构：引言、分析、结论。」珀西瓦尔讲解结构要点。"
      },
      {
        point: "论点构建",
        context: "「构建清晰的论点。」她说明论点构建方法。"
      },
      {
        point: "文本引用",
        context: "「正确引用文本支持论点。」珀西瓦尔强调引用的重要性。"
      },
      {
        point: "分析深度",
        context: "「深入分析文本，提供有见解的评论。」她讲解分析方法。"
      }
    ]
  },

  48: {
    atmosphere: "教室的墙上挂着魔法世界和罗马世界的对比图表。珀西瓦尔教授在讲解跨文化比较。",
    opening: "「语言反映文化。」珀西瓦尔指着图表，「今天我们进行跨文化比较：罗马与魔法世界的语言观。」",
    keyPoints: [
      {
        point: "语言与魔法",
        context: "「拉丁语是咒语的来源。」珀西瓦尔说明语言与魔法的联系。"
      },
      {
        point: "文化对比",
        context: "「比较罗马文化和魔法世界的语言观。」她讲解文化差异。"
      },
      {
        point: "词源联系",
        context: "「追溯咒语的拉丁语词源。」珀西瓦尔举例说明词源联系。"
      },
      {
        point: "概念对应",
        context: "「寻找文化概念的对应关系。」她说明概念对应的方法。"
      }
    ]
  },

  49: {
    atmosphere: "学生们在进行词源学综合练习。珀西瓦尔教授在讲解词根追踪方法。",
    opening: "「词源学是理解语言的钥匙。」珀西瓦尔翻开词源词典，「今天我们进行词源学综合练习。」",
    keyPoints: [
      {
        point: "词根追踪",
        context: "「追踪词根的演变。」珀西瓦尔讲解词根追踪方法。"
      },
      {
        point: "词义演变",
        context: "「了解词义的演变过程。」她说明词义演变的规律。"
      },
      {
        point: "跨语言影响",
        context: "「分析拉丁语对其他语言的影响。」珀西瓦尔讲解跨语言影响。"
      },
      {
        point: "文化印记",
        context: "「语言中的文化印记。」她说明语言与文化的关系。"
      }
    ]
  },

  50: {
    atmosphere: "学生们在进行GCSE综合复习。珀西瓦尔教授在黑板上写下复习要点。",
    opening: "「复习是巩固知识的关键。」珀西瓦尔指着黑板，「今天我们进行GCSE综合复习。」",
    keyPoints: [
      {
        point: "知识梳理",
        context: "「梳理所学知识，建立知识体系。」珀西瓦尔讲解梳理方法。"
      },
      {
        point: "重点强化",
        context: "「强化重点内容，查漏补缺。」她强调重点内容。"
      },
      {
        point: "模拟练习",
        context: "「进行模拟练习，熟悉考试形式。」珀西瓦尔建议练习方法。"
      },
      {
        point: "考试准备",
        context: "「做好考试准备，调整心态。」她提醒考试注意事项。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第11章 古典文本精读
  // ════════════════════════════════════════

  51: {
    atmosphere: "教室的讲台上放着西塞罗的著作。珀西瓦尔教授在讲解修辞结构。",
    opening: "「西塞罗是古罗马最伟大的演说家。」珀西瓦尔翻开书，「今天我们学习西塞罗散文的修辞结构。」",
    keyPoints: [
      {
        point: "修辞学",
        context: "「学习古典修辞学的基本原则。」珀西瓦尔讲解修辞学知识。"
      },
      {
        point: "演讲技巧",
        context: "「分析西塞罗的演讲技巧。」她讲解演讲技巧的运用。"
      },
      {
        point: "论证结构",
        context: "「分析论证的结构和逻辑。」珀西瓦尔说明论证方法。"
      },
      {
        point: "文体特点",
        context: "「理解西塞罗的文体特点。」她讲解文体风格。"
      }
    ]
  },

  52: {
    atmosphere: "学生们在阅读维吉尔的《埃涅阿斯纪》。珀西瓦尔教授在讲解史诗传统。",
    opening: "「《埃涅阿斯纪》是古罗马最伟大的史诗。」珀西瓦尔翻开书，「今天我们学习史诗传统。」",
    keyPoints: [
      {
        point: "史诗结构",
        context: "「分析史诗的结构和布局。」珀西瓦尔讲解史诗结构。"
      },
      {
        point: "英雄主题",
        context: "「探讨英雄主题和价值观。」她说明英雄主题的意义。"
      },
      {
        point: "神话引用",
        context: "「分析神话引用的作用。」珀西瓦尔讲解神话引用的意义。"
      },
      {
        point: "文学地位",
        context: "「理解《埃涅阿斯纪》的文学地位。」她说明这部史诗的重要性。"
      }
    ]
  },

  53: {
    atmosphere: "教室的讲台上放着李维的历史著作。珀西瓦尔教授在讲解史学写法。",
    opening: "「李维是古罗马伟大的历史学家。」珀西瓦尔翻开书，「今天我们学习史学写法。」",
    keyPoints: [
      {
        point: "历史叙述",
        context: "「分析历史叙述的方法。」珀西瓦尔讲解叙述技巧。"
      },
      {
        point: "史料处理",
        context: "「了解李维如何处理史料。」她说明史料处理的方法。"
      },
      {
        point: "道德评价",
        context: "「分析李维的道德评价。」珀西瓦尔讲解道德评价的特点。"
      },
      {
        point: "叙事技巧",
        context: "「理解李维的叙事技巧。」她说明叙事方法。"
      }
    ]
  },

  54: {
    atmosphere: "学生们在阅读塔西佗的著作。珀西瓦尔教授在讲解讽刺与历史评判。",
    opening: "「塔西佗以其犀利的讽刺著称。」珀西瓦尔翻开书，「今天我们学习塔西佗的写作风格。」",
    keyPoints: [
      {
        point: "写作风格",
        context: "「分析塔西佗的写作风格。」珀西瓦尔讲解风格特点。"
      },
      {
        point: "讽刺手法",
        context: "「理解塔西佗的讽刺手法。」她说明讽刺的运用。"
      },
      {
        point: "历史观",
        context: "「探讨塔西佗的历史观。」珀西瓦尔讲解历史观的特点。"
      },
      {
        point: "政治批判",
        context: "「分析塔西佗的政治批判。」她说明政治批判的意义。"
      }
    ]
  },

  55: {
    atmosphere: "教室的墙上挂着奥古斯都时代的艺术作品。珀西瓦尔教授在讲解文学与政治的关系。",
    opening: "「文学与政治密不可分。」珀西瓦尔指着艺术品，「今天我们学习奥古斯都文学的政治语境。」",
    keyPoints: [
      {
        point: "文学与政治",
        context: "「理解文学与政治的关系。」珀西瓦尔讲解两者的联系。"
      },
      {
        point: "赞助制度",
        context: "「了解古罗马的文学赞助制度。」她说明赞助制度的影响。"
      },
      {
        point: "意识形态",
        context: "「分析文学中的意识形态表达。」珀西瓦尔讲解意识形态的体现。"
      },
      {
        point: "文本解读",
        context: "「结合政治语境解读文本。」她示范解读方法。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第12章 语言学深度
  // ════════════════════════════════════════

  56: {
    atmosphere: "黑板上写着格理论的图表。珀西瓦尔教授在讲解语法理论。",
    opening: "「格理论是语法分析的重要工具。」珀西瓦尔指着图表，「今天我们学习拉丁语法理论。」",
    keyPoints: [
      {
        point: "格理论",
        context: "「理解格理论的基本概念。」珀西瓦尔讲解格理论。"
      },
      {
        point: "句法功能",
        context: "「分析格的句法功能。」她说明格的作用。"
      },
      {
        point: "语义角色",
        context: "「理解语义角色的概念。」珀西瓦尔讲解语义角色。"
      },
      {
        point: "语言类型学",
        context: "「了解语言类型学的基本概念。」她说明类型学的意义。"
      }
    ]
  },

  57: {
    atmosphere: "教室的墙上挂着语言演变示意图。珀西瓦尔教授在讲解语言演变。",
    opening: "「语言是不断演变的。」珀西瓦尔指着示意图，「今天我们学习拉丁语到罗曼语的演变。」",
    keyPoints: [
      {
        point: "语音变化",
        context: "「分析拉丁语到罗曼语的语音变化。」珀西瓦尔讲解语音演变规律。"
      },
      {
        point: "形态演变",
        context: "「了解形态结构的演变。」她说明形态变化。"
      },
      {
        point: "语法简化",
        context: "「分析语法结构的简化过程。」珀西瓦尔讲解语法演变。"
      },
      {
        point: "罗曼语族",
        context: "「了解罗曼语族的形成和发展。」她说明罗曼语族的特点。"
      }
    ]
  },

  58: {
    atmosphere: "教室的讲台上放着古罗马铭文拓片。珀西瓦尔教授在讲解铭文研究。",
    opening: "「铭文是重要的历史资料。」珀西瓦尔展示拓片，「今天我们学习铭文研究与文献考证。」",
    keyPoints: [
      {
        point: "铭文类型",
        context: "「了解不同类型的铭文。」珀西瓦尔讲解铭文分类。"
      },
      {
        point: "书写系统",
        context: "「分析古罗马的书写系统。」她说明书写特点。"
      },
      {
        point: "文献校勘",
        context: "「学习文献校勘的方法。」珀西瓦尔讲解校勘技巧。"
      },
      {
        point: "历史价值",
        context: "「理解铭文的历史价值。」她说明铭文的重要性。"
      }
    ]
  },

  59: {
    atmosphere: "学生们在阅读斯多葛和伊壁鸠鲁哲学文本。珀西瓦尔教授在讲解哲学文本分析。",
    opening: "「哲学文本需要深入思考。」珀西瓦尔翻开书，「今天我们学习斯多葛与伊壁鸠鲁哲学文本。」",
    keyPoints: [
      {
        point: "哲学流派",
        context: "「了解斯多葛和伊壁鸠鲁学派的基本观点。」珀西瓦尔讲解哲学流派。"
      },
      {
        point: "文本特点",
        context: "「分析哲学文本的特点。」她说明文本风格。"
      },
      {
        point: "概念分析",
        context: "「深入分析哲学概念。」珀西瓦尔讲解概念分析方法。"
      },
      {
        point: "翻译难点",
        context: "「理解哲学文本的翻译难点。」她说明翻译注意事项。"
      }
    ]
  },

  60: {
    atmosphere: "学生们在练习学术写作。珀西瓦尔教授在讲解论证与引证规范。",
    opening: "「学术写作需要严谨规范。」珀西瓦尔在黑板上写下规范要点，「今天我们学习学术写作规范。」",
    keyPoints: [
      {
        point: "学术规范",
        context: "「遵守学术写作的规范。」珀西瓦尔讲解规范要求。"
      },
      {
        point: "引用格式",
        context: "「正确使用引用格式。」她说明引用方法。"
      },
      {
        point: "论证结构",
        context: "「构建清晰的论证结构。」珀西瓦尔讲解论证方法。"
      },
      {
        point: "学术风格",
        context: "「保持学术写作的风格。」她说明学术风格的特点。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第13章 文学与思想
  // ════════════════════════════════════════

  61: {
    atmosphere: "教室的讲台上放着塞内卡的悲剧作品。珀西瓦尔教授在讲解悲剧传统。",
    opening: "「塞内卡是古罗马重要的悲剧作家。」珀西瓦尔翻开书，「今天我们学习悲剧传统。」",
    keyPoints: [
      {
        point: "悲剧理论",
        context: "「理解古典悲剧理论。」珀西瓦尔讲解悲剧的基本概念。"
      },
      {
        point: "塞内卡风格",
        context: "「分析塞内卡的写作风格。」她说明风格特点。"
      },
      {
        point: "希腊影响",
        context: "「了解希腊悲剧对塞内卡的影响。」珀西瓦尔讲解影响关系。"
      },
      {
        point: "主题对比",
        context: "「对比不同悲剧作品的主题。」她说明主题差异。"
      }
    ]
  },

  62: {
    atmosphere: "学生们在阅读贺拉斯的颂歌。珀西瓦尔教授在讲解颂歌与文学批评。",
    opening: "「贺拉斯是古罗马最伟大的抒情诗人。」珀西瓦尔翻开书，「今天我们学习贺拉斯的颂歌。」",
    keyPoints: [
      {
        point: "颂歌形式",
        context: "「了解颂歌的形式特点。」珀西瓦尔讲解颂歌结构。"
      },
      {
        point: "美学理论",
        context: "「分析贺拉斯的美学理论。」她说明美学观点。"
      },
      {
        point: "文学批评",
        context: "「理解贺拉斯的文学批评思想。」珀西瓦尔讲解批评理论。"
      },
      {
        point: "影响研究",
        context: "「探讨贺拉斯的影响。」她说明影响范围。"
      }
    ]
  },

  63: {
    atmosphere: "教室的讲台上放着卢克莱修的《物性论》。珀西瓦尔教授在讲解诗歌中的哲学论证。",
    opening: "「卢克莱修用诗歌表达哲学思想。」珀西瓦尔翻开书，「今天我们学习诗歌中的哲学论证。」",
    keyPoints: [
      {
        point: "伊壁鸠鲁哲学",
        context: "「了解伊壁鸠鲁哲学的基本观点。」珀西瓦尔讲解哲学思想。"
      },
      {
        point: "诗歌表达",
        context: "「分析诗歌如何表达哲学思想。」她说明诗歌技巧。"
      },
      {
        point: "论证结构",
        context: "「理解诗歌中的论证结构。」珀西瓦尔讲解论证方法。"
      },
      {
        point: "科学思想",
        context: "「探讨卢克莱修的科学思想。」她说明科学观点。"
      }
    ]
  },

  64: {
    atmosphere: "黑板上写着文体对比表。珀西瓦尔教授在讲解文体差异。",
    opening: "「不同文体有不同的特点。」珀西瓦尔指着表格，「今天我们学习文体比较。」",
    keyPoints: [
      {
        point: "文体特征",
        context: "「分析不同文体的特征。」珀西瓦尔讲解文体特点。"
      },
      {
        point: "写作目的",
        context: "「理解不同文体的写作目的。」她说明写作意图。"
      },
      {
        point: "语言选择",
        context: "「分析语言选择的差异。」珀西瓦尔讲解语言特点。"
      },
      {
        point: "读者定位",
        context: "「了解不同文体的读者定位。」她说明读者群体。"
      }
    ]
  },

  65: {
    atmosphere: "学生们在进行原创翻译和注释写作。珀西瓦尔教授在讲解方法。",
    opening: "「原创翻译和注释是学术研究的重要部分。」珀西瓦尔在黑板上写下要点，「今天我们学习原创翻译与注释写作。」",
    keyPoints: [
      {
        point: "翻译策略",
        context: "「制定翻译策略。」珀西瓦尔讲解翻译方法。"
      },
      {
        point: "注释规范",
        context: "「遵守注释的规范。」她说明注释要求。"
      },
      {
        point: "学术深度",
        context: "「提供有深度的学术分析。」珀西瓦尔强调学术深度。"
      },
      {
        point: "文本阐释",
        context: "「深入阐释文本含义。」她说明阐释方法。"
      }
    ]
  },

  // ════════════════════════════════════════
  // 第14章 综合冲刺
  // ════════════════════════════════════════

  66: {
    atmosphere: "学生们在进行速读和精译练习。珀西瓦尔教授在观察，偶尔给予指导。",
    opening: "「速读和精译是考试的重要能力。」珀西瓦尔分发练习材料，「今天我们进行速读与精译训练。」",
    keyPoints: [
      {
        point: "快速理解",
        context: "「快速理解文本大意。」珀西瓦尔讲解速读技巧。"
      },
      {
        point: "准确翻译",
        context: "「确保翻译准确无误。」她强调准确性。"
      },
      {
        point: "难点处理",
        context: "「处理翻译中的难点。」珀西瓦尔讲解难点处理方法。"
      },
      {
        point: "时间控制",
        context: "「合理控制答题时间。」她说明时间管理技巧。"
      }
    ]
  },

  67: {
    atmosphere: "学生们在练习文学评论写作。珀西瓦尔教授在讲解论点建构。",
    opening: "「文学评论需要有力的论点。」珀西瓦尔在黑板上写下要点，「今天我们学习论点建构。」",
    keyPoints: [
      {
        point: "论题设计",
        context: "「设计有意义的论题。」珀西瓦尔讲解论题选择。"
      },
      {
        point: "论证展开",
        context: "「展开论证，支持论点。」她说明论证方法。"
      },
      {
        point: "文本支撑",
        context: "「用文本证据支撑论点。」珀西瓦尔强调证据的重要性。"
      },
      {
        point: "批判性分析",
        context: "「进行批判性分析。」她说明批判方法。"
      }
    ]
  },

  68: {
    atmosphere: "学生们在练习语言演变论文写作。珀西瓦尔教授在讲解写作方法。",
    opening: "「论文写作是A-Level考试的重点。」珀西瓦尔在黑板上写下结构要点，「今天我们学习语言演变论文写作。」",
    keyPoints: [
      {
        point: "研究选题",
        context: "「选择合适的研究题目。」珀西瓦尔讲解选题方法。"
      },
      {
        point: "文献综述",
        context: "「撰写文献综述。」她说明综述要点。"
      },
      {
        point: "论证结构",
        context: "「构建清晰的论证结构。」珀西瓦尔讲解结构安排。"
      },
      {
        point: "结论推导",
        context: "「推导合理的结论。」她说明结论写作方法。"
      }
    ]
  },

  69: {
    atmosphere: "教室的墙上挂着拉丁语与魔咒课的联动图表。珀西瓦尔教授在讲解跨学科综合。",
    opening: "「拉丁语与魔咒课紧密相连。」珀西瓦尔指着图表，「今天我们进行跨学科综合学习。」",
    keyPoints: [
      {
        point: "语言与魔法",
        context: "「理解语言与魔法的联系。」珀西瓦尔讲解两者的关联。"
      },
      {
        point: "词根关联",
        context: "「追溯咒语的拉丁语词根。」她说明词根联系。"
      },
      {
        point: "发音共振",
        context: "「理解发音与魔力的共振。」珀西瓦尔讲解发音的重要性。"
      },
      {
        point: "知识整合",
        context: "「整合拉丁语和魔咒知识。」她说明整合方法。"
      }
    ]
  },

  70: {
    atmosphere: "教室布置成了考场的样子。珀西瓦尔教授在分发模拟试卷，她的表情严肃，没有多余的话语。",
    opening: "「这是A-Level综合模拟考试。」珀西瓦尔分发试卷，「仔细答题，相信自己的能力。」",
    keyPoints: [
      {
        point: "模拟考试",
        context: "「按照A-Level考试格式进行模拟。」珀西瓦尔说明考试安排。"
      },
      {
        point: "综合训练",
        context: "「进行全面的综合训练。」她强调综合能力的重要性。"
      },
      {
        point: "答题策略",
        context: "「运用有效的答题策略。」珀西瓦尔讲解策略要点。"
      },
      {
        point: "考前准备",
        context: "「做好考前准备。」她提醒注意事项。"
      }
    ]
  }

};
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
    atmosphere: '阴天，西塔楼顶层拉丁语教室的光线灰白。珀西瓦尔在黑板上写下两个词：puella，puellam。两个词之间画了一条竖线，不作解释，只是等着学生们自己看出差别。',
    opening: '「上节课你们学了字母和发音。」她转身，「语言不只是声音。声音只是入门。」她指向黑板上的两个词，「这两个词都是"女孩"。但它们不一样。你们看出来了吗？」她停了几秒，「词尾。词尾不同，意思不同。这就是今天的内容：格。拉丁语靠词尾区分词语在句子里扮演的角色。谁在做动作，谁在承受动作——词尾告诉你。不是位置，是词尾。」',
    keyPoints: [
      {
        point: '主格：动作的执行者',
        blackboardQ: {
          type: 'formulas',
          label: '主格（Nominative）',
          lines: [
            '主格 = 动作的执行者',
            '',
            'puella   （女孩，主语）',
            'magister （老师，主语）',
            '',
            '第一变格法单数主格：-a 结尾',
            '第二变格法单数主格：-us / -er 结尾'
          ]
        },
        question: {
          leadIn: '珀西瓦尔在 puella 下画了一条横线，「puella——女孩，主格。」她又写了一句话：Puella ridet。「Puella ridet。女孩笑了。」她指着 puella，「这里 puella 在做什么？它在笑。它是动作的执行者。这就是主格——执行者。」她停了一秒，「第一变格法的名词，单数主格以 -a 结尾。puell-a，词干是 puell，加上主格词尾 -a。」',
          text: '「句子 Puella cantat（女孩在唱歌）中，puella 是什么格？」',
          options: ['宾格', '主格', '属格'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「puella 以 -a 结尾，是第一变格法单数主格。它是动作的执行者——唱歌的是女孩，不是被女孩唱的。这个区别很重要，后面你们会看到词尾变了，意思就跟着变。」',
        contextWrong: '她不带感情地重复一遍，「主格。puella 是句子的主语，动作的执行者。主格以 -a 结尾，是第一变格法的标准词尾。宾格和属格的词尾不同——我们马上会看到。」',
        blackboard: {
          type: 'formulas',
          label: '主格（Nominative）',
          lines: [
            '主格 = 动作的执行者',
            '',
            'puella   （女孩，主语）  -a 结尾',
            'magister （老师，主语）  -er 结尾',
            '',
            'Puella ridet.  →  女孩笑了。',
            'Magister docet.  →  老师在教书。'
          ]
        }
      },
      {
        point: '宾格：动作的承受者',
        blackboardQ: {
          type: 'formulas',
          label: '宾格（Accusative）',
          lines: [
            '宾格 = 动作的承受者',
            '',
            'puella   → puellam   （-am 结尾）',
            'magister → magistrum （-um 结尾）',
            '',
            '例句：',
            'Puella magistrum amat.',
            '  女孩  老师[宾格]  爱',
            '→ 女孩爱老师。'
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写下 puellam，在旁边写了 magistrum。「puella 变成 puellam——词尾从 -a 变成 -am。这是宾格词尾。」她又写了一整句：Puella magistrum amat。「来读这个句子。Puella——主格，女孩。magistrum——宾格，老师。amat——动词，爱。女孩爱老师。」她用粉笔圈住 magistrum，「宾格——承受动作的那个词。老师被爱，不是在爱。词尾告诉你这一切。」',
          text: '「"Puellam video"中，puellam 是什么格？」',
          options: ['主格', '宾格', '属格'],
          answer: 1
        },
        contextRight: '「不错。」她点了一下头，「puellam——词尾 -am，宾格。video 是"我看见"，puellam 是"女孩"，宾格，被看见的那个。我看见女孩。」她停了一秒，「词尾 -am 是宾格的标志。记住它。」',
        contextWrong: '「宾格。」她在 -am 下面画了两条线，「词尾 -am，宾格，承受动作。puella 是主格，puellam 是宾格。一个字母的差别，句子的意思完全不同。」',
        blackboard: {
          type: 'formulas',
          label: '主格 vs 宾格',
          lines: [
            '        主格          宾格',
            '  puella（女孩）  puellam（女孩）',
            '  magister(老师)  magistrum(老师)',
            '',
            '词尾变化：',
            '  第一变格法：-a  →  -am',
            '  第二变格法：-us →  -um',
            '',
            'Puella magistrum amat.',
            '→ 女孩爱老师。'
          ]
        }
      },
      {
        point: '格决定意义，而非词序',
        blackboard: {
          type: 'formulas',
          label: '格的核心功能',
          lines: [
            '这两句话，意思完全相同：',
            '',
            'Puella magistrum amat.',
            'Magistrum puella amat.',
            'Amat puella magistrum.',
            '',
            '→ 三句都是"女孩爱老师"',
            '  因为 puella = 主格，执行者',
            '        magistrum = 宾格，承受者',
            '',
            '词序不决定意思，词尾决定意思'
          ]
        },
        context: '珀西瓦尔在黑板上先后写下同一句话的三种词序，没有解释，只是写完了指着全班。「你们看——三句话，词的位置不同，但意思一样。」她停了一秒，「为什么？因为 puella 永远是主格，magistrum 永远是宾格，不管它们站在哪个位置。」她放下粉笔，「英语依赖词序来区分"我爱你"和"你爱我"。拉丁语不需要——词尾已经告诉你一切。」她在黑板上写下一行字：语言是最古老的魔法，巫师只是把它说得更大声一点。「这就是为什么古代巫师选择拉丁语来构建咒语——它的每个词尾都精确无误。词序可以服务于节奏和强调，但意义不会因此改变。」她转身，「这就是格系统的核心价值。」'
      },
      {
        point: '第一变格法名词词尾总览',
        blackboard: {
          type: 'formulas',
          label: '第一变格法单数词尾（puella）',
          lines: [
            '格名        词尾    例词',
            '----        ----    ----',
            '主格 (Nom)  -a      puella',
            '宾格 (Acc)  -am     puellam',
            '',
            '其余格下节课继续讲',
            '',
            '常用第一变格法名词（阴性）：',
            '  puella  （女孩）',
            '  regina  （女王）',
            '  terra   （土地）',
            '  aqua    （水）',
            '  luna    （月亮）'
          ]
        },
        context: '珀西瓦尔在黑板上画了一个两行的小表格——主格和宾格，词尾和例词，排列整齐。「这是第一变格法。」她指着表格，「注意：第一变格法的名词大多数是阴性。puella，女孩；regina，女王；terra，土地；aqua，水；luna，月亮。」她在 aqua 旁停了一下，「Aguamenti——你们知道这个咒语。Agua，水，加上动词词根。这是第一变格法名词 aqua 的变形。咒语词根里的拉丁语大多数都保留了格的词尾，即使巫师们已经不再意识到这一点。」她转向全班，「这个表格你们要背。不是记忆游戏——是工具。每次读到一个词，找词尾，确定格，确定它在句子里的角色。这就是读拉丁语的方法。」她停了一下，「主格 -a，宾格 -am。今天先记这两个。」'
      }
    ],
    lessonSummary: '今天你们迈出了读懂拉丁语的第一步。珀西瓦尔在黑板上写下的那两个词——puella 和 puellam——看起来只差一个字母，却代表了完全不同的语法角色。主格是动作的执行者，宾格是动作的承受者，词尾 -a 和 -am 是区分它们的唯一线索。更重要的是，你们发现了拉丁语和英语的根本差异：拉丁语不靠词序，靠词尾。同一个句子，词的位置可以随意调换，意思不变，因为格已经锁定了每个词的身份。这套系统，正是古代巫师选择拉丁语构建咒语的原因——精确，无歧义。',
    nextLessonPreview: '下一课要学动词的变化——amare，爱。一个动词有六个不同的词尾，分别对应六个不同的主语。你们会发现，连代词都可以省略，因为词尾已经把一切都说清楚了。'
  },

  3: {
    atmosphere: '珀西瓦尔在黑板上把 amare 写得比平时大了一倍，底下写了两个字：变位。窗外是细雨，拉丁语教室安静得只有偶尔翻书页的声音。',
    opening: '「动词变位，」她拿起粉笔，「是拉丁语的核心机制。英语的动词几乎不变——I love, you love, he loves，只在第三人称单数加一个 s。」她在黑板上写了六行空格，「拉丁语不是这样。拉丁语的动词有六个形态，对应六个主语。每个词尾都带着主语信息。这意味着什么？」她停了一秒，「意味着你可以把主语代词扔掉。amo——我爱，这一个词就够了，不需要说 ego amo。词尾已经说了一切。」',
    keyPoints: [
      {
        point: 'amare 的词干与结构',
        blackboardQ: {
          type: 'formulas',
          label: '第一变位动词：amare',
          lines: [
            'amare = 不定式（to love）',
            '',
            '结构：am- + -are',
            '       词干  不定式词尾',
            '',
            '去掉 -re → 词干 + 人称词尾：',
            '  ama- + -o  →  amo（我爱）',
            '  ama- + -s  →  amas（你爱）',
            '  ama- + -t  →  amat（他/她爱）'
          ],
          audio: [
            { text: 'amo',  src: 'audio/latin/lesson-3/verb-amo.wav' },
            { text: 'amas', src: 'audio/latin/lesson-3/verb-amas.wav' },
            { text: 'amat', src: 'audio/latin/lesson-3/verb-amat.wav' }
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写下 amare，在 -re 下面画了一条斜线。「amare，不定式，"去爱"。结构：词干 am-，加上不定式词尾 -are。」她抹掉 -re，「现在只剩下 ama-，这是主干，也叫现在时词干。在它后面加上人称词尾，就得到对应人称的动词形式。」她写出前三个：amo、amas、amat，「第一人称单数——amo。词尾 -o，我爱。第二人称单数——amas。词尾 -s，你爱。第三人称单数——amat。词尾 -t，他或她爱。」她转身，「现在来测试一下。」',
          text: '「amare 的现在时词干是什么？」',
          options: ['am-', 'amor-', 'amare-'],
          answer: 0
        },
        contextRight: '「不错。」她在黑板上圈住 am-，「am-，词干。去掉不定式词尾 -re，剩下 ama-，然后加人称词尾。这就是第一变位动词的基本操作。词干是稳定的，变化的只是末尾那个词尾。」',
        contextWrong: '「am-。」她在黑板上圈住它，「amare 去掉 -re，得到 ama-，这是词干。不是 amor——那是名词，"爱"，不是动词词干。词干 am- 是动词变化的基础，一切人称词尾都加在它后面。」',
        blackboard: {
          type: 'formulas',
          label: '第一变位动词词干',
          lines: [
            'amare  →  去掉 -re  →  词干 ama-',
            '',
            'ama- + 人称词尾：',
            '  -o  →  amo   （我爱）',
            '  -s  →  amas  （你爱）',
            '  -t  →  amat  （他/她爱）',
            '  -mus → amamus（我们爱）',
            '  -tis → amatis（你们爱）',
            '  -nt  → amant （他们爱）'
          ],
          audio: [
            { text: 'amo',  src: 'audio/latin/lesson-3/verb-amo.wav' },
            { text: 'amas', src: 'audio/latin/lesson-3/verb-amas.wav' },
            { text: 'amat', src: 'audio/latin/lesson-3/verb-amat.wav' }
          ]
        }
      },
      {
        point: '完整变位表：六个人称',
        blackboard: {
          type: 'formulas',
          label: 'amare 现在时完整变位',
          lines: [
            '人称          拉丁语    意思',
            '----          ------    ----',
            '第一人称单数  amo       我爱',
            '第二人称单数  amas      你爱',
            '第三人称单数  amat      他/她爱',
            '第一人称复数  amamus    我们爱',
            '第二人称复数  amatis    你们爱',
            '第三人称复数  amant     他们爱',
            '',
            '词尾：-o, -s, -t, -mus, -tis, -nt'
          ]
        },
        context: '珀西瓦尔把整张变位表工整地写在黑板上，六行，三列。「这六个词尾，」她用粉笔依次点过，「是你们这学期最需要记牢的东西。-o，-s，-t，-mus，-tis，-nt。不只是 amare——所有第一变位动词都用这六个词尾。portare（携带），cantare（唱歌），vocare（呼唤），laudare（赞美）——词干不同，但词尾相同。」她在黑板角落写下：amamus。「"amamus"——词尾 -mus，我们爱。」她指着复数的三行，「注意复数词尾：-mus，-tis，-nt。和单数的 -o，-s，-t 完全不同，不会混淆。」她停了一下，「下次你们念 Alohomora，可以想想它里面那个 mora，来自动词 morari——停留，延迟，是第三变位，但词根变化的逻辑一样。语言是最古老的魔法，巫师只是把它说得更大声一点。」'
      },
      {
        point: '主语代词可以省略',
        blackboard: {
          type: 'formulas',
          label: '代词省略规则',
          lines: [
            '英语：必须说主语',
            '  I love.  You love.  He loves.',
            '',
            '拉丁语：词尾已含主语信息',
            '  amo   = 我爱（不需要 ego）',
            '  amas  = 你爱（不需要 tu）',
            '  amat  = 他爱（不需要 is）',
            '',
            '主语代词只在强调时出现',
            '  Ego amo.（是我在爱，不是别人）'
          ]
        },
        context: '珀西瓦尔擦掉黑板上的一半内容，只留下变位表的词尾列。「你们看，」她指着 -o，「这个词尾告诉你主语是第一人称单数——"我"。所以 amo 本身就是一个完整的句子。说 ego amo——ego 是"我"——不是错误，但是多余的，除非你要强调"是我"。」她停顿，「拉丁文文本里大量出现没有主语代词的句子。读到一个动词，先看词尾，判断人称，自动补上主语。这是读拉丁语的第一个技巧。」她转身，「顺便说一句——这也是咒语语法的逻辑。Expecto Patronum——expecto，第一人称单数，"我期待/我召唤"。不需要 ego。词尾说了一切。」'
      },
      {
        point: '第一变位动词的魔法联动',
        blackboard: {
          type: 'formulas',
          label: '咒语词根 · 第一变位',
          lines: [
            'vocare（呼唤）→ voco, vocas, vocat...',
            '  → Voca! 呼唤！（命令式）',
            '',
            'portare（携带）→ porto, portas, portat...',
            '',
            'Alohomora 中的 mora：',
            '  morari（停留/延迟）',
            '  → 与第一变位结构平行',
            '',
            '命令式（简单形式）：',
            '  amare → ama!（去爱！）',
            '  vocare → voca!（呼唤！）'
          ]
        },
        context: '珀西瓦尔靠在讲台边，她难得地停了比平时更长的停顿。「你们每天使用咒语，但从没想过为什么它们是那个形状。」她在黑板上写下 Alohomora，「这个词的核心是 mora——来自 morari，停留、延迟。门锁的机关停顿——开了。词义精准，不是随便凑出来的声音。」她又写下一个词：Accio，「第一变位命令式。Accio 来自 accere 或类似词根，呼唤，招来。用的是命令式，因为你是在对世界下命令。」她停了一秒，「巫师用拉丁语说话，不是传统，是精确。每个词尾都是一条指令，不容误读。」她合上粉笔盒，「amo, amas, amat——把变位表背下来。下节课要用到。」'
      }
    ],
    lessonSummary: '今天你们解开了拉丁语动词的第一层结构。amare 去掉不定式词尾 -re，得到词干 ama-，再加上六个人称词尾，就得到完整的现在时变位：amo, amas, amat, amamus, amatis, amant。最关键的发现是：词尾本身就包含了主语信息，所以主语代词在大多数情况下可以省略。珀西瓦尔还带你们看了一件事——那些你们每天喊出的咒语，其实都藏着第一变位动词的影子。语言是最古老的魔法，这句话开始有了具体的意思。',
    nextLessonPreview: '下一课要讲形容词。拉丁语的形容词不是一个固定的形状——它要跟名词在性、数、格三个维度上完全一致。bonus、bona、bonum，同一个"好"，三种形态，各有用途。'
  },

  4: {
    atmosphere: '珀西瓦尔在黑板的左侧写下三个词：bonus，bona，bonum。右侧留着空白。她背对全班，等所有人坐定，才慢慢转过来。',
    opening: '「形容词。」她指着黑板，「这三个词都是"好的"。但它们不一样。」她用粉笔在三个词后面分别标注了 m、f、n，「阳性、阴性、中性。拉丁语名词有性别——不是生物意义上的性别，是语法性别。形容词修饰名词时，必须在性、数、格三个维度上与名词一致。」她停了一秒，「你们今天要学的，就是如何让形容词"对准"它修饰的名词。」',
    keyPoints: [
      {
        point: '形容词三性变化：bonus / bona / bonum',
        blackboardQ: {
          type: 'formulas',
          label: 'bonus（好的）三性形式',
          lines: [
            '阳性(m)    阴性(f)    中性(n)',
            '------     ------     ------',
            'bonus      bona       bonum',
            '（-us）    （-a）     （-um）',
            '',
            '词尾规律：',
            '  阳性 -us  阴性 -a  中性 -um'
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写下三列对比表。「bonus——阳性，修饰阳性名词。bona——阴性，修饰阴性名词。bonum——中性，修饰中性名词。」她指着词尾，「注意词尾：-us 是阳性，-a 是阴性，-um 是中性。这套词尾和名词的词尾类似，不是巧合——形容词本来就是从名词词尾借来的系统。」她在黑板上写下 puella，「puella 是什么性？」她没等回答，「阴性。所以修饰它的形容词要用阴性形式。」',
          text: '「修饰阴性名词 puella（女孩）时，bonus 变成哪种形式？」',
          options: ['bonus', 'bona', 'bonum'],
          answer: 1
        },
        contextRight: '「不错。」她在黑板上写下 bona puella，「bona puella——好女孩。puella 阴性，bona 阴性，一致。」她停了一秒，「这就是一致性原则：形容词的性必须跟名词一致。不是你觉得这个女孩"看起来像阳性"，是语法告诉你用阴性。」',
        contextWrong: '「bona。」她在黑板上写了一遍，「puella 是阴性名词，形容词要用阴性形式 bona。bonus 是阳性，bonum 是中性，都不能修饰阴性名词 puella。性不一致，句子就错了。」',
        blackboard: {
          type: 'formulas',
          label: 'bonus 三性变化',
          lines: [
            '阳性         阴性         中性',
            '-----        -----        -----',
            'bonus(好的)  bona(好的)   bonum(好的)',
            '',
            '例：',
            '  bonus magister  （好老师，阳）',
            '  bona puella     （好女孩，阴）',
            '  bonum templum   （好神庙，中）'
          ]
        }
      },
      {
        point: '形容词与名词的三维一致：性、数、格',
        blackboard: {
          type: 'formulas',
          label: '形容词一致性原则',
          lines: [
            '形容词必须与名词在三个维度一致：',
            '',
            '  1. 性  （阳/阴/中）',
            '  2. 数  （单数/复数）',
            '  3. 格  （主/宾/与/夺/属...）',
            '',
            '主格单数阴性：bona puella（好女孩）',
            '宾格单数阴性：bonam puellam（好女孩[宾]）',
            '',
            '→ 形容词词尾随名词词尾变化'
          ]
        },
        context: '珀西瓦尔在黑板上写出了两行对比：bona puella 和 bonam puellam。「你们看，」她指着第二行，「当 puella 变成宾格 puellam，bona 也要随之变成 bonam——宾格阴性词尾 -am。」她停顿，「形容词不是独立的，它附着在名词上，跟着名词一起变化。性、数、格，三个维度都要一致。」她拿起粉笔，「有人会问：形容词和名词的词尾一模一样，那怎么区分？」她没等回答，「靠词义和语境。bona 修饰 puella，它们是一个名词短语。amat 是动词，它不修饰任何名词。结构决定归属。」她在讲台前踱了一步，「这套一致性原则，你们在咒语里也能看到——咒语的拉丁语词根往往保留了格的词尾，因为错误的词尾会改变意思，甚至让咒语失效。精确是咒语的生命线。」'
      },
      {
        point: '常用形容词与词尾规律',
        blackboard: {
          type: 'formulas',
          label: '常用形容词一览',
          lines: [
            '阳性(m)    阴性(f)    中性(n)     意思',
            '------     ------     ------      ----',
            'bonus      bona       bonum       好的',
            'malus      mala       malum       坏的',
            'magnus     magna      magnum      大的',
            'parvus     parva      parvum      小的',
            'longus     longa      longum      长的',
            '',
            '规律：-us / -a / -um',
            '（第一/二变格法形容词）'
          ]
        },
        context: '珀西瓦尔把一组常用形容词写在黑板上，每行三列，排列整齐。「这些是你们这周要认识的形容词。」她指着词尾列，「注意规律：阳性 -us，阴性 -a，中性 -um。这一套词尾叫做"第一/二变格法形容词"——因为阴性按第一变格法变化，阳性和中性按第二变格法变化。」她在 magnus 下停了一下，「magnus——大的。魔法世界里你们会遇到这个词。Hogwarts 校训中的 Semper virens——永远绿意盎然——virens 是形容词现在分词形式，和 magnus 类似，不过现在先记规律型的这几个。」她停顿，「malus——坏的。注意：malus 也是"苹果树"的意思，第二变格法。语境决定意思。」她放下粉笔，「拉丁语不是每个词只有一个意思，这是你们需要接受的现实。」'
      },
      {
        point: '宾格的形容词变化：bonam puellam',
        blackboardQ: {
          type: 'formulas',
          label: '主格 vs 宾格：形容词+名词',
          lines: [
            '          主格            宾格',
            '阴性:  bona puella    bonam puellam',
            '阳性:  bonus magister  bonum magistrum',
            '',
            '完整例句：',
            'Magister bonam puellam laudat.',
            '  老师  好女孩[宾格]   表扬',
            '→ 老师表扬好女孩。'
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写下一个完整句子：Magister bonam puellam laudat。「来拆解这个句子。Magister——主格，老师，动作执行者。laudat——动词，表扬，第三人称单数。bonam puellam——宾格，好女孩，动作承受者。」她在 bonam 下面画线，「注意：puellam 是宾格，所以 bona 也变成宾格 bonam，词尾 -am。」她转身，「一致性：puellam 是阴性宾格，bonam 也是阴性宾格。两个词尾相同，因为它们是一个整体。」',
          text: '「如果把 bona puella 变成宾格，应该是？」',
          options: ['bona puella', 'bonam puellam', 'bonum puellam'],
          answer: 1
        },
        contextRight: '「不错。」她在黑板上划了两个圈，圈住 bonam 和 puellam，「两个词都加了宾格词尾 -am。阴性宾格，一致。」她停了一秒，「形容词修饰名词，形容词跟着名词走。名词变格，形容词也变。这是一致性原则的实际应用。」',
        contextWrong: '她不带感情地写下正确答案，「bonam puellam。puellam 是宾格，所以 bona 也要变成宾格 bonam，词尾 -am。不是 bona——那是主格。形容词词尾要和名词词尾一致。」',
        blackboard: {
          type: 'formulas',
          label: '形容词+名词格变化',
          lines: [
            '格      形容词    名词',
            '----    ------    ----',
            '主格    bona      puella',
            '宾格    bonam     puellam',
            '',
            '规律：形容词词尾 = 名词词尾（阴性）',
            '  主格 -a',
            '  宾格 -am'
          ]
        }
      }
    ],
    lessonSummary: '今天你们学了一件让很多人头疼、但其实逻辑完整的事：拉丁语的形容词必须与名词在性、数、格三个维度上保持一致。bonus 是好的阳性，bona 是好的阴性，bonum 是好的中性。修饰 puella 用 bona，修饰 magister 用 bonus——不是因为喜好，是因为语法规则。更进一步，当名词变成宾格，形容词词尾也随之变化：bona puella 变成 bonam puellam，两个词同步变格。这套一致性原则，让读者在看到任何词组时，都能靠词尾立刻判断哪些词是一起的。',
    nextLessonPreview: '下一课讲句子结构。拉丁语的基本语序是 SOV——主语在前，宾语在中，动词在末尾。你们会学到一套翻译策略，让任何拉丁语句子都能被系统地拆解，不再靠猜。'
  },

  5: {
    atmosphere: '珀西瓦尔在黑板上写了一句长句，然后退后一步，不作任何解释。全班盯着这句话：Puella parvum librum magistro dat。没有人立刻开口。',
    opening: '「你们看到了什么？」她没有提示，只是等。等了几秒，「动词在最后。Puella 以 -a 结尾，主格。librum 以 -um 结尾，宾格。这就是今天的内容：SOV 语序，以及如何用一套固定方法拆解任何拉丁语句子。」她在黑板上写下三个字母：S、O、V，「主语，宾语，动词。先找动词，在末尾。然后找主格，那是主语。然后找宾格，那是宾语。顺序清楚了，句子就明白了。」',
    keyPoints: [
      {
        point: 'SOV：拉丁语的基本语序',
        blackboardQ: {
          type: 'formulas',
          label: 'SOV 语序',
          lines: [
            '英语: S - V - O',
            '  The girl  loves  the teacher.',
            '   主语     动词    宾语',
            '',
            '拉丁语: S - O - V',
            '  Puella  magistrum  amat.',
            '   主语     宾语      动词',
            '',
            '动词通常在末尾'
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上并排写出两个句子，英语和拉丁语，「The girl loves the teacher。Puella magistrum amat。」她用颜色不同的粉笔标出了三个成分：主语、宾语、动词。「英语：主语-动词-宾语，SVO。拉丁语：主语-宾语-动词，SOV。动词在末尾。」她停了一秒，「这是拉丁语最常见的基本语序。当然，格变化允许词序灵活调换——但如果你不确定，先假设动词在末尾，你通常是对的。」',
          text: '「Magister discipulum docet 中，动词是哪个词？」',
          options: ['Magister', 'discipulum', 'docet'],
          answer: 2
        },
        contextRight: '「不错。」她在 docet 下画了一条线，「docet——第三人称单数，词尾 -t。他/她教。Magister 是主格，老师，主语。discipulum 是宾格，学生，宾语。老师教学生。」她停了一秒，「找动词，在末尾。确认人称。然后主格找主语，宾格找宾语。这就是方法。」',
        contextWrong: '「docet。」她在这个词下画线，「词尾 -t，第三人称单数，这是动词。拉丁语句子的动词通常在末尾——这是第一个要找的。Magister 是主格，discipulum 是宾格。老师教学生。」',
        blackboard: {
          type: 'formulas',
          label: 'SOV 例句拆解',
          lines: [
            'Magister  discipulum  docet.',
            '   S           O        V',
            ' 主语(主格)  宾语(宾格)  动词',
            ' magister   discipulum  docet',
            ' 老师        学生        教',
            '',
            '→ 老师教学生。'
          ]
        }
      },
      {
        point: '翻译三步法：动词→主格→宾格',
        blackboard: {
          type: 'formulas',
          label: '拉丁语句子拆解方法',
          lines: [
            '第一步：找动词（通常在末尾）',
            '  看词尾 -t / -nt / -mus / -tis',
            '',
            '第二步：找主格（动作执行者）',
            '  看词尾 -a / -us / -er',
            '',
            '第三步：找宾格（动作承受者）',
            '  看词尾 -am / -um',
            '',
            '例：Puella librum legit.',
            '  1. legit = 动词（她读）',
            '  2. Puella = 主格（女孩，主语）',
            '  3. librum = 宾格（书，宾语）',
            '  → 女孩读书。'
          ]
        },
        context: '珀西瓦尔在黑板上写出三步法框架，字迹一如既往地工整。「你们不需要靠语感翻译拉丁语。」她说，「有方法可以依循。第一步：找动词。动词词尾是 -t、-nt、-mus 之类。找到动词，你就知道句子在说什么动作。第二步：找主格。主格词尾是 -a 或 -us，这是做动作的人。第三步：找宾格。宾格词尾是 -am 或 -um，这是承受动作的人。」她用这个方法拆解了 Puella librum legit，一步一步展示，「这套方法在任何拉丁语句子里都适用。句子多复杂，框架都一样：动词说动作，主格说谁做，宾格说做了谁。」她停顿，「咒语的语法也是这样。Expecto Patronum——expecto，第一人称单数，我期待；Patronum，宾格，守护神，我期待守护神。动词+宾格，两词成咒。精确到每一个词尾。」'
      },
      {
        point: '词序变化与强调',
        blackboard: {
          type: 'formulas',
          label: '词序变化的修辞效果',
          lines: [
            '以下三句意思相同：',
            '',
            'Puella magistrum amat.   （普通陈述）',
            'Magistrum puella amat.   （强调"老师"）',
            'Amat puella magistrum.   （强调"爱这个动作"）',
            '',
            '格不变，意思不变',
            '位置变化，强调点变化',
            '',
            '诗歌中词序更加灵活',
            '  → 靠格判断意思，不靠位置'
          ]
        },
        context: '珀西瓦尔在黑板上把同一个句子写了三遍，词序各不相同。「意思完全一样，」她说，「因为格没有变：puella 还是主格，magistrum 还是宾格。但强调的重点不同。把一个词放在句子开头，是强调它。」她指着第二行，「Magistrum puella amat——先说老师，再说女孩，再说爱——强调的是"是老师"，而不是别人。」她停了一秒，「在拉丁语诗歌里，词序往往为了韵律完全打乱。你们以后读到维吉尔或奥维德，会发现动词可以跑到开头，名词可以跑到末尾——这正是因为格承担了所有语法意义，词序解放出来服务于音乐性。」她靠在讲台上，「这是格系统最强大的地方：意义在词尾，不在位置，语言的表达空间因此大了很多。」'
      },
      {
        point: '综合练习：Puella parvum librum magistro dat',
        blackboardQ: {
          type: 'formulas',
          label: '综合练习句',
          lines: [
            'Puella parvum librum magistro dat.',
            '',
            '拆解：',
            '  dat      = 动词（她给，第三人称单数）',
            '  Puella   = 主格（女孩，主语）',
            '  librum   = 宾格（书，宾语）',
            '  parvum   = 宾格（小的，修饰 librum）',
            '  magistro = ???（老师）'
          ]
        },
        question: {
          leadIn: '珀西瓦尔指向课前就写在黑板上的那句话，「现在你们有工具了。」她逐词拆解：dat，动词，给；Puella，主格，女孩；librum，宾格，书；parvum，宾格中性，小的，修饰书。「剩下一个词——magistro。」她在这个词下画了一条线，「这个词尾 -o，不是主格，不是宾格。老师不是做动作的，也不是被给的那个东西——老师是给的对象。这是我们还没正式学过的格，但你们能猜到它的功能吗？」',
          text: '「"女孩给老师一本小书"，给的"对象"用的是什么格？」',
          options: ['主格', '宾格', '与格（间接宾语）'],
          answer: 2
        },
        contextRight: '「不错。」她停了一秒，「与格——间接宾语，给的对象。词尾 -o 是第二变格法与格的标志。下节课我们正式讲与格。」她在黑板上把 magistro 下面的标注写出：与格。「今天记住这个预告：dat，给，后面常跟与格。给什么给谁——给什么是宾格，给谁是与格。」',
        contextWrong: '「与格——间接宾语。」她在黑板上写下这个词，「给的对象不用宾格，用与格。词尾 -o 是第二变格法与格的词尾。下节课讲与格，今天先知道：magistro 是与格，老师是被给予书的那个人，不是被给予本身。」',
        blackboard: {
          type: 'formulas',
          label: '句子完整拆解',
          lines: [
            'Puella  parvum  librum  magistro  dat.',
            ' 主格   宾格中  宾格阳   与格       动词',
            ' 女孩   小的    书       老师       给',
            '',
            '→ 女孩给老师一本小书。',
            '',
            '词序：S - Adj+O - 与格 - V',
            '（形容词紧贴名词，与格在动词前）'
          ]
        }
      }
    ],
    lessonSummary: '今天你们把前几节课学的工具组合成了一套阅读方法。拉丁语的基本语序是 SOV——动词在末尾，主语用主格，宾语用宾格。翻译时先找动词，再找主格，再找宾格，三步就能还原大多数句子的骨架。词序可以为了强调或诗歌韵律而改变，但格不变，意思就不变——这是格系统最重要的价值。课末的那句练习句还预示了下节课的内容：间接宾语，与格，给的对象用的那个格，词尾 -o。',
    nextLessonPreview: '下一课正式讲与格——间接宾语。dare（给）、dicere（告诉）、monstrare（展示）这些动词，后面除了宾格，还会跟一个与格。第一变格法的与格词尾是 -ae，第二变格法是 -o。两个词尾，一个新格，让句子表达的信息翻倍。'
  },

  6: {
    atmosphere: '珀西瓦尔在黑板上写了两行对比：puella → puellae，magister → magistro。两个词后面跟着空白，等着学生们去填上意思。教室里午后的光线斜射进来，尘埃在光柱里慢慢飘浮。',
    opening: '「第三个格。」她转过身，「你们已经知道主格和宾格。今天学与格——间接宾语。」她在黑板上写下一句话：Magister puellae librum dat，「老师给女孩一本书。给什么——librum，宾格，书。给谁——puellae，这是新词尾，与格。给的对象用与格，不用宾格。」她停顿，「区分宾格和与格是拉丁语的关键能力。同一个动词后面可能同时跟着两个名词：宾格说接受的东西，与格说接受的人。词尾不同，角色不同。」',
    keyPoints: [
      {
        point: '与格词尾：-ae 与 -o',
        blackboardQ: {
          type: 'formulas',
          label: '与格（Dative）词尾',
          lines: [
            '第一变格法（阴性）：',
            '  主格 puella  →  与格 puellae（-ae）',
            '',
            '第二变格法（阳性）：',
            '  主格 magister → 与格 magistro（-o）',
            '  主格 amicus   → 与格 amico（-o）',
            '',
            '与格 = 动作的间接接受者',
            '  "给/告诉/展示/显示"的对象'
          ]
        },
        question: {
          leadIn: '珀西瓦尔依次指向黑板上的两行，「puella 是第一变格法阴性名词，与格词尾 -ae，变成 puellae。magister 是第二变格法阳性名词，与格词尾 -o，变成 magistro。」她在 magistro 旁写了 amico，「amicus——朋友，第二变格法。与格 amico，词尾同样是 -o。」她在黑板上写下 dat，「dat——给，第三人称单数。这个动词后面跟两个名词：宾格说给了什么，与格说给了谁。」',
          text: '「把 puella 变成与格，应该是？」',
          options: ['puellam', 'puellae', 'puella'],
          answer: 1
        },
        contextRight: '「不错。」她在 puellae 下画线，「-ae，第一变格法与格词尾。注意：-ae 和属格的词尾相同，区分它们靠的是语境——与格是给的对象，属格是所属关系。下节课讲属格，你们会看到这个区分。」',
        contextWrong: '「puellae。」她写了一遍，「-ae，与格词尾，第一变格法。-am 是宾格，-a 是主格，-ae 是与格。三个不同的词尾，三种不同的语法角色。」',
        blackboard: {
          type: 'formulas',
          label: '与格词尾对照',
          lines: [
            '          主格      宾格      与格',
            '一变(阴)  puella    puellam   puellae',
            '二变(阳)  magister  magistrum magistro',
            '二变(阳)  amicus    amicum    amico',
            '',
            '与格词尾：一变 -ae，二变 -o'
          ]
        }
      },
      {
        point: '常用与格动词：dare, dicere, monstrare',
        blackboard: {
          type: 'formulas',
          label: '常接与格的动词',
          lines: [
            'dare      （给）',
            '  → Magister puellae librum dat.',
            '     老师给女孩一本书。',
            '',
            'dicere    （告诉/说）',
            '  → Puella amico veritatem dicit.',
            '     女孩告诉朋友真相。',
            '',
            'monstrare （展示）',
            '  → Magister discipulis viam monstrat.',
            '     老师给学生们展示道路。'
          ]
        },
        context: '珀西瓦尔把三个例句整齐地写在黑板上，每行都标注了与格成分。「这三个动词——dare、dicere、monstrare——都是典型的与格动词。它们描述的动作天然涉及两个对象：给的东西和给的对象，告诉的内容和告诉的人，展示的东西和展示给谁。」她指着第一句，「Magister puellae librum dat——老师给女孩一本书。librum，宾格，书，被给出的东西。puellae，与格，女孩，接受书的人。」她停了一秒，「英语里 I give you a book，你们要注意哪个是直接宾语哪个是间接宾语。拉丁语靠词尾区分，更明确。」她走到黑板旁，「语言是最古老的魔法，巫师只是把它说得更大声一点——这句话在与格这里特别有意义。魔法世界里有很多咒语是"给予"类的：给予光，给予力量，给予伤害。给谁给什么，词尾说清楚了，魔法才能准确落点。」'
      },
      {
        point: '与格 vs 宾格：区分两种宾语',
        blackboard: {
          type: 'formulas',
          label: '直接宾语 vs 间接宾语',
          lines: [
            '直接宾语（宾格）= 动作直接作用的对象',
            '间接宾语（与格）= 动作的受益者/接受者',
            '',
            'Puella amico librum dat.',
            '         与格   宾格  动',
            '   女孩  朋友[间接] 书[直接] 给',
            '→ 女孩给朋友一本书。',
            '',
            '口诀：给/告诉/展示',
            '  → 给什么（宾格）给谁（与格）'
          ]
        },
        context: '珀西瓦尔在黑板上画了一个简单的示意图：一个箭头指向"书"（宾格），另一个弧形箭头指向"朋友"（与格）。「直接宾语是动作直接作用的对象——给的是书，书是宾格。间接宾语是接受这个动作的人或对象——接受书的是朋友，朋友是与格。」她停顿，「这个区分在英语里也存在：I give you a book，you 是间接宾语，a book 是直接宾语。拉丁语用词尾把这个区分写进了词里，不需要靠语序。」她转身，「记一个口诀：给/告诉/展示，这三类动词后面，给什么用宾格，给谁用与格。以后遇到其他与格动词，也可以套这个逻辑——间接接受动作的一方用与格。」'
      },
      {
        point: '与格在魔法世界的对应',
        blackboardQ: {
          type: 'formulas',
          label: '魔法咒语中的与格逻辑',
          lines: [
            '拉丁语与格 = 动作的间接接受者',
            '',
            '魔法世界类比：',
            '  Accio [物品]       → 宾格（直接目标）',
            '  Expecto [Patronum] → 宾格（直接目标）',
            '',
            '与格典型用法：',
            '  dare lucem mundo   → 给世界光',
            '         与格 宾格',
            '  "给"什么（宾格）给谁（与格）'
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板旁停住，「来做一个综合练习。」她写下一句话：Magister discipulo consilium dat。「拆解这个句子。dat——动词，给。Magister——主格，老师，主语。consilium——这个词是建议，第二变格法中性，词尾 -um，宾格，被给出的东西。discipulo——」她停了一下，「这个词尾是什么格？」',
          text: '「discipulo（学生）在这句话里是什么格？它的角色是什么？」',
          options: ['宾格，承受动作的对象', '与格，接受建议的那个人', '主格，做动作的人'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「discipulo，词尾 -o，第二变格法与格。老师把建议给了学生——学生是间接接受者，用与格。被给出的建议 consilium 是宾格。」她在黑板上把完整翻译写出来：老师给学生建议。「格决定角色，角色决定翻译。」',
        contextWrong: '「与格。」她不带感情，「词尾 -o，第二变格法与格，间接宾语。discipulo 是接受建议的那个人，不是动作直接作用的对象。宾格是 consilium，建议，被给出的东西。」',
        blackboard: {
          type: 'formulas',
          label: '综合例句拆解',
          lines: [
            'Magister discipulo  consilium  dat.',
            '  主格     与格       宾格      动词',
            '  老师    学生[间接]  建议[直接]  给',
            '',
            '→ 老师给学生建议。',
            '',
            '关键词尾：',
            '  -o（二变与格）= 间接接受者',
            '  -um（宾格）  = 直接受体'
          ]
        }
      }
    ],
    lessonSummary: '今天你们学了第三个格——与格，表示间接宾语，也就是给的对象、告诉的对象、展示的对象。第一变格法的与格词尾是 -ae（puellae），第二变格法的与格词尾是 -o（magistro, amico）。区分宾格和与格的关键是理解动作的层次：宾格是直接被作用的东西，与格是接受这个动作的人。dare、dicere、monstrare 这三个动词是练习与格的好起点——给什么、告诉什么、展示什么用宾格，给谁、告诉谁、展示给谁用与格。',
    nextLessonPreview: '下一课讲夺格——一个功能最多的格。工具、伴随、来源，三种完全不同的意思，却用同一个词尾表达。介词 cum、ex、in 都与夺格搭配，而巫师用魔杖施法，恰好是夺格的"工具用法"的最好例子。'
  },

  7: {
    atmosphere: '珀西瓦尔在黑板上写下三行：用剑战斗。和朋友散步。从城市出来。三个完全不同的句子，下面写了同一个标注：夺格。她没有解释，让学生们先自己想一想。',
    opening: '「这三句话，拉丁语都用同一个格。」她指向黑板，「Gladio pugnat——用剑战斗。Cum amico ambulat——和朋友散步。Ex urbe venit——从城市出来。」她停了一秒，「工具，伴随，来源——三种关系，词尾相同。这就是夺格：拉丁语里功能最多、也最有意思的格。」她在黑板上补上：Ablative，「夺格的词尾通常带有长音 -a 或 -e。今天的关键不是只记词尾，而是理解它能表达哪几种意思，以及怎么用介词来区分它们。」',
    keyPoints: [
      {
        point: '夺格词尾：第一变格法与第二变格法',
        blackboardQ: {
          type: 'formulas',
          label: '夺格（Ablative）词尾',
          lines: [
            '第一变格法单数夺格：-a（长音）',
            '  puella（主格）→ puella（夺格，长音 a）',
            '  terra（主格） → terra（夺格，长音 a）',
            '',
            '注意：主格和夺格词尾相同！',
            '  靠语境和介词区分',
            '',
            '第二变格法单数夺格：-o（长音）',
            '  amicus（主格）→ amico（夺格）',
            '  magister     → magistro（夺格）'
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上画了一个表格，第一变格法的主格和夺格并排写出。「puella——主格。puella——夺格。词尾相同。」她停顿，「这是初学者容易出错的地方。第一变格法的主格和夺格都以 -a 结尾，但夺格的 a 是长音，古典拉丁语文本中有时会标长音符号区分。」她转向第二变格法，「第二变格法的情况更好——与格是 -o，夺格也是 -o，但和主格 -us 完全不同。」她停了一秒，「实际阅读时，靠语境和介词区分格——夺格通常跟着介词。」',
          text: '「第一变格法中，哪两个格的词尾形式相同？」',
          options: ['主格与宾格', '主格与夺格', '宾格与与格'],
          answer: 1
        },
        contextRight: '「不错。」她在两个 puella 旁边分别标注了 Nom. 和 Abl.，「第一变格法的主格和夺格词尾相同——都是 -a。但夺格几乎总是跟着介词出现，这是区分它们最实用的方法。」',
        contextWrong: '「主格与夺格。」她不带感情，「两者都以 -a 结尾。靠介词区分——夺格通常跟在 cum、ex、in 之类的介词后面，主格则是句子的主语，不会跟介词。」',
        blackboard: {
          type: 'formulas',
          label: '夺格词尾汇总',
          lines: [
            '变格法    主格        宾格        夺格',
            '------    ------      ------      ------',
            '一变(阴)  puella      puellam     puella',
            '二变(阳)  amicus      amicum      amico',
            '二变(阳)  magister    magistrum   magistro',
            '',
            '一变：主格=夺格（靠介词区分）',
            '二变：与格=夺格（词尾均为 -o）'
          ]
        }
      },
      {
        point: '夺格的三种用法：工具、伴随、来源',
        blackboard: {
          type: 'formulas',
          label: '夺格三种用法',
          lines: [
            '1. 工具用法（无介词）',
            '   Gladio pugnat.',
            '   用剑[夺格]  战斗',
            '   → 他用剑战斗。',
            '',
            '2. 伴随用法（cum + 夺格）',
            '   Cum amico ambulat.',
            '   和朋友[夺格]  散步',
            '   → 他和朋友散步。',
            '',
            '3. 来源用法（ex/de + 夺格）',
            '   Ex urbe venit.',
            '   从城市[夺格]  来',
            '   → 他从城市来。'
          ]
        },
        context: '珀西瓦尔把三种用法分三段写完，停下来看了全班一眼。「工具用法不用介词。」她指着第一行，「直接把工具放在夺格就够了——Gladio pugnat，用剑战斗，gladio 是 gladius（剑）的夺格，没有介词。英语里要说 with a sword，拉丁语不需要 with，词尾已经表达了工具的关系。」她指向第二组，「伴随用法用介词 cum——和……一起。cum 永远和夺格搭配，没有例外。」她停了一秒，「魔法世界有一个有趣的用法：巫师用魔杖施法，魔杖是工具。如果用拉丁语说，就是夺格工具用法。virga magica——魔法魔杖，夺格形式 virga magica，"用魔法魔杖"。我们每次施咒，其实都在使用夺格。」她放下粉笔，「来源用法用 ex 或 de，两者都接夺格，表示从某处来、源自某处。ex 通常指从内部出来，de 强调下降或来源。」'
      },
      {
        point: '常用介词与夺格搭配',
        blackboard: {
          type: 'formulas',
          label: '接夺格的介词',
          lines: [
            'cum   （和……一起）  + 夺格',
            'ex/e  （从……里面）  + 夺格',
            'de    （从……/关于） + 夺格',
            'in    （在……里面）  + 夺格',
            'ab/a  （被……/从……） + 夺格',
            'sine  （没有……）    + 夺格',
            '',
            '注意：in + 夺格 = 在……里',
            '      in + 宾格 = 进入……（移动）'
          ]
        },
        context: '珀西瓦尔把介词列表写在黑板上，在最后两行停了一下。「in 这个介词特别重要。」她在 in 下面画了双线，「in 跟夺格，表示在某个地方里——静止状态。in + 宾格，表示进入某个地方——移动状态。」她写出两个例句：In horto ambulat（在花园里散步，夺格），In hortum intrat（走进花园，宾格）。「同一个介词，搭配的格不同，意思完全不同。这是你们需要特别记住的例外。」她停顿，「其余介词很稳定：cum 永远接夺格，ex 永远接夺格，sine——没有——永远接夺格。记住 in 的双重用法，其他的默认接夺格就行。」她在黑板角落轻轻写下：sine qua non，「没有它就不行——这是拉丁语成语，sine，没有，qua，夺格，non，不。今天你们已经能读懂它了。」'
      },
      {
        point: '工具用法与魔法施法',
        blackboardQ: {
          type: 'formulas',
          label: '魔法联动：夺格工具用法',
          lines: [
            '夺格工具用法：表示用……做某事',
            '',
            '  Gladio pugnat.  （用剑战斗）',
            '  Virga cantat.   （用魔杖念咒）',
            '  Aqua sanat.     （用水治愈）',
            '',
            '巫师用魔杖施法 = 夺格工具用法',
            '  virga = 魔杖（第一变格法阴性）',
            '  夺格：virga（词尾同主格，靠语境）'
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写下 Puella virga Lumos dicit。「来拆解这个句子。」她停了一秒，「dicit——告诉/说，第三人称单数。Puella——主格，女孩，主语。Lumos——咒语名词，宾格（假设它是）。virga——」她指着这个词，「virga，魔杖，第一变格法阴性，词尾 -a——和主格一样。但这里它不是主语，因为主语已经是 puella 了。那它是什么格？」',
          text: '「句子中 virga（魔杖）最可能是什么格，表示什么意思？」',
          options: ['主格，魔杖是主语', '夺格，用魔杖施咒（工具）', '宾格，魔杖是宾语'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「夺格工具用法。virga，词尾 -a，在这里是夺格——因为主语已经是 puella，virga 不能再是主格。用魔杖念出荧光咒。」她停顿，「每一次施法，每一次拿着魔杖念出咒语，都是夺格工具用法的具体体现。语言是最古老的魔法，巫师只是把它说得更大声一点。」',
        contextWrong: '「夺格，工具用法。」她在黑板上写出 Abl. 标注，「virga 的词尾 -a 和主格相同，但句子里已经有主语 puella，所以 virga 不是主格。它是夺格——用魔杖施法，工具用法，无需介词。」',
        blackboard: {
          type: 'formulas',
          label: '完整例句：魔法施法',
          lines: [
            'Puella  virga    Lumos  dicit.',
            '  主格   夺格     宾格   动词',
            '  女孩  用魔杖   荧光咒  说出',
            '',
            '→ 女孩用魔杖念出荧光咒。',
            '',
            '夺格工具用法：直接用夺格，无需介词',
            '伴随用法：需要介词 cum'
          ]
        }
      }
    ],
    lessonSummary: '今天你们学了拉丁语里功能最丰富的格——夺格。它有三种核心用法：工具用法（用……做某事，不加介词），伴随用法（和……一起，加 cum），来源用法（从……，加 ex 或 de）。第一变格法的夺格词尾 -a 与主格相同，靠介词和语境区分；第二变格法夺格词尾 -o 与与格相同。介词 in 特别要注意：接夺格表示"在里面"，接宾格表示"进入"。而每一次拿着魔杖施法，其实都在使用夺格的工具用法——这不是巧合，是古代巫师把语言精确性带入魔法实践的证明。',
    nextLessonPreview: '下一课讲属格——所属关系，"……的"。liber magistri，老师的书。拉丁语用词尾 -i 或 -ae 把所属关系直接写进名词，不需要英语的 apostrophe-s。你们还会发现属格和与格在第一变格法里有相同的词尾——区分它们的方法值得认真学一下。'
  },

  8: {
    atmosphere: '珀西瓦尔在黑板上写了四个词，排成两列：liber magistri，canis puellae。她没有写翻译，等着学生们猜。',
    opening: '「这两个短语，你们能猜出意思吗？」她没有等回答就继续，「liber——书。magistri——词尾 -i，老师的。canis——狗。puellae——词尾 -ae，女孩的。」她用粉笔圈住两个词尾，「这就是属格——所属关系。"谁的"用属格来表达。今天我们学最后一个基础格，学完之后，你们就有了五个格的完整图景。」',
    keyPoints: [
      {
        point: '属格词尾：-ae 与 -i',
        blackboardQ: {
          type: 'formulas',
          label: '属格（Genitive）词尾',
          lines: [
            '第一变格法单数属格：-ae',
            '  puella（女孩）→ puellae（女孩的）',
            '  regina（女王）→ reginae（女王的）',
            '',
            '第二变格法单数属格：-i',
            '  magister → magistri（老师的）',
            '  amicus   → amici  （朋友的）',
            '',
            '属格通常紧跟在被修饰名词之后'
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上把第一变格法的属格词尾 -ae 写了两遍，用不同颜色，「注意——第一变格法的属格词尾 -ae，和与格的词尾一模一样。」她停顿，「你们可能会问：怎么区分？靠语义和语境。与格是"给谁"，属格是"谁的"。Magister puellae librum dat——老师给女孩书，puellae 是与格。Liber puellae——女孩的书，puellae 是属格。有没有动词 dat、语境是否表达所属，就是区分线索。」',
          text: '「把 magister（老师，第二变格法）变成属格，应该是？」',
          options: ['magistrum', 'magistri', 'magistro'],
          answer: 1
        },
        contextRight: '「不错。」她在 magistri 下画线，「-i，第二变格法属格词尾。magistri——老师的。liber magistri——老师的书。」她停了一秒，「第二变格法属格词尾 -i 很好记，因为它在其他格里不重复出现，不会混淆。」',
        contextWrong: '「magistri。」她不带感情，「词尾 -i，第二变格法属格。-um 是宾格，-o 是与格或夺格。属格 -i 表示所属：magistri librum——老师的书。」',
        blackboard: {
          type: 'formulas',
          label: '属格词尾对照',
          lines: [
            '变格法    主格        宾格        属格',
            '------    -----       -----       -----',
            '一变(阴)  puella      puellam     puellae',
            '二变(阳)  magister    magistrum   magistri',
            '二变(阳)  amicus      amicum      amici',
            '',
            '一变属格 -ae（与与格同，靠语境区分）',
            '二变属格 -i（独特，不与其他格重叠）'
          ]
        }
      },
      {
        point: '属格的位置：紧跟被修饰名词',
        blackboard: {
          type: 'formulas',
          label: '属格的句法位置',
          lines: [
            '英语：teacher\'s book  （属格前置）',
            '拉丁语：liber magistri （属格后置）',
            '',
            '属格通常紧跟被修饰名词之后：',
            '  liber  magistri   →  老师的书',
            '  canis  puellae   →  女孩的狗',
            '  porta  urbis     →  城市的门',
            '',
            '但也可移动位置（修辞需要）：',
            '  magistri liber   →  也是"老师的书"'
          ]
        },
        context: '珀西瓦尔把英语和拉丁语的属格位置并排写在黑板上。「英语的属格——apostrophe-s——放在名词前面。拉丁语属格放在名词后面，通常紧跟。」她指着 liber magistri，「liber——书，magistri——老师的，属格。老师的书。」她又写下 porta urbis，「porta，门；urbis，城市的，第三变格法属格，词尾 -is（下学期学）。城市的门。」她停顿，「属格短语在拉丁语里极为常见，是文本的基本构建块。当你看到两个名词连在一起，第二个词尾是 -ae 或 -i，几乎可以确定它是属格——所属关系。」她停了一秒，「语言是最古老的魔法，巫师只是把它说得更大声一点——Room of Requirement，英语里 of 表达所属，拉丁语里 of 不需要，词尾本身就是 of。Cubiculum necessitatis——需求之室，necessitatis 是 necessitas 的属格。」'
      },
      {
        point: '属格 vs 与格的区分',
        blackboard: {
          type: 'formulas',
          label: '属格(-ae)与与格(-ae)的区分',
          lines: [
            '第一变格法：属格 = 与格 = -ae',
            '',
            '区分方法：',
            '  1. 动词类型',
            '     dare/dicere 后 → 与格（给谁）',
            '     无动词短语   → 属格（谁的）',
            '',
            '  2. 语义逻辑',
            '     liber puellae  = 女孩的书（属格）',
            '     dat puellae    = 给女孩    （与格）',
            '',
            '  3. 有无其他宾格成分',
            '     有宾格 + -ae → 很可能是与格'
          ]
        },
        context: '珀西瓦尔在黑板上用平行结构展示了两种用法的区分方法，「第一变格法里，属格和与格词尾相同，这是初学者的第一个真正难关。」她停顿，「但有三条线索可以帮助判断。第一，看动词类型——dat（给）、dicit（告诉）之类的动词后面的 -ae 几乎总是与格。第二，看语义逻辑——短语里没有动词，两个名词连在一起，后面那个 -ae 几乎总是属格。第三，看句子里有没有宾格成分——如果有宾格了，再出现一个 -ae，更可能是与格（间接宾语）而不是属格（所属）。」她停了一秒，「没有捷径——靠读，靠积累语境感。拉丁语的精确性不是因为它没有歧义，而是因为受过训练的读者知道用什么工具消除歧义。」'
      },
      {
        point: '五格汇总小表',
        blackboardQ: {
          type: 'formulas',
          label: '五格单数词尾汇总（puella / amicus）',
          lines: [
            '格名   意思        一变词尾  二变词尾',
            '----   ------      --------  --------',
            '主格   执行者      -a        -us/-er',
            '宾格   承受者      -am       -um',
            '与格   间接接受者  -ae       -o',
            '夺格   工具/伴随等 -a(长)    -o',
            '属格   所属"的"    -ae       -i'
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写出了五格汇总表，「这是本章的完整图景。五个格，每个有自己的功能，每个有自己的词尾——或者同形但功能不同。」她点了几个重叠的词尾，「一变的与格、夺格、属格——三个格，有两对词尾重叠。这就是为什么读拉丁语需要理解语法，而不只是记忆词尾。」她指向整张表，「现在来做一个综合检测。」',
          text: '「"老师的书"中，"老师的"用什么格？」',
          options: ['属格', '与格', '夺格'],
          answer: 0
        },
        contextRight: '「不错。」她停了一秒，「属格——所属关系。liber magistri——老师的书，magistri 是第二变格法属格，词尾 -i。」她指着表格，「属格是今天学的最后一个基础格。主格、宾格、与格、夺格、属格——五格，你们全部接触过了。」',
        contextWrong: '「属格。」她不带感情，「所属关系用属格，不是与格。与格是给的对象——"给老师"用与格 magistro。"老师的"用属格 magistri，词尾 -i。」',
        blackboard: {
          type: 'formulas',
          label: '五格功能总结',
          lines: [
            '主格  Nom.  动作执行者',
            '宾格  Acc.  动作直接承受者',
            '与格  Dat.  动作间接接受者（给谁）',
            '夺格  Abl.  工具/伴随/来源/位置',
            '属格  Gen.  所属（……的）',
            '',
            '以上为拉丁语最常用五格',
            '另有呼格（Voc.）用于呼唤，下学期讲'
          ]
        }
      }
    ],
    lessonSummary: '今天学完了拉丁语的第五个基础格——属格，表示所属关系，也就是"……的"。第一变格法的属格词尾是 -ae（puellae，女孩的），第二变格法的属格词尾是 -i（magistri，老师的）。属格通常放在被修饰名词之后，这与英语的 apostrophe-s 前置不同。第一变格法里属格和与格词尾相同，区分它们要靠动词类型、语义逻辑和句子结构。今天你们还完成了五格汇总——主格、宾格、与格、夺格、属格，格系统的完整框架就在这张表里。',
    nextLessonPreview: '下一课要学第二变位动词——videre，看见。你们会发现它和第一变位 amare 的变位框架相同，但词干元音从 a 变成了 e。两套变位并排一看，规律立刻清晰。还有几个常用的第二变位动词：habere（有）、monere（警告）、tenere（保持）。'
  },

  9: {
    atmosphere: '珀西瓦尔把黑板分成了左右两栏，左边写 amare，右边写 videre。两列并排，像是在等学生们自己发现差别。',
    opening: '「上节课结束了格系统的第一部分。今天回到动词。」她指向两栏，「amare——你们已经会变位了。videre——今天学。」她用粉笔在两个不定式的 -a- 和 -e- 下面分别画圈，「唯一的根本差别在这里：词干元音。amare 是 -a-，videre 是 -e-。其余的词尾框架完全相同。」她停了一秒，「第二变位动词的人称词尾和第一变位一样：-o, -s, -t, -mus, -tis, -nt。区别只在词干。」',
    keyPoints: [
      {
        point: 'videre 的词干与结构',
        blackboardQ: {
          type: 'formulas',
          label: '第二变位动词：videre',
          lines: [
            'videre = 不定式（to see）',
            '',
            '结构：vid- + -ere',
            '       词干    不定式词尾',
            '',
            '去掉 -re → 现在时词干 vide-',
            '  vide- + -o  →  video（我看见）',
            '  vide- + -s  →  vides（你看见）',
            '  vide- + -t  →  videt（他/她看见）'
          ],
          audio: [
            { text: 'video', src: 'audio/latin/lesson-9/verb-video.wav' },
            { text: 'vides', src: 'audio/latin/lesson-9/verb-vides.wav' },
            { text: 'videt', src: 'audio/latin/lesson-9/verb-videt.wav' }
          ]
        },
        question: {
          leadIn: '珀西瓦尔在右侧栏把 videre 的结构拆开来写，「videre，去掉不定式词尾 -re，得到现在时词干 vide-。注意这里的 -e-，这是第二变位的标志。词干是 vide-，不是 vid-——那个 e 是词干的一部分，不是词尾。」她写出前三个变位形式，「video——我看见。vides——你看见。videt——他看见。词尾 -o, -s, -t，和 amare 完全一样。」',
          text: '「videre 的现在时词干是什么？」',
          options: ['vid-', 'vide-', 'vider-'],
          answer: 1
        },
        contextRight: '「不错。」她圈住 vide-，「vide-，带着那个 -e-。第二变位动词词干的末尾元音是 e，这是它和第一变位（词干末尾 a）的唯一区别。词尾框架完全相同。」',
        contextWrong: '「vide-，包括那个 e。」她不带感情，「第二变位词干末尾是 e，这是区分第一变位（a）和第二变位（e）的关键特征。vid- 去掉了词干元音，那是错误的。vider- 包含了不定式词尾的残余，也不对。」',
        blackboard: {
          type: 'formulas',
          label: 'videre 词干分析',
          lines: [
            'videre  →  去掉 -re  →  vide-',
            '',
            '第二变位标志：词干末尾元音 -e-',
            '第一变位标志：词干末尾元音 -a-',
            '',
            'vide- + 人称词尾：',
            '  -o   → video',
            '  -s   → vides',
            '  -t   → videt',
            '  -mus → videmus',
            '  -tis → videtis',
            '  -nt  → vident'
          ],
          audio: [
            { text: 'video', src: 'audio/latin/lesson-9/verb-video.wav' },
            { text: 'vides', src: 'audio/latin/lesson-9/verb-vides.wav' },
            { text: 'videt', src: 'audio/latin/lesson-9/verb-videt.wav' }
          ]
        }
      },
      {
        point: 'amare vs videre：并排变位对比',
        blackboard: {
          type: 'formulas',
          label: '第一变位 vs 第二变位',
          lines: [
            '人称    amare（爱）  videre（看见）',
            '----    ----------  -------------',
            '1sg     amo         video',
            '2sg     amas        vides',
            '3sg     amat        videt',
            '1pl     amamus      videmus',
            '2pl     amatis      videtis',
            '3pl     amant       vident',
            '',
            '词尾完全相同，词干元音不同',
            '  一变 ama-  vs  二变 vide-'
          ]
        },
        context: '珀西瓦尔把两栏对比表写完，退后一步。「你们看这两列词尾——-o, -s, -t, -mus, -tis, -nt。完全一样。」她停顿，「只有词干元音不同：amare 的词干 ama-，videre 的词干 vide-。这就是两种变位法在现在时的全部区别。」她指向第三行，「amat——他爱；videt——他看见。词尾 -t，相同。改变的只有词干里那个元音。」她在黑板上补了一行注：不定式词尾 -are = 第一变位；-ere = 第二变位（还有其他）。「所以判断一个动词是哪种变位，先看不定式词尾：-are 是第一变位，-ere 可能是第二变位。」她停了一秒，「Homenum Revelio——revelo 来自 revelere 类似词根，re- 前缀加 velum（帷幕），揭开帷幕。魔法用词组从拉丁语动词里生长出来，词根的形态规律没有改变。」'
      },
      {
        point: '常用第二变位动词',
        blackboard: {
          type: 'formulas',
          label: '常用第二变位动词',
          lines: [
            '不定式      意思      词干',
            '--------    ----      ----',
            'videre      看见      vide-',
            'habere      有/拥有   habe-',
            'monere      警告      mone-',
            'tenere      保持/持有 tene-',
            'tacere      沉默      tace-',
            'manere      留下      mane-',
            '',
            '全部用 -e- 词干，接同一套词尾'
          ]
        },
        context: '珀西瓦尔在黑板上把六个常用第二变位动词排成了一张整齐的表，每个都标注了词干。「这六个动词，你们这周要认识。habere——有，拥有。拉丁语里没有 have 的独立动词，直接用 habere。Habeo librum——我有一本书。monere——警告，告诫。这个词根在英语里留下了 admonish（训诫）。tenere——保持，持有，和 detention 里的 ten 词根有关——被扣留，被持有。」她在 tacere 旁停了一下，「tacere——沉默。这个词有一条命令式非常出名：Tace！——沉默！」她停顿，「一个字，一个感叹号，比 Be quiet 有力得多。语言是最古老的魔法，巫师只是把它说得更大声一点——也可以把它说得更少、更精确。」'
      },
      {
        point: '综合运用：videre 句子练习',
        blackboardQ: {
          type: 'formulas',
          label: 'videre 句子练习',
          lines: [
            '练习：完整拆解',
            '',
            'Puella magistrum videt.',
            '',
            '  videt  = ???',
            '  Puella = ???',
            '  magistrum = ???'
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写下练习句，「用今天学的方法拆解这个句子。第一步：找动词。」她等了一秒，「videt——词尾 -t，第三人称单数，他/她看见。第二步：找主格。」又停了一秒，「Puella——主格 -a，女孩，主语。第三步：找宾格。magistrum——宾格 -um，老师，宾语。」她转身，「翻译？」',
          text: '「"Puella magistrum videt"的正确翻译是？」',
          options: ['老师看见了女孩', '女孩看见了老师', '女孩被老师看见'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「Puella——主格，主语，女孩；magistrum——宾格，宾语，老师；videt——动词，看见。女孩看见老师。主格执行动作，宾格承受动作，动词在末尾。」',
        contextWrong: '「女孩看见老师。」她不带感情，「Puella 是主格——动作执行者，女孩。magistrum 是宾格——动作承受者，老师。主格做动作，不是宾格。词尾决定角色。」',
        blackboard: {
          type: 'formulas',
          label: '练习句完整拆解',
          lines: [
            'Puella  magistrum  videt.',
            '  主格    宾格       动词(三变单)',
            '  女孩    老师       看见',
            '',
            '→ 女孩看见老师。',
            '',
            '动词 videt：vide- 词干 + -t 词尾',
            '= videre 第三人称单数现在时'
          ]
        }
      }
    ],
    lessonSummary: '今天你们掌握了第二变位动词。videre 的不定式词尾是 -ere，词干是 vide-，词干末尾元音 -e- 是它与第一变位（-a-）唯一的区别。变位框架完全相同：-o, -s, -t, -mus, -tis, -nt，六个人称词尾一字不差。有了这套框架，你们学会一种变位就相当于同时学会了其他变位——换词干就够了。常用的第二变位动词还有 habere（有）、monere（警告）、tenere（保持）、tacere（沉默）。珀西瓦尔最后那句 Tace！大概是本学期课堂上最简洁的一个完整句子。',
    nextLessonPreview: '下一课是本章的最后一课：数词和基础词汇，还有咒语词根初探。nox、lux、aqua、ignis——这些词你们已经熟悉了，今天会学到它们完整的拉丁语身份，以及它们是怎样变成你们每天喊出的那些咒语的。'
  },

  10: {
    atmosphere: '珀西瓦尔在黑板上写了六个词，排成两列：aqua, ignis, terra, caelum, nox, lux。旁边什么标注也没有。教室里的学生们开始小声念出这些词，有人已经猜出来了几个。',
    opening: '「你们认识这些词。」她转过身，「不是因为学过拉丁语——是因为你们每天使用它们的变形。」她在 nox 旁边写上 Nox，在 lux 旁边写上 Lumos，「这是今天的主题：数词，常用词汇，以及咒语词根的拉丁语来源。」她停了一秒，「学语言不只是学语法规则。语言还需要词汇。今天积累的这一组词，会在你们以后的阅读和咒语理解中反复出现。」',
    keyPoints: [
      {
        point: '基数词：unus 到 decem',
        blackboardQ: {
          type: 'formulas',
          label: '拉丁语基数词（1-10）',
          lines: [
            'unus    (1)    duo     (2)',
            'tres    (3)    quattuor(4)',
            'quinque (5)    sex     (6)',
            'septem  (7)    octo    (8)',
            'novem   (9)    decem   (10)',
            '',
            '英语词根联系：',
            '  September = septem（七）+ 月',
            '  October   = octo  （八）+ 月',
            '  December  = decem （十）+ 月'
          ]
        },
        question: {
          leadIn: '珀西瓦尔把数词写在黑板上，读了一遍，让学生们跟着轻声重复。「这十个数词，是拉丁语最基础的词汇之一。」她停顿，「注意：quinque——五。这个词在英语里留下了一个词：pentagon，五角形，但那是希腊语。拉丁语方向：quintet，五人组。」她在 septem 旁停下来，「septem——七。September，九月。你们可能觉得奇怪——9 月为什么叫 septem 月？因为古罗马历法从三月开始，九月是第七个月。octo、novem、decem——八、九、十，October、November、December，同理。」',
          text: '「拉丁语 decem 的意思是？」',
          options: ['五', '十', '十二'],
          answer: 1
        },
        contextRight: '「不错。」她在 decem 旁边写下 December，「decem——十，December——十月，也就是古罗马历法的第十个月。英语月份名字里保留了大量拉丁语数词，你们每次说日期都在使用拉丁语的遗存。」',
        contextWrong: '「十。」她不带感情，「decem——十。December——十月，古罗马历法里的第十个月。五是 quinque，十二在今天的内容里没有，但它是 duodecim——两个十，duo + decem。」',
        blackboard: {
          type: 'formulas',
          label: '基数词与英语遗存',
          lines: [
            'unus(1)  duo(2)  tres(3)  quattuor(4)',
            'quinque(5)  sex(6)  septem(7)',
            'octo(8)  novem(9)  decem(10)',
            '',
            '月份遗存：',
            '  September ← septem（7）',
            '  October   ← octo  （8）',
            '  November  ← novem （9）',
            '  December  ← decem （10）'
          ]
        }
      },
      {
        point: '序数词：primus, secundus, tertius',
        blackboard: {
          type: 'formulas',
          label: '序数词（1st-3rd）',
          lines: [
            'primus   （第一）  prima  primum',
            'secundus （第二）  secunda secundum',
            'tertius  （第三）  tertia  tertium',
            '',
            '序数词是形容词，按三性变化：',
            '  primus（阳）/ prima（阴）/ primum（中）',
            '',
            '英语遗存：',
            '  primary（主要的）← primus',
            '  secondary（次要的）← secundus',
            '  tertiary（第三的）← tertius'
          ]
        },
        context: '珀西瓦尔把三个序数词写成了形容词三性对比表。「序数词在拉丁语里是形容词，」她说，「所以它们按性、数、格变化，和 bonus/bona/bonum 一样。primus——第一，prima——第一（阴性），primum——第一（中性）。」她在黑板角落写下一个短语：Anno primo——在第一年。「anno——年，第二变格法夺格，primo——第一，中性夺格，一致。在第一年。」她停了一秒，「你们听说过 prima facie 这个法律术语吗？prima——阴性，facie——面，外观，夺格。第一眼看上去，表面上。这是拉丁语短语进入英语法律语言的例子。」她停顿，「primus、secundus、tertius——三个序数词，在英语里留下了 primary、secondary、tertiary。你们每次用这三个英语单词，都在引用拉丁语。」'
      },
      {
        point: '自然界基础词汇',
        blackboard: {
          type: 'formulas',
          label: '自然界词汇',
          lines: [
            '词汇         变格法   意思',
            '------       ------   ----',
            'aqua  (f)    第一变   水',
            'terra (f)    第一变   土地/大地',
            'luna  (f)    第一变   月亮',
            'ignis (m)    第三变   火',
            'caelum(n)    第二变   天空',
            'nox   (f)    第三变   夜',
            'lux   (f)    第三变   光',
            'sol   (m)    第三变   太阳',
            '',
            '注：第三变格法下学期讲',
            '  今天先认识词义，词尾待续'
          ],
          audio: [
            { text: 'nox',   src: 'audio/latin/lesson-10/word-nox.wav' },
            { text: 'lux',   src: 'audio/latin/lesson-10/word-lux.wav' },
            { text: 'aqua',  src: 'audio/latin/lesson-10/word-aqua.wav' },
            { text: 'ignis', src: 'audio/latin/lesson-10/word-ignis.wav' },
            { text: 'terra', src: 'audio/latin/lesson-10/word-terra.wav' }
          ]
        }
        ,
        context: '珀西瓦尔把词汇表写完，在第三变格法那几行做了标注。「这八个词你们要认识——词义，以及它们属于哪个变格法。」她用粉笔先圈住 aqua 和 terra，「这两个是第一变格法，你们已经会变格了。aqua——水，阴性；terra——土地，阴性，terra 你们在音节划分那课见过。」她停下来，「ignis、nox、lux、sol——这四个是第三变格法，下学期正式讲。今天先记词义。」她停了一秒，「Luna——月亮，第一变格法，阴性。这个词在魔法世界里出现了很多次——你们自己想想在哪里。」她没有等答案。「caelum——天空，第二变格法中性，-um 结尾。拉丁语里天空是中性，土地是阴性，火是阳性，夜是阴性，光是阴性——语法性别和自然感知之间的关系，语言学家研究了很久，至今没有定论。」'
      },
      {
        point: '咒语词根初探：Nox, Lumos, Aguamenti',
        blackboardQ: {
          type: 'formulas',
          label: '咒语词根 · 拉丁语来源',
          lines: [
            '咒语         拉丁词根      意思',
            '------       ---------     ----',
            'Nox          nox（夜）      熄灯咒',
            'Lumos        lux/lucis（光）荧光闪烁',
            'Aguamenti    aqua（水）     水流咒',
            'Incendio     incendere（点火）燃烧咒',
            'Reparo       reparare（修复）修缮咒',
            '',
            '注：Lumos = lux 变形 + -mos 后缀',
            '    Aguamenti = aqua + ment- + i（属格）'
          ],
          audio: [
            { text: 'nox',  src: 'audio/latin/lesson-10/word-nox.wav' },
            { text: 'lux',  src: 'audio/latin/lesson-10/word-lux.wav' },
            { text: 'aqua', src: 'audio/latin/lesson-10/word-aqua.wav' }
          ]
        },
        question: {
          leadIn: '珀西瓦尔放下粉笔，站到讲台前。「来谈咒语。」她说，这次语气比平时稍微松动了一点，「你们每天使用这些词，从没有想过它们是从哪里来的。现在你们有工具了。」她指向黑板，「Nox——熄灯咒，用的就是拉丁语 nox，夜，就这一个词，一声令下，光就熄灭了。Lumos——荧光咒，来自 lux，光，但 lux 在变格后的词干是 luc-，加上后缀变成 Lumos。Aguamenti——水流咒，aqua 是水，ment- 是常见拉丁语后缀表示"产生某物的手段"，整体是"产生水流的手段"。」',
          text: '「咒语 Nox 对应的拉丁语词根是什么意思？」',
          options: ['光', '夜', '水'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「nox——夜。Nox 咒语熄灭光源，把光变成夜。一个词，精确到不能再精确。」她看了全班一眼，「语言是最古老的魔法，巫师只是把它说得更大声一点。今天这句话，应该有了具体的画面。」',
        contextWrong: '「夜。」她不带感情，「nox，夜，N-O-X。Nox 咒语熄灭光源，召唤黑夜。不是光——光是 lux。不是水——水是 aqua。词义精确，效果才精确。」',
        blackboard: {
          type: 'formulas',
          label: '咒语词根完整对照',
          lines: [
            'Nox        ← nox（夜）       → 熄光',
            'Lumos      ← lux（光）       → 发光',
            'Aguamenti  ← aqua（水）      → 召水',
            'Incendio   ← incendere（点火）→ 燃烧',
            'Reparo     ← reparare（修复）→ 修缮',
            '',
            '→ 咒语不是随机声音',
            '→ 每一个咒语都是精确的拉丁语指令',
            '',
            '「语言是最古老的魔法，',
            ' 巫师只是把它说得更大声一点。」'
          ],
          audio: [
            { text: 'nox',  src: 'audio/latin/lesson-10/word-nox.wav' },
            { text: 'lux',  src: 'audio/latin/lesson-10/word-lux.wav' },
            { text: 'aqua', src: 'audio/latin/lesson-10/word-aqua.wav' }
          ]
        }
      }
    ],
    lessonSummary: '今天是本章最后一课，你们积累了两组工具：数词和词汇。基数词 unus 到 decem，序数词 primus、secundus、tertius，这些词根在英语月份名字和学术词汇里都留下了清晰的印记。自然界词汇——aqua、ignis、terra、caelum、nox、lux——是理解咒语词根的钥匙。最重要的发现是：Nox 就是夜，Lumos 来自光，Aguamenti 来自水。你们每天念出的咒语不是随机的声音，每一个都是精确的拉丁语指令，建立在这门古老语言的语法规则之上。珀西瓦尔那句话——语言是最古老的魔法，巫师只是把它说得更大声一点——在今天，终于有了完整的意思。',
    nextLessonPreview: '第二章到此结束。下一章要进入第三变格法——nox、lux、ignis 这些你们今天认识的词，终于可以开始正式变格了。第三变格法的词尾更复杂，但规律依然存在，找到规律，就能驾驭它。'
  },

  11: {
    atmosphere: '拉丁语教室的黑板上画着一条时间轴，向左延伸，标注着过去的刻度。珀西瓦尔教授站在轴线旁边，深绿色长袍的银线刺绣在晨光里微微发亮。她用粉笔在轴线上画了一段弯曲的括号，括号很长，不是一个点。',
    opening: '「现在时是一个点。」她点了一下黑板，「未完成过去时是一段。」她沿着括号慢慢划过去，「你们上学期学了现在时——amo，我爱，此刻正在爱。今天学的不一样。amabam——我当时一直在爱，那段时间持续爱着，但不是现在。」她放下粉笔，「Protego——你们都念过这个咒语。它形成一个持续的护盾，不是一击，而是一段时间内持续存在的效果。这就是未完成时的意象。」她扫视了一遍教室，「开始。」',
    keyPoints: [
      {
        point: '未完成时：构成规则',
        blackboardQ: {
          type: 'formulas',
          label: '未完成时变位（amare）',
          lines: [
            '词干 + ba- + 人称词尾',
            '',
            '人称      变位        含义',
            '-------  ---------  ------------------',
            '我        ama-bam    I was loving',
            '你        ama-bas    you were loving',
            '他/她     ama-bat    he/she was loving',
            '我们      ama-bamus  we were loving',
            '你们      ama-batis  you were loving',
            '他们      ama-bant   they were loving',
          ],
          audio: [
            { text: 'amabam', src: 'audio/latin/lesson-11/verb-amabam.wav' },
            { text: 'amabas', src: 'audio/latin/lesson-11/verb-amabas.wav' },
            { text: 'amabat', src: 'audio/latin/lesson-11/verb-amabat.wav' },
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写下 amare 的词干。「ama- 是词干。未完成时的标志是什么？」她在词干后面停顿了一下，「是这一段：-bā-。」她写下 amabam，「这是第一人称单数。注意中间那个 ba——这就是未完成时的信号，它告诉你：这件事在过去持续进行着。」她写下变位表的前三个，「现在：ama-bam，ama-bas，ama-bat。找规律。未完成时标志是？」',
          text: '「未完成时的时态标志音节是哪个？」',
          options: ['-vi-', '-ba-', '-re-'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「-ba- 就是未完成时的标志。词干 + ba + 人称词尾。无论哪个动词，第一变位的未完成时里都有这个 ba。」她在黑板上圈出所有 ba，「看见了？六个变位里，ba 在每一个。」',
        contextWrong: '「-ba-。」她重复，不带感情，「-vi- 是完成时的标志，-re- 是不定式词尾。-ba- 是未完成时。词干 + ba + 人称词尾。看黑板：ama-ba-m，ama-ba-s，ama-ba-t。中间那两个字母。」',
        blackboard: {
          type: 'formulas',
          label: '未完成时变位（amare）完整版',
          lines: [
            '词干 ama- + [-ba-] + 人称词尾',
            '',
            'ama-[ba]-m      ama-[ba]-mus',
            'ama-[ba]-s      ama-[ba]-tis',
            'ama-[ba]-t      ama-[ba]-nt',
            '',
            '标志：-ba-  =  过去持续',
          ],
          audio: [
            { text: 'amabam', src: 'audio/latin/lesson-11/verb-amabam.wav' },
            { text: 'amabas', src: 'audio/latin/lesson-11/verb-amabas.wav' },
            { text: 'amabat', src: 'audio/latin/lesson-11/verb-amabat.wav' },
          ]
        }
      },
      {
        point: '现在时 vs 未完成时：含义对比',
        blackboard: {
          type: 'formulas',
          label: '现在时 vs 未完成时',
          lines: [
            '现在时（amo）         现在正在爱',
            '  = I love / I am loving',
            '',
            '未完成时（amabam）    过去持续在爱',
            '  = I was loving',
            '  = I used to love',
            '',
            '关键词：过去 + 持续 / 习惯',
          ]
        },
        context: '珀西瓦尔在黑板上并排写下两行：amo 和 amabam。「amo——我爱，现在，此刻。」她在 amo 旁边点了一个点，「amabam——我当时一直在爱，过去某段时间持续进行。」她在 amabam 旁边画了一段长线。「未完成时有两种中文理解：一是描述过去正在进行的动作（I was loving），二是过去的习惯性动作（I used to love）。」她停顿，「比如：Cottidie ambulabam——我过去每天都散步。habitual，习惯。又比如：Dum legit, amabam——他在读书的时候，我一直在爱着。背景动作。」她转身，「不要把 amabam 翻译成"我爱了"——那是完成时，我们下节课学。」'
      },
      {
        point: '第二变位动词的未完成时',
        blackboard: {
          type: 'formulas',
          label: '第二变位：videre 未完成时',
          lines: [
            '词干 vide- + -ba- + 人称词尾',
            '',
            'vide-ba-m    vide-ba-mus',
            'vide-ba-s    vide-ba-tis',
            'vide-ba-t    vide-ba-nt',
            '',
            '规律相同：找到词干，加 -ba-',
          ]
        },
        context: '「第二变位动词的规律完全一样。」珀西瓦尔在黑板上写下 videre——看。「词干是 vide-。加上 -ba-，得到 videbam——我当时一直在看。」她逐个写出变位表，「videbam，videbas，videbat，videbamus，videbatis，videbant。」她在 videbam 和 amabam 的 ba 上各画了一圈，「看这两个圈——完全在同一个位置。规律是统一的。无论第一变位还是第二变位，未完成时的 -ba- 标志不会变。」她放下粉笔，「找到词干，加 -ba-，加人称词尾。三步。」'
      },
      {
        point: '魔法联动：Protego 的持续护盾',
        blackboard: {
          type: 'formulas',
          label: 'Protego 与未完成时的意象',
          lines: [
            'Protego  <--  protego（我保护）',
            '  pro- = 在前面',
            '  tego  = 我覆盖、遮蔽',
            '',
            '护盾持续存在  =  未完成时意象',
            '',
            '类比：',
            '  amo   = 单一动作（现在）',
            '  amabam = 持续状态（过去）',
            '  Protego = 持续覆盖（施法期间）',
          ]
        },
        context: '珀西瓦尔靠在讲台边，以她一贯的平静语气说：「语言是最古老的魔法，巫师只是把它说得更大声一点。」她指向黑板，「Protego 来自 protego——pro，在前面；tego，我覆盖。这个咒语形成一个持续的护盾，它不是一瞬间的爆发，而是在你发声之后的一段时间内持续存在。这就是未完成时的本质——动作不是在一个点结束，而是延伸成一段时间。」她拿起粉笔，「如果你理解了 amabam 的持续性，你就理解了 Protego 的工作原理。语法和魔法，在这里是同一件事。」'
      }
    ],
    lessonSummary: '「今天学了三件事：第一，未完成时的构成——词干加 -ba- 加人称词尾，六个变位都有这个 ba 标志；第二，含义——描述过去的持续动作或习惯，不是一次性完成的事；第三，区别——amo 是现在，amabam 是过去持续，不要混淆。记住 -ba- 这个信号，看到它就知道：这件事在过去延续了一段时间。」',
    nextLessonPreview: '「下节课：完成时。过去发生了，完成了，结束了。和今天完全不同的概念。」'
  },

  12: {
    atmosphere: '黑板上写着 amavi——字迹比往常稍大，带着某种宣告的意味。珀西瓦尔教授站在讲台后，教鞭搁在词典旁边，没有拿起来。教室里的蜡烛光线比平时亮，窗外湖面是铅灰色的。',
    opening: '「上节课的 amabam——我当时持续在爱，那件事还没结束，还在进行。」她走到黑板前，在 amabam 旁边写了 amavi，「amavi——我爱了，已经结束了，完成了。这就是完成时：一个已经发生并且结束的事件。」她在 amavi 上划了一个句号的意象，「英语可以译成 I loved，也可以译成 I have loved——拉丁语不区分这两种，统一用完成时表示。」她转身，「这和 Finite 咒语有关系——我们待会再说。」',
    keyPoints: [
      {
        point: '完成时：构成规则',
        blackboardQ: {
          type: 'formulas',
          label: '完成时变位（amare）',
          lines: [
            '完成词干 amav- + 完成人称词尾',
            '',
            '人称      变位          含义',
            '-------  -----------  ----------------',
            '我        amav-i       I loved',
            '你        amav-isti     you loved',
            '他/她     amav-it      he/she loved',
            '我们      amav-imus    we loved',
            '你们      amav-istis   you loved',
            '他们      amav-erunt   they loved',
          ]
        },
        question: {
          leadIn: '珀西瓦尔用粉笔圈出 amavi 中的 amav-，「这是完成词干。amare 的完成词干是 amav-，通过加 -v- 得到的。」她写下词尾列表：-i, -isti, -it, -imus, -istis, -erunt，「这六个是完成时专用的人称词尾，和现在时的词尾完全不同。」她指向第一个，「amav-i——注意，只有一个 i，是人称词尾 -i，不是词干。」她停顿，「第一人称单数的完成时词尾是？」',
          text: '「amare 完成时第一人称单数是哪个形式？」',
          options: ['amavam', 'amavi', 'amaverunt'],
          answer: 1
        },
        contextRight: '「不错。」她在黑板上圈出 amavi，「amav-i。完成词干加词尾 -i。注意区分：amabam 是未完成时（-ba- 标志），amavi 是完成时（完成词干+-i 词尾）。」她在两者旁边各写了一个时态标注，「一个持续，一个结束。」',
        contextWrong: '「amavi。」她重复，不带感情，「amav- 是完成词干，-i 是第一人称单数完成时词尾。amavam 不存在，amaverunt 是第三人称复数。」她在黑板上画箭头标注结构，「词干加词尾，对应人称。」',
        blackboard: {
          type: 'formulas',
          label: '完成时变位（amare）完整版',
          lines: [
            '完成词干 amav- + 完成人称词尾',
            '',
            'amav-i          amav-imus',
            'amav-isti        amav-istis',
            'amav-it         amav-erunt',
            '',
            '词尾：-i / -isti / -it / -imus / -istis / -erunt',
          ]
        }
      },
      {
        point: '完成词干的来源：-v- 的规律',
        blackboard: {
          type: 'formulas',
          label: '第一变位完成词干',
          lines: [
            '规律：现在词干 + -v- = 完成词干',
            '',
            '  ama-  -->  ama-v-  -->  amavi',
            '  voca- -->  voca-v- -->  vocavi',
            '  porta-->  porta-v-->  portavi',
            '',
            '记忆方法：第一变位完成时，',
            '词干后加 -v-，再加完成词尾',
          ]
        },
        context: '「第一变位动词的完成词干，通常是把 -v- 插入词干之后。」珀西瓦尔在黑板上并排写了三个例子：amare、vocare、portare。「amare 的词干是 ama-，完成词干是 amav-；vocare 的词干是 voca-，完成词干是 vocav-。」她在每个 -v- 下面画了一个圆圈，「这个 v 就是完成时的标志——比 -ba- 还要简洁。找到词干，加 v，再加完成词尾。」她停顿了一秒，「第一变位的完成时，记住这个规律就够了。」'
      },
      {
        point: '不规则完成词干：vidi 与 dixi',
        blackboardQ: {
          type: 'formulas',
          label: '不规则完成词干',
          lines: [
            '动词         现在时      完成时',
            '---------   --------   --------',
            'videre（看）  video      vid-i',
            'dicere（说）  dico       dix-i',
            '',
            '不规则完成词干需要单独记忆',
          ]
        },
        question: {
          leadIn: '「不是所有动词都乖乖加 -v- 的。」珀西瓦尔在黑板上写下 video 和 dico，「这两个是常见的不规则完成词干。video 的完成时不是 videoavi——而是 vidi。」她在 video 旁边写了 vidi，「vidi——拉丁语中最著名的完成时之一，来自凯撒的那句话。」她又写了 dixi，「dico 的完成时是 dixi——dic- 加上 -si，词根变化了。」她转身，「vidi 的意思是？」',
          text: '「vidi 是哪个动词的完成时，意思是？」',
          options: ['vocare，我呼唤了', 'videre，我看见了', 'vincere，我征服了'],
          answer: 1
        },
        contextRight: '「不错。」她在 vidi 旁边写了 videre，「vidi，videre 的完成时，意思是 I saw 或 I have seen。」她停了一秒，「凯撒的那句话：Veni, vidi, vici。我来，我见，我征服。三个完成时连用，表示三件已经完成的事。言简意赅。」',
        contextWrong: '「videre，我看见了。」她重复，「vidi 是 videre 的完成时，不是 vocare 或 vincere。」她在黑板上画出 videre → vidi 的箭头，「不规则完成词干需要单独记忆。vidi 和 dixi，这两个先记住。」',
        blackboard: {
          type: 'formulas',
          label: '不规则完成词干（重要）',
          lines: [
            'videre（看） -->  vid-i   I saw',
            'dicere（说） -->  dix-i   I said',
            '',
            'Veni, vidi, vici',
            '  =  I came, I saw, I conquered',
            '     三个完成时',
          ]
        }
      },
      {
        point: '魔法联动：Finite 与完成时的意象',
        blackboard: {
          type: 'formulas',
          label: 'Finite 与完成时',
          lines: [
            'Finite  <--  finire（结束、完成）',
            '  finis = 结束、边界',
            '',
            '完成时 = 已经结束的动作',
            '  amavi  = 爱了，结束了',
            '  vidi   = 看了，看完了',
            '',
            '类比：',
            '  Finite = 魔法结束的信号',
            '  完成时 = 语法上的结束信号',
          ]
        },
        context: '「语言是最古老的魔法，巫师只是把它说得更大声一点。」珀西瓦尔靠在讲台边，「Finite——你们知道这个咒语，用来结束持续的魔法效果。它来自拉丁语 finire，意思是结束、完成。finis 是边界，是终点。」她在黑板上写下 finire，「完成时在语法上做的，和 Finite 在魔法上做的，是同一件事——宣告一段过程已经结束。amavi，我爱了，结束了。vidi，我看了，看完了。动作到达了它的 finis，它的边界。」她停顿，「这就是为什么完成时的发音要干脆——amavi，不拖音，因为它已经结束了。」'
      }
    ],
    lessonSummary: '「今天学了三件事：第一，完成时表示已完成的事件，和未完成时的持续性不同；第二，构成方法——找完成词干（通常加 -v-），再加完成人称词尾 -i/-isti/-it/-imus/-istis/-erunt；第三，不规则词干 vidi 和 dixi 要单独记忆。」她停顿，「amabam 是一段时间，amavi 是一个结束的事件。这个区别要刻进脑子里。」',
    nextLessonPreview: '「下节课：大过去时。过去的过去——某件事在另一件过去的事之前就已经结束了。时间轴会变得更复杂。」'
  },

  13: {
    atmosphere: '黑板上画着一条时间轴，轴上有三个标记点：现在、过去、更早的过去。珀西瓦尔教授用粉笔在最左边的标记上停了一下，然后转身，没有说话，等着学生们把目光集中到那个点上。',
    opening: '「现在时——此刻。」她点了最右边，「完成时——过去发生的事，已经结束。」她点了中间，「大过去时——在另一件过去的事之前，就已经结束了。」她点了最左边，「这是今天的内容。」她在黑板上写了一个例子：Cenaveram cum venisti，「你到达的时候，我已经吃过饭了。cenaveram——我早已吃完了，那时候已经结束了。venisti——你到达，这是过去的事件。但我吃饭这件事，发生在你到达之前。」她在两个词之间画了一个时序箭头，「这就是大过去时存在的理由。」',
    keyPoints: [
      {
        point: '大过去时：构成规则',
        blackboardQ: {
          type: 'formulas',
          label: '大过去时变位（amare）',
          lines: [
            '完成词干 amav- + eram 人称变化',
            '',
            '人称      变位           含义',
            '-------  ------------  ----------------',
            '我        amav-eram     I had loved',
            '你        amav-eras     you had loved',
            '他/她     amav-erat     he/she had loved',
            '我们      amav-eramus   we had loved',
            '你们      amav-eratis   you had loved',
            '他们      amav-erant    they had loved',
          ]
        },
        question: {
          leadIn: '「大过去时的构成，和完成时非常像——用的是同一个完成词干。」珀西瓦尔写下 amaveram，「amav- 是完成词干，-eram 是什么？」她在 eram 下面画了一条线，「你们学过 esse 的未完成时变位——eram 就是 esse（是）的未完成时第一人称单数。」她停顿，「大过去时 = 完成词干 + esse 的未完成时人称变化。听起来复杂，看起来其实很规律。」她写下词尾：-eram, -eras, -erat, -eramus, -eratis, -erant，「第一人称单数的大过去时词尾是？」',
          text: '「amaveram 中，表示"大过去时"的词尾部分是？」',
          options: ['-vi-', '-erat', '-eram'],
          answer: 2
        },
        contextRight: '「不错。」她圈出 -eram，「amav- 是词干，-eram 是大过去时词尾。完成词干加 -eram，就得到了第一人称单数大过去时。」她停了一秒，「整个词尾序列：-eram, -eras, -erat, -eramus, -eratis, -erant。和 esse 的未完成时一模一样。」',
        contextWrong: '「-eram。」她重复，「amav- 是完成词干，-eram 是大过去时第一人称单数词尾。不是 -vi-，那是完成词干的一部分，不是词尾。-erat 是第三人称单数，不是第一。」她在黑板上写出结构分析，「amav | eram。两部分。」',
        blackboard: {
          type: 'formulas',
          label: '大过去时变位完整版',
          lines: [
            '完成词干 amav- + [-eram 系列词尾]',
            '',
            'amav-eram       amav-eramus',
            'amav-eras       amav-eratis',
            'amav-erat       amav-erant',
            '',
            '词尾来自 esse 未完成时：',
            '  eram / eras / erat / eramus / eratis / erant',
          ]
        }
      },
      {
        point: '三个时态并列：时间轴',
        blackboard: {
          type: 'formulas',
          label: '三时态时间轴',
          lines: [
            '最早        过去        现在',
            '|-----------|-----------|',
            '大过去时   完成时     现在时',
            'amaveram   amavi      amo',
            '',
            'had loved  loved     love',
            '',
            '例句时序：',
            '  1. amaveram（更早）',
            '  2. venisti（过去）',
            '  3. 现在（说话时刻）',
          ]
        },
        context: '珀西瓦尔用粉笔沿时间轴从左到右划过去，「大过去——完成——现在。三层时间。大过去时 amaveram 发生在最早，然后是完成时 amavi 描述的过去事件，最后是现在时 amo 的此刻。」她在黑板上写出例句序列，「Cenaveram cum venisti——cenaveram 是大过去时，吃饭这件事发生在 venisti 之前；venisti 是完成时，到达这件事是过去的事件；而整句话是现在的人在说的。」她停顿，「这三层时间嵌套在一起，大过去时负责处理最深的那一层——过去之前的过去。」'
      },
      {
        point: '不规则动词的大过去时',
        blackboard: {
          type: 'formulas',
          label: '不规则动词大过去时',
          lines: [
            'videre（看）完成词干 vid-',
            '  videram    I had seen',
            '  videras    you had seen',
            '  viderat    he/she had seen',
            '',
            'dicere（说）完成词干 dix-',
            '  dixeram    I had said',
            '  dixeras    you had said',
            '  dixerat    he/she had said',
          ]
        },
        context: '「不规则动词的大过去时，用的是它们自己的完成词干。」珀西瓦尔在黑板上写下 videram 和 dixeram，「videre 的完成词干是 vid-，所以大过去时是 videram——我当时早已看见了。dicere 的完成词干是 dix-，大过去时是 dixeram——我当时早已说过了。」她在 vid- 和 dix- 下面各画了一条线，「看这两个词干——都是从完成时那里借来的，只是把完成时的 -i 换成了 -eram。」她停顿，「规律只有一条：先找完成词干，然后加大过去时词尾。词干不变。」'
      },
      {
        point: '大过去时的使用场景',
        blackboardQ: {
          type: 'formulas',
          label: '大过去时使用场景',
          lines: [
            '场景1：交代事件背景',
            '  Librum legeram cum magister intravit.',
            '  老师进来时，我已经读完书了。',
            '',
            '场景2：强调时序',
            '  Antequam venit, iam cenaveram.',
            '  他来之前，我早就吃完饭了。',
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写下两个句子，「大过去时通常出现在叙事中，用来交代一个比另一件过去的事还要早发生的动作。」她指向第一个句子，「Librum legeram cum magister intravit——cum magister intravit 是老师进来这件事，完成时，是过去的事；legeram 是大过去时，表示读书这件事比老师进来还要早。」她指向第二个，「antequam 的意思是在……之前，这个连词常常引出大过去时。」她停顿，「那么：如果你想说"在战争开始之前我已经学过了拉丁语"——哪个时态描述"已经学过"？」',
          text: '「描述"在另一件过去的事之前就已经完成"的动作，用哪个时态？」',
          options: ['现在时', '未完成时', '大过去时'],
          answer: 2
        },
        contextRight: '「不错。」她在黑板上写下 didiceram，「大过去时。didiceram——我早已学了。用来描述在过去某事件之前就已经完成的动作，这正是大过去时的核心功能。」她停了一秒，「三个时态的分工：现在时看此刻，完成时看过去，大过去时看过去的过去。」',
        contextWrong: '「大过去时。」她重复，「未完成时描述过去的持续动作，不是已完成；现在时描述此刻。大过去时专门用于：在另一件过去的事之前就已经结束了的动作。这是它唯一的功能。」',
        blackboard: {
          type: 'formulas',
          label: '三时态分工（总结）',
          lines: [
            '现在时   amo        此刻正在爱',
            '完成时   amavi      过去爱了（已结束）',
            '大过去时 amaveram   在过去某事之前',
            '                   就已经爱完了',
            '',
            '口诀：现在看此刻，完成看过去，',
            '      大过去看过去的过去',
          ]
        }
      }
    ],
    lessonSummary: '「今天学了三件事：第一，大过去时的构成——完成词干加 -eram 系列词尾，词尾来自 esse 的未完成时；第二，时间层次——三个时态，大过去在最左边，完成时居中，现在时在右边；第三，用途——大过去时专门描述在过去某事件之前就已经结束的动作。amaveram，I had loved。比 amavi 还要更早的事情。」',
    nextLessonPreview: '「下节课：间接引语。你们现在会说话，下节课会学如何转述别人说的话——accusative 加 infinitive 的结构。」'
  },

  14: {
    atmosphere: '黑板上画着一个双栏对比图：左边写着"直接引语"，右边写着"间接引语"，中间一支箭头。珀西瓦尔教授站在箭头旁边，手里握着一支白色粉笔，以她一贯的姿势——笔直，等待。',
    opening: '「有两种方式说别人说了什么。」珀西瓦尔在黑板上写下第一行：Dicit: Puella cantat。「直接引语——他说，冒号，引号，把原话搬过来。」她又写下第二行：Dicit puellam cantare。「间接引语——他说女孩在唱歌。没有引号，没有冒号，主语变成了宾格，动词变成了不定式。」她在宾格 puellam 和不定式 cantare 下面各画了一条线，「这就是今天的核心：accusative 加 infinitive 结构，缩写 Acc+Inf。」她停顿，「记住：巫师在发出咒语之前，先在心里完成了对世界的宣告。那个宣告，就是间接引语的形式。」',
    keyPoints: [
      {
        point: '间接引语的结构：Acc + Inf',
        blackboardQ: {
          type: 'formulas',
          label: '直接引语 vs 间接引语',
          lines: [
            '直接：Dicit: "Puella cantat."',
            '  --> 他说："女孩在唱歌。"',
            '',
            '间接：Dicit puellam cantare.',
            '  --> 他说女孩在唱歌。',
            '',
            '变化规则：',
            '  主语（主格）--> 宾格（accusative）',
            '  动词（现在时）--> 不定式（infinitive）',
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上并排写了直接引语和间接引语版本，「看这两个句子。直接引语：Puella cantat——puella 是主格，cantat 是现在时第三人称。间接引语：puellam cantare——puella 变成了 puellam，宾格；cantat 变成了 cantare，不定式。」她在两个变化处各画了一个圆圈，「规则很简单：主语从主格变成宾格，动词从人称变位变成不定式。两个变化，仅此而已。」她停顿，「那么，把 Pueri ludunt（孩子们在玩耍）变成间接引语宾语从句，孩子们应该变成哪个格？」',
          text: '「在间接引语结构中，从句的主语应该用哪个格？」',
          options: ['主格（nominative）', '与格（dative）', '宾格（accusative）'],
          answer: 2
        },
        contextRight: '「不错。」珀西瓦尔在 accusative 旁边写下 pueros，「pueri 变成了 pueros——宾格复数。动词 ludunt 变成不定式 ludere。完整的间接引语：Dicit pueros ludere——他说孩子们在玩耍。」她停了一秒，「宾格加不定式，这个结构要背进去。」',
        contextWrong: '「宾格。」她重复，「间接引语的从句主语必须用宾格，不是主格，不是与格。pueri 变 pueros，puella 变 puellam。然后动词变不定式。这两步都不能省。」',
        blackboard: {
          type: 'formulas',
          label: 'Acc+Inf 结构规则',
          lines: [
            '引导动词 + [宾格主语] + [不定式]',
            '',
            'Dicit  +  puellam  +  cantare.',
            '  说      女孩（宾格）  唱歌（不定式）',
            '',
            '两步变化：',
            '  1. 主格 --> 宾格',
            '  2. 现在时动词 --> 不定式',
          ]
        }
      },
      {
        point: '常见引导动词',
        blackboard: {
          type: 'formulas',
          label: '引导间接引语的动词',
          lines: [
            '动词          含义      例',
            '----------   ------   --------------------',
            'dico          说       Dico te errare.',
            'credo         相信     Credo magnum esse.',
            'puto          认为     Puto lunam pulchram esse.',
            'video         看见     Video puellam cantare.',
            'audio         听见     Audio eum venire.',
            '',
            '记忆方法：说/想/感知类动词 + Acc+Inf',
          ]
        },
        context: '「引导间接引语的动词，分三类：说的动词，想的动词，感知的动词。」珀西瓦尔在黑板上写出五个，「dico——我说；credo——我相信；puto——我认为；video——我看见；audio——我听见。」她在每个后面各写了一个例句，「所有这些动词后面，都可以接 Acc+Inf 结构。」她停顿，「注意 video——看见某人在做某事，就是间接引语的一种：Video puellam cantare——我看见女孩在唱歌。眼睛也是一种"说"法。」'
      },
      {
        point: '间接引语中的 esse：描述状态',
        blackboardQ: {
          type: 'formulas',
          label: '用 esse 作不定式',
          lines: [
            '描述"是……"用 esse（to be）',
            '',
            '例：Puto lunam pulchram esse.',
            '  --> 我认为月亮是美丽的。',
            '  lunam = 月亮（宾格）',
            '  pulchram = 美丽的（宾格，与 lunam 一致）',
            '  esse = to be（不定式）',
          ]
        },
        question: {
          leadIn: '「间接引语里，如果要说某人"是"某种状态，不定式用 esse。」珀西瓦尔写下 Puto lunam pulchram esse，「我认为月亮是美丽的。puto 是引导动词，lunam 是宾格主语，esse 是不定式，而 pulchram 是形容词——它修饰 lunam，所以必须和 lunam 在性数格上一致，也用宾格。」她在 lunam 和 pulchram 之间画了一条连线，「注意：形容词也要跟着变宾格。」她停顿，「那么，Credo magnum esse 的意思是？」',
          text: '「Credo eum magnum esse 的意思是？」',
          options: ['我相信他在说大话', '我相信他是伟大的', '我相信他来了'],
          answer: 1
        },
        contextRight: '「不错。」她在黑板上圈出 eum 和 magnum，「eum——他，宾格；magnum——伟大的，宾格形容词，与 eum 一致；esse——是。所以：我相信他是伟大的。」她停了一秒，「esse 作不定式时，表示"是"的关系，形容词一并变宾格。」',
        contextWrong: '「我相信他是伟大的。」她重复，「eum 是宾格主语"他"，magnum 是宾格形容词"伟大的"，esse 是不定式"是"。credo——相信。我相信 + 他 + 是伟大的。」她在黑板上写出结构分析，「不是来了，来了要用 venire，不是 esse。」',
        blackboard: {
          type: 'formulas',
          label: 'Acc+Inf 完整例句分析',
          lines: [
            'Credo  eum  magnum  esse.',
            '  |      |     |      |',
            ' 相信   他   伟大   是',
            '（引导）（宾格）（宾格形容词）（不定式）',
            '',
            '我相信他是伟大的。',
          ]
        }
      },
      {
        point: '魔法联动：咒语宣告即宾格',
        blackboard: {
          type: 'formulas',
          label: '咒语与间接引语的意象',
          lines: [
            '语言是最古老的魔法，',
            '巫师只是把它说得更大声一点。',
            '',
            '间接引语 = 对世界的"宾格宣告"：',
            '  宾格主语  =  被施力的对象',
            '  不定式    =  宣告的内容',
            '',
            'Expecto  <--  ex + specto（向外看）',
            '  = 我对外宣告我在等待',
          ]
        },
        context: '「间接引语把一件事变成另一件事的宾语——它变成了被宣告的对象。」珀西瓦尔平静地说，「巫师发出咒语时，他不是在描述，而是在宣告：Expecto Patronum——我期待/召唤守护神。ex+specto，向外看、向外宣告。这个宣告把守护神变成了宾格——被施加意志的对象。」她停顿，「Acc+Inf 结构的本质和这个一样：主句的动词（说/想/看/信）是施力者，宾格从句是被施力的对象。语言结构模拟了魔法施力的方向。理解这个，你就理解了为什么咒语是拉丁语的。」'
      }
    ],
    lessonSummary: '「今天学了三件事：第一，间接引语用 Acc+Inf 结构——从句主语变宾格，动词变不定式；第二，引导动词有说类（dico）、想类（credo/puto）、感知类（video/audio）；第三，描述状态时用 esse 作不定式，形容词也要跟着变宾格。」她停顿，「宾格主语加不定式。这个结构在拉丁语中极其常见，背进去。」',
    nextLessonPreview: '「下节课：关系从句。qui, quae, quod——引导修饰名词的从句。比间接引语容易，但同样重要。」'
  },

  15: {
    atmosphere: '黑板上写着 qui，quae，quod——三个词，各占一列。珀西瓦尔教授用粉笔在三个词下面各画了一条线，一条比一条更用力。外面的风在窗框上发出轻微的声音，教室里安静得只剩粉笔的摩擦声。',
    opening: '「你们用过很多定语从句了——英语里的 who, which, that。」珀西瓦尔转身，「拉丁语用 qui, quae, quod。这三个词引导修饰名词的从句，称为关系从句。」她在黑板上写下 Puella quam amo cantat，「我所爱的女孩在唱歌。quam——关系代词，它连接了主句的 puella 和从句中的"爱"这个动作。」她在 quam 和 puella 之间画了一条弧线，「今天学两件事：关系代词如何变格，以及格由什么决定。」',
    keyPoints: [
      {
        point: '关系代词变格：qui/quae/quod',
        blackboardQ: {
          type: 'formulas',
          label: 'qui/quae/quod 变格表（部分）',
          lines: [
            '        阳性    阴性    中性',
            '主格    qui     quae    quod',
            '宾格    quem    quam    quod',
            '属格    cuius   cuius   cuius',
            '与格    cui     cui     cui',
            '夺格    quo     qua     quo',
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写出变格表，「关系代词有三个性：qui 是阳性主格，quae 是阴性主格，quod 是中性主格。」她指向宾格行，「宾格：quem（阳），quam（阴），quod（中）——中性主格和宾格相同，这是中性名词的一贯规律。」她停顿，「关键规则：关系代词的性和数，由先行词决定——它指代的那个名词；但它的格，由从句内部决定——它在从句里充当什么成分。」她指向 quam，「quam——阴性宾格，说明先行词是阴性，而且在从句里充当宾语。」停顿，「quam 的先行词是阴性还是阳性？」',
          text: '「在 Puella quam amo 中，quam 是阴性宾格，它告诉我们先行词 puella 是什么性，以及关系代词在从句里的作用？」',
          options: ['阳性主格，从句主语', '阴性宾格，从句宾语', '中性与格，从句间接宾语'],
          answer: 1
        },
        contextRight: '「不错。」珀西瓦尔在 quam 旁边写出分析，「quam——阴性（与 puella 一致），宾格（在从句 amo 中充当宾语，即"我爱的对象"）。」她停了一秒，「两条规则同时工作：性/数跟先行词，格跟从句功能。分开记，不要混。」',
        contextWrong: '「阴性宾格，从句宾语。」她重复，「quam 阴性——因为先行词 puella 是阴性，必须一致；宾格——因为在从句 amo 中，quam 是"我爱的对象"，充当宾语。这两个信息同时编码在一个词里。」',
        blackboard: {
          type: 'formulas',
          label: 'qui/quae/quod 格的决定规则',
          lines: [
            '规则1：性/数 = 跟先行词',
            '规则2：格   = 跟从句内部功能',
            '',
            '例：Puella quam amo cantat.',
            '  quam = 阴性（因为 puella 是阴性）',
            '        宾格（因为是 amo 的宾语）',
            '',
            '先行词 --> 决定性/数',
            '从句功能 --> 决定格',
          ]
        }
      },
      {
        point: '关系从句中的先行词一致',
        blackboard: {
          type: 'formulas',
          label: '先行词性数一致例',
          lines: [
            '先行词       关系代词选择',
            '---------   ------------------',
            'puer（阳）   qui/quem/cuius...',
            'puella（阴） quae/quam/cuius...',
            'templum（中）quod/quod/cuius...',
            '',
            '例句：',
            '  Puer qui venit est amicus meus.',
            '  来的那个男孩是我的朋友。',
            '  （qui 阳性主格，从句主语）',
          ]
        },
        context: '「先行词是关系代词的"参照物"。」珀西瓦尔用粉笔在 puer 和 qui 之间画了一条弧线，「Puer qui venit——来的那个男孩。puer 是阳性，所以关系代词用阳性的 qui；qui 在从句里是主语，所以用主格。」她又写了第二个例句：「Puellam quam amat videt——他看见了他喜爱的那个女孩。puella 是阴性宾格（此处是整个主句的宾语），关系代词 quam 也是阴性宾格——两个宾格有不同来源：puella 的宾格来自主句，quam 的宾格来自从句内部。」她停顿，「不要混淆这两个宾格的来源。」'
      },
      {
        point: '翻译关系从句的方法',
        blackboardQ: {
          type: 'formulas',
          label: '关系从句翻译步骤',
          lines: [
            '步骤1：找先行词',
            '步骤2：找关系代词（qui/quae/quod）',
            '步骤3：翻译从句（"……的"）',
            '步骤4：将从句放在先行词前（中文习惯）',
            '',
            '例：Liber quem legis est bonus.',
            '  先行词：liber（书）',
            '  关系代词：quem（宾格，从句宾语）',
            '  从句：quem legis = 你正在读的',
            '  整句：你正在读的那本书很好。',
          ]
        },
        question: {
          leadIn: '「翻译关系从句时，中文习惯把定语放在名词前面，所以翻译顺序会倒一倒。」珀西瓦尔写下 Magister qui docet est bonus，「老师——who teaches——is good。先找先行词 magister，再找关系代词 qui，qui 是主格说明它在从句里是主语——教书的主语。」她用粉笔连线，「整句中文：教书的那个老师很好，或：那个正在教书的老师很好。」她停顿，「Liber quem legis est bonus——翻译这一句。quem 在从句里是什么成分？」',
          text: '「在 Liber quem legis est bonus 中，quem 在从句里是什么成分？」',
          options: ['主语（主格）', '宾语（宾格）', '与格（间接宾语）'],
          answer: 1
        },
        contextRight: '「不错。」她在黑板上圈出 quem，「quem 是宾格，在从句 legis（你在读）里充当宾语——你读的对象。先行词 liber 是阳性，quem 用阳性宾格。整句：你正在读的那本书很好。」她停了一秒，「先行词的性告诉你用哪个词，从句功能告诉你用什么格。两条线索缺一不可。」',
        contextWrong: '「宾语，宾格。」她重复，「quem 是宾格，所以在从句里是宾语——你读的对象。不是主语，主语要用主格 qui。」她写出分析，「liber quem legis = 你读的那本书。宾语。」',
        blackboard: {
          type: 'formulas',
          label: '关系从句翻译练习',
          lines: [
            'Magister qui docet est bonus.',
            '  = 那个教书的老师很好。',
            '',
            'Puella quam amo cantat.',
            '  = 我所爱的那个女孩在唱歌。',
            '',
            'Liber quem legis est bonus.',
            '  = 你正在读的那本书很好。',
          ]
        }
      },
      {
        point: '关系从句的复合用法',
        blackboard: {
          type: 'formulas',
          label: '关系从句嵌套与扩展',
          lines: [
            '多个修饰成分并列：',
            '  Puer qui cantat et ridet laetus est.',
            '  = 那个唱歌又笑的男孩很快乐。',
            '',
            '关系从句修饰宾语：',
            '  Video puellam quae cantat.',
            '  = 我看见那个正在唱歌的女孩。',
            '',
            '注意：先行词在主句中的格',
            '与关系代词的格相互独立',
          ]
        },
        context: '「关系从句可以修饰主语，也可以修饰宾语，甚至修饰与格或属格名词。」珀西瓦尔写下 Video puellam quae cantat，「这里先行词 puellam 是主句的宾格宾语——我看见女孩；但关系代词 quae 在从句里是主语，所以用主格。」她在 puellam 和 quae 之间用不同颜色的粉笔画了两条线，「注意：puellam 的格由主句决定，quae 的格由从句决定。两条线，各走各的。」她停顿，「这就是拉丁语关系从句最容易出错的地方。格一定要分清楚来源。」'
      }
    ],
    lessonSummary: '「今天学了三件事：第一，关系代词 qui/quae/quod 引导修饰名词的从句；第二，格的规则——性/数跟先行词，格跟从句内部功能，这两条必须分开；第三，翻译方法——找先行词，找关系代词，把从句翻译成"……的"放在名词前面。」她停顿，「quam amo，我所爱的——记住这个短语的结构。」',
    nextLessonPreview: '「下节课：不定式的三种形式。现在主动、现在被动、完成主动——以及它们的用法。」'
  },

  16: {
    atmosphere: '黑板上用三栏并列写着三种不定式形式，下面各有一个例句。珀西瓦尔教授的教鞭搁在讲台边，她没有拿——今天她用手指直接在黑板上点，每一点都精确。窗外的光线偏冷，是阴天的样子。',
    opening: '「你们已经认识了不定式——cantare，to sing；amare，to love。那是现在主动不定式。」珀西瓦尔转身在黑板上写下三行，「但不定式有三种。现在主动不定式、现在被动不定式、完成主动不定式。」她在每行旁边各写了一个例子，「今天全部学完。」她停顿，「还有一句话你们要记住：Errare est humanum——犯错是人之常情。这句话里，不定式作了主语。不定式不只是跟在动词后面，它可以独当一面。」',
    keyPoints: [
      {
        point: '三种不定式形式',
        blackboardQ: {
          type: 'formulas',
          label: '三种不定式（amare 为例）',
          lines: [
            '类型              形式       含义',
            '-------------   --------  ----------------',
            '现在主动不定式   amare     to love',
            '现在被动不定式   amari     to be loved',
            '完成主动不定式   amavisse  to have loved',
            '',
            '构成：',
            '  主动：词干 + -are / -ere',
            '  被动：词干 + -ari / -eri',
            '  完成：完成词干 + -isse',
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写下三行，「现在主动不定式 amare——to love，主动，正在进行。现在被动不定式 amari——to be loved，被动，别人在爱你。完成主动不定式 amavisse——to have loved，已经爱过了。」她在词尾处用粉笔画了圆圈：-are/-ari/-isse，「注意后缀的区别：主动是 -are，被动是 -ari，完成是完成词干加 -isse。」她停顿，「videre 的现在被动不定式是？」',
          text: '「videre（to see）的现在被动不定式是？」',
          options: ['vidari', 'videri', 'vidisse'],
          answer: 1
        },
        contextRight: '「不错。」她在黑板上写下 videri，「videre 的词干是 vide-，被动不定式词尾是 -ri，但第二变位动词是 -eri：videri——to be seen，被看见。」她停了一秒，「注意：第一变位被动是 -ari（amari），第二变位被动是 -eri（videri）。词尾不同，规律一致。」',
        contextWrong: '「videri。」她重复，「vidare 不存在。vidisse 是完成主动不定式（to have seen），不是被动。videri——to be seen，现在被动不定式，第二变位用 -eri。」她在黑板上写出三个形式：videre/videri/vidisse，「三种。各有各的词尾。」',
        blackboard: {
          type: 'formulas',
          label: '不定式三种形式（两个动词对比）',
          lines: [
            '        amare（爱）    videre（看）',
            '主动：  amare         videre',
            '被动：  amari         videri',
            '完成：  amavisse      vidisse',
            '',
            '词尾规律：',
            '  第一变位被动：-ari',
            '  第二变位被动：-eri',
            '  完成主动：完成词干 + -isse',
          ]
        }
      },
      {
        point: '不定式作主语',
        blackboard: {
          type: 'formulas',
          label: '不定式作主语',
          lines: [
            'Errare est humanum.',
            '  = 犯错是人之常情。',
            '  errare（犯错，不定式）= 主语',
            '',
            'Amare est difficile.',
            '  = 去爱是困难的。',
            '',
            'Legere est bonum.',
            '  = 阅读是好的。',
            '',
            '规律：不定式 + est + 形容词/名词',
          ]
        },
        context: '「不定式在拉丁语中可以充当主语。」珀西瓦尔写下 Errare est humanum，「Errare——犯错，不定式作主语；est——是；humanum——人之常情，形容词。不定式充当主语时，对应的形容词或名词用中性单数。」她停顿，「这个句型极其常见，特别是在格言和哲学文本里。」她又写了两个例子，「Amare est difficile——去爱是困难的；Legere est bonum——阅读是好的。结构完全相同：不定式 + est + 形容词/名词。记住这个格式，你就能造出无数格言。」'
      },
      {
        point: '不定式作宾语',
        blackboardQ: {
          type: 'formulas',
          label: '不定式作宾语',
          lines: [
            '常见搭配动词：',
            '  volo（我想）  + 不定式',
            '  possum（我能）+ 不定式',
            '  debeo（我应该）+ 不定式',
            '',
            '例句：',
            '  Volo cantare.     我想唱歌。',
            '  Non possum venire. 我无法来。',
            '  Debes legere.     你应该读书。',
          ]
        },
        question: {
          leadIn: '「不定式最常见的用法是作宾语，特别是跟在某些动词后面。」珀西瓦尔写下三个动词：volo、possum、debeo，「volo——我想要；possum——我能够；debeo——我应该。这三个动词后面直接接不定式。」她写下例句，「Volo cantare——我想唱歌；Non possum venire——我无法来；Debes legere——你应该读书。」她停顿，「注意：这里的不定式没有自己的主语，因为和主句主语相同。如果主语不同，就要用 Acc+Inf 结构，也就是上节课的内容。」她停顿，「Possum in Hogwarts habitare 的意思是？」',
          text: '「Possum in Hogwarts habitare 的意思是？」',
          options: ['我想住在霍格沃茨', '我能住在霍格沃茨', '我曾经住在霍格沃茨'],
          answer: 1
        },
        contextRight: '「不错。」珀西瓦尔停了一秒，「possum——我能；habitare——居住，不定式；in Hogwarts——在霍格沃茨，夺格。我能住在霍格沃茨。」她在 possum 旁边写了一个小提示，「possum + 不定式，表示能力。这个结构在魔法誓言和契约文本里很常见。」',
        contextWrong: '「我能住在霍格沃茨。」她重复，「volo 是我想，possum 是我能，不要混淆。habitare 是居住的不定式，in + 夺格表示地点。」她在 possum 下面写了 I am able，「能，不是想，不是曾经。」',
        blackboard: {
          type: 'formulas',
          label: 'volo/possum/debeo + 不定式',
          lines: [
            'volo   + 不定式 = 想要……',
            'possum + 不定式 = 能够……',
            'debeo  + 不定式 = 应该……',
            '',
            '注意：主语相同时，直接接不定式',
            '主语不同时，用 Acc+Inf 结构',
            '',
            '对比：',
            '  Volo cantare.  （我想唱歌）',
            '  Volo te cantare.（我想让你唱歌）',
          ]
        }
      },
      {
        point: '完成不定式：时态对比',
        blackboard: {
          type: 'formulas',
          label: '完成不定式的时间层次',
          lines: [
            'Credo te amavisse.',
            '  = 我相信你曾经爱过。',
            '  amavisse = 完成主动不定式',
            '            （在"相信"之前已经发生）',
            '',
            '对比：',
            '  Credo te amare.    我相信你现在在爱。',
            '  Credo te amavisse. 我相信你曾经爱过。',
            '',
            '完成不定式 = 在主句动作之前已完成',
          ]
        },
        context: '「完成主动不定式 amavisse——to have loved，表示在主句动作发生之前就已经完成的动作。」珀西瓦尔在黑板上并排写了两句话，「Credo te amare——我相信你现在在爱，同时进行；Credo te amavisse——我相信你曾经爱过，那件事发生在我"相信"之前。」她停顿，「时间层次：不定式表达的动作早于主句的动作。」她指向黑板，「这就是三种不定式的时间含义：现在不定式表示与主句同时，完成不定式表示在主句之前。用哪种不定式，取决于你要表达的时间关系。」'
      }
    ],
    lessonSummary: '「今天学了三件事：第一，三种不定式形式——现在主动（-are/-ere）、现在被动（-ari/-eri）、完成主动（完成词干+-isse）；第二，不定式可以作主语（Errare est humanum）或作宾语（Volo cantare）；第三，完成不定式表示在主句之前就已经完成的动作。」她停顿，「三种形式，三种用法。不定式比你们想的用途更广。」',
    nextLessonPreview: '「下节课：分词。动词变成形容词——现在主动分词和完成被动分词。两种截然不同的东西。」'
  },

  17: {
    atmosphere: '黑板被分成两半：左边写着 amans，右边写着 amatus。珀西瓦尔教授站在正中间，她的目光从左到右扫过去，然后回到学生身上。教室的烛光今天不够亮，她没有说什么，只是多了一根蜡烛，无声地点燃了。',
    opening: '「分词是动词的形容词形式。」珀西瓦尔不多废话，「它保留了动词的含义，但像形容词一样变格，修饰名词。」她在黑板上指向左边，「amans——正在爱的，现在主动分词；它表示一个正在进行的动作。」她指向右边，「amatus——被爱的，完成被动分词；它表示一个已经发生并且是被动的状态。」她停顿，「今天只学这两种。记住区别：一个主动，一个被动；一个进行，一个完成。」',
    keyPoints: [
      {
        point: '现在主动分词：amans',
        blackboardQ: {
          type: 'formulas',
          label: '现在主动分词构成',
          lines: [
            '第一变位：词干 + -ans/-antis',
            '  amare --> am-ans（主格），am-antis（属格）',
            '',
            '第二变位：词干 + -ens/-entis',
            '  videre --> vid-ens（主格），vid-entis（属格）',
            '',
            '含义：正在……的（主动进行）',
            '  amans    = loving（正在爱的）',
            '  videns   = seeing（正在看的）',
          ]
        },
        question: {
          leadIn: '「现在主动分词，第一变位加 -ans，第二变位加 -ens。」珀西瓦尔在黑板上写下 amans 和 videns，「amans——正在爱的；videns——正在看的。」她在 -ans 和 -ens 下面画了线，「注意属格形式：amantis，videntis——变格时用 -antis/-entis 词干。这是第三变格法的变格方式。」她写出两列，「分词修饰名词时，必须在性数格上与名词一致，和形容词完全一样。」她停顿，「vocare（呼唤）的现在主动分词是？」',
          text: '「vocare 的现在主动分词是？」',
          options: ['vocatus', 'vocans', 'vocare'],
          answer: 1
        },
        contextRight: '「不错。」她在黑板上写下 vocans，「vocare，第一变位，词干 voca-，加 -ns，得到 vocans——正在呼唤的。」她停了一秒，「vocans magister——正在呼唤的老师；vocans puella——正在呼唤的女孩。分词与名词一致变格。」',
        contextWrong: '「vocans。」她重复，「vocatus 是完成被动分词（被呼唤的），vocare 是原形不定式（to call）。vocans 才是现在主动分词，正在呼唤的。词干 voca- 加 -ns。」',
        blackboard: {
          type: 'formulas',
          label: '现在主动分词例句',
          lines: [
            'Magister amans discipulos est bonus.',
            '  = 那个爱学生的老师很好。',
            '',
            'Puella cantans pulchra est.',
            '  = 正在唱歌的女孩很漂亮。',
            '',
            '分词位置：通常紧跟名词之后',
            '变格：第三变格法，与名词性数格一致',
          ]
        }
      },
      {
        point: '完成被动分词：amatus',
        blackboard: {
          type: 'formulas',
          label: '完成被动分词构成',
          lines: [
            '第一变位：词干 + -atus/-ata/-atum',
            '  amare --> am-atus（阳），am-ata（阴），am-atum（中）',
            '',
            '第二变位：词干 + -itus/-ita/-itum 或 -tus',
            '  videre --> visus（阳），visa（阴），visum（中）',
            '',
            '含义：已被……的（被动完成）',
            '  amatus   = having been loved（被爱的）',
            '  visus    = having been seen（被看见的）',
          ]
        },
        context: '「完成被动分词，表示已经完成的被动动作——某件事已经发生，而且主语是被动的。」珀西瓦尔写下 amatus/amata/amatum，「第一变位加 -atus/-ata/-atum，三性都有各自的形式，完全按照第一/第二变格法变格——就像 bonus/bona/bonum 一样。」她在旁边写了 visus/visa/visum，「第二变位的完成被动分词有时不规则，videre 变成了 visus，不是 viditus——这些要单独记忆。」她停顿，「完成被动分词最常见的用法，是组成被动态完成时：amatus sum——我已经被爱了。但它也可以单独作形容词用，修饰名词。」'
      },
      {
        point: '分词作定语：与名词一致',
        blackboardQ: {
          type: 'formulas',
          label: '分词作定语例',
          lines: [
            'amatus puer     被爱的男孩（阳性，主格）',
            'amata puella    被爱的女孩（阴性，主格）',
            'amatum templum  被爱戴的神庙（中性，主格）',
            '',
            '与名词性数格一致：',
            '  puellam amatam video',
            '  = 我看见了那个被爱的女孩',
            '  （puellam 宾格，amatam 宾格）',
          ]
        },
        question: {
          leadIn: '「分词作定语，必须与它修饰的名词在性数格上完全一致——和形容词规则相同。」珀西瓦尔写下三个例子，「amatus puer——被爱的男孩，阳性主格；amata puella——被爱的女孩，阴性主格；amatum templum——被爱戴的神庙，中性主格。」她停顿，「现在看这个句子：Video puellam amatam——我看见了那个被爱的女孩。puellam 是宾格，所以 amatam 也必须用阴性宾格。」她在两者之间画连线，「那么，如果要修饰 librum amat（他爱那本书）里的 librum，完成被动分词应该用？」',
          text: '「修饰 librum（阳性宾格"书"）的完成被动分词 amatus 应该变为？」',
          options: ['amatus', 'amatum', 'amati'],
          answer: 1
        },
        contextRight: '「不错。」她在 amatum 旁边写了 librum，「librum——阳性宾格；amatum——阳性宾格，与 librum 一致。Librum amatum legit——他读了那本被（人）喜爱的书。」她停了一秒，「性/数/格，三条线，全部对齐。」',
        contextWrong: '「amatum。」她重复，「librum 是阳性宾格，分词必须也是阳性宾格，所以用 amatum，不是 amatus（阳性主格）或 amati（阳性属格或主格复数）。」她写出变格对比，「主格 amatus，宾格 amatum。格不同。」',
        blackboard: {
          type: 'formulas',
          label: '分词与名词一致（总结）',
          lines: [
            '分词规则：',
            '  性/数  = 跟所修饰的名词',
            '  格     = 跟所修饰的名词',
            '',
            '例：',
            '  liber amatus（主格）  被爱的书',
            '  librum amatum（宾格） 被爱的书（宾语）',
            '  libri amati（属格）   被爱的书（的）',
          ]
        }
      },
      {
        point: '魔法联动：Homenum Revelio 与完成被动分词',
        blackboard: {
          type: 'formulas',
          label: 'Homenum Revelio 词根分析',
          lines: [
            'Revelio  <--  re + velio（揭开）',
            '  re-   = 再次，向后',
            '  velio  = 覆盖，隐藏',
            '',
            'revelatus = 已被揭示的（完成被动分词）',
            '  re- + velatus（被覆盖的）的反义',
            '',
            'Homenum = hominem（人）的变体',
            '  = 被揭示的（隐藏的）人',
          ]
        },
        context: '珀西瓦尔站在黑板前，以她一贯的平静语气说：「语言是最古老的魔法，巫师只是把它说得更大声一点。」她在 revelatus 旁边写出词根，「Homenum Revelio——揭示人的存在。Revelio 来自 revelare，re- 是"再次"或"往回"，velare 是"覆盖"——揭开覆盖物，就是揭示。完成被动分词 revelatus——被揭示的状态。」她停顿，「当你发出 Homenum Revelio 的时候，你在对空间宣告：让隐藏的人被揭示出来。这个宣告的逻辑，是完成被动分词——你想要达成的那个被动完成的状态。」她放下粉笔，「理解词根，就理解咒语为什么有效。」'
      }
    ],
    lessonSummary: '「今天学了三件事：第一，现在主动分词——词干加 -ans/-ens，表示正在进行的主动动作；第二，完成被动分词——词干加 -atus/-ata/-atum，表示已完成的被动状态；第三，分词作定语时必须与名词在性数格上完全一致，和形容词规则相同。」她停顿，「amans 和 amatus——一个主动进行，一个被动完成。这两种东西不要混淆。」',
    nextLessonPreview: '「下节课：属格的扩展用法。你们以为属格只表示所有，但它能做的远不止这些。」'
  },

  18: {
    atmosphere: '黑板被分成四格，每格一个标题：所有属格、主观属格、客观属格、描述性属格。珀西瓦尔教授的银线袍领在烛光下显出细密的纹路。她没有立刻开始，而是让学生们先把四个标题抄下来，然后才说话。',
    opening: '「你们学过属格表示所有：liber magistri，老师的书。这没问题。但属格做的事情远不止这一件。」珀西瓦尔在四格标题下面各写了一个例句，「今天你们要学的，不是新的变格，而是属格的四种含义。同样的变格形式，放在不同的语境里，意思完全不同。」她停顿，「语法形式一个，含义四种。读的时候要想。」',
    keyPoints: [
      {
        point: '所有属格与主观属格',
        blackboardQ: {
          type: 'formulas',
          label: '所有属格 vs 主观属格',
          lines: [
            '所有属格：liber magistri',
            '  = 老师的书（书属于老师）',
            '',
            '主观属格：amor matris',
            '  = 母亲的爱（母亲在爱——主语）',
            '  matris 是"爱"这个动作的发出者',
            '',
            '关键区别：',
            '  所有 = 谁拥有什么',
            '  主观 = 谁发出动作/情感',
          ]
        },
        question: {
          leadIn: '「所有属格是最简单的：liber magistri——老师的书，书属于老师。」珀西瓦尔在黑板上写下第二个例子，「amor matris——母亲的爱。这里"爱"是一个名词（amor），matris 是属格，但不是说"爱属于母亲"——而是说母亲是这个爱的发出者，是爱的主语。这叫主观属格。」她停顿，「区别在于：所有属格是拥有关系，主观属格是动作/情感的发出者关系。」她再写一行，「timor hostium——敌人的恐惧。hostium 是主观属格还是所有属格？」',
          text: '「amor matris 中的 matris（母亲）是哪种属格？」',
          options: ['所有属格，书是母亲的', '主观属格，母亲是爱的发出者', '客观属格，母亲是被爱的对象'],
          answer: 1
        },
        contextRight: '「不错。」珀西瓦尔在 matris 旁边写了一个箭头，「matris——主观属格，母亲发出爱，是爱的主语。」她停了一秒，「注意：amor matris 可以是主观属格（母亲爱别人），也可能是客观属格（别人爱母亲）——取决于语境。这种歧义在拉丁语诗歌中被刻意利用。」',
        contextWrong: '「主观属格。母亲是爱的发出者，是爱这个动作的主语。」她重复，「不是所有属格——amor 不属于母亲；不是客观属格，那要等到下面讲。主观 = 发出动作的那一方。」',
        blackboard: {
          type: 'formulas',
          label: '所有与主观属格（对比）',
          lines: [
            '所有属格：',
            '  liber magistri  老师拥有的书',
            '  domus regis     国王拥有的房子',
            '',
            '主观属格：',
            '  amor matris     母亲发出的爱',
            '  timor hostium   敌人感受的恐惧',
            '  （属格是动作/情感的主语）',
          ]
        }
      },
      {
        point: '客观属格',
        blackboard: {
          type: 'formulas',
          label: '客观属格',
          lines: [
            'amor patriae',
            '  = 对祖国的爱（祖国是被爱的对象）',
            '  patriae 是"爱"这个动作的宾语',
            '',
            '更多例子：',
            '  timor deorum  对诸神的恐惧',
            '  desiderium pacis 对和平的渴望',
            '',
            '关键：属格 = 动作/情感的宾语（接受者）',
          ]
        },
        context: '「客观属格与主观属格正好相反：属格名词是动作的接受者，不是发出者。」珀西瓦尔写下 amor patriae，「对祖国的爱——不是祖国在爱，而是祖国被爱，是爱的宾语。」她停顿，「注意：amor matris 和 amor patriae 的形式完全相同，但含义不同。matris 是主观属格（母亲在爱），patriae 是客观属格（祖国被爱）。」她指向黑板，「区分两者只能靠语境和常识——母亲是能发出爱的主体，祖国是被爱戴的对象。拉丁语不会帮你做这个判断，你要自己判断。」'
      },
      {
        point: '描述性属格',
        blackboardQ: {
          type: 'formulas',
          label: '描述性属格',
          lines: [
            'vir magnae virtutis',
            '  = 品德高尚之人',
            '  magnae virtutis 描述 vir 的性质',
            '  （不是"品德属于这个人"，而是描述他的特质）',
            '',
            '更多例子：',
            '  homo bonae spei     有良好希望的人',
            '  urbs magnae famae   声名远播的城市',
            '',
            '规律：属格短语 = 对名词性质的描述',
          ]
        },
        question: {
          leadIn: '「描述性属格，不表示所有，也不表示动作关系，而是描述中心名词的性质或特征。」珀西瓦尔写下 vir magnae virtutis，「这个人具有伟大品德——magnae virtutis 不是说品德属于他，而是在描述他是一种什么样的人。」她停顿，「这种结构常见于人物描写和赞美诗。」她又写了 urbs magnae famae，「声名远播的城市——magnae famae 描述城市的声誉性质。」她停顿，「puer magnae sapientiae 的意思是？」',
          text: '「puer magnae sapientiae（sapientiae = 智慧的属格）的意思是？」',
          options: ['那个男孩的智慧', '具有大智慧的男孩', '男孩比智慧更重要'],
          answer: 1
        },
        contextRight: '「不错。」珀西瓦尔在黑板上写下 puer magnae sapientiae，「具有大智慧的男孩——描述性属格，magnae sapientiae 描述这个男孩的性质，不是说智慧属于他。」她停了一秒，「英语中通常译成 of great wisdom，这个 of 就是描述性属格的痕迹。」',
        contextWrong: '「具有大智慧的男孩。」她重复，「不是所有关系——不是"那个男孩的智慧"；而是描述性质：这个男孩是一个什么样的人。用 of great wisdom 来理解——具有大智慧。描述性属格。」',
        blackboard: {
          type: 'formulas',
          label: '四种属格用法（总结）',
          lines: [
            '1. 所有属格：liber magistri',
            '   = 谁拥有什么',
            '',
            '2. 主观属格：amor matris',
            '   = 谁发出动作/情感',
            '',
            '3. 客观属格：amor patriae',
            '   = 谁是动作/情感的对象',
            '',
            '4. 描述性属格：vir magnae virtutis',
            '   = 描述中心名词的性质',
          ]
        }
      },
      {
        point: '数量属格：属格表示数量',
        blackboard: {
          type: 'formulas',
          label: '数量属格',
          lines: [
            '规律：数量词 + 属格',
            '',
            'multum aquae      很多水',
            '  （multum 是数量，aquae 是属格）',
            '',
            'satis temporis    足够的时间',
            'nimium vini       太多的酒',
            '',
            '注意：数量词是中性宾格，',
            '      后接所指事物的属格',
          ]
        },
        context: '「数量属格是另一种常见用法：用数量词加属格名词，表示"多少的某样东西"。」珀西瓦尔写下 multum aquae，「很多水——multum 是中性宾格的数量词，aquae 是水的属格。不说 multa aqua，而是 multum aquae。」她停顿，「这种结构在英语里也有痕迹：a lot of water，many of them——of 就是属格的标志。」她又写了两个，「satis temporis——足够的时间；nimium vini——太多的酒，vinum 的属格是 vini。」她环顾教室，「这是拉丁语的一个习惯：数量通过属格来限定所修饰的名词。」'
      }
    ],
    lessonSummary: '「今天学了四种属格用法：所有属格——谁拥有什么；主观属格——谁发出动作；客观属格——谁是动作的对象；描述性属格——描述中心名词的性质。」她停顿，「同一个变格，四种含义。区分它们需要语境和逻辑，不能只看词尾。」她又停了一秒，「还有数量属格——数量词加属格。五种用法，都是属格。」',
    nextLessonPreview: '「下节课：句子成分分析方法。学一个系统的分析步骤，把复杂句子拆开来看。」'
  },

  19: {
    atmosphere: '黑板上写着一个长句：Magister discipulis quos amat libros dat——字迹清晰，没有任何标注。珀西瓦尔教授站在句子旁边，粉笔在手里还没有动。她等着学生们先看这个句子。教室里有些人皱起眉头，有些人在默默数名词。',
    opening: '「这是今天的练习句。」珀西瓦尔指着黑板，「如果你们现在不知道怎么分析它，这节课结束的时候会知道。」她在黑板下方写出五个步骤的标题，「拉丁语句子分析，系统的五步方法。不是随机猜测，是系统操作。」她停顿，「第一步，找动词。永远先找动词。」她在句子里的 dat 下面画了一条线，「dat——给，第三人称单数现在时。找到它，其他一切成分才有了参照。」',
    keyPoints: [
      {
        point: '五步分析法：步骤一和二',
        blackboardQ: {
          type: 'formulas',
          label: '句子分析五步法（1-2）',
          lines: [
            '步骤1：找动词（先看词尾，或在句末）',
            '  dat = dare 第三人称单数，他给',
            '',
            '步骤2：找主格名词（主语）',
            '  magister = 老师（主格，阳性单数）',
            '',
            '练习句：',
            'Magister discipulis quos amat libros dat.',
            '          ^                          ^',
            '        （主语？）                （动词）',
          ]
        },
        question: {
          leadIn: '「步骤一：找动词。」珀西瓦尔在 dat 下面加重了标注，「dat，第三人称单数现在时，dare，给。动词找到了，我们知道这是一个"给"的动作，主语是第三人称单数，也就是"他/她/它"在给。」她停顿，「步骤二：找主格名词，也就是主语。」她扫视练习句，「magister——主格，阳性，单数，老师。这就是主语。」她在 magister 下面画了一条线，「注意：magister 后面的 discipulis 词尾是 -is，不是主格。它另有用途，稍后分析。」她停顿，「练习句里的动词 dat 对应的主语是？」',
          text: '「在 Magister discipulis quos amat libros dat 中，主语是？」',
          options: ['discipulis（学生们）', 'magister（老师）', 'libros（书）'],
          answer: 1
        },
        contextRight: '「不错。」她在 magister 下面写了一个 S（Subject），「magister——主格，老师是主语。discipulis 是与格（词尾 -is），不是主语；libros 是宾格（词尾 -os），也不是主语。」她停了一秒，「步骤一和二：动词 dat，主语 magister。老师在给。」',
        contextWrong: '「magister。」她重复，「discipulis 词尾是 -is，这是与格，不是主格；libros 词尾是 -os，这是宾格。只有 magister 是主格。动词 dat 第三人称单数——主语是老师。」',
        blackboard: {
          type: 'formulas',
          label: '步骤1-2 分析结果',
          lines: [
            'Magister discipulis quos amat libros dat.',
            '  ^                                  ^',
            '  S（主语，主格）                  V（动词）',
            '',
            '步骤1：dat = 给（动词已找到）',
            '步骤2：magister = 老师（主语已找到）',
          ]
        }
      },
      {
        point: '五步分析法：步骤三和四',
        blackboard: {
          type: 'formulas',
          label: '句子分析五步法（3-4）',
          lines: [
            '步骤3：找宾格（直接宾语）和与格（间接宾语）',
            '  libros  = 书（宾格复数）  --> 直接宾语',
            '  discipulis = 学生们（与格）--> 间接宾语',
            '',
            '步骤4：分析形容词/分词（性数格指向哪个名词）',
            '  （本句无独立形容词，关系代词在步骤5处理）',
            '',
            '目前结构：',
            '  老师  学生们（与格）  书（宾格）  给',
          ]
        },
        context: '「步骤三：找宾格直接宾语和与格间接宾语。」珀西瓦尔在黑板上标注，「libros——-os 词尾，宾格复数，书，这是被给出的直接宾语；discipulis——-is 词尾，与格复数，学生们，这是接受者，间接宾语。」她停顿，「dare 这个动词搭配与格间接宾语——给学生们书，和英语"give students books"完全平行。」她又指向第四步，「步骤四：查看形容词和分词，看它们与哪个名词一致。本句没有独立形容词，但有一个关系从句 quos amat——这在步骤五处理。」她在黑板上整理出目前的结构图，「现在我们知道：老师——给——学生们（与格）——书（宾格）。还剩一个 quos amat 待处理。」'
      },
      {
        point: '五步分析法：步骤五——处理从句',
        blackboardQ: {
          type: 'formulas',
          label: '句子分析五步法（5）',
          lines: [
            '步骤5：处理从句（关系从句/间接引语）',
            '',
            '  quos amat',
            '  quos = qui 宾格复数（阳性）',
            '    --> 先行词是阳性复数名词',
            '    --> 在从句里作宾语（amat 的宾语）',
            '  先行词 = discipulos（喜爱的对象）',
            '',
            '注意：discipulis（与格）vs discipulos（宾格）',
            '  --> 先行词应是 discipulos',
          ]
        },
        question: {
          leadIn: '「步骤五：处理关系从句和间接引语。」珀西瓦尔在黑板上圈出 quos amat，「quos 是 qui 的宾格复数，阳性。先行词必须是阳性复数名词——在句子里，discipulis 虽然是学生（与格），但 quos 修饰的先行词的理解应该是 discipulos（宾格形式的学生们）。」她停顿，「amat——他/她爱，第三人称单数。谁爱谁？主句的主语 magister 在爱，被爱的是关系代词指代的学生们。」她在 quos 和 discipulis 之间画了一条连线，「那么，整句 Magister discipulis quos amat libros dat 的完整翻译是？」',
          text: '「Magister discipulis quos amat libros dat 的意思是？」',
          options: ['学生们把老师喜爱的书给了他', '老师把书给了他所喜爱的学生们', '老师读了他所喜爱的书'],
          answer: 1
        },
        contextRight: '「不错。」珀西瓦尔在黑板上写出完整翻译，「老师把书给了他所喜爱的学生们。magister——老师，主语；dat——给，动词；libros——书，直接宾语；discipulis——学生们，间接宾语；quos amat——关系从句，他所喜爱的，修饰学生们。」她停了一秒，「五步分析，得出结论。这就是系统方法的价值。」',
        contextWrong: '「老师把书给了他所喜爱的学生们。」她重复，「注意：magister 是主语，dat 是动词，libros 是直接宾语，discipulis 是间接宾语，quos amat 是修饰学生的关系从句。」她在句子成分下面各写了一个标注，「五步走完，意思清晰。」',
        blackboard: {
          type: 'formulas',
          label: '完整分析结果',
          lines: [
            'Magister  discipulis  quos amat  libros  dat.',
            '   S（主）  IO（间接宾）  [关系从句]  DO（宾）  V（动）',
            '',
            '翻译：',
            '老师把书给了他所喜爱的学生们。',
            '',
            '五步总结：',
            '1.动词  2.主语  3.宾语/与格',
            '4.形容词/分词  5.从句',
          ]
        }
      },
      {
        point: '系统分析的实践价值',
        blackboard: {
          type: 'formulas',
          label: '五步分析法口诀',
          lines: [
            '第一找动词，定准句子核心；',
            '第二找主格，确认谁在行动；',
            '第三找宾格，知道动作对象；',
            '第四看形容，确认修饰指向；',
            '第五处从句，厘清嵌套结构。',
            '',
            '原则：不猜，不跳步，',
            '      词尾是唯一的证据。',
          ]
        },
        context: '「这五步方法，不只是做练习用的。」珀西瓦尔靠在讲台边，语气依然平静，「拉丁语句子里，任何成分都可以乱序排列——主语可以在最后，宾语可以在最前，动词可以在中间。如果你靠位置猜测成分，你一定会猜错。」她停顿，「只有词尾是可靠的。主格词尾告诉你主语，宾格词尾告诉你宾语，与格词尾告诉你间接宾语。五步方法的本质是：系统地读词尾，而不是系统地猜位置。」她扫视教室，「语言是最古老的魔法，巫师只是把它说得更大声一点。但要说对，就得先读懂词尾。」'
      }
    ],
    lessonSummary: '「今天学了一件事：五步句子分析法——找动词、找主语、找宾语和与格、分析形容词分词、处理从句。」她停顿，「顺序不能变。永远先找动词，因为动词决定句子的核心结构。其他一切成分，都是在动词确认之后才能定位的。」她停了一秒，「词尾是唯一的证据。」',
    nextLessonPreview: '「下节课：词根与词缀规律，以及拉丁语在英语词汇中的痕迹。你们会发现自己每天说的英语里，到处是拉丁语。」'
  },

  20: {
    atmosphere: '讲台上放着两本词典：一本拉丁语词典，一本英语词源词典，两本并列，都翻到了某一页。珀西瓦尔教授站在讲台前，手里没有拿任何东西。这是一节规律课，但窗外今天有轻微的风雨声，让教室里有一种与外界隔绝的感觉。',
    opening: '「拉丁语没有消亡。」珀西瓦尔开口，「它变成了英语词汇的骨架。」她在黑板上写了四个词：dict, port, aqua, terra。「这四个词根，分别衍生出了几十个英语单词。」她停顿，「还有一件事：你们每天念的咒语——Expecto，Protego，Lumos——也都是这个骨架上的枝叶。」她转身，「今天我们学词根和词缀的规律，以及它们在魔法词汇里的具体体现。」',
    keyPoints: [
      {
        point: '动词词根：dict- 与 port-',
        blackboardQ: {
          type: 'formulas',
          label: '动词词根及英语衍生词',
          lines: [
            'dict-（说，来自 dicere）',
            '  dictate    = 口授，听写',
            '  predict    = 预言（pre- + dict）',
            '  dictionary = 词典（说话的工具）',
            '',
            'port-（带，来自 portare）',
            '  import     = 进口（in- + port）',
            '  export     = 出口（ex- + port）',
            '  portable   = 可携带的（port + -able）',
          ],
          audio: [
            { text: 'dict', src: 'audio/latin/lesson-20/root-dict.wav' },
            { text: 'port', src: 'audio/latin/lesson-20/root-port.wav' },
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写下 dicere 和 portare，「dicere——说；portare——带、运输。这两个动词的词根 dict- 和 port- 进入了英语。」她指向 dict-，「dictate——把话说出来让别人记录；predict——在事情发生之前就说出来，预言；dictionary——关于如何说话的工具，词典。」她又指向 port-，「import——把东西带进来；export——把东西带出去；portable——可以被带着走的。」她停顿，「这些英语单词里，词根是拉丁语的直接遗留。」停顿，「predict 里的 pre- 来自拉丁语哪个前缀？」',
          text: '「predict 中的 pre- 前缀，在拉丁语中是？」',
          options: ['pro-（在前面）', 'prae-（在前面，预先）', 'per-（通过）'],
          answer: 1
        },
        contextRight: '「不错。」珀西瓦尔在黑板上写下 prae-，「prae-——在前面，预先。英语的 pre- 直接来自拉丁语的 prae-。predict = prae + dicere，在事情发生之前就说出来。」她停了一秒，「prae- 在很多英语单词里变成了 pre-：prevent、precede、prepare——都有"预先"的含义。」',
        contextWrong: '「prae-。」她重复，「不是 pro-，pro- 是"向前"或"支持"的意思；不是 per-，per- 是"通过"或"完全"。prae- 是"预先"，在前面，是英语 pre- 的来源。」她在黑板上写出三个前缀的区别，「三个都以 p 开头，要分清楚。」',
        blackboard: {
          type: 'formulas',
          label: 'dict- 和 port- 词根总结',
          lines: [
            'dict-（说）:  dictate / predict / dictionary',
            'port-（带）:  import / export / portable',
            '',
            '记忆方法：',
            '  看到 dict- --> 和"说"有关',
            '  看到 port- --> 和"携带/运输"有关',
          ],
          audio: [
            { text: 'dict', src: 'audio/latin/lesson-20/root-dict.wav' },
            { text: 'port', src: 'audio/latin/lesson-20/root-port.wav' },
          ]
        }
      },
      {
        point: '名词词根：aqua- 与 terra-',
        blackboard: {
          type: 'formulas',
          label: '名词词根及英语衍生词',
          lines: [
            'aqua-（水，来自 aqua）',
            '  aquatic    = 水生的（aqua + -tic）',
            '  aquarium   = 水族馆（aqua + -arium）',
            '  aquamarine = 海蓝色（aqua + marina）',
            '',
            'terra-（土地，来自 terra）',
            '  terrain    = 地形（terra + -in）',
            '  territory  = 领土（terra + -tory）',
            '  terrestrial= 陆地的（terra + -estrial）',
          ],
          audio: [
            { text: 'aqua', src: 'audio/latin/lesson-20/root-aqua.wav' },
            { text: 'terra', src: 'audio/latin/lesson-20/root-terra.wav' },
          ]
        },
        context: '「aqua——水；terra——土地。这两个是拉丁语名词，直接进入了英语词根。」珀西瓦尔写下衍生词列表，「aquatic——和水有关的生物或活动；aquarium——装水的地方，水族馆；aquamarine——海蓝色，aqua 加上 marina（海洋的）。」她指向 terra-，「terrain——地形，土地的形状；territory——领土，属于某人的土地；terrestrial——陆地的，地球上的，与 aquatic 相对。」她停顿，「注意 terra 的特殊性：双写 rr——ter-ra，这是双辅音，发长音，在英语衍生词里，rr 被简化为单 r，但词根不变。」她停了一秒，「aqua 和 terra，水和土——这两个词根加起来，覆盖了大量自然词汇。」'
      },
      {
        point: '前缀与后缀规律',
        blackboardQ: {
          type: 'formulas',
          label: '拉丁语前缀和后缀在英语中',
          lines: [
            '前缀：',
            '  prae-（预先）--> pre-    preview, prepare',
            '  trans-（穿越）--> trans-  transport, translate',
            '  sub-（在下）  --> sub-    submarine, subtract',
            '',
            '后缀：',
            '  -tio（名词化）--> -tion   prediction, nation',
            '  -alis（形容词化）--> -al   natural, final',
            '',
            '规律：拉丁后缀 = 英语词性变化的核心机制',
          ]
        },
        question: {
          leadIn: '「前缀是加在词根前面改变意思的成分，后缀是加在词根后面改变词性或含义的成分。」珀西瓦尔写出三个前缀，「prae-——在前面，英语变成 pre-；trans-——穿越，保持 trans- 不变；sub-——在下面，也保持 sub- 不变。」她又写出两个后缀，「-tio 变成英语 -tion，是名词化后缀：predict 加 -tion 变成 prediction，预言（名词）；-alis 变成英语 -al，是形容词化后缀：natur 加 -al 变成 natural，自然的。」她停顿，「transport 里的 trans- 是？」',
          text: '「transport 中的 trans- 前缀的拉丁语含义是？」',
          options: ['在下面', '穿越、跨越', '在前面'],
          answer: 1
        },
        contextRight: '「不错。」她在 transport 旁边写了"穿越+带"，「trans- + port- = 穿越+携带 = 运输，把东西从一处带到另一处，跨越距离。」她停了一秒，「trans- 在英语里极其常见：translate（跨越+携带语言），transform（跨越+形状），transparent（跨越+出现，透明的）。」',
        contextWrong: '「穿越、跨越。」她重复，「sub- 是在下面，prae- 是在前面，trans- 是穿越。transport = trans + portare，把东西带过去，跨越某个界限。」她在黑板上写出三个前缀的对比，「三个前缀，方向不同。」',
        blackboard: {
          type: 'formulas',
          label: '前缀/后缀总览',
          lines: [
            '前缀方向：',
            '  prae- 向前/预先',
            '  trans- 穿越',
            '  sub-  在下',
            '  ex-   向外',
            '  in-   向内/进入',
            '',
            '后缀功能：',
            '  -tion  动词 --> 名词',
            '  -al    名词 --> 形容词',
            '  -able  动词 --> 形容词（可……的）',
          ]
        }
      },
      {
        point: '魔法联动：Expecto 与 Protego 的词根',
        blackboard: {
          type: 'formulas',
          label: '咒语词根分析',
          lines: [
            'Expecto Patronum:',
            '  ex-     = 向外',
            '  specto  = 我看，我期望（spectare）',
            '  Expecto = 我向外望，我期待',
            '  Patronum = 守护者（宾格）',
            '',
            'Protego:',
            '  pro-  = 在前面',
            '  tego  = 我覆盖，我保护（tegere）',
            '  Protego = 我在前面覆盖 = 我保护',
            '',
            '词根 = 咒语效果的说明书',
          ]
        },
        context: '珀西瓦尔把两本词典向旁边推了推，「语言是最古老的魔法，巫师只是把它说得更大声一点。」她在黑板上写出两个咒语的词根分析，「Expecto Patronum——ex- 是向外，specto 是看、期望，spectare 的第一人称现在时；Patronum 是 patronus（守护者）的宾格。整句：我向外期待守护者。」她停顿，「Protego——pro- 是在前面，tego 来自 tegere，覆盖、遮蔽；合起来：我在前面覆盖，我保护。」她环顾教室，「这两个咒语的效果，完全由词根决定——Expecto 是召唤，Protego 是防护。如果你懂词根，你不需要记住效果，因为咒语本身已经告诉你了。」她停了一秒，「词根是咒语效果的说明书。」'
      }
    ],
    lessonSummary: '「今天学了三件事：第一，四个核心词根——dict-（说）、port-（带）、aqua-（水）、terra-（土地）——以及它们在英语里的衍生词；第二，前缀和后缀的规律——prae-/pre-（预先）、trans-（穿越）、sub-（在下）、-tion（名词化）、-al（形容词化）；第三，咒语 Expecto 和 Protego 的词根分析。」她停顿，「理解词根，你就拥有了一把拆解语言的钥匙——无论是英语词汇，还是魔法咒语。」',
    nextLessonPreview: '「下节课：拉丁语对英语词汇的历史影响——借词的三个时期，以及为什么拉丁语词汇在英语里通常更正式。」'
  },

  21: {
    atmosphere: '黑板上并排写着两列单词：左边是 ask、begin、help、buy，右边是 inquire、commence、assist、purchase。珀西瓦尔教授站在两列之间，用粉笔在中间画了一条竖线，线很直。教室里弥漫着旧书的气味，窗台上摆着一本词源字典，书脊磨损严重。',
    opening: '「英语有两套词汇系统。」珀西瓦尔指着黑板两列，「左边是日耳曼语源，右边是拉丁语源。它们含义相近，但层次不同。」她在 ask 和 inquire 之间划了一道横线，「ask 是日常用词，inquire 是正式用词。这种分层是历史的结果，不是偶然。」她转身，「今天学习这个系统的来源。」',
    keyPoints: [
      {
        point: '日耳曼词 vs 拉丁词对比',
        blackboardQ: {
          type: 'formulas',
          label: '英语双层词汇体系',
          lines: [
            '日耳曼词（日常）    拉丁词（正式）',
            '──────────────────────────────────',
            'ask               inquire',
            'begin             commence',
            'help              assist',
            'buy               purchase',
          ]
        },
        question: {
          leadIn: '珀西瓦尔指着黑板右列，「这些拉丁词大多通过法语进入英语，法语本身源自拉丁语。commence，从拉丁语 com- 加 initiare 衍变而来，意思是开始、启动。」她用粉笔在 commence 旁边画了一个小箭头，「它的日耳曼对应词是哪个？」',
          text: '「commence 对应英语哪个日耳曼词？」',
          options: ['begin', 'finish', 'speak'],
          answer: 0
        },
        contextRight: '「不错。」她停了一秒，「begin 和 commence 含义相同，但 begin 是古英语词，commence 是法语借词，法语来自拉丁语。正式文件里用 commence，日常对话里用 begin。层次不同，功能不同。」',
        contextWrong: '「begin。」她重复，不带感情，「finish 是结束，speak 是说话，都不对应。commence 意为开始，日耳曼对应词是 begin。两词含义相同，层次不同。」',
        blackboard: {
          type: 'formulas',
          label: '英语双层词汇体系（完整）',
          lines: [
            '日耳曼词（日常）    拉丁词（正式）',
            '──────────────────────────────────',
            'ask               inquire',
            '[begin]           commence',
            'help              assist',
            'buy               purchase',
            '',
            '规律：拉丁词层次更高，多用于正式语境',
          ]
        }
      },
      {
        point: '拉丁语进入英语的三条渠道',
        blackboard: {
          type: 'formulas',
          label: '拉丁词汇进入英语的历史渠道',
          lines: [
            '渠道一：罗马占领（43-410AD）',
            '  → 军事、行政词汇  camp / port / villa',
            '',
            '渠道二：基督教传入（597AD起）',
            '  → 宗教词汇  angel / bishop / psalm',
            '',
            '渠道三：文艺复兴（14-17世纪）',
            '  → 学术词汇  radius / formula / data',
          ]
        },
        context: '珀西瓦尔在黑板上写下三个年份。「第一波：公元43年，罗马占领不列颠，带来了军事和行政词汇。camp，营地；port，港口。这批词保留在地名里——Manchester，Lancaster，词尾 -caster 来自拉丁语 castra，军营。」她停顿，「第二波：597年，基督教传教士奥古斯丁抵达英格兰，带来了拉丁宗教词汇。angel，bishop，psalm——全部来自拉丁语或经由拉丁语传入。」她在第三条下面画了一道横线，「第三波是最大的一波。文艺复兴时期，学者们大量从拉丁语和希腊语造新词。radius，formula，data——这些科学词汇至今通用。」她放下粉笔，「三条渠道，三个时代，积累成今天的英语。」'
      },
      {
        point: '识别拉丁源词的形态标志',
        blackboard: {
          type: 'formulas',
          label: '拉丁源词常见后缀',
          lines: [
            '后缀         例词',
            '──────────────────────────────',
            '-tion        nation / action / fraction',
            '-ment        movement / statement',
            '-al          natural / formal / verbal',
            '-ous         famous / generous / curious',
            '',
            '规律：这些后缀几乎全部来自拉丁语',
          ]
        },
        context: '「看这四个后缀。」珀西瓦尔在黑板上逐一写出，「-tion——nation，来自拉丁语 natio；action，来自 actio。这个后缀在拉丁语里表示动作或结果的名词化。」她写下 -ment，「-ment 来自拉丁语 -mentum，也是名词化后缀：movimentum，movement。」她在 -al 旁边停了一下，「-al 来自拉丁语 -alis，表示"属于……的"：naturalis，natural。」她最后写下 -ous，「-ous 来自拉丁语 -osus，表示"充满……的"：famosus，famous。」她转身，「遇到不认识的词，看后缀——如果是这四个之一，先往拉丁语词根方向想。」'
      },
      {
        point: '词源学视角：语言考古',
        blackboard: {
          type: 'formulas',
          label: '词源分析示例',
          lines: [
            'purchase  ← 古法语 purchacier',
            '          ← 拉丁语 pro- + captare',
            '          = "努力获取"',
            '',
            'assist    ← 拉丁语 assistere',
            '          = ad-（朝向）+ sistere（站立）',
            '          = "站在旁边帮忙"',
          ]
        },
        context: '珀西瓦尔拿起讲台上那本磨损的词源字典，没有打开，只是搁在手边。「我研究的方向是语言考古学——通过词语的历史追溯它的原始含义，然后用这个原始含义去理解现代用法，甚至去理解魔法咒语的作用机制。」她把字典放回去，「purchase，现在意思是"购买"，但追溯到拉丁语是 pro- 加 captare，努力去抓取某物。assist，字面意思是"站在旁边"——ad，朝向；sistere，站立。帮助一个人的行为，在拉丁语里被定义为"站到他旁边"。」她在黑板上写下这两组词源，「词义演变是有轨迹的，不是随机的。看懂这个轨迹，你就能在不认识一个词的情况下猜出它的大概意思。」'
      }
    ],
    lessonSummary: '今天课程围绕英语词汇的双层体系展开：日耳曼词层次日常、简洁，拉丁词层次正式、精确。拉丁语通过三条历史渠道进入英语：罗马占领、基督教传入、文艺复兴。识别拉丁源词可依赖形态标志——后缀 -tion、-ment、-al、-ous 几乎全部来自拉丁语。词源分析是理解词义的有效工具。',
    nextLessonPreview: '「下节课：医学与法律中的拉丁语根。这两个领域保存了最纯粹的拉丁语遗产。」'
  },

  22: {
    atmosphere: '黑板分成两个区域，左边写着几个希腊字母拼成的前缀，右边是一列拉丁短语。珀西瓦尔教授的绿色讲义夹摆在讲台上，夹子上有一个小标签：Medicina et Ius。教室的光线偏冷，像医院走廊的气氛。',
    opening: '「医学和法律是两个最不愿意更新词汇的领域。」珀西瓦尔在讲台前站定，「它们的从业者需要精确，需要稳定，需要国际通用。拉丁语满足了这三个条件。」她拿起粉笔，「今天学这两个领域里最核心的拉丁根。不要死记——理解它们的来源，就能推断你从未见过的词。」',
    keyPoints: [
      {
        point: '医学词根：cardio、neuro、osteo、-itis',
        blackboardQ: {
          type: 'formulas',
          label: '医学词根（拉丁与希腊）',
          lines: [
            'cardio-   ← 希腊 kardia    心脏',
            '  → cardiology 心脏学  cardiac 心脏的',
            'neuro-    ← 希腊 neuron    神经',
            '  → neurology 神经学  neuron 神经元',
            'osteo-    ← 希腊 osteon    骨骼',
            '  → osteoporosis 骨质疏松',
            '-itis     ← 希腊 -itis     炎症',
            '  → arthritis 关节炎  tonsillitis 扁桃体炎',
          ]
        },
        question: {
          leadIn: '珀西瓦尔指着黑板上的词根表，「这四个是医学词汇的基础构件。注意：很多医学词根来自希腊语，而非拉丁语本身——但它们经由拉丁语传入欧洲，成为医学通用语汇的一部分。」她用粉笔圈出 -itis，「后缀 -itis 表示炎症，加在身体部位词根后面就成了该部位的炎症名称。arthritis——arthro 是关节，加上 -itis，关节炎。tonsillitis——扁桃体炎。」她停顿，「如果你见到一个新词结尾是 -itis，它大概是？」',
          text: '「后缀 -itis 表示什么含义？」',
          options: ['某个器官', '炎症', '手术'],
          answer: 1
        },
        contextRight: '「不错。」她停顿一秒，「-itis 表示炎症，是诊断词汇最常见的后缀之一。记住这一个后缀，你就能读懂几十种疾病名称——只需要知道前面的词根指的是哪个部位。」',
        contextWrong: '「炎症。」她重复，不带感情，「-itis 固定表示炎症，不是器官名称本身，不是手术。arthritis，关节炎；appendicitis，阑尾炎；meningitis，脑膜炎。后缀不变，含义不变。」',
        blackboard: {
          type: 'formulas',
          label: '医学词根（含义确认）',
          lines: [
            'cardio-   心脏',
            'neuro-    神经',
            'osteo-    骨骼',
            '[-itis]   炎症  ← 后缀，接在部位词根后',
            '',
            '示例：osteo + -itis = osteoitis（骨炎）',
          ]
        }
      },
      {
        point: '法律短语：habeas corpus、pro bono、veto',
        blackboard: {
          type: 'formulas',
          label: '法律拉丁短语',
          lines: [
            'habeas corpus   "你须持有人身"',
            '  → 人身保护令：禁止无理拘禁',
            '',
            'pro bono        "为了善"（pro bono publico）',
            '  → 无偿法律服务',
            '',
            'veto            "我禁止"',
            '  → 否决权',
            '',
            'in absentia     "在缺席中"',
            '  → 缺席审判',
          ]
        },
        context: '「法律系统在大陆法和英美法传统中都大量使用拉丁语。」珀西瓦尔在黑板上写下四个短语，「habeas corpus——字面意思是"你须持有这个人的身体"。这是1215年后形成的普通法原则，要求拘禁者必须在法庭上出示被拘人，不得秘密关押。」她转向 pro bono，「pro bono publico，为了公共利益，通常简称 pro bono——律师免费提供服务。pro 是"为了"，bono 是"善、利益"，来自形容词 bonus。」她在 veto 下面停了一下，「veto——第一人称单数，我禁止。古罗马护民官用来否决元老院决议的用词。今天联合国安理会的否决权在英文里还是叫 veto。」她放下粉笔，「这些词没有被翻译，因为翻译会损失精确性。」'
      },
      {
        point: '法律拉丁：veto 的语法分析',
        blackboardQ: {
          type: 'formulas',
          label: 'veto 语法分析',
          lines: [
            'veto  ←  动词 vetare 第一变位',
            '  第一人称单数现在时',
            '  = "I forbid"  我禁止',
            '',
            '对比：',
            '  veto  = I forbid（我禁止）',
            '  vetas = you forbid',
            '  vetat = he/she forbids',
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板旁边写下 veto 的完整变位，「这是第一变位动词 vetare——禁止。veto 是第一人称单数现在时，按照我们学过的规律：词干 veta- 加人称词尾 -o，得到 veto。」她圈出词尾，「拉丁语用第一人称宣告"我禁止"，这是一种直接的政治行为动词。」她停顿，「veto 的字面意思是？」',
          text: '「veto 字面意思是什么？」',
          options: ['我禁止', '我同意', '我怀疑'],
          answer: 0
        },
        contextRight: '「不错。」她停顿一秒，「我禁止。第一人称，直接宣告。古罗马护民官每次行使否决权时，说的就是这个词——不是申请，不是建议，是宣告。这个词今天直接进入了国际政治词汇。」',
        contextWrong: '「我禁止。」她重复，不带感情，「vetare 意为禁止，veto 是第一人称单数"我禁止"。我同意是 approbo，我怀疑是 dubito。每个动词对应不同的语义，不要混淆。」',
        blackboard: {
          type: 'formulas',
          label: 'veto 含义确认',
          lines: [
            '[veto] = "我禁止"',
            '',
            'vetare（禁止）变位：',
            'veto / vetas / vetat',
            'vetamus / vetatis / vetant',
            '',
            '历史用法：罗马护民官 → 联合国安理会',
          ]
        }
      },
      {
        point: '医学与法律：拉丁语作为国际精确语言',
        blackboard: {
          type: 'formulas',
          label: '拉丁语作为国际通用语的原因',
          lines: [
            '1. 精确性：格系统消除歧义',
            '2. 稳定性：死语言不再演变',
            '3. 国际性：超越国家界限',
            '',
            '医学：解剖学命名至今使用拉丁语',
            '法律：判例引用保留拉丁短语',
            '科学：分类命名用拉丁双名法',
          ]
        },
        context: '珀西瓦尔靠在讲台边，「为什么医学和法律不肯放弃拉丁语？」她环顾教室，没有等人回答，「因为活的语言在变化。英语今天的 awful 是负面词，一百年前是"令人敬畏的"，正面词。语言漂移是自然的，但法律文件和医学诊断不能漂移——今天写的合同，五十年后还要一字不差地生效。」她走到黑板前，「拉丁语是死语言——它不再演变了，意思锁定在文本里。这就是为什么解剖学教材的拉丁名称全球通用，为什么法庭文书引用拉丁短语。」她停顿，「死亡给了它永久性。」'
      }
    ],
    lessonSummary: '医学词根 cardio-（心脏）、neuro-（神经）、osteo-（骨骼）和后缀 -itis（炎症）是医学命名的核心构件。法律领域的 habeas corpus（人身保护）、pro bono（无偿服务）、veto（我禁止）至今保留拉丁原形。拉丁语之所以成为两大专业领域的通用语，原因在于它的精确性、稳定性和超越国界的权威性。',
    nextLessonPreview: '「下节课：科学命名法——林奈双名法。每种生物的拉丁学名是如何构成的。」'
  },

  23: {
    atmosphere: '珀西瓦尔教授在黑板上写着一个学名：Homo sapiens。字迹工整，第一个词首字母大写，第二个词全小写，两者都有下划线的意象。讲台上摆着一本《物种起源》拉丁文注释版，翻到某一页，用粉笔夹着。',
    opening: '「1753年，林奈出版《植物种志》，确立了一套沿用至今的命名体系。」珀西瓦尔指着黑板，「每种生物两个名字：属名加种加词。这两个名字都用拉丁语写成，或者拉丁化的希腊语。」她在 Homo 下面点了一下，「Homo——人属，大写，名词。sapiens——智慧的，小写，形容词。Homo sapiens，智慧人——就是我们这个物种。」她转身，「今天学这个体系的规则和逻辑。」',
    keyPoints: [
      {
        point: '双名法构成规则',
        blackboardQ: {
          type: 'formulas',
          label: '林奈双名法规则',
          lines: [
            '格式：属名（大写首字母）+ 种加词（小写）',
            '语言：拉丁语或拉丁化希腊语',
            '排版：斜体或下划线',
            '',
            '例：Homo sapiens',
            '    Felis catus（家猫）',
            '    Rosa canina（狗蔷薇）',
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写下三组学名，「注意格式：属名第一个字母大写，种加词全部小写。这是国际规定，不是风格选择。」她在 Homo 的大写 H 上画了一个圈，又在 sapiens 的小写 s 上画了一个圈，「不遵守这个格式就是错误的。」她停顿，「双名法中，属名应如何书写？」',
          text: '「双名法中属名应如何书写？」',
          options: ['全小写', '首字母大写', '全大写'],
          answer: 1
        },
        contextRight: '「不错。」她停顿一秒，「首字母大写，其余小写。种加词相反——全部小写。这个规则适用于所有生物学命名，没有例外。写错大小写就是写错了学名。」',
        contextWrong: '「首字母大写。」她重复，不带感情，「属名首字母大写，如 Homo、Felis、Rosa。种加词全部小写，如 sapiens、catus、canina。全大写和全小写都不符合国际命名法规则。」',
        blackboard: {
          type: 'formulas',
          label: '双名法格式确认',
          lines: [
            '[属名：首字母大写] + [种加词：全小写]',
            '',
            'Homo sapiens      人属  智慧种',
            'Felis catus       猫属  家猫种',
            'Rosa canina       蔷薇属 犬蔷薇种',
          ]
        }
      },
      {
        point: '动物学名举例：Bubo bubo 与 Noctua',
        blackboard: {
          type: 'formulas',
          label: '鸟类拉丁学名举例',
          lines: [
            'Bubo bubo',
            '  属名 Bubo = 雕鸮属（拟声词）',
            '  种名 bubo = 同属中的代表种',
            '  → 大角鸮（雕鸮）',
            '',
            'Noctua',
            '  ← 拉丁语 nox（夜）',
            '  → 夜行鸟属，含多种夜行猫头鹰',
            '',
            'Athene noctua    小鸮（雅典娜鸟）',
          ]
        },
        context: '「Bubo bubo——属名和种名相同。」珀西瓦尔在黑板上写下这个学名，「当属名和种名相同时，这个种就是该属的模式种——最具代表性的种。Bubo 来自拉丁语拟声词，模仿鸮类的叫声。」她在 Noctua 旁边写下词源，「Noctua，来自 nox，夜。这个属名直接告诉你该鸟的生活习性。Athene noctua——小鸮，属名 Athene 来自雅典娜，古希腊智慧女神的标志动物就是猫头鹰。」她停顿，「学名不是随机编的。每个词都有词源，都有命名者的考量。解读学名，就是阅读一段分类学历史。」'
      },
      {
        point: 'Homo sapiens 逐词分析',
        blackboard: {
          type: 'formulas',
          label: 'Homo sapiens 词源分析',
          lines: [
            'Homo',
            '  ← 拉丁语 homo（人，人类）',
            '  格：主格单数  第三变位名词',
            '',
            'sapiens',
            '  ← 动词 sapere（品味、有智慧）',
            '  形式：现在分词  = "having wisdom"',
            '',
            'Homo sapiens = 有智慧的人  智人',
          ]
        },
        context: '珀西瓦尔在黑板上把 Homo sapiens 的两个词分开写，逐一分析。「Homo——拉丁语第三变位名词，主格单数，意为人、人类。注意不要和 homo-（同一）这个希腊前缀混淆，虽然拼写相似。」她移向 sapiens，「sapiens——来自动词 sapere，意为品味、理解、有智慧。sapiens 是现在主动分词，意思是"正在有智慧的"或"有智慧的"。」她在两词之间写了等号，「林奈在1758年正式用这个名称命名人类。他的意思很清楚：人是那个会思考的动物。」她略停了一下，「这个判断是否准确，我们不评论。」'
      },
      {
        point: '双名法的拉丁语语法基础',
        blackboardQ: {
          type: 'formulas',
          label: '学名的语法结构',
          lines: [
            '属名：名词  主格单数',
            '种加词：形容词（与属名性一致）',
            '        或名词所有格',
            '        或地名形容词',
            '',
            '示例：',
            'Rosa canina  → canina（犬的）形容词',
            'Homo sapiens → sapiens（智慧的）分词作形容词',
          ]
        },
        question: {
          leadIn: '「双名法中的种加词可以是形容词、名词所有格或地名形容词。」珀西瓦尔在黑板上写下 Rosa canina，「canina 是形容词，来自 canis（狗），意为狗的。这种蔷薇被称为狗蔷薇，因为人们认为它的根可以治疗狗咬伤。」她又写下一个学名，「种加词如果是形容词，需要与属名的性相吻合——这是拉丁语语法的规定。现在，Homo sapiens 中 sapiens 的来源是？」',
          text: '「sapiens 来自哪个拉丁语动词？」',
          options: ['scire（知道）', 'sapere（有智慧）', 'videre（看见）'],
          answer: 1
        },
        contextRight: '「不错。」她停顿一秒，「sapere——品味、理解、有智慧。sapiens 是其现在分词形式，意为"有智慧的"。scire 是知晓，videre 是看见，含义不同。」',
        contextWrong: '「sapere。」她重复，不带感情，「sapere 意为品味、理解、有智慧。sapiens 是其现在分词。scire 是知晓，videre 是看见——三个动词语义不同，来源不同。」',
        blackboard: {
          type: 'formulas',
          label: 'sapiens 词源确认',
          lines: [
            '[sapere]（品味/有智慧）',
            '  → sapiens（现在分词）= 有智慧的',
            '',
            'Homo sapiens = 有智慧的人',
            '',
            '对比：',
            '  scire → science（知识）',
            '  videre → video / vision（看见）',
          ]
        }
      }
    ],
    lessonSummary: '林奈双名法规定每种生物用两个拉丁词命名：属名首字母大写，种加词全小写，两者均用斜体或下划线标注。属名是名词主格，种加词通常是形容词、名词所有格或地名形容词。Homo sapiens（智人）是最为人熟知的例子，sapiens 来自动词 sapere（有智慧）。这套命名体系至今是国际生物命名法的标准。',
    nextLessonPreview: '「下节课：咒语词根精析。这是我个人研究的核心内容。」'
  },

  24: {
    atmosphere: '黑板上提前画好了一张三列表格，表头是"咒语 / 拉丁词根 / 含义"，表格里还空着。珀西瓦尔教授站在讲台旁边，比平时站得稍微直一些，粉笔握在手里，没有立即开始。窗外有乌云，教室比往常暗。她在黑板旁边侧身站着，像是在等某件事。',
    opening: '「今天的内容。」她的声音没有变，但语速稍慢了一点，「是我研究的核心。」她在三列表头下面开始写，「每一个魔法咒语都有来源。巫师社会从中世纪开始将拉丁语确立为咒语的语言基础，理由是精确、稳定、权威——和医学法律选择拉丁语的理由相同。」她在 Lumos 旁边写下 lux，「但咒语不只是借用了拉丁词，它们在语义上和词根有一致性。这不是偶然。」她放下粉笔，拿起来，再放下，「开始。」',
    keyPoints: [
      {
        point: 'Lumos、Nox——光与夜',
        blackboardQ: {
          type: 'formulas',
          label: '咒语词根：光与夜',
          lines: [
            'Lumos  ←  lux（光，照明）',
            '  luc-/lum- 是光的词根',
            '  → lucid（清晰的）illuminate（照亮）',
            '',
            'Nox    ←  nox（夜，黑暗）',
            '  noct- 是夜的词根',
            '  → nocturnal（夜行的）equinox（春秋分）',
          ],
          audio: [
            { text: 'lumos', src: 'audio/latin/lesson-24/lumos.wav' },
            { text: 'nox', src: 'audio/latin/lesson-24/nox.wav' },
          ]
        },
        question: {
          leadIn: '珀西瓦尔用粉笔在 Lumos 旁边写下 lux，「lux——光，第三变位名词，词根是 luc- 或 lum-。Lumos 是词根 lum- 加后缀 -os，这种拉丁化希腊语的构词方式在咒语中很常见。」她又在 Nox 旁边写下 nox，「Nox——这个直接就是拉丁词 nox，夜。不需要任何改动。」她转向黑板上的派生词，「lucid——清晰的，字面是"充满光的"；equinox——昼夜平分，equi 是"相等"，nox 是"夜"。」她指向 lux 词根，「Lumos 来自哪个拉丁词的词根？」',
          text: '「Lumos 的词根来源是？」',
          options: ['lux（光）', 'luna（月亮）', 'locus（地方）'],
          answer: 0
        },
        contextRight: '「不错。」她停顿一秒，「lux，光。词根 lum-/luc- 贯穿在照明相关的词汇中：lucid，illuminate，luminous。Lumos 延续了这个词根，在魔法语境中表示产生光。语义和词根完全一致。」',
        contextWrong: '「lux——光。」她重复，不带感情，「luna 是月亮，locus 是地方，都与 Lumos 无关。lux 的词根 lum-/luc- 才是 Lumos 的来源。lucid，illuminate，luminous——同一族词根。」',
        blackboard: {
          type: 'formulas',
          label: '光与夜词根确认',
          lines: [
            '[Lumos] ← lux（光）  词根 lum-',
            '  lucid / illuminate / luminous',
            '',
            '[Nox]   ← nox（夜）  词根 noct-',
            '  nocturnal / equinox',
            '',
            '语义一致：咒语功能 = 词根含义',
          ],
          audio: [
            { text: 'lumos', src: 'audio/latin/lesson-24/lumos.wav' },
            { text: 'nox', src: 'audio/latin/lesson-24/nox.wav' },
          ]
        }
      },
      {
        point: 'Expecto Patronum——期待与守护者',
        blackboard: {
          type: 'formulas',
          label: 'Expecto Patronum 词源分析',
          lines: [
            'Expecto',
            '  ← ex-（向外）+ spectare（观看、等待）',
            '  = exspecto：我期待、我等待',
            '  第一人称单数现在时',
            '',
            'Patronum',
            '  ← patronus（守护者、庇护人）',
            '  ← pater（父亲）派生',
            '  宾格单数（作 expecto 的宾语）',
          ],
          audio: [
            { text: 'patronum', src: 'audio/latin/lesson-24/patronum.wav' },
          ]
        },
        context: '珀西瓦尔在黑板上写下 Expecto Patronum，动作比平时慢了半拍。「Expecto——第一人称单数，我期待，我召唤。ex- 是"向外"，spectare 是"观看、等待"，合起来是向外注视、等待某事发生。」她转向 Patronum，「Patronum 是 patronus 的宾格——因为它是 expecto 的宾语，被期待的对象。Patronus 是守护者、庇护人，来自 pater，父亲。在罗马社会，patron 是对客户承担庇护义务的上位者，一种父亲式的保护关系。」她停了一下，扫视黑板，「整个咒语的意思是：我向守护者致以期待。或者说：我召唤我的庇护者。」她放下粉笔，「词根没有欺骗我们。」'
      },
      {
        point: 'patronus 词根：pater',
        blackboardQ: {
          type: 'formulas',
          label: 'pater 派生词族',
          lines: [
            'pater（父亲）',
            '  → patron / patronus（庇护者）',
            '  → patria（祖国）',
            '  → patriot（爱国者）',
            '  → patrician（贵族）',
            '  → pax（和平，另一词根）',
          ]
        },
        question: {
          leadIn: '珀西瓦尔指着黑板上的 patronus，「这个词的词根是 pater——父亲。罗马文化中父亲的形象是权威、保护和养育，所以 pater 的派生词都带有庇护、归属的含义。」她在黑板上列出几个派生词，「patron，patronia，patriot——都来自同一个词根。patria 是祖国，字面意思是"父亲的土地"。patrician 是贵族，字面意思是"有父系传承的人"。」她停顿，「patronus 来自哪个拉丁词？」',
          text: '「patronus 来自哪个拉丁词？」',
          options: ['pater（父亲）', 'patria（祖国）', 'pax（和平）'],
          answer: 0
        },
        contextRight: '「不错。」她停顿一秒，「pater——父亲。patronus 是 pater 加后缀 -onus，意为庇护者。patria 也来自 pater，但那是"祖国"而非守护者。pax 是和平，词根完全不同。」',
        contextWrong: '「pater——父亲。」她重复，不带感情，「patronus 的词根是 pater。patria 是祖国，也来自 pater，但 patronus 直接来自 pater 本身。pax 是和平，词根是 pac-，与 pater 无关。」',
        blackboard: {
          type: 'formulas',
          label: 'patronus 词根确认',
          lines: [
            '[pater]（父亲）→ patronus（庇护者/守护者）',
            '',
            '词族：',
            '  pater → patron → patronage',
            '  pater → patria → patriot',
            '  pater → patrician',
            '',
            '核心语义：父亲 = 庇护 = 权威',
          ]
        }
      },
      {
        point: 'Reparo、Obliviate——修复与遗忘',
        blackboard: {
          type: 'formulas',
          label: '完整咒语词根表',
          lines: [
            '咒语          词根              含义',
            '──────────────────────────────────────',
            'Lumos         lux（光）         产生光',
            'Nox           nox（夜）         熄灭光',
            'Expecto       exspecto（期待）  召唤',
            'Reparo        re+paro（修复）   修缮',
            'Obliviate     oblivium（遗忘）  抹去记忆',
          ]
        },
        context: '珀西瓦尔在表格里填完最后两行。「Reparo——re- 是"再次、回到"，paro 是"准备、修整"。Reparo 的意思是恢复到原来的状态——修复。动词词形是第一人称单数现在时：我修复。」她在 Obliviate 旁边停顿，「Obliviate 来自 oblivium——遗忘，来自 ob-（面对）加 livis（光滑），字面是"让记忆变得光滑而无痕迹"。这是一个非常古老的意象。」她退后一步，看着完整的表格，「五个咒语，五个词根，含义全部与词源一致。」她把粉笔放在粉笔架上，没有再动，「这不是巧合。创造这些咒语的人懂拉丁语，而且他们是认真的。」'
      }
    ],
    lessonSummary: '今天分析了五个核心咒语的拉丁词根：Lumos 来自 lux（光），Nox 来自 nox（夜），Expecto 来自 exspecto（期待），Patronum 来自 patronus（守护者，源于 pater 父亲），Reparo 来自 re+paro（修复），Obliviate 来自 oblivium（遗忘）。每个咒语的语义与其拉丁词根完全一致，说明魔法咒语体系是有意识地建立在拉丁语语义基础上的。',
    nextLessonPreview: '「下节课：罗马世界的历史背景。语言在历史中如何演变。」'
  },

  25: {
    atmosphere: '黑板上画着一条横向时间轴，左端标注 753BC，右端延伸到 1500AD，轴线上有几个节点，每个节点旁边写着一个历史时期名称。珀西瓦尔教授站在时间轴最左端，用粉笔指着 753BC，「这是开始。」',
    opening: '「拉丁语不是突然出现的，也不是突然消失的。」珀西瓦尔转身，「它有一个生命周期：诞生、成熟、衰老、分裂、遗存。」她沿着时间轴向右走，「要理解拉丁语，先要理解罗马——它的政治结构决定了拉丁语的传播范围和演变方式。」她停在轴线中央，「四个时期，今天依次讲清楚。」',
    keyPoints: [
      {
        point: '罗马四个历史时期',
        blackboardQ: {
          type: 'formulas',
          label: '罗马历史时期与拉丁语阶段',
          lines: [
            '王政时期   753–509 BC   早期拉丁语',
            '共和国     509–27  BC   古典拉丁语成熟',
            '帝国       27 BC–476 AD 黄金/白银时代',
            '中世纪     476–1500 AD  通俗→罗曼语分裂',
          ]
        },
        question: {
          leadIn: '珀西瓦尔用粉笔依次标注四个时期，「王政时期——罗马城邦阶段，拉丁语尚未标准化，文献极少。共和国时期——公元前509年驱逐最后一位国王，建立共和。这一时期西塞罗的散文确立了古典拉丁语标准。」她在轴线上指向共和国末至帝国初，「这段时间出现了拉丁文学的黄金时代：西塞罗、凯撒、维吉尔、奥维德。古典拉丁语的黄金时代在哪个时期？」',
          text: '「古典拉丁语黄金时代在哪个时期？」',
          options: ['王政时期', '共和国末至帝国初', '中世纪'],
          answer: 1
        },
        contextRight: '「不错。」她停顿一秒，「共和国末至帝国初——约公元前1世纪到公元1世纪。西塞罗、凯撒、维吉尔、奥维德、李维，都在这段时间写作。这是拉丁文学最精炼的时期，也是后世学拉丁语以此为标准的原因。」',
        contextWrong: '「共和国末至帝国初。」她重复，不带感情，「王政时期文献极少，中世纪拉丁语已经演变。公元前1世纪到公元1世纪是黄金时代，西塞罗和维吉尔都在这个时期写作。」',
        blackboard: {
          type: 'formulas',
          label: '时期确认：黄金时代',
          lines: [
            '王政时期   753–509 BC   早期拉丁语（文献少）',
            '[共和国末至帝国初]       黄金时代',
            '  西塞罗 / 凯撒 / 维吉尔 / 奥维德',
            '  约公元前1世纪–公元1世纪',
            '帝国后期  白银时代，文风渐变',
            '中世纪    通俗拉丁语→法语/西班牙语/意大利语',
          ]
        }
      },
      {
        point: '共和国：政治结构与拉丁语传播',
        blackboard: {
          type: 'formulas',
          label: '共和国政治结构（509–27 BC）',
          lines: [
            '执政官（Consul）× 2 每年选举',
            '元老院（Senatus）≈ 300人  咨询机构',
            '护民官（Tribunus）保护平民',
            '',
            'SPQR = Senatus PopulusQue Romanus',
            '  = 元老院与罗马人民',
            '',
            '军事扩张 → 拉丁语随军队传播',
          ]
        },
        context: '「共和国是拉丁语扩张的发动机。」珀西瓦尔在黑板上写下 SPQR，「Senatus PopulusQue Romanus——元老院与罗马人民。这四个字母出现在罗马的所有官方文件、旗帜和建筑上。PopulusQue 中的 -que 是拉丁语的附着连词，意思是"and"，附在第二个词的末尾。」她停顿，「共和国通过军事征服扩张领土，军队带来了拉丁语。被征服地区的上层阶级学习拉丁语以获得公民权和晋升机会。」她在地图想象的区域上画了几个点，「高卢、伊比利亚、北非——这些地区的拉丁语最终演变成法语、西班牙语、葡萄牙语。这就是罗曼语族的来源。」'
      },
      {
        point: '帝国时代的拉丁语',
        blackboard: {
          type: 'formulas',
          label: '帝国时代（27 BC – 476 AD）',
          lines: [
            '奥古斯都建立帝国  27 BC',
            '  → 文学黄金时代  维吉尔 奥维德',
            '',
            '白银时代（1-2世纪）',
            '  → 文风更繁复，修辞更浓',
            '',
            '帝国晚期（3-5世纪）',
            '  → 通俗拉丁语与书面拉丁语分裂',
            '  → 476 AD 西罗马帝国灭亡',
          ]
        },
        context: '「帝国时代的拉丁语有两个层次。」珀西瓦尔写下两行，「书面拉丁语：教育阶层使用，刻意模仿黄金时代的标准，维持精确和优雅。通俗拉丁语（Latina vulgata）：日常口语，语法简化，词汇演变，方言化。」她在"476 AD"旁边停了一下，「476年，西罗马帝国灭亡，帝国的统一政治结构崩溃。没有政治统一，就没有语言统一的压力。各地区的通俗拉丁语开始独立演变——最终在几百年内分化为法语、西班牙语、葡萄牙语、意大利语、罗马尼亚语。」她转身，「这五种语言今天有近十亿使用者。它们全部从同一个拉丁语核心分裂而来。」'
      },
      {
        point: '通俗拉丁语到罗曼语的演变',
        blackboardQ: {
          type: 'formulas',
          label: '拉丁语的演变分支',
          lines: [
            '拉丁语 AQUA（水）',
            '  → 法语  eau',
            '  → 西班牙语  agua',
            '  → 意大利语  acqua',
            '  → 葡萄牙语  água',
            '  → 罗马尼亚语  apă',
          ]
        },
        question: {
          leadIn: '珀西瓦尔写下 AQUA 和它的五个后代，「同一个拉丁词，五种不同的演变结果。法语的 eau 看起来完全不像 aqua，但它是通过规律性音变得到的。」她指向西班牙语的 agua，「agua 保留得最接近拉丁语原形。意大利语 acqua 也很近。」她停顿，「这个表格说明了什么——拉丁语发生了什么？」',
          text: '「罗曼语族是从什么演变而来的？」',
          options: ['书面古典拉丁语', '通俗拉丁语（日常口语）', '希腊语'],
          answer: 1
        },
        contextRight: '「不错。」她停顿一秒，「通俗拉丁语，日常口语。书面古典拉丁语被刻意保持稳定，不演变——它成了教会和学术的语言。日常口语在各地自然演变，最终分化为罗曼语族的各种语言。」',
        contextWrong: '「通俗拉丁语。」她重复，不带感情，「罗曼语来自日常口语的自然演变，不是古典书面拉丁语。书面拉丁语被人为保持稳定。希腊语是另一支系，是东罗马帝国的语言，不是罗曼语族的来源。」',
        blackboard: {
          type: 'formulas',
          label: '演变路径确认',
          lines: [
            '[通俗拉丁语] → 法语 / 西班牙语 / 意大利语',
            '              葡萄牙语 / 罗马尼亚语',
            '',
            '书面拉丁语 → 保持稳定，成为教会学术语言',
            '',
            '分化时间：476 AD 后的5-8个世纪',
          ]
        }
      }
    ],
    lessonSummary: '罗马历史四个时期决定了拉丁语的演变轨迹：王政时期为早期拉丁语；共和国末至帝国初（约公元前1世纪至公元1世纪）为黄金时代，西塞罗、维吉尔等人确立标准；帝国晚期书面与口语分裂；476年后通俗拉丁语在各地独立演变，最终形成法语、西班牙语等罗曼语族。书面拉丁语则作为教会和学术语言延续至今。',
    nextLessonPreview: '「下节课：简化拉丁文阅读训练——把语法知识用于实际文本。」'
  },

  26: {
    atmosphere: '黑板上写着五行拉丁文，句子不长，字迹清晰。珀西瓦尔教授站在黑板旁，粉笔放在粉笔架上，没有拿，「今天不讲新语法。」她环顾教室，「只读。」',
    opening: '「语法规则是工具，工具是为了使用的。」珀西瓦尔站在黑板前，「一个只背语法表、从不读句子的人不懂拉丁语。今天我们读五个句子，用三步法拆解每一个句子。」她在黑板一侧写下三步，「第一步：找动词。动词是句子的核心，一切围绕它展开。第二步：解格——找主语（主格），找宾语（宾格），找其他成分的格关系。第三步：处理修饰——形容词、副词、从句。顺序不能颠倒。」',
    keyPoints: [
      {
        point: '三步阅读法与第一句分析',
        blackboardQ: {
          type: 'formulas',
          label: '阅读训练：第一句',
          lines: [
            'Magister bonus discipulos docet.',
            '',
            '三步分析：',
            '第一步（动词）：docet = 他/她教  第三人称单数',
            '第二步（格）  ：Magister（主格）discipulos（宾格）',
            '第三步（修饰）：bonus 修饰 Magister（主格阳性）',
          ]
        },
        question: {
          leadIn: '珀西瓦尔指向第一句，「Magister bonus discipulos docet。用三步法。」她先指向最后一个词，「第一步，找动词——docet，第三人称单数现在时，教。动词确认。」她转向句子其余部分，「第二步——Magister，主格单数，第二变位，是主语。discipulos，宾格复数，学生们，是动词 docet 的宾语。」她在 bonus 旁边停了一下，「bonus 是形容词，它修饰哪个名词？看格——bonus 主格阳性单数，和 Magister 一致。」她停顿，「这句话的主语是哪个词？」',
          text: '「Magister bonus discipulos docet 中主语是？」',
          options: ['bonus', 'magister', 'discipulos'],
          answer: 1
        },
        contextRight: '「不错。」她停顿一秒，「Magister，主格单数，是主语，教师。bonus 是形容词修饰语，discipulos 是宾格宾语。整句：好老师教学生们。三步法可以处理任意顺序——拉丁语语序自由，但格不会变。」',
        contextWrong: '「Magister。」她重复，不带感情，「Magister 是主格，是主语。bonus 是形容词，主格但不是主语名词。discipulos 是宾格，是宾语。格标志主语，不是位置。」',
        blackboard: {
          type: 'formulas',
          label: '第一句分析结果',
          lines: [
            '[Magister] bonus discipulos docet.',
            '',
            'Magister = 主语（主格）',
            'bonus    = 形容词（修饰 Magister）',
            'discipulos = 宾语（宾格）',
            'docet    = 动词（教）',
            '',
            '译：好老师教学生们。',
          ]
        }
      },
      {
        point: '第二、三句：形容词一致与关系从句',
        blackboard: {
          type: 'formulas',
          label: '第二、三句分析',
          lines: [
            'Discipuli diligentes libros legunt.',
            '  Discipuli（主格复数）= 主语',
            '  diligentes（形容词，与 Discipuli 一致）= 勤勉的',
            '  libros（宾格复数）= 宾语',
            '  legunt（他们读）= 动词',
            '  译：勤勉的学生们读书。',
            '',
            'Puella quae bene legit magistro placet.',
            '  quae = 关系代词（主格阴性单数）引导从句',
            '  placet + 与格(magistro) = 使…满意',
            '  译：读书好的女孩使老师满意。',
          ]
        },
        context: '「第二句。」珀西瓦尔指向黑板，「Discipuli diligentes libros legunt——勤勉的学生们读书。注意 diligentes：这是形容词的复数形式，和 Discipuli 的格、数、性一致——主格阳性复数。这是拉丁语形容词一致原则。形容词必须在格、数、性上与它修饰的名词匹配。」她移向第三句，「Puella quae bene legit magistro placet——读书好的女孩使老师满意。关系代词 quae 引导从句，quae 的格是主格阴性单数，和它所代替的 puella 一致。」她在 magistro 下面画了一条线，「magistro 是与格——placere 这个动词接与格，表示"对某人而言令人满意"，不是宾格。」'
      },
      {
        point: '第四、五句：代词与集合表达',
        blackboard: {
          type: 'formulas',
          label: '第四、五句分析',
          lines: [
            'Magister eam laudat.',
            '  eam = 代词宾格阴性单数（她）',
            '  laudat = 称赞',
            '  译：老师称赞她。',
            '',
            'Omnes felices sunt.',
            '  Omnes = 所有人（主格复数）',
            '  felices = 幸福的（形容词，与 Omnes 一致）',
            '  sunt = 是（第三人称复数 esse）',
            '  译：所有人都幸福。',
          ]
        },
        context: '珀西瓦尔在第四句下面写了代词分析，「Magister eam laudat——老师称赞她。eam 是代词 ea（她）的宾格形式，用于指代上句中的 puella。拉丁语使用代词替代名词以避免重复——和英语一样，但拉丁语代词有格变化。」她移向最后一句，「Omnes felices sunt——所有人都幸福。Omnes 是全称代词，主格复数。felices 是形容词 felix（幸福的）的复数形式，和 Omnes 一致。sunt 是 esse（是）的第三人称复数。」她退后一步，看着五句话，「这五句话构成一个完整的场景：好老师教学生，勤勉的学生读书，读书好的女孩使老师满意，老师称赞她，所有人都幸福。」'
      },
      {
        point: '三步阅读法回顾：实用要点',
        blackboardQ: {
          type: 'formulas',
          label: '三步阅读法总结',
          lines: [
            '第一步：找动词',
            '  → 确定人称和数，大致把握句意',
            '',
            '第二步：解格',
            '  → 主格 = 主语',
            '  → 宾格 = 宾语（直接目的）',
            '  → 与格 = 间接目的/受益者',
            '  → 所有格 = 所属关系',
            '',
            '第三步：处理修饰',
            '  → 形容词格数性与名词一致',
            '  → 关系代词引导从句',
          ]
        },
        question: {
          leadIn: '珀西瓦尔指着三步总结，「阅读任何拉丁文本，步骤不变：动词先行，格系统定结构，修饰最后处理。」她在黑板上写下一个新句子：Pueri in horto ludunt，「试用三步法——动词是？」她等了两秒，「ludunt，他们玩，第三人称复数。主格——pueri，男孩们。其余——in horto，在花园里，处所表达。修饰——无形容词。」她停顿，「再问一个关于阅读法的问题。第二步的主要任务是？」',
          text: '「三步阅读法的第二步主要任务是？」',
          options: ['找到所有形容词', '通过格关系确定主语和宾语', '理解动词时态'],
          answer: 1
        },
        contextRight: '「不错。」她停顿一秒，「第二步是解格——确定各名词和代词的格，从而判断它们在句子中的功能：主格是主语，宾格是宾语，与格是间接宾语。格是拉丁语句子结构的关键，不是语序。」',
        contextWrong: '「通过格关系确定主语和宾语。」她重复，不带感情，「形容词是第三步处理的修饰成分。动词时态是第一步找动词时就确认的信息。第二步专门用于解读格——格决定词在句子里的功能。」',
        blackboard: {
          type: 'formulas',
          label: '步骤功能确认',
          lines: [
            '第一步  →  动词（时态/人称/数）',
            '[第二步] →  格（主格=主语 宾格=宾语）',
            '第三步  →  形容词/副词/从句修饰',
            '',
            '顺序不可颠倒：动词 → 格 → 修饰',
          ]
        }
      }
    ],
    lessonSummary: '三步阅读法是处理拉丁文本的核心策略：第一步找动词确定句子核心，第二步解读格关系确定各成分功能（主格为主语、宾格为宾语、与格为间接宾语），第三步处理形容词一致性和从句修饰。今天通过五句示例文本实践了这套方法，涵盖形容词一致、关系从句、代词替换和集合表达。',
    nextLessonPreview: '「下节课：凯撒《高卢战记》。真实的古典拉丁文本，最简洁的风格之一。」'
  },

  27: {
    atmosphere: '黑板上只写了一行：Gallia est omnis divisa in partes tres。珀西瓦尔教授站在这行字的左端，粉笔夹在手指间，没有动。教室里有一本厚重的书摊在讲台上，封面是拉丁文字：C. IVLII CAESARIS DE BELLO GALLICO。',
    opening: '「公元前58年，凯撒开始撰写《高卢战记》，记录他在高卢地区的军事行动。」珀西瓦尔靠在讲台边，「他用第三人称写自己，用现在时描述过去——一种刻意的客观叙事策略。」她转向黑板，「这一行是全书第一句话。七个词，描述了一个地理事实，一个政治格局，一场战争的前提。」她指着这行字，「读它。」',
    keyPoints: [
      {
        point: 'Gallia est omnis divisa in partes tres——逐词分析',
        blackboardQ: {
          type: 'formulas',
          label: '《高卢战记》开篇句逐词分析',
          lines: [
            'Gallia    名词 主格阴性单数  高卢',
            'est       动词 第三人称单数  是',
            'omnis     形容词 主格单数    整个的',
            'divisa    完成被动分词 主格  被分割的',
            'in        介词 接宾格       进入/分成',
            'partes    名词 宾格阴性复数  部分',
            'tres      数词 宾格阴性     三（个）',
          ]
        },
        question: {
          leadIn: '珀西瓦尔逐词在黑板上标注词性和格，「注意 divisa——这是 dividere（分割）的完成被动分词，主格阴性单数，和 Gallia 一致。它告诉我们：高卢是被分割的状态，这个动作在过去已经完成。」她在 divisa 旁边写下原形 dividere，「完成被动分词：动作已经完成，主语是被动的接受者。」她停顿，「divisa 是什么形式？」',
          text: '「divisa 是什么形式？」',
          options: ['动词现在主动式', '完成被动分词', '现在分词'],
          answer: 1
        },
        contextRight: '「不错。」她停顿一秒，「完成被动分词——动作完成，主语被动接受。divisa 来自 dividere，分割。Gallia divisa est——高卢是被分割的状态，不是正在被分割，而是已经被分割。这个分词是句子真正的核心信息。」',
        contextWrong: '「完成被动分词。」她重复，不带感情，「现在分词表示正在进行，主动式是主语执行动作，两者都不对。divisa 表示已经完成的被动状态——高卢已被分为三部分，这是开战前的地理现实。」',
        blackboard: {
          type: 'formulas',
          label: '开篇句分析结果',
          lines: [
            'Gallia est omnis [divisa] in partes tres.',
            '',
            'divisa = 完成被动分词（dividere 的）',
            '  = 已被分割的（状态）',
            '',
            '译：高卢整体被分为三个部分。',
            '',
            '功能：交代战争背景，地理与政治格局',
          ]
        }
      },
      {
        point: '凯撒的写作风格',
        blackboard: {
          type: 'formulas',
          label: '凯撒风格特征',
          lines: [
            '1. 简洁：短句，少修辞，无感情色彩',
            '2. 第三人称：Caesar fecit（凯撒做了）',
            '   → 刻意客观，政治性写作策略',
            '3. 主动语态为主：动作直接清晰',
            '4. 军事词汇核心：',
            '   bellum（战争）  miles（士兵）',
            '   pons（桥）  castra（军营）  iter（行军路线）',
          ],
          audio: [
            { text: 'bellum', src: 'audio/latin/lesson-27/bellum.wav' },
            { text: 'pons', src: 'audio/latin/lesson-27/pons.wav' },
            { text: 'miles', src: 'audio/latin/lesson-27/miles.wav' },
          ]
        },
        context: '「凯撒的拉丁语是最接近口语精炼的书面风格之一。」珀西瓦尔写下风格特征，「他不用奥维德那样复杂的语序，不用西塞罗那样繁复的从句。一个动作，一个句子，一个标点。」她转向第三人称那行，「用第三人称写自己的行为——Caesar pontem fecit，凯撒建造了一座桥——这是一种政治修辞。他写的不是回忆录，而是发给罗马的战地报告，目的是让元老院和公众了解他的成就。第三人称制造了客观的幻觉。」她停顿，「你们注意到什么了吗？这种写作风格——」她在黑板旁站着，「和这间教室里某人的授课风格有相似之处。」她没有进一步说明，继续写下军事词汇。'
      },
      {
        point: '军事词汇精读',
        blackboard: {
          type: 'formulas',
          label: '凯撒军事词汇核心词',
          lines: [
            'bellum（战争）→ belligerent（好战的）',
            'miles（士兵）→ military（军事的）',
            'pons（桥）   → pontoon（浮桥）pont-（词根）',
            'castra（军营）→ -caster/-chester 地名',
            'iter（行军路线）→ itinerary（行程）',
            '',
            '凯撒建桥：Caesar pontem in Rheno fecit.',
            '  （凯撒在莱茵河上建造了一座桥。）',
          ],
          audio: [
            { text: 'bellum', src: 'audio/latin/lesson-27/bellum.wav' },
            { text: 'miles', src: 'audio/latin/lesson-27/miles.wav' },
            { text: 'pons', src: 'audio/latin/lesson-27/pons.wav' },
          ]
        },
        context: '「bellum——战争。来自这个词的英语派生词：belligerent，好战的，字面意思是"进行战争的"；ante bellum，战前的，美国用来指南北战争前的时代。」珀西瓦尔在词旁边标注，「miles——士兵，词根是 milit-，military，militant，militia。pons——桥，第三变位名词，宾格是 pontem。pons 的词根 pont- 出现在 pontoon 浮桥里，也出现在地名中——Pontefract，在英格兰，意思是"断桥"。」她在 castra 下面划线，「castra 是军营，复数形式。上节课提到过它：Lancaster、Chester、Doncaster——词尾 -caster/-chester 都是 castra 的遗迹，这些地方曾经是罗马军营。」'
      },
      {
        point: '凯撒式句子练习',
        blackboardQ: {
          type: 'formulas',
          label: '凯撒风格句子分析',
          lines: [
            'Caesar milites trans pontem duxit.',
            '',
            'Caesar   主格  凯撒（主语）',
            'milites  宾格  士兵们（宾语）',
            'trans    介词  穿越（接宾格）',
            'pontem   宾格  桥（trans 的宾语）',
            'duxit    动词  领导/率领（第三人称单数完成时）',
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写下这个新句子，「Caesar milites trans pontem duxit。用三步法：第一步，动词——duxit，duco 的完成时第三人称单数，他率领了。第二步，格——Caesar 主格，主语；milites 宾格，宾语。第三步，trans pontem——介词短语，穿越桥。」她停顿，「凯撒的句子就是这样：主语、宾语、动词，中间是介词短语。没有多余的词。」她在黑板上圈出句子结构，「duxit 是什么时态？」',
          text: '「duxit 是哪种时态？」',
          options: ['未完成过去时', '完成时', '现在时'],
          answer: 1
        },
        contextRight: '「不错。」她停顿一秒，「完成时——duco 的完成时词干是 dux-，加第三人称单数完成词尾 -it，得到 duxit。凯撒记录的是已经发生的军事行动，所以用完成时报告事实。」',
        contextWrong: '「完成时。」她重复，不带感情，「未完成时词干加 -ba-，现在时用原词干加人称词尾。duxit 是 duco 的完成词干 dux- 加 -it，是完成时。凯撒用完成时报告已完成的军事行动。」',
        blackboard: {
          type: 'formulas',
          label: 'duxit 时态确认',
          lines: [
            'duco（我领导）→ 完成词干 dux-',
            '[duxit] = 完成时第三人称单数',
            '        = he/she led（他率领了）',
            '',
            '凯撒报告体：完成时 + 第三人称',
            '→ 客观记录已发生的军事行动',
          ]
        }
      }
    ],
    lessonSummary: '《高卢战记》开篇"Gallia est omnis divisa in partes tres"包含七个词，涵盖完成被动分词（divisa）、介词短语（in partes）和数词（tres）。凯撒写作风格特征：简洁短句、第三人称自述、主动语态为主，军事词汇是其核心词库。bellum、miles、pons、castra 等词至今在英语和地名中留有痕迹。',
    nextLessonPreview: '「下节课：奥维德《变形记》。和凯撒完全相反的风格——繁复、诗意、变形。」'
  },

  28: {
    atmosphere: '黑板上写着两行斜体字：In nova fert animus mutatas dicere formas / corpora。珀西瓦尔教授站在离这两行字稍远的地方，没有立即开口，让这两行字在黑板上停留了片刻。教室里的蜡烛光比平时偏暖。',
    opening: '「上节课：凯撒，七个词，一个地理事实。」珀西瓦尔开口，「今天：奥维德，两行诗，十个词，语序自由到几乎混乱——在表面上。」她走向黑板，「奥维德，公元前43年至公元17年，《变形记》共十五卷，收录超过两百五十个变形故事，从宇宙创世写到凯撒变成星星。」她在书名旁边写下 Metamorphoses，「meta——之后，超越；morphe——形态。变形记，字面意思：形态的转变。」她转身，「这是西方文学中影响最深远的诗集之一，也是理解西方魔法传统的关键文本之一。」',
    keyPoints: [
      {
        point: '开篇两行：语序分析',
        blackboardQ: {
          type: 'formulas',
          label: '《变形记》开篇逐词分析',
          lines: [
            'In nova fert animus mutatas dicere formas',
            'corpora',
            '',
            '重组为散文语序：',
            'Animus fert dicere formas mutatas',
            'in nova corpora.',
            '',
            '译：我的心灵驱使我讲述',
            '    那些变为新形态的躯体的故事。',
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上把原始诗行和重组的散文语序并排列出，「诗歌允许语序自由，因为格系统保证了语义清晰。animus——心灵/灵魂，主格，主语。fert——携带、驱动，第三人称单数。dicere——说、讲述，不定式，是 fert 的宾语。formas——形式、形态，宾格复数，是 dicere 的宾语。mutatas——已被改变的，完成被动分词，修饰 formas。nova corpora——新的躯体，in 接宾格表示目标。」她停顿，「《变形记》的核心主题是？」',
          text: '「《变形记》的核心主题是什么？」',
          options: ['战争与英雄', '变形与身份', '爱情与死亡'],
          answer: 1
        },
        contextRight: '「不错。」她停顿一秒，「变形与身份——形态改变之后，那个存在还是原来的它吗？这是整部《变形记》两百五十个故事的核心问题。奥维德通过神话回答了一个哲学问题：身份与形态的关系。」',
        contextWrong: '「变形与身份。」她重复，不带感情，「战争主题属于维吉尔的《埃涅阿斯纪》，爱情死亡是奥维德其他作品的主题。《变形记》的核心是变形——形态改变，身份是否随之改变。」',
        blackboard: {
          type: 'formulas',
          label: '核心主题确认',
          lines: [
            '《变形记》核心：[变形与身份]',
            '',
            '形态改变：石头→人，人→花，人→星',
            '身份问题：变形后，那个存在还是它吗？',
            '',
            '奥维德的答案：身份通过变形延续，不消失',
          ]
        }
      },
      {
        point: '奥维德风格：诗歌拉丁语特点',
        blackboard: {
          type: 'formulas',
          label: '奥维德风格 vs 凯撒风格',
          lines: [
            '凯撒：',
            '  语序固定  短句  无修辞  客观',
            '  → 报告体，政治目的',
            '',
            '奥维德：',
            '  语序自由  长句  修辞浓密  情感丰富',
            '  → 诗歌体，娱乐与哲学并重',
            '',
            '共同点：格系统保证语义清晰',
          ]
        },
        context: '「同一种语言，两种极端风格。」珀西瓦尔在黑板上并排列出两列，「凯撒用拉丁语做报告，语序固定，词汇精简，没有多余的感情色彩。奥维德用拉丁语写诗，语序倒置，修饰词层叠，每个词都经过美学考量。」她指向共同点那行，「但两者都依赖格系统。格决定功能，不是位置。奥维德可以把形容词放在它修饰的名词五个词之外，读者依然能知道它们配对，因为格一致。」她停顿，「这是拉丁语能够支撑两种极端风格的原因——格系统是个灵活的骨架。」'
      },
      {
        point: '变形术联动：Transfiguration 的词根',
        blackboard: {
          type: 'formulas',
          label: 'Transfiguration 词源与《变形记》联动',
          lines: [
            'Transfiguration',
            '  ← trans-（穿越、变为另一侧）',
            '  ← figura（形态、外形）',
            '  = 形态的穿越/变化',
            '',
            'Metamorphoses',
            '  ← meta-（超越、之后）',
            '  ← morphe（形态）',
            '  = 形态的超越/转变',
            '',
            '两个词，相同语义：形态改变',
          ]
        },
        context: '珀西瓦尔在黑板上写下两个词并排，「Transfiguration——霍格沃茨的变形术课程名。Trans，穿越；figura，形态；-tion，行为名词后缀。变形术是将一个物体的形态改变为另一种形态。」她在 Metamorphoses 旁边标注词源，「奥维德书名：meta，超越；morphe，形态。两者描述的是同一件事——形态的改变，只是一个用拉丁语构词，一个用希腊语构词。」她停顿，「麦格教授教的课程，从词根上看，和奥维德写的故事是同一个主题。这不是巧合。巫师教育体系在命名课程时参考了古典文学传统。」'
      },
      {
        point: '《变形记》故事举例与语言分析',
        blackboardQ: {
          type: 'formulas',
          label: '变形故事语言举例',
          lines: [
            'Daphne in laurum mutata est.',
            '  Daphne（主格）= 达芙妮',
            '  in laurum（宾格）= 变成月桂树',
            '  mutata est = 完成被动（被变形了）',
            '',
            'Narcissus in florem versus est.',
            '  versus est = 被转变了（完成被动）',
            '  in florem = 变成花',
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写出两个变形句，「这两个句子是奥维德变形记故事的简化版。注意动词形式：mutata est 和 versus est——两者都是完成被动态。主语是被变形的对象，变形这个动作是被执行的，通常由神明执行。」她圈出 mutata est，「这里 mutata 是 mutare（改变）的完成被动分词，est 是 esse 的第三人称单数，构成完成被动态。」她停顿，「这两句话的动词形式都是？」',
          text: '「Daphne in laurum mutata est 中 mutata est 是什么结构？」',
          options: ['现在主动时', '完成被动时', '未完成过去时'],
          answer: 1
        },
        contextRight: '「不错。」她停顿一秒，「完成被动时——完成被动分词加上 esse 的第三人称单数。主语达芙妮被变形了，变形动作已经完成，主语是被动接受者。奥维德的变形故事几乎都使用这个结构：变形是神施加在人身上的事，人是被动的。」',
        contextWrong: '「完成被动时。」她重复，不带感情，「现在主动时表示主语正在执行动作，未完成过去时表示持续的过去状态。mutata est 是完成被动分词 mutata 加 est，表示变形已完成且主语被动。」',
        blackboard: {
          type: 'formulas',
          label: '完成被动时结构',
          lines: [
            '[完成被动时] = 完成被动分词 + esse（是）',
            '',
            'mutata est = 她被变形了（完成）',
            'versus est = 他被转变了（完成）',
            '',
            '语义：动作完成 + 主语被动',
            '适合变形叙事：人被神改变形态',
          ]
        }
      }
    ],
    lessonSummary: '奥维德《变形记》共十五卷，开篇两行展示了诗歌拉丁语语序自由的特点——格系统使语义清晰，不依赖固定位置。奥维德风格与凯撒截然相反：诗意、繁复、情感丰富。变形与身份是全书核心主题，与霍格沃茨变形术（Transfiguration）课程从词根上同源。变形故事多使用完成被动时，体现"神对人施加变形"的叙事逻辑。',
    nextLessonPreview: '「下节课：格言、铭文与箴言——拉丁语最精炼的形式。」'
  },

  29: {
    atmosphere: '黑板上提前写着五条格言，整齐排成一列，旁边还有一行斜体：Draco Dormiens Nunquam Titillandus。珀西瓦尔教授站在黑板侧面，手里拿着粉笔，但没有立即在黑板上添加任何东西，「今天背诵的内容不多，但每一条都要理解，不是记住。」',
    opening: '「格言是压缩的哲学。」珀西瓦尔开口，「拉丁语的格系统和形态变化允许极度压缩——用最少的词传达最完整的意思。」她指向黑板，「今天的五条格言，加上你们学校的校训。每一条背后都有语法和历史。先读，再分析。」',
    keyPoints: [
      {
        point: 'Carpe diem 与 Veni vidi vici',
        blackboardQ: {
          type: 'formulas',
          label: '格言精选（一）',
          lines: [
            'Carpe diem',
            '  carpe = 摘取（命令式）  diem = 日（宾格）',
            '  译：抓住今天  把握时机',
            '  出处：贺拉斯《颂诗》',
            '',
            'Veni vidi vici',
            '  veni = 我来了  vidi = 我看见了  vici = 我征服了',
            '  三词均为完成时第一人称单数',
            '  出处：凯撒致元老院，公元前47年',
          ],
          audio: [
            { text: 'carpe diem', src: 'audio/latin/lesson-29/carpe-diem.wav' },
            { text: 'veni vidi vici', src: 'audio/latin/lesson-29/veni-vidi-vici.wav' },
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上圈出 carpe，「carpe 是动词 carpere（摘取、抓住）的命令式——命令某人执行动作。Carpe diem 是对听者发出的命令：抓住这一天。」她移向 vici，「Veni vidi vici——三个动词，三个完成时。veni 来自 venire（来），vidi 来自 videre（看见），vici 来自 vincere（征服）。凯撒用完成时报告已经发生的三件事，顺序就是时间顺序。」她停顿，「Veni vidi vici 中三个动词的时态是？」',
          text: '「Veni vidi vici 中三个词的时态是？」',
          options: ['现在时', '完成时', '未完成过去时'],
          answer: 1
        },
        contextRight: '「不错。」她停顿一秒，「完成时，第一人称单数。三件事已经发生，已经完成。凯撒用完成时向元老院宣告：我来了，我看见了，我征服了。简洁到极致，和他的文风完全一致。」',
        contextWrong: '「完成时。」她重复，不带感情，「三个词都是完成时第一人称单数。venio→veni，video→vidi，vinco→vici。现在时表示正在发生，未完成过去时表示持续状态，都不符合这里的语义。」',
        blackboard: {
          type: 'formulas',
          label: '格言时态确认',
          lines: [
            'Carpe diem：命令式（抓住）+ 宾格（今天）',
            '',
            '[Veni vidi vici：完成时×3]',
            '  veni（venio）  vidi（video）  vici（vinco）',
            '  我来了        我看见了       我征服了',
            '',
            '凯撒风格：三词，三事，无多余',
          ],
          audio: [
            { text: 'veni vidi vici', src: 'audio/latin/lesson-29/veni-vidi-vici.wav' },
          ]
        }
      },
      {
        point: 'Alea iacta est 与 SPQR',
        blackboard: {
          type: 'formulas',
          label: '格言精选（二）',
          lines: [
            'Alea iacta est',
            '  alea = 骰子（主格）',
            '  iacta est = 完成被动（已被投出）',
            '  译：骰子已经投下了——决心已定',
            '  出处：凯撒渡过卢比孔河，公元前49年',
            '',
            'SPQR = Senatus PopulusQue Romanus',
            '  -que = 附着连词（and）附在第二词末',
            '  译：元老院与罗马人民',
          ]
        },
        context: '「Alea iacta est——骰子已经投下了。」珀西瓦尔写下这句话，「公元前49年，凯撒率军渡过卢比孔河——这条河是意大利本土的法律界线，越过它带兵就是叛乱。他说了这句话，然后过河。骰子是赌博的意象：一旦投出，结果由命运决定，人不能收回。」她在 iacta est 旁边标注，「完成被动时——骰子已被投出，动作已完成，无法撤销。时态选择本身就是语义的一部分。」她移向 SPQR，「这个缩写出现在罗马的所有官方场合。-que 是古拉丁语的附着连词，只有在诗歌和正式文体里才用。普通口语用 et——和英语的 and。」她在 -que 旁边标注，「PopulusQue 的意思是 et Populus，而且这个人民。附着连词接在第二个词末尾——记住这个规则。」'
      },
      {
        point: '霍格沃茨校训解析',
        blackboard: {
          type: 'formulas',
          label: '校训逐词分析',
          lines: [
            'Draco Dormiens Nunquam Titillandus',
            '',
            'Draco      名词 主格阳性单数  龙',
            'Dormiens   现在分词 主格单数   正在睡觉的',
            'Nunquam    副词               永远不',
            'Titillandus 动形容词 主格单数  应当被搔弄的',
            '',
            '译：永远不要搔弄沉睡的龙。',
          ]
        },
        context: '珀西瓦尔在黑板上逐词标注，「Draco——第三变位名词，主格单数，龙，也是星座名。Dormiens——现在主动分词，来自 dormire（睡觉），表示正在睡觉的，修饰 Draco，格一致。」她在 Titillandus 旁边停了一下，「Titillandus——这是动形容词，来自 titillare（搔弄、刺激）。动形容词在拉丁语里表示"应当被……的"，类似英语的 must be done。Titillandus 主格单数阳性，与 Draco 一致，表示：龙是不应当被搔弄的对象。」她退后一步，「整句：正在睡觉的龙永远不应被搔弄。这是一个实用性建议，而不是道德训诫。」'
      },
      {
        point: '校训格分析：Draco 的格',
        blackboardQ: {
          type: 'formulas',
          label: '校训语法分析（详细）',
          lines: [
            'Draco Dormiens Nunquam Titillandus',
            '',
            'Draco = 主格（句子主语）',
            'Dormiens = 现在分词（修饰 Draco，主格一致）',
            'Titillandus = 动形容词（主格，修饰 Draco）',
            '',
            '整体结构：',
            '  主语（Draco）+ 谓语性形容词（Titillandus）',
            '  + 副词修饰（Nunquam）',
          ]
        },
        question: {
          leadIn: '珀西瓦尔指着校训，「Draco Dormiens Nunquam Titillandus——完整句子。Draco 是主语，Titillandus 是谓语性动形容词，表示"应当被……的"。二者之间存在谓语关系：Draco（是）不应该被搔弄的（Titillandus）。」她在 Draco 旁边标注格，「Draco 在这个句子里承担主语功能，因此是？」',
          text: '「校训中 Draco 是什么格？」',
          options: ['主格', '宾格', '与格'],
          answer: 0
        },
        contextRight: '「不错。」她停顿一秒，「主格，主语。Draco 是句子谈论的主体，Titillandus 是对它的描述——它不应该被搔弄。主格承担主语功能，宾格承担宾语功能，与格承担间接宾语功能。三者功能截然不同。」',
        contextWrong: '「主格。」她重复，不带感情，「Draco 是句子的主体，主格单数。宾格会是 Draconem，与格会是 Draconi——格变化改变词尾。Draco 词尾不变，是主格。」',
        blackboard: {
          type: 'formulas',
          label: 'Draco 格确认',
          lines: [
            '[Draco] = 主格单数（第三变位）',
            '  宾格：Draconem',
            '  与格：Draconi',
            '  所有格：Draconis',
            '',
            '主格 = 句子主语 = "龙"（被谈论的主体）',
          ]
        }
      }
    ],
    lessonSummary: '今天学习了五条拉丁格言：Carpe diem（命令式+宾格），Veni vidi vici（三个完成时），Alea iacta est（完成被动时，强调不可撤销），SPQR（含附着连词 -que）。霍格沃茨校训逐词分析显示：Draco 为主格主语，Dormiens 为现在分词修饰语，Titillandus 为动形容词（应当被搔弄的），Nunquam 为副词。格言是拉丁语压缩能力的极致体现。',
    nextLessonPreview: '「下节课：中世纪拉丁语——500年至1500年，教会与学术如何使用并改变了拉丁语。」'
  },

  30: {
    atmosphere: '黑板上画着一条时间轴，标注着 476AD 和 1500AD，中间写着 Latinitas Mediaevalis。珀西瓦尔教授站在时间轴旁边，把第25课的时期图和今天的内容并排在脑海里对照，「476年之后，拉丁语没有死亡——它活了下来，只是换了一种方式。」',
    opening: '「西罗马帝国476年灭亡，政治统一消失了。」珀西瓦尔在黑板上指向时间轴，「但有一个机构保留了拉丁语：教会。」她拿起粉笔，「教会拉丁语是中世纪欧洲最重要的书面语言。神职人员、学者、法律文书、外交通信——全部用拉丁语。」她停顿，「但这个拉丁语和凯撒、西塞罗、奥维德用的不完全一样。今天讲区别。」',
    keyPoints: [
      {
        point: '中世纪拉丁语三大变化',
        blackboardQ: {
          type: 'formulas',
          label: '古典 vs 中世纪拉丁语对比',
          lines: [
            '         古典拉丁语        中世纪拉丁语',
            '发音  c始终[k]          c在e/i前→[tʃ]',
            '词汇  纯拉丁词           大量借词/新造词',
            '格系  完整六格           部分简化',
            '',
            '示例：Cicero',
            '  古典发音：[ˈkikero]（基凯罗）',
            '  中世纪发音：[ˈtʃitʃero]（奇奇罗）',
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写下对比表，「发音变化是中世纪拉丁语最显著的特征之一。古典拉丁语中，字母 c 始终发 [k]——Cicero 古典发音是基凯罗，Caesar 是凯撒。」她在发音变化那行划线，「中世纪拉丁语受到周边罗曼语的影响，c 在 e 和 i 前面变成了 [tʃ]——类似意大利语和英语单词 church 里的 ch。这种发音一直延续到教会拉丁语的现代使用。」她停顿，「中世纪教会拉丁语中，c 在 e/i 前面发什么音？」',
          text: '「中世纪教会拉丁语 c 在 e/i 前面发什么音？」',
          options: ['[k]', '[tʃ]', '[s]'],
          answer: 1
        },
        contextRight: '「不错。」她停顿一秒，「[tʃ]，类似英语 church 里的 ch。这是意大利语的影响——意大利是教会的核心地区，意大利语的 c 在 e/i 前也发 [tʃ]。今天梵蒂冈教会仪式用的拉丁语还是这个发音。」',
        contextWrong: '「[tʃ]。」她重复，不带感情，「古典拉丁语 c 始终是 [k]，中世纪教会拉丁语 c 在 e/i 前变为 [tʃ]，[s] 是法语的影响，不是教会标准发音。三种发音对应三个不同传统，不能混淆。」',
        blackboard: {
          type: 'formulas',
          label: '发音变化确认',
          lines: [
            '古典：c → 始终 [k]',
            '  Cicero = [ˈkikero]',
            '  Caesar = [ˈkaisar]',
            '',
            '[中世纪]：c 在 e/i 前 → [tʃ]',
            '  Cicero = [ˈtʃitʃero]',
            '  caelum = [ˈtʃelum]',
            '',
            '今天梵蒂冈教会仪式沿用中世纪发音',
          ]
        }
      },
      {
        point: '教会拉丁语：Missa、Pater Noster、Vulgata',
        blackboard: {
          type: 'formulas',
          label: '教会拉丁语核心词汇',
          lines: [
            'Missa（弥撒）',
            '  ← mittere（送走）完成被动分词形式',
            '  礼拜结束时："你们被打发走了"',
            '',
            'Pater Noster（天父）',
            '  pater = 父亲  noster = 我们的',
            '  Lord\'s Prayer 开篇',
            '',
            'Vulgata（拉丁文圣经）',
            '  ← vulgaris（通俗的，属于民众的）',
            '  4世纪哲罗姆翻译  至今天主教使用',
          ]
        },
        context: '「教会拉丁语三个核心词。」珀西瓦尔依次写在黑板上，「Missa——弥撒，现代英语 mass 就来自这里。词源是 mittere，送走，完成被动分词形式 missa 表示"已被打发的"。礼拜结束时神父说"Ite, missa est"——走吧，聚会已经结束了。这句话里藏着整个礼拜的意义：你们被祝福后被送回世界。」她移向 Pater Noster，「天主经开篇：Pater Noster, qui es in caelis——我们在天上的父。pater 我们学过，noster 是形容词"我们的"，所有格。」她停顿，「Vulgata——通俗圣经。4世纪学者哲罗姆翻译，目的是让普通信众能读懂，用的是当时的日常拉丁语，而非高度精炼的古典风格。vulg- 词根表示民众、通俗——vulgar 在古拉丁语里不含负面意思，只是"属于大众的"。」'
      },
      {
        point: '学术拉丁语与霍格沃茨年代',
        blackboard: {
          type: 'formulas',
          label: '中世纪学术拉丁语与霍格沃茨',
          lines: [
            '中世纪大学使用拉丁语教学：',
            '  disputatio（辩论）  lectio（讲读）',
            '  quaestio（问题）   summa（全书）',
            '',
            '霍格沃茨约993 AD建立',
            '  → 中世纪盛期，教会拉丁语全盛时代',
            '  → 咒语使用中世纪教会拉丁发音',
            '  → Lumos = [ˈluːmos]（不是古典[ˈluːmos]）',
            '  发音传统延续至今',
          ]
        },
        context: '珀西瓦尔在时间轴上标注了 993AD，「霍格沃茨建立时，正值中世纪盛期——993年，距离查理曼大帝过世约一百八十年，距离黑死病爆发约三百五十年。这个时代的欧洲，拉丁语是教育、教会和法律的通用书面语言。」她在咒语发音那行停顿，「这意味着霍格沃茨的创始人们使用的是中世纪教会拉丁语发音——不是凯撒时代的古典发音。咒语被创造出来时使用的是中世纪发音规范，这个传统被保留下来，代代传授。」她放下粉笔，「所以当你们说 Lumos，你们说的不是古罗马的拉丁语——你们说的是中世纪巫师社区的拉丁语。」'
      },
      {
        point: '霍格沃茨建立时代的拉丁语阶段',
        blackboardQ: {
          type: 'formulas',
          label: '拉丁语发展阶段回顾',
          lines: [
            '古典拉丁语    公元前1世纪–公元1世纪',
            '  → 西塞罗 凯撒 维吉尔',
            '',
            '中世纪拉丁语  500–1500 AD',
            '  → 教会 学术 外交',
            '  → 993 AD：霍格沃茨建立 ←',
            '',
            '通俗拉丁语    日常口语，已分化为罗曼语',
          ]
        },
        question: {
          leadIn: '珀西瓦尔指着时间轴，「我们学过三个拉丁语阶段：古典，中世纪，通俗。古典是黄金时代的书面精炼拉丁语；通俗是日常口语，最终演变为罗曼语族；中世纪是教会和学术使用的书面语言，持续至文艺复兴。」她在 993AD 旁边画了一个箭头，「霍格沃茨建立在993年，这个时间点落在哪个拉丁语阶段里？」',
          text: '「霍格沃茨建立时代，拉丁语处于哪个阶段？」',
          options: ['古典拉丁语', '中世纪拉丁语', '通俗拉丁语'],
          answer: 1
        },
        contextRight: '「不错。」她停顿一秒，「中世纪拉丁语，500年至1500年。993年在这个范围内。这一时期教会拉丁语是欧洲书面语的核心，霍格沃茨的创始人们使用和传授的正是这种形式的拉丁语。」',
        contextWrong: '「中世纪拉丁语。」她重复，不带感情，「古典拉丁语集中在公元前后两个世纪，993年已是中世纪盛期。通俗拉丁语是口语演变的方向，不是书面或咒语传统使用的形式。993年对应中世纪拉丁语阶段，没有其他可能。」',
        blackboard: {
          type: 'formulas',
          label: '阶段确认',
          lines: [
            '993 AD = [中世纪拉丁语] 阶段',
            '',
            '古典：476 AD 之前的书面标准',
            '中世纪：476–1500 AD 教会学术传统',
            '  → 霍格沃茨在此范围内建立',
            '通俗：日常口语演变，非书面传统',
            '',
            '结论：魔法咒语基于中世纪教会拉丁语',
          ]
        }
      }
    ],
    lessonSummary: '中世纪拉丁语（500-1500AD）在西罗马帝国灭亡后由教会延续，是欧洲中世纪书面语的核心。与古典拉丁语的主要差异：发音（c在e/i前由[k]变为[tʃ]）、词汇（借词和新造词增多）、格系统（部分简化）。Missa、Pater Noster、Vulgata是教会拉丁语的核心词汇。霍格沃茨约993AD建立，正处于中世纪拉丁语全盛时期，因此咒语传统使用的是中世纪教会拉丁语发音，而非古典发音。',
    nextLessonPreview: '「下一阶段：文艺复兴拉丁语，以及现代世界中拉丁语的遗存。」'
  },

  31: {
    atmosphere: '黑板中央写着两列词：左列 amo / amas / amat，右列空着，只画了三条横线等待填写。珀西瓦尔教授站在两列之间，粉笔夹在指间，没有动。教室里的蜡烛光稳定，窗外是四年级春末的灰白天光。',
    opening: '「你们已经学了直陈语气——陈述真实发生的事情。」珀西瓦尔转身在右列写下 amem / ames / amet，「这是虚拟语气。同一个动词，不同的语气。直陈语气说：这件事发生了。虚拟语气说：这件事可能发生，或者我希望它发生，或者它是某个目的的一部分。」她在 amo 和 amem 之间画了一条竖线，「区别在词尾。第一变位动词的现在虚拟式——a 变成 e。记住这个变化。」她放下粉笔，「开始。」',
    keyPoints: [
      {
        point: '现在虚拟式：第一变位 a→e',
        blackboardQ: {
          type: 'formulas',
          label: '直陈 vs 现在虚拟（amare）',
          lines: [
            '直陈语气          现在虚拟式',
            '-----------      -----------',
            'am-o             am-e-m',
            'am-a-s           am-e-s',
            'am-a-t           am-e-t',
            'am-a-mus         am-e-mus',
            'am-a-tis         am-e-tis',
            'am-a-nt          am-e-nt',
            '',
            '规律：词干元音 a → e'
          ],
          audio: [
            { text: 'amem', src: 'audio/latin/lesson-31/verb-amem.wav' },
            { text: 'ames', src: 'audio/latin/lesson-31/verb-ames.wav' },
            { text: 'amet', src: 'audio/latin/lesson-31/verb-amet.wav' },
          ]
        },
        question: {
          leadIn: '「对比黑板上的两列。」珀西瓦尔在左列的每个 a 下面画了圆圈，「直陈语气：am-a-s，am-a-t——词干元音是 a。现在虚拟式：am-e-s，am-e-t——那个 a 变成了什么？」她停顿，「第一变位动词，现在虚拟式的标志就是这一个字母的变化。找到它。」',
          text: '「第一变位动词现在虚拟式的标志是？」',
          options: ['-ba- 时态标志', '词干元音 a → e 变化', '词尾加 -nt'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「a 变成 e——这就是第一变位现在虚拟式的唯一信号。amem，ames，amet：每一个都有这个 e 取代了直陈的 a。这个 e 告诉你：不是直陈，是虚拟。」',
        contextWrong: '「词干元音 a 变成 e。」她重复，不带感情，「-ba- 是未完成时的标志，词尾 -nt 只是第三人称复数。区分开来。第一变位现在虚拟式：am-e-m，am-e-s，am-e-t。中间那个 e 是关键。」',
        blackboard: {
          type: 'formulas',
          label: '现在虚拟式标志（第一变位）',
          lines: [
            '规律：词干元音 a → [e]',
            '',
            'am-[e]-m     am-[e]-mus',
            'am-[e]-s     am-[e]-tis',
            'am-[e]-t     am-[e]-nt',
            '',
            '中间的 [e] = 虚拟语气信号'
          ],
          audio: [
            { text: 'amem', src: 'audio/latin/lesson-31/verb-amem.wav' },
            { text: 'ames', src: 'audio/latin/lesson-31/verb-ames.wav' },
            { text: 'amet', src: 'audio/latin/lesson-31/verb-amet.wav' },
          ]
        }
      },
      {
        point: '未完成虚拟式：不定式词干 + 人称词尾',
        blackboard: {
          type: 'formulas',
          label: '未完成虚拟式（amare）',
          lines: [
            '构成：不定式词干（amare-）+ 人称词尾',
            '',
            'amare-m      amare-mus',
            'amare-s      amare-tis',
            'amare-t      amare-nt',
            '',
            '识别技巧：看见 -are-/-ere- 中间嵌在动词里',
            '→ 就是未完成虚拟式'
          ]
        },
        context: '「未完成虚拟式的构成方法不一样。」珀西瓦尔在黑板上写下 amare，然后在后面逐个加上人称词尾：amarem，amares，amaret，amaremus，amaretis，amarent。「方法很简单：拿不定式的全形——amare——直接加人称词尾。不定式词干是 amare-，词尾是普通的主动人称词尾。」她停顿，「amarem——第一人称单数，我会爱。amaret——第三人称单数，他会爱。注意：这个形式在时态序列里表示从句的时态和主句时态对应的关系，主句用现在时，从句用现在虚拟；主句用过去时，从句通常用未完成虚拟。这是时态序列的基础，下节课专门处理。今天先记住形式。」'
      },
      {
        point: '目的从句：ut + 虚拟语气',
        blackboard: {
          type: 'formulas',
          label: '目的从句结构',
          lines: [
            'Venio  ut  legam.',
            '我来   为了  我读（书）',
            '',
            '结构：主句 + ut + 现在虚拟式',
            '',
            'Venit  ut  videret.',
            '他来   为了  他看（到）',
            '',
            '结构：主句（过去）+ ut + 未完成虚拟式'
          ]
        },
        context: '「虚拟语气最常见的用途之一是目的从句。」珀西瓦尔在黑板上写下 Venio ut legam，「我来——为了读书。ut 引导目的从句，从句动词用虚拟语气，不用直陈。」她转身，「为什么要用虚拟而不用直陈？因为目的是一种意图，是尚未实现的状态。直陈语气陈述事实；虚拟语气表达可能性、意图、愿望。读书这件事，在我出发去的时候还没发生——它是我的目标，不是已知的事实。」她停一下，「时态对应：主句现在时，目的从句用现在虚拟（ut legam）；主句过去时，目的从句用未完成虚拟（ut videret）。这个对应规律叫时态序列。」'
      },
      {
        point: '语言是最古老的魔法：虚拟式与魔法意图',
        blackboard: {
          type: 'formulas',
          label: '虚拟式的核心含义',
          lines: [
            '直陈语气 → 陈述事实',
            '  amo = 我爱（这是真的）',
            '',
            '虚拟语气 → 意图 / 可能 / 愿望',
            '  amem = 我会爱 / 我希望我爱',
            '',
            '目的从句：ut + 虚拟',
            '条件从句：si + 虚拟',
            '间接命令：命令动词 + ut + 虚拟'
          ]
        },
        context: '珀西瓦尔在黑板旁靠着，平静地说：「语言是最古老的魔法，巫师只是把它说得更大声一点。」她停顿，「虚拟语气在拉丁语里的地位，有点像魔法意图在巫术里的地位。直陈语气描述已经发生的现实——这是现实层面。虚拟语气描述意图、可能、愿望——这是意图层面。施法之前，意图要先于行动存在。ut legam——为了读书——这个读书是意图，不是事实。它用虚拟语气，因为它还只在意志里，还没有进入现实。」她走回讲台，「虚拟式的三大用途：目的从句，条件句，间接命令。今天学了目的从句，后两种下节课详细处理。」'
      }
    ],
    lessonSummary: '今天学了虚拟语气的基础：第一变位现在虚拟式的标志是词干元音 a 变成 e，六个变位都有这个 e；未完成虚拟式用不定式词干加人称词尾构成。虚拟语气的核心含义是意图、可能、愿望，区别于直陈语气的事实陈述。目的从句用 ut 加虚拟语气，主句现在时对应现在虚拟，主句过去时对应未完成虚拟。',
    nextLessonPreview: '「下节课：条件句三类。真实条件、不大可能条件、反事实条件——三种情形，三种时态组合，意思截然不同。」'
  },

  32: {
    atmosphere: '黑板分成三栏，每栏顶部写着：第一类、第二类、第三类，下面各画了两行横线。珀西瓦尔教授站在黑板正中，粉笔在手里，教室里的晨光从西侧高窗斜入，把她的影子投向右边。',
    opening: '「拉丁语的条件句有三种，按照可能性的高低排列。」珀西瓦尔在第一栏写下 Si venis, gaudebo，「如果你来，我将高兴。」她停顿，「说话的人认为这件事有可能发生——他觉得你真的可能来。」她在第二栏写下 Si venires, gauderem，「如果你来的话（但我不确定），我会高兴。」再写第三栏：Si venisses, gavisus essem，「如果你当时来了的话（但你没来），我本会高兴。」她放下粉笔，「同一个情形，三种态度，三组时态。区别完全在动词形式上。」',
    keyPoints: [
      {
        point: '三类条件句：时态与含义对比',
        blackboardQ: {
          type: 'formulas',
          label: '条件句三类结构',
          lines: [
            '类型    Si从句         主句           含义',
            '------  -----------  -----------    --------',
            '第一类  直陈（任意时）  直陈（任意时）  真实/可能',
            '第二类  现在虚拟式     现在虚拟式      不大可能',
            '第三类  大过去虚拟式   大过去虚拟式    反事实',
            '',
            '例：Si venis, gaudebo（第一类）',
            '例：Si venires, gauderem（第二类）',
            '例：Si venisses, gavisus essem（第三类）'
          ]
        },
        question: {
          leadIn: '「看第一栏。」珀西瓦尔指向 Si venis, gaudebo，「venis 是直陈语气现在时，gaudebo 是直陈语气将来时。两个动词都是直陈。说话的人认为这件事有可能真的发生。」她在下面画了可能性坐标轴，「第一类——最高可能性，直陈加直陈。第二类——不大可能，虚拟加虚拟。第三类——反事实，大过去虚拟，表示事情已经没有发生了。」她点向黑板，「Si venis, gaudebo 属于哪类？」',
          text: '「"Si venis, gaudebo" 属于哪类条件句？」',
          options: ['第一类（真实/可能）', '第二类（不大可能）', '第三类（反事实）'],
          answer: 0
        },
        contextRight: '「不错。」她停了一秒，「两个直陈语气，第一类。说话者认为你来的可能性是真实的。直陈语气陈述他认为可能发生的事，不加任何假设意味。」',
        contextWrong: '「第一类。」她重复，不带感情，「venis 是直陈，gaudebo 是直陈。两个都是直陈语气，这是第一类条件句的定义。第二类要用现在虚拟式，第三类要用大过去虚拟式。看动词形式判断类型。」',
        blackboard: {
          type: 'formulas',
          label: '条件句三类（含动词形式）',
          lines: [
            '第一类：Si venis, gaudebo',
            '  → 直陈 + 直陈  =  真实可能',
            '',
            '第二类：Si venires, gauderem',
            '  → 现在虚拟 + 现在虚拟  =  不大可能',
            '',
            '第三类：Si venisses, gavisus essem',
            '  → 大过去虚拟 + 大过去虚拟  =  反事实'
          ]
        }
      },
      {
        point: '第二类：不大可能条件句',
        blackboard: {
          type: 'formulas',
          label: '第二类条件句（不大可能）',
          lines: [
            'Si + 现在虚拟式，现在虚拟式',
            '',
            'Si venires,   gauderem.',
            '如果你来的话，我会高兴。',
            '（但说话者认为你可能不来）',
            '',
            'Si hoc scires, melius faceres.',
            '如果你知道这事，你会做得更好。',
            '（但你可能不知道）'
          ]
        },
        context: '「第二类条件句，Si 引导的从句用现在虚拟式，主句也用现在虚拟式。」珀西瓦尔在黑板上圈出 venires 和 gauderem 的词尾，「venires——veni- 加 -res，现在虚拟式第二人称单数。gauderem——未完成虚拟式第一人称单数。这里两个动词都在虚拟语气，表达说话者的态度是：这件事理论上可能，但我认为不大可能。」她停顿，「区别在于说话者的预期。第一类：我认为你会来。第二类：我不认为你会来，但如果你来了……英语里的区别是 if you come 和 if you were to come——后者就是第二类的语气。」她转身，「记住时态组合：从句现在虚拟，主句现在虚拟。」'
      },
      {
        point: '第三类：反事实条件句',
        blackboard: {
          type: 'formulas',
          label: '第三类条件句（反事实）',
          lines: [
            'Si + 大过去虚拟式，大过去虚拟式',
            '',
            'Si venisses,    gavisus essem.',
            '如果你当时来了，我本会高兴。',
            '（但你没有来——已成事实）',
            '',
            '大过去虚拟式构成：',
            '  完成虚拟式词干 + isse + 人称词尾',
            '  venisses = veni- + sse + s'
          ]
        },
        context: '「第三类是最强烈的——它表示事情已经不可能发生了。」珀西瓦尔写下 Si venisses, gavisus essem，「venisses——大过去虚拟式，表示这件事在过去某时本应发生但没有发生。gavisus essem——完成被动分词加 eram 的虚拟式形式。」她停顿，「中文理解是：如果你当时来了……但你没来，这是已知的反事实。英语对应 if you had come, I would have been happy——假设的情形放在过去，已经无法改变。」她转身，「三类条件句的核心是时态组合。第一类用直陈，第二类用现在虚拟，第三类用大过去虚拟。看到 Si 开头的句子，第一件事是找动词时态，时态告诉你是哪类。」'
      },
      {
        point: '条件句识别策略',
        blackboard: {
          type: 'formulas',
          label: '识别条件句：三步法',
          lines: [
            '1. 找 si / nisi（如果 / 除非）',
            '2. 看从句动词语气和时态',
            '   直陈 → 第一类',
            '   现在/未完成虚拟 → 第二类',
            '   大过去虚拟 → 第三类',
            '3. 确认主句动词时态是否匹配'
          ]
        },
        context: '「翻译或分析拉丁语条件句，用三步法。」珀西瓦尔在黑板上写下三步，「第一步：找 si 或 nisi——si 是如果，nisi 是除非，它们标志着条件句的开始。第二步：看 si 从句里的动词是直陈还是虚拟，虚拟的话是现在虚拟还是大过去虚拟。这一步决定类型。第三步：确认主句的动词时态是否和从句匹配——两者应该是同类的。」她停顿，「如果主句是现在虚拟但从句是大过去虚拟，要么是混合条件句，要么是文本有问题，要么你判断错了某个时态。三步走完，类型就清楚了。语言是最古老的魔法，巫师只是把它说得更大声一点——但首先，你得能读懂它。」'
      }
    ],
    lessonSummary: '条件句三类：第一类用直陈语气，表示说话者认为条件真实或可能；第二类用现在虚拟式（从句和主句），表示不大可能；第三类用大过去虚拟式，表示反事实，事情已确知没有发生。识别时先找 si，再看从句动词语气和时态，三步确定类型。',
    nextLessonPreview: '「下节课：间接疑问句。直接问题变成从句，疑问词加虚拟语气，时态序列同样适用。」'
  },

  33: {
    atmosphere: '黑板左侧写着 Quis es?，右侧是 Nescio quis sis.，两句之间画了一个向右的长箭头。珀西瓦尔教授站在箭头旁，右手轻点着两句话里的最后一个词，没有说话。教室里有学生在低声朗读，她等了几秒后扫视了一遍，声音停了。',
    opening: '「Quis es——你是谁？这是直接疑问句。」她指向左边，「Nescio quis sis——我不知道你是谁。这是间接疑问句。」她停顿，「注意两件事：第一，间接疑问句里有 quis，疑问词留着，不消失。第二，动词变了——es 变成 sis。直陈变成了虚拟。」她在 sis 下面画了一条线，「只要问题被嵌进了别的句子里，动词就要用虚拟语气。这是规则，没有例外。」',
    keyPoints: [
      {
        point: '间接疑问句：疑问词 + 虚拟语气',
        blackboardQ: {
          type: 'formulas',
          label: '直接 vs 间接疑问句',
          lines: [
            '直接疑问句（直陈）',
            '  Quis es?          你是谁？',
            '  Ubi habitat?      他住在哪里？',
            '',
            '间接疑问句（虚拟）',
            '  Nescio quis sis.  我不知道你是谁。',
            '  Rogavi ubi habitaret. 我问了他住在哪里。',
            '',
            '规则：嵌入从句后，动词改为虚拟语气'
          ]
        },
        question: {
          leadIn: '珀西瓦尔指向黑板右列，「Nescio quis sis——我不知道你是谁。」她圈出 sis，「es 是 sum 的直陈现在时第二人称单数，sis 是 sum 的现在虚拟式第二人称单数。为什么要变成虚拟式？」她停顿，「因为这个问题不是在直接发出，它被嵌进了 nescio——我不知道——这个主句里。间接疑问句的动词一律用虚拟语气。那么 sis 是什么形式？」',
          text: '「"Nescio quis sis" 中，sis 是哪种形式？」',
          options: ['完成时直陈', '现在虚拟式', '命令式'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「sis 是 sum 的现在虚拟式第二人称单数。间接疑问句里的动词用虚拟，这是固定规则。直陈的 es 进入从句就变成虚拟的 sis。」',
        contextWrong: '「现在虚拟式。」她重复，不带感情，「sis 来自 sum，是它的现在虚拟式第二人称单数。间接疑问句的动词不用直陈，要用虚拟。完成时是 fuisti，命令式是 es——两者都不是。sis 是现在虚拟。」',
        blackboard: {
          type: 'formulas',
          label: '间接疑问句动词变化',
          lines: [
            '直接：Quis es?',
            '  → es = sum 直陈现在时',
            '',
            '间接：Nescio quis [sis].',
            '  → [sis] = sum 现在虚拟式',
            '',
            '规则：疑问词不变，动词 → 虚拟语气'
          ]
        }
      },
      {
        point: '常用疑问词：间接疑问句中的引导词',
        blackboard: {
          type: 'formulas',
          label: '间接疑问常用疑问词',
          lines: [
            'quis / quid   谁 / 什么',
            'cur           为什么',
            'ubi           在哪里',
            'quando        什么时候',
            'quomodo       怎么',
            'quot          多少',
            '',
            '这些词不变，动词变为虚拟语气'
          ]
        },
        context: '「间接疑问句的引导词和直接疑问句一样——quis，quid，cur，ubi，quando，quomodo。」珀西瓦尔在黑板上逐条写下，「这些词本身不变形，它们只是把从句引出来。变的是动词——动词要从直陈改成虚拟。」她写了两个例句：Nescio cur veniat——我不知道他为什么来；Rogavi quando discederet——我问了他什么时候离开。「注意第二句：rogavi 是过去时，所以从句用 discederet——未完成虚拟，不是现在虚拟。这就是时态序列：主句时态影响从句虚拟的时态选择。」她停顿，「今天先记住这六个引导词。」'
      },
      {
        point: '时态序列：主句时态决定从句虚拟时态',
        blackboard: {
          type: 'formulas',
          label: '时态序列规则',
          lines: [
            '主句时态        从句虚拟时态',
            '-----------    ---------------',
            '现在 / 将来     → 现在虚拟式',
            '过去（完成/     → 未完成虚拟式',
            '  未完成/大过去）',
            '',
            '例：Nescio quis sis.  （主句现在→现在虚拟）',
            '例：Nesciebam quis esset.（主句过去→未完成虚拟）'
          ]
        },
        context: '「时态序列是拉丁语所有复杂从句的共同规则，不只是间接疑问句。」珀西瓦尔在黑板上写下对照表，「规则很简单：主句用现在时或将来时，从句用现在虚拟；主句用任何过去时，从句用未完成虚拟。」她停顿，「Nescio quis sis——nescio 是现在时，所以 sis 是现在虚拟。Nesciebam quis esset——nesciebam 是未完成过去时，所以 esset 是未完成虚拟。」她转身，「考试里看到虚拟从句，先找主句时态，再确认从句时态是否符合序列。如果不符合，要么是古典拉丁语的特殊用法，要么是你看错了某个词形。这个规则在目的从句、条件句、间接疑问句里都适用。」'
      },
      {
        point: '直接到间接疑问句的转换练习',
        blackboard: {
          type: 'formulas',
          label: '直→间接疑问句转换',
          lines: [
            '直接：Ubi est liber?',
            '间接：Nescio ubi liber sit.',
            '',
            '直接：Cur venis?',
            '间接：Rogo cur venias.',
            '',
            '直接：Quid fecit?',
            '间接：Nesciebam quid fecisset.',
            '',
            '步骤：疑问词留→动词改虚拟→时态序列'
          ]
        },
        context: '「做这种转换题，步骤是固定的。」珀西瓦尔指向黑板，「第一步：保留疑问词，直接搬过来，不要改。第二步：动词改成虚拟语气。第三步：确认从句虚拟时态和主句时态的序列关系。」她在黑板上逐行分析，「Ubi est liber 变成间接疑问句：ubi 不变，est 改成 sit（现在虚拟），因为主句 nescio 是现在时。」她继续，「Quid fecit 变成间接：fecit 是完成时，进入主句过去时语境后变成大过去虚拟式 fecisset。」她停顿，「大过去虚拟式的用途在这里也出现了——当从句的动作在主句过去时之前就已完成，就用大过去虚拟。规则一旦掌握，任何间接疑问句都能处理。」'
      }
    ],
    lessonSummary: '间接疑问句的规则：疑问词（quis/cur/ubi等）保持不变，动词改为虚拟语气。时态序列决定虚拟的时态：主句现在/将来时对应从句现在虚拟，主句过去时对应从句未完成虚拟，若从句动作更早发生则用大过去虚拟。转换时三步走：疑问词留，动词改虚拟，检查时态序列。',
    nextLessonPreview: '「下节课：动名词与目的结构。legendi，legendum，legendo——同一个动词的名词化形式，在句子里有不同功能。」'
  },

  34: {
    atmosphere: '黑板上写着三个拉丁词：legendi，ad legendum，legendo，三个词下面各画了一条横线，横线上注明了格的名字：属格、宾格、夺格。珀西瓦尔教授站在黑板旁边，粉笔在三个词之间慢慢移动，没有落下来。',
    opening: '「动词可以变成名词使用。」珀西瓦尔转身，「这不是虚拟语气，这是动名词——gerund。」她指向黑板，「legere，阅读。当你想说"阅读的艺术"，你需要阅读的属格形式：legendi。当你想说"为了阅读"，你需要带 ad 的宾格：ad legendum。当你想说"通过阅读"，你需要夺格：legendo。」她停顿，「同一个动词，三种格，三种句法功能。今天学这三种形式，以及它们在句子里的位置。」',
    keyPoints: [
      {
        point: '动名词三格：属格、宾格、夺格',
        blackboardQ: {
          type: 'formulas',
          label: '动名词格变（legere）',
          lines: [
            '格       形式         用途',
            '------  ----------  --------------------',
            '属格    legendi      ...的（ars legendi）',
            '宾格    legendum     ad + 宾格 = 为了...',
            '夺格    legendo      通过/在...方面',
            '',
            '例：ars legendi  = 阅读的艺术',
            '例：ad legendum = 为了阅读',
            '例：legendo     = 通过阅读'
          ]
        },
        question: {
          leadIn: '「看黑板上的 ad legendum。」珀西瓦尔圈出 ad，「ad 这个介词在拉丁语里支配宾格——任何跟在 ad 后面的名词或动名词都要用宾格形式。ad legendum 的意思是为了阅读，表示目的。」她停顿，「动名词的宾格形式是什么词尾？legendum 里看。」',
          text: '「"ad legendum" 中 legendum 是什么格？」',
          options: ['属格（所有格）', '宾格（目的用法）', '夺格（工具格）'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「ad 支配宾格，legendum 是动名词宾格形式。词尾 -ndum 是动名词宾格/属格的标志，加在动词词干后面。ad legendum 是目的的固定表达。」',
        contextWrong: '「宾格。」她重复，不带感情，「ad 这个介词后面接宾格，这是规则。legendum 是动名词宾格形式，词尾是 -ndum。属格是 legendi，夺格是 legendo。三种形式分别对应不同用途。」',
        blackboard: {
          type: 'formulas',
          label: '动名词三格（含词尾）',
          lines: [
            '属格  lege-[ndi]   → 名词所有格用法',
            '宾格  lege-[ndum]  → ad + 宾格 = 目的',
            '夺格  lege-[ndo]   → 方式/手段/方面',
            '',
            '词根：不定式词干（legere → lege-）',
            '+ -ndi / -ndum / -ndo'
          ]
        }
      },
      {
        point: '属格动名词：名词修饰用法',
        blackboard: {
          type: 'formulas',
          label: '属格动名词（legendi）',
          lines: [
            'ars legendi    = 阅读的艺术',
            'cupiditas     = 渴望',
            'cupiditas discendi = 学习的渴望',
            '',
            'causa + 属格动名词 = "为了...的缘故"',
            'discendi causa = 为了学习的缘故',
            '',
            '属格 → 修饰名词，表示"...的"'
          ]
        },
        context: '「属格动名词修饰名词，就像普通名词的属格一样。」珀西瓦尔在黑板上写下 ars legendi，「ars 是技艺，legendi 是阅读的，合起来是阅读的技艺。这和 ars magistri——老师的技艺——结构完全相同，只是修饰语不是名词而是动名词。」她继续写，「还有一个固定搭配：causa 后面接属格动名词表示目的。discendi causa——为了学习的缘故。这是目的的另一种表达，在古典拉丁语里很常见，和 ut 加虚拟语气的目的从句可以互换。」她停顿，「属格动名词的构成：不定式词干加 -ndi。legere 的词干是 lege-，加 -ndi 得到 legendi。」'
      },
      {
        point: '夺格动名词：方式与手段',
        blackboard: {
          type: 'formulas',
          label: '夺格动名词（legendo）',
          lines: [
            'legendo discimus.',
            '通过阅读，我们学习。',
            '',
            'exercendo corpus firmatur.',
            '通过锻炼，身体得到强化。',
            '',
            '夺格 → 表示方式、手段、途径',
            '词尾：-ndo（不定式词干 + -ndo）'
          ]
        },
        context: '「夺格动名词表示方式或手段，相当于中文的"通过……"。」珀西瓦尔在黑板上写下 legendo discimus，「legendo——通过阅读；discimus——我们学习。整句：通过阅读，我们学习。」她停顿，「夺格在拉丁语里的功能很广，可以表示工具，可以表示方式，可以表示在某方面。动名词夺格用来表示达成某个结果的手段。」她转身，「词尾是 -ndo，这个形式也和现在主动分词夺格有时相同，要注意区分。如果没有名词让分词去修饰，那就是动名词。如果有名词可以呼应，那就是分词。」'
      },
      {
        point: '目的从句与动名词：两种目的表达',
        blackboard: {
          type: 'formulas',
          label: '两种目的表达的对比',
          lines: [
            '方式一：ut + 虚拟语气',
            '  Venio ut legam.',
            '  我来，为了阅读。',
            '',
            '方式二：ad + 动名词宾格',
            '  Venio ad legendum.',
            '  我来，为了阅读。',
            '',
            '含义相同，结构不同——两种都要掌握'
          ]
        },
        context: '「表达目的，拉丁语有两种常用方式。」珀西瓦尔在黑板上并排写下两句话，「Venio ut legam——ut 加现在虚拟式。Venio ad legendum——ad 加动名词宾格。两句意思完全相同：我来是为了阅读。」她停顿，「在 GCSE 考试里，你可能读到任何一种，也可能被要求说明这是哪种目的表达，或者把一种改写成另一种。」她在两行之间画了等号，「语言是最古老的魔法，巫师只是把它说得更大声一点——但说同一件事可以有不同的形式。拉丁语的精确性体现在：两种形式虽然含义相同，但结构上的选择本身反映说话者的风格和时代。古典时期 ut 从句更正式，动名词表达更简洁。」'
      }
    ],
    lessonSummary: '动名词是动词的名词化形式，有三个格：属格（-ndi）修饰名词，如 ars legendi；宾格（-ndum）用于 ad 加宾格表示目的，如 ad legendum；夺格（-ndo）表示方式手段，如 legendo discimus。目的可以用 ut 加虚拟语气，也可以用 ad 加动名词宾格，两种表达含义相同。',
    nextLessonPreview: '「下节课：被动语态所有时态。主动和被动的对照，施动者的表达方式，以及复合时态的被动构成。」'
  },

  35: {
    atmosphere: '黑板分成两栏，左侧写着主动语态变位表，右侧留白。珀西瓦尔教授在右侧顶部写下一个词：amor，然后放下粉笔，转向学生。教室里的烛光在无风中稳定燃烧。',
    opening: '「amat——他爱。」珀西瓦尔指向左栏，「amatur——他被爱。」她指向右栏的 amor，「一个做动作，一个承受动作。这就是主动和被动的区别。」她停顿，「拉丁语被动的构成方式和英语不同——不是 is loved 那样用助动词，而是直接改动词词尾。现在时如此。但完成时是另一套系统——用分词加 sum。」她在黑板上分别标注，「今天学所有时态的被动语态，以及施动者的表达方式。」',
    keyPoints: [
      {
        point: '现在时被动：词尾变化',
        blackboardQ: {
          type: 'formulas',
          label: '主动 vs 现在时被动（amare）',
          lines: [
            '主动语态        被动语态',
            '-----------    -----------',
            'am-o           am-or',
            'am-a-s         am-a-ris',
            'am-a-t         am-a-tur',
            'am-a-mus       am-a-mur',
            'am-a-tis       am-a-mini',
            'am-a-nt        am-a-ntur',
            '',
            '被动词尾：-or/-ris/-tur/-mur/-mini/-ntur'
          ]
        },
        question: {
          leadIn: '珀西瓦尔在右栏写出完整的被动变位表，「看词尾对照。主动第一人称 -o，被动换成 -or。主动第三人称 -t，被动换成 -tur。」她圈出右栏所有词尾，「-or，-ris，-tur，-mur，-mini，-ntur——这六个是现在时被动的人称词尾。」她停顿，「amatus sum——这是完成时被动，不是现在时。现在时被动就是改词尾。那么第三人称单数被动是？」',
          text: '「"Amatus sum" 是哪个时态的被动形式？」',
          options: ['未完成时被动', '完成时被动', '大过去时被动'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「amatus sum——完成被动分词加 sum，这是完成时被动。现在时被动是 amatur，改词尾；完成时被动是 amatus/a/um sum，分词加系动词。两种构成方式不同。」',
        contextWrong: '「完成时被动。」她重复，不带感情，「amatus 是完成被动分词，sum 是 esse 的现在时第一人称单数。分词加 sum，就是完成时被动。未完成时被动是 amabar，大过去时被动是 amatus eram。三种形式不同。」',
        blackboard: {
          type: 'formulas',
          label: '主动 vs 被动对照（三时态）',
          lines: [
            '时态    主动          被动',
            '------  ----------  -----------------------',
            '现在    amat         amatur（改词尾）',
            '完成    amavit       amatus est（分词+est）',
            '大过去  amaverat     amatus erat（分词+erat）'
          ]
        }
      },
      {
        point: '完成与大过去时被动：分词 + esse',
        blackboard: {
          type: 'formulas',
          label: '完成时被动 vs 大过去时被动',
          lines: [
            '完成时被动：完成被动分词 + sum（现在时）',
            '  amatus/a/um sum   = I have been loved',
            '  amatus/a/um es    = you have been loved',
            '  amatus/a/um est   = he has been loved',
            '',
            '大过去时被动：完成被动分词 + eram（未完成时）',
            '  amatus/a/um eram  = I had been loved',
            '  amatus/a/um erat  = he had been loved'
          ]
        },
        context: '「完成时被动和大过去时被动的构成原理相同，区别只在助动词。」珀西瓦尔在黑板上写出两套形式，「完成被动分词——amatus/amata/amatum，随主语性别格数变化——加上 sum 的变位，得到完成时被动；加上 eram 的变位，得到大过去时被动。」她停顿，「这里有一个关键点：分词要和主语的性数格一致。主语是阴性，分词用 amata；主语是复数，分词用 amati。这和英语的 loved 不变形完全不同。」她转身，「举例：Puella amata est——女孩被爱了，amata 是阴性单数；Pueri amati sunt——男孩们被爱了，amati 是阳性复数。分词和主语呼应。」'
      },
      {
        point: '施动者的表达：a/ab + 夺格，与工具夺格',
        blackboard: {
          type: 'formulas',
          label: '施动者 vs 工具',
          lines: [
            '施动者（人）：a/ab + 夺格',
            '  Puella a magistro amatur.',
            '  女孩被老师爱着。',
            '  （a + magistro = 由老师）',
            '',
            '工具（物）：夺格，无介词',
            '  Hasta vulneratur miles.',
            '  士兵被长矛刺伤。',
            '  （hasta = 夺格，用长矛）'
          ]
        },
        context: '「被动句里要说"由谁做"，用 a 或 ab 加夺格。」珀西瓦尔在黑板上写下示例，「a magistro——由老师，施动者是人。这里 a 在辅音前用，ab 在元音前用。」她停顿，「如果施动者是物，不用 a/ab，直接用夺格——这叫工具夺格。Hasta vulneratur miles——士兵被长矛伤到，hasta 是夺格，没有介词。」她转身，「区分规则很简单：有意识的行为者用 a/ab 加夺格；无生命的工具直接用夺格。在翻译时，看到 a/ab 加夺格，翻成"被……"；看到单独的夺格名词在被动句里，翻成"用……"或"被……所……"。」'
      },
      {
        point: '被动语态全貌：时态与构成总结',
        blackboard: {
          type: 'formulas',
          label: '被动语态时态总表',
          lines: [
            '时态      构成方式              词尾/助动词',
            '------    ------------------   -----------',
            '现在      词干 + 被动词尾        -or/-ris/-tur',
            '未完成    词干 + ba + 被动词尾   -bar/-baris/-batur',
            '将来      词干 + bi + 被动词尾   -bor/-beris/-bitur',
            '完成      分词（-tus）+ sum',
            '大过去    分词（-tus）+ eram',
            '将来完成  分词（-tus）+ ero'
          ]
        },
        context: '「被动语态的时态分成两套系统。」珀西瓦尔在黑板上写出总表，「现在时、未完成时、将来时：直接改动词词尾，加被动人称词尾。完成时、大过去时、将来完成时：用完成被动分词加 esse 的对应时态变位。」她停顿，「你们今天重点掌握现在时和完成时被动——这两个在 GCSE 考试里出现最频繁。」她放下粉笔，「语言是最古老的魔法，巫师只是把它说得更大声一点——但在拉丁语里，主动和被动的区别不只是语法，它影响整个句子的焦点：主动句焦点在施动者，被动句焦点在承受者。这种选择在古典文学里是有意为之的。」'
      }
    ],
    lessonSummary: '被动语态分两套：现在/未完成/将来时改动词词尾（-or/-ris/-tur/-mur/-mini/-ntur）；完成/大过去时用完成被动分词（随主语性数格变化）加 esse 的对应时态。施动者（人）用 a/ab 加夺格，工具（物）直接用夺格无介词。完成时被动：amatus est；大过去时被动：amatus erat。',
    nextLessonPreview: '「下节课：GCSE 指定散文文本精读开始。西塞罗的文章，三层阅读法：词义、句法、文学效果。」'
  },

  36: {
    atmosphere: '讲台上摆着一本翻开的书，旁边有三张纸条，用不同颜色的墨水写着注释。珀西瓦尔教授把书转过来面对学生，但没有示意他们去看。她站着，等了片刻，然后在黑板上写下三个数字：40、30、30。',
    opening: '「GCSE 拉丁语试卷的分值分布。」她指向黑板，「翻译占 40%，理解题占 30%，语法题占 30%。」她停顿，「这三个数字对应三种阅读能力：翻译要求你理解每一个词的形式和意义；理解题要求你把握段落的整体含义和论证；语法题要求你识别具体的语法结构。」她在黑板上把数字改成：词义层、句法层、文学效果层，「这就是三层阅读法。今天学用这三层系统化地读一段拉丁散文——从西塞罗开始。」',
    keyPoints: [
      {
        point: '三层阅读法',
        blackboardQ: {
          type: 'formulas',
          label: '三层阅读法模板',
          lines: [
            '第一层：词汇意义',
            '  → 每个词的词形、格、时态、语气',
            '',
            '第二层：句法结构',
            '  → 主句与从句，主语与动词，修饰关系',
            '',
            '第三层：文学效果',
            '  → 修辞手法，节奏，作者选词的用意'
          ]
        },
        question: {
          leadIn: '「三层阅读不是三遍阅读——不是读三遍。」珀西瓦尔转身，「是每读一个句子，同时在三个层面上处理信息。第一层给你原材料——这个词是什么形式，什么意思。第二层给你结构——谁做了什么。第三层给你深度——作者为什么这样写，效果是什么。」她停顿，「西塞罗最擅长的修辞结构，出现在第三层分析里。」',
          text: '「西塞罗最常用的修辞结构是？」',
          options: ['简短单句，节奏急促', '三段排比（tricolon），三组并列', '反问句，情绪激烈'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「三段排比——tricolon。三组并列的短语或句子，节奏从第一组到第三组逐渐加强，最后一组最有力量。这是西塞罗的标志性结构，在《反对喀提林》和《对布鲁图斯》里都大量使用。」',
        contextWrong: '「三段排比，tricolon。」她重复，不带感情，「西塞罗不用简短单句——他的句子通常很长，层层叠加从句。他的情绪是有节制的，修辞是有结构的。三段排比是他最常用的放大效果的手段。」',
        blackboard: {
          type: 'formulas',
          label: '三层阅读法（含西塞罗特征）',
          lines: [
            '第一层：词汇意义 → 词形分析，字典义',
            '第二层：句法结构 → 主句/从句，hypotaxis（长句层叠）',
            '第三层：文学效果 → tricolon（三段排比），节奏感'
          ]
        }
      },
      {
        point: '西塞罗文体：hypotaxis 与 tricolon',
        blackboard: {
          type: 'formulas',
          label: '西塞罗两大文体特征',
          lines: [
            'hypotaxis = 长句层叠',
            '  主句 + 从句 + 从句的从句',
            '  气势在层叠中积累',
            '',
            'tricolon = 三段排比',
            '  A + B + C，三组并列',
            '  C 通常最长最有力',
            '',
            '例：Veni, vidi, vici（Caesar，非Cicero）',
            '    三动词等长，节奏铿锵'
          ]
        },
        context: '「西塞罗的文体有两个关键特征。」珀西瓦尔在黑板上写下 hypotaxis 和 tricolon，「Hypotaxis 是句子套句子——一个主句，加上多个从句，从句里还有从句。读西塞罗的演讲，你经常要走过五六个从句才到动词。这不是混乱，这是刻意的气势积累。」她停顿，「Tricolon 是三段排比，三组结构相似的短语或句子。第一组引出，第二组加强，第三组通常最长，落地最有力量。」她写下一个例子，「"Abiit, excessit, evasit, erupit"——四个动词，递进，节奏加速，最后的 erupit 是爆发。这是 quadricolon，四段，比 tricolon 更少见，但同样有力。」她转身，「读西塞罗，在第三层分析里找这两种结构。」'
      },
      {
        point: 'GCSE 翻译策略：逐句处理',
        blackboard: {
          type: 'formulas',
          label: 'GCSE 翻译评分要点',
          lines: [
            '翻译占 40% 分值',
            '',
            '评分关注：',
            '  1. 词形识别是否准确（格/时态/语气）',
            '  2. 句法关系是否理解',
            '  3. 英语表达是否通顺',
            '',
            '策略：先分析词形，再构建句法，最后润色'
          ]
        },
        context: '「翻译题在 GCSE 里占 40% 分值，是最大的单项。」珀西瓦尔在黑板上列出评分关注点，「批改者看三件事：第一，你是否识别了词形——这个词是主格还是宾格，这个动词是完成时还是未完成时；第二，你是否理解了句法关系——主语和动词是否对应，从句是否和主句正确连接；第三，你的英语是否通顺——意思对但表达混乱，分数会被扣。」她停顿，「翻译策略：先在纸上标注每个词的语法分析，主格/宾格/动词时态，再用这些分析构建句子结构，最后写出英语译文并润色。不要直接逐词翻译——这几乎总是产生不通顺的英语。」'
      },
      {
        point: '文学效果分析：GCSE 答题格式',
        blackboard: {
          type: 'formulas',
          label: 'GCSE 文学效果答题格式',
          lines: [
            '三步格式：',
            '1. 识别修辞手法',
            '   "The author uses tricolon..."',
            '2. 引用原文',
            '   "...as seen in \'A, B, C\'..."',
            '3. 分析效果',
            '   "...which creates a sense of..."'
          ]
        },
        context: '「GCSE 文学效果题有固定答题格式，偏离格式会失分。」珀西瓦尔在黑板上写出三步，「第一步：命名修辞手法，用术语。Tricolon，anaphora，simile——要用英语拉丁语术语，不能只说"他重复了词语"。第二步：引用原文，用引号，引用拉丁语原文。第三步：分析效果，说明这种手法产生了什么效果，对读者产生了什么影响。」她停顿，「效果分析要具体——不要说"这使文章更好"，要说"this creates a sense of urgency by accelerating the rhythm"，或者"this emphasises the speaker\'s anger through repetition"。」她放下粉笔，「这三步，在每一道文学效果题里都用。」'
      }
    ],
    lessonSummary: '三层阅读法：词汇意义（词形分析）、句法结构（主从句关系）、文学效果（修辞手法）。西塞罗文体特征是 hypotaxis（长句层叠）和 tricolon（三段排比）。GCSE 翻译占 40% 分值，翻译时先分析词形再构建句法再润色英语。文学效果题用三步格式：识别手法、引用原文、分析效果。',
    nextLessonPreview: '「下节课：六音步格律。维吉尔的史诗节奏——扬抑抑格和扬扬格，如何在一行诗里扫描节拍。」'
  },

  37: {
    atmosphere: '黑板上写着一行拉丁语：Arma virumque cano，上方有一排符号：— ∪ ∪ | — — | — ∪ ∪ | — —。珀西瓦尔教授站在这行字旁边，右手拿着教鞭，轻轻敲打黑板上每个节拍。教室里的节奏感突然清晰起来。',
    opening: '「拉丁语诗歌不押韵，它靠节拍。」珀西瓦尔放下教鞭，「六音步格是古典史诗的专属节律，维吉尔的《埃涅阿斯纪》和荷马的拉丁语翻译都用这个格律。」她指向黑板上的符号，「— 表示长音节，∪ 表示短音节。六音步格的每一步不是固定形式——可以是扬抑抑格（一长两短），也可以是扬扬格（两长）。」她停顿，「这就是今天的内容：识别这两种音步，在诗行里扫描节拍。」',
    keyPoints: [
      {
        point: '两种音步：dactyl 与 spondee',
        blackboardQ: {
          type: 'formulas',
          label: 'dactyl vs spondee',
          lines: [
            'dactyl（扬抑抑格）：— ∪ ∪',
            '  一个长音节 + 两个短音节',
            '  节奏感：轻快，向前冲',
            '',
            'spondee（扬扬格）：— —',
            '  两个长音节',
            '  节奏感：沉重，缓慢',
            '',
            '第六步永远是 spondee（— —）或 — ∪（catalexis）'
          ]
        },
        question: {
          leadIn: '「看黑板上两种符号。」珀西瓦尔在 dactyl 的符号旁用粉笔轻打节拍，「— ∪ ∪——一个重，两个轻。这是 dactyl，来自希腊语"手指"，因为手指的结构是一节长两节短。」她停顿，「Spondee——— ———两个都重。维吉尔用 spondee 堆积来制造沉重感，比如描写战争的疲惫，或者英雄的悲剧。」她指向题目，「dactyl 的节奏模式是？」',
          text: '「dactyl（扬抑抑格）的节奏模式是？」',
          options: ['— — （两长）', '— ∪ ∪ （一长两短）', '∪ — （一短一长）'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「— ∪ ∪，一长两短，这是 dactyl。六音步格里，每一步可以是 dactyl 或 spondee，这种弹性让诗人可以根据情感选择节奏快慢。第六步固定是 spondee 或末音节截短，这是规则。」',
        contextWrong: '「— ∪ ∪。」她重复，不带感情，「一长两短，这是 dactyl。— — 是 spondee，∪ — 是 iamb（短长格），是另一种格律，不在六音步格里。六音步格只有 dactyl 和 spondee 两种音步。」',
        blackboard: {
          type: 'formulas',
          label: 'dactyl vs spondee 对比',
          lines: [
            'dactyl   =  [—] ∪ ∪  （一长两短）',
            'spondee  =  [—] [—]  （两长）',
            '',
            '六音步格 = 六个音步，每步可选',
            '第六步固定：— — 或 — ∪（截短）'
          ]
        }
      },
      {
        point: '维吉尔开篇：Arma virumque cano',
        blackboard: {
          type: 'formulas',
          label: '《埃涅阿斯纪》第一行格律扫描',
          lines: [
            'Ar-ma vi-|rum-que ca-|no, Tro-|iae qui|pri-mus ab|o-ris',
            '',
            '  — ∪ ∪ | — — | — ∪ ∪ | — — | — — | — —',
            '  dact    spond  dact    spond  spond  spond',
            '',
            'Arma virumque cano',
            '武器和人——我歌唱。',
            ''
          ]
        },
        context: '「Arma virumque cano——我歌唱武器与英雄。」珀西瓦尔用教鞭在黑板上逐音节轻敲，「Ar- 是长音节，-ma 和 vi- 是短音节：— ∪ ∪，第一步是 dactyl。rum-que 是两个长音节：— —，第二步是 spondee。ca-no——长短，但在诗行里因为位置和下一行的关系，处理为 dactyl 的开始。」她停顿，「完整扫描需要知道哪些音节天生是长音节——两个辅音前面的元音、双元音、自然长元音。这些规则你们需要查专用的格律参考。今天的目标是认识这两种音步的基本形态，以及为什么维吉尔有时用 dactyl 有时用 spondee。」她转身，「spondee 扎堆的地方，节奏沉重，往往是悲剧时刻。dactyl 扎堆的地方，节奏轻快，往往是叙事推进或胜利。这就是格律的情感功能。」'
      },
      {
        point: '音节长短的规则',
        blackboard: {
          type: 'formulas',
          label: '长音节的规则',
          lines: [
            '天然长音节：',
            '  1. 双元音（ae, oe, au）',
            '  2. 标注长音符的元音（ā, ē, ī）',
            '',
            '位置长音节：',
            '  3. 元音后跟两个辅音（在同一个词或跨词）',
            '',
            '天然短音节：',
            '  其余未标注的单元音'
          ]
        },
        context: '「在格律扫描里，你需要判断每个音节是长是短。规则分两类。」珀西瓦尔在黑板上写出规则，「天然长音节：双元音 ae、oe、au 永远是长音；带长音符号的元音也是长音。位置长音节：一个元音后面紧跟两个辅音，无论在同一个词里还是跨词，这个元音因为位置而变长。」她停顿，「注意：h 不算辅音，qu 算一个辅音，muta cum liquida——爆破音加 r 或 l——可以是例外，让前面的元音不因位置而变长，但维吉尔通常按长音处理。」她转身，「这些规则实际练习才能掌握，GCSE 考试里格律题通常会给你已经标好长短的诗行，要求你识别某一步是 dactyl 还是 spondee，并说明这种选择产生了什么效果。」'
      },
      {
        point: '格律与情感：维吉尔的音乐性',
        blackboard: {
          type: 'formulas',
          label: '格律选择的情感效果',
          lines: [
            'dactyl 扎堆 → 节奏轻快，叙事推进',
            '  → 常见于战争场面、奔跑、胜利',
            '',
            'spondee 扎堆 → 节奏沉重，情感浓郁',
            '  → 常见于悲剧、死亡、沉思',
            '',
            '格律分析在 GCSE 第三层（文学效果）里考查'
          ]
        },
        context: '「维吉尔的格律选择不是随机的，」珀西瓦尔在黑板旁站定，「每一行的节奏都配合内容的情感。当 Aeneas 看到 Carthage 正在建设，诗行里有大量 dactyl——轻快，前进，充满活力。当他读到城邦的悲剧壁画，spondee 增多——沉重，停顿，哀恸。」她停顿，「语言是最古老的魔法，巫师只是把它说得更大声一点——在维吉尔这里，节拍本身就是意义的一部分。读者读出节奏，感受到情感，在翻译里这完全消失了。这就是为什么读拉丁语原文永远无法被翻译完全替代。」她放下教鞭，「格律分析在 GCSE 第三层里考查，GCSE A 级和 AS 级都有扫描诗行的题目。」'
      }
    ],
    lessonSummary: '六音步格由两种音步构成：dactyl（扬抑抑格，— ∪ ∪，一长两短）和 spondee（扬扬格，— —，两长）。第六步固定为 spondee。音节长短由天然长音（双元音、长音符）和位置长音（元音后两辅音）决定。格律选择有情感效果：dactyl 扎堆节奏轻快，spondee 扎堆节奏沉重。维吉尔用格律配合内容情感。',
    nextLessonPreview: '「下节课：修辞手法识别——明喻、暗喻、反复、对照。每种手法的术语、识别方法和 GCSE 答题格式。」'
  },

  38: {
    atmosphere: '黑板上写着四行拉丁语，每行前面有一个字母：S、M、A、N，像是某个系统的代号。珀西瓦尔教授站在黑板一侧，视线扫过那四行字，没有立刻解释。',
    opening: '「修辞手法不是装饰，是工具。」珀西瓦尔转身，「古罗马演说家和诗人使用这些手法是为了说服和感动听众，不是为了让文章看起来漂亮。」她指向黑板上的四个字母，「今天学四种：simile，metaphor，anaphora，antithesis——明喻、暗喻、反复、对照。GCSE 考试要求你识别、引用、分析。三步走完，不能少一步。」她在黑板旁边站定，「从第一个开始。」',
    keyPoints: [
      {
        point: '四种修辞手法：识别与术语',
        blackboardQ: {
          type: 'formulas',
          label: '四种修辞手法（含拉丁例句）',
          lines: [
            'S  simile（明喻）：velut/ut 连接',
            '   velut leo irruit = 像狮子一样冲入',
            '',
            'M  metaphor（暗喻）：直接替换，无连接词',
            '   vita flumen est = 生命是一条河',
            '',
            'A  anaphora（反复）：句首重复同一词/短语',
            '   Veni, vidi, vici = 来，见，胜',
            '',
            'N  antithesis（对照）：对立概念并置',
            '   Aut Caesar aut nihil = 要么凯撒，要么虚无'
          ]
        },
        question: {
          leadIn: '「"Veni, vidi, vici"——来了，看了，赢了。」珀西瓦尔在黑板上写出这三个词，「凯撒用三个动词描述他的战役。三个词，结构完全相同，都是完成时第一人称单数，都是两个音节，节奏一致。」她停顿，「这种句首或结构位置上重复相同形式的手法叫什么？」',
          text: '「"Veni, vidi, vici" 使用了哪种修辞手法？」',
          options: ['simile（明喻）', 'anaphora（反复）', 'metaphor（暗喻）'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「anaphora——反复，结构相同的词或短语的重复。Veni, vidi, vici 三个动词结构和形式完全对应，节奏的重复制造了一种势如破竹的力量感。这是凯撒修辞简洁的典型例子，和西塞罗的长句风格形成对比。」',
        contextWrong: '「anaphora——反复。」她重复，不带感情，「simile 需要 velut 或 ut 这样的连接词，metaphor 不用连接词但会用直接替换的说法。Veni vidi vici 三个词结构相同、重复出现，这是 anaphora。」',
        blackboard: {
          type: 'formulas',
          label: '四种修辞手法总表',
          lines: [
            'simile    明喻    velut/ut + 比较对象',
            'metaphor  暗喻    直接称A为B，无连接词',
            'anaphora  反复    句首或结构位置重复词语',
            'antithesis 对照   对立概念并置，形成张力'
          ]
        }
      },
      {
        point: '明喻与暗喻：对比与识别',
        blackboard: {
          type: 'formulas',
          label: 'simile vs metaphor',
          lines: [
            'simile（明喻）：用 velut / ut / quasi 连接',
            '  velut leo irruit in hostes.',
            '  他像狮子一样冲入敌阵。',
            '  → 明确说"像"，保留对比距离',
            '',
            'metaphor（暗喻）：直接替换，无连接词',
            '  vita nostra breve flumen est.',
            '  我们的生命是一条短暂的河。',
            '  → 直接等同，冲击更强'
          ]
        },
        context: '「明喻和暗喻的区别在于是否有连接词。」珀西瓦尔在黑板上写下两个例句，「velut leo——像狮子，有 velut，这是明喻，simile。有连接词就有安全距离——说话者承认这是比较，不是等同。」她停顿，「暗喻直接说 vita flumen est——生命是一条河。没有"像"，直接等同。暗喻的修辞力量更强，因为它要求听者直接接受这个等同，没有缓冲。」她转身，「GCSE 里识别明喻看 velut/ut 这些连接词；识别暗喻则要看是否有直接的身份等同，且没有连接词。两者的分析效果也不同——在答题时要分别说明。」'
      },
      {
        point: '反复与对照：节奏与张力',
        blackboard: {
          type: 'formulas',
          label: 'anaphora vs antithesis',
          lines: [
            'anaphora（反复）：',
            '  Veni, vidi, vici.',
            '  重复词语/结构 → 节奏积累，情绪递进',
            '',
            'antithesis（对照）：',
            '  Aut Caesar aut nihil.',
            '  要么凯撒，要么虚无。',
            '  对立概念并置 → 强调差距，制造张力'
          ]
        },
        context: '「anaphora 的效果是节奏积累。」珀西瓦尔平静地说，「重复产生节奏，节奏产生动力。Veni vidi vici——三次完成，三次胜利，每一次比上一次更确定。」她停顿，「antithesis 的效果完全不同——它用对立制造张力。Aut Caesar aut nihil——要么最高权力，要么什么都不是。这个说法把两个极端并置，中间没有任何缓冲，强迫听者在两极之间做选择。」她转身，「分析 anaphora 时，说它通过节奏的积累强化了情绪；分析 antithesis 时，说它通过对比突出了两端的极端性，制造了紧张感。这是 GCSE 答题里分析效果的标准描述框架。」'
      },
      {
        point: 'GCSE 修辞分析答题格式',
        blackboard: {
          type: 'formulas',
          label: 'GCSE 修辞分析三步格式',
          lines: [
            '1. 识别：The author uses [术语]...',
            '2. 引用：...as seen in "[拉丁语原文]"...',
            '3. 效果：...which [效果描述].',
            '',
            '例：The author uses anaphora, as seen in',
            '"Veni, vidi, vici", which creates a sense',
            'of rapid triumph through rhythmic repetition.'
          ]
        },
        context: '「修辞分析题必须用三步格式。」珀西瓦尔在黑板上写出模板，「第一步：命名手法，用英语或拉丁语术语，不能只描述现象而不命名。第二步：引用原文，用引号，引出拉丁语文本，不要只说"the repetition in the sentence"而不给出原文。第三步：分析效果，说明这种手法对读者产生什么影响，或者作者用这种手法想达到什么目的。」她停顿，「效果要具体。"makes the text more interesting"不是效果——"creates a sense of inevitability"，"emphasises the speaker\'s contempt"，"builds tension through contrast"，这才是效果。」她放下粉笔，「语言是最古老的魔法，巫师只是把它说得更大声一点——但修辞分析就是把那个魔法拆开来看，看它用的是什么结构。」'
      }
    ],
    lessonSummary: '四种修辞手法：simile（明喻，velut/ut 连接），metaphor（暗喻，直接替换），anaphora（反复，结构重复制造节奏），antithesis（对照，对立并置制造张力）。GCSE 答题用三步格式：识别手法并命名，引用拉丁原文，分析对读者的效果。效果描述要具体，避免模糊说法。',
    nextLessonPreview: '「下节课：无准备文本翻译训练。遇到没见过的文本，五步处理法——从通读到最终译文的系统流程。」'
  },

  39: {
    atmosphere: '讲台上放着一张没有见过的拉丁语段落打印稿，没有任何注释。珀西瓦尔教授把这张纸翻过来，字面朝下，然后转向黑板，写下数字 1 到 5。教室里有轻微的不安。',
    opening: '「GCSE 无准备文本翻译——你没有见过这段文字，没有词汇表，有的只是你的分析工具。」珀西瓦尔停顿，「不要盯着不认识的词。先从认识的开始。动词在哪里？主语是谁？把句法骨架搭起来，剩下的才是细节。」她指向黑板上的数字，「五步法。每次遇到无准备文本，按这五步走。」',
    keyPoints: [
      {
        point: '五步翻译法',
        blackboardQ: {
          type: 'formulas',
          label: '无准备文本翻译五步法',
          lines: [
            '1. 通读全文，获取大意',
            '2. 找主句动词（时态/语气/人称）',
            '3. 识别主语（主格名词/代词）',
            '4. 处理从句和分词短语',
            '5. 翻译并调整语序（拉丁语 vs 英语）'
          ]
        },
        question: {
          leadIn: '「遇到一个你不认识的拉丁词。」珀西瓦尔停顿，「你有三个选项：直接跳过；从词根和上下文推断意思；按英语语序猜。」她在黑板上写下这三个选项，「哪个是最优先的策略？」她停顿，「注意：拉丁语有大量词汇进入了英语，词根分析往往能给出方向。上下文——这个词在句子里什么位置，它的格是什么——也能限制它的含义范围。」',
          text: '「遇到不认识的拉丁词，最优先的策略是？」',
          options: ['跳过这个词，继续翻译其他部分', '从词根和上下文推断意思', '按英语语序猜测'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「词根分析加上下文是最可靠的策略。跳过会留下空白，影响后面的理解；按语序猜没有依据。词根往往能给出词义方向，上下文里的格和句法位置能进一步限制可能的意思。两者结合，通常能得到合理的推断。」',
        contextWrong: '「从词根和上下文推断。」她重复，不带感情，「跳过会留下句子空缺，影响整体理解；按英语语序猜会产生错误的句法判断。拉丁语词汇和英语有大量词根重叠，配合上下文分析，推断通常是可行的。」',
        blackboard: {
          type: 'formulas',
          label: '五步翻译法（含关键动作）',
          lines: [
            '1. 通读  → 大意方向，不求精确',
            '2. 动词  → 时态/语气/人称/数',
            '3. 主语  → 主格，和动词人称数一致',
            '4. 从句  → 疑问词/关系词/虚拟语气信号',
            '5. 调序  → 拉丁动词末位 → 英语提前'
          ]
        }
      },
      {
        point: '常见陷阱：形容词远离名词',
        blackboard: {
          type: 'formulas',
          label: '拉丁语两大语序陷阱',
          lines: [
            '陷阱一：形容词远离名词',
            '  Magnus vir in foro ambulabat.',
            '  magnus 修饰 vir，尽管中间有介词短语',
            '  → 看格数性一致，不看位置',
            '',
            '陷阱二：动词夹在两名词之间',
            '  Dux milites laudavit.',
            '  动词在中间，主语 dux，宾语 milites',
            '  → 看格，不看语序'
          ]
        },
        context: '「拉丁语的语序是自由的，这是最大的翻译陷阱。」珀西瓦尔在黑板上写下两个例句，「第一个陷阱：Magnus vir in foro ambulabat。Magnus 和 vir 不相邻——中间有 in foro。但 magnus 是阳性主格单数，和 vir 的格数性完全一致，它修饰的就是 vir，不是 foro。」她停顿，「规则：形容词不靠位置识别，靠格数性一致识别。」她写下第二个例句，「第二个陷阱：Dux milites laudavit。动词 laudavit 在最后，dux 是主格——将领，milites 是宾格——士兵们。将领称赞了士兵们。不要因为 milites 在前面就以为它是主语——格告诉你，主格才是主语。」她转身，「翻译拉丁语：看格，不看位置。」'
      },
      {
        point: '词根推断：拉丁→英语的词根线索',
        blackboard: {
          type: 'formulas',
          label: '常见拉丁词根（英语对应）',
          lines: [
            'port- = 携带  → portable, transport',
            'scrib-/script- = 写  → script, describe',
            'aud- = 听  → audio, audience',
            'vid-/vis- = 看  → video, vision',
            'duc- = 引领  → duke, educate, deduce',
            'mit-/miss- = 送  → mission, transmit'
          ]
        },
        context: '「超过 60% 的英语词汇来自拉丁语或经由拉丁语传入。」珀西瓦尔在黑板上列出常见词根，「你们遇到不认识的拉丁词，先把它拆成词根——前缀、词根、后缀。看词根是否出现在你认识的英语词里。」她停顿，「portare——携带，对应英语 portable，transport，import。即使你没背过 portare，如果你认识这些英语词，你能推断 portare 和携带有关。」她转身，「这不是保证，是方向。推断之后还要结合上下文——这个词在句子里什么位置，它的格是什么，它附近的词是什么意思，能不能印证你的推断。两者配合，推断的准确率会显著提高。无准备文本翻译考查的不只是词汇量，也考查分析能力。」'
      },
      {
        point: '语序调整：从拉丁语到英语',
        blackboard: {
          type: 'formulas',
          label: '拉丁语 vs 英语语序调整',
          lines: [
            '拉丁语：主语 + 宾语 + 动词（SOV）',
            '  Dux milites laudavit.',
            '',
            '英语：主语 + 动词 + 宾语（SVO）',
            '  The commander praised the soldiers.',
            '',
            '从句：找引导词 → 找从句边界 → 整体移位',
            '不要逐词直译 → 先理解结构，再用英语重述'
          ]
        },
        context: '「翻译的最后一步：把拉丁语的句法结构转换成英语的语序。」珀西瓦尔在黑板上写出对比，「拉丁语动词通常在句尾，英语动词在主语后面。翻译时要把动词提前，放到主语后面。」她停顿，「从句的处理更复杂——关系从句、目的从句、间接疑问句，在拉丁语里可以嵌套，翻译时需要先确认从句的范围，找到主句和从句的边界，再分别翻译，最后用英语的方式重新拼合。」她放下粉笔，「逐词直译是最常见的错误——产生的英语不通顺，丢失句法关系，也失去分数。理解拉丁语的结构，用英语重述这个结构——不是翻译每个词，是翻译整个意思。」'
      }
    ],
    lessonSummary: '无准备文本翻译用五步法：通读大意、找主句动词、识别主语、处理从句分词、翻译并调整语序。两大陷阱：形容词靠格数性识别而非位置，动词末位不代表语义中心。遇到不认识的词，优先用词根分析加上下文推断。翻译时理解结构后用英语重述，而非逐词直译。',
    nextLessonPreview: '「下节课：奥古斯都时代的文化与历史背景。三位作家，三种与政治的关系，以及为什么文学在那个时代是政治性的。」'
  },

  40: {
    atmosphere: '黑板上画着一条时间轴：27 BC 在左端，14 AD 在右端，中间标注着三个名字：Vergilius，Horatius，Ovidius。三个名字上方各有一条不同长度的线段，代表他们活跃的年代。珀西瓦尔教授站在时间轴旁，粉笔悬在手中，没有落下来。',
    opening: '「奥古斯都在位期间，罗马文学达到了它的黄金时代。」珀西瓦尔转身，「这不是巧合。奥古斯都知道文学的力量，他有意地资助诗人——通过他的朋友梅塞纳斯，Gaius Maecenas，把文学变成帝国建设的工具之一。」她停顿，「但文学不总是听话的。今天我们看三位作家：一个完全服务于帝国意识形态，一个保持了独立，第三个被流放。」她在黑板上三个名字旁各画了不同的符号，「他们的故事告诉你：在任何时代，文学与权力的关系都不简单。」',
    keyPoints: [
      {
        point: '三位作家与政治的关系',
        blackboardQ: {
          type: 'formulas',
          label: '奥古斯都时代三大作家',
          lines: [
            '作家        代表作          与政治的关系',
            '---------  ------------   -------------------',
            'Vergilius  Aeneis（史诗）  亲帝国，为统治立说',
            'Horatius   Carmina（颂歌） 独立，颂扬但保距离',
            'Ovidius    Metamorphoses  被流放，与政治冲突'
          ]
        },
        question: {
          leadIn: '「三位作家，三种命运。」珀西瓦尔在黑板上指向第三行，「奥维德——Publius Ovidius Naso——写了《爱的艺术》，Ars Amatoria，一部教人如何追求爱情的诗歌手册。奥古斯都正在推行道德改革，鼓励婚姻和生育，《爱的艺术》和这个政策正面冲突。」她停顿，「加上另一个至今不明确的原因——carmen et error，一首诗和一个错误——奥古斯都在公元 8 年把他流放到黑海边的 Tomis，今天的罗马尼亚。他再也没有回来。」她转身，「奥古斯都时代哪位作家被流放？」',
          text: '「奥古斯都时代哪位作家被流放？」',
          options: ['维吉尔（Vergilius）', '贺拉斯（Horatius）', '奥维德（Ovidius）'],
          answer: 2
        },
        contextRight: '「不错。」她停了一秒，「奥维德，公元 8 年被流放至 Tomis。原因：《爱的艺术》与奥古斯都道德政策冲突，加上另一个不明确的个人原因。他在流放地继续写作——《哀歌》和《书信》，恳求被召回，但奥古斯都和继任者提比略都没有赦免他。」',
        contextWrong: '「奥维德——Ovidius。」她重复，不带感情，「维吉尔和贺拉斯都是奥古斯都赞助的诗人，他们的关系比较和谐。奥维德因《爱的艺术》与道德政策冲突被流放，公元 8 年，没有被召回。」',
        blackboard: {
          type: 'formulas',
          label: '三作家对比（详）',
          lines: [
            'Vergilius  Aeneis   服务帝国意识形态',
            '           → Aeneas 到罗马，帝国天命',
            'Horatius   Carmina  颂扬奥古斯都但保持诗性独立',
            '           → "carpe diem"，个人与时代并存',
            'Ovidius    Metamorphoses → 被流放（8 AD）',
            '           → Ars Amatoria 与道德政策冲突'
          ]
        }
      },
      {
        point: '维吉尔：《埃涅阿斯纪》与帝国意识形态',
        blackboard: {
          type: 'formulas',
          label: '维吉尔与帝国',
          lines: [
            '维吉尔（70–19 BC）',
            '代表作：Aeneis（12卷史诗）',
            '',
            '核心主题：罗马天命（fatum）',
            'Aeneas 从特洛伊逃出 → 建立罗马',
            '→ 奥古斯都是这条天命的终点',
            '',
            '梅塞纳斯赞助，死前未完成，留遗嘱烧毁',
            '奥古斯都命令保留——政治意志胜过作者意愿'
          ]
        },
        context: '「维吉尔的《埃涅阿斯纪》是奥古斯都时代最重要的政治文本，同时也是最伟大的拉丁语文学。」珀西瓦尔平静地说，「Aeneas 从特洛伊战争后的废墟里逃出，历经艰险来到意大利，建立了后来成为罗马的城市。维吉尔把这段神话历史写成一条命中注定的线索，线索的终点是奥古斯都的统治——这是命中注定的，是神明的旨意，是历史的方向。」她停顿，「维吉尔死前认为史诗未完成，留下遗嘱要烧毁手稿。奥古斯都命令保留并出版。这件事本身就很说明问题——作者的意志和政治的需要，谁更强大。」她转身，「但这并不意味着《埃涅阿斯纪》只是宣传。它是复杂的——Aeneas 的悲剧，Dido 的死，Turnus 的命运，都不是简单的胜利叙事。维吉尔在服务帝国的同时，也在质疑代价。」'
      },
      {
        point: '贺拉斯与奥维德：两种与权力的距离',
        blackboard: {
          type: 'formulas',
          label: '贺拉斯 vs 奥维德',
          lines: [
            '贺拉斯（65–8 BC）',
            '  Carmina / Odes：抒情诗',
            '  carpe diem = 把握今日',
            '  → 接受赞助，保持个人诗性空间',
            '',
            '奥维德（43 BC–17/18 AD）',
            '  Metamorphoses：变形故事，15卷',
            '  Ars Amatoria：爱情指南（致流放）',
            '  → 8 AD 被流放 Tomis，终身未归'
          ]
        },
        context: '「贺拉斯接受了梅塞纳斯的赞助，写了大量颂扬奥古斯都的诗，但他的声音里始终有一种个人性——carpe diem，把握今日，享受人生的当下。」珀西瓦尔在黑板上写下这个短语，「这不是政治性的，这是哲学性的，贺拉斯在政治庇护下保住了诗性空间。」她停顿，「奥维德则不同。他的《变形记》是一部神话大百科，讲述从混沌到奥古斯都时代的所有变形故事，规模宏大但不特别政治化。问题出在《爱的艺术》——在奥古斯都推行婚姻和生育政策的时候，这部作品的存在本身就是一种挑衅。」她停顿，「他在流放地写的《哀歌》和《黑海书信》里恳求被召回，承认错误，但没有被赦免。语言是最古老的魔法，巫师只是把它说得更大声一点——奥维德把它说得太大声了，声音传到了权力不允许的地方。」'
      },
      {
        point: '奥古斯都时代的历史背景与文学赞助',
        blackboard: {
          type: 'formulas',
          label: '奥古斯都时代背景',
          lines: [
            '奥古斯都（27 BC–14 AD）',
            '  第一皇帝，结束内战，建立帝制',
            '  表面保留共和制度，实质独揽权力',
            '',
            '梅塞纳斯（Maecenas）',
            '  奥古斯都的亲信，文学赞助人',
            '  资助维吉尔、贺拉斯、其他诗人',
            '  → maecenas 成为"赞助人"的代名词'
          ]
        },
        context: '「奥古斯都是罗马历史上的一个分水岭。」珀西瓦尔在黑板上写下时间轴两端的年份，「公元前 27 年，元老院授予他 Augustus 头衔——这个词的意思是受人尊敬的，几乎带有神圣性。但他对外宣称自己只是 princeps，第一公民，不是国王，不是独裁者。他保留了共和的外壳，把权力装进去。」她停顿，「梅塞纳斯是他赞助文学的工具。梅塞纳斯资助维吉尔和贺拉斯，给他们土地和金钱，让他们有条件创作——这不是慈善，这是文化政策。用文学建构帝国的合法性，用诗歌传播罗马天命的观念。」她放下粉笔，「今天 maecenas 这个词在欧洲语言里成了赞助人的代名词——这是他留下的语言遗产。历史人物变成了普通词汇，这也是一种变形。」'
      }
    ],
    lessonSummary: '奥古斯都时代（27 BC–14 AD）是拉丁文学黄金时代。梅塞纳斯作为赞助人资助诗人，将文学纳入帝国建设。三大作家：维吉尔的《埃涅阿斯纪》为帝国天命立说，贺拉斯接受赞助但保持诗性独立，奥维德因《爱的艺术》与道德政策冲突，公元8年被流放至Tomis，终身未归。',
    nextLessonPreview: '「下节课：GCSE 综合复习——从语法到文本分析，整理考试所需的核心知识点框架。」'
  },

  41: {
    atmosphere: '黑板上写着一个长句，足有三行，从左写到右，中间没有停顿符号。珀西瓦尔教授站在句子旁边，一言不发，等学生自己看。西塔楼的风从窗缝漏进来，蜡烛火苗轻轻一偏。',
    opening: '「你们看着这个句子。」珀西瓦尔指着黑板，「五年级的学生第一次看到这种句子，通常会做什么？」她停顿，没有等回答，「从头开始读，试图一个词一个词翻译，读到中间就迷失了。」她拿起粉笔在句子第一个动词下面画了一条横线，「错误的起点。正确的策略从这里开始——找动词。」她转向学生，「今天我们学难句结构分析。方法只有一套，每句话都适用。」',
    keyPoints: [
      {
        point: '第一步：找主动词，确定句子主干',
        blackboardQ: {
          type: 'formulas',
          label: '难句分析第一步',
          lines: [
            '示例句：',
            'Caesar, qui Galliam per decem annos',
            'multis cum laboribus vicerat,',
            'Romam tandem regressus,',
            'triumphum a senatu petiit.',
            '',
            '任务：找出主动词（主句谓语）'
          ]
        },
        question: {
          leadIn: '「先不要管从句、修饰语、插入语。」珀西瓦尔把句子分段标注，「qui Galliam vicerat 是一个关系从句——先跳过。regressus 是分词——先跳过。Romam / tandem / a senatu 是各种修饰——先跳过。」她把剩下的词圈起来：Caesar 和 petiit，「现在你看到什么？Caesar petiit——凯撒请求。这是句子的骨架，两个词，主语加谓语，其他全是血肉。」她转身，「翻译复杂句的起点永远是：找主动词。」',
          text: '「分析难句时，第一步应该做什么？」',
          options: ['从第一个词开始逐词翻译', '先找出主动词（主句谓语）', '先查所有生词的词义'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「主动词是句子的核心。找到它，你就找到了骨架——其他所有成分都是围绕这个骨架附加的。从句、分词、状语，都可以之后一层层拆解。」',
        contextWrong: '「主动词。」她重复，不带感情，「从第一个词翻译，在拉丁语里几乎没用——动词通常在最后，而且从句和修饰语会把它和主语隔开很远。查生词在主动词之前也是在做无用功——你不知道句子要说什么，查了词义也放不进去。」',
        blackboard: {
          type: 'formulas',
          label: '四步分析法',
          lines: [
            '第一步：找主动词（主句谓语）',
            '第二步：找主语（与主动词一致）',
            '第三步：识别从句边界',
            '第四步：翻译各层，由内向外组合',
            '',
            'Caesar [petiit] ← 主干',
            '  → [qui... vicerat] 关系从句',
            '  → [regressus] 分词短语',
            '  → [a senatu] 施动者夺格'
          ]
        }
      },
      {
        point: '第二步：识别从句边界——关系代词、连词、分词',
        blackboard: {
          type: 'formulas',
          label: '从句边界标志词',
          lines: [
            '关系代词：qui / quae / quod + 变格',
            '  → 引导关系从句',
            '',
            '连词：cum / dum / quia / ut / si...',
            '  → 引导状语从句（时间/原因/目的/条件）',
            '',
            '分词：（动词 + -ns / -tus / -sus...）',
            '  → 不引导从句，但有自己的宾语和状语',
            '',
            '识别后：用方括号把从句括起来，再看主干'
          ]
        },
        context: '「找到主动词之后，」珀西瓦尔在黑板上用方括号把关系从句 qui Galliam vicerat 括起来，「现在这个句子的结构变得可见了。」她又把分词短语 Romam tandem regressus 括起来，「括号内的部分是附加信息——它们对主干有修饰或说明的关系，但它们不是你最先要翻译的。」她转身，「分析长句，永远先用方括号把从句和分词短语标出来。方括号数量等于句子的复杂度——三个括号说明这句话有三层结构，你需要一层一层地处理，而不是一口气从左到右。」'
      },
      {
        point: '第三步：语序调整——从拉丁语到中文的映射',
        blackboard: {
          type: 'formulas',
          label: '拉丁语 → 中文语序调整',
          lines: [
            '拉丁语：SOV（主-宾-谓）',
            '中文：  SVO（主-谓-宾）',
            '',
            '拉丁：Caesar Galliam vicit.',
            '逐词：凯撒 高卢 征服了',
            '中文：凯撒征服了高卢。  ← 调整语序',
            '',
            '关系从句：通常前置或改为定语',
            '分词短语：通常改为汉语"……之后/……时"',
            '',
            '原则：先理解逻辑，再用目标语言重建表达'
          ]
        },
        context: '「翻译不是替换单词。」珀西瓦尔把黑板上的例句和它的中文译文并排写出，「拉丁语主语在前，宾语在中，动词在末尾——这个顺序和中文差异不大，但关系从句的位置完全不同。」她用箭头标出移动方向，「qui Galliam vicerat——拉丁语把关系从句放在所修饰名词旁边，中文把它提到前面变成定语：\'征服了高卢的凯撒\'。」她停顿，「语序调整的核心原则：先把拉丁语的逻辑完全理解，然后用中文重新建构，而不是把词一一对应地排过去。」'
      },
      {
        point: '逻辑分析：从句与主句的语义关系',
        blackboard: {
          type: 'formulas',
          label: '从句与主句的关系类型',
          lines: [
            '定语关系（qui）：修饰名词，说明"哪一个"',
            '时间关系（cum）：说明"何时"',
            '原因关系（quia）：说明"为什么"',
            '目的关系（ut）：说明"为了什么"',
            '条件关系（si） ：说明"在什么条件下"',
            '',
            '每种关系决定翻译时的用词：',
            '  → 因为 / 当 / 为了 / 如果 / ……的'
          ]
        },
        context: '珀西瓦尔靠在讲台旁，「识别从句的类型，不只是语法题——它决定你用哪个汉语连词翻译。」她逐一指向黑板上的关系类型，「cui 引导的从句说明人或物的属性——用\'的\'或\'他\'。cum 引导的从句说明时间——用\'当……时\'或\'……之后\'。」她停顿，「翻译的准确性首先是逻辑的准确性——你必须知道这个从句在说\'原因\'还是\'条件\'，才能选对汉语词。」她拿起词典，「遇到不熟悉的连词，先查它的功能，再查它的词义。顺序不要颠倒。」'
      }
    ],
    lessonSummary: '难句分析的方法是固定的四步：一、找主动词，确定句子骨架；二、识别从句和分词短语边界，用括号标注；三、从最内层开始理解每个从句的含义；四、按目标语言语序重建表达。拉丁语到中文的主要语序调整：关系从句提前为定语，分词短语改为"……时/之后"的状语。从句类型（定语/时间/原因/目的/条件）决定汉语连词选择。',
    nextLessonPreview: '「下节课：词义辨析与语境推断。同一个拉丁词，在不同文本、不同语境里可以有截然不同的含义——你需要学会判断。」'
  },

  42: {
    atmosphere: '黑板左侧写着一个词：gravis。右侧写着六个中文词：沉重的、严肃的、重大的、严重的、有分量的、缓慢的。珀西瓦尔教授站在两列中间，细头钢笔夹在手指间，等着学生数清楚。',
    opening: '「这是同一个拉丁词。」珀西瓦尔指着黑板，「六个中文翻译。哪一个是正确的？」她扫视一遍，「所有的都是，取决于语境。」她在黑板上方写下：词义辨析，「词典给你所有可能的意义——选哪一个，是你的工作，不是词典的工作。今天我们学这个判断过程。」',
    keyPoints: [
      {
        point: '多义词的词义层次：核心义与引申义',
        blackboardQ: {
          type: 'formulas',
          label: 'gravis 的词义层次',
          lines: [
            '核心义：物理上的"沉/重"',
            '  → 引申：重要的、有分量的',
            '  → 引申：严肃的（态度之重）',
            '  → 引申：严重的（程度之重）',
            '  → 引申：令人不快的（负担之重）',
            '  → 在音乐中：缓慢的、低沉的',
            '',
            '判断方法：看语境中的名词/动词是什么'
          ]
        },
        question: {
          leadIn: '「词典条目下的每一个义项，都不是随机的。」珀西瓦尔在黑板上把六个中文词用箭头连向"核心义"，「它们都从同一个根意思来——物理的重量。沉重的石头是 gravis，严肃的神情是 gravis（表情像承受了重量），严重的错误是 gravis（后果的重量），甚至令人不快的气味也是 gravis（难以承受的负担）。」她停顿，「知道这个核心义，你就能理解引申义不是随机跳跃，是有逻辑的延伸。」她转身，「判断用哪个意思，看它修饰的是什么名词。」',
          text: '「"gravis vulnus"（严重的伤口），gravis 在这里最适合翻译为？」',
          options: ['沉重的（物理重量）', '严重的（程度）', '缓慢的（音乐术语）'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「vulnus 是伤口，伤口没有物理重量，也不是音乐——所以 gravis 在这里是引申义：严重的、程度深的。修饰词的选义要由被修饰词的性质决定。」',
        contextWrong: '「严重的。」她重复，不带感情，「vulnus 是伤口，伤口没有物重，也不是声音。gravis 在这个搭配里只能是程度义：这是一处严重的伤，而不是一块沉的石头或一段低沉的旋律。看被修饰词，再选义项。」',
        blackboard: {
          type: 'formulas',
          label: '词义选择三步法',
          lines: [
            '1. 确认多义词的核心义',
            '2. 看被修饰词（或动词宾语）的性质',
            '3. 选择与被修饰词搭配合理的引申义',
            '',
            'gravis + 具体物体 → 沉重的',
            'gravis + 行为/表情 → 严肃的',
            'gravis + 程度名词 → 严重的',
            'gravis + 感受名词 → 令人不快的'
          ]
        }
      },
      {
        point: '语境推断：句子上下文与文本类型',
        blackboard: {
          type: 'formulas',
          label: '语境推断的两个维度',
          lines: [
            '维度一：句子内部语境',
            '  看同一句话里的其他词',
            '  看动词与宾语的关系',
            '  看修饰词与被修饰词的匹配',
            '',
            '维度二：文本类型语境',
            '  军事叙述 → 战术术语优先',
            '  哲学文本 → 抽象义优先',
            '  演讲文本 → 修辞义优先',
            '  诗歌 → 情感色彩义优先'
          ]
        },
        context: '「同一个词，放在西塞罗的演讲里和放在凯撒的战争记录里，选义标准不同。」珀西瓦尔在黑板上写了两个例句，「一个是演讲，一个是军事报告——它们用了同一个词 gravis，但语境告诉你选哪个义项。」她停顿，「推断词义不只是查词典——词典给你清单，语境告诉你位置。读懂文本类型，先判断作者的目的是说服、描述、还是分析，这个判断会缩小词义选择的范围。」'
      },
      {
        point: '文化对应：无对应概念时的处理',
        blackboard: {
          type: 'formulas',
          label: '无对应概念的处理策略',
          lines: [
            '例：virtus（拉丁）',
            '  字面义：男子气概（vir = 男人）',
            '  罗马义：勇气、卓越、公民美德',
            '  ≠ 英语 virtue（道德品质）',
            '  ≠ 中文"美德"（道德层面）',
            '',
            '处理方法：',
            '  1. 用注释解释文化含义',
            '  2. 保留原词 + 括注',
            '  3. 选最接近的目标语词 + 说明局限'
          ]
        },
        context: '珀西瓦尔放下粉笔，「有些拉丁词没有对应的翻译——不是因为翻译不够好，而是因为概念本身属于那个文化。」她在黑板上写下 virtus，「这个词在罗马男性公民那里，意思是：他作为男人应有的全部卓越——勇气、忠诚、决断、荣誉。中文\'美德\'只捕捉到道德层面，英语 virtue 也有同样的问题。」她停顿，「遇到这种文化特有词，翻译时有三个选择：用注释解释，保留原词并加括注，或者选择最接近的词并明确说明它的局限。你选哪种取决于你的翻译目的——是给专业读者还是一般读者。」'
      },
      {
        point: '常见易混词义对：词典之外的辨析',
        blackboard: {
          type: 'formulas',
          label: '高频易混词对',
          lines: [
            'timor（恐惧）≠ metus（忧虑/预期的恐惧）',
            'amor（爱）≠ caritas（珍爱/慈爱）',
            'felix（幸运的）≠ beatus（幸福的/福祉）',
            'vis（力量/暴力）≠ potestas（权力/职权）',
            'patria（祖国/出生地）≠ res publica（国家体制）',
            '',
            '这些词在词典里看起来相近',
            '但在文本里含义和情感色彩截然不同'
          ]
        },
        context: '「词典里的同义词不是真正的同义词。」珀西瓦尔指着黑板，「timor 和 metus 都翻译成\'恐惧\'，但 timor 是即刻的惊惧，metus 是对即将发生之事的预期恐惧——更接近\'忧虑\'。」她停顿，「这种细微区别在普通阅读里也许无关紧要，但在 A-Level 的文学评论里，你如果混用，会失分，因为你在误读作者的情感设计。」她转向学生，「建立词义辨析的意识，不是为了考试——而是为了真正理解一个用词精确的作者在说什么。」'
      }
    ],
    lessonSummary: '词义辨析的核心工具是语境，而非词典。选择多义词的正确义项需要两个维度：句子内部语境（被修饰词的性质、动词宾语的搭配）和文本类型语境（军事/哲学/演讲/诗歌各有偏向的义项）。无对应概念的文化特有词需要注释或括注处理，而非强行翻译。高频易混词对（timor/metus、vis/potestas等）的区别体现在情感色彩和使用场合，词典无法完全区分，需要阅读积累。',
    nextLessonPreview: '「下节课：历史语境对文本理解的影响。同一句话，在不同的历史时刻，对不同的听众，含义可以截然不同。」'
  },

  43: {
    atmosphere: '黑板上写着一句拉丁文：O tempora! O mores! 旁边是两个日期：公元前63年，1963年。珀西瓦尔教授站在日期之间，没有粉笔，手放在身侧。西塔楼的蜡烛在风中轻微摇动，学生笔记本打开，等待。',
    opening: '「O tempora! O mores!」珀西瓦尔用正常音量说出这句话，「这是西塞罗。公元前63年。他在元老院面对喀提林，对着全场大喊：\'时代啊！风俗啊！\'他在用两个感叹词谴责整个时代的堕落。」她停顿，「现在告诉我，如果你在1963年的报纸上读到这句话，引用自一篇政论文章，它还有同样的意思吗？」她等了三秒，「不一样了。语境变了，意思的重量变了，甚至是否讽刺都变了。这就是今天的课题。」',
    keyPoints: [
      {
        point: '历史语境：写作时间与接受时间的双重定位',
        blackboardQ: {
          type: 'formulas',
          label: '文本的双重历史坐标',
          lines: [
            '坐标一：写作语境',
            '  作者是谁？何时写？为谁写？',
            '  当时的政治/社会背景是什么？',
            '',
            '坐标二：接受语境',
            '  读者何时读？带着什么期望？',
            '  这个文本此后被怎样引用/误用？',
            '',
            'O tempora! O mores! 在西塞罗那里是严肃的政治控诉',
            '在后世引用中有时是自嘲、有时是讽刺'
          ]
        },
        question: {
          leadIn: '「理解一篇拉丁文文本，你需要两个时间坐标。」珀西瓦尔在黑板上画了一条时间线，「第一个：作者写作时的历史时刻——他的听众是谁，他在回应什么事件，他的处境是什么。第二个：这篇文本之后的接受历史——它被什么人引用，在什么场合，为了什么目的。」她用粉笔点着西塞罗那句话，「你们看到这句话，默认是把它放在第一个坐标里——公元前63年，元老院，政治危机。但如果我问你这句话在今天的用法，你需要移到第二个坐标。」',
          text: '「理解拉丁文本最基本的历史定位要求是什么？」',
          options: ['知道作者的生卒年份', '同时把握写作语境与接受语境', '找到最新的学术翻译版本'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「写作语境决定作者的意图，接受语境决定文本被赋予的意义。两个都忽略不了——只看写作语境会看不到文本的后世生命，只看接受语境会误读原作者的意图。」',
        contextWrong: '「写作语境与接受语境。」她重复，不带感情，「生卒年份是入门信息，不是理解工具。找翻译是实用手段，不是定位方法。你需要的是：知道这个文本什么时候被写，为什么被写，然后知道它之后怎样被读，被谁读，被用来做什么——这两层坐标合在一起，才是完整的历史定位。」',
        blackboard: {
          type: 'formulas',
          label: '历史语境双坐标',
          lines: [
            '写作语境：作者 + 时间 + 受众 + 事件背景',
            '接受语境：传播 + 引用 + 重新诠释 + 当代意义',
            '',
            '分析步骤：',
            '  1. 确认写作时间和背景',
            '  2. 识别原始受众和写作目的',
            '  3. 追踪这个文本此后的主要用法',
            '  4. 区分哪些是原意，哪些是后人附加的'
          ]
        }
      },
      {
        point: '时代差异：概念的历史性——以 libertas 为例',
        blackboard: {
          type: 'formulas',
          label: 'libertas 的历史语义变迁',
          lines: [
            '罗马共和国：libertas',
            '  = 免于一人专制统治的自由',
            '  = 公民在法律下的平等地位',
            '  ≠ 个人自由（现代义）',
            '  ≠ 民主选举权（非罗马概念）',
            '',
            '奥古斯都时代：libertas 被重新诠释',
            '  = 从内战和动荡中解放',
            '  → 皇帝的宣传语言',
            '',
            '现代读者：容易用现代"自由"概念误读罗马文本'
          ]
        },
        context: '「Libertas——自由。」珀西瓦尔把这个词写在黑板正中，「这是罗马共和国最神圣的政治价值，也是被误读最多的拉丁词之一。」她停顿，「罗马人说的 libertas，核心是：免于任何一个人的专制统治。不是投票权，不是个人选择，不是现代意义上的自由主义——而是：共和国的集体权力对抗任何试图独大的个人。」她在黑板上写下一个箭头，「奥古斯都建立帝国之后，他反而继续使用 libertas 这个词，但含义变了——他把它变成\'从内战中解放\'。同一个词，完全不同的含义，时隔不过五十年。」她转向学生，「这就是为什么历史语境不可绕过。」'
      },
      {
        point: '文化概念：没有现代对应的罗马观念',
        blackboard: {
          type: 'formulas',
          label: '需要解释而非直译的文化概念',
          lines: [
            'pietas  = 对神/父/祖国的义务性虔敬',
            '         ≠ 英语 piety（宗教虔诚）',
            '',
            'gravitas = 凝重的气质与行为风度',
            '          ≠ 重力（physics）',
            '',
            'fides   = 信誉/信义/信任关系',
            '         ≠ faith（宗教信仰）',
            '',
            'otium   = 有价值的休闲/文学活动',
            '         ≠ 懒惰/无所事事'
          ]
        },
        context: '珀西瓦尔转向黑板，「罗马的核心价值观有几个词，翻译成任何现代语言都会失真。」她逐一指点，「pietas 在维吉尔那里是埃涅阿斯最重要的品质——但它不是\'虔诚\'，它是对所有高于自身的权威（父亲、神明、国家）的义务履行，即使要付出个人代价。」她停顿，「你们翻译时，遇到这些词，不要急着找中文对应词——先在注释里写清楚它的罗马文化含义，再选择一个近似的中文词，并加括注说明差异。」'
      },
      {
        point: '文本定位：如何查找写作背景',
        blackboard: {
          type: 'formulas',
          label: '建立历史语境的资源',
          lines: [
            '一手资料：古代作家的其他作品、书信、演讲',
            '二手资料：现代学术注释、历史语境研究',
            '',
            '检查清单：',
            '  ☐ 这篇文本写于哪个政治时期？',
            '  ☐ 作者当时的处境和立场？',
            '  ☐ 原始受众是谁（元老院/大众/皇帝）？',
            '  ☐ 文本类型（演讲/书信/史书/诗歌）？',
            '  ☐ 有无明显政治意图或赞助关系？'
          ]
        },
        context: '「历史背景不是猜出来的。」珀西瓦尔走向讲台边的书架，抽出一本学术注释，「专业版本的拉丁语文本，通常都有详尽的序言和脚注，告诉你写作背景、版本流传、关键词解释。」她把书放回去，「但更重要的是，你要知道从哪里查。」她列出黑板上的核实清单，「写作时期决定政治风险和言论边界。受众决定作者使用的修辞策略。文本类型决定你应该用什么分析框架。一篇演讲和一首诗，虽然可能表达相似的观点，分析方法和评价标准完全不同。」'
      }
    ],
    lessonSummary: '历史语境定位需要双重坐标：写作语境（作者、时间、受众、事件）和接受语境（后世引用与重新诠释）。概念的历史性是关键——libertas 在共和国时代和帝国时代含义不同，现代读者极易以现代自由概念误读。罗马文化特有词（pietas、gravitas、fides、otium）没有准确的现代对应，需要注释而非直译。建立历史语境需要检查：写作时期、作者立场、原始受众、文本类型、赞助关系。',
    nextLessonPreview: '「下节课：文本评注的写法。我们会讨论一个规范的学术评注包含哪些要素，以及如何组织一段评注使它既有学术价值又清晰可读。」'
  },

  44: {
    atmosphere: '黑板上贴着一张打印纸，上面是一段拉丁文，旁边已经有三行手写标注。珀西瓦尔教授站在黑板前，右手的细头钢笔在纸张空白处轻轻点了一下，什么也没说。',
    opening: '「你们看这段批注。」珀西瓦尔用手指沿着三行字扫过，「第一行：逐词翻译。第二行：指出了一个被动语态。第三行：问了一个关于历史背景的问题，但没有回答。」她放下钢笔，「这不是评注，这是笔记。评注要求你不仅识别，还要分析——你发现了什么，它意味着什么，作者为什么这样选择。」她在黑板上写下：Commentary，「今天学写法。」',
    keyPoints: [
      {
        point: '评注的四个要素：语言、结构、语境、效果',
        blackboardQ: {
          type: 'formulas',
          label: '学术评注四要素',
          lines: [
            '1. 语言分析',
            '   识别语法特征、词汇选择、修辞手法',
            '',
            '2. 结构分析',
            '   这句话在段落/文本中的位置和功能',
            '',
            '3. 历史/文化语境',
            '   背景信息对理解的影响',
            '',
            '4. 效果分析',
            '   作者的这个选择达到了什么目的？'
          ]
        },
        question: {
          leadIn: '「一段合格的评注，不是列清单。」珀西瓦尔在黑板上标出四个要素，「语言分析是基础——你必须能正确识别语法结构和修辞手法，否则分析建立在错误的前提上。结构分析问的是：这句话在哪里，它做了什么工作。历史语境补充背景信息。效果分析是评注的核心——你要回答\'作者为什么这样写，而不是那样写\'。」她停顿，「四个要素缺少哪一个，评注都不完整。但如果只有四个，没有贯穿它们的分析逻辑，仍然只是清单。」',
          text: '「以下哪一个是评注中最难也最核心的部分？」',
          options: ['正确识别语法结构（语言分析）', '解释作者选择的原因与效果（效果分析）', '提供准确的历史背景（历史语境）'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「识别语法和提供背景是基础工作，这些可以查。效果分析要求你做判断——为什么是这个词而不是近义词，为什么这个句式而不是另一个句式，这个选择在当时的受众那里会有什么反应。这才是学术分析的核心。」',
        contextWrong: '「效果分析。」她重复，不带感情，「语法识别和历史背景都有确定答案，可以验证对错。效果分析是解释性的——你要论证为什么作者做了这个选择，它产生了什么效果，这个判断需要你综合所有其他三个要素，然后做出有根据的推断。」',
        blackboard: {
          type: 'formulas',
          label: '评注四要素关系',
          lines: [
            '语言分析 ─────────────────┐',
            '结构分析 ─────────────────┤ → 效果分析',
            '历史语境 ─────────────────┘',
            '',
            '三个要素是证据，效果分析是论点',
            '评注 = 用证据支持一个关于作者意图的论点'
          ]
        }
      },
      {
        point: '评注示范：从识别到分析的步骤',
        blackboard: {
          type: 'formulas',
          label: '评注写作步骤',
          lines: [
            '步骤1：精确引用原文词语（斜体+原文）',
            '步骤2：语法/修辞识别（"这是一个…"）',
            '步骤3：语境说明（"在…背景下"）',
            '步骤4：效果分析（"这个选择…因为…"）',
            '',
            '示例：',
            '"patientia nostra（我们的忍耐）中的复数',
            'nostra（我们的）将西塞罗个人的指控转化',
            '为全体元老院的集体声音，增强了政治压力，',
            '使喀提林无法将其视为个人恩怨。"'
          ]
        },
        context: '「让我演示一段评注怎么写。」珀西瓦尔转向黑板上贴的文本，指着一个词，「patientia nostra——\'我们的忍耐\'。」她开始说话，同时写下，「第一步：引用原词，标出你要分析的对象。第二步：识别——nostra 是第一人称复数属格，不是单数 mea。第三步：语境——西塞罗在发表公开演讲，面对元老院全体。第四步：效果——这个复数代词把他个人的指控变成了整个元老院的集体声音，意味着无论你怎样对付我一个人，你面对的是所有人。」她停顿，「四步完成，这才是一段评注，而不是笔记。」'
      },
      {
        point: '文学评价：如何提出有支撑的判断',
        blackboard: {
          type: 'formulas',
          label: '有效的文学评价结构',
          lines: [
            '无效：这段写得很好，用了很多修辞手法。',
            '',
            '有效：西塞罗在第三行用 tricolon 结构',
            '     （veni, vidi, vici 类型的三段排列）',
            '     制造了一种不可阻挡的节奏感，',
            '     使听众在情绪上认同结论',
            '     早于逻辑说服完成。',
            '',
            '有效评价 = 具体手法 + 具体效果 + 具体原因'
          ]
        },
        context: '珀西瓦尔站定，「文学评价里最常见的错误是泛化。\'写得很好\'、\'非常有力\'、\'令人印象深刻\'——这些词什么信息都没有。」她停顿，「有效的评价是：这个作者在这个地方用了这个手法，产生了这个效果，原因是……然后你说出原因。」她指着黑板上的示例，「具体到修辞手法的名称，具体到它出现在哪一行，具体到它对读者/听众产生什么影响，为什么是这种影响而不是另一种。」她停顿，「\'具体\'是评注的根基。你越具体，你的判断越有说服力。」'
      },
      {
        point: '学术规范：引用、注释与格式',
        blackboard: {
          type: 'formulas',
          label: '学术评注格式规范',
          lines: [
            '引用原文：斜体拉丁语，正文中括注行号',
            '  → Cicero, In Catilinam I.1',
            '',
            '学术引用格式（标准）：',
            '  作者. 书名, 卷.章.行.',
            '  → Verg. Aen. 1.1 （维吉尔《埃涅阿斯纪》）',
            '',
            '注释用途：',
            '  → 语法说明（替代正文过于技术的内容）',
            '  → 参考文献（支持你的历史背景说明）',
            '  → 替代翻译（当你选择一种有争议的译法时）'
          ]
        },
        context: '「最后，学术规范。」珀西瓦尔把细头钢笔搁回桌上，「引用拉丁文原文时，斜体，并注明出处——作者、作品、卷章行，用标准缩写。不要引用原文后立刻跳到分析——先给翻译，再给分析。」她停顿，「注释不是用来填字数的。注释放的是两类内容：一，过于技术性的语法说明，放在正文里会打断论证流；二，对你的历史背景说明有支撑的参考文献。」她转向学生，「规范是为了让读者看清楚你的逻辑，而不是为了显示你读了多少书。」'
      }
    ],
    lessonSummary: '学术文本评注包含四个要素：语言分析（识别语法和修辞手法）、结构分析（文本位置与功能）、历史语境（背景信息）、效果分析（作者选择的目的和效果）。效果分析是核心，它要求综合其他三个要素提出有论据的判断。写作步骤：精确引用→识别→语境→效果分析。有效的文学评价要具体到手法名称、出现位置、对受众的影响及其原因，避免泛化表述。引用格式遵循标准缩写（Cic. Cat. 1.1 等），注释用于技术性语法说明和参考文献。',
    nextLessonPreview: '「下节课：GCSE真题训练。我们会处理四种题型——翻译、语法分析、综合理解、文学评论——每种有不同的答题策略。」'
  },

  45: {
    atmosphere: '黑板分成四格，每格顶部写着一种题型：Translation / Grammar / Comprehension / Literary Comment。珀西瓦尔教授站在格子中间，右手拿着粉笔，视线扫过学生。窗外是五年级五月底的光，考试季的光。',
    opening: '「GCSE考试有四种题型。」珀西瓦尔指向黑板四格，「翻译、语法、综合理解、文学评论。它们考的不是同一件事——每种题型要求不同的策略，用同一种策略对付所有题型是最常见的错误。」她停顿，「今天我们依次过一遍。不是讲新知识，是讲怎么用你已有的知识。」',
    keyPoints: [
      {
        point: '题型一：翻译——准确优先于流畅',
        blackboardQ: {
          type: 'formulas',
          label: '翻译题答题原则',
          lines: [
            '核心原则：准确 > 流畅',
            '',
            '步骤：',
            '1. 通读全句，找主动词和主语',
            '2. 识别从句边界，标记修饰成分',
            '3. 先译主干，再填修饰',
            '4. 检查格与动词人称/时态是否匹配',
            '5. 用中文通顺重写（不超过原文含义）',
            '',
            '失分点：漏译成分 / 时态错误 / 格理解错误'
          ]
        },
        question: {
          leadIn: '「翻译题每一分都是精确的一分。」珀西瓦尔在黑板上画了一个评分表格，「大多数考试的翻译分段评分——每个语法点都有对应分数。漏译一个从句失一个区间的分，时态错误失另一个区间的分。」她停顿，「这意味着即使你不能翻译一句话的全部，你也要尽量保住你能翻译的每一个部分，而不是因为一个难词就放弃整句。」她转向学生，「翻译题最常见的失分原因是什么？」',
          text: '「翻译题最常见的失分原因是？」',
          options: ['翻译文字不够优美', '漏译成分或时态/格理解错误', '没有使用专业术语'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「文字是否优美在翻译题里几乎不影响评分——准确性才影响。漏译从句、搞错时态、把与格当宾格——这些是精确失误，每一个都对应失分。专业术语在翻译题里也不需要，那是语法题和文学评论题的要求。」',
        contextWrong: '「漏译成分和时态/格错误。」她重复，不带感情，「翻译题的评分标准是精确性，不是文学性。你的翻译可以读起来有点生硬，只要含义准确，每个语法成分都对应上了，就能拿分。最危险的是：遇到难词就跳过，或者猜测格/时态而不加检查。」',
        blackboard: {
          type: 'formulas',
          label: '翻译题自检清单',
          lines: [
            '☐ 每个动词的人称、数、时态、语态 — 译出了？',
            '☐ 每个名词/代词的格 — 对应翻译了？',
            '☐ 每个从句 — 都翻了？',
            '☐ 分词短语 — 没有当形容词或省略？',
            '☐ 主语 — 即使只在动词词尾体现，也要写出来'
          ]
        }
      },
      {
        point: '题型二：语法分析——精确命名，不要描述',
        blackboard: {
          type: 'formulas',
          label: '语法分析答题规范',
          lines: [
            '题目要求：识别此处语法形式/结构',
            '',
            '正确格式："amantur 是第一变位动词被动语态',
            '              现在时第三人称复数"',
            '',
            '错误格式："amantur 这个词的形式有变化，',
            '              应该是被动的"',
            '',
            '评分要求：形式名称准确 + 所有语法特征完整',
            '  → 漏掉任何一个特征都可能失分'
          ]
        },
        context: '「语法题要求命名，不要描述。」珀西瓦尔在黑板上写了两个版本的答案，「第一版：\'amantur 是第一变位，被动，现在时，第三人称复数\'——每一个语法维度都列出来了，这是满分答案。第二版：\'这个词看起来是被动的\'——没有变位类型，没有时态，没有人称数，这会失去大部分分数。」她停顿，「语法题没有歧义，没有解释空间——准确命名，完整列举，不要用\'看起来\'和\'应该是\'。」'
      },
      {
        point: '题型三：综合理解——用原文支持答案',
        blackboard: {
          type: 'formulas',
          label: '综合理解题答题要求',
          lines: [
            '答题结构：论点 + 原文引用 + 说明',
            '',
            '问：Caesar 为什么求胜诉于元老院？',
            '答：Caesar 因为……（说明原因）',
            '    文本中 "petiit triumphum" 表明……',
            '    （引用原文并说明）',
            '',
            '禁止：只翻译文本，不做解释',
            '禁止：只发表意见，不引用文本',
            '',
            '每个论点都必须有原文支撑'
          ]
        },
        context: '「综合理解题考的是：你能否把文本和理解连接起来。」珀西瓦尔停顿，「很多学生犯两种错误——只翻译，把这道题当翻译题做，没有给出解释；或者只发表意见，说\'Caesar 很有野心\'，但不引用原文支持。」她在黑板上写下结构框架，「正确方法：给出你的论点，引用支撑这个论点的拉丁原文（可以是词或短语），然后说明这个引用如何支持你的论点。三步缺一不可。」'
      },
      {
        point: '题型四：文学评论——论题明确，论证具体',
        blackboard: {
          type: 'formulas',
          label: '文学评论题答题框架',
          lines: [
            '开头：提出明确论题',
            '  → "本文通过…手法…达到了…效果"',
            '',
            '中间：每段 = 一个论点 + 文本证据 + 分析',
            '  → 具体引用 → 语法/修辞识别 → 效果说明',
            '',
            '结尾：总结论题，不引入新内容',
            '',
            '时间管理：文学评论通常占分最多',
            '  → 分配最多时间，结构最清晰'
          ]
        },
        context: '珀西瓦尔靠在讲台旁，「文学评论题是分值最高的题型，也是最多人写糟糕的题型。原因通常不是知识不足，而是结构不清晰。」她停顿，「开头必须有一个明确的论题——不是\'这篇文章很有趣\'，而是\'西塞罗在这段演讲中通过 tricolon 和 anaphora 的交替使用，建立了情绪上的不可阻挡感\'。」她在黑板上写下论题示例，「然后每段对应一个具体的论点，每个论点有原文证据，每个证据有分析。结尾不引入新论点——只总结。」她停顿，「时间管理：文学评论占全卷最多分，给它最多时间。」'
      }
    ],
    lessonSummary: 'GCSE四种题型各有策略：翻译题以准确为首要，按步骤分析语法后再重建目标语言表达，用自检清单防止漏译；语法分析题要求精确命名每个语法特征，不能用描述性语言代替术语；综合理解题需要论点+原文引用+说明的三步结构，不能只翻译或只发意见；文学评论题要开头有论题，每段有一个论点+文本证据+效果分析，结尾总结不引入新内容，并分配最多时间。',
    nextLessonPreview: '「下一章：综合输出。下节课我们练习用拉丁语写作——不只是读和分析，而是自己构造句子。」'
  },

  46: {
    atmosphere: '黑板是空白的。这在珀西瓦尔教授的课上很少见。她站在讲台后，桌上摆着一叠空白羊皮纸和一瓶墨水，没有打开。「今天,」她说，「你们来写。」',
    opening: '「拉丁语写作和拉丁语阅读是两件完全不同的事。」珀西瓦尔把一张纸放在桌上，「阅读时，语法结构是已知的，你识别它。写作时，语法结构是你从零构造的，出错的机会在每一个词上。」她停顿，「今天我们处理最基础的部分：写一段拉丁散文的过程和原则。五年级结束时，你们应该能写出语法正确的简单段落，而不只是读懂别人写的。」',
    keyPoints: [
      {
        point: '写作起点：从中文意思到拉丁语结构',
        blackboardQ: {
          type: 'formulas',
          label: '拉丁写作流程',
          lines: [
            '示例：想表达"女孩爱那只猫"',
            '',
            '步骤1：确认主语/宾语/动词',
            '  主语：puella（女孩，第一变格，主格）',
            '  宾语：felis（猫，第三变格，宾格 = felem）',
            '  动词：amare（爱，第一变位）',
            '        → puella是单数，所以 amat（第三人称单数）',
            '',
            '步骤2：组合',
            '  Puella felem amat.（SOV语序）'
          ]
        },
        question: {
          leadIn: '「写拉丁语，每一个词都要做三个决定。」珀西瓦尔在黑板上逐步演示，「名词：属于哪个变格，用什么格，是单数还是复数。动词：属于哪个变位，主语是第几人称、单数还是复数，用什么时态，主动还是被动。形容词：必须和它修饰的名词在性数格上一致。」她停顿，「这三类决定要在写下每一个词之前做好，不是事后修改。」她转向学生，「puella felem amat——\'女孩爱猫\'——如果你要把这句话改成\'猫爱女孩\'，需要改哪些词？」',
          text: '「把 "Puella felem amat" 改成 "猫爱女孩"，需要改？」',
          options: ['只改动词 amat', '只改主语和宾语的位置', '把 puella 改为宾格 puellam，felis 改为主格，动词不变'],
          answer: 2
        },
        contextRight: '「不错。」她停了一秒，「拉丁语语序自由，但格决定句子意思，不是位置。\'猫爱女孩\'——主语是猫，宾语是女孩——所以猫要用主格，女孩要用宾格 puellam，动词仍然是第三人称单数 amat。不需要移动词的顺序，只需要改格。」',
        contextWrong: '「格，不是顺序。」她重复，不带感情，「拉丁语里意思由格决定，不由位置决定。puella 在句首是主语因为它是主格，不是因为它在第一位。改成猫爱女孩：猫用主格，女孩改成宾格 puellam，felis/feles 变为主格——动词依然是第三人称单数，不变。」',
        blackboard: {
          type: 'formulas',
          label: '写作决策三类',
          lines: [
            '名词：变格类型 + 格 + 数',
            '动词：变位类型 + 人称 + 数 + 时态 + 语态',
            '形容词：与所修饰名词的性/数/格一致',
            '',
            '每个词的格/时态确定后，语序可以相对自由',
            '但通常 SOV（主-宾-谓）是默认语序'
          ]
        }
      },
      {
        point: '词汇选择：准确性优于词藻',
        blackboard: {
          type: 'formulas',
          label: '写作用词原则',
          lines: [
            '原则：用你确定知道变格/变位的词',
            '避免：用你印象中存在但不确定的词',
            '',
            '建议词汇层次：',
            '  KS3常见词（最熟悉，用于主干）',
            '  GCSE词汇表（已经学过，有把握用）',
            '  ✗ 生僻词（正确性存疑，得不偿失）',
            '',
            '检查：每个词典词义是否真的符合语境'
          ]
        },
        context: '「写作的第一原则不是用漂亮的词，而是用你确定知道怎么变格变位的词。」珀西瓦尔用平稳的声音说，「选了一个你不确定格变化的名词，整句话的格系统可能会因此出错。」她停顿，「初学写作时，用核心词汇表里你最熟悉的词——puella, puer, aqua, terra, verbum——宁愿朴素，不要错误。」她靠在讲台旁，「我见过学生为了写\'壮观\'这个意思，找出一个拉丁词，却不确定它属于哪个变格——然后用错了格变化。准确的简单词，胜过错误的复杂词。」'
      },
      {
        point: '语法准确：段落内部的一致性',
        blackboard: {
          type: 'formulas',
          label: '段落内部一致性检查',
          lines: [
            '主语贯穿全段时：动词人称数保持一致',
            '时态叙事：选定一种叙述时态并坚持',
            '  （现在时或过去时，不要混用）',
            '',
            '代词替换主语时：注意性别匹配',
            '  puella → ea（阴性）not is（阳性）',
            '',
            '修饰语与名词：性数格必须一致',
            '  puella bona（正确）',
            '  puella bonus（错误——性不一致）'
          ]
        },
        context: '「单句的语法正确还不够——段落需要内部一致性。」珀西瓦尔转向黑板，「最常见的段落级别错误是时态混用：上一句用现在时，下一句突然跳到完成时，没有任何叙事理由。」她停顿，「另一种是代词替换时性别出错——上句主语是 puella（阴性），下句代词用了 is（阳性）——这说明你没有跟踪主语的性别特征。」她在黑板上写出检查表，「写完一段，从头到尾过一遍：时态，代词性别，所有形容词与名词的性数格匹配。」'
      },
      {
        point: '表达流畅：结构变化与连词使用',
        blackboard: {
          type: 'formulas',
          label: '拉丁散文的流畅手法',
          lines: [
            '连词：et（和）/ sed（但）/ quia（因为）',
            '       nam（因为，用于句首解释）',
            '       itaque（因此，用于句首推论）',
            '       tamen（然而，用于转折）',
            '',
            '句式变化：主动 ↔ 被动交替避免重复',
            '简单句 + 从句 + 简单句 节奏变化',
            '',
            '避免：用 et 连接所有句子（单调）',
            '避免：所有句子相同长度（单调）'
          ]
        },
        context: '珀西瓦尔在黑板上写了一段用五个 et 连接的句子，「听。」她把这段念出来，一字不差，「这是最机械的拉丁语。每句话用同一个连词，同样的长度，没有起伏。」她停顿，「西塞罗不这样写。」她擦掉，重写，用 sed、itaque、tamen 替换，「变化本身就是一种节奏信息。sed 表示转折，听众知道下一句要反过来说。itaque 表示推论，听众知道这是结论。」她停顿，「写散文，连词的选择不是随意的——每一个连词都在告诉读者这句话和上一句的逻辑关系。」'
      }
    ],
    lessonSummary: '拉丁语写作从确认每个词的语法特征开始：名词（变格类型+格+数）、动词（变位+人称+数+时态+语态）、形容词（与所修饰名词性数格一致）。格决定句子意思，不是词序。词汇选择优先用确定知道变格变位的词，准确的简单词胜过错误的复杂词。段落内部需要一致性：时态统一，代词性别正确，形容词与名词匹配。通过变换连词（sed/itaque/tamen）和句式（主动/被动交替、长短句结合）增加表达流畅度。',
    nextLessonPreview: '「下节课：文学评论写作框架。重点在如何构建论点，如何使用文本证据，以及如何让你的分析有说服力而不是一张清单。」'
  },

  47: {
    atmosphere: '黑板上写着一个引号内的拉丁句：「Arma virumque cano」，下面是一行英文：Tell me what you think this line means and why it matters. 珀西瓦尔教授站在问题旁边，视线落在纸上，一言不发。',
    opening: '「这是维吉尔《埃涅阿斯纪》第一行。」珀西瓦尔没有开场白，直接说，「Arma virumque cano——我歌唱武器和英雄。」她停顿，「如果你的文学评论以\'这句话的意思是……\'开头，然后停在翻译上，你没有写文学评论。你写的是摘要。」她转向学生，「文学评论要求你问一个更难的问题：作者为什么这样开头，而不是另一种方式？这个开头做了什么事？」她在黑板上写下：Thesis，「今天我们学构建论题。」',
    keyPoints: [
      {
        point: '论题（Thesis）：一个可以论证的判断',
        blackboardQ: {
          type: 'formulas',
          label: '有效论题 vs 无效论题',
          lines: [
            '无效：这首诗描写了埃涅阿斯的旅程。',
            '  → 事实陈述，无法论证',
            '',
            '无效：这首诗非常伟大，使用了很多技巧。',
            '  → 泛化评价，没有具体论点',
            '',
            '有效：维吉尔在开篇第一行将arma（武器/战争）',
            '      置于 virum（英雄/人）之前，暗示这部史诗',
            '      的核心张力是集体使命与个人意志的冲突。',
            '  → 具体、可论证、有争议空间'
          ]
        },
        question: {
          leadIn: '「论题不是你知道的事实，是你认为成立的判断——一个有人可能不同意的观点。」珀西瓦尔在黑板上写出两种类型的陈述，「事实陈述不需要论证：\'维吉尔写了埃涅阿斯纪\'——是的，谁都知道，不需要论文来证明。有效论题是：\'维吉尔这样做是因为……，这揭示了……\'——这需要你用文本来支撑。」她转向学生，「一个好的论题应该有什么特征？」',
          text: '「一个有效的文学评论论题最重要的特征是？」',
          options: ['包含尽可能多的细节', '是一个有争议空间、可以用文本论证的判断', '与已有的权威评论保持一致'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「有争议空间——这意味着有人理论上可以持相反观点。可以用文本论证——这意味着你能从原文中找到证据。这两个条件同时满足，才是有效论题。」',
        contextWrong: '「可论证的判断。」她重复，不带感情，「论题包含的细节多少取决于论文的长度，不是论题本身的质量指标。与权威评论一致不是目标——学术写作的意义在于你有自己的分析，不是重复别人说过的。能用文本支撑、有人可能不同意——这是有效论题的双重条件。」',
        blackboard: {
          type: 'formulas',
          label: '论题自检两问',
          lines: [
            '问1：有人可以持相反观点吗？',
            '  → 如果不能，这是事实陈述，不是论题',
            '',
            '问2：我能从文本找到支撑证据吗？',
            '  → 如果不能，这是空泛断言，不是论题',
            '',
            '两个都是"是" → 有效论题',
            '任意一个是"否" → 需要修改'
          ]
        }
      },
      {
        point: '论证结构：论点-证据-分析三步',
        blackboard: {
          type: 'formulas',
          label: '段落内部论证结构',
          lines: [
            '论点：提出本段的一个具体主张',
            '  → "维吉尔通过X手法实现了Y效果"',
            '',
            '证据：引用支撑这一主张的原文',
            '  → 拉丁原文（斜体）+ 行号',
            '',
            '分析：说明这个证据如何支持论点',
            '  → "这说明…因为…"',
            '',
            '禁止：引用+翻译，然后说"这很有效"',
            '  → 效果必须被论证，不能被断言'
          ]
        },
        context: '「段落结构：论点，证据，分析。」珀西瓦尔在黑板上写下三个词，「每一段只有一个主要论点。你的证据直接支持这个论点，你的分析解释证据和论点的关系。」她停顿，「最常见的失败模式是：引用原文，翻译，然后说\'这非常有力\'或\'这创造了强烈效果\'——但没有说明这个效果是如何产生的，为什么这个手法有效而不是另一个手法。」她转身，「分析的工作是：把\'这很有效\'变成\'这有效，因为……\'。\'因为\'之后的内容就是你的分析。」'
      },
      {
        point: '文本引用：如何正确使用原文',
        blackboard: {
          type: 'formulas',
          label: '引用原文的规范',
          lines: [
            '引用格式：原文斜体 + 括注行号或来源',
            '  → arma virumque cano (Aen. 1.1)',
            '',
            '引用长度：',
            '  → 短引用（1-2词/短语）：嵌入句子',
            '  → 长引用（1整行以上）：另起一行，缩进',
            '',
            '引用之后必须接分析',
            '  → 引用后直接换话题 = 未完成的论证',
            '',
            '不要大量引用然后说"如上所示"',
            '  → 自己分析，不要把分析推给读者'
          ]
        },
        context: '珀西瓦尔放下粉笔，「引用文本不是展示你读了多少，是为你的论点提供证据。」她停顿，「每一次引用都要有分析跟随——否则你只是转载了拉丁语，没有参与对话。」她靠在讲台边，「另一个错误是引用过多，分析太少。两行引文，然后是一行\'这展示了维吉尔的伟大\'——这不是评论，这是仰视。」她停顿，「一段引文，三到四行分析，这是比较合理的比例。」'
      },
      {
        point: '全文结构：导言、主体、结论的功能分工',
        blackboard: {
          type: 'formulas',
          label: '文学评论整体结构',
          lines: [
            '导言：',
            '  → 提出论题（不是"在这篇文章里我将分析…"）',
            '  → 简要提示论证路径',
            '',
            '主体（每段一个论点）：',
            '  → 论点句 → 引文 → 分析',
            '  → 段间衔接：论点之间有逻辑顺序',
            '',
            '结论：',
            '  → 重申论题（用不同的词）',
            '  → 综合论证，说明意义',
            '  → 不引入新论点'
          ]
        },
        context: '「导言的第一句不是\'在这篇文章里，我将…\'——」珀西瓦尔打断，「不是。」她停顿，「导言的第一句是你的论题。直接给出你的观点。接下来用一两句说明你会从哪几个角度论证这个观点——这是路径图，告诉读者你准备去哪里。」她停顿，「结论不是导言的复制。结论用不同的措辞回到论题，但这次加上了\'因为你已经论证了这些段落\'的分量——结论比导言更有说服力，因为论证已经完成。」'
      }
    ],
    lessonSummary: '文学评论的核心是有效论题：一个可以用文本论证、有争议空间的具体判断（不是事实陈述，不是泛化评价）。段落内部遵循论点-证据-分析三步结构，分析必须解释效果的产生机制（用"因为"代替"很有效"）。引用规范：拉丁原文斜体+行号，引用后必须跟分析，不能大量引文后简单断言效果。全文结构：导言提论题并提示路径，主体各段一个论点，结论重申论题并综合论证，不引入新内容。',
    nextLessonPreview: '「下节课：跨文化比较——罗马人与巫师对语言的理解有什么共同点。这不是比较文化史，而是一种认识论问题：语言为什么有力量？」'
  },

  48: {
    atmosphere: '黑板两侧各写着一列词：左边是拉丁语咒语词根——lumen、expecto、alohomora；右边是罗马法律与宗教术语——iuro、voveo、sacer。珀西瓦尔教授站在两列的正中，手背在身后，像在等两列词相遇。',
    opening: '「拉丁语是死的语言——但它从未停止说话。」珀西瓦尔说出她最常说的那句话，「今天我们来谈：为什么。」她指向左边的词，「Lumos，Expecto Patronum，Alohomora——你们每天用的咒语。」她指向右边，「Iuro，voveo，sacer——罗马宗教和法律里的核心词汇。」她停顿，「你们以为这是巧合。不是。」',
    keyPoints: [
      {
        point: '语言作为行动：罗马的言语行为论',
        blackboardQ: {
          type: 'formulas',
          label: '罗马语言的力量观',
          lines: [
            '罗马人相信某些词语具有法律/宗教约束力：',
            '',
            'iuro（我发誓）— 触发法律效力的词',
            'voveo（我许愿）— 触发与神灵的契约',
            'sacer（神圣的/被诅咒的）— 同一词，两种力量',
            '',
            '说出这个词 = 完成这个行为',
            '不只是描述意图——而是实现意图',
            '',
            '这叫做：performative utterance（施为语言）'
          ]
        },
        question: {
          leadIn: '「在罗马法律中，有一类词语，」珀西瓦尔开口，「你说出它，它就发生了。不是在描述一件事，而是在完成一件事。」她在黑板上写下 iuro，「我发誓——说出这两个字，誓约就成立了。没有别的动作，没有签名，没有证人。」她停顿，「这个概念有一个现代术语：施为语言（performative utterance）——说话即行动。」她转向学生，「你们每天说的咒语，从语言学角度看，更接近哪种表达方式？」',
          text: '「咒语"Lumos!"从语言功能来看，最接近罗马的哪种语言模式？」',
          options: ['陈述事实（констатирую что光亮存在）', '施为语言（说出即完成，说Lumos光就出现）', '请求语言（请求外力产生光）'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「Lumos 不是在描述光的存在，不是在请求别人开灯——说出它，光就出现。这正是施为语言的定义：说话本身就是行为，不需要额外的步骤。罗马人发誓说 iuro，誓约即成立，和巫师说 Lumos 光即出现，是同一种语言逻辑。」',
        contextWrong: '「施为语言——说出即完成。」她重复，不带感情，「Lumos 不是描述，也不是请求——它是命令/触发，说出它，光就产生了。这和 iuro（我发誓，誓约即成立）是同一种语言机制：词语本身具有实现力量，不需要额外的行为配合。」',
        blackboard: {
          type: 'formulas',
          label: '施为语言在罗马与魔法世界',
          lines: [
            '罗马施为语言：',
            '  iuro = 说出即发誓',
            '  do, dico, dedico = 说出即奉献（宗教仪式）',
            '  sacer esto = 说出即诅咒',
            '',
            '魔法施为语言：',
            '  Lumos = 说出即发光',
            '  Expecto Patronum = 说出+意图即召唤',
            '  Alohomora = 说出即解锁',
            '',
            '共同点：词语+意图 = 效果（不需要中间步骤）'
          ]
        }
      },
      {
        point: '词源联系：咒语词根的拉丁来源',
        blackboard: {
          type: 'formulas',
          label: '常见咒语的拉丁词根',
          lines: [
            'Lumos ← lumen（光）',
            '  → illuminate, luminous（英语衍生）',
            '',
            'Expecto ← exspecto（等待/期待）',
            '  → expect（英语）',
            '  Patronum ← patronus（保护者/守护者）',
            '',
            'Alohomora ← 疑为阿拉伯语/拉丁混成',
            '  mora（延迟/障碍）→ 解除延迟/障碍',
            '',
            'Accio ← accio（召唤，法律术语：传唤到庭）',
            'Expelliarmus ← expello（驱逐）+ arma（武器）'
          ]
        },
        context: '珀西瓦尔走向讲台边，从磨旧的词源手册里翻到一页，「Accio——召唤咒。」她念出来，「这个词在罗马法律里是传唤令——把一个人强制召到法庭。说出 accio，对方就必须出现。」她合上书，「巫师用它召唤物品，罗马人用它召唤人——同样的语言逻辑：言语有约束力，被指名的对象必须响应。」她停顿，「珀西瓦尔讲完这个之后，弗立维教授的学生来问过我：\'为什么有些咒语用命令式，有些用不定式？\'」她停顿，「这是一个好问题。」'
      },
      {
        point: '语法形式与魔法意图：命令式vs虚拟式',
        blackboard: {
          type: 'formulas',
          label: '咒语的语法形式分析',
          lines: [
            '命令式（Imperative）：立即、直接的指令',
            '  Lumos! → 点亮（直接命令）',
            '  Accio! → 来（直接命令）',
            '',
            '虚拟式暗含（Subjunctive idea）：意图/愿望',
            '  Expecto Patronum → 我期待守护者',
            '  → 包含期望/意志，不只是命令',
            '',
            '发现：越强调意图的咒语，语言越接近',
            '  拉丁语愿望从句/目的从句（虚拟语气）'
          ]
        },
        context: '「弗立维的问题。」珀西瓦尔用平稳的声音说，「Lumos 是命令式——说出它，你在命令光出现，意志很直接。Expecto Patronum 不是命令式——expecto 是直陈语气，我期待，我等待，我意图——这里面包含着一种意志状态，而不只是命令。」她停顿，「在拉丁语语法里，表达意志和期望用的是虚拟语气——而咒语里这类语法状态对应的，正是施法时意图的强度。」她靠着讲台，「语言不是中立的容器。每种语法形式都携带着意义的倾向。巫师文化里保留了这一点——他们在用语法结构作为魔力意图的精确调节器，即使他们自己不知道这件事。」'
      },
      {
        point: '概念对应：罗马巫术与霍格沃茨魔法传统',
        blackboard: {
          type: 'formulas',
          label: '罗马巫术传统与霍格沃茨魔法',
          lines: [
            '罗马 defixio（诅咒板）：',
            '  → 把名字写在铅板上，埋入地下',
            '  → 写字+意图 = 绑定力量',
            '  → 语言与物质媒介结合产生魔力',
            '',
            '霍格沃茨咒语学：',
            '  → 词语+意图+魔杖动作 = 魔力',
            '  → 三要素缺一不可',
            '',
            '共同逻辑：意图必须通过语言（和/或媒介）',
            '  才能完成从意愿到现实的转化'
          ]
        },
        context: '珀西瓦尔在黑板旁安静地站了一秒，然后说：「罗马人相信，如果你把某人的名字正确地写在诅咒板上，用正确的公式，埋在正确的地方，这个诅咒就会生效。」她停顿，「这不是迷信——这是一套关于语言如何在世界上生效的理论：意图需要通过语言符号化，符号化的意图具有改变现实的能力。」她停顿，「巫师使用的是一套基本相同的逻辑：意图必须被说出来，说出的词必须准确，动作必须匹配。」她最后说：「拉丁语是死的语言——但它从未停止说话。现在你们知道为什么了。」'
      }
    ],
    lessonSummary: '罗马人视某类语言为施为性（performative）——说出特定词语即完成法律或宗教行为，无需额外步骤（iuro、voveo、sacer esto）。魔法咒语运用相同的语言逻辑：说出即触发效果。咒语词根直接来自拉丁语（Lumos←lumen、Accio←accio法律传唤、Expelliarmus←expello+arma）。咒语语法形式与魔法意图相关：命令式（Lumos）表达直接指令，包含期望/意图的咒语（Expecto）语法接近拉丁虚拟语气。罗马诅咒板（defixio）和霍格沃茨咒语都遵循相同的逻辑：意图通过语言+媒介实现现实转化。',
    nextLessonPreview: '「下节课：词源学综合——我们跟踪一个词根从罗马时代到现代英语和当代魔法词汇的完整旅程。」'
  },

  49: {
    atmosphere: '黑板正中写着一个词根：SCRIPT-。从这两个词根用箭头向四个方向射出：往上是拉丁语来源，往左是英语衍生词，往右是法语/其他罗曼语，往下是魔法世界用法。珀西瓦尔教授站在词根正下方，像站在一张地图的中心。',
    opening: '「一个词根。」珀西瓦尔指着黑板，「scrib- / script-，来自拉丁语动词 scribo——我写。」她停顿，「这是我们今天追踪的词根。从公元前两百年的罗马，到今天你们的英语词汇，到魔法世界里一个特定的书写传统。」她在词根旁边用粉笔圈了一下，「词源学不是历史课，不是语言课，不是文化课——它是同时做这三件事。今天我们做完整的一次。」',
    keyPoints: [
      {
        point: '词根溯源：scribo 的原始含义与变形',
        blackboardQ: {
          type: 'formulas',
          label: 'scribo 的基本形式',
          lines: [
            '词典形式：scribo, scribere, scripsi, scriptum',
            '  → 主动式：scribo（我写）',
            '  → 不定式：scribere（写）',
            '  → 完成时词干：scrips-',
            '  → 完成被动分词：script-',
            '',
            '核心含义：用工具在表面刻/划/写',
            '  → 比今天的"写"更强调物理动作',
            '  → 拉丁语时代主要是刻在石/木/蜡板上'
          ]
        },
        question: {
          leadIn: '「scrib- 和 script- 来自同一个动词，但代表不同的时态词干。」珀西瓦尔在黑板上写出变形表，「scrib- 是现在时词干，scrips- 是完成时词干，script- 是完成被动分词词干。」她停顿，「很多英语词来自完成被动分词——script-——这意味着这个词带有\'已经被写下\'的含义，而不只是\'写\'的动作本身。」她转向学生，「英语 script（剧本/脚本），它的含义更接近\'写\'的动作，还是\'已经写下的东西\'？」',
          text: '「"script"（剧本）最直接来自拉丁语哪个形式的含义？」',
          options: ['scrib-（现在时词干，写的动作）', 'scriptum（完成被动分词，已经被写下的东西）', 'scripsi（完成时，我已经写完了）'],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「script 来自 scriptum——已经被写下的东西。剧本是已经写好的文字，不是写作的动作本身。这就是为什么来自完成被动分词的词，往往是名词或形容词，表示一个已完成状态的结果。」',
        contextWrong: '「scriptum——完成被动分词。」她重复，不带感情，「script 是已经写好的东西，不是写的过程。scrib- 这个词干进入英语变成 scribe（抄写员）——强调的是做这件事的人。script 强调的是结果：写下的内容。词干不同，侧重点不同。」',
        blackboard: {
          type: 'formulas',
          label: 'scrib-/script- 的词干分工',
          lines: [
            'scrib- → 动作/人',
            '  scribe（抄写员）',
            '  ascribe（归因于）',
            '  prescribe（开处方/规定）',
            '',
            'script- → 结果/已成文',
            '  script（剧本）',
            '  scripture（圣典/圣经）',
            '  manuscript（手稿 manu=手）',
            '  inscription（铭文）'
          ]
        }
      },
      {
        point: '词义演变：从物理刻写到抽象意义',
        blackboard: {
          type: 'formulas',
          label: 'scribo 的词义演变轨迹',
          lines: [
            '公元前200年：用铁笔在蜡板上刻划',
            '  → 核心义：物理的刻写动作',
            '',
            '帝国时代：纸草/羊皮纸书写',
            '  → 扩展到更广的书写媒介',
            '',
            '中世纪：scriptum → 宗教文本/法律文本',
            '  → scripture 获得神圣含义（圣经）',
            '',
            '现代：描述、规定、订阅（subscribe）',
            '  → 完全抽象化，物理动作消失'
          ]
        },
        context: '「subscribe——订阅。」珀西瓦尔平静地说，「sub-（下面）+ scribe（写）——原义：在文件下方签名。签了名，你就同意了，你被绑定了。今天你们订阅一个频道，点了一个按钮，没有任何物理书写——但词义背后的逻辑还在：你把名字附在某个东西下面，表示你的承诺。」她停顿，「词义演变的规律之一是：物理动作的含义逐渐脱落，逻辑关系的含义留下来。scribo 的物理感正在消失，但它的逻辑——某种附加、承诺、记录的关系——还在所有衍生词里。」'
      },
      {
        point: '跨语言影响：罗曼语族中的 script-',
        blackboard: {
          type: 'formulas',
          label: '法语/西班牙语/意大利语中的衍生词',
          lines: [
            '法语：  écrire（写）← 来自 scribere',
            '        script, manuscrit',
            '',
            '西班牙语：escribir（写）← 来自 scribere',
            '          escritura（写作/圣经）',
            '',
            '意大利语：scrivere（写）← 来自 scribere',
            '          scritto（写下的）',
            '',
            '共同现象：所有罗曼语都保留了词根',
            '  但发音发生了系统性变化（scr- → écr-）'
          ]
        },
        context: '「罗马帝国灭亡之后，拉丁语没有消失——它变成了几种语言。」珀西瓦尔在黑板上写出三个对应词，「法语的 écrire，西班牙语的 escribir，意大利语的 scrivere——它们都来自 scribere，但经过了各自的语音演变。」她停顿，「法语把 scr- 开头简化为 écr-，因为法语不喜欢词首辅音群。西班牙语和意大利语保留了 scr-，但在细节上也有变化。」她停顿，「词源学不只是词义的历史，也是发音的历史——一个词在地中海世界旅行了两千年，每过一个文化边界都留下一点变化的痕迹。」'
      },
      {
        point: '文化印记：scribo 在魔法传统中的特殊地位',
        blackboard: {
          type: 'formulas',
          label: 'script- 在魔法世界的用法',
          lines: [
            '魔咒书写传统：',
            '  古代魔法师在石板/铅板/羊皮纸上',
            '  书写咒语以固定魔力（cf. 罗马 defixio）',
            '',
            '霍格沃茨档案：',
            '  所有魔法契约用羽毛笔书写',
            '  书写本身具有法律约束力',
            '  → 魔法世界保留了拉丁语的施为传统',
            '',
            '珀西瓦尔的词源手册：',
            '  第一条：scribo——所有咒语的母语从这里来'
          ]
        },
        context: '珀西瓦尔从磨旧的词源手册里翻到第一条，把书放在讲台上，「我在这里读到一个注释，」她平静地说，「魔法世界里的标准羽毛笔书写契约，之所以具有法律约束力，是因为古代巫师借鉴了罗马的一套书写等于承诺的传统——scriptum est（写下的东西）具有拘束力。」她合上书，「两千年后，霍格沃茨的入学通知书是由猫头鹰送的，用羽毛笔写的，墨水是特制的——里面每一个细节都有来源。」她停顿，「词源学的终点不是历史课——是理解你生活的世界为什么是这个样子。」'
      }
    ],
    lessonSummary: '词根 scrib-/script- 来自拉丁语 scribo（刻写/书写），词干分为两类：scrib-（强调动作/人，如 scribe、prescribe）和 script-（强调已成文的结果，如 script、scripture、manuscript）。词义演变轨迹：从物理刻写动作→扩展到书写媒介→获得神圣/法律含义→完全抽象化（subscribe=签名承诺→订阅）。罗曼语族各自保留词根但发生系统性语音变化（法语 écrire、西班牙语 escribir、意大利语 scrivere）。文化印记：罗马 scriptum est 的法律约束传统延续到魔法世界的书写契约体系。',
    nextLessonPreview: '「下节课：GCSE综合复习。把这五年学过的所有内容做一次梳理——不是重复讲，是建立整体结构。」'
  },

  50: {
    atmosphere: '黑板上画了一张树状图，根部写着「GCSE拉丁语」，分出五条主干：字母与发音、格系统、动词系统、句法、文本与翻译。珀西瓦尔教授站在树图旁，粉笔横放在讲台，没有拿起来。',
    opening: '「你们来霍格沃茨学拉丁语，」珀西瓦尔开口，语调平稳，「已经五年了。」她环视一圈，「五年，五十课，两个考试周期，一份 GCSE 在前面等着你们。」她转向黑板，「今天不是新知识。今天是整理——把你们学过的所有东西放回它应该在的位置，看清楚它和其他东西是什么关系。」她指着树图，「从根到枝，从基础到应用，不跳过任何一个节点。开始。」',
    keyPoints: [
      {
        point: 'GCSE核心语法梳理：格系统与动词系统',
        blackboardQ: {
          type: 'formulas',
          label: 'GCSE语法核心结构',
          lines: [
            '格系统（六格）：',
            '  主格（主语）/ 宾格（宾语）/ 属格（所有）',
            '  与格（间接宾语）/ 夺格（工具/伴随/来源）',
            '  呼格（称呼）',
            '',
            '动词五大变位：',
            '  时态：现在/未完成/将来/完成/大过去',
            '  语态：主动/被动',
            '  语气：直陈/虚拟/命令',
            '',
            '句法核心：关系从句/不定式结构/虚拟语气用途'
          ]
        },
        question: {
          leadIn: '「GCSE语法考察的核心是两件事：格和动词形式。」珀西瓦尔指着黑板，「格决定名词在句子里的功能，动词形式承载人称、数、时态、语态和语气五个信息。」她停顿，「这是一个检测：如果你看到 amabantur，你能列出它的所有语法信息吗？」她在黑板旁边写出这个词，等待。',
          text: '「amabantur 的完整语法信息是？」',
          options: [
            '第一变位，被动，完成时，第三人称复数',
            '第一变位，被动，未完成时，第三人称复数',
            '第一变位，被动，现在时，第三人称复数'
          ],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「-ba- 是未完成时标志，-ntur 是第三人称复数被动词尾，ama- 是第一变位词干。五个信息：变位类型、时态、语态、人称、数。全部答出，语法分析题满分。」',
        contextWrong: '「第一变位，被动，未完成时，第三人称复数。」她重复，不带感情，「-ba- 是未完成时的标志——不是完成时，不是现在时。完成时主动是 amaverunt，完成时被动是 amati sunt。现在时被动是 amantur，没有 -ba-。-ba- 出现在动词里，永远意味着未完成时。记住这个标志。」',
        blackboard: {
          type: 'formulas',
          label: '时态标志快速识别',
          lines: [
            '-ba- = 未完成时（amaBAnt）',
            '-bi-/-bo- = 将来时（amaBO）',
            '-v-/-u- = 完成时主动（amaVit）',
            '-era- = 大过去时（amaERAnt）',
            '',
            '被动现在时词尾：-r/-ris/-tur/-mur/-mini/-ntur',
            '被动完成时：完成被动分词 + esse'
          ]
        }
      },
      {
        point: '翻译技术复习：四步法的综合应用',
        blackboard: {
          type: 'formulas',
          label: '翻译四步法（复习）',
          lines: [
            '第一步：找主动词',
            '第二步：识别从句边界（方括号标注）',
            '第三步：由内向外翻译各层',
            '第四步：按目标语言语序重建',
            '',
            '同时检查：',
            '  格的翻译是否正确（主/宾/属/与/夺）',
            '  时态是否译出（完成≠现在≠未完成）',
            '  分词是否作为状语/定语正确处理'
          ]
        },
        context: '「翻译四步法——你们在第41课学的。」珀西瓦尔说，「现在是复习，但重点不是步骤本身，而是在真实考试句子里综合使用它。」她在黑板旁边写出一个复杂句：Milites, quos rex miserat, in castra redeuntes ab hostibus capti sunt，「把这个句子用四步法分解。」她停顿，「找主动词——capti sunt。找主语——milites（主格）。从句——quos rex miserat（关系从句）。分词——redeuntes（现在分词）。」她逐步写下分析，「翻译：国王派去的士兵，在返回营地时，被敌人俘虏了。」'
      },
      {
        point: '文本阅读与评注要点复习',
        blackboard: {
          type: 'formulas',
          label: 'GCSE文本题核心要求',
          lines: [
            '综合理解题：论点 + 原文引用 + 分析',
            '',
            '语法识别题：精确命名全部语法特征',
            '  （变位+时态+语态+语气+人称+数）',
            '',
            '文学评论题：',
            '  开头：明确论题',
            '  中段：一段一论点，引文+分析',
            '  结尾：总结，不引入新论点',
            '',
            '最大失分原因：',
            '  ✗ 翻译当分析',
            '  ✗ 泛化评价替代具体分析'
          ]
        },
        context: '「五年学的文本技能，最终考的就是这两件事。」珀西瓦尔简练地说，「一：你能准确从语法上识别一个形式并说出它的所有特征。二：你能从一段文本提取论点，用原文支撑，给出有具体根据的分析，不只是复述。」她停顿，「第二件事更难，也更多分。」'
      },
      {
        point: '五年知识体系：从字母到A-Level预备',
        blackboard: {
          type: 'formulas',
          label: 'KS3→GCSE知识树',
          lines: [
            'KS3（1-3年级）：',
            '  字母/发音 → 格系统 → 动词变位',
            '  → 时态扩展 → 词源学 → 基础阅读',
            '',
            'GCSE（4-5年级）：',
            '  虚拟语气 → 条件句 → 复杂句法',
            '  → 翻译技巧 → 文学评注',
            '',
            'A-Level 预备方向：',
            '  古典文本精读 → 语言学深度',
            '  → 文学批评 → 独立研究'
          ]
        },
        context: '珀西瓦尔在树图旁站定，「从第一课的字母表，到今天，你们走了一条完整的路。」她用粉笔在树图的根部轻轻点了一下，「基础是格系统和动词系统——这两件事做对了，拉丁语的其他所有内容都可以在它们上面建造。」她停顿，「GCSE之后，如果你们选择继续，A-Level 会把你们带进古典文学的原文——西塞罗、维吉尔、李维、塔西佗——不是节选，是完整的篇章。」她靠在讲台边，最后说：「拉丁语是死的语言——但它从未停止说话。考完试，你们才算是真正开始学了。」'
      }
    ],
    lessonSummary: 'GCSE综合复习确认了五年知识体系的结构：KS3奠定字母/发音/格/动词/词源基础；GCSE扩展到虚拟语气/条件句/复杂句法/翻译技巧/文学评注。核心技能：格系统六格功能、动词五维特征（时态/语态/语气/人称/数）识别、翻译四步法综合应用、文本评论论点-证据-分析结构。最大失分原因：翻译当分析、泛化评价替代具体分析。A-Level方向：古典文本精读（西塞罗/维吉尔/李维/塔西佗）和独立研究写作。',
    nextLessonPreview: '「六年级开始，A-Level阶段。下节课：西塞罗散文——修辞结构分析。带好你们的词典，拿好你们的笔。」'
  },

  51: {
    atmosphere: '拉丁语教室里静得只有羽毛笔摩纸的声音。黑板一侧写着一行大字：QUOUSQUE TANDEM ABUTERE，粉笔划出的每个字母都棱角分明。珀西瓦尔教授站在黑板旁，细头钢笔夹在指间，视线落在某处中空。窗外湖面的晨光很冷。',
    opening: '「今天开始古典文学精读部分。」珀西瓦尔没有转身，直接开口，「五周，五位作家，五种声音。」她在黑板最顶端写下：Cicero 106–43 BC。「西塞罗是修辞学的顶峰。不是之一——就是顶峰。你们以后读到其他人，会一直在拿他做参照。」她停了一秒，「今天我们分析他怎么说话——以及为什么那样说话会奏效。」',
    keyPoints: [
      {
        point: '西塞罗的五步修辞法',
        blackboardQ: {
          type: 'formulas',
          label: '西塞罗修辞五步',
          lines: [
            '1. inventio    ─ 发现论证',
            '2. dispositio  ─ 安排结构',
            '3. elocutio    ─ 措辞润色',
            '4. memoria     ─ 记忆背诵',
            '5. pronunciatio─ 表达演出',
            '',
            '问：哪一步处理"措辞与文体"？'
          ]
        },
        question: {
          leadIn: '「西塞罗把演讲的准备过程分成五个步骤，」珀西瓦尔转身在黑板上逐条写下，「inventio——找到你要说的论点。dispositio——决定先说哪个、后说哪个。elocutio——选择用什么词、什么句式，让论点听起来有力量。memoria——背下来。pronunciatio——站起来说，声音、手势、表情都要到位。」她划了一条线，「这不是说话的技巧——这是思维的结构。五步缺一不可。」',
          text: '「在西塞罗修辞五步中，哪一步处理措辞与文体风格？」',
          options: ['inventio（发现论证）', 'dispositio（安排结构）', 'elocutio（措辞润色）'],
          answer: 2
        },
        contextRight: '「不错。」她停了一秒，「elocutio——这是西塞罗花最多笔墨讨论的一步。选词、句式、节奏——他认为同一个论点用不同的词说出来，说服力可以相差十倍。」她在黑板上的 elocutio 旁加了一个星号，「这也是为什么他的拉丁语那么难翻译——你翻出意思，但翻不出节奏。」',
        contextWrong: '「elocutio——措辞润色。」她重复正确答案，不带感情，「inventio 是找论点，dispositio 是安排顺序，elocutio 才是处理文体和语言本身。西塞罗认为这一步决定演讲成败。记住这个词。」',
        blackboard: {
          type: 'formulas',
          label: '西塞罗修辞五步',
          lines: [
            '1. inventio    ─ 发现论证',
            '2. dispositio  ─ 安排结构',
            '3. elocutio  * ─ 措辞润色  ← 文体核心',
            '4. memoria     ─ 记忆背诵',
            '5. pronunciatio─ 表达演出'
          ],
          note: '五步缺一不可；elocutio 决定说服力'
        }
      },
      {
        point: '西塞罗文体特征：hypotaxis 与排比',
        blackboard: {
          type: 'formulas',
          label: '西塞罗文体',
          lines: [
            'hypotaxis = 长句层叠',
            '  主句 + 从句 + 从句的从句...',
            '  句子越长，气势越大',
            '',
            '修辞排比 = 结构相同的短语成组出现',
            '  三段式（tricolon）最常见',
            '',
            '情感节奏 = 短句收尾，产生顿挫感'
          ]
        },
        context: '珀西瓦尔放下粉笔，面对学生。「西塞罗最明显的文体特征是 hypotaxis——长句叠套长句。他可以把二十个从句塞进一个句子，让你一路跟着他的逻辑走，到最后才给你一个结论。」她顿了顿，「这不是卖弄——这是刻意的。每一层从句都在加重你的期待，等到主句出现，分量已经积累到最高点。」她在黑板上写下一个简短的结构示意。「另一个特征是修辞排比——把意思相近或相对的短语排成三个一组。三段式（tricolon）给人完整感，听起来像下了定论。西塞罗用这两种手法交替——先用长句积累，再用三段式收网。这是他演讲的基本节奏。」'
      },
      {
        point: '句子精读：Quousque tandem abutere',
        blackboard: {
          type: 'formulas',
          label: '西塞罗《喀提林颂》开篇',
          lines: [
            'Quousque tandem abutere,',
            '  Catilina, patientia nostra?',
            '',
            'Quousque tandem = 究竟到何时（anaphora预备）',
            'abutere        = 你将滥用（将来时，你在对着未来质问）',
            'Catilina       = 呼格，突然直呼其名——震慑',
            'patientia nostra = 我们的忍耐（nostra=复数，代表全体元老）',
            '',
            '修辞手法：anaphora / 呼格冲击 / 反问'
          ]
        },
        context: '珀西瓦尔用粉笔把这句话在黑板上重新写了一遍，字很大，每个词之间留着空隙。「这是西塞罗最著名的开场白，公元前63年，他站在元老院里对着喀提林说这句话。」她指着第一个词，「Quousque tandem——究竟要到什么时候。tandem 是加强语气的小词，翻译成中文很难不显得生硬，但在拉丁语里它就是一种咬牙切齿的感觉。」她移向 Catilina，「这是整句话最有力量的地方——呼格，直呼其名，插在句子中间。在罗马，当着元老院所有人的面这样点名，是极度的冒犯与压制。」她停了一秒，「patientia nostra——我们的忍耐，不是我的，是我们的。西塞罗在这里把自己变成全体元老院的声音。」她放下粉笔，「一个句子，三种武器：节奏、呼格、集体声音。这就是西塞罗。」'
      },
      {
        point: '三种核心修辞手法：tricolon / anaphora / chiasmus',
        blackboardQ: {
          type: 'formulas',
          label: '三种核心修辞手法',
          lines: [
            'tricolon  = 三段排列',
            '  Veni, vidi, vici（我来，我见，我征服）',
            '',
            'anaphora  = 首词重复',
            '  Quousque tandem... 重复"到何时"的追问',
            '',
            'chiasmus  = 交叉排列  A-B-B-A 结构',
            '  "爱是生命，生命是爱"（含义对调）',
            '',
            '问：Veni, vidi, vici 体现哪种手法？'
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板角落写下三个词：tricolon / anaphora / chiasmus。「这三种手法你们 A-Level 考试会遇到——不是选择题，是要求你找出来、说出它的效果。」她指着第一个，「tricolon：三段相同结构的短语。凯撒说的 Veni, vidi, vici 就是标准 tricolon——我来，我见，我征服。三个完美的对称。」她又写下 anaphora，「anaphora：段落或句子开头重复同一个词，制造累积感和节奏感。chiasmus：把两组词的顺序镜像对调——A-B / B-A，产生回旋的美感。」',
          text: '「"Veni, vidi, vici"（我来，我见，我征服）体现了哪种修辞手法？」',
          options: ['anaphora（首词重复）', 'tricolon（三段排列）', 'chiasmus（交叉排列）'],
          answer: 1
        },
        contextRight: '「不错。」珀西瓦尔在 tricolon 旁边画了一条短横，「三段对称，每段只有一个词，极度简洁，极度有力。这三个词概括了一场战争——这本身就是 tricolon 的效果：让复杂的事情显得不可阻挡。」她停了一秒，「A-Level 要求你分析效果，不只是贴标签。说"是 tricolon"，再说"产生什么感觉、为什么奏效"。这才算完整回答。」',
        contextWrong: '「tricolon——三段排列。」她重复，不带感情，「anaphora 是开头重复同一个词，chiasmus 是 A-B / B-A 镜像结构。Veni, vidi, vici 是三个完全对称的短语，是 tricolon。找到手法，然后说效果——这是 A-Level 的要求。」',
        blackboard: {
          type: 'formulas',
          label: '三种核心修辞手法（含答案）',
          lines: [
            'tricolon  = 三段排列  ← Veni, vidi, vici',
            '  效果：不可阻挡的节奏感，显得论断不容置疑',
            '',
            'anaphora  = 首词重复',
            '  效果：累积情感张力，产生追问或强调',
            '',
            'chiasmus  = A-B-B-A 交叉排列',
            '  效果：回旋感，让两端的词相互映照'
          ],
          note: 'A-Level：找出手法 + 分析效果 + 结合背景'
        }
      }
    ],
    lessonSummary: '西塞罗的修辞法不是装饰——是结构。五步准备（inventio 到 pronunciatio），以 elocutio 为核心；文体上用 hypotaxis 积累气势，用 tricolon 收网。《喀提林颂》的开篇句把呼格、反问、集体声音三种武器压在一句话里。A-Level 要求识别手法并分析其效果与历史背景。',
    nextLessonPreview: '下一课转向史诗——维吉尔的《埃涅阿斯纪》。我们会讨论荷马的影子，以及为什么奥古斯都需要一部神话。'
  },

  52: {
    atmosphere: '黑板正中是一幅手绘的结构图，十二个方框从左到右排成一排，每框里写着简短的罗马数字和地名。珀西瓦尔教授站在图旁，手边放着一本褪色的《埃涅阿斯纪》注释本，封面已经磨平。教室里的学生都在往草稿纸上勾画。',
    opening: '「《埃涅阿斯纪》共十二卷。」珀西瓦尔指着黑板上的方框，「前六卷——奥德赛模式，一个人到处流浪。后六卷——伊利亚特模式，战争。」她停了一秒，「维吉尔读了荷马，然后把两部史诗缝成一部。问题不是他怎么做的——问题是为什么，以及为了谁。」',
    keyPoints: [
      {
        point: '《埃涅阿斯纪》的结构与荷马传统',
        blackboard: {
          type: 'formulas',
          label: '《埃涅阿斯纪》12卷结构',
          lines: [
            '卷 1-6   奥德赛模式（流浪）',
            '  I   特洛伊陷落，出海遇风暴',
            '  II  特洛伊木马故事（回忆）',
            '  IV  迪多悲剧',
            '  VI  冥界之行（预见罗马未来）',
            '',
            '卷 7-12  伊利亚特模式（战争）',
            '  VII 抵达意大利，局势激化',
            '  XII 埃涅阿斯击败图尔努斯，史诗终结',
            '',
            '模型：荷马《奥德赛》+ 荷马《伊利亚特》→ Virgil'
          ]
        },
        context: '珀西瓦尔用粉笔逐格指点，「维吉尔（公元前70—前19年）是奥古斯都时代最重要的诗人。他花了十一年写这部史诗，死的时候还没有定稿——据说临终前他想烧掉它，因为觉得不够好。」她停了一秒，不多评论，「《埃涅阿斯纪》从特洛伊陷落写起，写埃涅阿斯如何辗转流亡，最后在意大利建立基业，成为罗马人的神话祖先。前六卷的流浪结构直接模仿《奥德赛》，后六卷的意大利战争对应《伊利亚特》。维吉尔没有掩盖这种模仿——他在邀请读者比较，然后发现罗马的使命比希腊的故事更大。这是史诗竞争，也是政治宣言。」'
      },
      {
        point: '三个核心人物与主题',
        blackboard: {
          type: 'formulas',
          label: '三位核心人物',
          lines: [
            'Aeneas（埃涅阿斯）',
            '  特洛伊英雄，pietas 的化身',
            '  个人欲望 vs 命运职责',
            '',
            'Dido（迪多）',
            '  迦太基女王，被朱诺利用',
            '  爱情与政治使命的牺牲品',
            '',
            'Juno（朱诺 / 赫拉）',
            '  对立力量，不断阻挠埃涅阿斯',
            '  代表历史的阻力'
          ]
        },
        context: '「pietas——」珀西瓦尔写下这个词，「这是《埃涅阿斯纪》的核心概念，中文通常译成"虔诚"或"职责"，但都不够准确。pietas 是一种多层次的义务：对神明的、对父亲的、对家族的、对罗马未来的。埃涅阿斯的一切选择都受这个词约束。」她在黑板上画了一个箭头，「迪多的悲剧正是这种约束造成的——埃涅阿斯爱她，但 pietas 要求他离开。读者知道他是对的，又觉得他残忍。维吉尔没有解决这个矛盾，这就是他比后来很多史诗诗人高明的地方。」她停了一秒，「朱诺代表阻力——历史总是有阻力的，但命运（fatum）最终不可阻挡。这是全诗的结构逻辑。」'
      },
      {
        point: '史诗召唤与政治意图',
        blackboardQ: {
          type: 'formulas',
          label: '史诗召唤（Invocation）',
          lines: [
            '"Arma virumque cano,',
            '  Troiae qui primus ab oris..."',
            '',
            'arma      = 武器（战争，伊利亚特面）',
            'virum     = 英雄（奥德赛面）',
            'cano      = 我歌唱（诗人在召唤缪斯）',
            '',
            '问：arma virumque 的两个词分别',
            '    对应维吉尔模仿的哪两部荷马史诗？'
          ]
        },
        question: {
          leadIn: '「史诗惯例——每部史诗的第一行都要召唤缪斯女神，同时说明主题。」珀西瓦尔在黑板上写下《埃涅阿斯纪》第一行，「Arma virumque cano——我歌唱武器和英雄。就这六个词，维吉尔已经告诉你他要做什么：arma 是武器，对应战争，暗示《伊利亚特》；virum 是英雄，对应流浪的个人，暗示《奥德赛》。」她指着两个词，「他把荷马的两部史诗压缩进第一行，向读者宣告：这部作品要与荷马同台竞技。」',
          text: '「Arma virumque cano 中，arma（武器）对应荷马哪部史诗的主题？」',
          options: ['《奥德赛》（流浪与归家）', '《伊利亚特》（特洛伊战争）', '《工作与时日》（农耕哲学）'],
          answer: 1
        },
        contextRight: '「不错。」珀西瓦尔在 arma 旁写了一个括号：[Iliad]，「武器——战争——《伊利亚特》。virum——英雄的流浪——《奥德赛》。维吉尔把两部史诗的灵魂装进六个词里。这是极度自信的开场，也是一种竞争宣言。」她停了一秒，「记住这一行，考试肯定会考。」',
        contextWrong: '「arma 对应《伊利亚特》——战争史诗。」她重复，不带感情，「《奥德赛》是奥德修斯的流浪归家，对应的是 virum，英雄个人的旅程。两个词，两部史诗。」她在黑板上补了两条连线，「记住这个对应关系。」',
        blackboard: {
          type: 'formulas',
          label: '史诗召唤（含对应）',
          lines: [
            '"Arma virumque cano"',
            '',
            'arma  = 武器  →《伊利亚特》战争',
            'virum = 英雄  →《奥德赛》流浪',
            '',
            '政治意图：',
            '  Aeneas 是 Roma 的神话祖先',
            '  = 奥古斯都统治有神圣合法性',
            '  fatum（命运）= 罗马必然兴起'
          ]
        }
      },
      {
        point: '从史诗到魔法：命运与使命的共鸣',
        blackboard: {
          type: 'formulas',
          label: '主题延伸',
          lines: [
            'pietas      = 对神、家、使命的义务',
            'fatum       = 命运，不可抗拒',
            '个人欲望 vs 更大的使命',
            '',
            '→ 埃涅阿斯离开迪多',
            '  = 为了罗马牺牲个人幸福',
            '',
            '语言是最古老的魔法——',
            '  史诗用语言把一个人的旅程',
            '  变成一个民族的命运'
          ]
        },
        context: '珀西瓦尔放下粉笔，「语言是最古老的魔法，巫师只是把它说得更大声一点。」她第一次用这句话，语气平静，「维吉尔知道语言可以建构现实——他用史诗把一个流亡的特洛伊人变成罗马的神话奠基者，把奥古斯都的统治变成神命注定。这是语言最大的魔力：把政治包装成命运。」她看着学生，「A-Level 要求你批判性阅读——不只是问"维吉尔写了什么"，还要问"维吉尔为什么这样写，对谁写，在什么背景下写"。」她停了一秒，「迪多的悲剧是真实的情感，埃涅阿斯的离开是政治逻辑——维吉尔让两者都成立。这就是他的复杂性。好的文学不解决矛盾，它呈现矛盾。」'
      }
    ],
    lessonSummary: '维吉尔的《埃涅阿斯纪》十二卷，前六仿《奥德赛》，后六仿《伊利亚特》。核心人物埃涅阿斯代表 pietas，在个人欲望与命运使命的张力中前行。史诗的政治功能：为奥古斯都统治提供神话合法性。A-Level 关键：批判性分析文学与政治权力的关系。',
    nextLessonPreview: '下一课看李维——他把历史写成故事，每个事件背后都有道德教训。与凯撒的简洁相比，李维的风格是另一个世界。'
  },

  53: {
    atmosphere: '教室里放着两本书的封面复印件，并排贴在黑板一侧：《高卢战记》和《建城以来史》。珀西瓦尔教授在讲台后翻看一叠笔记，没有说话，等到学生们都安静了，才开口。',
    opening: '「李维写了142卷。」珀西瓦尔的开场没有铺垫，「从罗马建城写到公元前9年。现存35卷，其余失传。」她指着黑板，「今天我们讨论李维怎么写历史——以及他的方法有什么问题。」',
    keyPoints: [
      {
        point: '李维与《建城以来史》概要',
        blackboard: {
          type: 'formulas',
          label: 'Livy · Ab Urbe Condita',
          lines: [
            'Titus Livius，公元前59年—公元17年',
            '《建城以来史》= Ab Urbe Condita',
            '  142卷，现存35卷（I-X, XXI-XLV）',
            '  从 753 BC 罗马建城写至 9 BC',
            '',
            '核心写法：',
            '  道德说教——历史 = 行为的道德示范',
            '  戏剧性叙事——关键场景高度文学化',
            '  大量插入演说词（多为虚构或改写）'
          ]
        },
        context: '「李维不是军人，不是政治家，不是旅行家——他是学者，一辈子大概没离开过意大利太远。」珀西瓦尔语气平稳，「他的历史写作建立在前人的史料和口头传说上，而不是亲身调查。这意味着他给我们保存了大量古代传说，但也意味着他有时接受神话而不加辨别。」她停了一秒，「李维自己说过他写历史的目的：让读者看到古代的美德，以此修正当代的道德堕落。这是目的先行的历史——先有立场，再找例证。」她指着黑板，「这不是缺陷，这是一种明确的历史观。理解这一点，才能批判性地读他的文字。」'
      },
      {
        point: '李维的叙事手法：演说与道德框架',
        blackboard: {
          type: 'formulas',
          label: '李维叙事特点',
          lines: [
            '1. 演说插入（speeches）',
            '   历史人物发表长篇演说',
            '   → 多为李维自己写的，非史实',
            '   功能：传达道德立场，制造戏剧性',
            '',
            '2. 每个事件有道德教训',
            '   "这告诉我们..."',
            '   → 历史是行为样本，供后人学习',
            '',
            '3. 丰富的心理描写',
            '   探究人物动机，不限于外部事实'
          ]
        },
        context: '珀西瓦尔用粉笔在黑板上画了一条分界线，「李维写的演说词，绝大多数不是真实记录——他根据历史场景重新创作，让人物说出符合情境的话。这在古典史学中是惯例，不算造假，因为古代没有新闻稿，更没有录音。」她停了一秒，「但问题在于：李维的演说词经常说出他自己的道德立场，而不是历史人物的真实想法。当你读到某个将军的慷慨陈词，你要问的是：这是历史，还是李维的说教？」她在黑板上的"道德教训"旁加了一个问号，「批判性阅读的第一步：区分作者的声音和历史人物的声音。」'
      },
      {
        point: '著名章节分析：萨比妮妇女的劫持',
        blackboardQ: {
          type: 'formulas',
          label: '萨比妮妇女事件（Livy I.9-13）',
          lines: [
            '背景：罗马建城初期，男多女少',
            '罗慕路斯邀请邻族萨比妮人参加节庆',
            '→ 罗马士兵劫持萨比妮妇女为妻',
            '',
            '李维处理方式：',
            '  强调妇女后来接受了命运',
            '  → 服务于道德叙事',
            '',
            '问：李维写这段历史的主要问题是？'
          ]
        },
        question: {
          leadIn: '「萨比妮妇女的劫持——」珀西瓦尔说这个标题时没有停顿，「这是罗马建城神话里最有争议的一段。罗慕路斯邀请邻族参加节庆，然后他的士兵在庆典中强行劫持了萨比妮女性为妻。李维的叙述戏剧性很强，最后他特别指出这些女性后来接受了命运，甚至调解了两族的战争。」她停了一秒，「你们作为 A-Level 学生，应该立刻看出李维在做什么。」',
          text: '「从史学批评角度，李维叙述萨比妮妇女事件的主要问题是什么？」',
          options: ['他的拉丁语过于复杂', '他把道德合理化覆盖在历史事件上，未批判性检视史料', '他没有记录事件的具体日期'],
          answer: 1
        },
        contextRight: '「不错。」珀西瓦尔停了一秒，「李维让这段暴力的历史有了"幸福结局"，服务于他的罗马建国神话叙事。A-Level 要求你指出这种道德框架如何影响历史叙述的可靠性——不是说李维在撒谎，而是说他在选择，而每一种选择都有代价。」',
        contextWrong: '「道德合理化覆盖历史事实。」她重复，不带感情，「李维的拉丁语精美，他的年代记录也相当详细——但这些不是关键问题。关键问题是：他的道德立场让他选择性地呈现历史，让"强迫"变成了"接受命运"。这是史学批评要处理的核心问题。」',
        blackboard: {
          type: 'formulas',
          label: '李维史学问题',
          lines: [
            '接受传说而不核实',
            '道德框架先于历史事实',
            '演说词为李维自己撰写',
            '叙事目的 > 历史真实性',
            '',
            '→ 李维是伟大的作家',
            '   但不是现代意义上的历史学家'
          ]
        }
      },
      {
        point: '凯撒 vs 李维：两种历史写作风格',
        blackboard: {
          type: 'formulas',
          label: '凯撒 vs 李维',
          lines: [
            '         凯撒           李维',
            '人称   第一人称         第三人称',
            '风格   简洁（brevitas）  丰富，文学化',
            '立场   表面客观          公开道德说教',
            '目的   自我辩护          道德示范',
            '史料   亲历者            二手整理',
            '',
            '共同点：都服务于政治目的'
          ]
        },
        context: '「凯撒的《高卢战记》——全部第三人称，Caesar fecit，凯撒做了什么，好像他在写别人的故事。」珀西瓦尔用语冷静，「这种风格制造了一种客观感，但凯撒是在为自己的军事行动辩护，他在战争进行中就把战报出版，让罗马公民读到他的功绩。这和客观毫无关系。」她停了一秒，「李维没有这种伪装——他公开说他在写道德示范，公开说他在用历史教育罗马人。两个人都有政治目的，只是包装不同。」她指着对比表，「A-Level 要求你讨论史学家的立场与文本的关系——凯撒和李维是绝佳的对比材料。」'
      }
    ],
    lessonSummary: '李维的《建城以来史》142卷，以道德说教为核心——每个历史事件都服务于他的价值立场。他的演说词大多是虚构或重写的，叙事戏剧性强但史料核查不严。与凯撒相比：凯撒简洁伪装客观，李维丰富公开说教——两者都有政治目的，方式不同。',
    nextLessonPreview: '下一课是塔西佗——比李维晚一百年，风格截然相反：刀锋一样的简洁，讽刺像寒冰。他对帝制的态度，你们来判断。'
  },

  54: {
    atmosphere: '黑板上只有两行字：Ubi solitudinem faciunt, pacem appellant. 珀西瓦尔教授没有解释它，等到所有学生把这句话抄下来，才开口。教室里的光线很白，窗外的树叶不动。',
    opening: '「先翻译这句话。」珀西瓦尔在讲台后面坐下，把这节课唯一一次坐下，「不用举手，想到了就说。」',
    keyPoints: [
      {
        point: '塔西佗其人与代表作',
        blackboard: {
          type: 'formulas',
          label: 'Tacitus · 56–120 AD',
          lines: [
            '代表作：',
            '  Annales（编年史）— 提比略至尼禄',
            '  Historiae（历史）— 尼禄至多米提安',
            '  Germania（日耳曼志）',
            '  Agricola（农业志，岳父传记）',
            '',
            '历史覆盖：公元 14–96 年（断续）',
            '政治立场：怀念共和国，对帝制充满讽刺'
          ]
        },
        context: '「塔西佗（约56—120年）是罗马最犀利的历史学家，也是拉丁语散文里讽刺技巧最高超的作家之一。」珀西瓦尔语气平静，「他的两部主要作品——《编年史》和《历史》——覆盖了从提比略到多米提安的皇帝时代。他亲身经历了多米提安的恐怖统治，在那段时间他选择了沉默，不写作，不发声。」她停了一秒，「后来他在《农业志》里写道，沉默本身也是一种屈从，他对此感到羞耻。这句话塑造了他后来写作的风格——他选择用文字说出他在政治上无法说的话。」'
      },
      {
        point: '塔西佗文体：brevitas 与讽刺',
        blackboard: {
          type: 'formulas',
          label: '塔西佗文体特征',
          lines: [
            'brevitas = 极度简洁',
            '  删去修饰语',
            '  删去连接词',
            '  句子像刀刃',
            '',
            '讽刺（irony）= 字面意思与真实含义相反',
            '  表扬=实为批评',
            '  客观陈述=实为讽刺',
            '',
            '阴暗心理分析',
            '  皇帝的动机往往是恐惧或虚荣'
          ]
        },
        context: '「西塞罗写长句——」珀西瓦尔停了一下，「塔西佗写短句。他把连接词、修饰语、解释性从句全部删掉，只留下最硬的骨头。」她在黑板上写了一个简单的对比：西塞罗的句子可能有三行，塔西佗的同等内容可能只用五个词。「这种简洁本身就是一种讽刺——因为帝国的官方语言是华丽的，塔西佗用刀锋一样的简洁对抗它。」她停了一秒，「他的讽刺更阴险：他有时用表扬的语气批评皇帝，或者用看似客观的陈述让读者自己得出可怕的结论。他让你思考，不替你思考。」'
      },
      {
        point: '著名引文精读：Ubi solitudinem faciunt',
        blackboardQ: {
          type: 'formulas',
          label: '塔西佗名句分析',
          lines: [
            '"Ubi solitudinem faciunt,',
            '  pacem appellant."',
            '',
            'ubi        = 在那里（关系从句）',
            'solitudinem= 荒原，空无一人之地（宾格）',
            'faciunt    = 他们制造（第三人称复数）',
            'pacem      = 和平（宾格）',
            'appellant  = 他们称之为（第三人称复数）',
            '',
            '出处：Agricola 30，借布立吞首领之口'
          ]
        },
        question: {
          leadIn: '「黑板上这句话——」珀西瓦尔站起来，「这是塔西佗在《农业志》第30章里写的。表面上是布立吞首领卡尔加克斯控诉罗马军队的演说词。」她指着黑板，「ubi solitudinem faciunt，pacem appellant——字面意思很简单：他们制造荒原，却称之为和平。」她停了一秒，「但这句话出自谁的口？为什么塔西佗要借一个敌人的嘴说出来？」',
          text: '「"他们制造荒原，却称之为和平"——塔西佗用这句话主要想达到什么效果？」',
          options: ['赞美罗马带来的秩序与和平', '通过借用敌人的声音，讽刺罗马帝国扩张的暴力本质', '客观记录布立吞首领的演讲内容'],
          answer: 1
        },
        contextRight: '「不错。」珀西瓦尔停了一秒，「塔西佗让一个被征服者说出罗马最不想承认的真相。他自己不直接批评罗马——他借口说这是历史记录，这是别人说的话。但读者知道他在说什么。」她在黑板上圈出 pacem appellant，「这就是讽刺的高明之处：字面上是引述，实质上是控诉。」',
        contextWrong: '「讽刺罗马帝国的扩张暴力。」她重复，语气平静，「塔西佗不是在记录事实——布立吞首领卡尔加克斯的演说词几乎肯定是他写的，不是真实记录。他借敌人的嘴说出批评，是一种政治安全的讽刺方式。不赞美，也不客观——是讽刺。记住这个例子，它经常出现在考题里。」',
        blackboard: {
          type: 'formulas',
          label: '讽刺技巧分析',
          lines: [
            '"Ubi solitudinem faciunt, pacem appellant."',
            '',
            '技巧：借敌人之口说真相',
            '  → 塔西佗不直接批评罗马',
            '  → 借被征服者的声音控诉',
            '  → 读者自行得出结论',
            '',
            '效果：比直接批评更刻骨，更难反驳'
          ]
        }
      },
      {
        point: '塔西佗开篇：极致简洁的风格示范',
        blackboard: {
          type: 'formulas',
          label: '塔西佗 vs 西塞罗文体对比',
          lines: [
            '塔西佗《编年史》开篇：',
            '"Urbem Romam a principio reges habuere."',
            '罗马城在初建时由国王统治。',
            '→ 七个词，说清楚主语/时间/谓语',
            '→ 没有修饰，没有感情',
            '',
            '西塞罗风格：先铺垫，再论证，再总结',
            '塔西佗风格：事实，事实，事实',
            '',
            '共同点：都在追求说服力',
            '路径：情感积累 vs 事实震慑'
          ]
        },
        context: '珀西瓦尔在黑板上写下《编年史》第一行，「Urbem Romam a principio reges habuere——罗马城在初建时由国王统治。七个词。」她停了一秒，「西塞罗开场要先建立气氛，塔西佗直接给你事实。」她看着学生，「这种简洁不是因为他没有话说——是因为他知道事实本身最有力量。他的历史里皇帝做的事情足够触目惊心，不需要他加感叹号。」她停了一秒，「A-Level 要求你对比两种风格——不是说哪个更好，而是说它们各自达到什么效果，服务于什么目的。西塞罗要说服你跟着他走，塔西佗要让你自己得出结论。语言是最古老的魔法，巫师只是把它说得更大声一点。两种法术，两种路径。」'
      }
    ],
    lessonSummary: '塔西佗是罗马最犀利的历史学家——brevitas（极致简洁）和讽刺是他的两大武器。《农业志》的名句"他们制造荒原，却称之为和平"是借敌人之口控诉帝国暴力的讽刺典范。与西塞罗对比：情感积累 vs 事实震慑，两种不同的说服路径。',
    nextLessonPreview: '下一课讨论奥古斯都时代的文学生态——赞助人、诗人和政治之间的关系。贺拉斯的 carpe diem 不只是诗句，那也是一种政治姿态。'
  },

  55: {
    atmosphere: '黑板上画着一幅简单的关系图：中间是"奥古斯都"，向外伸出箭头，分别指向"梅塞纳斯"、"维吉尔"、"贺拉斯"、"普罗佩提乌斯"，最外圈是"受众/罗马公民"。珀西瓦尔教授站在图旁，手里拿着一本贺拉斯诗集的复印本。',
    opening: '「这是奥古斯都时代的文学生态。」珀西瓦尔指着图，「今天我们讨论文学赞助制度——以及为什么一个诗人的作品背后总有一个付钱的人。」',
    keyPoints: [
      {
        point: '梅塞纳斯赞助体系',
        blackboard: {
          type: 'formulas',
          label: '奥古斯都文学生态',
          lines: [
            '赞助人：Maecenas（梅塞纳斯）',
            '  奥古斯都的亲信，文学圈的组织者',
            '  为诗人提供：土地、金钱、庇护',
            '',
            '受资助的诗人：',
            '  Virgil（维吉尔）→《埃涅阿斯纪》',
            '  Horace（贺拉斯）→《颂歌》Carmina',
            '  Propertius（普罗佩提乌斯）→ 爱情诗',
            '',
            '交换：政治主题进入文学作品'
          ]
        },
        context: '「梅塞纳斯这个名字后来变成了一个普通名词——maecenas，在很多欧洲语言里直接指"慷慨的文艺赞助人"。」珀西瓦尔停顿，「他是奥古斯都的政治工具，同时也是真正的文学鉴赏者。他资助维吉尔、贺拉斯等人，给他们庄园和收入，让他们不必为生计写作——条件是他们的作品要服务于新帝国的形象建设。」她停了一秒，「这不是强迫——没有人用链条拴着这些诗人。但赞助体系创造了一种无形的压力：你的庇护人需要什么，你的诗就要能提供什么。理解了这一点，你才能理解《埃涅阿斯纪》为什么在第六卷专门写了罗马皇帝的光荣预言。」'
      },
      {
        point: '政治主题在文学中的呈现方式',
        blackboard: {
          type: 'formulas',
          label: '政治文学的运作方式',
          lines: [
            '《埃涅阿斯纪》：',
            '  Aeneas = 奥古斯都的神话前身',
            '  罗马命运 = 奥古斯都统治的神授合法性',
            '',
            '贺拉斯《颂歌》（Carmina）：',
            '  颂扬奥古斯都带来的和平',
            '  同时保留个人哲学声音（carpe diem）',
            '',
            '奥维德《爱的艺术》：',
            '  越过政治界限',
            '  → 被流放，公元8年'
          ]
        },
        context: '「政治文学不是政治宣传单——好的奥古斯都时代诗歌是复杂的。」珀西瓦尔停顿，「贺拉斯写过歌颂奥古斯都的颂歌，但他最著名的诗句是 carpe diem——抓住今天，不要期待明天。这是伊壁鸠鲁哲学，是个人主义，与帝国的宏大叙事方向截然不同。」她停了一秒，「奥古斯都允许它存在，因为贺拉斯在其他诗里已经给了他足够的政治回报。这是一种微妙的平衡，诗人知道边界在哪里。」她指着黑板最后一行，「奥维德不知道——或者说，他知道但选择越过。他的《爱的艺术》教罗马人如何勾引已婚女性，直接冒犯了奥古斯都的道德改革议程。结果是流放，到他死都没有回来。」'
      },
      {
        point: '批判性阅读：官方意图与作者声音',
        blackboardQ: {
          type: 'formulas',
          label: '批判性阅读框架',
          lines: [
            '阅读一首奥古斯都时代的诗时，问：',
            '',
            '1. 谁在资助这个作者？',
            '2. 这首诗服务于什么政治目的？',
            '3. 诗人在哪里保留了个人声音？',
            '4. 哪些地方可能是政治妥协？',
            '5. 作者真正想说什么？',
            '',
            '问：贺拉斯"carpe diem"最接近哪种哲学立场？'
          ]
        },
        question: {
          leadIn: '「贺拉斯（公元前65—前8年）是梅塞纳斯圈子里最有个人声音的诗人。」珀西瓦尔拿起复印本，「他写了四卷《颂歌》，其中有歌颂奥古斯都的官方主题，也有大量的私人哲学——对死亡的接受，对当下的珍惜，对田园生活的向往。」她翻到一页，「Carpe diem，quam minimum credula postero——抓住今天，尽量少信任明天。这句话出自《颂歌》I.11。表面上是劝一个女孩不要担心占星预言——但它的哲学根底是什么？」',
          text: '「"Carpe diem"所体现的"活在当下、不惧死亡"的哲学，最接近哪个古代哲学流派？」',
          options: ['斯多葛主义（接受命运，以理性克制情欲）', '伊壁鸠鲁主义（避免痛苦，享受平静的当下快乐）', '柏拉图主义（追求理念世界，超越肉身局限）'],
          answer: 1
        },
        contextRight: '「不错。」珀西瓦尔停了一秒，「伊壁鸠鲁主义——不是放纵享乐，而是珍视当下的平静幸福，不为不可知的未来焦虑。Carpe diem 的核心是"不要浪费今天"，这正是伊壁鸠鲁哲学的精髓。」她停了一秒，「贺拉斯是一个在官方赞助体系里保留了个人哲学声音的诗人——这本身就是一种技艺。」',
        contextWrong: '「伊壁鸠鲁主义——活在当下，不为死亡恐惧。」她重复，平静，「斯多葛主义强调用理性克制情欲、接受命运，不完全等同于"珍惜今天"。柏拉图主义关注的是超越肉身的理念世界——与 carpe diem 相反。记住这个区别，第59课我们会详细讲。」',
        blackboard: {
          type: 'formulas',
          label: '贺拉斯的双重声音',
          lines: [
            '官方声音：',
            '  颂扬奥古斯都，歌颂帝国和平',
            '',
            '个人声音：',
            '  Carpe diem（伊壁鸠鲁主义）',
            '  田园生活，哲学沉思',
            '',
            '平衡点：给赞助人足够的政治回报',
            '        同时保留诗人的独立声音'
          ]
        }
      },
      {
        point: '文学作为权力工具：A-Level批判框架',
        blackboard: {
          type: 'formulas',
          label: '文学与政治权力',
          lines: [
            '文学赞助的逻辑：',
            '  权力 → 资金 → 文学作品 → 受众',
            '  受众接受了文学，也接受了其中的政治叙事',
            '',
            '批判性阅读原则：',
            '  没有文学是政治真空产生的',
            '  任何文本都有其生产背景',
            '  "官方意图"不等于"作者意图"',
            '  更不等于"真实历史"'
          ]
        },
        context: '「语言是最古老的魔法，巫师只是把它说得更大声一点。」珀西瓦尔停顿，「奥古斯都时代的诗人们也深知这一点——他们用文字为一个统治者建构神话，把政治权力包装成命运与神意。」她看着学生，「A-Level 的考试不会让你简单地说"这首诗很美"——会要求你讨论文学与政治的关系。问题是：谁在控制叙事？谁的声音被放大了？谁的声音消失了？」她在黑板的最后一行写下一个问句，「奥维德的流放告诉我们：当文学越过政治界限，后果是真实的。文字有重量，沉重的时候足以让一个人流亡至死。」'
      }
    ],
    lessonSummary: '奥古斯都时代的文学生态由梅塞纳斯赞助体系运转。维吉尔、贺拉斯等人在政治主题与个人声音之间寻找平衡。Carpe diem 是贺拉斯的伊壁鸠鲁精神；奥维德的流放是越过政治边界的代价。A-Level 核心：批判性分析文学文本的生产背景与政治功能。',
    nextLessonPreview: '文学精读结束。下一课转向语言学——为什么拉丁语有格系统，格是怎么运作的，以及这背后的语言学逻辑。'
  },

  56: {
    atmosphere: '黑板上画着一张六栏的表格，每栏顶端写着一个格名，下方是空白。珀西瓦尔教授站在表格旁，手中握着的不是粉笔，而是那支细头钢笔——这节课她偶尔会在笔记本上写字。',
    opening: '「你们学拉丁语快两年了，」珀西瓦尔开口，「今天我们不练习格变化，我们讨论为什么拉丁语有格系统。」她停了一秒，「语言里的每一个结构都有它的逻辑。理解逻辑，比背表格重要。」',
    keyPoints: [
      {
        point: '格系统的语言学原理：为什么需要格',
        blackboard: {
          type: 'formulas',
          label: '格系统的逻辑',
          lines: [
            '英语依靠词序表达语法关系：',
            '  "The dog bites the man"',
            '  "The man bites the dog" → 意思完全不同',
            '',
            '拉丁语依靠词尾（格）表达语法关系：',
            '  Canis hominem mordet',
            '  Hominem canis mordet  → 意思完全相同',
            '  （canis=主格，hominem=宾格）',
            '',
            '格 = 名词的语法身份标记'
          ]
        },
        context: '「英语把所有的语法关系信息压缩进词序里。」珀西瓦尔在黑板上写下两个英语句子，「"狗咬人"和"人咬狗"——同样的词，顺序一变，意思完全反转。英语必须靠位置告诉你谁在咬谁。」她停了一秒，「拉丁语不需要这样。因为名词本身带着标记——词尾变化告诉你这个词在句子里的角色。canis（主格）就是施动者，hominem（宾格）就是受动者，不管它们放在句子的哪个位置，意思都不会变。」她停了一秒，「这就是格系统的本质——把语法关系写进词的身体里。」'
      },
      {
        point: '六个格的语法逻辑',
        blackboardQ: {
          type: 'formulas',
          label: '拉丁语六格功能表',
          lines: [
            '主格（Nominativus） ─ 施动者 / 主语',
            '宾格（Accusativus）  ─ 受动者 / 直接宾语',
            '属格（Genitivus）    ─ 所属 / "的"',
            '与格（Dativus）      ─ 接受者 / "给"',
            '夺格（Ablativus）    ─ 工具/方式/来源/伴随',
            '呼格（Vocativus）    ─ 称呼，直接打招呼',
            '',
            '问：哪个格表示动作的间接对象？'
          ]
        },
        question: {
          leadIn: '「六个格，六种关系。」珀西瓦尔在黑板上逐行指点，「主格——谁在做事。宾格——谁被做了事。属格——谁的。与格——给谁。夺格——用什么/从哪里/和谁/以什么方式——夺格是用途最广的格，包揽了很多英语需要介词才能表达的关系。呼格——直接叫某人。」她停顿，「记住：拉丁语里如果你叫某人的名字，比如 Catilina，那就是呼格。西塞罗在《喀提林颂》开篇就用了它——我们在第51课讲过。」',
          text: '「"老师给学生一本书"——"学生"在这个句子里用哪个格？」',
          options: ['宾格（直接宾语，书的接受者）', '与格（间接宾语，动作的接受对象）', '属格（表示所属关系）'],
          answer: 1
        },
        contextRight: '「不错。」珀西瓦尔停了一秒，「与格——书是直接宾语，用宾格；学生是间接宾语，是给予行为的接受对象，用与格。区分宾格和与格的方法：问"给谁/为谁"，答案是与格；问"做了什么"，答案是宾格。」',
        contextWrong: '「与格——间接宾语。」她重复，平静，「宾格是直接宾语——在这个句子里是"书"，librum。学生是接受者，是动作指向的对象，不是动作直接作用的对象，所以用与格，discipulo。两格的区别在A-Level翻译题里很重要。」',
        blackboard: {
          type: 'formulas',
          label: '六格功能（含记忆关键词）',
          lines: [
            '主格 ─ 谁做了？      canis（狗，主语）',
            '宾格 ─ 做了什么/谁？ librum（书，直接宾语）',
            '属格 ─ 谁的？        magistri（老师的）',
            '与格 ─ 给谁/为谁？   discipulo（给学生）',
            '夺格 ─ 用/从/和/以？ gladio（用剑）',
            '呼格 ─ 叫谁！        Catilina！（喀提林！）'
          ]
        }
      },
      {
        point: '历史起源：印欧语系与格的演变',
        blackboard: {
          type: 'formulas',
          label: '格系统的历史起源',
          lines: [
            '原始印欧语（Proto-Indo-European）',
            '  约 8 个格（含方位格、工具格等）',
            '       ↓',
            '拉丁语  保留 6 个格',
            '古希腊语保留 5 个格',
            '梵语    保留 8 个格',
            '       ↓',
            '英语    几乎完全失去格',
            '        （只剩 who/whom 的区别）',
            '德语    保留 4 个格',
            '俄语    保留 6 个格'
          ]
        },
        context: '「拉丁语的格系统来自一个比拉丁语更古老的语言——原始印欧语。」珀西瓦尔在黑板上写下这个术语，「几乎所有欧洲语言，加上波斯语、梵语，都从这个假设的祖语发展而来。原始印欧语大约有八个格，每个格都有更精细的语义区分。拉丁语继承了其中六个，已经简化了。」她停了一秒，「英语走上了另一条路——它不是失去了格系统，而是把格功能转移给了词序和介词。who 和 whom 是最后的痕迹：who 是主格，whom 是宾格，大多数英语母语者已经混用它们了。」她停了一秒，「德语和俄语保留了格系统，这让它们更像拉丁语——词序比英语自由，但要学更多词尾变化。」'
      },
      {
        point: '珀西瓦尔的研究：语言考古学假说',
        blackboard: {
          type: 'formulas',
          label: '语言考古学：格与魔法语言',
          lines: [
            '已知：拉丁语 6 格，原始印欧语 8 格',
            '',
            '假说（珀西瓦尔研究方向）：',
            '  古代巫师语言可能有更多格',
            '  表达更多维度的"关系"',
            '  例如：',
            '    施法格（施咒者与咒语的关系）',
            '    目标格（咒语指向的对象与程度）',
            '    时态格（魔法效果的时间维度）',
            '',
            '→ 格越多，语言能表达的关系越精细'
          ]
        },
        context: '「这是我自己的研究，」珀西瓦尔少见地说了一句与课程略有偏离的话，「语言考古学——通过研究现存的魔法咒语语言，推测更古老的巫师语言结构。」她停了一秒，「我们在现代巫师世界用的咒语，大多数已经高度简化——缩短成一两个词，或者一个命令式。但如果你研究最古老的巫师典籍，你会发现一些格变化的痕迹，暗示原始的巫师语言有远比拉丁语复杂的格系统。」她停了一秒，「语言是最古老的魔法，巫师只是把它说得更大声一点。更精细的格系统，意味着更精确的咒语——差一个格，效果可能完全不同。」她放下钢笔，「这不是考试内容。但这是为什么格系统值得认真理解的原因。」'
      }
    ],
    lessonSummary: '格系统是拉丁语把语法关系写进词本身的方式，替代了英语依靠词序的做法。六个格各有明确功能，起源于原始印欧语的八格系统。英语几乎失去格，俄语、德语保留了部分格。理解格的语言学逻辑比死记词尾表格更根本。',
    nextLessonPreview: '下一课——拉丁语怎么变成了法语、西班牙语和意大利语。语言的演变不是腐化，而是适应。'
  },

  57: {
    atmosphere: '黑板上是一棵树的示意图：根部写着"Latina"，主干往上，分叉出五根枝条，各自标着法语、西班牙语、意大利语、葡萄牙语、罗马尼亚语。珀西瓦尔教授站在树图旁，用粉笔在根部画了一条短横——通俗拉丁语。',
    opening: '「罗马帝国崩溃之后，拉丁语没有消失，」珀西瓦尔开口，「它变成了五种语言。今天我们看这个过程是怎么发生的——以及什么被保留了下来。」',
    keyPoints: [
      {
        point: '通俗拉丁语：分化的起点',
        blackboard: {
          type: 'formulas',
          label: '通俗拉丁语 vs 古典拉丁语',
          lines: [
            '古典拉丁语（Classical Latin）',
            '  = 西塞罗、维吉尔的书面语言',
            '  = 受过教育的精英阶层使用',
            '  = 高度标准化，被规范记录',
            '',
            '通俗拉丁语（Vulgar Latin）',
            '  = 普通罗马人的口头语言',
            '  = 在帝国各省演变出地方方言',
            '  = 不被书面记录，自由变化',
            '',
            '帝国崩溃后 → 各地方言继续独立演变'
          ]
        },
        context: '「西塞罗的拉丁语是书面精英语言——有标准，有规范，被学校教，被文人模仿。」珀西瓦尔停顿，「但在罗马街道上、军营里、市场里，人们说的是另一种拉丁语：通俗拉丁语。词尾不总是完整，格变化开始简化，口语里出现了大量缩略和变音。」她停了一秒，「当罗马帝国在5世纪开始瓦解，各省失去了和罗马中心的政治联系，各地的通俗拉丁语失去了共同的标准，开始各自演变。再过几百年，各地的语言已经面目全非，彼此不再能沟通——这就是罗曼语的诞生。」'
      },
      {
        point: '音变规律：语言演变的机制',
        blackboard: {
          type: 'formulas',
          label: '通俗拉丁语到罗曼语的音变',
          lines: [
            '词尾辅音弱化：',
            '  amant（他们爱，拉丁）',
            '  → amano（通俗，-t 脱落）',
            '  → aiment（法语，进一步变化）',
            '',
            '格变化的丢失：',
            '  拉丁语 6 格 → 罗曼语 0-2 格（多用介词）',
            '  lupus/lupum（主/宾）→ loup（法语，只剩一形）',
            '',
            '词序从自由 → 固定（SVO）'
          ]
        },
        context: '「语言的演变有规律——不是随机的变化，而是有方向的压力。」珀西瓦尔用粉笔逐行指点，「词尾辅音弱化是第一步：口语里发音靠前，词尾的辅音越来越轻，最后脱落。词尾一旦消失，格变化就失去了物质载体——你无法区分主格和宾格了，因为它们听起来完全一样。」她停了一秒，「格消失之后，语言必须找到另一种方式表达语法关系——答案就是词序固定化。罗曼语族从相对自由的 SOV 词序转向了相对固定的 SVO，和英语类似。同时大量使用介词来表达格的功能。」她停了一秒，「这不是语言的堕落，是语言在不同条件下的适应。」'
      },
      {
        point: '拉丁语到五种罗曼语：分支与保留',
        blackboardQ: {
          type: 'formulas',
          label: 'amare 在各罗曼语中的演变',
          lines: [
            'Latin:      amare（爱）',
            '              ↓',
            'Italian:    amare  （几乎不变）',
            'Spanish:    amar   （-e 脱落）',
            'Portuguese: amar   （同西班牙语）',
            'French:     aimer  （辅音和元音都变了）',
            'Romanian:   a iubi （完全替换）',
            '',
            '问：哪种罗曼语最接近拉丁语的词形？'
          ]
        },
        question: {
          leadIn: '珀西瓦尔在黑板上写下五种语言对"爱"这个词的写法，「同一个词，在五种语言里变成了五种形式。意大利语的 amare 和拉丁语的 amare 几乎完全一样——因为意大利是拉丁语的发源地，语言保守性最强。西班牙语和葡萄牙语的 amar 只丢了词尾的 e。法语的 aimer 变化最大——元音和辅音都经过了多次转变。罗马尼亚语索性用了不同词根的 a iubi。」',
          text: '「在主要罗曼语中，哪种语言的词汇最接近古典拉丁语的原始形式？」',
          options: ['法语（French）', '意大利语（Italian）', '罗马尼亚语（Romanian）'],
          answer: 1
        },
        contextRight: '「不错。」珀西瓦尔停了一秒，「意大利语因为地理上最接近拉丁语的发源地，受到的外来语言影响相对少，保留了最多拉丁语的词汇形式和一部分形态变化。」她停了一秒，「这不意味着意大利语"更纯粹"——只是意味着它在这个维度上更保守。语言没有纯粹之说。」',
        contextWrong: '「意大利语——最接近拉丁语原形。」她重复，平静，「法语经历了高卢方言的强烈影响，词汇形式变化极大。罗马尼亚语在地理上最偏远，受到了更多斯拉夫语和其他语言的影响。意大利语保守性最强，amare 这个词几乎原样保留了下来。」',
        blackboard: {
          type: 'formulas',
          label: '罗曼语族（含分支树）',
          lines: [
            '           Latina',
            '      ┌────┼────────┐',
            '  意大利  西/葡  法语  罗马尼亚',
            '',
            '共同特征（vs 拉丁语）：',
            '  失去格变化 → 用词序和介词代替',
            '  失去中性性 → 只剩阴/阳性',
            '  动词简化',
            '',
            '保留：词汇（约 80% 核心词有拉丁源）'
          ]
        }
      },
      {
        point: '拉丁语遗产：不止是词汇',
        blackboard: {
          type: 'formulas',
          label: '拉丁语留在罗曼语中的遗产',
          lines: [
            '词汇：约 80% 核心词汇有拉丁源',
            '词序模式：SVO 继承自晚期拉丁语',
            '格功能通过介词保留：',
            '  属格"的" → de（法语）/ di（意大利语）',
            '  工具格   → avec（法语）/ con（西班牙语）',
            '',
            '延伸：英语中 60% 的词汇有拉丁来源',
            '  （经由法语进入，诺曼征服后）',
            '',
            '→ 学拉丁语 = 学所有欧洲语言的根'
          ]
        },
        context: '「拉丁语没有死，」珀西瓦尔说，「它活在五种罗曼语里，也活在英语里——英语大约有60%的词汇有拉丁语来源，大多数是通过法语进入的，在诺曼征服之后。」她停了一秒，「格系统看起来消失了，但格的功能没有消失——只是从词尾转移到了介词上。法语用 de 表达属格的"的"，用 avec 表达夺格的"和/用"。介词化的格，保留了语义，丢弃了形式。」她停了一秒，「这是我们这门课更深层的意义。你们学拉丁语不只是在学一门死语言——你们在学所有这些现代语言共同的骨架。看到骨架，你就能看穿表面的差异。」'
      }
    ],
    lessonSummary: '通俗拉丁语是罗曼语族的起点。词尾辅音弱化导致格变化丢失，词序随之固定化。五种主要罗曼语（意大利语、西班牙语、葡萄牙语、法语、罗马尼亚语）保留了约80%拉丁词汇，但用介词代替了格变化。意大利语保守性最强，法语变化最大。',
    nextLessonPreview: '下一课看铭文——那些刻在石头上的文字，是普通罗马人留下的最真实的声音。'
  },

  58: {
    atmosphere: '教室里放着几张黑白照片，贴在窗旁——罗马墓碑的拓片，上面的字迹有些模糊，有些清晰。珀西瓦尔教授在讲台上放了一张A4纸，上面印着一条完整的拉丁铭文，她没有翻译它，等学生们自己看。',
    opening: '「这是一条真实的罗马墓志铭，公元2世纪，现藏于大英博物馆。」珀西瓦尔指着那张纸，「今天我们不读西塞罗，不读维吉尔——我们读一个普通罗马人的墓碑。」她停了一秒，「这才是拉丁语真实存在的地方。」',
    keyPoints: [
      {
        point: '铭文作为第一手历史文献',
        blackboard: {
          type: 'formulas',
          label: '罗马铭文（Inscriptiones Latinae）',
          lines: [
            '现存约 30 万条罗马铭文',
            '记录：普通人的生死、职业、家庭',
            '      法律条文、奉献祈文、纪念碑',
            '',
            '铭文 vs 文学文本：',
            '  文学 = 精英声音，被精心修改',
            '  铭文 = 普通人的声音，相对未经过滤',
            '',
            '第一手文献的价值：',
            '  没有经过后来抄写者的改动',
            '  保存了当时真实的语言用法'
          ]
        },
        context: '「大英博物馆地下室里有成千上万条罗马铭文。」珀西瓦尔的语气里有一种少见的温度，「石头上的拉丁语和纸上的不同——它更直接，更简洁，有时有拼写错误，有时词法不完全正确。因为刻这些字的人不总是受过良好教育的。」她停了一秒，「这就是它的价值。西塞罗告诉我们精英罗马人怎么思考，铭文告诉我们普通罗马人怎么生活、怎么爱、怎么死。如果你想理解罗马，这两种文本都要读。」她指着窗旁的拓片照片，「这些石头在帝国崩溃的十五个世纪里一直埋在地下，被挖出来，放在博物馆里。语言学家和历史学家把它们一条条读出来，重建了一个消失的世界。这就是语言考古学的工作。」'
      },
      {
        point: '铭文类型与常见缩写系统',
        blackboard: {
          type: 'formulas',
          label: '铭文类型与缩写',
          lines: [
            '类型：',
            '  墓志铭（epitaph）     → 最多见',
            '  奉献铭（votive）      → 向神奉献',
            '  荣誉铭（honorific）   → 纪念贵人',
            '  法律铭（legal）       → 法令公告',
            '',
            '常见缩写：',
            '  D.M.  = Dis Manibus（致亡灵之神）',
            '  H.S.E.= Hic Situs Est（此处安葬）',
            '  AN.   = annum / annos（岁）',
            '  V.    = vixit（他/她活了）',
            '  B.M.  = bene merenti（献给值得的人）'
          ]
        },
        context: '「罗马墓志铭有固定的格式。」珀西瓦尔逐行指点黑板，「几乎所有墓志铭都以 D.M. 开头——Dis Manibus，致亡灵之神，这是一种程式化的宗教表达，表示这条铭文献给了守护死者的神灵。然后是死者的姓名和年龄，通常用 V. 加 AN. 写出：vixit annos XX，活了二十年。结尾用 H.S.E.——hic situs est，此处安葬。」她停了一秒，「这些缩写一旦学会，任何一条罗马墓志铭你都能读出大框架。石头上的文字有时因为风化缺损，但 D.M. 和 H.S.E. 几乎总能辨认出来，因为它们是最常见的字母组合。」'
      },
      {
        point: '一条完整墓志铭精读',
        blackboardQ: {
          type: 'formulas',
          label: '典型罗马墓志铭',
          lines: [
            'D · M',
            'IVLIAE · PRIMAE',
            'IVLIVS · PRIMVS · CONIUGI',
            'KARISSIMAE · FECIT',
            'V · AN · XXXV',
            '',
            'D.M.      = Dis Manibus',
            'IVLIAE    = Julia（与格/属格）',
            'PRIMAE    = Primus 的阴性与格/属格',
            'CONIUGI   = 给妻子（与格）',
            'KARISSIMAE= 最亲爱的（最高级，与格）',
            'FECIT     = 他制作了（此碑）',
            'V AN XXXV = vixit annos 35，活了35岁',
            '',
            '问：CONIUGI 是什么格？功能是什么？'
          ]
        },
        question: {
          leadIn: '珀西瓦尔指着黑板上的铭文，「这是一条丈夫为妻子立的墓志铭。我们一行一行来读。」她逐行翻译，「"Dis Manibus——致亡灵之神。Iuliae Primae——为尤利娅·普里玛。Iulius Primus coniugi karissimae fecit——尤利乌斯·普里穆斯为最亲爱的妻子制作（此碑）。V. AN. XXXV——活了三十五岁。"」她指着 coniugi，「注意这个词——coniugi，妻子，但它的形式是与格。」',
          text: '「墓志铭中 coniugi karissimae 里，coniugi 是什么格，在这个句子里的功能是什么？」',
          options: ['宾格，fecit 的直接宾语（他制作了妻子）', '与格，表示此碑是"为了"妻子而立', '主格，表示妻子是动作的主语'],
          answer: 1
        },
        contextRight: '「不错。」珀西瓦尔停了一秒，「与格——为谁做某事，受益对象。fecit 的直接宾语是这块墓碑本身（省略），coniugi 是间接宾语，说明这块碑是为了妻子而立的。这种用法在铭文里极常见：fecit + 与格，为某人制作（某物）。」',
        contextWrong: '「与格——为了妻子。」她重复，平静，「宾格是动作直接作用的对象，在这里是省略的那块石碑本身。妻子是受益对象，所以用与格。fecit + 与格 = 为某人做某事，这是铭文里最常见的结构之一，要记住。」',
        blackboard: {
          type: 'formulas',
          label: '铭文精读（完整翻译）',
          lines: [
            'D.M.',
            '  = Dis Manibus',
            '  = 致亡灵之神',
            '',
            'IVLIVS PRIMVS CONIUGI KARISSIMAE FECIT',
            '  = Iulius Primus 为最亲爱的妻子立此碑',
            '  coniugi = 与格（受益对象）',
            '  karissimae = 最高级形容词，与格一致',
            '',
            'V. AN. XXXV = vixit annos 35 = 享年35岁'
          ]
        }
      },
      {
        point: '文献考证方法：确定年代与解读缺损',
        blackboard: {
          type: 'formulas',
          label: '铭文考证方法',
          lines: [
            '确定年代：',
            '  字体风格（字形随时代变化）',
            '  用词（某些词只在特定时代出现）',
            '  材料与雕刻技术',
            '',
            '确定来源：',
            '  地点（出土地）',
            '  材料（大理石/砂岩/砖）',
            '  格式惯例（各地区不同）',
            '',
            '解读缺损文字：',
            '  [ ] = 补全的文字',
            '  ( ) = 缩写展开',
            '  上下文推测 + 类比同类铭文'
          ]
        },
        context: '「铭文研究是一门专业学科，叫做金石学（epigraphy）。」珀西瓦尔放下粉笔，「你们在博物馆或学术版本里看到铭文，会看到方括号和圆括号。方括号里的文字是编辑补全的——石头有缺损，编辑根据上下文和同类铭文推测。圆括号是把缩写展开。」她停了一秒，「这个过程需要大量的背景知识：你必须知道当时的铭文惯例是什么，同类铭文通常怎么写，才能有把握地补全缺损。」她停了一秒，「霍格沃茨地下室的古老铭文——如果你们以后有机会接触——就是同样的问题：识别字形年代，理解缩写，补全缺损，最后翻译。语言是最古老的魔法，巫师只是把它说得更大声一点。但把它从石头上读出来的那个人，先要静下来。」'
      }
    ],
    lessonSummary: '罗马现存约30万条铭文，是研究普通人生活的第一手材料。墓志铭以 D.M. 开头，以 H.S.E. 结尾，常见缩写构成固定格式。文献考证需要通过字形、用词、地点来判断年代与来源；缺损文字用方括号标示补全。铭文里的格用法（尤其与格）与文学文本一致。',
    nextLessonPreview: '下一课是哲学拉丁语——塞内卡和卢克莱修。他们关于死亡和时间的思考，和我们每天打交道的魔法世界有奇特的共鸣。'
  },

  59: {
    atmosphere: '黑板分成两栏，左边写着 STOICI，右边写着 EPICUREI，下方各自有几个核心词。珀西瓦尔教授在两栏之间画了一条分界线，然后退后一步，看着这条线，似乎在想什么，没有立刻开口。',
    opening: '「两个哲学传统，两种面对死亡和时间的方式。」她转身，「今天我们读哲学拉丁语——这是一种比西塞罗更抽象、比铭文更内省的语言。」她停了一秒，「先把这两栏的词抄下来，然后我们开始。」',
    keyPoints: [
      {
        point: '斯多葛主义：塞内卡与核心词汇',
        blackboard: {
          type: 'formulas',
          label: '斯多葛核心概念',
          lines: [
            'virtus   = 美德（最高善，唯一真实的好）',
            'ratio    = 理性（宇宙的基本原则）',
            'fatum    = 命运（不可抗拒，应当接受）',
            'natura   = 自然（顺应自然 = 顺应理性）',
            'logos    = 逻各斯（理性秩序的宇宙力量）',
            '',
            'Seneca（塞内卡）约4BC—65AD',
            '  名著：《道德书简》Epistulae Morales',
            '  主题：如何在帝制下保持内心自由'
          ]
        },
        context: '「斯多葛派认为，」珀西瓦尔开口，「宇宙由理性（logos/ratio）支配，每件事都按照命运（fatum）展开，人无法改变这个进程。但人能控制的，是自己对这个进程的态度。」她停了一秒，「塞内卡是尼禄时代的哲学家——他既是政客，也是斯多葛学派的重要作家。他侍奉尼禄，最终被命令自杀，据说他死得很平静，因为斯多葛哲学已经让他与死亡和解。」她停了一秒，「他最著名的句子之一：Dum differtur vita transcurrit——一再拖延，生命就流逝了。这句话的语言极度简洁，和塔西佗一样。哲学拉丁语的特征之一：用最少的词表达最重的道理。」'
      },
      {
        point: '伊壁鸠鲁主义：卢克莱修与原子论',
        blackboard: {
          type: 'formulas',
          label: '伊壁鸠鲁核心概念',
          lines: [
            'voluptas  = 快乐（避免痛苦，追求平静）',
            'ataraxia  = 宁静（无焦虑的平静心态）',
            'atomus    = 原子（万物由原子构成）',
            'mors      = 死亡（不应恐惧）',
            '',
            'Lucretius（卢克莱修）约99—55BC',
            '  名著：《物性论》De Rerum Natura',
            '  主题：原子论宇宙观，消除对死亡的恐惧',
            '',
            'Horace：Carpe diem（伊壁鸠鲁精神）'
          ]
        },
        context: '「伊壁鸠鲁派与斯多葛派的根本区别在于对"好"的定义。」珀西瓦尔停顿，「斯多葛认为美德（virtus）是唯一的好；伊壁鸠鲁认为快乐（voluptas）是善——但不是纵欲，而是避免痛苦、获得平静的快乐（ataraxia）。」她停了一秒，「卢克莱修在他的诗体哲学著作《物性论》里发展了一套原子论宇宙观：万物由不可分割的原子构成，死亡只是原子的重新排列，灵魂也是原子组成的，死后消散。所以没有理由惧怕死亡——因为死后不存在任何体验，痛苦和幸福都不会有。」她停了一秒，「贺拉斯的 carpe diem 是这种哲学的通俗版本：既然死亡不可避免，就把当下过好。」'
      },
      {
        point: '哲学拉丁语的语言特征',
        blackboardQ: {
          type: 'formulas',
          label: '哲学拉丁语特征',
          lines: [
            '大量抽象名词：',
            '  virtus（美德）/ ratio（理性）',
            '  fatum（命运）/ natura（自然）',
            '  voluptas（快乐）/ mors（死亡）',
            '',
            '反思式语气：',
            '  "我们应当..."  "想象这种情况..."',
            '',
            '长句论证：',
            '  前提 → 推论 → 结论',
            '  几乎不用修辞排比，用逻辑连接词',
            '',
            '问：塔西佗名句 "Dum differtur vita transcurrit"',
            '    体现了哪个哲学传统？'
          ]
        },
        question: {
          leadIn: '「塞内卡写道：Dum differtur vita transcurrit。」珀西瓦尔在黑板上写下这句话，「Dum 是连接词——当/在……的时候。differtur 是被动态，被推迟、被拖延。vita 是主语，生命。transcurrit——流逝，从旁而过。」她停了一秒，「整句话的意思：在一再拖延的过程中，生命就流逝了。」她停了一秒，「这句话背后是什么哲学立场？」',
          text: '「"Dum differtur vita transcurrit"（一再拖延，生命就流逝了）最接近哪个哲学传统的观念？」',
          options: ['伊壁鸠鲁主义（珍惜当下，不拖延享受平静的生命）', '斯多葛主义（接受命运，以理性义务约束自己，不浪费时间）', '两者都不接近'],
          answer: 1
        },
        contextRight: '「不错。」珀西瓦尔停了一秒，「斯多葛主义——时间是最宝贵的资源，每一刻都应当按照理性和义务去使用。拖延是对命运赋予你的时间的浪费。塞内卡在《道德书简》里多次强调：不是生命太短，而是我们浪费了它。」她停了一秒，「这与伊壁鸠鲁的 carpe diem 有重叠，但动机不同：伊壁鸠鲁说"享受"，塔西佗说"不要浪费"。细微差别，但考试会考。」',
        contextWrong: '「斯多葛主义——不要浪费命运赋予你的时间。」她重复，平静，「伊壁鸠鲁的核心是避免痛苦、享受平静，而 Dum differtur vita transcurrit 强调的是对时间的理性使用——不拖延，不浪费——这是斯多葛对 ratio 和 virtus 的要求。两者都重视时间，但出发点不同。」',
        blackboard: {
          type: 'formulas',
          label: '斯多葛 vs 伊壁鸠鲁',
          lines: [
            '         斯多葛          伊壁鸠鲁',
            '最高善   virtus（美德）   voluptas（平静快乐）',
            '对死亡   接受命运         不应恐惧（原子论）',
            '时间观   不要浪费         珍惜当下',
            '代表人   塞内卡           卢克莱修/贺拉斯',
            '',
            'carpe diem = 伊壁鸠鲁',
            'Dum differtur... = 斯多葛'
          ]
        }
      },
      {
        point: '哲学与魔法世界的对话',
        blackboard: {
          type: 'formulas',
          label: '哲学命题在魔法世界的回响',
          lines: [
            '斯多葛命运观：',
            '  fatum 不可抗拒',
            '  → 死亡教的命题：死亡是命运，应当接受',
            '',
            '伊壁鸠鲁死亡观：',
            '  mors 不应恐惧',
            '  → 霍克拉克斯 = 拒绝接受死亡',
            '  → 伊壁鸠鲁会说：这是对原子规律的徒劳抗拒',
            '',
            '巫师斯多葛主义？',
            '  语言是命运的载体',
            '  精确的词语 = 精确地履行命运的职责'
          ]
        },
        context: '珀西瓦尔停了片刻，「哲学不是装饰课程——它是看世界的框架。」她停了一秒，「你们生活在一个巫师世界里，每天面对死亡的咒语、生命的魔法、时间的操控。斯多葛派会怎么看 fatum 在魔法世界里的意义？如果命运不可抗拒，那么是否存在任何一种魔法是真正对抗命运的？」她停了一秒，「伊壁鸠鲁派对霍克拉克斯的判断很清楚：这是对死亡的恐惧驱动的，而他们认为对死亡的恐惧是非理性的——你死后什么都感受不到，所以没有什么可怕的。」她停了一秒，「我不知道你们同意哪一种。但语言是最古老的魔法，巫师只是把它说得更大声一点。这两位哲学家也是用语言在施法——用文字改变你看待死亡和时间的方式。」'
      }
    ],
    lessonSummary: '斯多葛主义（塞内卡）以 virtus/ratio/fatum 为核心，强调接受命运、不浪费时间；伊壁鸠鲁主义（卢克莱修/贺拉斯）以 ataraxia/voluptas 为核心，强调平静快乐与不惧死亡。哲学拉丁语特征：大量抽象名词、反思语气、长句逻辑论证。两者都与巫师世界的死亡命题有深层共鸣。',
    nextLessonPreview: '最后一课——学术写作。你们已经学了两年，现在我们讨论怎么把这些知识用在A-Level考试的答卷上。精确，再精确。'
  },

  60: {
    atmosphere: '教室桌上每人放了一张印着一段短文的纸——一篇A-Level拉丁语评论的范文片段，段落结构清晰，页边有珀西瓦尔教授用红笔标注的符号。她站在黑板前，已经写好了一张结构图，等着学生把范文看完。',
    opening: '「两年。」珀西瓦尔开口，没有更多铺垫，「你们花了两年学这门语言。今天我们讨论怎么在考试里用它。」她指着黑板，「学术写作的精确度，和咒语的精确度，是同一种精确度。差一个字，效果完全不同。」',
    keyPoints: [
      {
        point: 'A-Level论证结构：四步框架',
        blackboard: {
          type: 'formulas',
          label: '学术论证四步结构',
          lines: [
            '1. Thesis（命题）',
            '   一句话说清楚你的核心论点',
            '   "Cicero uses tricolon to..."',
            '',
            '2. Argument（论据）',
            '   引文 + 分析',
            '   "In line X, Cicero writes... This suggests..."',
            '',
            '3. Rebuttal（反驳）',
            '   承认对立观点，然后推翻它',
            '   "Although one might argue... however..."',
            '',
            '4. Conclusio（结论）',
            '   回应命题，不只是重复'
          ]
        },
        context: '「A-Level的考卷不问你知不知道——它问你能不能论证。」珀西瓦尔在黑板上指着四步框架，「Thesis：你的论点要在第一句话说清楚，不是最后一段。英国学术写作的惯例是开门见山——读者读了第一句话就知道你要说什么，然后你用剩下的段落去证明它。」她停了一秒，「Argument：引文之后必须有分析。引文本身不是证据，你对引文的解读才是。写下拉丁语原文，然后解释为什么这个词选择、这种句式结构证明了你的论点。」她停了一秒，「Rebuttal：成熟的学术写作承认反例存在。说"有人可能认为……但是……"——这不是弱化你的论点，这是加强它：你已经考虑了对立面，仍然坚持你的论点。」'
      },
      {
        point: '引证格式与常用学术拉丁缩写',
        blackboard: {
          type: 'formulas',
          label: '学术引证与拉丁缩写',
          lines: [
            '引证格式：',
            '  Verg. Aen. 1.1  = 维吉尔《埃涅阿斯纪》卷1第1行',
            '  Cic. Cat. 1.1   = 西塞罗《喀提林颂》卷1第1节',
            '  Tac. Ann. 14.3  = 塔西佗《编年史》卷14第3节',
            '',
            '常用学术拉丁缩写：',
            '  ibid.   = ibidem    = 同上（同一来源）',
            '  cf.     = confer    = 比较、参见',
            '  et al.  = et alii   = 等人',
            '  viz.    = videlicet = 即、也就是说',
            '  e.g.    = exempli gratia = 例如',
            '  i.e.    = id est    = 也就是（解释）'
          ]
        },
        context: '「引证格式是学术写作的骨骼。」珀西瓦尔停顿，「不是装饰，是导航系统——让读者知道你的证据在哪里，可以自己去核实。」她指着黑板，「拉丁文学引证的标准格式：作者缩写，书名缩写，卷号和行号，用点分隔。Verg. Aen. 1.1 是维吉尔的《埃涅阿斯纪》第一卷第一行——任何知道这个格式的人都能立刻找到原文。」她停了一秒，「这些学术拉丁缩写——ibid., cf., et al., viz.——你们在学术论文和脚注里会不断看到它们。它们是拉丁语在现代学术界的直接遗产。ibid. 是 ibidem，"同一地方"，表示引用来自上一个注释的同一来源。cf. 是 confer，"比较"，暗示读者去看一个相关但不完全相同的来源。」'
      },
      {
        point: 'A-Level评论范文结构分析',
        blackboardQ: {
          type: 'formulas',
          label: '范文结构标注',
          lines: [
            '[Thesis]',
            '"Cicero\'s use of tricolon in Cat. 1.1',
            ' reinforces his authority over the Senate."',
            '',
            '[Argument + 引文]',
            '"\'Quousque tandem abutere, Catilina,',
            ' patientia nostra?\' The tricolon of',
            ' subject/verb/object mirrors..."',
            '',
            '[Rebuttal]',
            '"Although Cicero may primarily aim',
            ' to shame Catiline, the rhetorical',
            ' structure suggests a broader..."',
            '',
            '[Conclusio]',
            '"The cumulative effect therefore...',
            '─ not merely ─ but fundamentally..."'
          ]
        },
        question: {
          leadIn: '珀西瓦尔指着学生手里的范文，「把你们手里的那张纸和黑板上的框架对照。找到 thesis，找到 argument，找到 rebuttal，找到 conclusio。」她等了约十秒，「好。Thesis 在第一句话——论点直接陈述，没有铺垫。Argument 紧接着，先引拉丁原文，再分析为什么这个选词证明了你的论点。Rebuttal 用"although"引入对立观点，然后用"however"或"yet"转回自己的立场。Conclusio 不重复 thesis，而是说明这个论点的更大意义。」',
          text: '「在A-Level学术评论写作中，Rebuttal（反驳段落）的主要功能是什么？」',
          options: ['引入更多引文，加强论点', '承认对立观点的存在，然后说明为什么自己的论点仍然成立', '总结全文，重复论点'],
          answer: 1
        },
        contextRight: '「不错。」珀西瓦尔停了一秒，「Rebuttal 不是否定自己——它是展示你已经考虑了反例，并且仍然能够维持你的论点。一个能处理反例的论点，比一个忽视反例的论点强得多。这是学术成熟度的标志。」她停了一秒，「考官读到 rebuttal 写得好的答卷，会知道这个学生在真正地思考，而不是在背答案。」',
        contextWrong: '「承认对立观点，然后维持自己的论点。」她重复，平静，「引文是 argument 的工作，总结是 conclusio 的工作。Rebuttal 的价值在于：你承认了反例的存在，说明你不是在回避问题，而是在直面它。然后你说明为什么你的论点仍然成立——这才是完整的论证。」',
        blackboard: {
          type: 'formulas',
          label: '四步结构（含功能说明）',
          lines: [
            'Thesis     ─ 第一句，核心论点',
            'Argument   ─ 引文 + 你的分析',
            'Rebuttal   ─ although... however...',
            '             承认反例 → 维持论点',
            'Conclusio  ─ 论点的更大意义',
            '             不重复 thesis，向外延伸'
          ]
        }
      },
      {
        point: '精确度：学术写作 = 咒语施放',
        blackboard: {
          type: 'formulas',
          label: '精确度的要求',
          lines: [
            '常见错误：',
            '  "Cicero uses lots of rhetoric"',
            '  → 太模糊，什么手法？什么效果？',
            '',
            '正确示范：',
            '  "Cicero\'s tricolon (Verg. Cat. 1.1)',
            '   creates an overwhelming rhythm that',
            '   mirrors the Senate\'s collective authority."',
            '',
            '原则：',
            '  手法名称 + 具体引文 + 分析效果',
            '  三者缺一不可',
            '',
            '语言是最古老的魔法——',
            '差一个词，效果完全不同'
          ]
        },
        context: '珀西瓦尔放下粉笔，第一次在这节课里没有立刻说话，停了两秒。「你们这两年学到的不是词汇表，不是变格规则，不是作家的生卒年份。」她开口，「你们学到的是一种看语言的方式——看它的结构，看它的选择，看它背后的意图。」她停了一秒，「语言是最古老的魔法，巫师只是把它说得更大声一点。但说大声之前，必须先说清楚、说精确。」她看着学生，「差一个词，效果完全不同——这句话适用于咒语，适用于学术写作，也适用于任何你想通过语言影响另一个人的场合。」她停了一秒，「这是拉丁语课教给你们的最后一件事，也是第一件事。」她把粉笔搁回托盘，转向窗外，「就这些。」'
      }
    ],
    lessonSummary: '学术写作的四步结构：Thesis（命题）→ Argument（引文+分析）→ Rebuttal（承认反例，维持论点）→ Conclusio（延伸意义）。引证格式：作者.书名.卷.行，ibid./cf./et al./viz.等缩写须掌握。精确度是核心——手法名称、具体引文、效果分析三者缺一不可。语言是最古老的魔法，精确是它的第一要求。',
    nextLessonPreview: '古典文学精读与语言学单元至此结束。下一阶段将进入综合复习与模拟考试——你们需要把十课的内容整合成一套完整的分析能力。'
  },

  61: {
    atmosphere: '黑板左侧写着：Σοφοκλῆς（希腊字母，索福克勒斯的名字），右侧写着：Seneca L. Annaeus，中间画了一条竖线。珀西瓦尔教授站在竖线前，两侧的字都没有再看——她在等学生自己注意到那条线。',
    opening: '「悲剧这种文体，」珀西瓦尔开口，「起源于雅典，成熟于雅典，然后罗马人接手了它，做了非常不同的事情。」她在竖线上轻轻敲了一下，「同一种文体，五百年的差距，完全不同的目的和手法。」她转向学生，「今天我们做一件 A-Level 要求你们做的事：比较——不是简单地说\'两者都写悲剧\'，而是找到它们在核心选择上的分歧，然后问：为什么有这种分歧？」',
    keyPoints: [
      {
        point: '悲剧理论基础：亚里士多德的 katharsis 与罗马的修辞目的',
        blackboardQ: {
          type: 'formulas',
          label: '两种悲剧传统的核心目的',
          lines: [
            '希腊传统（亚里士多德《诗学》）：',
            '  通过怜悯与恐惧的情感→ katharsis（净化/宣泄）',
            '  观众参与情感体验',
            '',
            '塞内卡悲剧：',
            '  目的是修辞/哲学示范',
            '  展示斯多葛智慧者如何面对极端处境',
            '  有时被认为是书面作品，非舞台演出',
            '',
            '问：两种传统的根本目的差异是什么？'
          ]
        },
        question: {
          leadIn: '「亚里士多德在《诗学》里说，悲剧通过引发怜悯和恐惧，实现情感的净化（katharsis）。」珀西瓦尔说，「这是希腊悲剧的核心目标：观众坐在剧场里，随着英雄的下落感受恐惧，随着他的苦难感受怜悯，然后这些情感在戏剧结束时被释放——净化了。」她停顿，「塞内卡的悲剧有非常不同的重心。他的戏剧人物在极端处境中发表长篇独白，展示斯多葛哲学的原则：智者如何在命运的打击下保持理性和尊严。」她转身，「这两种目的的根本差异是什么？」',
          text: '「亚里士多德的悲剧目标与塞内卡悲剧的核心差异在于？」',
          options: [
            '希腊悲剧用诗歌，塞内卡用散文',
            '希腊悲剧追求观众的情感净化，塞内卡悲剧展示哲学原则和修辞示范',
            '希腊悲剧有合唱队，塞内卡没有'
          ],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「情感净化与哲学示范——这是两种传统最根本的目的差异。这个差异会导出所有其他的手法差异：暴力是否在台上呈现，人物独白的长度，合唱队的作用，悲剧主角的性格类型。」',
        contextWrong: '「目的的差异。」她重复，不带感情，「形式上的差异——诗歌/散文、有无合唱队——是表象，不是根本。根本差异是：希腊悲剧试图净化观众的情感，塞内卡的悲剧试图示范斯多葛哲学。一个是情感教育，一个是哲学教育，方向完全不同。」',
        blackboard: {
          type: 'formulas',
          label: '希腊 vs 塞内卡悲剧对比',
          lines: [
            '           希腊（索福克勒斯）  塞内卡',
            '目的：     情感净化（katharsis）  哲学示范',
            '暴力：     通常在台后         常在台上呈现',
            '独白：     适度，推动情节     长篇，展示观点',
            '主角：     命运下的受害者     极端处境中的哲学家',
            '受众：     公民剧场观众       可能是书面读者',
            '合唱队：   核心结构元素       存在但边缘化'
          ]
        }
      },
      {
        point: '塞内卡风格特征：horridus 与修辞密度',
        blackboard: {
          type: 'formulas',
          label: '塞内卡散文/戏剧风格',
          lines: [
            '修辞特征：',
            '  sententiae（格言式警句）：高密度',
            '  暗喻与反讽：浓缩',
            '  句式：短促，斩截，没有西塞罗式的长句叠套',
            '',
            '内容特征：',
            '  极端情感的解剖（愤怒、恐惧、疯狂）',
            '  斯多葛原则的反向示范：',
            '    → 主角失去理性，展示了失去理性的代价',
            '',
            '风格评价（后世）：horridus（粗砺/强烈）'
          ]
        },
        context: '「塞内卡的文风与西塞罗截然相反。」珀西瓦尔说，「西塞罗用长句叠套长句，把逻辑层层铺开，让读者跟着他走完整个论证。塞内卡用短句和格言——每一句像一把锤子，落下来就是一个判断。」她停顿，「古代批评家用 horridus 形容他——这个词可以是贬义（粗糙），也可以是褒义（有力度/震撼感）。取决于你认为文学的目的是什么。」她转向学生，「这本身就是一个文学批评的问题——没有唯一正确答案，但你必须能说出你的判断和理由。」'
      },
      {
        point: '希腊影响：塞内卡如何重写希腊题材',
        blackboard: {
          type: 'formulas',
          label: '塞内卡 Medea vs 欧里庇得斯 Medea',
          lines: [
            '欧里庇得斯版本（公元前431年）：',
            '  美狄亚经历内心挣扎，冲动与母爱对抗',
            '  谋杀儿子是痛苦的决定，观众感受到悲剧性',
            '',
            '塞内卡版本：',
            '  美狄亚的愤怒是核心，几乎没有内心动摇',
            '  暴力在台上呈现（希腊剧在台后）',
            '  她宣告：Medea superest（美狄亚仍然存在）',
            '  → 不是悲剧受害者，是意志的体现'
          ]
        },
        context: '「同一个故事，两种美狄亚。」珀西瓦尔说，「欧里庇得斯的美狄亚在杀孩子之前犹豫——她知道自己在做什么，她试图阻止自己，她做不到。希腊悲剧的核心矛盾在这里：一个人在理性和情感之间撕裂，无法自救。」她停顿，「塞内卡的美狄亚不犹豫——她是愤怒本身的化身，是意志力量的极端体现。在最后一场她杀完孩子升上天空，说出 Medea superest——美狄亚仍然存在。」她停顿，「这不是悲剧受害者，这是斯多葛反面教材——极端情绪驱动下的人类可以走多远。」'
      },
      {
        point: '主题对比：命运与个人意志',
        blackboard: {
          type: 'formulas',
          label: '两种悲剧传统的世界观',
          lines: [
            '希腊传统：',
            '  人与命运（moira/fatum）的对抗',
            '  神明的意志凌驾于人的意志之上',
            '  无论英雄多么努力，命运早已写定',
            '',
            '塞内卡传统：',
            '  斯多葛世界观：命运不可改，但态度可控',
            '  真正的问题不是命运，而是人面对命运时',
            '  能否保持理性和道德判断',
            '',
            '→ 希腊：被命运碾压是悲剧',
            '→ 塞内卡：失去理性才是悲剧'
          ]
        },
        context: '「这两种传统背后是两种哲学。」珀西瓦尔靠在讲台旁，「希腊悲剧里，命运（moira）是至高的——俄狄浦斯不管做什么，弑父娶母的命运已经写定，他的努力只是在完成命运的布局。人在命运面前是渺小的，悲剧性来自这种渺小。」她停顿，「斯多葛哲学不同——它说：你不能控制外部事件，但你永远可以控制你对事件的反应。真正的失败是内部的：失去理性，失去判断，被情绪驾驭。塞内卡的悲剧主角通常是在内部失败的人——他们的命运是自己选择的，不是神明写定的。」'
      }
    ],
    lessonSummary: '希腊悲剧（亚里士多德传统）以情感净化（katharsis）为目的，通过怜悯和恐惧的情感体验实现净化；暴力通常在台后，主角是命运的受害者。塞内卡悲剧以哲学示范（斯多葛原则）为目的，文风短促有力（horridus），暴力在台上呈现，主角是意志/情绪的体现。以美狄亚为例：欧里庇得斯版关注内心挣扎和悲剧性撕裂，塞内卡版关注愤怒意志的完整实现（Medea superest）。世界观差异：希腊——命运碾压个人是悲剧；斯多葛——失去理性才是真正的悲剧。',
    nextLessonPreview: '「下节课：贺拉斯——从颂歌到文学批评。他在 carpe diem 里说的，不是你们以为的那个意思。」'
  },

  62: {
    atmosphere: '黑板上只写了一行字：Carpe diem, quam minimum credula postero。珀西瓦尔教授站在这行字旁边，手里拿着细头钢笔，没有要解释的意思，只是等着看谁会先开口。没有人开口。',
    opening: '「你们认识这句话。」珀西瓦尔说，「Carpe diem。」她停顿，「告诉我它的意思。」沉默持续了一会儿，有人说：活在当下。「不完全对。」她用钢笔指着这行字的后半截，「quam minimum credula postero——对明天尽量少信任。」她放下钢笔，「贺拉斯写的不是\'享受今天\'，他写的是\'不要依赖明天\'。一个字的差别，一种完全不同的哲学立场。今天我们读贺拉斯。」',
    keyPoints: [
      {
        point: 'Carpe diem 的准确含义：seize vs pluck',
        blackboardQ: {
          type: 'formulas',
          label: 'Carpe diem 词义精析',
          lines: [
            'Carpe ← carpo（采摘/摘取）',
            '  → 农业意象：摘取成熟的果实',
            '  → 在合适的时机采取行动',
            '',
            '常见误译：seize the day（抓住这一天）',
            '  → 暗示主动进攻、激进行动',
            '',
            '更准确：pluck the day（采摘这一天）',
            '  → 合适时机，从容的把握，非强夺',
            '',
            '完整诗句补足：quam minimum credula postero',
            '  → 对明天尽量少信任（斯多葛告诫）'
          ]
        },
        question: {
          leadIn: '「carpo 这个动词，」珀西瓦尔说，「在农业语境里是采摘——摘取成熟的果实，在正确的时候，用正确的方式。不是强夺，不是抢先，是在恰当时机的从容把握。」她停顿，「这个细节很重要，因为它改变了 carpe diem 的整体哲学色彩——不是\'活得猛烈\'，而是\'把握时机\'。」她指着黑板上的后半句，「再加上 quam minimum credula postero——对明天尽量少信任。」她转向学生，「这句话更接近什么样的人生态度？」',
          text: '「Carpe diem quam minimum credula postero 最准确地表达了什么？」',
          options: [
            '尽情享乐，活在当下，不考虑后果',
            '在恰当时机从容行动，不依赖未来的保证',
            '抓住每一个机会，积极进取'
          ],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「从容把握，不依赖未来——这才是贺拉斯的哲学立场。它接近斯多葛的命运观：未来不在你控制之内，所以对它的信任要最小化；但这不是悲观，而是在可以行动的当下采取恰当的行动。」',
        contextWrong: '「从容行动，不依赖未来。」她重复，不带感情，「carpo 是采摘，不是抢夺。quam minimum credula postero 说的是对明天不信任，不是\'活得猛烈\'或\'积极进取\'。贺拉斯写的是一种克制的智慧：把握此刻，因为明天不可靠，不是因为今天要最大化享乐。」',
        blackboard: {
          type: 'formulas',
          label: 'Carpe diem 哲学立场',
          lines: [
            '误读版本：抓住每一刻，享乐至上',
            '准确版本：在恰当时机采取行动',
            '           + 不对不可控的明天过度信任',
            '',
            '哲学背景：',
            '  斯多葛：控制你能控制的，接受你不能控制的',
            '  伊壁鸠鲁：此刻的安宁（ataraxia）是最高善',
            '',
            '贺拉斯两种哲学都借鉴，但归于从容的克制'
          ]
        }
      },
      {
        point: '颂歌形式：Alcaic 和 Sapphic 诗节',
        blackboard: {
          type: 'formulas',
          label: '贺拉斯颂歌的主要诗节形式',
          lines: [
            'Alcaic 诗节（最常用）：',
            '  行1-2：11音节 uu—u——u——',
            '  行3：  9音节',
            '  行4：  10音节',
            '',
            'Sapphic 诗节：',
            '  行1-3：11音节（Sapphic hendecasyllable）',
            '  行4：  5音节（Adonic）',
            '',
            '特征：严格的音节和长短音格律',
            '  → 每行的节奏都是固定的',
            '  → 与内容形成对话或张力'
          ]
        },
        context: '「贺拉斯把希腊的抒情诗格律第一次完整地移植到拉丁语。」珀西瓦尔在黑板上写出两种诗节的基本音节图式，「Alcaic 和 Sapphic——这两种格律来自古希腊诗人阿尔凯俄斯和萨福。贺拉斯自己说，他是第一个把它们\'成功带入拉丁语\'的人。」她停顿，「格律不只是形式——它创造了一种听觉期待，读者在每行开始时就知道节奏模式，这种预期和内容形成对话：有时格律强化内容的情绪，有时造成反讽的张力。」'
      },
      {
        point: '贺拉斯的美学理论：ut pictura poesis',
        blackboard: {
          type: 'formulas',
          label: '《诗艺》中的核心命题',
          lines: [
            'ut pictura poesis（Ars Poetica 361）',
            '  = "如是绘画，如是诗歌"',
            '  → 诗歌与绘画遵循相同的美学原则',
            '',
            '核心主张：',
            '  诗歌的目的是 aut prodesse aut delectare',
            '  = 教益 或 愉悦（最好是两者兼得）',
            '',
            '对诗人的要求：',
            '  ingenium（天才）+ ars（技艺）',
            '  → 天生才华 + 精心磨炼，两者缺一不可'
          ]
        },
        context: '「贺拉斯在《诗艺》里写了西方文学批评史上最有影响的两个命题。」珀西瓦尔说，「第一个：ut pictura poesis——诗歌如绘画，从不同距离看有不同效果，没有单一的正确观看方式。」她停顿，「第二个：诗歌的目的是 aut prodesse aut delectare，教益或愉悦，最好两者都有。」她在黑板上写下这两个词，「这个命题在文艺复兴时代被欧洲所有文学批评家引用——\'有用且令人愉快\'成为评价文学的标准模板。贺拉斯写于公元前19年的标准，一直用到18世纪。」'
      },
      {
        point: '影响研究：贺拉斯与后世欧洲文学',
        blackboard: {
          type: 'formulas',
          label: '贺拉斯在欧洲文学史的地位',
          lines: [
            '中世纪：在修道院手稿中大量抄写，被视为道德权威',
            '',
            '文艺复兴：',
            '  → 被重新发现，成为学术拉丁语的范本',
            '  → carpe diem 进入欧洲抒情诗传统',
            '',
            '17-18世纪：新古典主义',
            '  → "教益与愉悦"被奉为文学批评金标准',
            '  → ut pictura poesis 影响整个视觉艺术理论',
            '',
            '现代：误读的 carpe diem 已经独立于贺拉斯'
          ]
        },
        context: '珀西瓦尔在黑板前静站一秒，「贺拉斯有一件事他自己预测到了——他在《颂歌》里写：\'我将不会完全死去\'（non omnis moriar）。」她停顿，「他对了。」她停顿，「不是因为每个人都记得他，而是因为\'carpe diem\'这三个字已经从他的诗歌里脱离出去，独立存在于现代语言里——即使大部分人不知道它来自哪里，甚至不知道它的准确含义。」她最后说：「一个词进入文化，然后失去它的出处——这本身就是词源学最有意思的事情之一。」'
      }
    ],
    lessonSummary: 'Carpe diem 的准确词义：carpo（采摘）而非 seize（抢夺），完整诗句 quam minimum credula postero（对明天尽量少信任）表达从容把握当下、不依赖不可控未来的斯多葛/伊壁鸠鲁混合立场，而非纯粹的享乐主义。贺拉斯颂歌使用 Alcaic 和 Sapphic 诗节，将希腊格律移植到拉丁语。《诗艺》两大命题：ut pictura poesis（诗如绘画）和 aut prodesse aut delectare（教益或愉悦），后者成为西欧文学批评18世纪前的核心标准。影响研究：贺拉斯通过手稿传统和文艺复兴重新发现，持续塑造欧洲文学批评话语。',
    nextLessonPreview: '「下节课：卢克莱修——他试图用诗歌证明原子的存在。这是一个很奇怪的决定，原因也很有意思。」'
  },

  63: {
    atmosphere: '黑板上写着两行字：上面一行是拉丁文：Suave, mari magno turbantibus aequora ventis，下面一行是中文翻译：看别人在大海里被风暴吞没，是甜蜜的。珀西瓦尔教授站在两行字旁边，手背在后，表情平静，像这句话里没有任何不寻常的东西。',
    opening: '「卢克莱修《物性论》，第二卷开头。」珀西瓦尔说，「在大海里风暴肆虐、翻涛骇浪时，站在岸上看，是甜蜜的。」她停顿，「他不是在说残忍。他是在用这个意象说明伊壁鸠鲁哲学的核心——当你从外部安全的位置审视人类的动荡时，你才能真正理解它，而不被它席卷。」她转向学生，「今天我们读卢克莱修。他是一个用诗歌写物理学和哲学论文的人，而且非常成功。」',
    keyPoints: [
      {
        point: '《物性论》的奇特选择：为什么用诗歌讲原子论？',
        blackboardQ: {
          type: 'formulas',
          label: '卢克莱修的写作策略',
          lines: [
            '困境：',
            '  伊壁鸠鲁哲学的核心内容（原子论、死亡论）',
            '  对普通读者来说过于抽象和令人不安',
            '',
            '解决方案：诗歌（六音步格律）',
            '  → 如同在苦药上涂蜜（卢克莱修自己的比喻）',
            '  → 优美的语言让读者愿意继续读下去',
            '  → 在审美愉悦中接受哲学论证',
            '',
            '手法：具体意象+抽象哲学的交替'
          ]
        },
        question: {
          leadIn: '「卢克莱修自己解释过这个选择。」珀西瓦尔说，「他用了一个比喻：如果你要给孩子喝苦药，你在杯沿涂一点蜂蜜——孩子先感受到甜味，然后把药喝了，在喝的过程中已经得到了它需要的东西。」她停顿，「诗歌是蜂蜜，哲学论证是药。读者被诗歌的语言和节奏吸引，在审美愉悦中接受了原本会令人不安的哲学主张——比如：死亡什么都不是，神明不关心人类。」她转向学生，「为什么用诗歌而不是散文来讲哲学？」',
          text: '「卢克莱修选择用诗歌（而非散文）来表达伊壁鸠鲁哲学，主要原因是？」',
          options: [
            '诗歌比散文更容易论证原子的存在',
            '诗歌的审美愉悦使读者更愿意接受令人不安的哲学内容',
            '伊壁鸠鲁要求所有哲学作品用诗歌形式'
          ],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「苦药涂蜂蜜——卢克莱修自己的比喻。诗歌不是用来证明原子的，是用来让读者通过审美愉悦接受哲学论点，包括那些让人不舒服的论点：灵魂会消散，死后什么都没有，神明不干预人类事务。」',
        contextWrong: '「审美愉悦——用诗歌吸引读者接受内容。」她重复，不带感情，「诗歌本身不是论证工具——卢克莱修仍然在用逻辑论证，但把论证放在诗歌里，让读者在被语言愉悦的同时接受论点。伊壁鸠鲁本人写的是散文，不是诗歌——这是卢克莱修的个人选择，不是哲学要求。」',
        blackboard: {
          type: 'formulas',
          label: '《物性论》的写作逻辑',
          lines: [
            '目标：用诗歌传播伊壁鸠鲁哲学',
            '      让哲学论证对普通罗马读者可接受',
            '',
            '核心哲学主张：',
            '  → 万物由原子和虚空构成',
            '  → 灵魂是原子构成，死后消散',
            '  → 死亡 = 感知的终止，不是苦难的开始',
            '  → 神明存在但不干预人类事务',
            '',
            '修辞策略：用诗歌降低哲学的抵触感'
          ]
        }
      },
      {
        point: '核心论证：死亡不是苦难——nihil ad nos',
        blackboard: {
          type: 'formulas',
          label: '卢克莱修的死亡论证',
          lines: [
            '前提1：感知需要原子的组合',
            '前提2：死亡时原子组合解散，感知消失',
            '结论：死亡时不存在能感受苦难的"你"',
            '',
            '"nihil ad nos" = 死亡对我们毫无关系',
            '',
            '类比：你出生之前的无数岁月',
            '  → 你不会为那段时间痛苦',
            '  → 死后的情况完全相同',
            '',
            '目标：消除对死亡的非理性恐惧（metus mortis）'
          ]
        },
        context: '「卢克莱修花了整整一卷讨论死亡，」珀西瓦尔说，「他的论证非常精确。」她在黑板上逐步写出论证链，「如果感知需要原子组合，原子组合死后解散，那么死后就没有感知，没有感知就没有苦难，没有苦难就没有值得恐惧的东西。」她停顿，「他用一个类比加强这个论证：你出生之前存在着无数年的时间，你没有为那些年感到痛苦——死后的情况完全相同，那么你现在为什么要害怕它？」她靠在讲台边，「这是一个非常干净的论证——而且用六音步史诗格律写出来。」'
      },
      {
        point: '诗歌表达与哲学论证的交织',
        blackboard: {
          type: 'formulas',
          label: '《物性论》的文学手法',
          lines: [
            '宏大意象 + 微观论证并置：',
            '  → 描述宇宙的无限（大意象）',
            '  → 然后切入原子的微小（小论证）',
            '',
            '感官意象：让不可见的原子"可见"',
            '  → 灰尘在光束里的漂浮 = 原子运动',
            '  → 风感受不到但摧毁树木 = 虚空中的力',
            '',
            '情感语气：伊壁鸠鲁的平静（ataraxia）',
            '  → 诗歌的语调本身示范了哲学目标'
          ]
        },
        context: '「卢克莱修需要让读者想象看不见的东西。」珀西瓦尔说，「原子是不可见的——怎么让人理解它的存在和运动？他用类比：看见阳光从窗户斜射进来，里面漂浮的灰尘——那些灰尘虽然不是原子，但它们的运动模式给了你一个关于原子运动的直观画面。」她停顿，「风感受不到，但你能看见它折弯树枝，吹走帆船——这说明看不见的东西可以产生看得见的效果。」她停顿，「这是科学类比在诗歌里的用法——用可见的现象解释不可见的原理。《物性论》里充满了这类手法。」'
      },
      {
        point: '科学思想：卢克莱修与近代科学革命的关系',
        blackboard: {
          type: 'formulas',
          label: '《物性论》与近代科学',
          lines: [
            '被遗忘：约5世纪到15世纪，手稿几乎消失',
            '',
            '1417年重新发现：波焦·布拉乔利尼在修道院找到',
            '  → 文艺复兴思想的重要催化剂',
            '',
            '影响：',
            '  → 伽利略的原子论思想',
            '  → 牛顿的物质理论',
            '  → 达尔文进化论（变体与选择的思想）',
            '',
            '《物性论》预见了：原子、真空、物质守恒'
          ]
        },
        context: '珀西瓦尔在黑板上写下1417这个年份，「这是《物性论》被重新发现的年份。」她说，「在中世纪，这本书几乎消失了——只有极少数手稿存活。一个叫波焦·布拉乔利尼的书记员在德国一个修道院的书架上找到了它，抄写了一份，送了出去。」她停顿，「一千年后，它重新进入欧洲思想。」她停顿，「卢克莱修在公元前55年写的原子论，和近代化学的基本假设是同一个：物质由不可分的最小单位构成，这些单位的不同组合产生不同的物质。他不是用实验得出的，是用哲学推理得出的——在实验科学存在之前两千年。」'
      }
    ],
    lessonSummary: '卢克莱修《物性论》用六音步史诗格律传播伊壁鸠鲁哲学，策略是"苦药涂蜂蜜"：用诗歌的审美愉悦使读者接受令人不安的哲学主张（原子论、死亡是感知终止）。核心论证 nihil ad nos：死亡时原子解散、感知消失，因此死亡对我们毫无关系，死前无限岁月的类比强化这一论证。文学手法：宏大意象+微观论证并置，用可见现象（灰尘/风）类比不可见原子，诗歌语调本身示范伊壁鸠鲁的平静（ataraxia）。1417年重新发现后，影响了文艺复兴和近代科学革命（原子论、物质守恒思想）。',
    nextLessonPreview: '「下节课：文体比较。散文、诗歌、历史写法——同样的事情，三种作家会用三种完全不同的语言策略来说它。」'
  },

  64: {
    atmosphere: '黑板分成三栏：散文（Cicero）、诗歌（Virgil）、历史（Tacitus）。每栏下面有一个场景：凯撒的死。三个作者，同一个事件，三种语言。珀西瓦尔教授在三栏前移动，手里没有粉笔，只是看着这三个名字。',
    opening: '「同一件事：凯撒在元老院被刺杀，公元前44年3月15日。」珀西瓦尔说，「西塞罗的演讲版本，维吉尔的史诗版本，塔西佗的历史版本——三种不同的写作目的，三种不同的语言策略，三种完全不同的读者体验。」她停顿，「今天我们学的不是这件历史事件，而是文体如何决定语言选择，语言选择如何决定读者感受。」',
    keyPoints: [
      {
        point: '散文的语言特征：论证性与修辞控制',
        blackboardQ: {
          type: 'formulas',
          label: '拉丁散文的语言策略（以西塞罗为例）',
          lines: [
            '词汇选择：准确性优先，避免歧义',
            '句式：hypotaxis（长句嵌套）用于铺排论证',
            '       parataxis（并列短句）用于强调对比',
            '修辞手法：有意识地部署，增加说服力',
            '视角：通常明确（第一人称 ego 或集体 nos）',
            '',
            '西塞罗论凯撒之死：',
            '  重点在政治意义和正当性论证',
            '  语言服务于说服，不是情感'
          ]
        },
        question: {
          leadIn: '「散文——尤其是演讲散文——是为了说服。」珀西瓦尔说，「西塞罗在谈论凯撒之死时，语言的首要任务是论证：这件事是否正当，行刺者的动机是否值得被尊重，这对共和国意味着什么。」她停顿，「诗歌——维吉尔在《埃涅阿斯纪》里暗示了这一历史事件——语言的首要任务是制造情感共鸣和宇宙意义感。历史——塔西佗的叙述——语言的首要任务是建立可信度和道德判断。」她转向学生，「这三种文体，在语言上最根本的差异是什么？」',
          text: '「散文（演讲体）、诗歌、历史写作三种文体的核心语言目的分别是？」',
          options: [
            '散文→说服，诗歌→情感共鸣/宇宙意义，历史→可信叙事+道德判断',
            '散文→描述，诗歌→娱乐，历史→记录事实',
            '三种文体语言目的相同，只有格律不同'
          ],
          answer: 0
        },
        contextRight: '「不错。」她停了一秒，「说服、情感共鸣、可信叙事——三种目的决定三种语言策略：散文用逻辑控制，诗歌用意象和节奏，历史用简洁的陈述和讽刺的暗示。」',
        contextWrong: '「三种目的：说服、情感共鸣、可信叙事加道德判断。」她重复，不带感情，「文体差异不只是有无格律——格律只是诗歌的表面特征，更深的差异是语言为什么目的服务。描述/娱乐/记录是过度简化的表述，没有捕捉到拉丁作者对自己写作目的的理解。」',
        blackboard: {
          type: 'formulas',
          label: '三种文体的语言策略对比',
          lines: [
            '散文：',
            '  目的：说服 / 论证',
            '  特征：逻辑控制，修辞有意识部署',
            '',
            '诗歌：',
            '  目的：情感共鸣 / 宇宙/道德意义感',
            '  特征：意象密集，格律创造节奏期待',
            '',
            '历史：',
            '  目的：可信叙事 + 道德评判',
            '  特征：简洁，暗示多于陈述，讽刺'
          ]
        }
      },
      {
        point: '诗歌的语言特征：意象密度与格律',
        blackboard: {
          type: 'formulas',
          label: '拉丁诗歌语言策略（以维吉尔为例）',
          lines: [
            '词序：极度自由，服务于格律和音效',
            '  → 意义单元可以被打散重组',
            '意象：密集，一个词可以携带多层含义',
            '视角：史诗用第三人称，但有强烈的道德立场',
            '',
            '维吉尔在《埃涅阿斯纪》里暗示凯撒之死：',
            '  Ecce! （看啊！）引入惊叹/震惊',
            '  用宇宙征兆（彗星/日食）框架历史事件',
            '  → 把政治暗杀提升为宇宙叙事'
          ]
        },
        context: '「诗歌的词序和散文的词序是不同的逻辑。」珀西瓦尔说，「散文的词序服务于逻辑推进；诗歌的词序服务于格律、音效、和意义的密度。」她在黑板上写了一行维吉尔的诗句，把词的顺序标注出来，「在这行诗里，修饰语和被修饰词被分开了，放在行首和行尾——这样做是为了格律，同时制造一种悬念效果：你先知道形容词的性质，然后要等到行尾才知道它修饰的是什么。」她停顿，「这种延迟本身就是一种意义。散文不能这样做——逻辑推进不允许这样的悬念。」'
      },
      {
        point: '历史写法：塔西佗的简洁与讽刺',
        blackboard: {
          type: 'formulas',
          label: '塔西佗的历史写作风格',
          lines: [
            '文体特征：brevitas（简洁）',
            '  → 删去一切不必要的词',
            '  → 每个词都有重量',
            '',
            '讽刺策略：',
            '  → 表面中立的陈述，暗含批判',
            '  → 引用官方说法，然后紧接着与事实对照',
            '',
            '道德评判：',
            '  → 历史家的职责是记录道德典范与警示',
            '  → 不是中立的记录者，是道德法庭',
            '',
            '风格评价：difficilis（艰涩），但密度极高'
          ]
        },
        context: '「塔西佗的拉丁语是 A-Level 阶段最难读的。」珀西瓦尔直接说，「原因不是词汇困难，是密度太高——他把散文里通常需要两句话说的内容压缩进一句话，然后把修饰语全部删掉，只留下骨骼。」她停顿，「他的讽刺不是明说的——他写：皇帝颁布了这道法令，\'为了人民的利益\'。然后下一句描述法令的实际效果完全相反。」她停顿，「这是历史家的讽刺：用官方语言和实际事件的并置，不加评论，让读者自己得出结论——但读者已经无法不得出那个结论。」'
      },
      {
        point: '读者定位：三种文体预设的读者',
        blackboard: {
          type: 'formulas',
          label: '三种文体的读者预设',
          lines: [
            '演讲散文（西塞罗）：',
            '  → 现场听众（元老院），受过修辞训练',
            '  → 预设：需要被说服，对政治高度关注',
            '',
            '史诗诗歌（维吉尔）：',
            '  → 受过教育的罗马读者，熟悉希腊史诗传统',
            '  → 预设：寻找宏大叙事和道德框架',
            '',
            '历史（塔西佗）：',
            '  → 受过高等教育的精英读者',
            '  → 预设：能读懂暗示，有批判性思维',
            '  → 不需要手持读者的手，直接给出材料'
          ]
        },
        context: '「文体不只是写作策略——它是作者和读者之间的一个合约。」珀西瓦尔说，「西塞罗的演讲有即时的现场性，他需要当场说服站在他面前的元老们，语言必须立刻奏效。维吉尔的史诗是在书写一种永久性的国家神话，读者是在私下阅读的受教育者，他们有时间和耐心处理复杂的意象。」她停顿，「塔西佗的历史预设的是精英读者——他不解释，他暗示，他期待读者能补全那些没说出来的部分。」她停顿，「当你拿到一段拉丁文本，第一个问题不是\'这句话是什么意思\'，而是\'这是什么文体，为谁写的\'——这个判断决定你用什么框架来解读所有后面的东西。」'
      }
    ],
    lessonSummary: '三种拉丁文体各有其核心语言目的和策略：散文（演讲体/西塞罗）以说服为目的，用逻辑控制和有意识的修辞部署；诗歌（维吉尔）以情感共鸣和宇宙意义感为目的，词序服务于格律和意义密度；历史（塔西佗）以可信叙事和道德判断为目的，用简洁（brevitas）和讽刺暗示而非直接评论。读者预设决定语言策略：演讲需立即奏效，史诗允许处理复杂意象，历史写作预设能读懂暗示的精英读者。分析任何拉丁文本，首先判断文体和预设读者，这决定所有后续解读框架。',
    nextLessonPreview: '「下节课：原创翻译与注释写作。我们会处理一段真正的未注释原文，你们来翻，来注，来判断——不是练习，是做真实的学术工作。」'
  },

  65: {
    atmosphere: '每个学生的桌上放着同一份打印纸：一段未注释的塔西佗文本，没有词汇表，没有任何帮助。珀西瓦尔教授站在讲台后，双手交叠放在桌上，像这是一次正式的专业会议。',
    opening: '「今天没有新语法，没有文学背景讲解，没有课堂提示。」珀西瓦尔说，「那张纸上是一段塔西佗的原文。你们的任务是：翻译，写注释，解释你的翻译选择。」她停顿，「这是 A-Level 毕业之后真正的学术工作的样子。今天我们练习做这件事，然后我们讨论你们做的各种选择——不是判断对错，是讨论策略。」',
    keyPoints: [
      {
        point: '翻译策略：直译与意译的选择原则',
        blackboardQ: {
          type: 'formulas',
          label: '两种翻译策略',
          lines: [
            '直译（字面翻译）：',
            '  → 最大程度保留原文结构和词序',
            '  → 适用：语法分析，学术研究，保留歧义',
            '  → 风险：目标语言读起来生硬或不自然',
            '',
            '意译（自由翻译）：',
            '  → 优先目标语言的流畅自然',
            '  → 适用：一般读者，文学作品，公众传播',
            '  → 风险：丢失原文的细微差别或多义性',
            '',
            '没有永远正确的策略——取决于目的和受众'
          ]
        },
        question: {
          leadIn: '「翻译的第一个决定是：你在为谁翻译，为了什么目的？」珀西瓦尔说，「如果你在给语言学家看，他需要看见原文的所有语法信息，你要用直译。如果你在给一般读者看，他需要理解内容，你要用意译。如果你在给文学读者看，他需要感受原文的节奏和风格，你需要用一种特殊的意译——保留情感质感而不是字面结构。」她停顿，「这张纸上的塔西佗，如果要翻译给现代中文读者，你选哪种策略？」',
          text: '「以下哪种情况应该选择直译而非意译？」',
          options: [
            '翻译给一般公众阅读的文化普及读本',
            '翻译供语言学分析或学术注释使用的原文',
            '翻译给中学生读的文学选本'
          ],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「学术分析需要直译——研究者需要看见原文的所有语法特征，包括歧义、双关和不常见的结构，这些在意译里通常被消解掉了。」',
        contextWrong: '「学术注释用途。」她重复，不带感情，「公众读本和中学选本的读者需要流畅性，所以意译优先。学术研究需要看见原文信息的全部，所以直译优先——即使读起来有点生硬，学术读者能处理这种生硬，而且他们需要生硬里保留的信息。」',
        blackboard: {
          type: 'formulas',
          label: '翻译策略决策矩阵',
          lines: [
            '受众→专业研究者：直译 + 详细注释',
            '受众→普通读者：  意译 + 简短说明',
            '受众→文学读者：  风格化意译（保留情感质感）',
            '',
            '目的→语法分析：  直译（保留所有语法信息）',
            '目的→文化传播：  意译（优先可读性）',
            '目的→比较研究：  平行文本（原文+译文并排）'
          ]
        }
      },
      {
        point: '注释规范：什么值得注释，什么不值得',
        blackboard: {
          type: 'formulas',
          label: '学术注释的取舍原则',
          lines: [
            '值得注释：',
            '  → 语法结构罕见或有歧义',
            '  → 词汇有多个可能义项，选择需要说明',
            '  → 历史背景对理解至关重要',
            '  → 文化概念无直接对应（如 pietas）',
            '  → 你的翻译选择与其他译本不同',
            '',
            '不值得注释：',
            '  → 常规语法结构',
            '  → 词义在语境中唯一确定',
            '  → 现代读者能直接理解的背景'
          ]
        },
        context: '「注释的目的是帮助读者理解你无法在正文里解释的东西。」珀西瓦尔说，「不是每一个词都需要注释——这会让注释淹没正文，读者无法专注于文本本身。」她停顿，「取舍的标准很简单：如果这个信息是读者没有必要知道的，或者任何受过教育的读者都会知道，不需要注释。如果你对这个词做了一个有争议的翻译选择，或者这个词的含义对理解整段话至关重要，必须注释。」她停顿，「最重要的注释是：解释你为什么这样选而不是那样选。这是你作为译者的判断，读者需要知道它。」'
      },
      {
        point: '学术深度：如何处理有歧义的文本',
        blackboard: {
          type: 'formulas',
          label: '有歧义文本的处理策略',
          lines: [
            '方法一：选择一种，在注释中说明另一种可能',
            '  → 正文给出你认为最可能的译法',
            '  → 注释：\'此处亦可译为……，因为……\'',
            '',
            '方法二：正文中用括号标注两种可能',
            '  → 当两种读法都高度可能，且含义差距大',
            '',
            '方法三：保留歧义',
            '  → 如果作者意图就是双关，目标语言也保留',
            '  → 在注释里说明这是刻意的双关'
          ]
        },
        context: '「拉丁文本里有些歧义是作者故意的，有些是语言本身的局限，有些是传抄损失造成的。」珀西瓦尔说，「你的工作是判断这是哪种情况，然后做出相应的选择。」她停顿，「如果你认为塔西佗在这里故意使用了一个双关，你在翻译里要保留它——但你需要在注释里解释：\'此处原文 X 有A和B两种读法，保留歧义是因为两种读法都与上下文的讽刺结构相符。\'」她停顿，「这才是学术翻译——不只是给出答案，而是展示你的判断过程。」'
      },
      {
        point: '文本阐释：翻译与解读的边界',
        blackboard: {
          type: 'formulas',
          label: '翻译与诠释的分界',
          lines: [
            '翻译：在目标语言里重建原文的语言信息',
            '  → 包括：语法/词义/语气/语调',
            '  → 不包括：你对原文的解读立场',
            '',
            '诠释（注释/文学评论）：',
            '  → 解释文本的意义、策略、效果',
            '  → 你可以表达立场，但必须有根据',
            '',
            '危险区：翻译时加入解读',
            '  → 原文中性，翻译时选了一个有立场的词',
            '  → 这是在偷偷做诠释，读者看不出来'
          ]
        },
        context: '珀西瓦尔在讲台边站定，「最容易犯的错误是：在翻译里偷偷加入解读。」她说，「原文用了一个中性的词，你翻译成了一个有明显情感倾向的中文词——这看起来是翻译，实际上是诠释，但没有告诉读者你做了这个选择。」她停顿，「例子：塔西佗写某人 coactus（被迫）做了某事。你翻译成\'被迫\'，这是准确的。如果你翻译成\'无奈地\'，你已经加入了情感判断——被迫不一定代表无奈，它可以是愤怒，可以是抵制，可以是妥协。\'无奈\'是你的诠释，不是文本的信息。」她停顿，「把翻译和诠释分开，分别放在正文和注释里——让读者知道哪些是文本给的，哪些是你的判断。」'
      }
    ],
    lessonSummary: '翻译策略选择取决于目的和受众：直译适用于学术注释和语法分析（保留全部语法信息），意译适用于普通读者（优先流畅性），风格化意译适用于文学读者（保留情感质感）。注释取舍原则：注释罕见语法、多义词选择理由、无直接对应的文化概念、与其他译本的分歧，不注释常规内容。有歧义文本处理：选择一种译法并在注释中说明另一种可能；若歧义是刻意双关则在目标语言中保留并注明。翻译与诠释必须分开：翻译重建语言信息，诠释表达解读立场——将隐形诠释混入翻译是学术写作中必须避免的错误。',
    nextLessonPreview: '「下节课：无准备文本。不是练习，是考试条件下你真正需要做的事情——快速阅读，准确翻译，不浪费时间。」'
  },

  66: {
    atmosphere: '黑板上是一段没见过的拉丁文，没有任何标注，只有文字。珀西瓦尔教授在黑板旁，手里拿着一个计时器，「我会给你们四分钟看这段文字。然后我问问题。」她按下计时器，什么也没说，等着。',
    opening: '「四分钟之后，计时器响了。」珀西瓦尔放下计时器，「你们做了什么？」她等了一下，「大部分人从第一个词开始逐词读，读到中间读不下去。」她指着黑板，「这是无准备文本——你们之前没有见过，没有背景，没有词汇表。这是A-Level考试里最考验能力的一种题型。」她停顿，「今天我们学策略——不是帮你们猜词，是帮你们在有限时间里最大程度地提取信息。」',
    keyPoints: [
      {
        point: '速读策略：扫描结构，不从词开始',
        blackboardQ: {
          type: 'formulas',
          label: '无准备文本速读步骤',
          lines: [
            '第一步（30秒）：扫描整段',
            '  → 找句号/分号，确认句子数量',
            '  → 找标点密集区（对话/列举）',
            '  → 找你认识的专有名词（人名/地名）',
            '',
            '第二步（1分钟）：逐句找主动词',
            '  → 不从第一个词开始',
            '  → 先找动词，然后找主语',
            '',
            '第三步：从主动词向外拓展',
            '  → 加宾语 → 加从句 → 加修饰'
          ]
        },
        question: {
          leadIn: '「无准备文本的最大敌人是从第一个词开始线性阅读。」珀西瓦尔说，「拉丁语主动词通常在句末，如果你从第一个词开始，你在一个不完整的语法结构里积累词义，但你不知道它们在句子里做什么，因为你还没见到动词。」她停顿，「正确的起点是：先扫全段，找到句子边界，然后在每个句子里先找动词，再找主语，然后向外拓展。」她转向学生，「面对一段未见过的拉丁文，第一步应该做什么？」',
          text: '「面对无准备文本，正确的第一步是？」',
          options: [
            '从第一个词开始逐词翻译',
            '先扫全文找句子边界和认识的关键词，再逐句找主动词',
            '先查找所有不认识的生词'
          ],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「扫描结构优先于处理词义。知道一段话有几个句子，哪里有对话，出现了哪些认识的专有名词——这些信息帮助你建立整体框架，然后再进入逐句分析。」',
        contextWrong: '「扫描结构，再找主动词。」她重复，不带感情，「逐词翻译是时间最低效的方法——你在不知道句子结构的情况下积累词义，等读到动词时可能已经迷失了。查生词更糟——在没有结构框架的情况下，查了词义也不知道放在哪里。先建立框架，再填入内容。」',
        blackboard: {
          type: 'formulas',
          label: '无准备文本四步处理',
          lines: [
            '第一步：扫全文 → 句数 + 已知关键词',
            '第二步：逐句找主动词（不从词首开始）',
            '第三步：主动词 → 主语 → 宾语/从句',
            '第四步：逐层翻译，遇生词先跳过',
            '',
            '遇到生词的原则：',
            '  1. 看词根猜义',
            '  2. 看语境推断功能（即使不知道意思）',
            '  3. 译出其他部分，留空或括注不确定'
          ]
        }
      },
      {
        point: '准确翻译：速度与精确的平衡',
        blackboard: {
          type: 'formulas',
          label: '速译中的精确维持',
          lines: [
            '不能妥协的精确：',
            '  → 格的识别（主格≠宾格，影响句子意思）',
            '  → 时态识别（过去≠现在，影响叙事）',
            '  → 语气识别（直陈≠虚拟，影响事实判断）',
            '',
            '可以简化的内容：',
            '  → 修辞的完美重现',
            '  → 文学语气的细腻调整',
            '',
            '遇到不确定的词：',
            '  → 译出语法特征（"某某格的名词"）',
            '  → 继续，不要停下来'
          ]
        },
        context: '「速度和精确是可以共存的，但你需要知道在什么地方绝对不能牺牲精确。」珀西瓦尔说，「格——主格和宾格搞错，句子意思完全反转：不是凯撒打败了庞培，而是庞培打败了凯撒。时态——现在时和过去时搞错，叙事时序乱掉。这些是骨架错误，一旦错，整段话的意思都是错的。」她停顿，「但如果你不能完美地重现一个修辞手法的文学效果，或者一个形容词的情感色彩稍有偏差——这些在速译里是可以接受的损失。把骨架做对，把时间留给骨架。」'
      },
      {
        point: '难点处理：生词与陌生结构',
        blackboard: {
          type: 'formulas',
          label: '处理生词和陌生结构',
          lines: [
            '生词策略：',
            '  1. 词根推断：认出已知词根，猜方向',
            '     → mis- 前缀（坏）/ bene-（好）...',
            '  2. 语法推断：确认格/时态，即使不知道词义',
            '  3. 语境推断：这个词在这个句子里逻辑上是什么',
            '  4. 跳过并标注：方括号 [?] 继续翻译',
            '',
            '陌生结构：',
            '  → 先识别结构类型（从句/分词/不定式）',
            '  → 确认边界，再逐词处理'
          ]
        },
        context: '「遇到生词，不要停。」珀西瓦尔说，「停下来想一个词的意思，浪费的时间比那个词本身价值更高。」她停顿，「处理生词的顺序：先看词根，你认不认识它来自哪个词族；再看它的语法形式，即使不知道意思，你知道它是名词的主格还是动词的第三人称；再看语境，这个词在这句话里逻辑上应该是什么意思——是行为、物体、还是性质？」她停顿，「如果这三个都失败，用方括号标注 [?]，继续翻译其他部分。考试里一个生词不是致命的，放弃整句话才是。」'
      },
      {
        point: '时间控制：分配与优先级',
        blackboard: {
          type: 'formulas',
          label: 'A-Level考试时间分配',
          lines: [
            '无准备文本翻译（总分比例通常较高）：',
            '  → 分配时间：约1/3考试时间',
            '',
            '内部时间分配：',
            '  → 10%：扫全文，建立框架',
            '  → 60%：逐句翻译',
            '  → 20%：处理困难部分',
            '  → 10%：检查',
            '',
            '检查优先级：',
            '  → 格（主/宾）是否正确',
            '  → 时态是否一致',
            '  → 有无漏译整句'
          ]
        },
        context: '珀西瓦尔在黑板上画了一个时间分配图，「这不是建议，」她说，「这是在考试结束后分析失分最多的学生得出的模式。」她停顿，「最常见的时间错误是：在前两句停留太久——因为刚开始，觉得要做到完美。然后后面的句子时间不够，草草了事。」她停顿，「无准备文本不是要做到完美——是要做到整体均匀的合理。每句话分配均匀的时间，遇到困难句不超时，留下来最后再回来处理，而不是卡在那里直到时间耗尽。」'
      }
    ],
    lessonSummary: '无准备文本速读策略：扫全文（句数/已知关键词）→逐句找主动词→向外拓展（宾语/从句/修饰）→逐层翻译。精确不能妥协的项目：格（主/宾混淆句义反转）、时态（叙事时序）、语气（事实判断）。生词处理优先级：词根推断→语法推断（即使不知词义）→语境推断→方括号[?]标注并继续。时间分配：10%扫全文→60%逐句翻译→20%难点→10%检查；检查优先格、时态、漏句。不在前两句追求完美，保持全文时间均匀分配。',
    nextLessonPreview: '「下节课：文学评论论点建构。A-Level最高分的文学评论有一个共同特征——今天我们找出来。」'
  },

  67: {
    atmosphere: '黑板上写着五个评分词：Knowledge（知识）/ Analysis（分析）/ Argument（论点）/ Evidence（证据）/ Expression（表达）。珀西瓦尔教授站在这五个词前面，拿着粉笔，指向最中间的那个：Argument，「这是决定分数档位的词。」',
    opening: '「A-Level文学评论的评分表有五个维度。」珀西瓦尔说，「大部分学生在 Knowledge 和 Evidence 上没有问题——他们知道文本，他们引用了原文。」她停顿，「他们失分的地方在 Argument。」她在 Argument 下面画了一道横线，「论点不是总结，不是描述，不是陈列修辞手法——论点是一个立场，一个判断，一个你用证据说服读者接受的观点。」她放下粉笔，「今天我们专门处理这件事。」',
    keyPoints: [
      {
        point: '什么是有效的文学论点',
        blackboardQ: {
          type: 'formulas',
          label: '论点的三个标准',
          lines: [
            '标准一：可争议性',
            '  → 有人可以持相反观点',
            '  → 不是"维吉尔写了这首诗"（事实）',
            '  → 是"维吉尔通过X手法表达了Y主题"（判断）',
            '',
            '标准二：可验证性',
            '  → 能从文本找到支撑证据',
            '',
            '标准三：重要性',
            '  → 这个论点揭示了文本的什么本质？',
            '  → 不是微不足道的技术细节'
          ]
        },
        question: {
          leadIn: '「我来给你们三个关于维吉尔的陈述，」珀西瓦尔说，「判断哪一个是有效的文学论点。」她逐一在黑板上写出：「第一：维吉尔在《埃涅阿斯纪》第一卷使用了 anaphora。第二：《埃涅阿斯纪》是一部史诗。第三：维吉尔在《埃涅阿斯纪》开篇将 arma（武器）置于 virum（人）之前，暗示这部史诗的根本张力是集体使命对个人意志的压制。」她停顿，「哪一个是有效的文学论点？」',
          text: '「以下哪一个是有效的文学评论论点？」',
          options: [
            '维吉尔在《埃涅阿斯纪》第一卷使用了 anaphora（技术识别）',
            '《埃涅阿斯纪》是一部史诗（事实陈述）',
            '开篇词序 arma 先于 virum 暗示集体使命对个人意志的压制（可争议判断）'
          ],
          answer: 2
        },
        contextRight: '「不错。」她停了一秒，「第三个满足三个标准：有人可以争议它（有人会说词序只是格律需要，不是意义选择）；可以用文本验证（词序确实如此）；重要——它揭示了这部史诗的核心张力。这才是文学论点。」',
        contextWrong: '「第三个。」她重复，不带感情，「识别 anaphora 是技术性观察，不是论点——你没有说它做了什么，为什么重要。\'这是史诗\'是事实，没有争议空间。只有第三个是判断：这个词序意味着某种主题立场，这个判断有人可以不同意，也可以用文本验证。」',
        blackboard: {
          type: 'formulas',
          label: '从观察到论点的转化',
          lines: [
            '观察：维吉尔用了 arma 先于 virum',
            '  → "维吉尔使用了词序X"（技术识别）',
            '',
            '论点：这个词序揭示了……因为……',
            '  → "词序X暗示了主题Y，因为……"',
            '',
            '升级路径：',
            '  识别手法 → 说明效果 → 解释为什么有此效果',
            '  → 联系到文本整体主题或作者目的'
          ]
        }
      },
      {
        point: '论证展开：从论题到段落结构',
        blackboard: {
          type: 'formulas',
          label: '论证的多层展开',
          lines: [
            '论题（全文核心立场）',
            '  ↓',
            '论点1（支持论题的第一个角度）',
            '  → 证据 + 分析（为什么这个证据支持论点）',
            '  ↓',
            '论点2（第二个角度或深化）',
            '  → 证据 + 分析',
            '  ↓',
            '论点3（第三个角度或反驳和回应）',
            '  → 证据 + 分析',
            '  ↓',
            '结论（综合论证，重申论题）'
          ]
        },
        context: '「论题和论点不是同一件事。」珀西瓦尔说，「论题是全文的核心立场——一句话，你的整篇文章要论证这一句话。论点是每个段落的具体主张——每个论点是论题的一个角度或支撑。」她停顿，「论证的层次结构：论题在最顶层，论点在各段，证据和分析在各段内部。如果你的段落里只有证据没有论点，你在描述；如果你的段落里只有论点没有证据，你在断言；只有两者结合加上分析，才是论证。」'
      },
      {
        point: '文本支撑：如何选择和使用证据',
        blackboard: {
          type: 'formulas',
          label: '有效证据的选择原则',
          lines: [
            '好的证据：',
            '  → 直接支持论点，无需过多解释前提',
            '  → 有分析潜力（不止一层意思）',
            '  → 原文引用精确（词语级别，非整段）',
            '',
            '弱的证据：',
            '  → 需要大量铺垫才能与论点挂钩',
            '  → 也可以支持相反的论点',
            '',
            '引用后必须分析：',
            '  → "这表明……因为……"',
            '  → 不只是翻译，是解释为什么这个词/结构',
            '    能支持你的论点'
          ]
        },
        context: '「证据是服务于论点的，不是独立存在的。」珀西瓦尔说，「大段引文后面跟着\'这展示了维吉尔的技巧\'——这是失败的证据使用。你选的引文需要有分析潜力：它里面有一个词、一个结构、一种语气，是你的论点能够落脚的地方。」她停顿，「引文精确比引文量大更重要。引用一个词，然后深度分析这个词如何支持你的论题——这比引用五行然后泛泛而谈更有说服力。」'
      },
      {
        point: '批判性分析：论证的复杂度',
        blackboard: {
          type: 'formulas',
          label: '增加论证复杂度的手法',
          lines: [
            '方法一：处理反例',
            '  → "然而，也有证据显示……但这不能……"',
            '  → 主动处理反例比回避反例更有说服力',
            '',
            '方法二：细化立场',
            '  → 不只是"是/否"，而是"在什么程度上/在什么条件下"',
            '',
            '方法三：比较视角',
            '  → "与…相比，维吉尔的选择更/更少……"',
            '  → 通过比较使论点更清晰',
            '',
            '目标：让读者感到你考虑到了所有角度'
          ]
        },
        context: '「A-Level最高分的文学评论有一个共同特征：它们处理了复杂性。」珀西瓦尔说，「不是简单地\'这首诗表达了X主题\'，而是\'这首诗在大部分地方表达了X主题，但在某些段落通过Y手法制造了张力，暗示了X的局限\'。」她停顿，「这种复杂度来自批判性思维——你不是在证明一个简单的事实，你是在分析一个有层次的文本。」她靠在讲台旁，「最好的分析通常包括：你的主要论点，至少一个看起来与它矛盾的反例，以及你如何解释这个矛盾。处理了矛盾的论证比没有矛盾的论证更有说服力——因为它更接近现实。」'
      }
    ],
    lessonSummary: '有效文学论点的三个标准：可争议性（有人可以持相反观点）、可验证性（可以用文本证据支撑）、重要性（揭示文本本质而非微小技术细节）。从观察升级到论点：识别手法→说明效果→解释为什么有此效果→联系整体主题。论题（全文核心立场）与论点（各段具体主张）需要区分，段落结构应是论点+证据+分析的三位一体，三者缺一不可。证据选择：精确引用有分析潜力的词语/结构，引文量不如分析深度重要。批判性论证包含处理反例、细化立场条件、比较视角，使论证更有说服力。',
    nextLessonPreview: '「下节课：语言演变论文写作。从一个具体的语言变化现象开始，到完整的论文架构——今天我们谈研究设计。」'
  },

  68: {
    atmosphere: '黑板上是一个问题：Cur lingua Latina mortua est？（为什么拉丁语死亡了？）下面是五个可能的答案，每一个都被画了删除线：蛮族入侵、罗马帝国灭亡、基督教兴起、时间太长、没有母语者。珀西瓦尔教授站在这些被划掉的答案旁边，表情平静。',
    opening: '「每一个被划掉的答案，」珀西瓦尔说，「都是过于简单的答案。语言演变没有单一原因——它是多种力量在几百年里缓慢作用的结果。」她转向学生，「写一篇关于语言演变的论文，就是在处理这种复杂性——你需要找到一个具体的、可论证的问题，建立文献综述，然后提出自己的论证。」她在黑板右边写下：Research Question，「今天我们学研究设计。」',
    keyPoints: [
      {
        point: '研究选题：从宽泛问题到可论证的具体问题',
        blackboardQ: {
          type: 'formulas',
          label: '研究问题的精炼过程',
          lines: [
            '过宽：拉丁语为什么消亡了？',
            '  → 几百本书都在回答这个问题',
            '',
            '较窄：拉丁语的格系统为什么简化？',
            '  → 仍然太大，但方向了',
            '',
            '可论证：从拉丁语到法语的过程中',
            '  夺格为什么先于其他格消失？',
            '  → 有具体对象，有可验证的语言数据',
            '  → 有前人研究可以对话',
            '  → 你的论证空间清晰可见'
          ]
        },
        question: {
          leadIn: '「好的研究问题有三个特征。」珀西瓦尔说，「第一：它有具体的研究对象——不是\'语言\'而是\'夺格\'，不是\'历史\'而是\'3-5世纪的高卢铭文\'。第二：它有可查的语言数据——你能找到具体的例子来支持或反驳你的论点。第三：它已经有一些前人研究，你能与之对话——纯空白地带意味着没有材料，而不是你发现了新大陆。」她转向学生，「以下哪一个是最好的 A-Level 语言演变论文研究问题？」',
          text: '「以下哪一个最适合作为语言演变论文的研究问题？」',
          options: [
            '拉丁语对欧洲语言的整体影响',
            '从拉丁语夺格消失的过程看格系统简化的机制',
            '语言为什么会随时间演变'
          ],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「具体的语言变化（夺格消失）、有数据支撑（可以查铭文和文学文本里夺格的用法随时间的变化）、有前人研究（大量语言史学者研究过这个问题）。这是一个有边界、有材料、有对话空间的研究问题。」',
        contextWrong: '「夺格消失的研究问题。」她重复，不带感情，「\'整体影响\'和\'为什么演变\'都太宽——没有边界，无法在一篇论文里论证。好的研究问题有三个要素：具体对象、可查数据、与前人研究的对话空间。第一和第三个选项都缺少具体对象和边界。」',
        blackboard: {
          type: 'formulas',
          label: '好研究问题的三要素',
          lines: [
            '1. 具体研究对象',
            '   → 哪个语言现象，哪个时期，哪个地区',
            '',
            '2. 可查语言数据',
            '   → 铭文/手稿/比较语言学数据',
            '',
            '3. 与前人研究的对话空间',
            '   → 有材料可查，有不同观点可以辩论',
            '',
            '检验：能用三句话说清楚你在问什么吗？'
          ]
        }
      },
      {
        point: '文献综述：如何整理和评估已有研究',
        blackboard: {
          type: 'formulas',
          label: '文献综述的功能和结构',
          lines: [
            '功能：',
            '  → 展示你知道这个领域的已有成果',
            '  → 找到你的论文的空白/分歧/切入点',
            '',
            '结构：不是清单，是对话',
            '  → 学者A认为X，因为……',
            '  → 学者B反对，认为Y，因为……',
            '  → 这个分歧的核心是……',
            '  → 本文试图通过Z证据说明……',
            '',
            '错误：只描述别人的观点，不评价'
          ]
        },
        context: '「文献综述不是列清单。」珀西瓦尔直接说，「\'学者A说X，学者B说Y，学者C说Z\'——这不是文献综述，这是目录表。」她停顿，「文献综述要求你在现有研究之间找到对话：谁和谁的观点有分歧，分歧的核心是什么，这个领域目前还没有解决的问题在哪里。然后你的论文说：我要处理这个还没解决的部分，或者我有新的证据支持某一方。」她停顿，「你的论文在已有研究里找到自己的位置，这是文献综述的真正任务。」'
      },
      {
        point: '论证结构：假设、证据、结论',
        blackboard: {
          type: 'formulas',
          label: '语言演变论文的论证框架',
          lines: [
            '假设（hypothesis）：',
            '  → 基于前人研究和初步观察',
            '  → 你预期发现什么？为什么？',
            '',
            '证据分析：',
            '  → 具体语言数据（时间序列/地区分布）',
            '  → 数据是否支持假设？',
            '  → 有哪些反例？如何解释？',
            '',
            '结论推导：',
            '  → 你的数据指向什么结论？',
            '  → 这个结论对已有理论有什么影响？',
            '  → 研究的局限性是什么？'
          ]
        },
        context: '「语言演变的论证是实证性的，不只是文学分析。」珀西瓦尔说，「你需要真实的语言数据——铭文、手稿、比较语言学的重建结果。然后你对这些数据做系统性的分析，看它们是否支持你的假设。」她停顿，「和文学评论不同，语言演变论文的结论是推导出来的，不是断言的——你要说明你的数据如何一步步引向结论。」她靠在讲台边，「而且，你要明确说明局限性：你的数据覆盖了哪个时期，哪个地区，哪种文本类型——超出这个范围，你的结论不能外推。这是学术诚实的基础。」'
      },
      {
        point: '结论推导：避免过度外推',
        blackboard: {
          type: 'formulas',
          label: '合理结论 vs 过度外推',
          lines: [
            '合理结论：',
            '  "基于3-5世纪高卢铭文的数据，夺格在',
            '   非正式书写中先于与格消失，这表明……"',
            '',
            '过度外推：',
            '  "因此，格系统简化是所有语言演变的',
            '   普遍规律"',
            '  → 你的数据覆盖不了\'所有语言\'',
            '',
            '原则：结论的范围不能超过数据的范围',
            '  局限性声明 = 论文的学术诚信'
          ]
        },
        context: '珀西瓦尔站在讲台前，用平稳的声音说：「最聪明的错误是：数据很好，分析很好，然后结论说了比数据能支撑的更多的话。」她停顿，「\'基于高卢铭文的证据\'——你的结论应该是关于高卢，关于那几个世纪，关于铭文这种文本类型。不是关于所有的拉丁语，不是关于所有的语言。」她停顿，「在结论里写清楚你的数据局限，然后说明下一步研究可以去哪里扩展——这不是承认失败，这是打开对话。学术论文不是最后的答案，它是对话的一个步骤。」'
      }
    ],
    lessonSummary: '语言演变论文研究选题三要素：具体研究对象（特定语言现象+时期+地区）、可查语言数据（铭文/手稿/比较语言学重建）、与前人研究的对话空间。文献综述功能是在已有研究之间找对话，找到分歧核心和空白切入点，而非列清单。论证框架：假设（基于前人研究的预期）→证据分析（数据支撑/反例处理）→结论推导。结论的范围不能超过数据的覆盖范围，局限性声明是学术诚信的体现；研究局限+未来方向构成对话的继续而非终结。',
    nextLessonPreview: '「下节课：跨学科综合——拉丁语与魔咒课的联动。弗立维教授会来参与一部分。」'
  },

  69: {
    atmosphere: '拉丁语教室里多了一把椅子，放在讲台旁边，已经空着。黑板一半是珀西瓦尔教授的字迹，另一半是——同学们没见过的——稍微圆润一些的字体，写着：Wingardium Leviosa。两种写法，同一块黑板。窗外是七年级最后一个秋天的光。',
    opening: '弗立维教授在开课铃响后两分钟出现，踩着小步子进来，在那把椅子上坐下，对全班点了点头。珀西瓦尔站在黑板前，一如既往地没有多余的话。\n「弗立维教授这学期给魔咒课讲了一节关于咒语语音精确性的课，」珀西瓦尔说，「我知道那节课。」她在自己的字迹旁边指了指，「那节课的语音学内容，有一半来自这里。今天我们把它反向连接——从这里出发，重新回到魔咒课。」',
    keyPoints: [
      {
        point: '词根分析：拉丁语法语与魔法效果的对应',
        blackboardQ: {
          type: 'formulas',
          label: '咒语的语法结构分析',
          lines: [
            'Wingardium Leviosa',
            '  winger（古英语：翅膀）→ 飞翔方向',
            '  arduus（拉丁：困难/高处/向上）',
            '  -ium（拉丁名词后缀）',
            '  levis（拉丁：轻的）',
            '  -osa（拉丁形容词后缀，充满…的）',
            '',
            '结构解读：',
            '  "使有翅膀的高处充满轻盈" → 浮起',
            '',
            '问：Leviosa 的语法形式是什么？'
          ]
        },
        question: {
          leadIn: '珀西瓦尔用粉笔把 Leviosa 分解，「Levis——轻的。-osa——拉丁语形容词后缀，第一变格阴性主格（或中性复数），表示\'充满……的\'或\'具有……性质的\'。」她停顿，「弗立维教授，」她转向那把椅子，「Wingardium Leviosa 里哪个词决定了方向性？」弗立维教授举起小手，「Wingardium 提供了方向——向上，向有翅膀的地方。Leviosa 提供了性质——轻盈。两个词合在一起，就是：让它变轻盈，向上去。」珀西瓦尔点了点头，「正确。」她转向学生，「基于这个分析，Leviosa 最可能的语法功能是什么？」',
          text: '「Leviosa 在 Wingardium Leviosa 中最可能承担什么语法功能？」',
          options: [
            '动词命令式（命令物体浮起）',
            '形容词/名词（描述目标物的性质：使之轻盈）',
            '副词（描述浮起的方式）'
          ],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「Levis + -osa = 形容词，描述目标物的期望状态。Wingardium 提供方向，Leviosa 提供状态描述——咒语在语言层面是：描述你希望目标物变成什么样子，而不是命令它做什么动作。」弗立维教授在旁边轻轻点头。',
        contextWrong: '「形容词性质。」珀西瓦尔重复，不带感情，「-osa 是描述性后缀，leviosa 是描述目标物的状态，不是动词命令。命令式形式会是不同的词尾。』弗立维教授补充道：「这也解释了为什么发音时需要在 Wingardium 上强调方向感——词根承载着意图，发音承载着意志。」',
        blackboard: {
          type: 'formulas',
          label: '咒语的双层结构（语言+意图）',
          lines: [
            '词根层：  词的来源决定咒语的作用域',
            '语法层：  语法形式决定意图的表达方式',
            '发音层：  音节强调点传递意志的方向',
            '',
            '三层必须一致：',
            '  → 词根提供作用域',
            '  → 语法提供状态/命令/意图',
            '  → 发音传递能量方向',
            '',
            '任何一层出错，咒语偏转或失效'
          ]
        }
      },
      {
        point: '语音共振：拉丁语元音与魔法频率',
        blackboard: {
          type: 'formulas',
          label: '拉丁语音节结构与魔法共振',
          lines: [
            '拉丁语元音规则：',
            '  每个元音只有一种发音（不像英语多变）',
            '  元音长短（量）严格区分含义',
            '',
            '魔咒学的发现（弗立维教授的讲义）：',
            '  短元音咒语 → 效果短促集中',
            '  长元音咒语 → 效果持续扩散',
            '',
            '珀西瓦尔的词源注：',
            '  "这不是巧合——古代巫师设计咒语时',
            '   保留了语音学的内在逻辑"'
          ]
        },
        context: '弗立维教授从椅子上站起来，比黑板矮了很多，但声音清晰，「在我的魔咒课上，我教学生：Lumos 里的 o 要发完整，不能缩短。」他停顿，「珀西瓦尔教授告诉我，拉丁语 o 在古典发音里是一个完整的圆唇元音，不滑向其他音——这正是魔法稳定性的需要。」珀西瓦尔接着说，「语音不是装饰，是结构。咒语的音节和魔法的频率之间有一套对应关系，古代的设计者把这套对应关系编进了词根和语音形式里。」她停顿，「弗立维的魔咒学是在这个古老设计的顶端——他教的是执行，我这里教的是为什么这样设计。」'
      },
      {
        point: '词根关联：同一词根在语言与魔法中的不同体现',
        blackboard: {
          type: 'formulas',
          label: '词根 lux/lumen 的双重传承',
          lines: [
            '拉丁语：lux（光），lumen（光，强调照明功能）',
            '',
            '英语衍生：',
            '  lucid（清晰的）',
            '  illuminate（照亮）',
            '  translucent（半透明）',
            '',
            '魔法衍生：',
            '  Lumos（光明咒）← lumen',
            '  Nox（黑暗咒，与光相对）← nox（夜）',
            '',
            '发现：成对咒语通常来自意义相对的词根'
          ]
        },
        context: '「我在整理词源手册的时候，」珀西瓦尔说，「注意到一个规律。成对使用的咒语通常来自意义相对的词根。」她指着黑板，「Lumos 来自 lumen（光），Nox 来自 nox（夜）。Accio（召唤）的反向咒语 Expulso（爆裂驱散）来自 expello（驱逐）。」她停顿，「这不是偶然——古代咒语的设计者在语义层面是对称的，语言学的对立关系直接对应魔法的对立效果。」弗立维教授小声补充：「这就是为什么有些咒语不能用错了语境——把 Nox 的词根逻辑用到错误的场合，你试图用光明的对立面，但场合不对，效果就不是预期的。」'
      },
      {
        point: '知识整合：语言作为魔法系统的基础',
        blackboard: {
          type: 'formulas',
          label: '跨学科整合视角',
          lines: [
            '拉丁语层面：词根/语法/语音',
            '  ↓ 提供设计逻辑',
            '历史层面：罗马法律/宗教中的施为语言',
            '  ↓ 提供作用机制',
            '物理层面（塞拉菲娜教授）：声波共振',
            '  ↓ 提供物理实现',
            '魔咒学层面（弗立维教授）：意图+发音+动作',
            '  ↓ 提供执行规范',
            '',
            '四个层面合在一起，才是完整的咒语学'
          ]
        },
        context: '珀西瓦尔和弗立维教授并排站着，一高一低，「塞拉菲娜教授的物理课解释了为什么元音的共振频率影响效果，」珀西瓦尔说，「我这里解释了为什么这些词会有这些元音——这是设计决定，不是随机。弗立维的魔咒课教执行，赫伯特的历史课给语境，我的词源课给来源。」她停顿，「你们选择在霍格沃茨学拉丁语，」她转向整班，「不只是为了理解旧文本。是因为这门语言在这个世界里还活着——不在现实里，在魔法里。」弗立维教授在旁边微笑，「珀西瓦尔总是最后一个说这句话，但每次都对。」'
      }
    ],
    lessonSummary: '咒语具有三层结构：词根层（来源决定作用域）、语法层（语法形式决定意图表达方式）、发音层（音节强调传递能量方向），三层一致才能正确施法。Wingardium Leviosa 分解：winger(翅膀/方向)+arduus(高处)+leviosa(轻盈的/充满轻盈性质)，形容词性后缀-osa描述目标期望状态而非命令动作。拉丁语元音单一发音规则对应魔法共振频率的稳定性设计。成对咒语（Lumos/Nox）来自语义相对的词根，语言对立直接对应魔法对立效果。跨学科整合：拉丁语提供设计逻辑，历史提供作用机制，物理学提供实现原理，魔咒学提供执行规范。',
    nextLessonPreview: '「下节课：A-Level综合模拟。考试形式，真实时长，所有题型。这是今年的最后一课。」'
  },

  70: {
    atmosphere: '教室和第一课一样：墙上挂着手抄体字母表，墨迹极工整。但黑板今天是空白的——珀西瓦尔教授站在空白黑板前，手里没有粉笔，只是站着，等待。这是七年级最后一课。',
    opening: '「今天是模拟考试。」珀西瓦尔的开场白和往常一样简洁，「三小时，四个题型：无准备文本翻译、语法分析、综合理解、文学评论。」她把考卷放在每个人桌上，「你们在这里学了七年。」她停顿了比平时更长的一秒，「现在做。」',
    keyPoints: [
      {
        point: '考前准备：心理状态与时间框架',
        blackboardQ: {
          type: 'formulas',
          label: '考试开始前的三分钟框架',
          lines: [
            '第一分钟：扫描全卷',
            '  → 确认题型和分值分配',
            '  → 找到你最有把握的题型',
            '',
            '第二分钟：制定时间计划',
            '  → 根据分值分配时间',
            '  → 确定哪道题最后做（如果有的话）',
            '',
            '第三分钟：调整状态',
            '  → 不从最难的题开始',
            '  → 从你最熟悉的题型进入状态',
            '',
            '原则：考试是管理，不是表演'
          ]
        },
        question: {
          leadIn: '珀西瓦尔站在教室前面，没有走动，「在发卷和开始答题之间，你们有三分钟。」她平静地说，「大部分人立刻开始写第一题——这是错误的。」她停顿，「先扫描全卷，确认题型和分值，然后制定你的时间计划。你有三小时，不要在前半小时花了全部的情绪和时间。」她转向学生，「考试管理的第一原则是什么？」',
          text: '「A-Level考试的最有效策略中，以下哪一项最重要？」',
          options: [
            '立刻开始做第一题，不浪费时间',
            '先扫全卷，制定时间分配计划，从有把握的题型进入状态',
            '从最难的题开始，确保高分题先完成'
          ],
          answer: 1
        },
        contextRight: '「不错。」她停了一秒，「先做计划，再做题。从最难的题开始会在一开始就消耗过多的认知资源，影响后面所有题目。从有把握的题型进入状态，建立正向动力，再处理困难部分。」',
        contextWrong: '「制定计划。」她重复，不带感情，「立刻开始写第一题会浪费那三分钟的扫卷机会——你可能在一个低分题上花了过多时间，而不知道后面还有高分题等着你。从最难的题开始会消耗过多初始的认知资源，影响整体发挥。先计划，再执行。」',
        blackboard: {
          type: 'formulas',
          label: '三小时时间分配（参考）',
          lines: [
            '无准备文本翻译（通常最高分）：45-55分钟',
            '语法分析（技术性，时间最短）：  20-25分钟',
            '综合理解：                       30-35分钟',
            '文学评论（次高分）：             50-60分钟',
            '检查时间：                       10-15分钟',
            '',
            '根据实际分值调整，不要超出每题预算'
          ]
        }
      },
      {
        point: '各题型要点快速复习',
        blackboard: {
          type: 'formulas',
          label: '四种题型的核心记忆点',
          lines: [
            '翻译：准确>流畅，用四步法，检查格/时态/漏句',
            '',
            '语法：精确命名全部特征，不用描述性语言代替',
            '',
            '理解：论点+原文引用+分析（三步缺一不可）',
            '',
            '文学评论：论题（全文）→论点+引证+分析（段落）',
            '          → 结论重申论题',
            '          → 有争议性，有文本支撑，有深度分析'
          ]
        },
        context: '「四种题型，四种策略，七年都在练这些。」珀西瓦尔说，「我不在考场里，但这几点你们需要自己记住。」她在黑板上写出四行要点，「翻译：格和时态是骨架，不能错。语法：每一个语法特征都要命名，\'这是动词\'不是语法分析。理解：每一个论点都需要原文支撑，不能只翻译或只发观点。文学评论：从有效论题开始，每段一个论点，分析要达到\'为什么有此效果\'的层次。」她停顿，「这些你们都知道了。」'
      },
      {
        point: '常见失分：最后检查要点',
        blackboard: {
          type: 'formulas',
          label: '最后检查清单',
          lines: [
            '翻译：',
            '  ☐ 有无漏译整个从句',
            '  ☐ 主格与宾格有无混淆',
            '  ☐ 时态是否准确',
            '',
            '语法分析：',
            '  ☐ 是否列出了所有语法特征',
            '',
            '文学评论：',
            '  ☐ 是否有明确的论题',
            '  ☐ 每段是否有引文和分析',
            '  ☐ 结论是否重申论题（不引入新内容）'
          ]
        },
        context: '「留十分钟检查，」珀西瓦尔说，「不是重新做题，是检查最常见的失分点。」她逐行读出黑板上的清单，「翻译里最常见的是漏译整个从句——读完一遍，数一数你的译文里有几个从句，和原文比对。语法分析里最常见的是遗漏一个特征——时态，语态，或者人称数。文学评论里最常见的是结论引入了新论点——检查最后一段，是否只在总结而没有说新的内容。」她停顿，「十分钟可以找回很多分。」'
      },
      {
        point: '结课：七年之后',
        blackboard: {
          type: 'formulas',
          label: '珀西瓦尔·拉丁语课·第70课',
          lines: [
            '你们在第一课学了一件事：',
            '  "拉丁语是死的语言——但它从未停止说话"',
            '',
            '七年之后：',
            '  你们知道为什么',
            '',
            '字母表 → 格变 → 动词 → 句法 → 文本',
            'KS3   → GCSE  → A-Level',
            '',
            '这不是终点。这是你们能够独立阅读的起点。'
          ]
        },
        context: '考试结束后，珀西瓦尔在教室里走了一圈，收走卷子，然后回到讲台前。她没有立刻说话，等着全班安静下来。\n「第一课，」她终于开口，「我在黑板上写了 Lumos，问你们为什么是这个声音，不是别的。」她停顿，「现在你们知道了。」\n她靠在讲台旁，「拉丁语是死的语言。」她说出这句话，「但你们现在能读它，能分析它，能翻译它，能评论它。」她停顿，「这意味着它在你们这里——没有死。」\n她拿起细头钢笔，放回原处，「就这些了。」她说，「去做你们该做的事。」'
      }
    ],
    lessonSummary: '模拟考试前的框架：扫全卷（3分钟）→制定时间计划→从有把握的题型进入状态；三小时参考分配：翻译50分钟/语法25分钟/理解35分钟/文学评论55分钟/检查15分钟。四种题型核心要点：翻译（准确>流畅，四步法，检查格/时态/漏句）；语法（精确命名全部特征）；理解（论点+引文+分析三步）；文学评论（有效论题+段落论证+结论重申）。最后10分钟检查：翻译漏句/格混淆、语法遗漏特征、评论结论新内容。七年课程终结：从字母表到A-Level，掌握独立阅读古典文本的能力——这是拉丁语作为活的知识传统的延续。',
    nextLessonPreview: '「拉丁语是死的语言——但它从未停止说话。」'
  },

};

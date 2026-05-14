/**
 * latin-questionBank.js
 * 麻瓜学术 · 拉丁语 · 题库
 * 教授：米兰达·珀西瓦尔
 * 每课 3 题（难度 basic/medium/hard），共 210 题
 */

export const questionBank = [

  // ── 第1章 拉丁语的声音 ──────────────────────────────────────────

  { lesson: 1, title: "字母表与发音规则", questions: [
    { type: "choice", difficulty: 1, text: "古典拉丁字母表共有多少个字母？", options: ["A. 26", "B. 24", "C. 23", "D. 21"], answer: "C", knowledgePoint: "拉丁字母表", analysis: "古典拉丁字母表有23个字母，不包含J、U、W。J由I分化，U和W由V分化，都是后世添加的。" },
    { type: "choice", difficulty: 1, text: "拉丁语元音 a 的发音接近英语哪个词中的 a？", options: ["A. cat", "B. cake", "C. father", "D. about"], answer: "C", knowledgePoint: "元音发音规则", analysis: "拉丁语a读作[a:]，接近英语father中的a。拉丁语每个元音只有一种发音，不像英语那样多变。" },
    { type: "choice", difficulty: 2, text: "拉丁语中字母 C 在 ceno（我用餐）里的发音是？", options: ["A. /s/（如英语cent）", "B. /k/（如英语cat）", "C. /tʃ/（如英语church）", "D. /ʃ/（如英语ship）"], answer: "B", knowledgePoint: "辅音发音规则", analysis: "在古典拉丁语中，C永远发/k/音，无论后面跟什么元音。英语中c在e、i前会变软发/s/，但拉丁语没有这种软化规则。" },
    { type: "choice", difficulty: 2, text: "两个音节的拉丁语单词，重音应在哪个音节？", options: ["A. 最后一个音节", "B. 倒数第二个（即第一个）音节", "C. 随意，无固定规则", "D. 看元音长短决定"], answer: "B", knowledgePoint: "音节划分", analysis: "两个音节的拉丁语单词，重音永远在倒数第二个音节（即第一个音节）。这是拉丁语重音的固定规则，没有例外。" },
    { type: "choice", difficulty: 3, text: "咒语 Lumos 中，字母 V 的古典发音可能对应今天英语的哪个音？", options: ["A. 只有/v/（如very）", "B. 只有/w/（如water）", "C. 可能是/u/或/w/，因为古典拉丁语V兼任U和W", "D. 只有/u:/（如rude）"], answer: "C", knowledgePoint: "拉丁字母表", analysis: "古典拉丁语中没有U和W，只有V。V兼任元音/u/和辅音/w/的角色，具体发音取决于它在单词中的位置。Lumos中的o已经是元音，但如果在古铭文中看到V，它可能读作U的音。" }
  ]},

  { lesson: 2, title: "主格与宾格：动作的主语与宾语", questions: [
    { type: "choice", difficulty: 1, text: "名词 puella（女孩）的主格单数是？", options: ["A. puellam", "B. puellae", "C. puella", "D. puellae"], answer: "C", knowledgePoint: "第一变格名词主格", analysis: "puella是第一变格名词，主格单数形式为puella。" },
    { type: "choice", difficulty: 2, text: "句子 \"Caesar pugnam gerit.\" 中，pugnam 是什么格？", options: ["A. 主格", "B. 宾格", "C. 与格", "D. 属格"], answer: "B", knowledgePoint: "宾格识别", analysis: "pugnam是pugna（战斗）的宾格形式，作为动词gerit（进行）的宾语。" },
    { type: "choice", difficulty: 3, text: "动词 \"videre\"（看）要求什么格的宾语？", options: ["A. 主格", "B. 宾格", "C. 与格", "D. 夺格"], answer: "B", knowledgePoint: "及物动词与宾格", analysis: "videre是及物动词，要求宾格宾语，如\"Puellam video.\"（我看见女孩。）" }
  ]},

  { lesson: 3, title: "第一变位动词（现在时）", questions: [
    { type: "choice", difficulty: 1, text: "动词 amo（我爱）的第一人称单数现在时是？", options: ["A. amas", "B. amat", "C. amo", "D. amamus"], answer: "C", knowledgePoint: "第一变位动词变位", analysis: "amo是第一变位动词的第一人称单数现在时形式。" },
    { type: "choice", difficulty: 2, text: "第一变位动词的词干是去掉词尾什么字母？", options: ["A. -o", "B. -are", "C. -ere", "D. -ire"], answer: "B", knowledgePoint: "动词词干识别", analysis: "第一变位动词以-are结尾，词干是去掉-are后的部分。" },
    { type: "choice", difficulty: 3, text: "动词 \"laudare\"（赞美）的第三人称复数现在时是？", options: ["A. laudat", "B. laudant", "C. laudamus", "D. laudatis"], answer: "B", knowledgePoint: "第一变位动词复数变位", analysis: "laudare的第三人称复数现在时是laudant。" }
  ]},

  { lesson: 4, title: "形容词的性与数格一致", questions: [
    { type: "choice", difficulty: 1, text: "形容词 bonus（好的）修饰 puella（女孩，阴性）时应变为？", options: ["A. bonus", "B. bona", "C. bonum", "D. boni"], answer: "B", knowledgePoint: "形容词性数格一致", analysis: "puella是阴性名词，形容词需变为阴性形式bona。" },
    { type: "choice", difficulty: 2, text: "\"magna domus\" 中，magna 与 domus 的关系是？", options: ["A. 性不一致", "B. 数不一致", "C. 格不一致", "D. 完全一致"], answer: "D", knowledgePoint: "形容词变格", analysis: "magna（大的，阴性单数主格）与domus（房子，阴性单数主格）性、数、格都一致。" },
    { type: "choice", difficulty: 3, text: "形容词 \"felix\"（幸运的）修饰 \"puellam\"（宾格单数）时应变为？", options: ["A. felix", "B. felicem", "C. felicis", "D. felici"], answer: "B", knowledgePoint: "第三变格形容词变格", analysis: "felix是第三变格形容词，宾格单数形式为felicem。" }
  ]},

  { lesson: 5, title: "简单句：SOV语序与读法", questions: [
    { type: "choice", difficulty: 1, text: "拉丁语的基本语序是？", options: ["A. SVO（主谓宾）", "B. SOV（主宾谓）", "C. VSO（谓主宾）", "D. OSV（宾主谓）"], answer: "B", knowledgePoint: "拉丁语语序", analysis: "拉丁语基本语序为主-宾-谓(SOV)，如\"Caesar pugnam gerit.\"（凯撒进行战斗。）" },
    { type: "choice", difficulty: 2, text: "句子 \"Puer librum legit.\" 中，legit 是？", options: ["A. 主语", "B. 宾语", "C. 谓语", "D. 定语"], answer: "C", knowledgePoint: "句子成分识别", analysis: "legit是动词legere（读）的第三人称单数现在时，作为谓语。" },
    { type: "choice", difficulty: 3, text: "\"Magister discipulos docet.\" 的正确翻译是？", options: ["A. 学生教老师", "B. 老师教学生", "C. 老师和学生", "D. 学生们教"], answer: "B", knowledgePoint: "句子翻译", analysis: "Magister（老师，主格）是主语，discipulos（学生们，宾格）是宾语，docet（教）是谓语。" }
  ]},

  // ── 第2章 格的系统 ──────────────────────────────────────────

  { lesson: 6, title: "与格：间接宾语", questions: [
    { type: "choice", difficulty: 1, text: "名词 amico（朋友，阳性）的与格单数是？", options: ["A. amicus", "B. amicum", "C. amico", "D. amici"], answer: "C", knowledgePoint: "与格变格", analysis: "amicus是第二变格名词，与格单数为amico。" },
    { type: "choice", difficulty: 2, text: "动词 \"dare\"（给）要求什么格的宾语？", options: ["A. 主格", "B. 宾格", "C. 与格", "D. 属格"], answer: "C", knowledgePoint: "与格动词", analysis: "dare是与格动词，如\"Amico librum do.\"（我给朋友一本书。）" },
    { type: "choice", difficulty: 3, text: "\"Puellae donum dat.\" 中，puellae 是什么格？", options: ["A. 主格", "B. 宾格", "C. 与格", "D. 属格"], answer: "C", knowledgePoint: "与格识别", analysis: "puellae是puella的与格单数，作为间接宾语。" }
  ]},

  { lesson: 7, title: "夺格：工具、伴随、来源", questions: [
    { type: "choice", difficulty: 1, text: "名词 gladio（剑）的夺格单数是？", options: ["A. gladius", "B. gladium", "C. gladio", "D. gladii"], answer: "C", knowledgePoint: "夺格变格", analysis: "gladius是第二变格名词，夺格单数为gladio。" },
    { type: "choice", difficulty: 2, text: "\"Gladio pugnat.\" 的意思是？", options: ["A. 剑战斗", "B. 用剑战斗", "C. 剑被战斗", "D. 向剑战斗"], answer: "B", knowledgePoint: "夺格表示工具", analysis: "夺格gladio表示工具，意思是\"用剑战斗\"。" },
    { type: "choice", difficulty: 3, text: "\"Cum amico ambulo.\" 中，cum 是什么词？", options: ["A. 动词", "B. 名词", "C. 介词", "D. 副词"], answer: "C", knowledgePoint: "夺格介词", analysis: "cum是介词，意思是\"和...一起\"，要求夺格宾语。" }
  ]},

  { lesson: 8, title: "属格：所有关系", questions: [
    { type: "choice", difficulty: 1, text: "名词 regis（国王）的属格单数是？", options: ["A. rex", "B. regem", "C. regis", "D. regi"], answer: "C", knowledgePoint: "属格变格", analysis: "rex是第三变格名词，属格单数为regis。" },
    { type: "choice", difficulty: 2, text: "\"domus regis\" 的意思是？", options: ["A. 国王的房子", "B. 房子的国王", "C. 国王和房子", "D. 房子国王"], answer: "A", knowledgePoint: "属格表示所属", analysis: "regis是属格，修饰domus，表示\"国王的房子\"。" },
    { type: "choice", difficulty: 3, text: "\"virtus hominis\" 中，hominis 是？", options: ["A. 主格", "B. 宾格", "C. 属格", "D. 与格"], answer: "C", knowledgePoint: "属格识别", analysis: "hominis是homo（人）的属格单数，修饰virtus（美德），表示\"人的美德\"。" }
  ]},

  { lesson: 9, title: "第二变位动词", questions: [
    { type: "choice", difficulty: 1, text: "第二变位动词的词尾是？", options: ["A. -are", "B. -ere", "C. -ire", "D. -ire（第四变位）"], answer: "B", knowledgePoint: "第二变位动词词尾", analysis: "第二变位动词以-ere结尾，如videre（看）、docere（教）。" },
    { type: "choice", difficulty: 2, text: "动词 \"videre\"（看）的第一人称单数现在时是？", options: ["A. video", "B. vides", "C. videt", "D. videmus"], answer: "A", knowledgePoint: "第二变位动词变位", analysis: "video是videre的第一人称单数现在时。" },
    { type: "choice", difficulty: 3, text: "第二变位动词与第一变位动词的主要区别在于？", options: ["A. 词尾不同", "B. 词干元音不同", "C. 变位规则不同", "D. 以上都是"], answer: "D", knowledgePoint: "变位区别", analysis: "第二变位动词词尾为-ere，词干元音为-e-，变位规则也与第一变位不同。" }
  ]},

  { lesson: 10, title: "数词与基础词汇（含咒语词根初探）", questions: [
    { type: "choice", difficulty: 1, text: "拉丁语数字 \"quinque\" 是？", options: ["A. 3", "B. 5", "C. 7", "D. 9"], answer: "B", knowledgePoint: "基数词", analysis: "quinque是拉丁语数字5。" },
    { type: "choice", difficulty: 2, text: "咒语 \"Lumos\" 的词根来自拉丁语哪个词？", options: ["A. lux（光）", "B. lumen（灯）", "C. lucere（发光）", "D. luna（月亮）"], answer: "C", knowledgePoint: "咒语词根", analysis: "Lumos来自拉丁语lucere（发光），意为\"照亮\"。" },
    { type: "choice", difficulty: 3, text: "咒语 \"Alohomora\" 中 \"homo\" 的意思是？", options: ["A. 打开", "B. 人", "C. 门", "D. 自由"], answer: "B", knowledgePoint: "咒语词源", analysis: "homo在拉丁语中意为\"人\"，Alohomora字面意思是\"让人自由\"，即开门咒。" }
  ]},

  // ── 第3章 时态扩展 ──────────────────────────────────────────

  { lesson: 11, title: "未完成过去时：持续的动作", questions: [
    { type: "choice", difficulty: 1, text: "未完成过去时表示什么类型的动作？", options: ["A. 已完成的动作", "B. 持续或反复的动作", "C. 将来的动作", "D. 习惯性动作"], answer: "B", knowledgePoint: "未完成时含义", analysis: "未完成过去时表示过去正在进行、持续或反复的动作。" },
    { type: "choice", difficulty: 2, text: "动词 \"amo\"（我爱）的第一人称单数未完成过去时是？", options: ["A. amavi", "B. amabam", "C. amarem", "D. amaveram"], answer: "B", knowledgePoint: "未完成时变位", analysis: "第一变位动词未完成过去时词尾为-bam, -bas, -bat等。" },
    { type: "choice", difficulty: 3, text: "\"Cum veniebam, puella cantabat.\" 的意思是？", options: ["A. 当我来的时候，女孩唱歌了", "B. 当我正来的时候，女孩正在唱歌", "C. 我来的时候，女孩将要唱歌", "D. 我来了，女孩唱歌"], answer: "B", knowledgePoint: "未完成时场景", analysis: "两个未完成时表示过去同时发生的持续动作。" }
  ]},

  { lesson: 12, title: "完成时：已完成的事件", questions: [
    { type: "choice", difficulty: 1, text: "完成时表示什么类型的动作？", options: ["A. 正在进行的动作", "B. 已完成的动作", "C. 将来的动作", "D. 持续的动作"], answer: "B", knowledgePoint: "完成时含义", analysis: "完成时表示在过去某个时间点已经完成的动作。" },
    { type: "choice", difficulty: 2, text: "动词 \"laudare\"（赞美）的第一人称单数完成时是？", options: ["A. laudabam", "B. laudavi", "C. laudarer", "D. laudatus sum"], answer: "B", knowledgePoint: "完成时变位", analysis: "第一变位动词完成时词干加-avi。" },
    { type: "choice", difficulty: 3, text: "不规则动词 \"esse\"（是）的完成时是？", options: ["A. eram", "B. fui", "C. sum", "D. fueram"], answer: "B", knowledgePoint: "不规则动词完成时", analysis: "esse的完成时是不规则的，为fui。" }
  ]},

  { lesson: 13, title: "大过去时", questions: [
    { type: "choice", difficulty: 1, text: "大过去时表示什么？", options: ["A. 过去正在进行的动作", "B. 过去完成的动作", "C. 过去某时间之前已完成的动作", "D. 将来的动作"], answer: "C", knowledgePoint: "大过去时含义", analysis: "大过去时表示在过去某时间点之前已经完成的动作，即过去的过去。" },
    { type: "choice", difficulty: 2, text: "动词 \"videre\"（看）的第一人称单数大过去时是？", options: ["A. vidi", "B. videbam", "C. videram", "D. videro"], answer: "C", knowledgePoint: "大过去时变位", analysis: "大过去时由完成时词干加-eram构成。" },
    { type: "choice", difficulty: 3, text: "\"Cum veni, puella cantaverat.\" 的意思是？", options: ["A. 当我来的时候，女孩正在唱歌", "B. 当我来的时候，女孩已经唱完歌了", "C. 当我来的时候，女孩将要唱歌", "D. 我来，女孩唱歌"], answer: "B", knowledgePoint: "大过去时用法", analysis: "cantaverat是大过去时，表示在veni（来）之前已经完成的动作。" }
  ]},

  { lesson: 14, title: "间接引语：宾语从句", questions: [
    { type: "choice", difficulty: 1, text: "间接引语中表示\"that\"的连词是？", options: ["A. et", "B. ut", "C. sed", "D. quia"], answer: "B", knowledgePoint: "间接引语连词", analysis: "ut用于引导间接引语中的宾语从句。" },
    { type: "choice", difficulty: 2, text: "\"Dicit se librum legere.\" 中 \"se\" 指代？", options: ["A. 说话者", "B. 听话者", "C. 第三方", "D. 自己"], answer: "D", knowledgePoint: "反身代词", analysis: "se是反身代词，指代主语自己。" },
    { type: "choice", difficulty: 3, text: "\"Dixit se librum legere.\" 中 \"legere\" 为什么用不定式？", options: ["A. 表示将来", "B. 表示目的", "C. 间接引语结构", "D. 表示命令"], answer: "C", knowledgePoint: "间接引语结构", analysis: "间接引语中使用accusative + infinitive结构。" }
  ]},

  { lesson: 15, title: "关系从句：qui, quae, quod", questions: [
    { type: "choice", difficulty: 1, text: "关系代词 \"qui\" 用于指代什么性别的名词？", options: ["A. 阴性", "B. 阳性", "C. 中性", "D. 所有性别"], answer: "B", knowledgePoint: "关系代词性", analysis: "qui指代阳性名词，quae指代阴性，quod指代中性。" },
    { type: "choice", difficulty: 2, text: "\"Puella quae cantat est pulchra.\" 中 \"quae\" 指代？", options: ["A. puella", "B. cantat", "C. pulchra", "D. 无指代"], answer: "A", knowledgePoint: "关系代词指代", analysis: "quae指代puella（女孩），引导定语从句。" },
    { type: "choice", difficulty: 3, text: "\"Homo qui librum legit est magister.\" 的正确翻译是？", options: ["A. 读书的人是老师", "B. 老师读书", "C. 人读老师的书", "D. 书是人读的"], answer: "A", knowledgePoint: "关系从句翻译", analysis: "qui librum legit是定语从句修饰homo，意思是\"读书的人\"。" }
  ]},

  // ── 第4章 句法深化 ──────────────────────────────────────────

  { lesson: 16, title: "不定式结构（宾语+不定式）", questions: [
    { type: "choice", difficulty: 1, text: "拉丁语中不定式的基本形式是？", options: ["A. -o", "B. -are/-ere/-ire", "C. -atus/-ata/-atum", "D. -am/-as/-at"], answer: "B", knowledgePoint: "不定式形式", analysis: "不定式形式与动词基本形式相同，如amare（爱）、videre（看）。" },
    { type: "choice", difficulty: 2, text: "\"Volumus ludere.\" 中 \"ludere\" 是什么？", options: ["A. 谓语", "B. 宾语", "C. 不定式宾语", "D. 定语"], answer: "C", knowledgePoint: "不定式作宾语", analysis: "volo（想要）后接不定式作宾语。" },
    { type: "choice", difficulty: 3, text: "\"Rogavi eum venire.\" 的结构是？", options: ["A. 主语+谓语", "B. 主语+谓语+宾语", "C. 主语+谓语+宾语+不定式", "D. 并列句"], answer: "C", knowledgePoint: "accusative + infinitive", analysis: "eum（宾格）+ venire（不定式）构成宾语不定式结构。" }
  ]},

  { lesson: 17, title: "分词：现在分词与完成被动分词", questions: [
    { type: "choice", difficulty: 1, text: "第一变位动词的现在分词词尾是？", options: ["A. -ans", "B. -ens", "C. -atus", "D. -andus"], answer: "A", knowledgePoint: "现在分词", analysis: "第一变位动词现在分词词尾为-ans，如amans（爱的）。" },
    { type: "choice", difficulty: 2, text: "完成被动分词的词尾是？", options: ["A. -ans", "B. -atus/-ata/-atum", "C. -ens", "D. -andus"], answer: "B", knowledgePoint: "完成被动分词", analysis: "完成被动分词词尾为-atus/-ata/-atum，如amatus（被爱的）。" },
    { type: "choice", difficulty: 3, text: "\"Liber scriptus est.\" 中 \"scriptus\" 是？", options: ["A. 现在分词", "B. 完成被动分词", "C. 不定式", "D. 动名词"], answer: "B", knowledgePoint: "被动结构", analysis: "scriptus是scribere（写）的完成被动分词，与est构成被动语态。" }
  ]},

  { lesson: 18, title: "属格的扩展用法（描述性属格）", questions: [
    { type: "choice", difficulty: 1, text: "描述性属格表示什么？", options: ["A. 所属关系", "B. 描述性质或特征", "C. 来源", "D. 目的"], answer: "B", knowledgePoint: "描述性属格", analysis: "描述性属格用来描述名词的性质或特征。" },
    { type: "choice", difficulty: 2, text: "\"vir magnae virtutis\" 的意思是？", options: ["A. 美德的男人", "B. 有伟大美德的男人", "C. 男人的伟大美德", "D. 伟大的男人"], answer: "B", knowledgePoint: "描述性属格翻译", analysis: "magnae virtutis是属格短语，描述vir的特征。" },
    { type: "choice", difficulty: 3, text: "\"puer annorum decem\" 的意思是？", options: ["A. 十岁的男孩", "B. 男孩的十年", "C. 十年前的男孩", "D. 男孩十年"], answer: "A", knowledgePoint: "年龄表达", analysis: "annorum decem（十年的）是属格结构，表示年龄。" }
  ]},

  { lesson: 19, title: "句子成分分析方法", questions: [
    { type: "choice", difficulty: 1, text: "句子的基本成分不包括？", options: ["A. 主语", "B. 谓语", "C. 宾语", "D. 标点"], answer: "D", knowledgePoint: "句子成分", analysis: "句子基本成分包括主语、谓语、宾语、定语、状语等，标点不是成分。" },
    { type: "choice", difficulty: 2, text: "\"Magister discipulis libros dat.\" 中直接宾语是？", options: ["A. magister", "B. discipulis", "C. libros", "D. dat"], answer: "C", knowledgePoint: "直接宾语", analysis: "libros是直接宾语，discipulis是间接宾语（与格）。" },
    { type: "choice", difficulty: 3, text: "\"Cum celeritate ad scholam veni.\" 中 \"cum celeritate\" 是什么成分？", options: ["A. 主语", "B. 宾语", "C. 状语", "D. 定语"], answer: "C", knowledgePoint: "状语", analysis: "cum celeritate（快速地）是方式状语，修饰动词veni。" }
  ]},

  { lesson: 20, title: "词根与词缀规律（含英语衍生词）", questions: [
    { type: "choice", difficulty: 1, text: "拉丁语词根 \"spect\" 的意思是？", options: ["A. 说", "B. 看", "C. 跑", "D. 写"], answer: "B", knowledgePoint: "词根含义", analysis: "spect来自拉丁语specere（看），如inspect（检查）、spectacle（景象）。" },
    { type: "choice", difficulty: 2, text: "英语单词 \"transport\" 的词根是？", options: ["A. trans-", "B. port", "C. -port", "D. trans-port"], answer: "B", knowledgePoint: "词根识别", analysis: "transport由trans-（跨越）+ port（携带）组成，port是词根。" },
    { type: "choice", difficulty: 3, text: "拉丁语 \"vocare\"（呼唤）衍生出的英语单词不包括？", options: ["A. vocal", "B. vocation", "C. vocabulary", "D. vehicle"], answer: "D", knowledgePoint: "词源追溯", analysis: "vehicle来自拉丁语vehiculum（交通工具），与vocare无关。" }
  ]},

  // ── 第5章 词源学 ──────────────────────────────────────────

  { lesson: 21, title: "拉丁语对英语词汇的影响", questions: [
    { type: "choice", difficulty: 1, text: "英语中大约有多少词汇来自拉丁语？", options: ["A. 10%", "B. 25%", "C. 50%", "D. 75%"], answer: "C", knowledgePoint: "拉丁语借词比例", analysis: "据估计，英语中约50%的词汇直接或间接来自拉丁语。" },
    { type: "choice", difficulty: 2, text: "英语单词 \"education\" 来自拉丁语哪个词？", options: ["A. educere", "B. educare", "C. educatus", "D. educationem"], answer: "D", knowledgePoint: "直接借词", analysis: "education直接来自拉丁语educationem（教育）。" },
    { type: "choice", difficulty: 3, text: "英语单词 \"revolution\" 的词源是？", options: ["A. 拉丁语revolvere（旋转）", "B. 希腊语revolution", "C. 法语revolution", "D. 德语Revolution"], answer: "A", knowledgePoint: "词源追溯", analysis: "revolution来自拉丁语revolvere（旋转），引申为变革。" }
  ]},

  { lesson: 22, title: "医学与法律术语的拉丁根", questions: [
    { type: "choice", difficulty: 1, text: "医学术语 \"cardio-\" 来自拉丁语哪个词？", options: ["A. caro（肉）", "B. cor（心）", "C. caput（头）", "D. corpus（身体）"], answer: "B", knowledgePoint: "医学词根", analysis: "cardio-来自拉丁语cor（心），如cardiology（心脏病学）。" },
    { type: "choice", difficulty: 2, text: "法律术语 \"pro bono\" 的意思是？", options: ["A. 有偿服务", "B. 免费服务", "C. 专业服务", "D. 私人服务"], answer: "B", knowledgePoint: "法律术语", analysis: "pro bono来自拉丁语pro bono publico（为了公共利益），意为免费服务。" },
    { type: "choice", difficulty: 3, text: "医学术语 \"appendicitis\" 的词根是？", options: ["A. appendix（附录）", "B. appendere（悬挂）", "C. appendre（添加）", "D. appercevoir（察觉）"], answer: "A", knowledgePoint: "复杂术语", analysis: "appendicitis由appendix（阑尾）+ -itis（炎症）组成。" }
  ]},

  { lesson: 23, title: "科学命名法：双名法与分类", questions: [
    { type: "choice", difficulty: 1, text: "双名法由哪两部分组成？", options: ["A. 属名+种加词", "B. 科名+属名", "C. 种名+亚种名", "D. 纲名+目名"], answer: "A", knowledgePoint: "双名法结构", analysis: "双名法由属名和种加词组成，如Homo sapiens（智人）。" },
    { type: "choice", difficulty: 2, text: "植物学名 \"Rosa\" 是什么？", options: ["A. 种加词", "B. 属名", "C. 科名", "D. 亚种名"], answer: "B", knowledgePoint: "属名", analysis: "Rosa是玫瑰属的属名。" },
    { type: "choice", difficulty: 3, text: "\"Canis lupus familiaris\" 中 \"familiaris\" 是？", options: ["A. 属名", "B. 种加词", "C. 亚种名", "D. 变种名"], answer: "C", knowledgePoint: "亚种命名", analysis: "Canis lupus familiaris是家犬，familiaris是亚种名。" }
  ]},

  { lesson: 24, title: "咒语词根精析", questions: [
    { type: "choice", difficulty: 1, text: "咒语 \"Expecto Patronum\" 中 \"expecto\" 的意思是？", options: ["A. 期待", "B. 驱逐", "C. 召唤", "D. 保护"], answer: "A", knowledgePoint: "咒语词根", analysis: "expecto来自拉丁语expectare（期待、等待）。" },
    { type: "choice", difficulty: 2, text: "咒语 \"Expelliarmus\" 中 \"armus\" 来自拉丁语哪个词？", options: ["A. arma（武器）", "B. arbor（树）", "C. aurum（金）", "D. aqua（水）"], answer: "A", knowledgePoint: "咒语词源", analysis: "armus来自拉丁语arma（武器），Expelliarmus意为\"解除武装\"。" },
    { type: "choice", difficulty: 3, text: "咒语 \"Stupefy\" 的词根来自拉丁语哪个词？", options: ["A. stupere（惊讶）", "B. stare（站立）", "C. struere（建造）", "D. stringere（拉紧）"], answer: "A", knowledgePoint: "咒语词源", analysis: "Stupefy来自拉丁语stupere（使惊讶、使麻木）。" }
  ]},

  { lesson: 25, title: "罗马世界背景：共和国与帝国", questions: [
    { type: "choice", difficulty: 1, text: "罗马共和国建立于哪一年？", options: ["A. 753 BCE", "B. 509 BCE", "C. 27 BCE", "D. 476 CE"], answer: "B", knowledgePoint: "罗马历史", analysis: "罗马共和国建立于公元前509年。" },
    { type: "choice", difficulty: 2, text: "罗马帝国的第一位皇帝是？", options: ["A. Julius Caesar", "B. Augustus", "C. Nero", "D. Constantine"], answer: "B", knowledgePoint: "罗马皇帝", analysis: "奥古斯都是罗马帝国的第一位皇帝，在位时间为公元前27年至公元14年。" },
    { type: "choice", difficulty: 3, text: "拉丁语在罗马帝国时期的地位是？", options: ["A. 仅上层社会使用", "B. 官方语言", "C. 仅军队使用", "D. 仅宗教使用"], answer: "B", knowledgePoint: "语言地位", analysis: "拉丁语是罗马帝国的官方语言，广泛用于政府、法律、军事和教育。" }
  ]},

  // ── 第6章 文本阅读 ──────────────────────────────────────────

  { lesson: 26, title: "简化拉丁文阅读训练", questions: [
    { type: "choice", difficulty: 1, text: "阅读拉丁语时，首先应该识别什么？", options: ["A. 动词", "B. 名词", "C. 形容词", "D. 介词"], answer: "A", knowledgePoint: "阅读技巧", analysis: "动词是句子的核心，先识别动词有助于理解句子结构。" },
    { type: "choice", difficulty: 2, text: "\"Caesar Galliam vicit.\" 中 \"vicit\" 的意思是？", options: ["A. 征服", "B. 访问", "C. 看见", "D. 建造"], answer: "A", knowledgePoint: "核心词汇", analysis: "vicit是动词vincere（征服）的完成时第三人称单数。" },
    { type: "choice", difficulty: 3, text: "\"Alea iacta est.\" 的意思是？", options: ["A. 游戏开始了", "B. 骰子已掷出", "C. 胜利在望", "D. 战斗结束"], answer: "B", knowledgePoint: "名言翻译", analysis: "这是凯撒的名言，意思是\"骰子已掷出\"，表示事情已无可挽回。" }
  ]},

  { lesson: 27, title: "凯撒《高卢战记》节选", questions: [
    { type: "choice", difficulty: 1, text: "《高卢战记》是谁写的？", options: ["A. Virgil", "B. Caesar", "C. Ovid", "D. Cicero"], answer: "B", knowledgePoint: "作者", analysis: "《高卢战记》是凯撒撰写的关于高卢战争的回忆录。" },
    { type: "choice", difficulty: 2, text: "《高卢战记》用什么文体写成？", options: ["A. 诗歌", "B. 散文", "C. 戏剧", "D. 史诗"], answer: "B", knowledgePoint: "文体", analysis: "《高卢战记》是散文体的历史著作。" },
    { type: "choice", difficulty: 3, text: "《高卢战记》的写作目的是？", options: ["A. 文学创作", "B. 政治宣传", "C. 历史记录", "D. 教学用书"], answer: "B", knowledgePoint: "写作背景", analysis: "凯撒写作《高卢战记》是为了向罗马民众展示他的功绩，进行政治宣传。" }
  ]},

  { lesson: 28, title: "奥维德《变形记》节选", questions: [
    { type: "choice", difficulty: 1, text: "《变形记》的作者是？", options: ["A. Ovid", "B. Virgil", "C. Horace", "D. Seneca"], answer: "A", knowledgePoint: "作者", analysis: "《变形记》是奥维德的代表作。" },
    { type: "choice", difficulty: 2, text: "《变形记》的主题是？", options: ["A. 历史", "B. 神话变形", "C. 哲学", "D. 战争"], answer: "B", knowledgePoint: "主题", analysis: "《变形记》讲述了众多神话人物变形的故事。" },
    { type: "choice", difficulty: 3, text: "《变形记》的结构特点是？", options: ["A. 线性叙事", "B. 环形结构", "C. 主题串联", "D. 编年体"], answer: "C", knowledgePoint: "结构", analysis: "《变形记》以变形为主题串联众多神话故事，而非严格的线性叙事。" }
  ]},

  { lesson: 29, title: "格言、铭文与箴言", questions: [
    { type: "choice", difficulty: 1, text: "\"Carpe diem\" 的意思是？", options: ["A. 抓住今天", "B. 明天再说", "C. 时光流逝", "D. 珍惜时间"], answer: "A", knowledgePoint: "常见格言", analysis: "Carpe diem来自拉丁语，意为\"抓住今天\"。" },
    { type: "choice", difficulty: 2, text: "\"Veni, vidi, vici.\" 是谁说的？", options: ["A. Augustus", "B. Caesar", "C. Cicero", "D. Virgil"], answer: "B", knowledgePoint: "名言出处", analysis: "\"Veni, vidi, vici\"（我来，我见，我征服）是凯撒的名言。" },
    { type: "choice", difficulty: 3, text: "\"Audiatur et altera pars\" 的意思是？", options: ["A. 听另一面", "B. 偏听则暗", "C. 兼听则明", "D. 听取双方意见"], answer: "D", knowledgePoint: "法律格言", analysis: "这是一句法律格言，意思是\"应当听取双方意见\"。" }
  ]},

  { lesson: 30, title: "中世纪拉丁语：教会与学术传统", questions: [
    { type: "choice", difficulty: 1, text: "中世纪拉丁语主要用于什么场合？", options: ["A. 日常交流", "B. 宗教与学术", "C. 商业贸易", "D. 文学创作"], answer: "B", knowledgePoint: "中世纪拉丁语用途", analysis: "中世纪拉丁语主要用于宗教仪式和学术研究。" },
    { type: "choice", difficulty: 2, text: "谁将《圣经》翻译成拉丁语？", options: ["A. St. Augustine", "B. St. Jerome", "C. St. Thomas Aquinas", "D. St. Francis"], answer: "B", knowledgePoint: "圣经翻译", analysis: "圣杰罗姆翻译了拉丁语版《圣经》（武加大译本）。" },
    { type: "choice", difficulty: 3, text: "经院哲学的主要语言是？", options: ["A. 希腊语", "B. 拉丁语", "C. 阿拉伯语", "D. 英语"], answer: "B", knowledgePoint: "学术语言", analysis: "经院哲学使用拉丁语作为学术语言。" }
  ]},

  // ── 第7章 高级语法 ──────────────────────────────────────────

  { lesson: 31, title: "虚拟语气：现在与未完成时", questions: [
    { type: "choice", difficulty: 1, text: "虚拟语气用于表达什么？", options: ["A. 事实", "B. 假设、愿望、建议", "C. 命令", "D. 疑问"], answer: "B", knowledgePoint: "虚拟语气用途", analysis: "虚拟语气用于表达假设、愿望、建议等非真实情况。" },
    { type: "choice", difficulty: 2, text: "动词 \"amo\" 的现在虚拟式第一人称单数是？", options: ["A. amem", "B. amabo", "C. amaverim", "D. amarem"], answer: "A", knowledgePoint: "现在虚拟式变位", analysis: "第一变位动词现在虚拟式词尾为-em, -es, -et等。" },
    { type: "choice", difficulty: 3, text: "\"Utinam venias!\" 的意思是？", options: ["A. 你来了！", "B. 希望你来！", "C. 如果你来了", "D. 你来过"], answer: "B", knowledgePoint: "愿望句式", analysis: "utinam引导愿望句，后接虚拟语气。" }
  ]},

  { lesson: 32, title: "条件句：真实与非真实条件", questions: [
    { type: "choice", difficulty: 1, text: "真实条件句使用什么语气？", options: ["A. 虚拟语气", "B. 陈述语气", "C. 命令语气", "D. 祈使语气"], answer: "B", knowledgePoint: "真实条件句", analysis: "真实条件句使用陈述语气，表示可能发生的情况。" },
    { type: "choice", difficulty: 2, text: "非真实条件句（与现在事实相反）使用什么时态？", options: ["A. 现在时", "B. 完成时", "C. 未完成虚拟式", "D. 将来时"], answer: "C", knowledgePoint: "非真实条件句", analysis: "与现在事实相反的条件句使用未完成虚拟式。" },
    { type: "choice", difficulty: 3, text: "\"Si haberem pecuniam, emam librum.\" 的意思是？", options: ["A. 如果我有钱，我会买书", "B. 如果我有钱，我买书", "C. 如果我曾经有钱，我会买过书", "D. 如果我有钱，我要买书"], answer: "A", knowledgePoint: "条件句翻译", analysis: "haberem是未完成虚拟式，emam是将来时，构成与现在事实相反的条件句。" }
  ]},

  { lesson: 33, title: "间接疑问句", questions: [
    { type: "choice", difficulty: 1, text: "间接疑问句使用什么语气？", options: ["A. 陈述语气", "B. 虚拟语气", "C. 命令语气", "D. 祈使语气"], answer: "B", knowledgePoint: "间接疑问句语气", analysis: "间接疑问句使用虚拟语气。" },
    { type: "choice", difficulty: 2, text: "\"Rogo quid facias.\" 中 \"quid\" 是什么词？", options: ["A. 关系代词", "B. 疑问代词", "C. 指示代词", "D. 不定代词"], answer: "B", knowledgePoint: "疑问代词", analysis: "quid是疑问代词，意思是\"什么\"。" },
    { type: "choice", difficulty: 3, text: "\"Nescio utrum veniat necne.\" 的意思是？", options: ["A. 我不知道他是否来", "B. 我不知道他来了", "C. 我不知道他什么时候来", "D. 我不知道他为什么来"], answer: "A", knowledgePoint: "间接疑问结构", analysis: "utrum...necne表示\"是否\"，引导间接疑问句。" }
  ]},

  { lesson: 34, title: "动名词与目的结构", questions: [
    { type: "choice", difficulty: 1, text: "动名词的词尾是？", options: ["A. -ing", "B. -andum/-endus/-endum", "C. -atio/-atus", "D. -mentum"], answer: "B", knowledgePoint: "动名词形式", analysis: "拉丁语动名词词尾为-andum/-endus/-endum。" },
    { type: "choice", difficulty: 2, text: "\"Liber legendus est.\" 的意思是？", options: ["A. 书被读", "B. 书应该被读", "C. 书正在读", "D. 书已经读了"], answer: "B", knowledgePoint: "动名词用法", analysis: "legendus是legere的动名词，这里表示义务或必要性。" },
    { type: "choice", difficulty: 3, text: "\"Ad videndum veni.\" 的意思是？", options: ["A. 我来了去看", "B. 我来看", "C. 我为了看而来", "D. 我看过了"], answer: "C", knowledgePoint: "目的不定式", analysis: "ad+不定式表示目的。" }
  ]},

  { lesson: 35, title: "被动语态（所有时态）", questions: [
    { type: "choice", difficulty: 1, text: "被动语态由什么构成？", options: ["A. 助动词+现在分词", "B. 助动词+完成分词", "C. 助动词+不定式", "D. 助动词+动名词"], answer: "B", knowledgePoint: "被动语态构成", analysis: "被动语态由助动词esse+完成被动分词构成。" },
    { type: "choice", difficulty: 2, text: "\"Liber scribitur.\" 是什么时态？", options: ["A. 现在时", "B. 过去时", "C. 将来时", "D. 完成时"], answer: "A", knowledgePoint: "被动语态时态", analysis: "scribitur是现在时被动语态。" },
    { type: "choice", difficulty: 3, text: "\"Liber scriptus est.\" 是什么语态和时态？", options: ["A. 主动语态现在时", "B. 被动语态现在时", "C. 被动语态完成时", "D. 主动语态完成时"], answer: "C", knowledgePoint: "完成被动", analysis: "scriptus est是完成时被动语态。" }
  ]},

  // ── 第8章 GCSE文本 ──────────────────────────────────────────

  { lesson: 36, title: "指定文本精读（散文）", questions: [
    { type: "choice", difficulty: 1, text: "散文文本分析的重点是？", options: ["A. 韵律", "B. 叙事结构和修辞", "C. 押韵", "D. 诗节"], answer: "B", knowledgePoint: "散文分析", analysis: "散文分析关注叙事结构、修辞手法和主题表达。" },
    { type: "choice", difficulty: 2, text: "西塞罗的散文风格特点是？", options: ["A. 简洁朴素", "B. 华丽雄辩", "C. 晦涩难懂", "D. 口语化"], answer: "B", knowledgePoint: "西塞罗风格", analysis: "西塞罗的散文以华丽雄辩著称，是拉丁语散文的典范。" },
    { type: "choice", difficulty: 3, text: "凯撒散文的特点是？", options: ["A. 复杂冗长", "B. 简洁直接", "C. 抒情优美", "D. 哲理深奥"], answer: "B", knowledgePoint: "凯撒风格", analysis: "凯撒的散文简洁直接，客观冷静，被称为\"高贵的简洁\"。" }
  ]},

  { lesson: 37, title: "指定诗歌：六音步格律", questions: [
    { type: "choice", difficulty: 1, text: "六音步诗行有几个音步？", options: ["A. 4", "B. 5", "C. 6", "D. 7"], answer: "C", knowledgePoint: "六音步", analysis: "六音步诗行由六个音步组成。" },
    { type: "choice", difficulty: 2, text: "六音步的最后一个音步通常是？", options: ["A. 扬扬格", "B. 扬抑格", "C. 抑扬格", "D. 扬扬格或扬抑格"], answer: "D", knowledgePoint: "音步类型", analysis: "六音步的最后一个音步通常是扬扬格或扬抑格。" },
    { type: "choice", difficulty: 3, text: "维吉尔《埃涅阿斯纪》使用什么格律？", options: ["A. 五音步", "B. 六音步", "C. 七音步", "D. 自由诗"], answer: "B", knowledgePoint: "史诗格律", analysis: "《埃涅阿斯纪》是史诗，使用六音步格律。" }
  ]},

  { lesson: 38, title: "修辞手法识别", questions: [
    { type: "choice", difficulty: 1, text: "明喻使用什么连接词？", options: ["A. ut", "B. sicut", "C. tamquam", "D. 以上都是"], answer: "D", knowledgePoint: "明喻", analysis: "拉丁语中明喻常用ut, sicut, tamquam等连接词。" },
    { type: "choice", difficulty: 2, text: "暗喻和明喻的区别是？", options: ["A. 没有区别", "B. 暗喻不用连接词", "C. 暗喻更简短", "D. 暗喻更复杂"], answer: "B", knowledgePoint: "暗喻", analysis: "暗喻直接将一物比作另一物，不使用连接词。" },
    { type: "choice", difficulty: 3, text: "拟人化是什么？", options: ["A. 赋予事物人的特征", "B. 重复使用词语", "C. 夸大描述", "D. 对比两个事物"], answer: "A", knowledgePoint: "拟人", analysis: "拟人化是将人的特征赋予非人类的事物。" }
  ]},

  { lesson: 39, title: "无准备文本翻译训练", questions: [
    { type: "choice", difficulty: 1, text: "无准备翻译的第一步是？", options: ["A. 逐字翻译", "B. 识别动词", "C. 查字典", "D. 确定主语"], answer: "B", knowledgePoint: "翻译技巧", analysis: "识别动词是理解句子结构的关键第一步。" },
    { type: "choice", difficulty: 2, text: "遇到不认识的单词时应该？", options: ["A. 跳过", "B. 根据上下文推断", "C. 猜测", "D. 放弃"], answer: "B", knowledgePoint: "词义推断", analysis: "根据上下文推断词义是重要的翻译技巧。" },
    { type: "choice", difficulty: 3, text: "流畅翻译的关键是？", options: ["A. 逐字对应", "B. 保持原文结构", "C. 符合目标语言习惯", "D. 使用复杂句式"], answer: "C", knowledgePoint: "翻译原则", analysis: "流畅翻译的关键是使译文符合目标语言的表达习惯。" }
  ]},

  { lesson: 40, title: "文化历史背景：奥古斯都时代", questions: [
    { type: "choice", difficulty: 1, text: "奥古斯都时代被称为？", options: ["A. 黄金时代", "B. 白银时代", "C. 青铜时代", "D. 黑暗时代"], answer: "A", knowledgePoint: "文学时期", analysis: "奥古斯都时代是拉丁语文学的黄金时代。" },
    { type: "choice", difficulty: 2, text: "奥古斯都时代的主要作家不包括？", options: ["A. Virgil", "B. Ovid", "C. Horace", "D. Seneca"], answer: "D", knowledgePoint: "主要作家", analysis: "塞涅卡是白银时代的作家，不是奥古斯都时代的。" },
    { type: "choice", difficulty: 3, text: "奥古斯都对文学的影响是？", options: ["A. 压制文学", "B. 支持和赞助文学", "C. 忽视文学", "D. 禁止文学"], answer: "B", knowledgePoint: "文学赞助", analysis: "奥古斯都积极支持和赞助文学，促进了文学的繁荣。" }
  ]},

  // ── 第9章 翻译技巧 ──────────────────────────────────────────

  { lesson: 41, title: "难句结构分析策略", questions: [
    { type: "choice", difficulty: 1, text: "分析复杂句子的第一步是？", options: ["A. 查字典", "B. 识别主句和从句", "C. 翻译每个单词", "D. 确定主语"], answer: "B", knowledgePoint: "句子分析", analysis: "首先识别主句和从句结构是分析复杂句子的关键。" },
    { type: "choice", difficulty: 2, text: "拉丁语句子中，动词通常位于？", options: ["A. 句首", "B. 句中", "C. 句末", "D. 任意位置"], answer: "C", knowledgePoint: "语序特点", analysis: "拉丁语基本语序为主-宾-谓，动词通常位于句末。" },
    { type: "choice", difficulty: 3, text: "分析长句时应该？", options: ["A. 一次性翻译", "B. 拆分成短句", "C. 跳过不认识的单词", "D. 逐字翻译"], answer: "B", knowledgePoint: "长句处理", analysis: "将长句拆分成短句有助于理解和翻译。" }
  ]},

  { lesson: 42, title: "词义辨析与语境推断", questions: [
    { type: "choice", difficulty: 1, text: "拉丁语中多义词需要根据什么来确定词义？", options: ["A. 词性", "B. 语境", "C. 词形", "D. 发音"], answer: "B", knowledgePoint: "词义确定", analysis: "语境是确定多义词词义的关键。" },
    { type: "choice", difficulty: 2, text: "动词 \"facere\" 可以表示？", options: ["A. 做", "B. 制造", "C. 成为", "D. 以上都是"], answer: "D", knowledgePoint: "多义动词", analysis: "facere是一个多义动词，可以表示做、制造、成为等含义。" },
    { type: "choice", difficulty: 3, text: "\"bellum\" 在不同语境中可以表示？", options: ["A. 战争", "B. 斗争", "C. 冲突", "D. 以上都是"], answer: "D", knowledgePoint: "词义扩展", analysis: "bellum基本含义是战争，但在不同语境中可以扩展为斗争、冲突等含义。" }
  ]},

  { lesson: 43, title: "历史语境对理解的影响", questions: [
    { type: "choice", difficulty: 1, text: "理解拉丁语文本需要了解什么？", options: ["A. 语法", "B. 词汇", "C. 历史文化背景", "D. 以上都是"], answer: "D", knowledgePoint: "综合理解", analysis: "理解拉丁语文本需要语法、词汇和历史文化背景的结合。" },
    { type: "choice", difficulty: 2, text: "凯撒《高卢战记》的写作背景是？", options: ["A. 和平时期", "B. 高卢战争期间", "C. 罗马内战期间", "D. 帝国时期"], answer: "B", knowledgePoint: "历史背景", analysis: "《高卢战记》是凯撒在高卢战争期间撰写的。" },
    { type: "choice", difficulty: 3, text: "为什么了解历史背景很重要？", options: ["A. 帮助理解词汇含义", "B. 帮助理解作者意图", "C. 帮助理解文本主题", "D. 以上都是"], answer: "D", knowledgePoint: "背景重要性", analysis: "历史背景有助于全面理解文本。" }
  ]},

  { lesson: 44, title: "文本评注方法", questions: [
    { type: "choice", difficulty: 1, text: "文本评注的目的是？", options: ["A. 翻译文本", "B. 分析和解释文本", "C. 背诵文本", "D. 改写文本"], answer: "B", knowledgePoint: "评注目的", analysis: "文本评注的目的是分析和解释文本的语言、结构和主题。" },
    { type: "choice", difficulty: 2, text: "评注应该包括？", options: ["A. 词汇解释", "B. 语法分析", "C. 文化背景", "D. 以上都是"], answer: "D", knowledgePoint: "评注内容", analysis: "评注应包括词汇解释、语法分析和文化背景等内容。" },
    { type: "choice", difficulty: 3, text: "学术评注的标准是？", options: ["A. 主观随意", "B. 客观准确", "C. 冗长复杂", "D. 简短模糊"], answer: "B", knowledgePoint: "评注标准", analysis: "学术评注应客观准确，基于文本证据。" }
  ]},

  { lesson: 45, title: "GCSE真题训练", questions: [
    { type: "choice", difficulty: 1, text: "GCSE拉丁语考试包括哪些部分？", options: ["A. 翻译", "B. 理解", "C. 语法", "D. 以上都是"], answer: "D", knowledgePoint: "考试内容", analysis: "GCSE拉丁语考试通常包括翻译、理解和语法等部分。" },
    { type: "choice", difficulty: 2, text: "答题时应该注意什么？", options: ["A. 时间管理", "B. 字迹清晰", "C. 仔细审题", "D. 以上都是"], answer: "D", knowledgePoint: "答题技巧", analysis: "答题时应注意时间管理、字迹清晰和仔细审题。" },
    { type: "choice", difficulty: 3, text: "常见的答题错误包括？", options: ["A. 时态错误", "B. 格的错误", "C. 词义错误", "D. 以上都是"], answer: "D", knowledgePoint: "常见错误", analysis: "时态、格和词义错误是常见的答题错误。" }
  ]},

  // ── 第10章 综合输出 ──────────────────────────────────────────

  { lesson: 46, title: "拉丁短文写作", questions: [
    { type: "choice", difficulty: 1, text: "拉丁语写作的第一步是？", options: ["A. 确定主题", "B. 选择词汇", "C. 确定句式", "D. 开始写作"], answer: "A", knowledgePoint: "写作步骤", analysis: "确定主题是写作的第一步。" },
    { type: "choice", difficulty: 2, text: "拉丁语写作应注意什么？", options: ["A. 语法正确", "B. 词汇准确", "C. 语序合理", "D. 以上都是"], answer: "D", knowledgePoint: "写作要求", analysis: "拉丁语写作应注意语法正确、词汇准确和语序合理。" },
    { type: "choice", difficulty: 3, text: "如何提高拉丁语写作能力？", options: ["A. 背诵范文", "B. 多练习", "C. 学习句型", "D. 以上都是"], answer: "D", knowledgePoint: "写作练习", analysis: "提高写作能力需要背诵范文、多练习和学习句型。" }
  ]},

  { lesson: 47, title: "文学评论写作框架", questions: [
    { type: "choice", difficulty: 1, text: "文学评论的结构是？", options: ["A. 引言-正文-结论", "B. 描述-分析-评价", "C. 问题-分析-解决", "D. 引言-分析-结论"], answer: "D", knowledgePoint: "评论结构", analysis: "文学评论通常采用引言-分析-结论的结构。" },
    { type: "choice", difficulty: 2, text: "文学评论应包括？", options: ["A. 文本分析", "B. 主题讨论", "C. 评价", "D. 以上都是"], answer: "D", knowledgePoint: "评论内容", analysis: "文学评论应包括文本分析、主题讨论和评价。" },
    { type: "choice", difficulty: 3, text: "如何构建论点？", options: ["A. 提出观点", "B. 引用文本证据", "C. 分析论证", "D. 以上都是"], answer: "D", knowledgePoint: "论点构建", analysis: "构建论点需要提出观点、引用证据和分析论证。" }
  ]},

  { lesson: 48, title: "跨文化比较：罗马与魔法世界的语言观", questions: [
    { type: "choice", difficulty: 1, text: "拉丁语在魔法世界的作用是？", options: ["A. 日常交流", "B. 咒语语言", "C. 学术语言", "D. 商业语言"], answer: "B", knowledgePoint: "魔法语言", analysis: "拉丁语是咒语的主要语言。" },
    { type: "choice", difficulty: 2, text: "咒语与拉丁语词根的关系是？", options: ["A. 无关", "B. 部分咒语源自拉丁词根", "C. 所有咒语都源自拉丁词根", "D. 所有拉丁词根都用于咒语"], answer: "B", knowledgePoint: "咒语词源", analysis: "许多咒语源自拉丁词根，但并非全部。" },
    { type: "choice", difficulty: 3, text: "为什么拉丁语适合作为咒语语言？", options: ["A. 发音优美", "B. 结构严谨", "C. 历史悠久", "D. 以上都是"], answer: "D", knowledgePoint: "语言特点", analysis: "拉丁语的发音、结构和历史使其适合作为咒语语言。" }
  ]},

  { lesson: 49, title: "词源学综合：一个词根的旅程", questions: [
    { type: "choice", difficulty: 1, text: "词根 \"dict\" 的意思是？", options: ["A. 说", "B. 写", "C. 看", "D. 做"], answer: "A", knowledgePoint: "词根含义", analysis: "dict来自拉丁语dicere（说）。" },
    { type: "choice", difficulty: 2, text: "英语单词 \"predict\" 由什么组成？", options: ["A. pre- + dict", "B. pro- + dict", "C. per- + dict", "D. re- + dict"], answer: "A", knowledgePoint: "词根组合", analysis: "predict由pre-（提前）+ dict（说）组成，意为预言。" },
    { type: "choice", difficulty: 3, text: "词根 \"dict\" 在英语中的衍生词不包括？", options: ["A. dictionary", "B. dictate", "C. direct", "D. dictator"], answer: "C", knowledgePoint: "词根衍生", analysis: "direct来自拉丁语dirigere（引导），与dict无关。" }
  ]},

  { lesson: 50, title: "GCSE综合复习", questions: [
    { type: "choice", difficulty: 1, text: "复习的重点是？", options: ["A. 语法", "B. 词汇", "C. 翻译", "D. 以上都是"], answer: "D", knowledgePoint: "复习内容", analysis: "复习应包括语法、词汇和翻译等方面。" },
    { type: "choice", difficulty: 2, text: "如何有效复习？", options: ["A. 制定计划", "B. 练习真题", "C. 查漏补缺", "D. 以上都是"], answer: "D", knowledgePoint: "复习方法", analysis: "有效复习需要制定计划、练习真题和查漏补缺。" },
    { type: "choice", difficulty: 3, text: "考试前应该做什么？", options: ["A. 熬夜复习", "B. 放松休息", "C. 突击记忆", "D. 放弃复习"], answer: "B", knowledgePoint: "考前准备", analysis: "考试前应放松休息，保持良好状态。" }
  ]},

  // ── 第11章 古典文本精读 ──────────────────────────────────────────

  { lesson: 51, title: "西塞罗散文：修辞结构分析", questions: [
    { type: "choice", difficulty: 1, text: "西塞罗是哪个时期的作家？", options: ["A. 共和国时期", "B. 帝国时期", "C. 中世纪", "D. 文艺复兴时期"], answer: "A", knowledgePoint: "西塞罗时期", analysis: "西塞罗是罗马共和国时期的著名演说家和作家。" },
    { type: "choice", difficulty: 2, text: "西塞罗的主要作品类型是？", options: ["A. 诗歌", "B. 散文和演说", "C. 历史", "D. 哲学"], answer: "B", knowledgePoint: "西塞罗作品", analysis: "西塞罗以散文和演说著称。" },
    { type: "choice", difficulty: 3, text: "西塞罗的修辞学著作是？", options: ["A. 《论演说家》", "B. 《共和国》", "C. 《法律篇》", "D. 《图斯库兰论辩》"], answer: "A", knowledgePoint: "修辞学著作", analysis: "《论演说家》是西塞罗的重要修辞学著作。" }
  ]},

  { lesson: 52, title: "维吉尔《埃涅阿斯纪》：史诗传统", questions: [
    { type: "choice", difficulty: 1, text: "《埃涅阿斯纪》的作者是？", options: ["A. Ovid", "B. Virgil", "C. Horace", "D. Lucan"], answer: "B", knowledgePoint: "史诗作者", analysis: "《埃涅阿斯纪》是维吉尔的代表作。" },
    { type: "choice", difficulty: 2, text: "《埃涅阿斯纪》讲述的是？", options: ["A. 特洛伊战争", "B. 埃涅阿斯的旅程", "C. 罗马建国", "D. 以上都是"], answer: "D", knowledgePoint: "史诗内容", analysis: "《埃涅阿斯纪》讲述了埃涅阿斯从特洛伊到意大利建立罗马的故事。" },
    { type: "choice", difficulty: 3, text: "《埃涅阿斯纪》模仿了哪部希腊史诗？", options: ["A. 《伊利亚特》", "B. 《奥德赛》", "C. 两者都是", "D. 都不是"], answer: "C", knowledgePoint: "文学借鉴", analysis: "《埃涅阿斯纪》综合模仿了《伊利亚特》和《奥德赛》。" }
  ]},

  { lesson: 53, title: "李维历史著作：史学写法", questions: [
    { type: "choice", difficulty: 1, text: "李维的代表作是？", options: ["A. 《罗马史》", "B. 《高卢战记》", "C. 《编年史》", "D. 《历史》"], answer: "A", knowledgePoint: "李维著作", analysis: "李维的代表作是《罗马史》。" },
    { type: "choice", difficulty: 2, text: "李维的历史写作风格是？", options: ["A. 简洁客观", "B. 华丽生动", "C. 枯燥乏味", "D. 晦涩难懂"], answer: "B", knowledgePoint: "写作风格", analysis: "李维的历史写作华丽生动，富有文学性。" },
    { type: "choice", difficulty: 3, text: "李维历史著作的特点是？", options: ["A. 注重史实准确性", "B. 注重道德教化", "C. 注重政治分析", "D. 注重经济描述"], answer: "B", knowledgePoint: "史学特点", analysis: "李维注重通过历史进行道德教化。" }
  ]},

  { lesson: 54, title: "塔西佗：讽刺与历史评判", questions: [
    { type: "choice", difficulty: 1, text: "塔西佗是哪个时期的历史学家？", options: ["A. 共和国时期", "B. 帝国早期", "C. 帝国后期", "D. 中世纪"], answer: "B", knowledgePoint: "塔西佗时期", analysis: "塔西佗是罗马帝国早期的历史学家。" },
    { type: "choice", difficulty: 2, text: "塔西佗的代表作不包括？", options: ["A. 《编年史》", "B. 《历史》", "C. 《日耳曼尼亚志》", "D. 《罗马史》"], answer: "D", knowledgePoint: "塔西佗著作", analysis: "《罗马史》是李维的著作，不是塔西佗的。" },
    { type: "choice", difficulty: 3, text: "塔西佗的写作风格是？", options: ["A. 赞美帝国", "B. 批判讽刺", "C. 中立客观", "D. 浪漫抒情"], answer: "B", knowledgePoint: "写作风格", analysis: "塔西佗以批判和讽刺的风格著称。" }
  ]},

  { lesson: 55, title: "奥古斯都文学的政治语境", questions: [
    { type: "choice", difficulty: 1, text: "奥古斯都时期文学繁荣的原因是？", options: ["A. 政治稳定", "B. 官方赞助", "C. 文化交流", "D. 以上都是"], answer: "D", knowledgePoint: "文学繁荣原因", analysis: "政治稳定、官方赞助和文化交流共同促进了文学繁荣。" },
    { type: "choice", difficulty: 2, text: "奥古斯都时期的主要文学形式是？", options: ["A. 散文", "B. 诗歌", "C. 戏剧", "D. 历史"], answer: "B", knowledgePoint: "文学形式", analysis: "诗歌是奥古斯都时期的主要文学形式。" },
    { type: "choice", difficulty: 3, text: "维吉尔《埃涅阿斯纪》的政治意义是？", options: ["A. 歌颂奥古斯都", "B. 批评帝国", "C. 记录历史", "D. 娱乐大众"], answer: "A", knowledgePoint: "政治意义", analysis: "《埃涅阿斯纪》通过神话歌颂奥古斯都和罗马帝国。" }
  ]},

  // ── 第12章 语言学深度 ──────────────────────────────────────────

  { lesson: 56, title: "拉丁语法理论：格系统的逻辑", questions: [
    { type: "choice", difficulty: 1, text: "拉丁语有几个格？", options: ["A. 4", "B. 5", "C. 6", "D. 7"], answer: "C", knowledgePoint: "格的数量", analysis: "拉丁语有6个格：主格、宾格、与格、夺格、属格、呼格。" },
    { type: "choice", difficulty: 2, text: "格的功能是？", options: ["A. 表示语法关系", "B. 表示词性", "C. 表示时态", "D. 表示语气"], answer: "A", knowledgePoint: "格的功能", analysis: "格表示名词在句子中的语法关系。" },
    { type: "choice", difficulty: 3, text: "格变系统的逻辑基础是？", options: ["A. 语义角色", "B. 词形变化", "C. 语序", "D. 词性"], answer: "A", knowledgePoint: "格理论", analysis: "格变系统的逻辑基础是语义角色，如施事、受事、工具等。" }
  ]},

  { lesson: 57, title: "语言演变：拉丁语到罗曼语", questions: [
    { type: "choice", difficulty: 1, text: "罗曼语族包括哪些语言？", options: ["A. 法语、西班牙语、意大利语", "B. 德语、英语、荷兰语", "C. 俄语、波兰语、捷克语", "D. 希腊语、阿尔巴尼亚语"], answer: "A", knowledgePoint: "罗曼语族", analysis: "罗曼语族包括法语、西班牙语、意大利语等。" },
    { type: "choice", difficulty: 2, text: "拉丁语演变为罗曼语的主要原因是？", options: ["A. 政治变化", "B. 语音演变", "C. 文化交流", "D. 以上都是"], answer: "D", knowledgePoint: "语言演变原因", analysis: "政治、语音和文化因素共同导致了拉丁语的演变。" },
    { type: "choice", difficulty: 3, text: "罗曼语与拉丁语的主要区别是？", options: ["A. 语法简化", "B. 词汇变化", "C. 语音变化", "D. 以上都是"], answer: "D", knowledgePoint: "语言差异", analysis: "罗曼语在语法、词汇和语音上都与拉丁语有显著区别。" }
  ]},

  { lesson: 58, title: "铭文研究与文献考证", questions: [
    { type: "choice", difficulty: 1, text: "拉丁铭文的主要类型是？", options: ["A. 墓碑铭文", "B. 公共建筑铭文", "C. 法律铭文", "D. 以上都是"], answer: "D", knowledgePoint: "铭文类型", analysis: "拉丁铭文包括墓碑、公共建筑和法律等多种类型。" },
    { type: "choice", difficulty: 2, text: "铭文研究的意义是？", options: ["A. 补充历史资料", "B. 研究语言变化", "C. 了解社会文化", "D. 以上都是"], answer: "D", knowledgePoint: "研究意义", analysis: "铭文研究对历史、语言和文化研究都有重要意义。" },
    { type: "choice", difficulty: 3, text: "文献考证的目的是？", options: ["A. 确定文本真实性", "B. 还原原始文本", "C. 分析文本版本", "D. 以上都是"], answer: "D", knowledgePoint: "文献考证", analysis: "文献考证包括确定真实性、还原文本和分析版本等。" }
  ]},

  { lesson: 59, title: "斯多葛与伊壁鸠鲁哲学文本", questions: [
    { type: "choice", difficulty: 1, text: "斯多葛学派的核心思想是？", options: ["A. 追求快乐", "B. 顺应自然", "C. 怀疑一切", "D. 追求知识"], answer: "B", knowledgePoint: "斯多葛思想", analysis: "斯多葛学派主张顺应自然和理性生活。" },
    { type: "choice", difficulty: 2, text: "伊壁鸠鲁学派的核心思想是？", options: ["A. 追求快乐", "B. 顺应自然", "C. 禁欲主义", "D. 悲观主义"], answer: "A", knowledgePoint: "伊壁鸠鲁思想", analysis: "伊壁鸠鲁学派主张追求快乐，但强调精神快乐高于肉体快乐。" },
    { type: "choice", difficulty: 3, text: "卢克莱修的《物性论》属于哪个哲学流派？", options: ["A. 斯多葛", "B. 伊壁鸠鲁", "C. 柏拉图", "D. 亚里士多德"], answer: "B", knowledgePoint: "哲学流派", analysis: "卢克莱修的《物性论》阐述了伊壁鸠鲁的原子论哲学。" }
  ]},

  { lesson: 60, title: "学术写作：论证与引证规范", questions: [
    { type: "choice", difficulty: 1, text: "学术写作的特点是？", options: ["A. 主观随意", "B. 客观严谨", "C. 夸张生动", "D. 口语化"], answer: "B", knowledgePoint: "学术写作特点", analysis: "学术写作应客观严谨。" },
    { type: "choice", difficulty: 2, text: "引用文献的目的是？", options: ["A. 支持论点", "B. 显示知识", "C. 增加字数", "D. 符合格式"], answer: "A", knowledgePoint: "引用目的", analysis: "引用文献是为了支持论点。" },
    { type: "choice", difficulty: 3, text: "学术论证的结构是？", options: ["A. 提出问题-分析问题-解决问题", "B. 引言-论证-结论", "C. 描述-分析-评价", "D. 以上都是"], answer: "D", knowledgePoint: "论证结构", analysis: "学术论证可以采用多种结构。" }
  ]},

  // ── 第13章 文学与思想 ──────────────────────────────────────────

  { lesson: 61, title: "悲剧传统：塞内卡与希腊悲剧比较", questions: [
    { type: "choice", difficulty: 1, text: "塞内卡是哪个时期的悲剧作家？", options: ["A. 共和国时期", "B. 帝国时期", "C. 中世纪", "D. 文艺复兴时期"], answer: "B", knowledgePoint: "塞内卡时期", analysis: "塞内卡是罗马帝国时期的悲剧作家。" },
    { type: "choice", difficulty: 2, text: "塞内卡悲剧的特点是？", options: ["A. 情节简单", "B. 语言华丽", "C. 情感强烈", "D. 以上都是"], answer: "D", knowledgePoint: "塞内卡风格", analysis: "塞内卡的悲剧情节简单但语言华丽、情感强烈。" },
    { type: "choice", difficulty: 3, text: "塞内卡悲剧与希腊悲剧的区别是？", options: ["A. 更注重心理描写", "B. 更注重情节", "C. 更注重人物", "D. 更注重场景"], answer: "A", knowledgePoint: "悲剧比较", analysis: "塞内卡悲剧更注重心理描写和情感表达。" }
  ]},

  { lesson: 62, title: "贺拉斯：颂歌与文学批评", questions: [
    { type: "choice", difficulty: 1, text: "贺拉斯是哪个时期的诗人？", options: ["A. 共和国时期", "B. 奥古斯都时期", "C. 帝国后期", "D. 中世纪"], answer: "B", knowledgePoint: "贺拉斯时期", analysis: "贺拉斯是奥古斯都时期的重要诗人。" },
    { type: "choice", difficulty: 2, text: "贺拉斯的主要作品是？", options: ["A. 《颂歌集》", "B. 《诗艺》", "C. 《书信集》", "D. 以上都是"], answer: "D", knowledgePoint: "贺拉斯作品", analysis: "贺拉斯的作品包括《颂歌集》、《诗艺》和《书信集》。" },
    { type: "choice", difficulty: 3, text: "贺拉斯的文学理论主张是？", options: ["A. 寓教于乐", "B. 纯粹娱乐", "C. 纯粹教化", "D. 形式主义"], answer: "A", knowledgePoint: "文学理论", analysis: "贺拉斯主张文学应该寓教于乐。" }
  ]},

  { lesson: 63, title: "卢克莱修：诗歌中的哲学论证", questions: [
    { type: "choice", difficulty: 1, text: "卢克莱修的代表作是？", options: ["A. 《物性论》", "B. 《变形记》", "C. 《埃涅阿斯纪》", "D. 《颂歌集》"], answer: "A", knowledgePoint: "卢克莱修作品", analysis: "卢克莱修的代表作是《物性论》。" },
    { type: "choice", difficulty: 2, text: "《物性论》的主题是？", options: ["A. 爱情", "B. 哲学", "C. 历史", "D. 神话"], answer: "B", knowledgePoint: "作品主题", analysis: "《物性论》是一部哲学史诗，阐述伊壁鸠鲁的原子论。" },
    { type: "choice", difficulty: 3, text: "卢克莱修使用诗歌形式的原因是？", options: ["A. 便于记忆", "B. 增加美感", "C. 传播哲学", "D. 以上都是"], answer: "D", knowledgePoint: "诗歌形式", analysis: "卢克莱修使用诗歌形式便于记忆、增加美感并传播哲学思想。" }
  ]},

  { lesson: 64, title: "文体比较：散文、诗歌、历史写法的差异", questions: [
    { type: "choice", difficulty: 1, text: "散文与诗歌的主要区别是？", options: ["A. 韵律", "B. 格式", "C. 语言", "D. 以上都是"], answer: "D", knowledgePoint: "文体区别", analysis: "散文与诗歌在韵律、格式和语言上都有区别。" },
    { type: "choice", difficulty: 2, text: "历史写作的特点是？", options: ["A. 虚构", "B. 客观", "C. 主观", "D. 抒情"], answer: "B", knowledgePoint: "历史写作", analysis: "历史写作应客观真实。" },
    { type: "choice", difficulty: 3, text: "不同文体的写作目的差异是？", options: ["A. 散文用于说理", "B. 诗歌用于抒情", "C. 历史用于记录", "D. 以上都是"], answer: "D", knowledgePoint: "写作目的", analysis: "不同文体有不同的写作目的。" }
  ]},

  { lesson: 65, title: "原创翻译与注释写作", questions: [
    { type: "choice", difficulty: 1, text: "翻译的基本原则是？", options: ["A. 忠实", "B. 通顺", "C. 完整", "D. 以上都是"], answer: "D", knowledgePoint: "翻译原则", analysis: "翻译应忠实、通顺、完整。" },
    { type: "choice", difficulty: 2, text: "注释写作的目的是？", options: ["A. 解释文本", "B. 分析文本", "C. 评价文本", "D. 以上都是"], answer: "D", knowledgePoint: "注释目的", analysis: "注释应解释、分析和评价文本。" },
    { type: "choice", difficulty: 3, text: "学术翻译的标准是？", options: ["A. 直译", "B. 意译", "C. 兼顾直译与意译", "D. 自由发挥"], answer: "C", knowledgePoint: "翻译标准", analysis: "学术翻译应兼顾直译的准确性和意译的流畅性。" }
  ]},

  // ── 第14章 综合冲刺 ──────────────────────────────────────────

  { lesson: 66, title: "无准备文本：速读与精译", questions: [
    { type: "choice", difficulty: 1, text: "速读的目的是？", options: ["A. 理解大意", "B. 逐字翻译", "C. 背诵文本", "D. 分析语法"], answer: "A", knowledgePoint: "速读目的", analysis: "速读的目的是快速理解文本大意。" },
    { type: "choice", difficulty: 2, text: "精译的要求是？", options: ["A. 准确", "B. 流畅", "C. 完整", "D. 以上都是"], answer: "D", knowledgePoint: "精译要求", analysis: "精译应准确、流畅、完整。" },
    { type: "choice", difficulty: 3, text: "如何平衡速读与精译？", options: ["A. 先速读再精译", "B. 边速读边精译", "C. 只速读不精译", "D. 只精译不速读"], answer: "A", knowledgePoint: "阅读策略", analysis: "先速读了解大意，再精译细节。" }
  ]},

  { lesson: 67, title: "文学评论：论点建构", questions: [
    { type: "choice", difficulty: 1, text: "论点的要素是？", options: ["A. 观点", "B. 证据", "C. 分析", "D. 以上都是"], answer: "D", knowledgePoint: "论点要素", analysis: "论点包括观点、证据和分析。" },
    { type: "choice", difficulty: 2, text: "如何支持论点？", options: ["A. 引用文本", "B. 分析例子", "C. 对比分析", "D. 以上都是"], answer: "D", knowledgePoint: "论点支持", analysis: "可以通过引用、分析和对比来支持论点。" },
    { type: "choice", difficulty: 3, text: "批判性分析的特点是？", options: ["A. 主观评价", "B. 客观分析", "C. 否定一切", "D. 肯定一切"], answer: "B", knowledgePoint: "批判性分析", analysis: "批判性分析应客观分析文本。" }
  ]},

  { lesson: 68, title: "语言演变论文写作", questions: [
    { type: "choice", difficulty: 1, text: "论文的结构是？", options: ["A. 引言-正文-结论", "B. 摘要-引言-方法-结果-讨论-结论", "C. 问题-分析-解决", "D. 以上都是"], answer: "D", knowledgePoint: "论文结构", analysis: "论文可以采用多种结构。" },
    { type: "choice", difficulty: 2, text: "文献综述的目的是？", options: ["A. 总结研究现状", "B. 提出研究问题", "C. 说明研究意义", "D. 以上都是"], answer: "D", knowledgePoint: "文献综述", analysis: "文献综述总结现状、提出问题并说明意义。" },
    { type: "choice", difficulty: 3, text: "如何进行学术研究？", options: ["A. 提出假设", "B. 收集资料", "C. 分析论证", "D. 以上都是"], answer: "D", knowledgePoint: "研究方法", analysis: "学术研究包括提出假设、收集资料和分析论证。" }
  ]},

  { lesson: 69, title: "跨学科综合（拉丁语与魔咒课的联动）", questions: [
    { type: "choice", difficulty: 1, text: "拉丁语与魔咒课的联系是？", options: ["A. 咒语源自拉丁词根", "B. 发音影响咒语效果", "C. 语法结构影响咒语", "D. 以上都是"], answer: "D", knowledgePoint: "学科联系", analysis: "拉丁语与魔咒课在词根、发音和语法上都有联系。" },
    { type: "choice", difficulty: 2, text: "为什么拉丁语适合作为咒语语言？", options: ["A. 结构严谨", "B. 历史悠久", "C. 发音优美", "D. 以上都是"], answer: "D", knowledgePoint: "语言特点", analysis: "拉丁语的结构、历史和发音使其适合作为咒语语言。" },
    { type: "choice", difficulty: 3, text: "如何将拉丁语知识应用于魔咒学习？", options: ["A. 理解咒语词源", "B. 掌握发音技巧", "C. 分析咒语结构", "D. 以上都是"], answer: "D", knowledgePoint: "知识应用", analysis: "可以通过理解词源、掌握发音和分析结构来应用拉丁语知识。" }
  ]},

  { lesson: 70, title: "A-Level综合模拟", questions: [
    { type: "choice", difficulty: 1, text: "A-Level拉丁语考试包括哪些部分？", options: ["A. 翻译", "B. 理解", "C. 文学评论", "D. 以上都是"], answer: "D", knowledgePoint: "考试内容", analysis: "A-Level拉丁语考试包括翻译、理解和文学评论等部分。" },
    { type: "choice", difficulty: 2, text: "如何准备A-Level考试？", options: ["A. 练习翻译", "B. 分析文本", "C. 写作练习", "D. 以上都是"], answer: "D", knowledgePoint: "备考方法", analysis: "备考应包括练习翻译、分析文本和写作练习。" },
    { type: "choice", difficulty: 3, text: "考试策略是？", options: ["A. 时间管理", "B. 先易后难", "C. 仔细检查", "D. 以上都是"], answer: "D", knowledgePoint: "考试策略", analysis: "考试策略包括时间管理、先易后难和仔细检查。" }
  ]}

];

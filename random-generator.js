const firstNames = [
  "阿尔伯特","克拉拉","塞西尔","罗莎蒙德","杰拉尔德","约瑟芬","西里尔","伊索尔德","埃德加","罗兰","佩内洛普","克利夫","格拉迪斯","哈罗德","伦纳德","西尔维娅","迈尔斯","乔伊斯","奥斯瓦尔德","艾琳","雷金纳德","斯坦利","多琳","沃尔特","南希","威尔弗雷德","希拉","休伯特","梅维斯","伯纳德","菲奥娜","德里克","吉莉安","戈登","珍妮特","基思","莱斯利","梅根","贝蒂","芭芭拉","肯尼斯","卡罗尔","特雷弗","黛安","尼尔","苏珊","加雷斯","海伦","安","加文","帕特里夏","林恩","布赖恩","吉尔","伊恩","温迪","萨曼莎","克雷格","克莱尔","达伦","路易丝","米歇尔","韦恩","丽贝卡","布雷特","娜塔莎","肖恩","劳拉","卡尔","斯科特","杰西卡","迪恩","斯蒂芬妮","格兰特","凯瑟琳","科马克","菲比","基兰","霍莉","罗南","佐伊","托比","利维","贾斯珀","克劳迪娅","鲁弗斯","伊莫金","奥古斯塔斯","苔丝","康斯坦丁","莉迪亚","玛德琳","雨果","朱利安","伊迪丝","莱昂内尔","阿尔比恩","卡珊德拉","奥斯卡","菲利克斯","阿尔菲","弗雷迪","阿奇","西奥多","塞巴斯蒂安","卢卡斯","伊桑","诺亚","路易斯","阿米莉亚","奥利维亚","艾拉","米娅","芙蕾雅","艾薇","波比","黛西","弗洛伦斯","玛蒂尔达","伊维","鲁比","索菲","克洛伊","莱利","杰米","亚历克斯","泰勒","摩根","里斯","布莱尔","埃利斯","卡梅伦"
];
const lastNames = [
  "波特","韦斯莱","格兰杰","马尔福","邓布利多","斯内普","布莱克","卢平","唐克斯","隆巴顿","洛夫古德","斯克林杰","福吉","克劳奇","佩弗利尔","斯拉格霍恩","帕金森","扎比尼","海格","麦格","弗立维","斯普劳特","特里劳妮","费尔奇","芬里尔","格雷伯克","贝拉特里克斯","莱斯特兰奇","罗齐尔","卡罗","多洛霍夫","亚克斯利","塞尔温","诺特","克拉布","高尔","麦克米兰","博克","博金","格林德沃","迪戈里","托马斯","布朗","贝尔比","佩蒂尔","芬尼根","乔丹","贝尔彻","艾弗里","巴沙特","奥利凡德","拉文克劳","张","洛哈特","奇洛","布特","科纳","戴维斯","克里瓦特","艾克莫","赫奇帕奇","斯卡曼德","博恩斯","艾博","史密斯","罗琳","里德尔","哈德森","科尔曼","班尼特","霍普金斯","理查兹","萨默斯","汉密尔顿","富兰克林","巴雷特","科尔森","米切尔","哈珀","夏普","埃利奥特","吉布森","霍金斯","罗杰斯","索恩","伍德沃德","汉森","梅里尔","牛顿","帕默尔顿","伯顿","迪金森","费舍尔","加德纳","霍姆斯","肯特","兰开斯特","劳埃德","马什","莫顿","诺里斯","奥尔顿","佩恩","普雷斯顿","昆西","拉德克利夫","萨维奇","谢尔顿","斯通","坦纳","沃克","沃伦","韦斯顿","惠勒","怀亚特","扬","赖特"
];
const woods = [
  "紫杉木","冬青木","橡木","柳木","桦木","山楂木","栗木","枫木","桃花心木",
  "葡萄藤木","樱桃木","冷杉木","雪松","紫荆木","白蜡木","白杨木","胡桃木",
  "接骨木","赤杨木","紫檀木","桃金娘木","黑檀木","银桦木","榛木","梧桐木",
  "山毛榉木","榆木","松木","赤榆木","石灰桃木","青铜橡木","梨木","黄桦木","柚木"
];
const cores = [
  "凤凰羽毛","独角兽毛","龙心弦","夜骐尾毛","媚娃头发","雷鸟尾羽","媚娃触须","猫狸子毛","珍珠兽触须"
];
const inchFractions = [
  "6","6¼","6½","6¾","7","7¼","7½","7¾","8","8¼","8½","8¾",
  "9","9¼","9½","9¾","10","10¼","10½","10¾","11","11¼","11½","11¾",
  "12","12¼","12½","12¾","13","13¼","13½","13¾","14","14¼","14½","14¾",
  "15","15¼","15½","15¾","16","16¼","16½","16¾","17","17¼","17½","17¾",
  "18","18¼","18½","18¾","19","19¼","19½","19¾","20","20¼","20½","20¾"
];
const traits = [
  "均衡标准","柔韧","决斗专精","守护亲和","勇气之杖","永生剧毒","全能学霸","温暖守护","大器晚成","变形大师","温柔克制","易容变形","威严守护","麻瓜物品亲和","家庭守护","精准黑防","魔药&大脑封闭术","古老高傲","极端黑魔法","血统骄傲","蛮力忠诚","优雅精明","算计倾向","权力控制","杀戮专精","冷酷狂热","魔药天赋","灵性奇特","魔咒精准","预言天赋","魅力记忆咒","脆弱易蚀","聪慧优雅","理性学术","智慧本源","幽灵灵性","正直公平","神奇生物亲和","草药草木","公正法律","温和治愈","稳重正义","友善学习","直率主见","温和包容","政治圆滑","偏执控制","权势傲慢","严苛守序","知识守护","巨人亲和","敏感灵体","冷峻威慑","读心亲和","冷静正义","麻瓜勇者"
];

export const player = { wandAccepted: false };

let wandTryCount = 0;
let usedResultIndices = [];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomName() {
  document.getElementById('name').value = `${rand(firstNames)}・${rand(lastNames)}`;
}

export function generateRandomWand() {
  const name = document.getElementById('name').value;

  const specialWands = [
    { match: n => n.includes('罗琳'),                          wand: "创世之杖・想象本源・万法核心・无限长度" },
    { match: n => n.includes('哈利') && n.includes('波特'),    wand: "冬青木・凤凰羽毛・11英寸・柔韧" },
    { match: n => n.includes('詹姆') && n.includes('波特'),    wand: "桃花心木・独角兽毛・11英寸・决斗专精" },
    { match: n => n.includes('伊万斯') ,                       wand: "柳木・凤凰羽毛・10¼英寸・守护亲和" },
    { match: n => n.includes('波特'),                          wand: "冬青木・凤凰羽毛・11英寸・勇气之杖" },
    { match: n => n.includes('邓布利多'),                      wand: "接骨木・夜骐尾毛・15英寸・老魔杖・死亡圣器" },
    { match: n => n.includes('里德尔') || n.includes('伏地魔'),wand: "紫杉木・凤凰羽毛・13½英寸・永生剧毒" },
    { match: n => n.includes('格兰杰'),                        wand: "葡萄藤木・龙心弦・10¾英寸・全能学霸" },
    { match: n => n.includes('韦斯莱'),                        wand: "柳木・独角兽毛・12英寸・温暖守护" },
    { match: n => n.includes('隆巴顿'),                        wand: "樱桃木・独角兽毛・13英寸・大器晚成" },
    { match: n => n.includes('麦格'),                          wand: "冷杉木・龙心弦・9½英寸・变形大师" },
    { match: n => n.includes('卢平'),                          wand: "雪松・独角兽毛・10¼英寸・温柔克制" },
    { match: n => n.includes('唐克斯'),                        wand: "紫荆木・独角兽毛・12英寸・易容变形" },
    { match: n => n.includes('金斯莱'),                        wand: "白蜡木・龙心弦・12英寸・威严守护" },
    { match: n => n.includes('亚瑟') && n.includes('韦斯莱'),  wand: "白杨木・独角兽毛・11英寸・麻瓜物品亲和" },
    { match: n => n.includes('莫丽') && n.includes('韦斯莱'),  wand: "桦木・独角兽毛・10¾英寸・家庭守护" },
    { match: n => n.includes('马尔福'),                        wand: "山楂木・独角兽毛・10英寸・精准黑防" },
    { match: n => n.includes('斯内普'),                        wand: "桦木・龙心弦・13¼英寸・魔药&大脑封闭术" },
    { match: n => n.includes('布莱克'),                        wand: "胡桃木・龙心弦・12英寸・古老高傲" },
    { match: n => n.includes('莱斯特兰奇'),                    wand: "紫杉木・龙心弦・14英寸・极端黑魔法" },
    { match: n => n.includes('帕金森'),                        wand: "山毛榉木・独角兽毛・10英寸・血统骄傲" },
    { match: n => n.includes('高尔') || n.includes('克拉布'),  wand: "黑檀木・龙心弦・12英寸・蛮力忠诚" },
    { match: n => n.includes('扎比尼'),                        wand: "梧桐木・龙心弦・11英寸・优雅精明" },
    { match: n => n.includes('艾弗里'),                        wand: "白杨木・龙心弦・11½英寸・算计倾向" },
    { match: n => n.includes('克劳奇'),                        wand: "冷杉木・龙心弦・12英寸・权力控制" },
    { match: n => n.includes('多洛霍夫'),                      wand: "橡木・龙心弦・12½英寸・杀戮专精" },
    { match: n => n.includes('罗齐尔'),                        wand: "紫杉木・龙心弦・12英寸・冷酷狂热" },
    { match: n => n.includes('斯拉格霍恩'),                    wand: "柚木・龙心弦・11英寸・魔药天赋" },
    { match: n => n.includes('洛夫古德'),                      wand: "胡桃木・独角兽毛・10½英寸・灵性奇特" },
    { match: n => n.includes('弗立维'),                        wand: "黄桦木・独角兽毛・9英寸・魔咒精准" },
    { match: n => n.includes('特里劳妮'),                      wand: "榛木・独角兽毛・9¾英寸・预言天赋" },
    { match: n => n.includes('洛哈特'),                        wand: "樱桃木・龙心弦・11英寸・魅力记忆咒" },
    { match: n => n.includes('奇洛'),                          wand: "紫杉木・独角兽毛・11英寸・脆弱易蚀" },
{ match: n => n.includes('帕瓦蒂') && n.includes('佩蒂尔'),  wand: "桃金娘木・媚娃触须・10英寸・占卜天赋" },
{ match: n => n.includes('帕迪玛') && n.includes('佩蒂尔'),  wand: "梨木・独角兽毛・10英寸・聪慧优雅" },
{ match: n => n.includes('佩蒂尔'),                        wand: "梨木・独角兽毛・10英寸・聪慧优雅" },  // 兜底    { match: n => n.includes('布特') || n.includes('科纳'),    wand: "山毛榉木・独角兽毛・10½英寸・理性学术" },
    { match: n => n.includes('拉文克劳'),                      wand: "青铜橡木・龙心弦・13英寸・智慧本源" },
    { match: n => n.includes('格雷女士'),                      wand: "银桦木・独角兽毛・11英寸・幽灵灵性" },
    { match: n => n.includes('迪戈里'),                        wand: "白蜡木・独角兽毛・12¼英寸・正直公平" },
    { match: n => n.includes('斯卡曼德'),                      wand: "石灰桃木・珍珠兽触须・15英寸・神奇生物亲和" },
    { match: n => n.includes('斯普劳特'),                      wand: "赤榆木・独角兽毛・11英寸・草药草木" },
    { match: n => n.includes('博恩斯'),                        wand: "白蜡木・独角兽毛・11英寸・公正法律" },
    { match: n => n.includes('艾博'),                          wand: "赤松木・独角兽毛・10英寸・温和治愈" },
    { match: n => n.includes('麦克米兰'),                      wand: "橡木・独角兽毛・11英寸・稳重正义" },
    { match: n => n.includes('芬列里'),                        wand: "枫木・独角兽毛・10英寸・友善学习" },
    { match: n => n.includes('史密斯'),                        wand: "桦木・独角兽毛・11英寸・直率主见" },
    { match: n => n.includes('胖修士'),                        wand: "柳木・独角兽毛・10英寸・温和包容" },
    { match: n => n.includes('福吉'),                          wand: "松木・独角兽毛・10英寸・政治圆滑" },
    { match: n => n.includes('乌姆里奇'),                      wand: "胡桃木・龙心弦・8英寸・偏执控制" },
    { match: n => n.includes('卢修斯') && n.includes('马尔福'),wand: "榆木・龙心弦・12英寸・权势傲慢" },
    { match: n => n.includes('费尔奇'),                        wand: "橡木・猫狸子毛・9英寸・严苛守序" },
    { match: n => n.includes('平斯夫人'),                      wand: "山毛榉木・独角兽毛・9英寸・知识守护" },
    { match: n => n.includes('海格'),                          wand: "橡木・独角兽毛・16英寸・巨人亲和" },
    { match: n => n.includes('奥利凡德'),                      wand: "梧桐木・凤凰羽毛・11英寸・魔杖匠人之杖" },
    { match: n => n.includes('桃金娘'),                        wand: "榛木・独角兽毛・9英寸・敏感灵体" },
    { match: n => n.includes('血人巴罗'),                      wand: "黑檀木・龙心弦・12英寸・冷峻威慑" },
    { match: n => n.includes('奎妮'),                          wand: "桃金娘木・媚娃触须・10英寸・读心亲和" },
    { match: n => n.includes('蒂娜'),                          wand: "紫檀木・独角兽毛・11英寸・冷静正义" },
    { match: n => n.includes('雅各布'),                        wand: "赤杨木・雷鸟尾羽・10英寸・麻瓜勇者" },
    { match: n => n.includes('格林德沃'),                      wand: "接骨木・夜骐尾毛・15英寸・老魔杖支配者" },
  ];

  const special = specialWands.find(s => s.match(name));
  const wandText = special
    ? special.wand
    : `${rand(woods)}・${rand(cores)}・${rand(inchFractions)}英寸・${rand(traits)}`;

  document.getElementById('wand').value = wandText;
  document.getElementById('try-wand').disabled = false;
  document.getElementById('wand-result').style.display = 'none';

  wandTryCount = 0;
  usedResultIndices = [];
}

export function initRandomGenerators() {
  document.getElementById('random-name').onclick = generateRandomName;
  document.getElementById('random-wand').onclick = generateRandomWand;
}

export function sortingHatLogic() {
  const name = document.getElementById('name').value;
  const box = document.getElementById('sorting-result');

  if (name.includes("罗琳") || name.includes("Joanne") || name.includes("Rowling")) {
    box.className = "rainbow-legend";
    box.innerHTML = `🎩 分院帽：<b><i>啊……原来是您，罗琳，魔法世界的创造者。</i></b><br>
<i>我本可以看穿一切灵魂，但唯独对您，我无权选择。</i><br>
👑<b>霍格沃茨所有学院都向您敞开，请您亲自决定归属。</b><br>
✅ 请在上方学院下拉框中 <b>手动选择</b> 您想去的学院。`;
    box.style.display = "block";
    return;
  }
  // ✅ 邓布利多单独处理，最优先级
  if (name.includes('邓布利多')) {
    box.className = 'gryff';
    box.innerHTML = `🎩分院帽：嗯……我看到了你的内心。<br>
🌟伟大的巫师，智慧与勇气并存，唯有格兰芬多才是邓布利多的姓氏！<br>
✅ 已自动为你分配至【格兰芬多】`;
    box.style.display = 'block';
    const houseSelect = document.getElementById('house');
    houseSelect.value = '格兰芬多';
    houseSelect.dispatchEvent(new Event('change'));
    return;
  }
  const hatRules = [
    {
      match: n =>n.includes('伊万斯'),
      cls: 'gryff', house: '格兰芬多',
      line: `<b>分院帽微微颤动，仿佛看到了一个熟悉而永恒的灵魂。</b><br>
🎩 分院帽：<i>"莉莉·伊万斯……你的爱如此炽热，你的勇气如此纯粹。正是这份爱与勇气，拯救了整个魔法世界。"</i><br>`
    },
    {
      match: n => n.includes("里德尔") || n.includes("伏地魔"),
      cls: "slyth", house: "斯莱特林",
      line: `<b>分院帽微微震颤，仿佛感受到了灵魂深处的黑暗与野心。</b><br>
🎩 分院帽：<i>"聪慧、冷静、野心无边……黑魔王的天赋足以撼动整个魔法世界。"</i><br>
🐍 您的选择毋庸置疑——<b>斯莱特林</b>才配得上您的血统与欲望。`
    },
    { match: n => n.includes('波特'),      cls: 'gryff', house: '格兰芬多', line: '🗡️勇气、正义、骑士精神……波特家的孩子，从来都是格兰芬多的骄傲！' },
    { match: n => n.includes('韦斯莱'),    cls: 'gryff', house: '格兰芬多', line: '🧺又一个韦斯莱……善良、勇敢、忠诚的韦斯莱家族，血脉里刻着格兰芬多的印记！' },
    { match: n => n.includes('麦格'),      cls: 'gryff', house: '格兰芬多', line: '📜坚韧、威严、勇气非凡，麦格家族的荣耀，属于格兰芬多！' },
    { match: n => n.includes('卢平'),      cls: 'gryff', house: '格兰芬多', line: '🌙隐忍、善良、勇敢无畏的卢平，即使身处黑暗，也藏着格兰芬多的光芒！' },
    { match: n => n.includes('唐克斯'),    cls: 'gryff', house: '格兰芬多', line: '🌈活泼、勇敢、忠于内心，唐克斯的勇气，足以踏入格兰芬多的大门！' },
    { match: n => n.includes('格兰杰'),    cls: 'gryff', house: '格兰芬多', line: '📚智慧与勇气兼备，心怀正义的格兰杰，你是格兰芬多的荣耀！' },
    { match: n => n.includes('海格'),      cls: 'gryff', house: '格兰芬多', line: '🐶善良、忠诚、勇敢，海格的内心，永远是格兰芬多的模样！' },
    { match: n => n.includes('隆巴顿'),    cls: 'gryff', house: '格兰芬多', line: '🦁外表怯懦，内心藏着极致的坚毅与勇敢，隆巴顿——格兰芬多！' },
    { match: n => n.includes('托马斯') || n.includes('布朗') || n.includes('芬尼根') || n.includes('乔丹') || n.includes('贝尔比'), cls: 'gryff', house: '格兰芬多', line: '🔥勇气在你心中燃烧……格兰芬多！' },
    { match: n => n.includes('马尔福'),    cls: 'slyth', house: '斯莱特林', line: '🐍纯血、野心、权势，马尔福家的孩子，天生就是斯莱特林的继承人！' },
    { match: n => n.includes('布莱克'),    cls: 'slyth', house: '斯莱特林', line: '🌑古老、强大、桀骜不驯，布莱克家族的荣耀，永远属于斯莱特林！' },
    { match: n => n.includes('斯内普'),    cls: 'slyth', house: '斯莱特林', line: '⚗️聪慧、隐忍、天赋异禀的，斯内普——哪怕内心复杂，斯莱特林也始终是你的归宿！' },
    { match: n => n.includes('莱斯特兰奇'),cls: 'slyth', house: '斯莱特林', line: '🔪忠诚、狠绝、野心勃勃，莱斯特兰奇的名字，刻在斯莱特林的骨血里！' },
    { match: n => n.includes('帕金森'),    cls: 'slyth', house: '斯莱特林', line: '👑优雅、骄傲，帕金森家族与斯莱特林的羁绊，从未断裂！' },
    { match: n => n.includes('扎比尼'),    cls: 'slyth', house: '斯莱特林', line: '💡聪慧、圆滑、洞察人心，斯莱特林需要扎比尼这样的智者！' },
    { match: n => n.includes('高尔') || n.includes('克拉布'), cls: 'slyth', house: '斯莱特林', line: '💪忠诚、勇猛的从属，是斯莱特林最坚实的后盾，欢迎加入！' },
    { match: n => n.includes('艾弗里'),    cls: 'slyth', house: '斯莱特林', line: '📜纯血家族的骄傲，艾弗里的野心与智谋并存，斯莱特林欢迎你！' },
    { match: n => n.includes('克劳奇'),    cls: 'slyth', house: '斯莱特林', line: '🏛️权势、野心、严于律己，克劳奇的荣耀，属于斯莱特林！' },
    { match: n => n.includes('斯拉格霍恩'),cls: 'slyth', house: '斯莱特林', line: '🐍深谙人情，擅长魔药，斯拉格霍恩是古老斯莱特林校友，血脉不改。' },
    { match: n => n.includes('诺特') || n.includes('罗齐尔') || n.includes('卡罗') || n.includes('多洛霍夫') || n.includes('亚克斯利') || n.includes('塞尔温'), cls: 'slyth', house: '斯莱特林', line: '🐍野心与智谋在你眼中……斯莱特林！' },
    { match: n => n.includes('洛夫古德'),  cls: 'raven', house: '拉文克劳', line: '🔮智慧、好奇、独特的灵魂，洛夫古德的古怪，正是拉文克劳的精髓！' },
    { match: n => n.includes('弗立维'),    cls: 'raven', house: '拉文克劳', line: '🎵聪慧、博学、优雅，弗立维教授的血脉，永远属于拉文克劳！' },
    { match: n => n.includes('拉文克劳'),  cls: 'raven', house: '拉文克劳', line: '📜学院的荣耀，智慧的象征，你生来就是拉文克劳的孩子！' },
    { match: n => n.includes('张'),        cls: 'raven', house: '拉文克劳', line: '📚聪慧、内敛、勤奋好学的张，拉文克劳的大门，为你敞开！' },
    { match: n => n.includes('博克'),      cls: 'raven', house: '拉文克劳', line: '💡敏锐、聪慧、善于思考，博克家族的智慧，契合拉文克劳的灵魂！' },
    { match: n => n.includes('特里劳妮'),  cls: 'raven', house: '拉文克劳', line: '🦅洞察未来，灵性与智慧并存，占卜天才特里劳妮归于拉文克劳。' },
    { match: n => n.includes('洛哈特'),    cls: 'raven', house: '拉文克劳', line: '🦅才华横溢，风度翩翩的洛哈特，追求学识与名望，拉文克劳！' },
    { match: n => n.includes('奇洛'),      cls: 'raven', house: '拉文克劳', line: '🦅聪慧博学，钻研黑魔法，头脑敏锐，奇洛属于拉文克劳。' },
    { match: n => n.includes('帕瓦蒂') && n.includes('佩蒂尔'),  cls: 'gryff', house: '格兰芬多', line: '🎲活泼、开朗、热爱占卜的帕瓦蒂，勇气与热情在你眼中……格兰芬多！' },
    { match: n => n.includes('帕迪玛') && n.includes('佩蒂尔'),  cls: 'raven', house: '拉文克劳', line: '🦅聪慧冷静，心思细腻，勤奋好学，帕迪玛是拉文克劳的好苗子。' },
    { match: n => n.includes('科纳'),      cls: 'raven', house: '拉文克劳', line: '🦅理性沉稳，魔法天赋出众的科纳，拉文克劳的智者。' },
    { match: n => n.includes('戴维斯'),    cls: 'raven', house: '拉文克劳', line: '🦅优雅聪慧，才华洋溢，戴维斯是拉文克劳的优秀代表。' },
    { match: n => n.includes('克里瓦特'),  cls: 'raven', house: '拉文克劳', line: '🦅品学兼优，头脑灵活，克里瓦特是拉文克劳的优等生。' },
    { match: n => n.includes('艾克莫'),    cls: 'raven', house: '拉文克劳', line: '🦅聪慧但内心脆弱的艾克莫，仍不失拉文克劳的求知之光。' },
    { match: n => n.includes('迪戈里'),    cls: 'huff',  house: '赫奇帕奇', line: '✨善良、正直、谦逊有礼，塞德里克的光芒，永远照亮赫奇帕奇！' },
    { match: n => n.includes('赫奇帕奇'),  cls: 'huff',  house: '赫奇帕奇', line: '🌿忠诚、真诚、勤劳，你承载着学院的荣耀，欢迎回家！' },
    { match: n => n.includes('斯卡曼德'),  cls: 'huff',  house: '赫奇帕奇', line: '🦡善良、耐心、热爱生灵、不畏艰辛——斯卡曼德家族，赫奇帕奇的荣耀！' },
    { match: n => n.includes('斯普劳特'),  cls: 'huff',  house: '赫奇帕奇', line: '🦡草药学大师，温柔坚韧，勤劳善良，斯普劳特属于赫奇帕奇。' },
    { match: n => n.includes('博恩斯'),    cls: 'huff',  house: '赫奇帕奇', line: '🦡正直、忠诚、公正无私，博恩斯家族是赫奇帕奇的骄傲。' },
    { match: n => n.includes('艾博'),      cls: 'huff',  house: '赫奇帕奇', line: '🦡温柔、友善、踏实可靠，汉娜·艾博一样的赫奇帕奇。' },
    { match: n => n.includes('麦克米兰'),  cls: 'huff',  house: '赫奇帕奇', line: '🦡沉稳、正义、勤奋团结，厄尼·麦克米兰式的赫奇帕奇。' },
    { match: n => n.includes('芬列里'),    cls: 'huff',  house: '赫奇帕奇', line: '🦡温和、真诚、友善待人的芬列里，麻瓜出身的赫奇帕奇之光。' },
    { match: n => n.includes('史密斯'),    cls: 'huff',  house: '赫奇帕奇', line: '🦡自信、直率、有主见，扎卡赖斯·史密斯式的赫奇帕奇。' },
  ];

  const rule = hatRules.find(r => r.match(name));
  let cls, house, line;

  if (rule) {
    cls = rule.cls; house = rule.house; line = rule.line;
  } else {
    const random = Math.random();
    if (random < 0.25)      { cls = 'gryff'; house = '格兰芬多'; line = '🔥勇气在你心中燃烧……格兰芬多！'; }
    else if (random < 0.5)  { cls = 'slyth'; house = '斯莱特林'; line = '🐍野心与智谋在你眼中……斯莱特林！'; }
    else if (random < 0.75) { cls = 'raven'; house = '拉文克劳'; line = '📖智慧与求知欲指引你……拉文克劳！'; }
    else                    { cls = 'huff';  house = '赫奇帕奇'; line = '🌿善良与真诚……赫奇帕奇！'; }
  }

  box.className = cls;
  box.innerHTML = `🎩分院帽：嗯……我看到了你的内心。<br>${line}<br>✅ 已自动为你分配至【${house}】`;
  box.style.display = 'block';

  const houseSelect = document.getElementById('house');
  houseSelect.value = house;
  houseSelect.dispatchEvent(new Event('change'));
  document.dispatchEvent(new CustomEvent('houseSelected', { detail: { house } }));
}

export function initSortingHat() {
  document.getElementById('sorting-hat').onclick = sortingHatLogic;
}

const wandResults = [
  { type: 'success', bg: '#3a311a', color: '#9fdf9f', text: `🌟 魔杖迸发出耀眼金光，空气中回荡着古老的魔法吟唱。<br>💫 魔力如水流般与你相融，灵魂与杖芯达成完美共振。<br>👴🏻 奥利凡德：<i>太完美了……这是百年难遇的至高契合！</i>` },
  { type: 'success', bg: '#3a311a', color: '#9fdf9f', text: `🌬️ 微风轻轻环绕指尖，空气中飘来草木与星光的气息。<br>✨ 魔杖通体发亮，发出柔和吟唱，魔力与你完美共鸣。<br>👴🏻 奥利凡德：<i>啊，不可思议……是魔杖选择了它的巫师！这是命中注定。</i>` },
  { type: 'success', bg: '#3a311a', color: '#9fdf9f', text: `🪄 杖身泛起柔和光晕，魔力温顺地环绕在你的周身。<br>🌱 没有丝毫抗拒，只有平静的接纳与默契的共鸣。<br>👴🏻 奥利凡德：<i>非常好，它已经认可你了，你们会成为绝佳搭档。</i>` },
  { type: 'success', bg: '#3a311a', color: '#9fdf9f', text: `🪄 魔杖微微发热，散发出治愈般的温暖光晕。<br>🌿 魔力平稳流淌，没有抗拒，只有默契。<br>👴🏻 奥利凡德：<i>很好，它愿意与你同行，你们会合作愉快。</i>` },
  { type: 'success', bg: '#3a311a', color: '#9fdf9f', text: `✨ 四周魔力缓缓汇聚缠绕杖身，符文隐隐浮现微光。<br>🪄 魔杖轻轻震颤致意，心甘情愿认你为主。<br>👴🏻 奥利凡德：<i>十分契合，这根魔杖与你的缘分恰到好处。</i>` },
  { type: 'fail',    bg: '#3a1c1c', color: '#ff8888', text: `💨 一股冷风吹过，魔杖在手中不安震动。<br>🌀 魔力紊乱，发出刺耳杂音，几乎要脱手飞出。<br>👴🏻 奥利凡德：<i>不行……它对你心存戒备，这根不属于你。</i>` },
  { type: 'fail',    bg: '#3a1c1c', color: '#ff8888', text: `🌪️ 魔杖剧烈震颤，魔力疯狂躁动，明显对你充满排斥。<br>❄️ 冰冷的气息从杖身传来，完全拒绝与你产生任何连接。<br>👴🏻 奥利凡德：<i>很遗憾，它无法接受你，换一根试试吧。</i>` },
  { type: 'fail',    bg: '#3a1c1c', color: '#ff8888', text: `⚡ 魔杖突然爆发出冰冷的能量，将你震退半步。<br>❌ 魔力剧烈冲突，火花四溅，显然极度排斥你。<br>👴🏻 奥利凡德：<i>抱歉……这根魔杖与你完全不合，重新选择吧。</i>` },
  { type: 'fail',    bg: '#3a1c1c', color: '#ff8888', text: `💥 魔杖猛地迸发出强烈冲击，直接从你手中弹飞出去。<br>☠️ 魔力彻底断裂，发出尖锐的嗡鸣，彻底拒绝你的触碰。<br>👴🏻 奥利凡德：<i>天哪……这根魔杖与你水火不容，绝对不能使用！</i>` },
  { type: 'fail',    bg: '#3a1c1c', color: '#ff8888', text: `🕸️ 周身萦绕压抑黑雾，杖身冰冷刺骨毫无温度。<br>🚫 魔力彻底隔绝，完全不愿回应你的一丝魔法。<br>👴🏻 奥利凡德：<i>感受不到半点羁绊，你们的缘分，暂时未到。</i>` },
];

const specialWandTryResults = {
  '罗琳':   { cls: 'rainbow-legend', bg: '', color: '#fff', text: `🪄 <b>所有魔杖同时发出创世般的光芒</b>，整个奥利凡德商店都在轻轻震颤<br>👴🏻 奥利凡德：<i>"您就是……写下这一切的人。对您而言，不是魔杖选择巫师，而是您创造了魔杖与魔法的法则。</i><br>✨ 世间所有魔力，皆源于您的想象。这根魔杖<b>无条件臣服</b>，永远认可您。` },
  '奥利凡德':{ cls: 'legend', bg: '#4a3a1a', color: '#fc0', text: `👑整个魔杖店的魔杖同时共鸣，金色圣光铺满房间。<br>🪄所有魔杖向你俯首，空气中响起古老的吟唱。<br>👴🏻奥利凡德：……家族血脉！你天生便是所有魔杖的主宰！<br>✨无需选择，你就是魔杖的王，全部认可！` },
  '邓布利多':{ cls: 'legend', bg: '#4a3a1a', color: '#fc0', text: `🪄 <b>老魔杖的幻影在空气中浮现</b>，橡木杖身缠绕金色纹路，凤凰羽毛芯发出圣辉<br>👴🏻 奥利凡德：<i>"阿不思·邓布利多……唯有邓布利多，配得上老魔杖的认可。它追随最强的巫师，却唯独对邓布利多敞开心扉——邓布利多的力量源于大爱，而非贪婪。</i><br>✨ 魔杖与您灵魂共鸣，世间无人能及，它甘愿为您所用。` },
  '波特':    { cls: 'gryff', bg: '#732b2b', color: '#fff', text: `🪄 <b>凤凰羽毛芯微微发烫，杖身泛起淡金色光晕</b>，与你额间的伤疤产生共鸣<br>👴🏻 奥利凡德：<i>"哈利·波特……这根魔杖，与你命中注定。它的芯，与那个黑巫师的魔杖同源，却因你的善良与勇气，绽放出不一样的光芒。</i><br>✨ 它会在你最需要的时候守护你，这是魔杖与巫师最深刻的羁绊。` },
  '里德尔':  { cls: 'slyth', bg: '#2b5a2b', color: '#fff', text: `🪄 <b>魔杖散发阴冷的黑雾，龙心弦芯发出暗红光芒</b>，周围空气都变得粘稠<br>👴🏻 奥利凡德：<i>"汤姆·里德尔……这根魔杖，承载着伏地魔所有的力量与野心。它渴望强大，渴望杀戮，与你的灵魂完美契合——你是它唯一的主人。</i><br>✨ 黑魔法的力量在杖尖流淌，它将助你实现所有的野心，无人能挡。` },
  '伏地魔':  { cls: 'slyth', bg: '#2b5a2b', color: '#fff', text: `🪄 <b>魔杖散发阴冷的黑雾，龙心弦芯发出暗红光芒</b>，周围空气都变得粘稠<br>👴🏻 奥利凡德：<i>"汤姆·里德尔……这根魔杖，承载着伏地魔所有的力量与野心。它渴望强大，渴望杀戮，与你的灵魂完美契合——你是它唯一的主人。</i><br>✨ 黑魔法的力量在杖尖流淌，它将助你实现所有的野心，无人能挡。` },
  '斯内普':  { cls: 'slyth', bg: '#2b5a2b', color: '#fff', text: `🪄 <b>桦木魔杖散发沉静冷光</b>，魔力内敛却无比锋利。<br>👴🏻 奥利凡德：<i>"你拥有最罕见的天赋……魔药与大脑封闭术大师。"</i><br>它懂你的隐忍、深情与强大，<b>默默守护，永不背叛。</b><br>✨ 这根魔杖完全认可你，是你最忠实的伙伴。` },
  '格兰杰':  { cls: 'gryff', bg: '#732b2b', color: '#fff', text: `🪄 <b>葡萄藤木魔杖灵光四溢</b>，智慧气息遍布整间店铺。<br>👴🏻 奥利凡德：<i>"百年难遇的聪慧巫师，最完美的契合。"</i><br>它助你精通一切魔法，<b>学霸专属，全能无敌。</b><br>✨ 魔杖与你灵魂共鸣，无条件认可你。` },
  '韦斯莱':  { cls: 'gryff', bg: '#732b2b', color: '#fff', text: `🪄 <b>柳木魔杖散发温暖红光</b>，家族守护之力环绕周身。<br>👴🏻 奥利凡德：<i>"韦斯莱家族的温暖与勇敢，令人敬佩。"</i><br>它守护家人与朋友，<b>温柔却无比坚定。</b><br>✨ 这根魔杖真心认可你，永远站在你身边。` },
  '马尔福':  { cls: 'slyth', bg: '#2b5a2b', color: '#fff', text: `🪄 <b>山楂木魔杖散发高傲银光</b>，纯血贵族气息扑面而来。<br>👴🏻 奥利凡德：<i>"优雅、精准、强大，纯血世家的完美选择。"</i><br>它擅长黑魔法防御，<b>只臣服于高贵血统。</b><br>✨ 魔杖完全认可你，以你为荣。` },
  '斯卡曼德': { cls: 'huff', bg: '#b99f55', color: '#000', text: `🪄 <b>石灰桃木魔杖与万物共鸣</b>，神奇生物之声在店内回响。<br>👴🏻 奥利凡德：<i>"你是生灵之友，魔杖与自然融为一体。"</i><br>它能安抚所有神奇动物，<b>温柔而强大。</b><br>✨ 魔杖彻底认可你，与你灵魂相通。` },
  '隆巴顿':  { cls: 'gryff', bg: '#732b2b', color: '#fff', text: `🪄 <b>樱桃木魔杖沉稳发光</b>，大器晚成之力缓缓觉醒。<br>👴🏻 奥利凡德：<i>"你的勇气终将唤醒它全部力量。"</i><br>它看似朴实，<b>后劲无穷，越坚强越强大。</b><br>✨ 魔杖认可你的善良，无条件为你而战。` },
  '洛夫古德': { cls: 'raven', bg: '#2a4b7a', color: '#fff', text: `🪄 <b>胡桃木魔杖散发奇异灵光</b>，能看见常人看不见的世界。<br>👴🏻 奥利凡德：<i>"你的灵魂独特而自由，充满奇思妙想。"</i><br>它与灵性魔法共鸣，<b>超脱世俗，独一无二。</b><br>✨ 魔杖深深认可你，与你同行。` },
  '布莱克':  { cls: 'slyth', bg: '#2b5a2b', color: '#fff', text: `🪄 <b>胡桃木魔杖散发古老黑光</b>，最古老高贵的血统之力。<br>👴🏻 奥利凡德：<i>"布莱克家族……强大而自由的灵魂。"</i><br>它高傲、不羁、强大，<b>只认真正的强者。</b><br>✨ 魔杖彻底认可你，奉你为主。` },
  '莱斯特兰奇':{ cls: 'slyth', bg: '#2b5a2b', color: '#fff', text: `🪄 <b>紫杉魔杖散发狂热黑魔法波动</b>，危险而强大。<br>👴🏻 奥利凡德：<i>"极致的狂热与忠诚，令人畏惧的力量。"</i><br>它为黑魔法而生，<b>无所畏惧，永不退缩。</b><br>✨ 魔杖完全认可你，与你共行黑暗。` },
  '麦格':    { cls: 'gryff', bg: '#732b2b', color: '#fff', text: `🪄 <b>冷杉木魔杖威严发光</b>，变形术大师的专属力量。<br>👴🏻 奥利凡德：<i>"坚定、公正、强大，真正的教育家。"</i><br>它精准无比，<b>变形术登峰造极。</b><br>✨ 魔杖深深认可你，为你坚守正义。` },
  '海格':    { cls: 'gryff', bg: '#732b2b', color: '#fff', text: `🪄 <b>橡木魔杖散发磅礴巨力</b>，巨人血脉之力震动全场。<br>👴🏻 奥利凡德：<i>"宽厚、善良、力量无穷，令人安心。"</i><br>它能驯服最狂野的生物，<b>温暖而可靠。</b><br>✨ 魔杖无条件认可你，永远守护你。` },
  '伊万斯': { cls: 'gryff', bg: '#732b2b', color: '#fff', text: `💚 <b>柳木魔杖绽放温暖绿光</b>，爱与保护的魔力闪闪发光。<br>👴🏻 奥利凡德：<i>"伊万斯……你的爱足以拯救世界。这根魔杖见证了你最伟大的时刻。"</i><br>✨ <b>母爱的力量永恒不衰</b>，任何黑暗都无法侵蚀。<br>💚 魔杖为你而骄傲，认可你的每一个选择。` },
};

export function tryWandLogic() {
  const box = document.getElementById('wand-result');
  const name = document.getElementById('name').value;
  Object.assign(box.style, { display: "block", padding: "12px", borderRadius: "8px", lineHeight: "1.6" });

  const specialKey = Object.keys(specialWandTryResults).find(k => name.includes(k));
  if (specialKey) {
    const r = specialWandTryResults[specialKey];
    box.className = r.cls;
    box.style.background = r.bg;
    box.style.color = r.color;
    box.innerHTML = r.text;
    player.wandAccepted = true;
    return;
  }

  wandTryCount++;

  if (wandTryCount >= 10) {
    box.style.background = "#3a311a";
    box.style.color = "#9fdf9f";
    box.innerHTML = `🌟 第十次尝试！魔杖仿佛被你的坚持打动，发出璀璨光芒！<br>
✨ 魔力彻底与你相融，所有抗拒消失，它终于选择了你！<br>
👴🏻 奥利凡德：<i>坚持终有回报……这根魔杖，终于认可了它的巫师！</i>`;
    player.wandAccepted = true;
    wandTryCount = 0;
    usedResultIndices = [];
    return;
  }

  if (usedResultIndices.length >= wandResults.length) usedResultIndices = [];
  const available = wandResults.map((_, i) => i).filter(i => !usedResultIndices.includes(i));
  const picked = available[Math.floor(Math.random() * available.length)];
  usedResultIndices.push(picked);

  const r = wandResults[picked];
  box.style.background = r.bg;
  box.style.color = r.color;
  box.innerHTML = r.text;
  player.wandAccepted = r.type === 'success';
}

export function initWandSelection() {
  document.getElementById('try-wand').onclick = tryWandLogic;
}
// geography-questionBank.js
// 麻瓜学术 · 地理分科 · 随堂测验题库
// 教授：菲利克斯·韦斯莱
// 每课3题：basic（+2分）、medium（0分，全对得E）、hard（-1分）

export const questionBank = [
  // ════════════════════════════════════════
  // 第1章 自然地理（第1年·KS3）
  // ════════════════════════════════════════
  {
    lesson: 1, title: "地球结构与板块构造",
    questions: [
      { type: "choice", difficulty: 1, text: "地球内部圈层从外向内的顺序是：", options: ["A. 地核→地幔→地壳", "B. 地壳→地幔→地核", "C. 地幔→地壳→地核", "D. 地核→地壳→地幔"], answer: "B", knowledgePoint: "地球内部结构", analysis: "地球内部圈层从外向内是地壳、地幔、地核。" },
      { type: "choice", difficulty: 2, text: "全球岩石圈被分成：", options: ["A. 四大板块", "B. 五大板块", "C. 六大板块", "D. 七大板块"], answer: "C", knowledgePoint: "板块数量", analysis: "全球岩石圈被分成六大板块。" },
      { type: "choice", difficulty: 3, text: "关于岩石圈的叙述，正确的是：", options: ["A. 岩石圈就是地壳", "B. 岩石圈包括地壳和上地幔", "C. 岩石圈厚度均匀", "D. 岩石圈不包括软流层"], answer: "B", knowledgePoint: "岩石圈概念", analysis: "岩石圈包括地壳和上地幔顶部，平均厚度约100千米。" }
    ]
  },
  {
    lesson: 2, title: "火山：岩浆的出口",
    questions: [
      { type: "choice", difficulty: 1, text: "火山喷发物主要包括：", options: ["A. 只有熔岩", "B. 熔岩、火山灰、气体", "C. 只有火山灰", "D. 只有气体"], answer: "B", knowledgePoint: "火山喷发物", analysis: "火山喷发物包括熔岩、火山灰、火山气体等。" },
      { type: "choice", difficulty: 2, text: "盾状火山的特征是：", options: ["A. 坡度陡、火山锥高大", "B. 坡度缓、火山锥扁平", "C. 只有裂隙喷发", "D. 喷发频率高"], answer: "B", knowledgePoint: "火山类型", analysis: "盾状火山坡度缓、形状像盾牌，如夏威夷的基拉韦亚火山。" },
      { type: "choice", difficulty: 3, text: "日本多火山地震的主要原因是：", options: ["A. 位于板块内部", "B. 位于板块交界处", "C. 位于环太平洋地震带", "D. 地形平坦"], answer: "B", knowledgePoint: "火山地震分布", analysis: "日本位于亚欧板块与太平洋板块交界处，地壳运动活跃。" }
    ]
  },
  {
    lesson: 3, title: "地震：能量的释放",
    questions: [
      { type: "choice", difficulty: 1, text: "衡量地震大小的等级是：", options: ["A. 烈度", "B. 震级", "C. 深度", "D. 距离"], answer: "B", knowledgePoint: "震级与烈度", analysis: "震级是衡量地震大小的等级，烈度是地面受到的影响程度。" },
      { type: "choice", difficulty: 2, text: "地震波中传播速度最快的是：", options: ["A. 横波", "B. 纵波", "C. 面波", "D. 一样快"], answer: "B", knowledgePoint: "地震波类型", analysis: "纵波（P波）传播速度最快，横波（S波）次之。" },
      { type: "choice", difficulty: 3, text: "同一次地震，不同地区烈度不同的主要原因是：", options: ["A. 震级不同", "B. 震源深度不同、距震中远近不同、地质构造不同", "C. 地震发生时间不同", "D. 建筑质量相同"], answer: "B", knowledgePoint: "烈度影响因素", analysis: "烈度受震源深度、距震中距离、地质构造、建筑质量等因素影响。" }
    ]
  },
  {
    lesson: 4, title: "岩石循环：三类岩石的转化",
    questions: [
      { type: "choice", difficulty: 1, text: "下列属于沉积岩特征的是：", options: ["A. 有层理结构", "B. 有晶体", "C. 有气孔", "D. 有化石一定是沉积岩"], answer: "A", knowledgePoint: "沉积岩特征", analysis: "沉积岩具有层理结构，常含有化石。" },
      { type: "choice", difficulty: 2, text: "三类岩石中可能转化为岩浆岩的是：", options: ["A. 只有沉积岩", "B. 沉积岩和变质岩", "C. 只有变质岩", "D. 所有岩石"], answer: "B", knowledgePoint: "岩石转化", analysis: "沉积岩和变质岩在高温高压下可以重熔再生成为岩浆岩。" },
      { type: "choice", difficulty: 3, text: "石灰岩变成大理石的过程属于：", options: ["A. 岩浆活动", "B. 变质作用", "C. 沉积作用", "D. 风化作用"], answer: "B", knowledgePoint: "变质作用", analysis: "石灰岩在高温高压下变成大理石，是典型的变质作用。" }
    ]
  },
  {
    lesson: 5, title: "河流系统：侵蚀、搬运、沉积",
    questions: [
      { type: "choice", difficulty: 1, text: "河流侵蚀作用的主要形式是：", options: ["A. 下切侵蚀和侧蚀", "B. 只有下切侵蚀", "C. 只有侧蚀", "D. 沉积作用"], answer: "A", knowledgePoint: "河流侵蚀", analysis: "河流侵蚀包括下切侵蚀（向下）和侧蚀（向两岸）。" },
      { type: "choice", difficulty: 2, text: "河流携带的泥沙沉积下来形成的平原是：", options: ["A. 冲积平原", "B. 三角洲平原", "C. 洪积平原", "D. 冲积扇"], answer: "B", knowledgePoint: "河流沉积地貌", analysis: "河流入海口或入湖口，泥沙沉积形成三角洲。" },
      { type: "choice", difficulty: 3, text: "长江中下游形成\"地上河\"的主要原因是：", options: ["A. 河道变宽", "B. 泥沙堆积大于侵蚀", "C. 落差增大", "D. 流速加快"], answer: "B", knowledgePoint: "地上河成因", analysis: "黄河中游流经黄土高原，携带大量泥沙，下游堆积大于侵蚀，河床升高形成地上河。" }
    ]
  },

  // ════════════════════════════════════════
  // 第2章 人文地理（第1年·KS3）
  // ════════════════════════════════════════
  {
    lesson: 6, title: "人口分布：为什么人住在这里",
    questions: [
      { type: "choice", difficulty: 1, text: "世界人口稠密区主要分布在：", options: ["A. 高纬度地区", "B. 内陆干旱地区", "C. 中低纬度近海平原地区", "D. 高原地区"], answer: "C", knowledgePoint: "人口分布规律", analysis: "世界人口稠密区主要分布在中低纬度近海平原地区。" },
      { type: "choice", difficulty: 2, text: "影响人口分布的主要因素不包括：", options: ["A. 气候", "B. 地形", "C. 矿产资源", "D. 人口政策"], answer: "D", knowledgePoint: "影响人口分布的因素", analysis: "气候、地形、水源、资源等自然因素是影响人口分布的主要因素。" },
      { type: "choice", difficulty: 3, text: "关于人口密度的说法正确的是：", options: ["A. 人口密度=总人口÷总面积", "B. 人口密度越大越好", "C. 人口密度与自然条件无关", "D. 人口密度单位是亿/人"], answer: "A", knowledgePoint: "人口密度计算", analysis: "人口密度=总人口÷面积，单位是人/平方千米。" }
    ]
  },
  {
    lesson: 7, title: "城乡差异：生活方式的地理基础",
    questions: [
      { type: "choice", difficulty: 1, text: "城市和乡村最本质的区别是：", options: ["A. 人口数量", "B. 产业结构", "C. 交通方式", "D. 住房类型"], answer: "B", knowledgePoint: "城乡本质区别", analysis: "城市以非农业经济活动为主，乡村以农业经济活动为主。" },
      { type: "choice", difficulty: 2, text: "关于城乡差异的说法正确的是：", options: ["A. 城市和乡村的产业结构完全相同", "B. 城市以第三产业为主，乡村以第一产业为主", "C. 城乡人口年龄结构相同", "D. 城乡教育水平没有差异"], answer: "B", knowledgePoint: "城乡差异", analysis: "城市经济以第三产业为主，乡村以第一产业为主。" },
      { type: "choice", difficulty: 3, text: "逆城市化现象主要表现为：", options: ["A. 农村人口向城市迁移", "B. 城市人口向郊区迁移", "C. 城市面积扩大", "D. 农村人口减少"], answer: "B", knowledgePoint: "逆城市化", analysis: "逆城市化是城市人口向周边小城镇或农村迁移的现象。" }
    ]
  },
  {
    lesson: 8, title: "土地利用类型与变化",
    questions: [
      { type: "choice", difficulty: 1, text: "农业用地主要指：", options: ["A. 工业用地", "B. 耕地、园地、林地、草地", "C. 商业用地", "D. 交通用地"], answer: "B", knowledgePoint: "农业用地类型", analysis: "农业用地包括耕地、园地、林地、草地等。" },
      { type: "choice", difficulty: 2, text: "城市扩张导致的主要问题是：", options: ["A. 耕地增加", "B. 农田流失", "C. 人口减少", "D. 环境改善"], answer: "B", knowledgePoint: "城市扩张影响", analysis: "城市扩张会占用大量耕地，导致农田流失。" },
      { type: "choice", difficulty: 3, text: "关于土地利用变化的驱动力，说法正确的是：", options: ["A. 只有自然因素", "B. 只有人为因素", "C. 自然因素和人为因素共同作用", "D. 土地利用不会变化"], answer: "C", knowledgePoint: "土地利用变化驱动力", analysis: "土地利用变化是自然因素和人为因素共同作用的结果。" }
    ]
  },
  {
    lesson: 9, title: "经济活动的分布",
    questions: [
      { type: "choice", difficulty: 1, text: "第一产业是指：", options: ["A. 工业", "B. 农业", "C. 服务业", "D. 建筑业"], answer: "B", knowledgePoint: "产业分类", analysis: "第一产业指农业（包括种植业、林业、牧业、渔业）。" },
      { type: "choice", difficulty: 2, text: "发展中国家与发达国家相比：", options: ["A. 第一产业比重低", "B. 第三产业比重高", "C. 第一产业比重大", "D. 经济结构相同"], answer: "C", knowledgePoint: "产业结构差异", analysis: "发展中国家第一产业比重大，发达国家第三产业比重大。" },
      { type: "choice", difficulty: 3, text: "跨国公司选址考虑的主要因素是：", options: ["A. 优惠政策", "B. 劳动力成本和市场", "C. 环境保护", "D. 社会稳定"], answer: "B", knowledgePoint: "跨国公司区位选择", analysis: "跨国公司选址主要考虑劳动力成本、原料供应和市场接近性。" }
    ]
  },
  {
    lesson: 10, title: "地图阅读与比例尺",
    questions: [
      { type: "choice", difficulty: 1, text: "地图的三要素不包括：", options: ["A. 比例尺", "B. 方向", "C. 图例", "D. 颜色"], answer: "D", knowledgePoint: "地图三要素", analysis: "地图的三要素是比例尺、方向和图例。" },
      { type: "choice", difficulty: 2, text: "比例尺1:5000与1:50000相比：", options: ["A. 1:5000表示范围更大", "B. 1:50000表示范围更大", "C. 两者表示范围相同", "D. 无法比较"], answer: "B", knowledgePoint: "比例尺大小比较", analysis: "比例尺1:50000的分母更大，表示的实际范围更大，内容更简略。" },
      { type: "choice", difficulty: 3, text: "有经纬网的地图判断方向的方法是：", options: ["A. 上北下南左西右东", "B. 经线指示南北，纬线指示东西", "C. 指向标指向北", "D. 无法判断"], answer: "B", knowledgePoint: "经纬网定向", analysis: "经纬网地图上，经线指示南北方向，纬线指示东西方向。" }
    ]
  },

  // ════════════════════════════════════════
  // 第3章 气候与生态（第2年·KS3）
  // ════════════════════════════════════════
  {
    lesson: 11, title: "气候带划分：纬度与洋流的作用",
    questions: [
      { type: "choice", difficulty: 1, text: "热带地区气温高的主要原因是：", options: ["A. 海拔低", "B. 纬度低，太阳辐射强", "C. 距海远", "D. 人口密集"], answer: "B", knowledgePoint: "纬度与气候", analysis: "纬度越低，太阳高度角越大，获得的太阳辐射越多，气温越高。" },
      { type: "choice", difficulty: 2, text: "受北大西洋暖流影响显著的地区是：", options: ["A. 东南亚", "B. 北美东海岸", "C. 欧洲西部", "D. 非洲西部"], answer: "C", knowledgePoint: "洋流对气候的影响", analysis: "北大西洋暖流使欧洲西部比同纬度地区温暖湿润。" },
      { type: "choice", difficulty: 3, text: "关于气压带风带的说法正确的是：", options: ["A. 赤道地区盛行东北信风", "B. 副热带高气压带盛行下沉气流", "C. 极地地区气温高气压低", "D. 信风一定带来降水"], answer: "B", knowledgePoint: "气压带风带", analysis: "赤道地区盛行上升气流形成赤道低气压带，副热带高气压带盛行下沉气流。" }
    ]
  },
  {
    lesson: 12, title: "季风系统：降水的季节变化",
    questions: [
      { type: "choice", difficulty: 1, text: "亚洲季风形成的主要原因是：", options: ["A. 地球自转", "B. 海陆热力性质差异", "C. 太阳黑子", "D. 板块运动"], answer: "B", knowledgePoint: "季风成因", analysis: "亚洲季风主要由海陆热力性质差异导致的海陆气压季节变化形成。" },
      { type: "choice", difficulty: 2, text: "南亚季风夏季盛行：", options: ["A. 东北季风", "B. 西南季风", "C. 西北季风", "D. 东南季风"], answer: "B", knowledgePoint: "南亚季风", analysis: "南亚夏季盛行西南季风，从印度洋吹向陆地，带来丰沛降水。" },
      { type: "choice", difficulty: 3, text: "季风气候的特点是：", options: ["A. 全年降水均匀", "B. 夏季多雨冬季少雨", "C. 全年干旱", "D. 全年多雨"], answer: "B", knowledgePoint: "季风气候特征", analysis: "季风气候的特点是夏季受夏季风影响多雨，冬季受冬季风影响少雨。" }
    ]
  },
  {
    lesson: 13, title: "热带雨林：最高效的生态系统",
    questions: [
      { type: "choice", difficulty: 1, text: "热带雨林主要分布在：", options: ["A. 撒哈拉沙漠", "B. 南极大陆", "C. 南美洲亚马逊平原", "D. 西伯利亚"], answer: "C", knowledgePoint: "热带雨林分布", analysis: "热带雨林主要分布在赤道附近的亚马逊平原、东南亚和刚果盆地。" },
      { type: "choice", difficulty: 2, text: "热带雨林被誉为\"地球之肺\"的主要原因是：", options: ["A. 位于赤道", "B. 产生大量氧气", "C. 动物种类多", "D. 降水丰富"], answer: "B", knowledgePoint: "热带雨林作用", analysis: "热带雨林光合作用强，产生大量氧气，被称为\"地球之肺\"。" },
      { type: "choice", difficulty: 3, text: "热带雨林面临的主要威胁是：", options: ["A. 冰川融化", "B. 砍伐和焚烧", "C. 地震", "D. 寒潮"], answer: "B", knowledgePoint: "热带雨林保护", analysis: "热带雨林面临的主要威胁是砍伐、焚烧用于农业和畜牧业开发。" }
    ]
  },
  {
    lesson: 14, title: "荒漠：极端环境的适应",
    questions: [
      { type: "choice", difficulty: 1, text: "世界上最大的沙漠是：", options: ["A. 塔克拉玛干沙漠", "B. 撒哈拉沙漠", "C. 阿拉伯沙漠", "D. 纳米布沙漠"], answer: "B", knowledgePoint: "世界沙漠分布", analysis: "撒哈拉沙漠是世界上最大的沙漠，位于非洲北部。" },
      { type: "choice", difficulty: 2, text: "热带沙漠气候的特点是：", options: ["A. 全年高温多雨", "B. 全年高温少雨", "C. 夏季多雨冬季少雨", "D. 全年温和湿润"], answer: "B", knowledgePoint: "热带沙漠气候", analysis: "热带沙漠气候全年高温少雨，蒸发量大于降水量。" },
      { type: "choice", difficulty: 3, text: "仙人掌适应沙漠环境的特征不包括：", options: ["A. 叶片变成刺", "B. 根系发达", "C. 储水能力强", "D. 需要大量水分"], answer: "D", knowledgePoint: "荒漠植物适应", analysis: "仙人掌叶片变成刺减少蒸腾，根系发达，茎储水能力强，适应干旱环境。" }
    ]
  },
  {
    lesson: 15, title: "气候变化的证据与机制",
    questions: [
      { type: "choice", difficulty: 1, text: "温室效应增强会导致：", options: ["A. 全球变冷", "B. 全球变暖", "C. 冰川增加", "D. 海平面下降"], answer: "B", knowledgePoint: "温室效应", analysis: "温室气体增多导致更多热量留在大气中，引起全球变暖。" },
      { type: "choice", difficulty: 2, text: "全球气候变暖的主要原因之一是：", options: ["A. 植树造林", "B. 燃烧化石燃料排放CO₂", "C. 使用清洁能源", "D. 发展有机农业"], answer: "B", knowledgePoint: "气候变化原因", analysis: "燃烧化石燃料排放大量二氧化碳，是导致全球变暖的主要原因。" },
      { type: "choice", difficulty: 3, text: "气候变化可能导致的后果不包括：", options: ["A. 海平面上升", "B. 冰川融化", "C. 物种增加", "D. 极端天气增多"], answer: "C", knowledgePoint: "气候变化影响", analysis: "气候变化会导致海平面上升、冰川融化、极端天气增多，部分物种可能灭绝。" }
    ]
  },

  // ════════════════════════════════════════
  // 第4章 城市地理（第2年·KS3）
  // ════════════════════════════════════════
  {
    lesson: 16, title: "城市化进程：工业化与人口迁移",
    questions: [
      { type: "choice", difficulty: 1, text: "城市化的标志是：", options: ["A. 城市面积扩大", "B. 城市人口比重上升", "C. 城市数量增加", "D. 农村人口减少"], answer: "B", knowledgePoint: "城市化标志", analysis: "城市化最主要的标志是城市人口占总人口的比重不断上升。" },
      { type: "choice", difficulty: 2, text: "发展中国家城市化进程的特点是：", options: ["A. 起步早，速度慢", "B. 起步晚，速度快", "C. 与经济发展同步", "D. 城市化水平高"], answer: "B", knowledgePoint: "发展中国家城市化", analysis: "发展中国家城市化起步晚，但近年来速度很快。" },
      { type: "choice", difficulty: 3, text: "\"推拉理论\"中，农村的推力是指：", options: ["A. 更好的就业机会", "B. 收入更高", "C. 收入低、就业难、贫困", "D. 城市设施完善"], answer: "C", knowledgePoint: "推拉理论", analysis: "农村的推力包括收入低、就业难、自然灾害等促使人口外流的因素。" }
    ]
  },
  {
    lesson: 17, title: "城市内部土地利用模型",
    questions: [
      { type: "choice", difficulty: 1, text: "城市中心最可能分布的功能区是：", options: ["A. 住宅区", "B. 商业区", "C. 工业区", "D. 文教区"], answer: "B", knowledgePoint: "城市功能分区", analysis: "商业区往往位于城市中心，地价最高。" },
      { type: "choice", difficulty: 2, text: "同心圆模型的中心是：", options: ["A. 住宅区", "B. 商业区（CBD）", "C. 工业区", "D. 过渡带"], answer: "B", knowledgePoint: "同心圆模型", analysis: "同心圆模型由内向外依次是中心商业区（CBD）、过渡带、工人住宅区、中产阶级住宅区、通勤带。" },
      { type: "choice", difficulty: 3, text: "关于扇形模型的说法正确的是：", options: ["A. 城市呈圆形发展", "B. 城市沿交通线呈扇形扩展", "C. 各方向均匀发展", "D. 城市功能区随机分布"], answer: "B", knowledgePoint: "扇形模型", analysis: "扇形模型认为城市沿交通线或自然屏障呈扇形向外扩展。" }
    ]
  },
  {
    lesson: 18, title: "逆城市化：为何人口向郊区迁移",
    questions: [
      { type: "choice", difficulty: 1, text: "逆城市化现象表现为：", options: ["A. 人口从农村向城市迁移", "B. 人口从城市向小城镇或农村迁移", "C. 城市面积不变", "D. 城市化水平提高"], answer: "B", knowledgePoint: "逆城市化", analysis: "逆城市化是城市人口向周边小城镇或农村迁移的现象。" },
      { type: "choice", difficulty: 2, text: "人们迁往郊区的主要原因不包括：", options: ["A. 住房价格低", "B. 环境质量好", "C. 交通拥堵", "D. 就业机会多"], answer: "D", knowledgePoint: "逆城市化原因", analysis: "郊区住房价格低、环境好，但就业机会通常不如城市多。" },
      { type: "choice", difficulty: 3, text: "逆城市化带来的问题主要是：", options: ["A. 城市空心化", "B. 交通更加便利", "C. 环境改善", "D. 基础设施充分利用"], answer: "A", knowledgePoint: "逆城市化影响", analysis: "逆城市化可能导致城市中心空心化，基础设施利用率下降。" }
    ]
  },
  {
    lesson: 19, title: "发展中国家的城市问题：贫民窟",
    questions: [
      { type: "choice", difficulty: 1, text: "贫民窟形成的主要原因不包括：", options: ["A. 农村人口大量涌入城市", "B. 城市住房供应不足", "C. 政府提供充足住房", "D. 贫困人口无力购房"], answer: "C", knowledgePoint: "贫民窟成因", analysis: "贫民窟形成的主要原因是农村人口涌入、城市住房供应不足、贫困人口无力购房。" },
      { type: "choice", difficulty: 2, text: "贫民窟面临的主要问题不包括：", options: ["A. 住房条件差", "B. 就业机会充足", "C. 缺乏基本卫生设施", "D. 犯罪率高"], answer: "B", knowledgePoint: "贫民窟问题", analysis: "贫民窟面临住房条件差、缺乏卫生设施、教育资源不足、犯罪率高等问题。" },
      { type: "choice", difficulty: 3, text: "解决贫民窟问题的措施不包括：", options: ["A. 增加住房供应", "B. 提供就业培训", "C. 强制拆除不安置", "D. 改善基础设施"], answer: "C", knowledgePoint: "贫民窟治理", analysis: "解决贫民窟问题需要综合措施，不能简单强制拆除而不提供安置。" }
    ]
  },
  {
    lesson: 20, title: "城市可持续发展案例",
    questions: [
      { type: "choice", difficulty: 1, text: "可持续城市的特点不包括：", options: ["A. 经济发达", "B. 环境优美", "C. 社会和谐", "D. 资源浪费"], answer: "D", knowledgePoint: "可持续城市特征", analysis: "可持续城市要求经济、社会、环境协调发展，资源合理利用。" },
      { type: "choice", difficulty: 2, text: "绿色建筑的主要特点是：", options: ["A. 外观绿色", "B. 节能、环保、资源循环利用", "C. 建筑材料便宜", "D. 建设速度快"], answer: "B", knowledgePoint: "绿色建筑", analysis: "绿色建筑强调节能、环保、资源循环利用，减少对环境的负面影响。" },
      { type: "choice", difficulty: 3, text: "关于城市可持续发展的说法正确的是：", options: ["A. 发展经济可以牺牲环境", "B. 环境保护不利于经济发展", "C. 经济、社会、环境应协调发展", "D. 可持续发展只是发达国家的任务"], answer: "C", knowledgePoint: "可持续发展理念", analysis: "可持续发展强调经济、社会、环境三个维度的协调统一发展。" }
    ]
  },

  // ════════════════════════════════════════
  // 第5章 全球化（第3年·KS3）
  // ════════════════════════════════════════
  {
    lesson: 21, title: "贸易网络：货物如何绕地球流动",
    questions: [
      { type: "choice", difficulty: 1, text: "国际贸易是指：", options: ["A. 一个国家内部的商品买卖", "B. 各国之间的商品买卖", "C. 地区之间的商品买卖", "D. 家庭之间的商品交换"], answer: "B", knowledgePoint: "国际贸易概念", analysis: "国际贸易是指世界各国（或地区）之间进行的商品交换活动。" },
      { type: "choice", difficulty: 2, text: "集装箱运输发展的主要意义是：", options: ["A. 增加货物种类", "B. 提高运输效率，降低成本", "C. 减少港口数量", "D. 增加海洋污染"], answer: "B", knowledgePoint: "集装箱运输", analysis: "集装箱运输标准化程度高，便于装卸，大大提高了运输效率并降低了成本。" },
      { type: "choice", difficulty: 3, text: "全球贸易格局变化的主要趋势是：", options: ["A. 发达国家主导", "B. 新兴经济体比重上升", "C. 贸易量减少", "D. 区域化消失"], answer: "B", knowledgePoint: "贸易格局变化", analysis: "近年来，中国等新兴经济体在全球贸易中的比重不断上升。" }
    ]
  },
  {
    lesson: 22, title: "跨国公司：全球工厂在哪里",
    questions: [
      { type: "choice", difficulty: 1, text: "跨国公司是指：", options: ["A. 只在一个国家经营的企业", "B. 在多个国家进行投资和经营的企业", "C. 国有企业", "D. 小微企业"], answer: "B", knowledgePoint: "跨国公司定义", analysis: "跨国公司是在多个国家进行投资和生产经营活动的大型企业。" },
      { type: "choice", difficulty: 2, text: "跨国公司将工厂转移到发展中国家的主要目的是：", options: ["A. 环境保护", "B. 降低劳动力成本", "C. 技术转让", "D. 援助发展中国家"], answer: "B", knowledgePoint: "跨国公司动机", analysis: "跨国公司转移工厂主要是为了利用发展中国家廉价的劳动力，降低成本。" },
      { type: "choice", difficulty: 3, text: "跨国公司对东道国的影响不包括：", options: ["A. 增加就业", "B. 技术引进", "C. 带来环境污染", "D. 完全消除贫困"], answer: "D", knowledgePoint: "跨国公司影响", analysis: "跨国公司可能带来就业、技术，但也可能造成环境污染，不能完全消除贫困。" }
    ]
  },
  {
    lesson: 23, title: "旅游业的双刃剑：收入与破坏",
    questions: [
      { type: "choice", difficulty: 1, text: "旅游业对经济的主要贡献是：", options: ["A. 增加外汇收入", "B. 减少人口流动", "C. 保护文化遗产", "D. 增加就业只是副作用"], answer: "A", knowledgePoint: "旅游业经济贡献", analysis: "旅游业可以增加外汇收入，促进经济发展，提供就业机会。" },
      { type: "choice", difficulty: 2, text: "旅游业对环境可能造成的负面影响不包括：", options: ["A. 生态破坏", "B. 污染加剧", "C. 提高游客素质", "D. 自然资源过度消耗"], answer: "C", knowledgePoint: "旅游业环境问题", analysis: "旅游业可能导致生态破坏、污染加剧、资源过度消耗等问题。" },
      { type: "choice", difficulty: 3, text: "可持续旅游发展的措施不包括：", options: ["A. 限制游客数量", "B. 加强环境教育", "C. 建设大型酒店群", "D. 保护文化遗产"], answer: "C", knowledgePoint: "可持续旅游", analysis: "可持续旅游强调环境保护和文化遗产保护，而不是大规模开发。" }
    ]
  },
  {
    lesson: 24, title: "文化全球化：本土文化的应对",
    questions: [
      { type: "choice", difficulty: 1, text: "文化全球化的表现不包括：", options: ["A. 快餐文化传播", "B. 各国文化保持完全独立", "C. 国际电影节", "D. 跨国社交媒体"], answer: "B", knowledgePoint: "文化全球化", analysis: "文化全球化表现为不同文化之间的交流与传播，各国文化相互影响。" },
      { type: "choice", difficulty: 2, text: "文化同质化是指：", options: ["A. 文化多样性增加", "B. 各民族文化趋于相同", "C. 传统文化得到保护", "D. 新文化不断产生"], answer: "B", knowledgePoint: "文化同质化", analysis: "文化同质化是指不同地区的文化逐渐变得相似。" },
      { type: "choice", difficulty: 3, text: "面对文化全球化，本土文化应该：", options: ["A. 完全抵制外来文化", "B. 全盘接受外来文化", "C. 取其精华、去其糟粕", "D. 保持不变"], answer: "C", knowledgePoint: "文化保护策略", analysis: "面对文化全球化，应该在吸收外来优秀文化的同时，保护和传承本土优秀传统文化。" }
    ]
  },
  {
    lesson: 25, title: "全球发展不平等：中心与外围",
    questions: [
      { type: "choice", difficulty: 1, text: "\"南北差异\"中的\"南\"是指：", options: ["A. 南半球国家", "B. 发展中国家", "C. 南半球发达国家", "D. 南方国家"], answer: "B", knowledgePoint: "南北差异", analysis: "\"南北差异\"中，北方指发达国家，南方指发展中国家。" },
      { type: "choice", difficulty: 2, text: "发达国家与发展中国家之间存在的发展差距主要表现在：", options: ["A. 只有经济差距", "B. 经济、教育、科技、医疗等多方面差距", "C. 没有差距", "D. 发展中国家更发达"], answer: "B", knowledgePoint: "发展差距表现", analysis: "发展差距表现在经济、教育、科技、医疗、社会保障等多个方面。" },
      { type: "choice", difficulty: 3, text: "缩小南北差距的措施不包括：", options: ["A. 加强国际合作", "B. 发达国家向发展中国家转移污染产业", "C. 增加对发展中国家的援助", "D. 促进公平贸易"], answer: "B", knowledgePoint: "缩小差距措施", analysis: "缩小南北差距需要加强合作、增加援助、促进公平贸易，而不是转移污染产业。" }
    ]
  },

  // ════════════════════════════════════════
  // 第6章 自然灾害（第3年·KS3）
  // ════════════════════════════════════════
  {
    lesson: 26, title: "热带气旋：能量来自温暖的海洋",
    questions: [
      { type: "choice", difficulty: 1, text: "热带气旋形成的必要条件不包括：", options: ["A. 广阔的热带洋面", "B. 足够的地转偏向力", "C. 低气压", "D. 干燥的空气"], answer: "D", knowledgePoint: "热带气旋形成条件", analysis: "热带气旋形成需要广阔的热带洋面、足够的地转偏向力和初始扰动。" },
      { type: "choice", difficulty: 2, text: "台风和飓风的区别主要是：", options: ["A. 风力大小不同", "B. 发生海域不同", "C. 名称不同，本质相同", "D. 影响范围不同"], answer: "C", knowledgePoint: "台风与飓风", analysis: "台风和飓风都是热带气旋，只是发生的海域不同，名称不同。" },
      { type: "choice", difficulty: 3, text: "热带气旋带来灾害的主要原因是：", options: ["A. 强风、暴雨、风暴潮", "B. 只有强风", "C. 只有低温", "D. 只有海啸"], answer: "A", knowledgePoint: "热带气旋灾害", analysis: "热带气旋灾害主要由强风、暴雨和风暴潮造成。" }
    ]
  },
  {
    lesson: 27, title: "洪水：成因、影响与管理",
    questions: [
      { type: "choice", difficulty: 1, text: "洪水形成的主要原因不包括：", options: ["A. 连续性强降雨", "B. 冰雪融化", "C. 长时间干旱", "D. 河道堵塞"], answer: "C", knowledgePoint: "洪水成因", analysis: "洪水主要由连续性强降雨、冰雪融化、堤坝决口等原因造成。" },
      { type: "choice", difficulty: 2, text: "洪水可能带来的影响不包括：", options: ["A. 人员伤亡和财产损失", "B. 农田被毁", "C. 传染病传播", "D. 永久增加耕地"], answer: "D", knowledgePoint: "洪水影响", analysis: "洪水会造成人员伤亡、财产损失、农作物受损，洪水过后可能留下淤泥，但不一定增加耕地。" },
      { type: "choice", difficulty: 3, text: "防洪措施中的\"软措施\"是指：", options: ["A. 建设大坝", "B. 加固堤防", "C. 恢复湿地、分洪道", "D. 拦截洪水"], answer: "C", knowledgePoint: "防洪软硬措施", analysis: "防洪\"软措施\"包括恢复湿地、建立分洪道等，\"硬措施\"包括建设大坝、加固堤防。" }
    ]
  },
  {
    lesson: 28, title: "地震防灾：为何同震级损失不同",
    questions: [
      { type: "choice", difficulty: 1, text: "地震造成人员伤亡的主要原因是：", options: ["A. 建筑物倒塌", "B. 地面裂缝", "C. 火山喷发", "D. 气候异常"], answer: "A", knowledgePoint: "地震伤亡原因", analysis: "地震造成人员伤亡的主要原因是建筑物倒塌和次生灾害。" },
      { type: "choice", difficulty: 2, text: "提高建筑抗震能力的主要措施是：", options: ["A. 使用轻质材料", "B. 采用抗震设计", "C. 减少层数", "D. 降低建筑成本"], answer: "B", knowledgePoint: "抗震措施", analysis: "建筑抗震设计包括使用钢筋混凝土框架、圈梁构造柱等，提高抗震能力。" },
      { type: "choice", difficulty: 3, text: "同样震级的地震在不同地区损失不同的原因是：", options: ["A. 地震发生时间不同", "B. 震源深度、建筑质量、人口密度、应急能力不同", "C. 地震类型不同", "D. 纬度不同"], answer: "B", knowledgePoint: "地震损失差异", analysis: "地震损失与震源深度、建筑质量、人口密度、应急响应能力等因素有关。" }
    ]
  },
  {
    lesson: 29, title: "人类与灾害风险：脆弱性的地理",
    questions: [
      { type: "choice", difficulty: 1, text: "灾害风险公式\"风险=危险×脆弱性÷应对能力\"说明：", options: ["A. 危险越大，风险越小", "B. 脆弱性越大，风险越大", "C. 应对能力越大，风险越大", "D. 三者无关"], answer: "B", knowledgePoint: "灾害风险概念", analysis: "灾害风险与危险性和脆弱性成正比，与应对能力成反比。" },
      { type: "choice", difficulty: 2, text: "影响区域脆弱性的因素不包括：", options: ["A. 经济发展水平", "B. 人口密度", "C. 自然条件", "D. 距离赤道远近"], answer: "D", knowledgePoint: "脆弱性因素", analysis: "经济发展水平低、基础设施差、人口密度大的地区脆弱性更高。" },
      { type: "choice", difficulty: 3, text: "降低脆弱性的措施不包括：", options: ["A. 提高建筑质量", "B. 加强预警系统", "C. 在高风险区大量建设", "D. 提高公众防灾意识"], answer: "C", knowledgePoint: "降低脆弱性", analysis: "降低脆弱性应提高建筑质量、加强预警、提高公众意识，不应在高风险区大规模建设。" }
    ]
  },
  {
    lesson: 30, title: "灾后重建：海地与日本的对比",
    questions: [
      { type: "choice", difficulty: 1, text: "灾后重建的第一步通常是：", options: ["A. 经济建设", "B. 救援和安置灾民", "C. 修建道路", "D. 旅游开发"], answer: "B", knowledgePoint: "灾后重建步骤", analysis: "灾后重建首先要救援被困人员，安置灾民，保障基本生活。" },
      { type: "choice", difficulty: 2, text: "日本灾后重建相对较快的优势不包括：", options: ["A. 经济发达", "B. 建筑质量高", "C. 国际援助充足", "D. 防灾意识强"], answer: "C", knowledgePoint: "日本灾后重建", analysis: "日本灾后重建快主要靠自身经济实力和防灾能力，国际援助有限。" },
      { type: "choice", difficulty: 3, text: "灾后重建中需要考虑的因素不包括：", options: ["A. 气候条件", "B. 土地利用规划", "C. 风险评估", "D. 完全不考虑原有社区结构"], answer: "D", knowledgePoint: "灾后重建考虑因素", analysis: "灾后重建应考虑气候、土地利用、风险评估，同时要尊重原有社区结构。" }
    ]
  },

  // ════════════════════════════════════════
  // 第7章 物理地貌（第4年·GCSE）
  // ════════════════════════════════════════
  {
    lesson: 31, title: "冰川作用：U形谷与冰碛物",
    questions: [
      { type: "choice", difficulty: 1, text: "冰川侵蚀形成的地貌是：", options: ["A. 沙丘", "B. U形谷", "C. 三角洲", "D. 风蚀蘑菇"], answer: "B", knowledgePoint: "冰川侵蚀地貌", analysis: "冰川侵蚀形成U形谷、冰斗、角峰等地貌。" },
      { type: "choice", difficulty: 2, text: "冰川堆积物称为：", options: ["A. 冲积物", "B. 冰碛物", "C. 风积物", "D. 海积物"], answer: "B", knowledgePoint: "冰川堆积物", analysis: "冰川堆积物称为冰碛物，包括终碛堤、侧碛堤等。" },
      { type: "choice", difficulty: 3, text: "关于冰川作用的说法正确的是：", options: ["A. 冰川只有侵蚀作用", "B. 冰川只有堆积作用", "C. 冰川既有侵蚀也有堆积作用", "D. 冰川不影响地形"], answer: "C", knowledgePoint: "冰川作用类型", analysis: "冰川既有侵蚀作用（刨蚀、磨蚀），也有堆积作用（冰碛物）。" }
    ]
  },
  {
    lesson: 32, title: "风成地貌：沙漠中的风的雕塑",
    questions: [
      { type: "choice", difficulty: 1, text: "风蚀作用形成的地貌不包括：", options: ["A. 风蚀蘑菇", "B. 沙丘", "C. 雅丹地貌", "D. 风蚀洼地"], answer: "B", knowledgePoint: "风蚀地貌", analysis: "风蚀蘑菇、雅丹地貌是风蚀作用形成，沙丘是风积地貌。" },
      { type: "choice", difficulty: 2, text: "新月形沙丘的凸出方向指示：", options: ["A. 风吹来的方向", "B. 风吹去的方向", "C. 与风向无关", "D. 河流流向"], answer: "B", knowledgePoint: "新月形沙丘", analysis: "新月形沙丘凸出方向指向风吹去的方向。" },
      { type: "choice", difficulty: 3, text: "沙漠化的成因主要是：", options: ["A. 气候变化", "B. 人类活动破坏植被", "C. 风力太强", "D. 降水量太少"], answer: "B", knowledgePoint: "沙漠化成因", analysis: "沙漠化的主要成因是人类活动破坏植被，导致土地退化。" }
    ]
  },
  {
    lesson: 33, title: "喀斯特地貌：石灰岩的溶蚀",
    questions: [
      { type: "choice", difficulty: 1, text: "喀斯特地貌主要发育在：", options: ["A. 花岗岩地区", "B. 玄武岩地区", "C. 石灰岩地区", "D. 砂岩地区"], answer: "C", knowledgePoint: "喀斯特地貌分布", analysis: "喀斯特地貌主要发育在可溶性岩石（石灰岩）分布区。" },
      { type: "choice", difficulty: 2, text: "喀斯特地貌的特点不包括：", options: ["A. 地下溶洞发育", "B. 地面塌陷", "C. 地表水丰富", "D. 峰林、峰丛发育"], answer: "C", knowledgePoint: "喀斯特地貌特征", analysis: "喀斯特地区地表水容易渗入地下，地下水资源丰富，地表水相对缺乏。" },
      { type: "choice", difficulty: 3, text: "喀斯特地貌区农业发展的限制因素主要是：", options: ["A. 光照不足", "B. 土层薄、水分容易渗漏", "C. 气温低", "D. 人口少"], answer: "B", knowledgePoint: "喀斯特区农业", analysis: "喀斯特地貌区土层薄、土壤贫瘠、地表水容易渗漏，对农业发展不利。" }
    ]
  },
  {
    lesson: 34, title: "河流洪泛管理：硬措施与软措施",
    questions: [
      { type: "choice", difficulty: 1, text: "河流防洪的\"硬措施\"不包括：", options: ["A. 建设大坝", "B. 加固堤防", "C. 恢复湿地", "D. 修建分洪道"], answer: "C", knowledgePoint: "防洪硬措施", analysis: "恢复湿地属于防洪\"软措施\"，大坝、堤防、分洪道属于\"硬措施\"。" },
      { type: "choice", difficulty: 2, text: "洪泛湿地恢复的作用是：", options: ["A. 减少洪水", "B. 蓄洪、分洪、削峰", "C. 增加耕地", "D. 提高地价"], answer: "B", knowledgePoint: "湿地防洪功能", analysis: "洪泛湿地可以蓄洪、分洪，减轻洪水对下游的压力。" },
      { type: "choice", difficulty: 3, text: "关于防洪措施的说法正确的是：", options: ["A. 硬措施一定比软措施好", "B. 软硬结合效果最佳", "C. 软措施没有作用", "D. 只需要一种措施"], answer: "B", knowledgePoint: "防洪策略", analysis: "防洪应采取硬措施和软措施相结合的综合策略。" }
    ]
  },
  {
    lesson: 35, title: "海岸侵蚀与防护：悬崖后退",
    questions: [
      { type: "choice", difficulty: 1, text: "海岸侵蚀的主要原因是：", options: ["A. 地震", "B. 波浪和潮汐的侵蚀", "C. 冰川作用", "D. 火山喷发"], answer: "B", knowledgePoint: "海岸侵蚀原因", analysis: "海岸侵蚀主要由海浪、潮汐的冲刷和撞击作用造成。" },
      { type: "choice", difficulty: 2, text: "海蚀崖形成的过程是：", options: ["A. 沉积→堆积", "B. 侵蚀→后退", "C. 抬升→隆起", "D. 下沉→淹没"], answer: "B", knowledgePoint: "海蚀崖形成", analysis: "海浪侵蚀崖壁下部，崖壁失去支撑而坍塌，形成海蚀崖并不断后退。" },
      { type: "choice", difficulty: 3, text: "海岸防护中\"护岸顺坝\"的作用是：", options: ["A. 完全阻止侵蚀", "B. 减弱波浪能量，保护岸线", "C. 加速泥沙沉积", "D. 改变海岸线形状"], answer: "B", knowledgePoint: "海岸防护工程", analysis: "护岸顺坝可以减弱波浪能量，保护岸线免受侵蚀，但不能完全阻止侵蚀。" }
    ]
  },

  // ════════════════════════════════════════
  // 第8章 发展地理（第4年·GCSE）
  // ════════════════════════════════════════
  {
    lesson: 36, title: "发展的测量：GDP与HDI的差异",
    questions: [
      { type: "choice", difficulty: 1, text: "GDP是指：", options: ["A. 一个国家一年内生产的全部最终产品和服务的市场价值", "B. 出口总额", "C. 进口总额", "D. 人口总数"], answer: "A", knowledgePoint: "GDP概念", analysis: "GDP（国内生产总值）是一个国家一年内生产的全部最终产品和服务的市场价值。" },
      { type: "choice", difficulty: 2, text: "HDI指数不包括以下哪个维度：", options: ["A. 健康水平", "B. 教育水平", "C. 军事力量", "D. 生活水平"], answer: "C", knowledgePoint: "HDI构成", analysis: "HDI（人类发展指数）包括健康水平、教育水平和生活水平三个维度。" },
      { type: "choice", difficulty: 3, text: "GDP的局限性不包括：", options: ["A. 不能反映收入分配", "B. 不能反映环境质量", "C. 可以完全反映幸福程度", "D. 不能反映非市场经济活动"], answer: "C", knowledgePoint: "GDP局限", analysis: "GDP不能反映收入分配、环境质量、非市场经济活动，也不能完全反映幸福程度。" }
    ]
  },
  {
    lesson: 37, title: "贫困的成因与贫困陷阱",
    questions: [
      { type: "choice", difficulty: 1, text: "绝对贫困是指：", options: ["A. 收入低于平均数", "B. 无法满足基本生活需求", "C. 收入低于富人", "D. 没有房产"], answer: "B", knowledgePoint: "绝对贫困", analysis: "绝对贫困是指无法满足基本生活需求（食物、衣物、住所）的生活状态。" },
      { type: "choice", difficulty: 2, text: "贫困陷阱是指：", options: ["A. 贫困导致进一步贫困的恶性循环", "B. 富人变穷", "C. 收入平均分配", "D. 所有人变富"], answer: "A", knowledgePoint: "贫困陷阱", analysis: "贫困陷阱是指贫困导致教育不足、健康恶化、生产力低下，进一步加剧贫困的恶性循环。" },
      { type: "choice", difficulty: 3, text: "贫困与环境的关系是：", options: ["A. 贫困有利于环境保护", "B. 贫困导致过度开发环境", "C. 贫困与环境无关", "D. 环境好了自然脱贫"], answer: "B", knowledgePoint: "贫困与环境关系", analysis: "贫困人口往往依赖自然资源生存，过度开发导致环境退化，形成恶性循环。" }
    ]
  },
  {
    lesson: 38, title: "国际援助：援助的逻辑与批评",
    questions: [
      { type: "choice", difficulty: 1, text: "国际援助的主要形式不包括：", options: ["A. 资金援助", "B. 技术援助", "C. 军事援助", "D. 粮食援助"], answer: "C", knowledgePoint: "援助形式", analysis: "国际援助包括资金援助、技术援助、粮食援助、军事援助等形式。" },
      { type: "choice", difficulty: 2, text: "对国际援助的批评不包括：", options: ["A. 援助可能造成依赖", "B. 援助促进经济发展", "C. 援助附加条件损害主权", "D. 援助资金被滥用"], answer: "B", knowledgePoint: "援助批评", analysis: "对援助的批评包括造成依赖、附加条件、腐败等问题，而不是促进经济发展。" },
      { type: "choice", difficulty: 3, text: "有效援助的原则不包括：", options: ["A. 受援国主导", "B. 与当地需求匹配", "C. 强制接受国政策", "D. 注重能力建设"], answer: "C", knowledgePoint: "有效援助", analysis: "有效援助应遵循受援国主导、与需求匹配、注重能力建设等原则，不应强制改变政策。" }
    ]
  },
  {
    lesson: 39, title: "新兴经济体：金砖国家的崛起之路",
    questions: [
      { type: "choice", difficulty: 1, text: "金砖国家不包括：", options: ["A. 巴西", "B. 印度", "C. 日本", "D. 中国"], answer: "C", knowledgePoint: "金砖国家", analysis: "金砖国家包括巴西、俄罗斯、印度、中国、南非，不包括日本。" },
      { type: "choice", difficulty: 2, text: "新兴经济体崛起的共同特点是：", options: ["A. 依赖农业", "B. 经济快速增长，融入全球贸易", "C. 人口老龄化严重", "D. 拒绝全球化"], answer: "B", knowledgePoint: "新兴经济体特点", analysis: "新兴经济体经济快速增长，积极融入全球经济体系。" },
      { type: "choice", difficulty: 3, text: "新兴经济体面临的主要挑战不包括：", options: ["A. 经济结构单一", "B. 贫富差距大", "C. 技术创新能力强", "D. 环境压力"], answer: "C", knowledgePoint: "新兴经济体挑战", analysis: "新兴经济体面临经济结构单一、贫富差距、环境压力等挑战，技术创新能力相对不足。" }
    ]
  },
  {
    lesson: 40, title: "粮食安全：谁在挨饿，为什么",
    questions: [
      { type: "choice", difficulty: 1, text: "粮食安全的含义是：", options: ["A. 所有人都能吃饱", "B. 所有人在任何时候都能获得足够的、安全的、营养的食物", "C. 只有富人有粮食", "D. 粮食产量越高越好"], answer: "B", knowledgePoint: "粮食安全概念", analysis: "粮食安全是指所有人在任何时候都能获得足够的、安全的、营养的食物。" },
      { type: "choice", difficulty: 2, text: "全球粮食不安全的根本原因是：", options: ["A. 粮食总产量不足", "B. 粮食分配不均", "C. 人口太少", "D. 粮食质量太差"], answer: "B", knowledgePoint: "粮食不安全原因", analysis: "全球粮食总产量足够养活所有人，但粮食分配不均导致饥饿问题。" },
      { type: "choice", difficulty: 3, text: "提高粮食安全的措施不包括：", options: ["A. 提高粮食产量", "B. 减少粮食浪费", "C. 破坏农业环境", "D. 公平贸易"], answer: "C", knowledgePoint: "粮食安全措施", analysis: "提高粮食安全需要提高产量、减少浪费、改善分配、保护农业环境。" }
    ]
  },

  // ════════════════════════════════════════
  // 第9章 环境挑战（第5年·GCSE）
  // ════════════════════════════════════════
  {
    lesson: 41, title: "气候变化的影响：不均等的未来",
    questions: [
      { type: "choice", difficulty: 1, text: "气候变化对沿海地区的影响主要是：", options: ["A. 气温下降", "B. 海平面上升", "C. 降水增加", "D. 地震增多"], answer: "B", knowledgePoint: "海平面上升", analysis: "气候变化导致冰川融化和海水热膨胀，引起海平面上升，威胁沿海地区。" },
      { type: "choice", difficulty: 2, text: "气候变化对小岛屿国家的影响是：", options: ["A. 没有影响", "B. 可能被淹没", "C. 更加安全", "D. 农业增产"], answer: "B", knowledgePoint: "小岛屿国家风险", analysis: "海平面上升可能淹没地势低洼的小岛屿国家，如马尔代夫、图瓦卢。" },
      { type: "choice", difficulty: 3, text: "气候变化影响分布不均的主要原因是：", options: ["A. 各国排放量不同", "B. 应对能力差异和地理因素", "C. 纬度相同", "D. 经济发展水平相同"], answer: "B", knowledgePoint: "气候影响不均", analysis: "发展中国家应对能力弱，受气候变化影响更大；沿海、低洼、干旱地区更脆弱。" }
    ]
  },
  {
    lesson: 42, title: "水资源争夺：稀缺与冲突",
    questions: [
      { type: "choice", difficulty: 1, text: "世界水资源分布的特点是：", options: ["A. 分布均匀", "B. 分布不均", "C. 热带最多", "D. 极地最多"], answer: "B", knowledgePoint: "水资源分布", analysis: "世界水资源分布不均，有些地区水资源丰富，有些地区严重缺水。" },
      { type: "choice", difficulty: 2, text: "跨境河流可能引发冲突的原因是：", options: ["A. 水可以无限获取", "B. 上游国家建坝影响下游", "C. 水不需要管理", "D. 各国不需要合作"], answer: "B", knowledgePoint: "跨境河流冲突", analysis: "跨境河流流经多个国家，上游国家建坝可能影响下游国家的水量和水质，引发冲突。" },
      { type: "choice", difficulty: 3, text: "解决跨境水资源争端的措施不包括：", options: ["A. 签订国际协议", "B. 建立流域组织", "C. 武力争夺", "D. 信息共享"], answer: "C", knowledgePoint: "水资源争端解决", analysis: "解决跨境水资源争端应通过谈判、协议、合作，而不是武力争夺。" }
    ]
  },
  {
    lesson: 43, title: "生物多样性丧失的速率与原因",
    questions: [
      { type: "choice", difficulty: 1, text: "当前物种灭绝的速率：", options: ["A. 比自然灭绝速率低", "B. 与自然灭绝速率相同", "C. 比自然灭绝速率高1000倍", "D. 没有变化"], answer: "C", knowledgePoint: "物种灭绝速率", analysis: "科学家估计，当前物种灭绝速率是自然灭绝速率的1000倍。" },
      { type: "choice", difficulty: 2, text: "生物多样性面临的主要威胁不包括：", options: ["A. 栖息地破坏", "B. 气候变化", "C. 新物种产生", "D. 过度捕猎"], answer: "C", knowledgePoint: "生物多样性威胁", analysis: "生物多样性面临栖息地破坏、气候变化、过度捕猎、外来物种入侵等威胁。" },
      { type: "choice", difficulty: 3, text: "保护生物多样性的措施不包括：", options: ["A. 建立自然保护区", "B. 迁地保护", "C. 大规模开发自然", "D. 打击偷猎"], answer: "C", knowledgePoint: "生物多样性保护", analysis: "保护生物多样性需要建立保护区、迁地保护、打击偷猎，而不是大规模开发。" }
    ]
  },
  {
    lesson: 44, title: "能源转型：可再生能源的地理分布",
    questions: [
      { type: "choice", difficulty: 1, text: "不属于可再生能源的是：", options: ["A. 太阳能", "B. 风能", "C. 煤炭", "D. 水能"], answer: "C", knowledgePoint: "可再生能源", analysis: "煤炭、石油、天然气是化石燃料，属于不可再生能源；太阳能、风能、水能属于可再生能源。" },
      { type: "choice", difficulty: 2, text: "太阳能资源最丰富的地区是：", options: ["A. 赤道地区", "B. 副热带高压控制区", "C. 两极地区", "D. 高原地区"], answer: "B", knowledgePoint: "太阳能分布", analysis: "副热带高压控制区晴天多、日照强，太阳能资源丰富，如撒哈拉沙漠地区。" },
      { type: "choice", difficulty: 3, text: "发展可再生能源面临的主要挑战不包括：", options: ["A. 成本较高", "B. 受自然条件限制", "C. 取之不尽用之不竭", "D. 储存困难"], answer: "C", knowledgePoint: "可再生能源挑战", analysis: "可再生能源面临成本、自然条件限制、储存技术等挑战，并非完全无限制可用。" }
    ]
  },
  {
    lesson: 45, title: "可持续发展目标：2030年的承诺",
    questions: [
      { type: "choice", difficulty: 1, text: "联合国可持续发展目标（SDGs）共有：", options: ["A. 8个", "B. 15个", "C. 17个", "D. 20个"], answer: "C", knowledgePoint: "SDGs数量", analysis: "联合国2030年可持续发展议程包含17项可持续发展目标。" },
      { type: "choice", difficulty: 2, text: "SDGs的特点是：", options: ["A. 只关注经济发展", "B. 经济、社会、环境三大维度整合", "C. 只关注环境", "D. 只关注发达国家"], answer: "B", knowledgePoint: " SDGs特点", analysis: "SDGs强调经济、社会、环境三大维度的可持续发展，各目标相互关联。" },
      { type: "choice", difficulty: 3, text: "实现SDGs的关键是：", options: ["A. 各国各自为政", "B. 不需要发展中国家参与", "C. 全球合作与伙伴关系", "D. 只靠发达国家"], answer: "C", knowledgePoint: "SDGs实现路径", analysis: "实现SDGs需要全球合作，建立伙伴关系，各国共同努力。" }
    ]
  },

  // ════════════════════════════════════════
  // 第10章 地理研究方法（第5年·GCSE）
  // ════════════════════════════════════════
  {
    lesson: 46, title: "田野调查设计与实践",
    questions: [
      { type: "choice", difficulty: 1, text: "田野调查的第一步是：", options: ["A. 收集数据", "B. 确定研究问题", "C. 撰写报告", "D. 发放问卷"], answer: "B", knowledgePoint: "田野调查步骤", analysis: "田野调查首先需要确定研究问题，明确调查目的。" },
      { type: "choice", difficulty: 2, text: "问卷调查的优点是：", options: ["A. 可以收集大量数据", "B. 成本很高", "C. 受众有限", "D. 只能面对面进行"], answer: "A", knowledgePoint: "问卷调查优缺点", analysis: "问卷调查可以快速收集大量数据，成本相对较低，但可能存在样本偏差。" },
      { type: "choice", difficulty: 3, text: "田野调查中的伦理考虑不包括：", options: ["A. 获得被调查者同意", "B. 保护隐私", "C. 强制填写问卷", "D. 客观记录数据"], answer: "C", knowledgePoint: "调查伦理", analysis: "田野调查应尊重被调查者意愿，保护隐私，客观记录，不能强制收集数据。" }
    ]
  },
  {
    lesson: 47, title: "GIS应用：空间数据的力量",
    questions: [
      { type: "choice", difficulty: 1, text: "GIS是指：", options: ["A. 全球定位系统", "B. 地理信息系统", "C. 遥感技术", "D. 数字地球"], answer: "B", knowledgePoint: "GIS概念", analysis: "GIS（地理信息系统）用于采集、存储、管理、分析和显示地理数据。" },
      { type: "choice", difficulty: 2, text: "GIS的主要功能不包括：", options: ["A. 空间分析", "B. 属性查询", "C. 天气预报", "D. 制图输出"], answer: "C", knowledgePoint: "GIS功能", analysis: "GIS主要用于空间分析、属性查询、制图输出等，天气预报不属于GIS的主要功能。" },
      { type: "choice", difficulty: 3, text: "GIS在城市规划中的应用是：", options: ["A. 只能做地图", "B. 分析交通流量、选址、优化路线", "C. 预测地震", "D. 测量海拔"], answer: "B", knowledgePoint: "GIS应用", analysis: "GIS可以分析交通流量、进行设施选址、优化应急路线等城市规划工作。" }
    ]
  },
  {
    lesson: 48, title: "数据统计与图表呈现",
    questions: [
      { type: "choice", difficulty: 1, text: "表示气温变化趋势最合适的图表是：", options: ["A. 柱状图", "B. 折线图", "C. 饼图", "D. 散点图"], answer: "B", knowledgePoint: "图表选择", analysis: "折线图适合表示数据随时间变化的趋势。" },
      { type: "choice", difficulty: 2, text: "表示各类土地利用比例最合适的图表是：", options: ["A. 折线图", "B. 饼图", "C. 散点图", "D. 流程图"], answer: "B", knowledgePoint: "图表选择", analysis: "饼图适合表示各部分占总体的比例关系。" },
      { type: "choice", difficulty: 3, text: "关于统计数据的说法正确的是：", options: ["A. 平均数可以完全反映数据分布", "B. 相关性意味着因果关系", "C. 需要注意数据的来源和可靠性", "D. 图表一定准确反映数据"], answer: "C", knowledgePoint: "数据解读", analysis: "解读数据要注意数据来源、样本代表性，平均数可能受极端值影响，相关性不等于因果关系。" }
    ]
  },
  {
    lesson: 49, title: "地理信息的批判性解读",
    questions: [
      { type: "choice", difficulty: 1, text: "评估信息来源可靠性的第一步是：", options: ["A. 直接使用", "B. 检查来源和作者", "C. 忽略来源", "D. 只相信官方数据"], answer: "B", knowledgePoint: "信息来源评估", analysis: "评估信息可靠性首先要检查来源、作者、发布时间等基本信息。" },
      { type: "choice", difficulty: 2, text: "地图可能存在的偏差不包括：", options: ["A. 投影变形", "B. 比例尺误差", "C. 绝对客观无偏差", "D. 选择性表示"], answer: "C", knowledgePoint: "地图偏差", analysis: "所有地图都存在某种偏差，包括投影变形、选择性表示等，没有绝对客观的地图。" },
      { type: "choice", difficulty: 3, text: "批判性思维在地理学习中的作用是：", options: ["A. 不需要批判性思维", "B. 质疑信息，多角度思考", "C. 只接受主流观点", "D. 避免独立思考"], answer: "B", knowledgePoint: "批判性思维", analysis: "批判性思维要求质疑信息来源，从多角度分析地理问题，不盲从。" }
    ]
  },
  {
    lesson: 50, title: "GCSE综合复习",
    questions: [
      { type: "choice", difficulty: 1, text: "GCSE地理考试中，读图时第一步应该：", options: ["A. 直接看问题", "B. 看图名、图例和注记", "C. 猜测答案", "D. 跳过读图"], answer: "B", knowledgePoint: "读图方法", analysis: "读图时首先要看图名、图例和注记，了解地图的基本信息。" },
      { type: "choice", difficulty: 2, text: "综合题答题时应：", options: ["A. 越简洁越好", "B. 分点回答，条理清晰", "C. 只写结论", "D. 越详细越好"], answer: "B", knowledgePoint: "答题技巧", analysis: "综合题答题要分点回答，使用地理术语，条理清晰。" },
      { type: "choice", difficulty: 3, text: "开放性试题的答题要求是：", options: ["A. 可以随意回答", "B. 不需要结合知识", "C. 言之有理，联系材料", "D. 只有唯一答案"], answer: "C", knowledgePoint: "开放题答题", analysis: "开放性试题需要结合所学知识，联系材料，言之有理即可，没有唯一答案。" }
    ]
  },

  // ════════════════════════════════════════
  // 第11章 地球系统科学（第6年·A-Level）
  // ════════════════════════════════════════
  {
    lesson: 51, title: "大气层化学：温室气体的机制",
    questions: [
      { type: "choice", difficulty: 1, text: "主要的温室气体不包括：", options: ["A. 二氧化碳", "B. 甲烷", "C. 氧气", "D. 水汽"], answer: "C", knowledgePoint: "温室气体", analysis: "主要的温室气体包括二氧化碳、甲烷、水汽、臭氧等，氧气不是温室气体。" },
      { type: "choice", difficulty: 2, text: "温室效应增强的主要原因之一是：", options: ["A. 植树造林", "B. 化石燃料燃烧排放CO₂", "C. 使用清洁能源", "D. 发展有机农业"], answer: "B", knowledgePoint: "温室气体来源", analysis: "化石燃料燃烧排放大量二氧化碳，是温室效应增强的主要原因。" },
      { type: "choice", difficulty: 3, text: "关于辐射强迫的说法正确的是：", options: ["A. 正辐射强迫使地球变冷", "B. 负辐射强迫使地球变暖", "C. CO₂增加导致正辐射强迫", "D. 辐射强迫与气候变化无关"], answer: "C", knowledgePoint: "辐射强迫", analysis: "辐射强迫是指外强迫对地球能量平衡的影响，正辐射强迫使地球变暖，CO₂增加导致正辐射强迫。" }
    ]
  },
  {
    lesson: 52, title: "海洋环流：热盐循环的全球意义",
    questions: [
      { type: "choice", difficulty: 1, text: "大洋传送带的驱动力是：", options: ["A. 风力", "B. 温度和盐度差异", "C. 太阳辐射", "D. 月球引力"], answer: "B", knowledgePoint: "大洋环流驱动力", analysis: "大洋传送带（温盐环流）主要由海水温度和盐度差异导致的密度变化驱动。" },
      { type: "choice", difficulty: 2, text: "墨西哥湾流对欧洲气候的影响是：", options: ["A. 使气候更冷", "B. 使欧洲比同纬度地区温暖湿润", "C. 不影响气候", "D. 只影响降水"], answer: "B", knowledgePoint: "洋流对气候的影响", analysis: "墨西哥湾流（北大西洋暖流）使欧洲西部比同纬度其他地区更加温暖湿润。" },
      { type: "choice", difficulty: 3, text: "气候变化可能导致大洋传送带：", options: ["A. 加速运行", "B. 减慢甚至停止", "C. 完全不受影响", "D. 更加稳定"], answer: "B", knowledgePoint: "气候变化与海洋环流", analysis: "气候变化导致冰川融化，淡水注入海洋，可能减弱甚至关闭大洋传送带。" }
    ]
  },
  {
    lesson: 53, title: "碳循环与气候模型",
    questions: [
      { type: "choice", difficulty: 1, text: "全球碳循环的主要碳库不包括：", options: ["A. 大气圈", "B. 生物圈", "C. 地壳", "D. 岩石圈"], answer: "C", knowledgePoint: "碳库", analysis: "全球碳循环的主要碳库包括大气圈、生物圈、海洋和岩石圈。" },
      { type: "choice", difficulty: 2, text: "人类活动主要通过什么方式影响碳循环：", options: ["A. 植树造林", "B. 燃烧化石燃料和土地利用变化", "C. 发展有机农业", "D. 减少工业生产"], answer: "B", knowledgePoint: "人类活动对碳循环的影响", analysis: "人类燃烧化石燃料和改变土地利用（砍伐森林等）是向大气排放CO₂的主要途径。" },
      { type: "choice", difficulty: 3, text: "气候模型的不确定性主要来自：", options: ["A. 物理定律不清楚", "B. 初始条件、参数化和反馈过程", "C. 数学计算错误", "D. 计算机性能不足"], answer: "B", knowledgePoint: "气候模型不确定性", analysis: "气候模型的不确定性主要来自初始条件的微小差异、模式参数化和复杂反馈过程。" }
    ]
  },
  {
    lesson: 54, title: "极地冰芯：十万年的气候档案",
    questions: [
      { type: "choice", difficulty: 1, text: "冰芯分析可以获取的气候信息是：", options: ["A. 只有温度", "B. 温度、降水、大气成分、火山喷发", "C. 只有降水量", "D. 只有海洋温度"], answer: "B", knowledgePoint: "冰芯气候信息", analysis: "冰芯包含温度、降水、大气成分、火山灰等信息，是研究古气候的重要资料。" },
      { type: "choice", difficulty: 2, text: "冰芯中CO₂浓度与温度的关系是：", options: ["A. CO₂增加导致温度降低", "B. CO₂和温度变化基本同步", "C. 温度变化与CO₂无关", "D. 总是相反"], answer: "B", knowledgePoint: "CO₂与温度关系", analysis: "冰芯记录显示，大气CO₂浓度和温度变化基本同步，说明两者密切相关。" },
      { type: "choice", difficulty: 3, text: "关于冰芯证据的说法正确的是：", options: ["A. 冰芯证明当前气候变化是自然周期", "B. 当前CO₂增长速度是过去几十万年中最快的", "C. 冰芯记录无法验证", "D. 过去气候比现在更稳定"], answer: "B", knowledgePoint: "冰芯证据意义", analysis: "冰芯记录证明，当前大气CO₂浓度的增长速度是过去几十万年中最快的。" }
    ]
  },
  {
    lesson: 55, title: "地球临界点：不可逆变化的阈值",
    questions: [
      { type: "choice", difficulty: 1, text: "地球临界点的概念是：", options: ["A. 系统可以无限变化", "B. 系统发生突然、不可逆变化的临界值", "C. 只有气候系统有临界点", "D. 临界点很容易跨越"], answer: "B", knowledgePoint: "临界点概念", analysis: "临界点是地球系统状态发生突然、不可逆变化的阈值，一旦跨越，系统将转向新的状态。" },
      { type: "choice", difficulty: 2, text: "已识别的地球临界点不包括：", options: ["A. 北极海冰融化", "B. 亚马逊雨林崩溃", "C. 撒哈拉沙漠扩大", "D. 珊瑚礁白化"], answer: "C", knowledgePoint: "地球临界点", analysis: "已识别的地球临界点包括北极海冰融化、亚马逊雨林崩溃、格陵兰冰盖融化、珊瑚礁白化等。" },
      { type: "choice", difficulty: 3, text: "临界点之间可能存在级联效应，这意味着：", options: ["A. 临界点相互独立", "B. 一个临界点的触发可能引发其他临界点", "C. 临界点无法跨越", "D. 不需要担心临界点"], answer: "B", knowledgePoint: "临界点级联", analysis: "临界点之间可能存在级联效应，一个临界点的触发可能引发其他临界点，形成连锁反应。" }
    ]
  },

  // ════════════════════════════════════════
  // 第12章 人文地理深化（第6年·A-Level）
  // ════════════════════════════════════════
  {
    lesson: 56, title: "移民与难民：驱动力与目的地",
    questions: [
      { type: "choice", difficulty: 1, text: "移民的\"推力因素\"是指：", options: ["A. 更好的就业机会", "B. 战争、贫困、迫害等不利条件", "C. 家庭团聚", "D. 教育机会"], answer: "B", knowledgePoint: "推拉理论", analysis: "推力因素是指促使人们离开原居住地的不利条件，如战争、贫困、自然灾害。" },
      { type: "choice", difficulty: 2, text: "难民与经济移民的主要区别是：", options: ["A. 目的地不同", "B. 难民因迫害或暴力被迫离开，经济移民为改善生活", "C. 数量不同", "D. 没有区别"], answer: "B", knowledgePoint: "难民与移民区别", analysis: "难民因迫害、战争或暴力被迫离开祖国，经济移民为寻求更好的经济机会而迁移。" },
      { type: "choice", difficulty: 3, text: "关于国际难民保护的说法正确的是：", options: ["A. 《难民地位公约》已过时", "B. 不推回原则是国际难民法的基础", "C. 难民应自行承担风险", "D. 难民没有权利"], answer: "B", knowledgePoint: "国际难民保护", analysis: "《难民地位公约》确立了不推回原则，即不得将难民送回可能遭受迫害的国家。" }
    ]
  },
  {
    lesson: 57, title: "地缘政治：资源、领土与权力",
    questions: [
      { type: "choice", difficulty: 1, text: "地缘政治学研究的是：", options: ["A. 地理因素对国际政治的影响", "B. 国内政治", "C. 纯粹的经济问题", "D. 文化艺术"], answer: "A", knowledgePoint: "地缘政治概念", analysis: "地缘政治学研究地理位置、国际关系和权力之间的相互作用。" },
      { type: "choice", difficulty: 2, text: "能源地缘政治的核心问题是：", options: ["A. 能源分布", "B. 能源的获取、控制和运输通道", "C. 能源价格", "D. 能源种类"], answer: "B", knowledgePoint: "能源地缘政治", analysis: "能源地缘政治关注石油、天然气等战略资源的获取、控制和运输通道。" },
      { type: "choice", difficulty: 3, text: "21世纪地缘政治格局变化的主要趋势是：", options: ["A. 单极化", "B. 多极化", "C. 保持不变", "D. 无政府状态"], answer: "B", knowledgePoint: "地缘政治格局", analysis: "21世纪地缘政治格局呈现多极化趋势，新兴经济体崛起，全球力量对比发生变化。" }
    ]
  },
  {
    lesson: 58, title: "资源战争：水、石油、稀土",
    questions: [
      { type: "choice", difficulty: 1, text: "被称为\"工业血液\"的资源是：", options: ["A. 水", "B. 石油", "C. 稀土", "D. 煤炭"], answer: "B", knowledgePoint: "石油重要性", analysis: "石油被称为\"工业血液\"，是现代工业和交通的重要能源。" },
      { type: "choice", difficulty: 2, text: "水资源冲突最可能发生在：", options: ["A. 降水量大的地区", "B. 共享跨境河流的地区", "C. 沿海地区", "D. 发达国家"], answer: "B", knowledgePoint: "水资源冲突", analysis: "共享跨境河流的国家之间，因水量分配和水质问题可能发生冲突。" },
      { type: "choice", difficulty: 3, text: "稀土资源的重要性在于：", options: ["A. 用于制造铅笔", "B. 是高科技产品和军事装备的关键材料", "C. 储量丰富", "D. 价格低廉"], answer: "B", knowledgePoint: "稀土资源", analysis: "稀土是制造智能手机、电动汽车、风力发电机、军事装备等高科技产品的关键材料。" }
    ]
  },
  {
    lesson: 59, title: "城市贫民窟的非正规经济",
    questions: [
      { type: "choice", difficulty: 1, text: "非正规经济的特点是：", options: ["A. 有正式注册", "B. 不用纳税", "C. 受法律保护", "D. 与正规经济无关"], answer: "B", knowledgePoint: "非正规经济特征", analysis: "非正规经济未正式注册、不纳税、不受劳动法保护，但提供了大量就业机会。" },
      { type: "choice", difficulty: 2, text: "非正规经济对城市贫困人口的作用是：", options: ["A. 没有作用", "B. 提供就业和收入来源", "C. 增加税收", "D. 提高社会保障"], answer: "B", knowledgePoint: "非正规经济作用", analysis: "非正规经济为城市贫困人口提供就业机会和收入来源，是许多发展中国家的重要就业渠道。" },
      { type: "choice", difficulty: 3, text: "关于非正规经济的政策建议，正确的是：", options: ["A. 全部取缔", "B. 逐步正规化，提供培训和信贷", "C. 维持现状不干预", "D. 只打击不扶持"], answer: "B", knowledgePoint: "非正规经济政策", analysis: "政府应逐步将非正规经济正规化，提供技能培训、小额信贷和市场准入。" }
    ]
  },
  {
    lesson: 60, title: "土著权利与土地所有权",
    questions: [
      { type: "choice", difficulty: 1, text: "土著人民对土地的权利基于：", options: ["A. 购买", "B. 历史使用和文化联系", "C. 政府分配", "D. 征服"], answer: "B", knowledgePoint: "土著土地权利", analysis: "土著人民对土地的权利基于世代居住、使用和独特的文化、精神联系。" },
      { type: "choice", difficulty: 2, text: "土著土地面临的主要威胁是：", options: ["A. 农业发展", "B. 采矿、伐木、基础设施建设侵占土地", "C. 野生动物入侵", "D. 气候变化"], answer: "B", knowledgePoint: "土著土地威胁", analysis: "采矿、石油勘探、伐木、农场扩张和基础设施建设是侵占土著土地的主要方式。" },
      { type: "choice", difficulty: 3, text: "关于土著知识与可持续发展的关系，正确的是：", options: ["A. 土著知识已经过时", "B. 土著知识包含可持续利用自然资源的重要传统智慧", "C. 土著知识与可持续发展无关", "D. 土著知识不需要保护"], answer: "B", knowledgePoint: "土著知识价值", analysis: "土著人民世代积累的传统生态知识，对生物多样性保护和可持续发展具有重要价值。" }
    ]
  },

  // ════════════════════════════════════════
  // 第13章 环境政策与地缘政治（第7年·A-Level）
  // ════════════════════════════════════════
  {
    lesson: 61, title: "国际气候协议：《京都议定书》到《巴黎协定》",
    questions: [
      { type: "choice", difficulty: 1, text: "《京都议定书》的主要目标是：", options: ["A. 保护生物多样性", "B. 减少温室气体排放", "C. 促进国际贸易", "D. 控制人口增长"], answer: "B", knowledgePoint: "京都议定书", analysis: "《京都议定书》是第一个具有法律约束力的国际减排协议，要求发达国家减少温室气体排放。" },
      { type: "choice", difficulty: 2, text: "《巴黎协定》的核心目标是：", options: ["A. 完全消除温室气体排放", "B. 把全球升温控制在2℃以内，努力控制在1.5℃以内", "C. 强制所有国家减排", "D. 建立全球碳市场"], answer: "B", knowledgePoint: "巴黎协定", analysis: "《巴黎协定》提出把全球平均气温升幅控制在工业化前水平以上2℃之内，并努力控制在1.5℃之内。" },
      { type: "choice", difficulty: 3, text: "《巴黎协定》采用的减排机制是：", options: ["A. 强制减排", "B. 各国自主决定贡献（NDC）", "C. 碳税", "D. 配额制度"], answer: "B", knowledgePoint: "巴黎协定机制", analysis: "《巴黎协定》采用\"国家自主贡献\"机制，各国自行设定减排目标，体现了灵活性。" }
    ]
  },
  {
    lesson: 62, title: "水资源外交：跨境河流的谈判",
    questions: [
      { type: "choice", difficulty: 1, text: "世界上大约有多少国家共享跨境河流或湖泊：", options: ["A. 不到10个", "B. 约40个", "C. 约150个", "D. 几乎所有国家"], answer: "C", knowledgePoint: "跨境河流普遍性", analysis: "全球约40%的陆地面积属于跨境流域，约150个国家有跨境河流或湖泊。" },
      { type: "choice", difficulty: 2, text: "跨境河流治理的成功案例是：", options: ["A. 尼罗河流域", "B. 莱茵河流域和多瑙河流域", "C. 底格里斯河-幼发拉底河流域", "D. 长江-黄河流域"], answer: "B", knowledgePoint: "跨境河流成功治理", analysis: "莱茵河流域和多瑙河流域建立了有效的国际合作机制，实现了跨境河流的共同治理。" },
      { type: "choice", difficulty: 3, text: "《国际水道非航行使用法公约》的基本原则是：", options: ["A. 水源国优先使用权", "B. 公平合理利用和不造成重大损害", "C. 上游国家绝对权利", "D. 下游国家绝对权利"], answer: "B", knowledgePoint: "国际水法原则", analysis: "国际水法确立了公平合理利用和不造成重大损害两大基本原则，平衡上下游国家利益。" }
    ]
  },
  {
    lesson: 63, title: "北极资源争夺：融冰与新边界",
    questions: [
      { type: "choice", difficulty: 1, text: "北极冰盖加速融化的主要原因是：", options: ["A. 自然周期", "B. 全球气候变暖", "C. 太阳辐射增强", "D. 火山活动"], answer: "B", knowledgePoint: "北极融化原因", analysis: "全球气候变暖导致北极冰盖加速融化，北极航道和新资源开发成为可能。" },
      { type: "choice", difficulty: 2, text: "北极地区丰富的资源包括：", options: ["A. 只有渔业资源", "B. 石油、天然气、矿产和航道", "C. 只有森林资源", "D. 没有资源"], answer: "B", knowledgePoint: "北极资源", analysis: "北极地区拥有丰富的石油、天然气、矿产资源和航运价值。" },
      { type: "choice", difficulty: 3, text: "解决北极主权争端的国际法框架是：", options: ["A. 《联合国宪章》", "B. 《联合国海洋法公约》", "C. 《巴黎协定》", "D. 《日内瓦公约》"], answer: "B", knowledgePoint: "北极争端解决", analysis: "《联合国海洋法公约》确立了海域划界和资源权益的法律框架，适用于北极地区。" }
    ]
  },
  {
    lesson: 64, title: "跨国污染责任：谁来承担",
    questions: [
      { type: "choice", difficulty: 1, text: "跨国污染的特点是：", options: ["A. 只影响一个国家", "B. 污染跨境传播，影响多个国家", "C. 可以完全控制", "D. 只影响发展中国家"], answer: "B", knowledgePoint: "跨国污染特点", analysis: "跨国污染包括酸雨、跨境河流污染、大气污染扩散等，影响多个国家。" },
      { type: "choice", difficulty: 2, text: "跨国污染责任分配的原则是：", options: ["A. 谁污染谁赔偿", "B. 谁受益谁承担", "C. 污染者付费原则", "D. 发展中国家免责"], answer: "C", knowledgePoint: "污染责任原则", analysis: "污染者付费原则是国际环境法的重要原则，即污染者应承担污染治理和损害赔偿的责任。" },
      { type: "choice", difficulty: 3, text: "大气污染跨境传输的主要介质是：", options: ["A. 河流", "B. 风和大气环流", "C. 海洋洋流", "D. 地下水流"], answer: "B", knowledgePoint: "大气污染跨境传输", analysis: "大气污染通过风和大气环流跨境传输，如欧洲的酸雨问题。" }
    ]
  },
  {
    lesson: 65, title: "环境正义：污染总在穷人家门口",
    questions: [
      { type: "choice", difficulty: 1, text: "环境正义关注的核心问题是：", options: ["A. 经济发展", "B. 环境污染和风险的不公平分布", "C. 文化交流", "D. 技术创新"], answer: "B", knowledgePoint: "环境正义概念", analysis: "环境正义关注环境污染、有毒废物倾倒等环境风险在不同社会群体间的不公平分布。" },
      { type: "choice", difficulty: 2, text: "环境不平等的主要表现是：", options: ["A. 有钱人居住在污染地区", "B. 低收入社区和少数族裔社区承担更多环境风险", "C. 所有人都承担相同环境风险", "D. 农村比城市污染更严重"], answer: "B", knowledgePoint: "环境不平等", analysis: "低收入社区和少数族裔社区往往不成比例地承受污染、垃圾填埋场、工业设施等环境风险。" },
      { type: "choice", difficulty: 3, text: "实现环境正义的途径不包括：", options: ["A. 加强环境影响评价中的公平考量", "B. 赋权社区参与决策", "C. 减少对弱势群体的保护", "D. 建立环境补偿机制"], answer: "C", knowledgePoint: "环境正义实现", analysis: "实现环境正义需要加强公平考量、赋权社区参与、建立补偿机制，而不是减少保护。" }
    ]
  },

  // ════════════════════════════════════════
  // 第14章 研究与综合（第7年·A-Level）
  // ════════════════════════════════════════
  {
    lesson: 66, title: "独立研究课题设计",
    questions: [
      { type: "choice", difficulty: 1, text: "好的研究问题的特点是：", options: ["A. 越宽泛越好", "B. 具体、可研究、有意义", "C. 无法回答", "D. 只涉及事实性问题"], answer: "B", knowledgePoint: "研究问题设计", analysis: "好的研究问题应该具体、可研究、有意义，并且与现有知识有联系。" },
      { type: "choice", difficulty: 2, text: "研究设计应包括：", options: ["A. 研究方法、数据来源、时间安排", "B. 只要研究方法", "C. 只要研究结论", "D. 只要研究经费"], answer: "A", knowledgePoint: "研究设计要素", analysis: "研究设计应明确研究方法、数据来源、时间安排、预期成果等要素。" },
      { type: "choice", difficulty: 3, text: "研究伦理的重要性是：", options: ["A. 不重要", "B. 保护参与者权益、确保研究可信度", "C. 只是形式要求", "D. 不影响研究结果"], answer: "B", knowledgePoint: "研究伦理", analysis: "研究伦理保护参与者的知情同意、隐私等权益，是确保研究可信度和学术诚信的基础。" }
    ]
  },
  {
    lesson: 67, title: "混合方法研究：定量与定性",
    questions: [
      { type: "choice", difficulty: 1, text: "定量研究的特点是：", options: ["A. 用文字描述", "B. 用数字和统计分析", "C. 不用数据", "D. 只用图片"], answer: "B", knowledgePoint: "定量研究", analysis: "定量研究用数字、数据和统计分析来回答研究问题。" },
      { type: "choice", difficulty: 2, text: "定性研究的特点是：", options: ["A. 用数字统计", "B. 用文字和深入分析理解现象", "C. 不用访谈", "D. 只用问卷"], answer: "B", knowledgePoint: "定性研究", analysis: "定性研究通过访谈、观察、文本分析等方法，用文字深入理解和解释社会现象。" },
      { type: "choice", difficulty: 3, text: "混合方法研究的优势是：", options: ["A. 只用一种方法更方便", "B. 三角验证，多角度理解", "C. 成本更低", "D. 更快得出结论"], answer: "B", knowledgePoint: "混合方法优势", analysis: "混合方法结合定量和定性研究的优势，实现三角验证，获得更全面、更可靠的研究结论。" }
    ]
  },
  {
    lesson: 68, title: "地理写作：论证与证据",
    questions: [
      { type: "choice", difficulty: 1, text: "学术写作要求：", options: ["A. 随意写作", "B. 正式、客观、引用规范", "C. 使用口语化表达", "D. 不需要证据"], answer: "B", knowledgePoint: "学术写作规范", analysis: "学术写作要求使用正式语言、客观陈述、规范引用，避免口语化和主观臆断。" },
      { type: "choice", difficulty: 2, text: "地理论证的结构是：", options: ["A. 只有结论", "B. 论点、证据、分析", "C. 只有描述", "D. 堆砌材料"], answer: "B", knowledgePoint: "论证结构", analysis: "好的地理论证应包含清晰的论点、有力的证据和深入的分析。" },
      { type: "choice", difficulty: 3, text: "使用证据时应注意：", options: ["A. 只用一种来源", "B. 证据要可靠、相关、充分", "C. 不用注明来源", "D. 证据不需要验证"], answer: "B", knowledgePoint: "证据使用", analysis: "使用证据时应确保来源可靠、与论点相关、数量充分，并注明出处。" }
    ]
  },
  {
    lesson: 69, title: "数据解读的批判性思维",
    questions: [
      { type: "choice", difficulty: 1, text: "数据解读中需要质疑的是：", options: ["A. 所有数据都正确", "B. 数据的来源、收集方法、局限性", "C. 统计方法不重要", "D. 图表一定准确"], answer: "B", knowledgePoint: "数据质疑", analysis: "批判性解读数据需要质疑数据来源、收集方法、样本代表性、统计方法的局限性。" },
      { type: "choice", difficulty: 2, text: " \"相关性不等于因果性\"意味着：", options: ["A. 两个变量相关，一定有因果关系", "B. 两个变量相关，可能只是巧合或有第三方因素", "C. 相关性就是因果性", "D. 相关性没有意义"], answer: "B", knowledgePoint: "相关与因果", analysis: "两个变量相关可能有因果关系，也可能只是巧合或受第三方因素影响，不能简单等同。" },
      { type: "choice", difficulty: 3, text: "反思性实践是指：", options: ["A. 不需要反思", "B. 不断反思自己的假设、偏见和研究过程", "C. 只相信权威观点", "D. 避免质疑"], answer: "B", knowledgePoint: "反思性实践", analysis: "反思性实践要求研究者不断反思自己的假设、偏见和方法，提高研究的可信度和客观性。" }
    ]
  },
  {
    lesson: 70, title: "A-Level综合模拟",
    questions: [
      { type: "choice", difficulty: 1, text: "A-Level地理考试中，综合题答题策略是：", options: ["A. 只写简短答案", "B. 分点回答，使用地理术语，结合案例", "C. 随意发挥", "D. 只写结论不写过程"], answer: "B", knowledgePoint: "综合题答题策略", analysis: "综合题应分点回答，使用专业术语，结合所学知识和案例材料。" },
      { type: "choice", difficulty: 2, text: "考试时间分配的原则是：", options: ["A. 所有题目用时相同", "B. 先做难题", "C. 先做分值高的题，合理分配时间", "D. 按题号顺序做题"], answer: "C", knowledgePoint: "时间管理", analysis: "考试应先看全卷，先做分值高且有把握的题，合理分配时间。" },
      { type: "choice", difficulty: 3, text: "A-Level地理评估的核心能力是：", options: ["A. 只背知识点", "B. 综合运用地理知识、分析问题和批判性思维", "C. 不需要理解只需记忆", "D. 考试技巧"], answer: "B", knowledgePoint: "评估核心能力", analysis: "A-Level评估核心是综合运用地理知识的能力、分析和评价问题的能力、批判性思维。" }
    ]
  }
];

export default questionBank;

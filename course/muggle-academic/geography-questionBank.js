// geography-questionBank.js
// 麻瓜学术 · 地理分科 · 随堂测验题库
// 教授：菲利克斯·韦斯莱
// 每课3题：basic（+2分）、medium（0分，全对得E）、hard（-1分）

export const questionBank = [
  {
    lesson: 1, title: "地球的形状与大小",
    questions: [
      { type: "choice", difficulty: "basic", text: "地球的形状是：", options: ["A. 完美球体", "B. 两极稍扁、赤道略鼓的椭球体", "C. 赤道略扁的椭球体", "D. 正方体"], answer: "B", knowledgePoint: "地球形状", analysis: "地球是两极稍扁、赤道略鼓的不规则椭球体。" },
      { type: "choice", difficulty: "medium", text: "最早科学估算地球周长的学者是：", options: ["A. 牛顿", "B. 埃拉托色尼", "C. 哥白尼", "D. 伽利略"], answer: "B", knowledgePoint: "地球测量历史", analysis: "古希腊学者埃拉托色尼约在公元前240年计算出了地球周长。" },
      { type: "choice", difficulty: "hard", text: "从北京飞往纽约最短航线方向是：", options: ["A. 一直向东", "B. 一直向西", "C. 先向东北，后向东南", "D. 先向西北，后向西南"], answer: "C", knowledgePoint: "球面最短航线", analysis: "球面上两点间最短航线是大圆航线，北京到纽约需经过北极附近。" }
    ]
  },
  {
    lesson: 2, title: "地球仪与经纬网",
    questions: [
      { type: "choice", difficulty: "basic", text: "指示南北方向的线是：", options: ["A. 纬线", "B. 经线", "C. 赤道", "D. 回归线"], answer: "B", knowledgePoint: "经纬线的方向", analysis: "经线连接南北两极，指示南北方向。" },
      { type: "choice", difficulty: "medium", text: "本初子午线是：", options: ["A. 0°经线", "B. 0°纬线", "C. 180°经线", "D. 赤道"], answer: "A", knowledgePoint: "重要经纬线", analysis: "本初子午线是0°经线，通过英国格林尼治天文台旧址。" },
      { type: "choice", difficulty: "hard", text: "关于经纬网的说法正确的是：", options: ["A. 所有经线都和纬线一样长", "B. 经线指示东西方向", "C. 纬线都互相平行", "D. 纬度越高，纬线越短"], answer: "D", knowledgePoint: "经纬线特点", analysis: "经线长度相等，纬线长度不等，纬度越高纬线越短。" }
    ]
  },
  {
    lesson: 3, title: "经纬度的应用",
    questions: [
      { type: "choice", difficulty: "basic", text: "经度的范围是：", options: ["A. 0°~90°", "B. 0°~180°", "C. 90°~180°", "D. 0°~360°"], answer: "B", knowledgePoint: "经纬度范围", analysis: "经度从本初子午线开始，向东向西各到180°。" },
      { type: "choice", difficulty: "medium", text: "关于纬度的说法正确的是：", options: ["A. 北纬一定在北半球", "B. 南纬一定在南半球", "C. 赤道纬度是90°", "D. A和B都正确"], answer: "D", knowledgePoint: "纬度的半球划分", analysis: "赤道是0°纬线，北纬在北半球，南纬在南半球。" },
      { type: "choice", difficulty: "hard", text: "某地位于120°E，40°N，该地位于：", options: ["A. 东半球、北半球", "B. 东半球、南半球", "C. 西半球、北半球", "D. 西半球、南半球"], answer: "A", knowledgePoint: "半球划分", analysis: "20°W~160°E是东半球，赤道以北是北半球。" }
    ]
  },
  {
    lesson: 4, title: "地图的三要素",
    questions: [
      { type: "choice", difficulty: "basic", text: "地图的三要素不包括：", options: ["A. 比例尺", "B. 方向", "C. 图例", "D. 颜色"], answer: "D", knowledgePoint: "地图三要素", analysis: "地图的三要素是比例尺、方向和图例。" },
      { type: "choice", difficulty: "medium", text: "有经纬网的地图判断方向的方法是：", options: ["A. 上北下南左西右东", "B. 经线指示南北，纬线指示东西", "C. 指向标指向北", "D. 无法判断"], answer: "B", knowledgePoint: "地图定向", analysis: "经纬网地图上，经线指示南北方向，纬线指示东西方向。" },
      { type: "choice", difficulty: "hard", text: "下列关于比例尺的说法正确的是：", options: ["A. 比例尺越大，表示的范围越大", "B. 比例尺越小，表示的内容越详细", "C. 1:1000比1:10000的比例尺大", "D. 图上1厘米代表实地100米，比例尺为1:100"], answer: "C", knowledgePoint: "比例尺大小比较", analysis: "比例尺大小看分数值，1/1000 > 1/10000。" }
    ]
  },
  {
    lesson: 5, title: "比例尺的计算",
    questions: [
      { type: "choice", difficulty: "basic", text: "比例尺的表示方法不包括：", options: ["A. 数字式", "B. 文字式", "C. 线段式", "D. 符号式"], answer: "D", knowledgePoint: "比例尺表示方法", analysis: "比例尺有数字式、文字式和线段式三种表示方法。" },
      { type: "choice", difficulty: "medium", text: "某地图比例尺为1:50000，图上距离3厘米，实地距离是：", options: ["A. 150米", "B. 1.5千米", "C. 15千米", "D. 150千米"], answer: "B", knowledgePoint: "比例尺计算", analysis: "实地距离 = 3厘米 × 50000 = 150000厘米 = 1.5千米。" },
      { type: "choice", difficulty: "hard", text: "A图比例尺1:1000，B图比例尺1:100000，说法正确的是：", options: ["A. A图表示范围更大", "B. B图表示范围更大", "C. 两图表示范围一样大", "D. 无法比较"], answer: "B", knowledgePoint: "比例尺与范围的关系", analysis: "比例尺越小，表示的实际范围越大。" }
    ]
  },
  {
    lesson: 6, title: "等高线地形图",
    questions: [
      { type: "choice", difficulty: "basic", text: "等高线越密集表示：", options: ["A. 坡度越缓", "B. 坡度越陡", "C. 海拔越高", "D. 海拔越低"], answer: "B", knowledgePoint: "等高线疏密与坡度", analysis: "等高线越密集表示坡度越陡。" },
      { type: "choice", difficulty: "medium", text: "等高线闭合且数值由中心向外逐渐降低表示：", options: ["A. 山顶", "B. 山谷", "C. 山脊", "D. 陡崖"], answer: "A", knowledgePoint: "等高线判读", analysis: "等高线闭合且中间高四周低是山顶。" },
      { type: "choice", difficulty: "hard", text: "多条等高线重叠在一起表示：", options: ["A. 山顶", "B. 山谷", "C. 陡崖", "D. 鞍部"], answer: "C", knowledgePoint: "特殊地形判读", analysis: "等高线重叠表示陡崖。" }
    ]
  },
  {
    lesson: 7, title: "地形剖面图",
    questions: [
      { type: "choice", difficulty: "basic", text: "地形剖面图的主要作用是：", options: ["A. 计算面积", "B. 直观显示地势起伏", "C. 测量距离", "D. 确定方位"], answer: "B", knowledgePoint: "剖面图的作用", analysis: "地形剖面图可以直观展示地势起伏变化。" },
      { type: "choice", difficulty: "medium", text: "绘制地形剖面图第一步是：", options: ["A. 确定水平比例尺", "B. 画垂直比例尺", "C. 确定剖面线", "D. 连接各点"], answer: "C", knowledgePoint: "剖面图绘制步骤", analysis: "绘制剖面图的第一步是确定剖面线。" },
      { type: "choice", difficulty: "hard", text: "关于地形剖面图和等高线图的关系，说法正确的是：", options: ["A. 剖面图上的每个点都对应等高线图上的一个点", "B. 剖面图可以完全替代等高线图", "C. 两者没有任何关系", "D. 剖面图只能反映地形起伏，不能反映具体高度"], answer: "A", knowledgePoint: "剖面图与等高线图的关系", analysis: "剖面图是等高线图的立体化表示。" }
    ]
  },
  {
    lesson: 8, title: "海陆分布",
    questions: [
      { type: "choice", difficulty: "basic", text: "地球表面陆地与海洋的比例约为：", options: ["A. 七分海洋、三分陆地", "B. 三分海洋、七分陆地", "C. 各占一半", "D. 八分海洋、二分陆地"], answer: "A", knowledgePoint: "海陆比例", analysis: "地球表面约71%是海洋，29%是陆地。" },
      { type: "choice", difficulty: "medium", text: "关于大洲和大洋的说法正确的是：", options: ["A. 亚洲是面积最小的大洲", "B. 太平洋是面积最小的大洋", "C. 大西洋呈S形", "D. 北冰洋跨越东、西半球"], answer: "C", knowledgePoint: "大洲大洋概况", analysis: "大西洋呈S形分布。" },
      { type: "choice", difficulty: "hard", text: "下列地理事物中属于半岛的是：", options: ["A. 澳大利亚大陆", "B. 格陵兰岛", "C. 阿拉伯半岛", "D. 火地岛"], answer: "C", knowledgePoint: "大陆与岛屿的区别", analysis: "阿拉伯半岛是世界上最大的半岛。" }
    ]
  },
  {
    lesson: 9, title: "大洲的分布",
    questions: [
      { type: "choice", difficulty: "basic", text: "世界上面积最大的大洲是：", options: ["A. 非洲", "B. 北美洲", "C. 亚洲", "D. 欧洲"], answer: "C", knowledgePoint: "大洲面积比较", analysis: "亚洲是世界上面积最大的大洲。" },
      { type: "choice", difficulty: "medium", text: "关于各大洲位置的说法正确的是：", options: ["A. 南极洲全部位于南半球", "B. 大洋洲全部位于东半球", "C. 非洲全部位于东半球", "D. 南美洲全部位于西半球"], answer: "A", knowledgePoint: "大洲半球位置", analysis: "南极洲全部位于南半球。" },
      { type: "choice", difficulty: "hard", text: "赤道穿过的大洲有：", options: ["A. 亚洲、非洲", "B. 南美洲、非洲", "C. 亚洲、南美洲、大洋洲、非洲", "D. 欧洲、非洲、南美洲"], answer: "C", knowledgePoint: "赤道穿过的大洲", analysis: "赤道穿过亚洲、大洋洲、南美洲和非洲。" }
    ]
  },
  {
    lesson: 10, title: "板块构造学说",
    questions: [
      { type: "choice", difficulty: "basic", text: "全球岩石圈被分成：", options: ["A. 四大板块", "B. 五大板块", "C. 六大板块", "D. 七大板块"], answer: "C", knowledgePoint: "板块数量", analysis: "全球岩石圈被分成六大板块。" },
      { type: "choice", difficulty: "medium", text: "板块交界处一般：", options: ["A. 地壳稳定，地震少", "B. 地壳活跃，多火山地震", "C. 地形平坦", "D. 气候温和"], answer: "B", knowledgePoint: "板块交界处特征", analysis: "板块交界处地壳运动活跃，多火山地震。" },
      { type: "choice", difficulty: "hard", text: "喜马拉雅山脉是由哪两大板块碰撞形成的：", options: ["A. 亚欧板块与印度洋板块", "B. 亚欧板块与非洲板块", "C. 太平洋板块与印度洋板块", "D. 南极洲板块与印度洋板块"], answer: "A", knowledgePoint: "板块碰撞与地形", analysis: "喜马拉雅山脉由印度洋板块与亚欧板块碰撞挤压形成。" }
    ]
  },
  {
    lesson: 11, title: "世界地形",
    questions: [
      { type: "choice", difficulty: "basic", text: "世界上最高的高原是：", options: ["A. 巴西高原", "B. 青藏高原", "C. 蒙古高原", "D. 东非高原"], answer: "B", knowledgePoint: "世界主要地形", analysis: "青藏高原平均海拔4000米以上，是世界最高高原。" },
      { type: "choice", difficulty: "medium", text: "海拔一般在500米以上、坡度较陡的地形是：", options: ["A. 平原", "B. 丘陵", "C. 山地", "D. 高原"], answer: "C", knowledgePoint: "地形类型判读", analysis: "山地海拔较高，坡度较陡。" },
      { type: "choice", difficulty: "hard", text: "关于世界地形的分布，说法正确的是：", options: ["A. 世界最高山脉在北美洲", "B. 世界最大平原在非洲", "C. 世界最长山脉在南美洲", "D. 世界最大沙漠在亚洲"], answer: "C", knowledgePoint: "世界地形分布", analysis: "世界最长山脉是安第斯山脉，在南美洲。" }
    ]
  },
  {
    lesson: 12, title: "地形对人类活动的影响",
    questions: [
      { type: "choice", difficulty: "basic", text: "最适合发展种植业的地形是：", options: ["A. 山地", "B. 丘陵", "C. 平原", "D. 高原"], answer: "C", knowledgePoint: "地形与农业", analysis: "平原地形平坦、土壤肥沃，最适合发展种植业。" },
      { type: "choice", difficulty: "medium", text: "关于地形与聚落的关系，说法正确的是：", options: ["A. 聚落都分布在高原上", "B. 聚落多分布在平原、河流沿岸和沿海地区", "C. 山地不适合人类居住", "D. 高原地形最适合聚落分布"], answer: "B", knowledgePoint: "地形与聚落", analysis: "聚落多分布在自然条件优越的地方。" },
      { type: "choice", difficulty: "hard", text: "大江大河中下游形成平原的主要原因是：", options: ["A. 降水充沛", "B. 河流堆积作用", "C. 温度适宜", "D. 植被茂盛"], answer: "B", knowledgePoint: "流水作用与地形", analysis: "河流中下游水流减缓，泥沙堆积形成冲积平原。" }
    ]
  },
  {
    lesson: 13, title: "天气与气候",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列描述中属于气候的是：", options: ["A. 今天下雨了", "B. 明天会降温", "C. 伦敦终年温和湿润", "D. 刚才打雷了"], answer: "C", knowledgePoint: "天气与气候的区别", analysis: "气候是长时间的平均状况。" },
      { type: "choice", difficulty: "medium", text: "关于天气的说法正确的是：", options: ["A. 天气变化很小", "B. 天气是指多年的天气平均状况", "C. 同一地区不同时间的天气可以不同", "D. 天气无法预测"], answer: "C", knowledgePoint: "天气的特点", analysis: "天气是短时间的大气状况，特点是多变。" },
      { type: "choice", difficulty: "hard", text: "天气预报的主要依据不包括：", options: ["A. 气象卫星云图", "B. 地面气象观测数据", "C. 历史文献记载", "D. 气象雷达探测"], answer: "C", knowledgePoint: "天气预报依据", analysis: "天气预报主要依据实时观测数据。" }
    ]
  },
  {
    lesson: 14, title: "气温",
    questions: [
      { type: "choice", difficulty: "basic", text: "一天中气温最高的时间一般是：", options: ["A. 午夜12点", "B. 凌晨日出前", "C. 午后2点左右", "D. 中午12点"], answer: "C", knowledgePoint: "气温日变化", analysis: "一天中气温最高的时间是午后2点左右。" },
      { type: "choice", difficulty: "medium", text: "世界年平均气温分布的一般规律是：", options: ["A. 从赤道向两极递增", "B. 从赤道向两极递减", "C. 随地势升高而升高", "D. 无规律分布"], answer: "B", knowledgePoint: "世界气温分布规律", analysis: "世界年平均气温从赤道向两极递减。" },
      { type: "choice", difficulty: "hard", text: "同纬度地区夏季陆地气温高于海洋的主要原因是：", options: ["A. 陆地吸收热量快", "B. 海洋吸收热量慢", "C. 陆地比热容大于海洋", "D. 海洋蒸发量大"], answer: "B", knowledgePoint: "海陆热力性质差异", analysis: "海洋热容量大于陆地，升温慢。" }
    ]
  },
  {
    lesson: 15, title: "降水",
    questions: [
      { type: "choice", difficulty: "basic", text: "降水形成不包括的条件是：", options: ["A. 足够的水汽", "B. 空气下沉冷却", "C. 空气上升冷却", "D. 凝结核"], answer: "B", knowledgePoint: "降水形成条件", analysis: "降水需要空气上升冷却使水汽凝结。" },
      { type: "choice", difficulty: "medium", text: "关于世界降水分布的说法正确的是：", options: ["A. 赤道地区降水少", "B. 两极地区降水多", "C. 沿海地区降水一般比内陆多", "D. 山地背风坡降水多"], answer: "C", knowledgePoint: "世界降水分布规律", analysis: "沿海地区受海洋影响大，降水一般比内陆多。" },
      { type: "choice", difficulty: "hard", text: "季风气候区的降水主要集中在：", options: ["A. 冬季", "B. 夏季", "C. 全年均匀", "D. 全年少雨"], answer: "B", knowledgePoint: "季风气候特点", analysis: "季风气候区夏季受夏季风影响，降水多。" }
    ]
  },
  {
    lesson: 16, title: "影响气候的因素",
    questions: [
      { type: "choice", difficulty: "basic", text: "影响气候最基本的因素是：", options: ["A. 纬度位置", "B. 海陆位置", "C. 地形因素", "D. 洋流因素"], answer: "A", knowledgePoint: "影响气候的因素", analysis: "纬度位置决定了各地获得太阳辐射的多少。" },
      { type: "choice", difficulty: "medium", text: "受北大西洋暖流影响显著的地区是：", options: ["A. 东南亚", "B. 北美东海岸", "C. 欧洲西部", "D. 非洲西部"], answer: "C", knowledgePoint: "洋流对气候的影响", analysis: "北大西洋暖流使欧洲西部比同纬度地区温暖湿润。" },
      { type: "choice", difficulty: "hard", text: "关于地形对气候影响的说法正确的是：", options: ["A. 山地海拔越高，气温越高", "B. 山地迎风坡降水一定比背风坡多", "C. 青藏高原气候寒冷是因为纬度低", "D. 地势越高，气温越低"], answer: "D", knowledgePoint: "地形对气候的影响", analysis: "海拔每升高1000米，气温下降约6℃。" }
    ]
  },
  {
    lesson: 17, title: "世界气候类型（一）",
    questions: [
      { type: "choice", difficulty: "basic", text: "热带雨林气候的特点是：", options: ["A. 全年高温多雨", "B. 全年高温少雨", "C. 夏季多雨冬季少雨", "D. 全年温和湿润"], answer: "A", knowledgePoint: "热带雨林气候特点", analysis: "热带雨林气候全年高温多雨。" },
      { type: "choice", difficulty: "medium", text: "地中海气候的特点是：", options: ["A. 夏季炎热干燥，冬季温和湿润", "B. 夏季多雨冬季少雨", "C. 全年温和湿润", "D. 全年炎热干燥"], answer: "A", knowledgePoint: "地中海气候特点", analysis: "地中海气候夏季炎热干燥，冬季温和湿润。" },
      { type: "choice", difficulty: "hard", text: "热带季风气候与热带草原气候的共同点是：", options: ["A. 全年高温", "B. 全年多雨", "C. 有明显的干湿季", "D. 冬季盛行风来自海洋"], answer: "A", knowledgePoint: "热带气候比较", analysis: "两者都具有全年高温的特点。" }
    ]
  },
  {
    lesson: 18, title: "世界气候类型（二）",
    questions: [
      { type: "choice", difficulty: "basic", text: "温带季风气候的特点是：", options: ["A. 夏季高温多雨，冬季寒冷干燥", "B. 全年温和湿润", "C. 全年高温多雨", "D. 夏季凉爽，冬季温和"], answer: "A", knowledgePoint: "温带季风气候特点", analysis: "温带季风气候夏季高温多雨，冬季寒冷干燥。" },
      { type: "choice", difficulty: "medium", text: "寒带气候主要分布在：", options: ["A. 赤道地区", "B. 南极圈以内和北极圈以内", "C. 回归线附近", "D. 温带地区"], answer: "B", knowledgePoint: "寒带气候分布", analysis: "寒带气候主要分布在极圈以内。" },
      { type: "choice", difficulty: "hard", text: "判断气候类型的正确顺序是：", options: ["A. 先看气温再看降水", "B. 先看降水再看气温", "C. 气温和降水同等重要", "D. 无固定顺序"], answer: "A", knowledgePoint: "气候类型判断方法", analysis: "先根据气温确定温度带，再根据降水确定气候类型。" }
    ]
  },
  {
    lesson: 19, title: "世界人口",
    questions: [
      { type: "choice", difficulty: "basic", text: "世界人口总数已超过：", options: ["A. 50亿", "B. 60亿", "C. 70亿", "D. 80亿"], answer: "C", knowledgePoint: "世界人口概况", analysis: "目前世界人口已超过78亿。" },
      { type: "choice", difficulty: "medium", text: "关于人口密度的说法正确的是：", options: ["A. 人口密度=总人口÷总面积", "B. 人口密度越大越好", "C. 人口密度与自然条件无关", "D. 人口密度单位是亿/人"], answer: "A", knowledgePoint: "人口密度计算", analysis: "人口密度=总人口÷面积，单位是人/平方千米。" },
      { type: "choice", difficulty: "hard", text: "世界人口稠密区主要分布在：", options: ["A. 高纬度地区", "B. 内陆干旱地区", "C. 中低纬度近海平原地区", "D. 高原地区"], answer: "C", knowledgePoint: "世界人口分布", analysis: "世界人口稠密区主要分布在中低纬度近海平原地区。" }
    ]
  },
  {
    lesson: 20, title: "人口问题",
    questions: [
      { type: "choice", difficulty: "basic", text: "人口增长过慢可能导致的问题不包括：", options: ["A. 劳动力不足", "B. 人口老龄化", "C. 资源短缺", "D. 社会养老负担加重"], answer: "C", knowledgePoint: "人口增长过慢的问题", analysis: "资源短缺是人口增长过快导致的问题。" },
      { type: "choice", difficulty: "medium", text: "发达国家与发展中国家相比：", options: ["A. 发达国家人口增长更快", "B. 发展中国家人口增长更快", "C. 人口增长率相同", "D. 无法比较"], answer: "B", knowledgePoint: "人口增长差异", analysis: "发展中国家人口增长普遍较快。" },
      { type: "choice", difficulty: "hard", text: "关于人口迁移的说法正确的是：", options: ["A. 人口迁移就是人口流动", "B. 人口迁移一般指较长时期改变居住地", "C. 人口迁移对迁入地只有好处", "D. 经济发展水平是影响人口迁移的唯一因素"], answer: "B", knowledgePoint: "人口迁移概念", analysis: "人口迁移是较长时期改变居住地的行为。" }
    ]
  },
  {
    lesson: 21, title: "世界人种",
    questions: [
      { type: "choice", difficulty: "basic", text: "划分人种的主要依据是：", options: ["A. 居住地区", "B. 体质特征", "C. 语言文字", "D. 宗教信仰"], answer: "B", knowledgePoint: "人种划分依据", analysis: "人种划分主要依据体质特征。" },
      { type: "choice", difficulty: "medium", text: "黑色人种主要分布在：", options: ["A. 欧洲", "B. 北美洲", "C. 非洲撒哈拉以南地区", "D. 亚洲东部"], answer: "C", knowledgePoint: "人种分布", analysis: "黑色人种主要分布在非洲撒哈拉以南地区。" },
      { type: "choice", difficulty: "hard", text: "关于人种的说法正确的是：", options: ["A. 白人比黑人聪明", "B. 各人种有优劣之分", "C. 人种是自然形成的", "D. 人种永远不会变化"], answer: "C", knowledgePoint: "人种平等", analysis: "各人种都是平等的，人种是长期进化形成的。" }
    ]
  },
  {
    lesson: 22, title: "世界语言",
    questions: [
      { type: "choice", difficulty: "basic", text: "使用人数最多的语言是：", options: ["A. 英语", "B. 汉语", "C. 西班牙语", "D. 法语"], answer: "B", knowledgePoint: "世界主要语言", analysis: "汉语是世界上使用人数最多的语言。" },
      { type: "choice", difficulty: "medium", text: "联合国工作语言不包括：", options: ["A. 汉语", "B. 日语", "C. 俄语", "D. 阿拉伯语"], answer: "B", knowledgePoint: "联合国工作语言", analysis: "联合国工作语言有6种：汉语、英语、法语、俄语、西班牙语、阿拉伯语。" },
      { type: "choice", difficulty: "hard", text: "关于语言分布的说法正确的是：", options: ["A. 拉丁美洲主要使用英语", "B. 非洲北部主要使用阿拉伯语", "C. 西亚主要使用波斯语", "D. 南亚主要使用马来语"], answer: "B", knowledgePoint: "语言分布", analysis: "非洲北部主要使用阿拉伯语。" }
    ]
  },
  {
    lesson: 23, title: "世界宗教",
    questions: [
      { type: "choice", difficulty: "basic", text: "世界上信徒最多的宗教是：", options: ["A. 佛教", "B. 伊斯兰教", "C. 基督教", "D. 印度教"], answer: "C", knowledgePoint: "世界主要宗教", analysis: "基督教是世界上信徒最多的宗教。" },
      { type: "choice", difficulty: "medium", text: "佛教主要分布在：", options: ["A. 中东", "B. 北非", "C. 东亚、东南亚", "D. 西欧"], answer: "C", knowledgePoint: "宗教分布", analysis: "佛教主要分布在东亚和东南亚。" },
      { type: "choice", difficulty: "hard", text: "关于宗教的说法正确的是：", options: ["A. 宗教没有积极意义", "B. 宗教影响人们的生产生活", "C. 宗教不利于社会和谐", "D. 所有人都应该信同一种宗教"], answer: "B", knowledgePoint: "宗教的作用", analysis: "宗教影响着人们的价值观、生活习俗等。" }
    ]
  },
  {
    lesson: 24, title: "地球与地图专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "地球仪上经线和纬线的数量关系是：", options: ["A. 经线比纬线多", "B. 纬线比经线多", "C. 数量相等", "D. 无法确定"], answer: "D", knowledgePoint: "经纬线概念", analysis: "经线和纬线是理论上的线，无法直接比较多少。" },
      { type: "choice", difficulty: "medium", text: "等高线地形图上判断山脊的方法是：", options: ["A. 等高线向高处凸出", "B. 等高线向低处凸出", "C. 等高线闭合", "D. 等高线稀疏"], answer: "B", knowledgePoint: "等高线地形判读", analysis: "山脊等高线向低处凸出。" },
      { type: "choice", difficulty: "hard", text: "比例尺1:5000的地形图，比例尺大小：", options: ["A. 大于1:10000", "B. 小于1:10000", "C. 等于1:10000", "D. 无法比较"], answer: "A", knowledgePoint: "比例尺大小比较", analysis: "1/5000 > 1/10000，所以1:5000的比例尺更大。" }
    ]
  },
  {
    lesson: 25, title: "世界地理专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "跨经度最多的大洲是：", options: ["A. 亚洲", "B. 非洲", "C. 南极洲", "D. 美洲"], answer: "C", knowledgePoint: "大洲地理特征", analysis: "南极洲跨所有经度360°。" },
      { type: "choice", difficulty: "medium", text: "环太平洋火山地震带位于哪些板块交界处：", options: ["A. 太平洋板块与亚欧板块、印度洋板块", "B. 太平洋板块与南极洲板块、美洲板块、亚欧板块", "C. 亚欧板块与非洲板块", "D. 美洲板块与南极洲板块"], answer: "B", knowledgePoint: "世界火山地震带", analysis: "环太平洋火山地震带位于太平洋板块与多个板块交界处。" },
      { type: "choice", difficulty: "hard", text: "判断气候类型的正确方法是：", options: ["A. 只看气温曲线", "B. 只看降水量柱", "C. 综合分析气温和降水", "D. 只看纬度位置"], answer: "C", knowledgePoint: "气候类型判断", analysis: "判断气候类型需要综合分析气温和降水。" }
    ]
  },
  {
    lesson: 26, title: "综合练习（一）",
    questions: [
      { type: "choice", difficulty: "basic", text: "海拔每升高100米，气温下降约：", options: ["A. 0.6℃", "B. 6℃", "C. 0.6℃", "D. 60℃"], answer: "A", knowledgePoint: "气温垂直递减率", analysis: "海拔每升高100米，气温下降约0.6℃。" },
      { type: "choice", difficulty: "medium", text: "七大洲中面积最小的是：", options: ["A. 大洋洲", "B. 欧洲", "C. 南极洲", "D. 南美洲"], answer: "A", knowledgePoint: "大洲面积比较", analysis: "大洋洲是最小的大洲。" },
      { type: "choice", difficulty: "hard", text: "关于时区的说法正确的是：", options: ["A. 每个时区跨15个经度", "B. 相邻时区时间相差2小时", "C. 北京位于东八区", "D. 东西十二区时间相同"], answer: "C", knowledgePoint: "时区计算", analysis: "北京位于东八区。" }
    ]
  },
  {
    lesson: 27, title: "期中考试",
    questions: [
      { type: "choice", difficulty: "basic", text: "地球自转一周的时间是：", options: ["A. 一年", "B. 一天", "C. 一个月", "D. 一小时"], answer: "B", knowledgePoint: "地球自转", analysis: "地球自转一周的时间是一天。" },
      { type: "choice", difficulty: "medium", text: "下列国家中属于发达国家的是：", options: ["A. 中国", "B. 印度", "C. 日本", "D. 巴西"], answer: "C", knowledgePoint: "国家分类", analysis: "日本是发达国家。" },
      { type: "choice", difficulty: "hard", text: "关于板块运动的说法正确的是：", options: ["A. 板块静止不动", "B. 板块运动导致火山地震", "C. 板块运动速度很快", "D. 板块只有碰撞没有张裂"], answer: "B", knowledgePoint: "板块运动", analysis: "板块运动导致火山地震。" }
    ]
  },
  {
    lesson: 28, title: "亚洲概述",
    questions: [
      { type: "choice", difficulty: "basic", text: "亚洲的地形特点是：", options: ["A. 四周高、中间低", "B. 中间高、四周低", "C. 北高南低", "D. 南高北低"], answer: "B", knowledgePoint: "亚洲地形特点", analysis: "亚洲地形中间高、四周低。" },
      { type: "choice", difficulty: "medium", text: "亚洲气候特点是：", options: ["A. 以温带气候为主", "B. 气候类型单一", "C. 复杂多样、季风气候显著", "D. 以海洋性气候为主"], answer: "C", knowledgePoint: "亚洲气候特点", analysis: "亚洲气候复杂多样、季风气候显著。" },
      { type: "choice", difficulty: "hard", text: "亚洲河流分布的特点是：", options: ["A. 河流都流入太平洋", "B. 河流从四周流向中部", "C. 河流呈放射状流向四周", "D. 河流都流入北冰洋"], answer: "C", knowledgePoint: "亚洲河流分布", analysis: "亚洲河流呈放射状流向四周。" }
    ]
  },
  {
    lesson: 29, title: "东亚",
    questions: [
      { type: "choice", difficulty: "basic", text: "东亚不包括下列哪个国家：", options: ["A. 日本", "B. 韩国", "C. 蒙古", "D. 印度"], answer: "D", knowledgePoint: "东亚范围", analysis: "东亚包括中国、日本、韩国、朝鲜、蒙古。印度属于南亚。" },
      { type: "choice", difficulty: "medium", text: "东亚地区主要的气候类型是：", options: ["A. 温带大陆性气候", "B. 温带季风和亚热带季风气候", "C. 地中海气候", "D. 热带雨林气候"], answer: "B", knowledgePoint: "东亚气候", analysis: "东亚主要分布温带季风和亚热带季风气候。" },
      { type: "choice", difficulty: "hard", text: "关于东亚经济发展的说法正确的是：", options: ["A. 日本是发展中国家", "B. 蒙古以农业为主", "C. 韩国经济发达", "D. 朝鲜经济总量超过韩国"], answer: "C", knowledgePoint: "东亚经济", analysis: "韩国经济发达，是亚洲四小龙之一。" }
    ]
  },
  {
    lesson: 30, title: "东南亚",
    questions: [
      { type: "choice", difficulty: "basic", text: "东南亚包括中南半岛和：", options: ["A. 日本群岛", "B. 马来群岛", "C. 菲律宾群岛", "D. 千岛群岛"], answer: "B", knowledgePoint: "东南亚组成", analysis: "东南亚包括中南半岛和马来群岛。" },
      { type: "choice", difficulty: "medium", text: "东南亚被称为'十字路口'是因为它位于：", options: ["A. 亚洲和大洋洲之间、太平洋和印度洋之间", "B. 亚洲和非洲之间", "C. 欧洲和亚洲之间", "D. 北美洲和南美洲之间"], answer: "A", knowledgePoint: "东南亚地理位置", analysis: "东南亚位于亚洲和大洋洲之间，太平洋和印度洋之间。" },
      { type: "choice", difficulty: "hard", text: "东南亚主要粮食作物是水稻的主要原因是：", options: ["A. 当地人不爱吃面食", "B. 高温多雨的气候适宜水稻生长", "C. 水稻可以出口创汇", "D. 其他作物不适合在当地种植"], answer: "B", knowledgePoint: "东南亚农业", analysis: "东南亚高温多雨，适宜水稻生长。" }
    ]
  },
  {
    lesson: 31, title: "南亚",
    questions: [
      { type: "choice", difficulty: "basic", text: "南亚地区面积最大的国家是：", options: ["A. 巴基斯坦", "B. 孟加拉国", "C. 印度", "D. 尼泊尔"], answer: "C", knowledgePoint: "南亚国家", analysis: "印度是南亚面积最大的国家。" },
      { type: "choice", difficulty: "medium", text: "南亚主要气候类型是：", options: ["A. 热带雨林气候", "B. 热带季风气候", "C. 温带季风气候", "D. 地中海气候"], answer: "B", knowledgePoint: "南亚气候", analysis: "南亚主要是热带季风气候。" },
      { type: "choice", difficulty: "hard", text: "关于南亚河流的说法正确的是：", options: ["A. 印度河注入孟加拉湾", "B. 恒河注入阿拉伯海", "C. 两河都发源于喜马拉雅山脉", "D. 两河流域都是热带雨林气候"], answer: "C", knowledgePoint: "南亚河流", analysis: "恒河和印度河都发源于喜马拉雅山脉。" }
    ]
  },
  {
    lesson: 32, title: "西亚",
    questions: [
      { type: "choice", difficulty: "basic", text: "西亚'五海三洲之地'中的五海不包括：", options: ["A. 地中海", "B. 黑海", "C. 里海", "D. 波罗的海"], answer: "D", knowledgePoint: "西亚地理位置", analysis: "西亚的五海是地中海、红海、阿拉伯海、里海、黑海。" },
      { type: "choice", difficulty: "medium", text: "西亚地区最丰富的矿产资源是：", options: ["A. 铁矿", "B. 金矿", "C. 石油", "D. 煤矿"], answer: "C", knowledgePoint: "西亚资源", analysis: "西亚是世界上石油储量最丰富的地区。" },
      { type: "choice", difficulty: "hard", text: "关于西亚农业的说法正确的是：", options: ["A. 热带经济作物产量大", "B. 畜牧业是农业主要部门", "C. 水稻是主要粮食作物", "D. 全区降水充沛"], answer: "B", knowledgePoint: "西亚农业", analysis: "西亚畜牧业是农业主要部门。" }
    ]
  },
  {
    lesson: 33, title: "欧洲概述",
    questions: [
      { type: "choice", difficulty: "basic", text: "欧洲地形以什么为主：", options: ["A. 山地", "B. 平原", "C. 高原", "D. 盆地"], answer: "B", knowledgePoint: "欧洲地形", analysis: "欧洲地形以平原为主。" },
      { type: "choice", difficulty: "medium", text: "欧洲西部主要的气候类型是：", options: ["A. 温带大陆性气候", "B. 温带海洋性气候", "C. 地中海气候", "D. 寒带气候"], answer: "B", knowledgePoint: "欧洲气候", analysis: "欧洲西部以温带海洋性气候为主。" },
      { type: "choice", difficulty: "hard", text: "关于欧洲河流的说法正确的是：", options: ["A. 多瑙河注入黑海", "B. 莱茵河注入北海", "C. 河流无结冰期", "D. 河流短小水量小"], answer: "A", knowledgePoint: "欧洲河流", analysis: "多瑙河注入黑海。" }
    ]
  },
  {
    lesson: 34, title: "欧洲西部",
    questions: [
      { type: "choice", difficulty: "basic", text: "欧盟总部设在：", options: ["A. 伦敦", "B. 巴黎", "C. 布鲁塞尔", "D. 柏林"], answer: "C", knowledgePoint: "欧盟概况", analysis: "欧盟总部设在布鲁塞尔。" },
      { type: "choice", difficulty: "medium", text: "欧洲西部乳畜业发达的主要自然原因是：", options: ["A. 劳动力充足", "B. 气候温和多雨，适宜多汁牧草生长", "C. 地形崎岖", "D. 市场需求大"], answer: "B", knowledgePoint: "欧洲西部农业", analysis: "欧洲西部气候温和湿润，适宜多汁牧草生长。" },
      { type: "choice", difficulty: "hard", text: "关于欧洲西部旅游业的说法正确的是：", options: ["A. 自然景观单一", "B. 气候条件不适合旅游", "C. 是世界旅游业最发达的地区之一", "D. 没有世界遗产"], answer: "C", knowledgePoint: "欧洲西部旅游业", analysis: "欧洲西部是世界旅游业最发达的地区之一。" }
    ]
  },
  {
    lesson: 35, title: "非洲",
    questions: [
      { type: "choice", difficulty: "basic", text: "非洲有'高原大陆'之称，主要高原不包括：", options: ["A. 东非高原", "B. 南非高原", "C. 青藏高原", "D. 埃塞俄比亚高原"], answer: "C", knowledgePoint: "非洲地形", analysis: "青藏高原在亚洲。" },
      { type: "choice", difficulty: "medium", text: "非洲气候分布特点是：", options: ["A. 气候类型单一", "B. 以热带气候为主，南北对称分布", "C. 以温带气候为主", "D. 以寒带气候为主"], answer: "B", knowledgePoint: "非洲气候", analysis: "非洲气候以热带气候为主，南北对称分布。" },
      { type: "choice", difficulty: "hard", text: "关于非洲人口的分布，说法正确的是：", options: ["A. 人口均匀分布", "B. 北部沿海地区人口稠密", "C. 热带雨林区人口稠密", "D. 热带沙漠区人口稠密"], answer: "B", knowledgePoint: "非洲人口分布", analysis: "非洲北部沿海地区人口稠密。" }
    ]
  },
  {
    lesson: 36, title: "美洲",
    questions: [
      { type: "choice", difficulty: "basic", text: "美洲分南北两大部分，分界线是：", options: ["A. 苏伊士运河", "B. 巴拿马运河", "C. 白令海峡", "D. 德雷克海峡"], answer: "B", knowledgePoint: "美洲概况", analysis: "南北美洲的分界线是巴拿马运河。" },
      { type: "choice", difficulty: "medium", text: "世界最大的热带雨林分布在：", options: ["A. 东南亚", "B. 非洲刚果盆地", "C. 南美洲亚马逊平原", "D. 澳大利亚北部"], answer: "C", knowledgePoint: "世界热带雨林分布", analysis: "亚马逊平原分布着世界最大的热带雨林。" },
      { type: "choice", difficulty: "hard", text: "关于美洲地形的说法正确的是：", options: ["A. 北美洲地形以高原为主", "B. 科迪勒拉山系纵贯南美洲西部", "C. 阿巴拉契亚山脉在大陆西部", "D. 平原主要分布在东部"], answer: "B", knowledgePoint: "美洲地形", analysis: "科迪勒拉山系纵贯南美洲西部。" }
    ]
  },
  {
    lesson: 37, title: "大洋洲与南极洲",
    questions: [
      { type: "choice", difficulty: "basic", text: "世界上面积最小的大洲是：", options: ["A. 南极洲", "B. 欧洲", "C. 大洋洲", "D. 南美洲"], answer: "C", knowledgePoint: "大洲面积比较", analysis: "大洋洲是最小的大洲。" },
      { type: "choice", difficulty: "medium", text: "澳大利亚特有动物不包括：", options: ["A. 袋鼠", "B. 考拉", "C. 大熊猫", "D. 鸭嘴兽"], answer: "C", knowledgePoint: "澳大利亚生物", analysis: "大熊猫是中国特有的动物。" },
      { type: "choice", difficulty: "hard", text: "关于南极洲的说法正确的是：", options: ["A. 有丰富的煤炭资源", "B. 全年温和湿润", "C. 有企鹅和北极熊", "D. 是无人居住的大洲"], answer: "A", knowledgePoint: "南极洲概况", analysis: "南极洲有丰富的煤炭资源。" }
    ]
  },
  {
    lesson: 38, title: "区域地理专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "描述一个区域的自然环境，顺序正确的是：", options: ["A. 气候→地形→河流→位置", "B. 位置→地形→气候→河流", "C. 河流→地形→气候→位置", "D. 地形→位置→气候→河流"], answer: "B", knowledgePoint: "区域分析方法", analysis: "描述自然环境一般按位置→地形→气候→河流的顺序。" },
      { type: "choice", difficulty: "medium", text: "亚洲和欧洲共同濒临的大洋是：", options: ["A. 太平洋和北冰洋", "B. 太平洋和印度洋", "C. 印度洋和北冰洋", "D. 大西洋和北冰洋"], answer: "A", knowledgePoint: "大洲大洋位置", analysis: "亚洲和欧洲共同濒临太平洋和北冰洋。" },
      { type: "choice", difficulty: "hard", text: "关于世界区域比较，说法正确的是：", options: ["A. 欧洲比亚洲人口密度小", "B. 非洲比南美洲出口粮食多", "C. 北美洲比南美洲发达国家多", "D. 大洋洲比南极洲人口多"], answer: "C", knowledgePoint: "区域比较", analysis: "北美洲发达国家多。" }
    ]
  },
  {
    lesson: 39, title: "综合练习（二）",
    questions: [
      { type: "choice", difficulty: "basic", text: "地球公转产生的现象是：", options: ["A. 昼夜交替", "B. 四季变化", "C. 时间差异", "D. 日月星辰东升西落"], answer: "B", knowledgePoint: "地球公转", analysis: "地球公转产生四季变化。" },
      { type: "choice", difficulty: "medium", text: "下列属于可再生资源的是：", options: ["A. 天然气", "B. 水能", "C. 铜矿", "D. 铝土矿"], answer: "B", knowledgePoint: "资源分类", analysis: "水能是可再生资源。" },
      { type: "choice", difficulty: "hard", text: "关于时区计算的说法正确的是：", options: ["A. 东边时间比西边晚", "B. 每向东跨一个时区，时间加1小时", "C. 北京时间是东七区", "D. 国际日期变更线是0°经线"], answer: "B", knowledgePoint: "时区计算", analysis: "每向东跨一个时区，时间加1小时。" }
    ]
  },
  {
    lesson: 40, title: "第一学期期末考试",
    questions: [
      { type: "choice", difficulty: "basic", text: "地图的三要素是：", options: ["A. 比例尺、方向、图例", "B. 比例尺、方向、颜色", "C. 方向、图例、颜色", "D. 比例尺、图例、颜色"], answer: "A", knowledgePoint: "地图要素", analysis: "地图的三要素是比例尺、方向和图例。" },
      { type: "choice", difficulty: "medium", text: "世界上最大的大洋是：", options: ["A. 大西洋", "B. 印度洋", "C. 太平洋", "D. 北冰洋"], answer: "C", knowledgePoint: "大洋面积", analysis: "太平洋是世界上面积最大的大洋。" },
      { type: "choice", difficulty: "hard", text: "关于人口问题的说法正确的是：", options: ["A. 人口增长越快越好", "B. 人口增长越慢越好", "C. 人口增长应与资源环境相协调", "D. 人口增长与经济发展无关"], answer: "C", knowledgePoint: "人口问题", analysis: "人口增长应与资源环境相协调。" }
    ]
  },
  {
    lesson: 41, title: "中国的疆域",
    questions: [
      { type: "choice", difficulty: "basic", text: "中国领土面积约：", options: ["A. 960万平方千米", "B. 760万平方千米", "C. 1260万平方千米", "D. 1700万平方千米"], answer: "A", knowledgePoint: "中国疆域", analysis: "中国陆地面积约960万平方千米。" },
      { type: "choice", difficulty: "medium", text: "中国领土最南端是：", options: ["A. 漠河", "B. 曾母暗沙", "C. 帕米尔高原", "D. 黑龙江与乌苏里江交汇处"], answer: "B", knowledgePoint: "中国领土四至", analysis: "中国领土最南端是曾母暗沙。" },
      { type: "choice", difficulty: "hard", text: "中国东部濒临的海洋从北到南依次是：", options: ["A. 渤海、黄海、东海、南海", "B. 黄海、渤海、东海、南海", "C. 东海、黄海、渤海、南海", "D. 渤海、东海、黄海、南海"], answer: "A", knowledgePoint: "中国临海", analysis: "中国东部濒临的海洋从北到南依次是渤海、黄海、东海、南海。" }
    ]
  },
  {
    lesson: 42, title: "中国的行政区划",
    questions: [
      { type: "choice", difficulty: "basic", text: "中国共有省级行政区：", options: ["A. 32个", "B. 33个", "C. 34个", "D. 35个"], answer: "C", knowledgePoint: "中国行政区划", analysis: "中国共有34个省级行政区。" },
      { type: "choice", difficulty: "medium", text: "中国面积最大的省级行政区是：", options: ["A. 西藏自治区", "B. 新疆维吾尔自治区", "C. 内蒙古自治区", "D. 青海省"], answer: "B", knowledgePoint: "中国省级行政区", analysis: "新疆维吾尔自治区是中国面积最大的省级行政区。" },
      { type: "choice", difficulty: "hard", text: "关于中国行政区划的说法正确的是：", options: ["A. 直辖市只有北京和上海", "B. 香港是经济特区", "C. 澳门是特别行政区", "D. 台湾是一个省"], answer: "C", knowledgePoint: "中国行政区划", analysis: "澳门是特别行政区。" }
    ]
  },
  {
    lesson: 43, title: "中国的人口",
    questions: [
      { type: "choice", difficulty: "basic", text: "中国人口最多的省是：", options: ["A. 河南", "B. 山东", "C. 广东", "D. 四川"], answer: "C", knowledgePoint: "中国人口分布", analysis: "广东省是中国人口最多的省级行政区。" },
      { type: "choice", difficulty: "medium", text: "中国人口分布特点是：", options: ["A. 均匀分布", "B. 东多西少", "C. 南多北少", "D. 高原多平原少"], answer: "B", knowledgePoint: "中国人口分布", analysis: "中国人口分布特点是东多西少。" },
      { type: "choice", difficulty: "hard", text: "关于中国人口政策的说法正确的是：", options: ["A. 只允许生一个孩子", "B. 鼓励生育", "C. 人口政策根据国情调整", "D. 不控制人口增长"], answer: "C", knowledgePoint: "中国人口政策", analysis: "中国的人口政策会根据国情进行调整。" }
    ]
  },
  {
    lesson: 44, title: "中国的民族",
    questions: [
      { type: "choice", difficulty: "basic", text: "中国共有民族：", options: ["A. 54个", "B. 55个", "C. 56个", "D. 57个"], answer: "C", knowledgePoint: "中国民族", analysis: "中国共有56个民族。" },
      { type: "choice", difficulty: "medium", text: "少数民族主要分布在：", options: ["A. 东部沿海地区", "B. 东北、华北、西北地区", "C. 西南、西北、东北等边疆地区", "D. 各大城市"], answer: "C", knowledgePoint: "中国民族分布", analysis: "少数民族主要分布在西南、西北、东北等边疆地区。" },
      { type: "choice", difficulty: "hard", text: "关于中国民族政策的说法正确的是：", options: ["A. 少数民族享有特权", "B. 各民族地位平等", "C. 只保护汉族文化", "D. 强制少数民族改变信仰"], answer: "B", knowledgePoint: "中国民族政策", analysis: "中国坚持各民族一律平等的原则。" }
    ]
  },
  {
    lesson: 45, title: "中国的地形",
    questions: [
      { type: "choice", difficulty: "basic", text: "中国地势特点是：", options: ["A. 东高西低", "B. 西高东低", "C. 南高北低", "D. 北高南低"], answer: "B", knowledgePoint: "中国地势", analysis: "中国地势西高东低。" },
      { type: "choice", difficulty: "medium", text: "第二级阶梯主要地形是：", options: ["A. 高原和平原", "B. 高原和盆地", "C. 平原和丘陵", "D. 山地和平原"], answer: "B", knowledgePoint: "中国地形分布", analysis: "第二级阶梯主要包括高原和盆地。" },
      { type: "choice", difficulty: "hard", text: "关于中国山脉走向的说法正确的是：", options: ["A. 东西走向山脉只有秦岭", "B. 东北-西南走向山脉包括太行山、武夷山", "C. 喜马拉雅山脉是南北走向", "D. 南北走向山脉只有横断山脉"], answer: "B", knowledgePoint: "中国山脉分布", analysis: "东北-西南走向山脉包括太行山、武夷山。" }
    ]
  },
  {
    lesson: 46, title: "中国的气候",
    questions: [
      { type: "choice", difficulty: "basic", text: "中国气候特点是：", options: ["A. 气候单一", "B. 季风气候显著", "C. 以海洋性气候为主", "D. 无季风气候"], answer: "B", knowledgePoint: "中国气候特点", analysis: "中国气候复杂多样、季风气候显著。" },
      { type: "choice", difficulty: "medium", text: "秦岭-淮河一线是：", options: ["A. 暖温带与亚热带分界线", "B. 干旱区与半干旱区分界线", "C. 季风区与非季风区分界线", "D. 地势第一二级阶梯分界线"], answer: "A", knowledgePoint: "秦岭-淮河地理意义", analysis: "秦岭-淮河一线是暖温带与亚热带分界线。" },
      { type: "choice", difficulty: "hard", text: "关于中国季风的说法正确的是：", options: ["A. 夏季风来自陆地", "B. 冬季风来自海洋", "C. 夏季风带来丰沛降水", "D. 冬季风比夏季风温暖"], answer: "C", knowledgePoint: "中国季风", analysis: "夏季风来自太平洋和印度洋，带来丰沛降水。" }
    ]
  },
  {
    lesson: 47, title: "中国的河流",
    questions: [
      { type: "choice", difficulty: "basic", text: "中国第一长河是：", options: ["A. 黄河", "B. 长江", "C. 珠江", "D. 淮河"], answer: "B", knowledgePoint: "中国主要河流", analysis: "长江是中国第一长河。" },
      { type: "choice", difficulty: "medium", text: "长江和黄河共同发源于：", options: ["A. 云贵高原", "B. 青藏高原", "C. 内蒙古高原", "D. 黄土高原"], answer: "B", knowledgePoint: "中国河流发源地", analysis: "长江和黄河都发源于青藏高原。" },
      { type: "choice", difficulty: "hard", text: "关于长江的说法正确的是：", options: ["A. 流经地区全部属于湿润区", "B. 中游地上河", "C. 上游水能资源丰富", "D. 注入渤海"], answer: "C", knowledgePoint: "长江特征", analysis: "长江上游水能资源丰富。" }
    ]
  },
  {
    lesson: 48, title: "中国的自然资源",
    questions: [
      { type: "choice", difficulty: "basic", text: "下列属于可再生资源的是：", options: ["A. 煤炭", "B. 石油", "C. 森林", "D. 铁矿"], answer: "C", knowledgePoint: "自然资源分类", analysis: "森林是可再生资源。" },
      { type: "choice", difficulty: "medium", text: "中国水资源分布特点是：", options: ["A. 南多北少", "B. 东多西少", "C. 分布均匀", "D. 北多南少"], answer: "A", knowledgePoint: "中国水资源分布", analysis: "中国水资源分布特点是南多北少。" },
      { type: "choice", difficulty: "hard", text: "关于中国矿产资源的说法正确的是：", options: ["A. 煤炭主要分布在南方", "B. 石油主要分布在东部沿海", "C. 有色金属主要分布在南方", "D. 矿产资源丰富，人均充足"], answer: "C", knowledgePoint: "中国矿产资源分布", analysis: "有色金属主要分布在南方。" }
    ]
  },
  {
    lesson: 49, title: "中国的农业",
    questions: [
      { type: "choice", difficulty: "basic", text: "中国农业分布的说法正确的是：", options: ["A. 水田主要分布在北方", "B. 旱地主要分布在南方", "C. 水田主要分布在秦岭-淮河以南", "D. 牧区主要分布在东部平原"], answer: "C", knowledgePoint: "中国农业分布", analysis: "水田主要分布在秦岭-淮河以南。" },
      { type: "choice", difficulty: "medium", text: "四大牧区不包括：", options: ["A. 内蒙古牧区", "B. 新疆牧区", "C. 青海牧区", "D. 山东牧区"], answer: "D", knowledgePoint: "中国牧区分布", analysis: "四大牧区是内蒙古、新疆、青海、西藏牧区。" },
      { type: "choice", difficulty: "hard", text: "关于因地制宜发展农业的说法正确的是：", options: ["A. 所有土地都适合耕种", "B. 平原应大力发展林业", "C. 草原应发展畜牧业", "D. 水域应发展种植业"], answer: "C", knowledgePoint: "农业发展原则", analysis: "草原应发展畜牧业。" }
    ]
  },
  {
    lesson: 50, title: "中国的工业",
    questions: [
      { type: "choice", difficulty: "basic", text: "中国最大的综合性工业基地是：", options: ["A. 辽中南工业基地", "B. 京津唐工业基地", "C. 沪宁杭工业基地", "D. 珠江三角洲工业基地"], answer: "C", knowledgePoint: "中国工业基地", analysis: "沪宁杭工业基地是中国最大的综合性工业基地。" },
      { type: "choice", difficulty: "medium", text: "中国高新技术产业主要分布在：", options: ["A. 中小城市", "B. 广大农村", "C. 大中城市和大江大河沿岸", "D. 边疆地区"], answer: "C", knowledgePoint: "中国高新技术产业分布", analysis: "高新技术产业主要分布在大中城市和大江大河沿岸。" },
      { type: "choice", difficulty: "hard", text: "关于中国工业分布特点的说法正确的是：", options: ["A. 均匀分布", "B. 主要分布在沿海、沿江、沿铁路干线", "C. 主要分布在内陆", "D. 主要分布在高原地区"], answer: "B", knowledgePoint: "中国工业分布特点", analysis: "中国工业主要分布在沿海、沿江、沿铁路干线。" }
    ]
  },
  {
    lesson: 51, title: "中国的交通",
    questions: [
      { type: "choice", difficulty: "basic", text: "中国最重要的交通运输方式是：", options: ["A. 公路", "B. 铁路", "C. 水运", "D. 航空"], answer: "B", knowledgePoint: "中国交通运输", analysis: "铁路是中国最重要的交通运输方式。" },
      { type: "choice", difficulty: "medium", text: "世界上海拔最高的铁路是：", options: ["A. 京沪高铁", "B. 青藏铁路", "C. 成昆铁路", "D. 兰新铁路"], answer: "B", knowledgePoint: "中国著名铁路", analysis: "青藏铁路是世界上海拔最高的铁路。" },
      { type: "choice", difficulty: "hard", text: "关于长江航道的说法正确的是：", options: ["A. 全年不结冰", "B. 宜宾以下可通航", "C. 是世界通航里程最长的河流", "D. 通航能力受地形影响大"], answer: "A", knowledgePoint: "长江航运", analysis: "长江全年基本不结冰。" }
    ]
  },
  {
    lesson: 52, title: "中国的城市",
    questions: [
      { type: "choice", difficulty: "basic", text: "中国城市分布特点是：", options: ["A. 均匀分布", "B. 主要在东部沿海和平原地区", "C. 主要在西部高原地区", "D. 主要在边疆地区"], answer: "B", knowledgePoint: "中国城市分布", analysis: "中国城市主要分布在东部沿海和平原地区。" },
      { type: "choice", difficulty: "medium", text: "不属于中国三大城市群的是：", options: ["A. 长三角城市群", "B. 珠三角城市群", "C. 京津冀城市群", "D. 成渝城市群"], answer: "D", knowledgePoint: "中国城市群", analysis: "三大城市群是长三角、珠三角、京津冀。" },
      { type: "choice", difficulty: "hard", text: "关于城市化的说法正确的是：", options: ["A. 城市化就是农村变为城市", "B. 城市化只有好处没有坏处", "C. 城市化是人口向城市集中的过程", "D. 城市化不需要规划"], answer: "C", knowledgePoint: "城市化概念", analysis: "城市化是人口向城市集中的过程。" }
    ]
  },
  {
    lesson: 53, title: "期中复习（中国地理）",
    questions: [
      { type: "choice", difficulty: "basic", text: "中国领土面积约：", options: ["A. 960万平方千米", "B. 760万平方千米", "C. 1260万平方千米", "D. 1700万平方千米"], answer: "A", knowledgePoint: "中国疆域", analysis: "中国陆地面积约960万平方千米。" },
      { type: "choice", difficulty: "medium", text: "中国地势的三级阶梯分界线不包括：", options: ["A. 昆仑山-祁连山-横断山脉", "B. 大兴安岭-太行山-巫山-雪峰山", "C. 秦岭-淮河", "D. 以上都不是"], answer: "C", knowledgePoint: "中国地势分界线", analysis: "秦岭-淮河是气候分界线。" },
      { type: "choice", difficulty: "hard", text: "关于中国气候的说法正确的是：", options: ["A. 夏季全国普遍高温", "B. 冬季南北温差小", "C. 降水分布均匀", "D. 气候类型单一"], answer: "A", knowledgePoint: "中国气候", analysis: "中国夏季除青藏高原外，全国普遍高温。" }
    ]
  },
  {
    lesson: 54, title: "综合练习（中国地理）",
    questions: [
      { type: "choice", difficulty: "basic", text: "中国人口最多的省是：", options: ["A. 河南", "B. 山东", "C. 广东", "D. 四川"], answer: "C", knowledgePoint: "中国人口分布", analysis: "广东省是中国人口最多的省级行政区。" },
      { type: "choice", difficulty: "medium", text: "中国最长的河流是：", options: ["A. 黄河", "B. 长江", "C. 珠江", "D. 黑龙江"], answer: "B", knowledgePoint: "中国河流", analysis: "长江全长6300多千米，是中国第一长河。" },
      { type: "choice", difficulty: "hard", text: "关于中国农业的说法正确的是：", options: ["A. 北方以水田为主", "B. 南方以旱地为主", "C. 秦岭-淮河是水田与旱地的分界线", "D. 四大牧区都在东部"], answer: "C", knowledgePoint: "中国农业分布", analysis: "秦岭-淮河是水田与旱地的分界线。" }
    ]
  },
  {
    lesson: 55, title: "第二学期期中考试",
    questions: [
      { type: "choice", difficulty: "basic", text: "中国的首都是：", options: ["A. 上海", "B. 北京", "C. 广州", "D. 深圳"], answer: "B", knowledgePoint: "中国首都", analysis: "北京是中华人民共和国的首都。" },
      { type: "choice", difficulty: "medium", text: "中国地势第二级阶梯的主要地形是：", options: ["A. 高原和盆地", "B. 平原和丘陵", "C. 山地和高原", "D. 平原和高原"], answer: "A", knowledgePoint: "中国地形", analysis: "第二级阶梯主要包括高原和盆地。" },
      { type: "choice", difficulty: "hard", text: "关于中国气候的说法正确的是：", options: ["A. 冬季风来自海洋", "B. 夏季风带来丰沛降水", "C. 季风气候不显著", "D. 气候类型单一"], answer: "B", knowledgePoint: "中国气候", analysis: "夏季风带来丰沛降水。" }
    ]
  },
  {
    lesson: 56, title: "人类活动与气候",
    questions: [
      { type: "choice", difficulty: "basic", text: "全球气候变暖的主要原因是：", options: ["A. 太阳活动增强", "B. 火山喷发", "C. 人类排放温室气体", "D. 地球轨道变化"], answer: "C", knowledgePoint: "气候变化原因", analysis: "人类活动排放大量温室气体导致气候变暖。" },
      { type: "choice", difficulty: "medium", text: "温室效应增强会导致：", options: ["A. 冰川增加", "B. 海平面下降", "C. 冰川融化、海平面上升", "D. 气候变冷"], answer: "C", knowledgePoint: "气候变暖影响", analysis: "温室效应增强导致冰川融化、海平面上升。" },
      { type: "choice", difficulty: "hard", text: "应对气候变暖的措施不包括：", options: ["A. 减少化石燃料使用", "B. 大量砍伐森林", "C. 发展清洁能源", "D. 植树造林"], answer: "B", knowledgePoint: "应对气候变化", analysis: "大量砍伐森林会加剧气候变暖。" }
    ]
  },
  {
    lesson: 57, title: "自然资源与可持续发展",
    questions: [
      { type: "choice", difficulty: "basic", text: "可持续发展的含义是：", options: ["A. 只顾当代人发展", "B. 只顾后代人发展", "C. 既满足当代人需求又不损害后代人需求", "D. 不需要发展"], answer: "C", knowledgePoint: "可持续发展概念", analysis: "可持续发展兼顾当代人和后代人的需求。" },
      { type: "choice", difficulty: "medium", text: "不属于可持续发展原则的是：", options: ["A. 公平性原则", "B. 持续性原则", "C. 绝对性原则", "D. 共同性原则"], answer: "C", knowledgePoint: "可持续发展原则", analysis: "可持续发展原则包括公平性、持续性、共同性。" },
      { type: "choice", difficulty: "hard", text: "关于节约资源的说法正确的是：", options: ["A. 资源是取之不尽的", "B. 节约资源只对个人有意义", "C. 节约用水用电是每个人的责任", "D. 发达国家不需要节约资源"], answer: "C", knowledgePoint: "资源节约", analysis: "节约资源是每个人的责任。" }
    ]
  },
  {
    lesson: 58, title: "城市与环境",
    questions: [
      { type: "choice", difficulty: "basic", text: "城市化过程中产生的问题不包括：", options: ["A. 交通拥堵", "B. 环境污染", "C. 人口老龄化", "D. 住房紧张"], answer: "C", knowledgePoint: "城市化问题", analysis: "人口老龄化与出生率下降有关，不是城市化直接导致的。" },
      { type: "choice", difficulty: "medium", text: "解决城市交通拥堵的措施是：", options: ["A. 增加私家车", "B. 优先发展公共交通", "C. 限制公共交通", "D. 减少道路建设"], answer: "B", knowledgePoint: "城市交通问题解决", analysis: "优先发展公共交通可以缓解交通拥堵。" },
      { type: "choice", difficulty: "hard", text: "关于生态城市的说法正确的是：", options: ["A. 生态城市就是森林城市", "B. 生态城市注重人与自然和谐", "C. 生态城市不需要发展经济", "D. 生态城市不需要交通"], answer: "B", knowledgePoint: "生态城市概念", analysis: "生态城市注重人与自然和谐。" }
    ]
  },
  {
    lesson: 59, title: "地理信息技术",
    questions: [
      { type: "choice", difficulty: "basic", text: "GPS的全称是：", options: ["A. 地理信息系统", "B. 全球定位系统", "C. 遥感技术", "D. 数字地球"], answer: "B", knowledgePoint: "地理信息技术", analysis: "GPS是全球定位系统的缩写。" },
      { type: "choice", difficulty: "medium", text: "查询公交路线的地图应用主要运用了：", options: ["A. GPS技术", "B. GIS技术", "C. RS技术", "D. 三者都不是"], answer: "B", knowledgePoint: "GIS应用", analysis: "GIS可以存储、分析、管理地理数据。" },
      { type: "choice", difficulty: "hard", text: "关于3S技术的说法正确的是：", options: ["A. GPS、GIS、RS是3S技术", "B. 三种技术互不相关", "C. 三种技术不能结合使用", "D. RS可以替代GPS"], answer: "A", knowledgePoint: "3S技术", analysis: "3S技术是GPS、GIS、RS的合称。" }
    ]
  },
  {
    lesson: 60, title: "地图专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "等高线图中判断坡度陡缓的依据是：", options: ["A. 等高线数值", "B. 等高线疏密", "C. 等高线颜色", "D. 等高线形状"], answer: "B", knowledgePoint: "等高线判读", analysis: "等高线越密集表示坡度越陡。" },
      { type: "choice", difficulty: "medium", text: "地图上方向的判断顺序是：", options: ["A. 先经纬网后指向标", "B. 先指向标后经纬网", "C. 任意顺序", "D. 没有先后"], answer: "B", knowledgePoint: "地图方向判断", analysis: "有指向标的地图先按指向标判断方向。" },
      { type: "choice", difficulty: "hard", text: "关于比例尺的选择，说法正确的是：", options: ["A. 表示范围越大，比例尺应越大", "B. 表示范围越小，比例尺应越小", "C. 表示范围越大，比例尺应越小", "D. 比例尺选择与表示范围无关"], answer: "C", knowledgePoint: "比例尺选择", analysis: "表示范围越大，需要的比例尺越小。" }
    ]
  },
  {
    lesson: 61, title: "气候专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "影响气候的最基本因素是：", options: ["A. 纬度位置", "B. 海陆位置", "C. 地形因素", "D. 洋流因素"], answer: "A", knowledgePoint: "影响气候因素", analysis: "纬度位置决定了各地获得太阳辐射的多少。" },
      { type: "choice", difficulty: "medium", text: "山地的迎风坡降水多的主要原因是：", options: ["A. 气温高", "B. 空气抬升冷却", "C. 风力大", "D. 日照多"], answer: "B", knowledgePoint: "地形与降水", analysis: "空气被迫抬升，气温降低，水汽凝结形成降水。" },
      { type: "choice", difficulty: "hard", text: "判断气候类型的正确顺序是：", options: ["A. 降水→气温→确定温度带→确定气候类型", "B. 气温→降水→确定温度带→确定气候类型", "C. 地形→气温→降水→确定气候类型", "D. 三者没有先后顺序"], answer: "B", knowledgePoint: "气候类型判断方法", analysis: "先根据气温确定温度带，再根据降水确定气候类型。" }
    ]
  },
  {
    lesson: 62, title: "区域分析专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "分析一个区域的自然环境，一般不包括：", options: ["A. 位置", "B. 地形", "C. 经济发展水平", "D. 气候"], answer: "C", knowledgePoint: "区域分析要素", analysis: "经济发展水平属于人文环境分析。" },
      { type: "choice", difficulty: "medium", text: "区域发展的有利条件不包括：", options: ["A. 资源丰富", "B. 交通便利", "C. 劳动力不足", "D. 政策支持"], answer: "C", knowledgePoint: "区域发展条件", analysis: "劳动力不足是不利条件。" },
      { type: "choice", difficulty: "hard", text: "关于区域比较的说法正确的是：", options: ["A. 只能比较自然要素", "B. 只能比较人文要素", "C. 可以综合比较自然和人文要素", "D. 不需要比较"], answer: "C", knowledgePoint: "区域比较方法", analysis: "区域比较可以综合比较自然和人文要素。" }
    ]
  },
  {
    lesson: 63, title: "综合题专题",
    questions: [
      { type: "choice", difficulty: "basic", text: "读图时第一步应该：", options: ["A. 直接看问题", "B. 看图例和注记", "C. 猜测答案", "D. 跳过读图"], answer: "B", knowledgePoint: "读图方法", analysis: "读图时首先要看图名、图例和注记。" },
      { type: "choice", difficulty: "medium", text: "做综合题时，答题要：", options: ["A. 越简洁越好", "B. 分点回答", "C. 只写结论", "D. 越详细越好"], answer: "B", knowledgePoint: "综合题答题方法", analysis: "综合题答题要分点回答，条理清晰。" },
      { type: "choice", difficulty: "hard", text: "做开放性试题时，说法正确的是：", options: ["A. 可以随意回答", "B. 不需要结合知识", "C. 言之有理即可", "D. 只有唯一答案"], answer: "C", knowledgePoint: "开放性试题答题", analysis: "开放性试题没有唯一答案，但需要结合所学知识。" }
    ]
  },
  {
    lesson: 64, title: "基础知识回顾",
    questions: [
      { type: "choice", difficulty: "basic", text: "地球形状的正确描述是：", options: ["A. 正球体", "B. 椭球体", "C. 梨形", "D. 圆柱体"], answer: "B", knowledgePoint: "地球形状", analysis: "地球是两极稍扁、赤道略鼓的不规则椭球体。" },
      { type: "choice", difficulty: "medium", text: "关于中国地势的说法正确的是：", options: ["A. 西高东低，呈阶梯状", "B. 东高西低，呈阶梯状", "C. 北高南低", "D. 南高北低"], answer: "A", knowledgePoint: "中国地势", analysis: "中国地势西高东低，呈三级阶梯状分布。" },
      { type: "choice", difficulty: "hard", text: "关于板块构造学说的说法正确的是：", options: ["A. 板块内部比交界处稳定", "B. 板块交界处不会发生地震", "C. 板块会停止运动", "D. 世界上只有四大板块"], answer: "A", knowledgePoint: "板块构造学说", analysis: "板块内部相对稳定，板块交界处地壳活跃。" }
    ]
  },
  {
    lesson: 65, title: "知识体系构建",
    questions: [
      { type: "choice", difficulty: "basic", text: "思维导图的作用是：", options: ["A. 代替笔记", "B. 帮助整理和记忆知识", "C. 增加学习负担", "D. 装饰作用"], answer: "B", knowledgePoint: "学习方法", analysis: "思维导图可以帮助整理知识结构。" },
      { type: "choice", difficulty: "medium", text: "跨章节复习的意义是：", options: ["A. 没有意义", "B. 加深知识联系", "C. 增加学习难度", "D. 浪费时间"], answer: "B", knowledgePoint: "复习方法", analysis: "跨章节复习可以加深知识联系。" },
      { type: "choice", difficulty: "hard", text: "关于知识串联的说法正确的是：", options: ["A. 知识点是孤立的", "B. 知识点之间没有联系", "C. 知识点可以形成知识链", "D. 不需要串联"], answer: "C", knowledgePoint: "知识关联", analysis: "地理知识之间存在密切联系，可以形成知识链。" }
    ]
  },
  {
    lesson: 66, title: "易错点与常见错误",
    questions: [
      { type: "choice", difficulty: "basic", text: "经线和纬线的关系，正确的是：", options: ["A. 经线平行", "B. 纬线相交", "C. 经线指示南北", "D. 纬线长度相等"], answer: "C", knowledgePoint: "经纬线特点", analysis: "经线连接南北两极，指示南北方向。" },
      { type: "choice", difficulty: "medium", text: "关于天气与气候的说法正确的是：", options: ["A. 今天下雨是气候", "B. 昆明四季如春是天气", "C. 北京夏季多雨是气候", "D. 无法区分"], answer: "C", knowledgePoint: "天气与气候区别", analysis: "天气是短时间的，气候是长期的平均状况。" },
      { type: "choice", difficulty: "hard", text: "等高线地形图判读，说法正确的是：", options: ["A. 山谷和山脊等高线形态相同", "B. 等高线稀疏表示陡坡", "C. 陡崖处等高线重合", "D. 盆地和山顶等高线形态相同"], answer: "C", knowledgePoint: "等高线判读", analysis: "陡崖处等高线重合。" }
    ]
  },
  {
    lesson: 67, title: "模拟考试（一）",
    questions: [
      { type: "choice", difficulty: "basic", text: "世界上面积最大的大洲是：", options: ["A. 非洲", "B. 北美洲", "C. 亚洲", "D. 南美洲"], answer: "C", knowledgePoint: "大洲面积", analysis: "亚洲是世界上面积最大的大洲。" },
      { type: "choice", difficulty: "medium", text: "中国地势特点是：", options: ["A. 东高西低", "B. 西高东低", "C. 南高北低", "D. 北高南低"], answer: "B", knowledgePoint: "中国地势", analysis: "中国地势西高东低。" },
      { type: "choice", difficulty: "hard", text: "关于气候类型的分布，说法正确的是：", options: ["A. 地中海气候只分布在欧洲", "B. 热带雨林气候只分布在赤道附近", "C. 温带季风气候主要分布在亚欧大陆东岸", "D. 热带草原气候只分布在非洲"], answer: "C", knowledgePoint: "气候分布", analysis: "温带季风气候主要分布在亚欧大陆东岸。" }
    ]
  },
  {
    lesson: 68, title: "模拟考试（二）",
    questions: [
      { type: "choice", difficulty: "basic", text: "板块构造学说认为，板块交界处：", options: ["A. 地壳稳定", "B. 地壳活跃，多火山地震", "C. 地形平坦", "D. 气候温和"], answer: "B", knowledgePoint: "板块构造", analysis: "板块交界处地壳运动活跃，多火山地震。" },
      { type: "choice", difficulty: "medium", text: "中国人口分布特点是：", options: ["A. 均匀分布", "B. 东多西少", "C. 南多北少", "D. 高原多平原少"], answer: "B", knowledgePoint: "中国人口分布", analysis: "中国人口分布特点是东多西少。" },
      { type: "choice", difficulty: "hard", text: "关于可持续发展的说法正确的是：", options: ["A. 只考虑当代人的需求", "B. 只考虑后代人的需求", "C. 既满足当代人需求又不损害后代人需求", "D. 不需要发展"], answer: "C", knowledgePoint: "可持续发展", analysis: "可持续发展兼顾当代人和后代人的需求。" }
    ]
  },
  {
    lesson: 69, title: "考前答疑",
    questions: [
      { type: "choice", difficulty: "basic", text: "地球自转产生的现象是：", options: ["A. 四季变化", "B. 昼夜交替", "C. 五带划分", "D. 昼夜长短变化"], answer: "B", knowledgePoint: "地球自转", analysis: "地球自转产生昼夜交替现象。" },
      { type: "choice", difficulty: "medium", text: "下列属于可再生资源的是：", options: ["A. 煤炭", "B. 石油", "C. 太阳能", "D. 铁矿"], answer: "C", knowledgePoint: "资源分类", analysis: "太阳能是可再生资源。" },
      { type: "choice", difficulty: "hard", text: "关于等高线地形图的判读，说法正确的是：", options: ["A. 等高线越密集坡度越缓", "B. 等高线向高处凸出是山脊", "C. 等高线闭合中间高是山顶", "D. 等高线稀疏坡度越陡"], answer: "C", knowledgePoint: "等高线判读", analysis: "等高线闭合中间高是山顶。" }
    ]
  },
  {
    lesson: 70, title: "毕业考试",
    questions: [
      { type: "choice", difficulty: "basic", text: "地图的三要素是：", options: ["A. 比例尺、方向、图例", "B. 比例尺、方向、颜色", "C. 方向、图例、颜色", "D. 比例尺、图例、颜色"], answer: "A", knowledgePoint: "地图要素", analysis: "地图的三要素是比例尺、方向和图例。" },
      { type: "choice", difficulty: "medium", text: "世界上最大的平原是：", options: ["A. 西西伯利亚平原", "B. 亚马逊平原", "C. 华北平原", "D. 东欧平原"], answer: "B", knowledgePoint: "世界地形", analysis: "亚马逊平原是世界上最大的平原。" },
      { type: "choice", difficulty: "hard", text: "关于中国气候的说法正确的是：", options: ["A. 冬季南北温差小", "B. 夏季全国普遍高温", "C. 降水分布均匀", "D. 气候类型单一"], answer: "B", knowledgePoint: "中国气候", analysis: "中国夏季除青藏高原外，全国普遍高温。" }
    ]
  },
  {
    lesson: 71, title: "成绩分析",
    questions: [
      { type: "choice", difficulty: "basic", text: "考试成绩分析的目的是：", options: ["A. 批评学生", "B. 了解学习情况，找出不足", "C. 排名次", "D. 增加压力"], answer: "B", knowledgePoint: "成绩分析", analysis: "成绩分析的目的是了解学习情况，找出知识薄弱环节。" },
      { type: "choice", difficulty: "medium", text: "地理学习的关键是：", options: ["A. 死记硬背", "B. 多看地图，理解原理", "C. 只做选择题", "D. 不看课本"], answer: "B", knowledgePoint: "学习方法", analysis: "地理学习的关键是多看地图，理解地理原理。" },
      { type: "choice", difficulty: "hard", text: "关于错题分析的说法正确的是：", options: ["A. 只看答案不分析原因", "B. 找出错误原因，避免再犯", "C. 错题不用管", "D. 错题太多就放弃"], answer: "B", knowledgePoint: "学习策略", analysis: "错题分析要找出错误原因，避免以后再犯。" }
    ]
  },
  {
    lesson: 72, title: "地理实践活动",
    questions: [
      { type: "choice", difficulty: "basic", text: "绘制校园平面图需要的工具不包括：", options: ["A. 尺子", "B. 指南针", "C. 计算器", "D. 纸张"], answer: "C", knowledgePoint: "实践活动", analysis: "绘制校园平面图不需要计算器。" },
      { type: "choice", difficulty: "medium", text: "天气观测记录的内容不包括：", options: ["A. 气温", "B. 风向", "C. 心情", "D. 云量"], answer: "C", knowledgePoint: "天气观测", analysis: "心情不属于天气要素。" },
      { type: "choice", difficulty: "hard", text: "制作地形模型的正确步骤是：", options: ["A. 先上色后塑形", "B. 先确定等高线再塑形", "C. 随意塑形", "D. 不需要参考等高线"], answer: "B", knowledgePoint: "模型制作", analysis: "制作地形模型应先根据等高线图确定地形起伏。" }
    ]
  },
  {
    lesson: 73, title: "地理与生活",
    questions: [
      { type: "choice", difficulty: "basic", text: "南方人爱吃米饭，北方人爱吃面食的主要原因是：", options: ["A. 口味不同", "B. 气候不同，农作物不同", "C. 经济水平不同", "D. 历史原因"], answer: "B", knowledgePoint: "饮食与地理", analysis: "南方气候湿润适合种植水稻，北方适合种植小麦。" },
      { type: "choice", difficulty: "medium", text: "阿拉伯人喜欢穿白色长袍的原因是：", options: ["A. 白色好看", "B. 白色反射阳光，凉爽", "C. 传统习惯", "D. 布料便宜"], answer: "B", knowledgePoint: "服饰与地理", analysis: "白色反射阳光，可以减少热量吸收。" },
      { type: "choice", difficulty: "hard", text: "关于地理与旅游的说法正确的是：", options: ["A. 旅游和地理无关", "B. 地理知识可以帮助规划旅游路线", "C. 旅游只需要有钱", "D. 旅游不需要了解目的地"], answer: "B", knowledgePoint: "旅游地理", analysis: "地理知识可以帮助了解目的地的气候、地形等。" }
    ]
  },
  {
    lesson: 74, title: "探险家的故事",
    questions: [
      { type: "choice", difficulty: "basic", text: "麦哲伦的贡献是：", options: ["A. 发现美洲", "B. 完成环球航行", "C. 到达印度", "D. 到达北极"], answer: "B", knowledgePoint: "探险历史", analysis: "麦哲伦率领船队完成了人类历史上首次环球航行。" },
      { type: "choice", difficulty: "medium", text: "马可·波罗的著作是：", options: ["A. 《大唐西域记》", "B. 《马可·波罗游记》", "C. 《徐霞客游记》", "D. 《游记》"], answer: "B", knowledgePoint: "探险历史", analysis: "马可·波罗的《马可·波罗游记》描述了他在中国的见闻。" },
      { type: "choice", difficulty: "hard", text: "探险精神的核心是：", options: ["A. 冒险", "B. 勇气、毅力、智慧", "C. 只追求财富", "D. 不顾危险"], answer: "B", knowledgePoint: "探险精神", analysis: "探险精神包括勇气、毅力、智慧。" }
    ]
  },
  {
    lesson: 75, title: "地理竞赛",
    questions: [
      { type: "choice", difficulty: "basic", text: "地理竞赛的题型不包括：", options: ["A. 选择题", "B. 判断题", "C. 作文题", "D. 读图题"], answer: "C", knowledgePoint: "竞赛题型", analysis: "地理竞赛一般不考作文题。" },
      { type: "choice", difficulty: "medium", text: "参加地理竞赛的好处是：", options: ["A. 增加压力", "B. 拓展知识，锻炼能力", "C. 浪费时间", "D. 影响正常学习"], answer: "B", knowledgePoint: "竞赛意义", analysis: "参加地理竞赛可以拓展知识面，锻炼思维能力。" },
      { type: "choice", difficulty: "hard", text: "竞赛答题技巧不包括：", options: ["A. 仔细审题", "B. 先易后难", "C. 不看题目直接答题", "D. 合理分配时间"], answer: "C", knowledgePoint: "答题技巧", analysis: "不看题目直接答题容易出错。" }
    ]
  },
  {
    lesson: 76, title: "寒假作业规划",
    questions: [
      { type: "choice", difficulty: "basic", text: "寒假作业规划的目的是：", options: ["A. 完成任务", "B. 合理安排时间，提高效率", "C. 应付老师", "D. 浪费时间"], answer: "B", knowledgePoint: "时间管理", analysis: "寒假作业规划的目的是合理安排时间，提高学习效率。" },
      { type: "choice", difficulty: "medium", text: "寒假学习的重点是：", options: ["A. 玩", "B. 复习旧知识，预习新知识", "C. 只做难题", "D. 不学习"], answer: "B", knowledgePoint: "假期学习", analysis: "寒假学习应复习旧知识，预习新知识。" },
      { type: "choice", difficulty: "hard", text: "关于假期学习的说法正确的是：", options: ["A. 每天学习时间越长越好", "B. 劳逸结合，合理安排", "C. 只学习不休息", "D. 只休息不学习"], answer: "B", knowledgePoint: "学习方法", analysis: "假期学习应劳逸结合。" }
    ]
  },
  {
    lesson: 77, title: "暑假作业规划",
    questions: [
      { type: "choice", difficulty: "basic", text: "暑假时间长，应该：", options: ["A. 全部用来玩", "B. 全部用来学习", "C. 劳逸结合", "D. 什么都不做"], answer: "C", knowledgePoint: "假期规划", analysis: "暑假应合理安排学习和娱乐。" },
      { type: "choice", difficulty: "medium", text: "暑假阅读的好处是：", options: ["A. 浪费时间", "B. 拓展知识面", "C. 影响视力", "D. 增加负担"], answer: "B", knowledgePoint: "阅读意义", analysis: "暑假阅读可以拓展知识面。" },
      { type: "choice", difficulty: "hard", text: "暑假实践活动的意义是：", options: ["A. 没有意义", "B. 把知识应用到实际", "C. 浪费时间", "D. 增加负担"], answer: "B", knowledgePoint: "实践意义", analysis: "暑假实践活动可以将课堂知识应用到实际。" }
    ]
  },
  {
    lesson: 78, title: "实践项目指导",
    questions: [
      { type: "choice", difficulty: "basic", text: "家乡地理调查的内容不包括：", options: ["A. 地理位置", "B. 人口数量", "C. 明星八卦", "D. 气候特点"], answer: "C", knowledgePoint: "地理调查", analysis: "明星八卦不属于地理调查内容。" },
      { type: "choice", difficulty: "medium", text: "旅游路线设计需要考虑的因素不包括：", options: ["A. 交通", "B. 住宿", "C. 天气", "D. 明星演唱会"], answer: "D", knowledgePoint: "路线设计", analysis: "明星演唱会不是必需考虑的因素。" },
      { type: "choice", difficulty: "hard", text: "环保活动的意义是：", options: ["A. 没有意义", "B. 保护地球环境", "C. 浪费时间", "D. 增加负担"], answer: "B", knowledgePoint: "环保意义", analysis: "环保活动可以保护地球环境。" }
    ]
  },
  {
    lesson: 79, title: "学习方法分享",
    questions: [
      { type: "choice", difficulty: "basic", text: "地理学习中，地图的作用是：", options: ["A. 装饰", "B. 帮助建立空间概念", "C. 没用", "D. 浪费时间"], answer: "B", knowledgePoint: "地图学习", analysis: "地图可以帮助建立空间概念。" },
      { type: "choice", difficulty: "medium", text: "课堂笔记的作用是：", options: ["A. 好看", "B. 帮助复习和记忆", "C. 没用", "D. 浪费时间"], answer: "B", knowledgePoint: "笔记作用", analysis: "课堂笔记可以帮助复习和记忆知识。" },
      { type: "choice", difficulty: "hard", text: "关于提问的说法正确的是：", options: ["A. 不懂也不问", "B. 及时提问，解决疑惑", "C. 怕老师批评不敢问", "D. 提问没用"], answer: "B", knowledgePoint: "学习方法", analysis: "学习中遇到问题应及时提问。" }
    ]
  },
  {
    lesson: 80, title: "新学期展望",
    questions: [
      { type: "choice", difficulty: "basic", text: "设定学习目标的作用是：", options: ["A. 没有作用", "B. 明确方向，激励自己", "C. 增加压力", "D. 浪费时间"], answer: "B", knowledgePoint: "目标设定", analysis: "设定学习目标可以明确学习方向。" },
      { type: "choice", difficulty: "medium", text: "新学期计划应包括：", options: ["A. 只玩不学", "B. 学习、休息、娱乐都安排", "C. 只学习不休息", "D. 什么都不安排"], answer: "B", knowledgePoint: "计划制定", analysis: "新学期计划应合理安排学习、休息和娱乐时间。" },
      { type: "choice", difficulty: "hard", text: "关于学习信心的说法正确的是：", options: ["A. 信心不重要", "B. 信心可以提高学习效率", "C. 信心会让人骄傲", "D. 信心没用"], answer: "B", knowledgePoint: "学习心态", analysis: "信心可以提高学习效率。" }
    ]
  }
];

export default questionBank;
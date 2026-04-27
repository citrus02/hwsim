// hogsmeade/shops/zonkosJokeShop.js

import { BaseShop } from '../baseShop.js';

export const ZonkosShop = {
  id: "zonkos",
  name: "佐科笑话店",
  icon: "🃏",
  description: "恶作剧道具和搞笑玩具的天堂",
  owner: "佐科先生",
  openYears: [1,2,3,4,5,6,7],
  minLevel: 1,
  
  items: [
    {
      id: "dungbomb",
      name: "粪弹",
      icon: "💩",
      description: "会发出恶臭的炸弹",
      basePrice: 5,
      stock: 150,
      maxStock: 150,
      buyable: true,
      sellable: false,
      effect: { type: "prank", stench: true }
    },
    {
      id: "stink_pellets",
      name: "臭丸",
      icon: "👃",
      description: "散发难闻气味的小球",
      basePrice: 3,
      stock: 200,
      maxStock: 200,
      buyable: true,
      sellable: false
    },
    {
      id: "nose_biting_teacup",
      name: "咬鼻子茶杯",
      icon: "☕",
      description: "会咬鼻子的恶作剧茶杯",
      basePrice: 15,
      stock: 30,
      maxStock: 30,
      buyable: true,
      sellable: false,
      minLevel: 4
    },
    {
      id: "puking_pasties",
      name: "呕吐馅饼",
      icon: "🥟",
      description: "吃完会呕吐的馅饼",
      basePrice: 8,
      stock: 80,
      maxStock: 80,
      buyable: true,
      sellable: false
    },
    {
      id: "fainting_fancies",
      name: "昏迷花糖",
      icon: "🌸",
      description: "让人短暂昏迷的糖果",
      basePrice: 12,
      stock: 60,
      maxStock: 60,
      buyable: true,
      sellable: false,
      minLevel: 4
    },
    {
      id: "peruvian_instant_darkness_powder",
      name: "秘鲁 instant 黑暗粉",
      icon: "🌑",
      description: "瞬间制造黑暗粉末",
      basePrice: 25,
      stock: 20,
      maxStock: 20,
      buyable: true,
      sellable: false,
      minLevel: 5,
      effect: { type: "darkness", duration: 30 }
    },
    {
      id: "extendable_ears",
      name: "伸缩耳",
      icon: "👂",
      description: "可以伸长偷听的道具",
      basePrice: 18,
      stock: 40,
      maxStock: 40,
      buyable: true,
      sellable: false,
      minLevel: 4,
      effect: { type: "spy", range: 10 }
    },
    {
      id: "trick_wand",
      name: "恶作剧魔杖",
      icon: "🪄",
      description: "会变成橡胶鸡的魔杖",
      basePrice: 22,
      stock: 25,
      maxStock: 25,
      buyable: true,
      sellable: false
    },
    {
      id: "weasleys_wildfire_whizbangs",
      name: "韦斯莱烟火",
      icon: "🎆",
      description: "会变出各种形状的魔法烟火",
      basePrice: 30,
      stock: 15,
      maxStock: 15,
      buyable: true,
      sellable: false,
      minLevel: 4,
      special: "韦斯莱魔法把戏坊专利产品"
    }
  ],
  
  buybackItems: {
    "恶作剧材料": 5,
    "笑声粉末": 8
  },
  
  specialFeature: {
    name: "恶作剧配方",
    description: "学习制作进阶恶作剧道具",
    
    async learnPrank(player, shop) {
      const recipes = [
        { name: "简易粪弹", materials: { "恶臭草": 2, "魔法粉末": 1 }, difficulty: "easy" },
        { name: "升级版粪弹", materials: { "恶臭草": 5, "魔法粉末": 3, "蝙蝠翅膀": 1 }, difficulty: "medium" },
        { name: "韦斯莱烟火", materials: { "魔法粉末": 10, "火药草": 5, "凤凰羽毛": 1 }, difficulty: "hard" }
      ];
      
      const availableRecipes = recipes.filter(r => 
        !player.learnedPranks || !player.learnedPranks.includes(r.name)
      );
      
      if (availableRecipes.length === 0) {
        return { success: false, message: "你已经学会了所有配方！" };
      }
      
      const recipe = availableRecipes[0];
      player.learnedPranks = player.learnedPranks || [];
      
      return {
        success: true,
        message: `佐科教你制作${recipe.name}！需要材料：${JSON.stringify(recipe.materials)}`,
        recipe: recipe
      };
    },
    
    async craftPrank(recipeName, player) {
      const recipe = this.recipes.find(r => r.name === recipeName);
      if (!recipe) return { success: false, message: "未知配方" };
      
      // 检查材料
      for (const [material, required] of Object.entries(recipe.materials)) {
        if (!player.materials[material] || player.materials[material] < required) {
          return { success: false, message: `缺少材料：${material}` };
        }
      }
      
      // 扣除材料
      for (const [material, required] of Object.entries(recipe.materials)) {
        player.materials[material] -= required;
      }
      
      // 制作成功
      player.pranks = player.pranks || {};
      player.pranks[recipeName] = (player.pranks[recipeName] || 0) + 1;
      
      return {
        success: true,
        message: `成功制作${recipeName}！`,
        item: recipeName
      };
    }
  },
  
  specialEvents: [
    {
      id: "april_fools",
      name: "愚人节狂欢",
      condition: (date) => date.getMonth() === 3 && date.getDate() === 1,
      effect: (player, shop) => {
        shop.discount = 0.5;
        shop.items.forEach(item => item.basePrice = Math.floor(item.basePrice * 0.5));
        return { message: "愚人节快乐！全场5折！（认真的）" };
      }
    }
  ]
};

export class ZonkosJokeShop extends BaseShop {
  constructor() {
    super(ZonkosShop);
  }
  
  // 随机恶作剧效果
  playRandomJoke(player) {
    const jokes = [
      { effect: () => { player.temporaryEffects.push({ type: "color_change", duration: 60 }); return "你的头发变成了彩虹色！" } },
      { effect: () => { player.galleons += 5; return "从你口袋里掉出了5加隆！" } },
      { effect: () => { player.temporaryEffects.push({ type: "frog_voice", duration: 30 }); return "你的声音变得像青蛙一样！" } },
      { effect: () => { return "什么都没发生... 等等，你的鞋带松了！" } }
    ];
    
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    return joke.effect();
  }
}
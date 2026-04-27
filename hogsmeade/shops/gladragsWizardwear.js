// hogsmeade/shops/gladragsWizardwear.js

import { BaseShop } from '../baseShop.js';

export const GladragsWizardwearConfig = {
  id: "gladrags",
  name: "风雅氏巫师服装店",
  icon: "👔",
  description: "魔法装备、魔杖配件与巫师生活用品",
  owner: "风雅氏夫人",
  openYears: [1,2,3,4,5,6,7],
  minLevel: 1,
  
  items: [
    {
      id: "wizard_robe",
      name: "巫师袍",
      icon: "🧥",
      description: "标准巫师袍，带有学院徽章",
      basePrice: 50,
      stock: 50,
      buyable: true
    },
    {
      id: "pointed_hat",
      name: "尖顶帽",
      icon: "🎩",
      description: "传统巫师尖顶帽",
      basePrice: 15,
      stock: 80,
      buyable: true
    },
    {
      id: "dragon_gloves",
      name: "龙皮手套",
      icon: "🧤",
      description: "防火耐用的龙皮手套",
      basePrice: 35,
      stock: 30,
      buyable: true
    }
  ],
  
  buybackItems: {
    "巫师袍": 25,
    "尖顶帽": 8
  }
};

export class GladragsWizardwear extends BaseShop {
  constructor() {
    super(GladragsWizardwearConfig);
  }
}
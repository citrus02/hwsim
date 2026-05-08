// knockturn-alley/shops/index.js
// 翻倒巷商店索引

export { BorginBurkesShop, BorginBurkesConfig } from './borginBurkes.js';
export { DarkApothecaryShop, DarkApothecaryConfig } from './darkApothecary.js';
export { DarkWeaponsShop, DarkWeaponsConfig } from './darkWeapons.js';

export const KNOCKTURN_ALLEY_SHOPS = [
  { id: 'borgin_burkes', name: '博金-博克商店', icon: '🏪', config: BorginBurkesConfig },
  { id: 'dark_apothecary', name: '黑暗药房', icon: '⚗️', config: DarkApothecaryConfig },
  { id: 'dark_weapons', name: '黑暗武器店', icon: '⚔️', config: DarkWeaponsConfig },
];

export const KNOCKTURN_ALLEY_SHOP_CLASSES = {
  'borgin_burkes': BorginBurkesShop,
  'dark_apothecary': DarkApothecaryShop,
  'dark_weapons': DarkWeaponsShop,
};
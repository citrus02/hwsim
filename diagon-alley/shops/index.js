// diagon-alley/shops/index.js
// 对角巷商店索引

export { OlivandersConfig, OlivandersShop } from './olivanders.js';
export { GringottsConfig, GringottsBank } from './gringotts.js';
export { MalkinsConfig, MalkinsShop } from './malkins.js';
export { FloreanConfig, FloreanShop } from './florean.js';
export { QuidditchConfig, QuidditchShop } from './quidditch.js';
export { MagicalMenagerieConfig, MagicalMenagerieShop } from './magicalMenagerie.js';
export { FlourishBlottsConfig, FlourishBlottsShop } from './flourishBlotts.js';
export { ApothecaryConfig, ApothecaryShop } from './apothecary.js';

export const DiagonAlleyShops = [
  { id: "gringotts", name: "古灵阁巫师银行", icon: "🏦", config: GringottsConfig, class: GringottsBank },
  { id: "olivanders", name: "奥利凡德魔杖店", icon: "🪄", config: OlivandersConfig, class: OlivandersShop },
  { id: "malkins", name: "摩金夫人长袍专卖店", icon: "👗", config: MalkinsConfig, class: MalkinsShop },
  { id: "flourish_blotts", name: "弗洛里斯与布洛茨书店", icon: "📚", config: FlourishBlottsConfig, class: FlourishBlottsShop },
  { id: "apothecary", name: "对角巷药房", icon: "🧪", config: ApothecaryConfig, class: ApothecaryShop },
  { id: "quidditch", name: "魁地奇精品店", icon: "⚽", config: QuidditchConfig, class: QuidditchShop },
  { id: "magical_menagerie", name: "神奇动物园", icon: "🦉", config: MagicalMenagerieConfig, class: MagicalMenagerieShop },
  { id: "florean", name: "弗洛林冰淇淋店", icon: "🍦", config: FloreanConfig, class: FloreanShop },
];
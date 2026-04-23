import { loadPlayer, savePlayer } from './save-system.js';

export const player = {
  name: "无名巫师",
  blood: "",
  house: "",
  wand: "",
  wandAccepted: true
};

// 自动加载存档
loadPlayer(player);
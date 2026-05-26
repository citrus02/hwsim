import { initRandomGenerators, initSortingHat, initWandSelection, player } from "./random-generator.js";
import { createNewSave, getSave, hasAnySave, setSave } from "./save-system.js";
import { showTipBox } from "./create-screen.js";

function showScreen(screenId) {
  document.getElementById("screen-create")?.classList.toggle("active", screenId === "create");
  document.getElementById("screen-main")?.classList.toggle("active", screenId === "main");
}

function refreshMainScreen() {
  setTimeout(() => {
    window.loadTimeFromSave?.();
    window.refreshAll?.();
  }, 100);
}

function startGame() {
  if (!player.wandAccepted) {
    showTipBox("wand-result", `
      👴🏻 奥利凡德：<i>孩子，你还没有获得魔杖的认可！</i><br>
      🪄 是魔杖选择巫师，不是巫师选择魔杖。<br>
      ✅ 请先抽取魔杖并试用，成功后才能进入霍格沃茨！
    `);
    return;
  }

  const blood = document.getElementById("blood")?.value;
  const house = document.getElementById("house")?.value;
  if (!blood || !house) {
    showTipBox("wand-result", `
      🧙🏻‍♀️ 米勒娃 · 麦格：<i>请先登记你的出身与学院，再踏入霍格沃茨的校门。</i><br>
      📜 规矩理应遵守，秩序不容懈怠，望各位谨记分寸。
    `);
    return;
  }

  const data = createNewSave({
    name: document.getElementById("name")?.value.trim(),
    blood,
    house,
    wand: document.getElementById("wand")?.value.trim(),
    wandAccepted: true,
    log: ["✅ 成功进入霍格沃茨"]
  });

  setSave(data);
  showScreen("main");
  refreshMainScreen();
}

function initCreateScreen() {
  initRandomGenerators();
  initSortingHat();
  initWandSelection();
  document.getElementById("start-game")?.addEventListener("click", startGame);
}

function autoLoadExistingSave() {
  if (!hasAnySave()) return;

  try {
    const data = getSave();
    if (data.player?.name) {
      showScreen("main");
      refreshMainScreen();
    }
  } catch (error) {
    console.warn("[auto-load] parse save failed:", error);
  }
}

window.addEventListener("load", initCreateScreen);
document.addEventListener("DOMContentLoaded", autoLoadExistingSave);

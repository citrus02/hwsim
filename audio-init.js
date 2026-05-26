import { initMusicSystem, setBGMSource } from "./audio.js";

function initAudio() {
  setBGMSource("./audio/Prologue.mp3");
  initMusicSystem();

  const musicBtnMain = document.getElementById("music-button-main");
  const musicBtn = document.getElementById("music-button");
  if (musicBtnMain && musicBtn) {
    musicBtnMain.onclick = musicBtn.onclick;
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAudio);
} else {
  initAudio();
}

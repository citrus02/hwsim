// ===========================
// audio.js
// 魔法学校的背景音乐 & 音效系统
// ===========================

let audioContext = null;
let clickBuffer = null;
let audioElement = null;
let musicEnabled = true;

// 初始化 Web Audio API 的点击音效
async function initClickSound() {
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    const response = await fetch('./audio/click.mp3');
    const arrayBuffer = await response.arrayBuffer();
    clickBuffer = await audioContext.decodeAudioData(arrayBuffer);
    console.log('✅ 点击音效已加载');
  } catch (e) {
    console.error('点击音效加载失败:', e);
  }
}

export function playClickSound() {
  if (!audioContext || !clickBuffer) return;
  
  try {
    const source = audioContext.createBufferSource();
    source.buffer = clickBuffer;
    
    const gainNode = audioContext.createGain();
    gainNode.gain.value = 1;
    
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);
    source.start(0);
  } catch (e) {
    console.log('音效播放失败:', e);
  }
}

export async function initMusicSystem() {
  audioElement = document.getElementById('bgm');
  if (!audioElement) {
    audioElement = document.createElement('audio');
    audioElement.id = 'bgm';
    audioElement.loop = true;
    audioElement.preload = 'auto';
    document.body.appendChild(audioElement);
  }

  musicEnabled = false;
  audioElement.volume = 1;

  await initClickSound();

  // 🎵 ⭐ 全局按钮点击音效
  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.classList.contains('clickable')) {
      playClickSound();
    }
  });

  // ✅ 创建屏幕的音乐按钮
  const musicBtn = document.getElementById('music-button');
  if (musicBtn) {
    musicBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleBGM();
    };
    updateMusicButtonUI(musicBtn);
  }

  // ✅ 主界面的音乐按钮（只emoji）
  const musicBtnMain = document.getElementById('music-button-main');
  if (musicBtnMain) {
    musicBtnMain.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleBGM();
    };
    musicBtnMain.textContent = '🎵';
  }

  document.addEventListener('click', onUserInteraction, { once: true });
  document.addEventListener('touchstart', onUserInteraction, { once: true });
}

function onUserInteraction() {
  if (!audioElement) return;
  if (musicEnabled && audioElement.src) {
    audioElement.play().catch(e => console.log('播放失败:', e));
  }
}

export function tryPlayBGM() {
  if (!audioElement || !musicEnabled) return;
  if (!audioElement.src) {
    console.warn('⚠️ 音频源未设置');
    return;
  }
  audioElement.play().catch(e => console.log('播放失败:', e));
}

export function pauseBGM() {
  if (audioElement) audioElement.pause();
}

export function toggleBGM() {
  if (!audioElement) {
    console.warn('⚠️ 音频元素不存在');
    return;
  }
  
  musicEnabled = !musicEnabled;
  localStorage.setItem('bgm_enabled', JSON.stringify(musicEnabled));
  
  if (musicEnabled) {
    console.log('🎵 开始播放');
    audioElement.play().catch(e => console.log('播放失败:', e));
  } else {
    console.log('🔇 暂停播放');
    pauseBGM();
  }
  
  const btn = document.getElementById('music-button');
  if (btn) updateMusicButtonUI(btn);  // 创建屏幕的按钮（有文字）
  
  // ✅ 主界面按钮（只emoji）
  const btnMain = document.getElementById('music-button-main');
  if (btnMain) {
    btnMain.textContent = musicEnabled ? '🔇' : '🎵';
  }
  
  return musicEnabled;
}

function updateMusicButtonUI(btn) {
  btn.textContent = musicEnabled ? '🔇 暂停音乐' : '🎵 播放音乐';
}

export function setBGMSource(src) {
  if (!audioElement) {
    audioElement = document.createElement('audio');
    audioElement.id = 'bgm';
    audioElement.loop = true;
    audioElement.preload = 'auto';
    document.body.appendChild(audioElement);
  }
  
  audioElement.src = src;
  console.log('✅ 音频源已设置:', src);
}

window.musicSys = {
  initMusicSystem,
  setBGMSource,
  toggleBGM,
  pauseBGM,
  tryPlayBGM,
  playClickSound
};
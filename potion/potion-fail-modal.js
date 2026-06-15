// potion-fail-modal.js - failure modal DOM and retry wiring
let retryHandler = () => {};

export function createFailModal(onRetry = () => {}) {
  retryHandler = onRetry;
  document.getElementById('potionFailModal')?.remove();
  const m = document.createElement('div');
  m.id = 'potionFailModal';
  m.className = 'potion-fail-modal';
  m.innerHTML = `<div class="potion-fail-content"><h3 class="potion-fail-title">💥 熬制失败</h3><p id="potionFailMessage" class="potion-fail-message"></p><button id="potionFailRetryBtn" class="potion-fail-retry-btn">🔄 清理一新，重新开始</button></div>`;
  document.body.appendChild(m);
  document.getElementById('potionFailRetryBtn').onclick = () => {
    hideFailModal();
    retryHandler();
  };
  m.addEventListener('click', e => {
    if (e.target === m) {
      hideFailModal();
      retryHandler();
    }
  });
  return m;
}

export function showFailModal(msg) {
  let m = document.getElementById('potionFailModal');
  if (!m) m = createFailModal(retryHandler);
  document.getElementById('potionFailMessage').textContent = msg;
  m.classList.add('visible');
}

export function hideFailModal() {
  document.getElementById('potionFailModal')?.classList.remove('visible');
}

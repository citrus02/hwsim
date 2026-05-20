// feedback-modal.js - feedback modal tabs, scroll lock, and copy helpers
// ==================== 反馈弹窗 ====================
const EMAIL = 'hwsimgame@qq.com';
let scrollTop = 0;
let scrollbarWidth = 0;

function getScrollbarWidth() {
  if (scrollbarWidth > 0) return scrollbarWidth;
  const div = document.createElement('div');
  div.style.cssText = 'width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;';
  document.body.appendChild(div);
  scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollbarWidth;
}

function openFeedback() {
  const modal = document.getElementById('feedback-modal');
  if (!modal) return;
  scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
  document.body.classList.add('modal-open');
  document.addEventListener('wheel', preventScroll, { passive: false });
  document.addEventListener('touchmove', preventScroll, { passive: false });
  modal.classList.add('show');
  initCopyButton();
  initModalTabs();
}

function initModalTabs() {
  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.removeEventListener('click', handleTabClick);
    tab.addEventListener('click', handleTabClick);
  });
}

function handleTabClick() {
  const tabId = this.getAttribute('data-tab');
  document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.modal-tab-content').forEach(c => c.classList.remove('active'));
  this.classList.add('active');
  document.getElementById(`tab-${tabId}`)?.classList.add('active');
}

function closeFeedback() {
  const modal = document.getElementById('feedback-modal');
  if (!modal) return;
  modal.classList.remove('show');
  document.body.classList.remove('modal-open');
  document.body.style.top = '';
  document.removeEventListener('wheel', preventScroll);
  document.removeEventListener('touchmove', preventScroll);
  setTimeout(() => { window.scrollTo(0, scrollTop); }, 0);
}

function preventScroll(e) {
  const modalContent = document.querySelector('.modal-content');
  if (modalContent && modalContent.contains(e.target)) return;
  e.preventDefault();
  return false;
}

function initCopyButton() {
  const copyBtn = document.getElementById('copy-email');
  if (!copyBtn) return;
  copyBtn.removeEventListener('click', handleCopyClick);
  copyBtn.addEventListener('click', handleCopyClick);
}

function handleCopyClick(e) {
  e.preventDefault();
  e.stopPropagation();
  const btn = e.currentTarget;
  const originalText = btn.textContent;
  if (!EMAIL) {
    btn.textContent = '❌ 邮箱未配置';
    setTimeout(() => { btn.textContent = originalText; }, 1500);
    return;
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(EMAIL).then(() => {
      btn.textContent = '✓ 已复制！';
      btn.style.background = '#2a7a3e';
      setTimeout(() => { btn.textContent = originalText; btn.style.background = ''; }, 1500);
    }).catch(() => fallbackCopy(btn, originalText));
  } else {
    fallbackCopy(btn, originalText);
  }
}

function fallbackCopy(btn, originalText) {
  const textarea = document.createElement('textarea');
  textarea.value = EMAIL;
  textarea.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;pointer-events:none;z-index:-9999;';
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  if (document.execCommand('copy')) {
    btn.textContent = '✓ 已复制！';
    btn.style.background = '#2a7a3e';
    setTimeout(() => { btn.textContent = originalText; btn.style.background = ''; }, 1500);
  } else {
    btn.textContent = '❌ 复制失败';
    setTimeout(() => { btn.textContent = originalText; }, 1500);
  }
  document.body.removeChild(textarea);
}

export { openFeedback, closeFeedback };

window.openFeedback = openFeedback;
window.closeFeedback = closeFeedback;

document.addEventListener("DOMContentLoaded", () => {
  getScrollbarWidth();
  const noteButton = document.getElementById('note-button-main');
  const closeFeedbackBtn = document.getElementById('close-feedback');
  const cancelFeedbackBtn = document.getElementById('cancel-feedback');
  if (noteButton) noteButton.addEventListener('click', openFeedback);
  if (closeFeedbackBtn) closeFeedbackBtn.addEventListener('click', closeFeedback);
  if (cancelFeedbackBtn) cancelFeedbackBtn.addEventListener('click', closeFeedback);
  initCopyButton();
});

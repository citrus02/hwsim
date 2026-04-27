// slot-system.js — 存档槽 + 反馈功能

import { getSave, setSave, addLog } from './save-system.js';
import { getAllSlots, saveAllSlots } from './save-system.js';

const COLOR_SAVE = "#37594e";
const COLOR_LOAD = "#3a5270";
const COLOR_CLEAR = "#6b3f48";
const CARD_BG = "#161d2f";
const CARD_BORDER = "#2a3b66";
const TEXT_COLOR = "#e6e6e6";
const TITLE_COLOR = "#f8c850";

function createSlotCard(i, slots, mode) {
  const item = document.createElement("div");
  Object.assign(item.style, {
    background: CARD_BG, border: `1px solid ${CARD_BORDER}`,
    borderRadius: "8px", padding: "12px", color: TEXT_COLOR, boxSizing: "border-box"
  });

  const timeText = slots[i]?.time
    ? `${slots[i].time.currentDate} ${slots[i].time.nowTime}`
    : "空存档";
  const info = document.createElement("div");
  Object.assign(info.style, { fontSize: "13px", lineHeight: "1.4", marginBottom: "10px" });
  info.innerHTML = `<div style="color:${TITLE_COLOR};font-weight:bold;">存档${i + 1}</div><div style="margin-top:4px;">${timeText}</div>`;
  item.appendChild(info);

  function makeBtn(label, bg, hoverBg, disabled) {
    const btn = document.createElement("button");
    Object.assign(btn.style, {
      flex: "1", border: "none", borderRadius: "4px", padding: "6px 0",
      background: bg, color: "#fff", cursor: "pointer", transition: "all 0.2s ease"
    });
    btn.innerText = label;
    btn.disabled = disabled;
    btn.onmouseover = () => { btn.style.background = hoverBg; btn.style.transform = "translateY(-1px)"; };
    btn.onmouseout = () => { btn.style.background = bg; btn.style.transform = "translateY(0)"; };
    btn.onmousedown = () => btn.style.transform = "translateY(1px)";
    btn.onmouseup = () => btn.style.transform = "translateY(0)";
    return btn;
  }

  if (mode === "save") {
    const btn = makeBtn(slots[i] ? "覆盖存档" : "存档", COLOR_SAVE, "#497c68", false);
    btn.style.width = "100%";
    btn.onclick = () => { slots[i] = getSave(); saveAllSlots(slots); window.openSave(); addLog(`✅ 已保存至【存档${i + 1}】`); };
    item.appendChild(btn);
  } else {
    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.gap = "6px";
    const loadBtn = makeBtn("读取", COLOR_LOAD, "#486899", !slots[i]);
    const delBtn = makeBtn("清空", COLOR_CLEAR, "#8c5260", !slots[i]);
    loadBtn.onclick = () => { setSave(slots[i]); refreshAll(); addLog(`📥 已读取【存档${i + 1}】`); };
    delBtn.onclick = () => { slots[i] = null; saveAllSlots(slots); window.openLoad(); addLog(`🗑️ 已清空【存档${i + 1}】`); };
    wrap.appendChild(loadBtn);
    wrap.appendChild(delBtn);
    item.appendChild(wrap);
  }
  return item;
}

window.openSave = function () {
  const slots = getAllSlots();
  const slotBox = document.getElementById("slotBox");
  if (!slotBox) return;
  slotBox.innerHTML = "";
  for (let i = 0; i < 10; i++) slotBox.appendChild(createSlotCard(i, slots, "save"));
};

window.openLoad = function () {
  const slots = getAllSlots();
  const slotBox = document.getElementById("slotBox");
  if (!slotBox) return;
  slotBox.innerHTML = "";
  for (let i = 0; i < 10; i++) slotBox.appendChild(createSlotCard(i, slots, "load"));
};

window.resetGame = function () {
  if (confirm("确定要清空进度吗？")) {
    if (window.versionMgr) window.versionMgr.clearVersionInfo();
    localStorage.clear();
    location.reload();
  }
};

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
  document.body.style.top = '-' + scrollTop + 'px';
  document.addEventListener('wheel', preventScroll, { passive: false });
  document.addEventListener('touchmove', preventScroll, { passive: false });
  modal.classList.add('show');
  initCopyButton();
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
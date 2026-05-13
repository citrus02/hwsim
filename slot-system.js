// slot-system.js — 存档槽 + 反馈功能

import { getSave, setSave, addLog, restartGame, downloadSaveFile, importSaveFileText } from './save-system.js';
import { getAllSlots, saveAllSlots } from './save-system.js';

const COLOR_SAVE = "#37594e";
const COLOR_LOAD = "#3a5270";
const COLOR_CLEAR = "#6b3f48";
const CARD_BG = "#161d2f";
const CARD_BORDER = "#2a3b66";
const TEXT_COLOR = "#e6e6e6";
const TITLE_COLOR = "#f8c850";

function createSlotCard(i, slots, options = {}) {
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
  const title = document.createElement("div");
  title.style.color = TITLE_COLOR;
  title.style.fontWeight = "bold";
  title.textContent = `存档${i + 1}`;
  const time = document.createElement("div");
  time.style.marginTop = "4px";
  time.textContent = timeText;
  info.appendChild(title);
  info.appendChild(time);
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
    loadBtn.onclick = () => {
      setSave(slots[i]);
      const duelMain = document.getElementById("duelMain");
      if (duelMain) { duelMain.remove(); const am = document.getElementById("actionMain"); if (am) am.style.display = "block"; }
      if (options.activateMainScreen) {
        document.getElementById("screen-create")?.classList.remove("active");
        document.getElementById("screen-main")?.classList.add("active");
      }
      if (window.refreshAll) window.refreshAll();
      addLog(`📥 已读取【存档${i + 1}】`);
    };
    delBtn.onclick = () => {
      slots[i] = null;
      saveAllSlots(slots);
      renderLoadSlots(options.targetId || "slotBox", options);
      addLog(`🗑️ 已清空【存档${i + 1}】`);
    };
    wrap.appendChild(loadBtn);
    wrap.appendChild(delBtn);
    item.appendChild(wrap);
  }
  return item;
}

function createUnifiedSlotCard(i, slots, options = {}) {
  const item = document.createElement("div");
  Object.assign(item.style, {
    background: CARD_BG, border: `1px solid ${CARD_BORDER}`,
    borderRadius: "8px", padding: "12px", color: TEXT_COLOR, boxSizing: "border-box"
  });

  const hasSlot = !!slots[i];
  const timeText = hasSlot && slots[i].time
    ? `${slots[i].time.currentDate} ${slots[i].time.nowTime}`
    : "空存档";

  const info = document.createElement("div");
  Object.assign(info.style, { fontSize: "13px", lineHeight: "1.4", marginBottom: "10px" });
  const title = document.createElement("div");
  title.style.color = TITLE_COLOR;
  title.style.fontWeight = "bold";
  title.textContent = `存档${i + 1}`;
  const time = document.createElement("div");
  time.style.marginTop = "4px";
  time.textContent = timeText;
  info.appendChild(title);
  info.appendChild(time);
  item.appendChild(info);

  function makeBtn(label, bg, hoverBg) {
    const btn = document.createElement("button");
    Object.assign(btn.style, {
      flex: "1", border: "none", borderRadius: "4px", padding: "6px 0",
      background: bg, color: "#fff", cursor: "pointer", transition: "all 0.2s ease"
    });
    btn.innerText = label;
    btn.onmouseover = () => { btn.style.background = hoverBg; btn.style.transform = "translateY(-1px)"; };
    btn.onmouseout = () => { btn.style.background = bg; btn.style.transform = "translateY(0)"; };
    btn.onmousedown = () => btn.style.transform = "translateY(1px)";
    btn.onmouseup = () => btn.style.transform = "translateY(0)";
    return btn;
  }

  const wrap = document.createElement("div");
  wrap.style.display = "flex";
  wrap.style.gap = "6px";

  const mainBtn = makeBtn(hasSlot ? "读取" : "存档", hasSlot ? COLOR_LOAD : COLOR_SAVE, hasSlot ? "#486899" : "#497c68");
  const delBtn = makeBtn("清空", COLOR_CLEAR, "#8c5260");

  mainBtn.onclick = () => {
    if (!hasSlot) {
      slots[i] = getSave();
      saveAllSlots(slots);
      renderSlots(options.targetId || "slotBox", options);
      addLog(`✅ 已保存至【存档${i + 1}】`);
      return;
    }

    setSave(slots[i]);
    const duelMain = document.getElementById("duelMain");
    if (duelMain) { duelMain.remove(); const am = document.getElementById("actionMain"); if (am) am.style.display = "block"; }
    if (options.activateMainScreen) {
      document.getElementById("screen-create")?.classList.remove("active");
      document.getElementById("screen-main")?.classList.add("active");
    }
    if (window.refreshAll) window.refreshAll();
    addLog(`📜 已读取【存档${i + 1}】`);
  };

  delBtn.onclick = () => {
    slots[i] = null;
    saveAllSlots(slots);
    renderSlots(options.targetId || "slotBox", options);
    addLog(`🗑️ 已清空【存档${i + 1}】`);
  };

  wrap.appendChild(mainBtn);
  wrap.appendChild(delBtn);
  item.appendChild(wrap);
  return item;
}

function renderFileTools(slotBox, options = {}) {
  const tools = document.createElement("div");
  Object.assign(tools.style, {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px",
    margin: "0 0 12px 0"
  });

  function makeToolBtn(label, bg) {
    const btn = document.createElement("button");
    Object.assign(btn.style, {
      border: "none",
      borderRadius: "6px",
      padding: "8px",
      background: bg,
      color: "#fff",
      cursor: "pointer",
      fontSize: "13px"
    });
    btn.textContent = label;
    return btn;
  }

  const exportBtn = makeToolBtn("Export file", COLOR_SAVE);
  exportBtn.onclick = () => {
    const fileName = downloadSaveFile(getSave());
    addLog(`Save file exported: ${fileName}`);
  };

  const importBtn = makeToolBtn("Import file", COLOR_LOAD);
  importBtn.onclick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json,.json";
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          importSaveFileText(String(reader.result || ""));
          if (options.activateMainScreen) {
            document.getElementById("screen-create")?.classList.remove("active");
            document.getElementById("screen-main")?.classList.add("active");
          }
          if (window.refreshAll) window.refreshAll();
          addLog(`Save file imported: ${file.name}`);
          renderLoadSlots(options.targetId || "slotBox", options);
        } catch (e) {
          alert(`Import failed: ${e.message || e}`);
        }
      };
      reader.readAsText(file, "utf-8");
    };
    input.click();
  };

  tools.appendChild(exportBtn);
  tools.appendChild(importBtn);
  slotBox.appendChild(tools);
}

window.exportSaveFile = function () {
  const fileName = downloadSaveFile(getSave());
  addLog(`Save file exported: ${fileName}`);
};

window.importSaveFile = function (options = {}) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/json,.json";
  input.onchange = () => {
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        importSaveFileText(String(reader.result || ""));
        if (options.activateMainScreen) {
          document.getElementById("screen-create")?.classList.remove("active");
          document.getElementById("screen-main")?.classList.add("active");
        }
        if (window.refreshAll) window.refreshAll();
        renderSlots(options.targetId || "slotBox", options);
        addLog(`Save file imported: ${file.name}`);
      } catch (e) {
        alert(`Import failed: ${e.message || e}`);
      }
    };
    reader.readAsText(file, "utf-8");
  };
  input.click();
};

function renderLoadSlots(targetId = "slotBox", options = {}) {
  const slots = getAllSlots();
  const slotBox = document.getElementById(targetId);
  if (!slotBox) return;
  slotBox.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    slotBox.appendChild(createUnifiedSlotCard(i, slots, { ...options, targetId }));
  }
}

function renderSlots(targetId = "slotBox", options = {}) {
  renderLoadSlots(targetId, options);
}

window.openSave = function () {
  renderSlots("slotBox");
};

window.openLoad = function () {
  renderLoadSlots("slotBox");
};

window.openCreateLoad = function () {
  renderLoadSlots("slotBox-create", { activateMainScreen: true });
};

window.resetGame = function () {
  if (confirm("确定要重新开始吗？角色信息会保留，游戏进度将重置。")) {
    restartGame();
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

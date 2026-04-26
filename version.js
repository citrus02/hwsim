// ===========================
// version.js
// 版本管理 & 存档继承系统
// ===========================

import { SAVE_KEY } from './save-system.js'; // 统一来源，不再重复定义

export const CURRENT_VERSION = '1.2.0';
export const VERSION_KEY = 'hogwarts_version';
export { SAVE_KEY }; // 透传导出，外部如需使用可从此处或 save-system.js 取

// git add . && git commit -m "1.2.1" && git pull origin main --rebase && git push
export const versionLogs = {
  '1.0.0': '初始版本',
  '1.1.0': [
    '✨ 新增莉莉伊万斯分院彩蛋',
    '🎵 优化音效系统，使用 Web Audio API 实现零延迟',
    '💾 新增存档继承与版本管理系统',
    '🎭 魔杖特殊角色彩蛋完善',
  ],
  '1.1.1': '修复PWA图标',
  '1.1.2': [
    '・ 新增历史玩家人数',
    '・ 新增版权声明',
  ],
  '1.2.0': [
    '・ 新增探索获取材料系统',
    '・ 新增魔药制作面板',
    ],
  '1.2.1': [
    '・ 优化魔药制作面板UI',
    '・ 优化存档UI',
    ],
};

function getPlayerBackup() {
  try {
    const data = localStorage.getItem(SAVE_KEY);
    if (!data) return null;
    const save = JSON.parse(data);
    return save.player ? { ...save.player } : null;
  } catch (e) {
    return null;
  }
}

// ✅ FIX #6：restorePlayerData 原来是死代码（有定义但从没调用）
// 现在在版本升级后正确调用，用于恢复表单中的玩家数据
function restorePlayerData(backup) {
  if (!backup) return;
  
  const idMap = {
    'name': 'name',
    'house': 'house',
    'wand': 'wand',
    'blood': 'blood',
    'era': 'era'
  };

  Object.entries(idMap).forEach(([saveKey, elementId]) => {
    if (backup[saveKey]) {
      const element = document.getElementById(elementId);
      if (element) {
        element.value = backup[saveKey];
      }
    }
  });
}

function showVersionUpdateDialog(oldVersion, backup) {
  const modal = document.createElement('div');
  modal.id = 'version-modal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation: fadeIn 0.3s ease-out;
  `;

  const content = document.createElement('div');
  content.style.cssText = `
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    border: 2px solid #ffd700;
    border-radius: 12px;
    padding: 24px;
    max-width: 500px;
    max-height: 70vh;
    overflow-y: auto;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
    color: #fff;
    font-family: 'Microsoft YaHei', sans-serif;
    animation: slideUp 0.4s ease-out;
  `;

  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { transform: translateY(40px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);

  let logHtml = `
    <h2 style="text-align: center; color: #ffd700; margin: 0 0 16px 0; font-size: 24px;">
      🎉 版本更新
    </h2>
    <hr style="border: none; border-top: 1px solid #ffd700; margin: 16px 0;">
    <p style="text-align: center; font-size: 14px; color: #ccc; margin: 0 0 16px 0;">
      ${oldVersion} → <b style="color: #ffd700; font-size: 16px;">${CURRENT_VERSION}</b>
    </p>
    <hr style="border: none; border-top: 1px solid #ffd700; margin: 16px 0;">
  `;

  Object.entries(versionLogs).forEach(([version, log]) => {
    const isNew = version === CURRENT_VERSION;
    
    if (isNew || version === oldVersion) {
      logHtml += `<div style="margin: 12px 0;">
        <h4 style="color: ${isNew ? '#ffd700' : '#ccc'}; margin: 8px 0; display: flex; align-items: center; gap: 8px;">
          <span>${isNew ? '🆕' : '📦'}</span>
          <span>v${version}</span>
        </h4>`;
      
      if (Array.isArray(log)) {
        logHtml += '<ul style="margin: 6px 0; padding-left: 20px; line-height: 1.8;">';
        log.forEach(item => {
          logHtml += `<li style="font-size: 13px; color: #ddd; margin: 4px 0;">${item}</li>`;
        });
        logHtml += '</ul>';
      } else {
        logHtml += `<p style="font-size: 13px; color: #ddd; margin: 6px 0;">${log}</p>`;
      }
      logHtml += '</div>';
    }
  });

  // 如果有存档数据，显示继承提示
  if (backup) {
    logHtml += `
      <hr style="border: none; border-top: 1px solid #ffd700; margin: 16px 0;">
      <p style="text-align: center; font-size: 13px; color: #aaffcc; margin: 0 0 8px 0;">
        ✅ 已自动继承上一版本存档数据
      </p>
    `;
  }

  logHtml += `
    <hr style="border: none; border-top: 1px solid #ffd700; margin: 16px 0;">
    <div style="text-align: center;">
      <button id="close-version-modal" style="
        background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
        color: #000;
        border: none;
        padding: 12px 28px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s;
        box-shadow: 0 4px 12px rgba(255, 215, 0, 0.2);
      ">开始冒险 ✨</button>
    </div>
  `;

  content.innerHTML = logHtml;
  modal.appendChild(content);
  document.body.appendChild(modal);

  const closeBtn = document.getElementById('close-version-modal');
  closeBtn.onclick = () => {
    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.95)';
    setTimeout(() => modal.remove(), 200);
  };

  modal.onclick = (e) => {
    if (e.target === modal) {
      closeBtn.click();
    }
  };

  closeBtn.onmouseover = () => {
    closeBtn.style.transform = 'scale(1.08)';
    closeBtn.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.4)';
  };
  closeBtn.onmouseout = () => {
    closeBtn.style.transform = 'scale(1)';
    closeBtn.style.boxShadow = '0 4px 12px rgba(255, 215, 0, 0.2)';
  };
  closeBtn.onmousedown = () => closeBtn.style.transform = 'scale(1.05)';
  closeBtn.onmouseup = () => closeBtn.style.transform = 'scale(1.08)';
}

const DEBUG = false; // 开发时改为 true 可查看版本管理详细日志
export function initVersionManager() {
  if (DEBUG) console.log('=== VERSION MANAGER START ===');
  
  const oldVersion = localStorage.getItem(VERSION_KEY);
  if (DEBUG) console.log('1️⃣ oldVersion from localStorage:', oldVersion);
  if (DEBUG) console.log('2️⃣ CURRENT_VERSION:', CURRENT_VERSION);
  if (DEBUG) console.log('3️⃣ VERSION_KEY:', VERSION_KEY);
  
  const backup = getPlayerBackup();
  if (DEBUG) console.log('4️⃣ backup:', backup);

  if (!oldVersion || oldVersion !== CURRENT_VERSION) {
    if (DEBUG) console.log('5️⃣ 进入了 if (!oldVersion || oldVersion !== CURRENT_VERSION)');
    
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
    if (DEBUG) console.log('6️⃣ 已设置版本为:', CURRENT_VERSION);

    if (oldVersion && oldVersion !== CURRENT_VERSION) {
      if (DEBUG) console.log('7️⃣ 进入了版本不同的分支，准备显示弹窗');
      if (DEBUG) console.log('8️⃣ document.body:', document.body);
      if (DEBUG) console.log('9️⃣ document.readyState:', document.readyState);
      
      const doShow = () => {
        try {
          // ✅ FIX #6：版本升级时调用 restorePlayerData，接通存档继承
          restorePlayerData(backup);
          showVersionUpdateDialog(oldVersion, backup);
          if (DEBUG) console.log('✅ showVersionUpdateDialog 调用成功');
        } catch (e) {
          console.error('❌ showVersionUpdateDialog 出错:', e);
        }
      };

      if (document.body) {
        if (DEBUG) console.log('🔟 document.body 存在，直接调用 showVersionUpdateDialog');
        doShow();
      } else {
        if (DEBUG) console.log('🔟 document.body 不存在，监听 DOMContentLoaded');
        document.addEventListener('DOMContentLoaded', () => {
          if (DEBUG) console.log('🔟 DOMContentLoaded 触发，调用 showVersionUpdateDialog');
          doShow();
        });
      }
    } else {
      if (DEBUG) console.log('7️⃣ 没有进入版本不同的分支（oldVersion:', oldVersion, '）');
    }
  } else {
    if (DEBUG) console.log('5️⃣ 没有进入 if 分支（版本相同或没有旧版本）');
  }

  window.addEventListener('beforeunload', () => {
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
  });
  
  if (DEBUG) console.log('=== VERSION MANAGER END ===');
}

export function clearVersionInfo() {
  localStorage.removeItem(VERSION_KEY);
}

window.versionMgr = {
  initVersionManager,
  getPlayerBackup,
  clearVersionInfo,
  CURRENT_VERSION
};

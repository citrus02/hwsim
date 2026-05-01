// ===========================
// version.js
// 版本管理 & 存档继承系统
// ===========================

import { SAVE_KEY } from './save-system.js'; // 统一来源，不再重复定义

export const CURRENT_VERSION = '1.3.7';
export const VERSION_KEY = 'hogwarts_version';
export { SAVE_KEY }; // 透传导出，外部如需使用可从此处或 save-system.js 取

// git add . && git commit -m "1.2.1" && git pull origin main --rebase && git push
export const versionLogs = {
  '1.3.7': [
    '魔药制作台ui加入熟练度显示',
    '魔药制作台ui放大坩埚',
    '魔药制作台ui变得更加舒展',
  ],
  '1.3.6': [
    '调整魔药制作台ui',
  ],
  '1.3.5': [
    '优化文件结构',
  ],
  '1.3.4': [
    '更新风雅氏巫师服装店商品',
    '更新蜂蜜公爵糖果店商品',
    '新增巧克力蛙画片抽卡系统！',
    '比比多味豆现在可以吃了！',
    '优化文件结构并修复调用逻辑',
    '更新佐科笑话店商品',
    '更新三把扫帚酒吧商品',
    '新增霍格莫德邮局',
    '新增白鼬夫人茶屋',
    '新增古卷二手书铺',
    '新增毛羽宠物小店',
    '新增月桂魔材药房',
    '新增霍格莫德分支地点事件',
    '丰富掉落材料',
  ],
  '1.3.3': [
    '修复商店无法显示金币的bug',
  ],
  '1.3.2': [
    '修复商店无法购买物品的bug',
  ],
  'vv1.3.1': [
    '改为自动化更新git仓库和上传release',
  ],
  '1.3.0': [
    '新增麻瓜研究学分支科目！！',
    '新增加隆系统',
    '新增学院分系统',
    '优化“信息”UI',
    '新增霍格莫德村分类商店！！',
  ],
  '1.2.1': [
    '优化魔药制作面板UI',
    '优化存档UI',
  ],
  '1.2.0': [
    '新增探索获取材料系统',
    '新增魔药制作面板',
  ],
  '1.1.1': '・ 修复PWA图标',
  '1.1.2': [
    '新增历史玩家人数',
    '新增版权声明',
  ],
  '1.1.0': [
    '✨ 新增莉莉伊万斯分院彩蛋',
    '🎵 优化音效系统，使用 Web Audio API 实现零延迟',
    '💾 新增存档继承与版本管理系统',
    '🎭 魔杖特殊角色彩蛋完善',
  ],
  '1.0.0': '・ 初始版本'
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
    width: 90%;
    max-width: 500px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8);
    color: #fff;
    font-family: 'Microsoft YaHei', sans-serif;
    animation: slideUp 0.4s ease-out;
  `;

  const logWrapper = document.createElement('div');
  logWrapper.style.cssText = `
    flex: 1;
    overflow-y: auto;
    margin: 16px 0;
    padding-right: 8px;
    scrollbar-width: thin;
    scrollbar-color: #3b4f8a #161d2f;
  `;

  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    #version-modal div::-webkit-scrollbar { width: 6px; }
    #version-modal div::-webkit-scrollbar-track { background: #161d2f; border-radius: 3px; }
    #version-modal div::-webkit-scrollbar-thumb { background-color: #3b4f8a; border-radius: 3px; }
  `;
  document.head.appendChild(style);

  const titleHtml = `
    <h2 style="text-align:center; color:#ffd700; margin:0 0 16px 0; font-size:24px;">
      🎉 版本更新
    </h2>
    <hr style="border:none; border-top:1px solid #ffd700; margin:16px 0;">
    <p style="text-align:center; font-size:14px; color:#ccc;">
      ${oldVersion || '无版本'} → <b style="color:#ffd700; font-size:16px;">${CURRENT_VERSION}</b>
    </p>
    <hr style="border:none; border-top:1px solid #ffd700; margin:16px 0;">
  `;

  let logHtml = '';
  Object.entries(versionLogs).forEach(([version, log]) => {
    const isNew = version === CURRENT_VERSION;

    // ✅ 最新版本：字体更大 + 更粗
    if (isNew) {
      logHtml += `<div style="margin:12px 0;">
        <h4 style="color:#ffd700; font-size:16px; font-weight:900; margin:8px 0; display:flex; align-items:center; gap:8px;">
          <span>🆕</span>
          <span>v${version}（最新版本）</span>
        </h4>`;

      if (Array.isArray(log)) {
        logHtml += '<ul style="margin:6px 0; padding-left:20px; line-height:1.8;">';
        log.forEach(item => {
          logHtml += `<li style="font-size:15px; font-weight:700; color:#fff; margin:6px 0;">${item}</li>`;
        });
        logHtml += '</ul>';
      } else {
        logHtml += `<p style="font-size:15px; font-weight:700; color:#fff; margin:6px 0;">${log}</p>`;
      }
    }

    // 旧版本保持原样
    else {
      logHtml += `<div style="margin:12px 0;">
        <h4 style="color:#ccc; margin:8px 0; display:flex; align-items:center; gap:8px;">
          <span>📦</span>
          <span>v${version}</span>
        </h4>`;

      if (Array.isArray(log)) {
        logHtml += '<ul style="margin:6px 0; padding-left:20px; line-height:1.8;">';
        log.forEach(item => {
          logHtml += `<li style="font-size:13px; color:#ddd; margin:4px 0;">${item}</li>`;
        });
        logHtml += '</ul>';
      } else {
        logHtml += `<p style="font-size:13px; color:#ddd; margin:6px 0;">${log}</p>`;
      }
    }
    logHtml += '</div>';
  });

  let footerHtml = '';
  if (backup) {
    footerHtml += `
      <p style="text-align:center; color:#aaffcc; margin:0 0 8px 0;">
        ✅ 已自动继承上一版本存档数据
      </p>
    `;
  }

  footerHtml += `
    <hr style="border:none; border-top:1px solid #ffd700; margin:16px 0;">
    <div style="text-align:center;">
      <button id="close-version-modal" style="
        background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
        color: #000; border:none; padding:12px 28px; border-radius:6px;
        font-size:14px; font-weight:bold; cursor:pointer; transition:all 0.3s;">
        开始冒险 ✨
      </button>
    </div>
  `;

  content.innerHTML = titleHtml;
  logWrapper.innerHTML = logHtml;
  content.appendChild(logWrapper);
  content.innerHTML += footerHtml;

  modal.appendChild(content);
  document.body.appendChild(modal);

  const closeBtn = document.getElementById('close-version-modal');
  closeBtn.onclick = () => { modal.remove(); };
  modal.onclick = (e) => { if (e.target === modal) closeBtn.click(); };
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

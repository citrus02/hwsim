// ===========================
// version.js
// 版本管理 & 存档继承系统
// ===========================

import { SAVE_KEY } from './save-system.js'; // 统一来源，不再重复定义

import { getSave } from './save-system.js';
export const CURRENT_VERSION = '1.8.0';
export const VERSION_KEY = 'hogwarts_version';
export { SAVE_KEY }; // 透传导出，外部如需使用可从此处或 save-system.js 取

// git add . && git commit -m "1.2.1" && git pull origin main --rebase && git push
export const versionLogs = {
  '1.8.0': [
    '新增角色主动事件系统，角色会根据好感、记忆与经历主动来找玩家',
    '新增 characters 角色档案目录，为赫敏、罗恩、哈利、德拉科、卢娜等角色补充主动事件与人设种子',
    '扩展人物关系界面，新增“有人找你”入口与主动事件选择反馈',
    '完善世界记忆标签、决斗胜利记忆与每日调度逻辑，让角色互动更有连续性',
  ],
  '1.7.15': [
    '拆新增重复句子折叠、文本去重工具函数',
    '为多门课程知识点添加可视化示意图渲染',
    '重构课堂黑板渲染逻辑，支持图文结合的教学展示',
    '调整世界事件弹窗交互与日志记录内容',
  ],
  '1.7.14': [
    '新增 Bing 站点验证文件，方便将官网接入 Bing Webmaster Tools',
    '继续完善搜索引擎收录相关配置，让 hwsim.top 更容易被搜索平台识别',
  ],
  '1.7.13': [
    '补充网站标题、描述、关键词与社交分享信息，优化搜索引擎展示效果',
    '新增 robots.txt 与 sitemap.xml，帮助搜索引擎正确发现官网页面',
    '增加无脚本访问时的静态介绍内容，让搜索与无 JavaScript 环境也能理解游戏主题',
  ],
  '1.7.12': [
    '重构剧情文本渲染与对白格式规范，新增剧情排版标准文档',
    '完善世界状态面板、存档系统与课程答题记录功能',
    '优化移动端适配与UI细节，修复各类已知问题',
  ],
  '1.7.11': [
    '拆分教室、课程表、出勤与学习进度逻辑，让课程系统更容易维护和扩展',
    '重构存档、存档槽、日志与时间线相关模块，减少存档系统文件过大的问题',
    '整理决斗与魔药系统结构，拆出运行时、结算、队伍、熬制步骤与失败弹窗等模块',
    '继续补全麻瓜学术系课程与题库，重点扩充生物、化学、公民、文学、拉丁语与物理内容',
  ],
  '1.7.10': [
    '麻瓜学术系迎来大补充：新增并扩写物理、历史、地理、文学等课程长篇课文',
    '重做多门麻瓜学术课程题库，补足选择题、解析与知识点对应关系',
    '调整化学、历史、文学等科目的课程大纲与教授风格，让学科定位更清晰',
    '完善课程内容写作规范，方便后续继续批量扩写课程而不破坏课堂展示',
  ],
  '1.7.9': [
    '扩充麻瓜学术系数学与拉丁语课程内容，补充拉丁语发音练习与课堂音频',
    '优化课堂黑板、课堂小问答、计算器互动与答题记录显示',
    '完善时间转换器与课程缺勤记录联动，减少跳转时间后课程状态不一致的问题',
    '整理发布脚本与本地备份流程，压缩失败会自动重试并避免复制半成品 zip',
  ],
  '1.7.8': [
    '完善默认 AI 判题配置，玩家无需填写 API Key 也可通过云端代理使用默认 AI',
    '整理通用 AI 文件结构，为后续 NPC、课程与事件接入 AI 能力做准备',
    '优化自定义 API 设置提示，补充不同平台的 API Key 格式与默认模型说明',
    '扩展课程与考试相关内容，并优化课程系统、存档与发布流程',
  ],
  '1.7.7': [
    '新增默认 AI 判题接口配置，玩家无需填写 API Key 也可使用默认 AI',
    '接入 Cloudflare Worker 后端代理，默认 API Key 不再暴露在前端代码中',
    '新增 OpenAI、DeepSeek、Minimax、豆包、Claude、Gemini、千问、GLM、Kimi、Azure 等 API 提供商配置',
    '优化 API Key 设置界面，补充不同平台的 Key 格式与默认模型提示',
    '整理 AI 相关文件结构，为后续 NPC 接入 AI 做准备',
  ],
  '1.7.6': [
    '新增四年级人文方向选科与六年级 A-Level 选科课表',
    'GCSE 与 A-Level 考试现在会按选科范围判断报名资格',
    '重构并补充麻瓜学术系九科课文与题库内容',
    '优化不同年级的麻瓜学术系课程表生成逻辑',
    '完善麻瓜学术系教授、成就与跨学科关系文本',
  ],
  '1.7.5': [
    '新增炼金术、占卜学、算术占卜、古代魔文、保护神奇动物等课程的好好学习内容！',
    '麻瓜学术系改为英国Year 7课程体系，英语调整为拉丁语，语文与文学调整为英语文学',
    '道德与法治调整为哲学与伦理，并更新课程事件与教授介绍',
    '完善麻瓜学术系九门课程的课文、题库、考试系统与课程表安排',
    '课程表现在会按日期和当前行动时段开放对应课程',
    '新增飞行课与幻影移形的好好学习内容、题库和课程接入',
    '补充魔咒学、魔药学等霍格沃茨课程题库内容',
    '新增无课日期提示与节假日课程限制',
    '优化存档读取入口与存档槽位识别',
  ],
  '1.7.4': [
    '修复了一些不知道什么bug！',
  ],
  '1.7.3': [
    '修复“学习课程”打不开的bug',
    '新增麻瓜学术系课程表！',
  ],
  '1.7.2': [
    '新增魔法史的好好学习版！',
    '新增黑魔法防御术的好好学习版！',
    '新增天文学的好好学习版！',
    '新增草药学的好好学习版！',
    '新增魔药学的好好学习版！',
    '新增道具：混血王子的旧书',
    '修复了编码错误',
  ],
  '1.7.1': [
    '假期可以出门探险啦！',
  ],
  '1.7.0': [
    '现在可以送礼啦！',
  ],
  '1.6.2': [
    '新增道具：时间转换器',
    '新增时间转换器相关成就',
    '修正决斗逻辑，现在的决斗更贴合原著了！',
    '新增决斗对手池',
    '修正决斗逻辑，现在的决斗不会痛击队友了！',
  ],
  '1.6.1': [
    '补充时间轴剧情',
    '补充生日快乐剧情',
    '调整人物UI',
    '决斗训练场现在可以挑战教授和认识的人了！',
    '读取存档后决斗面板不刷新的问题',
    '修复4v4对手队伍列表为空的问题',
    '修复无法完成任务的问题',
    '修复决斗不扣行动次数的问题',
    '修复飞行羽毛的emoji',
    '扩大背包格子大小',
    '修复角色事件不变色的问题',
    '增加院徽emoji',
  ],
  '1.6.0': [
    '新增时间轴剧情！',
    '人物关系面板可折叠！',
    '新增弗雷德&乔治·韦斯莱角色！',
    '咒语图鉴更改入口至决斗训练场',
    '咒语图鉴更改为只显示已知咒语',
    '更改背包为弹出式面板，使用道具有弹窗提示',
    '更改信息为弹出式面板',
    '更改成就为弹出式面板',
    '更改初始时间为1991-09-02夜晚',
    '更改剧情显示模式',
    '更改学院分进度条为沙漏状，积分为圆球',
    '修复”好好学习“不加分的bug',
    '修复”好好学习“后行动次数清零不进入到下一天的bug',
    '修复学院分沙漏的沙子垂直排列的bug',
    '更改”参与剧情“触发模式为手动触发',
    '新增行动日志筛选模式',
    '新增角色行为事件系统',
    '修复无法探索的bug',
  ],
  '1.5.2': [
    '捉虫：探索进度不持久化',
    '捉虫：商店系统绕过货币系统',
    '捉虫：存档读写函数统一',
    '捉虫：日志无限增长',
    '捉虫：决斗面板进入就扣行动',
    '捉虫：初始金币硬编码不一致',
    '捉虫：buildSaveData 缺少字段',
    '捉虫：renderLog 性能优化',
    '捉虫：空 catch 块',
  ],
  '1.5.1': [
    '捉虫：每次刷新都得重新建立角色',
    '捉虫：完成课程没有加熟练度',
    '捉虫：偶遇同学没有计入游戏中的行动日志',
    '捉虫：三次行动次数用完没有自动更新下一天',
  ],
  '1.5.0': [
    '新增任务系统！',
    '新增学生好感度系统！现在可以和学生组队了！',
  ],
  '1.4.0': [
    '新增决斗系统！',
    '融合“学习课程”和“训练魔咒”，更新魔咒熟练度逻辑',
    '修正学院分不加分的bug',
    '新增4v4决斗！可邀请角色组队决斗',
  ],
  '1.3.8': [
    '新增道具系统！',
    '新增变形术课的“好好学习”版',
    '新增魔咒课的“好好学习”版',
  ],
  '1.3.7': [
    '新增好感度系统！',
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
    const save = getSave();
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

const versionModalScrollLock = {
  scrollY: 0,
  bodyStyle: null,
  htmlOverflow: '',
};

function lockVersionModalScroll() {
  const body = document.body;
  const html = document.documentElement;
  if (!body || versionModalScrollLock.bodyStyle) return;

  versionModalScrollLock.scrollY = window.scrollY || html.scrollTop || body.scrollTop || 0;
  versionModalScrollLock.htmlOverflow = html.style.overflow;
  versionModalScrollLock.bodyStyle = {
    position: body.style.position,
    top: body.style.top,
    left: body.style.left,
    right: body.style.right,
    width: body.style.width,
    overflow: body.style.overflow,
  };

  body.classList.add('modal-open');
  html.style.overflow = 'hidden';
  body.style.position = 'fixed';
  body.style.top = `-${versionModalScrollLock.scrollY}px`;
  body.style.left = '0';
  body.style.right = '0';
  body.style.width = '100%';
  body.style.overflow = 'hidden';
}

function unlockVersionModalScroll() {
  const body = document.body;
  const html = document.documentElement;
  if (!body || !versionModalScrollLock.bodyStyle) return;

  const { bodyStyle, htmlOverflow, scrollY } = versionModalScrollLock;
  body.classList.remove('modal-open');
  html.style.overflow = htmlOverflow;
  body.style.position = bodyStyle.position;
  body.style.top = bodyStyle.top;
  body.style.left = bodyStyle.left;
  body.style.right = bodyStyle.right;
  body.style.width = bodyStyle.width;
  body.style.overflow = bodyStyle.overflow;

  versionModalScrollLock.bodyStyle = null;
  setTimeout(() => window.scrollTo(0, scrollY), 0);
}

function preventVersionModalBackgroundScroll(e) {
  const logWrapper = document.getElementById('version-modal-log');
  if (logWrapper && logWrapper.contains(e.target)) return;
  e.preventDefault();
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
    font-family: inherit;
    animation: slideUp 0.4s ease-out;
  `;

  const logWrapper = document.createElement('div');
  logWrapper.id = 'version-modal-log';
  logWrapper.style.cssText = `
    flex: 1;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
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
  lockVersionModalScroll();
  modal.addEventListener('wheel', preventVersionModalBackgroundScroll, { passive: false });
  modal.addEventListener('touchmove', preventVersionModalBackgroundScroll, { passive: false });

  const closeBtn = document.getElementById('close-version-modal');
  closeBtn.onclick = () => {
    modal.removeEventListener('wheel', preventVersionModalBackgroundScroll);
    modal.removeEventListener('touchmove', preventVersionModalBackgroundScroll);
    modal.remove();
    style.remove();
    unlockVersionModalScroll();
  };
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

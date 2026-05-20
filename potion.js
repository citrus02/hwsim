// potion.js — 手动熬制版（严格步骤）
import { potions, materialProcessingMap } from './potion-data.js';
import { getMatEmoji } from "./explore-data.js";
import { onBrewResult } from './affinity-system.js';
import { initPotionSave, hasPrinceBook, PotionSystem, autoUnlockPotionByCourse, getPotionListWithStatus, brewPotion } from './potion-core.js';
import { createFailModal, showFailModal } from './potion-fail-modal.js';
import { STIR_CIRCLES, buildPotionSteps, getStepAt, getStepViolationMessage } from './potion-brew-steps.js';

let currentPotionSourceType = "hogwarts";
let allPotionData = [];
let selectedPotion = null;
let brewPhase = 'idle';
let stirCount = 0;
let prepMaterialName = null;
let processedMaterials = {};
let liquidState = 'initial';
let addedMaterials = {};
let currentStepIndex = 0; // 当前应该执行的步骤
let stepsList = []; // 步骤列表
let backTopBtn = null;

// ==================== 存档 ====================
function addAllPotionMaterials() {
  const data = initPotionSave();
  if (!data.bag) data.bag = { material: [], potion: [], item: [] };
  const matList = data.bag.material;

  potions.forEach(p => {
    if (!p.materials) return;
    p.materials.forEach((m, i) => {
      const need = (p.quantities[i] || 0) + 5;
      const exist = matList.find(it => {
        if (!it) return false;
        return (typeof it === 'string' ? it : it.name) === m;
      });
      if (exist) {
        exist.count = (exist.count || 1) + need;
      } else {
        matList.push({ name: m, count: need });
      }
    });
  });

  data.bag.material = matList;
  window.saveSys?.setSave?.(data);
  window.doStudyLog?.('✅ 已补齐所有魔药材料');
  if (window.renderBag) window.renderBag();
  if (selectedPotion) renderBrewStation();
}

// ==================== 弹窗 ====================
function resetPrepState() { prepMaterialName = null; processedMaterials = {}; liquidState = 'initial'; }
function resetStirState() { stirCount = 0; }
function resetAll() { resetStirState(); resetPrepState(); addedMaterials = {}; currentStepIndex = 0; stepsList = []; }

function resetFailedBrew() {
  brewPhase = 'idle';
  resetAll();
  renderBrewStation();
}

// ==================== 构建步骤列表 ====================
function buildStepsList() {
  if (!selectedPotion) return;
  stepsList = buildPotionSteps(selectedPotion);
  currentStepIndex = 0;
}

function getCurrentStep() {
  return getStepAt(stepsList, currentStepIndex);
}

function advanceStep() {
  currentStepIndex++;
  const step = stepsList[currentStepIndex];
  if (step && step.type === 'stir' && brewPhase === 'idle') {
    startStirring();
  } else if (currentStepIndex >= stepsList.length && brewPhase === 'idle') {
    startStirring();
  }
}

function checkStepViolation(actionType, material, action) {
  const step = getCurrentStep();
  const message = getStepViolationMessage(step, actionType, material, action);
  if (!message) return false;
  triggerFail(message);
  return true;
}

function triggerFail(reason) {
  brewPhase = 'fail';
  liquidState = 'initial';
  resetStirState();
  resetPrepState();
  addedMaterials = {};
  currentStepIndex = 0;
  stepsList = [];

  // 失败视觉效果
  const cauldron = document.getElementById('pot-cauldron');
  const liquid = document.getElementById('pot-liquid');
  if (cauldron) cauldron.classList.add('fail');
  if (liquid) { liquid.classList.remove('transitioning', 'clear'); liquid.classList.add('fail'); }

  const fails = [
    '坩埚冒出刺鼻的绿烟，整个房间弥漫着硫磺味...',
    '药液突然沸腾溢出一地，台面上烧出焦黑的印记...',
    '砰的一声！坩埚底部裂开，黏稠的液体流淌得到处都是...',
    '药液瞬间凝固成硬块，像水泥一样死死粘在坩埚里...',
    '一股恶臭扑面而来，你的眉毛差点被熏掉...',
    '液体变成了诡异的紫色并开始冒泡，像活的一样蠕动着...',
    '坩埚壁突然变得滚烫发红，差点把你的手烫伤...'
  ];
  const randomFail = fails[Math.floor(Math.random() * fails.length)];

  showFailModal(`${reason}\n\n${randomFail}`);
  window.doStudyLog?.(`💥 熬制失败：${reason}`);
  renderBrewStation();
}

// ==================== 处理材料 ====================
function processMaterial(action) {
  if (!prepMaterialName) { updateHint('⚠️ 请先在材料背包中选择要处理的材料'); return; }

  if (checkStepViolation('process', prepMaterialName, action)) return;

  const mapping = materialProcessingMap[prepMaterialName];
  updateHint(`✅ ${mapping.resultName} 处理完成，已加入坩埚`);

  const data = initPotionSave();
  const matList = [...(data.bag?.material || [])];
  for (let j = 0; j < matList.length; j++) {
    const slot = matList[j]; if (!slot) continue;
    if ((typeof slot === 'string' ? slot : slot.name) === prepMaterialName) {
      if ((slot.count || 1) <= 1) matList[j] = null; else slot.count--;
      break;
    }
  }
  data.bag.material = matList;
  window.saveSys?.setSave?.(data);
  processedMaterials[prepMaterialName] = mapping.resultName;
  addedMaterials[prepMaterialName] = true;
  prepMaterialName = null;
  advanceStep();
  renderBrewStation();
}

function addMaterialToCauldron(material, quantity) {
  if (checkStepViolation('add', material, null)) return;

  const data = initPotionSave();
  const matList = [...(data.bag?.material || [])];
  let needed = quantity;
  for (let j = 0; j < matList.length && needed > 0; j++) {
    const slot = matList[j]; if (!slot) continue;
    if ((typeof slot === 'string' ? slot : slot.name) === material) {
      const cnt = slot.count || 1;
      if (cnt <= needed) { needed -= cnt; matList[j] = null; } else { slot.count = cnt - needed; needed = 0; }
    }
  }
  data.bag.material = matList;
  window.saveSys?.setSave?.(data);
  addedMaterials[material] = true;
  updateHint(`✅ ${material} 已加入坩埚`);
  advanceStep();
  renderBrewStation();
}

function updateHint(text) { const h = document.getElementById('pot-hint'); if (h) h.textContent = text; }

// ==================== 主面板 ====================
function openPotionPanel() {
  autoUnlockPotionByCourse();
  const main = document.getElementById('actionMain'); if (main) main.style.display = 'none';
  document.getElementById('potionMain')?.remove();
  createFailModal(resetFailedBrew);
  selectedPotion = null; brewPhase = 'idle'; resetAll();

  const box = document.createElement('div'); box.id = 'potionMain';
  box.innerHTML = `
    <div class="title">⚗️ 熬制魔药</div>
    <button id="pot-fill-btn" class="action-btn potion-fill-btn" style="display:none;">🧪 一键补齐所有魔药材料</button>
    <button id="pot-back-top" class="action-btn potion-back-btn" style="display:none;">← 返回上一层</button>
    <div id="pot-container"></div>
    <button id="pot-back-main" class="action-btn" style="margin-top:10px;">← 返回行动</button>`;
  const card = document.querySelector('#actionMain')?.closest('.card'); if (card) card.appendChild(box);
  box.querySelector('#pot-fill-btn').onclick = addAllPotionMaterials;
  box.querySelector('#pot-back-main').onclick = closePotionPanel;
  backTopBtn = box.querySelector('#pot-back-top');
  backTopBtn.onclick = () => { selectedPotion = null; brewPhase = 'idle'; resetAll(); backTopBtn.style.display = 'none'; renderPotionRoot(); };
  allPotionData = getPotionListWithStatus();
  renderPotionRoot();
}

function closePotionPanel() {
  document.getElementById('potionMain')?.remove();
  document.getElementById('potionFailModal')?.remove();
  const main = document.getElementById('actionMain'); if (main) main.style.display = 'block';
  selectedPotion = null; brewPhase = 'idle'; resetAll();
  if (window.timeSystem?.dailyActionLeft <= 0) {
    setTimeout(() => { window.nextTime?.(); window.syncActionUI?.(); }, 50);
  }
}

// ==================== 分类列表 一排三列 ====================
function renderPotionRoot() {
  const wrap = document.getElementById('pot-container'); if (!wrap) return;
  wrap.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'potion-cat-grid';
  [{ icon: '🏫', name: '霍格沃茨课程', desc: '1~7年级｜O.W.L.｜N.E.W.T.', type: 'hogwarts' },
   { icon: '📜', name: '自学配方', desc: '禁书区·混血王子·恶作剧', type: 'self' },
   { icon: '💀', name: '黑魔法禁药', desc: '剧毒·诅咒·禁忌之力', type: 'dark' }].forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'potion-cat-btn';
    btn.innerHTML = `<div class="potion-cat-icon">${cat.icon}</div><div class="potion-cat-name">${cat.name}</div><div class="potion-cat-desc">${cat.desc}</div>`;
    btn.onclick = () => { currentPotionSourceType = cat.type; if (backTopBtn) backTopBtn.style.display = 'block'; renderPotionList(); };
    grid.appendChild(btn);
  });
  wrap.appendChild(grid);
}

// ==================== 配方列表 一排三列 ====================
function renderPotionList() {
  const wrap = document.getElementById('pot-container'); if (!wrap) return;
  wrap.innerHTML = '';
  const filtered = allPotionData.filter(p => p.sourceType === currentPotionSourceType);
  const grid = document.createElement('div');
  grid.className = 'potion-recipe-grid';

  filtered.forEach(potion => {
    const btn = document.createElement('button');
    btn.className = 'potion-recipe-btn';
    if (selectedPotion?.id === potion.id) btn.classList.add('selected');
    if (!potion.isUnlocked) btn.classList.add('locked');

    let matHtml = '';
    if (potion.isUnlocked) {
      matHtml = '<div class="potion-recipe-mats">';
      potion.materials.forEach((m, i) => matHtml += `${getMatEmoji(m)}${m}×${potion.quantities[i]} `);
      matHtml += '</div>';
    }

    btn.innerHTML = `
      <div class="potion-recipe-name${!potion.isUnlocked ? ' locked' : ''}">${potion.icon} ${potion.name}${potion.isUnlocked ? '' : ' 🔒'}</div>
      <div class="potion-recipe-eng">${potion.english}</div>
      ${potion.isUnlocked ? `<div class="potion-recipe-prof">熟练度：${potion.proficiency >= 100 ? '【精通】' : potion.proficiency + '%'}</div>` : `<div class="potion-recipe-lock">🔒 ${potion.unlockTip}</div>`}
      <div class="potion-recipe-effect">${potion.effect}</div>${matHtml}`;

    btn.onclick = () => {
      if (!potion.isUnlocked) { window.doStudyLog?.(`❌ ${potion.name}`); return; }
      selectPotion(potion);
    };
    grid.appendChild(btn);
  });
  wrap.appendChild(grid);
}

function selectPotion(potion) {
  selectedPotion = potion;
  brewPhase = 'idle';
  resetAll();
  buildStepsList();
  renderBrewStation();
}

// ==================== 熬制台 ====================
function renderBrewStation() {
  const wrap = document.getElementById('pot-container'); if (!wrap) return;
  wrap.innerHTML = '';

  const data = initPotionSave();
  const potionColor = selectedPotion?.color || '#f4c542';
  const potionColorName = selectedPotion?.colorName || '金色';
  const bagMats = data.bag?.material || [];
  const ownMap = {};
  bagMats.forEach(s => { if (!s) return; ownMap[s.name] = (ownMap[s.name] || 0) + (s.count || 1); });

  let canBrew = true;
  selectedPotion.materials.forEach((m, i) => { if ((ownMap[m] || 0) < selectedPotion.quantities[i]) canBrew = false; });
  const allDone = currentStepIndex >= stepsList.length;

  // 当前步骤提示
  let currentStepHint = '';
  const step = getCurrentStep();
  if (step && brewPhase === 'idle') {
    if (step.type === 'process') currentStepHint = `👉 下一步：点击${step.material}放入处理台并${step.verb}`;
    else if (step.type === 'add') currentStepHint = `👉 下一步：点击${step.material}直接加入坩埚`;
    else if (step.type === 'stir') currentStepHint = '👉 下一步：点击逆时针按钮搅拌坩埚';
  }

  const hintText = brewPhase === 'fail' ? '💥 熬制失败！请点击清理一新重新开始' :
    brewPhase === 'stirring' ? '↶ 逆时针搅拌坩埚！完成3圈自动熬制' :
    brewPhase === 'brewing' ? '🔥 搅拌完成！正在熬制...' :
    brewPhase === 'done' ? `✨ ${selectedPotion.name} 熬制成功！` :
    currentStepHint || '准备开始...';

  // 按钮状态
  const canProcess = brewPhase === 'idle' && prepMaterialName !== null;
  const isStirring = brewPhase === 'stirring';

  wrap.innerHTML = `
    <div class="brew-station">
      <!-- 标题 -->
      <div class="brew-title-row">
        <span class="brew-icon">${selectedPotion.icon}</span>
        <div>
          <div class="brew-name">${selectedPotion.name}</div>
          <div class="brew-eng">${selectedPotion.english}</div>
        </div>
        <div class="brew-prof-badge">
          ${selectedPotion.proficiency >= 100
            ? '<span class="brew-prof-mastered">✦ 精通</span>'
            : `<span class="brew-prof-num">${selectedPotion.proficiency}<span class="brew-prof-pct">%</span></span><div class="brew-prof-bar"><div class="brew-prof-fill" style="width:${selectedPotion.proficiency}%"></div></div>`}
        </div>
      </div>

      <div class="brew-workarea">
        <!-- 坩埚列（左） -->
        <div class="brew-cauldron-col">

          <!-- 课堂笔记 -->
          <div class="prince-notes">
            <div class="prince-notes-title">📜 课堂笔记</div>
            <div id="pot-steps" class="prince-notes-steps">
              ${stepsList.map((s, i) => {
                let label = '';
                if (s.type === 'process') label = `${s.verb}${s.material}`;
                else if (s.type === 'add') label = `加入${s.material}`;
                else label = `逆时针搅拌${s.count}圈`;
                const isPassed = i < currentStepIndex;
                const isCurrent = i === currentStepIndex;
                return `<div class="prince-step ${isPassed?'done':''} ${isCurrent?'current':''}">${i+1}. ${label} ${isPassed?'✓':''} ${isCurrent?'←':''}</div>`;
              }).join('')}
            </div>
          </div>

          <!-- 坩埚 -->
          <div id="pot-cauldron" class="brew-cauldron ${brewPhase} ${hasPrinceBook()?'prince-aura':''}">
            <div id="pot-liquid" class="brew-liquid ${liquidState}" 
              style="${liquidState==='golden'?`background:${potionColor};box-shadow:inset 0 0 20px ${potionColor},0 0 40px ${potionColor};`:liquidState==='clear'?`box-shadow:inset 0 0 20px #2c4b5e,0 0 30px ${potionColor}80;`:''}">
            </div>
            ${hasPrinceBook()?`<div class="prince-glow"></div>`:''}
          </div>

          <!-- 搅拌按钮 -->
          <div class="stir-row">
            <button id="pot-stir-cw-btn" class="stir-btn">↷</button>
            <span id="pot-stir-count" class="stir-count">${stirCount}/${STIR_CIRCLES}</span>
            <button id="pot-stir-ccw-btn" class="stir-btn">↶</button>
          </div>

          <div id="pot-liquid-label" class="brew-liq-label">
            ${brewPhase==='done'?`🌟 ${potionColorName}：${selectedPotion.name}`:
              brewPhase==='fail'?'💥 焦黑冒烟，恶臭弥漫':
              liquidState==='initial'?'🌫️ 浑浊的深褐色':
              liquidState==='transitioning'?'🌊 搅拌中...颜色逐渐变化':
              liquidState==='clear'?`✨ 变得清澈，泛起${potionColorName}光泽`:
              '等待中...'}
          </div>

          <!-- 清理一新 -->
          <button id="pot-reset-btn" class="brew-reset-btn" style="margin-top:8px;">
            ${brewPhase==='done'||brewPhase==='fail'?'🔄 再熬一次':'🧹 清理一新'}
          </button>
        </div>

        <!-- 右侧面板（材料背包 + 处理台） -->
        <div class="brew-right-panel">
          <!-- 材料背包 -->
          <div class="brew-mat-bag">
            <div class="brew-section-title">🧺 材料背包</div>
            <div class="brew-mat-list">
              ${selectedPotion.materials.map((m, i) => {
                const own = ownMap[m] || 0, need = selectedPotion.quantities[i], ok = own >= need;
                const needsProc = materialProcessingMap[m] && !processedMaterials[m];
                const isDone = addedMaterials[m] || processedMaterials[m];
                return `<button class="brew-mat-btn ${isDone?'done':''} ${!ok&&!isDone?'short':''}" data-mat="${m}" data-qty="${need}" data-proc="${needsProc}">
                  ${getMatEmoji(m)} ${m}×${need} (${ok?'✓':'✗'}${own})${isDone?' ✓':''}
                </button>`;
              }).join('')}
            </div>
          </div>

          <!-- 处理台 -->
          <div class="brew-prep">
            <div class="brew-section-title brew-prep-title">🔪 材料处理台</div>
            <div class="brew-prep-table">
              <div id="pot-prep-slot" class="brew-prep-slot">${prepMaterialName ? `${getMatEmoji(prepMaterialName)} ${prepMaterialName}` : '⬜ 空置'}</div>
              <div class="brew-prep-actions">
                <button id="pot-cut-btn" class="brew-prep-btn">🔪 切割</button>
                <button id="pot-crush-btn" class="brew-prep-btn">💎 压碎</button>
                <button id="pot-juice-btn" class="brew-prep-btn">💧 榨汁</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 下一步提示（全宽，独立一行） -->
      <div id="pot-hint" class="brew-hint brew-hint-full">${hintText}</div>
    </div>
  `;

  // ==================== 事件绑定 ====================

  // 搅拌按钮
  const cwBtn = wrap.querySelector('#pot-stir-cw-btn');
  const ccwBtn = wrap.querySelector('#pot-stir-ccw-btn');
  if (cwBtn) {
    if (isStirring) cwBtn.removeAttribute('disabled'); else cwBtn.setAttribute('disabled', '');
    cwBtn.onclick = () => {
      if (brewPhase !== 'stirring') return;
      stirCount--;
      if (stirCount < -2) stirCount = -2;
      const countEl = document.getElementById('pot-stir-count');
      if (countEl) countEl.textContent = `${stirCount}/${STIR_CIRCLES}`;
      updateHint('⚠️ 方向错了！请点击右侧 ↶ 逆时针搅拌！');
    };
  }
  if (ccwBtn) {
    if (isStirring) ccwBtn.removeAttribute('disabled'); else ccwBtn.setAttribute('disabled', '');
    ccwBtn.onclick = () => {
      if (brewPhase !== 'stirring') return;
      stirCount++;
      const countEl = document.getElementById('pot-stir-count');
      if (countEl) countEl.textContent = `${stirCount}/${STIR_CIRCLES}`;
      updateHint(`↶ 逆时针搅拌 ${stirCount}/${STIR_CIRCLES} 圈`);
      if (stirCount >= STIR_CIRCLES) finishBrew();
    };
  }

  // 处理台按钮
  const cutBtn = wrap.querySelector('#pot-cut-btn');
  const crushBtn = wrap.querySelector('#pot-crush-btn');
  const juiceBtn = wrap.querySelector('#pot-juice-btn');
  if (cutBtn) { if (canProcess) cutBtn.removeAttribute('disabled'); else cutBtn.setAttribute('disabled', ''); cutBtn.onclick = () => processMaterial('cut'); }
  if (crushBtn) { if (canProcess) crushBtn.removeAttribute('disabled'); else crushBtn.setAttribute('disabled', ''); crushBtn.onclick = () => processMaterial('crush'); }
  if (juiceBtn) { if (canProcess) juiceBtn.removeAttribute('disabled'); else juiceBtn.setAttribute('disabled', ''); juiceBtn.onclick = () => processMaterial('juice'); }

  // 重置按钮
  const resetBtn = wrap.querySelector('#pot-reset-btn');
  if (resetBtn) {
    resetBtn.onclick = () => { brewPhase = 'idle'; resetAll(); buildStepsList(); renderBrewStation(); };
  }

  // 材料按钮
  wrap.querySelectorAll('.brew-mat-btn').forEach(btn => {
    const matName = btn.dataset.mat;
    const alreadyDone = addedMaterials[matName] || processedMaterials[matName];
    
    if (alreadyDone || brewPhase !== 'idle') {
      btn.setAttribute('disabled', '');
    } else {
      btn.removeAttribute('disabled');
    }

    btn.onclick = () => {
      if (brewPhase !== 'idle') return;
      if (addedMaterials[matName] || processedMaterials[matName]) return;
      const qty = parseInt(btn.dataset.qty);
      const needsProc = btn.dataset.proc === 'true';
      if ((ownMap[matName] || 0) < qty) { window.doStudyLog?.(`❌ 材料不足: ${matName}`); return; }
      if (needsProc) {
        prepMaterialName = matName;
        const slot = document.getElementById('pot-prep-slot');
        if (slot) slot.innerHTML = `${getMatEmoji(matName)} ${matName}`;
        updateHint(`🔪 请选择处理方式：${matName}`);
        renderBrewStation();
      } else {
        addMaterialToCauldron(matName, qty);
      }
    };
  });
  
  if (allDone && brewPhase === 'idle') startStirring();
}

// ==================== 搅拌 & 熬制 ====================
function startStirring() {
  if (brewPhase !== 'idle') return;
  brewPhase = 'stirring'; resetStirState(); liquidState = 'transitioning';
  updateHint('↶ 点击右侧箭头逆时针搅拌！3圈后自动熬制');
  renderBrewStation();
}

function finishBrew() {
  brewPhase = 'brewing'; liquidState = 'clear';
  updateHint('🔥 搅拌完成！正在熬制...');
  if (window.costAction && !window.costAction()) {
    window.doStudyLog?.('❌ 行动次数不足');
    brewPhase = 'fail'; liquidState = 'initial';
    showBrewResult(false, '行动次数不足'); renderBrewStation(); return;
  }
  renderBrewStation();
  setTimeout(() => {
    const success = brewPotion(selectedPotion.id);
    brewPhase = success ? 'done' : 'fail';
    liquidState = success ? 'golden' : 'initial';
    // 好感度触发：成功 +1，精通 +5
    const mastered = success && (selectedPotion.proficiency >= 100);
    onBrewResult(success, mastered);
    showBrewResult(success);
    allPotionData = getPotionListWithStatus();
    renderBrewStation();
  }, 1500);
}

function showBrewResult(success, extraMsg) {
  const h = document.getElementById('pot-hint');
  if (success) { if (h) h.innerHTML = `🎉 <span style="color:var(--color-gold);">${selectedPotion.name}</span> 熬制成功！`; }
  else { if (h) h.textContent = extraMsg || `💥 ${selectedPotion.name} 熬制失败`; if (extraMsg) showFailModal(extraMsg); }
}

// ==================== 全局挂载 ====================
window.openPotionPanel = openPotionPanel;
window.closePotionPanel = closePotionPanel;
window.PotionSystem = PotionSystem;
window.brewPotion = brewPotion;
window.autoUnlockPotionByCourse = autoUnlockPotionByCourse;

export { openPotionPanel, closePotionPanel, PotionSystem, brewPotion, autoUnlockPotionByCourse, getPotionListWithStatus, addAllPotionMaterials };
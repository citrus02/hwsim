// potion.js — 手动熬制版（严格步骤）
import { potions, getPotionEmoji, materialProcessingMap } from './potion-data.js';
import { getMatEmoji } from "./explore-data.js";

let currentPotionSourceType = "hogwarts";
let allPotionData = [];
let selectedPotion = null;
let brewPhase = 'idle';
const STIR_CIRCLES = 3;
let stirCount = 0;
let prepMaterialName = null;
let processedMaterials = {};
let liquidState = 'initial';
let addedMaterials = {};
let currentStepIndex = 0; // 当前应该执行的步骤
let stepsList = []; // 步骤列表
let backTopBtn = null;

// ==================== 存档 ====================
function initPotionSave() {
  const save = window.saveSys?.getSave?.() || {};
  if (!save.bag) save.bag = { material: [], potion: [], item: [] };
  if (!save.potion) save.potion = {};
  if (!save.year) save.year = 1;
  if (!save.flags) save.flags = {};
  return save;
}

function costMaterials(materials, quantities) {
  const data = initPotionSave();
  if (!data.bag?.material) return false;
  const matList = [...data.bag.material];
  for (let i = 0; i < materials.length; i++) {
    let total = 0;
    for (const s of matList) {
      if (!s) continue;
      if ((typeof s === 'string' ? s : s.name) === materials[i]) total += s.count || 1;
    }
    if (total < quantities[i]) return false;
  }
  for (let i = 0; i < materials.length; i++) {
    let need = quantities[i];
    for (let j = 0; j < matList.length; j++) {
      if (need <= 0) break;
      const slot = matList[j]; if (!slot) continue;
      if ((typeof slot === 'string' ? slot : slot.name) !== materials[i]) continue;
      const cnt = slot.count || 1;
      if (cnt <= need) { need -= cnt; matList[j] = null; } else { slot.count = cnt - need; need = 0; }
    }
  }
  data.bag.material = matList;
  window.saveSys?.setSave?.(data);
  return true;
}

// ==================== 解锁 ====================
function checkPotionUnlock(potion) {
  const data = initPotionSave();
  // data.year 存的是公元年份（如1991），需换算为年级（1991=1年级）
  const rawYear = data.year ?? 1991;
  const y = rawYear > 100 ? rawYear - 1990 : rawYear; // 兼容旧存档直接存年级的情况
  const f = data.flags;
  if (potion.grade === '一年级') return true;
  if (potion.id === 204 && f.unlock_chamber_of_secrets) return true;
  if (potion.id === 402 && f.unlock_chamber_of_secrets) return true;
  if (y >= 2 && potion.grade.includes('二年级')) return true;
  if (potion.id === 305 && f.helped_remus) return true;
  if (y >= 3 && potion.grade.includes('三年级')) return true;
  if (potion.id === 205 && f.unlock_goblet_of_fire) return true;
  if (y >= 4 && potion.grade.includes('四年级')) return true;
  if (potion.id === 207 && f.joined_da) return true;
  if (y >= 5 && potion.grade.includes('五年级')) return true;
  if (potion.id === 301 && f.got_prince_book) return true;
  if (potion.id === 302 && f.got_felix_reward) return true;
  if (potion.id === 601 && f.got_prince_book) return true;
  if (potion.id === 602 && f.got_prince_book) return true;
  if (potion.id === 401 && f.used_sectumsempra) return true;
  if (y >= 6 && potion.grade.includes('N.E.W.T.')) return true;
  if (potion.id === 604 && f.visited_wheezes) return true;
  if (potion.id === 803 && f.christmas_ball) return true;
  if (potion.id === 701 && f.phoenix_bond) return true;
  if (potion.grade.includes('黑魔法') && f.visited_black_market) return true;
  if (potion.id === 502 && f.hunt_horcruxes) return true;
  return false;
}

const PotionSystem = {
  allPotions: [...potions],
  getPotionById(id) { return this.allPotions.find(p => p.id === id); },
  getDifficulty(p) {
    if (p.grade.includes('一年级')) return 1;
    if (p.grade.includes('O.W.L.')) return 3;
    if (p.grade.includes('N.E.W.T.')) return 5;
    if (p.grade.includes('黑魔法')) return 6;
    return 2;
  },
  requiresProcessing(m) { return !!materialProcessingMap[m]; },
  getProcessedName(m) { return materialProcessingMap[m]?.resultName || m; }
};

function autoUnlockPotionByCourse() {
  const data = initPotionSave();
  if (!data.potion) data.potion = {};
  potions.forEach(p => {
    const unlocked = checkPotionUnlock(p);
    if (!data.potion[p.id]) data.potion[p.id] = { proficiency: 0, unlocked };
    else data.potion[p.id].unlocked = unlocked;
  });
  window.saveSys?.setSave?.(data);
}

function getPotionListWithStatus() {
  autoUnlockPotionByCourse();
  const data = initPotionSave();
  const pd = data.potion || {};
  return potions.map(p => {
    const item = pd[p.id] || { proficiency: 0, unlocked: checkPotionUnlock(p) };
    let st = 'hogwarts';
    if (p.type === '非课程') st = p.grade.includes('黑魔法') ? 'dark' : 'self';
    return {
      id: p.id, name: p.name, english: p.english,
      effect: p.effect, grade: p.grade, icon: p.icon || '⚗️',
      materials: p.materials || [], quantities: p.quantities || [],
      sourceType: st, isUnlocked: item.unlocked,
      proficiency: item.proficiency, maxProficiency: 100,
      unlockCondition: p.unlockCondition || '未开放',
      unlockTip: p.unlockTip || '尚未解锁',
      color: p.color || '#f4c542',
      colorName: p.colorName || '金色'
    };
  });
}

function brewPotion(potionId) {
  const potion = PotionSystem.getPotionById(potionId);
  if (!potion) return false;
  const data = initPotionSave();
  if (!data.potion[potionId]?.unlocked) { window.doStudyLog?.(`❌ ${potion.name} 尚未解锁`); return false; }
  if (!costMaterials(potion.materials, potion.quantities)) { window.doStudyLog?.(`❌ 材料不足`); return false; }
  const diff = PotionSystem.getDifficulty(potion);
  const successRate = Math.max(20, Math.min(100, 120 - diff * 10));
  if (Math.random() * 100 < successRate) {
    const d2 = initPotionSave();
    if (!d2.potion[potionId]) d2.potion[potionId] = { proficiency: 0, unlocked: true };
    d2.potion[potionId].proficiency = Math.min(100, d2.potion[potionId].proficiency + 5);
    window.saveSys?.setSave?.(d2);
    window.addPotionToBag?.({ name: potion.name, emoji: getPotionEmoji(potion.name), effect: potion.effect });
    window.doStudyLog?.(`🧪 熬制：${potion.name}（熟练度+5%，共${d2.potion[potionId].proficiency}%）`);
    return true;
  }
  window.doStudyLog?.(`💥 熬制失败：${potion.name}`);
  return false;
}

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
function createFailModal() {
  document.getElementById('potionFailModal')?.remove();
  const m = document.createElement('div');
  m.id = 'potionFailModal';
  m.className = 'potion-fail-modal';
  m.innerHTML = `<div class="potion-fail-content"><h3 class="potion-fail-title">💥 熬制失败</h3><p id="potionFailMessage" class="potion-fail-message"></p><button id="potionFailRetryBtn" class="potion-fail-retry-btn">🔄 清理一新，重新开始</button></div>`;
  document.body.appendChild(m);
  document.getElementById('potionFailRetryBtn').onclick = () => { hideFailModal(); brewPhase = 'idle'; resetAll(); renderBrewStation(); };
  m.addEventListener('click', e => { if (e.target === m) { hideFailModal(); brewPhase = 'idle'; resetAll(); renderBrewStation(); }});
  return m;
}
function showFailModal(msg) {
  let m = document.getElementById('potionFailModal'); if (!m) m = createFailModal();
  document.getElementById('potionFailMessage').textContent = msg;
  m.classList.add('visible');
}
function hideFailModal() { document.getElementById('potionFailModal')?.classList.remove('visible'); }

// ==================== 状态重置 ====================
function resetPrepState() { prepMaterialName = null; processedMaterials = {}; liquidState = 'initial'; }
function resetStirState() { stirCount = 0; }
function resetAll() { resetStirState(); resetPrepState(); addedMaterials = {}; currentStepIndex = 0; stepsList = []; }

// ==================== 构建步骤列表 ====================
function buildStepsList() {
  if (!selectedPotion) return;
  stepsList = [];
  currentStepIndex = 0;

  selectedPotion.materials.forEach(m => {
    if (materialProcessingMap[m]) {
      stepsList.push({ 
        type: 'process', 
        material: m, 
        action: materialProcessingMap[m].action, 
        verb: materialProcessingMap[m].processVerb, 
        result: materialProcessingMap[m].resultName 
      });
    } else {
      stepsList.push({ type: 'add', material: m });
    }
  });

  stepsList.push({ type: 'stir', count: STIR_CIRCLES });
}

// ==================== 步骤检查 ====================
function getCurrentStep() {
  if (currentStepIndex >= stepsList.length) return null;
  return stepsList[currentStepIndex];
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
  if (!step) return true; // 没有步骤了（应该在搅拌阶段）

  if (step.type === 'stir' && actionType !== 'stir') {
    triggerFail('你打乱了制作顺序！坩埚冒出刺鼻的绿烟...');
    return true;
  }

  if (step.type === 'process') {
    if (actionType === 'add' && material === step.material) {
      triggerFail(`${step.material}需要先${step.verb}！直接丢进去导致药液沸腾喷溅！`);
      return true;
    }
    if (actionType === 'process' && material === step.material && action === step.action) {
      return false; // 正确
    }
    if (actionType === 'process' && material === step.material && action !== step.action) {
      triggerFail(`处理方式错误！应该${step.verb}${step.material}，你的操作让材料彻底毁了`);
      return true;
    }
    if (actionType === 'process' && material !== step.material) {
      triggerFail(`步骤错误！当前应该先处理${step.material}，而不是${material}`);
      return true;
    }
  }

  if (step.type === 'add') {
    if (actionType === 'process') {
      triggerFail(`${material}不需要处理！直接加入坩埚即可`);
      return true;
    }
    if (actionType === 'add' && material === step.material) {
      return false; // 正确
    }
    if (actionType === 'add' && material !== step.material) {
      triggerFail(`步骤错误！当前应该加入${step.material}，而不是${material}`);
      return true;
    }
  }

  triggerFail('步骤混乱！药液变得浑浊不堪...');
  return true;
}

// ==================== 失败触发（原著风格） ====================
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
  createFailModal();
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
          <div id="pot-cauldron" class="brew-cauldron ${brewPhase}">
            <div id="pot-liquid" class="brew-liquid ${liquidState}" 
              style="${liquidState==='golden'?`background:${potionColor};box-shadow:inset 0 0 20px ${potionColor},0 0 40px ${potionColor};`:liquidState==='clear'?`box-shadow:inset 0 0 20px #2c4b5e,0 0 30px ${potionColor}80;`:''}">
            </div>
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
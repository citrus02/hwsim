// potion-core.js - potion persistence, unlocks, materials, and brewing service
import { potions, getPotionEmoji, materialProcessingMap } from './potion-data.js';

export function initPotionSave() {
  const save = window.saveSys?.getSave?.() || {};
  if (!save.bag) save.bag = { material: [], potion: [], item: [] };
  if (!save.potion) save.potion = {};
  if (!save.year) save.year = 1;
  if (!save.flags) save.flags = {};
  return save;
}

export function costMaterials(materials, quantities) {
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

export function hasPrinceBook() {
  const data = initPotionSave();
  const items = data.bag?.item || [];
  return items.some(item => item.name === "混血王子的旧书");
}

// ==================== 解锁 ====================
export function checkPotionUnlock(potion) {
  const data = initPotionSave();
  // data.year 存的是公元年份（如1991），需换算为年级（1991=1年级）
  const rawYear = data.year ?? 1991;
  const y = rawYear > 100 ? rawYear - 1990 : rawYear; // 兼容旧存档直接存年级的情况
  const f = data.flags;
  const hasBook = hasPrinceBook();
  
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
  
  // 混血王子旧书解锁魔药
  if (potion.id === 301 && (f.got_prince_book || hasBook)) return true;
  if (potion.id === 302 && f.got_felix_reward) return true;
  if (potion.id === 601 && (f.got_prince_book || hasBook)) return true;
  if (potion.id === 602 && (f.got_prince_book || hasBook)) return true;
  
  if (potion.id === 401 && f.used_sectumsempra) return true;
  if (y >= 6 && potion.grade.includes('N.E.W.T.')) return true;
  if (potion.id === 604 && f.visited_wheezes) return true;
  if (potion.id === 803 && f.christmas_ball) return true;
  if (potion.id === 701 && f.phoenix_bond) return true;
  if (potion.grade.includes('黑魔法') && f.visited_black_market) return true;
  if (potion.id === 502 && f.hunt_horcruxes) return true;
  return false;
}

export const PotionSystem = {
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

export function autoUnlockPotionByCourse() {
  const data = initPotionSave();
  if (!data.potion) data.potion = {};
  potions.forEach(p => {
    const unlocked = checkPotionUnlock(p);
    if (!data.potion[p.id]) data.potion[p.id] = { proficiency: 0, unlocked };
    else data.potion[p.id].unlocked = unlocked;
  });
  window.saveSys?.setSave?.(data);
}

export function getPotionListWithStatus() {
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

export function brewPotion(potionId) {
  const potion = PotionSystem.getPotionById(potionId);
  if (!potion) return false;
  const data = initPotionSave();
  if (!data.potion[potionId]?.unlocked) { window.doStudyLog?.(`❌ ${potion.name} 尚未解锁`); return false; }
  if (!costMaterials(potion.materials, potion.quantities)) { window.doStudyLog?.(`❌ 材料不足`); return false; }
  
  const hasBook = hasPrinceBook();
  const diff = PotionSystem.getDifficulty(potion);
  const baseSuccessRate = Math.max(20, Math.min(100, 120 - diff * 10));
  const successRate = hasBook ? 100 : baseSuccessRate;
  
  if (hasBook) {
    window.doStudyLog?.(`📕 混血王子的旧书发挥作用——魔药制作成功率提升至100%！`);
  }
  
  if (Math.random() * 100 < successRate) {
    const d2 = initPotionSave();
    if (!d2.potion[potionId]) d2.potion[potionId] = { proficiency: 0, unlocked: true };
    d2.potion[potionId].proficiency = Math.min(100, d2.potion[potionId].proficiency + 5);
    window.saveSys?.setSave?.(d2);
    window.addPotionToBag?.({ name: potion.name, emoji: getPotionEmoji(potion.name), effect: potion.effect });
    window.doStudyLog?.(`🧪 熬制：${potion.name}（熟练度+5%，共${d2.potion[potionId].proficiency}%）`);
    window._questHook_brew?.();
    return true;
  }
  window.doStudyLog?.(`💥 熬制失败：${potion.name}`);
  return false;
}

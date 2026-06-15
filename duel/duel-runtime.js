// duel-runtime.js - window-backed adapters used by the duel UI

export function getSpellListWithStatus() {
  if (window.getSpellListWithStatus) return window.getSpellListWithStatus();
  const save = window.saveSys?.getSave?.() || {};
  const learned = save.spellList || [];
  const prof    = save.spellProficiency || {};
  return learned.map(id => ({ id, nameCn: id, nameEn: id, isLearned: true, proficiency: prof[id] || 0, sourceType: 'hogwarts' }));
}
export function getSave()          { return window.saveSys?.getSave?.() || {}; }
export function setSave(data)      { if (window.saveSys?.setSave) window.saveSys.setSave(data); }
export function addLog(text)       { window.addLog?.(text); }
export function renderLog()        { window.renderLog?.(); }
export const GestureWidget = {
  render:        (...a) => window.GestureWidget?.render(...a),
  renderPreview: (...a) => window.GestureWidget?.renderPreview(...a)
};
export function getGestureBySpellId(id) { return window.getGestureBySpellId?.(id) || null; }
export function getGestureById(id)      { return window.getGestureById?.(id) || null; }

// ═══════════════════════════════════════════════════════════
// 对手数据库
// ═══════════════════════════════════════════════════════════

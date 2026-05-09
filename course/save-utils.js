/**
 * save-utils.js
 * 共享存档读写工具
 *
 * 统一封装 localStorage "hogwarts" 的读写，
 * 替代各文件中分散的 _load/_save/_loadData/_saveData。
 */

import { REMOVED_CHARACTERS } from '../affinity-data.js';

// ── 存档迁移脚本 ────────────────────────────────────────────────
// 处理旧版本存档数据的兼容性问题

function migrateSaveData(data) {
  // 迁移1: 清理已删除角色的好感度数据
  if (data.affinity) {
    for (const charKey of REMOVED_CHARACTERS) {
      if (data.affinity[charKey]) {
        console.warn(`[save-utils] 清理已删除角色数据: ${charKey}`);
        delete data.affinity[charKey];
      }
    }
  }
  
  // 迁移2: 清理已删除角色的 knownCharacters 记录
  if (data.knownCharacters) {
    data.knownCharacters = data.knownCharacters.filter(
      charKey => !REMOVED_CHARACTERS.includes(charKey)
    );
  }
  
  return data;
}

export function loadSave() {
  try {
    const raw = localStorage.getItem("hogwarts");
    const data = raw ? JSON.parse(raw) : {};
    return migrateSaveData(data);
  } catch (e) { console.warn('[save-utils] loadSave failed:', e); return {}; }
}

export function writeSave(data) {
  try {
    localStorage.setItem("hogwarts", JSON.stringify(data));
  } catch (e) { console.warn('[save-utils] writeSave failed:', e); }
}

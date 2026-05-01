/**
 * save-utils.js
 * 共享存档读写工具
 *
 * 统一封装 localStorage "hogwarts" 的读写，
 * 替代各文件中分散的 _load/_save/_loadData/_saveData。
 */

export function loadSave() {
  try {
    const raw = localStorage.getItem("hogwarts");
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

export function writeSave(data) {
  try {
    localStorage.setItem("hogwarts", JSON.stringify(data));
  } catch {}
}

/**
 * save-utils.js
 * Shared save read/write helpers for course modules.
 *
 * This file intentionally delegates to save-system.js so course modules and
 * the rest of the game use the same migration, recovery, and backup behavior.
 */

import { getSave, setSave, SAVE_KEY } from '../save-system.js';

export function loadSave() {
  try {
    return getSave();
  } catch (e) {
    console.error('[save-utils] Failed to load save:', e);
    return {};
  }
}

export function writeSave(data) {
  try {
    setSave(data);
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      console.error('[save-utils] Save storage quota exceeded. Please clear browser storage and retry.');
    } else {
      console.error('[save-utils] Failed to write save:', e);
    }
  }
}

export { SAVE_KEY };

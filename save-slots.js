// save-slots.js - named save slot persistence
import { migrateSaveData, unwrapSavePayload } from './save-system.js';

const SAVE_SLOT_KEY = "hogwarts_slots";
const SLOT_COUNT = 10;

export function getAllSlots() {
  try {
    const data = localStorage.getItem(SAVE_SLOT_KEY);
    const parsed = data ? JSON.parse(data) : [];
    const slots = Array.isArray(parsed)
      ? parsed.slice(0, SLOT_COUNT).map(slot => slot ? migrateSaveData(unwrapSavePayload(slot)) : null)
      : [];
    while (slots.length < SLOT_COUNT) slots.push(null);
    return slots;
  } catch (e) { return Array(SLOT_COUNT).fill(null); }
}

export function saveAllSlots(slots) {
  const normalized = Array.isArray(slots)
    ? slots.slice(0, SLOT_COUNT).map(slot => slot ? migrateSaveData(slot) : null)
    : [];
  while (normalized.length < SLOT_COUNT) normalized.push(null);
  localStorage.setItem(SAVE_SLOT_KEY, JSON.stringify(normalized));
}

#!/usr/bin/env node
/**
 * Audit affinity content coverage.
 *
 * Usage:
 *   node tools/audit-affinity-content.mjs
 *
 * The game has no build step; this script only imports ES modules and prints
 * authoring coverage so large content expansions can be tracked safely.
 */

globalThis.window = {};
globalThis.document = {};
globalThis.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

const TARGET_ACTIVE_CHAT = 100;
const TARGET_ENCOUNTERS = 100;
const TARGET_PROACTIVE = 20;

const inGradeRange = (entry, grade) => {
  if (!entry) return true;
  if (Array.isArray(entry.grades) && !entry.grades.includes(grade)) return false;
  if (entry.minGrade != null && grade < entry.minGrade) return false;
  if (entry.maxGrade != null && grade > entry.maxGrade) return false;
  return true;
};

const students = await import(`../affinity-students.js?v=${Date.now()}`);
const staff = await import(`../affinity-data.js?v=${Date.now()}`);
const registry = await import(`../characters/registry.js?v=${Date.now()}`);

const characters = {
  ...students.STUDENT_CHARACTERS,
  ...staff.AFFINITY_CHARACTERS,
};
const proactiveByKey = Object.fromEntries(
  registry.ALL_CHARACTERS.map(character => [character.key, character.proactive?.length || 0])
);

const rows = Object.entries(characters).map(([key, config]) => {
  const chat = config.activeChat?.events?.length || 0;
  const encounters = config.encounters?.length || 0;
  const proactive = proactiveByKey[key] || 0;
  return {
    key,
    name: config.name || key,
    chat,
    encounters,
    proactive,
    needChat: Math.max(0, TARGET_ACTIVE_CHAT - chat),
    needEncounters: Math.max(0, TARGET_ENCOUNTERS - encounters),
    needProactive: Math.max(0, TARGET_PROACTIVE - proactive),
  };
});

const summary = {
  characters: rows.length,
  chatMin: Math.min(...rows.map(row => row.chat)),
  chatMax: Math.max(...rows.map(row => row.chat)),
  encountersMin: Math.min(...rows.map(row => row.encounters)),
  encountersMax: Math.max(...rows.map(row => row.encounters)),
  proactiveRegistered: rows.filter(row => row.proactive > 0).length,
  proactiveTotal: rows.reduce((sum, row) => sum + row.proactive, 0),
};

console.log('Affinity content audit');
console.log(JSON.stringify(summary, null, 2));

console.log('\nUnder active-chat target:');
rows
  .filter(row => row.needChat > 0)
  .sort((a, b) => b.needChat - a.needChat)
  .forEach(row => console.log(`${row.key}\t${row.name}\tchat=${row.chat}\tneed=${row.needChat}`));

console.log('\nUnder encounter/clue target:');
rows
  .filter(row => row.needEncounters > 0)
  .sort((a, b) => b.needEncounters - a.needEncounters)
  .forEach(row => console.log(`${row.key}\t${row.name}\tenc=${row.encounters}\tneed=${row.needEncounters}`));

console.log('\nUnder proactive target:');
rows
  .filter(row => row.needProactive > 0)
  .sort((a, b) => b.needProactive - a.needProactive)
  .forEach(row => console.log(`${row.key}\t${row.name}\tproactive=${row.proactive}\tneed=${row.needProactive}`));

console.log('\nPer-grade minimum available content:');
for (let grade = 1; grade <= 7; grade++) {
  const gradeRows = Object.entries(characters).map(([key, config]) => {
    const chat = (config.activeChat?.events || []).filter(event => inGradeRange(event, grade)).length;
    const encounters = (config.encounters || []).filter(event => inGradeRange(event, grade)).length;
    return { key, chat, encounters, total: chat + encounters };
  });
  console.log(
    `grade ${grade}: chatMin=${Math.min(...gradeRows.map(row => row.chat))}, ` +
    `encMin=${Math.min(...gradeRows.map(row => row.encounters))}, ` +
    `totalMin=${Math.min(...gradeRows.map(row => row.total))}`
  );
}

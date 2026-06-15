/**
 * characters/_registry.js
 * 角色注册表 — 汇总导出所有角色对象，供调度器遍历
 */
import neville from './neville.js';
import harry from './harry.js';
import draco from './draco.js';
import hermione from './hermione.js';
import ron from './ron.js';
import luna from './luna.js';
import ginnyWeasley from './ginnyWeasley.js';
import fredWeasley from './fredWeasley.js';
import georgeWeasley from './georgeWeasley.js';
import { STUDENT_CHARACTERS } from '../affinity-students.js';
import { AFFINITY_CHARACTERS } from '../affinity-data.js';
import { YEAR1_CORE_STUDENT_PROACTIVE } from './proactive-packs/year1-core-students.js';
import { YEAR1_STUDENT_FOUNDATION_PROACTIVE } from './proactive-packs/year1-students-foundation.js';
import { YEAR1_STAFF_FOUNDATION_PROACTIVE } from './proactive-packs/year1-staff-foundation.js';
import { YEAR1_STUDENT_PROACTIVE_BATCH_1 } from './proactive-packs/year1-students-proactive-batch-1.js';
import { YEAR1_STAFF_PROACTIVE_BATCH_1 } from './proactive-packs/year1-staff-proactive-batch-1.js';
import { YEAR1_STUDENT_PROACTIVE_BATCH_2 } from './proactive-packs/year1-students-proactive-batch-2.js';
import { YEAR1_STAFF_PROACTIVE_BATCH_2 } from './proactive-packs/year1-staff-proactive-batch-2.js';
import { YEAR1_STUDENT_PROACTIVE_BATCH_3 } from './proactive-packs/year1-students-proactive-batch-3.js';
import { YEAR1_STAFF_PROACTIVE_BATCH_3 } from './proactive-packs/year1-staff-proactive-batch-3.js';
import { YEAR1_GRYFFINDOR_STUDENT_PLUS_PROACTIVE } from './proactive-packs/year1-gryffindor-students-plus.js';
import { YEAR1_SLYTHERIN_STUDENT_PLUS_PROACTIVE } from './proactive-packs/year1-slytherin-students-plus.js';
import { YEAR1_RAVENCLAW_STUDENT_PLUS_PROACTIVE } from './proactive-packs/year1-ravenclaw-students-plus.js';
import { YEAR1_HUFFLEPUFF_STUDENT_PLUS_PROACTIVE } from './proactive-packs/year1-hufflepuff-students-plus.js';
import { YEAR1_CORE_STAFF_PLUS_PROACTIVE } from './proactive-packs/year1-core-staff-plus.js';
import { YEAR1_MUGGLE_STAFF_PLUS_PROACTIVE } from './proactive-packs/year1-muggle-staff-plus.js';

const HAND_AUTHORED_CHARACTERS = [
  neville,
  harry,
  draco,
  hermione,
  ron,
  luna,
  ginnyWeasley,
  fredWeasley,
  georgeWeasley,
];

const HAND_AUTHORED_BY_KEY = Object.fromEntries(HAND_AUTHORED_CHARACTERS.map(character => [character.key, character]));

function makeFallbackCharacter(config) {
  return {
    key: config.key,
    name: config.name,
    house: config.house || null,
    persona: {
      summary: `${config.name}，${config.role || config.subject || '霍格沃茨成员'}。`,
      speechStyle: '保持原有角色气质，不使用元叙述，不跳出霍格沃茨语境。',
      facts: [config.role || config.subject || '霍格沃茨人物'],
    },
    proactive: [],
  };
}

function mergeProactive(character, packs = []) {
  const seen = new Set();
  const proactive = [];
  [...(character.proactive || []), ...packs.flat()].forEach(event => {
    if (!event?.id || seen.has(event.id)) return;
    seen.add(event.id);
    proactive.push(event);
  });
  return { ...character, proactive };
}

const ALL_CONFIGS = {
  ...STUDENT_CHARACTERS,
  ...AFFINITY_CHARACTERS,
};

export const ALL_CHARACTERS = Object.values(ALL_CONFIGS).map(config => {
  const base = HAND_AUTHORED_BY_KEY[config.key] || makeFallbackCharacter(config);
  return mergeProactive(base, [
    YEAR1_CORE_STUDENT_PROACTIVE[config.key] || [],
    YEAR1_STUDENT_FOUNDATION_PROACTIVE[config.key] || [],
    YEAR1_STAFF_FOUNDATION_PROACTIVE[config.key] || [],
    YEAR1_STUDENT_PROACTIVE_BATCH_1[config.key] || [],
    YEAR1_STAFF_PROACTIVE_BATCH_1[config.key] || [],
    YEAR1_STUDENT_PROACTIVE_BATCH_2[config.key] || [],
    YEAR1_STAFF_PROACTIVE_BATCH_2[config.key] || [],
    YEAR1_STUDENT_PROACTIVE_BATCH_3[config.key] || [],
    YEAR1_STAFF_PROACTIVE_BATCH_3[config.key] || [],
    YEAR1_GRYFFINDOR_STUDENT_PLUS_PROACTIVE[config.key] || [],
    YEAR1_SLYTHERIN_STUDENT_PLUS_PROACTIVE[config.key] || [],
    YEAR1_RAVENCLAW_STUDENT_PLUS_PROACTIVE[config.key] || [],
    YEAR1_HUFFLEPUFF_STUDENT_PLUS_PROACTIVE[config.key] || [],
    YEAR1_CORE_STAFF_PLUS_PROACTIVE[config.key] || [],
    YEAR1_MUGGLE_STAFF_PLUS_PROACTIVE[config.key] || [],
  ]);
});

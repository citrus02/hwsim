import { getSave, setSave, getYearGrade } from './save/save-system.js';
import { addMoney, getTotalKnuts } from './currency.js';
import { DAILY_QUEST_POOL, SIDE_QUESTS, ACHIEVEMENTS } from './quest/quest-data.js';

const SICKLES_PER_GALLEON = 17;
const KNUTS_PER_SICKLE = 29;
const KNUTS_PER_GALLEON = SICKLES_PER_GALLEON * KNUTS_PER_SICKLE;

function ensureEconomy(data = getSave()) {
  if (!data.economy || typeof data.economy !== 'object') data.economy = {};
  if (!data.economy.exploreMilestones || typeof data.economy.exploreMilestones !== 'object') {
    data.economy.exploreMilestones = {};
  }
  if (!data.economy.interestPaid || typeof data.economy.interestPaid !== 'object') {
    data.economy.interestPaid = {};
  }
  if (!data.economy.houseCupPaid || typeof data.economy.houseCupPaid !== 'object') {
    data.economy.houseCupPaid = {};
  }
  return data.economy;
}

export function splitKnuts(totalKnuts) {
  const safe = Math.max(0, Math.floor(Number(totalKnuts) || 0));
  const galleons = Math.floor(safe / KNUTS_PER_GALLEON);
  const rem = safe % KNUTS_PER_GALLEON;
  const sickles = Math.floor(rem / KNUTS_PER_SICKLE);
  const knuts = rem % KNUTS_PER_SICKLE;
  return { galleons, sickles, knuts };
}

export function formatKnuts(totalKnuts) {
  const { galleons, sickles, knuts } = splitKnuts(totalKnuts);
  const parts = [];
  if (galleons) parts.push(`${galleons} 加隆`);
  if (sickles) parts.push(`${sickles} 西可`);
  if (knuts) parts.push(`${knuts} 纳特`);
  return parts.join(' ') || '0 纳特';
}

export function addKnuts(totalKnuts, reason = '') {
  const amount = Math.floor(Number(totalKnuts) || 0);
  if (amount <= 0) return null;
  const { galleons, sickles, knuts } = splitKnuts(amount);
  addMoney(galleons, sickles, knuts, reason);
  return { totalKnuts: amount, galleons, sickles, knuts, label: formatKnuts(amount) };
}

function getCurrentDateParts() {
  const data = getSave();
  const currentDate = data.time?.currentDate || '1991-09-02';
  const [year, month, day] = currentDate.split('-').map(Number);
  return { currentDate, year, month, day };
}

export function grantExploreReward({ areaName = '', exploreRate = 0 } = {}) {
  const grade = Math.max(1, getYearGrade?.() || 1);
  const base = 5 + grade + Math.floor(Math.random() * (8 + grade));
  const reward = addKnuts(base, `探索发现零钱：${areaName}`);
  const lines = reward ? [`💰 探索发现 ${reward.label}`] : [];

  const data = getSave();
  const economy = ensureEconomy(data);
  if (!economy.exploreMilestones[areaName]) economy.exploreMilestones[areaName] = {};

  const milestoneAwards = [];
  [25, 50, 75, 100].forEach(mark => {
    if (exploreRate < mark || economy.exploreMilestones[areaName][mark]) return;
    economy.exploreMilestones[areaName][mark] = true;
    const milestoneKnuts = [25, 50, 75, 100].indexOf(mark) * KNUTS_PER_SICKLE + KNUTS_PER_SICKLE;
    milestoneAwards.push({ mark, milestoneKnuts });
  });

  setSave(data);

  milestoneAwards.forEach(({ mark, milestoneKnuts }) => {
    const milestoneReward = splitKnuts(milestoneKnuts);
    addMoney(
      milestoneReward.galleons,
      milestoneReward.sickles,
      milestoneReward.knuts,
      `探索里程碑：${areaName} ${mark}%`
    );
    lines.push(`💰 ${areaName} 探索 ${mark}% 奖励 ${formatKnuts(milestoneKnuts)}`);
  });

  window.refreshAll?.();
  return lines;
}

export function grantDuelReward({ won = false, opponentLevel = 1, is4v4 = false } = {}) {
  if (!won) return null;
  const grade = Math.max(1, getYearGrade?.() || 1);
  const level = Math.max(1, Number(opponentLevel) || 1);
  const baseSickles = is4v4 ? 8 : 4;
  const totalKnuts = (baseSickles + level * 2 + grade) * KNUTS_PER_SICKLE + Math.floor(Math.random() * 18);
  return addKnuts(totalKnuts, is4v4 ? '团队决斗胜利奖金' : '决斗胜利奖金');
}

export function applyMonthlyInterest() {
  const { currentDate, year, month, day } = getCurrentDateParts();
  if (day !== 1) return null;

  const data = getSave();
  const economy = ensureEconomy(data);
  const key = `${year}-${String(month).padStart(2, '0')}`;
  if (economy.interestPaid[key]) return null;

  const balance = getTotalKnuts();
  const cap = KNUTS_PER_GALLEON + getYearGrade() * KNUTS_PER_SICKLE;
  const interest = Math.min(Math.floor(balance * 0.01), cap);
  economy.interestPaid[key] = currentDate;
  setSave(data);

  if (interest <= 0) return null;
  return addKnuts(interest, `古灵阁月息：${key}`);
}

function getHouseRank(playerHouseKey, scores) {
  const ranked = Object.entries(scores || {})
    .sort((a, b) => (b[1] || 0) - (a[1] || 0));
  const index = ranked.findIndex(([key]) => key === playerHouseKey);
  return index >= 0 ? index + 1 : 4;
}

export function applyHouseCupReward() {
  const { currentDate, year, month, day } = getCurrentDateParts();
  if (month !== 6 || day !== 15) return null;

  const data = getSave();
  const economy = ensureEconomy(data);
  const cupKey = String(year);
  if (economy.houseCupPaid[cupKey]) return null;

  const playerHouseKey = window.housePoints?.HOUSE_MAP?.[data.player?.house];
  const scores = window.housePoints?.getScores?.() || data.housePoints || {};
  const rank = getHouseRank(playerHouseKey, scores);
  const rewardByRank = { 1: 15, 2: 8, 3: 4, 4: 2 };
  const galleons = rewardByRank[rank] || 2;

  economy.houseCupPaid[cupKey] = { date: currentDate, rank, galleons };
  setSave(data);
  addMoney(galleons, 0, 0, `学院杯年终奖金：第 ${rank} 名`);
  return { rank, galleons };
}

function addMoneyRewardOnce(rewards, reward) {
  if (!Array.isArray(rewards)) return;
  if (rewards.some(r => r.type === 'money')) return;
  rewards.push({ type: 'money', ...reward });
}

export function patchQuestMoneyRewards() {
  DAILY_QUEST_POOL.forEach(quest => {
    const map = {
      study: { sickles: 2 },
      duel: { sickles: 4 },
      explore: { sickles: 2, knuts: 12 },
      brew: { sickles: 3 },
      mix: { sickles: 5 },
    };
    addMoneyRewardOnce(quest.rewards, map[quest.category] || { sickles: 2 });
  });

  SIDE_QUESTS.forEach(quest => {
    addMoneyRewardOnce(quest.rewards, { galleons: 1, sickles: 8 });
  });

  ACHIEVEMENTS.forEach(ach => {
    const count = ach.condition?.count || 1;
    const galleons = count >= 20 ? 2 : count >= 10 ? 1 : 0;
    const sickles = count >= 20 ? 5 : count >= 10 ? 8 : 5;
    addMoneyRewardOnce(ach.rewards, { galleons, sickles });
  });
}

patchQuestMoneyRewards();

window.economyRewards = {
  splitKnuts,
  formatKnuts,
  addKnuts,
  grantExploreReward,
  grantDuelReward,
  applyMonthlyInterest,
  applyHouseCupReward,
  patchQuestMoneyRewards,
};

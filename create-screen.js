const COURSES = [
  "变形术", "魔咒学", "魔药学", "黑魔法防御术",
  "草药学", "魔法史", "天文学", "飞行课",
  "算术占卜", "古代魔文", "占卜学", "保护神奇动物",
  "麻瓜研究", "幻影移形", "炼金术"
];

export function showTipBox(elementId, html) {
  const box = document.getElementById(elementId);
  if (!box) return;

  box.style.display = "block";
  box.style.background = "#2a3b66";
  box.style.color = "#ffffff";
  box.style.padding = "12px";
  box.style.borderRadius = "8px";
  box.style.marginTop = "10px";
  box.innerHTML = html;
}

export function buildSaveData(opts = {}) {
  const courseMap = {};
  COURSES.forEach(course => {
    courseMap[course] = 0;
  });

  return {
    player: {
      name: opts.name || "无名巫师",
      blood: opts.blood || "混血巫师",
      house: opts.house || "格兰芬多",
      wand: opts.wand || "未知魔杖",
      wandAccepted: opts.wandAccepted ?? true,
      galleons: 10,
      sickles: 0,
      knuts: 0
    },
    time: {
      year: 1991,
      month: 9,
      day: 2,
      dailyActionLeft: 1,
      nowTime: "夜晚",
      currentDate: "1991-09-02"
    },
    log: opts.log || ["✅ 成功进入霍格沃茨"],
    course: courseMap,
    bag: {
      material: [],
      potion: [],
      item: [],
      wizardCard: []
    },
    affinity: {},
    housePoints: { gryffindor: 0, slytherin: 0, ravenclaw: 0, hufflepuff: 0 },
    duelRecord: { wins: 0, losses: 0 },
    quests: {},
    spellList: [],
    spellProficiency: {},
    darkMagicRecord: 0,
    explore: {},
    story: { completed: {}, active: null },
    knownCharacters: [],
    knownSpells: []
  };
}

export function quickTest() {
  let savedTime = null;
  let savedCourse = null;
  let savedHousePoints = null;
  let savedAffinity = null;
  let savedKnownCharacters = null;
  let savedBag = null;

  if (window.saveSys?.getSave) {
    try {
      const old = window.saveSys.getSave();
      savedTime = old.time || null;
      savedCourse = old.course || null;
      savedHousePoints = old.housePoints || null;
      savedAffinity = old.affinity || null;
      savedKnownCharacters = old.knownCharacters || null;
      savedBag = old.bag || null;
    } catch (error) {
      console.warn("[quickTest] Failed to preserve existing save fields:", error);
    }
  }

  const data = window.saveSys?.createNewSave?.({
    name: "无名巫师",
    blood: "混血巫师",
    house: "格兰芬多",
    wand: "冬青木·凤凰羽毛",
    wandAccepted: true,
    log: ["✅ 测试通道已进入"]
  });

  if (!data) {
    alert("Save system is still loading. Please try again.");
    return;
  }

  if (savedTime) data.time = savedTime;
  if (savedCourse) data.course = { ...data.course, ...savedCourse };
  if (savedHousePoints) data.housePoints = savedHousePoints;
  if (savedAffinity) data.affinity = savedAffinity;
  if (savedKnownCharacters) data.knownCharacters = savedKnownCharacters;
  if (savedBag) data.bag = savedBag;

  data.timeTurner = {
    isTraveling: false,
    originalTime: null,
    travelHistory: [],
    usesLeft: -1,
    isTestMode: true
  };
  if (!data.bag) data.bag = { item: [] };
  if (!Array.isArray(data.bag.item)) data.bag.item = [];
  if (!data.bag.item.some(item => item.name === "时间转换器")) {
    data.bag.item.push({ name: "时间转换器", emoji: "⏳", count: 1 });
  }

  if (!window.saveSys?.setSave) {
    alert("Save system is still loading. Please try again.");
    return;
  }

  window.saveSys.setSave(data);
  document.getElementById("screen-create")?.classList.remove("active");
  document.getElementById("screen-main")?.classList.add("active");

  setTimeout(() => {
    window.loadTimeFromSave?.();
    window.refreshAll?.();
  }, 100);
}

function initTabSwitching() {
  document.querySelectorAll(".tab-btn").forEach(button => {
    button.addEventListener("click", () => {
      const tab = button.dataset.tab;
      document.querySelectorAll(".tab-btn").forEach(item => item.classList.remove("active"));
      document.querySelectorAll(".tab-screen").forEach(screen => screen.classList.remove("active"));
      button.classList.add("active");
      document.getElementById(`tab-${tab}`)?.classList.add("active");

      if (tab === "affinity") {
        setTimeout(() => window.renderAffinityInline?.(), 50);
      }
      if (tab === "quest") {
        setTimeout(() => window.renderQuestPanel?.(), 50);
      }
    });
  });
}

export function toggleCreateSaveBox() {
  const box = document.getElementById("saveBox-create");
  if (!box) return;

  box.style.display = box.style.display === "none" ? "block" : "none";
  if (box.style.display === "block") {
    window.openCreateLoad?.();
  }
}

function initCreateSaveCard() {
  const card = document.getElementById("create-save-card");
  if (!card) return;

  card.style.display = window.saveSys?.hasAnySave?.() ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
  initTabSwitching();
  initCreateSaveCard();
});

window.showTipBox = showTipBox;
window.buildSaveData = buildSaveData;
window.quickTest = quickTest;
window.toggleCreateSaveBox = toggleCreateSaveBox;

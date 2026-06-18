const ACTIONS = {
  "quick-test": () => window.quickTest?.(),
  "toggle-create-save": () => window.toggleCreateSaveBox?.(),
  "open-create-load": () => window.openCreateLoad?.(),
  "reset-game": () => window.resetGame?.(),
  "open-profile": () => window.openProfilePanel?.(),
  "open-time-turner": () => window.openTimeTurnerPanel?.(),
  "open-course-test": () => window.openCourseTestPanel?.(),
  "open-bag": () => window.openBagPanel?.(),
  "open-course": () => window.openCoursePanel?.(),
  "open-duel": () => window.openDuelPanel?.(),
  "open-potion": () => window.openPotionPanel?.(),
  "open-explore": () => window.openExplorePanel?.(),
  "open-adventure": () => window.openAdventurePanel?.(),
  "do-nothing": () => window.doNothing?.(),
  "close-explore": () => window.closeExplorePanel?.(),
  "close-adventure": () => window.closeAdventurePanel?.(),
  "toggle-save": () => window.toggleSavePanel?.(),
  "export-save": () => window.exportSaveFile?.(),
  "import-save": () => window.importSaveFile?.()
};

document.addEventListener("click", event => {
  const trigger = event.target.closest("[data-action]");
  if (!trigger) return;

  const action = ACTIONS[trigger.dataset.action];
  if (!action) return;

  event.preventDefault();
  action();
});

function toggleInfoBox(button) {
  const name = button.getAttribute("data-toggle");
  const el = document.getElementById(`${name}Box`);
  if (el) {
    el.style.display = el.style.display === "none" ? "block" : "none";
  }
}

function initInfoCollapseButtons() {
  document.querySelectorAll(".info-collapse-btn").forEach(button => {
    button.addEventListener("click", () => toggleInfoBox(button));
  });
}

function toggleSavePanel() {
  const saveBox = document.getElementById("saveBox");
  const button = document.getElementById("saveBtnToggle");

  if (!saveBox || !button) return;

  if (saveBox.style.display === "none" || !saveBox.style.display) {
    saveBox.style.display = "block";
    button.textContent = "收起";
    window.openSave?.();
  } else {
    saveBox.style.display = "none";
    button.textContent = "查看";
  }
}

document.addEventListener("DOMContentLoaded", initInfoCollapseButtons);

window.toggleSavePanel = toggleSavePanel;

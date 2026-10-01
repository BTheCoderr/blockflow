(() => {
  const active = ACTIVE_DIFFICULTY;
  const label = DIFFICULTY_LABELS[active];
  const badge = document.getElementById("difficultyBadge");
  const journey = document.getElementById("journeyLabel");
  if (badge) { badge.textContent = label; badge.dataset.difficulty = active; }
  if (journey) journey.textContent = `${label.replace(" ☠️","")} Journey`;
  document.querySelectorAll(".difficulty-chip").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.difficulty === active);
    btn.addEventListener("click", () => {
      const next = btn.dataset.difficulty;
      if (next === active) return;
      localStorage.setItem("bf-difficulty", next);
      localStorage.setItem("bf-level", "0");
      window.location.reload();
    });
  });
})();

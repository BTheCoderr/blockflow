(() => {
  const active = ACTIVE_DIFFICULTY;
  const label = DIFFICULTY_LABELS[active];
  const WORLDS={easy:{name:"Harbor",accent:"#38bdf8"},intermediate:{name:"Garden",accent:"#4ade80"},hard:{name:"Forge",accent:"#f59e0b"},extreme:{name:"Void",accent:"#a78bfa"}};
  const world=WORLDS[active];
  document.body.dataset.world=active;
  document.documentElement.style.setProperty("--world-accent",world.accent);
  const badge = document.getElementById("difficultyBadge");
  const journey = document.getElementById("journeyLabel");
  if (badge) { badge.textContent = label; badge.dataset.difficulty = active; }
  if (journey) journey.textContent = `${world.name} · ${label.replace(" ☠️","")}`;
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

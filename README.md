# Block Flow

**Move. Match. Escape.**

Block Flow is a mobile-first color-routing puzzle game built to stay approachable without becoming repetitive. Puzzle difficulty is separate from pressure: players can tackle Easy, Intermediate, Hard, or Extreme puzzles in Chill, Classic, or Rush mode.

## Current build — 75-level milestone

- 75 solver-verified levels: 19 Easy, 19 Intermediate, 19 Hard, 18 Extreme
- A* level solver verifies solvability and exact Perfect move counts
- Difficulty curve follows real solution depth instead of visual complexity alone
- Native-style home screen with overall progress, Flow Rank, milestone rewards, stars, Perfect clears, and Continue
- Pause menu with Resume, Restart, Level Select, and Home
- Solve-time tracking in every mode with per-level personal best times
- Five-puzzle World Runs with one cumulative clock and cumulative move count
- Per-world World Run best time and best-move records
- Chill records time without pressure; Classic is count-up against a target; Rush remains a countdown
- Foreground wall-clock timing is deterministic; backgrounding/pausing intentionally pauses the clock
- Eight milestone Boss puzzles across Harbor, Garden, Forge, and Void
- Three-phase Boss engine: the same arena reloads new blocks/objectives while moves and solve time continue across phases
- Boss phase state survives pause, refresh, and app backgrounding
- Save-state schema v4 validates restored boards and safely restores completed World Run stages
- World Runs preserve the campaign puzzle they interrupted and can never unlock locked campaign levels
- Every boss phase is independently solver-verified in CI
- Results cards show moves, Perfect moves, solve time, best time, and new-record callouts
- Exact puzzle-state resume after refresh/backgrounding, including Undo history
- First-run drag onboarding plus one-time mechanic introductions
- Animated board-to-board transitions
- Precision drag input: one deliberate grid step at a time, direction-change re-anchoring, and a short repeat cadence while ice/portals remain fast
- Level select with unlock progression, stars, best score, and replay
- Variable board sizes and irregular board shapes
- Edge and internal exits
- 1x1 and long blocks
- Fixed walls and narrow corridors
- Ice / momentum tiles
- Paired portals
- Persistent switches and barriers
- One-way tiles
- Required exit-order puzzles
- Multi-mechanic Hard and Extreme boards, including 40–52 move solver-optimal challenges
- Chill / Classic / Rush pressure modes
- Undo and instant restart
- Five unique colorblind patterns, keyboard block controls, focus-trapped dialogs, haptics, and lightweight sound feedback
- Local progress / best-score persistence
- Installable offline PWA shell with 192px/512px maskable icons
- Privacy and support pages plus privacy-preserving local playtest diagnostics export
- Production CSP, nosniff, referrer, and device-permission headers
- GitHub Actions checks JavaScript syntax, app shell integrity, state regressions, level structure, and every solver target

## Difficulty curve

Easy is now a real puzzle tier: every non-Boss Easy board has a solver-optimal target of at least 10 moves, uses traffic/setup decisions instead of straight-line clears, and the two Easy Bosses total 42 Perfect moves across three phases. Intermediate mixes rules with shorter solutions. Hard requires more setup, routing, and dependency management. Extreme uses long dependency chains, shared bottlenecks, forced ordering, and multi-step traffic planning.

The target library remains 100 levels: 25 Easy, 25 Intermediate, 25 Hard, and 25 Extreme.

## Run locally

```bash
python3 -m http.server 8080
node tools/validate-levels.mjs
node tools/solve-levels.mjs --strict
```

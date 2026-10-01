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
- Eight milestone Boss puzzles across Harbor, Garden, Forge, and Void
- Results cards show moves, Perfect moves, solve time, best time, and new-record callouts
- Exact puzzle-state resume after refresh/backgrounding, including Undo history
- First-run drag onboarding plus one-time mechanic introductions
- Animated board-to-board transitions
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
- Colorblind patterns, haptics, and lightweight sound feedback
- Local progress / best-score persistence
- Installable offline PWA shell
- GitHub Actions solver gate rejects unsolvable levels or incorrect Perfect scores

## Difficulty curve

Easy introduces mechanics without punishing experimentation. Intermediate mixes rules with shorter solutions. Hard requires more setup, routing, and dependency management. Extreme uses long dependency chains, shared bottlenecks, forced ordering, and multi-step traffic planning.

The target library remains 100 levels: 25 Easy, 25 Intermediate, 25 Hard, and 25 Extreme.

## Run locally

```bash
python3 -m http.server 8080
node tools/validate-levels.mjs
node tools/solve-levels.mjs --strict
```

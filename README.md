# Block Flow

**Move. Match. Escape.**

Block Flow is a mobile-first color-routing puzzle game built to stay approachable without becoming repetitive. Puzzle difficulty is separate from pressure: players can tackle Easy, Intermediate, Hard, or Extreme puzzles in Chill, Classic, or Rush mode.

## Current build — 50-level milestone

- 50 solver-verified levels: 13 Easy, 13 Intermediate, 12 Hard, 12 Extreme
- A* level solver verifies solvability and exact Perfect move counts
- Difficulty curve follows real solution depth instead of visual complexity alone
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
- Multi-mechanic Hard and Extreme boards
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

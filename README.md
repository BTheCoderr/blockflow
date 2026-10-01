# Block Flow

**Move. Match. Escape.**

Block Flow is a mobile-first color-routing puzzle game built to stay approachable without becoming repetitive. Puzzle difficulty is separate from pressure: players can tackle Easy, Intermediate, Hard, or Extreme puzzles in Chill, Classic, or Rush mode.

## Current build — Level Engine v2

- 24 handcrafted prototype levels: 6 per difficulty tier
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
- Move targets and 1–3 star scoring
- Colorblind patterns, haptics, and lightweight sound feedback
- Local progress / best-score persistence
- Installable offline PWA shell

## Level design direction

The target library is 100 levels: 25 Easy, 25 Intermediate, 25 Hard, and 25 Extreme. New levels should introduce a puzzle idea or combine earlier mechanics rather than simply rearranging colors on the same square board.

Difficulty should come from routing, dependencies, setup moves, congestion, deceptive choices, backtracking, and mechanic combinations — not only from a timer.

## Run locally

Serve the repository over HTTP:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

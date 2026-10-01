# Block Flow

**Move. Match. Escape.**

Block Flow is a mobile-first color-routing puzzle inspired by the broad sliding-block genre, built around the player complaints common in timer-heavy puzzle games: no energy/lives, no forced waiting, no pay-to-win puzzle tuning, an untimed Chill mode, and colorblind-friendly shape patterns.

## MVP features

- Swipe blocks one cell at a time
- Match each block to the same-color exit
- Collision and wall rules
- 12 handcrafted levels
- Chill / Classic / Rush modes
- Instant restart, no lives
- Undo
- Move counter and par scoring
- 1–3 star mastery score
- "Replay for Perfect" loop
- Colorblind pattern mode
- Haptics where supported
- Lightweight synthesized feedback sounds
- Local progression / best-score persistence
- Installable PWA shell

## Design principles

1. Difficulty comes from the puzzle, not an unfair clock.
2. Losing never creates a wait state.
3. Color is never the only accessibility signal.
4. The core interaction should be understandable without a tutorial wall.
5. The initial build stays lightweight and dependency-free.

## Run locally

Serve the directory over HTTP, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

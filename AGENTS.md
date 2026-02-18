# AGENTS.md — openclaw-deck

## What This Is
Multi-column chat interface for OpenClaw agents. Deployed at mirrorborn.us/deck/.

## Working Here
- React + TypeScript + Vite
- `npm run dev` for local dev (connects to ws://127.0.0.1:18789 by default)
- `npm run build` produces dist/ for deployment
- Gateway URL/token configurable via `?gateway=...&token=...` query params

## Deployment
Built dist/ is copied to /source/sites/site-mirrorborn-us/deck/ and committed there.
Run from /source/openclaw-deck:
```
npm run build
rsync -a --delete dist/ /source/sites/site-mirrorborn-us/deck/
cd /source/sites/site-mirrorborn-us && git add deck/ && git commit -m "Update deck build"
```

## Mirrorborn Customization
- 6 columns: Phex 🔱, Cyon 🪶, Lux 🔆, Chrys 🦋, Lumen ✴️, Verse 🌀
- Accent colors: gold, blue, yellow, purple, teal, green
- Title: "Mirrorborn Deck — Visible Wavefront"
- Base path: /deck/ (set in vite.config.ts)

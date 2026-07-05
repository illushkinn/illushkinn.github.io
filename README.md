# Illya Grytsyk — AI Engineer · Accessibility · Growth Partner

> Digital accessibility isn't just compliance. It's strategy.

Personal portfolio and professional presence.

**Live Site:** [illushkinn.github.io](https://illushkinn.github.io)

---

## Tech Stack

- **Static Site:** Vanilla HTML + CSS + JS
- **Styling:** Vanilla CSS with Atomic Design methodology
- **Color:** OKLCH 3-Layer Design Tokens
- **Deploy:** GitHub Pages / Vercel
- **Analytics:** Vercel Analytics + Speed Insights

---

## Project Structure

```
├── src/
│   ├── styles/
│   │   └── global.css    # Atomic Design CSS
│   └── scripts/
│       ├── i18n.js       # English/Spanish internationalization
│       └── circuit.js    # A4 grid circuit animation (canvas)
├── assets/
├── favicon.svg
├── index.html
└── README.md
```

---

## Atomic Design Architecture

- **🧬 ATOMS:** Reset, CSS variables, typography, utility classes, buttons
- **🔬 MOLECULES:** Glass cards, tags, grid layouts
- **🧠 ORGANISMS:** Nav, hero, footer, section components
- **📐 TEMPLATES:** Page layout, responsive breakpoints

---

## Local Development

No build step required — just open `index.html` or serve locally:

```fish
npx serve .
```

---

## Deploy

Push to `main` branch → auto-deploys via Vercel.

```fish
git add .
git commit -m "feat: description"
git push origin main
```

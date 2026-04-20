# Fintech Button Library

A Button component library built with React and Storybook, traced 1:1 from a Figma design system. Values for colors, typography, padding, and corner radii are pulled directly from the Figma file's bound variables, not guessed.

## What's inside

The Button mirrors the five variant properties of the source component in Figma:

- **Size**: Small, Medium, Large
- **Style**: Prominent, Bordered, Bordered Secondary, Borderless, Outline, Outline Secondary
- **Label Type**: Text, Leading icon, Trailing icon, Leading + Trailing, Symbol (icon-only)
- **Enabled / Disabled**
- **Destructive**

Paired with a small inline icon set (chevrons, plus, download, trash, arrow) in the iOS-style stroke used by the source file.

## Getting started

```bash
npm install
npm run storybook
```

Then open `http://localhost:6006`.

To build a static Storybook for deployment:

```bash
npm run build-storybook
```

The output in `storybook-static/` can be dropped onto Vercel, Netlify, or Chromatic.

## Stories included

- **Playground** with all controls wired up
- One story per Style variant
- **Sizes** comparison
- **Label Types** showing icon slots
- **Destructive** and **Disabled** states
- **All Variants** — the full variant matrix, useful as a design spec sheet
- **Fintech Examples** — realistic product usage (Pay CTA, download statement, cancel transaction, etc.)

## Design tokens

All tokens live in `src/components/Button/tokens.css` as CSS custom properties. If you're porting to a different design system, override the `--ds-*` variables and every variant recomputes.

## Project structure

```
.
├── .storybook/
│   ├── main.js
│   └── preview.js
├── src/
│   ├── components/
│   │   └── Button/
│   │       ├── Button.jsx
│   │       ├── Button.css
│   │       ├── tokens.css
│   │       ├── icons.jsx
│   │       ├── Button.stories.jsx
│   │       └── index.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Tech

React 18, Vite 4, Storybook 7.

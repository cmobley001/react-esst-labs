# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with HMR at http://localhost:5173
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
npm run lint     # Run ESLint on all .js/.jsx files
```

## Architecture

This is a LinkedIn Learning exercise file for the React Essential Training course (Chapter 2, lesson 1b). It is a minimal React 19 + Vite starter.

- **Entry point:** `src/main.jsx` — mounts `<App />` into `#root` via `createRoot`
- **App component:** `src/App.jsx` — the single component students modify during exercises
- **Styling:** `src/App.css` (component styles) and `src/index.css` (global styles)

### Notable configuration

- **React Compiler** is enabled via `babel-plugin-react-compiler` in `vite.config.js`, applied through `@rolldown/plugin-babel`. This automatically optimizes re-renders without manual `useMemo`/`useCallback`.
- **ESLint** uses the flat config format (`eslint.config.js`). The `no-unused-vars` rule ignores variables matching `/^[A-Z_]/` (capitalized component names and constants).
- No TypeScript — this is a plain JavaScript exercise file (`.js`/`.jsx` only).

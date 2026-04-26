# Tailwind CSS v4 Migration Design

## Goal

Replace all CSS files with Tailwind CSS v4, applying clean minimal utility classes directly in JSX.

## Installation

Install Tailwind CSS v4 and its Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

Add `@tailwindcss/vite` to `vite.config.js` alongside the existing plugins:

```js
import tailwindcss from '@tailwindcss/vite'
// add tailwindcss() to the plugins array
```

## CSS Changes

- Replace the entire content of `src/index.css` with `@import "tailwindcss";`
- Delete `src/App.css`
- Remove `import './App.css'` from `src/App.jsx`
- Keep `import './index.css'` in `src/main.jsx` — this becomes the Tailwind entry point

No `tailwind.config.js` needed — Tailwind v4 is zero-config.

## Component Styling

### `index.html`
No changes needed — body background handled via Tailwind on a wrapper element.

### `App.jsx`
Wrap content in a div with dark background and min-height:
- `className="bg-zinc-900 min-h-screen"`

### `Header.jsx`
Style the header and h1:
- `<header className="py-8 text-center">`
- `<h1 className="text-3xl font-semibold text-white tracking-tight">`

### `Content.jsx`
Style the main container and children:
- `<main className="max-w-xl mx-auto px-4 py-6 text-gray-300">`
- `<h2 className="text-xl font-medium text-white mb-2">`
- `<p className="mb-4">`
- `<hr className="border-zinc-700 my-4" />`
- `<ul className="list-disc list-inside space-y-1">`

## Outcome

- Zero CSS files remain (one `@import "tailwindcss"` entry point only)
- All visual styling lives in JSX utility classes
- Clean, readable dark-themed layout appropriate for the exercise

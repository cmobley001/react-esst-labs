# Tailwind CSS v4 Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all CSS files with Tailwind CSS v4 utility classes applied directly in JSX.

**Architecture:** Install `@tailwindcss/vite` plugin, reduce `src/index.css` to a single `@import "tailwindcss"` entry point, delete `src/App.css`, then apply minimal dark-themed Tailwind classes to App, Header, and Content components.

**Tech Stack:** Tailwind CSS v4, `@tailwindcss/vite`, React 19, Vite 8

---

### Task 1: Install Tailwind CSS v4

**Files:**
- Modify: `package.json` (via npm install)

- [ ] **Step 1: Install dependencies**

```bash
npm install tailwindcss @tailwindcss/vite
```

Expected output: packages added, no errors.

- [ ] **Step 2: Verify packages appear in package.json**

Open `package.json` and confirm `tailwindcss` and `@tailwindcss/vite` appear under `dependencies` or `devDependencies`.

---

### Task 2: Add Tailwind plugin to Vite config

**Files:**
- Modify: `vite.config.js`

- [ ] **Step 1: Update vite.config.js**

Replace the file content with:

```js
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
})
```

- [ ] **Step 2: Commit**

```bash
git add vite.config.js package.json package-lock.json
git commit -m "feat: install tailwindcss v4 and add vite plugin"
```

---

### Task 3: Replace index.css with Tailwind entry point

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Replace src/index.css content**

Replace the entire file with:

```css
@import "tailwindcss";
```

- [ ] **Step 2: Verify main.jsx still imports it**

Confirm `src/main.jsx` contains `import './index.css';` — no change needed.

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: replace index.css with tailwind entry point"
```

---

### Task 4: Delete App.css and remove its import

**Files:**
- Delete: `src/App.css`
- Modify: `src/App.jsx`

- [ ] **Step 1: Delete src/App.css**

```bash
rm src/App.css
```

- [ ] **Step 2: Remove App.css import from App.jsx**

In `src/App.jsx`, remove line 1:

```diff
-import './App.css';
 import Header from './Header.jsx';
 import Content from './Content.jsx';
```

- [ ] **Step 3: Commit**

```bash
git add src/App.jsx
git rm src/App.css
git commit -m "feat: remove App.css and its import"
```

---

### Task 5: Add Tailwind classes to App.jsx

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Wrap content in a styled div**

Replace `src/App.jsx` with:

```jsx
import Header from './Header.jsx';
import Content from './Content.jsx';

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Header title="My Website" />
      <Content />
    </div>
  );
}

export default App;
```

- [ ] **Step 2: Commit**

```bash
git add src/App.jsx
git commit -m "feat: add tailwind classes to App"
```

---

### Task 6: Add Tailwind classes to Header.jsx

**Files:**
- Modify: `src/Header.jsx`

- [ ] **Step 1: Update Header.jsx**

Replace `src/Header.jsx` with:

```jsx
const Header = ({ title }) => {
  return (
    <header className="py-8 text-center">
      <h1 className="text-3xl font-semibold text-white tracking-tight">{title}</h1>
    </header>
  );
};

export default Header;
```

- [ ] **Step 2: Commit**

```bash
git add src/Header.jsx
git commit -m "feat: add tailwind classes to Header"
```

---

### Task 7: Add Tailwind classes to Content.jsx

**Files:**
- Modify: `src/Content.jsx`

- [ ] **Step 1: Update Content.jsx**

Replace `src/Content.jsx` with:

```jsx
const Content = () => {
  return (
    <main className="max-w-xl mx-auto px-4 py-6 text-gray-300">
      <h2 className="text-xl font-medium text-white mb-2">Welcome to my website.</h2>
      <p className="mb-4">This is the content of my website.</p>
      <hr className="border-zinc-700 my-4" />
      <ul className="list-disc list-inside space-y-1">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </main>
  );
};

export default Content;
```

- [ ] **Step 2: Commit**

```bash
git add src/Content.jsx
git commit -m "feat: add tailwind classes to Content"
```

---

### Task 8: Verify in browser

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

Expected: server starts at `http://localhost:5173` with no errors.

- [ ] **Step 2: Check the UI**

Open `http://localhost:5173`. Verify:
- Dark zinc background fills the page
- "My Website" heading is white, large, centered
- Content section has readable gray text on dark background
- HR divider is subtle dark gray
- List items are indented with bullet points

- [ ] **Step 3: Check for no CSS file imports**

Confirm `src/App.css` no longer exists and no component imports a `.css` file except `main.jsx`'s `import './index.css'`.

- [ ] **Step 4: Final commit (if any cleanup needed)**

```bash
git add -A
git commit -m "chore: verify tailwind migration complete"
```

# Header Button Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Learn More" button below the "My Website" title in the Header component using Button component defaults.

**Architecture:** Import the Button component into Header.jsx and render it below the h1 title, wrapped in an anchor tag with href="#" for semantic link behavior.

**Tech Stack:** React, Button component (Button.jsx), Tailwind CSS

---

### Task 1: Update Header.jsx

**Files:**
- Modify: `src/Header.jsx:1-19`

- [ ] **Step 1: Add Button import**

At the top of Header.jsx, add the Button import:

```javascript
import heroBg from './img/anime_city-wallpaper-1920.jpg';
import Button from './Button.jsx';
```

- [ ] **Step 2: Add button markup below title**

Inside the `<div className='relative z-10 text-center px-4'>` container, add the anchor-wrapped button after the h1:

```javascript
const Header = ({ title }) => {
  return (
    <header
      className='relative w-full h-[60vh] flex items-center justify-center bg-top bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className='absolute inset-0 bg-black/50' />
      <div className='relative z-10 text-center px-4'>
        <h1 className='text-5xl font-bold text-white tracking-tight drop-shadow-lg'>
          {title}
        </h1>
        <a href='#' className='inline-block mt-4'>
          <Button>Learn More</Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
```

- [ ] **Step 3: Start dev server and verify button appears**

Run: `npm run dev`

Expected: Dev server starts at http://localhost:5173, page loads with "My Website" title and "Learn More" button displayed below it in primary blue styling.

Verify:
- Button text reads "Learn More"
- Button is centered below the title
- Button has primary variant styling (blue background)
- Button size is medium (default)
- Clicking button navigates to # (page jumps to top)
- No console errors

- [ ] **Step 4: Commit changes**

```bash
git add src/Header.jsx
git commit -m "feat: add Learn More button to Header component"
```

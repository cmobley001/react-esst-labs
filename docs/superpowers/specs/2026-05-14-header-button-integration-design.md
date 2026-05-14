# Header Button Integration Design

**Date:** 2026-05-14  
**Feature:** Add "Learn More" button to Header component  
**Scope:** Single file modification with Button component integration

## Overview

Add a "Learn More" button below the "My Website" title in the Header component. The button uses the default Button component settings (primary variant, md size) and navigates to an anchor link (#).

## Design

### Component Structure

**Header.jsx** will be updated to:
1. Import the Button component
2. Keep the existing title (h1) unchanged
3. Add a Button element below the title, wrapped in an anchor tag for semantic HTML

```
<header>
  <div className="relative z-10 text-center px-4">
    <h1>My Website</h1>
    <a href="#" className="inline-block mt-4">
      <Button>Learn More</Button>
    </a>
  </div>
</header>
```

### Button Configuration

- **Text:** "Learn More"
- **Variant:** primary (default)
- **Size:** md (default)
- **Link:** # (anchor)

### Styling Notes

- Button inherits `inline-block` from the anchor wrapper
- Margin-top (mt-4) provides spacing between title and button
- Button's default styles handle all remaining styling

## Files Modified

- **Header.jsx** — import Button, add button markup below title

## No Changes Required

- Button.jsx (used as-is with defaults)
- App.jsx (no changes needed)
- Any other files

## Testing

Verify:
1. Button appears below "My Website" title in Header
2. Button uses primary styling with md size
3. Clicking button navigates to # (hash)
4. Button is centered with title
5. Spacing between title and button looks balanced

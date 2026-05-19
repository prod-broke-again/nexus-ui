# nexus-ui

**nexus-ui** is a **dumb UI component library for Vue 3**: presentation-only building blocks—data in via **props**, actions out via **emits**. There is no API layer, stores, or backend coupling. Use it from Laravel + Inertia, Tauri, Electron, or plain Vite.

Peer dependency: **Vue `^3.4`**.

---

## Installation

From npm (when published):

```bash
npm install nexus-ui
```

While developing the package locally, link it from another app:

```bash
# In this repo, after build
npm run build
npm link

# In the consuming app
npm link nexus-ui
```

Or install from a folder or Git URL as your workflow allows.

---

## Styles (required)

The design tokens, utilities, layouts, and component chrome ship as **one bundled stylesheet**.

Import it once in your host app (Vite example):

```ts
import "nexus-ui/style.css";
```

or:

```ts
import "nexus-ui/dist/style.css";
```

The library marks CSS as having side effects so bundlers do not drop these imports.

### Theming (light / dark / system)

Design tokens are scoped with **`data-theme`** on the document root (`<html>`):

| Resolved theme | Attribute |
|----------------|-----------|
| Dark | `data-theme="dark"` |
| Light | `data-theme="light"` |

For **system** preference, the host app should listen to `prefers-color-scheme` and set `data-theme` to `light` or `dark` (same pattern as Laravel’s `appearance` cookie / Inertia `useAppearance`).

```ts
function applyResolvedTheme(resolved: "light" | "dark") {
  document.documentElement.dataset.theme = resolved;
}
```

Default tokens match **dark** when `:root` or `[data-theme="dark"]` is active. Use `NxThemeGrid` / `NxThemeCard` on settings pages for a theme picker.

### Scrolling

`body` uses `overflow: hidden` so the messenger shell can own scroll regions. The window itself does not scroll.

- **Full-page content** outside `.app` or `.page-shell` (for example a docs or marketing page): wrap it in an element with the `.nx-scroll-root` utility class, or provide your own scroll container with a bounded height (`height: 100%` / `max-height: 100dvh` and `overflow-y: auto`). Ensure the host mount node (`#app`) can fill the viewport — the bundled base styles set `html`, `body`, and `#app` to `height: 100%`.
- **Settings / dashboard-style pages**: use `NxPageShell` and put page content in the `main` slot; scrolling happens in `.page-main`.
- **Messenger layout**: use `NxAppShell` with `NxMain` / `NxMessages`; list and message columns scroll inside their panels.

---

## Fonts and icons (host responsibility)

The mock UI expects these assets in the **host** page, not inside the library bundle.

1. **Inter** and **JetBrains Mono** (Google Fonts works well).

   Example for HTML or your app shell:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
     rel="stylesheet"
   />
   ```

2. **Font Awesome 7.0.1** (icons used by `NxIcon` and many patterns). Example:

   ```html
   <link
     rel="stylesheet"
     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
   />
   ```

Components pass full FA class strings (for example `fa-solid fa-user`) into `NxIcon`.

---

## Quick usage

Register components as needed (named imports work well with tree-shaking-friendly bundlers):

```vue
<script setup lang="ts">
import { NxAvatar, NxButton } from "nexus-ui";
import "nexus-ui/style.css";
</script>

<template>
  <div class="u-row u-gap-8" style="padding: 1rem">
    <NxAvatar color="c-2" size="lg">AM</NxAvatar>
    <NxButton variant="primary">Continue</NxButton>
  </div>
</template>
```

Layouts, rails, sidebars, composer, and overlays compose the same way: **slots** for structure, **props** for labels and state you already have in the host app.

---

## Scripts (library developers)

| Command        | Purpose                          |
|----------------|----------------------------------|
| `npm run build`   | Typecheck and build ES + UMD + CSS |
| `npm run typecheck` | Vue + TypeScript check only    |
| `npm run dev`     | Vite dev shell for smoke testing |

---

## License

MIT (see repository).

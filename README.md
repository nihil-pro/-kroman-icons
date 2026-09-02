# Material Design Icons

Original Material Icons reexported without applying @mui theme.

Can be used with `react` or `preact/compat`

```
npm install kricons
```

ESM only, and tree-shakable: each icon is its own module and the package
sets `"sideEffects": false`, so bundlers (webpack/rollup/esbuild/vite) drop
every icon you don't import.

```tsx
import { Abacus } from 'kricons'
```

If your bundler doesn't tree-shake barrel imports well (or you just want to
avoid pulling the full export list into the module graph), import an icon
directly by its subpath instead:

```tsx
import { Abacus } from 'kricons/Abacus'
```

[Icons list](https://pictogrammers.com/library/mdi/)
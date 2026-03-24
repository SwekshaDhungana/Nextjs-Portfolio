# Portfolio


## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## Structure

```text
src/
  app/        # App Router entry files
  components/ # Shared building blocks
  data/       # Static config and content sources
  sections/   # Page-level composition units
```

`src/app/page.tsx` is the landing page entry point and delegates page composition to `src/sections`.

## Notes

- `layout.tsx` stays minimal and only owns global metadata and document structure.
- Tailwind utilities should handle component and section styling as UI gets added.

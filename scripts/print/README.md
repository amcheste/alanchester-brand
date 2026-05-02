# scripts/print

Renders `docs/brand-document.pdf` from source.

Three files, all required, all in this directory:

```
scripts/print/
├── index-print.html     orchestrator (loads React + Babel from unpkg, scales pages to US Letter, auto-prints)
├── brand.jsx            component primitives (Wordmark, Monogram, etc.)
└── brand-document.jsx   the 13 pages that compose the document
```

## render the PDF

1. Open `index-print.html` in Chrome (drag-drop, or `open scripts/print/index-print.html`).
2. The page auto-loads, scales to 8.5×11", and triggers Chrome's print dialog after fonts settle.
3. Destination: **Save as PDF**. Layout: portrait. Margins: none. Background graphics: on.
4. Save to `docs/brand-document.pdf`.

That's it. The print rig already sets `@page { size: 8.5in 11in; margin: 0 }` so the dialog defaults are correct.

## edit content

`brand-document.jsx` is the source of truth for every rendered page. Each page is its own function (`PageCover`, `PageContents`, `PagePhilosophy`, etc.) composed in `BrandDocumentBoard` at the bottom. Edit the function, refresh the browser, re-print.

Colors come from CSS variables defined inline at the top of `index-print.html` (`:root { --ac-accent: ...; ... }`). These mirror `tokens/colors.css` so the rig stays in sync with the package tokens.

## voice rules

The document content follows the voice rules in [`docs/voice.md`](../../docs/voice.md). When editing copy in `brand-document.jsx`:

- no em dashes (use periods, commas, parentheses, colons, "since/because")
- no hyperbole or superlatives
- calibrated hedges over weak ones ("the data suggests" beats "maybe")
- numerical specificity over round estimates ("23%" beats "significantly")
- the accent (`var(--ac-accent)`, hunter green `#1F4D3A`) only on data, pivots, or the δ

## why three files instead of one

`index-print.html` is the runtime orchestrator. `brand.jsx` provides shared component primitives (the Monogram, the Wordmark) that the rest of the brand system also uses. `brand-document.jsx` is content-only, separated so future Alan can iterate on the document without touching component code.

## why not commit the rendered PDF on every edit

The PDF is the artifact, the source is the JSX. Re-render after meaningful content changes. Trivial typo fixes can wait for the next batch.

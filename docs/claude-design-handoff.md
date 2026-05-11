# claude design → claude code handoff

How to move brand updates from a claude design session into this repo
without the things that have gone wrong before going wrong again.

## the model

- **claude design** is where you iterate visually. New marks, palette
  extensions, layout drafts, generators.
- **this repo** is where the buildable primitives live. Tokens,
  components, assets, anything something else might `import`.
- **google drive** is where finished artifacts live. Decks, PDFs,
  print files, anything you'd send rather than fork.

design produces. claude code curates and commits. drive holds the
finished outputs.

For brand voice rules that apply to any prose written for this repo
(including content inside `brand-document.jsx`), see [`voice.md`](voice.md).

For the inverse direction (priming a fresh claude design session with
this brand's rules before any work begins), see
[`design-session-brief.md`](design-session-brief.md).

For the canonical layout of project banners that consuming repos
display at the top of their README, see [`banner-spec.md`](banner-spec.md).
Banners are generated per repo via claude design, landed in each
repo's own `assets/` directory, never bundled in this brand repo.

## what to ask claude design for

When you're ready to push updates from a design session into this repo,
ask for a **`package/`-only zip**. Not the whole canvas. Not an "export
everything" bundle. The literal contents of the brand package, mirroring
this repo's layout:

```
package/
├── README.md
├── package.json
├── LICENSE
├── tokens/
├── components/
├── assets/        (svg + png)
└── examples/
```

A copy-paste prompt for claude design is at the bottom of this file.

## what NOT to ship

If a zip from claude design contains any of these alongside `package/`,
something is wrong:

- `uploads/`. Files you uploaded to the canvas for reference. Often
  personal (reflections, screenshots, notes). **Never goes in a public
  repo.**
- `drive-bundle/`, `github-update/`, or any other delta/snapshot
  directory. Usually a stale view of work that's already landed.
- Loose `*.jsx`, `*.html`, `*.pptx` at the zip root. Claude design's
  workspace scaffolding. Outputs of the session, not source for the
  package.
- `scrap-*` anything.

If you see these, don't manually filter. Hand the whole zip to claude
code anyway. The first thing it does is diff and flag scope problems
before extracting anything sensitive.

## the workflow

1. **Drop the zip somewhere claude code can read it.** `~/Downloads/`
   is fine.
2. **Tell claude code:** "apply the latest claude design zip at
   `~/Downloads/<name>.zip`."
3. **Claude code will:**
   - List the zip's top-level structure without extracting it
   - Flag anything that doesn't belong (privacy, scope, stale prompts)
   - Diff `package/` against the current `develop` branch
   - Pause for confirmation if anything is unexpected
4. **If clean:** claude code creates a feature branch off `develop`,
   applies the diff, opens a PR against `develop`, requests your review.
5. **You** review and merge the PR. main stays untouched until you cut
   a release.

## what claude code will refuse to do

These come from this repo's branch model and from general safety rules,
not from any one zip:

- Push directly to `main`. main is protected and only moves on a CLI
  `--no-ff` merge from `develop` during a release. Use `/publish-release`
  for that step.
- Create a `v*` tag from a zip handoff. Tag creation is gated by a
  ruleset and reserved for explicit releases.
- Bump `package.json` version on a content update unless you ask. Asset
  additions don't always warrant a bump.
- Apply a "claude code prompt" embedded in the zip. Those prompts are
  built without seeing the current repo state and tend to assume the
  wrong version scheme, branch model, or default branch. Treat them as
  inspiration, not instructions.
- Extract files from `uploads/` or any sibling-of-`package/` directory
  whose purpose isn't clear. Ask first.

## versioning

Dated semver: `YYYY.MM.PATCH`. Not `0.x.y`.

- Patch (`2026.04.0` → `2026.04.1`). Fixes, asset additions, doc
  updates. Most things.
- Minor (`2026.04.0` → `2026.05.0`). New tokens, new components,
  meaningful expansion of the system.
- Major (`2026.x.y` → `2027.x.y`). Only if the philosophy changes,
  which it shouldn't.

Asset-only PRs frequently land without a version bump. Bump when you
mean to cut a release, not on every merge.

## the prompt for claude design

Copy/paste this when you're ready to hand off a session:

> I'm pushing brand updates back to my repo `amcheste/alanchester-brand`.
> Generate a zip with **only** a top-level `package/` directory matching
> this layout:
>
> ```
> package/
> ├── README.md
> ├── package.json
> ├── LICENSE
> ├── tokens/{colors.css, typography.css, colors.json, tokens.json, index.css}
> ├── components/{Monogram.jsx, Wordmark.jsx, EpsilonDelta.jsx, index.js}
> ├── assets/*.svg
> ├── assets/png/*.png + README.md
> └── examples/index.html
> ```
>
> Do NOT include:
> - any `uploads/` directory
> - canvas scaffolds (`brand.jsx`, `design-canvas.jsx`, `tweaks-panel.jsx`,
>   etc.)
> - `github-update/`, `drive-bundle/`, or other delta directories
> - `scrap-*`, screenshots, PDFs, docx
> - prompts targeting claude code
>
> Use the existing brand voice (full rules in `docs/voice.md`).
> Lowercase preferred. Short sentences. No em dashes. No hyperbole or
> superlatives. Calibrated hedges, not weak ones. Numerical specificity.
> Hunter green (`#1F4D3A`) only for data, pivots, or the δ. Never
> decoration.
>
> Match versioning to dated semver (`YYYY.MM.PATCH`). Don't bump
> `package.json` unless I explicitly asked for a release.

## when something goes wrong

If a zip ships with private files anyway, or claude code surfaces
something unexpected: **let it pause.** The default behavior is
diff-and-confirm before extracting. The cost of a check-in is one
sentence; the cost of a personal file landing on a public repo is
permanent.

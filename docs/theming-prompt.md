# theming prompt

A turn-key prompt for handing to a Claude Code instance running inside
any of my repos. It scans the repo, applies the brand system to every
surface that should be themed, skips what shouldn't, and opens one PR.

The prompt itself is a brand artifact. It versions here so it stays in
sync with the system it references.

## when to use

- A new repo I just spun up that hasn't been themed yet.
- An older repo that pre-dates the brand system.
- Any repo that has drifted (palette changed by a contributor, voice
  inconsistency creeping in, README badges out of sync).

## how to use

1. Open Claude Code inside the target repo.
2. Paste the prompt below verbatim.
3. The agent will scan, propose a plan, and either proceed or pause
   for direction depending on what it finds.

## the prompt (copy-paste this verbatim)

```markdown
# brand alignment

Apply my personal brand system to this repo. Holistic pass: theme every
surface that should be themed, skip what shouldn't, open one PR.

## sources of truth

The canonical brand-as-code package: `https://github.com/amcheste/alanchester-brand`.
Fetch what you need directly. Files that matter:

- `tokens/colors.css` and `tokens/colors.json`. Palette: `--ac-ink`,
  `--ac-graphite`, `--ac-muted`, `--ac-mist`, `--ac-paper`, `--ac-accent`.
  Accent is hunter green `#1F4D3A`.
- `tokens/typography.css` and `tokens/tokens.json`. IBM Plex Sans + Mono +
  Serif lock, full type scale.
- `assets/*.svg` and `assets/png/*`. Monogram, wordmark, equation marks.
  Use as-is. Don't redraw.
- `docs/voice.md`. Voice rules for any prose written in this repo.
- `README.md` (the brand repo's own). The accent do/don't list.

The PDF at `https://raw.githubusercontent.com/amcheste/alanchester-brand/main/docs/brand-document.pdf`
is the 13-page system reference. Read it for narrative context. The
structured files above are what to consume.

## the workflow

1. **scan** the repo. Catalog surfaces (table below). No edits yet.
2. **plan**. If anything matches the skip/flag list, post the plan and
   stop. Otherwise proceed.
3. **apply** on a feature branch named `brand/align`.
4. **post-sweep audit** before committing. See the audit section below.
5. **open** one PR to `develop` (or `main` if no `develop`). Request
   review. Stop. Don't merge.

## surfaces to scan

| surface | look for | action |
|---|---|---|
| readme | `README.md`, `README.rst`, `readme.txt` | badge colors, accent rule, voice pass on prose |
| docs prose | `CONTRIBUTING.md`, `CHANGELOG.md`, `docs/**/*.md`, `*.md` at root | em-dash sweep, light voice pass |
| css/scss palette | css variables, scss `$vars`, `tokens/`, `styles/`, `theme/` | reference brand tokens or copy values |
| tailwind | `tailwind.config.{js,ts,mjs}` | extend `theme.colors` with `ac` namespace |
| typography config | `@font-face`, `next/font`, google-fonts links | switch to IBM Plex unless deliberately locked elsewhere |
| logos and favicons | `*.ico`, `*favicon*`, `*logo*`, `apple-touch-*` | replace with brand monogram |
| social preview | `og-image*`, `*social*`, GitHub social preview (`gh repo view`) | use brand mark; ask before pushing publicly visible image changes |
| repo metadata | GitHub description, topics (`gh repo view --json description,repositoryTopics`) | suggest brand-aligned description if missing/generic |
| hardcoded hex in source | `grep -rE '#[0-9a-fA-F]{6}'` | swap to css var or brand hex where the role matches |

## per-surface rules

**readme badges.** License badge color: `1F4D3A`. Version badge: `0B0B0C`
(ink). Status badges (CI, coverage): leave at provider defaults unless
they bake a custom color, in which case swap to ink.

**hunter green discipline.** Anywhere you'd put green, ask: is this
data, a pivot, or the δ? If no, demote to ink. Hunter green is scarce
on purpose. Page chrome, dividers, eyebrows, and section tags get ink
or muted, not green.

**prose voice.** Apply `docs/voice.md` to narrative prose: intros,
philosophies, summaries, taglines. Be conservative on technical content
(API docs, config tables, error messages, schema definitions). Across
the board:
- remove em dashes (`—`) and replace with periods, commas, parentheses,
  colons, or "since"/"because". Mechanical sweep is fine.
- replace hyperbole and superlatives with calibrated language.
- prefer numerical specificity over round estimates where the number
  is known.
- lowercase eyebrows and section labels where the existing style
  doesn't already have a locked convention.

**typography.** If the repo loads fonts, switch to IBM Plex Sans
(body, headings) and IBM Plex Mono (code, labels, eyebrows). Use the
google-fonts link from the brand repo's `examples/index.html` as a
reference. Don't add a third family.

**palette adoption.** Two options, pick the one that fits:
1. **import the brand tokens.** Copy `tokens/colors.css` and
   `tokens/typography.css` into the repo's existing theme location.
   Reference `var(--ac-*)` everywhere a hex was used.
2. **copy the values.** If the repo has a different theme system
   (tailwind, json tokens, etc.), copy the hex values into that
   system's expected shape. Annotate the source with a comment
   pointing back to `alanchester-brand`.

**logos and social.** Use `assets/monogram-solid.svg` for favicons
(rasterize via the brand repo's existing PNG exports if needed).
For social previews on GitHub: confirm before pushing. That image
is publicly visible and indexed.

## what counts as "rendered prose" vs. "code structure"

This distinction matters for the em-dash sweep. The voice rules apply
to rendered prose only.

**Rendered prose** (apply voice rules):
- README and other markdown files
- JSDoc comments on exported components
- JSX text content (anything between tags)
- Code comments meant to be read by humans (e.g. explanatory comments
  in source)

**Code structure** (leave alone):
- ASCII art using em-dash characters as visual decoration
  (e.g. `—— baseline ——` as a chart axis label, `// ——————————` as
  a section divider in source)
- Em dashes inside string literals that are quoting external content
  (e.g. a test fixture matching exact input)
- Em dashes that are part of an identifier or proper noun

When in doubt: if removing the em dash changes the meaning or breaks
a visual, leave it. If it's just punctuation in human-readable prose,
sweep it.

## post-sweep audit

The mechanical em-dash replacement (` — ` → `. `) creates awkward
"period followed by lowercase word" artifacts when the original em
dash was joining a continuation. Run this audit before committing:

```sh
grep -rnE '\. [a-z]' <files-you-touched>
```

Inspect each match. Three valid resolutions:

1. **comma** when the second clause is a tight continuation
   ("there exists a δ. and the data" → "there exists a δ, and the data")
2. **period + capitalize** when the second clause is its own thought
   ("with a generous line height. long-form writing" → "with a generous
   line height. Long-form writing")
3. **leave alone** when it's intentional brand-voice lowercase
   (bullets like "open source. default permissive" are deliberately
   lowercase per the brand voice; standalone declarative sentences
   that intentionally start lowercase are fine)

False positives are common (proper nouns like `main` branch, lowercase
brand-voice declaratives, technical content, URLs). Don't blindly
capitalize. Inspect each match.

## skip / flag rules

Stop and ask before proceeding if any of these match:

- repo is a **fork** (`gh repo view --json isFork`). Forks follow
  upstream conventions, not mine.
- repo is for an **employer or partner organization**. Anything not
  under `amcheste/` ownership, or anything whose README says it's an
  org/employer project. My personal brand doesn't apply.
- repo has an **intentional non-brand palette** (an open-source
  project with its own identity, a fork of a third-party template, a
  client deliverable). Surface and ask.
- a change would require a **new runtime dependency or build-pipeline
  modification**. Confirm scope first.
- repo is **archived** or **read-only**. Skip.

## what NOT to do

- Don't `npm install @amcheste/brand` as a runtime dependency unless
  the repo is already a JS/TS project where the import would be
  ergonomic. For most repos, copy values.
- Don't decorate with hunter green. Earn it.
- Don't rewrite engineering docs into brand voice. Refine, don't
  reinvent.
- Don't change repo purpose or scope. Theming surfaces only.
- Don't merge. Open the PR, request review, stop.
- Don't push social-preview or other publicly visible image changes
  without explicit confirmation in chat.

## PR format

- **branch:** `brand/align`
- **title:** `chore: holistic brand-alignment pass on <repo-name>`
- **body:**
  - one-line summary of why
  - **surfaces touched:** bulleted list of files/configs changed and
    what changed in each
  - **surfaces skipped:** bulleted list with reason for each (e.g.
    "prose in API reference: kept as-is, technical content")
  - **flags:** anything you want me to look at specifically
  - **verification:** brief checklist of what I should eyeball
  - if there's a generated artifact (PDF, design board screenshot,
    etc.), re-render and note any byte-size deltas

Stop and ask if any of this is unclear before opening the PR.
```

## customization

The prompt is parameterized for **my** brand specifically. Three things
will need adjusting when applied to another brand in the family system:

1. **accent color**. Currently hardcoded to hunter green `#1F4D3A`.
   Each family brand has its own accent. Capture the target brand's
   accent before running the prompt. The cam-family-brand-system
   documentation lists per-brand values.
2. **temperament axis settings**. The five-axis calibration is
   per-person. Alan's settings (cool, high contrast, sharp, austere,
   compressed) should not be propagated outside this brand. Capture
   the target brand's axis calibration and adjust corner radius,
   contrast ratios, line-weight defaults, and voice cadence accordingly.
3. **sources of truth**. The brand-as-code repo URL points at this
   repo. Each family brand maintains its own repo; point at that one
   when applying.

Plan: maintain a small per-brand variant of this prompt as the family
expands. Keep them all in `docs/` here for now since this repo is the
anchor.

## lessons learned

The prompt has been refined based on past runs. Notes worth keeping:

- **Mechanical em-dash → period** produces awkward "period then
  lowercase" reads. The post-sweep audit step exists to catch them.
  First run that exposed this: PR #6 (alignment of the brand repo
  itself, May 2026).
- **ASCII chart art** uses em-dash characters as visual decoration,
  not prose. The "what counts as rendered prose" section exists to
  make that distinction explicit.
- **Decorative ruler comments** like `// ——————————————` in source
  are code structure. Don't sweep.
- **Repo metadata** (GitHub description, topics) is part of brand
  surface area. Often already aligned, but worth checking.
- **"None"** is a valid finding for the skip/flag check. Surface it
  in the PR description anyway. Negative findings are still data.

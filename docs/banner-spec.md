# banner spec

The canonical layout for a project banner. Sits at the top of any
brand-aligned repo's README, above the title and badges. Identity
surface, not reading surface.

For the voice and accent rules that apply to all surfaces (banners
included), see [`voice.md`](voice.md). For priming a claude design
session to generate one, see [`design-session-brief.md`](design-session-brief.md).

## when to use a banner

- Public-facing repos where a strong first impression matters.
- Identity surfaces: top of README, social preview, presentation
  covers.
- Any place the brand introduces a project rather than explains it.

## when NOT to use a banner

- Internal scaffolds or templates that don't have a stable identity.
- Library or utility repos where the README is purely reference
  (function docs, config tables). The banner adds noise.
- Private repos where no public-facing first impression is needed.
  Optional, not forbidden.

## dimensions

- Aspect ratio: ~3.5:1.
- Canonical size: 2400×686 SVG, with PNG exports at 1200 and 2400
  widths.
- Renders at full README width (about 1200px effective at 100%
  zoom).

## layout

Two patterns work. Pick one per repo, don't mix within a repo.

### A. split (hero left, metadata right)

Use when the project has a distinctive visual: a training curve, a
key graph, a system diagram.

```
┌──────────────────────────────┬─────────────────────────┐
│                              │ EYEBROW · ORG/REPO      │
│  [hero visual]               │                         │
│  chart, mark, abstraction    │ Headline                │
│                              │ Subtitle italic         │
│                              │                         │
│                              │ STACK · TAG · LIST     │
└──────────────────────────────┴─────────────────────────┘
```

Monogram in the bottom-right corner. Bracketed corner marks frame
the whole banner (austere).

### B. centered (mark over background)

Use when the project's identity is the mark itself and there's no
defining secondary visual.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                       [Mark]                             │
│                                                          │
│                    Headline text                         │
│                    Subtitle italic                       │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## colors

All banners are dark surfaces. Light banners are not used. Reading
surfaces (body of README, content pages) stay light; the contrast
between identity (dark) and content (light) is intentional.

| Element | Token | Hex / rgba |
| --- | --- | --- |
| Background | `--ac-ink` | `#0B0B0C` |
| Headline | `--ac-paper-on-dark` | `#FAF8F2` |
| Subtitle, body text | `--ac-text-on-dark` | `rgba(255,255,255,0.85)` |
| Eyebrow, muted labels | `--ac-muted-on-dark` | `rgba(255,255,255,0.55)` |
| Bracket corners, hairlines | `--ac-rule-on-dark` | `rgba(255,255,255,0.18)` |
| Accent (data, pivot, δ) | `--ac-accent` | `#1F4D3A` |
| Thematic accent (rare) | `--ac-accent-alt` | `#B45A3C` |

No other colors. If a design proposes a fifth color, it's wrong.

## the accent rule applies (non-negotiable)

Hunter green on a banner means the same thing it does anywhere
else: data, pivot, the δ.

Apply hunter green to:

- The data line in a chart (the reward curve, the latency series,
  the metric over time).
- The inflection point or endpoint marker (the finding).
- A label naming the goal or threshold (the ε that the data has to
  clear).
- The ε character in the monogram (canonical).

Do not apply hunter green to:

- The eyebrow, project name, subtitle, or stack tags.
- Bracket corners, hairlines, dividers.
- Decorative shapes that don't represent data.

If a green element doesn't represent data, evidence, or a pivot,
demote it. On a dark banner, demote means "remove" since the
default chrome is muted rule-on-dark, not green.

The thematic accent (`--ac-accent-alt`, rust) is available for rare
project-specific references that aren't strictly data. Example: a
small colored dot referencing a cartridge name or product line.
Use sparingly. Don't introduce any other accent.

## type

| Region | Family | Weight | Size at 2400w | Letter-spacing |
| --- | --- | --- | --- | --- |
| Headline | IBM Plex Sans | 500 | 84-92px | -0.04em |
| Subtitle | IBM Plex Sans italic | 400 | 22px | -0.01em |
| Eyebrow | IBM Plex Mono | 400 | 13px | 2.6 (uppercase) |
| Stack tags | IBM Plex Mono | 400 | 11-12px | 0.18em (uppercase) |
| Annotations on chart | IBM Plex Mono | 400 | 10-12px | 0.1em |

Monogram per the canonical monogram spec.

## what goes in each region

- **Eyebrow**: `PROJECT · <ORG>/<REPO>` in uppercase. Anchors the
  banner to a specific repo.
- **Headline**: project name. Title Case is acceptable on the
  banner (identity surface, not body prose).
- **Subtitle**: one italic sentence describing what the project is.
  Voice rules apply: no hyperbole, calibrated, numerical where
  possible.
- **Stack footer**: 3-5 main dependencies or technologies, in caps,
  separated by `·`.
- **Hero visual**: the project's defining graph, mark, or
  abstraction. The accent rule applies; the data line is hunter
  green.
- **Monogram**: bottom-right corner. Canonical A·ε·C mark with the
  ε in accent.
- **Bracket corners**: thin hairlines at each of the four corners
  of the banner. Match `--ac-rule-on-dark`.

## storage

Each repo carries its own banner under `assets/`:

```
<repo-root>/
  assets/
    banner.svg
    banner-1200.png
    banner-2400.png
```

Reference at the very top of the README, above the `<div align="center">`
block that holds the title and badges:

```html
<p align="center">
  <img src="assets/banner.svg" alt="<project> banner" width="100%">
</p>
```

Use the SVG by default. PNG fallbacks exist for rendering
contexts that don't support SVG (rare on GitHub but common in
slide decks and emails).

## requesting a banner from claude design

Paste the design-session-brief, then append:

> Generate a banner for `<org>/<repo>` following `docs/banner-spec.md`
> from alanchester-brand. The project is `<one-line description>`.
> The defining visual is `<chart / mark / system diagram>`. The
> stack is `<TAG · TAG · TAG>`. Use the split layout (hero left,
> metadata right). The accent (hunter green) belongs on `<specific
> data element>`, nothing else.
>
> Output: a `package/` zip containing
> `assets/<repo>-banner.svg` plus PNG exports at 1200 and 2400
> widths. Per the handoff spec, no other files.

Don't ship banners through this brand repo. They're per-repo
assets, generated once per repo, landed in each repo's own
`assets/` directory.

## audit

A future dimension in `scripts/audit-downstream.sh` will check
whether each public repo has `assets/banner.{svg,png}` and a
reference at the top of its README. Not yet enforced. Compliance
will be advisory until the banner backlog is caught up.

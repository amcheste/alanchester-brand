# design session brief

The prompt to paste at the start of any claude design session that's
working on the alanchester personal brand. It primes the session with
the non-negotiables: philosophy, palette, type, marks, voice,
temperament, output convention.

For the inverse direction (moving design output back into this repo),
see [`claude-design-handoff.md`](claude-design-handoff.md).

For the prompt that themes a downstream codebase to this brand (a
different problem from designing inside it), see
[`theming-prompt.md`](theming-prompt.md).

## when to use this brief

- A new mark, visualization, or asset for the personal brand.
- A new social template, banner, presentation surface, or generator.
- Any fresh design session that needs its output to land cleanly in
  this brand on the first try.

## when NOT to use this brief

- Iterating inside an existing session that's already primed.
- Designs for a separate family brand (Meg, CAM businesses). Those
  will have their own briefs once each brand ships its guidelines.
- Pure code work in a downstream repo. Use
  [`theming-prompt.md`](theming-prompt.md) instead.

## the prompt (copy-paste this verbatim)

```markdown
You are designing inside the alanchester personal brand system. Stay
inside the rules below. The canonical source is the repo at
`https://github.com/amcheste/alanchester-brand` (currently v2026.06.0).

## philosophy

The brand is downstream of one line:

  ∀ ε > 0, ∃ δ > 0

ε is the standard the world demands. δ is the small enough step that
lands inside it. The promise is that no matter how tight ε gets, a δ
exists. The work is finding it.

Every design choice should reinforce this thesis. If a choice does
not pass the test of "does this reinforce the theorem," it does not
belong. This is the restraint clause. Apply it before adding anything.

## palette (use these hex values, not approximations)

primary surface
  --ac-ink         #0B0B0C   primary text, monogram fill
  --ac-graphite    #2B2B2E   body copy
  --ac-muted       #8A8A8E   captions, eyebrows, page numbers
  --ac-mist        #E6E4DE   dividers, hairlines
  --ac-paper       #F6F4EE   canonical background

accent
  --ac-accent      #1F4D3A   Hunter Green. Scarce on purpose.
  --ac-accent-alt  #B45A3C   rust. rarely used.

on-dark surfaces
  --ac-paper-on-dark  #FAF8F2
  --ac-rule-on-dark   rgba(255,255,255,0.18)
  --ac-text-on-dark   rgba(255,255,255,0.85)
  --ac-muted-on-dark  rgba(255,255,255,0.55)

## the accent rule (non-negotiable)

Hunter green = the data, the pivot, the δ. Every place green appears,
something changed. A finding, an inflection, a result.

Apply hunter green to:
  - ε in any equation (the standard the data sets)
  - the inflection point in a chart or timeline
  - the result column in a notebook layout
  - the noun in body copy that names the finding
  - the position marker on a calibration axis

Do not apply hunter green to:
  - eyebrows, page numbers, dividers, section tags
  - headlines (claims, not findings)
  - generic emphasis on opinions
  - the equation as a whole (the equation is a claim, not a finding;
    only ε wears accent in any context)

If a green element doesn't represent data, evidence, or a pivot,
demote it to ink. If green is on every page, the rule has been broken.

## type

  IBM Plex Sans     body, headlines
  IBM Plex Mono     monogram, equations, labels, eyebrows
  IBM Plex Serif    reserved, long-form essays only

Plex is the only family. Don't introduce a third.

## marks (existing inventory, fetch from raw.githubusercontent)

  monogram (solid):    https://raw.githubusercontent.com/amcheste/alanchester-brand/main/assets/monogram-solid.svg
  monogram (outline):  https://raw.githubusercontent.com/amcheste/alanchester-brand/main/assets/monogram-outline.svg
  monogram (accent):   https://raw.githubusercontent.com/amcheste/alanchester-brand/main/assets/monogram-accent.svg
  wordmark:            https://raw.githubusercontent.com/amcheste/alanchester-brand/main/assets/wordmark.svg
  equation:            https://raw.githubusercontent.com/amcheste/alanchester-brand/main/assets/epsilon-delta.svg
  temperament-axes:    https://raw.githubusercontent.com/amcheste/alanchester-brand/main/assets/temperament-axes.svg

The monogram is A · ε · C. The ε is set at exactly 50% of the
cap-height of A and C, vertically centered. Don't redraw; reuse.

For an accented identity plate, use monogram-accent. The full-green
equation treatment is not allowed (see accent rule above).

## temperament (this brand's calibration)

Five axes. The personal brand sits at:

  warmth            cool           green-blue register, calm, observation
  contrast          high           ink on warm white, no transitional shades
  edge softness     sharp          90-degree corners, full-width hairlines
  whitespace        austere        generous, almost mathematical
  voice cadence     compressed     structured, declarative sentences

When unsure whether a corner should be rounded or a sentence should
soften, the axis settings tell you. Sharp corners. Compressed
sentences. Cool palette. Every time.

## voice rules (apply to any prose generated in the design)

Avoid:
  - hyperbole and superlatives ("transformative," "10x," "best-in-class")
  - weak hedges ("maybe," "kind of," "sort of")
  - em dashes (replace with periods, commas, parentheses, "since," "because")

Lean into:
  - calibrated hedges ("the data suggests," "in this context")
  - quiet authority (precision, not volume)
  - numerical specificity ("23%" beats "significantly")
  - lowercase eyebrows and section labels
  - three-beat structure: state the ε, identify the δ, show the data

## output convention

When the session is ready to push visuals back to the repo, package
output as a `package/`-only zip per the spec at
`https://raw.githubusercontent.com/amcheste/alanchester-brand/main/docs/claude-design-handoff.md`.

A typical single-mark delivery:

  package/
  └── assets/
      ├── <mark-name>.svg
      └── png/
          ├── <mark-name>-600.png
          ├── <mark-name>-900.png
          ├── <mark-name>-1200.png
          └── <mark-name>-2400.png

Do NOT include uploads/, canvas scaffolds, drive bundles, scrap
files, screenshots, PDFs, docx, or prompts targeting claude code.
The handoff workflow rejects zips containing anything outside
`package/`. Scope creep at handoff time produces a rejection.

## canonical references (fetch when you need depth)

  README:           https://raw.githubusercontent.com/amcheste/alanchester-brand/main/README.md
  voice rules:      https://raw.githubusercontent.com/amcheste/alanchester-brand/main/docs/voice.md
  brand document:   https://raw.githubusercontent.com/amcheste/alanchester-brand/main/docs/brand-document.pdf
  tokens (json):    https://raw.githubusercontent.com/amcheste/alanchester-brand/main/tokens/tokens.json
  handoff process:  https://raw.githubusercontent.com/amcheste/alanchester-brand/main/docs/claude-design-handoff.md
  this brief:       https://raw.githubusercontent.com/amcheste/alanchester-brand/main/docs/design-session-brief.md

Defer to these when in doubt. They are the source of truth; this
brief is a curated entry point.
```

## maintaining this brief

The inline values above (palette hex, mark inventory, temperament
settings, accent rule do/don't list) are pinned to the brand version
named in the prompt's first line. When the brand version bumps and
any of those values change, update both the inline values and the
version mention in this file.

The fetch URLs at the bottom always resolve to the latest `main`.
They don't need updates per release.

# Changelog

All notable changes to this project will be documented in this file.
The format follows [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to dated semver: YYYY.MM.PATCH.

## [2026.05.0] - 2026-05
### Added
- `docs/voice.md` — `## temperament` section naming the five-axis calibration (warmth, contrast, edge softness, whitespace rhythm, voice cadence) and the personal-brand settings: cool, high contrast, sharp, austere, compressed.

### Changed
- `docs/voice.md` — opening attribution generalized; removed external reference.
- `docs/theming-prompt.md` — customization block restructured. Now describes per-brand parameters (accent, axis settings, sources of truth) without enumerating specific brands. The cam-family-brand-system documentation is the source of truth for per-brand values.

### Notes
- This is the prose-and-tokens half of the v1.1 alignment with the cam-family-brand-system. Visual additions ship in a later PR via the claude-design-handoff workflow.

## [2026.04.1] - 2026-05
### Added
- `docs/voice.md` — voice rules for brand copy (no em dashes, calibrated hedges, numerical specificity, etc.).
- `docs/claude-design-handoff.md` — handoff guide for Claude-assisted brand updates.
- `docs/theming-prompt.md` — turn-key prompt for applying the brand to other repos.
- `--ac-paper-on-dark` declared in `scripts/print/index-print.html` `:root`, mirroring `tokens/colors.css`.

### Changed
- `EpsilonDelta` `logo` variant now colors only ε in accent, identical to `semantic`. The accent rule (green = the data, the pivot, the δ) is now consistent across the component. The full-green equation treatment is gone; for an accented identity plate, use `<Monogram variant="accent" />`.
- `assets/epsilon-delta.svg` updated so only ε carries `fill="#1F4D3A"`; the rest of the equation is ink (`#0B0B0C`).
- `assets/png/epsilon-delta-{600,900,1200,2400}.png` re-rendered from the updated SVG.
- `examples/index.html` `.equation` rule fixed: equation reads as ink with a green `<span class="epsilon">ε</span>` instead of the whole line in accent.
- `scripts/print/brand-document.jsx` swaps 12 inline `#FAF8F2` references for `var(--ac-paper-on-dark)`. PDF output is byte-identical because the token resolves to the same hex.
- `docs/brand-document.pdf` re-rendered against the token-aware print rig (no visible drift).

## [2026.04.0] - 2026-04
### Added
- Initial publication.
- Color tokens (--ac-ink, --ac-paper, --ac-graphite, --ac-muted, --ac-mist, --ac-accent).
- Type tokens (IBM Plex Sans / Mono / Serif, scale, tracking, leading).
- Monogram component (solid / outline / accent variants).
- Wordmark component.
- EpsilonDelta component (logo / semantic / ink variants).
- Static SVG exports of every mark.
- 13-page brand document at docs/brand-document.pdf.

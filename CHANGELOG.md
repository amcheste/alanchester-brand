# Changelog

All notable changes to this project will be documented in this file.
The format follows [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to dated semver: YYYY.MM.PATCH.

## [2026.05.0] - 2026-05
### Added
- PNG exports of every mark at common embed sizes (assets/png/).
- 13-page rendered brand document at docs/brand-document.pdf (was a broken README link in 2026.04.0).
- docs/voice.md captures the brand voice rules (no em dashes, calibrated hedges, three-beat narrative, numerical specificity).
- docs/claude-design-handoff.md documents the workflow for moving updates from claude design into this repo.
- docs/theming-prompt.md is a turn-key prompt for applying the brand to any other repo.
- scripts/print/ holds the self-service rig that renders the brand document PDF (index-print.html + brand.jsx + brand-document.jsx).
- .github/workflows/ci.yml validates tokens.json and SVG well-formedness on push and PR.
- .github/CODEOWNERS routes PRs to @amcheste.

### Changed
- Reconciled `--ac-accent` to family system canonical Hunter Green `#1F4D3A` (was proof green `#1F6B3A`). This anchors the personal brand within the CAM family brand system, where each member's accent is a translation of their temperament. All token files, SVGs, and accent-tinted PNGs were re-exported to match.
- Brand document content regenerated with Meg's messaging refinement. Theorem now reads "for any goal, there exists a small enough step to reach it" (incremental compounding, bayesian updating, gradient descent framing), method page replaces the 5-beat scientific method with the 3-beat narrative (state ε, identify δ, show data), and signatures adopt Meg's anchors with "open by default" as the layer-3 individuated anchor.
- Brand document edition bumped to v2026.05 · rev 02.
- Voice rules applied across the repo's own surfaces (README, CHANGELOG, docs, components, tokens, print rig). All rendered prose em dashes removed. ASCII chart art and decorative ruler comments preserved.
- CHANGELOG entry header switched from em dash to hyphen-minus to match the Keep-a-Changelog format spec.

### Fixed
- Equation SVG (assets/epsilon-delta.svg) viewBox widened from `0 0 200 32` to `0 0 210 32` so the trailing zero is no longer clipped at native size.
- Header meta line in brand-document.jsx no longer wraps to two lines on narrow viewports (`white-space: nowrap` plus flex gap).

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

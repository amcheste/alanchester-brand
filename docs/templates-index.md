# templates index

Where brand-aligned templates live, how they're versioned, and how to
find the one you need.

For the workflow that produces a new template from a design session,
see [`claude-design-handoff.md`](claude-design-handoff.md). For
priming a fresh design session with this brand, see
[`design-session-brief.md`](design-session-brief.md).

## the split

Templates are split by file type, not by use case. The principle is
simple: if a file is text, the source of truth lives in this repo. If
a file is binary and edited in a native app, the source of truth lives
in google drive.

| File type | Storage | Why |
| --- | --- | --- |
| `.svg`, `.html`, `.css`, `.tex`, `.md`, `.txt` | this repo, under `templates/` | text, diffable, versionable, build-from-source |
| `.pptx`, `.key`, `.docx`, `.indd`, `.psd` | drive, under `/Alan Chester Brand/Templates/` | binary, native-tool-edited, useless to git-diff, native "make a copy" UX |
| `.png`, `.pdf`, `.jpg` rendered from a template | this repo, under `assets/png/` or `assets/templates/` | rendered exports follow the same pattern as the marks |
| Finished outputs (the actual deck, the actual letter) | drive, under the project that owns them | per `claude-design-handoff.md` model |

The repo's `templates/` directory does not exist yet. It's created
when the first text-source template lands.

## the catalog

Each row names what the template is for, where it lives, what brand
version it reflects, when it was last refreshed, and any notes worth
carrying. Rows are placeholders until each template ships.

| Template | Location | Brand version | Last refreshed | Notes |
| --- | --- | --- | --- | --- |
| Slide deck (general) | drive (TBD) | (TBD) | (TBD) | master template for talks, internal reviews, public sessions |
| Letterhead / document | drive (TBD) | (TBD) | (TBD) | for memos, formal letters, single-page documents |
| Business card | repo (TBD) or drive (TBD) | (TBD) | (TBD) | print spec lives in repo if SVG-source; finished file in drive if InDesign |
| Email signature (HTML) | repo (TBD) | (TBD) | (TBD) | text source, `templates/email-signature.html` |
| Email signature (plain text) | repo (TBD) | (TBD) | (TBD) | text source, `templates/email-signature.txt` |
| Social card / OG image | repo `assets/` | (TBD) | (TBD) | 1200×630, used for github social preview and any downstream repo |
| Resume / CV | drive (TBD) | (TBD) | (TBD) | binary template, edited in native app |

When a template ships, replace TBD with the actual path or drive link
and fill in the brand version and date.

## conventions

### filename versioning

Drive doesn't have native semver. Two layered conventions:

1. **Brand-version suffix in the filename.** When a template is
   refreshed for a new brand minor version, save it with the new
   version in the name: `Deck Template - v2026.07.pptx`. The previous
   version stays in drive's version history but the active filename
   reflects the current brand version.
2. **Drive's built-in version history** for incremental tweaks within
   a brand version (typo fix in a master slide, bullet style
   adjustment, image swap).

Combined: filename = brand-version snapshot. Drive history =
within-snapshot iteration.

### embed, don't link

Brand assets in binary templates must be embedded, not linked.
Linked assets break the moment the file is moved or shared. Embed
the SVG or PNG at the size you need. When a mark updates, the
template needs re-embedding, which is captured by a brand-version
filename bump.

### periodic audit

When the brand bumps a minor version (system extension, new mark,
new token), do a one-pass review of this index. For each template,
ask: does it still reflect the current brand state? Most won't need
updates. The ones that do get refreshed and a new filename version.

Patch-level brand bumps (fixes, internal consistency) rarely warrant
template refreshes. Use judgment.

### one master per use case

Resist proliferation. "Internal slide deck" and "public talk slide
deck" are usually the same template with a different cover slide,
not two templates. Keeping the catalog small keeps the audit
manageable.

## using a template

For binary templates in drive: open the file, choose "Make a copy"
(or the equivalent in the native app), save the copy somewhere
project-specific, edit there. Never edit the master template
directly.

For text templates in repo: copy the file out to wherever you're
building, edit there. The repo file is the canonical source; your
copy is a derivative.

## adding a new template

1. The template is produced (claude design session, manual work in
   the native app, hand-coded).
2. Decide storage per the split table above.
3. Save it with a brand-version-suffixed filename (binary) or a
   path under `templates/` (text).
4. Add a row to this index, replacing TBD with the actual path or
   drive link, and filling in the brand version and date.
5. If the template embeds brand assets, confirm they're embedded
   and not linked.

## cross-references

- [`docs/claude-design-handoff.md`](claude-design-handoff.md) for the workflow that produces templates from a design session
- [`docs/design-session-brief.md`](design-session-brief.md) for priming a design session with this brand before any work begins
- [`docs/theming-prompt.md`](theming-prompt.md) for applying this brand to downstream code repos

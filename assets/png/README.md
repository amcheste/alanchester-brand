# PNG exports

Rasterized versions of the marks in `../*.svg`. Use these when the destination
can't render SVG — Word docs, slide decks built without SVG support, social
profiles, favicons.

## What's here

| File                              | Source                  | Use                                               |
| --------------------------------- | ----------------------- | ------------------------------------------------- |
| `monogram-solid-{256,512,800,1024}.png`   | `monogram-solid.svg`    | The canonical mark. Avatars, app icons, favicons. |
| `monogram-outline-{256,512,800,1024}.png` | `monogram-outline.svg`  | Mark on paper backgrounds.                        |
| `monogram-accent-{256,512,800,1024}.png`  | `monogram-accent.svg`   | Mark on light backgrounds where you want presence. |
| `wordmark-{800,1600,3200}.png`            | `wordmark.svg`          | Email signatures, slide footers, document headers. |
| `epsilon-delta-{600,900,1200,2400}.png`   | `epsilon-delta.svg`     | The signature equation. Identity plates.          |

All PNGs have a transparent background where the source SVG does (outline
monogram, wordmark, equation). Solid and accent monograms have their respective
ink/proof-green grounds baked in.

## If you need bigger

These are exported at sensible web/print densities. For larger needs (billboards,
fabric printing, anything north of 1000px wide), rasterize the source SVG
directly — the SVGs are vector and scale to any size:

```sh
# macOS — using rsvg-convert (brew install librsvg)
rsvg-convert -w 4096 monogram-solid.svg -o monogram-solid-4096.png

# Or via Inkscape
inkscape monogram-solid.svg --export-filename=monogram-solid-4096.png --export-width=4096
```

## Why these specific sizes

- **256 / 512 / 800 / 1024** for square monograms — covers favicon
  (256 → resampled to 32/64), app icons (512), most slide/print uses (800),
  and retina app icons (1024).
- **800 / 1600 / 3200** for wordmark — at 5:1 aspect that's 800×160,
  1600×320, 3200×640. 800 fills an email signature; 1600 is retina-safe
  for slide headers; 3200 covers print and banners.
- **600 / 900 / 1200 / 2400** for the equation — fits any slide footer
  or document header. 1200 / 2400 cover retina and print.

If you find yourself wanting another size often enough to add, add it here
with the same naming pattern: `<mark>-<width>.png`.

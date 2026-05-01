/**
 * Monogram · A ε C
 *
 * The canonical mark. ε is set at 50% of the cap-height of A and C,
 * vertically centered between them. Bracketed by corner ticks.
 *
 * Variants:
 *   - "solid"   ink fill, paper letterforms (default)
 *   - "outline" paper fill, 1.5px ink border, ink letterforms
 *   - "accent"  green fill, ink letterforms
 *
 * Glyphs (the lifted constant — what sits between A and C):
 *   - "epsilon" ε · canonical · the standard the data sets   (default)
 *   - "oplus"   ⊕
 *   - "cap"     ∩
 *   - "mapsto"  ↦
 *   - "equiv"   ≡
 *   - "phi"     φ
 *   - "dot"     ·
 *   - "therefore" ∴
 *   - "slash"   /
 *
 * Requires CSS variables from @amcheste/brand/tokens:
 *   --ac-ink, --ac-paper, --ac-accent, --ac-mono
 */

import React from "react";

const GLYPHS = {
  epsilon:   { ch: "ε",  scale: 0.50, opacity: 1.0,  gap: 0.09 },
  oplus:     { ch: "⊕",  scale: 0.88, opacity: 0.65, gap: 0.10 },
  cap:       { ch: "∩",  scale: 0.92, opacity: 0.65, gap: 0.09 },
  mapsto:    { ch: "↦",  scale: 0.92, opacity: 0.65, gap: 0.09 },
  equiv:     { ch: "≡",  scale: 0.88, opacity: 0.65, gap: 0.10 },
  phi:       { ch: "φ",  scale: 0.78, opacity: 0.45, gap: 0.07 },
  dot:       { ch: "·",  scale: 1.0,  opacity: 0.65, gap: 0.04 },
  therefore: { ch: "∴",  scale: 0.72, opacity: 0.45, gap: 0.06 },
  slash:     { ch: "/",  scale: 1.0,  opacity: 0.55, gap: 0.06 },
};

export function Monogram({ size = 64, variant = "solid", glyph = "epsilon" }) {
  const bg = variant === "outline" ? "transparent"
           : variant === "accent"  ? "var(--ac-accent)"
           : "var(--ac-ink)";
  const fg = variant === "outline" ? "var(--ac-ink)"
           : variant === "accent"  ? "var(--ac-ink)"
           : "var(--ac-paper)";
  const border = variant === "outline" ? "1.5px solid var(--ac-ink)" : "none";

  const spec = GLYPHS[glyph] || GLYPHS.epsilon;

  // ε gets a special tinted color (so it reads as a constant, not a letter)
  const epsilonColor =
    glyph === "epsilon"
      ? variant === "solid"   ? "rgba(255,255,255,0.65)"
      : variant === "accent"  ? "rgba(11,11,12,0.6)"
      : "var(--ac-accent)"
      : undefined;

  return (
    <div
      style={{
        width: size,
        height: size,
        background: bg,
        border,
        display: "grid",
        placeItems: "center",
        fontFamily: "var(--ac-mono)",
        fontWeight: 500,
        fontSize: size * 0.42,
        color: fg,
        letterSpacing: "-0.03em",
        position: "relative",
      }}
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: size * spec.gap }}>
        <span>A</span>
        <span style={{
          opacity: spec.opacity,
          fontSize: size * 0.42 * spec.scale,
          lineHeight: 1,
          fontWeight: 300,
          color: epsilonColor,
        }}>{spec.ch}</span>
        <span>C</span>
      </span>
      <CornerTicks
        size={size}
        color={variant === "solid" ? "var(--ac-paper)" : "var(--ac-ink)"}
        opacity={variant === "accent" ? 1 : 0.25}
      />
    </div>
  );
}

function CornerTicks({ size, color, opacity }) {
  const len = Math.max(6, size * 0.09);
  const pad = Math.max(4, size * 0.08);
  const s = { position: "absolute", background: color, opacity };
  return (
    <>
      <span style={{ ...s, width: 1, height: len, top: pad, left: pad }} />
      <span style={{ ...s, width: len, height: 1, top: pad, left: pad }} />
      <span style={{ ...s, width: 1, height: len, top: pad, right: pad }} />
      <span style={{ ...s, width: len, height: 1, top: pad, right: pad }} />
      <span style={{ ...s, width: 1, height: len, bottom: pad, left: pad }} />
      <span style={{ ...s, width: len, height: 1, bottom: pad, left: pad }} />
      <span style={{ ...s, width: 1, height: len, bottom: pad, right: pad }} />
      <span style={{ ...s, width: len, height: 1, bottom: pad, right: pad }} />
    </>
  );
}

export default Monogram;

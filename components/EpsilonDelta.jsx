/**
 * EpsilonDelta · the equation as a brand element
 *
 *   ∀ ε > 0, ∃ δ > 0
 *
 * Variants:
 *   - "logo"     ε in accent · for identity-plate use (header, signature)
 *   - "semantic" ε in accent · for inline body-copy use
 *   - "ink"      no accent · subdued use, e.g. dark-on-paper headers
 *
 * "logo" and "semantic" render identically. The accent rule (green = the
 * data, the pivot, the δ) means the equation is a claim, not a finding —
 * only ε wears accent, in any context. For a fully-accented identity plate,
 * use <Monogram variant="accent" /> instead.
 *
 * Requires CSS variables from @amcheste/brand/tokens:
 *   --ac-accent, --ac-ink, --ac-mono
 */

import React from "react";

export function EpsilonDelta({ size = 22, variant = "logo", color }) {
  const base = color || "var(--ac-ink)";
  const accent = "var(--ac-accent)";

  const common = {
    fontFamily: "var(--ac-mono)",
    fontSize: size,
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
  };

  if (variant === "ink") {
    return <span style={{ ...common, color: base }}>∀ ε &gt; 0, ∃ δ &gt; 0</span>;
  }

  return (
    <span style={{ ...common, color: base }}>
      ∀ <span style={{ color: accent }}>ε</span> &gt; 0, ∃ δ &gt; 0
    </span>
  );
}

export default EpsilonDelta;

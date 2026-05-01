/**
 * EpsilonDelta · the equation as a brand element
 *
 *   ∀ ε > 0, ∃ δ > 0
 *
 * Variants:
 *   - "logo"     entire equation in accent (use as identity plate)
 *   - "semantic" only ε in accent (use in body copy where ε = the standard)
 *   - "ink"      no accent (subdued use, e.g. dark-on-paper headers)
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

  if (variant === "logo") {
    return <span style={{ ...common, color: accent }}>∀ ε &gt; 0, ∃ δ &gt; 0</span>;
  }

  if (variant === "semantic") {
    return (
      <span style={{ ...common, color: base }}>
        ∀ <span style={{ color: accent }}>ε</span> &gt; 0, ∃ δ &gt; 0
      </span>
    );
  }

  return <span style={{ ...common, color: base }}>∀ ε &gt; 0, ∃ δ &gt; 0</span>;
}

export default EpsilonDelta;

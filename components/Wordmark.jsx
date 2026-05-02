/**
 * Wordmark · "alan chester."
 *
 * Lowercase. Tight letter-spacing. Trailing period in ink.
 * The period is part of the mark. A closing seal, not decoration.
 *
 * Requires CSS variables from @amcheste/brand/tokens:
 *   --ac-ink, --ac-sans
 */

import React from "react";

export function Wordmark({ size = 28, color = "var(--ac-ink)", weight = 500 }) {
  return (
    <span
      style={{
        fontFamily: "var(--ac-sans)",
        fontWeight: weight,
        fontSize: size,
        letterSpacing: "-0.035em",
        color,
        lineHeight: 1,
        display: "inline-block",
      }}
    >
      alan chester<span style={{ color, marginLeft: "0.02em" }}>.</span>
    </span>
  );
}

export default Wordmark;

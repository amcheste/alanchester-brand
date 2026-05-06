// Alan Chester · personal brand artifacts
// All artboards read CSS vars set on :root by the Tweaks layer.

const PALETTE = {
  ink: "var(--ac-ink)",         // deep near-black
  graphite: "var(--ac-graphite)", // mid neutral
  mist: "var(--ac-mist)",       // subtle line neutral
  paper: "var(--ac-paper)",     // off-white
  accent: "var(--ac-accent)",   // single strong accent
  muted: "var(--ac-muted)",     // muted body text
};

// ——————————————————————————————————————————————————————————————
// Primitives
// ——————————————————————————————————————————————————————————————

function Wordmark({ size = 72, color = PALETTE.ink, weight = 500, letterSpacing = "-0.04em" }) {
  return (
    <span
      style={{
        fontFamily: "var(--ac-sans)",
        fontWeight: weight,
        fontSize: size,
        lineHeight: 1,
        letterSpacing,
        color,
        fontFeatureSettings: '"ss01", "ss02"',
        display: "inline-flex",
        alignItems: "baseline",
      }}
    >
      alan chester<span style={{ color: PALETTE.ink, marginLeft: "0.02em" }}>.</span>
    </span>
  );
}

function Monogram({ size = 64, variant = "solid", glyph }) {
  // variant: 'solid' | 'outline' | 'accent'
  const bg = variant === "outline" ? "transparent" : variant === "accent" ? PALETTE.accent : PALETTE.ink;
  const fg = variant === "outline" ? PALETTE.ink : variant === "accent" ? PALETTE.ink : PALETTE.paper;
  const border = variant === "outline" ? `1.5px solid ${PALETTE.ink}` : "none";
  const g = glyph || (typeof document !== "undefined" ? (getComputedStyle(document.documentElement).getPropertyValue("--ac-monogram-glyph").trim() || "oplus") : "oplus");
  const GLYPHS = {
    // gap = how much breathing room around the glyph, as a fraction of `size`.
    // Larger/wider glyphs (⊕ ∩ ≡ ↦) get more space; tiny/light marks (ε · ∴) get less.
    oplus:     { ch: "⊕",  scale: 0.88, opacity: 0.65, gap: 0.10 },
    cap:       { ch: "∩",  scale: 0.92, opacity: 0.65, gap: 0.09 },
    mapsto:    { ch: "↦",  scale: 0.92, opacity: 0.65, gap: 0.09 },
    equiv:     { ch: "≡",  scale: 0.88, opacity: 0.65, gap: 0.10 },
    phi:       { ch: "φ",  scale: 0.78, opacity: 0.45, gap: 0.07 },
    epsilon:   { ch: "ε",  scale: 0.50, opacity: 1.0,  gap: 0.09 },  // small lifted constant. A · ε · C
    dot:       { ch: "·",  scale: 1.0,  opacity: 0.65, gap: 0.04 },  // tightest, near-invisible
    therefore: { ch: "∴",  scale: 0.72, opacity: 0.45, gap: 0.06 },
    slash:     { ch: "/",  scale: 1.0,  opacity: 0.55, gap: 0.06 },
  };
  const spec = GLYPHS[g] || GLYPHS.oplus;
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
        fontFeatureSettings: '"ss01"',
      }}
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: size * (spec.gap ?? 0.08) }}>
        <span>A</span>
        <span style={{
          opacity: spec.opacity,
          fontSize: size * 0.42 * spec.scale,
          lineHeight: 1,
          fontWeight: 300,
          color: g === "epsilon"
            ? (variant === "solid" ? "rgba(255,255,255,0.65)" : variant === "accent" ? "rgba(11,11,12,0.6)" : "var(--ac-accent)")
            : undefined,
        }}>{spec.ch}</span>
        <span>C</span>
      </span>
      <CornerTicks size={size} color={variant === "solid" ? PALETTE.paper : PALETTE.ink} opacity={variant === "accent" ? 1 : 0.25} />
    </div>
  );
}

function CornerTicks({ size, color, opacity = 0.25 }) {
  const len = Math.max(6, size * 0.09);
  const pad = Math.max(4, size * 0.08);
  const style = { position: "absolute", background: color, opacity };
  return (
    <>
      <span style={{ ...style, width: 1, height: len, top: pad, left: pad }} />
      <span style={{ ...style, width: len, height: 1, top: pad, left: pad }} />
      <span style={{ ...style, width: 1, height: len, top: pad, right: pad }} />
      <span style={{ ...style, width: len, height: 1, top: pad, right: pad }} />
      <span style={{ ...style, width: 1, height: len, bottom: pad, left: pad }} />
      <span style={{ ...style, width: len, height: 1, bottom: pad, left: pad }} />
      <span style={{ ...style, width: 1, height: len, bottom: pad, right: pad }} />
      <span style={{ ...style, width: len, height: 1, bottom: pad, right: pad }} />
    </>
  );
}

function MetaLabel({ children, style }) {
  return (
    <span
      style={{
        fontFamily: "var(--ac-mono)",
        fontSize: 10,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: PALETTE.muted,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

// ——————————————————————————————————————————————————————————————
// Artboard 1 · Wordmark lockups
// ——————————————————————————————————————————————————————————————

function WordmarkBoard() {
  return (
    <div style={boardStyle({ padding: 64 })}>
      <TopMeta label="01 · Wordmark" sub="primary / horizontal / stacked" />

      <div style={{ marginTop: 72, display: "flex", flexDirection: "column", gap: 72 }}>
        {/* Primary */}
        <Row label="primary">
          <Wordmark size={96} />
        </Row>

        {/* Horizontal with mark */}
        <Row label="horizontal lockup">
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Monogram size={72} />
            <div style={{ width: 1, height: 56, background: PALETTE.mist }} />
            <Wordmark size={40} />
          </div>
        </Row>

        {/* Stacked */}
        <Row label="stacked">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
            <Monogram size={64} />
            <Wordmark size={36} />
          </div>
        </Row>

        {/* Inverse */}
        <Row label="inverse">
          <div style={{ background: PALETTE.ink, padding: "40px 56px", display: "inline-flex", alignItems: "center", gap: 20 }}>
            <Monogram size={56} variant="outline" />
            <Wordmark size={36} color={PALETTE.paper} />
          </div>
        </Row>
      </div>

      <BottomGrid />
    </div>
  );
}

function Row({ label, children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", alignItems: "center", gap: 32 }}>
      <MetaLabel>{label}</MetaLabel>
      <div>{children}</div>
    </div>
  );
}

// ——————————————————————————————————————————————————————————————
// Artboard 2 · Monogram system
// ——————————————————————————————————————————————————————————————

function MonogramBoard() {
  return (
    <div style={boardStyle({ padding: 64 })}>
      <TopMeta label="02 · Monogram" sub="AC mark / standalone usage" />

      <div style={{ marginTop: 72, display: "flex", flexDirection: "column", gap: 72 }}>
        <Row label="solid · default">
          <div style={{ display: "flex", gap: 24, alignItems: "flex-end" }}>
            <Monogram size={128} />
            <Monogram size={88} />
            <Monogram size={56} />
            <Monogram size={36} />
            <Monogram size={24} />
          </div>
        </Row>

        <Row label="outline">
          <div style={{ display: "flex", gap: 24, alignItems: "flex-end" }}>
            <Monogram size={88} variant="outline" />
            <Monogram size={56} variant="outline" />
            <Monogram size={36} variant="outline" />
          </div>
        </Row>

        <Row label="accent">
          <div style={{ display: "flex", gap: 24, alignItems: "flex-end" }}>
            <Monogram size={88} variant="accent" />
            <Monogram size={56} variant="accent" />
            <Monogram size={36} variant="accent" />
          </div>
        </Row>

        <Row label="favicon · 32px">
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <div style={{ padding: 8, background: PALETTE.mist }}>
              <Monogram size={32} />
            </div>
            <div style={{ padding: 8, background: PALETTE.mist }}>
              <Monogram size={32} variant="accent" />
            </div>
            <MetaLabel style={{ marginLeft: 8 }}>avatar / favicon / github</MetaLabel>
          </div>
        </Row>
      </div>

      <BottomGrid />
    </div>
  );
}

// ——————————————————————————————————————————————————————————————
// Artboard 3 · Color palette
// ——————————————————————————————————————————————————————————————

function PaletteBoard({ swatches }) {
  return (
    <div style={boardStyle({ padding: 64 })}>
      <TopMeta label="03 · Palette" sub="deep neutrals · single accent · off-white" />

      <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}>
        {swatches.map((s) => (
          <Swatch key={s.name} {...s} />
        ))}
      </div>

      <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={{ padding: 32, background: PALETTE.paper, border: `1px solid ${PALETTE.mist}` }}>
          <MetaLabel>on paper</MetaLabel>
          <div style={{ marginTop: 20 }}><Wordmark size={36} /></div>
          <p style={{ marginTop: 20, fontFamily: "var(--ac-sans)", fontSize: 14, lineHeight: 1.55, color: PALETTE.graphite, maxWidth: 360, letterSpacing: "-0.005em" }}>
            For any <span style={{ color: PALETTE.accent, fontFamily: "var(--ac-mono)" }}>ε &gt; 0</span>, there exists a <span style={{ color: PALETTE.ink, fontFamily: "var(--ac-mono)" }}>δ &gt; 0</span>.
          </p>
        </div>
        <div style={{ padding: 32, background: PALETTE.ink }}>
          <MetaLabel style={{ color: "rgba(255,255,255,0.5)" }}>on ink</MetaLabel>
          <div style={{ marginTop: 20 }}><Wordmark size={36} color={PALETTE.paper} /></div>
          <p style={{ marginTop: 20, fontFamily: "var(--ac-sans)", fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,0.75)", maxWidth: 360, letterSpacing: "-0.005em" }}>
            For any <span style={{ color: PALETTE.accent, fontFamily: "var(--ac-mono)" }}>ε &gt; 0</span>, there exists a <span style={{ color: "#FAF8F2", fontFamily: "var(--ac-mono)" }}>δ &gt; 0</span>.
          </p>
        </div>
      </div>

      <BottomGrid />
    </div>
  );
}

function Swatch({ name, token, value, fg }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ aspectRatio: "1 / 1.1", background: value, border: name === "paper" ? `1px solid ${PALETTE.mist}` : "none", position: "relative", padding: 12, display: "flex", alignItems: "flex-end", color: fg }}>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>{value}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ fontFamily: "var(--ac-sans)", fontSize: 13, fontWeight: 500, color: PALETTE.ink }}>{name}</span>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, letterSpacing: "0.1em", color: PALETTE.muted, textTransform: "uppercase" }}>{token}</span>
      </div>
    </div>
  );
}

// ——————————————————————————————————————————————————————————————
// Artboard 4 · Typography
// ——————————————————————————————————————————————————————————————

function TypographyBoard() {
  return (
    <div style={boardStyle({ padding: 64 })}>
      <TopMeta label="04 · Typography" sub="display · sans · mono" />

      <div style={{ marginTop: 64, display: "flex", flexDirection: "column", gap: 56 }}>
        <TypeSpec label="display" meta="var(--ac-sans) · 500 · -0.04em">
          <div style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 96, lineHeight: 0.95, letterSpacing: "-0.04em", color: PALETTE.ink }}>
            The margin<br/>that matters.
          </div>
        </TypeSpec>

        <TypeSpec label="headline" meta="var(--ac-sans) · 500 · -0.02em">
          <div style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.02em", color: PALETTE.ink, maxWidth: 720 }}>
            For any ε greater than zero, there exists a δ, and the data is what decides where it lives.
          </div>
        </TypeSpec>

        <TypeSpec label="body" meta="var(--ac-sans) · 400 · 0">
          <div style={{ fontFamily: "var(--ac-sans)", fontWeight: 400, fontSize: 16, lineHeight: 1.6, color: PALETTE.graphite, maxWidth: 640 }}>
The data names the difference, and the difference becomes the shape of the work. Body copy sits at sixteen pixels with a generous line height. Long-form writing, hypothesis notes, the kind of thing meant to be read once and remembered.
          </div>
        </TypeSpec>

        <TypeSpec label="mono · UI / label" meta="var(--ac-mono) · 400 · 0.08em · UPPER">
          <div style={{ fontFamily: "var(--ac-mono)", fontSize: 14, lineHeight: 1.5, letterSpacing: "0.08em", textTransform: "uppercase", color: PALETTE.ink }}>
            v2026.05 · alan chester · personal mark
          </div>
        </TypeSpec>

        <TypeSpec label="scale">
          <div style={{ display: "flex", alignItems: "baseline", gap: 24, flexWrap: "wrap" }}>
            {[72, 48, 32, 20, 16, 13, 11].map((s) => (
              <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 6 }}>
                <span style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: s, lineHeight: 1, color: PALETTE.ink, letterSpacing: "-0.02em" }}>Aa</span>
                <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, color: PALETTE.muted, letterSpacing: "0.08em" }}>{s}px</span>
              </div>
            ))}
          </div>
        </TypeSpec>
      </div>

      <BottomGrid />
    </div>
  );
}

function TypeSpec({ label, meta, children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 32, alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, paddingTop: 8 }}>
        <MetaLabel>{label}</MetaLabel>
        {meta && <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, color: PALETTE.muted, letterSpacing: "0.04em" }}>{meta}</span>}
      </div>
      <div>{children}</div>
    </div>
  );
}

// ——————————————————————————————————————————————————————————————
// Artboard 5 · Letterhead
// ——————————————————————————————————————————————————————————————

function LetterheadBoard() {
  return (
    <div style={{ ...boardStyle({ padding: 0 }), background: PALETTE.paper }}>
      {/* letterhead itself · US Letter proportions within the artboard */}
      <div style={{ padding: "72px 88px", display: "flex", flexDirection: "column", gap: 56, minHeight: "100%", position: "relative" }}>
        {/* Header */}
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Monogram size={44} />
            <Wordmark size={22} />
          </div>
          <div style={{ textAlign: "right", display: "flex", flexDirection: "column", gap: 2 }}>
            <MetaLabel>memo · 2026.04.24</MetaLabel>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, color: PALETTE.graphite, letterSpacing: "0.04em" }}>ref · ac-0426-01</span>
          </div>
        </header>

        <div style={{ height: 1, background: PALETTE.ink, opacity: 0.9 }} />

        {/* Body */}
        <section style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 560 }}>
          <div style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 28, lineHeight: 1.15, letterSpacing: "-0.02em", color: PALETTE.ink }}>
            A note on the work.
          </div>
          <p style={{ fontFamily: "var(--ac-sans)", fontSize: 13, lineHeight: 1.65, color: PALETTE.graphite, margin: 0 }}>
            Dear <span style={{ color: PALETTE.ink }}>reader</span>,
          </p>
          <p style={{ fontFamily: "var(--ac-sans)", fontSize: 13, lineHeight: 1.65, color: PALETTE.graphite, margin: 0 }}>
            Thank you for taking the time. The pages that follow are meant to be read at whatever pace suits you. There is no urgency built into them, only care.
          </p>
          <p style={{ fontFamily: "var(--ac-sans)", fontSize: 13, lineHeight: 1.65, color: PALETTE.graphite, margin: 0 }}>
            If anything is unclear, the fault is mine, not yours. I would be glad to talk through it.
          </p>
        </section>

        {/* Three-up section keeps the visual rhythm */}
        <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
            { n: "01", t: "Read slowly", d: "Margin notes welcome. The page is meant to be marked up." },
            { n: "02", t: "Sit with it", d: "The first reaction is rarely the most useful one." },
            { n: "03", t: "Then write back", d: "A short reply is more valuable than a long one." },
          ].map((p) => (
            <div key={p.n} style={{ borderTop: `1px solid ${PALETTE.ink}`, paddingTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontFamily: "var(--ac-mono)", fontSize: 11, letterSpacing: "0.08em", color: PALETTE.muted }}>{p.n}</span>
                <span style={{ fontFamily: "var(--ac-sans)", fontSize: 14, fontWeight: 500, color: PALETTE.ink, letterSpacing: "-0.01em" }}>{p.t}</span>
              </div>
              <p style={{ margin: 0, fontFamily: "var(--ac-sans)", fontSize: 12, lineHeight: 1.55, color: PALETTE.graphite }}>{p.d}</p>
            </div>
          ))}
        </section>

        <div style={{ flex: 1 }} />

        {/* Signature */}
        <section style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ fontFamily: "var(--ac-sans)", fontSize: 13, color: PALETTE.graphite }}>With care,</span>
          <span style={{ fontFamily: "var(--ac-sans)", fontSize: 13, color: PALETTE.ink, fontWeight: 500 }}>Alan Chester</span>
        </section>

        {/* Footer */}
        <footer style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, paddingTop: 24, borderTop: `1px solid ${PALETTE.mist}` }}>
          {[
            ["linkedin", "in/amcheste"],
            ["github", "@amcheste"],
            ["location", "raleigh–durham, nc"],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <MetaLabel>{k}</MetaLabel>
              <span style={{ fontFamily: "var(--ac-mono)", fontSize: 12, color: PALETTE.ink, letterSpacing: "-0.01em" }}>{v}</span>
            </div>
          ))}
        </footer>
      </div>
    </div>
  );
}

// ——————————————————————————————————————————————————————————————
// Artboard 6 · LinkedIn banner (1584 × 396)
// ——————————————————————————————————————————————————————————————

// LinkedIn banner · avatar overlaps lower-left on real LinkedIn,
// so keep the left ~280px and bottom ~110px clear of critical content.
function LinkedInBannerBoard() {
  return (
    <div style={{ width: "100%", height: "100%", background: PALETTE.ink, position: "relative", overflow: "hidden" }}>
      {/* faint grid background */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} preserveAspectRatio="none" viewBox="0 0 1584 396">
        <defs>
          <pattern id="lnGrid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1584" height="396" fill="url(#lnGrid)" />
      </svg>

      {/* horizontal accent rule that hints at the system diagram */}
      <div style={{ position: "absolute", left: "44%", right: 64, top: "50%", height: 1, background: "rgba(255,255,255,0.12)" }} />
      <div style={{ position: "absolute", left: "44%", right: 64, top: "50%", height: 1, background: PALETTE.accent, opacity: 0.8, width: 120 }} />

      {/* avatar safe zone indicator · invisible in final, just a reserve */}

      {/* top-left mono meta */}
      <div style={{ position: "absolute", top: 32, left: 56, display: "flex", alignItems: "center", gap: 14 }}>
        <Monogram size={36} variant="outline" />
      </div>

      {/* top-right version tag */}
      <div style={{ position: "absolute", top: 32, right: 56, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 }}>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
          v2026 · rtp · nc
        </span>
      </div>

      {/* HERO · centered vertically, offset right of the avatar safe zone */}
      <div style={{ position: "absolute", left: 320, right: 56, top: 0, bottom: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 12, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
         . ε
        </span>
        <div style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 92, lineHeight: 0.95, letterSpacing: "-0.04em", color: "#FAF8F2", whiteSpace: "nowrap" }}>
          Alan Chester
        </div>
        <div style={{ fontFamily: "var(--ac-sans)", fontWeight: 400, fontSize: 22, lineHeight: 1.3, letterSpacing: "-0.015em", color: "rgba(255,255,255,0.78)", maxWidth: 760 }}>
          Engineer turned product leader.{" "}
          <span style={{ color: PALETTE.accent }}>Cloud, then AI. Same pattern, smaller margin.</span>
        </div>
      </div>

      {/* bottom-right · quiet handle */}
      <div style={{ position: "absolute", right: 56, bottom: 28, display: "flex", alignItems: "center", gap: 18 }}>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
          @amcheste
        </span>
      </div>
    </div>
  );
}

// Alternate · light paper variant with typographic hero + systems diagram
function LinkedInBannerBoardAlt() {
  return (
    <div style={{ width: "100%", height: "100%", background: PALETTE.paper, position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(${PALETTE.mist} 1px, transparent 1px)`,
          backgroundSize: "24px 24px", opacity: 0.9,
        }}
      />

      <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "42%", background: PALETTE.ink, clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)" }}>
        <AgentDiagram />
      </div>

      {/* top-left meta */}
      <div style={{ position: "absolute", top: 28, left: 56, display: "flex", alignItems: "center", gap: 14 }}>
        <Monogram size={36} />
      </div>

      {/* avatar safe zone on left · hero starts at 320px */}
      <div style={{ position: "absolute", left: 320, right: "46%", top: 0, bottom: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 12, letterSpacing: "0.32em", textTransform: "uppercase", color: PALETTE.muted }}>
         . ε
        </span>
        <div style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 76, lineHeight: 0.95, letterSpacing: "-0.04em", color: PALETTE.ink }}>
          Alan Chester
        </div>
      </div>

      <div style={{ position: "absolute", right: 56, bottom: 28, display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: PALETTE.muted }}>
          @amcheste
        </span>
      </div>
    </div>
  );
}

function AgentDiagram() {
  // Quiet abstract · a large ε against a careful grid, with epsilon-delta annotation.
  // No system architecture; no positioning. Just a mathematical mark.
  const stroke = "rgba(255,255,255,0.22)";
  const strokeStrong = "rgba(255,255,255,0.55)";
  const accent = "var(--ac-accent)";
  return (
    <svg viewBox="0 0 600 396" style={{ width: "100%", height: "100%" }} preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="gridlines" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="600" height="396" fill="url(#gridlines)" />

      {/* horizontal centerline */}
      <line x1="100" y1="198" x2="540" y2="198" stroke={stroke} strokeWidth="1" />

      {/* delta tick · small careful interval centered on the line */}
      <g stroke={strokeStrong} strokeWidth="1">
        <line x1="240" y1="190" x2="240" y2="206" />
        <line x1="360" y1="190" x2="360" y2="206" />
      </g>
      <line x1="240" y1="198" x2="360" y2="198" stroke={accent} strokeWidth="2" />
      <text x="300" y="226" textAnchor="middle" fontFamily="var(--ac-mono)" fontSize="11" fill="rgba(255,255,255,0.7)" letterSpacing="0.12em">δ</text>

      {/* the epsilon · quiet, large */}
      <text
        x="460"
        y="248"
        textAnchor="middle"
        fontFamily="var(--ac-sans)"
        fontWeight="300"
        fontSize="156"
        fill="rgba(255,255,255,0.92)"
        letterSpacing="-0.04em"
      >
        ε
      </text>

      {/* tiny axis label */}
      <text x="120" y="190" fontFamily="var(--ac-mono)" fontSize="9" fill="rgba(255,255,255,0.4)" letterSpacing="0.14em">— 0 —</text>

      {/* corner tick */}
      <g fill="rgba(255,255,255,0.35)" fontFamily="var(--ac-mono)" fontSize="9" letterSpacing="0.12em">
        <text x="560" y="370" textAnchor="end">— ε</text>
      </g>
    </svg>
  );
}

// ——————————————————————————————————————————————————————————————
// Glyph study · all monogram options in one view
// ——————————————————————————————————————————————————————————————

function GlyphStudyBoard() {
  const options = [
    { g: "oplus",     name: "direct sum",   note: "composition · unification",     ch: "⊕" },
    { g: "cap",       name: "intersection", note: "where domains meet",            ch: "∩" },
    { g: "mapsto",    name: "maps to",      note: "function · forward-moving",     ch: "↦" },
    { g: "equiv",     name: "equivalence",  note: "identity · three-line form",    ch: "≡" },
    { g: "phi",       name: "phi (golden)", note: "proportion · harmony",          ch: "φ" },
    { g: "epsilon",   name: "epsilon",      note: "small · precise · foundational", ch: "ε" },
    { g: "dot",       name: "mid-dot",      note: "quietest · near-invisible",     ch: "·" },
    { g: "therefore", name: "therefore",    note: "proof shorthand",               ch: "∴" },
    { g: "slash",     name: "slash",        note: "original · typographic",        ch: "/" },
  ];
  return (
    <div style={boardStyle({ padding: 64 })}>
      <TopMeta label="06 · Glyph study" sub="candidate monogram separators" />

      <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
        {options.map((o) => (
          <div key={o.g} style={{ border: `1px solid ${PALETTE.mist}`, padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
            <Monogram size={96} glyph={o.g} />
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontFamily: "var(--ac-mono)", fontSize: 20, color: PALETTE.ink }}>A {o.ch} C</span>
              </div>
              <span style={{ fontFamily: "var(--ac-sans)", fontSize: 13, fontWeight: 500, color: PALETTE.ink }}>{o.name}</span>
              <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, color: PALETTE.muted, letterSpacing: "0.06em" }}>{o.note}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32, padding: 24, background: PALETTE.ink, display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
        <MetaLabel style={{ color: "rgba(255,255,255,0.5)" }}>on ink</MetaLabel>
        {options.map((o) => (
          <Monogram key={o.g} size={56} glyph={o.g} variant="outline" />
        ))}
      </div>

      <BottomGrid />
    </div>
  );
}

function MathMotifsBoard() {
  return (
    <div style={boardStyle({ padding: 64 })}>
      <TopMeta label="05 · Motifs" sub="ε · the margin that matters" />

      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 28 }}>
        {/* Epsilon hero · the brand's signature concept (math) */}
        <div style={{ border: `1px solid ${PALETTE.ink}`, padding: 36, display: "flex", flexDirection: "column", gap: 18, background: PALETTE.paper, gridRow: "span 2" }}>
          <MetaLabel>signature concept · math</MetaLabel>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 96, lineHeight: 0.9, color: PALETTE.accent, letterSpacing: "-0.04em", opacity: 0.7, fontWeight: 300 }}>ε</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontFamily: "var(--ac-sans)", fontSize: 24, fontWeight: 500, color: PALETTE.ink, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                For any ε &gt; 0
              </span>
              <span style={{ fontFamily: "var(--ac-sans)", fontSize: 13, color: PALETTE.graphite, lineHeight: 1.55, maxWidth: 340 }}>
                The mathematician's symbol for an arbitrarily small margin, the threshold the data has to clear.
                A standing invitation to pivot when the evidence asks for it.
              </span>
            </div>
          </div>
          <div style={{ marginTop: 8, paddingTop: 18, borderTop: `1px solid ${PALETTE.mist}`, fontFamily: "var(--ac-mono)", fontSize: 13, lineHeight: 1.7, color: PALETTE.graphite }}>
            ∀ ε &gt; 0, ∃ δ &gt; 0 : |x − a| &lt; δ ⇒ |f(x) − L| &lt; ε<br/>
            <span style={{ color: PALETTE.muted }}>The definition of a limit. Also: how good work feels.</span>
          </div>
        </div>

        {/* Theorem · voice (math + experiment, fused) */}
        <div style={{ border: `1px solid ${PALETTE.mist}`, padding: 28, display: "flex", flexDirection: "column", gap: 10 }}>
          <MetaLabel>theorem · brand voice</MetaLabel>
          <div style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 20, lineHeight: 1.2, letterSpacing: "-0.02em", color: PALETTE.ink }}>
            <span style={{ color: PALETTE.accent, fontFamily: "var(--ac-mono)", marginRight: 8 }}>Thm.</span>
            Innovation is a hypothesis tested, not a guess promoted.
          </div>
          <div style={{ fontFamily: "var(--ac-sans)", fontSize: 12.5, lineHeight: 1.55, color: PALETTE.graphite }}>
            <span style={{ fontFamily: "var(--ac-mono)", color: PALETTE.accent, marginRight: 6 }}>Pf.</span>
            Let belief B exist. Pre-register prediction p. Run smallest decisive trial. Publish result, wins or nulls, so the next experiment starts further along. Shrink ε.
            <span style={{ fontFamily: "var(--ac-mono)", color: PALETTE.accent, marginLeft: 6 }}>∎</span>
          </div>
        </div>

        {/* The mark as a definition · math meets method */}
        <div style={{ border: `1px solid ${PALETTE.mist}`, padding: 28, display: "flex", flexDirection: "column", gap: 12 }}>
          <MetaLabel>the mark · as a definition</MetaLabel>
          <div style={{ fontFamily: "var(--ac-mono)", fontSize: 17, lineHeight: 1.6, color: PALETTE.ink, letterSpacing: "-0.01em" }}>
            ∀ B ∈ beliefs, ∃ test t : <span style={{ color: PALETTE.accent }}>B ⊨ t</span> ∨ <span style={{ color: PALETTE.accent }}>¬B</span>
          </div>
          <div style={{ fontFamily: "var(--ac-mono)", fontSize: 12, lineHeight: 1.7, color: PALETTE.graphite }}>
            for every belief there is a test,<br/>
            the result revises the belief,<br/>
            the notebook stays open. <span style={{ color: PALETTE.accent }}>∎</span>
          </div>
        </div>
      </div>

      <BottomGrid />
    </div>
  );
}

// Compact horizontal "scientific method" strip
function MethodStrip() {
  const steps = [
    { k: "obs",  l: "observe" },
    { k: "hyp",  l: "hypothesize" },
    { k: "test", l: "test" },
    { k: "msr",  l: "measure" },
    { k: "pub",  l: "publish" },
  ];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
      {steps.map((s, i) => (
        <React.Fragment key={s.k}>
          <span style={{
            fontFamily: "var(--ac-mono)", fontSize: 10, letterSpacing: "0.14em",
            textTransform: "uppercase", color: PALETTE.ink,
            border: `1px solid ${PALETTE.ink}`, padding: "5px 9px", whiteSpace: "nowrap"
          }}>
            <span style={{ color: PALETTE.muted, marginRight: 6 }}>0{i + 1}</span>{s.l}
          </span>
          {i < steps.length - 1 && (
            <span style={{ fontFamily: "var(--ac-mono)", color: PALETTE.muted, fontSize: 12 }}>→</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// ——————————————————————————————————————————————————————————————
// Lab Notebook board · the experimental brand artifact
// ——————————————————————————————————————————————————————————————

function LabNotebookBoard() {
  return (
    <div style={boardStyle({ padding: 56 })}>
      <TopMeta label="07 · Lab notebook" sub="open · reproducible · dated" />

      {/* Notebook header */}
      <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "flex-end", paddingBottom: 16, borderBottom: `1px solid ${PALETTE.ink}` }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: PALETTE.muted }}>
            entry · 026 · 2026.04.24 · raleigh
          </span>
          <span style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 28, lineHeight: 1.1, letterSpacing: "-0.02em", color: PALETTE.ink }}>
            Does shorter standup correlate with faster cycle time?
          </span>
        </div>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, letterSpacing: "0.14em", color: PALETTE.muted, textTransform: "uppercase", border: `1px solid ${PALETTE.muted}`, padding: "4px 8px" }}>
          status · running
        </span>
      </div>

      {/* H / M / R columns */}
      <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
        <NotebookCol tag="H" label="hypothesis">
          Reducing standup from 30→10 min won't reduce alignment, and will free ~1.6 dev-hrs/day. Cycle-time median drops ≥ 8%.
        </NotebookCol>
        <NotebookCol tag="M" label="method">
          A/B by squad for 4 sprints. Pre-registered metrics: cycle time, PR review latency, "felt aligned" survey (1–5).
        </NotebookCol>
        <NotebookCol tag="R" label="result · partial">
          n=2 squads · sprint 2/4. Cycle −11%. Alignment −0.2 (n.s.). Continuing to collect. See commit log.
        </NotebookCol>
      </div>

      {/* Commit log */}
      <div style={{ marginTop: 28, border: `1px solid ${PALETTE.mist}`, padding: 20, background: "rgba(0,0,0,0.015)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <MetaLabel>commit log · public</MetaLabel>
          <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, color: PALETTE.muted, letterSpacing: "0.08em" }}>github.com/amcheste/notebook</span>
        </div>
        <div style={{ fontFamily: "var(--ac-mono)", fontSize: 12, lineHeight: 1.85, color: PALETTE.graphite }}>
          <CommitRow sha="a91f3c2" msg="result(s2): cycle −11%, alignment flat. Write up null on review-latency." date="04·24" />
          <CommitRow sha="6b0d711" msg="method: pre-register survey question wording" date="04·19" />
          <CommitRow sha="2e84a90" msg="hyp: shorter standup ⇒ ≥8% cycle-time drop" date="04·12" />
          <CommitRow sha="0ff1ce0" msg="obs: 4 of 6 squads run >25min standups" date="04·08" />
        </div>
      </div>

      {/* Footer principles */}
      <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {[
          ["pre-register", "predict before you measure"],
          ["publish nulls", "the failed test is data"],
          ["open source", "default permissive. MIT / CC-BY"],
        ].map(([t, d]) => (
          <div key={t} style={{ borderTop: `1px solid ${PALETTE.ink}`, paddingTop: 10 }}>
            <span style={{ fontFamily: "var(--ac-sans)", fontSize: 13, fontWeight: 500, color: PALETTE.ink, letterSpacing: "-0.01em" }}>{t}</span>
            <div style={{ fontFamily: "var(--ac-sans)", fontSize: 11.5, color: PALETTE.graphite, marginTop: 2 }}>{d}</div>
          </div>
        ))}
      </div>

      <BottomGrid />
    </div>
  );
}

function NotebookCol({ tag, label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 22, fontWeight: 500, color: PALETTE.accent, letterSpacing: "-0.02em" }}>{tag}.</span>
        <MetaLabel>{label}</MetaLabel>
      </div>
      <p style={{ margin: 0, fontFamily: "var(--ac-sans)", fontSize: 13, lineHeight: 1.55, color: PALETTE.graphite }}>{children}</p>
    </div>
  );
}

function CommitRow({ sha, msg, date }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "76px 1fr 50px", gap: 14, alignItems: "baseline" }}>
      <span style={{ color: PALETTE.muted }}>{sha}</span>
      <span>{msg}</span>
      <span style={{ color: PALETTE.muted, textAlign: "right" }}>{date}</span>
    </div>
  );
}

// ——————————————————————————————————————————————————————————————
// Open Science board · manifesto + license posture
// ——————————————————————————————————————————————————————————————

function OpenScienceBoard() {
  return (
    <div style={boardStyle({ padding: 56 })}>
      <TopMeta label="08 · Open by default" sub="open science · open source · open notebook" />

      <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32 }}>
        {/* Manifesto */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 44, lineHeight: 1.02, letterSpacing: "-0.03em", color: PALETTE.ink }}>
            Knowledge that isn't shared<br/>
            isn't <span style={{ color: PALETTE.accent }}>knowledge</span>. It's inventory.
          </span>
          <p style={{ margin: 0, fontFamily: "var(--ac-sans)", fontSize: 14, lineHeight: 1.6, color: PALETTE.graphite, maxWidth: 540 }}>
            The fastest path to a better answer is more people testing it.
            I work in the open whenever I can. Code, methods, data, the messy version-history
            that shows how a result actually got built. The point isn't transparency for its own sake;
            it's compounding. Open work gets cited, corrected, and extended. Closed work gets repeated.
          </p>

          <div style={{ marginTop: 4, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["MIT", "Apache-2.0", "CC-BY-4.0", "CC0", "pre-register", "publish-nulls", "fork-friendly"].map((t) => (
              <span key={t} style={{
                fontFamily: "var(--ac-mono)", fontSize: 11, letterSpacing: "0.06em",
                color: PALETTE.ink, border: `1px solid ${PALETTE.ink}`, padding: "4px 10px"
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* The four openings */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0, border: `1px solid ${PALETTE.mist}` }}>
          {[
            { k: "{ }",  t: "open source",   d: "default permissive · ship the code." },
            { k: "lab",  t: "open method",   d: "the recipe travels with the result." },
            { k: "csv",  t: "open data",     d: "raw numbers, not just charts." },
            { k: "log",  t: "open notebook", d: "the dead ends are part of the work." },
          ].map((row, i, arr) => (
            <div key={row.t} style={{
              display: "grid", gridTemplateColumns: "60px 1fr", padding: "18px 20px",
              borderBottom: i < arr.length - 1 ? `1px solid ${PALETTE.mist}` : "none",
              alignItems: "center", gap: 16,
            }}>
              <span style={{ fontFamily: "var(--ac-mono)", fontSize: 16, color: PALETTE.accent, letterSpacing: "-0.02em" }}>{row.k}</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span style={{ fontFamily: "var(--ac-sans)", fontSize: 14, fontWeight: 500, color: PALETTE.ink, letterSpacing: "-0.01em" }}>{row.t}</span>
                <span style={{ fontFamily: "var(--ac-sans)", fontSize: 12, color: PALETTE.graphite, lineHeight: 1.5 }}>{row.d}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Method strip across full width */}
      <div style={{ marginTop: 32, paddingTop: 22, borderTop: `1px solid ${PALETTE.ink}`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <MetaLabel>the method</MetaLabel>
        <MethodStrip />
      </div>

      <BottomGrid />
    </div>
  );
}

function LatticeSVG() {
  const accent = "var(--ac-accent)";
  const ink = "var(--ac-ink)";
  const muted = "var(--ac-muted)";
  const nodes = [
    { id: "top", x: 200, y: 30, label: "ε" },
    { id: "a", x: 80, y: 130, label: "care" },
    { id: "b", x: 200, y: 130, label: "craft" },
    { id: "c", x: 320, y: 130, label: "clarity" },
    { id: "bot", x: 200, y: 230, label: "δ" },
  ];
  const edges = [["top","a"],["top","b"],["top","c"],["a","bot"],["b","bot"],["c","bot"]];
  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
  return (
    <svg viewBox="0 0 400 260" style={{ width: "100%", height: 260 }}>
      {edges.map(([a,b], i) => (
        <line key={i} x1={byId[a].x} y1={byId[a].y} x2={byId[b].x} y2={byId[b].y} stroke={muted} strokeWidth="1" />
      ))}
      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="5" fill={n.id === "top" || n.id === "bot" ? accent : ink} />
          <text x={n.x} y={n.y - 12} textAnchor="middle" fontFamily="var(--ac-mono)" fontSize="10" fill={ink} letterSpacing="0.08em">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ——————————————————————————————————————————————————————————————
// Artboard 7 · Style guide card (single summary)
// ——————————————————————————————————————————————————————————————

function StyleGuideCard({ swatches }) {
  return (
    <div style={{ ...boardStyle({ padding: 56 }), background: PALETTE.paper }}>
      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingBottom: 32, borderBottom: `1px solid ${PALETTE.ink}` }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <MetaLabel>brand · identity card · v2026.05</MetaLabel>
          <Wordmark size={48} />
        </div>
        <Monogram size={56} />
      </header>

      <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
        {/* LEFT · logo usage */}
        <section style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <SectionHeader n="A" title="Logo system" />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <SGRow label="primary">
              <Wordmark size={28} />
            </SGRow>
            <SGRow label="mark">
              <div style={{ display: "flex", gap: 10 }}>
                <Monogram size={36} />
                <Monogram size={36} variant="outline" />
                <Monogram size={36} variant="accent" />
              </div>
            </SGRow>
            <SGRow label="lockup">
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Monogram size={30} />
                <Wordmark size={20} />
              </div>
            </SGRow>
            <SGRow label="clearspace">
              <ClearspaceViz />
            </SGRow>
          </div>

          <div style={{ marginTop: 12 }}>
            <SectionHeader n="B" title="Typography" />
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontFamily: "var(--ac-sans)", fontSize: 32, fontWeight: 500, letterSpacing: "-0.03em", color: PALETTE.ink, lineHeight: 1 }}>
                Display. var(--ac-sans)
              </div>
              <div style={{ fontFamily: "var(--ac-sans)", fontSize: 14, color: PALETTE.graphite, lineHeight: 1.5 }}>
                Body. var(--ac-sans) · 400. used for long-form copy, proposals, and correspondence.
              </div>
              <div style={{ fontFamily: "var(--ac-mono)", fontSize: 12, color: PALETTE.ink, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                mono. var(--ac-mono) · labels · metadata
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT · palette + application */}
        <section style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <SectionHeader n="C" title="Palette" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }}>
            {swatches.map((s) => (
              <div key={s.name} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ aspectRatio: "1", background: s.value, border: s.name === "paper" ? `1px solid ${PALETTE.mist}` : "none" }} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: "var(--ac-sans)", fontSize: 10, fontWeight: 500, color: PALETTE.ink }}>{s.name}</span>
                  <span style={{ fontFamily: "var(--ac-mono)", fontSize: 8, color: PALETTE.muted, letterSpacing: "0.06em" }}>{s.value}</span>
                </div>
              </div>
            ))}
          </div>

          <SectionHeader n="D" title="Voice" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["precise", "minimal", "technical", "credible", "forward-thinking"].map((t) => (
              <span key={t} style={{ fontFamily: "var(--ac-mono)", fontSize: 11, letterSpacing: "0.06em", color: PALETTE.ink, border: `1px solid ${PALETTE.ink}`, padding: "4px 10px" }}>
                {t}
              </span>
            ))}
          </div>

          <SectionHeader n="E" title="Applications" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <MiniApp label="linkedin · avatar">
              <div style={{ width: "100%", aspectRatio: "1", background: PALETTE.ink, display: "grid", placeItems: "center" }}>
                <Monogram size={64} variant="outline" />
              </div>
            </MiniApp>
            <MiniApp label="github · card">
              <div style={{ width: "100%", aspectRatio: "1", background: PALETTE.paper, border: `1px solid ${PALETTE.mist}`, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 12 }}>
                <Monogram size={28} />
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <span style={{ fontFamily: "var(--ac-sans)", fontSize: 11, fontWeight: 500, color: PALETTE.ink }}>amcheste</span>
                  <span style={{ fontFamily: "var(--ac-mono)", fontSize: 8, color: PALETTE.muted, letterSpacing: "0.06em" }}>48 repos</span>
                </div>
              </div>
            </MiniApp>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={{ marginTop: 32, paddingTop: 20, borderTop: `1px solid ${PALETTE.mist}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, color: PALETTE.muted, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          alan chester · personal mark
        </span>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, color: PALETTE.muted, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          rev · 01
        </span>
      </footer>
    </div>
  );
}

function SectionHeader({ n, title }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ fontFamily: "var(--ac-mono)", fontSize: 11, color: PALETTE.muted, letterSpacing: "0.08em" }}>{n}</span>
      <span style={{ fontFamily: "var(--ac-sans)", fontSize: 14, fontWeight: 500, color: PALETTE.ink, letterSpacing: "-0.01em" }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: PALETTE.mist }} />
    </div>
  );
}

function SGRow({ label, children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "90px 1fr", alignItems: "center", gap: 16 }}>
      <MetaLabel>{label}</MetaLabel>
      <div>{children}</div>
    </div>
  );
}

function MiniApp({ label, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {children}
      <MetaLabel>{label}</MetaLabel>
    </div>
  );
}

function ClearspaceViz() {
  return (
    <div style={{ position: "relative", display: "inline-block", padding: 16 }}>
      {/* dashed clearspace box */}
      <div style={{ position: "absolute", inset: 0, border: `1px dashed ${PALETTE.accent}` }} />
      <div style={{ position: "relative", padding: 12, background: PALETTE.paper }}>
        <Monogram size={28} />
      </div>
    </div>
  );
}

// ——————————————————————————————————————————————————————————————
// Shared board helpers
// ——————————————————————————————————————————————————————————————

function boardStyle({ padding = 64 }) {
  return {
    width: "100%",
    height: "100%",
    background: PALETTE.paper,
    padding,
    boxSizing: "border-box",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  };
}

function TopMeta({ label, sub }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <MetaLabel>{label}</MetaLabel>
        {sub && <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, color: PALETTE.muted, letterSpacing: "0.06em" }}>{sub}</span>}
      </div>
      <Monogram size={32} />
    </div>
  );
}

function BottomGrid() {
  return (
    <div style={{ position: "absolute", bottom: 32, left: 64, right: 64, display: "flex", justifyContent: "space-between", alignItems: "center", pointerEvents: "none" }}>
      <span style={{ fontFamily: "var(--ac-mono)", fontSize: 9, color: PALETTE.muted, letterSpacing: "0.14em", textTransform: "uppercase" }}>
        alan chester · personal brand
      </span>
      <span style={{ fontFamily: "var(--ac-mono)", fontSize: 9, color: PALETTE.muted, letterSpacing: "0.14em" }}>
        2026.05 / (ε, δ)
      </span>
    </div>
  );
}

Object.assign(window, {
  Wordmark, Monogram, WordmarkBoard, MonogramBoard, PaletteBoard, TypographyBoard,
  LetterheadBoard, LinkedInBannerBoard, LinkedInBannerBoardAlt, GlyphStudyBoard, MathMotifsBoard, StyleGuideCard,
  LabNotebookBoard, OpenScienceBoard, MethodStrip,
});

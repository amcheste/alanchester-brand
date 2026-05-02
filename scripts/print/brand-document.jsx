// Alan Chester — Brand Document
// A formal, print-ready brand book. Pulls components from brand.jsx (loaded first).

const BD_PALETTE = {
  ink: "var(--ac-ink)",
  graphite: "var(--ac-graphite)",
  mist: "var(--ac-mist)",
  paper: "var(--ac-paper)",
  accent: "var(--ac-accent)",
  muted: "var(--ac-muted)",
};

// ─────────────────────────────────────────────────────────────
// Page chrome
// ─────────────────────────────────────────────────────────────

function Page({ n, total, title, children, dark = false }) {
  const bg = dark ? BD_PALETTE.ink : BD_PALETTE.paper;
  const fg = dark ? "#FAF8F2" : BD_PALETTE.ink;
  const sub = dark ? "rgba(255,255,255,0.45)" : BD_PALETTE.muted;
  return (
    <div style={{
      width: 816, height: 1056, background: bg, color: fg,
      position: "relative", padding: "72px 88px 64px",
      display: "flex", flexDirection: "column", boxSizing: "border-box",
      fontFamily: "var(--ac-sans)",
    }}>
      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 14, borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.18)" : BD_PALETTE.ink}`, gap: 24 }}>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: sub, whiteSpace: "nowrap" }}>
          alan chester · brand document · (ε, δ)
        </span>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: sub, whiteSpace: "nowrap" }}>
          {title}
        </span>
      </header>

      <div style={{ flex: 1, paddingTop: 32, display: "flex", flexDirection: "column" }}>
        {children}
      </div>

      <footer style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: `1px solid ${dark ? "rgba(255,255,255,0.12)" : BD_PALETTE.mist}` }}>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, color: sub, letterSpacing: "0.14em", textTransform: "uppercase" }}>
          v2026.04 · rev 01
        </span>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, color: sub, letterSpacing: "0.18em" }}>
          {String(n).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </footer>
    </div>
  );
}

function H1({ children, accent }) {
  return (
    <h1 style={{
      fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 56,
      lineHeight: 1.02, letterSpacing: "-0.035em", margin: "0 0 20px",
      color: BD_PALETTE.ink,
    }}>
      {children}
    </h1>
  );
}
function H2({ children, dark = false }) {
  return (
    <h2 style={{
      fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 22,
      lineHeight: 1.15, letterSpacing: "-0.02em", margin: "0 0 12px",
      color: dark ? "#FAF8F2" : BD_PALETTE.ink,
    }}>
      {children}
    </h2>
  );
}
function P({ children, dark = false, size = 13.5, max = 560 }) {
  return (
    <p style={{
      margin: "0 0 12px",
      fontFamily: "var(--ac-sans)", fontSize: size, lineHeight: 1.65,
      color: dark ? "rgba(255,255,255,0.75)" : BD_PALETTE.graphite,
      maxWidth: max,
    }}>
      {children}
    </p>
  );
}
function Eyebrow({ children, dark = false, accent = false }) {
  return (
    <span style={{
      fontFamily: "var(--ac-mono)", fontSize: 10,
      letterSpacing: "0.18em", textTransform: "uppercase",
      color: accent ? BD_PALETTE.accent : (dark ? "rgba(255,255,255,0.55)" : BD_PALETTE.muted),
    }}>
      {children}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// 01 — Cover
// ─────────────────────────────────────────────────────────────

function PageCover({ n, total }) {
  return (
    <Page n={n} total={total} title="cover" dark>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: 24 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <Eyebrow dark>brand · identity · voice · 2026.04</Eyebrow>
          <Monogram size={88} variant="outline" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 84, lineHeight: 0.96, letterSpacing: "-0.04em", color: "#FAF8F2" }}>
            Alan Chester<br/>
            Personal Brand
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 8 }}>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 22, color: BD_PALETTE.accent, letterSpacing: "-0.02em" }}>
              ∀ ε &gt; 0, ∃ δ &gt; 0
            </span>
            <span style={{ width: 32, height: 1, background: "rgba(255,255,255,0.35)" }} />
            <span style={{ fontFamily: "var(--ac-sans)", fontSize: 16, color: "rgba(255,255,255,0.75)", letterSpacing: "-0.01em" }}>
              For any ε &gt; 0, there exists a δ &gt; 0.
            </span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          {[
            ["prepared by", "Alan Chester"],
            ["edition", "v2026.04 · rev 01"],
            ["scope", "personal · public-facing"],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Eyebrow dark>{k}</Eyebrow>
              <span style={{ fontFamily: "var(--ac-mono)", fontSize: 12, color: "#FAF8F2", letterSpacing: "0" }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}

// ─────────────────────────────────────────────────────────────
// 02 — Contents
// ─────────────────────────────────────────────────────────────

function PageContents({ n, total, items }) {
  return (
    <Page n={n} total={total} title="contents">
      <Eyebrow>contents</Eyebrow>
      <div style={{ marginTop: 8 }}><H1>What's inside.</H1></div>
      <P max={520}>
        A short brand document. The system before the work.
      </P>

      <div style={{ marginTop: 32, display: "flex", flexDirection: "column" }}>
        {items.map((it, i) => (
          <div key={it.title} style={{
            display: "grid", gridTemplateColumns: "60px 1fr 80px",
            alignItems: "baseline", gap: 16, padding: "9px 0",
            borderTop: i === 0 ? `1px solid ${BD_PALETTE.ink}` : `1px solid ${BD_PALETTE.mist}`,
          }}>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 11, color: BD_PALETTE.muted, letterSpacing: "0.12em" }}>
              {String(it.page).padStart(2, "0")}
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontFamily: "var(--ac-sans)", fontSize: 17, fontWeight: 500, color: BD_PALETTE.ink, letterSpacing: "-0.01em" }}>
                {it.title}
              </span>
              <span style={{ fontFamily: "var(--ac-sans)", fontSize: 12.5, color: BD_PALETTE.graphite }}>
                {it.sub}
              </span>
            </div>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, color: BD_PALETTE.muted, letterSpacing: "0.1em", textAlign: "right", textTransform: "uppercase" }}>
              p. {String(it.page).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </Page>
  );
}

// ─────────────────────────────────────────────────────────────
// 03 — Philosophy / Tagline
// ─────────────────────────────────────────────────────────────

function PagePhilosophy({ n, total }) {
  return (
    <Page n={n} total={total} title="03 · philosophy">
      <Eyebrow>03 · philosophy</Eyebrow>
      <div style={{ marginTop: 8 }}><H1>For any ε &gt; 0,<br/>there exists a δ &gt; 0.</H1></div>

      <P>
        The line is the formal definition of a limit, in seven characters.
        ε is the goal, the standard, the outcome the work has to clear.
        δ is the small enough step that lands inside it.
        The promise of the equation is that no matter how tight ε gets, a δ <em>exists</em>. The work is finding it, one increment at a time.
      </P>

      <P>
        Meaningful change is reachable through deliberate, sufficiently small increments. Not by leaps.
        This is the mathematics of compounding, of Bayesian updating, of gradient descent,
        and of Buffett's investing discipline. Bring me a goal, bring me numbers,
        and I will find the smallest step that closes the gap.
      </P>

      <div style={{ marginTop: 16, padding: "20px 24px", border: `1px solid ${BD_PALETTE.ink}`, background: "rgba(0,0,0,0.015)" }}>
        <Eyebrow>the limit, formally</Eyebrow>
        <div style={{ marginTop: 10, fontFamily: "var(--ac-mono)", fontSize: 15, lineHeight: 1.7, color: BD_PALETTE.ink, letterSpacing: "-0.005em" }}>
          ∀ ε &gt; 0, ∃ δ &gt; 0 : |x − a| &lt; δ ⇒ |f(x) − L| &lt; ε
        </div>
        <div style={{ marginTop: 8, fontFamily: "var(--ac-sans)", fontSize: 12.5, color: BD_PALETTE.graphite, lineHeight: 1.55 }}>
          Cauchy / Weierstrass, 1820s. The discipline that turned calculus from intuition into proof.
        </div>
      </div>

      <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <PrincipleCard
          tag="ε"
          title="The goal the work has to clear"
          body="ε is the threshold. Define it before the work, not after. Numerically, where you can."
        />
        <PrincipleCard
          tag="δ"
          title="The smallest step that reaches it"
          body="δ is the deliberate move that closes the gap. Small. Data-informed. The data names it; intuition rarely does."
        />
        <PrincipleCard
          tag="∃"
          title="There exists"
          body="The promise. A δ is out there. Stay open to the increment that finds it."
        />
        <PrincipleCard
          tag="∀"
          title="For any ε"
          body="Whatever standard you're held to. Tighten ε and the search begins again."
        />
      </div>
    </Page>
  );
}

function PrincipleCard({ tag, title, body }) {
  return (
    <div style={{ border: `1px solid ${BD_PALETTE.mist}`, padding: 18, display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{ fontFamily: "var(--ac-mono)", fontSize: 28, color: BD_PALETTE.accent, letterSpacing: "-0.02em", lineHeight: 1, fontWeight: 300 }}>{tag}</span>
      <span style={{ fontFamily: "var(--ac-sans)", fontSize: 14, fontWeight: 500, color: BD_PALETTE.ink, letterSpacing: "-0.01em" }}>{title}</span>
      <span style={{ fontFamily: "var(--ac-sans)", fontSize: 12.5, color: BD_PALETTE.graphite, lineHeight: 1.55 }}>{body}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 04 — How I work
// ─────────────────────────────────────────────────────────────

function PageMethod({ n, total }) {
  return (
    <Page n={n} total={total} title="04 · method">
      <Eyebrow>04 · how I work</Eyebrow>
      <div style={{ marginTop: 8 }}><H1>Three beats.<br/>Always the same shape.</H1></div>

      <P>
        Every long-form piece, every recommendation, every decision follows
        the same three-beat structure. State the ε. Identify the δ. Show the data.
        The pattern does not need to be labeled. It needs to be felt.
      </P>
      <P>
        Open by default. The notebook is shareable. The code is permissively licensed.
        The method travels with the result.
      </P>

      <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        {[
          { tag: "01", label: "state the ε", body: "The goal, the tolerance, the desired outcome. Numerical where it can be." },
          { tag: "02", label: "identify the δ", body: "The smallest deliberate move that closes the gap." },
          { tag: "03", label: "show the data", body: "The evidence that informed the choice. Wins and nulls alike." },
        ].map((s) => (
          <div key={s.tag} style={{ border: `1px solid ${BD_PALETTE.mist}`, padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 11, letterSpacing: "0.18em", color: BD_PALETTE.accent }}>{s.tag}</span>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 12, color: BD_PALETTE.ink, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              {s.label}
            </span>
            <span style={{ fontFamily: "var(--ac-sans)", fontSize: 12.5, lineHeight: 1.55, color: BD_PALETTE.graphite }}>{s.body}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div style={{ border: `1px solid ${BD_PALETTE.mist}`, padding: 20, display: "flex", flexDirection: "column", gap: 8 }}>
          <Eyebrow>theorem · brand voice</Eyebrow>
          <div style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 18, lineHeight: 1.2, letterSpacing: "-0.02em", color: BD_PALETTE.ink }}>
            <span style={{ color: BD_PALETTE.accent, fontFamily: "var(--ac-mono)", marginRight: 8 }}>Thm.</span>
            Meaningful change is reachable in small enough increments.
          </div>
          <div style={{ fontFamily: "var(--ac-sans)", fontSize: 12.5, lineHeight: 1.55, color: BD_PALETTE.graphite }}>
            <span style={{ fontFamily: "var(--ac-mono)", color: BD_PALETTE.accent, marginRight: 6 }}>Pf.</span>
            Pre-register the goal. Find the smallest decisive move. Publish the result, including the null. Tighten ε. Repeat.
            <span style={{ fontFamily: "var(--ac-mono)", color: BD_PALETTE.accent, marginLeft: 6 }}>∎</span>
          </div>
        </div>

        <div style={{ border: `1px solid ${BD_PALETTE.mist}`, padding: 20, display: "flex", flexDirection: "column", gap: 8 }}>
          <Eyebrow>open · by default</Eyebrow>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--ac-sans)", fontSize: 13, color: BD_PALETTE.graphite, lineHeight: 1.55 }}>
            <Bullet>open source. default permissive (MIT / Apache-2.0)</Bullet>
            <Bullet>open method. the recipe travels with the result</Bullet>
            <Bullet>open data. raw numbers, not just charts</Bullet>
            <Bullet>open notebook. the dead ends are part of the work</Bullet>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 24, padding: "20px 24px", background: BD_PALETTE.ink, color: "#FAF8F2" }}>
        <Eyebrow dark>extension</Eyebrow>
        <div style={{ marginTop: 10, fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 22, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#FAF8F2" }}>
          For any ε &gt; 0, there exists a δ &gt; 0.<br/>
          <span style={{ color: BD_PALETTE.accent }}>Find the δ.</span>
        </div>
        <div style={{ marginTop: 8, fontFamily: "var(--ac-mono)", fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>
          the math is the system. extend it where the work calls for it.
        </div>
      </div>
    </Page>
  );
}

function Bullet({ children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 6, alignItems: "baseline" }}>
      <span style={{ fontFamily: "var(--ac-mono)", color: BD_PALETTE.accent, fontSize: 12 }}>·</span>
      <span>{children}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 05 — Identity (logo + monogram)
// ─────────────────────────────────────────────────────────────

function PageIdentity({ n, total }) {
  return (
    <Page n={n} total={total} title="10 · identity">
      <Eyebrow>10 · identity</Eyebrow>
      <div style={{ marginTop: 8 }}><H1>The mark.</H1></div>
      <P max={540}>
        A wordmark and a monogram, both built from the same family. One for full
        attribution. One for compressed spaces. The ε between A and C is a quiet
        reminder of the source.
      </P>

      <div style={{ marginTop: 24, padding: 28, background: BD_PALETTE.paper, border: `1px solid ${BD_PALETTE.mist}` }}>
        <Eyebrow>primary wordmark</Eyebrow>
        <div style={{ marginTop: 16 }}><Wordmark size={64} /></div>
      </div>

      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div style={{ padding: 24, background: BD_PALETTE.paper, border: `1px solid ${BD_PALETTE.mist}` }}>
          <Eyebrow>horizontal lockup</Eyebrow>
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 14 }}>
            <Monogram size={44} />
            <div style={{ width: 1, height: 36, background: BD_PALETTE.mist }} />
            <Wordmark size={26} />
          </div>
        </div>
        <div style={{ padding: 24, background: BD_PALETTE.ink }}>
          <Eyebrow dark>inverse</Eyebrow>
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 14 }}>
            <Monogram size={44} variant="outline" />
            <Wordmark size={26} color="#FAF8F2" />
          </div>
        </div>
      </div>

      <div style={{ marginTop: 16, padding: 24, background: BD_PALETTE.paper, border: `1px solid ${BD_PALETTE.mist}` }}>
        <Eyebrow>monogram · scale</Eyebrow>
        <div style={{ marginTop: 16, display: "flex", gap: 18, alignItems: "flex-end" }}>
          <Monogram size={88} />
          <Monogram size={56} />
          <Monogram size={36} />
          <Monogram size={24} />
          <div style={{ width: 1, height: 56, background: BD_PALETTE.mist }} />
          <Monogram size={56} variant="outline" />
          <Monogram size={56} variant="accent" />
        </div>
      </div>

      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        <DoDont kind="do" text="Pair wordmark with monogram on a single horizontal axis." />
        <DoDont kind="do" text="Hold ε's quiet weight. It should read once, then recede." />
        <DoDont kind="dont" text="Recolor the ε. The accent is reserved for system marks only." />
      </div>
    </Page>
  );
}

function DoDont({ kind, text }) {
  const isDo = kind === "do";
  return (
    <div style={{ border: `1px solid ${isDo ? BD_PALETTE.ink : BD_PALETTE.mist}`, padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
      <span style={{
        fontFamily: "var(--ac-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase",
        color: isDo ? BD_PALETTE.accent : BD_PALETTE.muted,
      }}>
        {isDo ? "do" : "don't"}
      </span>
      <span style={{ fontFamily: "var(--ac-sans)", fontSize: 12.5, color: BD_PALETTE.ink, lineHeight: 1.5 }}>{text}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 06 — Color & type
// ─────────────────────────────────────────────────────────────

function PageColorType({ n, total, swatches }) {
  return (
    <Page n={n} total={total} title="11 · color · type">
      <Eyebrow>11 · color & type</Eyebrow>
      <div style={{ marginTop: 8 }}><H1>The system.</H1></div>
      <P max={540}>
        Deep neutrals, a single accent, an off-white. One sans for body, one mono for
        labels and metadata. Restraint is the strategy. The accent works because nothing
        else competes for attention.
      </P>

      <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10 }}>
        {swatches.map((s) => (
          <div key={s.name} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ aspectRatio: "1 / 1.15", background: s.value, border: s.name === "paper" ? `1px solid ${BD_PALETTE.mist}` : "none" }} />
            <span style={{ fontFamily: "var(--ac-sans)", fontSize: 11, fontWeight: 500, color: BD_PALETTE.ink }}>{s.name}</span>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 9, color: BD_PALETTE.muted, letterSpacing: "0.08em" }}>{s.value}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div style={{ padding: 20, border: `1px solid ${BD_PALETTE.mist}` }}>
          <Eyebrow>display · sans</Eyebrow>
          <div style={{ marginTop: 14, fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 44, lineHeight: 1, letterSpacing: "-0.04em", color: BD_PALETTE.ink }}>
            For any ε &gt; 0
          </div>
          <div style={{ marginTop: 14, fontFamily: "var(--ac-sans)", fontSize: 12.5, color: BD_PALETTE.graphite, lineHeight: 1.5 }}>
            Body text. Used for proposals, correspondence, considered notes.
          </div>
          <div style={{ marginTop: 12, fontFamily: "var(--ac-mono)", fontSize: 10, color: BD_PALETTE.muted, letterSpacing: "0.06em" }}>
            var(--ac-sans) · 500 / 400
          </div>
        </div>
        <div style={{ padding: 20, border: `1px solid ${BD_PALETTE.mist}` }}>
          <Eyebrow>label · mono</Eyebrow>
          <div style={{ marginTop: 14, fontFamily: "var(--ac-mono)", fontSize: 22, color: BD_PALETTE.ink, letterSpacing: "-0.005em", lineHeight: 1.2 }}>
            ∀ ε &gt; 0, ∃ δ &gt; 0
          </div>
          <div style={{ marginTop: 14, fontFamily: "var(--ac-mono)", fontSize: 12, color: BD_PALETTE.ink, letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1.5 }}>
            v2026.04 · ref ac-0426
          </div>
          <div style={{ marginTop: 12, fontFamily: "var(--ac-mono)", fontSize: 10, color: BD_PALETTE.muted, letterSpacing: "0.06em" }}>
            var(--ac-mono) · labels · math
          </div>
        </div>
      </div>

      <div style={{ marginTop: 20, padding: 20, border: `1px solid ${BD_PALETTE.ink}` }}>
        <Eyebrow>tone</Eyebrow>
        <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["precise", "minimal", "credible", "experimental", "open", "rigorous", "unhurried"].map((t) => (
            <span key={t} style={{ fontFamily: "var(--ac-mono)", fontSize: 11, letterSpacing: "0.06em", color: BD_PALETTE.ink, border: `1px solid ${BD_PALETTE.ink}`, padding: "4px 10px" }}>{t}</span>
          ))}
        </div>
      </div>
    </Page>
  );
}

// ─────────────────────────────────────────────────────────────
// 05 — Lenses (convergence: CS ∩ Math ∩ Security ∩ MBA)
// ─────────────────────────────────────────────────────────────

function PageLenses({ n, total }) {
  const lenses = [
    { tag: "CS",       title: "Architecture",     body: "Computer Science taught me how production systems are designed. Where the load lives. What breaks at scale.", accent: false },
    { tag: "Math",     title: "Under the hood",   body: "Applied Math lets me read the model, not just call it. Gradients, distributions, error bounds. The things that make AI behave the way it does.", accent: true },
    { tag: "Security", title: "What others miss", body: "A security background trains you to look for the failure modes nobody planned for. The risks others gloss over are usually where the real cost lives.", accent: false },
    { tag: "MBA",      title: "Prove the ROI",    body: "The finance lens turns conviction into evidence. Not 'this should pay off.' Instead: 'here is the discount rate, here is the payback period, here is the null.'", accent: false },
  ];
  return (
    <Page n={n} total={total} title="05 · lenses">
      <Eyebrow>05 · lenses</Eyebrow>
      <div style={{ marginTop: 8 }}><H1>Four lenses,<br/>one focal point.</H1></div>
      <P max={560}>
        Every field of training contributes a different kind of sight. Stacked,
        they converge on the same target. The δ that the data reveals. The work is the intersection.
      </P>

      {/* Diagram: four overlapping circles converging on (ε, δ) */}
      <div style={{ marginTop: 18, padding: "20px 24px 28px", border: `1px solid ${BD_PALETTE.mist}`, position: "relative" }}>
        <Eyebrow>diagram · ∩</Eyebrow>
        <div style={{ marginTop: 12, display: "flex", justifyContent: "center" }}>
          <svg width="560" height="320" viewBox="0 0 560 320" style={{ display: "block", overflow: "visible" }}>
            {/* Four overlapping circles — pushed down to leave room for labels above */}
            {[
              { cx: 200, cy: 150, label: "CS",       tickX: 200, labelX: 200, labelY: 50, anchor: "middle" },
              { cx: 260, cy: 150, label: "Math",     tickX: 260, labelX: 260, labelY: 36, anchor: "middle" },
              { cx: 300, cy: 150, label: "Security", tickX: 300, labelX: 300, labelY: 22, anchor: "middle" },
              { cx: 360, cy: 150, label: "MBA",      tickX: 360, labelX: 360, labelY: 50, anchor: "middle" },
            ].map((c, i) => (
              <g key={i}>
                <circle cx={c.cx} cy={c.cy} r="80" fill="none" stroke="var(--ac-ink)" strokeWidth="1" opacity="0.42" />
              </g>
            ))}
            {/* Labels with tick connectors — drawn AFTER circles so they sit on top */}
            {[
              { label: "CS",       tickX: 165, labelX: 165, labelY: 60, topY: 70  },
              { label: "Math",     tickX: 245, labelX: 245, labelY: 44, topY: 70  },
              { label: "Security", tickX: 315, labelX: 315, labelY: 44, topY: 70  },
              { label: "MBA",      tickX: 395, labelX: 395, labelY: 60, topY: 70  },
            ].map((c, i) => {
              // Each circle has cx at 200/260/300/360, all r=80, all cy=150
              // Top of each circle = cy - r = 70
              const circleTopY = 70;
              const tickStartY = c.labelY + 6;
              return (
                <g key={i}>
                  <line x1={c.tickX} y1={tickStartY} x2={c.tickX} y2={circleTopY} stroke="var(--ac-muted)" strokeWidth="1" opacity="0.5" />
                  <text x={c.labelX} y={c.labelY} fontFamily="var(--ac-mono)" fontSize="11" letterSpacing="0.18em" fill="var(--ac-ink)" textAnchor="middle" style={{ textTransform: "uppercase" }}>
                    {c.label.toUpperCase()}
                  </text>
                </g>
              );
            })}
            {/* Convergence dot — the visual center where all four circles meet, INSIDE the circles */}
            <circle cx="280" cy="150" r="3.5" fill="var(--ac-accent)" />
            {/* Connector from convergence dot down to the focal label, BELOW all circles */}
            <line x1="280" y1="232" x2="280" y2="262" stroke="var(--ac-accent)" strokeWidth="1" opacity="0.5" />
            {/* Focal point — moved BELOW the circles so the rule lines don't cut through it */}
            <text x="280" y="282" fontFamily="var(--ac-mono)" fontSize="20" fontWeight="500" fill="var(--ac-accent)" textAnchor="middle" letterSpacing="-0.01em">
              (ε, δ)
            </text>
            <text x="280" y="302" fontFamily="var(--ac-mono)" fontSize="9" letterSpacing="0.18em" fill="var(--ac-muted)" textAnchor="middle">
              FOCAL POINT
            </text>
            {/* Side caption — pushed down to align with the new focal-point row */}
            <text x="40" y="302" fontFamily="var(--ac-mono)" fontSize="10" letterSpacing="0.06em" fill="var(--ac-muted)">
              ∩ of four fields
            </text>
            <text x="520" y="302" fontFamily="var(--ac-mono)" fontSize="10" letterSpacing="0.06em" fill="var(--ac-muted)" textAnchor="end">
              ∀ field, ∃ lens
            </text>
          </svg>
        </div>
      </div>

      {/* Four lens descriptions */}
      <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {lenses.map((l) => (
          <div key={l.tag} style={{ border: `1px solid ${l.accent ? BD_PALETTE.ink : BD_PALETTE.mist}`, padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: l.accent ? BD_PALETTE.accent : BD_PALETTE.muted }}>
                {l.tag}
              </span>
              <span style={{ fontFamily: "var(--ac-mono)", fontSize: 9, color: BD_PALETTE.muted, letterSpacing: "0.1em" }}>lens · {String(lenses.indexOf(l) + 1).padStart(2, "0")}</span>
            </div>
            <div style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 16, letterSpacing: "-0.015em", color: BD_PALETTE.ink }}>
              {l.title}
            </div>
            <div style={{ fontFamily: "var(--ac-sans)", fontSize: 12, lineHeight: 1.55, color: BD_PALETTE.graphite }}>
              {l.body}
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}

// ─────────────────────────────────────────────────────────────
// 06 — Transitions (cloud → AI as two ε-δ intervals)
// ─────────────────────────────────────────────────────────────

function PageTransitions({ n, total }) {
  return (
    <Page n={n} total={total} title="06 · transitions">
      <Eyebrow>06 · transitions</Eyebrow>
      <div style={{ marginTop: 8 }}><H1>The pattern,<br/>twice.</H1></div>
      <P max={560}>
        This is the second major technology transition I've navigated. The first was cloud.
        I built the platforms that made it possible. Now it's AI. Same shape: skeptics,
        early infrastructure, the messy adoption middle, then the new default. The pattern
        is identical. The δ is just smaller this time.
      </P>

      {/* Timeline: two ε-δ intervals */}
      <div style={{ marginTop: 22, padding: "32px 28px 28px", border: `1px solid ${BD_PALETTE.mist}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 18 }}>
          <Eyebrow>timeline · two intervals</Eyebrow>
          <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, color: BD_PALETTE.muted, letterSpacing: "0.06em" }}>
            x: time · y: adoption
          </span>
        </div>

        <svg width="100%" viewBox="0 0 640 180" style={{ display: "block" }}>
          {/* Baseline axis */}
          <line x1="20" y1="140" x2="620" y2="140" stroke="var(--ac-ink)" strokeWidth="1" />
          {/* Cloud interval */}
          <line x1="80" y1="140" x2="80" y2="50" stroke="var(--ac-ink)" strokeWidth="1" strokeDasharray="2 3" />
          <line x1="280" y1="140" x2="280" y2="50" stroke="var(--ac-ink)" strokeWidth="1" strokeDasharray="2 3" />
          <line x1="80" y1="50" x2="280" y2="50" stroke="var(--ac-ink)" strokeWidth="1" />
          {/* Cloud bracket */}
          <path d="M 80 142 L 80 148 L 280 148 L 280 142" stroke="var(--ac-ink)" strokeWidth="1" fill="none" />
          <text x="180" y="162" fontFamily="var(--ac-mono)" fontSize="10" letterSpacing="0.16em" fill="var(--ac-ink)" textAnchor="middle" style={{ textTransform: "uppercase" }}>
            cloud · ε₁
          </text>
          <text x="180" y="174" fontFamily="var(--ac-mono)" fontSize="9" letterSpacing="0.06em" fill="var(--ac-muted)" textAnchor="middle">
            δ₁ · ~10y · platform built, adoption driven
          </text>

          {/* AI interval */}
          <line x1="360" y1="140" x2="360" y2="30" stroke="var(--ac-accent)" strokeWidth="1" strokeDasharray="2 3" />
          <line x1="600" y1="140" x2="600" y2="30" stroke="var(--ac-accent)" strokeWidth="1" strokeDasharray="2 3" />
          <line x1="360" y1="30" x2="600" y2="30" stroke="var(--ac-accent)" strokeWidth="1.5" />
          <path d="M 360 142 L 360 148 L 600 148 L 600 142" stroke="var(--ac-accent)" strokeWidth="1" fill="none" />
          <text x="480" y="162" fontFamily="var(--ac-mono)" fontSize="10" letterSpacing="0.16em" fill="var(--ac-accent)" textAnchor="middle" style={{ textTransform: "uppercase" }}>
            ai · ε₂
          </text>
          <text x="480" y="174" fontFamily="var(--ac-mono)" fontSize="9" letterSpacing="0.06em" fill="var(--ac-muted)" textAnchor="middle">
            δ₂ · in progress · same pattern, smaller margin
          </text>

          {/* Convergence labels */}
          <text x="80" y="42" fontFamily="var(--ac-mono)" fontSize="9" letterSpacing="0.06em" fill="var(--ac-muted)" textAnchor="middle">
            skeptics
          </text>
          <text x="280" y="42" fontFamily="var(--ac-mono)" fontSize="9" letterSpacing="0.06em" fill="var(--ac-muted)" textAnchor="middle">
            new default
          </text>
          <text x="360" y="22" fontFamily="var(--ac-mono)" fontSize="9" letterSpacing="0.06em" fill="var(--ac-accent)" textAnchor="middle">
            skeptics
          </text>
          <text x="600" y="22" fontFamily="var(--ac-mono)" fontSize="9" letterSpacing="0.06em" fill="var(--ac-accent)" textAnchor="middle">
            ?
          </text>
        </svg>

        <div style={{ marginTop: 18, paddingTop: 14, borderTop: `1px solid ${BD_PALETTE.mist}`, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div>
            <Eyebrow>ε₁ · cloud</Eyebrow>
            <div style={{ marginTop: 8, fontFamily: "var(--ac-sans)", fontSize: 13, lineHeight: 1.55, color: BD_PALETTE.graphite }}>
              Secured funding. Bootstrapped engineering teams. Shipped the platform.
              Worked directly with enterprise teams to drive adoption. Watched the market
              cross from skeptical to default.
            </div>
          </div>
          <div>
            <Eyebrow accent>ε₂ · ai</Eyebrow>
            <div style={{ marginTop: 8, fontFamily: "var(--ac-sans)", fontSize: 13, lineHeight: 1.55, color: BD_PALETTE.graphite }}>
              Same playbook. Build the infrastructure. Validate the use case. Drive
              adoption against incumbent skepticism. The vocabulary is new; the pattern
              is identical.
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 20, padding: "16px 20px", background: BD_PALETTE.ink, color: "#FAF8F2" }}>
        <div style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 18, lineHeight: 1.3, letterSpacing: "-0.015em" }}>
          Cloud, then AI.{" "}
          <span style={{ color: BD_PALETTE.accent }}>Same pattern, smaller δ.</span>
        </div>
      </div>
    </Page>
  );
}

// ─────────────────────────────────────────────────────────────
// 07 — Method · in product (experimentation as PM operating model)
// ─────────────────────────────────────────────────────────────

function PageProductMethod({ n, total }) {
  const steps = [
    { tag: "01", math: "state the ε",     pm: "PMF assumption · feature bet",   body: "Name the specific belief. Write it as a falsifiable statement, not a goal." },
    { tag: "02", math: "predict the ε",   pm: "success metric · threshold",     body: "Pre-register what 'worked' looks like. Numerically. Before the test runs." },
    { tag: "03", math: "identify the δ",  pm: "MVP · A/B · pilot",              body: "Smallest decisive trial. Cheapest experiment that could disprove the hypothesis." },
    { tag: "04", math: "show the data",   pm: "post-mortem · readout",          body: "Wins, nulls, and surprises. The null result is data. Kill it or scale it." },
  ];
  return (
    <Page n={n} total={total} title="07 · method, in product">
      <Eyebrow>07 · method, in product</Eyebrow>
      <div style={{ marginTop: 8 }}><H1>The system,<br/>operationalized.</H1></div>
      <P max={560}>
        The three-beat structure is the operating model.
        Every feature is a hypothesis. Every release is a trial. Every metric review is
        a publication. The discipline that produces good math also produces good product.
      </P>

      <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {steps.map((s) => (
          <div key={s.tag} style={{ border: `1px solid ${BD_PALETTE.mist}`, padding: 16, display: "flex", flexDirection: "column", gap: 10, minHeight: 200 }}>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 11, letterSpacing: "0.18em", color: BD_PALETTE.accent }}>{s.tag}</span>
            <div style={{ fontFamily: "var(--ac-mono)", fontSize: 12, color: BD_PALETTE.ink, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              {s.math}
            </div>
            <div style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 13, color: BD_PALETTE.ink, letterSpacing: "-0.01em", paddingBottom: 6, borderBottom: `1px solid ${BD_PALETTE.mist}` }}>
              {s.pm}
            </div>
            <div style={{ fontFamily: "var(--ac-sans)", fontSize: 11.5, lineHeight: 1.55, color: BD_PALETTE.graphite }}>
              {s.body}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 18 }}>
        <div style={{ padding: 18, border: `1px solid ${BD_PALETTE.ink}` }}>
          <Eyebrow>theorem · in product</Eyebrow>
          <div style={{ marginTop: 12, fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 18, lineHeight: 1.25, letterSpacing: "-0.015em", color: BD_PALETTE.ink }}>
            <span style={{ color: BD_PALETTE.accent, fontFamily: "var(--ac-mono)", marginRight: 8 }}>Thm.</span>
            A roadmap is a list of hypotheses, ranked by expected information.
          </div>
          <div style={{ marginTop: 10, fontFamily: "var(--ac-sans)", fontSize: 12.5, lineHeight: 1.6, color: BD_PALETTE.graphite }}>
            <span style={{ fontFamily: "var(--ac-mono)", color: BD_PALETTE.accent, marginRight: 6 }}>Pf.</span>
            Bets you already know the outcome of don't reduce uncertainty.
            Rank features by how much you'd learn from running them.
            Ship the cheapest decisive test first.
            <span style={{ fontFamily: "var(--ac-mono)", color: BD_PALETTE.accent, marginLeft: 6 }}>∎</span>
          </div>
        </div>

        <div style={{ padding: 18, background: BD_PALETTE.ink, color: "#FAF8F2" }}>
          <Eyebrow dark>artifacts</Eyebrow>
          <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--ac-sans)", fontSize: 12.5, lineHeight: 1.5 }}>
            {[
              "Pre-registered success metrics, written before launch.",
              "A 'kill criteria' line on every initiative.",
              "Null results published in the same room as wins.",
              "Decision logs. What we believed, what we learned.",
            ].map((t, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "16px 1fr", gap: 6, alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--ac-mono)", color: BD_PALETTE.accent, fontSize: 12 }}>·</span>
                <span style={{ color: "rgba(255,255,255,0.85)" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}

// ─────────────────────────────────────────────────────────────
// 08 — Bios (GitHub vs LinkedIn — two registers, one person)
// ─────────────────────────────────────────────────────────────

function PageBios({ n, total }) {
  return (
    <Page n={n} total={total} title="08 · bios">
      <Eyebrow>08 · bios · two audiences</Eyebrow>
      <div style={{ marginTop: 8 }}><H1>One person,<br/>two registers.</H1></div>
      <P max={560}>
        The brand is the system. Every surface is an application of it. Two audiences
        deserve two voices. Both true. Both signed by the same hand. GitHub speaks
        to engineers. LinkedIn speaks to operators. The math stays where it earns its keep.
      </P>

      <div style={{ marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {/* GitHub bio · technical */}
        <div style={{ border: `1px solid ${BD_PALETTE.ink}`, padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: BD_PALETTE.accent }}>
              github · technical
            </span>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, color: BD_PALETTE.muted, letterSpacing: "0.08em" }}>@amcheste</span>
          </div>
          <div style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 14, lineHeight: 1.4, letterSpacing: "-0.005em", color: BD_PALETTE.ink }}>
            Engineer turned product leader · MBA candidate
            <span style={{ color: BD_PALETTE.accent, fontFamily: "var(--ac-mono)", marginLeft: 6 }}>(ε, δ)</span>
          </div>
          <div style={{ fontFamily: "var(--ac-sans)", fontSize: 12, lineHeight: 1.6, color: BD_PALETTE.graphite }}>
            Product strategy at Oracle (OCI Operations). 15+ years across engineering,
            security, and platform PM. Built cloud platforms from the ground up: funding,
            teams, ship, adoption. Now applying the same pattern to AI infrastructure.
            <br/><br/>
            <span style={{ fontFamily: "var(--ac-mono)", color: BD_PALETTE.ink, fontSize: 11 }}>
              CS · Applied Math · Security · MBA{" "}
              <span style={{ color: BD_PALETTE.accent }}>→ (ε, δ)</span>
            </span>
            <br/><br/>
            For any ε &gt; 0, there exists a δ &gt; 0. The notebook is open. Pull requests welcome.
          </div>
          <div style={{ marginTop: 4, paddingTop: 10, borderTop: `1px solid ${BD_PALETTE.mist}`, display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 9, color: BD_PALETTE.muted, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              audience: engineers
            </span>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 9, color: BD_PALETTE.muted, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              voice: technical · open
            </span>
          </div>
        </div>

        {/* LinkedIn bio · operator */}
        <div style={{ border: `1px solid ${BD_PALETTE.mist}`, padding: 20, display: "flex", flexDirection: "column", gap: 10, background: BD_PALETTE.paper }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: BD_PALETTE.ink }}>
              linkedin · operator
            </span>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 10, color: BD_PALETTE.muted, letterSpacing: "0.08em" }}>in/amcheste</span>
          </div>
          <div style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 14, lineHeight: 1.4, letterSpacing: "-0.005em", color: BD_PALETTE.ink }}>
            Engineer turned product leader. Obsessed with efficiency.
          </div>
          <div style={{ fontFamily: "var(--ac-sans)", fontSize: 12, lineHeight: 1.6, color: BD_PALETTE.graphite }}>
            I help businesses turn cloud and AI investments into measurable returns.
            15+ years building and scaling enterprise software. I've led the cloud
            transition once. Built the platforms, drove the adoption, proved the ROI.
            Now I'm doing the same with AI.
            <br/><br/>
            What I bring: an engineer's instinct for what will actually work, a
            mathematician's eye for what the numbers really say, a security mindset
            for the risks others miss, and an MBA's discipline for proving the return.
            Bring me data and I'll entertain any hypothesis, including the one that
            tells us to pivot.
            <br/><br/>
            One obsession: efficiency that's <em>measured</em>, not assumed.
          </div>
          <div style={{ marginTop: 4, paddingTop: 10, borderTop: `1px solid ${BD_PALETTE.mist}`, display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 9, color: BD_PALETTE.muted, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              audience: smb leaders
            </span>
            <span style={{ fontFamily: "var(--ac-mono)", fontSize: 9, color: BD_PALETTE.muted, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              voice: plain · results-first
            </span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 16, padding: "14px 18px", border: `1px dashed ${BD_PALETTE.mist}`, display: "grid", gridTemplateColumns: "120px 1fr", gap: 16, alignItems: "center" }}>
        <Eyebrow>rule</Eyebrow>
        <span style={{ fontFamily: "var(--ac-sans)", fontSize: 12.5, lineHeight: 1.55, color: BD_PALETTE.graphite }}>
          Math notation only when the audience reads it natively. On every other
          surface, the obsession with efficiency speaks for itself.
        </span>
      </div>
    </Page>
  );
}

// ─────────────────────────────────────────────────────────────
// 09 — The Accent (what green means)
// ─────────────────────────────────────────────────────────────

function PageAccent({ n, total }) {
  return (
    <Page n={n} total={total} title="09 · the accent">
      <Eyebrow accent>09 · the accent</Eyebrow>
      <div style={{ marginTop: 8 }}><H1>What hunter green means.</H1></div>
      <P max={580}>
        Hunter green is not decorative. It carries semantic meaning across every surface
        where the brand appears. It marks the δ, the moment of meaningful change in any
        narrative. Everything else stays in ink, paper, and graphite. The accent must be
        earned. When you see hunter green, something changed.
      </P>

      {/* The semantic strip */}
      <div style={{ marginTop: 22, padding: "22px 24px", border: `1px solid ${BD_PALETTE.ink}` }}>
        <Eyebrow>the rule</Eyebrow>
        <div style={{ marginTop: 12, fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 22, lineHeight: 1.25, letterSpacing: "-0.02em", color: BD_PALETTE.ink }}>
          Hunter green = <span style={{ color: BD_PALETTE.accent, fontFamily: "var(--ac-mono)" }}>the data</span>,
          {" "}<span style={{ color: BD_PALETTE.accent, fontFamily: "var(--ac-mono)" }}>the pivot</span>,
          {" "}<span style={{ color: BD_PALETTE.accent, fontFamily: "var(--ac-mono)" }}>the δ</span>.
        </div>
        <div style={{ marginTop: 8, fontFamily: "var(--ac-mono)", fontSize: 12, color: BD_PALETTE.graphite, letterSpacing: "-0.005em" }}>
          unassuming first. depth on closer look. <span style={{ color: BD_PALETTE.accent }}>#1F4D3A</span>.
        </div>
      </div>

      {/* Where it lands · examples */}
      <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <AccentRule
          tag="01"
          where="In a sentence"
          example={<>
            <span>Cloud, then AI. </span>
            <span style={{ color: BD_PALETTE.accent }}>Same pattern, smaller margin</span>
            <span>.</span>
          </>}
          rule="On the noun that names the finding, not the description."
        />
        <AccentRule
          tag="02"
          where="In an equation"
          example={<span style={{ fontFamily: "var(--ac-mono)" }}>
            ∀ <span style={{ color: BD_PALETTE.accent }}>ε</span> &gt; 0, ∃ δ &gt; 0
          </span>}
          rule="On ε, the goal the data has to clear. Not on δ. δ is the response, not the pivot."
        />
        <AccentRule
          tag="03"
          where="In a chart"
          example={<span style={{ fontFamily: "var(--ac-mono)", fontSize: 13 }}>
            <span style={{ color: BD_PALETTE.muted }}>—— baseline ——</span>
            <span style={{ color: BD_PALETTE.accent, marginLeft: 6 }}>▮</span>
            <span style={{ color: BD_PALETTE.muted }}>—— after ——</span>
          </span>}
          rule="On the inflection point, the tick where the line bends. Never the line itself."
        />
        <AccentRule
          tag="04"
          where="In a notebook"
          example={<span style={{ fontFamily: "var(--ac-mono)", fontSize: 13 }}>
            <span>hyp · method · </span>
            <span style={{ color: BD_PALETTE.accent }}>result</span>
          </span>}
          rule="On the result column. The process is ink; the finding is hunter green."
        />
      </div>

      {/* Don't list */}
      <div style={{ marginTop: 18, padding: "14px 18px", border: `1px dashed ${BD_PALETTE.mist}`, display: "grid", gridTemplateColumns: "100px 1fr", gap: 16, alignItems: "start" }}>
        <Eyebrow>don't</Eyebrow>
        <div style={{ fontFamily: "var(--ac-sans)", fontSize: 12.5, lineHeight: 1.6, color: BD_PALETTE.graphite }}>
          Decorate eyebrows, page numbers, dividers, or section tags.
          Don't tint headlines green. Don't use it for emphasis on opinions.
          If hunter green is on every page, the rule has been broken.
          If a green element doesn't represent <span style={{ color: BD_PALETTE.ink, fontWeight: 500 }}>data, evidence, or a pivot</span>, demote it to ink.
        </div>
      </div>
    </Page>
  );
}

function AccentRule({ tag, where, example, rule }) {
  return (
    <div style={{ border: `1px solid ${BD_PALETTE.mist}`, padding: 16, display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <Eyebrow>{where}</Eyebrow>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 9, color: BD_PALETTE.muted, letterSpacing: "0.1em" }}>rule · {tag}</span>
      </div>
      <div style={{ fontFamily: "var(--ac-sans)", fontSize: 16, fontWeight: 500, color: BD_PALETTE.ink, letterSpacing: "-0.01em", lineHeight: 1.35, paddingBottom: 10, borderBottom: `1px solid ${BD_PALETTE.mist}` }}>
        {example}
      </div>
      <div style={{ fontFamily: "var(--ac-sans)", fontSize: 12, color: BD_PALETTE.graphite, lineHeight: 1.55 }}>
        {rule}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 10 — Voice
// ─────────────────────────────────────────────────────────────

function PageVoice({ n, total }) {
  return (
    <Page n={n} total={total} title="12 · voice">
      <Eyebrow>12 · voice</Eyebrow>
      <div style={{ marginTop: 8 }}><H1>How it sounds.</H1></div>
      <P max={540}>
        Calibrated, precise, restrained. Short sentences. Plain words for plain things.
        No hyperbole. No em dashes. Numerical specificity over round estimates.
        Math notation when it earns its keep, never as decoration. Quiet authority.
        The reader is smart and busy. Respect that.
      </P>

      <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
        <VoiceRow yes="For any ε > 0, there exists a δ > 0." no="Synergistic, end-to-end excellence." />
        <VoiceRow yes="Coordination overhead dropped 23%." no="Coordination overhead dropped significantly." />
        <VoiceRow yes="The data suggests we pause." no="Maybe we should kind of pause." />
        <VoiceRow yes="Find the δ." no="Game-changing breakthrough." />
      </div>

      <div style={{ marginTop: 24, padding: 20, background: BD_PALETTE.ink, color: "#FAF8F2" }}>
        <Eyebrow dark>signature lines</Eyebrow>
        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 12, fontFamily: "var(--ac-sans)", fontSize: 16, lineHeight: 1.4, letterSpacing: "-0.01em" }}>
          <div>Every <span style={{ color: BD_PALETTE.accent }}>goal</span> is an ε. Every <span style={{ color: BD_PALETTE.accent }}>decision</span> is a δ. <span style={{ color: BD_PALETTE.accent }}>Data</span> points the gradient.</div>
          <div>The smallest deliberate <span style={{ color: BD_PALETTE.accent }}>move</span>.</div>
          <div>Find the <span style={{ fontFamily: "var(--ac-mono)", color: BD_PALETTE.accent }}>δ</span>.</div>
          <div>Open by default. <span style={{ fontFamily: "var(--ac-mono)", color: BD_PALETTE.accent }}>∎</span></div>
        </div>
      </div>
    </Page>
  );
}

function VoiceRow({ yes, no }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 10, alignItems: "baseline" }}>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 13, color: BD_PALETTE.accent }}>✓</span>
        <span style={{ fontFamily: "var(--ac-sans)", fontSize: 14, fontWeight: 500, color: BD_PALETTE.ink, letterSpacing: "-0.01em", lineHeight: 1.35 }}>{yes}</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 10, alignItems: "baseline" }}>
        <span style={{ fontFamily: "var(--ac-mono)", fontSize: 13, color: BD_PALETTE.muted }}>×</span>
        <span style={{ fontFamily: "var(--ac-sans)", fontSize: 13, color: BD_PALETTE.muted, lineHeight: 1.35, textDecoration: "line-through", textDecorationColor: BD_PALETTE.mist }}>{no}</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 08 — Closing
// ─────────────────────────────────────────────────────────────

function PageClose({ n, total }) {
  return (
    <Page n={n} total={total} title="13 · close" dark>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", paddingTop: 32 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <Eyebrow dark>13 · in summary</Eyebrow>
          <div style={{ fontFamily: "var(--ac-sans)", fontWeight: 500, fontSize: 56, lineHeight: 1, letterSpacing: "-0.035em", color: "#FAF8F2" }}>
            One goal.<br/>
            One δ.<br/>
            <span style={{ color: BD_PALETTE.accent }}>Open by default.</span>
          </div>
          <P dark size={14} max={520}>
            The brand is the proof. Math is the system. Three beats are the structure.
            Increments compound the result. Use ε as the anchor. Extend the structure
            where the work calls for it.
          </P>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.18)" }}>
          {[
            ["linkedin", "in/amcheste"],
            ["github", "@amcheste"],
            ["location", "raleigh–durham, nc"],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <Eyebrow dark>{k}</Eyebrow>
              <span style={{ fontFamily: "var(--ac-mono)", fontSize: 13, color: "#FAF8F2", letterSpacing: "0" }}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
}

// ─────────────────────────────────────────────────────────────
// Document board (composes every page in one stack)
// ─────────────────────────────────────────────────────────────

function BrandDocumentBoard({ swatches }) {
  const TOTAL = 13;
  const items = [
    { page: 1,  title: "Cover",            sub: "the document opens here" },
    { page: 2,  title: "Contents",         sub: "this page" },
    { page: 3,  title: "Philosophy",       sub: "for any ε > 0, there exists a δ > 0" },
    { page: 4,  title: "Method",           sub: "three beats: state ε, find δ, show data" },
    { page: 5,  title: "Lenses",           sub: "CS ∩ Math ∩ Security ∩ MBA → (ε, δ)" },
    { page: 6,  title: "Transitions",      sub: "cloud, then AI. same pattern, smaller δ" },
    { page: 7,  title: "Method, in product",sub: "the system, operationalized" },
    { page: 8,  title: "Bios",             sub: "two audiences, two registers" },
    { page: 9,  title: "The accent",       sub: "hunter green = the data, the pivot, the δ" },
    { page: 10, title: "Identity",         sub: "wordmark · monogram · lockups" },
    { page: 11, title: "Color & Type",     sub: "the palette and the typographic system" },
    { page: 12, title: "Voice",            sub: "how it sounds, how it doesn't" },
    { page: 13, title: "In summary",       sub: "one goal, one δ, open" },
  ];
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 32, padding: 32, background: "transparent", boxSizing: "border-box" }}>
      <PageCover         n={1}  total={TOTAL} />
      <PageContents      n={2}  total={TOTAL} items={items} />
      <PagePhilosophy    n={3}  total={TOTAL} />
      <PageMethod        n={4}  total={TOTAL} />
      <PageLenses        n={5}  total={TOTAL} />
      <PageTransitions   n={6}  total={TOTAL} />
      <PageProductMethod n={7}  total={TOTAL} />
      <PageBios          n={8}  total={TOTAL} />
      <PageAccent        n={9}  total={TOTAL} />
      <PageIdentity      n={10} total={TOTAL} />
      <PageColorType     n={11} total={TOTAL} swatches={swatches} />
      <PageVoice         n={12} total={TOTAL} />
      <PageClose         n={13} total={TOTAL} />
    </div>
  );
}

Object.assign(window, { BrandDocumentBoard });

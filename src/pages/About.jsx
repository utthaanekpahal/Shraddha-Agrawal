// ─────────────────────────────────────────
//  pages/About.jsx  –  fully responsive
// ─────────────────────────────────────────
import { useState, useEffect } from "react";
import PageHero        from "../components/ui/PageHero";
import AnimatedSection from "../components/ui/AnimatedSection";
import { EDUCATION, SPECIALIZATIONS, DOCTOR } from "../data/constants";

/* ── tiny hook: returns true when viewport ≤ breakpoint px ── */
function useIsMobile(breakpoint = 768) {
  const [mobile, setMobile] = useState(() => window.innerWidth <= breakpoint);
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [breakpoint]);
  return mobile;
}

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */
export default function About() {
  const isMobile = useIsMobile();

  return (
    <div style={{ paddingTop: 70 }}>
      <PageHero
        tag="ABOUT"
        title="Dr. Shraddha Agrawal"
        subtitle="Senior Anaesthesiologist · PG Teacher · DNB Guide"
      />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: isMobile ? "40px 5%" : "72px 5%" }}>

        {/* ── MOBILE: full-width stacked layout ── */}
        {isMobile ? (
          <MobileLayout />
        ) : (
          <DesktopLayout />
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   DESKTOP  (two-column: sidebar | content)
══════════════════════════════════════════════════════════ */
function DesktopLayout() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 56, alignItems: "start" }}>
      {/* Sticky sidebar */}
      <AnimatedSection>
        <div style={{ position: "sticky", top: 90 }}>
          <DoctorCard />
          <InfoPills />
        </div>
      </AnimatedSection>

      {/* Main content */}
      <ContentBlock />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   MOBILE  (single column, card first then content)
══════════════════════════════════════════════════════════ */
function MobileLayout() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

      {/* Compact horizontal profile card */}
      <AnimatedSection>
        <MobileProfileCard />
      </AnimatedSection>

      {/* Info pills in 2-col grid */}
      <AnimatedSection delay={0.05}>
        <MobileInfoGrid />
      </AnimatedSection>

      {/* Rest of content */}
      <ContentBlock isMobile />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   SHARED CONTENT BLOCK
══════════════════════════════════════════════════════════ */
function ContentBlock({ isMobile = false }) {
  const h2Size = isMobile ? "1.5rem" : "clamp(1.6rem, 2.5vw, 2.2rem)";

  return (
    <div>
      <AnimatedSection>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: h2Size, color: "var(--text-dark)", fontWeight: 700, marginBottom: 20, lineHeight: 1.3 }}>
          Dedicated to Excellence in Patient Care
        </h2>
        <p style={{ fontSize: 15, color: "var(--text-body)", lineHeight: 1.85, marginBottom: 16 }}>
          Dr. Shraddha Agrawal is a highly skilled and compassionate anaesthesiologist
          with over <strong>20+ years of clinical expertise</strong> in perioperative
          care, critical care support, and advanced anaesthesia techniques. She completed
          her postgraduate training at Gandhi Medical College, Bhopal (1999–2002).
        </p>
        <p style={{ fontSize: 15, color: "var(--text-body)", lineHeight: 1.85, marginBottom: 16 }}>
          Currently practicing at <strong>MMI Narayana Multispeciality Hospital</strong> and{" "}
          <strong>DKS Super Speciality Hospital</strong> in Raipur, she brings together the
          best of corporate and government super-speciality healthcare, ensuring top-tier
          anaesthesia management across a wide spectrum of surgical specialties.
        </p>
        <p style={{ fontSize: 15, color: "var(--text-body)", lineHeight: 1.85, marginBottom: 40 }}>
          Beyond clinical work, Dr. Agrawal is an active{" "}
          <strong>postgraduate teacher and DNB program guide</strong>, committed to nurturing
          the next generation of anaesthesiologists with rigorous academic training and
          hands-on clinical mentorship.
        </p>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection delay={0.1}>
        <SectionTitle>🎓 Education</SectionTitle>
        <EducationTimeline />
      </AnimatedSection>

      {/* Specializations */}
      <AnimatedSection delay={0.15} style={{ marginTop: 40 }}>
        <SectionTitle>🧠 Areas of Specialization</SectionTitle>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {SPECIALIZATIONS.map(s => (
            <span key={s} style={{
              background: "linear-gradient(135deg,rgba(10,110,180,0.08),rgba(43,182,115,0.08))",
              border: "1px solid rgba(10,110,180,0.20)",
              borderRadius: 20, padding: "6px 16px",
              fontSize: 13, color: "var(--primary)", fontWeight: 500,
            }}>{s}</span>
          ))}
        </div>
      </AnimatedSection>

      {/* Experience highlights */}
      <AnimatedSection delay={0.2} style={{ marginTop: 40 }}>
        <SectionTitle>🏆 Experience Highlights</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
          {[
            { icon: "🩺", label: "20+ years in anaesthesia" },
            { icon: "🏥", label: "Extensive OT & ICU experience" },
            { icon: "⚡", label: "High-risk case expertise" },
            { icon: "🎓", label: "Active DNB program guide" },
          ].map(h => (
            <div key={h.label} style={{
              background: "var(--bg)", borderRadius: 14,
              padding: "14px 16px", display: "flex", alignItems: "center", gap: 10,
              border: "1px solid var(--border)",
            }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>{h.icon}</span>
              <span style={{ fontSize: 13, color: "var(--text-body)", fontWeight: 500, lineHeight: 1.4 }}>{h.label}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════════════════════════ */

/** Desktop sidebar card */
function DoctorCard() {
  return (
    <div style={{
      background: "var(--grad-primary)",
      borderRadius: 24, padding: 36, textAlign: "center",
      boxShadow: "var(--shadow-lg)", marginBottom: 16,
    }}>
      <div style={{ fontSize: 72, marginBottom: 14 }}>👩‍⚕️</div>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
        {DOCTOR.name}
      </p>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", marginTop: 6 }}>
        {DOCTOR.qualifications}
      </p>
    </div>
  );
}

/** Mobile: compact horizontal profile banner */
function MobileProfileCard() {
  return (
    <div style={{
      background: "var(--grad-primary)",
      borderRadius: 20, padding: "24px 20px",
      display: "flex", alignItems: "center", gap: 16,
      boxShadow: "var(--shadow-md)",
    }}>
      <div style={{ fontSize: 60, flexShrink: 0, lineHeight: 1 }}>👩‍⚕️</div>
      <div>
        <p style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.25 }}>
          {DOCTOR.name}
        </p>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", marginTop: 4 }}>
          {DOCTOR.qualifications}
        </p>
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>
          20+ Years · Raipur, CG
        </p>
      </div>
    </div>
  );
}

/** Desktop sidebar info pills (vertical) */
function InfoPills() {
  const pills = [
    ["📍", DOCTOR.location],
    ["🏥", "MMI Narayana & DKS Hospital"],
    ["📅", "20+ Years Experience"],
    ["🎓", "PG Teacher, DNB Guide"],
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {pills.map(([icon, text]) => (
        <div key={text} style={{
          display: "flex", alignItems: "center", gap: 12,
          padding: "11px 14px", background: "var(--bg)",
          borderRadius: 12, fontSize: 14, color: "#374151",
          border: "1px solid var(--border)",
        }}>
          <span style={{ flexShrink: 0 }}>{icon}</span>
          <span style={{ lineHeight: 1.4 }}>{text}</span>
        </div>
      ))}
    </div>
  );
}

/** Mobile info pills in 2-column grid */
function MobileInfoGrid() {
  const pills = [
    ["📍", "Raipur, CG"],
    ["🏥", "MMI Narayana & DKS"],
    ["📅", "20+ Yrs Experience"],
    ["🎓", "PG Teacher & DNB Guide"],
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
      {pills.map(([icon, text]) => (
        <div key={text} style={{
          display: "flex", alignItems: "flex-start", gap: 10,
          padding: "12px 14px", background: "#fff",
          borderRadius: 12, fontSize: 13, color: "#374151",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-sm)",
        }}>
          <span style={{ fontSize: 18, flexShrink: 0 }}>{icon}</span>
          <span style={{ lineHeight: 1.4, fontWeight: 500 }}>{text}</span>
        </div>
      ))}
    </div>
  );
}

/** Education timeline */
function EducationTimeline() {
  return (
    <div style={{ borderLeft: "3px solid var(--primary)", paddingLeft: 22, marginBottom: 8 }}>
      {EDUCATION.map((e, i) => (
        <div key={i} style={{ marginBottom: 24, position: "relative" }}>
          <div style={{
            position: "absolute", left: -29, top: 5,
            width: 12, height: 12, borderRadius: "50%",
            background: "var(--primary)", border: "3px solid #fff",
            boxShadow: "0 0 0 2px var(--primary)",
          }} />
          <p style={{ fontSize: 12, color: "var(--primary)", fontWeight: 600, marginBottom: 3, letterSpacing: 0.5 }}>{e.year}</p>
          <p style={{ fontWeight: 700, fontSize: 15, color: "var(--text-dark)", marginBottom: 2 }}>{e.degree}</p>
          <p style={{ fontSize: 13, color: "var(--text-muted)" }}>{e.college}</p>
        </div>
      ))}
    </div>
  );
}

/** Small reusable section title */
function SectionTitle({ children }) {
  return (
    <h3 style={{
      fontFamily: "var(--font-body)", fontWeight: 700,
      fontSize: 18, color: "var(--text-dark)", marginBottom: 18,
    }}>{children}</h3>
  );
}

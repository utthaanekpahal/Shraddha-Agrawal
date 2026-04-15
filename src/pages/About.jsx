// ─────────────────────────────────────────
//  pages/About.jsx
// ─────────────────────────────────────────
import PageHero from "../components/ui/PageHero";
import AnimatedSection from "../components/ui/AnimatedSection";
import { EDUCATION, SPECIALIZATIONS, DOCTOR } from "../data/constants";

export default function About() {
  return (
    <div style={{ paddingTop: 70 }}>
      <PageHero
        tag="ABOUT"
        title="Dr. Shraddha Agrawal"
        subtitle="Senior Anaesthesiologist · PG Teacher · DNB Guide"
      />

      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "72px 5%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(260px,1fr) minmax(0,2fr)",
          gap: 56, alignItems: "start",
        }}>
          {/* ── Left sidebar ── */}
          <AnimatedSection>
            <div style={{ position: "sticky", top: 90 }}>
              <DoctorCard />
              <InfoPills />
            </div>
          </AnimatedSection>

          {/* ── Right content ── */}
          <div>
            <AnimatedSection>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                color: "var(--text-dark)", fontWeight: 700, marginBottom: 20,
              }}>
                Dedicated to Excellence in Patient Care
              </h2>
              <p style={{ fontSize: 16, color: "var(--text-body)", lineHeight: 1.85, marginBottom: 20 }}>
                Dr. Shraddha Agrawal is a highly skilled and compassionate anaesthesiologist
                with over <strong>18 years of clinical expertise</strong> in perioperative
                care, critical care support, and advanced anaesthesia techniques. She completed
                her postgraduate training at Gandhi Medical College, Bhopal (1999–2002).
              </p>
              <p style={{ fontSize: 16, color: "var(--text-body)", lineHeight: 1.85, marginBottom: 20 }}>
                Currently practicing at <strong>MMI Narayana Multispeciality Hospital</strong> and{" "}
                <strong>DKS Super Speciality Hospital</strong> in Raipur, she brings together the
                best of corporate and government super-speciality healthcare, ensuring top-tier
                anaesthesia management across a wide spectrum of surgical specialties.
              </p>
              <p style={{ fontSize: 16, color: "var(--text-body)", lineHeight: 1.85, marginBottom: 48 }}>
                Beyond clinical work, Dr. Agrawal is an active{" "}
                <strong>postgraduate teacher and DNB program guide</strong>, committed to nurturing
                the next generation of anaesthesiologists with rigorous academic training and
                hands-on clinical mentorship.
              </p>
            </AnimatedSection>

            {/* Education timeline */}
            <AnimatedSection delay={0.1}>
              <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 20, color: "var(--text-dark)", marginBottom: 24 }}>
                🎓 Education
              </h3>
              <EducationTimeline />
            </AnimatedSection>

            {/* Specializations */}
            <AnimatedSection delay={0.2} style={{ marginTop: 48 }}>
              <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 20, color: "var(--text-dark)", marginBottom: 20 }}>
                🧠 Areas of Specialization
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {SPECIALIZATIONS.map(s => (
                  <span key={s} style={{
                    background: "linear-gradient(135deg, rgba(10,110,180,0.08), rgba(43,182,115,0.08))",
                    border: "1px solid rgba(10,110,180,0.20)",
                    borderRadius: 20, padding: "7px 18px",
                    fontSize: 14, color: "var(--primary)", fontWeight: 500,
                  }}>{s}</span>
                ))}
              </div>
            </AnimatedSection>

            {/* Experience highlights */}
            <AnimatedSection delay={0.3} style={{ marginTop: 48 }}>
              <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 20, color: "var(--text-dark)", marginBottom: 20 }}>
                🏆 Experience Highlights
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
                {[
                  { icon: "🩺", label: "18+ years in anaesthesia" },
                  { icon: "🏥", label: "Extensive OT & ICU experience" },
                  { icon: "⚡", label: "Expertise in critical & high-risk cases" },
                  { icon: "🎓", label: "Active DNB program guide" },
                ].map(h => (
                  <div key={h.label} style={{
                    background: "var(--bg)", borderRadius: 14,
                    padding: "16px 20px", display: "flex", alignItems: "center", gap: 12,
                    border: "1px solid var(--border)",
                  }}>
                    <span style={{ fontSize: 24 }}>{h.icon}</span>
                    <span style={{ fontSize: 14, color: "var(--text-body)", fontWeight: 500 }}>{h.label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ── Mobile: stack columns ── */}
      <style>{`
        @media (max-width: 768px) {
          /* grid is already auto-fit; sticky sidebar becomes normal flow */
        }
      `}</style>
    </div>
  );
}

/* ── Sub-components ── */

function DoctorCard() {
  return (
    <div style={{
      background: "var(--grad-primary)",
      borderRadius: 24, padding: 40, textAlign: "center",
      boxShadow: "var(--shadow-lg)", marginBottom: 20,
    }}>
      <div style={{ fontSize: 80, marginBottom: 16 }}>👩‍⚕️</div>
      <p style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "#fff" }}>
        {DOCTOR.name}
      </p>
      <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", marginTop: 4 }}>
        {DOCTOR.qualifications}
      </p>
    </div>
  );
}

function InfoPills() {
  const pills = [
    ["📍", DOCTOR.location],
    ["🏥", "MMI Narayana & DKS Hospital"],
    ["📅", "18+ Years Experience"],
    ["🎓", "PG Teacher, DNB Guide"],
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {pills.map(([icon, text]) => (
        <div key={text} style={{
          display: "flex", alignItems: "center", gap: 12,
          padding: "12px 16px", background: "var(--bg)",
          borderRadius: 12, fontSize: 14, color: "#374151",
          border: "1px solid var(--border)",
        }}>
          <span>{icon}</span><span>{text}</span>
        </div>
      ))}
    </div>
  );
}

function EducationTimeline() {
  return (
    <div style={{ borderLeft: "3px solid var(--primary)", paddingLeft: 24, marginBottom: 8 }}>
      {EDUCATION.map((e, i) => (
        <div key={i} style={{ marginBottom: 28, position: "relative" }}>
          {/* dot */}
          <div style={{
            position: "absolute", left: -31, top: 4,
            width: 12, height: 12, borderRadius: "50%",
            background: "var(--primary)", border: "3px solid #fff",
            boxShadow: "0 0 0 2px var(--primary)",
          }} />
          <p style={{ fontSize: 13, color: "var(--primary)", fontWeight: 600, marginBottom: 4 }}>{e.year}</p>
          <p style={{ fontWeight: 700, fontSize: 16, color: "var(--text-dark)" }}>{e.degree}</p>
          <p style={{ fontSize: 14, color: "var(--text-muted)" }}>{e.college}</p>
        </div>
      ))}
    </div>
  );
}

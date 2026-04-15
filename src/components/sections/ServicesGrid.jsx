// ─────────────────────────────────────────────────────
//  components/sections/ServicesGrid.jsx
//  Responsive card grid of services with hover effects.
//  Used on both Home (preview) and Services page (full).
// ─────────────────────────────────────────────────────
import { SERVICES } from "../../data/constants";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

export default function ServicesGrid({ preview = false, setActive }) {
  const items = preview ? SERVICES.slice(0, 6) : SERVICES;

  return (
    <section style={{ background: "var(--bg)", padding: "var(--section-pad)" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <SectionHeader
          tag="EXPERTISE"
          title="Services & Specializations"
          subtitle="Comprehensive anaesthesia care designed around patient safety and procedural excellence."
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}>
          {items.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <ServiceCard {...s} />
            </AnimatedSection>
          ))}
        </div>

        {preview && setActive && (
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Button onClick={() => setActive("Services")}>View All Services →</Button>
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div
      style={{
        background: "var(--white)", borderRadius: "var(--radius-card)",
        padding: 28, boxShadow: "var(--shadow-sm)", border: "1px solid var(--border)",
        transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
        height: "100%",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
        e.currentTarget.style.borderColor = "var(--primary)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-sm)";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 14 }}>{icon}</div>
      <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 17, color: "var(--text-dark)", marginBottom: 10 }}>{title}</h3>
      <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7 }}>{desc}</p>
    </div>
  );
}

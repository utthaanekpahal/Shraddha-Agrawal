// ─────────────────────────────────────────────────────
//  components/sections/WhyChooseSection.jsx
//  Dark-gradient grid highlighting Dr. Agrawal's USPs.
// ─────────────────────────────────────────────────────
import { WHY_CHOOSE } from "../../data/constants";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeader from "../ui/SectionHeader";

export default function WhyChooseSection() {
  return (
    <section style={{ background: "var(--grad-dark)", padding: "var(--section-pad)" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}>
        <SectionHeader tag="TRUST" title="Why Choose Dr. Agrawal?" light />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24,
        }}>
          {WHY_CHOOSE.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <WhyCard {...item} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ icon, title, desc }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.07)",
        borderRadius: "var(--radius-card)",
        padding: 24,
        border: "1px solid rgba(255,255,255,0.12)",
        transition: "all 0.25s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.13)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.07)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
      <p style={{ fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 8 }}>{title}</p>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{desc}</p>
    </div>
  );
}

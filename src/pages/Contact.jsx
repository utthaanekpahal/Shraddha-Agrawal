// ─────────────────────────────────────────
//  pages/Contact.jsx
// ─────────────────────────────────────────
import PageHero        from "../components/ui/PageHero";
import AnimatedSection from "../components/ui/AnimatedSection";
import Button          from "../components/ui/Button";
import { CONTACT_CARDS, DOCTOR } from "../data/constants";

export default function Contact() {
  return (
    <div style={{ paddingTop: 70 }}>
      <PageHero tag="GET IN TOUCH" title="Contact Us" />

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "72px 5%" }}>
        {/* ── Info cards grid ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 24, marginBottom: 48,
        }}>
          {CONTACT_CARDS.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.08}>
              <ContactCard card={c} />
            </AnimatedSection>
          ))}
        </div>

        {/* ── Social / LinkedIn banner ── */}
        <AnimatedSection delay={0.15}>
          <SocialBanner />
        </AnimatedSection>
      </div>
    </div>
  );
}

/* ── Sub-components ── */

function ContactCard({ card: c }) {
  return (
    <div style={{
      background: "var(--white)", borderRadius: "var(--radius-card)",
      padding: 28, boxShadow: "var(--shadow-sm)", border: "1px solid var(--border)",
      height: "100%",
    }}>
      <div style={{
        width: 52, height: 52, borderRadius: 14, marginBottom: 16,
        background: `${c.color}18`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 26,
      }}>{c.icon}</div>
      <p style={{ fontWeight: 700, fontSize: 16, color: "var(--text-dark)", marginBottom: 8 }}>{c.title}</p>
      <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.75, whiteSpace: "pre-line" }}>{c.detail}</p>
    </div>
  );
}

function SocialBanner() {
  return (
    <div style={{
      background: "var(--grad-dark)",
      borderRadius: 24, padding: "48px 40px",
      display: "flex", alignItems: "center",
      gap: 32, flexWrap: "wrap",
    }}>
      <div style={{ flex: 1, minWidth: 240 }}>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "#fff", fontWeight: 700, marginBottom: 12 }}>
          Connect on Social
        </h3>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
          Dr. Agrawal maintains a professional LinkedIn profile. Follow for updates
          on medical education and clinical insights.
        </p>
      </div>
      <Button
        href={DOCTOR.linkedin}
        target="_blank" rel="noopener noreferrer"
        style={{ background: "#0A66C2", boxShadow: "0 4px 16px rgba(10,102,194,0.4)", flexShrink: 0 }}
      >
        in  LinkedIn Profile
      </Button>
    </div>
  );
}

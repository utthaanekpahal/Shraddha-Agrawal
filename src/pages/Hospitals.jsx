// ─────────────────────────────────────────
//  pages/Hospitals.jsx
// ─────────────────────────────────────────
import PageHero       from "../components/ui/PageHero";
import AnimatedSection from "../components/ui/AnimatedSection";
import Button         from "../components/ui/Button";
import { HOSPITALS }  from "../data/constants";

export default function Hospitals() {
  return (
    <div style={{ paddingTop: 70 }}>
      <PageHero
        tag="AFFILIATED INSTITUTIONS"
        title="Hospitals & Facilities"
        subtitle="Practicing at leading healthcare institutions in Raipur, Chhattisgarh."
      />

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "72px 5%" }}>
        {/* ── Hospital cards ── */}
        {HOSPITALS.map((h, i) => (
          <AnimatedSection key={h.name} delay={i * 0.12}>
            <HospitalCard hospital={h} />
          </AnimatedSection>
        ))}

        {/* ── Map CTA ── */}
        <AnimatedSection delay={0.25}>
          <MapCTA />
        </AnimatedSection>
      </div>
    </div>
  );
}

/* ── Sub-components ── */

function HospitalCard({ hospital: h }) {
  return (
    <div style={{
      background: "var(--white)", borderRadius: 28,
      padding: "40px 48px", marginBottom: 32,
      boxShadow: "var(--shadow-md)", border: "1px solid var(--border)",
      display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap",
      transition: "box-shadow 0.25s, transform 0.25s",
    }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "var(--shadow-lg)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "var(--shadow-md)"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      {/* Icon */}
      <div style={{
        width: 88, height: 88, borderRadius: 24, flexShrink: 0,
        background: `${h.color}18`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 44, border: `2px solid ${h.color}33`,
      }}>{h.icon}</div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 220 }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: h.color, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>
          {h.type}
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.2rem, 2vw, 1.7rem)",
          color: "var(--text-dark)", fontWeight: 700, marginBottom: 8,
        }}>{h.name}</h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 12 }}>📍 {h.location}</p>
        <p style={{ fontSize: 15, color: "var(--text-body)", lineHeight: 1.75, marginBottom: 20 }}>{h.desc}</p>
        <Button href={h.mapsUrl} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 13, padding: "9px 22px", display: "inline-flex" }}>
          🗺️ View on Map
        </Button>
      </div>
    </div>
  );
}

function MapCTA() {
  return (
    <div style={{
      background: "var(--grad-dark)",
      borderRadius: 24, padding: "48px 40px",
      textAlign: "center", color: "#fff",
    }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>🗺️</div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Find Us</h3>
      <p style={{ fontSize: 15, color: "rgba(255,255,255,0.75)", maxWidth: 440, margin: "0 auto 28px", lineHeight: 1.7 }}>
        MMI Narayana Multispeciality Hospital, Pachpedi Naka,
        Near Lalpur, Dhamtari Road, Raipur – 492001, Chhattisgarh
      </p>
      <Button
        href="https://maps.google.com/?q=MMI+Narayana+Multispeciality+Hospital+Raipur"
        target="_blank" rel="noopener noreferrer"
        variant="ghost"
      >
        Open in Google Maps →
      </Button>
    </div>
  );
}

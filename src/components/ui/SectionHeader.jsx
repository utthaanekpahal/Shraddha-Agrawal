// ──────────────────────────────────────────────────
//  components/ui/SectionHeader.jsx
//  Centered tag + title + subtitle block.
//  Props: tag, title, subtitle, light (bool for dark bg)
// ──────────────────────────────────────────────────
import AnimatedSection from "./AnimatedSection";

export default function SectionHeader({ tag, title, subtitle, light = false }) {
  return (
    <AnimatedSection className="section-header">
      {tag && (
        <p style={{
          fontSize: 13, fontWeight: 600, letterSpacing: 2,
          textTransform: "uppercase", marginBottom: 12,
          color: light ? "var(--accent)" : "var(--secondary)",
        }}>{tag}</p>
      )}
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
        fontWeight: 700, marginBottom: 16,
        color: light ? "#fff" : "var(--text-dark)",
      }}>{title}</h2>
      {subtitle && (
        <p style={{
          fontSize: 16, maxWidth: 520, margin: "0 auto", lineHeight: 1.7,
          color: light ? "rgba(255,255,255,0.7)" : "var(--text-muted)",
        }}>{subtitle}</p>
      )}
    </AnimatedSection>
  );
}

// ─────────────────────────────────────────────
//  components/sections/CTABanner.jsx
//  Full-width call-to-action section for home.
// ─────────────────────────────────────────────
import AnimatedSection from "../ui/AnimatedSection";
import Button from "../ui/Button";

export default function CTABanner({ setActive }) {
  return (
    <section style={{ background: "var(--white)", padding: "var(--section-pad)", textAlign: "center" }}>
      <AnimatedSection style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
          color: "var(--text-dark)", fontWeight: 700, marginBottom: 16,
        }}>
          Need Expert Anaesthesia Care?
        </h2>
        <p style={{ fontSize: 16, color: "var(--text-muted)", marginBottom: 32, lineHeight: 1.7 }}>
          Whether it's an elective procedure or an emergency, Dr. Agrawal
          provides world-class anaesthesia support tailored to your needs.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Button onClick={() => setActive("Appointment")}>📅 Contact Us</Button>
          <Button variant="outline" onClick={() => setActive("Contact")}>📞 Call Us</Button>
        </div>
      </AnimatedSection>
    </section>
  );
}

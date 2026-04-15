// ────────────────────────────────────────────────────
//  components/sections/FAQSection.jsx
//  Accordion FAQ used on the Services page.
// ────────────────────────────────────────────────────
import { useState } from "react";
import { FAQS } from "../../data/constants";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeader from "../ui/SectionHeader";

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section style={{ background: "var(--bg)", padding: "var(--section-pad)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionHeader tag="FAQ" title="Common Anaesthesia Questions" />

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {FAQS.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.07}>
              <FAQItem faq={faq} isOpen={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div style={{
      background: "var(--white)", borderRadius: "var(--radius-card)",
      border: `1px solid ${isOpen ? "var(--primary)" : "var(--border)"}`,
      overflow: "hidden", transition: "border-color 0.25s",
      boxShadow: isOpen ? "var(--shadow-md)" : "var(--shadow-sm)",
    }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%", padding: "20px 24px",
          background: "none", border: "none", textAlign: "left",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: 16, cursor: "pointer",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: "var(--text-dark)" }}>
          {faq.q}
        </span>
        <span style={{
          fontSize: 20, color: "var(--primary)",
          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.25s", flexShrink: 0,
        }}>+</span>
      </button>

      <div style={{
        maxHeight: isOpen ? 200 : 0,
        overflow: "hidden",
        transition: "max-height 0.35s ease",
      }}>
        <p style={{ padding: "0 24px 20px", fontSize: 15, color: "var(--text-body)", lineHeight: 1.75 }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}

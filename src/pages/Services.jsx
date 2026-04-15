// ─────────────────────────────────────────
//  pages/Services.jsx
// ─────────────────────────────────────────
import PageHero    from "../components/ui/PageHero";
import ServicesGrid from "../components/sections/ServicesGrid";
import FAQSection  from "../components/sections/FAQSection";

export default function Services() {
  return (
    <div style={{ paddingTop: 70 }}>
      <PageHero
        tag="WHAT WE OFFER"
        title="Anaesthesia & Critical Care Services"
        subtitle="Comprehensive anaesthesia solutions across surgical specialties — from routine procedures to the most complex cases."
      />
      <ServicesGrid />
      <FAQSection />
    </div>
  );
}

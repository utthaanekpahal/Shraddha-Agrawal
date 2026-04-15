// ──────────────────────────────────────────────────
//  components/ui/PageHero.jsx
//  Shared dark-gradient banner used on inner pages.
//  Props: tag, title, subtitle
// ──────────────────────────────────────────────────
import AnimatedSection from "./AnimatedSection";

export default function PageHero({ tag, title, subtitle }) {
  return (
    <div className="page-hero" style={{ paddingTop: 80 }}>
      <AnimatedSection>
        {tag && <p className="page-hero__tag">{tag}</p>}
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__sub">{subtitle}</p>}
      </AnimatedSection>
    </div>
  );
}

// ─────────────────────────────────────────
//  pages/Home.jsx
// ─────────────────────────────────────────
import HeroSection     from "../components/sections/HeroSection";
import StatsBar        from "../components/sections/StatsBar";
import ServicesGrid    from "../components/sections/ServicesGrid";
import WhyChooseSection from "../components/sections/WhyChooseSection";
import CTABanner       from "../components/sections/CTABanner";

export default function Home({ setActive }) {
  return (
    <>
      <HeroSection setActive={setActive} />
      <StatsBar />
      <ServicesGrid preview setActive={setActive} />
      <WhyChooseSection />
      <CTABanner setActive={setActive} />
    </>
  );
}

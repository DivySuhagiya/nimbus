import HeroSection from "../section/HeroSection";
import BentoGridSection from "../section/BentoGridSection";
import ThemeChangerSection from "../section/ThemeChangerSection";

import SwitchPlayGroundSection from "../section/SwitchPlayGroundSection";
import MarqueeSection from "../section/MarqueeSection";
import PurchaseSection from "../section/PurchaseSection";
import { Footer } from "../components/common/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BentoGridSection />
      <MarqueeSection id="1" />
      <SwitchPlayGroundSection />
      <MarqueeSection id="2" direction="Right" />
      <ThemeChangerSection />
      <MarqueeSection id="3" />
      <PurchaseSection />
      <Footer />
    </>
  );
}

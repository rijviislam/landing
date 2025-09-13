import CaseStudies from "./components/CaseStudies";
import Designs from "./components/Designs";
import Hero from "./components/Hero";
import PortfolioSlider from "./components/PortfolioSlider";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioSlider/>
      <Designs/>
      <CaseStudies/>
      <PricingSection/>
    </>
  );
}

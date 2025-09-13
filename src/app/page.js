import CaseStudies from "./components/CaseStudies";
import ClientSaying from "./components/ClientSaying";
import Designs from "./components/Designs";
import Footer from "./components/Footer";
import FromIdea from "./components/FromIdea";
import GotQuestion from "./components/GotQuestion";
import Hero from "./components/Hero";
import PortfolioSlider from "./components/PortfolioSlider";
import PricingSection from "./components/PricingSection";
import RealCustomer from "./components/RealCustomer";

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioSlider/>
      <Designs/>
      <CaseStudies/>
      <PricingSection/>
      <FromIdea/>
      <ClientSaying/>
      <GotQuestion/>
      <RealCustomer/>
      <Footer/>
    </>
  );
}

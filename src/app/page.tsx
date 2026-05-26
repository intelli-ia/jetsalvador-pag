import About from "@/components/About";
import HeroSection from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import { FinalCTASection } from "@/components/FinalCTA";
import FAQSection from "@/components/FAQ";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      {/* <SocialProof /> */}
      <About /> 
      <Services />
      <Gallery />
      <Testimonials />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}

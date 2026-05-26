import HeroSection from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import FAQSection from "@/components/FAQ";
import { FinalCTASection } from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SocialProof />
      <Services />
      <Gallery />
      <About />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}

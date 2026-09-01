import HeroSection from "./components/layout/hero";
import OcupandoEspaco from "./components/layout/ocupandoespaco";
import Comunicacao from "./components/layout/comunicacao";
import SocialMedias from "./components/layout/socialMedia";
import Processo from "./components/layout/processo";
import CTAFinal from "./components/layout/ctaFinal";
import Footer from "./components/layout/footer";

export default function Home() {
  return (
    <div className="py-[40px]">
      <HeroSection />
      <OcupandoEspaco />
      <Comunicacao />
      <SocialMedias />
      <Processo />
      <CTAFinal />
      <Footer />
    </div>
  );
}

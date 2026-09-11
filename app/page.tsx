import HeroSection from "./components/layout/hero";
import OcupandoEspaco from "./components/layout/ocupandoespaco";
import Servicos from "./components/layout/servicos";
import Processo from "./components/layout/processo";
import CTAFinal from "./components/layout/ctaFinal";
import Footer from "./components/layout/footer";
import Campanhas from "./components/layout/campanhas";

export default function Home() {
  return (
    <div className="py-[40px]">
      <HeroSection />
      <OcupandoEspaco />
      <Servicos />
      <Campanhas />
      <Processo />
      <CTAFinal />
      <Footer />
    </div>
  );
}

import HeroSection from "./components/layout/hero";
import OcupandoEspaco from "./components/layout/ocupandoespaco";
import Comunicacao from "./components/layout/comunicacao";
import SocialMedias from "./components/layout/socialMedia";
import Processo from "./components/layout/processo";

export default function Home() {
  return (
    <div className="py-[40px]">
      <HeroSection />
      <OcupandoEspaco />
      <Comunicacao />
      <SocialMedias />
      <Processo />
    </div>
  );
}

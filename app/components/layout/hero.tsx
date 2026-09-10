import IconLudikaBorda from "@/public/assets/LogoLudikaBorda";
import SocialMedias from "../ui/socialMedia";
import Chaveiros from "./chaveiros";
import BotaoPadrao from "../ui/button";

export default function HeroSection() {
  return (
    <div
      className="relative flex flex-col bg-white p-[20px] rounded-[15px] pb-[120px] marginPadrao
      shadow-[inset_0px_-80px_40px_-40px_rgba(254,242,0,0.3),_0px_4px_105px_0px_#E82682]"
    >
      {/*HEADER*/}
      <div className="flex flex-row justify-between items-center gap-[40px] pb-[40px]">
        <IconLudikaBorda color="black" size={75} />
        <div className="h-[2px] w-full bg-black" />
      </div>
      {/*CONTEUDO */}
      <div className="flex flex-col items-center">
        <h1 className="fonteTijolo text-[38px] text-center leading-[50px] pb-[20px]">
          <span className="font-semibold">Comunicação</span> que gera movimento.
          Estratégias que geram
          <span className="text-[#EE2682] font-semibold"> resultado</span>.
        </h1>
        <p className="text-center fonteNoto font-light text-lg pb-[20px]">
          A Ludika desenvolve estratégias de{" "}
          <strong className="font-bold fonteTijolo underline uppercase">
            <br />
            Social Media e Campanhas de Incentivo
          </strong>{" "}
          para empresas que querem fortalecer sua marca, engajar pessoas e
          alcançar melhores resultados.
        </p>
        <BotaoPadrao
          text={`QUERO CONVERSAR\n COM A LUDIKA`}
          className="whitespace-pre-line text-2xl text-center mb-[40px]"
        />
        <SocialMedias circleColor="#383D38" iconColor="#ffffff" size={50} />
      </div>
      <Chaveiros className="absolute left-1/2 -translate-x-1/2 bottom-0" />
    </div>
  );
}

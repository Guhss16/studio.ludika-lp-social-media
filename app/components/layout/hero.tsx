import Image from "next/image";
import IconLudikaBorda from "@/public/assets/LogoLudikaBorda";
import SocialMedias from "../ui/socialMedia";
import Chaveiros from "@/public/assets/ChaveirosLudika.png";

export default function HeroSection() {
  return (
    <div
      className="flex flex-col bg-white p-[20px] rounded-[15px] pb-[100px]
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
        <p className="text-center fonteTijolo font-light text-lg pb-[20px]">
          A Ludika desenvolve estratégias de Social Media e Campanhas de
          Incentivo para empresas que querem fortalecer sua marca, engajar
          pessoas e alcançar melhores resultados.
        </p>
        <button className="mb-[20px] cursor-pointer bg-[#FEF200] fonteTijolo font-semibold px-[40px] py-[20px] border-2 text-2xl">
          QUERO CONVERSAR
          <br /> COM A LUDIKA
        </button>
        <SocialMedias circleColor="#383D38" iconColor="#ffffff" size={50} />
        <Image
          src={Chaveiros}
          alt="Chaveiros da Ludika"
          className="absolute left-1/2 -translate-x-1/2 bottom-[-230] w-[120%] h-auto max-w-none"
          priority
        />
      </div>
    </div>
  );
}

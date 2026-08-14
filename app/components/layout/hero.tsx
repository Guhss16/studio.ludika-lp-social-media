import IconLudikaBorda from "@/public/assets/LogoLudikaBorda";
import SocialMedias from "../ui/socialMedia";

export default function HeroSection() {
  return (
    <div className="flex flex-col bg-white p-[20px] rounded-[15px]">
      {/*HEADER*/}
      <div className="flex flex-row justify-between items-center gap-[40px]">
        <IconLudikaBorda color="black" size={75} />
        <div className="h-[2px] w-full bg-black" />
      </div>
      {/*CONTEUDO */}
      <div className="flex flex-col items-center">
        <h1 className="fonteTijolo text-[40px] text-center leading-[50px]">
          <span className="font-semibold">Comunicação</span> que gera movimento.
          Estratégias que geram{" "}
          <span className="text-[#EE2682] font-semibold">resultado</span>.
        </h1>
        <p className="text-center fonteTijolo font-light text-lg">
          A Ludika desenvolve estratégias de Social Media e Campanhas de
          Incentivo para empresas que querem fortalecer sua marca, engajar
          pessoas e alcançar melhores resultados.
        </p>
        <button className="cursor-pointer bg-[#FEF200] fonteTijolo font-semibold px-[40px] py-[20px] border-2 text-2xl">
          QUERO CONVERSAR
          <br /> COM A LUDIKA
        </button>
        <SocialMedias circleColor="#383D38" iconColor="#ffffff" size={80} />
      </div>
    </div>
  );
}

"use client";

import IconLudikaBorda from "@/public/assets/LogoLudikaBorda";
import SocialMedias from "../ui/socialMedia";
import Chaveiros from "./chaveiros";
import BotaoPadrao from "../ui/button";
import LogoLudika from "@/public/assets/LogoLudika";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="relative flex flex-col bg-white p-[20px] rounded-[15px] pb-[120px] lg:pb-[80px] marginPadrao
      lg:overflow-hidden
      shadow-[inset_0px_-80px_40px_-40px_rgba(254,242,0,0.3),_0px_4px_105px_0px_#E82682] lg:max-w-[95%] 2xl:max-w-[70%]"
      >
        {/*HEADER*/}
        <div className="flex flex-row justify-between items-center gap-[40px] pb-[40px]">
          <LogoLudika width={150} color1="black" />
          <div className="h-[2px] w-full bg-black" />
        </div>

        {/*CONTEUDO */}
        <div className="flex flex-col items-center lg:items-start lg:gap-[20px] lg:px-[40px]">
          <h1 className="fonteTijolo text-4xl lg:text-6xl text-center leading-[50px] lg:leading-[70px] pb-[20px] lg:text-left lg:max-w-[70%]">
            <span className="font-semibold">Comunicação</span> que gera
            movimento. Estratégias que geram
            <span className="text-[#EE2682] font-semibold"> resultado</span>.
          </h1>

          <p className="text-center fonteNoto font-light text-[17px] lg:text-2xl lg:w-[90%] sm:text-[22px] sm:px-2 pb-[20px] lg:text-left lg:max-w-[80%] xl:text-3xl">
            A Ludika desenvolve estratégias de{" "}
            <strong className="font-bold fonteTijolo underline uppercase">
              <br />
              Social Media e Campanhas de Incentivo
            </strong>{" "}
            para empresas que querem fortalecer sua marca, engajar pessoas e
            alcançar melhores resultados.
          </p>
          <div className="flex flex-col xl:ml-2 items-center w-fit">
            <BotaoPadrao
              text={`QUERO CONVERSAR\n COM A LUDIKA`}
              className="whitespace-pre-line text-2xl text-center mb-[40px] lg:px-[60px] lg:py-[20px] lg:text-3xl"
            />
            <SocialMedias circleColor="#383D38" iconColor="#ffffff" size={50} />
          </div>
          <Chaveiros
            className="absolute left-1/2 -translate-x-1/2 top-[85%] sm:-bottom-60 md:-bottom-70 lg:-bottom-100
        lg:left-auto lg:-right-10 2xl:right-0 lg:translate-x-0 lg:top-10 lg:rotate-30 lg:w-[400px] xl:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}

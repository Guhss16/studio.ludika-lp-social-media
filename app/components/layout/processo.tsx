"use client";

import Image from "next/image";
import StepsComp from "../ui/steps";
import AdesivoAviao from "@/public/assets/adesivoAviao.png";
import CaneteLudika from "@/public/assets/Caneta.png";
import Papel from "@/public/assets/papel.png";

export default function Processo() {
  return (
    <div className="flex flex-col">
      <div
        className="relative mt-[50px] bg-cover lg:bg-contain lg:bg-no-repeat lg:pt-[40px] bg-center z-10 pb-[18%] sm:pb-[140px] sm:pt-[20px]"
        style={{ backgroundImage: `url(${Papel.src})` }}
      >
        <StepsComp />

        <div
          className="absolute bottom-[-10%] left-[-8%]
          w-[65%] max-w-[300px]
          sm:bottom-[-4%] sm:left-[-6%]
          lg:bottom-[-1%] lg:left-[4%]
          xl:bottom-[-8%] xl:left-[7%] xl:max-w-[350px]
          2xl:bottom-[-8%] 2xl:left-[13%] 
          fs:left-[20%]
          pointer-events-none"
        >
          <Image
            src={AdesivoAviao}
            alt="Adesivo Avião Ludika"
            className="w-full h-auto rotate-10"
          />
        </div>

        <Image
          src={CaneteLudika}
          alt="Caneta Ludika"
          className="absolute -rotate-20 w-[50%]
          top-[-10%] right-[-30%] 
          sm:w-[30%] sm:top-[-5%] sm:right-[-13%]
          lg:right-[-4%] lg:max-w-[250px]
          xl:right-[3%] 
          2xl:right-[13%]
          fs:right-[20%]
          "
        />
      </div>
    </div>
  );
}

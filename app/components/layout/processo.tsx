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
        className="relative mt-[50px] bg-cover bg-center z-10"
        style={{ backgroundImage: `url(${Papel.src})` }}
      >
        <StepsComp />

        <Image
          src={AdesivoAviao}
          alt="Adesivo Avião Ludika"
          className="absolute bottom-[-10%] left-[-5%] rotate-10 w-[50%]"
        />
        <Image
          src={CaneteLudika}
          alt="Caneta Ludika"
          className="absolute top-[-10%] right-[-30%] -rotate-20 w-[50%]"
        />
      </div>
    </div>
  );
}

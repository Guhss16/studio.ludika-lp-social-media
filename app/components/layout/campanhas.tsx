import Image from "next/image";
import FitaSM from "@/public/assets/FitaSocialMedia.png";
import FitaCDI from "@/public/assets/FitaCDI.png";
import AnimacaoEntrada from "@/app/animations/animacaoDeEntrada";
import { Slider } from "../ui/image-auto-slider";

export default function Campanhas() {
  return (
    <div className="flex flex-col justify-center overflow-hidden gap-[20px]">
      <div className="bg-[#DCDDC3] py-[45px] shadow-[inset_0_20px_4px_rgba(0,0,0,0.30)] border-t-2 border-b-2 mt-[30px]">
        <Slider />
      </div>

      <h3 className="fonteTijolo text-white uppercase font-normal text-2xl underline text-center">
        CAMPANHAS DE INCENTIVO
      </h3>

      <h2 className="text-white fonteTijolo text-center text-xl uppercase marginPadrao">
        CRIAMOS CAMPANHAS QUE{" "}
        <span className="text-amareloPrincipal font-semibold">CONECTAM,</span>{" "}
        <span className="text-amareloPrincipal  underline">ENGAJAM</span> E
        <span className="italic  font-light text-amareloPrincipal">
          {" "}
          GERAM RESULTADOS,{" "}
        </span>
        transformando objetivos em experiências que movimentam pessoas.
      </h2>

      <div className="relative">
        <ul className="list-disc list-inside text-center text-white font fonteTijolo text-xl uppercase italic">
          <li>Conceito da campanha</li>
          <li>Nome e identidade visual</li>
          <li>Key Visual</li>
          <li>Materiais digitais e impressos</li>
          <li>Landing Pages</li>
          <li>Vídeos e Motion</li>
          <li>Comunicação Interna</li>
          <li>Apresentações</li>
          <li>Materiais de acompanhamento e premiação</li>
        </ul>
      </div>
    </div>
  );
}

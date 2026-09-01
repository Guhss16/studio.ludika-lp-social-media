import Image from "next/image";
import FitaSM from "@/public/assets/FitaSocialMedia.png";
import FitaCDI from "@/public/assets/FitaCDI.png";
import AnimacaoEntrada from "@/app/animations/animacaoDeEntrada";
import { Slider } from "../ui/image-auto-slider";

export default function SocialMedias() {
  return (
    <div className="flex flex-col justify-center overflow-hidden gap-[20px]">
      <AnimacaoEntrada
        direction="horizontal"
        reverse
        distance={300}
        duration={1.5}
      >
        <Image
          src={FitaSM}
          alt="Fita Social Media da Ludika"
          priority
          className="p-3"
        />
      </AnimacaoEntrada>

      <div className="relative">
        <ul className="list-disc list-inside text-center text-white font-medium fonteTijolo text-xl uppercase">
          <li>Planejamento estratégico</li>
          <li>Conteúdo para redes sociais</li>
          <li>Design e Motion</li>
          <li>Produção de vídeos</li>
          <li>Copywriting</li>
          <li>Gestão de conteúdo</li>
          <li>Relatórios de desempenho</li>
        </ul>
      </div>
      <div className="bg-[#DCDDC3] py-[45px] shadow-[inset_0_20px_4px_rgba(0,0,0,0.30)] border-t-2 border-b-2 mt-[30px]">
        <Slider />
      </div>

      <h2 className="text-white fonteTijolo text-center text-xl uppercase marginPadrao">
        CRIAMOS CAMPANHAS QUE{" "}
        <span className="text-rosaPrincipal font-semibold underline">
          CONECTAM,
        </span>{" "}
        <span className="text-amareloPrincipal underline">ENGAJAM</span> E
        <span className="italic underline font-light"> GERAM RESULTADOS, </span>
        transformando objetivos em experiências que movimentam pessoas.
      </h2>
      {/**campanhas de incentivo */}
      <AnimacaoEntrada direction="horizontal" distance={300} duration={1.5}>
        <Image
          src={FitaCDI}
          alt="Fita Campanhas de Incentivo da Ludika"
          priority
          className="p-3"
        />
      </AnimacaoEntrada>

      <div className="relative">
        <ul className="list-disc list-inside text-center text-white font-medium fonteTijolo text-xl uppercase">
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

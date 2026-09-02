import AnimacaoEntrada from "@/app/animations/animacaoDeEntrada";
import Image from "next/image";
import FitaSM from "@/public/assets/FitaSocialMedia.png";

export default function SocialMedia() {
  return (
    <div className="mt-[80px] text-center">
      <div className="flex flex-col gap-[30px] marginPadrao">
        <p className="text-center">
          <span className="bg-black text-white box-decoration-clone px-4 py-2 text-[30px] fonteTijolo font-semibold">
            COMUNICAÇÃO COM ESTRATÉGIA DO
            <br />
            COMEÇO AO FIM.
          </span>
        </p>

        <p className="fonteTijolo text-white uppercase font-light text-[16px]">
          Criamos projetos que unem criatividade, estratégia e tecnologia para
          fortalecer marcas, aproximar pessoas e gerar resultados.
        </p>
      </div>

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
        <ul className="list-disc list-inside text-center text-white font fonteTijolo text-xl uppercase italic">
          <li>Planejamento estratégico</li>
          <li>Conteúdo para redes sociais</li>
          <li>Design e Motion</li>
          <li>Produção de vídeos</li>
          <li>Copywriting</li>
          <li>Gestão de conteúdo</li>
          <li>Relatórios de desempenho</li>
        </ul>
      </div>
    </div>
  );
}

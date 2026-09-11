import TituloSection from "../ui/tituloSection";

export default function Servicos() {
  return (
    <div className="flex flex-col items-center gap-[40px] mt-[50px] text-center marginPadrao">
      <TituloSection className="text-center uppercase bg-black text-rosaPrincipal box-decoration-clone px-4 py-2 font-semibold max-w-[400px]">
        Criatividade para fortalecer marcas e gerar resultados.
      </TituloSection>

      <div className="flex flex-col gap-[10px]">
        <h3 className="fonteTijolo text-white uppercase font-normal text-2xl underline ">
          REDES SOCIAIS
        </h3>
        <p className="fonteNoto text-white uppercase font-normal text-lg">
          Criatividade para fortalecer marcas e gerar resultados.
        </p>
        <div className="relative">
          <ul className="list-inside text-center text-white font fonteNoto font-light tracking-[2px] text-lg uppercase italic marker:text-amareloPrincipal">
            <li>
              <span className="text-amareloPrincipal">➜</span> Copywriting
            </li>
            <li>
              <span className="text-amareloPrincipal">➜</span> Design e Motion
            </li>
            <li>
              <span className="text-amareloPrincipal">➜</span> Conteúdo digital
            </li>
            <li>
              <span className="text-amareloPrincipal">➜</span> Produção de
              vídeos
            </li>
            <li>
              <span className="text-amareloPrincipal">➜</span> Gestão de
              conteúdo
            </li>
            <li>
              <span className="text-amareloPrincipal">➜</span> Planejamento
              estratégico
            </li>
            <li>
              <span className="text-amareloPrincipal">➜</span> Relatórios de
              desempenho
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

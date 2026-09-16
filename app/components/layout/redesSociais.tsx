import TituloSection from "../ui/tituloSection";
import ListItem from "../ui/listItem";

export default function Servicos() {
  return (
    <div className="flex flex-col items-center gap-[60px] lg:gap-[80px] mt-[40px] lg:mt-[120px] text-center marginPadrao">
      <TituloSection className="text-center uppercase bg-black text-rosaPrincipal box-decoration-clone px-4 py-2 font-semibold w-fit lg:max-w-[70%] xl:max-w-[100%] shadow-xl">
        Comunicação com Estratégia do Planejamento a Entrega.
      </TituloSection>

      <div className="flex flex-col gap-[10px] items-center">
        <h3 className="fonteTijolo text-amareloPrincipal uppercase font-normal text-3xl underline bg-black w-fit px-4 py-2 box-decoration-clone -rotate-2 mb-5 shadow-xl">
          REDES SOCIAIS
        </h3>
        <p className="fonteNoto text-white uppercase font-normal text-lg">
          Criatividade para fortalecer marcas e gerar resultados.
        </p>
        <div className="relative">
          <ul className="columns-1 lg:columns-2 list-inside text-center text-black fonteNoto gap-0 tracking-[2px] text-base lg:text-lg uppercase italic marker:text-rosaPrincipal">
            <ListItem>
              <span className="text-rosaPrincipal">➜</span> Copywriting
            </ListItem>
            <ListItem>
              <span className="text-rosaPrincipal">➜</span> Design e Motion
            </ListItem>
            <ListItem>
              <span className="text-rosaPrincipal">➜</span> Conteúdo digital
            </ListItem>
            <ListItem>
              <span className="text-rosaPrincipal">➜</span> Produção de vídeos
            </ListItem>
            <ListItem>
              <span className="text-rosaPrincipal">➜</span> Gestão de conteúdo
            </ListItem>
            <ListItem>
              <span className="text-rosaPrincipal">➜</span> Planejamento
              estratégico
            </ListItem>
          </ul>
          <ul>
            <ListItem className="bg-[#DCDDC3] p-2 border-2 border-black shadow-lg  list-inside text-center text-black fonteNoto tracking-[2px] text-base lg:text-lg uppercase italic marker:text-rosaPrincipal">
              <span className="text-rosaPrincipal">➜</span> Relatórios de
              desempenho
            </ListItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

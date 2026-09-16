import ListItem from "../ui/listItem";

export default function Campanhas() {
  return (
    <div className="flex flex-col justify-center overflow-hidden gap-[20px] items-center mt-[40px] marginPadrao text-center mb-[80px]">
      <h3 className="fonteTijolo text-amareloPrincipal uppercase font-normal text-3xl underline bg-black w-fit px-4 py-2 box-decoration-clone -rotate-2 mt-4 mb-5 shadow-xl">
        CAMPANHAS DE INCENTIVO
      </h3>

      <p className="fonteNoto text-white uppercase font-normal text-lg max-w-[70%]">
        conectar, engajar e gerar resultados. transformando objetivos em
        experiências.
      </p>

      <div className="relative flex flex-col items-center">
        <ul className="columns-1 lg:columns-2 list-inside text-center text-black fonteNoto gap-0 tracking-[2px] text-base lg:text-lg uppercase italic marker:text-rosaPrincipal w-fit">
          <ListItem>
            <span className="text-rosaPrincipal">➜</span> Conceito da campanha
          </ListItem>
          <ListItem>
            <span className="text-rosaPrincipal">➜</span> Nome e identidade
            visual
          </ListItem>
          <ListItem>
            <span className="text-rosaPrincipal">➜</span> Key Visual
          </ListItem>
          <ListItem>
            <span className="text-rosaPrincipal">➜</span> Materiais digitais e
            impressos
          </ListItem>
          <ListItem>
            <span className="text-rosaPrincipal">➜</span> Landing Pages
          </ListItem>
          <ListItem>
            <span className="text-rosaPrincipal">➜</span> Vídeos e Motion
          </ListItem>
          <ListItem>
            <span className="text-rosaPrincipal">➜</span> Comunicação Interna
          </ListItem>
          <ListItem>
            <span className="text-rosaPrincipal">➜</span> Apresentações
          </ListItem>
        </ul>
        <ul className="list-inside text-center text-black fonteNoto gap-0 tracking-[2px] text-base lg:text-lg uppercase italic marker:text-rosaPrincipal">
          <ListItem>
            <span className="text-rosaPrincipal">➜</span> Materiais de
            acompanhamento e premiação
          </ListItem>
        </ul>
      </div>
    </div>
  );
}

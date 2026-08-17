import AccordionGallery from "../ui/gallery";

export default function Comunicacao() {
  return (
    <div className="mt-[80px] text-center">
      <div className="flex flex-col gap-[30px] marginPadrao">
        <p className="text-center">
          <p className="text-center">
            <span className="bg-black text-white box-decoration-clone px-4 py-2 text-[30px] fonteTijolo font-semibold">
              COMUNICAÇÃO COM ESTRATÉGIA DO
              <br />
              COMEÇO AO FIM.
            </span>
          </p>
        </p>

        <p className="fonteTijolo text-white uppercase font-light text-[16px]">
          Criamos projetos que unem criatividade, estratégia e tecnologia para
          fortalecer marcas, aproximar pessoas e gerar resultados.
        </p>
      </div>
      <div className="bg-[#DCDDC3] py-[45px] shadow-[inset_0_20px_4px_rgba(0,0,0,0.30)] border-t-2 border-b-2 mt-[30px]">
        <AccordionGallery
          radius={0}
          textColor="#EE2682"
          className="fonteTijolo"
          accentColor="#FEF200"
        />
      </div>
    </div>
  );
}

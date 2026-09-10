import TituloSection from "../ui/tituloSection";

export default function OcupandoEspaco() {
  return (
    <div className="mt-[200px] text-white text-center text-xl leading-[27px] flex flex-col gap-[40px] pb-4 flex flex-col items-center lg:gap-[50px]">
      <TituloSection className="marginPadrao">
        Sua comunicação está{" "}
        <span className="text-[#EE2682]">gerando resultados</span> ou apenas
        <span className="text-[#FEF200] underline font-semibold">
          {" "}
          ocupando espaço?
        </span>
      </TituloSection>

      <div className="bg-[#EE2682] flex flex-row rounded-[100px] relative border-1 border-black items-center marginPadrao md:w-[60%] w-[90%] fonteTijolo">
        <div className="w-[90%] bg-[#FEF200] text-black py-[10px] border-1 rounded-[100px] text-lg">
          SUA COMUNICAÇÃO ATUAL
        </div>
        <p className=" pr-[5px] lg:pr-0">100%</p>
      </div>

      <p className=" text-lg mx-[15px] fonteNoto font-light px-[20px] max-w-[1000px]">
        Muitas empresas publicam nas redes sociais{" "}
        <span className="font-extrabold underline uppercase px-1">
          sem estratégia
        </span>{" "}
        ou criam campanhas que{" "}
        <span className="font-extrabold underline uppercase ">não engajam</span>{" "}
        as equipes. Sem uma comunicação consistente, a marca perde relevância e
        oportunidades.
      </p>

      <div className="bg-[#383D38] border-1 border-white rotate-357 p-3 w-[120%] sm:ml-[-60px] lg:mt-[10px]">
        <p className="text-white text-xl md:text-2xl underline fonteTijolo">
          A boa notícia é que isso pode mudar.
        </p>
      </div>
    </div>
  );
}

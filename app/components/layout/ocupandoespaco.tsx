export default function OcupandoEspaco() {
  return (
    <div className="mt-[200px] text-white fonteTijolo text-center text-xl leading-[27px] flex flex-col gap-[40px] pb-4 flex flex-col items-center lg:gap-[50px]">
      <h2
        className="text-3xl marginPadrao
      md:text-4xl md:w-[75%] xl:w-[45%] lg:text-5xl
      "
      >
        Sua comunicação está{" "}
        <span className="text-[#EE2682]">gerando resultados</span> ou apenas
        <span className="text-[#FEF200] underline font-semibold">
          {" "}
          ocupando espaço?
        </span>
      </h2>

      <div className="bg-[#EE2682] flex flex-row rounded-[100px] relative border-1 border-black items-center marginPadrao md:w-[60%]">
        <div className="w-[90%] bg-[#FEF200] text-black py-[10px] border-1 rounded-[100px] text-lg">
          SUA COMUNICAÇÃO ATUAL
        </div>
        <p className=" pr-[5px] lg:pr-0">100%</p>
      </div>

      <p className="font-light text-lg marginPadrao lg:w-[80%] xl:w-[58%] 2xl:w-[43%]">
        Muitas empresas publicam nas redes sociais sem estratégia ou criam
        campanhas que não engajam as equipes. Sem uma comunicação consistente, a
        marca perde relevância e oportunidades.
      </p>

      <div className="bg-[#383D38] border-1 border-white rotate-357 p-3 w-[120%] ml-[-30px] sm:ml-[-60px] lg:mt-[10px]">
        <p className="text-white text-xl md:text-2xl underline">
          A boa notícia é que isso pode mudar.
        </p>
      </div>
    </div>
  );
}

export default function OcupandoEspaco() {
  return (
    <div className="mt-[200px] text-white fonteTijolo text-center text-[18px] leading-[27px] flex flex-col gap-[40px]">
      <h2 className="text-[34px] marginPadrao">
        Sua comunicação está{" "}
        <span className="text-[#EE2682]">gerando resultados</span> ou apenas
        <span className="text-[#FEF200] underline font-semibold">
          {" "}
          ocupando espaço?
        </span>
      </h2>

      <div className="bg-[#EE2682] flex flex-row rounded-[100px] relative border-1 border-black items-center marginPadrao">
        <div className="w-[90%] bg-[#FEF200] text-black py-[10px] border-1 rounded-[100px]">
          SUA COMUNICAÇÃO ATUAL
        </div>
        <p className=" pr-[5px]">100%</p>
      </div>

      <p className="font-light text-[16px] marginPadrao">
        Muitas empresas publicam nas redes sociais sem estratégia ou criam
        campanhas que não engajam as equipes. Sem uma comunicação consistente, a
        marca perde relevância e oportunidades.
      </p>

      <div className="bg-[#383D38] border-1 border-white rotate-357 p-3">
        <p className="text-white text-[20px] underline">
          A boa notícia é que isso pode mudar.
        </p>
      </div>
    </div>
  );
}

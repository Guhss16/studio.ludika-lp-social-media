import ListaInfinita from "../ui/listaInfinita";
import BotaoPadrao from "../ui/button";

export default function CTAFinal() {
  return (
    <div className="flex flex-col mt-[80px]">
      <div>
        <h2 className=" bg-black fonteTijolo py-1 text-white uppercase text-center">
          Soluções ideais para empresas que desejam:
        </h2>
        <div className="bg-rosaPrincipal py-[5px]">
          <ListaInfinita
            items={[
              "✔ Fortalecer a marca",
              "✔ Melhorar a presença digital",
              "✔ Gerar novas oportunidades",
              "✔ Engajar colaboradores",
              "✔ Criar campanhas mais eficientes",
            ]}
            direction="horizontal"
            speed={50}
            gap={20}
            visibleItems={3}
            className="text-white uppercase fonteTijolo text-[22px]"
          />
        </div>
      </div>
      <div className="marginPadrao mt-[20px] flex flex-col gap-[10px]">
        <h2 className="font-swanky text-white text-[40px] -rotate-3 pb-[10px]">
          Vamos{" "}
          <span className="text-rosaPrincipal">
            <span className=" underline decoration-2">Conversar</span> ?
          </span>
        </h2>
        <p className="text-white fonteTijolo font-light text-xl">
          Grandes resultados costumam começar com uma boa estratégia. Se você
          quer fortalecer sua marca, engajar sua equipe ou desenvolver uma
          comunicação mais eficiente, a Ludika está pronta para dar o primeiro
          passo com você.
        </p>
        <h3 className="text-white tracking-tight uppercase fonteTijolo font-semibold text-[22px]">
          Vamos movimentar sua marca.
        </h3>
        <BotaoPadrao text="Falar com a Ludika!" />
      </div>
    </div>
  );
}

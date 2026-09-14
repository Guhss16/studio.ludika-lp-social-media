import ListaInfinita from "../ui/listaInfinita";
import BotaoPadrao from "../ui/button";
import TextoSection from "../ui/textSection";
import AnimatedText from "../ui/animatedText";

export default function CTAFinal() {
  return (
    <div className="flex flex-col mt-[80px] sm:mt-[120px]">
      <div>
        <h2 className="bg-black fonteTijolo py-1 text-white uppercase text-center">
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
      <div className="marginPadrao pt-[40px] sm:pt-[40px] lg:pt-[60px] flex flex-col gap-[20px] sm:gap-[35px] lg:gap-[40px] xl:gap-[50px] lg:text-center lg:items-center">
        <h2
          className="font-swanky text-white -rotate-3
        text-4xl md:text-6xl sm:text-5xl xl:text-7xl"
        >
          Vamos{" "}
          <span className="text-rosaPrincipal">
            <span className=" underline decoration-2">Conversar</span> ?
          </span>
        </h2>
        <TextoSection className="text-white lg:max-w-[800px]">
          Grandes resultados costumam começar com uma boa estratégia.
          <br className="hidden sm:block" /> Se você quer fortalecer sua marca,
          engajar sua equipe ou desenvolver uma comunicação mais eficiente, a{" "}
          <strong className="uppercase fonteTijolo underline text-amareloPrincipal">
            Ludika
          </strong>{" "}
          está pronta para dar o primeiro passo com você.
        </TextoSection>
        <AnimatedText
          text="Vamos movimentar sua marca!"
          typingSpeed={50}
          className="text-white uppercase tracking-[2px] fonteTijolo sm:font-semibold text-2xl md:text-3xl"
        />
        <BotaoPadrao
          className="md:px-[30px] md:py-[20px] lg:px-[40px] lg:py-[15px] 
          md:text-2xl lg:text-xl"
          text="Falar com a Ludika!"
        />
      </div>
    </div>
  );
}

"use client";

export default function StepsComp() {
  const steps = [
    {
      title: "Diagnóstico",
      description: "Entendemos seu negócio e seus objetivos.",
    },
    { title: "Estratégia", description: "Planejamos a melhor solução." },
    { title: "Criação", description: "Produzimos todos os materiais." },
    {
      title: "Acompanhamento",
      description: "Monitoramos e evoluímos os resultados.",
    },
  ];

  return (
    <div className="w-full px-4 py-20 flex items-center justify-center flex-col">
      <h2 className="marginPadrao text-left relative mb-5 text-black font-swanky uppercase text-[33px] sm:text-4xl md:text-5xl lg:text-6xl w-fit -rotate-[20]">
        *nosso processo*
      </h2>
      <div className="w-full max-w-4xl flex flex-col md:justify-between gap-3 sm:gap-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:flex-1 relative"
          >
            {/* círculo */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-black bg-rosaPrincipal text-white font-bold">
              {index + 1}
            </div>

            {/* texto */}
            <div className="mt-2 text-center md:mt-4 flex flex-col gap-2]">
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-10 font-swanky tracking-[5] underline">
                {step.title}
              </div>
              <div className="text-base sm:text-lg lg:text-xl text-gray-10 fonteTijolo font-light">
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

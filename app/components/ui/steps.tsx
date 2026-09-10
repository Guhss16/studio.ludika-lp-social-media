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
      <h2 className="marginPadrao text-left relative mb-5 text-black font-swanky uppercase text-[33px] sm:text-4xl md:text-[40px] w-fit -rotate-[20]">
        *nosso processo*
      </h2>
      <div className="w-full max-w-4xl flex flex-col lg:flex-row md:justify-between md:gap-5">
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
            <div className="mt-2 text-center md:mt-4 flex flex-col">
              <div className="text-[25px] font-semibold text-gray-10 font-swanky tracking-[5] underline">
                {step.title}
              </div>
              <div className="text-[16px] text-gray-10 fonteTijolo font-light">
                {step.description}
              </div>
            </div>

            {/* seta para próxima etapa */}
            {index < steps.length - 1 && (
              <>
                {/* Mobile: seta para baixo */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:hidden w-6 h-6 text-rosaPrincipal my-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m0 0l-6-6m6 6l6-6"
                  />
                </svg>

                {/* Desktop: seta para direita */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden md:block absolute top-5 left-full w-6 h-6 text-rosaPrincipal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 12h16m0 0l-6-6m6 6l-6 6"
                  />
                </svg>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

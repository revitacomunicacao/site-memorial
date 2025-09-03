import icon1 from "@/assets/icone-1a.avif";
import icon2 from "@/assets/icone-2a.avif";
import icon3 from "@/assets/icone-3a.avif";
import icon4 from "@/assets/icone-4a.avif";
import icon5 from "@/assets/icone-6a.avif";
import icon6 from "@/assets/icone-7a.avif";

export const BlocoTres = () => {
  const items = [
    {
      icon: icon2,
      text: "Aquisição que atenderá a diversas gerações da família.",
    },
    {
      icon: icon4,
      text: "Melhor planejamento do fluxo de pagamentos do jazigo, evitando altos gastos para a família nos momentos mais difíceis.",
    },
    {
      icon: icon1,
      text: "Mais tranquilidade e tempo para escolhas conscientes em relação à cerimônia e homenagem ao familiar.",
    },
    {
      icon: icon3,
      text: "Equipe pronta para apoiá-lo e orientá-lo em todas as decisões.",
    },
    {
      icon: icon6,
      text: "Possibilidade de parcelamento em até 60x.",
    },
    {
      icon: icon5,
      text: "Acessibilidade e segurança.",
    },
  ];

  return (
    <section className="w-full bg-[#a9cd48] py-8 sm:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 flex flex-col justify-center items-center">
        {/* Título */}
        <div className="text-center bg-[#a9cd48] w-fit -mb-8 sm:-mb-[45px] z-20 px-3 sm:px-5">
          <h2 className="text-xl sm:text-2xl lg:text-[36px] text-[#355b39] leading-tight font-heebo">
            Por que investir em
          </h2>
          <h3 className="text-xl sm:text-2xl lg:text-[36px] text-[#355b39] -mt-1 sm:-mt-2 leading-tight font-heebo">
            um jazigo familiar?
          </h3>
        </div>

        {/* Caixa com borda */}
        <div className="relative border-[#355b39] border-2 rounded-md bg-[#a9cd48] p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-y-16 sm:gap-x-12 pt-12 sm:pt-20">
            {items.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <img
                  src={item.icon}
                  alt="ícone"
                  className="h-16 w-16 sm:h-38 sm:w-38 object-contain flex-shrink-0"
                />
                <p className="text-sm sm:text-base lg:text-[18px] text-white leading-relaxed text-center sm:text-left">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Botão Saiba mais */}
          <div className="flex justify-center mt-8 sm:mt-10">
            <button
              type="button"
              className="rounded-full bg-[#34893d] border-2 border-[#355b39] text-white px-8 sm:px-12 lg:px-20 py-2 sm:py-3 -mb-8 sm:-mb-[47px] text-base sm:text-lg lg:text-xl shadow-md hover:opacity-90 transition font-medium"
            >
              <a href="/planos">
                Saiba mais
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlocoTres;

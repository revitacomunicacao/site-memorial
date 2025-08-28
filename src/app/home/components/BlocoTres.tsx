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
    <section className="w-full bg-[#a9cd48] py-12">
      <div className="mx-auto max-w-4xl px-6 flex flex-col justify-center items-center">
        {/* Título */}
        <div className="text-center bg-[#a9cd48] w-fit -mb-[45px] z-20 px-5">
          <h2 className="text-[36px] font-medium text-[#355b39]">
            Por que investir em
          </h2>
          <h3 className="text-[36px] font-medium text-[#355b39] -mt-2">
            um jazigo familiar?
          </h3>
        </div>

        {/* Caixa com borda */}
        <div className="relative border-[#355b39] border-2 rounded-md bg-[#a9cd48] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-6 pt-20">
            {items.map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-4">
                <img
                  src={item.icon}
                  alt="icone"
                  className="h-30 w-30 object-contain"
                />
                <p className="text-[18px] text-white leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Botão Saiba mais */}
          <div className="flex justify-center mt-10">
            <button
              type="button"
              className="rounded-full bg-[#34893d] border-2 border-[#355b39] text-white px-20 py-2 -mb-[47px] text-xl shadow-md hover:opacity-90 transition"
            >
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlocoTres;

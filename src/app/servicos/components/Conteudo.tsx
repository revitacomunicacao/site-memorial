import { useContent } from "@/hooks/useContent";
import { IServicos } from "../types/IServicos";
import { Skeleton } from "@/components/ui/skeleton";

export const Conteudo = () => {
  const {
    data: servicos,
    loading,
    error,
    refetch,
  } = useContent<IServicos>("/servicos");

  if (loading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            {[1, 2].map((item) => (
              <div key={item} className="space-y-6">
                {/* Banner */}
                <Skeleton className="h-72 w-full rounded-2xl" />

                {/* Título + descrição */}
                <div className="text-center space-y-4">
                  <Skeleton className="h-10 w-1/3 mx-auto" />
                  <Skeleton className="h-6 w-2/3 mx-auto" />
                </div>

                {/* Lista de serviços (duas colunas) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                  {[1, 2, 3, 4].map((serv) => (
                    <div
                      key={serv}
                      className="flex gap-4 items-start bg-white rounded-xl border border-gray-200 p-4"
                    >
                      <Skeleton className="w-24 h-24 rounded-lg" />
                      <div className="flex-1 space-y-2">
                        <Skeleton className="h-5 w-2/3" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!servicos || servicos.length === 0) {
    return null;
  }

  return (
    <section>
      {servicos.map(
        ({ id, title, descricao, banner, tipos_de_servico }) => {
          const metade = Math.ceil(tipos_de_servico.length / 2);
          const colunaEsquerda = tipos_de_servico.slice(0, metade);
          const colunaDireita = tipos_de_servico.slice(metade);

          return (
            <div key={id} className="mb-8 sm:mb-10">
              {/* Banner topo */}
              <div>
                <img src={banner} alt={title} className="w-full h-auto" />
              </div>

              {/* Título */}
              <div className="flex justify-center items-center my-6 sm:my-10 px-4 sm:px-6">
                <h1 className="text-[#365c3a] text-2xl sm:text-3xl lg:text-[40px] font-bold text-center leading-tight font-heebo">
                  {title}
                </h1>
              </div>

              {/* Descrição geral */}
              <div className="flex justify-center items-center px-4 sm:px-6">
                <div
                  className="w-full max-w-4xl lg:max-w-[1200px] text-[16px] sm:text-[18px] lg:text-[20px] font-questrial font-normal text-[#000000]"
                  dangerouslySetInnerHTML={{ __html: descricao }}
                />
              </div>

              {/* Tipos de serviço em duas colunas */}
              <div className="mt-10 mb-12 px-4 sm:px-6 flex justify-center">
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  {/* Coluna esquerda */}
                  <div className="space-y-6">
                    {colunaEsquerda.map(
                      ({ nome_do_servico, imagem, descricao }, idx) => (
                        <div
                          key={idx}
                          className="flex gap-4 items-start bg-white rounded-2xl shadow-sm p-4 sm:p-5"
                        >
                          {imagem && (
                            <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl overflow-hidden bg-[#f2f2f2] flex items-center justify-center">
                              <img
                                src={imagem}
                                alt={nome_do_servico}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <h2 className="text-lg sm:text-xl font-heebo text-[#365c3a] mb-2">
                              {nome_do_servico}
                            </h2>
                            <div
                              className="text-sm sm:text-base text-[#000000] font-questrial"
                              dangerouslySetInnerHTML={{ __html: descricao }}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* Coluna direita */}
                  <div className="space-y-6">
                    {colunaDireita.map(
                      ({ nome_do_servico, imagem, descricao }, idx) => (
                        <div
                          key={idx}
                          className="flex gap-4 items-start bg-white rounded-2xl shadow-sm p-4 sm:p-5"
                        >
                          {imagem && (
                            <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl overflow-hidden bg-[#f2f2f2] flex items-center justify-center">
                              <img
                                src={imagem}
                                alt={nome_do_servico}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <h2 className="text-lg sm:text-xl font-heebo text-[#365c3a] mb-2">
                              {nome_do_servico}
                            </h2>
                            <div
                              className="text-sm sm:text-base text-[#000000] font-questrial"
                              dangerouslySetInnerHTML={{ __html: descricao }}
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </section>
  );
};

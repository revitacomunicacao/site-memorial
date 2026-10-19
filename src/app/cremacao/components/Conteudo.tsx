import { useContent } from "@/hooks/useContent"
import { ICremacao } from "../types/ICremacao"
import { Skeleton } from "@/components/ui/skeleton"

export const Conteudo = () => {
  const { data: cremacoes, loading, error } = useContent<ICremacao>("/cremacoes")

  if (loading) return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <Skeleton className="h-72 w-full rounded-2xl mb-10" />
        <div className="space-y-4">
          <Skeleton className="h-12 w-2/3 mx-auto" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
          <Skeleton className="h-px w-full" />
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-6 w-2/3" />
        </div>
      </div>
    </section>
  )

  if (error) {
    return (
      <section className="py-16 px-6 text-center">
        <h1 className="text-2xl font-bold text-[#365c3a] font-heebo mb-3">
          Não foi possível carregar a página
        </h1>
        <p className="text-[#000000] font-questrial">Tente novamente mais tarde.</p>
      </section>
    )
  }

  if (!cremacoes.length) return null

  return (
    <section className="flex justify-center flex-col">
      {cremacoes.map(({ banner, foto, id, observacoes, texto, title }) => (
        <div key={id}>
          <img src={banner} alt={`banner da página de ${title}`} className="w-full h-auto" />

          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 justify-center items-center my-8 sm:my-10 px-4 sm:px-6">
            <h1 className="w-full max-w-4xl lg:max-w-[1200px] text-[#365c3a] text-2xl sm:text-3xl lg:text-[40px] font-bold text-center leading-tight font-heebo">
              {title}
            </h1>

            <div
              className="w-full max-w-4xl lg:max-w-[1200px] content-html text-[20px] font-questrial font-normal text-[#000000]"
              dangerouslySetInnerHTML={{ __html: texto }}
            />

            <div className="w-full max-w-4xl lg:max-w-[1200px] h-px bg-black" />

            <div className="w-full max-w-4xl lg:max-w-[1200px] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="w-full lg:max-w-[640px]">
                <p className="mb-3 font-questrial text-[20px] font-bold text-[#000000]">
                  Observações:
                </p>
                <div
                  className="content-html text-[20px] font-questrial font-normal text-[#000000]"
                  dangerouslySetInnerHTML={{ __html: observacoes }}
                />
              </div>

              {foto && (
                <img
                  src={foto}
                  alt={`foto ilustrativa de ${title}`}
                  className="mx-auto h-auto w-full max-w-[340px] object-contain lg:mx-0"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

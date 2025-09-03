import { useContent } from "@/hooks/useContent"
import { IPlanos } from "../types/IPlanos"
import { Skeleton } from "@/components/ui/skeleton"

export const Conteudo = () => {
  const { data: planos, loading, error, refetch } = useContent<IPlanos>("/planos")

  if(loading) return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <Skeleton className="h-12 w-1/3 mx-auto mb-4" />
          <Skeleton className="h-6 w-2/3 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <div className="text-center space-y-4">
                <Skeleton className="h-16 w-16 mx-auto rounded-full" />
                <Skeleton className="h-8 w-1/2 mx-auto" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-3/4 mx-auto" />
                <Skeleton className="h-12 w-32 mx-auto rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <section className="flex justify-center flex-col">
      {planos.map((
        { banner,
          foto,
          id,
          observacoes,
          texto_1,
          texto_2,
          title 
        }) => (
        <div key={id}>
          {/* Banner */}
          <img src={banner} alt={`banner da página de ${title}`} className="w-full h-auto" />
          
          {/* Conteúdo Principal */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 justify-center items-center my-8 sm:my-10 px-4 sm:px-6">
            {/* Textos em Colunas */}
            <div className="w-full max-w-4xl lg:max-w-[1200px] flex flex-col lg:flex-row gap-8 lg:gap-20 justify-center items-start">
              <div className="w-full lg:w-[50%] content-html text-[20px] font-questrial font-normal text-[#000000]" dangerouslySetInnerHTML={{ __html: texto_1 }} />
              <div className="w-full lg:w-[50%] content-html text-[20px] font-questrial font-normal text-[#000000]" dangerouslySetInnerHTML={{ __html: texto_2 }} />
            </div>
            
            {/* Linha Divisória */}
            <div className="w-full max-w-4xl lg:max-w-[1200px] h-[1px] bg-black" />
            
            {/* Observações */}
            <div className="w-full max-w-4xl lg:max-w-[1200px] content-html text-[20px] font-questrial font-normal text-[#000000]" dangerouslySetInnerHTML={{ __html: observacoes }} /> 
          </div>
          
          {/* Seção da Foto */}
          <div className="w-full bg-[#d5d5d5] flex justify-center items-center py-8">
            <img src={foto} alt={`foto ilustrativa de ${title}`} />
          </div>
        </div>
      ))}
    </section>
  )
}
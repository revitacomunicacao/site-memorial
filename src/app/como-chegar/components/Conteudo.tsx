import { useContent } from "@/hooks/useContent"
import { IComoChegar } from "../types/IComoChegar"
import { Skeleton } from "@/components/ui/skeleton"

export const Conteudo = () => {
  const { data: comoChegar, loading, error, refetch } = useContent<IComoChegar>("/como-chegar")
  
  if (loading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="space-y-6">
                <Skeleton className="h-96 w-full rounded-2xl" />
                <div className="text-center space-y-4">
                  <Skeleton className="h-12 w-1/3 mx-auto" />
                  <Skeleton className="h-6 w-2/3 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  return (
    <section>
      {comoChegar.map((
        { 
          banner,
          description,
          foto_conteudo,
          id,
          title 
        }) => (
          <div key={id}>
            {/* Banner */}
            <img src={banner} alt={title} className="w-full h-auto" />
            
            {/* Título */}
            <div className="flex justify-center items-center my-6 sm:my-8 lg:my-10 px-4 sm:px-6">
              <h1 className="text-[#365c3a] text-2xl sm:text-3xl lg:text-[40px] font-bold text-center leading-tight">
                {title}
              </h1>
            </div>
            
            {/* Descrição */}
            <div className="flex justify-center my-6 sm:my-8 lg:my-10 px-4 sm:px-6">
              <div className="w-full max-w-4xl lg:max-w-[1200px] text-base sm:text-lg lg:text-xl content-html" dangerouslySetInnerHTML={{ __html: description }} />
            </div>

            {/* Foto do Conteúdo */}
            <div className="flex justify-center items-center mb-16 sm:mb-20 px-4 sm:px-6">
              <img 
                className="w-full max-w-4xl lg:max-w-[1200px] h-auto rounded-2xl shadow-lg" 
                src={foto_conteudo} 
                alt={`foto do conteúdo - ${title}`} 
              />
            </div>
          </div>
      ))}
    </section>
  )
}
import { useContent } from "@/hooks/useContent"
import { IPassos } from "../types/IPassos"
import { Skeleton } from "@/components/ui/skeleton"

export const Conteudo = () => {
  const { data: passos, loading, error, refetch } = useContent<IPassos>("/primeiros-passos")

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
      {passos.map((
        { 
          banner,
          description,
          id,
          title
        }) => (
          <div key={id}>
            {/* Banner */}
            <img src={banner} alt={title} className="w-full h-auto" />
            
            {/* Título */}
            <div className="flex justify-center items-center my-6 sm:my-8 lg:my-10 px-4 sm:px-6">
              <h1 className="text-[#365c3a] text-2xl sm:text-3xl lg:text-[40px] font-bold text-center leading-tight font-heebo">
                {title}
              </h1>
            </div>
            
            {/* Conteúdo */}
            <div className="flex justify-center px-4 sm:px-6">
              <div className="w-full max-w-4xl lg:max-w-[1200px] content-html text-[20px] font-questrial font-normal text-[#000000]" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
      ))}
    </section>
  ) 
}
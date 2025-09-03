import { useContent } from "@/hooks/useContent"
import { IContato } from "./types/IContato"
import FormContato from "./components/FormContato"
import { Skeleton } from "@/components/ui/skeleton"

export default function Contato() {
  const { data: contato, loading, error, refetch } = useContent<IContato>("/contato")

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <section>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="space-y-12">
              <Skeleton className="h-96 w-full rounded-2xl" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <Skeleton className="h-12 w-1/2" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                </div>
                <div className="space-y-6">
                  <Skeleton className="h-12 w-1/2" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

  return(
    <main className="min-h-screen bg-gray-50 contato-page">
      <section>
        {contato.map((
          { 
            description,
            id,
            banner,
            title 
          }) => (
            <div key={id} className="flex flex-col items-center">
              <img src={banner} alt={title} className="w-full max-w-full" />

              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                  <div className="w-full">
                    <h2 className="text-[#365c3a] text-3xl mb-5 font-bold">Contato</h2>
                    <FormContato />
                  </div>

                  <div className="w-full">
                    <div className="content-html font-questrial" dangerouslySetInnerHTML={{ __html:description }} />  
                  </div>
                </div>
                
                <div className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="w-full flex justify-center flex-col items-center gap-5">
                      <h2 className="text-[#365c3a] text-[30px]">Escritório Central</h2>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d938.7895391155922!2d-47.936998!3d-19.748434!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bad0349c96b32d%3A0x6488971dca152558!2sEdif%C3%ADcio%20Chapad%C3%A3o%20-%20R.%20Maj.%20Eust%C3%A1quio%2C%20Sala%20609%20-%20Centro%2C%20Uberaba%20-%20MG%2C%2038010-420%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1756746110233!5m2!1spt-BR!2sus" 
                        width="100%" 
                        height="450" 
                        loading="lazy"
                        className="rounded-lg shadow-lg border-0"
                      ></iframe>
                    </div>
                    <div className="w-full flex justify-center flex-col items-center gap-5">
                      <h2 className="text-[#365c3a] text-[30px]">Cemitério Parque</h2>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1116.7800843204168!2d-47.96346048664947!3d-19.696206039804164!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sus!4v1756746285404!5m2!1spt-BR!2sus" 
                        width="100%" 
                        height="450" 
                        loading="lazy"
                        className="rounded-lg shadow-lg border-0"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </section>
    </main>
  )
}
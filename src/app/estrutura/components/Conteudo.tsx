import { useContent } from "@/hooks/useContent"
import { IEstrutura } from "../types/IEstrutura"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

export const Conteudo = () => {

  const { data: estrutura, loading, error, refetch } = useContent<IEstrutura>("/estruturas")

  if (loading) return (
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

  return (
    <section>
      {estrutura.map((
        {
          title,
          id,
          banner,
          carrossel_estrutura,
          description,
          galeria_da_direita,
          galeria_da_esquerda,
          galeria_do_meio
        }) => (
        <div key={id} className="mb-8 sm:mb-10">
          {/* Banner */}
          <div>
            <img src={banner} alt={title} className="w-full h-auto" />
          </div>
          
          {/* Título */}
          <div className="flex justify-center items-center my-6 sm:my-10 px-4 sm:px-6">
            <h1 className="text-[#365c3a] text-2xl sm:text-3xl lg:text-[40px] font-bold text-center leading-tight">
              {title}
            </h1>
          </div>
          
          {/* Descrição */}
          <div className="flex justify-center items-center text-center px-4 sm:px-6">
            <div className="w-full max-w-4xl lg:max-w-[1200px] text-base sm:text-lg lg:text-[22px] content-html" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          
          {/* Carrossel */}
          <div className="my-8 sm:my-10 flex justify-center px-4 sm:px-6">
            <div className="relative w-full max-w-4xl lg:max-w-[1200px]">
              <Carousel
                opts={{
                  "align": "start",
                  dragFree: true
                }}
                className="w-full"
              >
                <CarouselContent>
                  {carrossel_estrutura.map(({ foto, titulo }, idx) => (
                    <CarouselItem key={idx} className="basis-1/2 sm:basis-1/3 lg:basis-1/5">
                      <div className="bg-[#375d3b] p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl min-h-[200px] sm:min-h-[240px] lg:min-h-[280px] flex flex-col justify-center items-center">
                        <img
                          src={foto}
                          alt={titulo}
                          className="w-full h-24 sm:h-32 lg:h-40 object-cover rounded-lg mb-3 sm:mb-4"
                        />
                        <div className="flex justify-center w-full text-center">
                          <p className="text-white text-xs sm:text-sm lg:text-base leading-tight">{titulo}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext className="right-2 sm:right-4 lg:right-6" />
                <CarouselPrevious className="left-2 sm:left-4 lg:left-6" />
              </Carousel>
            </div>
          </div>
          
          {/* Galeria */}
          <div className="flex justify-center px-4 sm:px-6">
            <div className="w-full max-w-6xl">
              {/* Layout Desktop */}
              <div className="hidden lg:flex flex-row gap-4 lg:gap-5">
                <div className="flex w-[25%] flex-col gap-4 lg:gap-5">
                  {galeria_da_esquerda.map((g, idx) => (
                    <Dialog key={idx}>
                      <DialogTrigger asChild>
                        <img
                          src={g}
                          alt={`foto galeria ${idx + 1}`}
                          className="w-full h-[300px] object-cover cursor-pointer rounded-lg hover:opacity-90 transition-opacity"
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-[90vw]">
                        <img
                          src={g}
                          alt={`foto galeria ${idx + 1}`}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
                <div className="flex w-[50%] flex-col gap-4 lg:gap-5">
                  {galeria_do_meio.map((g, idx) => (
                    <Dialog key={idx}>
                      <DialogTrigger asChild>
                        <img
                          src={g}
                          alt={`foto galeria ${idx + 1}`}
                          className="w-full h-[620px] object-cover cursor-pointer rounded-lg hover:opacity-90 transition-opacity"
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-[90vw]">
                        <img
                          src={g}
                          alt={`foto galeria ${idx + 1}`}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
                <div className="flex w-[25%] flex-col gap-4 lg:gap-5">
                  {galeria_da_direita.map((g, idx) => (
                    <Dialog key={idx}>
                      <DialogTrigger asChild>
                        <img
                          src={g}
                          alt={`foto galeria ${idx + 1}`}
                          className="w-full h-[300px] object-cover cursor-pointer rounded-lg hover:opacity-90 transition-opacity"
                        />
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-[90vw]">
                        <img
                          src={g}
                          alt={`foto galeria ${idx + 1}`}
                          className="w-full h-auto rounded-lg"
                        />
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
              
              {/* Layout Mobile/Tablet */}
              <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Galeria da Esquerda */}
                {galeria_da_esquerda.map((g, idx) => (
                  <Dialog key={`left-${idx}`}>
                    <DialogTrigger asChild>
                      <img
                        src={g}
                        alt={`foto galeria ${idx + 1}`}
                        className="w-full h-48 sm:h-64 object-cover cursor-pointer rounded-lg hover:opacity-90 transition-opacity"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-[90vw]">
                      <img
                        src={g}
                        alt={`foto galeria ${idx + 1}`}
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
                
                {/* Galeria do Meio */}
                {galeria_do_meio.map((g, idx) => (
                  <Dialog key={`center-${idx}`}>
                    <DialogTrigger asChild>
                      <img
                        src={g}
                        alt={`foto galeria ${idx + 1}`}
                        className="w-full h-48 sm:h-64 object-cover cursor-pointer rounded-lg hover:opacity-90 transition-opacity"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-[90vw]">
                      <img
                        src={g}
                        alt={`foto galeria ${idx + 1}`}
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
                
                {/* Galeria da Direita */}
                {galeria_da_direita.map((g, idx) => (
                  <Dialog key={`right-${idx}`}>
                    <DialogTrigger asChild>
                      <img
                        src={g}
                        alt={`foto galeria ${idx + 1}`}
                        className="w-full h-48 sm:h-64 object-cover cursor-pointer rounded-lg hover:opacity-90 transition-opacity"
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-[90vw]">
                      <img
                        src={g}
                        alt={`foto galeria ${idx + 1}`}
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
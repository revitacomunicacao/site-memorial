import { useContent } from "@/hooks/useContent"
import { IEstrutura } from "../types/IEstrutura"
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

  if (loading) return ("carregando...")

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
        <div key={id} className="mb-10">
          <div>
            <img src={banner} alt={title} />
          </div>
          <div className="flex justify-center items-center my-10">
            <h1 className="text-[#365c3a] text-[40px] font-bold">
              {title}
            </h1>
          </div>
          <div className="flex justify-center items-center text-center">
            <div className="w-[1200px] text-[22px]" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <div className="my-10 flex justify-center">
            <Carousel
              opts={{
                "align": "start",
                dragFree: true
              }}
              className="w-[1200px]"
            >
              <CarouselContent>
                {carrossel_estrutura.map(({ foto, titulo }, idx) => (
                  <CarouselItem key={idx} className="basis-1/5">
                    <div className="bg-[#375d3b] p-8 rounded-3xl min-h-[280px]">
                      <img
                        src={foto}
                        alt={titulo}
                        className=""
                      />
                      <div className="flex justify-center w-full text-center">
                        <p className="text-white leading-4">{titulo}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-row w-[1200px] gap-5">
              <div className="flex w-[25%] flex-col gap-5">
                {galeria_da_esquerda.map((g, idx) => (
                  <Dialog>
                    <DialogTrigger asChild>
                      <img
                        src={g}
                        alt={`foto galeria ${idx + 1}`}
                        className="w-[300px] h-[300px] object-cover cursor-pointer"
                      />
                    </DialogTrigger>
                    <DialogContent>
                      <img
                        src={g}
                        alt={`foto galeria ${idx + 1}`}
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
              <div className="flex w-[50%] flex-col gap-5">
                {galeria_do_meio.map((g, idx) => (
                  <Dialog>
                    <DialogTrigger asChild>
                      <img
                        src={g}
                        alt={`foto galeria ${idx + 1}`}
                        className="w-[600px] h-[620px] object-cover cursor-pointer"
                      />
                    </DialogTrigger>
                    <DialogContent>
                      <img
                        src={g}
                        alt={`foto galeria ${idx + 1}`}
                      />
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
              <div className="flex w-[25%] flex-col gap-5">
                {galeria_da_direita.map((g, idx) => (
                  <Dialog>
                    <DialogTrigger asChild>
                      <img
                        src={g}
                        alt={`foto galeria ${idx + 1}`}
                        className="w-[300px] h-[300px] object-cover cursor-pointer"
                      />
                    </DialogTrigger>
                    <DialogContent>
                      <img
                        src={g}
                        alt={`foto galeria ${idx + 1}`}
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
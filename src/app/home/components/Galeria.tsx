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
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"
import { useContent } from "@/hooks/useContent"
import type { IGaleriaFoto, IGaleriaHome } from "../types/IGaleria"

export const Galeria = () => {
  const { data, loading } = useContent<IGaleriaHome>("/galeria-home")
  const galeria = data[0]

  if (loading) {
    return (
      <section className="w-full bg-[#f7f7f7] py-10 sm:py-14">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <Skeleton className="mx-auto mb-8 h-10 w-64 sm:w-80" />
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3, 4].map((item) => (
              <Skeleton
                key={item}
                className="h-48 w-full shrink-0 basis-1/2 rounded-2xl sm:h-56 sm:basis-1/3 lg:h-64 lg:basis-1/4"
              />
            ))}
          </div>
        </div>
      </section>
    )
  }

  const fotos = galeria?.galeria_de_fotos ?? []
  if (!fotos.length) return null

  const thumbSrc = (foto: IGaleriaFoto) =>
    (typeof foto.sizes?.medium_large === "string" && foto.sizes.medium_large) ||
    (typeof foto.sizes?.large === "string" && foto.sizes.large) ||
    foto.url

  return (
    <section className="w-full bg-[#f7f7f7] py-10 sm:py-14">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className="mb-8 text-center font-heebo text-2xl leading-tight text-[#365c3a] sm:mb-10 sm:text-3xl lg:text-[36px]">
          {galeria?.title || "Galeria de fotos"}
        </h2>

        <div className="relative w-full">
          <Carousel
            opts={{ align: "start", loop: true, dragFree: true }}
            className="w-full"
          >
            <CarouselContent>
              {fotos.map((foto) => {
                const alt =
                  foto.alt || foto.title || galeria?.title || "Foto da galeria"

                return (
                  <CarouselItem
                    key={foto.id}
                    className="basis-[85%] sm:basis-1/2 lg:basis-1/3"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          type="button"
                          className="group block w-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#395e3e]/40"
                          aria-label={`Ampliar foto: ${alt}`}
                        >
                          <img
                            src={thumbSrc(foto)}
                            alt={alt}
                            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] sm:h-56 lg:h-64"
                            loading="lazy"
                          />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-[90vw] p-2 sm:p-4">
                        <DialogTitle className="sr-only">{alt}</DialogTitle>
                        <img
                          src={foto.url}
                          alt={alt}
                          className="max-h-[80vh] w-full rounded-lg object-contain"
                        />
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="left-2 border-[#355b39]/20 bg-white/90 text-[#2f5334] hover:bg-white md:left-3" />
            <CarouselNext className="right-2 border-[#355b39]/20 bg-white/90 text-[#2f5334] hover:bg-white md:right-3" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Galeria

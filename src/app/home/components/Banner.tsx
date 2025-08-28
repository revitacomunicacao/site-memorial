import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useContent } from "@/hooks/useContent";
import { IBanners } from "../types/IBanners";

export const Banner = () => {
  const { data: banners, error, loading, refetch  } = useContent<IBanners>("/banners")

  if(loading) return (
    <section className="flex justify-center items-center h-[388px]">
      <p>Carregando...</p>
    </section>
  )

  return (
    <section>
      {/* garante contexto de posicionamento e impede “vazar” */}
      <div className="relative w-full overflow-hidden">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {banners.map(({ banner, id, title }) => (
              <CarouselItem key={id}>
                <img className="w-full h-full" src={banner} alt={title} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* traz as setas para dentro e com espaçamento seguro */}
          <CarouselPrevious className="left-2 md:left-3" />
          <CarouselNext className="right-2 md:right-3" />
        </Carousel>
      </div>
    </section>
  );
};

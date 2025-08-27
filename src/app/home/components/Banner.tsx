import banner1 from "@/assets/1.avif";
import banner2 from "@/assets/2.avif";
import banner3 from "@/assets/3.avif";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Banner = () => {
  const banners = [{ link: banner1 }, { link: banner2 }, { link: banner3 }];

  return (
    <section>
      {/* garante contexto de posicionamento e impede “vazar” */}
      <div className="relative w-full overflow-hidden">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent>
            {banners.map((b, index) => (
              <CarouselItem key={index}>
                <img className="w-full h-full" src={b.link} alt={`Banner ${index + 1}`} />
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

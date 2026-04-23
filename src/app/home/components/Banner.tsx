import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useContent } from "@/hooks/useContent";
import { IBanners } from "../types/IBanners";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";

export const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { data: banners, error, loading, refetch } =
    useContent<IBanners>("/banners");

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        // mesmo critério do outro projeto: mobile < 768px
        setIsMobile(window.innerWidth < 768);
      }
    };

    handleResize(); // verifica na primeira renderização
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) return (
    <section className="flex justify-center items-center h-[388px] bg-gray-100">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="flex justify-center">
          <Skeleton className="h-80 w-full max-w-4xl rounded-2xl" />
        </div>
      </div>
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
            {banners.map(({ banner, banner_responsivo, id, title, link }) => {
              const href = link?.trim();
              const img = (
                <img
                  className="w-full h-full"
                  src={isMobile && banner_responsivo ? banner_responsivo : banner}
                  alt={title}
                />
              );

              return (
                <CarouselItem key={id}>
                  {href ? (
                    <a
                      href={href}
                      className="block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {img}
                    </a>
                  ) : (
                    img
                  )}
                </CarouselItem>
              );
            })}
          </CarouselContent>


          {/* traz as setas para dentro e com espaçamento seguro */}
          <CarouselPrevious className="left-2 md:left-3" />
          <CarouselNext className="right-2 md:right-3" />
        </Carousel>
      </div>
    </section>
  );
};

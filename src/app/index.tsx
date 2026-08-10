import { Banner } from "@/app/home/components/Banner";
import { BlocoDois } from "./home/components/BlocoDois";
import BlocoTres from "./home/components/BlocoTres";
import { Galeria } from "./home/components/Galeria";

export default function HomePage() {
  return (
    <main className="pt-20">
      <Banner />
      <div className="text-center">
        <h2 className="font-libre-baskerville text-[#345A38] text-2xl sm:text-[35px] leading-tight my-10"
        >
          Onde existe saudade é porque existe AMOR!
        </h2>
      </div>
      <section className="flex my-10 justify-center items-center">
        <iframe width="860" height="615" src="https://www.youtube.com/embed/0EZpoKan4dY?si=gT7F-5YVUNs19bpN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-2xl"></iframe>
      </section>
      <BlocoDois />
      <BlocoTres />
      <Galeria />
    </main>
  );
}

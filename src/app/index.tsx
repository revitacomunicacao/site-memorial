import { Banner } from "@/app/home/components/Banner";
import { BlocoDois } from "./home/components/BlocoDois";
import BlocoTres from "./home/components/BlocoTres";

export default function HomePage() {
  return (
    <main className="pt-20">
      <Banner />
      <section className="flex my-10 justify-center items-center">
        <iframe width="860" height="615" src="https://www.youtube.com/embed/0EZpoKan4dY?si=gT7F-5YVUNs19bpN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-2xl"></iframe>
      </section>
      <BlocoDois />
      <BlocoTres />
    </main>
  );
}

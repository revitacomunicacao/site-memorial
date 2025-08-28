import { Banner } from "@/app/home/components/Banner";
import { BlocoDois } from "./home/components/BlocoDois";
import BlocoTres from "./home/components/BlocoTres";

export default function HomePage() {
  return (
    <main>
      <Banner />
      <BlocoDois />
      <BlocoTres />
    </main>
  );
}

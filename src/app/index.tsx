import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useSeo from "@/hooks/useSeo";
import { Accordion } from "@radix-ui/react-accordion";
import { Banner } from "./home/components/banner";

export default function HomePage() {
  useSeo({
    title: "Home",
    description: "Home",
    image: "https://via.placeholder.com/150",
    //imagem de compartilhamento
    icon: "https://via.placeholder.com/150",
    //favicon
  });
  return (
    <main>
      <Banner />
    </main>
  );
}

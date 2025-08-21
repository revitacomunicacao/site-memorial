import { Button } from "@/components/ui/button"
import useSeo from "@/hooks/useSeo"

export default function HomePage() {
  useSeo({
    title: "Home",
    description: "Home",
    image: "https://via.placeholder.com/150",
    //imagem de compartilhamento
    icon: "https://via.placeholder.com/150",
    //favicon  
  })
  return (
    <main style={{ padding: 20 }}>
      <h1 className="text-red-500">Bem‑vindo ao Template React</h1>
      <p>Use este projeto como base para seus sites institucionais.</p>
      <Button>TESTE</Button>
    </main>
  )
}

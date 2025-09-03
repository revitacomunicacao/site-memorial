import fotoTopo from "@/assets/foto-topo-obituario.avif"

export function Header() {
  return (
    <div className="bg-white shadow-xl border-b-4 border-gray-200">
      <img src={fotoTopo} className="w-full" alt="foto do topo da pagina" />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center space-x-4 justify-center text-center">
          <div>
            <h1 className="text-[40px] font-bold font-heebo text-[#365c3a]">Obituário</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

import velorio from "@/assets/velorio.avif"
import cerimonial from "@/assets/Cerimonial.avif"
import sepultamento from "@/assets/Sepultamento.avif"
import cremacao from "@/assets/Cremação.avif"

export const BlocoDois = () => {

  const blocosIcones = [
    {
      name: "Velório",
      img: velorio
    },
    {
      name: "Cerimonial",
      img: cerimonial
    },
    {
      name: "Sepultamento",
      img: sepultamento
    },
    {
      name: "Cremação",
      text: "(Em breve)",
      img: cremacao
    },
  ]
  
  return (
    <section className="flex flex-col gap-10 justify-center items-center my-10">
      <div>
        <h2 className="text-[#345A38] text-[38px]">Onde existe saudade é porque existe AMOR!</h2>
      </div>
      <div className="flex flex-row gap-35 justify-center items-start">
        {blocosIcones.map(({ img, name, text }, idx)=> (
          <div key={idx} className="flex flex-col gap-3 justify-center items-center text-center">
            <img src={img} alt="icone do velorio" className="h-full w-28" />
            <div>
              <h3 className="text-[38px] text-[#a9d043]">{name}</h3>
              {text && (
                <h2 className="text-[26px] text-[#a9d043]">{text}</h2>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
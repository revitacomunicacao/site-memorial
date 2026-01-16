import velorio from "@/assets/velorio.avif"
import cerimonial from "@/assets/Cerimonial.avif"
import sepultamento from "@/assets/Sepultamento.avif"
import cremacao from "@/assets/Cremacao.avif"

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
    <section className="flex flex-col gap-8 sm:gap-10 justify-center items-center my-8 sm:my-10 px-4 sm:px-6">
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 justify-center items-start w-full max-w-6xl">
        {blocosIcones.map(({ img, name, text }, idx)=> (
          <div key={idx} className="flex flex-col gap-3 justify-center items-center text-center">
            <img 
              src={img} 
              alt={`ícone do ${name.toLowerCase()}`} 
              className="h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28 object-contain" 
            />
            <div>
              <h3 className="text-lg sm:text-[29px] text-[#a9d043] font-heebo">
                {name}
              </h3>
              {text && (
                <h2 className="text-sm sm:text-base lg:text-[26px] text-[#a9d043] font-medium">
                  {text}
                </h2>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
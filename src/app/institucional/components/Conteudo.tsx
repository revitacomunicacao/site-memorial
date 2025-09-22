import { useContent } from "@/hooks/useContent"
import { IInstitucional } from "../types/IInstitucional"
import { Skeleton } from "@/components/ui/skeleton"
import bullseye from "@/assets/bullseye-svgrepo-com.png"
import eye from "@/assets/eye-svgrepo-com.png"
import megaPhone from "@/assets/megaphone-2-svgrepo-com.png"

export const Conteudo = () => {
  const { data: institucional, loading, error, refetch } = useContent<IInstitucional>("/institucionais")
  
  console.log(institucional)

  if(loading) return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="space-y-6">
              <Skeleton className="h-96 w-full rounded-2xl" />
              <div className="text-center space-y-4">
                <Skeleton className="h-12 w-1/3 mx-auto" />
                <Skeleton className="h-6 w-2/3 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  const conteudo = [
    {
      img: bullseye,
      title: "Missão",
      desc: "Oferecer serviços cemiteriais de forma humana e com máxima qualidade, com foco no suporte e cuidado a cada família"
    },
    {
      img: eye,
      title: "Visão",
      desc: "Representar a excelência em serviços cemiteriais na região de Uberaba. Ser uma certeza de bom atendimento para cada uberabense."
    },
    {
      img: megaPhone,
      title: "Valores",
      desc: "Humanidade <br /> Respeito <br /> Qualidade"
    },
  ]

  return (
    <section>
      {institucional.map(({ banner, description, id, title }) => (
        <div key={id} className="mb-8 sm:mb-10">
          <div>
            <img src={banner} alt={title} className="w-full h-auto" />
          </div>
          <div className="flex justify-center items-center my-6 sm:my-10 px-4 sm:px-6">
            <h1 className="text-[#365c3a] text-2xl sm:text-3xl lg:text-[40px] font-bold text-center leading-tight font-heebo">
              {title}
            </h1>
          </div>
          <div className="flex justify-center items-center px-4 sm:px-6">
            <div className="w-full max-w-4xl lg:max-w-[1200px] text-[20px] content-html font-questrial font-normal text-[#000000]" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      ))}

      <div className="flex justify-center my-8 sm:my-12 px-4 sm:px-6">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 justify-center">
            {conteudo.map(({ desc, img, title }, idx) => (
              <div className="flex flex-col gap-4 sm:gap-5 bg-[#a9cd48] justify-start items-center p-4 sm:p-5 rounded-3xl sm:rounded-4xl w-full max-w-sm mx-auto" key={idx}>
                <img src={img} className="h-12 w-12 sm:h-16 sm:w-16 lg:h-18 lg:w-18 object-contain" alt={`ícone ${title.toLowerCase()}`} />
                <h2 className="text-xl sm:text-[40px]  text-[#416e44] text-center font-heebo">{title}</h2>
                <div className="text-[#000000] text-[20px] text-center leading-relaxed font-questrial font-normal" dangerouslySetInnerHTML={{ __html: desc }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
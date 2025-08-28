import { useContent } from "@/hooks/useContent"
import { IInstitucional } from "../types/IInstitucional"
import bullseye from "@/assets/bullseye-svgrepo-com.png"
import eye from "@/assets/eye-svgrepo-com.png"
import megaPhone from "@/assets/megaphone-2-svgrepo-com.png"

export const Conteudo = () => {
  const { data: institucional, loading, error, refetch } = useContent<IInstitucional>("/institucionais")
  
  console.log(institucional)

  if(loading) return "carregando..."

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
        <div key={id} className="mb-10">
          <div>
            <img src={banner} alt={title} />
          </div>
          <div className="flex justify-center items-center my-10">
            <h1 className="text-[#365c3a] text-[40px] font-bold">
              {title}
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[1200px] text-[22px]" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      ))}

      <div className="flex justify-center my-5">
        <div className="w-[1200px] flex flex-row gap-5 justify-center">
          {conteudo.map(({ desc, img, title }, idx) => (
            <div className="flex flex-col gap-5 bg-[#a9cd48] justify-center items-center p-5 rounded-4xl w-[380px]" key={idx}>
              <img src={img} className="h-full w-18" alt="icone1" />
              <h2 className="text-[32px] text-[#416e44]">{title}</h2>
              <div className="text-black" dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
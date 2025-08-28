import { useContent } from "@/hooks/useContent"
import { IPlanos } from "../types/IPlanos"

export const Conteudo = () => {
  const { data: planos, loading, error, refetch } = useContent<IPlanos>("/planos")

  if(loading) return ("carregando...")

  return (
    <section className="flex justify-center flex-col">
      {planos.map((
        { banner,
          foto,
          id,
          observacoes,
          texto_1,
          texto_2,
          title 
        }) => (
        <div key={id}>
          <img src={banner} alt={`banner da pagina de ${title}`} />
          <div className="flex flex-col gap-5 justify-center items-center my-10">
            <div className="w-[1200px] flex flex-row gap-20 justify-center items-start">
              <div className="w-[50%]" dangerouslySetInnerHTML={{ __html: texto_1 }} />
              <div className="w-[50%]" dangerouslySetInnerHTML={{ __html: texto_2 }} />
            </div>
            <div className="w-[1200px] h-[1px] bg-black" />
            <div className="w-[1200px]" dangerouslySetInnerHTML={{ __html: observacoes }} /> 
          </div>
          <div className="w-full bg-[#d5d5d5] flex justify-center items-center py-10">
            <img src={foto} />
          </div>
        </div>
      ))}
    </section>
  )
}
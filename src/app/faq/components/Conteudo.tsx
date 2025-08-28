import { useContent } from "@/hooks/useContent"
import { IFaq } from "../types/IFaq"

export const Conteudo = () => {

  const { data: faq, loading, error, refetch } = useContent<IFaq>("/faqs")

  return (
    <section>
      {faq.map((
        { 
          banner,
          faq,
          id,
          title 
        }) => (
          <div className="flex justify-center flex-col">
            <img src={banner} alt="banner da pagina" className="w-full" />
            <div className="my-5">
              <h1 className="text-[#365c3a] text-[40px] font-bold text-center">
                {title}
              </h1>
            </div>
          </div>
      ))}
    </section>
  )
}
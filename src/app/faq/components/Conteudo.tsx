import { useContent } from "@/hooks/useContent"
import { IFaq } from "../types/IFaq"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"

export const Conteudo = () => {

  const { data: faqs, loading, error, refetch } = useContent<IFaq>("/faqs")

  const defaultValue = "0"

  if (loading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-8">
            <Skeleton className="h-96 w-full rounded-2xl" />
            <div className="text-center">
              <Skeleton className="h-12 w-1/3 mx-auto mb-4" />
            </div>
            <div className="flex justify-center">
              <div className="w-[800px] space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="bg-white p-6 rounded-lg border border-gray-200">
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section>
      {faqs.map((
        {
          banner,
          faq,
          id,
          title
        }) => (
        <div key={id} className="flex justify-center flex-col">
          {/* Banner */}
          <img src={banner} alt="banner da página" className="w-full h-auto" />
          
          {/* Título */}
          <div className="my-6 sm:my-8 lg:my-10 px-4 sm:px-6">
            <h1 className="text-[#365c3a] text-2xl sm:text-3xl lg:text-[40px] font-bold text-center leading-tight font-heebo">
              {title}
            </h1>
          </div>

          {/* Accordion */}
          <div className="flex justify-center mb-16 sm:mb-20 px-4 sm:px-6">
            <div className="w-full max-w-2xl lg:max-w-[800px]">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="0"
              >
                {faq.map(({ pergunta, resposta }, idx) => (
                  <AccordionItem key={idx} value={String(idx)}>
                    <AccordionTrigger className="border-b-2 border-b-[#355B39] rounded-none transition-colors accordion-trigger-no-underline">
                      <p className="text-base sm:text-lg lg:text-xl text-[#355B39] hover:text-[#A9CD48] text-left font-heebo transition-colors font-bold">
                        {pergunta}
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="py-4 text-[15px] text-[#000000] leading-relaxed font-wix-madefor font-normal">
                        {resposta}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
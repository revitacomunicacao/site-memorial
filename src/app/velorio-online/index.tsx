/**
 * Embed Adiaŭ — parâmetros conforme documentação (Integração_da_Tecnologia_Adiaŭ.pdf):
 * - tab=same: mantém a navegação dentro do iframe no mesmo domínio do site
 * - color1–color8: hex sem "#" (cores do Memorial: verdes #2f5334 / #395e3e, fundo #f7f7f7)
 * - Recomendação: altura 500–600px, largura ~80%, allowfullscreen
 */
const ADIAU_EMBED_SRC =
  "https://adiau.com.br/embed/?hash=xjI0G5nQnYsZ3y0IL83v7hU7&tab=same&lang=pt-br&color1=f7f7f7&color2=395e3e&color3=ffffff&color4=f4f7f4&color5=2f5334&color6=f7f7f7&color7=2f5334&color8=395e3e"

export default function VelorioOnline() {
  return (
    <main className="min-h-[calc(100vh-6rem)] bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 text-center sm:mb-8">
          <h1 className="text-2xl font-bold text-[#2f5334] sm:text-3xl lg:text-4xl">
            Velório online
          </h1>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
            Acompanhe cerimônias e transmissões pelo serviço integrado ao Memorial
            Parque Uberaba.
          </p>
        </header>

        <div className="mx-auto flex w-full justify-center">
          <iframe
            src={ADIAU_EMBED_SRC}
            title="Velório online — Memorial Parque Uberaba (Adiaŭ)"
            className="h-[min(580px,85vh)] w-full max-w-[1200px] rounded-2xl border-2 border-gray-200 bg-white shadow-xl sm:w-4/5 sm:border-4"
            style={{ minHeight: "500px" }}
            allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            // Atributos legados citados no PDF para compatibilidade com players em tela cheia
            {...({
              webkitallowfullscreen: "true",
              mozallowfullscreen: "true",
            } as React.IframeHTMLAttributes<HTMLIFrameElement>)}
          />
        </div>
      </div>
    </main>
  )
}

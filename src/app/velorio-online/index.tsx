/**
 * Embed Adiaŭ 2.6 — o cliente é identificado pelo token na rota
 * (`/TOKEN`), não mais por `/embed/?hash=`. Cores e exibição de fotos
 * vêm de “Preferência de Telas” no CMS (app.adiau.com.br), não da URL.
 * - tab=same: cerimônia permanece no iframe
 * - lang=pt-br: português (padrão se omitido)
 * - altura mínima 600px e largura próxima da tela, conforme o PDF
 */
const ADIAU_EMBED_SRC =
  "https://adiau.com.br/xjI0G5nQnYsZ3y0IL83v7hU7?tab=same&lang=pt-br"

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
            className="h-[min(720px,85vh)] w-full rounded-2xl border-2 border-gray-200 bg-white shadow-xl sm:border-4"
            style={{ minHeight: "600px" }}
            allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
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

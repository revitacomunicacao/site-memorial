import React from "react"
import Logo from "@/assets/logo_branca.avif"

// SVGs fiéis ao print (traço + proporção)
const InstagramIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Ícone clássico do Instagram (quadro arredondado + lente + flash) */}
    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
    <path d="M16.5 7.5h.01" />
    <circle cx="12" cy="12" r="4" />
  </svg>
)

const FacebookIcon = ({ className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
    fill="currentColor"
  >
    {/* “f” clássico do Facebook (proporção mais estreita, como no print) */}
    <path d="M13.5 9.5V8.1c0-1.1.2-1.8 1.9-1.8h1.1V3.8c-.6-.1-1.4-.2-2.6-.2-2.6 0-4 1.5-4 4.1v1.8H8v2.9h1.9V21h3.6v-8.6h2.4l.4-2.9h-2.8z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="flex justify-center bg-[#355b39] text-white py-10">
      <div className="w-[1350px]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 px-6">
          {/* Logo + Endereços */}
          <div className="flex flex-col gap-4 max-w-3xl text-[22px] font-amargo">
            <img src={Logo} alt="Memorial Parque Uberaba" className="mb-4 w-[181px] h-[80px]" />

            <div>
              <p className="">
                Memorial Parque Uberaba Cemitério e Crematório S.A. - 34.217.733/0001-92
              </p>
            </div>

            <div>
              <p className="font-extrabold text-[#abcd4a]">Escritório Central:</p>
              <p className="">
                R. Major Eustáquio, 76 | Edifício Chapadão Sala 1 | 38010-270 | Uberaba – MG
              </p>
            </div>

            <div>
              <p className="font-bold text-[#abcd4a] mt-2">Cemitério Parque:</p>
              <p className="">
                R. João Batista Ribeiro, 2555 | Distrito Industrial II | 38064-790 | Uberaba – MG
              </p>
            </div>

            <div>
              <p className="font-bold text-[#abcd4a] mt-2">Telefone:</p>
              <p className="">(34) 3338 3900</p>
            </div>
          </div>

          {/* Redes sociais – iguais ao print (círculo branco + ícone verde) */}
          <div className="flex items-center gap-6 md:self-start md:mt-2">
            <a
              href="https://www.instagram.com/memorialparqueuba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-grid place-items-center w-10 h-10 rounded-full bg-white"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5 text-[#2f5334]" />
            </a>

            <a
              href="https://www.facebook.com/MemorialParqueUberaba/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-grid place-items-center w-10 h-10 rounded-full bg-white"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-5 h-5 text-[#2f5334]" />
            </a>
          </div>
        </div>
      </div>

    </footer>

  )
}

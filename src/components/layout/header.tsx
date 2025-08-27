import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Logo from "@/assets/logo.webp"

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/institucional", label: "Institucional" },
  { href: "/estrutura", label: "Estrutura" },
  { href: "/planos", label: "Planos" },
  { href: "/obituario", label: "Obituário" },
  { href: "/faq", label: "FAQ" },
  { href: "/primeiros-passos", label: "Primeiros Passos" },
  { href: "/como-chegar", label: "Como chegar" },
  { href: "/contato", label: "Contato" },
]

export default function Header() {
  // pega a rota atual para marcar o ativo (similar ao print)
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/"

  return (
    <header className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          {/* altura semelhante ao print */}
          <img src={Logo} alt="Memorial Parque Uberaba" className="h-20 w-auto" />
        </a>

        {/* Navegação */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            {LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href)

              return (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink
                    href={link.href}
                    className={cn(
                      // tipografia e tamanho do print
                      "text-[15px] font-medium leading-none",
                      // cor padrão (verde escuro)
                      "text-[#2f5334]",
                      // hover discreto
                      "transition-colors hover:opacity-80",
                      // ativo (verde claro)
                      isActive && "text-[#c6d755]"
                    )}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}

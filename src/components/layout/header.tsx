import * as React from "react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Logo from "@/assets/logo.webp"
import { useContent } from "@/hooks/useContent"
import { IMenu } from "./types/IMenu"

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
  const { data: menu, loading, error, refetch } = useContent<IMenu>("/menu");

  // pega a rota atual para marcar o ativo
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/"

  return (
    <header className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={Logo} alt="Memorial Parque Uberaba" className="h-20 w-auto" />
        </a>

        {/* Navegação */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            {loading ? (
              // Loading state para o menu
              <>
                {Array.from({ length: 9 }).map((_, i) => (
                  <NavigationMenuItem key={i}>
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                  </NavigationMenuItem>
                ))}
              </>
            ) : error ? (
              LINKS.map((link, idx) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href)

                return (
                  <NavigationMenuItem key={idx}>
                    <NavigationMenuLink
                      href={link.href}
                      className={cn(
                        "text-[15px] font-medium leading-none",
                        "text-[#2f5334]",
                        "transition-colors hover:opacity-80",
                        isActive && "text-[#c6d755]"
                      )}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })
            ) : menu && menu.length > 0 ? (
              // Menu dinâmico da API
              menu.map(({ name, href }, idx) => {
                const isActive =
                  href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(href)

                return (
                  <NavigationMenuItem key={idx}>
                    <NavigationMenuLink
                      href={href}
                      className={cn(
                        "text-[15px] font-medium leading-none",
                        "text-[#2f5334]",
                        "transition-colors hover:opacity-80",
                        isActive && "text-[#c6d755]"
                      )}
                    >
                      {name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })
            ) : (
              // Fallback final
              LINKS.map((link, idx) => (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuLink
                    href={link.href}
                    className={cn(
                      "text-[15px] font-medium leading-none",
                      "text-[#2f5334]",
                      "transition-colors hover:opacity-80"
                    )}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}

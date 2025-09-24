import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import Logo from "@/assets/logo-memorial-parque.png"
import { useContent } from "@/hooks/useContent"
import { IMenu } from "./types/IMenu"
import { Skeleton } from "@/components/ui/skeleton"
import { Menu } from "lucide-react"

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
  
  // Verifica se está na home para aplicar header fixo
  // Remove o basename para verificar se é a home
  const cleanPathname = pathname.replace('', '') || '/'
  const isHome = cleanPathname === "/"

  // Função para renderizar os links do menu
  const renderMenuLinks = (isMobile = false) => {
    if (loading) {
      return (
        <>
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className={isMobile ? "py-3" : ""}>
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </>
      )
    }

    if (error) {
      return LINKS.map((link, idx) => {
        const isActive =
          link.href === "/"
            ? cleanPathname === "/"
            : pathname.startsWith(link.href)

        return isMobile ? (
          <a
            key={idx}
            href={link.href}
            className={cn(
              "block py-3 px-4 text-lg font-medium transition-colors hover:bg-gray-50 rounded-lg ",
              "text-[#2f5334]",
              isActive && "text-[#c6d755] bg-gray-50"
            )}
          >
            {link.label}
          </a>
        ) : (
          <NavigationMenuItem key={idx}>
            <NavigationMenuLink
              href={link.href}
              className={cn(
                "text-[15px] font-medium leading-none ",
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
    }

    if (menu && menu.length > 0) {
      return menu.map(({ name, href }, idx) => {
        const isActive =
          href === "/"
            ? cleanPathname === "/"
            : pathname.startsWith("" + href)

        const fullHref = href === "/" ? "/" : "" + href

        return isMobile ? (
          <a
            key={idx}
            href={fullHref}
            className={cn(
              "block py-3 px-4 text-lg font-medium transition-colors hover:bg-gray-50 rounded-lg ",
              "text-[#2f5334]",
              isActive && "text-[#c6d755] bg-gray-50"
            )}
          >
            {name}
          </a>
        ) : (
          <NavigationMenuItem key={idx}>
            <NavigationMenuLink
              href={fullHref}
              className={cn(
                "text-[15px] leading-none ",
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
    }

    // Fallback final
    return LINKS.map((link, idx) => (
      isMobile ? (
        <a
          key={idx}
          href={link.href}
          className="block py-3 px-4 text-lg font-medium text-[#2f5334] transition-colors hover:bg-gray-50 rounded-lg "
        >
          {link.label}
        </a>
      ) : (
        <NavigationMenuItem key={idx}>
          <NavigationMenuLink
            href={link.href}
            className={cn(
              "text-[15px] font-medium leading-none ",
              "text-[#2f5334]",
              "transition-colors hover:opacity-80"
            )}
          >
            {link.label}
          </NavigationMenuLink>
        </NavigationMenuItem>
      )
    ))
  }

  return (
    <header className={cn(
      "w-full bg-[#f7f7f7] shadow-sm",
      isHome && "fixed top-0 left-0 right-0 z-50"
    )}>
      <div className="mx-auto max-w-[1350px] flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img 
            src={Logo} 
            alt="Memorial Parque Uberaba"
            className="py-2 h-auto w-50"
          />
        </a>

        {/* Menu Desktop */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex gap-4">
            {renderMenuLinks(false)}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Menu Mobile */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <button className="p-2 text-[#2f5334] hover:bg-gray-100 rounded-lg transition-colors">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 sm:w-96">
            <SheetHeader>
              <SheetTitle className="text-left text-[#2f5334] text-xl font-bold">
                Menu
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <ScrollArea className="h-[calc(100vh-120px)]">
                <div className="space-y-2 pr-4">
                  {renderMenuLinks(true)}
                </div>
              </ScrollArea>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

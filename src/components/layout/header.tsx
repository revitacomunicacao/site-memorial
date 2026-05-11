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
import { Menu } from "lucide-react"

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/institucional", label: "Institucional" },
  { href: "/servicos", label: "Serviços" },
  { href: "/estrutura", label: "Estrutura" },
  { href: "/planos", label: "Planos" },
  { href: "/obituario", label: "Obituário" },
  { href: "/velorio-online", label: "Velório online" },
  { href: "/faq", label: "FAQ" },
  { href: "/primeiros-passos", label: "Primeiros Passos" },
  { href: "/comunicacao", label: "Comunicação" },
  { href: "/como-chegar", label: "Como chegar" },
  { href: "/contato", label: "Contato" },
]

export default function Header() {
  // pega a rota atual para marcar o ativo
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/"

  // Verifica se está na home para aplicar header fixo
  // Remove o basename para verificar se é a home
  const cleanPathname = pathname.replace("", "") || "/"
  const isHome = cleanPathname === "/"

  // Função para renderizar os links do menu
  // Agora usa apenas LINKS, mas com a MESMA tipografia/classe do branch `menu && menu.length > 0`
  const renderMenuLinks = (isMobile = false) => {
    const menu = LINKS.map((link) => ({
      name: link.label,
      href: link.href,
    }))

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
        <NavigationMenuItem key={idx} className="shrink-0">
          <NavigationMenuLink
            href={fullHref}
            className={cn(
              "inline-flex h-auto min-h-0 flex-row flex-nowrap items-center gap-0 rounded-md px-1.5 py-2 text-[13px] leading-snug whitespace-nowrap xl:text-[14px]",
              "bg-transparent text-[#2f5334] hover:bg-transparent hover:text-[#2f5334]",
              "focus:bg-transparent data-[active=true]:bg-transparent data-[active=true]:hover:bg-transparent",
              "transition-opacity hover:opacity-80",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#395e3e]/25",
              isActive && "font-semibold text-[#c6d755] hover:text-[#c6d755]"
            )}
          >
            {name}
          </NavigationMenuLink>
        </NavigationMenuItem>
      )
    })
  }

  return (
    <header
      className={cn(
        "w-full bg-[#f7f7f7] shadow-sm",
        isHome && "fixed top-0 left-0 right-0 z-50"
      )}
    >
      <div className="mx-auto flex max-w-[1350px] items-center justify-between gap-3 px-3 sm:px-4">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img
            src={Logo}
            alt="Memorial Parque Uberaba"
            className="py-2 h-auto w-50"
          />
        </a>

        {/* Menu Desktop: viewport=false evita viewport Radix desnecessário em links simples */}
        <NavigationMenu
          viewport={false}
          className="hidden min-w-0 max-w-none flex-1 justify-end lg:flex"
        >
          <NavigationMenuList className="!flex-initial flex flex-wrap items-center justify-end gap-x-1.5 gap-y-1 xl:gap-x-2.5">
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

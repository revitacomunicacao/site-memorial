import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
import { ChevronDown, Menu } from "lucide-react"

type MenuChild = { href: string; label: string }
type MenuLink = { href: string; label: string; children?: MenuChild[] }

const LINKS: MenuLink[] = [
  { href: "/", label: "Home" },
  { href: "/institucional", label: "Institucional" },
  { href: "/servicos", label: "Serviços" },
  { href: "/estrutura", label: "Estrutura" },
  {
    href: "/planos",
    label: "Planos",
    children: [
      { href: "/planos", label: "Jazigo" },
      { href: "/cremacao", label: "Cremação" },
    ],
  },
  { href: "/obituario", label: "Obituário" },
  { href: "/velorio-online", label: "Velório online" },
  { href: "/faq", label: "FAQ" },
  { href: "/primeiros-passos", label: "Primeiros Passos" },
  { href: "/comunicacao", label: "Comunicação" },
  { href: "/como-chegar", label: "Como chegar" },
  { href: "/contato", label: "Contato" },
]

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

function MobileSubmenu({
  label,
  items,
  pathname,
  defaultOpen,
}: {
  label: string
  items: MenuChild[]
  pathname: string
  defaultOpen: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  const isActive = items.some((item) => isLinkActive(pathname, item.href))

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className={cn(
          "flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-lg font-medium text-[#2f5334] transition-colors hover:bg-gray-50",
          isActive && "bg-gray-50 text-[#c6d755]"
        )}
      >
        {label}
        <ChevronDown
          className={cn("h-5 w-5 shrink-0 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="mt-1 ml-3 flex flex-col gap-1 border-l border-[#2f5334]/15 pl-2">
          {items.map((item) => {
            const childIsActive = isLinkActive(pathname, item.href)
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-lg px-4 py-2.5 text-base font-medium text-[#2f5334] transition-colors hover:bg-gray-50",
                  childIsActive && "bg-gray-50 font-semibold text-[#c6d755]"
                )}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default function Header() {
  // pega a rota atual para marcar o ativo
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/"

  const isHome = pathname === "/"

  const linkClass = (isActive: boolean) =>
    cn(
      "inline-flex h-auto min-h-0 flex-row flex-nowrap items-center gap-0 rounded-md px-1.5 py-2 text-[13px] font-normal leading-snug whitespace-nowrap xl:text-[14px]",
      "bg-transparent text-[#2f5334] hover:bg-transparent hover:text-[#2f5334]",
      "focus:bg-transparent data-[active=true]:bg-transparent data-[active=true]:hover:bg-transparent",
      "data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent",
      "transition-opacity hover:opacity-80",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#395e3e]/25",
      isActive && "font-semibold text-[#c6d755] hover:text-[#c6d755] data-[state=open]:text-[#c6d755]"
    )

  const renderMenuLinks = (isMobile = false) => {
    return LINKS.map((link) => {
      const childActive = link.children?.some((child) =>
        isLinkActive(pathname, child.href)
      )
      const isActive = childActive || isLinkActive(pathname, link.href)

      if (isMobile && link.children) {
        return (
          <MobileSubmenu
            key={link.label}
            label={link.label}
            items={link.children}
            pathname={pathname}
            defaultOpen={Boolean(childActive)}
          />
        )
      }

      if (isMobile) {
        return (
          <a
            key={link.href}
            href={link.href}
            className={cn(
              "block py-3 px-4 text-lg font-medium transition-colors hover:bg-gray-50 rounded-lg",
              "text-[#2f5334]",
              isActive && "text-[#c6d755] bg-gray-50"
            )}
          >
            {link.label}
          </a>
        )
      }

      if (link.children) {
        return (
          <NavigationMenuItem key={link.label} className="shrink-0">
            <NavigationMenuTrigger className={linkClass(isActive)}>
              {link.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="z-50 min-w-[180px] bg-[#f7f7f7] p-1.5">
              <ul className="flex flex-col">
                {link.children.map((child) => {
                  const childIsActive = isLinkActive(pathname, child.href)
                  return (
                    <li key={child.href}>
                      <NavigationMenuLink
                        href={child.href}
                        className={cn(
                          "block rounded-md px-3 py-2 text-[14px] text-[#2f5334]",
                          "hover:bg-white hover:text-[#2f5334]",
                          "focus:bg-white focus:text-[#2f5334]",
                          childIsActive && "bg-white font-semibold text-[#c6d755] hover:text-[#c6d755]"
                        )}
                      >
                        {child.label}
                      </NavigationMenuLink>
                    </li>
                  )
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )
      }

      return (
        <NavigationMenuItem key={link.href} className="shrink-0">
          <NavigationMenuLink href={link.href} className={linkClass(isActive)}>
            {link.label}
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

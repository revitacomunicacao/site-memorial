import { useParams } from "react-router-dom"
import { useContentById } from "@/hooks/useContentById"
import { IBlogId } from "../types/IBlog"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>()
  const { data: blog, loading, error, refetch } = useContentById<IBlogId>("/blog", id || "0")

  if (loading) {
    return (
      <main className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <Skeleton className="h-10 w-32" />
          </div>
          <Skeleton className="h-96 w-full rounded-2xl mb-8" />
          <div className="space-y-4">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-2/3" />
          </div>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-[#365c3a] mb-4">Erro ao carregar blog</h1>
          <p className="text-gray-600 mb-6">Ocorreu um erro ao carregar o blog. Tente novamente.</p>
          <Button onClick={refetch} className="bg-[#365c3a] hover:bg-[#2a4a2e]">
            Tentar novamente
          </Button>
        </div>
      </main>
    )
  }

  if (!blog) {
    return (
      <main className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-[#365c3a] mb-4">Blog não encontrado</h1>
          <p className="text-gray-600 mb-6">O blog que você está procurando não existe.</p>
          <Link to="/comunicacao">
            <Button className="bg-[#365c3a] hover:bg-[#2a4a2e]">
              Voltar para blogs
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Botão de voltar */}
        <div className="mb-8">
          <Link to="/comunicacao">
            <Button variant="outline" className="flex items-center gap-2 text-[#365c3a] border-[#365c3a] hover:bg-[#365c3a] hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Voltar para blogs
            </Button>
          </Link>
        </div>

        {/* Imagem destacada */}
        <div className="mb-8 flex justify-center">
          <img 
            src={blog.imagem_destacada} 
            alt={blog.title}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Conteúdo do blog */}
        <article className="prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#365c3a] mb-6 font-heebo">
            {blog.title}
          </h1>
          
          <div 
            className="text-[20px] font-questrial font-normal text-[#000000] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </article>
      </div>
    </main>
  )
}

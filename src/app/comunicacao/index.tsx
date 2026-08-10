import { useContent } from "@/hooks/useContent"
import { IBlog } from "./types/IBlog";
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import foto from "@/assets/comunicacao.jpeg"

export default function Comunicacao() {
  const { data: blogs, loading, error, refetch } = useContent<IBlog>("/blog");
  
  if (loading) {
    return (
      <main className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-1/3 mx-auto mb-4" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-[#365c3a] mb-4">Erro ao carregar blogs</h1>
          <p className="text-gray-600 mb-6">Ocorreu um erro ao carregar os blogs. Tente novamente.</p>
          <Button onClick={refetch} className="bg-[#365c3a] hover:bg-[#2a4a2e]">
            Tentar novamente
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <img className="mb-10 block w-full h-auto object-cover object-center" src={foto} alt="banner da pagina" />
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#365c3a] font-heebo">
            Notícias e Comunicados
          </h1>
        </div>

        {/* Lista de Blogs */}
        {blogs && blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={blog.imagem_destacada} 
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-heebo text-[#365c3a] line-clamp-2">
                    {blog.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 font-questrial line-clamp-3 mb-4">
                    {blog.summary}
                  </CardDescription>
                  <Link to={`/comunicacao/${blog.id}`}>
                    <Button className="w-full bg-[#365c3a] hover:bg-[#2a4a2e] font-questrial">
                      Ler mais
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-[#365c3a] mb-4">Nenhum blog encontrado</h2>
            <p className="text-gray-600">Não há blogs disponíveis no momento.</p>
          </div>
        )}
      </div>
    </main>
  )
}
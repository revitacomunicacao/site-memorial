import { useState } from "react"
import { useSepultados } from "./hooks/useSepultados"
import { Search, Heart, Cross, Info } from "lucide-react"
import { LoadingSpinner } from "./components/LoadingSpinner"
import { Header } from "./components/Header"
import { SearchForm } from "./components/SearchForm"
import { ResultItem } from "./components/ResultItem"
import { PessoaDetailsDialog } from "./components/PessoaDetailsDialog"
import { DailyDeceasedList } from "./components/DailyDeceasedList"

// Tipo para o tipo de busca
type SearchType = "nome" | "cpf" | "data"

// Tipo para pessoa baseado na resposta da API
type Pessoa = {
  id: number
  nome: string
  cpf: string
  cpf_formatado: string
  data_nascimento: string
  data_nascimento_formatada: string
  data_falecimento: string
  data_falecimento_formatada: string
  data_sepultamento: string
  data_sepultamento_formatada: string
  horario_sepultamento: string
  horario_sepultamento_formatado: string
  mae: string
  pai: string
  setor: string
  quadra_nome: string
  jazigo: string
  gaveta: string
  tipo?: "Jazigo" | "Ossuário" | string
  bloco?: string | null
  nicho?: string | null
  gaveta_ossuario?: string | null
  quadra_foto: string
  created_at: string
  quadra_id: number
}

export default function Obituario() {
  const { data: sepultados, loading, error } = useSepultados()
  const [searchTerm, setSearchTerm] = useState("")
  const [searchType, setSearchType] = useState<SearchType>("nome")
  const [hasSearched, setHasSearched] = useState(false)
  const [searchResults, setSearchResults] = useState<Pessoa[]>([])
  const [selectedPessoa, setSelectedPessoa] = useState<Pessoa | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const normalize = (value: string) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim() || !sepultados?.pessoas) {
      setSearchResults([])
      setHasSearched(false)
      return
    }

    const filteredPessoas = sepultados.pessoas.filter((pessoa: Pessoa) => {
      switch (searchType) {
        case "nome":
          // Busca por nome que CONTÉM o termo, ignorando acentos
          return normalize(pessoa.nome).includes(normalize(searchTerm))
        case "cpf":
          // Busca por CPF EXATO - remove formatação e compara apenas números
          const searchCPF = searchTerm.replace(/\D/g, "") // Remove caracteres não numéricos
          const pessoaCPF = pessoa.cpf.replace(/\D/g, "") // Remove formatação do CPF da pessoa
          
          return pessoaCPF === searchCPF // Comparação exata
        case "data":
          // Busca APENAS por data de nascimento
          const searchDate = searchTerm.replace(/\D/g, "") // Remove caracteres não numéricos
          
          // Busca nas datas formatadas (DD/MM/AAAA) e nas datas originais (AAAA-MM-DD)
          const nascimentoFormatada = pessoa.data_nascimento_formatada.replace(/\D/g, "")
          const nascimentoOriginal = pessoa.data_nascimento.replace(/\D/g, "")
          
          return nascimentoFormatada.includes(searchDate) || 
                 nascimentoOriginal.includes(searchDate)
        default:
          return false
      }
    })

    setSearchResults(filteredPessoas)
    setHasSearched(true)
  }

  const handleViewDetails = (pessoa: Pessoa) => {
    setSelectedPessoa(pessoa)
    setDialogOpen(true)
  }

  const handleClearSearch = () => {
    setSearchTerm("")
    setHasSearched(false)
    setSearchResults([])
  }

  if (loading) {
    return <LoadingSpinner text="Carregando dados..." />
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="text-center p-6 sm:p-8 lg:p-10 bg-white rounded-2xl sm:rounded-3xl shadow-xl border-2 sm:border-4 border-gray-200 max-w-md w-full">
          <Cross className="h-16 w-16 sm:h-20 sm:w-20 text-red-500 mx-auto mb-4 sm:mb-6" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">Erro ao carregar</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">Tente novamente mais tarde</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Conteúdo principal */}
          <div className="lg:col-span-3 order-1 lg:order-1">
            {/* Search Section */}
            <SearchForm
              searchTerm={searchTerm}
              searchType={searchType}
              onSearchTermChange={setSearchTerm}
              onSearchTypeChange={setSearchType}
              onSubmit={handleSearch}
            />

            {/* Results Section */}
            {!hasSearched ? (
              <div className="text-center py-12 sm:py-16 lg:py-20 bg-white rounded-2xl sm:rounded-3xl shadow-xl border-2 sm:border-4 border-gray-200 mx-2 sm:mx-0">
                <Search className="h-16 w-16 sm:h-20 sm:w-20 text-gray-300 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 px-4">Faça uma busca para encontrar sepultados</h3>
                <p className="text-base sm:text-lg text-gray-600 px-4">Use o formulário acima para pesquisar por nome, CPF ou data</p>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                {/* Lista de resultados */}
                {searchResults.length === 0 ? (
                  <div className="text-center py-12 sm:py-16 bg-white rounded-2xl sm:rounded-3xl shadow-xl border-2 sm:border-4 border-gray-200 mx-2 sm:mx-0">
                    <Search className="h-16 w-16 sm:h-20 sm:w-20 text-gray-300 mx-auto mb-4 sm:mb-6" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 px-4">Nenhum resultado encontrado</h3>
                    <p className="text-base sm:text-lg text-gray-600 px-4">Tente ajustar os termos de busca</p>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                    {searchResults.map((pessoa: Pessoa) => (
                      <ResultItem 
                        key={pessoa.id} 
                        pessoa={pessoa} 
                        onViewDetails={handleViewDetails}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sidebar com lista de falecidos do dia */}
          <div className="lg:col-span-1 order-2 lg:order-2">
            <div className="sticky top-6">
              <DailyDeceasedList pessoas={sepultados?.pessoas || []} />
            </div>
          </div>
        </div>
      </div>

      {/* Dialog com detalhes */}
      <PessoaDetailsDialog
        pessoa={selectedPessoa}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  )
}

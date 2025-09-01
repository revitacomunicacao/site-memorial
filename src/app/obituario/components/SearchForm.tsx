import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"

// Tipo para o tipo de busca
type SearchType = "nome" | "cpf" | "data"

interface SearchFormProps {
  searchTerm: string
  searchType: SearchType
  onSearchTermChange: (value: string) => void
  onSearchTypeChange: (value: SearchType) => void
  onSubmit: (e: React.FormEvent) => void
}

export function SearchForm({
  searchTerm,
  searchType,
  onSearchTermChange,
  onSearchTypeChange,
  onSubmit
}: SearchFormProps) {
  const [displayValue, setDisplayValue] = useState("")

  // Aplicar máscara baseada no tipo de busca
  useEffect(() => {
    if (searchType === "cpf" && searchTerm) {
      // Máscara para CPF: 111.222.333-45
      const value = searchTerm.replace(/\D/g, "")
      const masked = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
      setDisplayValue(masked)
    } else if (searchType === "data" && searchTerm) {
      // Máscara para data: DD/MM/AAAA
      const value = searchTerm.replace(/\D/g, "")
      const masked = value.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")
      setDisplayValue(masked)
    } else {
      setDisplayValue(searchTerm)
    }
  }, [searchTerm, searchType])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    
    if (searchType === "cpf") {
      // Remove tudo que não é dígito e limita a 11 caracteres
      const numericValue = value.replace(/\D/g, "").slice(0, 11)
      onSearchTermChange(numericValue)
    } else if (searchType === "data") {
      // Remove tudo que não é dígito e limita a 8 caracteres
      const numericValue = value.replace(/\D/g, "").slice(0, 8)
      onSearchTermChange(numericValue)
    } else {
      onSearchTermChange(value)
    }
  }

  const getPlaceholder = () => {
    switch (searchType) {
      case "nome":
        return "Digite o nome da pessoa..."
      case "cpf":
        return "000.000.000-00"
      case "data":
        return "DD/MM/AAAA"
      default:
        return "Digite o termo de busca..."
    }
  }

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border-2 sm:border-4 border-gray-100 mx-2 sm:mx-0">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">Pesquisar Sepultados</h2>
      
      <form onSubmit={onSubmit} className="space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <Label htmlFor="search-type" className="text-sm sm:text-base font-semibold text-gray-700">
              Tipo de Busca
            </Label>
            <select 
              value={searchType} 
              onChange={(e) => onSearchTypeChange(e.target.value as SearchType)}
              className="w-full h-10 sm:h-12 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 hover:bg-gray-100 px-3 focus:outline-none focus:border-[#395e3e] focus:ring-2 focus:ring-[#395e3e]/20"
            >
              <option value="nome">Nome</option>
              <option value="cpf">CPF</option>
              <option value="data">Data de nascimento</option>
            </select>
          </div>
          
          <div className="lg:col-span-2 space-y-2 sm:space-y-3">
            <Label htmlFor="search-term" className="text-sm sm:text-base font-semibold text-gray-700">
              Termo de Busca
            </Label>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                <Input
                  id="search-term"
                  type="text"
                  value={displayValue}
                  onChange={handleInputChange}
                  placeholder={getPlaceholder()}
                  className="w-full h-10 sm:h-12 pl-10 sm:pl-12 pr-4 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 hover:bg-gray-100 focus:bg-white focus:border-[#395e3e] focus:ring-2 focus:ring-[#395e3e]/20"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full sm:w-auto h-10 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold bg-[#395e3e] hover:bg-[#2d4a30] rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

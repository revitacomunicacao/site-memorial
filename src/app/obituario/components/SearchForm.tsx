import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"

type SearchType = "nome" | "cpf" | "data"

interface SearchFormProps {
  searchType: SearchType
  onSearchTypeChange: (value: SearchType) => void
  onSubmit: (searchTerm: string, searchType: SearchType) => void
}

function formatCpfMask(digits: string): string {
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`
  if (digits.length <= 9) {
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`
  }
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`
}

function formatDateMask(digits: string): string {
  if (digits.length <= 2) return digits
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`
}

const PLACEHOLDER: Record<SearchType, string> = {
  nome: "Digite o nome completo",
  cpf: "Digite o CPF completo (ex: 000.000.000-00)",
  data: "Digite a data de nascimento (ex: 01/01/2025)",
}

const HELPER_TEXT: Record<SearchType, string> = {
  nome: "Digite o nome e encontre pessoas que começam com essas letras",
  cpf: "Digite o CPF completo para encontrar a pessoa exata",
  data: "Busca apenas por data de nascimento",
}

export function SearchForm({
  searchType,
  onSearchTypeChange,
  onSubmit,
}: SearchFormProps) {
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    setInputValue("")
  }, [searchType])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (searchType === "cpf") {
      const digits = value.replace(/\D/g, "").slice(0, 11)
      setInputValue(formatCpfMask(digits))
      return
    }

    if (searchType === "data") {
      const digits = value.replace(/\D/g, "").slice(0, 8)
      setInputValue(formatDateMask(digits))
      return
    }

    setInputValue(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const term =
      searchType === "nome"
        ? inputValue.trim()
        : inputValue.replace(/\D/g, "")
    onSubmit(term, searchType)
  }

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border-2 sm:border-4 border-gray-100 mx-2 sm:mx-0">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
        Pesquisar Sepultados
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <Label
              htmlFor="search-type"
              className="text-sm sm:text-base font-semibold text-gray-700"
            >
              Tipo de Busca
            </Label>
            <select
              id="search-type"
              value={searchType}
              onChange={(e) =>
                onSearchTypeChange(e.target.value as SearchType)
              }
              className="w-full h-10 sm:h-12 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl bg-gray-50 hover:bg-gray-100 px-3 focus:outline-none focus:border-[#395e3e] focus:ring-2 focus:ring-[#395e3e]/20"
            >
              <option value="nome">Nome</option>
              <option value="cpf">CPF</option>
              <option value="data">Data de nascimento</option>
            </select>
          </div>

          <div className="lg:col-span-2 space-y-2 sm:space-y-3">
            <Label
              htmlFor="search-term"
              className="text-sm sm:text-base font-semibold text-gray-700"
            >
              Termo de Busca
            </Label>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                <Input
                  id="search-term"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder={PLACEHOLDER[searchType]}
                  autoComplete="off"
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
            <p className="text-xs sm:text-sm text-gray-500 mt-2 px-1">
              {HELPER_TEXT[searchType]}
            </p>
          </div>
        </div>
      </form>
    </div>
  )
}

import { Calendar, MapPin, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Interface para pessoa baseada no tipo ISepultados
interface Pessoa {
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
  mae: string
  pai: string
  setor: string
  quadra_nome: string
  jazigo: string
  gaveta: string
  quadra_foto: string
  created_at: string
  quadra_id: number
}

interface ResultItemProps {
  pessoa: Pessoa
  onViewDetails: (pessoa: Pessoa) => void
}

export function ResultItem({ pessoa, onViewDetails }: ResultItemProps) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200 mx-2 sm:mx-0">
      <CardContent className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <Button
              variant="ghost"
              className="p-0 h-auto text-left font-semibold text-base sm:text-lg text-[#395e3e] hover:text-[#2d4a30] hover:bg-transparent break-words"
              onClick={() => onViewDetails(pessoa)}
            >
              {pessoa.nome}
            </Button>
            
            <div className="mt-2 space-y-2 sm:space-y-1">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                <span className="text-sm sm:text-lg break-words">
                  Quadra {pessoa.quadra_nome} • Setor {pessoa.setor} • Jazigo {pessoa.jazigo} • Gaveta {pessoa.gaveta}
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 flex-shrink-0" />
                  <span className="text-xs sm:text-lg">Falecimento: {pessoa.data_falecimento_formatada}</span>
                </div>
                
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 flex-shrink-0" />
                  <span className="text-xs sm:text-lg">Sepultamento: {pessoa.data_sepultamento_formatada}</span>
                </div>
              </div>
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(pessoa)}
            className="w-full sm:w-auto border-[#395e3e] text-[#395e3e] hover:bg-[#395e3e] hover:text-white text-xs sm:text-sm"
          >
            Ver Detalhes
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

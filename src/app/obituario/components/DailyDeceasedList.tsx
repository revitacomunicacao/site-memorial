import { Calendar, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Interface para pessoa
interface Pessoa {
  id: number
  nome: string
  data_falecimento: string
  data_falecimento_formatada: string
}

interface DailyDeceasedListProps {
  pessoas: Pessoa[]
}

export function DailyDeceasedList({ pessoas }: DailyDeceasedListProps) {
  // Função para obter a data atual no formato YYYY-MM-DD
  const getTodayDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  // Função para obter a data atual formatada
  const getTodayFormatted = () => {
    const today = new Date()
    return today.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  // Filtrar pessoas que faleceram hoje
  const todayDeceased = pessoas.filter(pessoa => {
    return pessoa.data_falecimento === getTodayDate()
  })

  if (todayDeceased.length === 0) {
    return (
      <Card className="w-full max-w-sm bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-700">
            <Calendar className="h-5 w-5 text-blue-500" />
            Falecidos de Hoje
          </CardTitle>
          <p className="text-sm text-gray-500">{getTodayFormatted()}</p>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <Heart className="h-8 w-8 text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Nenhum falecimento registrado hoje</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-sm bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-bold text-red-700">
          <Calendar className="h-5 w-5 text-red-500" />
          Falecidos de Hoje
        </CardTitle>
        <p className="text-sm text-gray-600">{getTodayFormatted()}</p>
        <p className="text-xs text-gray-500">
          {todayDeceased.length} {todayDeceased.length === 1 ? 'pessoa' : 'pessoas'}
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {todayDeceased.map((pessoa) => (
            <div
              key={pessoa.id}
              className="flex items-center gap-3 p-3 bg-white rounded-lg border border-red-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex-shrink-0">
                <Heart className="h-4 w-4 text-red-400" />
              </div>
                             <div className="flex-1 min-w-0">
                 <p className="text-sm font-medium text-gray-800 truncate">
                   {pessoa.nome}
                 </p>
               </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

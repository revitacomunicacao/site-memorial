import { memo } from "react"
import { Calendar, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Interface para pessoa
interface Pessoa {
  id: number
  nome: string
  data_sepultamento: string
  data_sepultamento_formatada: string
  horario_sepultamento?: string | null
  horario_sepultamento_formatado?: string | null
}

const TIMEZONE_BR = "America/Sao_Paulo"

/** Data de hoje no fuso do Memorial (YYYY-MM-DD), válida até 23:59:59 local. */
function getTodayDateKey(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIMEZONE_BR }).format(
    new Date()
  )
}

/** Normaliza data da API (YYYY-MM-DD, datetime ISO ou DD/MM/YYYY) para YYYY-MM-DD. */
function normalizeSepultamentoDate(value: string | null | undefined): string | null {
  if (!value?.trim()) return null
  const trimmed = value.trim()

  const isoPrefix = trimmed.match(/^(\d{4}-\d{2}-\d{2})/)
  if (isoPrefix) return isoPrefix[1]

  const brDate = trimmed.match(/^(\d{2})\/(\d{2})\/(\d{4})/)
  if (brDate) return `${brDate[3]}-${brDate[2]}-${brDate[1]}`

  return null
}

function isSepultamentoHoje(pessoa: Pessoa): boolean {
  const hoje = getTodayDateKey()
  const dataRaw = normalizeSepultamentoDate(pessoa.data_sepultamento)
  const dataFormatada = normalizeSepultamentoDate(pessoa.data_sepultamento_formatada)
  return dataRaw === hoje || dataFormatada === hoje
}

/** Exibe horário: usa o campo formatado da API ou deriva de TIME MySQL (HH:MM:SS). */
function getHorarioExibicao(pessoa: Pessoa): string | null {
  const formatted = pessoa.horario_sepultamento_formatado?.trim()
  if (formatted) return formatted

  const raw = pessoa.horario_sepultamento?.trim()
  if (!raw) return null

  const parts = raw.split(":")
  if (parts.length >= 2) {
    const h = parts[0].replace(/\D/g, "").padStart(2, "0")
    const m = parts[1].replace(/\D/g, "").padStart(2, "0")
    if (h.length <= 2 && m.length === 2) return `${h}:${m}`
  }
  return raw
}

interface DailyDeceasedListProps {
  pessoas: Pessoa[]
}

export const DailyDeceasedList = memo(function DailyDeceasedList({
  pessoas,
}: DailyDeceasedListProps) {
  const getTodayFormatted = () =>
    new Intl.DateTimeFormat("pt-BR", {
      timeZone: TIMEZONE_BR,
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date())

  const todaySepultamentos = pessoas.filter(isSepultamentoHoje)

  if (todaySepultamentos.length === 0) {
    return (
      <Card className="w-full max-w-sm bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 shadow-lg">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-700">
            <Calendar className="h-5 w-5 text-blue-500" />
            Sepultamentos de Hoje
          </CardTitle>
          <p className="text-sm text-gray-500">{getTodayFormatted()}</p>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <Heart className="h-8 w-8 text-gray-300 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Nenhum sepultamento agendado para hoje</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-sm bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-bold text-blue-700">
          <Calendar className="h-5 w-5 text-blue-500" />
          Sepultamentos de Hoje
        </CardTitle>
        <p className="text-sm text-gray-600">{getTodayFormatted()}</p>
        <p className="text-xs text-gray-500">
          {todaySepultamentos.length} {todaySepultamentos.length === 1 ? 'sepultamento' : 'sepultamentos'}
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {todaySepultamentos.map((pessoa) => {
            const horario = getHorarioExibicao(pessoa)
            return (
            <div
              key={pessoa.id}
              className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex-shrink-0">
                <Heart className="h-4 w-4 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">
                  {pessoa.nome}
                </p>
                {horario ? (
                  <p className="text-xs text-blue-600 font-medium">
                    Horário: {horario}
                  </p>
                ) : null}
              </div>
            </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
})

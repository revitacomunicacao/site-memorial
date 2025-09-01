import { Calendar, User, MapPin } from "lucide-react"
import { Pessoa } from "@/types/sepultados"

interface PessoaCardProps {
  pessoa: Pessoa
}

export function PessoaCard({ pessoa }: PessoaCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Header do Card */}
      <div className="bg-gradient-to-r from-[#395e3e] to-[#4a7c4f] p-6 text-white">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold">{pessoa.nome}</h3>
          <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
            ID: {pessoa.id}
          </div>
        </div>
        <div className="flex items-center space-x-2 text-white/90">
          <User className="h-4 w-4" />
          <span className="text-sm">{pessoa.cpf_formatado}</span>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6 space-y-4">
        {/* Informações Pessoais */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Mãe
            </label>
            <p className="text-sm text-gray-900">{pessoa.mae}</p>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Pai
            </label>
            <p className="text-sm text-gray-900">{pessoa.pai}</p>
          </div>
        </div>

        {/* Datas */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Calendar className="h-4 w-4 text-[#395e3e]" />
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Nascimento
              </label>
              <p className="text-sm text-gray-900">{pessoa.data_nascimento_formatada}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Calendar className="h-4 w-4 text-red-500" />
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Falecimento
              </label>
              <p className="text-sm text-gray-900">{pessoa.data_falecimento_formatada}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Calendar className="h-4 w-4 text-blue-500" />
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Sepultamento
              </label>
              <p className="text-sm text-gray-900">{pessoa.data_sepultamento_formatada}</p>
            </div>
          </div>
        </div>

        {/* Localização */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <MapPin className="h-4 w-4 text-[#395e3e]" />
            <div className="flex-1">
              <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                Localização
              </label>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-900">
                  Setor {pessoa.setor} • Quadra {pessoa.quadra_nome} • Jazigo {pessoa.jazigo}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Foto da Quadra (se disponível) */}
        {pessoa.quadra_foto && (
          <div className="pt-4 border-t border-gray-200">
            <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              Foto da Quadra
            </label>
            <div className="relative">
              <img
                src={`/api/quadras/${pessoa.quadra_foto}`}
                alt={`Quadra ${pessoa.quadra_nome}`}
                className="w-full h-32 object-cover rounded-lg border border-gray-200"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

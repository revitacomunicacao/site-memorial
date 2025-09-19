import { Calendar, MapPin, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

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

// Configuração para URLs de imagens
const IMAGE_CONFIG = {
  // Base URL para as imagens das quadras
  QUADRA_BASE_URL: 'https://memorialparqueuberaba.com.br/obituario-adm/uploads',
  
  // Função para gerar URL completa da imagem
  getQuadraImageUrl: (filename: string): string => {
    if (!filename) return ''
    return `${IMAGE_CONFIG.QUADRA_BASE_URL}/${filename}`
  }
}

interface PessoaDetailsDialogProps {
  pessoa: Pessoa | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PessoaDetailsDialog({ pessoa, open, onOpenChange }: PessoaDetailsDialogProps) {
  if (!pessoa) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[1400px] max-w-[95vw] max-h-[95vh] overflow-y-auto bg-white border-4 border-gray-200 rounded-3xl p-0">
        <DialogHeader className="bg-gray-50 p-6 rounded-t-3xl border-b-2 border-gray-200">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-3xl font-bold text-[#395e3e]">
              {pessoa.nome}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Informações à esquerda */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Informações Pessoais
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">CPF:</span>
                  <span className="text-gray-900">{pessoa.cpf_formatado}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Mãe:</span>
                  <span className="text-gray-900">{pessoa.mae}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Pai:</span>
                  <span className="text-gray-900">{pessoa.pai}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Datas
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Nascimento:</span>
                  <span className="text-gray-900">{pessoa.data_nascimento_formatada}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Falecimento:</span>
                  <span className="text-red-700 font-medium">{pessoa.data_falecimento_formatada}</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold text-gray-700">Sepultamento:</span>
                  <span className="text-blue-700 font-medium">{pessoa.data_sepultamento_formatada}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
                Localização
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Quadra:</span>
                  <span className="text-gray-900">{pessoa.quadra_nome}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Setor:</span>
                  <span className="text-gray-900">{pessoa.setor}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Jazigo:</span>
                  <span className="text-gray-900">{pessoa.jazigo}</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="font-semibold text-gray-700">Gaveta:</span>
                  <span className="text-gray-900">{pessoa.gaveta}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Foto da Quadra à direita */}
          <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
              Foto da Quadra
            </h3>
            
            {pessoa.quadra_foto ? (
              <div className="relative">
                <img
                  src={IMAGE_CONFIG.getQuadraImageUrl(pessoa.quadra_foto)}
                  alt={`Quadra ${pessoa.quadra_nome}`}
                  className="w-full h-96 object-cover rounded-xl border-2 border-gray-200 shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="hidden absolute inset-0  items-center justify-center bg-gray-100 rounded-xl border-2 border-gray-200">
                  <p className="text-gray-500 text-center text-lg">
                    Foto não disponível
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-96 bg-gray-100 rounded-xl border-2 border-gray-200 flex items-center justify-center">
                <p className="text-gray-500 text-center text-lg">
                  Foto não disponível
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

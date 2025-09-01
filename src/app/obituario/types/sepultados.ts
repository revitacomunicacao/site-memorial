export interface Pessoa {
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
  quadra_foto: string
  created_at: string
  quadra_id: number
}

export interface SepultadosResponse {
  success: boolean
  count: number
  pessoas: Pessoa[]
}

export type SearchType = "nome" | "cpf" | "data"

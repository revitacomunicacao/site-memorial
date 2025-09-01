export interface ISepultados {
  success: boolean;
  count: number;
  pessoas: {
    id: number;
    nome: string;
    data_nascimento: string;
    data_falecimento: string;
    mae: string;
    pai: string;
    setor: string;
    jazigo: string;
    quadra_id: number;
    created_at: string;
    cpf: string;
    data_sepultamento: string;
    quadra_nome: string;
    quadra_foto: string;
    cpf_formatado: string;
    data_nascimento_formatada: string;
    data_falecimento_formatada: string;
    data_sepultamento_formatada: string;
  }[]
}
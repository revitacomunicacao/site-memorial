

// Interface para resposta da API
interface ISepultados {
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

export async function getSepultados(): Promise<ISepultados> {
  try {
    // Usa a URL base correta para o sistema de obituário
    const response = await fetch("https://companhiadamidia.com.br/desenvolvimento/obtuario/admin/api_pessoas.php");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar sepultados:", error);
    // Retorna dados mockados para desenvolvimento
    return {
      success: true,
      count: 0,
      pessoas: []
    };
  }
}
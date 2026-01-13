export interface IServicos {
  id: number;
  title: string;
  descricao: string;
  banner: string;
  tipos_de_servico: {
    nome_do_servico: string;
    imagem: string;
    descricao: string;
  }[];
}

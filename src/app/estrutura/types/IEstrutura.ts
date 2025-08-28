export interface IEstrutura {
  id: number;
  title: string;
  description: string;
  banner: string;
  carrossel_estrutura: {
    foto: string;
    titulo: string;
  }[]
  galeria_da_esquerda: string[]
  galeria_do_meio: string[]
  galeria_da_direita: string[]
}
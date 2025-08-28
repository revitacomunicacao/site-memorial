export interface IFaq {
  id: number;
  title: string;
  banner: string;
  faq: {
    pergunta: string;
    resposta: string;
  }[];
}
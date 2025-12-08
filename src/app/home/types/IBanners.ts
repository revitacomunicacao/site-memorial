export interface IBanners {
  id: number;
  title: string;
  banner: string;              // imagem padrão (desktop)
  banner_responsivo?: string;  // NOVO: imagem mobile
}

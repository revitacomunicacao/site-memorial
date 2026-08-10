export interface IGaleriaFoto {
  id: number
  url: string
  alt: string
  title: string
  caption: string
  description: string
  width: number
  height: number
  sizes: {
    thumbnail: string
    medium: string
    medium_large: string
    large: string
    [key: string]: string | number
  }
}

export interface IGaleriaHome {
  id: number
  title: string
  slug: string
  galeria_de_fotos: IGaleriaFoto[]
  quantidade_fotos: number
}

// Configuração para URLs de imagens
export const IMAGE_CONFIG = {
  // Base URL para as imagens das quadras
  QUADRA_BASE_URL: 'https://memorialparqueuberaba.com.br/obituario-adm/uploads',
  
  // Função para gerar URL completa da imagem
  getQuadraImageUrl: (filename: string): string => {
    if (!filename) return ''
    return `${IMAGE_CONFIG.QUADRA_BASE_URL}/${filename}`
  }
}

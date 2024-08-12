export async function verificarLinkImagem(imageUrl) {
    try {
      const response = await fetch(imageUrl, { method: 'HEAD' });
      console.log('Status do response:', response.status);
      return response.ok;
    } catch (error) {
      console.error('Erro ao verificar link da imagem:', error);
      return false;
    }
  }

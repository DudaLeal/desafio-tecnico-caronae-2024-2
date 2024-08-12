export async function verificarLinkImagem(imageUrl) {
    try {
      const response = await fetch(imageUrl, { method: 'HEAD' });
      console.log('Status do response:', response.ok); // Mostra o status da resposta
      return response.ok;
    } catch (error) {
      console.error('Erro ao verificar link da imagem:', error); // Mostra o erro ocorrido
      return false;
    }
  }

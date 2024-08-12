import { verificarLinkImagem } from './verificarLinkImagem';

describe('verificarLinkImagem', () => {
  it('deve retornar true se o link for acessível', async () => {
    const link = 'https://media.istockphoto.com/id/1359746925/photo/portrait-of-a-handsome-successful-confident-young-mixed-race-latino-man-with-glasses.jpg?s=612x612&w=0&k=20&c=T-hNLBZVl62q0xeMJa-N1aIYpTtvPpL0Y3ZLGo4Q4kk=';
    const resultado = await verificarLinkImagem(link);
    expect(resultado).toBe(true);
  });

  it('deve retornar false se o link não for acessível', async () => {
    const link = 'https://media.istockphoto.com/id/1359746925/portrait-of-a-handsome-successful-confident-young-mixed-race-latino-man-with-glasses.jpg?s=612x612&w=0&k=20&c=T-hNLBZVl62q0xeMJa-N1aIYpTtvPpL0Y3ZLGo4Q4kk=';
    const resultado = await verificarLinkImagem(link);
    expect(resultado).toBe(false);
  });
});
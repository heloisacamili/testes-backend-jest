import { expect, jest } from '@jest/globals';
import Livro from '../../models/livro';

describe('Testatndo o model Livro', () => {
  const objetoLivro = {
    titulo: 'Sherlock Holmes',
    paginas: 250,
    editora_id: 1,
    autor_id: 1,
  }
  
  it('Deve instanciar um novo livro', () => {
    const livro = new Livro(objetoLivro);
  
    expect(livro).toEqual(
      expect.objectContaining(objetoLivro),
    );
  });

  it.skip('Deve salvar livro no BD', () => {
    const livro = new Livro(objetoEditora);

    livro.salvar().then((dados) => {
        expect(dados.titulo).toBe('Sherlock Holmes');
    })
  });

  //simulação MOCK - insert 
  it('Deve fazer uma chamada simulada ao DB', () => {
    const livro = new Livro(objetoLivro);
  
    livro.salvar = jest.fn().mockReturnValue({
      id: 10,
      titulo: 'Sherlock Holmes',
      paginas: 250,
      editora_id: 1,
      autor_id: 1,
      created_at: '2023-11-13',
      updated_at: '2023-11-13'
    });
  
    const retorno = livro.salvar();
  
    expect(retorno).toEqual(
      expect.objectContaining({
          id: expect.any(Number),
          ...objetoLivro,
          created_at: expect.any(String),
          updated_at: expect.any(String),
      })
    )
  })
});


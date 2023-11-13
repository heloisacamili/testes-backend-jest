import { expect, jest } from '@jest/globals';
import Autor from '../../models/autor';

describe('Testatndo o model Autor', () => {
  const objetoAutor = {
    nome: 'Arthur Conan Doyle',
    nacionalidade: 'Escocês'
  }
  
  it('Deve instanciar um novo autor', () => {
    const autor = new Autor(objetoAutor);
  
    expect(autor).toEqual(
      expect.objectContaining(objetoAutor),
    );
  });

  it.skip('Deve salvar autor no BD', () => {
    const autor = new Autor(objetoAutor);

    autor.salvar().then((dados) => {
      expect(dados.nome).toBe('Arthur Conan Doyle');
    })
  });

  //simulação MOCK - insert 
  it('Deve fazer uma chamada simulada ao DB', () => {
    const autor = new Autor(objetoAutor);
  
    autor.salvar = jest.fn().mockReturnValue({
      id: 10,
      nome: 'Arthur Conan Doyle',
      nacionalidade: 'Escocês',
      created_at: '2023-11-13',
      updated_at: '2023-11-13'
    });
  
    const retorno = autor.salvar();
  
    expect(retorno).toEqual(
      expect.objectContaining({
          id: expect.any(Number),
          ...objetoAutor,
          created_at: expect.any(String),
          updated_at: expect.any(String),
      })
    )
  })
});


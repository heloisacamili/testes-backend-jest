import { expect, jest } from '@jest/globals';
import Editora from '../../models/editora';

describe('Testatndo o model Editora', () => {
  const objetoEditora = {
    nome: 'CDC',
    cidade: 'São Paulo',
    email: 'c@c.com'
  }
  
  it('Deve instanciar uma nova editora', () => {
    const editora = new Editora(objetoEditora);
  
    expect(editora).toEqual(
      expect.objectContaining(objetoEditora),
    );
  });

  it.skip('Deve salvar editora no BD', () => {
    const editora = new Editora(objetoEditora);

    editora.salvar().then((dados) => {
        expect(dados.nome).toBe('CDC');
    })
  });

  //simulação MOCK - insert 
  it('Deve fazer uma chamada simulada ao DB', () => {
    const editora = new Editora(objetoEditora);
  
    editora.salvar = jest.fn().mockReturnValue({
      id: 10,
      nome: 'CDC',
      cidade: 'São Paulo',
      email: 'c@c.com',
      created_at: '2023-11-13',
      updated_at: '2023-11-13'
    });
  
    const retorno = editora.salvar();
  
    expect(retorno).toEqual(
      expect.objectContaining({
          id: expect.any(Number),
          ...objetoEditora,
          created_at: expect.any(String),
          updated_at: expect.any(String),
      }),
    );
  });
});


import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals';
import { request } from 'supertest';
import app from '../../app';

let server;
//HOOKS
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET em /editoras', () => {
  it('Deve retornar uma lista de editoras', async () => {
    const resposta = await request(app)
      .get('/editoras')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200)

    expect(resposta.body[0].email).toEqual('c@c.com');
  });
})
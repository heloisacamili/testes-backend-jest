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

describe('', () => {
  it('', async () => {
    expect(resposta.body[0].email).toEqual('c@c.com');
  });
})
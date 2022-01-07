/* eslint-disable */
const { expect } = require('chai');

const models = {
  users: [],
};

describe('1 - Testando a conexão na rota raiz: "/"', () => {
  it('A rota deve retornar um array.', async () => {
    const response = await models.users;
    expect(response).to.be.a('array');
  });

  it('O array deve estar vazio.', async () => {
    const response = await models.users;
    expect(response).to.have.length.above(0);
  });
});

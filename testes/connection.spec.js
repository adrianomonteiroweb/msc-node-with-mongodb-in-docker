/* eslint-disable */
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { expect } = require('chai');

const DBSERVER = new MongoMemoryServer();

const getConnection = async () => {
  const URLMock = await DBSERVER.getUri();
  const OPTIONS = {
    useNewURLParser: true,
    useUnifiedTopology: true
  };
  return MongoClient.connect(URLMock, OPTIONS);
};

describe('1 - Testando a conexão na rota raiz: "/"', () => {
  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(mockClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    await connectionMock.db('class').collection('users').drop();
    mongoClient.connect.restore();
  });

  it('A rota deve retornar um array.', async () => {
    const response = await models.users;
    expect(response).to.be.a('array');
  });

  it('O array deve estar vazio.', async () => {
    const response = await models.users;
    expect(response).to.have.length.above(0);
  });
});

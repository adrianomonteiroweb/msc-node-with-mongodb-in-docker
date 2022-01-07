const connect = require('./connection');

const find = async () => {
  const conn = await connect();
  const query = await conn.collection('users').find({}).toArray();
  return query;
};

module.exports = { find };

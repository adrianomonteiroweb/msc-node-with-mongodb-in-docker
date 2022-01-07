const mongodb = require('mongodb').MongoClient();

const DB_NAME = 'class';
const URL_MONGODB = `mongodb://localhost:27017/${DB_NAME}`;

module.exports = () => mongodb.connect(URL_MONGODB, {
  useNewUrlParser: true,
  useunifiedTopology: true,
})
  .then((connection) => connection.db(DB_NAME))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

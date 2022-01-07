const express = require('express');

const errorMiddleware = require('./middlewares/errorMiddlewares');
const { usersList } = require('./controllers/users.controllers');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello Word');
});

app.get('/users', usersList);

app.use(errorMiddleware);

app.listen(PORT, HOST);

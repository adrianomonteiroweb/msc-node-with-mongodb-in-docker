const express = require('express');
const errorMiddleware = require('./middlewares/errorMiddlewares');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello Word');
});

app.use(errorMiddleware);

app.listen(PORT, HOST);

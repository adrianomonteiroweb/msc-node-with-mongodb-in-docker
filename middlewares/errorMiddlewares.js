/* eslint-disable */
const SERVER_ERROR_STATUS = 500;
const MESSAGE_ERROR = { message: 'Internal Server Error' };

const errorMiddleware = (err, req, res, _next) => {
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(SERVER_ERROR_STATUS).json(MESSAGE_ERROR);
};

module.exports = errorMiddleware;

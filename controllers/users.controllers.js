const { findAllUsers } = require('../services/users.services');

const STATUS_OK = 200;

const usersList = async (_req, res, next) => {
  try {
    const users = await findAllUsers();
    return res.status(STATUS_OK).json(users);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }
};

module.exports = { usersList };

const { find } = require('../models/users.models');

const findAllUsers = async () => {
  const users = await find();
  return users;
};

module.exports = { findAllUsers };

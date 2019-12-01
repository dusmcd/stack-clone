const db = require('../db');
const Sequelize = require('sequelize');

const User = db.define('user', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  salt: {
    type: Sequelize.STRING,
  },
});

User.prototype.validPassword = password => {
  if (password) return true;
  return false;
};

module.exports = User;

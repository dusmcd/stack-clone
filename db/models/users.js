const db = require('../db');
const Sequelize = require('sequelize');

const User = db.define('user', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  username: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = User;

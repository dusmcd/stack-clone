const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/stack-clone', {
  logging: false,
});

module.exports = db;

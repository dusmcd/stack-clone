const Sequelize = require('sequelize');
const db = require('../db');

const Questions = db.define('questions', {
  title: Sequelize.STRING,
  body: Sequelize.STRING,
});

module.exports = Questions;

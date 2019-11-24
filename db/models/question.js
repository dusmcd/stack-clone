const Sequelize = require('sequelize');
const db = require('../db');

const Question = db.define('questions', {
  title: Sequelize.STRING,
  content: Sequelize.STRING,
});

module.exports = Question;

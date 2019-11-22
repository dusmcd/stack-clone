const db = require('../db');
const Sequelize = require('sequelize');

const Tags = db.define('tags', {
  name: Sequelize.STRING,
});

module.exports = Tags;

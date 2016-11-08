const pg = require('pg');
const db = {};
const Sequelize = require('sequelize')

// without password / with blank password
var sequelize = new Sequelize('emotion-data','ygoldobin', null, {
  host: 'localhost',
  dialect: 'postgres'
});

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  }
});

User.sync({ force: true });

module.exports = User;


const pg = require('pg');
const db = {};
const Sequelize = require('sequelize')

// without password / with blank password
var sequelize = new Sequelize('emotion-data','ygoldobin', null, {
  host: 'localhost',
  dialect: 'postgres'
});

//Define UserModel
const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  emotionData: {
    type: Sequelize.STRING,
  }
});

//will, based on your model definitions, create any missing tables. If force: true it will first drop tables before recreating them.
User.sync().then(function () {
  // Table created
  // {force: true}
  // return User.create({
  //   username: 'John',
  //   password: 'Hancock'
  // });
});

module.exports = User;


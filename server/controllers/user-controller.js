const User = require('../models/user-model.js');

module.exports = {

  signup(req, res) {
    console.log('req.params ', req.params)
    console.log('req.body', req.body)
    console.log('signing up ')
    User.create({
      username: 'yan',
      password: 'boi'
    }).then((user) => {
      console.log('user', user)
      res.status('200').json();
    }).catch(function (err) {
      console.log('error', err);
    })
  },

  signin(req, res) {
    console.log('req.params ', req.params)
    console.log('req.body', req.body)
    User.findOne({ where: {
        username: req.params.username
      },
    }).then((expense) => {
		return res.status('200').json(expense);
	}).catch(function(err) {
		console.log('error', err);
	});
  },

  showall(req,res) {
    console.log('hi')
     User.findAll({ where: {
       username: 'yan'
     }
    }).then((yansfound) => {
      console.log('yansfound', yansfound)
      res.status('200').json(user);
    }).catch(function (err) {
      console.log('error', err);
    })
  }
}
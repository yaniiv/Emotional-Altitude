const User = require('../models/user-model.js');

module.exports = {

  signup(req, res) {
    console.log('req.params ', req.params)
    console.log('req.body', req.body)
    console.log('signing up ')
    User.create(req.body)
    .then((user) => {
      console.log('user added', user)
      res.status('200').json(user);
    }).catch(function (err) {
      console.log('error', err);
    })
  },

  signin(req, res) {
    console.log('req.params ', req.params)
    console.log('req.body', req.body)
    User.findOne({ where: {
        username: req.body.username
      },
    }).then((userData) => {
		return res.status('200').json(userData);
	}).catch(function(err) {
		console.log('error', err);
	});
  }

  // showall(req,res) {
  //   console.log('hi')
  //    User.findAll({ where: {
  //      username: 'John'
  //    }
  //   }).then((yansfound) => {
  //     console.log('yansfound', yansfound)
  //     res.status('200').json('yansfound');
  //   }).catch(function (err) {
  //     console.log('error', err);
  //   })
  // }

}
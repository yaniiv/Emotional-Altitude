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
    // console.log(req)
    // console.log('req.params ', req.params)
    console.log('req.body', req.body)
    User.findOne({ where: {
        username: req.body.username
      },
    }).then((userData) => {
      console.log("SERVER-user signing in: ", userData)

      if (userData === null) {
        console.log("SERVER-rejecting")
        return res.status(401)
      }
		return res.status('200').json(userData);
	}).catch(function(err) {
		console.log('error', err);
	});
  }

}
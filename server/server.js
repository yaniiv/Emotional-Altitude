const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pg = require('pg');
const userController = require('./controllers/user-controller')
const db = require('./models/user-model')
const app = express();


app.set('port', process.env.PORT || 7777);

app.use(express.static(__dirname +'./../')); //serves the index.html
app.use(bodyParser.urlencoded());

app.post('/signup', userController.signup);

app.get('/signin', userController.signin);

app.get('/showall', userController.showall);

app.listen(7777,function(){
  console.log("Started on PORT 7777");
})
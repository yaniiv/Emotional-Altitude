const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pg = require('pg');
const userController = require('./controllers/user-controller')
const db = require('./models/user-model')
const app = express();


app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname +'./../')); //serves the index.html
app.use(bodyParser.urlencoded());

app.post('/', function(req,res,next){
    console.log('you made a post request to /');
    console.log('request body is: ', req.body)
    res.status(200);
    res.send();
});

app.listen(8080,function(){
  console.log("Started on PORT 8080");
})
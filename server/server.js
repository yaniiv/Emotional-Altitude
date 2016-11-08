var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname +'./../')); //serves the index.html
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


//Concise output colored by response status for development use. The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
// app.use(logger('dev'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('hello world');
});

app.post('/', function(req,res,next){
    console.log('you made a post request to /');
    console.log('request body is: ', req.body)
    res.status(200);
    res.send();
});



//THIS HAS TO BE DOWN HERE OMG THAT WAS MY PROBLEM ALL ALONG
app.listen(8080,function(){
  console.log("Started on PORT 8080");
})
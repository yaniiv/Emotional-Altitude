var express = require('express');
var path = require('path');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');

app.listen(8080); //listens on port 3000 -> http://localhost:3000/

app.use(express.static(__dirname +'./../')); //serves the index.html
app.use(bodyParser.json());
// app.set('port', process.env.PORT || 8080);

//Concise output colored by response status for development use. The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
// app.use(logger('dev'));


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.listen(app.get('port'), function() {
//   console.log('Express server listening on port ' + app.get('port'));
// });

app.get('/', function(req,res,next){
    console.log('you made a get request to /');
});

app.post('/', function(req,res,next){
    console.log('you made a post request to /');
});
var express = require('express');
var app  = express();
var path = require('path');
var bodyParser = require("body-parser");

//app.use(express.bodyParser);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.set('views', __dirname + '/public/views');
app.set('css', __dirname + '/public/css');
app.use(express.static(__dirname + '/public/'));
var router = express.Router();
app.use(router);
// route middleware that will happen on every request
router.use(function(req, res, next) {

	// log each request to the console
	console.log(req.method, req.url);

	// continue doing what we were doing and go to the route
	next();	
});

console.log(path.join(__dirname, '/public/views/'));
console.log("top");

app.use(bodyParser());
app.post('/', function(req, res) {
  console.log(req.body);
  res.render(path.join(__dirname, '/public/views/gallery0'));  
});

app.get('/', function(req,res){
res.sendFile('index.html', { root: path.join(__dirname, '/public/') });
});


console.log(path.join(__dirname, '/public/views/gallery0'));



//app.get('/', function (req, res) {
//  console.log(path.join(__dirname, '/public/views/gallery1'));
//  res.render(path.join(__dirname, '/public/views/gallery0'), { title: 'Hey', message: 'Hello there!' });
//});

//var router = express.Router();
//app.use(router);
// route middleware that will happen on every request
//router.use(function(req, res, next) {

	// log each request to the console
//	console.log(req.method, req.url);

	// continue doing what we were doing and go to the route
//	next();	
//});



app.listen(8888);



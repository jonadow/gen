var express = require('express');
var app  = express();
var path = require('path');
var bodyParser = require("body-parser");
//var port =parseInt(process.env.PORT, 10) || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.set('port', process.env.PORT || 3000);

app.set('view engine', 'jade');
//app.set('views', __dirname + '/public/views');
//app.set('css', __dirname + '/public/css');
app.use(express.static(__dirname + '/public/'));

var router = express.Router();
app.use(router);


router.use(function(req, res, next) {

//	 log each request to the console
	 console.log(req.method, req.url);

//	 continue doing what we were doing and go to the route
	next();	
});

console.log(path.join(__dirname, '/public/views/'));
console.log("top");

app.post('/', function(req, res) {
  console.log(req.body);
  res.render(path.join(__dirname, '/public/views/gallery0'));  
});

app.get('/', function(req,res){
res.sendFile('index.html', { root: path.join(__dirname, '/public/views/') });
});


console.log(path.join(__dirname, '/public/views/gallery0'));

//app.listen(port)
//app.listen(8888);
//app.get('/', function(request, response) {
//    var result = 'App is running'
//    response.send(result);
//})
app.listen(process.env.PORT || 3000, function(){
 console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});


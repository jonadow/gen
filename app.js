var $ = require('jquery')(require("jsdom").jsdom().parentWindow);
var express = require('express');
var app  = express();
var path = require('path');
var bodyParser = require("body-parser");

function validate(contact){
  var form = document.contact,
      //name = form.name.value,
      //email = form.email.value,
      message = form.message.value;

  if (message.length == 0) {
    alert ("You must enter a message.");
    return false;
  }
  return true;
}



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public/views/'));

 var router = express.Router();
 app.use(router);


 router.use(function(req, res, next) {
//	 log each request to the console
  console.log(req.baseUrl);
 	console.log(req.method, req.url,req.app);

	next();	
 });

    // Get the form.
var form = $('#ajax-contact');
var formMessages = $('#form-messages');


$(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // TODO
});


/*
$(function() {

	// Get the form.
  console.log("aaaaaaaaaa");
	var form = $('#ajax-contact');
  console.log("bbbbb");
	// Get the messages div.
	var formMessages = $('#form-messages');
  console.log("ccccccccccc");
	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
    console.log("ssssssssssss");
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();
    console.log("mmmmmm");

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(formMessages).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);
      console.log("msg");

			// Clear the form.
			//$('#name').val('');
			//$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});

*/



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


var express = require("express");
var app = express();

/*
//Express Level 1 Assignment 

// a. Create a root route that returns “Hello World”
app.get('/',function(request, response){
    response.send('Hello World');
});

// b. Create a ‘/name’ route that returns your name
app.get('/name', function(request, response){
    var name = "Surekha Srinivasan";
   response.send(name);
});

// c. Create a /redirect route that sends you to /surprise with a moved permanently status code
app.get('/redirect', function(request, response){
    response.redirect(301, '/surprise');
});

// d. Create a route that returns the current date. You will need to look up how to get the current date.
app.get('/currentdate', function(request, response){
    response.write(Date());
    response.end();
 });
*/

//Express Level 2 Assignment 
//Create static middleware which serves files under the public directory
app.use(express.static('public'));

//Create a /cities route in your app.js file with at least 4 cities.
app.get('/cities', function(request, response) {
	var cities = ['Boston', 'Princeton', 'New York', 'Hartford'];
	response.json(cities);
});
app.listen(process.env.PORT, function() {
	console.log("Running Express..");
});
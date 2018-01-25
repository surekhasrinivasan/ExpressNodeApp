//Express Level 3 Assignment
var express = require("express");
var app = express();
var cities = {
	'Boston': 'Massachusetts',
	'Princeton': 'New Jersey',
	'Philadelphia': 'Pennsylvania',
	'Hartford': 'Connecticut',
	'Hampton': 'Virginia'
};
//variable holding the object length
var cityLength = Object.keys(cities).length;
//Create static middleware which serves files under the public directory
app.use(express.static('public'));
//Create a /cities route in your app.js file with at least 5 cities.
app.get('/cities', function(request, response) {
	if (request.query.limit > cityLength) {
		response.json('Limit exceeded');
	} else if (request.query.limit > 0) {
		response.json(Object.keys(cities).slice(0, request.query.limit));
	} else {
		response.json(Object.keys(cities));
	}
});
app.get('/cities/:name', function(request, response) {
	var name = request.params.name;
	var cityName = name[0].toUpperCase() + name.slice(1).toLowerCase();
	var stateName = cities[cityName];
	if (!stateName) {
		response.status(404).json("State not found for " + cityName);
	} else {
		response.json(cityName + " city is in the state of " + stateName);
	}
});
app.listen(process.env.PORT, function() {
	console.log("Running Express..");
});
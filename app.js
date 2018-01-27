//Express Level 4 Assignment
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({
	extended: false
});
var cities = {
	'Boston': 'Massachusetts',
	'Princeton': 'New Jersey',
	'Philadelphia': 'Pennsylvania',
	'Hartford': 'Connecticut',
	'Hampton': 'Virginia'
};
//Create static middleware which serves files under the public directory
app.use(express.static('public'));
//Create a /cities route in your app.js file with at least 5 cities.
app.get('/cities', function(request, response) {
	if (request.query.limit > Object.keys(cities).length) {
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
		response.status(404).json("State not found");
	} else {
		response.json(stateName);
	}
});
app.post('/cities', parseUrlencoded, function(request, response) {
	var newCity = request.body;
	cities[newCity.name] = newCity.stateName;
	response.status(201).json(newCity.name);
});
app.delete('/cities/:name', function(request, response) {
	delete cities[request.cityName];
	response.sendStatus(200);
});
app.listen(process.env.PORT, function() {
	console.log("Running Express..");
});
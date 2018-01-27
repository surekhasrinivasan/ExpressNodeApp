var express = require('express');
var router = express.Router();
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
router.route('/').get(function(request, response) {
	if (request.query.limit > Object.keys(cities).length) {
		response.json('Limit exceeded');
	} else if (request.query.limit > 0) {
		response.json(Object.keys(cities).slice(0, request.query.limit));
	} else {
		response.json(Object.keys(cities));
	}
}).post(parseUrlencoded, function(request, response) {
	var newCity = request.body;
	cities[newCity.name] = newCity.stateName;
	response.status(201).json(newCity.name);
});
router.route('/:name').get(function(request, response) {
	var name = request.params.name;
	var cityName = name[0].toUpperCase() + name.slice(1).toLowerCase();
	var stateName = cities[cityName];
	if (!stateName) {
		response.status(404).json("State not found");
	} else {
		response.json(stateName);
	}
}).delete(function(request, response) {
	delete cities[request.cityName];
	response.sendStatus(200);
});
module.exports = router;
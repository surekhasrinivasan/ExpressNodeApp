//Express Level 5 Assignment
var express = require("express");
var app = express();
//Create static middleware which serves files under the public directory
app.use(express.static('public'));
var cities = require('./routes/cities');
app.use('/cities', cities);
app.listen(process.env.PORT, function() {
	console.log("Running Express..");
});
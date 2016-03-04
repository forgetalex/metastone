var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
//var middleware = require('middleware.js')

var app = express();
var PORT = process.env.PORT || 3000;

//for every route
//app.use(middleware.logger);

app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send('Metastone API Root');
});

app.listen(PORT, function () {
	console.log('Meatstone server started! on port: ' + PORT);
});
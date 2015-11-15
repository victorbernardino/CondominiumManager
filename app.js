var express = require('express')
	, routes = require('./configurations/routes.js')
	, path = require('path')
	, app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'vash');

routes.initialiseRoutes(app);

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});
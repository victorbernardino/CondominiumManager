var controllerFolder = '../controllers/';
var mainPageController = require(controllerFolder + 'mainPageController.js');

exports.initialiseRoutes = function (app) {
	app.get('/', mainPageController.initialiseRoute);
}
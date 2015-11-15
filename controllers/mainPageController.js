exports.initialiseRoute = function (req, res) {
	var viewModel = {
		name: 'Name',
		year: 2015
	};
	res.render('index', viewModel);
}
const path = require('path');
const express = require('express');
const app = express();
module.exports = {
	app: function() {
		let indexPath = path.join(__dirname, '/../index.html');
		let publicPath = express.static(path.join(__dirname, '../'));
		if (process.env.NODE_ENV === 'production') {
			indexPath = path.join(__dirname, '/../public/index.html');
			publicPath = express.static(path.join(__dirname, '../public'));
		}
		console.log(indexPath);
		app.use('/public', publicPath);
		app.use("/libs", express.static(path.join(__dirname, '../libs')));
		app.get('/', function(_, res) {
			res.sendFile(indexPath);
		});

		return app;
	}
};

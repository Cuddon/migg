'use strict';

module.exports = function(app) {
	var models = require('../controllers/models.server.controller');
	var modelsPolicy = require('../policies/models.server.policy');

	// Models Routes
	app.route('/api/models').all()
		.get(models.list).all(modelsPolicy.isAllowed)
		.post(models.create);

	app.route('/api/models/:modelId').all(modelsPolicy.isAllowed)
		.get(models.read)
		.put(models.update)
		.delete(models.delete);

	// Finish by binding the Model middleware
	app.param('modelId', models.modelByID);
};
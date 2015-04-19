'use strict';

//Setting up route
angular.module('models').config(['$stateProvider',
	function($stateProvider) {
		// Models state routing
		$stateProvider.
		state('models', {
			abstract: true,
			url: '/models',
			template: '<ui-view/>'
		}).
		state('models.list', {
			url: '',
			templateUrl: 'modules/models/views/list-models.client.view.html'
		}).
		state('models.create', {
			url: '/create',
			templateUrl: 'modules/models/views/create-model.client.view.html'
		}).
		state('models.view', {
			url: '/:modelId',
			templateUrl: 'modules/models/views/view-model.client.view.html'
		}).
		state('models.edit', {
			url: '/:modelId/edit',
			templateUrl: 'modules/models/views/edit-model.client.view.html'
		});
	}
]);
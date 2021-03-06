'use strict';

//Models service used to communicate Models REST endpoints
angular.module('models').factory('Models', ['$resource',
	function($resource) {
		return $resource('api/models/:modelId', { modelId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
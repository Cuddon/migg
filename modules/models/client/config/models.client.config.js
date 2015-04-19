'use strict';

// Configuring the Models module
angular.module('models').run(['Menus',
	function(Menus) {
		// Add the Models dropdown item
		Menus.addMenuItem('topbar', {
			title: 'Models',
			state: 'models',
			type: 'dropdown'
		});

		// Add the dropdown list item
		Menus.addSubMenuItem('topbar', 'models', {
			title: 'List Models',
			state: 'models.list'
		});

		// Add the dropdown create item
		Menus.addSubMenuItem('topbar', 'models', {
			title: 'Create Model',
			state: 'models.create'
		});
	}
]);
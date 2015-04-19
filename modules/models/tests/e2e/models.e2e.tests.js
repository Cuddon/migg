'use strict';

describe('Models E2E Tests:', function() {
	describe('Test Models page', function() {
		it('Should not include new Models', function() {
			browser.get('http://localhost:3000/#!/models');
			expect(element.all(by.repeater('model in models')).count()).toEqual(0);
		});
	});
});

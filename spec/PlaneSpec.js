'use strict';

describe('plane', function() {
	var plane;
	beforeEach(function(){
		plane = new Plane();
	});
	it('can land at the airport', funcion() {
		expect(plane.land).not.toBeUndefined()
	});
});
'use strict',

describe('Feature Test:', function() {
	var plane;
	var airport;

	beforeEach(function(){
		plane = Plane();
		airport = Airport();
	});

	it('planes are being instructed to land at the airport', function() {
		plane.land(airport);
		expect(aiport.planes()).toContain(plane);
	});
});
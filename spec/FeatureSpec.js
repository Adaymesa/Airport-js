'use strict',

describe('Feature Test:', function() {
	var plane;
	var airport;

	beforeEach(function(){
		plane = new Plane();
		airport = new Airport();
	});

	it('planes are being instructed to land at the airport', function() {
		plane.land(airport);
		expect(airport.planes()).toContain(plane);
	});

	it('allows planes to take off', function() {
		plane.land(airport);
		plane.takeOff(airport);
		expect(airport.planes()).not.toContain(plane);
	});
});
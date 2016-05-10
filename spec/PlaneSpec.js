'use strict';

describe('plane', function() {
	var plane;
	var airport;
	beforeEach(function(){
		plane = new Plane();
		airport = jasmine.createSpyObj('airport',['clearForLanding']);
	});
	it('can land at the airport', function() {
		plane.land(airport);
		expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
	});
});
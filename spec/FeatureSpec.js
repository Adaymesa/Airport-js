'use strict',

describe('Feature Test:', function() {
	var plane;
	var airport;

	beforeEach(function(){
		plane = new Plane();
		airport = new Airport();
	});

	describe('under normal conditions',function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
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

	describe('under stormy conditions',function(){

	it('blocks takeoff when weather is stormy', function(){
		spyOn(Math, 'random').and.returnValue(0);
		plane.land(airport)
		spyOn(airport._weather, 'isStormy').and.returnValue(true);
		expect(function(){plane.takeOff(airport);}).toThrowError('cannot takeoff during storm')
		expect(airport.planes()).toContain(plane);
	});
	it('blocks land when weather is stormy', function(){
		spyOn(Math, 'random').and.returnValue(1);
		expect(function(){plane.land(airport);}).toThrowError('cannot land during storm')
		expect(airport.planes()).not.toContain(plane);
	});
});
});

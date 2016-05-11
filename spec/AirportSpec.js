'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
  });
  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });
  describe('under normal conditions',function(){
   beforeEach(function(){
     weather.isStormy.and.returnValue(false);
   });
  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
  it('can clear planes for take off', function(){
    airport.clearForLanding(plane)
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });
});
  describe('under stormy conditions',function(){
    beforeEach(function(){
      airport._weather.isStormy.and.returnValue(true);
    });

  it('does not clear planes for takeoff', function (){
    expect(function(){airport.clearForTakeOff(plane);}).toThrowError('cannot takeoff during storm');
  });
  it('does not clear planes for landing', function (){
    expect(function(){airport.clearForLanding(plane);}).toThrowError('cannot land during storm');
  });
});
});



//
//   describe 'stormy weather' do
//
//     it 'does not allow planes to land if the weather is stormy' do
//         allow(airport).to receive(:stormy?) {true}
//         message = 'Cannot land because of bad weather'
//         expect{airport.land(plane)}.to raise_error message
//     end
//
//     it 'does not allow planes to take off if the weather is stormy' do
//         airport.planes << plane
//         allow(airport).to receive(:stormy?) {true}
//         message = 'Cannot take off because of the bad weather'
//         expect{airport.take_off(plane)}.to raise_error message
//     end
//   end
//
//   describe 'airport capacity' do
//
//     it 'has a default capacity of 20 planes' do
//         allow(airport).to receive(:stormy?) {false}
//         Airport::DEFAULT_CAPACITY.times {airport.planes << plane}
//         expect{airport.land(plane)}.to raise_error 'Airport at capacity'
//     end
//
//     it 'allows a specified capacity' do
//         random_capacity = Random.rand(500)
//         subject = described_class.new random_capacity
//         expect(subject.capacity).to eq random_capacity
//     end
//   end
//
//   describe 'edge cases' do
//     it 'does not allow plane to take off, if plane is not in airport' do
//         allow(airport.planes).to receive(:landed?) {false}
//         expect{airport.take_off(plane)}. to raise_error 'Plane is not in airport'
//     end
//
//     it 'does not request plane to land if landed' do
//         allow(airport).to receive(:stormy?) {false}
//         airport.land(plane)
//         expect{airport.land(plane)}.to raise_error 'Plane has already landed'
//     end
//   end
// end

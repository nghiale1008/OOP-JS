import Vehicle from './Vehicle.js';

class Bicycle extends Vehicle {
  constructor(color = 'blue') {
    super(color, '2', 'honk honk');
  }
}

export default Bicycle;
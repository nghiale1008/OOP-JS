import Vehicle from './Vehicle.js';
import Bicycle from './Bicycle.js';

const myCar = new Vehicle();
console.log(`My car is ${myCar.color} and has ${myCar.numberOfWheels} wheels.`);
myCar.honkHorn();

const myBike = new Bicycle();
console.log(`My bike is ${myBike.color} and has ${myBike.numberOfWheels} wheels.`);
myBike.honkHorn();
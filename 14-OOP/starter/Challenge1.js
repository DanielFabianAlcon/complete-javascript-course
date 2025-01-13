'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
};

Car.prototype.brake = function () {
  this.speed -= 5;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw, mercedes);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.brake();
mercedes.accelerate();

console.log(bmw, mercedes);

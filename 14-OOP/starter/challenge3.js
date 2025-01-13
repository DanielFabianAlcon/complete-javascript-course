'use strict';

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Accelerating into ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`Brake into ${this.speed} km/h`);
  }
  get speedUS() {
    return console.log(`Your speed on miles is ${this.speed / 1.6} mi/h`);
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const EV = function (make, speed, charge) {
  CarCl.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(`Going in ${this.speed} km/h with ${charge}% of charge`);
};

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const tesla = new EV('Tesla', 120, 100);
tesla.chargeBattery(90);

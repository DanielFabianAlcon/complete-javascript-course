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

const ford = new CarCl('Ford', 120);
console.log(ford);
//ford.accelerate();
//ford.brake();
//ford.speedUS;
//ford.speedUS = 50;

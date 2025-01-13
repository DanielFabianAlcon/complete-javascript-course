'use strict';

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //    this.calcAge = function () {
  //      console.log(2024 - this.birthYear);
  //    };
};

const dani = new Person('Dani', 1996);
//console.log(dani);

// Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

Person.prototype.species = 'Homo Sapiens';


class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }

  set fullName(name) {
    if (name.includes(' ')) this.fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
}

//const jessica = new PersonCl('Jessica Davis', 1996);
//console.log(jessica);
//jessica.calcAge();

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get lastest() {
    return this.movements.slice(-1).pop();
  },

  set lastest(mov) {
    this.movements.push(mov);
  },
};

//console.log(account.lastest);
//account.lastest(50);
//console.log(account.movements);

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

//const mike = new Student('Mike', '1996', 'Computer Science');
//mike.introduce();
//mike.calcAge();

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  CalcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${fullName}`);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('hey there ✌️');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }
  CalcAge() {
    console.log(
      `I'm ${2024 - this.birthYear} years old but i feel more like ${
        2024 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012);
martha.introduce();
martha.CalcAge();

*/

const PersonProto = {
  calcAge() {
    console.log(2024 - birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');

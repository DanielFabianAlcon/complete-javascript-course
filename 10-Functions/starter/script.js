'use strict';

/*
const flight = 'FLH123';
const dani = {
  name: 'Daniel Fabian',
  passport: 123123123,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'FHL123';
  passenger.name = 'Mr. ' + passenger.name;

  if (!isNaN(passenger.passport)) {
    alert('wolololoooo');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, dani);


const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...rest] = str.split(' ');
  return [first.toUpperCase(), ...rest].join(' ');
};

const transform = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transform('JavaScript es impresionante!', oneWord);
transform('JavaScript es impresionante!', upperFirstWord);
*/

const greet = greeting => {
  return name => console.log(`${greeting} ${name}`);
};

const greeterHey = greet('Hey')('Jonas');

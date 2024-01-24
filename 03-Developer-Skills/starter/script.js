// Remember, we're gonna use strict mode in all scripts now!
'use strict';

////////////// Example about take the numbers with less diff between them

/* const coords = [50, 25, 10, 60, 80, 100];

coords.sort(function (a, b) {
  return a - b;
});

let n = 10000;
let a, b;

for (let i = 0; i < coords.length - 1; i++) {
  let diff = coords[i + 1] - coords[i];

  if (n > diff) {
    n = diff;
    a = coords[i + 1];
    b = coords[i];
    console.log(`La diferencia entre ${a} y ${b} es ${n}`);
  } else {
    console.log(`No se guarda valor`);
  }
}

console.log(`Ganadores por diff: ${(a, b, n)}`);
 

///////////////Reverse whatever

const arr = ['a', 'b', 'c'];
const str = 'Hi world';
const num = 123;

const rev = function reverse(a) {
  if (typeof a === 'string') {
    return a.split('').reverse().join('');
  } else if (typeof a === 'number') {
    return parseInt(a.toString().split('').reverse().join(''));
  } else if (typeof a === 'object') {
    return a.reverse();
  }
};
console.log(rev(str));
console.log(rev(num));
console.log(rev(arr));



////////////////////////////// Get the highest diff between temps and ignore the errors

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

let min = 0;
let max = 0;

for (let i = 0; i < temperatures.length; i++) {
  if (!isNaN(temperatures[i])) {
    let n = temperatures[i];
    if (n < min) {
      min = n;
    }
    if (n > max) {
      max = n;
    }
  } else {
    console.log(`Not a number`);
  }
}
console.log(max - min);


//////////////////// Now the same but with 2 arrays
function mergeArrs(a, b) {
  return a.concat(b);
}

const calcAmplitude = function (a) {
  let min = 0;
  let max = 0;

  for (let i = 0; i < a.length; i++) {
    if (!isNaN(a[i])) {
      let n = a[i];
      if (n < min) {
        min = n;
      }
      if (n > max) {
        max = n;
      }
    } else {
      console.log(`Not a number`);
    }
  }
  return max - min;
};

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = ['error', -8, -5, 0, 'error', 7, 12, 13, 7, 4];
let sum = 0;

const arr = mergeArrs(temperatures, temperatures2);
sum = calcAmplitude(arr);
console.log(sum);


const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log(arr.push(arr2));
*/

/*
    // Coding challenge 1

    Given an array of forecasted maximum temperatures, the termometer displays a string with these temperatures:
    Example : [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

    Create a function printForecast which takes in array 'arr' and logs a string like the above to the console
    Use the problem-solving framework: Understand the problem and break it up into sub-problems!

    TEST DATA 1: [17, 21, 23]
    TEST DATA 2: [12, 5, -5, 0 , 4]
*/

/* const printForecast = function (a) {
  let string = '... ';

  for (let i = 1; i <= a.length; i++) {
    string = string + `${a[i - 1]}ºC in ${i} days ... `;
  }

  return string;
};

const data = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(printForecast(data2)); */

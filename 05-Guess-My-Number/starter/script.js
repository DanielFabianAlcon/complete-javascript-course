'use strict';

///////// GUES MY NUMBER

let n = Math.floor(Math.random() * (21 - 1) + 1);
let score = 20;
let highscore = 0;
// Check the random number
console.log(n);

const message = function (message) {
  document.querySelector('.message').textContent = message;
};

const style = function (width, color) {
  document.querySelector('.number').style.width = width;
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  let yourNumber = document.querySelector('.guess').value;

  if (yourNumber != n) {
    yourNumber > n
      ? message('Your number is too 🔼')
      : message('Your number is too 🔽');
    score = score - 1;
    document.querySelector('.score').textContent = score;
  } else if (yourNumber == n) {
    message('You win!!!');
    document.querySelector('.score').textContent = score;
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.number').textContent = n;
    style('30rem', 'green');
  } else if (score == 0) {
    document.querySelector('.check').disabled = true;
  } else if (score == '') {
    message('We need a number');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  message('Guessing number...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  style('15rem', '#222');
  n = Math.floor(Math.random() * (21 - 1) + 1);
  document.querySelector('.check').disabled = false;
  document.querySelector('.number').textContent = '?';
  // Check the new random number
  console.log(n);
});

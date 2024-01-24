'use strict';

// FIRST CODE (hasta la poyabelt)
/*
// Setting up the vars
let scorePlayer0 = document.querySelector('#score--0');
let scorePlayer1 = document.querySelector('#score--1');
let currentScore0 = document.querySelector('#current--0');
let currentScore1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');

let n;
let score = 0;
let scores = [0, 0];
let flag = 0;
let win = false;

// Functions
const starting = function () {
  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  scores = [0, 0];
  dice.classList.add('hidden');
};

const swapPlayer = function () {
  document.querySelector(`.player--${flag}`).classList.toggle('player--active');
  if (flag === 0) {
    flag++;
  } else if (flag === 1) {
    flag--;
  }
  document.querySelector(`.player--${flag}`).classList.toggle('player--active');
};

const rollDice = function () {
  n = Math.floor(Math.random() * (7 - 1) + 1);
  dice.src = `dice-${n}.png`;
  dice.classList.remove('hidden');

  if (n != 1) {
    score += n;
    document.getElementById(`current--${flag}`).textContent = score;
  } else {
    score = 0;
    document.getElementById(`current--${flag}`).textContent = score;
    swapPlayer();
  }
};

const btnHold = function () {
  scores[flag] += score;
  if (scores[flag] >= 10) {
    document.querySelector('.btn--roll').disabled = true;
    document.querySelector('.btn--hold').disabled = true;
    document.querySelector(`.player--${flag}`).classList.add('player--winner');
    win = true;
  }

  document.getElementById(`score--${flag}`).textContent = scores[flag];
  score = 0;
  document.getElementById(`current--${flag}`).textContent = score;

  swapPlayer();
};

const btnNew = function () {
  starting();
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  if (win == true)
    document
      .querySelector(`.player--${flag}`)
      .classList.remove('player--winner');
  win = false;
};

// The game sets at 0
starting();
// Pressing the btns
document.querySelector('.btn--roll').addEventListener('click', rollDice);
document.querySelector('.btn--hold').addEventListener('click', btnHold);
document.querySelector('.btn--new').addEventListener('click', btnNew);
*/

// -------------------------------------

// Setting up the variables

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const currentScoreP1 = document.querySelector('#current--0');
const currentScoreP2 = document.querySelector('#current--1');
const scoreP1 = document.querySelector('#score--0');
const scoreP2 = document.querySelector('#score--1');

let scores = [0, 0];
let currentPlayer = 0;
let score = 0;

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

// Normal functions

const starting = function () {
  // Making all on 0
  scores = [0, 0];
  currentPlayer = 0;
  currentScoreP1.textContent = 0;
  currentScoreP2.textContent = 0;
  scoreP1.textContent = 0;
  scoreP2.textContent = 0;

  dice.classList.add('hidden');
};

const changePlayer = function () {
  // Swapping the styles of active player
  score = 0;
  document.getElementById(`current--${currentPlayer}`).textContent = score;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
  if (currentPlayer === 0) {
    currentPlayer++;
  } else if (currentPlayer === 1) {
    currentPlayer--;
  }
  console.log(currentPlayer);
};

//  Btns functions

const rollFunction = function () {
  // Roll dice & check the n
  let n = Math.floor(Math.random() * 6 + 1);
  dice.classList.remove('hidden');
  dice.src = `dice-${n}.png`;

  if (n != 1) {
    score += n;
    document.getElementById(`current--${currentPlayer}`).textContent = score;
  } else {
    changePlayer();
  }
};

const holdFunction = function () {
  // Saving scores and changing player
  scores[currentPlayer] += score;
  document.querySelector(`#score--${currentPlayer}`).textContent =
    scores[currentPlayer];

  if (scores[currentPlayer] >= 10) {
    btnHold.disabled = true;
    btnRoll.disabled = true;
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add('player--winner');
  }

  changePlayer();
};

const newFunction = function () {
  // Making the game at 0 again
  if (currentPlayer == 1) {
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }

  starting();
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
};

///////
starting();

btnRoll.addEventListener('click', rollFunction);
btnHold.addEventListener('click', holdFunction);
btnNew.addEventListener('click', newFunction);

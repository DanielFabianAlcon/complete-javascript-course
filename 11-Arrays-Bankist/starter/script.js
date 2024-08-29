'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  // username: js
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const createUser = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(value => value.at(0))
      .join('');
    //console.log(account1);
  });
};
createUser(accounts);

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////
// Update UI

const updateUI = function (acc) {
  calcMoney(acc);
  displayMoney(acc.movements);
  calcTax(acc);
};

const calcMoney = function (acc) {
  const money = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${money}€`;
  acc.money = money;
};

const calcTax = function (acc) {
  const positive = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);

  const negative = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);

  const taxes = acc.movements
    .filter(mov => mov > 0)
    .map(move => (move * currentAccount.interestRate) / 100)
    .reduce((acc, cur) => acc + cur);

  labelSumIn.textContent = positive;
  labelSumOut.textContent = negative;
  labelSumInterest.textContent = taxes;
};

const displayMoney = function (movements, sort = false) {
  document.querySelector('.movements').innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => b - a) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('beforeend', html);
  });
};

//Login
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome, ${currentAccount.owner.split(' ')[0]}`;
    updateUI(currentAccount);
    document.querySelector('.app').style.opacity = 100;
    inputLoginPin.value = inputLoginUsername.value = '';
  }

  // Toastify

  Toastify({
    text: `Welcome, ${currentAccount.owner}!!`,

    duration: 3000,
    gravity: 'bottom',
    position: 'right',
    onClick: function () {
      console.log(0);
    },
  }).showToast();
});

// loan

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    currentAccount.movements.push(amount);
    updateUI();
    inputLoanAmount.value = '';
  }
  /*
  let maxMoney = currentAccount.movements.reduce(function (acc, cur) {
    if (cur > acc) {
      acc = cur;
    }
    return acc;
  }, 0);

  if (inputLoanAmount.value > maxMoney * 0.1) {
    console.log('No puedes');
    inputLoanAmount.value = '';
  } else {
    console.log('Si');
    inputLoanAmount.value = '';
  }*/
});

// transfer money

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    amount < currentAccount.money &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
    inputTransferAmount.value = inputTransferTo.value = '';
  }

  btnClose.addEventListener('click', function (e) {
    e.preventDefault();

    if (
      currentAccount.username === inputCloseUsername.value &&
      currentAccount.pin === Number(inputClosePin.value)
    ) {
      const index = accounts.findIndex(
        acc => acc.username === currentAccount.username
      );
      accounts.splice(index, 1);
    }
    inputCloseUsername.value = inputClosePin.value = '';
  });
});

// sort
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMoney(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// Practice

// 1. All positive deposits sum
const allDepositsSum = accounts
  .flatMap(acc => acc.movements)
  .filter(cur => cur > 0)
  .reduce((acc, cur) => acc + cur, 0);
//console.log(allDepositsSum);

// 2. Num of  +1000€ deposits

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length;
//console.log(numDeposits1000);

// 3. Calculate deposits and widthdrawals but now into an object with .reduce

const { deposits, widthdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, cur) => {
      /*cur > 0 ? (acc.deposits += cur) : (acc.widthdrawals += cur);
      return acc;*/
      acc[cur > 0 ? 'deposits' : 'widthdrawals'] += cur;
      return acc;
    },
    { deposits: 0, widthdrawals: 0 }
  );

//console.log(deposits, widthdrawals);

// 4. Convert a string into a title but with exceptions : this is a string -> This Is a String

const convertTitleCase = function (title) {
  const expections = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      expections.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return titleCase;
};

console.log(convertTitleCase('this is a nice tittle'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

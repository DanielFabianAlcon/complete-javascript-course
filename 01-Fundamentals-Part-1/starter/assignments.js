
// Exercise 1   Lesson 10
const country = 'Spain';
const continent = 'Europe';
let population = 130;
// Exercise 2   Lesson 10
console.log(country, continent, population);



// Exercise 1   Lesson 12
const isIsland = false;
let language;
// Exercise 2   Lesson 12
console.log(isIsland, population, country, language);



// Exercise 1   Lesson 13
language = 'Spanish';
// Exercise 2   Lesson 13
//change variables to const
// Exercise 1   Lesson 13
//change value of varibles



// Exercise 1   Lesson 14
const halfPopulation = population / 2;
console.log(halfPopulation);
// Exercise 2   Lesson 14
console.log(halfPopulation + 1);
// Exercise 3   Lesson 14
console.log(halfPopulation > 6);
// Exercise 4   Lesson 14
console.log(halfPopulation > 33);
// Exercise 5   Lesson 14
const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);



// Exercise 1   Lesson 17
console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}`);



// Exercise 1   Lesson 18
let notEnought;
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    notEnought = 33 - population;
    console.log(`${country}'s population is ${notEnought} below average`);
}
// Exercise 2   Lesson 18
// change variables to 13 and 130 for check results



// Exercise 1   Lesson 20
//predicted
// Exercise 2   Lesson 20
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + '17');
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// Exercise 1   Lesson 22
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// Exercise 2   Lesson 22
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No neighbours');
}
// Exercise 3   Lesson 22
//make elseif on ex2
// Exercise 4   Lesson 22
//make else block on ex2
// Exercise 5   Lesson 22
//use prompt as 1 or 0
// Exercise 6   Lesson 22
// use === not ==
// Exercise 7   Lesson 22
//convert to a number
// Exercise 8   Lesson 22
//think about it

// Exercise 1   Lesson 26
const languageSpeak = 'arabic';
switch (languageSpeak) {
    case 'chinese':
        console.log('MOST number of native speakers!');
        break;
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
        break;
}

// Exercise 1   Lesson 28
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);
// Exercise 2   Lesson 28
// check result if population is 130
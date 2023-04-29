'use strict';

/* 1 */
let username = prompt('What is your name?');

alert(`Hello, ${username}!`);

/* 2 */

const year = 2023;

let yearOfBirth = prompt('Year of your birth?');

let age = year - yearOfBirth;

alert(`Your age is ${age}.`);


/* 3 */

let sizeOfSquareSide = +prompt('Enter size of square side.');

alert(`Perimeter of square: ${sizeOfSquareSide * 4}`);

/* 4 */

let radiusOfCircle = +prompt('Enter radius of circle');

alert(`Area of circle: ${Math.PI * (radiusOfCircle ** 2)}`);


/* 5 */

let distance = +prompt('Enter the distance between towns.');
let timeToArrive = +prompt('Enter the time you wish spend on the way.');
let speed = distance / timeToArrive;

alert(`You should drive with speed ${speed} km/h.`);

/* 6 */

const exchageRate = 0.92; // 2023-01-29
let dollarUSD = prompt('How much money do you have?'); 
let euro = dollarUSD * exchageRate;

alert(`Euro: ${euro}.`);

/* 7 */

const mbInGB = 1024;
let sizeInGb = prompt('Size of your USB flash drive (GB):');

let countOfFiles = Math.floor(sizeInGb * mbInGB / 820);

alert(`Count of files: ${countOfFiles}.`);

/* 8 */

let money = +prompt('How much money do you have?');
let price = +prompt('Price of choclate?');

let countOfItems = Math.floor(money / price);

alert(`Amount of choclates: ${countOfItems}`);

let change = money - price * countOfItems;
alert(`Your change ${change}`);

/* 9??? */

let userNumber = +prompt('Enter a three-digit number:');
let palindromNumber = (userNumber - (userNumber % 2)) / 2 ;

alert(`Palindrom is ${palindromNumber}`);

/* 10 */

let integerNumber = +prompt('Enter integer number: ');

let answer = (integerNumber % 2) === 0 ? 'even' : 'odd';

alert(`The number ${integerNumber} is ${answer}.`);

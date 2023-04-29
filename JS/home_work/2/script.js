'use strict';

/* 1 */

let age = +prompt('Enter your age');
console.log('age: ', age);
switch(true) {
    case (age >= 0 && age < 12):
        alert('Дитина');
        break;
    case (age >= 12 && age < 18):
        alert('Підліток');
        break;
    case (age >= 18 && age < 60):
        alert('Дорослий');
        break;
    case (age >=60 && age < 120):
        alert('Пенсіонер');
        break;
      default:
        alert('You have entered a wrong age');
}



/* 2 */

let userNumber = +prompt('Enter number from 0 to 9');
switch (userNumber) {
    case 0:
        alert(')');
        break;
    case 1:
        alert('!');
        break;
    case 2:
        alert('@'); 
        break; 
    case 3:
        alert('#');
        break;
    case 4:
        alert('$');
        break;
    case 5:
        alert('%');
        break;
    case 6:
        alert('^');
        break;
    case 7:
        alert('&');
        break;
    case 8:
        alert('*');
        break;
    case 9:
        alert('(');
        break; 
    default: 
        alert('You have entered a wrong number');
}

/* 3 */

let number3 = prompt('Enter a three-digit number');

if (number3 !== null) {
    let digitArray = number3.split('');
    if (digitArray.length === 3) {
        if (digitArray[0] == digitArray[1] || digitArray[0] == digitArray[2] || digitArray[2] == digitArray[1]) {
            alert('There is a duplicate character')
        }
    }
} 

/* 4 */

let year = +prompt('Enter year');

if (year === null || year.toString().length !== 4) {
    alert('You have entered incorect year');
} else {
    if (year % 100 !== 0 && (year % 400 === 0 || year % 4 === 0)) {
        alert('A leap year');
    } else {
        alert('Not a leap year');
    }
}

/* 5 */

let number5 = prompt('Enter a five-digit number');

if (number5 === null || number5.toString().length !== 5) {
    alert('You have entered incorect number');
} else {
    let numberArray = number5.split('');
    console.log(numberArray);
    if (numberArray[0] === numberArray[4] && numberArray[1] === numberArray[3]) {
        alert('It is a palindrom');
    } else {
        alert('Not a palindrom');
    }
}

/* 6 */

let sumUSD = +prompt('Enter sum of USD');

let currency = prompt('Enter one of next currencies: EUR, UAH, AUD');

if (typeof sumUSD !== 'number' || isNaN(parseInt(sumUSD))) {
    alert('You have entered incorrect sum');
} else {
    switch (currency) {
        case 'EUR':
            alert(`${sumUSD} $ = ${sumUSD * 0.93} €`);
        break;
        
        case 'UAH':
            alert(`${sumUSD} $ = ${sumUSD * 40.1} ₴`);
        break;

        case 'AUD':
            alert(`${sumUSD} $ = ${sumUSD * 1.44} AU$`);
        break;

        default:
            alert('You have entered incorrect currency');
    }
}

/* 7 */

let sumUAH = +prompt('Enter sum of UAH');

if (typeof sumUAH !== 'number' || isNaN(parseFloat(sumUAH)) || sumUAH <= 0) {
    alert('You have entered incorrect sum');
} else {
    switch (true) {
        case (sumUAH >= 200 && sumUAH < 300):
            sumUAH = sumUAH - (sumUAH * 0.03);
        break;
        
        case (sumUAH >= 300 && sumUAH < 500):
            sumUAH = sumUAH - (sumUAH * 0.05);
        break;

        case (sumUAH >= 500):
            sumUAH = sumUAH - (sumUAH * 0.07);
    }
        alert(`You should pay ${sumUAH} ₴`);
}

/* 8 */

let lengthOfCircle = +prompt('Enter length of circle');

let perimeterOfSquare = +prompt('Enter perimeter of square');

if (perimeterOfSquare / 4 <= lengthOfCircle / Math.PI) {

    alert('Circle can be placed in the square');

} else {
    alert('Circle can not be placed in the square');
}

/* 9 */

let points = 0;
let answer1 = prompt('The capital of Australia is? (Sidney, Auckland, Kanberra)');
let answer2 = +prompt('How many moons has Saturn? (43, 71, 83)');
let answer3 = +prompt('WWII started at? (1939, 1940, 1941)');

if (answer1 === "Kanberra") {
    points++;
}
if (answer2 === 83) {
    points++;
}
if (answer3 === 1939) {
    points++;
}
alert(`You have got ${points} points`);

/* 10 */

let userDate = prompt('Enter date (day, month, year)');
userDate = new Date(userDate);
let nextDay = new Date(userDate);
nextDay.setDate(userDate.getDate() + 1);
alert(nextDay);
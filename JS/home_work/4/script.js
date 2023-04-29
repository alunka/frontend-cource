 'use strict';

/* 1 */

function randomNumber() {
    return Math.floor(Math.random() * 1000);
}

alert(randomNumber());

/* 2 */

function switchArguments(arg1, arg2) {
    let tempArg = arg1;
    arg1 = arg2;
    arg2 = tempArg;
    alert(`${arg1}, ${arg2}`);
}

let value1 = prompt('Enter value 1');
let value2 = prompt('Enter value 2');

switchArguments(value1, value2);

/* 3 */

function isEven(number) {
    return number % 2 === 0;
}

let number = prompt('Enter number');

number = parseInt(number);

let even = isEven(number);

if (even) {
    alert('Even');
} else {
    alert('Odd');
}
 
 
/* 4 */

function maxDivider(number1, number2) {
    let divider = number1 < number2 ? number1 : number2;

    while (divider >= 0) {
        if (number1 % divider === 0 && number2 % divider === 0) {
                return divider;
        }
        divider--;
    }

    return divider;
}

let nbm1 = +prompt('Enter number 1');
let nbm2 = +prompt('Enter number 2');

alert(maxDivider(nbm1, nbm2));
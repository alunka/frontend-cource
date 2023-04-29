 'use strict';

/* 1 */

let from = +prompt('Enter start of range');
let to = +prompt('Enter end of range');

let sum = from;
let start = from;
let end = to;
if (from > to) {
 sum = to;
 start = to;
 end = from;
}

while (start < end) {
    console.log(`${start}: ${sum}`);
    start++;
    sum = sum + start;
}

alert(`sum of range is: ${sum}`);

/* 2 */

let nbm1 = +prompt('Enter number 1');
let nbm2 = +prompt('Enter number 2');

let divider = nbm1 < nbm2 ? nbm1 : nbm2;

while (divider >= 0) {
    if (nbm1 % divider === 0 && nbm2 % divider === 0) {
        alert(`Maximum divider: ${divider}`);
        break;
    }
    divider--;
}

if (divider === 0) {
    alert('Divider not found');
}


/* 3 */

let number = +prompt('Enter number');

let result = number;
let count = number;

while (count > 1) {
    count--;
    if (number % count === 0) {
        result = result + `, ${count}`;
    }
}

alert(result);

/* 4 */

let number1 = prompt('Enter number');
alert(number1.length);

/* 5 */

let numberCount = 0, zeroCount = 0, positiveCount = 0, negativeCount = 0, evenCount = 0, oddCount = 0;

while (numberCount < 10) {
   let enteredNumber = prompt('Enter number');
   if (parseInt(enteredNumber) !== parseFloat(enteredNumber) || isNaN(enteredNumber)) {
        alert('You have entered incorrect value');
        continue;
   }
   numberCount++;
   if (enteredNumber == 0) {
    zeroCount++;
   }
   if (enteredNumber > 0) {
    positiveCount++;
   }
   if (enteredNumber < 0) {
    negativeCount++;
   }
   if (enteredNumber != 0 && enteredNumber % 2 === 0) {
    evenCount++;
   } else if (enteredNumber != 0) {
    oddCount++;
   }
}

alert(`Zero: ${zeroCount}, Positive: ${positiveCount}, Negative: ${negativeCount}, Even: ${evenCount}, Odd: ${oddCount}`);

/* 6 */

while(true) {
    let number1 = +prompt('Enter number 1');
    let number2 = +prompt('Enter number 2');
    let operation = prompt('Operation');

    switch(operation) {
        case '+':
            alert(number1 + number2);
           break; 
        case '-':
            alert(number1 - number2);
           break; 
        case '*':
            alert(number1 * number2);
            break;
        case '/':
            alert(number1 / number2);
           break;  
        default:
            alert('Incorrect operation');
    }
    if (!confirm(`Continue?`)) {
        break;
    }
}

/* 7 */

let number7 = prompt('Enter number');
let position = prompt('Enter position');
if (parseInt(number7) !== parseFloat(number7) || isNaN(number7) || parseInt(position) !== parseFloat(position) || isNaN(position)) {       
      alert('You have entered incorrect value');
   } else {
    alert(number7.substring(position) + number7.substring(0, position));
   }


/* 8 */

let daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

let numberOfWeek = 0;

while(true) {
    alert(daysOfWeek[numberOfWeek]);
    numberOfWeek++;
    if(numberOfWeek > 6) {
        numberOfWeek = 0;
    }
    
    if(!confirm(`Continue?`)) {
        break;
    }
}

/* 9 */

let table = '';
for (let i = 2; i <= 9; i++) {
    for (let k = 1; k <= 10; k++) {
        console.log(`${i} * ${k} = ${i * k}`);
        table += `${i} * ${k} = ${i * k}\n`;
    }
    table += `-----------------------\n`;
}
alert(table);

/* 10 */

let quizNumber = +prompt('Enter number from 0 to 100');

quizNumber = parseInt(quizNumber);
if (quizNumber < 0 || quizNumber > 100 || isNaN(quizNumber)) {
    alert('You have entered a wrong value');
} else {
    let N = 50;
   while (true) {
    if (confirm(`Is your number ${N}`)) {
        break;
    }
    if (confirm(`Is your number greater then ${N}`)) {
        N = N + Math.floor(N/2);
    } else {
        N = Math.floor(N/2);
    }

    if (N > 100) {
        N = 100;
    }

    if (N < 0) {
        N = 0;
    }
   }
}
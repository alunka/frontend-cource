 'use strict';

/* 1 */

function compareNumber(number1, number2) {
    if(number1 === number2) {
        return 0;
    }

    return number1 < number2 ? -1 : 1;
}

let num1 = prompt('Enter number 1');
let num2 = prompt('Enter number 2');
alert(compareNumber(num1, num2));

/* 2 */

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(10) );

/* 3 */

function concatinateNumber(number1, number2, number3) {
    return +`${number1}${number2}${number3}`;
}  

let numb1 = prompt('Enter number 1');
let numb2 = prompt('Enter number 2');
let numb3 = prompt('Enter number 3');

alert(concatinateNumber(numb1, numb2, numb3));

/* 4 */

function area(height, width) {
    if (width === undefined) {
        return height ** 2;
    }

    return width * height;
}
let result = area(7, 9);
alert(result);

/* 5 */

function perfectDivider(number) {
    let result = 0;
    let counter = number;
    while(--counter > 0) {
        if (number % counter === 0) {
            result += counter;
        } 
    }

    return result === number;
}


/* 6 */

function findPerfectDivider(min, max) {
    if (min > max) {
        alert('Incorrect input');
        return;
    }

    let perfectNumber = [];
    if (min === max && perfectDivider(min)) {
         perfectNumber.push(min); 
    } else {
        while (min <= max) {
            if (perfectDivider(min)) {
                perfectNumber.push(min); 
            }
            min++;
        }
    }

    console.log(perfectNumber);
}

findPerfectDivider(1, 10000);

/* 7 */

function time(hours, minutes, seconds) {
    if (hours === undefined || hours.length === 0) {
        hours = '00';
    }
    if (minutes === undefined || minutes.length === 0) {
        minutes = '00';
    }
    if (seconds === undefined || seconds.length === 0) {
        seconds = '00';
    }
    return `${hours}:${minutes}:${seconds}`;
}

 alert(time(18, 23));

/* 8 */

function timeToSeconds(hours, minutes, seconds) {
    return seconds + minutes * 60 + hours * 3600;
}


 alert(timeToSeconds(18, 23, 24) + ' seconds');

/* 9 */

function secondsToTime(seconds) {
    let hours = seconds / 3600;

    if (hours > 0) {
        hours = Math.floor(hours);
        seconds -= hours * 3600;
        if (hours < 10) {
            hours = '0' + hours;
        }
    } else {
        hours = '00';
    }

    let minutes = seconds / 60;

    if (minutes > 0) {
        minutes = Math.floor(minutes);
        seconds -= minutes * 60;
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
    } else {
        minutes = 0;
    }
    
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    return `${hours}:${minutes}:${seconds}`;
}

 alert(secondsToTime(46303));

/* 10 */

function timeDiff(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    let diff = timeToSeconds(hours1, minutes1, seconds1) - timeToSeconds(hours2, minutes2, seconds2);
    diff = Math.abs(diff);
    return secondsToTime(diff);
}

alert(timeDiff(23, 16, 45, 2, 4, 5));
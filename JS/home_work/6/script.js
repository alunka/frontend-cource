 'use strict';

/* 1 */

function isSpam(text) {
    if (typeof text !== 'string') {
       return false;
    }
    text = text.toLowerCase();

    return text.includes(' vip ') || text.includes(' sale ');
}

console.log(isSpam());
console.log(isSpam('Having a VIP client experience works sort of like a domino effect, and all the pieces that fall are the amazing benefits.'));
console.log(isSpam('Shop the sale online at H&M and stock up on lots of great deals!'));
console.log(isSpam('UNIQLO LifeWear combines high performance technology and functional design for an affordable.'));

/* 2 */

function shortensString(text, length = 100) {
    if (text.length <= length) {
        console.log(text);
        return;
    }
    console.log(text.slice(0, length) + '...');
}

shortensString('Having a VIP client experience works sort of like a domino effect, and all the pieces that fall are the amazing benefits.');
shortensString('Having a VIP client experience works sort of like a domino effect, and all the pieces that fall are the amazing benefits.', 20);
shortensString('Having a VIP client experience works sort of like a domino effect, and all the pieces that fall are the amazing benefits.', 180);



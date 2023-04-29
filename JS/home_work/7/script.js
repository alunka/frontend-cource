 'use strict';

/* 1 */
const monthNames = ['Січня', 'Лютого', 'Березня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня',  'Жовтня', 'Листопада', 'Грудня'];
const date = new Date();
document.getElementById('current_date').innerHTML = `${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;

/*  2 */

document.getElementById('current_hours').innerHTML = `${date.getHours()} Година`;

/* 3 */

function calculateDaysToBirthday() {
    let userDate = document.getElementById('birth_date').value;
    userDate = new Date(userDate);
    userDate.setFullYear(date.getFullYear());
    
    if (date.getTime() > userDate.getTime()) {
        userDate.setFullYear(date.getFullYear() + 1);
    }
    let diff = date.getTime() - userDate.getTime();
    let days = Math.ceil(Math.abs(diff) / (1000 * 3600 * 24));
    document.getElementById('days_to_birthday').innerHTML = `${days} ${days === 1 ? 'day' : 'days'}`;
}

/* 4 */

if (date.getDay() === 0 || date.getDay() === 6) {
    document.getElementById('weekend').innerHTML = 'Сьогодні вихідний!';
} else {
    document.getElementById('weekend').innerHTML = 'Сьогодні не вихідний(';
}

//const frontEnd = 'front end 22';
//const age = 1;


//localStorage.setItem('frontEnd',frontEnd);

//console.log(localStorage.getItem('frontEnd'));

const obj = {
    frontEnd: 'front end 22',
    age: 1
}

localStorage.setItem('obj', JSON.stringify(obj));

console.log(typeof localStorage.getItem('obj'));

const objSt = localStorage.getItem('obj');

console.log(objSt);

const cours = JSON.parse(objSt);

console.log(cours);
// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.



const rez = (function () {
    let obj = Object.create(null);       
    return obj;
}());

console.log(rez); 
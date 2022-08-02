// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем 
// проверяет есть ли у переданного объекта свойство с данным именем. Функция 
// должна возвращать true или false.


const studentMGU = {
    presentPosition: 'Moscow',
    languageInUse: 'Rusian'
}

const checkIncludes = function (string, object) {
   
    return string in object;
   
}

console.log(checkIncludes('presentPosition', studentMGU));

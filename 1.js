// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в 
// консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.


const studentMGU = {
    presentPosition: 'Moscow',
    languageInUse: 'Rusian'
}

const foreignStudentMGU = Object.create(studentMGU);
foreignStudentMGU.nativeLanguage = 'Arabian';
foreignStudentMGU.nativeCountry = 'Algeria';

let rezInfo = function(a) {
    
    for (let key in a) {
            if (a.hasOwnProperty(key)) {    
            console.log(key+': '+a[key]); 
        }   
    }    
}

rezInfo(foreignStudentMGU);


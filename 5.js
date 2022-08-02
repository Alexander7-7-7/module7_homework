// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.
// Общие требования:
// Имена классов, свойств и методов должны быть информативными;
// Соблюдать best practices;
// Использовать синтаксис ES6.



let totalElectroCons = 0; 
let totalWaterCons = 0; 

class Kitchendevs {
    	constructor(options) {
    this.name = options.name,
    this.consumption = options.consumption,
    this.material = options.material
    }
}

class Waterconsumption extends Kitchendevs {
        constructor(options){
    super(options)
    this.waterconsumption = options.waterconsumption
    }
}

const frige = new Kitchendevs ({    
    name: 'Fridge',
    consumption: 200,
    material: 'Metal'
});

const whashingMachine = new Waterconsumption({
    name: 'Washing machine',
    consumption: 450,
    material: 'Plastic',
    waterconsumption: 30
});

const grillMachine = new Kitchendevs ({
    name: 'Grill',
    consumption: 1500,
    material: 'Steel'    
});


Kitchendevs.prototype.switchOn = function (position) {
    
    if ('on' === position && this.waterconsumption) { console.log( this.name + ' включена ' 
    + this.consumption + ' W. Плюс потребление воды ' + this.waterconsumption + ' литров/час'); 
    return totalElectroCons += this.consumption, totalWaterCons += this.waterconsumption;
    } 

    else if('on' === position) { console.log( this.name + ' включена ' 
    + this.consumption + ' W.'); 
    return totalElectroCons += this.consumption; } 

    else if ('off' === position) {console.log( this.name + ' выключен/а'); 
    return totalElectroCons;}
}

whashingMachine.switchOn('on');
grillMachine.switchOn('off');
frige.switchOn('on');
console.log('Общее потребление: '+ totalElectroCons + ' W/h. ' + 'Воды утекает: ' + totalWaterCons + ' литров/час');

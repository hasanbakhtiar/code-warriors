class Car{
    constructor(model,color,year){
            this.cModel = model;
            this.cColor = color;
            this.cYear = year;
    }


    calculateSpeed(km,hour){
            return `${this.cModel} speed is ${km/hour}km/h`
    }
    
}

const myCar = new Car("BMW X5","black",2000);
console.log(myCar.calculateSpeed(300,2));

class Moto extends Car{
    constructor(model,color,year){
            super(model,color,year);
    }
}

const myMoto  = new Moto("Yamaha","red","2022");
console.log(myMoto.calculateSpeed(1000,12));
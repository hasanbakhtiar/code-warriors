// function info(a:number,b:number):void{
//     console.log(a+b);


// }

// info(10,20);

class Car {
    protected ibrand: string;
    public iyear: number;
    public icolor: string;
    constructor(brand: string, year: number, color: string) {
        this.ibrand = brand;
        this.iyear  = year;
        this.icolor = color
    }
}

class Moto extends Car {
    constructor(brand: string, year: number, color: string){
        super(brand,year,color);
    }

    protected getBrand(){
        return this.ibrand;
    }
    
    
}

const myCar = new Car('bmw',1890,"black");
const myMoto = new Moto('bmw',1890,"black");

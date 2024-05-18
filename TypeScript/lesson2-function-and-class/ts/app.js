// function info(a:number,b:number):void{
//     console.log(a+b);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// }
// info(10,20);
var Car = /** @class */ (function () {
    function Car(brand, year, color) {
        this.ibrand = brand;
        this.iyear = year;
        this.icolor = color;
    }
    return Car;
}());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(brand, year, color) {
        return _super.call(this, brand, year, color) || this;
    }
    Moto.prototype.getBrand = function () {
        return this.ibrand;
    };
    return Moto;
}(Car));
var myCar = new Car('bmw', 1890, "black");
var myMoto = new Moto('bmw', 1890, "black");

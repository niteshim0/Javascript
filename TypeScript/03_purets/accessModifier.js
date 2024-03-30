"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.displayInfo = function () {
        console.log("Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Year: ").concat(this.year));
    };
    return Car;
}());
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(brand, model, year) {
        var _this = _super.call(this, brand, model, year) || this;
        // We can access the protected member 'year' from the base class here
        console.log("Electric car year: ".concat(_this.year));
        return _this;
    }
    return ElectricCar;
}(Car));
var myCar = new Car('Toyota', 'Camry', 2022);
console.log(myCar.brand); // Accessing public property 'brand'
// console.log(myCar.model); // This will result in a compilation error since 'model' is private
var electricCar = new ElectricCar('Tesla', 'Model S', 2023);

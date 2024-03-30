var Car = /** @class */ (function () {
    // Constructor
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    // Method
    Car.prototype.displayInfo = function () {
        console.log("Brand: ".concat(this.brand, ", Model: ").concat(this.model, ", Year: ").concat(this.year));
    };
    return Car;
}());
// Creating an instance of the Car class
var myCar = new Car('Toyota', 'Camry', 2022);
console.log(myCar);
// myCar.brand; // Error: Property 'brand' is private and only accessible within class 'Car'.
// Accessing properties and calling method
myCar.displayInfo();
// production code of same 
var productionCar = /** @class */ (function () {
    function productionCar(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    return productionCar;
}());
var car2 = new productionCar('Toyota', 'Camry', 2002);
console.log(car2);

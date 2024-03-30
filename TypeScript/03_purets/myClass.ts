class Car {
  // Properties
  private brand: string;
  model: string;
  year: number;

  // Constructor
  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Method
  displayInfo() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
  }
}

// Creating an instance of the Car class
let myCar = new Car('Toyota', 'Camry', 2022);
console.log(myCar);
// myCar.brand; // Error: Property 'brand' is private and only accessible within class 'Car'.
// Accessing properties and calling method
myCar.displayInfo();

// production code of same 

class productionCar {
  constructor(private brand : string,public model : string,public year : number){
  }
  
}

let car2 = new productionCar('Toyota','Camry',2002);

console.log(car2)

export {};

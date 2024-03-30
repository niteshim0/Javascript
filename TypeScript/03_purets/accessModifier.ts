class Car {
  constructor(public brand: string, private model: string, protected year: number) {
  }

  displayInfo() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
  }
}

class ElectricCar extends Car {
  constructor(brand: string, model: string, year: number) {
    super(brand, model, year);
    // We can access the protected member 'year' from the base class here
    console.log(`Electric car year: ${this.year}`);
  }
}

let myCar = new Car('Toyota', 'Camry', 2022);
console.log(myCar.brand);    // Accessing public property 'brand'
// console.log(myCar.model); // This will result in a compilation error since 'model' is private

let electricCar = new ElectricCar('Tesla', 'Model S', 2023);
// console.log(electricCar.year); // This will result in a compilation error since 'year' is protected

export {};
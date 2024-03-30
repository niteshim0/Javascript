class MyClass {
  private _myProperty: number = 0;

  get myProperty(): number {
      return this._myProperty;
  }

  set myProperty(value: number) {
      if (value >= 0) {
          this._myProperty = value;
      } else {
          console.log("Value must be non-negative.");
      }
  }
}

let obj = new MyClass();
obj.myProperty = 10;
console.log(obj.myProperty); // Output: 10

obj.myProperty = -5; // Output: Value must be non-negative.
console.log(obj.myProperty); // Output: 10 (value remains unchanged)

export {}
const score:Array<Number> = [1,2,4];
const names:Array<string> = ["Rahul","Sunil","Maya","Roshesh"];

function idenityOne(val : number | boolean): number | boolean{
  return val;
}

function idenityTwo(val : any):any{
  return val;
}

function idenityThree<T>(val : T):T{
  return val;
}

console.log(score);
console.log(names);
console.log(idenityOne(5));
console.log(idenityTwo("Hello"));
console.log(idenityThree(5));
console.log(idenityThree("Hello"));

// There is big difference b/w any and generics , genrics logs the types of the values passed to it while any does not log the type of the value passed to it.

// Passing user defined types to generics
interface User {
  readonly dbId : number;
  name : string;
  email : string;
  userId : number;
  googleLogin? : number;
  startTrial() : string; // both ways works fine whatever you prefer
  getCoupon : (couponame : string,value : number) => string;
}

const user : User = {
  dbId : 1,
  name : 'Steve',
  email : 'example@gmail.com',
  userId : 1,
  googleLogin : 1,
  startTrial() {
    return 'trial started';
  },
  getCoupon(couponame : string, value : number) {
    return `coupon ${couponame} applied with value ${value}`;
  }
};

console.log(idenityThree<User>(user)); // in user defined types we have to specifically need to mention what type of value we are passing to the generic function.

function getSearchProducts<T>(products : T[]):T{
  const validIdx = Math.floor(Math.random() * products.length);
  return products[validIdx];
}

const products = [
  {
    name : "laptop",
    price : 1000
  },
  {
    name : "mobile",
    price : 500
  },
  {
    name : "tablet",
    price : 300
  }
];

console.log(getSearchProducts(products));

// using arrow function to do the same

const getSearchProductsArrow = <T>(products : T[]):T => {
  const validIdx = Math.floor(Math.random() * products.length);
  return products[validIdx];
}

console.log(getSearchProductsArrow(products));

class Box<T> {
  private value: T;

  constructor(value: T) {
      this.value = value;
  }

  getValue(): T {
      return this.value;
  }

  setValue(newValue: T): void {
      this.value = newValue;
  }
}

const box = new Box<string>("Hello");
console.log(box.getValue());
const box2 = new Box<number>(100);
console.log(box2.getValue());

const box3 = new Box<User>(user);
console.log(box3.getValue());



// Generics with multiple types
function getFirstTwo<T, U>(arr1: T[], arr2: U[]): [T, U] {
  return [arr1[0], arr2[0]];
}

const arr1 = [10, 20, 30];
const arr2 = ["A", "B", "C"];
const result = getFirstTwo(arr1, arr2);
console.log(result);

// Generics with constraints
interface Lengthwise {
  length: number;
}

function getLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}

console.log(getLength("Hello"));
console.log(getLength([1, 2, 3]));
console.log(getLength({ length: 5 }));

export {}






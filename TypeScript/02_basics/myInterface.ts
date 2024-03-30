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
  email : 'n@n.com',
  userId : 1,
  googleLogin : 1,
  startTrial() {
    return 'trial started';
  },
  getCoupon(couponame : string, value : number) {
    return `coupon ${couponame} applied with value ${value}`;
  }
};

console.log(user);

// type vs Interface

interface Box {
  width : number,
  length : number,
}

interface Box{           // redecalartion is not allowed in type
  height : number
}
let box : Box = {
  width : 5,
  height : 6,
  length : 8,
}

console.log(box);

interface Animal {
  species: string;
}

interface Dog extends Animal {  // no any extension in type
  breed: string;
}

let dog: Dog  = {
  species : "Animal",
  breed : "Pomerian"
}
console.log(dog);

type age = number; // valid
// interface ageInterface = number; // not valid
export {}
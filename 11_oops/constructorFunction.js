function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  
  this.greet = function() {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName + ".");
  };

  return this; // it is implicitly returned so it makes no difference your choice to return or not
}

// Creating instances of Person using the constructor function
let person1 = new Person("John", "Doe", 30);
let person2 = new Person("Alice", "Smith", 35);

// Calling the greet method on each instance
person1.greet(); // Output: Hello, my name is John Doe.
person2.greet(); // Output: Hello, my name is Alice Smith.

console.log(person1.constructor);
console.log(person2.constructor);
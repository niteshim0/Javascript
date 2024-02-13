//Scope in JS
//scope refers to the accessibility and visibility of variables and functions within your code.

//Let's understand it why we are reading it and what is the problem created by var

// let a = 10;
// const b = 30;
var c = 300;
if(true){
  let a = 10;
  const b = 30;
  var c = 30;
}

// console.log(a); //ReferenceError: a is not defined
// console.log(b); //ReferenceError: b is not defined
console.log(c); //doesn't give any problem that's the major problem,that is block scope variable interes with global scope variable , it is the major reason var has been deprecated

//Types of Scope in JS : 1)Global Scope    and 2)Local Scope
//Global Scope :: Variables and functions declared outside of any function or block have global scope. They can be accessed from anywhere within your code, including inside functions and blocks.

// Global variable
let globalVar = "I'm a global variable";

function foo() {
    console.log(globalVar); // Accessible within functions
}

foo();

//Local Scope :: Variables declared within a function or block have local scope. They are accessible only within that function or block and cannot be accessed from outside.

function bar() {
  // Local variable
  let localVar = "I'm a local variable";
  console.log(localVar); // Accessible within the function
}

bar(); // Output: I'm a local variable

console.log(localVar); // Error: localVar is not defined




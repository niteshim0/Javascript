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
console.log(c); //doesn't give any problem that's the major problem,that is block scope variable interferes with global scope variable , it is the major reason var has been deprecated

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

// console.log(localVar); // Error: localVar is not defined


//Scope Part-2 // Nesting of functions and how the scope changes
// Nesting functions refers to the practice of defining functions within other functions. This is a fundamental aspect of the language and is often used to create closures, manage scope, and organize code. When you nest functions in JavaScript, the inner function has access to variables and parameters of the outer function due to lexical scoping rules. This concept is often referred to as closures.

function one(){
  const name = "Nitesh"
  function two(){
    const surname = " Kushwaha";
    const fullName = name + surname;
    console.log(fullName)
  }
  // console.log(surname) //ReferenceError: surname is not defined
  // as explained above //lexical scoping rules
  two()
}
one()

//Normal function v/s Function Expression

//Normal function
console.log(addOne(6))
function addOne(num){
  return num + 1;
}
// - Function declarations are hoisted, meaning they are processed before any code execution.
// - They are available in the entire scope in which they are declared, regardless of where they appear within that scope.
// - Can be used before they are declared in the code.

//Function expressions
// console.log(add(7,8)) //ReferenceError: Cannot access 'add' before initialization
const add = function(a, b) {
  return a + b;
};
console.log(add(7,8))
// - Function expressions are not hoisted, meaning they are only available after the line of code where they are defined.
// - They are treated as variables and must be defined before they are used.
// - Can be named (named function expression) or anonymous (anonymous function expression).


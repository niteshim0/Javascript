//Function Part - 1
//Function is a block of reusable code that performs a specific task.
/* Functions are defined using the function keyword followed by a name (optional) and a pair of parentheses (), which may contain parameters, and then a block of code enclosed in curly braces {}. */

//Basic Syntax : 
function functionName(parameter1, parameter2) {
  // code block
}

//Example
function addNumbers(a, b) {
  return a + b;
}
let result = addNumbers(5, 3);
console.log(result); 

//Inaccuracies due to JS being dynamically typed language
//Some example of the same
let inacc1 = addNumbers(2,"4");
console.log(inacc1);

let inacc2 = addNumbers(2,"");
console.log(inacc2);

let inacc3 = addNumbers();
console.log(inacc3);

function loggedInUser(username){
  return `${username} just logged in `
}

let login = loggedInUser()//undefined just logged in//thats why typescript come in handy
console.log(login)


//Shopping Cart Functionality function 
//Passing Multiple arguments into the function
//Way I)) Using "arguments" object
/* define functions that accept an arbitrary number of arguments using the arguments object*/
function sumUsingArgument() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
  }
  return total;
}

let res = sumUsingArgument(1, 2, 3, 4, 5);
console.log(res); 
// arguments is an array-like object that contains all the arguments passed to the function. It iterates through all the arguments and calculates their sum.

//Way2 )) Rest parameter Syntax(...)
// one can use the rest parameter syntax (...) to gather multiple arguments into an array.
function sumUsingRest(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

let ans = sumUsingRest(1, 2, 3, 4, 5);
console.log(ans); 

//Function Part-2
//Functions with objects and array in javascript

//Passing objects into the function

const prouct = {
  name : "Apple Macbook Pro+",
  price : 1000000
}

function objectHandler(anyobject){
  console.log(`Product name is ${anyobject.name}  and its price is ${anyobject.price}`);
}

console.log(objectHandler(prouct));

function arrayHandler(anyarray){
  console.log(`First value of array is ${anyarray[0]}  and second value is ${anyarray[1]}`);
}

console.log(arrayHandler([100,200,300,400,500]));





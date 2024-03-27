const User = {
    name: 'John',
    age: 30
};
console.log(User);

function createUser({name:string, age:number}) {
    
}
let newUser = {name: 'John', age: 30,email:"aalu@gobhi.com"}
createUser(newUser) // it should give me some sort of error but it doesn't give me any error the first odd behavour in the typescript code
/*The reason TypeScript doesn't give an error in this case is because TypeScript performs excess property checking only for object literals directly assigned to variables or passed as arguments to functions. When you assign an object literal directly to a variable or pass it as an argument to a function, TypeScript checks if the object literal has any extra properties that are not present in the target type.

However, in your code, you're first defining an object newUser with an extra property email and then passing it to the createUser function. This process doesn't trigger excess property checking because newUser is already created before being passed to createUser.

To enforce strictness and prevent passing objects with extra properties to functions, you can use TypeScript's type assertions or explicitly define a type for the object being passed to createUser. Here's how you can do it:*/

//Using Type Assertion
function createUser2({name, age}: {name: string, age: number}) {
  // Function implementation
}

let newUser2 = {name: 'John', age: 30, email: "aalu@gobhi.com"} as {name: string, age: number};
createUser2(newUser2); // Error: Object literal may only specify known properties

//Using Type Aliases
interface User {
  name: string;
  age: number;
}

function createUser3(user: User) {
  // Function implementation
}

let newUser3 = {name: 'John', age: 30, email: "aalu@gobhi.com"};
createUser3(newUser3); // Error: Object literal may only specify known properties


function createCourse({name:string, price:number}) {
    return {name:"typescript",price:100}
}

createUser({name: 'John', age: 30})
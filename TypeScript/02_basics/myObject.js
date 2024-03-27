var User = {
    name: 'John',
    age: 30
};
console.log(User);
function createUser(_a) {
    var string = _a.name, number = _a.age;
}
var newUser = { name: 'John', age: 30, email: "aalu@gobhi.com" };
createUser(newUser); // it should give me some sort of error but it doesn't give me any error the first odd behavour in the typescript code
/*The reason TypeScript doesn't give an error in this case is because TypeScript performs excess property checking only for object literals directly assigned to variables or passed as arguments to functions. When you assign an object literal directly to a variable or pass it as an argument to a function, TypeScript checks if the object literal has any extra properties that are not present in the target type.

However, in your code, you're first defining an object newUser with an extra property email and then passing it to the createUser function. This process doesn't trigger excess property checking because newUser is already created before being passed to createUser.

To enforce strictness and prevent passing objects with extra properties to functions, you can use TypeScript's type assertions or explicitly define a type for the object being passed to createUser. Here's how you can do it:*/
//Using Type Assertion
function createUser2(_a) {
    var name = _a.name, age = _a.age;
    // Function implementation
}
var newUser2 = { name: 'John', age: 30, email: "aalu@gobhi.com" };
createUser2(newUser2); // Error: Object literal may only specify known properties
function createUser3(user) {
    // Function implementation
}
var newUser3 = { name: 'John', age: 30, email: "aalu@gobhi.com" };
createUser3(newUser3); // Error: Object literal may only specify known properties
function createCourse(_a) {
    var string = _a.name, number = _a.price;
    return { name: "typescript", price: 100 };
}
createUser({ name: 'John', age: 30 });

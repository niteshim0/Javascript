# Lexical Scoping and Closures in JavaScript

## Lexical Scoping

Lexical scoping refers to how variable names are resolved during the compile-time phase of code execution. In JavaScript, scope is determined by the placement of variables and blocks of code in the source code.

- **Global Scope**: Variables declared outside of any function are in the global scope and can be accessed from anywhere in the code.

- **Function Scope**: Variables declared within a function are in the scope of that function and are not accessible from outside of it.

- **Block Scope** (introduced in ES6): Variables declared using `let` and `const` are scoped to the nearest enclosing block. Blocks could be within functions, loops, or conditional statements.

Here's an example of lexical scoping in action:

```javascript
var globalVar = 'I am global';

function outerFunction() {
    var outerVar = 'I am outer';
    
    function innerFunction() {
        var innerVar = 'I am inner';
        console.log(innerVar); // Accessible
        console.log(outerVar); // Accessible
        console.log(globalVar); // Accessible
    }
    
    innerFunction();
    // console.log(innerVar); // Error: innerVar is not defined
}

outerFunction();
// console.log(outerVar); // Error: outerVar is not defined
```
## Closures

A closure is a combination of a function and the lexical environment within which that function was declared. Closures allow functions to retain access to variables from their containing (enclosing) lexical scope even after the parent function has finished executing. This means that a function "closes over" its surrounding scope.

Closures are created every time a function is created, and they encapsulate the variables in their lexical scope, preserving them.

```js
function outerFunction() {
    var outerVar = 'I am outer';
    
    function innerFunction() {
        console.log(outerVar); // Accessible due to closure
    }
    
    return innerFunction;
}

var closure = outerFunction();
closure(); // Output: I am outer

```
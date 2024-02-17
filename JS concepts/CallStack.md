# Call Stack in JavaScript

The call stack in JavaScript is a mechanism used by the JavaScript engine to keep track of its place in a script that calls multiple functions. It's essentially a data structure (a stack) that stores information about the active subroutines of a script.

## How it works:

1. **Global Execution Context (GEC)**: First and foremost, the Global Execution Context is created and pushed onto the call stack. This represents the initial state of the JavaScript environment.

2. **Function Calls**: Whenever a function is called, a new frame is pushed onto the call stack to represent the function call.

3. **Execution**: The JavaScript engine executes the code inside the function whose frame is at the top of the stack. If this function calls another function, a new frame for that function call is pushed onto the stack, and execution continues there.

4. **Return**: When a function finishes executing (either it reaches the end of its code or encounters a return statement), its frame is popped off the stack, and control returns to the previous frame on the stack.

This process continues until the stack is empty, meaning that all functions have returned and the program has finished executing.

The call stack helps the JavaScript engine keep track of the execution context (including local variables and parameters) for each function call. It also helps in identifying and handling errors, as the stack trace (a list of function calls currently on the stack) provides information about where an error occurred in the code.

## Example:

```javascript
function firstFunction() {
  console.log("Inside firstFunction");
  secondFunction();
}

function secondFunction() {
  console.log("Inside secondFunction");
  thirdFunction();
}

function thirdFunction() {
  console.log("Inside thirdFunction");
}

firstFunction();
// In this example, when firstFunction is called, its frame is pushed onto the call stack. Inside firstFunction, secondFunction is called, so its frame is pushed onto the stack on top of firstFunction's frame. Similarly, when secondFunction calls thirdFunction, its frame is pushed onto the stack.

// Once thirdFunction finishes executing, its frame is popped off the stack, and control returns to secondFunction. Similarly, when secondFunction finishes, its frame is popped off the stack, and control returns to firstFunction. Finally, when firstFunction finishes executing, its frame is popped off the stack, and the stack becomes empty.
```
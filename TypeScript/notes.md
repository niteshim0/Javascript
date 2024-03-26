# What is TypeScript ?

- TypeScript is a programming language that builds on JavaScript, adding static type definitions. This means that TypeScript shares the same syntax as JavaScript, but with the addition of type checking. This can help to catch errors early on in the development process, making it easier to write and maintain code.

- TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. This makes it easy to start using TypeScript in an existing JavaScript project.

- TypeScript is compiled to JavaScript, so it can be run anywhere that JavaScript can be run. This includes browsers, servers, and mobile devices.

- TypeScript is a popular choice for developing large and complex JavaScript applications. It can also be used for smaller projects, and can be a good way to learn about static typing.

- TypeScript is not some standalone language or superset of Javascript(true in some ways) it is the lnaguage which is wrapper around Javascript. It will be accurate to call it development tool rather than superset of Javascript which helps us in writing error-free ,maintanable,scalable and readable code.

**Benefits of using TypeScript**

1. Static type checking:
TypeScript can catch errors early on in the development process, making it easier to write and maintain code.

2. Improved code readability:
TypeScript can help to improve the readability of code by making it clear what types of data are being used.

3. Better code completion:
TypeScript can provide better code completion in IDEs, making it easier to write code quickly and accurately.

4. Support for modern JavaScript features:
TypeScript supports all of the latest JavaScript features, including ES6 and ES7.

# How to Install TypeScript on Windows

To install TypeScript on Windows, follow these steps:

1. **Install Node.js and npm**:
   Ensure that Node.js and npm are installed on your system. You can download and install Node.js from the official website: [Node.js Downloads](https://nodejs.org/en/download/). Follow the installation instructions provided on the website.

2. **Open a Command Prompt or Git Bash**:
   Once Node.js and npm are installed, open a Command Prompt or Git Bash. You can search for "Command Prompt" or "Git Bash" in the Start menu.

3. **Install TypeScript globally**:
  To install TypeScript globally, use the following npm command:

 ```bash
  npm install -g typescript
```

4. **Verify the Installation**:
After the installation is complete, you can verify that TypeScript is installed correctly by checking its version. 
Run the following command:
```bash
tsc --version
```
This command will display the installed TypeScript version. If you see the version number, it means TypeScript is successfully installed.

5. **Optional(Configure tsconfig.json:)**:
If you're using TypeScript in a project, you may need to create or modify a tsconfig.json file to configure TypeScript compiler options for your project. You can create this file manually or by running tsc --init command in the project directory. Modify the tsconfig.json file according to your project's needs.


## TypeScript Basic Types and Examples

**Boolean:**
Represents a boolean value, `true` or `false`.

```typescript
let isCompleted: boolean = true;
```

**Number:**
Represents numeric values, both integers and floating-point numbers..

```typescript
let count: number = 10;
let price: number = 25.99;
```
**String:**
Represents textual data.

```typescript
let message: string = "Hello, TypeScript!";
```
**Array:**
Represents a collection of elements of the same type.
```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: Array<string> = ["apple", "banana", "orange"];
```
**Tuple:**
Represents an array with a fixed number of elements, each of which may be of a different type.

```typescript
let person: [string, number] = ["John", 30];
```
**Enum:**
Represents a set of named constants.

```typescript
enum Color {
    Red,
    Green,
    Blue
}
let selectedColor: Color = Color.Red;
```
**Any:**
Represents any type, allowing you to bypass type checking.

```typescript
let variable: any = "This can be any type";
```
**Void:**
Represents the absence of any type. Typically used as the return type of functions that do not return a value.

```typescript
function sayHello(): void {
    console.log("Hello!");
}
```
**Null and Undefined:**
Represents the absence of a value.

```typescript
let nullValue: null = null;
let undefinedValue: undefined = undefined;
```

**Object:**
Represents a non-primitive type, typically used to describe instances of classes.

```typescript
let person: object = {
    name: "John",
    age: 30
};
```

**never**
- The `never` type represents the type of values that never occur.
- Typically used for functions that never return (e.g., throw errors) or for variables that are never assigned.
- It's a subtype of every other type, allowing assignment to variables of any other type.
- Useful for exhaustive checking and ensuring all possible cases are handled in code.

```typescript
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // do something infinitely
    }
}

let neverVariable: never;
// This is allowed because `never` is a subtype of every other type
neverVariable = throwError("An error occurred");
```

**unknown**
- The unknown type represents values for which the type is not known at compile time.
- Similar to any, but with stricter type checking.
- You cannot perform operations on values of type unknown without first asserting or narrowing the type.
- Often used when dealing with values from dynamic sources like user input or third-party libraries to enforce type checking before usage.

```typescript
let userInput: unknown;
let userName: string;

userInput = 5;
// Error: Type 'unknown' is not assignable to type 'string'.
// Requires type assertion or type checking before assignment to `userName`.
userName = userInput as string; // Type assertion
if (typeof userInput === "string") {
    userName = userInput; // Type narrowing
}
```


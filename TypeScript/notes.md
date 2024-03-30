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
- Represents an array with a fixed number of elements, each of which may be of a different type.
- Doesn't try to mutate Tuples while using them.[Reasons](https://stackoverflow.com/questions/64069552typescript-array-push-method-cant-catch-a-tuple-type-of-the-array)


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

**Union:**
- TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators.
- A union type is a type formed from two or more other types, representing values that may be any one of those types

```typescript
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
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
# Functions in TypeScript

In TypeScript, functions are first-class citizens, meaning they can be treated like any other variable. TypeScript also provides strong typing capabilities, allowing you to define the types of parameters and return values for functions.

**Function Declaration:**
Functions in TypeScript can be declared using the function keyword followed by the function name and parameters, similar to JavaScript.
```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```
**Function Expression:**
Functions can also be defined using function expressions, where you assign a function to a variable.
```typescript
const greet = function(name: string): string {
    return `Hello, ${name}!`;
};
```

**Arrow Functions:**
Arrow functions are a concise way to write functions in TypeScript, especially for anonymous functions or when you want to preserve the lexical scope of `this`.
```typescript
const greet = (name: string): string => {
    return `Hello, ${name}!`;
};
```
**Optional and Default Parameters:**
You can mark function parameters as optional by adding a `?` after the parameter name or provide default values using the `=` syntax.
```typescript
function greet(name: string, greeting: string = 'Hello'): string {
    return `${greeting}, ${name}!`;
}
```
**Rest Parameters:**
You can use the rest parameter syntax `...` to represent an indefinite number of arguments as an array.
```typescript
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0);
}
```
**Function Overloading:**
TypeScript supports function overloading, where you can provide multiple function signatures for the same function.
```typescript
function double(value: number): number;
function double(value: string): string;
function double(value: any): any {
    if (typeof value === 'number') {
        return value * 2;
    } else if (typeof value === 'string') {
        return value.repeat(2);
    }
}
```
**Callbacks and Higher Order Functions:**
You can define functions that take other functions as parameters (callbacks) or return functions (higher-order functions).
```typescript
function doSomething(callback: (x: number) => void) {
    callback(42);
}

function callbackFunction(x: number) {
    console.log(x);
}

doSomething(callbackFunction);
```

**Generics in Functions:**
You can use generics to create functions that work with a variety of types.
```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("Hello");
```

**Type Annotations:**
You can explicitly specify the types of function parameters and return values using type annotations.
```typescript
function add(x: number, y: number): number {
    return x + y;
}
```
**Type Aliases For Functions:**
You can create aliases for function types to simplify complex type annotations.
```typescript
type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name) => `Hello, ${name}!`;
```

# Objects in TypeScript

In TypeScript, objects are used to represent data structures that contain properties and methods. TypeScript allows you to define object types explicitly, including specifying the types of their properties. 

## Object Declaration
Objects can be declared using curly braces `{}`. You can define the properties and their types within the braces.
```typescript
let person: { name: string, age: number };

person = { name: 'Alice', age: 30 };
```

## Type Annotations for Object Properties
You can use type annotations to specify the types of properties within an object.
```typescript
let person: { name: string, age: number };

person = { name: 'Alice', age: 30 };
```
## Optional Properties
Properties in objects can be marked as optional using the `?` syntax.
```typescript
let person: { name: string, age?: number };

person = { name: 'Alice' };
```

## ReadOnly Properties
Properties in objects can be marked as readonly to prevent them from being modified after initialization.
```typescript
let person: { readonly name: string };

person = { name: 'Alice' };
person.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.
```

## Nested Objects

Objects can contain other objects as properties.

```typescript
let person: {
    name: string,
    address: {
        city: string,
        postalCode: number
    }
};

person = {
    name: 'Alice',
    address: {
        city: 'New York',
        postalCode: 12345
    }
};
```
## Object Types
You can define custom types for objects using interfaces or type aliases.

```typescript
//using interface
interface Person {
    name: string;
    age: number;
}

let person: Person = { name: 'Alice', age: 30 };

//using type aliases
type Person = {
    name: string;
    age: number;
};

let person: Person = { name: 'Alice', age: 30 };

```

## Object Methods
Objects can contain methods, which are functions defined within the object.

```typescript
let calculator: {
    add: (x: number, y: number) => number;
    subtract: (x: number, y: number) => number;
};

calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y
};

console.log(calculator.add(5, 3)); // Output: 8
```


# Difference Between Types and Interfaces in TypeScript

In TypeScript, both types and interfaces are used to define the shape or structure of objects. They provide a way to describe the data contract that an object should adhere to. While they are similar in many respects, there are some key differences between them:

1. **Syntax**:
    - **Interface**: Interfaces are declared using the `interface` keyword followed by the name of the interface.
    - **Type**: Types are declared using the `type` keyword followed by the name of the type alias.

    ```typescript
    // Interface
    interface Person {
        name: string;
        age: number;
    }

    // Type
    type Point = {
        x: number;
        y: number;
    };
    ```

2. **Extensibility**:
    - **Interface**: Interfaces can be extended using the `extends` keyword to create new interfaces based on existing ones.
    - **Type**: Types cannot be extended.

    ```typescript
    interface Animal {
        species: string;
    }

    interface Dog extends Animal {
        breed: string;
    }
    ```

3. **Declaration Merging**:
    - **Interface**: Interfaces support declaration merging, allowing you to define multiple interfaces with the same name and have their members merged together.
    - **Type**: Types do not support declaration merging.

    ```typescript
    interface Box {
        height: number;
    }

    interface Box {
        width: number;
    }

    // Merged interface
    // interface Box {
    //     height: number;
    //     width: number;
    // }
    ```

4. **Ability to Represent Primitives**:
    - **Interface**: Interfaces cannot represent primitive types directly.
    - **Type**: Types can represent primitive types directly.

    ```typescript
    type Age = number; // valid
    interface AgeInterface = number; // Error: An interface can only extend an object type, but 'number' extends from 'number'.
    ```

5. **Readability**:
    - **Interface**: Interfaces are often preferred when defining object shapes that primarily serve as contracts for other parts of the codebase, as they provide clear documentation of the expected structure.
    - **Type**: Types are more versatile and can represent complex types and unions more succinctly, making them suitable for various scenarios, such as union types, tuple types, etc.

6. **Intersection and Union**:
    - **Interface**: Interfaces can be used in intersection types and union types.
    - **Type**: Types can be used in intersection types and union types as well.

    ```typescript
    interface A {
        foo: number;
    }

    interface B {
        bar: string;
    }

    type AB = A & B; // Intersection
    type ABUnion = A | B; // Union
    ```

In general, when deciding between using interfaces and types, it often comes down to personal preference and the specific requirements of your codebase. Use interfaces when defining object shapes that represent clear contracts, and use types for more complex type manipulations and definitions.

# Classes in TypeScript

In TypeScript, classes provide a way to define blueprints for creating objects with similar properties and methods. They are a fundamental feature of object-oriented programming (OOP).

## Declaring a Class:

To declare a class in TypeScript, you use the `class` keyword followed by the class name. You can also specify properties and methods inside the class definition.

```typescript
class MyClass {
    // Properties
    property1: string;
    property2: number;

    // Constructor
    constructor(p1: string, p2: number) {
        this.property1 = p1;
        this.property2 = p2;
    }

    // Methods
    myMethod() {
        console.log(`Property 1: ${this.property1}, Property 2: ${this.property2}`);
    }
}
```
## Creating Objects:

Once you have defined a class, you can create objects (instances) of that class using the `new` keyword followed by the class name and constructor arguments.

```ts
let obj1 = new MyClass("Hello", 42);
obj1.myMethod(); // Output: Property 1: Hello, Property 2: 42
```

## Constructors:

Classes can have a special method called the constructor, which is invoked automatically when an object of the class is created using the `new` keyword. Constructors are used to initialize object properties.

## Inheritance:

Classes in TypeScript support inheritance, allowing you to create subclasses (child classes) that inherit properties and methods from a parent class (superclass).

```ts
class ChildClass extends ParentClass {
    // Additional properties and methods
}
```

## Static Members: 

You can define static properties and methods in a class using the `static` keyword. Static members belong to the class itself rather than to instances of the class.

```ts
class MyClass {
    static myStaticProperty: number = 10;

    static myStaticMethod() {
        console.log("This is a static method.");
    }
}

console.log(MyClass.myStaticProperty); // Output: 10
MyClass.myStaticMethod(); // Output: This is a static method.
```


## Access Modifiers:

Access modifiers in TypeScript are keywords that control the visibility and accessibility of class members (properties and methods). TypeScript supports three main access modifiers: `public`, `private`, and `protected`.

**1.Public**: Members marked as public are accessible from outside the class. They can be accessed by any code that can see the instance of the class.

**2.Private**: Members marked as private are not accessible from outside the class. They can only be accessed within the same class where they are declared. Instances of the class cannot access private members, and attempts to access them from outside the class will result in a compilation error.

**3.Protected**: Members marked as protected are similar to private members, but they are accessible within the class as well as within its subclasses (derived classes). They cannot be accessed from outside the class or its subclasses.

```ts
class Car {
  public brand: string;     // Public property
  private model: string;    // Private property
  protected year: number;   // Protected property

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
  }
}

class ElectricCar extends Car {
  constructor(brand: string, model: string, year: number) {
    super(brand, model, year);
    // We can access the protected member 'year' from the base class here
    console.log(`Electric car year: ${this.year}`);
  }
}

let myCar = new Car('Toyota', 'Camry', 2022);
console.log(myCar.brand);    // Accessing public property 'brand'
// console.log(myCar.model); // This will result in a compilation error since 'model' is private

let electricCar = new ElectricCar('Tesla', 'Model S', 2023);
// console.log(electricCar.year); // This will result in a compilation error since 'year' is protected

```

## Getters and Setters :

Getters and Setters are special methods used to control the access to properties of an object. They allow you to execute custom code when getting or setting the value of a property. 

### Getter

A getter method is used to retrieve the value of a property. It is defined using the `get` keyword followed by the property name.

### Setter

A setter method is used to set the value of a property. It is defined using the `set` keyword followed by the property name. Setters take a parameter representing the new value to be assigned to the property. Setters doesn't have return type even void in typescript.

```ts
class MyClass {
    private _myProperty: number = 0;

    get myProperty(): number {
        return this._myProperty;
    }

    set myProperty(value: number) {
        if (value >= 0) {
            this._myProperty = value;
        } else {
            console.log("Value must be non-negative.");
        }
    }
}

let obj = new MyClass();
obj.myProperty = 10;
console.log(obj.myProperty); // Output: 10

obj.myProperty = -5; // Output: Value must be non-negative.
console.log(obj.myProperty); // Output: 10 (value remains unchanged)

```





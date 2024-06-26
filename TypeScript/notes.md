# What is TypeScript ?

- TypeScript is a programming language that builds on JavaScript, adding static type definitions. This means that TypeScript shares the same syntax as JavaScript, but with the addition of type checking. This can help to catch errors early on in the development process, making it easier to write and maintain code.

- TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. This makes it easy to start using TypeScript in an existing JavaScript project.

- TypeScript is compiled to JavaScript, so it can be run anywhere that JavaScript can be run. This includes browsers, servers, and mobile devices.

- TypeScript is a popular choice for developing large and complex JavaScript applications. It can also be used for smaller projects, and can be a good way to learn about static typing.

- TypeScript is not some standalone language or superset of Javascript(true in some ways) it is the language which is wrapper around Javascript. It will be accurate to call it development tool rather than superset of Javascript which helps us in writing error-free ,maintanable,scalable and readable code.

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

# Abstract Classes 

An Abstract Class is a class that cannot be directly instantiated. It is meant to be used as a base class for other classes, providing common functionality that subclasses can inherit and override as needed. Abstract classes can contain abstract methods, which are methods declared without an implementation. Subclasses of an abstract class must provide implementations for all abstract methods declared in the base abstract class.

Abstract classes are useful for defining common behavior and contracts that subclasses must adhere to while allowing subclasses to provide specific implementations for abstract methods and properties. They promote code reusability and help enforce design contracts in object-oriented TypeScript codebases.


## Declaring an Abstract Class :

use the `abstract` keyword before the `class` keyword. Abstract classes may contain regular methods with implementations, as well as abstract methods without implementations.

```ts
abstract class Animal {
    abstract makeSound(): void; // Abstract method
    move(): void { // Regular method
        console.log("Moving...");
    }
}
```

## Extending an Abstract Class :

Subclasses of an abstract class can be created by using the `extends` keyword. Subclasses must provide implementations for all abstract methods declared in the abstract base class.

```ts
class Dog extends Animal {
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow!");
    }
}
```

## Using Abstract Classes : 

You cannot create an instance of an abstract class directly. You can only create instances of its subclasses.

```ts
let dog = new Dog();
dog.makeSound(); // Output: Woof! Woof!
dog.move(); // Output: Moving...

let cat = new Cat();
cat.makeSound(); // Output: Meow!
cat.move(); // Output: Moving...
```
## Abstract Properties :

Abstract classes can also have abstract properties, which are properties declared without an initial value. Subclasses must provide implementations for all abstract properties declared in the base abstract class.

```ts
abstract class Animal {
    abstract name: string; // Abstract property
}
```
# Generics in TypeScript

Generics in TypeScript are a way to create reusable components, functions, and classes that work with a variety of data types while maintaining type safety. They allow you to define placeholders for types that are specified when the code is used, rather than when it's written.

## Type Parameter

Generics are declared using a type parameter enclosed in angle brackets (`<` and `>`). This parameter represents a type that will be specified when the generic code is used. For example:

```ts
function identity<T>(arg: T): T {
    return arg;
}
```
Here, `T` is a type parameter representing any type that will be passed to the `identity` function.

## Type Safety

Generics ensure type safety by allowing TypeScript to infer and enforce the types used with generic components. This helps catch type-related errors at compile-time rather than runtime.

## Reusability

Generics promote code reuse by allowing you to create components that can work with multiple types. This reduces duplication and increases maintainability.

## Generic Functions
Functions that accept generic types, allowing them to operate on a wide range of data types. For example:

```ts
function idenityOne(val : number | boolean): number | boolean{
  return val;
}

function idenityTwo(val : any):any{
  return val;
}

function idenityThree<T>(val : T):T{
  return val;
}

console.log(score);
console.log(names);
console.log(idenityOne(5));
console.log(idenityTwo("Hello"));
console.log(idenityThree(5));
console.log(idenityThree("Hello"));

// There is big difference b/w any and generics , genrics logs the types of the values passed to it while any does not log the type of the value passed to it.

// Passing user defined types to generics
interface User {
  readonly dbId : number;
  name : string;
  email : string;
  userId : number;
  googleLogin? : number;
  startTrial() : string; // both ways works fine whatever you prefer
  getCoupon : (couponame : string,value : number) => string;
}

const user : User = {
  dbId : 1,
  name : 'Steve',
  email : 'example@gmail.com',
  userId : 1,
  googleLogin : 1,
  startTrial() {
    return 'trial started';
  },
  getCoupon(couponame : string, value : number) {
    return `coupon ${couponame} applied with value ${value}`;
  }
};

console.log(idenityThree<User>(user)); // in user defined types we have to specifically need to mention what type of value we are passing to the generic function.
function getSearchProducts<T>(products : T[]):T{
  const validIdx = Math.floor(Math.random() * products.length);
  return products[validIdx];
}

const products = [
  {
    name : "laptop",
    price : 1000
  },
  {
    name : "mobile",
    price : 500
  },
  {
    name : "tablet",
    price : 300
  }
];

console.log(getSearchProducts(products));

// using arrow function to do the same

const getSearchProductsArrow = <T>(products : T[]):T => {
  const validIdx = Math.floor(Math.random() * products.length);
  return products[validIdx];
}

console.log(getSearchProductsArrow(products));

// Generics with multiple types
function getFirstTwo<T, U>(arr1: T[], arr2: U[]): [T, U] {
  return [arr1[0], arr2[0]];
}

const arr1 = [10, 20, 30];
const arr2 = ["A", "B", "C"];
const result = getFirstTwo(arr1, arr2);
console.log(result);
```

## Generic Classes

Generic classes in TypeScript allow you to create classes that can work with multiple data types while maintaining type safety. They are similar to generic functions but applied to classes.

```ts
class Box<T> {
  private value: T;

  constructor(value: T) {
      this.value = value;
  }

  getValue(): T {
      return this.value;
  }

  setValue(newValue: T): void {
      this.value = newValue;
  }
}

const box = new Box<string>("Hello");
console.log(box.getValue());
const box2 = new Box<number>(100);
console.log(box2.getValue());

const box3 = new Box<User>(user);
console.log(box3.getValue());

```
## Constraints

One can also apply constraints to the type parameter in a generic class, ensuring that the type must satisfy certain conditions. This is done using the `extends `keyword. For example:

```ts
interface Lengthwise {
  length: number;
}

function getLength<T extends Lengthwise>(arg: T): number {
  return arg.length;
}

console.log(getLength("Hello"));
console.log(getLength([1, 2, 3]));
console.log(getLength({ length: 5 }));
```

# Narrowing in TypeScript


Narrowing in TypeScript refers to the process of refining the type of a variable within a certain code block or context based on specific conditions. It allows TypeScript to narrow down the possible types of a variable, providing more precise type information to the compiler and enabling better type inference.

## Type Guards

Type guards are expressions that perform runtime checks on variables to determine their type. When a type guard evaluates to true, TypeScript narrows down the type of the variable within the corresponding code block.

```ts
function isString(value: any): value is string {
    return typeof value === 'string';
}

let value: any = "hello";

if (isString(value)) {
    // Within this block, 'value' is narrowed down to type 'string'
    console.log(value.toUpperCase());
}
```

## InstanceOf

The `instanceof` operator checks if an object is an instance of a particular class. It can be used as a type guard to narrow down the type of an object within a conditional block.

```ts
class MyClass {
  constructor(public topic: string, public proglang: string) {}

  methodDefinedInMyClass() {
      console.log(`Topic: ${this.topic}, Programming Language: ${this.proglang}`)
  }
}

let obj: any = new MyClass("narrowing", "typescript");

if (obj instanceof MyClass) {
  // Within this block, 'obj' is narrowed down to type 'MyClass'
  obj.methodDefinedInMyClass();
}
```

## Type Predicates

Type predicates are user-defined functions that return a boolean value, indicating whether a variable is of a specific type. TypeScript understands these functions as type guards.

```ts
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

let num: any = 42;

if (isNumber(num)) {
    // Within this block, 'num' is narrowed down to type 'number'
    console.log(num.toFixed(2));
}

type Fish = {swim:()=>void};
type Bird = {fly:()=>void};



function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
      return pet.swim();
  }
  return pet.fly();
}

move({swim:()=>console.log('swim')});
move({fly:()=>console.log('fly')});
```

## Inference Based On Control Flow

TypeScript analyzes the control flow of your code to narrow down types. For example, after a check for null or undefined, TypeScript assumes that the variable is no longer of those types.

```ts
let maybeNumber: number | null = Math.random() > 0.5 ? 42 : null;

if (maybeNumber !== null) {
    // Within this block, 'maybeNumber' is narrowed down to type 'number'
    console.log(maybeNumber.toFixed(2));
}
```

## Discriminated Union

Discriminated unions in TypeScript are a way of combining multiple types into a single type, where each variant of the type is identified by a discriminant property. This discriminant property acts as a tag that TypeScript uses to narrow down the possible types when working with values of that type. Discriminated unions are particularly useful for modeling scenarios where a value can be one of several distinct types.

```ts
// Discriminated Union
interface Circle {
  kind: "circle"; // Discriminant property
  radius: number;
}

interface Square {
  kind: "square"; // Discriminant property
  sideLength: number;
}

interface Triangle {
  kind: "triangle"; // Discriminant property
  sideA: number;
  sideB: number;
  sideC: number;
}

type Shape = Circle | Square | Triangle;

// Function to calculate area based on the shape
function calculateArea(shape: Shape): number {
  switch (shape.kind) {
      case "circle":
          return Math.PI * shape.radius ** 2;
      case "square":
          return shape.sideLength ** 2;
      case "triangle":
          // Heron's formula to calculate area of a triangle
          const s = (shape.sideA + shape.sideB + shape.sideC) / 2;
          return Math.sqrt(s * (s - shape.sideA) * (s - shape.sideB) * (s - shape.sideC));
      default:
          // TypeScript knows that we have handled all possible shapes
          const _exhaustiveCheck: never = shape;
          return _exhaustiveCheck;
  }
}

const circle: Circle = { kind: "circle", radius: 5 };
console.log(calculateArea(circle));

const square: Square = { kind: "square", sideLength: 4 };
console.log(calculateArea(square));

const triangle: Triangle = { kind: "triangle", sideA: 3, sideB: 4, sideC: 5 };
console.log(calculateArea(triangle));
```
## Exhaustive Checks with Never

Exhaustiveness checking with never is a technique used in TypeScript to ensure that all possible cases of a discriminated union have been handled in a switch statement or conditional block. By using never, TypeScript can infer when a certain case should never occur based on the types involved, helping catch potential bugs or omissions in code.

```ts
// Define a discriminated union
type Shape = "circle" | "square" | "triangle";

// Function to handle shapes
function handleShape(shape: Shape) {
    switch (shape) {
        case "circle":
            console.log("Handling circle");
            break;
        case "square":
            console.log("Handling square");
            break;
        case "triangle":
            console.log("Handling triangle");
            break;
        default:
            // TypeScript infers that this case is unreachable
            const _exhaustiveCheck: never = shape;
            console.log(`Unexpected shape: ${_exhaustiveCheck}`);
    }
}

// Example usage
handleShape("circle");
handleShape("square");
handleShape("triangle");
handleShape("hexagon"); // TypeScript error: Argument of type '"hexagon"' is not assignable to parameter of type 'Shape'

```


**-----------------------------TypeScript : The End------------------------------**







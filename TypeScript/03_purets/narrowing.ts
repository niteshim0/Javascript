//type predicate
function isString(value: any): value is string {
  return typeof value === 'string';
}

let value: any = "hello";

if (isString(value)) {
  // Within this block, 'value' is narrowed down to type 'string'
  console.log(value.toUpperCase());
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


// typeof type guards
let value2: any = "hello";

if (typeof value2 === 'string') {
  // Within this block, 'value' is narrowed down to type 'string'
  console.log(value2.toUpperCase());
}


// instanceof type guards
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

// inference based on control flow

let maybeNumber: number | null = Math.random() > 0.5 ? 42 : null;

if (maybeNumber !== null) {
    // Within this block, 'maybeNumber' is narrowed down to type 'number'
    console.log(maybeNumber.toFixed(2));
}

// Discriminated Union and Exhaustiveness Checks with never
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


// Exhaustiveness checks with never

// Define a discriminated union

// Function to handle shapes
// function handleShape(shape: Shape) {
//     switch (shape) {
//         case "circle":
//             console.log("Handling circle");
//             break;
//         case "square":
//             console.log("Handling square");
//             break;
//         case "triangle":
//             console.log("Handling triangle");
//             break;
//         default:
//             // TypeScript infers that this case is unreachable
//             const _exhaustiveCheck: never = shape;
//             console.log(`Unexpected shape: ${_exhaustiveCheck}`);
//     }
// }


// handleShape("circle");
// handleShape("square");
// handleShape("triangle");
// handleShape("hexagon"); // TypeScript error: Argument of type '"hexagon"' is not assignable to parameter of type 'Shape'



export {}
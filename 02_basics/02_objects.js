//Object Part-1
//Two ways to create Objects 
//1 ) as literals (doesn't creates singleton objects)
//2 ) using constructors (always creates singleton object)


//creating objects as literals
// {} is used to define an object literal. Inside the curly braces, you list properties and methods separated by commas. Each property has a key (or name) followed by a colon : and then its corresponding value. 
//defining objects directly in your code without using constructors
const user = {
  name : "Nitesh",
  age  : 21,
  email : "niteshim111@gmail.com",
  location : "Gorakhpur",
  isLoggedIn : true,
  lastLoggedDay : ["Saturday","Monday","Tuesday"]
}

//Ways to access properties and methods of an object in js
//1) dot notation
//One can access properties and methods of an object using the dot (.) notation.

console.log(user.name)

//2) Square bracket notation
//propertyName is stored as string in bts so thats why we are using property_name as string
console.log(user['name']);

//3))Object Destructuring

const {name,age,email,location} = user;
console.table([name,age,email,location])

//4 Object Methods
//JavaScript provides various built-in methods for working with objects, such as Object.keys(), Object.values(), and Object.entries(), which can be used to access keys, values, and key-value pairs of an object, respectively.
const keys = Object.keys(user);
console.log(keys); 
const values = Object.values(user);
console.log(values);
const entries = Object.entries(user);
console.log(entries);

//5 For...in loop
//You can iterate over all enumerable properties of an object using a for...in loop.
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

//Special Case of using symbol as key
const mySym = Symbol("Using symbol as key");
const user2 = {
  name : "Prashant",
  age  : 22,
  [mySym] : "Symbol As key",
  email : "prashant@gmail.com",
  location : "Salempur",
  isLoggedIn : false,
  lastLoggedDay : ["Sunday","Monday","Tuesday"]
}

console.log(user2[mySym])

console.log(user.email)

user.greeting = function(){
  console.log("Hello! there")
}

console.log(user.greeting) //[Function (anonymous)]
console.log(user.greeting()) // Hello! there

/*[Function (anonymous)]
Hello! there
undefined */

user.greetingByName = function(){
  console.log(`Hello! Mr.` + this.name)
}
console.log(user.greetingByName()) //Hello! Mr.Nitesh
                                  //undefined

Object.freeze(user)//Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
user.email = "aalugobhi@gmail.com";


//Nesting in Objects //Objects Part -2
//. It's common to have nested objects when dealing with complex data structures or representing real-world entities with multiple attributes.
const person = {
  name: 'John',
  age: 30,
  address: {
      street: '123 Main St',
      city: 'Anytown',
      country: 'USA'
  },
  hobbies: ['reading', 'cooking', 'hiking']
};
console.log(person.hasOwnProperty("name"))//Determines whether an object has a property with the specified name.
console.log(person.name); 
console.log(person.address.street); 
console.log(person.hobbies[0]); 

//Merging the Objects
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022,
  specs: {
      engine: 'V6',
      transmission: 'Automatic',
      fuelType: 'Gasoline'
  },
  features: ['Bluetooth connectivity', 'Backup camera', 'Keyless entry']
};
const objectMerged = Object.assign({},person,car)//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.

console.log(objectMerged)

const objectMerged2 = {...person,...car}
console.log(objectMerged2)


//Object Part - 3
//Object Destructuring

const course = {
  title: 'JavaScript Basics',
  instructor: 'John Doe',
  level: 'Beginner',
  duration: '6 weeks',
  price: 99.99,
  category: 'Programming',
  language: 'English'
};

// Object destructuring
const { title, instructor, level, duration, price, category, language } = course;
console.log(`Course: ${title}`);
console.log(`Instructor: ${instructor}`);
console.log(`Level: ${level}`);
console.log(`Duration: ${duration}`);
console.log(`Price: $${price}`);
console.log(`Category: ${category}`);
console.log(`Language: ${language}`);

//JSON
/* 
JSON (JavaScript Object Notation) is a lightweight data interchange format inspired by JavaScript object literal syntax. It is widely used for data exchange between a server and a web client, and for storing configuration data.

Syntax: JSON syntax is a subset of JavaScript syntax, meaning it uses conventions that are familiar to programmers of the JavaScript language. It consists of key-value pairs, where keys are strings and values can be strings, numbers, arrays, objects, booleans, or null.

Example : 
{
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "hobbies": ["reading", "playing guitar"],
    "address": {
        "city": "New York",
        "country": "USA"
    }
}
Data Exchange: JSON is often used for transmitting data between a server and a web client, especially in web APIs (Application Programming Interfaces). It's a language-independent format, which means it can be easily parsed and generated by most programming languages.

Parsing and Serialization: In JavaScript, you can convert JSON strings into JavaScript objects using JSON.parse() and JavaScript objects into JSON strings using JSON.stringify().
This feature will come in handy a lot while developing full stack appliation.

 */
const jsonString = '{"name":"John","age":30}';
const jsonPerson = JSON.parse(jsonString);
console.log(jsonPerson.name); // Output: John

const personObj = { name: 'Jane', age: 25 };
const jsonObject = JSON.stringify(personObj);
console.log(jsonObject); // Output: {"name":"Jane","age":25}







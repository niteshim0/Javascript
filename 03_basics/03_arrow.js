//Part 1 :: this keyword

// In JavaScript, the ``this`` keyword refers to the current execution context. The value of `this` is determined by how a function is called, and it can behave differently depending on the context in which it is used.

//Scenario 1 :: Method Context
const user = {
  username : "Nitesh",
  price : " ₹ 999",
  welcomeMessage : function(){
    console.log(`Welcome sir! ${this.username}`)
    console.log(this) //When used inside a method of an object, `this` refers to the object itself.
  }
}
user.welcomeMessage()
user.username = "Chandan"
user.welcomeMessage()

//Scenario 2 :: Global Context
// When `this` is used outside of any function or object, it refers to the `global object`, which in web browsers is the `window object`. i.e console.log(this == window)
console.log(this) //{} empty object
//TODO :: Little Doubt is still not clear regarding this case




//Scenario 3 :: Function Context
// When used inside a function, this refers to the object that owns the function(here it is global object , if its inside the browser then that will be window object), which is determined by how the function is called.
// In an independent Node.js environment, the global object is called global. It is similar to the window object in browsers, but it provides access to global properties and functions in the Node.js runtime environment.
console.log(global)
function chai(){
  console.log(this)
  console.log(this === global)
}
chai()

const spellName = function(){
  const user = "Mithilesh"
  console.log("Casual Hi!")
  console.log(this.user) // gives undefined
  console.log(this) // refers to global object
}
spellName()

//Part 2 :: Arrow Fuctions

//Way I -- Explicit Return
const addTwo = (num1,num2) =>{
  console.log(this)//refers to global object
  return num1 + num2;
}
//Way II -- Implictin Return

const addThree = (num1,num2,num3) => console.log(this) // refers to global object

const addThre = (num1,num2,num3) => (num1 + num2 + num3) //this format is used heavily in react codes

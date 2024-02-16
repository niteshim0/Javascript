//IIFE
// IIFE stands for Immediately Invoked Function Expression. It is a JavaScript design pattern that allows you to define and execute a function all in one go. 

(function chai() {
  //named iife
  console.log("Aur beta iife kaise ho?")
})();

//NOTE :: After writing iife , always use semicolon, if you don't you wil definitely going to face error TypeError: (intermediate value)(...) is not a function
//becuase its execution context doesn't ends so how the new iife can start

(function() {
  //anonymous iife
  console.log("Aur beta anonymous iife kaise ho?")
})();

( () => console.log("Aur beta arrow wale unnamed iife kaise ho?"))();

//Where and why IIFE is used ?
// This technique is often used to create a separate scope for variables to avoid polluting the global namespace. Additionally, it's commonly used to create modules in JavaScript, as it allows you to define private variables and functions within the scope of the IIFE.
//use it for database connection
(function() {
  var localVar = 'I am a local variable';
  console.log(localVar);
})();
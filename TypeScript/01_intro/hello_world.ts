let greetings : string = "Hello World!";
console.log(greetings);

let greetings2 = "Hello World 2!";
console.log(greetings2); // the colon sytnax is two obvous in the above example, and typescript is smart enought to predict the type of the variable in these cases , so we can avoid the colon syntax in these cases(it is basically the overuse of typescript not much needed)
greetings2 = 7; // this will give an error as the type of greetings2 is string and we are trying to assign a number to it // it automatically detects the type of the variable and gives an error if we try to assign a different type to it


// Don't use any in typescript as it is not a good practice
// we will undestand it through an example
let response; // its type is any
function getResponse(){
    return "Hello World!";
}

response = getResponse(); // here it might have problems if the return type of the function changes suppose we are supposed to get string value but from the backend side we are getting some sort of boolean value , or only status code rather than the whole message, which will lead to many error and consequentially breaking down of our code.that's one need to avaoid any as much as possible since it just turns off the type checking for that variable , and the main purpose of using typescript is to have type checking in our code so we are just not using a tool for what it means to do instead we are moving towards more javascript like code which is not the purpose of using typescript

export {};// This is to avoid the error : Cannot redeclare block-scoped variable 'greetings'.ts(2451)
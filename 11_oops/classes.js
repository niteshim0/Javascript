// class User{
//   constructor(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword(){
//     return `${this.username}09r90qhgivgiuvgaiu`;
//   }
//   changeUserName(){
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const user1 = new User("alice",`123@gmail.com`,`aalu_gobhi`);
// console.log(user1.encryptPassword());
// console.log(user1.changeUserName());

//Since in reality , JS doesnt' have any classes,the class which you are seeing comes into the existence in ES6 for facilitating the developer experience of those programmers who comes from the language like C++,Java like me, it is just a syntactical sugar over the protypal behaviour of Javascript.

//Lets see what's actually happens  or earlier when there is used to be any class like now actually this is how happens now as well just not explicitly

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
  return `${this.username}btsproto`;
}

User.prototype.changeUserName = function(){
  return `${this.username.toUpperCase()}`;
}

const user2 = new User("John",`lolo@gmail.com`,`paneer_roll`);

console.log(user2.changeUserName());
console.log(user2.encryptPassword());


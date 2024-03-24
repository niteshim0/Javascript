function setUserName(username){
  this.username = username;
  console.log("called setUserName");
  console.log(this.username);
}


function createUser(username, email , score) {
  setUserName.call(this,username); // call passes our current execution context to setUserName(or another function in general terms)
  this.email = email;
  this.score = score;
}

const user1 = new createUser("john", "john@gmail.com", 10);
console.log(user1);
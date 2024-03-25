class User{
  constructor(username){
    this.username = username;
  }

  logMe(){
    console.log(`UserName is ${this.username}`);
  }

  static createId(){
    return `123`;
  } //can't be inherited can't be accessed by objects
}

class Teacher extends User{
  constructor(username,email){
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone","iphone@.com");

iphone.logMe();
console.log(iphone)
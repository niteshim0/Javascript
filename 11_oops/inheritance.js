class User{
  constructor(username){
    this.username = username;
  }

  logMe(){
    console.log(`UserName is ${this.username}`);
  }
}

class Teacher extends User{
  constructor(username,email,password){
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}`);
  }
}

const teacher1 = new Teacher('Aaalu',"gobhi@gmail.com",'oihv90whf980awgb');
teacher1.addCourse();

const user1 = new User("Gobhi");
user1.logMe();

console.log(user1 === teacher1)
console.log(teacher1 instanceof Teacher)
console.log(teacher1 instanceof User)

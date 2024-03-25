//getter and setter occurs always in pairs otherwise error

class User{
  constructor(email,password){
    this.email = email;
    this.password = password;
  }

  get email(){
    return this._email.toUpperCase();
  }
  set email(value){
    this._email = value;
  }
  get password(){
    return `${this._password}aoibvi0saboab`;
  }
  set password(value){
    this._password = value;
  }
}

const user1 = new User("mcn@soft.com","bnaobvoabop");
console.log(user1.email);
console.log(user1._email);

//What is actually happening behind the scenes since classes is only the syntactical sugar over the protypal behaviour of js


function User(email,password){
  this._email = email;
  this._password = password;

  Object.defineProperty(this,'email',{
    get: function(){
      return this._email.toUpperCase();
    },
    set : function(value){
      this._email = value;
    }
  })
  Object.defineProperty(this,'password',{
    get: function(){
      return this._password.toUpperCase();
    },
    set : function(value){
      this._password = value;
    }
  })
}

const user1 = new User("mcn@soft.com","bnaobvoabop");
user1.email = "aalu"
console.log(user1.email);
console.log(user1._email);

//Pagal log kaise karte hai

const User = {
  _email : "mcn@soft.com",
  _password : "bnaobvoabop",

  get email(){
    return this._email.toUpperCase();
  },

  set email(value){
    return this._email = value;
  }
}

const user1 = Object.create(User);

console.log(user1.email);

console.log(user1._email);
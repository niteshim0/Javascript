let myName = "John";
let myLastName = "Doe";



let superHeros = ["Batman", "Superman", "Spiderman", "Ironman","Hulk","Thor","Doga,","Shaktiman","Nagraj","Super Commando Dhruv","Captain America"];


let herosPower = {
  Batman: "Intelligence",
  Superman: "Superhuman Strength",
  Spiderman: "Agility",
  Ironman: "Genius",
  Hulk: "Strength",
  Thor: "God of Thunder",
  Doga: "Strength",
  Shaktiman: "Strength",
  Nagraj: "Strength",
  Super_Commando_Dhruv: "Strength",
  Captain_America: "Strength",

  getSpiderPower : function() {
    console.log(`Spiderman's power is ${this.Spiderman}`);
  }
};

Object.prototype.universal = function(){
  console.log("I am universal present in all objects");
}

Array.prototype.universal = function(){
  console.log("I am universal present in all arrays");
}

herosPower.universal();
herosPower.universal();

//How in Legacy code prototype is used

const user = {
  name : "John",
  email : "example@gmail.com"
}

const Teacher =  {
   makeVideo : true,
}

const TeachingSupport = {
  isAvailable : false,
}

const TASupport = {
  makeAssignment : 'JS assignment',
  fullTime : true,
  __proto__ : TeachingSupport
}

Teacher.__proto__ = user;
console.log(Teacher);

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let score : number | string;

score = 44;
score = "forty four";

type User  = {
  id : number,
  name : string,
}

type Admin = {
  username : string,
  id : number,
}

let nitesh : User | Admin = {
  id : 1,
  name : "Nitesh",
} // nitesh can be of type User or Admin

nitesh = {
  id : 2,
  username : "nitesh"
}

console.log(nitesh);

// be careful while using union types
function getDBId(id : number | string){
   if(typeof id === "number"){
     return id;
   } else{
      return id.toUpperCase();
   }
}

console.log(getDBId(1));
console.log(getDBId("nitesh"));

const data : number[]  = [1,2,3,4,5,6,7,8,9,10];
const data2 : string[]  = [ "nitesh", "sachin", "rahul", "sourav", "virat"];

// union types with array
let data3 : (number | string)[] = [1,2,3,4,5,6,7,8,9,10, "nitesh", "sachin", "rahul", "sourav", "virat"]; // most of the developers use any here , that just destroys the whole purpose of using typescript

console.log(data);
console.log(data2);
console.log(data3);


export {}

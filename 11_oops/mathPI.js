const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);
/*{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}this is the reason why PI value can't be overrided its properties of writable is false*/

const myObj = {
  name : "aalu",
  price : 18,
  isAvailable : true,

  makeTea(){
      console.log("error handling");
  }
}

console.log(myObj);

Object.defineProperty(myObj,'name',{
  writable : false,
  enumerable : false,
})

console.log(Object.getOwnPropertyDescriptor(myObj,'name'));

for(const [key,value] of Object.entries(myObj)){
  if(typeof value !== 'function'){
    console.log(`${key} : ${value}`)
  }
  
}
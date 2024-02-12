//Only discussed not - predictable one
let score = "nitesh";
console.log(Number(score)); // NaN //not a Number
console.log(typeof Number);
console.log(Boolean(score)); //gives true == non-empty string
console.log(Boolean("")); //empty-string == false

console.log(Number(false));

console.log(Number(true));

//Always make sure to make dataype same before doing any operation

console.log("1" + 2 + 2) ; //122 -- which datatype occurs first according to that conversion place //according to string
console.log(1+2+"2");//32 -- according to Number

console.log(+true);
console.log(+"");



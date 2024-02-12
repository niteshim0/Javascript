const score = 400
console.log(score)//400

const points = new Number(100.790790709)
console.log(points)//[Number: 100]

//one thing interesting in Number is that whenever you converts them it doesn't give answer in Number it gives in string //NOTE //TODO

console.log(points.toExponential(1)) //Returns a string containing a number represented in exponential notation.

console.log(points.toFixed(4))//Returns a string representing a number in fixed-point notation. //ye decimal ke baad wale no par kaam karta hai

console.log(points.toPrecision(5)) //Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
//ye starting se count karta hai

console.log(points.toString())//Returns a string representation of an object.
console.log(points.valueOf()) //Returns the primitive value of the specified object.

console.log(Number.MAX_VALUE)
console.log(NaN)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.EPSILON)

//thats all about no for now // more if found will be discussed later
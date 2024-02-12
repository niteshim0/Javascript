console.log(Math) //An intrinsic object that provides basic mathematics functionality and constants.

console.log(Math.PI)
console.log(Math.LN10)
console.log(Math.LN2)
console.log(Math.LOG10E)
console.log(Math.LOG2E)
console.log(Math.SQRT2)
console.log(Math.ceil(4.2))//Returns the smallest integer greater than or equal to its numeric argument.
console.log(Math.floor(4.8))//Returns the greatest integer less than or equal to its numeric argument
console.log(Math.round(47328979.979502))//Returns a supplied numeric expression rounded to the nearest integer
console.log(Math.exp(100))//Returns e (the base of natural logarithms) raised to a power.
console.log(Math.log10(100))//Returns the base 10 logarithm of a number.
console.log(Math.pow(4,8)) //Returns the value of a base expression taken to a specified power.
console.log(Math.trunc(5690709.8097209))//Returns the integral part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x.
console.log(Math.max(7,907,79,9))
console.log(Math.min(7,907,79,9))
console.log(Math.random())//Returns a pseudorandom number between 0 and 1.
//random will be the most important one
//Random Number Generator Formula b/w a Range
let min = 10
let max = 20

const randomGenerator = (min,max) => {
  let x = Math.floor((Math.random()*(max-min+1)) + min)
  return x
}

console.log(randomGenerator(10,20))
console.log(randomGenerator(10,20))
console.log(randomGenerator(10,20))
console.log(randomGenerator(10,20))
console.log(randomGenerator(10,20))
console.log(randomGenerator(10,20))
console.log(randomGenerator(10,20))
console.log(randomGenerator(10,20))
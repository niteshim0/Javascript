const arr = [1,2,3,4];
const arr2  = new Array(4).fill(0)

const arr3 = new Array(1,2,3,4)
console.table([arr,arr2,arr3])

//js arrays are not of fixed size as well as can store mix type of datatypes be it primitve or non-primitive
//shallow copy ) references point to the original copy
//deep copy ) one more copy is created

//Inserting and Deleting from the back side
arr.push(5)//Appends new elements to the end of an array, and returns the new length of the array.
arr.push(7)
arr.push(9)
console.log(arr)
arr.pop() //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr)

//Inserting and deleting from the front side
//can come handy using stack and queue type dsa ques
arr.unshift(9) //Inserts new elements at the start of an array, and returns the new length of the array.
console.log(arr)
arr.shift()//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr)
console.log(arr.includes(9))//Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(arr.indexOf(9)) //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

const newArrString = arr.join("aalu gobhi");//Adds all the elements of an array into a string, separated by the specified separator string.

console.log(newArrString)

console.log(typeof newArrString)

//Can be a good interview question
//Difference b/w slice(ek jood ka copy bna ke deta hai) and splice(kaat deta hai original array ko)
console.log("original Array",arr)
const slicedArray = arr.slice(1,3)//Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
console.log("slicedArray Array",slicedArray)
console.log("original Array after slicing",arr)
const splicedArray = arr.splice(1,3)
console.log("splicedArray Array",splicedArray)//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log("original Array after splicing",arr)


//Merging Two Arrays

const DC = ["SuperMan","Batman","Joker"];

const Marvel = ["IronMan","Hulk","SpiderMan"];

// DC.push(Marvel)

// console.log(DC) //Haa not expected as you wanted bcz JS array treates each datatype as the same

//whats the way
const merger = DC.concat(Marvel) //Combines two or more arrays. This method returns a new array without modifying any existing arrays
console.log(merger)
//better way to spread it using spread operator

const merger2 = [...DC,...Marvel]
console.log(merger2)

const unusableArray = [1,2,3,[4,5,6],[7,8,[9]]]

const usableArray = unusableArray.flat(Infinity)//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(usableArray)

console.log(Array.isArray("Nitesh"))
console.log(Array.from("Nitesh"))//Creates an array from an iterable object.
console.log(Array.from({name : "Nitesh"})) //unexpected result //TODO
//need to specify whether you want according to key or value

let s1 = 100;
let s2 = 200;
let s3 = 100;

console.log(Array.of(s1,s2,s3))//Returns a new array from a set of elements.

const name = `Niteshe`;//first way of declaring string;
console.log(name);
 //second way
 //String interpolation
 //variable can be put in the middle of string
 const newName = new String(`Nitesh`);
//both these way are bts doing the same thing first making the object and then assigning it
console.log(newName.charAt(0)) //gives char character at that idx
console.log(newName.charCodeAt(0)) // gives ASCII value of char at that idx
console.log(newName.codePointAt(0))// gives ASCII value of char at that idx
console.log(newName)

console.log(newName.concat(`  Kushwaha`)) //append this string to original string
console.log(newName.endsWith(`aa`)) //finds whether the string ends with this string or char or not
console.log(newName.includes(`sh`))//finds whether the string contains this substring
console.log(newName.indexOf(`ites`)) //gives the index or char or string
console.log(newName.lastIndexOf(`e`)) //gives the lastIdx of char or string
console.log(newName.length) //gives the length property
console.log(newName.localeCompare(`Niesh`)) //Determines whether two strings are equivalent in the current locale.
console.log(newName.match(`N`))
console.log(newName.repeat(5)) //Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
console.log(newName.replace(`itesh`,`ikhil`)) //replace the selected value with the target one
console.log(newName.search('it'))//Finds the first substring match in a regular expression search.
console.log(newName.slice(0,4))//The substring includes the characters up to, but not including, the character indicated by end. If this value is not specified, the substring continues to the end of stringObj.//Returns a section of a string
console.log(newName.split(` `)) //Split a string into substrings using the specified separator and return them as an array.
console.log(newName.substring(0))//Returns the substring at the specified location within a String object.//same working as slice
console.log(newName.valueOf())//returns sthe primitive value of the specified object
console.log(newName.toLowerCase()) //converts into the lowercase

//thats all about the string in js // more thing will be added as they come






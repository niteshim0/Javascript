const date = new Date();
console.log(Date)//[Function: Date]
console.log(date);//2024-02-09T14:31:55.024Z

//handling Data is major pain in ECMAScript a new Object Temporal has been proposed to get rid of this
//may be in future this file will be of no use but who have seen tommorow so we need to learn it
//month starts from 0 not 1
console.log(date.toDateString())//Returns a date as a string value.
console.log(date.toISOString())//Returns a date as a string value in ISO format.
console.log(date.toString())//Returns a string representation of a date. The format of the string depends on the locale.
console.log(date.toLocaleDateString()) //Converts a date to a string by using the current or specified locale.
console.log(date.toLocaleString())//Converts a date and time to a string by using the current or specified locale
console.log(date.getMonth())//Gets the month, using local time.
console.log(date.getSeconds())
console.log(date.getDate())

console.log(Date.now()) //Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).

//converting this into seconds

console.log(Math.floor(Date.now()/1000))

date.toLocaleString('default',{
  weekday : "long"
})
console.log(date)

//in future this pain will end till date hold on to your horses

// tuples in typescript

const user : [number, string,boolean] = [1, 'Steve',true];

console.log(user);

let rgb : [number, number, number] = [255, 0, 0];

console.log(rgb);

type User = [number, string, boolean];
const newUser : User = [1, 'Steve', true];
console.log(newUser);

// something wrong with tuples in typescript

newUser[2] = false; // no error we can modify the orginal tuple
console.log(newUser);
newUser.push('admin'); // no error we can push the value in tuple or matter of fact most of the array methods are allowed
console.log(newUser);

export {}
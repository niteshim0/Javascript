// tuples in typescript
var user = [1, 'Steve', true];
console.log(user);
var rgb = [255, 0, 0];
console.log(rgb);
var newUser = [1, 'Steve', true];
console.log(newUser);
// something wrong with tuples in typescript
newUser[2] = false; // no error we can modify the orginal tuple
console.log(newUser);
newUser.push('admin'); // no error we can push the value in tuple or matter of fact most of the array methods are allowed
console.log(newUser);

// https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array
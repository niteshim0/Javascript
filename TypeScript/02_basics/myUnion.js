"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score;
score = 44;
score = "forty four";
var nitesh = {
    id: 1,
    name: "Nitesh",
}; // nitesh can be of type User or Admin
nitesh = {
    id: 2,
    username: "nitesh"
};
console.log(nitesh);
// be careful while using union types
function getDBId(id) {
    if (typeof id === "number") {
        return id;
    }
    else {
        return id.toUpperCase();
    }
}
console.log(getDBId(1));
console.log(getDBId("nitesh"));
var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var data2 = ["nitesh", "sachin", "rahul", "sourav", "virat"];
// union types with array
var data3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "nitesh", "sachin", "rahul", "sourav", "virat"]; // most of the developers use any here , that just destroys the whole purpose of using typescript
console.log(data);
console.log(data2);
console.log(data3);

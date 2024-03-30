"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    dbId: 1,
    name: 'Steve',
    email: 'n@n.com',
    userId: 1,
    googleLogin: 1,
    startTrial: function () {
        return 'trial started';
    },
    getCoupon: function (couponame, value) {
        return "coupon ".concat(couponame, " applied with value ").concat(value);
    }
};
console.log(user);
var box = {
    width: 5,
    height: 6,
    length: 8,
};
console.log(box);
var dog = {
    species: "Animal",
    breed: "Pomerian"
};
console.log(dog);

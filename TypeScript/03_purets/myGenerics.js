var score = [1, 2, 4];
var names = ["Rahul", "Sunil", "Maya", "Roshesh"];
function idenityOne(val) {
    return val;
}
function idenityTwo(val) {
    return val;
}
function idenityThree(val) {
    return val;
}
console.log(score);
console.log(names);
console.log(idenityOne(5));
console.log(idenityTwo("Hello"));
console.log(idenityThree(5));
console.log(idenityThree("Hello"));
var user = {
    dbId: 1,
    name: 'Steve',
    email: 'example@gmail.com',
    userId: 1,
    googleLogin: 1,
    startTrial: function () {
        return 'trial started';
    },
    getCoupon: function (couponame, value) {
        return "coupon ".concat(couponame, " applied with value ").concat(value);
    }
};
console.log(idenityThree(user)); // in user defined types we have to specifically need to mention what type of value we are passing to the generic function.
function getSearchProducts(products) {
    var validIdx = Math.floor(Math.random() * products.length);
    return products[validIdx];
}
var products = [
    {
        name: "laptop",
        price: 1000
    },
    {
        name: "mobile",
        price: 500
    },
    {
        name: "tablet",
        price: 300
    }
];
console.log(getSearchProducts(products));
// using arrow function to do the same
var getSearchProductsArrow = function (products) {
    var validIdx = Math.floor(Math.random() * products.length);
    return products[validIdx];
};
console.log(getSearchProductsArrow(products));
var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    Box.prototype.setValue = function (newValue) {
        this.value = newValue;
    };
    return Box;
}());
var box = new Box("Hello");
console.log(box.getValue());
var box2 = new Box(100);
console.log(box2.getValue());
var box3 = new Box(user);
console.log(box3.getValue());
// Generics with multiple types
function getFirstTwo(arr1, arr2) {
    return [arr1[0], arr2[0]];
}
var arr1 = [10, 20, 30];
var arr2 = ["A", "B", "C"];
var result = getFirstTwo(arr1, arr2);
console.log(result);
function getLength(arg) {
    return arg.length;
}
console.log(getLength("Hello"));
console.log(getLength([1, 2, 3]));
console.log(getLength({ length: 5 }));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyClass = /** @class */ (function () {
    function MyClass() {
        this._myProperty = 0;
    }
    Object.defineProperty(MyClass.prototype, "myProperty", {
        get: function () {
            return this._myProperty;
        },
        set: function (value) {
            if (value >= 0) {
                this._myProperty = value;
            }
            else {
                console.log("Value must be non-negative.");
            }
        },
        enumerable: false,
        configurable: true
    });
    return MyClass;
}());
var obj = new MyClass();
obj.myProperty = 10;
console.log(obj.myProperty); // Output: 10
obj.myProperty = -5; // Output: Value must be non-negative.
console.log(obj.myProperty); // Output: 10 (value remains unchanged)

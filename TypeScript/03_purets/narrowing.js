//type predicate
function isString(value) {
    return typeof value === 'string';
}
var value = "hello";
if (isString(value)) {
    // Within this block, 'value' is narrowed down to type 'string'
    console.log(value.toUpperCase());
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function move(pet) {
    if (isFish(pet)) {
        return pet.swim();
    }
    return pet.fly();
}
move({ swim: function () { return console.log('swim'); } });
move({ fly: function () { return console.log('fly'); } });
// typeof type guards
var value2 = "hello";
if (typeof value2 === 'string') {
    // Within this block, 'value' is narrowed down to type 'string'
    console.log(value2.toUpperCase());
}
// instanceof type guards
var MyClass = /** @class */ (function () {
    function MyClass(topic, proglang) {
        this.topic = topic;
        this.proglang = proglang;
    }
    MyClass.prototype.methodDefinedInMyClass = function () {
        console.log("Topic: ".concat(this.topic, ", Programming Language: ").concat(this.proglang));
    };
    return MyClass;
}());
var obj = new MyClass("narrowing", "typescript");
if (obj instanceof MyClass) {
    // Within this block, 'obj' is narrowed down to type 'MyClass'
    obj.methodDefinedInMyClass();
}
// inference based on control flow
var maybeNumber = Math.random() > 0.5 ? 42 : null;
if (maybeNumber !== null) {
    // Within this block, 'maybeNumber' is narrowed down to type 'number'
    console.log(maybeNumber.toFixed(2));
}

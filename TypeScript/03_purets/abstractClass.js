var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    TakePhoto.prototype.getCameraMode = function () {
        return this.cameraMode;
    }; // not allowed in interface
    return TakePhoto;
}());
// const photo = new TakePhoto('Portrait','B&W'); // Error: Cannot create an instance of an abstract class.
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera(cameraMode, filter, burst) {
        var _this = _super.call(this, cameraMode, filter) || this;
        _this.burst = burst;
        console.log("Camera mode: ".concat(_this.cameraMode, ", Filter: ").concat(_this.filter));
        return _this;
    }
    Camera.prototype.takePhoto = function () {
        console.log("Photo taken with burst mode: ".concat(this.burst));
    };
    return Camera;
}(TakePhoto));
var camera = new Camera('Portrait', 'B&W', 5);
console.log(camera.getCameraMode());
console.log(camera);

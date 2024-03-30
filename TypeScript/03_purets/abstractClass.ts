abstract class TakePhoto{
  constructor(public cameraMode : string,public filter : string){

  }
  abstract takePhoto() : void;
  getCameraMode(): string{
    return this.cameraMode;
  } // not allowed in interface
}

// const photo = new TakePhoto('Portrait','B&W'); // Error: Cannot create an instance of an abstract class.
class Camera extends TakePhoto{
  constructor(cameraMode : string,filter : string,public burst : number){
    super(cameraMode,filter);
    console.log(`Camera mode: ${this.cameraMode}, Filter: ${this.filter}`);
  }
  takePhoto(): void {
    console.log(`Photo taken with burst mode: ${this.burst}`);
  }
}

let camera = new Camera('Portrait','B&W',5);
console.log(camera.getCameraMode());
console.log(camera);

export {}
import {Component} from "@angular/core";
import {Camera, CameraOptions} from "@ionic-native/camera";

@Component({
  templateUrl: 'add-product-photo.html'
})
export class AddProductPhoto {
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  constructor(private camera: Camera) { }

  addPhoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      alert(imageData)
    }, (err) => {
      console.log("Error while taking a photo..." + err);
    });
  }
}

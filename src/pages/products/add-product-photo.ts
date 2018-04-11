import {Component} from "@angular/core";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {ImageService} from "../../services/ImageService";

@Component({
  templateUrl: 'add-product-photo.html'
})
export class AddProductPhoto {
  options: CameraOptions = {
    quality: 80,
    targetWidth: 640,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  constructor(private camera: Camera, private imgService: ImageService) {
  }

  addPhoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = imageData;
      this.imgService.upload(base64Image);
    }, (err) => {
      console.log("Error while taking a photo..." + err);
    });
  }
}

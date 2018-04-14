import {Component} from "@angular/core";
import {Camera, CameraOptions} from "@ionic-native/camera";
import {ImageService} from "../../services/ImageService";
import {Product} from "../../model/Product";
import {ProductService} from "../../services/ProductService";
import {RawData} from "../../model/RawData";

@Component({
  templateUrl: 'add-product-photo.html'
})
export class AddProductPhoto {
  images: Array<RawData>;
  product: Product;
  options: CameraOptions = {
    quality: 80,
    targetWidth: 640,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  constructor(private camera: Camera,
              private imgService: ImageService,
              private productService: ProductService) {
    if (this.product == null) {
      this.product = new Product();
    }
    if (this.images == null) {
      this.images = new Array<RawData>();
    }
  }

  addPhoto() {
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = imageData;
      this.imgService.upload(base64Image).subscribe((id:number) => {
        let image: RawData = new RawData();
        image.id = id;
        image.data = imageData;

        this.images.push(image);
      })
    }, (err) => {
      console.log("Error while taking a photo..." + err);
    });
  }

  onSave(product: Product) {
    let imageIds:Array<number> = new Array<number>();
    this.images.forEach(img => {
      imageIds.push(img.id);
    });
    product.images = imageIds;
    product.viewName = product.title;
    product.slug = product.title;
    console.log(product);
    this.productService.create(product).subscribe();
  }
}

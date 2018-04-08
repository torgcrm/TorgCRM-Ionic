import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {AddProductPhoto} from "./add-product-photo";

@Component({
  templateUrl: 'product-function.html'
})
export class ProductFunctions {

  constructor(private nav: NavController) {
  }

  addProductPhoto() {
    this.nav.push(AddProductPhoto)
  }
}

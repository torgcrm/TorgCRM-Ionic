import {Component, OnInit} from "@angular/core";
import {Product} from "../../model/Product";
import {NavController, NavParams} from "ionic-angular";

@Component({
  templateUrl: 'product-search.html',
  selector: 'product-search'
})
export class ProductSearch implements OnInit {

  productSearchModel = [];
  test:number = 0;

  constructor(private navCtl:NavController,
              private navParams:NavParams) {
  }

  ngOnInit(): void {
    this.productSearchModel = [];

    let model1 = new Product();
    model1.id = 1;
    model1.productId = 1;
    model1.quantity = 0;
    model1.title = "ProductPage 1";

    let model2 = new Product();
    model1.id = 2;
    model2.productId = 2;
    model2.quantity = 0;
    model2.title = "ProductPage 2";

    this.productSearchModel.push(model1);
    this.productSearchModel.push(model2);

    localStorage.setItem('productSearchModel', JSON.stringify(this.productSearchModel));
  }

  quantity(idx: number) {
    let obj = JSON.parse(localStorage.getItem('productSearchModel'));
    return obj[idx].quantity;
  }

  onDecrement(idx: number) {
    let obj = JSON.parse(localStorage.getItem('productSearchModel'));
    obj[idx].quantity = obj[idx].quantity-1;

    localStorage.setItem('productSearchModel', JSON.stringify(obj));
  }

  onIncrement(idx: number) {
    let obj = JSON.parse(localStorage.getItem('productSearchModel'));
    obj[idx].quantity = obj[idx].quantity+1;

    localStorage.setItem('productSearchModel', JSON.stringify(obj));
  }

  onFinishAddingProducts() {
    this.navParams.get('callback').emit('test');
    this.navCtl.pop();
  }
}

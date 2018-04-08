import {Component, EventEmitter, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {NavController, NavParams} from "ionic-angular";
import {OrdersPage} from "./orders";
import {CallNumber} from "@ionic-native/call-number";
import {Order} from "../../model/Order";
import {ProductSearch} from "../products/product-search";
import {OrderService} from "../../services/OrderService";

@Component({
  selector: 'page-order-edit',
  templateUrl: 'order-edit.html'
})
export class OrderEdit {

  order: Order;
  isNew: boolean = false;

  constructor(private navParams?:NavParams,
              private call?:CallNumber,
              private http?: HttpClient,
              private nav?: NavController,
              private service?: OrderService) {
    this.order = this.navParams.get('order');
    this.isNew = this.navParams.get('isNew');
    if (this.isNew) {
      this.order = new Order();
    }
  }

  onDelete() {
    this.service.delete(this.order.id).subscribe(res => {
      this.nav.setRoot(OrdersPage)
    });
  }

  onCall() {
    this.call.callNumber(this.order.phone, true);
  }

  onSave(orderForm:any) {
    this.order.phone = orderForm.phone;
    this.order.comment = orderForm.comment;
    this.order.id = orderForm.id;
    this.order.customer.firstName = orderForm.clientName;

    this.service.create(this.order).subscribe();
  }

  onOpenProduct(product) {}

  onFinishAddingProducts() {
    let productSearchModel = JSON.parse(localStorage.getItem('productSearchModel'));
    let products = [];
    productSearchModel.forEach(function(val) {
      if (val.quantity > 0) {
        products.push(val)
      }
    });
    this.order.products = products;
  }

  onAddNewProduct() {
    const evt = new EventEmitter<any>();
    evt.subscribe(evt => this.onFinishAddingProducts());
    this.nav.push(ProductSearch,{'callback': evt});
  }
}

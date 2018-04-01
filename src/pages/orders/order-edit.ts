import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {NavController, NavParams} from "ionic-angular";
import {OrdersPage} from "./orders";
import {CallNumber} from "@ionic-native/call-number";
import {Order} from "../../model/Order";
import {ProductSearch} from "../products/product-search";

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
              private nav?: NavController) {
    this.order = this.navParams.get('order');
    this.isNew = this.navParams.get('isNew');
    if (this.isNew) {
      this.order = new Order();
    }
  }

  onDelete() {
    this.http.delete(localStorage.getItem('url') + '/orders/delete/' + this.order.id).subscribe(res => {
      this.nav.setRoot(OrdersPage)
    })
  }

  onCall() {
    this.call.callNumber(this.order.phone, true);
  }

  onSave() {
    this.http.post(localStorage.getItem('url') + '/orders/new', this.order).subscribe()
  }

  onOpenProduct(product) {}

  onAddNewProduct() {
    this.nav.push(ProductSearch);
  }
}

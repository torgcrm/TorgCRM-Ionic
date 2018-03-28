import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {NavController, NavParams} from "ionic-angular";
import {OrdersPage} from "./orders";
import {CallNumber} from "@ionic-native/call-number";

@Component({
  selector: 'page-order-edit',
  templateUrl: 'order-edit.html'
})
export class OrderEdit {

  order: any;
  isNew: boolean = false;

  constructor(private navParams?:NavParams,
              private call?:CallNumber,
              private http?: HttpClient,
              private nav?: NavController) {
    this.order = this.navParams.get('order');
    this.isNew = this.navParams.get('isNew');
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
}

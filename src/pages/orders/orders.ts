import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import { CallNumber } from '@ionic-native/call-number';
import {OrderEdit} from "./order-edit";

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage implements OnInit {
  private orders: any;

  constructor(public navCtrl: NavController,
              private callNumber: CallNumber,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(localStorage.getItem('url') + '/orders')
      .subscribe(res => this.orders = res)
  }

  onDelete(order) {
  }

  onEdit(order) {
    this.navCtrl.push(OrderEdit)
  }

  onCall(order) {
    this.callNumber.callNumber(order.phone, true)
  }
}

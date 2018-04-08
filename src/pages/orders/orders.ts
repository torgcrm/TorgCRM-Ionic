import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CallNumber} from '@ionic-native/call-number';
import {OrderEdit} from "./order-edit";
import {Order} from "../../model/Order";
import {OrderService} from '../../services/OrderService'

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage implements OnInit {
  private orders: Array<Order>;

  constructor(private navCtrl: NavController,
              private callNumber: CallNumber,
              private service: OrderService) {
  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe((res: Array<Order>) => {
        console.log(res);
        this.orders = res;
      })
  }

  onEdit(order) {
    this.navCtrl.push(OrderEdit, {'order': order});
  }

  onCall(order) {
    this.callNumber.callNumber(order.phone, true)
  }
}

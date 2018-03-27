import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {NavController} from "ionic-angular";
import {OrdersPage} from "./orders";
import {CallNumber} from "@ionic-native/call-number";

@Component({
  selector: 'page-order-edit',
  templateUrl: 'order-edit.html'
})
export class OrderEdit implements OnInit {

  private order;

  ngOnInit(): void {
    this.order = JSON.parse(localStorage.getItem('selectedOrder'));
  }

  constructor(private call:CallNumber,
              private http: HttpClient,
              private nav: NavController) {
  }

  onDelete() {
    this.http.delete(localStorage.getItem('url') + '/orders/delete/' + this.order.id).subscribe(res => {
      this.nav.setRoot(OrdersPage)
    })
  }

  onCall() {
    this.call.callNumber(this.order.phone, true);
  }

  onOpenProduct() {
  }
}

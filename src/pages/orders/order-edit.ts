import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {NavController} from "ionic-angular";
import {OrdersPage} from "./orders";

@Component({
  selector: 'page-order-edit',
  templateUrl: 'order-edit.html'
})
export class OrderEdit {

  constructor(private http: HttpClient,
              private nav: NavController) {}

  onDelete() {
    let order = localStorage.getItem('selectedOrder')
    this.http.delete(localStorage.getItem('url') + '/orders/delete/' + order).subscribe(res => {
      this.nav.setRoot(OrdersPage)
    })
  }
}

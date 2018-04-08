import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {CustomersTabPage} from "../pages/customers/customers-tab";
import {OrdersTabsPage} from "../pages/orders/orders-tabs";
import {ProductFunctions} from "../pages/products/product-functions";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = OrdersTabsPage;
  isAndroid: boolean = false;
  pages;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    if (!platform.is('ios')) {
      this.isAndroid = true;
    }

    this.pages = [
      {title: 'Заказы', icon: 'basket', component: OrdersTabsPage},
      {title: 'Клиенты', icon: 'contacts', component: CustomersTabPage},
      {title: 'Товары', icon: 'cube', component: ProductFunctions},
    ]
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}


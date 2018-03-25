import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { OrdersPage } from '../pages/orders/orders';
import {OrderTabs} from "../pages/orders/order-tabs";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = OrderTabs;
  isAndroid: boolean = false;
  pages;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    if (!platform.is('ios')) {
      this.isAndroid = true;
    }

    this.pages = [
      {title: 'Заказы', icon: 'basket', component: OrderTabs},
      {title: 'Клиенты', icon: 'contacts', component: OrderTabs},
      {title: 'Товары', icon: 'cube', component: OrderTabs},
    ]
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}


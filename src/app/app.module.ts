import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {OrdersPage} from '../pages/orders/orders';
import {SideMenu} from '../parts/sidemenu/sidemenu';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from "../interceptors/JwtInterceptor";
import {LoginPage} from "../pages/login/login";
import {CallNumber} from "@ionic-native/call-number";
import {OrderEdit} from "../pages/orders/order-edit";
import {ProductSearch} from "../pages/products/product-search";
import {CRMRange} from "../components/CRMRange";
import {OrderService} from "../services/OrderService";
import {CustomersTabPage} from "../pages/customers/customers-tab";
import {OrdersTabsPage} from "../pages/orders/orders-tabs";
import {CustomersPage} from "../pages/customers/customers";
import {CustomerService} from "../services/CustomerService";
import {ProductFunctions} from "../pages/products/product-functions";
import {AddProductPhoto} from "../pages/products/add-product-photo";
import {Camera} from "@ionic-native/camera";

@NgModule({
  declarations: [
    MyApp,
    OrdersPage,
    OrdersTabsPage,
    CustomersTabPage,
    CustomersPage,
    OrderEdit,
    ProductSearch,
    ProductFunctions,
    AddProductPhoto,
    SideMenu,
    LoginPage,
    CRMRange,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrdersPage,
    OrdersTabsPage,
    CustomersTabPage,
    CustomersPage,
    OrderEdit,
    ProductFunctions,
    AddProductPhoto,
    ProductSearch,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    CallNumber,
    Camera,
    OrderService,
    CustomerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ]
})
export class AppModule {
}

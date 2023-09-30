import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FirstPageBodyComponent } from './components/first-page-body/first-page-body.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { LoggedInTopBarComponent } from './components/logged-in-top-bar/logged-in-top-bar.component';
import { ChangingButtonComponent } from './components/changing-button/changing-button.component';
import { GetDataComponent } from './components/get-data/get-data.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import {HttpClientModule} from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { ShowAvailableItemsComponent } from './components/show-available-items/show-available-items.component';
import { MovingItemsComponent } from './components/moving-items/moving-items.component';
import { CustomerMasterComponent } from './components/customer-master/customer-master.component';
import { SupplierMasterComponent } from './components/supplier-master/supplier-master.component';
import { ProductMasterComponent } from './components/product-master/product-master.component';
import { ProductCompanyMasterComponent } from './components/product-company-master/product-company-master.component';
import { PopupCreateNewComponent } from './components/popup-create-new/popup-create-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TopBarComponent,
    FirstPageBodyComponent,
    BottomBarComponent,
    LoggedInComponent,
    SideNavBarComponent,
    LoggedInTopBarComponent,
    ChangingButtonComponent,
    GetDataComponent,
    UserTableComponent,
    DashboardComponent,
    SearchItemComponent,
    ShowAvailableItemsComponent,
    MovingItemsComponent,
    CustomerMasterComponent,
    SupplierMasterComponent,
    ProductMasterComponent,
    ProductCompanyMasterComponent,
    PopupCreateNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

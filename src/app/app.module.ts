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
import { SearchItemDashboardComponent } from './components/search-item-dashboard/search-item-dashboard.component';
import { AvailableItemsDashboardComponent } from './components/available-items-dashboard/available-items-dashboard.component';
import { MovingItemsDashboardComponent } from './components/moving-items-dashboard/moving-items-dashboard.component';
import { SearchItemComponent } from './components/search-item/search-item.component';

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
    SearchItemDashboardComponent,
    AvailableItemsDashboardComponent,
    MovingItemsDashboardComponent,
    SearchItemComponent
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

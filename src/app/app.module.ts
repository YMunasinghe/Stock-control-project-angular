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
    LoggedInTopBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

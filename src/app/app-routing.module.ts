import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {TopBarComponent} from "./components/top-bar/top-bar.component";
import {SideNavBarComponent} from "./components/side-nav-bar/side-nav-bar.component";
import {LoggedInTopBarComponent} from "./components/logged-in-top-bar/logged-in-top-bar.component";
import {LoggedInComponent} from "./components/logged-in/logged-in.component";
import {ChangingButtonComponent} from "./components/changing-button/changing-button.component";
import {GetDataComponent} from "./components/get-data/get-data.component";
import {SearchItemComponent} from "./components/search-item/search-item.component";

const routes: Routes = [
  { path: '', component: TopBarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sideNavBar', component: SideNavBarComponent },
  { path: 'loggedInTopBar', component: LoggedInTopBarComponent },
  { path: 'loggedIn', component: LoggedInComponent },
  { path: 'changingButton', component: ChangingButtonComponent },
  { path: 'getData', component: GetDataComponent },
  { path: 'searchItem', component: SearchItemComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

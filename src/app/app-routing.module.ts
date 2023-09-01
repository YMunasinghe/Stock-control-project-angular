import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {TopBarComponent} from "./components/top-bar/top-bar.component";
import {SideNavBarComponent} from "./components/side-nav-bar/side-nav-bar.component";
import {LoggedInTopBarComponent} from "./components/logged-in-top-bar/logged-in-top-bar.component";
import {LoggedInComponent} from "./components/logged-in/logged-in.component";

const routes: Routes = [
  { path: '', component: TopBarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sideNavBar', component: SideNavBarComponent },
  { path: 'loggedInTopBar', component: LoggedInTopBarComponent },
  { path: 'loggedIn', component: LoggedInComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

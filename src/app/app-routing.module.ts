import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {TopBarComponent} from "./components/top-bar/top-bar.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: TopBarComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

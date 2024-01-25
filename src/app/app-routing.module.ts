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
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {CustomerMasterComponent} from "./components/customer-master/customer-master.component";
import {PopupCreateNewComponent} from "./components/popup-create-new/popup-create-new.component";
import {SupplierMasterComponent} from "./components/supplier-master/supplier-master.component";
import {ProductCategoryComponent} from "./components/product-category/product-category.component";
import {UserTableComponent} from "./components/user-table/user-table.component";
import {ProductMasterComponent} from "./components/product-master/product-master.component";
import {AdminLayoutComponent} from "./layout/admin-layout/admin-layout.component";

const routes: Routes = [
    // {
    //   path: '',
    //   redirectTo: 'login',
    //   pathMatch: 'full'
    // },
    // {
    //   path: 'login',
    //   component: LoginComponent
    // },
  {
    path: 'admin',
    component: SideNavBarComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'masterCustomer', component: CustomerMasterComponent },
      { path: 'masterSupplier', component: SupplierMasterComponent },
      { path: 'productCategory', component: ProductCategoryComponent },
      { path: 'product', component: ProductMasterComponent }
    ]
  }
  // { path: '', component: TopBarComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'sideNavBar', component: SideNavBarComponent },
  // { path: 'loggedInTopBar', component: LoggedInTopBarComponent },
  // { path: 'loggedIn', component: LoggedInComponent },
  // { path: 'changingButton', component: ChangingButtonComponent },
  // { path: 'getData', component: GetDataComponent },
  // { path: 'searchItem', component: SearchItemComponent },
  // { path: 'dashboard', component: DashboardComponent },


  // { path: 'userTable', component: UserTableComponent },
  // { path: 'masterProduct', component: ProductMasterComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

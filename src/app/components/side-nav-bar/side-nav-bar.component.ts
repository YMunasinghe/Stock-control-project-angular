import { Component } from '@angular/core';
import {faAngleDown, faAngleUp, faUserPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent {
  // faDown= "fa fa-caret-down";
  isMasterCollapsed: boolean = true;
  isTransactionCollapsed: boolean = true;
  isSalesCollapsed: boolean = true;

  toggleMasterCollapse(): void {
    this.isMasterCollapsed = !this.isMasterCollapsed;
  }
  toggleTransactionCollapse(): void {
    this.isTransactionCollapsed = !this.isTransactionCollapsed;
  }
  toggleSalesCollapse(): void {
    this.isSalesCollapsed = !this.isSalesCollapsed;
  }

  protected readonly faAngleDown = faAngleDown;
  protected readonly faAngleUp = faAngleUp;

}

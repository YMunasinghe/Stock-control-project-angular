import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent {
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
}

import { Component } from '@angular/core';
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent {

<<<<<<< Updated upstream
=======
  // faDown= "fa fa-caret-down";

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
>>>>>>> Stashed changes
}

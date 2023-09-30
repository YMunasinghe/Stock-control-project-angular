import {Component, EventEmitter, Output} from '@angular/core';
import {UserService} from "../../Service/user.service";
import {CustomerService} from "../../Service/customer.service";
// import { PopupCreateNewComponent } from
// import { PopupCreateNewComponent } from './popup-create-new.component';
// import { PopupCreateNewComponent } from './components/popup-create-new/popup-create-new.component';
// import { PopupService } from '../popup.service'; // Adjust the import path
declare var $: any;

@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.css'],
})
export class CustomerMasterComponent {

  customers: any = [];

  constructor(private customerService : CustomerService) {}

  // Name for Create new popup modal
  mainButtonText: string = 'Create Customer'; // Define and initialize the variable

  ngOnInit() {
    this.customerService.getCustomers().subscribe((customer)=>{
      console.log("users",customer);
      this.customers=customer;
    })
  }
}

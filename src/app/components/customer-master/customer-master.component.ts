import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {DataService} from "../../Service/data.service";
import { jsPDF } from "jspdf";
// import {PopupCreateNewComponent} from "../popup-create-new/popup-create-new.component";

// import { DataService } from '../../Service/customer.service';

@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.css'],
})
export class CustomerMasterComponent {

  @ViewChild('customer_table', {static:false}) el!:ElementRef;

  customers: any = [];
  customersSecond: any = [];
  customerSearchTerm: any = '';

  constructor(private customerService : DataService) {}

  // Name for Create new popup modal
  customerMainButtonText: string = 'Create Customer'; // Define and initialize the variable

  ngOnInit() {
      this.customerService.getCustomers().subscribe((customer)=>{
      // console.log("users",customer);
      this.customers=customer;
      this.searchCustomer();
      })
  }

  /**
   * This method is for search Customer
   */
  searchCustomer(): void {
    /**
     * According to this code
     *  if there do not enter any search character
     *    return all the customers
     *  else
     *    return customers including entered characters in their names
     */
    if (this.customerSearchTerm.trim() === '') {
      this.customersSecond = this.customers;
      return;
    }else {
      // this.customersSecond = [];
      this.customerService.setCustomerName(this.customerSearchTerm);
      // @ts-ignore
      this.customerService.searchCustomer().subscribe((customer)=>{
        // console.log("users",customer);
        this.customersSecond=customer;
        this.searchCustomer();
      })
      return;
    }
  }

  /**
   * This code help to save pdf of customers
   */
  makePDF(){
    // let pdf=new jsPDF('p','pt','a4');
    let pdf=new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: 'a4',
    });

    pdf.html(this.el.nativeElement,{
      callback: (pdf)=> {
        pdf.save("customers.pdf");
      }
    })
  }
}

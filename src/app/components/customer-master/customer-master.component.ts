import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {CustomerService} from "../../Service/customer.service";
import { jsPDF } from "jspdf";
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
  searchResults: any[] = [];

  constructor(private customerService : CustomerService) {}

  // Name for Create new popup modal
  mainButtonText: string = 'Create Customer'; // Define and initialize the variable

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
     *  if do not enter any search character
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



    // const searchTerms = this.searchTerm.split(' ');
    // // Mock data for demonstration purposes
    // // const data = ['Result 1', 'Result 2', 'Result 3', 'Result 4', 'Result 5'];

    // this.searchResults = this.customers.filter(result => {
    //   return searchTerms.every(term => result.toLowerCase().includes(term.toLowerCase()));
    // });
  }

  // const doc = new jsPDF();
  makePDF(){
    // let pdf=new jsPDF('p','pt','a4');
    let pdf=new jsPDF({
      orientation: 'landscape',
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

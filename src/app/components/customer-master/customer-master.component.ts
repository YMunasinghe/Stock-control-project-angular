import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {CustomerService} from "../../Service/customer.service";
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.css'],
})
export class CustomerMasterComponent {

  @ViewChild('customer_table', {static:false}) el!:ElementRef;

  customers: any = [];
  customersSecond: any = [];

  customerSearchTerm: string = '';
  searchResults: string[] = [];

  constructor(private customerService : CustomerService) {}

  // Name for Create new popup modal
  mainButtonText: string = 'Create Customer'; // Define and initialize the variable

  ngOnInit() {
    this.customerService.getCustomers().subscribe((customer)=>{
      console.log("users",customer);
      this.customers=customer;
      this.searchCustomer();
    })

  }

  searchCustomer(): void {
    // Implement your search logic here
    // This could involve making HTTP requests to a backend service or filtering data locally
    // For simplicity, we'll just split the search term by space and return matching results

    /**
     * have to sort by name part to do
     */
    if (this.customerSearchTerm.trim() === '') {
      this.customersSecond = this.customers;
      return;
    }else {
      this.customersSecond = [];
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

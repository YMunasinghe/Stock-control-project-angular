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

  constructor(private customerService : CustomerService) {}

  // Name for Create new popup modal
  mainButtonText: string = 'Create Customer'; // Define and initialize the variable

  ngOnInit() {
    this.customerService.getCustomers().subscribe((customer)=>{
      console.log("users",customer);
      this.customers=customer;
    })
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

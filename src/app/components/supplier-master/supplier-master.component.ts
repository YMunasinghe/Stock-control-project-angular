import {Component, ElementRef, ViewChild} from '@angular/core';
import {DataService} from "../../Service/data.service";
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-supplier-master',
  templateUrl: './supplier-master.component.html',
  styleUrls: ['./supplier-master.component.css']
})
export class SupplierMasterComponent {
  @ViewChild('supplier_table', {static:false}) el!:ElementRef;

  suppliers: any = [];
  suppliersSecond: any = [];

  // @Input() code: any;
  // @Input() customerName: any;
  // @Input() customerContactPerson: any;
  // @Input() customerMobile: any;
  // @Input() customerEmail: any;
  // @Input() customerAddress: any;

  SearchTerm: any = '';
  searchResults: any[] = [];

  constructor(private supplierService : DataService) {}

  // Name for Create new popup modal
  supplierMainButtonText: string = 'Create Supplier'; // Define and initialize the variable

  ngOnInit() {
    this.supplierService.getSuppliers().subscribe((supplier)=>{
      // console.log("users",customer);
      this.suppliers=supplier;
      this.searchSupplier();


      // if(this.code !== undefined){
      //   console.log(this.code);
      //   console.log(this.customerName);
      //   console.log(this.customerContactPerson);
      //   console.log(this.customerMobile);
      //   console.log(this.customerEmail);
      //   console.log(this.customerAddress);
      // }
    })
  }


  /**
   * This method is for search Customer
   */
  searchSupplier(): void {
    /**
     * According to this code
     *  if there do not enter any search character
     *    return all the customers
     *  else
     *    return customers including entered characters in their names
     */
    if (this.SearchTerm.trim() === '') {
      this.suppliersSecond = this.suppliers;
      return;
    }else {
      // this.customersSecond = [];
      this.supplierService.setSupplierName(this.SearchTerm);
      // @ts-ignore
      this.supplierService.searchSuppliers().subscribe((supplier)=>{
        // console.log("users",customer);
        this.suppliersSecond=supplier;
        this.searchSupplier();
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
      orientation: 'landscape',
      unit: 'pt',
      format: 'a4',
    });

    pdf.html(this.el.nativeElement,{
      callback: (pdf)=> {
        pdf.save("suppliers.pdf");
      }
    })
  }
}

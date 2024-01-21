import {Component, ElementRef, ViewChild} from '@angular/core';
import {DataService} from "../../Service/data.service";
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {

  @ViewChild('product_category_table', {static:false}) el!:ElementRef;

  productCategories: any = [];
  productCategorySecond: any = [];

  hidePriceLabel = false;

  productCategorySearchTerm: any = '';
  searchResults: any[] = [];
  // Name for Create new popup modal
  productCategoryMainButtonText: string = 'Create Product Category'; // Define and initialize the variable

  constructor(private allService : DataService) {}

  ngOnInit() {
    this.allService.getProductCategories().subscribe((productCategory)=>{
      console.log("categories",productCategory);
      this.productCategories=productCategory;
      this.searchProductCategory();
    })
  }


  /**
   * This method is for search Customer
   */
  searchProductCategory(): void {
    /**
     * According to this code
     *  if there do not enter any search character
     *    return all the customers
     *  else
     *    return customers including entered characters in their names
     */
    if (this.productCategorySearchTerm.trim() === '') {
      this.productCategorySecond = this.productCategories;
      return;
    }else {
      // this.customersSecond = [];
      this.allService.setProductCategoryName(this.productCategorySearchTerm);
      // @ts-ignore
      this.allService.searchProductCategory().subscribe((productCategory)=>{
        // console.log("users",customer);
        this.productCategorySecond=productCategory;
        this.searchProductCategory();
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

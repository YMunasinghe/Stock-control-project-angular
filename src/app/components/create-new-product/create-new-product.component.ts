import { Component } from '@angular/core';
import {DataService} from "../../Service/data.service";
import {ProductCategoryDTO} from "../../productCategory";
import {ProductDTO} from "../../product";

@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrls: ['./create-new-product.component.css']
})
export class CreateNewProductComponent {
  constructor(private dataService:DataService) {}

  productDTO : ProductDTO = new ProductDTO();

  productCodeTerm: any='';
  productNameTerm: any='';
  productDescriptionTerm: any='';
  productCategoryTerm: any='';

  // productCategorySecond: any = [];
  /**
   * use to show
   *  new customer created or not
   */
  showAfterCreated: string='';
  textColor: string='';
  productCategory: string='';
  selectedProductCategory: Array<any> = [];


  ngOnInit() {
    this.dataService.getProductCategories().subscribe((productCategories)=>{
      // console.log("users",customer);
      this.selectedProductCategory=productCategories;


      // console.log(this.selectedProductCategory);
      // this.searchCustomer();
    })
  }

  clearTheForm() {
    this.productCodeTerm='';
    this.productNameTerm='';
    this.productDescriptionTerm='';
    this.productCategoryTerm='';

    location.reload();
  }

  saveData() {

    if (this.productCodeTerm!=='' && this.productNameTerm!==''){
      const now = new Date();
      this.textColor='#03C988';
      this.showAfterCreated='Successfully Created '+this.productCodeTerm;
      setTimeout(()=>{
        this.showAfterCreated='';
      },3000);
      // if(this.codeTerm!==null){

      /**
       * code to save the product category data
       */
      this.productDTO.productCode=this.productCodeTerm;
      this.productDTO.productName=this.productNameTerm;
      this.productDTO.productDescription=this.productDescriptionTerm;
      this.productDTO.productCategory=this.productCategoryTerm;

      // this.dataService.saveProductCategory(this.productDTO)
      //   .subscribe();
      this.productCodeTerm='';
      this.productNameTerm='';
    }

    else {
      this.textColor='red';
      this.showAfterCreated='Customer details required'+this.productCodeTerm;

      setTimeout(()=>{
        this.showAfterCreated='';
      },3000);
    }
  }
}

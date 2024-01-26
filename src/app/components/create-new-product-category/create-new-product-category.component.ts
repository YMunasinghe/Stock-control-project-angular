import { Component } from '@angular/core';
import * as moment from "moment/moment";
import {ProductCategoryDTO} from "../../productCategory";
import {DataService} from "../../Service/data.service";

@Component({
  selector: 'app-create-new-product-category',
  templateUrl: './create-new-product-category.component.html',
  styleUrls: ['./create-new-product-category.component.css']
})
export class CreateNewProductCategoryComponent {

  constructor(private dataService:DataService) {}

  productCategoryDTO : ProductCategoryDTO = new ProductCategoryDTO();

  categoryCodeTerm: any='';
  categoryNameTerm: any='';

  productCategorySecond: any = [];

  /**
   * use to show
   *  new customer created or not
   */
  showAfterCreated: string='';
  textColor: string='';

  clearTheForm() {
    this.categoryCodeTerm='';
    this.categoryNameTerm='';

    location.reload();
  }

  saveData() {
    if (this.categoryCodeTerm!=='' && this.categoryNameTerm!==''){
      const now = new Date();
      // this.code.emit(this.codeTerm)
      // this.name.emit(this.nameTerm)
      // this.contactPerson.emit(this.contactPersonTerm)
      // this.mobile.emit(this.mobileTerm)
      // this.email.emit(this.emailTerm)
      // this.address.emit(this.addressTerm)

      this.textColor='#03C988';
      this.showAfterCreated='Successfully Created '+this.categoryCodeTerm;
      setTimeout(()=>{
        this.showAfterCreated='';
      },3000);
      // if(this.codeTerm!==null){

      /**
       * code to save the product category data
       */
      this.productCategoryDTO.productCategoryCode=this.categoryCodeTerm;
      this.productCategoryDTO.productCategoryName=this.categoryNameTerm;
      // this.customerDTO.customerCreatedDate=now.getDate().toString()+"-"+now.getMonth().toString()+"-"+now.getFullYear().toString();
      // this.customerDTO.customerCreatedTime=moment().format('HH:mm:ss')
      // this.customerDTO.customerUpdatedDate=now.getDate().toString()+"-"+now.getMonth().toString()+"-"+now.getFullYear().toString();
      // this.customerDTO.customerUpdatedTime=moment().format('HH:mm:ss')

        this.dataService.saveProductCategory(this.productCategoryDTO)
          .subscribe();
      this.categoryCodeTerm='';
      this.categoryNameTerm='';
      }

    else {
      this.textColor='red';
      this.showAfterCreated='Customer details required'+this.categoryCodeTerm;

      setTimeout(()=>{
        this.showAfterCreated='';
      },3000);
    }
  }
}

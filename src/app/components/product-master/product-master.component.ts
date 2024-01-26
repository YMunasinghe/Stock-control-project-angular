import { Component } from '@angular/core';
import {DataService} from "../../Service/data.service";

@Component({
  selector: 'app-product-master',
  templateUrl: './product-master.component.html',
  styleUrls: ['./product-master.component.css']
})
export class ProductMasterComponent {

  products: any = [];
  productAssignAgain:any=[];
  productSearchTerm: any='';

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.dataService.getProducts().subscribe((product)=> {
      // console.log("users",customer);
      this.products = product;
      this.searchProduct();
    })
  }

  makePDF() {

  }

  searchProduct() {
    /**
     * According to this code
     *  if there do not enter any search character
     *    return all the customers
     *  else
     *    return customers including entered characters in their names
     */
    if (this.productSearchTerm.trim() === '') {
      this.productAssignAgain = this.products;
      return;
    }else {
      // this.customersSecond = [];
      this.dataService.setProductName(this.productSearchTerm);
      // @ts-ignore
      this.dataService.searchProduct().subscribe((product)=>{
        // console.log("users",customer);
        this.productAssignAgain=product;
        this.searchProduct();
      })
      return;
    }


  }
}
